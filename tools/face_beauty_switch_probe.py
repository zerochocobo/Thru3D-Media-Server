"""Exercise RM cancellation -> FaceBeauty with real GPU fillers and one Matter.

Run with the project Python, for example:
  python tools/face_beauty_switch_probe.py --video videos/test_4k.mp4 --cycles 3
Regenerable payloads, a log and JSON results go under build/. No HTTP server is
started; the same filler worker, predecessor handover and Matter pool are used.
"""
from __future__ import annotations

import argparse
from datetime import datetime
import json
import logging
import os
from pathlib import Path
import sys
import threading
import time
from types import SimpleNamespace

ROOT = Path(__file__).absolute().parents[1]
sys.path.insert(0, str(ROOT))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--video", type=Path, required=True)
    parser.add_argument("--cycles", type=int, default=3)
    parser.add_argument("--frames", type=int, default=96)
    parser.add_argument("--cancel-after", type=int, default=9)
    parser.add_argument("--max-fps", type=float, default=60)
    parser.add_argument("--timeout", type=float, default=120)
    parser.add_argument("--output-dir", type=Path)
    args = parser.parse_args()
    if args.cycles < 1 or not 1 <= args.cancel_after < args.frames or args.timeout <= 0 or args.max_fps <= 0:
        parser.error("require cycles >= 1, 1 <= cancel-after < frames, timeout/max-fps > 0")
    video = args.video.absolute()
    if not video.is_file():
        parser.error("video does not exist")
    output = args.output_dir or ROOT / "build" / ("face-beauty-switch-" + datetime.now().strftime("%Y%m%d-%H%M%S"))
    output.mkdir(parents=True, exist_ok=True)
    # Never overwrite results/payloads from an earlier run.
    if any(output.iterdir()):
        parser.error("output-dir must be empty")
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s",
                        handlers=[logging.StreamHandler(), logging.FileHandler(output / "probe.log", encoding="utf-8")])
    log = logging.getLogger("switch_probe")

    from ui.services.process_helpers import base_environment
    os.environ.update(base_environment())
    # RVM only supplies the pooled Matter here; avoid an unrelated RVM engine
    # build after a driver upgrade. RM/FaceBeauty retain production providers.
    os.environ["PT_ONNX_PROVIDERS"] = "CUDAExecutionProvider,CPUExecutionProvider"
    from utils.gpu_runtime_cache import configure_gpu_runtime_cache
    configure_gpu_runtime_cache()
    import config
    import cupy as cp
    import onnxruntime as ort
    from http_app import routes_media as routes
    from pipeline.matting import acquire_matter, configure_matter_pool, release_matter
    from pipeline.seek_effects import effect_settings
    from utils.video_metadata import probe_video_metadata

    # A fixed encoder budget isolates GPU handover from source-bitrate probing.
    config.PASSTHROUGH_HEVC_SOURCE_MAX_MULTIPLIER = 0
    config.PASSTHROUGH_MAX_FPS = args.max_fps
    configure_matter_pool(1, warmup_runs=0)
    matter = acquire_matter(timeout=30)
    if matter is None:
        raise RuntimeError("Matter initialization timed out")
    try:
        if "CUDAExecutionProvider" not in matter.sess.get_providers():
            raise RuntimeError("CUDA provider is not active; refusing a CPU-only probe")
    finally:
        release_matter(matter)
    meta = probe_video_metadata(video)
    if not meta.timing.is_cfr:
        raise RuntimeError("probe requires a CFR video")
    frame_count = min(args.frames, int(meta.timing.duration * meta.timing.effective_fps(config.PASSTHROUGH_MAX_FPS)))
    if frame_count <= args.cancel_after:
        raise RuntimeError("source too short for requested cancellation point")
    results = {"gpu": cp.cuda.runtime.getDeviceProperties(0)["name"].decode(),
               "cupy": cp.__version__, "onnxruntime": ort.__version__, "runs": []}
    previous = None
    workers = []
    try:
        for cycle in range(args.cycles):
            for mode in ("rm", "face_beauty"):
                cache = output / f"cycle-{cycle + 1}-{mode}"
                cache.mkdir()
                layout = SimpleNamespace(source_path=video, frame_count=frame_count, nal_length_size=4,
                                         fps=meta.timing.effective_fps(config.PASSTHROUGH_MAX_FPS),
                                         frames=[SimpleNamespace(budget=1_000_000)] * frame_count,
                                         source_budget=False, processing_settings=effect_settings(mode, video))
                filler = routes._Vmp4FramesFiller(digest=cache.name, cache_dir=cache, output_mode=mode)
                worker = threading.Thread(target=routes._vmp4_frames_filler_worker,
                                          args=(filler, layout, previous), daemon=True)
                workers.append(filler)
                begin = time.monotonic()
                worker.start()
                while not filler.done_event.is_set():
                    if mode == "rm" and filler.cursor >= args.cancel_after:
                        # Launch the replacement immediately; its worker must
                        # wait until the predecessor has actually released GPU resources.
                        filler.stop_event.set()
                        break
                    if time.monotonic() - begin > args.timeout:
                        raise TimeoutError(f"{mode} did not finish: cursor={filler.cursor} reason={filler.reason}")
                    time.sleep(0.02)
                if filler.state == "failed":
                    raise RuntimeError(filler.reason)
                if mode == "face_beauty" and filler.cursor != frame_count:
                    raise RuntimeError(f"incomplete beauty output: {filler.cursor}/{frame_count}")
                if not (cache / "frame_000000.bin").is_file():
                    raise RuntimeError(f"{mode} did not produce its first frame")
                results["runs"].append({"cycle": cycle + 1, "mode": mode, "cursor": filler.cursor,
                                         "state": filler.state, "elapsed_sec": round(time.monotonic() - begin, 3)})
                log.info("run %s", results["runs"][-1])
                previous = filler
        cp.cuda.Device().synchronize()
        results["ok"] = True
    except Exception as exc:
        results.update(ok=False, error=f"{type(exc).__name__}: {exc}")
        log.exception("GPU switch probe failed")
    finally:
        for filler in workers:
            filler.stop_event.set()
        for filler in workers:
            filler.done_event.wait(timeout=5)
        (output / "result.json").write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    return 0 if results["ok"] else 1


if __name__ == "__main__":
    raise SystemExit(main())

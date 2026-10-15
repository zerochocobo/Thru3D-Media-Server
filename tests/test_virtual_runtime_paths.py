from __future__ import annotations

import os
import runpy
import sys
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

import config
from http_app import routes_media
from offline.sam3_matanyone2 import Sam3TextMasker
from pipeline import passthrough_vmp4_slot as slots
from tools import offline_alpha_passthrough, offline_passthrough
from ui.services import process_helpers
from utils import gpu_cache_repair, gpu_runtime_cache, rtx_vsr, runtime_dll_paths, trt_manifest


class VirtualRuntimePathTests(unittest.TestCase):
    def setUp(self) -> None:
        build_dir = Path("build/tests/virtual-runtime-paths")
        build_dir.mkdir(parents=True, exist_ok=True)
        temp = tempfile.TemporaryDirectory(dir=build_dir)
        self.addCleanup(temp.cleanup)
        self.root = Path(os.path.abspath(temp.name))
        self.src = self.root / "映射盘 视频.mp4"
        self.src.write_bytes(b"source")
        original_resolve = Path.resolve

        def resolve(path, *args, **kwargs):
            absolute = Path(os.path.abspath(path))
            if absolute == self.root or self.root in absolute.parents:
                raise OSError(22, "Unrecognized volume", str(path), 1005)
            return original_resolve(path, *args, **kwargs)

        self.enterContext(patch.object(Path, "resolve", autospec=True, side_effect=resolve))

    def test_frozen_config_accepts_mapped_install_and_custom_runtime_paths(self) -> None:
        names = (
            "REQUEST_HISTORY_DIR", "MODEL_PATH", "ONNX_TRT_ENGINE_CACHE_PATH",
            "RUNTIME_CACHE_DIR", "CUDA_CACHE_PATH", "CUPY_CACHE_DIR", "ORT_CACHE_DIR",
            "GPU_WARMUP_MARKER", "GPU_WARMUP_LOCK", "RUNTIME_TMP_DIR",
            "BITRATE_ESTIMATES", "LIBRARY_INDEX_DB", "PASSTHROUGH_AUDIO_MPEGTS_CACHE_DIR",
        )
        env = {f"PT_{name}": str(self.root / name.lower()) for name in names}
        with (
            patch.object(sys, "frozen", True, create=True),
            patch.object(sys, "executable", str(self.root / "Thru3D.exe")),
            patch.dict(os.environ, env),
        ):
            loaded = runpy.run_path(config.__file__)
        self.assertEqual(loaded["ROOT"], self.root)
        for name in names:
            with self.subTest(name=name):
                self.assertEqual(loaded[name], self.root / name.lower())

    def test_preconverted_media_candidate_on_mapped_drive(self) -> None:
        cached = self.root / "cached.mp4"
        cached.touch()
        with patch.object(routes_media, "_vmp4_mode_candidate_stems", return_value=["cached"]):
            self.assertEqual(routes_media._vmp4_mode_candidate(self.src, "green", None), cached)

    def test_slot_cache_digest_tracks_mapped_source_changes(self) -> None:
        layout = SimpleNamespace(
            source_path=self.src, total_size=100, slot_count=1, slot_size=50,
            slot_stride=50, slot_gap_size=0, slot_duration_sec=1,
            source_codec_name="hevc", codec_name="hevc", nal_length_size=4,
            output_stsd_sha256="test", placeholder_payload=b"payload",
        )
        before = slots._slot_cache_digest(layout, output_mode="green", fps=30, gop_frames=30)
        self.src.write_bytes(b"updated source")
        after = slots._slot_cache_digest(layout, output_mode="green", fps=30, gop_frames=30)
        self.assertNotEqual(before, after)

    def test_slot_manifest_aliases_share_a_write_lock(self) -> None:
        path = self.root / "manifest.json"
        alias = self.root / "child" / ".." / "manifest.json"
        self.assertIs(slots._manifest_write_lock(path), slots._manifest_write_lock(alias))

    def test_gpu_cache_directories_can_be_initialized_on_mapped_drive(self) -> None:
        names = ("RUNTIME_CACHE_DIR", "CUDA_CACHE_PATH", "CUPY_CACHE_DIR", "ORT_CACHE_DIR", "GPU_WARMUP_MARKER", "RUNTIME_TMP_DIR")
        with patch.dict(os.environ):
            for name in names:
                self.enterContext(patch.object(config, name, self.root / name.lower()))
            result = gpu_runtime_cache.configure_gpu_runtime_cache()
            self.assertEqual(result.runtime_cache_dir, str(self.root / "runtime_cache_dir"))
            self.assertEqual(os.environ["CUDA_CACHE_PATH"], str(self.root / "cuda_cache_path"))
            self.assertTrue((self.root / "runtime_tmp_dir").is_dir())

    def test_trt_model_and_cache_selection_preserves_mapped_paths(self) -> None:
        with patch.object(config, "ROOT", self.root), patch.object(config, "ONNX_TRT_ENGINE_CACHE_PATH", self.root / "trt"):
            self.assertEqual(trt_manifest.cache_dir_for_model("rvm", scope="offline"), self.root / "trt" / "offline")
            for size in (512, 1024):
                with self.subTest(size=size):
                    key = f"matanyone2_onnx_{size}_bs1"
                    model = self.root / "models" / key
                    self.assertEqual(trt_manifest.matanyone2_model_dir(size), model)
                    self.assertEqual(trt_manifest.matanyone2_model_key_for_dir(model), key)
                    self.assertEqual(trt_manifest.matanyone2_trt_cache_dir_for_model_dir(model), self.root / "trt" / "matanyone2" / key)

    @unittest.skipUnless(os.name == "nt", "Windows NVRTC path encoding")
    def test_unicode_gpu_compiler_temp_uses_a_writable_ascii_directory(self) -> None:
        requested = self.root / "中文编译缓存"
        names = ("RUNTIME_CACHE_DIR", "CUDA_CACHE_PATH", "CUPY_CACHE_DIR", "ORT_CACHE_DIR", "GPU_WARMUP_MARKER")
        for name in names:
            self.enterContext(patch.object(config, name, self.root / name.lower()))
        with (
            patch.object(config, "ROOT", self.root),
            patch.object(config, "RUNTIME_TMP_DIR", requested),
            patch.dict(os.environ),
        ):
            gpu_runtime_cache.configure_gpu_runtime_cache()
            actual = config.RUNTIME_TMP_DIR
            self.assertEqual(os.environ["TMP"], str(actual))
            # The offline CuPy workaround must consume the selected path.
            for tool in (offline_passthrough, offline_alpha_passthrough):
                with patch.object(tempfile, "TemporaryDirectory", tempfile.TemporaryDirectory):
                    tool._patch_tempdir()
                    with tempfile.TemporaryDirectory() as directory:
                        self.assertEqual(Path(directory), actual)
        self.assertTrue(str(actual).isascii())
        self.assertTrue(actual.is_dir())
        self.assertFalse(requested.exists())
        (actual / "probe.cu").write_text("// writable", encoding="ascii")

    def test_both_offline_tools_accept_custom_models_on_mapped_drive(self) -> None:
        model_dir = self.root / "models"
        model_dir.mkdir()
        for tool in (offline_passthrough, offline_alpha_passthrough):
            with self.subTest(tool=tool.__name__):
                self.assertEqual(tool._resolve_matanyone2_model_dir(SimpleNamespace(model=str(model_dir))), model_dir)
                with patch.object(config, "ONNX_PROVIDERS", ["CUDAExecutionProvider", "CPUExecutionProvider"]):
                    self.assertFalse(tool._configure_offline_rvm_tensorrt(self.root / "rvm.onnx"))

    def test_sam3_tokenizer_lookup_accepts_mapped_resources(self) -> None:
        directory = self.root / "runtime_cache" / "clip_text_onnx"
        directory.mkdir(parents=True)
        vocab, merges, bpe = [directory / name for name in ("vocab.json", "merges.txt", "bpe.gz")]
        vocab.write_text("{}", encoding="utf-8")
        merges.write_text("", encoding="utf-8")
        self.assertEqual(Sam3TextMasker._clip_tokenizer_paths(vocab, merges, bpe), (vocab, merges, None))

    def test_vsr_runtime_candidate_is_retained_on_mapped_drive(self) -> None:
        sdk = self.root / "vsr-sdk"
        with patch.dict(os.environ, {"PT_RTX_VSR_SDK_DIR": str(sdk)}):
            self.assertIn(sdk, rtx_vsr.runtime_candidates())

    def test_frozen_child_command_and_dll_search_accept_mapped_install(self) -> None:
        core = self.root / "pt_core.exe"
        core.touch()
        internal = self.root / "_internal"
        internal.mkdir()
        with patch.object(sys, "frozen", True, create=True), patch.object(sys, "executable", str(self.root / "Thru3D.exe")):
            self.assertEqual(process_helpers.server_command(), (str(core), []))
            env = runtime_dll_paths.apply_runtime_dll_paths({"PATH": ""})
            self.assertIn(str(internal), env["PATH"].split(os.pathsep))

    def test_cache_quarantine_works_and_unverified_deletion_retains_data(self) -> None:
        cache = self.root / "cupy"
        cache.mkdir()
        (cache / "generated.bin").write_bytes(b"cache")
        result = gpu_cache_repair.quarantine_gpu_caches(self.root, stamp="test")
        self.assertEqual(result.errors, ())
        self.assertEqual(result.moved, ("cupy",))
        with self.assertRaises(OSError):
            gpu_cache_repair.discard_quarantine(result.quarantine_dir)
        self.assertEqual((result.quarantine_dir / "cupy" / "generated.bin").read_bytes(), b"cache")


if __name__ == "__main__":
    unittest.main()

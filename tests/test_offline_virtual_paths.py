from __future__ import annotations

import io
import os
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

import offline.convert as convert
from tools import offline_alpha_passthrough, offline_passthrough


class OfflineVirtualPathTests(unittest.TestCase):
    def setUp(self) -> None:
        build_dir = Path("build/tests/offline-virtual-paths")
        build_dir.mkdir(parents=True, exist_ok=True)
        temp = tempfile.TemporaryDirectory(dir=build_dir)
        self.addCleanup(temp.cleanup)
        self.root = Path(os.path.abspath(temp.name))
        self.src = self.root / "115 映射盘 [VR]" / "测试视频.mp4"
        self.src.parent.mkdir()
        self.src.write_bytes(b"source")
        self.output_dir = self.root / "输出目录"
        self.explicit_out = self.output_dir / "指定输出.mp4"

        original_resolve = Path.resolve

        def virtual_resolve(path, *args, **kwargs):
            absolute = Path(os.path.abspath(path))
            if absolute == self.root or self.root in absolute.parents:
                raise OSError(22, "Unrecognized volume", str(path), 1005)
            return original_resolve(path, *args, **kwargs)

        self.enterContext(patch.object(Path, "resolve", autospec=True, side_effect=virtual_resolve))
        self.enterContext(patch.object(convert.sys, "stdout", io.StringIO()))
        self.enterContext(patch.object(convert, "detect_nvidia_gpu_requirement", return_value=SimpleNamespace(detected=False)))
        self.enterContext(patch.object(convert, "probe_video_metadata", return_value=SimpleNamespace(
            timing=SimpleNamespace(duration=60.0),
            codec=SimpleNamespace(width=3840, height=1920),
            color=SimpleNamespace(),
        )))
        self.enterContext(patch.object(convert, "select_backend", return_value=SimpleNamespace(verdict="pynv_hevc")))
        self.enterContext(patch.object(convert, "_print_warmup_notice"))
        self.enterContext(patch.object(convert, "_offline_child_env", return_value={}))

    def output_cases(self, mode, segments=False):
        if segments:
            expected = convert._single_segments_out(
                self.src, SimpleNamespace(mode=mode, engine="rvm_fast"), [(0, 1), (2, 3)], 3840, 1920,
            )
        else:
            expected = convert._single_out(
                self.src, SimpleNamespace(mode=mode, engine="rvm_fast", start=0, duration=0), 3840, 1920,
            )
        return (
            ([], expected),
            (["--out", str(self.explicit_out)], self.explicit_out),
            (["--out-dir", str(self.output_dir)], self.output_dir / expected.name),
        )

    def test_single_dispatches_mapped_source_and_output_to_child(self) -> None:
        for mode in ("green", "alpha"):
            for options, expected in self.output_cases(mode):
                with self.subTest(mode=mode, options=options), patch.object(convert, "run_hidden_streaming", return_value=0) as run:
                    rc = convert.main(["single", str(self.src), "--mode", mode, *options])
                    self.assertEqual(rc, 0)
                    cmd = run.call_args.args[0]
                    self.assertIn(str(self.src), cmd)
                    self.assertEqual(Path(cmd[cmd.index("--out") + 1]), expected)
                    self.assertTrue(expected.parent.is_dir())

    def test_single_preserves_child_failure_code(self) -> None:
        with patch.object(convert, "run_hidden_streaming", return_value=7):
            self.assertEqual(convert.main(["single", str(self.src)]), 7)

    def test_batch_scans_mapped_directory_and_converts_only_sources(self) -> None:
        (self.src.parent / "old_passthrough.mp4").touch()
        (self.src.parent / "old.partial.123.mp4").touch()
        for mode in ("green", "alpha"):
            with self.subTest(mode=mode), patch.object(convert, "_run_one", return_value=0) as run:
                self.assertEqual(convert.main(["batch", str(self.root), "--mode", mode]), 0)
                run.assert_called_once()
                self.assertEqual(run.call_args.args[1], self.src)

    def test_segments_convert_concat_and_publish_on_mapped_output(self) -> None:
        def fake_convert(args, src):
            self.assertEqual(src, self.src)
            Path(args.out).write_bytes(b"segment")
            return 0

        def fake_ffmpeg(cmd, **kwargs):
            manifest = Path(cmd[cmd.index("-i") + 1])
            lines = manifest.read_text(encoding="utf-8").splitlines()
            self.assertEqual(len(lines), 2)
            for line in lines:
                part = Path(line[len("file '"):-1])
                self.assertEqual(part.read_bytes(), b"segment")
            Path(cmd[-1]).write_bytes(b"finished")
            return SimpleNamespace(returncode=0, stdout="", stderr="")

        for mode in ("green", "alpha"):
            for options, expected in self.output_cases(mode, segments=True):
                with (
                    self.subTest(mode=mode, options=options),
                    patch.object(convert, "_run_one", side_effect=fake_convert),
                    patch.object(convert.subprocess, "run", side_effect=fake_ffmpeg),
                ):
                    rc = convert.main([
                        "single", str(self.src), "--mode", mode,
                        "--segment", "0-1", "--segment", "2-3", *options,
                    ])
                    self.assertEqual(rc, 0)
                    self.assertEqual(expected.read_bytes(), b"finished")
                    self.assertEqual(list(expected.parent.glob(".*_segments_*")), [])
                    self.assertEqual(list(expected.parent.glob("*.partial.*")), [])
                    expected.unlink()

    def test_both_conversion_tools_accept_mapped_sources(self) -> None:
        relative_source = self.src.relative_to(Path.cwd())
        for tool in (offline_passthrough, offline_alpha_passthrough):
            with self.subTest(tool=tool.__name__), patch.object(tool.config, "VIDEO_DIR", self.src.parent):
                for value in (str(self.src), str(relative_source), self.src.name):
                    with self.subTest(value=value):
                        self.assertEqual(tool._resolve_video(value), self.src)


if __name__ == "__main__":
    unittest.main()

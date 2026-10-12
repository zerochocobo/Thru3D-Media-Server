from __future__ import annotations

import unittest
from unittest.mock import patch

from pipeline import matting
from pipeline.matting import _should_enable_rvm_iobinding


class MattingRuntimePolicyTests(unittest.TestCase):
    def test_rvm_iobinding_enabled_for_cuda_only(self) -> None:
        self.assertTrue(_should_enable_rvm_iobinding(["CUDAExecutionProvider", "CPUExecutionProvider"]))

    def test_rvm_iobinding_disabled_when_tensorrt_is_active(self) -> None:
        self.assertFalse(
            _should_enable_rvm_iobinding(
                ["TensorrtExecutionProvider", "CUDAExecutionProvider", "CPUExecutionProvider"]
            )
        )

    def test_rvm_iobinding_can_be_enabled_for_tensorrt_experiment(self) -> None:
        with patch.object(matting, "TRT_RVM_IOBINDING", True):
            self.assertTrue(
                _should_enable_rvm_iobinding(
                    ["TensorrtExecutionProvider", "CUDAExecutionProvider", "CPUExecutionProvider"]
                )
            )

    def test_rvm_iobinding_disabled_without_cuda(self) -> None:
        self.assertFalse(_should_enable_rvm_iobinding(["CPUExecutionProvider"]))


if __name__ == "__main__":
    unittest.main()


class RvmStartPrimeTests(unittest.TestCase):
    def _matter(self, kind: str = "rvm") -> matting.Matter:
        m = matting.Matter(load_model=False)
        m.model_kind = kind
        return m

    def test_prime_runs_requested_passes_once(self) -> None:
        m = self._matter()
        m.reset_state(prime_frames=3)
        calls: list[int] = []
        m._prime_rvm_state(lambda: calls.append(1))
        m._prime_rvm_state(lambda: calls.append(1))
        self.assertEqual(len(calls), 3)

    def test_default_reset_does_not_prime(self) -> None:
        m = self._matter()
        m.reset_state(prime_frames=3)
        m.reset_state()
        calls: list[int] = []
        m._prime_rvm_state(lambda: calls.append(1))
        self.assertEqual(calls, [])

    def test_non_recurrent_model_is_not_primed(self) -> None:
        m = self._matter("rmbg")
        m.reset_state(prime_frames=3)
        calls: list[int] = []
        m._prime_rvm_state(lambda: calls.append(1))
        self.assertEqual(calls, [])

from __future__ import annotations

import numpy as np
import pytest

from pipeline.pynv_io import CudaPlane, GpuNv12Frame, GpuP016Frame


@pytest.fixture(scope="module")
def cp():
    cupy = pytest.importorskip("cupy")
    try:
        count = cupy.cuda.runtime.getDeviceCount()
    except cupy.cuda.runtime.CUDARuntimeError as exc:
        pytest.skip(f"CUDA unavailable: {exc}")
    if not count:
        pytest.skip("CUDA GPU unavailable")
    return cupy


@pytest.mark.parametrize("frame_cls,dtype", [(GpuNv12Frame, "uint8"), (GpuP016Frame, "uint16")])
@pytest.mark.parametrize("padding", [0, 16])
@pytest.mark.parametrize("interleaved_uv", [False, True])
def test_owned_frame_survives_decoder_surface_reuse(cp, frame_cls, dtype, padding, interleaved_uv):
    h, w = 8, 16
    y = cp.arange(h * (w + padding), dtype=dtype).reshape(h, w + padding)[:, :w]
    uv = cp.arange(h // 2 * (w + padding), dtype=dtype).reshape(h // 2, w + padding)[:, :w]
    if interleaved_uv:
        uv = uv.reshape(h // 2, w // 2, 2)
    frame = frame_cls((y, uv), CudaPlane.from_cupy_array(y), CudaPlane.from_cupy_array(uv), w, h, 42)
    expected_y, expected_uv = y.get(), uv.get().reshape(h // 2, w)
    owned = frame.owned_copy()

    assert owned.y.ptr != frame.y.ptr
    assert owned.uv.ptr != frame.uv.ptr
    # The next decoder batch can overwrite both planes, even while Python
    # objects referencing the old DecodedFrame still exist.
    y.fill(0)
    uv.fill(0)
    assert np.array_equal(owned.y.as_cupy().get(), expected_y)
    assert np.array_equal(owned.uv.as_cupy().get(), expected_uv)
    assert owned.pts == 42


@pytest.mark.parametrize("x,y", [(-2.25, 0), (0, -2.25), (-2.25, -2.25), (5.25, 0), (0, 5.25)])
def test_face_warp_clamps_all_bilinear_taps(cp, x, y):
    from offline.face_beauty_gpu import _KERNEL_SRC

    kernel = cp.RawModule(code=_KERNEL_SRC).get_function("warp_affine_u8")
    # Guard bytes turn out-of-bounds *image* reads into an observable colour
    # error without allowing an illegal allocation read to poison CUDA.
    storage = cp.full(1024, 200, cp.uint8)
    src = storage[256:256 + 4 * 4 * 3].reshape(4, 4, 3)
    src.fill(100)
    dst = cp.empty((1, 1, 3), cp.uint8)
    matrix = cp.asarray([1, 0, x, 0, 1, y], cp.float32)
    kernel((1, 1, 1), (16, 16, 1),
           (src, dst, matrix, np.int32(4), np.int32(4), np.int32(1), np.int32(1)))
    assert np.array_equal(dst.get(), np.full((1, 1, 3), 100, np.uint8))


@pytest.mark.parametrize("supersample", [1, 2])
@pytest.mark.parametrize("yaw", [-85, 85])
@pytest.mark.parametrize("eye_x0", [0, 12])
def test_vr_flat_view_samples_stay_inside_the_selected_eye(cp, yaw, supersample, eye_x0):
    from pipeline.vr_reproject import VrReprojector

    storage = cp.full(8192, 200, cp.uint8)
    src = storage[2048:2048 + 12 * 24 * 3].reshape(12, 24, 3)
    src[:, :12].fill(100)
    src[:, 12:].fill(60)
    result = VrReprojector(cp).to_flat(src, yaw, 0, 100, 16, 16,
                                     eye_origin=(eye_x0, 0), eye_size=(12, 12), supersample=supersample)
    expected = 100 if eye_x0 == 0 else 60
    assert np.array_equal(result.get(), np.full((16, 16, 3), expected, np.uint8))

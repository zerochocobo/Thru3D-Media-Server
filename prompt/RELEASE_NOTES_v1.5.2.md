# Thru3D Media Server v1.5.2

## English

- **Mapped cloud-drive compatibility:** Fixed WinError 1005 when reading or writing videos on mapped drives such as 115. The path fix covers single-file, batch, and segmented offline conversion, including Green and Alpha output, and extends to media-library playback, subtitles, model loading, and runtime caches.
- **GPU compilation with Chinese paths:** Fixed GPU kernel compilation failures caused by Chinese or other non-ASCII characters in temporary paths. Windows now automatically selects a writable ASCII path for compiler temporary files.
- **Face Beauty and VR stability:** Fixed out-of-bounds GPU sampling in face crops and VR reprojection, corrected ownership of copied 8-bit / 10-bit decoder frames, and fixed CUDA stream handling. These changes address defects that could cause CUDA illegal-memory-access errors during processing.
- **Better playback diagnostics:** Virtual MP4 frame-generation failures now log the playback mode, frame position, and full error traceback, making playback failures easier to diagnose.

**Upgrade note:** Close the application and server before updating. Extract the update package over the matching full installation, then launch `Thru3D_Media_Server.exe`. Existing settings are preserved.

See [CHANGELOG.md](https://github.com/zerochocobo/Thru3D-Media-Server/blob/master/CHANGELOG.md) for the detailed history. Website: [thru3d.com](https://thru3d.com).

## 中文

- **映射云盘兼容性修复：** 修复从 115 等映射盘读取或写入视频时出现的 WinError 1005。覆盖单文件、批量、多片段离线转换及绿幕／Alpha 输出，并将路径兼容处理扩展到媒体库播放、字幕、模型加载与运行缓存。
- **修复中文路径下的 GPU 编译：** 修复临时路径包含中文或其他非 ASCII 字符时的 GPU 内核编译失败。Windows 会自动为编译临时文件选择可写的 ASCII 路径。
- **提升美颜与 VR 处理稳定性：** 修复人脸裁剪和 VR 重投影中的 GPU 越界采样，修正 8bit／10bit 解码帧复制的显存所有权及 CUDA 流处理，解决可能导致处理过程中 GPU 非法内存访问的缺陷。
- **完善播放故障诊断：** 虚拟 MP4 视频帧生成失败时，日志增加播放模式、当前帧位置与完整异常堆栈，便于定位播放失败原因。

**升级提示：** 更新前关闭软件与服务器，将更新包覆盖到对应的完整安装目录，再启动 `Thru3D_Media_Server.exe`。现有设置继续保留。

完整更新历史见 [CHANGELOG.md](https://github.com/zerochocobo/Thru3D-Media-Server/blob/master/CHANGELOG.md)。官网：[thru3d.com](https://thru3d.com)。

# Thru3D Media Server v1.5.0

## English

- **Product rename:** VR Video Passthrough Server is now **Thru3D Media Server** (Chinese: **Thru3D媒体服务器**, formerly **VR视频透视服务器**). Updated application titles, the default DLNA server name, documentation, and product images. The Windows executable is now **`Thru3D_Media_Server.exe`**, and the full package folder is named `Thru3D_Media_Server`.
- **Thru3D Media Player compatibility:** Added the player to the compatibility table. Player and Server are separate applications that can also work together; choose **Alpha passthrough** when streaming to Thru3D Media Player. The server continues to provide green-screen output for other compatible players.
- **Offline VR source selection:** Single-file and batch passthrough conversion now offer Auto Detect, VR180, and Fisheye modes. Fisheye FOV supports 140°–280° in 10° steps, including 180°, 190°, and 200°. Manual selection overrides filename detection, and output names reflect the selected projection.
- **Improved DLNA external subtitles:** Improved discovery and delivery of same-stem SRT, ASS, SSA, and WebVTT files, including language suffixes. Fixed matching for mixed-case and bracketed filenames, subtitle-cache refresh after file changes, and subtitle metadata for individual videos. External subtitles work independently of realtime subtitle burning; display and track selection depend on the player.
- **Updated website and documentation:** Refreshed the Chinese, English, and Japanese website and product documentation to introduce Thru3D Media Player and Thru3D Media Server separately.

**Upgrade note:** Close the application and server before updating. Extract an update package over the matching full installation, then launch **`Thru3D_Media_Server.exe`** and update old shortcuts. The old `VR_Video_Passthrough_Server.exe` is not automatically removed. Settings remain in `runtime_cache/ui_settings.json`; copy this file if moving to a new folder. Custom DLNA server names are preserved.

See [CHANGELOG.md](https://github.com/zerochocobo/Thru3D-Media-Server/blob/master/CHANGELOG.md) for the detailed history. Website: [wapok.com](https://wapok.com).

## 中文

- **产品更名：** “VR视频透视服务器”（VR Video Passthrough Server）正式更名为 **“Thru3D媒体服务器”（Thru3D Media Server）**。同步更新软件标题、默认 DLNA 名称、文档与产品图片。Windows 启动程序改为 **`Thru3D_Media_Server.exe`**，完整包目录名改为 `Thru3D_Media_Server`。
- **Thru3D Media Player 兼容信息：** 兼容表加入该播放器。Player 与 Server 是两款独立软件，也可搭配使用；向 Thru3D Media Player 推送透视视频时请选择 **Alpha 透视**，服务器继续为其他兼容播放器提供绿幕输出。
- **离线透视新增原始 VR 模式：** 单文件与批量转换可选择自动识别、180VR、鱼眼。鱼眼角度支持 140°–280°，每档 10°，包含 180°、190°、200°等常见角度。手动选择可覆盖文件名识别，生成文件名同步反映所选投影。
- **增强 DLNA 外挂字幕兼容性：** 完善同名 SRT、ASS、SSA、WebVTT 及语言后缀字幕的发现与下发。修复大小写混用、方括号文件名匹配、字幕文件变动后的缓存刷新，以及单个视频的字幕元数据。外挂字幕独立于实时字幕烧录开关，显示与字幕切换取决于播放器支持情况。
- **更新官网与文档：** 中、英、日三语官网和产品文档同步更新，分别介绍 Thru3D Media Player 与 Thru3D媒体服务器。

**升级提示：** 更新前关闭软件与服务器。更新包请覆盖到对应的完整安装目录，之后启动 **`Thru3D_Media_Server.exe`** 并更新旧快捷方式；旧的 `VR_Video_Passthrough_Server.exe` 不会自动删除。设置仍保存在 `runtime_cache/ui_settings.json`，迁移到新目录时可复制该文件，自定义 DLNA 名称继续保留。

完整更新历史见 [CHANGELOG.md](https://github.com/zerochocobo/Thru3D-Media-Server/blob/master/CHANGELOG.md)。官网：[wapok.com](https://wapok.com)。

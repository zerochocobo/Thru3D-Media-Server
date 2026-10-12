# Thru3D Media Server v1.5.1

## English

- **Steadier Alpha matte at playback start:** The person matte no longer flickers for a while after starting or seeking. Realtime live and virtual-file playback now warm up the matting model on the first frame before output begins, reducing first-frame matte error by about 60% for a one-time cost of roughly 0.3–0.5 seconds at start-up. Advanced users can tune this with `PT_RVM_START_PRIME_FRAMES` (default 16; 0 disables).
- **Thru3D Media Player compatibility:** Virtual MP4 and live playback now work with the updated Thru3D Media Player. The fixes are in the player (virtual MP4 previously stopped after a few seconds and live playback could not start); please update the player as well. This server version needs no extra settings.
- **New website address:** The project link on the dashboard now points to [thru3d.com](https://thru3d.com).

**Upgrade note:** Close the application and server before updating, then extract the update package over the matching full installation. Settings in `runtime_cache/ui_settings.json` are preserved.

See [CHANGELOG.md](https://github.com/zerochocobo/Thru3D-Media-Server/blob/master/CHANGELOG.md) for the detailed history. Website: [thru3d.com](https://thru3d.com).

## 中文

- **Alpha 透视起播更稳定：** 起播或跳转后人物遮罩不再闪烁一阵子。在线与虚拟文件播放会在输出前先用首帧预热抠像模型，首帧遮罩误差降低约六成，仅在起播时一次性增加约 0.3–0.5 秒。高级用户可通过 `PT_RVM_START_PRIME_FRAMES` 调整（默认 16，0 为关闭）。
- **Thru3D Media Player 兼容：** 配合新版 Thru3D Media Player，虚拟 MP4 与 live 模式均可正常播放。问题修复在播放器端（此前虚拟 MP4 播放数秒即停、live 无法起播），请同时更新播放器；本服务器版本无需额外设置。
- **官网地址更新：** 管理页的官网链接改为 [thru3d.com](https://thru3d.com)。

**升级提示：** 更新前关闭软件与服务器，再将更新包覆盖到对应的完整安装目录。`runtime_cache/ui_settings.json` 中的设置继续保留。

完整更新历史见 [CHANGELOG.md](https://github.com/zerochocobo/Thru3D-Media-Server/blob/master/CHANGELOG.md)。官网：[thru3d.com](https://thru3d.com)。

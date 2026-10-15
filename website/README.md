# Thru3D 官网

`website/` 是可直接部署的静态站点，无构建步骤、无第三方字体或前端依赖。入口 `index.html`；已发布隐私政策始终保留 `privacy.html`。

## 本地预览

在仓库根目录运行：

```powershell
python -m http.server 8785 --bind 127.0.0.1 --directory website
```

打开 http://127.0.0.1:8785/ 。中英日可通过语言按钮切换，或使用 `?lang=en`、`?lang=zh`、`?lang=ja`；语言偏好与隐私页共享。

## 产品与发布入口

- Player 与 Server 是独立产品，可通过局域网 DLNA 配合；Player 的服务器透视流使用 Alpha。
- Player Meta 商店：https://www.meta.com/experiences/thru3d-media-player/2508393509572009 。当前状态等待上线，不提供虚构 APK 链接。
- Player 源码：https://github.com/zerochocobo/Thru3D-Media-Player 。QUEST、PICO、实验性 OpenXR 分别展示，不将单设备测试当成全平台验收。
- Server 源码：https://github.com/zerochocobo/Thru3D-Media-Server 。下载链接指向新仓库 `/releases/latest`，保留原夸克与百度镜像。
- 上线后同步更新 `index.html` 的默认英文展示及 `script.js` 三语 `download.early` / `download.playerNote` 文案。链接在 HTML 内维护。
- Player 功能区介绍 0.6.0：Apple 空间视频/照片、空间视频人物透视、普通照片立体人像、多图布局、跟随/独立环境透视、立体视角与校正等。版本标识表示本页功能范围，不代表 Meta 或 GitHub 已发布相同版本；下载区保留商店待上线状态，各渠道可用版本以对应页面为准。
- 页面 Canonical 与 Open Graph 使用用户确认的主站 `https://thru3d.com/`。
- 此轮只完成本地网站源码；没有部署到 wapok.com 或推送 GitHub。

## 素材与维护

- `assets/thru3d-icon.png` 源自用户指定 Player 项目 `docs/store/meta/assets/icon-512.png`，缩小至 192×192。
- `assets/player-photo.jpg`、`player-library.jpg`、`player-video.jpg` 源自同目录下的 `screenshots/01-panorama-photo.png`、`03-media-server.png`、`05-3d-concert-passthrough-control.png`，缩小至 1600×900 并转为 JPEG。保留真实画面，不把演唱会控制截图声明为最终抠像结果。
- Server 使用已有 `soft_mainwindow_{en,cn,jp}.png`；随网站语言切换。
- 页面的 CSS 光轨与网格为本地代码绘制；没有新增网络图片、字体、统计服务或表单。
- 三个原有 Player 实拍截图继续作为应用画面展示，未将它们标成 0.6.0 新功能截图。新增空间媒体、照片布局、跟随与配音使用简短功能文案和本地 SVG 图标，不用模拟截图冒充真机效果。
- 隐私政策中英日正文覆盖 iOS、Apple Vision Pro（visionOS）、Quest/PICO、Windows Server 及网站，最近更新日为 2026-10-15。iOS 人物混合现实和 VR 透视使用后置相机；Vision Pro 使用系统环境透视，不直接读取相机原始画面。相机画面仅用于实时显示，不录制、保存或上传。Android Keystore 与 Android 备份排除说明仅适用于 Quest/PICO。

## App Store 隐私资料

- 部署更新后的 `privacy.html` 和 `privacy.js`；沿用 `privacy.css`、`styles.css` 和本地图片。部署后核验 `https://thru3d.com/privacy.html?lang=en`、`?lang=zh`、`?lang=ja` 可以公开访问，再将相应 HTTPS 地址填入 App Store Connect 的 Privacy Policy URL。应用内也应有容易找到的隐私政策入口。本次本地编辑不代表线上已经更新。
- Apple 版源码在用户另一台 Mac 上。本页的 iOS 相机用途、不保存画面及 Vision Pro 系统环境透视方式依据用户确认；本仓库未核查 Apple 版的 Info.plist、PrivacyInfo.xcprivacy、SDK、凭据保存方式或 App Store Connect 表单。不能把 Quest/PICO 的 Android Keystore 实现当成 Apple 版实现。
- iOS 的 `NSCameraUsageDescription` 建议与政策一致，明确包含两种用途。中文：`用于人物混合现实和 VR 透视，通过后置相机实时显示周围环境并与播放内容合成；相机画面仅在设备上处理，不录制、保存或上传。` 英文：`Uses the rear camera for person mixed reality and VR passthrough to show your surroundings with media. Camera frames are processed only on your device and are not recorded, saved or uploaded.` 日文：`人物の複合現実表示と VR パススルーのために背面カメラで周囲をリアルタイム表示し、メディアと合成します。映像は端末内でのみ処理し、録画・保存・アップロードしません。` 这些是 Mac 项目待同步文案，并非本仓库已修改系统权限弹窗。
- Vision Pro 的环境透视由 visionOS 合成器提供，不应仅为了这一功能声明为应用直接读取主相机；只有实际使用相关 API 时才配置对应权限与用途说明。本地网络、所选文件/照片等权限按最终实现核对，拒绝相机权限后仍应支持不依赖相机的播放。
- Apple 将仅在设备上处理且不发送到服务器的数据视为未“收集”。因此，按当前说明，实时相机画面本身不构成 App Privacy 中收集的照片或视频；这不能单独推出整个 App 都是 Data Not Collected。应核对最终二进制及所有第三方 SDK 的其他数据行为，并使各平台的 App Privacy 回答与实际处理一致。
- 提交前核对相机功能关闭后停止使用画面、不会写入缩略图/缓存/日志/导出内容、没有上传路径，以及删除数据、撤销权限的说明与实际界面一致。若新增录制、分享或云端处理，先同步更新政策与商店声明。
- 官方依据：[App Review 5.1.1](https://developer.apple.com/app-store/review/guidelines/#privacy)、[App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)、[visionOS 隐私与用户偏好](https://developer.apple.com/documentation/visionos/adopting-best-practices-for-privacy)、[NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscamerausagedescription)。

## 验证

`node --check website/script.js`、`node --check website/privacy.js`、`git diff --check`。

历史浏览器检查证据位于 Git 忽略的 `debug_output/website_20261009/`；不再向此目录新增检查输出。可重建检查与截图统一放 `build/`，临时检查脚本放 `tmp/`。本次隐私页检查输出使用 `build/output/website-privacy-apple/`，浏览器使用本机 Edge，不要求安装 Playwright 浏览器。

## 0.6.0 Player 内容更新

- 保留现有夜色视觉、截图画廊和 Player/Server 结构。核心介绍突出人物透视、Apple 原生空间影像、2D 转 3D；下方补照片布局/手势/放大镜、躺卧跟随、同名配音。
- 原生空间照片的立体/环境透视与普通平面照片的 AI 人像分开描述；跟随仅单幅平面内容与菜单，照片墙/记忆碎片/全景保留各自布局。
- 可展开清单包含本地/外置存储、SMB/DLNA/WebDAV、Emby/Jellyfin/Plex/Stash/XBVR、五类网盘、播放模式与模式锁、屏幕/立体/颜色调节、字幕/倍速、书签/续播/历史和文件管理。收藏与文件管理按来源能力；PGS 限平面，Dolby Vision 限兼容设备的 Profile 5 色彩处理。
- 中英日同步覆盖，默认 HTML 英文与语言字典一致。FAQ 补 Apple 支持范围、跟随和配音；推荐 Quest 3/PICO 4 Ultra 体验 AI，保留 Quest 2/PICO Neo3 最低兼容目标与实验 OpenXR 范围。
- 本轮为本地静态源更新，发布需部署 `website/`；不包含自动网站部署或 GitHub 公开推送。可重建检查与截图放 `build/output/website-player-060/`，临时工具放 `tmp/website-player-060/`，不依赖临时目录保留重要内容。

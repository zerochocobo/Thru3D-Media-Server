(() => {
  "use strict";

  const translations = {
  "en": {
    "meta.title": "Thru3D — Your media, beyond the screen",
    "meta.description": "Thru3D for Quest and PICO: AI people passthrough, Apple spatial videos and photos, 2D-to-3D, immersive photo layouts and your media library. Pair it with the free Windows Media Server.",
    "skip": "Skip to content",
    "brand.home": "Thru3D home",
    "nav.label": "Main navigation",
    "nav.player": "Media Player",
    "nav.server": "Media Server",
    "nav.together": "Better together",
    "nav.download": "Get Thru3D",
    "language": "Language",
    "nav.toggle": "Toggle navigation",
    "hero.eyebrow": "A new dimension for your media",
    "hero.title": "Your media.",
    "hero.accent": "Beyond the screen.",
    "hero.text": "AI people passthrough, Apple spatial memories and new depth for everyday videos and photos. Explore your media in Thru3D.",
    "hero.player": "Explore the Player",
    "hero.server": "Meet the Server",
    "hero.independent": "Two independent apps. Even more possibilities together.",
    "scene.label": "/ SPATIAL MEDIA",
    "hero.strip1": "VR & mixed reality",
    "hero.strip2": "Apple spatial media & AI 3D",
    "hero.strip3": "Your own media library",
    "alt.photo": "Panoramic photo viewed inside Thru3D Media Player",
    "alt.server": "Thru3D Media Server Windows interface",
    "alt.library": "Media server library in Thru3D Media Player",
    "alt.video": "VR concert video with Thru3D Media Player controls",
    "player.title": "A whole new dimension.",
    "player.accent": "No PC required.",
    "player.intro": "Watch videos, photos and Apple spatial media in VR or passthrough. AI runs on your headset, with adjustable depth and a library you can browse inside VR.",
    "gallery.label": "Inside Thru3D",
    "gallery.capture": "In-app capture",
    "gallery.enlarge": "Enlarge screenshot",
    "gallery.tabs": "Player screenshots",
    "gallery.library": "Your library",
    "gallery.photo": "Immersive photos",
    "gallery.video": "VR video",
    "gallery.dialog": "Player screenshot",
    "gallery.close": "Close screenshot",
    "player.passthrough.title": "People beyond the screen.",
    "player.passthrough.text": "Remove backgrounds from supported VR180 and spatial videos. Prepare 3D portrait passthrough from ordinary flat photos, or play compatible Alpha media.",
    "player.depth.title": "Flat media. New depth.",
    "player.depth.text": "Turn everyday 2D videos and photos into stereoscopic 3D. Adjust the depth to find your perfect view.",
    "player.library.title": "Keep your place",
    "player.library.text": "Bookmarks, resume, recent previews, previous/next and repeat-one. Sort and manage files where supported, control history, and use hands or controllers in Chinese, English or Japanese.",
    "player.extra1": "Pinch, browse & zoom photos",
    "player.extra2": "Bookmarks & resume playback",
    "player.extra3": "Audio tracks & VR subtitles",
    "player.cta": "Get the Player",
    "server.title": "More possibilities.",
    "server.accent": "Powered by your PC.",
    "server.intro": "Transform your local video library with the power of your GPU. Stream over DLNA to Thru3D or another compatible VR player, or save the results for later.",
    "server.cta": "Get the Server",
    "server.caption": "Local library. Powerful processing.",
    "server.f1.title": "AI passthrough",
    "server.f1.text": "GPU background removal with Alpha or green-screen output.",
    "server.f2.title": "2D → 3D",
    "server.f2.text": "Add stereo depth to flat videos, live or offline.",
    "server.f3.title": "RTX super resolution",
    "server.f3.text": "Enhance supported 2D and VR video with NVIDIA RTX Video.",
    "server.f4.title": "Offline tools",
    "server.f4.text": "Generate videos ahead of time and keep the output.",
    "server.f5.title": "Embedded subtitles",
    "server.f5.text": "Keep subtitles in the stream, with adjustable styles.",
    "server.f6.title": "Interpretation audio",
    "server.f6.text": "Mix your matching interpretation track into playback.",
    "together.eyebrow": "Choose your own setup",
    "together.title": "Great on their own.",
    "together.accent": "Better together.",
    "together.text": "Let your PC handle demanding processing while you enjoy the results in your headset. Your library stays on your devices.",
    "flow.library": "Your video library",
    "flow.librarySub": "On your Windows PC",
    "flow.serverSub": "Process & share",
    "flow.playerSub": "Browse & enjoy",
    "step1.title": "Open your library",
    "step1.text": "Add video folders to Server on your PC.",
    "step2.title": "Choose your output",
    "step2.text": "Use Alpha passthrough for Thru3D Player, or choose another supported mode.",
    "step3.title": "Connect in VR",
    "step3.text": "On the same local network, open Player's DLNA library and select Server.",
    "compat.title": "Using Server with another VR player?",
    "compat.text": "Server also works with compatible DLNA players. Match the output to the player and version you use. Thru3D Player uses Alpha passthrough.",
    "compat.caption": "Passthrough output compatibility",
    "compat.player": "Player",
    "compat.gray": "Gray green screen",
    "supported": "Supported",
    "download.eyebrow": "Your next dimension starts here",
    "download.title": "Find your Thru3D.",
    "download.text": "Pick the app that fits your setup. You can add the other whenever you like.",
    "download.early": "Meta · Coming soon",
    "download.playerText": "Spatial videos and photos, AI passthrough and 2D-to-3D. Explore Player 0.6.0.",
    "experimental": "Experimental",
    "download.playerLink": "View on Meta",
    "download.playerNote": "The Meta store release is pending. Visit GitHub for source and build instructions; available versions depend on the release channel.",
    "download.build": "Build guide",
    "download.playerSource": "Player source",
    "download.serverText": "Transform and share your PC video library.",
    "download.serverLink": "Download Server",
    "download.serverNote": "Check the release page for the available version and package details.",
    "download.quark": "Quark Drive",
    "download.baidu": "Baidu Netdisk",
    "download.source": "Source ↗",
    "faq.eyebrow": "A little clarity",
    "faq.title": "Before you begin.",
    "faq.contact": "Get in touch",
    "faq.q1": "Do I need both apps?",
    "faq.a1": "No. Media Player plays local and network media independently, with AI processing on the headset. Media Server works on Windows with compatible DLNA players and offline tools. You can use either app, or combine them.",
    "faq.q2": "Which headsets can I use?",
    "faq.a2": "Separate QUEST and PICO builds target Quest 2 and PICO Neo3 or newer. Quest 3 and PICO 4 Ultra are recommended for AI features. Performance varies with device and media. The OpenXR Android build is experimental and needs a compatible runtime.",
    "faq.q3": "What does Server need?",
    "faq.a3": "Windows 10 or 11 and an NVIDIA GPU for GPU processing. RTX 20 series or newer and at least 6 GB of VRAM are recommended for common realtime workflows. High-quality offline processing can need substantially more VRAM; see the project documentation for each mode.",
    "faq.q4": "Which media works with the AI features?",
    "faq.a4": "People passthrough supports compatible VR180 and spatial videos, plus ordinary flat photos. Depth conversion supports flat mono videos and photos. AI results vary with media and device. Choose Alpha when sending passthrough video from Server to Player.",
    "footer.tagline": "Your media. Your space. Your way.",
    "footer.privacy": "Privacy Policy",
    "footer.made": "Made for a new dimension.",
    "player.spatial.title": "Apple spatial memories.",
    "player.spatial.text": "View iPhone spatial videos and HEIC/HEIF spatial photos in native stereo, including in passthrough. Spatial videos also offer AI people passthrough.",
    "player.photos.title": "A gallery around you.",
    "player.photos.text": "Side thumbnails, Photo Wall and Memory Fragments. Pinch to change photos, resize with both hands, sweep to change groups and inspect details with a 2–8× magnifier.",
    "player.follow.title": "Sit back. Keep your view.",
    "player.follow.text": "Flat videos, single photos and menus can follow your head for seated or reclined viewing. A separate environment passthrough button lets you see your surroundings.",
    "player.dubbing.title": "Your matching voice track.",
    "player.dubbing.text": "Discover matching .si.mix.m4a audio from VR Video Toolbox CUDA and select cloned or translated dubbing as a playback track.",
    "player.more": "Explore playback and library features",
    "player.sources.title": "Local and network media",
    "player.sources.text": "Local files, system-mounted external storage, SMB, DLNA and WebDAV. Discover local DLNA servers or add an address manually.",
    "player.services.title": "Servers and cloud drives",
    "player.services.text": "Emby, Jellyfin, Plex, Stash and XBVR; 115, Baidu, Aliyun, Quark and OneDrive. Browse and sign in inside VR, with covers, filters, favorites and paged browsing where supported.",
    "player.modes.title": "Find the right format",
    "player.modes.text": "Flat, 180°, 360°, fisheye and side-by-side/top-bottom stereo. Detect modes from filenames, lock your choice and retain viewing preferences.",
    "player.screen.title": "Make the view yours",
    "player.screen.text": "Move, resize, rotate and curve the screen. For stereo video, swap eyes, select one view or adjust horizontal/vertical alignment. Tune color; supported devices handle Dolby Vision Profile 5 color.",
    "player.audio.title": "Audio, subtitles and speed",
    "player.audio.text": "Multiple audio tracks and external text subtitles; PGS subtitles for flat videos. Adjust text size, position and distance. Play at 0.25–3× speed with pitch compensation.",
    "faq.q5": "Which Apple spatial media can I view?",
    "faq.a5": "Player supports iPhone-format MV-HEVC spatial videos and HEIC/HEIF spatial photos in native stereo. Watch them against your real surroundings; spatial videos also have people passthrough. AI portrait preparation is available for ordinary flat photos.",
    "faq.q6": "How does head following work?",
    "faq.a6": "Enable it from a menu footer: flat videos, single or portrait-mode photos and menus follow your head. It remains active across content changes for the session and starts off on launch. Photo Wall, Memory Fragments and panoramic content retain their own placement. Environment passthrough is controlled separately.",
    "faq.q7": "How do I use a matching dubbing track?",
    "faq.a7": "Put the audio made with VR Video Toolbox CUDA beside the video with a matching name, such as movie.mp4 and movie.si.mix.m4a. On supported sources, Player discovers it and offers it in the audio-track menu."
  },
  "zh": {
    "meta.title": "Thru3D — 让影像走出屏幕",
    "meta.description": "Thru3D Quest/PICO 播放器：AI 人物透视、Apple 空间视频与照片、2D 转 3D、沉浸照片布局及多来源媒体库。可搭配免费的 Windows Media Server。",
    "skip": "跳到正文",
    "brand.home": "Thru3D 首页",
    "nav.label": "主导航",
    "nav.player": "媒体播放器",
    "nav.server": "媒体服务器",
    "nav.together": "搭配使用",
    "nav.download": "获取 Thru3D",
    "language": "语言",
    "nav.toggle": "展开或收起导航",
    "hero.eyebrow": "为你的影像，打开新的维度",
    "hero.title": "你的影像，",
    "hero.accent": "不止于屏幕。",
    "hero.text": "让人物融入现实，让 Apple 空间影像保留立体记忆，让日常视频与照片拥有新深度。在 Thru3D 中探索你的影像。",
    "hero.player": "探索播放器",
    "hero.server": "了解服务器",
    "hero.independent": "两款独立软件，搭配使用有更多可能。",
    "scene.label": "/ 空间媒体",
    "hero.strip1": "VR 与混合现实",
    "hero.strip2": "Apple 空间影像与 AI 3D",
    "hero.strip3": "你自己的媒体库",
    "alt.photo": "Thru3D Media Player 内的全景照片观看画面",
    "alt.server": "Thru3D媒体服务器的 Windows 界面",
    "alt.library": "Thru3D Media Player 的媒体服务器资料库界面",
    "alt.video": "Thru3D Media Player 中的 VR 演唱会视频与播放控制",
    "player.title": "观看，进入新维度。",
    "player.accent": "无需连接电脑。",
    "player.intro": "在 VR 或透视环境中观看视频、照片和 Apple 空间影像。AI 在头显上运行，立体深度自由调节，媒体库可直接在 VR 内浏览。",
    "gallery.label": "走进 Thru3D",
    "gallery.capture": "应用内截图",
    "gallery.enlarge": "放大截图",
    "gallery.tabs": "播放器截图",
    "gallery.library": "媒体库",
    "gallery.photo": "沉浸式照片",
    "gallery.video": "VR 视频",
    "gallery.dialog": "播放器截图",
    "gallery.close": "关闭截图",
    "player.passthrough.title": "人物，走出屏幕。",
    "player.passthrough.text": "为支持的 VR180 和空间视频移除人物背景；普通平面照片也可一键准备立体人像透视，并支持兼容的预制 Alpha 片源。",
    "player.depth.title": "平面影像，立体新生。",
    "player.depth.text": "让日常 2D 视频和照片呈现立体 3D 深度，随心调整，找到适合自己的观看效果。",
    "player.library.title": "记住位置，继续观看",
    "player.library.text": "书签、续播、最近预览、上一部/下一部与单片循环。按来源排序和管理文件，可关闭或清理历史；支持手部/手柄和简繁中、英、日界面。",
    "player.extra1": "捏合浏览与双手缩放照片",
    "player.extra2": "时间书签与断点续播",
    "player.extra3": "多音轨与 VR 字幕",
    "player.cta": "获取播放器",
    "server.title": "更多可能，",
    "server.accent": "由电脑驱动。",
    "server.intro": "用 GPU 的算力拓展本地视频库。通过 DLNA 推流到 Thru3D 或其他兼容的 VR 播放器，也能生成文件留待之后观看。",
    "server.cta": "获取服务器",
    "server.caption": "本地媒体库，强大的处理能力。",
    "server.f1.title": "AI 透视",
    "server.f1.text": "GPU 移除背景，输出 Alpha 或绿幕透视。",
    "server.f2.title": "2D → 3D",
    "server.f2.text": "为平面视频增加立体深度，支持实时和离线处理。",
    "server.f3.title": "RTX 超分辨率",
    "server.f3.text": "使用 NVIDIA RTX Video 增强支持的 2D 与 VR 视频。",
    "server.f4.title": "离线工具",
    "server.f4.text": "提前生成处理后的视频，保存输出文件。",
    "server.f5.title": "字幕嵌入",
    "server.f5.text": "将字幕保留在视频流中，自由调整显示样式。",
    "server.f6.title": "传译音轨",
    "server.f6.text": "将配套的传译音频混入视频播放。",
    "together.eyebrow": "自由选择你的观看方式",
    "together.title": "各自出色，",
    "together.accent": "搭配更精彩。",
    "together.text": "让电脑承担繁重的视频处理，在头显中享受结果。媒体库始终保存在你自己的设备上。",
    "flow.library": "你的视频库",
    "flow.librarySub": "保存在 Windows 电脑",
    "flow.serverSub": "处理与分享",
    "flow.playerSub": "浏览与观看",
    "step1.title": "打开媒体库",
    "step1.text": "在电脑的 Server 中添加视频目录。",
    "step2.title": "选择输出模式",
    "step2.text": "搭配 Thru3D Player 时选择 Alpha 透视，也可使用其他支持的模式。",
    "step3.title": "在 VR 中连接",
    "step3.text": "连接同一局域网，在 Player 的 DLNA 媒体库中找到 Server。",
    "compat.title": "想搭配其他 VR 播放器？",
    "compat.text": "Server 也能配合其他兼容 DLNA 的播放器。请按播放器与版本选择输出模式；Thru3D Player 的透视播放使用 Alpha。",
    "compat.caption": "透视输出兼容性",
    "compat.player": "播放器",
    "compat.gray": "灰色绿幕",
    "supported": "支持",
    "download.eyebrow": "从这里，打开新的维度",
    "download.title": "选择你的 Thru3D。",
    "download.text": "先选择适合自己的软件，随时加入另一款。",
    "download.early": "Meta · 等待上线",
    "download.playerText": "空间视频与照片、AI 人物透视、2D 转 3D。了解 Player 0.6.0。",
    "experimental": "实验性",
    "download.playerLink": "前往 Meta 商店",
    "download.playerNote": "Meta 商店版本正在等待上线。源码与构建说明见 GitHub，各渠道可用版本以对应页面为准。",
    "download.build": "构建指南",
    "download.playerSource": "播放器源码",
    "download.serverText": "处理并分享电脑上的本地视频库。",
    "download.serverLink": "下载服务器",
    "download.serverNote": "可下载版本与整合包信息，以 Releases 页面为准。",
    "download.quark": "夸克网盘",
    "download.baidu": "百度网盘",
    "download.source": "源码 ↗",
    "faq.eyebrow": "开始前，了解更多",
    "faq.title": "你可能想知道。",
    "faq.contact": "联系我们",
    "faq.q1": "必须同时安装两款软件吗？",
    "faq.a1": "不需要。Media Player 能独立播放本地与网络媒体，AI 在头显上运行。Media Server 在 Windows 上处理视频，支持兼容的 DLNA 播放器与离线工具。你可以单独使用任意一款，也可以搭配使用。",
    "faq.q2": "Player 支持哪些头显？",
    "faq.a2": "分别提供 QUEST 与 PICO 构建，最低兼容目标为 Quest 2 和 PICO Neo3。AI 功能推荐 Quest 3、PICO 4 Ultra；性能随设备和片源变化。OpenXR Android 构建为实验性，需要兼容的运行时。",
    "faq.q3": "Server 需要什么电脑配置？",
    "faq.a3": "Windows 10 或 11，GPU 处理需要 NVIDIA 显卡。常规实时流程建议 RTX 20 系列或更新、至少 6 GB 显存。高质量离线处理可能需要更多显存，各模式的具体要求请查看项目文档。",
    "faq.q4": "AI 功能适用于哪些影像？",
    "faq.a4": "人物透视面向兼容的 VR180、空间视频和普通平面照片；深度转换面向平面单眼视频与照片。AI 效果随片源和设备变化。Server 向 Player 发送透视视频时，请选择 Alpha 输出。",
    "footer.tagline": "你的影像，你的空间，你的方式。",
    "footer.privacy": "隐私政策",
    "footer.made": "为新的维度而生。",
    "player.spatial.title": "Apple 空间影像，原生立体。",
    "player.spatial.text": "原生双眼查看 iPhone 空间视频和 HEIC/HEIF 空间照片，可在透视环境中观看；空间视频还可开启 AI 人物透视。",
    "player.photos.title": "把照片，展在身边。",
    "player.photos.text": "两侧缩略图、照片墙、记忆碎片。捏合切图、双手缩放、挥手换组，再用 2～8 倍独立放大镜查看细节。",
    "player.follow.title": "坐着、躺着，都能看。",
    "player.follow.text": "平面视频、单张照片和菜单可跟随头显，方便坐着或躺卧观看。独立环境透视开关，让你方便查看周围。",
    "player.dubbing.title": "配音，自动找到。",
    "player.dubbing.text": "识别「VR 视频工具箱 CUDA 版」制作的同名 .si.mix.m4a 文件，在音轨菜单中选择克隆配音或翻译配音。",
    "player.more": "展开播放与媒体库功能",
    "player.sources.title": "本地与局域网",
    "player.sources.text": "本地文件、系统识别的外置存储、SMB、DLNA 和 WebDAV。自动发现局域网 DLNA 服务器，也可手动添加地址。",
    "player.services.title": "服务器与网盘",
    "player.services.text": "Emby、Jellyfin、Plex、Stash、XBVR；115、百度、阿里云盘、夸克、OneDrive。在 VR 内浏览与登录，按来源能力提供封面、筛选、收藏与连续分页。",
    "player.modes.title": "模式，自动识别",
    "player.modes.text": "平面、180°、360°、鱼眼及左右/上下立体。按文件名自动识别，手动锁定模式，并保留观看偏好。",
    "player.screen.title": "画面，按你喜欢的方式",
    "player.screen.text": "拖动、缩放、旋转、曲率与距离；立体视频可换眼、选择单视角及水平/垂直校正。自由调色，兼容设备支持 Dolby Vision Profile 5 色彩处理。",
    "player.audio.title": "音轨、字幕与倍速",
    "player.audio.text": "多音轨、外挂文字字幕，平面视频支持 PGS 位图字幕。调节文字字号、位置与距离，支持 0.25～3 倍速和音高补偿。",
    "faq.q5": "支持哪些 Apple 空间影像？",
    "faq.a5": "支持 iPhone 格式的 MV-HEVC 空间视频和 HEIC/HEIF 空间照片，原生双眼观看，可搭配真实环境透视。空间视频可开启人物透视；普通平面照片可准备 AI 立体人像。",
    "faq.q6": "头显跟随怎样使用？",
    "faq.a6": "从菜单底部开启后，平面视频、单图/人像模式照片和菜单跟随头显。换内容时保持本次状态，每次启动默认关闭。照片墙、记忆碎片和全景内容保留自身摆放方式；环境透视独立控制。",
    "faq.q7": "怎样使用同名配音？",
    "faq.a7": "将「VR 视频工具箱 CUDA 版」制作的音频与视频放在同一目录，并使用对应名称，例如 movie.mp4 与 movie.si.mix.m4a。支持的来源会自动发现，随后在音轨菜单中选择播放。"
  },
  "ja": {
    "meta.title": "Thru3D — メディアを、スクリーンのその先へ",
    "meta.description": "Quest・PICO 向け Thru3D：AI 人物パススルー、Apple 空間ビデオ・写真、2D→3D、没入型フォトとメディアライブラリ。無料の Windows Media Server とも連携できます。",
    "skip": "本文へ移動",
    "brand.home": "Thru3D ホーム",
    "nav.label": "メインナビゲーション",
    "nav.player": "Media Player",
    "nav.server": "Media Server",
    "nav.together": "組み合わせる",
    "nav.download": "Thru3D を入手",
    "language": "言語",
    "nav.toggle": "ナビゲーションを開閉",
    "hero.eyebrow": "あなたのメディアに、新しい次元を",
    "hero.title": "メディアを、",
    "hero.accent": "その先の空間へ。",
    "hero.text": "AI で人物を現実の空間へ。Apple の空間映像と、いつもの動画・写真に新しい奥行きを。Thru3D で自分のメディアを楽しもう。",
    "hero.player": "Player を見る",
    "hero.server": "Server を見る",
    "hero.independent": "2 つの独立したアプリ。一緒に使えば、可能性が広がります。",
    "scene.label": "/ 空間メディア",
    "hero.strip1": "VR と複合現実",
    "hero.strip2": "Apple 空間映像と AI 3D",
    "hero.strip3": "自分だけのライブラリ",
    "alt.photo": "Thru3D Media Player で表示したパノラマ写真",
    "alt.server": "Thru3D Media Server の Windows 画面",
    "alt.library": "Thru3D Media Player のメディアサーバーライブラリ",
    "alt.video": "Thru3D Media Player の VR コンサート動画と再生コントロール",
    "player.title": "新しい次元の視聴へ。",
    "player.accent": "PC は不要。",
    "player.intro": "動画、写真、Apple 空間映像を VR やパススルーで視聴。AI はヘッドセット上で動作し、深度の調整やライブラリの閲覧も VR 内で行えます。",
    "gallery.label": "Thru3D の中へ",
    "gallery.capture": "アプリ内のスクリーンショット",
    "gallery.enlarge": "画像を拡大",
    "gallery.tabs": "Player の画面",
    "gallery.library": "ライブラリ",
    "gallery.photo": "没入型フォト",
    "gallery.video": "VR 動画",
    "gallery.dialog": "Player のスクリーンショット",
    "gallery.close": "画像を閉じる",
    "player.passthrough.title": "人物を、画面の外へ。",
    "player.passthrough.text": "対応する VR180・空間ビデオから人物の背景を除去。通常の平面写真から立体ポートレートを準備でき、互換 Alpha 動画の再生にも対応します。",
    "player.depth.title": "平面メディアに、奥行きを。",
    "player.depth.text": "いつもの 2D 動画や写真をステレオ 3D に。深度を調整して、自分に合う見え方に。",
    "player.library.title": "場所を覚えて、続きを",
    "player.library.text": "ブックマーク、再開、履歴プレビュー、前後の動画、1 本リピート。対応ソースの並べ替え・ファイル管理と履歴設定。手やコントローラーで操作し、簡体・繁体中国語、英語、日本語を選べます。",
    "player.extra1": "ピンチ操作と両手で写真をズーム",
    "player.extra2": "ブックマークと続きから再生",
    "player.extra3": "音声トラックと VR 字幕",
    "player.cta": "Player を入手",
    "server.title": "もっと広がる可能性。",
    "server.accent": "PC の力で。",
    "server.intro": "GPU の力でローカル動画ライブラリを拡張。DLNA で Thru3D や互換 VR プレイヤーへ配信し、処理した動画を保存することもできます。",
    "server.cta": "Server を入手",
    "server.caption": "ローカルライブラリに、強力な処理を。",
    "server.f1.title": "AI パススルー",
    "server.f1.text": "GPU で背景を除去し、Alpha またはグリーンスクリーンで出力。",
    "server.f2.title": "2D → 3D",
    "server.f2.text": "平面動画にステレオ深度を。リアルタイム・オフラインに対応。",
    "server.f3.title": "RTX 超解像",
    "server.f3.text": "NVIDIA RTX Video で対応する 2D・VR 動画を高画質化。",
    "server.f4.title": "オフラインツール",
    "server.f4.text": "事前に動画を処理して、出力ファイルを保存。",
    "server.f5.title": "字幕の埋め込み",
    "server.f5.text": "動画ストリームに字幕を表示。スタイルも調整できます。",
    "server.f6.title": "通訳音声",
    "server.f6.text": "対応する通訳トラックを再生音声にミックス。",
    "together.eyebrow": "自分に合う構成を",
    "together.title": "それぞれでも、",
    "together.accent": "一緒なら、もっと。",
    "together.text": "負荷の高い処理は PC に任せ、結果をヘッドセットで楽しむ。ライブラリは自分のデバイスに保存されます。",
    "flow.library": "動画ライブラリ",
    "flow.librarySub": "Windows PC に保存",
    "flow.serverSub": "処理と共有",
    "flow.playerSub": "閲覧と視聴",
    "step1.title": "ライブラリを開く",
    "step1.text": "PC の Server に動画フォルダーを追加。",
    "step2.title": "出力を選ぶ",
    "step2.text": "Thru3D Player には Alpha パススルーを選択。ほかの対応モードも使えます。",
    "step3.title": "VR で接続する",
    "step3.text": "同じ LAN で Player の DLNA ライブラリを開き、Server を選びます。",
    "compat.title": "ほかの VR プレイヤーと使うには？",
    "compat.text": "Server は互換 DLNA プレイヤーでも使えます。プレイヤーとバージョンに合う出力を選んでください。Thru3D Player のパススルーには Alpha を使用します。",
    "compat.caption": "パススルー出力の互換性",
    "compat.player": "プレイヤー",
    "compat.gray": "グレーグリーンスクリーン",
    "supported": "対応",
    "download.eyebrow": "ここから、新しい次元へ",
    "download.title": "あなたの Thru3D を。",
    "download.text": "自分に合うアプリを選んで、もう一つはいつでも。",
    "download.early": "Meta · 公開準備中",
    "download.playerText": "空間ビデオ・写真、AI 人物パススルー、2D→3D。Player 0.6.0 の機能を紹介。",
    "experimental": "実験的",
    "download.playerLink": "Meta ストアを見る",
    "download.playerNote": "Meta ストア版は公開準備中です。ソースとビルド手順は GitHub を参照し、各配信先で提供されるバージョンをご確認ください。",
    "download.build": "ビルドガイド",
    "download.playerSource": "Player のソース",
    "download.serverText": "PC の動画ライブラリを処理・共有。",
    "download.serverLink": "Server をダウンロード",
    "download.serverNote": "公開バージョンとパッケージの詳細は Releases ページをご確認ください。",
    "download.quark": "Quark Drive",
    "download.baidu": "Baidu Netdisk",
    "download.source": "ソース ↗",
    "faq.eyebrow": "はじめに確認",
    "faq.title": "始める前に。",
    "faq.contact": "お問い合わせ",
    "faq.q1": "両方のアプリが必要ですか？",
    "faq.a1": "いいえ。Media Player はローカル・ネットワークメディアを単独で再生し、AI はヘッドセット上で処理します。Media Server は Windows で動作し、互換 DLNA プレイヤーとオフラインツールを利用できます。単独でも、組み合わせても使えます。",
    "faq.q2": "どのヘッドセットに対応しますか？",
    "faq.a2": "QUEST と PICO の個別ビルドを提供し、最低互換目標は Quest 2 と PICO Neo3。AI 機能には Quest 3、PICO 4 Ultra を推奨します。性能はデバイスと素材により異なります。OpenXR Android ビルドは実験的で、互換ランタイムが必要です。",
    "faq.q3": "Server に必要な PC は？",
    "faq.a3": "Windows 10 または 11 と、GPU 処理用の NVIDIA GPU が必要です。一般的なリアルタイム処理には RTX 20 シリーズ以降と 6 GB 以上の VRAM を推奨します。高品質なオフライン処理にはより多くの VRAM が必要な場合があります。各モードの要件はプロジェクトの文書をご覧ください。",
    "faq.q4": "AI 機能はどんなメディアで使えますか？",
    "faq.a4": "人物パススルーは対応する VR180・空間ビデオと通常の平面写真、深度変換は平面の単眼動画と写真が対象です。AI の結果は素材とデバイスにより異なります。Server から Player へパススルー動画を送る際は Alpha を選択してください。",
    "footer.tagline": "あなたのメディア。あなたの空間。あなたらしく。",
    "footer.privacy": "プライバシーポリシー",
    "footer.made": "新しい次元のために。",
    "player.spatial.title": "Apple の思い出を、立体で。",
    "player.spatial.text": "iPhone の空間ビデオと HEIC/HEIF 空間写真をネイティブの両眼立体表示で視聴。現実の空間に重ねて楽しめ、空間ビデオでは人物パススルーも使えます。",
    "player.photos.title": "写真を、自分の周りに。",
    "player.photos.text": "サイドサムネイル、フォトウォール、メモリーフラグメント。ピンチで写真を切り替え、両手で拡大、手を振ってグループ変更。2～8 倍の拡大鏡で細部も確認できます。",
    "player.follow.title": "座っても、横になっても。",
    "player.follow.text": "平面動画、単一写真とメニューを頭の動きに追従させ、座った姿勢や横になった姿勢で視聴。周囲を見る環境パススルーは独立して切り替えられます。",
    "player.dubbing.title": "対応する吹替音声を発見。",
    "player.dubbing.text": "VR Video Toolbox CUDA で作成した同名の .si.mix.m4a を検出。音声トラックからクローン音声や翻訳吹替を選べます。",
    "player.more": "再生とライブラリの機能を見る",
    "player.sources.title": "ローカルとネットワーク",
    "player.sources.text": "ローカルファイル、OS が認識する外部ストレージ、SMB、DLNA、WebDAV。LAN の DLNA サーバーを自動検出し、アドレスの手動追加も可能です。",
    "player.services.title": "サーバーとクラウド",
    "player.services.text": "Emby、Jellyfin、Plex、Stash、XBVR と、115、Baidu、Aliyun、Quark、OneDrive。VR 内で閲覧・ログインし、対応ソースのカバー、絞り込み、お気に入り、ページ送りを利用できます。",
    "player.modes.title": "再生モードを自動判定",
    "player.modes.text": "平面、180°、360°、魚眼、左右・上下の立体動画。ファイル名からモードを判定し、手動で固定して視聴設定を保持できます。",
    "player.screen.title": "自分に合う画面に調整",
    "player.screen.text": "移動、拡大、回転、曲率、距離。立体動画では左右交換、単一視点の選択、水平・垂直位置の補正。色調整と、対応デバイスでの Dolby Vision Profile 5 色処理。",
    "player.audio.title": "音声、字幕、再生速度",
    "player.audio.text": "複数音声と外部テキスト字幕、平面動画の PGS 字幕に対応。文字サイズ、位置、距離を調整し、ピッチ補正付きで 0.25～3 倍速再生できます。",
    "faq.q5": "どの Apple 空間映像に対応しますか？",
    "faq.a5": "iPhone 形式の MV-HEVC 空間ビデオと HEIC/HEIF 空間写真をネイティブの両眼立体表示で視聴できます。現実の周囲に重ねて表示し、空間ビデオでは人物パススルーも利用可能。通常の平面写真では AI 立体ポートレートを準備できます。",
    "faq.q6": "頭への追従はどう使いますか？",
    "faq.a6": "メニュー下部で有効にすると、平面動画、単一・ポートレートモードの写真とメニューが頭に追従します。メディアを変えてもセッション中は維持し、起動時はオフ。フォトウォール、メモリーフラグメント、パノラマは各自の配置を保ちます。環境パススルーは独立した設定です。",
    "faq.q7": "同名の吹替音声を使うには？",
    "faq.a7": "VR Video Toolbox CUDA で作成した音声を動画と同じフォルダーに置き、movie.mp4 と movie.si.mix.m4a のように名前を合わせます。対応ソースでは自動検出され、音声トラックから選択できます。"
  }
};
  const gallery = {
    library: { src: "assets/player-library.jpg", alt: "alt.library", caption: "gallery.library" },
    photo: { src: "assets/player-photo.jpg", alt: "alt.photo", caption: "gallery.photo" },
    video: { src: "assets/player-video.jpg", alt: "alt.video", caption: "gallery.video" },
  };
  const serverImages = {
    en: "assets/soft_mainwindow_en.png",
    zh: "assets/soft_mainwindow_cn.png",
    ja: "assets/soft_mainwindow_jp.png",
  };
  const header = document.querySelector(".site-header");
  const menu = document.querySelector(".top-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const galleryImage = document.querySelector("[data-gallery-image]");
  const galleryPanel = document.getElementById("experience-panel");
  const galleryTabs = [...document.querySelectorAll("[data-gallery]")];
  const dialog = document.querySelector(".image-dialog");
  let activeLanguage = "en";
  let activeGallery = "library";

  const normalizeLanguage = (value) => {
    const primary = String(value || "").toLowerCase().split(/[-_]/)[0];
    return Object.hasOwn(translations, primary) ? primary : null;
  };
  const translate = (key) => translations[activeLanguage][key] ?? translations.en[key] ?? key;
  const readSavedLanguage = () => {
    try { return normalizeLanguage(localStorage.getItem("ptserver-language")); }
    catch { return null; }
  };
  const initialLanguage = () => normalizeLanguage(new URLSearchParams(location.search).get("lang"))
    || readSavedLanguage() || normalizeLanguage(navigator.language) || "en";

  const setMenu = (open) => {
    menu.dataset.open = String(open);
    menuToggle.setAttribute("aria-expanded", String(open));
  };
  const updateGallery = (name) => {
    if (!Object.hasOwn(gallery, name)) return;
    activeGallery = name;
    const shot = gallery[name];
    galleryImage.src = shot.src;
    galleryImage.alt = translate(shot.alt);
    galleryPanel.setAttribute("aria-labelledby", "tab-" + name);
    galleryTabs.forEach((tab) => {
      const selected = tab.dataset.gallery === name;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
  };
  const updateDialog = () => {
    const shot = gallery[activeGallery];
    const image = dialog.querySelector("[data-dialog-image]");
    image.src = shot.src;
    image.alt = translate(shot.alt);
    dialog.querySelector("[data-dialog-caption]").textContent = translate(shot.caption);
  };
  const applyLanguage = (language, updateUrl = false) => {
    activeLanguage = normalizeLanguage(language) || "en";
    document.documentElement.lang = activeLanguage === "zh" ? "zh-CN" : activeLanguage;
    document.title = translate("meta.title");
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n);
    });
    ["alt", "label", "content"].forEach((kind) => {
      document.querySelectorAll("[data-i18n-" + kind + "]").forEach((element) => {
        const attribute = kind === "label" ? "aria-label" : kind;
        element.setAttribute(attribute, translate(element.getAttribute("data-i18n-" + kind)));
      });
    });
    document.querySelectorAll("[data-server-image]").forEach((image) => {
      image.src = serverImages[activeLanguage];
    });
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langButton === activeLanguage));
    });
    document.querySelectorAll("[data-privacy-link]").forEach((link) => {
      link.href = "privacy.html?lang=" + activeLanguage;
    });
    updateGallery(activeGallery);
    if (dialog.open) updateDialog();
    try { localStorage.setItem("ptserver-language", activeLanguage); } catch { /* Optional preference. */ }
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set("lang", activeLanguage);
      history.replaceState(null, "", url);
    }
  };

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langButton, true));
  });
  menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuToggle.focus();
    }
  });
  const desktopMedia = matchMedia("(min-width: 901px)");
  desktopMedia.addEventListener("change", () => setMenu(false));

  galleryTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => updateGallery(tab.dataset.gallery));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % galleryTabs.length;
      if (event.key === "ArrowLeft") next = (index + galleryTabs.length - 1) % galleryTabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = galleryTabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      updateGallery(galleryTabs[next].dataset.gallery);
      galleryTabs[next].focus();
    });
  });
  document.querySelector("[data-open-gallery]").addEventListener("click", () => {
    updateDialog();
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  const updateHeader = () => { header.dataset.scrolled = String(scrollY > 12); };
  addEventListener("scroll", updateHeader, { passive: true });
  addEventListener("popstate", () => applyLanguage(initialLanguage()));
  applyLanguage(initialLanguage());
  updateHeader();
})();

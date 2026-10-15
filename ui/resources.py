from __future__ import annotations

from pathlib import Path
import sys
from media_library import safe_resolve_path

from ui.qt_runtime import configure_qt_runtime_paths

configure_qt_runtime_paths()

from PySide6.QtGui import QIcon


ROOT = safe_resolve_path(Path(sys.executable)).parent / "_internal" if getattr(sys, "frozen", False) else Path(__file__).absolute().parents[1]
RESOURCE_DIR = ROOT / "resources"
APP_ICON_PATH = RESOURCE_DIR / "app.ico"
LOGO_PATH = RESOURCE_DIR / "logo.png"
SWITCH_OFF_IMAGE_PATH = RESOURCE_DIR / "switch_off.png"
SWITCH_ON_IMAGE_PATH = RESOURCE_DIR / "switch_on.png"
PLAYER_SUPPORT_PATH = RESOURCE_DIR / "player_support.json"


def app_icon() -> QIcon:
    return QIcon(str(APP_ICON_PATH))

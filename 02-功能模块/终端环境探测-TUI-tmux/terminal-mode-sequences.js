// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { buildCsiSequence } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
var TERMINAL_MODE_CODES = {
  CURSOR_VISIBLE: 25,
  ALT_SCREEN: 47,
  ALT_SCREEN_CLEAR: 1049,
  MOUSE_NORMAL: 1000,
  MOUSE_BUTTON: 1002,
  MOUSE_ANY: 1003,
  MOUSE_SGR: 1006,
  FOCUS_EVENTS: 1004,
  BRACKETED_PASTE: 2004,
  THEME_NOTIFY: 2031,
  SYNCHRONIZED_UPDATE: 2026,
  WIN32_INPUT_MODE: 9001,
};
function enableTerminalMode(E) {
  return buildCsiSequence(`?${E}h`);
}
function disableTerminalMode(E) {
  return buildCsiSequence(`?${E}l`);
}
var ENABLE_SYNCHRONIZED_UPDATE = enableTerminalMode(TERMINAL_MODE_CODES.SYNCHRONIZED_UPDATE),
  DISABLE_SYNCHRONIZED_UPDATE = disableTerminalMode(TERMINAL_MODE_CODES.SYNCHRONIZED_UPDATE),
  ENABLE_BRACKETED_PASTE = enableTerminalMode(TERMINAL_MODE_CODES.BRACKETED_PASTE),
  DISABLE_BRACKETED_PASTE = disableTerminalMode(TERMINAL_MODE_CODES.BRACKETED_PASTE),
  ENABLE_FOCUS_EVENTS = enableTerminalMode(TERMINAL_MODE_CODES.FOCUS_EVENTS),
  DISABLE_FOCUS_EVENTS = disableTerminalMode(TERMINAL_MODE_CODES.FOCUS_EVENTS),
  ENABLE_THEME_REPORTS = enableTerminalMode(TERMINAL_MODE_CODES.THEME_NOTIFY),
  DISABLE_THEME_REPORTS = disableTerminalMode(TERMINAL_MODE_CODES.THEME_NOTIFY),
  SHOW_CURSOR = enableTerminalMode(TERMINAL_MODE_CODES.CURSOR_VISIBLE),
  HIDE_CURSOR = disableTerminalMode(TERMINAL_MODE_CODES.CURSOR_VISIBLE),
  ENTER_ALT_SCREEN = enableTerminalMode(TERMINAL_MODE_CODES.ALT_SCREEN_CLEAR),
  EXIT_ALT_SCREEN = disableTerminalMode(TERMINAL_MODE_CODES.ALT_SCREEN_CLEAR),
  DISABLE_WIN32_INPUT_MODE = disableTerminalMode(TERMINAL_MODE_CODES.WIN32_INPUT_MODE),
  _ =
    enableTerminalMode(TERMINAL_MODE_CODES.MOUSE_NORMAL) +
    enableTerminalMode(TERMINAL_MODE_CODES.MOUSE_BUTTON) +
    enableTerminalMode(TERMINAL_MODE_CODES.MOUSE_ANY) +
    enableTerminalMode(TERMINAL_MODE_CODES.MOUSE_SGR),
  t = enableTerminalMode(TERMINAL_MODE_CODES.MOUSE_NORMAL) + enableTerminalMode(TERMINAL_MODE_CODES.MOUSE_SGR),
  DISABLE_MOUSE_TRACKING =
    disableTerminalMode(TERMINAL_MODE_CODES.MOUSE_SGR) +
    disableTerminalMode(TERMINAL_MODE_CODES.MOUSE_ANY) +
    disableTerminalMode(TERMINAL_MODE_CODES.MOUSE_BUTTON) +
    disableTerminalMode(TERMINAL_MODE_CODES.MOUSE_NORMAL);
function getMouseTrackingSequence(E) {
  switch (E) {
    case "full":
      return _;
    case "scroll":
      return t;
    case "off":
      return "";
  }
}
export {
  TERMINAL_MODE_CODES,
  enableTerminalMode,
  disableTerminalMode,
  ENABLE_SYNCHRONIZED_UPDATE,
  DISABLE_SYNCHRONIZED_UPDATE,
  ENABLE_BRACKETED_PASTE,
  DISABLE_BRACKETED_PASTE,
  ENABLE_FOCUS_EVENTS,
  DISABLE_FOCUS_EVENTS,
  ENABLE_THEME_REPORTS,
  DISABLE_THEME_REPORTS,
  SHOW_CURSOR,
  HIDE_CURSOR,
  ENTER_ALT_SCREEN,
  EXIT_ALT_SCREEN,
  DISABLE_WIN32_INPUT_MODE,
  DISABLE_MOUSE_TRACKING,
  getMouseTrackingSequence,
};

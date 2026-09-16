// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _f } from "../核心工具-字符串与文本/chunk-01cse5zg.js";
var zf = {
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
function cO(E) {
  return _f(`?${E}h`);
}
function r9(E) {
  return _f(`?${E}l`);
}
var P9e = cO(zf.SYNCHRONIZED_UPDATE),
  Qye = r9(zf.SYNCHRONIZED_UPDATE),
  rBn = cO(zf.BRACKETED_PASTE),
  jat = r9(zf.BRACKETED_PASTE),
  Wat = cO(zf.FOCUS_EVENTS),
  q0e = r9(zf.FOCUS_EVENTS),
  oBn = cO(zf.THEME_NOTIFY),
  Gat = r9(zf.THEME_NOTIFY),
  Cv = cO(zf.CURSOR_VISIBLE),
  vv = r9(zf.CURSOR_VISIBLE),
  z0e = cO(zf.ALT_SCREEN_CLEAR),
  V0e = r9(zf.ALT_SCREEN_CLEAR),
  qat = r9(zf.WIN32_INPUT_MODE),
  _ =
    cO(zf.MOUSE_NORMAL) +
    cO(zf.MOUSE_BUTTON) +
    cO(zf.MOUSE_ANY) +
    cO(zf.MOUSE_SGR),
  t = cO(zf.MOUSE_NORMAL) + cO(zf.MOUSE_SGR),
  s7 =
    r9(zf.MOUSE_SGR) +
    r9(zf.MOUSE_ANY) +
    r9(zf.MOUSE_BUTTON) +
    r9(zf.MOUSE_NORMAL);
function O9e(E) {
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
  zf,
  cO,
  r9,
  P9e,
  Qye,
  rBn,
  jat,
  Wat,
  q0e,
  oBn,
  Gat,
  Cv,
  vv,
  z0e,
  V0e,
  qat,
  s7,
  O9e,
};

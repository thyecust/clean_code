// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { chalk } from "../ANSI-样式-布局原语/chalk-ansi.js";
import { uee, Tf } from "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import { isLightThemeName } from "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { stripAnsi } from "./text-sanitization.js";
var n = "\x1B]8;;",
  o = "\x07";
function formatHyperlink(e, r, i) {
  let t = r === void 0 ? void 0 : stripAnsi(r),
    s = t === void 0 || t === e || e === `http://${t}` || e === `https://${t}`;
  if (!(
    (s &&
      (i?.assumeSupport ?? !1) &&
      process.stdout.isTTY === !0 &&
      (uee() ?? !0)) ||
    (i?.supportsHyperlinks ?? Tf())
  )) {
    if (r !== void 0 && !s) return `${r} (${e})`;
    return e;
  }
  let p = ((i?.themeName ? isLightThemeName(i.themeName) : !1) ? chalk.blue : chalk.blueBright)(
    r ?? e,
  );
  return `${n}${e}${o}${p}${n}${o}`;
}
export { formatHyperlink };

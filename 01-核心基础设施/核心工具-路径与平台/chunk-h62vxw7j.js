// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { realpathSync } from "fs";
import { cwd } from "process";
function o(n) {
  return n.normalize("NFC");
}
function getNormalizedRealCwd() {
  let n = "";
  if (
    typeof process < "u" &&
    typeof process.cwd === "function" &&
    typeof realpathSync === "function"
  )
    try {
      let e = cwd();
      try {
        n = o(realpathSync(e));
      } catch {
        n = o(e);
      }
    } catch {}
  return n;
}
var STARTUP_REAL_CWD = getNormalizedRealCwd(),
  STARTUP_CWD = (() => {
    if (typeof process > "u" || typeof process.cwd !== "function") return null;
    try {
      return process.cwd();
    } catch {
      return null;
    }
  })();
var t;
function isHoverRestEnabled() {
  return t === !0;
}
function pinHoverRestFlag(n) {
  let e = n === !0;
  if (t === void 0) return ((t = e), "pinned");
  return t === e ? "unchanged" : "conflict";
}
export { getNormalizedRealCwd, STARTUP_REAL_CWD, STARTUP_CWD, isHoverRestEnabled, pinHoverRestFlag };

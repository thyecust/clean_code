// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { realpathSync as r } from "fs";
import { cwd as c } from "process";
function o(n) {
  return n.normalize("NFC");
}
function OMn() {
  let n = "";
  if (
    typeof process < "u" &&
    typeof process.cwd === "function" &&
    typeof r === "function"
  )
    try {
      let e = c();
      try {
        n = o(r(e));
      } catch {
        n = o(e);
      }
    } catch {}
  return n;
}
var idr = OMn(),
  adr = (() => {
    if (typeof process > "u" || typeof process.cwd !== "function") return null;
    try {
      return process.cwd();
    } catch {
      return null;
    }
  })();
var t;
function M() {
  return t === !0;
}
function ldr(n) {
  let e = n === !0;
  if (t === void 0) return ((t = e), "pinned");
  return t === e ? "unchanged" : "conflict";
}
export { OMn, idr, adr, M, ldr };

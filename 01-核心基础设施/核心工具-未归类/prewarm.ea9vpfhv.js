// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { importMetaRequire } from "../内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
var r = null;
function u(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "getModifiers" in e &&
    typeof e.getModifiers === "function" &&
    "isModifierPressed" in e &&
    typeof e.isModifierPressed === "function"
  );
}
function o() {
  if (r) return r;
  try {
    let e;
    if (process.env.MODIFIERS_NODE_PATH)
      e = importMetaRequire(process.env.MODIFIERS_NODE_PATH);
    else {
      let i = join(
        dirname(fileURLToPath(import.meta.url)),
        "..",
        "modifiers-napi",
        "arm64-darwin",
        "modifiers.node",
      );
      e = createRequire(import.meta.url)(i);
    }
    if (!u(e)) return null;
    return ((r = e), r);
  } catch {
    return null;
  }
}
function isModifierPressed(e) {
  let i = o();
  if (!i) return !1;
  try {
    return i.isModifierPressed(e);
  } catch {
    return !1;
  }
}
function prewarm() {
  o();
}
export { isModifierPressed, prewarm };

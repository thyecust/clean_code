// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
var s = new Set(["EIO", "ENOTTY", "EBADF"]);
function trySetRawMode(e, t) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(t);
  } catch (o) {
    let r = l(o),
      a = A(o);
    if (r.includes("setRawMode failed") || s.has(a ?? "")) {
      logForDebugging(`setRawMode(${t}) failed on revoked tty: ${r}`);
      return;
    }
    throw o;
  }
}
export { trySetRawMode };

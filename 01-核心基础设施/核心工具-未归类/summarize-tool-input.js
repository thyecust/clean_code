// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { truncate } from "../核心工具-字符串与文本/ansi-text-utils.js";
function summarizeToolInput(r) {
  if (typeof r !== "object" || r === null) return "";
  let n = r;
  for (let t of [
    "command",
    "file_path",
    "path",
    "pattern",
    "query",
    "prompt",
  ]) {
    let o = n[t];
    if (typeof o === "string") return truncate(o.replace(/\s+/g, " ").trim(), 60);
  }
  for (let t of Object.values(n))
    if (typeof t === "string") return truncate(t.replace(/\s+/g, " ").trim(), 60);
  return "";
}
export { summarizeToolInput };

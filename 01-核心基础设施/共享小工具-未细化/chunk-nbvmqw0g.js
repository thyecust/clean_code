// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oe } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Gbe } from "../../02-功能模块/权限系统/chunk-z0pt04s8.js";
function V4(r) {
  return r.length <= Gbe ? r : `${oe(r, Gbe - 1)}\u2026`;
}
export { V4 };

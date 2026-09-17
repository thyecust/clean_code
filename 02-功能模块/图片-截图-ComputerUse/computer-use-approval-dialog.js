// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { DEFAULT_GRANT_FLAGS } from "../../01-核心基础设施/共享小工具-未细化/app-permission-categories.js";
import { defineDialog } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { qd } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var COMPUTER_USE_APPROVAL_DIALOG = defineDialog({
  kind: "computer_use_approval",
  payload: createLazyValue(() => qd((e) => typeof e === "object" && e !== null)),
  result: createLazyValue(() => qd((e) => typeof e === "object" && e !== null)),
  default: { granted: [], denied: [], flags: DEFAULT_GRANT_FLAGS },
});
export { COMPUTER_USE_APPROVAL_DIALOG };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 211 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isLowPriorityActive, endLowPriorityMode } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { enableLowPriorityMode, formatLowPriorityEnabledMessage, formatLowPriorityUnavailableMessage, formatLowPriorityOffMessage } from "../限流-重试/限流-重试.4mc5yc28.js";
import "../用量额度-限额/usage-limit-continuation.js";
async function r() {
  if (isLowPriorityActive()) return (endLowPriorityMode("user"), { type: "text", value: formatLowPriorityOffMessage() });
  let t = enableLowPriorityMode("command");
  if (t === "unavailable") return { type: "text", value: formatLowPriorityUnavailableMessage() };
  return { type: "text", value: formatLowPriorityEnabledMessage(t) };
}
export { r as call };

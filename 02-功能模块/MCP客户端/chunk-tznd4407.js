// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { formatDuration } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
var MAX_MCP_TASK_ID_LENGTH = 128,
  MCP_TASK_ID_PATTERN = /^[\x21-\x7e]+$/,
  MCP_TASKS_EXTENSION_ID = "io.modelcontextprotocol/tasks";
function e1e(r) {
  return truncateToCodeUnits(
    r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""),
    MAX_MCP_TASK_ID_LENGTH,
  );
}
function shortenMcpTaskId(r) {
  return truncateToCodeUnits(e1e(r), 8);
}
function y7e(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1000 ? `${r}ms` : formatDuration(r);
}
export { MAX_MCP_TASK_ID_LENGTH, MCP_TASK_ID_PATTERN, MCP_TASKS_EXTENSION_ID, e1e, shortenMcpTaskId, y7e };

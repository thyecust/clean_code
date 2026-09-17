// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { formatDuration } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
var ESn = 128,
  RJn = /^[\x21-\x7e]+$/,
  kJn = "io.modelcontextprotocol/tasks";
function e1e(r) {
  return oe(
    r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""),
    ESn,
  );
}
function rG(r) {
  return oe(e1e(r), 8);
}
function y7e(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1000 ? `${r}ms` : formatDuration(r);
}
export { ESn, RJn, kJn, e1e, rG, y7e };

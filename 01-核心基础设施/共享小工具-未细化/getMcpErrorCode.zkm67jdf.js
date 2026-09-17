// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ErrorCode, McpError } from "../../02-功能模块/MCP客户端/chunk-tv3jbp8f.js";
var o = new Set([-32002, ErrorCode.InvalidParams]);
function getMcpErrorCode(n) {
  return n instanceof McpError ? n.code : void 0;
}
function isMcpMethodNotFoundError(n) {
  return n instanceof McpError && n.code === ErrorCode.MethodNotFound;
}
function isMcpResourceNotFoundError(n) {
  return n instanceof McpError && o.has(n.code);
}
function isMcpNotADirectoryError(n) {
  return n instanceof McpError && n.code === ErrorCode.InvalidParams;
}
function isUrlElicitationRequiredMcpError(n) {
  return n instanceof McpError && n.code === ErrorCode.UrlElicitationRequired;
}
export {
  getMcpErrorCode,
  isMcpMethodNotFoundError,
  isMcpNotADirectoryError,
  isMcpResourceNotFoundError,
  isUrlElicitationRequiredMcpError,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../02-功能模块/MCP客户端/chunk-5wa92x7d.js";
import { ErrorCode, ProtocolError } from "../../02-功能模块/MCP客户端/chunk-78r8f7dw.js";
import "../../02-功能模块/认证-OAuth登录/pkce-challenge.js";
var n = new Set([-32002, ErrorCode.InvalidParams]);
function getMcpErrorCode(o) {
  return o instanceof ProtocolError ? o.code : void 0;
}
function isMcpMethodNotFoundError(o) {
  return o instanceof ProtocolError && o.code === ErrorCode.MethodNotFound;
}
function isMcpResourceNotFoundError(o) {
  return o instanceof ProtocolError && n.has(o.code);
}
function isMcpNotADirectoryError(o) {
  return o instanceof ProtocolError && o.code === ErrorCode.InvalidParams;
}
function isUrlElicitationRequiredMcpError(o) {
  return o instanceof ProtocolError && o.code === ErrorCode.UrlElicitationRequired;
}
export {
  getMcpErrorCode,
  isMcpMethodNotFoundError,
  isMcpNotADirectoryError,
  isMcpResourceNotFoundError,
  isUrlElicitationRequiredMcpError,
};

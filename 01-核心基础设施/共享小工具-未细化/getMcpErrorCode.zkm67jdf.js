// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { xo, _o } from "../../02-功能模块/MCP客户端/chunk-tv3jbp8f.js";
var o = new Set([-32002, xo.InvalidParams]);
function e(n) {
  return n instanceof _o ? n.code : void 0;
}
function t(n) {
  return n instanceof _o && n.code === xo.MethodNotFound;
}
function i(n) {
  return n instanceof _o && o.has(n.code);
}
function c(n) {
  return n instanceof _o && n.code === xo.InvalidParams;
}
function u(n) {
  return n instanceof _o && n.code === xo.UrlElicitationRequired;
}
export {
  e as getMcpErrorCode,
  t as isMcpMethodNotFoundError,
  c as isMcpNotADirectoryError,
  i as isMcpResourceNotFoundError,
  u as isUrlElicitationRequiredMcpError,
};

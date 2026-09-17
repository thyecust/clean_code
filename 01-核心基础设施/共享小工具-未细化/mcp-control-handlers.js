// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { jt } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
function getReconnectMcpServer() {
  return jt().reconnect;
}
function _2n() {
  return jt().toggle;
}
function getIsMcpServerDisabled() {
  return jt().isDisabled;
}
function y2n() {
  return jt().dialBlockCause;
}
function registerMcpControlHandlers(e, n, r, c) {
  let o = jt();
  ((o.reconnect = e),
    (o.toggle = n),
    (o.isDisabled = r),
    (o.dialBlockCause = c));
}
function clearMcpControlHandlers() {
  let e = jt();
  ((e.reconnect = null),
    (e.toggle = null),
    (e.isDisabled = null),
    (e.dialBlockCause = null));
}
export { getReconnectMcpServer, _2n, getIsMcpServerDisabled, y2n, registerMcpControlHandlers, clearMcpControlHandlers };

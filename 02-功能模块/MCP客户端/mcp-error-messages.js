// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { mi, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isCliOwnedMcpConfig, isSessionIngressUrl, getMcpServerOrigin } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { sanitizeDisplayTextWithoutRedaction, sanitizeDisplayText, sanitizeMessageText, unwrapCcrProxyUrl } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { sanitizeForRelay } from "../远程控制-Bridge/chunk-5ne99rq3.js";
var f = new Set([
  "INVALID_CONFIG",
  "UNCONFIGURED",
  "AUTH_HEADER_REJECTED",
  "HEADERS_HELPER_AUTH_REJECTED",
  "CLI_OWNED_BEARER_REJECTED",
  "FIRST_PARTY_AUTH_REJECTED",
  "CLAUDEAI_BEARER_REJECTED",
  "ENDPOINT_NOT_FOUND",
  "CONNECT_TIMEOUT",
  "POLICY_BLOCKED",
  "APPROVAL_REQUIRED",
  "DISABLED",
  "IDENTITY_CHANGED",
]);
function getMcpClientFailureDetail(e) {
  let o = getMcpServerOrigin(
      "url" in e.config &&
        typeof e.config.url === "string" &&
        (e.config.scope === "dynamic" || isCliOwnedMcpConfig(e.config)) &&
        isSessionIngressUrl(e.config.url)
        ? { ...e.config, url: unwrapCcrProxyUrl(e.config.url) }
        : e.config,
    ),
    r = e.errorCode;
  if (r !== void 0 && f.has(r)) return e.error ?? r;
  if (r) {
    let t = a(r);
    return o ? `${t} at ${o}` : t;
  }
  return e.error ?? "";
}
function a(e) {
  let o = Number(e);
  return e === "23"
    ? "request timed out"
    : Number.isInteger(o) && o >= 100 && o <= 599
      ? `HTTP ${e}`
      : e;
}
function formatMcpConnectionError(e) {
  let { errorCode: o, displayDetail: r } = e;
  if (o && !f.has(o)) {
    let i = a(o),
      c = e.error !== void 0 ? `${i}: ${e.error}` : i;
    return sanitizeMessageText(r ? `${c} ${r}` : c);
  }
  let t = e.error ?? o ?? "",
    s = r ? `${t} ${r}`.trim() : t;
  return s === "" ? s : sanitizeMessageText(s);
}
function buildMcpReconnectResult(e, o, r, t) {
  switch (e.client.type) {
    case "connected":
      if (e.client.discoveryBearerRejected)
        return {
          message: `Reconnected to ${sanitizeDisplayTextWithoutRedaction(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`,
          success: !1,
        };
      if (e.client.toolsListError) {
        if (r.persistsOffBox)
          return (
            logForDebugging(
              `mcp reconnect tools/list failed for ${sanitizeForRelay(o)}: ${e.client.toolsListError}`,
              { level: "error" },
            ),
            {
              message: `Reconnected to ${sanitizeDisplayTextWithoutRedaction(o)}, but fetching tools failed (detail withheld on this connection).`,
              success: !1,
            }
          );
        return {
          message: `Reconnected to ${sanitizeDisplayTextWithoutRedaction(o)}, but fetching tools failed: ${sanitizeDisplayText(e.client.toolsListError)}`,
          success: !1,
        };
      }
      return { message: `Reconnected to ${sanitizeDisplayTextWithoutRedaction(o)}.`, success: !0 };
    case "needs-auth":
      return {
        message: t?.hasHeadersHelper
          ? `${sanitizeDisplayTextWithoutRedaction(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.`
          : `${sanitizeDisplayTextWithoutRedaction(o)} requires authentication. Use the 'Authenticate' option.`,
        success: !1,
      };
    case "failed": {
      let s = getMcpClientFailureDetail(e.client);
      if (r.persistsOffBox) {
        if (s) logForDebugging(`mcp reconnect failed for ${sanitizeForRelay(o)}: ${s}`, { level: "error" });
        return {
          message: `Failed to reconnect to ${sanitizeDisplayTextWithoutRedaction(o)}${s ? " (detail withheld on this connection)" : ""}.`,
          success: !1,
        };
      }
      return {
        message: s
          ? `Failed to reconnect to ${sanitizeDisplayTextWithoutRedaction(o)}: ${sanitizeDisplayText(s)}`
          : `Failed to reconnect to ${sanitizeDisplayTextWithoutRedaction(o)}.`,
        success: !1,
      };
    }
    default:
      return {
        message: `Unknown result when reconnecting to ${sanitizeDisplayTextWithoutRedaction(o)}.`,
        success: !1,
      };
  }
}
function formatMcpReconnectError(e, o, r) {
  if (e instanceof mi) return sanitizeDisplayText(l(e), void 0, "none");
  if (r.persistsOffBox)
    return (
      logForDebugging(`mcp reconnect error for ${sanitizeForRelay(o)}: ${l(e)}`, { level: "error" }),
      `Error reconnecting to ${sanitizeDisplayTextWithoutRedaction(o)} (detail withheld on this connection).`
    );
  return `Error reconnecting to ${sanitizeDisplayTextWithoutRedaction(o)}: ${sanitizeDisplayText(l(e))}`;
}
function formatMcpToggleError(e, o, r, t) {
  if (e instanceof mi) return sanitizeDisplayText(l(e), void 0, "none");
  if (t.persistsOffBox)
    return (
      logForDebugging(`mcp ${r} failed for ${sanitizeForRelay(o)}: ${l(e)}`, { level: "error" }),
      `Failed to ${r} MCP server "${sanitizeDisplayTextWithoutRedaction(o)}" (detail withheld on this connection).`
    );
  return `Failed to ${r} MCP server "${sanitizeDisplayTextWithoutRedaction(o)}": ${sanitizeDisplayText(l(e))}`;
}
export { getMcpClientFailureDetail, formatMcpConnectionError, buildMcpReconnectResult, formatMcpReconnectError, formatMcpToggleError };

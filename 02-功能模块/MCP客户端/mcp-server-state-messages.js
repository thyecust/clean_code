// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { mi } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { isConnectedMcpServer } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { sanitizeDisplayTextWithoutRedaction, MCP_BLOCKED_BY_POLICY_MESSAGE, MCP_NOT_APPROVED_MESSAGE, isUnconfiguredMcpServer } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isValidCliNameToken } from "../插件系统/plugin-system-core.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function getMcpServerType(e) {
  return e.type;
}
function getBlockingMcpServerState(e) {
  let n = getMcpServerType(e);
  switch (n) {
    case "disabled":
    case "pending":
    case "needs-approval":
      return n;
    case "connected":
    case "failed":
    case "needs-auth":
    case "cached":
      return null;
    default:
      return n;
  }
}
function formatServerDisabledHint(e) {
  return `"${sanitizeDisplayTextWithoutRedaction(e)}" is disabled \u2014 enable it in /mcp first`;
}
function formatServerDisabledBeforeAction(e, n) {
  return `MCP server ${sanitizeDisplayTextWithoutRedaction(e)} is disabled \u2014 enable it (mcp_toggle) before ${n}`;
}
function formatServerNotApprovedBeforeAction(e, n) {
  return `MCP server ${sanitizeDisplayTextWithoutRedaction(e)} is not approved for this project \u2014 approve it in /mcp before ${n}`;
}
function formatDisabledElsewhereMessage(e) {
  return `"${sanitizeDisplayTextWithoutRedaction(e)}" was disabled in another session \u2014 disable and re-enable it in /mcp, or restart, to reconnect`;
}
function formatDisableNotPersistedMessage(e) {
  let n = sanitizeDisplayTextWithoutRedaction(e),
    t = `"${e}" was re-enabled in another session, so this disable didn't persist \u2014 /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
  return isValidCliNameToken(e) && [...t].length <= 1024
    ? t
    : `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`;
}
function formatBulkTogglePersistWarning(e, n, t) {
  if (!n) {
    let r = countMatching(e, (s) => s.type === "disabled" && !t(s.name));
    if (r === 0) return null;
    let l = countMatching(e, (s) => s.type === "disabled" && t(s.name));
    return (
      `${r} MCP server(s) were re-enabled in another session, so this disable didn't persist for them \u2014 enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` +
      (l > 0
        ? ` The other ${l} ${l === 1 ? "remains" : "remain"} disabled.`
        : "")
    );
  }
  let o = e.filter(
    (r) => r.type !== "disabled" && getMcpServerType(r) !== "needs-approval" && t(r.name),
  );
  if (o.length === 0) return null;
  let i = countMatching(o, isConnectedMcpServer),
    c = countMatching(o, (r) => !isConnectedMcpServer(r) && isUnconfiguredMcpServer(r)),
    p = o.length - i - c,
    a = [];
  if (p > 0)
    a.push(
      `${p} MCP server(s) were disabled in another session \u2014 disable and re-enable them in /mcp, or restart, to reconnect.`,
    );
  if (c > 0)
    a.push(
      `${c} MCP server(s) were disabled in another session but aren't configured yet \u2014 there's nothing to reconnect until they are.`,
    );
  if (i > 0)
    a.push(
      `${i} MCP server(s) are still available in this session but were disabled in another \u2014 they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`,
    );
  return a.join(" ");
}
function formatPolicyBlockedMessage(e) {
  return `"${sanitizeDisplayTextWithoutRedaction(e)}" is blocked by your organization's managed policy \u2014 it can't be authenticated or reconnected here`;
}
function formatProjectApprovalMessage(e) {
  return `"${sanitizeDisplayTextWithoutRedaction(e)}" is a project-scope MCP server (.mcp.json) that is not approved for this project \u2014 approve it via /mcp first, then authenticate or reconnect it`;
}
function formatMcpServerBlockedMessage(e, n, t) {
  return n === "project-approval" ? formatProjectApprovalMessage(e) : (t ?? formatPolicyBlockedMessage(e));
}
function createMcpServerBlockedError(e, n, t) {
  return n === "project-approval"
    ? new mi(formatProjectApprovalMessage(e), "MCP server not approved for this project")
    : new mi(t ?? formatPolicyBlockedMessage(e), "MCP server blocked by enterprise managed policy");
}
function getBlockedServerErrorFields(e) {
  return e === "project-approval"
    ? { error: MCP_NOT_APPROVED_MESSAGE, errorCode: "APPROVAL_REQUIRED" }
    : { error: MCP_BLOCKED_BY_POLICY_MESSAGE, errorCode: "POLICY_BLOCKED" };
}
function formatStaleDisableMessage(e) {
  return `"${sanitizeDisplayTextWithoutRedaction(e)}" is still available in this session, but another session disabled it \u2014 it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`;
}
function assertMcpServerReconnectable(e, n) {
  if (n === "ide")
    throw new mi(
      "The IDE connection is managed automatically and can't be reconnected manually",
    );
  let t = e.find((i) => i.name === n),
    o = t && getBlockingMcpServerState(t);
  if (o)
    throw new mi(
      o === "disabled"
        ? formatServerDisabledHint(n)
        : o === "pending"
          ? `"${sanitizeDisplayTextWithoutRedaction(n)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing`
          : `"${sanitizeDisplayTextWithoutRedaction(n)}" is pending approval \u2014 approve it in the terminal first`,
    );
}
export {
  getMcpServerType,
  getBlockingMcpServerState,
  formatServerDisabledHint,
  formatServerDisabledBeforeAction,
  formatServerNotApprovedBeforeAction,
  formatDisabledElsewhereMessage,
  formatDisableNotPersistedMessage,
  formatBulkTogglePersistWarning,
  formatPolicyBlockedMessage,
  formatProjectApprovalMessage,
  formatMcpServerBlockedMessage,
  createMcpServerBlockedError,
  getBlockedServerErrorFields,
  formatStaleDisableMessage,
  assertMcpServerReconnectable,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getBridgeHostState } from "../../01-核心基础设施/共享小工具-未细化/bridge-state-containers.js";
import { jM } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function u(e) {
  if (!Array.isArray(e)) return [];
  let i = jM(),
    s = [];
  for (let o of e) {
    let t = i.safeParse(o);
    if (t.success) s.push(t.data);
    else
      n(
        `[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${t.error.message}`,
        { level: "warn" },
      );
  }
  return s;
}
function registerSwarmPermissionCallback(e) {
  (getBridgeHostState().swarmPermissions.pending.set(e.requestId, e),
    n(
      `[SwarmPermissionPoller] Registered callback for request ${e.requestId}`,
    ));
}
function unregisterSwarmPermissionCallback(e) {
  (getBridgeHostState().swarmPermissions.pending.delete(e),
    n(`[SwarmPermissionPoller] Unregistered callback for request ${e}`));
}
function hasPermissionCallback(e) {
  return getBridgeHostState().swarmPermissions.pending.has(e);
}
function clearSwarmPermissions() {
  getBridgeHostState().swarmPermissions.clear();
}
var d = !0;
function a(e, i) {
  let s = i.toolUseId === void 0 ? d : i.toolUseId === e.toolUseId,
    o = i.approvedRequest,
    t =
      o === void 0
        ? d
        : o.tool_use_id === e.toolUseId && o.tool_name === e.toolName,
    r = o === void 0 ? d : o.input_digest === e.inputDigest;
  if (!s || !t) return "mismatch";
  if (!r) return "input_digest_mismatch";
  return i.toolUseId === void 0 || o === void 0 ? "unbound" : "bound";
}
function processMailboxPermissionResponse(e) {
  let i = getBridgeHostState().swarmPermissions.pending,
    s = i.get(e.requestId);
  if (!s)
    return (
      n(
        `[SwarmPermissionPoller] No callback registered for mailbox response ${b(e.requestId)}`,
      ),
      !1
    );
  i.delete(e.requestId);
  let o = a(s, e);
  if (o === "mismatch" || o === "input_digest_mismatch") {
    let t = e.approvedRequest,
      r = e.decision === "approved" ? "approval" : "denial",
      l =
        o === "input_digest_mismatch"
          ? `this ${b(s.toolName)} call (${b(s.toolUseId)}), but its input digest differs`
          : `${t ? `${b(t.tool_name)} (${b(t.tool_use_id)})` : b(e.toolUseId)}, not this ${b(s.toolName)} call (${b(s.toolUseId)})`;
    return (
      n(
        `[SwarmPermissionPoller] Refusing ${r} for request ${b(e.requestId)}: the leader answered ${l}`,
        { level: "warn" },
      ),
      s.onRefuse(
        `The ${r} did not describe this tool call, so it was refused.`,
        r,
      ),
      !0
    );
  }
  if (
    (n(
      `[SwarmPermissionPoller] Processing mailbox response for request ${b(e.requestId)}: ${e.decision} (${o})`,
    ),
    o === "unbound")
  )
    s.onUnboundVerdict();
  if (e.decision === "approved") {
    let t = u(e.permissionUpdates),
      r = e.updatedInput;
    s.onAllow(r, t);
  } else s.onReject(e.feedback);
  return !0;
}
function registerSandboxPermissionCallback(e) {
  (getBridgeHostState().swarmPermissions.pendingSandbox.set(e.requestId, e),
    n(
      `[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`,
    ));
}
function hasSandboxPermissionCallback(e) {
  return getBridgeHostState().swarmPermissions.pendingSandbox.has(e);
}
function processSandboxPermissionResponse(e) {
  let i = getBridgeHostState().swarmPermissions.pendingSandbox,
    s = i.get(e.requestId);
  if (!s)
    return (
      n(
        `[SwarmPermissionPoller] No sandbox callback registered for request ${b(e.requestId)}`,
      ),
      !1
    );
  if ((i.delete(e.requestId), s.host !== e.host))
    return (
      n(
        `[SwarmPermissionPoller] Refusing sandbox ${e.allow === !0 ? "allow" : "deny"} for request ${b(e.requestId)}: the leader answered for ${b(e.host)}, not ${b(s.host)}`,
        { level: "warn" },
      ),
      s.resolve(!1),
      !0
    );
  return (
    n(
      `[SwarmPermissionPoller] Processing sandbox response for request ${b(e.requestId)}: allow=${b(e.allow)}`,
    ),
    s.resolve(e.allow),
    !0
  );
}
export { registerSwarmPermissionCallback, unregisterSwarmPermissionCallback, hasPermissionCallback, clearSwarmPermissions, processMailboxPermissionResponse, registerSandboxPermissionCallback, hasSandboxPermissionCallback, processSandboxPermissionResponse };

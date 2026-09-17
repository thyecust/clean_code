// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getBridgeHostState } from "../../01-核心基础设施/共享小工具-未细化/bridge-state-containers.js";
import { permissionUpdateSchema } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function u(e) {
  if (!Array.isArray(e)) return [];
  let i = permissionUpdateSchema(),
    s = [];
  for (let o of e) {
    let t = i.safeParse(o);
    if (t.success) s.push(t.data);
    else
      logForDebugging(
        `[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${t.error.message}`,
        { level: "warn" },
      );
  }
  return s;
}
function registerSwarmPermissionCallback(e) {
  (getBridgeHostState().swarmPermissions.pending.set(e.requestId, e),
    logForDebugging(
      `[SwarmPermissionPoller] Registered callback for request ${e.requestId}`,
    ));
}
function unregisterSwarmPermissionCallback(e) {
  (getBridgeHostState().swarmPermissions.pending.delete(e),
    logForDebugging(`[SwarmPermissionPoller] Unregistered callback for request ${e}`));
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
      logForDebugging(
        `[SwarmPermissionPoller] No callback registered for mailbox response ${jsonStringify(e.requestId)}`,
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
          ? `this ${jsonStringify(s.toolName)} call (${jsonStringify(s.toolUseId)}), but its input digest differs`
          : `${t ? `${jsonStringify(t.tool_name)} (${jsonStringify(t.tool_use_id)})` : jsonStringify(e.toolUseId)}, not this ${jsonStringify(s.toolName)} call (${jsonStringify(s.toolUseId)})`;
    return (
      logForDebugging(
        `[SwarmPermissionPoller] Refusing ${r} for request ${jsonStringify(e.requestId)}: the leader answered ${l}`,
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
    (logForDebugging(
      `[SwarmPermissionPoller] Processing mailbox response for request ${jsonStringify(e.requestId)}: ${e.decision} (${o})`,
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
    logForDebugging(
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
      logForDebugging(
        `[SwarmPermissionPoller] No sandbox callback registered for request ${jsonStringify(e.requestId)}`,
      ),
      !1
    );
  if ((i.delete(e.requestId), s.host !== e.host))
    return (
      logForDebugging(
        `[SwarmPermissionPoller] Refusing sandbox ${e.allow === !0 ? "allow" : "deny"} for request ${jsonStringify(e.requestId)}: the leader answered for ${jsonStringify(e.host)}, not ${jsonStringify(s.host)}`,
        { level: "warn" },
      ),
      s.resolve(!1),
      !0
    );
  return (
    logForDebugging(
      `[SwarmPermissionPoller] Processing sandbox response for request ${jsonStringify(e.requestId)}: allow=${jsonStringify(e.allow)}`,
    ),
    s.resolve(e.allow),
    !0
  );
}
export { registerSwarmPermissionCallback, unregisterSwarmPermissionCallback, hasPermissionCallback, clearSwarmPermissions, processMailboxPermissionResponse, registerSandboxPermissionCallback, hasSandboxPermissionCallback, processSandboxPermissionResponse };

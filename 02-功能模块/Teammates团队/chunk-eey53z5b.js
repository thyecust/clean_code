// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getAgentId, getAgentName, getTeamName, getTeammateColor } from "./chunk-811z9z0t.js";
import { writeToMailbox, createPermissionRequestMessage, createPermissionResponseMessage, createSandboxPermissionRequestMessage, createSandboxPermissionResponseMessage } from "./chunk-g6nvp9mm.js";
import { readTeamFileAsync } from "./chunk-6b13bhw1.js";
import { TEAM_LEAD_AGENT_NAME } from "./chunk-enjekn9t.js";
import { createHash } from "crypto";
var x = 32;
function PGt(e, r) {
  return createHash("sha256")
    .update(e)
    .update("\x00")
    .update(b(u(r)))
    .digest("hex");
}
function u(e, r = 0) {
  if (r > x) return e;
  if (Array.isArray(e)) return e.map((o) => u(o, r + 1));
  if (typeof e === "object" && e !== null)
    return Object.fromEntries(
      Object.entries(e)
        .sort(([o], [s]) => (o < s ? -1 : o > s ? 1 : 0))
        .map(([o, s]) => [o, u(s, r + 1)]),
    );
  return e;
}
function v1e(e, r) {
  let o = z(b(r));
  return PGt(e, o);
}
function S() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function Awt(e) {
  let r = e.teamName || getTeamName(),
    o = e.workerId || getAgentId(),
    s = e.workerName || getAgentName(),
    i = e.workerColor || getTeammateColor();
  if (!r) throw Error("Team name is required for permission requests");
  if (!o) throw Error("Worker ID is required for permission requests");
  if (!s) throw Error("Worker name is required for permission requests");
  return {
    id: S(),
    workerId: o,
    workerName: s,
    workerColor: i,
    teamName: r,
    toolName: e.toolName,
    toolUseId: e.toolUseId,
    description: e.description,
    input: e.input,
    permissionSuggestions: e.permissionSuggestions || [],
    createdAt: Date.now(),
  };
}
function k(e) {
  if (!(e || getTeamName())) return !1;
  let o = getAgentId();
  return !o || o === "team-lead";
}
function soe() {
  let e = getTeamName(),
    r = getAgentId();
  return !!e && !!r && !k();
}
async function l(e, r) {
  let o = e || getTeamName();
  if (!o) return null;
  if (!(await readTeamFileAsync(o, r)))
    return (n(`[PermissionSync] Team file not found for team: ${o}`), null);
  return TEAM_LEAD_AGENT_NAME;
}
async function p(e, r, o, s, i) {
  if ((await writeToMailbox(e, r, o, i)) === void 0)
    return (
      n(`[PermissionSync] FAILED to deliver ${s}`, { level: "error" }),
      !1
    );
  return (n(`[PermissionSync] Sent ${s}`), !0);
}
async function Cwt(e, r) {
  let o = await l(e.teamName, r);
  if (!o)
    return (
      n(
        "[PermissionSync] Cannot send permission request: leader name not found",
      ),
      !1
    );
  try {
    let s = createPermissionRequestMessage({
      request_id: e.id,
      agent_id: e.workerName,
      tool_name: e.toolName,
      tool_use_id: e.toolUseId,
      description: e.description,
      input: e.input,
      permission_suggestions: e.permissionSuggestions,
    });
    return await p(
      o,
      {
        from: e.workerName,
        text: b(s),
        timestamp: new Date().toISOString(),
        color: e.workerColor,
      },
      e.teamName,
      `permission request ${b(e.id)} to leader ${b(o)} via mailbox`,
      r,
    );
  } catch (s) {
    return (
      n(`[PermissionSync] Failed to send permission request via mailbox: ${s}`),
      logError(s),
      !1
    );
  }
}
async function Ubn(e, r, o, s, i, a) {
  let m = s || getTeamName();
  if (!m)
    return (
      n(
        "[PermissionSync] Cannot send permission response: team name not found",
      ),
      !1
    );
  try {
    let t = createPermissionResponseMessage({
      request_id: o,
      subtype: r.decision === "approved" ? "success" : "error",
      error: r.feedback,
      updated_input: r.updatedInput,
      permission_updates: r.permissionUpdates,
      tool_use_id: a,
      approved_request: r.approvedRequest,
    });
    return await p(
      e,
      { from: TEAM_LEAD_AGENT_NAME, text: b(t), timestamp: new Date().toISOString() },
      m,
      `permission response for ${b(o)} to worker ${b(e)} via mailbox`,
      i,
    );
  } catch (t) {
    return (
      n(
        `[PermissionSync] Failed to send permission response via mailbox: ${t}`,
      ),
      logError(t),
      !1
    );
  }
}
function yZn() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function SZn(e, r, o, s) {
  let i = o || getTeamName();
  if (!i)
    return (
      n(
        "[PermissionSync] Cannot send sandbox permission request: team name not found",
      ),
      logFeatureBad("swarm_sandbox_permission_request", "no_team_name"),
      !1
    );
  let a = await l(i, s);
  if (!a)
    return (
      n(
        "[PermissionSync] Cannot send sandbox permission request: leader name not found",
      ),
      logFeatureBad("swarm_sandbox_permission_request", "no_leader"),
      !1
    );
  let m = getAgentId(),
    t = getAgentName(),
    g = getTeammateColor();
  if (!m || !t)
    return (
      n(
        "[PermissionSync] Cannot send sandbox permission request: worker ID or name not found",
      ),
      logFeatureBad("swarm_sandbox_permission_request", "no_worker_identity"),
      !1
    );
  try {
    let d = createSandboxPermissionRequestMessage({
        requestId: r,
        workerId: m,
        workerName: t,
        workerColor: g,
        host: e,
      }),
      c = await p(
        a,
        { from: t, text: b(d), timestamp: new Date().toISOString(), color: g },
        i,
        `sandbox permission request ${b(r)} for host ${b(e)} to leader ${b(a)} via mailbox`,
        s,
      );
    if (c) logFeatureOk("swarm_sandbox_permission_request");
    else logFeatureBad("swarm_sandbox_permission_request", "mailbox_write_failed");
    return c;
  } catch (d) {
    return (
      n(
        `[PermissionSync] Failed to send sandbox permission request via mailbox: ${d}`,
      ),
      logError(d),
      logFeatureBad("swarm_sandbox_permission_request", "mailbox_write_failed"),
      !1
    );
  }
}
async function OGt(e, r, o, s, i, a) {
  let m = i || getTeamName();
  if (!m)
    return (
      n(
        "[PermissionSync] Cannot send sandbox permission response: team name not found",
      ),
      !1
    );
  try {
    let t = createSandboxPermissionResponseMessage({ requestId: r, host: o, allow: s });
    return await p(
      e,
      { from: TEAM_LEAD_AGENT_NAME, text: b(t), timestamp: new Date().toISOString() },
      m,
      `sandbox permission response for ${b(r)} (host: ${b(o)}, allow: ${b(s)}) to worker ${b(e)} via mailbox`,
      a,
    );
  } catch (t) {
    return (
      n(
        `[PermissionSync] Failed to send sandbox permission response via mailbox: ${t}`,
      ),
      logError(t),
      !1
    );
  }
}
export { PGt, v1e, Awt, soe, Cwt, Ubn, yZn, SZn, OGt };

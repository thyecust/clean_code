// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, ld } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { AsyncLocalStorage } from "async_hooks";
var u = new AsyncLocalStorage();
function getTeammateContext() {
  return u.getStore();
}
function runWithTeammateContext(e, t) {
  return u.run(e, t);
}
function isInProcessTeammate() {
  return u.getStore() !== void 0;
}
function buildInProcessTeammateContext(e) {
  return { ...e, isInProcess: !0 };
}
import { spawnSync } from "child_process";
function getParentSessionId() {
  let e = getTeammateContext();
  if (e) return e.parentSessionId;
  let t = n();
  return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId;
}
class TeammateIdentities {
  cliParentSessionId = void 0;
  dynamicTeamContext = null;
  isChildSessionMarkerAmbientInTmux = f(x);
  setCliParentSessionId(e) {
    this.cliParentSessionId = e;
  }
  setDynamicTeamContext(e) {
    this.dynamicTeamContext = e;
  }
  setAmbientMarkerProbe(e) {
    this.isChildSessionMarkerAmbientInTmux = f(e);
  }
}
var teammateIdentities = new j(() => new TeammateIdentities());
function n() {
  return teammateIdentities.of(B().host);
}
function setCliParentSessionId(e) {
  n().setCliParentSessionId(e);
}
function setDynamicTeamContext(e) {
  n().setDynamicTeamContext(e);
}
function clearDynamicTeamContext() {
  n().setDynamicTeamContext(null);
}
function getDynamicTeamContext() {
  return n().dynamicTeamContext;
}
function getAgentId() {
  let e = getTeammateContext();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId;
}
function getAgentName() {
  let e = getTeammateContext();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName;
}
function getTeamName(e) {
  let t = getTeammateContext();
  if (t) return t.teamName;
  let { dynamicTeamContext: o } = n();
  if (o?.teamName) return o.teamName;
  return e?.teamName;
}
function isTeammate() {
  if (getTeammateContext()) return !0;
  let { dynamicTeamContext: t } = n();
  return !!(t?.agentId && t?.teamName);
}
function isModelDrivenSession(e) {
  return e !== void 0 || isTeammate() || a.CLAUDE_CODE_CHILD_SESSION;
}
function isNestedInteractiveClaudeSession() {
  if (a.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return !1;
  if (!(a.CLAUDE_CODE_CHILD_SESSION && ld() && !isTeammate())) return !1;
  return !n().isChildSessionMarkerAmbientInTmux();
}
function _setAmbientMarkerProbeForTesting(e) {
  n().setAmbientMarkerProbe(e ?? x);
}
function f(e) {
  let t = null;
  return () => {
    if (t === null)
      try {
        t = e();
      } catch {
        t = !1;
      }
    return t;
  };
}
function x() {
  if (!a.TMUX) return !1;
  let e;
  try {
    e = spawnSync("tmux", ["show-environment", "-g", "CLAUDE_CODE_CHILD_SESSION"], {
      encoding: "utf8",
      timeout: 250,
      stdio: ["ignore", "pipe", "ignore"],
      windowsHide: !0,
    });
  } catch {
    return !1;
  }
  if (e.status !== 0) return !1;
  return _tmuxGlobalEnvOutputHasMarker(e.stdout);
}
function _tmuxGlobalEnvOutputHasMarker(e) {
  return e
    .split(
      `
`,
    )
    .some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}
function getTeammateColor() {
  let e = getTeammateContext();
  if (e) return e.color;
  return n().dynamicTeamContext?.color;
}
function isPlanModeRequired() {
  let e = getTeammateContext();
  if (e) return e.planModeRequired;
  let { dynamicTeamContext: t } = n();
  if (t !== null) return t.planModeRequired;
  return a.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}
function hasNonLeadTeammate(e) {
  if (!e) return !1;
  let { leadAgentId: t, teammates: o } = e;
  return Object.keys(o).some((s) => s !== t);
}
function isTeamLead(e) {
  if (!e?.leadAgentId) return !1;
  let t = getAgentId(),
    o = e.leadAgentId;
  if (t === o) return !0;
  if (!t) return !0;
  return !1;
}
function hasActiveInProcessTeammates(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running") return !0;
  return !1;
}
function hasWorkingInProcessTeammates(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle)
      return !0;
  return !1;
}
function waitForTeammatesToBecomeIdle(e, t) {
  let o = [];
  for (let [s, r] of Object.entries(t.tasks))
    if (r.type === "in_process_teammate" && r.status === "running" && !r.isIdle)
      o.push(s);
  if (o.length === 0) return Promise.resolve();
  return new Promise((s) => {
    let r = o.length,
      d = () => {
        if ((r--, r === 0)) s();
      };
    e((l) => {
      let m = { ...l.tasks };
      for (let c of o) {
        let i = m[c];
        if (i && i.type === "in_process_teammate")
          if (i.isIdle) d();
          else
            m[c] = { ...i, onIdleCallbacks: [...(i.onIdleCallbacks ?? []), d] };
      }
      return { ...l, tasks: m };
    });
  });
}
export {
  getTeammateContext,
  runWithTeammateContext,
  isInProcessTeammate,
  buildInProcessTeammateContext,
  getParentSessionId,
  teammateIdentities,
  setCliParentSessionId,
  setDynamicTeamContext,
  clearDynamicTeamContext,
  getDynamicTeamContext,
  getAgentId,
  getAgentName,
  getTeamName,
  isTeammate,
  isModelDrivenSession,
  isNestedInteractiveClaudeSession,
  _setAmbientMarkerProbeForTesting,
  _tmuxGlobalEnvOutputHasMarker,
  getTeammateColor,
  isPlanModeRequired,
  hasNonLeadTeammate,
  isTeamLead,
  hasActiveInProcessTeammates,
  hasWorkingInProcessTeammates,
  waitForTeammatesToBecomeIdle,
};

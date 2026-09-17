// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
var KNOWN_ENTRYPOINTS = {
  cli: !0,
  mcp: !0,
  "sdk-cli": !0,
  "sdk-ts": !0,
  "sdk-py": !0,
  bench: !0,
  "claude-vscode": !0,
  "claude-code-github-action": !0,
  "local-agent": !0,
  local_agent: !0,
  "claude-desktop": !0,
  remote: !0,
  remote_baku: !0,
  remote_cowork: !0,
  remote_trigger: !0,
  remote_cowork_trigger: !0,
  remote_desktop: !0,
  remote_mobile: !0,
  claude_in_slack: !0,
  "claude-in-slack": !0,
  "claude-in-teams": !0,
  "claude-desktop-3p": !0,
  "claude-security": !0,
  "ssh-remote": !0,
  "claude-coworker": !0,
  "claude-coworker-terminal": !0,
};
var c = new Set(Object.keys(KNOWN_ENTRYPOINTS));
function u(e) {
  return c.has(e);
}
function getEnvEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e && u(e) ? e : void 0;
}
function getEntrypointDisplayName() {
  switch (getEnvEntrypoint()) {
    case "claude-desktop":
    case "claude-desktop-3p":
    case "remote_desktop":
      return "Claude Desktop";
    case "remote_mobile":
      return "Mobile";
    case "local-agent":
    case "remote_cowork":
      return "Cowork";
    case "claude_in_slack":
    case "claude-in-slack":
      return "Claude Tag in Slack";
    case "claude-in-teams":
      return "Claude Tag in Teams";
    case "claude-code-github-action":
      return "GitHub Actions";
    default:
      return;
  }
}
var r = new Set(["claude-desktop", "claude-desktop-3p", "local-agent"]);
function isDesktopHostEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && r.has(e);
}
var l = new Set(["claude-desktop-3p", "local-agent"]);
function isHostManagedSettingsEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && l.has(e);
}
function isDesktopHostEntrypointValue(e) {
  return r.has(e === "local_agent" ? "local-agent" : e);
}
function isNonTerminalEntrypoint(e) {
  return (
    e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"))
  );
}
function isClaudeDesktopAppSession() {
  let e = getSessionEntrypoint();
  return (
    (e === "claude-desktop" || e === "claude-desktop-3p") && !o().childSession
  );
}
function d() {
  let e = getSessionEntrypoint();
  return e !== void 0 && r.has(e);
}
function isRemoteTriggerEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "remote_trigger" || e === "remote_cowork_trigger";
}
function isRemoteCoworkEntrypoint() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
var s = new Set(["remote_cowork", "remote_cowork_trigger"]);
function isCoworkEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && s.has(e);
}
function isCoworkSession() {
  let e = getSessionEntrypoint();
  return e !== void 0 && s.has(e);
}
function isSlackEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "claude_in_slack" || e === "claude-in-slack";
}
function isTeamsEntrypoint() {
  return a.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
var p = new Set([
  "remote",
  "remote_baku",
  "remote_cowork",
  "remote_trigger",
  "remote_cowork_trigger",
  "remote_desktop",
  "remote_mobile",
  "claude_in_slack",
  "claude-in-slack",
  "claude-in-teams",
]);
function isRemoteEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && p.has(e);
}
var E = new Set([
  "claude_in_slack",
  "claude-in-slack",
  "claude-in-teams",
  "remote_trigger",
  "remote_cowork_trigger",
  "remote_cowork",
  "remote_baku",
]);
function shouldAppendPermissionRuleHint() {
  if (Ie(a.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return !1;
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === void 0 || !E.has(e);
}
function isSdkEntrypoint() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "sdk-ts" || e === "sdk-py" || e === "sdk-cli";
}
class i {
  entrypoint = void 0;
  childSession = !1;
  claudecode = !1;
  coworkFrameArtifacts = !1;
  setEntrypoint(e) {
    this.entrypoint = e;
  }
  setChildSession(e) {
    this.childSession = e;
  }
  setClaudecode(e) {
    this.claudecode = e;
  }
  setCoworkFrameArtifacts(e) {
    this.coworkFrameArtifacts = e;
  }
}
var _ = new j(() => new i());
function o() {
  return _.of(B().host);
}
function getSessionEntrypoint() {
  return o().entrypoint;
}
function isDesktopHostSession() {
  return d() && !o().childSession;
}
function isTopLevelCoworkSession() {
  let e = o();
  return (
    e.entrypoint !== void 0 &&
    (s.has(e.entrypoint) ||
      e.entrypoint === "local-agent" ||
      e.entrypoint === "local_agent") &&
    !e.childSession
  );
}
var f = new Set(["remote", "remote_desktop", "remote_mobile", "ssh-remote"]);
function isThinClientSession() {
  let e = o();
  return (
    e.entrypoint !== void 0 &&
    f.has(e.entrypoint) &&
    !e.childSession &&
    !e.claudecode
  );
}
function isVsCodeExtensionSession() {
  let e = o();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}
function isClaudecodeEnv() {
  return o().claudecode;
}
function hasCoworkFrameArtifacts() {
  return o().coworkFrameArtifacts;
}
function initHostState(e) {
  T(e);
  let t = o();
  (t.setEntrypoint(a.CLAUDE_CODE_ENTRYPOINT),
    t.setChildSession(Boolean(a.CLAUDE_CODE_CHILD_SESSION)),
    t.setClaudecode(Boolean(a.CLAUDECODE)),
    t.setCoworkFrameArtifacts(a.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS));
}
function T(e) {
  if (a.CLAUDE_CODE_ENTRYPOINT) {
    if (a.CLAUDE_CODE_ENTRYPOINT === "local_agent")
      a.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
    if (a.CLAUDE_CODE_ENTRYPOINT === "cli" && e)
      a.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
    return;
  }
  let t = process.argv.slice(2),
    n = t.indexOf("mcp");
  if (n !== -1 && t[n + 1] === "serve") {
    a.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
    return;
  }
  if (Ie(a.CLAUDE_CODE_ACTION)) {
    a.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
    return;
  }
  a.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli");
}
function C(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t);
}
function parseSessionStartMode(e) {
  let t = C(e);
  if (
    t.includes("-r") ||
    t.includes("--resume") ||
    t.includes("--from-pr") ||
    t.some((n) => n.startsWith("--resume=") || n.startsWith("--from-pr="))
  )
    return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh";
}
export {
  KNOWN_ENTRYPOINTS,
  getEnvEntrypoint,
  getEntrypointDisplayName,
  isDesktopHostEntrypoint,
  isHostManagedSettingsEntrypoint,
  isDesktopHostEntrypointValue,
  isNonTerminalEntrypoint,
  isClaudeDesktopAppSession,
  isRemoteTriggerEntrypoint,
  isRemoteCoworkEntrypoint,
  isCoworkEntrypoint,
  isCoworkSession,
  isSlackEntrypoint,
  isTeamsEntrypoint,
  isRemoteEntrypoint,
  shouldAppendPermissionRuleHint,
  isSdkEntrypoint,
  getSessionEntrypoint,
  isDesktopHostSession,
  isTopLevelCoworkSession,
  isThinClientSession,
  isVsCodeExtensionSession,
  isClaudecodeEnv,
  hasCoworkFrameArtifacts,
  initHostState,
  parseSessionStartMode,
};

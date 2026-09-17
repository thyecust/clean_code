// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { shouldForwardEnvVar } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { formatPermissionRule } from "../工具Bash-Shell/permission-rule-parsing.js";
import { BASH_TOOL_NAME, isLocalSettingsGitTracked } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getSettingsTrustGates, getPermissionRulesForSource } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { isAbsolute } from "path";
function S() {
  return { sources: m(), read: getSettingsForSource, rules: getPermissionRulesForSource };
}
var m = () => {
  let { gateProject: t } = getSettingsTrustGates(),
    e = isLocalSettingsGitTracked({ onIndeterminate: "tracked" });
  return [
    ...(t ? [["projectSettings", ".claude/settings.json"]] : []),
    ...(e ? [["localSettings", ".claude/settings.local.json"]] : []),
  ];
};
function hasHookSettings(t) {
  if (t === null) return !1;
  if (t.statusLine) return !0;
  if (t.fileSuggestion) return !0;
  if (t.subagentStatusLine) return !0;
  if (!t.hooks) return !1;
  for (let e of Object.values(t.hooks)) if (e.length > 0) return !0;
  return !1;
}
function getHookSettingsSourceFiles(
  t = {
    sources: [
      ["projectSettings", ".claude/settings.json"],
      ["localSettings", ".claude/settings.local.json"],
    ],
    read: getSettingsForSource,
    rules: getPermissionRulesForSource,
  },
) {
  let e = [];
  for (let [s, r] of t.sources) if (hasHookSettings(t.read(s))) e.push(r);
  return e;
}
function l(t) {
  return t.some(
    (e) =>
      e.ruleBehavior === "allow" &&
      (e.ruleValue.toolName === BASH_TOOL_NAME ||
        e.ruleValue.toolName.startsWith(BASH_TOOL_NAME + "(")),
  );
}
var R = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu,
  a = 60;
function d(t) {
  let e = stripAnsi(t).replace(R, "").trim();
  return e.length > a ? `${truncateToCodeUnits(e, a)}\u2026` : e;
}
var x = new Set([
  BASH_TOOL_NAME,
  "PowerShell",
  "Write",
  "Edit",
  "MultiEdit",
  "NotebookEdit",
  "WebFetch",
  "WebSearch",
]);
function g(t) {
  let { toolName: e, ruleContent: s } = t.ruleValue,
    r = x.has(e) || e.startsWith("mcp__"),
    i = s === void 0;
  if (r) return i ? 0 : 1;
  return i ? 2 : 3;
}
function collectAllowRules(t = S()) {
  let e = [],
    s = [];
  for (let [o, n] of t.sources) {
    let u = t.rules(o).filter((h) => h.ruleBehavior === "allow");
    if (u.length > 0) (e.push(n), s.push(...u));
  }
  let r = s.length;
  s.sort((o, n) => g(o) - g(n));
  let i = new Set(),
    c = [];
  for (let o of s) {
    let n = d(formatPermissionRule(o.ruleValue));
    if (n.length > 0 && !i.has(n)) (i.add(n), c.push(n));
  }
  return { rules: c, sources: e, rawCount: r };
}
function p(t) {
  if (isAbsolute(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2;
}
function collectAdditionalDirectories(t = S()) {
  let e = [],
    s = [];
  for (let [o, n] of t.sources) {
    let u = t.read(o)?.permissions?.additionalDirectories ?? [];
    if (u.length > 0) (e.push(n), s.push(...u));
  }
  let r = s.length,
    i = new Set(),
    c = [];
  for (let o of s) {
    let n = d(o);
    if (n.length > 0 && !i.has(n)) (i.add(n), c.push(n));
  }
  return (c.sort((o, n) => p(o) - p(n)), { dirs: c, sources: e, rawCount: r });
}
function getBashExecutionSourceFiles() {
  let t = [],
    e = getPermissionRulesForSource("projectSettings");
  if (l(e)) t.push(".claude/settings.json");
  let s = getPermissionRulesForSource("localSettings");
  if (l(s)) t.push(".claude/settings.local.json");
  return t;
}
function formatListWithAnd(t, e) {
  if (t.length === 0) return "";
  let s = e === 0 ? void 0 : e;
  if (!s || t.length <= s) {
    if (t.length === 1) return t[0];
    if (t.length === 2) return `${t[0]} and ${t[1]}`;
    let c = t.at(-1);
    return `${t.slice(0, -1).join(", ")}, and ${c}`;
  }
  let r = t.slice(0, s),
    i = t.length - s;
  if (r.length === 1) return `${r[0]} and ${i} more`;
  return `${r.join(", ")}, and ${i} more`;
}
function hasOtelHeadersHelper(t) {
  return !!t?.otelHeadersHelper;
}
function getOtelHeadersHelperSourceFiles() {
  let t = [],
    e = getSettingsForSource("projectSettings");
  if (hasOtelHeadersHelper(e)) t.push(".claude/settings.json");
  let s = getSettingsForSource("localSettings");
  if (hasOtelHeadersHelper(s)) t.push(".claude/settings.local.json");
  return t;
}
function getAutoMemoryDirectorySourceFiles() {
  let t = [];
  if (getSettingsForSource("projectSettings")?.autoMemoryDirectory !== void 0)
    t.push(".claude/settings.json");
  if (getSettingsForSource("localSettings")?.autoMemoryDirectory !== void 0)
    t.push(".claude/settings.local.json");
  return t;
}
function hasApiKeyHelper(t) {
  return !!t?.apiKeyHelper;
}
function getApiKeyHelperSourceFiles() {
  let t = [],
    e = getSettingsForSource("projectSettings");
  if (hasApiKeyHelper(e)) t.push(".claude/settings.json");
  let s = getSettingsForSource("localSettings");
  if (hasApiKeyHelper(s)) t.push(".claude/settings.local.json");
  return t;
}
function hasAwsAuthCommands(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}
function getAwsCommandSourceFiles() {
  let t = [],
    e = getSettingsForSource("projectSettings");
  if (hasAwsAuthCommands(e)) t.push(".claude/settings.json");
  let s = getSettingsForSource("localSettings");
  if (hasAwsAuthCommands(s)) t.push(".claude/settings.local.json");
  return t;
}
function hasGcpAuthCommand(t) {
  return !!t?.gcpAuthRefresh;
}
function getGcpCommandSourceFiles() {
  let t = [],
    e = getSettingsForSource("projectSettings");
  if (hasGcpAuthCommand(e)) t.push(".claude/settings.json");
  let s = getSettingsForSource("localSettings");
  if (hasGcpAuthCommand(s)) t.push(".claude/settings.local.json");
  return t;
}
function hasProxyAuthHelper(t) {
  return !!t?.proxyAuthHelper;
}
function getProxyAuthHelperSourceFiles() {
  let t = [],
    e = getSettingsForSource("projectSettings");
  if (hasProxyAuthHelper(e)) t.push(".claude/settings.json");
  let s = getSettingsForSource("localSettings");
  if (hasProxyAuthHelper(s)) t.push(".claude/settings.local.json");
  return t;
}
function f(t) {
  if (!t?.env) return !1;
  return Object.entries(t.env).some(([e, s]) => !shouldForwardEnvVar(e, s));
}
function getDangerousEnvVarSourceFiles() {
  let t = [],
    e = getSettingsForSource("projectSettings");
  if (f(e)) t.push(".claude/settings.json");
  let s = getSettingsForSource("localSettings");
  if (f(s)) t.push(".claude/settings.local.json");
  return t;
}
export {
  hasHookSettings,
  getHookSettingsSourceFiles,
  collectAllowRules,
  collectAdditionalDirectories,
  getBashExecutionSourceFiles,
  formatListWithAnd,
  hasOtelHeadersHelper,
  getOtelHeadersHelperSourceFiles,
  getAutoMemoryDirectorySourceFiles,
  hasApiKeyHelper,
  getApiKeyHelperSourceFiles,
  hasAwsAuthCommands,
  getAwsCommandSourceFiles,
  hasGcpAuthCommand,
  getGcpCommandSourceFiles,
  hasProxyAuthHelper,
  getProxyAuthHelperSourceFiles,
  getDangerousEnvVarSourceFiles,
};

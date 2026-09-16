// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { $Be } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { ye } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { Er } from "../工具Bash-Shell/chunk-4pap8y5n.js";
import { qe, YC } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { oEt, qCe } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { isAbsolute as j } from "path";
function S() {
  return { sources: m(), read: ye, rules: qCe };
}
var m = () => {
  let { gateProject: t } = oEt(),
    e = YC({ onIndeterminate: "tracked" });
  return [
    ...(t ? [["projectSettings", ".claude/settings.json"]] : []),
    ...(e ? [["localSettings", ".claude/settings.local.json"]] : []),
  ];
};
function jPt(t) {
  if (t === null) return !1;
  if (t.statusLine) return !0;
  if (t.fileSuggestion) return !0;
  if (t.subagentStatusLine) return !0;
  if (!t.hooks) return !1;
  for (let e of Object.values(t.hooks)) if (e.length > 0) return !0;
  return !1;
}
function een(
  t = {
    sources: [
      ["projectSettings", ".claude/settings.json"],
      ["localSettings", ".claude/settings.local.json"],
    ],
    read: ye,
    rules: qCe,
  },
) {
  let e = [];
  for (let [s, r] of t.sources) if (jPt(t.read(s))) e.push(r);
  return e;
}
function l(t) {
  return t.some(
    (e) =>
      e.ruleBehavior === "allow" &&
      (e.ruleValue.toolName === qe ||
        e.ruleValue.toolName.startsWith(qe + "(")),
  );
}
var R = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu,
  a = 60;
function d(t) {
  let e = pt(t).replace(R, "").trim();
  return e.length > a ? `${oe(e, a)}\u2026` : e;
}
var x = new Set([
  qe,
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
function s0e(t = S()) {
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
    let n = d(Er(o.ruleValue));
    if (n.length > 0 && !i.has(n)) (i.add(n), c.push(n));
  }
  return { rules: c, sources: e, rawCount: r };
}
function p(t) {
  if (j(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2;
}
function i0e(t = S()) {
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
function ten() {
  let t = [],
    e = qCe("projectSettings");
  if (l(e)) t.push(".claude/settings.json");
  let s = qCe("localSettings");
  if (l(s)) t.push(".claude/settings.local.json");
  return t;
}
function jb(t, e) {
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
function WPt(t) {
  return !!t?.otelHeadersHelper;
}
function nen() {
  let t = [],
    e = ye("projectSettings");
  if (WPt(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (WPt(s)) t.push(".claude/settings.local.json");
  return t;
}
function ren() {
  let t = [];
  if (ye("projectSettings")?.autoMemoryDirectory !== void 0)
    t.push(".claude/settings.json");
  if (ye("localSettings")?.autoMemoryDirectory !== void 0)
    t.push(".claude/settings.local.json");
  return t;
}
function GPt(t) {
  return !!t?.apiKeyHelper;
}
function oen() {
  let t = [],
    e = ye("projectSettings");
  if (GPt(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (GPt(s)) t.push(".claude/settings.local.json");
  return t;
}
function qPt(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}
function sen() {
  let t = [],
    e = ye("projectSettings");
  if (qPt(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (qPt(s)) t.push(".claude/settings.local.json");
  return t;
}
function zPt(t) {
  return !!t?.gcpAuthRefresh;
}
function ien() {
  let t = [],
    e = ye("projectSettings");
  if (zPt(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (zPt(s)) t.push(".claude/settings.local.json");
  return t;
}
function VPt(t) {
  return !!t?.proxyAuthHelper;
}
function aen() {
  let t = [],
    e = ye("projectSettings");
  if (VPt(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (VPt(s)) t.push(".claude/settings.local.json");
  return t;
}
function f(t) {
  if (!t?.env) return !1;
  return Object.entries(t.env).some(([e, s]) => !$Be(e, s));
}
function len() {
  let t = [],
    e = ye("projectSettings");
  if (f(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (f(s)) t.push(".claude/settings.local.json");
  return t;
}
export {
  jPt,
  een,
  s0e,
  i0e,
  ten,
  jb,
  WPt,
  nen,
  ren,
  GPt,
  oen,
  qPt,
  sen,
  zPt,
  ien,
  VPt,
  aen,
  len,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { K, kg } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { or, Ot } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { ite } from "../MCP客户端/chunk-xcbagjx9.js";
import { bp, qDe, Vp, STe, a$, lEe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { JI, f1e, K_ } from "./chunk-9d5wk5b9.js";
import { gNe } from "./chunk-7wsy8vxb.js";
import { fee } from "../Teammates团队/chunk-2j84y871.js";
import { Pbe, lte, b9n } from "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
import { G, Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function a7() {
  return !a.CLAUDE_DISABLE_ADOPT;
}
var c = 50;
function l(e) {
  let o = [];
  for (let n of kg()) {
    if (e && !e(n)) continue;
    o.push({
      label: "scheduled task",
      detail: `${h(n)} \xB7 ${or(n.prompt, c, !0)}`,
    });
  }
  return o;
}
function h(e) {
  if (e.recurring) return K_(e.cron);
  let o = JI(e.cron),
    n = o && f1e(o, new Date(e.createdAt));
  if (!n) return K_(e.cron);
  let t = Math.max(0, n.getTime() - Date.now());
  return `Runs once in ${Ot(t, { mostSignificantOnly: !0 })}`;
}
function CBn(e, { includeDream: o = !1 } = {}) {
  let n = [];
  for (let t of Object.values(e)) {
    if (!Vp(t) || t.type === "remote_agent") continue;
    if (!o && t.type === "dream") continue;
    if (t.type === "monitor_ws" && t.ambient) continue;
    if (STe(t)) continue;
    n.push({ label: qDe[t.type], detail: or(t.description, c, !0) });
  }
  return (n.push(...l()), n);
}
var b = {
  agent: "subagent",
  workflow: "workflow",
  shell: "shell",
  monitor: "monitor",
  mcp: "MCP task",
};
function vBn() {
  let { items: e, kinds: o } = gNe(),
    n = [];
  for (let t of e) {
    if (t.kind === "todo" || t.doneAt !== void 0) continue;
    n.push({ label: b[t.kind], detail: or(t.label, c, !0) });
  }
  if (o.includes("auto_mode_scan"))
    n.push({
      label: qDe.auto_mode_scan,
      detail: "environment scan for /auto-mode-setup",
    });
  return (n.push(...l()), n);
}
function S(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && !a$(e);
}
function d(e) {
  return Object.values(e)
    .filter(Vp)
    .filter((o) => o.type !== "remote_agent" && o.type !== "dream")
    .filter((o) => !S(o));
}
function T(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if (e.type === "remote_agent" || e.type === "dream") return !1;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === !0) return !1;
      return e.sidecarSessionId !== K() || e.sidecarProjectDir !== ite();
    }
    return !1;
  }
  if (e.type === "monitor_ws" && e.ambient === !0) return p(e);
  return !0;
}
function m(e) {
  return a$(e) && e.frameLive !== void 0;
}
function bDt() {
  return a7() && !a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function p(e) {
  return a$(e) && lEe(e);
}
function inn(e) {
  return Object.values(e).some(p) || f();
}
function f() {
  return b9n() || lte().size > 0;
}
function iIe(e, o) {
  let n = o?.autoRepliesCarried === !0,
    t = Object.values(e).filter((i) => T(i) && !(n && m(i)));
  if (t.length === 0)
    return !n && f() ? { kind: "comment_monitor", activeTasks: !1 } : void 0;
  return { kind: t.every(a$) ? "comment_monitor" : "tasks", activeTasks: !0 };
}
function Rv(e) {
  let o = d(e),
    n = kg().length,
    t = Y(o.map(g)),
    i = new Set(o.flatMap((r) => (m(r) ? [r.frameLive.slug] : []))),
    s = !a7() ? 0 : G(Y([...Pbe(), ...lte()]), (r) => !i.has(r));
  if (s > 0 && !t.includes("monitor_ws")) t.push("monitor_ws");
  let u = bDt() ? i.size + s : 0;
  if (n > 0) t.push("session_cron");
  let k = G(
    Object.values(e),
    (r) =>
      r.type === "local_agent" &&
      r.status === "running" &&
      !r.isBackgrounded &&
      r.parentAgentId === void 0,
  );
  return {
    count: o.length + n + s,
    restartableCount: k,
    kinds: t,
    drainableMonitors: u,
    carriedMonitors: i.size + s,
  };
}
function g(e) {
  return bp(e) && e.kind === "monitor" ? "monitor" : e.type;
}
function Nle(e, o) {
  let n = d(e),
    t = l(o?.cronFilter),
    i = n.length + t.length,
    s = Y(n.map(g));
  if (t.length > 0) s.push("session_cron");
  let u = [fee(n), t.length ? `${t.length} ${x(t.length, "loop")}` : ""];
  return { count: i, kinds: s, summary: u.filter(Boolean).join(", ") };
}
function RBn() {
  let { tasks: e } = gNe();
  if (e === 0) return;
  return `Detached \u2014 ${e} ${x(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
export { a7, CBn, vBn, bDt, inn, iIe, Rv, Nle, RBn };

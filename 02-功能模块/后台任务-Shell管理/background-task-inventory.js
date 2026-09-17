// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { K, kg } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { truncate, formatDuration } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { getSessionProjectDir } from "../MCP客户端/mcp-task-metadata.js";
import { bp, qDe, Vp, STe, a$, lEe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { parseCronExpression, getNextCronFireDate, formatCronSchedule } from "./scheduled-tasks.js";
import { gNe } from "./chunk-7wsy8vxb.js";
import { formatBackgroundTaskSummary } from "../Teammates团队/background-task-summary.js";
import { getAutoReactWiredSlugs, getBootingAutoReactArmSlugs, hasArmedAutoReactSupervisor } from "../../01-核心基础设施/共享小工具-未细化/auto-react-state.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function isTaskAdoptionEnabled() {
  return !a.CLAUDE_DISABLE_ADOPT;
}
var c = 50;
function l(e) {
  let o = [];
  for (let n of kg()) {
    if (e && !e(n)) continue;
    o.push({
      label: "scheduled task",
      detail: `${h(n)} \xB7 ${truncate(n.prompt, c, !0)}`,
    });
  }
  return o;
}
function h(e) {
  if (e.recurring) return formatCronSchedule(e.cron);
  let o = parseCronExpression(e.cron),
    n = o && getNextCronFireDate(o, new Date(e.createdAt));
  if (!n) return formatCronSchedule(e.cron);
  let t = Math.max(0, n.getTime() - Date.now());
  return `Runs once in ${formatDuration(t, { mostSignificantOnly: !0 })}`;
}
function buildBackgroundTaskItems(e, { includeDream: o = !1 } = {}) {
  let n = [];
  for (let t of Object.values(e)) {
    if (!Vp(t) || t.type === "remote_agent") continue;
    if (!o && t.type === "dream") continue;
    if (t.type === "monitor_ws" && t.ambient) continue;
    if (STe(t)) continue;
    n.push({ label: qDe[t.type], detail: truncate(t.description, c, !0) });
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
function buildInFlightTaskItems() {
  let { items: e, kinds: o } = gNe(),
    n = [];
  for (let t of e) {
    if (t.kind === "todo" || t.doneAt !== void 0) continue;
    n.push({ label: b[t.kind], detail: truncate(t.label, c, !0) });
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
      return e.sidecarSessionId !== K() || e.sidecarProjectDir !== getSessionProjectDir();
    }
    return !1;
  }
  if (e.type === "monitor_ws" && e.ambient === !0) return p(e);
  return !0;
}
function m(e) {
  return a$(e) && e.frameLive !== void 0;
}
function isBgExitHandoffEnabled() {
  return isTaskAdoptionEnabled() && !a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function p(e) {
  return a$(e) && lEe(e);
}
function hasCarriedCommentMonitor(e) {
  return Object.values(e).some(p) || f();
}
function f() {
  return hasArmedAutoReactSupervisor() || getBootingAutoReactArmSlugs().size > 0;
}
function classifyBackgroundActivity(e, o) {
  let n = o?.autoRepliesCarried === !0,
    t = Object.values(e).filter((i) => T(i) && !(n && m(i)));
  if (t.length === 0)
    return !n && f() ? { kind: "comment_monitor", activeTasks: !1 } : void 0;
  return { kind: t.every(a$) ? "comment_monitor" : "tasks", activeTasks: !0 };
}
function summarizeBackgroundTasks(e) {
  let o = d(e),
    n = kg().length,
    t = dedupe(o.map(g)),
    i = new Set(o.flatMap((r) => (m(r) ? [r.frameLive.slug] : []))),
    s = !isTaskAdoptionEnabled() ? 0 : countMatching(dedupe([...getAutoReactWiredSlugs(), ...getBootingAutoReactArmSlugs()]), (r) => !i.has(r));
  if (s > 0 && !t.includes("monitor_ws")) t.push("monitor_ws");
  let u = isBgExitHandoffEnabled() ? i.size + s : 0;
  if (n > 0) t.push("session_cron");
  let k = countMatching(
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
function summarizeAdoptableTasks(e, o) {
  let n = d(e),
    t = l(o?.cronFilter),
    i = n.length + t.length,
    s = dedupe(n.map(g));
  if (t.length > 0) s.push("session_cron");
  let u = [formatBackgroundTaskSummary(n), t.length ? `${t.length} ${pluralize(t.length, "loop")}` : ""];
  return { count: i, kinds: s, summary: u.filter(Boolean).join(", ") };
}
function formatDetachedBackgroundMessage() {
  let { tasks: e } = gNe();
  if (e === 0) return;
  return `Detached \u2014 ${e} ${pluralize(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
export { isTaskAdoptionEnabled, buildBackgroundTaskItems, buildInFlightTaskItems, isBgExitHandoffEnabled, hasCarriedCommentMonitor, classifyBackgroundActivity, summarizeBackgroundTasks, summarizeAdoptableTasks, formatDetachedBackgroundMessage };

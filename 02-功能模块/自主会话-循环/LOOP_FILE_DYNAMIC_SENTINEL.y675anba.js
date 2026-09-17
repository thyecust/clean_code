// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 73 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { A, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { PUSH_NOTIFICATION_TOOL_NAME, isAgentPushNotificationEnabled } from "../Bridge-RemoteControl/push-notification-tool.js";
import { SCHEDULE_WAKEUP_TOOL_NAME, sCe, AUTONOMOUS_LOOP_DYNAMIC_SENTINEL, TASK_LIST_TOOL_NAME, TASK_STOP_TOOL_NAME } from "../Teammates团队/chunk-z2t8b9yc.js";
import { MONITOR_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/monitor-tool-name.js";
import { importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { readFileSync } from "fs";
import { join as u } from "path";
var p = importMetaRequire("./loopAutonomousPreamble-07qcyhv4.md");
var y = importMetaRequire("./loopAutonomousPreamblePersistent-3zqtkrvg.md");
function g() {
  if (a.CLAUDE_CODE_LOOP_PERSISTENT) return !0;
  return H("tengu_kairos_loop_persistent", !1);
}
function getAutonomousLoopPreamble() {
  return g() ? y : p;
}
function logAutonomousLoopActivation() {
  logEvent("tengu_kairos_loop_persistent_activated", { variant: g() });
}
function h(e = !1) {
  if (!isAgentPushNotificationEnabled()) return "";
  let o =
    !e && g()
      ? "newly blocked on a decision you won't make alone, you're ending the loop"
      : "newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";
  return `

Use ${PUSH_NOTIFICATION_TOOL_NAME} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`;
}
function b() {
  return `# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${SCHEDULE_WAKEUP_TOOL_NAME} from this tick.${h()}`;
}
var m = `

If a ${MONITOR_TOOL_NAME} is armed (check ${TASK_LIST_TOOL_NAME}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${MONITOR_TOOL_NAME} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${SCHEDULE_WAKEUP_TOOL_NAME} with \`stop: true\` and ${TASK_STOP_TOOL_NAME} the monitor (use ${TASK_LIST_TOOL_NAME} to find its task ID if no longer in context).`;
function E() {
  return `# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${SCHEDULE_WAKEUP_TOOL_NAME} tool (not a recurring cron). To keep the loop alive, call ${SCHEDULE_WAKEUP_TOOL_NAME} again at the end of this turn with \`prompt\` set to the literal sentinel \`${AUTONOMOUS_LOOP_DYNAMIC_SENTINEL}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`;
}
function I(e) {
  return e === sCe || e === AUTONOMOUS_LOOP_DYNAMIC_SENTINEL;
}
function L(e, t) {
  if (!I(t)) return null;
  logAutonomousLoopActivation();
  let o = t === AUTONOMOUS_LOOP_DYNAMIC_SENTINEL ? E() : b();
  if (e.autonomousPreambleDelivered || e.lastLoopFileDelivered !== null)
    return o;
  return (
    (e.autonomousPreambleDelivered = !0),
    `${getAutonomousLoopPreamble()}

---

${o}`
  );
}
var k = "__autonomous_preamble__",
  LOOP_FILE_SENTINEL = "<<loop.md>>",
  LOOP_FILE_DYNAMIC_SENTINEL = "<<loop.md-dynamic>>";
function C() {
  return `# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${SCHEDULE_WAKEUP_TOOL_NAME} from this tick.${h(!0)}`;
}
function F() {
  return `# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${SCHEDULE_WAKEUP_TOOL_NAME} tool (not a recurring cron). To keep the loop alive, call ${SCHEDULE_WAKEUP_TOOL_NAME} again at the end of this turn with \`prompt\` set to the literal sentinel \`${LOOP_FILE_DYNAMIC_SENTINEL}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`;
}
function M() {
  return `# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${SCHEDULE_WAKEUP_TOOL_NAME} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${SCHEDULE_WAKEUP_TOOL_NAME} again at the end of this turn with \`prompt\` set to the literal sentinel \`${LOOP_FILE_DYNAMIC_SENTINEL}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`;
}
var l = 25000;
function P(e) {
  if (e.length <= l) return e;
  let t = e.lastIndexOf(
    `
`,
    l,
  );
  return `${e.slice(0, t > 0 ? t : l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`;
}
function _() {
  return c(u(sn(), ".claude", "loop.md")) ?? c(u(getClaudeConfigDir(), "loop.md"));
}
function c(e) {
  let t;
  try {
    t = readFileSync(e, "utf-8");
  } catch (n) {
    if (Rt(n) || A(n) === "EISDIR") return null;
    throw n;
  }
  let o = t.trim();
  if (o.length === 0) return null;
  return { path: e, content: P(o) };
}
async function readLoopFileAsync(e) {
  if (!e) return _();
  let t = c(u(sn(), ".claude", "loop.md"));
  if (t) return t;
  let o = u(getClaudeConfigDir(), "loop.md"),
    n = await e.read([STORAGE_KEYS.state("loop-file")]);
  if (!n.ok) return c(o);
  let r = n.value.items[0];
  if (!r.found) return null;
  let s = Buffer.from(r.value.buffer, r.value.byteOffset, r.value.byteLength)
    .toString("utf-8")
    .trim();
  if (s.length === 0) return null;
  return { path: o, content: P(s) };
}
function isLoopFileSentinel(e) {
  return e === LOOP_FILE_SENTINEL || e === LOOP_FILE_DYNAMIC_SENTINEL;
}
function D(e, t) {
  if (!isLoopFileSentinel(t)) return null;
  return T(e, t, _());
}
async function q(e, t, o) {
  if (!isLoopFileSentinel(t)) return null;
  return T(e, t, await readLoopFileAsync(o));
}
function T(e, t, o) {
  let n = t === LOOP_FILE_DYNAMIC_SENTINEL;
  if (o) {
    let s = n ? F() : C();
    if (e.lastLoopFileDelivered === o.content) return s;
    return (
      (e.lastLoopFileDelivered = o.content),
      `# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`
    );
  }
  logAutonomousLoopActivation();
  let r = n ? M() : b();
  if (e.lastLoopFileDelivered === k || e.autonomousPreambleDelivered) return r;
  return (
    (e.lastLoopFileDelivered = k),
    (e.autonomousPreambleDelivered = !0),
    `${getAutonomousLoopPreamble()}

---

${r}`
  );
}
function isLoopDefaultSentinel(e) {
  return I(e) || isLoopFileSentinel(e);
}
function resolveLoopDefaultFire(e, t) {
  return L(e, t) ?? D(e, t) ?? t;
}
async function resolveLoopDefaultFireAsync(e, t, o) {
  return L(e, t) ?? (await q(e, t, o)) ?? t;
}
export {
  LOOP_FILE_DYNAMIC_SENTINEL,
  LOOP_FILE_SENTINEL,
  getAutonomousLoopPreamble,
  isLoopDefaultSentinel,
  isLoopFileSentinel,
  logAutonomousLoopActivation,
  readLoopFileAsync,
  resolveLoopDefaultFire,
  resolveLoopDefaultFireAsync,
};

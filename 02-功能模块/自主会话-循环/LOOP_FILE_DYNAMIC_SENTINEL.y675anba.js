// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { A, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import { cR, oJ } from "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../工具Monitor/chunk-kxk3njnj.js";
import { Xi, sCe, eoe, kT, sg } from "../Teammates团队/chunk-z2t8b9yc.js";
import { ia } from "../../01-核心基础设施/共享小工具-未细化/chunk-5vhxw3s9.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { Ae } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { readFileSync as S } from "fs";
import { join as u } from "path";
var p = Ae("./loopAutonomousPreamble-07qcyhv4.md");
var y = Ae("./loopAutonomousPreamblePersistent-3zqtkrvg.md");
function g() {
  if (a.CLAUDE_CODE_LOOP_PERSISTENT) return !0;
  return H("tengu_kairos_loop_persistent", !1);
}
function v() {
  return g() ? y : p;
}
function w() {
  i("tengu_kairos_loop_persistent_activated", { variant: g() });
}
function h(e = !1) {
  if (!oJ()) return "";
  let o =
    !e && g()
      ? "newly blocked on a decision you won't make alone, you're ending the loop"
      : "newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";
  return `

Use ${cR} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`;
}
function b() {
  return `# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Xi} from this tick.${h()}`;
}
var m = `

If a ${ia} is armed (check ${kT}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ia} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Xi} with \`stop: true\` and ${sg} the monitor (use ${kT} to find its task ID if no longer in context).`;
function E() {
  return `# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Xi} tool (not a recurring cron). To keep the loop alive, call ${Xi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${eoe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`;
}
function I(e) {
  return e === sCe || e === eoe;
}
function L(e, t) {
  if (!I(t)) return null;
  w();
  let o = t === eoe ? E() : b();
  if (e.autonomousPreambleDelivered || e.lastLoopFileDelivered !== null)
    return o;
  return (
    (e.autonomousPreambleDelivered = !0),
    `${v()}

---

${o}`
  );
}
var k = "__autonomous_preamble__",
  x = "<<loop.md>>",
  d = "<<loop.md-dynamic>>";
function C() {
  return `# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Xi} from this tick.${h(!0)}`;
}
function F() {
  return `# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Xi} tool (not a recurring cron). To keep the loop alive, call ${Xi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`;
}
function M() {
  return `# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Xi} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Xi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`;
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
  return c(u(sn(), ".claude", "loop.md")) ?? c(u(be(), "loop.md"));
}
function c(e) {
  let t;
  try {
    t = S(e, "utf-8");
  } catch (n) {
    if (Rt(n) || A(n) === "EISDIR") return null;
    throw n;
  }
  let o = t.trim();
  if (o.length === 0) return null;
  return { path: e, content: P(o) };
}
async function N(e) {
  if (!e) return _();
  let t = c(u(sn(), ".claude", "loop.md"));
  if (t) return t;
  let o = u(be(), "loop.md"),
    n = await e.read([Ce.state("loop-file")]);
  if (!n.ok) return c(o);
  let r = n.value.items[0];
  if (!r.found) return null;
  let s = Buffer.from(r.value.buffer, r.value.byteOffset, r.value.byteLength)
    .toString("utf-8")
    .trim();
  if (s.length === 0) return null;
  return { path: o, content: P(s) };
}
function f(e) {
  return e === x || e === d;
}
function D(e, t) {
  if (!f(t)) return null;
  return T(e, t, _());
}
async function q(e, t, o) {
  if (!f(t)) return null;
  return T(e, t, await N(o));
}
function T(e, t, o) {
  let n = t === d;
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
  w();
  let r = n ? M() : b();
  if (e.lastLoopFileDelivered === k || e.autonomousPreambleDelivered) return r;
  return (
    (e.lastLoopFileDelivered = k),
    (e.autonomousPreambleDelivered = !0),
    `${v()}

---

${r}`
  );
}
function re(e) {
  return I(e) || f(e);
}
function se(e, t) {
  return L(e, t) ?? D(e, t) ?? t;
}
async function ae(e, t, o) {
  return L(e, t) ?? (await q(e, t, o)) ?? t;
}
export {
  d as LOOP_FILE_DYNAMIC_SENTINEL,
  x as LOOP_FILE_SENTINEL,
  v as getAutonomousLoopPreamble,
  re as isLoopDefaultSentinel,
  f as isLoopFileSentinel,
  w as logAutonomousLoopActivation,
  N as readLoopFileAsync,
  se as resolveLoopDefaultFire,
  ae as resolveLoopDefaultFireAsync,
};

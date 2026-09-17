// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 200 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ze, wje, Ixe, Lrt, Eje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logFeatureOk as y, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { g6 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { jn } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Zgt, nY, Re, Dk, Hyt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { It, Yn } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { wf } from "../../01-核心基础设施/共享小工具-未细化/chunk-pbd0pf42.js";
import { SK } from "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import { getCronJitterConfig as wre } from "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import { YXn, QXn, BY } from "../语音-音频/chunk-cfhndstm.js";
import { isKairosCronEnabled as EC } from "../Cron-定时任务/chunk-mk3zm4ew.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import { createCronScheduler as UJt } from "../工具AskUserQuestion/工具AskUserQuestion.72ht85nd.js";
import { qc } from "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import { zqe } from "./chunk-4ma81w0c.js";
import { E, vr, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { xs } from "./chunk-mrfx53ye.js";
import { Xi } from "./chunk-z2t8b9yc.js";
F();
import { randomUUID as N } from "crypto";
function I(o) {
  return (
    o.type === "system" &&
    o.subtype === "scheduled_task_fire" &&
    o.cronKind === "loop"
  );
}
function P(o) {
  if (o.type !== "system") return !1;
  if (o.subtype === "scheduled_task_fire" || o.subtype === "compact_boundary")
    return !0;
  return !1;
}
function v(o) {
  let r = o.findLastIndex(I),
    s = o[r];
  if (s === void 0 || !I(s)) return { kind: "none" };
  for (let a = r - 1; a >= 0; a--) {
    let e = o[a];
    if (I(e)) break;
    if (P(e))
      return {
        kind: "veto",
        fireIdx: r,
        reason: "blocking_system_before_anchor",
      };
  }
  let p,
    c = new Set();
  for (let a = r + 1; a < o.length; a++) {
    let e = o[a];
    if (P(e))
      return { kind: "veto", fireIdx: r, reason: "blocking_system_in_span" };
    if (e.type === "assistant")
      for (let i of e.message.content) {
        if (i.type !== "tool_use") continue;
        if ((c.add(i.id), i.name === Xi)) p = i.input?.noop === !0;
      }
    else if (e.type === "user") {
      if (e.toolDenialKind !== void 0)
        return {
          kind: "veto",
          fireIdx: r,
          reason:
            e.toolDenialKind === "interrupted" ||
            e.toolDenialKind === "cancelled"
              ? "tool_abort"
              : "tool_denial",
        };
      let i = e.message.content;
      if (typeof i !== "string") {
        for (let d of i)
          if (d.type === "tool_result" && !c.has(d.tool_use_id))
            return { kind: "veto", fireIdx: r, reason: "split_tool_pair" };
      }
      if (
        !Dk(e) &&
        (e.verifiedSlackHumanTurn === !0 ||
          e.origin !== void 0 ||
          (e.queuePriority !== "later" && e.isMeta !== !0))
      )
        return { kind: "veto", fireIdx: r, reason: "foreign_user_input" };
    } else if (
      e.type === "attachment" &&
      e.attachment.type === "queued_command"
    )
      return { kind: "veto", fireIdx: r, reason: "queued_command" };
  }
  if (p !== !0)
    return { kind: "veto", fireIdx: r, reason: "model_reported_work" };
  return {
    kind: "fold",
    fireIdx: r,
    priorStreak: s.noOpStreak ?? 0,
    since: s.streakStartedAt ?? s.timestamp,
    toolUseCount: c.size,
  };
}
function K(o) {
  return {
    ...Re({
      content: `[${o} prior /loop ${x(o, "wakeup")} found nothing actionable; loop is healthy.]`,
      isMeta: !0,
    }),
    turnCompanion: !0,
  };
}
function S(o) {
  return o
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
    .replace(/,? at |, /, " ")
    .replace(/[ \u202f]([AP]M)/i, (r, s) => s.toLowerCase());
}
function D(o, r, s, p) {
  let a = `Claude resuming /loop wakeup (${S(new Date())})`,
    e = r ? v(o) : { kind: "none" };
  if (e.kind === "veto") g("loop_noop_fold", e.reason);
  if (e.kind !== "fold")
    return [...o, Hyt(a, { task: s, uuid: p, ...(r && { cronKind: "loop" }) })];
  let i = e.priorStreak + 1,
    d = S(new Date(e.since)),
    b = o.slice(e.fireIdx).map((_) => _.uuid);
  return (
    y("loop_noop_fold", {
      streak: i,
      span_len: b.length,
      tool_uses: e.toolUseCount,
      span_duration_s: w(o, e.fireIdx),
    }),
    [
      ...o,
      Hyt(`${a} \xB7 ${i} no-op ${x(i, "tick")} since ${d}`, {
        task: s,
        uuid: p,
        cronKind: "loop",
        noOpStreak: i,
        streakStartedAt: e.since,
        foldedUuids: b,
      }),
      K(i),
    ]
  );
}
function w(o, r) {
  let s = o[r]?.timestamp,
    p = o.at(-1)?.timestamp;
  if (!s || !p) return 0;
  return Math.round((Date.parse(p) - Date.parse(s)) / 1000);
}
var T = import.meta.require("../自主会话-循环/LOOP_FILE_DYNAMIC_SENTINEL.y675anba.js"),
  A = null;
function ke({ isLoading: o, assistantMode: r, transcript: s, storageV5: p }) {
  let c = qc(),
    a = vr(() => o),
    e = C(null),
    i = Ye(),
    d = Yn(),
    b = It(),
    _ = wf();
  (E(() => {
    if (!EC() || jn() !== null) return;
    let m = (t, l, u) => ({
        value: t,
        mode: "prompt",
        agentId: ze(),
        priority: "later",
        isMeta: !0,
        skipSlashCommands: !0,
        modelScheduledOrigin: !0,
        skipAttachments: !0,
        wakeupSource: l,
        scheduledTaskId: u?.taskId,
        scheduledFireId: u?.fireId,
        workload: g6,
      }),
      O = Promise.resolve(),
      R = (t, l, u) => {
        if (M() && p !== void 0) {
          O = O.then(async () => {
            try {
              c.enqueuePendingNotification(
                m(
                  await T.resolveLoopDefaultFireAsync(
                    i.autonomousLoopPreamble,
                    t,
                    p,
                  ),
                  l,
                  u,
                ),
              );
            } catch (f) {
              n(
                `[ScheduledTasks] fire enqueue (v5 arm) failed; fire skipped: ${f}`,
              );
            }
          });
          return;
        }
        c.enqueuePendingNotification(
          m(T.resolveLoopDefaultFire(i.autonomousLoopPreamble, t), l, u),
        );
      },
      U = (t) => {
        if (T.isLoopDefaultSentinel(t.prompt))
          return {
            ...t,
            prompt: T.isLoopFileSentinel(t.prompt)
              ? "/loop (loop.md)"
              : "/loop",
          };
        return t;
      },
      L = void 0,
      h = UJt({
        onFire: (t) => R(t, "schedule_wakeup"),
        onFireTask: (t) => {
          if (t.agentId) {
            let u = nY(t.agentId, d.getState().tasks);
            if (u && !xs(u.status)) {
              zqe(u.id, t.prompt, _, { kind: "task-notification" });
              return;
            }
            (n(
              `[ScheduledTasks] teammate ${t.agentId} gone, removing orphaned cron ${t.id}`,
            ),
              SK([t.id]));
            return;
          }
          let l = N();
          if (t.kind === "loop") {
            let u = !a();
            (s.replace((f) => D(f, u, U(t), l)), Ixe(t.prompt), Lrt());
          } else {
            let u = Hyt(`Running scheduled task (${S(new Date())})`, {
              task: U(t),
              uuid: l,
            });
            s.replace((f) => [...f, u]);
          }
          R(t.prompt, Zgt(t), { taskId: t.id, fireId: l });
        },
        isLoading: () => a(),
        assistantMode: r,
        getJitterConfig: wre,
        isKilled: () => !EC(),
        getExtraTasks:
          A && L
            ? () => A.getRoutineCronTasks(i.project.projectRoot, L, p)
            : void 0,
      });
    return (
      h.start(),
      (e.current = h),
      () => {
        ((e.current = null), h.stop());
      }
    );
  }, [r, s, d.getState, _, i]),
    E(() => {
      if (o) return;
      let m = wje();
      if (m !== null) {
        if ((Ixe(null), YXn() && !BY())) QXn(m);
        if (!BY()) Eje();
      }
      e.current?.checkNow();
    }, [o]));
}
export { ke as useScheduledTasks };

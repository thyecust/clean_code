// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 200 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ze, wje, Ixe, Lrt, Eje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { CRON_WORKLOAD_NAME } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getRemoteTransport } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { resolveWakeupSource, findTeammateTaskByAgentId, createUserMessage, hasToolResultBlock, createScheduledTaskFireMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useSetAppState, useAppState } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { useTaskRegistry } from "../../01-核心基础设施/核心工具-未归类/use-task-registry.js";
import { deleteScheduledTasks } from "../后台任务-Shell管理/scheduled-tasks.js";
import { getCronJitterConfig } from "../../01-核心基础设施/核心工具-未归类/chunk-52kaw3c1.js";
import { isLoopKeepaliveEnabled, armLoopKeepalive, hasPendingLoopWakeup } from "../语音-音频/loop-wakeup-scheduler.js";
import { isKairosCronEnabled } from "../定时任务-Cron/chunk-mk3zm4ew.js";
import { useSession } from "../../01-核心基础设施/核心工具-未归类/session-context.js";
import { createCronScheduler } from "../工具AskUserQuestion/工具AskUserQuestion.72ht85nd.js";
import { useCommandQueue } from "../../01-核心基础设施/核心工具-未归类/command-queue-context.js";
import { queueTeammateUserMessage } from "./teammate-task-messages.js";
import { E, vr, C, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { isTerminalTaskStatus } from "./chunk-mrfx53ye.js";
import { SCHEDULE_WAKEUP_TOOL_NAME } from "./chunk-z2t8b9yc.js";
F();
import { randomUUID } from "crypto";
import * as lazy_LOOP_FILE_DYNAMIC_SENTINEL_y675anba from "../自主会话-循环/LOOP_FILE_DYNAMIC_SENTINEL.y675anba.js";

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
        if ((c.add(i.id), i.name === SCHEDULE_WAKEUP_TOOL_NAME)) p = i.input?.noop === !0;
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
        !hasToolResultBlock(e) &&
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
    ...createUserMessage({
      content: `[${o} prior /loop ${pluralize(o, "wakeup")} found nothing actionable; loop is healthy.]`,
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
  if (e.kind === "veto") logFeatureSad("loop_noop_fold", e.reason);
  if (e.kind !== "fold")
    return [...o, createScheduledTaskFireMessage(a, { task: s, uuid: p, ...(r && { cronKind: "loop" }) })];
  let i = e.priorStreak + 1,
    d = S(new Date(e.since)),
    b = o.slice(e.fireIdx).map((_) => _.uuid);
  return (
    logFeatureOk("loop_noop_fold", {
      streak: i,
      span_len: b.length,
      tool_uses: e.toolUseCount,
      span_duration_s: w(o, e.fireIdx),
    }),
    [
      ...o,
      createScheduledTaskFireMessage(`${a} \xB7 ${i} no-op ${pluralize(i, "tick")} since ${d}`, {
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
var T = lazy_LOOP_FILE_DYNAMIC_SENTINEL_y675anba,
  A = null;
function useScheduledTasks({ isLoading: o, assistantMode: r, transcript: s, storageV5: p }) {
  let c = useCommandQueue(),
    a = vr(() => o),
    e = C(null),
    i = useSession(),
    d = useAppState(),
    b = useSetAppState(),
    _ = useTaskRegistry();
  (E(() => {
    if (!isKairosCronEnabled() || getRemoteTransport() !== null) return;
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
        workload: CRON_WORKLOAD_NAME,
      }),
      O = Promise.resolve(),
      R = (t, l, u) => {
        if (isHoverRestEnabled() && p !== void 0) {
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
              logForDebugging(
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
      h = createCronScheduler({
        onFire: (t) => R(t, "schedule_wakeup"),
        onFireTask: (t) => {
          if (t.agentId) {
            let u = findTeammateTaskByAgentId(t.agentId, d.getState().tasks);
            if (u && !isTerminalTaskStatus(u.status)) {
              queueTeammateUserMessage(u.id, t.prompt, _, { kind: "task-notification" });
              return;
            }
            (logForDebugging(
              `[ScheduledTasks] teammate ${t.agentId} gone, removing orphaned cron ${t.id}`,
            ),
              deleteScheduledTasks([t.id]));
            return;
          }
          let l = randomUUID();
          if (t.kind === "loop") {
            let u = !a();
            (s.replace((f) => D(f, u, U(t), l)), Ixe(t.prompt), Lrt());
          } else {
            let u = createScheduledTaskFireMessage(`Running scheduled task (${S(new Date())})`, {
              task: U(t),
              uuid: l,
            });
            s.replace((f) => [...f, u]);
          }
          R(t.prompt, resolveWakeupSource(t), { taskId: t.id, fireId: l });
        },
        isLoading: () => a(),
        assistantMode: r,
        getJitterConfig: getCronJitterConfig,
        isKilled: () => !isKairosCronEnabled(),
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
        if ((Ixe(null), isLoopKeepaliveEnabled() && !hasPendingLoopWakeup())) armLoopKeepalive(m);
        if (!hasPendingLoopWakeup()) Eje();
      }
      e.current?.checkNow();
    }, [o]));
}
export { useScheduledTasks };

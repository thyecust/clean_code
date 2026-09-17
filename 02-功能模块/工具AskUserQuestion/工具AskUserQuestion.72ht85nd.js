// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { wrapInCodeFence } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { K, sn, bB, Prt, kg, HL } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { registerCleanup, jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { getProcessStartTime, isSameProcessAsync, ownProcStart } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import {
  formatCronSchedule,
  getScheduledTasksPath,
  readScheduledTasks,
  isWorkspaceRestricted,
  hasScheduledTasks,
  writeScheduledTasks,
  deleteScheduledTasks,
  updateTasksLastFiredAt,
  DEFAULT_CRON_JITTER_CONFIG,
  computeRecurringTaskFireTime,
  computeOneShotTaskFireTime,
  filterOverdueTasks,
} from "../后台任务-Shell管理/scheduled-tasks.js";
import { resolveGitDir, getCommonDir } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getClaimRegistry } from "../../01-核心基础设施/核心工具-未归类/host-claim-registry.js";
import { isProcessRunning } from "../守护服务-Daemon/process-record.js";
import { s, T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import {
  mkdir as _e,
  readFile as ye,
  unlink,
  writeFile,
} from "fs/promises";
import { dirname, join as de } from "path";
import { appendFile, mkdir as ge, readFile as Se } from "fs/promises";
import { join as oe } from "path";
var Te = [
    "**/.claude/scheduled_tasks.lock",
    "**/.claude/scheduled_tasks.json",
    "**/.claude/routines/.state/",
    "**/.claude/worktrees/",
    "**/.claude/checkpoints/",
    "**/.claude/mailbox/",
    "**/.claude/agent-registry.json",
    "**/.claude/agent-memory-local",
    "**/.claude/first-run",
    "**/.claude/assistant-daemon-state.json",
  ],
  se = "# claude-code-runtime";
async function ie(r) {
  if (!getClaimRegistry().claim(`claude_runtime_exclude_ensured:${r}`)) return;
  try {
    let t = await resolveGitDir(r);
    if (!t) return;
    let a = (await getCommonDir(t)) ?? t,
      S = oe(a, "info", "exclude"),
      l = "";
    try {
      if (((l = await Se(S, "utf-8")), l.includes(se))) return;
    } catch (F) {
      if (A(F) !== "ENOENT") throw F;
      await ge(oe(a, "info"), { recursive: !0 });
    }
    let u =
        l &&
        !l.endsWith(`
`)
          ? `
`
          : "",
      k = [se, ...Te, ""].join(`
`);
    await appendFile(S, u + k);
  } catch (t) {
    logForDebugging(`ensureClaudeRuntimeFilesExcluded: ${t}`);
  }
}
var Ce = de(".claude", "scheduled_tasks.lock"),
  we = createLazyValue(() =>
    c({ sessionId: s(), pid: T(), procStart: s().optional(), acquiredAt: T() }),
  );
function N(r) {
  return de(r ?? sn(), Ce);
}
async function le(r) {
  let t;
  try {
    t = await ye(N(r), "utf8");
  } catch {
    return;
  }
  let a = we().safeParse(xt(t, !1));
  return a.success ? a.data : void 0;
}
async function ae(r, t) {
  let a = N(t),
    S = jsonStringify(r);
  try {
    return (await writeFile(a, S, { flag: "wx" }), !0);
  } catch (l) {
    let u = A(l);
    if (u === "EEXIST") return !1;
    if (u === "ENOENT") {
      await _e(dirname(a), { recursive: !0 });
      try {
        return (await writeFile(a, S, { flag: "wx" }), !0);
      } catch (k) {
        if (A(k) === "EEXIST") return !1;
        throw k;
      }
    }
    throw l;
  }
}
function X(r, t) {
  (r.unregisterCleanup?.(),
    (r.unregisterCleanup = registerCleanup(async () => {
      await j(r, t);
    })));
}
async function Y(r, t) {
  let a = t?.dir;
  await ie(a ?? sn());
  let S = t?.lockIdentity ?? K(),
    l = {
      sessionId: S,
      pid: process.pid,
      procStart: ownProcStart(),
      acquiredAt: Date.now(),
    };
  if (await ae(l, a))
    return (
      (r.lastBlockedBy = void 0),
      X(r, t),
      logForDebugging(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`),
      !0
    );
  let u = await le(a);
  if (u?.sessionId === S) {
    if (u.pid !== process.pid) (await writeFile(N(a), jsonStringify(l)), X(r, t));
    return !0;
  }
  if (u && isProcessRunning(u.pid) && (await isSameProcessAsync(u.pid, u.procStart))) {
    if (r.lastBlockedBy !== u.sessionId)
      ((r.lastBlockedBy = u.sessionId),
        logForDebugging(
          `[ScheduledTasks] scheduler lock held by session ${u.sessionId} (PID ${u.pid})`,
        ));
    return !1;
  }
  if (u)
    logForDebugging(`[ScheduledTasks] recovering stale scheduler lock from PID ${u.pid}`);
  if ((await unlink(N(a)).catch(() => {}), await ae(l, a)))
    return ((r.lastBlockedBy = void 0), X(r, t), !0);
  return !1;
}
async function j(r, t) {
  r.reset();
  let a = t?.dir,
    S = t?.lockIdentity ?? K(),
    l = await le(a);
  if (!l || l.sessionId !== S) return;
  try {
    (await unlink(N(a)), logForDebugging("[ScheduledTasks] released scheduler lock"));
  } catch {}
}
class Z {
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  reset() {
    (this.unregisterCleanup?.(),
      (this.unregisterCleanup = void 0),
      (this.lastBlockedBy = void 0));
  }
}
var Ee = import.meta.require("../自主会话-循环/LOOP_FILE_DYNAMIC_SENTINEL.y675anba.js"),
  ue = 1000,
  Le = 300,
  Oe = 5000;
function Fe(r, t, a) {
  if (a === 0) return !1;
  return Boolean(r.recurring && !r.permanent && t - r.createdAt >= a);
}
function createCronScheduler(r) {
  let {
      onFire: t,
      isLoading: a,
      assistantMode: S = !1,
      onFireTask: l,
      onMissed: u,
      dir: k,
      lockIdentity: F,
      getJitterConfig: fe,
      isKilled: ke,
      filter: H,
      getExtraTasks: z,
    } = r,
    P = k || F ? { dir: k, lockIdentity: F } : void 0,
    R = new Z(),
    U = k !== void 0 ? F : K(),
    J = [],
    ee = [],
    I = new Map(),
    re = new Set(),
    D = new Set(),
    v = null,
    B = null,
    E = null,
    O = null,
    L = !1,
    w = !1,
    q = new Map();
  function me(o, h) {
    if (!isProcessRunning(o)) return (q.delete(o), !0);
    if (h === void 0) return !1;
    let p = Date.now(),
      _ = q.get(o);
    if (!_ || p - _.at >= 60000) ((_ = { at: p, token: getProcessStartTime(o) }), q.set(o, _));
    return _.token !== void 0 && _.token !== h;
  }
  function te(o) {
    if (o.createdBySessionId === void 0) return w;
    if (o.createdBySessionId === U) return !0;
    return (
      w &&
      (o.createdByPid === void 0 || me(o.createdByPid, o.createdByProcStart))
    );
  }
  async function V(o) {
    let h = isWorkspaceRestricted(k) ? [] : await readScheduledTasks(k),
      p = z
        ? await z().catch((d) => {
            if (getClaimRegistry().claim("cron_extra_tasks_load_bad"))
              logFeatureBad("routine_register_trigger", "extra_tasks_load_failed");
            return (logForDebugging(`[ScheduledTasks] getExtraTasks failed: ${d}`), []);
          })
        : [];
    if (L) return;
    if (((J = h), (ee = p), !o)) return;
    let _ = !1;
    for (let d of h)
      if (
        U !== void 0 &&
        d.createdBySessionId === U &&
        d.createdByPid !== process.pid
      )
        ((d.createdByPid = process.pid),
          (d.createdByProcStart = ownProcStart()),
          (_ = !0));
    if (_)
      await writeScheduledTasks(h, k).catch((d) =>
        logForDebugging(`[ScheduledTasks] failed to refresh task pids: ${d}`),
      );
    let M = Date.now(),
      e = filterOverdueTasks(h, M).filter(
        (d) => !d.recurring && !re.has(d.id) && (!H || H(d)) && te(d),
      );
    if (e.length > 0) {
      for (let d of e) (re.add(d.id), I.set(d.id, 1 / 0));
      if (
        (logEvent("tengu_scheduled_task_missed", {
          count: e.length,
          taskIds: e.map((d) => d.id).join(","),
        }),
        u)
      )
        u(e);
      else t(be(e));
      (deleteScheduledTasks(
        e.map((d) => d.id),
        k,
      ).catch((d) => logForDebugging(`[ScheduledTasks] failed to remove missed tasks: ${d}`)),
        logForDebugging(`[ScheduledTasks] surfaced ${e.length} missed one-shot task(s)`));
    }
  }
  function W() {
    if (ke?.()) return;
    if (a() && !S) return;
    let o = Date.now(),
      h = new Set(),
      p = [],
      _ = fe?.() ?? DEFAULT_CRON_JITTER_CONFIG;
    function M(e, d) {
      if (H && !H(e)) return;
      if ((h.add(e.id), D.has(e.id))) return;
      let x = I.get(e.id);
      if (x === void 0) {
        let C = e.recurring
          ? computeRecurringTaskFireTime(e.cron, e.lastFiredAt ?? e.createdAt, e.id, _)
          : computeOneShotTaskFireTime(e.cron, e.createdAt, e.id, _);
        if (C === null)
          logFeatureBad("cron_task_fire", "next_fire_unresolvable", {
            recurring: e.recurring ?? !1,
          });
        ((x = C ?? 1 / 0),
          I.set(e.id, x),
          logForDebugging(
            `[ScheduledTasks] scheduled ${e.id} for ${x === 1 / 0 ? "never" : new Date(x).toISOString()}`,
          ));
      }
      if (o < x) return;
      if (
        (logForDebugging(
          `[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`,
        ),
        logEvent("tengu_scheduled_task_fire", {
          recurring: e.recurring ?? !1,
          taskId: e.id,
          autonomousLoopDefault: Ee.isLoopDefaultSentinel(e.prompt),
        }),
        l)
      )
        l(e);
      else t(e.prompt);
      logFeatureOk("cron_task_fire", {
        recurring: e.recurring ?? !1,
        permanent: e.permanent ?? !1,
      });
      let ne = Fe(e, o, _.recurringMaxAgeMs);
      if (ne) {
        let C = Math.floor((o - e.createdAt) / 1000 / 60 / 60);
        (logForDebugging(
          `[ScheduledTasks] recurring task ${e.id} aged out (${C}h since creation), deleting after final fire`,
        ),
          logEvent("tengu_scheduled_task_expired", { taskId: e.id, ageHours: C }));
      }
      if (e.recurring && !ne) {
        let C = computeRecurringTaskFireTime(e.cron, o, e.id, _);
        if (C === null) logFeatureSad("cron_task_fire", "reschedule_unresolvable");
        let pe = C ?? 1 / 0;
        if ((I.set(e.id, pe), !d)) p.push(e.id);
      } else if (d) (HL([e.id]), I.delete(e.id));
      else
        (D.add(e.id),
          I.set(e.id, 1 / 0),
          deleteScheduledTasks([e.id], k)
            .catch((C) =>
              logForDebugging(`[ScheduledTasks] failed to remove task ${e.id}: ${C}`),
            )
            .finally(() => D.delete(e.id)));
    }
    for (let e of J) if (te(e)) M(e, !1);
    if (p.length > 0) {
      for (let e of p) D.add(e);
      updateTasksLastFiredAt(p, o, k)
        .catch((e) => logForDebugging(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`))
        .finally(() => {
          for (let e of p) D.delete(e);
        });
    }
    if (k === void 0) for (let e of kg().slice()) M(e, !0);
    for (let e of ee) M(e, !0);
    if (h.size === 0) {
      I.clear();
      return;
    }
    for (let e of I.keys()) if (!h.has(e)) I.delete(e);
  }
  async function G() {
    if (L) return;
    if (v) (clearInterval(v), (v = null));
    let { default: o } = await import("../文件监听-Watch/文件监听-Watch.3efypmps.js");
    if (L) return;
    if (((w = await Y(R, P).catch(() => !1)), L)) {
      if (w) ((w = !1), j(R, P));
      return;
    }
    if (!w)
      ((E = setInterval(() => {
        Y(R, P)
          .then((p) => {
            if (L) {
              if (p) j(R, P);
              return;
            }
            if (p) {
              if (((w = !0), E)) (clearInterval(E), (E = null));
            }
          })
          .catch((p) => logForDebugging(String(p), { level: "error" }));
      }, Oe)),
        E.unref?.());
    V(!0).then(W);
    let h = getScheduledTasksPath(k);
    ((O = o.watch(h, {
      persistent: !1,
      ignoreInitial: !0,
      awaitWriteFinish: { stabilityThreshold: Le },
      ignorePermissionErrors: !0,
    })),
      O.on("error", (p) =>
        logForDebugging(`[ScheduledTasks] watcher error: ${p}`, { level: "warn" }),
      ),
      O.on("add", () => void V(!1)),
      O.on("change", () => void V(!1)),
      O.on("unlink", () => {
        if (!L) ((J = []), I.clear());
      }),
      (B = setInterval(W, ue)),
      B.unref?.());
  }
  return {
    start() {
      if (((L = !1), k !== void 0)) {
        (logForDebugging(
          `[ScheduledTasks] scheduler start() \u2014 dir=${k}, hasTasks=${hasScheduledTasks(k)}`,
        ),
          G());
        return;
      }
      if (
        (logForDebugging(
          `[ScheduledTasks] scheduler start() \u2014 enabled=${Prt()}, hasTasks=${hasScheduledTasks()}`,
        ),
        !Prt() && (S || z !== void 0 || hasScheduledTasks()))
      )
        bB(!0);
      if (Prt()) {
        G();
        return;
      }
      ((v = setInterval(
        (o) => {
          if (Prt()) o();
        },
        ue,
        G,
      )),
        v.unref?.());
    },
    stop() {
      if (((L = !0), v)) (clearInterval(v), (v = null));
      if (B) (clearInterval(B), (B = null));
      if (E) (clearInterval(E), (E = null));
      if ((O?.close(), (O = null), w)) ((w = !1), j(R, P));
    },
    getNextFireTime() {
      let o = 1 / 0;
      for (let h of I.values()) if (h < o) o = h;
      return o === 1 / 0 ? null : o;
    },
    checkNow() {
      W();
    },
  };
}
function be(r) {
  let t = r.length > 1,
    a = `The following one-shot scheduled task${t ? "s were" : " was"} missed while Claude was not running. ${t ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${t ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${t ? "each one" : "it"} now. Only execute if the user confirms.`,
    S = r.map(
      (
        l,
      ) => `${`[${formatCronSchedule(l.cron)}, created ${new Date(l.createdAt).toLocaleString()}]`}
${wrapInCodeFence(l.prompt)}`,
    );
  return `${a}

${S.join(`

`)}`;
}
export { createCronScheduler };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { R, l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { PERMISSION_MODE_MANUAL_ALIAS } from "./chunk-e4pfvp7x.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { isSameProcessAsync, ownProcStart } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { cs, xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { parseCronExpression, DEFAULT_CRON_JITTER_CONFIG, computeRecurringTaskFireTime } from "../后台任务-Shell管理/scheduled-tasks.js";
import { getLauncherConfigError } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { resolveWrappedClaudeInvocation } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import { CRON_WORKLOAD_NAME } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getFileStorage } from "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import { getDaemonJsonPath } from "../../01-核心基础设施/共享小工具-未细化/daemon-paths.js";
import { s, T, O, v, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var DAEMON_CONFIG_MAX_BYTES = 1048576;
async function readDaemonConfigContent(o) {
  let t;
  try {
    t = await V(o);
  } catch (r) {
    return { kind: "threw", error: r };
  }
  if (!t.ok) {
    let r = "telemetryCode" in t.error ? t.error.telemetryCode : void 0;
    if (r === "ENXIO" || r === "EISDIR" || r === "EFBIG")
      return { kind: "refused" };
    return { kind: "failed", error: t.error };
  }
  let e = t.value.items[0];
  if (!e.found) return { kind: "absent" };
  if (e.totalBytes > DAEMON_CONFIG_MAX_BYTES) return { kind: "refused" };
  return { kind: "text", text: Buffer.from(e.value).toString("utf8") };
}
function V(o) {
  return o.read([
    { key: STORAGE_KEYS.state("daemon-config"), offset: 0, length: DAEMON_CONFIG_MAX_BYTES + 1 },
  ]);
}
import { readFile as re } from "fs/promises";
import { join as oe } from "path";
import { readFile as Y, stat as Z } from "fs/promises";
import { dirname } from "path";
async function D(o, t) {
  let e = o ?? getDaemonJsonPath(),
    r;
  if (isHoverRestEnabled() && t !== void 0 && e === getDaemonJsonPath()) r = await te(t, e);
  else
    try {
      let u = await Z(e);
      if (!u.isFile() || u.size > DAEMON_CONFIG_MAX_BYTES)
        throw Error(
          `${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`,
        );
      r = await Y(e, "utf8");
    } catch (u) {
      if (!W(u)) throw u;
    }
  if (r === void 0 || r.trim() === "") return {};
  let a;
  try {
    a = JSON.parse(cs(r));
  } catch {
    throw Error(`daemon.json is malformed: ${e}`);
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {};
}
async function te(o, t) {
  let e = await readDaemonConfigContent(o);
  switch (e.kind) {
    case "text":
      return e.text;
    case "absent":
      return;
    case "refused": {
      let r = `${t} is not a regular file (or exceeds 1MiB); refusing read-modify-write`;
      throw Error(r);
    }
    case "failed":
      throw Object.assign(
        new R(
          `daemon.json read failed: ${e.error.code}`,
          "daemon.json v5 read failed",
        ),
        { cause: "cause" in e.error ? e.error.cause : e.error },
      );
    case "threw":
      throw e.error;
  }
}
async function updateDaemonConfig(o, t, e) {
  let r = t ?? getDaemonJsonPath(),
    a = await D(r, e);
  if ((await o(a)) === !1) return;
  if (isHoverRestEnabled() && e !== void 0 && r === getDaemonJsonPath()) {
    let f = await e.write(
      STORAGE_KEYS.state("daemon-config"),
      jsonStringify(a, null, 2) +
        `
`,
      { publishDiscipline: "atomic", mode: 438 & ~process.umask() },
    );
    if (!f.ok)
      throw Object.assign(
        new R(
          `daemon.json write failed: ${f.error.code}`,
          "daemon.json v5 write failed",
        ),
        { cause: "cause" in f.error ? f.error.cause : f.error },
      );
    return;
  }
  (await getFileStorage().mkdir(dirname(r)),
    await writeFileAtomic(
      r,
      jsonStringify(a, null, 2) +
        `
`,
    ));
}
function normalizeRemoteControlEntries(o) {
  if (Array.isArray(o))
    return o.filter((t) => !!t && typeof t.dir === "string");
  if (o && typeof o.dir === "string") return [o];
  return [];
}
var ne = 1000,
  B = 10080,
  VALID_PERMISSION_MODES = [
    "dontAsk",
    "auto",
    "default",
    "acceptEdits",
    "plan",
    "bypassPermissions",
  ],
  j = createLazyValue(() =>
    c({
      id: s().min(1),
      cron: s().refine((o) => parseCronExpression(o) !== null, {
        message: "invalid 5-field cron expression",
      }),
      prompt: s().min(1),
      directory: s().min(1),
      enabled: O().default(!0),
      permissionMode: X([...VALID_PERMISSION_MODES, PERMISSION_MODE_MANUAL_ALIAS])
        .transform((o) => (o === PERMISSION_MODE_MANUAL_ALIAS ? "default" : o))
        .default("dontAsk"),
      model: s().optional(),
      runTimeoutMinutes: T().positive().max(B).default(30),
      maxQueued: T().int().positive().default(1),
    }).strict(),
  ),
  scheduledTasksFileSchema = createLazyValue(() =>
    c({
      tasks: v(j())
        .default([])
        .refine((o) => new Set(o.map((t) => t.id)).size === o.length, {
          message: "task ids must be unique",
        }),
      maxConcurrent: T().int().positive().default(1),
    }).strict(),
  );
function z() {
  return oe(getClaudeConfigDir(), "daemon.scheduled.status.json");
}
function N() {
  return STORAGE_KEYS.state("scheduled-status");
}
async function se(o, t) {
  let e = {
    workerPid: process.pid,
    workerProcStart: ownProcStart(),
    writtenAt: Date.now(),
    tasks: o,
  };
  if (isHoverRestEnabled() && t) {
    try {
      let r = await t.write(N(), jsonStringify(e), { mode: 438 & ~process.umask() });
      if (!r.ok) logForDebugging(`writeScheduledStatus: ${r.error.code}`);
    } catch (r) {
      logForDebugging(`writeScheduledStatus: ${l(r)}`);
    }
    return;
  }
  try {
    await writeFileAtomic(z(), jsonStringify(e));
  } catch {}
}
async function readScheduledStatus(o) {
  let t;
  if (isHoverRestEnabled() && o !== void 0) {
    let a;
    try {
      a = await o.readText([N()]);
    } catch {
      return null;
    }
    if (!a.ok) return null;
    let u = a.value.items[0];
    if (!u.found) return null;
    t = u.value;
  } else
    try {
      t = await re(z(), "utf8");
    } catch {
      return null;
    }
  let e = xt(t, !1);
  if (!e || typeof e !== "object") return null;
  let r = e;
  if (
    typeof r.workerPid !== "number" ||
    typeof r.tasks !== "object" ||
    r.tasks === null
  )
    return null;
  try {
    process.kill(r.workerPid, 0);
  } catch {
    return null;
  }
  if (!(await isSameProcessAsync(r.workerPid, r.workerProcStart))) return null;
  return e;
}
var runScheduledWorker = async (o, t, e, r, a) => {
  let { tasks: u, maxConcurrent: f } = scheduledTasksFileSchema().parse(o),
    { initializeErrorLogSink: y } = await import("../../01-核心基础设施/共享小工具-未细化/initializeErrorLogSink.64dfk6kr.js"),
    { initializeAnalyticsSink: q } = await import("../../01-核心基础设施/共享小工具-未细化/initializeAnalyticsSink.3hb68836.js");
  if ((y(), q(), !r.getAccessToken()))
    (e("scheduled worker: not authed \u2014 run `claude auth login`"),
      process.exit(1));
  let { query: Q } = await import("../../03-入口与运行时/Headless-SDK模式/query.ehweefwc.js");
  if (
    (e(`scheduled worker started tasks=${u.length} maxConcurrent=${f}`),
    u.length === 0)
  ) {
    let d = setInterval(() => {}, 60000);
    (await new Promise((i) => {
      if (t.aborted) {
        i();
        return;
      }
      t.addEventListener("abort", () => i(), { once: !0 });
    }),
      clearInterval(d));
    return;
  }
  let E = [],
    P = new Set(),
    h = null;
  function U(d) {
    let i = E.reduce((p, k) => (k.task.id === d.id ? p + 1 : p), 0);
    if (i >= d.maxQueued) {
      e(`task=${d.id} dropped (queue full: ${i}/${d.maxQueued})`);
      return;
    }
    (E.push({ task: d }), h?.(), (h = null));
  }
  let C = new Map(),
    _ = new Set(),
    H = Date.now();
  function F() {
    let d = {};
    for (let i of u) {
      let p = C.get(i.id);
      d[i.id] = {
        running: _.has(i.id),
        ...(p !== void 0 && { lastFiredAt: p }),
      };
    }
    se(d, a);
  }
  F();
  function J(d) {
    let i = C.get(d.id) ?? H;
    return computeRecurringTaskFireTime(d.cron, i, d.id, DEFAULT_CRON_JITTER_CONFIG);
  }
  let K = setInterval(
    (d, i, p, k) => {
      let A = Date.now();
      for (let S of d) {
        if (!S.enabled) continue;
        let w = i(S);
        if (w === null) continue;
        if (w <= A) (p.set(S.id, A), k(S));
      }
    },
    ne,
    u,
    J,
    C,
    U,
  );
  t.addEventListener("abort", () => {
    clearInterval(K);
    for (let d of P) d.abort();
    (h?.(), (h = null));
  });
  let x = new Set();
  async function G(d) {
    let { task: i } = d,
      p = getLauncherConfigError();
    if (p) {
      e(`task=${i.id} refused: ${p}`);
      return;
    }
    let k = new AbortController();
    (P.add(k), _.add(i.id), F());
    let A = setTimeout(
      (w) => w.abort(),
      Math.min(i.runTimeoutMinutes, B) * 60000,
      k,
    );
    e(`task=${i.id} start cron='${i.cron}' dir='${i.directory}'`);
    let S = resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 });
    try {
      let w = Q({
        prompt: i.prompt,
        options: {
          cwd: i.directory,
          permissionMode: i.permissionMode,
          ...(i.permissionMode === "bypassPermissions" && {
            allowDangerouslySkipPermissions: !0,
          }),
          ...(i.model && { model: i.model }),
          systemPrompt: { type: "preset", preset: "claude_code" },
          settingSources: ["user", "project", "local"],
          pathToClaudeCodeExecutable: S.cmd,
          executableArgs: S.prefixArgs,
          abortController: k,
          stderr: (g) => e(`[${i.id}] ${g.trimEnd()}`),
          workload: CRON_WORKLOAD_NAME,
        },
      });
      for await (let g of w)
        if (g.type === "result")
          e(
            `task=${i.id} result subtype=${g.subtype} duration=${g.duration_ms}ms cost=$${g.total_cost_usd.toFixed(4)}`,
          );
    } catch (w) {
      e(`task=${i.id} threw: ${w}`);
    } finally {
      (clearTimeout(A), P.delete(k), _.delete(i.id), F());
    }
  }
  while (!t.aborted) {
    while (x.size < f && E.length > 0 && !t.aborted) {
      let d = E.shift(),
        i = G(d).finally(() => {
          (x.delete(i), h?.(), (h = null));
        });
      x.add(i);
    }
    if (t.aborted) break;
    if (E.length === 0 || x.size >= f)
      await new Promise((d) => {
        h = d;
      });
  }
  await Promise.allSettled(Array.from(x));
};
function I(o) {
  let t = o.scheduled,
    e = {};
  if (Array.isArray(t) && t.length > 0 && typeof t[0] === "object")
    e = t[0] ?? {};
  else if (t && typeof t === "object" && !Array.isArray(t)) e = t;
  let r = Array.isArray(e.tasks) ? e.tasks : [];
  return { ...e, tasks: r };
}
function L(o, t) {
  let e = o.scheduled;
  if (Array.isArray(e)) {
    let r = e.slice();
    ((r[0] = t), (o.scheduled = r));
  } else o.scheduled = t;
}
async function addScheduledTask(o, t, e) {
  return withFeatureTelemetry("daemon_scheduled_add", async () => {
    (j().parse(o),
      await updateDaemonConfig(
        (r) => {
          let a = I(r),
            u = a.tasks.filter(
              (f) => !(f && typeof f === "object" && f.id === o.id),
            );
          (u.push(o), L(r, { ...a, tasks: u }));
        },
        t,
        e,
      ));
  });
}
async function removeScheduledTask(o, t, e) {
  return withFeatureTelemetry("daemon_scheduled_remove", async () => {
    let r = !1;
    return (
      await updateDaemonConfig(
        (a) => {
          if (!("scheduled" in a)) return !1;
          let u = I(a),
            f = u.tasks.filter(
              (y) => !(y && typeof y === "object" && y.id === o),
            );
          if (f.length === u.tasks.length) return !1;
          if (f.length === 0) {
            let y = a.scheduled;
            if (Array.isArray(y) && y.length > 1) a.scheduled = y.slice(1);
            else delete a.scheduled;
          } else L(a, { ...u, tasks: f });
          r = !0;
        },
        t,
        e,
      ),
      r
    );
  });
}
async function readScheduledTasks(o, t) {
  let e = await D(o, t);
  if (!("scheduled" in e)) return [];
  let r = I(e),
    a = [];
  for (let u of r.tasks) {
    let f = j().safeParse(u);
    if (f.success) a.push(f.data);
  }
  return a;
}
export { DAEMON_CONFIG_MAX_BYTES, readDaemonConfigContent, updateDaemonConfig, normalizeRemoteControlEntries, VALID_PERMISSION_MODES, scheduledTasksFileSchema, readScheduledStatus, runScheduledWorker, addScheduledTask, removeScheduledTask, readScheduledTasks };

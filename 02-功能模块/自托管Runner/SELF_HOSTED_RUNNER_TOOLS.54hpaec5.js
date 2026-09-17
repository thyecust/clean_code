// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 79 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { bc } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { wS } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { externalHttp as ra } from "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import { getToolPermissionContext as ce } from "../权限系统/chunk-fjrcf22x.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import {
  GET_POOL_TOOL_NAME as lun,
  LIST_RUNNERS_TOOL_NAME as cun,
  LIST_POOL_SESSIONS_TOOL_NAME as uun,
  LIST_SECRETS_TOOL_NAME as dun,
  SPAWN_LOCAL_TOOL_NAME as pun,
  READ_HEALTH_TOOL_NAME as fun,
  READ_METRICS_TOOL_NAME as mun,
  TAIL_LOG_TOOL_NAME as gun,
  REQUEUE_SESSION_TOOL_NAME as hun,
  GET_POOL_DESCRIPTION as D$t,
  LIST_RUNNERS_DESCRIPTION as L$t,
  LIST_POOL_SESSIONS_DESCRIPTION as M$t,
  LIST_SECRETS_DESCRIPTION as N$t,
  SPAWN_LOCAL_DESCRIPTION as F$t,
  READ_HEALTH_DESCRIPTION as $$t,
  READ_METRICS_DESCRIPTION as U$t,
  TAIL_LOG_DESCRIPTION as B$t,
  REQUEUE_SESSION_DESCRIPTION as j$t,
} from "./chunk-01gj9cjk.js";
import { Oce, Dce, Zee, ete, mM, cI } from "../../01-核心基础设施/共享小工具-未细化/chunk-kax7bdqv.js";
import { ml } from "../../01-核心基础设施/共享小工具-未细化/chunk-vdg9aytt.js";
import { s, T, O, se, v, c, Qe, $e, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var B = m(() =>
    Qe({ pool_id: s().describe("Tagged environment id (ccpool_\u2026).") }),
  ),
  G = m(() => c({ pool: fe(s(), se()), equivalent: c({ ui: s() }) })),
  E = Tt({
    name: lun,
    searchHint: "read self-hosted environment aggregates and queue counts",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return B();
    },
    get outputSchema() {
      return G();
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    async description() {
      return D$t;
    },
    async prompt() {
      return D$t;
    },
    async call({ pool_id: e }, t) {
      let r = `/v1/code/runners/self-hosted/pools/${encodeURIComponent(e)}`,
        o = await ete(
          "GET",
          r,
          void 0,
          t.abortController.signal,
          t.credentials,
        );
      return {
        data: {
          pool: o.pool ?? o,
          equivalent: Zee(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2014 header stat tiles",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return mM(t, e);
    },
    renderToolUseMessage(e) {
      return cI(e);
    },
  });
var F = m(() =>
    Qe({
      pool_id: s().describe("Tagged environment id (ccpool_\u2026)."),
      status_filter: s()
        .optional()
        .describe('Optional server-side status filter (e.g. "queued").'),
    }),
  ),
  W = m(() => c({ sessions: v(fe(s(), se())), equivalent: c({ ui: s() }) })),
  w = Tt({
    name: uun,
    searchHint: "list queued/assigned sessions in a self-hosted environment",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return F();
    },
    get outputSchema() {
      return W();
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    async description() {
      return M$t;
    },
    async prompt() {
      return M$t;
    },
    async call({ pool_id: e, status_filter: t }, r) {
      let o = t ? `?status=${encodeURIComponent(t)}` : "",
        n = `/v1/code/runners/self-hosted/pools/${encodeURIComponent(e)}/sessions${o}`;
      return {
        data: {
          sessions:
            (
              await ete(
                "GET",
                n,
                void 0,
                r.abortController.signal,
                r.credentials,
              )
            ).sessions ?? [],
          equivalent: Zee(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Activity tab \u2192 Sessions",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return mM(t, e);
    },
    renderToolUseMessage(e) {
      return cI(e);
    },
  });
var Q = m(() =>
    Qe({ pool_id: s().describe("Tagged environment id (ccpool_\u2026).") }),
  ),
  K = m(() => c({ runners: v(fe(s(), se())), equivalent: c({ ui: s() }) })),
  P = Tt({
    name: cun,
    searchHint: "list registered self-hosted runners for an environment",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return Q();
    },
    get outputSchema() {
      return K();
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    async description() {
      return L$t;
    },
    async prompt() {
      return L$t;
    },
    async call({ pool_id: e }, t) {
      let r = `/v1/code/runners/self-hosted/runners?pool_id=${encodeURIComponent(e)}`;
      return {
        data: {
          runners:
            (
              await ete(
                "GET",
                r,
                void 0,
                t.abortController.signal,
                t.credentials,
              )
            ).runners ?? [],
          equivalent: Zee(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Activity tab \u2192 Runners",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return mM(t, e);
    },
    renderToolUseMessage(e) {
      return cI(e);
    },
  });
var X = m(() =>
    Qe({ pool_id: s().describe("Tagged environment id (ccpool_\u2026).") }),
  ),
  Y = m(() => c({ secrets: v(fe(s(), se())), equivalent: c({ ui: s() }) })),
  D = Tt({
    name: dun,
    searchHint: "list self-hosted environment secrets (metadata only)",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return X();
    },
    get outputSchema() {
      return Y();
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    async description() {
      return N$t;
    },
    async prompt() {
      return N$t;
    },
    async call({ pool_id: e }, t) {
      let r = `/v1/code/runners/self-hosted/pools/${encodeURIComponent(e)}/secrets`;
      return {
        data: {
          secrets:
            (
              await ete(
                "GET",
                r,
                void 0,
                t.abortController.signal,
                t.credentials,
              )
            ).secrets ?? [],
          equivalent: Zee(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Configuration tab \u2192 Environment keys",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return mM(t, e);
    },
    renderToolUseMessage(e) {
      return cI(e);
    },
  });
var J = m(() =>
    Qe({
      health_port: T()
        .int()
        .optional()
        .describe(`Default ${Oce}. 0 means disabled.`),
    }),
  ),
  V = m(() =>
    c({
      health: fe(s(), se()).optional(),
      disabled: O().optional(),
      unreachable: O().optional(),
      error: s().optional(),
    }),
  ),
  A = Tt({
    name: fun,
    searchHint: "probe local self-hosted runner /healthz endpoint",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return J();
    },
    get outputSchema() {
      return V();
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    async description() {
      return $$t;
    },
    async prompt() {
      return $$t;
    },
    async call({ health_port: e = Oce }) {
      if (e === 0) return { data: { disabled: !0 } };
      try {
        return {
          data: {
            health: (
              await ra.get(`http://127.0.0.1:${e}/healthz`, {
                timeout: 2000,
                validateStatus: () => !0,
              })
            ).data,
          },
        };
      } catch (t) {
        return { data: { unreachable: !0, error: l(t) } };
      }
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return mM(t, e);
    },
    renderToolUseMessage(e) {
      return cI(e);
    },
  });
var C = "claude_code_self_hosted_runner_",
  Z = m(() =>
    Qe({
      health_port: T()
        .int()
        .optional()
        .describe(`Default ${Oce}. 0 means disabled.`),
    }),
  ),
  ee = m(() =>
    c({
      gauges: fe(s(), $e([T(), s()])).optional(),
      raw: s().optional(),
      disabled: O().optional(),
      unreachable: O().optional(),
      error: s().optional(),
    }),
  );
function te(e) {
  let t = {};
  for (let r of e.split(`
`)) {
    if (r.startsWith("#") || !r.startsWith(C)) continue;
    let o = r.match(/^(\S+?)(\{[^}]*\})?\s+(\S+)\s*$/);
    if (!o) continue;
    let n = o[1].slice(C.length);
    if (
      n.endsWith("_bucket") ||
      n === "session_idle_seconds" ||
      n === "poll_errors_total"
    )
      continue;
    let u = o[2] ?? "",
      a = Number(o[3]);
    if (n === "locked_account") {
      let i = u.match(/email="([^"]*)"/)?.[1];
      if (i) t.locked_account_email = i;
    }
    if (!Number.isNaN(a)) {
      let i = t[n];
      t[n] = typeof i === "number" ? i + a : a;
    }
  }
  return t;
}
var k = Tt({
  name: mun,
  searchHint: "read self-hosted runner Prometheus gauges from /metrics",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  get inputSchema() {
    return Z();
  },
  get outputSchema() {
    return ee();
  },
  isReadOnly() {
    return !0;
  },
  isConcurrencySafe() {
    return !0;
  },
  async description() {
    return U$t;
  },
  async prompt() {
    return U$t;
  },
  async call({ health_port: e = Oce }) {
    if (e === 0) return { data: { disabled: !0 } };
    try {
      let t = await ra.get(`http://127.0.0.1:${e}/metrics`, {
          timeout: 2000,
          responseType: "text",
          validateStatus: () => !0,
        }),
        r = ml(String(t.data));
      return { data: { gauges: te(r), raw: r } };
    } catch (t) {
      return { data: { unreachable: !0, error: l(t) } };
    }
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return mM(t, e);
  },
  renderToolUseMessage(e) {
    return cI(e);
  },
});
var re = m(() =>
    Qe({
      session_id: s().describe("Tagged session id (ccsess_\u2026)."),
      runner_id: s().describe(
        "Tagged runner id (ccrunner_\u2026) the caller observed failing. Server verifies this still matches the session assignment; mismatch returns Conflict. For a stuck session whose runner is gone, any value is accepted.",
      ),
    }),
  ),
  oe = m(() =>
    c({ excluded_count: T().optional(), equivalent: c({ ui: s() }) }),
  ),
  x = Tt({
    name: hun,
    searchHint:
      "requeue a stuck self-hosted runner session onto another runner",
    enablesCodeExecution: !0,
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return re();
    },
    get outputSchema() {
      return oe();
    },
    isReadOnly() {
      return !1;
    },
    ignoresWholeToolAllowRule() {
      return !0;
    },
    suppressesAlwaysAllowRule() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `requeue session=${e.session_id} off runner=${e.runner_id}`;
    },
    async checkPermissions(e, t) {
      if (ce(t).mode === "auto")
        return {
          behavior: "passthrough",
          message: "Requeueing a runner session requires classifier review.",
        };
      return {
        behavior: "ask",
        message: `Requeue session ${e.session_id} off runner ${e.runner_id}? This re-launches the session on another runner in the environment.`,
      };
    },
    async description() {
      return j$t;
    },
    async prompt() {
      return j$t;
    },
    async call({ session_id: e, runner_id: t }, r) {
      let o = `/v1/code/runners/self-hosted/sessions/${encodeURIComponent(e)}/requeue`;
      return {
        data: {
          excluded_count: (
            await ete(
              "POST",
              o,
              { runner_id: t },
              r.abortController.signal,
              r.credentials,
            )
          ).excluded_count,
          equivalent: Zee(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Activity tab \u2192 Sessions \u2192 (session) \u2192 Retry",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return mM(t, e);
    },
    renderToolUseMessage(e) {
      return cI(e);
    },
  });
import { spawn as ne } from "child_process";
import { mkdir as I, writeFile as ae } from "fs/promises";
import { dirname as q, resolve as f } from "path";
var S = "./runner-setup/workspace",
  N = "./runner-setup/runner.log",
  ue = "./runner-setup/runner.pid",
  ie = m(() =>
    Qe({
      secret_file_path: s().describe(
        "Path to the environment secret the operator saved from the Admin UI.",
      ),
      capacity: T().int().positive().optional().describe("Default 1."),
      base_dir: s()
        .optional()
        .describe(
          `Always passed to the runner (its built-in default of /workspace is unwritable on laptops). Default: ${S}`,
        ),
      health_port: T()
        .int()
        .optional()
        .describe(`Default ${Oce}. 0 disables /healthz.`),
      log_path: s().optional().describe(`Default: ${N}`),
    }),
  ),
  le = m(() =>
    c({
      pid: T(),
      pid_file: s(),
      log_path: s(),
      health_port: T(),
      command: s(),
    }),
  );
function pe(e) {
  return [
    "self-hosted-runner",
    "--environment-secret-file",
    e.secret_file_path,
    "--capacity",
    String(e.capacity),
    "--base-dir",
    e.base_dir,
    "--api-url",
    Dce(),
    "--health-port",
    String(e.health_port),
    "--log-file",
    e.log_path,
  ];
}
function d(e) {
  return /^[\w@%+=:,./-]+$/.test(e) ? e : `'${e.replace(/'/g, "'\\''")}'`;
}
var H = Tt({
  name: pun,
  searchHint: "start a local self-hosted runner process for try-it-out",
  enablesCodeExecution: !0,
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  get inputSchema() {
    return ie();
  },
  get outputSchema() {
    return le();
  },
  isReadOnly() {
    return !1;
  },
  ignoresWholeToolAllowRule() {
    return !0;
  },
  suppressesAlwaysAllowRule() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `spawn runner: secret=${e.secret_file_path} base_dir=${e.base_dir ?? S}`;
  },
  async checkPermissions(e, t) {
    if (ce(t).mode === "auto")
      return {
        behavior: "passthrough",
        message: "Spawning a local runner requires classifier review.",
      };
    return {
      behavior: "ask",
      message: `Start a detached self-hosted runner with the environment secret file ${e.secret_file_path} (base dir ${e.base_dir ?? S})? The runner will execute that environment's queued sessions on this machine and will keep running after this session ends.`,
    };
  },
  async description() {
    return F$t;
  },
  async prompt() {
    return F$t;
  },
  async call({
    secret_file_path: e,
    capacity: t = 1,
    base_dir: r = S,
    health_port: o = Oce,
    log_path: n = N,
  }) {
    let u = f(r),
      a = f(n),
      i = f(e);
    (await I(u, { recursive: !0 }), await I(q(a), { recursive: !0 }));
    let g = pe({
        secret_file_path: i,
        capacity: t,
        base_dir: u,
        health_port: o,
        log_path: a,
      }),
      y = process.execPath,
      _ = bc() ? [] : [process.argv[1]],
      h = ne(y, [..._, ...g], {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
      });
    wS(h.pid);
    let R = await new Promise((L) => {
      (h.once("spawn", () => L(null)), h.once("error", L));
    });
    h.unref();
    let b = h.pid;
    if (R || b === void 0)
      throw Error(
        `Failed to spawn runner${R ? ` (${R.message})` : " (no pid)"}. Command: ${[d(y), ..._.map(d), ...g.map(d)].join(" ")}`,
      );
    let z = f(ue);
    (await I(q(z), { recursive: !0 }), await ae(z, String(b)));
    let j = [d(y), ..._.map(d), ...g.map(d)].join(" ");
    return {
      data: { pid: b, pid_file: z, log_path: a, health_port: o, command: j },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return mM(t, e);
  },
  renderToolUseMessage(e) {
    return cI(e);
  },
});
import { open as me } from "fs/promises";
var M = 65536,
  de = m(() =>
    Qe({
      log_path: s().describe("Path to the runner's --log-file."),
      bytes: T()
        .int()
        .positive()
        .optional()
        .describe(`How many trailing bytes to read. Default ${M}.`),
    }),
  ),
  he = m(() => c({ lines: s(), bytes_read: T(), error: s().optional() })),
  U = Tt({
    name: gun,
    searchHint: "tail self-hosted runner log file with secret redaction",
    maxResultSizeChars: 200000,
    shouldDefer: !0,
    get inputSchema() {
      return de();
    },
    get outputSchema() {
      return he();
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    async description() {
      return B$t;
    },
    async prompt() {
      return B$t;
    },
    getPath(e) {
      return e.log_path;
    },
    async call({ log_path: e, bytes: t = M }) {
      try {
        let r = await me(e, "r");
        try {
          let { size: o } = await r.stat(),
            n = Math.max(0, o - t),
            u = o - n,
            a = Buffer.alloc(u);
          return (
            await r.read(a, 0, u, n),
            { data: { lines: ml(a.toString("utf8")), bytes_read: u } }
          );
        } finally {
          await r.close();
        }
      } catch (r) {
        return { data: { lines: "", bytes_read: 0, error: l(r) } };
      }
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: e.error
          ? `error: ${e.error}`
          : `(last ${e.bytes_read} bytes, redacted)
${e.lines}`,
      };
    },
    renderToolUseMessage(e) {
      return cI(e);
    },
  });
var qt = [E, P, w, D, H, A, k, U, x];
export { qt as SELF_HOSTED_RUNNER_TOOLS };

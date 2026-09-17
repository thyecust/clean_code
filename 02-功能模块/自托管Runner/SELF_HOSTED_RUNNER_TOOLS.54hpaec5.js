// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 79 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { bc } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { wS } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { externalHttp } from "../../01-核心基础设施/共享小工具-未细化/external-http.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import {
  GET_POOL_TOOL_NAME,
  LIST_RUNNERS_TOOL_NAME,
  LIST_POOL_SESSIONS_TOOL_NAME,
  LIST_SECRETS_TOOL_NAME,
  SPAWN_LOCAL_TOOL_NAME,
  READ_HEALTH_TOOL_NAME,
  READ_METRICS_TOOL_NAME,
  TAIL_LOG_TOOL_NAME,
  REQUEUE_SESSION_TOOL_NAME,
  GET_POOL_DESCRIPTION,
  LIST_RUNNERS_DESCRIPTION,
  LIST_POOL_SESSIONS_DESCRIPTION,
  LIST_SECRETS_DESCRIPTION,
  SPAWN_LOCAL_DESCRIPTION,
  READ_HEALTH_DESCRIPTION,
  READ_METRICS_DESCRIPTION,
  TAIL_LOG_DESCRIPTION,
  REQUEUE_SESSION_DESCRIPTION,
} from "./chunk-01gj9cjk.js";
import { DEFAULT_HEALTH_PORT, resolveApiBaseUrl, buildUiEquivalentPath, requestSelfHostedRunnerApi, makeToolResultBlock, formatToolUseInput } from "../../01-核心基础设施/共享小工具-未细化/self-hosted-runner-api.js";
import { redactSecrets } from "../../01-核心基础设施/共享小工具-未细化/redact-secrets.js";
import { s, T, O, se, v, c, Qe, $e, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var B = createLazyValue(() =>
    Qe({ pool_id: s().describe("Tagged environment id (ccpool_\u2026).") }),
  ),
  G = createLazyValue(() => c({ pool: fe(s(), se()), equivalent: c({ ui: s() }) })),
  E = buildTool({
    name: GET_POOL_TOOL_NAME,
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
      return GET_POOL_DESCRIPTION;
    },
    async prompt() {
      return GET_POOL_DESCRIPTION;
    },
    async call({ pool_id: e }, t) {
      let r = `/v1/code/runners/self-hosted/pools/${encodeURIComponent(e)}`,
        o = await requestSelfHostedRunnerApi(
          "GET",
          r,
          void 0,
          t.abortController.signal,
          t.credentials,
        );
      return {
        data: {
          pool: o.pool ?? o,
          equivalent: buildUiEquivalentPath(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2014 header stat tiles",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return makeToolResultBlock(t, e);
    },
    renderToolUseMessage(e) {
      return formatToolUseInput(e);
    },
  });
var F = createLazyValue(() =>
    Qe({
      pool_id: s().describe("Tagged environment id (ccpool_\u2026)."),
      status_filter: s()
        .optional()
        .describe('Optional server-side status filter (e.g. "queued").'),
    }),
  ),
  W = createLazyValue(() => c({ sessions: v(fe(s(), se())), equivalent: c({ ui: s() }) })),
  w = buildTool({
    name: LIST_POOL_SESSIONS_TOOL_NAME,
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
      return LIST_POOL_SESSIONS_DESCRIPTION;
    },
    async prompt() {
      return LIST_POOL_SESSIONS_DESCRIPTION;
    },
    async call({ pool_id: e, status_filter: t }, r) {
      let o = t ? `?status=${encodeURIComponent(t)}` : "",
        n = `/v1/code/runners/self-hosted/pools/${encodeURIComponent(e)}/sessions${o}`;
      return {
        data: {
          sessions:
            (
              await requestSelfHostedRunnerApi(
                "GET",
                n,
                void 0,
                r.abortController.signal,
                r.credentials,
              )
            ).sessions ?? [],
          equivalent: buildUiEquivalentPath(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Activity tab \u2192 Sessions",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return makeToolResultBlock(t, e);
    },
    renderToolUseMessage(e) {
      return formatToolUseInput(e);
    },
  });
var Q = createLazyValue(() =>
    Qe({ pool_id: s().describe("Tagged environment id (ccpool_\u2026).") }),
  ),
  K = createLazyValue(() => c({ runners: v(fe(s(), se())), equivalent: c({ ui: s() }) })),
  P = buildTool({
    name: LIST_RUNNERS_TOOL_NAME,
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
      return LIST_RUNNERS_DESCRIPTION;
    },
    async prompt() {
      return LIST_RUNNERS_DESCRIPTION;
    },
    async call({ pool_id: e }, t) {
      let r = `/v1/code/runners/self-hosted/runners?pool_id=${encodeURIComponent(e)}`;
      return {
        data: {
          runners:
            (
              await requestSelfHostedRunnerApi(
                "GET",
                r,
                void 0,
                t.abortController.signal,
                t.credentials,
              )
            ).runners ?? [],
          equivalent: buildUiEquivalentPath(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Activity tab \u2192 Runners",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return makeToolResultBlock(t, e);
    },
    renderToolUseMessage(e) {
      return formatToolUseInput(e);
    },
  });
var X = createLazyValue(() =>
    Qe({ pool_id: s().describe("Tagged environment id (ccpool_\u2026).") }),
  ),
  Y = createLazyValue(() => c({ secrets: v(fe(s(), se())), equivalent: c({ ui: s() }) })),
  D = buildTool({
    name: LIST_SECRETS_TOOL_NAME,
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
      return LIST_SECRETS_DESCRIPTION;
    },
    async prompt() {
      return LIST_SECRETS_DESCRIPTION;
    },
    async call({ pool_id: e }, t) {
      let r = `/v1/code/runners/self-hosted/pools/${encodeURIComponent(e)}/secrets`;
      return {
        data: {
          secrets:
            (
              await requestSelfHostedRunnerApi(
                "GET",
                r,
                void 0,
                t.abortController.signal,
                t.credentials,
              )
            ).secrets ?? [],
          equivalent: buildUiEquivalentPath(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Configuration tab \u2192 Environment keys",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return makeToolResultBlock(t, e);
    },
    renderToolUseMessage(e) {
      return formatToolUseInput(e);
    },
  });
var J = createLazyValue(() =>
    Qe({
      health_port: T()
        .int()
        .optional()
        .describe(`Default ${DEFAULT_HEALTH_PORT}. 0 means disabled.`),
    }),
  ),
  V = createLazyValue(() =>
    c({
      health: fe(s(), se()).optional(),
      disabled: O().optional(),
      unreachable: O().optional(),
      error: s().optional(),
    }),
  ),
  A = buildTool({
    name: READ_HEALTH_TOOL_NAME,
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
      return READ_HEALTH_DESCRIPTION;
    },
    async prompt() {
      return READ_HEALTH_DESCRIPTION;
    },
    async call({ health_port: e = DEFAULT_HEALTH_PORT }) {
      if (e === 0) return { data: { disabled: !0 } };
      try {
        return {
          data: {
            health: (
              await externalHttp.get(`http://127.0.0.1:${e}/healthz`, {
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
      return makeToolResultBlock(t, e);
    },
    renderToolUseMessage(e) {
      return formatToolUseInput(e);
    },
  });
var C = "claude_code_self_hosted_runner_",
  Z = createLazyValue(() =>
    Qe({
      health_port: T()
        .int()
        .optional()
        .describe(`Default ${DEFAULT_HEALTH_PORT}. 0 means disabled.`),
    }),
  ),
  ee = createLazyValue(() =>
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
var k = buildTool({
  name: READ_METRICS_TOOL_NAME,
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
    return READ_METRICS_DESCRIPTION;
  },
  async prompt() {
    return READ_METRICS_DESCRIPTION;
  },
  async call({ health_port: e = DEFAULT_HEALTH_PORT }) {
    if (e === 0) return { data: { disabled: !0 } };
    try {
      let t = await externalHttp.get(`http://127.0.0.1:${e}/metrics`, {
          timeout: 2000,
          responseType: "text",
          validateStatus: () => !0,
        }),
        r = redactSecrets(String(t.data));
      return { data: { gauges: te(r), raw: r } };
    } catch (t) {
      return { data: { unreachable: !0, error: l(t) } };
    }
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return makeToolResultBlock(t, e);
  },
  renderToolUseMessage(e) {
    return formatToolUseInput(e);
  },
});
var re = createLazyValue(() =>
    Qe({
      session_id: s().describe("Tagged session id (ccsess_\u2026)."),
      runner_id: s().describe(
        "Tagged runner id (ccrunner_\u2026) the caller observed failing. Server verifies this still matches the session assignment; mismatch returns Conflict. For a stuck session whose runner is gone, any value is accepted.",
      ),
    }),
  ),
  oe = createLazyValue(() =>
    c({ excluded_count: T().optional(), equivalent: c({ ui: s() }) }),
  ),
  x = buildTool({
    name: REQUEUE_SESSION_TOOL_NAME,
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
      if (getToolPermissionContext(t).mode === "auto")
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
      return REQUEUE_SESSION_DESCRIPTION;
    },
    async prompt() {
      return REQUEUE_SESSION_DESCRIPTION;
    },
    async call({ session_id: e, runner_id: t }, r) {
      let o = `/v1/code/runners/self-hosted/sessions/${encodeURIComponent(e)}/requeue`;
      return {
        data: {
          excluded_count: (
            await requestSelfHostedRunnerApi(
              "POST",
              o,
              { runner_id: t },
              r.abortController.signal,
              r.credentials,
            )
          ).excluded_count,
          equivalent: buildUiEquivalentPath(
            "Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 Activity tab \u2192 Sessions \u2192 (session) \u2192 Retry",
          ),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return makeToolResultBlock(t, e);
    },
    renderToolUseMessage(e) {
      return formatToolUseInput(e);
    },
  });
import { spawn } from "child_process";
import { mkdir, writeFile } from "fs/promises";
import { dirname, resolve } from "path";
var S = "./runner-setup/workspace",
  N = "./runner-setup/runner.log",
  ue = "./runner-setup/runner.pid",
  ie = createLazyValue(() =>
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
        .describe(`Default ${DEFAULT_HEALTH_PORT}. 0 disables /healthz.`),
      log_path: s().optional().describe(`Default: ${N}`),
    }),
  ),
  le = createLazyValue(() =>
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
    resolveApiBaseUrl(),
    "--health-port",
    String(e.health_port),
    "--log-file",
    e.log_path,
  ];
}
function d(e) {
  return /^[\w@%+=:,./-]+$/.test(e) ? e : `'${e.replace(/'/g, "'\\''")}'`;
}
var H = buildTool({
  name: SPAWN_LOCAL_TOOL_NAME,
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
    if (getToolPermissionContext(t).mode === "auto")
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
    return SPAWN_LOCAL_DESCRIPTION;
  },
  async prompt() {
    return SPAWN_LOCAL_DESCRIPTION;
  },
  async call({
    secret_file_path: e,
    capacity: t = 1,
    base_dir: r = S,
    health_port: o = DEFAULT_HEALTH_PORT,
    log_path: n = N,
  }) {
    let u = resolve(r),
      a = resolve(n),
      i = resolve(e);
    (await mkdir(u, { recursive: !0 }), await mkdir(dirname(a), { recursive: !0 }));
    let g = pe({
        secret_file_path: i,
        capacity: t,
        base_dir: u,
        health_port: o,
        log_path: a,
      }),
      y = process.execPath,
      _ = bc() ? [] : [process.argv[1]],
      h = spawn(y, [..._, ...g], {
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
    let z = resolve(ue);
    (await mkdir(dirname(z), { recursive: !0 }), await writeFile(z, String(b)));
    let j = [d(y), ..._.map(d), ...g.map(d)].join(" ");
    return {
      data: { pid: b, pid_file: z, log_path: a, health_port: o, command: j },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return makeToolResultBlock(t, e);
  },
  renderToolUseMessage(e) {
    return formatToolUseInput(e);
  },
});
import { open as me } from "fs/promises";
var M = 65536,
  de = createLazyValue(() =>
    Qe({
      log_path: s().describe("Path to the runner's --log-file."),
      bytes: T()
        .int()
        .positive()
        .optional()
        .describe(`How many trailing bytes to read. Default ${M}.`),
    }),
  ),
  he = createLazyValue(() => c({ lines: s(), bytes_read: T(), error: s().optional() })),
  U = buildTool({
    name: TAIL_LOG_TOOL_NAME,
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
      return TAIL_LOG_DESCRIPTION;
    },
    async prompt() {
      return TAIL_LOG_DESCRIPTION;
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
            { data: { lines: redactSecrets(a.toString("utf8")), bytes_read: u } }
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
      return formatToolUseInput(e);
    },
  });
var SELF_HOSTED_RUNNER_TOOLS = [E, P, w, D, H, A, k, U, x];
export { SELF_HOSTED_RUNNER_TOOLS };

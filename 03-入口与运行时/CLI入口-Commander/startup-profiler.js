// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, bi, K, ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S, fromEnumOpt, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { jsonStringify, writeFileSyncTraced, getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getEnvEntrypoint } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { formatFileSize } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-7axvc6rn.js";
import { importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import D from "os";
function getSpawnTimestampMs() {
  for (let t of [
    process.env.CCR_SPAWN_TIMESTAMP_MS,
    process.env.CLAUDE_CODE_SPAWN_TIMESTAMP_MS,
  ]) {
    if (t === void 0 || t.trim() === "") continue;
    let o = Number.parseInt(t, 10);
    if (Number.isFinite(o)) return o;
  }
  return;
}
import { dirname, join as q } from "path";
function sanitizeAnalyticsId(t) {
  if (t == null) return;
  return /^[A-Za-z0-9_-]{1,128}$/.test(t) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(t) : S("nonconforming");
}
function sanitizeAnalyticsIdList(t) {
  return fromSanitizer_SANITIZER_OUTPUT_ONLY(t.map((o) => sanitizeAnalyticsId(o)).join(","));
}
var O = null;
function getPerformance() {
  if (!O) O = importMetaRequire("perf_hooks").performance;
  return O;
}
function formatDurationMs(t) {
  return t.toFixed(3);
}
function formatProfilerLine(t, o, s, r, _, c, f = "") {
  let e = r ? ` | RSS: ${formatFileSize(r.rss)}, Heap: ${formatFileSize(r.heapUsed)}` : "";
  return `[+${formatDurationMs(t).padStart(_)}ms] (+${formatDurationMs(o).padStart(c)}ms) ${s}${f}${e}`;
}
var T = a.CLAUDE_CODE_PROFILE_STARTUP,
  J = 0.05,
  v = Math.random() < J,
  R = T || v,
  E = "headless_";
class w {
  current = -1;
  turn0Marks = [];
  advance() {
    this.current++;
  }
}
var Z = new j(() => new w());
function L() {
  return Z.of(B().host);
}
function C() {
  return L().turn0Marks;
}
function V() {
  let t = getPerformance(),
    o = t.getEntriesByType("mark");
  for (let s of o) if (s.name.startsWith(E)) t.clearMarks(s.name);
}
function startHeadlessTurn() {
  if (!ke()) return;
  if (!R) return;
  let t = L();
  if ((t.advance(), V(), getPerformance().mark(`${E}turn_start`), T))
    logForDebugging(`[headlessProfiler] Started turn ${t.current}`);
}
function markHeadlessCheckpoint(t) {
  if (!ke()) return;
  if (!R) return;
  let o = getPerformance();
  if ((o.mark(`${E}${t}`), T))
    logForDebugging(`[headlessProfiler] Checkpoint: ${t} at ${o.now().toFixed(1)}ms`);
}
function reportHeadlessTurnMetrics() {
  if (!ke()) return;
  if (!R) return;
  let s = getPerformance()
    .getEntriesByType("mark")
    .filter((m) => m.name.startsWith(E));
  if (s.length === 0) return;
  let r = new Map();
  for (let m of s) {
    let p = m.name.slice(E.length);
    r.set(p, m.startTime);
  }
  let _ = r.get("turn_start");
  if (_ === void 0) return;
  let c = L(),
    f = c.current;
  if (T && f === 0)
    c.turn0Marks = s.map(({ name: m, startTime: p }) => ({
      name: m,
      startTime: p,
    }));
  let e = { turn_number: f };
  if (f === 0)
    for (let [m, [p, I]] of Object.entries({
      load_initial_messages_ms: [
        "before_loadInitialMessages",
        "after_loadInitialMessages",
      ],
      system_prompt_ms: ["before_getSystemPrompt", "after_getSystemPrompt"],
      streaming_setup_ms: [
        "before_runHeadlessStreaming",
        "stdin_listen_started",
      ],
      stdin_wait_ms: ["stdin_listen_started", "run_entry"],
    })) {
      let y = r.get(p),
        d = r.get(I);
      if (y !== void 0 && d !== void 0 && d > y) e[m] = Math.round(d - y);
    }
  let l = r.get("system_message_yielded");
  if (l !== void 0 && f === 0) e.time_to_system_message_ms = Math.round(l);
  let u = r.get("query_started");
  if (u !== void 0) e.time_to_query_start_ms = Math.round(u - _);
  let g = r.get("first_chunk");
  if (g !== void 0) e.time_to_first_response_ms = Math.round(g - _);
  let h = r.get("api_request_sent");
  if (u !== void 0 && h !== void 0) e.query_overhead_ms = Math.round(h - u);
  if (((e.checkpoint_count = s.length), a.CLAUDE_CODE_ENTRYPOINT))
    e.entrypoint = fromEnumOpt(getEnvEntrypoint()) ?? S("other");
  if (v) logEvent("tengu_headless_latency", e);
  if (T) logForDebugging(`[headlessProfiler] Turn ${f} metrics: ${jsonStringify(e)}`);
}
var P = a.CLAUDE_CODE_PROFILE_STARTUP,
  Q = 0.005,
  Y = Math.random() < Q,
  M = P || Y;
class z {
  memorySnapshots = [];
  startupContext = {};
  bootstrapEntry = "cli";
  onceMarked = new Set();
  reported = !1;
  lateReported = !1;
  firstEmitPhases = new Set();
}
var tt = new j(() => new z());
function k() {
  return bi(tt);
}
var et = {
    import_time: ["cli_entry", "main_tsx_imports_loaded"],
    main_imports: ["cli_before_main_import", "main_tsx_entry"],
    mdm_keychain_await: ["preAction_start", "preAction_after_mdm"],
    init_time: ["init_function_start", "init_function_end"],
    init_safe_env: ["init_configs_enabled", "init_safe_env_vars_applied"],
    init_network: [
      "init_after_remote_settings_check",
      "init_network_configured",
    ],
    init_tail: ["init_network_configured", "init_function_end"],
    settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"],
    tools_loaded: ["init_function_end", "action_tools_loaded"],
    preaction_tail: ["init_function_end", "action_handler_start"],
    action_prologue: ["action_handler_start", "action_after_input_prompt"],
    action_setup_span: ["action_after_input_prompt", "action_after_setup"],
    mcp_configs: ["action_tools_loaded", "action_mcp_configs_loaded"],
    plugins_init: ["action_mcp_configs_loaded", "action_after_plugins_init"],
    headless_setup: [
      "action_after_plugins_init",
      "before_validateForceLoginOrg",
    ],
    force_login_org: ["before_validateForceLoginOrg", "before_connectMcp"],
    mcp_connect: ["before_connectMcp", "after_connectMcp_claudeai"],
    mcp_connect_user: ["before_mcp_connect_user", "after_mcp_connect_user"],
    mcp_connect_connector: [
      "before_mcp_connect_connector",
      "after_mcp_connect_connector",
    ],
    growthbook_init: ["before_growthbook_init", "after_growthbook_init"],
    prewait: ["after_connectMcp_claudeai", "after_print_import"],
    sandbox_init: ["before_sandbox_init", "after_sandbox_init"],
    load_initial_messages: [
      "before_loadInitialMessages",
      "after_loadInitialMessages",
    ],
    process_user_input: ["before_processUserInput", "after_processUserInput"],
    total_time: ["cli_entry", "main_after_run"],
  },
  nt = new Set([
    "total_time",
    "main_imports",
    "mdm_keychain_await",
    "init_safe_env",
    "init_network",
    "init_tail",
    "mcp_connect_user",
    "mcp_connect_connector",
    "growthbook_init",
    "preaction_tail",
    "action_prologue",
    "action_setup_span",
  ]);
if (M) profileCheckpoint("profiler_initialized");
var F = M ? Date.now() : void 0,
  x = M ? Math.round(process.uptime() * 1000) : void 0;
function addStartupContext(t) {
  if (!M) return;
  Object.assign(k().startupContext, t);
}
function getBootstrapEntry() {
  return k().bootstrapEntry;
}
function profileCheckpoint(t, { once: o = !1 } = {}) {
  if (!M) return !1;
  let { onceMarked: s, memorySnapshots: r } = k();
  if (o) {
    if (s.has(t)) return !1;
    s.add(t);
  }
  if ((getPerformance().mark(t), P)) r.push(process.memoryUsage());
  return !0;
}
function U({ memorySnapshots: t }) {
  if (!P) return "Startup profiling not enabled";
  let s = getPerformance().getEntriesByType("mark");
  if (s.length === 0) return "No profiling checkpoints recorded";
  let r = [];
  (r.push("=".repeat(80)),
    r.push("STARTUP PROFILING REPORT"),
    r.push("=".repeat(80)),
    r.push(""));
  let _ = 0;
  for (let [f, e] of s.entries())
    (r.push(formatProfilerLine(e.startTime, e.startTime - _, e.name, t[f], 8, 7)),
      (_ = e.startTime));
  let c = s.at(-1);
  return (
    r.push(""),
    r.push(`Total startup time: ${formatDurationMs(c?.startTime ?? 0)}ms`),
    r.push("=".repeat(80)),
    r.join(`
`)
  );
}
function profileReport() {
  let t = k();
  if (t.reported) {
    if (!t.lateReported) ((t.lateReported = !0), G({ late: !0 }), H(t));
    return;
  }
  ((t.reported = !0), G({ late: !1 }), H(t));
}
function H(t) {
  if (!P) return;
  let o = rt(),
    s = dirname(o);
  (getFsSurface().mkdirSync(s), writeFileSyncTraced(o, U(t), { encoding: "utf8", flush: !0 }));
  let c = getPerformance().getEntriesByType("mark");
  (writeFileSyncTraced(
    ot(),
    JSON.stringify(
      {
        metadata: W(t, { late: !1 }) ?? {},
        marks: c.map((f) => ({ name: f.name, startTime: f.startTime })),
        memory: t.memorySnapshots,
        nodeBootMs: x,
        headlessTurn0Marks: C(),
      },
      null,
      2,
    ),
    { encoding: "utf8", flush: !0 },
  ),
    logForDebugging("Startup profiling report:"),
    logForDebugging(U(t)));
}
function rt() {
  return q(getClaudeConfigDir(), "startup-perf", `${K()}.txt`);
}
function ot() {
  return q(getClaudeConfigDir(), "startup-perf", `${K()}.json`);
}
function W({ firstEmitPhases: t, startupContext: o }, { late: s }) {
  let _ = getPerformance().getEntriesByType("mark");
  if (_.length === 0) return null;
  let c = new Map();
  for (let p of _) c.set(p.name, p.startTime);
  let f = c.get("main_after_run"),
    e = {},
    l = 0,
    u = 0;
  for (let [p, [I, y]] of Object.entries(et)) {
    if (s && t.has(p)) continue;
    let d = c.get(I),
      A = c.get(y);
    if (d !== void 0 && A !== void 0) {
      let N = Math.round(A - d);
      if (((e[`${p}_ms`] = N), l++, !s)) t.add(p);
      if (!nt.has(p) && (f === void 0 || A <= f)) u += N;
    }
  }
  if (s) {
    if (l === 0) return null;
    e.late = !0;
  } else e.late = !1;
  let g = e.total_time_ms;
  if (typeof g === "number") e.gap_unaccounted_ms = Math.max(0, g - u);
  ((e.free_mem_mb = Math.round(D.freemem() / 1048576)),
    (e.load_avg_1m = Math.round((D.loadavg()[0] ?? 0) * 100) / 100),
    (e.checkpoint_count = _.length));
  let h = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (h) e.ccr_session_id = sanitizeAnalyticsId(h);
  if (x !== void 0) e.node_boot_ms = x;
  let m = getSpawnTimestampMs();
  if (m !== void 0 && F !== void 0)
    e.spawn_to_first_checkpoint_ms = Math.round(F - m);
  return (Object.assign(e, o), e);
}
function G({ late: t } = { late: !1 }) {
  if (!Y) return;
  let o = W(k(), { late: t });
  if (o === null) return;
  logEvent("tengu_startup_perf", o);
}
export { getSpawnTimestampMs, sanitizeAnalyticsId, sanitizeAnalyticsIdList, getPerformance, formatDurationMs, formatProfilerLine, startHeadlessTurn, markHeadlessCheckpoint, reportHeadlessTurnMetrics, addStartupContext, getBootstrapEntry, profileCheckpoint, profileReport };

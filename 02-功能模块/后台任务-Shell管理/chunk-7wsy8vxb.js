// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { Xn, j, Si, B, K, Ec, vz, _B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, Xo, Fb } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { R, dt, ge, l, A, Jr, Jg, WW, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, fromEnumOpt, fromEnumArr, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { getTelemetryCode, describeStorageError, jsonStringify, jsonParse, redactSecretsFromText, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { PROVIDER_CONFIG_ENV_VARS, MODEL_ENV_VARS, CUSTOM_MODEL_OPTION_ENV_VARS } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { normalizeComparableText } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { isModelRetiredOrRemapped, parseUserSpecifiedModel, getJobsDir as Xvn, getJobStorageKey, isLocalAddress, sanitizeSessionName, getBgTakeover } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { renameWithRetry, writeNewFileExclusive, writeNewFileAfterAbsenceCheck, writeFileAtomic } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { le, Xu, nt, hm } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getRosterFilePath, MAX_TERMINAL_DIMENSION } from "./chunk-djserjj5.js";
import { getBgJobRuntimeState } from "../../01-核心基础设施/核心工具-未归类/bg-job-runtime-state.js";
import { isExitedProcessAsync, isSameProcessAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { resolveAgentColorName } from "../多会话视图-Fleet/agent-color-palette.js";
import { isUuidShaped } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { FORK_RESTRICTED_LAUNCH_FLAGS_DESCRIPTION } from "../权限系统/fork-restricted-launch-flags.js";
import { splitToolRuleList } from "../权限系统/permission-rule-parsing.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { Cs } from "../../00-第三方库/graceful-fs/chunk-8fpdwg2e.js";
import { getCarriableEffortLevel } from "../权限系统/chunk-t3b7pg2x.js";
import { isProcessRunning } from "../守护服务-Daemon/process-record.js";
import { createKeyedSerialQueue } from "../../01-核心基础设施/核心工具-并发与缓存/async-serialization.js";
import { s, T, O, se, v, c, it, $e, Ko, fe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { isAbsolute as bt } from "path";
var VALUE_TAKING_RESPAWN_FLAGS = new Set([
    "--exec",
    "--model",
    "-m",
    "--permission-mode",
    "--inherit-permission-mode",
    "--proactivity",
    "--agent",
    "--agents",
    "--routine",
    "--effort",
    "--add-dir",
    "--mcp-config",
    "--settings",
    "--setting-sources",
    "--system-prompt",
    "--system-prompt-file",
    "--append-system-prompt",
    "--append-system-prompt-file",
    "--system-prompt-snapshot",
    "--append-subagent-system-prompt",
    "--append-subagent-system-prompt-file",
    "--fallback-model",
    "--advisor",
    "--channels",
    "--watch-artifact",
    "--watch-artifact-no-autoreact",
    "--permission-prompt-tool",
    "--permission-prompts",
    "--allowed-tools",
    "--allowedTools",
    "--disallowed-tools",
    "--disallowedTools",
    "--tools",
    "--session-id",
    "--debug-file",
    "-n",
    "--name",
    "--autocompact",
    "--betas",
    "--file",
    "--max-budget-usd",
    "--max-thinking-tokens",
    "--max-turns",
    "--task-budget",
    "--plan-mode-instructions",
    "--plugin-dir",
    "--plugin-dir-no-mcp",
    "--plugin-url",
    "--rewind-files",
    "--thinking",
    "--thinking-display",
    "--remote-control-session-name-prefix",
    "--json-schema",
  ]),
  VALUE_TAKING_FLAGS = new Set([...VALUE_TAKING_RESPAWN_FLAGS, "--resume-session-at", "--resume-drops-turn"]),
  MULTI_VALUE_FLAGS = new Set([
    "--allowed-tools",
    "--allowedTools",
    "--disallowed-tools",
    "--disallowedTools",
    "--tools",
    "--mcp-config",
    "--betas",
    "--add-dir",
    "--file",
    "--channels",
  ]),
  gt = new Set(["--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url"]),
  BOOLEAN_RESPAWN_FLAGS = new Set([
    "--dangerously-skip-permissions",
    "--allow-dangerously-skip-permissions",
    "--strict-mcp-config",
    "--dangerously-allow-browser-network-access",
    "--restricted",
    "--disable-slash-commands",
    "--verbose",
    "--reply-on-resume",
    "--ide",
    "--chrome",
    "--no-chrome",
    "--bare",
    "--brief",
    "--remote-control",
    "--rc",
  ]),
  BOOLEAN_ENV_KEYS = new Set(["CLAUDE_CODE_SUBAGENT_MODEL_FORCE"]),
  MODEL_ENV_KEYS = [...MODEL_ENV_VARS, ...CUSTOM_MODEL_OPTION_ENV_VARS, ...BOOLEAN_ENV_KEYS],
  ALLOWED_PROVIDER_ENV_KEYS = new Set([
    "CLAUDE_CONFIG_DIR",
    "CLAUDE_INTERNAL_FC_OVERRIDES",
    ...MODEL_ENV_KEYS,
    ...PROVIDER_CONFIG_ENV_VARS,
    "AWS_REGION",
    "AWS_DEFAULT_REGION",
    "ANTHROPIC_BEDROCK_REGION_PREFIX",
    "AWS_PROFILE",
    "AWS_CONFIG_FILE",
    "AWS_SHARED_CREDENTIALS_FILE",
    "GOOGLE_APPLICATION_CREDENTIALS",
    "GOOGLE_CLOUD_PROJECT",
    "GCLOUD_PROJECT",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR",
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
  ]);
function Le(e) {
  let t = {},
    r = [];
  for (let [o, d] of Object.entries(e))
    if (ALLOWED_PROVIDER_ENV_KEYS.has(o) && (!BOOLEAN_ENV_KEYS.has(o) || Ie(d))) t[o] = d;
    else r.push(o);
  if (r.length === 0) return e;
  return (
    logForDebugging(
      `[jobs] stripped disallowed providerEnv key(s) from persisted job state: ${r.join(", ")}`,
      { level: "warn" },
    ),
    Object.keys(t).length > 0 ? t : void 0
  );
}
function sanitizeRespawnFlags(e) {
  let t = [],
    r = [];
  for (let o = 0; o < e.length; o++) {
    let d = e[o];
    if (!d.startsWith("-")) {
      r.push(d);
      continue;
    }
    let g = d.indexOf("="),
      p = g === -1 ? d : d.slice(0, g);
    if (g !== -1 && !VALUE_TAKING_RESPAWN_FLAGS.has(p) && BOOLEAN_RESPAWN_FLAGS.has(p)) {
      (t.push(p), r.push(d));
      continue;
    }
    let y = g === -1 && VALUE_TAKING_RESPAWN_FLAGS.has(p),
      w = g === -1 ? BOOLEAN_RESPAWN_FLAGS.has(p) || (y && e[o + 1] !== void 0) : VALUE_TAKING_RESPAWN_FLAGS.has(p),
      f = w ? t : r;
    if ((f.push(d), y && e[o + 1] !== void 0)) f.push(e[++o]);
    if (!w || (y && MULTI_VALUE_FLAGS.has(p)))
      while (e[o + 1] !== void 0 && !e[o + 1].startsWith("-")) f.push(e[++o]);
  }
  if (r.length > 0)
    logForDebugging(
      `[jobs] stripped non-allowlisted respawnFlags token(s) from persisted job state: ${r.join(" ")}`,
      { level: "warn" },
    );
  return ft(t);
}
function ft(e) {
  let t = [];
  for (let o = 0; o < e.length; o++) {
    let d = e[o],
      g = d.indexOf("="),
      p = g === -1 ? d : d.slice(0, g),
      y = [d];
    if (g === -1 && VALUE_TAKING_RESPAWN_FLAGS.has(p) && e[o + 1] !== void 0) {
      if ((y.push(e[++o]), MULTI_VALUE_FLAGS.has(p)))
        while (e[o + 1] !== void 0 && !e[o + 1].startsWith("-")) y.push(e[++o]);
    }
    t.push({ name: p, toks: y });
  }
  let r = new Map();
  for (let o = 0; o < t.length; o++) {
    let d = t[o];
    if (VALUE_TAKING_RESPAWN_FLAGS.has(d.name) && !MULTI_VALUE_FLAGS.has(d.name) && !gt.has(d.name))
      r.set(d.name, o);
  }
  return t.filter((o, d) => (r.get(o.name) ?? d) === d).flatMap((o) => o.toks);
}
function normalizeCliArgPaths(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o === "--") {
      for (let g = r; g < e.length; g++) t.push(e[g]);
      break;
    }
    let d = o.startsWith("--") ? o.indexOf("=") : -1;
    if (d !== -1 && (VALUE_TAKING_FLAGS.has(o.slice(0, d)) || ce.has(o.slice(0, d)))) {
      t.push(o.slice(0, d + 1) + oe(o.slice(0, d), o.slice(d + 1)));
      continue;
    }
    if (/^-[a-zA-Z].+/.test(o)) {
      let g = 1;
      while (g < o.length - 1 && VALUELESS_SHORT_FLAGS.has(`-${o[g]}`)) g++;
      let p = `-${o[g]}`;
      if (o.length > g + 1 && (VALUE_TAKING_FLAGS.has(p) || ce.has(p))) {
        t.push(o.slice(0, g + 1) + oe(p, o.slice(g + 1)));
        continue;
      }
      if (o.length === g + 1 && g > 1 && (VALUE_TAKING_FLAGS.has(p) || ce.has(p))) {
        if ((t.push(o), VALUE_TAKING_FLAGS.has(p) && e[r + 1] !== void 0)) {
          if ((t.push(oe(p, e[++r])), MULTI_VALUE_FLAGS.has(p)))
            while (e[r + 1] !== void 0 && !Se(e[r + 1])) t.push(oe(p, e[++r]));
        } else if (ce.has(p) && e[r + 1] !== void 0 && !Se(e[r + 1]))
          t.push(Fb(e[++r]));
        continue;
      }
    }
    if ((t.push(o), VALUE_TAKING_FLAGS.has(o) && e[r + 1] !== void 0)) {
      if ((t.push(oe(o, e[++r])), MULTI_VALUE_FLAGS.has(o)))
        while (e[r + 1] !== void 0 && !Se(e[r + 1])) t.push(oe(o, e[++r]));
    } else if (ce.has(o) && e[r + 1] !== void 0 && !Se(e[r + 1]))
      t.push(Fb(e[++r]));
  }
  return t;
}
var mt = new Set([
  "--system-prompt",
  "--append-system-prompt",
  "--append-subagent-system-prompt",
  "--plan-mode-instructions",
  "--name",
  "-n",
]);
function oe(e, t) {
  return mt.has(e) ? t : Fb(t);
}
var ce = new Set(["-r", "--resume"]),
  VALUELESS_SHORT_FLAGS = new Set(["-c", "-p", "-h", "-v"]);
function Se(e) {
  return e.length > 1 && e.startsWith("-");
}
function withReplyOnResumeFlag(e) {
  return e.includes("--reply-on-resume") ? [...e] : [...e, "--reply-on-resume"];
}
function withoutReplyOnResumeFlag(e) {
  return e.filter((t) => t !== "--reply-on-resume");
}
var Oe = ["shell", "slash", "fleet", "spare", "respawn"];
function isBgDispatchSource(e) {
  return Oe.includes(e);
}
var BG_PROTO = 1,
  BG_PROTO_MIN = 1,
  SHORT_RE = /^[a-f0-9]{8}$/,
  DAEMON_DETACH_APC = "\x1B_cc-daemon-detach\x1B\\",
  ie = "\x1B\\",
  ze = "\x1B_cc-detach-msg;",
  DAEMON_HINT_APC = "\x1B_cc-daemon-hint\x1B\\";
function wrapDaemonHint(e) {
  return DAEMON_HINT_APC + e + DAEMON_HINT_APC;
}
var pe = "\x1B_cc-d-imark;",
  kt = Buffer.from(pe, "latin1");
function interactiveMarkApc(e) {
  return pe + jsonStringify(e) + ie;
}
function extractInteractiveMarks(e, t, r) {
  let o = r?.maxPayload ?? 512,
    d = e.length > 0 ? Buffer.concat([e, t]) : t,
    g = [],
    p = [],
    y = 0,
    w = 0,
    f = -1,
    _ = !1;
  for (;;) {
    let P = d.indexOf(pe, w);
    if (P < 0) break;
    let D = P + pe.length,
      x = _ ? -1 : f >= D ? f : (f = d.indexOf(ie, D));
    if (x < 0) {
      _ = !0;
      let U = d.subarray(P);
      if (U.length > pe.length + o) {
        w = D;
        continue;
      }
      let H = !1;
      for (let re = D; re < d.length; re++) {
        let xe = d[re];
        if (xe === 24 || xe === 26 || (xe === 27 && re < d.length - 1)) {
          H = !0;
          break;
        }
      }
      if (H) {
        w = D;
        continue;
      }
      return (
        p.push(d.subarray(y, P)),
        {
          marks: g,
          carry: Buffer.from(U),
          cleaned: p.length === 1 ? p[0] : Buffer.concat(p),
        }
      );
    }
    let L = !1;
    if (x - D <= o)
      try {
        let U = jsonParse(d.subarray(D, x).toString("utf8"));
        if (
          U !== null &&
          typeof U === "object" &&
          (U.kind === "content_paint" || U.kind === "prompt_idle")
        ) {
          if (
            ((L = !0), r?.requireNonce === void 0 || U.nonce === r.requireNonce)
          )
            g.push({
              kind: U.kind,
              msgsLoaded: boundedMarkCountOrUndefined(U.msgsLoaded),
              msgsInJsonl: boundedMarkCountOrUndefined(U.msgsInJsonl),
              msgsRenderedAtFirstPaint: boundedMarkCountOrUndefined(U.msgsRenderedAtFirstPaint),
            });
        }
      } catch {}
    if (L) (p.push(d.subarray(y, P)), (y = x + ie.length));
    w = L ? x + ie.length : D;
  }
  let C = d.subarray(w),
    F = kt,
    E = 0,
    I = Math.min(C.length, F.length - 1);
  e: for (let P = I; P > 0; P--) {
    let D = C.length - P;
    for (let x = 0; x < P; x++) if (C[D + x] !== F[x]) continue e;
    E = P;
    break;
  }
  return (
    p.push(d.subarray(y, d.length - E)),
    {
      marks: g,
      carry: E > 0 ? Buffer.from(C.subarray(C.length - E)) : Buffer.alloc(0),
      cleaned: p.length === 1 ? p[0] : Buffer.concat(p),
    }
  );
}
function boundedMarkCountOrUndefined(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= Me
    ? e
    : void 0;
}
var Me = 1e9,
  ae = () => T().int().nonnegative().max(Me).optional(),
  yt = createLazyValue(() =>
    c({
      kind: X(["content_paint", "prompt_idle"]),
      msgsLoaded: ae(),
      msgsInJsonl: ae(),
      msgsRenderedAtFirstPaint: ae(),
    }),
  ),
  St = createLazyValue(() =>
    it({
      kind: X(["content_paint", "prompt_idle"]),
      msgsLoaded: ae(),
      msgsInJsonl: ae(),
      msgsRenderedAtFirstPaint: ae(),
    }),
  );
function parseInteractiveMarkRv(e) {
  let t = St().safeParse(e);
  if (!t.success) return null;
  return {
    kind: t.data.kind,
    msgsLoaded: t.data.msgsLoaded,
    msgsInJsonl: t.data.msgsInJsonl,
    msgsRenderedAtFirstPaint: t.data.msgsRenderedAtFirstPaint,
  };
}
function daemonDetachApc(e) {
  if (!e) return DAEMON_DETACH_APC;
  return ze + e + ie + DAEMON_DETACH_APC;
}
function parseDetachMsg(e) {
  let t = e.indexOf(ze);
  if (t < 0) return;
  let r = t + ze.length,
    o = e.indexOf(ie, r);
  if (o < 0) return;
  return e.subarray(r, o).toString("utf8");
}
var BgDispatchSchema = createLazyValue(() =>
    c({
      proto: T().int().min(BG_PROTO_MIN).max(BG_PROTO),
      short: s().regex(SHORT_RE),
      nonce: s().regex(SHORT_RE).optional(),
      sessionId: s().transform(Fb),
      createdAt: T(),
      source: X(Oe).catch("fleet"),
      cwd: s().transform(Fb),
      launch: Ko("mode", [
        c({
          mode: k("prompt"),
          args: v(s()).transform(normalizeCliArgPaths),
          restoresTranscript: O().optional(),
        }),
        c({
          mode: k("resume"),
          sessionId: s().transform(Fb),
          transcriptPath: s().transform(Fb).optional(),
          fork: O(),
          flagArgs: v(s()).transform(normalizeCliArgPaths),
          restoresTranscript: O().optional(),
        }),
        c({
          mode: k("exec"),
          cmd: s().transform(Fb),
          args: v(s()).transform((e) => e.map(Fb)),
        }),
      ]),
      env: fe(s(), s()).default({}),
      reattachEnv: fe(s(), s()).optional(),
      worktree: c({ path: s().transform(Fb), ownershipToken: s() }).optional(),
      isolation: X(["none", "worktree"]).default("none"),
      respawnFlags: v(s()).default([]).transform(normalizeCliArgPaths),
      attachStallRespawns: T().int().optional(),
      agent: s().optional(),
      routine: s().optional(),
      seed: c({ intent: s(), name: s().optional() }).optional(),
      cols: T().int().positive().max(MAX_TERMINAL_DIMENSION).optional(),
      rows: T().int().positive().max(MAX_TERMINAL_DIMENSION).optional(),
    }),
  ),
  TRANSIENT_ATTACH_CODE = /ERESPAWNING|ESTARTING/,
  RACED_SOCKET_GAP = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/,
  RESPAWNING_ATTACH_CODE = "ERESPAWNING",
  RESPAWN_REASON_UPGRADE = "updated Claude Code",
  RESPAWN_REASON_STALL = "stalled",
  RESPAWN_REASON_LEGACY = "legacy",
  HOST_DEAD_ATTACH_CODE = "EHOSTDEAD",
  HOST_DIED_DETAIL = "terminal host process died \u2014 press Enter to restart",
  HOST_DIED_ATTACH_MESSAGE = "This session's terminal host process died (the conversation is saved)",
  HOST_DIED_EXEC_DETAIL =
    "terminal host process died \u2014 its output is gone; the command was not run again",
  HOST_DIED_EXEC_ATTACH_MESSAGE =
    "This command's terminal host process died \u2014 its output is gone and the command was not run again",
  FATAL_ATTACH_CODE = /ESTALLED|EUNVERIFIED|EHOSTDEAD/,
  KICKED_ATTACH_CODE = /^EKICKED:\s*/,
  SUPERVISOR_DETACH_CODE = /^E[A-Z]+:/;
function Re() {
  return s().refine(isLocalAddress, "remote IPC path");
}
var je = createLazyValue(() =>
  it({
    pid: T(),
    procStart: s().optional(),
    sessionId: s().transform(Fb),
    rendezvousSock: Re(),
    ptySock: Re().optional(),
    messagingSock: Re().optional(),
    cliVersion: s().optional(),
    startedAt: T(),
    attempt: T(),
    cwd: s().transform(Fb),
    worktreePath: s().transform(Fb).optional(),
    dispatch: BgDispatchSchema(),
    pendingRespawn: k("upgrade").optional(),
    decModes: v(T()).optional(),
    firedInteractiveMarks: v(se())
      .transform((e) => {
        let t = [];
        for (let r of e) {
          let o = yt().safeParse(r);
          if (o.success) t.push(o.data);
        }
        return t.slice(0, 2);
      })
      .optional()
      .catch(void 0),
    rvAuth: s().optional(),
    ptyAuth: s().optional(),
    replPid: T().optional(),
    replProcStart: s().optional(),
  }),
);
function rosterEntryExtras(e) {
  let t = je().shape,
    r = {};
  for (let [o, d] of Object.entries(e)) if (!(o in t)) r[o] = d;
  return r;
}
var RosterSchema = createLazyValue(() =>
    it({
      proto: T().int().min(BG_PROTO_MIN).max(BG_PROTO),
      supervisorPid: T().catch(0),
      updatedAt: T().catch(0),
      workers: fe(s().regex(SHORT_RE), je()),
    }),
  ),
  ControlRequestSchema = createLazyValue(() => {
    let e = s().regex(SHORT_RE),
      t = T().int().min(BG_PROTO_MIN).max(BG_PROTO);
    return Ko("op", [
      c({ proto: t, op: k("ping") }),
      c({ proto: t, op: k("nudge") }),
      c({ proto: t, op: k("yield") }),
      c({
        proto: t,
        op: k("lease"),
        client: c({ label: s(), cwd: s(), pid: T() }).optional(),
      }),
      c({ proto: t, op: k("leases") }),
      c({
        proto: t,
        op: k("await-ack"),
        short: e,
        nonce: e.optional(),
        timeoutMs: T(),
      }),
      c({
        proto: t,
        op: k("dispatch"),
        d: BgDispatchSchema(),
        timeoutMs: T(),
        auth: s().optional(),
      }),
      c({ proto: t, op: k("list") }),
      c({ proto: t, op: k("has"), short: e }),
      c({
        proto: t,
        op: k("kill"),
        short: e,
        signal: X(["SIGTERM", "SIGKILL"]).optional(),
        handoff: O().optional(),
        evict: O().optional(),
      }),
      c({
        proto: t,
        op: k("reply"),
        short: e,
        text: s(),
        auth: s().optional(),
      }),
      c({ proto: t, op: k("subscribe"), short: e, tail: T().optional() }),
      c({
        proto: t,
        op: k("attach"),
        short: e,
        auth: s().optional(),
        cols: T().int().min(1).max(MAX_TERMINAL_DIMENSION),
        rows: T().int().min(1).max(MAX_TERMINAL_DIMENSION),
        attachId: s().optional(),
        caps: c({
          imark: O().optional(),
          terminal: s().nullable(),
          mux: X(["tmux", "screen", "zellij"]).nullable(),
          ssh: O(),
          wheelFlood: O().optional(),
          hyperlinks: O().optional(),
          progressReporting: O().optional(),
          wtSession: O().optional(),
          isVscodeTerm: O().optional(),
          browser: s().nullable().optional(),
          colorLevel: $e([k(0), k(1), k(2), k(3)]).optional(),
          syncOutput: O().optional(),
          editor: s().nullable().optional(),
          systemTheme: X(["dark", "light"]).optional(),
          tmuxSocket: Re()
            .refine(bt)
            .optional()
            .catch(void 0),
        }).optional(),
        holdingFrame: O().optional(),
      }),
      c({
        proto: t,
        op: k("resize"),
        short: e,
        cols: T().int().min(1).max(MAX_TERMINAL_DIMENSION),
        rows: T().int().min(1).max(MAX_TERMINAL_DIMENSION),
        attachId: s().optional(),
      }),
      c({ proto: t, op: k("ensure-spare"), cwd: s() }),
      c({
        proto: t,
        op: k("permission-response"),
        short: e,
        requestId: s(),
        allow: O(),
        auth: s().optional(),
      }),
      c({ proto: t, op: k("respawn-stale"), short: e }),
      c({ proto: t, op: k("shutdown"), reapWorkers: O().optional() }),
    ]);
  }),
  DAEMON_LEASE_LABELS = ["cli-bg-dispatch", "claude agents"];
import {
  lstat as Et,
  mkdir as At,
  readFile as _t,
  rename,
  rm as He,
} from "fs/promises";
import { dirname as xt } from "path";
import { lstat as Rt } from "fs/promises";
async function inspectRegularFileForRead(e) {
  try {
    let t = await Rt(e);
    return t.isFile()
      ? { kind: "proceed" }
      : { kind: "refused", symlink: t.isSymbolicLink() };
  } catch (t) {
    return W(t) ? { kind: "proceed" } : { kind: "error", error: t };
  }
}
function isReadRefusedError(e) {
  return (
    e?.code === "Failed" &&
    (e.telemetryCode === "ENXIO" ||
      e.telemetryCode === "EFBIG" ||
      e.telemetryCode === "ELOOP" ||
      e.telemetryCode === "ENAMETOOLONG")
  );
}
var It = new Set([
    "proto",
    "supervisorPid",
    "updatedAt",
    "workers",
    "pid",
    "procStart",
    "sessionId",
    "rendezvousSock",
    "ptySock",
    "messagingSock",
    "rvAuth",
    "ptyAuth",
    "replPid",
    "replProcStart",
    "cliVersion",
    "startedAt",
    "attempt",
    "cwd",
    "worktreePath",
    "dispatch",
    "pendingRespawn",
    "decModes",
    "firedInteractiveMarks",
    "kind",
    "msgsLoaded",
    "msgsInJsonl",
    "msgsRenderedAtFirstPaint",
    "short",
    "restoresTranscript",
    "nonce",
    "createdAt",
    "cols",
    "rows",
    "source",
    "launch",
    "mode",
    "args",
    "fork",
    "flagArgs",
    "cmd",
    "env",
    "reattachEnv",
    "worktree",
    "path",
    "ownershipToken",
    "isolation",
    "respawnFlags",
    "seed",
    "intent",
    "name",
    "agent",
    "routine",
    "attachStallRespawns",
  ]),
  Te = 8388608;
function rosterKey() {
  return STORAGE_KEYS.daemon(["roster.json"]);
}
function Y() {
  return {
    proto: BG_PROTO,
    supervisorPid: process.pid,
    updatedAt: Date.now(),
    workers: {},
  };
}
async function readRoster(e, t) {
  if (t) {
    let { roster: o, inspectFailed: d } = await Ke(t, e);
    return d ? { ...o, inspectFailed: !0 } : o;
  }
  let r;
  try {
    let o = await Et(getRosterFilePath());
    if (!o.isFile() || o.size > Te) {
      if (!e?.silent)
        if (
          (logError(
            Error(
              `roster.json ${o.isFile() ? `too large (${o.size} bytes) \u2014 quarantining` : "is not a regular file \u2014 removing"}`,
            ),
          ),
          logEvent("tengu_bg_roster_parse_failed", {
            orphaned: -1,
            quarantined: 1,
            errCode: o.isFile() ? S("E2BIG") : S("EFTYPE"),
          }),
          o.isFile())
        )
          await me(void 0);
        else await He(getRosterFilePath(), { recursive: !0, force: !0 }).catch((d) => logError(d));
      return { ...Y(), parseFailed: !0 };
    }
    r = jsonParse(await _t(getRosterFilePath(), "utf8"));
  } catch (o) {
    if (W(o)) return Y();
    if (!e?.silent)
      (logError(dt(ge(o), "bg roster.json read/parse failed")),
        logEvent("tengu_bg_roster_parse_failed", {
          orphaned: -1,
          quarantined: 1,
          errCode: Jg(o),
        }),
        await me(void 0));
    return { ...Y(), parseFailed: !0 };
  }
  return qe(r, e, void 0);
}
async function qe(e, t, r) {
  let o;
  try {
    o = RosterSchema().safeParse(e);
  } catch (d) {
    if (!t?.silent)
      (logError(d),
        logEvent("tengu_bg_roster_parse_failed", {
          orphaned: Je(e),
          quarantined: 1,
          errCode: Jg(d),
        }),
        await me(r));
    return { ...Y(), parseFailed: !0 };
  }
  if (o.success) {
    (delete o.data.parseFailed, delete o.data.inspectFailed);
    let d = e,
      g = ["supervisorPid", "updatedAt"].filter((p) => !Number.isFinite(d[p]));
    if (g.length > 0 && !t?.silent)
      (logForDebugging(
        `[daemon] roster.json stamp field(s) healed on read: ${g.join(", ")}`,
        { level: "warn" },
      ),
        logEvent("tengu_bg_roster_parse_failed", {
          orphaned: 0,
          quarantined: 0,
          issuePath: fromEnumArr(g),
          issueCode: S("healed_stamp"),
        }));
    return o.data;
  }
  if (!t?.silent) {
    let d = Je(e),
      g = o.error.issues[0];
    (logError(
      Error(
        `roster.json parse failed at ${Ge(g?.path) || "<root>"} (orphaning ${d} worker(s)): ${g?.message}`,
      ),
    ),
      logEvent("tengu_bg_roster_parse_failed", {
        orphaned: d,
        quarantined: 1,
        issuePath: Ge(g?.path),
        issueCode: fromEnumOpt(g?.code),
      }),
      await me(r));
  }
  return { ...Y(), parseFailed: !0 };
}
async function me(e) {
  if (!e) {
    await rename(getRosterFilePath(), `${getRosterFilePath()}.corrupt.${Date.now()}`).catch((r) => logError(r));
    return;
  }
  let t = await e
    .move(rosterKey(), STORAGE_KEYS.daemon([`roster.json.corrupt.${Date.now()}`]))
    .catch(() => {
      return;
    });
  if (t === void 0 || !t.ok)
    logError(
      new R(
        `roster quarantine v5 move failed: ${t === void 0 ? "threw" : describeStorageError(t.error)}`,
        "roster quarantine v5 move failed",
      ),
    );
}
async function Ot(e) {
  await He(e, { recursive: !0, force: !0 }).catch((t) => logError(t));
}
async function Ue(e, t, r, o) {
  if (!t?.silent)
    (logError(r),
      logEvent("tengu_bg_roster_parse_failed", {
        orphaned: -1,
        quarantined: 1,
        errCode: S(o),
      }),
      await zt(e));
  return { ...Y(), parseFailed: !0 };
}
async function Ke(e, t) {
  let r = await inspectRegularFileForRead(getRosterFilePath());
  if (r.kind === "refused") {
    if (!t?.silent)
      (logError(Error("roster.json is not a regular file \u2014 removing")),
        logEvent("tengu_bg_roster_parse_failed", {
          orphaned: -1,
          quarantined: 1,
          errCode: S("EFTYPE"),
        }),
        await Ot(getRosterFilePath()));
    return { roster: { ...Y(), parseFailed: !0 }, inspectFailed: !1 };
  }
  if (r.kind === "error")
    return Ve(
      t,
      dt(ge(r.error), "bg roster.json read/parse failed"),
      Jg(r.error),
    );
  return Pt(e, t);
}
function Ve(e, t, r) {
  if (!e?.silent)
    (logError(t),
      logEvent("tengu_bg_roster_parse_failed", {
        orphaned: -1,
        quarantined: 0,
        errCode: r,
      }));
  return { roster: { ...Y(), parseFailed: !0 }, inspectFailed: !0 };
}
async function Pt(e, t) {
  let r = await e
    .read([{ key: rosterKey(), offset: 0, length: Te + 1 }])
    .catch(() => {
      return;
    });
  if (r === void 0 || !r.ok) {
    if (r !== void 0 && isReadRefusedError(r.error))
      return {
        roster: await Ue(
          e,
          t,
          new R(
            `bg roster.json v5 read refused: ${r.error.telemetryCode} \u2014 removing`,
            "bg roster.json v5 read refused \u2014 removing",
          ),
          "EV5READ",
        ),
        inspectFailed: !1,
      };
    return Ve(
      t,
      new R(
        `bg roster.json v5 read failed: ${r?.error.code ?? "threw"}`,
        "bg roster.json v5 read failed",
      ),
      S("EV5READ"),
    );
  }
  let o = r.value.items[0];
  if (!o.found) return { roster: Y(), inspectFailed: !1 };
  if (o.totalBytes > Te)
    return {
      roster: await Ue(
        e,
        t,
        new R(
          `roster.json too large (${o.totalBytes} bytes) \u2014 removing`,
          "roster.json too large \u2014 removing",
        ),
        "E2BIG",
      ),
      inspectFailed: !1,
    };
  let d;
  try {
    d = jsonParse(Buffer.from(o.value).toString("utf8"));
  } catch (g) {
    if (!t?.silent)
      (logError(dt(ge(g), "bg roster.json read/parse failed")),
        logEvent("tengu_bg_roster_parse_failed", {
          orphaned: -1,
          quarantined: 1,
          errCode: Jg(g),
        }),
        await me(e));
    return { roster: { ...Y(), parseFailed: !0 }, inspectFailed: !1 };
  }
  return { roster: await qe(d, t, e), inspectFailed: !1 };
}
async function zt(e) {
  let t = await e.delete(rosterKey()).catch(() => {
    return;
  });
  if (t === void 0 || !t.ok)
    logError(
      new R(
        `roster quarantine v5 delete failed: ${t?.error.code ?? "threw"}`,
        "roster quarantine v5 delete failed",
      ),
    );
}
function Ge(e) {
  return fromSanitizer_SANITIZER_OUTPUT_ONLY(
    (e ?? [])
      .map((t) => (typeof t === "string" && !It.has(t) ? "*" : String(t)))
      .join("."),
  );
}
function bgShort(e) {
  return SHORT_RE.test(e) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(e) : S("invalid");
}
function Je(e) {
  let t = e !== null && typeof e === "object" ? e.workers : void 0;
  return t !== null && typeof t === "object" && !Array.isArray(t)
    ? Object.keys(t).length
    : 0;
}
async function Tt(e, t) {
  let { parseFailed: r, inspectFailed: o, ...d } = e;
  if (t) {
    let p = await t.write(rosterKey(), jsonStringify(d, null, 2), { mode: 384 });
    if (!p.ok) {
      let y = p.error,
        w = "telemetryCode" in y ? y.telemetryCode : void 0;
      if (w !== void 0 && WW.has(w)) {
        logForDebugging(`[daemon] roster write failed: ${w}`, { level: "error" });
        return;
      }
      throw new R(
        `roster v5 write failed: ${y.code}`,
        "roster v5 write failed",
      );
    }
    return;
  }
  let g = getRosterFilePath();
  (await At(xt(g), { recursive: !0, mode: 448 }).catch(() => {}),
    await writeFileAtomic(g, jsonStringify(d, null, 2), 384).catch((p) => {
      let y = A(p);
      if (y && WW.has(y)) {
        logForDebugging(`[daemon] roster write failed: ${y}`, { level: "error" });
        return;
      }
      throw p;
    }));
}
var Ct = createKeyedSerialQueue();
function updateRoster(e, t) {
  return Ct.run("roster", async () => {
    let r = await Ft(t),
      o = e(r) ?? r;
    ((o.supervisorPid = process.pid),
      (o.updatedAt = Date.now()),
      await Tt(o, t));
  });
}
async function Ft(e) {
  if (!e) return readRoster();
  let t = await Ke(e);
  if (t.inspectFailed)
    throw new R(
      "bg roster.json update skipped: the file could not be inspected",
      "bg roster.json update skipped: the file could not be inspected",
    );
  return t.roster;
}
import {
  lstat as ne,
  mkdir as Fe,
  readdir,
  readFile as be,
  rm as ue,
  stat as zr,
} from "fs/promises";
import {
  basename,
  dirname as Mt,
  isAbsolute as rt,
  join as J,
  relative,
} from "path";
function Xe(e) {
  if (e === void 0 || !e.kinds.includes("session_cron")) return !1;
  let t = e.wake;
  if (t === void 0) return !0;
  return t.fires >= 1 && t.keepalive !== !0;
}
function getBudgetProgressBucket(e) {
  if (!e || e.target <= 0) return -1;
  return Math.floor((20 * e.spent) / e.target);
}
function getFanItemsFingerprint(e) {
  if (!e || e.length === 0) return "";
  return e
    .map((t) => {
      let r = `${t.id ?? t.label}:${t.doneAt ?? "-"}:${t.failed ? "x" : ""}`;
      return t.kind === "todo" ? `${r}:${t.startedAt ?? "-"}` : r;
    })
    .join("|");
}
function getInFlightCounters() {
  let {
    tasks: e,
    queued: t,
    kinds: r,
    drainableMonitors: o,
    wake: d,
  } = getBgJobRuntimeState().inFlightSnapshot;
  return {
    tasks: e,
    queued: t,
    kinds: r,
    ...(o !== void 0 && { drainableMonitors: o }),
    ...(d !== void 0 && { wake: d }),
  };
}
function publishInFlightSnapshot(e) {
  getBgJobRuntimeState().publishInFlightSnapshot(e);
}
function getInFlightSnapshot() {
  return { ...getBgJobRuntimeState().inFlightSnapshot };
}
function subscribeInFlightSnapshot(e) {
  return getBgJobRuntimeState().inFlightSnapshotChanged.subscribe(e);
}
async function getProcessLiveness(e, t) {
  if (!isProcessRunning(e)) return "dead_pid";
  if (!(await isSameProcessAsync(e, t))) return "procstart_mismatch";
  if (await isExitedProcessAsync(e)) return "zombie";
  return "live";
}
async function isProcessConfirmedLive(e, t) {
  return (await getProcessLiveness(e, t)) === "live";
}
var Bt = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;
function isCarriableCliToken(e) {
  return !Bt.test(e) && !e.includes("\x00");
}
function getCarriableModelArg() {
  let e = Ec();
  if (e === void 0 || getAPIProvider() === "mantle") return;
  if (e === null) return "default";
  if (!e) return;
  if (isModelRetiredOrRemapped(parseUserSpecifiedModel(e))) return;
  if (vz()?.fallbackModel === e) return;
  if (!isCarriableCliToken(e)) return;
  return e;
}
function isRestrictedModeEnabled() {
  return _B().includes("--restricted");
}
function buildCarriableSessionFlags(e, t) {
  let r = Ye(e.additionalWorkingDirectories),
    o = [],
    d = !1;
  for (let w of _B())
    if (d) d = !1;
    else if (w === "--add-dir") d = !0;
    else o.push(w);
  let g = getCarriableEffortLevel(t),
    p = getCarriableModelArg(),
    y =
      e.isBypassPermissionsModeAvailable &&
      !o.includes("--allow-dangerously-skip-permissions");
  return [
    ...o,
    ...(y ? ["--allow-dangerously-skip-permissions"] : []),
    ...r.flatMap((w) => ["--add-dir", w]),
    ...(p !== void 0 ? ["--model", p] : []),
    ...(g !== void 0 ? ["--effort", g] : []),
    "--permission-mode",
    e.mode,
  ];
}
function isCarriableToolRule(e) {
  let t = splitToolRuleList([e]);
  return t.length === 1 && t[0] === e && isCarriableCliToken(e);
}
function collectUncarriableLaunchReasons(e, t) {
  return [
    ...(t ? [`launch flags: ${FORK_RESTRICTED_LAUNCH_FLAGS_DESCRIPTION}`] : []),
    ...((e.alwaysDenyRules.session ?? []).length > 0 ||
    (e.alwaysAskRules.session ?? []).length > 0
      ? ["permission rules set for this session only"]
      : []),
    ...((e.alwaysAskRules.cliArg ?? []).length > 0
      ? ["ask-before-running rules with no command-line form"]
      : []),
    ...([
      ...(e.alwaysAllowRules.cliArg ?? []),
      ...(e.alwaysDenyRules.cliArg ?? []),
    ].some((r) => !isCarriableToolRule(r))
      ? ["permission rules a command line cannot carry intact"]
      : []),
    ...(Ye(e.additionalWorkingDirectories).some((r) => !isCarriableCliToken(r))
      ? ["added directories a command line cannot carry intact"]
      : []),
  ];
}
function buildCarriableRuleFlags(e, t) {
  return [
    ...(e.alwaysAllowRules.cliArg ?? []).flatMap((r) => ["--allowed-tools", r]),
    ...(e.alwaysDenyRules.cliArg ?? []).flatMap((r) => [
      "--disallowed-tools",
      r,
    ]),
    ...buildCarriableFlagPair("--agent", t.agent),
    ...buildCarriableFlagPair("--agents", t.agents),
    ...buildCarriableFlagPair("--append-system-prompt", t.appendSystemPrompt),
    ...buildCarriableFlagPair("--system-prompt-snapshot", formatBooleanFlagValue(t.systemPromptSnapshot)),
  ];
}
function buildCarriableFlagPair(e, t) {
  if (!t) return [];
  return isCarriableCliToken(t) ? [e, t] : [`${e}=${t}`];
}
function formatBooleanFlagValue(e) {
  return e === void 0 ? void 0 : e ? "on" : "off";
}
function Ye(e) {
  return Array.from(e.values())
    .filter((t) => t.source === "cliArg" || t.source === "session")
    .filter((t) => !Xo(t.path))
    .map((t) => t.path);
}
var UNGROUPED = "(ungrouped)",
  EARLIER = "(earlier)",
  Nt = 64,
  Dt = new Set(["pinned", "ungrouped", UNGROUPED, "past", EARLIER]);
function isReservedGroupName(e) {
  return Dt.has(e.toLowerCase());
}
function sanitizeGroupName(e) {
  return normalizeComparableText(e).slice(0, Nt);
}
function Ee(e) {
  if (e === void 0) return;
  let t = sanitizeGroupName(e);
  return t && !isReservedGroupName(t) ? t : void 0;
}
class Ze {
  #e = new Map();
  #t = new Set();
  #n = new Set();
  #r = new Set();
  #o = new Set();
  peek(e) {
    return this.#e.get(e);
  }
  invalidate(e) {
    this.#e.delete(e);
  }
  noteAbsent(e) {
    (this.#e.delete(e), this.#t.delete(e));
  }
  noteRejected(e, t) {
    this.#e.set(e, { mtimeKey: t, state: null });
  }
  noteParsed(e, t, r) {
    if (this.#e.size > 1000) this.#e.clear();
    (this.#e.set(e, { mtimeKey: t, state: r }), this.#t.delete(e));
  }
  noteHit(e) {
    this.#t.delete(e);
  }
  shouldReportTransient(e) {
    if (this.#t.has(e)) return !1;
    return (this.#t.add(e), !0);
  }
  shouldReportRecovered(e) {
    if (this.#n.has(e)) return !1;
    return (this.#n.add(e), !0);
  }
  noteCleanRead(e) {
    this.#n.delete(e);
  }
  shouldReportPruned(e) {
    if (this.#r.has(e)) return !1;
    return (this.#r.add(e), !0);
  }
  notePruneCandidateLive(e) {
    this.#r.delete(e);
  }
  shouldLogSidecarFallback(e) {
    if (this.#o.has(e)) return !1;
    return (this.#o.add(e), !0);
  }
}
var Qe = new j(() => new Ze());
class et {
  drafts = new Map();
  pins = new Map();
}
var jobDraftStore = new j(() => new et());
async function readJobDraftText(e, t, { cap: r, screens: o, screenKey: d, heal: g }) {
  if (o.get(d) !== "ok") {
    let w = await e.statMeta(t);
    if (!w.ok) {
      if (w.error.code !== "NotFound") (o.set(d, "refused"), await g?.());
      return null;
    }
    if (w.value.size > r) return (o.set(d, "refused"), null);
    o.set(d, "ok");
  }
  let p = await e.readText([{ key: t, offset: 0, length: r + 1 }]);
  if (!p.ok) return (o.delete(d), await g?.(), null);
  let y = p.value.items[0];
  if (!y.found) return null;
  if (y.totalBytes > r) return (o.set(d, "refused"), null);
  return y.value;
}
var he = () => s().transform(Fb),
  ot = /^[a-f0-9]{8}$/,
  Ut = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;
function de(e, t) {
  return (r) => {
    if (t(r)) return r;
    logForDebugging(`[jobs] dropped malformed ${e} from persisted job state`, {
      level: "warn",
    });
    return;
  };
}
var Ae = createLazyValue(() =>
    c({
      state: s(),
      detail: s(),
      tempo: X(["active", "idle", "blocked"])
        .optional()
        .catch(void 0),
      inFlight: c({
        tasks: T(),
        queued: T(),
        kinds: v(s()),
        drainableMonitors: T().int().nonnegative().optional(),
        wake: c({
          at: T().optional(),
          reason: s().optional(),
          fires: T().int().nonnegative(),
          keepalive: k(!0).optional(),
        })
          .optional()
          .catch(void 0),
      }).optional(),
      selfWake: O()
        .optional()
        .catch(void 0),
      fan: v(
        c({
          id: s().optional(),
          kind: X(["agent", "workflow", "shell", "monitor", "mcp", "todo"])
            .optional()
            .catch(void 0),
          label: s(),
          startedAt: T().optional(),
          doneAt: T().optional(),
          failed: O().optional(),
          group: s().optional(),
        }),
      ).optional(),
      budget: c({ spent: T(), target: T() }).optional(),
      tokens: T().optional(),
      needs_you: O().optional(),
      needs: s().optional(),
      block: c({
        questions: v(
          c({ question: s(), options: v(c({ label: s(), description: s() })) }),
        ),
      }).optional(),
      suggestedReply: s().optional(),
      needsOverlay: s().optional(),
      output: fe(s(), s()).nullable().default(null),
      structuredResult: fe(s(), se()).optional(),
      children: v(
        c({
          id: s(),
          href: s(),
          kind: X(["pr", "frame"])
            .optional()
            .catch(void 0),
          title: s()
            .optional()
            .catch(void 0),
        }),
      )
        .nullable()
        .default(null),
      linkScanOffset: T().default(0),
      linkScanPath: he()
        .transform(
          de(
            "linkScanPath",
            (e) => rt(e) && e.endsWith(".jsonl") && Xn(basename(e, ".jsonl")) !== null,
          ),
        )
        .optional(),
      template: s(),
      routine: s().optional(),
      respawnFlags: v(s())
        .default([])
        .transform((e) => normalizeCliArgPaths(sanitizeRespawnFlags(e))),
      bgIsolation: X(["none", "worktree"])
        .optional()
        .catch(void 0),
      providerEnv: fe(s(), s())
        .transform((e) => {
          let t = Le(e);
          return t && Si(t, Fb);
        })
        .optional(),
      sessionPermissionRules: c({ allow: v(s()), deny: v(s()) }).optional(),
      memoryToggledOff: O().optional(),
      forkSourceAlive: O().optional(),
      forkBoundaryAt: s().optional(),
      forkSessionId: s().optional(),
      forkParentSessionId: s().optional(),
      interactiveLineage: O().optional(),
      intent: s(),
      displayIntent: s().optional(),
      initialPrompt: s().optional(),
      queuedPrompt: s().optional(),
      name: s().optional(),
      nameSource: X(["user", "auto", "collision"])
        .optional()
        .catch(void 0),
      color: s().optional(),
      sessionId: he(),
      resumeSessionId: s()
        .transform(de("resumeSessionId", (e) => Xn(e) !== null))
        .optional(),
      daemonShort: s()
        .transform(de("daemonShort", (e) => ot.test(e)))
        .optional(),
      cliVersion: s().optional(),
      cwd: he(),
      createdAt: s(),
      updatedAt: s(),
      firstTerminalAt: s().nullable().default(null),
      lastTerminalAt: s().optional(),
      worktreePath: he().optional(),
      worktreeBranch: s().optional(),
      worktreeHookBased: O().optional(),
      originCwd: he().optional(),
      bridgeSessionId: s()
        .transform(de("bridgeSessionId", (e) => Ut.test(e)))
        .optional(),
      bridgeOwnerAccountUuid: s().optional(),
      bridgeOwnerOrganizationUuid: s().optional(),
      bridgeNoHistoryBackfill: O().optional(),
      bridgeOutboundOnly: O().optional(),
      bridgeSessionGroupingId: s()
        .transform(
          de("bridgeSessionGroupingId", (e) =>
            /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e),
          ),
        )
        .optional(),
      bridgeSessionSeq: T()
        .transform(de("bridgeSessionSeq", (e) => Number.isInteger(e) && e >= 0))
        .optional(),
      backend: X(["daemon", "peer", "remote"])
        .catch("daemon")
        .default("daemon")
        .transform((e) => {
          if (e === "daemon") return e;
          return (
            logForDebugging(
              `[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`,
              { level: "warn" },
            ),
            "daemon"
          );
        }),
      sock: s().optional(),
      pid: T().optional(),
      sortOrder: T().optional(),
      stateSortOrder: T().optional(),
      group: s().optional(),
      pinned: O().optional(),
      reapedMidWorkAt: s().optional(),
      reapedUnsettledAt: s().optional(),
      deadEpochReapedAt: s().optional(),
      sessionIdTaken: O()
        .optional()
        .catch(void 0),
    }).transform(({ needs_you: e, ...t }) => {
      let r =
          (t.bridgeOwnerAccountUuid !== void 0 &&
            !isUuidShaped(t.bridgeOwnerAccountUuid)) ||
          (t.bridgeOwnerOrganizationUuid !== void 0 &&
            !isUuidShaped(t.bridgeOwnerOrganizationUuid)),
        o = t.tempo ?? (e ? "blocked" : "idle");
      return {
        ...t,
        ...(r && {
          bridgeOwnerAccountUuid: void 0,
          bridgeOwnerOrganizationUuid: void 0,
        }),
        tempo: o,
        ...(t.lastTerminalAt === void 0 &&
          terminalOutcome(t.state) !== null &&
          o !== "active" && {
            lastTerminalAt: t.firstTerminalAt || t.updatedAt,
          }),
      };
    }),
  ),
  ee = "state.json",
  V = 8388608;
function getJobsDir() {
  return Xvn();
}
function getJobDir(e) {
  return J(getJobsDir(), e);
}
function getOwnJobShortId() {
  let e = a.CLAUDE_JOB_DIR;
  if (e) return basename(e);
  let t = getBgTakeover();
  if (t) return basename(t.jobDir);
  return K().slice(0, 8);
}
function st(e, t) {
  return isValidPathSegment(e) ? STORAGE_KEYS.job(e, t) : void 0;
}
function jobKeyFor(e, t) {
  return getJobStorageKey(e, t);
}
function jobStateKey(e) {
  return STORAGE_KEYS.job(e, [ee]);
}
function watchJobDirOnce(e, t) {
  let r = J(getJobDir(e), ee),
    o = !1,
    d = Number.NaN;
  function g(_) {
    if (o) return;
    if (Number.isNaN(d)) {
      d = _;
      return;
    }
    if (_ === d) return;
    (f(), t());
  }
  function p() {
    ne(r).then(
      (_) => g(_.mtimeMs),
      () => g(-1),
    );
  }
  p();
  let y = setInterval(p, 200),
    w = setTimeout(f, 1e4);
  function f() {
    if (o) return;
    ((o = !0), clearInterval(y), clearTimeout(w));
  }
  return f;
}
function isOwnStateWriteInFlight() {
  return getBgJobRuntimeState().ownStateWriteDepth > 0;
}
async function writeStateAtomic(e, t, r) {
  let o = t.inFlight?.kinds.includes("session_cron") === !0,
    d =
      o && !t.selfWake && Xe(t.inFlight)
        ? { ...t, selfWake: !0 }
        : !o && t.selfWake && isSettled(t)
          ? { ...t, selfWake: void 0 }
          : t,
    p = isSettled(d)
      ? d.lastTerminalAt
        ? d
        : { ...d, lastTerminalAt: d.updatedAt }
      : d.lastTerminalAt !== void 0
        ? { ...d, lastTerminalAt: void 0 }
        : d,
    { pinned: y, sortOrder: w, stateSortOrder: f, group: _, ...C } = p,
    F = r ? jobKeyFor(e, [ee]) : void 0,
    E = getBgJobRuntimeState();
  E.ownStateWriteDepth++;
  try {
    if (r && F) {
      let I = await r.write(F, jsonStringify(C, null, 2), {
        mode: 384,
        parent: "mustExist",
      });
      if (!I.ok) {
        let P = getTelemetryCode(I.error);
        throw Object.assign(
          new R(
            `[jobs] v5 state write failed: ${describeStorageError(I.error)}`,
            "[jobs] v5 state write failed",
          ),
          P !== void 0 ? { code: P } : {},
        );
      }
    } else await writeFileAtomic(J(e, ee), jsonStringify(C, null, 2), 384);
  } finally {
    (E.ownStateWriteDepth--, invalidateJobStateCache(e));
  }
}
function logJobWriteError(e) {
  let t = A(e);
  if (t && (WW.has(t) || t === "ENOENT")) {
    logForDebugging(`[jobs] state write failed (${t}): ${l(e)}`, { level: "error" });
    return;
  }
  logError(e);
}
function resolveBridgeHandoffIdentity(e, t) {
  let r = t !== void 0 && t.id === e?.bridgeSessionId;
  return {
    ownerAccountUuid: r ? t.ownerAccountUuid : void 0,
    ownerOrganizationUuid: r ? t.ownerOrganizationUuid : void 0,
    noHistoryBackfill:
      e?.noHistoryBackfill || (t !== void 0 && !r ? !0 : t?.noHistoryBackfill),
  };
}
function buildBridgeReattachEnv(e, t, r, o, d) {
  if (!e) return;
  let g = { CLAUDE_BRIDGE_REATTACH_SESSION: e };
  if (t !== void 0 && t > 0) g.CLAUDE_BRIDGE_REATTACH_SEQ = String(t);
  if (o) g.CLAUDE_BRIDGE_REATTACH_GROUPING = o;
  if (d?.ownerAccountUuid)
    g.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = d.ownerAccountUuid;
  if (d?.ownerOrganizationUuid)
    g.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = d.ownerOrganizationUuid;
  if (d?.noHistoryBackfill) g.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
  if (r !== !1) g.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return g;
}
function N() {
  return Qe.of(B().host);
}
function _e(e, t) {
  return t?.onReadFailure === "null" ? null : (e?.state ?? null);
}
var Gt = [15, 45],
  Jt = new Set(["ELOOP", "ENXIO", "EISDIR"]);
function ve(e) {
  if (e.code !== "Failed" || e.telemetryCode === void 0) return;
  if (e.telemetryCode === "EFBIG") return "oversize";
  return Jt.has(e.telemetryCode) ? "non-regular" : void 0;
}
function at(e) {
  return (
    e.code === "Failed" &&
    e.key !== void 0 &&
    e.key.namespace === "job" &&
    e.key.relPath[0] !== ee
  );
}
var $t = new Set(["invariant", "permission", "environment"]);
function Ht(e) {
  if (e.code === "Unavailable") return !0;
  return (
    e.code === "Failed" && !$t.has(e.failureClass) && ve(e) === void 0 && !at(e)
  );
}
async function Wt(e, t) {
  let r = await t(),
    o = 1;
  for (let d of Gt) {
    if (r.ok || !Ht(r.error)) break;
    (await sleep(d), (r = await t()), o++);
  }
  if (r.ok) {
    if (o === 1) N().noteCleanRead(e);
    else if (N().shouldReportRecovered(e))
      logEvent("tengu_bg_state_read_recovered", { attempts: o });
  }
  return r;
}
function tt(e, t, r) {
  let o = N().peek(e);
  if (!(o?.mtimeKey.startsWith("rejected:") && o.state === null))
    logForDebugging(`[jobs] skipping ${basename(e)}: state.json is ${r}`, { level: "warn" });
  return (N().noteRejected(e, `rejected:${t}`), null);
}
function invalidateJobStateCache(e) {
  N().invalidate(e);
}
async function qt(e, t, r) {
  let o = basename(t),
    d = N().peek(t);
  if (d === void 0 || d.mtimeKey.startsWith("rejected:")) {
    let x = await e.statMeta(jobStateKey(o));
    if (!x.ok) {
      if (x.error.code === "NotFound") return (N().noteAbsent(t), null);
      let L = ve(x.error);
      if (L !== void 0)
        return tt(t, L, L === "oversize" ? "too large" : "not a regular file");
    } else if (x.value.size > V) {
      let L = `rejected:${x.value.mtimeMs}:${x.value.size}`;
      if (N().peek(t)?.mtimeKey !== L)
        (logForDebugging(
          `[jobs] skipping ${basename(t)}: state.json is too large (${x.value.size} bytes)`,
          { level: "warn" },
        ),
          N().noteRejected(t, L));
      return null;
    }
  }
  let g = jobStateKey(o),
    y = await Wt(t, () =>
      e.read([
        g,
        STORAGE_KEYS.job(o, ["order"]),
        STORAGE_KEYS.job(o, ["stateOrder"]),
        STORAGE_KEYS.job(o, ["group"]),
      ]),
    );
  if (!y.ok && at(y.error)) {
    if (N().shouldLogSidecarFallback(t))
      logForDebugging(
        `[jobs] ${basename(t)}: a sidecar could not be read as a regular file; using state.json alone`,
      );
    let x = await e.read([g]);
    y = x.ok
      ? {
          ok: !0,
          value: {
            items: [
              x.value.items[0],
              { found: !1 },
              { found: !1 },
              { found: !1 },
            ],
          },
        }
      : x;
  }
  let w = N().peek(t);
  if (!y.ok) {
    let x = ve(y.error);
    if (x !== void 0)
      return tt(t, x, x === "oversize" ? "too large" : "not a regular file");
    if (
      (logForDebugging(`[jobs] ${basename(t)}: v5 state read failed \u2014 ${y.error.code}`, {
        level: "warn",
      }),
      N().shouldReportTransient(t))
    )
      logEvent("tengu_bg_state_read_transient", {
        errno: fromEnum(y.error.code),
        had_cache: w !== void 0,
      });
    return _e(w, r);
  }
  let [f, _, C, F] = y.value.items;
  if (!f.found) return (N().noteAbsent(t), null);
  if (f.totalBytes > V) {
    let x = `rejected:${f.mtimeMs}:${f.totalBytes}`;
    if (w?.mtimeKey === x) return null;
    return (
      logForDebugging(
        `[jobs] skipping ${basename(t)}: state.json is too large (${f.totalBytes} bytes)`,
        { level: "warn" },
      ),
      N().noteRejected(t, x),
      null
    );
  }
  let E = (x) =>
      Buffer.from(
        x.value.buffer,
        x.value.byteOffset,
        x.value.byteLength,
      ).toString("utf-8"),
    I = (x) => (x.found && x.totalBytes <= V ? E(x) : null),
    P = (x) => (x.found && x.totalBytes <= V ? x.version : 0),
    D = `v5:${f.version}:${P(_)}:${P(C)}:${P(F)}`;
  if (w?.mtimeKey === D) return (N().noteHit(t), w.state);
  return Kt(t, D, E(f), I(_), I(C), I(F), w, r);
}
function Kt(e, t, r, o, d, g, p, y) {
  try {
    let w = jsonParse(r),
      f = Ae().safeParse(w);
    if (!f.success)
      return (
        logForDebugging(
          `[jobs] skipping ${basename(e)}: state.json schema validation failed \u2014 ${f.error.message}`,
          { level: "warn" },
        ),
        N().noteRejected(e, t),
        null
      );
    let _ = o !== null ? Number(o) : void 0,
      C = d !== null ? Number(d) : void 0,
      F = Ae().in.shape,
      E =
        w !== null && typeof w === "object"
          ? Object.entries(w).filter(([P]) => !Object.hasOwn(F, P))
          : [],
      I = { ...Object.fromEntries(E), ...f.data };
    if (Number.isFinite(_)) I = { ...I, sortOrder: _ };
    if (Number.isFinite(C)) I = { ...I, stateSortOrder: C };
    if (g !== null && g.trim()) I = { ...I, group: g.trim() };
    if (I.group !== void 0) I = { ...I, group: Ee(I.group) };
    return (N().noteParsed(e, t, I), I);
  } catch (w) {
    if (
      (logForDebugging(
        `[jobs] ${basename(e)}: state.json read/parse failed \u2014 ${w instanceof Error ? w.message : String(w)}`,
        { level: "warn" },
      ),
      N().shouldReportTransient(e))
    )
      logEvent("tengu_bg_state_read_transient", {
        errno: Jr(w) ?? S("unknown"),
        had_cache: p !== void 0,
      });
    return _e(p, y);
  }
}
async function readJobStateFreshOrNull(e, t) {
  return lt(e, t, { onReadFailure: "null" });
}
async function readJobState(e, t) {
  return lt(e, t, void 0);
}
async function lt(e, t, r) {
  if (t !== void 0 && jobKeyFor(e, [ee]) !== void 0) return qt(t, e, r);
  let o = J(e, ee),
    d = J(e, "order"),
    g = J(e, "stateOrder"),
    p = J(e, "group"),
    y,
    w;
  try {
    let [_, C, F, E] = await Promise.all([
      ne(o),
      ne(d).catch(() => null),
      ne(g).catch(() => null),
      ne(p).catch(() => null),
    ]);
    if (!_.isFile() || _.size > V) {
      let P = `rejected:${_.mtimeMs}:${_.size}`;
      if (N().peek(e)?.mtimeKey === P) return null;
      return (
        logForDebugging(
          `[jobs] skipping ${basename(e)}: state.json is ${_.isFile() ? `too large (${_.size} bytes)` : "not a regular file"}`,
          { level: "warn" },
        ),
        N().noteRejected(e, P),
        null
      );
    }
    let I = (P) => P !== null && P.isFile() && P.size <= V;
    ((w = { order: I(C), stateOrder: I(F), group: I(E) }),
      (y = `${_.mtimeMs}:${w.order ? C.mtimeMs : 0}:${w.stateOrder ? F.mtimeMs : 0}:${w.group ? E.mtimeMs : 0}`));
  } catch (_) {
    if (W(_)) return (N().noteAbsent(e), null);
    logForDebugging(
      `[jobs] ${basename(e)}: state.json stat failed \u2014 ${_ instanceof Error ? _.message : String(_)}`,
      { level: "warn" },
    );
    let C = N().peek(e);
    if (N().shouldReportTransient(e))
      logEvent("tengu_bg_state_read_transient", {
        errno: Jr(_) ?? S("unknown"),
        had_cache: C !== void 0,
      });
    return _e(C, r);
  }
  let f = N().peek(e);
  if (f?.mtimeKey === y) return (N().noteHit(e), f.state);
  try {
    let [_, C, F, E] = await Promise.all([
        be(o, "utf-8"),
        w.order ? be(d, "utf-8").catch(() => null) : Promise.resolve(null),
        w.stateOrder ? be(g, "utf-8").catch(() => null) : Promise.resolve(null),
        w.group ? be(p, "utf-8").catch(() => null) : Promise.resolve(null),
      ]),
      I = jsonParse(_),
      P = Ae().safeParse(I);
    if (!P.success)
      return (
        logForDebugging(
          `[jobs] skipping ${basename(e)}: state.json schema validation failed \u2014 ${P.error.message}`,
          { level: "warn" },
        ),
        N().noteRejected(e, y),
        null
      );
    let D = C !== null ? Number(C) : void 0,
      x = F !== null ? Number(F) : void 0,
      L = Ae().in.shape,
      U =
        I !== null && typeof I === "object"
          ? Object.entries(I).filter(([re]) => !Object.hasOwn(L, re))
          : [],
      H = { ...Object.fromEntries(U), ...P.data };
    if (Number.isFinite(D)) H = { ...H, sortOrder: D };
    if (Number.isFinite(x)) H = { ...H, stateSortOrder: x };
    if (E !== null && E.trim()) H = { ...H, group: E.trim() };
    if (H.group !== void 0) H = { ...H, group: Ee(H.group) };
    return (N().noteParsed(e, y, H), H);
  } catch (_) {
    if (W(_)) return (N().noteAbsent(e), null);
    if (
      (logForDebugging(
        `[jobs] ${basename(e)}: state.json read/parse failed \u2014 ${_ instanceof Error ? _.message : String(_)}`,
        { level: "warn" },
      ),
      N().shouldReportTransient(e))
    )
      logEvent("tengu_bg_state_read_transient", {
        errno: Jr(_) ?? S("unknown"),
        had_cache: f !== void 0,
      });
    return _e(f, r);
  }
}
async function readJobStateAfterSettle(e, t) {
  invalidateJobStateCache(e);
  let r = await readJobState(e, t).catch(() => null);
  if (
    r !== null &&
    r.state !== "done" &&
    r.state !== "stopped" &&
    r.state !== "blocked" &&
    r.state !== "failed"
  )
    (await sleep(50), invalidateJobStateCache(e), (r = (await readJobState(e, t).catch(() => null)) ?? r));
  return r;
}
function Q() {
  return J(getJobsDir(), "pins.json");
}
var Vt = 5000;
async function readPinnedJobIds(e) {
  if (e) return Xt(e);
  try {
    let t = await ne(Q());
    if (!t.isFile() || t.size > V) {
      if (!t.isFile()) await ke();
      return new Set();
    }
    return Be(await be(Q(), "utf-8"));
  } catch (t) {
    if (W(t))
      return (
        await writeFileAtomic(Q(), jsonStringify([])).catch((r) => {
          if (!W(r)) logJobWriteError(r);
        }),
        new Set()
      );
    return new Set();
  }
}
async function Xt(e) {
  let t = await readJobDraftText(e, STORAGE_KEYS.jobPins(), {
    cap: V,
    screens: ut(),
    screenKey: Q(),
    heal: ke,
  });
  return Be(t ?? void 0);
}
function ut() {
  return jobDraftStore.of(B().host).pins;
}
function Be(e) {
  if (e === void 0 || e.length > V) return new Set();
  let t;
  try {
    t = jsonParse(e);
  } catch {
    return new Set();
  }
  if (!Array.isArray(t)) return new Set();
  return new Set(t.filter((r) => typeof r === "string"));
}
async function ke(e) {
  let t = await ne(Q()).catch(() => {
    return;
  });
  if (t === void 0 || (t.isFile() && !(e?.evenRegular && t.size > V)))
    return !1;
  return (await ue(Q(), { recursive: !0, force: !0 }).catch(() => {}), !0);
}
async function syncJobName(e, t, r, o, d) {
  let g = getJobDir(e),
    p = await readJobState(g, o);
  if (!p) return !1;
  if (p.name === t) return !0;
  invalidateJobStateCache(g);
  let y = (await readJobState(g, o)) ?? p;
  if (y.name === t || (r === "auto" && y.name)) return !0;
  if (!ct(y, d)) return !1;
  return writeStateAtomic(
    g,
    { ...y, name: t, nameSource: r, updatedAt: new Date().toISOString() },
    o,
  ).then(
    () => !0,
    (w) => {
      if (!W(w)) logJobWriteError(w);
      return !1;
    },
  );
}
async function syncJobColor(e, t, r) {
  let o = getJobDir(e),
    d = await readJobState(o, r);
  if (!d) return !1;
  if (d.color === t) return !0;
  invalidateJobStateCache(o);
  let g = (await readJobState(o, r)) ?? d;
  if (g.color === t) return !0;
  return writeStateAtomic(o, { ...g, color: t, updatedAt: new Date().toISOString() }, r).then(
    () => !0,
    (p) => {
      if (!W(p)) logJobWriteError(p);
      return !1;
    },
  );
}
function getBgRelocatedCwd() {
  return getBgJobRuntimeState().relocatedCwd;
}
async function relocateBgSessionCwd(e, t) {
  let r = a.CLAUDE_JOB_DIR;
  if (!r || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  ((getBgJobRuntimeState().relocatedCwd = e), invalidateJobStateCache(r));
  let o = await readJobState(r, t),
    d = o?.worktreePath ? o.originCwd : e;
  if (!o || (o.cwd === e && o.originCwd === d)) return;
  invalidateJobStateCache(r);
  let g = (await readJobState(r, t)) ?? o;
  await writeStateAtomic(
    r,
    {
      ...g,
      cwd: e,
      originCwd: g.worktreePath ? g.originCwd : e,
      updatedAt: new Date().toISOString(),
    },
    t,
  ).catch((p) => {
    if (!W(p)) logJobWriteError(p);
  });
}
async function syncJobResumeSessionId(e, t, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  invalidateJobStateCache(o);
  let d = await readJobState(o, r);
  if (!d || (d.resumeSessionId === e && d.linkScanPath === t)) return;
  invalidateJobStateCache(o);
  let g = (await readJobState(o, r)) ?? d;
  await writeStateAtomic(
    o,
    {
      ...g,
      resumeSessionId: e,
      linkScanPath: t,
      linkScanOffset: 0,
      updatedAt: new Date().toISOString(),
    },
    r,
  ).catch((p) => {
    if (!W(p)) logJobWriteError(p);
  });
}
async function syncLiveInFlightSnapshot(e, t) {
  let r = a.CLAUDE_JOB_DIR;
  if (!r || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await withOwnJobStateWrite(async () => {
    invalidateJobStateCache(r);
    let o = await readJobState(r, t);
    if (!o?.inFlight || isSettled(o) || o.tempo === "active") return;
    let d = o.inFlight;
    if (
      e.count === d.tasks &&
      (e.drainableMonitors ?? 0) === (d.drainableMonitors ?? 0) &&
      e.kinds.length === d.kinds.length &&
      e.kinds.every((g) => d.kinds.includes(g))
    )
      return;
    await writeStateAtomic(
      r,
      {
        ...o,
        inFlight: {
          tasks: e.count,
          queued: d.queued,
          kinds: [...e.kinds],
          ...(e.drainableMonitors !== void 0 &&
            e.drainableMonitors > 0 && {
              drainableMonitors: e.drainableMonitors,
            }),
          ...(d.wake !== void 0 && { wake: d.wake }),
        },
        updatedAt: new Date().toISOString(),
      },
      t,
    ).catch((g) => {
      if (!W(g)) logJobWriteError(g);
    });
  });
}
function ct(e, t) {
  if (t === void 0 || !e.name) return !0;
  if (e.nameSource === "auto" || e.nameSource === "collision") return !0;
  return t.includes(sanitizeSessionName(e.name));
}
async function syncRespawnFlag(e, t, r, o, d, g, p) {
  let y = a.CLAUDE_JOB_DIR;
  if (!y || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await withOwnJobStateWrite(async () => {
    invalidateJobStateCache(y);
    let w = await readJobState(y, d);
    if (!w?.respawnFlags) return;
    if (p && !p(w.respawnFlags)) return;
    let f = [e, ...t],
      _ = (P) => {
        let D = [];
        for (let x = 0; x < P.length; x++) {
          let L = P[x];
          if (f.some((U) => L === U || L.startsWith(`${U}=`))) {
            if (L.indexOf("=") === -1 && P[x + 1] !== void 0) x++;
            continue;
          }
          D.push(L);
        }
        if (r === null) return D;
        return [...D, ...buildCarriableFlagPair(e, r)];
      },
      C = _(w.respawnFlags);
    if (
      C.length === w.respawnFlags.length &&
      C.every((P, D) => P === w.respawnFlags[D])
    )
      return;
    invalidateJobStateCache(y);
    let F = (await readJobState(y, d)) ?? w,
      E = F.respawnFlags ?? w.respawnFlags;
    if (p && !p(E)) return;
    let I = ct(F, g);
    await writeStateAtomic(
      y,
      {
        ...F,
        ...(I ? o : {}),
        respawnFlags: _(E),
        updatedAt: new Date().toISOString(),
      },
      d,
    ).catch((P) => {
      if (!W(P)) logJobWriteError(P);
    });
  });
}
async function appendRespawnFlag(e, t, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await withOwnJobStateWrite(async () => {
    invalidateJobStateCache(o);
    let d = await readJobState(o, r);
    if (!d?.respawnFlags) return;
    let g = buildCarriableFlagPair(e, t);
    for (let y = 0; y <= d.respawnFlags.length - g.length; y++)
      if (g.every((w, f) => d.respawnFlags[y + f] === w)) return;
    invalidateJobStateCache(o);
    let p = (await readJobState(o, r)) ?? d;
    await writeStateAtomic(
      o,
      {
        ...p,
        respawnFlags: [...(p.respawnFlags ?? []), ...g],
        updatedAt: new Date().toISOString(),
      },
      r,
    ).catch((y) => {
      if (!W(y)) logJobWriteError(y);
    });
  });
}
async function Ne(e, t) {
  await ue(e, { force: !0 });
  let r = await writeNewFileExclusive(e, t);
  try {
    await renameWithRetry(r, e);
  } catch (o) {
    throw (await ue(r, { force: !0 }).catch(() => {}), o);
  }
}
async function De(e, t, r) {
  let o = await e.write(t, r, {
    parent: "mustExist",
    mode: 438 & ~process.umask(),
  });
  if (!o.ok) {
    let d = getTelemetryCode(o.error);
    throw Object.assign(
      new R(
        `[jobs] v5 sidecar write failed: ${describeStorageError(o.error)}`,
        "[jobs] v5 sidecar write failed",
      ),
      d !== void 0 ? { code: d } : {},
    );
  }
}
async function writeSortOrder(e, t, r) {
  let o = isHoverRestEnabled() && r ? jobKeyFor(e, ["order"]) : void 0;
  if (r && o) await De(r, o, String(t));
  else await Ne(J(e, "order"), String(t));
  invalidateJobStateCache(e);
}
async function writeStateSortOrder(e, t, r) {
  let o = isHoverRestEnabled() && r ? jobKeyFor(e, ["stateOrder"]) : void 0;
  if (r && o) await De(r, o, String(t));
  else await Ne(J(e, "stateOrder"), String(t));
  invalidateJobStateCache(e);
}
async function writeJobGroup(e, t, r) {
  let o = J(e, "group"),
    d = Ee(t),
    g = isHoverRestEnabled() && r ? jobKeyFor(e, ["group"]) : void 0;
  if (r && g)
    if (d) await De(r, g, d);
    else {
      let p = await r.delete(g);
      if (!p.ok)
        throw new R(
          `[jobs] v5 sidecar delete failed: ${p.error.code}`,
          "[jobs] v5 sidecar delete failed",
        );
    }
  else if (d) await Ne(o, d);
  else await ue(o, { force: !0 });
  invalidateJobStateCache(e);
}
async function withSortOrderLock(e) {
  let t = J(getJobsDir(), ".order");
  await Fe(getJobsDir(), { recursive: !0 });
  await using r = await Cs(t, {
    realpath: !1,
    stale: 5000,
    retries: { retries: 5, minTimeout: 20 },
    onCompromised: (o) =>
      logForDebugging(
        `jobs/.order lock compromised (likely process suspend or slow fs): ${o}`,
        { level: "error" },
      ),
  });
  return await e();
}
var pt = createKeyedSerialQueue();
function withOwnJobStateWrite(e) {
  return pt.run("own-state.json", e);
}
function writeJobPinned(e, t, r) {
  return pt.run("pins.json", async () => {
    if (isHoverRestEnabled() && r) return Yt(e, t, r);
    let o = Q();
    await Fe(Mt(o), { recursive: !0 });
    await using d = await Cs(o, {
      realpath: !1,
      stale: Vt,
      retries: { retries: 5, minTimeout: 20 },
      onCompromised: (p) =>
        logForDebugging(
          `pins.json lock compromised (likely process suspend or slow fs): ${p}`,
          { level: "error" },
        ),
    });
    let g = await readPinnedJobIds();
    if (t ? g.has(e) : !g.has(e)) return;
    if (t) g.add(e);
    else
      (g.delete(e),
        await ue(J(getJobDir(e), "order")).catch((p) => {
          if (!W(p)) throw p;
        }),
        invalidateJobStateCache(getJobDir(e)));
    await writeFileAtomic(o, jsonStringify([...g], null, 2));
  });
}
async function Yt(e, t, r) {
  let o = (w) => {
      let f = Be(w?.value);
      if (t ? f.has(e) : !f.has(e)) return { skip: !0, result: !1 };
      if (t) f.add(e);
      else f.delete(e);
      return { write: jsonStringify([...f], null, 2), result: !0 };
    },
    d = ut(),
    g = await r.statMeta(STORAGE_KEYS.jobPins());
  if (g.ok && g.value.size > V) (await ke({ evenRegular: !0 }), d.delete(Q()));
  else if (!g.ok && ve(g.error) !== void 0) (await ke(), d.delete(Q()));
  let p = { publishDiscipline: "atomic", mode: 438 & ~process.umask() },
    y = await r.updateText(STORAGE_KEYS.jobPins(), o, p);
  if (!y.ok && (await ke())) y = await r.updateText(STORAGE_KEYS.jobPins(), o, p);
  if (!y.ok)
    throw new R(
      `[jobs] v5 pins update failed: ${y.error.code}`,
      "[jobs] v5 pins update failed",
    );
  if (!t && y.value.result === !0) {
    let w = st(e, ["order"]);
    if (w) {
      let f = await r.delete(w);
      if (!f.ok)
        logForDebugging(
          `[jobs] v5 order sidecar release failed after unpin: ${f.error.code}`,
          { level: "warn" },
        );
    } else
      await ue(J(getJobDir(e), "order")).catch((f) => {
        if (!W(f))
          logForDebugging(`[jobs] order sidecar release failed after unpin: ${l(f)}`, {
            level: "warn",
          });
      });
    invalidateJobStateCache(getJobDir(e));
  }
}
async function listJobs(e, t) {
  if (t) return Qt(t, e);
  let r;
  try {
    r = await readdir(getJobsDir(), { withFileTypes: !0 });
  } catch {
    return [];
  }
  let [o, d] = await Promise.all([
      readPinnedJobIds(),
      Promise.all(
        r
          .filter((p) => p.isDirectory())
          .map(async (p) => {
            let y = await readJobState(J(getJobsDir(), p.name));
            return y ? { id: p.name, state: y } : null;
          }),
      ),
    ]),
    g = d
      .filter((p) => p !== null)
      .map((p) =>
        o.has(p.id) ? { ...p, state: { ...p.state, pinned: !0 } } : p,
      );
  return e ? markCrashed(g, e) : g;
}
async function Zt(e) {
  let t = [],
    r;
  do {
    let o = await e.listEntries(
      { namespace: "job" },
      r === void 0 ? { skipScopeStats: !0 } : { cursor: r, skipScopeStats: !0 },
    );
    if (!o.ok) return { ok: !1, error: o.error };
    for (let d of o.value.items)
      if (
        d.kind === "scope" &&
        d.scope.namespace === "job" &&
        d.scope.jobId !== void 0 &&
        d.scope.relPath === void 0 &&
        isValidPathSegment(d.scope.jobId)
      )
        t.push(d.scope.jobId);
    r = o.value.cursor;
  } while (r !== void 0);
  return { ok: !0, ids: t };
}
async function Qt(e, t) {
  let r = await Zt(e);
  if (!r.ok) return [];
  let o = r.ids,
    [d, g] = await Promise.all([
      readPinnedJobIds(e),
      Promise.all(
        o.map(async (y) => {
          let w = await readJobState(getJobDir(y), e);
          return w ? { id: y, state: w } : null;
        }),
      ),
    ]),
    p = g
      .filter((y) => y !== null)
      .map((y) =>
        d.has(y.id) ? { ...y, state: { ...y.state, pinned: !0 } } : y,
      );
  return t ? markCrashed(p, t) : p;
}
function markCrashed(e, t) {
  let r = Date.now();
  return e.map((o) => {
    if (isSettled(o.state)) return o;
    if (t.has(o.id)) return o;
    if (r - Date.parse(o.state.createdAt) < en) return o;
    return { ...o, state: tn(o.state) };
  });
}
var en = 5000;
function tn(e) {
  if (hasOutstandingAsk(e)) return { ...e, tempo: "blocked", inFlight: void 0 };
  return {
    ...e,
    state: "failed",
    tempo: "idle",
    needs: void 0,
    block: void 0,
    inFlight: void 0,
    detail: e.detail.replace(/; respawning$/, ""),
  };
}
var SEED_DETAIL = "starting\u2026",
  IDLE_NEEDS = "send a prompt to start";
function isOverlayNeeds(e) {
  return e.needs !== void 0 && e.needsOverlay === e.needs;
}
var IDLE_DETAIL = `(idle \u2014 ${IDLE_NEEDS})`,
  PRE_BOOT_STATES = ["starting", "resuming", "adopted", "crashed"],
  ABANDONED_WORKER_MS = 172800000,
  nn = "ended while the background service was off";
function makeInitialState(e) {
  let t = new Date().toISOString();
  return {
    state: "working",
    detail: e.detail !== void 0 ? redactSecretsFromText(e.detail) : SEED_DETAIL,
    tempo: e.tempo ?? "active",
    needs: e.needs,
    inFlight: e.inFlight,
    output: null,
    children: null,
    linkScanOffset: 0,
    linkScanPath: e.linkScanPath,
    template: e.template.name,
    routine: e.routine,
    respawnFlags: e.respawnFlags ?? [],
    bgIsolation: e.bgIsolation,
    providerEnv: e.providerEnv,
    sessionPermissionRules: e.sessionPermissionRules,
    memoryToggledOff: e.memoryToggledOff,
    forkSourceAlive: e.forkSourceAlive,
    forkBoundaryAt: e.forkBoundaryAt,
    forkSessionId: e.forkSessionId,
    forkParentSessionId: e.forkParentSessionId,
    interactiveLineage: e.interactiveLineage,
    intent: e.intent,
    displayIntent: e.displayIntent,
    name: e.name,
    nameSource: e.nameSource,
    color: resolveAgentColorName({
      userOverride: e.color,
      agentDefinitionColor: e.template.color,
    }),
    initialPrompt: e.template.initialPrompt,
    sessionId: e.sessionId,
    resumeSessionId: e.sessionId,
    daemonShort: e.sessionId.slice(0, 8),
    cwd: e.cwd,
    createdAt: t,
    updatedAt: t,
    firstTerminalAt: null,
    worktreePath: e.worktreePath,
    worktreeBranch: e.worktreeBranch,
    worktreeHookBased: e.worktreeHookBased,
    originCwd: e.originCwd,
    backend: "daemon",
  };
}
async function adoptRosterOrphans(e, t, r) {
  if (t.length === 0) return e;
  let o = new Set(e.map((f) => f.id)),
    d = t.filter(
      (f) =>
        ot.test(f.short) && !o.has(f.short) && f.source !== "spare" && !f.dying,
    );
  if (d.length === 0) return e;
  let g = await readRoster({ silent: !0 }, r),
    p = await Promise.all(
      d.map((f) => {
        let _ = g.workers[f.short];
        return getProcessLiveness(f.pid, _?.pid === f.pid ? _.procStart : void 0);
      }),
    );
  for (let [f, _] of d.entries())
    if (p[f] !== "live") {
      if (
        (logForDebugging(`[adoptRosterOrphans] pruned dead record ${_.short} (${p[f]})`),
        N().shouldReportPruned(_.short))
      )
        logEvent("tengu_bg_roster_orphan_pruned", { reason: fromEnum(p[f] ?? "dead_pid") });
    } else N().notePruneCandidateLive(_.short);
  let y = d.filter((f, _) => p[_] === "live");
  if (y.length === 0) return e;
  let w = y.map((f) => {
    let _ = {
        ...makeInitialState({
          template: { name: f.agent ?? "bg", description: "" },
          routine: f.routine,
          intent: f.intent,
          name: f.name,
          detail: f.detail,
          ...(f.tempo === "active" &&
          (f.state === "running" || PRE_BOOT_STATES.includes(f.state))
            ? f.routine
              ? { tempo: "idle" }
              : { tempo: "blocked", needs: IDLE_NEEDS }
            : { tempo: f.tempo, needs: f.needs }),
          sessionId: Fb(f.sessionId),
          cwd: Fb(f.cwd),
          worktreePath: f.worktreePath === void 0 ? void 0 : Fb(f.worktreePath),
        }),
        createdAt: new Date(f.createdAt ?? f.startedAt).toISOString(),
        daemonShort: f.short,
        state: PRE_BOOT_STATES.includes(f.state) ? "working" : f.state,
        ...(isTerminal(f.state) && { inFlight: { tasks: 0, queued: 0, kinds: [] } }),
      },
      C = getJobDir(f.short),
      F = r ? st(f.short, [ee]) : void 0;
    if (r && F)
      r.write(F, jsonStringify(_), { precondition: { type: "ifAbsent" }, mode: 384 }).then(
        (E) => {
          if (E.ok) logEvent("tengu_bg_roster_orphan_adopted", {});
          else if (E.error.code !== "AlreadyExists")
            logJobWriteError(
              new R(
                `[jobs] v5 orphan seed write failed: ${E.error.code}`,
                "[jobs] v5 orphan seed write failed",
              ),
            );
        },
      );
    else
      Fe(C, { recursive: !0 })
        .then(() => writeNewFileAfterAbsenceCheck(J(C, "state.json"), jsonStringify(_), 384))
        .then(() => logEvent("tengu_bg_roster_orphan_adopted", {}))
        .catch((E) => {
          if (A(E) !== "EEXIST") logJobWriteError(E);
        });
    return { id: f.short, state: _ };
  });
  return [...e, ...w];
}
function terminalOutcome(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null;
}
function isTerminal(e) {
  return terminalOutcome(e) !== null;
}
function isSettled(e) {
  return isTerminal(e.state) && e.tempo !== "active";
}
function isExecLaunch(e) {
  return e.template === "exec" && e.respawnFlags.length === 0;
}
function hasOutstandingAsk(e) {
  return e.state === "blocked" && !isExecLaunch(e);
}
function isLocalDaemonAgent(e) {
  return e.backend === "daemon" && !isExecLaunch(e);
}
function spawnOrigin(e) {
  let t =
    e.originCwd ||
    (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return Fb(t);
}
function jobMatchesCwd(e, t) {
  if (e.backend === "remote") return !0;
  let r = relative(t, spawnOrigin(e));
  return r.split(/[/\\]/, 1)[0] !== ".." && !rt(r);
}
function isLoopJob(e) {
  let t = (r) => r?.trim().toLowerCase().startsWith("/loop") ?? !1;
  return t(e.intent) || t(e.initialPrompt);
}
function isSelfDriving(e) {
  return (
    e.routine !== void 0 ||
    e.selfWake === !0 ||
    (e.inFlight?.kinds.includes("session_cron") ?? !1) ||
    isLoopJob(e)
  );
}
function writeReapedTerminalState(e, t, r, o, d) {
  let g = getJobDir(e);
  return readJobState(g, d)
    .then(async (p) => {
      if (!p || isSettled(p) || (t === "failed" && hasOutstandingAsk(p))) return "none";
      let y = Date.now(),
        w = new Date(y).toISOString(),
        f =
          o?.resumable === "auto-resume" &&
          t === "failed" &&
          !isExecLaunch(p) &&
          y - Date.parse(p.updatedAt) > ABANDONED_WORKER_MS;
      return (
        await writeStateAtomic(
          g,
          {
            ...p,
            state: f ? "stopped" : t === "crashed" ? "failed" : t,
            detail: f
              ? nn
              : t === "stopped"
                ? "stopped"
                : t === "failed"
                  ? (p.detail || r).replace(/; respawning$/, "")
                  : r,
            tempo: "idle",
            inFlight: void 0,
            needs: void 0,
            updatedAt: w,
            firstTerminalAt: p.firstTerminalAt ?? (f ? p.updatedAt : w),
            lastTerminalAt: f ? p.updatedAt : w,
            ...(o?.resumable === "auto-resume" &&
              t === "failed" &&
              (f
                ? { deadEpochReapedAt: w }
                : { reapedMidWorkAt: p.updatedAt })),
            ...(o?.resumable === "wake-only" &&
              t === "failed" && { reapedUnsettledAt: p.updatedAt }),
          },
          d,
        ),
        f ? "dead-epoch" : "settled"
      );
    })
    .catch((p) => (logJobWriteError(p), "none"));
}
var rn = createLazyValue(() =>
    nt({
      state: le().nullish(),
      detail: le().nullish(),
      tempo: le().nullish(),
      needs: le().nullish(),
      output: hm(le(), Xu()).nullish(),
    }),
  ),
  on = {
    working:
      "actively progressing on the task \u2014 narrating plans, calling tools, or writing code; no pending question for the user",
    blocked:
      'the last message ends on a direct question or explicit request for the user ("want me to\u2026?", "which do you prefer?", "approve this?", "needs input: \u2026") \u2014 nothing will happen until the user replies',
    done: 'the task the user asked for is fully delivered and there is no further work the agent plans to do \u2014 not just a progress update, not "almost done", not "let me know what you think"',
    failed:
      "the agent has given up or hit something unrecoverable \u2014 missing credential, broken build it cannot fix, wrong repo, task impossible as framed; distinct from blocked (user can unblock) and done (succeeded)",
  },
  sn = {
    result:
      "one short sentence naming the finished deliverable \u2014 no sub-clauses or bullet summaries",
  },
  MAX_DETAIL_CHARS = 800,
  CLASSIFY_TAIL_CHARS = 2000,
  an = new Set(["done", "failed", "stopped"]);
function clipWithEllipsis(e, t) {
  if (e.length <= t) return e;
  let r = t - 1,
    o = e.charCodeAt(r - 1);
  if (o >= 55296 && o <= 56319) r--;
  return e.slice(0, r) + "\u2026";
}
function te(e, t) {
  let r = null,
    o = 0,
    d = 0;
  while (d < t) {
    let g = e.indexOf("```", d),
      p = e.indexOf("~~~", d),
      y = g === -1 ? p : p === -1 ? g : Math.min(g, p);
    if (y === -1 || y >= t) break;
    let w = e[y],
      f = y - 1,
      _ = 0;
    while (f >= 0 && e[f] === " " && _ < 3) (f--, _++);
    let C =
        f < 0 ||
        e[f] ===
          `
`,
      F = 3;
    d = y + 3;
    while (e[d] === w) (d++, F++);
    if (!C) continue;
    if (r === null) ((r = w), (o = F));
    else if (r === w && F >= o) ((r = null), (o = 0));
  }
  return r !== null;
}
function classifyApiErrorToStatus(e, t = "", r) {
  if (r === "dlp_request_denied")
    return { state: "failed", needs: "API error" };
  switch (e) {
    case "authentication_failed":
      return { state: "blocked", needs: "login required \u2014 run /login" };
    case "oauth_org_not_allowed":
      return {
        state: "blocked",
        needs: "org disabled OAuth \u2014 use API key or ask admin",
      };
    case "account_on_hold":
      return { state: "blocked", needs: "account on hold \u2014 see detail" };
    case "billing_error":
      return {
        state: "blocked",
        needs: "usage limit reached \u2014 check plan",
      };
    case "rate_limit":
      return { state: "blocked", needs: "rate limited \u2014 wait and retry" };
    case "overloaded":
      return {
        state: "blocked",
        needs: "API overloaded \u2014 wait and retry",
      };
    case "server_error":
      return { state: "blocked", needs: "API unavailable \u2014 retry" };
    case "invalid_request":
      return /\b(too long|too large|exceeds|token limit|prompt is too long)\b/i.test(
        t,
      )
        ? {
            state: "blocked",
            needs: "request too large \u2014 /compact or trim",
          }
        : { state: "blocked", needs: "invalid API request \u2014 see detail" };
    case "max_output_tokens":
      return null;
    case void 0:
      return { state: "blocked", needs: "API error \u2014 see detail" };
    case "unknown":
    default:
      return { state: "failed", needs: "API error" };
  }
}
var ln = /(?:^|\n)\s*failed\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi,
  dn = /(?:^|\n)\s*needs input\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi,
  un = /(?:^|\n)\s*blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi,
  cn = /\bI'?m blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi;
function pn(e, t, r) {
  let o;
  for (let [d, g] of [
    ["failed", ln],
    ["blocked", dn],
    ["blocked", un],
    ["blocked", cn],
  ])
    for (let p of t.matchAll(g)) {
      if (te(e, r + p.index)) continue;
      if (!o || p.index > o.index)
        o = {
          state: d,
          capture: p[1].trim(),
          index: p.index,
          end: p.index + p[0].length,
        };
    }
  return o;
}
function classifyClosingShape(e) {
  let t = e.trim();
  if (!t) return "empty";
  if (te(t, t.length)) return "code-fence";
  let r = t.slice(-800),
    o = t.length - r.length;
  for (let g of r.matchAll(/(?:^|\n)\s*result:\s*\S/gi))
    if (!te(t, o + g.index)) return "result-line";
  for (let g of r.matchAll(/(?:^|\n)\s*failed:\s*\S/gi))
    if (!te(t, o + g.index)) return "failed-line";
  if (/[?\uFF1F]\s*$/.test(t)) return "trailing-q";
  let d = t.slice(-200);
  if (/(?:^|\n)\s*(?:[-*\u2022]|\d+\.|[|])\s/.test(d)) return "list-or-table";
  return "declarative";
}
function preclassifyStatusFromMarkers(e) {
  let t = e.trim();
  if (!t) return null;
  let r = t.slice(-800),
    o;
  for (let E of r.matchAll(/(?:^|\n)\s*result:\s*(.+?)\s*(?:\n|$)/gi))
    if (!te(t, t.length - r.length + E.index)) o = E;
  let d = r,
    g = t.length - r.length;
  if (o) {
    let E = o.index + o[0].length;
    ((d = r.slice(E)), (g = t.length - r.length + E));
  }
  let p = pn(t, d, g);
  if (o && !p) {
    let E = clipWithEllipsis(o[1], MAX_DETAIL_CHARS);
    if (
      [...d.matchAll(/(?:^|\n)\s*next:\s*\S/gi)].some(
        (P) => !te(t, g + P.index),
      )
    )
      return {
        branch: "result-then-next",
        state: "working",
        tempo: "idle",
        detail: E,
        output: { result: E },
      };
    return {
      branch: "result-marker",
      state: "done",
      tempo: "idle",
      detail: E,
      output: { result: E },
    };
  }
  if (p?.state === "failed")
    return {
      branch: "failed-marker",
      state: "failed",
      tempo: "idle",
      detail: clipWithEllipsis(p.capture, MAX_DETAIL_CHARS),
      output: {},
    };
  if (p?.state === "blocked") {
    let E = d.slice(p.end);
    if (countMatching(E.split(/\n\s*\n/), (I) => I.trim().length > 0) >= 3) return null;
    if (
      !/\bnothing (?:needed|required) from you\b|\bno(?: user)? action (?:needed|required)\b/i.test(
        d,
      )
    ) {
      let I = clipWithEllipsis(p.capture, MAX_DETAIL_CHARS);
      return {
        branch: "blocked-marker",
        state: "blocked",
        tempo: "blocked",
        needs: I,
        detail: I,
      };
    }
    if (o) {
      let I = clipWithEllipsis(o[1], MAX_DETAIL_CHARS);
      return {
        branch: "blocked-disclaimed",
        state: "done",
        tempo: "idle",
        detail: I,
        output: { result: I },
      };
    }
    return null;
  }
  if (/[?\uFF1F]\s*$/.test(r) && r.replace(/[?\uFF1F\s]+$/, "").length >= 4) {
    let E = Math.max(
      r.lastIndexOf(`
`),
      r.lastIndexOf(". "),
      r.lastIndexOf("! "),
      r.lastIndexOf("? ", r.length - 2),
    );
    if (!te(t, t.length - r.length + E)) {
      let I = clipWithEllipsis(r.slice(E + 1).trim(), MAX_DETAIL_CHARS);
      if (gn.test(I)) return null;
      return {
        branch: "trailing-q",
        state: "blocked",
        tempo: "blocked",
        needs: I,
        detail: I,
      };
    }
  }
  let y = Math.max(
      0,
      r.lastIndexOf(". "),
      r.lastIndexOf("! "),
      r.lastIndexOf("? "),
      r.lastIndexOf(`
`),
    ),
    w = r.slice(y).replace(/^[.!?\s]+/, ""),
    f = te(t, t.length - r.length + y),
    _ =
      /\b(?:waiting (?:for|on)|pending)\s+(?:the\s+)?(?:CI|build|tests?|reviewer|deploy(?:ment)?|workflow|checks?|rollout|merge queue)\b/i.exec(
        w,
      );
  if (_ && !f)
    return {
      branch: "wait-external",
      state: "working",
      tempo: "idle",
      detail: clipWithEllipsis(_[0], MAX_DETAIL_CHARS),
      output: {},
    };
  let C =
    /\b(?:awaiting|waiting (?:for|on)|pending)\s+(?:your\s+(?:feedback|input|decision|response|approval|direction|guidance|go-ahead)|you\b|the user\b)/i.exec(
      w,
    );
  if (C && !f) {
    let E = clipWithEllipsis(w.slice(C.index).trim(), MAX_DETAIL_CHARS);
    return {
      branch: "awaiting-user",
      state: "blocked",
      tempo: "blocked",
      needs: E,
      detail: E,
    };
  }
  let F =
    /\b(please (?:run|provide|confirm|clarify|choose|let me know)|let me know (?:which|what|how|when)|which (?:option|approach|one)|should I (?:proceed|continue|use))\b/i.exec(
      w,
    );
  if (F && !f) {
    let E = clipWithEllipsis(w.slice(F.index).trim(), MAX_DETAIL_CHARS);
    return {
      branch: "ask-verb",
      state: "blocked",
      tempo: "blocked",
      needs: E,
      detail: E,
    };
  }
  if (
    !f &&
    /\b(not logged in|please run \/login|authentication failed|invalid api key|oauth token (?:expired|revoked)|credit balance (?:is )?too low|usage limit reached|mcp (?:server )?(?:authentication|auth|authorization|unauthorized)|mcp (?:server )?(?:credential|token) (?:missing|expired|invalid)|401 unauthorized|403 forbidden|token (?:has )?expired|bad credentials|gh auth login|gcloud auth login|aws (?:sso )?login)\b/i.test(
      w,
    )
  )
    return {
      branch: "auth-prose",
      state: "blocked",
      tempo: "blocked",
      needs: clipWithEllipsis(w, MAX_DETAIL_CHARS),
      detail: "authentication required",
    };
  if (!f && fn.test(w) && !mn.test(w))
    return {
      branch: "working-verb",
      state: "working",
      tempo: "active",
      detail: clipWithEllipsis(w, MAX_DETAIL_CHARS),
      output: {},
    };
  if (!f && hn.test(w))
    return {
      branch: "agents-status",
      state: "working",
      tempo: "idle",
      detail: clipWithEllipsis(w, MAX_DETAIL_CHARS),
    };
  if (!f && bn.test(w))
    return {
      branch: "will-check-back",
      state: "working",
      tempo: "idle",
      detail: clipWithEllipsis(w, MAX_DETAIL_CHARS),
    };
  if (!f && wn.test(w)) {
    let E = clipWithEllipsis(w, MAX_DETAIL_CHARS);
    return {
      branch: "cant-proceed",
      state: "blocked",
      tempo: "blocked",
      detail: E,
      needs: E,
    };
  }
  if (!f && kn.test(w))
    return {
      branch: "giving-up",
      state: "failed",
      tempo: "idle",
      detail: clipWithEllipsis(w, MAX_DETAIL_CHARS),
    };
  if (!f && yn.test(w)) {
    let E = clipWithEllipsis(w, MAX_DETAIL_CHARS);
    return {
      branch: "pushed-committed",
      state: "done",
      tempo: "idle",
      detail: E,
      output: { result: E },
    };
  }
  if (!f && Sn.test(w))
    return {
      branch: "ready-for",
      state: "done",
      tempo: "idle",
      detail: clipWithEllipsis(w, MAX_DETAIL_CHARS),
    };
  if (!f && Rn.test(w)) {
    let E = clipWithEllipsis(w, MAX_DETAIL_CHARS);
    return {
      branch: "verdict-marker",
      state: "done",
      tempo: "idle",
      detail: E,
      output: { result: E },
    };
  }
  if (!f && En.test(w)) {
    let E = clipWithEllipsis(w, MAX_DETAIL_CHARS);
    return {
      branch: "please-do-x",
      state: "blocked",
      tempo: "blocked",
      detail: E,
      needs: E,
    };
  }
  if (!f && An.test(w)) {
    let E = clipWithEllipsis(w, MAX_DETAIL_CHARS);
    return {
      branch: "stopping-here",
      state: "blocked",
      tempo: "blocked",
      detail: E,
      needs: E,
    };
  }
  return null;
}
function classifyStatusFromTail(e) {
  let t = e
    .split(
      `
`,
    )
    .map((r) => r.trim())
    .findLast(Boolean);
  return {
    branch: "heuristic",
    state: "working",
    tempo: "idle",
    detail: t ? clipWithEllipsis(t, MAX_DETAIL_CHARS) : "\u2014",
  };
}
var gn = /\b(?:want|like) me to\b|\b(?:shall|should) I also\b/i,
  fn =
    /^(?:(?:Now|Next|Then|Alright|OK|Okay|Right|Good|First|Also),?\s+)?(?:Let me (?!know\b)|(?:I(?:'?ll| will) |I'?m going to |Going to )(?!need\b|require\b|wait\b|leave\b|hold\b|skip\b|stop\b)|Proceeding |Moving (?:on|to)\b|Continuing |Starting |Trying |Checking |Looking |Searching |Reading |Investigating |Running |Re-?running |Building |Rebuilding |Installing |Fetching |Applying |Fixing |Patching |Updating |Adding |Removing |Deleting |Importing |Refactoring |Rewriting |Writing |Grepping |Scanning |Wrapping |Switching |Testing |Verifying |Regenerating |Pushing |Pulling |Reviewing |Examining |Loading |Compiling |Parsing |Analyzing |Tracing |Exploring )/i,
  mn =
    /\b(?:once |when |after |until |as soon as )(?:you|it|the|that|this|they)\b|\bagain in\b|\bcheck back\b|\bin ~?\d+\s*(?:s(?:ec(?:ond)?s?)?|m(?:in(?:ute)?s?)?|h(?:ours?|rs?)?)\b|\bthen\.?\s*$|\bwhichever you\b|\bhold(?:ing)? for your\b|\b(?:to|and) wait for\b|\bgive it (?:more |some )?time\b|\bif (?:you(?:'d| want| prefer| need|'re)?|that(?:'s| helps| works)?|useful|needed|helpful|desired)\b|\b(?:isn'?t|not|won'?t) going to work\b/i,
  hn =
    /^(?:(?:\*\*)?[1-9]\d* (?:agent|cron|task|fork|job|worker|PR|check)s? (?:in flight|remaining|active|still (?:running|working)|pending|running|launched)\b|(?:Continuous )?(?:[Ll]oop|[Cc]rons?|[Bb]abysit) (?:active|healthy|continuing|running|will keep|continues)\b|Waiting for (?:the )?(?:agent|cron|task|fork|worker|job|remaining|them)s?\b|Agents? will report back\b|Waiting\.?$)/,
  bn =
    /^(?:I will|I'll|Will) (?:check back|re-?check|poll|look again|retry|re-?run|try again) (?:(?:when|once|after|until) (?!your?\b)|in\b|again\b)/i,
  wn =
    /^I (?:can(?:'?t|not)|am unable to) (?:proceed|continue|make (?:any )?progress|complete|fix this)\b/i,
  kn = /^(?:Giving up|I(?:'m| am) giving up|The task is not actionable)\b/i,
  yn =
    /^(?:Pushed (?:to `|`[0-9a-f]{7,})|Committed as `?[0-9a-f]{7,}\b|Commit: `?[0-9a-f]{7,}\b|(?:Opened|Created) PR #?\d)/,
  Sn = /^Ready (?:for review|to (?:upload|merge|ship|land))\b/,
  Rn = /^VERDICT: (?:PASS|FAIL)\b/,
  En =
    /^Please (?:start|run|provide|grant|export|add|install|configure|give me|paste|point me|set (?:the |up |`?[A-Z][A-Z0-9_]+\b))/,
  An =
    /^(?:Stopping here|I've stopped here|Parked (?:the|this) branch|Paused here)(?:\.|$| \u2014| -| until| pending| since| because)/i,
  STATUS_CLASSIFIER_SYSTEM_PROMPT = `A user kicked off a Claude Code agent to do a coding task and walked away. Read the tail of what the agent just said and decide which of four states it's in, so the system knows whether to notify the user.

The classification drives a phone notification: "blocked" pings the user to come back; everything else doesn't. So the question you're really answering is: does the user need to come back right now, and if not, is the work finished or still going? A false "blocked" is an annoying interruption for nothing. A false "done" or "working" when the agent is actually stuck waiting on the user means the work sits idle until they happen to check.

THE FOUR STATES

  "done" \u2014 the agent answered the ask or delivered the thing, and isn't planning to do anything else unprompted. This is the most common end-of-turn state in interactive sessions. There doesn't have to be a PR, commit, or file \u2014 if the user asked a question and the tail is the answer (not a plan to find one), that's done. Explanations, analyses, recommendations, "here's what I found", "the cause is X", "no change needed", and "files at <path>" closings are all done.

  "working" \u2014 the agent intends to keep going without being asked: it said "now let me\u2026", "next I'll\u2026", "running\u2026", "checking\u2026", or it's waiting on something it kicked off (CI, build, subagent, deploy, timer). Look for explicit forward intent or a named external wait.

  "blocked" \u2014 the agent cannot continue without the user. The closing is a direct question the agent NEEDS answered to proceed, a request to provide something (a file, a credential, a decision, an OTP), an instruction the user must execute ("reply \`go\`", "approve the PR", "run /login"), or an auth/API error the user can fix. Test: would the user replying or acting unblock it?

  "failed" \u2014 the agent gave up because the task is structurally impossible as framed: wrong repo, the feature doesn't exist, the premise is false, every approach exhausted with nothing the user could hand over to unblock it. Rare. If the agent names a specific missing resource, that's "blocked", not "failed" \u2014 the user CAN unblock it.

THE HARD BOUNDARIES

Done vs working: a closing that explains, summarizes, reports findings, or shows what was changed \u2014 without saying it's about to do more \u2014 is "done". Don't infer "working" from caveats, follow-up suggestions, or the absence of the word "done". Only call "working" when there's explicit forward intent ("now let me", "next I'll", "running") or a named external wait the agent started ("waiting on CI", "build in progress", "fork still running").

Done vs blocked \u2014 optional offers vs gates: after delivering, agents often close with an offer to do more: "let me know if you want X", "if you'd like, I can also Y", "ping me and I'll Z", "say the word and I'll update", "want me to dig into that?", "tell me the IDs and I'll re-home", "happy to do the latter if you want", "shall I also\u2026?". These are "done" \u2014 the deliverable shipped; the offer is extra. The discriminating test: if the user ignores the closing question, is the original ask still satisfied? Yes \u2192 done. No \u2192 blocked.

The exception is when the question is about WHETHER or HOW to ship the work the user asked for \u2014 which PR to put it in, apply it or not, push or hold, which approach to take. Then the deliverable isn't landed without the answer, so that's "blocked". "Found the fix. Want me to add it to this PR or open a new one?" \u2192 blocked (delivery isn't decided). "Fixed it in this PR. Want me to also clean up the old helper while I'm here?" \u2192 done (delivery is complete; the extra is tangential).

Working vs done vs blocked \u2014 when the closing mentions waiting on something: the discriminator is whether the AGENT ITSELF will do more.
  \u2022 Agent says it will act ("I'll report when X lands", "next check in 5 min", "shepherding CI", "will re-poll", "checking back", "N agents in flight \u2014 I'll consolidate") \u2192 "working". The agent owns the next step, regardless of what it's waiting on.
  \u2022 Agent won't act, and there's a user-addressed gate with no re-poll ("reply \`go\` to merge", "awaiting your approval", "which approach do you want?") \u2192 "blocked". Only the user can move it forward.
  \u2022 Agent won't act, and the wait is on a third party or passive trigger ("auto-merge armed, awaiting stamp", "posted to #stamps", "CI will run") \u2192 "done". The agent's part is over; whatever happens next happens without it.
A closing with both ("Awaiting your \`go\`. Next check in 20m") is "working" \u2014 the agent will re-check on its own; \`go\` is an optional accelerator, not a hard gate.

Stickiness: you're told the previous state. Don't move done\u2192working or failed\u2192working unless the agent explicitly restarted. Moving working\u2192done is the normal end-of-turn outcome \u2014 lean "done" when the closing is declarative with no future-tense plan.

EXPLICIT MARKERS \u2014 these are unambiguous, treat them as ground truth:
  \u2022 "No response requested." / "No action needed." / "Nothing needed from you." \u2192 done
  \u2022 "result: <text>" on its own line \u2192 done (and <text> is output.result)
  \u2022 "Next check in <time>" / "Shepherding CI" / "I'll report when X lands" / "checking back" \u2192 working
  \u2022 "Reply \`go\` to <verb>" / "Awaiting your \`go\`" (with no re-poll mentioned) \u2192 blocked
  \u2022 "Giving up." / "The task is not actionable." \u2192 failed
  \u2022 "blocked: <reason>" / "I'm blocked: <reason>" on its own line \u2192 blocked

API/AUTH/INFRA ERRORS \u2192 always "blocked" (transient or user-fixable), never "failed". Set needs to the fix. Covers:
  \u2022 Anthropic API: "401", "Invalid API key", "Please run /login", "rate limited", "overloaded", "529", "credit balance too low", "usage limit reached"
  \u2022 MCP servers: "OAuth token expired/revoked", "vault credential missing", "MCP authentication failed", "MCP unauthorized"
  \u2022 External services: "gh auth login", "gcloud auth login", "aws sso login", "bad credentials", "token expired", GitLab/GitHub PAT errors, Stripe/Slack 401
  \u2022 Any prose naming a specific re-auth or re-login step

OTHER DISAMBIGUATION:
  \u2022 Agent hit an error but is retrying or investigating ("let me try again", "checking the logs") \u2192 "working"
  \u2022 Agent stopped and names a SPECIFIC missing thing the user could supply (file, env var, credential, OTP, path, decision) \u2192 "blocked", even if phrased as "can't proceed" or "stopping here"
  \u2022 Scope notes, caveats, or FYIs after a delivered finding ("note: Y is untested", "out of scope but worth flagging") \u2192 "done"
  \u2022 A summary of options or a recommendation ("B is the right call", "I'd take option 1") with no question \u2192 "done" (the recommendation IS the deliverable)
  \u2022 Imperative to the user that's a recommendation, not a gate ("Ship the seek + scale.", "Run the migration when ready.") \u2192 "done" \u2014 the agent isn't waiting on it

EXAMPLES (tail \u2192 classification)

"Reading config files to understand the setup."
\u2192 {"state":"working","detail":"reading config files to map the setup","tempo":"active","output":{}}

"Found it in auth.ts:88. Now let me check if the same pattern appears elsewhere."
\u2192 {"state":"working","detail":"found pattern at auth.ts:88; scanning for other occurrences","tempo":"active","output":{}}

"Waiting for CI to finish (~8 min)."
\u2192 {"state":"working","detail":"waiting on CI (~8 min)","tempo":"idle","output":{}}

"CI green on PR #31030. Reply \`go\` to merge."
\u2192 {"state":"blocked","detail":"PR #31030 CI green; awaiting user go-ahead to merge","tempo":"blocked","needs":"reply \`go\` to merge","output":{}}
  (no agent re-poll; only the user's \`go\` moves it forward \u2192 blocked)

"Awaiting your \`go\`. Next check in 20m."
\u2192 {"state":"working","detail":"PR awaiting go-ahead; agent re-checking in 20m","tempo":"idle","output":{}}
  (agent will re-poll on its own; \`go\` is an optional accelerator \u2192 working)

"Auto-merge armed on PR #4821. Posted to #stamps. Awaiting stamp."
\u2192 {"state":"done","detail":"PR #4821 auto-merge armed; posted to #stamps","tempo":"idle","output":{"result":"PR #4821 ready, auto-merge armed"}}
  (GitHub merges, not the agent; agent's part is over \u2192 done)

"Babysit tick \u2014 PR #40689. All CI green, threads resolved. Awaiting human approval. Next check via cron in ~5 min."
\u2192 {"state":"working","detail":"PR #40689 green, awaiting approval; next cron check ~5 min","tempo":"idle","output":{}}
  ("next check via cron" = agent will re-poll \u2192 working)

"Here's how the auth flow works: the token is validated in middleware.ts:42 before each request."
\u2192 {"state":"done","detail":"auth flow: token validated in middleware.ts:42 per request","tempo":"idle","output":{"result":"token validated in middleware.ts:42"}}
  (answered a question \u2014 no PR/commit/file required for "done")

"Indentation is now consistent at all four call sites (RepoPicker, both EnvironmentPicker sites, BranchPicker, SessionView). CI's swift-format should find nothing left to reflow."
\u2192 {"state":"done","detail":"indentation fixed at 4 call sites; swift-format clean","tempo":"idle","output":{"result":"indentation consistent across RepoPicker/EnvironmentPicker/BranchPicker/SessionView"}}

"At 30-40k rows there's no hint that gets you there without a new index \u2014 and at that point the column is strictly cheaper than a (session_uuid, source, sequence_num DESC) index."
\u2192 {"state":"done","detail":"dedicated column beats a composite index at 30-40k rows","tempo":"idle","output":{"result":"recommend dedicated column over composite index"}}
  (pure analysis closing, no question, no forward intent \u2014 done)

"No response requested."
\u2192 {"state":"done","detail":"completed; no response requested","tempo":"idle","output":{}}

"Both PRs remain bot-clean. Continue your e2e test on the restarted localhost:4000 (now pointed at local CCR)."
\u2192 {"state":"done","detail":"both PRs bot-clean; localhost:4000 restarted on local CCR","tempo":"idle","output":{}}
  ("Continue your test" is advice TO the user, not the agent's plan \u2192 done)

"Both subagents updated to use \`ack_seq\`. They're still running \u2014 I'll report PR URLs when each completes."
\u2192 {"state":"working","detail":"2 subagents running with ack_seq rename; will report PR URLs","tempo":"idle","output":{}}
  ("I'll report when each completes" = agent will act on results \u2192 working)

"Searching internal knowledge for the org ID \u2014 I'll report back when the search completes."
\u2192 {"state":"working","detail":"searching internal KB for org ID","tempo":"active","output":{}}

"Wrote the chart to plots/venn.png; script is at scripts/venn.R."
\u2192 {"state":"done","detail":"venn chart written to plots/venn.png + scripts/venn.R","tempo":"idle","output":{"result":"plots/venn.png + scripts/venn.R"}}

"Fixed the regex; tests pass. If you want, I can also open a follow-up PR to clean up the old helper."
\u2192 {"state":"done","detail":"regex fixed in parser.ts, all tests green","tempo":"idle","output":{"result":"regex fixed, tests pass"}}
  (deliverable shipped; offer is tangential extra \u2192 done)

"Throughput drop confirmed \u2014 ~16K/min notifications being dropped from pod capacity. Ship the seek + scale. Want me to dig into the upstream volume change too?"
\u2192 {"state":"done","detail":"~16K/min notif drop confirmed; recommend seek+scale","tempo":"idle","output":{"result":"~16K/min drop, pod capacity \u2014 ship seek+scale"}}
  (finding + recommendation delivered; trailing question is optional extra \u2192 done)

"Not applied \u2014 say the word and I'll update both widgets."
\u2192 {"state":"done","detail":"widget query change drafted; not applied pending go-ahead","tempo":"idle","output":{}}
  ("say the word and I'll" = optional offer \u2192 done)

"B is the right call \u2014 it lands in the table the chart already reads, and avoids the migration."
\u2192 {"state":"done","detail":"recommend option B: reuses the table, avoids the migration","tempo":"idle","output":{"result":"recommendation: option B"}}

"PR opened: https://github.com/acme/repo/pull/123\\nresult: fixed auth race in auth.ts, PR #123"
\u2192 {"state":"done","detail":"opened PR #123: fixed auth race","tempo":"idle","output":{"result":"fixed auth race in auth.ts, PR #123"}}

"I found the bug in auth.ts:42. Want me to fix it or just report?"
\u2192 {"state":"blocked","detail":"found null-check bug at auth.ts:42; awaiting fix-vs-report","tempo":"blocked","needs":"fix it or just report?","output":{}}
  (agent has NOT delivered the fix; can't proceed without the answer \u2192 blocked)

"Found the fix \u2014 it's a 3-line change to the retry handler. Want me to add it to this PR or open a new one?"
\u2192 {"state":"blocked","detail":"3-line retry-handler fix ready; awaiting which PR","tempo":"blocked","needs":"add to this PR or open a new one?","output":{}}
  (question is about HOW to ship the asked-for work \u2192 blocked)

"Added the analytics enum + conditional at the .withScreenAnalyticsLogging call site. Want me to also add the missing screen tag for the empty-state view while I'm here? It's a ~5-line change."
\u2192 {"state":"done","detail":"analytics enum + conditional added at the logging call site","tempo":"idle","output":{"result":"analytics logging wired at SessionView"}}
  (asked-for work delivered; the "while I'm here" extra is tangential \u2192 done)

"I can't proceed \u2014 the repo requires GITHUB_TOKEN and it's not set."
\u2192 {"state":"blocked","detail":"missing GITHUB_TOKEN; cannot clone","tempo":"blocked","needs":"set GITHUB_TOKEN env var","output":{}}

"Can't run the tests \u2014 needs the openapi.yaml file which isn't in this checkout. Stopping here."
\u2192 {"state":"blocked","detail":"missing openapi.yaml; cannot run tests","tempo":"blocked","needs":"provide config/openapi.yaml","output":{}}
  ("stopping" + names a specific missing resource \u2192 blocked, not failed)

"API Error: 401 Invalid API key \xB7 Please run /login"
\u2192 {"state":"blocked","detail":"API auth failed (401)","tempo":"blocked","needs":"run /login","output":{}}

"The build is broken on main and I can't reproduce locally. Giving up."
\u2192 {"state":"failed","detail":"cannot reproduce build failure; logs uninformative","tempo":"idle","output":{}}
  (no specific resource would unblock; exhausted approaches \u2192 failed)

CONTRASTIVE PAIRS \u2014 same surface shape, different state

  "Tests pass. Let me know if you also want the docs updated."  \u2192 done
  "Tests written but I haven't run them. Let me know which env to use."  \u2192 blocked
  (first: deliverable shipped, offer is extra. second: deliverable not verified, needs the env to proceed)

  "Waiting for CI (~8 min)."  \u2192 working
  "CI green. Awaiting your \`go\` to merge."  \u2192 blocked
  (first: only external wait. second: user gate)

  "Want me to also clean up the old helper?"  \u2192 done
  "Want me to apply this fix or just report it?"  \u2192 blocked
  (first: tangential extra after delivery. second: how to deliver the asked-for work)

  "I'll re-pull metrics when the timer fires and confirm it drained."  \u2192 working
  "I'll re-pull metrics once you confirm the timer fired."  \u2192 blocked
  (first: agent owns the next step. second: user owns it)

OUTPUT \u2014 respond with ONLY this JSON, no code fences:
{"state":"<working|blocked|done|failed>","detail":"<one line, \u226464 chars>","tempo":"<active|idle|blocked>","needs":"<when blocked: the exact ask; omit otherwise>","output":{"result":"<one-sentence deliverable headline, \u2264180 chars; omit when working>"}}

"detail" is what shows on the user's phone lock screen and as the one-line status column in a session list \u2014 write it like a colleague's Slack message: name the concrete thing (file, function, error, number, finding) and what happened to it. "fixed auth race in middleware.ts, tests green" not "completed task"; "waiting on CI for #4821" not "working"; "confirmed 16K/min drop from pod capacity" not "investigated issue". Hard budget: about 64 characters (ten words). It is the HEADLINE, not the report \u2014 the concrete noun and what happened to it; no parentheticals, no URLs, no second clause of explanation. Everything else belongs in output.result, which may run longer. "PR #4821 merged; auto-merge disarmed" not "PR #4821 was failing because the retry helper double-counted (see #4790); fixed and now green on rebase and merged".

"tempo": "active" = computing; "idle" = waiting on external (CI, timer, reviewer); "blocked" = waiting on user.

"needs": when blocked, the exact action the user should take, copied as closely as possible from the tail \u2014 they'll act on this text without reading the transcript. Omit otherwise.

"output.result": one-sentence headline naming a finished deliverable (direct answer, URL/path the agent produced, command the user should run). If the tail has \`result:\` on its own line, that line IS the result. Omit ({}) when still working, or when it would just restate the state.
`;
function buildStatusClassifierPrompt(e) {
  let { tail: t, prev: r, latestAsk: o, toolSummary: d, minsInState: g } = e;
  return `Current state: ${r} (for ${g}m)
Tool calls so far: ${d || "none"}${
    o
      ? `
User's most recent ask: "${o}"`
      : ""
  }

Assistant message tail (last ${t.length} chars):
${t}`;
}
function parseStatusClassifierResponse(e) {
  let t = e.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, ""),
    r = t.indexOf("{"),
    o = t.lastIndexOf("}");
  if (r < 0 || o < 0) return null;
  let d;
  try {
    d = jsonParse(t.slice(r, o + 1));
  } catch {
    return null;
  }
  let g = rn().safeParse(d);
  return g.success ? g.data : null;
}
function ye(e) {
  return typeof e === "string" && e ? e : void 0;
}
function normalizeStatusClassification(e, t, r) {
  let o = ye(e.state),
    d = o && Object.hasOwn(on, o) ? o : (r?.state ?? t),
    g = ye(e.tempo),
    p = an.has(d)
      ? "idle"
      : g === "active" || g === "idle" || g === "blocked"
        ? g
        : (r?.tempo ?? "active"),
    y = {},
    w = e.output ?? r?.output;
  if (w && typeof w === "object")
    for (let [_, C] of Object.entries(w)) {
      let F = ye(C);
      if (F && Object.hasOwn(sn, _)) y[_] = clipWithEllipsis(F, MAX_DETAIL_CHARS);
    }
  let f = ye(e.needs) ?? (p === "blocked" ? r?.needs : void 0);
  return {
    state: d,
    detail: ye(e.detail) ?? r?.detail ?? "",
    tempo: p,
    needs: f,
    output: y,
    branch: r?.branch,
  };
}
export {
  getBudgetProgressBucket,
  getFanItemsFingerprint,
  getInFlightCounters,
  publishInFlightSnapshot,
  getInFlightSnapshot,
  subscribeInFlightSnapshot,
  VALUE_TAKING_RESPAWN_FLAGS,
  VALUE_TAKING_FLAGS,
  MULTI_VALUE_FLAGS,
  BOOLEAN_RESPAWN_FLAGS,
  BOOLEAN_ENV_KEYS,
  MODEL_ENV_KEYS,
  ALLOWED_PROVIDER_ENV_KEYS,
  sanitizeRespawnFlags,
  normalizeCliArgPaths,
  VALUELESS_SHORT_FLAGS,
  withReplyOnResumeFlag,
  withoutReplyOnResumeFlag,
  isBgDispatchSource,
  BG_PROTO,
  BG_PROTO_MIN,
  SHORT_RE,
  DAEMON_DETACH_APC,
  DAEMON_HINT_APC,
  wrapDaemonHint,
  interactiveMarkApc,
  extractInteractiveMarks,
  boundedMarkCountOrUndefined,
  parseInteractiveMarkRv,
  daemonDetachApc,
  parseDetachMsg,
  BgDispatchSchema,
  TRANSIENT_ATTACH_CODE,
  RACED_SOCKET_GAP,
  RESPAWNING_ATTACH_CODE,
  RESPAWN_REASON_UPGRADE,
  RESPAWN_REASON_STALL,
  RESPAWN_REASON_LEGACY,
  HOST_DEAD_ATTACH_CODE,
  HOST_DIED_DETAIL,
  HOST_DIED_ATTACH_MESSAGE,
  HOST_DIED_EXEC_DETAIL,
  HOST_DIED_EXEC_ATTACH_MESSAGE,
  FATAL_ATTACH_CODE,
  KICKED_ATTACH_CODE,
  SUPERVISOR_DETACH_CODE,
  rosterEntryExtras,
  RosterSchema,
  ControlRequestSchema,
  DAEMON_LEASE_LABELS,
  inspectRegularFileForRead,
  isReadRefusedError,
  rosterKey,
  readRoster,
  bgShort,
  updateRoster,
  getProcessLiveness,
  isProcessConfirmedLive,
  isCarriableCliToken,
  getCarriableModelArg,
  isRestrictedModeEnabled,
  buildCarriableSessionFlags,
  isCarriableToolRule,
  collectUncarriableLaunchReasons,
  buildCarriableRuleFlags,
  buildCarriableFlagPair,
  formatBooleanFlagValue,
  UNGROUPED,
  EARLIER,
  isReservedGroupName,
  sanitizeGroupName,
  jobDraftStore,
  readJobDraftText,
  getJobsDir,
  getJobDir,
  getOwnJobShortId,
  jobKeyFor,
  jobStateKey,
  watchJobDirOnce,
  isOwnStateWriteInFlight,
  writeStateAtomic,
  logJobWriteError,
  resolveBridgeHandoffIdentity,
  buildBridgeReattachEnv,
  invalidateJobStateCache,
  readJobStateFreshOrNull,
  readJobState,
  readJobStateAfterSettle,
  readPinnedJobIds,
  syncJobName,
  syncJobColor,
  getBgRelocatedCwd,
  relocateBgSessionCwd,
  syncJobResumeSessionId,
  syncLiveInFlightSnapshot,
  syncRespawnFlag,
  appendRespawnFlag,
  writeSortOrder,
  writeStateSortOrder,
  writeJobGroup,
  withSortOrderLock,
  withOwnJobStateWrite,
  writeJobPinned,
  listJobs,
  markCrashed,
  SEED_DETAIL,
  IDLE_NEEDS,
  isOverlayNeeds,
  IDLE_DETAIL,
  PRE_BOOT_STATES,
  ABANDONED_WORKER_MS,
  makeInitialState,
  adoptRosterOrphans,
  terminalOutcome,
  isTerminal,
  isSettled,
  isExecLaunch,
  hasOutstandingAsk,
  isLocalDaemonAgent,
  spawnOrigin,
  jobMatchesCwd,
  isLoopJob,
  isSelfDriving,
  writeReapedTerminalState,
  MAX_DETAIL_CHARS,
  CLASSIFY_TAIL_CHARS,
  clipWithEllipsis,
  classifyApiErrorToStatus,
  classifyClosingShape,
  preclassifyStatusFromMarkers,
  classifyStatusFromTail,
  STATUS_CLASSIFIER_SYSTEM_PROMPT,
  buildStatusClassifierPrompt,
  parseStatusClassifierResponse,
  normalizeStatusClassification,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, Le, Fb } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureBad, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l, A, Jr, Gw, lNn, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, qr, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { BG_EXIT_CAUSE_SESSION_IN_USE, setBgExitCause, readAndClearBgExitCause, readAndClearBgExitDetail } from "./chunk-z5vtnzjg.js";
import { normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import {
  PROVIDER_CONFIG_ENV_VARS,
  BASE_URL_ENV_VARS,
  BASE_URL_ENV_GROUPS,
  ALL_BASE_URL_ENV_VARS,
  API_KEY_ENV_VARS,
  SKIP_AUTH_ENV_VARS,
  AWS_ENV_VARS,
  clearAwsEnvVars,
  VERTEX_REGION_ENV_PREFIXES,
  HOST_AUTH_ENV_VARS,
  hasHostManagedAuth,
  getHostAuthEnvVarName,
} from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { PROCESS_WRAPPER_ENV_VAR, FAST_CRASH_WINDOW_MS, getLauncherArgv, getLauncherConfigError, isLauncherRunnable } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { resolveWrappedClaudeInvocation } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import { Bs, eur } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { readBoundedFile, getVersionForAnalytics, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { FOCUS_IN_SEQUENCE, FOCUS_OUT_SEQUENCE } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { quarantineJobTranscript, isTranscriptFileResumeArg, resolveJobTranscript } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { readLinuxProcState, sigtermThenKill, reapDetachedRepl, getProcessStartTime, isSameProcess, getProcessStartTimeAsync, captureProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { readSocketTokenFile } from "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import { removeGuiHostEntrypoint, NON_INHERITED_ENV_VARS, g4, removeBgDispatcherPlanEnvVars } from "../../01-核心基础设施/共享小工具-未细化/session-env-scrubbing.js";
import {
  MODEL_ENV_KEYS,
  normalizeCliArgPaths,
  BG_PROTO,
  DAEMON_DETACH_APC,
  wrapDaemonHint,
  interactiveMarkApc,
  parseInteractiveMarkRv,
  daemonDetachApc,
  HOST_DIED_DETAIL,
  HOST_DIED_EXEC_DETAIL,
  rosterEntryExtras,
  bgShort,
  getJobDir,
  writeStateAtomic,
  buildBridgeReattachEnv,
  readJobState,
  IDLE_NEEDS,
  ABANDONED_WORKER_MS,
  terminalOutcome,
  isSettled,
  MAX_DETAIL_CHARS,
  clipWithEllipsis,
} from "./chunk-7wsy8vxb.js";
import {
  NOT_OWNED_ERROR_CODE,
  ensureSocketDirsOwned,
  getDaemonAuthDir,
  getCredentialFilePath,
  getTokensFilePath,
  getRendezvousSocketPath,
  getPtySocketPath,
  getSparePtyDir,
  getSparePtySocketPath,
  getSpareClaimSocketPath,
  getPtyPidFilePath,
  getPtyHostStderrPath,
  getPtyLateOutputPath,
  FRAME_KIND_DATA,
  RING_BUFFER_MAX_BYTES,
  MAX_FRAME_BYTES,
  encodeDataFrame,
  encodeControlFrame,
  createFrameDecoder,
} from "./chunk-djserjj5.js";
import { areVersionTargetsDifferent, isVersionGreater, satisfiesVersionRequirement, createDecModeTracker, isLowMemory, killPtySocket, pingPtySocket } from "./chunk-gnmy62vg.js";
import { receiveSpareClaim, bootClaimedSpare } from "../../01-核心基础设施/共享小工具-未细化/spare-session-claim.js";
import { stripEnvironmentFlags } from "../../03-入口与运行时/Headless-SDK模式/cloud-flag-validation.js";
import { readStreamLines } from "../../01-核心基础设施/共享小工具-未细化/read-stream-lines.js";
import { fromJobState, ensureJobTmpDir } from "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import { createBackendHandle, createTranscriptSource } from "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import { isProcessRunning } from "../../01-核心基础设施/共享小工具-未细化/process-record.js";
import { isExitedProcessState } from "../../01-核心基础设施/共享小工具-未细化/linux-proc-stat.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { randomBytes as Re } from "crypto";
import { unlinkSync } from "fs";
import {
  mkdir as Pt,
  open as Ot,
  readdir,
  unlink as X,
} from "fs/promises";
import { connect } from "net";
import { join as pe } from "path";
import { randomBytes as de } from "crypto";
import { statSync } from "fs";
import {
  access,
  mkdir as et,
  unlink as ce,
  writeFile,
} from "fs/promises";
import { basename, dirname } from "path";
var Pe = 2000,
  ne = MAX_DETAIL_CHARS,
  st = /\x1b\[\d*D/g;
function Se(e, t) {
  let r = "",
    s = "",
    p = !0,
    d = 0,
    o = "",
    c = !1;
  function g(k, v) {
    let _ = clipWithEllipsis(qr(s), ne),
      w = `${k}|${v}|${_}`;
    if (w === o) return;
    ((o = w),
      readJobState(e, t)
        .then((y) =>
          y && !c
            ? writeStateAtomic(
                e,
                {
                  ...y,
                  state: k,
                  tempo: v,
                  detail: _,
                  updatedAt: new Date().toISOString(),
                },
                t,
              )
            : void 0,
        )
        .catch(logError));
  }
  let m = setInterval(() => {
    if (d > 0 && Date.now() - d < Pe) g("working", "active");
    else if (!p && s) g("blocked", "blocked");
    else g("working", "idle");
  }, Pe);
  return (
    m.unref(),
    {
      feed(k) {
        let v = stripAnsi(k.replace(st, "\x00"))
          .replace(
            /\r\n?/g,
            `
`,
          )
          .replace(/\0+$/, "")
          .replace(
            /\0/g,
            `
`,
          );
        if (!v) return;
        ((d = Date.now()), (r += v));
        let _ = r.split(`
`);
        if (
          ((r = _.pop() ?? ""),
          (p = r === ""),
          (s = r.trim() || _.findLast((y) => y.trim())?.trim() || s),
          r.length > ne * 2)
        )
          r = r.slice(-ne);
        if (o.startsWith("blocked|")) g("working", "active");
      },
      dispose() {
        ((c = !0), clearInterval(m));
      },
      get lastLine() {
        return clipWithEllipsis(qr(s), ne);
      },
    }
  );
}
import { rename, unlink as oe } from "fs/promises";
import { Socket as ot } from "net";
import { StringDecoder } from "string_decoder";
var Oe = [50, 100, 250, 500, 1000, 2000],
  Ne = 30,
  dt = 4,
  ct = 1e4,
  xe = 8 * MAX_FRAME_BYTES,
  ht = 50;
function ae(e, t, r) {
  let {
      procStart: s,
      short: p,
      hostProc: d,
      auth: o,
      onAuthRequired: c,
    } = r ?? {},
    g = Le(),
    m = Le(),
    k,
    v = new StringDecoder("utf8"),
    _,
    w = !1,
    y = !1,
    D = 0,
    B = 0,
    T,
    U,
    N,
    R,
    C = 0,
    F,
    K,
    J,
    G = !1,
    se = !1,
    ue = !1,
    ee = "",
    Te = !1,
    q = s;
  if (q === void 0)
    getProcessStartTimeAsync(t, { skipCache: !0 }).then((E) => {
      q = E;
    });
  let Ce = [],
    fe = 0;
  function Q(E) {
    if (_) {
      if (_.destroyed) return !1;
      if (!_.write(E)) {
        if (!N)
          ((N = setTimeout(() => {
            ((N = void 0), _?.destroy());
          }, ct)),
            N.unref());
        if (!R && _.writableLength > xe)
          ((R = setTimeout(() => {
            if (((R = void 0), _ && !_.destroyed && _.writableLength > xe))
              (ie(), _.destroy());
          }, ht)),
            R.unref());
      }
      return !0;
    }
    if (fe < 2 * MAX_FRAME_BYTES) (Ce.push(E), (fe += E.length));
    return !1;
  }
  function ie() {
    if (N) (clearTimeout(N), (N = void 0));
    if (R) (clearTimeout(R), (R = void 0));
  }
  function j(E, I, O) {
    if (y) return;
    if (((y = !0), (w = !0), U)) (clearTimeout(U), (U = void 0));
    (ie(), _?.destroy(), (_ = void 0));
    let L = v.end();
    if (L) g.emit(L);
    m.emit({ exitCode: E, signal: I, hostStderr: O });
  }
  function ge(E) {
    let I = readBoundedFile(getPtyHostStderrPath(e), 1048576)
      .then((x) => x ?? "")
      .catch(() => "");
    (I.then((x) => {
      let V = x.slice(0, 2000).trim();
      if (V.length > 0) logForDebugging(`[bg-pty] host crash: ${V}`, { level: "warn" });
      let Y = [...V.matchAll(/\bE[A-Z]{2,14}\b/g)].find(
        (_e) => !"/\\".includes(V[_e.index - 1] ?? "."),
      )?.[0];
      logEvent("tengu_bg_ptyhost_crash", {
        hadBreadcrumb: V.length > 0,
        hadHello: G,
        via: fromEnum(E),
        short: p,
        ...(Y && { stderr_errno: Y }),
      });
    }),
      sigtermThenKill(C ? [-t, C] : [-t], E !== "hung" ? void 0 : q),
      reapDetachedRepl(C, F));
    let O = getLauncherArgv().length > 0,
      L = O
        ? (x, V) =>
            void I.then(
              (Y) => j(x, V, Me(Y)),
              () => j(x, V),
            )
        : j;
    if (d) {
      let x = null;
      (d.exited.then(
        (V) => {
          ((x = { code: V, signal: d.signalCode ?? void 0 }), L(V, x.signal));
        },
        () => L(-1),
      ),
        setTimeout(() => j(x ? x.code : -1, x?.signal), 1000).unref());
      return;
    }
    if ((L(-1), O)) setTimeout(j, 1000, -1).unref();
  }
  function rt(E) {
    if (E.kind === FRAME_KIND_DATA) {
      if (!se) {
        let I = v.write(E.payload);
        if (ue) g.emit(I);
        else if (I.length > 0) {
          let O = (ee + I).replaceAll(DAEMON_DETACH_APC, ""),
            L = lt(O);
          ee = L > 0 ? O.slice(O.length - L) : "";
          let x = L > 0 ? O.slice(0, O.length - L) : O;
          if (x.length > 0) g.emit(x);
        }
      }
    } else if (E.ctrl.t === "hello") {
      if (G) ((se = !0), v.end(), (ee = ""));
      else oe(getPtyLateOutputPath(e)).catch(() => {});
      if (
        ((G = !0),
        (C = E.ctrl.replPid),
        (J = E.ctrl.version),
        (F = void 0),
        C > 1 && getCurrentPlatform() !== "windows")
      ) {
        let I = C;
        captureProcessStartTimeAsync(I).then((O) => {
          if (C !== I || y || w || O === void 0) return;
          ((F = O), K?.(C, O));
        });
      }
    } else if (E.ctrl.t === "live") {
      if (!ue) {
        if (((ue = !0), ee.length > 0)) (g.emit(ee), (ee = ""));
      }
      if (se) ((se = !1), k?.());
    } else if (E.ctrl.t === "exit") j(E.ctrl.code, E.ctrl.signal);
    else if (E.ctrl.t === "ping") Q(encodeControlFrame({ t: "pong" }));
    else if (E.ctrl.t === "auth-required")
      if (o)
        (logForDebugging(
          `[bg-pty] ${p ?? e}: host rejected auth token \u2014 roster ptyAuth poisoned; input is dead until the worker is re-keyed`,
          { level: "warn" },
        ),
          c?.());
      else
        logForDebugging(
          `[bg-pty] ${p ?? e}: host dropped input \u2014 DATA auth token missing (version skew; respawn the worker to re-key)`,
          { level: "warn" },
        );
  }
  function De() {
    if (w) return;
    let E = new ot(),
      I = !1;
    (E.on("error", (O) => {
      ((Te = A(O) === "ENOENT"), me());
    }),
      E.once("close", () => {
        if (_ === E) ((_ = void 0), ie());
        if (w) return;
        if (I && !y) {
          try {
            (process.kill(t, 0),
              logForDebugging("[bg-pty] dropped by host; reconnecting", { level: "debug" }),
              (B = dt),
              (D = 0),
              me());
            return;
          } catch {}
          ge("close");
          return;
        }
        me();
      }),
      E.once("connect", () => {
        ((I = !0), (D = 0), (B = 0), (_ = E), E.on("drain", ie));
        let O = getPtyHostStderrPath(e),
          L = `${O}.read`;
        if (
          (rename(O, L)
            .then(() => readBoundedFile(L, 1048576))
            .then((V) => {
              let Y = (V ?? "").slice(0, 2000).trim();
              if (Y.length > 0)
                logForDebugging(
                  `[bg-pty] pre-connect stderr:
${Y}`,
                  { level: "warn" },
                );
            })
            .catch(() => {})
            .finally(() => oe(L).catch(() => {})),
          Q(encodeControlFrame({ t: "pong" })),
          o)
        )
          Q(encodeControlFrame({ t: "auth", token: o }));
        for (let V of Ce.splice(0)) Q(V);
        fe = 0;
        let x = createFrameDecoder(rt, (V) => {
          (logForDebugging(`[bg-pty] frame error: ${V}`, { level: "warn" }), E.destroy());
        });
        E.on("data", x);
      }),
      E.connect(e));
  }
  function me() {
    if (w || T) return;
    try {
      process.kill(t, 0);
    } catch {
      ((w = !0),
        readBoundedFile(getPtyLateOutputPath(e), 8388608)
          .then((I) => I ?? "")
          .then((I) => {
            if (!G && I.length > 0) g.emit(I.replaceAll(DAEMON_DETACH_APC, ""));
            (oe(getPtyLateOutputPath(e)).catch(() => {}), ge("connect"));
          }));
      return;
    }
    if (B > 0 && --B === 0) {
      ge("hung");
      return;
    }
    if (s !== void 0 && Te && D >= 3)
      (logForDebugging(
        `[bg-pty] ${e}: ENOENT on adopt \u2014 sock file externally deleted; respawning`,
        { level: "warn" },
      ),
        logEvent("tengu_bg_adopt_sock_unlinked", {}),
        (D = Ne));
    if (D >= Ne) {
      logForDebugging(`[bg-pty] ${e}: ${D} connect attempts failed; treating host as dead`, {
        level: "warn",
      });
      let I = q && getProcessStartTime(t);
      if (t > 1 && (!q || !I || q === I))
        try {
          process.kill(-t, "SIGKILL");
        } catch {
          try {
            process.kill(t, "SIGKILL");
          } catch {}
        }
      ((w = !0),
        readBoundedFile(getPtyLateOutputPath(e), 8388608)
          .then((O) => O ?? "")
          .then((O) => {
            if (!G && O.length > 0) g.emit(O.replaceAll(DAEMON_DETACH_APC, ""));
            oe(getPtyLateOutputPath(e)).catch(() => {});
            let L = getLauncherArgv().length > 0,
              x = (V, Y) => {
                if (!L) {
                  j(V, Y);
                  return;
                }
                readBoundedFile(getPtyHostStderrPath(e), 1048576).then(
                  (_e) => j(V, Y, Me(_e ?? "")),
                  () => j(V, Y),
                );
              };
            if (d) {
              let V = null;
              (d.exited.then(
                (Y) => {
                  ((V = { code: Y, signal: d.signalCode ?? void 0 }),
                    x(Y, V.signal));
                },
                () => x(-1),
              ),
                setTimeout(() => j(V ? V.code : -1, V?.signal), 1000).unref());
            } else if ((x(-1), L)) setTimeout(j, 1000, -1).unref();
          }));
      return;
    }
    let E = Oe[Math.min(D, Oe.length - 1)];
    (D++,
      (T = setTimeout(() => {
        ((T = void 0), De());
      }, E)),
      T.unref());
  }
  return (
    De(),
    {
      pid: t,
      replPid: () => C,
      replVersion: () => J,
      onRepl: (E) => {
        if (((K = E), C > 1 && F !== void 0)) E(C, F);
      },
      onResume: (E) => {
        k = E;
      },
      write: (E) => {
        if (y) return;
        let I = Buffer.from(E, "utf8"),
          O = MAX_FRAME_BYTES - 1;
        for (let L = 0; L < I.length; L += O) Q(encodeDataFrame(I.subarray(L, L + O)));
      },
      resize: (E, I) => Q(encodeControlFrame({ t: "resize", cols: E, rows: I })),
      kill: (E) => {
        let I = E === "SIGKILL" ? "SIGKILL" : "SIGTERM",
          O = Q(encodeControlFrame({ t: "kill", sig: I }));
        if (t <= 1) return;
        if (getCurrentPlatform() === "windows" && I === "SIGTERM" && O) {
          if (U) clearTimeout(U);
          ((U = setTimeout(
            (L, x) => {
              if (!isSameProcess(L, q)) {
                x(-1);
                return;
              }
              try {
                process.kill(L, "SIGKILL");
              } catch {
                x(-1);
              }
            },
            5000,
            t,
            j,
          )),
            U.unref());
          return;
        }
        try {
          process.kill(-t, I);
        } catch {
          try {
            process.kill(t, I);
          } catch {
            j(-1);
          }
        }
        if ((reapDetachedRepl(C, F, I), I === "SIGTERM" && !y)) {
          if (U) clearTimeout(U);
          ((U = setTimeout(
            (L, x) => {
              if (!isSameProcess(L, q)) {
                x(-1);
                return;
              }
              reapDetachedRepl(C, F, "SIGKILL");
              try {
                process.kill(-L, "SIGKILL");
              } catch {
                try {
                  process.kill(L, "SIGKILL");
                } catch {
                  x(-1);
                }
              }
            },
            5000,
            t,
            j,
          )),
            U.unref());
        }
      },
      dispose: () => {
        if (((w = !0), T)) (clearTimeout(T), (T = void 0));
        if (U) (clearTimeout(U), (U = void 0));
        (ie(), _?.destroy(), (_ = void 0));
      },
      onData: (E) => ({ dispose: g.subscribe(E) }),
      onExit: (E) => ({ dispose: m.subscribe(E) }),
    }
  );
}
function Me(e) {
  return e
    .slice(0, 2000)
    .split(/\r?\n/)
    .map((t) => t.trim())
    .find((t) => t.length > 0);
}
function lt(e) {
  let t = Math.min(DAEMON_DETACH_APC.length - 1, e.length);
  for (let r = t; r > 0; r--) if (e.endsWith(DAEMON_DETACH_APC.slice(0, r))) return r;
  return 0;
}
import { Socket as ut } from "net";
var Ve = [100, 250, 500, 1000, 2000],
  Be = 30;
function He(e, t, r, s, p) {
  let d,
    o = !1,
    c = 0,
    g = !1,
    m;
  function k() {
    if (o) return;
    let _ = new ut(),
      w = !1;
    (_.on("error", () => v()),
      _.once("close", () => {
        if (d === _) d = void 0;
        if (o) return;
        if (w) r();
        v();
      }),
      _.once("connect", () => {
        ((w = !0),
          (c = 0),
          (g = !1),
          (d = _),
          _.write(
            jsonStringify({
              proto: BG_PROTO,
              role: "supervisor",
              supervisorPid: process.pid,
              auth: p,
            }) +
              `
`,
          ),
          s?.(),
          readStreamLines(_, (y) => {
            let D;
            try {
              D = jsonParse(y);
            } catch {
              return;
            }
            if (D && typeof D === "object" && "type" in D) t(D);
          }));
      }),
      _.connect(e));
  }
  function v() {
    if (o || m || g) return;
    if (c >= Be) {
      ((g = !0),
        logForDebugging(
          `[bg-rv] ${e}: ${c} connect attempts failed \u2014 giving up (pid-poll is liveness backstop)`,
          { level: "warn" },
        ),
        logEvent("tengu_bg_rv_connect_exhausted", { attempts: c }));
      return;
    }
    let _ = Ve[Math.min(c, Ve.length - 1)];
    (c++,
      (m = setTimeout(() => {
        ((m = void 0), k());
      }, _)),
      m.unref());
  }
  return (
    k(),
    {
      send(_) {
        if (!d || d.destroyed) {
          if (c >= Be) ((c = 0), (g = !1), v());
          return !1;
        }
        try {
          return (
            d.write(
              jsonStringify(_) +
                `
`,
            ),
            !0
          );
        } catch (w) {
          return (logForDebugging(`[bg-rv] send failed: ${String(w)}`), !1);
        }
      },
      close() {
        if (((o = !0), m)) clearTimeout(m);
        (d?.destroy(), (d = void 0));
      },
    }
  );
}
var _t = 1e4,
  Fe = 20,
  St = new Set([129, 143]);
function $e() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_revival_guard", !0);
}
var kt =
    "Continue from where you left off. Note: this session was automatically restarted after its process exited unexpectedly; the user has not sent a new message since the restart. Re-verify anything time-sensitive (branch state, running processes, prior partial work) before continuing.",
  vt = 3600000,
  Et = 3,
  Ge = 5000,
  wt = 300000,
  At = 60000,
  he = 200,
  We =
    "session ID already belongs to another conversation \u2014 open again to start with a new ID";
function YYt(e) {
  return `working directory no longer exists or is not accessible: ${e}`;
}
var ke = 5000,
  Ke = ke * 3,
  yt = 120000,
  Je = 120000,
  Rt = 300000,
  ze = { release: "2.1.213", commitMs: Date.UTC(2026, 6, 16, 18, 0, 5) },
  tt = ["local_bash", "in_process_teammate", "dream", "auto_mode_scan"],
  bt = 3600000,
  je = 4096;
function JYt() {
  return (e, t, r) => {
    let { cmd: s, prefixArgs: p } = resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 }),
      d = [
        s,
        ...p,
        "--bg-pty-host",
        r.ptySock,
        String(r.cols),
        String(r.rows),
        "--",
        e,
        ...t,
      ],
      o = {
        cwd: r.cwd,
        env: r.env,
        detached: !0,
        windowsHide: !0,
        ...Bs("agent"),
        ...(getCurrentPlatform() !== "windows" && { argv0: "claude bg-pty-host" }),
      },
      c;
    try {
      c = Bun.spawn(d, {
        ...o,
        stdio: ["ignore", "ignore", Bun.file(getPtyHostStderrPath(r.ptySock))],
      });
    } catch (g) {
      let m = A(g);
      if (m !== "ENOENT" && m !== "ENOSPC" && m !== "EACCES" && m !== "EROFS")
        throw g;
      logForDebugging(
        `bg: ptyHost stderr breadcrumb open failed (${m}) at ${getPtyHostStderrPath(r.ptySock)} \u2014 spawning with stderr discarded (crash diagnostics degraded): ${l(g)}`,
        { level: "warn" },
      );
      let { cgroup: k, ...v } = o;
      if (k !== void 0)
        logForDebugging(`bg: retrying ptyHost spawn without tool cgroup placement (${k})`, {
          level: "warn",
        });
      c = Bun.spawn(d, { ...v, stdio: ["ignore", "ignore", "ignore"] });
    }
    return (
      c.unref(),
      ae(r.ptySock, c.pid, { short: r.short, hostProc: c, auth: r.ptyAuth })
    );
  };
}
function Ye(e, t, r, s, p, d) {
  if (e.launch.mode === "exec") return e.launch.args.map(Fb);
  if (t > 1 && r) return normalizeCliArgPaths(["--resume", p ?? s, ...stripEnvironmentFlags(d)]);
  if (t > 1 && s !== e.sessionId) return normalizeCliArgPaths(["--session-id", s, ...stripEnvironmentFlags(d)]);
  if (e.launch.mode === "resume")
    return normalizeCliArgPaths([
      ...(e.launch.fork ? ["--session-id", e.sessionId, "--fork-session"] : []),
      "--resume",
      e.launch.transcriptPath ?? e.launch.sessionId,
      ...stripEnvironmentFlags(e.launch.flagArgs),
    ]);
  return normalizeCliArgPaths(stripEnvironmentFlags(e.launch.args));
}
function Xe(e, t, r, s, p) {
  let d = { ...process.env };
  if ((te(d), e.env)) te(e.env);
  let o = {
      ...d,
      ...(r && { CLAUDE_BG_AUTH_SNAPSHOT_PATH: r }),
      ...(isHoverRestEnabled() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_hover_rest", !1) && { CLAUDE_CODE_HOVER_REST: "1" }),
      ...(getCurrentPlatform() === "windows" && { CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: "1" }),
      ...e.env,
      CLAUDE_CODE_SESSION_KIND: "bg",
      CLAUDE_BG_BACKEND: "daemon",
      CLAUDE_BG_SOURCE: e.source,
      CLAUDE_JOB_DIR: t,
      CLAUDE_CODE_SESSION_NAME: e.seed?.name || e.seed?.intent || e.short,
      CLAUDE_BG_RENDEZVOUS_SOCK: s,
      FORCE_COLOR: "3",
      COLORTERM: "truecolor",
      BROWSER: "true",
    },
    c = Object.hasOwn(d, "PATH")
      ? "PATH"
      : Object.keys(d).find((m) => m.toUpperCase() === "PATH"),
    g = e.env?.PATH || (c ? d[c] : void 0);
  for (let m of Object.keys(o)) if (m.toUpperCase() === "PATH") delete o[m];
  if (g) o[c ?? "PATH"] = g;
  if (process.env.CLAUDE_CONFIG_DIR)
    o.CLAUDE_CONFIG_DIR = process.env.CLAUDE_CONFIG_DIR;
  for (let m of NON_INHERITED_ENV_VARS) if (!e.env?.[m]) delete o[m];
  if ((g4(o), removeBgDispatcherPlanEnvVars(o), !e.env?.CLAUDE_CODE_ENTRYPOINT)) removeGuiHostEntrypoint(o);
  if (e.isolation === "worktree") o.CLAUDE_BG_ISOLATION = "worktree";
  for (let m of le) if (!e.env?.[m]) delete o[m];
  for (let m of Object.keys(o))
    if (VERTEX_REGION_ENV_PREFIXES.some((k) => m.startsWith(k)) && !e.env?.[m]) delete o[m];
  if (hasHostManagedAuth(d) || E8(e)) {
    for (let v of API_KEY_ENV_VARS) delete o[v];
    if (E8(e) || Ie(d.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) clearAwsEnvVars(o, e.env);
    let m = getHostAuthEnvVarName(d);
    if (m) (te(o, [m]), delete o[m]);
    let k =
      e.env?.CLAUDE_CODE_HOST_CREDS_FILE ??
      (E8(e) ? d.CLAUDE_CODE_HOST_CREDS_FILE : void 0);
    if (k) o.CLAUDE_CODE_HOST_CREDS_FILE = k;
    for (let v of ALL_BASE_URL_ENV_VARS) delete o[v];
  } else {
    let m = new Set(),
      k = new Set(),
      v = new Set(),
      _ = !1,
      w = !1;
    for (let y of BASE_URL_ENV_GROUPS) {
      let D = y.selection === void 0 || Ie(o[y.selection]);
      if (
        o[y.endpoint] === d[y.endpoint] &&
        (!o[y.endpoint] || D) &&
        y.companions.every((T) => !SKIP_AUTH_ENV_VARS.includes(T) || Ie(o[T]) === Ie(d[T]))
      ) {
        if (o[y.endpoint]) {
          for (let T of y.companions) m.add(T);
          _ ||= re(d, y);
        }
        continue;
      }
      for (let T of [y.endpoint, ...y.companions])
        if ((k.add(T), o[y.endpoint] && o[T] !== d[T])) v.add(T);
      if (y.endpoint === "ANTHROPIC_BASE_URL" && d.ANTHROPIC_BASE_URL)
        delete o.ANTHROPIC_AUTH_TOKEN;
      else w ||= re(d, y);
    }
    for (let y of k) if (!m.has(y) || v.has(y)) delete o[y];
    if (w && !_) delete o.ANTHROPIC_AUTH_TOKEN;
  }
  if (p) ((o.CLAUDE_BG_RV_AUTH = p.rvAuth), (o.CLAUDE_BG_PTY_AUTH = p.ptyAuth));
  if (r) delete o.CLAUDE_CODE_OAUTH_TOKEN;
  if (e.launch.mode === "exec") {
    let m = BASE_URL_ENV_GROUPS.some((k) => re(o, k));
    for (let k of Object.keys(o))
      if (
        (k.startsWith("CLAUDE_") &&
          k !== "CLAUDE_JOB_DIR" &&
          k !== "CLAUDE_CONFIG_DIR" &&
          k !== "CLAUDE_BG_PTY_AUTH") ||
        k.startsWith("OTEL_")
      )
        delete o[k];
    if ((delete o.BROWSER, m)) delete o.ANTHROPIC_AUTH_TOKEN;
    for (let k of ALL_BASE_URL_ENV_VARS) delete o[k];
    o.CLAUDE_PTY_HOST_EXEC = "1";
  }
  return o;
}
function qe(e, t) {
  let r = process.env[PROCESS_WRAPPER_ENV_VAR];
  if (t.launch.mode === "exec" || r === void 0) delete e[PROCESS_WRAPPER_ENV_VAR];
  else e[PROCESS_WRAPPER_ENV_VAR] = r;
}
async function Ee(e, t) {
  if (!t || getCurrentPlatform() !== "macos") return;
  let r = getCredentialFilePath(e);
  try {
    return (
      await et(getDaemonAuthDir(), { recursive: !0, mode: 448 }),
      await writeFile(r, JSON.stringify(t), { mode: 384 }),
      r
    );
  } catch (s) {
    logForDebugging(`writeAuthSnapshot failed: ${l(s)}`, { level: "warn" });
    return;
  }
}
async function Ae(e, t) {
  if (getCurrentPlatform() === "windows") return;
  let r = getTokensFilePath(e);
  try {
    return (
      await et(getDaemonAuthDir(), { recursive: !0, mode: 448 }),
      await writeFile(r, JSON.stringify(t), { mode: 384 }),
      r
    );
  } catch (s) {
    logForDebugging(`writeSocketTokensFile failed: ${l(s)}`, { level: "warn" });
    return;
  }
}
var le = [
    ...MODEL_ENV_KEYS,
    ...PROVIDER_CONFIG_ENV_VARS,
    "CLAUDE_CODE_EXTRA_BODY",
    ...BASE_URL_ENV_VARS,
    ...SKIP_AUTH_ENV_VARS,
    "ANTHROPIC_CUSTOM_HEADERS",
    ...HOST_AUTH_ENV_VARS,
    "CLAUDE_CODE_HOST_CREDS_FILE",
  ],
  E8 = (e) => Ie(e.env?.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
  Tt = new Map(
    [...NON_INHERITED_ENV_VARS, ...le, ...ALL_BASE_URL_ENV_VARS, ...API_KEY_ENV_VARS, ...AWS_ENV_VARS].map((e) => [e.toUpperCase(), e]),
  );
function te(e, t = []) {
  if (getCurrentPlatform() !== "windows") return;
  let r = new Map(t.map((s) => [s.toUpperCase(), s]));
  for (let s of Object.keys(e)) {
    let p = s.toUpperCase(),
      d = Tt.get(p) ?? r.get(p);
    if (d === void 0 || d === s) continue;
    if (e[d] === void 0) e[d] = e[s];
    delete e[s];
  }
}
function re(e, t) {
  return (
    !!e[t.endpoint] &&
    (t.endpoint === "ANTHROPIC_BASE_URL" ||
      t.companions.some((r) => SKIP_AUTH_ENV_VARS.includes(r) && Ie(e[r])))
  );
}
function ye(e) {
  let t = e.inFlight?.kinds ?? [],
    r = isSettled(e) && t.length > 0 && t.every((p) => tt.includes(p)),
    s = (e.inFlight?.tasks ?? 0) - (e.inFlight?.drainableMonitors ?? 0);
  return (
    (e.inFlight?.queued ?? 0) > 0 || (s > 0 && !r) || t.includes("session_cron")
  );
}
function Ct(e) {
  if (!e) return null;
  if (isSettled(e)) return "settled";
  if (e.tempo === "active") return "active";
  if (ye(e)) return "inflight";
  return null;
}
function Ze(e, t) {
  let r = Ct(e);
  if (r === "settled" && t !== "missing-at-adopt")
    return e && ye(e) ? "inflight" : null;
  return r;
}
function Qe(e) {
  return e.kind === "retiring"
    ? `retiring:${e.reason}`
    : e.kind === "retired"
      ? `retired:${e.outcome}`
      : e.kind;
}
function It(e, t) {
  if (e.kind === "retired") return !1;
  switch (t.kind) {
    case "spawning":
      return e.kind === "upgrading" || e.kind === "running";
    case "running":
      return e.kind === "spawning";
    case "upgrading":
      return e.kind === "running";
    case "retiring":
      return !0;
    case "retired":
      return !0;
  }
}
class qW {
  dispatch;
  spawnPty;
  getAuthSnapshot;
  via;
  storageV5;
  credentials;
  record;
  onStream = Le();
  onState = Le();
  onSettle = Le();
  onRepaintDone = Le();
  attachers = new Map();
  lastInputAttacher;
  pty;
  procStart;
  replPid = 0;
  replProcStart;
  ptyCols = 200;
  ptyRows = 50;
  decModes = createDecModeTracker();
  execTracker;
  execLastLine;
  offData;
  offExit;
  ring = [];
  ringBytes = 0;
  ringSpawnMark = 0;
  attempt = 0;
  lastSpawnAt = 0;
  fastCrashStreak = 0;
  lastExitCause;
  lastExitExternalStop = !1;
  effectiveCwd;
  liveTranscriptPath;
  hostWokeAt;
  backoffTimer = null;
  pidPoll = null;
  rv;
  rvSockPath;
  ptySockPath;
  rvAuth = de(16).toString("hex");
  ptyAuth = de(16).toString("hex");
  authRekeyFired = !1;
  authRekeyCount = 0;
  pendingAuthRekey;
  rosterExtras = {};
  unverifiedSock;
  phase = { kind: "spawning" };
  workerReady = !1;
  sessionIdTakenLatch = !1;
  firedInteractiveMarks = [];
  bootedViaResume = !1;
  resizeDeferred = !1;
  lastInputAt;
  downgradeRefusalLogged = !1;
  deleteJobDirOnSettle = !1;
  get shouldDeleteJobDir() {
    return this.deleteJobDirOnSettle;
  }
  adoptedAt;
  lastRvHeartbeat;
  stalledLogged = !1;
  lastCheckPidAt = Date.now();
  replyChain = Promise.resolve();
  killOutcome = "killed";
  handoffKill = !1;
  get isKilling() {
    return this.phase.kind === "retiring" && this.phase.reason === "reap";
  }
  get isHandoffKill() {
    return this.handoffKill;
  }
  get isRetiring() {
    return this.phase.kind === "retiring" && this.phase.reason === "grace";
  }
  get isUpgrading() {
    return this.phase.kind === "upgrading";
  }
  get isBooting() {
    return (
      !this.record.outcome &&
      (this.phase.kind === "upgrading" || !this.workerReady)
    );
  }
  replayInteractiveMarksTo(e) {
    let t = this.attachers.get(e);
    if (!t || t.caps?.imark !== !0) return;
    for (let r of this.firedInteractiveMarks)
      t.deliver(interactiveMarkApc({ ...r, nonce: t.imarkNonce }));
  }
  get isVersionStale() {
    return (
      !!this.record.cliVersion &&
      this.record.cliVersion !==
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION
    );
  }
  get marksCapable() {
    if (this.isVersionStale) return !1;
    return this.bootedViaResume || this.firedInteractiveMarks.length > 0;
  }
  get bootingForAttachMetrics() {
    return (
      this.isBooting ||
      (this.marksCapable && this.firedInteractiveMarks.length === 0)
    );
  }
  get isUnverified() {
    return this.unverifiedSock !== void 0;
  }
  getPhase() {
    return this.phase;
  }
  get isTransitioning() {
    return this.phase.kind !== "running" || !this.pty || this.record.pid === 0;
  }
  get isDetached() {
    return this.phase.kind === "retiring" && this.phase.reason === "stop";
  }
  transitionTo(e) {
    if (!It(this.phase, e))
      return (
        logForDebugging(
          `[bg] illegal worker-phase transition ${Qe(this.phase)} \u2192 ${Qe(e)} for ${this.record.short}`,
          { level: "warn" },
        ),
        logEvent("tengu_bg_phase_illegal", {}),
        !1
      );
    return ((this.phase = e), !0);
  }
  shutdownWorker() {
    let e = this.rv?.send({ type: "shutdown" }) ?? !1;
    if (!e) this.sigtermWorker();
    else
      setTimeout(
        (t) => {
          let r = t.phase;
          if (
            (r.kind === "upgrading" ||
              (r.kind === "retiring" && r.reason === "grace")) &&
            !t.record.outcome
          )
            t.sigtermWorker();
        },
        5000,
        this,
      ).unref();
    return e;
  }
  noteDowngradeRefused(e) {
    if (this.downgradeRefusalLogged || !this.record.cliVersion) return;
    ((this.downgradeRefusalLogged = !0),
      logEvent("tengu_bg_respawn_downgrade_refused", {
        short: bgShort(this.dispatch.short),
        trigger: fromEnum(e),
        worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
      }));
  }
  async respawnIfIdleStale(e, t = "sweep") {
    if (this.dispatch.launch.mode === "exec")
      return { respawned: !1, reason: "not-stale" };
    if (this.isTransitioning) return { respawned: !1, reason: "in-progress" };
    if (this.record.outcome) return { respawned: !1, reason: "no-state" };
    if (
      this.record.cliVersion &&
      isVersionGreater(
        this.record.cliVersion,
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      )
    )
      return (
        this.noteDowngradeRefused(t),
        { respawned: !1, reason: "not-stale" }
      );
    if (
      areVersionTargetsDifferent(
        this.record.cliVersion,
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      )
    )
      return { respawned: !1, reason: "not-stale" };
    if (this.attachers.size > 0) return { respawned: !1, reason: "attached" };
    if (!this.isVersionStale) return { respawned: !1, reason: "not-stale" };
    if (
      t !== "attach" &&
      this.lastInputAt &&
      Date.now() - this.lastInputAt < bt
    )
      return { respawned: !1, reason: "busy" };
    let r = Date.now(),
      s = await readJobState(getJobDir(this.dispatch.short), this.storageV5);
    if (this.isTransitioning) return { respawned: !1, reason: "in-progress" };
    if (this.record.outcome) return { respawned: !1, reason: "no-state" };
    if (this.attachers.size > 0) return { respawned: !1, reason: "attached" };
    if (this.lastInputAt && this.lastInputAt >= r)
      return { respawned: !1, reason: "busy" };
    if (!s) return { respawned: !1, reason: "no-state" };
    if (
      t !== "attach" &&
      !isSettled(s) &&
      this.adoptedAt &&
      Date.now() - this.adoptedAt < Je
    )
      return { respawned: !1, reason: "busy" };
    if (isSettled(s) && t === "sweep" && !e?.has(this.dispatch.short))
      return { respawned: !1, reason: "settled" };
    if (
      !isSettled(s) &&
      s.tempo !== "idle" &&
      !(this.isParkedIdleFork(s) && s.inFlight !== void 0)
    )
      return { respawned: !1, reason: "busy" };
    if (ye(s)) return { respawned: !1, reason: "inflight" };
    if (!this.transitionTo({ kind: "upgrading" }))
      return { respawned: !1, reason: "in-progress" };
    return (
      this.onState.emit({ pid: this.record.pid }),
      logEvent("tengu_bg_respawn_stale", {
        short: bgShort(this.dispatch.short),
        rvSent: this.shutdownWorker(),
        trigger: fromEnum(t),
        worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
      }),
      { respawned: !0 }
    );
  }
  isParkedIdleFork(e) {
    return (
      (satisfiesVersionRequirement(
        this.record.cliVersion,
        ze,
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      ) ||
        e.inFlight?.drainableMonitors !== void 0) &&
      e.state === "working" &&
      e.tempo === "blocked" &&
      e.needs === IDLE_NEEDS &&
      e.interactiveLineage === !0
    );
  }
  async retireIfSettled(e, t, r = e) {
    if (this.isTransitioning) return { retired: !1, reason: "in-progress" };
    if (this.record.outcome) return { retired: !1, reason: "no-state" };
    if (this.attachers.size > 0) return { retired: !1, reason: "attached" };
    if (E8(this.dispatch)) return { retired: !1, reason: "host-managed" };
    if (t?.has(this.dispatch.short)) return { retired: !1, reason: "pinned" };
    if (this.adoptedAt && Date.now() - this.adoptedAt < Je)
      return { retired: !1, reason: "recent-adopt" };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e)
      return { retired: !1, reason: "recent-input" };
    let s = await readJobState(getJobDir(this.dispatch.short), this.storageV5);
    if (this.isTransitioning || this.attachers.size > 0)
      return { retired: !1, reason: "in-progress" };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e)
      return { retired: !1, reason: "recent-input" };
    if (!s) {
      if (
        this.dispatch.source === "spare" &&
        Date.now() - this.dispatch.createdAt > e
      ) {
        if (!this.transitionTo({ kind: "retiring", reason: "grace" }))
          return { retired: !1, reason: "in-progress" };
        let T = Date.now() - this.dispatch.createdAt;
        return (
          logEvent("tengu_bg_retired", {
            short: bgShort(this.dispatch.short),
            rvSent: this.shutdownWorker(),
            settledForMs: T,
            state: S("stale-spare"),
            cause: S("stale-spare"),
            worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
          }),
          { retired: !0, cause: "stale-spare", idleMs: T }
        );
      }
      return { retired: !1, reason: "no-state" };
    }
    if (
      this.dispatch.source !== "shell" &&
      !s.name &&
      !s.intent &&
      !s.worktreePath &&
      s.template === "bg" &&
      s.state === "working" &&
      s.tempo === "blocked" &&
      !((s.inFlight?.tasks ?? 0) > 0)
    ) {
      let T = Date.parse(s.createdAt),
        U = Date.parse(s.updatedAt),
        N = Date.now() - (U > T ? U : T);
      if (N < Rt) return { retired: !1, reason: "empty-idle-grace" };
      if (!this.transitionTo({ kind: "retiring", reason: "grace" }))
        return { retired: !1, reason: "in-progress" };
      return (
        (this.deleteJobDirOnSettle = !0),
        logEvent("tengu_bg_retired", {
          short: bgShort(this.dispatch.short),
          rvSent: this.shutdownWorker(),
          settledForMs: N,
          state: S("empty-idle"),
          cause: S("empty-idle"),
          worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
        }),
        { retired: !0, cause: "empty-idle", idleMs: N }
      );
    }
    let p = this.isParkedIdleFork(s),
      d =
        isSettled(s) ||
        (this.dispatch.launch.mode !== "exec" &&
          (s.tempo === "idle" ||
            (s.state === "blocked" && s.tempo === "blocked") ||
            p)),
      o = Date.parse(s.updatedAt),
      c =
        s.tempo === "blocked" &&
        s.state !== "blocked" &&
        s.needs !== void 0 &&
        s.needs !== IDLE_NEEDS,
      g =
        this.isVersionStale &&
        !(
          this.record.cliVersion &&
          isVersionGreater(
            this.record.cliVersion,
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION,
          )
        ) &&
        !areVersionTargetsDifferent(
          this.record.cliVersion,
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
        ) &&
        this.dispatch.launch.mode !== "exec" &&
        s.tempo !== "active" &&
        !c &&
        !s.routine &&
        (s.inFlight?.tasks ?? 0) === 0 &&
        (s.inFlight?.queued ?? 0) === 0 &&
        !(s.inFlight?.kinds ?? []).includes("session_cron") &&
        o < Date.now() - ABANDONED_WORKER_MS;
    if (!d && !g) return { retired: !1, reason: "not-settled" };
    let m = s.inFlight?.kinds ?? [],
      k = isSettled(s) && m.length > 0 && m.every((T) => tt.includes(T)),
      v =
        s.interactiveLineage === !0 &&
        satisfiesVersionRequirement(
          this.record.cliVersion,
          ze,
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
        ),
      _ = g && !v ? 0 : 1;
    if ((s.inFlight?.queued ?? _) > 0 || ((s.inFlight?.tasks ?? _) > 0 && !k))
      return { retired: !1, reason: "inflight" };
    if (m.includes("session_cron"))
      return { retired: !1, reason: "session-cron" };
    if (s.routine) return { retired: !1, reason: "routine" };
    let w = s.bridgeSessionId ? Math.max(e, r) : e,
      y = s.updatedAt && Date.now() - Date.parse(s.updatedAt);
    if (!y || y < w) return { retired: !1, reason: "grace" };
    if (!this.transitionTo({ kind: "retiring", reason: "grace" }))
      return { retired: !1, reason: "in-progress" };
    let D = s.inFlight?.tasks !== void 0 && s.inFlight.queued !== void 0,
      B = !d || !D ? "abandoned-stale" : isSettled(s) ? "settled" : "idle-prompt";
    return (
      logEvent("tengu_bg_retired", {
        short: bgShort(this.dispatch.short),
        rvSent: this.shutdownWorker(),
        settledForMs: y,
        bridged: !!s.bridgeSessionId,
        detritusOnly: k,
        state: fromJobState(s.state),
        cause: fromEnum(B),
        worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
      }),
      { retired: !0, cause: B, idleMs: y }
    );
  }
  sigtermWorker() {
    try {
      this.pty?.kill("SIGTERM");
    } catch {}
  }
  onPtyAuthRequired() {
    let e = this.dispatch.launch.mode;
    if ((logEvent("tengu_bg_pty_auth_mismatch", { mode: fromEnum(e) }), e === "exec")) {
      logForDebugging(
        `[bg] exec worker ${this.dispatch.short}: ptyHost rejected auth token \u2014 roster ptyAuth poisoned; input is dead until re-dispatch (exec workers are never auto-respawned)`,
        { level: "warn" },
      );
      return;
    }
    this.rekeyForAuthMismatch("pty-auth-required");
  }
  rekeyForAuthMismatch(e) {
    if (
      this.authRekeyFired ||
      this.authRekeyCount >= Et ||
      this.phase.kind !== "running" ||
      this.record.outcome ||
      this.dispatch.launch.mode === "exec"
    ) {
      logForDebugging(
        `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 not re-keying ` +
          `(via=${this.via} phase=${this.phase.kind} mode=${this.dispatch.launch.mode} fired=${this.authRekeyFired} count=${this.authRekeyCount})`,
        { level: "warn" },
      );
      return;
    }
    ((this.authRekeyFired = !0),
      readJobState(getJobDir(this.dispatch.short), this.storageV5).then((t) => {
        let r = Ze(t, e);
        if (r === "settled") {
          ((this.authRekeyFired = !1),
            logEvent("tengu_bg_adopt_token_lost_respawn", {
              source: fromEnum(e),
              deferred: !1,
              skipped: S("settled"),
            }),
            logForDebugging(
              `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 worker already settled; leaving to retireIfSettled`,
              { level: "warn" },
            ));
          return;
        }
        if (r !== null) {
          (logEvent("tengu_bg_adopt_token_lost_respawn", {
            source: fromEnum(e),
            deferred: !0,
            reason: fromEnum(r),
          }),
            logForDebugging(
              `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 ` +
                (r === "active"
                  ? "worker is mid-turn"
                  : "worker has non-resumable in-flight work") +
                "; deferring re-key respawn until safe",
              { level: "warn" },
            ),
            (this.pendingAuthRekey = e));
          return;
        }
        (logEvent("tengu_bg_adopt_token_lost_respawn", { source: fromEnum(e), deferred: !1 }),
          logForDebugging(
            `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 respawning to re-key (--resume preserves the session)`,
            { level: "warn" },
          ),
          this.fireAuthRekey());
      }));
  }
  fireAuthRekey() {
    if (
      ((this.pendingAuthRekey = void 0),
      this.phase.kind !== "running" || this.record.outcome)
    )
      return;
    if (!this.transitionTo({ kind: "upgrading" })) return;
    (this.authRekeyCount++,
      this.onState.emit({ pid: this.record.pid }),
      this.sigtermWorker());
  }
  constructor(e, t, r, s, p, d, o) {
    this.dispatch = e;
    this.spawnPty = t;
    this.getAuthSnapshot = r;
    this.via = s;
    this.storageV5 = d;
    this.credentials = o;
    if (
      ((this.record = {
        short: e.short,
        nonce: e.nonce,
        sessionId: e.sessionId,
        pid: 0,
        attempt: 0,
        startedAt: Date.now(),
        createdAt: e.createdAt,
        cwd: e.cwd,
        backend: "daemon",
        tempo: "active",
        state: "starting",
        detail: "",
        intent: e.seed?.intent ?? "",
        name: e.seed?.name,
        agent: e.agent,
        routine: e.routine,
        worktreePath: e.worktree?.path,
        cliVersion: {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
        source: e.source,
        ...p,
      }),
      e.cols)
    )
      this.ptyCols = e.cols;
    if (e.rows) this.ptyRows = e.rows;
  }
  static spawn(e, t, r, s, p, d) {
    let o = new qW(e, t ?? JYt(), r, "cold", void 0, p, d);
    if (s?.afterUpgrade)
      return (
        (o.attempt = 1),
        o
          .buildBridgeReattachEnvFromState()
          .then((c) => o.doSpawn(c, !0))
          .catch(logError),
        o
      );
    return (o.doSpawn(e.reattachEnv).catch(logError), o);
  }
  static claim(e, t) {
    let r = new qW(
      e,
      t.spawnPty,
      t.getAuthSnapshot,
      "spare",
      {
        pid: t.pid,
        attempt: 1,
        state: "running",
        cliVersion: {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      },
      t.storageV5,
      t.credentials,
    );
    if (
      ((r.attempt = 1),
      (r.bootedViaResume =
        e.launch.mode !== "exec" &&
        (e.launch.restoresTranscript ?? e.launch.mode === "resume")),
      (r.ptySockPath = t.ptySockPath),
      (r.rvSockPath = getRendezvousSocketPath(e.short)),
      t.ptyAuth)
    )
      r.ptyAuth = t.ptyAuth;
    return (
      r.wirePty(ae(t.ptySockPath, t.pid, { short: e.short, auth: r.ptyAuth })),
      r.resize(e.cols ?? 200, e.rows ?? 50),
      r.connectRv(),
      getProcessStartTimeAsync(t.pid, { skipCache: !0 }).then((s) => {
        if (r.record.pid !== t.pid || r.isDetached || r.record.outcome) return;
        if (s) r.procStart = s;
        r.patch({ pid: t.pid });
      }),
      r
    );
  }
  socketAuth() {
    return (
      (this.rvAuth ??= de(16).toString("hex")),
      (this.ptyAuth ??= de(16).toString("hex")),
      { rvAuth: this.rvAuth, ptyAuth: this.ptyAuth }
    );
  }
  static buildClaimFrame(e, t, r) {
    let s = getJobDir(e.short),
      p = Xe(e, s, t, getRendezvousSocketPath(e.short), r);
    if ((delete p.CLAUDE_BG_PTY_AUTH, e.reattachEnv))
      Object.assign(p, e.reattachEnv);
    (g4(p), qe(p, e));
    let d = Ye(e, 1, !1, e.sessionId, void 0, e.respawnFlags);
    return { env: p, argv: d };
  }
  static async adopt(e, t, r, s, p, d) {
    if (t.dispatch.env) {
      for (let g of Object.keys(t.dispatch.env))
        if (
          g.toUpperCase() === "PATH" ||
          g.toUpperCase() === "CLAUDE_CODE_EXTRA_BODY" ||
          ALL_BASE_URL_ENV_VARS.includes(g.toUpperCase())
        )
          delete t.dispatch.env[g];
    }
    if (!isProcessRunning(t.pid)) return null;
    let o = await getProcessStartTimeAsync(t.pid, { skipCache: !0 });
    if (o && t.procStart !== o) return null;
    let c = new qW(
      t.dispatch,
      r,
      s,
      "adopted",
      {
        pid: t.pid,
        attempt: t.attempt,
        startedAt: t.startedAt,
        messagingSock: t.messagingSock,
        state: "adopted",
        detail: "adopted from previous supervisor",
        cliVersion: t.cliVersion,
        ...(t.ptySock ? {} : { legacy: !0 }),
      },
      p,
      d,
    );
    if (
      ((c.attempt = t.attempt),
      (c.procStart = t.procStart),
      (c.rosterExtras = rosterEntryExtras(t)),
      (c.workerReady = !0),
      (c.adoptedAt = Date.now()),
      (c.rvSockPath = t.rendezvousSock),
      (c.ptySockPath = t.ptySock),
      (c.rvAuth = t.rvAuth),
      (c.ptyAuth = t.ptyAuth),
      c.dispatch.launch.mode === "exec")
    )
      ((c.execTracker = Se(getJobDir(c.dispatch.short), c.storageV5)),
        (c.workerReady = !0));
    if (t.ptySock)
      (c.wirePty(
        ae(t.ptySock, t.pid, {
          procStart: c.procStart,
          short: c.dispatch.short,
          auth: c.ptyAuth,
          onAuthRequired: () => c.onPtyAuthRequired(),
        }),
      ),
        (c.ptyCols = 0),
        c.seedFocus(!1));
    if (t.decModes) c.decModes.seed(t.decModes);
    if (t.firedInteractiveMarks)
      c.firedInteractiveMarks = t.firedInteractiveMarks.slice(0, 2);
    if (
      ((c.replPid = t.replPid ?? 0),
      (c.replProcStart = t.replProcStart),
      (c.bootedViaResume =
        t.dispatch.launch.mode !== "exec" &&
        (t.dispatch.launch.restoresTranscript ??
          t.dispatch.launch.mode === "resume")),
      c.connectRv(),
      t.pendingRespawn === "upgrade" &&
        !(
          t.cliVersion &&
          isVersionGreater(
            t.cliVersion,
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION,
          )
        ) &&
        !areVersionTargetsDifferent(
          t.cliVersion,
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
        ))
    )
      (c.transitionTo({ kind: "upgrading" }),
        setTimeout(
          (g) => {
            if (g.phase.kind === "upgrading" && !g.record.outcome)
              g.sigtermWorker();
          },
          5000,
          c,
        ).unref());
    if (
      c.dispatch.launch.mode !== "exec" &&
      t.ptySock &&
      t.cliVersion &&
      (t.rvAuth === void 0 || t.ptyAuth === void 0)
    )
      return (
        logForDebugging(
          `[bg] adopt ${c.dispatch.short}: roster rvAuth/ptyAuth missing for token-era worker \u2014 schema-skewed daemon stripped them`,
          { level: "warn" },
        ),
        c.rekeyForAuthMismatch("missing-at-adopt"),
        c
      );
    return c;
  }
  static unverified(e, t, r, s) {
    let p = new qW(
      t.dispatch,
      void 0,
      void 0,
      "adopted",
      {
        pid: t.pid,
        attempt: t.attempt,
        startedAt: t.startedAt,
        messagingSock: t.messagingSock,
        state: "adopted",
        detail: "adopted (pid unverifiable; tracking via pty.sock)",
        cliVersion: t.cliVersion,
      },
      r,
      s,
    );
    if (
      ((p.attempt = t.attempt),
      (p.procStart = t.procStart),
      (p.rosterExtras = rosterEntryExtras(t)),
      t.firedInteractiveMarks)
    )
      p.firedInteractiveMarks = t.firedInteractiveMarks.slice(0, 2);
    return (
      (p.replPid = t.replPid ?? 0),
      (p.replProcStart = t.replProcStart),
      (p.bootedViaResume =
        t.dispatch.launch.mode !== "exec" &&
        (t.dispatch.launch.restoresTranscript ??
          t.dispatch.launch.mode === "resume")),
      (p.rvSockPath = t.rendezvousSock),
      (p.ptySockPath = t.ptySock),
      (p.rvAuth = t.rvAuth),
      (p.ptyAuth = t.ptyAuth),
      (p.unverifiedSock = t.ptySock),
      (p.lastInputAt = Date.now()),
      (p.pidPoll = setInterval(
        (d) => {
          if (d.record.outcome || !d.unverifiedSock) return;
          pingPtySocket(d.unverifiedSock).then((o) => {
            if (o || d.record.outcome || d.phase.kind !== "spawning") return;
            d.settle("crashed");
          });
        },
        ke,
        p,
      )),
      p.pidPoll.unref(),
      logEvent("tengu_bg_adopt_unverified", { short: bgShort(e) }),
      p
    );
  }
  tail(e) {
    return e > 0 ? this.ring.slice(-e) : [];
  }
  ringSnapshot() {
    return this.ring;
  }
  get sessionIdTaken() {
    return this.sessionIdTakenLatch;
  }
  preInitErrorTail() {
    let e = stripAnsi(this.ring.slice(this.ringSpawnMark).join(""))
      .replace(/\s+/g, " ")
      .trim();
    if (!e) return;
    return e.length > he ? `\u2026${e.slice(-he)}` : e;
  }
  decModeSnapshot() {
    return this.decModes.snapshot();
  }
  write(e) {
    ((this.lastInputAt = Date.now()), this.pty?.write(e));
  }
  noteActivity() {
    this.lastInputAt = Date.now();
  }
  shiftGraceClocksForward(e) {
    if (e <= 0) return;
    if (((this.hostWokeAt = Date.now()), this.adoptedAt !== void 0))
      this.adoptedAt += e;
    if (this.lastInputAt !== void 0) this.lastInputAt += e;
  }
  seedFocus(e) {
    if (this.dispatch.launch.mode === "exec") return;
    this.pty?.write(e ? FOCUS_IN_SEQUENCE : FOCUS_OUT_SEQUENCE);
  }
  resize(e, t) {
    if (
      ((this.ptyCols = e),
      (this.ptyRows = t),
      getCurrentPlatform() === "windows" && !this.workerReady)
    ) {
      this.resizeDeferred = !0;
      return;
    }
    try {
      this.pty?.resize(e, t);
    } catch {}
  }
  signalPtyPgrp() {
    if (getCurrentPlatform() === "windows" || !this.record.pid) return;
    setTimeout(
      (e) => {
        try {
          process.kill(-e, "SIGWINCH");
        } catch {}
      },
      15,
      this.record.pid,
    );
  }
  resizeForRepaint(e, t) {
    if (e !== this.ptyCols || t !== this.ptyRows)
      return (
        this.resize(e, t),
        this.signalPtyPgrp(),
        this.rv?.send({ type: "repaint" }),
        () => {}
      );
    let r = this.rv?.send({ type: "repaint" }) === !0,
      s = () => {},
      p = setTimeout(
        (d, o) => {
          if ((s(), this.ptyCols !== d || this.ptyRows !== o)) return;
          let c = Math.max(2, d - 1);
          (this.resize(c, o),
            this.signalPtyPgrp(),
            setTimeout(
              (g, m, k) => {
                if (this.ptyCols === k && this.ptyRows === m)
                  (this.resize(g, m), this.signalPtyPgrp());
              },
              30,
              d,
              o,
              c,
            ));
        },
        r ? 50 : 0,
        e,
        t,
      );
    if (r)
      s = this.onRepaintDone.subscribe(() => {
        (s(), clearTimeout(p));
      });
    return () => {
      (s(), clearTimeout(p));
    };
  }
  rosterEntry() {
    return {
      ...this.rosterExtras,
      pid: this.record.pid,
      procStart: this.procStart,
      sessionId: this.record.sessionId,
      rendezvousSock: this.rvSockPath ?? getRendezvousSocketPath(this.dispatch.short),
      ptySock: this.record.legacy
        ? void 0
        : (this.ptySockPath ?? getPtySocketPath(this.dispatch.short)),
      messagingSock: this.record.messagingSock,
      cliVersion: this.record.cliVersion,
      startedAt: this.record.startedAt,
      attempt: this.attempt,
      cwd: this.dispatch.cwd,
      worktreePath: this.dispatch.worktree?.path,
      dispatch: this.cappedDispatch(),
      pendingRespawn: this.phase.kind === "upgrading" ? "upgrade" : void 0,
      decModes: this.decModes.snapshot(),
      firedInteractiveMarks:
        this.firedInteractiveMarks.length > 0
          ? this.firedInteractiveMarks.slice(0, 2)
          : void 0,
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth,
      replPid: this.replPid > 1 ? this.replPid : void 0,
      replProcStart: this.replPid > 1 ? this.replProcStart : void 0,
    };
  }
  cappedDispatch() {
    return JSON.parse(
      JSON.stringify(this.dispatch, (e, t) => {
        if (
          e === "reattachEnv" ||
          e === "attachStallRespawns" ||
          e === "CLAUDE_CODE_HOST_CREDS_FILE" ||
          e === "PATH" ||
          e.toUpperCase() === "CLAUDE_CODE_EXTRA_BODY" ||
          ALL_BASE_URL_ENV_VARS.includes(e.toUpperCase())
        )
          return;
        if (typeof t === "string" && t.length > je) return t.slice(0, je);
        return t;
      }),
    );
  }
  async reply(e) {
    ((this.lastInputAt = Date.now()), (this.lastInputAttacher = void 0));
    let t = await readJobState(getJobDir(this.dispatch.short), this.storageV5);
    if (
      (!t || (t.tempo ?? this.record.tempo) === "blocked") &&
      this.rv?.send({ type: "reply", text: e })
    )
      return !0;
    if (this.pty) {
      let r = this.dispatch.launch.mode !== "exec";
      return (
        (this.replyChain = this.replyChain.then(
          () =>
            new Promise((s) => {
              (this.pty?.write(r ? `\x1B[200~${e}\x1B[201~` : e),
                setTimeout(
                  (p) => {
                    (this.pty?.write("\r"), p());
                  },
                  10,
                  s,
                ));
            }),
        )),
        !0
      );
    }
    return this.rv?.send({ type: "reply", text: e }) ?? !1;
  }
  sendAttacherCaps(e) {
    return this.rv?.send({ type: "attacher-caps", caps: e }) ?? !1;
  }
  kill(e = "SIGTERM", t = "killed", r) {
    if (this.phase.kind === "retired") return;
    if (
      ((this.killOutcome = t === "failed" ? "failed" : "killed"),
      (this.handoffKill = this.handoffKill || t === "handoff"),
      r)
    )
      this.patch({ detail: r });
    if (
      (this.transitionTo({ kind: "retiring", reason: "reap" }),
      this.backoffTimer)
    )
      (clearTimeout(this.backoffTimer), (this.backoffTimer = null));
    if (this.unverifiedSock) {
      killPtySocket(this.unverifiedSock, this.storageV5).finally(() =>
        this.settle(this.killOutcome),
      );
      return;
    }
    if (this.pty)
      try {
        this.pty.kill(e);
      } catch {}
    else if (this.record.pid && !this.pidRecycled())
      try {
        process.kill(-this.record.pid, e);
      } catch {
        try {
          process.kill(this.record.pid, e);
        } catch {}
      }
    if (!this.pty) this.settle(this.killOutcome);
  }
  stop() {
    if (this.phase.kind === "retiring" && this.phase.reason === "reap")
      this.settle(this.killOutcome);
    else if (this.phase.kind === "retiring" && this.phase.reason === "grace")
      this.settle("done");
    else if (this.phase.kind !== "retired")
      this.transitionTo({ kind: "retiring", reason: "stop" });
    if (this.backoffTimer)
      (clearTimeout(this.backoffTimer), (this.backoffTimer = null));
    (this.clearLiveness(),
      this.offData?.dispose(),
      this.offExit?.dispose(),
      this.execTracker?.dispose(),
      (this.execTracker = void 0),
      this.pty?.dispose(),
      (this.pty = void 0));
  }
  async doSpawn(e, t = !1) {
    if (
      (this.attempt++,
      (this.authRekeyFired = !1),
      (this.pendingAuthRekey = void 0),
      (this.workerReady = !1),
      (this.firedInteractiveMarks = []),
      this.attempt > 1)
    )
      this.liveTranscriptPath = null;
    ((this.resizeDeferred = !1),
      (this.ringSpawnMark = this.ring.length),
      (this.lastSpawnAt = Date.now()),
      (this.lastExitExternalStop = !1));
    let r = this.dispatch,
      s = getJobDir(r.short);
    await ensureJobTmpDir(r.short, this.storageV5).catch(() => {});
    let p = getLauncherConfigError();
    if (p) {
      (logEvent("tengu_bg_launcher_worker_refused", { attempt: this.attempt }),
        logFeatureBad("agent_launcher", "worker_refused"),
        this.patch({ state: "crashed", detail: p }));
      let R = this.dimNotice(p);
      return (this.pushRing(R), this.onStream.emit(R), this.settle("crashed"));
    }
    let d =
        r.launch.mode === "exec" || E8(r)
          ? void 0
          : await Ee(r.short, this.getAuthSnapshot?.()),
      o = await Ae(
        r.short,
        r.launch.mode === "exec"
          ? { ptyAuth: this.socketAuth().ptyAuth }
          : this.socketAuth(),
      );
    try {
      await ensureSocketDirsOwned(dirname(getPtyHostStderrPath(this.ptySockPath ?? getPtySocketPath(r.short))));
    } catch (R) {
      if (this.credentials)
        await Promise.all([
          o
            ? this.credentials.discardSpentCredentialFile(o).catch(() => {})
            : void 0,
          d
            ? this.credentials.discardSpentCredentialFile(d).catch(() => {})
            : void 0,
        ]);
      else
        await Promise.all([
          o ? ce(o).catch(() => {}) : void 0,
          d ? ce(d).catch(() => {}) : void 0,
        ]);
      if (this.record.outcome) return;
      if (A(R) === NOT_OWNED_ERROR_CODE) {
        let C = `worker socket directory is not owned by this user \u2014 ${l(R)}`;
        this.patch({ state: "crashed", detail: C });
        let F = this.dimNotice(C);
        return (
          this.pushRing(F),
          this.onStream.emit(F),
          this.settle("crashed")
        );
      }
      return this.scheduleRespawn(l(R));
    }
    await ce(getPtyHostStderrPath(this.ptySockPath ?? getPtySocketPath(r.short))).catch(() => {});
    let c = r.launch.mode === "resume" ? r.launch.sessionId : void 0,
      g = !1,
      m = !1,
      k = r.sessionId,
      v,
      { respawnFlags: _, cwd: w } = r,
      y = !1;
    if (this.attempt > 1) {
      let R = await readJobState(s, this.storageV5);
      ((k = R?.resumeSessionId ?? r.sessionId),
        (_ = R?.respawnFlags ?? r.respawnFlags),
        (w = R?.cwd ?? r.cwd),
        (y = R?.interactiveLineage === !0));
      let C = createTranscriptSource(createBackendHandle(this.storageV5)),
        F = await resolveJobTranscript(k, w, R?.linkScanPath, void 0, C);
      if (((g = F.hasMessages), g))
        ((v = F.path), (this.liveTranscriptPath = F.path));
      let K = c !== void 0 && isTranscriptFileResumeArg(c);
      if (
        ((m =
          !g &&
          c !== void 0 &&
          !(await resolveJobTranscript(K ? basename(c, ".jsonl") : c, w, K ? c : void 0, void 0, C))
            .hasMessages),
        !g)
      )
        await quarantineJobTranscript(F.path, C);
    }
    if (
      ((this.effectiveCwd = w),
      this.phase.kind === "retiring" ||
        this.phase.kind === "retired" ||
        this.record.outcome)
    ) {
      if (o)
        if (this.credentials)
          this.credentials.discardSpentCredentialFile(o).catch(() => {});
        else ce(o).catch(() => {});
      return;
    }
    if (m)
      return (
        this.patch({
          state: "crashed",
          detail: `source session ${c} not found`,
        }),
        this.settle("crashed")
      );
    if (!this.spawnPty)
      return (
        this.patch({
          state: "crashed",
          detail: "Bun.Terminal unavailable (running under Node?)",
        }),
        logEvent("tengu_bg_pty_unavailable", { short: bgShort(this.dispatch.short) }),
        this.settle("crashed")
      );
    let D = Ye(r, this.attempt, g, k, v, _);
    this.bootedViaResume =
      (r.launch.mode === "prompt" || r.launch.mode === "resume") &&
      (this.attempt === 1 || (!g && k === r.sessionId))
        ? (r.launch.restoresTranscript ?? D.includes("--resume"))
        : D.includes("--resume");
    let B = Xe(r, s, d, this.rvSockPath ?? getRendezvousSocketPath(r.short), this.socketAuth());
    if (this.attempt > 1 && g && !t) {
      if (((B.CLAUDE_CODE_RESUME_INTERRUPTED_TURN = "1"), $e())) {
        if (((B.CLAUDE_CODE_RESUME_PROMPT ??= kt), y))
          B.CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS ??= String(vt);
      }
    }
    if (this.attempt > 1 && !g && k !== r.sessionId)
      B.CLAUDE_BG_POST_CLEAR_RESPAWN = "1";
    if (e) Object.assign(B, e);
    if (o)
      (delete B.CLAUDE_BG_RV_AUTH,
        delete B.CLAUDE_BG_PTY_AUTH,
        (B.CLAUDE_BG_SOCKET_TOKENS_PATH = o));
    (g4(B), qe(B, r));
    let T = this.ptyCols || (r.cols ?? 200),
      U = this.ptyRows || (r.rows ?? 50),
      N;
    try {
      let { cmd: R, prefixArgs: C } =
        r.launch.mode === "exec"
          ? { cmd: Fb(r.launch.cmd), prefixArgs: [] }
          : resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 });
      N = this.spawnPty(R, [...C, ...D], {
        cols: T,
        rows: U,
        cwd: w,
        env: B,
        ptySock: this.ptySockPath ?? getPtySocketPath(r.short),
        short: r.short,
        ptyAuth: this.ptyAuth,
      });
    } catch (R) {
      let C = A(R),
        F = getLauncherArgv()[0];
      if (W(R)) {
        let K = await access(w).then(
          () => !0,
          () => !1,
        );
        if (this.record.outcome) return;
        if (!K) return this.settleCwdGone("cold", w);
        let J = F
          ? `launcher \`${F}\` was deleted or moved (ENOENT) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER, then run your command again`
          : r.launch.mode === "exec"
            ? `${r.launch.cmd}: command not found`
            : "daemon binary was deleted (upgrade in progress) \u2014 run your command again to use the new version";
        if (F)
          (logEvent("tengu_bg_launcher_worker_refused", { attempt: this.attempt }),
            logFeatureBad("agent_launcher", "worker_launcher_enoent"));
        else
          logEvent("tengu_bg_spawn_binary_gone", {
            short: bgShort(this.dispatch.short),
            attempt: this.attempt,
          });
        this.patch({ state: "crashed", detail: J });
        let G = this.dimNotice(J);
        return (
          this.pushRing(G),
          this.onStream.emit(G),
          this.settle("crashed")
        );
      }
      if (F && (C === "EACCES" || C === "EPERM")) {
        if (this.record.outcome) return;
        let K = `launcher \`${F}\` could not be executed (${C})`;
        (logEvent("tengu_bg_launcher_worker_refused", { attempt: this.attempt }),
          logFeatureBad(
            "agent_launcher",
            C === "EACCES" ? "worker_launcher_eacces" : "worker_launcher_eperm",
          ),
          this.patch({ state: "crashed", detail: K }));
        let J = this.dimNotice(K);
        return (
          this.pushRing(J),
          this.onStream.emit(J),
          this.settle("crashed")
        );
      }
      return this.scheduleRespawn(l(R));
    }
    if (r.launch.mode === "exec")
      (this.execTracker?.dispose(),
        (this.execTracker = Se(s, this.storageV5)),
        (this.workerReady = !0));
    if (getCurrentPlatform() === "windows") writeFile(getPtyPidFilePath(r.short), String(N.pid)).catch(() => {});
    (this.wirePty(N),
      this.rv?.close(),
      (this.rv = void 0),
      (this.lastRvHeartbeat = void 0),
      (this.stalledLogged = !1),
      this.connectRv(),
      this.patch({
        pid: N.pid,
        attempt: this.attempt,
        state: this.attempt > 1 ? "resuming" : "running",
        detail: "",
        cliVersion: {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      }),
      logEvent("tengu_bg_worker_spawn", {
        short: bgShort(this.dispatch.short),
        attempt: this.attempt,
        source: fromEnum(this.dispatch.source),
        launch_mode: fromEnum(this.dispatch.launch.mode),
      }),
      getProcessStartTimeAsync(N.pid, { skipCache: !0 }).then((R) => {
        if (
          !R ||
          this.record.pid !== N.pid ||
          this.isDetached ||
          this.record.outcome
        )
          return;
        ((this.procStart = R), this.patch({ pid: N.pid }));
      }));
  }
  wirePty(e) {
    ((this.pty = e),
      this.transitionTo({ kind: "running" }),
      (this.decModes = createDecModeTracker()),
      e.onResume?.(() => {
        this.rv?.send({ type: "repaint" });
      }),
      e.onRepl?.((r, s) => {
        if (!this.record.pid || this.record.outcome || this.isDetached) return;
        ((this.replPid = r),
          (this.replProcStart = s),
          this.onState.emit({ pid: this.record.pid }));
      }),
      (this.offData = e.onData((r) => {
        if (this.decModes.feed(r) && this.record.pid)
          this.onState.emit({ pid: this.record.pid });
        (this.execTracker?.feed(r),
          this.pushRing(r.includes(DAEMON_DETACH_APC) ? r.replaceAll(DAEMON_DETACH_APC, "") : r),
          this.onStream.emit(r));
      })));
    let t = !1;
    this.offExit = e.onExit(({ exitCode: r, signal: s, hostStderr: p }) => {
      if (t) return;
      ((t = !0),
        this.offData?.dispose(),
        (this.execLastLine = this.execTracker?.lastLine),
        this.execTracker?.dispose(),
        (this.execTracker = void 0),
        (this.pty = void 0),
        this.onExit(r, s, p));
    });
  }
  dimNotice(e) {
    return wrapDaemonHint(`\r
\x1B[2m[${e}]\x1B[0m\r
`);
  }
  pushRing(e) {
    if (
      (this.ring.push(e),
      (this.ringBytes += e.length),
      this.ringBytes > RING_BUFFER_MAX_BYTES * 1.25 && this.ring.length > 1)
    ) {
      let t = 0,
        r = 0;
      while (this.ringBytes - r > RING_BUFFER_MAX_BYTES && t < this.ring.length - 1)
        ((r += this.ring[t].length), t++);
      (this.ring.splice(0, t),
        (this.ringBytes -= r),
        (this.ringSpawnMark = Math.max(0, this.ringSpawnMark - t)));
    }
  }
  patch(e) {
    if (
      (Object.assign(this.record, e),
      this.onState.emit(e),
      this.pendingAuthRekey !== void 0 &&
        e.tempo !== void 0 &&
        e.tempo !== "active")
    ) {
      let t = this.pendingAuthRekey;
      readJobState(getJobDir(this.dispatch.short), this.storageV5).then((r) => {
        if (this.pendingAuthRekey !== t) return;
        let s = Ze(r, t);
        if (s === "settled") {
          ((this.pendingAuthRekey = void 0),
            (this.authRekeyFired = !1),
            logForDebugging(
              `[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${t}) dropped \u2014 worker settled; leaving to retireIfSettled`,
              { level: "warn" },
            ));
          return;
        }
        if (s !== null) return;
        (logForDebugging(
          `[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${t}) firing on tempo='${e.tempo}'`,
          { level: "warn" },
        ),
          this.fireAuthRekey());
      });
    }
  }
  onExit(e, t, r) {
    if (this.isDetached) return;
    if (this.phase.kind === "retired") return;
    let s = this.lastSpawnAt ? Date.now() - this.lastSpawnAt : void 0;
    if (Date.now() - this.lastCheckPidAt > Ke) this.hostWokeAt = Date.now();
    let p = this.hostWokeAt !== void 0 && Date.now() - this.hostWokeAt < At,
      d = !p && s !== void 0 && s < Ge && e !== 0;
    if (d) this.fastCrashStreak++;
    else this.fastCrashStreak = 0;
    let o = this.fastCrashStreak >= 3,
      c = this.workerReady && s !== void 0 && s >= wt;
    this.lastExitExternalStop = (t !== void 0 || St.has(e ?? -1)) && !p;
    let g = this.workerReady ? void 0 : this.preInitErrorTail(),
      m = getLauncherArgv()[0],
      k = r ? clipWithEllipsis(normalizeWhitespace(stripAnsi(r)), he) || void 0 : void 0,
      v =
        m && !this.workerReady && !g && k
          ? `(launch command: \`${m}\` \u2026): ${k}`
          : void 0,
      _ = !!m && e === 0 && !this.workerReady && s !== void 0 && s < FAST_CRASH_WINDOW_MS,
      w = e !== 0 ? readAndClearBgExitCause(getJobDir(this.dispatch.short)) : void 0,
      y = w ? readAndClearBgExitDetail(getJobDir(this.dispatch.short), w) : void 0,
      D = y ? clipWithEllipsis(normalizeWhitespace(stripAnsi(y)), he) || void 0 : void 0,
      B = !g && D ? `: ${D}` : "",
      T = d && !!w && w === this.lastExitCause;
    this.lastExitCause = d ? w : void 0;
    let U = !this.workerReady && w === BG_EXIT_CAUSE_SESSION_IN_USE,
      N = g ? ` \u2014 ${g}` : v ? ` \u2014 ${v}` : w ? ` \u2014 ${w}` : "",
      R = this.effectiveCwd ?? this.dispatch.cwd,
      C = !1;
    if (w === "setcwd")
      try {
        C = !statSync(R).isDirectory();
      } catch {
        C = !0;
      }
    let F =
        this.dispatch.launch.mode === "exec" &&
        (t === "SIGINT" || t === "SIGQUIT"),
      K;
    if (this.phase.kind === "retiring" && this.phase.reason === "reap")
      K = this.killOutcome;
    else if (this.phase.kind === "retiring" && this.phase.reason === "grace")
      K = "done";
    else if (this.phase.kind === "upgrading") K = void 0;
    else if (_) K = "crashed";
    else if (e === 0) K = "done";
    else if (this.dispatch.launch.mode === "exec") K = F ? "killed" : "crashed";
    else if (
      C ||
      U ||
      (!this.workerReady && (this.attempt >= 2 || g || v)) ||
      o ||
      T ||
      (!c && this.attempt >= Fe)
    )
      K = "crashed";
    if (
      (logEvent("tengu_bg_worker_exit", {
        short: bgShort(this.dispatch.short),
        code: e ?? void 0,
        signal: fromEnumOpt(t),
        attempt: this.attempt,
        procUptimeMs: s,
        source: fromEnum(this.dispatch.source),
        launch_mode: fromEnum(this.dispatch.launch.mode),
        outcome: fromEnumOpt(K),
        exitCause: lNn(w),
        worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
        worker_stale: this.isVersionStale,
      }),
      this.phase.kind === "retiring")
    )
      return this.settle(
        this.phase.reason === "reap" ? this.killOutcome : "done",
      );
    if (this.phase.kind === "upgrading") {
      (this.transitionTo({ kind: "spawning" }),
        (this.attempt = 1),
        (this.fastCrashStreak = 0),
        (this.lastExitCause = void 0),
        this.patch({ pid: 0, state: "starting", detail: "upgrading" }),
        (this.procStart = void 0),
        this.buildBridgeReattachEnvFromState()
          .then((G) => this.doSpawn(G, !0))
          .catch(logError));
      return;
    }
    if (_) {
      let G = `the launcher exited before Claude Code started \u2014 \`${m}\` must exec, not daemonize${v ? ` \u2014 ${v}` : ""}`;
      return (
        logEvent("tengu_bg_launcher_fork_and_exit", { attempt: this.attempt }),
        logFeatureBad("agent_launcher", "worker_fork_and_exit"),
        this.patch({ state: "crashed", detail: G }),
        this.settle("crashed")
      );
    }
    if (e === 0) {
      if (this.dispatch.launch.mode === "exec") {
        if (!this.execLastLine && this.ringBytes > 0)
          logEvent("tengu_bg_exec_no_lastline", { ring_bytes: this.ringBytes });
        this.patch({ detail: this.execLastLine || "(no output)" });
      }
      return this.settle("done");
    }
    let J = t ? `${t} (${e})` : `exit ${e}`;
    if (this.dispatch.launch.mode === "exec") {
      let G = this.execLastLine;
      return (
        this.patch({
          state: F ? "stopped" : "crashed",
          detail: G ? `${J} \u2014 ${G}` : `${J}${N}`,
        }),
        this.settle(F ? "killed" : "crashed")
      );
    }
    if (U) {
      ((this.sessionIdTakenLatch = !0),
        logEvent("tengu_bg_session_id_taken", {
          short: bgShort(this.dispatch.short),
          attempt: this.attempt,
          via: fromEnum(this.via),
          launch_mode: fromEnum(this.dispatch.launch.mode),
        }),
        this.patch({ state: "crashed", detail: We }));
      let G = this.dimNotice(We);
      return (this.pushRing(G), this.onStream.emit(G), this.settle("crashed"));
    }
    if (!this.workerReady && w?.startsWith("spare_postclaim:"))
      try {
        if (!statSync(this.dispatch.cwd).isDirectory())
          return this.settleCwdGone("spare");
      } catch {
        return this.settleCwdGone("spare");
      }
    if (C) return this.settleCwdGone("boot", R);
    if (!this.workerReady && (this.attempt >= 2 || g || v)) {
      let G =
        !t && isLowMemory()
          ? " \u2014 possibly low memory \u2014 free some up and retry"
          : "";
      return (
        this.patch({ state: "crashed", detail: `${J} before init${N || G}` }),
        this.settle("crashed")
      );
    }
    if (o || T)
      return (
        this.patch({
          state: "crashed",
          detail: T
            ? `${J} \xD7${this.attempt}${N}${B}`
            : `${J} within ${Ge / 1000}s of spawn \xD7${this.fastCrashStreak}${N}${B}`,
        }),
        this.settle("crashed")
      );
    if (c) this.attempt = 1;
    this.scheduleRespawn(`${J}${N}${B}`);
  }
  async doSpawnUnlessSettledOnDisk() {
    let e = $e()
      ? await readJobState(getJobDir(this.dispatch.short), this.storageV5).catch(() => {
          return;
        })
      : void 0;
    if (
      this.record.outcome ||
      this.phase.kind === "retiring" ||
      this.phase.kind === "retired"
    )
      return;
    if (e && isSettled(e) && !e.queuedPrompt) {
      logEvent("tengu_bg_respawn_suppressed", {
        short: bgShort(this.dispatch.short),
        reason: S("settled_on_disk"),
      });
      let t = terminalOutcome(e.state);
      return this.settle(
        t === "success" ? "done" : t === "failure" ? "failed" : "killed",
      );
    }
    if (e?.interactiveLineage && this.lastExitExternalStop)
      return (
        logEvent("tengu_bg_respawn_suppressed", {
          short: bgShort(this.dispatch.short),
          reason: S("no_task_contract"),
        }),
        this.patch({
          state: "stopped",
          detail: "stopped by an external signal",
        }),
        this.settle("killed")
      );
    return this.doSpawn();
  }
  settleCwdGone(e, t = this.dispatch.cwd) {
    let r = YYt(t);
    (logEvent("tengu_bg_spawn_cwd_gone", {
      short: bgShort(this.dispatch.short),
      attempt: this.attempt,
      via: fromEnum(e),
    }),
      this.patch({ state: "crashed", detail: r }));
    let s = this.dimNotice(`${r} \u2014 this job cannot be respawned`);
    (this.pushRing(s), this.onStream.emit(s), this.settle("crashed"));
  }
  async buildBridgeReattachEnvFromState() {
    let e = await readJobState(getJobDir(this.dispatch.short), this.storageV5).catch(() => null);
    if (!e) return;
    return buildBridgeReattachEnv(
      e.bridgeSessionId,
      e.bridgeSessionSeq,
      e.bridgeOutboundOnly,
      e.bridgeSessionGroupingId,
      {
        ownerAccountUuid: e.bridgeOwnerAccountUuid,
        ownerOrganizationUuid: e.bridgeOwnerOrganizationUuid,
        noHistoryBackfill: e.bridgeNoHistoryBackfill,
      },
    );
  }
  scheduleRespawn(e) {
    if (this.attempt >= Fe)
      return (
        logEvent("tengu_bg_respawn_exhausted", {
          short: bgShort(this.dispatch.short),
          attempts: this.attempt,
        }),
        this.patch({ state: "crashed", detail: e }),
        this.settle("crashed")
      );
    if (this.phase.kind === "running") this.transitionTo({ kind: "spawning" });
    (this.patch({ pid: 0, state: "crashed", detail: `${e}; respawning` }),
      (this.procStart = void 0));
    let t = this.dimNotice(`worker crashed (${e}) \u2014 respawning\u2026`);
    (this.pushRing(t),
      this.onStream.emit(t),
      (this.backoffTimer = setTimeout(() => {
        if (
          ((this.backoffTimer = null),
          this.phase.kind !== "retiring" && this.phase.kind !== "retired")
        )
          this.doSpawnUnlessSettledOnDisk().catch(logError);
      }, _t)),
      this.backoffTimer.unref());
  }
  settle(e) {
    if (this.record.outcome) return;
    (logEvent("tengu_bg_settle", {
      short: bgShort(this.dispatch.short),
      outcome: fromEnum(e),
      uptimeMs: Date.now() - this.record.startedAt,
      attempt: this.attempt,
      worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
      worker_stale: this.isVersionStale,
    }),
      this.transitionTo({ kind: "retired", outcome: e }),
      this.clearLiveness(),
      this.patch({ outcome: e, settledAt: Date.now(), tempo: "idle" }),
      this.onSettle.emit(e));
  }
  connectRv() {
    if (this.rv || this.isDetached || this.record.outcome) return;
    if (this.dispatch.launch.mode === "exec") {
      this.startPidPoll();
      return;
    }
    ((this.rv = He(
      this.rvSockPath ?? getRendezvousSocketPath(this.dispatch.short),
      (e) => {
        if (e.type === "heartbeat") this.lastRvHeartbeat = Date.now();
        else if (e.type === "auth-rejected" || e.type === "reply-rejected")
          (logEvent(
            e.type === "auth-rejected"
              ? "tengu_bg_rv_auth_mismatch"
              : "tengu_bg_rv_reply_rejected",
            {},
          ),
            this.rekeyForAuthMismatch(
              e.type === "auth-rejected"
                ? "rv-auth-rejected"
                : "rv-reply-rejected",
            ));
        else if (e.type === "done") this.settle(e.outcome);
        else if (e.type === "state") this.patch(e.patch);
        else if (e.type === "detach-request") {
          let t = daemonDetachApc(e.msg),
            r = this.attachers.get(this.lastInputAttacher);
          if (!e.broadcast && r) r.deliver(t);
          else if (this.attachers.size > 0)
            for (let s of this.attachers.values()) s.deliver(t);
          else this.onStream.emit(t);
        } else if (e.type === "repaint-done") this.onRepaintDone.emit();
        else if (e.type === "interactive-mark") {
          let t = parseInteractiveMarkRv(e);
          if (!t) {
            (logForDebugging(
              `[bg ${this.record.short}] dropped malformed rv interactive-mark frame`,
              { level: "warn" },
            ),
              logEvent("tengu_bg_imark_malformed", {}));
            return;
          }
          if (
            this.firedInteractiveMarks.length < 2 &&
            !this.firedInteractiveMarks.some((r) => r.kind === t.kind)
          ) {
            if ((this.firedInteractiveMarks.push(t), this.record.pid))
              this.onState.emit({ pid: this.record.pid });
          }
          for (let r of this.attachers.values())
            if (r.caps?.imark === !0)
              r.deliver(interactiveMarkApc({ ...t, nonce: r.imarkNonce }));
        }
      },
      () => void this.checkPid(),
      () => {
        if (((this.workerReady = !0), this.resizeDeferred))
          ((this.resizeDeferred = !1), this.resize(this.ptyCols, this.ptyRows));
        if (this.attachers.size > 0) {
          let e = [...this.attachers.values()].at(-1);
          this.sendAttacherCaps(e.caps ?? null);
        } else this.sendAttacherCaps(null);
      },
      this.rvAuth,
    )),
      this.startPidPoll());
  }
  startPidPoll() {
    if (this.pidPoll) return;
    ((this.lastCheckPidAt = Date.now()),
      (this.pidPoll = setInterval(() => void this.checkPid(!0), ke)),
      this.pidPoll.unref());
  }
  pidRecycled() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = getProcessStartTime(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async pidRecycledAsync() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = await getProcessStartTimeAsync(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async failIfHostExited(e) {
    let t = this.record.pid;
    if (!t || this.record.outcome || this.isKilling || !this.pty) return !1;
    let r = await readLinuxProcState(t);
    if (!isExitedProcessState(r)) return !1;
    if (
      this.record.outcome ||
      this.isKilling ||
      !this.pty ||
      this.record.pid !== t
    )
      return !1;
    return (
      logForDebugging(
        `bg: ${this.dispatch.short} pty host pid=${t} has exited but is unreaped (state ${r}) via=${e} \u2014 reaping it and marking the session failed`,
        { level: "warn" },
      ),
      logEvent("tengu_bg_ptyhost_zombie", {
        short: bgShort(this.dispatch.short),
        via: fromEnum(e),
        state: fromEnum(r === "Z" ? "Z" : "X"),
        uptimeMs: Date.now() - this.record.startedAt,
        attachers: this.attachers.size,
      }),
      this.kill(
        "SIGKILL",
        "failed",
        this.dispatch.launch.mode === "exec" ? HOST_DIED_EXEC_DETAIL : HOST_DIED_DETAIL,
      ),
      !0
    );
  }
  pidPollTick = 0;
  async checkPid(e = !1) {
    let t = Date.now() - this.lastCheckPidAt;
    this.lastCheckPidAt = Date.now();
    let r = t > Ke;
    if (r) this.hostWokeAt = Date.now();
    if (this.record.outcome || !this.record.pid) return;
    if (r && this.lastRvHeartbeat !== void 0) this.lastRvHeartbeat = Date.now();
    if (!this.pty)
      try {
        process.kill(this.record.pid, 0);
      } catch (p) {
        let d = A(p);
        if (d === "ESRCH" || d === "EPERM")
          (this.logVanished(!1, e),
            this.settle(this.isKilling ? "killed" : "crashed"));
        return;
      }
    let s = this.lastRvHeartbeat;
    if (!r && !this.stalledLogged && s !== void 0 && Date.now() - s > yt) {
      let p = await readJobState(getJobDir(this.dispatch.short), this.storageV5);
      if (!this.stalledLogged && (p?.tempo ?? this.record.tempo) === "active")
        ((this.stalledLogged = !0),
          logEvent("tengu_bg_worker_stalled", {
            short: bgShort(this.dispatch.short),
            sinceMs: Date.now() - s,
          }));
    }
    if (this.pty) {
      await this.failIfHostExited("poll");
      return;
    }
    if (e && this.pidPollTick++ % 12 !== 0) return;
    if (await this.pidRecycledAsync()) {
      if (this.record.outcome || this.pty) return;
      (this.logVanished(!0, e),
        this.settle(this.isKilling ? "killed" : "crashed"));
    }
  }
  logVanished(e, t) {
    if (this.isKilling) return;
    logEvent("tengu_bg_worker_vanished", {
      short: bgShort(this.dispatch.short),
      recycled: e,
      fromPoll: t,
      uptimeMs: Date.now() - this.record.startedAt,
      worker_cli_version: getVersionForAnalytics(this.record.cliVersion),
      worker_stale: this.isVersionStale,
    });
  }
  clearLiveness() {
    if (this.pidPoll) (clearInterval(this.pidPoll), (this.pidPoll = null));
    (this.rv?.close(),
      (this.rv = void 0),
      (this.lastRvHeartbeat = void 0),
      (this.stalledLogged = !1));
  }
}
async function Gmr(e) {
  let t = e[0];
  if (!t)
    (process.stderr.write(`[bg-spare] missing claim sock path
`),
      process.exit(2));
  let r = await Nt(),
    s = import("../../03-入口与运行时/CLI入口-Commander/main.vdzfymn2.js"),
    p = () => {
      try {
        unlinkSync(t);
      } catch {}
    },
    d = () => {
      (p(), process.exit(0));
    },
    o = (v) => {
      (p(),
        process.stderr.write(`[bg-spare] uncaughtException: ${l(v)}
`),
        setBgExitCause("spare_uncaught"),
        process.exit(1));
    },
    c = process.ppid,
    g = setInterval(
      (v, _) => {
        if (process.ppid !== v) (_(), process.exit(0));
      },
      2000,
      c,
      p,
    );
  g.unref();
  for (let v of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(v, d);
  process.on("uncaughtException", o);
  let m = () => {
      clearInterval(g);
      for (let v of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(v, d);
      process.off("uncaughtException", o);
    },
    k;
  try {
    k = await receiveSpareClaim(t, void 0, r);
  } catch (v) {
    (p(),
      process.stderr.write(`[bg-spare] claim recv failed: ${l(v)}
`),
      setBgExitCause("spare_claim_recv"),
      process.exit(1));
  }
  m();
  try {
    (await s, await bootClaimedSpare(k, s));
  } catch (v) {
    let _ = Jr(v) ?? Gw(v) ?? "Error";
    throw (
      setBgExitCause("spare_postclaim:" + _, k.env.CLAUDE_JOB_DIR),
      process.stderr.write(`[bg-spare] post-claim init failed: ${l(v)}
`),
      v
    );
  }
}
async function Nt() {
  let e = a.CLAUDE_BG_CLAIM_AUTH;
  delete process.env.CLAUDE_BG_CLAIM_AUTH;
  let t = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if ((delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, !t)) return e;
  let r = await readSocketTokenFile(t);
  if ((await X(t).catch(() => {}), !r?.claimAuth))
    logForDebugging("[bg-spare] tokens file unreadable; claim gate degraded", {
      level: "warn",
    });
  return r?.claimAuth ?? e;
}
var xt = 2000;
async function QYt(e) {
  if (getCurrentPlatform() === "windows") return null;
  if (getLauncherConfigError()) return null;
  if (!(await isLauncherRunnable())) {
    if (!e.launcherNotRunnableEpisode.logged)
      ((e.launcherNotRunnableEpisode.logged = !0),
        logFeatureBad("agent_launcher", "spare_launcher_not_runnable"),
        logForDebugging(
          `bg spare: launcher \`${getLauncherArgv()[0]}\` was deleted or is not executable \u2014 not minting a warm spare until it is restored`,
          { level: "warn" },
        ));
    return null;
  }
  return (
    (e.launcherNotRunnableEpisode.logged = !1),
    withFeatureTelemetry("daemon_bg_spare_refill", async () => {
      let t = Re(4).toString("hex"),
        r = getSparePtySocketPath(t),
        s = getSpareClaimSocketPath(t),
        p = Re(16).toString("hex"),
        d = Re(16).toString("hex");
      await Pt(getSparePtyDir(), { recursive: !0, mode: 448 }).catch(() => {});
      let o = await Ae(`spare-${t}`, { ptyAuth: p, claimAuth: d });
      (await X(r).catch(() => {}), await X(s).catch(() => {}));
      let { cmd: c, prefixArgs: g } = resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 }),
        m = await Ot(getPtyHostStderrPath(r), "w").catch(() => null),
        k = eur("agent"),
        v = k?.(),
        _;
      try {
        ((_ = Bun.spawn(
          [
            c,
            ...g,
            "--bg-pty-host",
            r,
            "200",
            "50",
            "--",
            c,
            ...g,
            "--bg-spare",
            s,
          ],
          {
            cwd: getSparePtyDir(),
            env: Mt(o ? { tokensPath: o } : { ptyAuth: p, claimAuth: d }),
            stdio: ["ignore", "ignore", m?.fd ?? "ignore"],
            detached: !0,
            windowsHide: !0,
            ...Bs("agent"),
            argv0: "claude bg-pty-host",
          },
        )),
          _.unref());
      } catch (D) {
        if (o)
          if (isHoverRestEnabled() && e.credentials !== void 0)
            e.credentials.discardSpentCredentialFile(o).catch(() => {});
          else X(o).catch(() => {});
        throw D;
      } finally {
        await m?.close().catch(() => {});
      }
      let w = {
          hostPid: _.pid,
          ptySock: r,
          claimSock: s,
          ptyAuth: p,
          claimAuth: d,
          startedAt: Date.now(),
          cliVersion: {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
          claimed: !1,
          dispose() {
            y = !0;
            try {
              _.kill("SIGTERM");
            } catch {}
          },
        },
        y = !1;
      return (
        _.exited.then(async (D) => {
          let B = Date.now(),
            T = k?.(),
            U = D !== 0 && v !== void 0 && T !== void 0 && T > v;
          if ((X(r).catch(() => {}), X(s).catch(() => {}), o))
            if (isHoverRestEnabled() && e.credentials !== void 0)
              e.credentials.discardSpentCredentialFile(o).catch(() => {});
            else X(o).catch(() => {});
          let N = ((await readBoundedFile(getPtyHostStderrPath(r), 1048576)) ?? "").slice(0, 2000).trim();
          if (N.length > 0)
            logForDebugging(
              `bg spare host pid=${_.pid} exit stderr:
${N}`,
              { level: "warn" },
            );
          (X(getPtyHostStderrPath(r)).catch(() => {}), X(getPtyLateOutputPath(r)).catch(() => {}));
          let R = B - w.startedAt,
            C =
              !y &&
              !w.claimed &&
              !U &&
              getLauncherArgv().length > 0 &&
              (R < xt || (D === 0 && R < FAST_CRASH_WINDOW_MS));
          if (U && !w.claimed && !y)
            logForDebugging(
              `bg spare: host pid=${_.pid} died ${R}ms after spawn while the tool memory cgroup OOM-killed a member \u2014 not attributed to the launcher`,
              { level: "warn" },
            );
          if (C)
            (sigtermThenKill([-_.pid]),
              logFeatureBad("agent_launcher", "spare_fork_or_crash"),
              logForDebugging(
                `bg spare: launcher \`${getLauncherArgv()[0]}\` exited ${R}ms after spawn \u2014 it either daemonized instead of calling \`exec\` (launcher contract #1) or crashed at startup. Warm spares are disabled until the background service restarts; sessions still start, without the warm-attach shortcut.`,
                { level: "warn" },
              ));
          e.onExit(C);
        }),
        e.log(`bg spare spawned host pid=${_.pid}`),
        w
      );
    })
  );
}
function Mt(e) {
  let t = { ...process.env };
  te(t);
  for (let r of NON_INHERITED_ENV_VARS) delete t[r];
  if ((g4(t), removeBgDispatcherPlanEnvVars(t), removeGuiHostEntrypoint(t), hasHostManagedAuth(t))) {
    let r = getHostAuthEnvVarName(t);
    if (r) (te(t, [r]), delete t[r]);
    for (let s of API_KEY_ENV_VARS) delete t[s];
    if (Ie(t.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) clearAwsEnvVars(t);
  } else if (BASE_URL_ENV_GROUPS.some((r) => re(t, r))) delete t.ANTHROPIC_AUTH_TOKEN;
  for (let r of le) delete t[r];
  for (let r of Object.keys(t))
    if (VERTEX_REGION_ENV_PREFIXES.some((s) => r.startsWith(s))) delete t[r];
  if (getCurrentPlatform() === "macos") delete t.CLAUDE_CODE_OAUTH_TOKEN;
  return (
    Object.assign(t, {
      CLAUDE_CODE_SESSION_KIND: "bg",
      CLAUDE_BG_BACKEND: "daemon",
      FORCE_COLOR: "3",
      COLORTERM: "truecolor",
      BROWSER: "true",
      ...("tokensPath" in e
        ? { CLAUDE_BG_SOCKET_TOKENS_PATH: e.tokensPath }
        : { CLAUDE_BG_PTY_AUTH: e.ptyAuth, CLAUDE_BG_CLAIM_AUTH: e.claimAuth }),
    }),
    t
  );
}
function ZYt(e, t, r, s, p, d) {
  t.claimed = !0;
  let o = qW.claim(e, {
    pid: t.hostPid,
    ptySockPath: t.ptySock,
    spawnPty: r,
    getAuthSnapshot: s,
    ptyAuth: t.ptyAuth,
    storageV5: p,
    credentials: d,
  });
  return (
    Ee(e.short, E8(e) ? void 0 : s?.())
      .then((c) => Bt(t.claimSock, Vt(e, c, o.socketAuth(), t.claimAuth)))
      .catch((c) => {
        (logEvent("tengu_bg_sendclaim_failed", {
          short: e.short,
          errno: Jr(c),
          error: l(c).slice(0, 100),
        }),
          logForDebugging(`[bg-spare] send-claim failed: ${l(c)}`, { level: "warn" }));
        let g = connect(t.ptySock);
        (g.on("error", () => {}),
          g.once("connect", () => {
            (g.write(encodeControlFrame({ t: "kill", sig: "SIGTERM" })), g.end());
          }));
      }),
    o
  );
}
function Vt(e, t, r, s) {
  let { env: p, argv: d } = qW.buildClaimFrame(e, t, r);
  return { cwd: e.cwd, env: p, argv: d, sessionId: e.sessionId, auth: s };
}
var it = [50, 100, 150, 200, 250, 300, 400, 500, 500, 500];
async function Bt(e, t) {
  let r = Date.now(),
    s = 5000;
  for (let p = 0; ; p++) {
    if (Date.now() - r > 5000) throw Error("send-claim timeout");
    try {
      await Ht(e, t);
      return;
    } catch (d) {
      let o = A(d);
      if (!(o === "ENOENT" || o === "ECONNREFUSED") || p >= it.length) throw d;
      await sleep(it[p] ?? 500);
    }
  }
}
function Ht(e, t) {
  return new Promise((r, s) => {
    let p = connect(e);
    (p.once("error", s),
      p.once("connect", () => {
        p.end(
          jsonStringify(t) +
            `
`,
          () => r(),
        );
      }));
  });
}
async function eJt(e, t) {
  if (getCurrentPlatform() === "windows") return;
  let r = new Set();
  for (let d of e.values()) {
    let o = d.rosterEntry().ptySock;
    if (o) r.add(o);
  }
  let s = await readdir(getSparePtyDir()).catch(() => []),
    p = 0;
  for (let d of s) {
    if (!d.endsWith(".pty.sock")) continue;
    let o = pe(getSparePtyDir(), d);
    if (r.has(o)) continue;
    p++;
    let c = connect(o);
    (c.on("error", () => {
      X(o).catch(() => {});
    }),
      c.once("connect", () => {
        (c.resume(),
          c.write(encodeControlFrame({ t: "kill", sig: "SIGTERM" })),
          c.end(),
          setTimeout((g) => g.destroy(), 2000, c).unref());
      }));
  }
  for (let d of s) {
    let o = [".err", ".late", ".err.read"].find((c) =>
      d.endsWith(`.pty.sock${c}`),
    );
    if (o) {
      let c = d.slice(0, -o.length);
      if (!s.includes(c)) X(pe(getSparePtyDir(), d)).catch(() => {});
    }
    if (d.endsWith(".claim.sock")) {
      let c = pe(getSparePtyDir(), `${d.slice(0, -11)}.pty.sock`);
      if (!r.has(c)) X(pe(getSparePtyDir(), d)).catch(() => {});
    }
  }
  if (p) t(`bg orphan-spare reap: ${p}`);
}
export { YYt, JYt, E8, qW, Gmr, QYt, ZYt, eJt };

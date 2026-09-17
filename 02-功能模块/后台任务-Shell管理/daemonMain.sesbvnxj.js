// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 200 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { readBoundedFile, shutdownFirstPartyEventLogging, logFirstPartyEventAsync, initializeFirstPartyEventLogging, initializeGrowthBook, getFeatureValue_CACHED_MAY_BE_STALE, watchGlobalConfigThroughStorage, seedInstallIDs, shutdownDatadog, trackDatadogEvent } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep, withTimeout } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { lit as S, fromEnum, fromNumber, concatSafe } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { R, ge, l, A, Jr, Po, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, jsonStringify, jsonParse, changeWorkingDirectory, redactSecretsFromText, initDefaultDebugLog, getDebugFilePath, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, truncateToCodeUnits, normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Bs } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { sanitizeAnalyticsId } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { sigtermThenKill, reapDetachedRepl, procIdentityOf, procIdentityFields, getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { isAgentViewDisabled, ensureFleetGateHydrated, isDaemonCliEnabled, isDaemonWorkerRegistryEnabled, isDaemonServiceInstallEnabled, isDaemonServiceRecalled, bgSupervisorNoun, fleetGateRejected } from "../多会话视图-Fleet/agent-view-feature-gates.js";
import { pinStorageV5 } from "../../01-核心基础设施/核心工具-未归类/pin-storage-v5.js";
import { FAST_CRASH_WINDOW_MS, getLauncherArgv, getLauncherConfigError, isLauncherRunnable, getLauncherErrorMessage, getLauncherCommandString } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { default as RT } from "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import { isRunningInstalledBinary, resolveWrappedClaudeInvocation, applyProcessWrapper, findInstalledVersionBinary } from "../../03-入口与运行时/CLI入口-Commander/claude-launcher-invocation.js";
import {
  getDaemonRuntimeDir,
  redactDaemonNonce,
  redactDaemonNonceFromError,
  ensureDaemonDirSecure,
  ensureDaemonRuntimeDir,
  pruneStaleDaemonDirs,
  getDispatchDir,
  getRejectedDispatchDir,
  getRendezvousDir,
  getCredentialFilePath,
  getHostManagedDir,
  getHostManagedMarkerPath,
  getTokensFilePath,
  getPtySocketDir,
  getPtySocketPath,
  getPtyPidDir,
  getPtyPidFilePath,
  getPtyHostStderrPath,
  getPtyLateOutputPath,
  getPtyExecExitPath,
  getControlSocketPath,
} from "./chunk-djserjj5.js";
import {
  sanitizeRespawnFlags,
  BG_PROTO,
  BgDispatchSchema,
  inspectRegularFileForRead,
  isReadRefusedError,
  readRoster,
  bgShort,
  updateRoster,
  getJobDir,
  writeStateAtomic,
  readJobState,
  readPinnedJobIds,
  ABANDONED_WORKER_MS,
  isSettled,
  writeReapedTerminalState,
} from "./chunk-7wsy8vxb.js";
import "../自动更新-安装/install-diagnostics.js";
import { lockCurrentVersion } from "../自动更新-安装/native-installer.js";
import { credentialsStoreFor } from "../认证-OAuth登录/credentials-store.js";
import { runFastPathPolicyHelper } from "../../01-核心基础设施/设置-配置/fast-path-policy-loader.js";
import { controlRequest } from "../守护服务-Daemon/chunk-9fpz6abc.js";
import {
  areVersionTargetsDifferent,
  isNewerBuildTimestamp,
  isVersionGreater,
  getLowMemoryStatus,
  isLowMemory,
  isBackgroundAttachUpgradeEnabled,
  readExecExitStatus,
  reapAllDaemonWorkers,
  listPtyPidFiles,
  MAX_PTY_PID_FILE_BYTES,
  readStoredPtyPid,
  killPtySocket,
  pingPtySocket,
  killVerifiedProcess,
} from "./chunk-gnmy62vg.js";
import {
  getDaemonLockPath,
  acquireDaemonLock,
  markDaemonLockBgDisabled,
  readDaemonLock,
  replaceDaemonLock,
  removeDaemonLock,
  isDaemonProcess,
  LOCK_VERIFY_ATTEMPTS,
  LOCK_VERIFY_RETRY_MS,
  verifyProcessStartTime,
  classifyDaemonLockStaleness,
  isProcessIdentityKnown,
  getUnverifiedLockHint,
  getVerifiedDaemonLock,
  stopDaemonLockHolder,
  describeStopFailure,
  describeUnknownOriginLock,
} from "./daemon-lock.js";
import {
  isDaemonServiceControlSupported,
  getInstalledBinaryPath,
  installDaemonService,
  uninstallDaemonService,
  startDaemonService,
  stopDaemonService,
  restartDaemonService,
  checkDaemonServiceStaleness,
  isDaemonServiceInstalled,
  spawnDaemonProcess,
  serveDaemonControlSocket,
  DAEMON_START_TIMEOUT_MS,
  waitForDaemonReady,
  waitForServiceDaemonLock,
  ensureHostManagedScope,
  writeHostManagedMarker,
  deleteHostManagedMarker,
} from "./chunk-jfk5mpe1.js";
import "../守护服务-Daemon/session-env-scrubbing.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/核心工具-未归类/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/markdown-ansi-renderer.js";
import { formatCwdUnavailableMessage, createDefaultSpawnPty, isProviderManagedByHost, BgSessionWorker, spawnSpare, claimSpare, reapOrphanSpares } from "./bg-session-worker.js";
import { createDaemonAuth, WORKER_KINDS } from "../认证-OAuth登录/daemon-worker-runtime.js";
import "../权限系统/chunk-3kjwvb3e.js";
import { getDefaultDaemonConfig, loadDaemonConfig, watchDaemonConfigFile, diffDaemonConfigs } from "../../01-核心基础设施/设置-配置/daemon-config.js";
import "../守护服务-Daemon/spare-session-claim.js";
import "../守护服务-Daemon/session-ingress-token.js";
import { writeDaemonStatus, removeDaemonStatus } from "../守护服务-Daemon/daemon-status.js";
import { getDaemonJsonPath, getDaemonLogPath } from "../守护服务-Daemon/daemon-paths.js";
import "../../01-核心基础设施/核心工具-其他/chunk-j86cs2ar.js";
import "../守护服务-Daemon/chunk-tpraq69b.js";
import { PERMANENT_FAILURE_EXIT_CODE, TEMP_FAILURE_EXIT_CODE } from "../../01-核心基础设施/核心工具-其他/exit-codes.js";
import { isProcessRunning } from "../守护服务-Daemon/process-record.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { spawn as Br } from "child_process";
import { open as Or, rm as Lr } from "fs/promises";
import { homedir } from "os";
import { dirname, resolve } from "path";
import { createWriteStream } from "fs";
import { rename as rt, stat as Ft, unlink as nt } from "fs/promises";
var ot = 10485760;
async function Le(t) {
  let e = process.stdout.isTTY,
    o = await Ft(t)
      .then((d) => d.size)
      .catch(() => 0);
  if (o > ot) (await st(t), (o = 0));
  let r = it(t),
    a = null,
    p = null,
    w = !1;
  return {
    write(d, k) {
      let D = `[${new Date().toISOString()}] [${d}] ${redactSecretsFromText(k)}
`;
      if (e) process.stdout.write(D);
      if (w) return;
      if (((o += Buffer.byteLength(D)), p)) p.push(D);
      else r.write(D);
      if (o > ot && !a) {
        let _ = r,
          B = [];
        ((p = B),
          (a = (async () => {
            try {
              (await at(_), await st(t), (r = it(t)), (o = 0));
              for (let E of B) ((o += Buffer.byteLength(E)), r.write(E));
            } catch {
            } finally {
              ((p = null), (a = null));
            }
          })()));
      }
    },
    async close() {
      ((w = !0), await a, await at(r));
    },
  };
}
function it(t) {
  let e = createWriteStream(t, { flags: "a" });
  return (e.on("error", () => {}), e);
}
function at(t) {
  return new Promise((e) => {
    if (t.closed) {
      e();
      return;
    }
    (t.once("close", () => e()), t.end());
  });
}
async function st(t) {
  let e = `${t}.1`;
  try {
    await rt(t, e);
  } catch (o) {
    if (W(o)) return;
    (await nt(e).catch(() => {}),
      await rt(t, e).catch(() => nt(t).catch(() => {})));
  }
}
import { realpath, stat as Rr } from "fs/promises";
import {
  access as Qe,
  lstat as Qt,
  mkdir as je,
  readdir as er,
  rm as Fe,
  unlink as te,
  writeFile,
} from "fs/promises";
import { freemem } from "os";
import { basename as Ve, join as yt } from "path";
import { once as Ht } from "events";
import {
  lstat as Gt,
  mkdir as dt,
  readdir as Kt,
  readFile,
  rename as zt,
  rm as lt,
  unlink as ct,
} from "fs/promises";
import { basename as Ie, join as Ne } from "path";
var Yt = 86400000,
  ze = 262144;
async function xe(t, e) {
  (await dt(getRejectedDispatchDir(), { recursive: !0, mode: 448 }).catch(() => {}),
    await zt(t, Ne(getRejectedDispatchDir(), Ie(t))).catch(() => ct(t).catch(() => {})),
    Te(Ie(t), e));
}
function Te(t, e) {
  (logForDebugging(`[bg-dispatch] rejected ${t}: ${e}`, { level: "warn" }),
    logEvent("tengu_bg_dispatch_rejected", { reason: e }));
}
function ut(t) {
  return concatSafe(S("oversized ("), fromNumber(t), S(" bytes)"));
}
async function ft(t, e) {
  let o;
  try {
    o = await Gt(t);
  } catch (p) {
    if (W(p)) return;
    return (
      logFeatureBad("daemon_bg_dispatch_ingest", "read_failed"),
      xe(t, Jr(p) ?? S("unknown"))
    );
  }
  if (o.isSymbolicLink())
    return (logFeatureBad("daemon_bg_dispatch_ingest", "symlink"), xe(t, S("symlink")));
  if (!o.isFile()) {
    (logFeatureBad("daemon_bg_dispatch_ingest", "not_a_file"),
      logForDebugging(`[bg-dispatch] removed non-regular ${Ie(t)}`, { level: "warn" }),
      await lt(t, { recursive: !0, force: !0 }).catch(() => {}));
    return;
  }
  if (o.size > ze)
    return (logFeatureBad("daemon_bg_dispatch_ingest", "oversized"), xe(t, ut(o.size)));
  let r;
  try {
    r = await readFile(t, "utf8");
  } catch (p) {
    if (W(p)) return;
    return (
      logFeatureBad("daemon_bg_dispatch_ingest", "read_failed"),
      xe(t, Jr(p) ?? S("unknown"))
    );
  }
  let a = mt(r);
  if (!a.ok) return xe(t, a.reason);
  (e(a.dispatch), logFeatureOk("daemon_bg_dispatch_ingest"), await ct(t).catch(() => {}));
}
var gt = { namespace: "daemon", relPath: ["dispatch"] };
async function Jt(t) {
  if (isHoverRestEnabled() && t !== void 0) {
    await t.ensureScope(gt).catch(() => {
      return;
    });
    return;
  }
  await dt(getDispatchDir(), { recursive: !0, mode: 448 }).catch(() => {});
}
function mt(t) {
  let e,
    o = !0;
  try {
    e = jsonParse(t);
  } catch {
    ((e = void 0), (o = !1));
  }
  let r;
  try {
    r = BgDispatchSchema().safeParse(e);
  } catch {
    return (
      logFeatureBad("daemon_bg_dispatch_ingest", "transform_throw"),
      { ok: !1, reason: S("transform_throw") }
    );
  }
  if (!r.success)
    return (
      logFeatureBad("daemon_bg_dispatch_ingest", o ? "schema" : "bad_json"),
      { ok: !1, reason: S("schema") }
    );
  if (Date.now() - r.data.createdAt > Yt)
    return (
      logFeatureBad("daemon_bg_dispatch_ingest", "stale"),
      { ok: !1, reason: S("stale") }
    );
  return { ok: !0, dispatch: r.data };
}
async function Ye(t) {
  await lt(Ne(getDispatchDir(), t), { recursive: !0, force: !0 }).catch(() => {});
}
async function ht(t) {
  (logFeatureBad("daemon_bg_dispatch_ingest", "not_a_file"),
    logForDebugging(`[bg-dispatch] removed non-regular ${t}`, { level: "warn" }),
    await Ye(t));
}
async function Ke(t, e, o, r) {
  if (r !== void 0)
    await t.write(STORAGE_KEYS.daemon(["dispatch", "rejected", e]), r).catch(() => {
      return;
    });
  (await t.delete(STORAGE_KEYS.daemon(["dispatch", e])).catch(() => {
    return;
  }),
    Te(e, o));
}
async function wt(t, e, o) {
  let r = STORAGE_KEYS.daemon(["dispatch", e]),
    a = await inspectRegularFileForRead(Ne(getDispatchDir(), e));
  if (a.kind === "refused") {
    if (a.symlink) {
      (logFeatureBad("daemon_bg_dispatch_ingest", "symlink"),
        await Ye(e),
        Te(e, S("symlink")));
      return;
    }
    await ht(e);
    return;
  }
  if (a.kind === "error") {
    (logFeatureBad("daemon_bg_dispatch_ingest", "read_failed"),
      Te(e, Jr(a.error) ?? S("unknown")));
    return;
  }
  let p = await t.read([{ key: r, offset: 0, length: ze + 1 }]).catch(() => {
    return;
  });
  if (p === void 0 || !p.ok) {
    if (
      (logFeatureBad("daemon_bg_dispatch_ingest", "read_failed"),
      p !== void 0 && isReadRefusedError(p.error))
    )
      return Ke(t, e, S("v5_read_failed"), void 0);
    Te(e, S("v5_read_failed"));
    return;
  }
  let w = p.value.items[0];
  if (!w.found) return;
  if (w.totalBytes > ze)
    return (
      logFeatureBad("daemon_bg_dispatch_ingest", "oversized"),
      Ke(t, e, ut(w.totalBytes), void 0)
    );
  let d = mt(Buffer.from(w.value).toString("utf8"));
  if (!d.ok) return Ke(t, e, d.reason, w.value);
  (o(d.dispatch),
    logFeatureOk("daemon_bg_dispatch_ingest"),
    await t.delete(r).catch(() => {
      return;
    }));
}
async function Xt(t, e, o) {
  if (!isValidPathSegment(e)) {
    (logFeatureBad("daemon_bg_dispatch_ingest", "bad_name"),
      Te(e, S("bad_name")),
      await Ye(e));
    return;
  }
  await wt(t, e, o);
}
async function qt(t, e) {
  if (isHoverRestEnabled() && e !== void 0) {
    let r,
      a = [],
      p = [];
    do {
      let w = await e.listEntries(gt, {
        cursor: r,
        skipKeyStats: !0,
        skipScopeStats: !0,
      });
      if (!w.ok)
        throw new R(
          `dispatch drain v5 list failed: ${w.error.code}`,
          "dispatch drain v5 list failed",
        );
      for (let d of w.value.items) {
        let k = d.kind === "key" ? d.key : d.scope;
        if (k.namespace !== "daemon" || k.relPath?.length !== 2) continue;
        let D = k.relPath[1];
        if (D === void 0 || !isValidPathSegment(D)) continue;
        if (d.kind === "key") a.push(D);
        else p.push(D);
      }
      r = w.value.cursor;
    } while (r !== void 0);
    for (let w of p) {
      if (Ue(w)) continue;
      await ht(w);
    }
    for (let w of a) {
      if (Ue(w)) continue;
      await wt(e, w, t);
    }
    return;
  }
  let o;
  try {
    o = await Kt(getDispatchDir());
  } catch (r) {
    if (W(r)) return;
    throw r;
  }
  for (let r of o) {
    if (Ue(r)) continue;
    await ft(Ne(getDispatchDir(), r), t);
  }
}
function _t(t) {
  return t.endsWith(".tmp") || t.includes(".tmp.");
}
function Ue(t) {
  return t.startsWith(".") || _t(t) || t === "rejected";
}
async function kt(t, e) {
  return withFeatureTelemetry("daemon_bg_watcher_start", () => Zt(t, e));
}
async function Zt(t, e) {
  await Jt(e);
  let o = getCurrentPlatform(),
    r = o === "macos",
    a = RT.watch(getDispatchDir(), {
      ignoreInitial: !0,
      depth: 0,
      usePolling: r,
      interval: 100,
      ignored: (p) => _t(Ie(p)) || Ie(p) === "rejected",
      ...(o === "windows" && {
        awaitWriteFinish: { stabilityThreshold: 50, pollInterval: 20 },
      }),
    });
  return (
    a.on("add", (p) => {
      (isHoverRestEnabled() && e !== void 0 ? Xt(e, Ie(p), t) : ft(p, t)).catch((w) =>
        logForDebugging(`[bg-dispatch] ${w}`, { level: "error" }),
      );
    }),
    a.on("error", (p) => {
      (logForDebugging(`[bg-dispatch] watcher error: ${p}`, { level: "error" }),
        logEvent("tengu_bg_dispatch_watcher_failed", {
          errno: Jr(p) ?? S("unknown"),
        }));
    }),
    await withTimeout(Ht(a, "ready"), 5000, "chokidar ready").catch((p) =>
      logForDebugging(`[bg-dispatch] watcher ready wait: ${p}`),
    ),
    await qt(t, e).catch((p) => {
      (logForDebugging(`[bg-dispatch] cold-start drain: ${p}`, { level: "error" }),
        logEvent("tengu_bg_dispatch_watcher_failed", {
          errno: Jr(p) ?? S("unknown"),
        }));
    }),
    { close: () => a.close() }
  );
}
var or = 3600000,
  Je = 60000,
  ir = 28800000,
  Me = 60000,
  ar = 2000,
  sr = 300000,
  dr = 2000,
  vt = 1000,
  lr = new Set();
function Xe(t) {
  return readPinnedJobIds(t).catch((e) => (logError(e), new Set()));
}
async function St(t, e = {}) {
  let o,
    r,
    a = new Map(),
    p = async () => {
      let w = new Set(),
        d = e.spawnPty ?? createDefaultSpawnPty(),
        k = e.onKeepAliveChange ?? (() => {}),
        D = (m, T, K) => o?.noteSettledDispatch(m, T, K),
        _ = !1,
        B = !1,
        E = Promise.withResolvers(),
        v = null,
        s = !1,
        C = { logged: !1 },
        N = !1,
        O = !1,
        V = e.spawnPty === void 0,
        q = () => {
          if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_spare_enable", !0)) {
            if (v) (v.dispose(), (v = null));
            return;
          }
          if (isLowMemory()) {
            if (v) (v.dispose(), (v = null));
            return;
          }
          if (!O || v || N || s || _ || !B || !d || !V || getCurrentPlatform() === "windows")
            return;
          N = !0;
          let m = null,
            T = !1;
          spawnSpare({
            log: t,
            launcherNotRunnableEpisode: C,
            credentials: e.credentials,
            onExit: (K) => {
              if (K) s = !0;
              if (m === null) {
                T = !0;
                return;
              }
              if (v === m) {
                v = null;
                let ee = getLauncherArgv().length > 0 ? FAST_CRASH_WINDOW_MS : dr;
                if (Date.now() - m.startedAt >= ee) q();
              }
            },
          })
            .then((K) => {
              if (((m = K), !K || _ || T)) {
                K?.dispose();
                return;
              }
              ((v = K), logEvent("tengu_bg_spare_spawn", {}));
            })
            .catch((K) => {
              if (Po(K)) {
                logForDebugging(`bg-spare spawn failed: ${A(K)} ${K.message}`, {
                  level: "warn",
                });
                return;
              }
              logError(K);
            })
            .finally(() => {
              N = !1;
            });
        },
        re = Date.now(),
        Y = async (m, T = 0, K, ee = !1) => {
          if (_) return "closed";
          O = !0;
          let le = ee;
          if (T === 0 && !K) {
            try {
              await withTimeout(Qe(m.cwd), vt, `bg: cwd probe timed out for ${m.short}`);
            } catch (c) {
              le = W(c);
            }
            if (_) return "closed";
          }
          if (le && !a.has(m.short) && T > 0) {
            try {
              (await withTimeout(
                Qe(m.cwd),
                vt,
                `bg: cwd re-probe timed out for ${m.short}`,
              ),
                (le = !1));
            } catch (c) {
              le = W(c);
            }
            if (_) return "closed";
          }
          if (le && !a.has(m.short)) {
            let c = formatCwdUnavailableMessage(m.cwd);
            if (
              (t(`bg refused ${m.short} (${m.source}): ${c}`),
              logEvent("tengu_bg_spawn_cwd_gone", {
                short: bgShort(m.short),
                attempt: 0,
                via: fromEnum("dispatch"),
              }),
              logFeatureSad("daemon_bg_session_create", "cwd_gone"),
              m.nonce)
            )
              D(m.short, m.nonce, c);
            return "refused";
          }
          let ce = !1;
          if (isProviderManagedByHost(m) && !a.has(m.short))
            try {
              if ((await pr(e.storageV5), e.storageV5))
                await writeHostManagedMarker(e.storageV5, m.short);
              else await writeFile(getHostManagedMarkerPath(m.short), "");
              ce = !0;
            } catch (c) {
              return (
                logError(c),
                logFeatureBad("daemon_bg_session_create", "host_tombstone_write"),
                "dropped"
              );
            }
          let de = a.get(m.short);
          if (de) {
            if (
              (de.isKilling || de.isRetiring || de.record.outcome) &&
              T < 30
            ) {
              if (T === 15 && (de.isKilling || de.isRetiring))
                (logEvent("tengu_bg_dispatch_sigkill_escalate", {}),
                  de.kill("SIGKILL"));
              return (await sleep(100), Y(m, T + 1, K, le));
            }
            let c = de.isKilling || de.isRetiring || de.record.outcome;
            if (ce && !isProviderManagedByHost(de.dispatch))
              if (e.storageV5) await deleteHostManagedMarker(e.storageV5, m.short);
              else await te(getHostManagedMarkerPath(m.short)).catch(() => {});
            if (
              (t(
                c
                  ? `bg: dispatch ${m.short} dropped \u2014 retry budget exhausted (handle still settling)`
                  : `bg: dup dispatch ${m.short} dropped (existing handle still live)`,
              ),
              c)
            )
              return (
                logFeatureBad("daemon_bg_session_create", "dup_retry_exhausted"),
                "dropped"
              );
            return (logFeatureOk("daemon_bg_session_create"), "dup-live");
          }
          if (!isProviderManagedByHost(m))
            if (e.storageV5) deleteHostManagedMarker(e.storageV5, m.short);
            else te(getHostManagedMarkerPath(m.short)).catch(() => {});
          let { lowMem: me, level: Se } = getLowMemoryStatus();
          if (me && a.size > 0) {
            let c = Date.now() - re;
            if (c > Me * 2)
              t(
                `bg: low memory but sweep anchor is ${Math.round(c / 1000)}s stale (host slept?) \u2014 deferring eager retire to the next sweep tick`,
              );
            else {
              let I = Math.round(freemem() / 1024 / 1024);
              (t(
                `bg: low memory (${Se !== void 0 ? `macOS memorystatus pressure level ${Se}` : `${I}MB free`}) \u2014 retiring settled workers before spawning ${m.short}`,
              ),
                logEvent("tengu_bg_dispatch_low_mem", {
                  free_mb: I,
                  handles: a.size,
                  pressure_level: Se,
                }),
                Xe(e.storageV5).then((j) => {
                  for (let ae of a.values())
                    ae.retireIfSettled(Je, j)
                      .then((we) => Ze(t, ae, we, "low memory"))
                      .catch((we) => logError(we));
                }));
            }
          }
          if (m.source === "spare" && me)
            return (
              t(`bg: low memory \u2014 skipping spare dispatch ${m.short}`),
              "dropped"
            );
          if (
            v &&
            !K &&
            m.launch.mode !== "exec" &&
            v.cliVersion ===
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
              }.VERSION &&
            getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_spare_enable", !0)
          ) {
            let c = v;
            v = null;
            try {
              let I = claimSpare(
                m,
                c,
                d,
                e.getAuthSnapshot,
                e.storageV5,
                e.credentials,
              );
              return (
                a.set(m.short, I),
                qe(a, I, k, w, t, {
                  storageV5: e.storageV5,
                  credentials: e.credentials,
                  noteSettled: D,
                }),
                ue(
                  w,
                  updateRoster((j) => {
                    j.workers[m.short] = I.rosterEntry();
                  }, e.storageV5).catch((j) => logError(j)),
                ),
                k(),
                logEvent("tengu_bg_spare_claim", { age_ms: Date.now() - c.startedAt }),
                t(`bg claimed-spare ${m.short} (${m.source})`),
                logFeatureOk("daemon_bg_session_create"),
                q(),
                "claimed"
              );
            } catch (I) {
              let j = A(I),
                ae =
                  j === "ENOENT"
                    ? "enoent"
                    : j === "ECONNREFUSED"
                      ? "econnrefused"
                      : I instanceof Error
                        ? "error"
                        : "unknown";
              (logEvent("tengu_bg_spare_claim_fail", { reason: fromEnum(ae) }), c.dispose());
            }
          }
          let $e = BgSessionWorker.spawn(
            m,
            d,
            e.getAuthSnapshot,
            K ? { afterUpgrade: K } : void 0,
            e.storageV5,
            e.credentials,
          );
          return (
            a.set(m.short, $e),
            qe(a, $e, k, w, t, {
              storageV5: e.storageV5,
              credentials: e.credentials,
              noteSettled: D,
            }),
            k(),
            q(),
            t(`bg spawned ${m.short} (${m.source})`),
            logFeatureOk("daemon_bg_session_create"),
            "spawned"
          );
        },
        J = (m = "SIGTERM") => {
          let T = 0;
          for (let K of a.values()) if (!K.record.outcome) (K.kill(m), T++);
          return T;
        };
      (await ensureDaemonRuntimeDir(), await ensureDaemonDirSecure());
      let L = await serveDaemonControlSocket(
        a,
        Y,
        e.onNudge ?? (async () => ({ restarting: !1, upgradePending: !1 })),
        (m) => {
          let T = m ? J("SIGTERM") : 0;
          return (e.onShutdown?.(), T);
        },
        () => B,
        e.onYield ?? (() => !1),
        E.promise,
        e.storageV5,
      );
      ((o = L),
        t(`bg: control socket bound at ${redactDaemonNonce(getControlSocketPath())}`),
        L.onLeaseChange.subscribe(k),
        L.onLeaseChange.subscribe(() => {
          if (L.leaseCount() > 0 && !O) ((O = !0), q());
        }),
        await Promise.all(
          getCurrentPlatform() === "windows"
            ? [fr(e.storageV5)]
            : [
                je(getRendezvousDir(), { recursive: !0, mode: 448 }).catch(() => {}),
                je(getPtySocketDir(), { recursive: !0, mode: 448 }).catch(() => {}),
              ],
        ),
        pruneStaleDaemonDirs());
      let X = await readRoster(void 0, e.storageV5),
        ne = 0,
        ie = 0,
        he = 0,
        De = 0,
        Q = 0,
        ye = 0,
        ve = X.updatedAt > 0 && Date.now() - X.updatedAt > ABANDONED_WORKER_MS;
      if (
        (await Promise.all(
          Object.entries(X.workers).map(async ([m, T]) => {
            let K;
            try {
              K = await BgSessionWorker.adopt(
                m,
                T,
                d,
                e.getAuthSnapshot,
                e.storageV5,
                e.credentials,
              );
            } catch (ee) {
              (logError(redactDaemonNonceFromError(ee)), ie++);
              return;
            }
            if (
              !K &&
              T.procStart === void 0 &&
              T.ptySock &&
              (await pingPtySocket(T.ptySock))
            ) {
              T.procStart = await getProcessStartTimeAsync(T.pid);
              try {
                K = await BgSessionWorker.adopt(
                  m,
                  T,
                  d,
                  e.getAuthSnapshot,
                  e.storageV5,
                  e.credentials,
                );
              } catch (ee) {
                (logError(redactDaemonNonceFromError(ee)), (K = null));
              }
              K ??= BgSessionWorker.unverified(m, T, e.storageV5, e.credentials);
            }
            if (K)
              (a.set(m, K),
                qe(a, K, k, w, t, {
                  storageV5: e.storageV5,
                  credentials: e.credentials,
                  noteSettled: D,
                }),
                ne++);
            else if (
              T.pendingRespawn === "upgrade" &&
              !areVersionTargetsDifferent(
                T.cliVersion,
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
              !ve
            )
              (ye++,
                logEvent("tengu_bg_adopt_upgrade_respawn", {}),
                Y(T.dispatch, 0, !0).catch((ee) => logError(ee)));
            else {
              ie++;
              let ee = !1;
              if (T.pendingRespawn === "upgrade" && ve) (De++, (ee = !0));
              let le = await readExecExitStatus(T.ptySock, T.dispatch),
                ce = le ?? {
                  state: "failed",
                  detail: "process gone while supervisor was down",
                };
              if (
                (await writeReapedTerminalState(
                  m,
                  ce.state,
                  ce.detail,
                  { resumable: le ? void 0 : "auto-resume" },
                  e.storageV5,
                )) === "dead-epoch"
              )
                (he++, (ee = !0));
              if (ee) Q++;
              if (e.credentials)
                e.credentials
                  .discardSpentCredentialFile(getTokensFilePath(m))
                  .catch(() => {});
              else te(getTokensFilePath(m)).catch(() => {});
              if (getCurrentPlatform() === "windows")
                if (e.storageV5) et(e.storageV5, m, T.ptySock);
                else
                  (te(getPtyPidFilePath(m)).catch(() => {}),
                    te(getPtyHostStderrPath(getPtySocketPath(m))).catch(() => {}),
                    te(getPtyLateOutputPath(getPtySocketPath(m))).catch(() => {}),
                    te(getPtyExecExitPath(T.ptySock ?? getPtySocketPath(m))).catch(() => {}));
              else {
                if (e.credentials)
                  e.credentials
                    .discardSpentCredentialFile(getCredentialFilePath(m))
                    .catch(() => {});
                else te(getCredentialFilePath(m)).catch(() => {});
                if ((te(T.rendezvousSock).catch(() => {}), T.ptySock)) {
                  (te(T.ptySock).catch(() => {}),
                    te(getPtyHostStderrPath(T.ptySock)).catch(() => {}),
                    te(getPtyLateOutputPath(T.ptySock)).catch(() => {}),
                    te(getPtyExecExitPath(T.ptySock)).catch(() => {}),
                    await reapDetachedRepl(T.replPid, T.replProcStart));
                  try {
                    process.kill(T.pid, 0);
                  } catch {
                    sigtermThenKill([-T.pid]);
                  }
                }
              }
            }
          }),
        ),
        ne + ie + ye > 0)
      )
        if (
          (t(
            `bg adopt: adopted=${ne} respawned=${ye} dead=${ie}` +
              (he > 0 ? ` dead_epoch=${he}` : "") +
              (De > 0
                ? ` upgrade_skipped=${De} (previous roster written ${Math.round((Date.now() - X.updatedAt) / 86400000)}d ago)`
                : ""),
          ),
          logEvent("tengu_bg_adopt", {
            adopted: ne,
            respawned: ye,
            dead: ie,
            dead_epoch: he,
            upgrade_skipped: De,
          }),
          ie - Q === 0)
        )
          logFeatureOk("daemon_bg_adopt");
        else if (ne > 0 || ye > 0) logFeatureSad("daemon_bg_adopt", "partial");
        else logFeatureBad("daemon_bg_adopt", "all_workers_dead");
      let pe = await readDaemonLock(e.storageV5).catch(() => null),
        be = pe?.pid === process.pid,
        fe =
          !(pe !== null && pe.pid !== process.pid) &&
          !(e.isShuttingDown?.() ?? !1);
      if (!be)
        t(
          `bg: skipped post-adopt sweeps + roster rewrite \u2014 daemon.lock is ${pe ? `held by pid ${pe.pid}` : "absent"} (yield/handover in flight)`,
        );
      if (be && !X.parseFailed) cr(a, t, { storageV5: e.storageV5 });
      if (be && !X.parseFailed) await reapOrphanSpares(a, t);
      if (be && !X.inspectFailed)
        await updateRoster((m) => {
          m.workers = {};
          for (let [T, K] of a) m.workers[T] = K.rosterEntry();
        }, e.storageV5).catch((m) => logError(m));
      let Pe = fe
        ? await kt((m) => void Y(m).catch((T) => logError(T)), e.storageV5)
        : null;
      if (((r = Pe ?? void 0), (B = fe), fe)) E.resolve();
      if ((k(), fe && a.size > 0)) O = !0;
      if ((q(), fe)) _e().catch((m) => logError(m));
      re = Date.now();
      let ke = !1,
        Be = setInterval(
          async (m, T) => {
            if (ke) return;
            ke = !0;
            try {
              await Oe(m, T);
            } finally {
              ke = !1;
            }
          },
          Me,
          a,
          q,
        );
      async function Oe(m, T) {
        {
          let K = Date.now(),
            ee = K - re - Me;
          if (((re = K), ee > Me)) {
            for (let c of m.values()) c.shiftGraceClocksForward(ee);
            T();
            return;
          }
          let le = isLowMemory(),
            ce = le ? Je : or,
            de = le ? Je : ir,
            me = await Xe(e.storageV5);
          for (let c of m.values())
            if (me.has(c.dispatch.short))
              c.respawnIfIdleStale(me).catch((I) => logError(I));
          let Se = await Promise.all(
              [...m.values()].map((c) =>
                c
                  .retireIfSettled(ce, me, de)
                  .then((I) => Ze(t, c, I, le ? "low memory" : ""))
                  .catch((I) => (logError(I), !1)),
              ),
            ),
            $e = countMatching(Se, (c) => c);
          if (le && $e === 0 && isLowMemory()) {
            let c = [...m.values()].filter((I) => me.has(I.dispatch.short));
            if (c.length > 0) {
              (t(
                "bg: low memory persists after shedding non-pinned \u2014 retiring pinned settled workers as a last resort",
              ),
                logEvent("tengu_bg_retire_pinned_low_mem", {}));
              for (let I of c)
                I.retireIfSettled(ce, lr, de)
                  .then((j) => Ze(t, I, j, "low memory, pinned"))
                  .catch((j) => logError(j));
            }
          }
          if (!le && isBackgroundAttachUpgradeEnabled()) {
            let c = getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_prewarm_per_sweep", 3),
              I = 12;
            for (let j of m.values()) {
              if (c <= 0 || I <= 0) break;
              if (me.has(j.dispatch.short)) continue;
              if (j.isBooting) {
                c--;
                continue;
              }
              if (!j.isVersionStale) continue;
              if (j.dispatch.launch.mode === "exec") continue;
              if (
                areVersionTargetsDifferent(
                  j.record.cliVersion,
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
              )
                continue;
              if (
                j.record.cliVersion &&
                isVersionGreater(
                  j.record.cliVersion,
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
              ) {
                j.noteDowngradeRefused("prewarm");
                continue;
              }
              if (
                (
                  await j
                    .respawnIfIdleStale(void 0, "prewarm")
                    .catch((we) => (logError(we), { respawned: !1 }))
                ).respawned
              )
                c--;
              else I--;
            }
          }
          T();
        }
      }
      Be.unref();
      async function _e() {
        let m = getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_prewarm_burst_delay_ms", 15000);
        if ((await sleep(m, void 0, { unref: !0 }), _)) return;
        let T = getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_prewarm_burst_concurrency", 3);
        if (T <= 0 || !isBackgroundAttachUpgradeEnabled()) return;
        let K = await Xe(e.storageV5),
          ee = new Set(
            [...a.values()].filter(
              (j) =>
                !j.record.outcome &&
                !j.isUnverified &&
                j.isVersionStale &&
                j.dispatch.launch.mode !== "exec" &&
                !K.has(j.dispatch.short),
            ),
          );
        if (ee.size === 0) return;
        let le = ee.size,
          ce = Date.now(),
          de = 0,
          me = 0,
          Se = 0,
          $e = !1,
          c = !1,
          I = ce + sr;
        while (ee.size > 0 && Date.now() < I && !_) {
          if (Date.now() - re > Me * 2) {
            c = !0;
            break;
          }
          if (isLowMemory()) {
            $e = !0;
            break;
          }
          let j =
            T - countMatching([...a.values()], (ae) => ae.isBooting && !ae.isUnverified);
          for (let ae of ee) {
            if (j <= 0) break;
            if ((ee.delete(ae), ae.isBooting)) {
              Se++;
              continue;
            }
            if (
              (
                await ae
                  .respawnIfIdleStale(void 0, "burst")
                  .catch((Vt) => (logError(Vt), { respawned: !1 }))
              ).respawned
            )
              (de++, j--);
            else me++;
          }
          if (ee.size === 0) break;
          await sleep(ar, void 0, { unref: !0 });
        }
        (t(
          `bg: post-takeover prewarm burst \u2014 respawned ${de}/${le} stale workers` +
            (me > 0 ? `, ${me} refused` : "") +
            ($e ? `, stopped on low memory (${ee.size} left)` : "") +
            (c
              ? `, deferred to sweep on stale anchor \u2014 host slept? (${ee.size} left)`
              : "") +
            ` in ${Math.round((Date.now() - ce) / 1000)}s`,
        ),
          logEvent("tengu_bg_prewarm_burst", {
            candidates: le,
            respawned: de,
            refused: me,
            alreadyBooting: Se,
            remaining: ee.size,
            lowMemStop: $e,
            sweepStaleStop: c,
            durationMs: Date.now() - ce,
          }));
      }
      return {
        handles: a,
        dispatch: (m) => void Y(m).catch((T) => logError(T)),
        leaseCount: L.leaseCount,
        liveHandleCount: () => {
          let m = 0;
          for (let T of a.values()) if (!T.record.outcome) m++;
          return m;
        },
        pendingSettleWrites: () => w.size,
        killAll: J,
        close: async (m) => {
          let T = m?.displaced ?? !1;
          if (((_ = !0), clearInterval(Be), v)) (v.dispose(), (v = null));
          await Promise.all([
            Pe?.close().catch(() => {}),
            L.close({ skipUnlink: T || m?.skipPathCleanup }).catch(() => {}),
          ]);
          for (let K of a.values()) K.stop();
          if (
            (await Promise.allSettled([...w]),
            !T &&
              a.size === 0 &&
              !X.parseFailed &&
              !m?.skipPathCleanup &&
              getCurrentPlatform() !== "windows")
          )
            await Fe(getDaemonRuntimeDir(), { recursive: !0, force: !0 }).catch(() => {});
        },
      };
    };
  try {
    return await withFeatureTelemetry(
      "daemon_bg_manager_start",
      p,
      (w) => Jr(w)?.toLowerCase() ?? "error",
    );
  } catch (w) {
    for (let k of a.values()) k.stop();
    await r?.close().catch(() => {});
    let d = await readDaemonLock(e.storageV5).catch(() => null);
    throw (
      await o
        ?.close(d?.pid === process.pid ? void 0 : { skipUnlink: !0 })
        .catch(() => {}),
      w
    );
  }
}
function qe(t, e, o, r, a, p) {
  (e.onSettle.subscribe((w) => {
    let d = getJobDir(e.record.short),
      k = w === "done" ? "done" : w === "killed" ? "stopped" : "failed",
      D = e.record.detail,
      _ = e.sessionIdTaken,
      B =
        w === "crashed" && D
          ? redactDaemonNonce(D.replace(/; respawning$/, "")).replace(/\s*\n\s*/g, " \xB7 ")
          : "";
    if (
      (a(`bg settled ${e.record.short} (${w})${B ? `: ${B}` : ""}`),
      e.shouldDeleteJobDir)
    )
      ue(
        r,
        p.storageV5 && d === getJobDir(e.record.short)
          ? bt(p.storageV5, e.record.short, d, (v) =>
              logError(
                new R(
                  `jobdir retire deleteScope: ${v}`,
                  "jobdir retire deleteScope failed",
                ),
              ),
            ).catch((v) => logError(v))
          : Fe(d, { recursive: !0, force: !0 }).catch((v) => logError(v)),
      );
    else if (w === "killed" && e.isHandoffKill)
      logEvent("tengu_bg_handoff_settle", { jobSessionId: sanitizeAnalyticsId(e.record.sessionId) });
    else
      ue(
        r,
        readJobState(d, p.storageV5)
          .then((v) => {
            if (
              v
                ? (isSettled(v) && !(w === "crashed" && v.state === "failed")) ||
                  (w === "done" &&
                    v.state === "blocked" &&
                    e.dispatch.launch.mode !== "exec")
                : w !== "crashed" || e.dispatch.source === "spare"
            ) {
              if (!v && e.dispatch.source === "spare") {
                if (p.storageV5 && d === getJobDir(e.record.short))
                  return p.storageV5
                    .statMeta(STORAGE_KEYS.job(e.record.short, ["state.json"]))
                    .then(
                      (N) =>
                        !N.ok && N.error.code === "NotFound"
                          ? bt(p.storageV5, e.record.short, d, (O) =>
                              logError(
                                new R(
                                  `spare-sweep deleteScope: ${O}`,
                                  "spare-sweep deleteScope failed",
                                ),
                              ),
                            ).catch((O) => logError(O))
                          : void 0,
                      () => {
                        return;
                      },
                    );
                return Qe(yt(d, "state.json")).then(
                  () => {
                    return;
                  },
                  (N) =>
                    A(N) === "ENOENT"
                      ? Fe(d, { recursive: !0, force: !0 }).catch((O) => logError(O))
                      : void 0,
                );
              }
              return;
            }
            let s = new Date().toISOString(),
              C = v ?? {
                state: "working",
                detail: "",
                tempo: "active",
                output: null,
                children: null,
                linkScanOffset: 0,
                template:
                  e.dispatch.launch.mode === "exec"
                    ? "exec"
                    : (e.dispatch.agent ?? e.dispatch.routine ?? "bg"),
                routine: e.dispatch.routine,
                respawnFlags: sanitizeRespawnFlags([...e.dispatch.respawnFlags]),
                intent: e.record.intent,
                name: e.record.name,
                sessionId: e.record.sessionId,
                cwd: e.record.cwd,
                worktreePath:
                  e.dispatch.worktree?.path ?? e.record.worktreePath,
                createdAt: new Date(e.dispatch.createdAt).toISOString(),
                updatedAt: s,
                firstTerminalAt: null,
                backend: "daemon",
              };
            return writeStateAtomic(
              d,
              {
                ...C,
                state: k,
                detail:
                  k === "stopped"
                    ? "stopped"
                    : (D || C.detail).replace(/; respawning$/, ""),
                tempo: "idle",
                inFlight: void 0,
                needs: void 0,
                block: void 0,
                ...(_ && { sessionIdTaken: !0 }),
                updatedAt: s,
                firstTerminalAt: C.firstTerminalAt ?? s,
              },
              p.storageV5,
            );
          })
          .catch((v) => logError(v)),
      );
    if (
      (ue(
        r,
        updateRoster((v) => {
          delete v.workers[e.record.short];
        }, p.storageV5).catch((v) => logError(v)),
      ),
      p.credentials)
    )
      ue(
        r,
        p.credentials
          .discardSpentCredentialFile(getTokensFilePath(e.record.short))
          .catch(() => {}),
      );
    else
      ue(
        r,
        te(getTokensFilePath(e.record.short)).catch(() => {}),
      );
    let E = e.rosterEntry();
    if (getCurrentPlatform() === "windows")
      if (p.storageV5) ue(r, et(p.storageV5, e.record.short, E.ptySock));
      else
        (ue(
          r,
          te(getPtyPidFilePath(e.record.short)).catch(() => {}),
        ),
          ue(
            r,
            te(getPtyHostStderrPath(getPtySocketPath(e.record.short))).catch(() => {}),
          ),
          ue(
            r,
            te(getPtyLateOutputPath(getPtySocketPath(e.record.short))).catch(() => {}),
          ),
          ue(
            r,
            te(getPtyExecExitPath(E.ptySock ?? getPtySocketPath(e.record.short))).catch(() => {}),
          ));
    else {
      if (p.credentials)
        ue(
          r,
          p.credentials
            .discardSpentCredentialFile(getCredentialFilePath(e.record.short))
            .catch(() => {}),
        );
      else
        ue(
          r,
          te(getCredentialFilePath(e.record.short)).catch(() => {}),
        );
      if (
        (ue(
          r,
          te(E.rendezvousSock).catch(() => {}),
        ),
        E.ptySock)
      )
        (ue(
          r,
          te(E.ptySock).catch(() => {}),
        ),
          ue(
            r,
            te(getPtyHostStderrPath(E.ptySock)).catch(() => {}),
          ),
          ue(
            r,
            te(getPtyLateOutputPath(E.ptySock)).catch(() => {}),
          ),
          ue(
            r,
            te(getPtyExecExitPath(E.ptySock)).catch(() => {}),
          ));
    }
    if (e.dispatch.launch.mode === "exec" && w !== "killed") {
      (o(),
        setTimeout(
          (s, C, N) => {
            if (s.get(C) === N) s.delete(C);
          },
          300000,
          t,
          e.record.short,
          e,
        ).unref());
      return;
    }
    if (e.record.nonce) p.noteSettled(e.record.short, e.record.nonce);
    (t.delete(e.record.short), o());
  }),
    e.onState.subscribe((w) => {
      if (w.pid)
        ue(
          r,
          updateRoster((d) => {
            d.workers[e.record.short] = e.rosterEntry();
          }, p.storageV5).catch((d) => logError(d)),
        );
      if (w.state === "crashed" || w.state === "resuming") {
        let d = w.state,
          k = e.record.detail,
          D = d === "crashed" ? "idle" : "active",
          _ = getJobDir(e.record.short),
          B = readJobState(_, p.storageV5)
            .then((E) => {
              if (
                e.record.outcome ||
                !E ||
                isSettled(E) ||
                E.state === "blocked" ||
                E.tempo === "blocked"
              )
                return;
              if (d === "resuming" && E.state !== "crashed") return;
              return writeStateAtomic(
                _,
                {
                  ...E,
                  state: d,
                  detail: k,
                  tempo: D,
                  inFlight: void 0,
                  updatedAt: new Date().toISOString(),
                },
                p.storageV5,
              );
            })
            .catch((E) => logError(E));
        ue(r, B);
      }
    }));
}
async function cr(t, e, o = {}) {
  let r = getCurrentPlatform() === "windows",
    [a, p] = r ? [getPtyPidDir(), ".pid"] : [getPtySocketDir(), ".sock"],
    w = r && o.storageV5 ? await listPtyPidFiles(o.storageV5) : await er(a).catch(() => []),
    d = new Set(w.filter((D) => D.endsWith(p))),
    k = 0;
  for (let D of w) {
    if (!D.endsWith(p)) {
      let v = (
        r
          ? [".err", ".late", ".err.read"]
          : [".err", ".late", ".exec-exit", ".err.read"]
      ).find((s) => D.endsWith(r ? s : `.sock${s}`));
      if (v) {
        let s = D.slice(0, -v.length),
          C = r ? s.lastIndexOf("-pty-") : -1,
          N = r ? (C >= 0 ? `${s.slice(C + 5)}.pid` : "") : s;
        if (N && !d.has(N))
          if (r && o.storageV5)
            o.storageV5.delete(STORAGE_KEYS.daemon(["pty-pids", D])).catch(() => {});
          else te(yt(a, D)).catch(() => {});
      }
      continue;
    }
    let _ = D.slice(0, -p.length);
    if (t.has(_)) continue;
    k++;
    let B = getPtyPidFilePath(_);
    killPtySocket(getPtySocketPath(_), o.storageV5).then((E) => {
      let v = getPtyHostStderrPath(getPtySocketPath(_)),
        s = getPtyLateOutputPath(getPtySocketPath(_)),
        C = getPtyExecExitPath(getPtySocketPath(_));
      if (!r) {
        (writeReapedTerminalState(
          _,
          "failed",
          "reaped (roster gap)",
          { resumable: "wake-only" },
          o.storageV5,
        ),
          te(s).catch(() => {}),
          te(C).catch(() => {}));
        return;
      }
      let N = () => {
        if (o.storageV5) et(o.storageV5, _, void 0);
        else
          (te(B).catch(() => {}),
            te(v).catch(() => {}),
            te(s).catch(() => {}),
            te(C).catch(() => {}));
      };
      if (E) {
        (writeReapedTerminalState(
          _,
          "failed",
          "reaped (roster gap)",
          { resumable: "wake-only" },
          o.storageV5,
        ),
          N());
        return;
      }
      (o.storageV5 ? readStoredPtyPid(o.storageV5, _) : readBoundedFile(B, MAX_PTY_PID_FILE_BYTES))
        .then((O) => {
          if (O === null) return;
          if (!isProcessRunning(Number(O)))
            (writeReapedTerminalState(
              _,
              "failed",
              "reaped (roster gap)",
              { resumable: "wake-only" },
              o.storageV5,
            ),
              N());
        })
        .catch(() => {});
    });
  }
  if (k)
    (e(`bg orphan-reap: ${k} roster-less pty host(s)`),
      logEvent("tengu_bg_orphan_reap", { reaped: k }));
}
var ur = { namespace: "daemon", relPath: ["pty-pids"] };
async function pr(t) {
  if (isHoverRestEnabled() && t !== void 0) {
    await ensureHostManagedScope(t);
    return;
  }
  await je(getHostManagedDir(), { recursive: !0, mode: 448 });
}
async function fr(t) {
  if (isHoverRestEnabled() && t !== void 0) {
    await t.ensureScope(ur).catch(() => {
      return;
    });
    return;
  }
  await je(getPtyPidDir(), { recursive: !0 }).catch(() => {});
}
async function et(t, e, o) {
  for (let r of [Ve(getPtyPidFilePath(e)), Ve(getPtyHostStderrPath(getPtySocketPath(e))), Ve(getPtyLateOutputPath(getPtySocketPath(e))), Ve(getPtyExecExitPath(o ?? getPtySocketPath(e)))])
    await t.delete(STORAGE_KEYS.daemon(["pty-pids", r])).catch(() => {});
}
async function gr(t) {
  let e = await Qt(t).catch(() => null);
  if (e === null || e.isDirectory()) return !1;
  return (await Fe(t, { recursive: !0, force: !0 }), !0);
}
async function bt(t, e, o, r) {
  if (await gr(o)) return;
  let a = await t.deleteScope({ namespace: "job", jobId: e });
  if (!a.ok) r(a.error.code);
}
var mr = /^[0-9A-Za-z.+_-]{1,100}$/;
function Ze(t, e, o, r) {
  if (!o.retired) return !1;
  let a = Math.round(o.idleMs / 60000),
    p = a >= 120 ? `${Math.round(a / 60)}h` : `${a}m`,
    w =
      e.record.cliVersion && mr.test(e.record.cliVersion)
        ? e.record.cliVersion
        : "unrecognized",
    d = e.isVersionStale
      ? `, worker ${w} (daemon ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION})`
      : "";
  return (
    t(
      `bg retire ${e.record.short}: ${o.cause}, idle ${p}${d}${r ? ` [${r}]` : ""}`,
    ),
    !0
  );
}
function ue(t, e) {
  (t.add(e), e.finally(() => t.delete(e)));
}
import { spawn as hr } from "child_process";
import { access as wr } from "fs/promises";
import { createInterface } from "readline";
var _r = 60000,
  kr = 5000,
  vr = 300000,
  br = 30000,
  yr = 60000,
  He = 2000,
  Er = 300000;
function $t(t) {
  return Math.round(t * (0.5 + Math.random()));
}
function $r(t) {
  return $t(Math.min(1000 * 2 ** t, vr));
}
class Ge {
  id;
  kind;
  config;
  invocation;
  logger;
  authManager;
  onStateChange;
  child = null;
  spawnedAt = 0;
  stopping = !1;
  consecutiveCrashes = 0;
  backoffTimer = null;
  wrapperParkLogged = !1;
  exitPromise = null;
  lastBusy = !1;
  lastBusyAt = 0;
  constructor(t, e, o, r, a, p, w) {
    this.id = t;
    this.kind = e;
    this.config = o;
    this.invocation = r;
    this.logger = a;
    this.authManager = p;
    this.onStateChange = w;
  }
  get status() {
    let t = this.child?.pid;
    return t !== void 0 ? { pid: t, startedAt: this.spawnedAt } : null;
  }
  isBusy() {
    return (
      this.lastBusy && this.child !== null && Date.now() - this.lastBusyAt < Er
    );
  }
  start(t = 0) {
    if (((this.stopping = !1), t > 0)) this.scheduleRespawn(t);
    else this.spawn();
  }
  updateConfig(t) {
    this.config = t;
  }
  async stop(t) {
    if (((this.stopping = !0), this.backoffTimer))
      (clearTimeout(this.backoffTimer), (this.backoffTimer = null));
    let e = this.child;
    if (!e) return;
    let o = this.exitPromise,
      r = !1;
    if (typeof e.send === "function")
      try {
        r = e.send(
          t !== void 0 ? { type: "shutdown", cause: t } : { type: "shutdown" },
        );
      } catch {}
    if (getCurrentPlatform() !== "windows" || !r) e.kill("SIGTERM");
    let a = setTimeout((p) => p.kill("SIGKILL"), kr, e);
    if ((a.unref(), o)) await o;
    clearTimeout(a);
  }
  spawn() {
    let t = getLauncherConfigError();
    if (t) {
      if (
        (this.logger.write(this.id, `not started: ${t}`),
        !this.wrapperParkLogged)
      )
        ((this.wrapperParkLogged = !0),
          logFeatureBad("agent_launcher", "registry_worker_refused"));
      this.scheduleRespawn(yr);
      return;
    }
    let e = Date.now();
    this.spawnedAt = e;
    let o = applyProcessWrapper(this.invocation),
      r = hr(o.cmd, [...o.prefixArgs, "--daemon-worker", this.kind], {
        stdio: this.authManager
          ? ["pipe", "pipe", "pipe", "ipc"]
          : ["pipe", "pipe", "pipe"],
        windowsHide: !0,
      });
    if (
      ((this.child = r),
      this.onStateChange?.(),
      r.stdin.on("error", (d) => {
        this.logger.write(this.id, `stdin write error: ${d.message}`);
      }),
      r.stdin.write(
        jsonStringify({
          config: this.config,
          initialAccessToken: this.authManager?.getAccessToken(),
        }) +
          `
`,
      ),
      r.stdin.end(),
      this.authManager)
    )
      this.authManager.attachWorker(r);
    r.on("message", (d) => {
      if (
        this.child === r &&
        typeof d === "object" &&
        d !== null &&
        "type" in d &&
        d.type === "rc_busy" &&
        "busy" in d &&
        typeof d.busy === "boolean"
      )
        ((this.lastBusy = d.busy), (this.lastBusyAt = Date.now()));
    });
    let a = createInterface({ input: r.stdout });
    a.on("line", (d) => this.logger.write(this.id, d));
    let p = createInterface({ input: r.stderr });
    (p.on("line", (d) => this.logger.write(this.id, d)),
      r.on("spawn", () => {
        ((this.wrapperParkLogged = !1), logFeatureOk("daemon_worker_spawn"));
      }));
    let w = !1;
    this.exitPromise = new Promise((d) => {
      let k = (D, _) => {
        if (w) return;
        if (
          ((w = !0),
          a.close(),
          p.close(),
          (this.child = null),
          (this.lastBusy = !1),
          this.onStateChange?.(),
          this.authManager)
        )
          this.authManager.detachWorker(r);
        ((this.exitPromise = null), this.onExit(D, _, e), d());
      };
      (r.on("exit", k),
        r.on("error", (D) => {
          (this.logger.write(this.id, `spawn error: ${D.message}`),
            logFeatureBad(
              "daemon_worker_spawn",
              W(D) ? "daemon_worker_spawn_enoent" : "daemon_worker_spawn_error",
            ));
          let _ = getLauncherArgv()[0],
            B = A(D);
          if (_ && (W(D) || B === "EACCES" || B === "EPERM")) {
            if (
              (this.logger.write(
                this.id,
                W(D)
                  ? `not started: launcher \`${_}\` was deleted or moved (ENOENT) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER; retrying in the background`
                  : `not started: launcher \`${_}\` cannot be executed (${B}) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER or the launcher's permissions; retrying in the background`,
              ),
              !this.wrapperParkLogged)
            )
              ((this.wrapperParkLogged = !0),
                logFeatureBad("agent_launcher", "registry_worker_refused"));
            k(TEMP_FAILURE_EXIT_CODE, null);
            return;
          }
          if (!W(D)) {
            k(null, null);
            return;
          }
          findInstalledVersionBinary().then((E) => {
            if (E && E !== this.invocation.target)
              (this.logger.write(
                this.id,
                `execPath gone (version GC?) \u2014 re-resolved to ${E}`,
              ),
                (this.invocation = applyProcessWrapper({ cmd: E, prefixArgs: [], target: E })),
                (this.consecutiveCrashes = 0));
            k(null, null);
          });
        }));
    });
  }
  onExit(t, e, o) {
    if (this.stopping) return;
    let r = Date.now() - o;
    if (t === TEMP_FAILURE_EXIT_CODE) {
      let p = $t(br);
      (this.logger.write(
        this.id,
        `exited tempfail code=${t} uptime=${r}ms \u2014 retry in ${p}ms`,
      ),
        this.scheduleRespawn(p));
      return;
    }
    if (t === PERMANENT_FAILURE_EXIT_CODE) {
      (this.logger.write(
        this.id,
        `exited permanently code=${t} uptime=${r}ms \u2014 will not respawn`,
      ),
        logEvent("tengu_daemon_worker_permanent_exit", {
          exit_code: t ?? void 0,
          uptime_ms: r,
          worker_kind: fromEnum(this.kind),
        }));
      return;
    }
    if (t === 0 && r < FAST_CRASH_WINDOW_MS && getLauncherArgv().length > 0) {
      if (
        (this.logger.write(
          this.id,
          `not started: launcher \`${getLauncherArgv()[0]}\` exited ${r}ms after spawn, before ${this.kind} started \u2014 it must exec its arguments, not daemonize; will not respawn until the launcher is fixed and the daemon restarts`,
        ),
        !this.wrapperParkLogged)
      )
        ((this.wrapperParkLogged = !0),
          logFeatureBad("agent_launcher", "registry_worker_launcher_forked"));
      logEvent("tengu_daemon_worker_permanent_exit", {
        exit_code: t ?? void 0,
        uptime_ms: r,
        worker_kind: fromEnum(this.kind),
      });
      return;
    }
    if (t !== 0 || r < _r) {
      if ((this.consecutiveCrashes++, getLauncherArgv().length > 0))
        wr(this.invocation.target)
          .catch(() => findInstalledVersionBinary())
          .then((w) => {
            if (typeof w === "string" && w && w !== this.invocation.target)
              (this.logger.write(
                this.id,
                `target \`${this.invocation.target}\` is gone (version GC?) \u2014 re-resolved to ${w}`,
              ),
                (this.invocation = applyProcessWrapper({ cmd: w, prefixArgs: [], target: w })),
                (this.consecutiveCrashes = 0));
          })
          .catch(() => {});
      let p = $r(this.consecutiveCrashes);
      (this.logger.write(
        this.id,
        `exited code=${t} sig=${e} uptime=${r}ms consecutive=${this.consecutiveCrashes} backoff=${p}ms`,
      ),
        logEvent("tengu_daemon_worker_crash", {
          consecutive: this.consecutiveCrashes,
          exit_code: t ?? void 0,
          uptime_ms: r,
          worker_kind: fromEnum(this.kind),
        }),
        this.scheduleRespawn(p));
    } else
      ((this.consecutiveCrashes = 0),
        this.logger.write(
          this.id,
          `exited code=${t} sig=${e} uptime=${r}ms (clean) \u2014 respawning`,
        ),
        this.spawn());
  }
  scheduleRespawn(t) {
    if (this.backoffTimer) clearTimeout(this.backoffTimer);
    ((this.backoffTimer = setTimeout(() => {
      if (((this.backoffTimer = null), !this.stopping)) this.spawn();
    }, t)),
      this.backoffTimer.unref());
  }
}
function Pt(t) {
  return t === "heartbeat" || isDaemonWorkerRegistryEnabled();
}
function Pr(t) {
  let e = 0;
  for (let o of Object.keys(WORKER_KINDS)) e += (t[o] ?? []).length;
  return e;
}
async function Rt(t) {
  let {
      jsonPath: e,
      invocation: o,
      logger: r,
      authManager: a,
      watch: p = watchDaemonConfigFile,
      storageV5: w,
    } = t,
    d = new Map(),
    k = getDefaultDaemonConfig();
  function D() {
    let O = {};
    for (let [V, q] of d) {
      let re = q.status;
      if (re) O[V] = re;
    }
    writeDaemonStatus(O, w);
  }
  let _ = await loadDaemonConfig(e, w);
  if (_.ok) {
    k = _.config;
    for (let O of _.unknownKeys)
      r.write("supervisor", `unknown config key '${O}' \u2014 upgrade claude?`);
  } else r.write("supervisor", `config load failed: ${_.error} \u2014 idling`);
  await a.ready;
  let B = 0;
  for (let O of Object.keys(WORKER_KINDS)) {
    if (!Pt(O)) continue;
    let V = k[O] ?? [];
    for (let q = 0; q < V.length; q++) {
      let re = `${O}:${q}`,
        Y = new Ge(re, O, V[q], o, r, a, D);
      (d.set(re, Y), Y.start(B++ * He), r.write("supervisor", `spawned ${re}`));
    }
  }
  D();
  let E = async () => {
      let O = await loadDaemonConfig(e, w);
      if (!O.ok) {
        r.write(
          "supervisor",
          `config reload failed: ${O.error} \u2014 keeping last-good config`,
        );
        return;
      }
      for (let J of O.unknownKeys)
        r.write(
          "supervisor",
          `unknown config key '${J}' \u2014 upgrade claude?`,
        );
      let V = diffDaemonConfigs(k, O.config);
      k = O.config;
      let q = new Set((O.config.remoteControl ?? []).map(tt));
      for (let { id: J, kind: L, previousConfig: X } of V.stop) {
        let ne = d.get(J);
        if (ne) {
          let ie = tt(X),
            he = L === "remoteControl" && ie !== void 0 && q.has(ie);
          (await ne.stop(he ? "reload" : void 0),
            d.delete(J),
            r.write("supervisor", `stopped ${J}`));
        }
      }
      for (let { id: J, kind: L, previousConfig: X } of V.restart) {
        let ne = d.get(J);
        if (ne) {
          let ie = tt(X),
            he = L !== "remoteControl" || (ie !== void 0 && q.has(ie));
          await ne.stop(he ? "reload" : void 0);
        }
      }
      let re = 0;
      for (let { id: J, config: L } of V.restart) {
        let X = d.get(J);
        if (X)
          (X.updateConfig(L),
            X.start(re++ * He),
            r.write("supervisor", `restarted ${J}`));
      }
      let Y = 0;
      for (let { id: J, kind: L, config: X } of V.start) {
        if (!Pt(L)) continue;
        let ne = new Ge(J, L, X, o, r, a, D);
        (d.set(J, ne),
          ne.start(Y++ * He),
          r.write("supervisor", `spawned ${J}`));
      }
      if (V.stop.length + V.start.length + V.restart.length > 0)
        (r.write(
          "supervisor",
          `reload: stopped=${V.stop.length} started=${V.start.length} restarted=${V.restart.length}`,
        ),
          logEvent("tengu_daemon_config_reload", {
            stopped: V.stop.length,
            started: V.start.length,
            restarted: V.restart.length,
          }));
    },
    v = Promise.resolve(),
    s = p(e, () => {
      v = v.then(E).catch((O) => logError(O));
    }),
    C = !1;
  function N() {
    if (C) return;
    ((C = !0), s());
  }
  return {
    workerCount: () => Pr(k),
    hasOAuthConsumer: () => {
      for (let O of d.values()) if (WORKER_KINDS[O.kind].needsOAuth) return !0;
      return !1;
    },
    busyWorkerCount: () => {
      let O = 0;
      for (let V of d.values()) if (V.isBusy()) O++;
      return O;
    },
    disposeWatcher: N,
    drainReloads: () => v,
    stop: async (O) => {
      (N(),
        await v,
        await Promise.all(Array.from(d.values()).map((V) => V.stop(O))),
        await removeDaemonStatus(w));
    },
  };
}
function tt(t) {
  if (typeof t !== "object" || t === null || !("dir" in t)) return;
  let { dir: e } = t;
  return typeof e === "string" ? e : void 0;
}
var Ar = 60000,
  Cr = 100,
  Ct = 5000,
  Ir = 1800000,
  Tr = DAEMON_START_TIMEOUT_MS + Ct;
async function At(t) {
  try {
    let e = await realpath(t),
      o = await Rr(e);
    return { target: e, mtimeMs: o.mtimeMs };
  } catch (e) {
    if (W(e)) return null;
    throw e;
  }
}
function xr(t, e) {
  if (t.target !== e.target) return !0;
  return !isRunningInstalledBinary() && t.mtimeMs !== e.mtimeMs;
}
function Mr(t) {
  if (
    Po(t) &&
    t.syscall === "listen" &&
    (t.code === "EADDRINUSE" || t.code === "EACCES")
  ) {
    logForDebugging(`bg manager start failed (listen): ${t.code} ${t.message}`, {
      level: "warn",
    });
    return;
  }
  logError(t);
}
async function It(t) {
  let {
      jsonPath: e,
      logPath: o,
      origin: r,
      spawnedBy: a,
      signal: p,
      watch: w = watchDaemonConfigFile,
      createAuth: d = createDaemonAuth,
      staleCheckIntervalMs: k = Ar,
      idleGraceMs: D = Ct,
      startupIdleGraceMs: _ = Tr,
      upgradeBusyDeferCapMs: B = Ir,
      storageV5: E,
    } = t,
    v = credentialsStoreFor(E),
    s = await Le(o);
  (s.write(
    "supervisor",
    `\u2500\u2500\u2500 daemon start \u2500\u2500\u2500 version=${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} pid=${process.pid} origin=${r}`,
  ),
    initializeGrowthBook());
  let C = await getVerifiedDaemonLock(LOCK_VERIFY_ATTEMPTS, E),
    N = !1;
  if (C && C.origin === "transient" && r !== "transient") {
    ((N = !0),
      s.write(
        "supervisor",
        `transient daemon running (pid=${C.pid}, origin=transient) \u2014 asking it to yield to origin=${r}`,
      ));
    let c = await controlRequest({ proto: BG_PROTO, op: "yield" });
    if (c.ok && c.op === "yield" && c.yielding) {
      let I = Date.now() + 5000;
      while (C && Date.now() < I) (await sleep(100), (C = await getVerifiedDaemonLock(LOCK_VERIFY_ATTEMPTS, E)));
      if ((logEvent("tengu_daemon_yield_takeover", { ok: !C, new_origin: fromEnum(r) }), C))
        s.write(
          "supervisor",
          "yield acked but lock still held after 5s \u2014 refusing to start",
        );
    } else
      s.write(
        "supervisor",
        c.ok
          ? "existing daemon refused to yield (it reports origin!=transient)"
          : `existing daemon unreachable on control socket (${redactDaemonNonce(c.error)}); not taking over`,
      );
  }
  if (C) {
    let c = N
        ? `origin=${C.origin ?? "unknown"}; asked it to yield but the handover failed (see above)`
        : r === "transient"
          ? `origin=${C.origin ?? "unknown"}; an on-demand daemon never displaces a running one`
          : `origin=${C.origin ?? "unknown"}; only a transient daemon can be displaced`,
      I =
        getCurrentPlatform() === "windows"
          ? `Stop it with \`taskkill /PID ${C.pid}\`, then retry.`
          : "Run `claude daemon stop` to stop it, then retry.";
    if (
      (s.write(
        "supervisor",
        `another daemon is already running (pid=${C.pid}, version=${C.version}, ${c}). ${I}`,
      ),
      N)
    )
      logFeatureSad("daemon_start", "daemon_start_yield_failed");
    else logFeatureOk("daemon_start");
    return (await s.close(), { upgradeDetected: !1, exitCode: 1 });
  }
  let O = resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 }),
    V = isRunningInstalledBinary() ? getInstalledBinaryPath() : O.target,
    q = await At(V).catch((c) => {
      if (Po(c))
        logForDebugging(`binaryIdentity(${V}) failed at startup: ${c.code}`, {
          level: "error",
        });
      else logError(c);
      return null;
    }),
    re = await getProcessStartTimeAsync(process.pid);
  if (re === void 0) {
    if (
      (await sleep(LOCK_VERIFY_RETRY_MS),
      (re = await getProcessStartTimeAsync(process.pid, { skipCache: !0 })),
      re === void 0)
    )
      s.write(
        "supervisor",
        "own process start-time probe failed twice \u2014 writing a procStart-less lock; kill paths will refuse to signal this daemon",
      );
  }
  let Y = {
      pid: process.pid,
      version: {
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
      jsonPath: e,
      logPath: o,
      startedAt: Date.now(),
      origin: r,
      spawnedBy: a,
      ...procIdentityFields(re),
      launchTarget: q?.target,
      processWrapper: getLauncherCommandString(),
    },
    J = await acquireDaemonLock(Y, E);
  if (!J) {
    let c = await readDaemonLock(E);
    if (c) {
      let j = !1,
        ae = null;
      try {
        (process.kill(c.pid, 0),
          (j = (await isDaemonProcess(c.pid)) && (await verifyProcessStartTime(c.pid, procIdentityOf(c), LOCK_VERIFY_ATTEMPTS))));
      } catch (we) {
        if (A(we) !== "ESRCH") {
          if (((ae = await classifyDaemonLockStaleness(c)), (j = ae === null), ae !== null))
            s.write(
              "supervisor",
              `daemon.lock names pid=${c.pid}, which this user cannot signal, but ${ae === "predates_boot" ? "the lock predates this boot" : "that pid now belongs to another process"} \u2014 replacing the stale lock`,
            );
        }
      }
      if (j)
        return (
          s.write(
            "supervisor",
            `another daemon won the lock race (pid=${c.pid}) \u2014 exiting`,
          ),
          logFeatureOk("daemon_start"),
          await s.close(),
          { upgradeDetected: !1, exitCode: 1 }
        );
      if (((J = await replaceDaemonLock(Y, E)), ae !== null))
        logEvent("tengu_daemon_stale_lock_replaced", {
          proof:
            ae === "predates_boot" ? S("predates_boot") : S("pid_recycled"),
          acquired: J,
          holder_age_ms: Math.max(0, Date.now() - c.startedAt),
          holder_version_skew:
            c.version !==
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
        });
    } else J = await replaceDaemonLock(Y, E);
    if (!J)
      return (
        s.write(
          "supervisor",
          "another daemon won the lock race \u2014 exiting",
        ),
        logFeatureOk("daemon_start"),
        await s.close(),
        { upgradeDetected: !1, exitCode: 1 }
      );
    await sleep(Cr);
    let I = await readDaemonLock(E).catch(() => Y);
    if (!I || I.pid !== Y.pid || I.startedAt !== Y.startedAt) {
      if (
        (s.write(
          "supervisor",
          `another daemon won the lock race (lock now ${I ? `held by pid=${I.pid}` : "gone"}) \u2014 exiting`,
        ),
        I)
      )
        logFeatureOk("daemon_start");
      else logFeatureSad("daemon_start", "lock_vanished_after_replace");
      return (await s.close(), { upgradeDetected: !1, exitCode: 1 });
    }
  }
  let L = async () => {
      for (let c = 0; ; c++)
        try {
          let I = await getVerifiedDaemonLock(LOCK_VERIFY_ATTEMPTS, E);
          return I !== null && I.pid !== Y.pid ? I.pid : null;
        } catch (I) {
          if (c === 0) {
            await sleep(LOCK_VERIFY_RETRY_MS);
            continue;
          }
          return (
            logForDebugging(
              `daemon displacement probe: daemon.lock read failed twice (${I instanceof Error ? I.message : String(I)}) \u2014 treating as non-displaced`,
              { level: "warn" },
            ),
            null
          );
        }
    },
    X = null,
    ne = d(
      p,
      (c) => s.write("supervisor", c),
      () => X?.hasOAuthConsumer() ?? !1,
      E,
      v,
    ),
    ie = !1,
    he = null,
    De = !1,
    Q = null,
    ye = !1,
    ve = !1,
    pe = !1,
    be = !1,
    Ae = !1,
    fe = !1,
    Pe = () => p.aborted || pe || ye || Ae || ie || ve || be || fe,
    ke = null,
    Be = () => {
      if (r !== "transient") return !1;
      if (!pe)
        ((pe = !0),
          s.write(
            "supervisor",
            "yielding to a foreground/service daemon \u2014 bg workers will be re-adopted",
          ),
          logEvent("tengu_daemon_yield", {}),
          ke?.());
      return !0;
    },
    Oe = async () => {
      if (ie || !q) return ie;
      if (Pe()) return !1;
      let c;
      try {
        c = await At(V);
      } catch (we) {
        if (Po(we))
          logForDebugging(`binaryIdentity(${V}) poll failed: ${we.code}`, { level: "error" });
        else logError(we);
        if (Q !== null) {
          if ((X?.busyWorkerCount() ?? 0) === 0) {
            if (!Q.capExpiredEmitted)
              logEvent("tengu_daemon_upgrade_deferred_busy", {
                busy_workers: 0,
                deferred_ms: (Q.suspendedAt ?? Date.now()) - Q.start,
                cap_expired: !1,
                phase: S("resolved"),
              });
            Q = null;
          } else if (Q.suspendedAt === null) Q.suspendedAt = Date.now();
        }
        return !1;
      }
      if (Pe()) return !1;
      if (Q !== null && Q.suspendedAt !== null)
        ((Q.start += Date.now() - Q.suspendedAt), (Q.suspendedAt = null));
      if (c !== null && !xr(q, c)) return ((he = null), (Q = null), !1);
      if (
        c !== null &&
        isNewerBuildTimestamp(q.target, c.target) &&
        getFeatureValue_CACHED_MAY_BE_STALE("tengu_daemon_refuse_stale_upgrade", !0)
      ) {
        if (((Q = null), he !== c.target))
          ((he = c.target),
            s.write(
              "supervisor",
              `binary at ${V} changed to an OLDER build (${q.target} \u2192 ${c.target}) \u2014 refusing self-restart for upgrade; keeping the running build (\`claude daemon stop --any\` to override)`,
            ),
            logEvent("tengu_daemon_upgrade_refused_stale_binary", {}));
        return !1;
      }
      let I = getLauncherConfigError(),
        j = getLauncherArgv();
      if (r !== "service" && (j.length > 0 || I !== null)) {
        if (!(await isLauncherRunnable())) {
          if (!De)
            ((De = !0),
              s.write(
                "supervisor",
                I !== null
                  ? `binary at ${V} changed but CLAUDE_CODE_PROCESS_WRAPPER cannot be used (${I}) \u2014 deferring the upgrade restart until it is fixed (re-checked every poll)`
                  : `binary at ${V} changed but launcher \`${j[0]}\` is not runnable right now \u2014 deferring the upgrade restart until it is (re-checked every poll)`,
              ),
              logFeatureSad("agent_launcher", "upgrade_deferred_launcher_unrunnable"));
          return ((Q = null), !1);
        }
        De = !1;
      }
      let ae = X?.busyWorkerCount() ?? 0;
      if (ae > 0 && c !== null && getFeatureValue_CACHED_MAY_BE_STALE("tengu_daemon_upgrade_defer_busy", !0)) {
        if (Q === null)
          Q = {
            target: c.target,
            start: Date.now(),
            logged: !1,
            suspendedAt: null,
            capExpiredEmitted: !1,
          };
        else if (Q.target !== c.target)
          ((Q.target = c.target), (Q.logged = !1));
        if (Date.now() - Q.start < B) {
          if (!Q.logged)
            ((Q.logged = !0),
              s.write(
                "supervisor",
                `binary at ${V} changed but ${ae} registry worker(s) report a mid-turn session \u2014 deferring the upgrade restart until idle (re-checked every poll, capped at ${Math.round(B / 60000)}m)`,
              ),
              logEvent("tengu_daemon_upgrade_deferred_busy", {
                busy_workers: ae,
                cap_expired: !1,
                phase: S("start"),
              }));
          return !1;
        }
        if (!Q.capExpiredEmitted)
          ((Q.capExpiredEmitted = !0),
            s.write(
              "supervisor",
              `busy-worker upgrade defer cap reached \u2014 proceeding with the restart while ${ae} worker(s) are still busy`,
            ),
            logEvent("tengu_daemon_upgrade_deferred_busy", {
              busy_workers: ae,
              deferred_ms: Date.now() - Q.start,
              cap_expired: !0,
              phase: S("cap_expired"),
            }));
      } else {
        if (Q !== null)
          logEvent("tengu_daemon_upgrade_deferred_busy", {
            busy_workers: ae,
            deferred_ms: Date.now() - Q.start,
            cap_expired: !1,
            phase: S("resolved"),
          });
        Q = null;
      }
      if (Pe()) return !1;
      if (((ie = !0), c === null))
        s.write(
          "supervisor",
          `binary at ${V} was deleted (was ${q.target}) \u2014 exiting for upgrade`,
        );
      else {
        let we =
          q.target === c.target
            ? "mtime changed"
            : `${q.target} \u2192 ${c.target}`;
        s.write(
          "supervisor",
          `binary at ${V} changed (${we}) \u2014 self-restarting for upgrade`,
        );
      }
      return (ke?.(), !0);
    },
    _e = { manager: null },
    m = null,
    T = !1,
    K = () =>
      (_e.manager?.leaseCount() ?? 0) + (_e.manager?.liveHandleCount() ?? 0),
    ee = () => {
      if (r !== "transient") return;
      if (Ae || ie || ye || pe || be || p.aborted) return;
      if (K() > 0) {
        if (((T = !0), m)) (clearTimeout(m), (m = null));
        return;
      }
      if (m) return;
      let c = T ? D : _;
      m = setTimeout(() => {
        if (((m = null), K() > 0)) {
          T = !0;
          return;
        }
        if (p.aborted || ie) return;
        if (Q !== null) {
          ee();
          return;
        }
        Ae = !0;
        let I = X?.workerCount() ?? 0;
        (s.write(
          "supervisor",
          `idle ${Math.round(c / 1000)}s with no clients \u2014 exiting` +
            (I > 0 ? ` (stopping ${I} configured workers)` : ""),
        ),
          logEvent("tengu_daemon_idle_exit", {
            grace_ms: c,
            never_had_client: !T,
            cfg_workers: I,
          }),
          ke?.());
      }, c);
    };
  (ne.ready
    .then(() =>
      St((c) => s.write("bg", c), {
        getAuthSnapshot: r === "service" ? () => ne.getAuthSnapshot() : void 0,
        onNudge: async () => ({
          restarting: await Oe(),
          upgradePending: Q !== null,
        }),
        onShutdown: () => {
          ((ye = !0),
            s.write("supervisor", "shutdown requested via control socket"),
            ke?.());
        },
        onYield: Be,
        onKeepAliveChange: ee,
        storageV5: E,
        credentials: v,
        isShuttingDown: Pe,
      }),
    )
    .then((c) => {
      if (Pe())
        return void (async () => {
          if (ve && !fe && (await L()) === null) c.killAll("SIGTERM");
          await c.close({ skipPathCleanup: !0 });
        })().catch((j) => logError(redactDaemonNonceFromError(j)));
      ((_e.manager = c), ee());
    })
    .catch((c) => {
      if ((Mr(redactDaemonNonceFromError(c)), Pe())) return;
      let I = A(c),
        j = `${I ? `[${I}] ` : ""}${redactDaemonNonce(ge(c).message.replace(/\s*\n\s*/g, " "))}`;
      if (r === "service") {
        (s.write(
          "supervisor",
          `bg manager failed to start: ${j} \u2014 control pipe unavailable; bg sessions disabled (registry workers keep running)`,
        ),
          markDaemonLockBgDisabled(Y, E).catch(logError));
        return;
      }
      (s.write(
        "supervisor",
        `bg manager failed to start: ${j} \u2014 control pipe unavailable; exiting`,
      ),
        process.stderr.write(`bg manager failed to start: ${j}
`),
        (be = !0),
        ke?.());
    }),
    (X = await Rt({
      jsonPath: e,
      invocation: O,
      logger: s,
      authManager: ne,
      watch: w,
      storageV5: E,
    })));
  let le = X.workerCount();
  if ((s.write("supervisor", `workers=${le}`), le > 0))
    s.write(
      "supervisor",
      "daemon.json has configured workers but they do not pin the supervisor \u2014 they stop when the last client lease and bg job are gone",
    );
  (logEvent("tengu_daemon_start", {
    worker_kinds: Object.keys(WORKER_KINDS).length,
    worker_count: le,
    origin: fromEnum(r),
  }),
    logFeatureOk("daemon_start"),
    ee());
  let ce = null;
  try {
    await new Promise((c) => {
      if (((ke = c), p.aborted || ie || Ae || ye || pe || be)) return void c();
      if ((p.addEventListener("abort", () => c(), { once: !0 }), !q))
        s.write(
          "supervisor",
          `binary identity unresolvable at ${V}; upgrade polling disabled`,
        );
      ce = setInterval(() => {
        if (p.aborted || ie || ve || pe) {
          if (ce) (clearInterval(ce), (ce = null));
          return;
        }
        if ((Oe(), r === "service" && isDaemonServiceRecalled()))
          ((ve = !0),
            s.write(
              "supervisor",
              "service recall flag set \u2014 draining workers and uninstalling service",
            ),
            ke?.());
        if (r === "transient" && !pe)
          L()
            .then((I) => {
              if (I !== null && !pe && !p.aborted)
                ((fe = !0),
                  (pe = !0),
                  s.write(
                    "supervisor",
                    `lockfile now held by pid=${I} \u2014 displaced, yielding`,
                  ),
                  logEvent("tengu_daemon_yield", {
                    displaced: !0,
                    displaced_by_pid: I,
                  }),
                  ke?.());
            })
            .catch((I) => logError(redactDaemonNonceFromError(I)));
      }, k);
    });
  } finally {
    if (((ke = null), ce)) (clearInterval(ce), (ce = null));
    if (m) (clearTimeout(m), (m = null));
  }
  if (ie) logEvent("tengu_daemon_self_restart_on_upgrade", {});
  if (ve) logEvent("tengu_copper_lantern", {});
  if ((X.disposeWatcher(), await X.drainReloads(), !fe)) {
    let c = await L();
    if (c !== null)
      ((fe = !0),
        s.write(
          "supervisor",
          `lockfile now held by pid=${c} \u2014 displaced; leaving successor's control.sock in place`,
        ));
  }
  let de =
      ie && !fe
        ? "upgrade"
        : ve
          ? "service_recall"
          : fe
            ? "displaced"
            : pe
              ? "yield"
              : ye
                ? "shutdown_op"
                : Ae
                  ? "idle_exit"
                  : be
                    ? "bg_manager_failed"
                    : p.aborted
                      ? "signal"
                      : "unknown",
    me = Date.now() - Y.startedAt;
  (s.write(
    "supervisor",
    `shutting down (cause=${de}, uptime=${Math.round(me / 1000)}s, leases=${_e.manager?.leaseCount() ?? -1}, live_workers=${_e.manager?.liveHandleCount() ?? -1})`,
  ),
    logEvent("tengu_daemon_exit", {
      cause: fromEnum(de),
      uptime_ms: me,
      lease_count: _e.manager?.leaseCount() ?? -1,
      live_handles: _e.manager?.liveHandleCount() ?? -1,
      ever_had_keep_alive: T,
      origin: fromEnum(r),
    }));
  let Se = !1,
    $e = async () => {
      if (Se) return;
      Se = !0;
      let c = await readDaemonLock(E);
      if (c && c.pid === Y.pid && c.startedAt === Y.startedAt) await removeDaemonLock(E);
    };
  if (pe) (await _e.manager?.close({ displaced: fe }), (_e.manager = null));
  if (Ae || ve || pe || be) {
    if ((await $e(), ve && !fe)) {
      if ((_e.manager?.killAll("SIGTERM"), !_e.manager)) {
        let c = await readRoster({ silent: !0 }, E).catch(() => null);
        for (let I of Object.values(c?.workers ?? {}))
          if (I.pid > 0)
            (await killVerifiedProcess(I.pid, I.procStart).catch(() => !1),
              await reapDetachedRepl(I.replPid, I.replProcStart).catch(() => !1));
      }
    }
  }
  if (
    (await Promise.all([
      _e.manager?.close({ displaced: fe }),
      X.stop(de === "upgrade" ? "upgrade" : de === "yield" ? "yield" : void 0),
    ]),
    await $e(),
    ve)
  )
    await uninstallDaemonService();
  return (
    await s.close(),
    ne.dispose(),
    { upgradeDetected: ie, exitCode: be ? 1 : 0 }
  );
}
var Vr = 70,
  jr = `Usage: claude daemon [subcommand] [options]

Service lifecycle:
  run [json-path]   Run the supervisor in the foreground (default when piped)
  status            Show daemon pid, version, uptime
  logs              Tail the daemon log (Ctrl-C to stop)
  uninstall         Remove the background service (launchctl/systemd)
  stop              Shut down the supervisor and terminate background sessions
                      --any           also stop a transient (non-service) daemon
                      --keep-workers  leave detached sessions running
`,
  Fr = `  install           Install as a launchctl/systemd service (persists across reboot)
  start             Start the installed service
  restart           Restart the installed service
`,
  Hr = `
  Service install is disabled in this version \u2014 the daemon runs on demand
  and exits when the last client disconnects.
`,
  Gr = "",
  Kr = `
Options:
  --json-path <p>   Config file (default: ~/.claude/daemon.json)
  --log-file <p>    Log file (default: ~/.claude/daemon.log)
  --help, -h        Show this help
`,
  Ur = new Set(["list", "scheduled", "remote-control", "hub"]),
  zr = new Set(["run", "status", "stop", "uninstall"]);
function Mt() {
  return jr + (isDaemonServiceInstallEnabled() ? Fr : Hr) + Gr + Kr;
}
function Xr(t) {
  let e = getDaemonJsonPath(),
    o = !1,
    r = getDaemonLogPath(),
    a,
    p,
    w = new Set();
  for (let s = 0; s < t.length; s++) {
    let C = t[s];
    if (C === "--json-path" && t[s + 1])
      (w.add(s), w.add(++s), (e = t[s]), (o = !0));
    else if (C.startsWith("--json-path="))
      (w.add(s), (e = C.slice(12)), (o = !0));
    else if (C === "--log-file" && t[s + 1]) (w.add(s), w.add(++s), (r = t[s]));
    else if (C.startsWith("--log-file=")) (w.add(s), (r = C.slice(11)));
    else if (C === "--origin" && t[s + 1])
      (w.add(s), w.add(++s), (a = Bt(t[s])));
    else if (C.startsWith("--origin=")) (w.add(s), (a = Bt(C.slice(9))));
    else if (C === "--spawned-by" && t[s + 1])
      (w.add(s), w.add(++s), (p = Qr(t[s])));
  }
  let d = [];
  for (let s = 0; s < t.length; s++) if (!w.has(s)) d.push(t[s]);
  let k = new Set([
      "run",
      "install",
      "uninstall",
      "start",
      "stop",
      "restart",
      "status",
      "logs",
      "log",
      "list",
      "scheduled",
      "remote-control",
      "hub",
    ]),
    D = process.stdin.isTTY ? "hub" : "run",
    _ = -1;
  for (let s = 0; s < d.length; s++)
    if (!d[s].startsWith("-")) {
      _ = s;
      break;
    }
  if (_ === -1)
    return {
      sub: D,
      jsonPath: e,
      logPath: r,
      origin: a,
      spawnedBy: p,
      rest: d,
    };
  let B = d[_];
  if (!k.has(B)) {
    if (!/[./\\~]/.test(B))
      return {
        sub: B,
        jsonPath: e,
        logPath: r,
        origin: a,
        spawnedBy: p,
        rest: [],
      };
    return {
      sub: "run",
      jsonPath: o ? e : B,
      logPath: r,
      origin: a,
      spawnedBy: p,
      rest: [],
    };
  }
  let E = [...d.slice(0, _), ...d.slice(_ + 1)],
    v = B;
  if (v === "run" && !o) {
    let s = E.find((C) => !C.startsWith("-"));
    if (s) e = s;
  }
  return { sub: v, jsonPath: e, logPath: r, origin: a, spawnedBy: p, rest: E };
}
function Bt(t) {
  if (t === "service" || t === "transient" || t === "foreground") return t;
  if (t === "auto") return "transient";
  return;
}
function Zr(t) {
  let e = t.origin ?? "unknown";
  if (e !== "transient" && e !== "auto") return e;
  let o = t.spawnedBy;
  if (!o) return "transient \u2014 started on-demand by a client";
  return `transient \u2014 started on-demand by \`${o.label}\` (pid ${o.pid}) in ${o.cwd}`;
}
function Qr(t) {
  let e = xt(t, !1);
  if (e === null || typeof e !== "object") return;
  let o = e;
  if (
    typeof o.label === "string" &&
    typeof o.cwd === "string" &&
    typeof o.pid === "number"
  )
    return { label: o.label, cwd: o.cwd, pid: o.pid };
  return;
}
function F(t) {
  process.stdout.write(
    t +
      `
`,
  );
}
function U(t) {
  process.stderr.write(
    t +
      `
`,
  );
}
function Re(t, e) {
  let o = [];
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    if (e.includes(a)) continue;
    if (
      a === "--debug" ||
      a === "-d" ||
      a === "--debug-to-stderr" ||
      a === "-d2e" ||
      a.startsWith("--debug=") ||
      a.startsWith("--debug-file=")
    )
      continue;
    if (a === "--debug-file" && r + 1 < t.length) {
      r++;
      continue;
    }
    o.push(a);
  }
  if (o.length > 0) U(`warning: extra arguments ignored: ${o.join(" ")}`);
}
function Ot(t, e) {
  return `${t} refused: a foreground daemon (pid ${e}, started with \`claude daemon run\`) holds the daemon lock \u2014 stop it first (Ctrl-C in its terminal or \`claude daemon stop\`)`;
}
function Lt(t, e) {
  let o;
  switch (e.outcome) {
    case "eperm":
      o = "Stop it from the account that owns it";
      break;
    case "unverified":
      o = getUnverifiedLockHint();
      break;
    case "timed-out":
      o = `Wait for it to exit (or kill pid ${e.pid})`;
      break;
  }
  return `${t} refused: ${describeStopFailure(e)} \u2014 a freshly started service would lose the lockfile race to it and crash-loop. ${o}, then retry.`;
}
function Wt(t, e) {
  return `${t} refused: ${describeUnknownOriginLock(e)}. Stop it (\`claude daemon stop\`) and retry.`;
}
function Nt(t) {
  return `warning: the service manager accepted the ${t}, but the installed daemon is not reachable after ${DAEMON_START_TIMEOUT_MS / 1000}s \u2014 the first start after an update can be slow. Check \`claude daemon status\` and \`claude daemon logs\`; if the service file points at a binary or launcher that no longer exists, \`claude daemon install\` rewrites it from the current settings.`;
}
async function se(t) {
  (await Promise.race([
    Promise.all([shutdownFirstPartyEventLogging(), shutdownDatadog()]),
    sleep(500, void 0, { unref: !0 }),
  ]).catch(() => {}),
    process.exit(t));
}
async function daemonMain(t, e) {
  if ((await ensureFleetGateHydrated(), t.includes("--help") || t.includes("-h"))) {
    if (!isDaemonCliEnabled()) return fleetGateRejected("daemon");
    F(Mt());
    return;
  }
  let o = Xr(t),
    { jsonPath: r, logPath: a, origin: p, spawnedBy: w, rest: d } = o,
    k = o.sub === "hub" && !isDaemonWorkerRegistryEnabled() ? "status" : o.sub;
  if (!zr.has(k)) {
    let _ = await runFastPathPolicyHelper();
    if (_)
      (process.stderr.write(`${_}
`),
        process.exit(1));
    if (!isDaemonCliEnabled()) return fleetGateRejected("daemon");
  } else if (k === "run" || k === "status") {
    let _ = await runFastPathPolicyHelper();
    if (_)
      logForDebugging(
        `daemon ${k}: policy helper failed (continuing on static managed settings): ${_}`,
        { level: "warn" },
      );
  }
  if (Ur.has(k) && !isDaemonWorkerRegistryEnabled()) return fleetGateRejected(`daemon ${k}`);
  let D = pinStorageV5(e);
  if (isHoverRestEnabled() && D !== void 0) {
    (initDefaultDebugLog({ storageV5: D }), watchGlobalConfigThroughStorage(D));
    let [
        { composePolicyLimitsClient: _, primePolicyLimitsCache: B },
        { primeFastPathCredentials: E },
        { setGrowthBookCredentials: v, setGrowthBookStorageBackend: s },
      ] = await Promise.all([
        import("../../01-核心基础设施/核心工具-未归类/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js"),
        import("../认证-OAuth登录/primeFastPathCredentials.eb5w3wem.js"),
        import("../../01-核心基础设施/核心工具-未归类/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
      ]),
      C = credentialsStoreFor(D);
    (v(C),
      s(D),
      _({ storageV5: D, credentials: C }),
      await E(C),
      await B(D),
      await seedInstallIDs(D));
  }
  switch ((initializeFirstPartyEventLogging(D), k)) {
    case "list": {
      Re(d, ["--json"]);
      let { handleListAllKinds: _ } = await import("../远程控制-Bridge/handleListAllKinds.tcxk2866.js");
      await _(d.includes("--json"), r, D);
      return;
    }
    case "scheduled":
    case "remote-control": {
      let { handleCliKind: _ } = await import("../远程控制-Bridge/handleListAllKinds.tcxk2866.js");
      await _(k, d, r, D);
      return;
    }
    case "hub": {
      if ((Re(d, []), !process.stdin.isTTY || !process.stdout.isTTY)) {
        F("Interactive hub requires a TTY. See `claude daemon --help`.");
        return;
      }
      let { renderDaemonHubStandalone: _ } =
        await import("../守护服务-Daemon/daemon-ui.z0smrekj.js");
      return (await _(D), process.exit(0));
    }
    case "run": {
      if (isAgentViewDisabled())
        return (
          U("claude daemon: background agents disabled (3P/opt-out)"),
          process.exit(0)
        );
      process.title = "claude daemon";
      let _ = resolve(r),
        B = resolve(a);
      getDebugFilePath();
      try {
        changeWorkingDirectory(homedir());
      } catch {}
      lockCurrentVersion();
      let E = new AbortController(),
        v = !1,
        s = () => {
          if (v) (U("forced shutdown"), process.exit(1));
          ((v = !0), E.abort());
        };
      (process.on("SIGINT", s), process.on("SIGTERM", s));
      let C = p ?? "foreground",
        N,
        O;
      try {
        ({ upgradeDetected: N, exitCode: O } = await It({
          jsonPath: _,
          logPath: B,
          origin: C,
          spawnedBy: w,
          signal: E.signal,
          storageV5: D,
        }));
      } catch (V) {
        return (
          logError(V),
          logFeatureBad("daemon_start", "daemon_start_crash"),
          await Promise.all([
            logFirstPartyEventAsync("tengu_daemon_startup_crash", {}),
            trackDatadogEvent("tengu_daemon_startup_crash", {}),
          ]),
          se(1)
        );
      }
      if (N) {
        if (C === "service") return se(Vr);
        await en(_, B, C, w);
      }
      return se(O);
    }
    case "install": {
      if ((Re(d, []), !isDaemonServiceInstallEnabled()))
        return (
          U(
            `\`claude daemon ${k}\` is disabled in this version \u2014 the daemon runs on demand and exits when the last client disconnects.`,
          ),
          await logFirstPartyEventAsync("tengu_daemon_install", { ok: !1, disabled: !0 }),
          se(1)
        );
      if (!(await isDaemonServiceControlSupported()))
        return (
          U(
            `Service install isn't available on ${"darwin"} \u2014 the daemon still runs on demand when a client connects.`,
          ),
          logFeatureBad("daemon_service_install", "daemon_service_install_unsupported"),
          se(1)
        );
      if (process.env.CLAUDE_CONFIG_DIR)
        return (
          U(
            "service install only supports the default config dir \u2014 the launchd/systemd unit is a per-user singleton",
          ),
          logFeatureBad("daemon_service_install", "daemon_service_install_config_dir"),
          se(1)
        );
      let _ = await getLauncherErrorMessage();
      if (_)
        return (
          logFeatureBad("daemon_service_install", "daemon_service_install_launcher"),
          await logFirstPartyEventAsync("tengu_daemon_install", { ok: !1, launcher: !0 }),
          U(`install refused: ${_}`),
          se(1)
        );
      let B = await stopDaemonLockHolder(D);
      if (B.kind === "foreground")
        return (
          logFeatureBad("daemon_service_install", "daemon_service_install_foreground"),
          await logFirstPartyEventAsync("tengu_daemon_install", { ok: !1, foreground: !0 }),
          U(Ot("install", B.lock.pid)),
          se(1)
        );
      if (B.kind === "not-stopped")
        return (
          logFeatureBad(
            "daemon_service_install",
            B.outcome === "unverified"
              ? "daemon_service_install_holder_unverified"
              : "daemon_service_install_holder_alive",
          ),
          await logFirstPartyEventAsync("tengu_daemon_install", {
            ok: !1,
            holderAlive: !0,
            holderUnverified: B.outcome === "unverified",
          }),
          U(Lt("install", B)),
          se(1)
        );
      if (B.kind === "unknown-origin")
        return (
          logFeatureBad(
            "daemon_service_install",
            "daemon_service_install_holder_unknown_origin",
          ),
          await logFirstPartyEventAsync("tengu_daemon_install", {
            ok: !1,
            holderAlive: !0,
            holderUnknownOrigin: !0,
          }),
          U(Wt("install", B.lock.pid)),
          se(1)
        );
      if (B.kind === "stopped") F(`stopped detached daemon (pid ${B.pid})`);
      let E = await installDaemonService({ jsonPath: r, logPath: a });
      if (!E.ok) {
        if (
          (await logFirstPartyEventAsync("tengu_daemon_install", { ok: !1 }),
          logFeatureBad("daemon_service_install", "daemon_service_install_failed"),
          U(`install failed: ${E.error}`),
          E.servicePath)
        )
          U(`  (service file was written to ${E.servicePath})`);
        return se(1);
      }
      (logFeatureOk("daemon_service_install"), F(`installed: ${E.servicePath}`));
      let v = await waitForServiceDaemonLock(DAEMON_START_TIMEOUT_MS, D);
      if (
        (await logFirstPartyEventAsync("tengu_daemon_install", { ok: !0, reachable: v !== null }), v)
      )
        F(
          `running: pid=${v.pid} origin=${v.origin} (managed by ${getCurrentPlatform() === "macos" ? "launchd" : "systemd"})`,
        );
      else
        U(
          `warning: service installed but the daemon is not running as the installed service within ${DAEMON_START_TIMEOUT_MS / 1000}s \u2014 check \`claude daemon logs\``,
        );
      return se(0);
    }
    case "start":
    case "restart": {
      if ((Re(d, []), !isDaemonServiceInstallEnabled()))
        return (
          U(
            `\`claude daemon ${k}\` is disabled in this version \u2014 the daemon runs on demand and exits when the last client disconnects.`,
          ),
          await logFirstPartyEventAsync("tengu_daemon_install", { ok: !1, disabled: !0 }),
          se(1)
        );
      if (!(await isDaemonServiceControlSupported()))
        (U(
          `\`claude daemon ${k}\` isn't available on ${"darwin"} (no launchd/systemd) \u2014 the daemon runs on demand instead.`,
        ),
          process.exit(1));
      if (process.env.CLAUDE_CONFIG_DIR)
        (U(
          "the launchd/systemd unit is a per-user singleton for the default config dir",
        ),
          process.exit(1));
      if (!(await isDaemonServiceInstalled()))
        (U("service not installed \u2014 run `claude daemon install` first"),
          process.exit(1));
      let _ = await getLauncherErrorMessage();
      if (_)
        return (
          logFeatureBad("daemon_service_install", "daemon_service_install_launcher"),
          await logFirstPartyEventAsync("tengu_daemon_control", {
            op_start: k === "start",
            op_restart: k === "restart",
            ok: !1,
            launcher: !0,
          }),
          U(`${k} refused: ${_}`),
          se(1)
        );
      let B = await stopDaemonLockHolder(D);
      if (B.kind === "foreground")
        return (
          logFeatureBad("daemon_service_install", "daemon_service_install_foreground"),
          await logFirstPartyEventAsync("tengu_daemon_control", {
            op_start: k === "start",
            op_restart: k === "restart",
            ok: !1,
            foreground: !0,
          }),
          U(Ot(k, B.lock.pid)),
          se(1)
        );
      if (B.kind === "not-stopped")
        return (
          logFeatureBad(
            "daemon_service_install",
            B.outcome === "unverified"
              ? "daemon_service_install_holder_unverified"
              : "daemon_service_install_holder_alive",
          ),
          await logFirstPartyEventAsync("tengu_daemon_control", {
            op_start: k === "start",
            op_restart: k === "restart",
            holderUnverified: B.outcome === "unverified",
            ok: !1,
            holderAlive: !0,
          }),
          U(Lt(k, B)),
          se(1)
        );
      if (B.kind === "unknown-origin")
        return (
          logFeatureBad(
            "daemon_service_install",
            "daemon_service_install_holder_unknown_origin",
          ),
          await logFirstPartyEventAsync("tengu_daemon_control", {
            op_start: k === "start",
            op_restart: k === "restart",
            ok: !1,
            holderAlive: !0,
            holderUnknownOrigin: !0,
          }),
          U(Wt(k, B.lock.pid)),
          se(1)
        );
      if (B.kind === "stopped") F(`stopped detached daemon (pid ${B.pid})`);
      let E = await checkDaemonServiceStaleness();
      if (E.execPathStale || E.launcherPrefixDead) {
        F(
          E.execPathStale
            ? "service binary missing \u2014 regenerating service file"
            : "installed service starts through a launcher that was deleted or is no longer executable \u2014 regenerating the service file from the current settings",
        );
        let C = await installDaemonService({ jsonPath: r, logPath: a }),
          N = C.ok && (await waitForServiceDaemonLock(DAEMON_START_TIMEOUT_MS, D)) !== null;
        if (
          (await logFirstPartyEventAsync("tengu_daemon_control", {
            op_start: k === "start",
            op_restart: k === "restart",
            ok: C.ok,
            regenerated: !0,
            reachable: N,
          }),
          C.ok && N)
        )
          F(k === "start" ? "started" : "restarted");
        else if (C.ok) U(Nt(k));
        else U(`regenerate failed: ${C.error}`);
        return se(C.ok ? 0 : 1);
      }
      let v = await (k === "start" ? startDaemonService() : restartDaemonService());
      if (!v.ok)
        return (
          await logFirstPartyEventAsync("tengu_daemon_control", {
            op_start: k === "start",
            op_restart: k === "restart",
            ok: !1,
          }),
          U(`${k} failed: ${v.error}`),
          se(1)
        );
      let s = (await waitForServiceDaemonLock(DAEMON_START_TIMEOUT_MS, D)) !== null;
      if (
        (await logFirstPartyEventAsync("tengu_daemon_control", {
          op_start: k === "start",
          op_restart: k === "restart",
          ok: !0,
          reachable: s,
        }),
        s)
      )
        F(k === "start" ? "started" : "restarted");
      else U(Nt(k));
      return se(0);
    }
    case "uninstall": {
      Re(d, []);
      let _ = await uninstallDaemonService();
      if (
        (await logFirstPartyEventAsync("tengu_daemon_control", { op_uninstall: !0, ok: _.ok }), _.ok)
      )
        (logFeatureOk("daemon_service_uninstall"), F("uninstalled"));
      else
        (logFeatureBad("daemon_service_uninstall", "daemon_service_uninstall_failed"),
          U(`uninstall failed: ${_.error}`));
      return se(_.ok ? 0 : 1);
    }
    case "stop": {
      let _ = d.includes("--keep-workers");
      Re(d, ["--keep-workers", "--any"]);
      let B = (L) =>
          _ || L === 0
            ? "stopped"
            : `stopped (terminated ${L} ${pluralize(L, "background session")})`,
        E = (L) => {
          if (L > 0)
            U(
              `note: ${L} background ${pluralize(L, "session")} could not be verified as still ours and ${L === 1 ? "was" : "were"} left running (records kept). Re-run \`claude daemon stop\` to retry.`,
            );
        },
        v = async (L, X, ne = "daemon_stop_failed") => {
          if (L) logFeatureOk("daemon_stop");
          else logFeatureBad("daemon_stop", ne);
          return (
            await logFirstPartyEventAsync("tengu_daemon_control", {
              op_stop: !0,
              ok: L,
              reaped: X,
              holderUnverified: ne === "daemon_stop_holder_unverified",
            }),
            se(L ? 0 : 1)
          );
        },
        s = await isDaemonServiceInstalled(),
        C = await getVerifiedDaemonLock(1, D),
        N = C && isProcessIdentityKnown(C) ? C : null,
        O = C,
        V;
      if (!O) {
        let L = await readDaemonLock(D);
        if (L && isProcessRunning(L.pid)) {
          let X = await isDaemonProcess(L.pid),
            ne = X ? await getProcessStartTimeAsync(L.pid, { skipCache: !0 }) : void 0,
            ie = procIdentityOf(L),
            he = ie !== void 0 && ne !== void 0;
          if (!X || (he && ne !== ie)) V = L.pid;
          else if (he) ((N = L), (O = L));
          else O = L;
        }
      }
      if (!s && O && !d.includes("--any"))
        return (
          U(
            N
              ? `no background service is installed, but a daemon is running (pid=${O.pid}, origin=${O.origin ?? "unknown"}). Run \`claude daemon stop --any\` to stop it.`
              : `no background service is installed, but pid=${O.pid} is holding the daemon lock. Run \`claude daemon stop --any\` to stop any background sessions and report on the holder.`,
          ),
          se(1)
        );
      let q = await controlRequest({ proto: BG_PROTO, op: "shutdown", reapWorkers: !_ });
      if (q.ok && q.op === "shutdown") {
        let L = _
          ? { reaped: 0, kept: 0 }
          : await reapAllDaemonWorkers({ supervisorKilledAll: !0 }, D);
        E(L.kept);
        let X = Math.max(q.reaped, L.reaped);
        if (s) {
          let ne = await stopDaemonService();
          if (!ne.ok) return (U(`stop failed: ${ne.error}`), v(!1, X));
        }
        if ((F(B(X)), !s))
          F(
            "note: the next `claude agents` or `claude --bg` will start a new one",
          );
        return v(!0, X);
      }
      let re = !1;
      if (s) {
        let L = await stopDaemonService();
        if (!L.ok) return (U(`stop failed: ${L.error}`), v(!1, 0));
        re = !0;
      } else if (N && getCurrentPlatform() !== "windows")
        try {
          (process.kill(N.pid, "SIGTERM"), (re = !0));
        } catch (L) {
          if (A(L) === "ESRCH") re = !0;
          else {
            let X =
              A(L) === "EPERM"
                ? " (running as another user \u2014 try with elevated privileges)"
                : "";
            return (
              U(`could not stop daemon (pid=${N.pid}): ${l(L)}${X}`),
              v(!1, 0)
            );
          }
        }
      let Y = _ ? { reaped: 0, kept: 0 } : await reapAllDaemonWorkers({}, D),
        J = Y.reaped;
      if ((E(Y.kept), N && !re && getCurrentPlatform() === "windows"))
        return (
          U(
            (J > 0 ? `terminated ${J} background session(s); ` : "") +
              `supervisor (pid=${N.pid}) is still running \u2014 stop it with ` +
              `\`taskkill /PID ${N.pid}\` or close the terminal it was started in.`,
          ),
          v(!1, J)
        );
      if (!re && !N && O)
        return (
          U(
            (J > 0 ? `terminated ${J} background ${pluralize(J, "session")}; ` : "") +
              `the daemon was not stopped: pid=${O.pid} is holding ${getDaemonLockPath()} but could not be verified as the daemon, so it was not signalled. If no daemon is running, delete that file; if pid ${O.pid} is a live process you own, stop it yourself.`,
          ),
          v(!1, J, "daemon_stop_holder_unverified")
        );
      if (V !== void 0)
        U(
          `note: ${getDaemonLockPath()} is stale (pid=${V} is not the daemon). The next daemon start reclaims it automatically.`,
        );
      if (!re && !N && J === 0) F("no daemon running");
      else if ((F(B(J)), !s && N))
        F(
          "note: the next `claude agents` or `claude --bg` will start a new one",
        );
      return v(!0, J);
    }
    case "status": {
      Re(d, []);
      let _ = await getVerifiedDaemonLock(1, D);
      if (!_) {
        F("not running");
        let Y = getLauncherConfigError();
        if (Y)
          F(
            `warning: ${Y} \u2014 background sessions will refuse to start rather than run unwrapped`,
          );
        else if (getLauncherCommandString())
          F(
            `launcher: (none running) \u2014 this claude resolves \`${getLauncherCommandString()}\` and will start the next ${bgSupervisorNoun()} through it`,
          );
        let { getBgDaemonStatus: J, formatBgDaemonStatus: L } =
          await import("./getBgDaemonStatus.fa4akgbv.js");
        return (F(L(await J(D))), se(1));
      }
      let B = Math.floor((Date.now() - _.startedAt) / 1000);
      (F(`pid:     ${_.pid}`),
        F(`version: ${_.version}`),
        F(`uptime:  ${B}s`),
        F(`origin:  ${Zr(_)}`),
        F(`config:  ${_.jsonPath}`),
        F(`log:     ${_.logPath}`));
      let E = getLauncherConfigError(),
        v = getLauncherCommandString(),
        s = _.processWrapper ?? "",
        C = "";
      if (E || v || s) {
        let Y = await controlRequest({ proto: BG_PROTO, op: "nudge" }).catch(() => null);
        C = Y?.ok && Y.op === "nudge" ? (Y.processWrapper ?? "") : s;
      }
      let N = truncateToCodeUnits(normalizeWhitespace(stripAnsi(C)), 200);
      if (E || C || v) {
        if (
          (F(`launcher: ${N || "(none)"}`), _.origin === "service" && (v || C))
        )
          F(
            "  note: the installed service process itself runs outside the launcher; the sessions it spawns are covered \u2014 a launcher-aware `claude daemon install` closes this",
          );
        if (E) {
          if (
            (F(""),
            F(
              `warning: ${E} \u2014 background sessions will refuse to start rather than run unwrapped`,
            ),
            C)
          )
            F(
              `  the running ${bgSupervisorNoun()} still launches sessions via \`${N}\`; do NOT restart it until this is fixed, or no daemon will start at all`,
            );
        } else if (C !== v)
          (F(""),
            F(
              `warning: the running ${bgSupervisorNoun()} launches sessions via \`${N || "(no launcher)"}\`, but this claude resolves \`${v || "(no launcher)"}\``,
            ),
            F(
              "  restart it \u2014 and your running claude sessions \u2014 to apply the current CLAUDE_CODE_PROCESS_WRAPPER",
            ));
      }
      let { getBgDaemonStatus: O, formatBgDaemonStatus: V } =
          await import("./getBgDaemonStatus.fa4akgbv.js"),
        q = await O(D);
      F(V(q));
      let re = _.origin;
      if (re === "transient" || re === "auto") {
        F("");
        let Y = q.workersLive ?? 0,
          J = q.leaseClients;
        if (Y > 0 || J.length > 0) {
          if ((F("holding this daemon open:"), Y > 0))
            F(
              `  ${Y} ${pluralize(Y, "bg worker")} running (daemon waits for them to settle)`,
            );
          for (let L of J) F(`  \`${L.label}\` (pid ${L.pid}) in ${L.cwd}`);
          (F(""),
            F(
              "to let it idle-exit: wait for (or cancel) bg workers and close any `claude agents`",
            ));
        } else if (q.workersLive === 0)
          F("nothing holding this daemon open \u2014 will idle-exit shortly");
      }
      if (
        _.version !==
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
      ) {
        (F(""),
          F(
            `warning: running daemon is ${_.version}, but this claude is ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}`,
          ));
        let Y = (await isDaemonServiceInstalled())
          ? "claude daemon stop"
          : "claude daemon stop --any";
        F(`  run \`${Y}\` to pick up the new version`);
      }
      return se(0);
    }
    case "logs":
    case "log": {
      (Re(d, []), await tn(a, D));
      return;
    }
    default:
      (U(`unknown subcommand: ${k}`), U(""), U(Mt()), process.exit(1));
  }
}
async function en(t, e, o, r) {
  let { err: a, stderrPath: p } = await spawnDaemonProcess([
      "daemon",
      "run",
      "--json-path",
      t,
      "--log-file",
      e,
      "--origin",
      o,
      ...(r ? ["--spawned-by", jsonStringify(r)] : []),
    ]),
    w = a
      ? `failed to spawn: ${l(a)}`
      : (await waitForDaemonReady(DAEMON_START_TIMEOUT_MS))
        ? null
        : `spawned but never became reachable within ${DAEMON_START_TIMEOUT_MS / 1000}s`;
  if (w !== null) {
    let d = p ? redactDaemonNonce(((await readBoundedFile(p, 1048576)) ?? "").trim()).slice(-2000) : "",
      k = await Le(e).catch(() => null);
    if (
      (k?.write(
        "supervisor",
        `upgrade self-respawn ${w} \u2014 bg workers may be orphan-reaped ~60s after this process exits unless a client restarts the daemon (run \`claude agents\`)` +
          (d ? `; successor stderr: ${d}` : ""),
      ),
      await k?.close(),
      !a)
    )
      await logFirstPartyEventAsync("tengu_daemon_upgrade_respawn_unreachable", {
        stderr_captured: d.length > 0,
      });
  }
  if (p) Lr(dirname(p), { recursive: !0, force: !0 }).catch(() => {});
  if (a)
    (logError(`daemon: upgrade self-respawn failed: ${l(a)}`),
      await logFirstPartyEventAsync("tengu_bg_daemon_spawn_failed", {
        respawn: !0,
        errno_enoent: A(a) === "ENOENT",
        errno_eacces: A(a) === "EACCES",
        errno: Jr(a) ?? S("unknown"),
      }));
}
async function tn(t, e) {
  {
    let w = Br("tail", ["-f", t], { stdio: "inherit", ...Bs("helper") });
    await new Promise((d) => {
      (w.on("exit", (k) => {
        if (k) process.exitCode = k;
        d();
      }),
        w.on("error", (k) => {
          (U(`tail failed: ${k.message}`), process.exit(1));
        }));
    });
    return;
  }
  if (isHoverRestEnabled() && e !== void 0 && t === getDaemonLogPath()) {
    await rn(t, e);
    return;
  }
  let o;
  try {
    o = await Or(t, "r");
  } catch (w) {
    (U(`cannot open ${t}: ${l(w)}`), process.exit(1));
  }
  let r = (await o.stat()).size,
    a = Buffer.alloc(65536),
    p = !1;
  process.on("SIGINT", () => {
    p = !0;
  });
  while (!p) {
    if ((await o.stat()).size < r) r = 0;
    let { bytesRead: d } = await o.read(a, 0, a.length, r);
    if (d > 0) (process.stdout.write(a.subarray(0, d)), (r += d));
    else await sleep(500);
  }
  await o.close();
}
async function rn(t, e) {
  let o = STORAGE_KEYS.state("daemon-log"),
    r = await e.read([{ key: o, offset: 0, length: 0 }]);
  if (!r.ok || !r.value.items[0].found)
    (U(`cannot open ${t}: ${r.ok ? "no such file or directory" : describeStorageError(r.error)}`),
      process.exit(1));
  let a = r.value.items[0].totalBytes,
    p = !1;
  process.on("SIGINT", () => {
    p = !0;
  });
  let w = !1;
  while (!p) {
    let d = await e.read([{ key: o, offset: a, length: 65536 }]);
    if (!d.ok) {
      if (
        d.error.code === "Unavailable" ||
        (d.error.code === "Failed" && d.error.failureClass === "permission")
      ) {
        if (!w) (U(`cannot read ${t}: ${describeStorageError(d.error)}; retrying`), (w = !0));
        await sleep(500);
        continue;
      }
      (U(`cannot read ${t}: ${describeStorageError(d.error)}`), process.exit(1));
    }
    let k = d.value.items[0];
    if (!k.found) {
      if (!w)
        (U(`cannot read ${t}: no such file or directory; retrying`), (w = !0));
      await sleep(500);
      continue;
    }
    if (((w = !1), k.totalBytes < a)) {
      a = 0;
      continue;
    }
    if (k.value.length > 0)
      (process.stdout.write(k.value), (a += k.value.length));
    else await sleep(500);
  }
}
export { daemonMain };

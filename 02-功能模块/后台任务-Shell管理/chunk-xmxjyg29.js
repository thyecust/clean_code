// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xn, j, B, he, pv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, zn, An, pl, ac, li, BL } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { readBoundedFile, sanitizeSessionName, ownStoredLoginPlanAttributes, saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isRestrictedMode } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { le, Zt, cr, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { R, l, A, Jr, H_e, I_e, WHt, Gw, Jg, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, jsonStringify, jsonParse, UNVERIFIED_ANCESTRY_SENTINEL, resolveSymlinkTargetSync, getFsSurface, redactSecretsFromText, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isStdinUnusableError, peekForStdinData } from "./chunk-z5vtnzjg.js";
import { pluralize, truncateToCodeUnits, takeLastCodeUnits, beforeFirst, normalizeWhitespace, stripAnsiAndControlChars } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { logEvent, logEventAsync } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, logFeatureOkAsync, logFeatureBadAsync, logFeatureSadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { GIT_HARDENED_ARGS, sanitizeGitEnv, execFileNoThrow, execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { validateStorageKey, isValidGitSha, findGitRoot, findGitRootVerifyingPositive, gitExe } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { cursorToPosition, CURSOR_HOME_SEQUENCE, ERASE_ENTIRE_LINE, ERASE_SCREEN_SEQUENCE, RESET_SCROLL_REGION, truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { quarantineJobTranscript, isTranscriptFileResumeArg, resolveJobTranscript, canonicalizePath } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { RENAME_CONTENTION_ERRNOS, renameWithRetry, writeFileAtomic } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { hashSha256 } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { PROVIDER_CONFIG_ENV_VARS, BASE_URL_ENV_GROUPS, hasHostManagedAuth } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { setupGitBashShellEnv } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { sanitizeAnalyticsId } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { hasSkipDangerousModePermissionPrompt, hasAutoModeOptIn } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { buildBgDispatcherEnvVars } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { provenSameProcessAsync, ownProcStartAsync, getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { bgSupervisorNoun, bgSupervisorNounCap, daemonHint } from "../多会话视图-Fleet/agent-view-feature-gates.js";
import { killIfSameProcess } from "../../01-核心基础设施/核心工具-进程与信号/chunk-q8r1ycrr.js";
import { Itn, nBn, Jye, G0e, Nat, uF } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { Tf } from "../../00-第三方库/supports-color/chunk-gdyh44zt.js";
import { enableTerminalMode, disableTerminalMode, DISABLE_SYNCHRONIZED_UPDATE, SHOW_CURSOR, HIDE_CURSOR, DISABLE_WIN32_INPUT_MODE } from "../终端环境探测-TUI-tmux/terminal-mode-sequences.js";
import { CLEAR_ITERM2_PROGRESS_SEQUENCE } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import {
  getBackgroundSupervisorState,
  createEscapeSequenceOnlyDetector,
  installDaemonService,
  DAEMON_START_TIMEOUT_MS,
  waitForDaemonReady,
  ensureDaemonRunning,
  getHostManagedMarkerKey,
  ensureHostManagedScope,
  writeHostManagedMarker,
  deleteHostManagedMarker,
} from "./chunk-jfk5mpe1.js";
import { redactDaemonNonce, readControlKey, getDispatchDir, ATTACH_JOURNAL_NAMESPACE, getAttachJournalDir, getHostManagedDir, getHostManagedMarkerPath, getPtySocketPath, getControlSocketPath } from "./chunk-djserjj5.js";
import {
  VALUE_TAKING_RESPAWN_FLAGS,
  VALUE_TAKING_FLAGS,
  MULTI_VALUE_FLAGS,
  BOOLEAN_RESPAWN_FLAGS,
  BOOLEAN_ENV_KEYS,
  ALLOWED_PROVIDER_ENV_KEYS,
  sanitizeRespawnFlags,
  normalizeCliArgPaths,
  VALUELESS_SHORT_FLAGS,
  withReplyOnResumeFlag,
  BG_PROTO,
  SHORT_RE,
  DAEMON_DETACH_APC,
  DAEMON_HINT_APC,
  extractInteractiveMarks,
  boundedMarkCountOrUndefined,
  parseDetachMsg,
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
  readRoster,
  updateRoster,
  getProcessLiveness,
  isProcessConfirmedLive,
  isCarriableCliToken,
  buildCarriableFlagPair,
  getJobsDir,
  getJobDir,
  jobStateKey,
  writeStateAtomic,
  logJobWriteError,
  buildBridgeReattachEnv,
  invalidateJobStateCache,
  readJobState,
  readJobStateAfterSettle,
  listJobs,
  IDLE_NEEDS,
  IDLE_DETAIL,
  PRE_BOOT_STATES,
  makeInitialState,
  isTerminal,
  isSettled,
  isExecLaunch,
  hasOutstandingAsk,
  MAX_DETAIL_CHARS,
  clipWithEllipsis,
} from "./chunk-7wsy8vxb.js";
import { controlRequest, openDaemonLease, subscribeControl } from "../守护服务-Daemon/chunk-9fpz6abc.js";
import { getLauncherConfigError, getLauncherErrorMessage, getLauncherCommandString } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { createDecModeTracker, isLowMemory, killPtySocket } from "./chunk-gnmy62vg.js";
import { getDaemonLockPath, getVerifiedDaemonLock, stopDaemonLockHolder, describeStopFailure, describeUnknownOriginLock } from "./daemon-lock.js";
import { policyDeniedReason } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import {
  parsePastedPlaceholders,
  findAgentByType,
  getBuiltInAgents,
  isBuiltInAgent,
  getAgentDefinitionsWithOverrides,
  clearAgentDefinitionsCache,
  formatForkSourceKey,
  resolveWorktreeCleanupRoot,
  claudeWorktreeLockPid,
  mayReleaseWorktreeLock,
  listRegisteredWorktrees,
  getAgentWorktreeChanges,
  IDENTITY_CHANGED_SUMMARY,
  UNVERIFIED_WORKTREE_SUMMARY,
  removeAgentWorktree,
  getDefaultRemoteRef,
  passesCommitSafetyChecks,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { sendToUdsSocket, listAllLiveSessions } from "../跨会话消息-UDS/chunk-ddtmwhn7.js";
import { wtn, B0e, ktn } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { waitForPolicyLimitsToLoad } from "../策略限制-PolicyLimits/policy-limits-client.js";
import { relaunchClaudeCode } from "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import { writeStdoutAndDrain, exitAfterAnalyticsFlush } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-4f55jpqh.js";
import { CLAUDE_AGENT } from "../../01-核心基础设施/核心工具-未归类/chunk-kyy28ene.js";
import { getBackgroundFlagConflictMessage, hasRemoteBackendFlag, stripEnvironmentFlags } from "../../03-入口与运行时/Headless-SDK模式/cloud-flag-validation.js";
import { SESSION_LIVE_ELSEWHERE_MESSAGE, listLiveSessionHolders } from "../../01-核心基础设施/核心工具-未归类/session-live-elsewhere.js";
import { getDaemonJsonPath, getDaemonLogPath } from "../守护服务-Daemon/daemon-paths.js";
import { trySetRawMode } from "../终端环境探测-TUI-tmux/try-set-raw-mode.js";
import { ALLOW_ROUTINES_POLICY, ROUTINES_POLICY_DENIED_MESSAGE } from "../../01-核心基础设施/核心工具-未归类/routines-policy.js";
import { fromJobState, parseAttachVia, ensureJobDir, ensureJobTmpDir } from "../守护服务-Daemon/chunk-tpraq69b.js";
import { getDraftMode } from "../../01-核心基础设施/核心工具-未归类/bash-mode-draft-text.js";
import { getSystemTheme } from "../../01-核心基础设施/UI组件-TUI/theme-resolution.js";
import { createHoverRestOptions, createBackendHandle, createTranscriptSource } from "../../01-核心基础设施/核心工具-未归类/hover-rest-transcript.js";
import { normalizePathForComparison } from "../../01-核心基础设施/核心工具-路径与平台/chunk-nfcecy7x.js";
import { isProcessRunning } from "../守护服务-Daemon/process-record.js";
import { createKeyedSerialQueue } from "../../01-核心基础设施/核心工具-并发与缓存/async-serialization.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { randomUUID as Hi } from "crypto";
import {
  lstat as Wr,
  readdir as Gi,
  realpath,
  rm as Ji,
  unlink as Ki,
  writeFile as qi,
} from "fs/promises";
import {
  isAbsolute,
  join as Rn,
  normalize,
  relative,
} from "path";
import { readFile, unlink as oo } from "fs/promises";
import { join as io } from "path";
var so = 250,
  ao = 604800000,
  co = 256,
  lo = createLazyValue(() =>
    nt({
      writtenAtMs: Zt().optional(),
      shells: cr(
        nt({
          pid: Zt().int().positive(),
          procStart: le().optional(),
          startTimeTicks: Zt().int().optional(),
        }),
      ).catch([]),
    }),
  );
async function Fn(e, t = {}) {
  let o = io(e, "adopt.json"),
    r = `${o}.reap.${process.pid}`,
    s = Date.now() + (t.waitMs ?? 0);
  for (;;)
    try {
      await renameWithRetry(o, r);
      break;
    } catch (c) {
      if (Date.now() >= s) {
        if (!W(c)) logForDebugging(`[adopt] reap claim failed: ${c}`, { level: "warn" });
        return { found: !1, reaped: 0 };
      }
      await sleep(so);
    }
  try {
    let c = lo().safeParse(jsonParse(await readFile(r, "utf-8")));
    if (!c.success) return { found: !0, reaped: 0 };
    let { writtenAtMs: d, shells: _ } = c.data,
      p = d !== void 0 ? Date.now() - d : void 0;
    if ((p !== void 0 && p > ao) || _.length > co)
      return (
        logForDebugging(
          `[adopt] reap skipped: implausible payload (age ${p ?? "?"}ms, ${_.length} entries)`,
          { level: "warn" },
        ),
        { found: !0, reaped: 0 }
      );
    if (
      (await Promise.all(
        _.map((v) => killIfSameProcess(v.pid, v.startTimeTicks, v.procStart)),
      ),
      _.length > 0)
    )
      logEvent("tengu_adopt_exit_reap", { reaped_shells: _.length });
    return { found: !0, reaped: _.length };
  } catch (c) {
    return (
      logForDebugging(`[adopt] reap read/parse failed: ${c}`, { level: "warn" }),
      { found: !0, reaped: 0 }
    );
  } finally {
    await oo(r).catch(() => {});
  }
}
import { randomUUID as bo } from "crypto";
import { connect } from "net";
import {
  lstat as Ht,
  mkdir as uo,
  readdir as fo,
  rename,
  unlink as Ut,
} from "fs/promises";
import { join as Ze } from "path";
var Un = 900000,
  sn = 86400000;
function Ct(e, t) {
  return t - e >= sn || e > t + 60000;
}
var Hn = /^[A-Za-z0-9-]{1,64}$/;
function Gt(e) {
  return Ze(getAttachJournalDir(), `${e}.json`);
}
var Wt = 8192;
function Tt(e) {
  return STORAGE_KEYS.daemon([ATTACH_JOURNAL_NAMESPACE, e]);
}
function on(e) {
  return Tt(`${e}.json`);
}
var Wn = createKeyedSerialQueue();
function Jt(e, t) {
  return Wn.run("g:" + e, t).catch(() => {});
}
async function claimAttachBeacon(e, t, o) {
  if (!Hn.test(e)) return;
  let r = {
    gestureId: e,
    surface: t,
    startedAtEpochMs: Date.now(),
    attempt: 0,
  };
  (getBackgroundSupervisorState().ownedBeacons.set(e, r),
    await Jt(e, async () => {
      if (((r.pid = process.pid), (r.procStart = await ownProcStartAsync()), o)) {
        if (!(await an(o, e, r, !0))) getBackgroundSupervisorState().ownedBeacons.delete(e);
        return;
      }
      if ((await uo(getAttachJournalDir(), { recursive: !0, mode: 448 }), !(await tt()))) {
        getBackgroundSupervisorState().ownedBeacons.delete(e);
        return;
      }
      if (getBackgroundSupervisorState().ownedBeacons.get(e) !== r) return;
      await writeFileAtomic(Gt(e), jsonStringify(r), 384);
    }),
    await ho(o));
}
async function an(e, t, o, r = !1) {
  if (!(await tt(r))) return !1;
  if (getBackgroundSupervisorState().ownedBeacons.get(t) === o) await e.write(on(t), jsonStringify(o));
  return !0;
}
function Gn(e, t, o) {
  let r = getBackgroundSupervisorState().ownedBeacons.get(e);
  if (!r || !Number.isInteger(t) || t <= (r.attempt ?? 0)) return;
  ((r.attempt = t),
    Jt(e, async () => {
      if (((r.procStart ??= await ownProcStartAsync()), o)) {
        await an(o, e, r);
        return;
      }
      if (!(await tt())) return;
      if (getBackgroundSupervisorState().ownedBeacons.get(e) !== r) return;
      await writeFileAtomic(Gt(e), jsonStringify(r), 384);
    }));
}
function ut(e, t, o) {
  let r = getBackgroundSupervisorState().ownedBeacons.get(e);
  if (!r) return;
  if (t.marksExpected !== void 0)
    r.marksExpected = r.marksExpected === !0 || t.marksExpected;
  if (t.daemonBooted !== void 0)
    r.daemonBooted = r.daemonBooted === !0 || t.daemonBooted;
  if (t.interactiveReached) r.interactiveReached = !0;
  if (t.attachMs !== void 0) r.attachMs ??= t.attachMs;
  if (t.msgsLoaded !== void 0) r.msgsLoaded ??= t.msgsLoaded;
  if (t.msgsInJsonl !== void 0) r.msgsInJsonl ??= t.msgsInJsonl;
  if (t.msgsRenderedAtFirstPaint !== void 0)
    r.msgsRenderedAtFirstPaint ??= t.msgsRenderedAtFirstPaint;
  if (t.attachCold !== void 0 && r.interactiveReached !== !0)
    r.attachCold = t.attachCold;
  if (t.via !== void 0 && r.interactiveReached !== !0) r.via = t.via;
  Jt(e, async () => {
    if (((r.procStart ??= await ownProcStartAsync()), o)) {
      await an(o, e, r);
      return;
    }
    if (!(await tt())) return;
    if (getBackgroundSupervisorState().ownedBeacons.get(e) !== r) return;
    await writeFileAtomic(Gt(e), jsonStringify(r), 384);
  });
}
async function releaseAttachBeacon(e, t) {
  if (!Hn.test(e)) return;
  (getBackgroundSupervisorState().ownedBeacons.delete(e),
    await Jt(e, async () => {
      if (t) {
        if (!(await tt())) return;
        let r = !1;
        for (let s = 0; ; s++) {
          let c = await t.delete(on(e));
          if (c.ok) return;
          let d = "telemetryCode" in c.error ? c.error.telemetryCode : void 0;
          if (
            ((r = d !== void 0 && RENAME_CONTENTION_ERRNOS.has(d)),
            r && getCurrentPlatform() === "windows" && s < Mn - 1)
          ) {
            await sleep(Ln);
            continue;
          }
          break;
        }
        if (!r) return;
        await t.write(on(e), "{}");
        return;
      }
      let o = Gt(e);
      if (!(await tt())) return;
      for (let r = 0; ; r++)
        try {
          await Ut(o);
          return;
        } catch (s) {
          let c = A(s);
          if (c === "ENOENT") return;
          if (getCurrentPlatform() === "windows" && c !== void 0 && RENAME_CONTENTION_ERRNOS.has(c) && r < Mn - 1) {
            await sleep(Ln);
            continue;
          }
          break;
        }
      await rename(o, `${o}.${process.pid}.cleared`).catch(() => {});
    }));
}
var Mn = 4,
  Ln = 50;
async function tt(e = !1) {
  try {
    return (await Ht(getAttachJournalDir())).isDirectory();
  } catch (t) {
    return e && A(t) === "ENOENT";
  }
}
async function mo(e) {
  try {
    let t = await readBoundedFile(Ze(getAttachJournalDir(), e), Wt);
    if (t === null) return null;
    return Jn(t);
  } catch {
    return null;
  }
}
async function po(e, t) {
  let o = Tt(t),
    r = await e.statMeta(o);
  if (!r.ok || r.value.size > Wt) return null;
  let s = await e.read([o]);
  if (!s.ok) return null;
  let c = s.value.items[0];
  if (!c.found || c.totalBytes > Wt) return null;
  let d = Jn(Buffer.from(c.value).toString("utf8"));
  return d === null
    ? null
    : { entry: d, version: c.version, mtimeMs: c.mtimeMs };
}
function Jn(e) {
  try {
    let t = jsonParse(e);
    return !!t &&
      typeof t === "object" &&
      typeof t.gestureId === "string" &&
      typeof t.startedAtEpochMs === "number" &&
      Number.isFinite(t.startedAtEpochMs) &&
      t.startedAtEpochMs <= Date.now() + 60000
      ? t
      : null;
  } catch {
    return null;
  }
}
async function Kn(e) {
  if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0)
    return !1;
  if (!isProcessRunning(e.pid)) return !0;
  if (e.procStart === void 0) return !1;
  let t = await getProcessStartTimeAsync(e.pid);
  return t !== void 0 && t !== e.procStart;
}
async function go(e, t) {
  try {
    let o = await Ht(Ze(getAttachJournalDir(), e));
    return Ct(o.mtimeMs, t);
  } catch {
    return !1;
  }
}
function ho(e) {
  return Wn.run("reconcile", () => _o(e));
}
async function _o(e) {
  if (e) return wo(e);
  if (!(await tt())) return [];
  let t;
  try {
    t = await fo(getAttachJournalDir());
  } catch {
    return [];
  }
  let o = Date.now(),
    r = [];
  for (let s of t) {
    if (!s.endsWith(".json")) {
      try {
        let E = await Ht(Ze(getAttachJournalDir(), s));
        if (Ct(E.mtimeMs, o)) await Ut(Ze(getAttachJournalDir(), s));
      } catch {}
      continue;
    }
    let c = await mo(s);
    if (c === null) {
      try {
        let E = await Ht(Ze(getAttachJournalDir(), s));
        if (Ct(E.mtimeMs, o)) await Ut(Ze(getAttachJournalDir(), s));
      } catch {}
      continue;
    }
    let d = o - c.startedAtEpochMs;
    if (
      !(typeof c.pid === "number" && Number.isInteger(c.pid) && c.pid > 0
        ? d >= Un &&
          ((await Kn(c)) || (c.procStart === void 0 && (await go(s, o))))
        : d >= sn)
    ) {
      r.push(c);
      continue;
    }
    let v = Ze(getAttachJournalDir(), `${s}.${process.pid}.claimed`);
    try {
      await rename(Ze(getAttachJournalDir(), s), v);
    } catch {
      continue;
    }
    (await Ut(v).catch(() => {}), qn(c));
  }
  return r;
}
function qn(e) {
  let t = e.interactiveReached === !0,
    o = !t && e.marksExpected === !1,
    r =
      t &&
      typeof e.attachMs === "number" &&
      Number.isFinite(e.attachMs) &&
      e.attachMs >= 0 &&
      e.attachMs < 86400000
        ? Math.round(e.attachMs)
        : void 0;
  logEvent("tengu_bg_attach_outcome", {
    outcome: fromEnum(t || o ? "detached" : "error"),
    got_ack: t || typeof e.marksExpected === "boolean",
    got_first_frame: t ? !0 : o ? void 0 : !1,
    synthetic: !0,
    apc_detach: !1,
    timed_out: t || o ? void 0 : !0,
    journal_recovered: !0,
    attach_ms: r,
    first_frame_kind: fromEnumOpt(t ? "real" : void 0),
    marks_expected: t
      ? !0
      : typeof e.marksExpected === "boolean"
        ? e.marksExpected
        : void 0,
    attempt:
      typeof e.attempt === "number" &&
      Number.isInteger(e.attempt) &&
      e.attempt >= 0 &&
      e.attempt < 1e6
        ? e.attempt + 1
        : 0,
    gesture_id: sanitizeAnalyticsId(e.gestureId),
    surface: fromEnumOpt(
      e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : void 0,
    ),
    daemon_booted:
      typeof e.daemonBooted === "boolean" ? e.daemonBooted : void 0,
    attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : void 0,
    via: fromEnumOpt(parseAttachVia(e.via)),
    msgs_loaded: t ? boundedMarkCountOrUndefined(e.msgsLoaded) : void 0,
    msgs_in_jsonl: t ? boundedMarkCountOrUndefined(e.msgsInJsonl) : void 0,
    msgs_rendered_at_first_paint: t ? boundedMarkCountOrUndefined(e.msgsRenderedAtFirstPaint) : void 0,
  });
}
async function wo(e) {
  if (!(await tt())) return [];
  let t = [],
    o;
  do {
    let c = await e.listEntries(
      { namespace: "daemon", relPath: [ATTACH_JOURNAL_NAMESPACE] },
      o === void 0 ? void 0 : { cursor: o },
    );
    if (!c.ok) return [];
    for (let d of c.value.items) {
      if (
        d.kind !== "key" ||
        d.key.namespace !== "daemon" ||
        d.key.relPath.length !== 2 ||
        d.key.relPath[0] !== ATTACH_JOURNAL_NAMESPACE
      )
        continue;
      let _ = d.key.relPath[1];
      if (_ !== void 0) t.push({ file: _, size: d.size, mtimeMs: d.mtimeMs });
    }
    o = c.value.cursor;
  } while (o !== void 0);
  let r = Date.now(),
    s = [];
  for (let { file: c, size: d, mtimeMs: _ } of t) {
    let p = _ !== void 0 && Ct(_, r);
    if (!c.endsWith(".json")) {
      if (p) await e.delete(Tt(c));
      continue;
    }
    let v = d !== void 0 && d > Wt ? null : await po(e, c);
    if (v === null) {
      if (p) await e.delete(Tt(c));
      continue;
    }
    let E = v.entry,
      k = r - E.startedAtEpochMs;
    if (
      !(typeof E.pid === "number" && Number.isInteger(E.pid) && E.pid > 0
        ? k >= Un &&
          ((await Kn(E)) || (E.procStart === void 0 && Ct(v.mtimeMs, r)))
        : k >= sn)
    ) {
      s.push(E);
      continue;
    }
    let C = await e.delete(Tt(c), {
      precondition: { type: "ifMatch", version: v.version },
    });
    if (!C.ok || !C.value.existed) continue;
    qn(E);
  }
  return s;
}
var yo = 1e4,
  It = "ENORESPONSE",
  gt = "Session isn't responding",
  Yn = {
    ENOJOB: "enojob",
    ETIMEOUT: "etimeout",
    ECWDGONE: "ecwdgone",
    EUNKNOWN: "eunknown",
    ENOREPLY: "enoreply",
    ERESPAWNING: "erespawning",
    ESTALE: "estale",
    EALIVE: "ealive",
    ESTARTING: "estarting",
    EPEERUID: "epeeruid",
    ETOOLARGE: "etoolarge",
    EUNVERIFIED: "eunverified",
    EAUTH: "eauth",
    EPROTO: "eproto",
    EHOSTDEAD: "ehostdead",
  };
function So(e) {
  return Object.hasOwn(Yn, e) ? Yn[e] : "unknown_code";
}
function Eo(e) {
  if (e === void 0 || e === "") return;
  if (KICKED_ATTACH_CODE.test(e)) return "ekicked";
  if (e.includes("ERESPAWNING")) return "erespawning";
  if (e.includes("ESTARTING")) return "estarting";
  if (e.includes("ESTALLED")) return "estalled";
  if (e.includes("EUNVERIFIED")) return "eunverified";
  if (e.includes("EHOSTDEAD")) return "ehostdead";
  if (SUPERVISOR_DETACH_CODE.test(e)) return "unknown_code";
  return "worker_detach";
}
function xe(e, t, o) {
  if (!e) return;
  let r = e.interactive?.reached,
    s = t === "detached" ? e.interactive?.marksExpected : void 0,
    c = t === "detached" && r === void 0 && s === !0,
    d = c && e.t0 !== void 0 ? Math.round(performance.now() - e.t0) : void 0;
  logEvent("tengu_bg_attach_outcome", {
    outcome: fromEnum(t),
    got_ack: !1,
    got_first_frame: !1,
    synthetic: !0,
    apc_detach: !1,
    failure_class: fromEnumOpt(t === "error" ? (o ?? "daemon_unavailable") : void 0),
    gesture_id: sanitizeAnalyticsId(e.gestureId),
    attempt: ++e.attempt,
    surface: fromEnumOpt(e.surface),
    daemon_booted: e.daemonBooted,
    via: fromEnumOpt(e.interactive?.via),
    attach_cold: e.interactive?.attachCold,
    attach_ms: r !== void 0 ? r.attachMs : d,
    content_paint_ms: r !== void 0 ? Math.round(r.contentPaintMs) : void 0,
    prompt_idle_ms: r !== void 0 ? Math.round(r.promptIdleMs) : void 0,
    msgs_loaded: r?.msgsLoaded,
    msgs_in_jsonl: r?.msgsInJsonl,
    msgs_rendered_at_first_paint: r?.msgsRenderedAtFirstPaint,
    first_frame_kind: fromEnumOpt(r !== void 0 ? "real" : void 0),
    marks_expected: r !== void 0 ? !0 : s,
    attach_censored: c ? !0 : void 0,
  });
}
async function Ot(e) {
  let t = await controlRequest({ proto: BG_PROTO, op: "has", short: e });
  return t.ok && t.op === "has" && t.present === !1;
}
var dn = 2,
  er = 26,
  nr = 100,
  vo = 8,
  Ao = Buffer.from([127]),
  or = 98,
  ir = 122,
  Kt = Buffer.from("\x1B[27;5;98~", "latin1"),
  sr = Buffer.from("\x1B[27;5;122~", "latin1"),
  Ro = Buffer.from("\x1B[27u", "latin1"),
  Co = Buffer.from("\x1B[27;1u", "latin1"),
  Do = 3,
  Po = 99,
  Io = Buffer.from("\x1B[27;5;99~", "latin1"),
  Qn = Buffer.from(DAEMON_DETACH_APC, "ascii"),
  cn = Buffer.from(DAEMON_HINT_APC, "ascii"),
  Vn = Buffer.from("\x1B_cc-d", "ascii"),
  Dt = Buffer.from("\x1B[?9001", "ascii"),
  Oo = 100;
function mt(e, t, o) {
  return (
    e.length - t >= o.length && e.compare(o, 0, o.length, t, t + o.length) === 0
  );
}
function Pt(e, t, o) {
  if (e[t] !== 27 || e[t + 1] !== 91) return 0;
  let r = t + 2,
    s = () => {
      let p = -1;
      for (let v = 0; v < 8 && r < e.length; v++) {
        let E = e[r];
        if (E < 48 || E > 57) break;
        ((p = (p < 0 ? 0 : p) * 10 + (E - 48)), r++);
      }
      return p;
    },
    c = s();
  if (c < 0) return 0;
  let d = -1;
  if (e[r] === 58) {
    if ((r++, s(), e[r] === 58)) (r++, (d = s()));
  }
  if (e[r] !== 59 || e[r + 1] !== 53 || e[r + 2] !== 117) return 0;
  return (c > 127 && d >= 0 ? d : c) === o ? r + 3 - t : 0;
}
function St(e, t) {
  let o = Math.min(e.length, t.length - 1);
  e: for (let r = o; r > 0; r--) {
    let s = e.length - r;
    for (let c = 0; c < r; c++) if (e[s + c] !== t[c]) continue e;
    return r;
  }
  return 0;
}
var $e = Buffer.alloc(0);
function ar(e, t) {
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (t) {
      if (((t = !1), r === nr)) return { matched: !0, prefixArmed: !1 };
      continue;
    }
    if (
      r === er ||
      r === Do ||
      Pt(e, o, ir) ||
      mt(e, o, sr) ||
      Pt(e, o, Po) ||
      mt(e, o, Io)
    )
      return { matched: !0, prefixArmed: !1 };
    let s = r === dn ? 1 : Pt(e, o, or) || (mt(e, o, Kt) ? Kt.length : 0);
    if (s) ((o += s - 1), (t = !0));
  }
  return { matched: !1, prefixArmed: t };
}
function dr(e) {
  let t = !1,
    o = !1,
    r,
    s = new Promise((d) => {
      r = d;
    }),
    c = () => {
      if (t) return;
      let d;
      while ((d = e.read()) !== null) {
        let _ = typeof d === "string" ? Buffer.from(d, "utf8") : d,
          p = ar(_, o);
        if (((o = p.prefixArmed), p.matched)) {
          ((t = !0), r());
          return;
        }
      }
    };
  if ((e.on("readable", c), "resume" in e && "pause" in e))
    (e.resume(), e.pause());
  return (
    c(),
    {
      promise: s,
      cancel: () => {
        ((t = !0), e.removeListener("readable", c));
      },
    }
  );
}
function $t(e) {
  return ar(e, !1).matched;
}
async function rt(e, t = {}) {
  let o = t.stdin ?? process.stdin,
    r = t.stdout ?? process.stdout,
    s = "columns" in r ? r.columns || 120 : 120,
    c = "rows" in r ? r.rows || 30 : 30,
    d = s,
    _ = c,
    p = bo(),
    v = await readControlKey(),
    E = Date.now(),
    k = performance.now(),
    w = t.telemetry?.t0,
    O =
      w !== void 0 && Number.isFinite(w) && w >= 0 && w <= k && k - w < 86400000
        ? w
        : k;
  if (t.telemetry?.gestureId !== void 0)
    Gn(t.telemetry.gestureId, t.telemetry.attempt, t.telemetry.storageV5);
  let C,
    N,
    T,
    D,
    J,
    te = $e,
    K = t.telemetry?.interactive?.reached,
    ce = !1,
    pe,
    be = setTimeout(
      () => {
        if (K === void 0 && (C === void 0 || N === void 0))
          ((ce = !0), (pe = performance.now() - O));
      },
      Math.max(0, 30000 - (k - O)),
    ),
    ve = !1,
    je,
    de,
    Re,
    De,
    ge,
    He,
    Ue,
    ze,
    ye,
    Pe = !1,
    Oe;
  function Ke(U) {
    let L = Date.now() - E;
    if (U && Oe === void 0) Oe = L;
    if (Pe) return;
    ((Pe = !0),
      (ve = !U),
      logEvent("tengu_bg_attach_first_frame", {
        ms: L,
        meaningful_ms: Oe,
        ack_ms: je,
        gesture_id: sanitizeAnalyticsId(t.telemetry?.gestureId),
        attempt: t.telemetry?.attempt,
        via: fromEnumOpt(de),
        tempo: fromEnumOpt(De),
        stale: He,
        state: fromJobState(ge),
        cached: ze,
      }));
  }
  let it,
    Ae = new Promise((U) => {
      it = U;
    }),
    Ne = !1,
    Le = !1,
    qe,
    ne = !1,
    Ye,
    Ve = s,
    me = c,
    re = createDecModeTracker(),
    _e = () =>
      G0e({
        legacyKitty:
          Ue !==
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
      }),
    wt = getCurrentPlatform() === "windows" && !wtn(),
    bt =
      t.holdScreenOnDisconnect && getCurrentPlatform() === "windows"
        ? !0
        : "isRaw" in o
          ? Boolean(o.isRaw)
          : !1,
    Me = getCurrentPlatform() === "windows",
    et = Buffer.from(SHOW_CURSOR, "ascii"),
    Nt = Buffer.from(HIDE_CURSOR, "ascii"),
    st = Me && ktn(),
    At = !1,
    X,
    ue;
  try {
    ue = connect(getControlSocketPath());
  } catch (U) {
    let L = t.telemetry?.interactive?.reached,
      F =
        typeof t.telemetry?.interactive?.marksExpected === "boolean"
          ? t.telemetry.interactive.marksExpected
          : void 0;
    return (
      logEvent("tengu_bg_attach_outcome", {
        outcome: fromEnum("error"),
        got_ack: !1,
        got_first_frame: !1,
        ms: Date.now() - E,
        apc_detach: !1,
        failure_class: fromEnum("connect_throw"),
        gesture_id: sanitizeAnalyticsId(t.telemetry?.gestureId),
        attempt: t.telemetry?.attempt,
        surface: fromEnumOpt(t.telemetry?.surface),
        daemon_booted: t.telemetry?.daemonBooted,
        attach_ms:
          L !== void 0
            ? L.attachMs
            : F === !0
              ? Math.round(performance.now() - O)
              : void 0,
        content_paint_ms: L !== void 0 ? Math.round(L.contentPaintMs) : void 0,
        prompt_idle_ms: L !== void 0 ? Math.round(L.promptIdleMs) : void 0,
        msgs_loaded: L?.msgsLoaded,
        msgs_in_jsonl: L?.msgsInJsonl,
        msgs_rendered_at_first_paint: L?.msgsRenderedAtFirstPaint,
        first_frame_kind: fromEnumOpt(L !== void 0 ? "real" : void 0),
        marks_expected: L !== void 0 ? !0 : F,
        attach_censored: L === void 0 && F === !0 ? !0 : void 0,
        via: fromEnumOpt(t.telemetry?.interactive?.via),
        attach_cold: t.telemetry?.interactive?.attachCold,
      }),
      clearTimeout(be),
      { outcome: "error", msg: redactDaemonNonce(l(U)) }
    );
  }
  ue.setTimeout(1e4, () => {
    if (!Le)
      fe(
        "error",
        `${bgSupervisorNoun()} did not respond \u2014 it may be stalled${daemonHint("restart")}`,
        { failureClass: "ack_timeout" },
      );
  });
  function fe(U, L, F) {
    if (Ne) return;
    let { viaApc: H, failureClass: I } = F ?? {};
    ((Ne = !0), clearTimeout(X), clearTimeout(be), clearTimeout(qe));
    let V = Math.round(performance.now() - O),
      q = C !== void 0 && N !== void 0 ? Math.round(Math.max(C, N)) : void 0,
      G = ye !== void 0 || t.telemetry?.interactive?.marksExpected === !0,
      se = K === void 0 && G && ce && q === void 0,
      ke = K === void 0 && G && !se && q === void 0,
      dt = K !== void 0 ? K.attachMs : se ? Math.round(pe ?? V) : ke ? V : q,
      to =
        K !== void 0
          ? "real"
          : q !== void 0
            ? "real"
            : Pe
              ? ve && Oe === void 0
                ? "dimhint"
                : "unknown"
              : void 0;
    if (
      (logEvent("tengu_bg_attach_outcome", {
        outcome: fromEnum(U),
        got_ack: Le,
        got_first_frame: Pe,
        ms: Date.now() - E,
        gesture_id: sanitizeAnalyticsId(t.telemetry?.gestureId),
        attempt: t.telemetry?.attempt,
        via: fromEnumOpt(t.telemetry?.interactive?.via ?? de),
        tempo: fromEnumOpt(De),
        apc_detach: H === !0,
        failure_class: fromEnumOpt(I),
        state: fromJobState(ge),
        cached: ze,
        meaningful_ms: Oe,
        input_accepted_ms: Ft,
        input_delivered_ms: Ft,
        keys_dropped: Cn,
        attach_ms: dt,
        content_paint_ms:
          K !== void 0
            ? Math.round(K.contentPaintMs)
            : C !== void 0
              ? Math.round(C)
              : void 0,
        prompt_idle_ms:
          K !== void 0
            ? Math.round(K.promptIdleMs)
            : N !== void 0
              ? Math.round(N)
              : void 0,
        timed_out: se,
        attach_censored: ke,
        marks_expected:
          K !== void 0
            ? !0
            : Le || typeof t.telemetry?.interactive?.marksExpected === "boolean"
              ? G
              : void 0,
        attach_cold:
          t.telemetry?.interactive?.attachCold ??
          (de !== void 0 ? de === "cold" && (Re ?? !0) : void 0),
        daemon_booted: t.telemetry?.daemonBooted,
        surface: fromEnumOpt(t.telemetry?.surface),
        first_frame_kind: fromEnumOpt(to),
        msgs_loaded: K?.msgsLoaded ?? T,
        msgs_in_jsonl: K?.msgsInJsonl ?? D,
        msgs_rendered_at_first_paint: K?.msgsRenderedAtFirstPaint ?? J,
      }),
      Le)
    ) {
      let no =
        t.alreadyInAlt || (U === "disconnected" && t.holdScreenOnDisconnect);
      r.write(
        DISABLE_SYNCHRONIZED_UPDATE +
          re.snapshot().map(disableTerminalMode).reverse().join("") +
          SHOW_CURSOR +
          (getCurrentPlatform() === "windows" ? DISABLE_WIN32_INPUT_MODE : "") +
          "\x1B[0m\x1B7" +
          RESET_SCROLL_REGION +
          "\x1B8" +
          (Jye() ? CLEAR_ITERM2_PROGRESS_SEQUENCE : "") +
          (no ? "" : uF()),
      );
    }
    if (!bt) trySetRawMode(o, !1);
    if (
      (o.removeListener("readable", nn),
      o.removeListener("end", Dn),
      "removeListener" in r)
    )
      r.removeListener("resize", tn);
    (clearTimeout(Ye), ue.destroy(), it({ outcome: U, msg: L, viaApc: H }));
  }
  function Zr() {
    fe("error", `${It}: ${gt}`, { failureClass: "no_response" });
  }
  function tn() {
    if (Ne) return;
    if (Ye === void 0) ((Ve = d), (me = _));
    ((d = "columns" in r ? r.columns || s : s),
      (_ = "rows" in r ? r.rows || c : c),
      clearTimeout(Ye),
      (Ye = setTimeout(() => {
        if (((Ye = void 0), Ne)) return;
        if (d < Ve || _ < me) r.write(ERASE_SCREEN_SEQUENCE + CURSOR_HOME_SEQUENCE);
        controlRequest({
          proto: BG_PROTO,
          op: "resize",
          short: e,
          cols: d,
          rows: _,
          attachId: p,
        });
      }, 50)));
  }
  let Tn = t.gateStdinUntilFirstFrame === !0 && "isTTY" in o && o.isTTY === !0,
    Ft,
    Cn = 0,
    Qr = createEscapeSequenceOnlyDetector();
  function at(U) {
    let L = () => Qr(U.toString("latin1"));
    if (!Tn || Pe) {
      if (Ft === void 0 && !L()) Ft = Date.now() - E;
      ue.write(U);
    } else if (!L()) Cn++;
  }
  function Vr(U) {
    if (Ne) return;
    let L = typeof U === "string" ? Buffer.from(U, "utf8") : U,
      F = 0;
    for (let H = 0; H < L.length; H++) {
      let I = L[H];
      if (ne) {
        if (((ne = !1), H > F)) at(L.subarray(F, H));
        if (I === nr) return fe("detached");
        (at(Buffer.from([dn, I])), (F = H + 1));
        continue;
      }
      if (
        Tn &&
        !Pe &&
        ((I === 27 && L.length === 1) || mt(L, H, Ro) || mt(L, H, Co))
      )
        return fe("detached");
      if (I === er || Pt(L, H, ir) || mt(L, H, sr)) {
        if (H > F) at(L.subarray(F, H));
        return fe("detached");
      }
      if (wt && I === vo) {
        if (H > F) at(L.subarray(F, H));
        (at(Ao), (F = H + 1));
        continue;
      }
      let V = I === dn ? 1 : Pt(L, H, or) || (mt(L, H, Kt) ? Kt.length : 0);
      if (V) {
        if (H > F) at(L.subarray(F, H));
        ((H += V - 1), (F = H + 1), (ne = !0));
      }
    }
    if (F < L.length) at(L.subarray(F));
  }
  function nn() {
    let U;
    while ((U = o.read()) !== null) Vr(U);
  }
  function Dn() {
    fe("detached");
  }
  let Rt = $e,
    Mt = $e,
    kt = $e,
    ct = $e;
  function Pn(U) {
    if (!Me) return U;
    let L = kt.length > 0,
      F = L ? Buffer.concat([kt, U]) : U;
    if (L) kt = $e;
    if (st) {
      let ke = F.lastIndexOf(et),
        dt = F.lastIndexOf(Nt);
      if (ke !== dt) At = ke > dt;
    }
    let H = F.indexOf(et);
    if (H < 0) {
      let ke = St(F, et);
      if (ke === 0) return F;
      return (
        (kt = Buffer.from(F.subarray(F.length - ke))),
        F.subarray(0, F.length - ke)
      );
    }
    let I = [],
      V = 0,
      q = H;
    for (;;) {
      if (q > V) I.push(F.subarray(V, q));
      if (((V = q + et.length), (q = F.indexOf(et, V)), q < 0)) break;
    }
    let G = F.subarray(V),
      se = St(G, et);
    if (se > 0) kt = Buffer.from(G.subarray(G.length - se));
    if (G.length > se) I.push(G.subarray(0, G.length - se));
    if (I.length === 0) return $e;
    if (I.length === 1) return I[0];
    return Buffer.concat(I);
  }
  function In(U) {
    let L = ct.length > 0,
      F = L ? Buffer.concat([ct, U]) : U;
    if (L) ct = $e;
    let H = F.indexOf(Dt);
    if (H < 0) {
      let G = St(F, Dt);
      if (G === 0) return F;
      return (
        (ct = Buffer.from(F.subarray(F.length - G))),
        F.subarray(0, F.length - G)
      );
    }
    let I = [],
      V = 0,
      q = H;
    while (q >= 0) {
      let G = q + Dt.length;
      if (G >= F.length) {
        if (q > V) I.push(F.subarray(V, q));
        ((ct = Buffer.from(F.subarray(q))), (V = F.length));
        break;
      }
      let se = F[G];
      if (se === 104 || se === 108) {
        if (q > V) I.push(F.subarray(V, q));
        V = G + 1;
      }
      q = F.indexOf(Dt, Math.max(V, q + 1));
    }
    if (V < F.length) {
      let G = F.subarray(V),
        se = St(G, Dt);
      if (se > 0) ct = Buffer.from(G.subarray(G.length - se));
      if (G.length > se) I.push(G.subarray(0, G.length - se));
    }
    if (I.length === 0) return $e;
    if (I.length === 1) return I[0];
    return Buffer.concat(I);
  }
  let $n = t.alreadyInAlt && !t.holdingFrame;
  function xn(U) {
    let { out: L, meaningful: F, renders: H } = eo(U);
    if (L.length === 0) return;
    if (!H) {
      r.write(L);
      return;
    }
    if ($n) (($n = !1), r.write(ERASE_SCREEN_SEQUENCE + CURSOR_HOME_SEQUENCE));
    (r.write(L),
      re.feed(L.toString("latin1"), (I) => {
        if (I === 1004) {
          let V = _e();
          if (V) r.write(V);
        }
      }),
      Ke(F));
  }
  let Lt = $e,
    jt = !1,
    yt = !1,
    rn = !1;
  function Bn(U) {
    let L = !1,
      F = 0;
    if (rn) {
      if (((rn = !1), (yt = !1), U[0] === 92)) F = 1;
    }
    while (F < U.length) {
      if (yt) {
        let I = F;
        while (I < U.length && U[I] !== 27 && U[I] !== 24 && U[I] !== 26) I++;
        if (I >= U.length) return L;
        if (U[I] !== 27) {
          ((yt = !1), (F = I + 1));
          continue;
        }
        if (I === U.length - 1) return ((rn = !0), L);
        if (U[I + 1] === 92) {
          ((yt = !1), (F = I + 2));
          continue;
        }
        ((yt = !1), (F = I));
        continue;
      }
      let H = U.indexOf(Vn, F);
      if (H < 0) return !0;
      ((L ||= H > F), (yt = !0), (F = H + Vn.length));
    }
    return L;
  }
  function eo(U) {
    let L = Lt.length > 0 ? Buffer.concat([Lt, U]) : U;
    Lt = $e;
    let F = !1,
      H = !1,
      I = [],
      V = 0;
    for (;;) {
      let ke = L.indexOf(cn, V);
      if (ke < 0) break;
      if (ke > V) {
        let dt = L.subarray(V, ke);
        if ((I.push(dt), !jt)) F = Bn(dt) || F;
        else H = !0;
      }
      ((jt = !jt), (V = ke + cn.length));
    }
    let q = L.subarray(V),
      G = St(q, cn);
    if (G > 0)
      ((Lt = Buffer.from(q.subarray(q.length - G))),
        (q = q.subarray(0, q.length - G)));
    if (q.length > 0)
      if ((I.push(q), !jt)) F = Bn(q) || F;
      else H = !0;
    return {
      out: I.length === 0 ? $e : I.length === 1 ? I[0] : Buffer.concat(I),
      meaningful: F,
      renders: F || H,
    };
  }
  function Nn(U) {
    if (Ne) return;
    let L = ye !== void 0 && K === void 0 && (C === void 0 || N === void 0),
      F = extractInteractiveMarks(te, U, { requireNonce: ye });
    te = F.carry;
    let H = F.cleaned;
    if (L)
      for (let G of F.marks) {
        let se = performance.now() - O;
        if (G.kind === "content_paint" && C === void 0)
          ((C = se),
            (T = G.msgsLoaded),
            (D = G.msgsInJsonl),
            (J = G.msgsRenderedAtFirstPaint));
        else if (G.kind === "prompt_idle" && N === void 0) N = se;
        if (C !== void 0 && N !== void 0) {
          clearTimeout(be);
          let ke = Math.round(Math.max(C, N));
          if (t.telemetry?.interactive !== void 0)
            t.telemetry.interactive.reached = {
              attachMs: ke,
              contentPaintMs: C,
              promptIdleMs: N,
              msgsLoaded: T,
              msgsInJsonl: D,
              msgsRenderedAtFirstPaint: J,
            };
          if (t.telemetry?.gestureId !== void 0)
            ut(
              t.telemetry.gestureId,
              {
                interactiveReached: !0,
                attachMs: ke,
                msgsLoaded: T,
                msgsInJsonl: D,
                msgsRenderedAtFirstPaint: J,
              },
              t.telemetry.storageV5,
            );
        }
      }
    let I = Mt.length > 0 ? Buffer.concat([Mt, H]) : H,
      V = I.indexOf(Qn);
    if (V >= 0) {
      let G = I.subarray(0, V);
      if (V > 0) {
        let ke = In(Pn(G));
        if (ke.length > 0) xn(ke);
      }
      ((Mt = $e), (kt = $e), (ct = $e));
      let se = parseDetachMsg(G);
      return fe("detached", se, { viaApc: !0, failureClass: Eo(se) });
    }
    let q = St(I, Qn);
    if (I.length > q) {
      let G = I.subarray(0, I.length - q),
        se = In(Pn(G));
      if (se.length > 0) xn(se);
    }
    if (((Mt = q > 0 ? Buffer.from(I.subarray(I.length - q)) : $e), st))
      (clearTimeout(X),
        (X = setTimeout(() => {
          if (!Ne && At) r.write(SHOW_CURSOR);
        }, Oo)));
  }
  return (
    ue.on("data", (U) => {
      if (Ne) return;
      if (Le) {
        (clearTimeout(qe), Nn(U));
        return;
      }
      Rt = Buffer.concat([Rt, U]);
      let L = Rt.indexOf(10);
      if (L < 0) return;
      let F = Rt.subarray(0, L).toString("utf8"),
        H = Rt.subarray(L + 1),
        I;
      try {
        I = jsonParse(F);
      } catch (se) {
        return fe("error", `bad ack: ${l(se)}`, { failureClass: "bad_ack" });
      }
      if (typeof I !== "object" || I === null)
        return fe("error", "bad ack: non-object ack line", {
          failureClass: "bad_ack",
        });
      if (!I.ok)
        return fe("error", `${I.code}: ${I.error}`, {
          failureClass: So(I.code),
        });
      if (((Le = !0), ue.setTimeout(0), !t.holdingFrame && H.length === 0))
        qe = setTimeout(Zr, yo);
      if (
        ((je = Date.now() - E),
        (de = I.op === "attach" ? parseAttachVia(I.via) : void 0),
        (Re =
          I.op === "attach" && typeof I.booting === "boolean"
            ? I.booting
            : void 0),
        (ye =
          I.op === "attach" && typeof I.imarkNonce === "string"
            ? I.imarkNonce
            : void 0),
        t.telemetry?.gestureId !== void 0)
      )
        ut(
          t.telemetry.gestureId,
          {
            marksExpected: ye !== void 0,
            daemonBooted:
              typeof t.telemetry.daemonBooted === "boolean"
                ? t.telemetry.daemonBooted
                : void 0,
            attachCold: de !== void 0 ? de === "cold" && (Re ?? !0) : void 0,
            via: de,
          },
          t.telemetry.storageV5,
        );
      if (t.telemetry?.interactive !== void 0) {
        if (
          ((t.telemetry.interactive.marksExpected =
            t.telemetry.interactive.marksExpected === !0 || ye !== void 0),
          de !== void 0 && t.telemetry.interactive.reached === void 0)
        )
          ((t.telemetry.interactive.attachCold = de === "cold" && (Re ?? !0)),
            (t.telemetry.interactive.via = de));
      }
      if (
        ((De = I.op === "attach" ? I.tempo : void 0),
        (ge = I.op === "attach" ? I.state : void 0),
        (He = I.op === "attach" ? I.stale : void 0),
        (Ue = I.op === "attach" ? I.workerCliVersion : void 0),
        (ze = I.op === "attach" ? I.cached : void 0),
        a.TMUX && !getBackgroundSupervisorState().tmuxRgbApplied)
      )
        ((getBackgroundSupervisorState().tmuxRgbApplied = !0),
          execFileNoThrow("tmux", ["set", "-as", "terminal-features", ",*:RGB"]));
      let q = ((I.op === "attach" ? I.decModes : void 0) ?? [])
        .map(enableTerminalMode)
        .join("");
      if ((re.feed(q), "ref" in o)) o.ref();
      trySetRawMode(o, !0);
      let G =
        Ue !==
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
        }.VERSION;
      if (
        (r.write(
          t.alreadyInAlt
            ? HIDE_CURSOR + G0e({ legacyKitty: G }) + q
            : Nat({ legacyKitty: G }) +
                q +
                (Me ? HIDE_CURSOR : "") +
                `
  \x1B[2mAttaching\u2026\x1B[0m
`,
        ),
        "on" in r)
      )
        r.on("resize", tn);
      if (
        ("columns" in r && (r.columns || s) !== s) ||
        ("rows" in r && (r.rows || c) !== c)
      )
        tn();
      if ((o.on("readable", nn), "resume" in o && "pause" in o))
        (o.resume(), o.pause());
      if ((o.once("end", Dn), nn(), H.length)) Nn(H);
    }),
    ue.on("error", (U) =>
      fe("error", redactDaemonNonce(l(U)), { failureClass: "socket_error" }),
    ),
    ue.once("close", () => {
      if (!Ne)
        fe(Le ? "disconnected" : "error", "control socket closed", {
          failureClass: "socket_closed",
        });
    }),
    ue.once("connect", () => {
      ue.write(
        jsonStringify({
          proto: BG_PROTO,
          op: "attach",
          short: e,
          auth: v,
          cols: s,
          rows: c,
          attachId: p,
          caps: $o(),
          ...(t.holdingFrame && { holdingFrame: !0 }),
        }) +
          `
`,
      );
    }),
    Ae
  );
}
function $o() {
  return {
    imark: !0,
    terminal: a.terminal,
    mux: a.TMUX
      ? "tmux"
      : process.env.ZELLIJ != null
        ? "zellij"
        : a.STY
          ? "screen"
          : null,
    ssh: a.isSSH(),
    wheelFlood: Itn(),
    hyperlinks: Tf(),
    progressReporting: Jye(),
    wtSession: !!a.WT_SESSION,
    isVscodeTerm: a.TERM_PROGRAM === "vscode",
    browser: a.BROWSER ?? null,
    colorLevel: chalk.level,
    syncOutput: nBn(),
    editor: a.VISUAL || a.EDITOR || null,
    systemTheme: getSystemTheme(),
    ...(a.TMUX && { tmuxSocket: beforeFirst(a.TMUX, ",") }),
  };
}
var xo = 7,
  Bo = 60,
  No = 80,
  lr = 1000,
  Mo = 1e6;
async function qt(e) {
  let [t, o] = await Promise.all([
    ln(e, [
      "log",
      "--no-show-signature",
      `--max-count=${lr}`,
      "--format=%H%x00%s",
      "HEAD",
      "--not",
      "--remotes",
    ]),
    ln(e, ["symbolic-ref", "-q", "--short", "HEAD"]),
  ]);
  if (t.code !== 0) return;
  let r = t.stdout
      .split(
        `
`,
      )
      .map((c) => c.split("\x00"))
      .filter((c) => c.length === 2 && c[0] !== ""),
    s = r[0];
  if (s === void 0 || !isValidGitSha(s[0])) return;
  return {
    branch: o.code === 0 ? truncateToWidth(stripAnsiAndControlChars(o.stdout).trim(), No) || null : null,
    count: r.length,
    headSha: s[0],
    shortSha: s[0].slice(0, xo),
    subject: truncateToWidth(stripAnsiAndControlChars(s[1]).trim(), Bo),
  };
}
function formatUnpushedCommitsSummary(e) {
  return `${e.count}${ur(e)} unpushed ${pluralize(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}
function formatUnpushedCommitsDetail(e) {
  let t = e.count > 1 ? `, \u2026 and ${e.count - 1}${ur(e)} more` : "";
  return `${formatUnpushedCommitsSummary(e)} (${e.shortSha} ${e.subject}${t})`;
}
async function un(e, t) {
  if (!isValidGitSha(t)) return !1;
  let o = await ln(e, ["rev-parse", "HEAD"]);
  return o.code === 0 && o.stdout.trim() === t;
}
async function ln(e, t) {
  return execFileNoThrowWithCwd(gitExe(), [...GIT_HARDENED_ARGS, ...t], { cwd: e, env: sanitizeGitEnv(), maxBuffer: Mo });
}
function ur(e) {
  return e.count >= lr ? "+" : "";
}
import { randomUUID as Bt } from "crypto";
import {
  access,
  readdir as xi,
  rm as Qt,
  stat as Bi,
  writeFile as Ni,
} from "fs/promises";
import { join as En } from "path";
import { randomUUID as vr } from "crypto";
import {
  lstat as ri,
  mkdir as oi,
  readdir as Xt,
  rm as bn,
  writeFile as ii,
} from "fs/promises";
import { createInterface } from "readline";
var jo = () =>
  process.stderr.write(`Starting ${bgSupervisorNoun()}\u2026
`);
async function Et(e, t) {
  let o = () => {
      (e?.onStarting?.(), jo());
    },
    r = await ensureDaemonRunning({ onStarting: o, spawnIntent: !0 }, t);
  if (r.ok || !r.askInstall) return r;
  if (!process.stdin.isTTY || !process.stderr.isTTY || a.isCI) return r;
  process.stderr.write(`No background daemon is running.
Installing it as a service keeps the background daemon running across reboot so 'claude agents' stays available.
`);
  let s = await Uo(
    "Install as a service now? [y/N/never, or 'once' just for now] ",
  );
  switch (
    (logEvent("tengu_bg_daemon_cold_start_ask_answer", {
      answer_yes: s === "yes",
      answer_once: s === "once",
      answer_never: s === "never",
    }),
    s)
  ) {
    case "yes": {
      let c = await getLauncherErrorMessage();
      if (c)
        return (
          logFeatureBad("daemon_service_install", "daemon_service_install_launcher"),
          process.stderr.write(`Service not installed: ${c}
`),
          { ok: !1, reason: c, causeCode: "wrapper" }
        );
      let d = await stopDaemonLockHolder(t);
      if (
        d.kind === "foreground" ||
        d.kind === "not-stopped" ||
        d.kind === "unknown-origin"
      ) {
        if (d.kind === "not-stopped" && d.outcome === "unverified")
          logFeatureBad(
            "daemon_service_install",
            "daemon_service_install_holder_unverified",
          );
        else
          logFeatureSad(
            "daemon_service_install",
            d.kind === "foreground"
              ? "daemon_service_install_foreground"
              : d.kind === "not-stopped"
                ? "daemon_service_install_holder_alive"
                : "daemon_service_install_holder_unknown_origin",
          );
        let v =
          d.kind === "foreground"
            ? `Not installing the background service: a foreground daemon (pid ${d.lock.pid}, started with \`claude daemon run\`) holds the daemon lock and will serve this session. Stop it (Ctrl-C in its terminal or 'claude daemon stop') and re-run to install.`
            : d.kind === "not-stopped"
              ? Ho(d)
              : `Not installing the background service: ${describeUnknownOriginLock(d.lock.pid)}; it will serve this session. Stop it ('claude daemon stop') and re-run to install.`;
        return (
          process.stderr.write(`${v}
`),
          ensureDaemonRunning({ forceTransient: !0, onStarting: o, spawnIntent: !0 }, t)
        );
      }
      let _ = await installDaemonService({ jsonPath: getDaemonJsonPath(), logPath: getDaemonLogPath() });
      if (!_.ok)
        return (
          process.stderr
            .write(`Service install failed (${_.error}). Falling back to a transient ${bgSupervisorNoun()} for now.
`),
          ensureDaemonRunning({ forceTransient: !0, onStarting: o, spawnIntent: !0 }, t)
        );
      if (
        (process.stderr.write(`Installed: ${_.servicePath}
Run 'claude daemon uninstall' to undo.
`),
        o(),
        !(await waitForDaemonReady(DAEMON_START_TIMEOUT_MS)))
      )
        return {
          ok: !1,
          causeCode: "timeout",
          reason: `service installed but the daemon ${H_e} ${DAEMON_START_TIMEOUT_MS / 1000}s \u2014 check 'claude daemon status'`,
        };
      let p = await getVerifiedDaemonLock(1, t).catch(() => null);
      if (p && p.origin !== "service")
        process.stderr
          .write(`note: the installed service has not come up yet \u2014 a temporary background daemon (pid ${p.pid}) is serving this session; check 'claude daemon status'.
`);
      return { ok: !0 };
    }
    case "once":
      return ensureDaemonRunning({ forceTransient: !0, onStarting: o, spawnIntent: !0 }, t);
    case "never":
      return (
        await saveGlobalConfig(
          (c) =>
            c.daemonInstallPromptDismissed
              ? c
              : { ...c, daemonInstallPromptDismissed: !0 },
          t,
        ),
        ensureDaemonRunning({ forceTransient: !0, onStarting: o, spawnIntent: !0 }, t)
      );
    case "no":
      return r;
  }
}
async function Uo(e) {
  let t = createInterface({ input: process.stdin, output: process.stderr });
  try {
    let r = (
      await new Promise((s) => {
        (t.once("close", () => s("n")), t.question(e, s));
      })
    )
      .trim()
      .toLowerCase();
    if (r === "y" || r === "yes") return "yes";
    if (r === "once" || r === "o") return "once";
    if (r === "never") return "never";
    return "no";
  } finally {
    t.close();
  }
}
function Ho(e) {
  switch (e.outcome) {
    case "eperm":
      return `Not installing the background service: ${describeStopFailure(e)}; it will keep serving this session. Stop it from the account that owns it, then re-run to install.`;
    case "unverified":
      return `Not installing the background service: ${describeStopFailure(e)}, and no daemon could be reached. If no daemon is running, delete ${getDaemonLockPath()}; if pid ${e.pid} is a live process you own, stop it yourself \u2014 then re-run to install.`;
    case "timed-out":
      return `Not installing the background service: ${describeStopFailure(e)} \u2014 connecting to whichever daemon is available. If this repeats, kill pid ${e.pid} (or run 'claude daemon stop' again), then re-run to install.`;
  }
}
class fr {
  #e = new Map();
  get(e) {
    return this.#e.get(e);
  }
  track(e, t) {
    if (this.#e.has(e)) return;
    (this.#e.set(e, t),
      t.then(() => {
        if (this.#e.get(e) === t) this.#e.delete(e);
      }));
  }
}
var Wo = new j(() => new fr());
function mr() {
  return Wo.of(B().host);
}
function trackJobPromise(e, t) {
  return (
    mr().track(
      e,
      t.then(
        (o) =>
          o.ok ? { ok: !0 } : { ok: !1, error: o.error, alive: !!o.alive },
        (o) => ({ ok: !1, error: l(o), alive: !1 }),
      ),
    ),
    t
  );
}
function pr(e) {
  return mr().get(e);
}
var Go = {
    is: { op: "eq", list: !1 },
    is_not: { op: "not_in", list: !1 },
    one_of: { op: "in", list: !0 },
    none_of: { op: "not_in", list: !0 },
    starts_with: { op: "starts_with", list: !1 },
    contains: { op: "contains", list: !1 },
    matches: { op: "matches", list: !1 },
    glob: { op: "glob", list: !1 },
    eq: { op: "eq", list: !1 },
    in: { op: "in", list: !0 },
    not_in: { op: "not_in", list: !0 },
  },
  qa = Object.keys(Go);
function Jo(e) {
  switch (e.type) {
    case "cron":
      return `cron(${e.expression})`;
    case "event": {
      let t = e.filter.find((o) => o.field === "channel")?.values[0];
      return t ? `${e.event}#${t}` : e.event;
    }
  }
}
function gr(e) {
  return e.map(Jo).join(", ");
}
import { randomBytes } from "crypto";
import { mkdir as qo, unlink as Yo } from "fs/promises";
import { join as zo } from "path";
async function pn(e, t = !1, o = Date.now(), r) {
  let s = getBackgroundSupervisorState(),
    c = s.daemonConfirmedUp && getLauncherCommandString() === "" && getLauncherConfigError() === null;
  if (!c) {
    s.ensureInFlight ??= (
      e.source === "shell"
        ? Et(void 0, r)
        : ensureDaemonRunning({ forceTransient: !0, spawnIntent: !0 }, r)
    ).finally(() => {
      s.ensureInFlight = null;
    });
    let _ = await s.ensureInFlight;
    if (!_.ok)
      return (
        Yt("daemon-unreachable", _.reason, e.source, o),
        { ok: !1, reason: "daemon-unreachable", detail: _.reason }
      );
  }
  let d = openDaemonLease("cli-bg-dispatch");
  try {
    let _ = getDispatchDir(),
      p = zo(_, `${e.short}.json`),
      v = STORAGE_KEYS.daemon(["dispatch", `${e.short}.json`]),
      E = "ack-timeout",
      k = "no ack",
      w = randomBytes(4).toString("hex");
    for (let O = 0; O < 3; O++) {
      if (c) {
        let T = await controlRequest(
          {
            proto: BG_PROTO,
            op: "dispatch",
            d: { ...e, nonce: w },
            timeoutMs: 5000,
            auth: await readControlKey(),
          },
          { timeoutMs: 6000 },
        );
        if (T.ok && T.op === "dispatch")
          return hr(e, T.pid, T.messagingSock, o, T.via);
        if ("code" in T && T.code === "EALIVE")
          return (
            Yt("short-alive", T.error, e.source, o),
            { ok: !1, reason: "short-alive", detail: T.error, nonce: w }
          );
        if ("code" in T && T.code === "ECWDGONE")
          return _r(T.error, e.source, o, w);
        if ("code" in T && T.code === "ESTALE") {
          if (((E = "stale-short"), (k = T.error), O < 2)) {
            logForDebugging(
              `bg: stale handle for ${e.short}, retrying dispatch (${O + 1}/2)`,
            );
            continue;
          }
          break;
        }
        logForDebugging(
          `bg: socket dispatch fell through (${"code" in T ? T.code : "?"}), using file path`,
        );
      }
      try {
        let T = jsonStringify({ ...e, nonce: w });
        if (isHoverRestEnabled() && r !== void 0) {
          let D = await r.write(v, T, { mode: 384 });
          if (!D.ok) {
            ((E = "dispatch-write"), (k = Xo(D.error)));
            break;
          }
        } else
          await writeFileAtomic(p, T, 384).catch(async (D) => {
            if (!W(D)) throw D;
            (await qo(_, { recursive: !0, mode: 448 }), await writeFileAtomic(p, T, 384));
          });
      } catch (T) {
        ((E = "dispatch-write"), (k = l(T)));
        break;
      }
      let C = await controlRequest(
        {
          proto: BG_PROTO,
          op: "await-ack",
          short: e.short,
          nonce: w,
          timeoutMs: 5000,
        },
        { timeoutMs: 6000 },
      );
      for (let T = 0; !C.ok && C.code === "ESTARTING" && T < 40; T++)
        (await sleep(200),
          (C = await controlRequest(
            {
              proto: BG_PROTO,
              op: "await-ack",
              short: e.short,
              nonce: w,
              timeoutMs: 5000,
            },
            { timeoutMs: 6000 },
          )));
      if (C.ok && C.op === "await-ack")
        return hr(e, C.pid, C.messagingSock, o, C.via);
      if (isHoverRestEnabled() && r !== void 0) await r.delete(v).catch(() => {});
      else await Yo(p).catch(() => {});
      let N = "code" in C ? C.code : void 0;
      if (N === "ECWDGONE" && "error" in C) return _r(C.error, e.source, o, w);
      if (N === "EALIVE") E = "short-alive";
      else if (N === "ESTALE") E = "stale-short";
      else if (N === "ENOCONN") E = "enoconn";
      else if (N === "ESTARTING") E = "estarting";
      else E = "ack-timeout";
      if (
        ((k = N
          ? `${N}: ${"error" in C ? C.error : "no ack"}`
          : "error" in C
            ? C.error
            : "no ack"),
        O === 2 || (E !== "stale-short" && E !== "ack-timeout"))
      )
        break;
      logForDebugging(`bg: ${E} for ${e.short}, retrying dispatch (${O + 1}/2)`);
    }
    if (!t && (E === "enoconn" || E === "estarting"))
      return ((s.daemonConfirmedUp = !1), await pn(e, !0, o, r));
    return (
      Yt(E, k, e.source, o),
      logForDebugging(`bg: daemon dispatch fallback (${E}): ${k}`, { level: "warn" }),
      { ok: !1, reason: E, detail: k, nonce: w }
    );
  } finally {
    d();
  }
}
function hr(e, t, o, r, s) {
  return (
    (getBackgroundSupervisorState().daemonConfirmedUp = !0),
    logEvent("tengu_bg_dispatch", {
      backend_daemon: !0,
      source_shell: e.source === "shell",
      source_slash: e.source === "slash",
      source_fleet: e.source === "fleet",
      source_spare: e.source === "spare",
      source_respawn: e.source === "respawn",
      has_worktree: e.worktree !== void 0,
      has_agent: e.agent !== void 0,
      ms: Date.now() - r,
      via: fromEnumOpt(parseAttachVia(s)),
    }),
    { ok: !0, pid: t, messagingSock: o }
  );
}
function _r(e, t, o, r) {
  return (
    Yt("cwd-gone", "ECWDGONE", t, o),
    logForDebugging(`bg: daemon refused dispatch (cwd-gone): ${e}`, { level: "warn" }),
    { ok: !1, reason: "cwd-gone", detail: e, nonce: r }
  );
}
function Yt(e, t, o, r) {
  let s = getCurrentPlatform(),
    c = WHt(t),
    d = t.includes(I_e) || t.includes(" ran but Claude Code never started"),
    _ = /\((exit code \d+|signal SIG[A-Z]+)/.exec(t)?.[1],
    p =
      c.length > 0
        ? c.join(",")
        : d
          ? `<daemon-stderr>${_ ? ` ${_}` : ""}`
          : /[\\/]/.test(t)
            ? "<path-bearing>"
            : t.slice(0, 80);
  logEvent("tengu_bg_dispatch_fallback", {
    ms: Date.now() - r,
    reason_unreachable: e === "daemon-unreachable",
    reason_ack_timeout: e === "ack-timeout",
    reason_write: e === "dispatch-write",
    reason_enoconn: e === "enoconn",
    reason_estarting: e === "estarting",
    reason_stale_short: e === "stale-short",
    reason_short_alive: e === "short-alive",
    reason_cwd_gone: e === "cwd-gone",
    platform_darwin: s === "macos",
    platform_linux: s === "linux",
    platform_windows: s === "windows",
    source_spare: o === "spare",
    source_respawn: o === "respawn",
    detail: p,
  });
}
function Xo(e) {
  if ("cause" in e && e.cause !== void 0) return l(e.cause);
  if ("telemetryCode" in e && e.telemetryCode !== void 0)
    return e.telemetryCode;
  return e.code;
}
var Zo = new Set("ABCDEFGHJKLMPSTXZ@`adefm"),
  Qo = new Set([0, 1, 2]),
  Vo = new Set("78DEM"),
  ei = new Set(["1049", "1047", "47"]),
  ti =
    /\x1b\[(?<params>[<-?]?[0-;]*)(?<intermediates>[ -/]*)(?<final>[@-~])|\x1b[\]PX^_][^\x07\x18\x1a\x1b\x9c]*(?:\x07|\x1b\\|\x9c)?|\x1b(?:\[[0-?]*[ -/]*|[ -/]*)$|\x1b(?<esc>[ -/]*[0-~])|\x1b|[\x00-\x07\x0e-\x1a\x1c-\x1f\x7f-\x9f]/g;
function ni(e, t) {
  if (!Zo.has(t)) return !1;
  if (t !== "J" && t !== "T") return !0;
  let o = e.split(";").map((r) => (/^\d*$/.test(r) ? Number(r) : Number.NaN));
  return t === "J"
    ? o.every((r) => Qo.has(r))
    : o.length === 1 && !Number.isNaN(o[0]);
}
function wr(e) {
  let t = !1,
    o = "",
    r = 0;
  for (let s of e.matchAll(ti)) {
    ((o += e.slice(r, s.index)), (r = s.index + s[0].length));
    let { params: c = "", intermediates: d, final: _, esc: p } = s.groups ?? {};
    if (_ !== void 0) {
      let v = c[0],
        E = v === "?" || v === ">" || v === "<" || v === "=";
      if (v === "?" && _ === "h") {
        for (let k of c.slice(1).split(";")) if (ei.has(k)) t = !0;
      } else if (!E && !d && ni(c, _)) {
        if (_ === "H" || _ === "f") t = !0;
        o += s[0];
      }
    } else if (p !== void 0 && p.length === 1 && Vo.has(p)) o += s[0];
  }
  return { replay: o + e.slice(r), cursorAddressed: t };
}
var ai = ["--bg", "--background"];
function ci(e) {
  return (
    setupGitBashShellEnv(),
    a.SHELL
      ? { cmd: a.SHELL, args: ["-c", e] }
      : getCurrentPlatform() === "windows"
        ? { cmd: a.COMSPEC || "cmd.exe", args: ["/d", "/s", "/c", e] }
        : { cmd: "/bin/sh", args: ["-c", e] }
  );
}
async function preSeedReplBgJob(e, t, o) {
  let r = e.slice(0, 8),
    s = getJobDir(r);
  await ensureJobTmpDir(r, o);
  let c = t.intent ?? "",
    d = makeInitialState({
      template: { name: "bg", description: "" },
      intent: c,
      name: t.name,
      nameSource: t.nameSource,
      color: t.color,
      detail: t.detail ?? IDLE_DETAIL,
      tempo: "blocked",
      needs: IDLE_NEEDS,
      sessionId: e,
      cwd: t.cwd,
      worktreePath: t.worktree?.path,
      worktreeBranch: t.worktree?.branch,
      worktreeHookBased: t.worktree?.hookBased,
      originCwd: t.worktree?.originCwd,
      bgIsolation: "none",
      interactiveLineage: !0,
      providerEnv: callerProviderEnv(),
      sessionPermissionRules: t.sessionPermissionRules,
      memoryToggledOff: t.memoryToggledOff,
      linkScanPath: t.linkScanPath,
      inFlight: t.inFlight,
      respawnFlags: t.respawnFlags,
    });
  if ((await writeStateAtomic(s, d, o), a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST))
    if (isHoverRestEnabled() && o !== void 0 && isValidPathSegment(r)) (await ensureHostManagedScope(o), await writeHostManagedMarker(o, r));
    else (await oi(getHostManagedDir(), { recursive: !0, mode: 448 }), await ii(getHostManagedMarkerPath(r), ""));
  return { short: r, jobDir: s, state: d };
}
async function spawnBgSession(e, t, o = "shell", r, s, c, d, _) {
  let p = Or(e);
  if (p) return { ok: !1, error: p, reason: "gate_blocked" };
  let v = t ?? vr(),
    E = d ?? v.slice(0, 8),
    k = getJobDir(E);
  return trackJobPromise(
    E,
    (async () => {
      try {
        return (
          await ensureJobTmpDir(E, _),
          await di(
            e,
            o,
            r,
            s,
            c,
            { sessionId: v, short: E, jobDir: k, freshDir: t === void 0 },
            _,
          )
        );
      } catch (w) {
        if (o !== "fleet" && o !== "spare")
          if (_) await Dr(_, E);
          else await bn(k, { recursive: !0, force: !0 }).catch(() => {});
        return {
          ok: !1,
          error: `Couldn't start the session \u2014 ${l(w)}`,
          reason: `spawn_failed_${Jr(w) ?? Gw(w) ?? "unknown"}`,
        };
      }
    })(),
  );
}
async function di(e, t, o, r, s, c, d) {
  let { sessionId: _, short: p, jobDir: v, freshDir: E } = c,
    k = _t(e),
    w = k >= 0 ? e.slice(0, k) : e,
    O = xt(w, "--agent"),
    C = void 0,
    N = xt(w, "--name", "-n"),
    T = N ?? r?.name,
    D = Sn(w),
    J = k >= 0 ? e.slice(k + 1).join(" ") : Pi(e, D),
    te = Se(w),
    K = Pr(w),
    ce = Ir(w, "--fork-session"),
    pe = stripResumeFlags(w),
    be =
      r?.bgIsolation === "default"
        ? void 0
        : t === "repl"
          ? "none"
          : r?.bgIsolation,
    ve = r?.providerEnv ?? callerProviderEnv(),
    je = r?.sessionPermissionRules,
    de = r?.memoryToggledOff,
    Re = r?.forkSourceAlive,
    De = r?.forkBoundaryAt,
    ge = r?.forkSessionId,
    He = r?.forkParentSessionId,
    Ue = sanitizeRespawnFlags(k >= 0 ? pe : Ii(pe));
  if (t === "shell") {
    let me = o ?? getCwd(),
      re = normalizeCliArgPaths(pe),
      _e = [
        ...pe.filter((wt, bt) => re[bt] !== wt),
        ...(BL(me) ? [me] : []),
        ...(r?.exec && BL(r.exec) ? [r.exec] : []),
        ...(D !== void 0 && BL(D) ? [D] : []),
      ];
    if (_e.length > 0)
      process.stderr
        .write(`warning: background sessions do not support Windows network (UNC) paths; the following will be neutralized: ${_e.join(", ")}
`);
  }
  let ze = D !== void 0 && D === _,
    ye = K && !ce ? ["--fork-session"] : [],
    Pe = ze ? [] : ["--session-id", _, ...ye];
  if (
    t === "shell" &&
    w.some(
      (me, re) =>
        !te.has(re) &&
        (me === "--session-id" || me.startsWith("--session-id=")),
    )
  )
    process.stderr
      .write(`warning: --bg manages the session id; ignoring --session-id (use --resume <id> to continue an existing session)
`);
  let Oe = O ? findAgentByType((await getAgentDefinitionsWithOverrides(o ?? getCwd(), d)).activeAgents, O) : void 0;
  if (O && !Oe && t === "shell")
    process.stderr
      .write(`warning: no agent named '${O}' \u2014 spawning with default template
`);
  let Ke = void 0,
    it = r?.intent ?? J ?? "",
    Ae =
      !Oe?.initialPrompt &&
      !r?.exec &&
      !J &&
      !w.some((me, re) => !te.has(re) && me === "--reply-on-resume"),
    Ne = !1,
    Le;
  if (t !== "fleet" && t !== "spare") {
    let me = E ? null : await readJobState(v, d);
    if (me === null)
      Le = writeStateAtomic(
        v,
        makeInitialState({
          template: {
            name: r?.exec ? "exec" : (O ?? void 0 ?? "bg"),
            description: Oe?.whenToUse ?? Ke?.description ?? "",
            initialPrompt: Oe?.initialPrompt,
            color: Oe?.color,
          },
          routine: void 0,
          respawnFlags: Ue,
          intent: it,
          name: T,
          nameSource: N
            ? N === r?.name && r.nameSource
              ? r.nameSource
              : "user"
            : r?.nameSource,
          color: r?.color,
          detail:
            r?.detail ??
            (Ae
              ? Ke
                ? `(idle \u2014 waiting for ${gr(Ke.triggers)})`
                : IDLE_DETAIL
              : void 0),
          tempo: Ae ? (Ke ? "idle" : "blocked") : void 0,
          needs: Ae && !Ke ? IDLE_NEEDS : void 0,
          sessionId: _,
          cwd: o ?? getCwd(),
          worktreePath: r?.worktree?.path,
          worktreeBranch: r?.worktree?.branch,
          worktreeHookBased: r?.worktree?.hookBased,
          originCwd: r?.worktree?.originCwd,
          bgIsolation: be,
          interactiveLineage: t === "repl" ? !0 : void 0,
          inFlight: r?.inFlight,
          providerEnv: ve,
          sessionPermissionRules: je,
          memoryToggledOff: de,
          forkSourceAlive: Re,
          forkBoundaryAt: De,
          forkSessionId: r?.forkSessionId,
          forkParentSessionId: He,
        }),
        d,
      )
        .then(() => {
          Ne = !0;
        })
        .catch((re) =>
          logForDebugging(`bg seed state write failed: ${l(re)}`, { level: "warn" }),
        );
    else if (Ue.length > 0 && me.respawnFlags.length === 0)
      Le = writeStateAtomic(v, { ...me, respawnFlags: Ue }, d).catch((re) =>
        logForDebugging(`bg respawnFlags patch failed: ${l(re)}`, { level: "warn" }),
      );
  }
  let qe = {
      proto: BG_PROTO,
      short: p,
      sessionId: _,
      createdAt: Date.now(),
      source: t === "repl" ? "slash" : t,
      cwd: o ?? getCwd(),
      launch: r?.exec
        ? { mode: "exec", ...ci(r.exec) }
        : K && D !== void 0
          ? {
              mode: "resume",
              sessionId: D,
              transcriptPath: r?.resumeTranscriptPath,
              restoresTranscript:
                Xn(D) !== null || isTranscriptFileResumeArg(D) || r?.resumeTranscriptPath !== void 0,
              fork: !ze && (ce || ye.length > 0),
              flagArgs: [...pe, ...(k >= 0 ? e.slice(k) : [])],
            }
          : {
              mode: "prompt",
              args: [...Pe, ...Di(e)],
              restoresTranscript: Ci(e),
            },
      respawnFlags: pe,
      env: {
        ...ve,
        ...(Ie(ve.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) &&
          a.CLAUDE_CODE_HOST_CREDS_FILE && {
            CLAUDE_CODE_HOST_CREDS_FILE: a.CLAUDE_CODE_HOST_CREDS_FILE,
          }),
        ...(a.CLAUDE_CODE_EXTRA_BODY && {
          CLAUDE_CODE_EXTRA_BODY: a.CLAUDE_CODE_EXTRA_BODY,
        }),
        ...{},
        ...(a.PATH && { PATH: a.PATH }),
        ...(!r?.exec &&
          (t === "repl" || (!r?.providerEnv && !o) || o === getCwd()) &&
          Oi(ve)),
        ...(be && { CLAUDE_BG_ISOLATION: be }),
        ...(je && { CLAUDE_BG_SESSION_PERMISSION_RULES: JSON.stringify(je) }),
        ...(de && { CLAUDE_BG_MEMORY_TOGGLED_OFF: "1" }),
        ...(Re && {
          CLAUDE_CODE_RESUME_SOURCE_ALIVE: ge
            ? formatForkSourceKey(ge, De || "1", He)
            : De || "1",
        }),
      },
      reattachEnv: { ...s, ...(!r?.exec && buildBgDispatcherEnvVars(ownStoredLoginPlanAttributes())) },
      worktree: r?.worktree
        ? { path: r.worktree.path, ownershipToken: _ }
        : void 0,
      isolation:
        Oe?.isolation === "worktree" && Oe.source !== "built-in"
          ? "worktree"
          : "none",
      agent: O,
      routine: void 0,
      seed: { intent: it, name: T },
      cols: process.stdout.columns || void 0,
      rows: process.stdout.rows || void 0,
    },
    [, ne] = await Promise.all([
      Le ?? Promise.resolve(),
      pn(qe, !1, Date.now(), d),
    ]);
  if (ne.ok) return { ok: !0, short: p, sessionId: _, idle: Ae, name: T };
  let Ye = ne.reason === "cwd-gone" ? ne.detail : void 0;
  if (
    ne.reason === "ack-timeout" ||
    ne.reason === "enoconn" ||
    ne.reason === "estarting"
  ) {
    let me = await controlRequest({ proto: BG_PROTO, op: "list" });
    if (
      me.ok &&
      me.op === "list" &&
      me.jobs.some(
        (re) => re.short === p && re.nonce === ne.nonce && !re.outcome,
      )
    )
      return (
        logForDebugging(`bg: daemon dispatch ${ne.reason} but worker is live`, {
          level: "warn",
        }),
        await logEventAsync("tengu_bg_dispatch_rescued", {
          reason_ack_timeout: ne.reason === "ack-timeout",
          reason_enoconn: ne.reason === "enoconn",
          reason_estarting: ne.reason === "estarting",
        }),
        { ok: !0, short: p, sessionId: _, idle: Ae, name: T, rescued: !0 }
      );
    if (
      ne.reason === "ack-timeout" &&
      me.ok &&
      me.op === "list" &&
      !me.jobs.some((re) => re.short === p)
    ) {
      let re = await controlRequest(
        {
          proto: BG_PROTO,
          op: "dispatch",
          d: { ...qe, nonce: ne.nonce },
          timeoutMs: 5000,
          auth: await readControlKey(),
        },
        { timeoutMs: 6000 },
      );
      if (re.ok && re.op === "dispatch")
        return (
          logForDebugging(`bg: ack-timeout recovered via redispatch (${p})`, {
            level: "warn",
          }),
          await logEventAsync("tengu_bg_dispatch_rescued", {
            reason_ack_timeout: !0,
            reason_enoconn: !1,
            reason_estarting: !1,
            via_redispatch: !0,
          }),
          { ok: !0, short: p, sessionId: _, idle: Ae, name: T, rescued: !0 }
        );
      if (!re.ok && "code" in re && re.code === "ECWDGONE") Ye = re.error;
    }
  }
  if (Ne)
    if (d) await Dr(d, p);
    else await bn(v, { recursive: !0, force: !0 }).catch(() => {});
  if (ne.reason === "short-alive")
    return {
      ok: !1,
      alive: !0,
      short: p,
      error: `Session ${p} is already running \u2014 \`claude attach ${p}\` to join it`,
      reason: "short_alive",
    };
  if (ne.reason === "stale-short")
    return {
      ok: !1,
      error:
        "Previous session is still shutting down \u2014 try again in a moment",
      reason: "stale_short",
    };
  if (ne.reason === "cwd-gone" || Ye !== void 0)
    return {
      ok: !1,
      error: `Couldn't start a background session (${Ye ?? ne.detail})`,
      reason: "cwd_gone",
    };
  let Ve =
    ne.reason === "daemon-unreachable" && ne.detail ? ne.detail : wi(ne.reason);
  return {
    ok: !1,
    error: `Couldn't reach the ${bgSupervisorNoun()} (${Ve})${daemonHint("status")}`,
    reason:
      ne.reason === "daemon-unreachable"
        ? `daemon_unavailable_${_i(ne.detail)}`
        : ne.reason.replace(/-/g, "_"),
  };
}
async function ui(e, t) {
  let o = t?.storageV5,
    r = _t(e),
    s = r >= 0 ? e.slice(0, r) : e.slice();
  if (!Pr(s) || Ir(s, "--fork-session")) return { kind: "plain" };
  let c = Sn(s),
    d = c !== void 0 && Xn(c) !== null && c === c.toLowerCase() ? c : null;
  if (d === null)
    return { kind: "copy", reason: "unresolved", original: void 0 };
  let _ = d.slice(0, 8),
    p = await br(d);
  if (p !== null) return { kind: "copy", reason: p, original: _ };
  let v = null,
    E,
    k = await readJobState(getJobDir(_), o);
  if (k === null) {
    if (await fi(_, o))
      return { kind: "copy", reason: "unreadable", original: _ };
  } else v = { jobId: _, state: k };
  if (v !== null) {
    let { state: w } = v;
    if (w.sessionId !== d || isExecLaunch(w))
      return { kind: "copy", reason: "handle-taken", original: _ };
    if (w.resumeSessionId && w.resumeSessionId !== d) {
      let O = await br(w.resumeSessionId);
      if (O !== null) return { kind: "copy", reason: O, original: _ };
    }
  }
  for (let w of new Set([_, v?.state.daemonShort ?? _])) {
    let O = await probeDaemonJob(w, o);
    if (O.alive || O.present)
      return { kind: "copy", reason: "running", original: _ };
  }
  if (v !== null) {
    if (t?.restricted)
      return { kind: "copy", reason: "restricted", original: _ };
    let w = stripResumeFlags(s),
      O = r >= 0 ? -1 : Ar(w);
    if (w.length > (O >= 0 ? 1 : 0))
      return { kind: "copy", reason: "own-options", original: _ };
    E = (r >= 0 ? e.slice(r + 1).join(" ") : w[O]) || void 0;
  }
  return {
    kind: "continue",
    sessionId: d,
    wakeRow: v === null ? null : { ...v, prompt: E },
  };
}
async function br(e) {
  let t;
  try {
    t = await listLiveSessionHolders(e, { rejectUnreadable: !0 });
  } catch {
    return "unverified";
  }
  if (t.length === 0) return null;
  return t.some((o) => o.kind === "bg" || o.kind === "daemon-worker")
    ? "running"
    : "open-elsewhere";
}
async function fi(e, t) {
  if (t) {
    let o = await t.statMeta(jobStateKey(e));
    return o.ok || o.error.code !== "NotFound";
  }
  try {
    return (await Xt(getJobDir(e))).includes("state.json");
  } catch (o) {
    return !W(o);
  }
}
function mi(e, t) {
  switch (e.reason) {
    case "running":
      return `note: session ${e.original} is already running in the background, so this started a copy as ${t}. \`claude attach ${e.original}\` opens the original.`;
    case "open-elsewhere":
      return `note: session ${e.original} is open in another Claude Code process, so this started a copy as ${t}. The original conversation is unchanged.`;
    case "handle-taken":
      return `note: another background session already uses the id ${e.original}, so this started a copy as ${t}.`;
    case "unresolved":
      return `note: started a copy of that conversation as ${t}. To continue a session under its own id, pass its full session id (lowercase, as \`claude agents --json\` prints it) to --resume.`;
    case "unverified":
      return `note: could not check whether session ${e.original} is running, so this started a copy as ${t}.`;
    case "unreadable":
      return `note: could not read the saved state of background session ${e.original}, so this started a copy as ${t}.`;
    case "own-options":
      return `note: background session ${e.original} keeps its own saved options, so the flags you passed started a copy as ${t}. Without flags, the same command continues ${e.original} itself.`;
    case "restricted":
      return `note: a restricted shell does not wake background session ${e.original} in place, so this started a restricted copy as ${t}.`;
  }
}
async function handleBgFlag(e, t) {
  let o = _t(e),
    r = o >= 0 ? e.slice(0, o) : e,
    s = Se(r),
    c = r.findIndex(
      (O, C) => !s.has(C) && (O === "--exec" || O.startsWith("--exec=")),
    );
  if (c !== -1) {
    let O = e[c].includes("=") ? e[c].slice(e[c].indexOf("=") + 1) : void 0,
      C = O ?? e.slice(c + 1).join(" ");
    if (!C.trim()) {
      (process.stderr.write(`--exec requires a command.
`),
        (process.exitCode = 1));
      return;
    }
    let N = zt([...e.slice(0, c), ...(O !== void 0 ? e.slice(c + 1) : [])]),
      T = xt(N, "--name", "-n"),
      D = Se(N),
      J = _t(N),
      te = J >= 0 ? N.slice(0, J) : N,
      K = te.filter((be, ve) => !D.has(ve));
    if (hasRemoteBackendFlag(K)) {
      (process.stderr.write(`${getBackgroundFlagConflictMessage(N)}
`),
        (process.exitCode = 1));
      return;
    }
    let ce = te.filter(
      (be, ve) =>
        !D.has(ve) &&
        Ge(be) &&
        !/^(-n|--name)(=|$)/.test(be) &&
        !/^-n./.test(be),
    );
    if (ce.length > 0)
      process.stderr
        .write(`warning: --exec ignores ${ce.join(" ")} (only --name composes)
`);
    let pe = await spawnBgSession(
      [],
      void 0,
      "shell",
      void 0,
      { intent: C, exec: C, ...(T && { name: T, nameSource: "user" }) },
      void 0,
      void 0,
      t,
    );
    if (!pe.ok) {
      if (pe.reason === "cwd_gone")
        await logFeatureSadAsync("cli_bg_dispatch_exec", "cwd_gone");
      else await logFeatureBadAsync("cli_bg_dispatch_exec", pe.reason ?? "spawn_failed");
      (process.stderr.write(`${pe.error}
`),
        (process.exitCode = 1));
      return;
    }
    (await logFeatureOkAsync("cli_bg_dispatch_exec"),
      process.stdout.write(
        formatBgHints(pe.short, void 0, T || C) +
          `
`,
      ));
    return;
  }
  let d = isRestrictedMode(),
    _ = zt(d ? ["--restricted", ...e] : e),
    p = await gi(),
    v = p ? kr(_, p) : _,
    E = p ? kr(zt(e), p) : zt(e),
    k = await ui(E, { restricted: d, storageV5: t });
  if (k.kind === "continue" && k.wakeRow !== null) {
    await pi(k.wakeRow, E, d, t);
    return;
  }
  let w = await spawnBgSession(
    v,
    k.kind === "continue" ? k.sessionId : void 0,
    "shell",
    void 0,
    void 0,
    void 0,
    void 0,
    t,
  );
  if (!w.ok) {
    (await (w.reason === "gate_blocked" || w.reason === "cwd_gone" ? logFeatureSadAsync : logFeatureBadAsync)(
      "cli_bg_dispatch",
      w.reason ?? "spawn_failed",
    ),
      process.stderr.write(`${w.error}
`),
      (process.exitCode = 1));
    return;
  }
  if (w.rescued) await logFeatureSadAsync("cli_bg_dispatch", "rescued");
  else await logFeatureOkAsync("cli_bg_dispatch");
  if (k.kind === "copy")
    process.stderr.write(`${mi(k, w.short)}
`);
  process.stdout.write(
    formatBgHints(w.short, w.idle ? IDLE_DETAIL : void 0, w.name) +
      `
`,
  );
}
async function pi({ jobId: e, state: t, prompt: o }, r, s, c) {
  let d = Or(s ? ["--restricted", ...r] : r.slice());
  if (d) {
    (process.stderr.write(`${d}
`),
      await logFeatureSadAsync("cli_bg_dispatch", "gate_blocked"),
      (process.exitCode = 1));
    return;
  }
  let _ = await Et(void 0, c);
  if (!_.ok) {
    let k = getJobDir(e);
    invalidateJobStateCache(k);
    let w = o !== void 0 ? await readJobState(k, c) : null,
      O = o !== void 0 && w !== null && (await ot(k, w, o, c, !0));
    (process.stderr
      .write(`Couldn't reach the ${bgSupervisorNoun()} (${_.reason})${daemonHint("status")}${O ? ` Your message is saved and will be delivered when session ${e} next starts.` : ""}
`),
      await (O ? logFeatureSadAsync : logFeatureBadAsync)("cli_bg_dispatch", "daemon_unavailable"),
      (process.exitCode = 1));
    return;
  }
  let p = await respawnJob(
    e,
    o !== void 0 ? { initialPrompt: o, keepQueuedPrompt: !0 } : void 0,
    c,
  );
  if (!p.ok) {
    if (
      (process.stderr.write(
        p.alive
          ? `Session ${e} is already running \u2014 \`claude attach ${e}\` to join it
`
          : `${p.error}${p.queued ? ` Your message is saved and will be delivered when session ${e} next starts.` : ""}
`,
      ),
      p.queued)
    )
      await logFeatureSadAsync("cli_bg_dispatch", "wake_refused_prompt_queued");
    else
      await logFeatureBadAsync(
        "cli_bg_dispatch",
        p.alive ? "short_alive" : (p.errorCode ?? "wake_failed"),
      );
    process.exitCode = 1;
    return;
  }
  await logFeatureOkAsync("cli_bg_dispatch");
  let v = Se(t.respawnFlags),
    E = dedupe(
      t.respawnFlags
        .map((k, w) =>
          v.has(w)
            ? void 0
            : /^(--?[A-Za-z][A-Za-z0-9-]{0,40})(?:=|$)/.exec(k)?.[1],
        )
        .filter((k) => k !== void 0 && (BOOLEAN_RESPAWN_FLAGS.has(k) || VALUE_TAKING_RESPAWN_FLAGS.has(k))),
    );
  if (E.length > 0)
    process.stderr
      .write(`note: woke session ${e} with its saved options (${E.join(", ")}).
`);
  process.stdout.write(
    formatBgHints(
      p.short,
      o === void 0 && !t.queuedPrompt ? IDLE_DETAIL : void 0,
      p.state.name ? sanitizeSessionName(p.state.name) || void 0 : void 0,
    ) +
      `
`,
  );
}
async function gi(e = process.stdin) {
  if (e.isTTY) return "";
  let t = "",
    o = !1,
    r = (c) => {
      if (o) return;
      if (t.length + c.length > gn) {
        ((t += c.slice(0, gn - t.length)), (o = !0));
        return;
      }
      t += c;
    };
  try {
    (e.setEncoding("utf8"), e.on("data", r));
  } catch (c) {
    if ((e.off("data", r), !isStdinUnusableError(c))) throw c;
    return (
      logForDebugging(`readBgStdin: stdin unreadable: ${l(c)}`, { level: "error" }),
      await logEventAsync("tengu_bg_stdin_unreadable", { error_code: Jg(c) ?? S("none") }),
      process.stderr
        .write(`warning: stdin is unreadable (${A(c)}), proceeding without piped input
`),
      ""
    );
  }
  let s = await peekForStdinData(e, 3000);
  if ((e.off("data", r), s)) return "";
  if (o)
    process.stderr.write(`warning: piped stdin exceeds ${gn} bytes, truncated
`);
  return t.replace(/\r?\n$/, "");
}
var gn = 1048576;
function kr(e, t) {
  let o = _t(e);
  if (o >= 0) {
    let s = e.slice(o + 1).join(" ");
    return [
      ...e.slice(0, o),
      "--",
      s
        ? `${s}
${t}`
        : t,
    ];
  }
  let r = Ar(e);
  if (r >= 0) {
    let s = [...e];
    return (
      (s[r] = `${e[r]}
${t}`),
      s
    );
  }
  return [...e, "--", t];
}
function Ar(e) {
  let t = Se(e),
    o = -1;
  for (let r = 0; r < e.length; r++) {
    if (t.has(r)) continue;
    let s = e[r];
    if (Ge(s)) {
      if (s.includes("=")) continue;
      let c = e[r + 1];
      if (c === void 0) continue;
      let { rest: d } = Je(s);
      if (s === "--resume" || d === "-r") {
        if (!Ge(c)) r++;
        continue;
      }
      if (d.length > 2 && (/^-r./.test(d) || VALUE_TAKING_RESPAWN_FLAGS.has(d.slice(0, 2)))) continue;
      if (
        (BOOLEAN_RESPAWN_FLAGS.has(s) && s !== "--remote-control" && s !== "--rc") ||
        VALUELESS_SHORT_FLAGS.has(d)
      )
        continue;
      if (!t.has(r + 1) && !Ge(c)) r++;
      continue;
    }
    o = r;
  }
  return o;
}
var hi = new RegExp(`${H_e} \\d+s`);
function _i(e) {
  let t = WHt(e)[0];
  if (t) return t;
  if (hi.test(e)) return "timeout";
  return e.includes(I_e) ? "exited" : "other";
}
function wi(e) {
  switch (e) {
    case "daemon-unreachable":
      return "not running";
    case "ack-timeout":
      return "timed out";
    case "dispatch-write":
      return "couldn't write dispatch file";
    case "enoconn":
      return "socket missing";
    case "estarting":
      return "service still starting";
    case "stale-short":
      return "id collision with a prior job";
  }
}
function formatBgHints(e, t, o) {
  let r = (s, c) => chalk.dim("  " + s.padEnd(26) + c);
  return [
    `backgrounded \xB7 ${chalk.cyan(e)}${o ? ` \xB7 ${o}` : ""}${t ? chalk.dim(` ${t}`) : ""}`,
    r("claude agents", "list sessions"),
    r(`claude attach ${e}`, "open in this terminal"),
    r(`claude logs ${e}`, "show recent output"),
    r(`claude stop ${e}`, "stop this session"),
  ].join(`
`);
}
function bi(e) {
  return Rr(Tr(e));
}
function Rr(e) {
  return e.length === 0
    ? null
    : `warning: extra arguments ignored: ${e.join(" ")}
`;
}
function Tr(e) {
  let t = new Set(["logs", "attach", "stop", "kill", "respawn", "rm"]);
  if (e.length <= 2 || !e[0] || !t.has(e[0])) return [];
  let o = [];
  for (let r = 2; r < e.length; r++) {
    let s = e[r];
    if (
      s === "--debug" ||
      s === "-d" ||
      s === "--debug-to-stderr" ||
      s === "-d2e" ||
      s.startsWith("--debug=") ||
      s.startsWith("--debug-file=")
    )
      continue;
    if (s === "--debug-file" && r + 1 < e.length) {
      r++;
      continue;
    }
    o.push(s);
  }
  return o;
}
function Cr() {
  let e = bi(process.argv.slice(2));
  if (e) process.stderr.write(e);
}
var yr = 1e4;
async function kn(e) {
  let t = new Set(),
    o,
    r = 0;
  do {
    let s = await e
      .listEntries({ namespace: "job" }, { cursor: o, skipScopeStats: !0 })
      .catch(() => {
        return;
      });
    if (s === void 0 || !s.ok) {
      logForDebugging(
        `[bg] v5 jobs listing failed: ${s === void 0 ? "rejected" : s.error.code}`,
      );
      return;
    }
    for (let c of s.value.items)
      if (
        c.kind === "scope" &&
        c.scope.namespace === "job" &&
        c.scope.jobId !== void 0
      )
        t.add(c.scope.jobId);
    if (s.value.cursor && s.value.cursor === o) {
      logForDebugging("[bg] v5 jobs listing failed: cursor did not advance");
      return;
    }
    o = s.value.cursor;
  } while (o && ++r < yr);
  if (o) {
    logForDebugging(`[bg] v5 jobs listing failed: more than ${yr} pages`);
    return;
  }
  return [...t];
}
async function Dr(e, t) {
  let o = getJobDir(t),
    r = await ri(o).catch(() => {
      return;
    });
  if (r === void 0 || !r.isDirectory()) {
    await bn(o, { recursive: !0, force: !0 }).catch(() => {});
    return;
  }
  await e.deleteScope({ namespace: "job", jobId: t }).catch(() => {});
}
async function yn(e, t, o, r) {
  if ((Cr(), e === "--help" || e === "-h"))
    (process.stdout.write(`Usage: ${t}

  ${o}
`),
      process.exit(0));
  if (e?.startsWith("-"))
    (process.stderr.write(`unknown option '${e}'
Usage: ${t}
`),
      process.exit(1));
  if (!e)
    (process.stderr.write(`Usage: ${t}
`),
      process.exit(1));
  let c = (r ? ((await kn(r)) ?? []) : await Xt(getJobsDir()).catch(() => []))
    .filter((d) => SHORT_RE.test(d))
    .filter((d) => d.startsWith(e));
  if (c.length === 1) return c[0];
  (process.stderr.write(
    c.length === 0
      ? `No job matching '${e}'. Run 'claude agents' to list running sessions.
`
      : `Ambiguous prefix '${e}', matches: ${c.join(", ")}
`,
  ),
    process.exit(1));
}
async function logsHandler(e, t) {
  let o = await yn(
      e,
      "claude logs <id>",
      "Print the background session's recent terminal output.",
      t,
    ),
    r = await new Promise((p) => {
      let v = subscribeControl(
        o,
        500,
        (E) => {
          if (E.type === "snapshot") (v(), p(E.streamTail));
        },
        (E) => {
          (v(), p(E));
        },
      );
    });
  if (typeof r === "string")
    return (
      await logFeatureBadAsync("cli_bg_logs", "read_failed"),
      process.stderr.write(`Couldn't read logs for ${o} \u2014 ${redactDaemonNonce(r)}
`),
      exitAfterAnalyticsFlush(1)
    );
  let { replay: s, cursorAddressed: c } = wr(r.join("")),
    d = process.stdout.rows || 9999,
    _ = process.stdout.isTTY
      ? "\x1B[0m" +
        (c
          ? cursorToPosition(d, 1) +
            `
`
          : "")
      : "";
  return (await writeStdoutAndDrain(s + _), await logFeatureOkAsync("cli_bg_logs"), exitAfterAnalyticsFlush(0));
}
var yi = 60000,
  Si = 2000;
function Ei(e) {
  if (e.includes(RESPAWNING_ATTACH_CODE)) {
    if (e.includes(RESPAWN_REASON_UPGRADE) || /upgrad/i.test(e))
      return "Agent is updating to the new Claude Code\u2026";
    if (e.includes(RESPAWN_REASON_STALL))
      return "Session not responding \u2014 restarting it\u2026";
    if (e.includes(RESPAWN_REASON_LEGACY)) return "Migrating job to attachable PTY\u2026";
    return "Session is restarting\u2026";
  }
  if (e.includes("ESTARTING")) return `${bgSupervisorNounCap()} is starting\u2026`;
  return `${bgSupervisorNounCap()} is restarting\u2026`;
}
async function hn(e, t = {}, o) {
  let r = () =>
      rt(
        e,
        t.gesture
          ? {
              telemetry: {
                gestureId: t.gesture.gestureId,
                attempt: ++t.gesture.attempt,
                t0: t.gesture.t0,
                surface: t.gesture.surface,
                daemonBooted: t.gesture.daemonBooted,
                interactive: t.gesture.interactive,
                storageV5: o,
              },
            }
          : {},
      ),
    s = process.stderr.isTTY === !0,
    c = !1,
    d = "",
    _ = (k, w) => {
      let O = Math.round(w / 1000),
        C = O >= 5 ? `${k} (${O}s)` : k;
      if (s) (process.stderr.write(`\r${ERASE_ENTIRE_LINE}${C}`), (c = !0));
      else if (k !== d)
        process.stderr.write(`${C}
`);
      d = k;
    },
    p = () => {
      if (c) (process.stderr.write(`\r${ERASE_ENTIRE_LINE}`), (c = !1));
    },
    v = await r(),
    E = 0;
  try {
    for (let k = 0; E < yi; k++) {
      let w = v.msg,
        O = w !== void 0 && TRANSIENT_ATTACH_CODE.test(w),
        C =
          !O &&
          v.outcome === "error" &&
          w !== void 0 &&
          RACED_SOCKET_GAP.test(w) &&
          !SUPERVISOR_DETACH_CODE.test(w);
      if (w === void 0 || (!O && !C)) break;
      if (C) {
        let T = await ensureDaemonRunning(
          {
            forceTransient: !0,
            onStarting: () => t.gesture?.markDaemonBooted?.(),
          },
          o,
        );
        if (!T.ok) return { r: v, waitedMs: E, unavailableReason: T.reason };
      }
      let N = Math.min(2000, 250 * 2 ** k);
      if (w.includes(RESPAWNING_ATTACH_CODE) || E + N > Si) _(Ei(w), E);
      if ((await sleep(N), (E += N), t.abortOnDetachKey)) {
        let T = B0e();
        if (T && $t(T)) return { r: v, waitedMs: E, detachKeyAborted: !0 };
      }
      (p(), (v = await r()));
    }
  } finally {
    p();
  }
  return { r: v, waitedMs: E };
}
var vi = "ENOJOB: probe found no handle \u2014 worker retired or settled";
async function attachHandler(e, t) {
  let o = performance.now(),
    r = !1,
    s = await yn(
      e,
      "claude attach <id>",
      "Open the background session in this terminal. \u2190 returns to agent view, Ctrl+Z drops back to your shell. The session keeps running either way.",
      t,
    ),
    c = 0,
    d = vr(),
    _ = {
      gestureId: d,
      attempt: 0,
      t0: o,
      surface: "bg_cli",
      interactive: {},
      get daemonBooted() {
        return r;
      },
      markDaemonBooted: () => {
        ((r = !0), ut(d, { daemonBooted: !0 }, t));
      },
    };
  claimAttachBeacon(_.gestureId, "bg_cli", t).catch(() => {});
  let p = () => (c > 0 ? { waited_transient_ms: c } : void 0),
    v = async (C, N) => (
      xe(_, "error"),
      await Promise.race([releaseAttachBeacon(_.gestureId, t).catch(() => {}), sleep(750)]),
      await logFeatureBadAsync("cli_bg_attach", "daemon_unavailable", p()),
      process.stderr
        .write(`${C} \u2014 ${bgSupervisorNoun()} is unavailable (${N})${daemonHint("status")}
`),
      exitAfterAnalyticsFlush(1)
    ),
    E = await Et(
      {
        onStarting: () => {
          ((r = !0), ut(d, { daemonBooted: !0 }, t));
        },
      },
      t,
    );
  if (!E.ok) return v("Couldn't attach", E.reason);
  let k;
  if (await Ot(s)) k = { outcome: "error", msg: vi };
  else {
    let C = await hn(s, { gesture: _ }, t);
    if (((k = C.r), (c += C.waitedMs), C.unavailableReason !== void 0))
      return v("Couldn't attach", C.unavailableReason);
  }
  if (k.outcome === "error" && k.msg?.includes("ENOJOB")) {
    let C = await readJobState(getJobDir(s), t).catch(() => null),
      N =
        C?.state === "failed" &&
        !isExecLaunch(C) &&
        (C.reapedMidWorkAt !== void 0 || C.reapedUnsettledAt !== void 0),
      T = C?.state === "failed" && !isExecLaunch(C) && C.detail === HOST_DIED_DETAIL,
      D =
        C?.sessionId !== void 0 && Xn(C.sessionId) !== null
          ? sanitizeAnalyticsId(C.sessionId)
          : void 0,
      J = D ? { target_session_id: D } : {};
    if (C?.state === "failed" && !N && !T)
      return (
        await logFeatureBadAsync("cli_bg_attach", "wake_failed_state", { ...p(), ...J }),
        process.stderr
          .write(`Session ${s} can't start \u2014 ${Er(C.detail) || "it crashed repeatedly"}
`),
        xe(_, "error", "worker_crash_loop"),
        await Promise.race([releaseAttachBeacon(_.gestureId, t).catch(() => {}), sleep(750)]),
        exitAfterAnalyticsFlush(1)
      );
    if (N)
      (await logEventAsync("tengu_bg_attach_wake_after_reap", J),
        process.stderr
          .write(`Session ${s} was interrupted while unattended \u2014 resuming it\u2026
`));
    else if (T)
      process.stderr
        .write(`Session ${s}'s terminal host died \u2014 restarting it on a fresh one\u2026
`);
    else if (C?.deadEpochReapedAt !== void 0 && !isExecLaunch(C))
      process.stderr
        .write(`Session ${s} ended while the background service was off; looking for its saved conversation to resume\u2026
`);
    else
      process.stderr.write(`Waking session ${s}\u2026
`);
    let te = await respawnJob(s, void 0, t).catch((K) => ({
      ok: !1,
      alive: !1,
      short: void 0,
      error: l(K),
    }));
    if (te.ok || te.alive) {
      if (te.short && te.short !== s)
        (process.stderr.write(`Session moved to ${te.short}
`),
          (s = te.short));
      let K = await hn(s, { gesture: _ }, t);
      if (((k = K.r), (c += K.waitedMs), K.unavailableReason !== void 0))
        return v("Couldn't attach", K.unavailableReason);
    } else if (
      "errorCode" in te &&
      te.errorCode === "dead_epoch_transcript_gone"
    )
      return (
        await logFeatureSadAsync("cli_bg_attach", "dead_epoch_transcript_gone", {
          ...p(),
          ...J,
        }),
        process.stderr.write(`${te.error}
`),
        xe(_, "error", "respawn_failed"),
        await Promise.race([releaseAttachBeacon(_.gestureId, t).catch(() => {}), sleep(750)]),
        exitAfterAnalyticsFlush(1)
      );
    else
      return (
        await logFeatureBadAsync(
          "cli_bg_attach",
          N ? "wake_after_reap_failed" : "wake_failed",
          { ...p(), ...J },
        ),
        process.stderr.write(
          N
            ? `Couldn't resume ${s} after the interruption \u2014 ${te.error}
`
            : `Couldn't wake ${s} \u2014 ${te.error}
`,
        ),
        xe(_, "error", "respawn_failed"),
        await Promise.race([releaseAttachBeacon(_.gestureId, t).catch(() => {}), sleep(750)]),
        exitAfterAnalyticsFlush(1)
      );
  }
  let w = () => {
      if (getCurrentPlatform() === "windows" && process.stdin.isTTY) trySetRawMode(process.stdin, !1);
    },
    O = async () => {
      let C = await readJobStateAfterSettle(getJobDir(s), t);
      if (
        C === null ||
        C.state === "done" ||
        C.state === "stopped" ||
        C.state === "blocked"
      )
        xe(_, "detached");
    };
  while (k.outcome === "disconnected") {
    let C = await ensureDaemonRunning(
      {
        forceTransient: !0,
        onStarting: () => {
          ((r = !0), ut(d, { daemonBooted: !0 }, t));
        },
      },
      t,
    );
    if (!C.ok) return v(`Couldn't reconnect to ${s}`, C.reason);
    if (await Ot(s)) {
      (w(), await O());
      break;
    }
    if (
      (process.stderr.write(`Reconnecting to ${s}\u2026
`),
      getCurrentPlatform() === "windows" && process.stdin.isTTY)
    )
      (trySetRawMode(process.stdin, !0), process.stdin.ref());
    let N = B0e();
    if (N && $t(N)) {
      (w(), xe(_, "detached"), (k = { outcome: "detached" }));
      break;
    }
    let T = await hn(s, { abortOnDetachKey: !0, gesture: _ }, t);
    if (((k = T.r), (c += T.waitedMs), T.detachKeyAborted)) {
      (w(), xe(_, "detached"), (k = { outcome: "detached" }));
      break;
    }
    if (T.unavailableReason !== void 0)
      return (w(), v(`Couldn't reconnect to ${s}`, T.unavailableReason));
    if (k.outcome === "error" && k.msg?.includes("ENOJOB")) {
      (w(), await O(), (k = { outcome: "disconnected" }));
      break;
    }
  }
  if (
    (await Promise.race([releaseAttachBeacon(_.gestureId, t).catch(() => {}), sleep(750)]),
    k.outcome === "detached" && k.msg && (FATAL_ATTACH_CODE.test(k.msg) || TRANSIENT_ATTACH_CODE.test(k.msg)))
  )
    return (
      await logFeatureBadAsync(
        "cli_bg_attach",
        FATAL_ATTACH_CODE.test(k.msg) ? "stalled" : "transient_exhausted",
        p(),
      ),
      process.stderr
        .write(`${k.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "")}
`),
      exitAfterAnalyticsFlush(1)
    );
  if (Ai(k, process.stdout.isTTY, process.stdin.isTTY))
    return (
      await logFeatureOkAsync("cli_bg_attach", p()),
      relaunchClaudeCode({ args: ["agents"], env: { CLAUDE_AGENTS_SELECT: s } })
    );
  if (k.outcome === "detached" && k.msg)
    process.stderr.write(`${k.msg.replace(KICKED_ATTACH_CODE, "")}
`);
  if (k.outcome === "disconnected") {
    let C = await readJobState(getJobDir(s), t).catch(() => null);
    if (C?.state === "failed" && C.detail === HOST_DIED_DETAIL)
      process.stderr
        .write(`Session ${s}'s terminal host died \u2014 run \`claude attach ${s}\` again to restart it on a fresh host.
`);
    else {
      let N = C?.state === "failed" && C.detail ? ` (${Er(C.detail)})` : "";
      process.stderr.write(`Session ${s} has exited${N}.
`);
    }
  }
  if (k.outcome === "error") {
    let C = k.msg?.startsWith(`${HOST_DEAD_ATTACH_CODE}:`) ?? !1,
      N = k.msg?.startsWith(`${It}:`) ?? !1,
      T = C || N ? await readJobState(getJobDir(s), t).catch(() => null) : null,
      D = T !== null && isExecLaunch(T),
      J = C
        ? D
          ? `${HOST_DIED_EXEC_ATTACH_MESSAGE}.`
          : `${HOST_DIED_ATTACH_MESSAGE} \u2014 run \`claude attach ${s}\` again to restart it on a fresh host.`
        : N
          ? D
            ? `${gt} \u2014 \`claude stop ${s}\` stops it (it runs a shell command, which is not run again for you).`
            : `${gt} \u2014 \`claude stop ${s}\`, then \`claude attach ${s}\` restarts it (the conversation is saved).`
          : k.msg?.includes(RESPAWNING_ATTACH_CODE)
            ? "Job is respawning after an upgrade \u2014 try attach again in a moment."
            : k.msg && (RACED_SOCKET_GAP.test(k.msg) || /ESTARTING/.test(k.msg))
              ? `${bgSupervisorNounCap()} is restarting \u2014 try again in a moment.`
              : (k.msg ?? "unknown");
    (process.stderr.write(`Couldn't attach to ${s} \u2014 ${J}
`),
      await logFeatureBadAsync(
        "cli_bg_attach",
        C ? "host_dead" : N ? "no_response" : "transient_exhausted",
        p(),
      ));
  } else await logFeatureOkAsync("cli_bg_attach", p());
  return exitAfterAnalyticsFlush(k.outcome === "error" ? 1 : 0);
}
function Ai(e, t, o) {
  return (
    e.outcome === "detached" &&
    e.viaApc === !0 &&
    (e.msg === void 0 || !SUPERVISOR_DETACH_CODE.test(e.msg)) &&
    t === !0 &&
    o === !0
  );
}
async function respawnHandler(e, t) {
  if ((Cr(), e === "--help" || e === "-h")) {
    process.stdout.write(`Usage: claude respawn <id>|--all

  Restart a background session (or all of them) so it picks up the current Claude binary.
`);
    return;
  }
  if (e?.startsWith("-") && e !== "--all") {
    (process.stderr.write(`unknown option '${e}'
Usage: claude respawn <id>|--all
`),
      (process.exitCode = 1));
    return;
  }
  if (!e) {
    (process.stderr.write(`usage: claude respawn <id>|--all
`),
      (process.exitCode = 1));
    return;
  }
  let o = await Et(void 0, t);
  if (!o.ok) {
    (process.stderr
      .write(`Couldn't respawn \u2014 ${bgSupervisorNoun()} is unavailable (${o.reason})${daemonHint("status")}
`),
      await logFeatureBadAsync("cli_bg_respawn", "daemon_unavailable"),
      (process.exitCode = 1));
    return;
  }
  if (e === "--all") {
    let p = (await listJobs(void 0, t)).filter((k) => !isTerminal(k.state.state));
    if (p.length === 0) {
      process.stdout.write(`no live jobs to respawn
`);
      return;
    }
    let v = 0,
      E = 0;
    for (let k of p) {
      let w = await respawnJob(k.id, { force: !0, knownState: k.state }, t);
      if (w.ok)
        (v++,
          process.stdout
            .write(`respawned ${k.id}${w.short !== k.id ? ` \u2192 ${w.short}` : ""}
`));
      else if (w.alive)
        (E++,
          (process.exitCode = 1),
          process.stderr
            .write(`${k.id}: still running \u2014 couldn't confirm restart, retry in a moment
`));
      else
        ((process.exitCode = 1),
          process.stderr.write(`${k.id}: ${w.error}
`));
    }
    if (v === p.length) await logFeatureOkAsync("cli_bg_respawn");
    else if (v > 0 || E > 0)
      await logFeatureSadAsync("cli_bg_respawn", E > 0 ? "still_alive" : "partial");
    else await logFeatureBadAsync("cli_bg_respawn", "spawn_failed");
    return;
  }
  let s = (t ? ((await kn(t)) ?? []) : await Xt(getJobsDir()).catch(() => []))
    .filter((_) => SHORT_RE.test(_))
    .filter((_) => _.startsWith(e));
  if (s.length !== 1) {
    (process.stderr.write(
      s.length === 0
        ? `No job matching '${e}'
`
        : `Ambiguous prefix '${e}', matches: ${s.join(", ")}
`,
    ),
      await logFeatureBadAsync("cli_bg_respawn", s.length === 0 ? "no_match" : "ambiguous"),
      (process.exitCode = 1));
    return;
  }
  let c = s[0],
    d = await respawnJob(c, { force: !0 }, t);
  if (!d.ok && d.alive) {
    (process.stderr
      .write(`${c}: still running \u2014 couldn't confirm restart, retry in a moment
`),
      await logFeatureSadAsync("cli_bg_respawn", "still_alive"),
      (process.exitCode = 1));
    return;
  }
  if (!d.ok) {
    (process.stderr.write(`${d.error}
`),
      await logFeatureBadAsync("cli_bg_respawn", "spawn_failed"),
      (process.exitCode = 1));
    return;
  }
  (await logFeatureOkAsync("cli_bg_respawn"),
    process.stdout
      .write(`respawned ${c}${d.short !== c ? ` \u2192 ${d.short}` : ""}
`));
}
async function stopHandler(e, t) {
  let o = await yn(
      e,
      "claude stop <id>",
      "Stop a background session. Its conversation is kept; resume it later with `claude attach <id>`.",
      t,
    ),
    r = await readJobState(getJobDir(o), t),
    { confirmed: s, error: c } = await killJob(o, r ?? void 0, void 0, t);
  if (!s) {
    (await logFeatureBadAsync("cli_bg_stop", "kill_unconfirmed"),
      process.stderr.write(
        c
          ? `couldn't confirm ${o} was stopped \u2014 ${c}
`
          : `couldn't confirm ${o} was stopped \u2014 the background service may be restarting. Try again in a moment.
`,
      ),
      (process.exitCode = 1));
    return;
  }
  (await logFeatureOkAsync("cli_bg_stop"),
    process.stdout.write(`stopped ${o}
`));
  let d = getJobDir(o),
    _ = await readJobState(d, t);
  if (_ && !isSettled(_)) {
    let p = new Date().toISOString();
    await writeStateAtomic(
      d,
      {
        ..._,
        state: "stopped",
        detail: "stopped",
        tempo: "idle",
        needs: void 0,
        block: void 0,
        inFlight: void 0,
        updatedAt: p,
        firstTerminalAt: _.firstTerminalAt ?? p,
      },
      t,
    ).catch((v) =>
      logForDebugging(`bg stop terminal write failed: ${l(v)}`, { level: "warn" }),
    );
  }
  if (
    (await logEventAsync("tengu_bg_agent_action", {
      action: S("stop"),
      source: S("cli"),
      jobSessionId: sanitizeAnalyticsId(_?.sessionId) ?? S(""),
    }),
    _?.worktreePath)
  )
    process.stdout.write(
      chalk.dim(`  worktree retained at ${_.worktreePath}
  run 'claude rm ${o}' to remove worktree and job state
`),
    );
}
var Sr = `Usage: claude rm <id> [--discard-unpushed <commit>@<worktree-id>]
`;
async function rmHandler(e, t, o = Tr(process.argv.slice(2))) {
  let r,
    s,
    c,
    d = [],
    _ = e === void 0 ? o : [e, ...o];
  for (let N = 0; N < _.length; N++) {
    let T = _[N];
    if (T === "--help" || T === "-h")
      (process.stdout.write(`${Sr}
  Delete a background session and its worktree. Unlike \`stop\`, works on already-exited sessions.
  --discard-unpushed <commit>@<worktree-id>  also discard the worktree's unpushed commits (and any uncommitted changes) while it is still the same worktree at that commit \u2014 pass the value a previous 'claude rm <id>' reported
`),
        process.exit(0));
    if (T === "--discard-unpushed" || T.startsWith("--discard-unpushed=")) {
      let [D, J, ...te] = (
        (T === "--discard-unpushed" ? _[++N] : T.slice(19)) ?? ""
      )
        .toLowerCase()
        .split("@");
      if (
        te.length > 0 ||
        D === void 0 ||
        !isValidGitSha(D) ||
        J === void 0 ||
        !WORKTREE_DIGEST_PATTERN.test(J)
      ) {
        c = `option '--discard-unpushed' takes the <commit>@<worktree-id> value shown by a previous 'claude rm <id>' refusal
`;
        break;
      }
      s = { headSha: D, worktreeDigest: J };
    } else if (T.startsWith("-")) {
      c = `unknown option '${T}'
`;
      break;
    } else if (r === void 0) r = T;
    else d.push(T);
  }
  if (c !== void 0 || !r)
    (process.stderr.write(`${c ?? ""}${Sr}`), process.exit(1));
  let p = Rr(d);
  if (p) process.stderr.write(p);
  let E = (t ? ((await kn(t)) ?? []) : await Xt(getJobsDir()).catch(() => []))
    .filter((N) => SHORT_RE.test(N))
    .filter((N) => N.startsWith(r));
  if (E.length !== 1)
    (process.stderr.write(
      E.length === 0
        ? `No job matching '${r}'
`
        : `Ambiguous prefix '${r}', matches: ${E.join(", ")}
`,
    ),
      process.exit(1));
  let k = E[0],
    w = await readJobState(getJobDir(k), t),
    O = await deleteJob(k, s === void 0 ? {} : { discardUnpushed: s }, t);
  if (!O.removed) {
    let {
      error: N,
      errorCode: T,
      keptWorktree: D,
      keptReason: J,
      keptErrorSummary: te,
      keptUnpushed: K,
      discardUnpushed: ce,
    } = O;
    if (D) {
      if ((await logFeatureSadAsync("cli_bg_rm", "kept_worktree"), K)) {
        let pe = pluralize(K.count, "it", "them");
        (process.stdout.write(
          `kept ${k} \u2014 ${formatUnpushedCommitsDetail(K)}
` +
            (ce
              ? `  worktree: ${D}
  push ${pe}, or discard the worktree and its commits: claude rm ${k} --discard-unpushed ${ce.headSha}@${ce.worktreeDigest}
`
              : `  worktree: ${D} (also recorded by another finished session)
  push ${pe} first, then run 'claude rm ${k}' again
`),
        ),
          (process.exitCode = 1));
        return;
      }
      (process.stdout.write(
        `kept ${k} \u2014 worktree ${formatKeptWorktreeLabel(J, te)}
  worktree kept at ${D}
` +
          (J === "unverified" || J === "shared_record"
            ? `  if you don't need its contents, remove the directory, then run 'claude rm ${k}' again
`
            : J === "unpushed_shared"
              ? `  push its commits first, then run 'claude rm ${k}' again
`
              : J === "identity_changed"
                ? `  retry the delete (the directory's resolution changed while it was being verified), then run 'claude rm ${k}' again if it recurs
`
                : J === "records_unreadable"
                  ? `  retry once sibling records are readable (see ~/.claude/jobs), then run 'claude rm ${k}' again
`
                  : J === "occupied"
                    ? `  exit the Claude Code session using that directory (shown above; or 'claude stop <id>' if it is a background session), then run 'claude rm ${k}' again
`
                    : J === "in_use" || J === "live_lock"
                      ? `  wait for that session to finish (or stop it), then run 'claude rm ${k}' again
`
                      : `  resolve that (commit/push, or remove the worktree), then run 'claude rm ${k}' again
`),
      ),
        (process.exitCode = 1));
      return;
    }
    (await logFeatureBadAsync("cli_bg_rm", T ?? "kill_unconfirmed"),
      process.stderr
        .write(`couldn't remove ${k} \u2014 ${N ?? "the background service may be restarting. Try again in a moment."}
`),
      (process.exitCode = 1));
    return;
  }
  await logEventAsync("tengu_bg_agent_action", {
    action: S("delete"),
    source: S("cli"),
    jobSessionId: sanitizeAnalyticsId(w?.sessionId) ?? S(""),
  });
  let { leftWorktreeDir: C } = O;
  if (C) await logFeatureSadAsync("cli_bg_rm", "worktree_left_in_place");
  else await logFeatureOkAsync("cli_bg_rm");
  process.stdout.write(
    `removed ${k}` +
      (C
        ? `
  worktree directory left at ${C} (git no longer recognized it)`
        : w?.worktreePath
          ? `
  worktree: ${normalizeWhitespace(w.worktreePath)}`
          : "") +
      `
`,
  );
}
function Je(e) {
  let t = [],
    o = e;
  while (/^-[a-zA-Z]./.test(o) && VALUELESS_SHORT_FLAGS.has(o.slice(0, 2)))
    (t.push(o.slice(0, 2)), (o = `-${o.slice(2)}`));
  return { peeled: t, rest: o };
}
function Ge(e) {
  return e.length > 1 && e.startsWith("-");
}
function _t(e) {
  let t = Se(e);
  for (let o = 0; o < e.length; o++) if (e[o] === "--" && !t.has(o)) return o;
  return -1;
}
function zt(e) {
  let t = _t(e),
    o = t >= 0 ? e.slice(0, t) : e,
    r = Se(o),
    s = o.filter((c, d) => r.has(d) || !ai.includes(c));
  return t >= 0 ? [...s, ...e.slice(t)] : s;
}
function xt(e, t, o) {
  let r = Se(e),
    s;
  for (let c = 0; c < e.length; c++) {
    if (r.has(c)) continue;
    let d = e[c];
    if (d === "--") break;
    if (d === t || (o !== void 0 && d === o)) {
      if (e[c + 1] !== void 0) ((s = e[c + 1]), c++);
      continue;
    }
    if (d.startsWith(`${t}=`)) {
      s = d.slice(t.length + 1);
      continue;
    }
    if (o !== void 0) {
      let { peeled: _, rest: p } = Je(d);
      if (p.length > 2 && p.slice(0, 2) === o) {
        s = p.slice(2);
        continue;
      }
      if (_.length > 0 && p === o && e[c + 1] !== void 0) ((s = e[c + 1]), c++);
    }
  }
  return s;
}
function rewriteDispatchFlagValue(e, t, o, r) {
  let s = Se(e),
    c = [...e],
    d = !1;
  for (let p = 0; p < e.length; p++) {
    if (s.has(p)) continue;
    let v = e[p];
    if (v === "--") break;
    if (v === t || (o !== void 0 && v === o)) {
      if (e[p + 1] !== void 0) {
        if (!isCarriableCliToken(r)) ((c[p] = `${t}=${r}`), (c[p + 1] = null), (d = !0));
        else if (e[p + 1] !== r) ((c[p + 1] = r), (d = !0));
        p++;
      }
      continue;
    }
    if (v.startsWith(`${t}=`)) {
      if (v.slice(t.length + 1) !== r) ((c[p] = `${t}=${r}`), (d = !0));
      continue;
    }
    if (o !== void 0) {
      let { peeled: E, rest: k } = Je(v);
      if (k.length > 2 && k.slice(0, 2) === o) {
        if (k.slice(2) !== r)
          ((c[p] = `${v.slice(0, v.length - (k.length - 2))}${r}`), (d = !0));
        continue;
      }
      if (E.length > 0 && k === o && e[p + 1] !== void 0) {
        if (!isCarriableCliToken(r))
          ((c[p] = `-${E.map((w) => w.slice(1)).join("")}`),
            (c[p + 1] = `${t}=${r}`),
            (d = !0));
        else if (e[p + 1] !== r) ((c[p + 1] = r), (d = !0));
        p++;
      }
    }
  }
  if (!d) return;
  let _ = [];
  for (let p of c) if (p !== null) _.push(p);
  return _;
}
function Se(e) {
  let t = new Set();
  for (let o = 0; o < e.length; o++) {
    if (t.has(o)) continue;
    let r = e[o];
    if (r === "--") break;
    let { rest: s } = Je(r);
    if (r === "--resume" || s === "-r") continue;
    if (
      (r === "--remote-control" || r === "--rc") &&
      e[o + 1] !== void 0 &&
      !(e[o + 1].length > 1 && e[o + 1].startsWith("-"))
    ) {
      t.add(o + 1);
      continue;
    }
    if (!s.includes("=") && VALUE_TAKING_FLAGS.has(s) && e[o + 1] !== void 0) {
      if ((t.add(o + 1), MULTI_VALUE_FLAGS.has(s))) {
        let c = o + 2;
        while (e[c] !== void 0 && !(e[c].length > 1 && e[c].startsWith("-")))
          (t.add(c), c++);
      }
    }
  }
  return t;
}
function Ci(e) {
  let t = Se(e),
    o = !1,
    r = !1;
  for (let s = 0; s < e.length; s++) {
    if (t.has(s)) continue;
    let c = e[s];
    if (c === "--") break;
    if (c === "--continue") {
      r = !0;
      continue;
    }
    if (c === "--resume" || c.startsWith("--resume=")) {
      o = !0;
      continue;
    }
    let { peeled: d, rest: _ } = Je(c);
    if (d.includes("-c") || _ === "-c") r = !0;
    if (_ === "-r" || /^-r./.test(_)) o = !0;
  }
  if (o) return Sn(e) !== void 0;
  return r;
}
function Sn(e) {
  let t = Se(e),
    o;
  for (let r = 0; r < e.length; r++) {
    if (t.has(r)) continue;
    let s = e[r];
    if (s === "--") break;
    if (s.startsWith("--resume=")) {
      o = s.slice(9) || void 0;
      continue;
    }
    let { rest: c } = Je(s);
    if (/^-r./.test(c)) {
      o = c.slice(2);
      continue;
    }
    if (s === "--resume" || c === "-r") {
      let d = e[r + 1];
      if (d !== void 0 && !Ge(d)) ((o = d), r++);
      else o = void 0;
    }
  }
  return o;
}
function Pr(e) {
  let t = Se(e);
  return e.some((o, r) => {
    if (t.has(r)) return !1;
    if (o === "--continue" || o === "--resume" || o.startsWith("--resume="))
      return !0;
    let { peeled: s, rest: c } = Je(o);
    return s.includes("-c") || c === "-c" || c === "-r" || /^-r./.test(c);
  });
}
function Ir(e, t) {
  let o = Se(e);
  return e.some((r, s) => !o.has(s) && r === t);
}
function stripResumeFlags(e) {
  let t = Se(e),
    o = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (t.has(r)) {
      o.push(s);
      continue;
    }
    if (s === "--") {
      for (let _ = r; _ < e.length; _++) o.push(e[_]);
      break;
    }
    if (
      s === "--fork-session" ||
      s === "--continue" ||
      s.startsWith("--resume=") ||
      s.startsWith("--session-id=")
    )
      continue;
    let { peeled: c, rest: d } = Je(s);
    if (c.length > 0 || d === "-c" || d.startsWith("-r")) {
      let _ = c.filter((k) => k !== "-c").map((k) => k[1]),
        p = d === "-c" || /^-r./.test(d),
        v = d === "-r",
        E = p || v ? "" : d.slice(1);
      if (_.length > 0 || E) o.push(`-${_.join("")}${E}`);
      if (v && e[r + 1] !== void 0 && !Ge(e[r + 1])) r++;
      continue;
    }
    if (s === "--session-id") {
      if (e[r + 1] !== void 0) r++;
      continue;
    }
    if (s === "--resume") {
      if (e[r + 1] !== void 0 && !Ge(e[r + 1])) r++;
      continue;
    }
    o.push(s);
  }
  return o;
}
function Di(e) {
  let t = Se(e),
    o = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (t.has(r)) {
      o.push(s);
      continue;
    }
    if (s === "--") {
      for (let c = r; c < e.length; c++) o.push(e[c]);
      break;
    }
    if (s.startsWith("--session-id=")) continue;
    if (s === "--session-id") {
      if (e[r + 1] !== void 0) r++;
      continue;
    }
    o.push(s);
  }
  return o;
}
function Or(e) {
  let t = _t(e),
    o = t >= 0 ? e.slice(0, t) : e,
    r = Se(o),
    s = o.filter((d, _) => !r.has(_));
  if (hasRemoteBackendFlag(s)) return getBackgroundFlagConflictMessage(o);
  if (
    s.some((d) => {
      let { peeled: _, rest: p } = Je(d);
      return (
        d === "--print" ||
        d.startsWith("--print=") ||
        _.includes("-p") ||
        p === "-p"
      );
    })
  )
    return "--bg and --print conflict: --print never starts the interactive session that `claude agents` attaches to, so the job would be unattachable. The prompt is the positional \u2014 drop --print: `claude --bg '<task>'`.";
  let c = [xt(o, "--permission-mode"), xt(o, "--inherit-permission-mode")];
  if (
    (c.includes("bypassPermissions") ||
      s.includes("--dangerously-skip-permissions") ||
      s.includes("--allow-dangerously-skip-permissions")) &&
    !hasSkipDangerousModePermissionPrompt() &&
    !getGlobalConfig().bypassPermissionsModeAccepted
  )
    return "--bg with bypassPermissions requires accepting the disclaimer first. Run `claude --dangerously-skip-permissions` once interactively.";
  if (c.includes("auto") && !hasAutoModeOptIn())
    return "--bg with auto mode requires opting in first. Run `claude --permission-mode auto` once interactively.";
  return null;
}
function Pi(e, t) {
  let o = Se(e),
    r;
  for (let s = 0; s < e.length; s++) {
    if (o.has(s)) continue;
    let c = e[s];
    if (Ge(c)) {
      let { rest: d } = Je(c);
      if (
        (c === "--resume" || d === "-r") &&
        e[s + 1] !== void 0 &&
        !Ge(e[s + 1])
      )
        s++;
      continue;
    }
    if (c.length > 0 && c !== t) r = c;
  }
  return r;
}
function Ii(e) {
  let t = Se(e),
    o = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (t.has(r)) {
      o.push(s);
      continue;
    }
    if (!Ge(s)) continue;
    if (s.includes("=")) {
      o.push(s);
      continue;
    }
    let { rest: c } = Je(s);
    if (VALUE_TAKING_RESPAWN_FLAGS.has(c)) {
      o.push(s);
      continue;
    }
    if (BOOLEAN_RESPAWN_FLAGS.has(s)) {
      o.push(s);
      continue;
    }
    let d = e[r + 1];
    if (d !== void 0 && !Ge(d) && !t.has(r + 1)) {
      r++;
      continue;
    }
    o.push(s);
  }
  return o;
}
function callerProviderEnv() {
  let e = {};
  for (let t of ALLOWED_PROVIDER_ENV_KEYS) {
    let o = process.env[t];
    if (o === void 0) continue;
    if (BOOLEAN_ENV_KEYS.has(t)) {
      if (Ie(o)) e[t] = "1";
      continue;
    }
    if (o === "" && t !== "CLAUDE_SECURESTORAGE_CONFIG_DIR") continue;
    e[t] = o;
  }
  return e;
}
function Oi(e) {
  if (hasHostManagedAuth(process.env)) return {};
  let t = {};
  for (let o of BASE_URL_ENV_GROUPS) {
    if (
      !process.env[o.endpoint] ||
      (o.selection !== void 0 && !Ie(e[o.selection]))
    )
      continue;
    for (let r of [o.endpoint, ...o.companions]) {
      let s = process.env[r];
      if (s) t[r] = s;
    }
  }
  return t;
}
function Er(e) {
  return clipWithEllipsis(
    stripAnsi(e)
      .replace(/[\s\x00-\x1f\x7f-\x9f]+/g, " ")
      .trim(),
    200,
  );
}
var Fi = new Set([
  ...PROVIDER_CONFIG_ENV_VARS,
  "AWS_CONFIG_FILE",
  "AWS_SHARED_CREDENTIALS_FILE",
  "AWS_PROFILE",
  "AWS_REGION",
  "AWS_DEFAULT_REGION",
  "ANTHROPIC_BEDROCK_REGION_PREFIX",
  "GOOGLE_APPLICATION_CREDENTIALS",
  "GOOGLE_CLOUD_PROJECT",
  "GCLOUD_PROJECT",
  "CLAUDE_CONFIG_DIR",
]);
function $r(e) {
  return {
    name: e.agentType,
    description: e.whenToUse,
    initialPrompt: e.initialPrompt,
    color: e.color,
  };
}
var CLAUDE_AGENT_TEMPLATE = $r(CLAUDE_AGENT);
function resolveAgentTemplate(e, t) {
  if (!e?.agent) return CLAUDE_AGENT_TEMPLATE;
  let o = e.agent,
    r = o.toLowerCase(),
    s =
      t?.find((d) => d.name.toLowerCase() === r) ??
      t?.find((d) => d.name.toLowerCase().endsWith(`:${r}`));
  if (s) return s;
  let c = getBuiltInAgents().find((d) => d.agentType.toLowerCase() === r);
  if (c) return { ...CLAUDE_AGENT_TEMPLATE, name: c.agentType };
  if (o.includes(":")) return { ...CLAUDE_AGENT_TEMPLATE, name: o };
  return t ? CLAUDE_AGENT_TEMPLATE : { ...CLAUDE_AGENT_TEMPLATE, name: o };
}
async function listCustomAgents(e, t) {
  let { activeAgents: o } = await getAgentDefinitionsWithOverrides(e, t);
  return o.filter((r) => !isBuiltInAgent(r)).map($r);
}
async function findChildRepos(e) {
  let t;
  try {
    t = await xi(e, { withFileTypes: !0 });
  } catch {
    return {};
  }
  let o = t
      .filter(
        (s) =>
          (s.isDirectory() || s.isSymbolicLink()) &&
          !s.name.startsWith(".") &&
          !/\s/.test(s.name),
      )
      .map(async (s) => {
        let c = En(e, s.name);
        try {
          return (await Bi(En(c, ".git")), [s.name, c]);
        } catch {
          return null;
        }
      }),
    r = (await Promise.all(o)).filter((s) => s !== null);
  return Object.fromEntries(r);
}
async function materializePastedImages(e, t, o, r) {
  let s = parsePastedPlaceholders(e).filter((v) => t[v.id]?.type === "image");
  if (s.length === 0) return e;
  let c = getJobDir(o),
    d = (v) => {
      let E = (t[v.id].mediaType ?? "image/png").split("/")[1] || "png";
      return `pasted-${v.id}.${E}`;
    },
    _ = isHoverRestEnabled() && r !== void 0 && isValidPathSegment(o) && s.every((v) => isValidPathSegment(d(v)));
  await ensureJobDir(o, _ ? r : void 0);
  let p = e;
  for (let v = s.length - 1; v >= 0; v--) {
    let E = s[v],
      k = t[E.id],
      w = d(E),
      O = En(c, w);
    if (_) {
      let C = await r.write(STORAGE_KEYS.job(o, [w]), Buffer.from(k.content, "base64"), {
        publishDiscipline: "inPlace",
      });
      if (!C.ok) {
        let N = describeStorageError(C.error);
        throw (
          logForDebugging(`pasted-image write failed: ${N}`, { level: "error" }),
          Object.assign(
            new R(
              `pasted-image write failed: ${N}`,
              "pasted-image write failed",
            ),
            "telemetryCode" in C.error && C.error.telemetryCode !== void 0
              ? { code: C.error.telemetryCode }
              : {},
          )
        );
      }
    } else await Ni(O, k.content, { encoding: "base64" });
    p = p.slice(0, E.index) + O + p.slice(E.index + E.match.length);
  }
  return p;
}
function setDispatchExtraArgs(e) {
  Qe().setExtraArgs(e);
}
function getDispatchExtraArgs() {
  return Qe().extraArgs;
}
function formatDispatchDefaultFlags(e) {
  if (!e) return [];
  return [
    ...buildCarriableFlagPair("--model", e.model),
    ...buildCarriableFlagPair("--effort", e.effort),
    ...buildCarriableFlagPair(
      e.permissionModeInherited
        ? "--inherit-permission-mode"
        : "--permission-mode",
      e.permissionMode,
    ),
    ...(e.allowBypass ? ["--allow-dangerously-skip-permissions"] : []),
    ...buildCarriableFlagPair("--json-schema", e.jsonSchema),
    ...buildCarriableFlagPair("--append-system-prompt", e.appendSystemPrompt),
  ];
}
function dispatchAgentJob(e, t, o, r) {
  let s = o?.sessionId ?? Bt();
  return trackJobPromise(s.slice(0, 8), Li(e, t, { ...o, sessionId: s }, r));
}
async function Li(e, t, o, r) {
  let {
    sessionId: s,
    targetCwd: c,
    routine: d,
    defaults: _,
    displayIntent: p,
  } = o;
  if (d) {
    await waitForPolicyLimitsToLoad();
    let J = policyDeniedReason(ALLOW_ROUTINES_POLICY, "Routines", "are", ROUTINES_POLICY_DENIED_MESSAGE);
    if (J) return { ok: !1, error: J };
  }
  logForDebugging("[PERF:bg-dispatch-start]");
  let v = s.slice(0, 8),
    E = c ?? getCwd(),
    k = d ? buildCarriableFlagPair("--routine", d) : buildCarriableFlagPair("--agent", e.name),
    w = [...Qe().extraArgs, ...k, ...formatDispatchDefaultFlags(_)],
    O = getJobDir(v);
  try {
    (await ensureJobTmpDir(v, r),
      await writeStateAtomic(
        O,
        makeInitialState({
          template: d ? { name: d, description: "" } : e,
          routine: d,
          respawnFlags: w,
          intent: t,
          displayIntent: p,
          ...(d &&
            !t && {
              tempo: "idle",
              detail: "(idle \u2014 waiting for trigger)",
            }),
          providerEnv: callerProviderEnv(),
          sessionId: s,
          cwd: E,
          originCwd: E,
        }),
        r,
      ));
  } catch (J) {
    return (
      await Qt(O, { recursive: !0, force: !0 }).catch(() => {}),
      invalidateJobStateCache(O),
      logFeatureBad("fleet_view_dispatch", "state_write_failed", {
        errno: Jr(J) ?? S("unknown"),
      }),
      { ok: !1, error: `Couldn't create the job \u2014 ${l(J)}` }
    );
  }
  let C = [...w, ...(t ? ["--", t] : [])],
    N = Date.now(),
    T = await spawnBgSession(C, s, "fleet", E, void 0, void 0, void 0, r),
    D = !T.ok && (T.reason === "gate_blocked" || T.reason === "cwd_gone");
  if (!T.ok && !T.alive && T.reason === "ack_timeout" && Date.now() - N < 2000)
    (logForDebugging(`bg: dispatch fast-failed (${Date.now() - N}ms) \u2014 retrying once`, {
      level: "warn",
    }),
      await sleep(500),
      (T = await spawnBgSession(C, s, "fleet", E, void 0, void 0, void 0, r)));
  if (!T.ok) {
    if (T.alive)
      return (
        logFeatureSad("fleet_view_dispatch", "alive_collision"),
        { ok: !1, error: T.error, alive: !0 }
      );
    if (!D) await killJob(v, void 0, void 0, r).catch(() => {});
    return (
      await Qt(O, { recursive: !0, force: !0 }).catch(() => {}),
      invalidateJobStateCache(O),
      (Nr(T.reason) ? logFeatureSad : logFeatureBad)("fleet_view_dispatch", T.reason ?? "spawn_failed"),
      { ok: !1, error: T.error, reason: T.reason }
    );
  }
  if ((logForDebugging("[PERF:bg-dispatch-end]"), T.rescued))
    logFeatureSad("fleet_view_dispatch", "rescued");
  else logFeatureOk("fleet_view_dispatch");
  return { ok: !0, jobId: T.short, sessionId: s };
}
var ji = { name: "exec", description: "" };
function isAgentViewBashModeEnabled() {
  return !0;
}
function dispatchExecJob(e, t, o, r) {
  let s = t ?? Bt(),
    c = s.slice(0, 8),
    d = o ?? getCwd(),
    _ = getJobDir(c);
  return trackJobPromise(
    c,
    (async () => {
      try {
        (await ensureJobTmpDir(c, r),
          await writeStateAtomic(
            _,
            makeInitialState({
              template: ji,
              intent: e,
              providerEnv: callerProviderEnv(),
              sessionId: s,
              cwd: d,
              originCwd: d,
            }),
            r,
          ));
      } catch (v) {
        return (
          await Qt(_, { recursive: !0, force: !0 }).catch(() => {}),
          invalidateJobStateCache(_),
          logFeatureBad("fleet_view_dispatch_exec", "state_write_failed", {
            errno: Jr(v) ?? S("unknown"),
          }),
          { ok: !1, error: `Couldn't create the job \u2014 ${l(v)}` }
        );
      }
      let p = await spawnBgSession(
        [],
        s,
        "fleet",
        d,
        { intent: e, exec: e },
        void 0,
        void 0,
        r,
      );
      if (!p.ok) {
        if (p.alive)
          return (
            logFeatureSad("fleet_view_dispatch_exec", "alive_collision"),
            { ok: !1, error: p.error, alive: !0 }
          );
        return (
          await killJob(c, void 0, void 0, r).catch(() => {}),
          await Qt(_, { recursive: !0, force: !0 }).catch(() => {}),
          invalidateJobStateCache(_),
          (p.reason === "cwd_gone" ? logFeatureSad : logFeatureBad)(
            "fleet_view_dispatch_exec",
            p.reason ?? "spawn_failed",
          ),
          { ok: !1, error: p.error, reason: p.reason }
        );
      }
      return (
        logFeatureOk("fleet_view_dispatch_exec"),
        { ok: !0, jobId: p.short, sessionId: s }
      );
    })(),
  );
}
function areDefaultsEqual(e, t) {
  if (e === t) return !0;
  if (!e || !t) return !1;
  let o = new Set([...Object.keys(e), ...Object.keys(t)]);
  for (let r of o) {
    let s = r;
    if (e[s] !== t[s]) return !1;
  }
  return !0;
}
class xr {
  spare = null;
  ensuring = null;
  discarded = !1;
  #e = [];
  #t = ["--restricted"];
  get extraArgs() {
    return pv() ? this.#t : this.#e;
  }
  setExtraArgs(e) {
    ((this.#e = e),
      (this.#t = e.includes("--restricted") ? e : ["--restricted", ...e]));
  }
  markReady(e) {
    if (this.spare?.sessionId === e) this.spare.ready = !0;
  }
  take() {
    let e = this.spare;
    return ((this.spare = null), e);
  }
  async ensure(e, t, o, r, s) {
    if (t) this.discarded = !1;
    if (o !== void 0) {
      if (!this.spare && this.ensuring) await this.ensuring.catch(() => {});
      if (this.spare && !areDefaultsEqual(this.spare.defaults, o)) {
        logFeatureSad("job_spare_ensure", "defaults_mismatch_reboot");
        let _ = this.take();
        if (_) await deleteJob(_.jobId, { internal: !0 }, s).catch(() => {});
      }
    }
    if (this.spare || this.ensuring || this.discarded) return;
    if (isLowMemory()) {
      logFeatureSad("job_spare_ensure", "low_mem");
      return;
    }
    let c = Bt(),
      d = c.slice(0, 8);
    (logForDebugging(`[PERF:bg-spare-start] ${d}`),
      (this.ensuring = (async () => {
        try {
          let _ = await canonicalizePath(e, createHoverRestOptions(s)),
            p = r;
          if (p === void 0 && o?.agent)
            (clearAgentDefinitionsCache(), (p = await listCustomAgents(_, s).catch(() => [])));
          let v = resolveAgentTemplate(o, p).name,
            E = await spawnBgSession(
              [...this.extraArgs, ...buildCarriableFlagPair("--agent", v), ...formatDispatchDefaultFlags(o)],
              c,
              "spare",
              _,
              void 0,
              void 0,
              void 0,
              s,
            );
          if (!E.ok) {
            (await deleteJob(d, { internal: !0 }, s).catch(() => {}),
              (Nr(E.reason) ? logFeatureSad : logFeatureBad)(
                "job_spare_ensure",
                E.reason ?? "spawn_failed",
              ));
            return;
          }
          if (this.discarded) {
            (await deleteJob(d, { internal: !0 }, s),
              logFeatureSad("job_spare_ensure", "discarded_after_spawn"));
            return;
          }
          ((this.spare = {
            jobId: d,
            sessionId: c,
            cwd: _,
            ready: !1,
            defaults: o,
          }),
            logForDebugging(`[PERF:bg-spare-spawned] ${d}`),
            logFeatureOk("job_spare_ensure"));
        } catch {
          (await deleteJob(d, { internal: !0 }, s).catch(() => {}),
            logFeatureBad("job_spare_ensure", "threw"));
        }
      })()));
    try {
      await this.ensuring;
    } finally {
      this.ensuring = null;
    }
  }
  async discard(e) {
    if (((this.discarded = !0), this.ensuring))
      await this.ensuring.catch(() => {});
    let t = this.take();
    if (t) await deleteJob(t.jobId, { internal: !0 }, e);
  }
}
var Ui = new j(() => new xr());
function Qe() {
  return Ui.of(B().host);
}
function getSpareJob() {
  return Qe().spare;
}
function markSpareJobReady(e) {
  Qe().markReady(e);
}
function ensureSpareJob(e, t = !1, o, r, s) {
  return Qe().ensure(e, t, o, r, s);
}
async function claimSpareJob(e, t, o) {
  logForDebugging("[PERF:bg-claim-start]");
  let r = Qe().take(),
    s = t ?? resolveAgentTemplate(r?.defaults),
    c = async (_, p) => {
      if (
        (logForDebugging(`[bg-spare] claim miss (${_})${p ? `: ${p}` : ""}`),
        logEvent("tengu_bg_spare_claim_fail", { reason: fromEnum(_) }),
        r)
      ) {
        let v = await deleteJob(
          r.jobId,
          { internal: !0, knownGone: _ === "enojob" },
          o,
        );
        if (!v.removed)
          (logFeatureBad("job_claim_spare", "job_claim_spare_delete_failed"),
            logForDebugging(
              `[bg-spare] deleteJob unconfirmed (${v.error ?? "unknown"}) \u2014 cold-dispatching with fresh sessionId; spare ${r.jobId} dir preserved`,
              { level: "warn" },
            ));
        else logFeatureSad("job_claim_spare", _);
      } else logFeatureSad("job_claim_spare", _);
      return dispatchAgentJob(s, e, { targetCwd: r?.cwd, defaults: r?.defaults }, o);
    };
  if (!r) return c("no-spare");
  let d = applyReplyPatch(
    makeInitialState({
      template: s,
      respawnFlags: [
        ...Qe().extraArgs,
        ...buildCarriableFlagPair("--agent", s.name),
        ...formatDispatchDefaultFlags(r.defaults),
      ],
      intent: e,
      providerEnv: callerProviderEnv(),
      sessionId: r.sessionId,
      cwd: r.cwd,
      originCwd: r.cwd,
    }),
    e,
  );
  try {
    let _ = await replyToJob(r.jobId, e, void 0, d, void 0, o);
    if (_) return c(_.err === REPLY_ENOJOB_MSG ? "enojob" : "reply", _.err);
  } catch (_) {
    return c("reply-throw", l(_));
  }
  return (
    await writeStateAtomic(getJobDir(r.jobId), d, o).catch(logJobWriteError),
    logForDebugging("[PERF:bg-claim-end]"),
    logFeatureOk("job_claim_spare"),
    logFeatureOk("fleet_view_dispatch"),
    { ok: !0, jobId: r.jobId, sessionId: r.sessionId }
  );
}
function discardSpareJob(e) {
  return Qe().discard(e);
}
function Br(e, t) {
  return (
    e === t ||
    e.endsWith(`

${t}`)
  );
}
async function ot(e, t, o, r, s) {
  return writeStateAtomic(
    e,
    {
      ...t,
      queuedPrompt: !(s && t.queuedPrompt)
        ? o
        : Br(t.queuedPrompt, o)
          ? t.queuedPrompt
          : `${t.queuedPrompt}

${o}`,
      updatedAt: new Date().toISOString(),
    },
    r,
  ).then(
    () => !0,
    (c) => (logJobWriteError(c), !1),
  );
}
async function respawnJob(e, t, o) {
  let r = getJobDir(e),
    s = t?.knownState,
    c = pr(e);
  if (c) {
    logForDebugging(`bg: respawn of ${e} waiting on its in-flight spawn`);
    let X = await c;
    if ((invalidateJobStateCache(r), (s = void 0), !X.ok && !X.alive)) {
      logFeatureSad("job_respawn", "in_flight_spawn_failed");
      let ue = await readJobState(r, o),
        fe =
          !!t?.initialPrompt &&
          ue !== null &&
          (await ot(r, ue, t.initialPrompt, o, t.keepQueuedPrompt));
      return {
        ok: !1,
        alive: !1,
        state: ue ?? t?.knownState,
        queued: fe,
        error: X.error,
      };
    }
  }
  let d = s ?? (await readJobState(r, o));
  if (!d)
    return (
      logFeatureBad("job_respawn", "job_respawn_state_missing"),
      {
        ok: !1,
        error: "Can't respawn \u2014 that job's saved state is missing",
        alive: !1,
      }
    );
  let _ = d.daemonShort ?? e,
    p = Date.now(),
    v = await probeDaemonJob(_, o),
    E = Date.now() - p,
    k = v.alive;
  if (!t?.force && !t?.forceUnresponsive && k)
    return {
      ok: !1,
      alive: !0,
      short: _,
      state: d,
      error: `Session ${e} is already running`,
    };
  if (!t?.force && isExecLaunch(d)) {
    if (v.daemonUp && v.present)
      return {
        ok: !1,
        alive: !0,
        short: _,
        state: d,
        error: `Session ${e} has exited; attach shows the captured output`,
      };
    return (
      logFeatureSad("job_respawn", "exec_output_expired"),
      {
        ok: !1,
        alive: !1,
        state: d,
        error:
          "Output no longer available \u2014 this shell command has exited",
      }
    );
  }
  if (s) invalidateJobStateCache(r);
  let w = s ? ((await readJobState(r, o)) ?? d) : d,
    O = w.daemonShort ?? e,
    C = w.resumeSessionId !== void 0 && w.resumeSessionId !== w.sessionId,
    N = w.cliVersion !== void 0 || C,
    T = w.sessionIdTaken === !0 && !N,
    D = T
      ? Bt()
      : (w.resumeSessionId ?? (Xn(w.sessionId) !== null ? w.sessionId : Bt()));
  if (T)
    logForDebugging(
      `bg: respawn of ${e} \u2014 session id was taken by another conversation; starting under a fresh id`,
      { level: "warn" },
    );
  let J = Date.now(),
    te = 0,
    K = 0,
    ce = null,
    pe = null,
    be = createTranscriptSource(createBackendHandle(o)),
    ve = v.daemonUp && !v.alive && !v.present && O === _;
  if (ve) ((ce = killOrphanedWorker(O, o)), (pe = resolveJobTranscript(D, w.cwd, w.linkScanPath, void 0, be)));
  else {
    let X = await killJob(O, d, void 0, o);
    if (((te = Date.now() - J), k && !X.confirmed))
      return (
        logEvent("tengu_bg_respawn_unconfirmed_bail", {}),
        logFeatureSad("job_respawn", "job_respawn_kill_unconfirmed"),
        {
          ok: !1,
          alive: k,
          short: O,
          state: d,
          error:
            X.error ??
            "Couldn't stop the previous worker \u2014 supervisor may be starting, retry in a moment",
          errorCode: "kill_unconfirmed",
        }
      );
    let ue = Date.now(),
      fe = ue + 3000;
    while (Date.now() < fe) {
      if (!(await isDaemonJobPresent(O))) break;
      await sleep(100);
    }
    K = Date.now() - ue;
  }
  let je = Date.now(),
    de = await (pe ?? resolveJobTranscript(D, w.cwd, w.linkScanPath, void 0, be)),
    Re = Date.now() - je;
  if (ce) {
    let X = Date.now(),
      ue = await ce;
    if (((te = Date.now() - X), ue.anyMatch))
      de = await resolveJobTranscript(D, w.cwd, w.linkScanPath, void 0, be);
  }
  let De = de.hasMessages;
  if (de.via === "projectsScan")
    logEvent("tengu_bg_respawn_probe_rescue", { via: fromEnum(de.via) });
  if (!De) {
    if (
      w.bgIsolation === "none" &&
      D === w.sessionId &&
      !t?.force &&
      !t?.forceRefusalRetry
    ) {
      (logForDebugging(
        `bg: respawn of ${e} refused \u2014 fork handoff whose own transcript never materialized`,
        { level: "warn" },
      ),
        logEvent("tengu_bg_respawn_no_transcript", {
          via: fromEnum(de.via),
          had_link_scan_path: w.linkScanPath !== void 0,
          quarantined: !1,
          refused: !0,
        }),
        logFeatureSad("job_respawn", "fork_transcript_never_materialized"));
      let ue =
        !!t?.initialPrompt &&
        (await ot(r, w, t.initialPrompt, o, t.keepQueuedPrompt));
      return {
        ok: !1,
        alive: !1,
        state: w,
        queued: ue,
        errorCode: "fork_transcript_never_materialized",
        error: `This session has no saved transcript \u2014 it was stopped before its first response finished. If it was backgrounded from another conversation, that one is still intact; \`claude respawn ${e}\` starts this one fresh.`,
      };
    }
    if (w.deadEpochReapedAt !== void 0 && !t?.force && !C)
      return (
        logForDebugging(
          `bg: respawn of ${e} refused \u2014 dead-epoch row whose transcript is gone`,
          { level: "warn" },
        ),
        logEvent("tengu_bg_respawn_no_transcript", {
          via: fromEnum(de.via),
          had_link_scan_path: w.linkScanPath !== void 0,
          quarantined: !1,
          refused: !0,
        }),
        logFeatureSad("job_respawn", "dead_epoch_transcript_gone"),
        {
          ok: !1,
          alive: !1,
          state: w,
          errorCode: "dead_epoch_transcript_gone",
          error: `This session's saved conversation is no longer on disk (it ended while the background service was off, and old transcripts are cleaned up), so there is nothing to resume. \`claude rm ${e}\` deletes the row; \`claude respawn ${e}\` runs its original prompt again instead.`,
        }
      );
    let X = await quarantineJobTranscript(de.path, be);
    logEvent("tengu_bg_respawn_no_transcript", {
      via: fromEnum(de.via),
      had_link_scan_path: w.linkScanPath !== void 0,
      quarantined: X,
      refused: !1,
    });
  }
  let ge =
      d.template === "exec" && d.respawnFlags.length === 0 ? d.intent : void 0,
    He =
      w.name && (w.nameSource === "user" || w.nameSource === "collision")
        ? rewriteDispatchFlagValue(w.respawnFlags, "--name", "-n", w.name)
        : void 0,
    Ue = De && !ge;
  if (Ue) {
    let X = (await listLiveSessionHolders(D)).filter(
        (fe) => !(fe.jobId !== void 0 && (fe.jobId === e || fe.jobId === O)),
      ),
      ue = X.find((fe) => fe.kind === "interactive") ?? X[0];
    if (ue)
      return (
        logEvent("tengu_bg_respawn_resume_conflict", { holder_kind: fromEnum(ue.kind) }),
        logFeatureSad("job_respawn", "resume_session_live_elsewhere"),
        {
          ok: !1,
          alive: !1,
          state: w,
          queued:
            !!t?.initialPrompt &&
            (await ot(r, w, t.initialPrompt, o, t.keepQueuedPrompt)),
          error:
            ue.kind === "interactive"
              ? SESSION_LIVE_ELSEWHERE_MESSAGE
              : "This conversation is already open in another running Claude session \u2014 use that one, or close it and try again",
          errorCode: "resume_session_live_elsewhere",
        }
      );
  }
  let ze = stripEnvironmentFlags(He ?? w.respawnFlags),
    ye = ge
      ? []
      : ze.length > 0
        ? ze
        : d.routine
          ? buildCarriableFlagPair("--routine", d.routine)
          : d.template !== "bg"
            ? buildCarriableFlagPair("--agent", d.template)
            : [],
    Pe = ye.findIndex((X) => X === "--agent" || X.startsWith("--agent=")),
    Oe = Pe !== -1 && ye[Pe] === "--agent",
    Ke = Pe === -1 ? void 0 : Oe ? ye[Pe + 1] : ye[Pe].slice(8);
  if (!De && Ke) {
    let X = Ke;
    clearAgentDefinitionsCache();
    let ue = await listCustomAgents(w.cwd, o).catch(() => {
        return;
      }),
      fe = resolveAgentTemplate({ agent: X }, ue).name;
    if (fe !== X)
      ye = Oe
        ? ye.toSpliced(Pe, 2, ...buildCarriableFlagPair("--agent", fe))
        : ye.toSpliced(Pe, 1, ...buildCarriableFlagPair("--agent", fe));
  }
  let it = C,
    Ae = ge
      ? void 0
      : t?.keepQueuedPrompt && t.initialPrompt && w.queuedPrompt
        ? Br(w.queuedPrompt, t.initialPrompt)
          ? w.queuedPrompt
          : `${w.queuedPrompt}

${t.initialPrompt}`
        : (t?.initialPrompt ??
          w.queuedPrompt ??
          (De || it ? void 0 : d.intent));
  if (
    !ge &&
    Ae !== void 0 &&
    t?.initialPrompt === void 0 &&
    w.queuedPrompt === void 0
  )
    logEvent("tengu_resume_interrupted_turn", {
      surface: S("respawn_job"),
      kind: S("intent_replay"),
    });
  let Ne = [
      ...(Ue ? ["--resume", D] : []),
      ...(t?.replyOnResume && Ue && !Ae ? withReplyOnResumeFlag(ye) : ye),
      ...(Ae ? ["--", Ae] : []),
    ],
    Le = buildBridgeReattachEnv(
      w.bridgeSessionId,
      w.bridgeSessionSeq,
      w.bridgeOutboundOnly,
      w.bridgeSessionGroupingId,
      {
        ownerAccountUuid: w.bridgeOwnerAccountUuid,
        ownerOrganizationUuid: w.bridgeOwnerOrganizationUuid,
        noHistoryBackfill: w.bridgeNoHistoryBackfill,
      },
    );
  if (!t?.force && !t?.forceUnresponsive && d.state !== "stopped") {
    invalidateJobStateCache(r);
    let X = await readJobState(r, o);
    if (X?.state === "stopped")
      return (
        logForDebugging(
          `bg: respawn of ${e} bailed \u2014 job was stopped while the respawn was in flight`,
          { level: "warn" },
        ),
        logFeatureSad("job_respawn", "stopped_during_respawn"),
        {
          ok: !1,
          alive: !1,
          state: X,
          error: `Session ${e} was stopped while the respawn was in flight`,
        }
      );
  }
  let qe = Date.now(),
    ne;
  try {
    (await access(getHostManagedMarkerPath(e)), (ne = !0));
  } catch (X) {
    if (!W(X))
      return {
        ok: !1,
        alive: !1,
        state: d,
        error: `host-managed tombstone unreadable: ${l(X)}`,
      };
    ne = !1;
  }
  let { CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST: Ye, ...Ve } = d.providerEnv ?? {};
  if (ne) for (let X of Fi) delete Ve[X];
  let me = ne ? { ...Ve, CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST: "1" } : Ve,
    re = {
      ...(ge && { intent: ge, exec: ge }),
      ...(Ue && { resumeTranscriptPath: de.path }),
      ...(w.name && { name: w.name, nameSource: w.nameSource }),
      ...(d.bgIsolation === "none" && { bgIsolation: "none" }),
      providerEnv: me,
      ...(d.sessionPermissionRules && {
        sessionPermissionRules: d.sessionPermissionRules,
      }),
      ...(d.memoryToggledOff && { memoryToggledOff: !0 }),
      ...(d.forkSourceAlive && {
        forkSourceAlive: !0,
        ...(d.forkBoundaryAt && { forkBoundaryAt: d.forkBoundaryAt }),
        ...(d.forkSessionId && { forkSessionId: d.forkSessionId }),
        ...(d.forkParentSessionId && {
          forkParentSessionId: d.forkParentSessionId,
        }),
      }),
    },
    _e = await spawnBgSession(Ne, D, "fleet", w.cwd, re, Le, e, o);
  if (
    !_e.ok &&
    !_e.alive &&
    _e.reason === "ack_timeout" &&
    Date.now() - qe < 2000
  )
    (logForDebugging(
      `bg: respawn dispatch fast-failed (${Date.now() - qe}ms) \u2014 retrying once`,
      { level: "warn" },
    ),
      await sleep(500),
      (_e = await spawnBgSession(Ne, D, "fleet", w.cwd, re, Le, e, o)));
  let wt = Date.now() - qe,
    bt = Date.now() - p;
  if (
    (logForDebugging(
      `[PERF:respawn] ${e}: total=${bt}ms probe=${E}ms kill=${te}ms${ve ? " (ceremony skipped)" : ""} wait=${K}ms transcript=${Re}ms dispatch=${wt}ms ok=${_e.ok}`,
    ),
    logEvent("tengu_bg_respawn", {
      total_ms: bt,
      probe_ms: E,
      kill_ms: te,
      wait_ms: K,
      transcript_ms: Re,
      dispatch_ms: wt,
      skipped_kill: ve,
      daemon_up: v.daemonUp,
      was_present: v.present,
      forced:
        t?.force === !0 ||
        t?.forceRefusalRetry === !0 ||
        t?.forceUnresponsive === !0,
      ok: _e.ok,
    }),
    !_e.ok)
  ) {
    if (_e.alive) logFeatureSad("job_respawn", "already_alive");
    else if (_e.reason === "cwd_gone") logFeatureSad("job_respawn", "cwd_gone");
    else logFeatureBad("job_respawn", "job_respawn_spawn_failed");
    let X =
      !_e.alive && t?.initialPrompt
        ? await ot(r, w, t.initialPrompt, o, t.keepQueuedPrompt)
        : !1;
    return {
      ok: !1,
      error: _e.error,
      alive: _e.alive ?? !1,
      short: _e.short,
      state: d,
      queued: X,
    };
  }
  (logEvent("tengu_bg_agent_action", {
    action: S("respawn"),
    agent: d.template,
    wasSettled: isSettled(d),
    jobSessionId: sanitizeAnalyticsId(w.sessionId),
  }),
    invalidateJobStateCache(r));
  let Me = (await readJobState(r, o)) ?? w;
  if (Me.state === "failed" && Me.updatedAt > w.updatedAt) {
    if (
      (logFeatureSad("job_respawn", "crashed_during_spawn"),
      Me.reapedMidWorkAt !== void 0 ||
        Me.reapedUnsettledAt !== void 0 ||
        Me.deadEpochReapedAt !== void 0)
    ) {
      let X = {
        ...Me,
        reapedMidWorkAt: void 0,
        reapedUnsettledAt: void 0,
        deadEpochReapedAt: void 0,
      };
      return (
        await writeStateAtomic(r, X, o).catch(logJobWriteError),
        { ok: !0, short: _e.short, state: X }
      );
    }
    return { ok: !0, short: _e.short, state: Me };
  }
  let et = Ae ? applyReplyPatch(Me, Ae) : Me,
    Nt =
      He && w.name
        ? (rewriteDispatchFlagValue(Me.respawnFlags, "--name", "-n", w.name) ?? Me.respawnFlags)
        : void 0,
    st = w.state === "failed" || w.state === "stopped" || !!ge,
    At = {
      ...et,
      state: st ? "starting" : Ae && hasOutstandingAsk(w) ? "working" : w.state,
      reapedMidWorkAt: void 0,
      reapedUnsettledAt: void 0,
      deadEpochReapedAt: void 0,
      ...(Ae
        ? { inFlight: void 0 }
        : {
            ...(!st && w.tempo === "active"
              ? isTerminal(w.state) || w.routine
                ? { tempo: "idle" }
                : {
                    tempo: "blocked",
                    needs: IDLE_NEEDS,
                    ...(PRE_BOOT_STATES.includes(w.state) && { state: "working" }),
                  }
              : { tempo: st ? "idle" : w.tempo }),
            detail: st ? "" : w.detail,
            inFlight: { tasks: 0, queued: 0, kinds: [] },
          }),
      ...(De ? {} : { firstTerminalAt: null }),
      daemonShort: _e.short,
      ...(Nt && { respawnFlags: Nt }),
      queuedPrompt: void 0,
      ...(T && { sessionId: D, resumeSessionId: D }),
      sessionIdTaken: void 0,
      updatedAt: new Date().toISOString(),
      backend: "daemon",
    };
  return (
    await writeStateAtomic(r, At, o).catch(logJobWriteError),
    logFeatureOk("job_respawn"),
    { ok: !0, short: _e.short, state: At }
  );
}
function Nr(e) {
  return e === "gate_blocked" || e === "cwd_gone";
}
var RECAP_TRIGGER_FILE = "recap.trigger";
function Xi(e, t) {
  if (isHoverRestEnabled() && t !== void 0) {
    let o = STORAGE_KEYS.job(e, [RECAP_TRIGGER_FILE]);
    if (validateStorageKey(o) === void 0) {
      t.write(o, "", { publishDiscipline: "inPlace" }).catch(() => {});
      return;
    }
  }
  qi(Rn(getJobDir(e), RECAP_TRIGGER_FILE), "").catch(() => {});
}
async function killJob(e, t, o, r) {
  if (t?.backend === "peer") return { confirmed: !0 };
  let s = o?.handoff ? !0 : void 0,
    c = o?.evict ? !0 : void 0,
    d = o?.knownGone
      ? { ok: !1, code: "ENOJOB", error: "job already gone (caller-verified)" }
      : await controlRequest({ proto: BG_PROTO, op: "kill", short: e, handoff: s, evict: c });
  for (let _ = 0; !d.ok && d.code === "ESTARTING" && _ < 10; _++)
    (await sleep(200),
      (d = await controlRequest({
        proto: BG_PROTO,
        op: "kill",
        short: e,
        handoff: s,
        evict: c,
      })));
  if (d.ok) return { confirmed: !0 };
  if (d.code === "ENOJOB" || d.code === "ENOCONN" || d.code === "ETIMEOUT") {
    let _ = await killOrphanedWorker(e, r);
    if (_.anyMatch && d.code === "ENOJOB") return { confirmed: _.confirmed };
    let p = !1;
    if (d.code === "ENOCONN" || d.code === "ETIMEOUT") {
      let v;
      if (_.anyMatch) v = _.confirmed;
      else {
        let E = await readRoster({ silent: !0 }, r),
          k = E.workers[e];
        if (k !== void 0) {
          let w = await getProcessLiveness(k.pid, k.procStart);
          if (w === "zombie")
            if (
              k.procStart !== void 0 &&
              (await provenSameProcessAsync(k.pid, k.procStart)) === !0
            ) {
              try {
                process.kill(-k.pid, "SIGKILL");
              } catch {
                try {
                  process.kill(k.pid, "SIGKILL");
                } catch {}
              }
              v = !0;
            } else v = !1;
          else v = w !== "live";
        } else
          ((p =
            d.code === "ENOCONN" &&
            !_.scanFailed &&
            !E.parseFailed &&
            t?.state !== void 0 &&
            isSettled({ state: t.state, tempo: t.tempo })),
            (v = p));
      }
      if (c && v && d.code === "ENOCONN" && !p)
        await updateRoster((E) => {
          delete E.workers[e];
        }, r).catch((E) => logError(E));
      return { confirmed: v };
    }
    return { confirmed: !0 };
  }
  return { confirmed: !1, error: d.error };
}
async function killOrphanedWorker(e, t) {
  let o = await killPtySocket(getPtySocketPath(e)),
    r = !1,
    s = !0,
    c = !1,
    d = await listAllLiveSessions(t).catch(() => ((c = !0), []));
  for (let _ of d)
    if (_.kind === "bg" && (_.jobId === e || _.sessionId?.startsWith(e))) {
      if (((r = !0), !o))
        try {
          process.kill(_.pid, "SIGTERM");
        } catch {}
      let p = Date.now() + 3000,
        v = !0;
      while ((v = await isProcessConfirmedLive(_.pid, _.procStart)) && Date.now() < p)
        await sleep(100);
      if (v) {
        logEvent("tengu_bg_killjob_ctrl_fallback", { ctrlSent: o });
        try {
          process.kill(_.pid, "SIGTERM");
        } catch {}
        let E = Date.now() + 500;
        while ((v = await isProcessConfirmedLive(_.pid, _.procStart)) && Date.now() < E)
          await sleep(100);
      }
      if (v) s = !1;
    }
  return { confirmed: s, anyMatch: r, scanFailed: c };
}
async function listAliveDaemonJobs(e) {
  let t = await controlRequest({ proto: BG_PROTO, op: "list" });
  if (t.ok && t.op === "list")
    return {
      shorts: new Set(t.jobs.map((c) => c.short)),
      records: t.jobs.filter((c) => !c.outcome),
    };
  let o = await readRoster({ silent: !0 }, e),
    r = Object.entries(o.workers),
    s = await Promise.all(r.map(([, c]) => isProcessConfirmedLive(c.pid, c.procStart)));
  return {
    shorts: new Set(r.filter((c, d) => s[d]).map(([c]) => c)),
    records: [],
  };
}
async function probeDaemonJob(e, t) {
  let o = await controlRequest({ proto: BG_PROTO, op: "has", short: e });
  if (o.ok && o.op === "has")
    return { alive: o.alive, present: o.present ?? o.alive, daemonUp: !0 };
  let r = (await readRoster({ silent: !0 }, t)).workers[e],
    s = r !== void 0 && (await isProcessConfirmedLive(r.pid, r.procStart));
  return { alive: s, present: s, daemonUp: !1 };
}
async function isDaemonJobPresent(e) {
  let t = await controlRequest({ proto: BG_PROTO, op: "has", short: e });
  return t.ok && t.op === "has" ? (t.present ?? t.alive) : !1;
}
function applyReplyPatch(e, t) {
  return {
    ...e,
    ...(hasOutstandingAsk(e) && { state: "working" }),
    detail: clipWithEllipsis(redactSecretsFromText(t).replace(/\s+/g, " ").trim(), MAX_DETAIL_CHARS),
    tempo: "active",
    needs: void 0,
    block: void 0,
    suggestedReply: void 0,
    output: null,
    updatedAt: new Date().toISOString(),
  };
}
var REPLY_ENOJOB_MSG = "That session isn't running \u2014 respawn it first",
  REPLY_PEER_NO_SOCK_MSG = "Can't send \u2014 that session is running in another terminal";
function Gr() {
  return `Couldn't reach the ${bgSupervisorNoun()} \u2014 it may be restarting. Press Enter to retry`;
}
function isReplyDaemonRestartingMsg(e) {
  return e.startsWith(Gr());
}
var Fr =
  " \u2014 your message was saved and will be delivered when the session restarts";
async function Mr(e, t, o) {
  if (getDraftMode(t) !== "prompt") return !1;
  invalidateJobStateCache(e);
  let r = await readJobState(e, o);
  if (!r) return !1;
  if (r.queuedPrompt !== void 0) return r.queuedPrompt === t;
  return ot(e, r, t, o);
}
async function replyToJob(e, t, o, r, s, c) {
  let d = Date.now(),
    _ = (T, D) => {
      logEvent("tengu_bg_reply_outcome", {
        ms: Date.now() - d,
        outcome: fromEnum(T),
        error_code: fromEnumOpt(D),
      });
    };
  if (o?.backend === "peer") {
    if (!o.sock) return (logFeatureOk("job_reply"), _("ok"), { err: REPLY_PEER_NO_SOCK_MSG });
    try {
      return (await sendToUdsSocket(o.sock, t, c), logFeatureOk("job_reply"), _("ok"), null);
    } catch (T) {
      return (
        logFeatureBad("job_reply", "job_reply_peer_send_failed"),
        _("bad", "job_reply_peer_send_failed"),
        { err: `Couldn't send to that session \u2014 ${l(T)}` }
      );
    }
  }
  let p = getJobDir(e),
    v = r ?? (await readJobState(p, c)),
    E = await readControlKey(),
    k = () => controlRequest({ proto: BG_PROTO, op: "reply", short: e, text: t, auth: E }),
    w = await k(),
    O = 10;
  for (
    let T = 0;
    !w.ok &&
    (w.code === "ESTARTING" ||
      w.code === "ENOREPLY" ||
      w.code === "ERESPAWNING") &&
    T < O;
    T++
  ) {
    if (w.code === "ERESPAWNING") O = 60;
    (await sleep(200), (w = await k()));
  }
  if (!w.ok && w.code === "EAUTH") {
    let T = await readControlKey();
    if (T && T !== E) ((E = T), (w = await k()));
  }
  let C = !1;
  if (!w.ok && (w.code === "ENOCONN" || w.code === "ETIMEOUT")) {
    let T = await ensureDaemonRunning({ forceTransient: !0 }, c);
    if (((C = !T.ok), T.ok)) {
      ((E = (await readControlKey()) ?? E), (w = await k()));
      for (
        let D = 0;
        !w.ok && (w.code === "ESTARTING" || w.code === "ENOREPLY") && D < 10;
        D++
      )
        (await sleep(200), (w = await k()));
    }
  }
  if (w.ok) {
    if (v && !r) {
      invalidateJobStateCache(p);
      let T = (await readJobState(p, c)) ?? v,
        D = applyReplyPatch(T, t);
      if (D.queuedPrompt === t) D.queuedPrompt = void 0;
      writeStateAtomic(p, D, c).catch(logJobWriteError);
    }
    if (!r)
      (logEvent("tengu_bg_agent_action", {
        action: S("reply"),
        agent: v?.template ?? "unknown",
        wasTerminal: v ? isTerminal(v.state) : !1,
        daemon: !0,
        jobSessionId: sanitizeAnalyticsId(o?.sessionId ?? v?.sessionId),
        ...s?.(),
      }),
        logFeatureOk("job_reply"),
        _("ok"));
    return null;
  }
  if (w.code === "ENOJOB") {
    if (!r)
      (logFeatureSad("job_reply", "job_reply_not_running"),
        _("sad", "job_reply_not_running"));
    return { err: REPLY_ENOJOB_MSG, code: w.code };
  }
  if (w.code === "ENOCONN" || w.code === "ETIMEOUT") {
    if (!r && w.code === "ENOCONN") {
      let D = (await readRoster({ silent: !0 }, c)).workers[v?.daemonShort ?? e];
      if (D && !(await isProcessConfirmedLive(D.pid, D.procStart)))
        return (
          logFeatureSad("job_reply", "job_reply_not_running"),
          _("sad", "job_reply_not_running"),
          { err: REPLY_ENOJOB_MSG, code: "ENOJOB" }
        );
    }
    if (!r)
      (logFeatureBad("job_reply", "job_reply_daemon_unreachable", {
        errno: fromEnum(w.code),
        ensure_failed: C,
      }),
        _("bad", "job_reply_daemon_unreachable"));
    let T = !r && w.code === "ENOCONN" && !w.connected && (await Mr(p, t, c));
    return { err: Gr() + (T ? Fr : ""), code: w.code, queued: T };
  }
  if (!r)
    (logFeatureBad("job_reply", "job_reply_send_failed"),
      _("bad", "job_reply_send_failed"));
  let N = !r && (await Mr(p, t, c));
  return {
    err: `Couldn't send your message \u2014 ${w.error}` + (N ? Fr : ""),
    code: w.code,
    queued: N,
  };
}
async function Lr(e, t, o) {
  let r = await readJobStateAfterSettle(getJobDir(e), o);
  if (r === null)
    return (
      logFeatureOk("job_attach"),
      xe(t, "detached"),
      {
        kind: "error",
        ended: !0,
        msg: "That session was removed \u2014 back to the list",
      }
    );
  if (r.state === "done" || r.state === "stopped" || r.state === "blocked")
    return (
      logFeatureOk("job_attach"),
      xe(t, "detached"),
      {
        kind: "error",
        ended: !0,
        msg:
          r.state === "stopped"
            ? "That session was stopped \u2014 back to the list"
            : r.state === "blocked"
              ? "That session is blocked \u2014 back to the list"
              : "That session ended \u2014 back to the list",
      }
    );
  if (r.state === "failed") {
    if (r.detail === HOST_DIED_DETAIL || r.detail === HOST_DIED_EXEC_DETAIL)
      return (
        logFeatureBad("job_attach", "job_attach_host_dead"),
        xe(t, "error"),
        {
          kind: "error",
          msg:
            r.detail === HOST_DIED_EXEC_DETAIL ? HOST_DIED_EXEC_ATTACH_MESSAGE : `${HOST_DIED_ATTACH_MESSAGE} \u2014 press Enter to restart it`,
        }
      );
    let s = r.detail.includes("before init");
    return (
      logFeatureSad(
        "job_attach",
        s ? "job_attach_pre_init_crash" : "job_attach_crash_loop",
      ),
      {
        kind: "error",
        ended: !0,
        msg: `Session can't start \u2014 ${r.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || r.detail || "it crashed repeatedly"}`,
      }
    );
  }
  return;
}
async function attachJob(e, t = {}) {
  (Xi(e, t.storageV5), logForDebugging("[PERF:bg-attach-start]"), B0e());
  let o = RACED_SOCKET_GAP,
    r = TRANSIENT_ATTACH_CODE,
    s = {
      holdScreenOnDisconnect: !0,
      alreadyInAlt: t.alreadyInAlt,
      gateStdinUntilFirstFrame: t.gateStdinUntilFirstFrame,
    },
    c = { ...s, holdingFrame: !0, gateStdinUntilFirstFrame: !1 },
    d = t.gesture ?? { gestureId: Hi(), attempt: 0, interactive: {} },
    _ = !t.alreadyInAlt,
    p = await rt(e, {
      ...s,
      telemetry: {
        gestureId: d.gestureId,
        attempt: ++d.attempt,
        t0: d.t0,
        surface: d.surface,
        daemonBooted: d.daemonBooted,
        interactive: d.interactive,
        storageV5: t.storageV5,
      },
    }),
    v;
  if (p.outcome === "error" && p.msg && o.test(p.msg)) {
    if (((v = await ensureDaemonRunning({ forceTransient: !0 }, t.storageV5)), v.ok))
      p = await rt(e, {
        ...s,
        telemetry: {
          gestureId: d.gestureId,
          attempt: ++d.attempt,
          t0: d.t0,
          surface: d.surface,
          daemonBooted: d.daemonBooted,
          interactive: d.interactive,
          storageV5: t.storageV5,
        },
      });
  }
  for (let k = 0; p.msg && r.test(p.msg) && k < 20; k++)
    (await sleep(500),
      (p = await rt(e, {
        ...s,
        telemetry: {
          gestureId: d.gestureId,
          attempt: ++d.attempt,
          t0: d.t0,
          surface: d.surface,
          daemonBooted: d.daemonBooted,
          interactive: d.interactive,
          storageV5: t.storageV5,
        },
      })));
  let E = async () => {
    if (_) process.stdout.write(uF());
    let k = await Lr(e, d, t.storageV5);
    if (k) return k;
    return (
      logFeatureSad("job_attach", "job_attach_crashed"),
      {
        kind: "error",
        orphaned: !0,
        msg: "Session crashed \u2014 press Enter to respawn",
      }
    );
  };
  while (p.outcome === "disconnected") {
    let w = Math.max(1, (process.stdout.columns ?? 80) - 15);
    process.stdout.write(
      `\x1B7${cursorToPosition(1, w)}\x1B[2;7m${" Reconnecting\u2026 "}\x1B[0m\x1B8`,
    );
    let O;
    if (process.stdin.isTTY) {
      let T = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : !1;
      if (!T) trySetRawMode(process.stdin, !0);
      let D = dr(process.stdin);
      try {
        O = await Promise.race([
          ensureDaemonRunning({ forceTransient: !0 }, t.storageV5),
          D.promise.then(() => "detach"),
        ]);
      } finally {
        if ((D.cancel(), !T)) trySetRawMode(process.stdin, !1);
      }
    } else O = await ensureDaemonRunning({ forceTransient: !0 }, t.storageV5);
    if (O === "detach") {
      if (_) process.stdout.write(uF());
      return (
        logForDebugging("[PERF:bg-attach-end]"),
        logFeatureOk("job_attach"),
        xe(d, "detached"),
        { kind: "detached" }
      );
    }
    let C = O;
    if (!C.ok) {
      if (_) process.stdout.write(uF());
      return (
        logFeatureBad("job_attach", `job_attach_daemon_start_failed_${C.causeCode}`),
        xe(d, "error"),
        {
          kind: "error",
          msg: `Couldn't restart the ${bgSupervisorNoun()} \u2014 ${C.reason}`,
        }
      );
    }
    let N = B0e();
    if (N && $t(N)) {
      if (_) process.stdout.write(uF());
      return (
        logForDebugging("[PERF:bg-attach-end]"),
        logFeatureOk("job_attach"),
        xe(d, "detached"),
        { kind: "detached" }
      );
    }
    if (await Ot(e))
      return (
        logForDebugging(
          `[bg-attach] worker gone on reconnect probe short=${e} \u2014 settled while attached`,
        ),
        E()
      );
    p = await rt(e, {
      ...c,
      telemetry: {
        gestureId: d.gestureId,
        attempt: ++d.attempt,
        t0: d.t0,
        surface: d.surface,
        daemonBooted: d.daemonBooted,
        interactive: d.interactive,
        storageV5: t.storageV5,
      },
    });
    for (let T = 0; p.msg && r.test(p.msg) && T < 10; T++)
      (await sleep(200),
        (p = await rt(e, {
          ...c,
          telemetry: {
            gestureId: d.gestureId,
            attempt: ++d.attempt,
            t0: d.t0,
            surface: d.surface,
            daemonBooted: d.daemonBooted,
            interactive: d.interactive,
            storageV5: t.storageV5,
          },
        })));
    if (p.msg?.includes("ENOJOB"))
      return (
        logForDebugging(
          `[bg-attach] ENOJOB on reconnect short=${e} \u2014 daemon has no handle (or it's killing/settled)`,
        ),
        E()
      );
    if (p.outcome === "error" && _) process.stdout.write(uF());
  }
  if (p.outcome === "detached" && p.msg && (FATAL_ATTACH_CODE.test(p.msg) || r.test(p.msg))) {
    if (_) process.stdout.write(uF());
    return (
      logFeatureBad("job_attach", "job_attach_stalled"),
      {
        kind: "error",
        msg: p.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, ""),
      }
    );
  }
  if (p.outcome === "error") {
    if (p.msg?.startsWith(`${HOST_DEAD_ATTACH_CODE}:`)) {
      logFeatureBad("job_attach", "job_attach_host_dead");
      let w = await readJobState(getJobDir(e), t.storageV5).catch(() => null),
        O = p.msg.slice(HOST_DEAD_ATTACH_CODE.length + 1).trim();
      return {
        kind: "error",
        msg: w !== null && isExecLaunch(w) ? O : `${O} \u2014 press Enter to restart it`,
      };
    }
    if (p.msg?.startsWith(`${It}:`)) {
      logFeatureBad("job_attach", "job_attach_no_response");
      let w = await readJobState(getJobDir(e), t.storageV5).catch(() => null);
      if (w !== null && isExecLaunch(w))
        return {
          kind: "error",
          msg: `${gt} \u2014 it runs a shell command, which is never run again for you; ctrl+x stops it`,
        };
      return {
        kind: "error",
        notResponding: !0,
        msg: `${gt} \u2014 press Enter again to restart it (the conversation is saved)`,
      };
    }
    if (p.msg?.includes("ENOJOB")) {
      logForDebugging(
        `[bg-attach] ENOJOB on first attach short=${e} \u2014 daemon has no handle (or it's killing/settled)`,
      );
      let w = await Lr(e, void 0, t.storageV5);
      if (w) return w;
      return (
        logFeatureSad("job_attach", "job_attach_orphaned"),
        {
          kind: "error",
          orphaned: !0,
          msg: `${bgSupervisorNounCap()} lost track of this job \u2014 press Enter to respawn it`,
        }
      );
    }
    if (v && !v.ok)
      return (
        logFeatureBad("job_attach", `job_attach_daemon_start_failed_${v.causeCode}`),
        xe(d, "error"),
        { kind: "error", msg: `Couldn't start the ${bgSupervisorNoun()} \u2014 ${v.reason}` }
      );
    let k =
      p.msg && r.test(p.msg)
        ? `${bgSupervisorNounCap()} is still starting \u2014 try again in a moment`
        : p.msg && o.test(p.msg)
          ? `${bgSupervisorNounCap()} didn't respond after starting \u2014 try again in a moment`
          : p.msg
            ? `Couldn't attach \u2014 ${p.msg}`
            : "Couldn't attach to that session";
    return (logFeatureBad("job_attach", "job_attach_failed"), { kind: "error", msg: k });
  }
  if ((logForDebugging("[PERF:bg-attach-end]"), logFeatureOk("job_attach"), p.msg && KICKED_ATTACH_CODE.test(p.msg)))
    return { kind: "detached", msg: p.msg.replace(KICKED_ATTACH_CODE, "") };
  return { kind: "detached" };
}
var Zi = {
    dirty: "has uncommitted changes",
    unpushed: "has commits that are not pushed anywhere",
    unpushed_shared:
      "has commits that are not pushed anywhere and is also recorded by another finished session",
    in_use: "is claimed by another running job",
    live_lock:
      "is locked \u2014 in use by another live session, or locked by hand",
    occupied: "is the working directory of a live Claude Code session",
    remove_failed: "could not be removed",
    unverified: `${UNVERIFIED_WORKTREE_SUMMARY} \u2014 remove the directory manually, or delete from the agents view to discard it`,
    shared_record:
      "is also recorded by another finished session \u2014 its files may be that session's work",
    identity_changed:
      "could not be verified \u2014 its resolution changed while being checked; retry the delete (a settled path re-verifies cleanly)",
    records_unreadable:
      "could not be verified against other sessions' records \u2014 a sibling record was unreadable; retry, or inspect ~/.claude/jobs",
  },
  Kr = 32,
  WORKTREE_DIGEST_PATTERN = new RegExp(`^[0-9a-f]{${Kr}}$`);
function Qi(e) {
  return hashSha256(e).slice(0, Kr);
}
function formatKeptWorktreeLabel(e, t) {
  let o = Zi[e ?? "remove_failed"],
    r = t ? normalizeWhitespace(t) : "";
  if (!r) return o;
  let s = r.length <= 120 ? r : `${truncateToCodeUnits(r, 40)}\u2026${takeLastCodeUnits(r, 79)}`;
  return `${o} (${s})`;
}
async function deleteJob(e, t = {}, o) {
  let r = await readJobState(getJobDir(e), o),
    s = r?.worktreePath ? await listAllLiveSessions(o).catch(() => []) : [],
    c = new Set();
  for (let E of s)
    if (E.kind === "bg" && (E.jobId === e || E.sessionId?.startsWith(e)))
      c.add(E.pid);
  let d = await killJob(
    e,
    r ?? void 0,
    { knownGone: t.knownGone, evict: !0 },
    o,
  ).catch((E) => ({ confirmed: !1, error: l(E) }));
  if (!d.confirmed) {
    if (
      (logForDebugging(
        `deleteJob: kill unconfirmed for ${e} \u2014 skipping jobdir/worktree removal to avoid stranding a live worker`,
        { level: "warn" },
      ),
      !t.internal)
    )
      logFeatureBad("job_delete", "kill_unconfirmed", {
        had_worktree: Boolean(r?.worktreePath),
      });
    return { removed: !1, error: d.error, errorCode: "kill_unconfirmed" };
  }
  let _,
    p = !1;
  if (r?.worktreePath) {
    let E = r.worktreePath,
      k,
      w = null,
      O = "present",
      C = !1,
      N,
      T,
      D,
      { dirty: J, gitError: te } = await getAgentWorktreeChanges(E, void 0, {
        hookBased: r.worktreeHookBased,
      }),
      K = resolveWorktreeCleanupRoot(E, r.originCwd) ?? void 0,
      ce = await realpath(E).catch(() => E),
      pe = Qi(ce);
    p =
      t.discardUnpushed !== void 0 &&
      !te &&
      t.discardUnpushed.worktreeDigest === pe &&
      (await un(ce, t.discardUnpushed.headSha));
    let be = t.force === !0 || p,
      ve = !te && K ? await listRegisteredWorktrees(K).catch(() => null) : null,
      je;
    for (let Re of ve ?? [])
      if ((await realpath(Re.worktreePath).catch(() => Re.worktreePath)) === ce) {
        je = Re;
        break;
      }
    let de = claudeWorktreeLockPid(je?.lockReason);
    if (await Vi(e, ce, E, o))
      ((k = "in_use"),
        logForDebugging(
          `deleteJob: ${E} is claimed by another running job's state.json \u2014 not ours to remove`,
          { level: "warn" },
        ));
    else if (
      ((C = (await findGitRootVerifyingPositive(E)) === null) || p) &&
      (O = await Ur(E)) !== "gone" &&
      (w =
        O === "unreadable"
          ? "unreadable"
          : await Hr(e, ce, E, { includeUnsettled: p }, o)) !== null
    ) {
      if (w === "claimed" && !C)
        ((k = "unpushed_shared"),
          (T = await qt(E).catch(() => {
            return;
          })));
      else k = w === "claimed" ? "shared_record" : "records_unreadable";
      logForDebugging(
        w === "claimed"
          ? `deleteJob: ${E} is also recorded by another settled job's state.json \u2014 not removing another session's output`
          : `deleteJob: could not verify ${E} against sibling records \u2014 refusing until records are readable`,
        { level: "warn" },
      );
    } else if (!(await mayReleaseWorktreeLock(je?.lockReason)) && !(de !== null && c.has(de)))
      ((k = "live_lock"),
        logForDebugging(
          `deleteJob: ${E} is locked by a live Claude Code process, or with a reason we did not write (${je?.lockReason}) \u2014 not ours to remove`,
          { level: "warn" },
        ));
    else if (
      (D = await es(s, e, c, ce, E)) !== void 0 &&
      (await Ur(E)) !== "gone"
    )
      ((k = "occupied"),
        (N =
          D.pid === process.pid
            ? `${typeof D.parkedJobId === "string" && SHORT_RE.test(D.parkedJobId) ? `session ${D.parkedJobId},` : "a session"} moved to the background from this window, pid ${D.pid}`
            : D.kind === "bg" && typeof D.jobId === "string" && SHORT_RE.test(D.jobId)
              ? `background session ${D.jobId}, pid ${D.pid}`
              : `pid ${D.pid}, ${D.kind}`),
        logForDebugging(
          `deleteJob: ${E} is the working directory of a live session (pid ${D.pid}, ${D.kind}) \u2014 not ours to remove`,
          { level: "warn" },
        ));
    else if (J && !te && !be)
      ((k = "dirty"),
        logForDebugging(`deleteJob: worktree has uncommitted changes, kept ${E}`, {
          level: "warn",
        }));
    else if (
      !te &&
      K &&
      !p &&
      !(await passesCommitSafetyChecks(E, await getDefaultRemoteRef(K), { primaryCheckoutVouches: !0 }))
    ) {
      if ((await Hr(e, ce, E, { includeUnsettled: !1 }, o)) === "claimed")
        ((k = "unpushed_shared"),
          logForDebugging(
            `deleteJob: ${E} has unpushed commits and is also recorded by another settled job's state.json \u2014 not offering a discard`,
            { level: "warn" },
          ));
      else
        ((k = "unpushed"),
          logForDebugging(`deleteJob: ${E} has commits that are on no remote, kept`, {
            level: "warn",
          }));
      T = await qt(E).catch(() => {
        return;
      });
    } else if (
      p &&
      t.discardUnpushed !== void 0 &&
      !(await un(ce, t.discardUnpushed.headSha))
    )
      ((k = "unpushed"),
        logForDebugging(`deleteJob: ${E} HEAD moved past the confirmed discard pin, kept`, {
          level: "warn",
        }),
        (T = await qt(E).catch(() => {
          return;
        })));
    else {
      let Re = resolveWorktreeCleanupRoot(E, r.originCwd) ?? void 0,
        De = (r.originCwd ? findGitRoot(r.originCwd) : null) ?? void 0,
        ge = await removeAgentWorktree(
          E,
          r.worktreeBranch,
          Re,
          r.worktreeHookBased,
          be ? "job_delete_force" : "job_delete",
          ce,
          De,
          { storageV5: o },
        ).catch(
          (He) => (
            logForDebugging(`deleteJob: removeAgentWorktree threw for ${E}: ${l(He)}`, {
              level: "error",
            }),
            { outcome: "failed", errorSummary: l(He) }
          ),
        );
      if (ge.outcome === "failed")
        ((k = ge.needsForce
          ? "unverified"
          : ge.errorSummary === IDENTITY_CHANGED_SUMMARY
            ? "identity_changed"
            : "remove_failed"),
          (N = ge.needsForce ? void 0 : ge.errorSummary));
      else if (ge.outcome === "left_in_place") _ = normalizeWhitespace(E);
    }
    if (k) {
      if (!t.internal)
        logFeatureSad("job_delete", `worktree_kept_${k}`, { had_worktree: !0 });
      return {
        removed: !1,
        keptWorktree: normalizeWhitespace(stripAnsiAndControlChars(ce)),
        keptReason: k,
        ...(N !== void 0 && { keptErrorSummary: N }),
        ...(T !== void 0 && { keptUnpushed: T }),
        ...(k === "unpushed" &&
          T !== void 0 && {
            discardUnpushed: { headSha: T.headSha, worktreeDigest: pe },
          }),
      };
    }
  }
  let v = r?.fan?.some((E) => E.kind === "shell" && E.doneAt === void 0) ?? !1;
  await Fn(getJobDir(e), { waitMs: v ? 4000 : 0 });
  try {
    await Ji(getJobDir(e), { recursive: !0, force: !0 });
  } catch (E) {
    if (
      (invalidateJobStateCache(getJobDir(e)),
      logForDebugging(`deleteJob: failed to remove job dir for ${e}: ${l(E)}`, {
        level: "warn",
      }),
      !t.internal)
    )
      logFeatureBad("job_delete", "jobdir_rm_failed", {
        had_worktree: Boolean(r?.worktreePath),
      });
    return {
      removed: !1,
      error: `couldn't remove the session's state directory (${normalizeWhitespace(l(E))})`,
      errorCode: "jobdir_rm_failed",
    };
  }
  if (isHoverRestEnabled() && o !== void 0 && validateStorageKey(getHostManagedMarkerKey(e)) === void 0) await deleteHostManagedMarker(o, e);
  else await Ki(getHostManagedMarkerPath(e)).catch(() => {});
  if ((invalidateJobStateCache(getJobDir(e)), !t.internal))
    if (_)
      logFeatureSad("job_delete", "worktree_left_in_place", {
        had_worktree: !0,
        discard_confirmed: p,
      });
    else
      logFeatureOk("job_delete", {
        had_worktree: Boolean(r?.worktreePath),
        discard_confirmed: p,
      });
  return { removed: !0, discardConfirmed: p, ...(_ && { leftWorktreeDir: _ }) };
}
async function Vi(e, t, o, r) {
  for (let s of await listJobs(void 0, r).catch(() => [])) {
    if (s.id === e || !s.state.worktreePath || isSettled(s.state)) continue;
    let c = Yr(s.state.worktreePath, t, o);
    if (c === "match") return !0;
    if (c === "unverifiable") return !0;
    let d = await zr(s.state.worktreePath, o);
    if (vt(d, t)) return !0;
  }
  return !1;
}
function Yr(e, t, o) {
  if (vt(e, o) || vt(e, t)) return "match";
  if (!pl(e)) return "no_match";
  let r = normalize(e);
  if (vt(r, o) || vt(r, t)) return "match";
  return isAbsolute(e) && !An(e) && !li(e) ? "unverifiable" : "no_match";
}
function vt(e, t) {
  return Vt(e) === Vt(t);
}
function Vt(e) {
  return normalizePathForComparison(zn(e));
}
function jr(e, t) {
  let o = relative(Vt(t), Vt(e));
  return o.split(/[/\\]/, 1)[0] !== ".." && !isAbsolute(o);
}
async function Ur(e) {
  return Wr(e).then(
    () => "present",
    (t) => (W(t) || A(t) === "ENOTDIR" ? "gone" : "unreadable"),
  );
}
async function es(e, t, o, r, s) {
  for (let c of e) {
    if (c.kind !== "interactive" && c.kind !== "bg") continue;
    if (o.has(c.pid) || c.parkedJobId === t) continue;
    if (c.pid === process.pid && c.parkedJobId === void 0) continue;
    let d = c.pid === process.pid ? he() : c.cwd;
    if (typeof d !== "string" || !isAbsolute(d)) continue;
    if (!jr(d, r) && !jr(d, s)) continue;
    if (c.kind === "bg" && typeof c.jobId === "string" && SHORT_RE.test(c.jobId)) {
      if ((await Xr(getJobDir(c.jobId))) === "missing") continue;
    }
    return c;
  }
  return;
}
function zr(e, t) {
  let o = getCwd();
  if (!isAbsolute(e) || pl(e) || (ac(e, o) && ac(e, t))) return e;
  let r = resolveSymlinkTargetSync(getFsSurface(), e, { surfaceNetworkRaw: !0, anchors: [o, t] });
  if (r === UNVERIFIED_ANCESTRY_SENTINEL) return e;
  if (r !== void 0 && (pl(r) || (ac(r, o) && ac(r, t)))) return e;
  return realpath(e).catch(() => e);
}
async function Xr(e) {
  return Wr(Rn(e, "state.json")).then(
    () => "present",
    (t) => (W(t) ? "missing" : "unreadable"),
  );
}
async function Hr(e, t, o, { includeUnsettled: r }, s) {
  let c;
  try {
    c = await Gi(getJobsDir(), { withFileTypes: !0 });
  } catch (d) {
    return W(d) ? null : "unreadable";
  }
  for (let d of c) {
    if (!d.isDirectory() || d.name === e) continue;
    let _ = Rn(getJobsDir(), d.name),
      p = await readJobState(_, s);
    if (p === null) {
      if ((await Xr(_)) === "missing") continue;
      return "unreadable";
    }
    if (!p.worktreePath || (!r && !isSettled(p))) continue;
    let v = Yr(p.worktreePath, t, o);
    if (v === "match") return "claimed";
    if (v === "unverifiable") return "unreadable";
    let E = await zr(p.worktreePath, o);
    if (vt(E, t)) return "claimed";
  }
  return null;
}
export {
  claimAttachBeacon,
  releaseAttachBeacon,
  trackJobPromise,
  formatUnpushedCommitsSummary,
  formatUnpushedCommitsDetail,
  RECAP_TRIGGER_FILE,
  killJob,
  killOrphanedWorker,
  listAliveDaemonJobs,
  probeDaemonJob,
  isDaemonJobPresent,
  applyReplyPatch,
  REPLY_ENOJOB_MSG,
  REPLY_PEER_NO_SOCK_MSG,
  isReplyDaemonRestartingMsg,
  replyToJob,
  attachJob,
  WORKTREE_DIGEST_PATTERN,
  formatKeptWorktreeLabel,
  deleteJob,
  CLAUDE_AGENT_TEMPLATE,
  resolveAgentTemplate,
  listCustomAgents,
  findChildRepos,
  materializePastedImages,
  setDispatchExtraArgs,
  getDispatchExtraArgs,
  formatDispatchDefaultFlags,
  dispatchAgentJob,
  isAgentViewBashModeEnabled,
  dispatchExecJob,
  areDefaultsEqual,
  getSpareJob,
  markSpareJobReady,
  ensureSpareJob,
  claimSpareJob,
  discardSpareJob,
  respawnJob,
  preSeedReplBgJob,
  spawnBgSession,
  handleBgFlag,
  formatBgHints,
  logsHandler,
  attachHandler,
  respawnHandler,
  stopHandler,
  rmHandler,
  rewriteDispatchFlagValue,
  stripResumeFlags,
  callerProviderEnv,
};

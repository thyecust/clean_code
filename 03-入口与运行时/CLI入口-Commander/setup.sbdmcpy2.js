// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 182 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { isSimpleMode, isSafeMode } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a, udsEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { identity as _m, j, B, K, $p, sn, ES, o_e, ke, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { ud, l, Jr } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, Yu, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { setBgExitCause } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { getCurrentWorktreeSession, isBgSession, getBgJobDir, prefetchApiKeyFromApiKeyHelperIfSafe, onGrowthBookRefresh, getFeatureValue_CACHED_MAY_BE_STALE, checkHasTrustDialogAccepted, saveGlobalConfig, getGlobalConfig, getCurrentProjectConfig } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { findCanonicalGitRoot, isLinkedWorktree, getIsGit } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { sanitizeAnalyticsId, profileCheckpoint } from "./startup-profiler.js";
import { getSettingsForSource, getSettings_DEPRECATED } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { _setProxyAuthHelperConfig, prefetchProxyAuthFromHelperIfSafe } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { isExiting } from "../../01-核心基础设施/共享小工具-未细化/exit-commit-state.js";
import {
  markOwnsControllingTerminal,
  isShuttingDown,
  hasWorktreeCreateHook,
  initializeFileWatcherHooks,
  setSessionCwd,
  evaluateWorktreePin,
  resolveGitRootCandidates,
  validateWorktreeSlug,
  restoreWorktreeSession,
  generateTmuxSessionName,
  isAgentWorktreeOf,
  worktreeBranchName,
  readWorktreeBaseline,
  createTmuxSessionForWorktree,
  killTmuxSession,
  claudeWorktreeLockPid,
  readWorktreeLockReason,
  lockClaudeWorktree,
  createWorktreeForSession,
  shouldFillPluginLoadWithStore,
  loadAllPluginsCacheOnly,
  saveWorktreeState,
  clearCurrentSessionMemoryFiles,
  warmCommandSourceCaches,
} from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { captureHooksConfigSnapshot, updateHooksConfigSnapshot, updateHooksConfigSnapshotThroughBackend } from "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import { primePlanSlugCollisions, getPlanSlug, getPlansDirectory } from "../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { prefetchTmuxOptionProbes } from "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { recordStartupPhase } from "../../01-核心基础设施/遥测-OpenTelemetry/startup-timing-telemetry.js";
import { isAgentSwarmsEnabled, captureTeammateModeSnapshotIfEnabled } from "../../02-功能模块/Teammates团队/agent-swarms-enablement.js";
import { hw, NYn } from "../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { publishInboundAvailability } from "../../02-功能模块/权限系统/cross-session-inbound-gate.js";
import { o$n } from "../../02-功能模块/发布日志-Changelog/发布日志-Changelog.2nyyps5n.js";
import "../../01-核心基础设施/共享小工具-未细化/analytics-event-sink.js";
import "../../02-功能模块/MCP客户端/error-log-sink.js";
import { initSinks } from "../../01-核心基础设施/共享小工具-未细化/init-sinks.js";
import { loadCustomThemes } from "../../02-功能模块/状态栏-主题/custom-themes.js";
import "../../02-功能模块/自动更新-安装/chunk-brx72pf1.js";
import { q4 } from "../../02-功能模块/自动更新-安装/chunk-2g5h49pk.js";
import { flushAnalyticsSinks } from "../../01-核心基础设施/共享小工具-未细化/chunk-p7jm635c.js";
import { yOt } from "../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function X(e, o) {
  let r = !1,
    c = onGrowthBookRefresh(() => {
      if (r || isShuttingDown() || Nn() || !isCrossSessionMessagingEnabled()) return;
      return ((r = !0), c(), se(e, o));
    });
  return (Et(async () => c()), c);
}
async function se(e, o) {
  let r = await import("../../02-功能模块/Bridge-RemoteControl/validateExplicitMessagingSocketPath.knbv811d.js"),
    c;
  try {
    c = await r.startCrossSessionInbox(e, o);
  } catch (k) {
    if (k instanceof ud)
      n(`[uds-messaging] Late bind refused: ${k.message}`, { level: "warn" });
    else logError(k);
    logFeatureBad(
      "agents_cross_session_inbox",
      `${r.getUdsStartFailureCause() ?? "bind_failed"}_late`,
    );
    return;
  }
  if (!c) {
    logFeatureBad(
      "agents_cross_session_inbox",
      `${r.getUdsStartFailureCause() ?? "bind_failed"}_late`,
    );
    return;
  }
  if (isExiting()) {
    (await c(),
      n(
        "[uds-messaging] Late bind landed during shutdown \u2014 torn down, not published",
      ),
      logFeatureSad("agents_cross_session_inbox", "shutdown_discarded"));
    return;
  }
  (n(
    "[uds-messaging] Late bind: gate enabled by a GrowthBook refresh after startup",
  ),
    publishInboundAvailability());
  let m = r.getUdsStartDegradedCause();
  if (m) logFeatureSad("agents_cross_session_inbox", m, { bind_late: !0 });
  else logFeatureOk("agents_cross_session_inbox", { bind_late: !0 });
  let { updateSessionMessagingSocketPath: _ } =
      await import("../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    S = r.getUdsMessagingSocketPath();
  if (S !== void 0) await _(S, o);
}
import { constants } from "fs";
import { open as ne } from "fs/promises";
import { isatty } from "tty";
async function W() {
  try {
    return (await (await ne("/dev/tty", constants.O_RDWR | constants.O_NOCTTY)).close(), !0);
  } catch {
    return !1;
  }
}
async function J() {
  if (getCurrentPlatform() === "windows") return "unsupported";
  if (!isatty(0) || !isatty(1) || !isatty(2)) return "not_a_tty";
  if (await W()) return "already";
  let e = le();
  if (!e) return "ffi_unavailable";
  if (e(0) !== 0)
    return (n("[bg-ctty] login_tty(0) failed", { level: "warn" }), "failed");
  return "acquired";
}
function ae() {
  return getCurrentPlatform() === "macos"
    ? ["/usr/lib/libSystem.B.dylib", "libSystem.B.dylib"]
    : ["libc.so.6", "libutil.so.1", "libc.so"];
}
function le() {
  let e;
  try {
    e = importMetaRequire("bun:ffi");
  } catch (o) {
    return (
      n(
        `[bg-ctty] bun:ffi unavailable: ${o instanceof Error ? o.message : String(o)}`,
      ),
      null
    );
  }
  for (let o of ae())
    try {
      let r = e.dlopen(o, { login_tty: { args: ["i32"], returns: "i32" } });
      return (c) => r.symbols.login_tty(c);
    } catch {}
  return (n("[bg-ctty] no libc candidate exports login_tty"), null);
}
import { copyFile, stat as me } from "fs/promises";
import { homedir } from "os";
import { join as de } from "path";
async function R(e) {
  await saveGlobalConfig((o) => ({ ...o, iterm2SetupInProgress: !1 }), e);
}
function ue() {
  let e = getGlobalConfig();
  return {
    inProgress: e.iterm2SetupInProgress ?? !1,
    backupPath: e.iterm2BackupPath || null,
  };
}
function fe() {
  return de(homedir(), "Library", "Preferences", "com.googlecode.iterm2.plist");
}
async function V(e) {
  let { inProgress: o, backupPath: r } = ue();
  if (!o) return { status: "no_backup" };
  if (
    (logEvent("tengu_dead_probe_iterm2_crash_restore", {
      has_backup_path: fromEnum(r ? "true" : "false"),
    }),
    !r)
  )
    return (await R(e), { status: "no_backup" });
  try {
    await me(r);
  } catch {
    return (await R(e), { status: "no_backup" });
  }
  try {
    return (await copyFile(r, fe()), await R(e), { status: "restored" });
  } catch (c) {
    return (
      n(`Failed to restore iTerm2 settings with: ${c}`, { level: "error" }),
      await R(e),
      { status: "failed", backupPath: r }
    );
  }
}
import { realpath } from "fs/promises";
import { basename, resolve } from "path";
async function oe(e, o) {
  if (!o?.worktreePath || o.worktreeHookBased) return null;
  let r = await realpath(e).catch(() => e);
  if (!(
    o.worktreePath === e ||
    o.worktreePath === r ||
    resolve(o.worktreePath) === r
  ))
    return null;
  let m = findCanonicalGitRoot(e);
  if (!m || !isLinkedWorktree(e) || !isAgentWorktreeOf(e, m)) return null;
  let _ = basename(e).replaceAll("+", "/");
  try {
    validateWorktreeSlug(_);
  } catch {
    return null;
  }
  let S = await evaluateWorktreePin(e, [], resolveGitRootCandidates(e, m));
  if (!S.ok)
    return (
      n(`[worktree] bg boot: not adopting ${e} \u2014 ${S.message}`, {
        level: "warn",
      }),
      null
    );
  let k = await lockClaudeWorktree(e, m, _, "session");
  if (!k || !(await te(e, m))) {
    if (
      (await sleep(250),
      (k = await lockClaudeWorktree(e, m, _, "session")),
      k && !(await te(e, m)))
    )
      n(
        `[worktree] bg boot: adopted ${e} but no worktree lock names this process`,
        { level: "warn" },
      );
  }
  if (!k) return null;
  let w = {
    originalCwd: m,
    worktreePath: e,
    worktreeName: _,
    worktreeBranch: worktreeBranchName(_),
    originalHeadCommit: (await readWorktreeBaseline(e)) ?? void 0,
    sessionId: K(),
    hookBased: !1,
    enteredExisting: !1,
  };
  return (restoreWorktreeSession(w), saveWorktreeState(w), w);
}
async function te(e, o) {
  try {
    return claudeWorktreeLockPid(await readWorktreeLockReason(e, o)) === process.pid;
  } catch {
    return !1;
  }
}
async function setup(e, o, r, c, m, _, S, k, w, s, T) {
  writeDiagnosticsEvent("info", "setup_started");
  let U = process.version.match(/^v(\d+)\./)?.[1];
  if (!U || parseInt(U) < 22)
    (console.error(
      chalk.bold.red("Error: Claude Code requires Node.js version 22 or higher."),
    ),
      process.exit(1));
  if (a.CLAUDE_BG_BACKEND === "daemon") {
    let t = getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_worker_ctty", !0)
      ? await J()
      : (await W())
        ? "already"
        : "switched_off";
    switch ((writeDiagnosticsEvent("info", "bg_worker_ctty", { outcome: t }), t)) {
      case "acquired":
        (markOwnsControllingTerminal(), logFeatureOk("bg_worker_ctty"));
        break;
      case "already":
        markOwnsControllingTerminal();
        break;
      case "failed":
        logFeatureSad("bg_worker_ctty", t);
        break;
      case "ffi_unavailable":
      case "not_a_tty":
        logFeatureSad("bg_worker_ctty", t);
        break;
      case "unsupported":
      case "switched_off":
        break;
    }
  }
  if (S) $p(_m(S), "startup_custom_id");
  if (
    (udsEnv.unset("CLAUDE_CODE_MESSAGING_SOCKET"),
    udsEnv.unset("CLAUDE_CODE_MESSAGING_TOKEN"),
    !isSimpleMode() || w !== void 0)
  )
    if (!isCrossSessionMessagingEnabled())
      if (!Nn()) {
        if (w !== void 0)
          await (
            await import("../../02-功能模块/Bridge-RemoteControl/validateExplicitMessagingSocketPath.knbv811d.js")
          ).validateExplicitMessagingSocketPath(w);
        (n(
          "[uds-messaging] Skipped: cross-session messaging gate off (will late-bind if a GrowthBook refresh enables it)",
        ),
          X(w, s));
      } else n("[uds-messaging] Skipped: cross-session messaging gate off");
    else if (Nn()) n("[uds-messaging] Skipped: remote thin client");
    else {
      let t = performance.now(),
        d = await import("../../02-功能模块/Bridge-RemoteControl/validateExplicitMessagingSocketPath.knbv811d.js"),
        v = await d.startCrossSessionInbox(w, s);
      if (v) {
        let C = d.getUdsStartDegradedCause();
        if (C) logFeatureSad("agents_cross_session_inbox", C);
        else logFeatureOk("agents_cross_session_inbox");
      } else
        logFeatureBad(
          "agents_cross_session_inbox",
          d.getUdsStartFailureCause() ?? "bind_failed",
        );
      let b = performance.now() - t;
      (recordStartupPhase("setup_uds_messaging_ms", b, t),
        logEvent("tengu_uds_startup_bind", { durationMs: Math.round(b), bound: !!v }));
    }
  if (process.env.CLAUDE_BG_BACKEND === "daemon") {
    let { startRendezvousServer: t } = await import("../../02-功能模块/后台任务-Shell管理/chunk-rh0xpf1w.js");
    t(s);
  }
  await captureTeammateModeSnapshotIfEnabled();
  {
    let { installObserverSpawner: t } = await import("../../02-功能模块/权限系统/installObserverSpawner.hb2mjtdb.js");
    t(B());
  }
  if (!ke()) {
    if (isAgentSwarmsEnabled()) {
      let t = await V(s);
      if (t.status === "restored")
        console.log(
          chalk.yellow(
            "Detected an interrupted iTerm2 setup. Your original settings have been restored. You may need to restart iTerm2 for the changes to take effect.",
          ),
        );
      else if (t.status === "failed")
        console.error(
          chalk.red(
            `Failed to restore iTerm2 settings. Please manually restore your original settings with: defaults import com.googlecode.iterm2 ${t.backupPath}.`,
          ),
        );
    }
    try {
      let t = await yOt(s);
      if (t.status === "restored")
        console.log(
          chalk.yellow(
            "Detected an interrupted Terminal.app setup. Your original settings have been restored. You may need to restart Terminal.app for the changes to take effect.",
          ),
        );
      else if (t.status === "failed")
        console.error(
          chalk.red(
            `Failed to restore Terminal.app settings. Please manually restore your original settings with: defaults import com.apple.Terminal ${t.backupPath}.`,
          ),
        );
    } catch (t) {
      logError(t);
    }
  }
  try {
    setSessionCwd(e);
  } catch (t) {
    (process.stderr.write(
      chalk.red(`Error: Can't access working directory ${chalk.bold(e)}: ${l(t)}
`),
    ),
      setBgExitCause("setcwd"),
      process.exit(1));
  }
  let O = performance.now();
  if (isHoverRestEnabled() && s !== void 0) await updateHooksConfigSnapshotThroughBackend(s);
  else captureHooksConfigSnapshot();
  if (
    (recordStartupPhase("setup_hooks_snapshot_ms", performance.now() - O, O),
    writeDiagnosticsEvent("info", "setup_hooks_captured", {
      duration_ms: Math.round(performance.now() - O),
    }),
    !Nn())
  ) {
    let t = performance.now();
    (initializeFileWatcherHooks(e, s, T), recordStartupPhase("setup_file_watcher_ms", performance.now() - t, t));
  }
  let G = performance.now();
  if (c) {
    let t = hasWorktreeCreateHook(),
      d = await getIsGit();
    if (!t && !d)
      (process.stderr.write(
        chalk.red(`Error: Can only use --worktree in a git repository, but ${chalk.bold(e)} is not a git repository. Configure a WorktreeCreate hook in settings.json to use --worktree with other VCS systems.
`),
      ),
        process.exit(1));
    let v = k ? `pr-${k}` : (m ?? getPlanSlug()),
      b,
      C = null;
    if (d) {
      if (((C = findCanonicalGitRoot(getCwd())), !C))
        (process.stderr.write(
          chalk.red(`Error: Could not determine the main git repository root.
`),
        ),
          process.exit(1));
      if (isLinkedWorktree(getCwd())) (writeDiagnosticsEvent("info", "worktree_resolved_to_main_repo"), Yu(C), setSessionCwd(C));
      b = _ ? generateTmuxSessionName(C, worktreeBranchName(v)) : void 0;
    } else b = _ ? generateTmuxSessionName(getCwd(), worktreeBranchName(v)) : void 0;
    let I;
    try {
      I = await createWorktreeForSession(K(), v, b, {
        prNumber: k,
        fromCwd: e,
        repoRoot: C ?? void 0,
        storageV5: s,
        credentials: T,
      });
    } catch (E) {
      (process.stderr.write(
        chalk.red(`Error creating worktree: ${l(E)}
`),
      ),
        setBgExitCause("worktree_create"),
        process.exit(1));
    }
    logEvent("tengu_worktree_created", { tmux_enabled: _ });
    let N = !1;
    if (_ && b) {
      let E = await createTmuxSessionForWorktree(b, I.worktreePath);
      if (E.created)
        ((N = !0),
          console.log(
            chalk.green(`Created tmux session: ${chalk.bold(b)}
To attach: ${chalk.bold(`tmux attach -t ${b}`)}`),
          ));
      else
        console.error(
          chalk.yellow(`Warning: Failed to create tmux session: ${E.error}`),
        );
    }
    try {
      Yu(I.worktreePath);
    } catch (E) {
      let x = Jr(E);
      if (!x) throw E;
      let D;
      if (x === "ENOENT" || x === "ENOTDIR")
        D = I.hookBased
          ? "does not exist or is not a directory. The path came from a " +
            "WorktreeCreate hook \u2014 the hook must print the directory it " +
            "created as the last line of its stdout."
          : "does not exist or is not a directory. It may have been removed out from under this session; retrying will recreate it.";
      else if (x === "EACCES" || x === "EPERM")
        D = `is not accessible (${x}). Check the directory's permissions.`;
      else D = `cannot be entered (${l(E)}).`;
      if (
        (process.stderr.write(
          chalk.red(`Error: worktree directory ${I.worktreePath} ${D}
`),
        ),
        logError(E),
        N && b)
      )
        await killTmuxSession(b);
      (setBgExitCause(`worktree_chdir:${x}`), await flushAnalyticsSinks(), process.exit(1));
    }
    if (
      (setSessionCwd(I.worktreePath), ES(getCwd()), o_e(getCwd()), saveWorktreeState(I), clearCurrentSessionMemoryFiles(), isHoverRestEnabled() && s !== void 0)
    )
      await updateHooksConfigSnapshotThroughBackend(s);
    else updateHooksConfigSnapshot();
    (getPlansDirectory.cache.clear?.(),
      primePlanSlugCollisions(s),
      recordStartupPhase("setup_worktree_ms", performance.now() - G, G));
  } else if (isBgSession() && !getCurrentWorktreeSession()) {
    let t = performance.now();
    try {
      let d = getBgJobDir(),
        v = d
          ? await (await import("../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js")).readJobState(d, s)
          : null;
      await oe(e, v);
    } catch (d) {
      n(`[worktree] bg adopt-time reclaim skipped: ${l(d)}`);
    }
    recordStartupPhase("setup_bg_worktree_adopt_ms", performance.now() - t, t);
  }
  if ((writeDiagnosticsEvent("info", "setup_background_jobs_starting"), !isSimpleMode()));
  (q4(),
    writeDiagnosticsEvent("info", "setup_background_jobs_launched"),
    profileCheckpoint("setup_before_prefetch"),
    writeDiagnosticsEvent("info", "setup_prefetch_starting"));
  let Y = (ke() && a.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) || isSimpleMode() || isSafeMode();
  if (!Y) {
    if (shouldFillPluginLoadWithStore(T)) loadAllPluginsCacheOnly(s, T).catch(() => {});
    warmCommandSourceCaches(sn(), s);
  }
  if (
    (import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then((t) => {
      if (!Y)
        (t.loadPluginHooks(s, T).catch((d) => {
          n(`plugin hooks prefetch: ${l(d)}`);
        }),
          t.setupPluginHookHotReload(s, T));
    }),
    !isSimpleMode())
  ) {
    if (
      (import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then((t) =>
        t.registerSessionFileAccessHooks(),
      ),
      import("../../02-功能模块/Hooks钩子/registerUltrareviewPostCommitHook.t2cxwtta.js").then((t) =>
        t.registerUltrareviewPostCommitHook(),
      ),
      !Nn() && checkHasTrustDialogAccepted())
    )
      import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then((t) => t.startMemoryWatcher(s, T));
  }
  (initSinks(),
    logEvent("tengu_started", {
      trigger_id: sanitizeAnalyticsId(a.CLAUDE_CODE_TRIGGER_ID),
      worktree_flag: c,
      tmux_flag: _,
      in_tmux_worktree: Boolean(a.CLAUDE_CODE_TMUX_SESSION && a.TMUX),
    }),
    prefetchApiKeyFromApiKeyHelperIfSafe(ke()));
  let F = (getSettings_DEPRECATED() || {}).proxyAuthHelper;
  if (
    (_setProxyAuthHelperConfig({
      helper: F,
      fromProjectOrLocal:
        getSettingsForSource("projectSettings")?.proxyAuthHelper === F ||
        getSettingsForSource("localSettings")?.proxyAuthHelper === F,
      trustAccepted: checkHasTrustDialogAccepted,
    }),
    prefetchProxyAuthFromHelperIfSafe(),
    be({
      isNonInteractiveSession: ke(),
      isRemoteMode: Nn(),
      isBareMode: isSimpleMode(),
      exitAfterFirstRender: a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER,
      trustAccepted: checkHasTrustDialogAccepted(),
    }))
  )
    prefetchTmuxOptionProbes();
  profileCheckpoint("setup_after_prefetch");
  {
    let t = performance.now(),
      d = [loadCustomThemes(s), ...(isHoverRestEnabled() && s !== void 0 ? [NYn(hw, s)] : [])];
    if (!isSimpleMode()) d.push(o$n(void 0, s));
    (await Promise.all(d),
      recordStartupPhase("setup_release_notes_ms", performance.now() - t, t));
  }
  if (o === "bypassPermissions" || r) {
    if (
      typeof process.getuid === "function" &&
      process.getuid() === 0 &&
      process.env.IS_SANDBOX !== "1" &&
      !a.CLAUDE_CODE_BUBBLEWRAP
    )
      (console.error(
        "--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons",
      ),
        process.exit(1));
  }
  let p = getCurrentProjectConfig();
  if (p.lastCost !== void 0 && p.lastDuration !== void 0)
    logEvent("tengu_exit", {
      last_session_cost: p.lastCost,
      last_session_api_duration: p.lastAPIDuration,
      last_session_tool_duration: p.lastToolDuration,
      last_session_duration: p.lastDuration,
      last_session_lines_added: p.lastLinesAdded,
      last_session_lines_removed: p.lastLinesRemoved,
      last_session_total_input_tokens: p.lastTotalInputTokens,
      last_session_total_output_tokens: p.lastTotalOutputTokens,
      last_session_total_cache_creation_input_tokens:
        p.lastTotalCacheCreationInputTokens,
      last_session_total_cache_read_input_tokens:
        p.lastTotalCacheReadInputTokens,
      last_session_fps_average: p.lastFpsAverage,
      last_session_fps_low_1_pct: p.lastFpsLow1Pct,
      last_session_graceful_shutdown: p.lastGracefulShutdown ?? !1,
      last_session_version_base: p.lastVersionBase ?? "unknown",
      last_session_id: sanitizeAnalyticsId(p.lastSessionId),
      ...p.lastSessionMetrics,
    });
}
function be({
  isNonInteractiveSession: e,
  isRemoteMode: o,
  isBareMode: r,
  exitAfterFirstRender: c,
  trustAccepted: m,
}) {
  return !e && !o && !r && !c && m;
}
class re {
  fired = !1;
  claim() {
    if (this.fired) return !1;
    return ((this.fired = !0), !0);
  }
}
var we = new j(() => new re());
function maybePrewarmRecallIndex(e) {
  if (!we.of(e.host).claim()) return;
  if (Nn() || !checkHasTrustDialogAccepted()) return;
  (async () => {
    let [o, r] = await Promise.all([
      import("../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
      import("../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
    ]);
    if (
      !process.argv.some(
        (c) =>
          /^-(?!-)[A-Za-z]*[cr]/.test(c) ||
          ["--resume", "--continue", "--from-pr"].some(
            (m) => c === m || c.startsWith(`${m}=`),
          ),
      ) &&
      r.loadedIndexExclusions() === null &&
      o.isAutoMemoryEnabled() &&
      o.isMemoryRecallEnabled() &&
      o.isIndexRecallEnabled()
    ) {
      let c = await import("../../02-功能模块/Memory-CLAUDE.md/searchMemoryFilesWithIndex.5h247hbm.js"),
        m = await import("../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js"),
        _ = await import("../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js"),
        S = await import("../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js"),
        k = await import("../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js");
      if (_.isMultiStoreSyncAvailable() || k.hasOrgMemoryDecisionRunStarted()) {
        if (
          (await m.waitForOrgMemoryDecisionSettled(
            S.FIRST_STORE_PULL_WAIT_DEADLINE_MS,
            new AbortController().signal,
          ),
          m.getOrgMemoryDecision().state === "undecided")
        )
          return;
      }
      await o.getAutoMemPathState().warmCanonicalWcRoot();
      let w = r.recallVisibleTeamMounts(o.getAutoMemPath());
      c.prewarmMemoryIndex(
        e,
        o.getAutoMemPath(),
        o.activeSessionLogExcluder(),
        (s) => r.isRecallVisiblePath(s, w),
      );
    }
  })().catch((o) => n(`recall prewarm skipped: ${l(o)}`));
}
export { maybePrewarmRecallIndex, setup };

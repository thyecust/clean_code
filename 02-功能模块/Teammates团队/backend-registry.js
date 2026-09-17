// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { execFileNoThrow, execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { terminalBackendRegistry, isInsideTmuxSync, isInsideTmux, isTmuxAvailable, isInITerm2, isIt2CliAvailable } from "../终端环境探测-TUI-tmux/terminal-backend-detection.js";
import { saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getTeammateModeFromSnapshot } from "./chunk-88ybhavr.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { homedir } from "os";
async function detectPythonPackageManager() {
  if ((await execFileNoThrow("which", ["uv"])).code === 0)
    return (logForDebugging("[it2Setup] Found uv (will use uv tool install)"), "uvx");
  if ((await execFileNoThrow("which", ["pipx"])).code === 0)
    return (logForDebugging("[it2Setup] Found pipx package manager"), "pipx");
  if ((await execFileNoThrow("which", ["pip"])).code === 0)
    return (logForDebugging("[it2Setup] Found pip package manager"), "pip");
  if ((await execFileNoThrow("which", ["pip3"])).code === 0)
    return (logForDebugging("[it2Setup] Found pip3 package manager"), "pip");
  return (logForDebugging("[it2Setup] No Python package manager found"), null);
}
async function p() {
  return (await execFileNoThrow("which", ["it2"])).code === 0;
}
async function installIt2WithPackageManager(e) {
  logForDebugging(`[it2Setup] Installing it2 using ${e}`);
  let t;
  switch (e) {
    case "uvx":
      t = await execFileNoThrowWithCwd("uv", ["tool", "install", "it2"], { cwd: homedir() });
      break;
    case "pipx":
      t = await execFileNoThrowWithCwd("pipx", ["install", "it2"], { cwd: homedir() });
      break;
    case "pip":
      if (
        ((t = await execFileNoThrowWithCwd("pip", ["install", "--user", "it2"], { cwd: homedir() })),
        t.code !== 0)
      )
        t = await execFileNoThrowWithCwd("pip3", ["install", "--user", "it2"], { cwd: homedir() });
      break;
  }
  if (t.code !== 0) {
    let a = t.stderr || "Unknown installation error";
    return (
      logForDebugging(`[it2Setup] Failed to install it2: ${a}`, { level: "error" }),
      logFeatureBad("swarm_iterm2_it2_install", `${e}_install_failed`),
      { success: !1, error: a, packageManager: e }
    );
  }
  return (
    logForDebugging("[it2Setup] it2 installed successfully"),
    logFeatureOk("swarm_iterm2_it2_install"),
    { success: !0, packageManager: e }
  );
}
async function verifyIt2Setup() {
  if ((logForDebugging("[it2Setup] Verifying it2 setup..."), !(await p())))
    return (
      logFeatureBad("swarm_iterm2_it2_verify", "not_installed"),
      { success: !1, error: "it2 CLI is not installed or not in PATH" }
    );
  let t = await execFileNoThrow("it2", ["session", "list"]);
  if (t.code !== 0) {
    let a = t.stderr.toLowerCase();
    if (
      a.includes("api") ||
      a.includes("python") ||
      a.includes("connection refused") ||
      a.includes("not enabled")
    )
      return (
        logForDebugging("[it2Setup] Python API not enabled in iTerm2"),
        logFeatureSad("swarm_iterm2_it2_verify", "python_api_not_enabled"),
        {
          success: !1,
          error: "Python API not enabled in iTerm2 preferences",
          needsPythonApiEnabled: !0,
        }
      );
    return (
      logFeatureBad("swarm_iterm2_it2_verify", "communication_failed"),
      { success: !1, error: t.stderr || "Failed to communicate with iTerm2" }
    );
  }
  return (
    logForDebugging("[it2Setup] it2 setup verified successfully"),
    logFeatureOk("swarm_iterm2_it2_verify"),
    { success: !0 }
  );
}
function getPythonApiSetupInstructions() {
  return [
    "Almost done! Enable the Python API in iTerm2:",
    "",
    "  iTerm2 \u2192 Settings \u2192 General \u2192 Magic \u2192 Enable Python API",
    "",
    "After enabling, you may need to restart iTerm2.",
  ];
}
function markIt2SetupComplete(e) {
  if (getGlobalConfig().iterm2It2SetupComplete !== !0)
    (saveGlobalConfig((a) => ({ ...a, iterm2It2SetupComplete: !0 }), e),
      logForDebugging("[it2Setup] Marked it2 setup as complete"));
}
function setPreferTmuxOverIterm2(e, t) {
  if (getGlobalConfig().preferTmuxOverIterm2 !== e)
    (saveGlobalConfig((s) => ({ ...s, preferTmuxOverIterm2: e }), t),
      logForDebugging(`[it2Setup] Set preferTmuxOverIterm2 = ${e}`));
}
function d() {
  return getGlobalConfig().preferTmuxOverIterm2 === !0;
}
async function ensureBackendsRegistered(e = terminalBackendRegistry) {
  if (e.backendsRegistered) return;
  let { TmuxBackend: t } = await import("./chunk-x0by9eq8.js"),
    { ITermBackend: a } = await import("./ITermBackend.m7kw75rs.js");
  ((e.TmuxBackendClass = t),
    (e.ITermBackendClass = a),
    (e.backendsRegistered = !0));
}
function c(e) {
  if (e.tmuxBackend) return e.tmuxBackend;
  if (!e.TmuxBackendClass)
    throw Error(
      "TmuxBackend not registered. Import TmuxBackend.ts before using the registry.",
    );
  return ((e.tmuxBackend = new e.TmuxBackendClass()), e.tmuxBackend);
}
function u(e) {
  if (e.itermBackend) return e.itermBackend;
  if (!e.ITermBackendClass)
    throw Error(
      "ITermBackend not registered. Import ITermBackend.ts before using the registry.",
    );
  return ((e.itermBackend = new e.ITermBackendClass()), e.itermBackend);
}
async function detectAndGetBackend(e = terminalBackendRegistry) {
  if ((await ensureBackendsRegistered(e), e.cachedDetectionResult))
    return (
      logForDebugging(
        `[BackendRegistry] Using cached backend: ${e.cachedDetectionResult.backend.type}`,
      ),
      e.cachedDetectionResult
    );
  if (
    (logForDebugging("[BackendRegistry] Starting backend detection..."), getTeammateModeFromSnapshot() === "iterm2")
  ) {
    if (!isInITerm2(e))
      throw (
        logFeatureBad("swarm_backend_detect", "iterm2_explicit_not_in_iterm2"),
        Error(
          'teammateMode is set to "iterm2" but this session is not running inside iTerm2. Launch Claude from iTerm2, or change teammateMode in settings.',
        )
      );
    if (!(await isIt2CliAvailable(e)))
      throw (
        logFeatureBad("swarm_backend_detect", "iterm2_explicit_no_it2"),
        Error(
          'teammateMode is set to "iterm2" but the it2 CLI is not reachable. Install it with `pip install it2` and enable the Python API in iTerm2 (Preferences > General > Magic > Enable Python API).',
        )
      );
    logForDebugging("[BackendRegistry] Selected: iterm2 (explicit teammateMode)");
    let i = u(e);
    return (
      (e.cachedDetectionResult = {
        backend: i,
        isNative: !0,
        needsIt2Setup: !1,
      }),
      logFeatureOk("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  let t = await isInsideTmux(),
    a = isInITerm2(e);
  if ((logForDebugging(`[BackendRegistry] Environment: insideTmux=${t}, inITerm2=${a}`), t)) {
    logForDebugging("[BackendRegistry] Selected: tmux (running inside tmux session)");
    let i = c(e);
    return (
      (e.cachedDetectionResult = {
        backend: i,
        isNative: !0,
        needsIt2Setup: !1,
      }),
      logFeatureOk("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  if (a) {
    let i = d();
    if (i)
      logForDebugging(
        "[BackendRegistry] User prefers tmux over iTerm2, skipping iTerm2 detection",
      );
    else {
      let r = await isIt2CliAvailable(e);
      if (
        (logForDebugging(`[BackendRegistry] iTerm2 detected, it2 CLI available: ${r}`), r)
      ) {
        logForDebugging("[BackendRegistry] Selected: iterm2 (native iTerm2 with it2 CLI)");
        let m = u(e);
        return (
          (e.cachedDetectionResult = {
            backend: m,
            isNative: !0,
            needsIt2Setup: !1,
          }),
          logFeatureOk("swarm_backend_detect"),
          e.cachedDetectionResult
        );
      }
    }
    let l = await isTmuxAvailable();
    if ((logForDebugging(`[BackendRegistry] it2 not available, tmux available: ${l}`), l)) {
      logForDebugging(
        "[BackendRegistry] Selected: tmux (fallback in iTerm2, it2 setup recommended)",
      );
      let r = c(e);
      return (
        (e.cachedDetectionResult = {
          backend: r,
          isNative: !1,
          needsIt2Setup: !i,
        }),
        logFeatureSad("swarm_backend_detect", i ? "fallback_to_tmux" : "needs_it2_setup"),
        e.cachedDetectionResult
      );
    }
    throw (
      logForDebugging("[BackendRegistry] ERROR: iTerm2 detected but no it2 CLI and no tmux"),
      logFeatureBad("swarm_backend_detect", "iterm2_no_it2_no_tmux"),
      Error(
        "iTerm2 detected but it2 CLI not installed. Install it2 with: pip install it2",
      )
    );
  }
  let s = await isTmuxAvailable();
  if ((logForDebugging(`[BackendRegistry] Not in tmux or iTerm2, tmux available: ${s}`), s)) {
    logForDebugging("[BackendRegistry] Selected: tmux (external session mode)");
    let i = c(e);
    return (
      (e.cachedDetectionResult = {
        backend: i,
        isNative: !1,
        needsIt2Setup: !1,
      }),
      logFeatureOk("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  throw (
    logForDebugging("[BackendRegistry] ERROR: No pane backend available"),
    logFeatureBad("swarm_backend_detect", "no_backend_available"),
    Error(k())
  );
}
function k() {
  switch (getCurrentPlatform()) {
    case "macos":
      return `To use agent swarms, install tmux:
  brew install tmux
Then start a tmux session with: tmux new-session -s claude`;
    case "linux":
    case "wsl":
      return `To use agent swarms, install tmux:
  sudo apt install tmux    # Ubuntu/Debian
  sudo dnf install tmux    # Fedora/RHEL
Then start a tmux session with: tmux new-session -s claude`;
    case "windows":
      return `To use agent swarms, you need tmux which requires WSL (Windows Subsystem for Linux).
Install WSL first, then inside WSL run:
  sudo apt install tmux
Then start a tmux session with: tmux new-session -s claude`;
    default:
      return `To use agent swarms, install tmux using your system's package manager.
Then start a tmux session with: tmux new-session -s claude`;
  }
}
function getBackendByType(e, t = terminalBackendRegistry) {
  switch (e) {
    case "tmux":
      return c(t);
    case "iterm2":
      return u(t);
  }
}
function getCachedDetectionResult(e = terminalBackendRegistry) {
  return e.cachedDetectionResult;
}
function markInProcessFallback(e = terminalBackendRegistry) {
  (logForDebugging("[BackendRegistry] Marking in-process fallback as active"),
    (e.inProcessFallbackActive = !0));
}
function x() {
  return getTeammateModeFromSnapshot();
}
function isInProcessEnabled(e = terminalBackendRegistry) {
  if (ke())
    return (
      logForDebugging("[BackendRegistry] isInProcessEnabled: true (non-interactive session)"),
      !0
    );
  let t = x(),
    a;
  if (t === "in-process") a = !0;
  else if (t === "tmux" || t === "iterm2") a = !1;
  else {
    if (e.inProcessFallbackActive)
      return (
        logForDebugging(
          "[BackendRegistry] isInProcessEnabled: true (fallback after pane backend unavailable)",
        ),
        !0
      );
    let s = isInsideTmuxSync(),
      i = isInITerm2(e);
    a = !s && !i;
  }
  return (
    logForDebugging(
      `[BackendRegistry] isInProcessEnabled: ${a} (mode=${t}, insideTmux=${isInsideTmuxSync()}, inITerm2=${isInITerm2(e)})`,
    ),
    a
  );
}
function resetBackendDetection(e = terminalBackendRegistry) {
  ((e.cachedDetectionResult = null),
    (e.backendsRegistered = !1),
    (e.inProcessFallbackActive = !1));
}
export { detectPythonPackageManager, installIt2WithPackageManager, verifyIt2Setup, getPythonApiSetupInstructions, markIt2SetupComplete, setPreferTmuxOverIterm2, ensureBackendsRegistered, detectAndGetBackend, getBackendByType, getCachedDetectionResult, markInProcessFallback, isInProcessEnabled, resetBackendDetection };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk as y, logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { execFileNoThrow as Fe, execFileNoThrowWithCwd as Be } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { AK, isInsideTmuxSync as $wt, isInsideTmux as Oj, isTmuxAvailable as foe, isInITerm2 as SN, isIt2CliAvailable as L1e } from "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import { Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getTeammateModeFromSnapshot as MOe } from "./chunk-88ybhavr.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { homedir as o } from "os";
async function Hft() {
  if ((await Fe("which", ["uv"])).code === 0)
    return (n("[it2Setup] Found uv (will use uv tool install)"), "uvx");
  if ((await Fe("which", ["pipx"])).code === 0)
    return (n("[it2Setup] Found pipx package manager"), "pipx");
  if ((await Fe("which", ["pip"])).code === 0)
    return (n("[it2Setup] Found pip package manager"), "pip");
  if ((await Fe("which", ["pip3"])).code === 0)
    return (n("[it2Setup] Found pip3 package manager"), "pip");
  return (n("[it2Setup] No Python package manager found"), null);
}
async function p() {
  return (await Fe("which", ["it2"])).code === 0;
}
async function Aun(e) {
  n(`[it2Setup] Installing it2 using ${e}`);
  let t;
  switch (e) {
    case "uvx":
      t = await Be("uv", ["tool", "install", "it2"], { cwd: o() });
      break;
    case "pipx":
      t = await Be("pipx", ["install", "it2"], { cwd: o() });
      break;
    case "pip":
      if (
        ((t = await Be("pip", ["install", "--user", "it2"], { cwd: o() })),
        t.code !== 0)
      )
        t = await Be("pip3", ["install", "--user", "it2"], { cwd: o() });
      break;
  }
  if (t.code !== 0) {
    let a = t.stderr || "Unknown installation error";
    return (
      n(`[it2Setup] Failed to install it2: ${a}`, { level: "error" }),
      f("swarm_iterm2_it2_install", `${e}_install_failed`),
      { success: !1, error: a, packageManager: e }
    );
  }
  return (
    n("[it2Setup] it2 installed successfully"),
    y("swarm_iterm2_it2_install"),
    { success: !0, packageManager: e }
  );
}
async function Cun() {
  if ((n("[it2Setup] Verifying it2 setup..."), !(await p())))
    return (
      f("swarm_iterm2_it2_verify", "not_installed"),
      { success: !1, error: "it2 CLI is not installed or not in PATH" }
    );
  let t = await Fe("it2", ["session", "list"]);
  if (t.code !== 0) {
    let a = t.stderr.toLowerCase();
    if (
      a.includes("api") ||
      a.includes("python") ||
      a.includes("connection refused") ||
      a.includes("not enabled")
    )
      return (
        n("[it2Setup] Python API not enabled in iTerm2"),
        g("swarm_iterm2_it2_verify", "python_api_not_enabled"),
        {
          success: !1,
          error: "Python API not enabled in iTerm2 preferences",
          needsPythonApiEnabled: !0,
        }
      );
    return (
      f("swarm_iterm2_it2_verify", "communication_failed"),
      { success: !1, error: t.stderr || "Failed to communicate with iTerm2" }
    );
  }
  return (
    n("[it2Setup] it2 setup verified successfully"),
    y("swarm_iterm2_it2_verify"),
    { success: !0 }
  );
}
function vun() {
  return [
    "Almost done! Enable the Python API in iTerm2:",
    "",
    "  iTerm2 \u2192 Settings \u2192 General \u2192 Magic \u2192 Enable Python API",
    "",
    "After enabling, you may need to restart iTerm2.",
  ];
}
function Run(e) {
  if (ee().iterm2It2SetupComplete !== !0)
    (Te((a) => ({ ...a, iterm2It2SetupComplete: !0 }), e),
      n("[it2Setup] Marked it2 setup as complete"));
}
function kun(e, t) {
  if (ee().preferTmuxOverIterm2 !== e)
    (Te((s) => ({ ...s, preferTmuxOverIterm2: e }), t),
      n(`[it2Setup] Set preferTmuxOverIterm2 = ${e}`));
}
function d() {
  return ee().preferTmuxOverIterm2 === !0;
}
async function G$t(e = AK) {
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
async function Ift(e = AK) {
  if ((await G$t(e), e.cachedDetectionResult))
    return (
      n(
        `[BackendRegistry] Using cached backend: ${e.cachedDetectionResult.backend.type}`,
      ),
      e.cachedDetectionResult
    );
  if (
    (n("[BackendRegistry] Starting backend detection..."), MOe() === "iterm2")
  ) {
    if (!SN(e))
      throw (
        f("swarm_backend_detect", "iterm2_explicit_not_in_iterm2"),
        Error(
          'teammateMode is set to "iterm2" but this session is not running inside iTerm2. Launch Claude from iTerm2, or change teammateMode in settings.',
        )
      );
    if (!(await L1e(e)))
      throw (
        f("swarm_backend_detect", "iterm2_explicit_no_it2"),
        Error(
          'teammateMode is set to "iterm2" but the it2 CLI is not reachable. Install it with `pip install it2` and enable the Python API in iTerm2 (Preferences > General > Magic > Enable Python API).',
        )
      );
    n("[BackendRegistry] Selected: iterm2 (explicit teammateMode)");
    let i = u(e);
    return (
      (e.cachedDetectionResult = {
        backend: i,
        isNative: !0,
        needsIt2Setup: !1,
      }),
      y("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  let t = await Oj(),
    a = SN(e);
  if ((n(`[BackendRegistry] Environment: insideTmux=${t}, inITerm2=${a}`), t)) {
    n("[BackendRegistry] Selected: tmux (running inside tmux session)");
    let i = c(e);
    return (
      (e.cachedDetectionResult = {
        backend: i,
        isNative: !0,
        needsIt2Setup: !1,
      }),
      y("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  if (a) {
    let i = d();
    if (i)
      n(
        "[BackendRegistry] User prefers tmux over iTerm2, skipping iTerm2 detection",
      );
    else {
      let r = await L1e(e);
      if (
        (n(`[BackendRegistry] iTerm2 detected, it2 CLI available: ${r}`), r)
      ) {
        n("[BackendRegistry] Selected: iterm2 (native iTerm2 with it2 CLI)");
        let m = u(e);
        return (
          (e.cachedDetectionResult = {
            backend: m,
            isNative: !0,
            needsIt2Setup: !1,
          }),
          y("swarm_backend_detect"),
          e.cachedDetectionResult
        );
      }
    }
    let l = await foe();
    if ((n(`[BackendRegistry] it2 not available, tmux available: ${l}`), l)) {
      n(
        "[BackendRegistry] Selected: tmux (fallback in iTerm2, it2 setup recommended)",
      );
      let r = c(e);
      return (
        (e.cachedDetectionResult = {
          backend: r,
          isNative: !1,
          needsIt2Setup: !i,
        }),
        g("swarm_backend_detect", i ? "fallback_to_tmux" : "needs_it2_setup"),
        e.cachedDetectionResult
      );
    }
    throw (
      n("[BackendRegistry] ERROR: iTerm2 detected but no it2 CLI and no tmux"),
      f("swarm_backend_detect", "iterm2_no_it2_no_tmux"),
      Error(
        "iTerm2 detected but it2 CLI not installed. Install it2 with: pip install it2",
      )
    );
  }
  let s = await foe();
  if ((n(`[BackendRegistry] Not in tmux or iTerm2, tmux available: ${s}`), s)) {
    n("[BackendRegistry] Selected: tmux (external session mode)");
    let i = c(e);
    return (
      (e.cachedDetectionResult = {
        backend: i,
        isNative: !1,
        needsIt2Setup: !1,
      }),
      y("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  throw (
    n("[BackendRegistry] ERROR: No pane backend available"),
    f("swarm_backend_detect", "no_backend_available"),
    Error(k())
  );
}
function k() {
  switch (P()) {
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
function a4e(e, t = AK) {
  switch (e) {
    case "tmux":
      return c(t);
    case "iterm2":
      return u(t);
  }
}
function xun(e = AK) {
  return e.cachedDetectionResult;
}
function Hun(e = AK) {
  (n("[BackendRegistry] Marking in-process fallback as active"),
    (e.inProcessFallbackActive = !0));
}
function x() {
  return MOe();
}
function l4e(e = AK) {
  if (ke())
    return (
      n("[BackendRegistry] isInProcessEnabled: true (non-interactive session)"),
      !0
    );
  let t = x(),
    a;
  if (t === "in-process") a = !0;
  else if (t === "tmux" || t === "iterm2") a = !1;
  else {
    if (e.inProcessFallbackActive)
      return (
        n(
          "[BackendRegistry] isInProcessEnabled: true (fallback after pane backend unavailable)",
        ),
        !0
      );
    let s = $wt(),
      i = SN(e);
    a = !s && !i;
  }
  return (
    n(
      `[BackendRegistry] isInProcessEnabled: ${a} (mode=${t}, insideTmux=${$wt()}, inITerm2=${SN(e)})`,
    ),
    a
  );
}
function c4e(e = AK) {
  ((e.cachedDetectionResult = null),
    (e.backendsRegistered = !1),
    (e.inProcessFallbackActive = !1));
}
export { Hft, Aun, Cun, vun, Run, kun, G$t, Ift, a4e, xun, Hun, l4e, c4e };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { WindowsSandboxError, ensurePersistentWindowsCa, installWindowsSandboxAsync, WINDOWS_SANDBOX_USER_NAME, getSrtWinLaunchConfig, formatWindowsSandboxErrorMessage, resolveWindowsTlsTerminateCaSource, willSandboxTlsTerminate, SandboxManager } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
class WindowsSandboxInstallInFlight {
  inFlight = void 0;
  run(e) {
    return (
      (this.inFlight ??= e().finally(() => {
        this.inFlight = void 0;
      })),
      this.inFlight
    );
  }
}
var windowsSandboxInstallInFlight = new j(() => new WindowsSandboxInstallInFlight());
function runWindowsSandboxInstall(e) {
  return windowsSandboxInstallInFlight.of(e).run(c);
}
async function c() {
  try {
    let e = await installWindowsSandboxAsync({ sandboxUser: WINDOWS_SANDBOX_USER_NAME, srtWin: getSrtWinLaunchConfig() });
    if (e.cancelled) {
      if (e.user.provisioned && e.user.credPresent) {
        if (resolveWindowsTlsTerminateCaSource().source === "managed" && willSandboxTlsTerminate()) {
          SandboxManager.invalidateDependencyCache();
          let s = await i(e.user);
          if ((await SandboxManager.checkDependenciesAsync(), s !== null)) return s;
          return (
            logFeatureOk("sandbox_windows_install"),
            {
              status: "ok",
              message:
                "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned \u2014 the sandbox TLS inspection CA is now set up and trusted for the sandbox user." +
                " Network filters can't be verified from a non-elevated process; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt." +
                o(),
            }
          );
        }
        return (
          logFeatureSad("sandbox_windows_install", "uac_cancelled_provisioned"),
          SandboxManager.invalidateDependencyCache(),
          await SandboxManager.checkDependenciesAsync(),
          {
            status: "cancelled",
            message:
              "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned. Network filters can't be verified from a non-elevated process \u2014 run /sandbox to check the current status; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt.",
          }
        );
      }
      return (
        logFeatureSad("sandbox_windows_install", "uac_cancelled"),
        {
          status: "cancelled",
          message:
            "Install was cancelled at the elevation prompt. Run /sandbox install again and approve the prompt to set up the sandbox user and network filters. If you don't have administrator rights, ask your administrator to install the network filters.",
        }
      );
    }
    if (
      (SandboxManager.invalidateDependencyCache(),
      await SandboxManager.checkDependenciesAsync(),
      e.user.provisioned &&
        e.user.credPresent &&
        (e.wfp.state === "installed" || e.wfp.state === "cannot-read"))
    ) {
      if (resolveWindowsTlsTerminateCaSource().source === "managed" && willSandboxTlsTerminate()) {
        let r = await i(e.user);
        if (r !== null) return r;
      }
      logFeatureOk("sandbox_windows_install");
      let s =
        e.wfp.state === "installed"
          ? "Sandbox user and network filters installed"
          : "Sandbox user and network filters installed (filters can't be verified from a non-elevated process)";
      if (SandboxManager.isSandboxingEnabled())
        return { status: "ok", message: `${s} and active.${o()}` };
      return SandboxManager.isSandboxEnabledInSettings()
        ? {
            status: "ok",
            message: `${s}. Run /sandbox to check the current status.${o()}`,
          }
        : {
            status: "ok",
            message: `${s}. Run /sandbox to choose a sandbox mode and turn it on.${o()}`,
          };
    }
    let t = !e.user.provisioned
      ? "user_not_provisioned"
      : !e.user.credPresent
        ? "cred_not_readable"
        : "wfp_not_installed";
    return (
      logFeatureSad("sandbox_windows_install", t),
      {
        status: "partial",
        message: `Install completed (sandbox user: ${{ user_not_provisioned: "not provisioned", cred_not_readable: "provisioned, credential not readable", wfp_not_installed: "provisioned" }[t]}, filters: ${e.wfp.state}). Run /sandbox install again to retry.`,
      }
    );
  } catch (e) {
    SandboxManager.invalidateDependencyCache();
    let t = l(e);
    logForDebugging(`/sandbox install failed: ${t}`, { level: "error" });
    let a = formatWindowsSandboxErrorMessage(t, { omitCcRemedy: !0 }).replace(/\.$/, "");
    if (e instanceof WindowsSandboxError && e.code === "install_timeout")
      return (
        logFeatureSad("sandbox_windows_install", "uac_timeout"),
        {
          status: "error",
          message: `The install timed out after 2 minutes: ${a}. If an elevation prompt was showing, run /sandbox install again and respond to the prompt. If no prompt appeared, the installer may be blocked on this machine \u2014 run /sandbox to check sandbox status.`,
        }
      );
    if (e instanceof WindowsSandboxError && e.code === "install_config_conflict")
      return (
        logFeatureSad("sandbox_windows_install", "config_conflict"),
        {
          status: "error",
          message:
            "A sandbox network-filter set is already installed with a different configuration (for example, under a different sandbox account name). Remove it by running npx @anthropic-ai/sandbox-runtime windows-uninstall from a trusted directory, then run /sandbox install again.",
        }
      );
    if (/^srt-win (status|wfp|user)[ :]/.test(t))
      return (
        logFeatureSad("sandbox_windows_install", "status_probe_failed"),
        {
          status: "error",
          message: `The installer ran, but the sandbox status couldn't be read back afterwards: ${a}. Run /sandbox to check the current status.`,
        }
      );
    return (
      logFeatureBad("sandbox_windows_install", "install_threw"),
      {
        status: "error",
        message: `Couldn't install the sandbox user and network filters: ${a}. Run /sandbox install again to retry.`,
      }
    );
  }
}
async function i(e) {
  try {
    await ensurePersistentWindowsCa({ status: e, srtWin: getSrtWinLaunchConfig() });
  } catch (t) {
    let a = l(t);
    logForDebugging(`/sandbox install: managed sandbox CA step failed: ${a}`, {
      level: "error",
    });
    let s = formatWindowsSandboxErrorMessage(a, { omitCcRemedy: !0 }).replace(/\.$/, "");
    if (
      t instanceof WindowsSandboxError &&
      (t.code === "trust_ca_failed" ||
        t.code === "spawn_failed" ||
        t.code === "srt_win_timeout")
    )
      return (
        logFeatureSad("sandbox_windows_install", "trust_ca_failed"),
        {
          status: "partial",
          message: `The sandbox TLS inspection CA couldn't be trusted for the sandbox user: ${s}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`,
        }
      );
    return (
      logFeatureSad("sandbox_windows_install", "persistent_ca_failed"),
      {
        status: "partial",
        message: `The sandbox TLS inspection CA couldn't be created: ${s}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`,
      }
    );
  }
  return null;
}
function o() {
  return willSandboxTlsTerminate() && SandboxManager.needsRestartForTlsTerminate()
    ? " Restart Claude Code to enable TLS inspection for this session."
    : "";
}
export { runWindowsSandboxInstall };

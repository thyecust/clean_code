// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  j,
  B,
  sc,
  _Dn,
  yDn,
  QXt,
  _rt,
  ke,
  eLn,
  ns,
  g_e,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../核心工具-路径与平台/chunk-h62vxw7j.js";
import { ud, YR, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { registerCleanup, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isSameAsConfigDir } from "../设置-配置/chunk-5ndhfaq9.js";
import { primeSystemInfo, env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { logError } from "../提示词-SystemPrompt/chunk-27ncq5fr.js";
import { profileCheckpoint } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import {
  getProviderState,
  populateOAuthAccountInfoIfNeeded,
  shouldForceGatewayLogin,
  restoreGatewayAuth,
  primeStoredLogin,
  startupReadsStoredLogin,
  primeStoredLoginCopy,
  getForcedLoginMethod,
  adminPolicyUnreadable,
  setGrowthBookCredentials,
  setGrowthBookStorageBackend,
  getFeatureValue_CACHED_MAY_BE_STALE,
  checkHasTrustDialogAccepted,
  watchGlobalConfigThroughStorage,
  getGlobalConfig,
  enableConfigs,
  getOrCreateUserID,
  getOrCreateMachineID,
  recordFirstStartTime,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getHostSettingsStore, primeRemoteManagedSettingsCache } from "../设置-配置/设置-配置.aqbb35ee.js";
import { setupGitBashShellEnv } from "../核心工具-路径与平台/chunk-fx8qr1md.js";
import { writeDiagnosticsEvent } from "../核心工具-日志与脱敏/diagnostics-log.js";
import { getSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { loadExtraCACerts, loadMTLSClientMaterial, configureGlobalMTLS, getProxyUrlWithSource, parseProxyUrl, describeInvalidProxyUrl, configureGlobalAgents, clearProxyCache } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { setFeatureGateLookup, getAPIProvider } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { primeProfileReadAhead } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { detectCurrentRepository, setRepoDetectionGuards } from "../../02-功能模块/工作树-Git/git-repository-detection.js";
import { primeWindowsCredManBackendEnabled } from "../../02-功能模块/认证-OAuth登录/secure-storage.js";
import { assertScrubSandboxAvailable } from "../核心工具-进程与信号/subprocess-env-scrub.js";
import {
  isDetailedTracingEnabled,
  getPowerShellPath,
  subscribeToResetStreamNoEventsLatch,
  setupGracefulShutdown,
  gracefulShutdownSync,
  subscribePromptCacheResetOnSessionChange,
  registerStorageFlushHandlers,
  shutdownLspServerManager,
  installHostCredentials,
  registerKeepForeignThinkingReset,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isScratchpadEnabled, ensureScratchpadDir } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { buildOtelResourceAttributes } from "./otel-events.js";
import { isPolicyLimitsEligible } from "../核心工具-字符串与文本/chunk-8sw91yn5.js";
import { isPowerShellToolEnabled, isBashToolAvailable } from "../提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { seedUserSettings, primeSettings } from "../设置-配置/chunk-b536v45y.js";
import { primePlanSlugCollisions } from "../../02-功能模块/计划模式-Plan/计划模式-Plan.e5mh1avy.js";
import { applySafeConfigEnvironmentVariables, applyConfigEnvironmentVariables } from "./settings-env-application.js";
import { pinStorageV5FromEnv } from "../核心工具-未归类/storage-v5-env-pin.js";
import { pinStorageV5 } from "../核心工具-未归类/pin-storage-v5.js";
import { primeWorkspaceRoots } from "../核心工具-未归类/chunk-bgf8jybv.js";
import { primePolicyLimitsCache, composePolicyLimitsClient, initializePolicyLimitsLoadingPromise } from "../../02-功能模块/策略限制-PolicyLimits/policy-limits-client.js";
import { startRemoteSettingsLoadBarrier, isRemoteSettingsLoadEligible, awaitRemoteSettingsFetchSettled } from "../设置-配置/remote-managed-settings.js";
import { primeFileDescriptorCredentials } from "../../02-功能模块/认证-OAuth登录/chunk-fpak7ean.js";
import { credentialsStoreFor } from "../../02-功能模块/认证-OAuth登录/credentials-store.js";
import { applyNodeExtraCaCertsFromConfig } from "../设置-配置/apply-node-extra-ca-certs.js";
import { resetRemoteSettingsSyncCache } from "../设置-配置/remote-settings-eligibility.js";
import { primePlatformDetection, getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
function w() {
  let t = getProviderState().providerCache;
  if (t.preconnectFired) return;
  if (
    ((t.preconnectFired = !0),
    getAPIProvider() !== "firstParty" || getForcedLoginMethod() === "gateway" || adminPolicyUnreadable())
  )
    return;
  if (
    a.HTTPS_PROXY ||
    a.https_proxy ||
    a.HTTP_PROXY ||
    a.http_proxy ||
    a.ANTHROPIC_UNIX_SOCKET ||
    a.CLAUDE_CODE_CLIENT_CERT ||
    a.CLAUDE_CODE_CLIENT_KEY
  )
    return;
  let r = a.ANTHROPIC_BASE_URL || getOauthConfig().BASE_API_URL;
  fetch(`${r.replace(/\/+$/, "")}/api/hello`, {
    method: "HEAD",
    signal: AbortSignal.timeout(1e4),
  }).catch(() => {});
}
class C {
  promise = void 0;
  telemetryInitialized = !1;
}
var A = new j(() => new C());
function y() {
  return A.of(B().host);
}
async function T(t = {}) {
  let r = Date.now();
  (writeDiagnosticsEvent("info", "init_started"), profileCheckpoint("init_function_start"));
  let e = t.storageV5EnvPin;
  if (e?.backend !== void 0 && !isSameAsConfigDir(e.configHome))
    (logForDebugging(
      `CLAUDE_CONFIG_DIR no longer names ${e.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`,
      { level: "warn" },
    ),
      (e = { ...e, backend: void 0 }));
  e ??= pinStorageV5FromEnv();
  try {
    let s = Date.now();
    if (isHoverRestEnabled() && e?.backend !== void 0)
      (await primeWorkspaceRoots(e.backend),
        await Promise.all([enableConfigs(e.backend), seedUserSettings(e.backend, getHostSettingsStore())]));
    else await enableConfigs();
    if (
      (writeDiagnosticsEvent("info", "init_configs_enabled", { duration_ms: Date.now() - s }),
      profileCheckpoint("init_configs_enabled"),
      isHoverRestEnabled() && e?.backend !== void 0)
    )
      primeWindowsCredManBackendEnabled(getGlobalConfig().cachedGrowthBookFeatures?.tengu_windows_credman === !0);
    if (isHoverRestEnabled() && e?.backend !== void 0)
      (await primeRemoteManagedSettingsCache(e.backend), profileCheckpoint("init_remote_settings_primed"));
    let c = credentialsStoreFor(e?.backend);
    if (isHoverRestEnabled() && c !== void 0)
      (await primeFileDescriptorCredentials(c),
        profileCheckpoint("init_fd_credentials_primed"),
        await primeStoredLoginCopy(c),
        profileCheckpoint("init_stored_login_primed"));
    g_e(shouldForceGatewayLogin);
    let p = Date.now();
    if (
      (applySafeConfigEnvironmentVariables(),
      await assertScrubSandboxAvailable(),
      applyNodeExtraCaCertsFromConfig(),
      await Promise.all([loadExtraCACerts(), loadMTLSClientMaterial(), primePlatformDetection(), primeSystemInfo()]),
      await installHostCredentials(),
      await restoreGatewayAuth(e?.backend !== void 0 && isSameAsConfigDir(e.configHome) ? c : void 0),
      ns())
    )
      resetRemoteSettingsSyncCache();
    (writeDiagnosticsEvent("info", "init_safe_env_vars_applied", { duration_ms: Date.now() - p }),
      profileCheckpoint("init_safe_env_vars_applied"));
    let o = pinStorageV5(e),
      m = credentialsStoreFor(o);
    if (isHoverRestEnabled() && o !== void 0) await primeWorkspaceRoots(o);
    if ((await primeSettings(o, getHostSettingsStore()), isHoverRestEnabled() && o !== void 0)) await primeProfileReadAhead(o);
    if (
      (composePolicyLimitsClient({ storageV5: o, credentials: m }),
      setGrowthBookCredentials(m),
      setGrowthBookStorageBackend(o),
      isHoverRestEnabled() && m !== void 0)
    ) {
      if ((await primeFileDescriptorCredentials(m), startupReadsStoredLogin())) await primeStoredLogin(m);
    }
    if (
      (await primePolicyLimitsCache(o),
      watchGlobalConfigThroughStorage(o),
      registerStorageFlushHandlers(o),
      setupGracefulShutdown({ storageV5: o, credentials: m }),
      profileCheckpoint("init_after_graceful_shutdown"),
      Promise.all([import("../核心工具-未归类/ATIS_REQUEST_HEADER.9bwp2jqb.js")]).then(([d]) => {
        d.onGrowthBookRefresh(() => {});
      }),
      profileCheckpoint("init_after_1p_event_logging"),
      setFeatureGateLookup((i) => getFeatureValue_CACHED_MAY_BE_STALE(i, !1)),
      populateOAuthAccountInfoIfNeeded(m, o).catch(logError),
      profileCheckpoint("init_after_oauth_populate"),
      primePlanSlugCollisions(o),
      import("../../02-功能模块/自动模式-AutoMode/unattended-serving-consent.js")
        .then((i) => i.primeUnattendedServingConsent())
        .catch(() => {}),
      setRepoDetectionGuards({ trustProbe: checkHasTrustDialogAccepted }),
      detectCurrentRepository(),
      isRemoteSettingsLoadEligible())
    )
      startRemoteSettingsLoadBarrier();
    if (isPolicyLimitsEligible()) initializePolicyLimitsLoadingPromise();
    if (
      (profileCheckpoint("init_after_remote_settings_check"),
      recordFirstStartTime(o),
      getOrCreateMachineID(o),
      isHoverRestEnabled() && o !== void 0)
    )
      getOrCreateUserID(o);
    let g = Date.now();
    (logForDebugging("[init] configureGlobalMTLS starting"),
      configureGlobalMTLS(),
      writeDiagnosticsEvent("info", "init_mtls_configured", { duration_ms: Date.now() - g }),
      logForDebugging("[init] configureGlobalMTLS complete"));
    let f = getProxyUrlWithSource();
    if (f && !parseProxyUrl(f.value)) throw new ud(describeInvalidProxyUrl(f.source, f.value));
    let S = Date.now();
    if (
      (logForDebugging("[init] configureGlobalAgents starting"),
      configureGlobalAgents(),
      writeDiagnosticsEvent("info", "init_proxy_configured", { duration_ms: Date.now() - S }),
      logForDebugging("[init] configureGlobalAgents complete"),
      profileCheckpoint("init_network_configured"),
      w(),
      Ie(process.env.CLAUDE_CODE_REMOTE))
    )
      try {
        // 原来指向 ./getAgentProxyEnv.25qhmvb6.js —— 那是个纯转出桶（无自身实现），已删除。
        // 该桶只是把 pfw3b51q 的 _gr / ygr / qit 转出为 initAgentProxy / getAgentProxyEnv /
        // PLACEHOLDER_CREDENTIAL_KEYS，这里直接用实现模块的原始名。
        let { initAgentProxy: i, getAgentProxyEnv: d } =
            await import("../HTTP-网络层/HTTP-网络层.pfw3b51q.js"),
          { registerAgentProxyEnvFn: b } = await import("../核心工具-进程与信号/subprocess-env-scrub.js");
        (b(d), await i());
      } catch (i) {
        logForDebugging(
          `[init] agent proxy init failed: ${i instanceof Error ? i.message : String(i)}; continuing without proxy`,
          { level: "warn" },
        );
      }
    if ((setupGitBashShellEnv(), getCurrentPlatform() === "windows" && !isBashToolAvailable())) {
      if (!isPowerShellToolEnabled())
        (console.error(`Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`),
          process.exit(1));
      if ((await getPowerShellPath()) === null)
        (console.error(`Claude Code on Windows requires either Git for Windows (for bash) or PowerShell. Install one of:
  - Git for Windows: https://git-scm.com/downloads/win
  - PowerShell 7: https://aka.ms/powershell
Or set CLAUDE_CODE_GIT_BASH_PATH to your bash.exe location.`),
          process.exit(1));
    }
    if (
      (registerCleanup(shutdownLspServerManager),
      registerCleanup(async () => {
        let { cleanupSessionTeams: i } = await import("../../02-功能模块/Teammates团队/team-file-store.js");
        await i(o);
      }),
      isScratchpadEnabled())
    ) {
      let i = Date.now();
      try {
        let d = await ensureScratchpadDir();
        writeDiagnosticsEvent(
          "info",
          d === null
            ? "init_scratchpad_unavailable"
            : "init_scratchpad_created",
          { duration_ms: Date.now() - i },
        );
      } catch (d) {
        logForDebugging(`init: ensureScratchpadDir failed: ${d}`, { level: "error" });
      }
    }
    return (
      sc(() => {
        if (isScratchpadEnabled())
          ensureScratchpadDir().catch((i) =>
            logForDebugging(`onSessionSwitch: ensureScratchpadDir failed: ${i}`, {
              level: "error",
            }),
          );
      }),
      subscribeToResetStreamNoEventsLatch(),
      subscribePromptCacheResetOnSessionChange(),
      registerKeepForeignThinkingReset(),
      writeDiagnosticsEvent("info", "init_completed", { duration_ms: Date.now() - r }),
      profileCheckpoint("init_function_end"),
      o
    );
  } catch (s) {
    if (s instanceof ud) {
      (process.stderr.write(`${s.message}
`),
        gracefulShutdownSync(1));
      return;
    }
    if (s instanceof YR) {
      if (!ke() && t.showInvalidConfigDialog) {
        await t.showInvalidConfigDialog({ error: s });
        return;
      }
      (process.stderr.write(`Configuration error in ${s.filePath}: ${s.message}
`),
        gracefulShutdownSync(1));
      return;
    } else throw s;
  }
}
function initializeApp(t) {
  return (y().promise ??= T(t));
}
function initializeTelemetryAfterTrust(t) {
  let r = y();
  if (isRemoteSettingsLoadEligible()) {
    if (ke() && isDetailedTracingEnabled())
      _(r, t).catch((e) => {
        try {
          logForDebugging(
            `[3P telemetry] Eager telemetry init failed (beta tracing): ${l(e)}`,
            { level: "error" },
          );
        } catch {}
      });
    (logForDebugging(
      "[3P telemetry] Waiting for remote managed settings fetch before telemetry init",
    ),
      awaitRemoteSettingsFetchSettled()
        .then(async () => {
          (logForDebugging(
            "[3P telemetry] Remote managed settings fetch settled, initializing telemetry",
          ),
            applyConfigEnvironmentVariables());
          let { captureAdmin3PSteeringSnapshot: e } =
            await import("../../02-功能模块/模型接入-Bedrock-Vertex/apply-3p-default-fallbacks.js");
          e();
          let [s, c] = await Promise.all([loadExtraCACerts(), loadMTLSClientMaterial()]);
          if (s || c.changed) (clearProxyCache(), configureGlobalAgents());
          await _(r, t);
        })
        .catch((e) => {
          if (_rt() && !r.telemetryInitialized)
            QXt(v() || O() ? "init_failed" : "not_configured");
          try {
            logForDebugging(
              `[3P telemetry] Telemetry init failed (remote settings path): ${l(e)}`,
              { level: "error" },
            );
          } catch {}
        }));
  } else
    _(r, t).catch((e) => {
      try {
        logForDebugging(`[3P telemetry] Telemetry init failed: ${l(e)}`, { level: "error" });
      } catch {}
    });
}
async function _(t, r) {
  if (t.telemetryInitialized) return;
  t.telemetryInitialized = !0;
  let e = "not_configured";
  try {
    await L(r);
  } catch (s) {
    if (((t.telemetryInitialized = !1), v())) e = "init_failed";
    throw s;
  } finally {
    QXt(e);
  }
}
function D(t) {
  return t.length > 0 && t.every((r) => r === "prometheus");
}
async function L(t) {
  let { initializeTelemetry: r } = await import("./flushTelemetry.jwarnhac.js"),
    { meter: e, metricsExporterKinds: s } = await r(t);
  if (e)
    (_Dn(
      e,
      (p, o) => {
        let m = e?.createCounter(p, o);
        return {
          add(g, f = {}) {
            let i = { ...buildOtelResourceAttributes(), ...f };
            m?.add(g, i);
          },
        };
      },
      { omitUnits: D(s) },
    ),
      yDn()?.add(1, { start_type: eLn() }));
}
function E(t) {
  return (t || "")
    .trim()
    .split(",")
    .filter(Boolean)
    .map((r) => r.trim())
    .some((r) => r !== "none");
}
function v() {
  return (
    Ie(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && E(a.OTEL_LOGS_EXPORTER)
  );
}
function O() {
  try {
    let t = getSettingsForSource("policySettings")?.env;
    if (!t) return !1;
    return (
      (Ie(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ||
        Ie(t.CLAUDE_CODE_ENABLE_TELEMETRY)) &&
      (E(a.OTEL_LOGS_EXPORTER) || E(t.OTEL_LOGS_EXPORTER))
    );
  } catch {
    return !1;
  }
}
export { initializeApp, initializeTelemetryAfterTrust };

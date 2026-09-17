// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ns, fv, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { withTimeout } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { isSimpleMode } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { CLAUDE_AI_INFERENCE_SCOPE } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import {
  isSemverLessThan,
  describeHowToDisableAuthTokenSource,
  getAuthTokenSource,
  getAnthropicApiKeyWithSource,
  getConfiguredApiKeyHelper,
  getClaudeAIOAuthTokens,
  isClaudeAISubscriber,
  hasProfileScope,
  getAllGrowthBookFeatures,
  hasFreshGrowthBookFeatures,
  isGrowthBookEnabled,
  getFeatureValue_CACHED_MAY_BE_STALE,
  checkGate_CACHED_OR_BLOCKING,
  refreshGrowthBookAfterAuthChange,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getGlobalConfig,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { isDebugMode, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getTelemetryDisabledEnvVar } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { getMergedSettings } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getSessionRuntimeState } from "../权限系统/chunk-ynkf3yy4.js";
import { getComplianceTaints } from "../../01-核心基础设施/核心工具-未归类/compliance-taints-store.js";
import { THIRD_PARTY_PROVIDER_LABELS, THIRD_PARTY_PROVIDER_ENV_VARS, getAPIProvider, isFirstPartyProvider, getSecondaryProvider, isActualFirstPartyAnthropicBaseUrl } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { formatComplianceTaintLabel, getNameableComplianceTaints, formatPolicyDeniedMessage, policyCacheMissMessage, policyRouteMissingMessage } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { getPolicyCacheRevision, isPolicyLimitsEligible, isPolicyAllowed, isPolicyRouteMissing, hasNameableComplianceTaint, getPolicyDefault, getResponseFromCache } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { REMOTE_CONTROL_DISABLED_BY_POLICY_MESSAGE, REMOTE_CONTROL_POLICY_UNVERIFIABLE_MESSAGE } from "./remote-control-policy-messages.js";
function isBridgeFirstParty() {
  if (!isFirstPartyProvider()) return !1;
  return !!a.ANTHROPIC_UNIX_SOCKET || isActualFirstPartyAnthropicBaseUrl();
}
function hasBridgeEntitlement() {
  return isBridgeFirstParty() && l() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_ccr_bridge", !1);
}
function getBridgeEntitlementBlocker() {
  if (hasBridgeEntitlement()) return null;
  if (!d()) return "not_signed_in";
  if (!l()) return "api_key_auth";
  if (!g()) return "no_profile_scope";
  return "not_in_rollout";
}
function u() {
  return !1;
}
function isRemoteControlHardDisabled() {
  return getMergedSettings()?.settings.disableRemoteControl === !0;
}
function isBridgeEnabled() {
  if (u()) return !0;
  if (isRemoteControlHardDisabled()) return !1;
  return !isRunningInRemoteEnvironment() && hasBridgeEntitlement();
}
function isRemoteControlDeploymentAvailable() {
  if (u()) return !0;
  return !isRemoteControlHardDisabled() && !isRunningInRemoteEnvironment() && isBridgeFirstParty();
}
async function isBridgeEnabledBlocking() {
  if (u()) return !0;
  if (isRemoteControlHardDisabled()) return !1;
  return isBridgeFirstParty() && !isRunningInRemoteEnvironment() && l() && (await checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge"));
}
var O =
  "Remote Control is disabled by your organization's policy. Contact your organization admin for access.";
function S() {
  return isPolicyLimitsCacheLoaded();
}
function describeRemoteControlPolicyDenial() {
  return formatPolicyDeniedMessage("Remote Control", "is", getComplianceTaints(), O);
}
async function getBridgeDisabledReason() {
  if (u()) return null;
  if (!isBridgeFirstParty()) return N();
  if (isRunningInRemoteEnvironment()) return "Remote Control is not available inside a cloud session.";
  if (isRemoteControlHardDisabled()) return REMOTE_CONTROL_DISABLED_BY_POLICY_MESSAGE;
  if (!d())
    return "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.";
  if (!l())
    return describeAuthPrecedenceBlocker({
      prefix: "Remote Control requires claude.ai subscription auth.",
      suffix: "to use Remote Control.",
    });
  if (!g())
    return "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.";
  if (!h()?.organizationUuid)
    return "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.";
  await ensurePolicyLimitsLoadedForDiagnostic();
  let e = getRemoteControlPolicyVerdict();
  if (e === "unavailable") return REMOTE_CONTROL_POLICY_UNVERIFIABLE_MESSAGE;
  if (e === "denied") return T();
  if (!isGrowthBookEnabled()) {
    let o = getTelemetryDisabledEnvVar();
    if (o)
      return `Remote Control requires feature-flag evaluation, which is disabled because ${o} is set. Unset it (or run in a shell without it) to use Remote Control.`;
    if (a.DISABLE_GROWTHBOOK)
      return "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control.";
    return "Remote Control requires feature-flag evaluation, which is unavailable in this environment.";
  }
  if (!(await checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge"))) {
    if (!hasFreshGrowthBookFeatures()) {
      if ((refreshGrowthBookAfterAuthChange(), await checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge"))) return null;
      if (!hasFreshGrowthBookFeatures())
        return "Couldn't verify Remote Control eligibility \u2014 the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.";
    }
    return "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.";
  }
  return null;
}
function T() {
  try {
    if (isPolicyRouteMissing()) return policyRouteMissingMessage("Remote Control");
    if (!hasNameableComplianceTaint()) return O;
    if (!S()) return policyCacheMissMessage("Remote Control");
    return describeRemoteControlPolicyDenial();
  } catch {
    return REMOTE_CONTROL_POLICY_UNVERIFIABLE_MESSAGE;
  }
}
function D(e) {
  return getNameableComplianceTaints(e).map(formatComplianceTaintLabel).join(", ");
}
function getRemoteControlPolicyLockReason() {
  if (u()) return null;
  if (isRemoteControlHardDisabled()) return REMOTE_CONTROL_DISABLED_BY_POLICY_MESSAGE;
  let e = getSessionRuntimeState(),
    o = getPolicyCacheRevision(),
    t = e.remoteControlLockReason;
  if (t !== void 0 && t.policyCacheRevision === o) return t.reason;
  let r = P();
  return (
    (e.remoteControlLockReason = { policyCacheRevision: o, reason: r }),
    r
  );
}
function P() {
  let e = getRemoteControlPolicyVerdict();
  if (e === "allowed") return null;
  if (e === "unavailable") return REMOTE_CONTROL_POLICY_UNVERIFIABLE_MESSAGE;
  return T();
}
function getBridgeAuthDebugInfo() {
  if (!isDebugMode()) return "";
  let e = (o) => (o ? "set" : "unset");
  try {
    let o = getClaudeAIOAuthTokens(),
      t = Object.values(THIRD_PARTY_PROVIDER_ENV_VARS).filter((r) => Ie(process.env[r]));
    return [
      "",
      "[debug] Remote Control auth state:",
      `  isBareMode=${isSimpleMode()}`,
      `  hasOAuthAccessToken=${!!o?.accessToken}`,
      `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`,
      `  hasClaudeAIInferenceScope=${d()}`,
      `  isClaudeAISubscriber=${l()}`,
      `  hasProfileScope=${g()}`,
      `  oauthAccount.organizationUuid=${h()?.organizationUuid ? "set" : "unset"}`,
      `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`,
      `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`,
      `  apiKeyHelper=${getConfiguredApiKeyHelper() ? "set" : "unset"}`,
      `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`,
      `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`,
      `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`,
      `  3P env=${t.length ? t.join(",") : "none"}`,
      ...v(),
    ].join(`
`);
  } catch (o) {
    return `
[debug] failed to collect auth state: ${o}`;
  }
}
function v() {
  let e = (r) => (r ? "set" : "unset"),
    o = getAllGrowthBookFeatures(),
    t = L();
  return [
    `  isGrowthBookEnabled=${isGrowthBookEnabled()}`,
    `  telemetryDisabledBy=${getTelemetryDisabledEnvVar() ?? "none"}`,
    `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`,
    `  hasFreshGrowthBookFeatures=${hasFreshGrowthBookFeatures()}`,
    `  growthBookFeaturesLoaded=${Object.keys(o).length}`,
    `  growthBookLastFetched=${t ? `${w(Date.now() - t)} ago` : "never"}`,
    `  tengu_ccr_bridge=${String(o.tengu_ccr_bridge ?? "unset")}`,
  ];
}
async function getBridgeDoctorInfo() {
  if (isRunningInRemoteEnvironment() && !u())
    return { disabledReason: null, inRemoteSession: !0, checks: [] };
  (refreshGrowthBookAfterAuthChange(), await ensurePolicyLimitsLoadedForDiagnostic());
  let e = await getBridgeDisabledReason(),
    o = getTelemetryDisabledEnvVar() ?? (a.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null),
    t = isBridgeFirstParty(),
    r = !isRemoteControlHardDisabled(),
    i = d(),
    _ = l(),
    f = g(),
    p = !!h()?.organizationUuid,
    c = getRemoteControlPolicyVerdict(),
    m = S(),
    I = D(getComplianceTaints()),
    E = isGrowthBookEnabled(),
    C = await checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge"),
    R = hasFreshGrowthBookFeatures(),
    B = [
      {
        label: t
          ? "Connected to the Anthropic API (api.anthropic.com)"
          : "Not connected to the Anthropic API (api.anthropic.com)",
        ok: t,
      },
      {
        label: r
          ? "Not disabled by org policy (disableRemoteControl)"
          : "Disabled by org policy (disableRemoteControl)",
        ok: r,
      },
      {
        label: i ? "Signed in to claude.ai" : "Not signed in to claude.ai",
        ok: i,
      },
      {
        label: _
          ? "claude.ai subscription active"
          : "claude.ai subscription auth not active",
        ok: _,
      },
      {
        label: f
          ? "Sign-in includes the user:profile scope"
          : "Sign-in is missing the user:profile scope",
        ok: f,
      },
      {
        label: p ? "Organization resolved" : "Organization not resolved",
        ok: p,
      },
      {
        label:
          c === "allowed"
            ? "Org policy allows Remote Control (allow_remote_control)"
            : c === "unavailable"
              ? "Org policy could not be verified (allow_remote_control)"
              : !m
                ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)"
                : "Org policy does not allow Remote Control (allow_remote_control)",
        ok: c === "allowed",
        detail: I || void 0,
      },
      {
        label: E
          ? "Feature-flag evaluation enabled"
          : "Feature-flag evaluation disabled",
        ok: E,
        detail: o ? `disabled by ${o}` : void 0,
      },
      {
        label: C
          ? "Remote Control enabled for this account"
          : R
            ? "Remote Control not enabled for this account"
            : "Remote Control availability could not be verified",
        ok: C,
        detail: R ? void 0 : "no server response this session",
      },
    ];
  return {
    disabledReason:
      e !== null && t && r && i && _ && f && p && c === "denied" && !m
        ? "Remote Control needs your organization's policy, which isn't loaded \u2014 see the Organization policy line above."
        : e,
    inRemoteSession: !1,
    checks: B,
  };
}
function L() {
  try {
    return getGlobalConfig().cachedGrowthBookFeaturesAt;
  } catch {
    return;
  }
}
function w(e) {
  let o = Math.round(e / 1000);
  if (o < 120) return `${o}s`;
  let t = Math.round(o / 60);
  if (t < 120) return `${t}m`;
  let r = Math.round(t / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}
function describeAuthPrecedenceBlocker({ prefix: e, suffix: o }) {
  try {
    let { source: t } = getAnthropicApiKeyWithSource({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (t === "ANTHROPIC_API_KEY")
      return `${e} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${o}`;
    if (t === "apiKeyHelper")
      return `${e} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${o}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN)
      return `${e} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${o}`;
    let { source: r } = getAuthTokenSource(),
      i = describeHowToDisableAuthTokenSource(r);
    if (r !== "none" && i)
      return `${e} This session is using ${r} auth \u2014 ${i}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET)
      return `${e} ANTHROPIC_UNIX_SOCKET is set (claude ssh remote), and the local proxy is API-key-authed.`;
  } catch {}
  return `${e} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${o}`;
}
var s =
    "Remote Control is only available when using Claude via api.anthropic.com.",
  A = "unset it (or run in a shell without it) to use Remote Control.",
  y = "unset them (or run in a shell without them) to use Remote Control.";
function N() {
  let e = getAPIProvider();
  if (e !== "firstParty") {
    if (e === "gateway")
      return fv(ns())
        ? `${s} This session is connected through an enterprise cloud gateway (set up via /login), which does not support Remote Control.`
        : `${s} CLAUDE_CODE_USE_GATEWAY is set (the gateway on-ramp also requires ANTHROPIC_BASE_URL and ANTHROPIC_AUTH_TOKEN), so this session is routed through a cloud gateway \u2014 ${y}`;
    if (e === "bedrock" && getSecondaryProvider() === "mantle")
      return `${s} ${THIRD_PARTY_PROVIDER_ENV_VARS.bedrock} and ${THIRD_PARTY_PROVIDER_ENV_VARS.mantle} are set, so this session is using ${THIRD_PARTY_PROVIDER_LABELS.bedrock} + ${THIRD_PARTY_PROVIDER_LABELS.mantle} \u2014 ${y}`;
    return `${s} ${THIRD_PARTY_PROVIDER_ENV_VARS[e]} is set, so this session is using ${THIRD_PARTY_PROVIDER_LABELS[e]} \u2014 ${A}`;
  }
  if (!isActualFirstPartyAnthropicBaseUrl()) {
    let o = a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL
      ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)"
      : "";
    return `${s} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint \u2014 ${A}${o}`;
  }
  return s;
}
function d() {
  try {
    return Boolean(getClaudeAIOAuthTokens()?.scopes?.includes(CLAUDE_AI_INFERENCE_SCOPE));
  } catch {
    return !1;
  }
}
function l() {
  try {
    return isClaudeAISubscriber();
  } catch {
    return !1;
  }
}
function g() {
  try {
    return hasProfileScope();
  } catch {
    return !1;
  }
}
function h() {
  try {
    return getGlobalConfig().oauthAccount;
  } catch {
    return;
  }
}
async function ensurePolicyLimitsLoadedForDiagnostic() {
  try {
    await k();
  } catch (e) {
    logForDebugging(
      `[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${e instanceof Error ? e.message : String(e)}`,
    );
  }
}
async function k() {
  try {
    if (getResponseFromCache() !== null) return;
  } catch {}
  let e = await import("../../01-核心基础设施/核心工具-未归类/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js");
  e.initializePolicyLimitsLoadingPromise();
  let o = getSessionRuntimeState();
  if (o.diagnosticPolicyKick === void 0) {
    let t = e.loadPolicyLimits();
    (t
      .catch(() => {})
      .finally(() => {
        o.diagnosticPolicyKick = void 0;
      }),
      (o.diagnosticPolicyKick = withTimeout(
        t,
        e.POLICY_LIMITS_COLD_AWAIT_MS,
        "bridge_diagnostic_policy_limits",
      ).catch(() => {})));
  }
  await o.diagnosticPolicyKick;
}
function getRemoteControlPolicyVerdict() {
  try {
    return isPolicyAllowed("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function isRemoteControlOfferable() {
  return isBridgeEnabled() && getRemoteControlPolicyVerdict() === "allowed";
}
function isPolicyLimitsCacheLoaded() {
  if (!isPolicyLimitsEligible()) return !0;
  return getResponseFromCache() !== null;
}
function isRunningInRemoteEnvironment() {
  return Ie(process.env.CLAUDE_CODE_REMOTE) || Nn();
}
function isCseShimEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_repl_v2_cse_shim_enabled", !0);
}
function isBridgeStateFramesEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_luminous_seal", !0);
}
function isBridgePartialMessagesEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_partial_messages", !1);
}
function isSdkBridgeStateAnnounceEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_wobbly_pinwheel", !0);
}
function isBridgeEffortSyncEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_copper_kestrel", !0);
}
function isBridgeAuthReviveEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_auth_revive", !0);
}
function isBridgeNonOrigin403RetryEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_ethereal_mist", !0);
}
function isBridgeResumeRespectsLocalOwnerEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_resume_respects_local_owner", !0);
}
function isBridgeRestoredMatchMintEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_sequential_puffin", !0);
}
function isBridgeOwnerPinnedEndEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_owner_pinned_end", !0);
}
function isBridgeEnvReregisterEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_glimmering_glade", !0);
}
function isBridgeHostDeclinedEndEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_host_declined_end", !0);
}
function isBridgeSignedOutNeutralEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_signed_out_neutral", !0);
}
function isCcrV2SendEventsEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_ccr_v2_send_events_cli", !0);
}
function isCcrV2SessionCrudEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_ccr_v2_session_crud_cli", !1);
}
function isCcrV2BridgeCreateEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_ccr_v2_bridge_create_cli", !1);
}
function isBridgeRateLimitEventEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_composed_quail", !0);
}
function isQuotaRejectedReemitEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_gravel_chorus", !0);
}
function checkBridgeMinVersion() {
  let e = getDynamicConfig_CACHED_MAY_BE_STALE("tengu_bridge_min_version", { minVersion: "0.0.0" });
  if (
    e.minVersion &&
    isSemverLessThan(
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
      e.minVersion,
    )
  )
    return `Your version of Claude Code (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) is too old for Remote Control.
Version ${e.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function getCcrAutoConnectDefault() {
  return resolveCcrAutoConnectDefault().value;
}
function resolveCcrAutoConnectDefault() {
  if (isRunningInRemoteEnvironment()) return { value: !1, source: "remote_env" };
  if (isPersistentRemoteSessionEnabled()) return { value: !0, source: "persistent_remote_session" };
  let e = getPolicyDefault("remote_control_at_startup");
  if (e !== void 0) return { value: e, source: "org_policy" };
  return { value: getFeatureValue_CACHED_MAY_BE_STALE("tengu_cobalt_harbor", !1), source: "growthbook" };
}
function isPersistentRemoteSessionEnabled() {
  return !1;
}
function isUdsEnableRemoteControlEnabled() {
  return !1;
}
function isRemoteControlInternalEventsEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_relay", !1);
}
function isBridgeServerSessionConfigEnabled() {
  return !1;
}
function getBridgeSubagentFrameGate() {
  return {
    enabled: getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_subagent_frames", !0),
    forwardText: getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_subagent_text", !1),
  };
}
function applyRemoteControlToAppState(e, o) {
  if (e.replBridgeOutboundOnly && !o)
    return e.replBridgeSessionGroupingId !== void 0
      ? { ...e, replBridgeSessionGroupingId: void 0 }
      : e;
  if (e.replBridgeEnabled === o && !e.replBridgeOutboundOnly)
    return !o && e.replBridgeSessionGroupingId !== void 0
      ? { ...e, replBridgeSessionGroupingId: void 0 }
      : e;
  return {
    ...e,
    replBridgeEnabled: o,
    replBridgeOutboundOnly: !1,
    ...(!o && { replBridgeSessionGroupingId: void 0 }),
  };
}
export {
  isBridgeFirstParty,
  hasBridgeEntitlement,
  getBridgeEntitlementBlocker,
  isRemoteControlHardDisabled,
  isBridgeEnabled,
  isRemoteControlDeploymentAvailable,
  isBridgeEnabledBlocking,
  describeRemoteControlPolicyDenial,
  getBridgeDisabledReason,
  getRemoteControlPolicyLockReason,
  getBridgeAuthDebugInfo,
  getBridgeDoctorInfo,
  describeAuthPrecedenceBlocker,
  ensurePolicyLimitsLoadedForDiagnostic,
  getRemoteControlPolicyVerdict,
  isRemoteControlOfferable,
  isPolicyLimitsCacheLoaded,
  isRunningInRemoteEnvironment,
  isCseShimEnabled,
  isBridgeStateFramesEnabled,
  isBridgePartialMessagesEnabled,
  isSdkBridgeStateAnnounceEnabled,
  isBridgeEffortSyncEnabled,
  isBridgeAuthReviveEnabled,
  isBridgeNonOrigin403RetryEnabled,
  isBridgeResumeRespectsLocalOwnerEnabled,
  isBridgeRestoredMatchMintEnabled,
  isBridgeOwnerPinnedEndEnabled,
  isBridgeEnvReregisterEnabled,
  isBridgeHostDeclinedEndEnabled,
  isBridgeSignedOutNeutralEnabled,
  isCcrV2SendEventsEnabled,
  isCcrV2SessionCrudEnabled,
  isCcrV2BridgeCreateEnabled,
  isBridgeRateLimitEventEnabled,
  isQuotaRejectedReemitEnabled,
  checkBridgeMinVersion,
  getCcrAutoConnectDefault,
  resolveCcrAutoConnectDefault,
  isPersistentRemoteSessionEnabled,
  isUdsEnableRemoteControlEnabled,
  isRemoteControlInternalEventsEnabled,
  isBridgeServerSessionConfigEnabled,
  getBridgeSubagentFrameGate,
  applyRemoteControlToAppState,
};

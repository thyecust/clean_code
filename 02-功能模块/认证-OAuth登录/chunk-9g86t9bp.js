// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B, l_e, N0, kW, p8 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { CLAUDE_AI_INFERENCE_SCOPE, CLAUDE_AI_PROFILE_SCOPE } from "./chunk-9g2q4bjq.js";
import { logFeatureOk } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  resetFableEntitlementProbe,
  getProviderState,
  resetUserData,
  deactivateServedCatalog,
  resetBetaCaches,
  isBgSession,
  revokeOAuthToken,
  invalidateToolDefinitionCache,
  isProfileAuthShadowed,
  removeApiKey,
  clearOAuthTokenMemos,
  getAnthropicApiKeyWithSourceAsyncSafe,
  refreshGrowthBookAfterAuthChange,
  saveGlobalConfig,
} from "./认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Iae, _dr, lot, R, l, A, Rt, Bp } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { THIRD_PARTY_PROVIDER_LABELS, getAPIProvider, isFirstPartyAnthropicHost } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { ORe, KD } from "./chunk-wk0e3dz4.js";
import { SECURE_STORAGE_READ_FAILED_SENTINEL, withSecureStorageWriteLock, runSecureStorageWriteWithoutLock, invalidateCredentialsCopyCache, getSecureStorage } from "./secure-storage.js";
import { clearTrustedDeviceTokenCache } from "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import { clearLowPriorityBudgetSpent, endLowPriorityMode, resetObservedLimits, resetLimitGraceState, resetNearLimitHintState, invalidateUserContext } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { clearOrgMemoryCredential } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { emitAuthEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { Der, Ler } from "../Artifact发布-渲染/chunk-rr78st95.js";
import { withCredentialsLock, resetWIFCredentialState } from "./wif-credentials.js";
import { getAccountSettings, getGroveConfig, githubConnectionStatusStore } from "../Grove-隐私设置/chunk-a4mdm49v.js";
import { cGn } from "../Artifact发布-渲染/chunk-y8j05azr.js";
import { Jx } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { XAn } from "../策略限制(PolicyLimits)/chunk-hpw6352m.js";
import { hlt } from "../../01-核心基础设施/设置-配置/chunk-1pbaa558.js";
import { SUBSCRIPTION_SWITCH_NOTICE_ID } from "../../01-核心基础设施/共享小工具-未细化/announcement-notices.js";
import { s, it } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import {
  mkdir,
  readFile,
  unlink,
  writeFile,
} from "fs/promises";
import { join as C } from "path";
var uIe = "41077d10-94b8-4194-be48-d251e9eb21b4",
  UBn = [CLAUDE_AI_PROFILE_SCOPE, CLAUDE_AI_INFERENCE_SCOPE],
  x = /^[A-Za-z0-9_.-]+$/,
  P = { created_by: "claude-code" },
  j = createLazyValue(() =>
    it({
      created_by: s().optional(),
      base_url: s().optional(),
      authentication: it({
        type: s(),
        client_id: s().optional(),
        credentials_path: s().optional(),
      }),
    }),
  ),
  G = createLazyValue(() => it({ created_by: s().optional() })),
  b = {
    no_config_dir: !0,
    invalid_profile_name: !0,
    foreign_profile: !0,
    custom_credentials_path: !0,
    api_key_env_nondispatching: !0,
    wif_env_quad: !1,
    third_party_provider: !1,
    api_key_env: !1,
    env_credential_shadow: !1,
    other_deployment_profile: !1,
    federation_profile: !1,
    unreadable_profile: !1,
  };
function W(e) {
  return Object.hasOwn(b, e);
}
function BBn(e) {
  if (!(e instanceof R) || e.errorClass === void 0 || !W(e.errorClass))
    return null;
  return b[e.errorClass];
}
var N = {
  no_config_dir: "no Anthropic config directory was found",
  invalid_profile_name: "the configured profile name isn't valid",
  foreign_profile: "the profile on this machine belongs to another tool",
  custom_credentials_path:
    "the existing profile keeps its sign-in somewhere custom",
  api_key_env_nondispatching: "ANTHROPIC_API_KEY is set in this environment",
};
function jBn(e) {
  if (!(e instanceof R) || e.errorClass === void 0 || !Y(e.errorClass))
    return null;
  return N[e.errorClass];
}
function Y(e) {
  return Object.hasOwn(N, e);
}
async function ODt() {
  if (
    !D(a.ANTHROPIC_PROFILE) &&
    a.ANTHROPIC_FEDERATION_RULE_ID &&
    a.ANTHROPIC_ORGANIZATION_ID
  )
    throw new R(
      "Workload identity federation is configured in this environment (ANTHROPIC_FEDERATION_RULE_ID and ANTHROPIC_ORGANIZATION_ID), and it takes precedence over the default profile. Set ANTHROPIC_PROFILE to a profile name to sign in with a profile that outranks it.",
      "Console profile login refused: env-quad federation outranks the implicit profile",
      "wif_env_quad",
    );
  let e = getAPIProvider();
  if (e !== "firstParty")
    throw new R(
      `This session uses ${THIRD_PARTY_PROVIDER_LABELS[e]}, which does not use Anthropic Console sign-in.`,
      "This session uses a third-party provider, which does not use Anthropic Console sign-in.",
      "third_party_provider",
    );
  let o = a.ANTHROPIC_API_KEY;
  if (o) {
    let c = await getAnthropicApiKeyWithSourceAsyncSafe({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (c.source === "ANTHROPIC_API_KEY" && c.key === o)
      throw new R(
        "ANTHROPIC_API_KEY is set in this environment and takes precedence over a profile, so a profile sign-in would not be used. Unset it to sign in this way.",
        "Console profile login refused: env credential shadows the profile",
        "api_key_env",
      );
  }
  if (isProfileAuthShadowed())
    throw new R(
      "Something in this environment \u2014 an API key helper, an injected token, or a third-party provider setting \u2014 takes precedence over a profile sign-in, so it would not be used here.",
      "Console profile login refused: env credential shadows the profile",
      "env_credential_shadow",
    );
  let t = KD();
  if (t === null)
    throw new R(
      "Cannot locate the Anthropic config directory. Set ANTHROPIC_CONFIG_DIR (or HOME) and try again.",
      "Console profile login refused: no config directory",
      "no_config_dir",
    );
  let i = I(t),
    f = await k(C(t, "configs", `${i}.json`));
  if (f !== null) {
    if (f.base_url && !isFirstPartyAnthropicHost(f.base_url))
      throw new R(
        "This profile is bound to a different Anthropic deployment, so Claude Code will not replace it here. Sign out of it with the tool that created it, then try again.",
        "Console profile login refused: profile bound to another deployment",
        "other_deployment_profile",
      );
    if (f.authentication.type === "oidc_federation")
      throw new R(
        "This machine is set up for workload identity federation, which signs in on its own. If you need a different sign-in, ask whoever configured it.",
        "Console profile login refused: federation profile",
        "federation_profile",
      );
    if (f.authentication.type !== "user_oauth")
      throw new R(
        "Claude Code cannot read the existing sign-in on this machine, so it will not overwrite it. Check the permissions on your Anthropic config directory, then try again.",
        "Console profile login refused: unreadable or unrecognized profile config",
        "unreadable_profile",
      );
    if (f.authentication.client_id !== uIe)
      throw new R(
        "This machine already has a sign-in from another tool that Claude Code cannot replace. Sign out with that tool, then try again.",
        "Console profile login refused: profile is not a same-client login",
        "foreign_profile",
      );
    if (f.authentication.credentials_path)
      throw new R(
        "This profile keeps its sign-in somewhere custom, so Claude Code cannot replace it. Sign out of it with the tool that created it, then try again.",
        "Console profile login refused: custom credentials_path",
        "custom_credentials_path",
      );
  }
  if (o)
    throw new R(
      "ANTHROPIC_API_KEY is set in this environment. Unset it to sign in without an API key.",
      "Console profile login refused: non-dispatching env API key present",
      "api_key_env_nondispatching",
    );
  return { profile: i, configDir: t, isNewProfile: f === null };
}
async function WBn(e) {
  let o = await ODt();
  return (
    await mkdir(C(o.configDir, "credentials"), { recursive: !0, mode: 448 }),
    withCredentialsLock(w(o.configDir, o.profile), () => q(e))
  );
}
async function q(e) {
  let { profile: o, configDir: t, isNewProfile: i } = await ODt(),
    f = C(t, "configs", `${o}.json`);
  await mkdir(C(t, "configs"), { recursive: !0, mode: 448 });
  let c = {
    version: _dr,
    organization_id: e.organizationUuid,
    workspace_id: e.workspaceId,
    authentication: { type: "user_oauth", client_id: uIe },
    ...P,
  };
  await Iae(f, c);
  let g = i,
    p = {
      version: lot,
      type: "oauth_token",
      access_token: e.accessToken,
      refresh_token: e.refreshToken,
      expires_at: Math.floor(e.expiresAtMs / 1000),
      scope: e.scopes.join(" "),
      organization_uuid: e.organizationUuid,
      organization_name: e.organizationName,
      account_email: e.accountEmail,
    };
  await Iae(w(t, o), {
    ...p,
    workspace_id: e.workspaceId,
    workspace_name: e.workspaceName,
    ...P,
  });
  let E = await Z(
    C(t, "active_config"),
    o +
      `
`,
  );
  return (
    n(
      `Console profile login: wrote credentials for profile ${o}${g ? " (new profile)" : ""}${E ? " (set active)" : ""}`,
    ),
    resetWIFCredentialState(),
    { profile: o, configDir: t }
  );
}
async function L({ revoke: e } = {}) {
  try {
    let o = KD();
    if (o === null) return { removed: !1 };
    let t;
    try {
      t = I(o);
    } catch {
      return { removed: !1 };
    }
    let i = await k(C(o, "configs", `${t}.json`));
    if (i === null || !F(i)) return { removed: !1 };
    if ((await S(w(o, t))) === null) return { removed: !1 };
    return await withCredentialsLock(w(o, t), () => V(e));
  } catch (o) {
    if (A(o) === "ENOENT") return { removed: !1 };
    return (
      n(`Logout: profile credential removal failed: ${l(o)}`, {
        level: "error",
      }),
      { removed: !1 }
    );
  }
}
async function V(e) {
  let o = KD();
  if (o === null) return { removed: !1 };
  let t;
  try {
    t = I(o);
  } catch {
    return { removed: !1 };
  }
  let i = await k(C(o, "configs", `${t}.json`));
  if (i === null || !F(i)) return { removed: !1 };
  let f = w(o, t),
    c = await S(f);
  if (c === null) return { removed: !1 };
  let g = { refreshToken: c.refreshToken, clientId: uIe };
  if (e && g.refreshToken)
    await e({ refreshToken: g.refreshToken, clientId: g.clientId });
  try {
    await unlink(f);
  } catch (p) {
    return (
      n(`Logout: could not remove profile credentials: ${l(p)}`, {
        level: "error",
      }),
      { removed: !1, ...g }
    );
  }
  return (
    n(`Logout: removed credentials for profile ${t}`),
    resetWIFCredentialState(),
    { removed: !0, ...g }
  );
}
function I(e) {
  let o = a.ANTHROPIC_PROFILE || ORe(e);
  if (!D(o))
    throw new R(
      `ANTHROPIC_PROFILE "${o}" is not a valid profile name (letters, digits, '_', '.', '-')`,
      "ANTHROPIC_PROFILE is not a valid profile name",
      "invalid_profile_name",
    );
  return o;
}
function D(e) {
  return !!e && x.test(e) && e !== "." && e !== "..";
}
function w(e, o) {
  return C(e, "credentials", `${o}.json`);
}
async function k(e) {
  let o;
  try {
    o = await readFile(e, "utf-8");
  } catch (f) {
    if (A(f) === "ENOENT") return null;
    if (Rt(f)) return { authentication: { type: "unreadable" } };
    throw f;
  }
  let t;
  try {
    t = z(o);
  } catch (f) {
    return (
      n(`Profile config is not JSON, treating as foreign: ${l(f)}`),
      { authentication: { type: "unreadable" } }
    );
  }
  let i = j().safeParse(t);
  return i.success ? i.data : { authentication: { type: "unreadable" } };
}
function F(e) {
  return (
    e.created_by === P.created_by &&
    e.authentication.type === "user_oauth" &&
    e.authentication.client_id === uIe
  );
}
async function S(e) {
  let o;
  try {
    o = await readFile(e, "utf-8");
  } catch (c) {
    if (Rt(c)) return null;
    throw c;
  }
  let t;
  try {
    t = z(o);
  } catch {
    return null;
  }
  let i = G().safeParse(t);
  if (!i.success || i.data.created_by !== P.created_by) return null;
  let f = i.data.refresh_token;
  return { refreshToken: typeof f === "string" ? f : void 0 };
}
async function GBn(e) {
  let o = KD();
  if (o === null) return !1;
  try {
    let t = await S(w(o, I(o)));
    return t !== null && t.refreshToken === e;
  } catch {
    return !0;
  }
}
async function Z(e, o) {
  try {
    return (await writeFile(e, o, { flag: "wx", mode: 420 }), !0);
  } catch (t) {
    if (A(t) === "EEXIST") return !1;
    throw t;
  }
}
async function performLogout({
  clearOnboarding: e = !1,
  preserveInProcessTokens: o = !1,
  preserveNonAnthropicAuth: t = !1,
  storageV5: i,
  preserveQuotaAutoResume: f = !1,
  artifactAccount: c = "signed_out",
  incomingIdentity: g,
  credentials: p,
}) {
  let { flushTelemetry: E } = await import("../../01-核心基础设施/遥测-OpenTelemetry/flushTelemetry.jwarnhac.js");
  if ((await E(), await Ler(c), isBgSession())) {
    await clearAuthRelatedCaches(i, {
      preserveQuotaAutoResume: f,
      artifactAccount: c,
      incomingIdentity: g,
    });
    return;
  }
  if (!o && getAPIProvider() === "firstParty") {
    let d = getSecureStorage();
    d.invalidateCache?.();
    let r = await d.readAsync(p),
      u = r?.claudeAiOauth;
    if (u?.refreshToken) await revokeOAuthToken(u.refreshToken, u.clientId);
    let v = r?.designOauth;
    if (v?.refreshToken) await revokeOAuthToken(v.refreshToken, v.clientId);
  }
  if (!o) (a.unset("CLAUDE_CODE_OAUTH_TOKEN"), N0(null));
  (await removeApiKey(i),
    await L({
      revoke:
        !o && getAPIProvider() === "firstParty"
          ? ({ refreshToken: d, clientId: r }) => revokeOAuthToken(d, r)
          : void 0,
    }));
  let _ = getSecureStorage();
  if (t) {
    if (getAPIProvider() === "firstParty") {
      _.invalidateCache?.();
      let d = (await _.readAsync(p))?.designOauth;
      if (d?.refreshToken) await revokeOAuthToken(d.refreshToken, d.clientId);
    }
    await _.mutate((d) => {
      let r = { ...d };
      return (
        delete r.claudeAiOauth,
        delete r.organizationUuid,
        delete r.trustedDeviceToken,
        delete r.enterpriseGateway,
        delete r.designOauth,
        r
      );
    }, p).catch((d) => {
      let r = A(d);
      if (r === "EPERM" || r === "ENOENT" || Bp(d)) {
        n(
          `[performLogout] re-login secure-storage prune failed (${r}): ${l(d)}`,
          { level: "error" },
        );
        return;
      }
      logError(d);
    });
  } else {
    let d = !1,
      r = async () => {
        d = !0;
        let u = await J(_, p);
        if ((await _.delete(p), u && Object.keys(u).length > 0))
          await Q(_, u, p);
      };
    await withSecureStorageWriteLock(r).catch((u) => {
      if (d) throw u;
      return (logError(u), runSecureStorageWriteWithoutLock(r));
    });
  }
  (kW(null),
    p8(null),
    await clearAuthRelatedCaches(i, {
      preserveQuotaAutoResume: f,
      artifactAccount: c,
      incomingIdentity: g,
      credentials: p,
    }),
    await saveGlobalConfig((d) => {
      let r = { ...d };
      if (e) {
        if (
          ((r.hasCompletedOnboarding = !1),
          (r.subscriptionNoticeCount = 0),
          (r.hasAvailableSubscription = !1),
          r.customApiKeyResponses?.approved)
        )
          r.customApiKeyResponses = {
            ...r.customApiKeyResponses,
            approved: [],
          };
        let u = SUBSCRIPTION_SWITCH_NOTICE_ID;
        if (r.seenNotifications?.[u] !== void 0) {
          let { [u]: v, ...H } = r.seenNotifications;
          r.seenNotifications = H;
        }
      }
      return (
        (r.oauthAccount = void 0),
        (r.additionalModelOptionsCache = void 0),
        (r.additionalModelOptionsAnsweredAt = void 0),
        (r.additionalModelCostsCache = void 0),
        (r.modelAccessCache = void 0),
        (r.orgModelDefaultCache = void 0),
        (r.lastSeenOrgDefaultUpdatedAt = void 0),
        (r.clientDataCache = void 0),
        (r.clientDataCacheSlots = void 0),
        (r.autoCompactWindowsCache = void 0),
        (r.cachedUsageUtilization = void 0),
        (r.githubWebConnectionStatusCache = void 0),
        (r.startupPrefetchedAt = void 0),
        r
      );
    }, i),
    l_e(void 0),
    logFeatureOk("oauth_logout"));
}
async function clearAuthRelatedCaches(
  e,
  {
    preserveQuotaAutoResume: o = !1,
    artifactAccount: t = "signed_out",
    incomingIdentity: i,
    credentials: f,
  } = {},
) {
  if ((clearOAuthTokenMemos(), isHoverRestEnabled() && f === void 0)) invalidateCredentialsCopyCache();
  (clearTrustedDeviceTokenCache(),
    resetBetaCaches(),
    getProviderState().providerCache.modelConfigs.clear(),
    resetFableEntitlementProbe(),
    getProviderState().providerCache.validatedModels.clear(),
    deactivateServedCatalog(),
    invalidateToolDefinitionCache(),
    clearOrgMemoryCredential());
  let c = B();
  if (
    (cGn(c.host),
    Der(t, i),
    githubConnectionStatusStore.of(c.host).clear(),
    resetUserData(),
    invalidateUserContext(c, "account_change"),
    refreshGrowthBookAfterAuthChange(),
    getGroveConfig.cache?.clear?.(),
    getAccountSettings.cache?.clear?.(),
    await hlt(e),
    await XAn(),
    resetLimitGraceState(),
    resetNearLimitHintState(),
    !o)
  )
    (Jx("account_switch"), endLowPriorityMode("account_switch"), clearLowPriorityBudgetSpent());
  resetObservedLimits();
}
async function fleetHostLogout({
  exit: e,
  setError: o,
  setInfo: t,
  storageV5: i,
  credentials: f,
}) {
  (t("Signing out\u2026"),
    emitAuthEvent({ action: "logout", success: !0, authMethod: "oauth" }));
  try {
    (await performLogout({ clearOnboarding: !0, storageV5: i, credentials: f }), e());
  } catch (c) {
    (logError(c),
      o(
        `Couldn't sign out \u2014 ${c instanceof Error ? c.message : String(c)}`,
      ));
  }
}
async function Q(e, o, t) {
  let i;
  for (let f = 0; f < 2; f++)
    try {
      let c = await e.mutate(() => ({ coworkRemoteDevice: o }), t);
      if (c.success) return;
      if (
        ((i = Error(
          "logout: the device identity could not be written back after the credential wipe",
        )),
        !c.transient)
      )
        break;
    } catch (c) {
      i = c;
    }
  logError(i);
}
async function J(e, o) {
  for (let t = 0; t < 2; t++) {
    let i = await (e.readAsyncStrict?.(o) ?? e.readAsync(o));
    if (i !== SECURE_STORAGE_READ_FAILED_SENTINEL) return i?.coworkRemoteDevice;
  }
  logError(
    Error(
      "logout: secure storage could not be read, so the device identity is not carried across the wipe",
    ),
  );
  return;
}
export { uIe, UBn, BBn, jBn, ODt, WBn, GBn, performLogout, clearAuthRelatedCaches, fleetHostLogout };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { uZ, N0, yje, p8 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  httpClient,
  fetchOAuthProfileWithToken,
  shouldUseClaudeAIAuth,
  fetchAndStoreUserRoles,
  createAndStoreApiKey,
  storeOAuthAccountInfo,
  saveOAuthTokensIfNeeded,
  clearOAuthTokenMemos,
  getClaudeAIOAuthTokenOriginAsync,
  clearOAuthTokenCache,
  getClaudeAIOAuthTokensAsync,
  sameOwnerAccount,
  getOauthAccountInfo,
  getAuthenticatedAccountInfo,
  saveGlobalConfig,
  getGlobalConfig,
} from "./认证-OAuth登录.419zdfz3.js";
import { l, cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { emitAuthEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { performLogout, clearAuthRelatedCaches } from "./console-profile-auth.js";
import { fetchBootstrapData } from "../上下文压缩-Compact/chunk-npckj9cm.js";
async function m(e, o) {
  try {
    if (getGlobalConfig().claudeCodeFirstTokenDate !== void 0) {
      logFeatureOk("api_first_token_date_fetch");
      return;
    }
    let s = await httpClient.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 1e4,
      credentials: o,
    });
    if (!s.ok) {
      if (s.reason === "no-auth")
        (logForDebugging(
          `Failed to get auth headers for first-token-date fetch: ${s.detail}`,
          { level: "error" },
        ),
          logFeatureBad("api_first_token_date_fetch", "request_failed"));
      return;
    }
    let r = s.data?.first_token_date ?? null;
    if (r !== null) {
      let c = new Date(r).getTime();
      if (isNaN(c)) {
        (logError(Error(`Received invalid first_token_date from API: ${r}`)),
          logFeatureBad("api_first_token_date_fetch", "invalid_date"));
        return;
      }
    }
    (await saveGlobalConfig((c) => ({ ...c, claudeCodeFirstTokenDate: r }), e),
      logFeatureOk("api_first_token_date_fetch"));
  } catch (t) {
    if (cc(t))
      logForDebugging(`Failed to fetch first token date: ${l(t)}`, { level: "error" });
    else logError(t);
    logFeatureBad("api_first_token_date_fetch", "request_failed");
  }
}
async function finalizeOAuthLogin(e, { storageV5: o, credentials: t } = {}) {
  let s = await applyOAuthLoginIdentity(e, { storageV5: o, credentials: t }),
    r = await saveOAuthTokensIfNeeded(e, t);
  if ((clearOAuthTokenCache(), process.env.CLAUDE_CODE_OAUTH_TOKEN))
    if (r.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
    else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (uZ()) (N0(r.success ? null : e.accessToken), yje(!1));
  if (isHoverRestEnabled() && t !== void 0) await _(t);
  if (r.warning) logEvent("tengu_oauth_storage_warning", { warning: r.warning });
  if (
    (await fetchAndStoreUserRoles(e.accessToken, o).catch((c) => logForDebugging(String(c), { level: "error" })),
    shouldUseClaudeAIAuth(e.scopes))
  )
    await m(o, t).catch((c) => logForDebugging(String(c), { level: "error" }));
  else if (!(await createAndStoreApiKey(e.accessToken, o)))
    throw Error(
      "Unable to create API key. The server accepted the request but did not return a key.",
    );
  await refreshAuthStateAfterLogin({ storageV5: o, credentials: t, ...s });
}
async function applyOAuthLoginIdentity(e, { storageV5: o, credentials: t }) {
  let s = getOauthAccountInfo(),
    r = {
      accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
      organizationUuid:
        e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid,
    },
    c = sameOwnerAccount(s, r),
    p = sameOwnerAccount(getAuthenticatedAccountInfo(), r),
    u = await getClaudeAIOAuthTokenOriginAsync(t),
    d =
      p && (u === "env" || u === "fd" || (u === "store" && c))
        ? "same_account"
        : "account_switch";
  (await performLogout({
    clearOnboarding: !1,
    preserveInProcessTokens: !0,
    preserveNonAnthropicAuth: !0,
    storageV5: o,
    preserveQuotaAutoResume: c,
    artifactAccount: d,
    incomingIdentity: r,
    credentials: t,
  }),
    p8(null));
  let a = e.profile ?? (await fetchOAuthProfileWithToken(e.accessToken));
  if (a?.account && a.organization)
    storeOAuthAccountInfo(
      {
        accountUuid: a.account.uuid,
        emailAddress: a.account.email,
        organizationUuid: a.organization.uuid,
        displayName: a.account.display_name || void 0,
        fullName: a.account.full_name || void 0,
        hasExtraUsageEnabled: a.organization.has_extra_usage_enabled ?? void 0,
        billingType: a.organization.billing_type ?? void 0,
        subscriptionCreatedAt: a.organization.subscription_created_at ?? void 0,
        accountCreatedAt: a.account.created_at,
        ccOnboardingFlags: a.organization.cc_onboarding_flags ?? {},
        claudeCodeTrialEndsAt: a.organization.claude_code_trial_ends_at ?? null,
        claudeCodeTrialDurationDays:
          a.organization.claude_code_trial_duration_days ?? null,
        seatTier: a.organization.seat_tier ?? null,
        profileFetchedAt: Date.now(),
      },
      o,
    );
  else if (e.tokenAccount)
    storeOAuthAccountInfo(
      {
        accountUuid: e.tokenAccount.uuid,
        emailAddress: e.tokenAccount.emailAddress,
        organizationUuid: e.tokenAccount.organizationUuid,
      },
      o,
    );
  return (
    emitAuthEvent({ action: "login", success: !0, authMethod: "oauth" }),
    { preserveQuotaAutoResume: c, artifactAccount: d, incomingIdentity: r }
  );
}
async function refreshAuthStateAfterLogin({
  storageV5: e,
  credentials: o,
  preserveQuotaAutoResume: t = !1,
  incomingIdentity: s,
}) {
  if (
    (await clearAuthRelatedCaches(e, {
      preserveQuotaAutoResume: t,
      artifactAccount: "same_account",
      incomingIdentity: s,
    }),
    isHoverRestEnabled() && o !== void 0)
  )
    await _(o);
  await fetchBootstrapData(e, o);
}
async function _(e) {
  (clearOAuthTokenMemos(), await getClaudeAIOAuthTokensAsync(e));
}
export { finalizeOAuthLogin, applyOAuthLoginIdentity, refreshAuthStateAfterLogin };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { uZ, N0, yje, p8 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  ht,
  rge,
  lx,
  uZe,
  dRn,
  dZe,
  zKt,
  Use,
  $T,
  Hw,
  Qi,
  wg,
  vn,
  zD,
  Te,
  ee,
} from "./认证-OAuth登录.419zdfz3.js";
import { l, cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { zY } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import { c9, mlt } from "./chunk-9g86t9bp.js";
import { f7 } from "../上下文压缩-Compact/chunk-npckj9cm.js";
async function m(e, o) {
  try {
    if (ee().claudeCodeFirstTokenDate !== void 0) {
      y("api_first_token_date_fetch");
      return;
    }
    let s = await ht.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 1e4,
      credentials: o,
    });
    if (!s.ok) {
      if (s.reason === "no-auth")
        (n(
          `Failed to get auth headers for first-token-date fetch: ${s.detail}`,
          { level: "error" },
        ),
          f("api_first_token_date_fetch", "request_failed"));
      return;
    }
    let r = s.data?.first_token_date ?? null;
    if (r !== null) {
      let c = new Date(r).getTime();
      if (isNaN(c)) {
        (h(Error(`Received invalid first_token_date from API: ${r}`)),
          f("api_first_token_date_fetch", "invalid_date"));
        return;
      }
    }
    (await Te((c) => ({ ...c, claudeCodeFirstTokenDate: r }), e),
      y("api_first_token_date_fetch"));
  } catch (t) {
    if (cc(t))
      n(`Failed to fetch first token date: ${l(t)}`, { level: "error" });
    else h(t);
    f("api_first_token_date_fetch", "request_failed");
  }
}
async function ple(e, { storageV5: o, credentials: t } = {}) {
  let s = await _en(e, { storageV5: o, credentials: t }),
    r = await zKt(e, t);
  if ((Hw(), process.env.CLAUDE_CODE_OAUTH_TOKEN))
    if (r.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
    else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (uZ()) (N0(r.success ? null : e.accessToken), yje(!1));
  if (M() && t !== void 0) await _(t);
  if (r.warning) i("tengu_oauth_storage_warning", { warning: r.warning });
  if (
    (await uZe(e.accessToken, o).catch((c) => n(String(c), { level: "error" })),
    lx(e.scopes))
  )
    await m(o, t).catch((c) => n(String(c), { level: "error" }));
  else if (!(await dRn(e.accessToken, o)))
    throw Error(
      "Unable to create API key. The server accepted the request but did not return a key.",
    );
  await yen({ storageV5: o, credentials: t, ...s });
}
async function _en(e, { storageV5: o, credentials: t }) {
  let s = vn(),
    r = {
      accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
      organizationUuid:
        e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid,
    },
    c = wg(s, r),
    p = wg(zD(), r),
    u = await $T(t),
    d =
      p && (u === "env" || u === "fd" || (u === "store" && c))
        ? "same_account"
        : "account_switch";
  (await c9({
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
  let a = e.profile ?? (await rge(e.accessToken));
  if (a?.account && a.organization)
    dZe(
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
    dZe(
      {
        accountUuid: e.tokenAccount.uuid,
        emailAddress: e.tokenAccount.emailAddress,
        organizationUuid: e.tokenAccount.organizationUuid,
      },
      o,
    );
  return (
    zY({ action: "login", success: !0, authMethod: "oauth" }),
    { preserveQuotaAutoResume: c, artifactAccount: d, incomingIdentity: r }
  );
}
async function yen({
  storageV5: e,
  credentials: o,
  preserveQuotaAutoResume: t = !1,
  incomingIdentity: s,
}) {
  if (
    (await mlt(e, {
      preserveQuotaAutoResume: t,
      artifactAccount: "same_account",
      incomingIdentity: s,
    }),
    M() && o !== void 0)
  )
    await _(o);
  await f7(e, o);
}
async function _(e) {
  (Use(), await Qi(e));
}
export { ple, _en, yen };

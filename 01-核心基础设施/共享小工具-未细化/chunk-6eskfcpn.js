// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ns, fv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isProfileRemoteSettingsCredential, getAnthropicApiKeyWithSource, hasStoredOAuthToken, getStoredOAuthSubscriptionType } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { resetSyncCache, rememberEligibility, getEligibilityMemo, getRemoteSettingsPathOverride, setEvalPolicySnapshotOnly } from "../设置-配置/设置-配置.aqbb35ee.js";
import { getAPIProvider, isFirstPartyAnthropicBaseUrl } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { fir } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
function s(e) {
  try {
    return new URL(e).host;
  } catch {
    return;
  }
}
function QGt(e = a.ANTHROPIC_BASE_URL || fir()) {
  if (!e) return !0;
  let i = s(getOauthConfig().BASE_API_URL);
  return i !== void 0 && s(e) === i;
}
function I$() {
  resetSyncCache();
}
function XE() {
  let e = getEligibilityMemo();
  if (e !== void 0) return e;
  let { eligible: i, ineligibleReason: t } = f(),
    g = a.CLAUDE_CODE_EVAL_CONFINED === !0,
    r = !i && g;
  setEvalPolicySnapshotOnly(r);
  let o = i || r;
  return rememberEligibility(o, o ? void 0 : t);
}
function u() {
  return hwn() || (hasStoredOAuthToken() && getStoredOAuthSubscriptionType() === null);
}
function hwn() {
  if (!hasStoredOAuthToken()) return !1;
  let e = getStoredOAuthSubscriptionType();
  return e === "enterprise" || e === "team";
}
function f() {
  if (getRemoteSettingsPathOverride()) return { eligible: !0 };
  if (getAPIProvider() === "gateway") {
    let t = fv(ns());
    return { eligible: t, ineligibleReason: t ? void 0 : "unpinned_gateway" };
  }
  if (getAPIProvider() !== "firstParty")
    return { eligible: !1, ineligibleReason: "third_party_provider" };
  if (!isFirstPartyAnthropicBaseUrl()) return { eligible: !1, ineligibleReason: "custom_base_url" };
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  if (
    e === "local-agent" ||
    e === "remote_cowork" ||
    e?.startsWith("claude-coworker")
  )
    return { eligible: !1, ineligibleReason: "sandboxed_entrypoint" };
  let i = !1;
  try {
    i = isProfileRemoteSettingsCredential();
  } catch (t) {
    n(
      `Remote settings: could not read the profile store (${l(t)}); not treating this session as profile-authenticated`,
      { level: "warn" },
    );
  }
  if (i)
    return QGt()
      ? { eligible: !0 }
      : { eligible: !1, ineligibleReason: "profile_base_url_mismatch" };
  if (u()) return { eligible: !0 };
  try {
    let { key: t } = getAnthropicApiKeyWithSource({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (t) return { eligible: !0 };
  } catch {}
  return {
    eligible: !1,
    ineligibleReason: hasStoredOAuthToken() ? "unsupported_subscription" : "no_auth",
  };
}
export { QGt, I$, XE, hwn };

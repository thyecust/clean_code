// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ns, fv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig as Vt } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isProfileRemoteSettingsCredential as NUe, getAnthropicApiKeyWithSource as qg, hasStoredOAuthToken as wu, getStoredOAuthSubscriptionType as WUe } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { resetSyncCache as UHn, rememberEligibility as WHn, getEligibilityMemo as wie, getRemoteSettingsPathOverride as YT, setEvalPolicySnapshotOnly as GHn } from "../设置-配置/设置-配置.aqbb35ee.js";
import { getAPIProvider as Pe, isFirstPartyAnthropicBaseUrl as fo } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
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
  let i = s(Vt().BASE_API_URL);
  return i !== void 0 && s(e) === i;
}
function I$() {
  UHn();
}
function XE() {
  let e = wie();
  if (e !== void 0) return e;
  let { eligible: i, ineligibleReason: t } = f(),
    g = a.CLAUDE_CODE_EVAL_CONFINED === !0,
    r = !i && g;
  GHn(r);
  let o = i || r;
  return WHn(o, o ? void 0 : t);
}
function u() {
  return hwn() || (wu() && WUe() === null);
}
function hwn() {
  if (!wu()) return !1;
  let e = WUe();
  return e === "enterprise" || e === "team";
}
function f() {
  if (YT()) return { eligible: !0 };
  if (Pe() === "gateway") {
    let t = fv(ns());
    return { eligible: t, ineligibleReason: t ? void 0 : "unpinned_gateway" };
  }
  if (Pe() !== "firstParty")
    return { eligible: !1, ineligibleReason: "third_party_provider" };
  if (!fo()) return { eligible: !1, ineligibleReason: "custom_base_url" };
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  if (
    e === "local-agent" ||
    e === "remote_cowork" ||
    e?.startsWith("claude-coworker")
  )
    return { eligible: !1, ineligibleReason: "sandboxed_entrypoint" };
  let i = !1;
  try {
    i = NUe();
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
    let { key: t } = qg({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (t) return { eligible: !0 };
  } catch {}
  return {
    eligible: !1,
    ineligibleReason: wu() ? "unsupported_subscription" : "no_auth",
  };
}
export { QGt, I$, XE, hwn };

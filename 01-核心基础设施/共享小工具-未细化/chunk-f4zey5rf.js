// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError as h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { withFeatureTelemetry as Sr } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ACn, Srr, ht, getOauthAccountInfo as vn, getSubscriptionType as qn, Te, ee } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
var l = 14;
function getProTrialDurationDays() {
  return vn()?.claudeCodeTrialDurationDays ?? null;
}
var s = { status: "ineligible", daysRemaining: null };
function getProTrialState() {
  let e = ACn();
  if (e) return o(!0, e.endsAt);
  let t = vn();
  if (!t || qn() !== "pro") return s;
  let r = t.ccOnboardingFlags?.e10 === !0;
  return o(r, t.claudeCodeTrialEndsAt ?? null);
}
async function startProTrial(e, t) {
  return Sr("api_pro_trial_start", async () => {
    if (ACn()) {
      let i = new Date(Date.now() + l * 24 * 60 * 60 * 1000).toISOString();
      return (Srr({ endsAt: i }), o(!0, i));
    }
    let a = await ht.post(
      "/api/oauth/organizations/:orgUUID/claude_code/pro_trial",
      {},
      { auth: "teleport-org", credentials: t },
    );
    if (!a.ok)
      throw Error(
        a.reason === "no-auth"
          ? a.detail
          : `Pro trial start unavailable: ${a.reason}`,
      );
    return (
      n("Pro trial started", { level: "debug" }),
      u(a.data.ends_at, e),
      o(!0, a.data.ends_at)
    );
  });
}
function shouldAutoOpenProTrialExpired() {
  if (getProTrialState().status !== "expired") return !1;
  return ee().cachedExtraUsageDisabledReason !== null;
}
function formatTrialBadge(e) {
  switch (e.status) {
    case "active": {
      let t = e.daysRemaining ?? 0;
      return `Trial: ${t} ${t === 1 ? "day" : "days"} left`;
    }
    case "expired":
      return "Usage credits";
    case "ineligible":
    case "not_started":
      return null;
  }
}
function o(e, t) {
  if (!e) return s;
  if (!t) return { status: "not_started", daysRemaining: null };
  let r = new Date(t);
  if (Number.isNaN(r.getTime()))
    return (h(Error(`Invalid claude_code_trial_ends_at: ${t}`)), s);
  let a = r.getTime() - Date.now();
  if (a <= 0) return { status: "expired", daysRemaining: 0 };
  return { status: "active", daysRemaining: Math.ceil(a / 86400000) };
}
function u(e, t) {
  Te((r) => {
    if (!r.oauthAccount || r.oauthAccount.claudeCodeTrialEndsAt === e) return r;
    return {
      ...r,
      oauthAccount: { ...r.oauthAccount, claudeCodeTrialEndsAt: e },
    };
  }, t);
}
export { getProTrialDurationDays, getProTrialState, startProTrial, shouldAutoOpenProTrialExpired, formatTrialBadge };

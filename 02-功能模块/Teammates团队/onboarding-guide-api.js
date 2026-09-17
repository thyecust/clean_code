// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { OAUTH_BETA_HEADER } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { isEssentialTrafficOnly } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { httpClient, hasStoredOAuthToken, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isPolicyAllowed } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
var u = 1e4,
  a = { auth: "teleport-org", timeout: u, headers: { "anthropic-beta": OAUTH_BETA_HEADER } };
function isOnboardingGuideSharingEnabled() {
  if (isEssentialTrafficOnly()) return !1;
  if (!isPolicyAllowed("allow_team_onboarding")) return !1;
  if (!hasStoredOAuthToken()) return !1;
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_flint_harbor_share", !1);
}
function o(e) {
  if (!e.ok)
    throw Error(
      e.reason === "no-auth"
        ? e.detail
        : `Onboarding guide unavailable: ${e.reason}`,
    );
  return e.data;
}
function t() {
  if (!isPolicyAllowed("allow_team_onboarding"))
    throw Error("Onboarding guide unavailable: policy-disabled");
}
async function createOnboardingGuide(e, n, r) {
  t();
  let d = await httpClient.post(
      "/api/organizations/:orgUUID/claude_code/onboarding",
      { content: e, name: n },
      { ...a, credentials: r },
    ),
    s = o(d);
  return (logEvent("tengu_team_onboarding_share_created", {}), s);
}
async function updateOnboardingGuide(e, n, r) {
  t();
  let d = await httpClient.put(
      `/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,
      { content: n },
      { ...a, credentials: r },
    ),
    s = o(d);
  return (logEvent("tengu_team_onboarding_share_updated", {}), s);
}
async function deleteOnboardingGuide(e, n) {
  t();
  let r = await httpClient.delete(
    `/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`,
    void 0,
    { ...a, credentials: n },
  );
  (o(r), logEvent("tengu_team_onboarding_share_deleted", {}));
}
async function listOnboardingGuides(e) {
  t();
  let n = await httpClient.get("/api/organizations/:orgUUID/claude_code/onboarding", {
    ...a,
    credentials: e,
  });
  return o(n).guides;
}
export { isOnboardingGuideSharingEnabled, createOnboardingGuide, updateOnboardingGuide, deleteOnboardingGuide, listOnboardingGuides };

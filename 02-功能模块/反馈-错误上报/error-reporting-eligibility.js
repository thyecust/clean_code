// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { CLAUDE_AI_INFERENCE_SCOPE } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { isAnalyticsDisabled, getAuthTokenSource, getConfiguredApiKeyHelper, hasStoredOAuthToken, hasOAuthScope, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getAPIProvider, isFirstPartyAnthropicBaseUrl } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isPolicyAllowed, areComplianceTaintsSettled, getResponseFromCache } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { pg } from "../../00-第三方库/semver/chunk-jm5cswvd.js";
import { toESM } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var r = toESM(pg(), 1);
var t = "tengu_orford_ness",
  n = "2.1.193";
function l() {
  try {
    return getFeatureValue_CACHED_MAY_BE_STALE(t, !1);
  } catch {
    return !1;
  }
}
function getErrorReportingPolicyState() {
  let e = getResponseFromCache();
  if (!isPolicyAllowed("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === !1
      ? "blocked_restriction"
      : "blocked_tainted";
  }
  let o = areComplianceTaintsSettled();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (hasStoredOAuthToken() && !hasOAuthScope(CLAUDE_AI_INFERENCE_SCOPE)) return "blocked_scopeless_oauth";
  if (getAuthTokenSource().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (getConfiguredApiKeyHelper()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}
function isErrorReportingAllowed() {
  let e = getErrorReportingPolicyState();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function shouldReportErrors() {
  if (process.env.DISABLE_ERROR_REPORTING) return !1;
  if (isAnalyticsDisabled()) return !1;
  if (getAPIProvider() !== "firstParty" || !isFirstPartyAnthropicBaseUrl()) return !1;
  if (
    !r.gte(
      r.coerce(
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
            "../../01-核心基础设施/共享小工具-未细化/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      )?.version ??
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
            "../../01-核心基础设施/共享小工具-未细化/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      n,
    )
  )
    return !1;
  if (!isErrorReportingAllowed()) return !1;
  return l();
}
export { getErrorReportingPolicyState, isErrorReportingAllowed, shouldReportErrors };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getSubscriptionType, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getMergedSettings } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { isPolicyAllowed } from "../策略限制-PolicyLimits/chunk-8sw91yn5.js";
function areWorkflowsDisabledBySettings() {
  return (
    a.CLAUDE_CODE_DISABLE_WORKFLOWS || getMergedSettings()?.settings.disableWorkflows === !0
  );
}
class t {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return ((this.cached = i()), this.cached);
  }
}
var n = new j(() => new t());
function areWorkflowsEnabled() {
  if (areWorkflowsDisabledBySettings()) return !1;
  if (!isWorkflowsAllowedByPolicy()) return !1;
  let { available: r, defaultOn: e } = o();
  if (!r) return !1;
  return getMergedSettings()?.settings.enableWorkflows ?? e;
}
function isWorkflowsEnabledByDefault() {
  return o().defaultOn;
}
function areWorkflowsAvailable() {
  return isWorkflowsAllowedByPolicy() && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && o().available;
}
function isWorkflowKeywordTriggerEnabled() {
  return getMergedSettings()?.settings.workflowKeywordTriggerEnabled ?? !0;
}
function isWorkflowsAllowedByPolicy() {
  return isPolicyAllowed("allow_workflows");
}
function shouldSkipWorkflowWarmup() {
  if (areWorkflowsDisabledBySettings() || !isWorkflowsAllowedByPolicy()) return !0;
  if (getMergedSettings()?.settings.enableWorkflows === !1) return !0;
  return a.CLAUDE_CODE_WORKFLOWS === !1 || !getFeatureValue_CACHED_MAY_BE_STALE("tengu_workflows_enabled", !0);
}
function o() {
  return n.of(B().host).resolve();
}
function i() {
  if (a.CLAUDE_CODE_WORKFLOWS === !0) {
    let e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_workflows_enabled", !0);
    return { available: e, defaultOn: e };
  }
  if (a.CLAUDE_CODE_WORKFLOWS === !1) return { available: !1, defaultOn: !1 };
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_workflows_enabled", !0))
    return { available: !1, defaultOn: !1 };
  return { available: !0, defaultOn: getSubscriptionType() !== "pro" };
}
function isJadeCompassEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_jade_compass", !0);
}
export { areWorkflowsDisabledBySettings, areWorkflowsEnabled, isWorkflowsEnabledByDefault, areWorkflowsAvailable, isWorkflowKeywordTriggerEnabled, isWorkflowsAllowedByPolicy, shouldSkipWorkflowWarmup, isJadeCompassEnabled };

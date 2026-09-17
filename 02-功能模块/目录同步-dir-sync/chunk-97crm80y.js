// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { hasFreshGrowthBookFeatures, getFeatureValueWithSource_CACHED_MAY_BE_STALE, getFeatureValue_CACHED_MAY_BE_STALE, checkGate_CACHED_OR_BLOCKING } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
var o = "tengu_violin_pegbox";
function n() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_desktop";
}
async function r() {
  try {
    return await checkGate_CACHED_OR_BLOCKING(o);
  } catch {
    return !1;
  }
}
function i() {
  try {
    return getFeatureValue_CACHED_MAY_BE_STALE(o, !1);
  } catch {
    return !1;
  }
}
async function l() {
  try {
    return await checkGate_CACHED_OR_BLOCKING("tengu_violin_strad");
  } catch {
    return !1;
  }
}
function u() {
  try {
    return getFeatureValue_CACHED_MAY_BE_STALE("tengu_violin_strad", !1);
  } catch {
    return !1;
  }
}
async function isViolinWoodEnabled() {
  try {
    return (await checkGate_CACHED_OR_BLOCKING("tengu_violin_wood")) && (!n() || (await r()));
  } catch {
    return !1;
  }
}
function isViolinWoodEnabledCached() {
  try {
    return getFeatureValue_CACHED_MAY_BE_STALE("tengu_violin_wood", !1) && (!n() || i());
  } catch {
    return !1;
  }
}
async function isSettingsToCloudEnabled() {
  return (await isViolinWoodEnabled()) && (await l());
}
function isSettingsToCloudEnabledCached() {
  return isViolinWoodEnabledCached() && u();
}
function isViolinWoodServedOff() {
  try {
    let { value: e, source: t } = getFeatureValueWithSource_CACHED_MAY_BE_STALE("tengu_violin_wood", !1);
    return e === !1 && s(t);
  } catch {
    return !1;
  }
}
function s(e) {
  switch (e) {
    case "payload":
    case "override":
    case "disabled":
      return !0;
    case "fallback":
      return hasFreshGrowthBookFeatures();
    case "disk":
      return !1;
  }
}
function c(e) {
  return s(getFeatureValueWithSource_CACHED_MAY_BE_STALE(e, !1).source);
}
function isAccountGateServed(e) {
  try {
    return c(e) && (e !== "tengu_violin_wood" || !n() || c(o));
  } catch {
    return !1;
  }
}
async function isViolinAmatiEnabled() {
  try {
    return await checkGate_CACHED_OR_BLOCKING("tengu_violin_amati");
  } catch {
    return !1;
  }
}
function isViolinAmatiEnabledCached() {
  try {
    return getFeatureValue_CACHED_MAY_BE_STALE("tengu_violin_amati", !1);
  } catch {
    return !1;
  }
}
function isCloudPluginForwardingEnabledCached() {
  return isViolinWoodEnabledCached() && isViolinAmatiEnabledCached();
}
async function isCloudPluginForwardingFlagOn() {
  let [e, t] = await Promise.all([isViolinWoodEnabled(), isViolinAmatiEnabled()]);
  return e && t;
}
export { isViolinWoodEnabled, isViolinWoodEnabledCached, isSettingsToCloudEnabled, isSettingsToCloudEnabledCached, isViolinWoodServedOff, isAccountGateServed, isViolinAmatiEnabled, isViolinAmatiEnabledCached, isCloudPluginForwardingEnabledCached, isCloudPluginForwardingFlagOn };

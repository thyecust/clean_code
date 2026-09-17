// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, sc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { formatResetTime } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import {
  LOW_PRIORITY_COMMAND_NAME,
  isLowPriorityModeEnabled,
  getLowPriorityConfigVersion,
  getLowPriorityCopy,
  isLowPriorityActive,
  isLowPriorityBudgetSpent,
  getLowPriorityCoolingOffUntilMs,
  getLowPriorityState,
  startLowPriorityMode,
  getStoppedLowPriorityResetsAt,
  resumeLowPriorityMode,
  endLowPriorityMode,
  getCurrentLimits,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { C4, v4, Jx, D3e } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { isLowPriorityEligibleClient, isContinuableUsageLimitWall, getSubscriptionTier, sendAutoContinuationPrompt } from "../../01-核心基础设施/共享小工具-未细化/usage-limit-continuation.js";
var l = new j(() => ({
  notedWallResetsAt: null,
  shownWallResetsAt: null,
  withheldWallResetsAt: null,
  sessionSwitchSubscribed: !1,
}));
function n() {
  return l.of(B().host);
}
function shouldOfferLowPriority(t, e = Date.now()) {
  return (
    isContinuableUsageLimitWall(t) &&
    t.lowPriorityOffer === "treatment" &&
    t.resetsAt !== void 0 &&
    t.resetsAt * 1000 > e &&
    !isLowPriorityBudgetSpent(e) &&
    getLowPriorityCoolingOffUntilMs(e) === void 0 &&
    !isLowPriorityActive() &&
    isLowPriorityModeEnabled()
  );
}
function a(t, e = Date.now()) {
  let o = getStoppedLowPriorityResetsAt(e);
  return (
    isLowPriorityEligibleClient() &&
    t.status !== "rejected" &&
    o !== void 0 &&
    !f(o) &&
    !isLowPriorityBudgetSpent(e) &&
    getLowPriorityCoolingOffUntilMs(e) === void 0 &&
    isLowPriorityModeEnabled()
  );
}
function f(t) {
  let e = C4();
  switch (e.phase) {
    case "idle":
      return !1;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return !0;
  }
}
function trackLowPriorityOffer(t) {
  if (t.lowPriorityOffer === void 0 || !isContinuableUsageLimitWall(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = n();
  if (o.notedWallResetsAt !== e)
    ((o.notedWallResetsAt = e),
      logEvent("tengu_lowpri_offer_capable", {
        arm: fromEnum(t.lowPriorityOffer),
        tier: fromEnum(getSubscriptionTier()),
        limit_type: fromEnumOpt(t.rateLimitType) ?? void 0,
        auto_armed: v4(),
        client_enabled: isLowPriorityModeEnabled(),
        config_version: getLowPriorityConfigVersion(),
      }));
  if (
    t.lowPriorityOffer === "treatment" &&
    getLowPriorityCoolingOffUntilMs() !== void 0 &&
    o.withheldWallResetsAt !== e
  )
    ((o.withheldWallResetsAt = e),
      logEvent("tengu_lowpri_offer_withheld", {
        arm: fromEnum(t.lowPriorityOffer),
        reason: fromEnum("cooloff"),
        client_enabled: isLowPriorityModeEnabled(),
        config_version: getLowPriorityConfigVersion(),
      }));
}
function trackLowPriorityOfferShown(t, e) {
  let o = t.resetsAt ?? null,
    r = n();
  if (o === null || r.shownWallResetsAt === o) return;
  ((r.shownWallResetsAt = o),
    logEvent("tengu_lowpri_offer_shown", {
      arm: fromEnumOpt(t.lowPriorityOffer) ?? void 0,
      surface: fromEnum(e),
      config_version: getLowPriorityConfigVersion(),
    }));
}
function enableLowPriorityMode(t) {
  let e = getCurrentLimits();
  if (shouldOfferLowPriority(e) && e.resetsAt !== void 0) {
    if (
      (Jx("low_priority"),
      s(),
      !startLowPriorityMode({
        resetsAtSeconds: e.resetsAt,
        arm: e.lowPriorityOffer,
        entry: t,
        retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
        maxWaitSeconds: e.lowPriorityMaxWaitSeconds,
      }))
    )
      return "unavailable";
    return (sendAutoContinuationPrompt(), "accepted");
  }
  if (a(e)) {
    let o = v4();
    if (o) Jx("low_priority");
    if ((s(), !resumeLowPriorityMode(t))) return "unavailable";
    if (o) sendAutoContinuationPrompt();
    return "resumed";
  }
  return "unavailable";
}
function formatLowPriorityEnabledMessage(t) {
  let e = getLowPriorityState(),
    o = e.phase === "active" ? formatResetTime(e.resetsAtSeconds) : void 0,
    r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${LOW_PRIORITY_COMMAND_NAME} to stop.`;
}
function formatLowPriorityUnavailableMessage(t = Date.now()) {
  if (isLowPriorityBudgetSpent(t))
    return `${getLowPriorityCopy().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = getLowPriorityCoolingOffUntilMs(t);
  if (e !== void 0)
    return `Lower-priority mode is taking a break until ${formatResetTime(Math.ceil(e / 1000)) ?? "later"}, after waiting too long for spare capacity. Try /${LOW_PRIORITY_COMMAND_NAME} again then.`;
  return "Lower-priority mode isn't available right now.";
}
function formatLowPriorityOffMessage() {
  let t = getCurrentLimits();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${shouldOfferLowPriority(t) || a(t) ? `; run /${LOW_PRIORITY_COMMAND_NAME} again to turn it back on` : ""}.`;
}
function s() {
  let t = n();
  if (t.sessionSwitchSubscribed) return;
  ((t.sessionSwitchSubscribed = !0),
    sc((e, o) => {
      if (D3e(o)) endLowPriorityMode("conversation_reset");
    }));
}
export { shouldOfferLowPriority, trackLowPriorityOffer, trackLowPriorityOfferShown, enableLowPriorityMode, formatLowPriorityEnabledMessage, formatLowPriorityUnavailableMessage, formatLowPriorityOffMessage };

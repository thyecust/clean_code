// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { httpClient, getFeatureValue_CACHED_MAY_BE_STALE, saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { Zt, Io, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isPolicyAllowed } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { canUseCloudReview } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { CODE_REVIEW_SKILL_NAME } from "../../01-核心基础设施/共享小工具-未细化/bundled-skill-names.js";
var f = createLazyValue(() =>
  nt({
    reviews_used: Zt(),
    reviews_limit: Zt(),
    reviews_remaining: Zt(),
    is_overage: Io(),
  }),
);
async function v(e) {
  let r = a.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r)
    try {
      let t = f().safeParse(jsonParse(r));
      return t.success ? t.data : null;
    } catch (t) {
      return (logForDebugging(`fetchUltrareviewQuota fixture parse failed: ${t}`), null);
    }
  try {
    let t = await httpClient.get("/v1/ultrareview/quota", {
      auth: "teleport-org",
      timeout: 3000,
      credentials: e,
    });
    if (!t.ok) return (logFeatureSad("api_ultrareview_quota", "request_failed"), null);
    let o = f().safeParse(t.data);
    if (!o.success)
      return (
        logForDebugging(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`),
        logFeatureSad("api_ultrareview_quota", "schema_mismatch"),
        null
      );
    return (logFeatureOk("api_ultrareview_quota"), o.data);
  } catch (t) {
    return (
      logForDebugging(`fetchUltrareviewQuota failed: ${t}`),
      logFeatureSad("api_ultrareview_quota", "request_failed"),
      null
    );
  }
}
class c {
  quota = void 0;
  fetch = void 0;
}
var S = new j(() => new c());
function p() {
  return S.of(B().host);
}
async function loadUltrareviewQuota(e) {
  let r = p();
  ((r.fetch ??= v(e)), (r.quota = await r.fetch));
}
function getUltrareviewQuota(e) {
  let r = p();
  if (r.quota === void 0) return (loadUltrareviewQuota(e), null);
  return r.quota;
}
function recordTipShown(e, r) {
  let t = getGlobalConfig().numStartups;
  saveGlobalConfig((o) => {
    let l = o.tipsHistory ?? {};
    if (l[e] === t) return o;
    let s = o.tipLifetimeShownCounts ?? {};
    return {
      ...o,
      tipsHistory: { ...l, [e]: t },
      tipLifetimeShownCounts: { ...s, [e]: (s[e] ?? 0) + 1 },
    };
  }, r);
}
function getTipLifetimeShownCount(e) {
  return getGlobalConfig().tipLifetimeShownCounts?.[e] ?? 0;
}
function getPluginSuggestionShownCount(e) {
  return getGlobalConfig().pluginSuggestionShownCounts?.[e] ?? 0;
}
function getSessionsSinceTipShown(e) {
  let r = getGlobalConfig(),
    t = r.tipsHistory?.[e];
  if (!t) return 1 / 0;
  return r.numStartups - t;
}
function getPluginSuggestionDiscoverShownCount(e) {
  return getGlobalConfig().pluginSuggestionDiscoverShownCounts?.[e] ?? 0;
}
function recordPluginSuggestionDiscoverShown(e, r) {
  if (e.length === 0) return;
  saveGlobalConfig((t) => {
    let o = t.pluginSuggestionDiscoverShownCounts ?? {};
    if (e.every((s) => (o[s] ?? 0) > 0)) return t;
    let l = { ...o };
    for (let s of e) l[s] = (l[s] ?? 0) + 1;
    return { ...t, pluginSuggestionDiscoverShownCounts: l };
  }, r);
}
var h = "tengu_ultrareview_awareness";
function _() {
  return getFeatureValue_CACHED_MAY_BE_STALE(h, null) ?? {};
}
function isUltrareviewAwarenessEnabled(e) {
  if (!canUseCloudReview()) return !1;
  if (!isPolicyAllowed("allow_remote_sessions")) return !1;
  return _()[e] === !0;
}
function hasRunUltrareview() {
  return getGlobalConfig().hasRunUltrareview === !0;
}
function markUltrareviewRun(e) {
  saveGlobalConfig((r) => (r.hasRunUltrareview ? r : { ...r, hasRunUltrareview: !0 }), e);
}
function C(e) {
  logEvent("tengu_ultrareview_awareness_shown", { surface: fromEnum(e) });
}
function formatFreeReviewsLeft(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function formatUltrareviewQuotaBadge(e) {
  if (e !== "ultrareview" && e !== CODE_REVIEW_SKILL_NAME) return "";
  if (!isUltrareviewAwarenessEnabled("slash_menu")) return "";
  let r = getUltrareviewQuota();
  if (r === null || r.reviews_remaining <= 0) return "";
  let t = r.reviews_remaining;
  return e === "ultrareview"
    ? `${t} free left \xB7 `
    : `${t} free /ultrareview \xB7 `;
}
var R = "ultrareview-prose-pointer",
  U = "ultrareview-post-commit",
  b = 5;
function w(e, r, t, o, l) {
  if (!isUltrareviewAwarenessEnabled(e)) return null;
  if (hasRunUltrareview()) return null;
  if (getTipLifetimeShownCount(r) >= b) return null;
  if (getSessionsSinceTipShown(r) === 0) return null;
  (recordTipShown(r, o), C(e));
  let s = getUltrareviewQuota(l),
    d =
      s !== null && s.reviews_remaining > 0
        ? ` \u2014 ${formatFreeReviewsLeft(s.reviews_remaining)}`
        : "";
  return t(d);
}
function getUltrareviewProsePointerTip(e, r) {
  return w(
    "prose_pointer",
    R,
    (t) =>
      `Tip: For a deeper cloud-based review, try /ultrareview next time${t}.`,
    e,
    r,
  );
}
function getUltrareviewPostCommitTip(e) {
  return w(
    "post_commit",
    U,
    (r) =>
      `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`,
    e,
    void 0,
  );
}
export {
  loadUltrareviewQuota,
  getUltrareviewQuota,
  recordTipShown,
  getTipLifetimeShownCount,
  getPluginSuggestionShownCount,
  getSessionsSinceTipShown,
  getPluginSuggestionDiscoverShownCount,
  recordPluginSuggestionDiscoverShown,
  isUltrareviewAwarenessEnabled,
  hasRunUltrareview,
  markUltrareviewRun,
  formatFreeReviewsLeft,
  formatUltrareviewQuotaBadge,
  getUltrareviewProsePointerTip,
  getUltrareviewPostCommitTip,
};

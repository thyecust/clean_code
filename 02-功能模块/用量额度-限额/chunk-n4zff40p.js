// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, sc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { ge, cc } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { formatResetTime } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { withOAuth401Retry, ht, hasProfileScope, getOauthAccountInfo } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { isAxiosError } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import {
  isLowPriorityActive,
  endLowPriorityMode,
  hasUsageUtilizationWindows,
  fetchUsageUtilization,
  getCurrentLimits,
  getAccountEpoch,
  emitLimitStatusChange,
  probeQuotaStatusWithSmallModel,
  isSessionLimitResetEnabled,
  getSessionLimitResetConfigVersion,
  isSessionLimitResetAutoContinueEnabled,
  getSessionLimitResetCopy,
  formatSessionLimitResetLine,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { v4, IIe, Jx, D3e } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import { isContinuableUsageLimitWall, getSubscriptionTier, sendAutoContinuationPrompt } from "../../01-核心基础设施/共享小工具-未细化/usage-limit-continuation.js";
import { s, T, O, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
function L() {
  return {
    state: { phase: "idle" },
    shownWallResetsAt: null,
    pendingAsk: null,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimWallResetsAt: null,
    sessionSwitchSubscribed: !1,
    changed: Le(),
    events: Le(),
  };
}
var z = new j(L);
function b() {
  return z.of(B().host);
}
function oM() {
  return b().state;
}
function _(e) {
  let t = b();
  ((t.state = e), t.changed.emit());
}
function G9e(e) {
  return b().changed.subscribe(e);
}
function tnn(e) {
  return b().events.subscribe(e);
}
var I = "juniper_tide",
  D = 25000,
  H = createLazyValue(() =>
    c({
      surface: X(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
      tier: X([
        "claude_pro",
        "claude_max_5x",
        "claude_max_20x",
        "unknown",
      ]).catch("unknown"),
      tenure_bucket: X([
        "under_14",
        "14-29",
        "30-89",
        "90-364",
        "365+",
        "unknown",
      ]).catch("unknown"),
      billing_path: X([
        "stripe",
        "apple",
        "google_play",
        "other",
        "unknown",
      ]).catch("unknown"),
      billing_period: X(["monthly", "annual", "unknown"]).catch("unknown"),
      extra_usage_state: X([
        "not_configured",
        "disabled",
        "enabled",
        "unknown",
      ]).catch("unknown"),
    }),
  ),
  F = createLazyValue(() =>
    c({
      eligible: O(),
      ineligible_reason: X([
        "tier",
        "tenure",
        "surface",
        "mobile",
        "cli_version",
        "not_at_wall",
        "weekly_limit",
        "no_weekly_limit",
        "other_experiment",
        "extra_usage",
        "unavailable",
        "unknown",
      ])
        .catch("unknown")
        .nullable()
        .optional(),
      in_experiment: O().optional(),
      arm: X(["control", "reset"]).nullable().optional().catch(null),
      available: O().optional(),
      next_available_at: s().nullable().optional().catch(null),
      weekly_resets_at: s().nullable().optional().catch(null),
      resets_per_week: T()
        .optional()
        .catch(void 0),
      event_props: H().nullable().optional().catch(null),
    }),
  ),
  M = createLazyValue(() =>
    c({
      result: X([
        "reset",
        "already_used",
        "not_limited",
        "ineligible",
        "unavailable",
      ]).catch("unavailable"),
      next_available_at: s().nullable().optional().catch(null),
      weekly_resets_at: s().nullable().optional().catch(null),
    }),
  );
function U(e) {
  if (e === void 0 || e === null) return null;
  let t = F().safeParse(e);
  if (!t.success)
    return (
      n(`[juniper-tide] ignoring a malformed status block: ${t.error.message}`),
      null
    );
  let r = t.data,
    a = r.event_props;
  return {
    eligible: r.eligible,
    ineligibleReason: r.ineligible_reason ?? null,
    inExperiment: r.in_experiment ?? !1,
    arm: r.arm ?? null,
    available: r.available ?? !1,
    nextAvailableAt: r.next_available_at ?? null,
    weeklyResetsAt: r.weekly_resets_at ?? null,
    resetsPerWeek: r.resets_per_week ?? 1,
    eventProps: a
      ? {
          surface: a.surface,
          tier: a.tier,
          tenureBucket: a.tenure_bucket,
          billingPath: a.billing_path,
          billingPeriod: a.billing_period,
          extraUsageState: a.extra_usage_state,
        }
      : null,
  };
}
async function R(e) {
  try {
    if (!hasProfileScope()) return { kind: "no_profile_scope" };
    let t = await fetchUsageUtilization(e, { atWall: !0 });
    if (!hasUsageUtilizationWindows(t))
      return (
        n(
          "[juniper-tide] status fetch returned a fieldless or non-object body (in-band error)",
          { level: "warn" },
        ),
        { kind: "failed" }
      );
    return { kind: "answered", status: U(t?.juniper_tide) };
  } catch (t) {
    if (
      (n(`[juniper-tide] status fetch failed: ${ge(t).message}`, {
        level: "warn",
      }),
      isAxiosError(t) && (t.response?.status === 401 || t.response?.status === 403))
    )
      return { kind: "answered", status: null };
    return { kind: "failed" };
  }
}
async function E(e) {
  let t = getOauthAccountInfo()?.organizationUuid;
  if (!t)
    return (
      n("[juniper-tide] no OAuth organization; cannot claim"),
      { result: "auth_error", nextAvailableAt: null }
    );
  try {
    let r = await withOAuth401Retry(
      () =>
        ht.post(
          `/api/organizations/${t}/reset_rate_limits`,
          { program: I },
          {
            auth: "async",
            headers: { "Content-Type": "application/json" },
            timeout: D,
            refreshOAuth: !0,
            credentials: e,
          },
        ),
      { credentials: e },
    );
    if (!r.ok)
      return (
        n(
          `[juniper-tide] claim not sent: ${r.reason === "no-auth" ? r.detail : r.reason}`,
          { level: "warn" },
        ),
        {
          result: r.reason === "no-auth" ? "auth_error" : "error",
          nextAvailableAt: null,
        }
      );
    let a = M().safeParse(r.data);
    if (!a.success)
      return (
        n(`[juniper-tide] unreadable claim response: ${a.error.message}`, {
          level: "error",
        }),
        logError(Error("[juniper-tide] unreadable claim response")),
        { result: "error", nextAvailableAt: null }
      );
    return {
      result: a.data.result,
      nextAvailableAt: a.data.next_available_at ?? null,
    };
  } catch (r) {
    if (cc(r))
      n(`[juniper-tide] claim failed: ${ge(r).message}`, { level: "warn" });
    else logError(ge(r));
    if (isAxiosError(r))
      switch (r.response?.status) {
        case 429:
          return { result: "rate_limited", nextAvailableAt: null };
        case 401:
        case 403:
          return { result: "auth_error", nextAvailableAt: null };
        default:
          break;
      }
    return { result: "error", nextAvailableAt: null };
  }
}
var N = 3,
  Q = 12000,
  G = 35000;
function J(e, t) {
  return t.resetsAt === e.wallResetsAt && e.accountEpoch === getAccountEpoch();
}
function x(e) {
  let t = oM();
  return t.phase === "answered" && J(t, e) ? t.status : void 0;
}
function k(e) {
  let t = oM();
  return t.phase === "failed" && J(t, e);
}
function oIe(e, t = Date.now()) {
  let r = x(e);
  return (
    isContinuableUsageLimitWall(e) &&
    r !== void 0 &&
    r !== null &&
    r.arm === "reset" &&
    r.available &&
    e.resetsAt !== void 0 &&
    e.resetsAt * 1000 > t &&
    !isLowPriorityActive() &&
    isSessionLimitResetEnabled()
  );
}
function sIe(e, t = Date.now()) {
  let r = x(e);
  if (
    !isContinuableUsageLimitWall(e) ||
    r === void 0 ||
    r === null ||
    r.arm !== "reset" ||
    r.available ||
    r.nextAvailableAt === null ||
    e.resetsAt === void 0 ||
    e.resetsAt * 1000 <= t ||
    !isSessionLimitResetEnabled()
  )
    return;
  return formatSessionLimitResetLine(getSessionLimitResetCopy().spentLine, S(r.nextAvailableAt));
}
function S(e) {
  if (e === null) return;
  let t = Date.parse(e);
  return Number.isFinite(t) ? formatResetTime(Math.floor(t / 1000), !1, !0, !0) : void 0;
}
function ABn(e, t) {
  if (!isSessionLimitResetEnabled() || !isContinuableUsageLimitWall(e)) return;
  let r = b();
  (ie(r), (r.continuableWallResetsAt = e.resetsAt ?? null), w(e, t, "wall"));
}
function w(e, t, r) {
  if (!isSessionLimitResetEnabled() || !isContinuableUsageLimitWall(e)) return Promise.resolve();
  let a = e.resetsAt;
  if (a === void 0) return Promise.resolve();
  let d = b(),
    o = getAccountEpoch(),
    l = d.state,
    v = 0;
  if (l.phase !== "idle" && J(l, e))
    switch (l.phase) {
      case "answered":
        return Promise.resolve();
      case "asking":
        return d.pendingAsk ?? Promise.resolve();
      case "failed":
        if (r === "wall" && l.failures >= N) return Promise.resolve();
        v = l.failures;
    }
  _({ phase: "asking", wallResetsAt: a, accountEpoch: o });
  let p = v4(),
    f = withDeadline(R(t), Q)
      .then((A) => {
        C({
          wallResetsAt: a,
          accountEpoch: o,
          failures: v,
          result: A ?? { kind: "failed" },
          autoArmed: p,
        });
      })
      .catch((A) => {
        logError(ge(A));
        try {
          C({
            wallResetsAt: a,
            accountEpoch: o,
            failures: v,
            result: { kind: "failed" },
            autoArmed: p,
          });
        } catch (W) {
          logError(ge(W));
        }
      })
      .finally(() => {
        if (d.pendingAsk === f) d.pendingAsk = null;
      });
  return ((d.pendingAsk = f), f);
}
function C({
  wallResetsAt: e,
  accountEpoch: t,
  failures: r,
  result: a,
  autoArmed: d,
}) {
  let o = oM();
  if (o.phase !== "asking" || o.wallResetsAt !== e || o.accountEpoch !== t)
    return;
  let l = a.kind === "answered" ? a.status : null;
  if (a.kind === "failed")
    _({ phase: "failed", wallResetsAt: e, accountEpoch: t, failures: r + 1 });
  else _({ phase: "answered", wallResetsAt: e, accountEpoch: t, status: l });
  if (
    (logEvent("tengu_juniper_tide_asked", {
      outcome: fromEnum(
        a.kind === "answered" ? (l === null ? "absent" : "block") : a.kind,
      ),
      attempt: r + 1,
      eligible: l?.eligible ?? !1,
      ineligible_reason: fromEnumOpt(l?.ineligibleReason) ?? void 0,
      config_version: getSessionLimitResetConfigVersion(),
    }),
    l === null || !l.eligible)
  )
    return;
  logEvent("tengu_juniper_tide_wall", {
    in_experiment: l.inExperiment,
    arm: fromEnumOpt(l.arm) ?? void 0,
    available: l.available,
    tier: fromEnum(getSubscriptionTier()),
    auto_armed: d,
    low_priority_active: isLowPriorityActive(),
    config_version: getSessionLimitResetConfigVersion(),
    surface: fromEnumOpt(l.eventProps?.surface) ?? void 0,
    server_tier: fromEnumOpt(l.eventProps?.tier) ?? void 0,
    tenure_bucket: fromEnumOpt(l.eventProps?.tenureBucket) ?? void 0,
    billing_path: fromEnumOpt(l.eventProps?.billingPath) ?? void 0,
    billing_period: fromEnumOpt(l.eventProps?.billingPeriod) ?? void 0,
    extra_usage_state: fromEnumOpt(l.eventProps?.extraUsageState) ?? void 0,
  });
}
function q9e(e, t) {
  let r = e.resetsAt ?? null,
    a = b();
  if (r === null || a.shownWallResetsAt === r) return;
  a.shownWallResetsAt = r;
  let d = x(e);
  logEvent("tengu_juniper_tide_shown", {
    arm: fromEnumOpt(d?.arm) ?? void 0,
    surface: fromEnum(t),
    config_version: getSessionLimitResetConfigVersion(),
  });
}
function nnn(e, t) {
  if (k(e)) w(e, t, "dialog");
}
async function z9e(e, t) {
  try {
    return await K(e, t);
  } catch (r) {
    return (logError(ge(r)), { outcome: "unavailable", text: getSessionLimitResetCopy().unavailableLine });
  }
}
async function K(e, t) {
  let r = b(),
    a = getSessionLimitResetCopy();
  if (x(getCurrentLimits()) === void 0) {
    let f = r.pendingAsk !== null;
    if ((await w(getCurrentLimits(), t, e), f && k(getCurrentLimits()))) await w(getCurrentLimits(), t, e);
  }
  let d = getCurrentLimits();
  if (!oIe(d) || d.resetsAt === void 0) {
    let f = sIe(d);
    if (f !== void 0) return { outcome: "spent", text: f };
    return k(d)
      ? { outcome: "unavailable", text: a.unavailableLine }
      : { outcome: "not_offered", text: P };
  }
  if (r.claiming) return { outcome: "unavailable", text: V };
  let o = d.resetsAt,
    l = getSessionLimitResetConfigVersion();
  logEvent("tengu_juniper_tide_selected", {
    entry: fromEnum(e),
    auto_armed: v4(),
    config_version: l,
  });
  let v = Date.now(),
    p;
  r.claiming = !0;
  try {
    p = (await withDeadline(E(t), G)) ?? { result: "error", nextAvailableAt: null };
  } finally {
    r.claiming = !1;
  }
  switch (
    (logEvent("tengu_juniper_tide_result", {
      result: fromEnum(p.result),
      entry: fromEnum(e),
      latency_ms: Date.now() - v,
      config_version: l,
    }),
    p.result)
  ) {
    case "reset":
    case "not_limited":
    case "already_used":
    case "ineligible":
      logFeatureOk("juniper_tide");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      logFeatureSad("juniper_tide", p.result);
      break;
  }
  switch (p.result) {
    case "reset":
    case "not_limited": {
      r.unsettledClaimWallResetsAt = null;
      let f = isSessionLimitResetAutoContinueEnabled() && r.continuableWallResetsAt === o;
      ((r.continuableWallResetsAt = null), Y(r, o, e, f));
      let A = formatSessionLimitResetLine(
        a.successLine,
        p.result === "reset" ? S(p.nextAvailableAt) : void 0,
      );
      return {
        outcome: "reset",
        text: f ? A : `${A} \xB7 send a message to continue`,
      };
    }
    case "already_used": {
      if ((te(o, p.nextAvailableAt), r.unsettledClaimWallResetsAt === o))
        ((r.unsettledClaimWallResetsAt = null), ee(t));
      return { outcome: "spent", text: formatSessionLimitResetLine(a.spentLine, S(p.nextAvailableAt)) };
    }
    case "ineligible":
      return (ne(o), { outcome: "not_offered", text: P });
    case "auth_error":
      return { outcome: "unavailable", text: q };
    case "unavailable":
    case "rate_limited":
    case "error":
      if (p.result === "error") r.unsettledClaimWallResetsAt = o;
      return { outcome: "unavailable", text: a.unavailableLine };
  }
}
var P = "A session-limit reset isn't available right now.",
  V = "Your session limit is already being reset \xB7 one moment",
  q =
    "Couldn't reset your session limit with this login \xB7 run /login, then try again";
function Y(e, t, r, a) {
  let d = [
    () => Jx("juniper_tide"),
    () => {
      endLowPriorityMode("reset");
    },
    () => Z(t),
    () => {
      let o = oM();
      if (o.phase !== "idle" && o.wallResetsAt === t) _({ phase: "idle" });
    },
    () => {
      if (a) sendAutoContinuationPrompt();
    },
    () => e.events.emit({ type: "reset", entry: r }),
  ];
  for (let o of d)
    try {
      o();
    } catch (l) {
      logError(ge(l));
    }
}
function Z(e) {
  let t = getCurrentLimits();
  if (
    t.status !== "rejected" ||
    t.rateLimitType !== "five_hour" ||
    t.resetsAt !== e
  )
    return;
  emitLimitStatusChange({ ...t, status: "allowed", rateLimitType: void 0, resetsAt: void 0 });
}
function ee(e) {
  if (v4()) {
    IIe();
    return;
  }
  probeQuotaStatusWithSmallModel(e, void 0).catch((t) => {
    logError(ge(t));
  });
}
function te(e, t) {
  let r = oM();
  if (r.phase !== "answered" || r.wallResetsAt !== e || r.status === null)
    return;
  _({
    ...r,
    status: {
      ...r.status,
      available: !1,
      nextAvailableAt: t ?? r.status.nextAvailableAt,
    },
  });
}
function ne(e) {
  let t = oM();
  if (t.phase !== "answered" || t.wallResetsAt !== e || t.status === null)
    return;
  _({ ...t, status: { ...t.status, eligible: !1, available: !1 } });
}
function ie(e) {
  if (e.sessionSwitchSubscribed) return;
  ((e.sessionSwitchSubscribed = !0),
    sc((t, r) => {
      if (D3e(r)) e.continuableWallResetsAt = null;
    }));
}
export { oM, G9e, tnn, oIe, sIe, ABn, q9e, nnn, z9e };

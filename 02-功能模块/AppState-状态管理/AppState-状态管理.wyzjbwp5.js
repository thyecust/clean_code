// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, ze, sc, ld } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  CRON_WORKLOAD_NAME,
  isNonCustomOpusModel,
  isNonCustomSonnetModel,
  getUserSpecifiedModelSetting,
  getMainLoopModel,
  planModeConstituentFamily,
  getCanonicalName,
  getPublicModelDisplayName,
  parseUserSpecifiedModel,
  isBgSession,
  isUnattendedInteractiveSession,
  isClaudeAISubscriber,
  getOauthAccountInfo,
  getFeatureValue_CACHED_MAY_BE_STALE,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getSecuritySensitiveSetting, getSecuritySensitiveSettingWithSources, rawSettingsKeyPresence } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import {
  isMainThreadPromptCommand,
  isEditableQueuedCommand,
  getCommandQueue,
  enqueueCommand,
  removeCommandsByFilter,
  someInFlightDrainCommand,
  settingsChangeDetector,
  getOverageIncludedModels,
  getCurrentLimits,
  subscribeToQuotaRejected,
  probeQuotaStatusForModel,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { randomUUID } from "crypto";
var J = "later",
  L =
    "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.",
  Z =
    "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.",
  ee = 2,
  O = [60000, 300000],
  te = "tengu_marble_heron",
  ne = 30000,
  oe = 90000,
  ae = 1800000,
  se = 21600000,
  P = 86400000;
function ue() {
  return {
    state: { phase: "idle" },
    consecutiveRearms: 0,
    armedAtMs: 0,
    lastArmedResetsAtSeconds: 0,
    lastObservedMs: null,
    takeoverUuids: new Set(),
    queuedBeforeArmUuids: new Set(),
    handoffInProgress: !1,
    dispatchingTakeoverUuids: new Set(),
    pendingContinuationUuid: null,
    activeTurnClaim: null,
    episodeArmOrigin: "dialog",
    sleptThroughReset: !1,
    confirmingMainModel: !1,
    recheckRequestedWhileConfirming: !1,
    armedResetKeys: new Set(),
    autoArmDedupeResetKeys: new Set(),
    changed: Le(),
    events: Le(),
    autoContinueKeyPresence: "unscanned",
    storageV5: void 0,
    unsubscribeSettingsChanges: null,
    unknowableRescanDelayMs: 2000,
    unknowableRescanTimer: void 0,
    revocationRescan: "idle",
    revocationRescanGeneration: 0,
    limitsSubscriptionStarted: !1,
    unsubscribeQuotaRejected: null,
    unsubscribeSessionSwitch: null,
  };
}
var ie = new j(ue);
function a() {
  return ie.of(B().host);
}
function W(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function M(e, t, n = 0) {
  if (typeof e !== "number" && typeof e !== "string") return t;
  let o = Number(e);
  if (!Number.isFinite(o) || o < 0) return t;
  return Math.min(Math.max(Math.round(o), n), se);
}
var re = 60000;
function q() {
  return getFeatureValue_CACHED_MAY_BE_STALE(te, {});
}
function U() {
  let e = q();
  return W(e) ? e : {};
}
function N(e) {
  if (e === void 0) return !0;
  if (typeof e === "string") {
    let t = e.trim().toLowerCase();
    return t !== "" && t !== "false" && t !== "0";
  }
  return Boolean(e);
}
function isQuotaAutoResumeEnabled() {
  let e = q();
  return N(W(e) ? e.enabled : e);
}
function K() {
  return ld() && !isBgSession();
}
function de() {
  return K() && isQuotaAutoResumeEnabled();
}
function ce() {
  return N(U().autoArm);
}
function getAutoContinueAtUsageLimitSetting() {
  return getSecuritySensitiveSetting("autoContinueAtUsageLimit")[0];
}
function getEffectiveAutoContinueAtUsageLimit() {
  return T(a());
}
function T(e) {
  let t = getAutoContinueAtUsageLimitSetting();
  if (t !== void 0) return t;
  return e.autoContinueKeyPresence === "absent";
}
function cancelAutoResumeOnConversationReset(e) {
  let t = a();
  if (e === "auto_restore_cancel") return;
  if (!d(t)) return;
  Q(t, "conversation_reset");
}
var le = 2;
async function A(e, t = le) {
  try {
    e.autoContinueKeyPresence = await rawSettingsKeyPresence(
      "autoContinueAtUsageLimit",
      e.storageV5,
    );
  } catch (n) {
    ((e.autoContinueKeyPresence = "unknowable"), logError(n));
  }
  if (e.autoContinueKeyPresence !== "unknowable")
    ((e.revocationRescan = "idle"), e.revocationRescanGeneration++);
  if (
    (clearTimeout(e.unknowableRescanTimer),
    e.autoContinueKeyPresence === "unknowable" && t > 0)
  )
    ((e.unknowableRescanTimer = setTimeout(
      (n, o) => {
        A(n, o);
      },
      e.unknowableRescanDelayMs,
      e,
      t - 1,
    )),
      e.unknowableRescanTimer.unref?.());
}
function isAutoContinueSettingUserControlled() {
  let e = getSecuritySensitiveSettingWithSources("autoContinueAtUsageLimit")[0]?.source;
  return e === void 0 || e === "userSettings";
}
function isResettableUsageLimitRejection(e) {
  return (
    e.status === "rejected" &&
    e.resetsAt !== void 0 &&
    Number.isFinite(e.resetsAt) &&
    e.isUsingOverage !== !0 &&
    e.overageInUse !== !0
  );
}
function canOfferQuotaAutoResume(e) {
  return isClaudeAISubscriber() && getOauthAccountInfo()?.billingType !== "usage_based" && isResettableUsageLimitRejection(e) && de();
}
function getAutoResumeState() {
  return a().state;
}
function isAutoResumeAutoArmed() {
  let e = a();
  return e.state.phase === "armed" && e.episodeArmOrigin === "auto";
}
function F(e) {
  let t = getCurrentLimits();
  if (t.status === "rejected" && t.resetsAt !== void 0)
    e.armedResetKeys.add(t.resetsAt);
}
function isAutoResumeArmedForReset(e) {
  return a().armedResetKeys.has(e);
}
function hasArmedQuotaAutoResume() {
  return a().state.phase === "armed";
}
function d(e) {
  return (
    e.state.phase === "armed" ||
    e.state.phase === "stale" ||
    e.activeTurnClaim !== null ||
    e.dispatchingTakeoverUuids.size > 0 ||
    getCommandQueue().some((t) => _(e, t)) ||
    someInFlightDrainCommand((t) => _(e, t))
  );
}
function fe(e) {
  return isMainThreadPromptCommand(e) && isEditableQueuedCommand(e);
}
function _(e, t) {
  return (
    t.uuid !== void 0 &&
    (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid))
  );
}
function isAutoResumeEpisodeActive() {
  return d(a());
}
function isAutoResumeWaitingPhase(e) {
  return k(a(), e);
}
function k(e, t) {
  return t === "armed" || t === "stale" || x(e);
}
function hasPendingAutoContinuation() {
  return x(a());
}
function x(e) {
  let t = e.pendingContinuationUuid;
  return t !== null && getCommandQueue().some((n) => n.uuid === t);
}
function isAutoContinuationUuid(e) {
  return e !== void 0 && e === a().pendingContinuationUuid;
}
function subscribeToAutoResumeEvents(e) {
  return a().events.subscribe(e);
}
function subscribeToAutoResumeState(e) {
  return a().changed.subscribe(e);
}
function m(e, t) {
  ((e.state = t), e.changed.emit());
}
function me() {
  let e = U(),
    t = M(e.jitterMinMs, ne),
    n = Math.max(t, M(e.jitterMaxMs, oe));
  return Math.round(t + Math.random() * (n - t));
}
function pe(e, t, n) {
  let o = e * 1000 + me();
  if (t === null) return o;
  let s = O[t] ?? O.at(-1) ?? 0;
  return Math.max(o, n + s);
}
function armAutoResume(e, t = Date.now(), n = "dialog", o) {
  return G(a(), e, t, n, o);
}
function G(e, t, n, o, s) {
  if (!canOfferQuotaAutoResume(t)) return !1;
  (X(e, s),
    (e.consecutiveRearms = 0),
    e.takeoverUuids.clear(),
    e.dispatchingTakeoverUuids.clear(),
    e.queuedBeforeArmUuids.clear());
  for (let r of getCommandQueue())
    if (fe(r) || (r.mode === "bash" && isEditableQueuedCommand(r)))
      ((r.uuid ??= randomUUID()), e.queuedBeforeArmUuids.add(r.uuid));
  return (
    (e.armedAtMs = n),
    logFeatureOk("quota_auto_resume"),
    logEvent("tengu_quota_auto_resume_offer_armed", { origin: fromEnum(o) }),
    z(e, t.resetsAt ?? 0, null, n, o),
    e.events.emit("armed"),
    !0
  );
}
function maybeAutoArmAutoResume(e, t = Date.now(), n) {
  let o = a();
  if (!canOfferQuotaAutoResume(e)) return !1;
  if (o.handoffInProgress) return !1;
  if (!T(o) || !ce()) return !1;
  if (isUnattendedInteractiveSession()) return !1;
  let s = e.resetsAt ?? 0;
  if (s * 1000 - t > P) return !1;
  if (ke(e.rateLimitType, getMainLoopModel())) return !1;
  if (d(o) || o.autoArmDedupeResetKeys.has(s)) return !1;
  if (!G(o, e, t, "auto", n)) return !1;
  return (o.events.emit("auto-armed"), !0);
}
function z(e, t, n, o, s = "dialog") {
  (w(e),
    (e.episodeArmOrigin = s),
    (e.lastArmedResetsAtSeconds = t),
    e.autoArmDedupeResetKeys.add(t),
    e.armedResetKeys.add(t),
    F(e),
    (e.activeTurnClaim = null),
    (e.sleptThroughReset = !1),
    (e.lastObservedMs = o));
  let r = pe(t, n, o);
  (logEvent("tengu_quota_auto_resume_armed", {
    resets_in_sec: Math.max(0, Math.round(t - o / 1000)),
    rearm: n === null ? 0 : n + 1,
  }),
    m(e, {
      phase: "armed",
      resetsAtSeconds: t,
      fireAtMs: r,
      consecutiveRearms: e.consecutiveRearms,
    }));
}
function recheckAutoResume() {
  Re(a());
}
function withAutoResumeRecheck(e) {
  return (...t) => {
    let n = e(...t);
    if (n !== !1) recheckAutoResume();
    return n;
  };
}
async function Re(e) {
  if (e.state.phase !== "armed") return;
  if (e.confirmingMainModel) {
    e.recheckRequestedWhileConfirming = !0;
    return;
  }
  e.confirmingMainModel = !0;
  try {
    for (;;) {
      if (((e.recheckRequestedWhileConfirming = !1), planModeConstituentFamily(getUserSpecifiedModelSetting()) !== null))
        return;
      let t = getMainLoopModel(),
        n = e.state,
        o = await probeQuotaStatusForModel(t, void 0, e.storageV5);
      if (e.state.phase !== "armed" || p(e)) return;
      if (e.recheckRequestedWhileConfirming || getMainLoopModel() !== t || e.state !== n)
        continue;
      if (o === null || !Ce(o)) return;
      ge(e);
      return;
    }
  } catch (t) {
    logError(t);
  } finally {
    e.confirmingMainModel = !1;
  }
}
function ge(e) {
  (V(e, Z),
    logEvent("tengu_quota_auto_resume_fired", {
      rearm: e.consecutiveRearms,
      waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)),
      early: 1,
    }),
    (e.lastObservedMs = null),
    m(e, { phase: "idle" }),
    e.events.emit("fired-now"));
}
function he(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
      return !0;
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !1;
  }
}
function Ae(e) {
  switch (e) {
    case "low_priority":
    case "juniper_tide":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !0;
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
      return !1;
  }
}
function cancelAutoResume(e) {
  Q(a(), e);
}
function Q(e, t) {
  if (d(e)) F(e);
  if (Ae(t)) e.autoArmDedupeResetKeys.clear();
  let n = k(e, e.state.phase);
  if (C(e) && e.state.phase === "idle")
    logEvent("tengu_quota_auto_resume_cancelled", { reason: fromEnum(t) });
  if ((b(e, t), n && he(t))) e.events.emit("cancelled");
}
var AUTO_RESUME_CANCEL_MESSAGES = {
  background_handoff:
    "Automatic continue cancelled \xB7 this session moved to the background, so the task will not resume on its own when the usage limit resets",
  relaunch:
    "Automatic continue cancelled \xB7 Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)",
  desktop_handoff:
    "Automatic continue cancelled \xB7 this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)",
  cloud_handoff:
    "Automatic continue cancelled \xB7 sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)",
  process_exit:
    "Automatic continue cancelled \xB7 Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)",
};
function cancelAutoResumeForHandoff(e) {
  let t = a();
  if (((t.handoffInProgress = !0), !d(t))) return !1;
  let n = k(t, t.state.phase);
  return (Q(t, e), n);
}
function clearHandoffInProgress() {
  a().handoffInProgress = !1;
}
function registerAutoResumeTakeover(e, { dispatching: t = !1 } = {}) {
  let n = a();
  if (!d(n)) return;
  if ((Y(n), n.takeoverUuids.add(e), t)) n.dispatchingTakeoverUuids.add(e);
  n.changed.emit();
}
function w(e, { keepIfDrained: t = !1 } = {}) {
  if (e.pendingContinuationUuid === null) return !1;
  let n = e.pendingContinuationUuid,
    o = removeCommandsByFilter((s) => s.uuid === n).length > 0;
  if (o || !t) ((e.pendingContinuationUuid = null), e.changed.emit());
  return o;
}
function _e(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "account_switch":
    case "setting_off":
    case "manual_submit":
    case "conversation_reset":
    case "killswitch":
    case "rearm_cap":
    case "horizon_exceeded":
    case "continuation_dropped":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !0;
    case "fired":
    case "stale":
      return !1;
  }
}
function b(e, t) {
  if (e.state.phase === "idle") return;
  if (_e(t)) logEvent("tengu_quota_auto_resume_cancelled", { reason: fromEnum(t) });
  m(e, { phase: "idle" });
}
function tickAutoResume(e, t) {
  let n = a();
  if (n.state.phase !== "armed" || p(n)) return "idle";
  let o = n.lastObservedMs ?? n.state.fireAtMs;
  n.lastObservedMs = e;
  let s = e - o,
    r = M(U().graceMs, ae, re);
  if (s > r && e >= n.state.fireAtMs) n.sleptThroughReset = !0;
  if (t || e < n.state.fireAtMs) return "pending";
  if (n.sleptThroughReset)
    return (
      (n.sleptThroughReset = !1),
      logFeatureSad("quota_auto_resume", "stale"),
      logEvent("tengu_quota_auto_resume_stale", {
        late_by_ms: Math.round(e - n.state.fireAtMs),
      }),
      m(n, { phase: "stale" }),
      n.events.emit("stale"),
      "stale"
    );
  return (
    V(n),
    logEvent("tengu_quota_auto_resume_fired", {
      rearm: n.state.consecutiveRearms,
      waited_ms: Math.max(0, Math.round(e - n.armedAtMs)),
    }),
    b(n, "fired"),
    "fired"
  );
}
function V(e, t = L) {
  w(e);
  let n = randomUUID();
  ((e.pendingContinuationUuid = n),
    (e.activeTurnClaim = null),
    e.changed.emit(),
    enqueueCommand({
      agentId: ze(),
      mode: "prompt",
      priority: J,
      value: t,
      uuid: n,
      origin: { kind: "auto-continuation" },
      isMeta: !0,
      skipSlashCommands: !0,
      workload: CRON_WORKLOAD_NAME,
    }));
}
function getStaleAutoResumePrompt() {
  return isAutoResumeStale() ? L : null;
}
function isAutoResumeStale() {
  let e = a();
  return e.state.phase === "stale" && !p(e);
}
function dropPendingAutoContinuation(e) {
  let t = a(),
    n = t.pendingContinuationUuid;
  if (n === null || !e.some((o) => o.uuid === n)) return e;
  if (!p(t)) return e;
  return e.filter((o) => o.uuid !== n);
}
function be(e) {
  if (e.episodeArmOrigin !== "auto" || T(e))
    return ((e.revocationRescan = "idle"), !1);
  if (getAutoContinueAtUsageLimitSetting() === void 0 && e.autoContinueKeyPresence === "unknowable") {
    if (e.revocationRescan === "idle") {
      e.revocationRescan = "pending";
      let t = ++e.revocationRescanGeneration;
      return (
        A(e).finally(() => {
          if (
            e.revocationRescan === "pending" &&
            t === e.revocationRescanGeneration
          )
            e.revocationRescan = "done";
        }),
        !1
      );
    }
    if (e.revocationRescan === "pending") return !1;
  }
  return ((e.revocationRescan = "idle"), !0);
}
function p(e) {
  if (!isQuotaAutoResumeEnabled()) return (v(e, "killswitch"), !0);
  if (be(e)) return (v(e, "setting_off"), !0);
  return !1;
}
function Y(e) {
  if ((w(e, { keepIfDrained: !0 }), e.state.phase === "stale"))
    (logEvent("tengu_quota_auto_resume_stale_resumed", {}),
      (e.lastObservedMs = null),
      b(e, "stale"));
  else if (e.state.phase === "armed")
    ((e.lastObservedMs = null), b(e, "manual_submit"));
}
function v(e, t) {
  (logEvent("tengu_quota_auto_resume_cancelled", { reason: fromEnum(t) }),
    C(e),
    m(e, { phase: "idle" }),
    e.events.emit(
      t === "horizon_exceeded"
        ? "horizon-exceeded"
        : t === "rearm_cap"
          ? "cap-exhausted"
          : "disabled",
    ));
}
function ve(e, t) {
  return e.episodeArmOrigin === "auto" && t * 1000 - Date.now() > P;
}
function claimAutoResumeTurn(e) {
  let t = a();
  for (let c of e.turnUuids) t.dispatchingTakeoverUuids.delete(c);
  let n =
      t.pendingContinuationUuid !== null &&
      e.turnUuids.includes(t.pendingContinuationUuid),
    o = e.turnUuids.some((c) => t.takeoverUuids.has(c)),
    s = k(t, t.state.phase) || n,
    r =
      e.isHumanTakeover &&
      !o &&
      e.humanCommandUuids.length > 0 &&
      e.humanCommandUuids.every(
        (c) => c !== void 0 && t.queuedBeforeArmUuids.has(c),
      ),
    l = null;
  if (r && !n) return null;
  if (r) l = "continuation";
  else if (e.isHumanTakeover && (o || s)) ((l = "takeover"), Y(t));
  else if (n) l = "continuation";
  if (l === null) return null;
  if (t.activeTurnClaim !== null)
    logError(
      Error(
        "quota auto-resume: a turn claimed the episode while another claim was outstanding",
      ),
    );
  let I = { kind: l, queried: e.willQuery };
  return ((t.activeTurnClaim = I), t.changed.emit(), I);
}
function releaseAutoResumeTurn(e, t) {
  let n = a();
  for (let r of t) n.dispatchingTakeoverUuids.delete(r);
  if (e !== null) {
    if (e !== n.activeTurnClaim) return;
    if (
      ((n.activeTurnClaim = null), n.changed.emit(), n.state.phase !== "idle")
    )
      return;
    if (getCommandQueue().some((r) => _(n, r))) return;
    if ((C(n), e.kind === "continuation" && !e.queried)) D(n);
    return;
  }
  let o =
    n.pendingContinuationUuid !== null && t.includes(n.pendingContinuationUuid);
  if (
    (o || t.some((r) => n.takeoverUuids.has(r))) &&
    n.state.phase === "idle" &&
    n.activeTurnClaim === null &&
    !getCommandQueue().some((r) => _(n, r))
  ) {
    if ((C(n), o)) D(n);
  }
}
function D(e) {
  (logFeatureBad("quota_auto_resume", "continuation_dropped"),
    logEvent("tengu_quota_auto_resume_cancelled", {
      reason: fromEnum("continuation_dropped"),
    }),
    e.events.emit("continuation-dropped"));
}
function C(e) {
  ((e.consecutiveRearms = 0),
    (e.lastArmedResetsAtSeconds = 0),
    (e.episodeArmOrigin = "dialog"),
    (e.revocationRescan = "idle"),
    e.revocationRescanGeneration++,
    e.takeoverUuids.clear(),
    e.dispatchingTakeoverUuids.clear(),
    e.queuedBeforeArmUuids.clear(),
    (e.lastObservedMs = null),
    (e.activeTurnClaim = null));
  let t = w(e);
  return (e.changed.emit(), t);
}
function Ce(e) {
  return (
    e.status !== "rejected" || e.isUsingOverage === !0 || e.overageInUse === !0
  );
}
function ye(e, t, n) {
  if (!isResettableUsageLimitRejection(t) || !K()) return;
  let o = t.resetsAt ?? 0;
  if (d(e) && R(t.rateLimitType, getMainLoopModel())) e.autoArmDedupeResetKeys.add(o);
  if (e.state.phase === "armed") {
    if (o * 1000 > e.state.fireAtMs && R(t.rateLimitType, getMainLoopModel()))
      S(e, o, null, e.episodeArmOrigin);
    return;
  }
  if (x(e)) return;
  if (e.state.phase === "stale") return;
  let s = e.activeTurnClaim;
  if (s === null) return;
  if (n !== "main_thread") return;
  if (s.kind === "takeover") {
    ((e.consecutiveRearms = 0),
      S(
        e,
        R(t.rateLimitType, getMainLoopModel()) ? o : e.lastArmedResetsAtSeconds,
        null,
        "dialog",
      ));
    return;
  }
  if (e.consecutiveRearms >= ee) {
    (logFeatureBad("quota_auto_resume", "rearm_cap"),
      e.autoArmDedupeResetKeys.add(o),
      v(e, "rearm_cap"));
    return;
  }
  let r = e.consecutiveRearms;
  (e.consecutiveRearms++, S(e, o, r, e.episodeArmOrigin));
}
function S(e, t, n, o) {
  if (p(e)) return;
  if (ve(e, t)) {
    v(e, "horizon_exceeded");
    return;
  }
  let s = e.episodeArmOrigin === "auto" && o === "dialog";
  if ((z(e, t, n, Date.now(), o), e.events.emit("rearmed"), s))
    e.events.emit("taken-over");
}
function ke(e, t) {
  if (e !== "seven_day_opus" && e !== "seven_day_sonnet") return !1;
  if (R(e, t)) return !1;
  let n = planModeConstituentFamily(getUserSpecifiedModelSetting());
  if (e === "seven_day_opus" && n === "opus") return !1;
  if (e === "seven_day_sonnet" && n === "sonnet") return !1;
  return !0;
}
function R(e, t) {
  switch (e) {
    case "five_hour":
    case "seven_day":
    case "overage":
      return !0;
    case "seven_day_opus":
      return isNonCustomOpusModel(getCanonicalName(t));
    case "seven_day_sonnet":
      return isNonCustomSonnetModel(getCanonicalName(t));
    case "seven_day_overage_included": {
      let n = getPublicModelDisplayName(parseUserSpecifiedModel(t));
      if (n === null) return !1;
      let o = n.toLowerCase();
      return getOverageIncludedModels().some((s) => s.toLowerCase() === o);
    }
    case void 0:
      return !1;
  }
  return !1;
}
function startAutoResumeSubscriptions(e) {
  X(a(), e);
}
function X(e, t) {
  if (e.limitsSubscriptionStarted) return;
  ((e.limitsSubscriptionStarted = !0),
    (e.storageV5 = t),
    (e.unsubscribeQuotaRejected = subscribeToQuotaRejected((n, o) => ye(e, n, o))),
    A(e),
    (e.unsubscribeSettingsChanges = settingsChangeDetector.subscribe(() => {
      A(e);
    })),
    (e.unsubscribeSessionSwitch = sc((n, o) => {
      if (isConversationResetSwitchReason(o)) (Q(e, "conversation_reset"), (e.handoffInProgress = !1));
    })));
}
function isConversationResetSwitchReason(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "remote_attach":
      return !0;
    case "fork":
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return !1;
  }
}
export {
  isQuotaAutoResumeEnabled,
  getAutoContinueAtUsageLimitSetting,
  getEffectiveAutoContinueAtUsageLimit,
  cancelAutoResumeOnConversationReset,
  isAutoContinueSettingUserControlled,
  isResettableUsageLimitRejection,
  canOfferQuotaAutoResume,
  getAutoResumeState,
  isAutoResumeAutoArmed,
  isAutoResumeArmedForReset,
  hasArmedQuotaAutoResume,
  isAutoResumeEpisodeActive,
  isAutoResumeWaitingPhase,
  hasPendingAutoContinuation,
  isAutoContinuationUuid,
  subscribeToAutoResumeEvents,
  subscribeToAutoResumeState,
  armAutoResume,
  maybeAutoArmAutoResume,
  recheckAutoResume,
  withAutoResumeRecheck,
  cancelAutoResume,
  AUTO_RESUME_CANCEL_MESSAGES,
  cancelAutoResumeForHandoff,
  clearHandoffInProgress,
  registerAutoResumeTakeover,
  tickAutoResume,
  getStaleAutoResumePrompt,
  isAutoResumeStale,
  dropPendingAutoContinuation,
  claimAutoResumeTurn,
  releaseAutoResumeTurn,
  startAutoResumeSubscriptions,
  isConversationResetSwitchReason,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt, B, K, ze, _B, fae, ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { jsonStringify, jsonParseUntraced, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { MAX_ARTIFACT_WATCHES, stopArtifactSupervisor, getArtifactState, getArtifactPresence, disposePresenceSlug, retirePresenceSlug, isPresenceDeclined } from "./chunk-rr78st95.js";
import { ARTIFACT_WATCH_LIFECYCLE_ORIGIN, logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { escapeHtmlText } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import {
  getArtifactReadInstruction,
  VER_SHAPE,
  recordOwnPublish,
  isOwnPublishedVer,
  markPublishInFlight,
  clearPublishInFlight,
  isPublishInFlight,
  isFrameLiveSubscribeEnabled,
  isFrameLiveTokenLeaseEnabled,
  derivePublishContextFrom,
  mainObservedArtifactVersion,
  markAutoReactNoticePending,
  deriveLiveSubscriptionTransport,
  isArtifactGoneError,
  isArtifactOtherOrgError,
  ARTIFACT_OTHER_ORG_MESSAGE,
  OTHER_ORG_SIGN_IN_HINT,
  FRAME_REQUEST_TIMEOUT_MS,
  fetchArtifactBootResponse,
  readArtifactBoot,
  readArtifactSubscription,
  isTransientHttpStatus,
  renewArtifactWatchToken,
} from "./chunk-01ymf0ar.js";
import { getUserAgent, isActingAsBgJob, sameOwnerAccount, getFeatureValue_CACHED_MAY_BE_STALE, readFreshOauthAccountFromDisk } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { formatDuration } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { isStrictHumanTurn, hasStrictHumanDecider, isUserDrivenTurn } from "../远程控制-Bridge/chunk-5ne99rq3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import {
  enqueuePendingNotification,
  removeCommandsByFilter,
  buildTaskNotification,
  MAX_ARM_OUTCOMES,
  MAX_ANNOUNCED_ARM_FAILURES,
  DEFAULT_WATCH_ADVICE,
  setBoundedMapEntry,
  addBoundedSetEntry,
  deletePrefixedSetEntries,
  getWakeState,
  resetWakeState,
  bumpScanGeneration,
  getStopGeneration,
  stopSlug,
  __t,
  isSlugStopped,
  isSlugStopLatched,
  stopSlugAndSweep,
  isSlugSwept,
  forgetYieldedSlug,
  isSlugYielded,
  isSlugSweptOrYielded,
  formatAutoRepliesReenabledSummary,
  formatAutoRepliesResumedSummary,
  formatWatchStoppedSummary,
  formatNotWatchingArtifactSummary,
  enqueueCoalescedArtifactNotice,
  markPriorNoticeSuppressed,
  refreshSummonArmForSlug,
  forgetSummonDeclaredAndRefresh,
  clearSummonDeclaredFlag,
  LIVE_TOKEN_LEASE_MS,
  SESSION_EXPIRED_CLOSE_CODE,
  SERVICE_UNAVAILABLE_CLOSE_CODE,
  REVOKED_CLOSE_CODE,
  SYNC_TOKEN_LEASE_MS,
  MIN_TOKEN_LEASE_MS,
  MAX_CAP_STRIKES,
  createTokenLease,
  updateTokenLease,
  shouldRetryLeaseDial,
  isLeaseValidWithMargin,
  computeReconnectDelay,
  computeSeedDeferMs,
  TOKEN_BUCKET_CAPACITY,
  TOKEN_BUCKET_REFILL_MS,
  createTokenBucket,
  ARMED_VIA_VALUES,
  isMonitorWsTask,
  isAutoReactArmedTask,
  isMonitorTaskLeaseLive,
  isMonitorSocketOpen,
  setFrameLiveUserStopObserver,
  setAutoReactHumanTurnObserver,
  setArtifactPresenceStopObserver,
  setAutoReactDeliberateStopObserver,
  killMonitorTask,
  tearDownAutoReactForSlug,
  pauseAutoRepliesForSlug,
  emitAutoReactStopNotification,
  closeAllMonitorSockets,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import {
  getArtifactEnvironment,
  getClaudeAiOrigin,
  Fir,
  getBaseApiUrl,
  Uir,
  slugToUuid,
  ARTIFACT_SLUG_RE,
  parseArtifactUrlAnyCase,
  artifactViewerUrlFor,
  sweepResultLineText,
} from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { MonitorWsPreconditionError, normalizeWebSocketUrlScheme, HANDSHAKE_TIMEOUT_DETAIL, parseUpgradeRejectDetail, pickToolInvocationContext, startWebSocketMonitor, wsEgressDenyReason } from "../工具Monitor/工具Monitor.981fw9dy.js";
import { isArtifactReplyYieldEnabled, registerPendingClaim, dropDeliveredSlug } from "./artifact-reply-yield.js";
import {
  describeArtifactCommentsAction,
  selectArtifactToolsetText,
  ensureAutoReactLedgerLoaded,
  setAutoReactLedgerStorage,
  scheduleAutoReactLedgerWrite,
  clearAutoReactLedger,
  resetAutoReactLedgerForSlug,
  isArtifactCommentsAvailable,
  stripWatchArtifactFlags,
  removeWatchArtifactArg,
  initCommentCensus,
  markCommentCensusDirty,
  deleteCommentCensusEntry,
  resolveLiveSessionHolder,
  isArtifactAutoReactOptedIn,
  isArtifactAutoReactEnabled,
  disarmArtifactAutoReact,
  resetAutoReactStateForSlug,
  formatArtifactDisplayName,
  scheduleArtifactAutoReactWake,
} from "./chunk-p1dkvpxj.js";
import { resolveOwnProcStart, getArtifactCommentMonitorStorage, ensureArtifactCommentMonitorState, armArtifactCommentMonitor, stopArtifactCommentMonitor, markArtifactCommentMonitorTraveling } from "./artifact-comment-monitor-intent.js";
import { hasLiveAutoReactSupervision } from "../../01-核心基础设施/共享小工具-未细化/auto-react-state.js";
import { createStore } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
import { s, T, O, se, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
class kn {
  working = createStore({ working: !1 });
  userPrompt = createStore({ pending: !1 });
}
var je = new Gt(() => new kn());
function setSessionWorking(e, t) {
  je.of(e).working.setState((r) => (r.working === t ? r : { working: t }));
}
function isSessionWorking(e) {
  return je.of(e).working.getState().working;
}
function subscribeSessionWorking(e, t) {
  return je.of(e).working.subscribe(t);
}
function setSessionUserPromptPending(e, t) {
  je.of(e).userPrompt.setState((r) => (r.pending === t ? r : { pending: t }));
}
var yt = 120,
  yn = `act:${yt}`,
  Kr = "act:0";
function Tn(e) {
  if (!e.activityOkReported)
    ((e.activityOkReported = !0), logFeatureOk("artifact_activity_emit"));
}
function En(e, t, r) {
  (t(r), Tn(e));
}
function xn(e, t, r) {
  (t(r), Tn(e));
}
function kt(e, t) {
  for (let r of e.activitySenders.values()) En(e, r, t ? yn : Kr);
  for (let r of e.agentActivitySinks.values()) xn(e, r, t ? yt : 0);
}
function Cn(e) {
  return e.activitySenders.size + e.agentActivitySinks.size;
}
function Tt(e) {
  if (Cn(e) === 0) return;
  if (e.activityRefreshTimer !== void 0) return;
  ((e.activityRefreshTimer = setInterval(
    (t) => kt(t, !0),
    e.activityRefreshMs,
    e,
  )),
    e.activityRefreshTimer.unref?.());
}
function Wn(e) {
  if (Cn(e) === 0 && e.activityRefreshTimer !== void 0)
    (clearInterval(e.activityRefreshTimer), (e.activityRefreshTimer = void 0));
}
function qr(e, t) {
  if (t) {
    if (e.activityClearTimer !== void 0) {
      (clearTimeout(e.activityClearTimer), (e.activityClearTimer = void 0));
      return;
    }
    ((e.activityOnsetTimer ??= setTimeout(
      (r) => {
        ((r.activityOnsetTimer = void 0), kt(r, !0), Tt(r));
      },
      e.activityEdgeDebounceMs,
      e,
    )),
      e.activityOnsetTimer.unref?.());
  } else {
    if (e.activityOnsetTimer !== void 0) {
      (clearTimeout(e.activityOnsetTimer), (e.activityOnsetTimer = void 0));
      return;
    }
    ((e.activityClearTimer ??= setTimeout(
      (r) => {
        if (
          ((r.activityClearTimer = void 0), r.activityRefreshTimer !== void 0)
        )
          (clearInterval(r.activityRefreshTimer),
            (r.activityRefreshTimer = void 0));
        kt(r, !1);
      },
      e.activityEdgeDebounceMs,
      e,
    )),
      e.activityClearTimer.unref?.());
  }
}
function Ln() {
  return B();
}
function On(e) {
  if (e.activityUnsubscribe !== void 0) return;
  let t = Ln();
  e.activityUnsubscribe = subscribeSessionWorking(t, () => {
    try {
      qr(e, isSessionWorking(t));
    } catch (r) {
      logError(r);
    }
  });
}
function In(e) {
  return (
    (isSessionWorking(Ln()) && e.activityOnsetTimer === void 0) ||
    e.activityClearTimer !== void 0
  );
}
function Mn(e, t, r) {
  if (e.disposed) return;
  if ((On(e), e.activitySenders.set(t, r), forgetSummonDeclaredAndRefresh(e, t), In(e)))
    (En(e, r, yn), Tt(e));
}
function Pn(e, t, r) {
  if (e.activitySenders.get(t) === r)
    (e.activitySenders.delete(t), clearSummonDeclaredFlag(e, t), Wn(e));
}
function Ye(e, t, r) {
  if (e.disposed) return;
  if ((On(e), e.agentActivitySinks.set(t, r), In(e))) (xn(e, r, yt), Tt(e));
}
function Xe(e, t, r) {
  if (e.agentActivitySinks.get(t) === r)
    (e.agentActivitySinks.delete(t), Wn(e));
}
var Qe = "frame-sync.v1",
  Et = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;
function Se(e) {
  if (!Et.test(e)) return !1;
  let t = e.split(".", 4)[2];
  return t !== void 0 && t.endsWith("_agent");
}
function Je(e) {
  let t = e.split(".", 6)[4];
  if (t === void 0 || !/^[0-9]{1,12}$/.test(t)) return;
  let r = Number(t);
  return Number.isSafeInteger(r) && r > 0 ? r : void 0;
}
var jr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function me(e) {
  let [t, r] = e.split(".", 3);
  if (t === void 0 || r === void 0 || r === "") return;
  let i = Buffer.from(t, "base64url").toString("utf8");
  if (!jr.test(i) || Buffer.from(i, "utf8").toString("base64url") !== t) return;
  return { accountUuid: i, organizationUuid: r };
}
function We(e) {
  let t = new URL("/api/frame/sync", getBaseApiUrl());
  return (t.searchParams.set("slug", e), normalizeWebSocketUrlScheme(t));
}
var zr = 60000,
  Fn = "boot_request_error",
  xt = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED",
  Ze = createLazyValue(() =>
    c({
      kind: s(),
      slug: s().optional(),
      actor: s().optional(),
      payload: se().optional(),
    }),
  ),
  Ct = createLazyValue(() => c({ cap: s(), exp: T() })),
  Wt = createLazyValue(() => c({ reason: s() }));
function Lt(e, t) {
  return jsonStringify({ kind: "activity", slug: e, payload: { busyS: t } });
}
function Dn(e) {
  if (a.CLAUDE_CODE_REMOTE) return "remote";
  if (Uir()) return "cp_override";
  if (wsEgressDenyReason(We(e)) !== null) return "egress_denied";
  return null;
}
async function Vn(e, t) {
  let r = e.storedCap;
  if (!e.rebootNeeded && r !== void 0 && r.exp * 1000 - Date.now() > zr) {
    let _ = await readFreshOauthAccountFromDisk(e.context.storageV5).catch(() => {
      return;
    });
    if (!t.isCurrent()) return { outcome: "stale" };
    if (sameOwnerAccount(e.owner, _)) return { outcome: "token", token: r.cap, boot: void 0 };
  }
  let i,
    d = Date.now();
  try {
    i = await readArtifactBoot({ slug: e.slug, env: getArtifactEnvironment() }, t.feature, e.abort.signal, {
      agentPeer: !0,
      speculative: !0,
      credentials: e.context.credentials,
    });
  } catch {
    i = { err: "boot threw", errorCode: Fn };
  }
  if (!t.isCurrent()) return { outcome: "stale" };
  if (i.err !== null) {
    if (isArtifactOtherOrgError(i)) return { outcome: "other_org" };
    if (isArtifactGoneError(i)) return { outcome: "not_found" };
    return {
      outcome: "boot_failed",
      status: i.status,
      noAnswer: i.errorCode === Fn,
      elapsedMs: Date.now() - d,
    };
  }
  let o = i.data.syncToken,
    l = typeof o === "string" && Et.test(o) ? me(o) : void 0;
  if (e.owner !== void 0 && l !== void 0 && !sameOwnerAccount(e.owner, l))
    return { outcome: "owner_changed" };
  let p = typeof o === "string" && Se(o) ? l : void 0;
  if (typeof o !== "string" || p === void 0) return { outcome: "not_admitted" };
  return (
    (e.owner = p),
    (e.rebootNeeded = !1),
    Nn(e, Xr(o)),
    { outcome: "token", token: o, boot: i.data }
  );
}
function Xr(e) {
  return { cap: e, exp: Je(e) ?? Math.floor((Date.now() + SYNC_TOKEN_LEASE_MS) / 1000) };
}
function Nn(e, t) {
  let r = Date.now(),
    i = Math.min(r + SYNC_TOKEN_LEASE_MS, Math.max(r + MIN_TOKEN_LEASE_MS, t.exp * 1000));
  ((e.storedCap = { cap: t.cap, exp: Math.floor(i / 1000) }),
    (e.capStrikes = 0));
}
function Un(e, t, r) {
  switch (t) {
    case "ctrl:token_refresh": {
      let i = Ct().safeParse(r);
      if (i.success && Se(i.data.cap) && sameOwnerAccount(e.owner, me(i.data.cap)))
        Nn(e, { cap: i.data.cap, exp: i.data.exp });
      return !0;
    }
    case "ctrl:token_refresh_declined": {
      let i = Wt().safeParse(r);
      if (i.success && i.data.reason === xt)
        ((e.rebootNeeded = !0), (e.storedCap = void 0));
      return !0;
    }
    default:
      return !1;
  }
}
function Qr(e, t, r) {
  if (t()) return;
  if (e.taskId !== void 0)
    try {
      killMonitorTask(e.taskId, e.context.taskRegistry, { quiet: !0 });
    } catch {}
  r("error");
}
function et(e) {
  if (
    ((e.stopped = !0),
    (e.storedCap = void 0),
    e.abort.abort(),
    e.reconnectTimer !== void 0)
  )
    (clearTimeout(e.reconnectTimer), (e.reconnectTimer = void 0));
  if (((e.send = void 0), (e.state = "closed"), e.taskId !== void 0)) {
    let t = e.taskId;
    e.taskId = void 0;
    try {
      killMonitorTask(t, e.context.taskRegistry, { quiet: !0 });
    } catch {}
  }
}
var Jr = 404;
function Zr(e) {
  let t = Number(e);
  return t === 1008 || (t >= 4000 && t <= 4999);
}
function $n(e, t, r) {
  switch (t.on) {
    case "dial_error":
      return t.deterministic ? "refused" : "dropped";
    case "boot":
      if (isTransientHttpStatus(t.status)) return "unavailable";
      if (t.noAnswer)
        return t.elapsedMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      return "refused";
    case "socket": {
      if (t.detail === REVOKED_CLOSE_CODE) return "revoked";
      if (t.opened) {
        if (t.uptimeMs >= r.stallThresholdMs) return "dropped";
        if (t.detail === SERVICE_UNAVAILABLE_CLOSE_CODE && !e.rebootNeeded) return "unavailable";
        return Zr(t.detail) ? "refused" : "dropped";
      }
      let i = parseUpgradeRejectDetail(t.detail);
      if (i !== null)
        return isTransientHttpStatus(i.status) || i.cfMitigated || i.status === Jr
          ? "unavailable"
          : "refused";
      return t.detail === HANDSHAKE_TIMEOUT_DETAIL || t.ageMs >= r.stallThresholdMs
        ? "unavailable"
        : "dropped";
    }
  }
}
function Gn(e, t, r) {
  let i = $n(e, t, r);
  return i === "refused" || i === "revoked";
}
function Hn(e, t, r) {
  let i = $n(e, r, t);
  if (i === "revoked" || i === "refused") e.storedCap = void 0;
  else if (i === "dropped" && r.on !== "boot" && e.storedCap !== void 0) {
    let o = r.on === "socket" && r.opened && r.uptimeMs >= t.minUptimeMs;
    if (((e.capStrikes = o ? 0 : e.capStrikes + 1), e.capStrikes >= MAX_CAP_STRIKES))
      e.storedCap = void 0;
  }
  if (i === "revoked") return { next: "end", reason: "revoked" };
  if (i === "unavailable") {
    let o = e.stalledSince === void 0;
    if (o) ((e.stalledSince = Date.now()), (e.stalls = 0));
    let l = Math.min(t.stallMinMs * 2 ** e.stalls, t.stallMaxMs / 2),
      p = Math.min(l * 2, t.stallMaxMs);
    return (
      e.stalls++,
      {
        next: "redial",
        delayMs: Math.round(l + Math.random() * (p - l)),
        stalled: !0,
        stallRunStarted: o,
      }
    );
  }
  if (((e.stalledSince = void 0), i === "refused")) {
    if ((e.refusals++, e.refusals > t.maxConsecutiveRefusals))
      return { next: "end", reason: "refused" };
  }
  if (r.on === "socket" && r.opened) {
    if (r.uptimeMs >= t.stallThresholdMs) e.refusals = 0;
    if (r.uptimeMs >= t.minUptimeMs) e.backoff = 0;
  }
  let d = Math.min(t.capMs, t.baseMs * 2 ** Math.min(e.backoff, 5));
  return (
    e.backoff++,
    {
      next: "redial",
      delayMs: Math.round(Math.random() * d),
      stalled: !1,
      stallRunStarted: !1,
    }
  );
}
function It(e, t, r) {
  if (e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer);
  ((e.state = "closed"),
    (e.reconnectTimer = setTimeout(ei, t, e, r)),
    e.reconnectTimer.unref?.());
}
function ei(e, t) {
  ((e.reconnectTimer = void 0), t(e));
}
async function Bn(e, t, r, i) {
  let { slug: d } = e,
    { live: o } = getArtifactState(),
    l = !1,
    p = !1,
    _,
    S,
    v = () => p || !i(),
    E = Date.now(),
    L = () => (l && e.openedAt > 0 ? Date.now() - e.openedAt : 0),
    x = (R) => {
      if (v()) return;
      p = !0;
      let A = L(),
        F = Date.now() - E;
      if (e.send === _)
        ((e.send = void 0), (e.state = "closed"), (e.openedAt = 0));
      r.onEnded(R, { opened: l, uptimeMs: A, ageMs: F });
    };
  try {
    let R = await startWebSocketMonitor(
      {
        ws: { url: We(d), protocols: [Qe, t] },
        headers: { "User-Agent": getUserAgent() },
        description: r.description,
        timeout_ms: 0,
        persistent: !0,
        quietLifecycle: !0,
        ambient: !0,
        handshakeDeadlineMs: r.handshakeDeadlineMs,
        ...(e.taskId !== void 0 && { reuseTaskId: e.taskId }),
        transform: (A) => (r.onFrame(A), null),
        keepalive: r.keepalive,
        onSender: (A) => {
          if (v()) return;
          ((_ = A),
            (e.send = A),
            (e.state = "open"),
            (S = (F) => A(Lt(d, F))),
            Ye(o, r.activitySinkKey, S));
        },
        onSenderClosed: () => {
          if (S !== void 0) Xe(o, r.activitySinkKey, S);
          if (_ !== void 0 && e.send === _) {
            if (((e.send = void 0), e.state === "open")) e.state = "closed";
          }
          if (v()) return;
          let A = e.taskId,
            F = A === void 0 ? void 0 : e.context.taskRegistry.all()[A];
          if (A !== void 0 && F?.status !== "running") {
            x("task_ended");
            return;
          }
          setTimeout(Qr, 0, e, v, x).unref?.();
        },
        onLifecycle: (A, F) => {
          if (v()) return;
          if (A === "open") {
            ((l = !0),
              (e.everOpened = !0),
              (e.openedAt = Date.now()),
              r.onOpen());
            return;
          }
          x(F);
        },
      },
      e.context,
    );
    if (((e.taskId = R.data.taskId), !i()))
      return (
        killMonitorTask(R.data.taskId, e.context.taskRegistry, { quiet: !0 }),
        { outcome: "stale" }
      );
    return { outcome: "armed" };
  } catch (R) {
    return (
      logForDebugging(
        `[${r.label}] connect failed slug=${d}: ${R instanceof Error ? R.name : "error"}`,
      ),
      { outcome: "error", error: R }
    );
  }
}
var Mt = createLazyValue(() => c({ tag: s(), ver: s(), replay: O().optional() })),
  Pt = "INVALIDATE_TAG_LIVE",
  Ft = "INVALIDATE_TAG_SHARED",
  qn = "INVALIDATE_TAG_HEAD";
function Dt(e) {
  return e * 3 + 5000;
}
function ti() {
  return a.CLAUDE_CODE_ARTIFACT_PRESENCE ?? getFeatureValue_CACHED_MAY_BE_STALE("tengu_brass_plover", !1);
}
function tt(e) {
  if (!ti()) return "flag_off";
  return Dn(e);
}
function _e() {
  return getArtifactState().presence;
}
function Le(e) {
  return !e.stopped && _e().conns.get(e.slug) === e;
}
function jn(e) {
  let { slug: t, url: r } = e;
  try {
    let i = tt(t);
    if (i !== null) {
      if (i !== "flag_off") logForDebugging(`[artifactPresence] not arming slug=${t}: ${i}`);
      return;
    }
    let d = _e();
    if (d.declined.has(t)) return;
    let o = pickToolInvocationContext(e.context);
    ((d.dispose = ui),
      (d.accountChanged = ci),
      (d.disposeSlug = ai),
      (d.retireSlug = Xn));
    let l = d.conns.get(t);
    if (l !== void 0 && !l.stopped) {
      if (
        ((l.url = r), l.stalledSince !== void 0 && l.reconnectTimer !== void 0)
      )
        It(l, Math.round(Math.random() * d.timing.capMs), zn);
      return;
    }
    ni(d, t, r, o);
  } catch (i) {
    logForDebugging(
      `[artifactPresence] arm threw slug=${t}: ${i instanceof Error ? i.name : "error"}`,
    );
  }
}
function ni(e, t, r, i) {
  let d = {
    slug: t,
    url: r,
    context: i,
    send: void 0,
    state: "connecting",
    storedCap: void 0,
    capStrikes: 0,
    owner: void 0,
    rebootNeeded: !1,
    backoff: 0,
    refusals: 0,
    stalledSince: void 0,
    stalls: 0,
    openedAt: 0,
    everOpened: !1,
    reconnectTimer: void 0,
    taskId: void 0,
    stopped: !1,
    abort: new AbortController(),
  };
  (e.conns.set(t, d),
    setArtifactPresenceStopObserver(ri),
    Yn(d, "initial").catch((o) => {
      (logForDebugging(
        `[artifactPresence] connect threw slug=${t}: ${o instanceof Error ? o.name : "error"}`,
      ),
        Oe(d, { on: "dial_error", deterministic: !1 }));
    }));
}
var ri = { closeByTaskId: (e) => ii(e) };
function ii(e) {
  let t = getArtifactPresence();
  if (t === void 0) return !1;
  for (let r of t.conns.values()) {
    if (r.taskId !== e) continue;
    return ((r.taskId = void 0), t.declined.add(r.slug), ie(r), !0);
  }
  return !1;
}
async function Yn(e, t) {
  let r = tt(e.slug);
  if (r !== null) {
    (logForDebugging(`[artifactPresence] closing slug=${e.slug}: ${r}`), ie(e));
    return;
  }
  e.state = "connecting";
  let i = await Vn(e, { feature: "artifact_presence", isCurrent: () => Le(e) });
  switch (i.outcome) {
    case "stale":
      return;
    case "not_found":
      ie(e);
      return;
    case "other_org":
      (logFeatureSad("artifact_presence", "other_org"), ie(e));
      return;
    case "boot_failed": {
      let d = {
        on: "boot",
        status: i.status,
        noAnswer: i.noAnswer,
        elapsedMs: i.elapsedMs,
      };
      if (t === "initial" && Gn(e, d, _e().timing))
        (logForDebugging(
          `[artifactPresence] boot failed for slug=${e.slug}; no presence connection`,
        ),
          ie(e));
      else Oe(e, d);
      return;
    }
    case "not_admitted":
      (logForDebugging(
        `[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`,
      ),
        ie(e));
      return;
    case "owner_changed":
      (logFeatureSad("artifact_presence", "owner_changed"), ie(e));
      return;
    case "token":
      await si(e, i.token);
      return;
  }
}
async function si(e, t) {
  let { timing: r } = _e(),
    { slug: i } = e,
    d = !e.everOpened,
    o = await Bn(
      e,
      t,
      {
        description: `presence on artifact ${e.url}`,
        keepalive: {
          openFrames: [],
          frame: jsonStringify({ kind: "ping", slug: i }),
          intervalMs: r.keepaliveMs,
          deadlineMs: r.keepaliveDeadlineMs ?? Dt(r.keepaliveMs),
        },
        onFrame: (p) => oi(e, p),
        onOpen: () => {
          if (d) logFeatureOk("artifact_presence", { connected: !0 });
        },
        onEnded: (p, _) => {
          if (_.opened) {
            if (p !== SERVICE_UNAVAILABLE_CLOSE_CODE && p !== REVOKED_CLOSE_CODE)
              logFeatureSad("artifact_presence", `closed_${p ?? "unknown"}`);
          } else {
            let S = parseUpgradeRejectDetail(p);
            logFeatureBad(
              "artifact_presence",
              "connect_failed",
              S === null
                ? void 0
                : { http_status: S.status, cf_mitigated: S.cfMitigated },
            );
          }
          Oe(e, { on: "socket", detail: p, ..._ });
        },
        handshakeDeadlineMs: r.handshakeDeadlineMs,
        activitySinkKey: `presence:${i}`,
        label: "artifactPresence",
      },
      () => Le(e),
    );
  if (o.outcome !== "error") return;
  let l =
    o.error instanceof MonitorWsPreconditionError && !o.error.message.startsWith("could not resolve");
  if (!Le(e)) return;
  if (d && l) {
    (logFeatureBad("artifact_presence", "ws_open_error"), ie(e));
    return;
  }
  (logFeatureSad("artifact_presence", "ws_open_error"),
    (e.state = "closed"),
    Oe(e, { on: "dial_error", deterministic: l }));
}
function Oe(e, t) {
  if (!Le(e)) return;
  let r = Hn(e, _e().timing, t);
  if (r.next === "end") {
    (logFeatureSad(
      "artifact_presence",
      r.reason === "revoked" ? "closed_4403" : "refused_gave_up",
    ),
      ie(e));
    return;
  }
  if (r.stallRunStarted) {
    let i =
      t.on === "boot"
        ? t.status
        : t.on === "socket"
          ? parseUpgradeRejectDetail(t.detail)?.status
          : void 0;
    logFeatureSad("artifact_presence", "stall_run_started", {
      boot: t.on === "boot",
      ...(i !== void 0 && { http_status: i }),
    });
  }
  It(e, r.delayMs, zn);
}
function zn(e) {
  if (!Le(e)) return;
  Yn(e, "reconnect").catch((t) => {
    (logForDebugging(
      `[artifactPresence] reconnect threw slug=${e.slug}: ${t instanceof Error ? t.name : "error"}`,
    ),
      Oe(e, { on: "dial_error", deterministic: !1 }));
  });
}
function ie(e) {
  et(e);
  let t = _e();
  if (t.conns.get(e.slug) === e) t.conns.delete(e.slug);
}
function oi(e, t) {
  if (e.stopped || t.charCodeAt(0) !== 123) return;
  let r;
  try {
    r = jsonParseUntraced(t);
  } catch {
    return;
  }
  let i = Ze().safeParse(r);
  if (!i.success) return;
  let { kind: d, slug: o, actor: l, payload: p } = i.data;
  if (l !== void 0 || (o !== void 0 && o !== e.slug)) return;
  if (Un(e, d, p)) return;
  switch (d) {
    case "join_denied":
      (logFeatureBad("artifact_presence", "join_denied"), ie(e));
      return;
    case "ctrl:comment":
      Kn(e.slug)?.comment();
      return;
    case "ctrl:invalidate": {
      let _ = Mt().safeParse(p);
      if (_.success && (_.data.tag === Pt || _.data.tag === Ft))
        Kn(e.slug)?.ver(_.data.ver, "sync");
      return;
    }
    default:
      return;
  }
}
function Kn(e) {
  let t = getArtifactState().live.supervisors.get(e);
  return t !== void 0 && !t.stopped ? t.wake : void 0;
}
function ai(e, t) {
  (e.declined.delete(t), Xn(e, t));
}
function Xn(e, t) {
  let r = e.conns.get(t);
  if (r !== void 0) ie(r);
}
function ui(e) {
  e.declined.clear();
  for (let t of [...e.conns.values()]) et(t);
  e.conns.clear();
}
function ci(e, t) {
  for (let r of [...e.conns.values()]) {
    if (sameOwnerAccount(r.owner, t)) continue;
    if ((et(r), e.conns.get(r.slug) === r)) e.conns.delete(r.slug);
  }
}
function isSlugNamedByStrictHumanTurn(e, t) {
  return Vt(e, t) >= 0;
}
function Vt(e, t) {
  return Ut(e, t).at(-1) ?? -1;
}
function Ut(e, t) {
  let r = t.toLowerCase(),
    i = [];
  for (let d = 0; d < e.length; d++) {
    let o = e[d];
    try {
      let l = !isStrictHumanTurn(o)
        ? null
        : o.type === "user"
          ? Zn(o.message?.content)
          : o.type === "attachment" && o.attachment.type === "queued_command"
            ? Zn(o.attachment.prompt)
            : null;
      if (l !== null && bi(l, r)) i.push(d);
    } catch {}
  }
  return i;
}
var Qn = /^https?:\/\//i,
  di = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i,
  er =
    "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000",
  li = new RegExp(`[${er}]+`),
  fi = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/,
  tr = "(<[{'\"`*_~",
  pi = new RegExp(`^[${tr}]+`),
  mi = /[.,;:!?)\]}'">`*_~\u200b]+$/,
  hi = new RegExp(
    `(?<=^|[${er}])[${tr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`,
    "g",
  ),
  gi = "artifact-files";
function bi(e, t) {
  for (let r of e.matchAll(hi)) if (Jn(r[1], t)) return !0;
  return e.split(li).some((r) => Jn(r.replace(pi, ""), t));
}
function Jn(e, t) {
  let r = e.replace(mi, "");
  if (fi.test(r)) return !1;
  if (Qn.test(r) || di.test(r)) {
    let d = Qn.test(r) ? r : `https://${r}`;
    return parseArtifactUrlAnyCase(d)?.slug === t;
  }
  let i = r.toLowerCase().split(/[/\\]/);
  if (i.length > 1) return i.some((d, o) => d === t && i[o - 1] === gi);
  return i[0] === t || slugToUuid(r) === t;
}
function Zn(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let t = [];
  for (let r of e)
    if (
      typeof r === "object" &&
      r !== null &&
      "type" in r &&
      r.type === "text" &&
      "text" in r &&
      typeof r.text === "string"
    )
      t.push(r.text);
  return t.length > 0
    ? t.join(`
`)
    : null;
}
var Si =
    "Could not register a durable wake subscription; publishing and reading still work.",
  _i = {
    invalid_slug:
      "That address is not an artifact this session can name, so nothing was registered; retrying with the same address will not help.",
    trigger_limit:
      "This session already holds the maximum number of webhook triggers (10); unwatch an artifact to free one.",
    no_originator:
      "This session currently has no linked human originator, so it cannot hold wake subscriptions. Common causes: the session was started by a background event, or the connection between the chat platform and the Claude account needs re-linking. After the user addresses that (re-link and/or restart the session) \u2014 or if the server-side policy changes \u2014 a deliberate watch retry will re-check; automatic retries while the session stays originator-less are answered locally without contacting the server.",
    client_policy:
      "This environment's network policy disables artifact subscriptions; no request was sent, and retrying will not help while the policy is active.",
    no_auth:
      "No credential is available for the artifact service, so the subscription could not be registered; retrying will not help until the session has credentials.",
    session_not_found:
      "The server no longer has an active record of this remote session, so it cannot hold a wake subscription; retrying in this session will not help.",
    unavailable_in_deployment:
      "Wake subscriptions are not provisioned in this deployment; retrying will not help.",
    no_wake_minter:
      "No wake-webhook minter is reachable (the session's own MCP mount was not found or did not connect), so the subscription could not be registered.",
    tool_not_offered:
      "The server does not offer wake subscriptions to this session, so none was registered; retrying will not help while that holds.",
    org_not_enabled:
      "Wake subscriptions are not enabled for the user's organization, so none was registered; retrying will not help while that holds.",
    subscribe_forbidden:
      "The artifact service refuses wake subscriptions from this session, for any artifact until the session ends, so retrying will not help. Later publishes in this session are not armed; only an explicit watch re-checks with the service.",
    aborted:
      "The request was cancelled before the registration finished (the turn was interrupted); nothing is wrong with the artifact or the session.",
    watch_trigger_release_failed:
      "The request was cancelled before the registration finished, and the webhook trigger minted for it could not be released \u2014 it counts against this session until the session ends.",
  },
  wi = new Map(Object.entries(_i));
function formatArmFailureReason(e, t) {
  let r = wi.get(e) ?? Si;
  if (t === void 0) return r;
  let i = /[.!?]['")\]]*$/.test(t) ? "" : ".";
  return `${r} Server said: "${t}"${i}`;
}
function describeHttpFailureOrigin(e) {
  if (e.status === void 0) return;
  if (e.relayed)
    return e.fromGateway
      ? `HTTP ${e.status} via the session gateway, not attributed to the artifact service`
      : `HTTP ${e.status} from the artifact service via the session gateway`;
  if (e.gatewayDeclined === void 0)
    return `HTTP ${e.status} from the artifact service`;
  return e.gatewayDeclined === 0
    ? `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer`
    : `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}
var vi = new Set([
  "no_originator",
  "client_policy",
  "no_auth",
  "session_not_found",
  "unavailable_in_deployment",
  "tool_not_offered",
  "org_not_enabled",
  "subscribe_forbidden",
  "invalid_slug",
]);
function getArmFailureAdvice(e) {
  return vi.has(e) ? null : DEFAULT_WATCH_ADVICE;
}
function markArmInFlight(e) {
  let { armsInFlight: t } = getArtifactState().durable;
  t.set(e, (t.get(e) ?? 0) + 1);
}
function settleArmAttempt(e, t) {
  let r = getArtifactState().durable,
    i = (r.armsInFlight.get(e) ?? 1) - 1;
  if (i > 0) r.armsInFlight.set(e, i);
  else r.armsInFlight.delete(e);
  if (t?.outcome === "subscribed" || t?.outcome === "already_watching")
    return (forgetArmFailuresForSlug(e), { settled: "registered" });
  let d = t === void 0 ? "arm_threw" : t.reason;
  if (d === "stop_latched" || r.stopLatches.isStopped(e))
    return { settled: "stopped" };
  let o = r.armOutcomes.get(e),
    l = t?.outcome === "failed" && t.latched && o?.reason === d ? o : void 0,
    p = (t?.outcome === "failed" ? describeHttpFailureOrigin(t) : void 0) ?? l?.detail,
    _ =
      (t?.outcome === "failed" ? t.serverMessage : void 0) ?? l?.serverMessage,
    S = {
      reason: d,
      ...(p !== void 0 && { detail: p }),
      ...(_ !== void 0 && { serverMessage: _ }),
    };
  return (
    setBoundedMapEntry(r.armOutcomes, e, { ...S, at: Date.now() }, MAX_ARM_OUTCOMES),
    i > 0 ? { settled: "pending", ...S } : { settled: "unregistered", ...S }
  );
}
function clearArmFailuresByReason(e) {
  let t = getArtifactState().durable;
  for (let [r, i] of t.armOutcomes) if (i.reason === e) t.armOutcomes.delete(r);
  for (let r of t.announcedArmFailures)
    if (r.endsWith(`:${e}`)) t.announcedArmFailures.delete(r);
}
function forgetArmFailuresForSlug(e) {
  let t = getArtifactState().durable;
  (t.armOutcomes.delete(e), deletePrefixedSetEntries(t.announcedArmFailures, e));
}
function rr(e, t) {
  return addBoundedSetEntry(getArtifactState().durable.announcedArmFailures, `${e}:${t}`, MAX_ANNOUNCED_ARM_FAILURES);
}
function durableWakeArmRows(e) {
  let t = getArtifactState().durable,
    r = [],
    i = new Set();
  for (let d of t.armsInFlight.keys()) {
    if (!nr(t, d, e)) continue;
    (r.push({ slug: d, state: "arming" }), i.add(d));
  }
  for (let [d, o] of t.armOutcomes) {
    if (!nr(t, d, e) || i.has(d)) continue;
    r.push({
      slug: d,
      state: "failed",
      reason: o.reason,
      ...(o.detail !== void 0 && { detail: o.detail }),
      ...(o.serverMessage !== void 0 && { serverMessage: o.serverMessage }),
      at: o.at,
    });
  }
  return r;
}
function nr(e, t, r) {
  return (
    (r === void 0 || t === r) && !e.rows.has(t) && !e.stopLatches.isStopped(t)
  );
}
var Ai = "frame-live.v1",
  ar = { enqueuePendingNotification: (e) => enqueuePendingNotification(e) },
  Ri = 25000,
  ki = 90000,
  Ht =
    "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, \u2715 the watch in the tasks list or use the kill-all-agents gesture.",
  yi =
    "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";
function Ti(e, t, r) {
  let i = e.supervisors.get(t);
  if (i !== void 0) i.explicit = !1;
  for (let d of Object.values(r.all()))
    if (
      isMonitorWsTask(d) &&
      d.status === "running" &&
      d.frameLive?.slug === t &&
      d.frameLive.explicit
    )
      r.update(d.id, (o) =>
        isMonitorWsTask(o) && o.frameLive !== void 0
          ? {
              ...o,
              description: Kt(
                artifactViewerUrlFor({ slug: t, env: getArtifactEnvironment() }),
                !1,
                o.frameLive.armedVia,
              ),
              frameLive: { ...o.frameLive, explicit: !1 },
            }
          : o,
      );
}
function Ei(e, t) {
  let r = getArtifactState().live,
    i = r.supervisors.get(e)?.context.storageV5 ?? getArtifactCommentMonitorStorage();
  setAutoReactLedgerStorage(i);
  let d;
  if (t.taskStop) {
    if ((getArtifactState().durable.stopLatches.confirmStop(e), !isSlugYielded(e)))
      (stopArtifactCommentMonitor(e, { storageV5: i }),
        import("./chunk-54kz7amv.js").then((l) =>
          l.notifyTakenOverSlugStopped(e),
        ));
    let { wasWatching: o } = ur({
      slug: e,
      taskRegistry: t.taskRegistry,
      announce: !t.running,
      killRow: (l) => {
        if (l.id !== t.taskId) killMonitorTask(l.id, t.taskRegistry, { userStop: !0 });
      },
    });
    d = o;
  } else {
    if (!xi(r, e, t)) return !1;
    (te(r, e), (d = !0));
  }
  if (t.modelOrigin !== !0) removeWatchArtifactArg(e, i);
  return d;
}
function ur(e) {
  let { slug: t, taskRegistry: r } = e,
    i = getArtifactState().live,
    d = i.supervisors.get(t),
    o = (d !== void 0 && !d.stopped) || i.inFlightSubscribes.has(t);
  if (d?.autoReactWiring !== void 0) tearDownAutoReactForSlug(t);
  let l = Object.values(r.all()).filter(
    (p) => isMonitorWsTask(p) && p.status === "running" && p.frameLive?.slug === t,
  );
  if (
    e.announce &&
    d !== void 0 &&
    !d.stopped &&
    l.length === 0 &&
    (d.taskId !== void 0 || d.timer !== void 0)
  )
    it(i, d, "watching this artifact was stopped just now");
  else te(i, t);
  for (let p of l) ((o = !0), e.killRow(p));
  if (o && isSlugSwept(t)) pauseAutoRepliesForSlug(t);
  return (resetAutoReactLedgerForSlug(t), { wasWatching: o });
}
function xi(e, t, r) {
  let i = e.supervisors.get(t);
  if (i === void 0 || i.stopped) return !1;
  if (r.running) return i.taskId === void 0 || i.taskId === r.taskId;
  if (i.taskId === void 0 || i.taskId !== r.taskId) return !1;
  return i.timer !== void 0 || e.inFlightSubscribes.has(t);
}
function te(e, t) {
  let r = e.supervisors.get(t);
  if (r) (stopArtifactSupervisor(r), e.supervisors.delete(t));
  (disposePresenceSlug(t), Ie(t)?.sourceEnded());
}
function we(e, t, r) {
  if (r) return { ...t, humanTurnSnapshot: !0 };
  if (e === void 0) return t;
  let { humanTurnSnapshot: i, ...d } = t;
  return {
    ...d,
    context: e.context,
    publishTranscript: e.publishTranscript,
    ...(e.humanTurnSnapshot && { humanTurnSnapshot: !0 }),
  };
}
function ir(e, t, r) {
  let i = e.supervisors.get(t)?.autoReactWiring;
  return (
    i?.humanTurnSnapshot === !0 &&
    (r?.humanTurnSnapshot !== !0 || i.context !== r.context)
  );
}
function sr(e, t) {
  let r = e.supervisors.get(t.slug);
  if (r && !r.stopped) {
    if (t.carriedVer !== void 0) r.carriedVer = t.carriedVer;
    let d = r.armedVia === "mcp_write";
    if (!t.machineArm) {
      if (((r.lastActivityAt = Date.now()), r.timer !== void 0))
        (clearTimeout(r.timer), (r.timer = void 0));
      if (
        ((r.stalledSince = void 0),
        (r.lastStalledAt = void 0),
        (r.stallOutAfterMs = void 0),
        r.taskId === void 0 &&
          !e.inFlightSubscribes.has(t.slug) &&
          frameLiveWatchRows(t.context, t.slug).length === 0)
      )
        ((r.watchedSince = Date.now()), (r.armedVia = t.armedVia), initCommentCensus(t.slug));
      else if (t.armedVia === "publish") r.armedVia = "publish";
      else if (r.armedVia === "mcp_write") r.armedVia = t.armedVia;
      if (d && r.armedVia !== "mcp_write") refreshSummonArmForSlug(e, t.slug);
    }
    if (((r.explicit = r.explicit || t.explicit), t.autoReactWiring !== void 0))
      r.autoReactWiring = we(
        r.autoReactWiring,
        t.autoReactWiring,
        t.humanTurnWiring === !0,
      );
    return r;
  }
  let i = {
    slug: t.slug,
    url: t.url,
    getKnownVer: t.getKnownVer,
    ownPublishes: t.ownPublishes,
    context: t.context,
    abort: new AbortController(),
    explicit: t.explicit,
    stopped: !1,
    watchedSince: Date.now(),
    lastActivityAt: Date.now(),
    armedVia: t.armedVia,
    consecutiveFailures: 0,
    ...(t.carriedVer !== void 0 && { carriedVer: t.carriedVer }),
    ...(t.autoReactWiring !== void 0 && {
      autoReactWiring: we(void 0, t.autoReactWiring, t.humanTurnWiring === !0),
    }),
  };
  return (e.supervisors.set(t.slug, i), initCommentCensus(t.slug, i.watchedSince), i);
}
function Ci(e, t, r, i) {
  if (e.supervisors.get(r) === t) t.taskId = i;
}
function Wi(e, t) {
  let { rewatchTiming: r } = e;
  if (r.idleTtlMs <= 0) return !1;
  let i = t.autoReactWiring !== void 0 && isArtifactAutoReactEnabled() && (!isSlugStopped(t.slug) || isSlugSwept(t.slug));
  return (
    !t.explicit &&
    !i &&
    !cr(e, t) &&
    Date.now() - t.lastActivityAt >= r.idleTtlMs
  );
}
function cr(e, t) {
  return t.slug === e.mostRecentPublishSlug && t.armedVia !== "mcp_write";
}
function labelledArmedVia(e, t) {
  return e ? "watch" : t === "watch" ? "watch_stopped" : t;
}
function parseArmedVia(e) {
  return ARMED_VIA_VALUES.find((t) => t === e) ?? "publish";
}
function armedViaWording(e) {
  switch (e) {
    case "publish":
      return {
        task: "auto-armed on publish",
        row: "armed by a publish",
        idle: "automatically when you published this artifact",
      };
    case "attach":
      return {
        task: "attached via /artifacts",
        row: "armed when the user attached it from /artifacts",
        idle: "automatically when you attached this artifact from /artifacts",
      };
    case "watch":
      return {
        task: "watch requested",
        row: "requested by you",
        idle: "when you asked to watch this artifact",
      };
    case "resume":
      return {
        task: "resume requested",
        row: "re-armed when the user asked to resume replies",
        idle: "when you asked to resume its comment auto-replies",
      };
    case "session_resume":
      return {
        task: "re-armed on session resume",
        row: "re-armed when this session was resumed",
        idle: "automatically when this session was resumed",
      };
    case "mcp_write":
      return {
        task: "presence while editing via MCP",
        row: "armed when this session edited the page through an MCP tool",
        idle: "automatically when this session edited this page through an MCP tool",
      };
    case "watch_stopped":
      return {
        task: "watch requested; auto-replies since stopped",
        row: "requested by you; its auto-replies since stopped by the user",
        idle: "when you asked to watch this artifact",
      };
  }
}
function Li(e, t) {
  let r = armedViaWording(t.armedVia).idle,
    i =
      t.armedVia === "watch"
        ? "(your watch request was later stopped; idle auto-armed watches are retired)"
        : "(idle auto-armed watches are retired)";
  return `it was armed ${r} and has seen no activity for over ${formatDuration(e.rewatchTiming.idleTtlMs, { mostSignificantOnly: !0 })} ${i}`;
}
function Oi(e, t, r) {
  return e === HANDSHAKE_TIMEOUT_DETAIL || t >= r.stallThresholdMs;
}
function Ii(e) {
  let t = parseUpgradeRejectDetail(e);
  return t !== null && (isTransientHttpStatus(t.status) || t.cfMitigated);
}
function Mi(e) {
  return (
    Math.max(e.stallMaxMs, e.longStallMaxMs) +
    2 * FRAME_REQUEST_TIMEOUT_MS +
    e.handshakeDeadlineMs +
    60000
  );
}
function jt(e, t, r) {
  let { uptimeMs: i, resumeNeverOpened: d = !1, stalled: o = !1 } = r,
    { rewatchTiming: l } = e,
    p = e.supervisors.get(t);
  if (!p || p.stopped) return;
  if (getArtifactState().durable.stopLatches.isStopped(t)) {
    if ((logFeatureSad("artifact_live_subscribe", "stop_latched"), d))
      he(
        e,
        p,
        "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed",
        "could not connect",
        {
          advice:
            "tell the user, and call resume_replies again only if they still want auto-replies resumed",
        },
      );
    else it(e, p);
    return;
  }
  if (Wi(e, p)) {
    (logFeatureOk("artifact_live_subscribe", { idle_retired: !0 }),
      he(e, p, Li(e, p), "idle"));
    return;
  }
  let _ = !1,
    S = !1;
  if (o) {
    let R = Date.now();
    if (
      p.stalledSince === void 0 ||
      p.lastStalledAt === void 0 ||
      p.stallOutAfterMs === void 0 ||
      R - p.lastStalledAt > Mi(l)
    ) {
      ((p.stalledSince = R),
        (p.stallOutAfterMs =
          l.maxStallMs + Math.round(Math.random() * l.stallOutJitterMs)));
      let A = r.httpStatus ?? parseUpgradeRejectDetail(r.closeCode)?.status;
      logFeatureSad("artifact_live_subscribe", "stall_run_started", {
        boot: r.closeCode === void 0,
        ...(A !== void 0 && { http_status: A }),
      });
    } else S = !0;
    ((p.lastStalledAt = R), (_ = R - p.stalledSince >= p.stallOutAfterMs));
  } else if (
    ((p.stalledSince = void 0),
    (p.lastStalledAt = void 0),
    (p.stallOutAfterMs = void 0),
    i >= l.minUptimeMs)
  )
    p.consecutiveFailures = 0;
  else if (r.reuseRefused !== !0) p.consecutiveFailures++;
  if (p.consecutiveFailures > l.maxConsecutiveFailures || _) {
    if (_) logFeatureSad("artifact_live_subscribe", "rewatch_gave_up", { stalled: !0 });
    else logFeatureSad("artifact_live_subscribe", "rewatch_gave_up");
    he(
      e,
      p,
      "the live connection kept failing and reconnecting has stopped",
      kr,
      { advice: st, passive: !0 },
    );
    return;
  }
  let v = isFrameLiveTokenLeaseEnabled(),
    E =
      o &&
      S &&
      (parseUpgradeRejectDetail(r.closeCode)?.cfMitigated === !0 ||
        !v ||
        p.lease === void 0 ||
        !isLeaseValidWithMargin(p.lease, l, getArtifactState().accountEpoch, Date.now() + l.stallMinMs)),
    L =
      i > 0 &&
      i >= l.minUptimeMs &&
      r.closeCode !== void 0 &&
      !(r.expired === !0 && p.transport !== "sync"),
    x = computeReconnectDelay({
      timing: l,
      consecutiveFailures: p.consecutiveFailures,
      leaseMode: v,
      stalled: o,
      longStall: E,
      spread: L,
    });
  if (v && L && r.expired !== !0) p.spreadReconnect = !0;
  if (p.timer !== void 0) clearTimeout(p.timer);
  ((p.timer = setTimeout(dr, x, e, t)),
    p.timer.unref?.(),
    (p.nextRewatchAt = Date.now() + x));
}
function he(
  e,
  t,
  r,
  i,
  { advice: d = "watch it again if you still need that", passive: o = !1 } = {},
) {
  if (e.supervisors.get(t.slug) === t) {
    if ((te(e, t.slug), !getArtifactState().durable.stopLatches.isStopped(t.slug))) {
      if ((vr(e, t.slug, "ended", i), t.autoReactWiring !== void 0))
        import("./chunk-54kz7amv.js").then((_) =>
          _.handBackTakenOverSlug(t.slug),
        );
    }
  } else stopArtifactSupervisor(t);
  let l = t.resumeAnnounce;
  if (l !== void 0) ((t.resumeAnnounce = void 0), l.onGiveUp());
  if (t.armedVia === "mcp_write") return;
  let p = formatArtifactDisplayName(() => t.autoReactWiring?.title, t.url);
  enqueuePendingNotification({
    value: buildTaskNotification({
      taskType: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
      summary: escapeHtmlText(formatWatchStoppedSummary(p, i)),
      body: `
<event>${escapeHtmlText(`Watch on ${t.url} ended \u2014 ${r}. This session will no longer hear when it is republished; ${d}.`)}</event>`,
    }),
    mode: "task-notification",
    ...(o && { passive: !0 }),
    priority: "next",
    origin: {
      kind: "task-notification",
      source: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
      slug: t.slug,
      displayName: p,
      watchEnded: !0,
    },
    agentId: ze(),
  });
}
function it(
  e,
  t,
  r = "watching this artifact was stopped earlier in this session",
) {
  ((t.resumeAnnounce = void 0),
    he(e, t, r, "stopped", {
      advice: "do not watch it again unless the user asks you to",
    }));
}
function J(e, t, r, i, d, { unavailable: o = !1, httpStatus: l } = {}) {
  return (
    Yt(e, t, r, { unavailable: o, httpStatus: l }),
    Zi(e, t, r, i, d),
    {
      outcome: "skipped",
      reason: i,
      ...(o && { unavailable: !0 }),
      ...(o && l !== void 0 && { httpStatus: l }),
    }
  );
}
function Yt(e, t, r, { unavailable: i = !1, httpStatus: d } = {}) {
  if (r) return;
  let o = e.supervisors.get(t);
  if (o !== void 0 && !o.stopped && o.timer === void 0)
    jt(e, t, {
      uptimeMs: 0,
      stalled: i,
      ...(d !== void 0 && { httpStatus: d }),
    });
}
async function dr(e, t) {
  let r = e.supervisors.get(t);
  if (!r || r.stopped) return;
  if (((r.timer = void 0), getArtifactState().durable.stopLatches.isStopped(t))) {
    (logFeatureSad("artifact_live_subscribe", "stop_latched"), it(e, r));
    return;
  }
  if (r.autoReactWiring !== void 0 && isSlugStopped(t) && !isSlugSwept(t)) delete r.autoReactWiring;
  logFeatureOk("artifact_live_subscribe", { rewatch_attempt: !0 });
  let i = await pe(e, {
    slug: r.slug,
    url: r.url,
    getKnownVer: r.getKnownVer,
    ownPublishes: r.ownPublishes,
    context: r.context,
    signal: r.abort.signal,
    machineArm: !0,
    seedKnownVerFromBoot: !0,
    ...(r.carriedVer !== void 0 && { seedSurfacedVer: r.carriedVer }),
    ...(r.autoReactWiring !== void 0 && { autoReactWiring: r.autoReactWiring }),
  });
  if (i.outcome === "skipped" && i.reason === "stop_latched") return;
  if (r.stopped || e.supervisors.get(t) !== r) {
    if (i.outcome === "skipped")
      Yt(e, t, void 0, {
        unavailable: i.unavailable === !0,
        httpStatus: i.httpStatus,
      });
    return;
  }
  if (i.outcome === "skipped")
    if (
      i.reason === "boot_failed" ||
      i.reason === "ws_open_error" ||
      i.reason === "sync_unavailable"
    )
      ((r.lastFailure = i.reason),
        jt(e, t, {
          uptimeMs: 0,
          stalled: i.unavailable === !0,
          ...(i.httpStatus !== void 0 && { httpStatus: i.httpStatus }),
        }));
    else
      (logFeatureSad("artifact_live_subscribe", `rewatch_stopped_${i.reason}`),
        he(e, r, frameLiveSkipReasonPhrase(i.reason) ?? i.reason, Qt[i.reason] ?? Tr, rs(i.reason)));
}
async function Pi(e, t) {
  let r = e.supervisors.get(t),
    i = r?.lease;
  if (!isFrameLiveTokenLeaseEnabled() || r === void 0 || r.stopped || i === void 0 || i.probed) return;
  i.probed = !0;
  let d;
  try {
    d = await fetchArtifactBootResponse({ slug: t, env: getArtifactEnvironment() }, r.abort.signal, {
      agentPeer: rt(t),
      syncLive: rt(t),
      credentials: r.context.credentials,
    });
  } catch {
    return;
  }
  if (e.supervisors.get(t) !== r || r.stopped) return;
  if (d.err === null && deriveLiveSubscriptionTransport(d.data) !== void 0) {
    logFeatureOk("artifact_live_subscribe", { read_refused_boot_ok: !0 });
    return;
  }
  if (d.err !== null && (d.status === 404 || isArtifactOtherOrgError(d))) {
    let p = isArtifactOtherOrgError(d) ? "other_org" : "not_found";
    (logFeatureSad("artifact_live_subscribe", `read_stopped_${p}`),
      he(e, r, frameLiveSkipReasonPhrase(p) ?? p, Qt[p] ?? p, { advice: noRewatchAdvice(p) }));
    for (let _ of Object.values(r.context.taskRegistry.all()))
      if (isMonitorWsTask(_) && _.status === "running" && _.frameLive?.slug === t)
        killMonitorTask(_.id, r.context.taskRegistry, { quiet: !0 });
    return;
  }
  let o = d.err === null ? "tokenless" : (d.status ?? d.errorCode);
  if (
    (logFeatureSad("artifact_live_subscribe", `read_refused_boot_${o}`),
    (o === "tokenless" ||
      (typeof o === "number" && o < 500 && o !== 408 && o !== 429)) &&
      r.lease === i)
  )
    (delete r.lease, delete r.renewable);
}
function lr(e) {
  return normalizeWebSocketUrlScheme(new URL(`/edge-api/frame-live/${e}/ws`, getClaudeAiOrigin()));
}
var Fi = 8;
function Di(e) {
  let {
      slug: t,
      url: r,
      ownPublishes: i,
      getKnownVer: d,
      autoReact: o,
      onSurfaced: l,
      getTitle: p,
    } = e,
    _ = e.surfacedVers ?? [];
  function S(A) {
    if ((_.push(A), _.length > Fi)) _.shift();
  }
  if (e.seedSurfacedVer !== void 0 && !_.includes(e.seedSurfacedVer))
    S(e.seedSurfacedVer);
  let v = createTokenBucket(TOKEN_BUCKET_CAPACITY, TOKEN_BUCKET_REFILL_MS),
    E = !1,
    L = !1;
  function x() {
    let A = getArtifactState().live.supervisors.get(t);
    if (A && !A.stopped && A.armedVia !== "mcp_write")
      A.lastActivityAt = Date.now();
    if ((markCommentCensusDirty(t), o && isArtifactAutoReactEnabled()))
      scheduleArtifactAutoReactWake({
        slug: t,
        url: r,
        env: o.env,
        tool: o.tool,
        context: o.context,
        ...(o.publishTranscript !== void 0 && {
          publishTranscript: o.publishTranscript,
        }),
        ...(o.getWiring !== void 0 && { getWiring: o.getWiring }),
        abort: o.abort,
        notify: o.notify,
        ...(o.getTitle !== void 0 && { getTitle: o.getTitle }),
        ...(o.onReadRefused !== void 0 && { onReadRefused: o.onReadRefused }),
      });
  }
  function R(A, F) {
    if (!A || !VER_SHAPE.test(A) || _.includes(A)) return;
    let U = F === "sync" && { via_sync: !0 };
    if (e.presenceOnly?.()) return;
    if (isOwnPublishedVer(i, t, A)) {
      (logFeatureOk("artifact_live_subscribe", {
        ...(E ? { suppressed_own: !0 } : { suppressed_catch_up: !0 }),
        ...U,
      }),
        (E = !0));
      return;
    }
    if (A === d()) return;
    if (isPublishInFlight(i, t)) {
      logFeatureOk("artifact_live_subscribe", { suppressed_in_flight: !0, ...U });
      return;
    }
    if (!v.tryConsume()) {
      if ((markPriorNoticeSuppressed(t, "artifact-changed"), !L))
        ((L = !0),
          logFeatureSad("artifact_live_subscribe", "ver_rate_suppressed", { ...U }));
      return;
    }
    ((L = !1), S(A));
    try {
      l?.(A);
    } catch {}
    logFeatureOk("artifact_live_subscribe", { notified: !0, ...U });
    let ot = `Artifact ${r} appears to have been republished elsewhere (by another session, or by someone saving from the page itself) \u2014 it is now version ${A}. Your copy is stale; re-read before editing or republishing (${getArtifactReadInstruction()}).`;
    enqueueCoalescedArtifactNotice({
      queue: ar,
      slug: t,
      family: "artifact-changed",
      artifactName: formatArtifactDisplayName(p, r),
      detail: ot,
      mergeDetails: "latest",
    });
  }
  return { comment: x, ver: R };
}
function Vi(e) {
  return (t) => {
    if (!t.startsWith("{")) return null;
    let r;
    try {
      r = jsonParseUntraced(t);
    } catch {
      return null;
    }
    if (r.kind === "comment") return (e.comment(), null);
    if (r.kind === "summon") return null;
    if (typeof r.ver === "string") e.ver(r.ver, "live");
    return null;
  };
}
var Ni = /^\d{1,15}$/;
function Ie(e) {
  return getArtifactState().liveDocWatch.headSinks.get(e);
}
function Ui(e, t, r) {
  return (i) => {
    if (i.charCodeAt(0) !== 123) return null;
    let d;
    try {
      d = jsonParseUntraced(i);
    } catch {
      return null;
    }
    let o = Ze().safeParse(d);
    if (!o.success) return null;
    let { kind: l, actor: p, payload: _ } = o.data;
    if (p !== void 0 || (o.data.slug !== void 0 && o.data.slug !== t))
      return null;
    switch (l) {
      case "ctrl:comment":
        return (e.comment(), null);
      case "ctrl:invalidate": {
        let S = Mt().safeParse(_);
        if (!S.success) return null;
        if (S.data.tag === Pt || S.data.tag === Ft) e.ver(S.data.ver, "sync");
        else if (S.data.tag === qn && Ni.test(S.data.ver))
          Ie(t)?.seq(Number(S.data.ver));
        return null;
      }
      case "ctrl:token_refresh": {
        let S = Ct().safeParse(_);
        if (S.success && Se(S.data.cap))
          r.onTokenRefresh(S.data.cap, S.data.exp);
        return null;
      }
      case "ctrl:token_refresh_declined": {
        let S = Wt().safeParse(_);
        if (S.success && S.data.reason === xt) r.onExpiryAnnounced();
        return null;
      }
      default:
        return null;
    }
  };
}
function pr(e, t, r, i, d, o) {
  if (!o(e, r)) return "dead";
  return i &&
    (isSlugStopped(t)
      ? d && (e.autoReactArmed !== !0 || !isSlugSwept(t) || isSlugSweptOrYielded(t))
      : e.autoReactArmed !== !0)
    ? "replace"
    : "keep";
}
function $i(e, t) {
  return isMonitorSocketOpen(e.id) && isMonitorTaskLeaseLive(e, t);
}
function Gi(e, t, r, i) {
  let d = Date.now(),
    o = null;
  for (let l of Object.values(e.taskRegistry.all())) {
    if (!isMonitorWsTask(l) || l.status !== "running" || l.frameLive?.slug !== t) continue;
    let p = pr(l, t, d, r, i, isMonitorTaskLeaseLive);
    if (p !== "dead") {
      if (p === "replace") {
        killMonitorTask(l.id, e.taskRegistry, { quiet: !0 });
        continue;
      }
      o = l.id;
      continue;
    }
    killMonitorTask(l.id, e.taskRegistry, { quiet: !0, connectionLost: !0 });
  }
  return o;
}
function mr(e, t) {
  return Object.values(e.all()).some(
    (r) => isMonitorWsTask(r) && r.status === "running" && r.frameLive?.slug === t,
  );
}
function Hi(e) {
  return isAutoReactArmedTask(e, isArtifactAutoReactEnabled, { includeStopLatched: !0 });
}
function isClaimableAutoReactSubscription(e) {
  return isAutoReactArmedTask(e, isArtifactAutoReactEnabled);
}
function killAutoReactSubscriptions(e, t) {
  (setAutoReactLedgerStorage(t?.storageV5), resetWakeState(), bumpScanGeneration());
  let r = getArtifactState().live,
    i = t?.durable !== !1,
    d = 0,
    o = new Set();
  for (let l of Object.values(e.all()))
    if (Hi(l)) {
      let p =
        l.autoReactSlug !== void 0 &&
        isSlugStopped(l.autoReactSlug) &&
        (!isSlugSwept(l.autoReactSlug) || isSlugYielded(l.autoReactSlug));
      if (i) {
        if (
          (killMonitorTask(l.id, e, { quiet: !0, userStop: !0 }), l.autoReactSlug !== void 0)
        )
          (resetAutoReactStateForSlug(l.autoReactSlug), o.add(l.autoReactSlug));
      } else if (l.autoReactSlug !== void 0) o.add(l.autoReactSlug);
      if (!p && !(l.autoReactSlug !== void 0 && !i && isSlugStopped(l.autoReactSlug))) {
        if ((d++, !i && l.autoReactSlug !== void 0))
          (stopSlugAndSweep(l.autoReactSlug), refreshSummonArmForSlug(r, l.autoReactSlug));
      }
    }
  for (let l of r.supervisors.values()) {
    if (l.autoReactWiring === void 0) continue;
    if (i) delete l.autoReactWiring;
    if (i && isArtifactAutoReactEnabled() && (!isSlugStopped(l.slug) || o.has(l.slug)))
      if (mr(e, l.slug) || r.inFlightSubscribes.has(l.slug)) Ti(r, l.slug, e);
      else (te(r, l.slug), removeWatchArtifactArg(l.slug, l.context.storageV5));
    if (!o.has(l.slug) && isArtifactAutoReactEnabled() && !isSlugStopped(l.slug))
      if ((o.add(l.slug), d++, i)) (resetAutoReactStateForSlug(l.slug), stopSlug(l.slug));
      else stopSlugAndSweep(l.slug);
  }
  if (i) disarmArtifactAutoReact({ storageV5: t?.storageV5 });
  else if (d > 0) scheduleAutoReactLedgerWrite({ flush: !0, storageV5: t?.storageV5 });
  return d;
}
function zt(e, t, r, i) {
  if (!isSlugSwept(t) || isSlugSweptOrYielded(t) || !isArtifactAutoReactEnabled()) return null;
  let d = hr(e, t);
  if (d === void 0) return null;
  i?.();
  let { live: o, wakes: l } = getArtifactState();
  (__t(t), l.liftedAtScanGeneration.set(t, l.scanGeneration), refreshSummonArmForSlug(o, t));
  let p = getWakeState(t).lastWakeArgs;
  if (!isMonitorSocketOpen(d.id) || p === null) return "cleared";
  return (
    r?.(p),
    scheduleArtifactAutoReactWake({
      ...p,
      seed: !1,
      confirm: void 0,
      confirmBase: void 0,
      confirmAfter: void 0,
      reentry: void 0,
      idlePass: void 0,
      suppressSummonStatus: void 0,
    }),
    "lifted"
  );
}
function hr(e, t) {
  return Object.values(e.all()).find(
    (r) =>
      isMonitorWsTask(r) &&
      r.status === "running" &&
      r.autoReactArmed === !0 &&
      r.autoReactSlug === t &&
      isMonitorTaskLeaseLive(r),
  );
}
function Bi(e) {
  let { wakes: t } = getArtifactState();
  t.humanTurnAtScanGeneration = t.scanGeneration;
  let r = 0;
  for (let i of [...t.sweptSlugs]) if (zt(e, i) !== null) r++;
  if (r > 0) logFeatureOk("artifact_live_subscribe", { unpaused_on_turn: r });
  return r;
}
function hasStoppableAutoReactSupervision() {
  return isArtifactAutoReactEnabled() && hasLiveAutoReactSupervision();
}
function frameLiveWatchRows(e, t) {
  let r = [],
    i,
    d = () => (i ??= isArtifactAutoReactEnabled()),
    o = getArtifactState(),
    l = o.autoReact.userDisarmed;
  for (let p of Object.values(e.taskRegistry.all())) {
    if (
      !isMonitorWsTask(p) ||
      p.status !== "running" ||
      p.frameLive === void 0 ||
      (t !== void 0 && p.frameLive.slug !== t)
    )
      continue;
    let _ = o.live.supervisors.get(p.frameLive.slug);
    r.push({
      slug: p.frameLive.slug,
      taskId: p.id,
      since: p.frameLive.watchedSince,
      explicit: _?.explicit ?? p.frameLive.explicit,
      connected: isMonitorTaskLeaseLive(p),
      tokenExpiresAt:
        _?.lease?.expMs ??
        p.frameLive.armedAt + (_?.transport === "sync" ? SYNC_TOKEN_LEASE_MS : LIVE_TOKEN_LEASE_MS),
      armedVia: _?.armedVia ?? p.frameLive.armedVia,
      autoReply:
        p.autoReactArmed !== !0
          ? isSlugStopLatched(p.frameLive.slug)
            ? l
              ? "disarmed"
              : d()
                ? "stopped"
                : "none"
            : "none"
          : l
            ? "disarmed"
            : !d()
              ? "none"
              : p.autoReactSlug !== void 0 && isSlugStopLatched(p.autoReactSlug)
                ? isSlugSwept(p.autoReactSlug)
                  ? isSlugYielded(p.autoReactSlug)
                    ? "yielded"
                    : "paused"
                  : "stopped"
                : Ki(p.frameLive.slug),
    });
  }
  return r.sort((p, _) => p.since - _.since);
}
function Ki(e) {
  let t = getArtifactState().autoReact.artifacts.get(e),
    r = t?.lastProbeDeniedBy ?? null;
  if (r !== null) return r === "denied_by_auto_mode" ? "declined" : "denied";
  return t?.lastReplyDeclinedByAutoMode === !0 ? "declined" : "armed";
}
function frameLiveStoppedRows(e, t) {
  let { live: r, autoReact: i, wakes: d } = getArtifactState(),
    o = [],
    l,
    p = () => (l ??= isArtifactAutoReactEnabled());
  for (let _ of d.stoppedSlugs) {
    if (t !== void 0 && _ !== t) continue;
    if (
      mr(e.taskRegistry, _) ||
      r.inFlightSubscribes.has(_) ||
      (!i.userDisarmed && !p())
    )
      continue;
    let S = r.supervisors.get(_),
      v = S !== void 0 && !S.stopped ? S : void 0;
    o.push({
      slug: _,
      ...(v !== void 0 && {
        since: v.watchedSince,
        explicit: v.explicit,
        armedVia: v.armedVia,
      }),
      stopKind: isSlugSwept(_) ? (isSlugYielded(_) ? "yielded" : "interrupt") : "user",
      autoReply: i.userDisarmed ? "disarmed" : "stopped",
    });
  }
  return o.sort(
    (_, S) =>
      (_.since ?? Number.POSITIVE_INFINITY) -
      (S.since ?? Number.POSITIVE_INFINITY),
  );
}
function nt(e, t) {
  let { supervisors: r } = e,
    i = frameLiveWatchRows(t).sort((o, l) => {
      let p = r.get(o.slug),
        _ = r.get(l.slug),
        S = (R) =>
          R === void 0 || R.stopped ? 0 : R.armedVia === "mcp_write" ? 1 : 2,
        v = S(p),
        E = S(_);
      if (v !== E) return v - E;
      let L = p && !p.stopped ? p.lastActivityAt : 0,
        x = _ && !_.stopped ? _.lastActivityAt : 0;
      return L - x || o.since - l.since;
    }),
    d = [];
  for (let o of i) {
    let l = r.get(o.slug),
      p = l !== void 0 && !l.stopped,
      _ = t.taskRegistry.all()[o.taskId];
    if (p ? Bt(e, o.slug) : o.explicit || isClaimableAutoReactSubscription(_)) continue;
    d.push(o);
  }
  return d;
}
function gr(e, t, r, i) {
  let d = e.supervisors.get(t.slug);
  if ((killMonitorTask(t.taskId, r.taskRegistry, { quiet: !0 }), d !== void 0 && !d.stopped))
    he(
      e,
      d,
      i?.why ??
        `this session reached its limit of ${MAX_ARTIFACT_WATCHES} artifact watches and made room to watch a newer one`,
      i?.shortReason ?? "made room for a newer watch",
      i !== void 0 ? { advice: st, passive: !0 } : void 0,
    );
  else te(e, t.slug);
  logFeatureOk("artifact_live_subscribe", { evicted_least_active: !0 });
}
function Bt(e, t) {
  let r = e.supervisors.get(t);
  if (r === void 0 || r.stopped) return !1;
  return (
    r.explicit ||
    (r.autoReactWiring !== void 0 && isArtifactAutoReactEnabled() && (!isSlugStopped(t) || isSlugSwept(t))) ||
    cr(e, r)
  );
}
function qi(e, t) {
  let r = nt(e, t);
  if (r.length === 0) return !1;
  return (
    gr(e, r[0], t, {
      why: `this session reached its limit of ${MAX_ARTIFACT_WATCHES} artifact watches and made room for a protected watch to reconnect`,
      shortReason: Xt,
    }),
    !0
  );
}
function teardownFrameLiveForProcessHandoff() {
  let e = getArtifactState().live;
  ((e.handoffGeneration += 1),
    e.bootingWiredArms.clear(),
    fae(stripWatchArtifactFlags(_B())),
    scheduleAutoReactLedgerWrite({ flush: !0 }),
    clearAutoReactLedger(),
    resetWakeState(),
    bumpScanGeneration());
  for (let t of [...e.supervisors.keys()]) te(e, t);
  (e.armOutcomes.clear(), e.announcedArmFailures.clear(), closeAllMonitorSockets());
}
function ji(e) {
  let t = getArtifactState().live;
  ((t.handoffGeneration += 1), resetWakeState(), bumpScanGeneration());
  let r = 0;
  for (let o of [...t.supervisors.values()]) {
    if (!o.stopped) r++;
    if (o.autoReactWiring !== void 0) {
      let { slug: l } = o;
      import("./chunk-54kz7amv.js").then((p) => p.handBackTakenOverSlug(l));
    }
    (delete o.autoReactWiring, te(t, o.slug));
    for (let l of Object.values(o.context.taskRegistry.all())) {
      if (!isMonitorWsTask(l) || l.status !== "running" || l.frameLive?.slug !== o.slug)
        continue;
      killMonitorTask(l.id, o.context.taskRegistry, { quiet: !0 });
    }
  }
  if ((t.armOutcomes.clear(), t.announcedArmFailures.clear(), r === 0))
    return r;
  let i = `${r} artifact ${r === 1 ? "watch" : "watches"}`,
    d =
      e === "signed_out"
        ? "Those watches were opened as the account that signed out: this session no longer hears when those artifacts are republished or commented on, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks."
        : "Those watches were opened as the previous account: this session no longer hears when those artifacts are republished or commented on, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
  return (
    enqueuePendingNotification({
      value: buildTaskNotification({
        taskType: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
        summary: escapeHtmlText(
          `Stopped watching ${i} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`,
        ),
        body: `
<event>${escapeHtmlText(d)}</event>`,
      }),
      mode: "task-notification",
      passive: !0,
      priority: "next",
      origin: { kind: "task-notification", source: ARTIFACT_WATCH_LIFECYCLE_ORIGIN },
      agentId: ze(),
    }),
    r
  );
}
function unwatchFrameLive(e, t, r) {
  let { wasWatching: i } = Sr(e, t);
  if ((getArtifactState().live.nonEditorSlugs.delete(e), r !== void 0)) {
    let d = getArtifactState().live.repliesConsent,
      o = d.outstanding.get(e);
    if (o !== void 0)
      (d.outstanding.delete(e),
        d.declined.set(e, { namingMessages: o.namingMessages }));
    d.approved.delete(e);
  }
  return (logFeatureOk("artifact_live_subscribe", { unwatched: i }), { wasWatching: i });
}
function endFrameLiveWatchOfDeletedArtifact(e, t) {
  removeWatchArtifactArg(e, t.storageV5);
  let { wasWatching: r } = Sr(e, t);
  if (r) logFeatureOk("artifact_live_subscribe", { unwatched: !0, artifact_deleted: !0 });
}
function Sr(e, t) {
  let r = getArtifactState().live;
  (setAutoReactLedgerStorage(t.storageV5), r.armOutcomes.delete(e), qt(r, e), deleteCommentCensusEntry(e));
  let i = r.supervisors.get(e)?.autoReactWiring !== void 0,
    { wasWatching: d } = ur({
      slug: e,
      taskRegistry: t.taskRegistry,
      announce: !1,
      killRow: (o) => {
        let l = o.autoReactArmed === !0;
        if (
          (killMonitorTask(
            o.id,
            t.taskRegistry,
            l ? { quiet: !0, userStop: !0, modelOrigin: !0 } : { quiet: !0 },
          ),
          l && o.autoReactSlug !== void 0)
        )
          resetAutoReactStateForSlug(o.autoReactSlug);
      },
    });
  if (i) resetAutoReactStateForSlug(e);
  return { wasWatching: d };
}
async function watchFrameLive(e) {
  let {
    slug: t,
    url: r,
    publishContext: i,
    getKnownVer: d,
    context: o,
    tool: l,
    commentVerbsInSchema: p,
  } = e;
  if (!isSocketHoldingPublishContext(i)) return { outcome: "skipped", reason: "publish_context" };
  let _ = getArtifactState().live,
    S = l !== void 0 && p === !0 && isArtifactAutoReactEnabled(),
    v = !S
      ? void 0
      : !isUserDrivenTurn(o.messages)
        ? "unattended_turn"
        : !isSlugNamedByStrictHumanTurn(o.messages, t) || !hasStrictHumanDecider(o.messages)
          ? "not_named_by_user"
          : _.repliesConsent.declined.has(t)
            ? "declined"
            : _.nonEditorSlugs.has(t)
              ? "not_editor"
              : e.repliesApproved !== !0
                ? "not_approved"
                : void 0,
    E = _r({
      tool: S && v === void 0 ? l : void 0,
      commentVerbsInSchema: p,
      context: o,
    }),
    L = E.autoReactWiring !== void 0,
    x = _.supervisors.get(t)?.autoReactWiring?.title,
    R = await pe(_, {
      slug: t,
      url: r,
      getKnownVer: d,
      ownPublishes: o.artifactRegistries.ownPublishes,
      ...ve(o),
      ...E,
      pickUpRecentSummons: L,
      ...(E.autoReactWiring !== void 0 && {
        autoReactWiring: { ...E.autoReactWiring, title: x },
        editorGatedWiring: !0,
      }),
    });
  if (
    L &&
    R.outcome === "armed" &&
    R.degraded === void 0 &&
    !(isSlugStopped(t) && !isSlugSwept(t)) &&
    Me()
  )
    armArtifactCommentMonitor(t, { title: x, storageV5: o.storageV5 });
  if (v !== void 0 && R.outcome === "armed") return { ...R, degraded: v };
  if (v !== void 0 && R.outcome === "already_watching")
    return { ...R, degraded: v };
  return R;
}
function knownNonEditor(e) {
  return getArtifactState().live.nonEditorSlugs.has(e);
}
var REPLIES_CONSENT_WRITER = { kind: "repliesConsentWriter" };
function settleRepliesConsent(e, t, r, i) {
  let d = getArtifactState().live.repliesConsent;
  if (e === void 0) return { declined: d.declined.has(t), approved: !1 };
  let o = d.outstanding.get(t);
  if (r !== void 0 && o !== void 0 && o.toolUseId !== r)
    (d.outstanding.delete(t),
      d.declined.set(t, { namingMessages: o.namingMessages }));
  let l = d.declined.get(t),
    p = Yi(i, t);
  if (l !== void 0 && p !== null && !l.namingMessages.has(p))
    d.declined.delete(t);
  return { declined: d.declined.has(t), approved: d.approved.has(t) };
}
function Yi(e, t) {
  let r = Vt(e, t);
  return r >= 0 ? (e[r]?.uuid ?? null) : null;
}
function noteRepliesConsentAsk(e, t, r, i) {
  if (e === void 0) return;
  getArtifactState().live.repliesConsent.outstanding.set(t, {
    toolUseId: r,
    namingMessages: new Set(
      Ut(i, t).flatMap((d) => (i[d]?.uuid !== void 0 ? [i[d].uuid] : [])),
    ),
  });
}
function takeRepliesConsentAsk(e, t) {
  if (e === void 0 || t === void 0) return;
  let { outstanding: r } = getArtifactState().live.repliesConsent;
  for (let [i, d] of r)
    if (d.toolUseId === t) return (r.delete(i), { slug: i });
  return;
}
function approveTakenRepliesConsent(e, t, r, i) {
  let d = getArtifactState().live.repliesConsent;
  if (e === void 0) return !1;
  let o = t?.slug === r;
  if (o && i) d.approved.add(r);
  return o || d.approved.has(r);
}
function repliesConsentDeclined(e) {
  return getArtifactState().live.repliesConsent.declined.has(e);
}
function zi(e, t) {
  let r = e.mcpWriteSlugs.get(t);
  if (r === void 0) ((r = { arming: !1 }), e.mcpWriteSlugs.set(t, r));
  return r;
}
var Xi = new Set([
    "not_found",
    "no_subscription_token",
    "publish_context",
    "invalid_slug",
    "remote",
  ]),
  Qi = 5000;
function or(e, t) {
  (markPublishInFlight(e, t), setTimeout((r, i) => clearPublishInFlight(r, i), Qi, e, t).unref?.());
}
async function touchFrameLiveForMcpWrite(e, t, r) {
  try {
    if (!ARTIFACT_SLUG_RE.test(e)) return;
    let i = getArtifactState(),
      d = i.live;
    if (d.disposed) return;
    let o = d.supervisors.get(e),
      l = t.artifactRegistries.ownPublishes;
    if (o !== void 0 && !o.stopped) {
      if ((or(l, e), d.inFlightSubscribes.has(e))) return;
      if (
        ((o.lastActivityAt = Date.now()),
        o.timer !== void 0 &&
          o.consecutiveFailures === 0 &&
          o.stalledSince === void 0)
      )
        (clearTimeout(o.timer),
          (o.timer = void 0),
          (o.nextRewatchAt = void 0),
          dr(d, e));
      return;
    }
    let p = zi(d, e);
    if (d.inFlightSubscribes.has(e)) {
      if (p.arming) or(l, e);
      return;
    }
    let { publishContext: _ } = derivePublishContextFrom({
      agentId: t.agentId,
      agentType: t.agentContext?.agentType,
      isNonInteractiveSession: t.options.isNonInteractiveSession,
    });
    if (!isSocketHoldingPublishContext(_)) return;
    if (p.declinedEpoch === i.accountEpoch) return;
    let S = i.accountEpoch;
    ((p.arming = !0),
      await pe(d, {
        slug: e,
        url: artifactViewerUrlFor({ slug: e, env: getArtifactEnvironment() }),
        getKnownVer: r,
        ownPublishes: l,
        ...ve(t),
        seedKnownVerFromBoot: !0,
        mcpWrite: !0,
      }).then(
        (v) => {
          if (((p.arming = !1), v.outcome === "skipped" && Xi.has(v.reason)))
            p.declinedEpoch = S;
        },
        (v) => {
          ((p.arming = !1), logError(v));
        },
      ));
  } catch (i) {
    logError(i);
  }
}
async function resumeFrameLiveAutoReplies(e) {
  let { slug: t, url: r, publishContext: i, getKnownVer: d, context: o } = e;
  if (getArtifactState().autoReact.userDisarmed)
    return { outcome: "refused", reason: "session_disarmed" };
  if (!isSocketHoldingPublishContext(i)) return { outcome: "skipped", reason: "publish_context" };
  if (!e.commentVerbsInSchema)
    return { outcome: "skipped", reason: "comments_off" };
  if (!isSlugStopped(t)) return { outcome: "skipped", reason: "not_stopped" };
  if (!isArtifactAutoReactEnabled()) return { outcome: "skipped", reason: "not_enabled" };
  let l = getArtifactState().live;
  if (o.abortController.signal.aborted)
    return { outcome: "skipped", reason: "cancelled" };
  let p = hr(o.taskRegistry, t)?.id,
    _ = zt(
      o.taskRegistry,
      t,
      (S) => {
        (markAutoReactNoticePending(t),
          S.notify({
            summary: formatAutoRepliesResumedSummary(formatArtifactDisplayName(S.getTitle, r)),
            detail: `Auto-replies on artifact ${r} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop). ${Ht}`,
          }));
      },
      () => {
        let S = l.supervisors.get(t);
        if (S !== void 0 && !S.stopped)
          S.autoReactWiring = we(
            S.autoReactWiring,
            {
              tool: e.tool,
              commentVerbsInSchema: e.commentVerbsInSchema,
              context: o,
              title: S.autoReactWiring?.title,
            },
            !0,
          );
      },
    );
  if (_ !== null && p !== void 0) {
    if (
      (logFeatureOk("artifact_live_subscribe", { resumed_in_place: !0 }), _ === "cleared")
    )
      getArtifactState().wakes.pendingResumeDisclosure.add(t);
    return {
      outcome: "armed",
      taskId: p,
      inPlace: _ === "lifted",
      ...(_ === "cleared" && { connecting: !0 }),
    };
  }
  return pe(l, {
    slug: t,
    url: r,
    getKnownVer: d,
    ownPublishes: o.artifactRegistries.ownPublishes,
    ...ve(o),
    seedKnownVerFromBoot: !0,
    autoReactWiring: {
      tool: e.tool,
      commentVerbsInSchema: e.commentVerbsInSchema,
      context: o,
      title: l.supervisors.get(t)?.autoReactWiring?.title,
    },
    userResumeWiring: !0,
    approvedRelatchGen: e.approvedRelatchGen,
  });
}
function onArmSettled(e, t) {
  let { live: r } = getArtifactState();
  if (!r.inFlightSubscribes.has(e)) {
    t();
    return;
  }
  let i = r.armSettleWaiters.get(e) ?? [];
  (i.push(t), r.armSettleWaiters.set(e, i));
}
function slugRepliesWiredHere(e) {
  let t = getArtifactState().live.supervisors.get(e);
  return t !== void 0 && !t.stopped && t.autoReactWiring !== void 0;
}
async function watchArtifactFromStartup(e) {
  let {
    slug: t,
    url: r,
    getKnownVer: i,
    tool: d,
    commentVerbsInSchema: o,
    context: l,
  } = e;
  if (d !== void 0 && isActingAsBgJob())
    resolveOwnProcStart().catch(() => {
      return;
    });
  let p = getArtifactState(),
    _ = await pe(p.live, {
      slug: t,
      url: r,
      getKnownVer: i,
      ownPublishes: l.artifactRegistries.ownPublishes,
      ...ve(l),
      ..._r({ tool: d, commentVerbsInSchema: o, context: l }),
    });
  if (d !== void 0 && o === !0 && _.outcome !== "skipped" && Me())
    armArtifactCommentMonitor(t, { storageV5: l.storageV5 });
  return _;
}
function _r(e) {
  let { tool: t, commentVerbsInSchema: r, context: i } = e;
  return {
    seedKnownVerFromBoot: !0,
    explicit: !0,
    pickUpRecentSummons: !0,
    ...(t !== void 0 &&
      r === !0 && {
        autoReactWiring: { tool: t, commentVerbsInSchema: r, context: i },
      }),
  };
}
async function maybeSubscribeFrameLive(e) {
  let {
    slug: t,
    url: r,
    version: i,
    publishContext: d,
    getKnownVer: o,
    tool: l,
    commentVerbsInSchema: p,
    title: _,
    context: S,
  } = e;
  if (l !== void 0 && isActingAsBgJob())
    resolveOwnProcStart().catch(() => {
      return;
    });
  let v = S.artifactRegistries.ownPublishes,
    E = getArtifactState().live;
  if (i !== void 0) {
    recordOwnPublish(v, t, i);
    let A = E.supervisors.get(t);
    if (A !== void 0 && !A.stopped) A.lastActivityAt = Date.now();
    if (isSocketHoldingPublishContext(d)) E.mostRecentPublishSlug = t;
  }
  if (!isSocketHoldingPublishContext(d) && !(e.carriedPublishConsent === !0 && d === "bg_session")) {
    if (e.sessionResume !== !0)
      logFeatureSad("artifact_live_subscribe", "publish_context", {
        publish_context: fromEnum(d),
      });
    return { outcome: "skipped", reason: "publish_context" };
  }
  let L = l !== void 0 && p === !0,
    x =
      e.carriedPublishConsent !== !0 &&
      e.resumedPublishConsent !== !0 &&
      e.chainPublish !== !0 &&
      e.adoptedPublish !== !0 &&
      isUserDrivenTurn(S.messages),
    R = await pe(E, {
      slug: t,
      url: r,
      getKnownVer: o,
      ownPublishes: v,
      ...ve(S),
      ...(e.onOpen !== void 0 &&
        e.onGiveUp !== void 0 && { onOpen: e.onOpen, onGiveUp: e.onGiveUp }),
      ...(e.seedKnownVerFromBoot === !0 && { seedKnownVerFromBoot: !0 }),
      ...((e.resumedPublishConsent === !0 ||
        e.carriedPublishConsent === !0) && { requireEditor: !0 }),
      ...(e.sessionResume === !0 && { sessionResume: !0 }),
      ...(e.announceArmlessEnd === !0 && { announceArmlessEnd: !0 }),
      ...(e.resumedPublishConsent === !0 && L && { pickUpRecentSummons: !0 }),
      ...(L && {
        autoReactWiring: {
          tool: l,
          commentVerbsInSchema: p,
          context: S,
          title: _,
          ...(e.publishTranscript !== void 0 && {
            publishTranscript: e.publishTranscript,
          }),
        },
        ...(x && { freshPublishWiring: !0 }),
      }),
    });
  if ((i !== void 0 || e.adoptedPublish === !0) && R.outcome !== "skipped") {
    let { autoReact: A, wakes: F } = getArtifactState(),
      U = !L
        ? "bare_watch_comments_off"
        : A.userDisarmed
          ? "bare_watch_session_disarmed"
          : !isArtifactAutoReactOptedIn()
            ? "bare_watch_autoreact_off"
            : isSlugStopped(t) &&
                !x &&
                !(
                  isSlugSwept(t) &&
                  !isSlugSweptOrYielded(t) &&
                  F.humanTurnAtScanGeneration === F.scanGeneration
                )
              ? "bare_watch_slug_stopped"
              : void 0;
    if (U !== void 0)
      logFeatureSad("artifact_live_subscribe", U, { publish_context: fromEnum(d) });
  }
  if (
    L &&
    R.outcome !== "skipped" &&
    !(
      R.outcome === "already_watching" &&
      (e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0)
    ) &&
    !(R.outcome === "armed" && R.degraded !== void 0) &&
    Me()
  )
    armArtifactCommentMonitor(t, { title: _, storageV5: S.storageV5 });
  return R;
}
function Me() {
  return !getArtifactState().autoReact.userDisarmed && isArtifactAutoReactOptedIn();
}
function Kt(e, t, r) {
  return `live updates for artifact ${e} (${armedViaWording(labelledArmedVia(t, r)).task})`;
}
function isSocketHoldingPublishContext(e) {
  return e === "interactive" || e === "sdk";
}
function ve(e) {
  return { context: pickToolInvocationContext(e), signal: e.abortController.signal };
}
function makeArtifactReadVersionReader(e, t) {
  return () => mainObservedArtifactVersion(e(), t);
}
function wr(e) {
  if (!isFrameLiveSubscribeEnabled()) return { reason: "flag_off" };
  if (a.CLAUDE_CODE_REMOTE) return { reason: "remote" };
  return Ji(lr(e));
}
function rt(e) {
  return isFrameLiveSubscribeEnabled() && tt(e) === null && !isPresenceDeclined(e);
}
function Ji(e) {
  if (Fir()) return { reason: "cp_override" };
  let t = wsEgressDenyReason(e);
  if (t !== null) return { reason: "egress_denied", egressKind: t.kind };
  return null;
}
function frameLivePublishFindsConnected(e) {
  let { context: t, slug: r, wantWiring: i, canClearLatch: d } = e,
    o = Date.now();
  for (let l of Object.values(t.taskRegistry.all()))
    if (
      isMonitorWsTask(l) &&
      l.status === "running" &&
      l.frameLive?.slug === r &&
      pr(l, r, o, i, d, $i) === "keep"
    )
      return !0;
  return !1;
}
function frameLivePublishSkipReason(e) {
  if (getArtifactState().durable.stopLatches.isStopped(e.slug)) return "stop_latched";
  if (!isSocketHoldingPublishContext(e.publishContext)) return "publish_context";
  return wr(e.slug)?.reason ?? null;
}
var AUTO_REPLIES_ARMED_TOKEN = "auto-replies armed",
  AUTO_REPLIES_PAUSED_ROW =
    "auto-replies paused by the user's interrupt (Ctrl+C or Stop) \u2014 the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)",
  AUTO_REPLIES_YIELDED_ROW =
    "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) \u2014 that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks \u2014 the user asking is not itself the take-back); no comment notifications arrive here meanwhile",
  AUTO_REPLIES_DECLINED_ROW =
    "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread",
  AUTO_REPLIES_DENIED_ROW =
    "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";
function $t() {
  return isArtifactCommentsAvailable()
    ? `; a comment on it sent to Claude also reaches this session while this artifact's status row says ${AUTO_REPLIES_ARMED_TOKEN}, and plain comments never notify \u2014 read them with ${selectArtifactToolsetText('action "comments"', () => `the ${describeArtifactCommentsAction("comments")}`)} when asked`
    : "";
}
function frameLiveSkipReasonPhrase(e) {
  switch (e) {
    case "flag_off":
      return "the live-subscribe feature flag is off in this session's cached config, so you will not be notified here when this artifact is republished elsewhere";
    case "publish_context":
      return "only an interactive or SDK main-loop session holds the watch (not a subagent, teammate, background, or print session)";
    case "stop_latched":
      return "watching this artifact was stopped earlier in this session; do not retry on your own. If the user asks you to resume watching it, call the watch action (in permission modes that prompt, they confirm it there)";
    case "remote":
      return "remote sessions do not hold the watch";
    case "cp_override":
      return "the artifact control plane is overridden to a local stack, so the live edge is not reachable";
    case "egress_denied":
      return "network egress to the claude.ai edge is denied by policy, so you will not be notified here when this artifact is republished elsewhere";
    case "not_found":
      return "no such artifact for this account (it was deleted, or it has not been shared with the user)";
    case "other_org":
      return ARTIFACT_OTHER_ORG_MESSAGE;
    case "not_editor":
      return "a restored publish decision does not carry for an artifact this account cannot publish to";
    case "no_subscription_token":
      return "the control plane minted no live-channel credential for this artifact";
    case "boot_failed":
      return "the artifact could not be read right now (network or auth); try again later";
    case "watch_cap":
      return `this session already holds its maximum of ${MAX_ARTIFACT_WATCHES} artifact watches and none could make room (each is a watch you requested, one auto-replying to comments, or the artifact you most recently published, or watch slots are still connecting); unwatch one first`;
    case "watch_cap_reconnect":
      return `this session was already holding its maximum of ${MAX_ARTIFACT_WATCHES} artifact watches when this one tried to reconnect, and none of the other watches could make room`;
    case "invalid_slug":
      return "that is not an artifact this session can name";
    case "cancelled":
      return "the request was cancelled before the connection opened";
    case "ws_open_error":
      return "the live connection could not be opened from this environment";
    case "sync_unavailable":
      return "the live channel is not available to this session right now";
    default:
      return null;
  }
}
function frameLiveSubscriptionLine(e) {
  switch (e) {
    case "arming":
      return `Live subscription: arming in the background \u2014 not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session is notified when this artifact is republished elsewhere${$t()}.`;
    case "connected":
      return `Live subscription: already connected from earlier in this session \u2014 this session is notified when this artifact is republished elsewhere${$t()}.`;
    case "publish_adopted":
      return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally \u2014 that session is then notified when this artifact is republished elsewhere${$t()}.`;
    case "remote_unsupported": {
      let t = isArtifactCommentsAvailable();
      return `Live subscription: not supported yet from remote sessions \u2014 nothing notifies this session of new versions${t ? " or of comments sent to Claude" : ""}; re-read the artifact${t ? " (and its comments)" : ""} when the user asks.`;
    }
    default: {
      let t = frameLiveSkipReasonPhrase(e);
      return t !== null
        ? `Live subscription: skipped \u2014 ${t}.`
        : `Live subscription: skipped (${sweepResultLineText(e, 64)}).`;
    }
  }
}
async function subscribeFrameLiveOnAttach(e) {
  let { slug: t, url: r, getKnownVer: i, context: d } = e;
  return pe(getArtifactState().live, {
    slug: t,
    url: r,
    getKnownVer: i,
    ownPublishes: d.artifactRegistries.ownPublishes,
    ...ve(d),
    seedKnownVerFromBoot: !0,
  });
}
async function pe(e, t) {
  let {
    slug: r,
    url: i,
    getKnownVer: d,
    ownPublishes: o,
    context: l,
    seedKnownVerFromBoot: p,
    seedSurfacedVer: _,
    explicit: S = !1,
    signal: v,
  } = t;
  ensureAutoReactLedgerLoaded();
  let E = e.supervisors.get(r)?.carriedVer;
  e.endAll ??= ji;
  let L =
      t.autoReactWiring !== void 0 && t.autoReactWiring.commentVerbsInSchema,
    x =
      t.userResumeWiring === !0
        ? "resume"
        : S
          ? "watch"
          : t.sessionResume === !0
            ? "session_resume"
            : t.mcpWrite === !0
              ? "mcp_write"
              : p
                ? "attach"
                : "publish";
  if (!ARTIFACT_SLUG_RE.test(r)) return { outcome: "skipped", reason: "invalid_slug" };
  e.armOutcomes.delete(r);
  let R = getArtifactState().durable.stopLatches;
  ensureArtifactCommentMonitorState({ storageV5: l.storageV5 });
  let A = t.userResumeWiring === !0 ? t.approvedRelatchGen : void 0,
    F = () => R.isStopped(r) && (A === void 0 || R.latchGeneration(r) !== A);
  if (F())
    return (
      logFeatureSad("artifact_live_subscribe", "stop_latched"),
      { outcome: "skipped", reason: "stop_latched" }
    );
  let U = wr(r);
  if (U !== null) {
    if (U.reason === "cp_override")
      logFeatureSad("artifact_live_subscribe", "cp_override_active");
    else if (U.reason === "egress_denied")
      logFeatureSad(
        "artifact_live_subscribe",
        `egress_denied_${U.egressKind === "sandbox-policy" ? "sandbox_policy" : U.egressKind}`,
      );
    return { outcome: "skipped", reason: U.reason };
  }
  let ot = lr(r),
    at = rt(r),
    Ae =
      (t.freshPublishWiring === !0 || t.userResumeWiring === !0) &&
      !t.signal.aborted,
    ut = e.supervisors.get(r)?.autoReactWiring,
    ae = Gi(l, r, L, Ae);
  if (ae !== null || e.inFlightSubscribes.has(r)) {
    if (ae === null && A !== void 0 && R.isStopped(r))
      return (
        logFeatureSad("artifact_live_subscribe", "arm_in_flight"),
        { outcome: "skipped", reason: "arm_in_flight" }
      );
    if (!(x === "resume" && ae === null && !e.supervisors.has(r)))
      sr(e, {
        slug: r,
        url: i,
        getKnownVer: d,
        ownPublishes: o,
        context: l,
        explicit: S,
        machineArm: t.machineArm,
        armedVia: x,
        ...(t.requireEditor !== !0 &&
          t.editorGatedWiring !== !0 && {
            autoReactWiring: t.autoReactWiring,
            humanTurnWiring: Ae,
          }),
      });
    if (ae !== null) {
      let C = e.supervisors.get(r);
      if (C !== void 0) {
        let Q = Kt(i, C.explicit, C.armedVia);
        l.taskRegistry.update(ae, (P) => {
          if (!isMonitorWsTask(P) || P.frameLive === void 0) return P;
          if (
            P.description === Q &&
            P.frameLive.explicit === C.explicit &&
            P.frameLive.armedVia === C.armedVia
          )
            return P;
          return {
            ...P,
            description: Q,
            frameLive: {
              ...P.frameLive,
              explicit: C.explicit,
              armedVia: C.armedVia,
            },
          };
        });
      }
    }
    if (ae !== null && t.freshPublishWiring === !0 && !t.signal.aborted)
      zt(l.taskRegistry, r);
    if (
      ae === null &&
      t.autoReactWiring !== void 0 &&
      t.autoReactWiring.commentVerbsInSchema &&
      t.requireEditor !== !0 &&
      t.editorGatedWiring !== !0
    ) {
      let C = e.pendingInFlightWiring.get(r),
        Q = t.freshPublishWiring === !0 && !t.signal.aborted,
        P =
          Q || C === void 0
            ? {
                scanGeneration: getArtifactState().wakes.scanGeneration,
                stopGeneration: getStopGeneration(r),
              }
            : {
                scanGeneration: C.scanGeneration,
                stopGeneration: C.stopGeneration,
              };
      if (
        (e.pendingInFlightWiring.set(r, {
          wiring: we(C?.wiring, t.autoReactWiring, Ae),
          freshPublishWiring: Q || C?.freshPublishWiring === !0,
          ...P,
        }),
        e.inFlightWiredIntent.add(r),
        Me())
      )
        markArtifactCommentMonitorTraveling(r, { storageV5: l.storageV5 });
      if (Q && isArtifactAutoReactOptedIn())
        e.bootingWiredArms.set(r, {
          title: t.autoReactWiring.title,
          freshPublish: !0,
          ...P,
        });
    }
    return { outcome: "already_watching", ...(ae !== null && { taskId: ae }) };
  }
  let X = {
      url: i,
      announce: t.announceArmlessEnd === !0 && !t.machineArm,
      handoffGen: e.handoffGeneration,
      getTitle: () =>
        e.supervisors.get(r)?.autoReactWiring?.title ??
        t.autoReactWiring?.title,
    },
    Jt = frameLiveWatchRows(l).length + e.inFlightSubscribes.size;
  if (t.machineArm && frameLiveWatchRows(l).length >= MAX_ARTIFACT_WATCHES) {
    if (!Bt(e, r) || nt(e, l).length === 0)
      return (
        logFeatureSad("artifact_live_subscribe", "watch_cap_reconnect"),
        { outcome: "skipped", reason: "watch_cap_reconnect" }
      );
  }
  if (t.mcpWrite && Jt >= MAX_ARTIFACT_WATCHES)
    return (
      logFeatureSad("artifact_live_subscribe", "watch_cap"),
      J(e, r, t.machineArm, "watch_cap", X)
    );
  if (!t.machineArm && Jt >= MAX_ARTIFACT_WATCHES && nt(e, l).length === 0)
    return (
      logFeatureSad("artifact_live_subscribe", "watch_cap"),
      J(e, r, t.machineArm, "watch_cap", X)
    );
  let Re = getArtifactState().wakes.scanGeneration,
    Pe = getStopGeneration(r),
    Zt = t.machineArm ? e.supervisors.get(r)?.lastActivityAt : void 0,
    en = e.handoffGeneration;
  if (
    (setFrameLiveUserStopObserver(Ei),
    setAutoReactDeliberateStopObserver(resetAutoReactLedgerForSlug),
    setAutoReactHumanTurnObserver(() => Bi(l.taskRegistry)),
    e.inFlightSubscribes.add(r),
    e.inFlightGenerations.set(r, en),
    t.autoReactWiring !== void 0)
  )
    e.inFlightWiredIntent.add(r);
  let Fe,
    ye = !1;
  try {
    if (
      t.autoReactWiring?.commentVerbsInSchema === !0 &&
      t.requireEditor !== !0 &&
      t.machineArm !== !0 &&
      t.userResumeWiring !== !0 &&
      isArtifactAutoReactOptedIn()
    )
      e.bootingWiredArms.set(r, {
        title: t.autoReactWiring.title,
        freshPublish: t.freshPublishWiring === !0 && !t.signal.aborted,
        scanGeneration: Re,
        stopGeneration: Pe,
      });
    let C = () => e.handoffGeneration !== en || e.retiredInFlightArms.has(r),
      Q = isFrameLiveTokenLeaseEnabled();
    if (!Q) {
      let w = e.supervisors.get(r);
      if (w !== void 0) (delete w.lease, delete w.renewable);
    }
    let P = getArtifactState().accountEpoch,
      ge = Q && t.machineArm === !0 ? e.supervisors.get(r)?.lease : void 0,
      D =
        ge !== void 0 &&
        (ge.transport === "live" || at) &&
        isLeaseValidWithMargin(ge, e.rewatchTiming, P)
          ? ge
          : void 0;
    if (D !== void 0 && D.transport === "sync") {
      let w = await readFreshOauthAccountFromDisk(l.storageV5).catch(() => {
        return;
      });
      if (!sameOwnerAccount(me(D.token), w)) D = void 0;
      if (v.aborted || C()) return J(e, r, t.machineArm, "cancelled", X);
    }
    let M,
      tn = !1,
      nn = 0;
    if (D !== void 0)
      M = {
        err: null,
        token: D.token,
        transport: D.transport,
        ver: D.ver,
        editor: void 0,
        tokenExp: void 0,
        renewable: !1,
      };
    else {
      let w =
        Q &&
        !at &&
        t.machineArm === !0 &&
        e.supervisors.get(r)?.renewable === !0;
      try {
        let G;
        if (w) {
          let be = await renewArtifactWatchToken(r, v, l.credentials);
          if (be.err === null) ((G = be), (tn = !0));
          else {
            logFeatureSad(
              "artifact_live_subscribe",
              `renew_miss_${be.status ?? "no_response"}`,
            );
            let ue = e.supervisors.get(r);
            if (ue !== void 0) delete ue.renewable;
            if (v.aborted || C()) return J(e, r, !0, "cancelled", X);
          }
        }
        ((nn = Date.now()),
          (M = G ?? (await readArtifactSubscription(r, v, l.credentials, { syncLive: at }))));
      } catch {
        return J(
          e,
          r,
          t.machineArm,
          v.aborted || C() ? "cancelled" : "boot_failed",
          X,
        );
      }
    }
    let xr = Date.now();
    if (C()) return J(e, r, t.machineArm, "cancelled", X);
    if (M.err !== null) {
      let w = v.aborted
          ? "cancelled"
          : M.status === 404
            ? "not_found"
            : isArtifactOtherOrgError(M)
              ? "other_org"
              : "boot_failed",
        G =
          w === "boot_failed" &&
          (M.unavailable === !0 ||
            (M.noAnswer === !0 &&
              Date.now() - nn >= e.rewatchTiming.stallThresholdMs));
      return J(e, r, t.machineArm, w, X, {
        unavailable: G,
        httpStatus: M.status,
      });
    }
    let De = t.requireEditor === !0 && !M.editor,
      oe =
        De ||
        (t.editorGatedWiring === !0 &&
          t.autoReactWiring !== void 0 &&
          M.editor !== !0),
      rn = De ? "restored_consent_not_editor" : "watch_not_editor";
    if (M.editor === !0) e.nonEditorSlugs.delete(r);
    if (oe) {
      if (
        (e.inFlightWiredIntent.delete(r),
        e.bootingWiredArms.delete(r),
        !De && getArtifactState().accountEpoch === P)
      )
        e.nonEditorSlugs.add(r);
    }
    let de = oe ? void 0 : t.autoReactWiring,
      ct = oe ? void 0 : t.onOpen,
      sn = oe ? void 0 : t.onGiveUp,
      q = M.transport;
    if (q === "sync" && (!rt(r) || M.token === void 0 || !Se(M.token)))
      return (
        logFeatureSad("artifact_live_subscribe", "sync_unavailable"),
        J(e, r, t.machineArm, "sync_unavailable", X, { unavailable: !0 })
      );
    let Te = M.token;
    if (!Te)
      return (
        logFeatureSad("artifact_live_subscribe", oe ? rn : "no_subscription_token"),
        J(e, r, t.machineArm, De ? "not_editor" : "no_subscription_token", X)
      );
    if (oe) logFeatureSad("artifact_live_subscribe", rn);
    let on = M.ver,
      Cr = p ? () => d() ?? on : d,
      I =
        D ??
        (Q
          ? createTokenLease({
              transport: q,
              token: Te,
              ver: on,
              accountEpoch: P,
              expUnixSeconds: q === "sync" ? Je(Te) : M.tokenExp,
              receivedAtMs: xr,
            })
          : void 0);
    if (v.aborted || C()) return J(e, r, t.machineArm, "cancelled", X);
    let Ve = frameLiveWatchRows(l).length + e.inFlightSubscribes.size - 1,
      dt = e.supervisors.get(r),
      Wr =
        t.machineArm === !0 &&
        Zt !== void 0 &&
        dt !== void 0 &&
        !dt.stopped &&
        dt.lastActivityAt > Zt,
      an = frameLiveWatchRows(l).length + e.pendingRegistrations;
    if (t.machineArm && !Wr && Ve >= MAX_ARTIFACT_WATCHES) {
      if (an >= MAX_ARTIFACT_WATCHES) {
        if (!Bt(e, r) || !qi(e, l))
          return (
            logFeatureSad("artifact_live_subscribe", "watch_cap_reconnect"),
            { outcome: "skipped", reason: "watch_cap_reconnect" }
          );
      }
    } else if (t.mcpWrite && Ve >= MAX_ARTIFACT_WATCHES)
      return (
        logFeatureSad("artifact_live_subscribe", "watch_cap"),
        J(e, r, t.machineArm, "watch_cap", X)
      );
    else if (Ve >= MAX_ARTIFACT_WATCHES) {
      let w = Ve - MAX_ARTIFACT_WATCHES + 1,
        G = nt(e, l);
      if (G.length < w) {
        if (t.machineArm)
          return (
            logFeatureSad("artifact_live_subscribe", "watch_cap_reconnect"),
            { outcome: "skipped", reason: "watch_cap_reconnect" }
          );
        return (
          logFeatureSad("artifact_live_subscribe", "watch_cap"),
          J(e, r, t.machineArm, "watch_cap", X)
        );
      }
      if (an >= MAX_ARTIFACT_WATCHES)
        gr(
          e,
          G[0],
          l,
          t.machineArm
            ? {
                why: `this session reached its limit of ${MAX_ARTIFACT_WATCHES} artifact watches and made room for an already-held watch to reconnect`,
                shortReason: Xt,
              }
            : void 0,
        );
    }
    (e.pendingRegistrations++, (ye = !0));
    let j = e.supervisors.get(r),
      Lr = j !== void 0 && !j.stopped && j.explicit,
      lt = S || Lr,
      ft = j !== void 0 && !j.stopped,
      un = ft ? j.taskId : void 0,
      Or = j === void 0,
      Ir = S && j !== void 0 && !j.explicit,
      cn =
        !t.machineArm &&
        j !== void 0 &&
        j.armedVia === "mcp_write" &&
        x !== "publish" &&
        x !== "mcp_write",
      dn = cn ? j.autoReactWiring : void 0,
      ln = de !== void 0 && !ir(e, r, ut),
      fn =
        t.userResumeWiring === !0 &&
        ln &&
        ft &&
        j.autoReactWiring?.humanTurnSnapshot === !0,
      pt = e.supervisors.get(r)?.carriedVer,
      mt = pt !== void 0 && pt !== E ? pt : _,
      k = sr(e, {
        slug: r,
        url: i,
        getKnownVer: d,
        ownPublishes: o,
        context: l,
        explicit: S,
        machineArm: t.machineArm,
        armedVia: x,
        carriedVer: mt ?? M.ver,
        ...(ln && { autoReactWiring: de }),
        humanTurnWiring: Ae && !fn,
      }),
      Mr = k.autoReactWiring;
    if (I !== void 0 && I.accountEpoch === getArtifactState().accountEpoch) {
      if (((k.lease = I), D === void 0 && M.renewable)) k.renewable = !0;
      else if (D === void 0) delete k.renewable;
    } else (delete k.lease, delete k.renewable);
    let Pr = k.lastActivityAt;
    if (ct !== void 0 && sn !== void 0)
      k.resumeAnnounce = { onOpen: ct, onGiveUp: sn, wired: de !== void 0 };
    let ht =
      x === "resume" && k.armedVia !== "watch" && k.armedVia !== "resume"
        ? k.armedVia
        : void 0;
    if (ht !== void 0) k.armedVia = "resume";
    k.transport = q;
    let re = !1,
      pn = K(),
      mn = !1,
      gt,
      Ne,
      hn = !1,
      Ee,
      Fr = new AbortController(),
      Z = oe ? void 0 : e.pendingInFlightWiring.get(r);
    if (!oe) e.pendingInFlightWiring.delete(r);
    let le = de ?? Z?.wiring,
      Dr =
        Z?.wiring.humanTurnSnapshot === !0 &&
        (ut?.humanTurnSnapshot !== !0 || Z.wiring.context !== ut.context);
    if (Z !== void 0 && (de === void 0 || Dr) && Z.stopGeneration === getStopGeneration(r)) {
      let w = e.supervisors.get(r);
      if (w !== void 0 && !w.stopped)
        w.autoReactWiring = we(
          w.autoReactWiring,
          { ...Z.wiring, title: Z.wiring.title ?? w.autoReactWiring?.title },
          Z.wiring.humanTurnSnapshot === !0,
        );
    }
    let gn = t.freshPublishWiring === !0 || Z?.freshPublishWiring === !0;
    if (Z?.freshPublishWiring === !0)
      ((Re = Z.scanGeneration), (Pe = Z.stopGeneration));
    let ee = t.userResumeWiring === !0,
      Vr = Ae || le?.humanTurnSnapshot === !0,
      Ue = () => e.supervisors.get(r)?.autoReactWiring?.title ?? le?.title,
      W =
        le === void 0 || !le.commentVerbsInSchema
          ? void 0
          : {
              env: getArtifactEnvironment(),
              tool: le.tool,
              context: le.context,
              ...(le.publishTranscript !== void 0 && {
                publishTranscript: le.publishTranscript,
              }),
              getWiring: () => {
                let w = e.supervisors.get(r)?.autoReactWiring;
                return w?.humanTurnSnapshot === !0 || !Vr ? w : void 0;
              },
              abort: Fr,
              getTitle: Ue,
              onReadRefused: () => {
                Pi(e, r);
              },
              notify: (w) => {
                if ("coalesce" in w) {
                  enqueueCoalescedArtifactNotice({
                    queue: ar,
                    slug: r,
                    family: w.coalesce.family,
                    artifactName: w.coalesce.artifactName,
                    threadId: w.coalesce.threadId,
                    detail: w.detail,
                    mergeDetails: "append",
                  });
                  return;
                }
                enqueuePendingNotification({
                  value: buildTaskNotification({
                    taskType: "artifact-auto-react",
                    summary: escapeHtmlText(w.summary),
                    body: `
${escapeHtmlText(w.detail)}`,
                  }),
                  mode: "task-notification",
                  origin: {
                    kind: "task-notification",
                    source: "artifact-auto-react",
                    slug: r,
                    displayName: formatArtifactDisplayName(Ue, i),
                  },
                  agentId: ze(),
                });
              },
            };
    k.surfacedVers ??= [];
    let bn = k.wake,
      $e = Di({
        slug: r,
        url: i,
        ownPublishes: o,
        presenceOnly: () => e.supervisors.get(r)?.armedVia === "mcp_write",
        getKnownVer: Cr,
        getTitle: Ue,
        surfacedVers: k.surfacedVers,
        ...(mt !== void 0 && { seedSurfacedVer: mt }),
        onSurfaced: (w) => {
          let G = e.supervisors.get(r);
          if (G && !G.stopped)
            ((G.carriedVer = w), (G.lastActivityAt = Date.now()));
        },
        autoReact: W,
      });
    k.wake = $e;
    let bt = 0,
      Nr = D?.opened === !0 ? D : void 0;
    try {
      let w = await startWebSocketMonitor(
        {
          ws:
            q === "sync"
              ? { url: We(r), protocols: [Qe, Te] }
              : { url: ot, protocols: [Ai, Te] },
          ...(q === "sync" && { headers: { "User-Agent": getUserAgent() } }),
          description: Kt(i, lt, k.armedVia),
          timeout_ms: 0,
          persistent: !0,
          quietLifecycle: !0,
          ...(un !== void 0 && { reuseTaskId: un }),
          ambient: !0,
          handshakeDeadlineMs: e.rewatchTiming.handshakeDeadlineMs,
          autoReactArmed: W !== void 0,
          autoReactSlug: W !== void 0 ? r : void 0,
          frameLive: {
            slug: r,
            explicit: lt,
            watchedSince: k.watchedSince,
            armedVia: k.armedVia,
          },
          transform:
            q === "sync"
              ? Ui($e, r, {
                  onTokenRefresh: (Y, V) => {
                    if (I !== void 0 && sameOwnerAccount(me(I.token), me(Y)))
                      updateTokenLease(I, {
                        token: Y,
                        expUnixSeconds: V,
                        receivedAtMs: Date.now(),
                      });
                  },
                  onExpiryAnnounced: () => {
                    hn = !0;
                  },
                })
              : Vi($e),
          keepalive:
            q === "sync"
              ? {
                  openFrames: [],
                  frame: jsonStringify({ kind: "ping", slug: r }),
                  intervalMs: getArtifactState().presence.timing.keepaliveMs,
                  deadlineMs:
                    getArtifactState().presence.timing.keepaliveDeadlineMs ??
                    Dt(getArtifactState().presence.timing.keepaliveMs),
                }
              : { openFrames: ["ping", "hb"], frame: "ping", intervalMs: Ri },
          onSender: (Y) => {
            if (q === "sync") {
              ((Ne = (V) => Y(Lt(r, V))), Ye(e, `watch:${r}`, Ne));
              return;
            }
            ((gt = Y), Mn(e, r, Y));
          },
          onSenderClosed: () => {
            if (Ne !== void 0) Xe(e, `watch:${r}`, Ne);
            if (gt !== void 0) Pn(e, r, gt);
          },
          onLifecycle: (Y, V, $r) => {
            if (Y === "open") {
              ((re = !0),
                (k.lastFailure = void 0),
                (Ee = {
                  stalledSince: k.stalledSince,
                  lastStalledAt: k.lastStalledAt,
                  stallOutAfterMs: k.stallOutAfterMs,
                }),
                (k.stalledSince = void 0),
                (k.lastStalledAt = void 0),
                (k.stallOutAfterMs = void 0));
              let xe = k.spreadReconnect === !0;
              if (
                ((k.spreadReconnect = void 0), (bt = Date.now()), I !== void 0)
              )
                I.opened = !0;
              if (
                A !== void 0 &&
                v.aborted &&
                R.isStopped(r) &&
                k.taskId !== void 0
              ) {
                (killMonitorTask(k.taskId, l.taskRegistry, { quiet: !0 }),
                  te(e, r),
                  logFeatureSad("artifact_live_subscribe", "stop_latched"));
                return;
              }
              let Ce = e.supervisors.get(r);
              if (Ce !== void 0 && !Ce.stopped)
                if (q === "sync") (retirePresenceSlug(r), Ie(r)?.reopened());
                else
                  (jn({ slug: r, url: i, context: l }), Ie(r)?.sourceEnded());
              logFeatureOk("artifact_live_subscribe", {
                armed: !0,
                ...(q === "sync" && { sync_transport: !0 }),
                ...(lt && { explicit: !0 }),
                ...(D !== void 0 && {
                  token_reused: !0,
                  lease_remaining_min: Math.max(
                    0,
                    Math.floor((D.expMs - bt) / 60000),
                  ),
                }),
                ...(tn && { token_renewed: !0 }),
              });
              let wn = W !== void 0 && getArtifactState().wakes.scanGeneration !== Re,
                Gr = getStopGeneration(r) !== Pe,
                { wakes: ce } = getArtifactState(),
                Hr =
                  ce.liftedAtScanGeneration.get(r) === ce.scanGeneration ||
                  ce.humanTurnAtScanGeneration === ce.scanGeneration;
              if (wn && !Hr && !isSlugStopped(r) && isArtifactAutoReactEnabled())
                (stopSlugAndSweep(r),
                  emitAutoReactStopNotification(1, [], {
                    catchUp: !1,
                    nameChordGesture: !ke(),
                    passive: !ke(),
                  }),
                  scheduleAutoReactLedgerWrite({ flush: !0 }));
              if (A !== void 0 && !v.aborted) R.clearByApprovedRewatch(r, A);
              if (W !== void 0) getWakeState(r).lastWakeArgs = { slug: r, url: i, ...W };
              let vn = ee && F();
              if (ee && W !== void 0 && !v.aborted && !vn && Me()) {
                let N = e.supervisors.get(r)?.autoReactWiring;
                armArtifactCommentMonitor(r, { title: N?.title, storageV5: N?.context.storageV5 });
              }
              if (W !== void 0 && v.aborted);
              else if (W !== void 0)
                if (
                  !ee &&
                  isSlugSwept(r) &&
                  !isSlugSweptOrYielded(r) &&
                  ce.humanTurnAtScanGeneration === ce.scanGeneration
                )
                  (__t(r),
                    ce.liftedAtScanGeneration.set(r, ce.scanGeneration),
                    refreshSummonArmForSlug(e, r),
                    scheduleArtifactAutoReactWake({ slug: r, url: i, ...W, seed: !1 }));
                else if (isSlugStopped(r) && (wn || Gr || vn || !(gn || ee)));
                else if (isSlugStopped(r)) {
                  let N = isSlugSwept(r),
                    fe = isSlugYielded(r);
                  if (isArtifactAutoReactEnabled() && (ee || !N || fe))
                    (markAutoReactNoticePending(r),
                      W.notify({
                        summary: (ee ? formatAutoRepliesResumedSummary : formatAutoRepliesReenabledSummary)(formatArtifactDisplayName(W.getTitle, i)),
                        detail: `Auto-replies on artifact ${i} were ${ee ? "resumed by a resume_replies request" : "re-enabled by this publish"} \u2014 they had been ${fe ? "handed to another session of this conversation that resumed it or published there" : N ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${N && !fe ? Ht : yi}`,
                      }));
                  if (!N || fe) resetAutoReactStateForSlug(r);
                  (forgetYieldedSlug(r),
                    dropDeliveredSlug(r),
                    __t(r),
                    refreshSummonArmForSlug(e, r),
                    scheduleArtifactAutoReactWake({ slug: r, url: i, ...W, seed: !0 }));
                } else {
                  if (ce.pendingResumeDisclosure.delete(r))
                    (markAutoReactNoticePending(r),
                      W.notify({
                        summary: formatAutoRepliesResumedSummary(formatArtifactDisplayName(W.getTitle, i)),
                        detail: `Auto-replies on artifact ${i} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${Ht}`,
                      }));
                  scheduleArtifactAutoReactWake({
                    slug: r,
                    url: i,
                    ...W,
                    seed: !0,
                    ...(t.pickUpRecentSummons === !0 &&
                      t.machineArm !== !0 && { pickUpRecentSummons: !0 }),
                    ...(t.machineArm === !0 &&
                      xe &&
                      isFrameLiveTokenLeaseEnabled() && { deferMs: computeSeedDeferMs(e.rewatchTiming) }),
                  });
                }
              let Be = e.supervisors.get(r),
                At = Be?.resumeAnnounce;
              if (Be !== void 0 && At !== void 0) {
                Be.resumeAnnounce = void 0;
                let { autoReact: N } = getArtifactState(),
                  fe =
                    W !== void 0 &&
                    !isSlugStopLatched(r) &&
                    !N.userDisarmed &&
                    N.enabledMemo === !0;
                if (
                  !v.aborted &&
                  !Be.stopped &&
                  !R.isStopped(r) &&
                  (fe || (!At.wired && W === void 0))
                )
                  At.onOpen();
              }
              if (
                W !== void 0 &&
                (gn || ee || S) &&
                !mn &&
                !v.aborted &&
                !R.isStopped(r) &&
                !isSlugStopLatched(r) &&
                !getArtifactState().autoReact.userDisarmed &&
                getArtifactState().autoReact.enabledMemo === !0
              ) {
                mn = !0;
                let N = isArtifactReplyYieldEnabled() ? registerPendingClaim([r], Date.now()) : void 0;
                (async () => {
                  let fe = await import("../跨会话消息-UDS/chunk-ddtmwhn7.js"),
                    An = await import("../../01-核心基础设施/共享小工具-未细化/process-record.js"),
                    AnQ = await import("../../01-核心基础设施/核心工具-进程与信号/process-identity.js"),
                    Ke = await resolveLiveSessionHolder({
                      records: await fe.listRegisteredSessionRecords(),
                      sessionId: pn,
                      selfPid: process.pid,
                      isRunning: An.isProcessRunning,
                      isSameProcess: AnQ.provenSameProcessAsync,
                    });
                  if (Ke.verdict !== "live") {
                    N?.end();
                    return;
                  }
                  let { requestReplyTakeover: Br } =
                      await import("./chunk-54kz7amv.js"),
                    Rt = (
                      await Br({
                        holders: [Ke.holder, ...Ke.otherHolders],
                        holdersIncomplete: Ke.unproven === !0,
                        conversationId: pn,
                        slugs: [r],
                        reason: "claim",
                        alreadyReplying: !0,
                        ...(N !== void 0 && { claim: N }),
                      })
                    ).yielded.has(r),
                    Rn = !Rt && (N?.lost.has(r) ?? !1),
                    qe = formatArtifactDisplayName(() => Ue(), i);
                  enqueuePendingNotification({
                    value: buildTaskNotification({
                      taskType: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
                      summary: escapeHtmlText(
                        Rt
                          ? `Another session of this conversation handed its replies on ${qe} to this one`
                          : Rn
                            ? `This session handed its replies on ${qe} to another session of this conversation`
                            : `Another session of this conversation is open while replies are armed on ${qe}`,
                      ),
                      body: `
<event>${escapeHtmlText(Rt ? `Another live session of this same conversation was also armed to reply to comments on ${i}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : Rn ? `Another live session of this same conversation claimed the replies to comments on ${i} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do \u2014 a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${i}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>`,
                    }),
                    mode: "task-notification",
                    passive: !0,
                    priority: "next",
                    origin: {
                      kind: "task-notification",
                      source: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
                      slug: r,
                      displayName: qe,
                    },
                    agentId: ze(),
                  });
                })().catch(() => {
                  N?.end();
                });
              }
              return;
            }
            let Ge = re ? Date.now() - bt : 0,
              St = !re && Ii(V),
              _t =
                q === "sync"
                  ? V === SERVICE_UNAVAILABLE_CLOSE_CODE &&
                    (hn || (I !== void 0 && Date.now() >= I.expMs - ki))
                  : V === SESSION_EXPIRED_CLOSE_CODE,
              He =
                q === "sync" &&
                ((re && V === SERVICE_UNAVAILABLE_CLOSE_CODE && !_t) || (!re && parseUpgradeRejectDetail(V)?.status === 404)),
              wt = He || (!re && (St || Oi(V, $r, e.rewatchTiming))),
              vt = re || wt ? void 0 : Nr,
              z = e.supervisors.get(r);
            if (
              He &&
              re &&
              Ge < e.rewatchTiming.minUptimeMs &&
              z !== void 0 &&
              z.stalledSince === void 0 &&
              Ee?.stalledSince !== void 0
            )
              ((z.stalledSince = Ee.stalledSince),
                (z.lastStalledAt = Ee.lastStalledAt),
                (z.stallOutAfterMs = Ee.stallOutAfterMs));
            if (
              z !== void 0 &&
              q === "sync" &&
              V === REVOKED_CLOSE_CODE &&
              I !== void 0 &&
              z.lease === I
            )
              delete z.lease;
            if (
              I !== void 0 &&
              z?.lease === I &&
              (!isFrameLiveTokenLeaseEnabled() ||
                (!St &&
                  !He &&
                  !shouldRetryLeaseDial(I, {
                    expired: _t,
                    refused: vt !== void 0,
                    healthy: re && Ge >= e.rewatchTiming.minUptimeMs,
                  })))
            ) {
              if ((delete z.lease, !I.opened)) delete z.renewable;
            }
            if (re)
              logFeatureSad("artifact_live_subscribe", `socket_closed_${V ?? "unknown"}`, {
                chain_spared: getArtifactState().autoReact.artifacts.get(r)?.scanning === !0,
              });
            else if (vt !== void 0)
              logFeatureSad("artifact_live_subscribe", "reuse_connect_failed");
            else {
              let xe = parseUpgradeRejectDetail(V),
                Ce = {
                  ...(wt && { stalled: !0 }),
                  ...(St && { shed: !0 }),
                  ...(xe !== null && {
                    http_status: xe.status,
                    cf_mitigated: xe.cfMitigated,
                  }),
                };
              if (Object.keys(Ce).length > 0)
                logFeatureBad("artifact_live_subscribe", "connect_failed", Ce);
              else logFeatureBad("artifact_live_subscribe", "connect_failed");
            }
            if (z !== void 0 && !z.stopped)
              z.lastFailure =
                Ge < e.rewatchTiming.minUptimeMs ? (V ?? "unknown") : void 0;
            jt(e, r, {
              uptimeMs: He ? 0 : Ge,
              ...(V !== void 0 && { closeCode: V }),
              resumeNeverOpened: ee && !re,
              reuseRefused: vt !== void 0,
              stalled: wt,
              expired: _t,
            });
          },
        },
        l,
      );
      if ((Ci(e, k, r, w.data.taskId), ye))
        (e.pendingRegistrations--, (ye = !1));
      let G = e.supervisors.get(r);
      if (G === void 0 || G !== k)
        return (
          killMonitorTask(w.data.taskId, l.taskRegistry, { quiet: !0 }),
          Yt(e, r, t.machineArm),
          { outcome: "skipped", reason: "cancelled" }
        );
      if (C())
        return (
          killMonitorTask(w.data.taskId, l.taskRegistry, { quiet: !0 }),
          te(e, r),
          { outcome: "skipped", reason: "cancelled" }
        );
      if (F()) {
        if (
          (killMonitorTask(w.data.taskId, l.taskRegistry, { quiet: !0 }),
          logFeatureSad("artifact_live_subscribe", "stop_latched"),
          e.armOutcomes.delete(r),
          qt(e, r),
          ft || k.lastActivityAt !== Pr)
        )
          it(e, k);
        else te(e, r);
        return { outcome: "skipped", reason: "stop_latched" };
      }
      let be = ee && v.aborted;
      if (be && A !== void 0 && R.isStopped(r))
        return (
          killMonitorTask(w.data.taskId, l.taskRegistry, { quiet: !0 }),
          te(e, r),
          { outcome: "skipped", reason: "cancelled" }
        );
      if ((e.armOutcomes.delete(r), qt(e, r), be))
        return { outcome: "skipped", reason: "cancelled" };
      if (ee && (getArtifactState().wakes.scanGeneration !== Re || getStopGeneration(r) !== Pe))
        return { outcome: "skipped", reason: "stopped_again" };
      if (fn && de !== void 0) {
        let Y = e.supervisors.get(r);
        if (Y === k && !Y.stopped && !ir(e, r, Mr))
          Y.autoReactWiring = we(
            Y.autoReactWiring,
            { ...de, title: Y.autoReactWiring?.title ?? de.title },
            !0,
          );
      }
      let ue = oe ? void 0 : e.pendingInFlightWiring.get(r),
        Sn = isSlugStopped(r),
        Ur = Sn || (W !== void 0 && getArtifactState().wakes.scanGeneration !== Re),
        _n =
          ue !== void 0 &&
          ue.freshPublishWiring &&
          ue.scanGeneration === getArtifactState().wakes.scanGeneration &&
          ue.stopGeneration === getStopGeneration(r);
      if (
        ue === void 0 ||
        v.aborted ||
        !(W === void 0 ? !Sn || _n : !ee && Ur && _n)
      )
        return {
          outcome: "armed",
          taskId: w.data.taskId,
          ...(oe && { degraded: "not_editor" }),
        };
      (e.pendingInFlightWiring.delete(r),
        (Fe = ue),
        killMonitorTask(w.data.taskId, l.taskRegistry, { quiet: !0 }));
    } catch {
      let w = e.supervisors.get(r);
      if (Or && w === k && !(w !== void 0 && w.explicit && !S)) te(e, r);
      else if (Ir && w !== void 0 && w === j) w.explicit = !1;
      if (ht !== void 0 && w === k && w.armedVia === "resume") w.armedVia = ht;
      else if (cn && w === k && w.armedVia === x && !w.explicit) {
        if (((w.armedVia = "mcp_write"), dn === void 0))
          delete w.autoReactWiring;
        else w.autoReactWiring = dn;
        refreshSummonArmForSlug(e, r);
      }
      if (w !== void 0 && w === k && w.wake === $e)
        if (bn === void 0) delete w.wake;
        else w.wake = bn;
      if (w !== void 0 && ct !== void 0) w.resumeAnnounce = void 0;
      if (
        I !== void 0 &&
        w?.lease === I &&
        !shouldRetryLeaseDial(I, { expired: !1, refused: !1, healthy: !1 })
      ) {
        if ((delete w.lease, !I.opened)) delete w.renewable;
      }
      return (
        logFeatureBad(
          "artifact_live_subscribe",
          D !== void 0 ? "reuse_ws_open_error" : "ws_open_error",
        ),
        J(e, r, t.machineArm, "ws_open_error", X)
      );
    }
  } finally {
    (e.inFlightSubscribes.delete(r),
      e.inFlightWiredIntent.delete(r),
      e.retiredInFlightArms.delete(r),
      e.inFlightGenerations.delete(r),
      e.bootingWiredArms.delete(r));
    let C = e.supervisors.get(r);
    if (C === void 0 || C.stopped) Ie(r)?.sourceEnded();
    let Q = e.armSettleWaiters.get(r) ?? [];
    e.armSettleWaiters.delete(r);
    for (let P of Q)
      try {
        P();
      } catch (ge) {
        logError(ge);
      }
    if ((e.pendingInFlightWiring.delete(r), ye))
      (e.pendingRegistrations--, (ye = !1));
  }
  if (Fe === void 0)
    throw Error("armLiveSubscription: late-park fall-through lost its park");
  return pe(e, {
    ...t,
    machineArm: void 0,
    userResumeWiring: void 0,
    approvedRelatchGen: void 0,
    sessionResume: void 0,
    pickUpRecentSummons: void 0,
    editorGatedWiring: void 0,
    autoReactWiring: Fe.wiring,
    freshPublishWiring: Fe.freshPublishWiring,
  });
}
function vr(e, t, r, i) {
  setBoundedMapEntry(e.armOutcomes, t, { outcome: r, reason: i, at: Date.now() }, MAX_ARM_OUTCOMES);
}
function Zi(e, t, r, i, d) {
  if (r || e.handoffGeneration !== d.handoffGen || e.retiredInFlightArms.has(t))
    return;
  let o = e.supervisors.get(t);
  if (o !== void 0 && !o.stopped && o.timer !== void 0) {
    if (i !== "cancelled") o.lastFailure = i;
    return;
  }
  if (e.armOutcomes.has(t)) return;
  let l = getArtifactState().durable.stopLatches.isStopped(t);
  if (!l) vr(e, t, "failed", i);
  if (d.announce && i !== "cancelled" && !l) is(e, t, d, i);
}
var Ar = "artifact not found",
  es =
    "there is nothing to retry unless the artifact is shared with the user again",
  Rr = "other organization",
  ts = `there is nothing to retry until ${OTHER_ORG_SIGN_IN_HINT}`,
  st =
    "it will not come back on its own \u2014 watch it again only if the user asks or your current task still depends on its republishes",
  ns = "there is nothing to re-watch while live updates are switched off";
function rs(e) {
  switch (e) {
    case "not_found":
    case "other_org":
      return { advice: noRewatchAdvice(e) };
    case "flag_off":
      return { advice: ns, passive: !0 };
    default:
      return { advice: st, passive: !0 };
  }
}
function noRewatchAdvice(e) {
  switch (e) {
    case "not_found":
    case Ar:
      return es;
    case "other_org":
    case Rr:
      return ts;
    case kr:
    case yr:
    case Tr:
    case Xt:
      return st;
    default:
      return;
  }
}
var kr = "connection lost",
  yr = "no live credential",
  Tr = "could not reconnect",
  Xt = "made room for another watch",
  Qt = {
    boot_failed: "could not connect",
    ws_open_error: "could not connect",
    sync_unavailable: "could not connect",
    not_found: Ar,
    other_org: Rr,
    no_subscription_token: yr,
    watch_cap: "watch limit reached",
  };
function qt(e, t) {
  (deletePrefixedSetEntries(e.announcedArmFailures, t), pullStaleWatchLifecycleNotices(t));
}
function pullStaleWatchLifecycleNotices(e) {
  removeCommandsByFilter(
    (t) =>
      t.origin?.kind === "task-notification" &&
      t.origin.source === ARTIFACT_WATCH_LIFECYCLE_ORIGIN &&
      t.origin.slug === e &&
      (t.origin.armFailed === !0 || t.origin.watchEnded === !0),
  );
}
function is(e, t, r, i) {
  if (!addBoundedSetEntry(e.announcedArmFailures, `${t}:${i}`, MAX_ANNOUNCED_ARM_FAILURES)) return;
  let d = frameLiveSkipReasonPhrase(i) ?? i,
    o = noRewatchAdvice(i) ?? DEFAULT_WATCH_ADVICE;
  Er({
    slug: t,
    artifactName: formatArtifactDisplayName(r.getTitle, r.url),
    shortReason: Qt[i] ?? "not armed",
    event: `The live subscription for ${r.url} did not arm \u2014 ${d}. This session is NOT watching it and will not hear when it is republished; ${o}, and do not claim to be watching it meanwhile.`,
  });
}
function Er(e) {
  enqueuePendingNotification({
    value: buildTaskNotification({
      taskType: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
      summary: escapeHtmlText(formatNotWatchingArtifactSummary(e.artifactName, e.shortReason)),
      body: `
<event>${escapeHtmlText(e.event)}</event>`,
    }),
    mode: "task-notification",
    priority: "next",
    origin: {
      kind: "task-notification",
      source: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
      slug: e.slug,
      displayName: e.artifactName,
      armFailed: !0,
    },
    agentId: ze(),
  });
}
function onDurablePublishArmSettled(e) {
  let { slug: t, url: r, liveDocLoss: i, settlement: d } = e;
  if (d.settled === "registered") {
    pullStaleWatchLifecycleNotices(t);
    return;
  }
  if (d.settled !== "unregistered" || !rr(t, d.reason)) return;
  let { reason: o, detail: l, serverMessage: p } = d,
    _ =
      i ??
      `This session will NOT be woken when ${isArtifactCommentsAvailable() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`,
    S = getArmFailureAdvice(o);
  Er({
    slug: t,
    artifactName: formatArtifactDisplayName(e.getTitle, r),
    shortReason: "wake subscription not registered",
    event: `The durable wake subscription for ${r} was not registered (${o}${l !== void 0 ? `: ${l}` : ""}) \u2014 ${formatArmFailureReason(o, p)} ${_}${S === null ? "" : `; ${S}`} \u2014 do not claim to be subscribed to it meanwhile.`,
  });
}
function isFrameLiveRowConnecting(e) {
  return e.connected && !isMonitorSocketOpen(e.taskId);
}
function frameLiveArmRows(e, t) {
  let r = getArtifactState().live,
    i = new Set();
  for (let S of Object.values(e.taskRegistry.all()))
    if (isMonitorWsTask(S) && S.status === "running" && S.frameLive !== void 0)
      i.add(S.frameLive.slug);
  let d = getArtifactState().durable.stopLatches,
    o = (S) => (t === void 0 || S === t) && !i.has(S) && !d.isStopped(S),
    l = new Set(frameLiveStoppedRows(e, t).map((S) => S.slug)),
    p = [],
    _ = new Set();
  for (let S of r.inFlightSubscribes) {
    if (
      !o(S) ||
      (r.inFlightGenerations.get(S) ?? r.handoffGeneration) !==
        r.handoffGeneration ||
      r.retiredInFlightArms.has(S)
    )
      continue;
    _.add(S);
    let v = r.supervisors.get(S),
      E = v !== void 0 && !v.stopped ? v : void 0;
    p.push({
      slug: S,
      state: "arming",
      reconnect: E?.taskId !== void 0,
      failures: E?.consecutiveFailures ?? 0,
      ...(E?.lastFailure !== void 0 && { lastFailure: E.lastFailure }),
    });
  }
  for (let S of r.supervisors.values()) {
    if (!o(S.slug) || _.has(S.slug) || S.stopped || S.timer === void 0)
      continue;
    if ((_.add(S.slug), l.has(S.slug))) continue;
    p.push({
      slug: S.slug,
      state: "backing_off",
      failures: S.consecutiveFailures,
      maxFailures: r.rewatchTiming.maxConsecutiveFailures,
      nextAt: S.nextRewatchAt ?? Date.now(),
      ...(S.lastFailure !== void 0 && { lastFailure: S.lastFailure }),
    });
  }
  for (let [S, v] of r.armOutcomes) {
    if (!o(S) || _.has(S)) continue;
    p.push({ slug: S, state: v.outcome, reason: v.reason, at: v.at });
  }
  return p;
}
export {
  setSessionWorking,
  isSessionWorking,
  subscribeSessionWorking,
  setSessionUserPromptPending,
  isSlugNamedByStrictHumanTurn,
  formatArmFailureReason,
  describeHttpFailureOrigin,
  getArmFailureAdvice,
  markArmInFlight,
  settleArmAttempt,
  clearArmFailuresByReason,
  forgetArmFailuresForSlug,
  durableWakeArmRows,
  labelledArmedVia,
  parseArmedVia,
  armedViaWording,
  isClaimableAutoReactSubscription,
  killAutoReactSubscriptions,
  hasStoppableAutoReactSupervision,
  frameLiveWatchRows,
  frameLiveStoppedRows,
  teardownFrameLiveForProcessHandoff,
  unwatchFrameLive,
  endFrameLiveWatchOfDeletedArtifact,
  watchFrameLive,
  knownNonEditor,
  REPLIES_CONSENT_WRITER,
  settleRepliesConsent,
  noteRepliesConsentAsk,
  takeRepliesConsentAsk,
  approveTakenRepliesConsent,
  repliesConsentDeclined,
  touchFrameLiveForMcpWrite,
  resumeFrameLiveAutoReplies,
  onArmSettled,
  slugRepliesWiredHere,
  watchArtifactFromStartup,
  maybeSubscribeFrameLive,
  isSocketHoldingPublishContext,
  makeArtifactReadVersionReader,
  frameLivePublishFindsConnected,
  frameLivePublishSkipReason,
  AUTO_REPLIES_ARMED_TOKEN,
  AUTO_REPLIES_PAUSED_ROW,
  AUTO_REPLIES_YIELDED_ROW,
  AUTO_REPLIES_DECLINED_ROW,
  AUTO_REPLIES_DENIED_ROW,
  frameLiveSkipReasonPhrase,
  frameLiveSubscriptionLine,
  subscribeFrameLiveOnAttach,
  noRewatchAdvice,
  pullStaleWatchLifecycleNotices,
  onDurablePublishArmSettled,
  isFrameLiveRowConnecting,
  frameLiveArmRows,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { withDeadline } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { escapeHtmlText } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { enqueueSdkEvent, isCloudEnvironmentSession, normalizePlainName, collectLocalBridgeSessionIds, isCloudSessionKnownLocally } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { describeAxiosError } from "./chunk-x4q0245z.js";
import { TOOL_USE_SUMMARY_MAX_CHARS } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { normalizeSingleLineText } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import * as lazy_chunk_1y2g140m from "../权限系统/chunk-1y2g140m.js";
import * as lazy_listBridgePeerSessions_g159fp6a from "./listBridgePeerSessions.g159fp6a.js";
import * as lazy_hasCloudPeerAccess_debnsz8e from "../../01-核心基础设施/核心工具-未归类/hasCloudPeerAccess.debnsz8e.js";
import * as lazy_chunk_ds47w88s from "../会话-历史-恢复/chunk-ds47w88s.js";
import * as lazy_chunk_tyce0p0b from "./chunk-tyce0p0b.js";

function getPendingActionRequestId(e) {
  for (let t of [e?.request_id, e?.suppressed_request_id])
    if (typeof t === "string" && t.length > 0) return t;
  return;
}
var B = 32;
function R(e) {
  let { display_tool_name: t, raw_command: i } = e;
  return {
    tool_name: e.tool_name,
    ...(t === void 0 ? {} : { display_tool_name: t }),
    action_description: truncate(e.action_description, TOOL_USE_SUMMARY_MAX_CHARS),
    ...(i === void 0 ? {} : { raw_command: truncate(i, TOOL_USE_SUMMARY_MAX_CHARS) }),
    tool_use_id: e.tool_use_id,
    request_id: e.request_id,
    ...(e.suppressed_request_id === void 0
      ? {}
      : { suppressed_request_id: e.suppressed_request_id }),
  };
}
function buildPendingActionsList(e, t) {
  return [e, ...t.slice(0, B - 1).map(R)];
}
function parseInboundAvailability(e) {
  switch (e?.cross_session_inbound) {
    case "unavailable":
      return { acceptsPeerMessages: !1 };
    case "available":
      return { acceptsPeerMessages: !0 };
    default:
      return;
  }
}
class SessionStateStore {
  stateChanged = Le();
  userDecisionPendingChanged = Le();
  userDecisionsPending = 0;
  onStateChanged;
  getPendingActionDetails;
  onWaitingOnUserChanged;
  onTurnStarting;
  onMetadataChanged;
  onInternalMetadataChanged;
  onPermissionModeChanged;
  onProactivityLevelChanged;
  onActiveGoalChanged;
  onAutocompactInputsChanged;
  onConversationReset;
  currentState = "idle";
  hasPendingAction = !1;
  hasTaskSummary = !1;
  hasTerminalGoalSnapshot = !1;
  mainLoopRefcount = 0;
  nestedBlockedChains = {};
  nestedBlockedChainCount = 0;
  droppedChainAgentIds = {};
  lastWaitingOnUser = !1;
  chainExcessLogged = !1;
  beginUserDecision() {
    if (((this.userDecisionsPending += 1), this.userDecisionsPending === 1))
      this.userDecisionPendingChanged.emit(!0);
  }
  get userDecisionPending() {
    return this.userDecisionsPending > 0;
  }
  endUserDecision() {
    if (this.userDecisionsPending === 0) return;
    if (((this.userDecisionsPending -= 1), this.userDecisionsPending === 0))
      this.userDecisionPendingChanged.emit(!1);
  }
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return (
      this.currentState === "requires_action" &&
      this.mainLoopRefcount - this.nestedBlockedChainCount <= 0
    );
  }
  setMainLoopRefcount(e) {
    ((this.mainLoopRefcount = e), this.emitIfWaitingChanged());
  }
  emitIfWaitingChanged() {
    this.checkChainInvariant();
    let e = this.waitingOnUser;
    if (e !== this.lastWaitingOnUser)
      ((this.lastWaitingOnUser = e), this.onWaitingOnUserChanged?.(e));
  }
  checkChainInvariant() {
    if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
      if (!this.chainExcessLogged)
        ((this.chainExcessLogged = !0),
          writeDiagnosticsEvent("warn", "nested_chain_count_exceeds_refcount", {
            nested_blocked_chain_count: this.nestedBlockedChainCount,
            main_loop_refcount: this.mainLoopRefcount,
            session_state: this.currentState,
          }));
    } else this.chainExcessLogged = !1;
  }
  reteeWaitingOnUser() {
    this.onWaitingOnUserChanged?.(this.waitingOnUser);
  }
  notifyNestedPromptBlocking(e) {
    if (a.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) return;
    if (this.droppedChainAgentIds[e]) return;
    let t = this.nestedBlockedChains[e] ?? 0;
    if (((this.nestedBlockedChains[e] = t + 1), t === 0))
      this.nestedBlockedChainCount++;
    this.emitIfWaitingChanged();
  }
  notifyNestedPromptUnblocking(e) {
    let t = (this.nestedBlockedChains[e] ?? 0) - 1;
    if (t > 0) this.nestedBlockedChains[e] = t;
    else if (this.nestedBlockedChains[e] !== void 0) {
      if (
        (delete this.nestedBlockedChains[e], this.nestedBlockedChainCount > 0)
      )
        this.nestedBlockedChainCount--;
    }
    this.emitIfWaitingChanged();
  }
  dropNestedBlockedChain(e) {
    if (
      ((this.droppedChainAgentIds[e] = !0),
      this.nestedBlockedChains[e] !== void 0)
    ) {
      if (
        (delete this.nestedBlockedChains[e], this.nestedBlockedChainCount > 0)
      )
        this.nestedBlockedChainCount--;
      this.emitIfWaitingChanged();
    }
  }
  notifyTurnStarting(e, t) {
    this.onTurnStarting?.(e, t);
  }
  notifyStateChanged(e, t) {
    ((this.currentState = e),
      (this.lastWaitingOnUser = this.waitingOnUser),
      this.onStateChanged?.(e, t));
    try {
      this.stateChanged.emit(e);
    } catch (i) {
      logError(i);
    }
    if (e === "requires_action" && t)
      ((this.hasPendingAction = !0),
        this.onMetadataChanged?.(this.pendingActionPatch(t)));
    else if (this.hasPendingAction)
      ((this.hasPendingAction = !1),
        this.onMetadataChanged?.({
          pending_action: null,
          pending_actions: null,
        }));
    if (e === "running") this.wipeTurnScopedMetadata();
    if (e === "idle" && this.hasTaskSummary)
      ((this.hasTaskSummary = !1),
        this.notifyMetadataChanged({ task_summary: null }));
    if (a.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS)
      enqueueSdkEvent({ type: "system", subtype: "session_state_changed", state: e });
  }
  republishPendingAction(e) {
    ((this.hasPendingAction = !0),
      this.onMetadataChanged?.(this.pendingActionPatch(e)));
  }
  wipeTurnScopedMetadata() {
    if (
      (this.onMetadataChanged?.({ post_turn_summary: null, recap: null }),
      this.hasTerminalGoalSnapshot)
    )
      ((this.hasTerminalGoalSnapshot = !1),
        this.onMetadataChanged?.({ goal: null }));
  }
  adoptRestoredPendingAction() {
    this.hasPendingAction = !0;
  }
  pendingActionPatch(e) {
    let i = (this.getPendingActionDetails?.(e.request_id) ?? [])
      .filter((r) => r !== e)
      .reverse();
    return { pending_action: e, pending_actions: buildPendingActionsList(e, i) };
  }
  notifyMetadataChanged(e) {
    if ((this.onMetadataChanged?.(e), "goal" in e))
      this.hasTerminalGoalSnapshot = e.goal?.met === !0;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = !0;
      enqueueSdkEvent({
        type: "system",
        subtype: "task_summary",
        detail: e.task_summary ?? null,
      });
    }
  }
  workerPermissionModeRecordEnabled = !1;
  get isWorkerPermissionModeRecordEnabled() {
    return this.workerPermissionModeRecordEnabled;
  }
  enableWorkerPermissionModeRecord() {
    this.workerPermissionModeRecordEnabled = !0;
  }
  notifyPermissionModeChanged(e) {
    this.onPermissionModeChanged?.(e);
  }
  notifyProactivityLevelChanged() {
    this.onProactivityLevelChanged?.();
  }
  notifyInternalMetadataChanged(e) {
    this.onInternalMetadataChanged?.(e);
  }
  notifyActiveGoalChanged(e) {
    this.onActiveGoalChanged?.(e);
  }
  notifyAutocompactInputsChanged() {
    this.onAutocompactInputsChanged?.();
  }
  notifyConversationReset() {
    this.onConversationReset?.();
  }
}
function formatContainerRestartReminder(e) {
  return `<system-reminder>
The container was restarted. The following background tasks were running and are now stopped:
${e.map(
  (i) => `- ${escapeHtmlText(i.description || "(no description)")} (task ${escapeHtmlText(i.task_id)})`,
).join(`
`)}
Re-create them if still needed.
</system-reminder>`;
}
var REMOTE_CONTROL_LABEL = "Remote Control";
function getSessionTransportLabel(e) {
  return isCloudEnvironmentSession(e) ? "cloud" : REMOTE_CONTROL_LABEL;
}
function getSessionTitleOrDefault(e) {
  return normalizePlainName(e) ?? "(untitled)";
}
var M = 300000;
class BridgeSessionListingCache {
  listed = void 0;
  inFlight = void 0;
  record(e, t, i) {
    this.listed = { at: Date.now(), listed: e, identityKey: t, truncated: i };
  }
  forget() {
    this.listed = void 0;
  }
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var bridgeSessionListingCache = new Gt(() => new BridgeSessionListingCache());
async function refreshPeerIdentityOwner(e = { refresh: !0 }) {
  {
    let { primePeerIdentityOwner: t } = lazy_chunk_1y2g140m;
    await t(e);
  }
}
function m() {
  let { getPeerBridgeIdentity: e } = lazy_chunk_1y2g140m,
    t = e();
  return t?.live ? t.key : null;
}
async function loadBridgePeerSessionRows(e, t) {
  {
    let i = m();
    if (!i) return { rows: [], failed: !1, identityKey: null };
    let r = bridgeSessionListingCache.of(e),
      s = r.inFlight;
    if (s !== void 0 && s.identityKey === i) return s.promise;
    let { listBridgePeerSessions: o } = lazy_listBridgePeerSessions_g159fp6a,
      u = { record: void 0 },
      c = Date.now(),
      g = (async () => {
        try {
          let f = { failed: !1, truncated: !1 },
            _;
          try {
            _ = await o(f, t);
          } catch (y) {
            return (
              logForDebugging(
                `[bridge:population] fetch threw: ${l(y)} \u2014 treated as failed`,
                { level: "warn" },
              ),
              { rows: [], failed: !0, identityKey: i }
            );
          }
          return (
            logForDebugging(
              `[bridge:population] fetched ${_.length} rows in ${Date.now() - c}ms${f.failed ? " (FAILED \u2014 not recordable)" : ""}${f.truncated ? " (truncated at page budget)" : ""}`,
            ),
            {
              rows: _,
              failed: f.failed,
              ...(f.truncated && { truncated: !0 }),
              identityKey: i,
            }
          );
        } finally {
          r.settle(u.record);
        }
      })();
    return ((u.record = { identityKey: i, promise: g }), r.begin(u.record), g);
  }
  return { rows: [], failed: !1, identityKey: null };
}
function isBridgeRowsIdentityCurrent(e) {
  {
    let t = m();
    return t !== null && e.identityKey === t;
  }
  return !1;
}
function recordBridgeSessionRows(e, t, i) {
  {
    let r = m();
    if (!r) return;
    if (t.identityKey !== r) {
      logForDebugging(
        "[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one",
      );
      return;
    }
    let s = bridgeSessionListingCache.of(e);
    if (t.failed) {
      let o = s.listed;
      if (o !== void 0 && o.identityKey === r)
        (s.forget(),
          logForDebugging(
            "[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)",
          ));
      return;
    }
    (s.record(i, r, t.truncated === !0),
      logForDebugging(
        `[bridge:population] recorded ${i.length} bridge rows (cloud-deduped)`,
      ));
  }
}
function forgetBridgeSessionRows(e, t) {
  {
    let i = m();
    if (!i || t.identityKey !== i) return;
    let r = bridgeSessionListingCache.of(e),
      s = r.listed;
    if (s !== void 0 && s.identityKey === i)
      (r.forget(),
        logForDebugging(
          "[bridge:population] forgot the recorded set (an unrecordable listing superseded it)",
        ));
  }
}
function getWarmBridgeSessionRows(e) {
  return getWarmBridgeSessionListing(e)?.rows;
}
function getWarmBridgeSessionListing(e) {
  {
    let t = m(),
      i = bridgeSessionListingCache.of(e).listed;
    if (!t || i === void 0 || i.identityKey !== t) return;
    let r = Date.now() - i.at;
    if (r >= 0 && r < M)
      return (
        logForDebugging(
          `[bridge:population] warm recorded set: ${i.listed.length} rows (age ${r}ms)`,
        ),
        { rows: i.listed, truncated: i.truncated }
      );
  }
  return;
}
function excludeLocallyKnownBridgeRows(e, t, i) {
  let r = collectLocalBridgeSessionIds(t),
    s = new Set(i.filter((o) => !isCloudSessionKnownLocally(t, o.id)).map((o) => sessionIdBody(o.id)));
  return e.filter((o) => {
    let u = sessionIdBody(o.id);
    return !r.has(u) && !s.has(u);
  });
}
function excludeCloudKnownBridgeRows(e, t) {
  return excludeLocallyKnownBridgeRows(e, [], t);
}
function isCloudListUnavailable(e) {
  return e === "timeout" || e === "fetch_failed";
}
var D = 30000,
  P = 5000;
class CloudPeerSessionsCache {
  memo = void 0;
  inFlight = void 0;
  record(e, t, i) {
    if (i !== S()) return;
    this.memo = { at: Date.now(), sessions: e, truncated: t, credential: i };
  }
  begin(e, t) {
    this.inFlight = { promise: e, credential: t };
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0;
  }
  warm(e) {
    let t = this.memo;
    if (t === void 0 || t.credential !== e) return;
    let i = Date.now() - t.at;
    return i >= 0 && i < D ? t : void 0;
  }
}
function S() {
  let { walkCredentialKey: e } = lazy_chunk_1y2g140m;
  return e();
}
var cloudPeerSessionsCache = new Gt(() => new CloudPeerSessionsCache());
async function listCloudPeerSessions(e, t) {
  {
    let { hasCloudPeerAccess: i } = lazy_hasCloudPeerAccess_debnsz8e;
    if (!i()) return { sessions: [], unavailable: "gate_off" };
    let { walkCcrSessionList: r } = lazy_chunk_ds47w88s,
      s = cloudPeerSessionsCache.of(e),
      o = S(),
      u = s.warm(o);
    if (u !== void 0)
      return {
        sessions: u.sessions,
        unavailable: void 0,
        ...(u.truncated && { truncated: !0 }),
      };
    let c = s.inFlight,
      g = c !== void 0 && c.credential === o ? c.promise : A(s, r, o, t),
      f = await withDeadline(g, P);
    if (f === void 0)
      return (
        logForDebugging(
          `[agents:cloud] session list not ready within ${P}ms \u2014 not searched this call, disclosing`,
          { level: "warn" },
        ),
        { sessions: [], unavailable: "timeout" }
      );
    if (o !== S())
      return (
        logForDebugging(
          "[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing",
          { level: "warn" },
        ),
        { sessions: [], unavailable: "fetch_failed" }
      );
    return f;
  }
  return { sessions: [], unavailable: void 0 };
}
function A(e, t, i, r) {
  let s = a.CLAUDE_CODE_REMOTE === !0,
    o = s ? sessionIdBody(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (o === "") {
    let { getPeerBridgeIdentity: c } = lazy_chunk_1y2g140m,
      g = c()?.bridgeSessionId;
    o = typeof g === "string" ? sessionIdBody(g) : "";
  }
  let u = (async () => {
    let c,
      g = { truncated: !1 };
    try {
      c = await t({
        status: g,
        throwOnError: !0,
        exhaustive: !0,
        includeBridgeKind: s,
        credentials: r,
      });
    } catch (d) {
      return (
        logForDebugging(
          `[agents:cloud] session list threw: ${d instanceof TypeError ? "malformed session-list response \u2014 " : ""}${describeAxiosError(d)}`,
          { level: "error" },
        ),
        { sessions: [], unavailable: "fetch_failed" }
      );
    }
    let f = !1;
    if (s) {
      let { isRemoteControlPeerUnreachableFromHere: d } = lazy_chunk_tyce0p0b;
      f = d();
    }
    let y = (o === "" ? c : c.filter((d) => sessionIdBody(d.id) !== o)).map((d) => {
      let v = Date.parse(d.last_event_at ?? d.created_at ?? "");
      return {
        id: d.id,
        title: d.title ?? null,
        lastActive: Number.isNaN(v) ? void 0 : v,
        workerStatus:
          d.worker_status === "running" ||
          d.worker_status === "idle" ||
          d.worker_status === "requires_action"
            ? d.worker_status
            : void 0,
        remoteControl: d.environment_kind === "bridge",
        unreachableFromHere: f && d.environment_kind === "bridge",
        ...parseInboundAvailability(d.external_metadata),
        ...(d.environment_kind === "bridge" &&
          d.connection_status === "disconnected" && { offline: !0 }),
      };
    });
    return (
      e.record(y, g.truncated, i),
      {
        sessions: y,
        unavailable: void 0,
        ...(g.truncated && { truncated: !0 }),
      }
    );
  })();
  return (e.begin(u, i), u.finally(() => e.settle(u)), u);
}
function getWarmCloudSessions(e) {
  {
    let { hasCloudPeerAccess: t } = lazy_hasCloudPeerAccess_debnsz8e;
    if (!t()) return;
    return cloudPeerSessionsCache.of(e).warm(S())?.sessions;
  }
  return;
}
function formatUnreachablePeerRefusal(e, t, i) {
  try {
    if (!getWarmCloudSessions(e)?.find((o) => sessionIdBody(o.id) === sessionIdBody(t))?.unreachableFromHere) return;
    let { formatUnreachableElevatedRefusal: s } = lazy_chunk_tyce0p0b;
    return s(i);
  } catch (r) {
    logForDebugging(
      `[agents:cloud] warm unreachable lookup failed (${normalizeSingleLineText(l(r))}) \u2014 treating as not known unreachable`,
      { level: "warn" },
    );
    return;
  }
}
var CANNOT_RECEIVE_MESSAGES_LABEL = "can't receive cross-session messages (off in that session)";
function formatCannotReceiveRefusal(e, t, i) {
  try {
    let r = sessionIdBody(t);
    if (!(
      getWarmCloudSessions(e)?.some((o) => sessionIdBody(o.id) === r && o.acceptsPeerMessages === !1) ===
        !0 ||
      getWarmBridgeSessionRows(e)?.some((o) => sessionIdBody(o.id) === r && o.acceptsPeerMessages === !1) === !0
    ))
      return;
    return `Not sent: '${i}' ${CANNOT_RECEIVE_MESSAGES_LABEL} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (r) {
    logForDebugging(
      `[agents:cloud] warm cannot-receive lookup failed (${normalizeSingleLineText(l(r))}) \u2014 treating as unknown`,
      { level: "warn" },
    );
    return;
  }
}
function isPeerInboundUnconfirmed(e, t) {
  try {
    let i = sessionIdBody(t),
      r = getWarmCloudSessions(e)?.find((o) => sessionIdBody(o.id) === i),
      s = getWarmBridgeSessionRows(e)?.find((o) => sessionIdBody(o.id) === i);
    if ((r !== void 0 && !r.remoteControl) || (s !== void 0 && isCloudEnvironmentSession(s)))
      return !1;
    if (s?.inboundReportUnavailable && r?.acceptsPeerMessages === void 0)
      return !1;
    return !(r?.acceptsPeerMessages === !0 || s?.acceptsPeerMessages === !0);
  } catch (i) {
    return (
      logForDebugging(
        `[agents:cloud] warm inbound-report lookup failed (${normalizeSingleLineText(l(i))}) \u2014 treating as unreported`,
        { level: "warn" },
      ),
      !0
    );
  }
}
export {
  getPendingActionRequestId,
  buildPendingActionsList,
  parseInboundAvailability,
  SessionStateStore,
  formatContainerRestartReminder,
  REMOTE_CONTROL_LABEL,
  getSessionTransportLabel,
  getSessionTitleOrDefault,
  refreshPeerIdentityOwner,
  loadBridgePeerSessionRows,
  isBridgeRowsIdentityCurrent,
  recordBridgeSessionRows,
  forgetBridgeSessionRows,
  getWarmBridgeSessionRows,
  getWarmBridgeSessionListing,
  excludeLocallyKnownBridgeRows,
  excludeCloudKnownBridgeRows,
  isCloudListUnavailable,
  listCloudPeerSessions,
  getWarmCloudSessions,
  formatUnreachablePeerRefusal,
  CANNOT_RECEIVE_MESSAGES_LABEL,
  formatCannotReceiveRefusal,
  isPeerInboundUnconfirmed,
};

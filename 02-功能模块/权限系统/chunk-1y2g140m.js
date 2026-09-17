// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getSessionRuntimeState, toCompatSessionId, sessionIdBody, isSelfAddressableSessionId } from "./chunk-ynkf3yy4.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { sanitizeDisplayName, buildBridgeAddress, updateSessionBridgeId } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getExternalPermissionMode } from "./chunk-e4pfvp7x.js";
import { setAttestationSenderDropWriter, clearAttestationSenderDropWriter } from "../远程控制-Bridge/chunk-5ne99rq3.js";
function l(e, o) {
  let t = getSessionRuntimeState().dropSenderWriterByHandle;
  if (e !== null && e !== o) {
    let i = t.get(e);
    if (i) clearAttestationSenderDropWriter(i);
  }
  if (o !== null && o !== e && !o.outboundOnly) {
    let i = t.get(o);
    if (!i)
      ((i = (r) => {
        o.writeSdkMessages([r]);
      }),
        t.set(o, i));
    setAttestationSenderDropWriter(i);
  }
}
function setSdkHostedBridgeHandle(e, o) {
  let t = getSessionRuntimeState(),
    i = a(e),
    r = t.sdkHostedHandle;
  ((t.sdkHostedHandle = i),
    updateSessionBridgeId(i ? toCompatSessionId(i.bridgeSessionId) : null, o).catch(() => {}),
    (t.lastReportedPermissionMode = void 0),
    (t.lastKnownPermissionMode = void 0),
    (t.lastReportedEffort = void 0),
    (t.lastKnownEffort = void 0),
    (t.lastReportedModel = void 0),
    (t.lastKnownModel = void 0),
    (t.lastReportedCrossSessionInbound = void 0),
    (t.lastKnownCrossSessionInbound = void 0),
    l(r, i));
}
function getSdkHostedBridgeHandle() {
  return getSessionRuntimeState().sdkHostedHandle;
}
function setReplBridgeHandle(e, o) {
  let t = getSessionRuntimeState(),
    i = a(e),
    r = t.replHandle;
  ((t.replHandle = i),
    (t.lastReportedPermissionMode = void 0),
    (t.lastKnownPermissionMode = void 0),
    (t.lastReportedEffort = void 0),
    (t.lastKnownEffort = void 0),
    (t.lastReportedModel = void 0),
    (t.lastKnownModel = void 0),
    (t.lastReportedCrossSessionInbound = void 0),
    (t.lastKnownCrossSessionInbound = void 0),
    l(r, i));
  let s = i ? toCompatSessionId(i.bridgeSessionId) : void 0;
  if (s !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = s;
  else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  updateSessionBridgeId(s ?? null, o).catch(() => {});
}
function getReplBridgeHandle() {
  return getSessionRuntimeState().replHandle;
}
function retireBridgeHandle(e, o) {
  let t = getSessionRuntimeState();
  if ((t.retiredHandles.add(e), t.replHandle === e)) setReplBridgeHandle(null, o);
  if (t.sdkHostedHandle === e) setSdkHostedBridgeHandle(null, o);
}
function reportBridgePermissionMode(e, o) {
  let t = getSessionRuntimeState(),
    i = t.replHandle ?? t.sdkHostedHandle;
  if (!i || i.outboundOnly) return;
  if (((t.lastKnownPermissionMode = e), e === "bypassPermissions")) return;
  let r = getExternalPermissionMode(e);
  if (t.lastReportedPermissionMode === r) return;
  ((t.lastReportedPermissionMode = r),
    i.reportMetadata({
      permission_mode: r,
      ...(o !== void 0 && { is_ultraplan_mode: o }),
    }));
}
function reseedBridgePermissionMode() {
  let e = getSessionRuntimeState();
  if (
    ((e.lastReportedPermissionMode = void 0),
    e.lastKnownPermissionMode !== void 0)
  )
    reportBridgePermissionMode(e.lastKnownPermissionMode);
}
function setSupervisedBridgeSession(e, o, t) {
  let i = isSelfAddressableSessionId(e);
  if (!i)
    logForDebugging(
      "[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface",
      { level: "warn" },
    );
  ((getSessionRuntimeState().supervisedBridgeSession = i
    ? { bridgeSessionId: e, owner: t, selfTitle: void 0 }
    : null),
    updateSessionBridgeId(i ? toCompatSessionId(e) : null, o).catch(() => {}));
}
function adoptSelfBridgeTitleFromRoster(e) {
  let o = getSessionRuntimeState().supervisedBridgeSession;
  if (o === null || getReplBridgeHandle() !== null || getSdkHostedBridgeHandle() !== null) return;
  o.selfTitle = u(e);
}
function u(e) {
  return typeof e === "string" && sanitizeDisplayName(e) !== "" ? e : void 0;
}
function d(e) {
  let o = walkCredentialKey(),
    t = getSessionRuntimeState(),
    i = t.peerIdentityKey;
  if (i !== null && i.host === e && i.credential === o) return i;
  let r = { host: e, credential: o };
  return ((t.peerIdentityKey = r), r);
}
function walkCredentialKey() {
  let { sameOwnerAccount: e } = import.meta.require("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    o = c(),
    t = getSessionRuntimeState(),
    i = t.walkCredentialKey;
  if (i !== null && e(i.owner, o)) return i;
  let r = { owner: o };
  return ((t.walkCredentialKey = r), r);
}
function c() {
  let { sessionsApiBearerFingerprint: e } = import.meta.require(
      "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
    ),
    { getStoredOauthAccountInfo: o } = import.meta.require(
      "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
    ),
    { env: t } = import.meta.require("../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js"),
    i = e();
  return {
    accountUuid: i ? `bearer:${i}` : void 0,
    organizationUuid: t.CLAUDE_CODE_ORGANIZATION_UUID || o()?.organizationUuid,
  };
}
async function primePeerIdentityOwner({ refresh: e, credentials: o }) {
  let { isCrossSessionMessagingEnabled: t } = import.meta.require(
    "../跨会话消息-UDS/chunk-rfb3s38d.js",
  );
  if (!t()) return;
  if (!(
    getReplBridgeHandle() !== null ||
    getSdkHostedBridgeHandle() !== null ||
    getSessionRuntimeState().supervisedBridgeSession !== null
  )) {
    let { hasCloudPeerAccess: p } = import.meta.require("../../01-核心基础设施/核心工具-未归类/hasCloudPeerAccess.debnsz8e.js");
    if (!p()) return;
  }
  let { primeSessionsApiBearer: r } = import.meta.require(
      "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js",
    ),
    s = r({ refresh: e, credentials: o }).catch(() => {});
  if (e) {
    await s;
    return;
  }
  let { withDeadline: f } = import.meta.require("../../01-核心基础设施/核心工具-并发与缓存/withTimeout.0mr4qg1r.js");
  await f(s, g);
}
var g = 750;
function getPeerBridgeIdentity() {
  let e = getReplBridgeHandle() ?? getSdkHostedBridgeHandle();
  if (e)
    return {
      key: d(e),
      bridgeSessionId: e.bridgeSessionId,
      selfTitle: e.selfTitle,
      live: ic(),
    };
  let o = getSessionRuntimeState().supervisedBridgeSession;
  return o
    ? {
        key: d(o),
        bridgeSessionId: o.bridgeSessionId,
        selfTitle: o.selfTitle,
        live: !0,
      }
    : null;
}
function reportBridgeCrossSessionInbound(e) {
  let o = getSessionRuntimeState(),
    t = o.replHandle ?? o.sdkHostedHandle;
  if (!t || t.outboundOnly) return;
  o.lastKnownCrossSessionInbound = e;
  let i = e ? "available" : "unavailable";
  if (o.lastReportedCrossSessionInbound === i) return;
  ((o.lastReportedCrossSessionInbound = i),
    t.reportMetadata({ cross_session_inbound: i }));
}
function reseedBridgeCrossSessionInbound() {
  let e = getSessionRuntimeState();
  if (
    ((e.lastReportedCrossSessionInbound = void 0),
    e.lastKnownCrossSessionInbound !== void 0)
  )
    reportBridgeCrossSessionInbound(e.lastKnownCrossSessionInbound);
}
function reportBridgeModel(e) {
  let o = getSessionRuntimeState(),
    t = o.replHandle ?? o.sdkHostedHandle;
  if (!t || t.outboundOnly) return;
  if (((o.lastKnownModel = e), o.lastReportedModel === e)) return;
  ((o.lastReportedModel = e), t.reportMetadata({ model: e }));
}
function reseedBridgeModel() {
  let e = getSessionRuntimeState();
  if (((e.lastReportedModel = void 0), e.lastKnownModel !== void 0))
    reportBridgeModel(e.lastKnownModel);
}
function getSelfBridgeCompatId() {
  let e = getPeerBridgeIdentity();
  return e ? toCompatSessionId(e.bridgeSessionId) : void 0;
}
function ownBridgePeerAddress() {
  let e = getSelfBridgeCompatId();
  return e ? buildBridgeAddress(e) : void 0;
}
function getRemoteControlSessionCompatId() {
  let e = getReplBridgeHandle();
  return e && !e.outboundOnly ? toCompatSessionId(e.bridgeSessionId) : void 0;
}
function getSelfBridgeTitle() {
  return getPeerBridgeIdentity()?.selfTitle;
}
function setSelfBridgeTitle(e, o) {
  let t = getReplBridgeHandle() ?? getSdkHostedBridgeHandle();
  if (t && sessionIdBody(t.bridgeSessionId) === sessionIdBody(e)) t.selfTitle = u(o);
}
function a(e) {
  return e !== null && getSessionRuntimeState().retiredHandles.has(e) ? null : e;
}
export {
  setSdkHostedBridgeHandle,
  getSdkHostedBridgeHandle,
  setReplBridgeHandle,
  getReplBridgeHandle,
  retireBridgeHandle,
  reportBridgePermissionMode,
  reseedBridgePermissionMode,
  setSupervisedBridgeSession,
  adoptSelfBridgeTitleFromRoster,
  walkCredentialKey,
  primePeerIdentityOwner,
  getPeerBridgeIdentity,
  reportBridgeCrossSessionInbound,
  reseedBridgeCrossSessionInbound,
  reportBridgeModel,
  reseedBridgeModel,
  getSelfBridgeCompatId,
  ownBridgePeerAddress,
  getRemoteControlSessionCompatId,
  getSelfBridgeTitle,
  setSelfBridgeTitle,
};

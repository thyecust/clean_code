// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ff, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Nr, k8t } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getSettingsForSource, getSettingsWithErrors } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { PERMISSION_MODES } from "./chunk-e4pfvp7x.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { R4e, Dwe, Xdn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getBridgeHostState } from "../../01-核心基础设施/共享小工具-未细化/bridge-state-containers.js";
import { Nu } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
function isHarborKiteModeEmitEnabled() {
  return H("tengu_harbor_kite_mode_emit", !0);
}
function O() {
  switch (I().decidedBy) {
    case "policySettings":
      return "managed-setting";
    case "repoSettings":
      return "repo-setting";
    case "invalidSetting":
      return "invalid-setting";
    case "flagSettings":
    case "userSettings":
    case void 0:
      return "explicit-setting";
  }
}
var p = { accept: 0, hold: 1, refuse: 2 },
  Q = 100,
  P = new Set(PERMISSION_MODES);
function setInboundModeGetter(e) {
  if (e !== null)
    ((getBridgeHostState().inbound.shuttingDown = !1),
      x(),
      (getBridgeHostState().inbound.modeAtUnwire = void 0));
  else {
    let o = getBridgeHostState().inbound.getCurrentMode;
    if (o !== null)
      try {
        getBridgeHostState().inbound.modeAtUnwire = o();
      } catch {
        getBridgeHostState().inbound.modeAtUnwire = void 0;
      }
  }
  if (((getBridgeHostState().inbound.getCurrentMode = e), e !== null)) reapplyInboundPolicy("mode-changed");
}
function setPeerHeldHandler(e) {
  getBridgeHostState().inbound.onPeerHeld = e;
}
function setPeerReceiptSender(e) {
  getBridgeHostState().inbound.sendPeerReceipt = e;
}
function sendUndeliveredPeerReceipt(e, o) {
  getBridgeHostState().inbound.sendPeerReceipt?.(
    { mode: "prompt", agentId: ze(), value: "", origin: e },
    o,
  );
}
function setInboundAvailabilityPublisher(e) {
  let o = getBridgeHostState().inbound;
  if (
    ((o.publishAvailability = e),
    o.unsubscribeAvailabilityRefresh?.(),
    (o.unsubscribeAvailabilityRefresh = null),
    e)
  )
    (publishInboundAvailability(), (o.unsubscribeAvailabilityRefresh = Ff(publishInboundAvailability)));
}
function publishInboundAvailability() {
  getBridgeHostState().inbound.publishAvailability?.(getSessionRefuseCause() === void 0);
}
function setCorrespondentRecorder(e) {
  getBridgeHostState().inbound.recordCorrespondent = e;
}
var F = 750;
function x() {
  if (getBridgeHostState().inbound.shutdownSettleHandle === null)
    getBridgeHostState().inbound.shutdownSettleHandle = Et(settleHeldPeerMessagesOnShutdown);
}
async function settleHeldPeerMessagesOnShutdown() {
  let e = getBridgeHostState().inbound;
  if (
    (e.shutdownSettleHandle?.(),
    (e.shutdownSettleHandle = null),
    (e.shuttingDown = !0),
    e.held.length === 0)
  )
    return;
  let o = e.held.splice(0, e.held.length);
  n(
    `[cross-session-inbound] shutdown: settling ${o.length} still-held peer message(s) as expired`,
  );
  let s = [];
  for (let t of o)
    (s.push(e.sendPeerReceipt?.(t, "expired")), e.onPeerHoldDropped?.(t));
  await Promise.race([Promise.allSettled(s), sleep(F, void 0, { unref: !0 })]);
}
function getAnnouncedHoldCause(e) {
  let { inbound: o } = getBridgeHostState();
  return o.held.includes(e) ? o.announced.get(e) : void 0;
}
function setPeerHoldDroppedHandler(e) {
  getBridgeHostState().inbound.onPeerHoldDropped = e;
}
function setPeerHoldReleasedHandler(e) {
  getBridgeHostState().inbound.onPeerHoldReleased = e;
}
function getConfiguredInboundPolicy() {
  return I().value;
}
function I() {
  let e, o;
  for (let s of ["policySettings", "flagSettings", "userSettings"]) {
    if (!Nr(s)) continue;
    let t = getSettingsForSource(s)?.crossSessionInbound;
    if (t !== void 0) {
      ((e = t), (o = s));
      break;
    }
  }
  for (let s of ["localSettings", "projectSettings"]) {
    if (!Nr(s)) continue;
    let t = getSettingsForSource(s)?.crossSessionInbound;
    if (t === void 0) continue;
    if (p[t] > p[e ?? "accept"]) ((e = t), (o = "repoSettings"));
    else if (
      t !== "accept" &&
      e !== void 0 &&
      p[t] === p[e] &&
      o !== "policySettings"
    )
      o = "repoSettings";
  }
  if (p[e ?? "accept"] < p.hold && N()) ((e = "hold"), (o = "invalidSetting"));
  return { value: e, decidedBy: o };
}
function N() {
  return getSettingsWithErrors().errors.some(
    (e) => e.path === k8t && e.severity === "warning" && !e.statusOnly,
  );
}
function b(e) {
  switch (e) {
    case "accept":
      return { policy: "accept" };
    case "hold":
      return { policy: "hold", holdCause: O() };
    case "refuse":
      return { policy: "refuse", refuseCause: "opt-out" };
  }
}
function w() {
  return isCrossSessionMessagingEnabled() ? void 0 : { policy: "refuse", refuseCause: "kill-switch" };
}
function _() {
  let e = w();
  if (e) return e;
  let o = getConfiguredInboundPolicy();
  if (o !== void 0) return b(o);
  let s = v();
  if (s === null) return { policy: "hold", holdCause: "mode-unknown" };
  if (!P.has(s.mode))
    return (
      n(
        `[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`,
      ),
      { policy: "hold", holdCause: "mode-unknown" }
    );
  return C(s)
    ? { policy: "hold", holdCause: "bypass-default" }
    : { policy: "accept" };
}
function S(e) {
  let o = w();
  if (o) return o;
  return k(e, !1);
}
function E(e) {
  return k(e, !0);
}
function k(e, o) {
  let s = getConfiguredInboundPolicy();
  if (s !== void 0) return b(s);
  if (e?.selfSent) return { policy: "accept" };
  let t = v();
  if (t === null || !P.has(t.mode)) {
    if (t !== null)
      n(
        `[cross-session-inbound] unrecognized permission mode '${t.mode}' (fail-closed \u2192 hold)`,
      );
    return { policy: "hold", holdCause: "mode-unknown" };
  }
  let i = classifyPermissionMode(t),
    a = o || isHarborKiteModeEmitEnabled() ? e?.fromMode : void 0;
  if (a !== void 0)
    return a === i
      ? { policy: "accept" }
      : { policy: "hold", holdCause: "mode-mismatch" };
  return i === "bypass"
    ? { policy: "hold", holdCause: "no-mode-asserted" }
    : { policy: "accept" };
}
function C(e) {
  return (
    e.mode === "bypassPermissions" ||
    (e.mode === "plan" && e.isBypassPermissionsModeAvailable)
  );
}
function classifyPermissionMode(e) {
  return C(e) ? "bypass" : "prompting";
}
function getInboundPolicy() {
  return _().policy;
}
function getPeerInboundPolicy(e) {
  return S(e).policy;
}
function v() {
  let e = getBridgeHostState().inbound.getCurrentMode;
  if (e === null)
    return (
      n(
        "[cross-session-inbound] permission-mode getter not wired (fail-closed \u2192 hold)",
      ),
      null
    );
  try {
    return e();
  } catch (o) {
    return (
      n(
        `[cross-session-inbound] mode getter threw (${l(o)}; fail-closed \u2192 hold)`,
      ),
      null
    );
  }
}
function needsPeerModeVerdict() {
  if (getConfiguredInboundPolicy() !== void 0) return !1;
  let e = v();
  if (e === null || !P.has(e.mode)) return !1;
  return C(e);
}
function gatePeerInboundMessage(e) {
  return R(e, S(m(e)));
}
function m(e) {
  let o = e.origin;
  if (!o || o.kind !== "peer") return;
  return { fromMode: o.fromMode, selfSent: o.selfSent };
}
function A(e) {
  let o;
  if (e.priority === "later") {
    let { priority: s, ...t } = e;
    o = Xdn(t, { receipt: "caller" });
  } else o = Xdn(e, { receipt: "caller" });
  if (!o.admitted)
    return (
      getBridgeHostState().inbound.sendPeerReceipt?.(e, "dropped", {
        dropReason: o.reason,
        droppedMsgIds: [],
      }),
      !1
    );
  return (getBridgeHostState().inbound.recordCorrespondent?.(e), !0);
}
function R(e, o) {
  let s = getBridgeHostState().inbound;
  switch ((publishInboundAvailability(), o.policy)) {
    case "accept":
      return (D("policy-accepts"), logFeatureOk("peer_inbound_gate"), "accept");
    case "refuse":
      return (
        logInboundRefused(
          o.refuseCause === "kill-switch"
            ? f(e)
            : `crossSessionInbound=refuse: ${f(e)}`,
          o.refuseCause,
        ),
        s.sendPeerReceipt?.(e, "refused"),
        "refused"
      );
    case "hold": {
      let { holdCause: t } = o;
      if (s.shuttingDown)
        return (
          n(
            `[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${f(e)}`,
          ),
          s.sendPeerReceipt?.(e, "expired"),
          logFeatureSad("peer_inbound_gate", "shutdown_expired"),
          "refused"
        );
      if (s.held.length >= Q) {
        let i = s.held.shift();
        if (i)
          (n(
            `[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${f(i)}`,
          ),
            s.sendPeerReceipt?.(i, "expired"),
            s.onPeerHoldDropped?.(i));
      }
      if (
        (s.held.push(e),
        x(),
        n(
          `[cross-session-inbound] held inbound peer message (${s.held.length} held, cause=${t}): ${f(e)}`,
        ),
        logFeatureSad("peer_inbound_gate", "held"),
        s.onPeerHeld)
      )
        (s.onPeerHeld(e, s.held.length, t), s.announced.set(e, t));
      return (s.sendPeerReceipt?.(e, "held"), "held");
    }
  }
}
function uqe(e) {
  if (!e) return "ungated";
  if (e.kind === "peer")
    return "hostInjected" in e && e.hostInjected === !0
      ? "host-injected"
      : "peer";
  if (
    e.kind === "task-notification" &&
    "subkind" in e &&
    e.subkind === "peer-send-message"
  )
    return "coordinator";
  return "ungated";
}
function isCrossSessionIngress({ ingressOrigin: e, inboundOrigin: o, envelopePeer: s = !1 }) {
  return s || (uqe(e) !== "ungated" && !j(e)) || o === R4e;
}
function j(e) {
  return (
    !!e &&
    e.kind === "peer" &&
    !("hostInjected" in e && e.hostInjected === !0) &&
    "inbound_origin" in e &&
    e.inbound_origin === Dwe
  );
}
function gateInboundMessageByOrigin(e, o) {
  switch (uqe(e)) {
    case "peer":
      return gatePeerInboundMessage(o);
    case "host-injected":
      return gateHostInjectedInboundMessage(o);
    case "coordinator":
      return G(o);
    case "ungated":
      return "accept";
  }
}
function getIngressRefuseCause(e) {
  switch (uqe(e)) {
    case "peer":
      return getSessionRefuseCause();
    case "coordinator":
    case "host-injected":
      return getConfiguredInboundPolicy() === "refuse" ? "opt-out" : void 0;
    case "ungated":
      return;
  }
}
function getSessionRefuseCause() {
  let e = _();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}
function B() {
  let e = getConfiguredInboundPolicy();
  return e !== void 0 ? b(e) : { policy: "accept" };
}
function G(e) {
  let o = getConfiguredInboundPolicy();
  if (o === void 0) return "accept";
  return R(e, b(o));
}
function gateHostInjectedInboundMessage(e) {
  return R(e, E(m(e)));
}
function logInboundRefused(e, o) {
  if ((publishInboundAvailability(), o === "kill-switch")) {
    (n(
      `[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`,
    ),
      logFeatureSad("peer_inbound_gate", "kill_switch"));
    return;
  }
  (n(`[cross-session-inbound] refused inbound peer message (${e})`),
    logFeatureSad("peer_inbound_gate", "refused"));
}
function reapplyInboundPolicy(e) {
  return (publishInboundAvailability(), D(e));
}
function M(e) {
  switch (uqe(e.origin)) {
    case "coordinator":
      return B();
    case "host-injected":
      return E(m(e));
    case "peer":
    case "ungated":
      return S(m(e));
  }
}
function D(e) {
  let o = getBridgeHostState().inbound,
    s = o.held;
  if (s.length === 0) return 0;
  let t = [],
    i = [],
    a = [],
    d = 0,
    h = 0;
  for (let r of s) {
    let u = M(r);
    if (u.policy === "accept") i.push(r);
    else if (u.policy === "refuse") {
      if (((d += 1), u.refuseCause === "kill-switch")) h += 1;
      (o.sendPeerReceipt?.(r, "refused"), o.onPeerHoldDropped?.(r));
    } else if ((t.push(r), o.announced.get(r) !== u.holdCause))
      a.push([r, u.holdCause]);
  }
  ((s.length = 0), s.push(...t));
  for (let [r, u] of a) (o.announced.set(r, u), o.onPeerHeld?.(r, s.length, u));
  if (d > 0)
    n(
      h === d
        ? `[cross-session-inbound] gate off \u2014 dropped ${d} parked peer message(s) (cross-session messaging disabled)`
        : `[cross-session-inbound] dropped ${d} held peer message(s) \u2014 policy is now refuse`,
    );
  if (i.length === 0) return 0;
  let c = [];
  for (let r of i)
    if (A(r)) (c.push(r), logFeatureOk("peer_inbound_gate"));
    else o.onPeerHoldDropped?.(r);
  if (
    (n(
      `[cross-session-inbound] released ${i.length} held peer message(s) (${e}) \u2014 ${c.length} admitted by the ingress guard; ${s.length} still held`,
    ),
    c.length > 0)
  )
    o.onPeerHoldReleased?.(c, e);
  for (let r of c) o.sendPeerReceipt?.(r, "delivered");
  return i.length;
}
function resolveHeldPeerMessage(e, o) {
  let s = getBridgeHostState().inbound,
    t = s.held.indexOf(e);
  if (t === -1) return "gone";
  let [i] = s.held.splice(t, 1);
  if (!i) return "gone";
  if (o === "approve") {
    let d = M(i);
    if (d.policy === "refuse") {
      let c = d.refuseCause === "kill-switch";
      return (
        n(
          `[cross-session-inbound] held peer message approved but policy is now refuse (${c ? "kill switch" : "opt-out"}) \u2014 dropped`,
        ),
        s.sendPeerReceipt?.(i, "refused"),
        s.onPeerHoldDropped?.(i),
        "dropped"
      );
    }
    if (!A(i))
      return (
        n(
          "[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release",
        ),
        s.onPeerHoldDropped?.(i),
        "dropped-by-guard"
      );
    return (
      n(
        "[cross-session-inbound] held peer message APPROVED \u2014 released to queue",
      ),
      logFeatureOk("peer_inbound_gate"),
      s.onPeerHoldReleased?.([i], "approved"),
      s.sendPeerReceipt?.(i, "delivered"),
      "delivered"
    );
  }
  n(
    `[cross-session-inbound] held peer message ${o === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`,
  );
  let a = o === "deny" ? "denied" : "expired";
  return (s.sendPeerReceipt?.(i, a), "dropped");
}
function getHeldPeerMessageCount() {
  return getBridgeHostState().inbound.held.length;
}
function isInboundShuttingDown() {
  return getBridgeHostState().inbound.shuttingDown;
}
function f(e) {
  let o =
      e.origin?.kind === "peer" && typeof e.origin.from === "string"
        ? e.origin.from
        : "unknown",
    s = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${Nu(o)} "${Nu(s, 60)}"`;
}
export {
  isHarborKiteModeEmitEnabled,
  setInboundModeGetter,
  setPeerHeldHandler,
  setPeerReceiptSender,
  sendUndeliveredPeerReceipt,
  setInboundAvailabilityPublisher,
  publishInboundAvailability,
  setCorrespondentRecorder,
  settleHeldPeerMessagesOnShutdown,
  getAnnouncedHoldCause,
  setPeerHoldDroppedHandler,
  setPeerHoldReleasedHandler,
  getConfiguredInboundPolicy,
  classifyPermissionMode,
  getInboundPolicy,
  getPeerInboundPolicy,
  needsPeerModeVerdict,
  gatePeerInboundMessage,
  uqe,
  isCrossSessionIngress,
  gateInboundMessageByOrigin,
  getIngressRefuseCause,
  getSessionRefuseCause,
  gateHostInjectedInboundMessage,
  logInboundRefused,
  reapplyInboundPolicy,
  resolveHeldPeerMessage,
  getHeldPeerMessageCount,
  isInboundShuttingDown,
};

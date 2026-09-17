// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 203 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { hU, Dse, Uor, Zy, NOTIFY_IDLE_PEER_FEATURE as RKt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { SD } from "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import { dK, BAe, bbt, mD, sendStampedControlToUdsSocket as t1e, registeredLivePeerForSocket as E7e, ownMessagingSocket as C$ } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { v7e } from "../后台任务-Shell管理/chunk-djserjj5.js";
import { cbe, Wee } from "../权限系统/chunk-4tar9p3n.js";
import { RPe, pdt, Ssn, nqe, fdt } from "./chunk-nhk351pe.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
async function K(e, r, s, i) {
  try {
    return await y(e, r, s, i);
  } catch (n) {
    return (
      h(n),
      f("cross_session_notify_idle", "subscribe_internal_error"),
      { ok: !1, reason: "send-failed", error: n }
    );
  }
}
async function y(e, r, s, i) {
  if (Wee() === "refuse") return t("requester-refuses-inbound");
  let n = C$();
  if (n === void 0) return t("no-inbox");
  let a = Zy(e);
  if (a === void 0) return t("unreachable-namespace");
  if (a === Zy(n)) return t("self-target");
  let o;
  try {
    o = await E7e(e);
  } catch {
    o = void 0;
  }
  if (o !== void 0 && !(o.features?.includes(RKt) ?? !1))
    return t("peer-unsupported");
  if (!Uor(n, a, o?.features, await x()) || !Dse(hU(n)))
    return t("unreachable-namespace");
  let p = P() !== "windows" ? o?.pid : void 0,
    u = SD(),
    l = Ssn(u.msg_id, r, e);
  if (!l.ok) return t(l.reason === "cap" ? "cap" : "unreachable-namespace");
  let b = l.priors;
  try {
    return (
      await t1e(
        e,
        {
          action: "notify_when_idle",
          from: hU(n),
          ...(i !== void 0 && { from_mode: i }),
        },
        u,
        { ...(p !== void 0 && { expectPeerPid: p }), storageV5: s },
      ),
      { ok: !0, peerKnownCapable: o !== void 0 }
    );
  } catch (d) {
    if (dK(d) === "gone") {
      fdt(u.msg_id);
      for (let c of b) fdt(c);
      return (
        f("cross_session_notify_idle", "subscribe_peer_gone"),
        { ok: !1, reason: "peer-gone", error: d }
      );
    }
    if (mD(d)) {
      fdt(u.msg_id);
      let c = b.some(nqe);
      return (
        f("cross_session_notify_idle", "subscribe_send_failed"),
        {
          ok: !1,
          reason: "send-failed",
          ...(c && { restoredEarlier: !0 }),
          error: d,
        }
      );
    }
    return (
      g("cross_session_notify_idle", "subscribe_send_uncertain"),
      { ok: !1, reason: "send-uncertain", error: d }
    );
  }
}
function t(e) {
  return (g("cross_session_notify_idle", m[e]), { ok: !1, reason: e });
}
function w(e) {
  return `notify_when_idle: ${e} is THIS session \u2014 nothing was subscribed; you already know when your own turn ends.`;
}
var m = {
  "requester-refuses-inbound": "subscribe_requester_refuses_inbound",
  "no-inbox": "subscribe_no_inbox",
  "self-target": "subscribe_self_target",
  "unreachable-namespace": "subscribe_unreachable_namespace",
  "peer-unsupported": "subscribe_peer_unsupported",
  cap: "subscribe_cap",
};
function _(e, r = !0) {
  let s = pdt(e);
  if (!r)
    return `Subscription sent to "${s}" \u2014 but whether it supports idle notices is unknown (no readable session-registry record vouches for it), so a notice may never come; you will be told if it lapses unheard. Do not rely on it.`;
  let i = cbe();
  if (i === "accept")
    return `Subscribed \u2014 you will get one notice here when "${s}" is next idle (or exits). Do not poll or wait for it; carry on.`;
  let n = ke();
  if (i === "hold")
    return n
      ? `Subscribed \u2014 "${s}" will send one notice when it is next idle (or exits), but this session holds ALL inbound peer traffic (crossSessionInbound: hold), so it will only be logged here, not delivered to you. Carry on; do not poll.`
      : `Subscribed \u2014 "${s}" will send one notice when it is next idle (or exits); this session holds ALL inbound peer traffic (crossSessionInbound: hold), so it will be shown to your user in the transcript, not delivered to you. Carry on; do not poll.`;
  let a =
    "that session runs in the same permission class as this one (or is one this session spawned)";
  return Wee() === "accept"
    ? `Subscribed \u2014 you will get one notice here when "${s}" is next idle (or exits), provided ${a} or asserts none; otherwise it is ${n ? "only logged here" : "shown to your user in the transcript"}. Do not poll or wait for it; carry on.`
    : `Subscribed \u2014 "${s}" will send one notice when it is next idle (or exits). It is delivered to you if ${a}; otherwise it is ${n ? "only logged here" : "shown to your user in the transcript"} (this session holds other inbound peer traffic). Carry on; do not poll.`;
}
function S(e, r) {
  if (e.ok) return "";
  switch (e.reason) {
    case "no-inbox":
      return "notify_when_idle needs this session to have a messaging inbox, and it has none \u2014 no notice will arrive.";
    case "self-target":
      return w("that address");
    case "requester-refuses-inbound":
      return "notify_when_idle: this session does not accept inbound cross-session traffic (messaging is off here or crossSessionInbound is refuse), so an idle notice could never be shown to you \u2014 nothing was subscribed.";
    case "unreachable-namespace":
      return "notify_when_idle: that session could not answer into this session's messaging inbox (different namespace, or an address it will not accept), so its idle notice could not be delivered here \u2014 nothing was subscribed.";
    case "peer-unsupported":
      return "notify_when_idle: that session runs a version without idle notices \u2014 nothing was subscribed. Ask your user, or message it and wait for its reply instead.";
    case "cap":
      return `notify_when_idle: this session already holds ${RPe} pending idle subscriptions \u2014 wait for some to fire or expire.`;
    case "peer-gone":
      return `notify_when_idle: no session is listening at that address any more; nothing was subscribed, and any earlier idle subscription to it is void${BAe(r)}`;
    case "send-failed": {
      let s = dK(e.error) === "busy" ? bbt(e.error) : ".";
      return e.restoredEarlier
        ? `notify_when_idle: the re-subscribe could not be sent; your earlier idle subscription to that session still stands${s}`
        : `notify_when_idle: the subscription could not be sent \u2014 no notice will arrive${s}`;
    }
    case "send-uncertain":
      return "notify_when_idle: sending the subscription did not complete cleanly, so it is unknown whether that session recorded it \u2014 a notice may or may not arrive. Do not rely on it.";
  }
}
function I(e, r) {
  let s = pdt(e);
  if (r.ok)
    return r.peerKnownCapable
      ? `You will be told here when ${s} is next idle.`
      : `Idle subscription sent to ${s}; whether it supports idle notices is unknown.`;
  switch (r.reason) {
    case "send-uncertain":
      return `The idle subscription for ${s} may not have been recorded; a notice may or may not arrive.`;
    case "peer-gone":
      return `No session is listening at ${s}'s address any more; no idle subscription.`;
    case "peer-unsupported":
      return `${s} runs a version without idle notices; no idle subscription.`;
    case "self-target":
      return "That address is this session; no idle subscription.";
    case "send-failed":
      return r.restoredEarlier
        ? `Re-subscribing to ${s} failed; the earlier idle subscription still stands.`
        : `The idle subscription for ${s} could not be set up; you will not be told when it goes idle.`;
    case "requester-refuses-inbound":
    case "no-inbox":
    case "unreachable-namespace":
    case "cap":
      return `The idle subscription for ${s} could not be set up; you will not be told when it goes idle.`;
  }
}
function N(e, r, s) {
  try {
    return {
      model: r.ok ? _(e, r.peerKnownCapable) : S(r, s),
      display: I(e, r),
    };
  } catch (i) {
    h(i);
    let n = r.ok
      ? "Idle subscription sent."
      : "The idle subscription could not be set up.";
    return { model: n, display: n };
  }
}
async function x() {
  let e = (await v7e()) ?? process.getuid?.();
  return e === void 0 ? [] : [e];
}
export {
  w as idleSelfTargetMessage,
  N as idleSubscriptionLines,
  K as subscribeToPeerIdle,
};

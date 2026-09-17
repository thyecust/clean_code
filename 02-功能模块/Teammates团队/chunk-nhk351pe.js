// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { K, ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { OSt } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Zy } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { yBt, BS } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hCe } from "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import { Nu, qI, dK, uN } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { Wee, Rsn, DPe } from "../权限系统/chunk-4tar9p3n.js";
import { isSaneEpochMs } from "../../01-核心基础设施/共享小工具-未细化/chunk-z36ns74j.js";
import { s, se, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var R = 43200000,
  RPe = 32,
  V = 3,
  L = 750,
  z = 30000,
  X = 750,
  D = 100,
  hsn = m(() =>
    c({
      action: k("notify_when_idle"),
      from: s(),
      msg_id: s(),
      from_mode: se().optional(),
    }),
  ),
  _sn = m(() =>
    c({
      action: k("peer_idle_notice"),
      orig_msg_id: s(),
      state: s(),
      finished_at: se().optional(),
      detail: se().optional(),
      from: se().optional(),
      from_mode: se().optional(),
    }),
  );
class F {
  subscribers = [];
  idle = !1;
  idleSince = 0;
  busyObserved = !1;
  turnEnded = !1;
  turnConversationId = void 0;
  parkedHoldBack = !1;
  exited = !1;
  inflight = new Set();
  inflightBatch = [];
  unavailableRetries = new Map();
  debounce = null;
  getLastTurnText = null;
  sendNotice = null;
  onSubscribed = null;
  pendingAnnounces = [];
  pendingAnnounceOverflow = 0;
  onReplayDone = null;
  registeredInboxOfPid = null;
  outstanding = [];
  onNotice = null;
  pendingNotices = [];
  pendingNoticeOverflow = 0;
  hostStatusUnsubscribe = null;
  reset() {
    (this.hostStatusUnsubscribe?.(),
      (this.hostStatusUnsubscribe = null),
      (this.subscribers.length = 0),
      (this.pendingAnnounces.length = 0),
      (this.pendingAnnounceOverflow = 0),
      (this.pendingNotices.length = 0),
      (this.pendingNoticeOverflow = 0),
      (this.onReplayDone = null),
      (this.idle = !1),
      (this.idleSince = 0),
      (this.busyObserved = !1),
      (this.turnEnded = !1),
      (this.turnConversationId = void 0),
      (this.parkedHoldBack = !1),
      (this.exited = !1),
      this.inflight.clear(),
      (this.inflightBatch = []));
    for (let e of this.unavailableRetries.values()) clearTimeout(e);
    if ((this.unavailableRetries.clear(), this.debounce))
      clearTimeout(this.debounce);
    ((this.debounce = null),
      (this.getLastTurnText = null),
      (this.sendNotice = null),
      (this.onSubscribed = null),
      (this.registeredInboxOfPid = null));
    for (let e of this.outstanding) clearTimeout(e.expiry);
    ((this.outstanding.length = 0), (this.onNotice = null));
  }
}
var d = new F(),
  j = 8,
  Y = 4,
  Q = 4;
function ysn(e, i, t, r, o, a, _, v) {
  if (!hCe(t))
    return (logFeatureSad("cross_session_notify_idle", "invalid_frame"), "invalid");
  let b = Zy(i);
  if (b === void 0)
    return (logFeatureSad("cross_session_notify_idle", "invalid_frame"), "invalid");
  if (Wee() === "refuse")
    return (logFeatureSad("cross_session_notify_idle", "refused_by_policy"), "refused");
  let u = d;
  if (u.exited)
    return (logFeatureSad("cross_session_notify_idle", "subscription_after_exit"), "full");
  O(Date.now());
  let p = u.subscribers,
    l = (S) => r !== void 0 && S.targetKey === b && S.verifiedPeerPid === r,
    I = p.findIndex(l),
    A = I !== -1 || u.inflightBatch.some(l),
    w = () => p.length >= RPe;
  if (I !== -1) p.splice(I, 1);
  else if (r !== void 0) {
    if (G(p, (S) => S.verifiedPeerPid === r) >= Y) {
      let S = p.findIndex((x) => x.verifiedPeerPid === r);
      if (S === -1) return N();
      M(p, S);
    } else if (w()) return N();
  } else if (!a) {
    let S = (x) => x.verifiedPeerPid === void 0 && !x.authenticated;
    if (G(p, S) >= j) {
      let x = p.findIndex(S);
      if (x === -1) return N();
      M(p, x);
    } else if (w()) return N();
  } else if (
    G(
      p,
      (x) =>
        x.verifiedPeerPid === void 0 && x.authenticated && x.targetKey === b,
    ) >= Q ||
    w()
  )
    return N();
  if (
    (p.push({
      targetKey: b,
      replyTarget: i,
      replyAddress: e,
      verifiedPeerPid: r,
      verifiedPeerProcStart: o,
      authenticated: a,
      fromMode: _,
      selfSent: v,
      origMsgId: t,
      requestedAt: Date.now(),
    }),
    n(
      `[peer-idle] subscription ${I === -1 ? "recorded" : "refreshed"} for ${Nu(e)} (${r === void 0 ? "no peer pid" : `pid ${r}`}${a ? ", authenticated" : ""}; ${p.length} live)`,
    ),
    !A)
  )
    U(e, r !== void 0);
  if (u.idle) P();
  return "recorded";
}
function JNt(e, i) {
  let t = d;
  if (!e && i) ((t.busyObserved = !0), (t.parkedHoldBack = !1));
  if (e === t.idle) return;
  if (((t.idle = e), e)) {
    if (t.busyObserved)
      ((t.turnEnded = !0),
        (t.idleSince = Date.now()),
        (t.turnConversationId = K()),
        (t.busyObserved = !1));
    else if (!t.turnEnded) t.idleSince = Date.now();
    if (((t.parkedHoldBack = DPe() > 0), t.subscribers.length > 0)) P();
    return;
  }
  if (t.debounce) (clearTimeout(t.debounce), (t.debounce = null));
}
function P(e = L) {
  if (d.debounce) return;
  ((d.debounce = setTimeout(Z, e)), d.debounce.unref?.());
}
function Z() {
  if (((d.debounce = null), !d.idle)) return;
  if ((O(Date.now()), d.subscribers.length === 0)) return;
  if (yBt() > 0) {
    P();
    return;
  }
  if (DPe() > 0) {
    ((d.parkedHoldBack = !0), P(z));
    return;
  }
  d.parkedHoldBack = !1;
  let e = QNt("idle").finally(() => {
    d.inflight.delete(e);
  });
  d.inflight.add(e);
}
async function QNt(e) {
  let i = d;
  if (e === "exited") {
    if (((i.exited = !0), i.inflight.size > 0))
      await Promise.all([...i.inflight].map((a) => a.catch(() => {})));
  }
  let t =
    e === "exited" && i.idle && yBt() === 0 && !i.parkedHoldBack && DPe() === 0
      ? "idle"
      : e;
  if ((O(Date.now()), i.subscribers.length === 0 || i.sendNotice === null))
    return;
  let r = i.sendNotice,
    o = i.subscribers.splice(0, i.subscribers.length);
  i.inflightBatch = i.inflightBatch.concat(o);
  try {
    await J(i, r, o, e, t);
  } catch (a) {
    (logError(a), logFeatureBad("cross_session_notify_idle", "flush_internal_error"));
  } finally {
    i.inflightBatch = i.inflightBatch.filter((a) => !o.includes(a));
  }
}
async function J(e, i, t, r, o) {
  if (Wee() === "refuse") {
    logFeatureSad("cross_session_notify_idle", "revoked_before_fire");
    return;
  }
  let a = e.turnEnded && e.turnConversationId === K(),
    _ = o === "idle" ? (a ? e.idleSince : void 0) : Date.now(),
    v = (l) => Rsn({ fromMode: l.fromMode, selfSent: l.selfSent }) === "accept",
    b =
      o === "idle" && a && t.some((l) => l.verifiedPeerPid !== void 0 && v(l))
        ? ee()
        : void 0,
    u = new Map();
  if (t.some((l) => l.verifiedPeerPid !== void 0))
    try {
      u =
        (await e.registeredInboxOfPid?.(
          t.flatMap((l) =>
            l.verifiedPeerPid === void 0 ? [] : [l.verifiedPeerPid],
          ),
        )) ?? new Map();
    } catch (l) {
      n(
        `[peer-idle] registry unreadable at fire time; notices carry no detail (${qI(String(l))})`,
      );
    }
  if (Wee() === "refuse") {
    logFeatureSad("cross_session_notify_idle", "revoked_before_fire");
    return;
  }
  if (r === "idle" && (!e.idle || yBt() > 0 || DPe() > 0)) {
    if ((B(t), e.idle)) {
      let l = DPe() > 0;
      ((e.parkedHoldBack = l), P(l ? z : L));
    }
    return;
  }
  let p = (l) => {
    if (l.verifiedPeerPid === void 0) return !1;
    let I = u.get(l.verifiedPeerPid);
    return I !== void 0 && Zy(I) === l.targetKey;
  };
  await Promise.all(
    t.map((l) => {
      let I = p(l);
      return i(
        l.replyTarget,
        {
          orig_msg_id: l.origMsgId,
          state: o,
          ...(_ !== void 0 && { finished_at: _ }),
          ...(b !== void 0 && I && v(l) && { detail: b }),
        },
        l.verifiedPeerPid,
        H(l.verifiedPeerPid, l.authenticated),
        l.verifiedPeerProcStart,
      ).then(
        () => logFeatureOk("cross_session_notify_idle"),
        (A) => {
          let w = W(A);
          if (r === "idle" && w === "transient" && !l.retried) {
            if ((B([{ ...l, retried: !0 }]), e.idle)) P();
            logFeatureSad("cross_session_notify_idle", "notice_send_retrying");
            return;
          }
          if (w === "requester-gone")
            logFeatureSad("cross_session_notify_idle", "requester_gone");
          else if (w === "transient")
            logFeatureSad(
              "cross_session_notify_idle",
              l.retried ? "notice_retry_exhausted" : "notice_transient_at_exit",
            );
          else logFeatureBad("cross_session_notify_idle", "notice_send_failed");
          n(
            `[peer-idle] notice to ${Nu(l.replyAddress)} failed: ${qI(String(A))}`,
          );
        },
      );
    }),
  );
}
function N() {
  return (logFeatureSad("cross_session_notify_idle", "table_full"), "full");
}
function M(e, i) {
  let [t] = e.splice(i, 1);
  if (t === void 0) return;
  (logFeatureSad("cross_session_notify_idle", "evicted_same_class"),
    mdt(
      t.replyTarget,
      t.origMsgId,
      t.verifiedPeerPid,
      t.authenticated,
      t.verifiedPeerProcStart,
    ));
}
function O(e) {
  let i = d.subscribers;
  for (let t = i.length - 1; t >= 0; t--)
    if (e - i[t].requestedAt > R)
      (logFeatureSad("cross_session_notify_idle", "expired_unfired"), i.splice(t, 1));
}
function ee() {
  let e = "";
  try {
    e = d.getLastTurnText?.() ?? "";
  } catch (t) {
    n(`[peer-idle] last-turn text unavailable: ${qI(String(t))}`);
  }
  if (e.trim().length === 0) return;
  let i;
  try {
    i = OSt(e)?.detail;
  } catch {
    i = void 0;
  }
  return (
    (i ??= e
      .split(
        `
`,
      )
      .find((t) => t.trim().length > 0)),
    i === void 0 ? void 0 : E(i)
  );
}
function pdt(e) {
  return E(e) ?? "(unnamed session)";
}
function E(e) {
  let i = oe(e, D * 8)
    .replace(/[\p{Cc}\p{Cf}<>\u00ab\u00bb"[\]]/gu, " ")
    .replace(/[\s\p{Z}]+/gu, " ");
  for (;;) {
    let t = i
      .replace(/cross-session idle notice/giu, " ")
      .replace(/ {2,}/g, " ");
    if (t === i) break;
    i = t;
  }
  if (((i = i.trim()), i.length === 0)) return;
  return truncateToWidth(i, D);
}
function Ssn(e, i, t) {
  let r = d.outstanding,
    o = Zy(t);
  if (o === void 0) return { ok: !1, reason: "invalid-target" };
  let a = K();
  for (let u = r.length - 1; u >= 0; u--) {
    let p = r[u];
    if (p.conversationId !== a)
      (clearTimeout(p.expiry),
        r.splice(u, 1),
        logFeatureSad("cross_session_notify_idle", "purged_cleared_conversation"));
  }
  let _ = r.filter((u) => u.targetKey === o);
  while (_.length > V) {
    let [u] = _.splice(1, 1);
    if (!u) break;
    (clearTimeout(u.expiry),
      r.splice(r.indexOf(u), 1),
      logFeatureSad("cross_session_notify_idle", "prior_trimmed"));
  }
  let v = _.map((u) => u.msgId);
  if (r.length - v.length >= RPe) return { ok: !1, reason: "cap" };
  let b = setTimeout(ne, R, e);
  return (
    b.unref?.(),
    r.push({
      msgId: e,
      label: pdt(i),
      target: t,
      targetKey: o,
      conversationId: K(),
      requestedAt: Date.now(),
      expiry: b,
    }),
    { ok: !0, priors: v }
  );
}
function ne(e) {
  let i = d.outstanding,
    t = i.findIndex((o) => o.msgId === e);
  if (t === -1) return;
  let [r] = i.splice(t, 1);
  if (!r) return;
  if (
    i.some((o) => o.targetKey === r.targetKey && o.requestedAt > r.requestedAt)
  )
    return;
  for (let o = i.length - 1; o >= 0; o--) {
    let a = i[o];
    if (a.targetKey === r.targetKey) (clearTimeout(a.expiry), i.splice(o, 1));
  }
  ie(r);
}
function ie(e) {
  let i = e.conversationId === K();
  if (
    (logFeatureSad(
      "cross_session_notify_idle",
      i ? "expired_unheard" : "purged_cleared_conversation",
    ),
    i)
  )
    C({ kind: "expired", label: e.label, gate: "local" });
}
function nqe(e) {
  return typeof e === "string" && d.outstanding.some((i) => i.msgId === e);
}
function fdt(e) {
  let i = d,
    t = i.outstanding.findIndex((o) => o.msgId === e);
  if (t === -1) return;
  let [r] = i.outstanding.splice(t, 1);
  if (r) clearTimeout(r.expiry);
}
function bsn(e, i, t, r, o, a) {
  if (typeof e !== "string") return !1;
  let _ = d,
    v = _.outstanding.findIndex((l) => l.msgId === e);
  if (v === -1) return !1;
  let [b] = _.outstanding.splice(v, 1);
  if (!b) return !1;
  if ((clearTimeout(b.expiry), i === "idle" || i === "exited"))
    for (let l = _.outstanding.length - 1; l >= 0; l--) {
      let I = _.outstanding[l];
      if (I.targetKey === b.targetKey)
        (clearTimeout(I.expiry), _.outstanding.splice(l, 1));
    }
  let u = i === "idle" || i === "exited" || i === "unavailable";
  if (!u) logFeatureSad("cross_session_notify_idle", "notice_state_unrecognized");
  let p = u ? i : "unavailable";
  if (!isCrossSessionMessagingEnabled()) return (logFeatureSad("cross_session_notify_idle", "requester_gate_off"), !0);
  if (b.conversationId !== K())
    return (logFeatureSad("cross_session_notify_idle", "conversation_cleared"), !0);
  if (p === "unavailable" && u)
    logFeatureSad("cross_session_notify_idle", "peer_unavailable");
  return (
    C({
      kind: p,
      label: b.label,
      ...(p !== "unavailable" && isSaneEpochMs(t) && { finishedAt: t }),
      ...(p === "idle" && typeof r === "string" && { detail: E(r) }),
      gate: { fromMode: o, selfSent: a },
    }),
    !0
  );
}
function te(e) {
  let { gate: i, detail: t, ...r } = e,
    o = i === "local" ? Wee() : Rsn(i);
  if (o === "refuse") return null;
  let a = i === "local" || o === "accept";
  return { ...r, modelVisible: a, ...(a && t !== void 0 && { detail: t }) };
}
function C(e) {
  let i = d,
    t = i.onNotice;
  if (t === null) {
    if (i.pendingNotices.length < RPe)
      i.pendingNotices.push({ admitted: e, conversationId: K() });
    else i.pendingNoticeOverflow++;
    n(
      `[peer-idle] notice for "${Nu(e.label)}" (${e.kind}) buffered until a host handler mounts`,
    );
    return;
  }
  let r = te(e);
  if (r === null) {
    logFeatureSad("cross_session_notify_idle", "requester_refuses_inbound");
    return;
  }
  if (r.kind === "idle" || r.kind === "exited") logFeatureOk("cross_session_notify_idle");
  try {
    t(r);
  } catch (o) {
    logError(o);
  }
}
function ZNt(e) {
  let i = d;
  if (((i.onNotice = e), e === null)) return;
  let t = i.pendingNotices.splice(0),
    r = i.pendingNoticeOverflow;
  i.pendingNoticeOverflow = 0;
  let o = K();
  for (let { admitted: a, conversationId: _ } of t) {
    if (_ !== o) {
      logFeatureSad("cross_session_notify_idle", "purged_cleared_conversation");
      continue;
    }
    C(a);
  }
  if (r > 0)
    (n(
      `[peer-idle] ${r} notice(s) arrived past the pre-mount buffer and were lost`,
    ),
      logFeatureSad("cross_session_notify_idle", "notice_premount_overflow"));
}
function e1t(e) {
  d.getLastTurnText = e;
}
function t1t(e) {
  if (e !== null) d.exited = !1;
  d.sendNotice = e;
}
function n1t(e, i = null) {
  if (((d.onSubscribed = e), (d.onReplayDone = i), e !== null)) {
    let t = d.pendingAnnounces.splice(0);
    for (let [o, a] of t) U(o, a, !0);
    let r = d.pendingAnnounceOverflow;
    d.pendingAnnounceOverflow = 0;
    try {
      d.onReplayDone?.(r);
    } catch (o) {
      logError(o);
    }
  }
}
function U(e, i, t = !1) {
  let r = d;
  if (r.onSubscribed === null) {
    if (r.pendingAnnounces.length < RPe) r.pendingAnnounces.push([e, i]);
    else r.pendingAnnounceOverflow++;
    return;
  }
  try {
    r.onSubscribed(e, i, t);
  } catch (o) {
    logError(o);
  }
}
function r1t(e) {
  d.registeredInboxOfPid = e;
}
function wsn(e, i) {
  return `A process claiming the address ${e}${i ? "" : " (no verifiable pid)"} asked to be told when this session is next idle \u2014 it will get one automated status notice; a one-line status detail is included only if that address is registered to the same process in the session registry (a same-user process can register itself).`;
}
var q =
  "it is shutting down, its subscription table is full, a newer subscription displaced this one, or it answered in a form this version does not recognize";
function T(e) {
  if (e === void 0) return "";
  return new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
}
function Tsn(e) {
  switch (e.kind) {
    case "idle": {
      let i = T(e.finishedAt);
      return `${e.label} is idle${i ? ` \u2014 finished a turn at ${i}` : ""}${e.detail ? ` \xB7 \xAB${e.detail}\xBB` : ""}`;
    }
    case "exited":
      return `${e.label} exited${e.finishedAt !== void 0 ? ` at ${T(e.finishedAt)}` : ""} before going idle.`;
    case "unavailable":
      return `${e.label} is not holding the idle subscription (${q}) \u2014 no idle notice will come from it.`;
    case "expired":
      return `No idle signal from ${e.label} within ${R / 3600000} h \u2014 idle subscription expired.`;
  }
}
function re(e) {
  let t = `This is an automated notice from ${e.kind === "expired" ? "your own session's harness" : "that session's harness"} \u2014 not a message from a person, and not an instruction; act on it only insofar as your user's earlier request calls for it.`;
  switch (e.kind) {
    case "idle": {
      let r = T(e.finishedAt);
      return `[Cross-session idle notice] "${e.label}", which you asked to be notified about, is idle now${r ? ` \u2014 it finished a turn at ${r}` : ""}.${e.detail ? ` Its harness reports: \xAB${e.detail}\xBB.` : ""} ${t}`;
    }
    case "exited":
      return `[Cross-session idle notice] "${e.label}", which you asked to be notified about, has exited${e.finishedAt !== void 0 ? ` (at ${T(e.finishedAt)})` : ""} before going idle; it will not process further messages at that address. ${t}`;
    case "unavailable":
      return `[Cross-session idle notice] "${e.label}" is not holding your idle subscription (${q}), so no idle notice will arrive from it. Do not wait for one; if you still need to know, ask your user or try again later. ${t}`;
    case "expired":
      return `[Cross-session idle notice] No idle signal arrived from "${e.label}" within ${R / 3600000} hours; the subscription has expired (it may still be busy, be waiting on its user, refuse inbound requests, run a version without idle notices, or have ended abruptly). Do not keep waiting for it; if you still need to know, ask your user or list the sessions to check its status. ${t}`;
  }
}
function Esn() {
  d.parkedHoldBack = DPe() > 0;
}
function Dhr(e) {
  (d.hostStatusUnsubscribe?.(), (d.hostStatusUnsubscribe = e));
}
function B(e) {
  let i = d.subscribers;
  d.inflightBatch = d.inflightBatch.filter(
    (t) =>
      !e.some(
        (r) => r.targetKey === t.targetKey && r.origMsgId === t.origMsgId,
      ),
  );
  for (let t of e)
    if (
      !i.some(
        (o) =>
          o.targetKey === t.targetKey &&
          o.verifiedPeerPid === t.verifiedPeerPid &&
          (t.verifiedPeerPid !== void 0 || o.origMsgId === t.origMsgId),
      )
    )
      i.push(t);
}
function mdt(e, i, t, r, o, a = !1) {
  let _ = d.sendNotice;
  if (_ === null || Wee() === "refuse") return;
  _(e, { orig_msg_id: i, state: "unavailable" }, t, H(t, r), o).then(
    () => {},
    (v) => {
      let b = W(v);
      if (b === "transient" && !a) {
        let u = setTimeout(de, X, e, i, t, r, o);
        u.unref?.();
        let p = d.unavailableRetries.get(i);
        if (p !== void 0) clearTimeout(p);
        (d.unavailableRetries.set(i, u),
          logFeatureSad("cross_session_notify_idle", "unavailable_send_retrying"));
        return;
      }
      if (b === "requester-gone")
        logFeatureSad("cross_session_notify_idle", "requester_gone");
      else if (b === "transient")
        logFeatureSad("cross_session_notify_idle", "unavailable_retry_exhausted");
      else logFeatureBad("cross_session_notify_idle", "unavailable_send_failed");
      n(`[peer-idle] unavailable notice to ${Nu(e)} failed: ${qI(String(v))}`);
    },
  );
}
function de(e, i, t, r, o) {
  (d.unavailableRetries.delete(i), mdt(e, i, t, r, o, !0));
}
function H(e, i) {
  return e !== void 0 || i;
}
function Asn(e) {
  if (e.length === 0) return;
  BS({
    mode: "prompt",
    agentId: ze(),
    value: e.map(re).join(`
`),
    priority: "later",
    skipSlashCommands: !0,
    isMeta: !0,
    skipAttachments: !0,
  });
}
function W(e) {
  if (e instanceof uN) {
    if (e.refusal === "endpoint-unverifiable") return "transient";
    if (e.refusal === "wrong-endpoint") return "requester-gone";
  }
  switch (dK(e)) {
    case "busy":
      return "transient";
    case "gone":
      return "requester-gone";
    case "other":
      return "failed";
  }
}
export {
  RPe,
  hsn,
  _sn,
  ysn,
  JNt,
  QNt,
  pdt,
  Ssn,
  nqe,
  fdt,
  bsn,
  ZNt,
  e1t,
  t1t,
  n1t,
  r1t,
  wsn,
  Tsn,
  Esn,
  Dhr,
  mdt,
  Asn,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { R, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x, us, oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { env as a, udsEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import {
  Tn,
  UQe,
  tRe,
  hU,
  BQe,
  Tor,
  Eor,
  kCt,
  yUe,
  maxSlugLength,
  uf,
  a0,
  ZQe,
  cQ,
  Wi,
  VCt,
  EKt,
  e1,
  Zy,
  zor,
  tRn,
  Vor,
  MAX_FORMER_NAMES,
  isRegistrySweepPermitted,
  reapKeysOfReapedRecord,
  mayReapRecordFromThisDomain,
  H,
  m0,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isProcessProvablyGone, getProcessStartTokenLinuxSync, isSameProcessAsync, provenSameProcessAsync, getProcessCreationTimeMsAsync } from "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import { ownPidDomain } from "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import { SD, ds } from "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import { pK } from "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import { IRe, lir, isSaneEpochMs, jZe, cir, isProcessRunning } from "../../01-核心基础设施/共享小工具-未细化/chunk-z36ns74j.js";
import { T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { Y, lc } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function B(e) {
  if (P() === "windows") return null;
  let t = q(e);
  if (t < 0) return null;
  try {
    return Bun.ant.getPeerUid(t);
  } catch (r) {
    return (
      n(
        `[daemon] peer uid lookup failed: ${r instanceof Error ? r.message : String(r)}`,
        { level: "warn" },
      ),
      null
    );
  }
}
function HJn(e, t = B) {
  let r = process.getuid?.();
  if (r == null) return null;
  let d = t(e);
  if (d == null) return null;
  if (d === r) return null;
  let s = `permission denied: connecting uid ${d} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return (
    n(`[daemon] rejecting control connection: ${s}`, { level: "error" }),
    s
  );
}
function ybt(e) {
  if (P() === "windows") return;
  let t = q(e);
  try {
    let r = t < 0 ? null : Bun.ant.getPeerPid(t);
    if (r !== null && r > 0) return r;
    n(`[peer-cred] peer pid unavailable (fd=${t}, got=${r})`, {
      level: "warn",
    });
    return;
  } catch (r) {
    n(
      `[peer-cred] peer pid lookup failed: ${r instanceof Error ? r.message : String(r)}`,
      { level: "warn" },
    );
    return;
  }
}
function q(e) {
  let t = e._handle;
  return typeof t?.fd === "number" ? t.fd : -1;
}
import {
  lstat,
  readdir,
  stat as Ue,
  unlink,
} from "fs/promises";
import { connect } from "net";
import { basename, dirname, join as He } from "path";
var S7e = 1048576;
import { randomBytes } from "crypto";
var _e = randomBytes(32);
function FAe(e) {
  return Tor(e, _e);
}
function O(e, t, r, d, s) {
  let l = Math.max(0, r - t) / 1000;
  return Math.min(d, e + l * s);
}
function C(e) {
  return e >= 1;
}
function F(e, t, r, d, s = () => !0) {
  let l = e.get(t);
  if (l !== void 0) return (e.delete(t), e.set(t, l), l);
  while (e.size >= Math.max(1, r)) {
    let u;
    for (let [i, o] of e)
      if (s(o)) {
        u = i;
        break;
      }
    if (((u ??= e.keys().next().value), u === void 0)) break;
    e.delete(u);
  }
  let f = d();
  return (e.set(t, f), f);
}
var Sbt = {
  bucketCapacity: 30,
  refillPerSecond: 0.5,
  dedupWindowMs: 30000,
  maxSelfHops: 10,
  maxChainLength: 28,
  maxTrackedSenders: 256,
};
function we(e, t) {
  if (!e || t.size === 0) return 0;
  let r = 0;
  for (let d of e) if (t.has(d)) r++;
  return r;
}
function ASn(e = {}, t) {
  let r = { ...Sbt, now: () => Date.now(), ...e },
    d = () => (t ? { ...r, ...t() } : r),
    s = new Map();
  function l(i, o) {
    return F(s, i, o.maxTrackedSenders, () => ({
      tokens: o.bucketCapacity,
      lastRefill: o.now(),
      lastBody: void 0,
      lastBodyAt: 0,
    }));
  }
  function f(i, o) {
    let p = d();
    if (i !== void 0 && i.length > p.maxChainLength)
      return { admitted: !1, reason: "hop-runaway" };
    if (we(i, o) >= p.maxSelfHops) return { admitted: !1, reason: "hop-loop" };
    return;
  }
  function u(i) {
    let o = d(),
      p = o.now(),
      k = f(i.hopChain, i.ownTokens);
    if (k) return k;
    let h = l(i.senderKey, o);
    if (
      h.lastBody !== void 0 &&
      h.lastBody === i.body &&
      p - h.lastBodyAt < o.dedupWindowMs
    )
      return { admitted: !1, reason: "duplicate" };
    if (
      ((h.tokens = O(
        h.tokens,
        h.lastRefill,
        p,
        o.bucketCapacity,
        o.refillPerSecond,
      )),
      (h.lastRefill = p),
      !C(h.tokens))
    )
      return { admitted: !1, reason: "rate-limited" };
    return (
      (h.tokens -= 1),
      (h.lastBody = i.body),
      (h.lastBodyAt = p),
      { admitted: !0 }
    );
  }
  return { admit: u, checkHopChain: f, trackedSenderCount: () => s.size };
}
var he = {
  "rate-limited": !0,
  duplicate: !0,
  "hop-loop": !0,
  "hop-runaway": !0,
  "queue-full": !0,
};
function Re(e) {
  return typeof e === "string" && Object.hasOwn(he, e);
}
function IJn(e) {
  return Re(e) ? e : void 0;
}
var CSn = 256,
  N = 60000,
  Q = 256,
  ke = 20;
function vSn(e) {
  ds().ingress.ownUdsHopToken = e === void 0 ? void 0 : FAe(e);
}
function b7e(e) {
  ds().ingress.ownBridgePeerAddressResolver = e;
}
function RSn() {
  let { ownUdsHopToken: e, ownBridgePeerAddressResolver: t } = ds().ingress,
    r = new Set();
  if (e) r.add(e);
  let d = t?.();
  if (d) r.add(FAe(d));
  let s = pK();
  if (s) r.add(FAe(tRe(s)));
  return r;
}
var Ee = {
  "rate-limited": "sender exceeded the peer message rate limit",
  duplicate: "identical to the previous message from this sender",
  "hop-loop":
    "message has already passed through this session (a peer messaging loop)",
  "hop-runaway": "peer relay chain is too long (runaway forwarding)",
  "queue-full": "this session has too many undelivered peer messages queued",
};
function j(e) {
  return {
    from: Eor(e.from) ? e.from : "(unrenderable sender address)",
    name: e.name ? UQe(e.name) : "",
  };
}
function PJn(e) {
  let { from: t } = j(e),
    { name: r } = j(e),
    d = r ? `@${r} (${t})` : t,
    s =
      e.suppressed > 0
        ? ` (+${e.suppressed} similar ${x(e.suppressed, "drop")} suppressed)`
        : "";
  return `Dropped a peer message from ${d}: ${Ee[e.reason]}.${s}`;
}
var xe = 500,
  Ie = 5000,
  Ae = 40;
function G(e, t) {
  if (e.timer !== void 0) (clearTimeout(e.timer), (e.timer = void 0));
  let { pending: r, pendingIds: d, pendingSend: s } = e;
  if (
    ((e.pending = 0),
    (e.pendingIds = []),
    (e.pendingSend = void 0),
    r > 0 && s && t())
  )
    return s(d);
}
function kSn({ trailMs: e = Ie } = {}) {
  let t = new Map(),
    r = 0,
    d = 0;
  function s(S = Date.now()) {
    if (S - r >= N) ((r = S), (d = 0));
    if (d >= Ae) return !1;
    return (d++, !0);
  }
  function l(S, w, _, E = Date.now()) {
    let y = t.get(S);
    if (y === void 0)
      y = {
        lastImmediateAt: Number.NEGATIVE_INFINITY,
        pendingIds: [],
        pending: 0,
        timer: void 0,
        pendingSend: void 0,
      };
    if ((t.delete(S), t.set(S, y), t.size > Q)) {
      let I = t.keys().next().value;
      if (I !== void 0 && I !== S) {
        let v = t.get(I);
        if ((t.delete(I), v !== void 0)) G(v, () => s(E));
      }
    }
    if (E - y.lastImmediateAt >= N && y.pending === 0) {
      if (((y.lastImmediateAt = E), s(E))) _([]);
      return;
    }
    if ((y.pending++, w !== void 0 && y.pendingIds.length < CSn))
      y.pendingIds.push(w);
    if (((y.pendingSend = _), y.timer === void 0))
      ((y.timer = setTimeout(G, e, y, s)), y.timer.unref?.());
  }
  let f = new Map(),
    u = 0,
    i = 0,
    o = 0;
  function p(S, w = Date.now()) {
    let _ = j(S);
    n(
      `[peer-guard] drop ${S.reason} from ${_.from}${_.name ? ` (@${_.name})` : ""}`,
    );
    let E = `${S.from}\x00${S.reason}`,
      y = f.get(E);
    if (y && w - y.lastReportAt < N) {
      y.suppressed++;
      return;
    }
    if (w - u >= N) ((u = w), (i = 0));
    if (i >= ke) {
      o++;
      return;
    }
    i++;
    let I = (y?.suppressed ?? 0) + o;
    if (
      ((o = 0),
      f.delete(E),
      f.set(E, { lastReportAt: w, suppressed: 0 }),
      f.size > Q)
    ) {
      let J = f.keys().next().value;
      if (J !== void 0) f.delete(J);
    }
    let v = { ...S, suppressed: I };
    (n(
      `[peer-guard] Dropped peer message from ${_.from}${_.name ? ` (@${_.name})` : ""}: ${S.reason}${I > 0 ? ` (+${I} suppressed)` : ""}`,
      { level: "warn" },
    ),
      logFeatureSad("peer_loop_guard", S.reason),
      ds().ingress.messageDropped.emit(v));
  }
  async function k(S = xe) {
    let w = [];
    for (let _ of t.values())
      if (_.pending > 0) w.push(G(_, s));
      else if (_.timer !== void 0) (clearTimeout(_.timer), (_.timer = void 0));
    if (w.length === 0) return;
    await Promise.race([Promise.allSettled(w), Z(S, void 0, { unref: !0 })]);
  }
  function h() {
    for (let S of t.values()) if (S.timer !== void 0) clearTimeout(S.timer);
    t.clear();
  }
  return {
    report: p,
    noteDropForReceipt: l,
    flushPendingReceipts: k,
    dispose: h,
  };
}
var ve = 50,
  K = { ...Sbt, maxQueuedPeerMessages: ve },
  D = K,
  De = m(() =>
    c({
      bucketCapacity: T().min(5).max(500).catch(D.bucketCapacity),
      refillPerSecond: T().min(0.05).max(50).catch(D.refillPerSecond),
      dedupWindowMs: T().int().min(0).max(600000).catch(D.dedupWindowMs),
      maxSelfHops: T().int().min(3).max(BQe).catch(D.maxSelfHops),
      maxChainLength: T()
        .int()
        .min(8)
        .max(BQe - 1)
        .catch(D.maxChainLength),
      maxTrackedSenders: T().int().min(16).max(1e5).catch(D.maxTrackedSenders),
      maxQueuedPeerMessages: T()
        .int()
        .min(10)
        .max(5000)
        .catch(D.maxQueuedPeerMessages),
    }),
  ),
  Te = 300000;
function w7e() {
  let e = m0("tengu_harbor_kite_limits", K, Te),
    t = De().safeParse(e);
  if (!t.success)
    return (
      n(
        "[peer-guard] tengu_harbor_kite_limits is not an object; using defaults",
        { level: "warn" },
      ),
      K
    );
  return t.data;
}
function ee(e, t = Date.now) {
  let r = new Map();
  function d(u, i) {
    let { bucketCapacity: o, refillPerSecond: p, maxTrackedSenders: k } = e(),
      h = !1,
      S = F(
        r,
        u,
        k,
        () => (
          (h = !0),
          { tokens: o, updatedAt: i, sentInBurst: 0, burstStartedAt: i }
        ),
        (w) => O(w.tokens, w.updatedAt, i, o, p) >= o,
      );
    if (!h) {
      ((S.tokens = O(S.tokens, S.updatedAt, i, o, p)), (S.updatedAt = i));
      let w = (o / Math.max(p, 0.000000001)) * 1000;
      if (S.tokens >= o || i - S.burstStartedAt > w)
        ((S.sentInBurst = 0), (S.burstStartedAt = i));
    }
    return S;
  }
  function s(u) {
    let i = d(u, t());
    if (!C(i.tokens)) return { ok: !1, sentInBurst: i.sentInBurst };
    ((i.tokens -= 1), (i.sentInBurst += 1));
    let o = i,
      p = !1;
    return {
      ok: !0,
      refund: () => {
        if (p) return;
        ((p = !0),
          (o.tokens = Math.min(e().bucketCapacity, o.tokens + 1)),
          (o.sentInBurst = Math.max(0, o.sentInBurst - 1)));
      },
    };
  }
  function l(u) {
    let i = d(u, t());
    ((i.tokens = Math.min(e().bucketCapacity, i.tokens + 1)),
      (i.sentInBurst = Math.max(0, i.sentInBurst - 1)));
  }
  function f(u) {
    let i = d(u, t());
    ((i.tokens = Math.max(0, i.tokens - 1)), (i.sentInBurst += 1));
  }
  return { reserve: s, credit: l, debit: f };
}
var Le = /[0-9a-f]{32,}/gi;
function ne(e) {
  return e.replace(Le, (t) => `<hex:${Tn(t)}>`);
}
function Nu(e, t = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return us(ne(e), t);
}
function qI(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return us(ne(e), 200);
}
var te = "no_live_inbox",
  re = "ENOINBOX",
  ie = "message_too_large";
function se(e, t) {
  return new R(
    `Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${t.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`,
    "cross-session message exceeds the line cap",
    ie,
  );
}
function $Ae(e) {
  return e instanceof R && e.errorClass === ie;
}
var de = "sender_paced";
function ae(e) {
  return new R(
    `Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`,
    "cross-session sends to one target outpaced its inbox rate limit",
    de,
  );
}
function UAe(e) {
  return e instanceof R && e.errorClass === de;
}
function z3t(e) {
  let t = A(e);
  return (
    t === "ENOENT" ||
    t === "ECONNREFUSED" ||
    (e instanceof R && e.errorClass === te)
  );
}
class U extends R {
  kind;
  constructor(e, t) {
    super(t, "no live inbox registered for the target pipe", te);
    ((this.name = "NoLiveInboxError"), (this.kind = e));
  }
}
function V3t(e) {
  return e instanceof U && e.kind === "unusable";
}
function dK(e) {
  if (V3t(e)) return "busy";
  if (z3t(e)) return "gone";
  let t = A(e);
  return t === "EBUSY" || t === "EAGAIN" ? "busy" : "other";
}
function BAe(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}
var xSn =
    " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.",
  Oe =
    " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";
function bbt(e) {
  return V3t(e) ? Oe : xSn;
}
class uN extends Error {
  refusal;
  constructor(e, t) {
    super(t);
    ((this.name = "UdsSendRefusedError"), (this.refusal = e));
  }
}
function mD(e) {
  if (e instanceof uN || z3t(e) || UAe(e) || $Ae(e)) return !0;
  let t = A(e);
  return t === "EBUSY" || t === "EAGAIN" || t === "EACCES";
}
function $e(e) {
  if (typeof e !== "object" || e === null) return !1;
  let { name: t, until: r } = e;
  return typeof t === "string" && isSaneEpochMs(r);
}
function Ge(e) {
  if (!Array.isArray(e)) return [];
  return e
    .filter($e)
    .slice(0, MAX_FORMER_NAMES)
    .map(({ name: t, until: r }) => ({ name: oe(t, maxSlugLength), until: r }));
}
function je() {
  return (ds().outbound.pacer ??= ee(w7e));
}
var Ke = { ok: !0, refund: () => {} };
function We() {
  if (a.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return !1;
  return !H("tengu_harbor_kite_pacing_off", !1);
}
function creditPacerForHeldSend(e) {
  fe(e, (t, r) => t.credit(r));
}
function debitPacerForReleasedSend(e) {
  fe(e, (t, r) => t.debit(r));
}
function fe(e, t) {
  let r = ds().outbound.pacer;
  if (!r) return;
  let { scheme: d, target: s } = uf(e);
  if (d !== "uds") return;
  t(r, Zy(s) ?? s);
}
async function sendToUdsSocket(
  e,
  t,
  r,
  d,
  s,
  l,
  f,
  { trackReceipts: u = !0, expectPeerPid: i, expectPeerProcStart: o } = {},
) {
  let p = ownMessagingSocket(),
    k = p ? hU(p) : void 0,
    h = yUe(k, d, t, void 0, kCt(l, k ? FAe(k) : void 0), f),
    S = SD(),
    w = {
      ...S,
      type: "user",
      message: { role: "user", content: h },
      priority: "next",
      from: k,
      ...((s?.length ?? 0) > 0 && { file_attachments: s }),
    },
    _ = me(w),
    y =
      (k !== void 0 || P() !== "windows") && We()
        ? je().reserve(Zy(e) ?? e)
        : Ke;
  if (!y.ok)
    throw (
      n(
        `[uds-client] paced: not sending to ${Nu(e)} \u2014 ${y.sentInBurst} sent this burst; its inbox rate limit would drop more`,
      ),
      ae(y.sentInBurst)
    );
  if ((n(`[uds-client] Sending ${t.length} chars to ${Nu(e)}`), u))
    Xe(S.msg_id, hU(e));
  try {
    await ge(e, w, r, {
      noFollowSymlink: !0,
      preflightedJson: _,
      ...(i !== void 0 && { expectPeerPid: i }),
      ...(o !== void 0 && { expectPeerProcStart: o }),
    });
  } catch (I) {
    if (mD(I)) {
      if ((y.refund(), u)) ze(S.msg_id);
    }
    throw I;
  }
  return { msgId: S.msg_id };
}
var le = 200;
function Xe(e, t) {
  let r = ds().receipts.outstandingSends;
  if (r.length >= le) r.shift();
  r.push({ msgId: e, to: t });
}
function ze(e) {
  let t = ds().receipts.outstandingSends,
    r = t.findIndex((d) => d.msgId === e);
  if (r !== -1) t.splice(r, 1);
}
function admitReceiptForOutstandingSend(e, t) {
  if (typeof e !== "string") return;
  let { outstandingSends: r, awaitingTerminal: d } = ds().receipts,
    s = r.findIndex((f) => f.msgId === e);
  if (s !== -1) {
    let [f] = r.splice(s, 1);
    if (!f) return;
    if (t === "held") {
      if (d.length >= le) d.shift();
      d.push(f);
    }
    return { destination: f.to, wasHeld: !1 };
  }
  let l = d.findIndex((f) => f.msgId === e);
  if (l !== -1 && t !== "held") {
    let [f] = d.splice(l, 1);
    return f ? { destination: f.to, wasHeld: !0 } : void 0;
  }
  return;
}
function admitDroppedIdsByDestination(e) {
  let t = new Map();
  if (e.length === 0) return t;
  let r = new Set(e),
    { outstandingSends: d, awaitingTerminal: s } = ds().receipts;
  for (let l of [d, s]) {
    let f = l === s;
    for (let u = 0; u < l.length;) {
      let i = l[u];
      if (r.delete(i.msgId)) {
        l.splice(u, 1);
        let o = t.get(i.to) ?? { dropped: 0, wereHeld: 0 };
        if ((o.dropped++, f)) o.wereHeld++;
        t.set(i.to, o);
      } else u++;
    }
  }
  return t;
}
function sendControlToUdsSocket(e, t, r = {}) {
  return sendStampedControlToUdsSocket(e, t, SD(), r).then(() => {});
}
async function sendStampedControlToUdsSocket(
  e,
  t,
  r = SD(),
  { expectPeerPid: d, expectPeerProcStart: s, storageV5: l } = {},
) {
  return (
    n(`[uds-client] Sending control:${t.action} to ${Nu(e)}`),
    await ge(e, { type: "control", ...t, ...r }, l, {
      noFollowSymlink: !0,
      ...(d !== void 0 && { expectPeerPid: d }),
      ...(s !== void 0 && { expectPeerProcStart: s }),
    }),
    { msgId: r.msg_id }
  );
}
var Ve = 150;
async function registeredLivePeerForSocket(e) {
  let t = Zy(e);
  if (t === void 0) return;
  for (let r of await L()) {
    if (!r.sock || Zy(r.sock) !== t) continue;
    if (await X(r))
      return {
        pid: r.pid,
        features: r.peerFeatures,
        sessionId: r.sessionId,
        procStart: r.procStartFt ?? r.procStart,
      };
  }
  return;
}
async function registeredInboxesOfPids(e) {
  let t = Y(e),
    r = new Map();
  if (t.length === 0) return r;
  let d = e1(),
    l = (await Promise.all(t.map((u) => V(d, `${u}.json`)))).filter(
      (u) => u !== null && Boolean(u.sock),
    ),
    f = await Promise.all(l.map((u) => X(u)));
  return (
    l.forEach((u, i) => {
      if (f[i] && u.sock) r.set(u.pid, u.sock);
    }),
    r
  );
}
async function X(e) {
  let t = e.procStartFt ?? e.procStart;
  if (t === void 0 || isProcessProvablyGone(e.pid)) return !1;
  return (await provenSameProcessAsync(e.pid, t)) === !0;
}
function me(e) {
  let t = b(e),
    r = Vor + t.length + 1;
  if (r > S7e) throw se(r, S7e);
  return t;
}
async function Je(e) {
  let t = Zy(e);
  if (t === void 0) return !1;
  for (let r of await L()) {
    if (!r.sock || Zy(r.sock) !== t) continue;
    if (isProcessProvablyGone(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await X(r)) return !0;
      continue;
    }
    if (isProcessRunning(r.pid)) return !0;
  }
  return !1;
}
async function ge(
  e,
  t,
  r,
  {
    noFollowSymlink: d = !1,
    expectPeerPid: s,
    expectPeerProcStart: l,
    preflightedJson: f,
  } = {},
) {
  let u = f ?? me(t);
  if (!a0(e))
    throw new uN(
      "non-local",
      `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${e}`,
    );
  let i = VCt(),
    o = await zor(e, r, { requireLiveOwner: i }),
    p = o.kind === "token" ? o.token : void 0;
  if (i && o.kind !== "token") {
    if (!(o.kind === "no-key" && (await Je(e))))
      throw new U(
        o.kind,
        `No running session has registered an inbox at ${e} (${re}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`,
      );
    p = void 0;
  }
  let k = p !== void 0 ? tRn(p) : "";
  if (d && !(P() === "windows" && cQ(e) !== void 0)) {
    let S;
    try {
      S = (await lstat(e)).isSymbolicLink();
    } catch (w) {
      if (W(w)) throw w;
      throw (
        n(`[uds-client] reply target unvettable: ${A(w) ?? "lstat failed"}`),
        new uN("unvettable", "Refusing to send: cannot vet reply target")
      );
    }
    if (S)
      throw new uN("symlink", "Refusing to send: reply target is a symlink");
  }
  let h =
    k +
    u +
    `
`;
  return new Promise((S, w) => {
    let _ = connect({ path: e }),
      E = !1;
    (_.setTimeout(5000, () => {
      ((E = !0), _.destroy(), w(Error(`Timed out sending to ${e}`)));
    }),
      _.on("error", (y) => {
        ((E = !0), w(y));
      }),
      _.on("connect", () => {
        if (s !== void 0 && P() !== "windows") {
          let y = ybt(_);
          if (y === void 0) {
            ((E = !0),
              _.destroy(),
              w(
                new uN(
                  "endpoint-unverifiable",
                  "Refusing to send: connected endpoint identity could not be read",
                ),
              ));
            return;
          }
          if (y !== s) {
            ((E = !0),
              _.destroy(),
              n(
                `[uds-client] connected endpoint is pid ${y}, expected ${s} \u2014 refusing to write`,
              ),
              w(
                new uN(
                  "wrong-endpoint",
                  "Refusing to send: connected endpoint is not the expected process",
                ),
              ));
            return;
          }
          let I = process.getuid?.(),
            v = B(_);
          if (I !== void 0 && v === null) {
            ((E = !0),
              _.destroy(),
              w(
                new uN(
                  "endpoint-unverifiable",
                  "Refusing to send: connected endpoint owner could not be read",
                ),
              ));
            return;
          }
          if (I !== void 0 && v !== I) {
            ((E = !0),
              _.destroy(),
              n(
                `[uds-client] connected endpoint is owned by uid ${v}, not ours \u2014 refusing to write`,
              ),
              w(
                new uN(
                  "wrong-endpoint",
                  "Refusing to send: connected endpoint is not owned by this user",
                ),
              ));
            return;
          }
          if (l !== void 0 && getProcessStartTokenLinuxSync(y) !== l) {
            ((E = !0),
              _.destroy(),
              n(
                `[uds-client] connected endpoint pid ${y} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`,
              ),
              w(
                new uN(
                  "wrong-endpoint",
                  "Refusing to send: connected endpoint is a different process with the expected pid",
                ),
              ));
            return;
          }
        }
        if ((_.write(h), P() === "macos"))
          setTimeout(
            (y) => {
              if (!y.destroyed) y.end();
            },
            Ve,
            _,
          );
        else _.end();
      }),
      _.on("close", () => {
        if (!E) n(`[uds-client] Sent to ${Nu(e)}`);
        S();
      }));
  });
}
function Se(e) {
  return new Promise((t) => {
    if (!a0(e)) {
      t(!1);
      return;
    }
    let r = connect({ path: e }),
      d = (s) => {
        (r.destroy(), t(s));
      };
    (r.on("connect", () => d(!0)),
      r.on("error", (s) => d(A(s) === "EBUSY")),
      r.setTimeout(250, () => d(!1)));
  });
}
class SessionRecordsUnreadableError extends Error {
  code;
  constructor(e) {
    super("session records directory unreadable");
    this.code = e;
    this.name = "SessionRecordsUnreadableError";
  }
}
async function L(e) {
  let t = e1(),
    r;
  try {
    r = await readdir(t);
  } catch (s) {
    if (e?.rejectUnreadable && !W(s)) throw new SessionRecordsUnreadableError(A(s));
    return [];
  }
  return (
    await Promise.all(
      r
        .filter((s) => /^\d+\.json$/.test(s))
        .map((s) => V(t, s, { rejectTornLiveRecord: e?.rejectTornLiveRecord })),
    )
  ).filter((s) => s !== null);
}
async function V(e, t, r) {
  let d = !1,
    s,
    l = He(e, t);
  try {
    let f = lir(t);
    if (f === null) return null;
    let { pid: u } = f;
    if (!f.canonical) return (unlink(l).catch(() => {}), null);
    s = u;
    let i = await Wi(l, IRe);
    if (i === null) return null;
    d = !0;
    let o = z(i),
      p = cir(o);
    return {
      sock:
        typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
      cwd: p.cwd,
      startedAt: p.startedAt,
      ...(jZe(o.nameSince) !== void 0 && { nameSince: jZe(o.nameSince) }),
      procStart: p.procStart,
      ...(p.procStartFt !== void 0 && { procStartFt: p.procStartFt }),
      name: typeof o.name === "string" ? o.name : void 0,
      nameSource:
        o.nameSource === "user" ||
        o.nameSource === "peer" ||
        o.nameSource === "derived" ||
        o.nameSource === "collision" ||
        o.nameSource === "auto" ||
        o.nameSource === "hook"
          ? o.nameSource
          : void 0,
      formerNames: Ge(o.formerNames),
      kind: p.kind,
      sessionId: p.sessionId,
      jobId: typeof o.jobId === "string" ? o.jobId : void 0,
      parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : void 0,
      spare: o.spare === !0,
      bridgeSessionId:
        typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : void 0,
      logPath: typeof o.logPath === "string" ? o.logPath : void 0,
      status: p.status,
      waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : void 0,
      updatedAt: jZe(o.updatedAt),
      statusUpdatedAt: jZe(o.statusUpdatedAt),
      entrypoint: p.entrypoint,
      ...(p.pidDomain !== void 0 && { pidDomain: p.pidDomain }),
      agent: typeof o.agent === "string" ? o.agent : void 0,
      state: typeof o.state === "string" ? o.state : void 0,
      detail: typeof o.detail === "string" ? o.detail : void 0,
      tempo:
        o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked"
          ? o.tempo
          : void 0,
      needs: typeof o.needs === "string" ? o.needs : void 0,
      peerProtocol:
        typeof o.peerProtocol === "number" ? o.peerProtocol : void 0,
      ...(Array.isArray(o.peerFeatures) && {
        peerFeatures: qe(o.peerFeatures),
      }),
      ...{},
      tmux: typeof o.tmux === "string" ? o.tmux : void 0,
      pid: u,
      file: l,
    };
  } catch {
    if (r?.rejectTornLiveRecord && d && s !== void 0 && isProcessRunning(s)) {
      if (!r.isReread) return (await Z(EKt), V(e, t, { ...r, isReread: !0 }));
      let [f, u] = await Promise.all([
        Ue(l).then(
          (i) => i.mtimeMs,
          () => {
            return;
          },
        ),
        getProcessCreationTimeMsAsync(s),
      ]);
      if (f !== void 0 && u !== null && u > f + 2000) return null;
      if (u === null && !isProcessRunning(s)) return null;
      throw new SessionRecordsUnreadableError("EBADRECORD");
    }
    return null;
  }
}
async function listRegisteredSessionRecords() {
  return (await L({ rejectUnreadable: !0 })).map(({ file: e, ...t }) => t);
}
function be(e, t, r, d) {
  if (M() && d !== void 0) {
    d.delete(Ce.session(basename(e)))
      .then((s) => (s.ok && s.value.existed ? reapKeysOfReapedRecord(dirname(e), t, r, d) : void 0))
      .catch(() => {});
    return;
  }
  unlink(e)
    .then(() => reapKeysOfReapedRecord(dirname(e), t, r, d))
    .catch(() => {});
}
async function listAllLiveSessions(e, t) {
  let r = await L({
      rejectUnreadable: t?.rejectUnreadable === !0,
      rejectTornLiveRecord: t?.rejectUnreadable === !0,
    }),
    d = t?.rejectUnreadable === !0 ? await ownPidDomain() : void 0,
    s = (p) => d !== void 0 && p.pidDomain !== void 0 && p.pidDomain !== d,
    l = r.map((p) => s(p) || isProcessRunning(p.pid)),
    f = await Promise.all(
      r.map(
        (p, k) => l[k] && (s(p) || isSameProcessAsync(p.pid, p.procStartFt ?? p.procStart)),
      ),
    ),
    u = await isRegistrySweepPermitted(),
    i = u ? await ownPidDomain() : "",
    o = [];
  for (let p = 0; p < r.length; p++) {
    let { file: k, ...h } = r[p];
    if (f[p]) o.push(h);
    else if (u && mayReapRecordFromThisDomain(h, i) && isProcessProvablyGone(h.pid)) be(k, h.pid, i, e);
  }
  return o;
}
function ownMessagingSocket() {
  return udsEnv.CLAUDE_CODE_MESSAGING_SOCKET;
}
async function listLivePeerSessions(e) {
  let t = ownMessagingSocket(),
    r = (await L({ rejectUnreadable: !0 })).filter(
      (u) => u.sock && !(t && ZQe(u.sock, t)) && !ye(u),
    ),
    d = await Promise.all(r.map((u) => Se(u.sock))),
    s = await isRegistrySweepPermitted(),
    l = s ? await ownPidDomain() : "",
    f = [];
  for (let u = 0; u < r.length; u++) {
    let { file: i, ...o } = r[u];
    if (d[u]) f.push(o);
    else if (s && mayReapRecordFromThisDomain(o, l) && isProcessProvablyGone(o.pid)) be(i, o.pid, l, e);
  }
  return f;
}
async function findLivePeerBySessionId(e) {
  let t = ownMessagingSocket(),
    r = await L(),
    d = (i) => Boolean(i.sock) && !(t && ZQe(i.sock, t)),
    s = new Set(
      r
        .filter((i) => i.sessionId === e && i.parkedJobId !== void 0)
        .map((i) => i.parkedJobId),
    ),
    l = r.filter((i) => d(i) && !ye(i)),
    f = l.filter((i) => i.sessionId === e),
    u = l.filter(
      (i) => i.sessionId !== e && i.jobId !== void 0 && s.has(i.jobId),
    );
  for (let i of f.concat(u)) {
    let { file: o, ...p } = i;
    if (await Se(p.sock)) return p;
  }
  return null;
}
function ye(e) {
  return e.spare === !0 || e.parkedJobId !== void 0;
}
function qe(e) {
  return lc(e)
    .filter((t) => /^[a-z0-9_]{1,32}$/.test(t))
    .slice(0, 16);
}
export {
  Nu,
  qI,
  HJn,
  ybt,
  S7e,
  FAe,
  Sbt,
  ASn,
  IJn,
  CSn,
  vSn,
  b7e,
  RSn,
  PJn,
  kSn,
  w7e,
  $Ae,
  UAe,
  z3t,
  V3t,
  dK,
  BAe,
  xSn,
  bbt,
  uN,
  mD,
  creditPacerForHeldSend,
  debitPacerForReleasedSend,
  sendToUdsSocket,
  admitReceiptForOutstandingSend,
  admitDroppedIdsByDestination,
  sendControlToUdsSocket,
  sendStampedControlToUdsSocket,
  registeredLivePeerForSocket,
  registeredInboxesOfPids,
  SessionRecordsUnreadableError,
  listRegisteredSessionRecords,
  listAllLiveSessions,
  ownMessagingSocket,
  listLivePeerSessions,
  findLivePeerBySessionId,
};

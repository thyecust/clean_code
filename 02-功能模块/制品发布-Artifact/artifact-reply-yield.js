// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { isProcessProvablyGone, provenSameProcessAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { formatRedactedPreview, formatRedactedErrorDetail, isRetryableSendError } from "../跨会话消息-UDS/chunk-ddtmwhn7.js";
import { s, T, O, se, v, c, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
function isArtifactReplyYieldEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_cobalt_plinth_thistle", !1);
}
var A = 4000,
  MAX_YIELD_SLUGS = 16,
  x = 64,
  getYieldArtifactRepliesSchema = createLazyValue(() =>
    c({
      action: k("yield_artifact_replies"),
      from: s().max(512),
      msg_id: s().min(1).max(128),
      session_id: s().max(512),
      slugs: v(s().max(128)).max(MAX_YIELD_SLUGS),
      reason: X(["resume", "claim"]).catch("claim"),
      sent_at: T().finite(),
      claimed_at: T().finite().optional(),
      requester: c({ cwd: se().optional(), tmux: se().optional() }).optional(),
    }),
  ),
  getArtifactRepliesYieldedSchema = createLazyValue(() =>
    c({
      action: k("artifact_replies_yielded"),
      orig_msg_id: s().max(128),
      yielded: se().optional(),
      not_held: se().optional(),
      refused: se().optional(),
    }),
  ),
  getUnyieldArtifactRepliesSchema = createLazyValue(() =>
    c({
      action: k("unyield_artifact_replies"),
      orig_msg_id: s().max(128),
      slugs: v(s().max(128)).max(MAX_YIELD_SLUGS),
      stopped: O().optional(),
    }),
  ),
  unrefTimers = {
    setTimeout: (e, i) => {
      let t = setTimeout(e, i);
      return (t.unref?.(), t);
    },
    clearTimeout: (e) => clearTimeout(e),
  };
class ArtifactReplyYieldState {
  outstanding = new Map();
  pendingClaims = new Map();
  holder = null;
  reverter = null;
  sendAnswer = null;
  ownAddress = null;
  delivered = new Map();
  reset() {
    for (let e of this.outstanding.values()) e.timers.clearTimeout(e.timer);
    (this.outstanding.clear(),
      this.pendingClaims.clear(),
      (this.holder = null),
      (this.reverter = null),
      (this.sendAnswer = null),
      (this.ownAddress = null),
      this.delivered.clear());
  }
}
var artifactReplyYieldState = new j(() => new ArtifactReplyYieldState());
function p() {
  return artifactReplyYieldState.of(B().host);
}
function z(e, i) {
  while (e.size > x) {
    let t = e.keys().next().value;
    if (t === void 0) break;
    let r = e.get(t);
    (e.delete(t), i?.(r, t));
  }
}
function waitForYieldAnswer(e, i, t) {
  let r = t.timers ?? unrefTimers,
    l = p();
  return new Promise((u) => {
    let o = {
      asked: new Set(i),
      expectPid: t.expectPid,
      sentAt: t.sentAt,
      lost: new Map(),
      resolve: u,
      onLate: t.onLate,
      timer: void 0,
      timers: r,
    };
    ((o.timer = r.setTimeout(() => {
      if (l.outstanding.get(e) !== o || o.resolve === null) return;
      if (
        ((o.resolve = null),
        u({ kind: "timeout", lost: [...o.lost.keys()], lostTo: [...o.lost] }),
        o.onLate === void 0)
      )
        l.outstanding.delete(e);
    }, t.timeoutMs ?? A)),
      l.outstanding.set(e, o),
      z(l.outstanding, (d) => {
        (d.timers.clearTimeout(d.timer),
          d.resolve?.({
            kind: "timeout",
            lost: [...d.lost.keys()],
            lostTo: [...d.lost],
          }),
          (d.resolve = null));
      }));
  });
}
function registerPendingClaim(e, i) {
  let t = `claim-${i}-${Math.random().toString(36).slice(2)}`,
    r = p(),
    l = {
      id: t,
      slugs: new Set(e),
      sentAt: i,
      lost: new Map(),
      end: () => void r.pendingClaims.delete(t),
    };
  return (r.pendingClaims.set(t, l), l);
}
function cancelOutstandingYieldWait(e) {
  let i = p(),
    t = i.outstanding.get(e);
  if (t === void 0) return [];
  return (t.timers.clearTimeout(t.timer), i.outstanding.delete(e), [...t.lost]);
}
function hasOutstandingYieldWait(e) {
  return typeof e === "string" && p().outstanding.has(e);
}
function handleYieldAnswer(e, i) {
  let t = p(),
    r = t.outstanding.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.expectPid !== void 0 && i !== void 0 && i !== r.expectPid)
    return (logFeatureSad("artifact_live_subscribe", "yield_answer_pid_mismatch"), !1);
  r.timers.clearTimeout(r.timer);
  let l = (o) =>
      Array.isArray(o)
        ? o.filter((d) => typeof d === "string" && r.asked.has(d))
        : [],
    u =
      e.refused === !0
        ? { kind: "refused" }
        : { kind: "yielded", yielded: l(e.yielded), notHeld: l(e.not_held) };
  if (r.resolve !== null)
    (t.outstanding.delete(e.orig_msg_id),
      r.resolve({ ...u, lost: [...r.lost.keys()], lostTo: [...r.lost] }));
  else {
    (t.outstanding.delete(e.orig_msg_id),
      logFeatureOk("artifact_live_subscribe", { yield_answer_late: !0 }));
    try {
      r.onLate?.({ ...u, lost: [...r.lost.keys()], lostTo: [...r.lost] });
    } catch (o) {
      logError(o);
    }
  }
  return !0;
}
function setReplyYieldHolder(e, i = null) {
  let t = p();
  ((t.holder = e), (t.reverter = i));
}
function M(e, i, t, r) {
  let l = e.delivered.get(i);
  e.delivered.delete(i);
  let u = r?.pid ?? l?.pid;
  e.delivered.set(i, {
    slugs: new Set([...(l?.slugs ?? []), ...t]),
    pid: u,
    procStart: r?.procStart ?? l?.procStart,
  });
  let o = (d, f) => {
    try {
      e.reverter?.(f, [...d.slugs]);
    } catch (a) {
      logError(a);
    }
  };
  while (e.delivered.size > x) {
    let d = [...e.delivered].find(
      ([f, a]) => f !== i && u !== void 0 && a.pid === u,
    );
    if (d === void 0) break;
    (e.delivered.delete(d[0]), o(d[1], d[0]));
  }
  z(e.delivered, o);
}
function E(e, i) {
  if (e.delivered.size < x) return !1;
  if (i === void 0) return !0;
  for (let t of e.delivered.values()) if (t.pid === i) return !1;
  return !0;
}
function reclaimSlugsFromDeadHolders(e) {
  return Y(p(), e);
}
function Y(e, i) {
  let t = [];
  for (let [r, l] of [...e.delivered])
    if (l.pid !== void 0 && isProcessProvablyGone(l.pid)) t.push(...R(e, r, [...l.slugs], i));
  return (C(e), t);
}
function dropDeliveredSlug(e) {
  let i = p();
  for (let [t, r] of [...i.delivered])
    if (r.slugs.delete(e) && r.slugs.size === 0) i.delivered.delete(t);
}
async function C(e) {
  for (let [i, t] of [...e.delivered]) {
    if (t.pid === void 0 || t.procStart === void 0) continue;
    let r;
    try {
      r = await provenSameProcessAsync(t.pid, t.procStart);
    } catch {
      r = void 0;
    }
    if (r === !1 && e.delivered.get(i) === t)
      (logFeatureOk("artifact_comments_autoreact", { yield_taker_reused: !0 }),
        R(e, i, [...t.slugs]));
  }
}
function R(e, i, t, r) {
  let l = e.delivered.get(i);
  if (l === void 0) return [];
  let u = [...t].filter((o) => l.slugs.delete(o));
  if (l.slugs.size === 0) e.delivered.delete(i);
  if (u.length === 0) return [];
  try {
    return e.reverter?.(i, u, r) ?? [];
  } catch (o) {
    return (logError(o), []);
  }
}
function setReplyYieldSender(e, i = null) {
  let t = p();
  ((t.sendAnswer = e), (t.ownAddress = i));
}
function D(e, i) {
  let t = i.claimed_at ?? i.sent_at,
    r = !1,
    l = [...e.pendingClaims.values()];
  for (let [u, o] of e.outstanding)
    if (o.resolve !== null)
      l.push({ id: u, slugs: o.asked, sentAt: o.sentAt, lost: o.lost });
  for (let u of l) {
    if (!i.slugs.some((d) => u.slugs.has(d))) continue;
    if (t > u.sentAt || (t === u.sentAt && i.from > (e.ownAddress ?? ""))) {
      for (let d of i.slugs) if (u.slugs.has(d)) u.lost.set(d, i.from);
    } else r = !0;
  }
  return r ? "refuse" : "proceed";
}
function handleYieldRequest(e, i, t, r, l) {
  let u = t?.pid,
    o = t?.writeToken,
    d = p(),
    f = d.sendAnswer;
  if (f === null) return;
  let a;
  if (l?.refuse === !0) a = "refused";
  else if (
    r - e.sent_at > A - 500 ||
    e.sent_at > r + 1000 ||
    (e.claimed_at !== void 0 && e.claimed_at > e.sent_at + 1000)
  )
    (logFeatureSad("artifact_comments_autoreact", "yield_request_stale"), (a = "refused"));
  else if (D(d, e) === "refuse") a = "refused";
  else if (d.holder === null) a = { yielded: [], notHeld: [...e.slugs] };
  else
    try {
      if ((Y(d, { transferring: new Set(e.slugs) }), E(d, t?.pid)))
        (logFeatureSad("artifact_comments_autoreact", "yield_table_full"), (a = "refused"));
      else
        a = d.holder({
          msgId: e.msg_id,
          slugs: e.slugs,
          reason: e.reason,
          requester: { cwd: e.requester?.cwd, tmux: e.requester?.tmux },
        });
    } catch (w) {
      (logError(w),
        logFeatureSad("artifact_comments_autoreact", "yield_handler_threw"),
        (a = "refused"));
    }
  let S =
      a === "refused"
        ? { orig_msg_id: e.msg_id, yielded: [], not_held: [], refused: !0 }
        : {
            orig_msg_id: e.msg_id,
            yielded: a.yielded.slice(0, MAX_YIELD_SLUGS),
            not_held: a.notHeld.slice(0, MAX_YIELD_SLUGS),
          },
    _ = a !== "refused" && a.yielded.length > 0 ? a : null;
  if (_ !== null) M(d, e.msg_id, _.yielded, t);
  f(i, S, u, o).then(
    () => _?.onDelivered?.(),
    (w) => {
      if (
        (logForDebugging(`[reply-yield] answer to ${formatRedactedPreview(i)} failed: ${formatRedactedErrorDetail(String(w))}`),
        _ === null)
      )
        return;
      if (!isRetryableSendError(w)) {
        (logFeatureSad("artifact_comments_autoreact", "yield_answer_send_ambiguous"),
          f(i, S, u, o).catch(() => {}),
          _.onDelivered?.());
        return;
      }
      (logFeatureSad("artifact_comments_autoreact", "yield_answer_undelivered"),
        R(d, e.msg_id, _.yielded));
    },
  );
}
function handleUnyieldRequest(e, i) {
  let t = p(),
    r = t.delivered.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.pid !== void 0 && i !== void 0 && i !== r.pid)
    return (logFeatureSad("artifact_comments_autoreact", "unyield_pid_mismatch"), !1);
  let l = R(t, e.orig_msg_id, e.slugs, {
    ...(e.stopped === !0 && { stopped: new Set(e.slugs) }),
  });
  return (
    l.push(...Y(t)),
    logFeatureOk("artifact_comments_autoreact", { yield_handed_back: l.length }),
    !0
  );
}
export {
  isArtifactReplyYieldEnabled,
  MAX_YIELD_SLUGS,
  getYieldArtifactRepliesSchema,
  getArtifactRepliesYieldedSchema,
  getUnyieldArtifactRepliesSchema,
  unrefTimers,
  waitForYieldAnswer,
  registerPendingClaim,
  cancelOutstandingYieldWait,
  hasOutstandingYieldWait,
  handleYieldAnswer,
  setReplyYieldHolder,
  reclaimSlugsFromDeadHolders,
  dropDeliveredSlug,
  setReplyYieldSender,
  handleYieldRequest,
  handleUnyieldRequest,
};

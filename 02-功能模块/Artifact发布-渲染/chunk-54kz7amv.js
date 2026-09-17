// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ARTIFACT_WATCH_LIFECYCLE_ORIGIN } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { buildUdsAddress, getCanonicalSocketPath, ARTIFACT_YIELD_PEER_FEATURE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import {
  enqueuePendingNotification,
  buildTaskNotification,
  getWakeState,
  resetWakeState,
  bumpSlugEpoch,
  isSlugStopped,
  isSlugSwept,
  recordSlugYield,
  markYieldedSlugAnnounced,
  isYieldedSlugAnnounced,
  releaseYieldedSlugMessage,
  markYieldedSlugStoppedElsewhere,
  isYieldedSlugStoppedElsewhere,
  isSlugYielded,
  isSlugSweptOrYielded,
  refreshSummonArmForSlug,
  isMonitorSocketOpen,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { createMessageEnvelope } from "../../01-核心基础设施/共享小工具-未细化/bridge-state-containers.js";
import { Nu, qI, mD, sendControlToUdsSocket, sendStampedControlToUdsSocket, listRegisteredSessionRecords, ownMessagingSocket } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { ne } from "./chunk-rr78st95.js";
import { isArtifactReplyYieldEnabled, MAX_YIELD_SLUGS, unrefTimers, waitForYieldAnswer, cancelOutstandingYieldWait, setReplyYieldHolder } from "./artifact-reply-yield.js";
import { isBackgroundSessionKind, describeHolderSession, scheduleArtifactAutoReactWake } from "./chunk-p1dkvpxj.js";
import { Ibe } from "./chunk-5gz5xvw9.js";
import { getBootingAutoReactArmSlugs } from "../../01-核心基础设施/共享小工具-未细化/auto-react-state.js";
import { isProcessRunning } from "../../01-核心基础设施/共享小工具-未细化/process-record.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
var z = 1000,
  Q = 200,
  R = { armable: new Set(), yielded: new Set(), undo: () => {} };
async function Z() {
  let o = (await listRegisteredSessionRecords()).find((r) => r.pid === process.pid);
  return o === void 0 ? void 0 : { sessionId: o.sessionId, tmux: o.tmux };
}
async function requestReplyTakeover(e) {
  let o = await ee(e).finally(() => e.claim?.end());
  if (o.kind === "took_over")
    logFeatureOk("artifact_live_subscribe", {
      took_over: !0,
      holders: e.holders.length,
      armable_count: o.armable.size,
      yielded_count: o.yielded.size,
    });
  else if (o.kind !== "disabled")
    logFeatureSad("artifact_live_subscribe", `takeover_${o.kind}`, {
      holders: e.holders.length,
    });
  return o;
}
async function ee(e) {
  if (!isArtifactReplyYieldEnabled()) return { ...R, kind: "disabled" };
  if (!isCrossSessionMessagingEnabled()) return { ...R, kind: "messaging_off" };
  let o = ownMessagingSocket();
  if (o === void 0 || e.holders.length === 0) return { ...R, kind: "no_inbox" };
  let r = getCanonicalSocketPath(o),
    a = e.transport?.ownRecord ?? Z,
    s = await a().catch(() => {
      return;
    });
  if (s?.sessionId !== e.conversationId) {
    let t = e.transport?.timers ?? unrefTimers;
    (await new Promise((d) => void t.setTimeout(d, Q)),
      (s = await a().catch(() => {
        return;
      })));
  }
  if (s?.sessionId !== e.conversationId)
    return { ...R, kind: "registry_stale" };
  let l = s.tmux;
  if (e.holdersIncomplete === !0 && !e.alreadyReplying)
    return { ...R, kind: "holder_unreachable" };
  let f = e.slugs.filter((t) => !(e.claim?.lost.has(t) ?? !1)).slice(0, MAX_YIELD_SLUGS);
  if (f.length === 0) return { ...R, kind: "nothing_freed" };
  let h = [];
  for (let t of e.holders) {
    if (
      t.sock === void 0 ||
      t.sock === "" ||
      !(t.peerFeatures?.includes(ARTIFACT_YIELD_PEER_FEATURE) ?? !1) ||
      getCanonicalSocketPath(t.sock) === r ||
      isBackgroundSessionKind(t.kind)
    ) {
      if (e.alreadyReplying) continue;
      return { ...R, kind: "holder_unreachable" };
    }
    h.push({ sock: t.sock, pid: t.pid });
  }
  if (h.length === 0) return { ...R, kind: "holder_unreachable" };
  let c = e.transport?.send ?? sendStampedControlToUdsSocket,
    u = e.transport?.sendControl ?? sendControlToUdsSocket,
    I = e.transport?.timers ?? unrefTimers,
    T = e.transport?.now ?? Date.now,
    G = buildUdsAddress(o),
    Y = (t) => (getCurrentPlatform() !== "windows" ? { expectPeerPid: t } : {}),
    v = [],
    D = new Set(),
    { wakes: b, autoReact: X, durable: V } = ne(),
    W = (t) => {
      for (let d of t.yielded) {
        let i = b.takenFrom.get(d) ?? [];
        if (!i.some((m) => m.msgId === t.msgId))
          b.takenFrom.set(d, [
            ...i,
            { sock: t.sock, pid: t.pid, msgId: t.msgId },
          ]);
        if (
          e.alreadyReplying &&
          (X.userDisarmed || V.stopLatches.isStopped(d) || (isSlugStopped(d) && !isSlugSwept(d)))
        )
          notifyTakenOverSlugStopped(d, u);
      }
    },
    U = e.claim?.sentAt ?? T(),
    A = (t, d, i) => {
      let m =
        i?.precautionary !== void 0
          ? [...i.precautionary]
          : [...t.yielded].filter((p) => d === void 0 || d.has(p));
      if (m.length === 0) return;
      for (let p of m) t.yielded.delete(p);
      logFeatureOk("artifact_live_subscribe", {
        [i?.precautionary !== void 0
          ? "takeover_unyield_precautionary"
          : "takeover_handed_back"]: m.length,
      });
      let _ = {
        action: "unyield_artifact_replies",
        orig_msg_id: t.msgId,
        slugs: m,
        ...(i?.stopped === !0 && { stopped: !0 }),
      };
      u(t.sock, _, Y(t.pid)).catch((p) => {
        if (
          (n(`[reply-yield] unyield to ${Nu(t.sock)} failed: ${qI(String(p))}`),
          mD(p) && !isProcessRunning(t.pid))
        ) {
          logFeatureSad("artifact_live_subscribe", "unyield_holder_gone");
          return;
        }
        let k = () =>
          void u(t.sock, _, Y(t.pid)).catch(() => {
            logFeatureSad("artifact_live_subscribe", "unyield_send_failed");
          });
        if (mD(p)) I.setTimeout(k, z);
        else k();
      });
    },
    N = [];
  for (let t of h) {
    let d = createMessageEnvelope(),
      i = { sock: t.sock, pid: t.pid, msgId: d.msg_id, yielded: new Set() };
    v.push(i);
    let m = waitForYieldAnswer(d.msg_id, f, {
      sentAt: U,
      expectPid: t.pid,
      ...(e.transport?.timeoutMs !== void 0 && {
        timeoutMs: e.transport.timeoutMs,
      }),
      ...(e.transport?.timers !== void 0 && { timers: e.transport.timers }),
      onLate: (_) => {
        if (_.kind !== "yielded") return;
        for (let k of _.yielded) i.yielded.add(k);
        let p = new Map([...(e.claim?.lost ?? []), ..._.lostTo]);
        (A(
          i,
          new Set(
            [...i.yielded].filter((k) =>
              p.has(k)
                ? q(k, i, p, e.alreadyReplying === !0)
                : !e.alreadyReplying && !D.has(k),
            ),
          ),
        ),
          W(i));
      },
    });
    N.push(
      (async () => {
        try {
          await c(
            t.sock,
            {
              action: "yield_artifact_replies",
              from: G,
              session_id: e.conversationId,
              slugs: f,
              reason: e.reason,
              sent_at: T(),
              claimed_at: U,
              requester: { cwd: he(), ...(l !== void 0 && { tmux: l }) },
            },
            d,
            Y(t.pid),
          );
        } catch (_) {
          if (mD(_)) {
            let p = cancelOutstandingYieldWait(d.msg_id),
              k = p.map(([J]) => J);
            return isProcessRunning(t.pid)
              ? { kind: "unreachable", lost: k, lostTo: p }
              : { kind: "gone", lost: k, lostTo: p };
          }
        }
        return m;
      })(),
    );
  }
  let B = await Promise.all(N),
    x = new Map(),
    L = new Map(),
    C = new Map(),
    S = new Map(e.claim?.lost ?? []),
    O = !0,
    K = !1,
    F = 0;
  B.forEach((t, d) => {
    for (let [i, m] of t.lostTo) S.set(i, m);
    if (t.kind === "gone") return;
    if ((F++, t.kind === "unreachable")) {
      O = !1;
      return;
    }
    if (t.kind === "yielded") {
      for (let i of t.yielded)
        (v[d].yielded.add(i), x.set(i, (x.get(i) ?? 0) + 1));
      for (let i of t.notHeld) L.set(i, (L.get(i) ?? 0) + 1);
      for (let i of new Set([...t.yielded, ...t.notHeld]))
        C.set(i, (C.get(i) ?? 0) + 1);
    } else if (((O = !1), t.kind === "refused")) K = !0;
  });
  let w = new Set(),
    M = new Set();
  if (O && !K)
    for (let t of f) {
      if (S.has(t) || (C.get(t) ?? 0) !== F) continue;
      if ((x.get(t) ?? 0) > 0) (w.add(t), M.add(t));
      else if ((L.get(t) ?? 0) === F) w.add(t);
    }
  for (let t of w) D.add(t);
  if (e.alreadyReplying) {
    for (let t of v) for (let d of t.yielded) if (!S.has(d)) M.add(d);
  }
  for (let t of v) {
    let d = new Set(
      [...t.yielded].filter((i) =>
        S.has(i)
          ? q(i, t, S, e.alreadyReplying === !0)
          : !e.alreadyReplying && !w.has(i),
      ),
    );
    if (d.size > 0) A(t, d);
  }
  if (!e.alreadyReplying)
    B.forEach((t, d) => {
      if (t.kind === "timeout") A(v[d], void 0, { precautionary: f });
    });
  for (let t of v) W(t);
  return {
    armable: w,
    yielded: M,
    kind: w.size > 0 ? "took_over" : "nothing_freed",
    undo: (t) => {
      for (let i of v) A(i, t);
      let d = new Set(v.map((i) => i.msgId));
      for (let i of t ?? f) {
        let m = (b.takenFrom.get(i) ?? []).filter((_) => !d.has(_.msgId));
        if (m.length > 0) b.takenFrom.set(i, m);
        else b.takenFrom.delete(i);
      }
    },
  };
}
function q(e, o, r, a) {
  let s = r.get(e);
  return (s !== void 0 && s === buildUdsAddress(o.sock)) || (!a && !isSlugYielded(e));
}
function notifyTakenOverSlugStopped(e, o = sendControlToUdsSocket) {
  j(e, !0, o);
}
function handBackTakenOverSlug(e, o = sendControlToUdsSocket) {
  j(e, !1, o);
}
function j(e, o, r) {
  let { wakes: a } = ne(),
    s = a.takenFrom.get(e);
  if (s === void 0 || isSlugYielded(e)) return;
  a.takenFrom.delete(e);
  for (let l of s) {
    let f = {
        action: "unyield_artifact_replies",
        orig_msg_id: l.msgId,
        slugs: [e],
        ...(o && { stopped: !0 }),
      },
      h = getCurrentPlatform() !== "windows" ? { expectPeerPid: l.pid } : {};
    r(l.sock, f, h).catch((c) => {
      if (
        (n(`[reply-yield] release to ${Nu(l.sock)} failed: ${qI(String(c))}`),
        mD(c) && !isProcessRunning(l.pid))
      )
        return;
      let u = () =>
        void r(l.sock, f, h).catch(() => {
          logFeatureSad("artifact_live_subscribe", "takeover_release_failed");
        });
      if (mD(c)) unrefTimers.setTimeout(u, z);
      else u();
    });
  }
  logFeatureOk("artifact_live_subscribe", {
    [o ? "takeover_stop_notified" : "takeover_released"]: s.length,
  });
}
function H(e) {
  let o = e.slice(0, 2),
    r = e.length - o.length;
  return `${o.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
}
function repliesYieldedLine(e, o, r, a) {
  let s = describeHolderSession(
      {
        kind: "interactive",
        ...(typeof r.cwd === "string" && { cwd: r.cwd }),
        ...(typeof r.tmux === "string" && { tmux: r.tmux }),
      },
      a,
    ),
    l =
      o === "resume"
        ? `the session that just resumed this conversation in ${s}`
        : `another session of this conversation (${s}), which just published or resumed them there`;
  return `Automatic replies to comments on ${H(e)} moved to ${l}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`;
}
function repliesYieldRevertedLine(e) {
  return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`;
}
function repliesStoppedElsewhereLine(e) {
  return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`;
}
var te =
    "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do \u2014 do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.",
  oe =
    "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.",
  ie =
    "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";
function notifyModelOfReplyYield(e, o) {
  let r =
      e === "yielded"
        ? `Comment replies on ${o} Artifact(s) moved to another session of this conversation`
        : e === "reverted"
          ? `Comment replies on ${o} Artifact(s) are back with this session`
          : `Comment replies on ${o} Artifact(s) were stopped in the other session`,
    a = e === "yielded" ? te : e === "reverted" ? ie : oe;
  enqueuePendingNotification({
    value: buildTaskNotification({
      taskType: ARTIFACT_WATCH_LIFECYCLE_ORIGIN,
      summary: Nt(r),
      body: `
<event>${Nt(a)}</event>`,
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: { kind: "task-notification", source: ARTIFACT_WATCH_LIFECYCLE_ORIGIN },
    agentId: ze(),
  });
}
function registerReplyYieldHolder(e) {
  return (
    setReplyYieldHolder(
      (o) => {
        let r = se(o.slugs, o.msgId),
          a = r.newlyYielded;
        if (a.length > 0)
          logFeatureOk("artifact_comments_autoreact", {
            yielded_to_other_session: a.length,
          });
        return {
          yielded: r.yielded,
          notHeld: r.notHeld,
          ...(a.length > 0 && {
            onDelivered: () => {
              let s = a.filter((l) => isSlugYielded(l));
              for (let l of s) markYieldedSlugAnnounced(l);
              if (s.length > 0) e.yielded(s, o.reason, o.requester);
            },
          }),
        };
      },
      (o, r, a) => {
        for (let u of r) if (a?.stopped?.has(u) ?? !1) markYieldedSlugStoppedElsewhere(u, o);
        let s = new Set(r.filter((u) => isYieldedSlugStoppedElsewhere(u))),
          l = new Set(r.filter((u) => isYieldedSlugAnnounced(u))),
          f = re(o, r),
          h = f.filter(
            (u) =>
              l.has(u) && !isSlugStopped(u) && E(u) && !(a?.transferring?.has(u) ?? !1),
          );
        if (h.length > 0) e.reverted(h);
        let c = f.filter((u) => l.has(u) && s.has(u));
        if (c.length > 0) e.stoppedElsewhere(c);
        return f;
      },
    ),
    () => setReplyYieldHolder(null)
  );
}
function se(e, o) {
  let { live: r, autoReact: a, durable: s } = ne(),
    l = [],
    f = [],
    h = [];
  for (let c of e) {
    if (isSlugYielded(c)) {
      (recordSlugYield(c, o), l.push(c));
      continue;
    }
    let u = E(c),
      I = isSlugSwept(c) && !isSlugSweptOrYielded(c),
      T =
        a.enabledMemo !== !1 &&
        !a.userDisarmed &&
        !s.stopLatches.isStopped(c) &&
        (!isSlugStopped(c) || I);
    if (!u || !T) {
      f.push(c);
      continue;
    }
    (recordSlugYield(c, o), resetWakeState(c), bumpSlugEpoch(c), refreshSummonArmForSlug(r, c), l.push(c), h.push(c));
  }
  return { yielded: l, notHeld: f, newlyYielded: h };
}
function E(e) {
  let { live: o } = ne(),
    r = o.supervisors.get(e);
  return (
    (r !== void 0 && !r.stopped && r.autoReactWiring !== void 0) ||
    o.inFlightWiredIntent.has(e) ||
    getBootingAutoReactArmSlugs().has(e)
  );
}
function re(e, o) {
  let { live: r } = ne(),
    a = [];
  for (let s of o) {
    if (!releaseYieldedSlugMessage(s, e)) continue;
    if ((refreshSummonArmForSlug(r, s), isSlugStopped(s) && !isSlugSwept(s))) (Ibe(s), notifyTakenOverSlugStopped(s));
    a.push(s);
    let l = r.supervisors.get(s);
    if (!isSlugStopped(s) && !E(s)) handBackTakenOverSlug(s);
    let f = getWakeState(s).lastWakeArgs;
    if (!isSlugStopped(s) && E(s) && l?.taskId !== void 0 && isMonitorSocketOpen(l.taskId) && f !== null)
      scheduleArtifactAutoReactWake({
        ...f,
        seed: !1,
        confirm: void 0,
        confirmBase: void 0,
        confirmAfter: void 0,
        reentry: void 0,
        idlePass: void 0,
        suppressSummonStatus: void 0,
      });
  }
  if (a.length > 0)
    logFeatureOk("artifact_comments_autoreact", { yield_reverted: a.length });
  return a;
}
export { requestReplyTakeover, notifyTakenOverSlugStopped, handBackTakenOverSlug, repliesYieldedLine, repliesYieldRevertedLine, repliesStoppedElsewhereLine, notifyModelOfReplyYield, registerReplyYieldHolder };

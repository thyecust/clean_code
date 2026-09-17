// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oo, parseShortId } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withDeadline } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { hasIsolatePeerMachines } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { getTeamName } from "./teammate-context.js";
import {
  sanitizeDisplayName,
  slugify,
  isUnusableRecipientName,
  isTeamLeadMember,
  getTeamLeadAgentId,
  getAddressableTeamMembers,
  isReservedRecipientName,
  parseAgentDisplayName,
  buildRecipientListing,
  resolveInProcessRecipient,
  findMemberByName,
  looksLikeAddress,
  createShortEntityRef,
  collectLocalBridgeSessionIds,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isLocalAgentTask, findNearNameMatches, isMainSessionLocalAgent, loadLivePeerSessions, getBridgeSessionListing } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isCrossSessionMessagingEnabled } from "../跨会话消息-UDS/chunk-rfb3s38d.js";
import { readTeamFileAsync } from "./team-file-store.js";
import { refreshPeerIdentityOwner, loadBridgePeerSessionRows, isBridgeRowsIdentityCurrent, recordBridgeSessionRows, forgetBridgeSessionRows, excludeCloudKnownBridgeRows, isCloudListUnavailable, listCloudPeerSessions } from "../远程控制-Bridge/chunk-1yq098a7.js";
import { MAIN_CONVERSATION_NAME, TEAM_LEAD_AGENT_NAME } from "./chunk-enjekn9t.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
async function checkCrossSessionSendPermission({
  tool: e,
  input: i,
  context: o,
  canUseTool: s,
  assistantMessage: t,
  permissionPhaseRan: r,
  recipientLabel: a,
  parse: l,
}) {
  if (!(hasIsolatePeerMachines() && !r)) return { proceed: !0, input: i, asked: !1 };
  let u = await s(e, i, { ...o, toolUseId: void 0 }, t, "");
  if (u.behavior !== "allow")
    return {
      proceed: !1,
      asked: !0,
      reason: "denied",
      message:
        u.behavior === "deny" && u.message
          ? u.message
          : `isolatePeerMachines is enabled: sending to ${a} needs your approval \u2014 nothing was sent.`,
    };
  if (u.updatedInput === void 0) return { proceed: !0, input: i, asked: !0 };
  let c = l(u.updatedInput);
  if (!c.success)
    return {
      proceed: !1,
      asked: !0,
      reason: "bad_shape",
      message: `The permission handler narrowed the input to a shape ${e.name} does not accept \u2014 nothing was sent.`,
    };
  if (c.data.to !== i.to)
    return {
      proceed: !1,
      asked: !0,
      reason: "recipient_changed",
      message: `The permission handler changed the recipient (from ${a}) after this send was resolved \u2014 nothing was sent. Send again to the recipient you intend.`,
    };
  if (c.data.message !== void 0 && typeof c.data.message !== "string")
    return {
      proceed: !1,
      asked: !0,
      reason: "non_text_message",
      message:
        "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session \u2014 nothing was sent.",
    };
  return { proceed: !0, input: c.data, asked: !0 };
}
function pinSendMessageRecipient(e, i, o) {
  let s = slugify(i);
  e((t) =>
    t.sendMessagePins[s]?.id === o.id
      ? t
      : {
          ...t,
          sendMessagePins: {
            ...t.sendMessagePins,
            [s]: { id: o.id, name: i, ref: createShortEntityRef(o.kind, o.id) },
          },
        },
  );
}
var PREVIOUSLY_USED_NAME_NOTE =
    "Note: messaging a new session for the first time under a previously used name (was it restarted?)",
  OTHER_LOCAL_SESSION_LABEL = "another Claude session on this machine";
function buildSentUnderSessionAddressNote(e, i, o) {
  if (e === void 0) return { message: "", display: "" };
  let s = (i && sanitizeDisplayName(i)) || "an agent in this session";
  return o.oneWay
    ? {
        message: "; sent under this session's address, not this agent's",
        display: ` (sent by ${s}, under this session's name)`,
      }
    : {
        message:
          "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent",
        display: ` (sent by ${s}; replies go to the main conversation)`,
      };
}
function describeRemoteSessionVia(e) {
  return e === "cloud"
    ? "a Claude session running in the cloud"
    : "a Claude session on another machine, over Remote Control";
}
var UNCONFIRMED_DELIVERY_NOTE =
    "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot",
  Ce =
    " (accepted by the server; delivery not confirmed, that session may be on an older version)";
function buildUnconfirmedDeliveryNote(e) {
  return e ? { message: UNCONFIRMED_DELIVERY_NOTE, display: Ce } : { message: "", display: "" };
}
function buildLocalSessionIdentityNotes(e) {
  return `${e.alsoListedRemotely ? "; it is also connected via Remote Control" : ""}${e.remoteNamesakeClaimedLocally ? `; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? re : ""}`;
}
function buildConfirmedDeliverySwitchHint(e, i, o = "live session", s = "delivery") {
  return ae(
    e,
    `. ${s === "subscription" ? "The subscription" : "This"} went to the one this conversation confirmed; to switch, re-send with that ${o === "agent" ? "agent" : "session"}'s 'name [ref]'${i}.`,
    o,
  );
}
function buildConfirmedDeliveryNotice(e, i = "live session", o = "delivery") {
  return ae(
    e,
    `; ${o === "subscription" ? "the subscription" : "this"} went to the one confirmed earlier in this conversation.`,
    i,
  );
}
function ae(e, i, o) {
  let s = e.previouslyPinned
      ? `
${PREVIOUSLY_USED_NAME_NOTE}`
      : "",
    t = e.sameNamedSiblings
      ? `
Note: ${e.sameNamedSiblings} other ${pluralize(e.sameNamedSiblings, `${o} is`, `${o}s are`)} also named '${e.displayName}'${i}`
      : "";
  return `${s}${t}`;
}
function buildRemoteSessionReachabilityNotes(e) {
  return `${e.offline ? Ie : ""}${e.remoteNamesakeClaimedLocally ? `; another session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? re : ""}`;
}
var Ie =
  "; it is offline right now \u2014 delivery is queued until that machine reconnects";
function describeUncheckedSessionScope(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable
    ? "the sessions on this machine could not be listed just now"
    : e.localUnavailable
      ? "this machine's and your account's other sessions could not all be checked just now"
      : "your account's other sessions could not be checked just now";
}
function describePinnedNameClaimedLocally(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`;
}
var re =
    "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen",
  SESSION_LIST_TRUNCATED_NOTE = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`,
  SESSION_LIST_TRUNCATED_LABEL = "your session list was too long to check completely";
async function resolveMessageRecipient(e, i, o, s, t, r) {
  await refreshPeerIdentityOwner({ refresh: !0, credentials: r });
  let a = slugify(i),
    l = getTeamName(s.teamContext),
    d = null;
  if (looksLikeAddress(i)) return { kind: "not-found", closest: [] };
  if (typeof o === "string") {
    if (i === MAIN_CONVERSATION_NAME) return { kind: "main" };
    let b = s.teamContext?.teammates ?? {},
      k = Object.entries(b).find(([, h]) => h.name === i),
      _ = parseShortId(i) ?? parseShortId(a),
      m = k || _ ? void 0 : s.agentNameRegistry.get(i),
      w = _ ?? m;
    if (w) return X(s, w, i);
    if (k)
      return {
        kind: "mailbox",
        recipientName: i,
        memberAgentId: k[0],
        memberIdentitySource: "team-context",
      };
    let ne = parseAgentDisplayName(i);
    if (l) {
      if (i === TEAM_LEAD_AGENT_NAME) return { kind: "mailbox", recipientName: i };
      if (((d = await readTeamFileAsync(l, t)), ne === null && d !== null)) {
        let h = getAddressableTeamMembers(d, getTeamLeadAgentId(s)).find((p) => p.name === i);
        if (h !== void 0)
          return {
            kind: "mailbox",
            recipientName: i,
            memberAgentId: h.agentId,
            memberIdentitySource: "roster",
          };
      }
    }
    let ke = getTeamLeadAgentId(s),
      V = Object.entries(b).find(
        ([h, p]) =>
          (isTeamLeadMember({ name: p.name, agentId: h }, ke) || !isUnusableRecipientName(p.name)) &&
          slugify(p.name) === a,
      );
    if (V !== void 0)
      return {
        kind: "mailbox",
        recipientName: V[1].name,
        memberAgentId: V[0],
        memberIdentitySource: "team-context",
      };
    for (let [h, p] of s.agentNameRegistry)
      if (!isUnusableRecipientName(h) && slugify(h) === a) return X(s, p, h);
    let A = ne;
    if (A) {
      let [h, p] = await Promise.all([loadLivePeerSessions(), listCloudPeerSessions(e, r)]),
        F = h.sessions,
        W = await de(e, s.sendMessagePins, slugify(A.name), p, a, getBridgeSessionListing(e), r),
        { rows: G, unavailable: Re } = W,
        S = buildRecipientListing(s, { teamFile: d, sessions: F, cloud: p.sessions, bridge: G }),
        T = slugify(A.name),
        ie = (N, H, Ne, xe) => {
          let M = B(N, s);
          return M.kind === "local-session" || M.kind === "cloud-session"
            ? {
                ...M,
                ...J(M, T, H, {
                  socksMirroredRemotely: fe(F, p, Ne),
                  searchTruncated: p.truncated === !0 || xe,
                }),
              }
            : M;
        },
        se = ce(S, T, A.ref);
      if (se) return ie(se, S, G, W.truncated);
      let te = Re,
        oe = W.truncated;
      if (G === void 0) {
        let N = await q(e, p, a, r);
        if (((te = N.unavailable), (oe = N.truncated), N.rows.length > 0)) {
          S = buildRecipientListing(s, {
            teamFile: d,
            sessions: F,
            cloud: p.sessions,
            bridge: N.rows,
          });
          let H = ce(S, T, A.ref);
          if (H) return ie(H, S, N.rows, N.truncated);
        }
      }
      return {
        ...L(T, S),
        ...ue(p, te, h.unavailable, { remoteTruncated: oe }),
        ...C(s.sendMessagePins, [T], collectLocalBridgeSessionIds(F)),
      };
    }
  }
  if (typeof o !== "string") {
    if (o.type === "shutdown_response")
      return { kind: "mailbox", recipientName: i };
    if (i !== TEAM_LEAD_AGENT_NAME && isReservedRecipientName(i))
      return L(
        slugify(i),
        buildRecipientListing(s, { teamFile: null, sessions: [] }),
        (m) => m.kind === "teammate",
      );
    if (!l) return { kind: "mailbox", recipientName: i };
    if (i === TEAM_LEAD_AGENT_NAME) return { kind: "mailbox", recipientName: i };
    let b = Object.entries(s.teamContext?.teammates ?? {}).filter(
        ([m, w]) => isTeamLeadMember({ name: w.name, agentId: m }, getTeamLeadAgentId(s)) || !isUnusableRecipientName(w.name),
      ),
      k = b.find(([, m]) => m.name === i);
    if (k)
      return {
        kind: "mailbox",
        recipientName: i,
        memberAgentId: k[0],
        memberIdentitySource: "team-context",
      };
    if (((d = await readTeamFileAsync(l, t)), parseAgentDisplayName(i) === null && d !== null)) {
      let m = getAddressableTeamMembers(d, getTeamLeadAgentId(s)).find((w) => w.name === i);
      if (m !== void 0)
        return {
          kind: "mailbox",
          recipientName: i,
          memberAgentId: m.agentId,
          memberIdentitySource: "roster",
        };
    }
    let _ = b.find(([, m]) => slugify(m.name) === a);
    if (_ !== void 0)
      return {
        kind: "mailbox",
        recipientName: _[1].name,
        memberAgentId: _[0],
        memberIdentitySource: "team-context",
      };
    if (parseAgentDisplayName(i) === null && d !== null) {
      let m = findMemberByName(getAddressableTeamMembers(d, getTeamLeadAgentId(s)), i);
      if (m !== void 0)
        return {
          kind: "mailbox",
          recipientName: m.name,
          displayName: i,
          memberAgentId: m.agentId,
          memberIdentitySource: "roster",
        };
    }
    if (d === null) return { kind: "mailbox", recipientName: i };
    return L(
      a,
      buildRecipientListing(s, { teamFile: d, sessions: [] }),
      (m) => m.kind === "teammate",
    );
  }
  if (l && d === null) {
    if (isReservedRecipientName(i)) return L(a, buildRecipientListing(s, { teamFile: d, sessions: [] }));
    return { kind: "mailbox", recipientName: i };
  }
  let [u, c] = await Promise.all([loadLivePeerSessions(), listCloudPeerSessions(e, r)]),
    v = u.sessions,
    z = await de(e, s.sendMessagePins, a, c, a, getBridgeSessionListing(e), r),
    { rows: I, unavailable: O, truncated: j } = z,
    Q = collectLocalBridgeSessionIds(v),
    K = () => ({
      cloudUnavailable: ge(c.unavailable),
      bridgeUnavailable: O,
      localClaimedRemoteBodies: Q,
      bridgeSettled: I !== void 0,
      localUnavailable: u.unavailable,
      socksMirroredRemotely: fe(v, c, I),
      searchTruncated: c.truncated === !0 || j,
    }),
    R = buildRecipientListing(s, { teamFile: d, sessions: v, cloud: c.sessions, bridge: I }),
    U = R.byName.get(a)?.length === 1 ? R.byName.get(a)[0] : void 0,
    Z = P(s.sendMessagePins, a),
    ye =
      U !== void 0 &&
      Z !== void 0 &&
      Object.hasOwn(s.sendMessagePins, a) &&
      s.sendMessagePins[a].id === U.id,
    ve =
      U !== void 0 &&
      (U.kind === "session" || U.kind === "cloud-session") &&
      Z !== "agent" &&
      !ye;
  if (I === void 0 && ve) {
    let b = await q(e, c, a, r);
    ((I = b.rows),
      (O = b.unavailable),
      (j = b.truncated),
      (R = buildRecipientListing(s, {
        teamFile: d,
        sessions: v,
        cloud: c.sessions,
        bridge: b.rows,
      })));
  }
  let ee = le(R, a, i, s, K());
  if (ee) return ee;
  if (I === void 0) {
    let b = await q(e, c, a, r);
    if (
      ((I = b.rows), (O = b.unavailable), (j = b.truncated), b.rows.length > 0)
    ) {
      R = buildRecipientListing(s, {
        teamFile: d,
        sessions: v,
        cloud: c.sessions,
        bridge: b.rows,
      });
      let k = le(R, a, i, s, K());
      if (k) return k;
    }
  }
  return (
    Pe(R, a, s, K()) ?? {
      ...L(a, R),
      ...ue(c, O, u.unavailable, { remoteTruncated: j }),
      ...C(s.sendMessagePins, [a], Q),
    }
  );
}
function we(e, i, o) {
  let s = P(e, i);
  if (s !== "cloud" && s !== "remote-control") return;
  let t = e[i];
  return o.has(sessionIdBody(t.id)) ? t.name : void 0;
}
function _e(e, i) {
  let o = i[0];
  if (o === void 0 || o.length < 3) return i;
  let s = Object.keys(e).filter(
    (t) => t !== o && t.startsWith(o) && !i.includes(t),
  );
  return s.length === 0 ? i : [...i, ...s];
}
function C(e, i, o) {
  for (let s of _e(e, i)) {
    let t = we(e, s, o);
    if (t !== void 0) return { pinnedIdentityClaimedLocally: t };
  }
  return {};
}
function P(e, i) {
  let o = Object.hasOwn(e, i) ? e[i] : void 0;
  if (o === void 0) return;
  if (parseShortId(o.id) !== null) return "agent";
  if (o.id.startsWith("cse_")) return "cloud";
  return sessionIdBody(o.id) !== o.id ? "remote-control" : "local";
}
async function de(e, i, o, s, t, r, a) {
  let l = r?.rows;
  if (!Se(i, o, s.sessions, l))
    return {
      rows: l,
      unavailable: void 0,
      truncated: r !== void 0 && r.truncated,
    };
  let d = await q(e, s, t, a);
  return {
    rows: d.unavailable === void 0 || l === void 0 ? d.rows : l,
    unavailable: d.unavailable,
    truncated:
      d.unavailable === void 0 || r === void 0 ? d.truncated : r.truncated,
  };
}
function Se(e, i, o, s) {
  let t = P(e, i);
  if (t !== "remote-control" && t !== "cloud") return !1;
  let r = sessionIdBody(e[i].id);
  if (o.some((a) => sessionIdBody(a.id) === r)) return !1;
  return s === void 0 || !s.some((a) => sessionIdBody(a.id) === r);
}
function E(e) {
  return {
    ...(e.cloudUnavailable && { cloudUnavailable: e.cloudUnavailable }),
    ...(e.bridgeUnavailable && { bridgeUnavailable: e.bridgeUnavailable }),
    ...(e.localUnavailable && { localUnavailable: !0 }),
    ...(e.searchTruncated && { searchTruncated: !0 }),
  };
}
function le(e, i, o, s, t) {
  let r = resolveInProcessRecipient(e.byName, i, o);
  if (r) {
    if (r.kind === "ambiguous") {
      let a = e.byName.get(i),
        l = pe(s.sendMessagePins, i, a, o, t);
      if (l) return he(l, a, s, i, e, t);
      let d = C(s.sendMessagePins, [i], t.localClaimedRemoteBodies),
        u = a[0],
        c = P(s.sendMessagePins, i);
      if (
        a.length === 1 &&
        (u.kind === "session" ||
          u.kind === "cloud-session" ||
          u.kind === "bridge-session") &&
        !t.cloudUnavailable &&
        t.bridgeSettled &&
        !t.bridgeUnavailable &&
        !t.localUnavailable &&
        d.pinnedIdentityClaimedLocally === void 0 &&
        c !== "agent" &&
        !u.derivedName
      ) {
        let v = B(u, s);
        if (v.kind === "local-session" || v.kind === "cloud-session")
          return {
            ...v,
            exactUnique: !0,
            ...(c !== void 0 && { previouslyPinned: !0 }),
            ...J(v, i, e, t),
          };
      }
      return { ...D(a, "exact"), ...E(t), ...d };
    }
    return B(r.candidate, s);
  }
  return;
}
function Pe(e, i, o, s) {
  if (i.length >= 3) {
    let t = [...e.byName.keys()].filter((r) => r.startsWith(i));
    if (t.length === 1) {
      let r = resolveInProcessRecipient(e.byName, t[0]),
        a = P(o.sendMessagePins, i),
        l =
          C(o.sendMessagePins, [i], s.localClaimedRemoteBodies)
            .pinnedIdentityClaimedLocally !== void 0;
      if ((a !== void 0 && a !== "agent") || l) {
        let d = e.byName.get(t[0]);
        return (
          logFeatureSad(
            "send_message_prefix_match",
            a !== void 0 && a !== "agent"
              ? "typed_name_pinned"
              : "prefix_of_claimed_pin",
          ),
          {
            ...D(r.kind === "one" ? [r.candidate] : d, "prefix"),
            ...E(s),
            ...C(o.sendMessagePins, [i, t[0]], s.localClaimedRemoteBodies),
          }
        );
      }
      if (r.kind === "ambiguous") {
        let d = e.byName.get(t[0]),
          u = pe(o.sendMessagePins, t[0], d, void 0, s, !0);
        if (u)
          return (
            logFeatureOk("send_message_prefix_match", {
              input_len: i.length,
              index_size: e.candidates.length,
              pinned: 1,
            }),
            he(u, d, o, t[0], e, s)
          );
        if (d.length === 1) logFeatureSad("send_message_prefix_match", "confirm_required");
        else logFeatureBad("send_message_prefix_match", "ambiguous_name");
        return {
          ...D(d, "prefix"),
          ...E(s),
          ...C(o.sendMessagePins, [i, t[0]], s.localClaimedRemoteBodies),
        };
      }
      if (s.cloudUnavailable || s.bridgeUnavailable || s.localUnavailable)
        return (
          logFeatureSad(
            "send_message_prefix_match",
            s.cloudUnavailable || s.bridgeUnavailable
              ? "remote_unsearched"
              : "local_unsearched",
          ),
          {
            ...D([r.candidate], "prefix"),
            ...E(s),
            ...C(o.sendMessagePins, [i, t[0]], s.localClaimedRemoteBodies),
          }
        );
      return (
        logFeatureOk("send_message_prefix_match", {
          input_len: i.length,
          index_size: e.candidates.length,
          ...(s.searchTruncated && { search_truncated: !0 }),
        }),
        B(r.candidate, o)
      );
    }
    if (t.length > 1)
      return (
        logFeatureBad("send_message_prefix_match", "ambiguous_prefix"),
        {
          ...E(s),
          ...C(o.sendMessagePins, [i, ...t], s.localClaimedRemoteBodies),
          ...D(
            t.flatMap((r) => {
              let a = e.byName.get(r),
                l = resolveInProcessRecipient(e.byName, r);
              return l?.kind === "one" ? [l.candidate] : a;
            }),
            "prefix",
          ),
        }
      );
  }
  return;
}
function ce(e, i, o) {
  let s = e.byName.get(i) ?? [],
    t = resolveInProcessRecipient(e.byName, i);
  return (t?.kind === "one" ? [t.candidate] : s).find((a) => a.ref === o);
}
async function q(e, i, o, s) {
  if (isCrossSessionMessagingEnabled()) {
    let t = !isCloudListUnavailable(i.unavailable),
      r = loadBridgePeerSessionRows(e, s),
      a = await withDeadline(r, me);
    if (a === void 0) {
      if (
        (logForDebugging(
          `[bridge:resolve] "${o}": Remote Control population not ready within ${me}ms (cold) \u2014 not searched, disclosing a hedge`,
          { level: "warn" },
        ),
        t)
      )
        r.then((d) => recordBridgeSessionRows(e, d, excludeCloudKnownBridgeRows(d.rows, i.sessions)));
      return { rows: [], unavailable: "timeout", truncated: !1 };
    }
    if (a.failed || (a.identityKey !== null && !isBridgeRowsIdentityCurrent(a)))
      return (
        logForDebugging(
          `[bridge:resolve] "${o}": Remote Control walk ${a.failed ? "failed" : "ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`,
          { level: "warn" },
        ),
        { rows: [], unavailable: "fetch_failed", truncated: !1 }
      );
    let l = excludeCloudKnownBridgeRows(a.rows, i.sessions);
    if (t) recordBridgeSessionRows(e, a, l);
    else forgetBridgeSessionRows(e, a);
    return (
      logForDebugging(
        `[bridge:resolve] "${o}": ${a.rows.length} Remote Control rows, ${l.length} listed (cold${t ? ", recorded" : ", not recorded \u2014 cloud list failed"})`,
      ),
      { rows: l, unavailable: void 0, truncated: a.truncated === !0 }
    );
  }
  return { rows: [], unavailable: void 0, truncated: !1 };
}
function ge(e) {
  return isCloudListUnavailable(e) ? e : void 0;
}
function ue(e, i, o, { remoteTruncated: s }) {
  return {
    cloudUnavailable: ge(e.unavailable),
    ...(i !== void 0 && { bridgeUnavailable: i }),
    ...(o && { localUnavailable: !0 }),
    ...((e.truncated === !0 || s) && { searchTruncated: !0 }),
  };
}
function X(e, i, o) {
  let s = e.tasks[i];
  if (isLocalAgentTask(s) && !isMainSessionLocalAgent(s)) {
    if (s.status === "running")
      return { kind: "agent-live", agentId: i, agentName: o };
    if (s.stoppedByUser) return { kind: "agent-stopped-by-user", agentName: o };
    return {
      kind: "agent-stopped",
      agentId: i,
      status: s.status,
      agentName: o,
    };
  }
  return { kind: "agent-evicted", agentId: i, agentName: o };
}
function B(e, i) {
  switch (e.kind) {
    case "main":
      return { kind: "main" };
    case "teammate":
      return {
        kind: "mailbox",
        recipientName: e.name,
        memberAgentId: e.id,
        memberIdentitySource:
          e.where === "in-process" ? "team-context" : "roster",
      };
    case "subagent":
      return X(i, oo(e.id), e.name);
    case "session":
      return { kind: "local-session", sock: e.sock, displayName: e.name };
    case "cloud-session":
    case "bridge-session":
      return {
        kind: "cloud-session",
        via: e.where === "cloud" ? "cloud" : "remote-control",
        refKind: e.kind,
        sessionId: e.id,
        displayName: e.name,
        ...(e.offline && { offline: !0 }),
        ...(e.reportsInbound && { reportsInbound: !0 }),
        ...(e.inboundReportUnavailable && { inboundReportUnavailable: !0 }),
      };
  }
}
var be = 3,
  me = 5000;
function D(e, i) {
  return {
    kind: "ambiguous",
    candidates: e.slice(0, be),
    total: e.length,
    matchedBy: i,
  };
}
function L(e, i, o) {
  let s = o ? i.candidates.filter(o) : i.candidates,
    t = dedupe(s.map((a) => slugify(a.name)));
  return {
    kind: "not-found",
    closest: findNearNameMatches(e, t, be).map((a) => s.find((l) => slugify(l.name) === a)),
  };
}
function pe(e, i, o, s, t, r = !1) {
  let a = Object.hasOwn(e, i) ? e[i] : void 0;
  if (a === void 0) return;
  let l = P(e, i);
  if (l === "agent") return;
  let d = l !== "local";
  if (d && t.localClaimedRemoteBodies.has(sessionIdBody(a.id))) return;
  if (
    (l === "cloud" && t.cloudUnavailable) ||
    (l === "remote-control" && t.bridgeUnavailable) ||
    (l === "local" && t.localUnavailable) ||
    (r && (t.cloudUnavailable || t.bridgeUnavailable || t.localUnavailable))
  )
    return;
  let u = o.find(
    (c) =>
      (d
        ? c.kind === "cloud-session" || c.kind === "bridge-session"
        : c.kind === "session") &&
      c.where !== "in-process" &&
      c.id === a.id,
  );
  if (u === void 0) {
    if (!(d && t.searchTruncated)) logFeatureSad("send_message_pin", "stale");
    return;
  }
  if (s !== void 0 && u.name !== s && o.some((c) => c.name === s)) return;
  return (logFeatureOk("send_message_pin"), u);
}
function he(e, i, o, s, t, r) {
  let a = B(e, o);
  if (a.kind !== "local-session" && a.kind !== "cloud-session") return a;
  return {
    ...a,
    ...(i.length > 1 && { sameNamedSiblings: i.length - 1 }),
    ...J(a, s, t, r),
  };
}
function fe(e, i, o) {
  let s = new Set([
    ...i.sessions.map((t) => sessionIdBody(t.id)),
    ...(o ?? []).map((t) => sessionIdBody(t.id)),
  ]);
  return new Set(
    e.flatMap((t) =>
      t.bridgeSessionId !== void 0 && s.has(sessionIdBody(t.bridgeSessionId))
        ? [t.sock]
        : [],
    ),
  );
}
function J(e, i, o, s) {
  return {
    ...(e.kind === "local-session" &&
      s.socksMirroredRemotely.has(e.sock) && { alsoListedRemotely: !0 }),
    ...([...(o.remoteNamesClaimedLocally.get(i) ?? [])].some(
      (t) => e.kind !== "local-session" || t !== e.sock,
    ) && { remoteNamesakeClaimedLocally: !0 }),
    ...(s.searchTruncated && { searchTruncated: !0 }),
  };
}
export {
  checkCrossSessionSendPermission,
  pinSendMessageRecipient,
  PREVIOUSLY_USED_NAME_NOTE,
  OTHER_LOCAL_SESSION_LABEL,
  buildSentUnderSessionAddressNote,
  describeRemoteSessionVia,
  UNCONFIRMED_DELIVERY_NOTE,
  buildUnconfirmedDeliveryNote,
  buildLocalSessionIdentityNotes,
  buildConfirmedDeliverySwitchHint,
  buildConfirmedDeliveryNotice,
  buildRemoteSessionReachabilityNotes,
  describeUncheckedSessionScope,
  describePinnedNameClaimedLocally,
  SESSION_LIST_TRUNCATED_NOTE,
  SESSION_LIST_TRUNCATED_LABEL,
  resolveMessageRecipient,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, K, ze } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep, withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { ud, l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, Is, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { jo } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { env as a, udsEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getProcessStartTokenLinuxSync, getAncestorPidsLinuxSync, getAncestorPidsCheckedAsync, getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import {
  wor,
  hU,
  Kme,
  Pse,
  Dse,
  uf,
  a0,
  Jvn,
  VCt,
  Wor,
  Zy,
  Gor,
  qor,
  Kor,
  Xor,
  isRegistrySweepPermitted,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Vn } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { BS, rzn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { zy } from "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import { hCe, ds } from "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import {
  Nu,
  qI,
  ybt,
  S7e,
  IJn,
  CSn,
  vSn,
  creditPacerForHeldSend,
  debitPacerForReleasedSend,
  admitReceiptForOutstandingSend,
  admitDroppedIdsByDestination,
  sendControlToUdsSocket,
  registeredLivePeerForSocket,
  registeredInboxesOfPids,
} from "./chunk-ddtmwhn7.js";
import { getSessionNamingState, noteVettedCorrespondent } from "./chunk-9kzxq41e.js";
import { OJn, DJn, v7e } from "../后台任务-Shell管理/chunk-djserjj5.js";
import {
  kPe,
  Csn,
  a6n,
  vsn,
  iqe,
  HPe,
  ksn,
  cqe,
  PPe,
  Gee,
} from "../权限系统/chunk-4tar9p3n.js";
import { l9n, c9n, u9n, m9n, g9n, lan, can, y9n } from "../Artifact发布-渲染/chunk-qdg189tc.js";
import {
  hsn,
  _sn,
  ysn,
  QNt,
  nqe,
  bsn,
  t1t,
  r1t,
  Esn,
  mdt,
} from "../Teammates团队/chunk-nhk351pe.js";
import { rOe } from "../../01-核心基础设施/共享小工具-未细化/chunk-y2pwa8n5.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { randomBytes, randomUUID } from "crypto";
import { unlinkSync } from "fs";
import {
  chmod,
  lstat,
  mkdir,
  readdir,
  readlink,
  realpath,
  unlink,
} from "fs/promises";
import { createServer, Socket as je } from "net";
import {
  basename,
  dirname,
  isAbsolute,
  join as U,
  normalize,
  resolve,
} from "path";
var Pe = 500,
  Ne = 32;
class ye {
  verdicts = new Map();
  lookup(e) {
    let t = this.verdicts.get(e);
    if (t !== void 0) (this.verdicts.delete(e), this.verdicts.set(e, t));
    return t;
  }
  remember(e, t) {
    if (this.verdicts.size >= Pe) {
      let i = this.verdicts.keys().next().value;
      if (i !== void 0) this.verdicts.delete(i);
    }
    this.verdicts.set(e, t);
  }
}
var Le = new j(() => new ye()),
  Ke = {
    readAncestors: async (e) => {
      let { ancestors: t, readFailed: i, truncated: r } = await getAncestorPidsCheckedAsync(e);
      if (r && !i && !t.includes(process.pid))
        ({ ancestors: t, readFailed: i, truncated: r } = await getAncestorPidsCheckedAsync(e, Ne));
      if (!t.includes(process.pid)) {
        if (i) throw Error("ancestry walk failed");
        if (r)
          throw Error("ancestry walk truncated (maxDepth) above the prefix");
      }
      return t;
    },
    readStartToken: (e) => getProcessStartTimeAsync(e, { skipCache: !0 }),
  };
function qe(e, t = process.pid) {
  if (t === 1) return !1;
  return Array.isArray(e) && e.includes(t);
}
async function We(e, t = Ke) {
  if (e === void 0 || !Number.isInteger(e) || e <= 0) return "no-evidence";
  let i;
  try {
    i = await t.readStartToken(e);
  } catch {
    i = void 0;
  }
  if (i === void 0) return "no-evidence";
  let r = `${e}:${i}`,
    d = Le.of(B().host),
    s = d.lookup(r);
  if (s !== void 0) return s ? "self" : "not-self";
  let w;
  try {
    w = await t.readAncestors(e);
  } catch {
    return "no-evidence";
  }
  let o;
  try {
    o = await t.readStartToken(e);
  } catch {
    o = void 0;
  }
  if (o !== i) return "no-evidence";
  let p = process.pid !== 1 && w.includes(process.pid);
  return (d.remember(r, p), p ? "self" : "not-self");
}
async function _e(e) {
  let t = e.selfPid ?? process.pid;
  if (e.selfSentAncestry !== void 0 && t !== 1)
    return qe(e.selfSentAncestry, t);
  if (!e.needsVerdict) return !1;
  if (t === 1 || e.platform === "windows") return e.childTokenPresented;
  if (e.platform !== "macos") return !1;
  let i = await (e.verdictOf ?? We)(e.verifiedPeerPid);
  return i === "self" || (i === "no-evidence" && e.childTokenPresented);
}
var ne = 30000;
class we {
  activeSocketPath = void 0;
  connectedClients = new Set();
  onEnqueue = null;
  onRename = null;
  onEnableRemoteControl = null;
  onPeerMessageStatus = null;
  processingChain = Promise.resolve();
  activeTokens = void 0;
  activeKeyFile = void 0;
  authRequired = !1;
  authOkReported = !1;
  authDropReported = !1;
  firstLineDeadlineMs = ne;
  silentDropReported = !1;
  lastStartFailureCause = void 0;
  lastStartDegradedCause = void 0;
  lastStartFailureDetail = void 0;
  startInFlight = !1;
  peerDirOwnerUids = [];
  reset() {
    ((this.onEnqueue = null),
      (this.onRename = null),
      (this.onEnableRemoteControl = null),
      (this.onPeerMessageStatus = null),
      (this.activeSocketPath = void 0),
      this.connectedClients.clear(),
      (this.processingChain = Promise.resolve()),
      (this.activeTokens = void 0),
      (this.activeKeyFile = void 0),
      (this.authRequired = !1),
      (this.authOkReported = !1),
      (this.authDropReported = !1),
      (this.firstLineDeadlineMs = ne),
      (this.silentDropReported = !1),
      (this.lastStartFailureCause = void 0),
      (this.lastStartDegradedCause = void 0),
      (this.lastStartFailureDetail = void 0),
      (this.startInFlight = !1),
      (this.peerDirOwnerUids = []));
  }
}
function pDt(e) {
  if (e.startInFlight || e.activeSocketPath !== void 0) return;
  switch (e.lastStartFailureCause) {
    case "socket_dir_refused":
      return e.lastStartFailureDetail !== void 0
        ? `its socket directory could not be set up: ${e.lastStartFailureDetail}`
        : "its socket directory could not be set up";
    case "path_refused":
      return "its socket path is not a usable local address";
    case "bind_failed":
      return "it could not be started";
    case "key_publish_failed":
      return "its peer key could not be published";
    case "post_bind_setup_failed":
      return "setting it up after bind failed";
    case void 0:
      return;
  }
}
var Kat = new j(() => new we());
function c() {
  return Kat.of(B().host);
}
function xgr() {
  return c().lastStartFailureCause;
}
function Hgr() {
  return c().lastStartDegradedCause;
}
function be(e) {
  let t = c();
  if (
    e === "key_publish_failed" &&
    t.lastStartDegradedCause === "primary_dir_refused_fell_back"
  )
    return;
  t.lastStartDegradedCause = e;
}
function fDt() {
  return pDt(c());
}
function me(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e)) return !1;
  return typeof e.type === "string";
}
function mDt(e) {
  c().onRename = e;
}
function Igr(e) {
  c().onEnableRemoteControl = e;
}
function Ee(e) {
  return hCe(e) ? e : e === void 0 ? "(none)" : "(malformed)";
}
function Qe(e) {
  if (!Array.isArray(e)) return [];
  let t = [];
  for (let i of e) {
    if (t.length >= CSn) break;
    if (hCe(i)) t.push(i);
  }
  return t;
}
function gDt(e) {
  c().onPeerMessageStatus = e;
}
function Pgr(e) {
  c().onEnqueue = e;
}
function Te(e) {
  if (e.session_id !== void 0 && e.session_id !== K())
    return (
      n(
        `[uds-messaging] Dropping ${Nu(e.type)} message: session_id mismatch (got "${Nu(String(e.session_id))}", expected "${K()}")`,
        { level: "warn" },
      ),
      !1
    );
  return !0;
}
async function Je(e, t, i, r, d) {
  let s = e.message?.content;
  if (typeof s !== "string" || s.length === 0) {
    n(
      "[uds-messaging] Ignoring user message with missing or non-string content",
      { level: "warn" },
    );
    return;
  }
  if (!Te(e)) return;
  let w = typeof e.uuid === "string" ? e.uuid : randomUUID(),
    o = PPe();
  if (o !== void 0) {
    (Gee("uds: dropped before attachment materialization", o),
      a6n(
        {
          kind: "peer",
          from: e.from ?? "unknown",
          ...(t !== void 0 && { verifiedPeerPid: t }),
          ...(hCe(e.msg_id) && { msg_id: e.msg_id }),
        },
        "refused",
      ));
    return;
  }
  let p =
      e.priority === "now" || e.priority === "next" || e.priority === "later"
        ? e.priority
        : "next",
    E = s;
  if (e.file_attachments !== void 0 && rOe())
    try {
      let {
          emitPeerFileReceiveTelemetry: m,
          injectPeerFilePrefix: b,
          materializeLocalPeerFiles: D,
        } = await import("./injectPeerFilePrefix.09vb7v5q.js"),
        S = await D(e.file_attachments);
      if (S.received > 0)
        ((E = b(s, S.prefix)), m("uds", S.received, S.verified));
    } catch (m) {
      n(
        `[uds-messaging] Failed to materialize file_attachments: ${qI(String(m))}`,
        { level: "warn" },
      );
    }
  let u = await le(t, r, d),
    _ = Kme(
      {
        kind: "peer",
        from: e.from ?? "unknown",
        ...(t !== void 0 && { verifiedPeerPid: t }),
        ...(i !== void 0 && { verifiedPeerProcStart: i }),
        ...(u && { selfSent: u }),
        ...(hCe(e.msg_id) && { msg_id: e.msg_id }),
        ...Pse(s),
      },
      E,
      s,
    ),
    k = {
      mode: "prompt",
      agentId: ze(),
      value: E,
      uuid: w,
      priority: p,
      origin: _,
      skipSlashCommands: !0,
      isMeta: !0,
      skipAttachments: !0,
    };
  if (cqe(k) !== "accept") return;
  (BS(k),
    n(
      `[uds-messaging] Routed user message to queue (priority=${p}): ${Nu(E, 80)}`,
    ),
    c().onEnqueue?.(),
    Me(k));
}
function Me(e) {
  let t = e.origin?.kind === "peer" ? e.origin : void 0,
    i = c().activeSocketPath;
  if (
    t !== void 0 &&
    t.selfSent !== !0 &&
    t.verifiedPeerPid !== void 0 &&
    typeof t.from === "string" &&
    i !== void 0 &&
    hDt(t.from, i, t.verifiedPeerPid) !== void 0
  )
    noteVettedCorrespondent(t.from, t.verifiedPeerPid, t.verifiedPeerProcStart);
}
function hDt(e, t, i) {
  if (!e.startsWith("uds:") || !Dse(e)) return;
  let r = uf(e).target;
  return r && Jvn(r, t, { verifiedPeerPid: i, ownerUids: c().peerDirOwnerUids })
    ? r
    : void 0;
}
async function ke(e, t, i, r, d) {
  if (!me(e)) {
    n("[uds-messaging] Ignoring message without valid type field", {
      level: "warn",
    });
    return;
  }
  if (e.type === "user") await Je(e, t, i, r, d);
  else if (e.type === "control") {
    if (!Te(e)) return;
    if (e.action === "rename" && typeof e.name === "string")
      c().onRename?.(e.name);
    else if (
      e.action === "peer_message_status" &&
      (e.status === "held" ||
        e.status === "denied" ||
        e.status === "expired" ||
        e.status === "delivered" ||
        e.status === "refused" ||
        e.status === "dropped")
    ) {
      let s =
          e.status === "expired" && e.status_detail === "refused"
            ? "refused"
            : e.status,
        w = admitReceiptForOutstandingSend(e.orig_msg_id, s),
        o = w?.destination;
      if (e.status === "dropped") {
        let p = IJn(e.drop_reason),
          E = admitDroppedIdsByDestination(Qe(e.dropped_msg_ids));
        if (o !== void 0) {
          let u = E.get(o) ?? { dropped: 0, wereHeld: 0 };
          if ((u.dropped++, w?.wasHeld)) u.wereHeld++;
          E.set(o, u);
        }
        if (p === "queue-full")
          for (let [u, { wereHeld: _ }] of E)
            for (let k = 0; k < _; k++) debitPacerForReleasedSend(u);
        if (E.size === 0)
          n(
            `[uds-messaging] peer_message_status dropped: neither orig_msg_id=${Ee(e.orig_msg_id)} nor any named id matches an outstanding send`,
          );
        for (let [u, { dropped: _ }] of E)
          c().onPeerMessageStatus?.("dropped", u, {
            dropReason: p,
            droppedCount: _,
          });
      } else if (o === void 0)
        n(
          `[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${Ee(e.orig_msg_id)}`,
        );
      else {
        if (s === "held") creditPacerForHeldSend(o);
        else if (s === "delivered" && w?.wasHeld) debitPacerForReleasedSend(o);
        c().onPeerMessageStatus?.(s, o);
      }
    } else if (e.action === "notify_when_idle") {
      let s = hsn().safeParse(e);
      if (!s.success) {
        (n("[uds-messaging] notify_when_idle dropped: malformed frame"),
          logFeatureSad("cross_session_notify_idle", "malformed_frame"));
        return;
      }
      let w = c().activeSocketPath,
        o = s.data.from,
        p = w !== void 0 ? hDt(o, w, t) : void 0;
      if (w === void 0)
        (n(
          "[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)",
        ),
          logFeatureSad("cross_session_notify_idle", "own_inbox_unbound"));
      else if (p === void 0)
        (n(
          `[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${Nu(o)})`,
        ),
          logFeatureSad("cross_session_notify_idle", "unvettable_reply_target"));
      else if (Zy(p) === Zy(w))
        (n(
          "[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)",
        ),
          logFeatureSad("cross_session_notify_idle", "self_target_frame"));
      else {
        let E = await le(t, r, d),
          u = ysn(
            o,
            p,
            s.data.msg_id,
            t,
            i,
            d === "peer",
            Ie(s.data.from_mode),
            E,
          );
        if (
          (n(`[uds-messaging] notify_when_idle from ${Nu(o)}: ${u}`),
          u === "full")
        )
          mdt(p, s.data.msg_id, t, d === "peer", i);
      }
    } else if (e.action === "peer_idle_notice") {
      let s = _sn().safeParse(e);
      if (!s.success) {
        (n("[uds-messaging] peer_idle_notice dropped: malformed frame"),
          logFeatureSad("cross_session_notify_idle", "malformed_notice"));
        return;
      }
      if (!nqe(s.data.orig_msg_id)) {
        n(
          "[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)",
        );
        return;
      }
      let w = await le(t, r, d);
      if (
        !bsn(
          s.data.orig_msg_id,
          s.data.state,
          s.data.finished_at,
          s.data.detail,
          Ie(s.data.from_mode),
          w,
        )
      )
        n(
          `[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${Nu(s.data.orig_msg_id)} was already consumed`,
        );
    } else if (e.action === "yield_artifact_replies") {
      let s = l9n().safeParse(e);
      if (!s.success) {
        (n("[uds-messaging] yield_artifact_replies dropped: malformed frame"),
          logFeatureSad("artifact_comments_autoreact", "yield_malformed_frame"));
        return;
      }
      let w = c().activeSocketPath,
        o = w !== void 0 ? hDt(s.data.from, w, t) : void 0;
      if (w === void 0 || o === void 0) {
        (n(
          `[uds-messaging] yield_artifact_replies dropped: ${w === void 0 ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${Nu(s.data.from)})`,
        ),
          logFeatureSad("artifact_comments_autoreact", "yield_unvettable_target"));
        return;
      }
      if (Zy(o) === Zy(w)) {
        n(
          "[uds-messaging] yield_artifact_replies dropped: reply target is this session",
        );
        return;
      }
      let p = await registeredLivePeerForSocket(o);
      if (
        p === void 0 ||
        p.sessionId !== K() ||
        (t !== void 0 && p.pid !== t)
      ) {
        (n(
          `[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${Nu(s.data.from)})`,
        ),
          logFeatureSad("artifact_comments_autoreact", "yield_requester_unverified"),
          can(
            s.data,
            o,
            t === void 0 ? void 0 : { pid: t, writeToken: i },
            Date.now(),
            { refuse: !0 },
          ));
        return;
      }
      can(
        s.data,
        o,
        {
          pid: t ?? p.pid,
          procStart: t === void 0 || t === p.pid ? p.procStart : void 0,
          writeToken: i,
        },
        Date.now(),
      );
    } else if (e.action === "unyield_artifact_replies") {
      let s = u9n().safeParse(e);
      if (!s.success || !y9n(s.data, t))
        n(
          "[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back",
        );
    } else if (e.action === "artifact_replies_yielded") {
      let s = c9n().safeParse(e);
      if (!s.success) {
        (n("[uds-messaging] artifact_replies_yielded dropped: malformed frame"),
          logFeatureSad("artifact_live_subscribe", "yield_malformed_answer"));
        return;
      }
      if (!m9n(s.data.orig_msg_id)) {
        n(
          "[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled",
        );
        return;
      }
      g9n(s.data, t);
    } else
      n(`[uds-messaging] Unhandled control action: ${Nu(String(e.action))}`);
  } else n(`[uds-messaging] Received unhandled message type: ${Nu(e.type)}`);
}
function Ze(e, t, i, r, d) {
  if (
    me(e) &&
    ((e.type === "control" && e.action !== "notify_when_idle") ||
      (e.type === "user" &&
        e.priority === "now" &&
        e.file_attachments === void 0))
  ) {
    ke(e, t, i, r, d).catch((s) => {
      n(`[uds-messaging] Failed to process message: ${s}`, { level: "warn" });
    });
    return;
  }
  c().processingChain = c()
    .processingChain.then(() => ke(e, t, i, r, d))
    .catch((s) => {
      n(`[uds-messaging] Failed to process message: ${s}`, { level: "warn" });
    });
}
var en = 3000;
function nn(e = 3000) {
  return Promise.race([c().processingChain, sleep(e, void 0, { unref: !0 })]);
}
function tn(e) {
  e.setEncoding("utf8");
  let t = c().firstLineDeadlineMs,
    i = setTimeout(() => {
      i = void 0;
      try {
        if (
          (n(
            `[uds-messaging] Closing a connection that sent no complete line within ${t} ms`,
          ),
          !c().silentDropReported)
        )
          ((c().silentDropReported = !0),
            logFeatureSad("cross_session_inbox_auth", "silent_connection_deadline"));
        e.destroy();
      } catch (S) {
        n(`[uds-messaging] Failed to close a silent connection: ${S}`, {
          level: "warn",
        });
      }
    }, t);
  i.unref();
  let r = () => {
    if (i !== void 0) (clearTimeout(i), (i = void 0));
  };
  (e.once("close", r), e.once("error", r));
  let d,
    s,
    w = !1,
    o,
    p,
    E = process.pid !== 1 && ksn();
  if (E) {
    let S = ybt(e),
      R = S !== void 0 ? getProcessStartTokenLinuxSync(S) : void 0;
    if (S !== void 0 && R !== void 0) p = { pid: S, token: R };
  }
  let u = "",
    _,
    k = !1,
    m = (S) => {
      if (
        (n(
          `[uds-messaging] Dropped ${S} from a connection that did not authenticate; closing it`,
          { level: "warn" },
        ),
        !c().authDropReported)
      )
        ((c().authDropReported = !0),
          logFeatureBad("cross_session_inbox_auth", "unauthed_drop"));
      e.destroy();
    },
    b = (S) => {
      let R = !k;
      if (((k = !0), Kor(S))) {
        if (R) {
          if (
            ((_ = Xor(S.token, c().activeTokens)),
            _ !== void 0 && !c().authOkReported)
          )
            ((c().authOkReported = !0), logFeatureOk("cross_session_inbox_auth"));
          if (_ === void 0 && c().authRequired) m("a bad auth frame");
        }
        return;
      }
      if (c().authRequired && _ === void 0) {
        m(me(S) ? `a '${Nu(S.type)}' line` : "a line");
        return;
      }
      if (!w) {
        if (
          ((d = ybt(e)),
          (s =
            d === void 0
              ? void 0
              : p !== void 0
                ? p.pid === d
                  ? p.token
                  : void 0
                : getProcessStartTokenLinuxSync(d)),
          (w = !0),
          d !== void 0 && E)
        )
          o =
            p !== void 0 && p.pid === d && getProcessStartTokenLinuxSync(d) === p.token ? getAncestorPidsLinuxSync(d) : void 0;
      }
      Ze(S, d, s, o, _);
    },
    D = (S) => {
      try {
        b(S);
      } catch (R) {
        n(`[uds-messaging] Failed to handle line: ${R}`, { level: "warn" });
      }
    };
  (e.on("data", (S) => {
    if (((u += S), u.length > S7e)) {
      (n(`[uds-messaging] Line exceeded ${S7e} chars; dropping connection`, {
        level: "warn",
      }),
        e.destroy(),
        (u = ""));
      return;
    }
    let R;
    while (
      (R = u.indexOf(`
`)) !== -1
    ) {
      let L = u.slice(0, R);
      if (((u = u.slice(R + 1)), r(), !L.trim())) {
        if (c().authRequired && _ === void 0) {
          ((k = !0), m("a blank line"), (u = ""));
          return;
        }
        continue;
      }
      let F;
      try {
        F = Is(L);
      } catch {
        if (
          (n(`[uds-messaging] Failed to parse JSON line: ${qI(L)}`, {
            level: "warn",
          }),
          c().authRequired && _ === void 0)
        ) {
          ((k = !0), m("an unparseable line"), (u = ""));
          return;
        }
        continue;
      }
      if ((D(F), e.destroyed)) {
        u = "";
        return;
      }
    }
  }),
    e.on("end", () => {
      if (u.trim() && !e.destroyed) {
        let S,
          R = !1;
        try {
          ((S = Is(u)), (R = !0));
        } catch {
          if (
            (n(`[uds-messaging] Failed to parse final buffer: ${qI(u)}`, {
              level: "warn",
            }),
            c().authRequired && _ === void 0)
          )
            m("an unparseable final fragment");
        }
        if (R) D(S);
      }
      e.end();
    }),
    e.on("error", (S) => {
      n(`[uds-messaging] Connection error: ${S.message}`, { level: "warn" });
    }));
}
function Ogr() {
  return c().activeSocketPath;
}
var z = 103;
function Vdr() {
  let e = a.XDG_RUNTIME_DIR || zy(),
    t = resolve(U(e, "cc-socks", `${process.pid}.sock`));
  if (Buffer.byteLength(t) <= z) return t;
  return sBn();
}
function sBn(e = process.getuid?.() ?? 0) {
  let t = a.TERMUX_VERSION ? a.PREFIX : void 0,
    i = t ? U(t, "tmp") : "/tmp";
  return U(i, `cc-socks-${e}`, `${process.pid}.sock`);
}
async function H(e, t, i, { settleHeld: r = !0 } = {}) {
  for (let o of c().connectedClients) o.destroy();
  if ((c().connectedClients.clear(), e.close(), r)) Esn();
  let d = r ? iqe() : void 0;
  await nn();
  let s = r ? withDeadline(QNt("exited"), en) : void 0;
  if ((await d, await s, r)) await rzn();
  try {
    await unlink(t);
  } catch {}
  let w = c();
  if (w.activeKeyFile !== void 0)
    (await qor(w.activeKeyFile, i), (w.activeKeyFile = void 0));
  Y();
}
function Y() {
  ((c().activeSocketPath = void 0),
    (c().activeTokens = void 0),
    delete process.env.CLAUDE_CODE_MESSAGING_SOCKET,
    udsEnv.unset("CLAUDE_CODE_MESSAGING_TOKEN"),
    vSn(void 0),
    Csn(null),
    vsn(null),
    t1t(null),
    lan(null),
    r1t(null),
    (getSessionNamingState().senderMode = null));
}
function sn(e, t, i, r) {
  return async () => {
    (await H(e, t, i), r());
  };
}
function ge(e) {
  return new Promise((t) => {
    let i = new je(),
      r = (d) => {
        (i.destroy(), t(d));
      };
    (i.on("connect", () => r("live")),
      i.on("error", () => r("dead")),
      i.setTimeout(250, () => r("dead")),
      i.connect({ path: e }));
  });
}
function te(e, t) {
  return new Promise((i, r) => {
    function d(s) {
      if (A(s) === "EADDRINUSE") i(!1);
      else r(s);
    }
    (e.once("error", d),
      e.listen(t, () => {
        (e.removeListener("error", d), i(!0));
      }));
  });
}
function rn(e) {
  let t = `${e.replace(/\.sock$/, "")}-${randomBytes(4).toString("hex")}.sock`;
  if (Buffer.byteLength(t) <= z) return t;
  let i = U(e, ".."),
    r = z - Buffer.byteLength(U(i, ".sock"));
  return U(i, `${randomBytes(8).toString("hex").slice(0, Math.max(1, r))}.sock`);
}
async function on(e) {
  let t = `${basename(e).replace(/\.sock$/, "")}-`,
    i;
  try {
    i = await readdir(dirname(e));
  } catch {
    return;
  }
  for (let r of i) {
    if (!r.startsWith(t) || !/^[0-9a-f]{8}\.sock$/.test(r.slice(t.length)))
      continue;
    let d = U(dirname(e), r);
    if ((await ge(d)) === "live") continue;
    try {
      (await unlink(d), n(`[uds-messaging] Reaped stale moved-aside socket ${d}`));
    } catch {}
  }
}
async function an(e, t) {
  if ((await on(t), await te(e, t))) return t;
  if ((await ge(t)) !== "live") {
    try {
      await unlink(t);
    } catch {}
    if (await te(e, t)) return t;
  }
  for (let i = 0; i < 3; i++) {
    let r = rn(t);
    if (
      (n(
        `[uds-messaging] Auto socket path ${t} is another session's live socket (sibling pid namespace?); binding at ${r} instead`,
        { level: "warn" },
      ),
      await te(e, r))
    )
      return r;
  }
  throw Error(
    "listen EADDRINUSE on the auto socket path and its moved-aside siblings",
  );
}
function Dgr(e, t) {
  return Xdr(e ?? Vdr(), t, { isExplicit: e !== void 0 });
}
function q() {
  (udsEnv.unset("CLAUDE_CODE_MESSAGING_SOCKET"),
    udsEnv.unset("CLAUDE_CODE_MESSAGING_TOKEN"));
}
var dn = [
  "directory_rule",
  "foreign_owner",
  "leaf_shape",
  "dangling_link",
  "raced",
  "not_directory",
  "symlink_loop",
  "uid_collapse",
  "internal",
];
function T(e, t, i) {
  return Object.assign(t, {
    socketsDirVetKind: e,
    ...(i && { refusedComponent: i }),
  });
}
function un(e) {
  if (!(e instanceof Error) || !("refusedComponent" in e)) return;
  let t = e.refusedComponent;
  return typeof t === "object" &&
    t !== null &&
    "path" in t &&
    typeof t.path === "string" &&
    "uid" in t &&
    typeof t.uid === "number" &&
    "gid" in t &&
    typeof t.gid === "number" &&
    "mode" in t &&
    typeof t.mode === "number"
    ? {
        path: t.path,
        uid: t.uid,
        gid: t.gid,
        mode: t.mode,
        ownerRefused:
          "ownerRefused" in t && typeof t.ownerRefused === "boolean"
            ? t.ownerRefused
            : void 0,
      }
    : void 0;
}
function V(e, t, i) {
  return {
    path: e,
    uid: t.uid,
    gid: t.gid,
    mode: t.mode & 4095,
    ...(i !== void 0 && { ownerRefused: i }),
  };
}
function xe(e) {
  if (re(e) === "uid_collapse")
    return "this process runs in a user namespace without a uid mapping, so file ownership cannot be verified \u2014 start it with a uid map (e.g. unshare -Ur), or pass --messaging-socket-path";
  let t = un(e);
  if (t === void 0) return;
  let i = t.mode.toString(8).padStart(4, "0"),
    r = `(owner ${t.uid}:${t.gid}, mode ${i})`,
    d = "or pass --messaging-socket-path",
    s = Vn(t.path),
    w = s === t.path,
    o = `'${Array.from(s, (u) => {
      if (cn.test(u)) return u;
      return ((w = !1), "?");
    }).join("")}'`,
    p = w,
    E = (u, _) =>
      p
        ? `chmod ${u} ${jo([t.path])}${_}`
        : `clear its ${u === "o-w" ? "other" : "group"}-write bit${_}`;
  switch (re(e)) {
    case "directory_rule": {
      if (t.ownerRefused === !0)
        return `${o} is not owned by you or root ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${d}`;
      let u = (t.mode & 512) !== 0;
      if (!u && (t.mode & 2) !== 0)
        return `${o} is world-writable without the sticky bit ${r} \u2014 ${E("o-w", " (or chmod +t)")}, ${d}`;
      if (!u && (t.mode & 16) !== 0)
        return `${o} is group-writable without the sticky bit ${r} \u2014 ${E("g-w", "")}, ${d}`;
      return `${o} is not owned by you or root ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${d}`;
    }
    case "foreign_owner":
      return `${o} is owned by another user ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${d}`;
    case "not_directory":
    case "leaf_shape":
      return `${o} is not a directory ${r} \u2014 remove it or use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${d}`;
    case "dangling_link":
    case "raced":
    case "symlink_loop":
    case "uid_collapse":
    case "internal":
    case void 0:
      return;
  }
}
var cn = /^[A-Za-z0-9._\/ ~+=:@,#%-]$/,
  ln = new Set(["EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOTDIR"]);
function fn(e) {
  switch (re(e)) {
    case "directory_rule":
    case "foreign_owner":
    case "leaf_shape":
    case "not_directory":
      return !0;
    case "dangling_link":
    case "symlink_loop":
    case "raced":
    case "uid_collapse":
    case "internal":
      return !1;
    case void 0:
      break;
  }
  let t = A(e);
  return t !== void 0 && ln.has(t);
}
function re(e) {
  if (!(e instanceof Error) || !("socketsDirVetKind" in e)) return;
  let t = e.socketsDirVetKind;
  return dn.find((i) => i === t);
}
function ve() {
  return T(
    "dangling_link",
    Error(
      "a component of the sockets path is a symlink whose target does not exist \u2014 create the target (0700) or repoint the link",
    ),
  );
}
var X =
    "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.",
  De = `A component of the sockets path is not a directory (a regular file is in the way). ${X}`,
  Re = `The sockets path runs through a symlink loop. ${X}`,
  mn =
    "This process runs in a user namespace without a uid mapping (its own uid reads as the kernel overflow uid), so file ownership cannot be verified. Start it with a uid map (e.g. `unshare -Ur` / `--map-current-user`), or pass --messaging-socket-path.";
function Ce(e) {
  switch (re(e)) {
    case "directory_rule":
      return `A directory on the sockets path is shared (world- or group-writable without the sticky bit, e.g. a container volume mounted at /tmp) or not owned by you or root. ${X}`;
    case "foreign_owner":
    case "leaf_shape":
      return X;
    case "not_directory":
      return De;
    case "symlink_loop":
      return Re;
    case "uid_collapse":
      return mn;
    case "dangling_link":
    case "raced":
    case "internal":
      return "";
    case void 0:
      break;
  }
  switch (A(e)) {
    case "ENOTDIR":
      return De;
    case "ELOOP":
      return Re;
    case "EACCES":
    case "EPERM":
      return `This user lacks permission on part of the sockets path (an ancestor is not searchable, or the parent is not writable). ${X}`;
    case "ENOENT":
      return `An ancestor of the sockets path does not exist. ${X}`;
    default:
      return "";
  }
}
function $e(e, t, i) {
  c().lastStartFailureCause = "socket_dir_refused";
  let r = xe(t);
  ((c().lastStartFailureDetail = r),
    Y(),
    n(
      `[uds-messaging] Failed to set up sockets directory ${e} (refusing to bind \u2014 cross-session messaging is OFF for this session): ${l(t)}.${r ? ` Refused component: ${r}.` : ""}${i ? ` ${i}` : ""}`,
      { level: "error" },
    ),
    q());
  return;
}
async function Ae(e) {
  if (!isAbsolute(e))
    throw T("internal", Error("sockets directory must be absolute here"));
  let t = process.getuid?.(),
    i = (h) => {
      if (h.isSymbolicLink())
        throw T(
          "leaf_shape",
          Error("sockets directory is a symlink \u2014 refusing to use it"),
          V(e, h),
        );
      if (!h.isDirectory())
        throw T(
          "leaf_shape",
          Error("sockets directory exists but is not a directory"),
          V(e, h),
        );
      if (t !== void 0 && !r(h.uid))
        throw T(
          "foreign_owner",
          Error(
            "sockets directory is owned by another user \u2014 refusing to use it",
          ),
          V(e, h),
        );
    },
    r = (h) => h === t,
    d = process.getgid?.(),
    s = await DJn();
  if (s?.uidCollapses)
    throw T(
      "uid_collapse",
      Error(
        "this process reads as the kernel overflow uid (user namespace without a uid mapping) \u2014 ownership cannot be verified; refusing to use the sockets directory",
      ),
    );
  r = (h) => h === t && !s?.uidCollapses;
  let w = OJn(),
    o = async (h, M) => {
      try {
        let v = M.isSymbolicLink() ? U(await realpath(dirname(h)), basename(h)) : await realpath(h),
          x = await lstat(v);
        return x.dev === M.dev && x.ino === M.ino ? v : void 0;
      } catch {
        return;
      }
    },
    p = (h) =>
      s !== void 0 &&
      ((s.unmappedOwnerUid !== void 0 && h === s.unmappedOwnerUid) ||
        (h === 0 && s.rootUidAmbiguous)),
    E = p,
    u = (h) => h !== void 0 && w.has(h),
    _ = (h, M, v) => t === void 0 || r(h) || (!M && (p(h) ? u(v) : h === 0)),
    k = (h, M, v) => {
      if (!_(h.uid, M, v)) return !1;
      if ((h.mode & 512) !== 0) return !0;
      if ((h.mode & 2) !== 0) return !1;
      if ((h.mode & 16) !== 0) return !1;
      return !0;
    },
    m = a.TERMUX_VERSION && a.PREFIX ? dirname(dirname(a.PREFIX)) : void 0,
    b = (h) => dirname(h) === h || h === m,
    D = async (h, M, v = 0) => {
      if (v > 16)
        throw T(
          "symlink_loop",
          Error("sockets-directory chain: too many levels of symlinks"),
        );
      let x = !1,
        pe,
        he = !1;
      for (let O = h, Q = !0; ; O = dirname(O), Q = !1) {
        let I;
        try {
          I = await lstat(O);
        } catch (G) {
          if (!W(G)) throw G;
        }
        if (I !== void 0) {
          pe ??= O;
          let G = Q && M;
          if (I.isSymbolicLink()) {
            he = !0;
            let J = E(I.uid) ? await o(O, I) : void 0;
            if (!_(I.uid, !1, J))
              throw T(
                "foreign_owner",
                Error(
                  "a sockets-directory component is a symlink owned by another user \u2014 refusing to use it",
                ),
                V(O, I),
              );
            let ee = (await readlink(O)).replace(/\/{2,}/g, "/"),
              ae = ee.length > 1 && ee.endsWith("/") ? ee.slice(0, -1) : ee,
              Ue = isAbsolute(ae) ? ae : `${await realpath(dirname(O))}/${ae}`,
              { startExists: Fe } = await D(Ue, G, v + 1);
            if (Q) x = Fe;
          } else {
            if (!I.isDirectory())
              throw T(
                "not_directory",
                Error(
                  "a sockets-directory component exists but is not a directory \u2014 refusing to use it",
                ),
                V(O, I),
              );
            let J = E(I.uid) ? await o(O, I) : void 0;
            if (!k(I, G, J))
              throw T(
                "directory_rule",
                Error(
                  "a sockets-directory component is not a private-or-sticky directory owned by us or root \u2014 refusing to use it",
                ),
                V(O, I, !_(I.uid, G, J)),
              );
            if (Q) x = !0;
          }
        }
        if (b(O)) break;
      }
      return { startExists: x, deepestExisting: pe, sawSymlink: he };
    },
    S = dirname(e),
    R = await D(S, !1),
    L = !R.startExists,
    F;
  try {
    F = await lstat(e);
  } catch (h) {
    if (!W(h)) throw h;
  }
  if (L && R.deepestExisting === S) throw ve();
  if (L) {
    let h = [],
      M = (v) => {
        if (!v.isDirectory() || (t !== void 0 && !r(v.uid)))
          throw T(
            "raced",
            Error(
              "a sockets-directory component appeared while being created and is not our directory \u2014 refusing to use it",
            ),
          );
      };
    for (let v = S; v !== R.deepestExisting && !b(v); v = dirname(v)) h.unshift(v);
    for (let v of h)
      try {
        await mkdir(v, { mode: 448 });
      } catch (x) {
        if (W(x) && R.sawSymlink) throw ve();
        if (A(x) !== "EEXIST") throw x;
        M(await lstat(v));
      }
    if (!(await D(S, !0)).startExists)
      throw T(
        "raced",
        Error("sockets base directory vanished while being set up"),
      );
  }
  if (F === void 0) {
    try {
      await mkdir(e, { mode: 448 });
    } catch (h) {
      if (A(h) !== "EEXIST") throw h;
    }
    F = await lstat(e);
  }
  if ((i(F), (F.mode & 511) !== 448)) await chmod(e, 448);
}
async function Kdr(e) {
  if (!isAbsolute(e))
    throw new ud(
      e === ""
        ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path."
        : `--messaging-socket-path must be an absolute path, got: ${e}`,
    );
  if (e.split("/").includes(".."))
    throw new ud(
      `--messaging-socket-path must not contain '..' segments, got: ${e}`,
    );
  let i = e.split("/").at(-1);
  if (i === "" || i === ".")
    throw new ud(
      `--messaging-socket-path must name a socket file inside a directory, got: ${e}`,
    );
  let r = normalize(e).replace(/\/+$/, "");
  if (r === "" || !r.startsWith("/") || basename(r) === "")
    throw new ud(
      `--messaging-socket-path must name a socket file inside a directory, got: ${e}`,
    );
  if (!a0(r) || !a0(e))
    throw new ud(
      `--messaging-socket-path must be a local socket path, got: ${e}`,
    );
  if (Buffer.byteLength(r) > z)
    throw new ud(
      `--messaging-socket-path is too long for a Unix socket (${Buffer.byteLength(r)} bytes, max ${z}): ${r}. Choose a shorter path, e.g. under $XDG_RUNTIME_DIR or /tmp/<private-dir>.`,
    );
  let d = dirname(r),
    s =
      "Use a private directory you own that only you use, e.g. mkdir -m 700 <dir> (or chmod 700 an existing one).",
    w = (m) => {
      if (m.isSymbolicLink())
        throw new ud(
          `--messaging-socket-path directory must be a real directory, not a symlink: ${d}. ${s}`,
        );
      if (!m.isDirectory())
        throw new ud(
          `--messaging-socket-path parent is not a directory: ${d}.`,
        );
      let b = process.getuid?.();
      if (b !== void 0 && m.uid !== b)
        throw new ud(
          `--messaging-socket-path directory ${d} is not owned by you (uid ${m.uid}). ${s}`,
        );
      if ((m.mode & 63) !== 0)
        throw new ud(
          `--messaging-socket-path directory ${d} is not private (mode ${(m.mode & 4095).toString(8)}); the socket directory must be mode 0700 so no other user or group can reach or replace the socket. ${s}`,
        );
    },
    o = async () => {
      try {
        return await lstat(d);
      } catch (m) {
        let b = A(m);
        if (W(m)) return;
        if (
          b === "ENOTDIR" ||
          b === "EACCES" ||
          b === "ELOOP" ||
          b === "ENAMETOOLONG"
        )
          throw new ud(
            `--messaging-socket-path directory is not usable: ${d} (${b}). Fix the path or its permissions, or choose another path. ${s}`,
          );
        throw new ud(
          `--messaging-socket-path directory could not be examined: ${d} (${b ?? String(m)}). ${s}`,
        );
      }
    },
    p = await o();
  if (p !== void 0) return (w(p), r);
  let E = process.getuid?.(),
    u = [];
  for (let m = dirname(d); ; m = dirname(m)) {
    let b;
    try {
      b = await lstat(m);
    } catch (D) {
      if (!W(D))
        throw new ud(
          `--messaging-socket-path: cannot inspect ${m} (${A(D) ?? D}). ${s}`,
        );
      u.unshift(m);
    }
    if (b !== void 0) {
      if (E !== void 0 && b.uid !== E && b.uid !== 0)
        throw new ud(
          `--messaging-socket-path: ${m} ${b.isSymbolicLink() ? "is a symlink" : "is a directory"} owned by another user \u2014 refusing to create your sockets directory ${b.isSymbolicLink() ? "through" : "inside"} it. ${s}`,
        );
      break;
    }
    if (dirname(m) === m) break;
  }
  let _ = !1;
  try {
    for (let m of u)
      try {
        await mkdir(m, { mode: 448 });
      } catch (b) {
        if (A(b) !== "EEXIST") throw b;
        let D = await lstat(m);
        if (!D.isDirectory() || (E !== void 0 && D.uid !== E))
          throw new ud(
            `--messaging-socket-path: ${m} appeared while your sockets directory was being created and is not a directory you own \u2014 refusing to use it. ${s}`,
          );
      }
    try {
      (await mkdir(d, { mode: 448 }), (_ = !0));
    } catch (m) {
      if (A(m) !== "EEXIST") throw m;
    }
  } catch (m) {
    if (m instanceof ud) throw m;
    throw new ud(
      `--messaging-socket-path directory ${d} does not exist and could not be created (${A(m) ?? m}). ${s}`,
    );
  }
  let k = await o();
  if (k === void 0)
    throw new ud(
      `--messaging-socket-path directory ${d} vanished while being set up. ${s}`,
    );
  if (!_) return (w(k), r);
  return (w(k), r);
}
async function Xdr(e, t, i = {}) {
  c().startInFlight = !0;
  try {
    return await gn(e, t, i);
  } finally {
    c().startInFlight = !1;
  }
}
async function gn(e, t, i = {}) {
  if (
    ((c().lastStartFailureCause = "bind_failed"),
    (c().lastStartDegradedCause = void 0),
    !a0(e))
  ) {
    if (
      (n(
        `[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`,
        { level: "error" },
      ),
      q(),
      (c().lastStartFailureCause = "path_refused"),
      i.isExplicit)
    )
      throw new ud(
        `--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`,
      );
    return;
  }
  if (!i.isExplicit && !0 && !isAbsolute(e)) e = resolve(e);
  if (i.isExplicit) {
    if (((e = await Kdr(e)), (await ge(e)) === "live"))
      throw new ud(
        `--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`,
      );
  } else {
    let o = dirname(e);
    try {
      await Ae(o);
    } catch (p) {
      let E = fn(p) ? await v7e() : void 0,
        u = E === void 0 ? void 0 : resolve(sBn(E)),
        _ = u === void 0 ? void 0 : U(u, "..");
      if (u === void 0 || _ === void 0 || _ === o) return $e(o, p, Ce(p));
      let k = xe(p);
      n(
        `[uds-messaging] sockets directory ${o} refused (${l(p)}${k ? `; refused component: ${k}` : ""}); trying the per-uid fallback ${_}`,
        { level: "warn" },
      );
      try {
        await Ae(_);
      } catch (m) {
        return $e(_, m, Ce(m));
      }
      ((e = u), be("primary_dir_refused_fell_back"));
    }
  }
  if (i.isExplicit)
    try {
      await unlink(e);
    } catch {}
  c().activeSocketPath = e;
  let d, s;
  try {
    d = createServer({ allowHalfOpen: !0 }, (o) => {
      (c().connectedClients.add(o),
        n("[uds-messaging] Client connected"),
        tn(o),
        o.on("close", () => {
          (c().connectedClients.delete(o),
            n("[uds-messaging] Client disconnected"));
        }));
    });
  } catch (o) {
    (Y(),
      n(`[uds-messaging] Failed to create server: ${String(o)}`, {
        level: "error",
      }),
      q());
    return;
  }
  (d.on("error", (o) => {
    n(`[uds-messaging] Server error: ${o.message}`, { level: "error" });
  }),
    (c().authRequired = i.requireAuth ?? VCt()),
    (c().firstLineDeadlineMs = i.firstLineDeadlineMs ?? ne));
  let w = Wor();
  c().activeTokens = w;
  try {
    if (i.isExplicit) {
      if (!(await te(d, e)))
        throw Error("listen EADDRINUSE on the requested socket path");
    } else ((e = await an(d, e)), (c().activeSocketPath = e));
    {
      let u = await v7e(),
        _ = process.getuid?.();
      c().peerDirOwnerUids = [
        ...(_ !== void 0 ? [_] : []),
        ...(u !== void 0 && u !== _ ? [u] : []),
      ];
    }
    d.unref();
    let o = Et(async () => {
      (n("[uds-messaging] Shutting down"), await H(d, e, t));
    });
    ((s = o), await chmod(e, 384));
    try {
      ((c().activeKeyFile = await Gor(e, w.peerToken, t, {
        sweepPermitted: await isRegistrySweepPermitted(),
      })),
        yn());
    } catch (u) {
      if (c().authRequired) {
        if (
          (n(
            `[uds-messaging] Failed to publish the inbox auth key (refusing to run an inbox no peer can authenticate to): ${u}`,
            { level: "error" },
          ),
          (c().lastStartFailureCause = "key_publish_failed"),
          await H(d, e, t, { settleHeld: !1 }),
          o(),
          q(),
          i.isExplicit)
        )
          throw new ud(
            `--messaging-socket-path: bound ${e} but could not publish its auth key (${A(u) ?? u}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`,
          );
        return;
      }
      (n(
        `[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${u}`,
        { level: "warn" },
      ),
        be("key_publish_failed"));
    }
    ((process.env.CLAUDE_CODE_MESSAGING_SOCKET = e),
      udsEnv.set("CLAUDE_CODE_MESSAGING_TOKEN", w.childToken),
      vSn(hU(e)));
    let p = hU(e);
    return (
      vsn(Me),
      (getSessionNamingState().senderMode = iBn),
      t1t((u, _, k, m, b) =>
        sendControlToUdsSocket(
          u,
          { action: "peer_idle_notice", ..._, from: p, ...(m ? hn() : {}) },
          {
            ...(k !== void 0 && { expectPeerPid: k }),
            ...(b !== void 0 && { expectPeerProcStart: b }),
            storageV5: t,
          },
        ),
      ),
      lan(
        (u, _, k, m) =>
          sendControlToUdsSocket(
            u,
            { action: "artifact_replies_yielded", ..._, from: p },
            {
              ...(k !== void 0 && { expectPeerPid: k }),
              ...(m !== void 0 && { expectPeerProcStart: m }),
              storageV5: t,
            },
          ),
        p,
      ),
      r1t((u) => registeredInboxesOfPids(u)),
      Csn((u, _, k) => {
        let m = u.origin?.kind === "peer" ? u.origin : void 0,
          b = m?.from;
        if (typeof b !== "string") return;
        let D = hDt(b, e, m?.verifiedPeerPid);
        if (D === void 0) {
          n(
            `[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${Nu(b)})`,
          );
          return;
        }
        return sendControlToUdsSocket(
          D,
          {
            action: "peer_message_status",
            ...(_ === "refused"
              ? { status: "expired", status_detail: "refused" }
              : { status: _ }),
            reason: pn(_),
            from: p,
            ...(typeof m?.msg_id === "string" && { orig_msg_id: m.msg_id }),
            ...(_ === "dropped" &&
              k !== void 0 && {
                drop_reason: k.dropReason,
                dropped_msg_ids: k.droppedMsgIds,
              }),
          },
          {
            ...(m?.verifiedPeerPid !== void 0 && {
              expectPeerPid: m.verifiedPeerPid,
            }),
            ...(m?.verifiedPeerProcStart !== void 0 && {
              expectPeerProcStart: m.verifiedPeerProcStart,
            }),
            storageV5: t,
          },
        ).catch((S) =>
          n(
            `[uds-messaging] hold-receipt send failed to ${Nu(b)}: ${qI(String(S))}`,
          ),
        );
      }),
      n(`[uds-messaging] Listening: ${e}`, { level: "info" }),
      n(
        `[uds-messaging] Inject messages (auth line ${c().authRequired ? "REQUIRED" : "optional"} here): { echo '{"type":"auth","token":"'"$CLAUDE_CODE_MESSAGING_TOKEN"'"}'; echo '{"type":"user","message":{"role":"user","content":"hello"}}'; } | socat - UNIX-CONNECT:${e}`,
        { level: "info" },
      ),
      n(
        `[uds-messaging] Connect when the data is ready (e.g. out=$(cmd); printf '%s\\n' "$out" | ${"nc -U"} "$CLAUDE_CODE_MESSAGING_SOCKET" \u2014 or the socat form above): a connection that sends no complete line within ${c().firstLineDeadlineMs} ms is closed`,
        { level: "info" },
      ),
      (c().lastStartFailureCause = void 0),
      sn(d, e, t, o)
    );
  } catch (o) {
    if (o instanceof ud) throw o;
    if (i.isExplicit) {
      let p = A(o);
      if (s !== void 0)
        throw (
          await H(d, e, t, { settleHeld: !1 }),
          s(),
          q(),
          (c().lastStartFailureCause = "post_bind_setup_failed"),
          new ud(
            `--messaging-socket-path: bound ${e} but could not finish setting the socket up (${p ?? String(o)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`,
          )
        );
      (Y(), q());
      let E =
        p === "ENAMETOOLONG"
          ? "the path is too long for a Unix socket (max ~104 bytes); choose a shorter one"
          : p === "EADDRINUSE"
            ? "something already exists at that path and could not be replaced; remove it or choose another path"
            : p === "EACCES" || p === "EPERM"
              ? "permission denied in that directory"
              : "the socket could not be created there";
      throw new ud(
        `--messaging-socket-path: cannot bind at ${e} (${p ?? String(o)}): ${E}.`,
      );
    }
    if (s !== void 0)
      (await H(d, e, t, { settleHeld: !1 }),
        s(),
        (c().lastStartFailureCause = "post_bind_setup_failed"));
    if (A(o) === "ENAMETOOLONG")
      n(
        `[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`,
        { level: "error" },
      );
    else n(`[uds-messaging] Failed to start: ${o}`, { level: "error" });
    (Y(), q());
    return;
  }
}
function pn(e) {
  switch (e) {
    case "held":
      return "Your message is held for the recipient user's approval before it reaches their Claude session (permission-mode parity).";
    case "denied":
      return "The recipient user declined your message; it was not delivered to their Claude session.";
    case "expired":
      return "Your held message expired without approval and was not delivered to the recipient's Claude session.";
    case "delivered":
      return "Your previously-held message was approved and released to the recipient's Claude session.";
    case "refused":
      return "The recipient session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); your message was not delivered to its Claude.";
    case "dropped":
      return "The recipient's session dropped your message at its inbox (rate limit, duplicate, relay loop, or full queue); it was not delivered and will not be.";
  }
}
function hn() {
  let e = iBn();
  return e === void 0 ? {} : { from_mode: e };
}
function iBn() {
  if (!kPe()) return;
  let e = ds().inbound.getCurrentMode;
  if (e)
    try {
      return HPe(e());
    } catch {
      return;
    }
  let t = ds().inbound.modeAtUnwire;
  return t !== void 0 ? HPe(t) : void 0;
}
function Ie(e) {
  return wor(e) ? e : void 0;
}
function le(e, t, i) {
  return _e({
    selfSentAncestry: t,
    verifiedPeerPid: e,
    childTokenPresented: i === "child",
    needsVerdict: ksn(),
    platform: P(),
  });
}
function yn() {
  if (!process.listeners("exit").includes(aBn)) process.on("exit", aBn);
}
function aBn() {
  try {
    let e = c().activeKeyFile;
    if (e === void 0) return;
    unlinkSync(e);
  } catch {}
}
export {
  pDt,
  Kat,
  xgr,
  Hgr,
  fDt,
  mDt,
  Igr,
  gDt,
  Pgr,
  hDt,
  Ogr,
  Vdr,
  sBn,
  Dgr,
  Kdr,
  Xdr,
  iBn,
  aBn,
};

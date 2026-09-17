// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { r0, Cvn, gCt, qe, Ut, Ff, o5t, H, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { hB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { NL } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, qr, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { St, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { xU } from "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import { Jo, sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { axn, eRt } from "../认证-OAuth登录/chunk-7rf7w8yf.js";
import { FRe, WT } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { isProcessProvablyGone, isSameProcessAsync, ownProcStartAsync } from "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import { CNe, b3t, xyn, Hyn, Lpe } from "./chunk-ct52ffwb.js";
import { fmt, wgt, i4n, getBridgeSessionOrStatus, Ly, QWt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Es } from "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { Wh } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import {
  xme,
  Q4t,
  crr,
  urr,
  prr,
  gCn,
  hCn,
  Ove,
  wAt,
  TAt,
  EAt,
} from "./chunk-5ne99rq3.js";
import { isBridgeAuthReviveEnabled, isBridgeNonOrigin403RetryEnabled, isBridgeOwnerPinnedEndEnabled, isBridgeHostDeclinedEndEnabled, isBridgeSignedOutNeutralEnabled, isCcrV2SessionCrudEnabled } from "./chunk-9estzwf5.js";
import { logBridgeSkip } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { isProactiveEnrollmentDisabled, isTrustedDeviceGateEnabled, getTrustedDeviceToken, withUntrustedDeviceRecovery, untrustedDeviceHint } from "./chunk-tyce0p0b.js";
import { fse, rVt, isCreateSessionFailure, createCodeSession, isCredentialsFailure, isCredentialsRejection, fetchRemoteCredentials, archiveCodeSession, unarchiveCodeSession } from "./chunk-mxsfy35q.js";
import { reseedBridgePermissionMode, reseedBridgeCrossSessionInbound, reseedBridgeModel } from "../权限系统/chunk-1y2g140m.js";
import { getBridgeBaseUrlOverride, getBridgeSessionNamePrefix } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { aSn } from "./chunk-1yq098a7.js";
import { VGe, KGe, Qjn, pM, rdt } from "./chunk-znhfst8k.js";
import { ddt } from "./chunk-jpq2fv3g.js";
import { Bee, abe } from "../../01-核心基础设施/共享小工具-未细化/chunk-2skajgkt.js";
import { odt, sdt, ibe } from "../../03-入口与运行时/Headless-SDK模式/chunk-yb7jadvp.js";
import { e6n } from "./chunk-z5v9hvat.js";
import { lbe } from "../../01-核心基础设施/共享小工具-未细化/chunk-42rkrq9r.js";
import { vRe } from "./chunk-4zd60pbm.js";
import { isProcessRunning } from "../../01-核心基础设施/共享小工具-未细化/chunk-z36ns74j.js";
import { s, T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var Vn = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 1e4,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    oauth_retry_max_attempts: 3,
    oauth_retry_base_delay_ms: 2000,
    min_version: "0.0.0",
  },
  Mo = m(() =>
    c({
      init_retry_max_attempts: T().int().min(1).max(10).default(3),
      init_retry_base_delay_ms: T().int().min(100).default(500),
      init_retry_jitter_fraction: T().min(0).max(1).default(0.25),
      init_retry_max_delay_ms: T().int().min(500).default(4000),
      http_timeout_ms: T().int().min(2000).default(1e4),
      uuid_dedup_buffer_size: T().int().min(100).max(50000).default(2000),
      heartbeat_interval_ms: T().int().min(5000).max(30000).default(20000),
      heartbeat_jitter_fraction: T().min(0).max(0.5).default(0.1),
      token_refresh_buffer_ms: T()
        .int()
        .min(30000)
        .max(1800000)
        .default(300000),
      teardown_archive_timeout_ms: T().int().min(500).max(2000).default(1500),
      connect_timeout_ms: T().int().min(5000).max(60000).default(15000),
      oauth_retry_max_attempts: T().int().min(0).max(6).default(3),
      oauth_retry_base_delay_ms: T().int().min(100).max(1e4).default(2000),
      min_version: s()
        .refine((t) => {
          try {
            return (r0(t, "0.0.0"), !0);
          } catch {
            return !1;
          }
        })
        .default("0.0.0"),
    }),
  );
async function Dt() {
  let t = await o5t("tengu_bridge_repl_v2_config", Vn),
    p = Mo().safeParse(t);
  return p.success ? p.data : Vn;
}
async function ndt() {
  let t = await Dt();
  if (
    t.min_version &&
    r0(
      {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      t.min_version,
    )
  )
    return `Your version of Claude Code (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) is too old for Remote Control.
Version ${t.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
class ot {
  _active = !1;
  _pending = [];
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  start() {
    this._active = !0;
  }
  end() {
    return ((this._active = !1), this._pending.splice(0));
  }
  enqueue(...t) {
    if (!this._active) return !1;
    return (this._pending.push(...t), !0);
  }
  drop() {
    this._active = !1;
    let t = this._pending.length;
    return ((this._pending.length = 0), t);
  }
  deactivate() {
    this._active = !1;
  }
}
var zn = 3,
  Kn = 3600000,
  Jn = 24 * zn,
  Oo = 24 * Kn,
  Io = 600000,
  Yn = 30000,
  Nt = 300000,
  Xn = 5000,
  Po = 14,
  jo = "could not reach the Remote Control server for about 30 minutes",
  Qn =
    "the connection to the Remote Control server kept dropping after each reconnect",
  Zn = `the connection to the Remote Control server dropped more than ${Jn} times in 24 hours`,
  ei = { attempts: Po, exhaustedDetail: jo };
function ri() {
  let t = [],
    p = Number.NEGATIVE_INFINITY;
  return {
    charge(v, w) {
      if (((t = t.filter((S) => v - S < Oo)), w && t.length >= Jn))
        return "daily_exhausted";
      if (G(t, (S) => v - S < Kn && (!w || S >= p)) >= zn)
        return "hourly_exhausted";
      return (t.push(v), "charged");
    },
    noteHealthyBeat(v) {
      let w = t.at(-1);
      if (w !== void 0 && v - w >= Io) p = v;
    },
  };
}
var Bo = 300000,
  Do = 2592000000,
  ti = 20,
  No = 15000,
  Ho = /^(session|cse)_[A-Za-z0-9_-]+$/;
async function ni() {
  if (St()) return !1;
  let { getFeatureValue_CACHED_MAY_BE_STALE: t } =
    await import("../../01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js");
  return t("tengu_bridge_placeholder_sweep", !0);
}
function ii(t) {
  let p = Jo();
  return (
    (p.placeholderWriteChain = p.placeholderWriteChain.then(t, t)),
    p.placeholderWriteChain
  );
}
function oi(t, p) {
  return ii(async () => {
    if (!(await ni())) return;
    let v = await ownProcStartAsync(),
      w = { pid: process.pid, procStart: v, createdAt: Date.now() };
    await Te((I) => {
      let S = Object.entries(I.replBridgePlaceholders ?? {}).filter(
        ([B]) => !si(B, t),
      );
      (S.push([t, w]), S.sort((B, F) => F[1].createdAt - B[1].createdAt));
      let L = S.slice(ti);
      if (L.length > 0)
        n(
          `[bridge:placeholder] evicting ${L.length} record(s) past cap: ${L.map(([B]) => B).join(", ")}`,
        );
      return {
        ...I,
        replBridgePlaceholders: Object.fromEntries(S.slice(0, ti)),
      };
    }, p);
  });
}
async function Xjn() {
  try {
    let t = Object.values(ee().replBridgePlaceholders ?? {}),
      p = 1,
      v = new Set();
    for (let w of t) {
      if (w.pid === process.pid || v.has(w.pid)) continue;
      if (
        w.procStart !== void 0
          ? isProcessRunning(w.pid) && (await isSameProcessAsync(w.pid, w.procStart))
          : isProcessRunning(w.pid)
      )
        (v.add(w.pid), p++);
    }
    return p;
  } catch {
    return 0;
  }
}
function Ir(t, p) {
  return ii(async () => {
    await Te((v) => {
      let w = Object.keys(v.replBridgePlaceholders ?? {}).filter((S) =>
        si(S, t),
      );
      if (w.length === 0) return v;
      let I = { ...v.replBridgePlaceholders };
      for (let S of w) delete I[S];
      return { ...v, replBridgePlaceholders: I };
    }, p);
  });
}
function si(t, p) {
  return sessionIdBody(t) === sessionIdBody(p);
}
async function Fo(t) {
  if (isProcessProvablyGone(t.pid)) return !0;
  return isProcessRunning(t.pid) && !(await isSameProcessAsync(t.pid, t.procStart));
}
function Ht(t) {
  if (
    t === "invalid" ||
    t === "skipped_superseded" ||
    t === "skipped_owner_changed"
  )
    return !0;
  return (
    typeof t === "number" && t < 500 && t !== 401 && t !== 408 && t !== 429
  );
}
async function $o(t, p, v) {
  if (!(await Fo(p))) return "keep";
  let { session: w, notFound: I } = await getBridgeSessionOrStatus(t, {
    baseUrl: v.baseUrl,
    getAccessToken: v.getAccessToken,
  });
  if (I) return "remove";
  if (!w) return "keep";
  if (!w.created_at || !w.updated_at)
    return (
      n(
        `[bridge:placeholder] session GET carried no timestamps for ${t}; keeping`,
      ),
      "keep"
    );
  if (w.updated_at !== w.created_at)
    return (i("tengu_bridge_placeholder_used_session", { v2: !0 }), "remove");
  let S = await v.archive(t);
  if (!Ht(S))
    return (
      logFeatureBad("bridge_placeholder_sweep", typeof S === "number" ? `http_${S}` : S),
      "keep"
    );
  return (
    logFeatureOk("bridge_placeholder_sweep"),
    n(`[bridge:placeholder] archived orphaned placeholder ${t} (status=${S})`),
    "remove"
  );
}
function ai(t) {
  let p = Jo();
  if (p.placeholderSweepStarted) return Promise.resolve();
  return (
    (p.placeholderSweepStarted = !0),
    (async () => {
      if ((await Z(t.startDelayMs ?? No), !(await ni()))) return;
      let v = ee().replBridgePlaceholders;
      if (!v) return;
      let w = t.skipSessionId ? sessionIdBody(t.skipSessionId) : void 0,
        I = [];
      for (let [S, L] of Object.entries(v)) {
        let B = Date.now() - L.createdAt;
        if (Math.abs(B) < Bo || sessionIdBody(S) === w) continue;
        if (!Ho.test(S)) {
          I.push(S);
          continue;
        }
        if ((await $o(S, L, t)) === "remove" || B > Do) I.push(S);
      }
      if (I.length > 0)
        await Te((S) => {
          if (!S.replBridgePlaceholders) return S;
          let L = { ...S.replBridgePlaceholders };
          for (let B of I) delete L[B];
          return { ...S, replBridgePlaceholders: L };
        }, t.storageV5);
    })().catch((v) => {
      n(`[bridge:placeholder] sweep failed: ${l(v)}`, { level: "error" });
    })
  );
}
var Ft = 180000,
  xo = 90000;
function $t(t, p, v) {
  switch (t) {
    case void 0:
      return "no close code received";
    case 4090:
      switch (p) {
        case "superseded_by_worker":
          return "another connection took over this session (usually another device or Claude Code session) \u2014 this device is standing down (code 4090)";
        case "session_not_active":
          return "this session was ended or archived from another device or app (code 4090)";
        case "session_not_found":
          return "the server no longer reports this session \u2014 it may have been deleted from another device or app (code 4090)";
        case "epoch_stale":
          return "the session worker registration went stale \u2014 no active worker holds it (code 4090)";
        default:
          return "this connection is no longer the active worker for the session (code 4090)";
      }
    case 4091:
      return "transport init failed (code 4091)";
    case 4092:
      return "connection dropped \u2014 no close reason from server (code 4092)";
    case 4093:
      return "presence heartbeats to the server kept failing (code 4093)";
    case 4094:
      return "worker credential expired or rejected (code 4094)";
    case 401:
      return "auth token expired (code 401)";
    case 403: {
      if (!fse(v?.rejectSource)) return "server rejected connection (code 403)";
      let w = rVt(v.rejectSource);
      if (v.streak === void 0) return w;
      let I = Math.max(1, Math.round(v.streak.streakMs / 60000));
      return `${w}, and kept refusing for ${I} ${x(I, "minute")}`;
    }
    case 404:
      return "session not found on server (code 404)";
    case 1002:
      return "server rejected the connection handshake (code 1002)";
    case 4001:
      return "session expired or not found on server (code 4001)";
    case 4003:
      return "server rejected credentials (code 4003)";
    default:
      return `code ${t}`;
  }
}
async function xt(t) {
  let {
      sessionUrl: p,
      ingressToken: v,
      sessionId: w,
      initialSequenceNum: I,
      getAuthToken: S,
    } = t,
    L;
  if (S) L = () => axn(S());
  else eRt(v);
  let B = t.epoch ?? (await abe(p, v));
  n(
    `[bridge:repl] CCR v2: worker sessionId=${w} epoch=${B}${t.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`,
  );
  let F = new URL(p);
  F.pathname = F.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let Q = new VGe(
      F,
      {},
      { sessionId: w, initialSequenceNum: I, getAuthHeaders: L },
    ),
    le = !t.outboundOnly,
    ke = (t.selfHealHeartbeats ?? !1) && le,
    Ge = (t.nonOrigin403Retry ?? !1) && le,
    ce = Ge && ke;
  if (Ge)
    Q.setNonOriginRejectionPolicy({
      windowMs: Ft,
      maxGapMs: xo,
      onRecovered: t.onNonOriginRejectionRecovered,
    });
  let Pr,
    ie = !1;
  function re(M, oe, He) {
    if (ie) return;
    ie = !0;
    try {
      (W.close({
        goodbye: !1,
        retainUndeliveredClientEvents: t.retainUndeliveredOnClose === !0,
      }),
        Q.close());
    } catch (me) {
      logError(me);
    }
    try {
      Pr?.(M, oe, He);
    } catch (me) {
      logError(me);
    }
  }
  let W = new pM(Q, new URL(p), {
    getAuthHeaders: L,
    heartbeatIntervalMs: t.heartbeatIntervalMs,
    heartbeatJitterFraction: t.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport:
      (t.advertiseHeartbeatProbeSupport ?? !1) && le,
    uploadTrim: t.uploadTrim,
    beatOnStaleReconnect: (t.beatOnStaleReconnect ?? !1) && le,
    idleTracker: t.idleTracker,
    beatOnReactivation: (t.beatOnReactivation ?? !1) && le,
    skipRedundantHeartbeats: t.skipRedundantHeartbeats,
    streamEventFlushIntervalMs: t.streamEventFlushIntervalMs,
    gzipRequestBodyFetch: t.gzipRequestBodyFetch,
    noSubscriberStreamEventFlushIntervalMs:
      t.noSubscriberStreamEventFlushIntervalMs,
    noSubscriberUploadHoldMs: t.noSubscriberUploadHoldMs,
    nonOrigin403Transient: ce,
    internalEventUploader: t.internalEventUploader,
    onEpochMismatch: (M) => {
      let oe = t.causeTypedCloseCodes ? Qjn[M] : 4090;
      throw (
        n(
          `[bridge:repl] CCR v2: terminal request-path condition (${M}) \u2014 closing with ${oe} for ${oe === 4094 ? "auth recovery" : "poll-loop recovery"}`,
        ),
        re(oe, M),
        Error("terminal request-path condition")
      );
    },
    onRequestAuthOk: t.onRequestAuthOk,
    ...(ke && {
      onHeartbeatLost: () => {
        if (ie) return;
        (n(
          "[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild",
          { level: "warn" },
        ),
          re(4093));
      },
    }),
  });
  (Q.setOnEvent((M) => {
    (W.reportDelivery(M.event_id, "received"),
      W.reportDelivery(M.event_id, "processed"));
  }),
    Q.setEventFilter(EAt));
  let er,
    rr = !1;
  return {
    write(M) {
      return W.writeEvent(M);
    },
    writeBatch(M) {
      return W.writeEvents(M);
    },
    close(M) {
      if (
        ((ie = !0),
        W.close({
          goodbye: M?.goodbye,
          retainUndeliveredClientEvents: M?.retainUndelivered,
        }),
        !M?.retainUndelivered)
      )
        W.discardUndeliveredClientEvents();
      Q.close();
    },
    takeUndeliveredEvents() {
      return W.takeUndeliveredClientEvents();
    },
    discardUndeliveredEvents() {
      return W.discardUndeliveredClientEvents();
    },
    adoptUndeliveredEvents(M) {
      W.adoptClientEvents(M);
    },
    flushGoodbye() {
      return W.flushGoodbye();
    },
    isConnectedStatus() {
      return rr;
    },
    getStateLabel() {
      if (Q.isClosedStatus()) return "closed";
      if (Q.isConnectedStatus()) return rr ? "connected" : "init";
      return "connecting";
    },
    setOnData(M) {
      Q.setOnData(M);
    },
    setOnClose(M) {
      ((Pr = M),
        Q.setOnClose((oe, He) => {
          re(oe ?? 4092, void 0, He);
        }));
    },
    setOnConnect(M) {
      er = M;
    },
    getLastSequenceNum() {
      return Q.getLastSequenceNum();
    },
    getEpoch() {
      return B;
    },
    reportState(M, oe) {
      W.reportState(M, oe);
    },
    reportMetadata(M) {
      W.reportMetadata(M);
    },
    reportDelivery(M, oe) {
      W.reportDelivery(M, oe);
    },
    setNoSubscriberStreamEventFlushIntervalMs(M) {
      W.setNoSubscriberStreamEventFlushIntervalMs(M);
    },
    setNoSubscriberUploadHoldMs(M) {
      W.setNoSubscriberUploadHoldMs(M);
    },
    flush() {
      return W.flush();
    },
    flushInternalEvents() {
      return W.flushInternalEvents();
    },
    getInternalEventBacklog() {
      return {
        pending: W.internalEventsPending,
        droppedBatches: W.droppedInternalBatches,
      };
    },
    getInternalEventWriter() {
      return (M, oe, He) => W.writeInternalEvent(M, oe, He);
    },
    getInternalEventReaders() {
      return {
        readMain: () => W.readInternalEvents(),
        readSubagents: () => W.readSubagentInternalEvents(),
      };
    },
    getInternalEventsPort() {
      return {
        epoch: () => W.getWorkerEpoch(),
        postBatch: (M, oe) => W.postInternalEventsBatch(M, oe),
        listPage: (M, oe) => W.getInternalEventsPage(M, oe),
      };
    },
    connect() {
      W.initialize(B).then(
        () => {
          if (ie) return;
          if (
            ((rr = !0),
            n(
              `[bridge:repl] v2 transport ready for writes (epoch=${B}); opening the read stream`,
            ),
            er?.(),
            !t.outboundOnly && !ie)
          )
            Q.connect();
        },
        (M) => {
          (n(`[bridge:repl] CCR v2 initialize failed: ${l(M)}`, {
            level: "error",
          }),
            re(4091));
        },
      );
    },
  };
}
var Uo = 5000;
var di = 300,
  li = 200,
  Lo = 2000,
  qo = 8,
  Go = 1048576,
  Wo = 30000;
async function Yjn(t) {
  let {
      baseUrl: p,
      orgUUID: v,
      title: w,
      reattachOrFail: I,
      reattachOrigin: S,
      reviveInitiated: L,
      neverArchive: B,
      onAuthProven: F,
      noHistoryBackfill: Q,
      onReattachGoneBounce: le,
      neutralFallbackTitle: ke,
      onReattachPointerDead: Ge,
      ownerPin: ce,
      onOwnerChanged: Pr,
      getAccessToken: ie,
      onAuth401: re,
      classifyFailedOAuthRefresh: W,
      onReadFreshOAuthToken: er,
      onClassifyMissingOAuthToken: rr,
      onProactiveRefresh: M,
      toSDKMessages: oe,
      initialHistoryCap: He,
      initialMessages: me,
      onInboundMessage: gi,
      onUserMessage: qt,
      onSessionEstablished: pi,
      onBeforePushTriggeringState: Gt,
      onPermissionResponse: Wt,
      onInterrupt: mi,
      onStopTask: vi,
      onBackgroundTasks: bi,
      getInitializeState: Ri,
      getCommands: Ei,
      isTurnLive: Vt,
      onDialogKindsDeclared: yi,
      onClientInitialize: wi,
      onSetModel: Si,
      onSetMaxThinkingTokens: Ti,
      onSetPermissionMode: Ci,
      onApplyFlagSettings: ki,
      onRenameSession: Ai,
      onSetColor: Mi,
      onFileSuggestions: Oi,
      onReadFile: Ii,
      onGetWorkspaceDiff: Pi,
      onGetContextUsage: ji,
      onGetUsage: Bi,
      onMcpAuthenticate: Di,
      onMcpOauthCallbackUrl: Ni,
      onMcpReconnect: Hi,
      onMcpStatus: Fi,
      onStateChange: _e,
      onBridgeInjectedMcp: Zo,
      outboundOnly: br,
      tags: $i,
      sessionGroupingId: zt,
      requestedSessionGroupingId: Rr,
      gitRepoUrl: We = null,
      branch: Kt = "",
      defaultBranch: Jt = null,
      onTransportPersistenceReady: Yt,
      onTransportPersistenceTeardown: jr,
      onTransportRebuilt: xi,
      reattachSessionId: je,
      reattachSequenceNum: Ui,
      livePreviewPorts: es,
      credentialsStore: Er,
      workSecretCredentials: Ae,
      storageV5: Ee,
    } = t,
    Ve = Ae !== void 0 ? !0 : B,
    Xt = w,
    de = !!je,
    D = await Dt(),
    Qt = !1,
    Br = (e) => {
      if (!Ae) ce?.noteAcceptedToken(e);
    },
    Zt = "work-secret-lane",
    en = () => (Ae ? Zt : ie()),
    Dr = Ae
      ? () => {
          let e = Qt ? "refresh" : "initial";
          return Ae.register(e, {
            stillWanted: () => !R && se === void 0,
            reuseHeldAboveS: Math.ceil(D.token_refresh_buffer_ms / 1000) + 60,
          }).then((r) => {
            if (r !== null && !isCredentialsFailure(r)) Qt = !0;
            return r;
          });
        }
      : Ko,
    Nr = ie();
  if (!Nr)
    return (
      n("[remote-bridge] No OAuth token"),
      logFeatureBad("bridge_connect", "bridge_connect_no_token"),
      null
    );
  let yr = () => ie() ?? Nr,
    rn = () => ce?.ownerToken() ?? ie() ?? Nr,
    dt = new Set(),
    { getOriginalCwd: lt } = await import("../AppState-状态管理/getOriginalCwd.mg2gq0d6.js"),
    { getMainLoopModel: Li } = await import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    Hr = Rr ?? zt,
    Fr = zt;
  async function tn() {
    let e = {},
      r = async () => {
        if (We) {
          let { buildGitSessionContext: d } =
              await import("../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js"),
            { reportGitSessionContext: _ } =
              await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
            { report: P } = await d(We, Kt, Jt ?? void 0);
          _(P);
        }
      },
      o = (d) =>
        Lt(
          (_, P) =>
            createCodeSession(
              p,
              _,
              Xt,
              D.http_timeout_ms,
              $i,
              We
                ? { gitRepoUrl: We, branch: Kt, defaultBranch: Jt ?? void 0 }
                : void 0,
              lt(),
              Li(),
              d,
              e,
              P,
            ).then((O) => {
              if (typeof O === "string") ce?.noteAcceptedToken(_);
              return O;
            }),
          "createCodeSession",
          D,
          { getAccessToken: yr, onAuth401: re, recoveryAttemptedTokens: dt },
        ),
      a = await o(Hr);
    if (
      isCreateSessionFailure(a) &&
      a.reason === "grouping_rejected" &&
      Rr === void 0 &&
      Hr !== void 0
    ) {
      let d = await o(void 0);
      if (typeof d === "string")
        return (
          (Fr = void 0),
          await r(),
          q("info", "bridge_repl_v2_grouping_dropped", { status: a.status }),
          n(
            "[bridge:core] persisted Project no longer available; recreated session outside it",
          ),
          n(`[remote-bridge] Created session ${d}`),
          q("info", "bridge_repl_v2_session_created"),
          d
        );
      return a;
    }
    if (typeof a === "string")
      ((Fr = Hr),
        await r(),
        n(`[remote-bridge] Created session ${a}`),
        q("info", "bridge_repl_v2_session_created"));
    return a;
  }
  function qi(e) {
    if (e?.reason === "grouping_rejected" && Hr !== void 0) {
      let r = e.detail ? `: ${e.detail}` : "";
      return Rr !== void 0
        ? `Couldn't create a session in the requested Project (server ${e.status}${r}). The Project may not exist or may not be available to you.`
        : `Couldn't recreate the session in its previous Project (server ${e.status}${r}) \u2014 the Project may have been deleted or is no longer available.`;
    }
    if (e?.reason === "request_rejected")
      return `Session creation failed (server ${e.status}) \u2014 see debug log`;
    if (e?.reason === "malformed_response") return CNe;
    return "Session creation failed \u2014 see debug log";
  }
  function nn(e) {
    if (e !== null && e.terminal === !1) {
      (_e?.("failed", ct, "auth"),
        logBridgeSkip("v2_session_create_oauth_rejected", void 0, !0),
        logFeatureBad("bridge_connect", "bridge_connect_create_oauth_rejected"));
      return;
    }
    (_e?.("failed", qi(isCreateSessionFailure(e) ? e : null)),
      logBridgeSkip("v2_session_create_failed", void 0, !0),
      logFeatureBad("bridge_connect", "bridge_connect_session_create_failed"));
  }
  let Gi = "JWT refresh failed: no OAuth token \u2014 run /login",
    ct = "Claude.ai login was rejected \u2014 run /login, then /remote-control",
    Wi = "Claude.ai login expired \u2014 run /login, then /remote-control",
    Vi = "Claude.ai login expired \u2014 run /login to restore Remote Control",
    zi = "Signed out of Claude \u2014 run /login, then /remote-control",
    ut = !1,
    ft = !1;
  if (je && Ly(je)) {
    if (I)
      return (
        n(
          `[remote-bridge] Reattach-or-fail: ${je} is teleported; failing terminally instead of minting fresh`,
        ),
        q("info", "bridge_repl_v2_revive_reattach_teleported"),
        Ge?.(),
        _e?.("failed", Lpe, "terminal"),
        logBridgeSkip("v2_revive_reattach_teleported", void 0, !0),
        logFeatureBad("bridge_connect", "bridge_connect_reattach_teleported"),
        null
      );
    (n(
      `[remote-bridge] Reattach suppressed for teleported session ${je} \u2014 minting fresh`,
    ),
      (ut = !0),
      (de = !1));
  }
  let b;
  if (Ae) {
    if (!je || ut)
      return (
        n(
          "[remote-bridge] Work-secret attach has no session to reattach; failing",
          { level: "error" },
        ),
        _e?.(
          "failed",
          "Remote Control could not attach: the host supplied a session credential but no session to attach to",
          "terminal",
        ),
        logBridgeSkip("v2_work_secret_no_session", void 0, !0),
        logFeatureBad("bridge_connect", "bridge_connect_work_secret_no_session"),
        null
      );
    ((b = je),
      n(
        `[remote-bridge] Attaching to session ${b} with the host's work secret`,
      ),
      q("info", "bridge_repl_v2_work_secret_attach"));
  } else if (je && !ut) {
    ((b = je),
      n(`[remote-bridge] Reattaching to session ${b}`),
      q("info", "bridge_repl_v2_session_reattached"));
    let e = await Lt(
      (r, o) => Yo(b, p, r, v, D.http_timeout_ms, o, Er),
      "unarchiveSession",
      D,
      { getAccessToken: yr, onAuth401: re, recoveryAttemptedTokens: dt },
    );
    if (e?.outcome === "elevated_auth") {
      (n(
        `[remote-bridge] Reattach ${b}: unarchive elevated-auth (${e.reason}) \u2014 surfacing auth failure, pointer preserved`,
      ),
        q("info", "bridge_repl_v2_reattach_elevated_auth"));
      let o =
        e.reason === "untrusted_device" && !isTrustedDeviceGateEnabled()
          ? { terminal: !0, reason: "request_rejected", status: 403 }
          : { terminal: !0, reason: e.reason };
      return (
        _e?.("failed", A7(o), Le(o)),
        logBridgeSkip("v2_reattach_elevated_auth", void 0, !0),
        logFeatureBad("bridge_connect", "bridge_connect_reattach_elevated_auth"),
        null
      );
    }
    if (e?.outcome === "gone" && I)
      return (
        n(
          `[remote-bridge] Reattach-or-fail: ${b} gone (unarchive ${e.status}); failing terminally instead of minting fresh`,
        ),
        q("info", "bridge_repl_v2_revive_reattach_gone"),
        le(),
        Ge?.(),
        _e?.("failed", Lpe, "terminal"),
        logBridgeSkip("v2_revive_reattach_gone", void 0, !0, {
          reattach_origin: fromEnumOpt(S),
          revive_initiated: L === !0,
        }),
        logFeatureBad("bridge_connect", "bridge_connect_reattach_gone"),
        null
      );
    if (e?.outcome === "gone") {
      (n(
        `[remote-bridge] Reattach ${b} gone (unarchive ${e.status}); minting fresh session`,
      ),
        (ft = !0),
        le(),
        (Xt = ke ?? `${getBridgeSessionNamePrefix()}-${xU()}`),
        q("info", "bridge_repl_v2_reattach_fallback", {
          via: "unarchive",
          status: e.status,
        }),
        i("tengu_bridge_repl_env_expired_fresh_session", {
          v2: !0,
          via: fromEnum("unarchive"),
          status: typeof e.status === "number" ? e.status : fromEnum(e.status),
          reattach_origin: fromEnumOpt(S),
          revive_initiated: L === !0,
        }));
      let r = await tn();
      if (typeof r !== "string") return (nn(r), null);
      ((b = r), (de = !1));
    }
  } else {
    if (I)
      return (
        n(
          "[remote-bridge] Reattach-or-fail: no reattach pointer for this init; failing terminally instead of minting fresh",
        ),
        q("info", "bridge_repl_v2_revive_fresh_refused"),
        le(),
        _e?.("failed", Lpe, "terminal"),
        logBridgeSkip("v2_revive_fresh_refused", void 0, !0),
        logFeatureBad("bridge_connect", "bridge_connect_revive_fresh_refused"),
        null
      );
    let e = await tn();
    if (typeof e !== "string") return (nn(e), null);
    b = e;
  }
  if (de && Rr !== void 0 && Rr !== Fr)
    n(
      "[bridge:core] --project ignored: reattached to existing session (Project is fixed at create)",
    );
  if (Ve && de) Ir(b, Ee);
  else if (!br) oi(b, Ee);
  ai({
    baseUrl: p,
    getAccessToken: yr,
    skipSessionId: b,
    archive: (e) => Ze(e, p, yr(), v, D.http_timeout_ms, void 0, Ee),
    storageV5: Ee,
  });
  let Ki = Nt + 60000,
    Be;
  function _t() {
    Be = void 0;
  }
  function ht(e) {
    if (!isCredentialsFailure(e) || !at(e)) {
      if (e !== null && !isCredentialsFailure(e) && !isCredentialsRejection(e)) _t();
      return e;
    }
    if (!isBridgeNonOrigin403RetryEnabled()) return e;
    let r = Date.now();
    if (Be === void 0 || r - Be.lastAtMs > Ki)
      Be = { startedAtMs: r, lastAtMs: r, refusals: 0 };
    ((Be.lastAtMs = r), Be.refusals++);
    let o = r - Be.startedAtMs;
    if (Be.refusals > 1 && o >= Ft)
      return (
        n(
          `[remote-bridge] /bridge refused by ${e.source} ${Be.refusals}\xD7 over ${Math.round(o / 1000)}s with nothing reaching Anthropic since \u2014 treating as a verdict`,
        ),
        e
      );
    return (
      n(
        `[remote-bridge] /bridge 403 not written by Anthropic's origin (${e.source}) \u2014 treating as unreachable`,
      ),
      q("warn", "bridge_repl_v2_bridge_403_nonorigin", { source: e.source }),
      null
    );
  }
  function $r(e, r) {
    if (R || se !== void 0 || V !== r) return Promise.resolve(null);
    let o = () =>
      Dr(b, p, e, D.http_timeout_ms, void 0, Er).then((a) => {
        if (V !== r) return a;
        let d = ht(a);
        if (d !== null && !isCredentialsFailure(d) && !isCredentialsRejection(d)) (Br(e), Mt());
        return d;
      });
    if (!ur()) return o();
    return fr("owner_changed_recovery").then((a) =>
      a || R || se !== void 0 || V !== r ? null : o(),
    );
  }
  let on = Nr,
    K = await Lt(
      (e, r) => ((on = e), Dr(b, p, e, D.http_timeout_ms, r, Er)),
      "fetchRemoteCredentials",
      D,
      { getAccessToken: yr, onAuth401: re, recoveryAttemptedTokens: dt },
    );
  if (de && K === null)
    (n(
      `[remote-bridge] Reattach ${b}: /bridge failed after unarchive; surfacing retry prompt`,
    ),
      q("info", "v2_remote_creds_reattach_transient"));
  if (!K || isCredentialsFailure(K) || isCredentialsRejection(K)) {
    let e =
        K === null
          ? de
            ? "Couldn't reconnect to your Remote Control session. Retry, or start a fresh session without --resume."
            : "Remote credentials fetch failed \u2014 see debug log"
          : isCredentialsRejection(K)
            ? Wi
            : A7(K),
      r = K === null ? (L ? "auth" : "terminal") : isCredentialsRejection(K) ? "auth" : Le(K),
      o =
        K === null
          ? de
            ? "v2_remote_creds_reattach_transient"
            : "v2_remote_creds_failed"
          : isCredentialsRejection(K)
            ? "v2_remote_creds_oauth_rejected"
            : at(K)
              ? `v2_remote_creds_request_rejected_${K.source}`
              : `v2_remote_creds_${K.reason}`;
    if (
      (n(
        `[remote-bridge] Creds failed; onStateChange ${_e ? "set" : "UNSET"}, msg="${e}"`,
      ),
      _e?.("failed", e, r),
      logBridgeSkip(o, void 0, !0),
      logFeatureBad("bridge_connect", "bridge_connect_creds_failed"),
      !de)
    )
      Ze(b, p, rn(), v, D.http_timeout_ms, void 0, Ee);
    return null;
  }
  (n(
    `[remote-bridge] Fetched bridge credentials (expires_in=${K.expires_in}s)`,
  ),
    Br(on),
    pi?.(b));
  let sn = Bee(K.api_base_url, b);
  n(`[remote-bridge] v2 session URL: ${sn}`);
  function Ji() {
    return H("tengu_bridge_selfheal_heartbeats", !0);
  }
  function gt() {
    return H("tengu_bridge_recovery_patience", !0);
  }
  function an() {
    return H("tengu_dazzling_garden", !0);
  }
  function Yi() {
    return H("tengu_ccr_stream_event_flush_ms", KGe);
  }
  function dn() {
    return H("tengu_ccr_no_subscriber_flush_ms", 0);
  }
  function ze() {
    return br ? 0 : H("tengu_ccr_no_subscriber_hold_ms", 0);
  }
  function Xi() {
    return H("tengu_ccr_idle_heartbeat", !1);
  }
  function Qi() {
    return H("tengu_ccr_reconnect_beat", !1);
  }
  function Zi() {
    return H("tengu_ccr_reactivation_beat", !1);
  }
  function eo() {
    return H("tengu_ccr_skip_redundant_heartbeat", !1);
  }
  let wr = rdt(),
    ro = fmt("ccr_worker", Ee);
  function ln() {
    return {
      heartbeatIntervalMs: D.heartbeat_interval_ms,
      heartbeatJitterFraction: D.heartbeat_jitter_fraction,
      onRequestAuthOk: ho,
      causeTypedCloseCodes: !0,
      selfHealHeartbeats: Ji(),
      advertiseHeartbeatProbeSupport: Xi(),
      beatOnStaleReconnect: Qi(),
      idleTracker: wr,
      beatOnReactivation: Zi(),
      skipRedundantHeartbeats: eo(),
      uploadTrim: () => H("tengu_ccr_upload_trim", {}),
      streamEventFlushIntervalMs: Yi(),
      gzipRequestBodyFetch: ro,
      noSubscriberStreamEventFlushIntervalMs: dn(),
      noSubscriberUploadHoldMs: ze(),
      outboundOnly: br,
      nonOrigin403Retry: isBridgeNonOrigin403RetryEnabled(),
      onNonOriginRejectionRecovered: go,
      retainUndeliveredOnClose: !0,
      internalEventUploader: {
        maxConsecutiveFailures: qo,
        maxBatchBytes: Go,
        requestTimeoutMs: Wo,
      },
    };
  }
  let k;
  try {
    k = await xt({
      ...ln(),
      sessionUrl: sn,
      ingressToken: K.worker_jwt,
      sessionId: b,
      epoch: K.worker_epoch,
      initialSequenceNum: de ? Ui : void 0,
      getAuthToken: () => K.worker_jwt,
    });
  } catch (e) {
    if (
      (n(`[remote-bridge] v2 transport setup failed: ${l(e)}`, {
        level: "error",
      }),
      _e?.("failed", `Transport setup failed: ${l(e)}`),
      logBridgeSkip("v2_transport_setup_failed", void 0, !0),
      logFeatureBad("bridge_connect", "bridge_connect_transport_failed"),
      !de)
    )
      Ze(b, p, rn(), v, D.http_timeout_ms, void 0, Ee);
    return null;
  }
  (n(`[remote-bridge] v2 transport created (epoch=${K.worker_epoch})`),
    _e?.("ready"));
  let { worker_jwt: pt, api_base_url: cn } = K,
    rs = null,
    ts = new Set(),
    to = new Set(),
    no = !1,
    ns = !1,
    xr = 0;
  function is() {
    (xr++, (no = !1), (to = new Set()));
  }
  let io = null;
  function os(e, r = !1) {}
  function ss() {
    io = null;
  }
  function oo() {
    return !1;
  }
  function as(e, r, o = !1) {
    return { added: [], removed: [] };
  }
  function so(e, r = !1) {}
  let ao = void 0,
    Ke = 0,
    Je = !1;
  function lo() {
    if (R) return;
    let e = Date.now();
    if (e - Ke < Uo) {
      Je = !0;
      return;
    }
    ((Ke = e), (Je = !1), Ue.refreshNow(b));
  }
  function un() {
    if (R || !Je) return;
    ((Je = !1), (Ke = Date.now()), Ue.refreshNow(b));
  }
  function Ur() {
    try {
      co("withdrawn");
    } catch (e) {
      (logError(e), logFeatureBad("bridge_webagent_mcp_inject", "relinquish_threw"));
    }
  }
  function co(e) {}
  let mt = null,
    Sr = new Ove(D.uuid_dedup_buffer_size),
    fn = new Set();
  if (me) for (let e of me) (fn.add(e.uuid), Sr.add(e.uuid));
  let uo = new Ove(D.uuid_dedup_buffer_size),
    vt = new Ove(D.uuid_dedup_buffer_size),
    ve = new ot(),
    he = new ot(),
    bt = 0,
    tr = !1,
    Fe = !1,
    nr = new Map(),
    fo = 64,
    Rt = de,
    R = !1,
    Lr,
    ue = !1,
    _n = 0,
    V = 0;
  function hn() {
    return (_n++, (V = _n), (ue = !0), (ir = Date.now()), (Tr = !1), V);
  }
  function gn(e) {
    if (V !== e) return !1;
    return ((V = 0), (ue = !1), (ir = 0), !0);
  }
  function pn() {
    ((V = 0), (ue = !1), (ir = 0));
  }
  let ir = 0,
    Tr = !1,
    mn =
      D.init_retry_max_attempts * D.http_timeout_ms +
      (D.init_retry_max_attempts - 1) * D.init_retry_max_delay_ms,
    _o =
      D.oauth_retry_base_delay_ms * (2 ** D.oauth_retry_max_attempts - 1) +
      D.oauth_retry_max_attempts * mn,
    vn = 2 * (15000 + mn + _o),
    sr = 0,
    bn = 3,
    Gr = 0,
    Rn = ri();
  function ho() {
    ((Gr = 0), Rn.noteHealthyBeat(Date.now()), _t(), F?.());
  }
  let Wr = !1,
    $e;
  function ar() {
    (clearTimeout($e), ($e = void 0));
  }
  let dr = !1;
  function Vr(e) {
    ((dr = !1), _e?.("reconnecting", e));
  }
  function zr() {
    ((dr = !1), _e?.("connected"));
  }
  function J(e, r = "terminal") {
    ((dr = !0), ar(), (Me = void 0), Kr(), _e?.("failed", e, r));
  }
  function Cr(e = di) {
    return Promise.race([
      Promise.all([k.flush(), ze() > 0 && k.flushInternalEvents?.()]),
      Z(e),
    ]).then(() => {});
  }
  function Kr() {
    let e = ve.end(),
      r = he.end().map((o) => o.frame);
    ((tr = !1),
      En(e.length + r.length, r, k.discardUndeliveredEvents?.() ?? []));
  }
  function En(e, r, o) {
    if (e === 0 && o.length === 0) return;
    (q("warn", "bridge_repl_v2_client_events_lost", {
      queued: e,
      undelivered: o.length,
    }),
      logFeatureSad("bridge_repl", "client_events_lost_at_dead_end", {
        queued: e,
        undelivered: o.length,
      }));
    let a = [
        ...o.map((P) => P.payload.subtype),
        ...r.map((P) =>
          P.type === "system" && "subtype" in P ? P.subtype : void 0,
        ),
      ],
      d = a.includes("task_notification"),
      _ = a.includes("background_tasks_changed");
    if (d || _)
      logFeatureSad("ccr_task_status_publish", "status_events_lost_at_dead_end", {
        has_terminal_bookend: d,
        has_level: _,
      });
  }
  let Y,
    se,
    Ye = !1,
    lr,
    xe,
    Me,
    X = !1,
    z = !1,
    kr;
  function cr() {
    return !0;
  }
  function De(e, r, o = !0) {
    if (o) ((lr = void 0), (xe = void 0));
    if (!Ye || !cr()) return !1;
    if (r === void 0) logFeatureSad("bridge_presence", e);
    else logFeatureSad("bridge_presence", e, r);
    return !0;
  }
  function te(e, r) {
    if (((lr = void 0), (xe = void 0), (X = !0), !cr())) return !1;
    if (!Ye)
      return (logFeatureBad("bridge_connect", "bridge_connect_died_before_presence"), !1);
    if (r === void 0) logFeatureBad("bridge_presence", e);
    else logFeatureBad("bridge_presence", e, r);
    return !0;
  }
  let Jr = !1;
  function go(e) {
    if (R || z || X) return;
    if (
      (n(
        `[remote-bridge] SSE stream live again after ${e.attempts} non-origin 403(s) over ${Math.round(e.streakMs / 1000)}s (source=${e.source})`,
      ),
      De(
        zo[e.source],
        {
          attempts: e.attempts,
          streak_s: Math.round(e.streakMs / 1000),
          first_in_episode: Jr ? 0 : 1,
        },
        !1,
      ))
    )
      Jr = !0;
  }
  function yt(e) {
    if (!fse(e?.rejectSource)) {
      te(ci(e));
      return;
    }
    if (
      te(ci(e), {
        ...(e.streak !== void 0 && {
          attempts: e.streak.attempts,
          streak_s: Math.round(e.streak.streakMs / 1000),
        }),
        first_in_episode: Jr ? 0 : 1,
      })
    )
      Jr = !0;
  }
  function yn(e) {
    if (Ly(b)) return;
    let r = Y === void 0 ? void 0 : ui(Y.code, Y.cause);
    if (se !== void 0 || Y === void 0 || r === void 0 || (Tr && fi(r))) return;
    if (
      ((se = r),
      n(
        `[remote-bridge] ${e} latched a stashed supersession close (${Y.code}/${Y.cause ?? "uncaused"}) \u2014 archive suppressed`,
      ),
      !X)
    ) {
      if (Y.code === 403) yt(Y.detail);
      else if (Y.code === 404) te("transport_closed_404");
      else (De("transport_closed_4090"), (X = !0));
      Me = void 0;
    }
  }
  function wt(e) {
    if (!cr()) return;
    switch (e.leg) {
      case "ok":
        logFeatureOk("bridge_token_refresh");
        return;
      case "sad":
        logFeatureSad("bridge_token_refresh", e.code);
        return;
      case "bad":
        logFeatureBad("bridge_token_refresh", e.code);
        return;
    }
  }
  function wn(e) {
    if (!isBridgeHostDeclinedEndEnabled()) return;
    let r = Cvn();
    if (r === void 0 || r.generation <= e) return Tn();
    return Sn(r.reason);
  }
  function Sn(e) {
    switch (e) {
      case "signed_out":
        return "host_signed_out";
      case "identity_changed":
        return "host_account_changed";
      case "transient":
      case "refresh_failed":
        return;
    }
  }
  function Tn() {
    if (xe === void 0) return;
    if (xe.generation === gCt()) return xe.code;
    let e = Cvn();
    return e === void 0 ? void 0 : Sn(e.reason);
  }
  function Cn(e) {
    return e === "host_signed_out" ? xyn : Hyn;
  }
  function kn(e) {
    return e === "host_signed_out" ? "auth" : "terminal";
  }
  function An() {
    return ce !== void 0 && !R && !z && isBridgeOwnerPinnedEndEnabled();
  }
  function ur() {
    return An() && ce !== void 0 && ce.identityLooksChanged();
  }
  async function po(e, r) {
    if (z) return "changed";
    if (!An() || ce === void 0) return "unchanged";
    let o = await ce.confirmChanged(r);
    if (o === "changed") return (await mo(e), "changed");
    return z ? "changed" : o;
  }
  async function fr(e) {
    return (await po(e)) === "changed";
  }
  async function Ar(e, r) {
    if (ur() && (await fr(e))) return !0;
    return R || V !== r;
  }
  async function mo(e) {
    if (R || z || ce === void 0) return;
    if (
      ((z = !0),
      kr?.(),
      (kr = void 0),
      Ue.cancelAll(),
      pn(),
      Pr?.(),
      (Wr = !1),
      yn("owner_changed"),
      (Y = void 0),
      clearTimeout(gr),
      ar(),
      Xr?.(),
      (Xr = void 0),
      In(),
      Pn(),
      mt?.stop(),
      Ly(b))
    ) {
      (n(
        `[remote-bridge] Signed-in account changed under teleported session ${b} (${e}) \u2014 latched only`,
      ),
        Kr(),
        jr?.(),
        Ur(),
        k.close());
      return;
    }
    let r = X || se !== void 0;
    if (
      (n(
        `[remote-bridge] Signed-in account changed under ${b} (${e}${r ? ", episode already dead" : ""}) \u2014 stopping`,
      ),
      q("info", "bridge_repl_v2_owner_changed"),
      !r)
    )
      (De(e),
        (X = !0),
        J(b3t, "terminal"),
        k.write(hCn(b, "account_changed")),
        await Cr(ze() > 0 ? D.teardown_archive_timeout_ms : di).catch(() => {
          return;
        }));
    else if (!dr) J(b3t, "terminal");
    else Kr();
    if ((jr?.(), Ur(), !R)) k.close();
    if (se !== void 0) return;
    let o;
    if (Ve)
      ((o = "skipped_host_owned"),
        n(
          `[remote-bridge] Owner-changed settle left host-owned session ${b} unarchived`,
        ));
    else {
      let a = await Ze(
        b,
        p,
        ce.ownerToken(),
        v,
        D.teardown_archive_timeout_ms,
        void 0,
        Ee,
      );
      ((o = _i(a, se)),
        n(
          `[remote-bridge] Owner-changed settle archived ${b} with the owner's credential (archive=${a})`,
        ));
    }
    if (cr())
      i("tengu_bridge_owner_changed", {
        site: fromEnum(e),
        archive_status: fromEnum(o),
        episode_already_dead: r,
      });
  }
  function Mn() {
    if (se !== void 0) return se;
    if (z) return "owner_changed";
    return;
  }
  function Tt() {
    if (ce !== void 0 && isBridgeOwnerPinnedEndEnabled() && ce.identityLooksChanged())
      return { token: ce.ownerToken(), source: "pinned_owner" };
    return { token: ie(), source: "current" };
  }
  let Yr = de,
    be = new Map(),
    _r = new Set();
  function Ct(e, r) {
    if ((_r.delete(e), be.delete(e) && r)) TAt(e);
  }
  let Oe = (e, r) => {
    if (Gt && !z && (e === "requires_action" || e === "idle")) Gt();
    if ((k.reportState(e, r), e === "requires_action" && r)) {
      Yr = !0;
      let o = [...be.values()]
        .flatMap((a) => (a.details ? [a.details] : []))
        .reverse();
      k.reportMetadata({
        pending_action: r,
        pending_actions: aSn(
          r,
          o.filter((a) => a !== r),
        ),
      });
    } else if (Yr)
      ((Yr = !1),
        k.reportMetadata({ pending_action: null, pending_actions: null }));
  };
  function vo() {
    return (_r.clear(), [...be.values()].map((e) => e.request));
  }
  let Xr, On, Qr;
  if (We)
    (async () => {
      let {
          isNestedGitLabProject: e,
          parseGitRemote: r,
          parseGitHubRepository: o,
        } = await import("../../01-核心基础设施/共享小工具-未细化/parseGitHubRepository.3ng6714h.js"),
        {
          addWatchedRepo: a,
          removeWatchedRepo: d,
          getCachedBranchForRepo: _,
          onRepoBranchChange: P,
          getRemoteUrlForDir: O,
        } = await import("../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js"),
        C = await import("./withCollectTimeout.71gz2pr7.js"),
        E = r(We);
      if (E && e(E)) return;
      let j = E ? `${E.owner}/${E.name}` : o(We);
      if (!j) return;
      let ge = E ? `${E.host}/${E.owner}/${E.name}` : `github.com/${j}`,
        A = lt();
      if ((await a(A), R || z)) {
        d(A);
        return;
      }
      let U,
        ae = de,
        fe = de,
        ye = 0,
        Se = !1,
        Ie = !1,
        Or = async () => {
          if (Se) {
            Ie = !0;
            return;
          }
          Se = !0;
          try {
            do {
              Ie = !1;
              let pe = ye;
              if (R || z) return;
              let Pe = lt();
              if (Pe !== A) {
                if ((d(A), (A = Pe), await a(Pe), R || z)) {
                  d(Pe);
                  return;
                }
              }
              let ne = await _(Pe);
              if (pe !== ye) {
                Ie = !0;
                continue;
              }
              if (R || Ne("branch_metadata")) return;
              if (ne === void 0) {
                if (U !== null)
                  if (((U = null), ae))
                    ((ae = !1),
                      k.reportMetadata({
                        current_branches: { [j]: null },
                        worktree_state: { [j]: null },
                      }));
                  else k.reportMetadata({ current_branches: { [j]: null } });
                continue;
              }
              if (C && H("tengu_ccr_handoff_metadata", !1)) {
                let [Ao, nt] = await Promise.all([
                  C.collectWorktreeState(Pe, ne),
                  C.withCollectTimeout(O(Pe)).catch(() => null),
                ]);
                if (pe !== ye) {
                  Ie = !0;
                  continue;
                }
                if (R || Ne("branch_metadata")) return;
                let it = nt ? r(nt) : null,
                  qn = nt ? o(nt) : null,
                  Gn =
                    (it
                      ? `${it.host}/${it.owner}/${it.name}`
                      : qn
                        ? `github.com/${qn}`
                        : null) === ge,
                  Bt = Gn ? ne : null,
                  Ce = Gn ? Ao : null,
                  Wn = Ce
                    ? JSON.stringify([
                        Bt,
                        Ce.head_sha,
                        Ce.unpushed_count,
                        Ce.is_dirty,
                        Ce.mid_operation,
                        Ce.upstream_exists,
                        Ce.has_submodules,
                        Ce.has_lfs,
                      ])
                    : JSON.stringify([Bt]);
                if (Wn === U) continue;
                if (
                  ((U = Wn),
                  n(
                    `[remote-bridge] worktree_state \u2192 ${j}: ${JSON.stringify(Ce)}`,
                  ),
                  (ae = Ce !== null),
                  Ce !== null)
                )
                  fe = !0;
                k.reportMetadata({
                  current_branches: { [j]: Bt },
                  worktree_state: { [j]: Ce },
                });
                continue;
              }
              if (ae) {
                ((ae = !1),
                  (U = ne),
                  k.reportMetadata({
                    current_branches: { [j]: ne },
                    worktree_state: { [j]: null },
                  }));
                continue;
              }
              if (ne === U) continue;
              ((U = ne), k.reportMetadata({ current_branches: { [j]: ne } }));
            } while (Ie);
          } catch (pe) {
            n(`[remote-bridge] current_branches emit failed: ${l(pe)}`);
          } finally {
            Se = !1;
          }
        };
      ((On = () => {
        if (((U = void 0), (ae = fe), ye++, Se)) Ie = !0;
      }),
        (Qr = () => void Or()));
      let Qe = P(Qr);
      ((Xr = () => {
        (Qe(), d(A));
      }),
        Or());
    })().catch((e) =>
      n(`[remote-bridge] current_branches setup failed: ${l(e)}`),
    );
  let In = hB(() => wr.noteActivity()),
    Pn = Ff(() => {
      (k.setNoSubscriberStreamEventFlushIntervalMs?.(dn()),
        k.setNoSubscriberUploadHoldMs?.(ze()));
    }),
    hr = new Map(),
    jn = !qt,
    Zr = "initial",
    kt = 0,
    gr;
  function Bn(e) {
    if (R) return;
    if (
      (i("tengu_bridge_repl_connect_timeout", {
        v2: !0,
        elapsed_ms: D.connect_timeout_ms,
        cause: fromEnum(e),
      }),
      logFeatureBad("bridge_connect", "bridge_connect_timeout"),
      X)
    );
    else if (Object.values(Re).some((r) => r.cause === e))
      Me = "recovery_connect_timeout";
    else if (e === "proactive_refresh") Me = "refresh_connect_timeout";
  }
  async function bo(e) {
    if (!re) return "rejected";
    try {
      if (await re(e)) return "recovered";
    } catch (r) {
      n(`[remote-bridge] Proactive forced OAuth refresh threw: ${l(r)}`, {
        level: "error",
      });
    }
    if (!an() || !W) return "rejected";
    return W();
  }
  let Ro = 3,
    At,
    et = 0;
  function Mt() {
    ((At = void 0), (et = 0));
  }
  function Dn(e) {
    return e !== void 0 && e === At && an();
  }
  let Ue = vRe({
    refreshBufferMs: D.token_refresh_buffer_ms,
    onExhausted: (e) => {
      if (!R && !X) wt({ leg: "bad", code: "chain_exhausted_no_oauth" });
      if (ue || R) return;
      if (dr) {
        n(
          `[remote-bridge] Token refresh chain exhausted for ${e} \u2014 terminal state already showing, not repainting`,
        );
        return;
      }
      (n(
        `[remote-bridge] Token refresh chain exhausted for ${e} \u2014 surfacing auth failure`,
        { level: "error" },
      ),
        _e?.(
          "failed",
          "OAuth token unavailable \u2014 run /login to restore Remote Control",
          "auth",
        ));
    },
    getAccessToken: async () => {
      if (z) return;
      if (ur()) {
        let o = X;
        if (await fr("owner_changed_refresh")) {
          if (z && !o) wt({ leg: "sad", code: "owner_changed" });
          return;
        }
      }
      if (Ae) return Zt;
      let e = ie(),
        r = Dn(e);
      try {
        if (r) await er?.();
        else await M?.();
      } catch (o) {
        n(`[remote-bridge] scheduler token refresh failed: ${l(o)}`, {
          level: "error",
        });
      }
      return ie() ?? e;
    },
    onRefresh: (e, r) => {
      (async () => {
        if (se !== void 0 || z) {
          n(
            `[remote-bridge] Proactive refresh skipped: session ${z ? "stopped for an owner change" : "superseded"}`,
          );
          return;
        }
        if (ue || R) {
          if (
            (n(
              "[remote-bridge] Recovery already in flight, skipping proactive refresh",
            ),
            ue && Ke !== 0)
          )
            Je = !0;
          return;
        }
        if (Ly(e)) {
          n(
            `[remote-bridge] Proactive refresh suppressed for teleported session ${e}`,
          );
          return;
        }
        let o = hn(),
          a = X,
          d = !1,
          _,
          P,
          O,
          C,
          E = !1;
        function j(A, U, ae = "refresh_credentials_rejected", fe) {
          if (R) return;
          if (Me !== void 0 && Y === void 0) (te(Me), (Me = void 0));
          else if (!a)
            ((lr = ae),
              (xe = fe === void 0 ? void 0 : { code: fe, generation: gCt() }));
          ((_ = A), (P = "refresh_credentials_rejected"), (O = U));
        }
        async function ge() {
          if (!(await Ar("owner_changed_refresh", o))) return !1;
          if (z) C = { leg: "sad", code: "owner_changed" };
          return !0;
        }
        try {
          if (await ge()) return;
          let A = Dn(r);
          if (!A) Mt();
          let U = Date.now(),
            ae = xr,
            fe = await vr(
              () => {
                if (A)
                  return Promise.resolve({
                    terminal: !1,
                    reason: "oauth_rejected",
                  });
                if (R || se !== void 0 || V !== o) return Promise.resolve(null);
                return Dr(e, p, r, D.http_timeout_ms, void 0, Er).then((Se) =>
                  R || V !== o ? Se : ht(Se),
                );
              },
              "fetchRemoteCredentials (proactive)",
              D,
            );
          if (R || V !== o) return;
          if (isCredentialsRejection(fe)) {
            if (
              (n(
                A
                  ? "[remote-bridge] Proactive cycle: bearer already rejected by /bridge \u2014 retrying the forced OAuth refresh without re-registering"
                  : "[remote-bridge] Proactive /bridge re-mint rejected (oauth_rejected) \u2014 attempting forced OAuth refresh",
              ),
              !A)
            )
              q("error", "bridge_repl_v2_proactive_oauth_rejected");
            if (await ge()) return;
            let Se = gCt(),
              Ie = await bo(r),
              Or = ie() ?? r;
            if (await ge()) return;
            if (Ie === "unreachable") {
              if (
                (n(
                  "[remote-bridge] Proactive forced OAuth refresh got no verdict (token endpoint unreachable); keeping transport, a later cycle retries the refresh",
                ),
                !A)
              )
                C = { leg: "sad", code: "refresh_deferred_transient" };
              At = r;
              let ne = et < Ro;
              if (Ly(e)) ne = !1;
              if (ne) (et++, Ue.scheduleFromExpiresIn(e, 0));
              q("info", "bridge_repl_v2_proactive_refresh_unreachable", {
                early_retry: et,
                rearmed: ne,
              });
              return;
            }
            let Qe = Ie === "recovered";
            if (Qe) Mt();
            let pe = Qe
              ? await vr(
                  () => {
                    if (R || se !== void 0 || V !== o)
                      return Promise.resolve(null);
                    return Dr(e, p, Or, D.http_timeout_ms, void 0, Er).then(
                      (ne) => (R || V !== o ? ne : ht(ne)),
                    );
                  },
                  "fetchRemoteCredentials (proactive post-refresh)",
                  D,
                )
              : null;
            if (R || V !== o) return;
            if (Qe && pe === null) {
              if (
                (n(
                  "[remote-bridge] Proactive post-refresh re-mint failed (transient); fallback refresh will retry",
                ),
                se === void 0)
              )
                C = { leg: "sad", code: "post_refresh_remint_null" };
              return;
            }
            if (isCredentialsFailure(pe)) {
              ((C = { leg: "bad", code: `post_refresh_credentials_${Le(pe)}` }),
                j(A7(pe), Le(pe), st("refresh", pe)));
              return;
            }
            if (pe === null || isCredentialsRejection(pe)) {
              let ne = Qe ? void 0 : wn(Se);
              if (ne !== void 0) {
                ((C = { leg: "sad", code: ne }),
                  q("info", "bridge_repl_v2_proactive_host_declined"),
                  j(Cn(ne), kn(ne), "refresh_credentials_rejected", ne));
                return;
              }
              ((C = {
                leg: "bad",
                code: Qe
                  ? "oauth_rejected_after_refresh"
                  : re
                    ? "oauth_rejected_refresh_failed"
                    : "oauth_rejected_no_refresh_path",
              }),
                j(Vi, "auth"));
              return;
            }
            Br(Or);
            let Pe = await Ot(pe, "proactive_refresh", 0, U, ae);
            if (Pe === "suppressed_teleported") E = !0;
            if (Pe === "rebuilt")
              ((d = !0),
                (C = { leg: "sad", code: "oauth_rejected_recovered" }),
                n(
                  "[remote-bridge] Transport rebuilt (proactive refresh after forced OAuth refresh)",
                ));
            return;
          }
          if (!fe) {
            if (
              (n(
                "[remote-bridge] Proactive /bridge re-mint failed (transient); fallback refresh will retry",
              ),
              q("warn", "bridge_repl_v2_proactive_remint_null"),
              se === void 0)
            )
              C = { leg: "sad", code: "remint_null" };
            return;
          }
          if (isCredentialsFailure(fe)) {
            ((C = { leg: "bad", code: `credentials_${Le(fe)}` }),
              j(A7(fe), Le(fe), st("refresh", fe)));
            return;
          }
          Br(r);
          let ye = await Ot(fe, "proactive_refresh", 0, U, ae);
          if (ye === "suppressed_teleported") E = !0;
          if (ye === "rebuilt")
            ((d = !0),
              (C = { leg: "ok" }),
              n("[remote-bridge] Transport rebuilt (proactive refresh)"));
        } catch (A) {
          if (
            (n(`[remote-bridge] Proactive refresh rebuild failed: ${l(A)}`, {
              level: "error",
            }),
            q("error", "bridge_repl_v2_proactive_refresh_failed"),
            !R && !z)
          )
            ((_ = `Refresh failed: ${l(A)}`),
              (P = "refresh_rebuild_failed"),
              (O = "terminal"),
              (C = { leg: "bad", code: "rebuild_threw" }));
        } finally {
          if (C !== void 0 && !a && !R) wt(C);
          if (!gn(o)) return;
          un();
          let A = Y;
          Y = void 0;
          let U = E;
          if (Ly(e)) U = !0;
          if (U) {
            if (A !== void 0 && !R) J("Session teleported to cloud");
          } else if (A !== void 0 && !d && !R && !X) {
            let ae = rt(A.code, A.cause, A.detail, !0);
            if (_ !== void 0 && !ae && !R && !ue) J(_, O);
          } else if (A !== void 0 && d && !R) {
            if (Fn(A.code) && !a) De(Re[A.code].recoveredCode);
          } else if (_ !== void 0 && !R) {
            if (
              (J(_, O),
              P !== void 0 && P !== "refresh_credentials_rejected" && !a)
            )
              te(P);
          }
        }
      })();
    },
    label: "remote",
  });
  if (
    (Ue.scheduleFromExpiresIn(b, K.expires_in),
    (kr = ce?.subscribe(() => {
      fr("owner_changed");
    })),
    ur())
  )
    fr("owner_changed");
  let Xe;
  function Nn() {
    (k.setOnConnect(() => {
      if (z) return;
      if (
        (clearTimeout(gr),
        (sr = 0),
        (Me = void 0),
        (X = !1),
        (lr = void 0),
        (xe = void 0),
        (dr = !1),
        _t(),
        (se = void 0),
        be.size > 0)
      ) {
        let o = [...be.values()].findLast((a) => a.details !== void 0);
        (Oe("requires_action", o?.details), _r.clear());
      }
      if (
        (n("[remote-bridge] v2 transport connected"),
        q("info", "bridge_repl_v2_transport_connected"),
        Yt)
      ) {
        let o = k.getInternalEventWriter?.(),
          a = k.getInternalEventReaders?.();
        if (o && a) Yt(o, a, b);
      }
      if (
        (i("tengu_bridge_repl_ws_connected", {
          v2: !0,
          cause: fromEnum(Zr),
          ...(kt > 0 && { remint_attempts: kt }),
        }),
        !Ye && cr())
      )
        ((Ye = !0), logFeatureOk("bridge_presence"));
      if (!Rt && me && me.length > 0 && !ft) {
        Rt = !0;
        let o = k;
        To(me)
          .catch((a) => n(`[remote-bridge] flushHistory failed: ${a}`))
          .finally(() => {
            if (k !== o || R || z || ue) return;
            (Mr(), zr());
          });
      } else if ((ve.active || he.active) && !ue) (ar(), Mr(), zr());
      else if (!ve.active) zr();
    }),
      k.setOnData((o) => {
        if (z) return;
        if (Xe !== void 0) {
          Xe.push(o);
          return;
        }
        if (!ur()) {
          r(o);
          return;
        }
        ((Xe = [o]), e());
      }),
      k.setOnClose(rt));
    function e() {
      fr("owner_changed").then((o) => {
        let a = Xe;
        if (a === void 0) return;
        if (o || R) {
          Xe = void 0;
          return;
        }
        let d = a.length;
        while (a.length > 0) {
          if (z || R) {
            Xe = void 0;
            return;
          }
          if (d === 0 && ur()) {
            e();
            return;
          }
          d = Math.max(0, d - 1);
          let _ = a.shift();
          if (_ !== void 0) r(_);
        }
        Xe = void 0;
      });
    }
    function r(o) {
      urr(
        o,
        Sr,
        uo,
        (a) => {
          if (ddt(a, "bridge")) wr.noteActivity();
          return gi?.(a);
        },
        Wt
          ? (a) => {
              if (Wt(a)) {
                let d =
                  a.response.subtype === "success" && !!a.response.response;
                if (d) wr.noteActivity();
                if ((Ct(a.response.request_id, d), !Fe)) Oe("running");
              }
            }
          : void 0,
        (a) => {
          if (sdt(a)) wr.noteActivity();
          prr(a, {
            transport: k,
            sessionId: b,
            onInterrupt: mi,
            onStopTask: vi,
            onBackgroundTasks: bi,
            getInitializeState: Ri,
            getCommands: Ei,
            getPendingPrompts: vo,
            onDialogKindsDeclared: yi,
            onClientInitialize: wi,
            onSetModel: Si,
            onSetMaxThinkingTokens: Ti,
            onSetPermissionMode: Ci,
            onApplyFlagSettings: ki,
            onRenameSession: Ai,
            onSetColor: Mi,
            onFileSuggestions: Oi,
            onReadFile: Ii,
            onGetWorkspaceDiff: Pi,
            onGetContextUsage: ji,
            onGetUsage: Bi,
            onMcpAuthenticate: Di,
            onMcpOauthCallbackUrl: Ni,
            onMcpReconnect: Hi,
            onMcpStatus: Fi,
            onMcpSetServers: ao,
            outboundOnly: br,
          });
        },
      );
    }
  }
  function rt(e, r, o, a = !1) {
    let d = !1;
    if ((clearTimeout(gr), R || z))
      return (En(0, [], k.discardUndeliveredEvents?.() ?? []), !1);
    if (!a)
      (n(
        `[remote-bridge] v2 transport closed (code=${e}${o ? ` source=${o.rejectSource}` : ""})`,
      ),
        i("tengu_bridge_repl_ws_closed", {
          code: e,
          v2: !0,
          close_cause: fromEnumOpt(r),
          recovery_in_flight: ue,
          ...(o !== void 0 && { reject_source: fromEnum(o.rejectSource) }),
        }));
    if (ue) {
      let E = ir ? Date.now() - ir : 0;
      if (E <= vn) return ((Y = { code: e ?? 4092, cause: r, detail: o }), !1);
      (n(
        `[remote-bridge] authRecoveryInFlight held ${Math.round(E / 1000)}s (> ceiling ${Math.round(vn / 1000)}s) \u2014 treating as leaked, handling close directly`,
        { level: "error" },
      ),
        q("error", "bridge_repl_v2_recovery_flag_leaked"),
        pn(),
        (Y = void 0),
        (d = !0));
    }
    if (Fn(e)) {
      if (sr >= bn) {
        if (
          (n(`[remote-bridge] ${e} recovery exhausted after ${sr} attempts`, {
            level: "error",
          }),
          J(`Transport recovery exhausted (code ${e})`),
          !X)
        )
          te("recovery_exhausted", { close_code: e });
        return !1;
      }
      if (e === 4094 && !a) {
        if (Gr >= bn) {
          if (
            (n(
              `[remote-bridge] worker-credential recovery exhausted after ${Gr} attempts with no successful heartbeat between them`,
              { level: "error" },
            ),
            J(
              "Transport recovery exhausted (worker credential failures)",
              "auth",
            ),
            !X)
          )
            te("cred_recovery_exhausted");
          return !1;
        }
        Gr++;
      }
      if (e === 4093 && !a) {
        let E = Rn.charge(Date.now(), gt());
        switch (E) {
          case "hourly_exhausted":
          case "daily_exhausted": {
            let j = E === "hourly_exhausted" ? 1 : 24;
            if (
              (n(
                `[remote-bridge] heartbeat recovery budget exhausted (${j}h window)`,
                { level: "error" },
              ),
              J(E === "hourly_exhausted" ? Qn : Zn),
              !X)
            )
              te("heartbeat_budget_exhausted", { window_h: j });
            return !1;
          }
          case "charged":
            break;
        }
      }
      return (sr++, wo(e), !1);
    }
    let _ = (a || d) && Tr,
      P = ui(e, r);
    if (P !== void 0 && !(_ && fi(P))) se = P;
    let O = _ && r === "superseded_by_worker" ? void 0 : r,
      C =
        e === 4090 &&
        (O === "superseded_by_worker" ||
          O === "session_not_active" ||
          O === "session_not_found");
    if (
      (J(
        C ? $t(e, O) : `Transport closed: ${$t(e, O, o)}`,
        C ? "ended_elsewhere" : "terminal",
      ),
      X)
    )
      return C;
    if (e === 4090)
      if (a && Tr) te("transport_closed_4090");
      else (De("transport_closed_4090"), (X = !0));
    else if (e === 403) yt(o);
    else te(e === 404 ? "transport_closed_404" : "transport_closed_other");
    return C;
  }
  async function Ot(e, r, o, a, d) {
    if (Ly(b))
      return (
        n(`[remote-bridge] Rebuild suppressed for teleported session ${b}`),
        "suppressed_teleported"
      );
    ((Zr = r),
      (kt = o),
      (se = void 0),
      (Tr = !0),
      (Yr = !1),
      On?.(),
      jr?.(),
      ve.start(),
      he.start());
    try {
      let _ = k,
        P = _.getLastSequenceNum();
      if (
        (_.close({ goodbye: !1, retainUndelivered: !0 }),
        (k = await xt({
          ...ln(),
          sessionUrl: Bee(e.api_base_url, b),
          ingressToken: e.worker_jwt,
          sessionId: b,
          epoch: e.worker_epoch,
          initialSequenceNum: P,
          getAuthToken: () => e.worker_jwt,
        })),
        R)
      )
        return (k.close(), "rebuilt");
      if (z) return (k.close(), "suppressed_owner_changed");
      (Nn(),
        k.connect(),
        So(_),
        Qr?.(),
        reseedBridgePermissionMode(),
        reseedBridgeCrossSessionInbound(),
        reseedBridgeModel(),
        e6n(),
        xi?.(),
        (gr = setTimeout(Bn, D.connect_timeout_ms, Zr)),
        Ue.scheduleFromExpiresIn(b, e.expires_in),
        (pt = e.worker_jwt),
        (cn = e.api_base_url));
      let O = Ke !== 0 && (Je || a < Ke);
      Ke = 0;
      let C = d < xr;
      Je = O || C;
      try {
        so(e, C);
      } catch (E) {
        (logError(E), logFeatureBad("bridge_webagent_mcp_inject", "refresh_threw"));
      }
      (mt?.updateAccessToken(e.worker_jwt), Mr());
    } finally {
      (ve.deactivate(), he.deactivate());
    }
    return "rebuilt";
  }
  async function Hn(e, r, o) {
    let a = !o && rr !== void 0 && cr() && isBridgeSignedOutNeutralEnabled(),
      d = a ? await rr(e) : void 0;
    if (a && (R || V !== r)) return;
    if (d === "signed_out") {
      if (
        (n(
          `[remote-bridge] Signed out on this machine under ${b} (${e}) \u2014 stopping`,
        ),
        q("info", "bridge_repl_v2_signed_out"),
        De("signed_out"),
        !Ye)
      )
        logFeatureSad("bridge_connect", "signed_out");
      ((X = !0), J(zi, "auth"));
      return;
    }
    if ((J(Gi, "auth"), !o)) te("recovery_no_oauth_token");
  }
  async function Eo(e, r, o, a) {
    let d = Date.now();
    (q("info", "bridge_repl_v2_remint_loop_entered"), (Wr = !0));
    let _ = 0;
    try {
      let P = !1,
        O = 0;
      for (let C = 1; !R; C++) {
        if (V !== r) return { creds: null, attempts: _ };
        let E = Math.round((Date.now() - d) / 60000);
        Vr(
          `${Ae ? "Remote Control credentials unavailable" : "Remote Control server unreachable"} \u2014 retrying (attempt ${C}${E > 0 ? `, ${E}m elapsed` : ""})`,
        );
        let j = Math.min(Yn * 2 ** (C - 1), Nt);
        if ((await Z(Math.max(Math.random() * j, Xn)), R)) break;
        if (V !== r) return { creds: null, attempts: _ };
        if (((ir = Date.now()), Ly(b)))
          return (
            J("Session teleported to cloud"),
            q("info", "bridge_repl_v2_remint_loop_teleported"),
            { creds: null, attempts: _ }
          );
        let ge = en();
        if (!ge)
          return (
            q("info", "bridge_repl_v2_remint_loop_no_oauth"),
            await Hn("remint_loop", r, o),
            { creds: null, attempts: _ }
          );
        let A = await $r(ge, r);
        if (((_ = C), R)) break;
        if (V !== r) return { creds: null, attempts: _ };
        if (A === null) {
          if ((O++, a === void 0 || O < a.attempts)) continue;
          if (
            (n(
              `[remote-bridge] Re-mint loop exhausted (code ${e}): ${O} unreachable attempts, ${Math.round((Date.now() - d) / 1000)}s`,
              { level: "error" },
            ),
            q("info", "bridge_repl_v2_remint_loop_exhausted", {
              attempts: _,
              elapsed_ms: Date.now() - d,
              queued_writes_dropped: ve.pendingCount + he.pendingCount,
            }),
            J(a.exhaustedDetail),
            !o)
          )
            te("recovery_exhausted", { close_code: e, remint_attempts: _ });
          return { creds: null, attempts: _ };
        }
        if (isCredentialsRejection(A)) {
          if (re && !P) {
            if (await Ar("owner_changed_recovery", r))
              return { creds: null, attempts: _ };
            P = !0;
            let U = !1;
            try {
              U = await re(ge);
            } catch (ae) {
              n(`[remote-bridge] Re-mint loop OAuth refresh threw: ${l(ae)}`, {
                level: "error",
              });
            }
            if (R) break;
            if (V !== r) return { creds: null, attempts: _ };
            if (U) {
              n(
                "[remote-bridge] Re-mint rejected after outage \u2014 OAuth refresh succeeded; retrying with the refreshed credential",
              );
              continue;
            }
          }
          if ((J(ct, "auth"), !o)) te("recovery_credentials_rejected");
          return (
            q("info", "bridge_repl_v2_remint_loop_rejected"),
            { creds: null, attempts: _ }
          );
        }
        if (isCredentialsFailure(A)) {
          if ((J(A7(A), Le(A)), !o)) te(st("recovery", A));
          return (
            q("info", "bridge_repl_v2_remint_loop_denied"),
            { creds: null, attempts: _ }
          );
        }
        return (
          n(
            `[remote-bridge] Re-mint loop succeeded (code ${e}, attempt ${C}, ${Math.round((Date.now() - d) / 1000)}s)`,
          ),
          q("info", "bridge_repl_v2_remint_loop_recovered", {
            attempts: C,
            elapsed_ms: Date.now() - d,
          }),
          { creds: A, attempts: _ }
        );
      }
      return { creds: null, attempts: _ };
    } finally {
      if (V === r) Wr = !1;
    }
  }
  let Re = {
    401: {
      reconnectingDetail: "JWT expired \u2014 refreshing",
      cause: "auth_401_recovery",
      failureDiagnostic: "bridge_repl_v2_jwt_refresh_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_auth_401",
      needsOAuthRefresh: !0,
    },
    4091: {
      reconnectingDetail: "CCR init failed \u2014 retrying",
      cause: "init_4091_recovery",
      failureDiagnostic: "bridge_repl_v2_4091_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_init_4091",
      needsOAuthRefresh: !1,
    },
    4093: {
      reconnectingDetail: "presence heartbeats failing \u2014 reconnecting",
      cause: "heartbeat_4093_recovery",
      failureDiagnostic: "bridge_repl_v2_4093_recovery_failed",
      fetchFailure: "retry",
      remintCap: ei,
      recoveredCode: "recovered_heartbeat_4093",
      needsOAuthRefresh: !1,
    },
    4094: {
      reconnectingDetail: "worker credential expired \u2014 re-minting",
      cause: "cred_4094_recovery",
      failureDiagnostic: "bridge_repl_v2_4094_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_cred_4094",
      needsOAuthRefresh: !0,
    },
  };
  function Fn(e) {
    if (e === 4094) return isBridgeAuthReviveEnabled();
    return e === 401 || e === 4091 || e === 4093;
  }
  let $n = 30000,
    yo = 5000;
  function xn(e, r) {
    if (Re[e].fetchFailure === "terminal") {
      J(r);
      return;
    }
    (ve.start(),
      he.start(),
      Vr("presence recovery failed \u2014 retrying"),
      n(
        `[remote-bridge] ${e} recovery fetch failed \u2014 retrying in ${$n}ms`,
      ),
      ar());
    let o = k;
    function a() {
      if ((($e = void 0), R)) return;
      if (sr === 0) {
        if (ve.active || he.active) {
          if (ue) {
            $e = setTimeout(a, yo);
            return;
          }
          (Mr(), zr());
        }
        return;
      }
      if (k !== o) return;
      rt(e, void 0, void 0, !0);
    }
    $e = setTimeout(a, $n);
  }
  async function wo(e) {
    let r = X;
    if (Ly(b)) {
      J("Session teleported to cloud");
      return;
    }
    if (ue) return;
    let o = hn();
    (ve.start(),
      he.start(),
      Vr(Re[e].reconnectingDetail),
      n(
        `[remote-bridge] ${e} on transport \u2014 attempting credential refresh + rebuild`,
      ));
    try {
      if (await Ar("owner_changed_recovery", o)) return;
      let a = ie(),
        d = !0,
        _ = gCt();
      if (!Ae && Re[e].needsOAuthRefresh && re)
        try {
          d = await re(a ?? "");
        } catch (A) {
          ((d = !1),
            n(`[remote-bridge] ${e} recovery OAuth refresh threw: ${l(A)}`, {
              level: "error",
            }));
        }
      else if (!Ae && M)
        try {
          await M();
        } catch (A) {
          n(`[remote-bridge] pre-recovery token refresh failed: ${l(A)}`, {
            level: "error",
          });
        }
      if (V !== o) return;
      let P = en() ?? a;
      if (!P || R) {
        if (!R) await Hn("recovery", o, r);
        return;
      }
      if (Ly(b)) {
        J("Session teleported to cloud");
        return;
      }
      let O = Date.now(),
        C = xr,
        E = await vr(() => $r(P, o), "fetchRemoteCredentials (recovery)", D);
      if (V !== o) return;
      if ((!E || isCredentialsRejection(E)) && !R && Re[e].needsOAuthRefresh && re && !d) {
        let A = !1;
        for (let U = 1; U <= D.oauth_retry_max_attempts && !R; U++) {
          Vr(
            `OAuth refresh failed \u2014 waiting for a fresh login (${U}/${D.oauth_retry_max_attempts})`,
          );
          let ae = D.oauth_retry_base_delay_ms * 2 ** (U - 1),
            fe = ae * D.init_retry_jitter_fraction * (2 * Math.random() - 1);
          if ((await Z(ae + fe), await Ar("owner_changed_recovery", o))) return;
          let ye;
          try {
            ye = er ? await er() : (await re(a ?? "")) ? ie() : void 0;
          } catch (Ie) {
            n(
              `[remote-bridge] Adopt-loop token read threw (attempt ${U}): ${l(Ie)}`,
              { level: "error" },
            );
          }
          if (R || V !== o) return;
          let Se = ye !== void 0 && ye !== (a ?? "") ? ye : void 0;
          if (!Se) continue;
          if (((A = !0), Ly(b))) {
            J("Session teleported to cloud");
            return;
          }
          E = await vr(
            () => $r(Se, o),
            "fetchRemoteCredentials (recovery re-poll)",
            D,
          );
          break;
        }
        if (V !== o) return;
        if (isCredentialsRejection(E) && !A) {
          if (!R) {
            let U = wn(_);
            if (U !== void 0) {
              if (
                (q("info", "bridge_repl_v2_recovery_host_declined"),
                J(Cn(U), kn(U)),
                !r)
              )
                if (Ye) (De(U), (X = !0));
                else te("recovery_reauth_required");
              return;
            }
            if (
              (J(
                "OAuth token refresh failed \u2014 run /login to re-authenticate",
                "auth",
              ),
              !r)
            )
              te("recovery_reauth_required");
          }
          return;
        }
      }
      if (R) return;
      if (!E && Re[e].fetchFailure === "retry" && !gt()) {
        xn(e, `could not fetch fresh session credentials after code ${e}`);
        return;
      }
      if (isCredentialsRejection(E) && !Re[e].needsOAuthRefresh && re) {
        if (await Ar("owner_changed_recovery", o)) return;
        let A = !1;
        try {
          A = await re(a ?? "");
        } catch (U) {
          n(`[remote-bridge] ${e} late OAuth refresh threw: ${l(U)}`, {
            level: "error",
          });
        }
        if (R || V !== o) return;
        if (A) {
          if (
            ((E = await vr(
              () => $r(ie() ?? a ?? "", o),
              `fetchRemoteCredentials (${e} late refresh)`,
              D,
            )),
            R || V !== o)
          )
            return;
        }
      }
      if (isCredentialsRejection(E)) {
        if ((J(ct, "auth"), !r)) te("recovery_credentials_rejected");
        return;
      }
      let j = 0;
      if (!E) {
        let A = await Eo(e, o, r, gt() ? Re[e].remintCap : void 0);
        if (((E = A.creds), (j = A.attempts), !E || R || V !== o)) return;
      }
      if (isCredentialsFailure(E)) {
        if (!R) {
          if ((J(A7(E), Le(E)), !r)) te(st("recovery", E));
        }
        return;
      }
      if (V !== o) return;
      Rt = de;
      let ge = await Ot(E, Re[e].cause, j, O, C);
      if (ge === "suppressed_teleported") {
        J("Session teleported to cloud");
        return;
      }
      if (ge === "suppressed_owner_changed") return;
      if ((n(`[remote-bridge] Transport rebuilt after ${e}`), !R)) {
        if (!r)
          De(Re[e].recoveredCode, j > 0 ? { remint_attempts: j } : void 0);
      }
    } catch (a) {
      if (
        (n(`[remote-bridge] ${e} recovery failed: ${l(a)}`, { level: "error" }),
        q("error", Re[e].failureDiagnostic),
        !R && !z)
      ) {
        if (
          (xn(e, `Transport recovery failed (${e}): ${l(a)}`),
          Re[e].fetchFailure === "terminal" && !r)
        )
          te("recovery_failed");
      }
    } finally {
      if (gn(o)) {
        if ((un(), $e !== void 0 && Y !== void 0)) {
          ar();
          let a = Y;
          ((Y = void 0), rt(a.code, a.cause, a.detail, !0));
        } else Y = void 0;
        if ($e === void 0 && !ue) (ve.drop(), he.drop(), (tr = !1));
      }
    }
  }
  if ((Nn(), !de && me && me.length > 0)) (ve.start(), he.start());
  (k.connect(), (gr = setTimeout(Bn, D.connect_timeout_ms, Zr)));
  function It(e) {
    return Vt ? Vt(e) : e();
  }
  function Un(e) {
    return oe(e).map((r) => {
      if (
        r.type !== "assistant" ||
        r.parent_tool_use_id !== null ||
        r.uuid === void 0
      )
        return { ...r, session_id: b };
      let o = nr.get(r.uuid);
      if (o === void 0) return { ...r, session_id: b };
      return (
        nr.delete(r.uuid),
        { ...r, session_id: b, user_message_uuid: o, user_message_uuids: [o] }
      );
    });
  }
  function Mr() {
    let e = ve.end(),
      r = he.end(),
      o = tr;
    if (((tr = !1), e.length === 0 && r.length === 0)) return;
    let a = [],
      d = [],
      _ = () => {
        if (d.length > 0) (a.push(...Un(d)), (d = []));
      },
      P = 0,
      O = 0;
    while (P < e.length || O < r.length) {
      let C = e[P],
        E = r[O];
      if (C && (!E || C.seq < E.seq))
        (Sr.add(C.message.uuid), d.push(C.message), P++);
      else if (E) {
        _();
        let j = E.frame;
        if ("uuid" in j && typeof j.uuid === "string") vt.add(j.uuid);
        (a.push(Object.assign({}, j, { session_id: b })), O++);
      }
    }
    if ((_(), It(() => o) && be.size === 0)) Oe("running");
    (n(
      `[remote-bridge] Drained ${e.length} queued message(s) and ${r.length} SDK event(s) / control frame(s) after flush`,
    ),
      k.writeBatch(a));
  }
  function So(e) {
    let r = e.takeUndeliveredEvents?.() ?? [];
    if (r.length === 0) return;
    (n(
      `[remote-bridge] Carrying ${r.length} undelivered client event(s) over to the rebuilt transport`,
    ),
      q("info", "bridge_repl_v2_events_carried_over", { count: r.length }),
      i("tengu_bridge_repl_events_carried_over", { count: r.length }),
      k.adoptUndeliveredEvents?.(r));
  }
  function tt(e, r) {
    if (he.enqueue({ seq: bt++, frame: e })) {
      n(`[remote-bridge] Queued ${r} during flush`);
      return;
    }
    (k.write(e), n(`[remote-bridge] Sent ${r}`));
  }
  async function To(e) {
    let r = e.filter(xme),
      o = Xo(r, He);
    if (o.length < r.length)
      n(
        `[remote-bridge] Capped initial flush: ${r.length} -> ${o.length} (cap=${He})`,
      );
    let a = oe(o).map((_) => ({ ..._, session_id: b, historical: !0 }));
    if (a.length === 0) return;
    let d = r.findLast((_) => _.type !== "attachment");
    if (It(() => d !== void 0 && Q4t(d) && !hi(d)) && be.size === 0)
      Oe("running");
    (n(`[remote-bridge] Flushing ${a.length} history events`),
      await k.writeBatch(a));
  }
  let Pt = Ve === !0,
    mr;
  function Co(e) {
    if (e?.skipArchive) Pt = !0;
    if (e?.reason) mr = e.reason;
    if (Lr) return Lr;
    return ((R = !0), (Lr = ko()), Lr);
  }
  async function ko() {
    yn("teardown");
    let e = Me ?? lr;
    if (e !== void 0) {
      if (!Ly(b)) {
        let j = Me === void 0 ? Tn() : void 0;
        if (j !== void 0 && Ye && isBridgeHostDeclinedEndEnabled()) De(j);
        else te(e);
      }
      ((Me = void 0), (lr = void 0), (xe = void 0));
    } else if (!X && Y?.code === 403 && !Ly(b)) yt(Y.detail);
    else if (
      !X &&
      ((sr > 0 && ($e !== void 0 || ue)) ||
        (Y !== void 0 && Y.code !== 4090)) &&
      !Ly(b)
    )
      te("recovery_abandoned_at_teardown");
    if (
      (Xr?.(),
      In(),
      Pn(),
      kr?.(),
      (kr = void 0),
      jr?.(),
      Ur(),
      mt?.stop(),
      Ue.cancelAll(),
      clearTimeout(gr),
      ar(),
      Kr(),
      Oe("idle"),
      mr !== void 0)
    )
      k.write(hCn(b, mr));
    if ((k.write(gCn(b)), Pt || (Wr && mr !== "remote_control_disabled"))) {
      let j = Ve
        ? "skipped_host_owned"
        : Pt
          ? "skipped_teleport"
          : "skipped_remint_loop";
      if (mr !== void 0 || ze() > 0) await Cr();
      (k.close(),
        await k.flushGoodbye(),
        n(`[remote-bridge] Teardown complete (skipArchive): session=${b}`),
        q("info", "bridge_repl_v2_teardown"),
        i("tengu_bridge_repl_teardown", {
          v2: !0,
          archive_status: fromEnum(j),
          archive_ok: !1,
        }),
        Ln());
      return;
    }
    let r = D.teardown_archive_timeout_ms,
      o = Date.now(),
      a = Mn(),
      d;
    if (ze() > 0 && a === void 0) (await Cr(r - li), (d = Date.now() - o));
    let _ = a === void 0 ? Tt() : void 0,
      P = _?.token,
      O = await Ze(b, p, P, v, Math.max(1, r - (d ?? 0)), a, Ee),
      C = r - (Date.now() - o);
    if (O === 401 && _?.source === "current" && re && C >= li)
      try {
        (await Promise.race([re(P ?? ""), Z(C)]),
          (_ = Tt()),
          (P = _.token),
          (O = await Ze(b, p, P, v, Math.max(1, r - (Date.now() - o)), a, Ee)));
      } catch (j) {
        n(`[remote-bridge] Teardown 401 retry threw: ${l(j)}`, {
          level: "error",
        });
      }
    if (mr !== void 0 && d === void 0) await Cr();
    (k.close(), await k.flushGoodbye());
    let E = _i(O, se);
    (n(`[remote-bridge] Torn down (archive=${O})`),
      q("info", "bridge_repl_v2_teardown"),
      i("tengu_bridge_repl_teardown", {
        v2: !0,
        archive_status: fromEnum(E),
        archive_credential: fromEnumOpt(_?.source),
        archive_ok: typeof O === "number" && O < 400,
        archive_http_status:
          typeof O === "number" ? O : O === "untrusted_device" ? 403 : void 0,
        archive_timeout: O === "timeout",
        archive_no_token: O === "no_token",
        hold_preflush_ms: d,
      }),
      Ln());
  }
  (i("tengu_bridge_repl_started", {
    has_initial_messages: !!(me && me.length > 0),
    v2: !0,
    expires_in_s: K.expires_in,
    inProtectedNamespace: NL(),
    ...lbe(),
  }),
    logFeatureOk("bridge_connect"));
  function Ne(e) {
    if (!z) return !1;
    return (n(`[remote-bridge] Dropping ${e} after owner change`), !0);
  }
  let jt = {
    bridgeSessionId: b,
    titleWriter: t.titleWriter,
    noHistoryBackfill: Q || ft,
    getJoinedProjectThread: void 0,
    requestInjectedMcpReassert: lo,
    canAdoptInjectedMcp: oo,
    detachForHandoff: () => {
      (Ue.cancelAll(), Ur());
    },
    sessionGroupingId: Fr,
    outboundOnly: br ?? !1,
    environmentId: "",
    sessionIngressUrl: K.api_base_url,
    ...(Ae && { getWorkerBearerToken: () => (R ? null : pt) }),
    getLastSequenceNum: () => k.getLastSequenceNum(),
    settleUploadsBeforeHandoff: () =>
      ze() > 0 ? Cr(Lo).catch(() => {}) : Promise.resolve(),
    flush: () => (Mr(), k.flush()),
    writeMessages(e) {
      if (Ne("writeMessages")) return;
      let r = e.filter((d) => xme(d) && !fn.has(d.uuid) && !Sr.has(d.uuid));
      if (r.length === 0) return;
      if (!jn)
        for (let d of r) {
          let _ = crr(d);
          if (_ !== void 0 && qt?.(_, b)) {
            jn = !0;
            break;
          }
        }
      let o = r.some(Fe ? Qo : Q4t);
      if (o) Fe = !1;
      if (ve.enqueue(...r.map((d) => ({ seq: bt++, message: d })))) {
        if (o) tr = !0;
        n(`[remote-bridge] Queued ${r.length} message(s) during flush`);
        return;
      }
      for (let d of r) Sr.add(d.uuid);
      let a = Un(r);
      if (It(() => o) && be.size === 0) Oe("running");
      (n(`[remote-bridge] Sending ${r.length} message(s)`), k.writeBatch(a));
    },
    reportMetadata(e) {
      if (Ne("reportMetadata")) return;
      k.reportMetadata(e);
    },
    refreshGitBranch() {
      Qr?.();
    },
    writeSdkMessages(e) {
      if (Ne("writeSdkMessages")) return;
      let r = e.filter((a) => !a.uuid || !vt.has(a.uuid));
      if (r.length === 0) return;
      if (he.active) {
        let a = r.filter((_) => _.type !== "stream_event"),
          d = r.length - a.length;
        if (d > 0)
          n(`[remote-bridge] Dropped ${d} stream_event frame(s) during flush`);
        if (a.length > 0)
          (he.enqueue(...a.map((_) => ({ seq: bt++, frame: _ }))),
            n(`[remote-bridge] Queued ${a.length} SDK event(s) during flush`));
        return;
      }
      for (let a of r) if (a.uuid) vt.add(a.uuid);
      let o = r.map((a) => ({ ...a, session_id: b }));
      k.writeBatch(o);
    },
    sendControlRequest(e) {
      wAt(e.request_id, { automated: !ibe(e) });
      let r = e.request;
      if (r.subtype === "can_use_tool" || r.subtype === "request_user_dialog")
        (be.delete(e.request_id),
          be.set(e.request_id, { request: e }),
          _r.delete(e.request_id));
      if (r.subtype === "request_user_dialog" && (he.active || ue))
        return (
          _r.add(e.request_id),
          n(
            `[remote-bridge] Not forwarding request_user_dialog while writes are gated / transport recovering (local-only): ${e.request_id}`,
          ),
          !1
        );
      if (Ne("control_request")) return !1;
      let o = { ...e, session_id: b };
      if (r.subtype === "can_use_tool") {
        let a;
        if (H("tengu_bridge_requires_action_details", !1)) {
          let d = r.tool_name === qe || r.tool_name === Ut,
            _;
          if (r.tool_name === Es) {
            let C = Array.isArray(r.input?.questions) ? r.input.questions : [],
              E = C[0],
              j = E?.header || E?.question;
            _ = {
              label: "Question",
              body: j
                ? j + (C.length > 1 ? ` (+${C.length - 1} more)` : "")
                : "Tap to answer",
            };
          } else if (r.tool_name === Wh)
            _ = { label: "Plan", body: "Plan ready for review" };
          if (!_ && r.requires_user_interaction)
            _ = { label: r.display_name ?? r.tool_name, body: "" };
          let P =
              d && typeof r.input?.command === "string"
                ? qr(r.input.command)
                : void 0,
            O =
              d && typeof r.input?.description === "string"
                ? r.input.description
                : void 0;
          a = {
            tool_name: r.tool_name,
            display_tool_name: _?.label ?? r.display_name ?? r.tool_name,
            action_description:
              _?.body ?? qr(r.description || O || (P && truncate(P, 120)) || ""),
            raw_command: _ ? void 0 : P,
            tool_use_id: r.tool_use_id,
            request_id: _ ? "" : e.request_id,
            ...(_ && e.request_id && { suppressed_request_id: e.request_id }),
            input: r.input,
          };
        }
        if (a) be.set(e.request_id, { request: e, details: a });
        ((Fe = !1), Oe("requires_action", a));
      } else if (r.subtype === "request_user_dialog") {
        let a;
        if (H("tengu_bridge_requires_action_details", !1))
          a = odt(r.dialog_kind, r.payload, e.request_id, r.tool_use_id);
        if (a) be.set(e.request_id, { request: e, details: a });
        ((Fe = !1), Oe("requires_action", a));
      }
      return (tt(o, `control_request request_id=${e.request_id}`), !0);
    },
    sendControlResponse(e, r) {
      if (!r?.skipStateReport) Ct(e.response.request_id, !0);
      if (Ne("control_response")) return;
      let o = { ...e, session_id: b };
      if (!r?.skipStateReport && !Fe) Oe("running");
      tt(o, "control_response");
    },
    sendControlCancelRequest(e) {
      if (_r.delete(e)) {
        (be.delete(e),
          n(
            `[remote-bridge] Local-only retract of a declined dialog forward request_id=${e}`,
          ));
        return;
      }
      if ((Ct(e, !0), Ne("control_cancel_request"))) return;
      let r = { type: "control_cancel_request", request_id: e, session_id: b };
      if (!Fe) Oe("running");
      tt(r, `control_cancel_request request_id=${e}`);
    },
    sendResult(e) {
      if (((tr = !1), (Fe = !0), Ne("result"))) return;
      Oe("idle");
      let r = gCn(b, e);
      tt(
        r,
        `result ${r.subtype} is_error=${r.is_error} num_turns=${r.num_turns}${r.user_message_uuid ? ` user_message_uuid=${r.user_message_uuid}` : ""}`,
      );
    },
    stampReply({ assistantUuid: e, userMessageUuid: r }) {
      if ((nr.set(e, r), nr.size > fo)) {
        let o = nr.keys().next().value;
        if (o !== void 0) nr.delete(o);
      }
    },
    async subscribePR(e, r, o) {
      if (z) return { ok: !1, reason: "owner_changed" };
      let a = `${e}#${r}`,
        d = hr.get(a);
      if (o) hr.set(a, { agentId: o, repo: e, prNumber: r });
      let _ = await wgt("subscribe", {
        sessionId: b,
        repo: e,
        prNumber: r,
        baseUrl: p,
        getAccessToken: ie,
        getTrustedDeviceToken: getTrustedDeviceToken,
      });
      if (!_.ok && o)
        if (d) hr.set(a, d);
        else hr.delete(a);
      return _;
    },
    async unsubscribePR(e, r) {
      if (z) return { ok: !1, reason: "owner_changed" };
      let o = await wgt("unsubscribe", {
        sessionId: b,
        repo: e,
        prNumber: r,
        baseUrl: p,
        getAccessToken: ie,
        getTrustedDeviceToken: getTrustedDeviceToken,
      });
      if (o.ok) hr.delete(`${e}#${r}`);
      return o;
    },
    async recordCreatedPR(e, r) {
      if (R) return { ok: !1, skipped: "no_bridge" };
      if (z) return { ok: !1, skipped: "owner_changed" };
      return i4n({
        sessionUrl: Bee(cn, b),
        workerToken: pt,
        ...e,
        timeoutMs: r,
      });
    },
    async fetchInboxMessage(e) {
      let r = (o) => (logFeatureBad("bridge_inbox_fetch", o), { ok: !1, reason: o });
      if (R) return r("no_bridge");
      if (z) return r("owner_changed");
      return r("feature_disabled");
    },
    getPRWebhookTargets() {
      return [...hr.values()];
    },
    teardown: Co,
    neverArchive: Ve,
    async archive() {
      if (Ve) return;
      let e = Mn();
      await Ze(
        b,
        p,
        e === void 0 ? Tt().token : void 0,
        v,
        D.teardown_archive_timeout_ms,
        e,
        Ee,
      );
    },
    [Symbol.asyncDispose]() {
      return jt.teardown({ reason: "host_exit" });
    },
  };
  if (Ve && !de) Ir(b, Ee);
  let Ln = Et(jt);
  return jt;
}
async function vr(t, p, v) {
  let w = v.init_retry_max_attempts;
  for (let I = 1; I <= w; I++) {
    let S = await t();
    if (S !== null) return S;
    if (I < w) {
      let L = v.init_retry_base_delay_ms * 2 ** (I - 1),
        B = L * v.init_retry_jitter_fraction * (2 * Math.random() - 1),
        F = Math.min(L + B, v.init_retry_max_delay_ms);
      (n(
        `[remote-bridge] ${p} failed (attempt ${I}/${w}), retrying in ${Math.round(F)}ms`,
      ),
        await Z(F));
    }
  }
  return null;
}
async function Lt(t, p, v, w) {
  let I = !1,
    S = !1,
    L = await vr(
      async () => {
        if (I) S = !0;
        let B = w.getAccessToken(),
          F = !1,
          Q = await t(B, () => {
            F = !0;
          }),
          le = isCredentialsRejection(Q);
        if (
          (Q === null || le) &&
          F &&
          w.onAuth401 &&
          !I &&
          !w.recoveryAttemptedTokens.has(B)
        ) {
          w.recoveryAttemptedTokens.add(B);
          let ke = !1;
          try {
            ke = await w.onAuth401(B);
          } catch (Ge) {
            n(`[remote-bridge] ${p} 401 \u2014 OAuth refresh threw: ${l(Ge)}`, {
              level: "error",
            });
          }
          if (
            ((I = ke),
            n(
              `[remote-bridge] ${p} 401 \u2014 OAuth ${ke ? "refreshed; retrying with the fresh token" : "refresh unavailable"}`,
            ),
            q("info", "bridge_repl_v2_init_401_refresh", { refreshed: ke }),
            I && le)
          )
            return null;
        }
        return Q;
      },
      p,
      v,
    );
  if (L === null && I && !S)
    return (
      n(
        `[remote-bridge] ${p} refreshed on the final attempt; one extra try with the fresh token`,
      ),
      t(w.getAccessToken(), () => {})
    );
  return L;
}
function Vo(t) {
  if (t.reason === "untrusted_device") return !isProactiveEnrollmentDisabled();
  return t.reason === "session_stale_relogin";
}
function Le(t) {
  return Vo(t) ? "auth" : "terminal";
}
function at(t) {
  return t.reason === "request_rejected" && t.status === 403 && fse(t.source);
}
function st(t, p) {
  return at(p)
    ? `${t}_credentials_rejected_nonorigin`
    : `${t}_credentials_rejected`;
}
var zo = {
  nonorigin_cf: "recovered_403_nonorigin_cf",
  nonorigin_other: "recovered_403_nonorigin_other",
};
function ci(t) {
  switch (t?.rejectSource) {
    case "nonorigin_cf":
      return "transport_closed_403_nonorigin_cf";
    case "nonorigin_other":
      return "transport_closed_403_nonorigin_other";
    case "origin":
    case void 0:
      return "transport_closed_403";
  }
}
function A7(t) {
  switch (t.reason) {
    case "untrusted_device":
      return untrustedDeviceHint();
    case "session_stale_relogin":
      return "session expired for trusted-device check \u2014 run /login to re-authenticate";
    case "invalid_session_id":
      return "session id contains unsupported characters \u2014 check the --session-id value";
    case "request_rejected":
      if (at(t)) return `${rVt(t.source)} \u2014 run /remote-control to retry`;
      return `Remote Control server rejected the request (HTTP ${t.status}) \u2014 run /remote-control to retry`;
    case "malformed_response":
      return CNe;
  }
}
async function Ko(t, p, v, w, I, S) {
  let L = await getTrustedDeviceToken(),
    B = await fetchRemoteCredentials(t, p, v, w, L, I);
  if (isCredentialsFailure(B) && B.reason === "untrusted_device")
    B = (await withUntrustedDeviceRecovery(L, (F) => fetchRemoteCredentials(t, p, v, w, F, I), S)) ?? B;
  if (!B) return null;
  if (isCredentialsRejection(B)) return B;
  if (isCredentialsFailure(B)) {
    if (B.reason === "untrusted_device" && !isTrustedDeviceGateEnabled())
      return { terminal: !0, reason: "request_rejected", status: 403 };
    return B;
  }
  return getBridgeBaseUrlOverride() ? { ...B, api_base_url: p } : B;
}
function ui(t, p) {
  if (t === 403 || t === 404) return "superseded_unknown";
  if (t !== 4090) return;
  switch (p) {
    case "superseded_by_worker":
      return "superseded";
    case "session_not_active":
      return "session_archived";
    case "epoch_conflict":
    case void 0:
      return "superseded_unknown";
    case "epoch_stale":
    case "session_not_found":
    case "token_expired":
    case "auth_exhausted":
      return;
  }
}
function fi(t) {
  return t !== "session_archived";
}
function _i(t, p) {
  return t === "skipped_superseded"
    ? p === "session_archived"
      ? "skipped_archived"
      : "skipped_superseded"
    : t === "skipped_owner_changed"
      ? "skipped_owner_changed"
      : t === "no_token"
        ? "skipped_no_token"
        : t === "invalid"
          ? "invalid_id"
          : t === "untrusted_device"
            ? "server_403_untrusted"
            : t === "timeout" || t === "error"
              ? "network_error"
              : t >= 500
                ? "server_5xx"
                : t >= 400
                  ? "server_4xx"
                  : "ok";
}
async function Ze(t, p, v, w, I, S, L) {
  if (Ly(t))
    return (
      n(`[remote-bridge] Archive suppressed for teleported session ${t}`),
      Ir(t, L),
      200
    );
  if (S === "owner_changed")
    return (
      n(`[remote-bridge] Archive suppressed for owner-changed session ${t}`),
      q("info", "bridge_repl_archive_suppressed_owner_changed"),
      "skipped_owner_changed"
    );
  if (S !== void 0)
    return (
      n(`[remote-bridge] Archive suppressed for ${S} session ${t}`),
      q(
        "info",
        S === "superseded"
          ? "bridge_repl_archive_suppressed_superseded"
          : S === "session_archived"
            ? "bridge_repl_archive_suppressed_archived"
            : "bridge_repl_archive_suppressed_superseded_unknown",
      ),
      "skipped_superseded"
    );
  if (!v) return "no_token";
  let B = await getTrustedDeviceToken().catch(() => {
      return;
    }),
    F = await archiveCodeSession(p, v, t, I, {
      useV2: isCcrV2SessionCrudEnabled(),
      orgUUID: w,
      trustedDeviceToken: B,
    });
  if (Ht(F)) Ir(t, L);
  return F;
}
async function Yo(t, p, v, w, I, S, L) {
  if (!v) return { outcome: "ok" };
  let B = await getTrustedDeviceToken().catch(() => {
      return;
    }),
    F = await unarchiveCodeSession(p, v, t, I, {
      useV2: isCcrV2SessionCrudEnabled(),
      orgUUID: w,
      trustedDeviceToken: B,
    });
  if (F === "invalid")
    return (
      q("info", "bridge_repl_v2_unarchive_invalid_id"),
      { outcome: "gone", status: "invalid" }
    );
  if (F === "untrusted_device" || F === "session_stale_relogin") {
    if (F === "untrusted_device") {
      let le = await withUntrustedDeviceRecovery(
        B,
        (ke) =>
          unarchiveCodeSession(p, v, t, I, { useV2: isCcrV2SessionCrudEnabled(), orgUUID: w, trustedDeviceToken: ke }),
        L,
      );
      if (typeof le === "number" && (le < 300 || le === 409))
        return (q("info", "bridge_repl_v2_unarchive_ok"), { outcome: "ok" });
    }
    return (
      q("info", "bridge_repl_v2_unarchive_elevated_auth"),
      { outcome: "elevated_auth", reason: F }
    );
  }
  if (typeof F !== "number")
    return (q("info", "bridge_repl_v2_unarchive_failed"), null);
  let Q = F < 300 || F === 409;
  if (
    (q(
      "info",
      Q ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed",
    ),
    Q)
  )
    return { outcome: "ok" };
  if (F === 400 || F === 403 || F === 404)
    return { outcome: "gone", status: F };
  if (F === 401) S?.();
  return null;
}
function Xo(t, p) {
  if (p <= 0 || t.length <= p) return t;
  let v = t.length - p;
  for (let { fromIdx: w, toIdx: I } of QWt(t))
    if (v > w && v <= I) {
      v = w;
      break;
    }
  return t.slice(v);
}
function Qo(t) {
  if (t.type !== "user" || !Q4t(t) || hi(t)) return !1;
  let p = t.message.content;
  return typeof p === "string" || !p.some((v) => v.type === "tool_result");
}
function hi(t) {
  if (t.type !== "user" || !WT(t)) return !1;
  let p = t.message.content;
  return typeof p === "string"
    ? FRe.includes(p)
    : p.every((v) => v.type !== "text" || FRe.includes(v.text));
}
export { Xjn, ndt, Yjn, A7 };

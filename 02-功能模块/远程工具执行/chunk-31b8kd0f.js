// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { qxt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, z, pB, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Kn } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Ff, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ddt } from "../Bridge-RemoteControl/chunk-jpq2fv3g.js";
import {
  _Cn,
  yCn,
  Dve,
  aQe,
  SAt,
  bAt,
  $$e,
  U$e,
  lQe,
  B$e,
  EAt,
} from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { cs } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { M1 } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { bQ } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { ZD } from "../认证-OAuth登录/chunk-7rf7w8yf.js";
import { Hle } from "../../01-核心基础设施/共享小工具-未细化/chunk-sfq8xeqw.js";
import {
  BGn,
  xn,
  fmt,
  isRemoteToolForwardingSwitchOn,
  isSessionChannelDisabled,
  setInternalEventWriter,
  sealTranscriptAppendsForShutdown,
  setInternalEventReader,
  updateCCRTipFromAckedBatch,
  getValidatedCCRTip,
  readTranscriptTailForTip,
  gre,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getAttestationFilterPolicy } from "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import { isProjectsHumanOriginEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { YAn, JAn, ase } from "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import { Ts, jXn } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import { Fae } from "../../03-入口与运行时/Headless-SDK模式/chunk-e4xwwtsb.js";
import { pE, fSe, d9, h2n } from "./chunk-66axrkvh.js";
import { asn, VGe, KGe, sbe, Jjn, csn, pM, rdt } from "../Bridge-RemoteControl/chunk-znhfst8k.js";
import { VW } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { $Jt } from "../../01-核心基础设施/共享小工具-未细化/chunk-ezjdm9sg.js";
import { Qz } from "../插件系统/chunk-55xj4ev5.js";
import { sdt } from "../../03-入口与运行时/Headless-SDK模式/chunk-yb7jadvp.js";
import { Xi } from "../Teammates团队/chunk-z2t8b9yc.js";
import { getClientPlatform } from "../../01-核心基础设施/共享小工具-未细化/user-agent.js";
import { createWriteStream, fstatSync } from "fs";
import { PassThrough } from "stream";
import { URL as ie } from "url";
function I0t() {
  return H("tengu_ccr_subagent_skip_on_delta", !1);
}
function D() {
  return (
    a.CLAUDE_CODE_CCR_LAZY_SUBAGENT_HYDRATE ??
    H("tengu_ccr_subagent_lazy_hydrate", !1)
  );
}
function j1n() {
  return (
    a.CLAUDE_CODE_TRANSCRIPT_LOCAL_GC ?? H("tengu_transcript_local_gc", !1)
  );
}
var le = "VERIFIED_BY_GATE",
  ue = "refuse";
function W(e, { floor: t = le, unstamped: i = ue } = {}) {
  let s = _Cn(e.device_attestation_status);
  if (yCn(s, t)) return { verdict: "pass", status: s };
  if (s === "UNSPECIFIED" && i === "pass")
    return { verdict: "pass", status: s };
  return { verdict: "drop", status: s };
}
var ce = new Set([
  "remote_tools_announce",
  "register_device_hooks",
  "upload_device_hook_template",
  "apply_flag_settings",
]);
function j(e) {
  let t = e.type === "control_request" ? e.request : void 0;
  if (typeof t !== "object" || t === null) return;
  let i = t.subtype;
  if (typeof i !== "string" || !ce.has(i)) return;
  if (i === "apply_flag_settings") {
    let s = t.settings;
    return typeof s === "object" &&
      s !== null &&
      !Array.isArray(s) &&
      Object.hasOwn(s, Qz)
      ? "apply_flag_settings"
      : void 0;
  }
  return i;
}
function G(e) {
  let t = e.type === "control_response" ? e.response : void 0;
  return typeof t === "object" && t !== null ? B$e(t) : void 0;
}
function V(e, t, i = K) {
  let s = j(e);
  if (s !== void 0) return i[Y(s)];
  let d = G(e),
    o = d === void 0 ? void 0 : t(d);
  return o !== void 0 && i[Q(o)];
}
var K = { remoteTools: !0, hooks: !0, plugins: !0 };
function Y(e) {
  switch (e) {
    case "remote_tools_announce":
      return "remoteTools";
    case "register_device_hooks":
    case "upload_device_hook_template":
      return "hooks";
    case "apply_flag_settings":
      return "plugins";
  }
}
function Q(e) {
  return e === "served_call" ? "remoteTools" : "hooks";
}
function X(e, t, i = K) {
  let s = e.payload,
    d = j(s);
  if (d !== void 0) {
    if (!i[Y(d)]) return { kind: "pass" };
    let { verdict: y, status: w } = W(e);
    if (y === "pass") return { kind: "pass" };
    let C = d === "apply_flag_settings" ? pe(s) : void 0;
    return C !== void 0
      ? {
          kind: "strip_forwarded_plugins",
          requestId: B$e(s),
          status: w,
          remainder: C,
        }
      : { kind: "refuse_request", subtype: d, status: w };
  }
  let o = G(s),
    m = o === void 0 ? void 0 : t(o);
  if (o === void 0 || m === void 0 || !i[Q(m)]) return { kind: "pass" };
  let { verdict: _, status: v } = W(e);
  if (_ === "pass") {
    let y = b(b(s.response)?.response);
    if (y !== void 0 && fSe in y) delete y[fSe];
    return { kind: "pass" };
  }
  let E = m === "served_call" ? me(s) : void 0;
  return E === void 0
    ? { kind: "drop_answer", requestId: o, answers: m, status: v }
    : { kind: "admit_refusal", requestId: o, status: v, result: E };
}
function pe(e) {
  let t = b(b(e.request)?.settings);
  if (t === void 0) return;
  let { [Qz]: i, ...s } = t;
  return Object.keys(s).length > 0 ? s : void 0;
}
function J(e, t) {
  let i = b(e.request) ?? {};
  e.request = { ...i, settings: t };
}
function ee(e, t, i) {
  e.response = {
    subtype: "success",
    request_id: t,
    response: { result: i, [fSe]: !0 },
  };
}
function p(e) {
  return `reported refused \u2014 ${e} \u2014 by a sender this session could not verify; whether anything ran there is not confirmed. Check its effect before re-running it.`;
}
var fe = {
    no_approval:
      "reported refused \u2014 no person's approval matching this call was found \u2014 by a sender this session could not verify; whether anything ran there is not confirmed. Ask the user to approve it again if it is still wanted.",
    unbound: p("this session is not bound to that machine"),
    unsupported_protocol: p("the call's protocol version was not accepted"),
    invalid_request: p("the call was not acceptable as sent"),
    not_served: p("that machine does not serve this tool to the session"),
    no_session: p(
      "that machine could not tell which session the call came from",
    ),
    session_mismatch: p(
      "that machine is connected on behalf of a different session",
    ),
    too_many_in_flight: p(
      "that machine already has as many calls under way, or keeps state for as many cloud sessions, as it accepts",
    ),
    refused_field: p(
      "one of the call's input fields is not accepted on that machine",
    ),
    sandbox_unavailable: p(
      "that machine serves no tools while its sandbox is off or not fully confining",
    ),
    unknown_call: p("that machine has no record of the call asked about"),
    stale: p(
      "the call, or the answer to its permission question, reached that machine after its delivery window",
    ),
    queue_full: p("that machine was at one of its capacity limits"),
    rate_limited: p("that machine's call budget for this session was spent"),
    duplicate_call: p("that machine had already received a call with this id"),
    withdrawn: p(
      "the permission request the call was waiting on there ended unanswered",
    ),
    result_lost: p("that machine no longer holds the result of the call"),
    unrecognized:
      "reported refused, without a reason this session recognises, by a sender this session could not verify; whether anything ran there is not confirmed. Check its effect before re-running it.",
  },
  he = "unverified-sender";
function me(e) {
  let t = b(e.response),
    i = b(t?.response);
  if (t?.subtype !== "success" || i === void 0) return;
  let s;
  try {
    s = d9(i.result);
  } catch {
    return;
  }
  if (
    s.envelope.status !== "present" ||
    s.envelope.envelope.outcome !== "refused"
  )
    return;
  let d = s.envelope.envelope,
    o = fe[d.code];
  return h2n({
    envelope: {
      v: pE,
      outcome: "refused",
      ...(d.call_id !== void 0 && { call_id: d.call_id }),
      target: { name: he, working_dir: "" },
      code: d.code,
      message: o,
    },
    content: o,
  });
}
function b(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) ? e : void 0;
}
var lHe = new Set(["remote", "remote_desktop", "sdk-cli", ""]);
function W1n(e) {
  if (e.disabled) return { start: !1, reason: "disabled" };
  if (e.entrypoint !== void 0 && !lHe.has(e.entrypoint))
    return { start: !1, reason: "entrypoint" };
  return { start: !0, engines: { git: e.gitSwitch } };
}
var _e = lHe;
function P0t(e) {
  if (!e.sdkUrl || !e.remoteSessionId || e.environmentKind !== void 0)
    return { admitted: !1, reason: "not_managed_cloud_worker" };
  if (e.entrypoint !== void 0 && !_e.has(e.entrypoint))
    return { admitted: !1, reason: "entrypoint" };
  if (e.disabled) return { admitted: !1, reason: "disabled" };
  if (e.hermetic) return { admitted: !1, reason: "hermetic" };
  return { admitted: !0 };
}
function O0t(e) {
  if (!e.sdkUrl || !e.remoteSessionId || e.environmentKind !== void 0)
    return { admitted: !1, reason: "not_managed_cloud_worker" };
  if (e.entrypoint !== void 0 && !lHe.has(e.entrypoint))
    return { admitted: !1, reason: "entrypoint" };
  if (e.disabled) return { admitted: !1, reason: "disabled" };
  if (e.hermetic) return { admitted: !1, reason: "hermetic" };
  return { admitted: !0 };
}
async function te({
  getAuthHeaders: e,
  rereadMiss: t,
  onDiagnostic: i,
  delaysMs: s = $Jt,
}) {
  if (Object.keys(e()).length > 0) return !0;
  i?.(`no session auth headers yet, re-reading up to ${s.length} times`);
  let d = {};
  for (let [o, m] of s.entries()) {
    let _ = o + 1;
    if (
      (n(
        `[remote-io] no auth headers, re-reading in ${m}ms (attempt ${_}/${s.length})`,
        { level: "warn" },
      ),
      await Z(m),
      (d = t().diag),
      Object.keys(e()).length > 0)
    )
      return (
        i?.(`session auth headers present after ${_} re-read(s)`),
        q("info", "cli_worker_lifecycle_init_auth_retried", {
          attempts: _,
          ...d,
        }),
        !0
      );
  }
  return (
    n(`[remote-io] auth headers still missing after ${s.length} re-reads`, {
      level: "error",
    }),
    i?.(`session auth headers still missing after ${s.length} re-reads`),
    q("error", "cli_worker_lifecycle_init_auth_retry_exhausted", {
      attempts: s.length,
      ...d,
    }),
    !1
  );
}
import { URL as ye } from "url";
function re(e, t = {}, i = {}) {
  let s = bQ(new ye(e.href));
  return (
    (s.pathname = s.pathname.replace(/\/$/, "") + "/worker/events/stream"),
    new VGe(s, t, i)
  );
}
function be(e) {
  let i = e
    .split(
      `
`,
    )
    .filter((s) => {
      let d;
      try {
        d = z(cs(s));
      } catch {
        return !0;
      }
      let o = typeof d === "object" && d !== null ? d.type : void 0;
      if (typeof o === "string" && asn.has(o))
        return (
          q("warn", "cli_stdin_server_only_type_dropped", { payload_type: o }),
          n(
            `[remote-io] dropped a ${o} frame from the stdin lane (server-authored-only type; SSE is its only ingress)`,
            { level: "warn" },
          ),
          !1
        );
      return !0;
    });
  return i.length === 0
    ? void 0
    : i.join(`
`);
}
var Ee = {
  remote_tools_announce: "remote_tools_announce",
  register_device_hooks: "device_hooks_register",
  upload_device_hook_template: "device_hooks_register",
  apply_flag_settings: "ccr_cloud_plugins_forward",
};
class Uz extends Fae {
  isRemoteTransport() {
    return !0;
  }
  hostOwnsStdinOrigin = !1;
  persistsOutboundFrames = !0;
  url;
  transport;
  inputStream;
  isBridge = !1;
  isDebug = !1;
  teeStdout = !1;
  activityFd;
  ccrClient;
  idleTracker = rdt();
  keepAliveTimer = null;
  inboundLanesDroppedAfterClose = new Set();
  unsubscribeGrowthBookRefresh;
  attestationDropSenderWriter = (e) => {
    this.ccrClient.writeEvent(e).catch((t) => {
      n(`[remote-io] drop sender-notice write failed: ${l(t)}`, {
        level: "warn",
      });
    });
  };
  permanentCloseCode;
  constructor({
    streamUrl: e,
    initialPrompt: t,
    replayUserMessages: i,
    sessionState: s,
    storageV5: d,
    getAuthHeaders: o,
    rereadMissingAuthHeaders: m,
    sessionId: _,
    workerEpoch: v,
    environmentKind: E,
    isResume: y,
    earlyHydrateReads: w,
    adoptRefreshedAuth: C,
    reportParkAtInit: ae,
  }) {
    let T = new PassThrough({ encoding: "utf8" });
    super(T, i, s);
    ((this.inputStream = T), (this.url = bQ(new ie(e))));
    let A = o(),
      F = { "anthropic-client-platform": getClientPlatform(), ...A };
    if (Object.keys(A).length === 0)
      n(
        m
          ? "[remote-io] No session ingress token available yet, will re-read"
          : "[remote-io] No session ingress token available",
        { level: "error" },
      );
    let O = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
    if (O) F["x-environment-runner-version"] = O;
    let de = () => {
      let r = { ...o() },
        u = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
      if (u) r["x-environment-runner-version"] = u;
      return r;
    };
    ((this.transport = re(this.url, F, {
      sessionId: _,
      refreshHeaders: de,
      getAuthHeaders: o,
    })),
      (this.isBridge = E === "bridge"),
      (this.isDebug = pB()),
      (this.teeStdout = Ie(process.env.CLAUDE_CODE_TEE_SDK_STDOUT)));
    let L = process.env.CLAUDE_RUNNER_ACTIVITY_FD,
      k = L ? Number.parseInt(L, 10) : NaN;
    if (Number.isInteger(k) && k > 2)
      try {
        let r = fstatSync(k);
        if (!r.isFIFO() && !r.isSocket()) throw Error("not a pipe");
        let u = createWriteStream("", { fd: k, autoClose: !1 });
        (u.on("error", (c) => {
          (n(
            `[remote-io] activity fd ${k} write error (${l(c)}); falling back to stdout`,
          ),
            (this.activityFd = void 0));
        }),
          (this.activityFd = u));
      } catch (r) {
        n(
          `[remote-io] activity fd ${k} unavailable (${l(r)}); falling back to stdout`,
        );
      }
    (this.transport.setOnData((r) => {
      if ((this.writeInbound(r, "sse"), this.isBridge && this.isDebug))
        Kn(
          r.endsWith(`
`)
            ? r
            : r +
                `
`,
        );
    }),
      this.transport.setOnClose((r) => {
        if (r !== void 0)
          ((this.permanentCloseCode = r),
            process.stderr
              .write(`RemoteIO: transport closed permanently (code ${r})
`));
        this.inputStream.end();
      }));
    let R = this.isBridge
      ? void 0
      : (r) => {
          process.stderr.write(`SDKStartup: ${r}
`);
        };
    if (R) this.transport.setOnDiagnostic?.(R);
    let N = isRemoteToolForwardingSwitchOn();
    ((this.ccrClient = new pM(this.transport, this.url, {
      onDiagnostic: R,
      ...(N && {
        onDurableEventsDropped: (r, u) => {
          let c = se(r);
          if (c.length > 0) this.rejectUndeliveredRequests(c, u);
        },
        onDurableEventsUpload: (r, u) => {
          let c = se(r);
          if (c.length > 0) this.noteRequestsUpload(c, u);
        },
      }),
      streamEventFlushIntervalMs: H("tengu_ccr_stream_event_flush_ms", KGe),
      noSubscriberStreamEventFlushIntervalMs: ne(),
      advertiseHeartbeatProbeSupport: H("tengu_ccr_idle_heartbeat", !1),
      beatOnStaleReconnect: H("tengu_ccr_reconnect_beat", !1),
      idleTracker: this.idleTracker,
      beatOnReactivation: H("tengu_ccr_reactivation_beat", !1),
      skipRedundantHeartbeats: H("tengu_ccr_skip_redundant_heartbeat", !1),
      uploadTrim: () => H("tengu_ccr_upload_trim", {}),
      adoptRefreshedAuth: C,
      gzipRequestBodyFetch: fmt("ccr_worker", d),
      getAuthHeaders: o,
      reportParkAtInit: ae,
    })),
      (this.tracksRequestDelivery = N),
      this.transport.setOnEventVetoed((r) => {
        (this.ccrClient.reportDelivery(r.event_id, "received"),
          this.ccrClient.reportDelivery(r.event_id, "processed"));
      }),
      (this.unsubscribeGrowthBookRefresh = Ff(() =>
        this.ccrClient.setNoSubscriberStreamEventFlushIntervalMs(ne()),
      )));
    let S =
        m && Object.keys(A).length === 0
          ? te({ getAuthHeaders: o, rereadMiss: m, onDiagnostic: R })
          : null,
      P = S
        ? S.then(() => this.ccrClient.initialize(v))
        : this.ccrClient.initialize(v);
    ((this.restoredWorkerState = P.catch(() => null)),
      P.then(
        () => R?.("worker registered"),
        (r) => {
          let u = r instanceof sbe ? r.reason : l(r);
          q("error", "cli_worker_lifecycle_init_failed", {
            reason: r instanceof sbe ? r.reason : "unknown",
          });
          let c = `CCRClient initialization failed: ${l(r)}`;
          if (Jjn(r)) n(c, { level: "error" });
          else logError(Error(c));
          (R?.(`worker registration failed (${u}), exiting`), xn(1, "other"));
        },
      ),
      this.ccrClient.registerShutdownCleanup(),
      setInternalEventWriter((r, u, c) => this.ccrClient.writeInternalEvent(r, u, c)));
    let U = y && D();
    if (
      (setInternalEventReader(
        (r) => this.ccrClient.readInternalEvents(r),
        () => this.ccrClient.readSubagentInternalEvents(),
        y ? (r, u) => this.ccrClient.readAgentInternalEvents(r, u) : void 0,
        U,
      ),
      (this.ccrClient.onInternalBatchAcked = (r) => updateCCRTipFromAckedBatch(r, d)),
      (this.ccrClient.onInternalEventLaneClosed = sealTranscriptAppendsForShutdown),
      y)
    ) {
      let r = performance.now(),
        u = this.ccrClient;
      ((this.hydratePrefetch = (async () => {
        if (S) (await S, (r = performance.now()));
        return (
          (S ? void 0 : await w) ??
          (await oe(
            (c) => u.readInternalEvents(c),
            () => u.readSubagentInternalEvents(),
            U,
            d,
          ))
        );
      })().catch((c) => (logError(c), null))),
        this.hydratePrefetch.then(() => {
          (Ts("resume_hydrate_fetch_ms", performance.now() - r, r), jXn());
        }));
    }
    let B = {
      started: "processing",
      completed: "processed",
      cancelled: "processed",
    };
    if (
      ((this.onCommandLifecycle = (r, u) => {
        if (!Object.hasOwn(B, u)) return;
        let c = B[u];
        if (c === void 0) return;
        this.ccrClient.reportDelivery(r, c);
      }),
      this.isBridge)
    )
      (Dve(getAttestationFilterPolicy),
        SAt(this.attestationDropSenderWriter),
        aQe((r) => {
          if (
            (process.stderr.write(
              $$e +
                U$e(r) +
                `
`,
            ),
            r.payloadType === "control_request" && r.requestId)
          )
            this.ccrClient
              .writeEvent({
                type: "control_response",
                response: {
                  subtype: "error",
                  request_id: r.requestId,
                  error: lQe(r),
                },
              })
              .catch((u) => {
                n(`[remote-io] refusal write failed: ${l(u)}`, {
                  level: "warn",
                });
              });
        }),
        this.transport.setEventFilter((r) => {
          let u = EAt(r);
          if (u)
            (this.ccrClient.reportDelivery(r.event_id, "received"),
              this.ccrClient.reportDelivery(r.event_id, "processed"));
          return u;
        }));
    else a.CLAUDE_CODE_ENVIRONMENT_KIND;
    let x = (r) => {
      if (this.teeStdout && !this.isBridge)
        try {
          this.teeActivity(
            gre({
              type: "system",
              subtype: "session_state_changed",
              state: r,
              waiting_on_user: this.sessionState.waitingOnUser,
            }) +
              `
`,
          );
        } catch {}
    };
    if (
      ((this.sessionState.onStateChanged = (r, u) => {
        (this.ccrClient.reportState(r, u), x(r));
      }),
      (this.sessionState.onWaitingOnUserChanged = () => {
        x(this.sessionState.getState());
      }),
      (this.sessionState.onTurnStarting = (r, u) => {
        if (this.teeStdout && !this.isBridge)
          try {
            this.teeActivity(
              gre({
                type: "system",
                subtype: "turn_starting",
                mode: r,
                ...(r === "task-notification" && { task_id: u ?? null }),
              }) +
                `
`,
            );
          } catch {}
      }),
      YAn((r) => this.sessionState.setMainLoopRefcount(r)),
      this.sessionState.setMainLoopRefcount(ase()),
      JAn((r) => this.sessionState.dropNestedBlockedChain(r)),
      (this.sessionState.onMetadataChanged = (r) => {
        this.ccrClient.reportMetadata(r);
      }),
      (this.sessionState.onInternalMetadataChanged = (r) => {
        this.ccrClient.reportInternalMetadata(r);
      }),
      BGn((r) => this.sessionState.notifyMetadataChanged(r)),
      S)
    )
      S.then(
        () => this.transport.connect(),
        () => {},
      );
    else this.transport.connect();
    let M = Hle().session_keepalive_interval_v2_ms;
    if (this.isBridge && M > 0)
      ((this.keepAliveTimer = setInterval(() => {
        (n("[remote-io] keep_alive sent"),
          this.write({ type: "keep_alive" }).catch((r) => {
            n(`[remote-io] keep_alive write failed: ${l(r)}`);
          }));
      }, M)),
        this.keepAliveTimer.unref?.());
    if ((Et(async () => this.close()), t))
      (async () => {
        for await (let r of t) {
          let u = be(String(r).replace(/\n$/, ""));
          if (u !== void 0)
            this.writeInbound(
              u +
                `
`,
              "stdin",
            );
        }
      })();
  }
  dropsUnverifiedSessionChannelFrame(e) {
    let t = this.guardedFamilies();
    if (!t.remoteTools && !t.hooks && !t.plugins) return !1;
    if (!V(e.payload, (s) => this.liveDeviceRequestKind(s), t)) return !1;
    try {
      let s = X(e, (d) => this.liveDeviceRequestKind(d), t);
      return s.kind === "pass" ? !1 : this.applySessionChannelVerdict(e, s);
    } catch (s) {
      return (
        n(
          `[remote-io] a guarded session-channel frame could not be judged or handled; dropped: ${l(s)}`,
          { level: "warn" },
        ),
        !0
      );
    }
  }
  guardedFamilies() {
    return {
      remoteTools: isRemoteToolForwardingSwitchOn() && !isSessionChannelDisabled(),
      hooks: P0t({
        sdkUrl: !0,
        remoteSessionId: a.CLAUDE_CODE_REMOTE_SESSION_ID,
        environmentKind: void 0,
        entrypoint: a.CLAUDE_CODE_ENTRYPOINT,
        disabled: a.CLAUDE_CODE_DISABLE_HOOK_FORWARDING,
        hermetic: VW(),
      }).admitted,
      plugins: O0t({
        sdkUrl: !0,
        remoteSessionId: a.CLAUDE_CODE_REMOTE_SESSION_ID,
        environmentKind: void 0,
        entrypoint: a.CLAUDE_CODE_ENTRYPOINT,
        disabled: a.CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING,
        hermetic: VW(),
      }).admitted,
    };
  }
  applySessionChannelVerdict(e, t) {
    let i = t.status.toLowerCase();
    switch (t.kind) {
      case "refuse_request":
        return (
          logFeatureBad(Ee[t.subtype], `unverified_sender_${i}`),
          n(
            `[remote-io] dropped a below-floor ${t.subtype} (attestation ${i}) unanswered`,
          ),
          !0
        );
      case "drop_answer":
        return (
          logFeatureBad(
            t.answers === "hook" ? "device_hooks_serve" : "remote_tool_forward",
            `unverified_answer_dropped_${i}`,
          ),
          n(
            `[remote-io] dropped a below-floor reply to ${t.answers === "hook" ? "forwarded-hook" : "served-call"} request ${t.requestId} (attestation ${i}); the request keeps waiting for the machine's own answer`,
          ),
          !0
        );
      case "strip_forwarded_plugins":
        return (
          J(e.payload, t.remainder),
          logFeatureSad("ccr_cloud_plugins_forward", `unverified_patch_stripped_${i}`),
          n(
            `[remote-io] stripped below-floor forwarded plugin choices from an apply_flag_settings (attestation ${i}); its other keys go on`,
          ),
          !1
        );
      case "admit_refusal":
        return (
          ee(e.payload, t.requestId, t.result),
          logFeatureSad("remote_tool_forward", `unverified_refusal_admitted_${i}`),
          n(
            `[remote-io] admitted a below-floor refusal of served-call request ${t.requestId} (attestation ${i}) rebuilt and marked unverified: the machine is asked what became of the call`,
          ),
          !1
        );
    }
  }
  flushInternalEvents() {
    return this.ccrClient.flushInternalEvents();
  }
  withdrawQueuedRequest(e) {
    return this.ccrClient.withdrawQueuedControlRequest(e) > 0;
  }
  async flushInternalEventsConfirmed() {
    let e = this.ccrClient.droppedInternalBatches;
    return (
      await this.ccrClient.flushInternalEvents(),
      this.ccrClient.droppedInternalBatches === e
    );
  }
  flushDeliveryAcks() {
    return this.ccrClient.flushDeliveryAcks();
  }
  rereadWorkerState() {
    return this.ccrClient.readWorkerState();
  }
  readProjectsBinding() {
    return this.ccrClient.readProjectsBinding();
  }
  async flushClientEvents() {
    let e = this.ccrClient.droppedDurableBatches;
    return (
      await this.ccrClient.flush(),
      this.ccrClient.droppedDurableBatches === e
    );
  }
  async flushSessionState() {
    let e = this.ccrClient.droppedWorkerStatePatches;
    return (
      (await this.ccrClient.flushWorkerState()) &&
      this.ccrClient.droppedWorkerStatePatches === e
    );
  }
  get internalEventsPending() {
    return this.ccrClient.internalEventsPending;
  }
  teeActivity(e) {
    if (this.activityFd !== void 0) {
      this.activityFd.write(e);
      return;
    }
    Kn(e);
  }
  writeInbound(e, t) {
    if (this.inputStream.destroyed || this.inputStream.writableEnded) {
      if (!this.inboundLanesDroppedAfterClose.has(t))
        (this.inboundLanesDroppedAfterClose.add(t),
          q("info", "cli_remote_io_inbound_dropped_after_close", { lane: t }));
      return;
    }
    this.inputStream.write(e);
  }
  writeActivityLine(e) {
    this.teeActivity(e);
  }
  recordUserDrivenInbound(e) {
    switch ((super.recordUserDrivenInbound(e), e.type)) {
      case "user":
        if (ddt(e, "remote-worker", isProjectsHumanOriginEnabled())) this.idleTracker.noteActivity();
        return;
      case "control_response":
        if (e.response.subtype === "success") this.idleTracker.noteActivity();
        return;
      case "control_request":
        if (sdt(e)) this.idleTracker.noteActivity();
        return;
      case "bash_command":
        this.idleTracker.noteActivity();
        return;
      default:
        return;
    }
  }
  async write(e) {
    if (e.type === "transcript_mirror") return;
    if ((this.trackWrite(e), this.teeStdout && !this.isBridge)) {
      let t = ke(e);
      if (t !== void 0)
        try {
          this.teeActivity(
            gre(t) +
              `
`,
          );
        } catch {}
    }
    if ((await this.ccrClient.writeEvent(e), this.isBridge)) {
      if (e.type === "control_request" || this.isDebug)
        Kn(
          gre(e) +
            `
`,
        );
    }
  }
  trackFirstFrameUpload(e) {
    return this.ccrClient.trackFirstFrameUpload(e);
  }
  close() {
    if (
      (YAn(null),
      JAn(null),
      bAt(this.attestationDropSenderWriter),
      this.keepAliveTimer)
    )
      (clearInterval(this.keepAliveTimer), (this.keepAliveTimer = null));
    (this.unsubscribeGrowthBookRefresh(),
      this.transport.close(),
      this.inputStream.end());
  }
}
function ne() {
  return H("tengu_ccr_no_subscriber_flush_ms", 0);
}
function ke(e) {
  let t = e,
    i = t.subtype;
  if (e.type === "result" || (e.type === "system" && i === "init"))
    return e.type === "result"
      ? {
          ...e,
          result: void 0,
          permission_denials: void 0,
          structured_output: void 0,
          deferred_tool_use: void 0,
          errors: void 0,
          subagent_stats: void 0,
        }
      : e;
  if (e.type === "system" && i === "task_started")
    return {
      type: "system",
      subtype: i,
      task_id: t.task_id,
      task_type: t.task_type,
      owned_by_subagent: t.owned_by_subagent,
    };
  if (e.type === "system" && i === "task_updated") {
    let s = t.patch;
    return {
      type: "system",
      subtype: i,
      task_id: t.task_id,
      patch: { status: s?.status, is_backgrounded: s?.is_backgrounded },
    };
  }
  if (e.type === "system" && i === "task_notification")
    return { type: "system", subtype: i, task_id: t.task_id, status: t.status };
  if (e.type === "system" && i === "background_tasks_changed") {
    let s = t.tasks;
    return {
      type: "system",
      subtype: i,
      tasks: Array.isArray(s) ? s.map((d) => ({ task_id: d?.task_id })) : [],
    };
  }
  if (e.type === "system" && i === "hook_response")
    return {
      type: "system",
      subtype: i,
      hook_event: t.hook_event,
      outcome: t.outcome,
    };
  if (e.type === "user") return { type: e.type, subtype: i, ...I(t) };
  if (e.type === "assistant") {
    let s = t.message?.content;
    if (Array.isArray(s)) {
      let d = s.find(
        (o) =>
          o && typeof o === "object" && o.type === "tool_use" && o.name === Xi,
      );
      if (d) {
        let o = d.input;
        return {
          type: "assistant",
          subtype: i,
          ...I(t),
          message: {
            content: [
              {
                type: "tool_use",
                name: Xi,
                input: { delaySeconds: o?.delaySeconds },
              },
            ],
          },
        };
      }
    }
    return { type: e.type, subtype: i, ...I(t) };
  }
  return;
}
function I(e) {
  return e.parent_tool_use_id != null ? { from_subagent: !0 } : {};
}
function se(e) {
  return e.flatMap((t) =>
    t.payload.type === "control_request" &&
    typeof t.payload.request_id === "string"
      ? [t.payload.request_id]
      : [],
  );
}
function FJt(e) {
  for (let t of e) {
    if (t === "--") return !1;
    if (t === "--resume" || t === "-r" || t.startsWith("--resume=")) return !0;
  }
  return !1;
}
async function oe(e, t, i, s) {
  let d = I0t(),
    o = qxt(),
    m = i && o ? await readTranscriptTailForTip(o, s) : void 0,
    _ = o ? await getValidatedCCRTip(o, m, s) : void 0,
    [v, E] = await Promise.all([
      e(_?.eventId),
      (i ? m === null || _?.eventId !== void 0 : d) ? void 0 : t(),
    ]);
  return [v, E, _];
}
function zmr(e, t) {
  return (async () => {
    if (Object.keys(ZD()).length === 0) return;
    let i = !1,
      s = {
        ...csn(bQ(new ie(e)), ZD),
        onConflict: () => {
          i = !0;
        },
      };
    M1({ early_hydrate_prefetch: 1 });
    let d = await oe(
      (o) => pM.readInternalEventsFrom(s, o),
      () => pM.readSubagentInternalEventsFrom(s),
      D(),
      t,
    );
    return i ? void 0 : d;
  })().catch((i) => {
    logError(i);
    return;
  });
}
export { I0t, j1n, lHe, W1n, P0t, O0t, Uz, FJt, zmr };

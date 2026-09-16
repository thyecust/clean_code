// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Z, kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Et, dv, b, Tc, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { As } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { Gi, ZD } from "../认证-OAuth登录/chunk-7rf7w8yf.js";
import { Ts } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import { GGn, Dzn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { t6n } from "../../01-核心基础设施/共享小工具-未细化/chunk-thdf1760.js";
import { $nr, Unr, ase } from "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import { XGe } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb9matb3.js";
import { idt, bF } from "../../01-核心基础设施/共享小工具-未细化/chunk-vthq2yn2.js";
import { GY } from "./chunk-1yq098a7.js";
import { Fa } from "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import { dQe, fse } from "./chunk-mxsfy35q.js";
import { FR } from "./chunk-4zd60pbm.js";
import { pS } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { s, O, se, v, c, it, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { va, Um } from "../../01-核心基础设施/共享小工具-未细化/chunk-qdhvxsk2.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
var Ee = 1000,
  ke = 30000,
  ee = 45000,
  W = 30000,
  Te = new Set([401, 403, 404]),
  we = /\btext\/event-stream\b/i,
  H = 10,
  Re = 500,
  Me = 8000;
function Ae() {
  return !0;
}
var asn = new Set(["workflow_launch", "queued_notification", "session_notice"]),
  Ce = m(() => c({ event_type: s() })),
  Ie = "heartbeat_probe";
class VGe {
  url;
  state = "idle";
  onData;
  onCloseCallback;
  onEventCallback;
  eventFilter;
  onEventVetoed;
  onHeartbeatProbe;
  onReconnected;
  onDiagnostic;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  abortController = null;
  lastSequenceNum = 0;
  seenSequenceNums = new Set();
  reconnectAttempts = 0;
  hasEverConnected = !1;
  reconnectStartTime = null;
  reconnectTimer = null;
  connectErrorsSeen = new Set();
  livenessTimer = null;
  lastLivenessEvidenceAtMs = 0;
  nonOriginPolicy;
  nonOriginStreak = null;
  postUrl;
  constructor(
    e,
    t = {},
    {
      sessionId: r,
      refreshHeaders: o,
      initialSequenceNum: d,
      getAuthHeaders: p,
    } = {},
  ) {
    this.url = e;
    if (
      ((this.headers = t),
      (this.sessionId = r),
      (this.refreshHeaders = o),
      (this.getAuthHeaders = p ?? ZD),
      (this.postUrl = Pe(e)),
      d !== void 0 && d > 0)
    )
      this.lastSequenceNum = d;
    (n(`SSETransport: SSE URL = ${e.href}`),
      n(`SSETransport: POST URL = ${this.postUrl}`),
      q("info", "cli_sse_transport_initialized"));
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      (n(`SSETransport: Cannot connect, current state is ${this.state}`, {
        level: "error",
      }),
        q("error", "cli_sse_connect_failed"));
      return;
    }
    this.state = "reconnecting";
    let e = Date.now(),
      t = new URL(this.url.href);
    if (this.lastSequenceNum > 0)
      t.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    let r = this.getAuthHeaders(),
      o = {
        ...this.headers,
        ...r,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": Um(),
        "User-Agent": va(),
      };
    if ((te(o, r), this.lastSequenceNum > 0))
      o["Last-Event-ID"] = String(this.lastSequenceNum);
    (n(`SSETransport: Opening ${t.href}`),
      q("info", "cli_sse_connect_opening"));
    let d = new AbortController();
    this.abortController = d;
    try {
      let p = await fetch(t.href, {
        headers: o,
        signal: d.signal,
        ...As({ url: t.href }),
      });
      if (!p.ok) {
        let k = p.status === 403 ? dQe((B) => p.headers.get(B)) : void 0;
        if ((await bF(p, { timeoutMs: idt }), d.signal.aborted)) return;
        let M = Date.now(),
          w = this.advanceNonOriginStreak(k, M),
          T =
            w !== null &&
            this.nonOriginPolicy !== void 0 &&
            M - w.startedAtMs < this.nonOriginPolicy.windowMs,
          C = Te.has(p.status) && !T;
        if (
          (n(
            `SSETransport: HTTP ${p.status}${C ? " (permanent)" : ""}${k ? ` source=${k}` : ""}${T ? ` (not origin \u2014 retrying; attempt ${w?.attempts})` : ""}`,
            { level: "error" },
          ),
          q("error", "cli_sse_connect_http_error", {
            status: p.status,
            ...(k !== void 0 && { source: k }),
            ...(w !== null && { retried: T }),
          }),
          this.connectErrorsSeen.add(`http_${p.status}`),
          this.diagConnectFailure(
            `HTTP ${p.status}${C ? " (permanent)" : ""}`,
            e,
          ),
          C)
        ) {
          ((this.nonOriginStreak = null),
            (this.state = "closed"),
            this.onCloseCallback?.(
              p.status,
              k === void 0
                ? void 0
                : w === null
                  ? { rejectSource: k }
                  : {
                      rejectSource: w.source,
                      streak: {
                        source: w.source,
                        attempts: w.attempts,
                        streakMs: M - w.startedAtMs,
                      },
                    },
            ));
          return;
        }
        this.handleConnectionError();
        return;
      }
      if (!p.body) {
        (n("SSETransport: No response body"),
          this.connectErrorsSeen.add("no_response_body"),
          this.diagConnectFailure("no response body", e),
          this.handleConnectionError());
        return;
      }
      let E = Date.now() - e;
      if (
        (n("SSETransport: Connected"),
        q("info", "cli_sse_connect_connected", { duration_ms: E }),
        this.reconnectAttempts === 0)
      )
        Ts("sse_connect_ms", E, e - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let k = this.reconnectStartTime
          ? Math.round((Date.now() - this.reconnectStartTime) / 1000)
          : 0;
        this.onDiagnostic?.(
          `SSE reconnected after ${this.reconnectAttempts} attempt(s), ${k}s downtime` +
            (this.connectErrorsSeen.size > 0
              ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
              : ""),
        );
      } else this.onDiagnostic?.(`SSE connected in ${E}ms`);
      this.connectErrorsSeen.clear();
      let _ = this.hasEverConnected;
      ((this.hasEverConnected = !0),
        (this.state = "connected"),
        (this.reconnectAttempts = 0),
        (this.reconnectStartTime = null),
        this.resetLivenessTimer());
      let R = we.test(p.headers.get("content-type") ?? "");
      if (_)
        try {
          this.onReconnected?.();
        } catch (k) {
          (n(`SSETransport: onReconnected handler threw: ${l(k)}`, {
            level: "error",
          }),
            q("error", "cli_sse_reconnected_handler_threw"));
        }
      await this.readStream(p.body, R);
    } catch (p) {
      if (this.abortController?.signal.aborted) return;
      (n(`SSETransport: Connection error: ${l(p)}`, { level: "error" }),
        q("error", "cli_sse_connect_error"),
        this.connectErrorsSeen.add("fetch_failed"),
        this.diagConnectFailure(l(p), e),
        this.handleConnectionError());
    }
  }
  advanceNonOriginStreak(e, t) {
    let r = this.nonOriginPolicy;
    if (r === void 0 || e === void 0) return null;
    if (!fse(e)) return ((this.nonOriginStreak = null), null);
    let o = this.nonOriginStreak;
    if (o === null || t - o.lastAtMs > r.maxGapMs)
      ((o = { source: e, startedAtMs: t, lastAtMs: t, attempts: 0 }),
        (this.nonOriginStreak = o));
    return (o.attempts++, (o.lastAtMs = t), o);
  }
  settleNonOriginStreakRecovered() {
    let e = this.nonOriginStreak;
    if (e === null) return;
    this.nonOriginStreak = null;
    let t = {
      source: e.source,
      attempts: e.attempts,
      streakMs: Date.now() - e.startedAtMs,
    };
    q("info", "cli_sse_nonorigin_403_recovered", {
      source: t.source,
      attempts: t.attempts,
      streak_ms: t.streakMs,
    });
    try {
      this.nonOriginPolicy?.onRecovered?.(t);
    } catch (r) {
      n(`SSETransport: onRecovered handler threw: ${l(r)}`, { level: "error" });
    }
  }
  diagConnectFailure(e, t) {
    if (!this.onDiagnostic) return;
    let r = this.reconnectAttempts + 1;
    if (r > 3 && r % 10 !== 0) return;
    let o = Date.now() - t,
      d = this.reconnectStartTime
        ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting`
        : "",
      p =
        this.connectErrorsSeen.size > 1
          ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
          : "";
    this.onDiagnostic(
      `SSE connect failed (${e}) attempt=${r} took=${o}ms${d}${p}`,
    );
  }
  async readStream(e, t) {
    let r = e.getReader(),
      o = new XGe();
    try {
      while (!0) {
        let { done: d, value: p } = await r.read();
        if (d) break;
        for (let E of o.push(p)) {
          if ((this.resetLivenessTimer(), this.nonOriginStreak !== null && t))
            this.settleNonOriginStreakRecovered();
          if (E.id && E.event !== "ephemeral_event") {
            let _ = parseInt(E.id, 10);
            if (!isNaN(_)) {
              if (this.seenSequenceNums.has(_))
                (n(
                  `SSETransport: DUPLICATE frame seq=${_} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`,
                  { level: "warn" },
                ),
                  q("warn", "cli_sse_duplicate_sequence"));
              else if (
                (this.seenSequenceNums.add(_),
                this.seenSequenceNums.size > 1000)
              ) {
                let R = this.lastSequenceNum - 200;
                for (let k of this.seenSequenceNums)
                  if (k < R) this.seenSequenceNums.delete(k);
              }
              if (_ > this.lastSequenceNum) this.lastSequenceNum = _;
            }
          }
          if (E.event && E.data) this.handleSSEFrame(E.event, E.data);
          else if (E.data)
            (n(
              "SSETransport: Frame has data: but no event: field \u2014 dropped",
              { level: "warn" },
            ),
              q("warn", "cli_sse_frame_missing_event_field"));
        }
      }
    } catch (d) {
      if (this.abortController?.signal.aborted) return;
      (n(`SSETransport: Stream read error: ${l(d)}`, { level: "error" }),
        q("error", "cli_sse_stream_read_error"));
    } finally {
      r.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed") {
      if (
        (n("SSETransport: Stream ended, reconnecting"),
        this.state === "connected")
      )
        (this.connectErrorsSeen.add("stream_ended"),
          this.onDiagnostic?.("SSE stream ended by server, reconnecting"));
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, t) {
    if (e === "ephemeral_event") {
      this.handleEphemeralFrame(t);
      return;
    }
    if (e !== "client_event") {
      (n(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, {
        level: "warn",
      }),
        q("warn", "cli_sse_unexpected_event_type", { event_type: e }));
      return;
    }
    let r;
    try {
      r = z(t);
    } catch (d) {
      n(`SSETransport: Failed to parse client_event data: ${l(d)}`, {
        level: "error",
      });
      return;
    }
    let o = r.payload;
    if (o && typeof o === "object" && "type" in o) {
      let d = this.sessionId ? ` session=${this.sessionId}` : "",
        p = r.device_attestation_status
          ? ` attestation=${r.device_attestation_status}`
          : "";
      if (
        (n(
          `SSETransport: Event seq=${r.sequence_num} event_id=${r.event_id} event_type=${r.event_type} payload_type=${String(o.type)}${p}${d}`,
        ),
        q("info", "cli_sse_message_received"),
        this.eventFilter?.(r))
      )
        q("warn", "cli_sse_event_filtered");
      else if (
        typeof o.type === "string" &&
        asn.has(o.type) &&
        r.event_type !== o.type
      )
        (q("warn", "cli_sse_server_only_event_type_mismatch", {
          event_type: r.event_type,
          payload_type: o.type,
        }),
          this.onEventVetoed?.(r));
      else if (o.type === "control_request" && r.source === "worker")
        q("warn", "cli_sse_worker_control_request_dropped");
      else
        this.onData?.(
          b(o) +
            `
`,
        );
    } else
      n(
        `SSETransport: Ignoring client_event with no type in payload: event_id=${r.event_id}`,
      );
    this.onEventCallback?.(r);
  }
  handleEphemeralFrame(e) {
    let t;
    try {
      t = z(e);
    } catch (o) {
      n(`SSETransport: Failed to parse ephemeral_event data: ${l(o)}`, {
        level: "error",
      });
      return;
    }
    let r = Ce().safeParse(t);
    if (!r.success || r.data.event_type !== Ie) {
      q("warn", "cli_sse_unexpected_ephemeral_type", {
        event_type: r.success ? r.data.event_type : "unparseable",
      });
      return;
    }
    q("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.();
    } catch (o) {
      (n(`SSETransport: onHeartbeatProbe handler threw: ${l(o)}`, {
        level: "error",
      }),
        q("error", "cli_sse_heartbeat_probe_handler_threw"));
    }
  }
  handleConnectionError() {
    if (
      (this.clearLivenessTimer(),
      this.state === "closing" || this.state === "closed")
    )
      return;
    (this.abortController?.abort(), (this.abortController = null));
    let e = Date.now();
    if (!this.reconnectStartTime) this.reconnectStartTime = e;
    let t = e - this.reconnectStartTime;
    if (this.reconnectTimer)
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    if (this.refreshHeaders) {
      let d = this.refreshHeaders();
      (Object.assign(this.headers, d),
        te(this.headers, d),
        n("SSETransport: Refreshed headers for reconnect"));
    }
    ((this.state = "reconnecting"), this.reconnectAttempts++);
    let r = Math.min(Ee * Math.pow(2, this.reconnectAttempts - 1), ke),
      o = Math.max(0, r + r * 0.25 * (2 * Math.random() - 1));
    (n(
      `SSETransport: Reconnecting in ${Math.round(o)}ms (attempt ${this.reconnectAttempts}, ${Math.round(t / 1000)}s elapsed)`,
    ),
      q("error", "cli_sse_reconnect_attempt", {
        reconnectAttempts: this.reconnectAttempts,
      }),
      (this.reconnectTimer = setTimeout(() => {
        ((this.reconnectTimer = null), this.connect());
      }, o)));
  }
  onLivenessTimeout = () => {
    ((this.livenessTimer = null),
      n("SSETransport: Liveness timeout, reconnecting", { level: "error" }),
      q("error", "cli_sse_liveness_timeout"),
      this.connectErrorsSeen.add("liveness_timeout"),
      this.onDiagnostic?.(
        `SSE liveness timeout \u2014 no frame in ${ee / 1000}s, reconnecting`,
      ),
      this.abortController?.abort(),
      this.handleConnectionError());
  };
  resetLivenessTimer() {
    ((this.lastLivenessEvidenceAtMs = Date.now()),
      this.clearLivenessTimer(),
      (this.livenessTimer = setTimeout(this.onLivenessTimeout, ee)));
  }
  clearLivenessTimer() {
    if (this.livenessTimer)
      (clearTimeout(this.livenessTimer), (this.livenessTimer = null));
  }
  async write(e) {
    let t = this.getAuthHeaders();
    if (Object.keys(t).length === 0) {
      (n("SSETransport: No session token available for POST"),
        q("warn", "cli_sse_post_no_token"));
      return;
    }
    let r = {
      ...t,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": Um(),
      "User-Agent": va(),
    };
    n(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let o = 1; o <= H; o++) {
      try {
        let p = await at.post(this.postUrl, e, {
          headers: r,
          validateStatus: Ae,
        });
        if (p.status === 200 || p.status === 201) {
          n(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (
          (n(`SSETransport: POST ${p.status} body=${b(p.data).slice(0, 200)}`),
          p.status >= 400 && p.status < 500 && p.status !== 429)
        ) {
          (n(
            `SSETransport: POST returned ${p.status} (client error), not retrying`,
          ),
            q("warn", "cli_sse_post_client_error", { status: p.status }));
          return;
        }
        (n(`SSETransport: POST returned ${p.status}, attempt ${o}/${H}`),
          q("warn", "cli_sse_post_retryable_error", {
            status: p.status,
            attempt: o,
          }));
      } catch (p) {
        (n(`SSETransport: POST error: ${l(p)}, attempt ${o}/${H}`),
          q("warn", "cli_sse_post_network_error", { attempt: o }));
      }
      if (o === H) {
        (n(`SSETransport: POST failed after ${H} attempts, continuing`),
          q("warn", "cli_sse_post_retries_exhausted"));
        return;
      }
      let d = Math.min(Re * Math.pow(2, o - 1), Me);
      await Z(d);
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isReadStreamRecentlyAlive() {
    return (
      this.state === "connected" &&
      Date.now() - this.lastLivenessEvidenceAtMs < W
    );
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(e) {
    this.onData = e;
  }
  setOnClose(e) {
    this.onCloseCallback = e;
  }
  setNonOriginRejectionPolicy(e) {
    this.nonOriginPolicy = e;
  }
  setOnEvent(e) {
    this.onEventCallback = e;
  }
  setOnDiagnostic(e) {
    this.onDiagnostic = e;
  }
  setEventFilter(e) {
    this.eventFilter = e;
  }
  setOnEventVetoed(e) {
    this.onEventVetoed = e;
  }
  setOnHeartbeatProbe(e) {
    this.onHeartbeatProbe = e;
  }
  setOnReconnected(e) {
    this.onReconnected = e;
  }
  close() {
    if (this.reconnectTimer)
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.clearLivenessTimer(),
      (this.state = "closing"),
      (this.nonOriginStreak = null),
      this.abortController?.abort(),
      (this.abortController = null));
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function te(e, t) {
  if (t.Cookie) delete e.Authorization;
  if (t.Authorization) (delete e.Cookie, delete e["X-Organization-Uuid"]);
}
function Pe(e) {
  let t = e.pathname;
  if (t.endsWith("/stream")) t = t.slice(0, -7);
  return `${e.protocol}//${e.host}${t}`;
}
import { randomUUID as oe } from "crypto";
var F = 61440,
  Be = F - 4096;
function De(e) {
  if (e.type !== "content_block_delta") return null;
  switch (e.delta.type) {
    case "text_delta":
      return {
        event: e,
        deltaType: "text_delta",
        chunk: e.delta.text,
        estimatedTokens: void 0,
      };
    case "input_json_delta":
      return {
        event: e,
        deltaType: "input_json_delta",
        chunk: e.delta.partial_json,
        estimatedTokens: void 0,
      };
    case "thinking_delta":
      return {
        event: e,
        deltaType: "thinking_delta",
        chunk: e.delta.thinking,
        estimatedTokens: e.delta.estimated_tokens ?? void 0,
      };
    case "citations_delta":
    case "signature_delta":
    case "compaction_delta":
      return null;
    default:
      return (e.delta, null);
  }
}
function G(e) {
  if (e.count === 1) return e.first;
  let t;
  switch (e.deltaType) {
    case "text_delta":
      t = { type: "text_delta", text: e.accumulated };
      break;
    case "input_json_delta":
      t = { type: "input_json_delta", partial_json: e.accumulated };
      break;
    case "thinking_delta":
      t = {
        type: "thinking_delta",
        thinking: e.accumulated,
        estimated_tokens: e.estimatedTokens ?? null,
      };
      break;
  }
  return {
    ...e.first,
    event: { ...e.firstEvent, delta: { ...e.firstEvent.delta, ...t } },
  };
}
function re(e) {
  if (e.length <= 1) return e;
  let t = [],
    r = null;
  for (let o of e) {
    let d = De(o.event);
    if (d === null) {
      if (r !== null) (t.push(G(r)), (r = null));
      t.push(o);
      continue;
    }
    let { event: p, deltaType: E, chunk: _, estimatedTokens: R } = d,
      k = Buffer.byteLength(Tc(_)) - 2;
    if (
      r !== null &&
      r.firstEvent.index === p.index &&
      r.deltaType === E &&
      r.first.parent_tool_use_id === o.parent_tool_use_id &&
      r.bytes + k <= Be
    ) {
      if (
        ((r.accumulated += _),
        (r.bytes += k),
        (r.count += 1),
        typeof R === "number")
      )
        r.estimatedTokens = (r.estimatedTokens ?? 0) + R;
      continue;
    }
    if (r !== null) t.push(G(r));
    r = {
      first: o,
      firstEvent: p,
      deltaType: E,
      accumulated: _,
      estimatedTokens: R,
      bytes: k,
      count: 1,
    };
  }
  if (r !== null) t.push(G(r));
  return t;
}
var N = 1536;
function V(e) {
  return Array.isArray(e) && e.every((t) => typeof t === "string");
}
function ne(e, t = N) {
  let r = e.compactMetadata;
  if (!me(r)) return null;
  let o = r.preservedMessages;
  if (!me(o)) return null;
  let d = o.uuids;
  if (!V(d) || d.length <= t) return null;
  let p = d.slice(-t),
    E = p[0],
    _ = o.allUuids,
    R = V(_) ? _.indexOf(E) : -1,
    k = r.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...r,
      preservedMessages: {
        ...o,
        uuids: p,
        ...(V(_) && { allUuids: R >= 0 ? _.slice(R) : _.slice(-t) }),
      },
      ...(me(k) && { preservedSegment: { ...k, headUuid: E } }),
    },
  };
}
function ie(e, t, r) {
  if (!me(e)) return e;
  if (t.edit === !0 && Ue(e)) return { ...e, originalFile: null };
  if (t.write === !0 && xe(e)) return { ...e, content: "", originalFile: null };
  let o = e.file;
  if (!me(o)) return e;
  if (
    t.media === !0 &&
    (e.type === "image" || e.type === "pdf") &&
    typeof o.base64 === "string" &&
    o.base64 !== ""
  )
    return { ...e, file: { ...o, base64: "" } };
  if (
    t.read === !0 &&
    e.type === "text" &&
    typeof o.content === "string" &&
    o.content !== "" &&
    Fe(He(r), o)
  )
    return { ...e, file: { ...o, content: "" } };
  return e;
}
function Ue(e) {
  return (
    typeof e.originalFile === "string" &&
    e.originalFile !== "" &&
    typeof e.oldString === "string" &&
    typeof e.newString === "string" &&
    Array.isArray(e.structuredPatch)
  );
}
function xe(e) {
  if (
    e.type !== "update" ||
    typeof e.filePath !== "string" ||
    typeof e.content !== "string" ||
    !Array.isArray(e.structuredPatch) ||
    !("originalFile" in e)
  )
    return !1;
  if (e.content === "" && (e.originalFile ?? "") === "") return !1;
  return !(e.structuredPatch.length === 0 && e.originalFile === null);
}
function He(e) {
  if (!me(e) || !Array.isArray(e.content)) return;
  let t;
  for (let r of e.content)
    if (me(r) && r.type === "tool_result") {
      if (t !== void 0 || typeof r.content !== "string") return;
      t = r.content;
    }
  return t;
}
function Fe(e, { content: t, startLine: r, numLines: o }) {
  if (
    e === void 0 ||
    typeof t !== "string" ||
    /[\r\v\f\u0085\u2028\u2029]/.test(t) ||
    typeof r !== "number" ||
    !Number.isSafeInteger(r) ||
    r < 0
  )
    return !1;
  let d = e.split(`
`);
  if (d.length !== o) return !1;
  let p = [];
  for (let [E, _] of d.entries()) {
    let R = String(r + E);
    if (!_.startsWith(R)) return !1;
    let k = _[R.length];
    if (k !== "\t" && k !== ":") return !1;
    p.push(_.slice(R.length + 1));
  }
  return (
    p.join(`
`) === t
  );
}
class x extends Error {
  retryAfterMs;
  constructor(e, t) {
    super(e);
    this.retryAfterMs = t;
  }
}
class L {
  pending = [];
  pendingAtClose = 0;
  inFlight;
  undelivered = [];
  retaining = !1;
  draining = !1;
  closed = !1;
  backpressureResolvers = [];
  sleepResolve = null;
  flushResolvers = [];
  droppedBatches = 0;
  holdMs = 0;
  holdTimer = null;
  heldSince = 0;
  config;
  constructor(e) {
    this.config = e;
  }
  get droppedBatchCount() {
    return this.droppedBatches;
  }
  get pendingCount() {
    return this.closed ? this.pendingAtClose : this.pending.length;
  }
  setHoldMs(e, t) {
    let r = e > 0 ? e : 0;
    if (r === this.holdMs) return;
    if (((this.holdMs = r), r === 0)) this.release(t);
  }
  release(e) {
    (this.endHold(e), this.drain());
  }
  takeUndelivered() {
    let e = this.undelivered;
    return ((this.undelivered = []), e);
  }
  peekUndelivered() {
    return this.undelivered;
  }
  discardUndelivered() {
    let e = this.undelivered.length;
    return ((this.undelivered = []), (this.retaining = !1), e);
  }
  async enqueue(e, t) {
    let r = Array.isArray(e) ? e : [e];
    if (r.length === 0) return;
    if (this.closed) {
      this.retainUndelivered(r);
      return;
    }
    if (r.length > this.config.maxQueueSize) {
      for (let o = 0; o < r.length; o += this.config.maxQueueSize)
        await this.enqueue(r.slice(o, o + this.config.maxQueueSize), t);
      return;
    }
    if (
      this.holdTimer &&
      this.pending.length + r.length > this.config.maxQueueSize
    )
      this.release("cap");
    while (
      this.pending.length + r.length > this.config.maxQueueSize &&
      !this.closed
    )
      await new Promise((o) => {
        this.backpressureResolvers.push(o);
      });
    if (this.closed) {
      this.retainUndelivered(r);
      return;
    }
    if ((this.pending.push(...r), t?.release)) this.release(t.release);
    else if (this.holdMs === 0 || this.draining) this.drain();
    else if (
      this.pending.length >=
      (this.config.holdMaxItems ?? this.config.maxBatchSize)
    )
      this.release("cap");
    else this.hold(t?.since ?? Date.now());
  }
  hold(e) {
    if (this.holdTimer) {
      if (e >= this.heldSince) return;
      clearTimeout(this.holdTimer);
    }
    ((this.heldSince = e),
      (this.holdTimer = setTimeout(
        () => this.release("max_age"),
        Math.min(this.holdMs, Math.max(0, e + this.holdMs - Date.now())),
      )));
  }
  cancelHold() {
    if (this.holdTimer) (clearTimeout(this.holdTimer), (this.holdTimer = null));
  }
  endHold(e) {
    if (!this.holdTimer) return;
    (this.cancelHold(),
      this.config.onHoldRelease?.(
        e,
        this.pending.length,
        Date.now() - this.heldSince,
      ));
  }
  retainUndelivered(e) {
    if (!this.retaining) return;
    let t = this.config.maxQueueSize - this.undelivered.length;
    if (t <= 0) return;
    this.undelivered.push(...(e.length > t ? e.slice(0, t) : e));
  }
  flush() {
    if (this.pending.length === 0 && !this.draining) return Promise.resolve();
    return (
      this.release("flush"),
      new Promise((e) => {
        this.flushResolvers.push(e);
      })
    );
  }
  withdraw(e) {
    if (this.closed) return 0;
    let t = this.pending.filter((o) => !e(o)),
      r = this.pending.length - t.length;
    if (r === 0) return 0;
    if (((this.pending = t), t.length === 0)) this.cancelHold();
    return (this.releaseBackpressure(), r);
  }
  close(e) {
    if (this.closed) return 0;
    ((this.closed = !0),
      (this.pendingAtClose = this.pending.length),
      (this.retaining = e?.retainUndelivered === !0),
      this.cancelHold());
    let t = (this.inFlight ?? []).concat(this.pending);
    ((this.undelivered = this.retaining ? t : []),
      (this.inFlight = void 0),
      (this.pending = []),
      this.sleepResolve?.(),
      (this.sleepResolve = null));
    for (let r of this.backpressureResolvers) r();
    this.backpressureResolvers = [];
    for (let r of this.flushResolvers) r();
    return ((this.flushResolvers = []), t.length);
  }
  async drain() {
    if (this.draining || this.closed) return;
    this.draining = !0;
    let e = 0;
    try {
      while (this.pending.length > 0 && !this.closed) {
        let t = this.takeBatch();
        if (t.length === 0) continue;
        this.inFlight = t;
        try {
          (await this.config.send(t), (e = 0));
        } catch (r) {
          if ((e++, this.closed)) break;
          if (
            this.config.maxConsecutiveFailures !== void 0 &&
            e >= this.config.maxConsecutiveFailures
          ) {
            (this.droppedBatches++,
              this.config.onBatchDropped?.(t.length, e),
              (e = 0),
              this.releaseBackpressure());
            continue;
          }
          ((this.inFlight = void 0), (this.pending = t.concat(this.pending)));
          let o = r instanceof x ? r.retryAfterMs : void 0;
          await this.sleep(this.retryDelay(e, o));
          continue;
        } finally {
          this.inFlight = void 0;
        }
        this.releaseBackpressure();
      }
    } finally {
      if (((this.draining = !1), this.pending.length === 0)) {
        for (let t of this.flushResolvers) t();
        this.flushResolvers = [];
      }
    }
  }
  takeBatch() {
    let { maxBatchSize: e, maxBatchBytes: t } = this.config;
    if (t === void 0) return this.pending.splice(0, e);
    let r = 0,
      o = 0;
    while (o < this.pending.length && o < e) {
      let d;
      try {
        d = Buffer.byteLength(b(this.pending[o]));
      } catch {
        this.pending.splice(o, 1);
        continue;
      }
      if (o > 0 && r + d > t) break;
      ((r += d), o++);
    }
    return this.pending.splice(0, o);
  }
  retryDelay(e, t) {
    let r = Math.random() * this.config.jitterMs;
    if (t !== void 0 && Number.isFinite(t))
      return (
        Math.max(this.config.baseDelayMs, Math.min(t, this.config.maxDelayMs)) +
        r
      );
    return (
      Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs) +
      r
    );
  }
  releaseBackpressure() {
    let e = this.backpressureResolvers;
    this.backpressureResolvers = [];
    for (let t of e) t();
  }
  sleep(e) {
    return new Promise((t) => {
      ((this.sleepResolve = t),
        setTimeout(
          (r, o) => {
            ((r.sleepResolve = null), o());
          },
          e,
          this,
          t,
        ));
    });
  }
}
class K {
  inflight = null;
  pending = null;
  closed = !1;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed) return;
    ((this.pending = this.pending ? ae(this.pending, e) : e), this.drain());
  }
  close() {
    ((this.closed = !0), (this.pending = null));
  }
  async flush() {
    while (!this.closed)
      if (this.inflight) await this.inflight;
      else if (this.pending) await this.drain();
      else return !0;
    return !1;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    if (!this.pending) return;
    let e = this.pending;
    ((this.pending = null),
      (this.inflight = this.sendWithRetry(e).then(() => {
        if (((this.inflight = null), this.pending && !this.closed))
          this.drain();
      })));
  }
  async sendWithRetry(e) {
    let t = e,
      r = 0;
    while (!this.closed) {
      if (await this.config.send(t)) return;
      if ((r++, await Z(this.retryDelay(r)), this.pending && !this.closed))
        ((t = ae(t, this.pending)), (this.pending = null));
    }
  }
  retryDelay(e) {
    let t = Math.min(
        this.config.baseDelayMs * 2 ** (e - 1),
        this.config.maxDelayMs,
      ),
      r = Math.random() * this.config.jitterMs;
    return t + r;
  }
}
function ae(e, t) {
  let r = { ...e };
  for (let [o, d] of Object.entries(t))
    if (
      (o === "external_metadata" || o === "internal_metadata") &&
      r[o] &&
      typeof r[o] === "object" &&
      typeof d === "object" &&
      d !== null
    )
      r[o] = { ...r[o], ...d };
    else r[o] = d;
  return r;
}
var le = {},
  ve = 20000,
  de = 1e4,
  _e = 15000,
  ge = 5000,
  be = ge,
  Ne = 5000,
  $e = 300000,
  qe = 2000,
  je = _e + be + 2 * ve,
  ze = 5000,
  ce = 1.5,
  We = 3,
  Ge = new Set([401, 403, 404, 429]),
  KGe = 100;
function U(e) {
  return e === 400 || e === 413 || e === 422;
}
var Ve = 60000,
  Ke = new Set(["remote_tool_call", "remote_plumbing_call"]);
function Ye(e) {
  let t = e.payload.type === "control_request" ? e.payload.request : void 0;
  return (
    typeof t === "object" && t !== null && "subtype" in t && Ke.has(t.subtype)
  );
}
function j(e) {
  let t = A(e);
  if (t) return t;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string")
    return e.name;
  return;
}
class sbe extends Error {
  reason;
  httpStatus;
  constructor(e, t) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = t;
  }
}
function Jjn(e) {
  return (
    e instanceof sbe &&
    e.reason === "worker_register_failed" &&
    !U(e.httpStatus)
  );
}
var Je = 10,
  Qjn = {
    epoch_conflict: 4090,
    superseded_by_worker: 4090,
    session_not_active: 4090,
    epoch_stale: 4090,
    session_not_found: 4090,
    token_expired: 4094,
    auth_exhausted: 4094,
  },
  Qe = {
    epoch_conflict: !0,
    superseded_by_worker: !0,
    session_not_active: !0,
    epoch_stale: !0,
    session_not_found: !1,
    token_expired: !1,
    auth_exhausted: !1,
  },
  Xe = 3,
  Ze = 10,
  et = 3,
  tt = 1e4,
  ue = 30000;
function he(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate";
}
function Y(e) {
  let t = !1,
    r = !1;
  for (let o of e)
    if (o.payload.subtype === "task_notification") t = !0;
    else if (o.payload.subtype === "background_tasks_changed") r = !0;
  return t || r ? { has_terminal_bookend: t, has_level: r } : null;
}
function rt(e) {
  let t = new Set(),
    r = 0;
  for (let o = 0; o < e.length;) {
    let d = e[o];
    if (d.ephemeral || typeof d.payload.uuid !== "string") {
      o++;
      continue;
    }
    if (t.has(d.payload.uuid)) {
      (e.splice(o, 1), r++);
      continue;
    }
    (t.add(d.payload.uuid), o++);
  }
  return r;
}
function Se(e) {
  return {
    tool_name: e.tool_name,
    display_tool_name: e.display_tool_name,
    action_description: e.action_description,
    raw_command: e.raw_command,
    request_id: e.request_id,
    tool_use_id: e.tool_use_id,
  };
}
var nt = m(() =>
    c({
      tool_name: s().refine((e) => !e.startsWith("dialog:")),
      display_tool_name: s().nullish(),
      action_description: s(),
      raw_command: s().nullish(),
      request_id: s(),
      tool_use_id: s().min(1),
      suppressed_request_id: s().nullish(),
    }),
  ),
  st = m(() =>
    c({
      data: v(
        it({
          event_id: s(),
          event_type: s(),
          payload: fe(s(), se()),
          event_metadata: fe(s(), se()).nullish(),
          is_compaction: O(),
          created_at: s(),
          session_agent_id: s().optional(),
        }),
      ),
      next_cursor: s().optional(),
    }),
  ),
  ot = m(() => c({ results: v(c({ event_id: s(), duplicate: O() })) }));
function lt(e) {
  let t = nt().safeParse(e);
  if (!t.success) return;
  let r = t.data,
    o = GY(r);
  if (o === void 0) return;
  return {
    requestId: o,
    details: Se({
      tool_name: r.tool_name,
      display_tool_name: r.display_tool_name ?? void 0,
      action_description: r.action_description,
      raw_command: r.raw_command ?? void 0,
      request_id: r.request_id,
      tool_use_id: r.tool_use_id,
    }),
  };
}
function dt(e) {
  if (e === "pending") return { status: "idle", reason: "get_pending" };
  if (e.readFailed) return { status: "idle", reason: "get_failed" };
  let t = e.external?.pending_action;
  if (t === void 0 || t === null)
    return { status: "idle", reason: "no_pending_action" };
  let r = lt(t);
  if (!r) return { status: "idle", reason: "not_reportable" };
  return { status: "requires_action", reason: "park", ...r };
}
function ct(e, t) {
  if (e === "requires_action") return { reported: e };
  let r = t.external?.pending_actions;
  return {
    reported: e,
    pendingActionOutstanding:
      t.readFailed === !0 ||
      (t.external?.pending_action !== void 0 &&
        t.external.pending_action !== null) ||
      (Array.isArray(r) && r.length > 0),
  };
}
function lsn() {
  return a.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}
function csn(e, t) {
  if (e.protocol !== "http:" && e.protocol !== "https:")
    throw Error(`CCRClient: Expected http(s) URL, got ${e.protocol}`);
  let r = e.pathname.replace(/\/$/, "");
  return { sessionBaseUrl: `${e.protocol}//${e.host}${r}`, getAuthHeaders: t };
}
class pM {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  seedHeartbeatIntervalMs;
  advertiseHeartbeatProbeSupport;
  uploadTrim;
  loggedTranscriptEnvelopeStrip = !1;
  loggedToolResultBlank = !1;
  maxAdvisedIntervalMs;
  beatOnStaleReconnect;
  beatOnReactivation;
  skipRedundantHeartbeats;
  idleTracker;
  unsubscribeIdleTracker;
  probeBeatSpacingMs;
  heartbeatTimer = null;
  heartbeatInFlight = !1;
  lastHeartbeatSentAtMs = 0;
  lastCadenceTickAtMs = 0;
  lastBeatingEventsPostOkAtMs = 0;
  skippedPreviousCadenceBeat = !1;
  lastHeartbeatSuccessAtMs = Date.now();
  lastHeartbeat429AtMs = 0;
  idleGrantLatched = !1;
  reactivationBeatArmed = !1;
  pendingForcedBeat = !1;
  probeBeatTimer = null;
  pendingBeatTrigger = null;
  closed = !1;
  goodbyeFlushed = Promise.resolve();
  epochSuperseded = !1;
  lastEpochMismatchCause;
  epochMismatchCount = 0;
  consecutiveAuthFailures = 0;
  lastAuthRefreshBadReason = null;
  consecutiveNotFound = 0;
  consecutiveHeartbeatFailures = 0;
  currentState = null;
  reportParkAtInit;
  initStateGetOrderingBoundMs;
  parkReportedAtInitRequestId = void 0;
  sessionBaseUrl;
  sessionId;
  readSource;
  streamEventBuffer = [];
  streamEventTimer = null;
  firstFrameUpload;
  streamEventBufferedAt = 0;
  streamEventFlushIntervalMs;
  noSubscriberStreamEventFlushIntervalMs = 0;
  noSubscriberUploadHoldMs = 0;
  closingForSuccessor = !1;
  lastReportedHasSubscribers;
  hasSubscribersReports = 0;
  streamedEphemeralSinceLastAssistant = !1;
  workerState;
  eventUploader;
  internalEventUploader;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  deliveryUploader;
  pendingProcessingAcks = [];
  onEpochMismatch;
  onDurableEventsDropped;
  onDurableEventsUpload;
  getAuthHeaders;
  onDiagnostic;
  onRequestAuthOk;
  onHeartbeatLost;
  readTransport;
  nonOrigin403Transient;
  heartbeatStreakStartedAtMs = 0;
  heartbeatLostFiredForStreak = !1;
  adoptRefreshedAuth;
  gzipRequestBodyFetch;
  constructor(e, t, r) {
    ((this.onDurableEventsDropped = r?.onDurableEventsDropped),
      (this.onDurableEventsUpload = r?.onDurableEventsUpload),
      (this.onEpochMismatch =
        r?.onEpochMismatch ??
        (() => {
          process.exit(1);
        })),
      (this.onHeartbeatLost = r?.onHeartbeatLost),
      (this.readTransport = e),
      (this.nonOrigin403Transient = r?.nonOrigin403Transient ?? !1),
      (this.heartbeatIntervalMs = r?.heartbeatIntervalMs ?? ve),
      (this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs),
      (this.advertiseHeartbeatProbeSupport =
        r?.advertiseHeartbeatProbeSupport ?? !1),
      (this.uploadTrim = r?.uploadTrim ?? (() => le)),
      (this.beatOnStaleReconnect = r?.beatOnStaleReconnect ?? !1),
      (this.idleTracker = r?.idleTracker),
      (this.beatOnReactivation =
        (r?.beatOnReactivation ?? !1) && this.idleTracker !== void 0),
      (this.skipRedundantHeartbeats = r?.skipRedundantHeartbeats ?? !1),
      (this.probeBeatSpacingMs = r?.probeBeatSpacingMs ?? ze),
      (this.heartbeatJitterFraction = r?.heartbeatJitterFraction ?? 0),
      (this.maxAdvisedIntervalMs = this.advertiseHeartbeatProbeSupport
        ? Math.floor(pS / (1 + this.heartbeatJitterFraction))
        : $e),
      (this.streamEventFlushIntervalMs = X(
        "streamEventFlushIntervalMs",
        r?.streamEventFlushIntervalMs,
        KGe,
      )),
      (this.getAuthHeaders = r?.getAuthHeaders ?? ZD),
      (this.onDiagnostic = r?.onDiagnostic),
      (this.onRequestAuthOk = r?.onRequestAuthOk),
      (this.adoptRefreshedAuth = r?.adoptRefreshedAuth),
      (this.gzipRequestBodyFetch = r?.gzipRequestBodyFetch),
      (this.reportParkAtInit = r?.reportParkAtInit ?? !1),
      (this.initStateGetOrderingBoundMs = r?.initStateGetOrderingBoundMs ?? tt),
      (this.readSource = {
        ...csn(t, this.getAuthHeaders),
        isClosed: () => this.closed,
        onConflict: (d) => this.handleEpochMismatch(d),
      }),
      (this.sessionBaseUrl = this.readSource.sessionBaseUrl),
      (this.sessionId = t.pathname.replace(/\/$/, "").split("/").pop() || ""),
      (this.workerState = new K({
        send: async (d) => {
          let p = await this.request(
            "put",
            "/worker",
            { worker_epoch: this.workerEpoch, ...d },
            "PUT worker",
          );
          if (p.ok) {
            if (d.worker_status !== void 0) y("ccr_worker_state_publish");
            return !0;
          }
          if (U(p.status)) {
            if (
              (q("warn", "cli_worker_state_4xx_dropped", { status: p.status }),
              this.droppedWorkerStatePatchCount++,
              d.worker_status !== void 0)
            )
              g("ccr_worker_state_publish", "state_4xx_dropped");
            return !0;
          }
          return !1;
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      (this.eventUploader = new L({
        maxBatchSize: 100,
        maxBatchBytes: 10485760,
        maxQueueSize: 1e5,
        send: async (d) => {
          let p = rt(d);
          if (p > 0)
            n(
              `CCRClient: dropped ${p} repeated-uuid durable event(s) from one /worker/events POST`,
            );
          let E = d.some(Ye) ? Ve : void 0;
          this.reportDurableUpload(d, "sending");
          let _ =
              this.noSubscriberStreamEventFlushIntervalMs > 0 ||
              this.noSubscriberUploadHoldMs > 0,
            R = this.hasSubscribersReports,
            k = this.firstFrameUpload,
            M =
              k && d.some((T) => T.payload.uuid === k.uuid) ? k.timing : void 0;
          if (M && M.postedAtMs === void 0)
            ((M.postedAtMs = performance.now()), (M.postedWallMs = Date.now()));
          let w = await this.request(
            "post",
            "/worker/events",
            { worker_epoch: this.workerEpoch, events: d },
            "client events",
            { timeout: E, parseBody: _ },
          );
          if (w.ok) {
            if (M && M.ackedAtMs === void 0) M.ackedAtMs = performance.now();
            let T = Y(d);
            if (T) y("ccr_task_status_publish", T);
            if (
              (this.noteBeatingEventsPostOk(d),
              this.reportDurableUpload(d, "accepted"),
              _ && R === this.hasSubscribersReports)
            )
              this.setHasSubscribers(w.data?.has_subscribers, "no_report");
            return;
          }
          if ((this.reportDurableUpload(d, he(w.status)), U(w.status))) {
            let T = d.filter((I) => !I.ephemeral),
              C = d.length - T.length,
              B = w.status;
            if (C > 0) {
              if (
                (n(
                  `CCRClient: client event POST rejected (${w.status}) \u2014 dropping ${C} ephemeral event(s), retrying ${T.length} durable event(s)`,
                  { level: "warn" },
                ),
                g("ccr_partial_messages", "ephemeral_dropped_on_4xx"),
                d.splice(0, d.length, ...T),
                T.length === 0)
              )
                return;
              this.reportDurableUpload(T, "sending");
              let I = await this.request(
                "post",
                "/worker/events",
                { worker_epoch: this.workerEpoch, events: T },
                "client events (durable retry)",
                { timeout: E },
              );
              if (I.ok) {
                let D = Y(T);
                if (D) y("ccr_task_status_publish", D);
                (this.noteBeatingEventsPostOk(T),
                  this.reportDurableUpload(T, "accepted"));
                return;
              }
              if ((this.reportDurableUpload(T, he(I.status)), !U(I.status)))
                throw new x("client event POST failed", I.retryAfterMs);
              B = I.status;
            }
            if (T.length > 0) {
              this.droppedDurableEventBatches++;
              try {
                this.onDurableEventsDropped?.(T, B);
              } catch (I) {
                n(
                  `CCRClient: onDurableEventsDropped threw; batch still dropped: ${l(I)}`,
                  { level: "warn" },
                );
              }
            }
            q("warn", "cli_worker_events_4xx_dropped", {
              status: B,
              count: T.length,
            });
            let P = Y(T);
            if (P) f("ccr_task_status_publish", "status_events_4xx_dropped", P);
            return;
          }
          throw new x("client event POST failed", w.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
        onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
      })));
    let o = r?.internalEventUploader;
    ((this.internalEventUploader = new L({
      maxBatchSize: 100,
      maxBatchBytes: o?.maxBatchBytes ?? 10485760,
      maxQueueSize: 200,
      maxConsecutiveFailures: o?.maxConsecutiveFailures,
      onBatchDropped: (d, p) => {
        (this.droppedInternalEventBatches++,
          q("warn", "cli_worker_internal_events_give_up_dropped", {
            count: d,
            consecutive_failures: p,
          }),
          i("tengu_ccr_internal_events_dropped", {
            reason: S("give_up"),
            count: d,
            consecutive_failures: p,
          }));
      },
      send: async (d) => {
        let p = await this.request(
          "post",
          "/worker/internal-events",
          { worker_epoch: this.workerEpoch, events: d },
          "internal events",
          { timeout: o?.requestTimeoutMs },
        );
        if (p.ok) {
          Promise.resolve()
            .then(() => this.onInternalBatchAcked?.(d))
            .catch(() => {});
          return;
        }
        if (U(p.status)) {
          (this.droppedInternalEventBatches++,
            q("warn", "cli_worker_internal_events_4xx_dropped", {
              status: p.status,
              count: d.length,
            }),
            i("tengu_ccr_internal_events_dropped", {
              reason: S("4xx"),
              count: d.length,
              status: p.status,
            }));
          return;
        }
        throw new x(
          "internal event POST failed",
          p.nonOriginRefusal ? ue : p.retryAfterMs,
        );
      },
      baseDelayMs: 500,
      maxDelayMs: ue,
      jitterMs: 500,
      holdMaxItems: 50,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
    })),
      (this.deliveryUploader = new L({
        maxBatchSize: 64,
        maxQueueSize: 64,
        send: async (d) => {
          let p = await this.request(
            "post",
            "/worker/events/delivery",
            {
              worker_epoch: this.workerEpoch,
              updates: d.map((E) => ({
                event_id: E.eventId,
                status: E.status,
              })),
            },
            "delivery batch",
          );
          if (p.ok) return;
          if (U(p.status)) {
            q("warn", "cli_worker_delivery_4xx_dropped", {
              status: p.status,
              count: d.length,
            });
            return;
          }
          throw new x("delivery POST failed", p.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      this.setNoSubscriberStreamEventFlushIntervalMs(
        r?.noSubscriberStreamEventFlushIntervalMs,
      ),
      this.setNoSubscriberUploadHoldMs(r?.noSubscriberUploadHoldMs),
      e.setOnEvent((d) => {
        this.reportDelivery(d.event_id, "received");
      }),
      e.setOnHeartbeatProbe(() => {
        (this.setHasSubscribers(void 0, "reset"), this.heartbeatNow("probe"));
      }),
      e.setOnReconnected(() => this.resyncAfterReconnect()),
      (this.unsubscribeIdleTracker = this.beatOnReactivation
        ? this.idleTracker?.onActivity(() => this.sendReactivationBeat())
        : void 0));
  }
  async initialize(e) {
    let t = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0)
      throw new sbe("no_auth_headers");
    if (e === void 0) e = lsn();
    if (isNaN(e)) throw new sbe("missing_epoch");
    this.workerEpoch = e;
    let r = this.getWorkerState(),
      o = await Promise.race([
        r.then(
          (C) => C.metadata,
          () => ({ external: null, internal: null, readFailed: !0 }),
        ),
        Z(this.initStateGetOrderingBoundMs).then(() => "pending"),
      ]),
      d = this.reportParkAtInit ? dt(o) : void 0,
      p = {
        worker_status: "idle",
        worker_epoch: this.workerEpoch,
        external_metadata: { task_summary: null },
      },
      E =
        d === void 0
          ? {
              worker_status: "idle",
              worker_epoch: this.workerEpoch,
              external_metadata: {
                pending_action: null,
                pending_actions: null,
                task_summary: null,
              },
            }
          : d.status === "requires_action"
            ? {
                ...p,
                worker_status: "requires_action",
                requires_action_details: d.details,
              }
            : p,
      _ = { ok: !1 },
      R = new Set(),
      k = 10,
      M = 0;
    for (let C = 1; C <= k; C++) {
      if (
        ((M = C),
        (_ = await this.request("put", "/worker", E, "PUT worker (init)")),
        _.ok || this.closed)
      )
        break;
      if (_.reason) R.add(_.reason);
      if (
        (this.onDiagnostic?.(
          `PUT /worker failed (${_.reason ?? "unknown"}) attempt=${C}/${k}, ${Math.round((Date.now() - t) / 1000)}s elapsed`,
        ),
        U(_.status))
      ) {
        if (d?.status === "requires_action") {
          ((d = { status: "idle", reason: "park_rejected" }), (E = p), C--);
          continue;
        }
        break;
      }
      if (C < k) {
        let B = Math.min(500 * 2 ** (C - 1), 30000) + Math.random() * 500;
        await Z(B);
      }
    }
    if (!_.ok) {
      if (!this.closed)
        (q("error", "cli_worker_init_put_retries_exhausted"),
          this.onDiagnostic?.(
            `PUT /worker retries exhausted: ${M} attempts over ${Math.round((Date.now() - t) / 1000)}s, errors=[${[...R].join(",") || "unknown"}]`,
          ));
      throw new sbe("worker_register_failed", _.status);
    }
    if (
      ((this.currentState = d?.status ?? "idle"),
      this.applyUploadHold("idle"),
      (this.parkReportedAtInitRequestId =
        d?.status === "requires_action" ? d.requestId : void 0),
      this.startHeartbeat(),
      !this.closed)
    )
      $nr(() => {
        this.writeEvent({ type: "keep_alive" });
      });
    if (
      (n(`CCRClient: initialized, epoch=${this.workerEpoch}`),
      q("info", "cli_worker_lifecycle_initialized", {
        epoch: this.workerEpoch,
        duration_ms: Date.now() - t,
        reported_status: this.currentState,
      }),
      d)
    )
      i("tengu_ccr_init_park_report", {
        reported: u(d.status),
        reason: u(d.reason),
      });
    let { metadata: w, durationMs: T } = await r;
    if (!this.closed)
      q("info", "cli_worker_state_restored", {
        duration_ms: T,
        had_state: w.external !== null || w.internal !== null,
        read_failed: w.readFailed === !0,
      });
    return d ? { ...w, initParkReport: ct(d.status, w) } : w;
  }
  async getWorkerState(e = "worker_state", t = !1) {
    let r = Date.now(),
      o = this.getAuthHeaders();
    if (Object.keys(o).length === 0)
      return {
        metadata: { external: null, internal: null, readFailed: !0 },
        projectsAssertion: void 0,
        durationMs: 0,
      };
    let d = await pM.getWithRetry(
      this.readSource,
      `${this.sessionBaseUrl}/worker${vt(t)}`,
      o,
      e,
    );
    return {
      metadata: {
        external: d?.worker?.external_metadata ?? null,
        internal: d?.worker?.internal_metadata ?? null,
        ...(d === null && { readFailed: !0 }),
      },
      projectsAssertion: mt(d),
      durationMs: Date.now() - r,
    };
  }
  async readProjectsBinding() {
    let { metadata: e, projectsAssertion: t } = await this.getWorkerState(
      "projects_binding",
      !0,
    );
    return e.readFailed ? { read: !1 } : { read: !0, assertion: t };
  }
  async readWorkerState() {
    return (await this.getWorkerState("worker_state_reread")).metadata;
  }
  async request(
    e,
    t,
    r,
    o,
    {
      timeout: d = 1e4,
      parseBody: p = !1,
      countTowardEscalation: E = !0,
      signal: _,
    } = {},
  ) {
    let R = this.getAuthHeaders();
    if (Object.keys(R).length === 0)
      return { ok: !1, reason: "no_auth_headers" };
    let k = `${this.sessionBaseUrl}${t}`,
      M = _ ? Fa(_, { timeoutMs: d, refTimer: !0 }) : void 0;
    try {
      let w = {
          method: e.toUpperCase(),
          headers: {
            ...R,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": Um(),
            "User-Agent": va(),
          },
          body: b(r),
          signal: M?.signal ?? AbortSignal.timeout(d),
          ...As({ url: k }),
        },
        T = this.gzipRequestBodyFetch
          ? await this.gzipRequestBodyFetch(k, w, (I) => fetch(k, I))
          : await fetch(k, w);
      if (T.ok) {
        if (
          ((this.consecutiveAuthFailures = 0),
          (this.consecutiveNotFound = 0),
          p)
        )
          try {
            return { ok: !0, data: await T.json() };
          } catch {
            return { ok: !0 };
          }
        return (await bF(T), { ok: !0 });
      }
      let C;
      if (T.status === 409 && !this.closed) C = await J(T);
      else await bF(T);
      if (this.closed)
        return { ok: !1, status: T.status, reason: `http_${T.status}` };
      if (T.status === 409) this.handleEpochMismatch(C);
      if (T.status === 404 && E) {
        if ((this.consecutiveNotFound++, this.consecutiveNotFound >= Xe))
          (n(
            `CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`,
            { level: "error" },
          ),
            q("error", "cli_worker_session_not_found"),
            this.onDiagnostic?.(
              `${this.consecutiveNotFound} consecutive 404s on ${t} \u2014 session gone, exiting`,
            ),
            this.escalateEpochMismatch("session_not_found"));
      }
      let B = T.status === 403 ? dQe((I) => T.headers.get(I)) : void 0,
        P = this.nonOrigin403Transient && fse(B);
      if (T.status === 401 || T.status === 403) {
        let I = Gi(),
          D = I ? FR(I) : null;
        if (D !== null && D * 1000 < Date.now())
          (n(
            `CCRClient: session_token expired (exp=${new Date(D * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`,
            { level: "error" },
          ),
            q("error", "cli_worker_token_expired_no_refresh"),
            this.onDiagnostic?.(
              `session_token expired (exp=${new Date(D * 1000).toISOString()}) \u2014 no refresh delivered, exiting`,
            ),
            this.escalateEpochMismatch("token_expired"));
        if (E && !P) {
          if (
            (this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= Je)
          )
            (n(
              `CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`,
              { level: "error" },
            ),
              q("error", "cli_worker_auth_failures_exhausted"),
              this.onDiagnostic?.(
                `${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${T.status}) with valid-looking token \u2014 exiting`,
              ),
              this.escalateEpochMismatch("auth_exhausted"));
        }
      }
      if (
        (n(`CCRClient: ${o} returned ${T.status}`, { level: "warn" }),
        q("warn", "cli_worker_request_failed", {
          method: e,
          path: t,
          status: T.status,
          ...(B !== void 0 && { source: B }),
        }),
        T.status === 429)
      ) {
        let I = T.headers.get("retry-after"),
          D = I ? parseInt(I, 10) : NaN;
        if (!isNaN(D) && D >= 0)
          return {
            ok: !1,
            retryAfterMs: D * 1000,
            status: T.status,
            reason: `http_${T.status}`,
          };
      }
      return {
        ok: !1,
        status: T.status,
        reason: `http_${T.status}`,
        ...(P && { nonOriginRefusal: P }),
      };
    } catch (w) {
      return (
        n(`CCRClient: ${o} failed: ${l(w)}`, { level: "warn" }),
        q("warn", "cli_worker_request_error", {
          method: e,
          path: t,
          error_code: j(w),
        }),
        { ok: !1, reason: `fetch_failed:${j(w)}` }
      );
    } finally {
      M?.cleanup();
    }
  }
  reportState(e, t) {
    if (e === this.currentState && !t) return;
    let r = this.parkReportedAtInitRequestId;
    if (
      ((this.parkReportedAtInitRequestId = void 0),
      r !== void 0 &&
        e === "requires_action" &&
        this.currentState === "requires_action" &&
        GY(t) === r)
    )
      return;
    ((this.currentState = e),
      this.workerState.enqueue({
        worker_status: e,
        requires_action_details: t ? Se(t) : null,
        internal_metadata: { reply_degraded: t6n() },
      }),
      this.applyUploadHold(e === "running" ? "idle" : e));
  }
  reportMetadata(e) {
    this.workerState.enqueue({ external_metadata: ht(e) });
  }
  reportInternalMetadata(e) {
    this.workerState.enqueue({ internal_metadata: e });
  }
  handleEpochMismatch(e) {
    let t = e ?? "epoch_conflict",
      r = e ?? "unattributed";
    (n(`CCRClient: Epoch mismatch (409, reason=${r}), shutting down`, {
      level: "error",
    }),
      q(
        "error",
        t === "epoch_stale"
          ? "cli_worker_epoch_stale"
          : t === "session_not_active"
            ? "cli_worker_session_not_active"
            : "cli_worker_epoch_mismatch",
        { reason: r },
      ));
    let o =
      t === "epoch_stale"
        ? "stale registration (no live successor)"
        : t === "session_not_active"
          ? "session archived or no longer active"
          : t === "superseded_by_worker"
            ? "superseded by a newer worker"
            : "unattributed conflict, treated as superseded";
    (this.onDiagnostic?.(
      `worker epoch mismatch (409) reason=${r} epoch=${this.workerEpoch} \u2014 ${o}, exiting`,
    ),
      this.escalateEpochMismatch(t));
  }
  escalateEpochMismatch(e) {
    return (
      (this.lastEpochMismatchCause = e),
      this.epochMismatchCount++,
      (this.epochSuperseded = !0),
      this.onEpochMismatch(e)
    );
  }
  startHeartbeat() {
    if ((this.stopHeartbeat(), this.closed)) return;
    let e = () => {
        let r =
          this.heartbeatIntervalMs *
          this.heartbeatJitterFraction *
          (2 * Math.random() - 1);
        this.heartbeatTimer = setTimeout(t, this.heartbeatIntervalMs + r);
      },
      t = () => {
        let r = this.lastCadenceTickAtMs;
        if (
          ((this.lastCadenceTickAtMs = Date.now()), this.canSkipCadenceBeat(r))
        )
          ((this.skippedPreviousCadenceBeat = !0),
            this.idleTracker?.sampleIdleSeconds(),
            n("CCRClient: Heartbeat skipped (events beat)"));
        else this.sendHeartbeat();
        if (this.heartbeatTimer === null) return;
        e();
      };
    ((this.lastCadenceTickAtMs = Date.now()), e());
  }
  noteBeatingEventsPostOk(e) {
    if (e.some((t) => !t.ephemeral))
      this.lastBeatingEventsPostOkAtMs = Date.now();
  }
  canSkipCadenceBeat(e) {
    let t = this.heartbeatIntervalMs * (1 + this.heartbeatJitterFraction);
    if (
      !this.skipRedundantHeartbeats ||
      this.closed ||
      this.lastBeatingEventsPostOkAtMs < e ||
      this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs ||
      this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > t * ce ||
      this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs ||
      this.isIdleAdvised() ||
      this.consecutiveHeartbeatFailures > 0 ||
      this.skippedPreviousCadenceBeat
    )
      return !1;
    let r = t * 2;
    return this.clampToTokenLifetime(r) >= r;
  }
  stopHeartbeat() {
    if (this.heartbeatTimer)
      (clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = null));
  }
  clearProbeBeatTimer() {
    if (this.probeBeatTimer)
      (clearTimeout(this.probeBeatTimer), (this.probeBeatTimer = null));
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      q("info", "cli_worker_goodbye_skipped_mid_turn");
      return;
    }
    this.goodbyeFlushed = this.request(
      "put",
      "/worker",
      { worker_epoch: this.workerEpoch, connection_status: "disconnected" },
      "PUT worker (goodbye)",
      { timeout: qe, countTowardEscalation: !1 },
    )
      .then((e) => {
        if (e.ok) y("ccr_worker_goodbye");
        else if (e.status !== 409)
          g(
            "ccr_worker_goodbye",
            e.status !== void 0 ? `http_${e.status}` : "send_failed",
          );
      })
      .catch(() => {
        g("ccr_worker_goodbye", "send_threw");
      });
  }
  heartbeatNow(e = "probe") {
    if (this.closed) return;
    if (
      e === "probe"
        ? this.pendingBeatTrigger === "reactivate"
        : e === "reactivate" && this.pendingBeatTrigger === "probe"
    )
      this.restoreReactivationArm();
    if (
      e === "probe" ||
      this.pendingBeatTrigger === null ||
      (e === "reactivate" && this.pendingBeatTrigger !== "probe")
    )
      this.pendingBeatTrigger = e;
    if (this.heartbeatInFlight) {
      this.pendingForcedBeat = !0;
      return;
    }
    let r = Date.now() - this.lastHeartbeatSentAtMs;
    if (r < this.probeBeatSpacingMs) {
      if (this.probeBeatTimer) return;
      this.probeBeatTimer = setTimeout(() => {
        ((this.probeBeatTimer = null), this.refireForcedBeat());
      }, this.probeBeatSpacingMs - r);
      return;
    }
    let o = this.pendingBeatTrigger ?? e;
    ((this.pendingBeatTrigger = null),
      this.clearProbeBeatTimer(),
      this.sendHeartbeat(o));
  }
  refireForcedBeat() {
    let e = this.pendingBeatTrigger ?? "probe";
    if (e === "resync_stale" && !this.staleReconnectBeatWanted()) {
      ((this.pendingBeatTrigger = null), this.clearProbeBeatTimer());
      return;
    }
    if (e === "reactivate") {
      if ((this.restoreReactivationArm(), !this.reactivationBeatWanted())) {
        ((this.pendingBeatTrigger = null), this.clearProbeBeatTimer());
        return;
      }
      this.reactivationBeatArmed = !1;
    }
    this.heartbeatNow(e);
  }
  reactivationBeatWanted() {
    return (
      this.beatOnReactivation &&
      this.reactivationBeatArmed &&
      this.isIdleAdvised() &&
      Date.now() - this.lastHeartbeat429AtMs > this.seedHeartbeatIntervalMs
    );
  }
  restoreReactivationArm() {
    this.reactivationBeatArmed = this.idleGrantLatched;
  }
  armReactivationIfEarned(e, t) {
    if (this.beatOnReactivation && e !== void 0 && e >= t)
      this.reactivationBeatArmed = !0;
  }
  sendReactivationBeat() {
    if (!this.reactivationBeatWanted()) return;
    ((this.reactivationBeatArmed = !1), this.heartbeatNow("reactivate"));
  }
  isIdleAdvised() {
    return this.advertiseHeartbeatProbeSupport && this.idleGrantLatched;
  }
  applyShorterIntervalNow(e) {
    if (e >= this.heartbeatIntervalMs) return;
    if (((this.heartbeatIntervalMs = e), this.heartbeatTimer !== null))
      this.startHeartbeat();
  }
  clampToTokenLifetime(e) {
    if (!this.advertiseHeartbeatProbeSupport || !this.adoptRefreshedAuth)
      return e;
    let t = Gi(),
      r = t ? FR(t) : null;
    if (r === null) return e;
    let o = r * 1000 - Date.now() - je;
    if (o >= e) return e;
    return Math.max(de, o);
  }
  reclampCurrentIntervalToTokenLifetime() {
    let e = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (e < this.heartbeatIntervalMs)
      (q("info", "cli_heartbeat_interval_updated", {
        from_ms: this.heartbeatIntervalMs,
        to_ms: e,
      }),
        this.applyShorterIntervalNow(e));
  }
  resyncAfterReconnect() {
    if (this.isIdleAdvised()) {
      this.heartbeatNow("resync");
      return;
    }
    if (this.staleReconnectBeatWanted()) this.heartbeatNow("resync_stale");
  }
  staleReconnectBeatWanted() {
    if (
      !this.beatOnStaleReconnect ||
      this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs
    )
      return !1;
    let e = Date.now();
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * ce)
      return !1;
    return e - this.lastHeartbeat429AtMs > this.heartbeatIntervalMs;
  }
  resetHeartbeatStreak() {
    ((this.consecutiveHeartbeatFailures = 0),
      (this.heartbeatLostFiredForStreak = !1));
  }
  async sendHeartbeat(e) {
    if (this.closed) {
      this.stopHeartbeat();
      return;
    }
    if (this.heartbeatInFlight) return;
    if (
      ((this.heartbeatInFlight = !0),
      (this.lastHeartbeatSentAtMs = Date.now()),
      (this.skippedPreviousCadenceBeat = !1),
      e === "resync_stale")
    )
      q("info", "cli_heartbeat_reconnect_stale_beat", {
        gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
        interval_ms: this.heartbeatIntervalMs,
      });
    try {
      if (e === "reactivate")
        q("info", "cli_heartbeat_reactivation_beat", {
          interval_ms: this.heartbeatIntervalMs,
        });
      let t = this.idleTracker?.sampleIdleSeconds(),
        r = this.advertiseHeartbeatProbeSupport ? t : void 0,
        o = await this.request(
          "post",
          "/worker/heartbeat",
          {
            session_id: this.sessionId,
            worker_epoch: this.workerEpoch,
            ...(this.advertiseHeartbeatProbeSupport && {
              supports_heartbeat_probe: !0,
              current_interval_seconds: Math.round(
                this.heartbeatIntervalMs / 1000,
              ),
              ...(r !== void 0 && { idle_seconds: r }),
            }),
          },
          "Heartbeat",
          {
            timeout: Math.max(
              Ne,
              Math.min(
                _e,
                this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) -
                  ge,
              ),
            ),
            parseBody: !0,
            countTowardEscalation: e === void 0,
          },
        );
      if (!o.ok) {
        if (e === "probe") f("ccr_heartbeat_probe", "beat_failed");
        else if (e === "resync_stale") f("ccr_reconnect_beat", "beat_failed");
        else if (e === "reactivate") f("ccr_reactivation_beat", "beat_failed");
        if (o.status === 429) {
          if (((this.lastHeartbeat429AtMs = Date.now()), e === "reactivate"))
            this.restoreReactivationArm();
        }
        if (this.isIdleAdvised() && o.status !== 429)
          (q("warn", "cli_heartbeat_idle_reverted_on_failure", {
            status: o.status,
          }),
            (this.idleGrantLatched = !1),
            (this.reactivationBeatArmed = !1),
            this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs));
        if (
          (this.reclampCurrentIntervalToTokenLifetime(),
          o.status !== void 0 && Ge.has(o.status) && !o.nonOriginRefusal)
        ) {
          this.resetHeartbeatStreak();
          return;
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return;
        }
        if (this.consecutiveHeartbeatFailures === 0)
          this.heartbeatStreakStartedAtMs = Date.now();
        if (
          (this.consecutiveHeartbeatFailures++,
          !this.heartbeatLostFiredForStreak &&
            this.consecutiveHeartbeatFailures >= We &&
            Date.now() - this.heartbeatStreakStartedAtMs >= W)
        ) {
          this.heartbeatLostFiredForStreak = !0;
          try {
            this.onHeartbeatLost?.();
          } catch (E) {
            h(E);
          }
        }
        return;
      }
      if (
        (this.resetHeartbeatStreak(),
        (this.lastHeartbeatSuccessAtMs = this.lastHeartbeatSentAtMs),
        this.onRequestAuthOk?.(),
        e === "probe")
      )
        y("ccr_heartbeat_probe");
      else if (e === "resync_stale") y("ccr_reconnect_beat");
      else if (e === "reactivate") y("ccr_reactivation_beat");
      if (
        (n("CCRClient: Heartbeat sent"),
        o.data?.refreshed_auth && this.adoptRefreshedAuth)
      )
        try {
          let E = !1,
            _ = this.adoptRefreshedAuth(
              o.data.refreshed_auth.expires_in_seconds,
            );
          _.then(
            (M) => {
              if (E && M.adopted)
                ((this.lastAuthRefreshBadReason = null),
                  y("ccr_worker_auth_refresh"),
                  q("info", "cli_heartbeat_refreshed_auth_late_adopted"));
            },
            () => {},
          );
          let R = await kt(_, Math.min(be, this.heartbeatIntervalMs)),
            k;
          if (R === void 0)
            ((E = !0), (k = { adopted: !1, reason: "adopt_timeout" }));
          else k = R;
          if (
            (q("info", "cli_heartbeat_refreshed_auth_signal", {
              adopted: k.adopted,
              reason: k.reason,
              expires_in_seconds: o.data.refreshed_auth.expires_in_seconds,
            }),
            k.adopted)
          )
            (y("ccr_worker_auth_refresh"),
              (this.lastAuthRefreshBadReason = null));
          else if (
            k.reason &&
            k.reason !== "unchanged" &&
            k.reason !== this.lastAuthRefreshBadReason
          )
            ((this.lastAuthRefreshBadReason = k.reason),
              f("ccr_worker_auth_refresh", k.reason));
        } catch {
          if (this.lastAuthRefreshBadReason !== "adopt_threw")
            ((this.lastAuthRefreshBadReason = "adopt_threw"),
              f("ccr_worker_auth_refresh", "adopt_threw"));
          q("error", "cli_heartbeat_refreshed_auth_adopt_threw");
        }
      let d = o.data?.heartbeat_interval_seconds;
      if (typeof d !== "number" || !Number.isFinite(d) || d <= 0) {
        if (this.idleGrantLatched)
          this.armReactivationIfEarned(r, this.heartbeatIntervalMs / 1000);
        this.reclampCurrentIntervalToTokenLifetime();
        return;
      }
      if (this.advertiseHeartbeatProbeSupport) {
        let E = d * 1000 > this.seedHeartbeatIntervalMs;
        if (E) this.armReactivationIfEarned(r, d);
        else this.reactivationBeatArmed = !1;
        this.idleGrantLatched = E;
      }
      let p = this.clampToTokenLifetime(
        Math.min(Math.max(d * 1000, de), this.maxAdvisedIntervalMs),
      );
      if (p === this.heartbeatIntervalMs) return;
      if (
        (q("info", "cli_heartbeat_interval_updated", {
          from_ms: this.heartbeatIntervalMs,
          to_ms: p,
        }),
        p < this.heartbeatIntervalMs)
      )
        this.applyShorterIntervalNow(p);
      else this.heartbeatIntervalMs = p;
    } finally {
      if (
        ((this.heartbeatInFlight = !1), this.pendingForcedBeat && !this.closed)
      )
        ((this.pendingForcedBeat = !1), this.refireForcedBeat());
    }
  }
  reportDurableUpload(e, t) {
    if (this.onDurableEventsUpload === void 0) return;
    let r = e.filter((o) => !o.ephemeral);
    if (r.length === 0) return;
    try {
      this.onDurableEventsUpload(r, t);
    } catch (o) {
      n(
        `CCRClient: onDurableEventsUpload(${t}) threw; the batch's fate is unchanged: ${l(o)}`,
        { level: "warn" },
      );
    }
  }
  writeEvent(e) {
    return this.writeEvents([e]);
  }
  trackFirstFrameUpload(e) {
    let t = {};
    return ((this.firstFrameUpload = { uuid: e, timing: t }), t);
  }
  async writeEvents(e) {
    let t = [],
      r;
    for (let o of e) {
      if (
        (this.noSubscriberStreamEventFlushIntervalMs > 0 ||
          this.holdingUploads()) &&
        this.streamEventFlushIntervalMs > 0 &&
        pe(o)
      ) {
        this.bufferEphemeral(o);
        continue;
      }
      if (o.type === "stream_event") {
        if (
          ((this.streamedEphemeralSinceLastAssistant = !0),
          this.streamEventFlushIntervalMs <= 0)
        ) {
          if (Buffer.byteLength(b(o)) <= F)
            t.push({ payload: o, ephemeral: !0 });
          else g("ccr_partial_messages", "oversize_ephemeral_skipped");
          continue;
        }
        this.bufferEphemeral(o);
        continue;
      }
      if (this.streamEventTimer)
        ((r ??= this.streamEventBufferedAt),
          t.push(...this.takeStreamEventBuffer()));
      if (o.type === "assistant" && this.streamedEphemeralSinceLastAssistant)
        (y("ccr_partial_messages"),
          (this.streamedEphemeralSinceLastAssistant = !1));
      t.push(this.toClientEvent(o));
    }
    if (t.length > 0) {
      let o = this.holdingUploads() && !e.every(ft);
      if (o) this.internalEventUploader.release("event");
      await this.eventUploader.enqueue(
        t,
        o ? { release: "event" } : { since: r },
      );
    }
  }
  toClientEvent(e) {
    let t = e,
      r = t.historical === !0,
      o = pe(e),
      d =
        t.type === "user" && t.is_virtual !== !0
          ? this.uploadedToolResult(t.tool_use_result, t.message)
          : t.tool_use_result;
    return {
      payload: {
        ...t,
        ...(d !== t.tool_use_result && { tool_use_result: d }),
        uuid: typeof t.uuid === "string" ? t.uuid : oe(),
      },
      ...(r && { historical: !0 }),
      ...(o && { ephemeral: !0 }),
    };
  }
  uploadedToolResult(e, t) {
    let r = ie(e, this.currentUploadTrim(), t);
    if (r !== e && !this.loggedToolResultBlank)
      ((this.loggedToolResultBlank = !0), y("ccr_tool_result_blank"));
    return r;
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let t = X("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (t === this.noSubscriberStreamEventFlushIntervalMs) return;
    ((this.noSubscriberStreamEventFlushIntervalMs = t),
      this.setHasSubscribers(void 0, "reset"));
  }
  setNoSubscriberUploadHoldMs(e) {
    let t = X("noSubscriberUploadHoldMs", e, 0);
    if (t === this.noSubscriberUploadHoldMs) return;
    ((this.noSubscriberUploadHoldMs = t),
      this.setHasSubscribers(void 0, "reset"));
  }
  unwatched() {
    return (
      this.noSubscriberUploadHoldMs > 0 &&
      this.lastReportedHasSubscribers === !1
    );
  }
  holdingUploads() {
    return this.unwatched() && this.currentState === "running";
  }
  applyUploadHold(e) {
    let t = this.holdingUploads() ? this.noSubscriberUploadHoldMs : 0;
    (this.eventUploader.setHoldMs(t, e),
      this.internalEventUploader.setHoldMs(t, e));
  }
  logUploadHoldEnd(e, t, r, o) {
    y("ccr_no_subscriber_hold", {
      lane: u(e),
      reason: u(t),
      held_events: r,
      held_ms: o,
    });
  }
  logUndeliveredAtClose(e, t) {
    if (t > 0 && this.unwatched())
      g(
        "ccr_no_subscriber_hold",
        this.closingForSuccessor
          ? "undelivered_at_rebuild"
          : "undelivered_at_close",
        { lane: u(e), undelivered_events: t },
      );
  }
  bufferEphemeral(e) {
    if ((this.streamEventBuffer.push(e), !this.streamEventTimer))
      ((this.streamEventBufferedAt = Date.now()),
        (this.streamEventTimer = setTimeout(
          () => void this.flushStreamEventBuffer(),
          this.lastReportedHasSubscribers === !1
            ? Math.max(
                this.noSubscriberStreamEventFlushIntervalMs,
                this.noSubscriberUploadHoldMs,
                this.streamEventFlushIntervalMs,
              )
            : this.streamEventFlushIntervalMs,
        )));
  }
  setHasSubscribers(e, t) {
    this.hasSubscribersReports++;
    let r = typeof e === "boolean" ? e : void 0,
      o = this.lastReportedHasSubscribers;
    if (
      ((this.lastReportedHasSubscribers = r),
      o === !1 && r !== !1 && this.streamEventTimer)
    )
      this.flushStreamEventBuffer();
    this.applyUploadHold(r === !0 ? "watcher" : t);
  }
  async flushStreamEventBuffer() {
    let e = this.takeStreamEventBuffer();
    if (e.length > 0)
      await this.eventUploader.enqueue(e, {
        since: this.streamEventBufferedAt,
      });
  }
  takeStreamEventBuffer() {
    if (this.streamEventTimer)
      (clearTimeout(this.streamEventTimer), (this.streamEventTimer = null));
    if (this.streamEventBuffer.length === 0) return [];
    let e = [],
      t,
      r = 0;
    for (let E of this.streamEventBuffer) {
      if (E.type === "stream_event") {
        e.push(E);
        continue;
      }
      ((r =
        (t !== void 0 &&
        E.estimated_tokens - E.estimated_tokens_delta === t.estimated_tokens
          ? r
          : 0) + E.estimated_tokens_delta),
        (t = E));
    }
    this.streamEventBuffer = [];
    let p = re(e)
      .filter((E) => {
        if (Buffer.byteLength(b(E)) <= F) return !0;
        return (
          n(
            `CCRClient: dropping oversize ephemeral stream_event (>${F} bytes)`,
            { level: "warn" },
          ),
          g("ccr_partial_messages", "oversize_ephemeral_skipped"),
          !1
        );
      })
      .map((E) => ({ payload: E, ephemeral: !0 }));
    if (t) p.push(this.toClientEvent({ ...t, estimated_tokens_delta: r }));
    return p;
  }
  currentUploadTrim() {
    let e = this.uploadTrim();
    return me(e) ? e : le;
  }
  async writeInternalEvent(
    e,
    t,
    { isCompaction: r = !1, agentId: o, preservedEventIds: d } = {},
  ) {
    let p = d,
      E = ne(t);
    if (p && p.length > N)
      (i("tengu_ccr_preserved_event_ids_clamped", {
        originalCount: p.length,
        cap: N,
        payloadClamped: E !== null,
      }),
        (p = p.slice(-N)));
    let _ = E ?? t;
    if (this.currentUploadTrim().envelope === !0) {
      let M = GGn(_);
      if (M !== _ && !this.loggedTranscriptEnvelopeStrip)
        ((this.loggedTranscriptEnvelopeStrip = !0),
          y("ccr_worker_envelope_strip"));
      _ = M;
    }
    if (e === "transcript" && _.type === "user" && _.isVirtual !== !0) {
      let M = this.uploadedToolResult(_.toolUseResult, _.message);
      if (M !== _.toolUseResult) _ = { ..._, toolUseResult: M };
    }
    let R = {
        payload: {
          type: e,
          ..._,
          uuid: typeof _.uuid === "string" ? _.uuid : oe(),
        },
        ...(r && { is_compaction: !0 }),
        ...(o && { session_agent_id: o }),
        ...(p?.length && { preserved_event_ids: p }),
      },
      k = r && this.holdingUploads();
    if (k) this.eventUploader.release("event");
    await this.internalEventUploader.enqueue(
      R,
      k ? { release: "event" } : void 0,
    );
  }
  flushInternalEvents() {
    return this.internalEventUploader.flush();
  }
  async postInternalEventsBatch(e, t = {}) {
    let r = this.refuseInternalEventsCall(!0);
    if (r) return r;
    let o = this.epochMismatchCount;
    try {
      let d = await this.request(
        "post",
        "/worker/internal-events",
        { worker_epoch: this.workerEpoch, events: e },
        "internal events batch",
        { parseBody: !0, countTowardEscalation: !1, signal: t.signal },
      );
      if (d.ok) {
        let p = ot().safeParse(d.data);
        return { ok: !0, results: p.success ? p.data.results : void 0 };
      }
      return this.internalEventsFailure(d, o);
    } catch (d) {
      return this.internalEventsFailure({ reason: `fetch_failed:${j(d)}` }, o);
    }
  }
  async getInternalEventsPage(e, t = {}) {
    let r = this.refuseInternalEventsCall(!1);
    if (r) return r;
    let o = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
    if (e.limit !== void 0) o.searchParams.set("limit", String(e.limit));
    if (e.agentId) o.searchParams.set("session_agent_id", e.agentId);
    if (e.subagents) o.searchParams.set("subagents", "true");
    if (e.cursor) o.searchParams.set("cursor", e.cursor);
    else if (e.afterEventId)
      o.searchParams.set("after_event_id", e.afterEventId);
    let d = this.epochMismatchCount,
      p;
    try {
      let E = this.getAuthHeaders();
      if (Object.keys(E).length === 0)
        return { ok: !1, reason: "no_auth_headers" };
      p = t.signal ? Fa(t.signal, { timeoutMs: 30000, refTimer: !0 }) : void 0;
      let _ = await fetch(o, {
        headers: {
          ...E,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": Um(),
          "User-Agent": va(),
        },
        signal: p?.signal ?? AbortSignal.timeout(30000),
        ...As({ url: o.toString() }),
      });
      if (_.ok) {
        let T;
        try {
          T = await _.json();
        } catch (P) {
          if (!(P instanceof SyntaxError)) throw P;
        }
        let C = st().safeParse(T);
        if (!C.success)
          return (
            q("warn", "cli_worker_internal_events_page_foreign"),
            { ok: !1, status: _.status, reason: "foreign_body" }
          );
        let B = Number(_.headers.get("content-length") ?? Number.NaN);
        return {
          ok: !0,
          data: C.data.data,
          ...(C.data.next_cursor && { nextCursor: C.data.next_cursor }),
          bytes: Number.isFinite(B) ? B : null,
        };
      }
      let R, k, M, w;
      if (_.status === 409) {
        let T = await J(_);
        if (this.closed)
          w = T ?? this.lastEpochMismatchCause ?? "epoch_conflict";
        else
          try {
            this.handleEpochMismatch(T);
          } catch (C) {
            n(`CCRClient: onEpochMismatch threw during a page read: ${l(C)}`);
          }
      } else if (_.status === 404)
        try {
          let T = await _.json();
          if (typeof T?.error?.type === "string") R = T.error.type;
          if (typeof T?.error?.resource_type === "string")
            k = T.error.resource_type;
        } catch {}
      else {
        if (_.status === 429) {
          let T = parseInt(_.headers.get("retry-after") ?? "", 10);
          if (!isNaN(T) && T >= 0) M = T * 1000;
        }
        _.body?.cancel();
      }
      return (
        n(`CCRClient: internal events page returned ${_.status}`, {
          level: "warn",
        }),
        q("warn", "cli_worker_request_failed", {
          method: "get",
          path: "/worker/internal-events",
          status: _.status,
        }),
        this.internalEventsFailure(
          { status: _.status, retryAfterMs: M, reason: `http_${_.status}` },
          d,
          { errorType: R, resourceType: k, closedConflict: w },
        )
      );
    } catch (E) {
      return (
        n(`CCRClient: internal events page failed: ${l(E)}`, { level: "warn" }),
        this.internalEventsFailure({ reason: `fetch_failed:${j(E)}` }, d)
      );
    } finally {
      p?.cleanup();
    }
  }
  refuseInternalEventsCall(e) {
    if (this.closed)
      return {
        ok: !1,
        reason: "client_closed",
        ...(this.lastEpochMismatchCause && {
          conflict: this.lastEpochMismatchCause,
        }),
      };
    if (e && this.workerEpoch <= 0)
      return { ok: !1, reason: "not_initialized" };
    return;
  }
  internalEventsFailure(
    e,
    t,
    { errorType: r, resourceType: o, closedConflict: d } = {},
  ) {
    let p =
        d ??
        (this.epochMismatchCount > t
          ? this.lastEpochMismatchCause
          : e.status === 409
            ? (this.lastEpochMismatchCause ?? "epoch_conflict")
            : void 0),
      E = e.status ?? (p && Qe[p] ? 409 : void 0);
    return {
      ok: !1,
      reason: E === 409 ? "http_409" : (e.reason ?? "unknown"),
      ...(E !== void 0 && { status: E }),
      ...(e.retryAfterMs !== void 0 && { retryAfterMs: e.retryAfterMs }),
      ...(p && { conflict: p }),
      ...(r && { errorType: r }),
      ...(o && { resourceType: o }),
    };
  }
  droppedInternalEventBatches = 0;
  get droppedInternalBatches() {
    return this.droppedInternalEventBatches;
  }
  flushDeliveryAcks() {
    return this.deliveryUploader.flush();
  }
  async flush() {
    return (await this.flushStreamEventBuffer(), this.eventUploader.flush());
  }
  withdrawQueuedControlRequest(e) {
    return this.eventUploader.withdraw(
      (t) =>
        !t.ephemeral &&
        t.payload.type === "control_request" &&
        t.payload.request_id === e,
    );
  }
  droppedDurableEventBatches = 0;
  get droppedDurableBatches() {
    return this.droppedDurableEventBatches;
  }
  takeUndeliveredClientEvents() {
    return this.eventUploader.takeUndelivered().filter((e) => !e.ephemeral);
  }
  discardUndeliveredClientEvents() {
    let e = this.eventUploader.peekUndelivered().filter((t) => !t.ephemeral);
    return (this.eventUploader.discardUndelivered(), e);
  }
  adoptClientEvents(e) {
    if (e.length === 0) return;
    this.eventUploader.enqueue(e);
  }
  async flushWorkerState() {
    return this.workerState.flush();
  }
  droppedWorkerStatePatchCount = 0;
  get droppedWorkerStatePatches() {
    return this.droppedWorkerStatePatchCount;
  }
  async readInternalEvents(e) {
    return pM.readInternalEventsFrom(this.readSource, e);
  }
  static readInternalEventsFrom(e, t) {
    return pM.paginatedGet(
      e,
      "/worker/internal-events",
      { limit: "1000", ...(t && { after_event_id: t }) },
      "internal_events",
    );
  }
  async readSubagentInternalEvents() {
    return pM.readSubagentInternalEventsFrom(this.readSource);
  }
  static readSubagentInternalEventsFrom(e) {
    return pM.paginatedGet(
      e,
      "/worker/internal-events",
      { subagents: "true", limit: "1000" },
      "subagent_events",
    );
  }
  async readAgentInternalEvents(e, t) {
    return pM.paginatedGet(
      this.readSource,
      "/worker/internal-events",
      { session_agent_id: e, limit: "1000" },
      "agent_events",
      { maxAttempts: et, signal: t },
    );
  }
  static async paginatedGet(e, t, r, o, d = {}) {
    let p = e.getAuthHeaders();
    if (Object.keys(p).length === 0) return null;
    let E = [],
      _,
      R = 0,
      k = 0,
      M = null;
    do {
      let w = new URL(`${e.sessionBaseUrl}${t}`);
      for (let [P, I] of Object.entries(r)) w.searchParams.set(P, I);
      if (_)
        (w.searchParams.set("cursor", _),
          w.searchParams.delete("after_event_id"));
      let T = !_ && r.after_event_id !== void 0,
        C,
        B = await pM.getWithRetry(
          e,
          w.toString(),
          p,
          o,
          (P) => {
            (R++, (M ??= P.headers.get("content-encoding")));
            let I = P.headers.get("content-length");
            if (I !== null && k !== null) k += Number(I);
            else k = null;
          },
          (P, I) => {
            if (!T) return;
            if (P === 400) C = "rejected";
            else if (I === "after_event_id_not_found") C = "not-found";
          },
          d,
        );
      if (!B) {
        if (C) {
          (n(
            `CCRClient: after_event_id ${C === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`,
            { level: "warn" },
          ),
            q(
              "warn",
              C === "rejected"
                ? "cli_worker_after_event_id_rejected"
                : "cli_worker_after_event_id_not_found",
              { context: o },
            ));
          let { after_event_id: P, ...I } = r,
            D = await pM.paginatedGet(e, t, I, o, d);
          if (!D) return null;
          return { ...D, anchorFallback: C };
        }
        return null;
      }
      for (let P of B.data ?? []) if (!Dzn(P.payload)) E.push(P);
      _ = B.next_cursor;
    } while (_);
    return (
      n(
        `CCRClient: Read ${E.length} internal events from ${t}${r.subagents ? " (subagents)" : ""}`,
      ),
      {
        events: E,
        stats: { pageCount: R, bytesReceived: k, contentEncoding: M ?? "none" },
      }
    );
  }
  static async getWithRetry(
    e,
    t,
    r,
    o,
    d,
    p,
    { maxAttempts: E = Ze, signal: _ } = {},
  ) {
    for (let R = 1; R <= E; R++) {
      if (_?.aborted) return null;
      let k;
      try {
        if (
          ((k = await fetch(t, {
            headers: {
              ...r,
              "anthropic-version": "2023-06-01",
              "anthropic-client-platform": Um(),
              "User-Agent": va(),
            },
            signal: _
              ? AbortSignal.any([AbortSignal.timeout(30000), _])
              : AbortSignal.timeout(30000),
            ...As({ url: t }),
          })),
          k.ok)
        ) {
          let w = await k.json();
          return (d?.(k), w);
        }
      } catch (w) {
        if (_?.aborted) return null;
        if (
          (n(`CCRClient: GET ${t} failed (attempt ${R}/${E}): ${l(w)}`, {
            level: "warn",
          }),
          R < E)
        ) {
          let T = Math.min(500 * 2 ** (R - 1), 30000) + Math.random() * 500;
          await Z(T, _);
        }
        continue;
      }
      let M;
      if (k.status === 404 && p)
        try {
          let w = await k.json();
          if (typeof w?.error?.type === "string") M = w.error.type;
        } catch {}
      else if (k.status === 409) {
        if (e.isClosed?.()) return (await bF(k), null);
        let w = await J(k);
        if (!e.isClosed?.()) e.onConflict?.(w);
        return null;
      } else await bF(k);
      if (U(k.status) || M === "after_event_id_not_found")
        return (
          n(
            `CCRClient: GET ${t} returned ${k.status} \u2014 permanent, not retrying`,
            { level: "warn" },
          ),
          p?.(k.status, M),
          null
        );
      if (
        (n(`CCRClient: GET ${t} returned ${k.status} (attempt ${R}/${E})`, {
          level: "warn",
        }),
        R < E)
      ) {
        let w = Math.min(500 * 2 ** (R - 1), 30000) + Math.random() * 500;
        await Z(w, _);
      }
    }
    return (
      n("CCRClient: GET retries exhausted", { level: "error" }),
      q("error", "cli_worker_get_retries_exhausted", { context: o }),
      null
    );
  }
  reportDelivery(e, t) {
    if (t === "received") this.setHasSubscribers(void 0, "watcher");
    if (t === "processing") {
      if (this.closed) return;
      if (this.pendingProcessingAcks.push(e) === 1)
        queueMicrotask(() => {
          let r = this.pendingProcessingAcks;
          if (
            ((this.pendingProcessingAcks = []), this.closed || r.length === 0)
          )
            return;
          this.request(
            "post",
            "/worker/events/delivery",
            {
              worker_epoch: this.workerEpoch,
              updates: r.map((o) => ({ event_id: o, status: "processing" })),
            },
            "processing ack",
          );
        });
      return;
    }
    this.deliveryUploader.enqueue({ eventId: e, status: t });
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount;
  }
  close(e) {
    (this.closeExceptInternalEvents(e),
      this.logUndeliveredAtClose(
        "internal_events",
        this.internalEventUploader.close(),
      ));
  }
  flushGoodbye() {
    return this.goodbyeFlushed;
  }
  closeExceptInternalEvents(e) {
    let t = this.closed;
    if (
      ((this.closed = !0),
      (this.closingForSuccessor = e?.retainUndeliveredClientEvents === !0),
      !t && e?.goodbye !== !1)
    )
      this.sendGoodbye();
    if (
      (this.stopHeartbeat(),
      this.clearProbeBeatTimer(),
      this.unsubscribeIdleTracker?.(),
      Unr(),
      this.streamEventTimer)
    )
      (clearTimeout(this.streamEventTimer), (this.streamEventTimer = null));
    ((this.streamEventBuffer = []),
      (this.pendingProcessingAcks = []),
      this.workerState.close(),
      this.logUndeliveredAtClose(
        "client_events",
        this.eventUploader.close({
          retainUndelivered: e?.retainUndeliveredClientEvents === !0,
        }),
      ),
      this.deliveryUploader.close());
  }
  registerShutdownCleanup(
    e = { registerCleanup: Et, registerPreExitFlush: dv },
  ) {
    (e.registerCleanup(() => this.closeExceptInternalEvents()),
      e.registerPreExitFlush(async () => {
        await this.flushGoodbye();
        try {
          await kt(this.flushInternalEvents(), ut);
        } finally {
          (this.close(), this.onInternalEventLaneClosed?.());
        }
      }));
  }
}
var ut = 3000;
function ht(e) {
  let t = e.post_turn_summary;
  if (!pt(t) || t.status_category !== "blocked") return e;
  return { ...e, post_turn_summary: { ...t, status_category: "need_input" } };
}
function pt(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "status_category" in e &&
    typeof e.status_category === "string"
  );
}
async function J(e) {
  let t = Q(e.headers.get("x-ccr-conflict-reason"));
  if (t !== void 0) return (await bF(e), t);
  try {
    let r = await e.json();
    return Q(r?.error?.reason ?? r?.reason) ?? Q(r?.error?.type);
  } catch {}
  return;
}
function Q(e) {
  switch (e) {
    case "superseded_by_worker":
    case "epoch_stale":
    case "session_not_active":
      return e;
    default:
      return;
  }
}
function X(e, t, r) {
  let o = typeof t === "string" ? Number(t) : t;
  if (typeof o === "number" && Number.isFinite(o))
    return Math.min(Math.max(o, 0), 60000);
  if (t !== void 0)
    n(`CCRClient: non-finite ${e} (${typeof t}) \u2014 using ${r}ms`, {
      level: "warn",
    });
  return r;
}
function pe(e) {
  return (
    e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens"
  );
}
function ft(e) {
  switch (e.type) {
    case "user":
    case "stream_event":
    case "tool_progress":
      return !0;
    case "assistant":
      return !e.message.content.some(
        (t) =>
          t.type === "tool_use" &&
          (t.name === "SendUserMessage" || t.name === "PushNotification"),
      );
    case "system":
      return (
        "subtype" in e &&
        (e.subtype === "thinking_tokens" ||
          e.subtype === "task_progress" ||
          e.subtype === "hook_progress")
      );
    default:
      return !1;
  }
}
function vt(e) {
  return "";
}
function mt(e) {
  return;
}
function rdt(e) {
  let t = e?.isTurnRunning ?? (() => ase() > 0),
    r = Le(),
    o = Date.now();
  return {
    noteActivity() {
      o = Date.now();
      try {
        r.emit();
      } catch (d) {
        h(d);
      }
    },
    sampleIdleSeconds() {
      let d = Date.now();
      if (t()) return ((o = d), 0);
      return Math.max(0, Math.floor((d - o) / 1000));
    },
    onActivity: r.subscribe,
  };
}
export { asn, VGe, KGe, sbe, Jjn, Qjn, lsn, csn, pM, rdt };

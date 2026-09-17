// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { fileSuffixForOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { fromEnum, fromEnumOpt, fromNumber, fromNumberOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { BASH_TOOL_NAME, onGrowthBookRefresh } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { antEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { registerCleanup, jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { hashStringWithBun, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { toInfraSessionId, sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { subscribeComplianceTaints } from "../../01-核心基础设施/共享小工具-未细化/compliance-taints-store.js";
import { getWebSocketTLSOptions, getWebSocketProxyUrl } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { isAllowedBridgeWsUrl } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { isViolinWoodEnabled, isViolinWoodServedOff } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import {
  isSessionChannelDisabled,
  isRemoteToolServingMuted,
  onServingMuteRecheck,
  remoteToolServingOffReason,
  HEARTBEAT_FRAME,
  HANDSHAKE_TIMEOUT_MS,
  MAX_RECONNECT_ATTEMPTS,
  STABLE_MARK_DELAY_MS,
  SUPERSEDED_CLOSE_CODE,
  REANNOUNCE_DELAY_MS,
  DEFAULT_BRIDGE_TIMINGS,
  isSlotContentionReason,
  TOOL_ANNOTATION_KEYS,
  buildConnectFrame,
  parseBridgeFrame,
  computeBridgeTimers,
  computeReconnectDelayMs,
  toSlug,
  sanitizeDeviceName,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { CURRENT_PROTOCOL_VERSION, REMOTE_TOOL_EXECUTION_META_KEY, parseToolDescriptor } from "../远程工具执行/remote-tool-protocol.js";
import { DEVICE_PASSTHROUGH_META_KEY, parseDevicePassthroughMeta } from "../../01-核心基础设施/共享小工具-未细化/device-passthrough-meta.js";
import { NOT_HELD_STATE } from "../../01-核心基础设施/共享小工具-未细化/chunk-hkdjw6ht.js";
import { resolveAccountIdentity, isEgressAllowed } from "../../01-核心基础设施/共享小工具-未细化/chunk-d4kaq0ds.js";
import { s, T, Jq, c, $e, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { hostname } from "os";
class se {
  transport;
  announced;
  now;
  random;
  onEvent;
  onTransportEvent;
  started = !1;
  stopping = !1;
  timers = computeBridgeTimers(DEFAULT_BRIDGE_TIMINGS);
  lastAckAt = 0;
  reconnectAttempts = 0;
  consecutiveSlotContention = 0;
  lastFailureWasContention = !1;
  contentionBackoffNotified = !1;
  consecutivePongTimeouts = 0;
  keepaliveTimer;
  reconnectTimer;
  stableTimer;
  reannounce = { phase: "idle" };
  constructor(e) {
    ((this.transport = e.transport),
      (this.announced = e.announced),
      (this.onEvent = e.onEvent),
      (this.onTransportEvent = e.onTransportEvent),
      (this.now = e.now ?? Date.now),
      (this.random = e.random ?? Math.random),
      (this.transport.onevent = this.handleTransportEvent));
  }
  start() {
    if (this.started) return;
    ((this.started = !0), this.openConnection());
  }
  async stop() {
    ((this.stopping = !0),
      this.clearReconnectTimer(),
      this.clearConnectionTimers(),
      this.cancelReannounce(),
      await this.transport.close());
  }
  requestReannounce(e) {
    if (!this.started || this.stopping) return;
    let t = REANNOUNCE_DELAY_MS[e];
    switch (this.reannounce.phase) {
      case "draining":
      case "rotating":
        return;
      case "coalescing":
        if (this.reannounce.fireAt <= this.now() + t) return;
        clearTimeout(this.reannounce.timer);
        break;
      case "idle":
        break;
    }
    this.reannounce = {
      phase: "coalescing",
      reason: e,
      fireAt: this.now() + t,
      timer: setTimeout(this.beginReannounce, t),
    };
  }
  getReconnectAttempts() {
    return this.reconnectAttempts;
  }
  getConsecutiveSlotContention() {
    return this.consecutiveSlotContention;
  }
  getConsecutivePongTimeouts() {
    return this.consecutivePongTimeouts;
  }
  handleTransportEvent = (e) => {
    switch ((this.notifyTransportListener(e), e.kind)) {
      case "authenticated":
        this.handleAuthenticated(e.protocolVersion, e.timings);
        return;
      case "hb_ack":
        this.handleAck();
        return;
      case "rejected": {
        let t = this.endRotation(),
          o = t !== void 0 && e.reason === "duplicate_device_id";
        if (o) this.emit({ kind: "reannounce_contended", reason: t });
        else if (e.slotContention) this.lastFailureWasContention = !0;
        (this.cancelDrain(),
          this.clearConnectionTimers(),
          this.scheduleReconnect(o));
        return;
      }
      case "closed":
        if (e.superseded) this.lastFailureWasContention = !0;
        (this.endRotation(),
          this.cancelDrain(),
          this.clearConnectionTimers(),
          this.scheduleReconnect());
        return;
      case "handshake_timeout":
      case "dial_failed":
      case "token_unavailable":
        (this.endRotation(),
          this.cancelDrain(),
          this.clearConnectionTimers(),
          this.scheduleReconnect());
        return;
      case "transport_closed":
        ((this.stopping = !0),
          this.clearReconnectTimer(),
          this.clearConnectionTimers(),
          this.cancelReannounce());
        return;
      case "connecting":
      case "socket_error":
      case "inbound_unknown":
      case "inbound_invalid":
      case "outbound_dropped":
        return;
    }
  };
  async openConnection() {
    if (this.stopping) return;
    try {
      await this.transport.openConnection();
    } catch (e) {
      (logForDebugging(`[deviceBridge] open connection failed: ${ge(e).message}`),
        this.endRotation(),
        this.scheduleReconnect());
    }
  }
  handleAuthenticated(e, t) {
    if (this.stopping) return;
    if (
      ((this.timers = computeBridgeTimers(t)),
      (this.lastAckAt = this.now()),
      this.clearKeepaliveTimer(),
      this.endRotation() === void 0 || this.stableTimer === void 0)
    )
      (this.clearStableTimer(),
        (this.stableTimer = setTimeout(this.markStable, STABLE_MARK_DELAY_MS)));
    if (this.announced.hasUnservedChange())
      this.requestReannounce("connected_stale");
    if (e < 1) {
      ((this.consecutivePongTimeouts = 0),
        this.emit({ kind: "heartbeat_unsupported", protocolVersion: e }));
      return;
    }
    ((this.keepaliveTimer = setInterval(
      this.keepaliveTick,
      this.timers.keepaliveIntervalMs,
    )),
      this.sendHeartbeat());
  }
  handleAck() {
    if (((this.lastAckAt = this.now()), this.consecutivePongTimeouts > 0))
      ((this.consecutivePongTimeouts = 0), (this.reconnectAttempts = 0));
  }
  keepaliveTick = () => {
    if (!this.transport.isAuthenticated()) return;
    if (this.now() - this.lastAckAt > this.timers.pongTimeoutMs) {
      (this.consecutivePongTimeouts++,
        this.emit({
          kind: "pong_timeout",
          consecutive: this.consecutivePongTimeouts,
        }),
        this.cancelDrain(),
        this.clearConnectionTimers(),
        this.transport.disconnect(),
        this.scheduleReconnect());
      return;
    }
    this.sendHeartbeat();
  };
  sendHeartbeat() {
    this.transport.sendRaw(HEARTBEAT_FRAME);
  }
  markStable = () => {
    if (
      ((this.stableTimer = void 0),
      (this.consecutiveSlotContention = 0),
      (this.contentionBackoffNotified = !1),
      this.consecutivePongTimeouts === 0)
    )
      this.reconnectAttempts = 0;
    this.emit({ kind: "stabilized" });
  };
  scheduleReconnect(e = !1) {
    if (this.stopping || !this.started || this.reconnectTimer !== void 0)
      return;
    let t = this.nextDelayMs(e);
    if (this.stopping) return;
    ((this.reconnectTimer = setTimeout(this.reconnect, t)),
      this.emit({
        kind: "reconnect_scheduled",
        delayMs: t,
        attempt: this.reconnectAttempts,
        slotContention: this.consecutiveSlotContention > 0,
      }));
  }
  nextDelayMs(e) {
    let t = this.lastFailureWasContention;
    if (((this.lastFailureWasContention = !1), e))
      return computeReconnectDelayMs(0, 1, this.timers.slotContentionFastAttempts, this.random);
    if (t) {
      if (
        (this.consecutiveSlotContention++,
        this.consecutiveSlotContention >
          this.timers.slotContentionFastAttempts &&
          !this.contentionBackoffNotified)
      )
        ((this.contentionBackoffNotified = !0),
          this.emit({
            kind: "slot_contention_backoff",
            consecutive: this.consecutiveSlotContention,
          }));
      return computeReconnectDelayMs(
        0,
        this.consecutiveSlotContention,
        this.timers.slotContentionFastAttempts,
        this.random,
      );
    }
    if (
      ((this.consecutiveSlotContention = 0),
      (this.contentionBackoffNotified = !1),
      this.reconnectAttempts >= MAX_RECONNECT_ATTEMPTS)
    ) {
      ((this.reconnectAttempts = 0),
        this.emit({ kind: "reconnect_exhausted" }));
      try {
        this.transport.onerror?.(Error("Bridge unreachable"));
      } catch (r) {
        logForDebugging(`[deviceBridge] transport onerror listener threw: ${ge(r).message}`);
      }
    }
    let o = computeReconnectDelayMs(
      this.reconnectAttempts,
      0,
      this.timers.slotContentionFastAttempts,
      this.random,
    );
    return (this.reconnectAttempts++, o);
  }
  reconnect = () => {
    ((this.reconnectTimer = void 0), this.openConnection());
  };
  beginReannounce = () => {
    if (this.reannounce.phase !== "coalescing") return;
    let { reason: e } = this.reannounce;
    if (((this.reannounce = { phase: "idle" }), this.stopping)) return;
    let t = this.announced.inFlightCalls(),
      o = this.reannounceSkipOutcome();
    if (o !== void 0) {
      this.emit({
        kind: "reannounce",
        reason: e,
        outcome: o,
        inFlightAtStart: t,
        drainedMs: 0,
        drainTimedOut: !1,
      });
      return;
    }
    let r = {
      phase: "draining",
      reason: e,
      startedAt: this.now(),
      inFlightAtStart: t,
      timer: setTimeout(this.handleDrainTimeout, this.timers.rotateDrainMaxMs),
    };
    ((this.reannounce = r),
      this.announced.whenIdle().then(
        () => this.rotate(r, !1),
        () => this.rotate(r, !1),
      ));
  };
  handleDrainTimeout = () => {
    if (this.reannounce.phase === "draining") this.rotate(this.reannounce, !0);
  };
  rotate(e, t) {
    if (this.reannounce !== e) return;
    if (
      (clearTimeout(e.timer),
      (this.reannounce = { phase: "idle" }),
      this.stopping)
    )
      return;
    let o = this.reannounceSkipOutcome() ?? "rotated";
    if (o === "rotated")
      this.reannounce = { phase: "rotating", reason: e.reason };
    if (
      (this.emit({
        kind: "reannounce",
        reason: e.reason,
        outcome: o,
        inFlightAtStart: e.inFlightAtStart,
        drainedMs: this.now() - e.startedAt,
        drainTimedOut: t,
      }),
      this.reannounce.phase !== "rotating" || this.stopping)
    )
      return;
    (this.clearKeepaliveTimer(),
      this.transport.disconnect(),
      this.openConnection());
  }
  reannounceSkipOutcome() {
    if (!this.announced.hasUnservedChange()) return "already_served";
    if (!this.transport.isAuthenticated()) return "not_connected";
    return;
  }
  endRotation() {
    if (this.reannounce.phase !== "rotating") return;
    let { reason: e } = this.reannounce;
    return ((this.reannounce = { phase: "idle" }), e);
  }
  cancelDrain() {
    if (this.reannounce.phase !== "draining") return;
    let e = this.reannounce;
    (clearTimeout(e.timer),
      (this.reannounce = { phase: "idle" }),
      this.emit({
        kind: "reannounce",
        reason: e.reason,
        outcome: "not_connected",
        inFlightAtStart: e.inFlightAtStart,
        drainedMs: this.now() - e.startedAt,
        drainTimedOut: !1,
      }));
  }
  cancelReannounce() {
    switch (this.reannounce.phase) {
      case "coalescing":
      case "draining":
        clearTimeout(this.reannounce.timer);
        break;
      case "rotating":
      case "idle":
        break;
    }
    this.reannounce = { phase: "idle" };
  }
  emit(e) {
    try {
      this.onEvent?.(e);
    } catch (t) {
      logForDebugging(`[deviceBridge] liveness event listener threw: ${ge(t).message}`);
    }
  }
  notifyTransportListener(e) {
    try {
      this.onTransportEvent?.(e);
    } catch (t) {
      logForDebugging(`[deviceBridge] transport event listener threw: ${ge(t).message}`);
    }
  }
  clearReconnectTimer() {
    if (this.reconnectTimer === void 0) return;
    (clearTimeout(this.reconnectTimer), (this.reconnectTimer = void 0));
  }
  clearConnectionTimers() {
    (this.clearKeepaliveTimer(), this.clearStableTimer());
  }
  clearKeepaliveTimer() {
    if (this.keepaliveTimer !== void 0)
      (clearInterval(this.keepaliveTimer), (this.keepaliveTimer = void 0));
  }
  clearStableTimer() {
    if (this.stableTimer !== void 0)
      (clearTimeout(this.stableTimer), (this.stableTimer = void 0));
  }
}
var Te = 4;
function _e(e) {
  let t = 0;
  return {
    limit: e,
    tryAcquire() {
      if (t >= e) return;
      t++;
      let o = !1;
      return () => {
        if (!o) ((o = !0), t--);
      };
    },
  };
}
function ye() {
  let e = new Map(),
    t,
    o = Le(),
    r = ae(e, t),
    a,
    l = (p) => {
      let v = ae(e, t),
        C = r;
      if (((r = v), v.hash === C.hash)) return;
      try {
        o.emit(p);
      } catch (S) {
        for (let _ of S instanceof AggregateError ? S.errors : [S]) logError(_);
      }
    };
  return {
    get: (p) => r.byName.get(p),
    setGroup(p, v, C = "tools_changed") {
      e.set(p, [...v]);
      let S = ae(e, t),
        _ = r;
      if (((r = S), S.dropped.length > 0 && jsonStringify(S.dropped) !== jsonStringify(_.dropped)))
        logForDebugging(
          `[deviceBridge] duplicate device tool names not announced: ${jsonStringify(S.dropped)}`,
        );
      if (S.hash === _.hash) return;
      try {
        o.emit(C);
      } catch (A) {
        for (let L of A instanceof AggregateError ? A.errors : [A]) logError(L);
      }
    },
    definitions: () => r.definitions,
    definitionsOf: (p) =>
      (e.get(p) ?? []).flatMap((v) =>
        r.byName.get(v.definition.name) === v ? [v.definition] : [],
      ),
    serve() {
      return ((a = r.hash), r.definitions);
    },
    hasUnservedChange: () => a !== r.hash,
    subscribe: o.subscribe,
    withholdAllExcept(p, v) {
      ((t = v ? new Set(p) : void 0), l("tools_changed"));
    },
  };
}
function ae(e, t) {
  let { byName: o, dropped: r } = [...e.entries()]
      .flatMap(([l, p]) => (t === void 0 || t.has(l) ? p : []))
      .reduce(
        (l, p) => {
          let v = p.definition.name;
          if (l.byName.has(v)) l.dropped.push(v);
          else l.byName.set(v, p);
          return l;
        },
        { byName: new Map(), dropped: [] },
      ),
    a = [...o.values()].map((l) => l.definition);
  return { byName: o, definitions: a, dropped: r, hash: hashStringWithBun(jsonStringify(a)) };
}
var He = 0,
  ne = 1,
  ze = -32603,
  ke = Symbol("device-bridge-token-deadline"),
  Se = "__synthetic_init__",
  te = 33554432;
function Ke(e) {
  let t = new globalThis.WebSocket(e, { proxy: getWebSocketProxyUrl(e), tls: getWebSocketTLSOptions() || void 0 });
  return ((t.binaryType = "arraybuffer"), t);
}
class ce {
  options;
  onclose;
  onerror;
  onmessage;
  onevent;
  started = !1;
  closing = !1;
  ws;
  pendingToken;
  authenticated = !1;
  connectGeneration = 0;
  handshakeTimer;
  negotiated;
  constructor(e) {
    this.options = e;
  }
  async start() {
    if (this.started)
      throw Error("DeviceBridgeTransport start can only be called once.");
    this.started = !0;
  }
  async close() {
    if (this.closing) return;
    ((this.closing = !0),
      this.disconnect(),
      this.emit({ kind: "transport_closed" }),
      this.onclose?.());
  }
  async send(e) {
    if (Je(e)) return;
    let t = this.ws;
    if (!t || !this.authenticated || t.readyState !== ne) {
      this.emit({
        kind: "outbound_dropped",
        messageType: de(e) === void 0 ? "other" : "request",
      });
      return;
    }
    try {
      t.send(jsonStringify(e));
    } catch (o) {
      (logForDebugging(`[deviceBridge] outbound send failed: ${ge(o).message}`),
        this.emit({
          kind: "outbound_dropped",
          messageType: de(e) === void 0 ? "other" : "request",
        }));
    }
  }
  sendRaw(e) {
    let t = this.ws;
    if (!t || t.readyState !== ne) return !1;
    try {
      t.send(e);
    } catch (o) {
      return (logForDebugging(`[deviceBridge] raw send failed: ${ge(o).message}`), !1);
    }
    return !0;
  }
  isAuthenticated() {
    return this.authenticated;
  }
  isConnected() {
    return this.ws !== void 0;
  }
  getNegotiated() {
    return this.negotiated;
  }
  async openConnection() {
    if (this.closing || this.ws) return;
    let e = ++this.connectGeneration,
      t = await this.resolveAccessToken();
    if (e !== this.connectGeneration || this.closing || this.ws !== void 0)
      return;
    if (!t) {
      this.emit({ kind: "token_unavailable" });
      return;
    }
    let o, r;
    try {
      ((o = this.options.getUrl()),
        (r = (this.options.isAllowedUrl ?? isAllowedBridgeWsUrl)(o)));
    } catch (l) {
      this.emit({ kind: "dial_failed", error: ge(l) });
      return;
    }
    if (!r) {
      (logForDebugging("[deviceBridge] refusing dial: bridge URL failed validation"),
        this.emit({
          kind: "dial_failed",
          error: Error("bridge URL failed validation"),
        }));
      return;
    }
    let a;
    try {
      a = (this.options.createSocket ?? Ke)(o);
    } catch (l) {
      this.emit({ kind: "dial_failed", error: ge(l) });
      return;
    }
    if (
      ((this.ws = a),
      (this.pendingToken = t),
      (this.handshakeTimer = setTimeout(this.handleHandshakeTimeout, HANDSHAKE_TIMEOUT_MS)),
      a.addEventListener("open", this.handleOpen),
      a.addEventListener("message", this.handleMessage),
      a.addEventListener("close", this.handleClose),
      a.addEventListener("error", this.handleSocketError),
      this.emit({ kind: "connecting" }),
      this.closing || this.ws !== a)
    )
      return;
    if (a.readyState === ne) this.handleOpen();
  }
  async resolveAccessToken() {
    let e;
    try {
      let t = await Promise.race([
        Promise.resolve(this.options.getAccessToken()),
        new Promise((o) => {
          e = setTimeout((r) => r(ke), HANDSHAKE_TIMEOUT_MS, o);
        }),
      ]);
      if (t === ke) {
        logForDebugging("[deviceBridge] access token resolution timed out");
        return;
      }
      return t;
    } catch (t) {
      logForDebugging(`[deviceBridge] access token resolution failed: ${ge(t).message}`);
      return;
    } finally {
      if (e !== void 0) clearTimeout(e);
    }
  }
  disconnect() {
    (this.connectGeneration++,
      this.clearHandshakeTimer(),
      (this.pendingToken = void 0),
      (this.authenticated = !1),
      (this.negotiated = void 0));
    let e = this.ws;
    if (!e) return;
    if (
      ((this.ws = void 0),
      e.removeEventListener("open", this.handleOpen),
      e.removeEventListener("message", this.handleMessage),
      e.removeEventListener("close", this.handleClose),
      e.removeEventListener("error", this.handleSocketError),
      e.readyState === ne || e.readyState === He)
    )
      try {
        e.close();
      } catch (t) {
        logForDebugging(`[deviceBridge] socket close failed: ${ge(t).message}`);
      }
  }
  emit(e) {
    try {
      this.onevent?.(e);
    } catch (t) {
      logForDebugging(`[deviceBridge] transport event listener threw: ${ge(t).message}`);
    }
  }
  clearHandshakeTimer() {
    if (this.handshakeTimer === void 0) return;
    (clearTimeout(this.handshakeTimer), (this.handshakeTimer = void 0));
  }
  handleHandshakeTimeout = () => {
    if (((this.handshakeTimer = void 0), !this.ws || this.authenticated))
      return;
    (this.disconnect(), this.emit({ kind: "handshake_timeout" }));
  };
  handleOpen = () => {
    let e = this.ws,
      t = this.pendingToken;
    if (!e || t === void 0) return;
    this.pendingToken = void 0;
    try {
      e.send(
        jsonStringify(
          buildConnectFrame({
            oauthToken: t,
            tools: this.options.getTools(),
            deviceId: this.options.getDeviceId?.(),
            sessionId: this.options.getSessionId(),
          }),
        ),
      );
    } catch (o) {
      (this.disconnect(), this.emit({ kind: "dial_failed", error: ge(o) }));
    }
  };
  handleMessage = (e) => {
    let t = Xe(e.data);
    if (t.kind === "unsupported") {
      (logForDebugging("[deviceBridge] dropping unsupported inbound payload type"),
        this.emit({
          kind: "inbound_invalid",
          error: Error("unsupported inbound payload type"),
        }));
      return;
    }
    if (t.kind === "oversize") {
      (logForDebugging(`[deviceBridge] dropping ${t.size}-unit inbound frame (cap ${te})`),
        this.emit({
          kind: "inbound_invalid",
          error: Error("inbound frame exceeded the device bridge size cap"),
        }));
      return;
    }
    let o = parseBridgeFrame(t.text);
    switch (o.kind) {
      case "ignored":
        if (this.authenticated)
          (logForDebugging("[deviceBridge] dropping unparseable inbound frame"),
            this.emit({
              kind: "inbound_invalid",
              error: Error("unparseable inbound frame"),
            }));
        return;
      case "hb_ack":
        this.emit({ kind: "hb_ack" });
        return;
      case "error":
        this.handleReject(o.reason, o.status, o.detail);
        return;
      case "connected":
        this.authenticate(o.protocolVersion, o.timings);
        return;
      case "unknown":
        this.emit({ kind: "inbound_unknown", frameType: o.frameType });
        return;
      case "rpc":
        this.deliver(o.message);
        return;
    }
  };
  authenticate(e, t) {
    if (this.authenticated) return;
    if (
      (this.clearHandshakeTimer(),
      (this.authenticated = !0),
      (this.negotiated = { protocolVersion: e, timings: t }),
      this.emit({ kind: "authenticated", protocolVersion: e, timings: t }),
      this.closing || this.ws === void 0)
    )
      return;
    this.injectSyntheticInitialize();
  }
  injectSyntheticInitialize() {
    let e;
    try {
      e = this.options.parseMessage(Ve());
    } catch (t) {
      this.emit({ kind: "inbound_invalid", error: ge(t) });
      return;
    }
    try {
      this.onmessage?.(e);
    } catch (t) {
      this.emit({ kind: "inbound_invalid", error: ge(t) });
    }
  }
  handleReject(e, t, o) {
    let r = !this.authenticated;
    (this.disconnect(),
      this.emit({
        kind: "rejected",
        phase: r ? "pre_auth" : "post_auth",
        reason: e,
        status: t,
        detail: o,
        slotContention: r && isSlotContentionReason(e),
      }));
  }
  deliver(e) {
    if (!this.authenticated) return;
    let t;
    try {
      t = this.options.parseMessage(e);
    } catch (o) {
      (this.emit({ kind: "inbound_invalid", error: ge(o) }),
        this.replyInternalError(e));
      return;
    }
    try {
      this.onmessage?.(t);
    } catch (o) {
      (this.emit({ kind: "inbound_invalid", error: ge(o) }),
        this.replyInternalError(e));
    }
  }
  replyInternalError(e) {
    let t = de(e);
    if (t === void 0) return;
    this.sendRaw(
      jsonStringify({
        jsonrpc: "2.0",
        id: t,
        error: { code: ze, message: "internal error" },
      }),
    );
  }
  handleClose = (e) => {
    let t = this.authenticated ? "post_auth" : "pre_auth",
      o = typeof e.code === "number" ? e.code : void 0,
      r = typeof e.reason === "string" ? e.reason : void 0;
    (this.disconnect(),
      this.emit({
        kind: "closed",
        phase: t,
        code: o,
        reason: r,
        superseded: o === SUPERSEDED_CLOSE_CODE,
      }));
  };
  handleSocketError = () => {
    this.emit({ kind: "socket_error" });
  };
}
function Ve() {
  return {
    jsonrpc: "2.0",
    id: Se,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: { name: "remote-tools-bridge", version: "1.0.0" },
    },
  };
}
function Je(e) {
  return "id" in e && e.id === Se && ("result" in e || "error" in e);
}
var Ye = createLazyValue(() =>
  c({
    jsonrpc: k("2.0"),
    id: $e([s(), T()]),
    method: s(),
    result: Jq().optional(),
    error: Jq().optional(),
  }),
);
function de(e) {
  let t = Ye().safeParse(e);
  return t.success ? t.data.id : void 0;
}
function Xe(e) {
  if (typeof e === "string")
    return e.length > te
      ? { kind: "oversize", size: e.length }
      : { kind: "text", text: e };
  if (e instanceof ArrayBuffer)
    return e.byteLength > te
      ? { kind: "oversize", size: e.byteLength }
      : { kind: "text", text: Buffer.from(e).toString("utf8") };
  if (ArrayBuffer.isView(e))
    return e.byteLength > te
      ? { kind: "oversize", size: e.byteLength }
      : {
          kind: "text",
          text: Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
            "utf8",
          ),
        };
  return { kind: "unsupported" };
}
var X = "core",
  ue = "remote-tools",
  K = "mcp-passthrough";
function De(e) {
  return {
    policy: e.policy,
    get description() {
      return e.description;
    },
    onRedescribed: e.onRedescribed,
    heldServedCall: e.heldServedCall,
    deps: e.deps,
  };
}
function Ee(e) {
  let t = () => jsonStringify([e.definitionsOf(ue), e.definitionsOf(K)]);
  return {
    native: () => e.definitionsOf(ue).flatMap(Ze),
    passthrough: () => e.definitionsOf(K).flatMap(Re),
    localNameFor: (o) =>
      e
        .definitionsOf(K)
        .filter((r) => r.name === o)
        .flatMap(Re)[0]?.local_name,
    subscribe: (o) => {
      let r = t();
      return e.subscribe((a) => {
        let l = t();
        if (l !== r) ((r = l), o(a));
      });
    },
  };
}
function Ze(e) {
  let t = parseToolDescriptor(e._meta?.[REMOTE_TOOL_EXECUTION_META_KEY]);
  return t === void 0
    ? []
    : [
        {
          name: e.name,
          refused_input_fields: t.refused_input_fields,
          protocol_versions: t.protocol_versions ?? [CURRENT_PROTOCOL_VERSION],
          description: e.description,
          input_schema: e.inputSchema,
        },
      ];
}
function Re(e) {
  let t = parseDevicePassthroughMeta(e._meta?.[DEVICE_PASSTHROUGH_META_KEY]);
  if (t === void 0) return [];
  let o = Qe(e.annotations ?? {}),
    r = en(e._meta ?? {});
  return [
    {
      name: e.name,
      local_name: t.tool,
      description: e.description,
      input_schema: e.inputSchema,
      ...(o !== void 0 && { annotations: o }),
      ...(r !== void 0 && { hints: r }),
    },
  ];
}
function Qe({
  title: e,
  readOnlyHint: t,
  destructiveHint: o,
  openWorldHint: r,
}) {
  let a = {
    ...(e !== void 0 && { title: e }),
    ...(t !== void 0 && { readOnlyHint: t }),
    ...(o !== void 0 && { destructiveHint: o }),
    ...(r !== void 0 && { openWorldHint: r }),
  };
  return Object.keys(a).length > 0 ? a : void 0;
}
function en(e) {
  let t = e[TOOL_ANNOTATION_KEYS.searchHint],
    o = e[TOOL_ANNOTATION_KEYS.alwaysLoad],
    r = e[TOOL_ANNOTATION_KEYS.maxResultSizeChars],
    a = e[TOOL_ANNOTATION_KEYS.requiresUserInteraction],
    l = {
      ...(typeof t === "string" && { search_hint: t }),
      ...(o === !0 && { always_load: !0 }),
      ...(typeof r === "number" && { max_result_size_chars: r }),
      ...(a === !0 && { requires_user_interaction: !0 }),
    };
  return Object.keys(l).length > 0 ? l : void 0;
}
var tn = "wss://bridge.claudeusercontent.com",
  on = "wss://bridge-staging.claudeusercontent.com",
  Ce = 8,
  Ae =
    typeof {
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
    } < "u"
      ? {
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
        }.VERSION
      : "unknown";
function rn(e, t) {
  let o = sanitizeDeviceName(e),
    r = toSlug(sessionIdBody(t).slice(-Ce), Ce);
  return r ? `${o}-cc-${r}` : o;
}
function sn(e, t, o, r) {
  return `${e}/devices/${encodeURIComponent(t)}_${encodeURIComponent(o)}/${encodeURIComponent(r)}/bridge`;
}
function an(e, t) {
  let o, r;
  try {
    ((o = new URL(e)), (r = new URL(t)));
  } catch {
    return !1;
  }
  let a =
    o.hostname === "localhost" ||
    o.hostname === "127.0.0.1" ||
    o.hostname === "[::1]";
  return (
    o.origin === r.origin &&
    o.username === "" &&
    o.password === "" &&
    (o.protocol === "wss:" || (o.protocol === "ws:" && a))
  );
}
function dn() {
  if (antEnv.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0)
    return antEnv.CLAUDE_REMOTE_TOOLS_BRIDGE_URL;
  switch (fileSuffixForOauthConfig()) {
    case "":
      return tn;
    case "-staging-oauth":
      return on;
    default:
      return;
  }
}
function startDeviceRegistration(e) {
  let t = e.transport ?? (isSessionChannelDisabled() ? "bridge" : "auto"),
    o = !1,
    r,
    a,
    l,
    p,
    v,
    C = !1,
    S = !1,
    _ = !1,
    A = new Set(),
    L = !1,
    E,
    F,
    B,
    x,
    V,
    g,
    q = !1,
    P = !1,
    M = !1,
    j = !1,
    W,
    J = fromEnum("stored"),
    O = { current: void 0 },
    H = (d) => (v ??= oe(d)),
    oe = async (d) => {
      if (((o = !0), a?.(), (a = void 0), C)) await Q.catch(() => !1);
      (r?.(),
        (r = void 0),
        p?.(),
        (p = void 0),
        l?.(),
        (l = void 0),
        V?.stop({ drain: !1 }),
        await B,
        await x,
        await Y(d));
    },
    Y = async (d) => {
      let w = E;
      if (w === void 0) return;
      E = void 0;
      let R = w.stop({
        drain:
          (d === "channel_acknowledged" || d === "channel_adopted_mcp") && !o,
      });
      if (((x = R), (V = w), await R, x === R)) ((x = void 0), (V = void 0));
      if (S) logEvent("tengu_device_bridge_stopped", { reason: fromEnum(d) });
    },
    I = () => {
      if (o || E !== void 0 || B !== void 0 || F === void 0) return;
      let d = F,
        w = !1;
      B = (x ?? Promise.resolve())
        .then(() => (o ? void 0 : d()))
        .then(async (R) => {
          if (R === void 0) return;
          if (o || !z()) {
            ((w = !o), await R.stop({ drain: !1 }));
            return;
          }
          ((E = R),
            logEvent("tengu_device_bridge_started", {
              account_source: J,
              transport: fromEnum(t),
              redial: !0,
            }),
            R.start());
        })
        .catch((R) => {
          logForDebugging(`[deviceBridge] re-dial failed: ${ge(R).message}`);
        })
        .finally(() => {
          if (((B = void 0), w && z())) I();
        });
    },
    D = async () => {
      let w = await (e.isEnabled ?? isViolinWoodEnabled)();
      if (((C = !0), !w)) return !1;
      let R = e.isEgressAllowed ?? isEgressAllowed;
      if (!R())
        return (
          logForDebugging(
            "[deviceBridge] skipped: non-essential egress disabled, non-first-party provider, or remote sessions policy-denied",
          ),
          !1
        );
      if (o) return !1;
      let N = await (e.getAccount ?? resolveAccountIdentity)(),
        ee = e.orgUuid;
      if (!ee || N.status !== "resolved")
        return (
          logEvent("tengu_device_bridge_skipped", {
            missing_org: ee === void 0,
            missing_account: N.status === "missing",
            account_mismatch: N.status === "mismatch",
          }),
          logForDebugging(`[deviceBridge] skipped: ${ee ? `account ${N.status}` : "no org"}`),
          !1
        );
      let { accountUuid: Me } = N;
      J = fromEnum(N.source);
      let Ie = _e(Te);
      ((g = ye()), g.setGroup(X, []));
      let pe = remoteToolServingOffReason(void 0, { ignoringMute: !0 }),
        Ne = e.toolGroupProviders ?? (await fn(pe));
      if (o) return !1;
      l = vn(Ne, {
        registry: g,
        sessionId: e.sessionId,
        serving: { offReason: pe },
        getDeviceId:
          e.getDeviceId ??
          (() => {
            return;
          }),
        limiter: Ie,
        storageV5: e.storageV5,
        servedSettingsChanged: e.servedSettingsChanged,
        servingKit: O,
        ...(e.dirSync !== void 0 && { dirSync: e.dirSync }),
        onNotice:
          e.onNotice ??
          ((U, We) => {
            logForDebugging(`[remote-tools] ${U}: ${We}`);
          }),
      });
      let re = g;
      if (
        ((F = () =>
          ln({
            options: e,
            orgUuid: ee,
            accountUuid: Me,
            registry: re,
            isEgressAllowed: R,
            isStopped: () => o,
            onLivenessEvent: Pe,
            onTransportEvent: xe,
          })),
        (E = await F()),
        E === void 0 || o)
      )
        return (await E?.stop({ drain: !1 }), (E = void 0), !1);
      let fe = () => {
          if (!R()) H("egress_denied");
        },
        Ge = e.isStillEnabled ?? (() => !isViolinWoodServedOff()),
        ve = () => {
          if (!Ge())
            (logForDebugging("[deviceBridge] stopping: the gate turned off"), H("gate_off"));
        },
        Ue = (e.onEgressGateChange ?? subscribeComplianceTaints)(fe),
        Fe = (e.onEnabledChange ?? onGrowthBookRefresh)(ve),
        me = !1,
        be = () => {
          let U = (e.isMuted ?? isRemoteToolServingMuted)();
          if (U !== me)
            ((me = U),
              logForDebugging(
                `[deviceBridge] serving ${U ? "muted" : "unmuted"} by the emergency switch`,
              ),
              logEvent("tengu_device_bridge_muted", { muted: U }));
          re.withholdAllExcept([X], U);
        },
        je = (e.onMuteRecheck ?? onServingMuteRecheck)(be);
      if (
        ((a = () => {
          (Ue(), Fe(), je());
        }),
        be(),
        fe(),
        ve(),
        o)
      )
        return !1;
      if (
        ((S = !0),
        logEvent("tengu_device_bridge_started", {
          account_source: fromEnum(N.source),
          transport: fromEnum(t),
          redial: !1,
        }),
        (j = !0),
        t === "auto")
      ) {
        if (
          ((p = g.subscribe(() => {
            if (ie(re) && !P) I();
            else if (!Z()) Y(le());
          })),
          W !== void 0)
        )
          he(W);
      }
      return (E?.start(), !0);
    },
    z = () => !q || (!P && g !== void 0 && ie(g)),
    Z = () => z() || (!M && g !== void 0 && ie(g)),
    le = () =>
      M && g !== void 0 && ie(g)
        ? "channel_adopted_mcp"
        : "channel_acknowledged",
    he = (d) => {
      if (t !== "auto" || o) return;
      if (!j) {
        if (cn(d)) W = d;
        return;
      }
      switch (d.kind) {
        case "announced":
          if (d.status === "withdrawn") return;
          if (
            ((q = !0),
            (P = d.passthroughAdopted !== void 0),
            (M = (d.passthroughAdopted ?? 0) > 0),
            z())
          )
            I();
          else if (!Z()) Y(le());
          return;
        case "refused":
        case "unsupported":
          ((q = !1), (P = !1), (M = !1), I());
          return;
        case "failed":
        case "retry":
          return;
      }
    },
    xe = (d) => {
      if (d.kind === "authenticated") {
        if ((A.clear(), (L = !1), !_)) ((_ = !0), logFeatureOk("device_bridge_register"));
        Oe(d);
        return;
      }
      let w = hn(d);
      if (w === void 0) return;
      if (A.has(w)) return;
      (A.add(w), Oe(d));
    },
    Pe = (d) => {
      if (d.kind === "reconnect_exhausted") {
        if (!_) ((_ = !0), logFeatureBad("device_bridge_register", "reconnect_exhausted"));
        if (L) return;
        L = !0;
      }
      pn(d);
    };
  r = (e.registerExitCleanup ?? registerCleanup)(() => H("exit"));
  let Q = D().catch((d) => {
      if (
        (logForDebugging(`[deviceBridge] registration failed: ${ge(d).message}`),
        logEvent("tengu_device_bridge_start_failed", {}),
        !_)
      )
        ((_ = !0), logFeatureBad("device_bridge_register", "start_failed"));
      return !1;
    }),
    Be = Q.then((d) =>
      d && g !== void 0 && O.current !== void 0
        ? { kit: De(O.current.kit), source: Ee(g) }
        : void 0,
    );
  return (
    Q.then((d) => {
      if (!d && !o)
        (r?.(), (r = void 0), p?.(), (p = void 0), l?.(), (l = void 0));
    }),
    {
      started: Q,
      announceSettled: he,
      serving: Be,
      stop: () => H("attach_ended"),
      heldServedCall: (d) =>
        o || O.current === void 0 ? NOT_HELD_STATE : O.current.kit.heldServedCall(d),
    }
  );
}
function ie(e) {
  return e.definitionsOf(K).length > 0;
}
function cn(e) {
  return (
    e.kind === "refused" ||
    e.kind === "unsupported" ||
    (e.kind === "announced" && e.status !== "withdrawn")
  );
}
var un = 60000;
async function ln({
  options: e,
  orgUuid: t,
  accountUuid: o,
  registry: r,
  isEgressAllowed: a,
  isStopped: l,
  onLivenessEvent: p,
  onTransportEvent: v,
}) {
  let C = rn((e.getHostname ?? hostname)(), e.sessionId),
    S =
      e.getBridgeBaseUrl !== void 0 ||
      antEnv.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0,
    _ = (e.getBridgeBaseUrl ?? dn)();
  if (_ === void 0) {
    logForDebugging("[deviceBridge] skipped: no device bridge for this OAuth environment");
    return;
  }
  let A = sn(_, t, o, C),
    {
      createDeviceMcpServer: L,
      deviceInfoProbeTool: E,
      parseJsonRpcMessage: F,
    } = await import("./createDeviceMcpServer.vdaqzanp.js");
  if (l()) return;
  let B = { getDeviceName: () => C, version: Ae },
    x = E(B),
    V = E({ ...B, idle: !0 }),
    g = (D) => {
      let z = r.definitions().every((Z) => Z.name === x.definition.name);
      r.setGroup(X, [z ? V : x], D);
    };
  g();
  let q = r.subscribe(g),
    P = () => {
      (q(), r.setGroup(X, []));
    },
    M = new ce({
      getUrl: () => A,
      getAccessToken: () => e.getAccessToken(),
      getTools: () => gn(r),
      getDeviceId: e.getDeviceId,
      getSessionId: () => toInfraSessionId(e.sessionId),
      parseMessage: F,
      createSocket: e.createSocket,
      isAllowedUrl: (D) => a() && (isAllowedBridgeWsUrl(D) || (S && an(D, _))),
    }),
    {
      server: j,
      inFlightCalls: W,
      whenIdle: J,
    } = L({ registry: r, version: Ae, sessionId: e.sessionId });
  try {
    await j.connect(M);
  } catch (D) {
    throw (P(), D);
  }
  if (l()) {
    (P(), await j.close());
    return;
  }
  let O = new se({
      transport: M,
      announced: {
        hasUnservedChange: r.hasUnservedChange,
        inFlightCalls: W,
        whenIdle: J,
      },
      onEvent: p,
      onTransportEvent: v,
    }),
    H = r.subscribe((D) => O.requestReannounce(D)),
    { promise: oe, resolve: Y } = Promise.withResolvers(),
    I;
  return {
    start: () => O.start(),
    stop: ({ drain: D }) => {
      if (!D) Y();
      return (
        (I ??= (async () => {
          if ((H(), D && W() > 0)) await withDeadline(Promise.race([J(), oe]), un);
          (P(), await Promise.allSettled([O.stop(), j.close()]));
        })()),
        I
      );
    },
  };
}
function hn(e) {
  switch (e.kind) {
    case "rejected":
      return `rejected:${e.phase}:${e.reason ?? ""}:${e.status ?? ""}`;
    case "closed":
      return `closed:${e.phase}:${e.code ?? ""}:${e.superseded}`;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
    case "dial_failed":
      return e.kind;
    default:
      return;
  }
}
function Oe(e) {
  switch (e.kind) {
    case "authenticated":
      logEvent("tengu_device_bridge_connected", {
        protocol_version: e.protocolVersion,
        hb_interval_ms: e.timings.hbIntervalMs,
        staleness_ms: e.timings.stalenessMs,
        rpc_timeout_ms: e.timings.rpcTimeoutMs,
      });
      return;
    case "rejected":
      logEvent("tengu_device_bridge_rejected", {
        phase: fromEnum(e.phase),
        reason: fromEnumOpt(e.reason),
        status: fromNumberOpt(e.status),
        slot_contention: e.slotContention,
      });
      return;
    case "closed":
      logEvent("tengu_device_bridge_closed", {
        phase: fromEnum(e.phase),
        code: fromNumberOpt(e.code),
        superseded: e.superseded,
      });
      return;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
      logEvent("tengu_device_bridge_connect_failed", { cause: fromEnum(e.kind) });
      return;
    case "dial_failed":
      logEvent("tengu_device_bridge_connect_failed", { cause: fromEnum("dial_failed") });
      return;
    default:
      return;
  }
}
function pn(e) {
  switch (e.kind) {
    case "pong_timeout":
      logEvent("tengu_device_bridge_pong_timeout", { consecutive: e.consecutive });
      return;
    case "reconnect_exhausted":
      logEvent("tengu_device_bridge_reconnect_exhausted", {});
      return;
    case "heartbeat_unsupported":
      logEvent("tengu_device_bridge_heartbeat_unsupported", {
        protocol_version: fromNumber(e.protocolVersion),
      });
      return;
    case "reannounce":
      logEvent("tengu_device_bridge_reannounce", {
        reason: fromEnum(e.reason),
        outcome: fromEnum(e.outcome),
        inflight_at_start: e.inFlightAtStart,
        drained_ms: e.drainedMs,
        drain_timed_out: e.drainTimedOut,
      });
      return;
    case "reannounce_contended":
      logEvent("tengu_device_bridge_reannounce_contended", { reason: fromEnum(e.reason) });
      return;
    default:
      return;
  }
}
async function fn(e) {
  return [];
}
function vn(e, t) {
  let o = e.flatMap((r) => {
    try {
      let a = r(t);
      return a ? [a] : [];
    } catch (a) {
      return (logError(ge(a)), []);
    }
  });
  return () =>
    o.forEach((r) => {
      try {
        r();
      } catch (a) {
        logError(ge(a));
      }
    });
}
function gn(e) {
  let t = e.hasUnservedChange(),
    o = e.serve();
  if (!t) return o;
  let r = o.map((a) => a.name);
  return (
    logForDebugging(
      `[deviceBridge] connect frame announces ${o.length} tools: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", \u2026" : ""}`,
    ),
    logEvent("tengu_device_bridge_connect_frame", {
      tool_count: o.length,
      serves_bash: r.includes(BASH_TOOL_NAME),
      mcp_tool_count: countMatching(r, (a) => a.includes("__")),
    }),
    o
  );
}
export { startDeviceRegistration };

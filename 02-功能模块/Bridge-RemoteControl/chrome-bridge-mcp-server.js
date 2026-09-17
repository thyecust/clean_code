// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { classifyChromeToolError } from "../ClaudeinChrome/chrome-tool-error-classifier.js";
import { DEFAULT_BROWSER_TOOL_CALL_TIMEOUT_MS, PEER_CONNECTED_WAIT_MS, LIST_EXTENSIONS_TIMEOUT_MS, DEFAULT_EXTERNAL_MESSAGE_TIMEOUT_MS, MAX_EXTERNAL_MESSAGE_TIMEOUT_MS, BRIDGE_ONLY_BROWSER_TOOL_NAMES, buildBrowserSelectionPrompt, BROWSER_MCP_TOOL_DEFINITIONS } from "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "../MCP客户端/chunk-tv3jbp8f.js";
import { McpServer } from "../MCP客户端/mcp-server.js";
import { SocketConnectionError, NoExtensionConnectedError, ToolCallTimeoutError, ExtensionDisconnectedMidCallError, createBridgeSocketClient, executeBrowserToolCall, parseTabsContextResult } from "../图片-截图-ComputerUse/chunk-csvzwhzk.js";
import g from "ws";
function _() {
  return "macOS";
}
function D(e) {
  return {
    on: (n, t) => {
      e.on(n, t);
    },
    removeAllListeners: () => e.removeAllListeners(),
    send: (n) => e.send(n),
    close: (n, t) => {
      if (e.readyState === g.OPEN) e.close(n, t);
      else e.terminate();
    },
    get readyState() {
      return e.readyState;
    },
  };
}
var A = 30000,
  x = 90000,
  M = 30000,
  N = new Set([
    "external_message",
    "external_message_result",
    "external_config",
  ]),
  P = 30000;
function f(e, n) {
  if (typeof e !== "string") return;
  let t = e.replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  return t.length > n ? `${t.slice(0, n)}\u2026` : t;
}
function O(e) {
  return typeof e === "string" && /^category[0-9a-z_]{1,32}$/.test(e)
    ? e
    : void 0;
}
function B(e) {
  return {
    deviceId: f(e.deviceId, 64) ?? "",
    name: f(e.name, 50),
    osPlatform: f(e.osPlatform, 30),
    connectedAt: typeof e.connectedAt === "number" ? e.connectedAt : 0,
  };
}
var y = 4;
function q(e, n) {
  if (!Array.isArray(e)) return;
  let t = new Map(),
    o = (i, s) => {
      if (t.has(i)) {
        t.set(i, s);
        return;
      }
      if (t.size >= y) {
        n?.(`sanitizeBridgeNotices: notice cap (${y}) reached; dropping entry`);
        return;
      }
      t.set(i, s);
    };
  for (let i of e) {
    if (typeof i !== "object" || i === null) continue;
    let { kind: s, domain: r } = i;
    if (typeof s !== "string" || !/^[a-z0-9_]{1,64}$/i.test(s)) continue;
    let c = s.toLowerCase();
    if (r === void 0) o(`${c}:`, { kind: c });
    else if (
      typeof r === "string" &&
      r.length <= 253 &&
      /^[a-z0-9.-]+$/i.test(r)
    ) {
      let a = r.toLowerCase().replace(/\.$/, "");
      if (a.length === 0) continue;
      o(`${c}:${a}`, { kind: c, domain: a });
    }
  }
  return t.size > 0 ? Array.from(t.values()) : void 0;
}
class b {
  ws = null;
  connected = !1;
  authenticated = !1;
  connecting = !1;
  reconnectTimer = null;
  handshakeTimer = null;
  reconnectAttempts = 0;
  pendingCalls = new Map();
  timedOutCalls = new Map();
  notificationHandler = null;
  context;
  permissionMode = "ask";
  allowedDomains;
  connectionStartTime = null;
  connectionEstablishedTime = null;
  selectedDeviceId;
  discoveryComplete = !1;
  multiBrowserPendingSelection = !1;
  lastKnownExtensionIds = [];
  discoveryPromise = null;
  pendingDiscovery = null;
  listExtensionsPromise = null;
  previousSelectedDeviceId;
  peerConnectedWaiters = [];
  pendingPairingRequestId;
  pairingInProgress = !1;
  persistedDeviceId;
  pendingSwitchResolve = null;
  pairingPromptAbort = null;
  pairingPromptTimeout = null;
  keepAliveInterval = null;
  lastPongReceived = 0;
  pendingExternalMessages = new Map();
  constructor(e) {
    if (((this.context = e), e.initialPermissionMode))
      this.permissionMode = e.initialPermissionMode;
  }
  async ensureConnected() {
    let { logger: e, serverName: n } = this.context;
    if (
      (e.info(
        `[${n}] ensureConnected called, connected=${this.connected}, authenticated=${this.authenticated}, wsState=${this.ws?.readyState}`,
      ),
      this.connected && this.authenticated && this.ws?.readyState === g.OPEN)
    )
      return (e.info(`[${n}] Already connected and authenticated`), !0);
    if (!this.connecting && !this.reconnectTimer)
      (e.info(`[${n}] Not connecting, starting connection...`),
        await this.connect());
    else
      e.info(`[${n}] Connect in progress or reconnect scheduled, waiting...`);
    return new Promise((t) => {
      let o = null,
        i = setTimeout(() => {
          if (o) clearTimeout(o);
          (e.info(
            `[${n}] Connection timeout, connected=${this.connected}, authenticated=${this.authenticated}`,
          ),
            t(!1));
        }, 1e4),
        s = () => {
          if (this.connected && this.authenticated)
            (e.info(`[${n}] Connection successful`), clearTimeout(i), t(!0));
          else if (!this.connecting && !this.reconnectTimer)
            (e.info(`[${n}] No longer connecting, giving up`),
              clearTimeout(i),
              t(!1));
          else o = setTimeout(s, 200);
        };
      s();
    });
  }
  async callTool(e, n, t) {
    let { logger: o, serverName: i, trackEvent: s } = this.context;
    if (!this.ws || this.ws.readyState !== g.OPEN)
      throw new SocketConnectionError(`[${i}] Bridge not connected`);
    if (!this.selectedDeviceId && !this.discoveryComplete)
      ((this.discoveryPromise ??= this.discoverAndSelectExtension().finally(
        () => {
          this.discoveryPromise = null;
        },
      )),
        await this.discoveryPromise);
    if (
      this.discoveryComplete &&
      !this.selectedDeviceId &&
      !this.pairingInProgress &&
      !this.multiBrowserPendingSelection
    )
      throw new NoExtensionConnectedError(`[${i}] No Chrome extension connected after discovery`);
    let r = t?.sessionScope?.sessionId,
      c = t?.sessionScope?.userMessageUuid,
      a = this.context.browserActivityObserver?.onBeforeToolCall;
    if (a) {
      let v = this.selectedDeviceId;
      try {
        await a({ sessionId: r, toolName: e, args: n });
      } catch {
        o.debug(`[${i}] browser activity observer threw`);
      }
      if (!this.ws || this.ws.readyState !== g.OPEN)
        throw new SocketConnectionError(`[${i}] Bridge disconnected before tool call was sent`);
      if (v !== void 0 && this.selectedDeviceId === void 0)
        throw new ExtensionDisconnectedMidCallError("Chrome extension disconnected mid-call");
    }
    let d = crypto.randomUUID(),
      l = Date.now(),
      u = this.context.getToolCallTimeoutMs?.(e) ?? DEFAULT_BROWSER_TOOL_CALL_TIMEOUT_MS;
    s?.("chrome_bridge_tool_call_started", {
      tool_name: `browser:${e}`,
      tool_use_id: d,
      session_id: r,
      user_message_uuid: c,
      timeout_ms: u,
    });
    let m = t?.permissionMode ?? this.permissionMode,
      p = t?.allowedDomains ?? this.allowedDomains,
      h = {
        type: "tool_call",
        tool_use_id: d,
        client_type: this.context.clientTypeId,
        tool: e,
        args: n,
        supports_tool_result_notices: !0,
      };
    if (this.selectedDeviceId) h.target_device_id = this.selectedDeviceId;
    if (m) h.permission_mode = m;
    if (p?.length) h.allowed_domains = p;
    if (t?.onPermissionRequest) h.handle_permission_prompts = !0;
    if (t?.sessionScope) h.session_scope = t.sessionScope;
    return new Promise((v, E) => {
      let R = this.createTimeoutTimer(d, u);
      (this.pendingCalls.set(d, {
        resolve: v,
        reject: E,
        timer: R,
        onPermissionRequest: t?.onPermissionRequest,
        startTime: l,
        toolName: e,
        timeoutMs: u,
        sessionId: r,
        userMessageUuid: c,
        args: n,
      }),
        o.debug(`[${i}] Sending tool_call: ${e} (${d.slice(0, 8)})`),
        this.ws.send(JSON.stringify(h)));
    });
  }
  sendExternalMessage(e, n, t) {
    let { logger: o, serverName: i } = this.context;
    if (!this.ws || this.ws.readyState !== g.OPEN)
      return Promise.reject(new SocketConnectionError(`[${i}] Bridge not connected`));
    if (!this.selectedDeviceId)
      return (
        o.info(`[${i}] external_message refused: no extension selected`),
        Promise.resolve({ ok: !1, error: "no_target" })
      );
    let s = crypto.randomUUID(),
      r = t?.timeoutMs,
      c = Math.min(
        typeof r === "number" && Number.isFinite(r) && r > 0 ? r : DEFAULT_EXTERNAL_MESSAGE_TIMEOUT_MS,
        MAX_EXTERNAL_MESSAGE_TIMEOUT_MS,
      ),
      a = {
        type: "external_message",
        requestId: s,
        extensionIds: [...e],
        payload: n,
        timeoutMs: c,
        target_device_id: this.selectedDeviceId,
      };
    return new Promise((d) => {
      let l = setTimeout(() => {
        if (this.pendingExternalMessages.delete(s))
          (o.warn(
            `[${i}] external_message timed out locally (${s.slice(0, 8)})`,
          ),
            d({ ok: !1, error: "timeout" }));
      }, c + M);
      (this.pendingExternalMessages.set(s, { resolve: d, timer: l }),
        o.debug(`[${i}] Sending external_message (${s.slice(0, 8)})`));
      try {
        this.ws.send(JSON.stringify(a));
      } catch (u) {
        (clearTimeout(l),
          this.pendingExternalMessages.delete(s),
          o.warn(
            `[${i}] external_message serialization/send failed: ${u instanceof Error ? u.message : String(u)}`,
          ),
          d({ ok: !1, error: "send_failed" }));
      }
    });
  }
  pushExternalConfig(e) {
    if (this.ws?.readyState !== g.OPEN) return !1;
    let n = e;
    if (!n) {
      if (!this.context.getExternalRelayConfig) return !1;
      n = this.context.getExternalRelayConfig() ?? { extensionIds: [] };
    }
    return (
      this.ws.send(
        JSON.stringify({
          type: "external_config",
          extensionIds: n.extensionIds,
          ...(n.hooks !== void 0 && { hooks: n.hooks }),
        }),
      ),
      !0
    );
  }
  isConnected() {
    return (
      this.connected && this.authenticated && this.ws?.readyState === g.OPEN
    );
  }
  disconnect() {
    this.cleanup();
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async discoverAndSelectExtension() {
    let { logger: e, serverName: n } = this.context;
    this.persistedDeviceId = this.context.getPersistedDeviceId?.();
    let t = await this.queryBridgeExtensions();
    if (t.length === 0) {
      if (
        (e.info(
          `[${n}] No extensions connected, waiting up to ${PEER_CONNECTED_WAIT_MS}ms for peer_connected`,
        ),
        await this.waitForPeerConnected(PEER_CONNECTED_WAIT_MS))
      )
        t = await this.queryBridgeExtensions();
    }
    if (this.context.getRequirePairedDevice?.()) {
      if (!this.persistedDeviceId) {
        (e.info(
          `[${n}] requirePairedDevice set but no persistedDeviceId; refusing to auto-select`,
        ),
          (this.discoveryComplete = !0));
        return;
      }
      let o = this.persistedDeviceId,
        i = t.find((s) => s.deviceId === o);
      if (!i) {
        if (
          (e.info(
            `[${n}] requirePairedDevice: persisted ${o.slice(0, 8)} not connected (${t.length} other(s) visible); waiting`,
          ),
          await this.waitForPeerConnected(PEER_CONNECTED_WAIT_MS))
        )
          ((t = await this.queryBridgeExtensions()),
            (i = t.find((s) => s.deviceId === o)));
      }
      if (((this.discoveryComplete = !0), i)) this.selectExtension(i.deviceId);
      else
        e.info(
          `[${n}] requirePairedDevice: persisted device never arrived; refusing to auto-select`,
        );
      return;
    }
    if (((this.discoveryComplete = !0), this.selectedDeviceId)) return;
    if (t.length === 0) {
      e.info(`[${n}] No extensions found after waiting`);
      return;
    }
    if (t.length === 1) {
      let o = t[0];
      if (!this.isLocalExtension(o)) this.context.onRemoteExtensionWarning?.(o);
      this.selectExtension(o.deviceId);
      return;
    }
    if (this.persistedDeviceId) {
      let o = t.find((i) => i.deviceId === this.persistedDeviceId);
      if (o) {
        (e.info(
          `[${n}] Auto-connecting to persisted extension: ${o.name || o.deviceId.slice(0, 8)}`,
        ),
          this.selectExtension(o.deviceId));
        return;
      }
    }
    if (this.context.askUserToolName) {
      this.multiBrowserPendingSelection = !0;
      return;
    }
    (this.broadcastPairingRequest(),
      (this.pairingInProgress = !0),
      this.firePairingPrompt());
  }
  queryBridgeExtensions() {
    if (this.listExtensionsPromise) return this.listExtensionsPromise;
    let e = new Promise((n) => {
      let t = setTimeout(() => {
        ((this.pendingDiscovery = null), n([]));
      }, LIST_EXTENSIONS_TIMEOUT_MS);
      ((this.pendingDiscovery = { resolve: n, timeout: t }),
        this.ws?.send(JSON.stringify({ type: "list_extensions" })));
    }).then((n) => {
      let t = new Map();
      for (let i of n) {
        let s = t.get(i.deviceId);
        if (!s || i.connectedAt > s.connectedAt) t.set(i.deviceId, i);
      }
      let o = [...t.values()].map(B);
      return ((this.lastKnownExtensionIds = o.map((i) => i.deviceId)), o);
    });
    return (
      (this.listExtensionsPromise = e),
      e.finally(() => {
        if (this.listExtensionsPromise === e) this.listExtensionsPromise = null;
      }),
      e
    );
  }
  getSelectedDeviceId() {
    return this.selectedDeviceId ?? this.context.getPersistedDeviceId?.();
  }
  hasActiveSelection() {
    return this.selectedDeviceId !== void 0;
  }
  clearSelection() {
    ((this.selectedDeviceId = void 0),
      (this.previousSelectedDeviceId = void 0),
      (this.discoveryComplete = !1),
      (this.multiBrowserPendingSelection = !1),
      (this.lastKnownExtensionIds = []),
      (this.pairingInProgress = !1),
      this.abortPairingPrompt());
  }
  selectExtension(e) {
    let { logger: n, serverName: t } = this.context;
    ((this.selectedDeviceId = e),
      (this.previousSelectedDeviceId = void 0),
      (this.multiBrowserPendingSelection = !1),
      n.info(`[${t}] Selected Chrome extension: ${e.slice(0, 8)}...`));
  }
  async listConnectedExtensions() {
    if (!(await this.ensureConnected())) return [];
    return (await this.queryBridgeExtensions()).map((n) => ({
      ...n,
      isLocal: this.isLocalExtension(n),
    }));
  }
  selectExtensionById(e, n, t) {
    if (
      ((this.discoveryComplete = !0),
      (this.pairingInProgress = !1),
      (this.pendingPairingRequestId = void 0),
      this.selectExtension(e),
      this.context.onExtensionPaired?.(e, n, t ?? this.lastKnownExtensionIds),
      this.pendingSwitchResolve)
    )
      this.pendingSwitchResolve({ deviceId: e, name: n });
    this.abortPairingPrompt();
  }
  firePairingPrompt() {
    if ((this.abortPairingPrompt(), !this.context.onPairingPrompted)) return;
    let e = new AbortController();
    ((this.pairingPromptAbort = e),
      (this.pairingPromptTimeout = setTimeout(
        () => this.abortPairingPrompt(),
        120000,
      )),
      this.context.onPairingPrompted(e.signal));
  }
  abortPairingPrompt() {
    if (this.pairingPromptTimeout)
      (clearTimeout(this.pairingPromptTimeout),
        (this.pairingPromptTimeout = null));
    if (this.pairingPromptAbort)
      (this.pairingPromptAbort.abort(), (this.pairingPromptAbort = null));
  }
  isLocalExtension(e) {
    if (!e.osPlatform) return !1;
    return e.osPlatform === _();
  }
  waitForPeerConnected(e) {
    return new Promise((n) => {
      let t = setTimeout(() => {
          ((this.peerConnectedWaiters = this.peerConnectedWaiters.filter(
            (i) => i !== o,
          )),
            n(!1));
        }, e),
        o = (i) => {
          (clearTimeout(t), n(i));
        };
      this.peerConnectedWaiters.push(o);
    });
  }
  broadcastPairingRequest() {
    let e = crypto.randomUUID();
    ((this.pendingPairingRequestId = e),
      this.ws?.send(
        JSON.stringify({
          type: "pairing_request",
          request_id: e,
          client_type: this.context.clientTypeId,
        }),
      ));
  }
  async switchBrowser() {
    let e = await this.queryBridgeExtensions(),
      n = this.selectedDeviceId ?? this.previousSelectedDeviceId;
    if (e.length === 0 || (e.length === 1 && (!n || e[0].deviceId === n)))
      return "no_other_browsers";
    ((this.previousSelectedDeviceId = this.selectedDeviceId),
      (this.selectedDeviceId = void 0),
      (this.discoveryComplete = !1),
      (this.pairingInProgress = !1));
    let t = crypto.randomUUID();
    if (((this.pendingPairingRequestId = t), this.ws?.readyState !== g.OPEN))
      return null;
    if (
      (this.ws.send(
        JSON.stringify({
          type: "pairing_request",
          request_id: t,
          client_type: this.context.clientTypeId,
        }),
      ),
      this.firePairingPrompt(),
      this.pendingSwitchResolve)
    )
      this.pendingSwitchResolve(null);
    return new Promise((o) => {
      let i = setTimeout(() => {
        if (this.pendingPairingRequestId === t)
          this.pendingPairingRequestId = void 0;
        ((this.pendingSwitchResolve = null),
          this.abortPairingPrompt(),
          o(null));
      }, 120000);
      this.pendingSwitchResolve = (s) => {
        (clearTimeout(i), (this.pendingSwitchResolve = null), o(s));
      };
    });
  }
  async connect() {
    let {
      logger: e,
      serverName: n,
      bridgeConfig: t,
      trackEvent: o,
    } = this.context;
    if (!t) {
      e.error(`[${n}] No bridge config provided`);
      return;
    }
    if (this.connecting) return;
    ((this.connecting = !0),
      (this.authenticated = !1),
      (this.connectionStartTime = Date.now()),
      this.closeSocket(),
      (this.handshakeTimer = setTimeout(() => {
        if (((this.handshakeTimer = null), !this.connecting)) return;
        let c = this.ws?.readyState;
        if (
          (e.warn(`[${n}] Bridge connect stuck after ${P}ms (ws_state=${c})`),
          o?.("chrome_bridge_handshake_timeout", {
            duration_ms: Date.now() - (this.connectionStartTime ?? 0),
            ws_state: c,
          }),
          c === void 0)
        )
          return;
        ((this.connecting = !1), this.closeSocket(), this.scheduleReconnect());
      }, P)));
    let i, s;
    if (t.devUserId)
      ((i = t.devUserId),
        e.debug(`[${n}] Using dev user ID for bridge connection`));
    else {
      e.debug(`[${n}] Fetching user ID for bridge connection`);
      let c, a;
      if (t.getUserIdResult) {
        let d = await t.getUserIdResult();
        if (d.ok) a = d.userId;
        else c = d.error;
      } else a = await t.getUserId();
      if (!a) {
        let d = Date.now() - this.connectionStartTime;
        (e.error(`[${n}] No user ID available after ${d}ms`),
          o?.("chrome_bridge_connection_failed", {
            duration_ms: d,
            error_type: "no_user_id",
            error_detail: c,
            reconnect_attempt: this.reconnectAttempts,
          }),
          (this.connecting = !1),
          this.scheduleReconnect());
        return;
      }
      if (
        ((i = a),
        e.debug(`[${n}] Fetching OAuth token for bridge connection`),
        (s = await t.getOAuthToken()),
        !s)
      ) {
        let d = Date.now() - this.connectionStartTime;
        (e.error(`[${n}] No OAuth token available after ${d}ms`),
          o?.("chrome_bridge_connection_failed", {
            duration_ms: d,
            error_type: "no_oauth_token",
            reconnect_attempt: this.reconnectAttempts,
          }),
          (this.connecting = !1),
          this.scheduleReconnect());
        return;
      }
    }
    let r = `${t.url}/chrome/${i}`;
    (e.info(`[${n}] Connecting to bridge: ${r}`),
      o?.("chrome_bridge_connection_started", { bridge_url: r }));
    try {
      if (t.createWebSocket) this.ws = await t.createWebSocket(r);
      else {
        let c = (await t.getWsOptions?.()) ?? t.wsOptions;
        this.ws = D(new g(r, c ? { ...c, tls: c } : void 0));
      }
    } catch (c) {
      let a = Date.now() - this.connectionStartTime;
      (e.error(`[${n}] Failed to create WebSocket after ${a}ms:`, c),
        o?.("chrome_bridge_connection_failed", {
          duration_ms: a,
          error_type: "websocket_error",
          error_code: c?.code,
          reconnect_attempt: this.reconnectAttempts,
        }),
        (this.connecting = !1),
        this.scheduleReconnect());
      return;
    }
    (this.ws.on("open", () => {
      e.info(`[${n}] WebSocket connected, sending connect message`);
      let c = { type: "connect", client_type: this.context.clientTypeId };
      if (t.devUserId) c.dev_user_id = t.devUserId;
      else c.oauth_token = s;
      this.ws?.send(JSON.stringify(c));
    }),
      this.ws.on("message", (c) => {
        try {
          let a = JSON.parse(c.toString());
          if (N.has(a.type))
            e.debug(
              `[${n}] Bridge received: ${String(a.type)} (ok=${String(a.ok)})`,
            );
          else e.debug(`[${n}] Bridge received: ${JSON.stringify(a)}`);
          this.handleMessage(a);
        } catch (a) {
          e.error(`[${n}] Failed to parse bridge message:`, a);
        }
      }),
      this.ws.on("close", (c) => {
        let a = this.connectionEstablishedTime
          ? Date.now() - this.connectionEstablishedTime
          : 0;
        (e.info(
          `[${n}] Bridge connection closed (code: ${c}, duration: ${a}ms)`,
        ),
          o?.("chrome_bridge_disconnected", {
            close_code: c,
            duration_since_connect_ms: a,
            reconnect_attempt: this.reconnectAttempts + 1,
          }),
          (this.connected = !1),
          (this.authenticated = !1),
          (this.connecting = !1),
          (this.connectionEstablishedTime = null),
          this.rejectPendingCalls(new SocketConnectionError("Bridge connection closed mid-call")),
          this.scheduleReconnect());
      }),
      this.ws.on("error", (c) => {
        let a = this.connectionStartTime
          ? Date.now() - this.connectionStartTime
          : 0;
        (e.error(`[${n}] Bridge WebSocket error after ${a}ms: ${c.message}`),
          o?.("chrome_bridge_connection_failed", {
            duration_ms: a,
            error_type: "websocket_error",
            error_code: c.code,
            reconnect_attempt: this.reconnectAttempts,
          }),
          (this.connected = !1),
          (this.authenticated = !1),
          (this.connecting = !1),
          this.rejectPendingCalls(
            new SocketConnectionError(`Bridge connection error: ${c.message}`),
          ));
      }));
  }
  handleMessage(e) {
    let { logger: n, serverName: t, trackEvent: o } = this.context;
    switch (e.type) {
      case "paired": {
        let i = this.connectionStartTime
          ? Date.now() - this.connectionStartTime
          : 0;
        (n.info(`[${t}] Paired with Chrome extension (duration: ${i}ms)`),
          (this.connected = !0),
          (this.authenticated = !0),
          (this.connecting = !1),
          (this.reconnectAttempts = 0),
          (this.connectionEstablishedTime = Date.now()),
          this.startKeepAlive(),
          o?.("chrome_bridge_connection_succeeded", {
            duration_ms: i,
            status: "paired",
          }),
          this.pushExternalConfig(),
          this.context.onPeerRosterChanged?.());
        break;
      }
      case "waiting": {
        let i = this.connectionStartTime
          ? Date.now() - this.connectionStartTime
          : 0;
        (n.info(
          `[${t}] Waiting for Chrome extension to connect (duration: ${i}ms)`,
        ),
          (this.connected = !0),
          (this.authenticated = !0),
          (this.connecting = !1),
          (this.reconnectAttempts = 0),
          (this.connectionEstablishedTime = Date.now()),
          this.startKeepAlive(),
          o?.("chrome_bridge_connection_succeeded", {
            duration_ms: i,
            status: "waiting",
          }));
        break;
      }
      case "peer_connected":
        if (
          (n.info(`[${t}] Chrome extension connected to bridge`),
          o?.("chrome_bridge_peer_connected", null),
          !this.selectedDeviceId)
        )
          this.discoveryComplete = !1;
        if (
          this.previousSelectedDeviceId &&
          e.deviceId === this.previousSelectedDeviceId &&
          !this.pendingSwitchResolve
        )
          (n.info(
            `[${t}] Previously selected extension reconnected, auto-reselecting`,
          ),
            this.selectExtension(this.previousSelectedDeviceId),
            (this.previousSelectedDeviceId = void 0));
        if (this.peerConnectedWaiters.length > 0) {
          let i = this.peerConnectedWaiters;
          this.peerConnectedWaiters = [];
          for (let s of i) s(!0);
        }
        (this.pushExternalConfig(), this.context.onPeerRosterChanged?.());
        break;
      case "peer_disconnected": {
        let i = e.deviceId;
        if (
          (n.info(
            `[${t}] Chrome extension disconnected from bridge (deviceId=${i ?? "none"}, selected=${this.selectedDeviceId ?? "none"})`,
          ),
          o?.("chrome_bridge_peer_disconnected", {
            disconnected_device_id: i ?? null,
            selected_device_id: this.selectedDeviceId ?? null,
            had_match:
              i !== null && i !== void 0 && i === this.selectedDeviceId,
            pending_calls: this.pendingCalls.size,
          }),
          this.context.onPeerDisconnected?.({
            deviceId: i,
            wasSelected:
              i !== null && i !== void 0 && i === this.selectedDeviceId,
          }),
          e.deviceId && e.deviceId === this.selectedDeviceId)
        )
          (n.info(`[${t}] Selected extension disconnected, clearing selection`),
            (this.previousSelectedDeviceId = this.selectedDeviceId),
            (this.selectedDeviceId = void 0),
            (this.discoveryComplete = !1),
            this.rejectPendingCalls(
              new ExtensionDisconnectedMidCallError("Chrome extension disconnected mid-call"),
            ));
        else if (!this.selectedDeviceId && this.multiBrowserPendingSelection)
          ((this.discoveryComplete = !1),
            (this.multiBrowserPendingSelection = !1));
        this.context.onPeerRosterChanged?.();
        break;
      }
      case "routing_ack": {
        o?.("chrome_bridge_routing_ack", {
          tool_use_id: e.tool_use_id ?? null,
          routed_to: e.routed_to ?? null,
          target_connected_at: e.target_connected_at ?? null,
          target_pong_age_ms: e.target_pong_age_ms ?? null,
          extension_sockets: e.extension_sockets ?? null,
          mcp_sockets: e.mcp_sockets ?? null,
        });
        let i = this.pendingCalls.get(e.tool_use_id ?? "");
        if (i)
          ((i.routingAckReceived = !0),
            (i.routingAckPongAgeMs = e.target_pong_age_ms ?? null));
        break;
      }
      case "extensions_list":
        if (this.pendingDiscovery)
          (clearTimeout(this.pendingDiscovery.timeout),
            this.pendingDiscovery.resolve(e.extensions ?? []),
            (this.pendingDiscovery = null));
        break;
      case "pairing_response": {
        let i = e.request_id;
        if (this.pendingPairingRequestId !== i) break;
        if (e.dismissed === !0) {
          (n.info(`[${t}] Pairing prompt dismissed in extension`),
            this.abortPairingPrompt());
          break;
        }
        let s = f(e.device_id, 64),
          r = f(e.name, 50);
        if (s && r) {
          if (
            ((this.pendingPairingRequestId = void 0),
            (this.pairingInProgress = !1),
            this.selectExtension(s),
            this.context.onExtensionPaired?.(s, r, this.lastKnownExtensionIds),
            this.abortPairingPrompt(),
            n.info(`[${t}] Paired with "${r}" (${s.slice(0, 8)})`),
            this.pendingSwitchResolve)
          )
            (this.pendingSwitchResolve({ deviceId: s, name: r }),
              (this.pendingSwitchResolve = null));
        }
        break;
      }
      case "ping":
        this.ws?.send(JSON.stringify({ type: "pong" }));
        break;
      case "pong":
        this.lastPongReceived = Date.now();
        break;
      case "tool_result":
        this.handleToolResult(e);
        break;
      case "external_message_result": {
        let i = typeof e.requestId === "string" ? e.requestId : void 0,
          s = i ? this.pendingExternalMessages.get(i) : void 0;
        if (!i || !s) {
          n.debug(
            `[${t}] external_message_result for unknown request: ${i?.slice(0, 8) ?? "none"}`,
          );
          break;
        }
        if (
          (clearTimeout(s.timer),
          this.pendingExternalMessages.delete(i),
          e.ok === !0)
        )
          s.resolve({ ok: !0, response: e.response });
        else {
          let r = e.error;
          s.resolve({
            ok: !1,
            error: r === "no_target" || r === "timeout" ? r : "send_failed",
          });
        }
        break;
      }
      case "external_message":
      case "external_config":
        break;
      case "permission_request":
        this.handlePermissionRequest(e);
        break;
      case "notification":
        if (this.notificationHandler)
          this.notificationHandler({ method: e.method, params: e.params });
        break;
      case "error":
        if ((n.warn(`[${t}] Bridge error: ${e.error}`), this.selectedDeviceId))
          ((this.selectedDeviceId = void 0), (this.discoveryComplete = !1));
        break;
      default:
        n.warn(`[${t}] Unrecognized bridge message type: ${e.type}`);
    }
  }
  async handlePermissionRequest(e) {
    let { logger: n, serverName: t } = this.context,
      { tool_use_id: o, request_id: i } = e;
    if (!o || !i) {
      n.warn(`[${t}] permission_request missing tool_use_id or request_id`);
      return;
    }
    let s = this.pendingCalls.get(o);
    if (!s?.onPermissionRequest) {
      n.debug(
        `[${t}] Ignoring permission_request for unknown tool_use_id ${o.slice(0, 8)} (not our call)`,
      );
      return;
    }
    let r = {
      toolUseId: o,
      requestId: i,
      toolType: e.tool_type ?? "unknown",
      url: e.url ?? "",
      actionData: e.action_data,
      category: O(e.category),
    };
    (clearTimeout(s.timer), (s.permissionPaused = !0));
    try {
      let a = await s.onPermissionRequest(r);
      this.sendPermissionResponse(i, a);
    } catch (a) {
      (n.error(`[${t}] Error handling permission request:`, a),
        this.sendPermissionResponse(i, !1));
    }
    let c = this.pendingCalls.get(o);
    if (c) c.timer = this.createTimeoutTimer(o, c.timeoutMs);
  }
  sendPermissionResponse(e, n) {
    if (this.ws?.readyState === g.OPEN) {
      let t = { type: "permission_response", request_id: e, allowed: n };
      if (this.selectedDeviceId) t.target_device_id = this.selectedDeviceId;
      this.ws.send(JSON.stringify(t));
    }
  }
  handleToolResult(e) {
    let { logger: n, serverName: t, trackEvent: o } = this.context,
      i = e.tool_use_id;
    if (!i) {
      n.warn(`[${t}] Received tool_result without tool_use_id`);
      return;
    }
    let s = this.pendingCalls.get(i);
    if (!s) {
      n.debug(`[${t}] Received tool_result for unknown call: ${i.slice(0, 8)}`);
      let l = this.timedOutCalls.get(i);
      if (
        (o?.("chrome_bridge_tool_call_late_result", {
          tool_use_id: i,
          gap_from_timeout_ms: l ? Date.now() - l : null,
          reason: l ? "post_timeout" : "unknown",
          is_error: typeof e.is_error === "boolean" ? e.is_error : null,
        }),
        l)
      )
        this.timedOutCalls.delete(i);
      return;
    }
    let r = Date.now() - s.startTime,
      c = this.normalizeBridgeResponse(e),
      a = Boolean(e.is_error) || "error" in c;
    (clearTimeout(s.timer), this.pendingCalls.delete(i));
    let d = this.context.browserActivityObserver?.onToolResult;
    if (d)
      try {
        d({
          sessionId: s.sessionId,
          toolName: s.toolName,
          args: s.args,
          ok: !a,
          resultContent: a ? void 0 : c.result?.content,
        });
      } catch {
        n.debug(`[${t}] browser activity observer threw`);
      }
    if (a) {
      let l = c.error?.content,
        u = "Unknown error";
      if (typeof l === "string" && l) u = l.slice(0, 200);
      else if (Array.isArray(l)) {
        let p = l.find(
          (h) => typeof h === "object" && h !== null && "text" in h,
        );
        if (p?.text) u = p.text.slice(0, 200);
      }
      n.warn(
        `[${t}] Tool call error: ${s.toolName} (${i.slice(0, 8)}) after ${r}ms`,
      );
      let m = "unclassified_tool_error";
      try {
        m = classifyChromeToolError(s.toolName, u);
      } catch {}
      if (
        (o?.("chrome_bridge_tool_call_error", {
          tool_name: `browser:${s.toolName}`,
          tool_use_id: i,
          duration_ms: r,
          error_message: u,
          error_type: m,
          session_id: s.sessionId,
          user_message_uuid: s.userMessageUuid,
        }),
        !this.selectedDeviceId && !this.pairingInProgress)
      ) {
        ((this.discoveryComplete = !1),
          s.reject(
            new ExtensionDisconnectedMidCallError(
              `[${t}] Extension disconnected during tool call: ${s.toolName}`,
            ),
          ));
        return;
      }
    } else
      (n.debug(
        `[${t}] Tool call completed: ${s.toolName} (${i.slice(0, 8)}) in ${r}ms`,
      ),
        o?.("chrome_bridge_tool_call_completed", {
          tool_name: `browser:${s.toolName}`,
          tool_use_id: i,
          duration_ms: r,
          session_id: s.sessionId,
          user_message_uuid: s.userMessageUuid,
        }));
    s.resolve(c);
  }
  normalizeBridgeResponse(e) {
    let { notices: n, ...t } = e,
      o = q(n, (s) =>
        this.context.logger.warn(`[${this.context.serverName}] ${s}`),
      ),
      i = o ? { notices: o } : void 0;
    if (t.result || t.error) return i ? { ...t, ...i } : t;
    if (t.content) {
      if (t.is_error) return { error: { content: t.content }, ...i };
      return { result: { content: t.content }, ...i };
    }
    return i ? { ...t, ...i } : t;
  }
  getTimeoutDiagnostics() {
    let e = -1;
    try {
      let t = process.getSystemMemoryInfo(),
        o = t.free + (t.fileBacked ?? 0);
      e = t.total > 0 ? Math.round((o / t.total) * 1000) / 10 : -1;
    } catch {}
    let n =
      this.lastPongReceived > 0 ? Date.now() - this.lastPongReceived : void 0;
    return { free_mem_pct: e, pong_age_ms: n };
  }
  createTimeoutTimer(e, n) {
    let { logger: t, serverName: o, trackEvent: i } = this.context;
    return setTimeout(() => {
      let s = this.pendingCalls.get(e);
      if (!s) return;
      if (
        (this.timedOutCalls.set(e, Date.now()), this.timedOutCalls.size > 200)
      ) {
        let a = this.timedOutCalls.keys().next().value;
        if (a) this.timedOutCalls.delete(a);
      }
      this.pendingCalls.delete(e);
      let r = Date.now() - s.startTime,
        c = this.getTimeoutDiagnostics();
      if (
        (t.warn(
          `[${o}] Tool call timeout: ${s.toolName} (${e.slice(0, 8)}) after ${r}ms, pending calls: ${this.pendingCalls.size}`,
        ),
        i?.("chrome_bridge_tool_call_timeout", {
          tool_name: `browser:${s.toolName}`,
          tool_use_id: e,
          duration_ms: r,
          timeout_ms: n,
          session_id: s.sessionId,
          user_message_uuid: s.userMessageUuid,
          routing_ack_received: s.routingAckReceived ?? !1,
          routing_ack_pong_age_ms: s.routingAckPongAgeMs ?? null,
          permission_paused: s.permissionPaused ?? !1,
          ...c,
        }),
        this.isConnected())
      )
        s.reject(new ToolCallTimeoutError(`[${o}] Tool call timed out: ${s.toolName}`));
      else
        s.reject(
          new SocketConnectionError(
            `[${o}] Tool call timed out with bridge disconnected: ${s.toolName}`,
          ),
        );
    }, n);
  }
  scheduleReconnect() {
    let { logger: e, serverName: n, trackEvent: t } = this.context;
    if (this.reconnectTimer) return;
    if ((this.reconnectAttempts++, this.reconnectAttempts > 100)) {
      (e.warn(`[${n}] Giving up bridge reconnection after 100 attempts`),
        t?.("chrome_bridge_reconnect_exhausted", { total_attempts: 100 }),
        (this.reconnectAttempts = 0));
      return;
    }
    let o = Math.min(2000 * Math.pow(1.5, this.reconnectAttempts - 1), 30000);
    if (this.reconnectAttempts <= 10 || this.reconnectAttempts % 10 === 0)
      e.info(
        `[${n}] Bridge reconnecting in ${Math.round(o)}ms (attempt ${this.reconnectAttempts})`,
      );
    this.reconnectTimer = setTimeout(() => {
      ((this.reconnectTimer = null), this.connect());
    }, o);
  }
  startKeepAlive() {
    (this.stopKeepAlive(), (this.lastPongReceived = Date.now()));
    let { logger: e, serverName: n } = this.context;
    this.keepAliveInterval = setInterval(() => {
      if (this.ws?.readyState === g.OPEN)
        this.ws.send(JSON.stringify({ type: "ping" }));
      if (this.lastPongReceived > 0 && Date.now() - this.lastPongReceived > x)
        (e.warn(`[${n}] No pong received in ${x}ms, closing dead connection`),
          this.rejectPendingCalls(
            new SocketConnectionError("Bridge keepalive timeout \u2014 connection dead"),
          ),
          this.closeSocket(),
          this.scheduleReconnect());
    }, A);
  }
  stopKeepAlive() {
    if (this.keepAliveInterval)
      (clearInterval(this.keepAliveInterval), (this.keepAliveInterval = null));
    this.lastPongReceived = 0;
  }
  closeSocket() {
    if ((this.stopKeepAlive(), this.handshakeTimer))
      (clearTimeout(this.handshakeTimer), (this.handshakeTimer = null));
    if (this.ws)
      (this.ws.removeAllListeners(),
        this.ws.on("error", () => {}),
        this.ws.close(),
        (this.ws = null));
    if (
      ((this.connected = !1), (this.authenticated = !1), this.selectedDeviceId)
    )
      this.previousSelectedDeviceId = this.selectedDeviceId;
    if (
      ((this.selectedDeviceId = void 0),
      (this.discoveryComplete = !1),
      (this.multiBrowserPendingSelection = !1),
      (this.pendingPairingRequestId = void 0),
      (this.pairingInProgress = !1),
      this.abortPairingPrompt(),
      this.pendingSwitchResolve)
    )
      (this.pendingSwitchResolve(null), (this.pendingSwitchResolve = null));
    if (this.pendingDiscovery)
      (clearTimeout(this.pendingDiscovery.timeout),
        this.pendingDiscovery.resolve([]),
        (this.pendingDiscovery = null));
    if (this.peerConnectedWaiters.length > 0) {
      let e = this.peerConnectedWaiters;
      this.peerConnectedWaiters = [];
      for (let n of e) n(!1);
    }
    this.context.onPeerRosterChanged?.();
  }
  rejectPendingCalls(e) {
    for (let n of this.pendingCalls.values())
      (clearTimeout(n.timer), n.reject(e));
    this.pendingCalls.clear();
  }
  drainExternalRelays() {
    for (let e of this.pendingExternalMessages.values())
      (clearTimeout(e.timer), e.resolve({ ok: !1, error: "send_failed" }));
    this.pendingExternalMessages.clear();
  }
  cleanup() {
    if (this.reconnectTimer)
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.rejectPendingCalls(new SocketConnectionError("Bridge client disconnected")),
      this.drainExternalRelays(),
      this.closeSocket(),
      (this.reconnectAttempts = 0));
  }
}
function w(e) {
  return new b(e);
}
function C(e) {
  return e
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
    .replace(/\u0085/g, "\\u0085");
}
function U(e, n) {
  let t = (s) => C(JSON.stringify(s)),
    o = e.map((s) => {
      let r = s;
      return `  \u2022 tabId ${r.tabId}: ${t(r.title)} (${t(r.url)})`;
    }).join(`
`),
    i = { availableTabs: e };
  if (n !== void 0) i.tabGroupId = n;
  return {
    result: {
      content: [
        { type: "text", text: C(JSON.stringify(i)) },
        {
          type: "text",
          text: `

Tab Context:
- Available tabs:
${o}`,
        },
      ],
    },
  };
}
class I {
  clients = new Map();
  tabRoutes = new Map();
  context;
  notificationHandler = null;
  refreshPromise = null;
  generation = 0;
  constructor(e) {
    this.context = e;
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
    for (let n of this.clients.values()) n.setNotificationHandler(e);
  }
  async ensureConnected() {
    let { logger: e, serverName: n } = this.context;
    await this.refreshClients();
    let t = [];
    for (let i of this.clients.values())
      if (!i.isConnected()) t.push(i.ensureConnected().catch(() => !1));
    if (t.length > 0) await Promise.all(t);
    let o = this.getConnectedClients().length;
    if (o === 0) return (e.info(`[${n}] No connected sockets in pool`), !1);
    return (e.info(`[${n}] Socket pool: ${o} connected`), !0);
  }
  async callTool(e, n, t) {
    if (e === "tabs_context_mcp") return this.callTabsContext(n, t);
    let o = n.tabId;
    if (o !== void 0) {
      let s = this.tabRoutes.get(o);
      if (s) {
        let r = this.clients.get(s);
        if (r?.isConnected()) return r.callTool(e, n, t);
      }
    }
    let i = this.getConnectedClients();
    if (i.length === 0)
      throw new SocketConnectionError(
        `[${this.context.serverName}] No connected sockets available`,
      );
    return i[0].callTool(e, n, t);
  }
  isConnected() {
    return this.getConnectedClients().length > 0;
  }
  disconnect() {
    ((this.generation += 1), (this.refreshPromise = null));
    for (let e of this.clients.values()) e.disconnect();
    (this.clients.clear(), this.tabRoutes.clear());
  }
  getConnectedClients() {
    return [...this.clients.values()].filter((e) => e.isConnected());
  }
  async callTabsContext(e, n) {
    let { logger: t, serverName: o } = this.context,
      i = this.getConnectedClients();
    if (i.length === 0) throw new SocketConnectionError(`[${o}] No connected sockets available`);
    if (i.length === 1) {
      let a = await i[0].callTool("tabs_context_mcp", e, n);
      return (this.updateTabRoutes(a, this.getSocketPathForClient(i[0])), a);
    }
    let s = await Promise.allSettled(
        i.map(async (a) => {
          let d = await a.callTool("tabs_context_mcp", e, n),
            l = this.getSocketPathForClient(a);
          return { result: d, socketPath: l };
        }),
      ),
      r = [],
      c;
    this.tabRoutes.clear();
    for (let a of s) {
      if (a.status !== "fulfilled") {
        t.info(`[${o}] tabs_context_mcp failed on one socket: ${a.reason}`);
        continue;
      }
      let { result: d, socketPath: l } = a.value;
      this.updateTabRoutes(d, l);
      let u = this.extractTabs(d);
      if (u) r.push(...u);
      if (c === void 0) c = this.extractTabGroupId(d);
    }
    if (r.length > 0) return U(r, c);
    for (let a of s) if (a.status === "fulfilled") return a.value.result;
    throw new SocketConnectionError(`[${o}] All sockets failed for tabs_context_mcp`);
  }
  updateTabRoutes(e, n) {
    let t = this.extractTabs(e);
    if (!t) return;
    for (let o of t)
      if (typeof o === "object" && o !== null && "tabId" in o) {
        let i = o.tabId;
        this.tabRoutes.set(i, n);
      }
  }
  extractTabs(e) {
    if (!e || typeof e !== "object") return null;
    let t = e.result?.content;
    if (!t || !Array.isArray(t)) return null;
    for (let o of t)
      if (o.type === "text" && o.text)
        try {
          let i = JSON.parse(o.text);
          if (Array.isArray(i)) return i;
          let s = i;
          if (s && Array.isArray(s.availableTabs)) return s.availableTabs;
        } catch {}
    return null;
  }
  extractTabGroupId(e) {
    if (!e || typeof e !== "object") return;
    let t = e.result?.content;
    if (!t || !Array.isArray(t)) return;
    for (let o of t)
      if (o.type === "text" && o.text)
        try {
          let i = JSON.parse(o.text);
          if (typeof i.tabGroupId === "number") return i.tabGroupId;
        } catch {}
    return;
  }
  getSocketPathForClient(e) {
    for (let [n, t] of this.clients.entries()) if (t === e) return n;
    return "";
  }
  refreshClients() {
    if (!this.refreshPromise) {
      let e = this.doRefreshClients().finally(() => {
        if (this.refreshPromise === e) this.refreshPromise = null;
      });
      this.refreshPromise = e;
    }
    return this.refreshPromise;
  }
  async doRefreshClients() {
    let { logger: e, serverName: n } = this.context,
      t = this.generation,
      o;
    try {
      o = (await this.context.getSocketPaths?.()) ?? [];
    } catch (i) {
      e.info(`[${n}] Socket scan failed:`, i);
      return;
    }
    if (t !== this.generation) return;
    for (let i of o)
      if (!this.clients.has(i)) {
        e.info(`[${n}] Adding socket to pool: ${i}`);
        let s = {
            ...this.context,
            socketPath: i,
            getSocketPath: void 0,
            getSocketPaths: void 0,
          },
          r = createBridgeSocketClient(s);
        if (((r.disableAutoReconnect = !0), this.notificationHandler))
          r.setNotificationHandler(this.notificationHandler);
        this.clients.set(i, r);
      }
    for (let [i, s] of this.clients.entries())
      if (!o.includes(i)) {
        (e.info(`[${n}] Removing stale socket from pool: ${i}`),
          s.disconnect(),
          this.clients.delete(i));
        for (let [r, c] of this.tabRoutes.entries())
          if (c === i) this.tabRoutes.delete(r);
      }
  }
}
function k(e) {
  return new I(e);
}
var S = new Map(),
  T = "frontLoadedTabGroupId",
  L = [T, "isBridgeTimeout", "isFrontLoadBoundExceeded"];
function createChromeSocketClient(e) {
  return e.bridgeConfig ? w(e) : e.getSocketPaths ? k(e) : createBridgeSocketClient(e);
}
function createClaudeForChromeMcpServer(e, n) {
  let { serverName: t, logger: o } = e,
    i = n ?? createChromeSocketClient(e),
    s = new McpServer(
      { name: t, version: "1.0.0" },
      { capabilities: { tools: { listChanged: !0 }, logging: {} } },
    );
  return (
    s.setRequestHandler(ListToolsRequestSchema, () => {
      if (e.isDisabled?.()) return { tools: [] };
      let r = buildBrowserSelectionPrompt(e.askUserToolName);
      return {
        tools: [
          ...(e.bridgeConfig ? BROWSER_MCP_TOOL_DEFINITIONS : BROWSER_MCP_TOOL_DEFINITIONS.filter((a) => !BRIDGE_ONLY_BROWSER_TOOL_NAMES.has(a.name))).map(
            (a) =>
              a.name === "list_connected_browsers"
                ? { ...a, description: `${a.description} ${r}` }
                : a,
          ),
          ...(e.hostTools?.() ?? []),
        ],
      };
    }),
    s.setRequestHandler(CallToolRequestSchema, async (r) => {
      o.info(`[${t}] Executing tool: ${r.params.name}`);
      let c = e.getRendererSessionScope?.(r.params._meta),
        a = c
          ? {
              permissionMode: "ask",
              sessionScope: { ...c, tabGroupId: S.get(c.sessionId) },
            }
          : void 0,
        d = await executeBrowserToolCall(e, i, r.params.name, r.params.arguments || {}, a);
      if (c && !d.isError) {
        let l = d._meta?.[T],
          u =
            typeof l === "number"
              ? l
              : r.params.name === "tabs_context_mcp"
                ? parseTabsContextResult({ result: d }).tabGroupId
                : void 0;
        if (u !== void 0) S.set(c.sessionId, u);
      }
      if (d._meta) for (let l of L) delete d._meta[l];
      return d;
    }),
    i.setNotificationHandler((r) => {
      (o.info(`[${t}] Forwarding MCP notification: ${r.method}`),
        s.notification({ method: r.method, params: r.params }).catch((c) => {
          o.info(`[${t}] Failed to forward MCP notification: ${c.message}`);
        }));
    }),
    s
  );
}
export { createChromeSocketClient, createClaudeForChromeMcpServer };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { mB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { ge, l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getMcpServerConfigCacheKey, invokeMcpToolRaw, listMcpToolsRaw } from "../MCP客户端/chunk-7wm8t84g.js";
import { bridgeCarrierState, isSessionIngressUrl, isRemoteDevicesProxyUrl } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { isSubagentSession } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { buildMcpToolName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { sanitizeDeep } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { isValidMachineName } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { sanitizeDisplayText, getMcpClients, isRemoteToolForwardingEnabled, isSessionChannelDisabled, CCR_NEEDS_APPROVAL_ERROR_CODE, classifyMcpErrorSource, REMOTE_DEVICES_SERVER_NAME, DEVICE_LOCAL_TOOL_NAMES, BRIDGE_PLUMBING_TOOL_NAMES } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import {
  CURRENT_PROTOCOL_VERSION,
  REMOTE_TOOL_CALL_FIELD_NAME,
  REMOTE_TOOL_EXECUTION_META_KEY,
  REMOTE_TOOL_CALL_META_KEY,
  TOOL_USE_ID_META_KEY,
  resolveProtocolCompatibility,
  buildElicitationResult,
  getProtocolVersionsFromForeignEnvelope,
  getProtocolVersionsFromCurrentEnvelope,
  parseToolDescriptor,
  parseToolCallResult,
  normalizeDurationMs,
  jsonByteLength,
} from "../远程工具执行/remote-tool-protocol.js";
import { DEVICE_PASSTHROUGH_META_KEY, parseDevicePassthroughMeta, isNonDeviceToolName } from "../设备注册-Cowork/device-passthrough-meta.js";
import { getDirSyncPayload, SESSION_TRANSPORT_LIMITS } from "./session-event-transport.js";
import { RemoteSessionHostRegistry } from "./remote-session-host-registry.js";
import { normalizeMcpName } from "../MCP客户端/mcp-name-normalization.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import * as lazy_mcpClientModule_4cyej0np from "../MCP客户端/mcpClientModule.4cyej0np.js";

function T() {
  return lazy_mcpClientModule_4cyej0np.mcpClientModule();
}
class D {
  #e = new WeakMap();
  reinitialize(t) {
    let e = this.#e.get(t);
    if (e) return e;
    let r = T()
      .clearServerCache(t.name, t.config)
      .catch(() => {});
    return (this.#e.set(t, r), r);
  }
}
var de = -32000;
async function C(t, e, r) {
  let o = await F(t, e, r);
  if (o.kind !== "session_expired") return H(t, o);
  await e.recovery.reinitialize(o.connection);
  let s = await F(t, e, r);
  return s.kind === "session_expired" ? { kind: "expired_twice" } : H(t, s);
}
async function H(t, e) {
  if (e.kind === "connect_failed")
    await T()
      .evictStaleFailedConnectMemoForServe(t.name, t.config)
      .catch(() => {});
  return e;
}
async function F(t, { deadlineAt: e, signal: r, idempotent: o = !1 }, s) {
  let d = T(),
    g;
  try {
    g = await d.ensureConnectedClient(t, {
      signal: r,
      timeoutMs: Math.max(1, e - Date.now()),
      context: "remote tool execution",
    });
  } catch (m) {
    return { kind: "connect_failed", error: m };
  }
  let p = e - Date.now();
  if (p <= 0)
    return {
      kind: "connect_failed",
      error: Error("deadline reached before the request could be sent"),
    };
  try {
    return { kind: "ok", value: await s(g, p) };
  } catch (m) {
    return m instanceof Error &&
      (d.isMcpSessionExpiredError(m) || (o && ae(m, g)))
      ? { kind: "session_expired", connection: g }
      : { kind: "failed", error: m };
  }
}
function ae(t, e) {
  return (
    (("code" in t &&
      t.code === de &&
      t.message.includes("Connection closed")) ||
      A(t) === "CONNECTION_CLOSED") &&
    (e.config.type === "http" || e.config.type === "claudeai-proxy")
  );
}
var ce = { maxRequestBytes: 4128768, defaultDeadlineMs: 58000 },
  ue = -32001,
  le = "office_bridge.kind",
  me = "office_bridge.bound_miss",
  K = "office_bridge.listing",
  fe = new Set([
    "not_connected",
    "send_failed",
    "contested",
    "unsupported_on_bound",
  ]),
  pe = new Set(["disconnected", "cancelled"]),
  _e = new Set(["timeout"]),
  be = /not connected|not reachable|offline/i,
  ve = /disconnected before responding|connection may be closing/i,
  ye = /did not respond within/i,
  he = 200;
function z(t, e) {
  return {
    kind: "bridge",
    limits: ce,
    call: (r, o, s, d) => Ee(t, e, r, o, s, d),
    callPlumbing: (r, o, s) => Te(t, e, r, o, s),
  };
}
async function Te(t, e, r, o, s) {
  if (!BRIDGE_PLUMBING_TOOL_NAMES.has(r)) throw Error("callPlumbing: not a bridge plumbing tool");
  let d = Date.now(),
    g = normalizeDurationMs(s.deadlineMs),
    p = await C(
      t,
      {
        deadlineAt: d + g,
        recovery: e,
        signal: s.signal,
        idempotent: s.idempotent,
      },
      (m, f) =>
        invokeMcpToolRaw(
          m,
          { name: r, arguments: { ...o } },
          { signal: s.signal, timeout: f },
        ),
    );
  if (p.kind === "ok") {
    let m = parseToolCallResult(p.value),
      f = W(m.content),
      _ =
        m.isError && m.envelope.status === "absent" ? Y(p.value, f, g) : void 0;
    if (_ !== void 0) return j(_);
    return {
      kind: "result",
      structuredContent: p.value.structuredContent,
      text: f,
      isError: m.isError,
    };
  }
  if (s.signal.aborted) return { kind: "cancelled" };
  switch (p.kind) {
    case "connect_failed":
      return { kind: "unreachable", detail: sanitizeDisplayText(l(p.error)) };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail:
          "the device bridge rejected the session again right after re-initializing it; nothing ran",
      };
    case "failed":
      return j(q(p.error, g, void 0));
  }
}
function j(t) {
  switch (t.kind) {
    case "timed_out":
    case "unreachable":
    case "dropped":
    case "transport_error":
    case "cancelled":
      return t;
    default:
      return { kind: "transport_error", detail: `unexpected: ${t.kind}` };
  }
}
async function Ee(t, e, r, o, s, d) {
  let g = Date.now(),
    p = normalizeDurationMs(d.deadlineMs),
    m = buildElicitationResult(s),
    f = await C(
      t,
      { deadlineAt: g + p, recovery: e, signal: d.signal },
      (_, b) =>
        invokeMcpToolRaw(
          _,
          {
            name: r,
            arguments: { ...o, [REMOTE_TOOL_CALL_FIELD_NAME]: s },
            _meta: { [TOOL_USE_ID_META_KEY]: d.toolUseId, ...(m !== void 0 && { [REMOTE_TOOL_CALL_META_KEY]: m }) },
          },
          { signal: d.signal, timeout: b },
        ),
    );
  if (f.kind === "ok") {
    let _ = Se(f.value, Date.now() - g, p);
    return _.kind === "result"
      ? { ..._, metaCopy: m === void 0 ? "omitted" : "attached" }
      : _;
  }
  if (d.signal.aborted) return { kind: "cancelled" };
  switch (f.kind) {
    case "connect_failed":
      return { kind: "unreachable", detail: sanitizeDisplayText(l(f.error)) };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail:
          "the device bridge rejected the session again right after re-initializing it; nothing ran",
      };
    case "failed":
      return q(f.error, p, d.toolUseId);
  }
}
function Se(t, e, r) {
  let o = parseToolCallResult(t);
  switch (o.envelope.status) {
    case "malformed":
      return {
        kind: "transport_error",
        detail: "malformed result envelope",
        unreadableResult: !0,
      };
    case "present":
      return {
        kind: "result",
        content: o.content,
        isError: o.isError,
        envelope: o.envelope.envelope,
        elapsedMs: e,
        responseBytes: jsonByteLength(t),
        dirSync: getDirSyncPayload(t),
      };
    case "absent": {
      let s = o.isError ? Y(t, W(o.content), r) : void 0;
      if (s) return s;
      return {
        kind: "result",
        content: o.content,
        isError: o.isError,
        envelope: void 0,
        elapsedMs: e,
        responseBytes: jsonByteLength(t),
      };
    }
  }
}
function Y(t, e, r) {
  let o = Re(t);
  if (o !== void 0 && _e.has(o)) return { kind: "timed_out", capMs: r };
  if (o !== void 0 && pe.has(o))
    return { kind: "dropped", detail: `bridge: ${o}` };
  if (o !== void 0 && fe.has(o))
    return { kind: "unreachable", detail: `bridge: ${o}` };
  if (o === "malformed_result")
    return {
      kind: "transport_error",
      detail: "bridge: malformed result",
      unreadableResult: !0,
    };
  if (e.length > he) return;
  if (ye.test(e)) return { kind: "timed_out", capMs: r };
  if (ve.test(e)) return { kind: "dropped", detail: "bridge: disconnected" };
  if (be.test(e))
    return { kind: "unreachable", detail: "bridge: not connected" };
  return;
}
function Re(t) {
  let e =
    t !== null && typeof t === "object" && "_meta" in t ? t._meta : void 0;
  if (e === null || typeof e !== "object") return;
  let r = e,
    o = r[le];
  if (typeof o === "string") return o;
  return r[me] !== void 0 ? "not_connected" : void 0;
}
function q(t, e, r) {
  if (V(t) === ue || A(t) === "REQUEST_TIMEOUT")
    return { kind: "timed_out", capMs: e };
  let o = sanitizeDisplayText(l(t));
  if (V(t) === CCR_NEEDS_APPROVAL_ERROR_CODE && Me(t, r)) return { kind: "approval_unverified" };
  if (classifyMcpErrorSource(t) !== "downstream_unreachable")
    return { kind: "transport_error", detail: o };
  return Ce.has(A(t) ?? "")
    ? { kind: "unreachable", detail: o }
    : { kind: "dropped", detail: o };
}
var Ce = new Set([
  "ECONNREFUSED",
  "ConnectionRefused",
  "ENOTFOUND",
  "ENETUNREACH",
  "EAI_AGAIN",
  "FailedToOpenSocket",
]);
function Me(t, e) {
  let r = t !== null && typeof t === "object" && "data" in t ? t.data : void 0;
  if (typeof r !== "object" || r === null) return !1;
  let o = r;
  return (
    typeof o.args_sha256 === "string" &&
    typeof o.tool_name === "string" &&
    typeof o.tool_use_id === "string" &&
    e !== void 0 &&
    o.tool_use_id === e
  );
}
function V(t) {
  return t !== null &&
    typeof t === "object" &&
    "code" in t &&
    typeof t.code === "number"
    ? t.code
    : void 0;
}
function W(t) {
  return typeof t === "string"
    ? t
    : t.flatMap((e) => (e.type === "text" ? [e.text] : [])).join(`
`);
}
var ke = "attached-machine";
function X(t, e, r) {
  let o = e.map((c) => ({ ...c, name: sanitizeDeep(c.name) })),
    s = o
      .filter((c) => DEVICE_LOCAL_TOOL_NAMES.has(c.name))
      .map((c) => ({ toolName: c.name, meta: Ae(c), raw: c._meta?.[REMOTE_TOOL_EXECUTION_META_KEY] })),
    d = o.filter(
      (c) => !DEVICE_LOCAL_TOOL_NAMES.has(c.name) && isNonDeviceToolName(c.name) && c._meta?.[DEVICE_PASSTHROUGH_META_KEY] !== void 0,
    ),
    g = d.flatMap((c) => {
      let R = Pe(c);
      return R === void 0 ? [] : [{ bridgeName: c.name, marker: R }];
    }),
    p = new Set(g.map((c) => c.bridgeName)),
    m = new Set(d.filter((c) => !p.has(c.name)).map((c) => c.name)),
    f = m.size,
    _ = countMatching(s, (c) => c.meta === void 0),
    b = new Set(s.map((c) => c.toolName)),
    y = new Set(o.filter((c) => BRIDGE_PLUMBING_TOOL_NAMES.has(c.name)).map((c) => c.name)),
    v = new Map(
      g.map(({ bridgeName: c, marker: R }) => [c, { localName: R.tool }]),
    ),
    P = new Set([
      ...s.flatMap((c) => (c.meta ? [c.meta.target.name] : [])),
      ...g.map(({ marker: c }) => c.target.name),
    ]),
    re = o.reduce((c, R) => {
      let U = normalizeMcpName(R.name);
      return (c.set(U, (c.get(U) ?? 0) + 1), c);
    }, new Map()),
    ie = d.some((c) => (re.get(normalizeMcpName(c.name)) ?? 0) > 1),
    O =
      P.size > 1
        ? "two_names"
        : b.size < s.length || ie
          ? "duplicate_tool"
          : void 0;
  if (s.length === 0 && g.length === 0 && f === 0)
    return { hosts: [], invalid: O, unreadable: 0, unreadableMarkers: f };
  let L = s.find((c) => c.meta)?.meta,
    B = L?.target ?? g[0]?.marker.target,
    x = L === void 0 ? s.map((c) => c.raw) : [],
    N = x.map(getProtocolVersionsFromForeignEnvelope).find((c) => c !== void 0),
    se = x.map(getProtocolVersionsFromCurrentEnvelope).find((c) => c !== void 0);
  return {
    hosts: [
      {
        kind: "remote",
        source: "bridge",
        name: B?.name ?? ke,
        status: O === void 0 ? "online" : "offline",
        enforcement: "self",
        description: B,
        servedTools: b,
        passthroughTools: v,
        rejectedPassthroughTools: m,
        plumbingTools: y,
        protocol:
          N !== void 0
            ? { kind: "incompatible", announced: N }
            : resolveProtocolCompatibility(
                L?.protocol_versions ?? se ?? (s.length === 0 ? [CURRENT_PROTOCOL_VERSION] : void 0),
              ),
        transport: z(t, r),
      },
    ],
    invalid: O,
    unreadable: _,
    unreadableMarkers: f,
  };
}
function Pe(t) {
  let e = parseDevicePassthroughMeta(sanitizeDeep(t._meta?.[DEVICE_PASSTHROUGH_META_KEY]));
  return e !== void 0 && e.tool === buildMcpToolName(...Oe(t.name)) && isValidMachineName(e.target.name)
    ? e
    : void 0;
}
function Oe(t) {
  let e = t.indexOf("__");
  return e < 0 ? ["", t] : [t.slice(0, e), t.slice(e + 2)];
}
function Ae(t) {
  let e = parseToolDescriptor(sanitizeDeep(t._meta?.[REMOTE_TOOL_EXECUTION_META_KEY]));
  return e !== void 0 && e.tool === t.name && isValidMachineName(e.target.name) ? e : void 0;
}
var Le = 8000,
  De = 5000,
  Ie = 30000,
  Be = 2000,
  M = 5000,
  w = 60000;
class E {
  recovery = new D();
  connection = void 0;
  listingMemo = void 0;
  synced = !1;
  lastListingFailed = !1;
  lastForcedRelistAt = void 0;
  reportedUnmatched = !1;
  provisional = void 0;
  lastListedAt = void 0;
  unconnectedSince = void 0;
  failedAt = void 0;
  inFlight = void 0;
}
function forgetRemoteToolListing(t) {
  let e = t.toolState.get(E),
    r = Date.now(),
    o =
      e.provisional !== void 0 &&
      (e.provisional.stub || r - e.provisional.since < w)
        ? M
        : xe;
  if (
    (e.lastForcedRelistAt !== void 0 && r - e.lastForcedRelistAt < o) ||
    (e.lastListedAt !== void 0 && r - e.lastListedAt < M)
  )
    return !1;
  e.lastForcedRelistAt = r;
  let s = e.connection;
  if (s !== void 0) T().fetchToolsForClient.cache.delete(getMcpServerConfigCacheKey(s.name, s.config));
  return ((e.synced = !1), (e.listingMemo = void 0), !0);
}
var xe = 30000;
async function refreshRemoteToolHosts(t, e, r) {
  (J(t, e, r), await Ne(t, e, r), J(t, e, r));
}
function J(t, e, r) {
  let o = e.sourceHosts("session");
  e.replaceRemoteHosts("session", t.toolState.get(RemoteSessionHostRegistry).hostsForTable());
  let s = e.sourceHosts("session");
  if (k(o) === k(s)) return;
  logEvent("tengu_remote_tool_targets", {
    event:
      t.toolState.get(RemoteSessionHostRegistry).entries().length === 0 ? S("withdrawn") : fromEnum(oe(o, s)),
    source: S("session"),
    trigger: fromEnum(r),
    target_count: s.length,
    served_tool_count: s.reduce((d, g) => d + g.servedTools.size, 0),
    target_kind: fromEnumOpt(s[0]?.description?.kind),
    target_platform: fromEnumOpt(te(s[0]?.description?.platform)),
    incompatible_count: countMatching(s, (d) => d.protocol.kind === "incompatible"),
  });
}
async function Ne(t, e, r) {
  if (!(await isRemoteToolForwardingEnabled())) return;
  let o = t.toolState.get(E);
  return (
    (o.inFlight ??= Ue(t, o, e, r)
      .catch((s) => {
        logError(ge(s));
      })
      .finally(() => {
        o.inFlight = void 0;
      })),
    o.inFlight
  );
}
function getBridgeListingState(t) {
  let e = t.toolState.get(E);
  if (e.synced && !e.lastListingFailed && getListingProvisionalReason(t) !== void 0) return "unlisted";
  if (e.synced && !e.lastListingFailed) return "listed";
  return I(t) ? "unlisted" : "absent";
}
function isBridgeReached(t) {
  return t.toolState.get(E).connection !== void 0;
}
function isBridgeListingUnavailable(t, e) {
  return (
    t.toolState.get(E).lastListingFailed &&
    !e
      .hosts()
      .some(
        (o) =>
          o.kind === "remote" &&
          (o.source === "bridge" || o.source === "session"),
      )
  );
}
async function Ue(t, e, r, o) {
  let s = getMcpClients(t),
    d = Ye(s);
  if (d === void 0) {
    if (isSubagentSession(t.agentContext)) return;
    if ((Ge(s, e, o), (e.failedAt = void 0), (e.lastListingFailed = !1), I(t)))
      e.unconnectedSince ??= Date.now();
    else ((e.provisional = void 0), (e.unconnectedSince = void 0));
    if (e.connection !== void 0)
      ((e.connection = void 0),
        (e.listingMemo = void 0),
        Q(r, [], {
          invalid: void 0,
          unreadable: 0,
          unreadableMarkers: 0,
          trigger: o,
        }));
    return;
  }
  let g = T().fetchToolsForClient.cache.get(getMcpServerConfigCacheKey(d.name, d.config)),
    p = t.toolState
      .get(RemoteSessionHostRegistry)
      .entries()
      .some((v) => v.status === "online");
  if (
    e.synced &&
    d === e.connection &&
    g === e.listingMemo &&
    (p || !Ke(e.provisional))
  )
    return;
  if (e.failedAt?.connection === d && Date.now() - e.failedAt.time < Ie) return;
  let m = Date.now(),
    f = await C(
      d,
      { deadlineAt: m + Le, recovery: e.recovery, idempotent: !0 },
      (v, P) => He(v, Math.min(P, De)),
    );
  if (f.kind !== "ok") {
    ((e.lastListingFailed = !0),
      (e.failedAt =
        Date.now() - m >= Be ? { connection: d, time: Date.now() } : void 0),
      logForDebugging(
        `[remote-tools] device-bridge tools/list failed (${f.kind}); keeping last known machines${"error" in f ? `: ${l(f.error)}` : ""}`,
        { level: "warn" },
      ),
      logEvent("tengu_remote_tool_targets", {
        event: S("list_failed"),
        trigger: fromEnum(o),
        reason: "error" in f && je(f.error) ? S("timeout") : fromEnum(f.kind),
      }));
    return;
  }
  if (f.value.truncated)
    logForDebugging(
      "[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery",
      { level: "warn" },
    );
  let _ = X(d, f.value.tools, e.recovery),
    b = _.hosts.length === 0;
  if (b && (e.provisional === void 0 || e.provisional.stub !== f.value.stub))
    (logEvent("tengu_remote_tool_targets", {
      event: S("listed_empty"),
      trigger: fromEnum(o),
      tool_count: f.value.tools.length,
      truncated: f.value.truncated,
      has_served_name: f.value.tools.some((v) => DEVICE_LOCAL_TOOL_NAMES.has(v.name)),
      marker_count: countMatching(f.value.tools, (v) => v._meta?.[DEVICE_PASSTHROUGH_META_KEY] !== void 0),
      stub: f.value.stub,
    }),
      logForDebugging(
        `[remote-tools] device-bridge listing adopted no machine (${f.value.tools.length} tools${f.value.stub ? (p ? ", stub listing \u2014 the bound machine serves over the session channel instead" : ", stub listing \u2014 the bound machine has not announced yet; re-listing until it does") : ""})`,
      ));
  if (_.invalid !== void 0)
    logForDebugging(
      `[remote-tools] device-bridge listing rejected (${_.invalid}): one connection must announce exactly one machine \u2014 its first announced name stays attached but unreachable`,
      { level: "warn" },
    );
  Q(r, _.hosts, {
    invalid: _.invalid,
    unreadable: _.unreadable,
    unreadableMarkers: _.unreadableMarkers,
    trigger: o,
  });
  let y = !b && e.provisional !== void 0 && g !== void 0 && g === e.listingMemo;
  if (y) T().fetchToolsForClient.cache.delete(getMcpServerConfigCacheKey(d.name, d.config));
  ((e.connection = d),
    (e.listingMemo = y ? void 0 : g),
    (e.synced = !0),
    (e.lastListedAt = Date.now()),
    (e.unconnectedSince = void 0),
    (e.provisional = b
      ? {
          at: Date.now(),
          since: e.provisional?.since ?? Date.now(),
          stub: f.value.stub,
        }
      : void 0),
    (e.reportedUnmatched = !1),
    (e.failedAt = void 0),
    (e.lastListingFailed = !1),
    logForDebugging(
      `[remote-tools] device bridge matched: ${d.name} (${f.value.tools.length} tools over ${f.value.pages} page(s))`,
    ));
}
async function He(t, e) {
  let r = await listMcpToolsRaw(t, { timeout: e }),
    o = r._meta;
  return {
    tools: r.tools.filter(Fe),
    pages: 1,
    truncated: Boolean(r.nextCursor),
    stub: typeof o === "object" && o !== null && o[K] === "stub",
  };
}
function Fe(t) {
  return typeof t === "object" && t !== null && typeof t.name === "string";
}
function je(t) {
  let e = l(t).toLowerCase();
  return e.includes("timed out") || e.includes("timeout");
}
function I(t) {
  return getMcpClients(t).some(
    (e) => Z(e) && e.type !== "disabled" && e.type !== "needs-auth",
  );
}
function getListingProvisionalReason(t) {
  let e = $e(t);
  if (e === void 0) return;
  if (isSessionChannelDisabled()) return e;
  let r = t.toolState.get(RemoteSessionHostRegistry);
  if (r.hasAnnouncedThisLife())
    return r.entries().length === 0 ? "serves_nothing" : e;
  return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 ? "not_reannounced" : e;
}
async function awaitRemoteHostAnnounce(
  t,
  e,
  {
    deadlineMs: r = SESSION_TRANSPORT_LIMITS.defaultDeadlineMs,
    sliceMs: o = M,
    routableOtherwise: s,
  } = {},
) {
  let d = t.toolState.get(RemoteSessionHostRegistry);
  if (d.entries().length > 0) return { kind: "announced" };
  let g = d.announceWaitExpired();
  if (g !== void 0) return { kind: "gave_up_earlier", waitedMs: g };
  let p = Date.now();
  for (;;) {
    if (e.aborted) return { kind: "aborted" };
    if (d.hasAnnouncedThisLife()) return { kind: "announced" };
    let f = r - (Date.now() - p);
    if (f <= 0) break;
    let _ = await Ve(d, e, Math.min(o, f));
    if (_ === "announced") return { kind: "announced" };
    if (_ === "aborted") return { kind: "aborted" };
    if (s !== void 0 && (await s())) return { kind: "routable" };
  }
  let m = Date.now() - p;
  return (d.markAnnounceWaitExpired(m), { kind: "gave_up", waitedMs: m });
}
function Ve(t, e, r) {
  return new Promise((o) => {
    let s = (m) => {
        (clearTimeout(p), g(), e.removeEventListener("abort", d), o(m));
      },
      d = () => s("aborted"),
      g = t.onNextAnnounce(() => s("announced")),
      p = setTimeout((m) => m("slice"), r, s);
    if ((e.addEventListener("abort", d, { once: !0 }), e.aborted)) s("aborted");
  });
}
function $e(t) {
  let e = t.toolState.get(E);
  if (e.connection === void 0)
    return I(t) &&
      e.unconnectedSince !== void 0 &&
      Date.now() - e.unconnectedSince < w
      ? "connecting"
      : void 0;
  if (!e.provisional) return;
  if (Date.now() - e.provisional.since < w) return "connecting";
  return e.provisional.stub ? "not_connected" : void 0;
}
function Ke(t) {
  if (t === void 0) return !1;
  let e = Date.now();
  if (!t.stub && e - t.since >= w) return !1;
  return e - t.at >= M;
}
function Ge(t, e, r) {
  let o = t.filter((d) => d.name === REMOTE_DEVICES_SERVER_NAME);
  if (o.length === 0 || e.reportedUnmatched) return;
  let s = o.map(ze);
  if (s.every((d) => d === "connecting")) return;
  ((e.reportedUnmatched = !0),
    logForDebugging(
      `[remote-tools] a '${REMOTE_DEVICES_SERVER_NAME}' MCP entry exists but was not adopted as the device bridge: ${o.map((d, g) => `${s[g]} (type=${d.type}, scope=${d.config.scope})`).join("; ")}`,
      { level: "warn" },
    ),
    logEvent("tengu_remote_tool_targets", {
      event: S("no_bridge_connection"),
      trigger: fromEnum(r),
      servers_seen: o.length,
      reason: fromEnum(s[0] ?? "none"),
      ingress_base_unset: bridgeCarrierState.atStartup === void 0,
    }));
}
function ze(t) {
  if (ee(t)) return "scoped_entry";
  if (!("url" in t.config) || typeof t.config.url !== "string") return "no_url";
  if (!isSessionIngressUrl(t.config.url)) return "not_ccr_proxy_url";
  if (!isRemoteDevicesProxyUrl(t.config.url)) return "not_devices_upstream";
  if (!ne(t.config.url)) return "routing_shape";
  switch (t.type) {
    case "connected":
      return "none";
    case "disabled":
      return "disabled";
    case "needs-auth":
      return "needs_auth";
    default:
      return "connecting";
  }
}
function Ye(t) {
  return t.find((e) => e.type === "connected" && Z(e));
}
function Z(t) {
  return (
    t.name === REMOTE_DEVICES_SERVER_NAME &&
    !ee(t) &&
    "url" in t.config &&
    typeof t.config.url === "string" &&
    isRemoteDevicesProxyUrl(t.config.url) &&
    ne(t.config.url)
  );
}
function ee(t) {
  let { scope: e, pluginSource: r, agentSource: o } = t.config;
  return (
    e === "project" ||
    e === "local" ||
    e === "agent" ||
    r !== void 0 ||
    o !== void 0
  );
}
function ne(t) {
  try {
    let e = new URL(t),
      r = e.searchParams.getAll("toolbox_mcp_server_id"),
      o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(e.pathname)?.[1],
      s = r[0];
    return (
      e.searchParams.getAll("mcp_url").length === 1 &&
      (r.length === 0 ||
        (r.length === 1 && (s === REMOTE_DEVICES_SERVER_NAME || (o !== void 0 && s === We(o)))))
    );
  } catch {
    return !1;
  }
}
var qe = "00000000-0000-0000-0000-000000000000";
function We(t) {
  let e = mB(t, qe);
  return mB(REMOTE_DEVICES_SERVER_NAME, e);
}
function Q(
  t,
  e,
  { invalid: r, unreadable: o, unreadableMarkers: s, trigger: d },
) {
  let g = t.sourceHosts("bridge"),
    { dropped: p } = t.replaceRemoteHosts("bridge", e);
  if (p.length > 0)
    logForDebugging(
      `[remote-tools] the bridge announced ${p.length} machine(s) under a name this session cannot adopt; not adopted: ${p.join(", ")}`,
      { level: "warn" },
    );
  let m = t.sourceHosts("bridge"),
    f = k(g) !== k(m);
  if (r !== void 0)
    logEvent("tengu_remote_tool_targets", {
      event: S("listing_invalid"),
      reason: fromEnum(r),
      trigger: fromEnum(d),
    });
  let _ = f ? oe(g, m) : void 0;
  if (_ !== void 0)
    logEvent("tengu_remote_tool_targets", {
      event: fromEnum(_),
      trigger: fromEnum(d),
      target_count: m.length,
      served_tool_count: m.reduce((b, y) => b + y.servedTools.size, 0),
      passthrough_tool_count: m.reduce(
        (b, y) => b + (y.passthroughTools?.size ?? 0),
        0,
      ),
      target_kind: fromEnumOpt(m[0]?.description?.kind),
      target_platform: fromEnumOpt(te(m[0]?.description?.platform)),
      incompatible_count: countMatching(m, (b) => b.protocol.kind === "incompatible"),
      protocol_version:
        m[0]?.protocol.kind === "compatible" ? m[0].protocol.version : void 0,
    });
  if (o > 0 || s > 0)
    logEvent("tengu_remote_tool_targets", {
      event: S("unreadable"),
      trigger: fromEnum(d),
      unreadable_count: o,
      unreadable_marker_count: s,
    });
}
function te(t) {
  switch (t) {
    case void 0:
    case "darwin":
    case "linux":
    case "win32":
      return t;
    default:
      return "other";
  }
}
function k(t) {
  return t
    .map(
      (e) =>
        `${e.name}\x00${e.status}\x00${e.servedTools.size}\x00${e.passthroughTools?.size ?? 0}`,
    )
    .sort().join(`
`);
}
function oe(t, e) {
  let r = t.some((s) => s.status === "online"),
    o = e.some((s) => s.status === "online");
  if (t.length === 0) return e.length === 0 ? "changed" : "discovered";
  if (r && !o) return "went_offline";
  if (!r && o) return "came_online";
  return "changed";
}
export { forgetRemoteToolListing, refreshRemoteToolHosts, getBridgeListingState, isBridgeReached, isBridgeListingUnavailable, getListingProvisionalReason, awaitRemoteHostAnnounce };

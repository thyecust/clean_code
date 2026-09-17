// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sleep, withDeadline } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { Ve, dt, ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { COMMAND_MESSAGE_TAG, LOCAL_COMMAND_CAVEAT_TAG, TICK_TAG, TASK_NOTIFICATION_TAG, TEAMMATE_MESSAGE_TAG, CHANNEL_SOURCE_OPEN_TAG, FORK_BOILERPLATE_TAG, logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import {
  EXTERNAL_MESSAGE_PREFIX,
  stripWorkingPrefix,
  createHomeSeedGate,
  permissionUpdateSchema,
  MODEL_SWITCH_STDOUT_PREFIX,
  parseDeviceHookId,
  ControlRequestTimeoutError,
  ControlRequestNotDeliveredError,
  withControlRequestTelemetry,
  createControlResponseError,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { CROSS_SESSION_MESSAGE_PREFIX, CROSS_SESSION_OPENER_PREFIXES, isCrossSessionMessage } from "../Teammates团队/chunk-g6nvp9mm.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { signClientEvent, tryHandleFrame, buildSuccessControlResponse, prepareApiRequest, getSessionRequestHeaders, sendEventToRemoteSession, sendBashCommandToRemoteSession } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { isViolinWoodEnabled, isViolinWoodEnabledCached } from "../目录同步-dir-sync/chunk-97crm80y.js";
import { extractErrorDetail } from "./chunk-x4q0245z.js";
import { getTrustedDeviceToken, recoverFromUntrustedDevice } from "./chunk-tyce0p0b.js";
import { classifyElevatedAuthError } from "./code-session-api.js";
import { MAX_RESULT_BYTES } from "../远程工具执行/remote-tool-protocol.js";
import { SSEParser } from "./sse-parser.js";
import { drainResponseBody } from "../../01-核心基础设施/核心工具-其他/drain-response-body.js";
import { s, T, O, se, v, c, it, fe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getClientUserAgent, getClientPlatform } from "../../01-核心基础设施/HTTP-网络层/user-agent.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { randomUUID as me } from "crypto";
var x = createLazyValue(() => {
  let e = fe(s(), se()),
    t = it({ type: k("text"), text: s() }),
    o = new Map(),
    r = {
      text: t,
      tool_use: it({ type: k("tool_use"), id: s(), name: s(), input: e }),
      thinking: it({
        type: k("thinking"),
        thinking: s(),
        signature: s().optional(),
      }),
      redacted_thinking: it({ type: k("redacted_thinking"), data: s() }),
      server_tool_use: it({
        type: k("server_tool_use"),
        id: s(),
        name: s(),
        input: e,
      }),
      mcp_tool_use: it({
        type: k("mcp_tool_use"),
        id: s(),
        name: s(),
        server_name: s(),
        input: e,
      }),
    };
  for (let [p, d] of Object.entries(r)) o.set(p, d);
  let a = T().finite();
  return {
    text: t,
    assistantByType: o,
    usage: it({
      input_tokens: a,
      output_tokens: a,
      cache_creation_input_tokens: a.nullish(),
      cache_read_input_tokens: a.nullish(),
      iterations: v(it({})).nullish(),
    }),
    generic: it({ type: s() }),
    toolResultLike: it({ type: s(), tool_use_id: s() }),
    toolResult: it({
      type: k("tool_result"),
      tool_use_id: s(),
      is_error: O().optional(),
    }),
  };
});
function q(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var W = 256,
  Ne = "[truncated: too deep]";
function ve(e) {
  let t = [];
  if (typeof e === "object" && e !== null) t.push({ value: e, depth: 1 });
  while (t.length > 0) {
    let { value: o, depth: r } = t.pop();
    if (r > W) return !0;
    for (let a of Object.values(o))
      if (typeof a === "object" && a !== null)
        t.push({ value: a, depth: r + 1 });
  }
  return !1;
}
function He(e) {
  let t = 0,
    o = [{ value: e, depth: 1 }];
  while (o.length > 0) {
    let { value: r, depth: a } = o.pop(),
      p = Array.isArray(r) ? r : q(r) ? r : null;
    if (p === null) continue;
    for (let d of Object.keys(p)) {
      let S = Reflect.get(p, d);
      if (typeof S !== "object" || S === null) continue;
      if (a + 1 > W) (Reflect.set(p, d, Ne), t++);
      else o.push({ value: S, depth: a + 1 });
    }
  }
  return t;
}
function B(e) {
  return q(e) && typeof e.type === "string" ? e.type : null;
}
function Le(e) {
  let t = B(e);
  if (t !== null) return t;
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function je(e) {
  let t = B(e);
  if (t === null) return !1;
  let o = x();
  return (
    o.assistantByType.get(t) ??
    (t.endsWith("_tool_result") ? o.toolResultLike : o.generic)
  ).safeParse(e).success;
}
function We(e) {
  let t = e.content;
  if (t === void 0 || typeof t === "string") return !0;
  if (Array.isArray(t)) {
    let o = t.filter((r) => {
      let a = B(r);
      if (a === null) return !1;
      return a === "text"
        ? x().text.safeParse(r).success
        : x().generic.safeParse(r).success;
    });
    if (o.length !== t.length) e.content = o;
    return !0;
  }
  if (!q(t)) return ((e.content = String(t)), !0);
  try {
    return ((e.content = jsonStringify(t)), !0);
  } catch {
    return !1;
  }
}
function Ge(e) {
  let t = B(e);
  if (t === null || !q(e)) return !1;
  let o = x();
  if (t === "text") return o.text.safeParse(e).success;
  if (t === "tool_result") {
    if (!o.toolResult.safeParse(e).success) return !1;
    return We(e);
  }
  return o.generic.safeParse(e).success;
}
function E(e, t, o) {
  logForDebugging(
    `[wireFrameShape] ${e} frame ${typeof t === "string" ? t : "(no uuid)"}: ${o}`,
    { level: "error" },
  );
}
function Se(e, t, o, r) {
  let a = [],
    p = e.filter((d) => {
      try {
        if (t(d)) return !0;
      } catch (S) {
        return (a.push(`unreadable block (${l(S)})`), !1);
      }
      return (a.push(Le(d)), !1);
    });
  if (a.length === 0) return e;
  return (
    E(o, r, `dropped ${a.length} malformed content block(s): ${a.join(", ")}`),
    p
  );
}
function ze(e) {
  let t;
  if (typeof e.uuid === "string" && e.uuid !== "") t = e.uuid;
  else
    (E(
      "assistant",
      e.uuid,
      "minted a uuid \u2014 original was not a non-empty string",
    ),
      (t = me()),
      (e.uuid = t));
  let o = e.message;
  if (!q(o))
    return (
      E("assistant", e.uuid, "dropped \u2014 message is not an object"),
      !1
    );
  if (o.id !== void 0 && typeof o.id !== "string")
    ((o.id =
      typeof o.id === "number" && Number.isFinite(o.id)
        ? String(o.id)
        : e.uuid),
      E("assistant", e.uuid, "coerced a non-string message.id"));
  if (typeof o.content === "string")
    o.content = [{ type: "text", text: o.content }];
  let r = o.content;
  if (!Array.isArray(r))
    return (
      E("assistant", e.uuid, "dropped \u2014 message.content is not an array"),
      !1
    );
  let a = Se(r, je, "assistant", e.uuid);
  if (a.length === 0 && r.length > 0)
    return (
      E("assistant", e.uuid, "dropped \u2014 no valid content blocks remain"),
      !1
    );
  if (a !== r) o.content = a;
  return (Be(o, t), !0);
}
function Be(e, t) {
  let o = [];
  if (e.model !== void 0 && typeof e.model !== "string")
    (delete e.model, o.push("model"));
  if (
    e.stop_reason !== void 0 &&
    e.stop_reason !== null &&
    typeof e.stop_reason !== "string"
  )
    ((e.stop_reason = null), o.push("stop_reason"));
  if (e.usage !== void 0 && !x().usage.safeParse(e.usage).success)
    (delete e.usage, o.push("usage"));
  if (o.length > 0)
    E("assistant", t, `removed malformed envelope field(s): ${o.join(", ")}`);
}
function Ye(e) {
  if (e.uuid !== void 0 && (typeof e.uuid !== "string" || e.uuid === ""))
    (E(
      "user",
      e.uuid,
      "minted a uuid \u2014 original was not a non-empty string",
    ),
      (e.uuid = me()));
  let t = e.message;
  if (!q(t))
    return (E("user", e.uuid, "dropped \u2014 message is not an object"), !1);
  let o = t.content;
  if (typeof o === "string") return !0;
  if (!Array.isArray(o))
    return (
      E(
        "user",
        e.uuid,
        "dropped \u2014 message.content is neither string nor array",
      ),
      !1
    );
  let r = Se(o, Ge, "user", e.uuid);
  if (r.length === 0 && o.length > 0)
    return (
      E("user", e.uuid, "dropped \u2014 no valid content blocks remain"),
      !1
    );
  if (r !== o) t.content = r;
  return !0;
}
function re(e) {
  if (!q(e)) return !1;
  switch (e.type) {
    case "message_start":
      return q(e.message) && typeof e.message.id === "string";
    case "content_block_start": {
      let t = e.content_block;
      if (!q(t) || typeof t.type !== "string") return !1;
      switch (t.type) {
        case "tool_use":
        case "server_tool_use":
          return typeof t.id === "string" && typeof t.name === "string";
        case "text":
          return typeof t.text === "string";
        case "thinking":
          return typeof t.thinking === "string";
        default:
          return !0;
      }
    }
    case "content_block_delta": {
      let t = e.delta;
      if (!q(t)) return !1;
      switch (t.type) {
        case "text_delta":
          return typeof t.text === "string";
        case "input_json_delta":
          return typeof t.partial_json === "string";
        case "signature_delta":
          return typeof t.signature === "string";
        case "thinking_delta":
          return typeof t.thinking === "string";
        default:
          return !0;
      }
    }
    default:
      return !0;
  }
}
function conformWireFrame(e) {
  if (!q(e)) return !0;
  try {
    let t = !0;
    try {
      let r = He(e);
      if (r > 0)
        E(
          typeof e.type === "string" ? e.type : "unknown",
          e.uuid,
          `replaced ${r} subtree(s) nested deeper than ${W} levels with a marker`,
        );
    } catch {
      t = !1;
    }
    let o;
    switch (e.type) {
      case "assistant":
        o = ze(e);
        break;
      case "user":
        o = Ye(e);
        break;
      case "stream_event":
        if (((o = re(e.event)), !o))
          E("stream_event", e.uuid, "dropped \u2014 inner event is malformed");
        break;
      default:
        o = !0;
        break;
    }
    if (o && !t && ve(e))
      return (
        E(
          typeof e.type === "string" ? e.type : "unknown",
          e.uuid,
          `dropped \u2014 nested deeper than ${W} levels`,
        ),
        !1
      );
    return o;
  } catch (t) {
    return (
      E(
        typeof e.type === "string" ? e.type : "unknown",
        e.uuid,
        `dropped \u2014 conformance threw: ${l(t)}`,
      ),
      !1
    );
  }
}
var Xe = [
    "blocked_path",
    "decision_reason",
    "decision_reason_type",
    "title",
    "display_name",
    "description",
    "agent_id",
  ],
  Qe = [
    "classifier_approvable",
    "suppress_always_allow_rule",
    "default_to_no",
    "requires_user_interaction",
  ];
function sanitizeCanUseToolRequest(e) {
  if (!q(e)) return !1;
  try {
    if (
      typeof e.tool_name !== "string" ||
      typeof e.tool_use_id !== "string" ||
      !q(e.input) ||
      ve(e)
    )
      return (
        logForDebugging(
          "[wireFrameShape] can_use_tool request dropped \u2014 tool_name/tool_use_id not strings, input not an object, or nested too deep",
          { level: "error" },
        ),
        !1
      );
    let t = [];
    for (let o of Xe)
      if (e[o] !== void 0 && typeof e[o] !== "string") (delete e[o], t.push(o));
    for (let o of Qe)
      if (e[o] !== void 0 && typeof e[o] !== "boolean")
        (delete e[o], t.push(o));
    if (e.permission_suggestions !== void 0) {
      let o = e.permission_suggestions,
        r = Array.isArray(o) ? o.filter((a) => permissionUpdateSchema().safeParse(a).success) : [];
      if (!Array.isArray(o) || r.length !== o.length)
        if (
          (t.push(
            `permission_suggestions (${Array.isArray(o) ? `${o.length - r.length} of ${o.length} entries` : "not an array"})`,
          ),
          r.length > 0)
        )
          e.permission_suggestions = r;
        else delete e.permission_suggestions;
    }
    if (e.matched_ask_rule !== void 0) {
      let o = e.matched_ask_rule;
      if (
        !q(o) ||
        typeof o.source !== "string" ||
        typeof o.tool_name !== "string" ||
        (o.rule_content !== void 0 && typeof o.rule_content !== "string")
      )
        (delete e.matched_ask_rule, t.push("matched_ask_rule"));
    }
    if (t.length > 0)
      logForDebugging(
        `[wireFrameShape] can_use_tool request ${e.tool_use_id}: removed malformed field(s): ${t.join(", ")}`,
        { level: "error" },
      );
    return !0;
  } catch (t) {
    return (
      logForDebugging(
        `[wireFrameShape] can_use_tool request dropped \u2014 conformance threw: ${l(t)}`,
        { level: "error" },
      ),
      !1
    );
  }
}
function getWorkerEpoch(e) {
  let t = e.worker_epoch;
  return typeof t === "number" && Number.isSafeInteger(t) && t > 0 ? t : void 0;
}
var Je = new RegExp(`<${TICK_TAG}[\\s>]`, "i"),
  Ze = new RegExp(`</${TICK_TAG}>`, "i");
function et(e) {
  return Je.test(e) && Ze.test(e);
}
var NON_WORKER_PAYLOAD_TYPES = new Set(["user", "env_manager_log"]),
  Re = 500;
function _e(e) {
  if (
    e.startsWith("<bash-stdout") ||
    e.startsWith("<bash-stderr") ||
    e.startsWith("<local-command-stdout") ||
    e.startsWith("<local-command-stderr") ||
    e.startsWith(CHANNEL_SOURCE_OPEN_TAG) ||
    e.startsWith(`<${TEAMMATE_MESSAGE_TAG} `) ||
    e.startsWith(`<${TEAMMATE_MESSAGE_TAG}>`)
  )
    return !0;
  if (isCrossSessionMessage(e)) return !0;
  if (
    (e.startsWith(EXTERNAL_MESSAGE_PREFIX) || e.startsWith(CROSS_SESSION_MESSAGE_PREFIX)) &&
    e.startsWith(
      "<",
      e.indexOf(`
`) + 1,
    )
  )
    return !0;
  let t = CROSS_SESSION_OPENER_PREFIXES.find((o) => e.startsWith(o));
  if (t !== void 0 && e.startsWith("<", t.length)) return !0;
  if (et(e)) return !0;
  return (
    e.includes("<bash-input>") ||
    e.includes(`<${COMMAND_MESSAGE_TAG}>`) ||
    e.includes("<user-memory-input>") ||
    e.includes(`<${TASK_NOTIFICATION_TAG}`) ||
    e.includes("<mcp-resource-update") ||
    e.includes("<mcp-polling-update") ||
    e.includes(`<${FORK_BOILERPLATE_TAG}>`) ||
    e.includes(`<${LOCAL_COMMAND_CAVEAT_TAG}>`)
  );
}
function hasMachineGeneratedContent(e) {
  if (e.tool_use_result !== void 0) return !0;
  let t = e.message?.content;
  if (typeof t === "string") return _e(t);
  return (
    Array.isArray(t) &&
    t.some(
      (o) =>
        typeof o === "object" &&
        o !== null &&
        "type" in o &&
        (o.type === "tool_result" ||
          (o.type === "text" &&
            "text" in o &&
            typeof o.text === "string" &&
            _e(o.text))),
    )
  );
}
function hasNonTextContentBlocks(e) {
  let t = e.message?.content;
  return (
    Array.isArray(t) &&
    !t.every(
      (o) =>
        typeof o === "object" &&
        o !== null &&
        (o.type !== "text" || typeof o.text === "string"),
    )
  );
}
function aQt(e) {
  return hasMachineGeneratedContent(e) || hasNonTextContentBlocks(e);
}
function lQt(e) {
  if (aQt(e)) return !0;
  let t = e.message?.content;
  return (
    typeof t === "string"
      ? [t]
      : Array.isArray(t)
        ? t.flatMap((r) =>
            typeof r === "object" &&
            r !== null &&
            r.type === "text" &&
            typeof r.text === "string"
              ? [r.text]
              : [],
          )
        : []
  ).some(tt);
}
function tt(e) {
  let t = e.indexOf(`
`);
  return (
    (t === -1 || t === e.length - 1) &&
    (e.startsWith(EXTERNAL_MESSAGE_PREFIX) ||
      e.startsWith(CROSS_SESSION_MESSAGE_PREFIX) ||
      CROSS_SESSION_OPENER_PREFIXES.some((o) => e.startsWith(o.trimEnd())))
  );
}
import { randomUUID as _t } from "crypto";
import { isDeepStrictEqual } from "util";
function ye(e, t) {
  if (t !== void 0) return t;
  return e === "side_question" ? 600000 : 75000;
}
import { appendFile } from "fs/promises";
function P(e, t, o) {
  return;
}
import { randomUUID as Y } from "crypto";
var st = 1000,
  we = 30000,
  K = 5,
  ot = 45000,
  ke = 5000,
  be = 30000,
  rt = 30000,
  lt = new Set([401, 403, 404]),
  ie = 4096,
  ut = {
    verified: "verified",
    verified_by_gate: "verified",
    verified_keyless_device: "verified",
    service_vouched: "verified",
    absent: "unverified",
    invalid: "unverified",
  };
function N(e) {
  return String(e)
    .slice(0, 64)
    .replace(/[^\x20-\x7e]/g, "?");
}
function ct(e) {
  if (typeof e !== "string") return "unknown";
  let t = e.startsWith("DEVICE_ATTESTATION_STATUS_")
    ? e.slice(26).toLowerCase()
    : e;
  return ut[t] ?? "unknown";
}
var pt = 2000;
function Ce(e, t, o) {
  let r = typeof e.created_at === "string" ? Date.parse(e.created_at) : NaN;
  if (Number.isNaN(r)) return { replayed: !0 };
  return {
    sentAt: r,
    replayed: r < t + pt,
    ...(o !== void 0 && { ageMs: ht(o, r) - r }),
  };
}
function ht(e, t) {
  let o = Date.now(),
    r = performance.now(),
    a = e.serviceMs + Math.max(o - e.wallMs, r - e.monotonicMs);
  if (t > a) return ((e.serviceMs = t), (e.wallMs = o), (e.monotonicMs = r), t);
  return a;
}
var gt = createLazyValue(() => c({ error: c({ type: k("session_not_active") }) }));
function ae(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    typeof e.type === "string"
  );
}
var mt = new Map([
  [
    "thinking_tokens",
    ["estimated_tokens", "estimated_tokens_delta", "user_message_uuid"],
  ],
  [
    "post_turn_summary",
    ["summarizes_uuid", "status_category", "status_detail", "needs_action"],
  ],
  ["task_summary", ["detail"]],
  ["commands_changed", ["commands"]],
]);
function ft(e) {
  let t =
    e.type === "system" && typeof e.subtype === "string"
      ? mt.get(e.subtype)
      : void 0;
  if (!t) return null;
  let o = {
    type: "system",
    subtype: e.subtype,
    uuid: e.uuid,
    session_id: e.session_id,
  };
  for (let r of t) if (r in e) o[r] = e[r];
  return ae(o) ? o : null;
}
class de {
  sessionId;
  orgUuid;
  getAccessToken;
  callbacks;
  onAuth401;
  state = "idle";
  abortController = null;
  reconnectAttempts = 0;
  exhaustedBudget = !1;
  reconnectTimer = null;
  livenessTimer = null;
  driftTimer = null;
  lastDriftCheck = 0;
  lastSequenceNum = 0;
  issuedRequestIds = new Set();
  ownRequestUuids = new Map();
  trustedDeviceToken;
  deviceProofRenewed = !1;
  sendsInFlight;
  servesSession;
  rediallingPastBudget = !1;
  connectedSince = 0;
  serviceClock = void 0;
  eventSigner;
  constructor(
    e,
    t,
    o,
    r,
    a,
    p,
    { trackSends: d = !1, keepRedialling: S, eventSigner: R } = {},
  ) {
    this.sessionId = e;
    this.orgUuid = t;
    this.getAccessToken = o;
    this.callbacks = r;
    this.onAuth401 = a;
    if (p !== void 0 && p > 0) this.lastSequenceNum = p;
    ((this.sendsInFlight = d ? new Set() : null),
      (this.servesSession = S ?? (() => !1)),
      (this.eventSigner = R));
  }
  get keepRedialling() {
    try {
      return this.servesSession();
    } catch {
      return !1;
    }
  }
  async flushSends(e) {
    if (this.sendsInFlight === null || this.sendsInFlight.size === 0) return;
    await withDeadline(Promise.allSettled([...this.sendsInFlight]), e);
  }
  async connect() {
    if (this.state === "connecting" || this.state === "connected") {
      logForDebugging("[SessionsV2Client] Already connecting/connected");
      return;
    }
    ((this.state = "connecting"), (this.connectedSince = Date.now()));
    let e = new URL(
      `${getOauthConfig().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events/stream`,
    );
    if (this.lastSequenceNum > 0)
      e.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    let t = new AbortController();
    this.abortController = t;
    let o;
    try {
      o = await this.authHeaders();
    } catch (a) {
      if (this.abortController !== t) return;
      (logForDebugging(
        `[SessionsV2Client] Could not build the stream's credentials: ${l(a)}`,
        { level: "error" },
      ),
        (this.abortController = null),
        this.handleStreamEnd());
      return;
    }
    let r = { ...o, Accept: "text/event-stream" };
    if (t.signal.aborted || this.abortController !== t) return;
    if (this.lastSequenceNum > 0)
      r["Last-Event-ID"] = String(this.lastSequenceNum);
    (logForDebugging(
      `[SessionsV2Client] Connecting to ${e.href} (from_sequence_num=${this.lastSequenceNum})`,
    ),
      this.readStream(e, r, t));
  }
  loadTrustedDeviceToken() {
    let e = void 0,
      t = () => {
        if (this.trustedDeviceToken === e) this.trustedDeviceToken = void 0;
      },
      o = (async () => {
        try {
          let r = (await isViolinWoodEnabled()) ? ((await getTrustedDeviceToken()) ?? "") : "";
          if (!r) t();
          return r;
        } catch (r) {
          return (
            t(),
            logForDebugging(
              `[SessionsV2Client] trusted-device token unavailable, sending no td-v1 header: ${l(r)}`,
            ),
            ""
          );
        }
      })();
    return ((e = o), o);
  }
  renewDeviceProof() {
    if (this.deviceProofRenewed) return;
    this.deviceProofRenewed = !0;
    let e = this.trustedDeviceToken,
      t = void 0,
      o = () => {
        if (this.trustedDeviceToken === t) this.trustedDeviceToken = void 0;
      },
      r = (async () => {
        let a = e === void 0 ? "" : await e.catch(() => "");
        try {
          let d = (await isViolinWoodEnabled()) ? await recoverFromUntrustedDevice(a || void 0) : void 0;
          if (d) return d;
        } catch (d) {
          logForDebugging(`[SessionsV2Client] trusted-device re-enrollment failed: ${l(d)}`);
        }
        let p = await this.loadTrustedDeviceToken();
        if (!p) o();
        return p;
      })().catch(
        (a) => (
          o(),
          logForDebugging(`[SessionsV2Client] device proof renewal failed: ${l(a)}`),
          ""
        ),
      );
    ((t = r), (this.trustedDeviceToken = r));
  }
  async recoverTrustedDeviceToken(e) {
    try {
      if (!(await isViolinWoodEnabled())) return !1;
      let t = await recoverFromUntrustedDevice(e || void 0);
      if (!t) return !1;
      return ((this.trustedDeviceToken = Promise.resolve(t)), !0);
    } catch (t) {
      return (
        logForDebugging(`[SessionsV2Client] trusted-device re-enrollment failed: ${l(t)}`),
        !1
      );
    }
  }
  async postEvents(e, t, o, r = rt) {
    let a = await fetch(e, {
      method: "POST",
      headers: o,
      body: jsonStringify(t),
      signal: AbortSignal.timeout(r),
      ...getProxyFetchOptions({ url: e }),
    });
    if (a.ok) {
      let R = (await a.json()).results?.[0],
        _ = R ? parseInt(String(R.sequence_num), 10) : NaN;
      return { ok: !0, sequence_num: isNaN(_) ? 0 : _ };
    }
    let p,
      d = !1;
    if (a.status === 403 && isViolinWoodEnabledCached()) p = await Ee(a);
    else if (a.status === 409) d = await vt(a);
    else await drainResponseBody(a);
    return {
      ok: !1,
      status: a.status,
      refusal: p,
      inactive: d,
      sentDeviceToken: o["X-Trusted-Device-Token"],
    };
  }
  async readStream(e, t, o) {
    let r,
      a = !1,
      p = setTimeout(() => {
        ((a = !0), o.abort());
      }, be);
    try {
      r = await fetch(e.href, {
        method: "GET",
        headers: t,
        signal: o.signal,
        ...getProxyFetchOptions({ url: e.href }),
      });
    } catch (_) {
      if ((clearTimeout(p), a)) {
        (logForDebugging(`[SessionsV2Client] Connect timed out after ${be}ms, reconnecting`, {
          level: "error",
        }),
          logFeatureSad("remote_connect", "remote_connect_timeout"),
          this.handleStreamEnd());
        return;
      }
      if (o.signal.aborted) return;
      (logForDebugging(`[SessionsV2Client] Connect error: ${l(_)}`, { level: "error" }),
        logFeatureSad("remote_connect", "remote_connect_request_failed"),
        this.callbacks.onError?.(ge(_)),
        this.handleStreamEnd());
      return;
    }
    if (!r.ok || !r.body) {
      logForDebugging(`[SessionsV2Client] HTTP ${r.status} on SSE connect`, {
        level: "error",
      });
      let _;
      if (r.status === 403) _ = await Ee(r);
      else await drainResponseBody(r);
      if ((clearTimeout(p), this.abortController !== o)) return;
      if (r.status === 401 && this.onAuth401) {
        (logForDebugging("[SessionsV2Client] 401 on SSE connect \u2014 refreshing"),
          logFeatureBad("remote_connect", "remote_connect_auth_401"));
        let M = await this.onAuth401(this.getAccessToken());
        if (this.abortController !== o) return;
        if (!M && this.reconnectAttempts >= K && this.keepRedialling) {
          (logFeatureBad("remote_connect", "remote_connect_reconnect_exhausted"),
            (this.state = "closed"),
            (this.exhaustedBudget = !0),
            this.callbacks.onClose?.());
          return;
        }
        this.handleStreamEnd();
        return;
      }
      if (_ === "untrusted_device") {
        let M = await this.recoverTrustedDeviceToken(
          t["X-Trusted-Device-Token"],
        );
        if (this.abortController !== o) return;
        if (M) {
          (logForDebugging(
            "[SessionsV2Client] untrusted_device on SSE connect \u2014 re-enrolled, reconnecting",
          ),
            logFeatureSad("remote_connect", "remote_connect_untrusted_device"),
            this.handleStreamEnd());
          return;
        }
      }
      if (lt.has(r.status)) {
        (logFeatureBad("remote_connect", "remote_connect_permanent_failure"),
          (this.state = "closed"),
          this.callbacks.onClose?.(_));
        return;
      }
      (logFeatureSad("remote_connect", "remote_connect_http_error"),
        this.handleStreamEnd());
      return;
    }
    clearTimeout(p);
    let d = Date.parse(r.headers.get("date") ?? "");
    if (Number.isNaN(d))
      ((this.serviceClock = void 0),
        logForDebugging(
          "[SessionsV2Client] The stream answered without a Date header: frames on it cannot be dated against the service clock",
          { level: "warn" },
        ));
    else
      ((this.connectedSince = d),
        (this.serviceClock = {
          serviceMs: d,
          wallMs: Date.now(),
          monotonicMs: performance.now(),
        }));
    ((this.state = "connected"),
      (this.reconnectAttempts = 0),
      (this.rediallingPastBudget = !1),
      this.resetLivenessTimer(),
      this.startDriftWatch(),
      logForDebugging("[SessionsV2Client] Connected"),
      logFeatureOk("remote_connect"),
      this.callbacks.onConnected?.());
    let S = r.body.getReader(),
      R = new SSEParser();
    try {
      while (!0) {
        let { done: _, value: M } = await S.read();
        if (_) break;
        for (let C of R.push(M))
          if ((this.resetLivenessTimer(), C.event && C.data))
            this.handleFrame(C.event, C.id, C.data);
      }
    } catch (_) {
      if (o.signal.aborted) return;
      (logForDebugging(`[SessionsV2Client] Stream read error: ${l(_)}`, { level: "error" }),
        logFeatureSad("remote_connect", "remote_connect_stream_error"));
    } finally {
      S.releaseLock();
    }
    if (!o.signal.aborted)
      (logForDebugging("[SessionsV2Client] Stream ended"), this.handleStreamEnd());
  }
  handleFrame(e, t, o) {
    let r;
    try {
      r = jsonParse(o);
    } catch (a) {
      (logError(
        dt(
          Error(`[SessionsV2Client] Failed to parse ${e} frame: ${l(a)}`),
          "SessionsV2Client: failed to parse event frame",
        ),
      ),
        logFeatureSad("remote_connect", "remote_connect_frame_parse_failed"));
      return;
    }
    switch (e) {
      case "client_event": {
        let a = r,
          p = parseInt(t ?? String(a.sequence_num), 10);
        if (!isNaN(p) && p > this.lastSequenceNum) this.lastSequenceNum = p;
        if (!ae(a.payload)) {
          logForDebugging(
            `[SessionsV2Client] Dropping client_event with no payload.type (event_type=${a.event_type})`,
          );
          return;
        }
        if (a.payload.type === "control_response") {
          let { response: d } = a.payload;
          if (!d || typeof d !== "object" || typeof d.request_id !== "string") {
            logForDebugging(
              `[SessionsV2Client] Dropping malformed control_response from source=${a.source}`,
              { level: "warn" },
            );
            return;
          }
        }
        if (a.payload.type === "user") {
          if (a.source !== "worker" && hasMachineGeneratedContent(a.payload)) {
            logForDebugging(
              `[SessionsV2Client] Dropping worker-output-shaped user frame from source=${a.source} \u2014 only the worker produces tool results and execution output`,
              { level: "warn" },
            );
            return;
          }
          if (hasNonTextContentBlocks(a.payload)) {
            logForDebugging(
              `[SessionsV2Client] Dropping user frame with malformed content from source=${a.source}`,
              { level: "warn" },
            );
            return;
          }
        }
        if (a.source !== "worker") {
          if (a.payload.type === "control_response") {
            if (this.issuedRequestIds.has(a.payload.response.request_id)) {
              logForDebugging(
                `[SessionsV2Client] Dropping control_response for this client's request_id from source=${a.source} \u2014 only the worker may answer our RPCs`,
                { level: "warn" },
              );
              return;
            }
            if (
              a.payload.response.pending_user_dialog_requests ||
              a.payload.response.pending_permission_requests
            ) {
              logForDebugging(
                `[SessionsV2Client] Stripping prompt-redelivery fields from control_response with source=${a.source}`,
              );
              let {
                pending_user_dialog_requests: d,
                pending_permission_requests: S,
                ...R
              } = a.payload.response;
              this.deliver(
                { ...a.payload, response: R },
                {
                  source: a.source,
                  ...Ce(a, this.connectedSince, this.serviceClock),
                },
              );
              return;
            }
          } else if (!NON_WORKER_PAYLOAD_TYPES.has(a.payload.type)) {
            if (
              a.payload.type === "control_request" &&
              typeof a.payload.request_id === "string" &&
              this.issuedRequestIds.has(a.payload.request_id)
            ) {
              let d = "uuid" in a.payload ? a.payload.uuid : void 0;
              if (
                typeof d !== "string" ||
                d !== this.ownRequestUuids.get(a.payload.request_id)
              ) {
                logForDebugging(
                  `[SessionsV2Client] A copy of own request ${N(a.payload.request_id)} from source=${N(a.source)} under another event uuid \u2014 ignored`,
                );
                return;
              }
              let S = ct(a.device_attestation_status);
              if (
                (logForDebugging(
                  `[SessionsV2Client] Own request ${N(a.payload.request_id)} echoed from source=${N(a.source)}: device proof ${N(a.device_attestation_status)} (${S})`,
                ),
                S === "unverified")
              )
                this.renewDeviceProof();
              this.callbacks.onOwnRequestEchoed?.(a.payload.request_id, S);
              return;
            }
            logForDebugging(
              `[SessionsV2Client] Dropping ${a.payload.type} from source=${a.source}`,
            );
            return;
          }
        } else if (a.payload.type === "control_response")
          (this.issuedRequestIds.delete(a.payload.response.request_id),
            this.ownRequestUuids.delete(a.payload.response.request_id));
        this.deliver(a.payload, {
          source: a.source,
          ...Ce(a, this.connectedSince, this.serviceClock),
        });
        return;
      }
      case "ephemeral_event": {
        let a = r,
          p = a.payload;
        if (ae(a.payload)) {
          let d = ft(p);
          if (d) {
            this.deliver(d, {});
            return;
          }
          if (a.payload.type !== "stream_event") {
            logForDebugging(
              `[SessionsV2Client] Dropping ${a.payload.type} on ephemeral channel`,
            );
            return;
          }
          if (!re(a.payload.event)) {
            logForDebugging(
              "[SessionsV2Client] Dropping malformed stream_event on ephemeral channel",
              { level: "warn" },
            );
            return;
          }
          this.deliver(a.payload, {});
        }
        return;
      }
      case "catch_up_truncated":
        (logForDebugging("[SessionsV2Client] catch_up_truncated \u2014 transcript gap"),
          logFeatureSad("remote_connect", "remote_catch_up_truncated"),
          this.callbacks.onCatchUpTruncated?.());
        return;
      case "session_update": {
        let a = r?.connection_status;
        if (typeof a === "string")
          try {
            this.callbacks.onWorkerConnectionStatus?.(a);
          } catch (p) {
            logForDebugging(
              `[SessionsV2Client] worker connection status handler threw: ${l(p)}`,
              { level: "error" },
            );
          }
        else logForDebugging("[SessionsV2Client] Ignoring session_update frame");
        return;
      }
      case "delivery_update":
        logForDebugging(`[SessionsV2Client] Ignoring ${e} frame`);
        return;
      default:
        logForDebugging(`[SessionsV2Client] Unknown SSE event type '${e}'`, {
          level: "warn",
        });
        return;
    }
  }
  deliver(e, t) {
    if (!tryHandleFrame((o) => this.callbacks.onMessage(o, t), e, "SessionsV2Client"))
      logFeatureSad("remote_connect", "remote_connect_frame_handler_threw");
  }
  handleStreamEnd() {
    if (
      (this.clearLivenessTimer(),
      this.clearDriftWatch(),
      this.state === "closed")
    )
      return;
    this.abortController = null;
    let e = this.reconnectAttempts >= K;
    if (e && !this.keepRedialling) {
      (logForDebugging(`[SessionsV2Client] Reconnect budget exhausted (${K}), closing`),
        logFeatureBad("remote_connect", "remote_connect_reconnect_exhausted"),
        (this.state = "closed"),
        (this.exhaustedBudget = !0),
        this.callbacks.onClose?.());
      return;
    }
    if (!e) this.reconnectAttempts++;
    else if (!this.rediallingPastBudget)
      ((this.rediallingPastBudget = !0),
        logFeatureSad("remote_connect", "remote_connect_redialling_past_budget"));
    this.state = "idle";
    let t = e ? we : Math.min(st * 2 ** (this.reconnectAttempts - 1), we);
    if (
      (logForDebugging(
        `[SessionsV2Client] Reconnecting in ${t}ms (attempt ${this.reconnectAttempts}/${this.keepRedialling ? "\u221E" : K}, from_sequence_num=${this.lastSequenceNum})`,
      ),
      !e)
    )
      this.callbacks.onReconnecting?.();
    this.reconnectTimer = setTimeout(() => {
      ((this.reconnectTimer = null), this.connect());
    }, t);
  }
  onLivenessTimeout = () => {
    ((this.livenessTimer = null),
      logForDebugging("[SessionsV2Client] Liveness timeout, reconnecting", { level: "warn" }),
      this.abortController?.abort(),
      (this.abortController = null),
      this.handleStreamEnd());
  };
  resetLivenessTimer() {
    (this.clearLivenessTimer(),
      (this.livenessTimer = setTimeout(this.onLivenessTimeout, ot)));
  }
  clearLivenessTimer() {
    if (this.livenessTimer)
      (clearTimeout(this.livenessTimer), (this.livenessTimer = null));
  }
  startDriftWatch() {
    (this.clearDriftWatch(),
      (this.lastDriftCheck = Date.now()),
      (this.driftTimer = setInterval(() => {
        let e = Date.now(),
          t = e - this.lastDriftCheck;
        if (
          ((this.lastDriftCheck = e), t > ke * 2 && this.state === "connected")
        )
          (logForDebugging(
            `[SessionsV2Client] Wall-clock drift ${t}ms \u2014 reconnecting after suspend`,
          ),
            this.reconnect());
      }, ke)),
      this.driftTimer.unref?.());
  }
  clearDriftWatch() {
    if (this.driftTimer)
      (clearInterval(this.driftTimer), (this.driftTimer = null));
  }
  sendEvent(e) {
    return this.trackSend(
      this.postEvent(e).then((t) =>
        t.outcome === "accepted" ? { sequence_num: t.sequence_num } : null,
      ),
    );
  }
  trackSend(e) {
    if (this.sendsInFlight !== null) {
      let t = this.sendsInFlight;
      t.add(e);
      let o = () => {
        t.delete(e);
      };
      e.then(o, o);
    }
    return e;
  }
  async postEvent(e, t = {}) {
    if (this.state === "closed")
      return (
        logForDebugging("[SessionsV2Client] Cannot send: closed", { level: "warn" }),
        logFeatureBad("remote_send_event", "remote_send_event_closed"),
        { outcome: "failed", cause: "closed" }
      );
    let o = `${getOauthConfig().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events`;
    try {
      let r = await signClientEvent(this.eventSigner, this.sessionId, e),
        a = { session_id: this.sessionId, events: [r] },
        p = await this.authHeaders(),
        d = await this.postEvents(o, a, p, t.timeoutMs);
      if (!d.ok && d.status === 401 && this.onAuth401) {
        if (
          (logForDebugging("[SessionsV2Client] 401 on POST \u2014 refreshing + retry"),
          await this.onAuth401(this.getAccessToken()))
        )
          d = await this.postEvents(
            o,
            a,
            await this.authHeaders(),
            t.timeoutMs,
          );
      }
      let S = !1;
      if (
        !d.ok &&
        d.refusal === "untrusted_device" &&
        (await this.recoverTrustedDeviceToken(d.sentDeviceToken))
      )
        (logForDebugging(
          "[SessionsV2Client] untrusted_device on POST \u2014 re-enrolled, retrying",
        ),
          (d = await this.postEvents(
            o,
            a,
            await this.authHeaders(),
            t.timeoutMs,
          )),
          (S = !0));
      if (!d.ok) {
        if (
          (logForDebugging(
            `[SessionsV2Client] POST /events returned ${d.status}${d.inactive ? " (session not active)" : ""}`,
            { level: "warn" },
          ),
          d.inactive)
        )
          return (
            logFeatureSad("remote_send_event", "remote_send_event_session_inactive"),
            { outcome: "session_inactive" }
          );
        return (
          logFeatureBad("remote_send_event", "remote_send_event_http_error"),
          { outcome: "failed", cause: "http", status: d.status }
        );
      }
      if (S) logFeatureSad("remote_send_event", "remote_send_event_untrusted_device");
      else logFeatureOk("remote_send_event");
      return { outcome: "accepted", sequence_num: d.sequence_num };
    } catch (r) {
      return (
        logForDebugging(`[SessionsV2Client] POST /events failed: ${l(r)}`, { level: "warn" }),
        logFeatureBad("remote_send_event", "remote_send_event_request_failed"),
        { outcome: "failed", cause: St(r) ? "timeout" : "network" }
      );
    }
  }
  sendControlResponse(e, t = Y(), o = {}) {
    return (
      logForDebugging("[SessionsV2Client] Sending control_response"),
      this.trackSend(this.postEvent({ ...e, uuid: t }, o))
    );
  }
  sendControlRequest(e, t) {
    return this.postControlRequest(e, t)?.requestId ?? null;
  }
  postControlRequest(e, t) {
    if (this.state === "closed")
      return (
        logForDebugging("[SessionsV2Client] Cannot send control_request: closed", {
          level: "warn",
        }),
        null
      );
    let o = Y();
    if ((this.issuedRequestIds.add(o), this.issuedRequestIds.size > Re)) {
      logForDebugging(
        "[SessionsV2Client] issuedRequestIds overflow \u2014 evicting oldest unanswered request_id",
        { level: "warn" },
      );
      let p = this.issuedRequestIds.values().next().value;
      if (p !== void 0)
        (this.issuedRequestIds.delete(p), this.ownRequestUuids.delete(p));
    }
    let r = { type: "control_request", request_id: o, request: e, uuid: Y() };
    (this.ownRequestUuids.set(o, r.uuid),
      logForDebugging(`[SessionsV2Client] Sending control_request: ${e.subtype}`));
    let a = this.trackSend(
      this.postEvent(r).then((p) => {
        if (
          p.outcome === "session_inactive" ||
          (p.outcome === "failed" && p.cause === "http")
        )
          t?.(o);
        return p;
      }),
    );
    return { requestId: o, posted: a };
  }
  sendControlCancelRequest(e) {
    if (this.state === "closed") return;
    (logForDebugging(`[SessionsV2Client] Sending control_cancel_request: ${e}`),
      this.sendEvent({
        type: "control_cancel_request",
        request_id: e,
        uuid: Y(),
      }));
  }
  isConnected() {
    return this.state === "connected";
  }
  close() {
    if (
      (logForDebugging("[SessionsV2Client] Closing"),
      (this.state = "closed"),
      (this.exhaustedBudget = !1),
      this.clearLivenessTimer(),
      this.clearDriftWatch(),
      this.reconnectTimer)
    )
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.abortController?.abort(), (this.abortController = null));
  }
  reconnect() {
    if (
      (logForDebugging("[SessionsV2Client] Force reconnect"),
      (this.reconnectAttempts = 0),
      (this.exhaustedBudget = !1),
      this.clearLivenessTimer(),
      this.clearDriftWatch(),
      this.reconnectTimer)
    )
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.abortController?.abort(),
      (this.abortController = null),
      (this.state = "idle"),
      this.connect());
  }
  isRevivable() {
    return this.state === "closed" && this.exhaustedBudget;
  }
  reviveAfterExhaustion() {
    if (
      !(
        this.keepRedialling &&
        this.state === "idle" &&
        this.reconnectAttempts >= K &&
        this.reconnectTimer !== null
      ) &&
      (this.state !== "closed" || !this.exhaustedBudget)
    )
      return !1;
    return (
      logFeatureSad("remote_connect", "remote_connect_revived_by_user_send"),
      this.reconnect(),
      !0
    );
  }
  async authHeaders() {
    let e = await (this.trustedDeviceToken ??= this.loadTrustedDeviceToken());
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": getClientPlatform(),
      "x-organization-uuid": this.orgUuid,
      "User-Agent": getClientUserAgent(),
      ...(e && { "X-Trusted-Device-Token": e }),
    };
  }
}
async function Ee(e) {
  let t = await Te(e);
  return classifyElevatedAuthError(t, extractErrorDetail(t));
}
async function vt(e) {
  return gt().safeParse(await Te(e)).success;
}
async function Te(e) {
  let t = e.body?.getReader();
  if (!t) return;
  try {
    let o = new Uint8Array(ie),
      r = 0;
    for (;;) {
      let { done: a, value: p } = await t.read();
      if (a || !p) break;
      let d = Math.min(p.length, ie - r);
      if ((o.set(p.subarray(0, d), r), (r += d), r >= ie)) break;
    }
    return jsonParse(new TextDecoder().decode(o.subarray(0, r)));
  } catch {
    return;
  } finally {
    t.cancel().catch(() => {});
  }
}
function St(e) {
  return e instanceof Error && e.name === "TimeoutError";
}
var yt = 1000,
  $e = 200,
  wt = {
    can_use_tool: createLazyValue(() =>
      c({
        request_id: s(),
        request: it({
          subtype: k("can_use_tool"),
          tool_name: s(),
          input: fe(s(), se()),
          tool_use_id: s(),
        }),
      }),
    ),
    request_user_dialog: createLazyValue(() =>
      c({
        request_id: s(),
        request: it({
          subtype: k("request_user_dialog"),
          dialog_kind: s(),
          payload: fe(s(), se()),
        }),
      }),
    ),
  };
function bt(e, t) {
  let o = wt[t]().safeParse(e);
  if (!o.success) return null;
  return {
    type: "control_request",
    request_id: o.data.request_id,
    request: o.data.request,
  };
}
function qe(e, t) {
  try {
    return isDeepStrictEqual(e, t);
  } catch {
    return !1;
  }
}
function A(e, t) {
  if ((e.add(t), e.size > yt)) {
    let o = e.values().next().value;
    if (o !== void 0) e.delete(o);
  }
}
function Pe(e, t, o) {
  if ((e.set(t, o), e.size > $e)) {
    let r = e.keys().next().value;
    if (r !== void 0) e.delete(r);
  }
}
var GATING_CONTROL_REQUEST_SUBTYPES = ["can_use_tool", "request_user_dialog"];
function formatLogValue(e) {
  return e.length > 80
    ? `${e.slice(0, 80).replace(/[^\x20-\x7e]/g, "?")}\u2026(+${e.length - 80})`
    : e.replace(/[^\x20-\x7e]/g, "?");
}
var H = 256,
  Ct = 3,
  Et = 750,
  Tt = 35000;
function Q(e) {
  if (e.withheld) return "withheld";
  if (e.status === 429) return "http_429";
  if (e.status !== void 0) return "http_4xx";
  return e.cause ?? "unknown";
}
function qt(e) {
  return (
    e === "http_429" || e === "server" || e === "timeout" || e === "network"
  );
}
var SEND_REASON_CANCELLED = "cancelled",
  SEND_REASON_WITHDRAWN = "withdrawn",
  Me = { outcome: "failed", cause: "closed" },
  Pt = 1500,
  Fe = [1000, 5000, 15000, 45000],
  De = Fe.length,
  Mt = ["remote_tool_call", "remote_plumbing_call", "remote_tools_probe"],
  Dt = 120000;
function describeUndeliveredSend(e, t) {
  switch (e) {
    case "permission":
      return "A permission answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "dialog":
      return "A dialog answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "hook":
      return t === "overtaken"
        ? "A hook's decision from this machine did not reach the cloud session before it stopped waiting for it: if the hook's deadline passed the tool call it was judging may have run without it; if the turn was interrupted, nothing ran."
        : "A hook's decision from this machine could not be delivered to the cloud session, which waits for it until the hook's deadline and then proceeds without it. Interrupt the session if that tool call must not run.";
    case "tool":
      return t === "overtaken"
        ? "The result of work this machine did for the cloud session (a command it ran, or files it synced) did not reach the session before it stopped waiting for it."
        : "The result of work this machine did for the cloud session (a command it ran, or files it synced) could not be delivered; the session waits for it until its deadline and then carries on without it.";
  }
}
class RemoteSessionManager {
  config;
  callbacks;
  client = null;
  pendingPermissionRequests = new Map();
  undeliveredResponses = new Map();
  undeliveredHookIds = new Set();
  hookGiveUpsTold = new Set();
  pendingDialogRequests = new Set();
  pendingForwardedHooks = new Set();
  settledForwardedHookIds = new Set();
  workerSeenThisConnection = !1;
  pendingServedRequests = new Map();
  settledServedRequestIds = new Set();
  errorShapedControlResponseIds = new Set();
  seenControlResponseIds = new Set();
  retiredPermissionRequestIds = new Set();
  reinstatablePermissionRequests = new Map();
  reinstatableDialogIds = new Set();
  pendingControlRequests = new Map();
  pendingModelSwitchIds = new Set();
  sendGates = new Set();
  heldSends = new Set();
  chainedSends = 0;
  lifetime = new AbortController();
  serving = !1;
  firstSendReleased = !1;
  exitFlushRequested = !1;
  withheldPromptInFlight = null;
  sentAMessage = !1;
  lastHeld = { issued: Promise.resolve(), posted: Promise.resolve() };
  pendingInterrupt = null;
  constructor(e, t) {
    this.config = e;
    this.callbacks = t;
    if (e.homeSeed !== void 0 && e.homeSeedHoldsFirstSend !== !1)
      this.gateSendsOnSettings(e.homeSeed);
    if (e.withheldInitialPrompt !== void 0) {
      let o = e.withheldInitialPrompt;
      queueMicrotask(() => void this.sendWithheldInitialPrompt(o));
    } else if (e.initialPromptUuid !== void 0)
      e.dirSync?.sync.messageSent(e.initialPromptUuid);
  }
  connect() {
    logForDebugging(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
    let e = {
      onMessage: (t, o) => this.handleMessage(t, o),
      onConnected: () => {
        (logForDebugging("[RemoteSessionManager] Connected"),
          this.config.dirSync?.sync.afterConnect());
        for (let t of this.undeliveredResponses.values())
          if (((t.failures = 0), t.giveUpOnSettle === "undelivered"))
            t.giveUpOnSettle = null;
        (this.resendUndeliveredResponses(),
          (this.workerSeenThisConnection = !1),
          this.callbacks.onConnected?.());
      },
      onClose: (t) => {
        if (
          (logForDebugging("[RemoteSessionManager] Disconnected"), this.client?.isRevivable())
        )
          this.giveUpUndeliveredResponses();
        else this.dropUndeliveredResponses();
        this.callbacks.onDisconnected?.(t);
      },
      onReconnecting: () => {
        ((this.workerSeenThisConnection = !1),
          logForDebugging("[RemoteSessionManager] Reconnecting"),
          this.callbacks.onReconnecting?.());
      },
      onOwnRequestEchoed: (t, o) => {
        let r = this.pendingControlRequests.get(t);
        if (r?.onEchoed)
          (this.pendingControlRequests.set(t, { ...r, onEchoed: void 0 }),
            r.onEchoed(o));
      },
      onWorkerConnectionStatus: (t) => {
        if (
          (logForDebugging(
            `[RemoteSessionManager] The service reports the worker ${t === "connected" || t === "disconnected" ? t : "in an unknown state"}`,
          ),
          t === "connected")
        )
          this.noteWorkerLive();
        else if (t === "disconnected")
          ((this.workerSeenThisConnection = !1),
            this.callbacks.onWorkerGone?.());
      },
      onCatchUpTruncated: () => {
        (logForDebugging("[RemoteSessionManager] Catch-up truncated"),
          this.callbacks.onCatchUpTruncated?.());
      },
      onError: (t) => {
        (logForDebugging(`[RemoteSessionManager] Stream error: ${t.message}`, {
          level: "error",
        }),
          this.callbacks.onError?.(t));
      },
    };
    ((this.client = new de(
      this.config.sessionId,
      this.config.orgUuid,
      this.config.getAccessToken,
      e,
      this.config.onAuth401,
      this.config.initialSequenceNum,
      {
        trackSends: this.config.trackSendsInFlight === !0,
        keepRedialling: () =>
          this.config.keepStreamRedialling === !0 || this.serving,
        ...this.signedOpts({}),
      },
    )),
      this.client.connect());
  }
  handleMessage(e, t = {}) {
    if ((P("in", e, t), t.source === "worker" && t.replayed !== !0))
      this.noteWorkerLive();
    if (e.type === "control_request") {
      this.handleControlRequest(e, t.ageMs);
      return;
    }
    if (e.type === "control_cancel_request") {
      let { request_id: r } = e;
      (this.reinstatablePermissionRequests.delete(r),
        this.reinstatableDialogIds.delete(r));
      let a = this.undeliveredResponses.get(r);
      if (a?.kind === "hook" || a?.kind === "tool") this.giveUp(a, "overtaken");
      else if (a) this.dropKept(a);
      else if (
        this.config.keepUndeliveredResponses === !0 &&
        this.settledForwardedHookIds.has(r) &&
        !this.hookGiveUpsTold.has(r)
      )
        (A(this.hookGiveUpsTold, r),
          logFeatureBad("remote_control_response", "overtaken"),
          this.callbacks.onResponseUndelivered?.(r, "hook", "overtaken"));
      if (this.pendingForwardedHooks.delete(r)) {
        (logForDebugging(
          `[RemoteSessionManager] Forwarded hook request cancelled by the worker: ${formatLogValue(r)}`,
        ),
          this.callbacks.onForwardedHookCancelled?.(r, "worker"));
        return;
      }
      if (this.retireServedRequest(r, "worker")) return;
      if (this.pendingDialogRequests.delete(r)) {
        (logForDebugging(`[RemoteSessionManager] User dialog request cancelled: ${r}`),
          this.callbacks.onUserDialogCancelled?.(r));
        return;
      }
      let p = this.pendingPermissionRequests.get(r);
      if (!p) {
        logForDebugging(
          `[RemoteSessionManager] control_cancel_request for unknown request ${r} \u2014 nothing pending, ignoring`,
        );
        return;
      }
      (logForDebugging(`[RemoteSessionManager] Permission request cancelled: ${r}`),
        this.retirePermissionRequest(r),
        this.callbacks.onPermissionCancelled?.(r, p.tool_use_id));
      return;
    }
    if (e.type === "system" && e.subtype === "control_request_progress") {
      let r = this.pendingControlRequests.get(e.request_id);
      if (!r) {
        logForDebugging(
          `[RemoteSessionManager] control_request_progress for unknown request ${e.request_id} \u2014 ignoring`,
        );
        return;
      }
      clearTimeout(r.timer);
      let a = setTimeout(
        this.onControlRequestTimeout,
        r.timeoutMs,
        e.request_id,
        r.subtype,
        r.timeoutMs,
      );
      (this.pendingControlRequests.set(e.request_id, { ...r, timer: a }),
        r.onProgress?.(e));
      return;
    }
    if (e.type === "control_response") {
      let { request_id: r } = e.response,
        a =
          this.config.ignoreErrorShapedDialogReplies === !0 &&
          e.response.subtype === "error";
      if (a) A(this.errorShapedControlResponseIds, r);
      else this.recordSeenControlResponseId(r);
      let p = this.undeliveredResponses.get(r);
      if (
        p !== void 0 &&
        "uuid" in e &&
        e.uuid === p.uuid &&
        p.giveUpOnSettle !== "overtaken"
      )
        if ((this.dropKept(p), p.failures > 0))
          logFeatureSad("remote_control_response", "recovered");
        else logFeatureOk("remote_control_response");
      this.pendingModelSwitchIds.delete(r);
      let d = this.pendingControlRequests.get(r);
      if (d)
        if (
          (this.pendingControlRequests.delete(r),
          clearTimeout(d.timer),
          d.removeAbortListener?.(),
          e.response.subtype === "success")
        )
          d.resolve(e.response.response);
        else d.reject(createControlResponseError(e.response));
      else {
        let S = this.pendingPermissionRequests.get(r);
        if (S) {
          let R =
            e.response.subtype === "success"
              ? e.response.response?.toolName
              : void 0;
          if (typeof R === "string" && R !== S.tool_name) {
            (logForDebugging(
              `[RemoteSessionManager] Permission response ${r} has mismatched toolName \u2014 worker will drop it, keeping prompt`,
            ),
              this.seenControlResponseIds.delete(r));
            return;
          }
          (this.retirePermissionRequest(r),
            logForDebugging(
              `[RemoteSessionManager] Permission request ${r} answered elsewhere \u2014 dismissing`,
            ),
            this.callbacks.onPermissionCancelled?.(r, S.tool_use_id));
        } else if (this.pendingDialogRequests.has(r))
          if (a)
            logForDebugging(
              `[RemoteSessionManager] User dialog request ${r} got an error-shaped reply elsewhere \u2014 worker still waiting, keeping it`,
            );
          else
            (this.pendingDialogRequests.delete(r),
              logForDebugging(
                `[RemoteSessionManager] User dialog request ${r} answered elsewhere \u2014 dismissing`,
              ),
              this.callbacks.onUserDialogCancelled?.(r));
        else if (this.pendingForwardedHooks.has(r))
          logForDebugging(
            `[RemoteSessionManager] Ignoring a peer control_response (${e.response.subtype}) for forwarded hook request ${formatLogValue(r)} \u2014 still answering it here`,
          );
        else
          logForDebugging(
            `[RemoteSessionManager] Unmatched control_response ${r} (${e.response.subtype})${e.response.subtype === "error" ? `: ${e.response.error}` : ""}`,
          );
      }
      if (this.config.rearmRedeliveredPermissionRequests === !0)
        this.rearmRedelivered(
          e.response.pending_permission_requests,
          "can_use_tool",
          this.pendingPermissionRequests,
        );
      this.rearmRedelivered(
        e.response.pending_user_dialog_requests,
        "request_user_dialog",
        this.pendingDialogRequests,
      );
      return;
    }
    if (
      this.config.keepOwnModelSwitchBreadcrumb !== !0 &&
      this.pendingModelSwitchIds.size > 0 &&
      e.type === "user" &&
      "isReplay" in e &&
      e.isReplay === !0 &&
      typeof e.message?.content === "string" &&
      e.message.content.startsWith(MODEL_SWITCH_STDOUT_PREFIX)
    ) {
      let [r] = this.pendingModelSwitchIds;
      (this.pendingModelSwitchIds.delete(r),
        logForDebugging("[RemoteSessionManager] Dropped own set_model breadcrumb echo"));
      return;
    }
    let o = At(e);
    if (o !== null && t.source === "worker")
      this.config.dirSync?.sync.laneChanged(o);
    if (e.type === "result") {
      if (
        (this.config.dirSync?.sync.afterResult(),
        this.sentAMessage ||
          this.config.homeSeedHoldsFirstSend !== !1 ||
          this.config.initialPromptUuid !== void 0)
      )
        this.config.homeSeed?.afterFirstReply(this.lifetime.signal);
      for (let [r, a] of this.pendingPermissionRequests)
        (logForDebugging(
          `[RemoteSessionManager] Turn ended with permission request ${r} unresolved \u2014 dismissing`,
        ),
          this.callbacks.onPermissionCancelled?.(r, a.tool_use_id),
          this.retiredPermissionRequestIds.add(r),
          Pe(this.reinstatablePermissionRequests, r, a));
      this.pendingPermissionRequests.clear();
      for (let r of this.pendingDialogRequests)
        (logForDebugging(
          `[RemoteSessionManager] Turn ended with user dialog request ${r} unresolved \u2014 dismissing`,
        ),
          this.callbacks.onUserDialogCancelled?.(r),
          A(this.reinstatableDialogIds, r));
      this.pendingDialogRequests.clear();
    }
    this.callbacks.onMessage(e, t);
  }
  retirePermissionRequest(e) {
    (this.pendingPermissionRequests.delete(e),
      this.retiredPermissionRequestIds.add(e));
  }
  rearmRedelivered(e, t, o) {
    if (!Array.isArray(e)) return;
    e.slice(0, $e).forEach((r) => {
      let a = bt(r, t);
      if (a === null) return;
      if (
        this.seenControlResponseIds.has(a.request_id) ||
        (t === "can_use_tool" &&
          this.errorShapedControlResponseIds.has(a.request_id))
      ) {
        logForDebugging(
          `[RemoteSessionManager] Redelivered ${t} ${formatLogValue(a.request_id)} already answered \u2014 skipping`,
        );
        return;
      }
      let p = !1;
      if (
        t === "can_use_tool" &&
        this.retiredPermissionRequestIds.has(a.request_id)
      ) {
        let S = this.reinstatablePermissionRequests.get(a.request_id);
        if (S === void 0) {
          logForDebugging(
            `[RemoteSessionManager] Redelivered can_use_tool ${formatLogValue(a.request_id)} already retired here \u2014 skipping`,
          );
          return;
        }
        if (
          (this.reinstatablePermissionRequests.delete(a.request_id),
          !qe(S, a.request))
        ) {
          (logFeatureBad("remote_permission_request", "redelivered_mismatch"),
            logForDebugging(
              `[RemoteSessionManager] Redelivered can_use_tool ${formatLogValue(a.request_id)} differs from the request first shown under that id \u2014 not arming it`,
              { level: "warn" },
            ));
          return;
        }
        (this.retiredPermissionRequestIds.delete(a.request_id), (p = !0));
      } else if (t === "request_user_dialog")
        p = this.reinstatableDialogIds.has(a.request_id);
      let d = o.has(a.request_id);
      if (
        (this.handleControlRequest(a, void 0, { reinstated: p }),
        !d && o.has(a.request_id))
      )
        (this.reinstatableDialogIds.delete(a.request_id),
          logFeatureOk(
            t === "can_use_tool"
              ? "remote_permission_redelivery"
              : "remote_dialog_redelivery",
          ));
    });
  }
  recordSeenControlResponseId(e) {
    A(this.seenControlResponseIds, e);
  }
  recordSettledForwardedHookId(e) {
    A(this.settledForwardedHookIds, e);
  }
  handleControlRequest(e, t, o) {
    let { request_id: r, request: a } = e;
    if (a.subtype === "can_use_tool") {
      logForDebugging(`[RemoteSessionManager] Permission request for tool: ${a.tool_name}`);
      let p = this.pendingPermissionRequests.get(r);
      if (p !== void 0) {
        if (qe(p, a))
          logForDebugging(
            `[RemoteSessionManager] Duplicate permission request ${formatLogValue(String(r))} \u2014 already pending, skipping`,
          );
        else
          (logFeatureBad("remote_permission_request", "redelivered_mismatch"),
            logForDebugging(
              `[RemoteSessionManager] Permission request ${formatLogValue(String(r))} redelivered with a different body (${formatLogValue(String(a.tool_name))}) \u2014 keeping the one first shown (${formatLogValue(p.tool_name)})`,
              { level: "warn" },
            ));
        return;
      }
      if (this.retiredPermissionRequestIds.has(r)) {
        (logFeatureBad("remote_permission_request", "retired_id_rearmed"),
          logForDebugging(
            `[RemoteSessionManager] Permission request ${formatLogValue(String(r))} arrived again after it was retired here \u2014 not arming it`,
            { level: "warn" },
          ));
        return;
      }
      let d = a;
      try {
        d = structuredClone(a);
      } catch {
        d = a;
      }
      (this.pendingPermissionRequests.set(r, d),
        this.callbacks.onPermissionRequest(a, r, o));
      return;
    }
    if (a.subtype === "request_user_dialog") {
      if (this.pendingDialogRequests.has(r)) {
        logForDebugging(
          `[RemoteSessionManager] Duplicate user dialog request ${r} \u2014 already pending, skipping`,
        );
        return;
      }
      (logForDebugging(`[RemoteSessionManager] User dialog request: ${a.dialog_kind}`),
        this.pendingDialogRequests.add(r),
        this.callbacks.onUserDialogRequest(a, r, o));
      return;
    }
    if (a.subtype === "hook_callback" && It(a)) {
      let p = this.callbacks.onForwardedHookCallback;
      if (!p) {
        logForDebugging(
          `[RemoteSessionManager] Forwarded hook_callback ${formatLogValue(r)} \u2014 not serving device hooks here, leaving it unanswered`,
        );
        return;
      }
      if (r.length > H || a.callback_id.length > H) {
        logForDebugging(
          `[RemoteSessionManager] Forwarded hook_callback ${formatLogValue(r)} \u2014 an id longer than ${H} characters, leaving it unanswered`,
        );
        return;
      }
      let d = {
          requestId: r,
          callbackId: a.callback_id,
          input: a.input,
          ...(typeof a.issued_at === "number" && { issuedAt: a.issued_at }),
          ...(typeof a.deadline_ms === "number" && {
            deadlineMs: a.deadline_ms,
          }),
          ageMs: t,
        },
        S = this.callbacks.onUndeliveredHookReplayed;
      if (S && this.undeliveredHookIds.delete(r)) {
        (this.hookGiveUpsTold.delete(r),
          this.pendingForwardedHooks.add(r),
          S(d));
        return;
      }
      if (
        this.settledForwardedHookIds.has(r) ||
        this.pendingForwardedHooks.has(r)
      ) {
        logForDebugging(
          `[RemoteSessionManager] Forwarded hook_callback ${formatLogValue(r)} already answered or in hand \u2014 skipping`,
        );
        return;
      }
      (this.pendingForwardedHooks.add(r), p(d));
      return;
    }
    if (Ot(a)) {
      let p = this.callbacks.onServedChannelRequest;
      if (!p) {
        logForDebugging(
          `[RemoteSessionManager] ${a.subtype} ${formatLogValue(r)} \u2014 not serving tools here, leaving it unanswered`,
        );
        return;
      }
      if (r.length > H) {
        logForDebugging(
          `[RemoteSessionManager] ${a.subtype} ${formatLogValue(r)} \u2014 an id longer than ${H} characters, leaving it unanswered`,
        );
        return;
      }
      if (
        this.settledServedRequestIds.has(r) ||
        this.pendingServedRequests.has(r)
      ) {
        logForDebugging(
          `[RemoteSessionManager] ${a.subtype} ${formatLogValue(r)} already answered or in hand \u2014 skipping`,
        );
        return;
      }
      let d = new AbortController();
      (this.pendingServedRequests.set(r, { abort: d, subtype: a.subtype }),
        p({
          requestId: r,
          subtype: a.subtype,
          request: a,
          signal: d.signal,
          ageMs: t,
        }));
      return;
    }
    (logForDebugging(
      `[RemoteSessionManager] Unsupported control request subtype: ${a.subtype}`,
    ),
      this.sendResponse(
        {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: r,
            error: `Unsupported control request subtype: ${a.subtype}`,
          },
        },
        null,
      ));
  }
  signedOpts(e) {
    return {
      ...(e ?? {}),
      ...(this.config.eventSigner && { eventSigner: this.config.eventSigner }),
    };
  }
  async sendMessage(e, t) {
    return this.send(
      e,
      t,
      (o, r) => sendEventToRemoteSession(this.config.sessionId, o, this.signedOpts(r)),
      !1,
    );
  }
  async sendMessageVia(e, t, o) {
    return this.send(e, t, o, !0);
  }
  async send(e, t, o, r) {
    (logForDebugging(
      `[RemoteSessionManager] Sending message to session ${this.config.sessionId}`,
    ),
      this.reviveStreamForUserSend(),
      P("out", { kind: "sendMessage", content: e, opts: t }));
    let a = this.currentSendGates(),
      p = !r && a.length === 0 && this.chainedSends === 0,
      d;
    try {
      d = await (p ? o(e, t) : this.sendBehindGates(a, e, t, o));
    } catch (S) {
      throw (
        logForDebugging(
          `[RemoteSessionManager] Send to session ${this.config.sessionId} threw: ${l(S)}`,
          { level: "error" },
        ),
        logFeatureBad("remote_send_message", "remote_send_message_threw"),
        S
      );
    }
    if (!d.ok && d.withheld)
      (logForDebugging(`[RemoteSessionManager] Message withheld by a send gate: ${d.reason}`),
        logFeatureSad(
          "remote_send_message",
          d.reason === SEND_REASON_CANCELLED
            ? "remote_send_message_cancelled"
            : d.reason === SEND_REASON_WITHDRAWN
              ? "remote_send_message_withdrawn"
              : "remote_send_message_withheld",
        ));
    else if (!d.ok)
      (logForDebugging(
        `[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}: ${d.reason}`,
        { level: "error" },
      ),
        logFeatureBad("remote_send_message", "remote_send_message_failed"));
    else if (
      (logFeatureOk("remote_send_message"), (this.sentAMessage = !0), t?.uuid !== void 0)
    )
      this.config.dirSync?.sync.messageSent(t.uuid);
    return d;
  }
  addSendGate(e, t = {}) {
    let o = {
      gate: e,
      onRelease: t.onRelease ?? "send",
      onExit: t.onExit ?? "as_release",
    };
    return (
      this.sendGates.add(o),
      () => {
        this.sendGates.delete(o);
      }
    );
  }
  gateSendsOnSettings(e) {
    let t = () => {},
      o = createHomeSeedGate(e, {
        retire: () => t(),
        noticeAfterMs: this.config.homeSeedWaitNoticeMs,
        typedAheadGraceMs: this.config.homeSeedTypedAheadGraceMs,
      });
    if (o === null) return;
    t = this.addSendGate(
      (r) => (
        r.released.then(() => {
          if (!r.exiting()) this.firstSendReleased = !0;
        }),
        o(r)
      ),
      { onRelease: "withhold", onExit: "await" },
    );
  }
  async sendWithheldInitialPrompt(e) {
    if (e.sent) return;
    e.sent = !0;
    let t = Date.now(),
      o = this.config.withheldPromptBackoffMs ?? Et,
      r = 0,
      a,
      p = async (C, U) => {
        ((r += 1), (a ??= Date.now()));
        let I = await sendEventToRemoteSession(this.config.sessionId, C, this.signedOpts(U));
        if (
          I.ok ||
          r >= Ct ||
          !qt(Q(I)) ||
          this.firstSendReleased ||
          Date.now() - a > (this.config.withheldPromptRetryWindowMs ?? Tt)
        )
          return I;
        if (
          (await sleep(o * r, this.lifetime.signal),
          this.exitFlushRequested && !this.firstSendReleased)
        )
          return ((r += 1), sendEventToRemoteSession(this.config.sessionId, C, this.signedOpts(U)));
        return this.lifetime.signal.aborted || this.firstSendReleased
          ? I
          : p(C, U);
      },
      d = this.sendMessageVia(e.content, { uuid: e.uuid }, p).catch((C) => ({
        ok: !1,
        reason: l(C),
      }));
    this.withheldPromptInFlight = d.then(
      () => {
        return;
      },
      () => {
        return;
      },
    );
    let S = await d;
    this.withheldPromptInFlight = null;
    let R = this.lifetime.signal.aborted && !S.ok;
    if (
      (logEvent("tengu_home_seed_prompt_resequenced", {
        success: S.ok,
        withheld_for: fromEnum(
          this.config.homeSeed !== void 0
            ? this.config.dirSync !== void 0
              ? "both"
              : "home_seed"
            : "file_sync",
        ),
        attempts: r,
        reason: fromEnum(S.ok ? "ok" : R ? "aborted" : Q(S)),
        duration_ms: Date.now() - t,
      }),
      S.ok)
    )
      ((e.sent = !0), this.callbacks.onWithheldPromptSent?.());
    if (R || S.ok) return;
    let _ = Q(S),
      M = _ === "timeout" || _ === "network" || _ === "unknown";
    if (this.callbacks.onWithheldPromptFailed)
      this.callbacks.onWithheldPromptFailed(S.reason, M);
    else
      this.config.homeSeed?.status.publish(
        M
          ? `Your first message may not have reached the cloud session (${S.reason}) \u2014 if Claude does not respond to it shortly, please send it again`
          : `Your first message could not be delivered to the cloud session (${S.reason}) \u2014 please send it again`,
        "warning",
      );
  }
  currentSendGates() {
    let e = this.config.dirSync;
    return [
      ...(e === void 0
        ? []
        : [
            {
              gate: ({ messageUuid: t }) => e.sync.beforeSend(t),
              onRelease: "send",
              onExit: "as_release",
            },
          ]),
      ...this.sendGates,
    ];
  }
  async sendBehindGates(e, t, o, r) {
    this.chainedSends++;
    let a = !1,
      p = !1,
      d = () => {},
      S = new Promise((w) => {
        d = w;
      }),
      R = (w, D) => {
        ((a = w), (p = D), d());
      },
      _ = () => {},
      M = new Promise((w) => {
        _ = w;
      }),
      C = () => {},
      U = new Promise((w) => {
        C = w;
      }),
      I = {
        messageUuid: o?.uuid,
        released: S,
        withdrawn: M,
        exiting: () => a,
        final: () => p,
        decided: U,
      },
      L = () => {},
      le = new Promise((w) => {
        L = w;
      }),
      ue = this.lastHeld,
      J = () => {},
      ce = !1,
      pe = !1,
      ee = e.map(() => {
        return;
      }),
      te = new Set(e),
      ne = e.map((w, D) =>
        $t(w.gate, I).then((F) => ((ee[D] = F), te.delete(w), F)),
      ),
      Ke = new Promise((w) => {
        for (let D of ne)
          D.then((F) => {
            if (F !== void 0) w(F);
          });
      }),
      oe = Promise.race([
        Promise.all(ne).then(X),
        Ke,
        S.then(
          () =>
            X(ee) ??
            Ue(te, a) ??
            Promise.all(
              ne.filter((w, D) => a && e[D]?.onExit === "await"),
            ).then(X),
        ),
        M.then(() => Oe(!0)),
      ]);
    oe.then(C, C);
    let V = oe
        .then((w) =>
          Promise.race([ue.posted, S.then(() => ue.issued)]).then(() => w),
        )
        .then((w) => {
          let D = w ?? Oe(ce);
          if ((J(), (pe = !0), L(), D !== void 0)) return Ie(D);
          return (this.reviveStreamForUserSend(), r(t, o));
        }),
      j = {
        messageUuid: o?.uuid,
        release: R,
        issuedYet: () => pe,
        withheldOnRelease: () => X(ee) !== void 0 || Ue(te, !1) !== void 0,
        withdraw: () => {
          ((ce = !0), J(), _());
        },
        issued: le,
        posted: V,
      };
    return (
      (this.lastHeld = {
        issued: le,
        posted: V.then(
          () => {
            return;
          },
          () => {
            return;
          },
        ),
      }),
      this.heldSends.add(j),
      (J = () => this.heldSends.delete(j)),
      V.then(
        () => this.leaveChain(j, L),
        () => this.leaveChain(j, L),
      ),
      oe.then((w) => (w === void 0 ? V : Ie(w)))
    );
  }
  withdrawHeldSend(e) {
    let t = [...this.heldSends].filter(
      (o) => o.messageUuid === e && !o.issuedYet(),
    );
    return (t.forEach((o) => o.withdraw()), t.length > 0);
  }
  heldSendUuids() {
    return [...this.heldSends].flatMap((e) =>
      e.messageUuid !== void 0 && !e.issuedYet() ? [e.messageUuid] : [],
    );
  }
  leaveChain(e, t) {
    (this.chainedSends--, this.heldSends.delete(e), t());
  }
  async releaseHeldSends(
    e = Pt,
    { exiting: t = !1, final: o = !1, keepWithheld: r = !1 } = {},
  ) {
    if (t) this.exitFlushRequested = !0;
    let a = [...this.heldSends].filter((d) => !(r && d.withheldOnRelease()));
    a.forEach((d) => d.release(t, o));
    let p = a.map(() => ({ kind: "waiting" }));
    return (
      await withDeadline(
        Promise.allSettled([
          ...a.map((d, S) =>
            d.posted.then(
              (R) => {
                p[S] = xt(R);
              },
              () => {
                p[S] = { kind: "unconfirmed" };
              },
            ),
          ),
          ...(this.withheldPromptInFlight ? [this.withheldPromptInFlight] : []),
        ]),
        e,
      ),
      a.forEach((d, S) => {
        if (p[S]?.kind !== "waiting") return;
        if (d.issuedYet()) p[S] = { kind: "unconfirmed" };
        else if (o) (d.withdraw(), (p[S] = { kind: "unsent" }));
      }),
      {
        unsent: countMatching(p, (d) => d.kind === "unsent"),
        refused: p.flatMap((d) => (d.kind === "refused" ? [d.reason] : [])),
        unconfirmed: countMatching(p, (d) => d.kind === "unconfirmed"),
        stillHeld: countMatching(p, (d) => d.kind === "waiting"),
      }
    );
  }
  async sendBashCommand(e, t) {
    (logForDebugging(
      `[RemoteSessionManager] Sending bash_command to session ${this.config.sessionId}`,
    ),
      this.reviveStreamForUserSend());
    let o = await sendBashCommandToRemoteSession(this.config.sessionId, e, this.signedOpts(t));
    if (!o.ok)
      (logForDebugging(
        `[RemoteSessionManager] Failed to send bash_command to session ${this.config.sessionId}: ${o.reason}`,
        { level: "error" },
      ),
        logFeatureBad("remote_send_bash", "remote_send_bash_failed"));
    else logFeatureOk("remote_send_bash");
    return o;
  }
  reviveStreamForUserSend() {
    if (this.client?.reviveAfterExhaustion()) this.callbacks.onReconnecting?.();
  }
  sendResponse(e, t, o) {
    let r = this.client;
    if (!r) return;
    if (t === null || this.config.keepUndeliveredResponses !== !0) {
      r.sendControlResponse(e, void 0, Ae(t));
      return;
    }
    let a = e.response.request_id,
      d = this.undeliveredResponses.get(a) ?? {
        response: e,
        kind: t,
        uuid: _t(),
        failures: 0,
        inFlight: !1,
        giveUpOnSettle: null,
        timer: null,
        told: !1,
      };
    if (((d.response = e), o !== void 0)) d.request = o;
    (this.undeliveredResponses.set(a, d), this.postKeptResponse(r, d));
  }
  postKeptResponse(e, t) {
    ((t.inFlight = !0),
      e.sendControlResponse(t.response, t.uuid, Ae(t.kind)).then(
        (o) => this.settleResponsePost(t, o),
        (o) => {
          (logForDebugging(`[RemoteSessionManager] Posting an answer threw: ${l(o)}`, {
            level: "warn",
          }),
            this.settleResponsePost(t, {
              outcome: "failed",
              cause: "network",
            }));
        },
      ));
  }
  settleResponsePost(e, t) {
    e.inFlight = !1;
    let o = e.response.response.request_id;
    if (this.undeliveredResponses.get(o) !== e) return;
    if (t.outcome === "accepted") {
      if (e.giveUpOnSettle === "overtaken") {
        this.giveUp(e, "overtaken");
        return;
      }
      if ((this.dropKept(e), e.failures > 0 || e.giveUpOnSettle !== null))
        logFeatureSad("remote_control_response", "recovered");
      else logFeatureOk("remote_control_response");
      return;
    }
    if (e.giveUpOnSettle !== null) {
      this.giveUp(e, e.giveUpOnSettle);
      return;
    }
    if (
      t.outcome === "session_inactive" ||
      (t.outcome === "failed" && t.cause === "http" && t.status === 404)
    ) {
      (this.dropKept(e),
        logForDebugging(
          `[RemoteSessionManager] Answer for ${formatLogValue(o)} has no session to go to (${t.outcome === "failed" && t.cause === "http" ? `http ${t.status}` : "session not active"}); dropped`,
        ),
        logFeatureSad("remote_control_response", "session_gone"));
      return;
    }
    if (t.outcome === "failed" && t.cause === "closed") {
      if (!this.client?.isRevivable()) this.giveUp(e);
      return;
    }
    if (
      t.outcome === "failed" &&
      t.cause === "http" &&
      t.status < 500 &&
      t.status !== 408 &&
      t.status !== 429
    ) {
      (logForDebugging(
        `[RemoteSessionManager] Answer for ${formatLogValue(o)} was refused by the service (http ${t.status}); not re-sending`,
        { level: "warn" },
      ),
        this.giveUp(e, "undelivered", "refused"));
      return;
    }
    if (!this.client?.isConnected()) {
      logForDebugging(
        `[RemoteSessionManager] Answer for ${formatLogValue(o)} did not reach the session while the stream is down; it goes again at reconnect`,
      );
      return;
    }
    if (((e.failures += 1), e.failures > De)) {
      (logForDebugging(
        `[RemoteSessionManager] Answer for ${formatLogValue(o)} could not be delivered after ${e.failures} attempts; giving up`,
        { level: "warn" },
      ),
        this.giveUp(e));
      return;
    }
    if (e.failures === 1) logFeatureSad("remote_control_response", "resend");
    this.scheduleResponseResend(e);
  }
  dropKept(e) {
    (this.clearResendTimer(e),
      this.undeliveredResponses.delete(e.response.response.request_id));
  }
  giveUp(e, t = "undelivered", o = t) {
    let r = e.response.response.request_id;
    if (e.inFlight) {
      if (e.giveUpOnSettle !== "overtaken") e.giveUpOnSettle = t;
      return;
    }
    if ((this.dropKept(e), e.kind === "hook")) A(this.hookGiveUpsTold, r);
    if (t === "undelivered" && (e.kind === "dialog" || e.kind === "permission"))
      if ((this.seenControlResponseIds.delete(r), e.kind === "permission")) {
        if (e.request !== void 0)
          Pe(this.reinstatablePermissionRequests, r, e.request);
      } else A(this.reinstatableDialogIds, r);
    if (t === "undelivered" && e.kind === "hook" && o !== "refused")
      A(this.undeliveredHookIds, r);
    if ((logFeatureBad("remote_control_response", o), e.told)) return;
    ((e.told = !0), this.callbacks.onResponseUndelivered?.(r, e.kind, t));
  }
  scheduleResponseResend(e) {
    this.clearResendTimer(e);
    let t = Fe[Math.min(e.failures, De) - 1] ?? 45000;
    e.timer = setTimeout(this.resendOnTimer, t, e.response.response.request_id);
  }
  resendOnTimer = (e) => {
    let t = this.undeliveredResponses.get(e),
      o = this.client;
    if (!t || !o) return;
    if (((t.timer = null), !t.inFlight))
      (P("out", t.response), this.postKeptResponse(o, t));
  };
  clearResendTimer(e) {
    if (e.timer !== null) (clearTimeout(e.timer), (e.timer = null));
  }
  resendUndeliveredResponses() {
    let e = this.client;
    if (!e) return;
    for (let t of this.undeliveredResponses.values())
      if ((this.clearResendTimer(t), !t.inFlight))
        (P("out", t.response), this.postKeptResponse(e, t));
  }
  giveUpUndeliveredResponses() {
    for (let e of [...this.undeliveredResponses.values()]) this.giveUp(e);
  }
  giveUpKeptServedResults() {
    for (let e of [...this.undeliveredResponses.values()])
      if (e.kind === "tool")
        ((e.inFlight = !1), this.giveUp(e, e.giveUpOnSettle ?? "undelivered"));
  }
  dropUndeliveredResponses() {
    for (let e of [...this.undeliveredResponses.values()]) {
      if (e.giveUpOnSettle === "overtaken") {
        ((e.inFlight = !1), this.giveUp(e, "overtaken"));
        continue;
      }
      (this.dropKept(e), logFeatureSad("remote_control_response", "session_gone"));
    }
  }
  respondToPermissionRequest(e, t) {
    let o = this.pendingPermissionRequests.get(e);
    if (!o) {
      (logError(
        Error(
          `[RemoteSessionManager] No pending permission request with ID: ${e}`,
        ),
      ),
        logFeatureBad("remote_permission_respond", "remote_permission_respond_no_pending"));
      return;
    }
    (this.retirePermissionRequest(e),
      this.recordSeenControlResponseId(e),
      this.reviveStreamForUserSend());
    let r = buildSuccessControlResponse(
      e,
      t,
      this.config.nameToolOnPermissionAllow === !0 ? o.tool_name : void 0,
    );
    (logForDebugging(`[RemoteSessionManager] Sending permission response: ${t.behavior}`),
      P("out", r),
      this.sendResponse(r, "permission", o),
      logFeatureOk("remote_permission_respond"));
  }
  respondToUserDialogRequest(e, t) {
    if (!this.pendingDialogRequests.delete(e)) {
      (logError(
        Error(
          `[RemoteSessionManager] No pending user dialog request with ID: ${e}`,
        ),
      ),
        logFeatureBad("remote_dialog_respond", "remote_dialog_respond_no_pending"));
      return;
    }
    (this.recordSeenControlResponseId(e), this.reviveStreamForUserSend());
    let o = {
      type: "control_response",
      response: { subtype: "success", request_id: e, response: t },
    };
    (logForDebugging(`[RemoteSessionManager] Sending user dialog response: ${t.behavior}`),
      P("out", o),
      this.sendResponse(o, "dialog"),
      logFeatureOk("remote_dialog_respond"));
  }
  releaseForwardedHook(e) {
    if (
      (this.pendingForwardedHooks.delete(e),
      this.settledForwardedHookIds.has(e))
    )
      A(this.hookGiveUpsTold, e);
  }
  respondToForwardedHook(e, t) {
    if (!this.pendingForwardedHooks.delete(e))
      return (
        logForDebugging(
          `[RemoteSessionManager] Forwarded hook request ${formatLogValue(e)} is no longer pending \u2014 answer not sent`,
        ),
        !1
      );
    if (!this.client) return !1;
    (this.recordSeenControlResponseId(e),
      this.recordSettledForwardedHookId(e),
      this.reviveStreamForUserSend());
    let r = {
      type: "control_response",
      response: { subtype: "success", request_id: e, response: t },
    };
    return (P("out", r), this.sendResponse(r, "hook"), !0);
  }
  respondToServedChannelRequest(e, t) {
    let o = this.pendingServedRequests.get(e);
    if (!o)
      return (
        logForDebugging(
          `[RemoteSessionManager] served request ${formatLogValue(e)} is no longer pending \u2014 result not sent`,
        ),
        !1
      );
    if ((this.pendingServedRequests.delete(e), !this.client)) return !1;
    (this.recordSeenControlResponseId(e),
      A(this.settledServedRequestIds, e),
      this.reviveStreamForUserSend());
    let a = {
      type: "control_response",
      response: { subtype: "success", request_id: e, response: Ut(t) },
    };
    return (
      P("out", a),
      this.sendResponse(a, o.subtype === "remote_tools_probe" ? null : "tool"),
      !0
    );
  }
  releaseServedChannelRequest(e) {
    this.pendingServedRequests.delete(e);
  }
  retireServedRequest(e, t) {
    let o = this.pendingServedRequests.get(e);
    if (!o) return !1;
    return (
      this.pendingServedRequests.delete(e),
      logForDebugging(
        `[RemoteSessionManager] served request ${formatLogValue(e)} ${t === "worker" ? "cancelled by the worker" : "dropped with the stream"}`,
      ),
      o.abort.abort(),
      this.callbacks.onServedChannelRequestCancelled?.(e, t),
      !0
    );
  }
  isConnected() {
    return this.client?.isConnected() ?? !1;
  }
  noteWorkerLive() {
    if (this.workerSeenThisConnection) return;
    ((this.workerSeenThisConnection = !0), this.callbacks.onWorkerLive?.());
  }
  markServing(e) {
    this.serving = e;
  }
  workerLive() {
    return this.isConnected() && this.workerSeenThisConnection;
  }
  flushSends(e) {
    return this.client?.flushSends(e) ?? Promise.resolve();
  }
  cancelSession() {
    (logForDebugging("[RemoteSessionManager] Sending interrupt signal"),
      (this.firstSendReleased = !0),
      this.reviveStreamForUserSend());
    let e = () => {
      (P("out", { kind: "control_request", subtype: "interrupt" }),
        this.client?.sendControlRequest({ subtype: "interrupt" }));
    };
    if (this.heldSends.size === 0) {
      e();
      return;
    }
    let t = () => {
      if (this.pendingInterrupt === t) ((this.pendingInterrupt = null), e());
    };
    ((this.pendingInterrupt = t), this.releaseHeldSends().then(t, t));
  }
  sendControlRequest(e, t) {
    return this.postControlRequest(e, t).response;
  }
  postControlRequest(e, t) {
    let { promise: o, resolve: r } = Promise.withResolvers(),
      a = async () => {
        let d = null;
        try {
          if (t?.signal?.aborted) throw new Ve();
          if (!t?.background) this.reviveStreamForUserSend();
          if (
            (P("out", { kind: "control_request", ...e }),
            (d =
              this.client?.postControlRequest(
                e,
                this.onControlRequestPostFailed,
              ) ?? null),
            d === null)
          )
            throw Error("[RemoteSessionManager] Cannot send: not connected");
        } finally {
          if (d === null) r(Me);
        }
        return (
          d.posted.then(r, () => r(Me)),
          this.awaitControlResponse(d.requestId, e, t)
        );
      },
      p = t?.answerExpected === !1 ? a() : withControlRequestTelemetry("remote_control_rpc", a);
    return { posted: o, response: p };
  }
  awaitControlResponse(e, t, o) {
    if (t.subtype === "set_model") this.pendingModelSwitchIds.add(e);
    let r = ye(t.subtype, o?.timeoutMs);
    return new Promise((a, p) => {
      let d = setTimeout(this.onControlRequestTimeout, r, e, t.subtype, r),
        S = o?.signal,
        R = S ? () => this.cancelControlRequest(e) : void 0;
      if (S && R) S.addEventListener("abort", R, { once: !0 });
      this.pendingControlRequests.set(e, {
        resolve: (_) => a(_),
        reject: p,
        timer: d,
        timeoutMs: r,
        subtype: t.subtype,
        onProgress: o?.onProgress,
        removeAbortListener:
          S && R ? () => S.removeEventListener("abort", R) : void 0,
        ...(o?.background && { background: !0 }),
        ...(o?.onEchoed && { onEchoed: o.onEchoed }),
      });
    });
  }
  onControlRequestPostFailed = (e) => {
    this.pendingModelSwitchIds.delete(e);
    let t = this.pendingControlRequests.get(e);
    if (!t) return;
    (this.pendingControlRequests.delete(e),
      clearTimeout(t.timer),
      t.removeAbortListener?.(),
      logForDebugging(
        `[RemoteSessionManager] control_request ${e} (${t.subtype}) was not delivered \u2014 failing it`,
        { level: "warn" },
      ),
      t.reject(new ControlRequestNotDeliveredError(t.subtype)));
  };
  onControlRequestTimeout = (e, t, o) => {
    this.pendingModelSwitchIds.delete(e);
    let r = this.pendingControlRequests.get(e);
    if (!r) return;
    (this.pendingControlRequests.delete(e),
      r.removeAbortListener?.(),
      r.reject(new ControlRequestTimeoutError(t, o)));
  };
  cancelControlRequest(e) {
    let t = this.pendingControlRequests.get(e);
    if (!t) return;
    if (!t.background) this.reviveStreamForUserSend();
    (this.pendingControlRequests.delete(e),
      this.pendingModelSwitchIds.delete(e),
      clearTimeout(t.timer),
      logForDebugging(
        `[RemoteSessionManager] Cancelling control request ${e} (${t.subtype})`,
      ),
      P("out", { kind: "control_cancel_request", requestId: e }),
      this.client?.sendControlCancelRequest(e),
      t.reject(new Ve()));
  }
  getSessionId() {
    return this.config.sessionId;
  }
  disconnect() {
    logForDebugging("[RemoteSessionManager] Disconnecting");
    let e = this.config.withheldInitialPrompt;
    if (
      e !== void 0 &&
      this.withheldPromptInFlight !== null &&
      !this.firstSendReleased
    )
      e.sent = !1;
    (this.lifetime.abort(),
      this.pendingInterrupt?.(),
      this.client?.close(),
      (this.client = null));
    for (let t of [...this.undeliveredResponses.values()])
      if ((this.clearResendTimer(t), t.giveUpOnSettle !== null))
        ((t.inFlight = !1), this.giveUp(t, t.giveUpOnSettle));
    (this.undeliveredResponses.clear(),
      this.undeliveredHookIds.clear(),
      this.hookGiveUpsTold.clear(),
      this.config.dirSync?.sync.afterDisconnect(),
      this.pendingPermissionRequests.clear(),
      this.pendingDialogRequests.clear());
    for (let t of this.pendingForwardedHooks)
      this.callbacks.onForwardedHookCancelled?.(t, "disconnected");
    this.pendingForwardedHooks.clear();
    for (let t of [...this.pendingServedRequests.keys()])
      this.retireServedRequest(t, "disconnected");
    this.workerSeenThisConnection = !1;
    for (let t of this.pendingControlRequests.values())
      (clearTimeout(t.timer),
        t.removeAbortListener?.(),
        t.reject(Error("[RemoteSessionManager] Disconnected")));
    (this.pendingControlRequests.clear(), this.pendingModelSwitchIds.clear());
  }
  reconnect() {
    (logForDebugging("[RemoteSessionManager] Reconnecting SSE stream"),
      this.client?.reconnect());
  }
}
function At(e) {
  if (
    typeof e !== "object" ||
    e === null ||
    !("type" in e) ||
    e.type !== "synced_file_changed"
  )
    return null;
  let t = "path" in e ? e.path : void 0;
  if (typeof t !== "string") return { path: null };
  let o = stripWorkingPrefix(t);
  return o === null ? null : { path: o };
}
function It(e) {
  return (
    typeof e.callback_id === "string" &&
    (typeof e.issued_at === "number" ||
      typeof e.deadline_ms === "number" ||
      parseDeviceHookId(e.callback_id) !== null)
  );
}
function Ot(e) {
  return Mt.includes(e.subtype);
}
function Ae(e) {
  return e === "tool" ? { timeoutMs: Dt } : {};
}
function Ut(e) {
  let t = Buffer.byteLength(jsonStringify(e), "utf8");
  if (t <= MAX_RESULT_BYTES) return e;
  return {
    result: {
      content: [
        {
          type: "text",
          text: `(the result was too large to return: ${t} bytes, over the ${MAX_RESULT_BYTES}-byte limit)`,
        },
      ],
      isError: !0,
    },
  };
}
function $t(e, t) {
  let o = (r) => {
    logForDebugging(`[RemoteSessionManager] send gate failed, message goes anyway: ${l(r)}`, {
      level: "warn",
    });
    return;
  };
  try {
    return e(t).then((r) => (Ft(r) ? r : void 0), o);
  } catch (r) {
    return Promise.resolve(o(r));
  }
}
function Ft(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    e.go === !1 &&
    typeof e.reason === "string"
  );
}
function X(e) {
  return e.find((t) => t !== void 0);
}
function Ie(e) {
  return { ok: !1, reason: e.reason, withheld: !0 };
}
function xt(e) {
  if (e.ok) return { kind: "sent" };
  switch (Q(e)) {
    case "withheld":
      return e.reason === SEND_REASON_CANCELLED || e.reason === SEND_REASON_WITHDRAWN
        ? { kind: "unsent" }
        : { kind: "refused", reason: e.reason };
    case "http_4xx":
    case "http_429":
    case "not_first_party":
      return { kind: "refused", reason: e.reason };
    case "server":
    case "timeout":
    case "network":
    case "unknown":
      return { kind: "unconfirmed" };
  }
}
function Oe(e) {
  return e ? { go: !1, reason: SEND_REASON_WITHDRAWN } : void 0;
}
function Ue(e, t) {
  return [...e].some(
    ({ onRelease: o, onExit: r }) => o === "withhold" && !(t && r === "await"),
  )
    ? { go: !1, reason: SEND_REASON_CANCELLED }
    : void 0;
}
var FALLBACK_HISTORY_PAGE_SIZE = 100,
  DEFAULT_HISTORY_PAGE_SIZE = 500;
function parseSequenceNum(e) {
  let t =
    e?.sequence_num === void 0 ? void 0 : parseInt(String(e.sequence_num), 10);
  return t !== void 0 && !isNaN(t) ? t : void 0;
}
async function getSessionRequestTarget(e, t) {
  let { accessToken: o } = await prepareApiRequest(t);
  return {
    sessionUrl: `${getOauthConfig().BASE_API_URL}/v1/code/sessions/${e}`,
    headers: await getSessionRequestHeaders(o),
  };
}
async function xe(e, t, o, r) {
  let a = await at
    .get(`${e.sessionUrl}/events`, {
      headers: e.headers,
      params: t,
      timeout: 15000,
      validateStatus: () => !0,
      maxContentLength: r ?? -1,
    })
    .catch(() => null);
  if (!a || a.status !== 200)
    return (logForDebugging(`[${o}] HTTP ${a?.status ?? "error"}`), null);
  if (a.data === null || typeof a.data !== "object")
    return (logForDebugging(`[${o}] non-object 200 body`), null);
  let p = Array.isArray(a.data.data) ? a.data.data : [],
    d = [];
  for (let R = p.length - 1; R >= 0; R--) {
    let _ = p[R];
    if (_?.payload)
      d.push({
        payload: _.payload,
        createdAt: _.created_at,
        source: _.source,
        sequenceNum: parseSequenceNum(_),
      });
  }
  let S = a.data.next_cursor ?? null;
  return {
    events: d,
    firstId: S,
    hasMore: S !== null,
    droppedRows: p.length - d.length,
    newestSequenceNum: parseSequenceNum(p[0]),
  };
}
async function fetchLatestSessionEvents(e, t = FALLBACK_HISTORY_PAGE_SIZE, o) {
  let r = await xe(e, { limit: t, sort_order: "desc" }, "fetchLatestEvents");
  if (o?.reportFeatureHealth !== !1)
    if (r === null) logFeatureBad("assistant_history_load", "http_error");
    else logFeatureOk("assistant_history_load");
  return r;
}
async function fetchOlderSessionEvents(e, t, o = FALLBACK_HISTORY_PAGE_SIZE, r) {
  return xe(
    e,
    { limit: o, sort_order: "desc", cursor: t },
    "fetchOlderEvents",
    r,
  );
}
export {
  conformWireFrame,
  sanitizeCanUseToolRequest,
  getWorkerEpoch,
  NON_WORKER_PAYLOAD_TYPES,
  hasMachineGeneratedContent,
  hasNonTextContentBlocks,
  aQt,
  lQt,
  GATING_CONTROL_REQUEST_SUBTYPES,
  formatLogValue,
  SEND_REASON_CANCELLED,
  SEND_REASON_WITHDRAWN,
  describeUndeliveredSend,
  RemoteSessionManager,
  FALLBACK_HISTORY_PAGE_SIZE,
  DEFAULT_HISTORY_PAGE_SIZE,
  parseSequenceNum,
  getSessionRequestTarget,
  fetchLatestSessionEvents,
  fetchOlderSessionEvents,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { COMMAND_NAME_TAG, LOCAL_COMMAND_STDOUT_TAG, LOCAL_COMMAND_STDERR_TAG, LOCAL_COMMAND_CAVEAT_TAG, stripXmlTags } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withTimeout, withDeadline } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { isAbortTerminalReason } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { parsePermissionMode, UNRECOGNIZED_PERMISSION_MODE_ERROR } from "../权限系统/chunk-e4pfvp7x.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { yt, mi, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { areBackgroundTasksDisabled, BACKGROUND_TASKS_DISABLED_MESSAGE } from "../../01-核心基础设施/核心工具-未归类/host-capability-state.js";
import { isExiting } from "../../01-核心基础设施/核心工具-未归类/exit-commit-state.js";
import { getSessionRuntimeState } from "../权限系统/chunk-ynkf3yy4.js";
import { formatDisplayText } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { v, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var NO_CONTENT_PLACEHOLDER = "(no content)",
  NO_RESPONSE_REQUESTED_TEXT = "No response requested.",
  SYNTHETIC_MODEL_NAME = "<synthetic>",
  AUTO_MODE_ACTIVE_HEADING = "Auto Mode Active",
  SKIPPED_TRACKED_PATHS_REASON =
    "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, or its backup could not be safely read";
var ZERO_USAGE_TOTALS = {
  output_tokens_details: { thinking_tokens: 0 },
  input_tokens: 0,
  cache_creation_input_tokens: 0,
  cache_read_input_tokens: 0,
  output_tokens: 0,
  server_tool_use: { web_search_requests: 0, web_fetch_requests: 0 },
  service_tier: "standard",
  cache_creation: {
    ephemeral_1h_input_tokens: 0,
    ephemeral_5m_input_tokens: 0,
  },
  inference_geo: "",
  iterations: [],
  speed: "standard",
};
function parseBackgroundTasksToolUseId(e) {
  if (e == null || e === "") return { valid: !0, toolUseId: void 0 };
  if (typeof e === "string") return { valid: !0, toolUseId: e };
  return { valid: !1 };
}
var BACKGROUND_TASKS_TOOL_USE_ID_TYPE_ERROR = "background_tasks: tool_use_id must be a string";
var MAX_DECLARED_DIALOG_KINDS = 32;
function normalizeDeclaredDialogKinds(e) {
  if (!Array.isArray(e)) return [];
  return e
    .filter((t) => typeof t === "string" && t.length > 0 && t.length <= 64)
    .slice(0, 32);
}
var Q = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]|[\uDC00-\uDFFF]/g;
function Z(e) {
  return e.replace(Q, (t) => (t.length === 2 ? t : ""));
}
var w =
  /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/gu;
function sanitizeForRelay(e) {
  if (typeof e !== "string") return "";
  let t = e.length > 4096 ? e.slice(0, 4096) : e;
  for (let r = 0; r < 64; r++) {
    let s = Z(t).replace(w, "");
    if (s === t) return truncateToCodeUnits(s, 1024);
    t = s;
  }
  return "";
}
function replaceInvisibleCharsWithSpace(e) {
  if (typeof e !== "string") return "";
  return (e.length > 4096 ? e.slice(0, 4096) : e)
    .replace(Q, (r) => (r.length === 2 ? r : " "))
    .replace(w, " ");
}
function sanitizeRelayableText(e) {
  if (e.length > 16384) return null;
  let t = e;
  for (let r = 0; r < 64; r++) {
    let s = Z(t).replace(w, "");
    if (s === t) return [...s].length <= 8192 ? s : null;
    t = s;
  }
  return null;
}
function formatElicitationUrls(e) {
  let t = e
      .slice(0, 3)
      .map((s) => sanitizeRelayableText(s) ?? "[elicitation URL too long to relay]"),
    r =
      e.length > 3
        ? ` \u2026and ${e.length - 3} more \u2014 re-run in the terminal to see all`
        : "";
  return `${t.join(", ")}${r}`;
}
function isHumanOrigin(e) {
  return e?.kind === "human";
}
function isStrictHumanTurn(e) {
  try {
    if (e.type === "user")
      return (
        isHumanOrigin(e.origin) &&
        e.toolUseResult === void 0 &&
        e.isCompactSummary !== !0 &&
        e.verifiedSlackHumanTurn !== !0
      );
    return (
      e.type === "attachment" &&
      e.attachment.type === "queued_command" &&
      isHumanOrigin(e.attachment.origin) &&
      e.attachment.verifiedSlackHumanTurn !== !0
    );
  } catch {
    return !1;
  }
}
function hasStrictHumanDecider(e) {
  return Ee(e) !== void 0;
}
function Ee(e) {
  let t = analyzeTurnTail(e).decider;
  if (t == null || !t.strictHuman) return;
  let r = e[t.index];
  return r !== void 0 && isStrictHumanTurn(r) ? r : void 0;
}
function isUserDrivenOrigin(e) {
  return e?.kind === "human" || e?.kind === "auto-continuation";
}
function isUserDrivenTurn(e) {
  return analyzeTurnTail(e).decider?.userDriven === !0;
}
var N = { decider: null, referentTail: void 0, scheduledTrigger: !1 };
function analyzeTurnTail(e) {
  try {
    return De(e);
  } catch {
    return (q(), { ...N, scheduledTrigger: te(e) });
  }
}
function q() {
  try {
    logEvent("tengu_turn_tail_analysis_degraded", {});
  } catch {}
}
function te(e) {
  for (let t = e.length - 1; t >= 0; t--)
    try {
      let r = e[t];
      if (r == null) continue;
      if (r.type === "attachment" && r.attachment.type === "queued_command") {
        if (C(r.attachment.origin)) return !0;
        if (ne(r.attachment)) return !1;
        continue;
      }
      if (r.type === "user") {
        if (re(r)) {
          if (C(r.origin)) return !0;
          continue;
        }
        return C(r.origin);
      }
    } catch {
      continue;
    }
  return !1;
}
function De(e) {
  let t = null,
    r = -1,
    s = !1,
    d = () => ({ ...N, scheduledTrigger: s || te(e) });
  for (let a = e.length - 1; a >= 0; a--) {
    let b = e[a];
    if (b == null) return d();
    try {
      if (b.type === "attachment" && b.attachment.type === "queued_command") {
        if (C(b.attachment.origin)) s = !0;
        if (ne(b.attachment)) {
          let M = b.attachment.origin;
          ((t = {
            index: a,
            origin: M,
            text: J(Ae(b.attachment.prompt)),
            userDriven: !0,
            strictHuman: isHumanOrigin(M),
            scheduledTrigger: C(M),
          }),
            (r = a));
          break;
        }
        continue;
      }
      if (b.type !== "user" || re(b) || Te(e, a)) {
        if (b.type === "user" && C(b.origin)) s = !0;
        continue;
      }
      let k = b.origin,
        E = b.isMeta === !0 && isHumanOrigin(k);
      ((t = {
        index: a,
        origin: k,
        text: J(Ie(b)),
        userDriven: E || (b.isMeta !== !0 && isUserDrivenOrigin(k)),
        strictHuman: E || (b.isMeta !== !0 && isHumanOrigin(k)),
        scheduledTrigger: C(k),
      }),
        (r = a));
      break;
    } catch {
      return (q(), d());
    }
  }
  if (t === null) return { ...N, scheduledTrigger: s };
  let S = s || t.scheduledTrigger,
    p;
  try {
    for (let a = r - 1; a >= 0; a--) {
      let b = e[a];
      if (b == null) break;
      if (b.type !== "assistant") break;
      if (
        b.isApiErrorMessage === !0 ||
        b.isVirtual === !0 ||
        b.message?.model === SYNTHETIC_MODEL_NAME
      )
        continue;
      let E = ve(b);
      if (E !== null) {
        p = E;
        break;
      }
    }
  } catch {
    (q(), (p = void 0));
  }
  return { decider: t, referentTail: p, scheduledTrigger: S };
}
function C(e) {
  return e?.kind === "task-notification" && e.subkind === "scheduled-trigger";
}
function J(e) {
  return e !== null && e.trim() !== "" ? e : null;
}
function ve(e) {
  let t = e.message?.content;
  if (!Array.isArray(t)) return null;
  let r = [];
  for (let d of t)
    if (
      typeof d === "object" &&
      d !== null &&
      d.type === "text" &&
      typeof d.text === "string"
    )
      r.push(d.text);
  let s = r.join(`
`);
  return s.trim() !== "" ? s : null;
}
function Ie(e) {
  let t = e.message?.content;
  if (typeof t === "string") return t;
  if (!Array.isArray(t)) return null;
  let r = [];
  for (let s of t)
    if (
      typeof s === "object" &&
      s !== null &&
      s.type === "text" &&
      typeof s.text === "string"
    )
      r.push(s.text);
  return r.length > 0
    ? r.join(`
`)
    : null;
}
function Ae(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let t = [];
  for (let r of e)
    if (
      typeof r === "object" &&
      r !== null &&
      r.type === "text" &&
      typeof r.text === "string"
    )
      t.push(r.text);
  return t.length > 0
    ? t.join(`
`)
    : null;
}
function ne(e) {
  return isHumanOrigin(e.origin) || (e.isMeta !== !0 && isUserDrivenOrigin(e.origin));
}
function re(e) {
  return se(e) || e.isCompactSummary === !0;
}
function se(e) {
  return (
    e.toolUseResult !== void 0 ||
    e.sourceToolAssistantUUID !== void 0 ||
    e.sourceToolUseID !== void 0 ||
    e.turnCompanion === !0
  );
}
function Te(e, t) {
  let r = e[t];
  if (r?.type !== "user" || !(r.origin === void 0 || isHumanOrigin(r.origin))) return !1;
  let s = ee(r);
  if (s === null) return !1;
  let d = new Set(s),
    S;
  for (let p = t - 1; p >= 0 && d.size > 0; p--) {
    let a = e[p];
    if (a?.type === "assistant") {
      if (S !== void 0 && !Re(a, S)) break;
      S = a;
      let b = a.message?.content;
      for (let k of Array.isArray(b) ? b : [])
        if (typeof k === "object" && k !== null && k.type === "tool_use")
          d.delete(k.id);
    } else if (a?.type === "user") {
      if (a.replacesSpan === !0) break;
      let b = se(a) ? Ce(a) : ee(a);
      if (b === null) break;
      if (b.some((k) => d.has(k))) return !1;
    }
  }
  return d.size === 0;
}
function Re(e, t) {
  return (
    e === t || (e.message?.id !== void 0 && e.message.id === t.message?.id)
  );
}
function Ce(e) {
  let t = e.message?.content;
  return Array.isArray(t)
    ? t.flatMap((r) =>
        typeof r === "object" && r !== null && r.type === "tool_result"
          ? [r.tool_use_id]
          : [],
      )
    : [];
}
function ee(e) {
  let t = e.message?.content;
  if (!Array.isArray(t) || t.length === 0) return null;
  let r = [];
  for (let s of t) {
    if (typeof s !== "object" || s === null || s.type !== "tool_result")
      return null;
    r.push(s.tool_use_id);
  }
  return r;
}
function isHumanOrUnstampedOrigin(e) {
  return e === void 0 || e.kind === "human";
}
function isVerifiedRelayHumanTurn(e) {
  return e.verifiedSlackHumanTurn === !0 && e.isMeta !== !0 && isHumanOrUnstampedOrigin(e.origin);
}
function isUnclassifiedOrigin(e) {
  return e === void 0 || e.kind === "unclassified";
}
function isProjectsRelayOrigin(e) {
  return e?.kind === "task-notification" && e.subkind === "projects-relay";
}
function isPeerOrObserverOrigin(e) {
  return (
    (e?.kind === "peer" && e.senderTaskId !== void 0) || e?.kind === "observer"
  );
}
function getOriginDisplayName(e) {
  return (e.kind === "peer" && e.name) || e.from;
}
function isPeerOrSlackPingOrigin(e) {
  return e?.kind === "peer" || e?.kind === "slack-ping";
}
function isUserDrivenOrUnstampedOrigin(e) {
  return e === void 0 || e.kind === "human" || e.kind === "auto-continuation";
}
function toHumanOrigin(e, t) {
  if (t) return;
  return typeof e === "object" &&
    e !== null &&
    "kind" in e &&
    e.kind === "human"
    ? { kind: "human" }
    : void 0;
}
function lacksHumanOrigin(e, t) {
  return (t === !0 || (e !== void 0 && e !== null)) && toHumanOrigin(e, t) === void 0;
}
function isPlainUserMessage(e) {
  return e.type === "user" && !e.isMeta && e.toolUseResult === void 0;
}
function isHumanAuthoredMessage(e, t) {
  return (
    isPlainUserMessage(e) ||
    (e.type === "system" &&
      e.subtype === "local_command" &&
      xe(e.content, t)) ||
    (e.type === "attachment" &&
      e.attachment.type === "queued_command" &&
      e.attachment.origin?.kind === "human")
  );
}
function isHumanUserMessage(e) {
  return (
    e.type === "user" &&
    !e.isMeta &&
    e.toolUseResult === void 0 &&
    !e.isCompactSummary &&
    isHumanOrUnstampedOrigin(e.origin)
  );
}
function logHumanOriginPresumed(e, t) {
  if (t === 0) return;
  logEvent("tengu_human_origin_presumed", {
    consumer: fromEnum(e),
    count_bucket: fromEnum(t === 1 ? "1" : t <= 5 ? "2-5" : "6+"),
  });
}
var Me = new RegExp(`<${COMMAND_NAME_TAG}>([^<]*)</${COMMAND_NAME_TAG}>`);
function xe(e, t) {
  let r = Me.exec(e)?.[1];
  if (r === void 0 || r === "") return !1;
  return r === t.trimStart().split(/\s/, 1)[0];
}
import { randomUUID } from "crypto";
function normalizeRequestIdFields(e) {
  if (e === null || typeof e !== "object") return e;
  let t = e;
  if ("requestId" in t && !("request_id" in t))
    ((t.request_id = t.requestId), delete t.requestId);
  if (
    "response" in t &&
    t.response !== null &&
    typeof t.response === "object"
  ) {
    let r = t.response;
    if ("requestId" in r && !("request_id" in r))
      ((r.request_id = r.requestId), delete r.requestId);
  }
  return e;
}
function isTypedMessageObject(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    typeof e.type === "string"
  );
}
function we(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    e.type === "control_response" &&
    "response" in e &&
    e.response != null
  );
}
function Ne(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    e.type === "control_request" &&
    "request_id" in e &&
    "request" in e &&
    e.request != null
  );
}
function setBridgeStateFramesGate(e) {
  getSessionRuntimeState().bridgeStateFramesGate = e;
}
function shouldRelayMessageToBridge(e) {
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual) return !1;
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return !0;
    if (e.attachment.type === "tool_host_result_lines") return !0;
    return (
      e.attachment.type === "queued_command" &&
      e.attachment.commandMode === "prompt" &&
      !e.attachment.isMeta &&
      isUserDrivenOrUnstampedOrigin(e.attachment.origin)
    );
  }
  return (
    e.type === "user" ||
    e.type === "assistant" ||
    (e.type === "system" &&
      (e.subtype === "local_command" ||
        (e.subtype === "compact_boundary" &&
          (getSessionRuntimeState().bridgeStateFramesGate?.() ?? !0))))
  );
}
var qe = [`<${COMMAND_NAME_TAG}>`, `<${LOCAL_COMMAND_STDOUT_TAG}>`, `<${LOCAL_COMMAND_STDERR_TAG}>`, `<${LOCAL_COMMAND_CAVEAT_TAG}>`];
function Oe(e) {
  let t = e.message?.content,
    r = Array.isArray(t)
      ? t.findLast((s) => s?.type === "text")?.text
      : typeof t === "string"
        ? t
        : void 0;
  return typeof r === "string" && qe.some((s) => r.startsWith(s));
}
function isRelayableUserMessage(e) {
  return e.type === "user" && !e.isCompactSummary && !Oe(e);
}
function isSdkStreamEvent(e) {
  return (
    e.type === "conversation_reset" ||
    e.type === "stream_event" ||
    (e.type === "system" && e.subtype === "status") ||
    e.subtype === "task_started" ||
    e.subtype === "task_progress" ||
    e.subtype === "task_updated" ||
    e.subtype === "task_notification" ||
    e.subtype === "background_tasks_changed" ||
    e.subtype === "thinking_tokens" ||
    e.subtype === "code_change_published" ||
    e.subtype === "vcs_state_changed"
  );
}
function getHumanUserMessageText(e) {
  if (!isHumanUserMessage(e)) return;
  let t = e.message.content,
    r;
  if (typeof t === "string") r = t;
  else
    for (let d of t)
      if (d.type === "text") {
        r = d.text;
        break;
      }
  if (!r) return;
  return stripXmlTags(r) || void 0;
}
function handleBridgeIngressMessage(e, t, r, s, d, S) {
  try {
    let p = normalizeRequestIdFields(jsonParse(e));
    if (we(p)) {
      (logForDebugging("[bridge:repl] Ingress message type=control_response"), d?.(p));
      return;
    }
    if (Ne(p)) {
      (logForDebugging(`[bridge:repl] Inbound control_request subtype=${p.request.subtype}`),
        S?.(p));
      return;
    }
    if (!isTypedMessageObject(p)) return;
    let a = "uuid" in p && typeof p.uuid === "string" ? p.uuid : void 0;
    if (a && t.has(a)) {
      logForDebugging(`[bridge:repl] Ignoring echo: type=${p.type} uuid=${a}`);
      return;
    }
    if (a && r.has(a)) {
      logForDebugging(
        `[bridge:repl] Ignoring re-delivered inbound: type=${p.type} uuid=${a}`,
      );
      return;
    }
    if (
      (logForDebugging(
        `[bridge:repl] Ingress message type=${p.type}${a ? ` uuid=${a}` : ""}`,
      ),
      p.type === "user")
    ) {
      if ("isReplay" in p && p.isReplay === !0) {
        logForDebugging(`[bridge:repl] Ignoring replay echo: uuid=${a ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in p && p.parent_tool_use_id != null) {
        logForDebugging(
          `[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${a}`,
        );
        return;
      }
      if (a) r.add(a);
      (logEvent("tengu_bridge_message_received", { is_repl: !0 }),
        logFeatureOk("bridge_message_receive"),
        s?.(p));
    } else logForDebugging(`[bridge:repl] Ignoring non-user inbound message: type=${p.type}`);
  } catch (p) {
    (logForDebugging(`[bridge:repl] Failed to parse ingress message: ${l(p)}`),
      logFeatureBad("bridge_message_receive", "bridge_message_receive_parse_failed"));
  }
}
var Pe = new Set(["effortLevel", "ultracode"]),
  Ue = 5,
  $e = 40,
  Fe =
    "This session is outbound-only. Enable Remote Control locally to allow inbound control.",
  Le = 8000,
  O =
    "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly",
  Ke = "This session is shutting down.",
  Be = new Set([
    "initialize",
    "file_suggestions",
    "read_file",
    "get_workspace_diff",
    "get_context_usage",
    "get_usage",
    "mcp_status",
  ]);
function Ge(e, t) {
  if (t instanceof mi) return sanitizeForRelay(l(t));
  if (yt(t)) return sanitizeForRelay(l(t));
  return (logForDebugging(`${e} failed: ${l(t)}`, { level: "error" }), `${e} failed`);
}
function assertMcpReconnectSucceeded(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) logForDebugging(`mcp_reconnect failed: ${e.error}`, { level: "error" });
    throw new mi("Connection failed");
  }
  throw new mi(`Server status: ${e.type}`);
}
function A(e, t, r, s) {
  s.then((d) => ({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: e.request_id,
      response: d ?? {},
    },
  }))
    .catch((d) => ({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: Ge(e.request.subtype, d),
      },
    }))
    .then((d) => {
      let S = { ...d, session_id: r };
      (t.write(S),
        logForDebugging(
          `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${d.response.subtype}`,
        ));
    });
}
var Ve = 8000;
function je(e, t, r, s, d = Ve) {
  let S = (k) => {
      for (let E of k)
        t.write({
          type: "system",
          subtype: "informational",
          content: sanitizeForRelay(E),
          level: "notice",
          uuid: randomUUID(),
          session_id: r,
        });
    },
    p = !1,
    a = {
      ok: !1,
      error:
        "This model switch is still pending (an earlier model request or a PreModelSwitch hook has not finished); it will apply when that completes unless it is refused",
    },
    b = s.then((k) => k ?? { ok: !0 });
  (withDeadline(b, d)
    .then((k) => {
      p = k === void 0;
      let E = k ?? a;
      if (E.ok && E.notices) S(E.notices);
      return E.ok
        ? {
            type: "control_response",
            response: { subtype: "success", request_id: e.request_id },
          }
        : {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: sanitizeForRelay(E.error),
            },
          };
    })
    .catch(
      (k) => (
        logForDebugging(`[bridge:repl] set_model verdict rejected: ${l(k)}`, {
          level: "error",
        }),
        {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "set_model failed",
          },
        }
      ),
    )
    .then((k) => {
      let E = { ...k, session_id: r };
      (t.write(E),
        logForDebugging(
          `[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${k.response.subtype}`,
        ));
    }),
    b.then(
      (k) => {
        if (!p) return;
        S(
          k.ok
            ? [...(k.notices ?? []), "The pending model switch was applied"]
            : [k.error],
        );
      },
      (k) => {
        if (
          (logForDebugging(
            `[bridge] set_model verdict rejected after the deadline reply: ${l(k)}`,
            { level: "error" },
          ),
          p)
        )
          S(["The pending model switch failed"]);
      },
    ));
}
function handleBridgeControlRequest(e, t) {
  let {
    transport: r,
    sessionId: s,
    outboundOnly: d,
    getInitializeState: S,
    getCommands: p,
    getPendingPrompts: a,
    onInterrupt: b,
    onStopTask: k,
    onBackgroundTasks: E,
    onDialogKindsDeclared: M,
    onClientInitialize: _e,
    onSetModel: ge,
    onSetMaxThinkingTokens: fe,
    onSetPermissionMode: ye,
    onApplyFlagSettings: F,
    onRenameSession: me,
    onSetColor: be,
    onFileSuggestions: L,
    onReadFile: B,
    onGetWorkspaceDiff: G,
    onGetContextUsage: V,
    onGetUsage: j,
    onMcpAuthenticate: W,
    onMcpOauthCallbackUrl: H,
    onMcpReconnect: he,
    onMcpStatus: ke,
    onMcpSetServers: Y,
  } = t;
  if (!r) {
    logForDebugging(
      "[bridge:repl] Cannot respond to control_request: transport not configured",
    );
    return;
  }
  let h;
  if (isExiting() && !Be.has(e.request.subtype)) {
    (logForDebugging(`[bridge] refusing ${e.request.subtype}: this process is exiting`),
      (h = {
        type: "control_response",
        response: { subtype: "error", request_id: e.request_id, error: Ke },
      }));
    let o = { ...h, session_id: s };
    r.write(o);
    return;
  }
  if (d && e.request.subtype !== "initialize") {
    h = {
      type: "control_response",
      response: { subtype: "error", request_id: e.request_id, error: Fe },
    };
    let o = { ...h, session_id: s };
    (r.write(o),
      logForDebugging(
        `[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`,
      ));
    return;
  }
  switch (e.request.subtype) {
    case "initialize": {
      try {
        let I = normalizeDeclaredDialogKinds(e.request.supportedDialogKinds);
        if (I.length > 0) M?.(I);
      } catch (I) {
        logForDebugging(
          `[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${l(I)}`,
        );
      }
      let o = [];
      if (!d)
        try {
          o = p?.() ?? [];
        } catch (I) {
          (logFeatureBad("bridge_initialize_commands", "get_commands_threw"),
            logForDebugging(
              `[bridge:repl] getCommands failed; acking initialize with commands: []: ${l(I)}`,
            ));
        }
      let _ = a?.() ?? [],
        D = _.filter((I) => I.request.subtype === "can_use_tool"),
        R = _.filter((I) => I.request.subtype === "request_user_dialog");
      h = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: {
            commands: o,
            agents: [],
            output_style: "normal",
            available_output_styles: ["normal"],
            models: [],
            account: {},
            pid: process.pid,
            ...S?.(),
          },
          ...(D.length > 0 && { pending_permission_requests: D }),
          ...(R.length > 0 && { pending_user_dialog_requests: R }),
        },
      };
      try {
        _e?.();
      } catch (I) {
        logForDebugging(
          `[bridge:repl] onClientInitialize failed; acking initialize anyway: ${l(I)}`,
        );
      }
      break;
    }
    case "set_model": {
      let o = e.request.model;
      if (o != null && typeof o !== "string") {
        (logFeatureBad("model_switch", "invalid_model_type"),
          (h = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "set_model: model must be a string",
            },
          }));
        break;
      }
      let _ = ge?.(e.request.model ?? void 0);
      if (_ && "then" in _) {
        je(e, r, s, _, t.setModelVerdictDeadlineMs);
        return;
      }
      if (_ && !_.ok)
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: sanitizeForRelay(_.error),
          },
        };
      else
        h = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      break;
    }
    case "set_max_thinking_tokens": {
      let o = e.request.max_thinking_tokens,
        _ = e.request.thinking_display;
      if (
        (o != null && (typeof o !== "number" || !Number.isInteger(o))) ||
        (_ != null && _ !== "summarized" && _ !== "omitted")
      ) {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              'set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be "summarized", "omitted", or null',
          },
        };
        break;
      }
      (fe?.(e.request.max_thinking_tokens, e.request.thinking_display),
        (h = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        }));
      break;
    }
    case "set_permission_mode": {
      let o = parsePermissionMode(e.request.mode),
        _ =
          o === void 0
            ? { ok: !1, error: UNRECOGNIZED_PERMISSION_MODE_ERROR }
            : (ye?.(o) ?? {
                ok: !1,
                error:
                  "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)",
              });
      if (_.ok)
        h = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      else
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: sanitizeForRelay(_.error),
          },
        };
      break;
    }
    case "rename_session": {
      if (typeof e.request.title !== "string") {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "rename_session: title must be a string",
          },
        };
        break;
      }
      let _ = me?.(e.request.title) ?? {
        ok: !1,
        error:
          "rename_session is not supported in this context (onRenameSession callback not registered)",
      };
      if (_.ok)
        h = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      else
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: sanitizeForRelay(_.error),
          },
        };
      break;
    }
    case "set_color": {
      let o = be?.(e.request.color) ?? {
        ok: !1,
        error:
          "set_color is not supported in this context (onSetColor callback not registered)",
      };
      if (o.ok)
        h = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        };
      else
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: sanitizeForRelay(o.error),
          },
        };
      break;
    }
    case "file_suggestions": {
      if (!L) {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "file_suggestions is not supported in this context (onFileSuggestions callback not registered)",
          },
        };
        break;
      }
      A(
        e,
        r,
        s,
        L(e.request.query).then((o) => ({ suggestions: o })),
      );
      return;
    }
    case "read_file": {
      if (!B) {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "read_file is not supported in this context (onReadFile callback not registered)",
          },
        };
        break;
      }
      A(
        e,
        r,
        s,
        B(e.request.path, e.request.max_bytes, e.request.encoding).then(
          ((o) => (_) => ({ ..._, absPath: o }))(e.request.path),
        ),
      );
      return;
    }
    case "get_workspace_diff": {
      if (!G) {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "get_workspace_diff is not supported in this context (onGetWorkspaceDiff callback not registered)",
          },
        };
        break;
      }
      let o = new AbortController();
      A(
        e,
        r,
        s,
        withTimeout(G(o.signal), Le, O).catch((_) => {
          if ((o.abort(), l(_) === O)) throw new mi(O);
          throw _;
        }),
      );
      return;
    }
    case "get_context_usage": {
      if (!V) {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "get_context_usage is not supported in this context (onGetContextUsage callback not registered)",
          },
        };
        break;
      }
      A(
        e,
        r,
        s,
        V({ detail: e.request.detail }).then((o) => ({
          ...o,
          memoryFiles: [],
        })),
      );
      return;
    }
    case "get_usage": {
      if (!j) {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "get_usage is not supported in this context (onGetUsage callback not registered)",
          },
        };
        break;
      }
      A(
        e,
        r,
        s,
        j().then((o) => ({ ...o })),
      );
      return;
    }
    case "mcp_status":
      h = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: {
            mcpServers: (ke?.() ?? []).map((o) => ({
              name: o.name,
              status: o.status,
            })),
          },
        },
      };
      break;
    case "mcp_authenticate":
    case "mcp_oauth_callback_url":
    case "mcp_reconnect": {
      let o = e.request,
        { subtype: _, serverName: D } = o,
        R =
          o.subtype === "mcp_authenticate"
            ? W && ((I) => W(I, o.redirectUri))
            : o.subtype === "mcp_oauth_callback_url"
              ? H && ((I) => H(I, o.callbackUrl))
              : he;
      if (!R) {
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: `${_} is not supported in this context (callback not registered)`,
          },
        };
        break;
      }
      A(e, r, s, R(D));
      return;
    }
    case "interrupt":
      (b?.(),
        (h = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id },
        }));
      break;
    case "apply_flag_settings": {
      let o = ze(e.request.settings),
        _;
      if (!o.ok) _ = o;
      else if (!F)
        (logFeatureBad("bridge_flag_settings", "not_registered"),
          (_ = {
            ok: !1,
            error:
              "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)",
          }));
      else _ = F(o.settings);
      if (_.ok)
        (logFeatureOk("bridge_flag_settings"),
          (h = {
            type: "control_response",
            response: { subtype: "success", request_id: e.request_id },
          }));
      else
        h = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: _.error,
          },
        };
      break;
    }
    case "mcp_set_servers": {
      let o = e.request.servers,
        _ = "hint" in e.request ? e.request.hint : void 0,
        D;
      if (o === void 0 && typeof _ === "string")
        (logForDebugging(
          "[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply",
        ),
          (D = {
            ok: !0,
            added: [],
            removed: [],
            errors: {},
            unknownServerCount: 0,
          }));
      else if (!ie(o))
        D = { ok: !1, error: "mcp_set_servers: servers must be an object" };
      else if (!Y)
        D = {
          ok: !1,
          error:
            "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)",
        };
      else
        try {
          D = Y(o);
        } catch (R) {
          (logForDebugging(`[bridge:repl] mcp_set_servers handler threw: ${l(R)}`, {
            level: "error",
          }),
            (D = { ok: !1, error: "mcp_set_servers failed to apply" }));
        }
      h = D.ok
        ? {
            type: "control_response",
            response: {
              subtype: "success",
              request_id: e.request_id,
              response: {
                added: D.added,
                removed: D.removed,
                errors: He(D.errors, D.unknownServerCount),
              },
            },
          }
        : {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: sanitizeForRelay(D.error),
            },
          };
      break;
    }
    case "stop_task": {
      let o = e.request.task_id;
      if (typeof o !== "string") {
        (logFeatureBad("task_stop_user", "invalid_task_id"),
          (h = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task: task_id must be a string",
            },
          }));
        break;
      }
      let _ = o;
      if (!k) {
        (logFeatureBad("task_stop_user", "not_supported"),
          (h = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "stop_task is not supported in this context (callback not registered)",
            },
          }));
        break;
      }
      A(e, r, s, k(_));
      return;
    }
    case "background_tasks": {
      let o = parseBackgroundTasksToolUseId(e.request.tool_use_id);
      if (!o.valid) {
        (logFeatureBad("task_local_shell_background_all", "invalid_tool_use_id"),
          (h = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: BACKGROUND_TASKS_TOOL_USE_ID_TYPE_ERROR,
            },
          }));
        break;
      }
      let { toolUseId: _ } = o;
      if (!E) {
        (logFeatureBad("task_local_shell_background_all", "not_supported"),
          (h = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "background_tasks is not supported in this context (callback not registered)",
            },
          }));
        break;
      }
      if (areBackgroundTasksDisabled()) {
        (logFeatureBad("task_local_shell_background_all", "disabled"),
          (h = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: BACKGROUND_TASKS_DISABLED_MESSAGE,
            },
          }));
        break;
      }
      A(
        e,
        r,
        s,
        Promise.resolve()
          .then(() => E(_))
          .then((D) => (_ === void 0 ? {} : { backgrounded: D })),
      );
      return;
    }
    default:
      h = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: `REPL bridge does not handle control_request subtype: ${sanitizeForRelay(String(e.request.subtype))}`,
        },
      };
  }
  let Se = { ...h, session_id: s };
  (r.write(Se),
    logForDebugging(
      `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${h.response.subtype}`,
    ));
}
function ie(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var We = "(servers not adopted)";
function He(e, t) {
  if (t <= 0) return e;
  return {
    ...e,
    [We]: `${t} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`,
  };
}
function ze(e) {
  if (!ie(e))
    return (
      logFeatureBad("bridge_flag_settings", "invalid_shape"),
      { ok: !1, error: "apply_flag_settings: settings must be an object" }
    );
  let t = Object.keys(e).filter((s) => !Pe.has(s));
  if (t.length > 0) {
    logFeatureBad("bridge_flag_settings", "unsupported_key");
    let s = t.slice(0, Ue).map((S) => formatDisplayText(S, $e)),
      d = t.length > s.length ? ` (+${t.length - s.length} more)` : "";
    return {
      ok: !1,
      error: `apply_flag_settings: ${s.join(", ")}${d} cannot be changed over Remote Control (only effortLevel and ultracode can)`,
    };
  }
  let r = {};
  if ("effortLevel" in e) {
    let s = e.effortLevel;
    if (s !== null && typeof s !== "string")
      return (
        logFeatureBad("bridge_flag_settings", "invalid_type"),
        {
          ok: !1,
          error: "apply_flag_settings: effortLevel must be a string or null",
        }
      );
    r.effortLevel = s;
  }
  if ("ultracode" in e) {
    let s = e.ultracode;
    if (typeof s !== "boolean")
      return (
        logFeatureBad("bridge_flag_settings", "invalid_type"),
        { ok: !1, error: "apply_flag_settings: ultracode must be a boolean" }
      );
    r.ultracode = s;
  }
  if (!("effortLevel" in r) && !("ultracode" in r))
    return (
      logFeatureBad("bridge_flag_settings", "nothing_to_apply"),
      {
        ok: !1,
        error:
          "apply_flag_settings: nothing to apply \u2014 only effortLevel and ultracode can be changed over Remote Control",
      }
    );
  return { ok: !0, settings: r };
}
function createBridgeResultMessage(e, t) {
  let r = t?.outcome,
    s = r !== void 0 && isAbortTerminalReason(r.terminal_reason),
    d = {
      type: "result",
      ...(!s && t?.userMessageUuid && { user_message_uuid: t.userMessageUuid }),
      duration_ms: 0,
      duration_api_ms: 0,
      total_cost_usd: 0,
      usage: { ...ZERO_USAGE_TOTALS },
      modelUsage: {},
      permission_denials: [],
      session_id: e,
      uuid: randomUUID(),
    };
  if (r === void 0 || s)
    return {
      ...d,
      subtype: "success",
      is_error: !1,
      num_turns: 0,
      result: "",
      stop_reason: null,
    };
  let S = {
    is_error: r.is_error,
    num_turns: r.num_turns,
    stop_reason: r.stop_reason,
    ...(r.terminal_reason !== void 0 && { terminal_reason: r.terminal_reason }),
  };
  if (r.subtype === "success")
    return {
      ...d,
      ...S,
      subtype: "success",
      result: "",
      ...(r.api_error_status != null && {
        api_error_status: r.api_error_status,
      }),
    };
  return { ...d, ...S, subtype: r.subtype, errors: [] };
}
function createWorkerShuttingDownMessage(e, t) {
  return {
    type: "system",
    subtype: "worker_shutting_down",
    reason: t,
    session_id: e,
    uuid: randomUUID(),
  };
}
var Ye = "PushNotification";
function createPushNotificationToolUseMessage(e, t) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: randomUUID(),
      container: null,
      model: SYNTHETIC_MODEL_NAME,
      role: "assistant",
      stop_details: null,
      stop_reason: "tool_use",
      stop_sequence: null,
      type: "message",
      usage: { ...ZERO_USAGE_TOTALS },
      content: [
        {
          type: "tool_use",
          id: randomUUID(),
          name: Ye,
          input: { message: e, status: "proactive" },
        },
      ],
      context_management: null,
    },
    parent_tool_use_id: null,
    is_meta: !0,
    session_id: t,
    uuid: randomUUID(),
  };
}
function createSyntheticAssistantTextMessage(e, t) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: randomUUID(),
      container: null,
      model: SYNTHETIC_MODEL_NAME,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: { ...ZERO_USAGE_TOTALS },
      content: [{ type: "text", text: e, citations: null }],
      context_management: null,
    },
    parent_tool_use_id: null,
    session_id: t,
    uuid: randomUUID(),
    timestamp: new Date().toISOString(),
  };
}
class BoundedDedupBuffer {
  capacity;
  ring;
  set = new Set();
  writeIdx = 0;
  constructor(e) {
    ((this.capacity = e), (this.ring = Array(e)));
  }
  add(e) {
    if (this.set.has(e)) return;
    let t = this.ring[this.writeIdx];
    if (t !== void 0) this.set.delete(t);
    ((this.ring[this.writeIdx] = e),
      this.set.add(e),
      (this.writeIdx = (this.writeIdx + 1) % this.capacity));
  }
  has(e) {
    return this.set.has(e);
  }
  clear() {
    (this.set.clear(), this.ring.fill(void 0), (this.writeIdx = 0));
  }
}
var Xe = [
    "UNSPECIFIED",
    "ABSENT",
    "VERIFIED",
    "VERIFIED_BY_GATE",
    "INVALID",
    "UNCHECKED",
    "VERIFIED_KEYLESS_DEVICE",
    "SERVICE_VOUCHED",
  ],
  ae = "DEVICE_ATTESTATION_STATUS_",
  Qe = [
    "UNSPECIFIED",
    "ABSENT",
    "VERIFIED",
    "VERIFIED_BY_GATE",
    "INVALID",
    "UNCHECKED",
  ];
function normalizeDeviceAttestationStatus(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return Qe[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  let t = e.startsWith(ae) ? e.slice(ae.length) : e;
  return Xe.find((r) => r === t) ?? "UNSPECIFIED";
}
var U = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
function meetsAttestationLevel(e, t) {
  if (e === "SERVICE_VOUCHED") return !0;
  let r = U.findIndex((s) => s === e);
  return r !== -1 && r <= U.indexOf(t);
}
var DEFAULT_ATTESTATION_FILTER_POLICY = { enforce: !1, acceptLevel: "VERIFIED", acceptStatuses: new Set() },
  Ze = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"],
  Je = createLazyValue(() =>
    c({
      accept_level: X(U).default("VERIFIED"),
      accept_statuses: v(X(Ze)).default([]),
    }),
  );
function parseAttestationFilterPolicy(e) {
  let t = getSessionRuntimeState().attestation,
    r = Je().safeParse(e);
  if (!r.success && !t.malformedConfigReported) {
    t.malformedConfigReported = !0;
    try {
      (logForDebugging(
        `[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${r.error.message}`,
        { level: "error" },
      ),
        logFeatureSad("bridge_event_attestation", "malformed_config"));
    } catch (s) {
      logForDebugging(`[bridge:attestation] malformed-config report threw: ${l(s)}`, {
        level: "error",
      });
    }
  }
  return {
    enforce: !0,
    acceptLevel: r.success ? r.data.accept_level : "VERIFIED",
    acceptStatuses: new Set(r.success ? r.data.accept_statuses : []),
  };
}
function setAttestationFilterPolicy(e) {
  getSessionRuntimeState().attestation.filterPolicy = e;
}
function setAttestationDropNotifier(e) {
  getSessionRuntimeState().attestation.dropNotifier = e;
}
function setAttestationSenderDropWriter(e) {
  getSessionRuntimeState().attestation.senderDropWriter = e;
}
function clearAttestationSenderDropWriter(e) {
  let t = getSessionRuntimeState().attestation;
  if (t.senderDropWriter === e) t.senderDropWriter = void 0;
}
var REMOTE_IO_WARNING_PREFIX = "[remote-io] warning: ";
function describeDroppedAttestationPayload({ status: e, payloadType: t, subtype: r }) {
  return {
    what:
      t === "control_response"
        ? "permission response"
        : t === "control_request"
          ? `remote command (${r})`
          : "message",
    hint:
      e === "ABSENT" || e === "INVALID"
        ? "Re-pair the sending device in Trusted Devices."
        : e === "VERIFIED_BY_GATE" || e === "VERIFIED_KEYLESS_DEVICE"
          ? "The app that sent it doesn't sign its activity. Use the terminal or an app that does."
          : void 0,
  };
}
function formatRemoteActivityDropWarning(e) {
  if (e.windowCapped)
    return "Remote Control is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.";
  let { what: t, hint: r } = describeDroppedAttestationPayload(e);
  return `Remote Control ignored a ${t} that arrived without a valid device signature (attestation: ${e.status}).${r ? ` ${r}` : ""}`;
}
function formatRemoteActivityDropReply(e) {
  let { what: t, hint: r } = describeDroppedAttestationPayload(e);
  return `This ${t} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${r ? ` ${r}` : ""}`;
}
function et(e) {
  if (e.payloadType === "control_request") return;
  return createSyntheticAssistantTextMessage(e.windowCapped ? formatRemoteActivityDropWarning(e) : formatRemoteActivityDropReply(e), K());
}
var tt = new Set([
  "set_model",
  "set_permission_mode",
  "interrupt",
  "stop_task",
  "background_tasks",
  "set_max_thinking_tokens",
  "rename_session",
  "set_color",
  "mcp_authenticate",
  "mcp_oauth_callback_url",
  "mcp_reconnect",
  "apply_flag_settings",
  "side_question",
  "reload_plugins",
]);
function getControlFrameRequestId(e) {
  let t =
    "request_id" in e ? e.request_id : "requestId" in e ? e.requestId : void 0;
  return typeof t === "string" ? t : void 0;
}
function pe(e) {
  let t = e.payload?.request,
    r =
      typeof t === "object" && t !== null && "subtype" in t
        ? t.subtype
        : void 0;
  if (typeof r !== "string" || !tt.has(r)) return;
  return { subtype: r, requestId: e.payload ? getControlFrameRequestId(e.payload) : void 0 };
}
var nt = 2000,
  ue = 200,
  rt = 256;
function x(e, t, r) {
  if ((e.delete(r), e.add(r), e.size > t))
    for (let s of e) {
      e.delete(s);
      break;
    }
}
function st(e) {
  let t = getSessionRuntimeState().attestation;
  return t.knownInboundRequestIds.has(e) || t.knownOutboundRequestIds.has(e);
}
function recordOutboundRequestId(e, { automated: t }) {
  let r = getSessionRuntimeState().attestation;
  if ((x(r.knownOutboundRequestIds, ue, e), t))
    x(r.automatedOutboundRequestIds, ue, e);
}
function ot(e) {
  let t = e.payload?.response;
  if (typeof t !== "object" || t === null) return !1;
  let r = getControlFrameRequestId(t);
  return r !== void 0 && getSessionRuntimeState().attestation.automatedOutboundRequestIds.has(r);
}
var it = 200;
function markPromptRequestResolved(e) {
  x(getSessionRuntimeState().attestation.resolvedPromptRequestIds, it, e);
}
function at(e) {
  let t = e.payload?.response;
  if (typeof t !== "object" || t === null) return !1;
  let r = getControlFrameRequestId(t);
  return r !== void 0 && getSessionRuntimeState().attestation.resolvedPromptRequestIds.has(r);
}
var ut = 60000,
  de = 10;
function le(e, t) {
  let r = getSessionRuntimeState().attestation;
  if (r.dropNotifier === void 0 && r.senderDropWriter === void 0) return;
  if (r.recentDropEventIds.has(t)) return;
  x(r.recentDropEventIds, rt, t);
  let s =
      e.payloadType === "control_request"
        ? r.commandDropNoticeWindow
        : r.messageDropNoticeWindow,
    d = Date.now();
  if (d - s.start >= ut) ((s.start = d), (s.count = 0));
  if ((s.count++, s.count <= de)) ce(e);
  else if (s.count === de + 1)
    ce({
      status: e.status,
      payloadType: e.payloadType,
      ...(e.subtype !== void 0 && { subtype: e.subtype }),
      windowCapped: !0,
    });
}
function ce(e) {
  let t = getSessionRuntimeState().attestation;
  if (t.dropNotifier !== void 0)
    try {
      t.dropNotifier(e);
    } catch (r) {
      logForDebugging(`[bridge:attestation] drop notifier threw: ${l(r)}`, {
        level: "error",
      });
    }
  if (t.senderDropWriter !== void 0)
    try {
      let r = et(e);
      if (r) t.senderDropWriter(r);
    } catch (r) {
      logForDebugging(`[bridge:attestation] drop sender writer threw: ${l(r)}`, {
        level: "error",
      });
    }
}
function P(e, t) {
  if (t !== "control_request") return;
  let r = e.payload ? getControlFrameRequestId(e.payload) : void 0;
  if (r !== void 0) x(getSessionRuntimeState().attestation.knownInboundRequestIds, nt, r);
  if (pe(e) !== void 0) logFeatureOk("bridge_control_request_attestation");
}
var dt = new Set([
  "bash_command",
  "update_environment_variables",
  "assistant",
  "system",
]);
function lt(e, t, r) {
  try {
    let s = getSessionRuntimeState().attestation.reportedStrayDropCodes,
      d =
        r === "control_request"
          ? "control_request_other"
          : dt.has(r)
            ? r
            : "other_payload_type",
      S = `${t.toLowerCase()}_${d}`;
    if (s.has(S)) return;
    (s.add(S),
      logForDebugging(
        `[bridge:attestation] DROPPING unverified ${r} event_id=${e.event_id} status=${t} (stray payload class ${S}; counted once per process)`,
        { level: "warn" },
      ),
      logFeatureBad("bridge_stray_event_attestation", S));
  } catch (s) {
    logForDebugging(`[bridge:attestation] stray-drop report threw: ${l(s)}`, {
      level: "error",
    });
  }
}
function isEventRejectedByAttestation(e) {
  let t = typeof e.payload?.type === "string" ? e.payload.type : e.event_type,
    r = t === "user" || t === "control_response",
    s = normalizeDeviceAttestationStatus(e.device_attestation_status),
    d = getSessionRuntimeState().attestation.filterPolicy?.() ?? DEFAULT_ATTESTATION_FILTER_POLICY;
  if (meetsAttestationLevel(s, d.acceptLevel)) {
    if (r) logFeatureOk("bridge_event_attestation");
    return (P(e, t), !1);
  }
  if (!d.enforce) {
    if ((P(e, t), s === "UNSPECIFIED")) return !1;
    if (r)
      (logForDebugging(
        `[bridge:attestation] accepting unverified ${t} event_id=${e.event_id} status=${s}`,
        { level: "info" },
      ),
        logFeatureSad("bridge_event_attestation", `${s.toLowerCase()}_${t}`));
    return !1;
  }
  let S = d.acceptStatuses.has(s),
    p = !1;
  if (r) {
    let a = `${s.toLowerCase()}_${t}`;
    if (
      (logForDebugging(
        `[bridge:attestation] ${S ? "accepting (config exception)" : "DROPPING"} unverified ${t} event_id=${e.event_id} status=${s}`,
        { level: S ? "info" : "warn" },
      ),
      S)
    )
      logFeatureSad("bridge_event_attestation", a);
    else if (t === "control_response" && ot(e))
      ((p = !0),
        logForDebugging(
          `[bridge:attestation] dropped ${t} event_id=${e.event_id} status=${s} answers an automated outbound request; notice suppressed`,
          { level: "info" },
        ),
        logFeatureBad("bridge_event_attestation", `${a}_automated_reply`));
    else if (t === "control_response" && at(e))
      ((p = !0),
        logForDebugging(
          `[bridge:attestation] dropped ${t} event_id=${e.event_id} status=${s} is a duplicate answer to an already-resolved prompt; notice suppressed`,
          { level: "info" },
        ),
        logFeatureBad("bridge_event_attestation", `${a}_resolved_duplicate`));
    else
      ((p = !0),
        logFeatureBad("bridge_event_attestation", a),
        le({ status: s, payloadType: t }, e.event_id));
  } else if (t === "control_request" && !S) {
    let a = pe(e);
    if (a) {
      p = !0;
      let b = a.requestId !== void 0 && st(a.requestId) ? void 0 : a.requestId;
      (logForDebugging(
        `[bridge:attestation] DROPPING unverified control_request subtype=${a.subtype} event_id=${e.event_id} status=${s}${b === void 0 && a.requestId !== void 0 ? " (forged-id refusal suppressed)" : ""}`,
        { level: "warn" },
      ),
        logFeatureBad(
          "bridge_control_request_attestation",
          `${s.toLowerCase()}_${a.subtype}`,
        ),
        le(
          { status: s, payloadType: t, subtype: a.subtype, requestId: b },
          e.event_id,
        ));
    }
  }
  if (!S && !p) lt(e, s, t);
  if (S) P(e, t);
  return !S;
}
export {
  NO_CONTENT_PLACEHOLDER,
  NO_RESPONSE_REQUESTED_TEXT,
  SYNTHETIC_MODEL_NAME,
  AUTO_MODE_ACTIVE_HEADING,
  SKIPPED_TRACKED_PATHS_REASON,
  ZERO_USAGE_TOTALS,
  parseBackgroundTasksToolUseId,
  BACKGROUND_TASKS_TOOL_USE_ID_TYPE_ERROR,
  normalizeRequestIdFields,
  MAX_DECLARED_DIALOG_KINDS,
  normalizeDeclaredDialogKinds,
  sanitizeForRelay,
  replaceInvisibleCharsWithSpace,
  sanitizeRelayableText,
  formatElicitationUrls,
  isHumanOrigin,
  isStrictHumanTurn,
  hasStrictHumanDecider,
  isUserDrivenOrigin,
  isUserDrivenTurn,
  analyzeTurnTail,
  isHumanOrUnstampedOrigin,
  isVerifiedRelayHumanTurn,
  isUnclassifiedOrigin,
  isProjectsRelayOrigin,
  isPeerOrObserverOrigin,
  getOriginDisplayName,
  isPeerOrSlackPingOrigin,
  isUserDrivenOrUnstampedOrigin,
  toHumanOrigin,
  lacksHumanOrigin,
  isPlainUserMessage,
  isHumanAuthoredMessage,
  isHumanUserMessage,
  logHumanOriginPresumed,
  isTypedMessageObject,
  setBridgeStateFramesGate,
  shouldRelayMessageToBridge,
  isRelayableUserMessage,
  isSdkStreamEvent,
  getHumanUserMessageText,
  handleBridgeIngressMessage,
  assertMcpReconnectSucceeded,
  handleBridgeControlRequest,
  createBridgeResultMessage,
  createWorkerShuttingDownMessage,
  createPushNotificationToolUseMessage,
  createSyntheticAssistantTextMessage,
  BoundedDedupBuffer,
  normalizeDeviceAttestationStatus,
  meetsAttestationLevel,
  DEFAULT_ATTESTATION_FILTER_POLICY,
  parseAttestationFilterPolicy,
  setAttestationFilterPolicy,
  setAttestationDropNotifier,
  setAttestationSenderDropWriter,
  clearAttestationSenderDropWriter,
  REMOTE_IO_WARNING_PREFIX,
  describeDroppedAttestationPayload,
  formatRemoteActivityDropWarning,
  formatRemoteActivityDropReply,
  getControlFrameRequestId,
  recordOutboundRequestId,
  markPromptRequestResolved,
  isEventRejectedByAttestation,
};

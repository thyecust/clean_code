// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { lit as S, fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { pt, io, cnt, Xkt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { iy, gc } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { Ol } from "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import { IT } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { sDe, b6t, createAttachmentMessage as pn, Vc, Re, wH } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { xZ, Pst } from "../../02-功能模块/Bridge-RemoteControl/chunk-x379yyxb.js";
import { iQt } from "../../01-核心基础设施/共享小工具-未细化/chunk-cbdr3qdm.js";
import { mt } from "../../02-功能模块/工具Task-Agent调度/chunk-1px84m19.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { randomUUID as M } from "crypto";
function eFn(e) {
  return (
    e.type !== "control_request" &&
    e.type !== "control_response" &&
    e.type !== "keep_alive" &&
    e.type !== "control_cancel_request" &&
    e.type !== "transcript_mirror" &&
    !(e.type === "system" && e.subtype === "task_summary")
  );
}
function A(e) {
  return {
    type: "assistant",
    message: e.message,
    uuid: e.uuid,
    requestId: void 0,
    timestamp: e.timestamp ?? new Date().toISOString(),
    error: e.error,
    ...(e.is_api_error_message && { isApiErrorMessage: !0 }),
    ...(e.api_error !== void 0 && { apiError: e.api_error }),
  };
}
function v(e) {
  return {
    type: "stream_event",
    event: e.event,
    ...(e.ttft_ms !== void 0 && { ttftMs: e.ttft_ms }),
  };
}
function b(e, s) {
  return typeof e === "string" ? pt(e) : s;
}
function p(e) {
  let s = e;
  if (typeof s === "string" && s !== "" && e !== void 0) return e;
  return (
    n(
      "[sdkMessageAdapter] frame uuid missing or not a string \u2014 minting one",
      { level: "error" },
    ),
    M()
  );
}
function y(e) {
  if (typeof e.content === "string") return !0;
  return (
    n(
      `[sdkMessageAdapter] Dropping ${e.subtype} frame whose content is not a string`,
      { level: "error" },
    ),
    !1
  );
}
function k(e) {
  if (e.subtype === "success")
    return {
      type: "system",
      subtype: "informational",
      content: "Session completed successfully",
      level: "info",
      uuid: p(e.uuid),
      timestamp: new Date().toISOString(),
    };
  let s = e.errors;
  if (!Array.isArray(s))
    return (
      n(
        `[sdkMessageAdapter] ${e.subtype} result without an errors[] array \u2014 nothing to show`,
      ),
      null
    );
  let r = s.filter(
    (t) =>
      typeof t === "string" &&
      !t.startsWith("[ede_diagnostic]") &&
      !t.startsWith("[session_crash]"),
  );
  if (r.length === 0) return null;
  return {
    type: "system",
    subtype: "informational",
    content: pt(r.join(", ")),
    level: "warning",
    uuid: p(e.uuid),
    timestamp: new Date().toISOString(),
  };
}
function w(e) {
  return {
    type: "system",
    subtype: "informational",
    content: `Cloud session initialized (model: ${b(e.model, "unknown")})`,
    level: "info",
    uuid: p(e.uuid),
    timestamp: new Date().toISOString(),
  };
}
function h(e) {
  let s = e.status;
  if (typeof s !== "string" || s === "") return null;
  return {
    type: "system",
    subtype: "informational",
    content:
      s === "compacting" ? "Compacting conversation\u2026" : `Status: ${pt(s)}`,
    level: "info",
    uuid: p(e.uuid),
    timestamp: new Date().toISOString(),
  };
}
function D(e) {
  let { tool_name: s, elapsed_time_seconds: r, tool_use_id: t } = e;
  if (
    typeof s !== "string" ||
    typeof r !== "number" ||
    !Number.isFinite(r) ||
    typeof t !== "string"
  )
    return (
      n(
        "[sdkMessageAdapter] Dropping tool_progress frame with a non-string tool_name/tool_use_id or non-finite elapsed_time_seconds",
        { level: "error" },
      ),
      null
    );
  return {
    type: "system",
    subtype: "informational",
    content: `Tool ${pt(s)} running for ${r}s\u2026`,
    level: "info",
    uuid: p(e.uuid),
    timestamp: new Date().toISOString(),
    toolUseID: e.tool_use_id,
  };
}
function I(e) {
  let s = e.compact_metadata;
  if (typeof s !== "object" || s === null)
    return (
      n(
        "[sdkMessageAdapter] Dropping compact_boundary frame without compact_metadata",
        { level: "error" },
      ),
      null
    );
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    uuid: p(e.uuid),
    timestamp: new Date().toISOString(),
    compactMetadata: b6t(e.compact_metadata),
  };
}
function w6e(e) {
  let s = typeof e.model === "string" ? e.model : void 0;
  if (e.model !== void 0 && s === void 0)
    n(
      `[sdkMessageAdapter] init frame model is ${e.model === null ? "null" : typeof e.model}, not a string \u2014 keeping the current model`,
      { level: "error" },
    );
  let r = typeof e.cwd === "string" ? e.cwd : void 0;
  if (e.cwd !== void 0 && r === void 0)
    n(
      "[sdkMessageAdapter] init frame cwd is not a string \u2014 not adopting",
      { level: "error" },
    );
  let t;
  if (Array.isArray(e.slash_commands))
    t = e.slash_commands.filter((o) => typeof o === "string");
  else if (e.slash_commands !== void 0)
    n(
      "[sdkMessageAdapter] init frame slash_commands is not an array \u2014 keeping the local command list",
      { level: "error" },
    );
  let l;
  if (Array.isArray(e.mcp_servers))
    l = e.mcp_servers.flatMap((o) =>
      typeof o === "object" &&
      o !== null &&
      typeof o.name === "string" &&
      (o.status === void 0 || typeof o.status === "string")
        ? [
            o.status === void 0
              ? { name: o.name }
              : { name: o.name, status: o.status },
          ]
        : [],
    );
  else if (e.mcp_servers !== void 0)
    n(
      "[sdkMessageAdapter] init frame mcp_servers is not an array \u2014 ignoring",
      { level: "error" },
    );
  let a;
  if (Array.isArray(e.skills))
    a = e.skills.filter((o) => typeof o === "string");
  else if (e.skills !== void 0)
    n("[sdkMessageAdapter] init frame skills is not an array \u2014 ignoring", {
      level: "error",
    });
  let d;
  if (Array.isArray(e.plugins))
    d = e.plugins.flatMap((o) =>
      typeof o === "object" && o !== null && typeof o.name === "string"
        ? [o.name]
        : [],
    );
  else if (e.plugins !== void 0)
    n(
      "[sdkMessageAdapter] init frame plugins is not an array \u2014 ignoring",
      { level: "error" },
    );
  let c;
  if (Array.isArray(e.tools)) c = e.tools.filter((o) => typeof o === "string");
  else if (e.tools !== void 0)
    n("[sdkMessageAdapter] init frame tools is not an array \u2014 ignoring", {
      level: "error",
    });
  return {
    model: s,
    cwd: r,
    slashCommands: t,
    skills: a,
    plugins: d,
    mcpServers: l,
    tools: c,
    workerEpoch: Pst(e),
  };
}
function mHe(e) {
  if (!e) return;
  if (
    typeof e.condition !== "string" ||
    !Number.isSafeInteger(e.iterations) ||
    e.iterations < 0 ||
    !Number.isSafeInteger(e.set_at) ||
    e.set_at < 0 ||
    !Number.isSafeInteger(e.tokens_at_start) ||
    e.tokens_at_start < 0 ||
    (e.last_reason !== void 0 && typeof e.last_reason !== "string")
  )
    return;
  return {
    condition: io(e.condition, { maxCodeUnits: 4000 }),
    iterations: e.iterations,
    setAt: e.set_at,
    tokensAtStart: e.tokens_at_start,
    ...(e.last_reason !== void 0 && {
      lastReason: io(e.last_reason, { maxCodeUnits: 512 }),
    }),
  };
}
var U = {
    env: !0,
    settings: !0,
    clientdata: !0,
    experiment: !0,
    "model-default": !0,
    "unknown-model": !0,
    auto: !0,
  },
  R = new Set(Object.keys(U));
function VJt(e) {
  if (
    typeof e !== "object" ||
    e === null ||
    typeof e.enabled !== "boolean" ||
    typeof e.enforced !== "boolean" ||
    !Number.isSafeInteger(e.effective_window) ||
    e.effective_window <= 0 ||
    !Number.isSafeInteger(e.threshold) ||
    e.threshold <= 0 ||
    !R.has(e.source)
  ) {
    if (Ol().claim("remote_autocompact_frame_drop"))
      (n("[sdkMessageAdapter] Dropping malformed autocompact_state frame"),
        g("remote_autocompact_sync", "invalid_frame"));
    return;
  }
  return {
    enabled: e.enabled,
    effectiveWindow: e.effective_window,
    threshold: e.threshold,
    enforced: e.enforced,
    source: e.source,
  };
}
function G0t(e, s, r) {
  let t = VJt(s);
  if (t === void 0) {
    e((a) =>
      a.remoteAutocompactState === void 0
        ? a
        : { ...a, remoteAutocompactState: void 0 },
    );
    return;
  }
  let l = !1;
  if (
    (e((a) => {
      if (
        a.remoteAutocompactState !== void 0 &&
        iQt(a.remoteAutocompactState, t)
      )
        return a;
      return ((l = !0), { ...a, remoteAutocompactState: t });
    }),
    !l)
  )
    return;
  i("tengu_remote_autocompact_state_adopted", {
    via: r,
    enabled: t.enabled,
    enforced: t.enforced,
    source: u(t.source),
  });
}
function kZ(e, s) {
  if (!xZ(e)) return { type: "ignored" };
  switch (e.type) {
    case "control_request":
    case "control_response":
    case "control_cancel_request":
      return { type: "ignored" };
    case "assistant":
      return { type: "message", message: A(e) };
    case "user": {
      let t = e.message?.content;
      if (Array.isArray(t) && t.some((d) => d.type === "tool_result"))
        return {
          type: "message",
          message: Re({
            content: t,
            toolUseResult: e.tool_use_result,
            uuid: e.uuid,
            timestamp: e.timestamp,
          }),
        };
      if (e.parent_tool_use_id) return { type: "ignored" };
      if (e.isSynthetic && !wH(e.origin)) return { type: "ignored" };
      let a =
        t === iy ||
        (Array.isArray(t) &&
          t.some((d) => d.type === "text" && (d.text === iy || d.text === gc)));
      if (s?.convertUserTextMessages || a) {
        if (typeof t === "string" || Array.isArray(t))
          return {
            type: "message",
            message: Re({
              content: t,
              toolUseResult: e.tool_use_result,
              uuid: e.uuid,
              timestamp: e.timestamp,
            }),
          };
      }
      return { type: "ignored" };
    }
    case "stream_event":
      return { type: "stream_event", event: v(e) };
    case "result": {
      if (e.subtype === "success") return { type: "ignored" };
      let t = k(e);
      return t ? { type: "message", message: t } : { type: "ignored" };
    }
    case "system":
      if (e.subtype === "init") return { type: "message", message: w(e) };
      if (e.subtype === "status") {
        if (e.status === "requesting")
          return {
            type: "stream_event",
            event: { type: "stream_request_start" },
          };
        let t = h(e);
        return t ? { type: "message", message: t } : { type: "ignored" };
      }
      if (e.subtype === "compact_boundary") {
        let t = I(e);
        return t ? { type: "message", message: t } : { type: "ignored" };
      }
      if (e.subtype === "model_refusal_fallback")
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_refusal_fallback",
            content:
              e.direction === "retry" &&
              e.scope !== "local" &&
              typeof e.original_model === "string" &&
              typeof e.fallback_model === "string"
                ? sDe(
                    e.original_model,
                    e.fallback_model,
                    e.api_refusal_category ?? null,
                  )
                : io(typeof e.content === "string" ? e.content : "", {
                    drop: Xkt,
                    maxCodeUnits: cnt,
                  }),
            level: "warning",
            trigger: e.trigger,
            direction: e.direction,
            ...(e.scope !== void 0 && { scope: e.scope }),
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            requestId: e.request_id,
            apiRefusalCategory: e.api_refusal_category ?? null,
            apiRefusalExplanation: e.api_refusal_explanation ?? null,
            ...(e.retracted_message_uuids !== void 0 && {
              retractedMessageUuids: e.retracted_message_uuids,
            }),
            ...(e.refused_user_message_uuid !== void 0 && {
              refusedUserMessageUuid: e.refused_user_message_uuid,
            }),
            isMeta: !1,
            uuid: p(e.uuid),
            timestamp: new Date().toISOString(),
          },
        };
      if (e.subtype === "model_fallback") {
        if (!y(e)) return { type: "ignored" };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_fallback",
            content: pt(e.content),
            level: "warning",
            trigger: e.trigger,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            isMeta: !1,
            uuid: p(e.uuid),
            timestamp: new Date().toISOString(),
          },
        };
      }
      if (e.subtype === "model_consent_fallback") {
        if (!y(e)) return { type: "ignored" };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_consent_fallback",
            content: pt(e.content),
            level: "warning",
            choice: e.choice,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            persistedAsDefault: e.persisted_as_default,
            isMeta: !1,
            uuid: p(e.uuid),
            timestamp: new Date().toISOString(),
          },
        };
      }
      if (e.subtype === "informational") {
        if (!y(e)) return { type: "ignored" };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: pt(e.content),
            level: e.level,
            isMeta: !1,
            uuid: p(e.uuid),
            timestamp: new Date().toISOString(),
            ...(e.tool_use_id && { toolUseID: e.tool_use_id }),
            ...(e.prevent_continuation && {
              preventContinuation: e.prevent_continuation,
            }),
          },
        };
      }
      if (e.subtype === "tool_host_result") {
        let t = Array.isArray(e.lines)
            ? e.lines
                .filter((c) => typeof c === "string")
                .slice(0, 32)
                .map((c) => io(c, { maxCodeUnits: 2100 }))
                .filter((c) => c.trim() !== "")
            : [],
          l =
            typeof e.label === "string"
              ? io(e.label, { maxCodeUnits: 320 })
              : void 0,
          a = e.unverified === !0 && l !== void 0 && l.trim() !== "";
        if (typeof e.tool_use_id !== "string" || (t.length === 0 && !a))
          return { type: "ignored" };
        let d = p(e.uuid);
        return {
          type: "message",
          message: pn(
            {
              type: "tool_host_result_lines",
              toolUseID: e.tool_use_id,
              host: IT(typeof e.host?.name === "string" ? e.host.name : ""),
              lines: t,
              ...(l !== void 0 && { label: l }),
              ...(a && { unverified: !0 }),
            },
            { now: () => new Date().toISOString(), uuid: () => d },
          ),
        };
      }
      if (e.subtype === "permission_denied") return { type: "ignored" };
      if (e.subtype === "local_command_output") {
        if (!y(e)) return { type: "ignored" };
        let t = p(e.uuid);
        return {
          type: "message",
          message: Vc({ content: pt(e.content), uuid: () => t }),
        };
      }
      return (
        n(`[sdkMessageAdapter] Ignoring system message subtype: ${e.subtype}`),
        { type: "ignored" }
      );
    case "tool_progress":
      if (
        e.heartbeat === !0 ||
        e.subagent_retry !== void 0 ||
        e.tool_name === mt
      )
        return (
          n(
            "[sdkMessageAdapter] Ignoring heartbeat/subagent-retry tool_progress frame",
          ),
          { type: "ignored" }
        );
      let r = D(e);
      return r ? { type: "message", message: r } : { type: "ignored" };
    case "auth_status":
      return (
        n("[sdkMessageAdapter] Ignoring auth_status message"),
        { type: "ignored" }
      );
    case "tool_use_summary":
      return (
        n("[sdkMessageAdapter] Ignoring tool_use_summary message"),
        { type: "ignored" }
      );
    case "rate_limit_event":
      return (
        n("[sdkMessageAdapter] Ignoring rate_limit_event message"),
        { type: "ignored" }
      );
    case "active_goal":
      return { type: "ignored" };
    case "autocompact_state":
      return { type: "ignored" };
    case "env_manager_log": {
      let t = typeof e.data?.content === "string" ? e.data.content : null;
      if (t === null)
        return (
          n(
            "[sdkMessageAdapter] env_manager_log without data.content \u2014 orchestrator wire change?",
            { level: "warn" },
          ),
          { type: "env_log", message: "" }
        );
      let l = t.split(/\r\n?|\n/),
        a = "";
      for (let d = l.length - 1; d >= 0; d--)
        if (((a = io(l[d], { maxCodeUnits: 512 })), a !== "")) break;
      return { type: "env_log", message: a };
    }
    case "conversation_reset": {
      let t = e.new_conversation_id;
      if (typeof t !== "string" || t === "")
        return (
          n(
            "[sdkMessageAdapter] Dropping conversation_reset frame without a string new_conversation_id",
            { level: "error" },
          ),
          { type: "ignored" }
        );
      return { type: "conversation_reset", newConversationId: t };
    }
    default:
      return (
        n(`[sdkMessageAdapter] Unknown message type: ${e.type}`),
        { type: "ignored" }
      );
  }
}
function q0t(e) {
  return e.type === "result";
}
function z0t() {
  return {
    retracted: new Set(),
    inProgressToolUses: new Map(),
    evictedToolUses: new Set(),
    nestedUuidAliases: new Map(),
  };
}
function V0t(e, s, r) {
  let t = r.filter((l) => l !== s);
  if (t.length > 0) e.nestedUuidAliases.set(s, t);
}
function jae(e) {
  if (typeof e !== "object" || e === null) return null;
  let s = e,
    r = typeof s.uuid === "string" ? s.uuid : null;
  if (s.type === "system" && s.subtype === "model_refusal_fallback") {
    let t = _(s.retracted_message_uuids, r);
    return t ? { uuids: t, source: "retraction_banner" } : null;
  }
  if (s.type === "assistant") {
    let t = _(s.supersedes, r);
    return t ? { uuids: t, source: "supersedes" } : null;
  }
  return null;
}
function _(e, s) {
  if (!Array.isArray(e)) return null;
  let r = e.filter((t) => typeof t === "string" && t !== s);
  return r.length > 0 ? r : null;
}
function T(e, s) {
  if (s.size === 0) return e;
  let r = e.filter((t) => !s.has(t.uuid));
  return r.length === e.length ? e : r;
}
function K0t(e, s, r) {
  for (let t of r) e.inProgressToolUses.set(t, s);
}
function ist(e, s) {
  for (let r of s) e.inProgressToolUses.delete(r);
}
function ast(e) {
  let {
      index: s,
      signal: r,
      surface: t,
      setMessages: l,
      setInProgressToolUseIDs: a,
    } = e,
    d = G(r.uuids, (o) => !s.retracted.has(o));
  for (let o of r.uuids) {
    s.retracted.add(o);
    for (let f of s.nestedUuidAliases.get(o) ?? []) s.retracted.add(f);
  }
  let c = [...s.inProgressToolUses]
    .filter(([, o]) => s.retracted.has(o))
    .map(([o]) => o);
  ist(s, c);
  for (let o of c) s.evictedToolUses.add(o);
  if (c.length > 0 && a) a({ action: "remove", ids: c });
  (l((o) => T(o, s.retracted)),
    i("tengu_refusal_retraction_evicted", {
      surface: u(t),
      source: u(r.source),
      uuid_count: r.uuids.length,
      newly_retracted_count: d,
      tool_use_cleared_count: c.length,
    }));
}
function X0t(e, s, r, t) {
  if (t !== null && e.retracted.has(t)) return 0;
  let l = G(s, (a) => e.evictedToolUses.has(a));
  if (l > 0)
    i("tengu_refusal_retraction_orphan_tool_result", {
      surface: u(r),
      count: l,
    });
  return l;
}
function tFn(e) {
  let {
      index: s,
      events: r,
      surface: t,
      setMessages: l,
      setInProgressToolUseIDs: a,
    } = e,
    d = 0,
    c = 0,
    o = 0;
  for (let f of r) {
    if (f.source !== "worker") {
      if (jae(f.payload))
        if (f.source === void 0) o++;
        else c++;
      continue;
    }
    let m = jae(f.payload);
    if (m)
      (d++,
        ast({
          index: s,
          signal: m,
          surface: t,
          setMessages: l,
          setInProgressToolUseIDs: a,
        }));
  }
  if (c > 0)
    i("tengu_refusal_retraction_unauthenticated_signal", {
      surface: u(t),
      reason: S("source_mismatch"),
      count: c,
    });
  if (o > 0)
    i("tengu_refusal_retraction_unauthenticated_signal", {
      surface: u(t),
      reason: S("source_missing"),
      count: o,
    });
  return d;
}
function T6e(e, s, r) {
  if (!e.retracted.has(s)) return !1;
  return (i("tengu_refusal_retraction_late_drop", { surface: u(r) }), !0);
}
export {
  eFn,
  w6e,
  mHe,
  VJt,
  G0t,
  kZ,
  q0t,
  z0t,
  V0t,
  jae,
  K0t,
  ist,
  ast,
  X0t,
  tFn,
  T6e,
};

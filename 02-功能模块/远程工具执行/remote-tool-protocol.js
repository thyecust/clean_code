// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Si } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { DEFAULTS_SLOT_MARKER, mapKeys } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { MACHINE_NAME_PATTERN, isReservedMachineName } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { BASH_TOOL_NAME, EDIT_TOOL_NAME, WRITE_TOOL_NAME } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { s, T, O, se, v, c, $e, Ko, fe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var CURRENT_PROTOCOL_VERSION = 1,
  SUPPORTED_PROTOCOL_VERSIONS = [1],
  A = 1,
  S = 2147483647,
  DEFAULT_REMOTE_TOOL_LIMITS = {
    progress_interval_ms: 20000,
    progress_misses: 2,
    max_ask_ms: 120000,
    reconcile_ms: 30000,
  },
  REMOTE_TOOL_LIMIT_BOUNDS = {
    caller_sessions_max: { min: 1, max: 256 },
    pending_asks_max: { min: 1, max: 64 },
    progress_interval_ms: { min: 1000, max: 120000 },
    progress_misses: { min: 1, max: 10 },
    reconcile_ms: { min: 5000, max: 120000 },
    max_queue_ms: { min: 0, max: 2147483647 },
    queue_depth: { min: 0, max: 256 },
    max_ask_ms: { min: 1e4, max: 2147483647 },
  };
var Z = /^[a-z][a-z0-9_]{0,47}$/,
  J = 32;
var INSTANCE_ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/,
  D = /^[A-Za-z0-9][A-Za-z0-9._[\]-]{0,63}$/,
  ee = [
    "default",
    "acceptEdits",
    "plan",
    "auto",
    "bypassPermissions",
    "dontAsk",
  ];
var ne = [
    "invalid_request",
    "unsupported_protocol",
    "not_served",
    "no_session",
    "unbound",
    "session_mismatch",
    "too_many_in_flight",
    "refused_field",
    "sandbox_unavailable",
    "unknown_call",
    "no_approval",
    "stale",
    "queue_full",
    "rate_limited",
    "duplicate_call",
    "withdrawn",
    "result_lost",
    "unrecognized",
  ],
  I = [
    "evicted",
    "tool_withdrawn",
    "host_unbound",
    "host_stopped",
    "stale_answer",
    "record_evicted",
    "replaced_by_retry",
    "unrecognized",
  ],
  Ae = ["no_answer", "host_withdrawn", "superseded"],
  ve = [...I, ...Ae];
function normalizeWithdrawalReason(e) {
  return (
    (e === "displaced"
      ? "superseded"
      : e === "withdrawn"
        ? "host_withdrawn"
        : void 0) ??
    ve.find((t) => t === e) ??
    "unrecognized"
  );
}
var te = ["in_flight", "queue", "sessions", "unrecognized"],
  re = [
    "tool_error",
    "internal_error",
    "cancelled",
    "timed_out",
    "unrecognized",
  ],
  ae = [
    "ran",
    "denied_by_rule",
    "denied_by_user",
    "ask_refused_no_surface",
    "hook_blocked",
    "validation_failed",
    "duplicate_call",
    "asked_in_session",
    "approved_by_session",
    "denied_by_session",
    "ask_expired",
    "unrecognized",
  ];
function isSuccessfulDisposition(e) {
  switch (e) {
    case void 0:
    case "ran":
    case "approved_by_session":
      return !0;
    case "duplicate_call":
    case "hook_blocked":
    case "denied_by_rule":
    case "denied_by_user":
    case "ask_refused_no_surface":
    case "validation_failed":
    case "asked_in_session":
    case "denied_by_session":
    case "ask_expired":
    case "unrecognized":
      return !1;
  }
}
var DISPOSITION_TABLE = {
  ran: {
    kind: "completed",
    wire: { completed: ["ran"] },
    bucket: "ok",
    sessionDenial: !1,
    phase: "call",
  },
  approved_by_session: {
    kind: "completed",
    wire: { completed: ["approved_by_session"] },
    bucket: "ok",
    sessionDenial: !1,
    phase: "call",
  },
  denied_by_rule: {
    kind: "completed",
    wire: { completed: ["denied_by_rule"] },
    bucket: "sad",
    denialKind: "permission-rule",
    sessionDenial: !1,
    phase: "call",
  },
  hook_blocked: {
    kind: "completed",
    wire: { completed: ["hook_blocked"] },
    bucket: "sad",
    denialKind: "permission-rule",
    sessionDenial: !1,
    phase: "call",
  },
  denied_by_user: {
    kind: "completed",
    wire: { completed: ["denied_by_user"] },
    bucket: "sad",
    denialKind: "user-rejected",
    sessionDenial: !1,
    phase: "call",
  },
  ask_refused_no_surface: {
    kind: "completed",
    wire: { completed: ["ask_refused_no_surface"] },
    bucket: "sad",
    denialKind: "user-rejected",
    sessionDenial: !1,
    phase: "call",
  },
  denied_by_session: {
    kind: "completed",
    wire: { completed: ["denied_by_session"] },
    bucket: "sad",
    denialKind: "user-rejected",
    sessionDenial: !1,
    phase: "call",
  },
  ask_expired: {
    kind: "completed",
    wire: { completed: ["ask_expired"] },
    bucket: "sad",
    sessionDenial: !0,
    phase: "call",
  },
  validation_failed: {
    kind: "completed",
    wire: { completed: ["validation_failed"] },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call",
  },
  duplicate_call: {
    kind: "completed",
    wire: { completed: ["duplicate_call"] },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call",
  },
  asked_in_session: {
    kind: "completed",
    wire: { completed: ["asked_in_session"] },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call",
  },
  unknown_host: {
    kind: "route",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route",
  },
  host_offline: {
    kind: "route",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route",
  },
  gate_off: {
    kind: "route",
    bucket: "none",
    sessionDenial: !1,
    phase: "route",
  },
  incompatible: {
    kind: "route",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route",
  },
  invalid_input: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route",
  },
  not_served: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route",
  },
  denied_by_session_rule: {
    kind: "error",
    bucket: "sad",
    denialKind: "permission-rule",
    sessionDenial: !0,
    phase: "route",
  },
  approval_no_longer_covers: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !0,
    phase: "route",
  },
  request_too_large: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route",
  },
  sync_failed: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route",
  },
  stalled: { kind: "error", bucket: "bad", sessionDenial: !1, phase: "route" },
  stalled_unsent: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route",
  },
  unreachable: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route",
  },
  cancelled: {
    kind: "error",
    bucket: "none",
    denialKind: "cancelled",
    sessionDenial: !1,
    phase: "route",
  },
  refused_by_host: {
    kind: "error",
    wire: {
      refused: [
        "invalid_request",
        "unsupported_protocol",
        "not_served",
        "no_session",
        "unbound",
        "session_mismatch",
        "too_many_in_flight",
        "queue_full",
        "rate_limited",
        "refused_field",
        "sandbox_unavailable",
        "unknown_call",
        "duplicate_call",
        "result_lost",
      ],
    },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call",
  },
  stale: {
    kind: "error",
    wire: { refused: ["stale"] },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call",
  },
  approval_unverified: {
    kind: "error",
    wire: { refused: ["no_approval"] },
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  withdrawn: {
    kind: "error",
    wire: { refused: ["withdrawn"] },
    bucket: "sad",
    sessionDenial: !0,
    phase: "call",
  },
  no_answer: { kind: "error", bucket: "sad", sessionDenial: !0, phase: "call" },
  failed_on_host: {
    kind: "error",
    wire: {
      failed: ["tool_error", "internal_error", "cancelled", "timed_out"],
    },
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  timed_out: { kind: "error", bucket: "bad", sessionDenial: !1, phase: "call" },
  dropped: { kind: "error", bucket: "bad", sessionDenial: !1, phase: "call" },
  host_gone: { kind: "error", bucket: "bad", sessionDenial: !1, phase: "call" },
  host_withdrawn: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "call",
  },
  host_unresponsive: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  still_running: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  host_restarted: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  not_received: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  approval_not_received: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  transport_error: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
  interrupted: {
    kind: "error",
    bucket: "none",
    denialKind: "interrupted",
    sessionDenial: !1,
    phase: "call",
  },
  rejected_in_session: {
    kind: "error",
    bucket: "none",
    denialKind: "user-rejected",
    sessionDenial: !0,
    phase: "call",
  },
  prompt_failed: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call",
  },
};
function isUnverifiedRefusal(e) {
  return e.kind === "dropped" && e.why === "unverified_refusal";
}
var REMOTE_TOOL_CALL_FIELD_NAME = "__remote_tool_call",
  CRITERIA_VERSION = "2.1",
  REMOTE_TOOL_EXECUTION_META_KEY = "anthropic/remoteToolExecution",
  REMOTE_TOOL_CALL_META_KEY = "claudecode/remoteToolCall",
  TOOL_USE_ID_META_KEY = "claudecode/toolUseId",
  Me = 8192,
  we = 6,
  MAX_MESSAGE_LENGTH = 8192,
  ue = 32,
  ce = 4,
  Ce = 1024,
  SENDER_BELOW_FLOOR_FLAG = "sender_below_floor";
function isSenderBelowFloor(e) {
  return G(e) && e[SENDER_BELOW_FLOOR_FLAG] === !0;
}
var MAX_NOTES_LENGTH = 300,
  j = 16,
  MAX_RULE_LENGTH = 200,
  MAX_RESULT_BYTES = 4128768,
  qn = MAX_RESULT_BYTES - 65536,
  ALLOWED_TOOL_OUTPUT_FIELDS = new Map([
    [
      BASH_TOOL_NAME,
      new Set([
        "stdout",
        "stderr",
        "interrupted",
        "timedOutAfterMs",
        "noOutputExpected",
      ]),
    ],
    [EDIT_TOOL_NAME, new Set(["structuredPatch"])],
    [WRITE_TOOL_NAME, new Set(["type", "structuredPatch"])],
  ]),
  pe = 32,
  me = 16,
  _e = 256;
function sanitizeText(e, o = MAX_MESSAGE_LENGTH) {
  let t = e.replace(/[\p{Cc}\p{Cf}]/gu, (r) =>
    r ===
      `
` || r === "\t"
      ? r
      : "",
  );
  return t.length <= o ? t : `${truncateToCodeUnits(t, o - 1)}\u2026`;
}
var g = 64,
  ye = 1024,
  K = 128;
function Pe(e) {
  return { name: sanitizeText(e.name, g), working_dir: sanitizeText(e.working_dir, ye) };
}
var B = /^[A-Za-z0-9][A-Za-z0-9_.-]{0,255}$/,
  f = createLazyValue(() => s().regex(B)),
  L = createLazyValue(() =>
    s()
      .regex(INSTANCE_ID_PATTERN)
      .optional()
      .catch(void 0),
  ),
  Ne = createLazyValue(() =>
    c({
      v: k(CURRENT_PROTOCOL_VERSION),
      op: k("call").optional(),
      call_id: f(),
      caller: c({
        kind: X(["ccr_container", "local_process"]),
        permission_mode: X(ee).optional(),
        is_bypass_available: O().optional(),
        instance_id: L(),
        model: s()
          .regex(D)
          .optional()
          .catch(void 0),
        conversation_id: L(),
        compaction_id: L(),
      }).transform(N),
      expires_in_ms: T().int().positive(),
      approval: c({
        ask_id: w(),
        decision: X(["allow", "deny"]),
        updated_input: fe(s(), se()).optional(),
        feedback: s().max(MAX_MESSAGE_LENGTH).optional(),
        permission_updates: v(se()).max(pe).optional(),
        attested: O().optional(),
      }).optional(),
    }),
  ),
  w = createLazyValue(() => s().regex(B)),
  C = createLazyValue(() => s().regex(B)),
  P = 8640000000000000,
  H = () => ({
    replayed: O().optional(),
    served_at: T().int().nonnegative().max(P).optional(),
  }),
  De = createLazyValue(() => c({ v: k(CURRENT_PROTOCOL_VERSION), op: k("outcome_of"), call_id: f() }));
function R(e = 1) {
  return se()
    .transform((o) =>
      typeof o === "number" && Number.isInteger(o) && o >= e && o <= S
        ? o
        : void 0,
    )
    .optional();
}
var Ie = createLazyValue(() =>
  c({
    max_call_ms: T().int().positive(),
    max_command_ms: R(),
    max_request_bytes: T().int().positive(),
    max_in_flight: T().int().positive(),
    caller_sessions_max: R(),
    pending_asks_max: R(),
    progress_interval_ms: R(),
    progress_misses: R(),
    reconcile_ms: R(),
    max_queue_ms: R(REMOTE_TOOL_LIMIT_BOUNDS.max_queue_ms.min),
    queue_depth: R(REMOTE_TOOL_LIMIT_BOUNDS.queue_depth.min),
    max_ask_ms: R(),
  }).transform(N),
);
function N(e) {
  let o = { ...e };
  for (let t of Object.keys(o)) if (o[t] === void 0) delete o[t];
  return o;
}
var Le = createLazyValue(() =>
    s()
      .regex(MACHINE_NAME_PATTERN)
      .refine((e) => !isReservedMachineName(e)),
  ),
  z = createLazyValue(() => c({ name: s().min(1).max(g), working_dir: s().max(ye) })),
  ge = createLazyValue(() =>
    c({
      name: Le(),
      kind: X(["personal_machine", "sandbox"]),
      platform: s().max(64),
      os_version: s().max(64).optional(),
      arch: s().max(64).optional(),
      shell: s().max(64).optional(),
      home_dir: s().max(1024).optional(),
      working_dir: s().max(1024),
      project_sync: X(["two_way", "upload_only", "off", "unknown"]).optional(),
      limits: Ie(),
      claude_code_version: s().max(64).optional(),
      notes: s().max(MAX_NOTES_LENGTH).optional(),
      epoch: C().optional(),
      capabilities: se()
        .transform((e) =>
          Array.isArray(e)
            ? dedupe(e.filter((o) => typeof o === "string" && Z.test(o))).slice(0, J)
            : void 0,
        )
        .optional(),
    }),
  ),
  be = createLazyValue(() => ge().transform(N)),
  He = createLazyValue(() =>
    c({
      v: k(A),
      tool: s().min(1).max(128),
      refused_input_fields: v(s().max(64)).max(32),
      target: be(),
      protocol_versions: se()
        .transform((e) => (e === void 0 ? void 0 : V(e)))
        .optional(),
    }),
  ),
  M = createLazyValue(() => v(s().min(1).max(MAX_RULE_LENGTH)).max(j).optional()),
  Ue = createLazyValue(() =>
    c({ allow: M(), soft_deny: M(), hard_deny: M(), environment: M() }),
  ),
  je = createLazyValue(() =>
    c({
      mode: k("form").optional(),
      message: s().max(MAX_MESSAGE_LENGTH),
      requestedSchema: c({
        type: k("object"),
        properties: c({
          decision: c({
            type: k("string"),
            enum: v(s().max(64)).max(8),
            description: s().max(256).optional(),
          }),
          feedback: c({
            type: k("string"),
            description: s().max(256).optional(),
          }),
        }),
        required: v(s().max(64)).max(8).optional(),
      }),
      _meta: c({
        [REMOTE_TOOL_EXECUTION_META_KEY]: c({
          ask_id: w(),
          call_id: f().optional(),
          input_fingerprint: s().regex(/^[a-f0-9]{64}$/),
          classifier_eligible: O().optional(),
          prior_answer_ok: O().optional(),
        }),
      }),
    }),
  ),
  Ee = ["image/jpeg", "image/png", "image/gif", "image/webp"],
  Fe = 4,
  PDF_READ_NOTE_PREFIX = "(a PDF read on ",
  Ke = ["application/pdf"],
  Be = createLazyValue(() =>
    c({
      at: T().int().nonnegative(),
      media_type: X(Ke),
      data: s().regex(/^[A-Za-z0-9+/]+={0,2}$/),
    }),
  ),
  Xe = createLazyValue(() =>
    se().transform((e) =>
      Array.isArray(e)
        ? e.slice(0, Fe).flatMap((o) => {
            let t = Be().safeParse(o);
            return t.success ? [t.data] : [];
          })
        : [],
    ),
  ),
  ie = createLazyValue(() =>
    $e([
      s(),
      v(
        $e([
          c({ type: k("text"), text: s() }),
          c({
            type: k("image"),
            source: c({ type: k("base64"), media_type: X(Ee), data: s() }),
          }),
        ]),
      ),
    ]),
  );
function Re(e) {
  return se()
    .transform((o) =>
      Array.isArray(o)
        ? o.filter((t) => typeof t === "string").slice(0, e)
        : void 0,
    )
    .optional();
}
var U = createLazyValue(() => Re(ue)),
  Ve = createLazyValue(() => Re(ce));
function le(e) {
  return s()
    .max(64)
    .transform((o) => (e.includes(o) ? o : "unrecognized"));
}
function q(e, o = "dropped") {
  return se()
    .transform((t) =>
      typeof t === "string"
        ? e.includes(t)
          ? t
          : "unrecognized"
        : o === "unrecognized" && t !== void 0
          ? "unrecognized"
          : void 0,
    )
    .optional();
}
var Ge = createLazyValue(() =>
  Ko("outcome", [
    c({
      v: k(CURRENT_PROTOCOL_VERSION),
      outcome: k("completed"),
      call_id: f().optional(),
      target: z(),
      is_error: O(),
      content: ie(),
      documents: Xe().optional(),
      output: se().optional(),
      truncated: O().optional(),
      disposition: q(ae, "unrecognized"),
      notes: U(),
      ...H(),
    }),
    c({
      v: k(CURRENT_PROTOCOL_VERSION),
      outcome: k("refused"),
      call_id: f().optional(),
      target: z(),
      code: le(ne),
      reason: q(I),
      limit: q(te),
      message: s().max(MAX_MESSAGE_LENGTH),
      host_epoch: C().optional(),
      notes: U(),
      ...H(),
    }),
    c({
      v: k(CURRENT_PROTOCOL_VERSION),
      outcome: k("failed"),
      call_id: f().optional(),
      target: z(),
      code: le(re),
      message: s().max(MAX_MESSAGE_LENGTH),
      content: ie().optional(),
      output: se().optional(),
      truncated: O().optional(),
      notes: U(),
      ...H(),
    }),
    c({
      v: k(CURRENT_PROTOCOL_VERSION),
      outcome: k("in_progress"),
      call_id: f().optional(),
      target: z(),
      state: X(["admitting", "running", "awaiting_approval"]),
      since_ms: T().int().nonnegative().max(P),
      host_epoch: C().optional(),
    }),
    c({
      v: k(CURRENT_PROTOCOL_VERSION),
      outcome: k("needs_approval"),
      call_id: f().optional(),
      target: z(),
      ask_id: w(),
      tool: s().min(1).max(K),
      input: fe(s(), se()),
      message: s().max(MAX_MESSAGE_LENGTH),
      decision_reason: s().max(MAX_MESSAGE_LENGTH).optional(),
      suggestions: v(s().max(_e)).max(me).optional(),
      classifier_eligible: O().optional(),
      prior_answer_ok: O().optional(),
      auto_mode: Ue()
        .optional()
        .catch(() => {
          logForDebugging(
            "[remote-tools] dropped an unreadable auto_mode block from a needs_approval answer; the ask is judged without it",
          );
          return;
        }),
      elicitation: je()
        .optional()
        .catch(() => {
          logForDebugging(
            "[remote-tools] dropped an unreadable elicitation block from a needs_approval answer; its own fields stand",
          );
          return;
        }),
      notes: Ve(),
    }),
    c({
      v: k(CURRENT_PROTOCOL_VERSION),
      outcome: k("acknowledged"),
      call_id: f().optional(),
      target: z(),
      ask_id: w(),
    }),
  ]),
);
function buildCallEnvelope({
  callId: e,
  expiresInMs: o,
  permissionMode: t,
  isBypassAvailable: r,
  callerInstanceId: i,
  model: d,
  conversationId: _,
  compactionId: p,
  approval: u,
}) {
  return {
    v: CURRENT_PROTOCOL_VERSION,
    call_id: e,
    caller: {
      kind: a.CLAUDE_CODE_REMOTE ? "ccr_container" : "local_process",
      ...(t !== void 0 && { permission_mode: t }),
      ...(r !== void 0 && { is_bypass_available: r }),
      ...(i !== void 0 && { instance_id: i }),
      ...Qe(d),
      ...(_ !== void 0 && { conversation_id: _ }),
      ...(p !== void 0 && { compaction_id: p }),
    },
    expires_in_ms: normalizeDurationMs(o),
    ...(u !== void 0 && { approval: Ye(u) }),
  };
}
function Qe(e) {
  if (e === void 0) return {};
  if (D.test(e)) return { model: e };
  return (
    logForDebugging(
      `remote tools: this session's model id is not one the call envelope can carry; the serving machine will not key its model safeguards on it (length ${e.length})`,
    ),
    {}
  );
}
function Ye(e) {
  let { attested: o, feedback: t, permission_updates: r, ...i } = e;
  return {
    ...i,
    ...(t !== void 0 && { feedback: sanitizeText(t) }),
    ...(r !== void 0 && { permission_updates: r.slice(0, pe) }),
  };
}
function normalizePermissionMode(e) {
  switch (e) {
    case "bubble":
      return "default";
    case "bypassPermissions":
      return "auto";
    default:
      return e;
  }
}
function We(e) {
  if (x(e)?.op !== "outcome_of") {
    let t = en(e);
    return t.ok ? { ok: !0, kind: "call", value: t.value } : t;
  }
  if (Oe(e)) return { ok: !1, why: "unsupported_protocol" };
  let o = De().safeParse(e);
  return o.success
    ? {
        ok: !0,
        kind: "outcome_query",
        value: { v: o.data.v, op: "outcome_of", call_id: o.data.call_id },
      }
    : { ok: !1, why: "malformed" };
}
function buildOutcomeQuery(e) {
  return { v: CURRENT_PROTOCOL_VERSION, op: "outcome_of", call_id: e };
}
var Ze = 1;
function resolveProtocolCompatibility(e) {
  if (e === void 0) return { kind: "compatible", version: Ze };
  let o = e.filter((t) => SUPPORTED_PROTOCOL_VERSIONS.includes(t));
  return o.length > 0
    ? { kind: "compatible", version: Math.max(...o) }
    : { kind: "incompatible", announced: [...e] };
}
function buildElicitationResult(e) {
  let o =
    "approval" in e && e.approval !== void 0
      ? { ...e, elicit_result: Je(e.approval) }
      : { ...e };
  return isWithinDepth(o, we) && jsonByteLength(o) <= Me ? o : void 0;
}
var WITHDRAWN_FEEDBACK = "withdrawn";
function Je(e) {
  let o = { [REMOTE_TOOL_EXECUTION_META_KEY]: { ask_id: e.ask_id } };
  return e.decision === "deny" && e.feedback === WITHDRAWN_FEEDBACK
    ? { action: "cancel", _meta: o }
    : {
        action: "accept",
        content: {
          decision: e.decision,
          ...(e.feedback !== void 0 && { feedback: e.feedback }),
        },
        _meta: o,
      };
}
function isWithinDepth(e, o) {
  let t = Array.isArray(e) ? e : G(e) ? Object.values(e) : void 0;
  if (t === void 0) return !0;
  return o >= 1 && t.every((r) => isWithinDepth(r, o - 1));
}
function en(e) {
  if (e === void 0 || e === null) return { ok: !1, why: "missing" };
  if (Oe(e)) return { ok: !1, why: "unsupported_protocol" };
  let o = Ne().safeParse(e);
  if (!o.success) return { ok: !1, why: "malformed" };
  let { approval: t } = o.data;
  return {
    ok: !0,
    value:
      t?.feedback === void 0
        ? o.data
        : { ...o.data, approval: { ...t, feedback: sanitizeText(t.feedback) } },
  };
}
function nn(e) {
  let o = on(e);
  return o === void 0 ? {} : { auto_mode: o };
}
function on(e) {
  if (e === void 0) return;
  let o = (_, p) => {
      let u = (_ ?? [])
          .flatMap((y) => y.split(/\r?\n/))
          .map((y) => sanitizeText(y.replace(/\s+/g, " "), MAX_RULE_LENGTH).trim())
          .filter((y) => y.length > 0 && y !== DEFAULTS_SLOT_MARKER),
        E = p === "last" ? u.slice(-j) : u.slice(0, j);
      return E.length > 0 ? E : void 0;
    },
    t = o(e.allow, "first"),
    r = o(e.soft_deny, "last"),
    i = o(e.hard_deny, "last"),
    d = o(e.environment, "first");
  return [t, r, i, d].some((_) => _ !== void 0)
    ? {
        ...(t && { allow: t }),
        ...(r && { soft_deny: r }),
        ...(i && { hard_deny: i }),
        ...(d && { environment: d }),
      }
    : void 0;
}
function parseHostEpoch(e) {
  let o = C().safeParse(e);
  return o.success ? o.data : void 0;
}
function parseMachineDescription(e) {
  let o = be().safeParse(e);
  return o.success ? l(o.data) : void 0;
}
function V(e) {
  return Array.isArray(e) &&
    e.length <= 64 &&
    e.every((o) => Number.isInteger(o))
    ? e
    : [];
}
function c2n(e) {
  if (e === void 0) return;
  let o = x(e);
  if (o === void 0) return [];
  if (o.v === A) return;
  return "protocol_versions" in o ? V(o.protocol_versions) : [];
}
function u2n(e) {
  let o = x(e);
  return o !== void 0 && o.v === A && "protocol_versions" in o
    ? V(o.protocol_versions)
    : void 0;
}
function parseToolDescriptor(e) {
  let o = He().safeParse(e);
  return o.success ? l(o.data) : void 0;
}
function l(e) {
  if (typeof e === "string") return e.replace(/[\p{Cc}\p{Cf}]/gu, "");
  if (Array.isArray(e)) return e.map(l);
  if (e !== null && typeof e === "object")
    return Si(
      mapKeys(e, (o, t) => l(t)),
      l,
    );
  return e;
}
function tn(e) {
  let o = Ge().safeParse(e);
  return o.success ? Te(o.data) : void 0;
}
var rn = 16,
  sn = 256,
  ke = 2048,
  xe = 4096,
  F = 256,
  an = 65536,
  ln = 16,
  he = createLazyValue(() => fe(s(), se()).refine((e) => isWithinDepth(e, ln) && jsonByteLength(e) <= an)),
  dn = createLazyValue(() =>
    c({
      name: s().min(1).max(K),
      refused_input_fields: v(s().max(64)).max(32),
      protocol_versions: v(T().int().positive()).max(16),
      description: s().max(ke).optional(),
      input_schema: he().optional(),
    }),
  ),
  un = createLazyValue(() =>
    c({
      name: s().min(1).max(F),
      local_name: s().min(1).max(F),
      description: s().max(xe).optional(),
      input_schema: he(),
    }),
  ),
  cn = createLazyValue(() => ge().required({ epoch: !0 }).transform(N)),
  pn = createLazyValue(() =>
    c({
      host: cn(),
      tools: v(se()).max(rn),
      passthrough: v(se()).max(sn),
      plumbing: v(s().min(1).max(64)).max(8),
    }),
  );
function parseToolAnnouncement(e) {
  let o = pn().safeParse(e);
  if (!o.success) return;
  let t = [],
    r = new Set(),
    i = (p, u, E) =>
      u.flatMap((y, ze) => {
        let h = E(y),
          Q = h?.name ?? x(y)?.name,
          W = typeof Q === "string" ? sanitizeText(l(Q), g) : "",
          Se = W !== "" ? W : `${p}[${ze}]`;
        if (h === void 0 || h.name === "" || r.has(h.name))
          return (t.push(Se), []);
        return (r.add(h.name), [h]);
      }),
    d = i("tools", o.data.tools, (p) => {
      let u = dn().safeParse(p);
      return u.success ? mn(u.data) : void 0;
    }),
    _ = i("passthrough", o.data.passthrough, (p) => {
      let u = un().safeParse(p);
      return u.success ? _n(u.data) : void 0;
    });
  return {
    host: l(o.data.host),
    tools: d,
    passthrough: _,
    plumbing: dedupe(l(o.data.plumbing)).filter((p) => p !== ""),
    ignored: t,
  };
}
function mn(e) {
  return {
    name: l(e.name),
    refused_input_fields: l(e.refused_input_fields),
    protocol_versions: e.protocol_versions,
    ...(e.description !== void 0 && { description: sanitizeText(e.description, ke) }),
    ...(e.input_schema !== void 0 && { input_schema: l(e.input_schema) }),
  };
}
function _n(e) {
  return {
    name: l(e.name),
    local_name: l(e.local_name),
    ...(e.description !== void 0 && { description: sanitizeText(e.description, xe) }),
    input_schema: l(e.input_schema),
  };
}
var yn = createLazyValue(() =>
  c({
    instance_id: s().regex(INSTANCE_ID_PATTERN),
    host: s().max(g),
    name: s().min(1).max(F),
    input: fe(s(), se()),
    envelope: se().optional(),
    tool_use_id: f(),
    issued_at: T().int().nonnegative().max(P),
    deadline_ms: T().int().positive().max(S),
  }),
);
function parseRemoteToolCallRequest(e) {
  let o = yn().safeParse(e);
  if (!o.success) return;
  let { envelope: t, input: r, host: i, name: d, ..._ } = o.data,
    { [REMOTE_TOOL_CALL_FIELD_NAME]: p, ...u } = r,
    E = l(d);
  if (E === "") return;
  let y = We(t);
  return {
    ..._,
    host: sanitizeText(i, g),
    name: E,
    input: u,
    request:
      y.ok && y.value.call_id !== _.tool_use_id
        ? { ok: !1, why: "malformed" }
        : y,
  };
}
function buildRemoteToolCallRequest({
  instanceId: e,
  host: o,
  name: t,
  input: r,
  envelope: i,
  toolUseId: d,
  issuedAt: _,
  deadlineMs: p,
}) {
  let { [REMOTE_TOOL_CALL_FIELD_NAME]: u, ...E } = r;
  return {
    instance_id: e,
    host: sanitizeText(o, g),
    name: t,
    input: E,
    envelope: i,
    tool_use_id: d,
    issued_at: Math.max(0, Math.trunc(_)),
    deadline_ms: normalizeDurationMs(p),
  };
}
var fn = createLazyValue(() =>
  c({
    instance_id: s().regex(INSTANCE_ID_PATTERN),
    host: s().max(g),
    name: s().min(1).max(64),
    args: fe(s(), se()),
    issued_at: T().int().nonnegative().max(P),
    deadline_ms: T().int().positive().max(S),
  }),
);
function parsePlumbingCallRequest(e) {
  let o = fn().safeParse(e),
    t = o.success ? l(o.data.name) : "";
  return o.success && t !== ""
    ? { ...o.data, host: sanitizeText(o.data.host, g), name: t }
    : void 0;
}
function buildPlumbingCallRequest({
  instanceId: e,
  host: o,
  name: t,
  args: r,
  issuedAt: i,
  deadlineMs: d,
}) {
  return {
    instance_id: e,
    host: sanitizeText(o, g),
    name: t,
    args: r,
    issued_at: Math.max(0, Math.trunc(i)),
    deadline_ms: normalizeDurationMs(d),
  };
}
function parseToolCallResult(e) {
  let o = x(e);
  if (!o)
    return { content: [], isError: !0, envelope: { status: "malformed" } };
  return {
    content: kn(o.content),
    isError: o.isError === !0,
    envelope: gn(de(o.structuredContent) ?? de(o._meta)),
  };
}
function de(e) {
  let o = x(e);
  return o && REMOTE_TOOL_EXECUTION_META_KEY in o ? o : void 0;
}
function gn(e) {
  if (!e) return { status: "absent" };
  let o = tn(e[REMOTE_TOOL_EXECUTION_META_KEY]);
  return o ? { status: "present", envelope: o } : { status: "malformed" };
}
function bn(e) {
  if (typeof e === "string") return e;
  return e.map((o) => {
    switch (o.type) {
      case "text":
        return { type: "text", text: o.text };
      case "image":
        return o.source.type === "base64"
          ? {
              type: "image",
              source: {
                type: "base64",
                media_type: o.source.media_type,
                data: o.source.data,
              },
            }
          : { type: "text", text: jsonStringify(o) };
      default:
        return { type: "text", text: jsonStringify(o) };
    }
  });
}
function buildToolCallResult({ envelope: e, content: o }) {
  let t =
      e.outcome === "refused" ||
      e.outcome === "failed" ||
      (e.outcome === "completed" && e.is_error),
    r = Te(e);
  return {
    content: xn(bn(o)),
    structuredContent: { [REMOTE_TOOL_EXECUTION_META_KEY]: r },
    isError: t,
    ...(t && { _meta: { [REMOTE_TOOL_EXECUTION_META_KEY]: r } }),
  };
}
function Te(e) {
  let o = Pe(e.target),
    t = "notes" in e &&
      e.notes !== void 0 && { notes: e.notes.slice(0, ue).map((r) => sanitizeText(r)) };
  switch (e.outcome) {
    case "completed":
      return { ...e, target: o, ...t };
    case "refused":
    case "failed":
      return { ...e, target: o, message: sanitizeText(e.message), ...t };
    case "needs_approval": {
      let { auto_mode: r, ...i } = e;
      return {
        ...i,
        target: o,
        tool: sanitizeText(e.tool, K),
        message: sanitizeText(e.message),
        ...(e.decision_reason !== void 0 && {
          decision_reason: sanitizeText(e.decision_reason),
        }),
        ...(e.suggestions !== void 0 && {
          suggestions: e.suggestions.slice(0, me).map((d) => sanitizeText(d, _e)),
        }),
        ...nn(r),
        ...(e.elicitation !== void 0 && {
          elicitation: l({
            ...e.elicitation,
            message: sanitizeText(e.elicitation.message),
          }),
        }),
        ...(e.notes !== void 0 && {
          notes: e.notes.slice(0, ce).map((d) => sanitizeText(d, Ce)),
        }),
      };
    }
    case "acknowledged":
    case "in_progress":
      return { ...e, target: o };
  }
}
function normalizeDurationMs(e) {
  if (Number.isNaN(e) || e < 1) return 1;
  return Math.min(Math.floor(e), S);
}
function jsonByteLength(e) {
  return Buffer.byteLength(jsonStringify(e), "utf8");
}
function Oe(e) {
  let o = x(e)?.v;
  return typeof o === "number" && o !== CURRENT_PROTOCOL_VERSION;
}
function G(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function x(e) {
  return G(e) ? e : void 0;
}
var En = createLazyValue(() => c({ type: k("text"), text: s() })),
  Rn = createLazyValue(() => c({ type: k("image"), data: s(), mimeType: X(Ee) }));
function kn(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return [];
  return e.map((o) => {
    let t = En().safeParse(o);
    if (t.success) return { type: "text", text: t.data.text };
    let r = Rn().safeParse(o);
    if (r.success)
      return {
        type: "image",
        source: {
          type: "base64",
          media_type: r.data.mimeType,
          data: r.data.data,
        },
      };
    let i = x(o)?.type;
    return {
      type: "text",
      text: `[${typeof i === "string" ? sanitizeText(l(i), g) : i === void 0 ? "unknown" : typeof i} content omitted]`,
    };
  });
}
function xn(e) {
  if (typeof e === "string") return [{ type: "text", text: e }];
  return e.map((o) =>
    o.type === "text"
      ? { type: "text", text: o.text }
      : { type: "image", data: o.source.data, mimeType: o.source.media_type },
  );
}
export {
  CURRENT_PROTOCOL_VERSION,
  SUPPORTED_PROTOCOL_VERSIONS,
  DEFAULT_REMOTE_TOOL_LIMITS,
  REMOTE_TOOL_LIMIT_BOUNDS,
  INSTANCE_ID_PATTERN,
  normalizeWithdrawalReason,
  isSuccessfulDisposition,
  DISPOSITION_TABLE,
  isUnverifiedRefusal,
  REMOTE_TOOL_CALL_FIELD_NAME,
  CRITERIA_VERSION,
  REMOTE_TOOL_EXECUTION_META_KEY,
  REMOTE_TOOL_CALL_META_KEY,
  TOOL_USE_ID_META_KEY,
  MAX_MESSAGE_LENGTH,
  SENDER_BELOW_FLOOR_FLAG,
  isSenderBelowFloor,
  MAX_NOTES_LENGTH,
  MAX_RULE_LENGTH,
  MAX_RESULT_BYTES,
  ALLOWED_TOOL_OUTPUT_FIELDS,
  sanitizeText,
  PDF_READ_NOTE_PREFIX,
  buildCallEnvelope,
  normalizePermissionMode,
  buildOutcomeQuery,
  resolveProtocolCompatibility,
  buildElicitationResult,
  WITHDRAWN_FEEDBACK,
  isWithinDepth,
  parseHostEpoch,
  parseMachineDescription,
  c2n,
  u2n,
  parseToolDescriptor,
  parseToolAnnouncement,
  parseRemoteToolCallRequest,
  buildRemoteToolCallRequest,
  parsePlumbingCallRequest,
  buildPlumbingCallRequest,
  parseToolCallResult,
  buildToolCallResult,
  normalizeDurationMs,
  jsonByteLength,
};

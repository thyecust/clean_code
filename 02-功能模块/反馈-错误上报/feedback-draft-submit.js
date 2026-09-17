// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { startSlowOperationSpan, jsonStringifyUntraced, jsonParseUntraced, readTailBytes, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import {
  getFeedbackDisabledReason,
  FEEDBACK_CLI_VERSION_MAX_CHARS,
  FEEDBACK_OS_MAX_CHARS,
  sanitizeFeedbackDraftTitle,
  sanitizeFeedbackDraftDetails,
  sanitizeFeedbackDraftField,
  sanitizeFeedbackDraftModel,
  sanitizeOptionalFeedbackDraftArea,
  selectRecentRequestIds,
  toFeedbackFailureMode,
  toFeedbackTaskCategory,
  toFeedbackThinkingType,
  sanitizeOptionalFeedbackDraftEffort,
  toFeedbackCount,
  resolveFeedbackDraftTranscriptPath,
  transcriptCorroboratesDraftIdentity,
  deleteFeedbackDraft,
  dismissFeedbackNoticeForDraft,
  decrementSessionDraftCount,
  prepareApiMessages,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { sanitizeAnalyticsId } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { hasThirdPartyTranscriptMarkers, anyTranscriptEntryHasThirdPartyMarkers, MAX_RAW_TRANSCRIPT_BYTES, MAX_FEEDBACK_PAYLOAD_BYTES, measureFeedbackPayloadBytes, findRecentEntriesWithinByteBudget, postFeedbackRequest } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
var J = 65536;
function H(e) {
  return Buffer.byteLength(jsonStringifyUntraced(jsonStringifyUntraced(e)).slice(1, -1));
}
function L(e) {
  let s = jsonStringifyUntraced(e).slice(1, -1);
  return Buffer.byteLength(jsonStringifyUntraced(s).slice(1, -1));
}
function O(e) {
  let s = measureFeedbackPayloadBytes(e);
  if (s <= MAX_FEEDBACK_PAYLOAD_BYTES) return { payload: e, trim: null };
  using k = startSlowOperationSpan`fitFeedbackPayloadToBudget(${s})`;
  let c = s - (MAX_FEEDBACK_PAYLOAD_BYTES - J),
    t = e.transcript.map((T) => H(T) + 1),
    b = t.reduce((T, F) => T + F, 0),
    h = e.rawTranscriptJsonl === void 0 ? 0 : L(e.rawTranscriptJsonl),
    w = c <= b ? b - c : Math.max(0, b - Math.max(0, c - h)),
    { start: m, keptBytes: l, oversized: p } = findRecentEntriesWithinByteBudget(t, w),
    g = e.transcript.slice(m),
    C = p.size === 0 ? g : g.filter((T, F) => !p.has(m + F)),
    D = c - (b - l),
    d = e.rawTranscriptJsonl,
    r = d === void 0 ? "absent" : "untouched";
  if (D > 0 && d !== void 0) {
    let T = h - D;
    if (T <= 0) ((d = void 0), (r = "omitted"));
    else {
      let F = d.split(`
`),
        q = F.map((E) =>
          L(
            E +
              `
`,
          ),
        ),
        { start: A, oversized: z } = findRecentEntriesWithinByteBudget(q, T),
        P = F.slice(A),
        I = (z.size === 0 ? P : P.filter((E, j) => !z.has(A + j))).join(`
`);
      if (I === "") ((d = void 0), (r = "omitted"));
      else ((d = I), (r = "reduced"));
    }
  }
  let v = {
      keptMessageCount: C.length,
      totalMessageCount: e.transcript.length,
      oversizedMessageCount: p.size,
      rawTail: r,
      rawTailKeptBytes: d === void 0 ? 0 : Buffer.byteLength(d),
    },
    _ = W(v);
  if (_ === null) return { payload: e, trim: null };
  let { rawTranscriptJsonl: R, ...B } = e,
    M = {
      ...B,
      message_count: C.length,
      description: `${e.description}
${_}`,
      transcript: C,
      ...(d !== void 0 && { rawTranscriptJsonl: d }),
    },
    o = measureFeedbackPayloadBytes(M);
  if (o > MAX_FEEDBACK_PAYLOAD_BYTES)
    logForDebugging(
      `fitFeedbackPayloadToBudget: still ${o} bytes after trim (budget ${MAX_FEEDBACK_PAYLOAD_BYTES})`,
      { level: "error" },
    );
  return { payload: M, trim: v };
}
function W(e) {
  let s = [];
  if (e.keptMessageCount < e.totalMessageCount)
    s.push(
      `kept ${e.keptMessageCount} of ${e.totalMessageCount} transcript messages (newest kept first)`,
    );
  if (e.rawTail === "reduced")
    s.push(
      `kept ${Math.max(1, Math.round(e.rawTailKeptBytes / 1024))} KiB of the raw session log (newest kept first)`,
    );
  else if (e.rawTail === "omitted") s.push("omitted the raw session log");
  if (s.length === 0) return null;
  return `transcript_truncated: ${s.join("; ")} (trimmed client-side to fit the upload size limit)`;
}
function V(e, s = "panel") {
  let k = selectRecentRequestIds(e.request_ids),
    c = sanitizeOptionalFeedbackDraftArea(e.area),
    t = toFeedbackFailureMode(e.failure_mode),
    b = toFeedbackTaskCategory(e.task_category),
    h = sanitizeOptionalFeedbackDraftEffort(e.effort),
    w = toFeedbackThinkingType(e.thinking_type),
    m = toFeedbackCount(e.thinking_budget),
    l = toFeedbackCount(e.message_count),
    p = toFeedbackCount(e.assistant_turn_count),
    g = toFeedbackCount(e.subagent_count);
  return [
    `[${e.type}] ${sanitizeFeedbackDraftTitle(e.title)}`,
    "",
    sanitizeFeedbackDraftDetails(e.details),
    "",
    "---",
    s === "card_send_as_is"
      ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review."
      : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.",
    `trigger: ${e.trigger}`,
    ...(c !== void 0 ? [`area: ${c}`] : []),
    ...(t !== void 0 ? [`failure_mode: ${t}`] : []),
    ...(b !== void 0 ? [`task_category: ${b}`] : []),
    `draft_id: ${e.draft_id}`,
    `drafted_at: ${e.created_at}`,
    `source_session_id: ${e.source_session_id}`,
    `model: ${sanitizeFeedbackDraftModel(e.model)}`,
    `cli_version: ${sanitizeFeedbackDraftField(e.cli_version, FEEDBACK_CLI_VERSION_MAX_CHARS)}`,
    `os: ${sanitizeFeedbackDraftField(e.os, FEEDBACK_OS_MAX_CHARS)}`,
    ...(h !== void 0 ? [`effort: ${h}`] : []),
    ...(w !== void 0
      ? [`thinking: ${w}${m !== void 0 ? ` (budget ${m})` : ""}`]
      : []),
    ...(p !== void 0
      ? [
          `turns: ${p} assistant${l !== void 0 ? ` / ${l} messages` : ""}${g !== void 0 && g > 0 ? `, ${g} ${pluralize(g, "subagent")}` : ""}`,
        ]
      : []),
    ...(k.length > 0 ? [`request_ids: ${k.join(", ")}`] : []),
  ].join(`
`);
}
function Y(e) {
  let s = [];
  using k = startSlowOperationSpan`parseDraftTranscriptMessages(${e.length})`;
  for (let c of e.split(`
`)) {
    if (!c) continue;
    let t;
    try {
      t = jsonParseUntraced(c);
    } catch {
      continue;
    }
    if (typeof t !== "object" || t === null) continue;
    if (t.type !== "user" && t.type !== "assistant") continue;
    if (
      typeof t.uuid !== "string" ||
      typeof t.timestamp !== "string" ||
      t.isSidechain === !0 ||
      !t.message
    )
      continue;
    s.push(
      t.type === "user"
        ? {
            type: "user",
            uuid: t.uuid,
            timestamp: t.timestamp,
            message: t.message,
            ...(t.isMeta === !0 && { isMeta: !0 }),
            ...(t.toolUseResult !== void 0 && {
              toolUseResult: t.toolUseResult,
            }),
            ...(t.isCompactSummary === !0 && { isCompactSummary: !0 }),
          }
        : {
            type: "assistant",
            uuid: t.uuid,
            timestamp: t.timestamp,
            message: t.message,
            requestId: t.requestId,
          },
    );
  }
  return s;
}
var N =
  "Feedback payload too large. Try again without the transcript, or shorten the details.";
async function submitFeedbackDraft({
  draft: e,
  includeTranscript: s,
  currentSessionMessages: k,
  surface: c = "cli",
  via: t = "panel",
  signal: b,
  storageV5: h,
  credentials: w,
}) {
  let m = e.source_session_id === K(),
    l = [],
    p;
  if (s && e.transcript_ref) {
    let _ = await resolveFeedbackDraftTranscriptPath(e);
    if (m) {
      if (((l = prepareApiMessages(k)), _ !== null))
        try {
          let { content: R, bytesRead: B, bytesTotal: M } = await readTailBytes(_, MAX_RAW_TRANSCRIPT_BYTES),
            o = R;
          if (B < M)
            o = o.slice(
              o.indexOf(`
`) + 1,
            );
          if (hasThirdPartyTranscriptMarkers(o))
            logForDebugging(
              "rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers",
            );
          else p = o;
        } catch {}
    } else if (_ !== null)
      try {
        let { content: R, bytesRead: B, bytesTotal: M } = await readTailBytes(_, MAX_RAW_TRANSCRIPT_BYTES),
          o = R;
        if (B < M)
          o = o.slice(
            o.indexOf(`
`) + 1,
          );
        if (!transcriptCorroboratesDraftIdentity(o, e))
          logForDebugging(
            "draft transcript withheld from feedback submit: identity_not_corroborated",
          );
        else {
          if (((l = Y(o)), anyTranscriptEntryHasThirdPartyMarkers(l)))
            ((l = []),
              logForDebugging(
                "draft transcript withheld from feedback submit: contains_3p_transcript_markers",
              ));
          if (hasThirdPartyTranscriptMarkers(o))
            logForDebugging(
              "rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers",
            );
          else p = o;
        }
      } catch {}
  }
  let g = selectRecentRequestIds(e.request_ids).at(-1) ?? null,
    C = {
      latestAssistantMessageId: g,
      latestAssistantAPIMessageId: null,
      lastInterruptedAssistantAPIMessageId: null,
      message_count: l.length,
      datetime: new Date().toISOString(),
      description: V(e, t),
      surface: c,
      platform: a.platform,
      gitRepo: !1,
      commitSha: null,
      version: e.cli_version,
      transcript: l,
      ...(p && { rawTranscriptJsonl: p }),
    },
    { payload: D, trim: d } = O(C),
    r = await postFeedbackRequest(D, b, w);
  if (r.success) {
    try {
      await deleteFeedbackDraft(e.draft_id, h);
    } catch (_) {
      (logForDebugging(
        `feedbackDrafts: post-submit draft delete failed: ${_ instanceof Error ? _.name : "unknown"}`,
        { level: "error" },
      ),
        logEvent("tengu_feedback_draft_delete_failed", { phase: S("post_submit") }));
    }
    if (m) decrementSessionDraftCount();
    if (t !== "card_send_as_is") dismissFeedbackNoticeForDraft(e.draft_id);
    return (
      logEvent("tengu_feedback_draft_submitted", {
        type: fromEnum(e.type),
        trigger: fromEnum(e.trigger),
        failure_mode: fromEnumOpt(e.failure_mode),
        task_category: fromEnumOpt(e.task_category),
        transcript_included:
          D.transcript.length > 0 || D.rawTranscriptJsonl
            ? S("true")
            : S("false"),
        transcript_trimmed: d !== null ? S("true") : S("false"),
        transcript_requested: s ? S("true") : S("false"),
        transcript_available: e.transcriptAvailable ? S("true") : S("false"),
        from_this_session: m ? S("true") : S("false"),
        feedback_id: sanitizeAnalyticsId(r.feedbackId),
        last_request_id: sanitizeAnalyticsId(g),
      }),
      logFeatureOk("feedback_draft_submit"),
      { success: !0, feedbackId: r.feedbackId }
    );
  }
  if (
    (logFeatureBad("feedback_draft_submit", r.failureReason ?? "network_error", {
      from_this_session: m ? S("true") : S("false"),
    }),
    r.isZdrOrg)
  )
    return {
      success: !1,
      error:
        "Feedback collection is not available for organizations with custom data retention policies.",
    };
  if (r.failureReason === "auth_error")
    return {
      success: !1,
      error: "Couldn't send feedback: not signed in. Run /login, then retry.",
    };
  if (r.payloadTooLarge) return { success: !1, error: N, payloadTooLarge: !0 };
  if (r.failureReason === "policy_blocked")
    return {
      success: !1,
      error: getFeedbackDisabledReason() ?? "Feedback is disabled by your organization's policy.",
    };
  return {
    success: !1,
    error: `Couldn't send feedback${r.statusCode ? ` (server returned ${r.statusCode})` : r.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"}. The draft is still queued. Try again later.`,
  };
}
async function discardFeedbackDraft(e, s, k) {
  let c = await deleteFeedbackDraft(e.draft_id, k);
  if ((dismissFeedbackNoticeForDraft(e.draft_id), !c)) return;
  if (e.source_session_id === K()) decrementSessionDraftCount();
  logEvent("tengu_feedback_draft_discarded", {
    type: fromEnum(e.type),
    trigger: fromEnum(e.trigger),
    discarded_via: fromEnum(s),
  });
}
export { submitFeedbackDraft, discardFeedbackDraft };

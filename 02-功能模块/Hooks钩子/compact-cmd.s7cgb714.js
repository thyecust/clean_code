// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 203 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { zP } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ve, R, q0, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import {
  getKeybindingChord,
  estimateTokensForMessages,
  consumePrecomputedCompact,
  logManualPrecomputedCompactConsumed,
  getMessagesAfterUuid,
  logPrecomputedCompactDiscarded,
  runPostCompactCleanup,
  NOT_ENOUGH_MESSAGES_TO_COMPACT,
  throwIfCompactionBlockedByHook,
  CompactionError,
  mergeCustomInstructions,
  markContextRecentlyCompacted,
  runCompaction,
  finalizeCompaction,
  sliceFromLastCompactBoundary,
  executePreCompactHooks,
  invalidateUserContext,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { API_REQUEST_ABORTED_MESSAGE } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { emitCompactionEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { buildCacheSafeParams } from "../权限系统/cache-safe-params.js";
import { get1MContextSuggestion } from "../../01-核心基础设施/共享小工具-未细化/model-1m-context-suggestion.js";
import { appendEndedByModelSuffix } from "../../01-核心基础设施/共享小工具-未细化/ended-by-model.js";
var H = async (s, e) => {
  let { abortController: n } = e,
    { messages: o } = e;
  if (e.getAppState().endedByModel)
    throw new R(
      appendEndedByModelSuffix(
        "Claude ended this conversation. Start a new session (or /clear) to continue.",
      ),
      "Claude ended this conversation",
    );
  if (((o = sliceFromLastCompactBoundary(o)), o.length === 0)) throw Error("No messages to compact");
  let m = s.trim();
  try {
    return await E(o, e, m);
  } catch (r) {
    if (n.signal.aborted) throw new Ve("Compaction canceled.");
    else if (q0(r, NOT_ENOUGH_MESSAGES_TO_COMPACT)) return { type: "text", value: NOT_ENOUGH_MESSAGES_TO_COMPACT };
    else if (r instanceof CompactionError)
      return { type: "text", value: r.message, level: "error" };
    else
      throw (
        logError(r),
        Error(
          `Error during compaction: ${r instanceof Error ? r.message : String(r)}`,
          { cause: r },
        )
      );
  }
};
async function E(s, e, n) {
  (e.onCompactEvent?.({
    type: "compact_progress",
    event: { type: "hooks_start", hookType: "pre_compact" },
  }),
    e.onCompactEvent?.({ type: "sdk_status", status: "compacting" }));
  let o = performance.now(),
    m = zP(),
    r,
    p = estimateTokensForMessages(s),
    t,
    i;
  try {
    let [a, g] = await Promise.all([
      executePreCompactHooks(
        e.session,
        { trigger: "manual", customInstructions: n || null },
        e,
        e.abortController.signal,
      ),
      buildCacheSafeParams({
        toolUseContext: e,
        forkContextMessages: s,
        mainThreadAgentDefinition: void 0,
      }),
    ]);
    throwIfCompactionBlockedByHook(a, (d) => e.onQueryEvent?.({ type: "notification", notification: d }));
    let C = mergeCustomInstructions(n, a.newCustomInstructions);
    (e.onCompactEvent?.({ type: "stream_mode", mode: "requesting" }),
      e.onQueryEvent?.({ type: "response_length", op: "reset" }),
      e.onCompactEvent?.({
        type: "compact_progress",
        event: { type: "compact_start" },
      }));
    let c = await _(
      e.session.precompute,
      n,
      a.newCustomInstructions,
      s,
      e.abortController.signal,
      e.storageV5,
    );
    i = c.reuse;
    let u = await (
      c.hit
        ? finalizeCompaction({
            ...c.finalize,
            startTime: o,
            cacheSafeParams: g,
            mainChainTailAtStart: m,
          })
        : runCompaction(s, g, {
            customInstructions: C,
            trigger: "manual",
            manualPrecomputeReuse: c.reuse,
            userWaitStartedAt: o,
            precomputedKind: c.precomputedKind,
            precomputedFailureCause: c.precomputedFailureCause,
          })
    ).catch((d) => (logError(d), { ok: !1, reason: "error", detail: l(d) }));
    if (!u.ok)
      switch (u.reason) {
        case "too_few_groups":
          throw Error(NOT_ENOUGH_MESSAGES_TO_COMPACT);
        case "aborted":
          throw Error(API_REQUEST_ABORTED_MESSAGE);
        case "exhausted":
          throw new CompactionError(
            "Compaction failed \xB7 conversation could not be reduced below the context limit",
          );
        case "media_unstrippable":
          throw new CompactionError(
            "Compaction failed \xB7 attached media exceeds size limits",
          );
        case "error":
          throw new CompactionError(
            `Error during compaction: ${u.detail || "unknown error"}`,
          );
      }
    let f = u.result.boundaryMarker;
    if (f.subtype === "compact_boundary" && "compactMetadata" in f)
      t = f.compactMetadata.postTokens;
    (runPostCompactCleanup(e.session, void 0, e.setAppState, void 0, void 0, void 0, e.storageV5),
      markContextRecentlyCompacted(),
      invalidateUserContext(e.session, "compaction"));
    let y =
      [a.userDisplayMessage, u.result.userDisplayMessage].filter(Boolean).join(`
`) || void 0;
    return {
      type: "compact",
      compactionResult: { ...u.result, userDisplayMessage: y },
      displayText: w(e, y),
    };
  } catch (a) {
    throw (
      (r = a instanceof Error ? a.message : "reactive compaction failed"),
      a
    );
  } finally {
    (e.onCompactEvent?.({ type: "stream_mode", mode: "requesting" }),
      e.onQueryEvent?.({ type: "response_length", op: "reset" }),
      e.onCompactEvent?.({
        type: "compact_progress",
        event: { type: "compact_end" },
      }),
      emitCompactionEvent({
        trigger: "manual",
        success: !r,
        durationMs: performance.now() - o,
        preTokens: p,
        postTokens: t,
        error: r,
        precomputeReuse: i,
      }),
      e.onCompactEvent?.({
        type: "sdk_status",
        status: null,
        metadata: {
          compactResult: r ? "failed" : "success",
          ...(r && { compactError: r }),
        },
      }));
  }
}
async function _(s, e, n, o, m, r) {
  if (e) return { hit: !1, reuse: "miss_custom_instructions" };
  if (n) return { hit: !1, reuse: "miss_hook" };
  let p = performance.now(),
    t = await consumePrecomputedCompact(s, void 0, m, r),
    i = performance.now() - p;
  if (t === null)
    return (
      logManualPrecomputedCompactConsumed("none", t, i),
      { hit: !1, reuse: "miss_not_ready", precomputedKind: "none" }
    );
  if (t.kind === "turn_aborted") throw (logManualPrecomputedCompactConsumed("aborted", t, i), Error(API_REQUEST_ABORTED_MESSAGE));
  if (t.kind === "failed")
    return (
      logManualPrecomputedCompactConsumed("failed", t, i),
      {
        hit: !1,
        reuse: "miss_not_ready",
        precomputedKind: "failed",
        precomputedFailureCause: t.failure.cause,
      }
    );
  let a = getMessagesAfterUuid(o, t.ready.precomputedAtUuid);
  if (a === null)
    return (
      logManualPrecomputedCompactConsumed("none", t, i),
      logPrecomputedCompactDiscarded(t.ready, "boundary_uuid_missing", void 0),
      { hit: !1, reuse: "miss_not_ready", precomputedKind: "none" }
    );
  return (
    logManualPrecomputedCompactConsumed("applied", t, i),
    {
      hit: !0,
      reuse: "hit",
      finalize: {
        compactResult: t.ready.result,
        messagesToPreserve: [...t.ready.result.messagesToPreserve, ...a],
        preCompactMessages: o,
        querySource: void 0,
        trigger: "manual",
        precomputed: !0,
        manualPrecomputeReuse: "hit",
        precomputeTelemetry: {
          statusAtPTL: t.statusAtPTL === "ready" ? "ready" : "pending",
          leadMs: p - t.ready.startedAt,
          totalMs: t.ready.readyDurationMs,
          borrowed: !1,
          messagesSinceTokens: estimateTokensForMessages(a),
        },
      },
    }
  );
}
function w(s, e) {
  let n = get1MContextSuggestion("tip"),
    o = getKeybindingChord("app:toggleTranscript", "Global", "ctrl+o"),
    m = [
      ...(s.options.verbose ? [] : [`(${o} to see full summary)`]),
      ...(e ? [e] : []),
      ...(n ? [n] : []),
    ];
  return chalk.dim(
    "Compacted " +
      m.join(`
`),
  );
}
export { H as call };

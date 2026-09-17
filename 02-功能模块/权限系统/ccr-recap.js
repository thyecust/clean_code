// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, po } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isBgSession, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateAtWordBoundary } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { hasCcrSurface } from "../../01-核心基础设施/共享小工具-未细化/chunk-s1hpfa12.js";
import { stripMemoryTags } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { getLastCacheSafeParams, runForkedAgent, createUserMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function isAwaySummaryEnabled() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (po(e)) return !1;
  if (Ie(e)) return !0;
  if (ke()) return !1;
  if (getInitialSettings()?.awaySummaryEnabled === !1) return !1;
  return !0;
}
function l() {
  let e = a.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_harbor_moth", !1);
}
function maybeStartCcrRecap(e, t) {
  if (!t.onMetadataChanged) return;
  if (isBgSession() || !hasCcrSurface() || !l()) return;
  if (e.startedForTurnEnd) return;
  ((e.startedForTurnEnd = !0), S(e, t));
}
function resetCcrRecap(e) {
  e.reset();
}
async function S(e, t) {
  e.inFlight?.abort();
  let r = new AbortController();
  e.inFlight = r;
  let o = await generateCcrRecap(r.signal);
  if (r.signal.aborted) return;
  if (o.kind !== "ok") {
    if (o.kind !== "no-turn") logFeatureBad("ccr_recap_generate", o.kind);
    return;
  }
  if (t.getState() === "running") {
    logForDebugging("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if ((t.notifyMetadataChanged({ recap: o.text }), o.capped))
    logFeatureSad("ccr_recap_generate", "capped");
  else logFeatureOk("ccr_recap_generate");
}
var k =
    "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.",
  m = 400;
async function generateCcrRecap(e, t) {
  let r = getLastCacheSafeParams();
  if (!r && t) {
    if (e.aborted) return { kind: "aborted" };
    try {
      r = await t();
    } catch (i) {
      return (
        logForDebugging(`[awaySummary] fallback params rebuild failed: ${i}`),
        { kind: "failed" }
      );
    }
    if (e.aborted) return { kind: "aborted" };
  }
  if (!r)
    return (
      logForDebugging("[awaySummary] no CacheSafeParams saved, skipping"),
      { kind: "no-turn" }
    );
  let o = new AbortController();
  e.addEventListener("abort", () => o.abort(), { once: !0 });
  try {
    let { messages: i } = await runForkedAgent({
      promptMessages: [createUserMessage({ content: k })],
      cacheSafeParams: r,
      overrides: { abortController: o },
      canUseTool: async () => ({
        behavior: "deny",
        message: "Away summary cannot use tools",
        decisionReason: { type: "other", reason: "away_summary" },
      }),
      querySource: "away_summary",
      forkLabel: "away_summary",
      maxTurns: 1,
      skipCacheWrite: !0,
      skipTranscript: !0,
    });
    if (e.aborted) return { kind: "aborted" };
    let u = i.find((c) => c.type === "assistant" && c.isApiErrorMessage);
    if (u) return { kind: "api-error", text: p([u], !0) };
    let s = p(i, !1),
      d = s.length > m;
    if (d) {
      let c = truncateAtWordBoundary(s, m);
      (logForDebugging(`[awaySummary] recap capped from ${s.length} to ${c.length} chars`),
        (s = c));
    }
    return s ? { kind: "ok", text: s, capped: d } : { kind: "failed" };
  } catch (i) {
    if (e.aborted) return { kind: "aborted" };
    return (logForDebugging(`[awaySummary] generation failed: ${i}`), { kind: "failed" });
  }
}
function p(e, t) {
  return stripMemoryTags(
    e
      .flatMap((r) =>
        r.type === "assistant" && (t || !r.isApiErrorMessage)
          ? r.message.content
          : [],
      )
      .filter((r) => r.type === "text")
      .map((r) => ("text" in r ? r.text : ""))
      .join(""),
  ).trim();
}
export { isAwaySummaryEnabled, maybeStartCcrRecap, resetCcrRecap, generateCcrRecap };

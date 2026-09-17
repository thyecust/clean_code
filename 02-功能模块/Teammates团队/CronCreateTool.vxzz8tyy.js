// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 84 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { bB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { getTeammateContext } from "./chunk-811z9z0t.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { JI, K_, rJ, nCe, vj, Z7e } from "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import { CRON_CREATE_TOOL_NAME, DEFAULT_MAX_AGE_DAYS, isKairosCronEnabled, isDurableCronEnabled, buildCronCreateDescription, buildDurableParamDescription, buildCronCreatePrompt } from "../Cron-定时任务/chunk-mk3zm4ew.js";
import { buildBooleanFromStringSchema } from "../../01-核心基础设施/共享小工具-未细化/boolean-from-string-schema.js";
import { s, O, c, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var n = 50,
  l = createLazyValue(() =>
    Qe({
      cron: s().describe(
        'Standard 5-field cron expression in local time: "M H DoM Mon DoW" (e.g. "*/5 * * * *" = every 5 minutes, "30 14 28 2 *" = Feb 28 at 2:30pm local once).',
      ),
      prompt: s().describe("The prompt to enqueue at each fire time."),
      recurring: buildBooleanFromStringSchema(O().optional()).describe(
        `true (default) = fire on every cron match until deleted or auto-expired after ${DEFAULT_MAX_AGE_DAYS} days. false = fire once at the next match, then auto-delete. Use false for "remind me at X" one-shot requests with pinned minute/hour/dom/month.`,
      ),
      durable: buildBooleanFromStringSchema(O().optional()).describe(buildDurableParamDescription(isDurableCronEnabled())),
    }),
  ),
  u = createLazyValue(() =>
    c({ id: s(), humanSchedule: s(), recurring: O(), durable: O().optional() }),
  ),
  CronCreateTool = buildTool({
    name: CRON_CREATE_TOOL_NAME,
    searchHint: "schedule a recurring or one-shot prompt",
    enablesCodeExecution: !0,
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return l();
    },
    get outputSchema() {
      return u();
    },
    isEnabled() {
      return isKairosCronEnabled();
    },
    toAutoClassifierInput(e) {
      return `${e.cron}: ${e.prompt}`;
    },
    async checkPermissions(e, r) {
      if (getToolPermissionContext(r).mode === "auto")
        return {
          behavior: "passthrough",
          message: "Scheduling a cron prompt requires classifier review.",
        };
      return { behavior: "allow", updatedInput: e };
    },
    async description() {
      return buildCronCreateDescription(isDurableCronEnabled());
    },
    async prompt() {
      return buildCronCreatePrompt(isDurableCronEnabled());
    },
    getPath() {
      return rJ();
    },
    async validateInput(e) {
      if (!JI(e.cron))
        return {
          result: !1,
          message: `Invalid cron expression '${e.cron}'. Expected 5 fields: M H DoM Mon DoW.`,
          errorCode: 1,
        };
      if (Z7e(e.cron, Date.now()) === null)
        return {
          result: !1,
          message: `Cron expression '${e.cron}' does not match any calendar date in the next year.`,
          errorCode: 2,
        };
      if ((await vj()).length >= n)
        return {
          result: !1,
          message: `Too many scheduled jobs (max ${n}). Cancel one first.`,
          errorCode: 3,
        };
      if (e.durable && getTeammateContext())
        return {
          result: !1,
          message:
            "durable crons are not supported for teammates (teammates do not persist across sessions)",
          errorCode: 4,
        };
      return { result: !0 };
    },
    async call({ cron: e, prompt: r, recurring: t = !0, durable: a = !1 }) {
      let o = a && isDurableCronEnabled(),
        i = await nCe(e, r, t, o, getTeammateContext()?.agentId);
      return (
        bB(!0),
        { data: { id: i, humanSchedule: K_(e), recurring: t, durable: o } }
      );
    },
    mapToolResultToToolResultBlockParam(e, r) {
      let t = e.durable
        ? "Persisted to .claude/scheduled_tasks.json"
        : "Session-only (not written to disk, dies when Claude exits)";
      return {
        tool_use_id: r,
        type: "tool_result",
        content: e.recurring
          ? `Scheduled recurring job ${e.id} (${e.humanSchedule}). ${t}. Auto-expires after ${DEFAULT_MAX_AGE_DAYS} days. Use CronDelete to cancel sooner.`
          : `Scheduled one-shot task ${e.id} (${e.humanSchedule}). ${t}. It will fire once then auto-delete.`,
      };
    },
    renderToolUseMessage(e) {
      return `${e.cron ?? ""}${e.prompt ? `: ${truncate(e.prompt, 60, !0)}` : ""}`;
    },
  });
export { CronCreateTool };

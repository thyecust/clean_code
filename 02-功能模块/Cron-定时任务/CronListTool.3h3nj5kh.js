// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 86 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { getTeammateContext } from "../Teammates团队/teammate-context.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { formatCronSchedule, listScheduledTasks } from "../后台任务-Shell管理/scheduled-tasks.js";
import { CRON_LIST_TOOL_NAME, isKairosCronEnabled, isDurableCronEnabled, CRON_LIST_DESCRIPTION, buildCronListPrompt } from "./chunk-mk3zm4ew.js";
import { s, O, v, c, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var n = createLazyValue(() => Qe({})),
  a = createLazyValue(() =>
    c({
      jobs: v(
        c({
          id: s(),
          cron: s(),
          humanSchedule: s(),
          prompt: s(),
          recurring: O().optional(),
          durable: O().optional(),
        }),
      ),
    }),
  ),
  CronListTool = buildTool({
    name: CRON_LIST_TOOL_NAME,
    searchHint: "list active cron jobs",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return n();
    },
    get outputSchema() {
      return a();
    },
    isEnabled() {
      return isKairosCronEnabled();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async description() {
      return CRON_LIST_DESCRIPTION;
    },
    async prompt() {
      return buildCronListPrompt(isDurableCronEnabled());
    },
    async call() {
      let r = await listScheduledTasks(),
        o = getTeammateContext();
      return {
        data: {
          jobs: (o ? r.filter((t) => t.agentId === o.agentId) : r).map((t) => ({
            id: t.id,
            cron: t.cron,
            humanSchedule: formatCronSchedule(t.cron),
            prompt: t.prompt,
            ...(t.recurring ? { recurring: !0 } : {}),
            ...(t.durable === !1 ? { durable: !1 } : {}),
          })),
        },
      };
    },
    mapToolResultToToolResultBlockParam(r, o) {
      return {
        tool_use_id: o,
        type: "tool_result",
        content:
          r.jobs.length > 0
            ? r.jobs.map(
                (e) =>
                  `${e.id} \u2014 ${e.humanSchedule}${e.recurring ? " (recurring)" : " (one-shot)"}${e.durable === !1 ? " [session-only]" : ""}: ${truncate(e.prompt, 80, !0)}`,
              ).join(`
`)
            : "No scheduled jobs.",
      };
    },
    renderToolUseMessage() {
      return "";
    },
  });
export { CronListTool };

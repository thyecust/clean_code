// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 87 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { getTeammateContext } from "../Teammates团队/chunk-811z9z0t.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { rJ, SK, vj } from "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import { CRON_DELETE_TOOL_NAME, isKairosCronEnabled, isDurableCronEnabled, CRON_DELETE_DESCRIPTION, buildCronDeletePrompt } from "./chunk-mk3zm4ew.js";
import { s, c, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var n = createLazyValue(() => Qe({ id: s().describe("Job ID returned by CronCreate.") })),
  u = createLazyValue(() => c({ id: s() })),
  CronDeleteTool = buildTool({
    name: CRON_DELETE_TOOL_NAME,
    searchHint: "cancel a scheduled cron job",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    get inputSchema() {
      return n();
    },
    get outputSchema() {
      return u();
    },
    isEnabled() {
      return isKairosCronEnabled();
    },
    toAutoClassifierInput(e) {
      return e.id;
    },
    async description() {
      return CRON_DELETE_DESCRIPTION;
    },
    async prompt() {
      return buildCronDeletePrompt(isDurableCronEnabled());
    },
    getPath() {
      return rJ();
    },
    async validateInput(e) {
      let r = (await vj()).find((a) => a.id === e.id);
      if (!r)
        return {
          result: !1,
          message: `No scheduled job with id '${e.id}'`,
          errorCode: 1,
        };
      let o = getTeammateContext();
      if (o && r.agentId !== o.agentId)
        return {
          result: !1,
          message: `Cannot delete cron job '${e.id}': owned by another agent`,
          errorCode: 2,
        };
      return { result: !0 };
    },
    async call({ id: e }) {
      return (await SK([e]), { data: { id: e } });
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: `Cancelled job ${e.id}.`,
      };
    },
    renderToolUseMessage(e) {
      return e.id ?? "";
    },
  });
export { CronDeleteTool };

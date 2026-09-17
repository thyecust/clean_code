// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 79 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { HELP_FLAGS } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { getDefaultMainLoopModelSetting, parseUserSpecifiedModel } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { modelSupportsUltracode, getAllowedEffortLevels } from "../权限系统/chunk-t3b7pg2x.js";
import { getEffortValue } from "../权限系统/chunk-fjrcf22x.js";
import { formatEffortUsageText, formatEffortStatus, runEffortCommand } from "../斜杠命令-UI组件/effort-level.js";
async function f(s, t) {
  let e = s.trim(),
    o = t.getAppState(),
    r = parseUserSpecifiedModel(o.mainLoopModelForSession ?? o.mainLoopModel ?? getDefaultMainLoopModelSetting());
  if (HELP_FLAGS.includes(e)) return { type: "text", value: formatEffortUsageText() };
  if (e === "current" || e === "status") {
    let { message: a } = formatEffortStatus(getEffortValue(t), r, o.ultracode);
    return { type: "text", value: a };
  }
  if (!e)
    return {
      type: "text",
      value: `Usage: /effort <${getAllowedEffortLevels(r).join("|")}${modelSupportsUltracode(r) ? "|ultracode" : ""}|auto>`,
    };
  return {
    type: "text",
    value: (
      await runEffortCommand(
        e,
        t.setAppState,
        !t.options.isNonInteractiveSession,
        t.storageV5,
      )
    ).message,
  };
}
export { f as call };

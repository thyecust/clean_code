// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 208 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { FORK_GLYPH } from "./chunk-e4pfvp7x.js";
import { hasPermissionsToUseTool } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { spawnForkFromDirective } from "./chunk-asdzywd2.js";
import { isCoordinatorModeEnabled } from "../../01-核心基础设施/核心工具-未归类/coordinator-mode.js";
var m = async (o, s, t) => {
  let i = t.trim();
  if (!i)
    return (o("Usage: /fork \\<directive\\>", { display: "system" }), null);
  let r = await spawnForkFromDirective(i, s, s.canUseTool ?? hasPermissionsToUseTool);
  if (!r)
    return (
      o(
        isCoordinatorModeEnabled()
          ? "Forking is not available in coordinator sessions. Use /branch instead."
          : "Cannot fork before the first conversation turn",
        { display: "system" },
      ),
      null
    );
  return (
    o(`${FORK_GLYPH} forked ${r.name} (${r.agentId.slice(-4)})`, { display: "system" }),
    null
  );
};
export { m as call };

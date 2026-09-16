// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 208 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { mS } from "./chunk-e4pfvp7x.js";
import { gd } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { l3e } from "./chunk-asdzywd2.js";
import { Ci } from "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
var m = async (s, t, r) => {
  let o = r.trim();
  if (!o) return (s("Usage: /subtask \\<task\\>", { display: "system" }), null);
  let a = await l3e(o, t, t.canUseTool ?? gd);
  if (!a)
    return (
      s(
        Ci()
          ? "Subtasks are not available in coordinator sessions. Use /branch instead."
          : "Cannot start a subtask before the first conversation turn",
        { display: "system" },
      ),
      null
    );
  return (
    s(`${mS} forked ${a.name} (${a.agentId.slice(-4)})`, { display: "system" }),
    null
  );
};
export { m as call };

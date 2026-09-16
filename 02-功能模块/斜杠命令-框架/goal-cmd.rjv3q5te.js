// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { x, kr } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m$e, cve, BEt, uve, dve } from "../Skills技能/chunk-sapykxw7.js";
var u = async (l, o) => {
  let e = l.trim();
  if (e === "") {
    let t = o.options.activeGoal;
    if (!t)
      return { type: "text", value: "No goal set. Usage: `/goal <condition>`" };
    let r =
        t.iterations === 0
          ? "not yet evaluated"
          : `${t.iterations} ${x(t.iterations, "turn")}`,
      n = t.lastReason
        ? `
Last check: ${kr(t.lastReason.trim())}`
        : "";
    return { type: "text", value: `Goal active: ${t.condition} (${r})${n}` };
  }
  if (cve(e)) {
    let t = dve(o);
    return {
      type: "text",
      value: t === null ? "No goal set" : `Goal cleared: ${t}`,
    };
  }
  if (e.length > m$e)
    return (
      g("goal_set", "too_long"),
      {
        type: "text",
        value: `Goal condition is limited to ${m$e} characters (got ${e.length})`,
      }
    );
  let a = uve(e, o);
  if (a !== null) return { type: "text", value: a };
  return { type: "query", value: `Goal set: ${e}`, prompt: BEt(e) };
};
export { u as call };

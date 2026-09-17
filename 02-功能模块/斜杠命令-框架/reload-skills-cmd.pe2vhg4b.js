// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 207 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Hr } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { z7, J$t, d3, Rk, resetSentSkillNames, clearCommandsCache, getSkillToolCommands } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var M = async (C, m) => {
  let t = Q(),
    d = J$t(m.getMcp().commands),
    s = (o) => z7(o, d),
    n = s(await getSkillToolCommands(t, m.storageV5)),
    i = new Set(n.map((o) => o.name));
  (d3(), clearCommandsCache(), resetSentSkillNames());
  let e = s(await getSkillToolCommands(t, m.storageV5)),
    c = new Set(e.map((o) => o.name));
  Rk.emit();
  let l = G(e, (o) => !i.has(o.name)),
    r = G(n, (o) => !c.has(o.name)),
    a = [];
  if (l > 0) a.push(`${l} added`);
  if (r > 0) a.push(`${r} removed`);
  let p = a.length > 0 ? a.join(", ") : "no changes",
    f = Hr() ? " (custom skills are disabled in safe mode)" : "";
  return {
    type: "text",
    value: `Reloaded skills: ${e.length} ${x(e.length, "skill")} available (${p})${f}`,
  };
};
export { M as call };

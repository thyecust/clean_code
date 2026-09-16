// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 215 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { DA, EW } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { lo } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../AutoMode-自动模式/chunk-15n5gf3t.js";
import { Qn } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../推送通知(Push)/推送通知(Push).8ab67cqd.js";
import "../Teammates团队/chunk-88ybhavr.js";
import "../Teammates团队/chunk-qy9488g9.js";
import "../../01-核心基础设施/设置-配置/chunk-bznmdnc2.js";
import { E3e, TIe, EIe, A3e } from "../Memory-CLAUDE.md/chunk-wq8d9xjt.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/设置-配置/chunk-992erern.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ch1x7wx1.js";
async function p(n, o) {
  let t = n.trim(),
    e = t.toLowerCase();
  if (!e || DA.includes(e) || EW.includes(e))
    return {
      type: "text",
      value: `Usage: /config key=value [key=value ...]
${A3e(o)}`,
    };
  let a = E3e(t);
  if (!a)
    return {
      type: "text",
      value: `Expected key=value, got "${Qn(t)}". Run /config to see what's available.`,
    };
  let s = await TIe(a, o),
    r = lo(o.session);
  return {
    type: "text",
    value: s.map((i) => EIe(i, r)).join(`
`),
  };
}
export { p as call };

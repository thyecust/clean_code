// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 75 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { DA, EW } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { renderDefaultModelSetting } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { pt } from "./chunk-jjr7hzzf.js";
import { lT, X9 } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { cSe } from "./chunk-xkt71qzj.js";
async function u(r, t) {
  if (!lT()) return { type: "text", value: "The advisor is not available" };
  let s = `Usage: /advisor <${[...X9(), "off"].join("|")}>`,
    o = r.trim().toLowerCase();
  if (!o || EW.includes(o) || DA.includes(o)) {
    let e = t.getAdvisorSetting();
    return {
      type: "text",
      value: `${e ? `Advisor: ${pt(renderDefaultModelSetting(e))}` : "Advisor: off"}
${s}`,
    };
  }
  let i = !t.dispatchedOverBridge;
  return {
    type: "text",
    value: cSe(
      o === "unset" ? "off" : o,
      t.options.mainLoopModel,
      t.setAppState,
      t.storageV5,
      i,
      !0,
    ),
  };
}
export { u as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 79 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { DA } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { dh, wt } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ib, VK } from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import { Qc } from "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import { olt, K9e, lSe } from "../../02-功能模块/斜杠命令-UI组件/chunk-d9snm4c7.js";
async function f(s, t) {
  let e = s.trim(),
    o = t.getAppState(),
    r = wt(o.mainLoopModelForSession ?? o.mainLoopModel ?? dh());
  if (DA.includes(e)) return { type: "text", value: olt() };
  if (e === "current" || e === "status") {
    let { message: a } = K9e(Qc(t), r, o.ultracode);
    return { type: "text", value: a };
  }
  if (!e)
    return {
      type: "text",
      value: `Usage: /effort <${VK(r).join("|")}${ib(r) ? "|ultracode" : ""}|auto>`,
    };
  return {
    type: "text",
    value: (
      await lSe(
        e,
        t.setAppState,
        !t.options.isNonInteractiveSession,
        t.storageV5,
      )
    ).message,
  };
}
export { f as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 214 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Mr, dU, bse } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { runFastModeToggle } from "../../01-核心基础设施/设置-配置/fast-mode.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
async function l(a, e) {
  if (!Mr())
    return { type: "text", value: dU() ?? "Fast mode is not available" };
  let t = a.trim().toLowerCase(),
    o;
  if (t === "on") o = !0;
  else if (t === "off") o = !1;
  else if (t === "") o = !e.options.fastMode;
  else
    return {
      type: "text",
      value: `Unknown argument "${t}". Use: /fast [on|off]`,
    };
  return {
    type: "text",
    value: await runFastModeToggle(
      e.session,
      o,
      e.getAppState,
      e.setAppState,
      "bridge",
      !e.options.isNonInteractiveSession,
      e.storageV5,
      () => bse(e.storageV5, e.credentials),
    ),
  };
}
export { l as call };

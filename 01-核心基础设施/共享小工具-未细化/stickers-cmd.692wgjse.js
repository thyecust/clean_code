// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "./chunk-h62vxw7j.js";
import "./chunk-510m1t2d.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "./chunk-w76kejwn.js";
import "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import "./chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../设置-配置/chunk-zqr5ctyf.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "./chunk-rsr7cnyv.js";
import "./chunk-0d0nn4ae.js";
import "../../02-功能模块/Git-Worktree/chunk-9ys1bnqr.js";
import "./chunk-twnwwsbr.js";
import "./chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "./chunk-kk7p3hsm.js";
import { Gr } from "../核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../核心工具-路径与平台/chunk-13kdp2ag.js";
async function s() {
  if (await Gr("https://www.stickermule.com/claudecode"))
    return { type: "text", value: "Opening sticker page in browser\u2026" };
  else
    return {
      type: "text",
      value:
        "Failed to open browser. Visit: https://www.stickermule.com/claudecode",
    };
}
export { s as call };

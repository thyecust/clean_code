// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { M } from "./chunk-h62vxw7j.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { X0n, t7t, n7t } from "./chunk-5ss8pwgq.js";
function Iv(e) {
  if (
    (t7t(a.CLAUDE_CODE_HOVER_REST ?? H("tengu_hover_rest", !1)), e === void 0)
  )
    return M() ? n7t() : void 0;
  return X0n(e);
}
export { Iv };

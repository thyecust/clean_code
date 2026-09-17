// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getMainLoopModel, getCanonicalName, H, ql } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
function o() {
  let e = ql()?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return H("tengu_pewter_owl_model", "");
}
function r(e) {
  if (a.CLAUDE_CODE_PEWTER_OWL !== void 0) return a.CLAUDE_CODE_PEWTER_OWL;
  if (ke()) return !1;
  let t = o();
  if (t !== "" && !getCanonicalName(getMainLoopModel()).includes(t)) return !1;
  return H(`tengu_${e}`, !1) || ql()?.[e] === !0;
}
function isPewterOwlTool() {
  if (a.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0)
    return a.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return r("pewter_owl_tool");
}
function isPewterOwlBrief() {
  return r("pewter_owl_brief");
}
export { isPewterOwlTool, isPewterOwlBrief };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { P } from "../核心工具-路径与平台/chunk-13kdp2ag.js";
function Mo() {
  let e = a.CLAUDE_CODE_HARBOR_KITE;
  if (e !== void 0) return Ie(e);
  if (P() === "windows" && !H("tengu_harbor_kite_win", !0)) return !1;
  return H("tengu_harbor_kite", !0);
}
function w$e() {
  return H("tengu_cuddly_willow", !0);
}
var NJe = "Cross-session messaging is not available in this session.";
export { Mo, w$e, NJe };

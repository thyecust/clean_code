// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ox } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getFeatureValue_CACHED_MAY_BE_STALE, getFeatureValue_CACHED_WITH_REFRESH } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { BRIEF_TOOL_NAME, LEGACY_BRIEF_TOOL_NAME } from "./chunk-q599wyee.js";
import { isPewterOwlTool, isPewterOwlBrief } from "./chunk-0qtt3z52.js";
var t = 300000;
function isBriefEntitled() {
  return a.CLAUDE_CODE_BRIEF || getFeatureValue_CACHED_WITH_REFRESH("tengu_kairos_brief", !1, t);
}
function shouldToolsListOptInToBrief(e) {
  if (!e.includes(BRIEF_TOOL_NAME) && !e.includes(LEGACY_BRIEF_TOOL_NAME)) return !1;
  if (isPewterOwlTool()) return !1;
  return isBriefEntitled();
}
function isBriefEnabled() {
  return (Ox() && isBriefEntitled()) || isPewterOwlBrief();
}
var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${BRIEF_TOOL_NAME} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function getBriefEnforceText() {
  let e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}
export { isBriefEntitled, shouldToolsListOptInToBrief, isBriefEnabled, getBriefEnforceText };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { getMcpToolPrefix } from "../设置-配置/设置-配置.aqbb35ee.js";
import { BRIEF_TOOL_NAME } from "./chunk-q599wyee.js";
import { SEND_USER_FILE_TOOL_NAME } from "../../02-功能模块/远程工具执行/chunk-a5errgr8.js";
import { compareToolNames, matchesAnyToolName } from "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import { isExemptToolDeniedByRule } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { partition, uniqBy, isMcpTool, isToolFromMcpServer, filterToolsForRemoteDevice } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { COORDINATOR_ALLOWED_TOOL_NAMES } from "../提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { isCoordinatorCommsMcpTool } from "./chunk-qg9n8r78.js";
import * as lazy_提示词_SystemPrompt_bt5gmcr2 from "../提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";

var p = new Set([BRIEF_TOOL_NAME, SEND_USER_FILE_TOOL_NAME]),
  T = ["subscribe_pr_activity", "unsubscribe_pr_activity"];
function c(o) {
  return T.some((t) => o.endsWith(t));
}
function withoutStaticMcpShadows(o, t) {
  if (t.length === 0) return o;
  let e = t.map((n) => [n, getMcpToolPrefix(n)]),
    r = o.filter((n) => !e.some(([l, i]) => isToolFromMcpServer(n, l, i)));
  return r.length === o.length ? o : r;
}
function f(o) {
  return !1;
}
var s = lazy_提示词_SystemPrompt_bt5gmcr2;
function applyCoordinatorToolFilter(o) {
  let t = a.CLAUDE_CODE_BRIEF,
    e = new Set(
      (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "")
        .split(",")
        .map((r) => r.trim())
        .filter(Boolean),
    );
  return o.filter(
    (r) =>
      COORDINATOR_ALLOWED_TOOL_NAMES.has(r.name) ||
      c(r.name) ||
      f(r) ||
      isCoordinatorCommsMcpTool(r) ||
      (t && p.has(r.name)) ||
      matchesAnyToolName(r, e),
  );
}
function mergeAndFilterTools(o, t, e, r) {
  let [n, l] = partition(filterToolsForRemoteDevice(uniqBy([...o, ...t], "name"), r), isMcpTool),
    i = [...l.sort(compareToolNames), ...n.sort(compareToolNames)];
  if (s) {
    if (s.isCoordinatorMode()) return applyCoordinatorToolFilter(i);
  }
  return i;
}
function stripSoleNonDeniableTool(o, t) {
  let e = o.length === 1 ? o[0] : void 0;
  if (e && isExemptToolDeniedByRule(t, e)) return [];
  return o;
}
export { withoutStaticMcpShadows, applyCoordinatorToolFilter, mergeAndFilterTools, stripSoleNonDeniableTool };

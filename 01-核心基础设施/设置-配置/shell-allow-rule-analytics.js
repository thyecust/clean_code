// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../遥测-OpenTelemetry/analytics-fields.js";
import { parsePermissionRule } from "../../02-功能模块/权限系统/permission-rule-parsing.js";
import { isDangerousBashPermission, isDangerousPowerShellPermission } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { BASH_TOOL_NAME, POWERSHELL_TOOL_NAME } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
var p = [
  "userSettings",
  "projectSettings",
  "localSettings",
  "flagSettings",
  "cliArg",
  "session",
];
function s(l) {
  if (l === BASH_TOOL_NAME) return BASH_TOOL_NAME;
  if (l === POWERSHELL_TOOL_NAME) return POWERSHELL_TOOL_NAME;
  return null;
}
function c(l, e) {
  let o = s(l);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === BASH_TOOL_NAME ? isDangerousBashPermission(o, e) : isDangerousPowerShellPermission(o, e)) ? "dangerous_prefix" : "scoped";
}
function y(l) {
  let e = {},
    o = 0;
  for (let r of p)
    for (let t of l[r] ?? []) {
      let { toolName: f, ruleContent: S } = parsePermissionRule(t),
        n = s(f);
      if (n === null) continue;
      let a = c(n, S);
      if (a === null) continue;
      let m = `${r}_${n}_${a}`;
      ((e[m] = (e[m] ?? 0) + 1), o++);
    }
  return ((e.total_shell_allow_rules = o), e);
}
function logShellAllowRulesAtInit(l) {
  logEvent("tengu_shell_allow_rules_at_init", y(l));
}
function logShellAllowRulesAdded(l) {
  for (let e of l) {
    if (e.type !== "addRules" || e.behavior !== "allow") continue;
    for (let o of e.rules) {
      let r = s(o.toolName);
      if (r === null) continue;
      let t = c(o.toolName, o.ruleContent);
      if (t === null) continue;
      logEvent("tengu_shell_allow_rule_added", {
        toolName: fromEnum(r),
        category: fromEnum(t),
        destination: fromEnum(e.destination),
      });
    }
  }
}
export { logShellAllowRulesAtInit, logShellAllowRulesAdded };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { transitionPermissionMode, isAutoModeGateEnabled, getAutoModeUnavailableReason } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isBypassPermissionsModeDisabled } from "./bypass-permissions-mode-policy.js";
function canCycleToAuto(e) {
  let o = isAutoModeGateEnabled(),
    t = !!e.isAutoModeAvailable && o;
  if (!t)
    logForDebugging(
      `[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${getAutoModeUnavailableReason()}`,
    );
  return t;
}
function canUseBypassPermissions(e) {
  return !!e.isBypassPermissionsModeAvailable && !isBypassPermissionsModeDisabled();
}
function getNextPermissionMode(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (canUseBypassPermissions(e)) return "bypassPermissions";
      if (canCycleToAuto(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (canCycleToAuto(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function buildPermissionModeTransition(e, o, t) {
  let s = getNextPermissionMode(e, o);
  return { nextMode: s, context: transitionPermissionMode(e.mode, s, e, t) };
}
export { canCycleToAuto, canUseBypassPermissions, getNextPermissionMode, buildPermissionModeTransition };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { transitionPermissionMode as Ik, isAutoModeGateEnabled as cC, getAutoModeUnavailableReason as eY } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isBypassPermissionsModeDisabled as ey } from "./chunk-pcxn6gwz.js";
function zL(e) {
  let o = cC(),
    t = !!e.isAutoModeAvailable && o;
  if (!t)
    n(
      `[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${eY()}`,
    );
  return t;
}
function uWe(e) {
  return !!e.isBypassPermissionsModeAvailable && !ey();
}
function dWe(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (uWe(e)) return "bypassPermissions";
      if (zL(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (zL(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function rZt(e, o, t) {
  let s = dWe(e, o);
  return { nextMode: s, context: Ik(e.mode, s, e, t) };
}
export { zL, uWe, dWe, rZt };

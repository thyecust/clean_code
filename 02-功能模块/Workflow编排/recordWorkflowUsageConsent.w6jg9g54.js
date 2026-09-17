// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 83 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isBgSession } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { updateSettingsForSource, hasSkipWorkflowUsageWarning } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { isUltracodeActive } from "../权限系统/chunk-t3b7pg2x.js";
import { getToolPermissionContext, getEffortValue, getUltracodeRequested } from "../权限系统/chunk-fjrcf22x.js";
import { WORKFLOW_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import { isTeammateWorker } from "../Teammates团队/permission-sync-mailbox.js";
function workflowNeedsUsageConsentPrompt(e, o) {
  if (e !== WORKFLOW_TOOL_NAME) return !1;
  if (o.options.isNonInteractiveSession) return !1;
  if (getToolPermissionContext(o).shouldAvoidPermissionPrompts) return !1;
  if (isBgSession()) return !1;
  if (isTeammateWorker()) return !1;
  if (isUltracodeActive(o.options.mainLoopModel, getEffortValue(o), getUltracodeRequested(o))) return !1;
  return !o.session.workflowUsageConsent.isGranted() && !hasSkipWorkflowUsageWarning();
}
async function recordWorkflowUsageConsent(e, o) {
  if ((e.grant(), hasSkipWorkflowUsageWarning())) return;
  let { error: r } = await updateSettingsForSource(
    "userSettings",
    { skipWorkflowUsageWarning: !0 },
    void 0,
    o,
  );
  if (r) {
    logForDebugging(`Failed to persist skipWorkflowUsageWarning: ${r.message}`, {
      level: "error",
    });
    return;
  }
  logEvent("tengu_workflow_usage_warning_accepted", {});
}
export {
  recordWorkflowUsageConsent,
  workflowNeedsUsageConsentPrompt,
};

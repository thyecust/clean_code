// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getExternalPermissionMode } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { getProactivityAdjustedPermissionMode, isInProcessTeammateTask } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function getPlanApprovalPermissionMode({
  recipientName: i,
  leaderMode: t,
  proactivityLevel: e,
  tasks: r,
}) {
  let n = s(i, r) ? t : getProactivityAdjustedPermissionMode(t, e),
    o = getExternalPermissionMode(n);
  return o === "plan" ? "default" : o;
}
function s(i, t) {
  return Object.values(t).some(
    (e) =>
      isInProcessTeammateTask(e) &&
      e.status === "running" &&
      e.identity.agentName === i &&
      e.paneTeardown === void 0 &&
      e.identity.resumableAgentId !== void 0,
  );
}
export { getPlanApprovalPermissionMode };

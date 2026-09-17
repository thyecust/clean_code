// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 211 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { MAX_WORKFLOW_SCRIPT_BYTES } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import "../编排-Workflow/workflow-runtime.js";
import "../../01-核心基础设施/核心工具-未归类/nondeterminism-check.js";
import "../编排-Workflow/workflow-script.js";
import { formatWorkflowErrorLine, getWorkflowDisabledReason, launchWorkflow } from "../编排-Workflow/remote-workflow-launch.js";
import "../../01-核心基础设施/核心工具-未归类/structured-output-retry-errors.js";
import "../../01-核心基础设施/核心工具-未归类/summarize-tool-input.js";
import "../../01-核心基础设施/核心工具-路径与平台/fd-real-path.js";
import { REMOTE_WORKFLOW_SCRIPT_ENV, REMOTE_WORKFLOW_ARGS_ENV } from "../编排-Workflow/workflow-registry.js";
import "../编排-Workflow/bundled-workflows.js";
function e(s, t) {
  return { type: "text", value: formatWorkflowErrorLine(s, t) };
}
var d = async (s, t) => {
  if (!a.CLAUDE_CODE_REMOTE)
    return e(
      "not-remote-session",
      "this command only runs inside a remote (CCR) session (CLAUDE_CODE_REMOTE is not set). Use the Workflow tool locally.",
    );
  let o = a.CLAUDE_REMOTE_WORKFLOW_SCRIPT;
  if (o === void 0 || o === "")
    return e(
      "env-missing",
      `${REMOTE_WORKFLOW_SCRIPT_ENV} is not set. This command is the deterministic entry point for sessions launched with an environment-delivered workflow script; it has no interactive use.`,
    );
  let i = getWorkflowDisabledReason();
  if (i) return e("policy-gate", i);
  let l,
    r = a.CLAUDE_REMOTE_WORKFLOW_ARGS;
  if (r !== void 0 && r !== "") {
    if (r.length > MAX_WORKFLOW_SCRIPT_BYTES)
      return e("args-too-large", `${REMOTE_WORKFLOW_ARGS_ENV} exceeds ${MAX_WORKFLOW_SCRIPT_BYTES} bytes.`);
    try {
      l = JSON.parse(r);
    } catch (n) {
      return e(
        "args-parse",
        `${REMOTE_WORKFLOW_ARGS_ENV} is not valid JSON: ${n instanceof Error ? n.message : String(n)}`,
      );
    }
  }
  return {
    type: "text",
    value: (
      await launchWorkflow({
        script: o,
        args: l,
        telemetrySource: "remote_env",
        context: t,
      })
    ).line,
  };
};
export { d as call };

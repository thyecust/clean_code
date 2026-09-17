// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 211 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Uh } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../Workflow编排/chunk-bkcg0nbj.js";
import "../../01-核心基础设施/共享小工具-未细化/nondeterminism-check.js";
import "../Workflow编排/workflow-script.js";
import { formatWorkflowErrorLine, getWorkflowDisabledReason, launchWorkflow } from "../Workflow编排/remote-workflow-launch.js";
import "../../01-核心基础设施/共享小工具-未细化/structured-output-retry-errors.js";
import "../../01-核心基础设施/共享小工具-未细化/summarize-tool-input.js";
import "../../01-核心基础设施/共享小工具-未细化/fd-real-path.js";
import { REMOTE_WORKFLOW_SCRIPT_ENV, REMOTE_WORKFLOW_ARGS_ENV } from "../Workflow编排/workflow-registry.js";
import "../../01-核心基础设施/共享小工具-未细化/bundled-workflows.js";
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
    if (r.length > Uh)
      return e("args-too-large", `${REMOTE_WORKFLOW_ARGS_ENV} exceeds ${Uh} bytes.`);
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

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 212 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import "./workflow-runtime.js";
import "../../01-核心基础设施/核心工具-未归类/nondeterminism-check.js";
import "./workflow-script.js";
import { workflowLaunchHandoffs } from "./workflow-launch.js";
import { launchWorkflow } from "./remote-workflow-launch.js";
import "../../01-核心基础设施/核心工具-未归类/structured-output-retry-errors.js";
import "../../01-核心基础设施/核心工具-未归类/summarize-tool-input.js";
import "../../01-核心基础设施/核心工具-路径与平台/fd-real-path.js";
import "./workflow-registry.js";
import "./bundled-workflows.js";
var i = async (n, t) => {
  let r = n.trim(),
    e = r ? workflowLaunchHandoffs.of(t.session.host).take(r) : void 0;
  if (!e)
    return (
      writeDiagnosticsEvent("info", "workflow_launch_exec_no_slot", {}),
      {
        type: "text",
        value:
          "workflow-launch-exec: no pending launch handoff for this invocation (expected when a restored session replays the dispatch turn); nothing executed.",
      }
    );
  let o = await launchWorkflow({
    script: e.script,
    args: e.args,
    telemetrySource: "remote_event",
    serverAuthoredCarrier: !0,
    context: t,
  });
  try {
    await e.onRunSettled(o.ok);
  } catch {
    writeDiagnosticsEvent("warn", "workflow_launch_settle_failed", {});
  }
  try {
    e.postResultLine(o.line);
  } catch {
    writeDiagnosticsEvent("warn", "workflow_launch_result_post_failed", {});
  }
  return { type: "text", value: o.line };
};
export { i as call };

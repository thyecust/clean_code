// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isReviewOriginSession } from "../认证-OAuth登录/credential-file-descriptors.js";
import { MAX_WORKFLOW_SCRIPT_BYTES, MAX_SERVER_AUTHORED_WORKFLOW_SCRIPT_BYTES, persistWorkflowScript } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { hasNoControlCharacters } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { areWorkflowsDisabledBySettings, isWorkflowsAllowedByPolicy } from "./workflow-feature-gates.js";
import { hasPermissionsToUseTool } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { compileWorkflowScript, sanitizeWorkflowNameForTelemetry, sanitizeWorkflowDescriptionForTelemetry, launchWorkflowTask } from "./workflow-runtime.js";
import { usesNondeterministicApi } from "../../01-核心基础设施/核心工具-未归类/nondeterminism-check.js";
import { parseWorkflowScript } from "./workflow-script.js";
import { getWorkflowTranscriptDir } from "./workflow-snapshots.js";
import { generateTaskId } from "../Teammates团队/chunk-mrfx53ye.js";
import { randomUUID } from "crypto";
var a = 1e5,
  W = 4000;
function D(t) {
  let o = t
    .replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ")
    .replaceAll("remote-workflow:", "remote-workflow;");
  if (o.length > W) o = `${truncateToCodeUnits(o, W)}\u2026[truncated]`;
  return o;
}
function formatWorkflowErrorLine(t, o) {
  return `remote-workflow: error[${t}]: ${D(o)}`;
}
function c(t) {
  let o = jsonStringify(t);
  return o === void 0
    ? void 0
    : o
        .replaceAll("\x85", "\\u0085")
        .replaceAll("\u2028", "\\u2028")
        .replaceAll("\u2029", "\\u2029");
}
function getWorkflowDisabledReason(t) {
  if (areWorkflowsDisabledBySettings())
    return "dynamic workflows are disabled for this session (managed settings `disableWorkflows`).";
  if (t?.serverAuthoredCarrier && isReviewOriginSession()) return null;
  if (!isWorkflowsAllowedByPolicy())
    return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null;
}
async function launchWorkflow({
  script: t,
  args: o,
  telemetrySource: d,
  serverAuthoredCarrier: h = !1,
  context: p,
}) {
  let s = (l, e) => ({ ok: !1, layer: l, line: formatWorkflowErrorLine(l, e) }),
    _ = getWorkflowDisabledReason({ serverAuthoredCarrier: h });
  if (_) return s("policy-gate", _);
  let w = h ? MAX_SERVER_AUTHORED_WORKFLOW_SCRIPT_BYTES : MAX_WORKFLOW_SCRIPT_BYTES;
  if (t.length > w)
    return s("script-too-large", `workflow script exceeds ${w} bytes.`);
  if (!hasNoControlCharacters(t))
    return s(
      "control-chars",
      "workflow script contains disallowed control characters.",
    );
  let n = parseWorkflowScript(t, { maxBytes: w });
  if ("error" in n)
    return s("meta-parse", `invalid workflow script: ${n.error}`);
  if (usesNondeterministicApi(n.scriptBody))
    return s(
      "nondeterminism",
      "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.",
    );
  let k = compileWorkflowScript(n.scriptBody);
  if (!k.ok) return s("compile", `workflow script compile failed: ${k.error}`);
  let f = `wf_${randomUUID().slice(0, 12)}`,
    y = generateTaskId("local_workflow"),
    x = persistWorkflowScript(n.meta.name, f, t, p.storageV5),
    C = sanitizeWorkflowNameForTelemetry(n.meta.name, void 0, !1),
    R = sanitizeWorkflowDescriptionForTelemetry(n.meta.description, void 0, !1);
  logEvent("tengu_workflow_launched", {
    invocation_mode: fromEnum(d),
    workflow_source: fromEnum(d),
    phase_count: n.meta.phases?.length ?? 0,
    launched_from_subagent: !1,
    has_args: o != null,
    is_resume: !1,
    script_size_chars: t.length,
  });
  let r = await new Promise((l) => {
    launchWorkflowTask({
      taskId: y,
      workflowRunId: f,
      script: t,
      scriptPath: x,
      args: o,
      meta: n.meta,
      vmScript: k.vmScript,
      toolUseContext: p,
      canUseTool: p.canUseTool ?? hasPermissionsToUseTool,
      toolUseId: void 0,
      transcriptDir: getWorkflowTranscriptDir(f),
      telemetry: {
        source: d,
        name: C,
        description: R,
        scriptIsVerbatimBuiltIn: !1,
      },
      isResume: !1,
      onSettled: l,
      suppressCompletionNotification: !0,
    });
  });
  switch (r.status) {
    case "completed": {
      let l = {
          status: "completed",
          workflowName: n.meta.name,
          runId: f,
          agentCount: r.agentCount,
          durationMs: r.durationMs,
          failures: r.failures,
          result: r.result,
        },
        e = c(l);
      if (e === void 0 || e.length > a) {
        let S =
            e === void 0
              ? "not serializable"
              : `${e.length} chars exceeds ${a}`,
          m = r.failures
            .slice(0, 20)
            .map((g) =>
              g.length > 500 ? `${truncateToCodeUnits(g, 500)}\u2026[truncated]` : g,
            );
        if (r.failures.length > m.length)
          m.push(
            `\u2026and ${r.failures.length - m.length} more failures omitted`,
          );
        if (((e = c({ ...l, failures: m })), e === void 0 || e.length > a))
          e = c({
            ...l,
            failures: [
              `<${r.failures.length} failures omitted: diagnostics never outrank the result payload>`,
            ],
          });
        if (e === void 0 || e.length > a)
          e = c({ ...l, failures: m, result: `<result omitted: ${S}>` });
        if (e === void 0 || e.length > a)
          e =
            c({
              status: "completed",
              workflowName: truncateToCodeUnits(String(n.meta.name), 200),
              runId: f,
              agentCount: r.agentCount,
              durationMs: r.durationMs,
              failures: [
                `<${r.failures.length} failures omitted: fallback exceeded ${a}>`,
              ],
              result: `<result omitted: ${S}>`,
            }) ?? '{"status":"completed"}';
      }
      return {
        ok: !0,
        line: `remote-workflow: ${e}`,
        workflowName: n.meta.name,
      };
    }
    case "failed":
      return s(
        "workflow-failed",
        `workflow failed after ${r.durationMs}ms (${r.agentCount} agents): ${r.error}`,
      );
    case "killed":
      return s("killed", "workflow was aborted before completion.");
    case "adopted":
    case "unknown":
      return s(
        "unexpected-state",
        `workflow ended in unexpected state '${r.status}'.`,
      );
  }
}
export { formatWorkflowErrorLine, getWorkflowDisabledReason, launchWorkflow };

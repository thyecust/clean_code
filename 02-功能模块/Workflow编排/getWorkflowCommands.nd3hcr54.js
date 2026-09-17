// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 209 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { areWorkflowsEnabled, shouldSkipWorkflowWarmup } from "../../01-核心基础设施/共享小工具-未细化/workflow-feature-gates.js";
import "./workflow-script.js";
import { isWorkflowAuthoringSkillAvailable } from "../../01-核心基础设施/共享小工具-未细化/is-workflow-authoring-skill-available.js";
import { getAllWorkflows, clearWorkflowCaches as v1t } from "./workflow-registry.js";
import "../../01-核心基础设施/共享小工具-未细化/bundled-workflows.js";
import { WORKFLOW_AUTHORING_SKILL_NAME } from "../../01-核心基础设施/共享小工具-未细化/bundled-skill-names.js";
async function warmWorkflows(o, n) {
  if (shouldSkipWorkflowWarmup()) return;
  await getAllWorkflows(o, n);
}
function m(o) {
  return {
    type: "prompt",
    name: o.name,
    description: o.description,
    hasUserSpecifiedDescription: !0,
    whenToUse: o.whenToUse,
    progressMessage: "running dynamic workflow",
    contentLength: o.script.length,
    source: o.source === "built-in" ? "bundled" : o.source,
    loadedFrom:
      o.source === "built-in"
        ? "bundled"
        : o.source === "plugin"
          ? "plugin"
          : "skills",
    ...(o.source === "plugin" && {
      pluginInfo: {
        pluginManifest: o.pluginManifest,
        repository: o.plugin,
        ...(o.serverPluginId !== void 0 && {
          serverPluginId: o.serverPluginId,
        }),
      },
    }),
    kind: "workflow",
    disableModelInvocation:
      typeof o.disableModelInvocation === "function"
        ? o.disableModelInvocation()
        : o.disableModelInvocation,
    async getPromptForCommand(n, t) {
      let s = o.phases
          ? `

Phases:
` +
            o.phases.map(
              (r) => `- ${r.title}${r.detail ? `: ${r.detail}` : ""}`,
            ).join(`
`)
          : "",
        e = n.trim(),
        i = b(o.name),
        a = e ? `{ name: ${i}, args: ${b(e)} }` : `{ name: ${i} }`,
        l = isWorkflowAuthoringSkillAvailable(t?.options?.tools)
          ? `

If the user asks you to modify this workflow or write a new script, load the \`${WORKFLOW_AUTHORING_SKILL_NAME}\` skill first.`
          : "";
      return [
        {
          type: "text",
          text: `Run the "${o.name}" workflow.

${o.description}${
            o.whenToUse
              ? `

${o.whenToUse}`
              : ""
          }${s}

Invoke: Workflow(${a})${l}`,
        },
      ];
    },
  };
}
async function getWorkflowCommands(o, n) {
  if (!areWorkflowsEnabled()) return [];
  return (await getAllWorkflows(o, n)).map(m);
}
export {
  getWorkflowCommands,
  v1t as invalidateWorkflowCache,
  warmWorkflows,
};

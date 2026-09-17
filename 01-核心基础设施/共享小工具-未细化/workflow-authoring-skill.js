// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { WORKFLOW_TOOL_NAME } from "./chunk-7fcxwgtq.js";
import { pin } from "../../02-功能模块/Workflow编排/chunk-w0pgmfvw.js";
import { Dc } from "./chunk-15vfjgmh.js";
import { registerBundledSkill } from "../../02-功能模块/Skills技能/chunk-1zy5c8mf.js";
import { $E } from "./chunk-c822xsqz.js";
function renderWorkflowAuthoringSkillBody() {
  return [{ type: "text", text: pin() }];
}
function registerWorkflowAuthoringSkill() {
  registerBundledSkill({
    name: $E,
    description: `Reference for writing a ${WORKFLOW_TOOL_NAME} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,
    menuDescription: "Load the reference for writing Workflow tool scripts",
    userInvocable: !0,
    isEnabled: () => Dc(),
    async getPromptForCommand() {
      return renderWorkflowAuthoringSkillBody();
    },
  });
}
export { renderWorkflowAuthoringSkillBody, registerWorkflowAuthoringSkill };

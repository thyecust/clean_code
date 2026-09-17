// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getHostStateStore } from "../../01-核心基础设施/文件存储-原子写入/host-state-store.js";
import { areBundledSkillsDisabled } from "../Skills技能/disable-bundled-skills.js";
function registerBundledWorkflow(o, e, r) {
  getHostStateStore().bundledWorkflows.push({
    source: "built-in",
    ...e,
    script: o,
    disableModelInvocation: r?.disableModelInvocation,
  });
}
function getBundledWorkflows() {
  if (areBundledSkillsDisabled()) return [];
  return getHostStateStore().bundledWorkflows;
}
export { registerBundledWorkflow, getBundledWorkflows };

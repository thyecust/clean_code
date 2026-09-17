// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Rg, K1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { getInitialSettings } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { getSessionFeatureCache } from "../../02-功能模块/Hooks钩子/session-feature-cache.js";
import { areWorkflowsEnabled } from "./workflow-feature-gates.js";
import { SKILL_TOOL_NAME } from "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import { matchesToolName } from "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import { WORKFLOW_AUTHORING_SKILL_NAME } from "./bundled-skill-names.js";
import { areBundledSkillsDisabled } from "./disable-bundled-skills.js";
function isWorkflowAuthoringSkillAvailable(o) {
  let l = getSessionFeatureCache();
  return (
    (l.workflowAuthoringSkillAvailable ??= e()),
    l.workflowAuthoringSkillAvailable && (o === void 0 || i(o))
  );
}
function e() {
  if (!areWorkflowsEnabled()) return !1;
  if (areBundledSkillsDisabled() || Rg()) return !1;
  if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = getInitialSettings().skillOverrides?.[WORKFLOW_AUTHORING_SKILL_NAME];
  if (o === "off" || o === "user-invocable-only") return !1;
  let l = K1();
  if (l !== void 0 && !l.includes(WORKFLOW_AUTHORING_SKILL_NAME)) return !1;
  return !0;
}
function i(o) {
  return o.some((l) => matchesToolName(l, SKILL_TOOL_NAME));
}
export { isWorkflowAuthoringSkillAvailable };

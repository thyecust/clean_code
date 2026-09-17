// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 80 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { s3t, aYn } from "../Hooks钩子/chunk-z3433nr6.js";
import { zo } from "../MCP客户端/chunk-3kmsshb6.js";
import { SKILL_MD } from "../../01-核心基础设施/共享小工具-未细化/chunk-ngp4wa3z.js";
import { defineExportGetters } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var s = {};
defineExportGetters(s, {
  SKILL: () => SKILL,
  SKILL_MD: () => SKILL_MD,
  SKILL_NAME: () => SKILL_NAME,
  default: () => s,
  isAvailable: () => isAvailable,
  registerPlugin: () => registerPlugin,
  skillPromptOf: () => skillPromptOf,
});
var isAvailable = () => s3t();
var SKILL_NAME = "plugin-authoring";
function skillPromptOf(t, o) {
  let m = zo(
    t.replace(
      /\r\n/g,
      `
`,
    ),
  ).content.trim();
  return o.trim() === ""
    ? m
    : `${m}

## User Request

${o}`;
}
var SKILL = Object.freeze({
  name: SKILL_NAME,
  description:
    "Write or debug a Claude Code plugin made of function hooks (a hooks module exporting register(on, options), hooks ($, e, next) on events like tool.call, prompt.submit, ui.render, session.start). Load it before writing or changing such a plugin; it says where the exact types come from, how to run a plugin under development, and where the engine reports what it refused.",
  menuDescription: "Write a plugin made of function hooks",
  userInvocable: !0,
  async getPromptForCommand(t) {
    let { SKILL_MD: o } = await import("../../01-核心基础设施/共享小工具-未细化/chunk-ngp4wa3z.js");
    return [{ type: "text", text: skillPromptOf(o, t) }];
  },
});
var registerPlugin = () =>
  aYn({
    name: "plugin-authoring",
    description:
      "Plugin authoring: Claude knows how a plugin of function hooks is written, typed and debugged against this build",
    isAvailable: isAvailable,
    skills: [SKILL],
  });
export {
  SKILL,
  SKILL_MD,
  SKILL_NAME,
  s as default,
  isAvailable,
  registerPlugin,
  skillPromptOf,
};

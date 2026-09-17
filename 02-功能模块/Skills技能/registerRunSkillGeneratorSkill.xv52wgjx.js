// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 101 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { zo } from "../MCP客户端/chunk-3kmsshb6.js";
import { registerBundledSkill } from "./chunk-1zy5c8mf.js";
var n =
  "Author or improve the run-<unit> skill - a per-project skill that tells agents how to build, launch, and drive this project's app. Use when the user asks to set up the project, get it running, write run instructions, or verify build/run steps work from a clean environment.";
function registerRunSkillGeneratorSkill() {
  registerBundledSkill({
    name: "run-skill-generator",
    menuDescription:
      "Create a skill that knows how to run this project\u2019s app",
    description: n,
    userInvocable: !0,
    disableModelInvocation: !0,
    files: async () => {
      let [{ TEMPLATE_MD: t }, { RUN_EXAMPLE_FILES: e }] = await Promise.all([
        import("./SKILL_MD.gbxxyvxk.js"),
        import("../../01-核心基础设施/共享小工具-未细化/RUN_EXAMPLE_FILES.gz0wcr9k.js"),
      ]);
      return { "template.md": t, ...e };
    },
    async getPromptForCommand(t) {
      let { SKILL_MD: e } = await import("./SKILL_MD.gbxxyvxk.js"),
        r = [zo(e).content.trimStart()];
      if (t)
        r.push(`## User Request

${t}`);
      return [
        {
          type: "text",
          text: r.join(`

`),
        },
      ];
    },
  });
}
export { registerRunSkillGeneratorSkill };

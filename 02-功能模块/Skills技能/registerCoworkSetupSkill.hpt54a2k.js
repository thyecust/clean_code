// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 101 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { registerBundledSkill } from "./chunk-1zy5c8mf.js";
var i =
  "Guided setup \u2014 pick a role, install a matching plugin, try a skill, connect tools. Use when: set up claude, setup claude, set up cowork, setup cowork, get started with claude, claude onboarding.";
function registerCoworkSetupSkill() {
  registerBundledSkill({
    name: "setup-claude",
    aliases: ["setup-cowork"],
    description: i,
    menuDescription:
      "Guided setup \u2014 pick a role, install a plugin, try a skill, connect tools",
    userInvocable: !0,
    isEnabled: () => a.CLAUDE_CODE_ENTRYPOINT === "remote_cowork",
    async getPromptForCommand(o) {
      let { SETUP_COWORK_PROMPT: r } = await import("../插件系统/aliases.gr2t28mj.js"),
        t = [r.trimStart()],
        e = o?.trim();
      if (e)
        t.push(`## User Request

${e}`);
      return [
        {
          type: "text",
          text: t.join(`

`),
        },
      ];
    },
  });
}
export { registerCoworkSetupSkill };

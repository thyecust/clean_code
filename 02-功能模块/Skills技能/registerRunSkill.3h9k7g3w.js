// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 101 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { zo } from "../MCP客户端/chunk-3kmsshb6.js";
import { eo } from "./chunk-1zy5c8mf.js";
function r() {
  return import("../../01-核心基础设施/共享小工具-未细化/RUN_EXAMPLE_FILES.gz0wcr9k.js");
}
var o =
  "Launch and drive this project's app to see a change working. Use when asked to run, start, or screenshot the app, or to confirm a change works in the real app (not just tests). First looks for a project skill that already covers launching the app; otherwise falls back to built-in patterns per project type (CLI, server, TUI, Electron, browser-driven, library).";
function a() {
  eo({
    name: "run",
    menuDescription:
      "Launch this project\u2019s app to see your change working",
    description: o,
    userInvocable: !0,
    files: () => r().then((t) => t.RUN_EXAMPLE_FILES),
    async getPromptForCommand(t) {
      let { SKILL_MD: n } = await r(),
        e = [zo(n).content.trimStart()];
      if (t)
        e.push(`## User Request

${t}`);
      return [
        {
          type: "text",
          text: e.join(`

`),
        },
      ];
    },
  });
}
export { a as registerRunSkill };

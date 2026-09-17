// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 98 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sQ, isUsing3PServices as k6, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ft } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { getSettings_DEPRECATED as bn } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { tWe, Qst, s$n } from "../发布日志-Changelog/发布日志-Changelog.2nyyps5n.js";
import { registerBundledSkill as eo } from "../Skills技能/chunk-1zy5c8mf.js";
import { SSt } from "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
function v() {
  return import("./SKILL_PROMPT.6yeyjf7j.js");
}
var S = "claude-code-docs",
  A = `Answer questions about Claude Code itself: commands, flags, settings, hooks, skills, MCP servers, subagents, IDE integrations, sandboxing, deployment, and Claude Tag (Claude in Slack). Verifies against the running build before recommending any command, flag, or setting.
`,
  E =
    A +
    `TRIGGER when: user asks how Claude Code works ("Can Claude\u2026", "Does Claude\u2026", "How do I\u2026", "Is there a way to\u2026"); user asks about a slash command, CLI flag, settings key, hook, skill, MCP server, subagent, keybinding, or .claude/ directory; user wants to configure, customize, or troubleshoot Claude Code; user asks about Claude in Slack or Claude Tag ("what is Claude Tag", "can Claude live in Slack", "@Claude in Slack", "/install-slack-app", "set up Claude for my Slack workspace"); YOU are about to recommend a Claude Code slash command, flag, or setting and have not verified it exists in this build.
` +
    "SKIP: questions about building applications with the Claude API or Anthropic SDK (use /claude-api), general programming questions, questions about the user's own codebase.";
function I(a, s) {
  let n = [],
    o = a.options.commands.filter((e) => !e.isHidden),
    r = (e) =>
      e.type !== "prompt" || e.source === "builtin" || e.source === "bundled",
    u = o.filter(r);
  if (u.length > 0) {
    let e = u
      .map((t) => {
        let d = t.aliases?.length
          ? ` (aliases: ${t.aliases.map((m) => `/${m}`).join(", ")})`
          : "";
        return `- /${t.name}${d}: ${t.description}`;
      })
      .sort();
    n.push(`**Available commands (${u.length} in this build):**
${e.join(`
`)}`);
  }
  let g = s$n();
  n.push(
    `**\`claude plugin\` CLI subcommands (${g.length} available in this session; run from a shell, not the prompt):**
` +
      g.map(
        (e) =>
          `- claude ${e.usage}${e.aliases ? ` (aliases: ${e.aliases.join(", ")})` : ""}: ${e.description}`,
      ).join(`
`),
  );
  let p = SSt(),
    k = p.enabled
      ? " For any question about it \u2014 enablement, authoring cases, graders, flags, the results JSON, the report, the sandbox, CI, troubleshooting \u2014 or about `/skill-doctor`, read `references/plugin-eval-quickref.md`, then the matching section of `references/plugin-eval.md`; they are the offline floor and there is no public docs page yet."
      : "";
  n.push(`**Plugin eval:** ${p.text}${k}`);
  let h = o.filter((e) => !r(e));
  if (h.length > 0) {
    let e = h.map((t) => `- /${t.name}: ${t.description}`).sort();
    n.push(`**Custom skills configured:**
${e.join(`
`)}`);
  }
  let f = a.options.agentDefinitions.activeAgents.filter(
    (e) => e.source !== "built-in",
  );
  if (f.length > 0) {
    let e = f.map((t) => `- ${t.agentType}: ${t.whenToUse}`).sort();
    n.push(`**Custom agents configured:**
${e.join(`
`)}`);
  }
  let c = a.options.mcpClients;
  if (c && c.length > 0) {
    let e = c.map((t) => `- ${t.name}`).sort();
    n.push(`**Configured MCP servers:**
${e.join(`
`)}`);
  }
  let C = Object.keys(bn()).sort();
  if (C.length > 0)
    n.push(
      `**Settings keys configured (values omitted):** ${C.join(", ")}. To see values, the user can run \`claude config list\` or open \`~/.claude/settings.json\`.`,
    );
  let y = ft(
      {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      "-",
    ),
    b = Qst(s)
      .filter(([e]) => sQ(e, y))
      .slice(-10)
      .reverse();
  if (b.length > 0) {
    let e = b.map(
      ([t, d]) =>
        `### ${t}
` +
        d.map((m) => `- ${m}`).join(`
`),
    );
    n.push(`**Recent releases (you are running v${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}):**
${e.join(`

`)}`);
  }
  if (k6())
    n.push(
      "**Provider context:** This session is not using Anthropic's first-party API. WebSearch may be unavailable, `/feedback` is unavailable, and some features behave differently \u2014 check the docs page for the user's specific provider. Direct issues to https://github.com/anthropics/claude-code/issues.",
    );
  return n.join(`

`);
}
function P(a, s, n, l) {
  let o = [a],
    r = I(n, l);
  if (
    (o.push(`---

# Current Build

Generated from the running Claude Code binary at invocation time. This is ground truth \u2014 it overrides your training data and any documentation when they disagree about what exists in this build.

${r}`),
    s.trim())
  )
    o.push(`---

## User Request

${s}`);
  return o.join(`

`);
}
function U({ disabled: a = !1 } = {}) {
  eo({
    name: S,
    menuDescription: "Answer questions about Claude Code features and settings",
    description: E,
    allowedTools: ["Read", "Grep", "Glob", "WebFetch"],
    argumentHint: "[question]",
    userInvocable: !0,
    files: () => v().then((s) => s.SKILL_FILES),
    isEnabled() {
      return !a && H("tengu_birch_kettle", !1);
    },
    async getPromptForCommand(s, n) {
      i("tengu_claude_code_skill_loaded", { has_args: s.trim().length > 0 });
      let [l, { SKILL_PROMPT: o }] = await Promise.all([tWe(n.storageV5), v()]);
      return [{ type: "text", text: P(o, s, n, l) }];
    },
  });
}
export { U as registerClaudeCodeSkill };

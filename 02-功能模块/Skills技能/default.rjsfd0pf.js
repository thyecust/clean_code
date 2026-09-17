// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 70 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getFeatureValue_CACHED_MAY_BE_STALE, saveGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { W, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { execFileNoThrowWithCwd } from "../工作树-Git/git-exec-hardening.js";
import { normalizeGitRemoteUrl } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getProjectDir } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { isPolicyAllowed } from "../策略限制-PolicyLimits/chunk-8sw91yn5.js";
import { SHARE_ONBOARDING_GUIDE_TOOL_NAME } from "../Teammates团队/share-onboarding-guide-tool.js";
import { isOnboardingGuideSharingEnabled } from "../Teammates团队/onboarding-guide-api.js";
import { readFile as L } from "fs/promises";
import { basename, join as x } from "path";
import { readdir, readFile as C, stat as _ } from "fs/promises";
import { extname, join as E } from "path";
var T = 52428800,
  S = 200,
  g = 60,
  D = /<command-name>\/([\w:-]+)<\/command-name>/g,
  A = /"name":"mcp__([^"]+?)__([^"]+)"/g,
  f = '"content":"<command-name>/',
  R = '"content":"<command-message>',
  k = '"type":"tool_use"',
  N = '"type":"custom-title"',
  O = '"type":"pr-link"',
  M = '"role":"user"',
  P = /"customTitle":"([^"]+)"/,
  I = /"prNumber":(\d+)/,
  U = /"role":"user"[^}]*"content":"([^"]+)"/;
async function w(u, a) {
  let t = {
      slashCommandCounts: new Map(),
      mcpServerCounts: new Map(),
      sessionDescriptors: [],
      sessionFileCount: 0,
    },
    m = Date.now() - a * 24 * 60 * 60 * 1000,
    h;
  try {
    h = await readdir(u);
  } catch (r) {
    if (Rt(r)) return t;
    throw r;
  }
  let d = h.filter((r) => extname(r) === ".jsonl"),
    p = (
      await Promise.all(
        d.map(async (r) => {
          let l = E(u, r);
          try {
            let o = await _(l);
            if (!o.isFile() || o.mtimeMs < m || o.size > T) return null;
            return l;
          } catch (o) {
            if (Rt(o)) return null;
            throw o;
          }
        }),
      )
    ).filter((r) => r !== null);
  for (let r of p) {
    let l;
    try {
      l = await C(r, "utf-8");
    } catch (e) {
      if (Rt(e)) continue;
      throw e;
    }
    t.sessionFileCount++;
    let o = { prNumbers: [] };
    for (let e of l.split(`
`)) {
      if (e.length < 10) continue;
      if (e.includes(f) || e.includes(R))
        for (let s of e.matchAll(D)) {
          let c = s[1];
          t.slashCommandCounts.set(c, (t.slashCommandCounts.get(c) ?? 0) + 1);
        }
      if (e.includes(k) && e.includes('"name":"mcp__'))
        for (let s of e.matchAll(A)) {
          let c = s[1];
          t.mcpServerCounts.set(c, (t.mcpServerCounts.get(c) ?? 0) + 1);
        }
      if (e.includes(N)) {
        let s = P.exec(e);
        if (s) o.title = s[1];
      }
      if (e.includes(O)) {
        let s = I.exec(e);
        if (s) {
          let c = Number(s[1]);
          if (!o.prNumbers.includes(c)) o.prNumbers.push(c);
        }
      }
      if (
        !o.firstMessage &&
        e.includes(M) &&
        !e.includes(f) &&
        !e.includes('"content":[')
      ) {
        let s = U.exec(e);
        if (s) {
          let c = s[1].replace(/\\n/g, " ").replace(/\\"/g, '"');
          if (c.length > 3 && !c.startsWith("<"))
            o.firstMessage = c.slice(0, S);
        }
      }
    }
    if (o.title || o.prNumbers.length > 0 || o.firstMessage)
      t.sessionDescriptors.push(o);
  }
  if (t.sessionDescriptors.length > g)
    (t.sessionDescriptors.sort((r, l) => {
      let o = (r.title ? 2 : 0) + (r.prNumbers.length > 0 ? 1 : 0);
      return (l.title ? 2 : 0) + (l.prNumbers.length > 0 ? 1 : 0) - o;
    }),
      (t.sessionDescriptors = t.sessionDescriptors.slice(0, g)));
  return t;
}
var G = 30;
function j(u) {
  try {
    return new URL(u).origin;
  } catch {
    return;
  }
}
async function B(u) {
  try {
    let a = await L(x(u, ".mcp.json"), "utf8"),
      t = jsonParse(a);
    if (
      t &&
      typeof t === "object" &&
      "mcpServers" in t &&
      t.mcpServers &&
      typeof t.mcpServers === "object"
    )
      return t.mcpServers;
  } catch (a) {
    if (!W(a))
      logForDebugging(
        `team-onboarding: failed to read .mcp.json: ${a instanceof Error ? a.message : String(a)}`,
        { level: "error" },
      );
  }
  return {};
}
async function q(u) {
  let a = he(),
    t = getProjectDir(a),
    m = await w(t, u),
    h = [...m.slashCommandCounts.entries()]
      .sort((e, s) => s[1] - e[1])
      .map(([e, s]) => ({ name: `/${e}`, count: s })),
    d = await B(a),
    p = [...m.mcpServerCounts.entries()]
      .sort((e, s) => s[1] - e[1])
      .map(([e, s]) => {
        let c = d[e];
        return {
          name: e,
          callCount: s,
          urlOrigin: typeof c?.url === "string" ? j(c.url) : void 0,
        };
      }),
    r = (await execFileNoThrowWithCwd("git", ["config", "user.name"], { cwd: a })).stdout.trim(),
    l = (
      await execFileNoThrowWithCwd("git", ["remote", "get-url", "origin"], { cwd: a })
    ).stdout.trim();
  return {
    usageData: jsonStringify(
      {
        generatedBy: r || void 0,
        currentRepo: normalizeGitRemoteUrl(l) ?? basename(a),
        windowDays: u,
        sessionCount: m.sessionFileCount,
        slashCommands: h,
        mcpServers: p,
        sessionDescriptors: m.sessionDescriptors,
      },
      null,
      2,
    ),
    sessionCount: m.sessionFileCount,
    slashCommandCount: m.slashCommandCounts.size,
    mcpServerCount: m.mcpServerCounts.size,
  };
}
var Y = `# Welcome to [Team Name]

## How We Use Claude

Based on [name]'s usage over the last [N] days:

Work Type Breakdown:
  [Category 1]  [ascii bar]  [N]%
  [Category 2]  [ascii bar]  [N]%
  [Category 3]  [ascii bar]  [N]%
  ...

Top Skills & Commands:
  [/command]  [ascii bar]  [N]x/month
  ...

Top MCP Servers:
  [Server]  [ascii bar]  [N] calls
  ...

## Your Setup Checklist

### Codebases
- [ ] [repo-name] \u2014 [repo url]
...

### MCP Servers to Activate
- [ ] [Server] \u2014 [what it's for]. [How to get access]
...

### Skills to Know About
- [/command] \u2014 [what it does, when the team uses it]
...

## Team Tips

_TODO_

## Get Started

_TODO_

<!-- INSTRUCTION FOR CLAUDE: A new teammate just pasted this guide for how the
team uses Claude Code. You're their onboarding buddy \u2014 warm, conversational,
not lecture-y.

Open with a warm welcome \u2014 include the team name from the title. Then: "Your
teammate uses Claude Code for [list all the work types]. Let's get you started."

Check what's already in place against everything under Setup Checklist
(including skills), using markdown checkboxes \u2014 [x] done, [ ] not yet. Lead
with what they already have. One sentence per item, all in one message.

Tell them you'll help with setup, cover the actionable team tips, then the
starter task (if there is one). Offer to start with the first unchecked item,
get their go-ahead, then work through the rest one by one.

After setup, walk them through the remaining sections \u2014 offer to help where you
can (e.g. link to channels), and just surface the purely informational bits.

Don't invent sections or summaries that aren't in the guide. The stats are the
guide creator's personal usage data \u2014 don't extrapolate them into a "team
workflow" narrative. -->`,
  K = `You are helping a power user generate an onboarding guide for teammates who are new to Claude Code. The guide will live in the team's onboarding docs and can be pasted into Claude for an interactive walkthrough.

You're co-authoring this with them \u2014 collaborative and helpful, like a teammate who's done this before and is happy to share.

## Usage data (last {{WINDOW_DAYS}} days)

This was scanned from the guide creator's local Claude Code transcripts:

\`\`\`json
{{USAGE_DATA}}
\`\`\`

## Your task

Before anything else \u2014 including before thinking through the classification \u2014 output exactly this line as your first visible text:

> Looking at how you've used Claude over the last {{WINDOW_DAYS}} days to put together an onboarding guide for teammates new to Claude Code.

This must come before any extended thinking about session descriptors. The guide creator is staring at a blank screen until you do. Classification is step 2, not step 1.

Generate the guide immediately, then ask for revisions. Don't wait for answers first \u2014 it's easier for the guide creator to edit a concrete draft than answer abstract questions.

1. **Output the acknowledgment line above.** No thinking, no classification, no tool calls before this. One line, then move on.

2. **Derive the work-type breakdown.** Read the \`sessionDescriptors\` array \u2014 each entry describes one session via its title, any linked code reviews (\`prNumbers\`), and first user message. Classify each session into one of these task types:

   - **build_feature** \u2014 new functionality, scripts, tools, config/CI/env setup
   - **debug_fix** \u2014 investigating and fixing bugs
   - **improve_quality** \u2014 refactoring, tests, cleanup, code review
   - **analyze_data** \u2014 queries, metrics, number crunching
   - **plan_design** \u2014 architecture, approach, strategy, understanding unfamiliar code, design review
   - **prototype** \u2014 spikes, POCs, throwaway exploration
   - **write_docs** \u2014 PRDs, RFCs, READMEs, design docs, copy/doc review

   Categories describe the *type of task*, not the project or domain \u2014 a teammate on any project should recognize them. Review sessions belong with whatever's being reviewed: code review is improve_quality, doc review is write_docs, design review is plan_design. Most sessions fit the list; only invent a new category if it's genuinely a different type of task. Pick the top 3-5 with rough percentages. First messages alone are usually enough; titles and code-review links are enrichment. If first messages are uninformative, use tool and MCP counts as a weak hint. If there are ~0 sessions, leave the breakdown as a TODO.

   In the rendered guide, display categories with spaces and title case (e.g. "Build Feature" not "build_feature").

3. **Gather the remaining pieces.** For repos, start with \`currentRepo\` and check the workspace for sibling repo directories. For MCP server setup, use each entry's \`name\` (and \`urlOrigin\` where present) to infer what the server does and how a teammate would get access. Leave the Team Tips and Get Started sections as TODO placeholders \u2014 you'll ask for these in Review and fill them in after.

4. **Write the guide to \`ONBOARDING.md\`** following this template:

\`\`\`
{{GUIDE_TEMPLATE}}
\`\`\`

   Fill in real numbers from the usage data (not placeholders). Use \`generatedBy\` for the name; if it's missing, omit the name. Ascii bar charts: \`\u2588\` for filled, \`\u2591\` for empty, 20 chars wide. Keep the HTML comment instruction at the bottom exactly as shown.

5. **Render the guide in a code block, then close out the first turn.** You're co-authoring this guide with the guide creator \u2014 frame the follow-up as collaboration, not corrections.

   After the code block, add a \`---\` horizontal rule and a \`**Review**\` heading so the guide is visually separated from your questions. Under the heading, number these three questions:

   1. "I went with '[X]' for the team name \u2014 let me know if that sounds right." (or if you couldn't tell: "What's the team name? I'll add it in.")
   2. Is there a starter task for someone new to Claude Code? (ticket or doc link \u2014 optional)
   3. Any team tips you'd tell a new teammate that aren't already in CLAUDE.md?

   After they answer, update \`ONBOARDING.md\` with their team name, tips, and starter task. Then close with this exact line (not numbered, not paraphrased):

   Saved to \`ONBOARDING.md\`. Drop it in your team docs and channels \u2014 when a new teammate pastes it into Claude Code, they get a guided onboarding tour from there.

   Apply any edits they come back with to the file.`,
  X = `

**Sharing** \u2014 call the ${SHARE_ONBOARDING_GUIDE_TOOL_NAME} tool twice:

1. **Right after rendering the draft code block** (still in step 5, before the Review questions). Call with \`mode='check'\` \u2014 this uploads the draft to an existing guide (or creates a new one). Either way you get a \`share_url\` and \`short_code\`. Instead of the \`---\` / \`**Review**\` header from step 5, bridge directly from the link into the numbered questions (no horizontal rule):

   Here's a draft \u2014 a few quick questions to finish it up:

   <share URL>

   Then ask the three numbered questions from step 5 as normal. Save the \`short_code\` from the tool result \u2014 you'll need it in step 2.

2. **After the user answers the Review questions** and you've updated ONBOARDING.md, call it again with \`mode='update'\` and the \`short_code\` from step 1 to refresh the same link. Replace step 5's "drop it in your team docs" close with:

   Here's your onboarding guide: <updated URL>

   Send this to teammates and they'll get a guided walkthrough when they open it in Claude Code.

If the tool returns 'unavailable' at any point, skip that call and use the manual close from step 5 instead.`,
  J = ["Edit(ONBOARDING.md)", "Bash(ls *)", SHARE_ONBOARDING_GUIDE_TOOL_NAME],
  V = {
    type: "prompt",
    name: "team-onboarding",
    description:
      "Help teammates ramp on Claude Code with a guide from your usage",
    allowedTools: J,
    contentLength: 0,
    isEnabled: () => isPolicyAllowed("allow_team_onboarding"),
    policyGate: {
      policy: "allow_team_onboarding",
      featureLabel: "Team onboarding",
    },
    isHidden: !1,
    progressMessage: "scanning usage data",
    effort: "low",
    requires: { workspace: !0 },
    userFacingName() {
      return "team-onboarding";
    },
    source: "builtin",
    disableModelInvocation: !0,
    async getPromptForCommand(u, a) {
      let t = getFeatureValue_CACHED_MAY_BE_STALE("tengu_flint_harbor_prompt", {}),
        m = typeof t?.prompt === "string" ? t.prompt : K,
        h = typeof t?.guideTemplate === "string" ? t.guideTemplate : Y,
        d =
          typeof t?.windowDays === "number"
            ? Math.min(Math.max(Math.floor(t.windowDays), 1), 365)
            : G;
      (logEvent("tengu_team_onboarding_invoked", { window_days: d }),
        await saveGlobalConfig(
          (s) => ({ ...s, teamOnboardingLastUsedAt: Date.now() }),
          a.storageV5,
        ));
      let {
          usageData: p,
          sessionCount: r,
          slashCommandCount: l,
          mcpServerCount: o,
        } = await q(d),
        e =
          m
            .replaceAll("{{WINDOW_DAYS}}", String(d))
            .replaceAll("{{GUIDE_TEMPLATE}}", h)
            .replaceAll("{{USAGE_DATA}}", p) + (isOnboardingGuideSharingEnabled() ? X : "");
      return (
        logEvent("tengu_team_onboarding_generated", {
          session_count: r,
          slash_command_count: l,
          mcp_server_count: o,
          window_days: d,
        }),
        [{ type: "text", text: e }]
      );
    },
  },
  Ce = V;
export { Ce as default };

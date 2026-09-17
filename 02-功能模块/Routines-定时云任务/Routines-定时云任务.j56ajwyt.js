// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 191 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { hasPluginSource, isConnectedMcpServer } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { isSimpleMode } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { M0 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { isEssentialTrafficOnly } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { isClaudeAISubscriber, hasStoredOAuthToken, hasOAuthScope } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getRemoteUrl } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { isGitHubHost } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { hasDisableClaudeAiConnectors } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isNestedGitLabProject, detectCurrentRepositoryWithHost, parseGitRemote } from "../工作树-Git/git-repository-detection.js";
import { isCustomizationDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import { fetchRemoteEnvironments, createDefaultRemoteEnvironment, checkGithubAccess, normalizeClaudeAiServerId, getMcpServerSignature, shouldSkipClaudeAiFetchForEnterpriseLockdown } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isPolicyAllowed } from "../策略限制-PolicyLimits/chunk-8sw91yn5.js";
import { getSuppressedClaudeAiConnectors } from "../权限系统/chunk-fjrcf22x.js";
import { ASK_USER_QUESTION_TOOL_NAME } from "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { registerBundledSkill } from "../Skills技能/bundled-skills.js";
import { REMOTE_TRIGGER_TOOL_NAME } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { ALLOW_ROUTINES_POLICY } from "../../01-核心基础设施/共享小工具-未细化/routines-policy.js";
import { SCHEDULE_SKILL_NAME } from "../../01-核心基础设施/共享小工具-未细化/bundled-skill-names.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function M() {
  return !isEssentialTrafficOnly() && isPolicyAllowed("allow_quick_web_setup");
}
var O = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function z(s) {
  let t = normalizeClaudeAiServerId(s),
    i = "mcpsrv_";
  if (!t.startsWith("mcpsrv_")) return null;
  let r = t.slice(7).slice(2),
    h = 0n;
  for (let f of r) {
    let u = O.indexOf(f);
    if (u === -1) return null;
    h = h * 58n + BigInt(u);
  }
  let c = h.toString(16).padStart(32, "0");
  return `${c.slice(0, 8)}-${c.slice(8, 12)}-${c.slice(12, 16)}-${c.slice(16, 20)}-${c.slice(20, 32)}`;
}
function _(s) {
  if (s.type !== "claudeai-proxy") return !1;
  return s.scope === "claudeai" || (s.scope === "dynamic" && !hasPluginSource(s));
}
function H(s) {
  return isConnectedMcpServer(s) && _(s.config);
}
function G(s) {
  let t = [];
  for (let i of s) {
    if (!H(i)) continue;
    if (i.config.type !== "claudeai-proxy") continue;
    let p = z(i.config.id);
    if (!p) continue;
    t.push({ uuid: p, name: i.name, url: i.config.url });
  }
  return t;
}
var j = new Set(["local", "user", "project", "enterprise", "managed"]);
function k(s) {
  return s
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
function F({
  connectors: s,
  localOnlyServerCount: t,
  suppressedTwinCount: i,
  suppressedTwinLabels: p,
  connectorFetchSkipReason: r,
  hasUnlistedTrustedConnector: h,
}) {
  let c = [];
  if (s.length === 0) {
    if (
      (c.push(
        r === "lockdown"
          ? "Loading of claude.ai connectors is disabled in this Claude Code session by the organization's managed MCP configuration, so none are listed here. Connectors configured on claude.ai remain available to cloud routines there."
          : r === "restricted"
            ? "claude.ai connectors are not loaded in this Claude Code session (MCP servers are restricted to explicitly passed config here, e.g. --strict-mcp-config or --bare), so none are listed. Connectors the user has on claude.ai remain available to cloud routines there."
            : r === "optout"
              ? "Automatic loading of claude.ai connectors is disabled in this Claude Code session (disableClaudeAiConnectors setting or ENABLE_CLAUDEAI_MCP_SERVERS env var), so none are listed here. Connectors the user has connected on claude.ai remain available to cloud routines there."
              : r === "safe-mode"
                ? "claude.ai connectors are not loaded in this Claude Code session (safe mode), so none are listed here. Connectors the user has connected on claude.ai remain available to cloud routines there."
                : r === "missing-scope"
                  ? "claude.ai connectors could not be loaded in this Claude Code session (the session's login token does not include the MCP-connectors permission), so none are listed here. Connectors the user has connected on claude.ai remain available to cloud routines there."
                  : h
                    ? "No MCP connectors are currently connected in this Claude Code session, but a claude.ai connector for this account exists and is still connecting or failed to connect client-side. Routines use connectors server-side on claude.ai, so do not assert that the user must connect one; they can check https://claude.ai/customize/connectors."
                    : "No available MCP connectors found. The user may need to connect servers at https://claude.ai/customize/connectors.",
      ),
      t === 0)
    )
      c.push(
        "Note that MCP servers configured directly in Claude Code (e.g. with `claude mcp add`) cannot be attached to cloud routines \u2014 routines can only use claude.ai connectors.",
      );
  } else {
    c.push("Available connectors (usable by routines):");
    let u = s.map((o) => ({
        connector: o,
        baseName:
          k(o.name.replace(/^claude[.\s-]ai[.\s-]/i, "")) ||
          `connector_${o.uuid.slice(0, 8)}`,
      })),
      C = new Set(u.map((o) => o.baseName)),
      m = new Set(),
      g = new Map();
    for (let o of u)
      if (
        o.connector.name.replace(/^claude[.\s-]ai[.\s-]/i, "") === o.baseName &&
        !m.has(o.baseName)
      )
        (g.set(o, o.baseName), m.add(o.baseName));
    for (let o of u) {
      if (g.has(o)) continue;
      let d = o.baseName;
      if (m.has(d))
        for (let y = 2; m.has(d) || C.has(d); y++) d = `${o.baseName}-${y}`;
      (m.add(d), g.set(o, d));
    }
    for (let o of u) {
      let d = g.get(o) ?? o.baseName;
      c.push(
        `- ${d} (connector_uuid: ${o.connector.uuid}, name: ${d}, url: ${o.connector.url})`,
      );
    }
    if (h)
      c.push(
        "Another claude.ai connector for this account exists but is not currently connected in this session (still connecting, or its client-side connect failed), so it is not listed above. Routines can still use it server-side on claude.ai \u2014 do not assert that the user must connect it.",
      );
    if (r !== null)
      c.push(
        "The claude.ai connector list was not loaded in this session, so connectors beyond those listed above may already exist on claude.ai \u2014 do not assert that the user must connect a service that is not listed.",
      );
  }
  let f = s.length === 0 && r !== null;
  if (t > 0)
    c.push(
      `${t} MCP ${pluralize(t, "server is", "servers are")} configured directly in Claude Code and NOT available to routines (the user can run /mcp to see ${pluralize(t, "it", "them")}). Routines can only use claude.ai connectors${f ? `. As explained above, the claude.ai connector list was not loaded in this session, so ${pluralize(t, "this service", "some of these services")} may already have a connector on claude.ai that routines can use \u2014 do not assert that the user must connect one.` : r === "lockdown" ? `. Loading of claude.ai connectors is disabled in this Claude Code session by the organization's managed MCP configuration, so ${pluralize(t, "this service", "some of these services")} may already have a connector on claude.ai that routines can use \u2014 do not assert that the user must connect one.` : r === "restricted" ? `. claude.ai connectors are not loaded in this Claude Code session (MCP servers are restricted to explicitly passed config here), so ${pluralize(t, "this service", "some of these services")} may already have a connector on claude.ai that routines can use \u2014 do not assert that the user must connect one.` : r === "optout" ? `. Automatic loading of claude.ai connectors is disabled in this Claude Code session (disableClaudeAiConnectors setting or ENABLE_CLAUDEAI_MCP_SERVERS env var), so ${pluralize(t, "this service", "some of these services")} may already have a connector on claude.ai that routines can use \u2014 do not assert that the user must connect one; suggest checking https://claude.ai/customize/connectors.` : r === "safe-mode" ? `. claude.ai connectors are not loaded in this Claude Code session (safe mode), so ${pluralize(t, "this service", "some of these services")} may already have a connector on claude.ai that routines can use \u2014 do not assert that the user must connect one.` : r === "missing-scope" ? `. claude.ai connectors could not be loaded in this Claude Code session (the session's login token does not include the MCP-connectors permission), so ${pluralize(t, "this service", "some of these services")} may already have a connector on claude.ai that routines can use \u2014 do not assert that the user must connect one.` : " \u2014 to use one of those services in a routine, the user must connect it at https://claude.ai/customize/connectors."}`,
    );
  if (i > 0) {
    let u = p.length > 0 ? ` (${p.join(", ")})` : "";
    c.push(
      `Note: ${i} claude.ai ${pluralize(i, "connector")}${u} ${pluralize(i, "is", "are")} not active in this Claude Code session because ${pluralize(i, "a manually-configured server points", "manually-configured servers point")} at the same ${pluralize(i, "service")}. ${pluralize(i, "It remains", "They remain")} connected on claude.ai and available to routines there \u2014 connector details are not listed in this session, so to attach ${pluralize(i, "it", "them")} explicitly the user should manage the routine's connectors at https://claude.ai/code/routines.`,
    );
  }
  return c.join(`
`);
}
var S = "What would you like to do with scheduled cloud agents?";
function R(s) {
  return `\u26A0 Heads-up:
${s.map((i) => `- ${i}`).join(`
`)}`;
}
async function W() {
  let s = await getRemoteUrl();
  if (!s) return null;
  let t = parseGitRemote(s);
  if (!t || isNestedGitLabProject(t)) return null;
  return `https://${t.host}/${t.owner}/${t.name}`;
}
function q(s) {
  let {
      userTimezone: t,
      nowUtcIso: i,
      nowLocal: p,
      connectorsInfo: r,
      gitRepoUrl: h,
      environmentsInfo: c,
      createdEnvironment: f,
      setupNotes: u,
      needsGitHubAccessReminder: C,
      userArgs: m,
    } = s,
    g =
      m && u.length > 0
        ? `
## Setup Notes

${R(u)}
`
        : "",
    o =
      u.length > 0
        ? `${R(u)}

${S}`
        : S;
  return `# Schedule Cloud Agents

You are helping the user schedule, update, list, or run **cloud** Claude Code agents. These are NOT local cron jobs \u2014 each routine spawns a fully isolated cloud session (CCR) in Anthropic's cloud infrastructure, either on a recurring cron schedule or once at a specific time. The agent runs in a sandboxed environment with its own git checkout, tools, and optional MCP connections.

## First Step

${
  m
    ? "The user has already told you what they want (see User Request at the bottom). Skip the initial question and go directly to the matching workflow."
    : `Your FIRST action must be a single ${ASK_USER_QUESTION_TOOL_NAME} tool call (no preamble). Use this EXACT string for the \`question\` field \u2014 do not paraphrase or shorten it:

${jsonStringify(o)}

Set \`header: "Action"\` and offer the four actions (create/list/update/run) as options. After the user picks, follow the matching workflow below.`
}
${g}

## What You Can Do

Use the \`${REMOTE_TRIGGER_TOOL_NAME}\` tool (load it first with \`ToolSearch select:${REMOTE_TRIGGER_TOOL_NAME}\`; auth is handled in-process \u2014 do not use curl):

- \`{action: "list"}\` \u2014 list all routines
- \`{action: "get", trigger_id: "..."}\` \u2014 fetch one routine
- \`{action: "create", body: {...}}\` \u2014 create a routine
- \`{action: "update", trigger_id: "...", body: {...}}\` \u2014 partial update
- \`{action: "run", trigger_id: "..."}\` \u2014 run a routine now
- \`{action: "list_runs", trigger_id: "..."}\` \u2014 the routine's recent run sessions, most recently active first
- \`{action: "get_run_log", session_id: "..."}\` \u2014 condensed log of one run (provisioning, tool calls and errors, permission denials, API retries, final result)

To debug a routine that misbehaved, call \`list_runs\` and then \`get_run_log\` on the run in question. A fire that was skipped or refused before a session existed (routine paused, a fire cap, a kill switch) or that failed its pre-creation checks (repository access, environment) leaves no run in \`list_runs\`, and a routine that posts into an existing session adds to that session rather than a new run; when the list is empty or short, check the routine itself with \`get\` rather than concluding it never fired.

(Note: the API uses \`trigger_id\` as the parameter name, but the user-facing term is "routine".)

You CANNOT delete routines. If the user asks to delete, direct them to: https://claude.ai/code/routines

## Create body shape

For a recurring schedule:

\`\`\`json
{
  "name": "AGENT_NAME",
  "cron_expression": "CRON_EXPR",
  "enabled": true,
  "job_config": {
    "ccr": {
      "environment_id": "ENVIRONMENT_ID",
      "session_context": {
        "model": "claude-sonnet-5",
        "sources": [
          {"git_repository": {"url": "${h || "https://github.com/ORG/REPO"}"}}
        ],
        "allowed_tools": ["Bash", "Read", "Write", "Edit", "Glob", "Grep"]
      },
      "events": [
        {"data": {
          "uuid": "<lowercase v4 uuid>",
          "session_id": "",
          "type": "user",
          "parent_tool_use_id": null,
          "message": {"content": "PROMPT_HERE", "role": "user"}
        }}
      ]
    }
  }
}
\`\`\`

For a one-time run, replace \`"cron_expression": "CRON_EXPR"\` with \`"run_once_at": "YYYY-MM-DDTHH:MM:SSZ"\` (RFC3339 UTC, must be in the future). Everything else is identical.

Generate a fresh lowercase UUID for \`events[].data.uuid\` yourself.

Every \`events[].data.message\` must be the API message shape \`{"role": "user", "content": "..."}\` \u2014 the \`role\` field is required, never omit it.

## Available MCP Connectors

These are the user's currently connected claude.ai MCP connectors:

${r}

When attaching connectors to a routine, use the \`connector_uuid\` and \`name\` shown above (the name is already sanitized to only contain letters, numbers, hyphens, and underscores), and the connector's URL. The \`name\` field in \`mcp_connections\` must only contain \`[a-zA-Z0-9_-]\` \u2014 dots and spaces are NOT allowed.

**Important:** Infer what services the agent needs from the user's description. For example, if they say "check Datadog and Slack me errors," the agent needs both Datadog and Slack connectors. Cross-reference against the list above and warn if any required service isn't connected. If a needed connector is missing, direct the user to https://claude.ai/customize/connectors to connect it first.

## Environments

Every routine requires an \`environment_id\` in the job config. This determines where the cloud agent runs. Ask the user which environment to use.

${c}

Use the \`id\` value as the \`environment_id\` in \`job_config.ccr.environment_id\`.
${
  f
    ? `
**Note:** A new environment \`${f.name}\` (id: \`${f.environment_id}\`) was just created for the user because they had none. Use this id for \`job_config.ccr.environment_id\` and mention the creation when you confirm the routine config.
`
    : ""
}

## API Field Reference

### Create Routine \u2014 Required Fields
- \`name\` (string) \u2014 A descriptive name
- Exactly ONE of:
  - \`cron_expression\` (string) \u2014 5-field cron in UTC. **Minimum interval is 1 hour.**
  - \`run_once_at\` (string) \u2014 RFC3339 UTC timestamp. Must be in the future. Fires once, then auto-disables.
- \`job_config\` (object) \u2014 Session configuration (see structure above)

### Create Routine \u2014 Optional Fields
- \`enabled\` (boolean, default: true)
- \`mcp_connections\` (array) \u2014 MCP servers to attach:
  \`\`\`json
  [{"connector_uuid": "uuid", "name": "server-name", "url": "https://..."}]
  \`\`\`

### Update Routine \u2014 Optional Fields
All fields optional (partial update):
- \`name\`, \`cron_expression\`, \`run_once_at\`, \`enabled\`, \`job_config\`
- \`mcp_connections\` \u2014 Replace MCP connections
- \`clear_mcp_connections\` (boolean) \u2014 Remove all MCP connections

### Cron Expression Examples

The user's local timezone is **${t}**. Cron expressions and \`run_once_at\` timestamps are always in UTC. When the user says a local time, convert it to UTC but confirm with them: "9am ${t} = Xam UTC, so the cron would be \`0 X * * 1-5\`." For one-time runs, the same conversion applies \u2014 "run this at 3pm" \u2192 \`"run_once_at": "YYYY-MM-DDTHH:00:00Z"\` with their 3pm converted to UTC.

- \`0 9 * * 1-5\` \u2014 Every weekday at 9am **UTC**
- \`0 */2 * * *\` \u2014 Every 2 hours
- \`0 0 * * *\` \u2014 Daily at midnight **UTC**
- \`30 14 * * 1\` \u2014 Every Monday at 2:30pm **UTC**
- \`0 8 1 * *\` \u2014 First of every month at 8am **UTC**

Minimum interval is 1 hour. \`*/30 * * * *\` will be rejected.

### Current Time (for one-off runs)

When /schedule was invoked it was **${p}** (${t}) / **${i}** UTC. Treat this as an approximate anchor only \u2014 the conversation may have been running for a while since then.

**Before computing any \`run_once_at\` value, you MUST re-check the current time** by running \`date -u +%Y-%m-%dT%H:%M:%SZ\` via the Bash tool. Do not guess or infer today's date from conversation context. Resolve relative requests ("tomorrow at 9am", "in 3 hours", "next Monday") against the freshly fetched time, then echo the resolved local time AND the UTC timestamp back to the user for confirmation before creating the routine. If the resolved time is already in the past, ask the user to clarify rather than silently rolling forward.

## Workflow

### CREATE a new routine:

1. **Understand the goal** \u2014 Ask what they want the cloud agent to do. What repo(s)? What task? Remind them that the agent runs in the cloud \u2014 it won't have access to their local machine, local files, or local environment variables.
2. **Craft the prompt** \u2014 Help them write an effective agent prompt. Good prompts are:
   - Specific about what to do and what success looks like
   - Clear about which files/areas to focus on
   - Explicit about what actions to take (open PRs, commit, just analyze, etc.)
3. **Set the schedule** \u2014 Ask when and how often. The user's timezone is ${t}. When they say a time (e.g., "every morning at 9am"), assume they mean their local time and convert to UTC for the cron expression. Always confirm the conversion: "9am ${t} = Xam UTC." If they want a one-time run (e.g., "once at 3pm", "tomorrow morning", "remind me to check X later"), use \`run_once_at\` instead of \`cron_expression\` \u2014 same timezone conversion applies. **First re-check the current time with \`date -u\` via Bash** (the reference time above may be stale in a long conversation), resolve the relative phrase against that fresh value, and confirm the resulting absolute timestamp with the user.
4. **Choose the model** \u2014 Default to \`claude-sonnet-5\`. Tell the user which model you're defaulting to and ask if they want a different one.
5. **Validate connections** \u2014 Infer what services the agent will need from the user's description. For example, if they say "check Datadog and Slack me errors," the agent needs both Datadog and Slack MCP connectors. Cross-reference with the connectors list above. If any are missing, warn the user and link them to https://claude.ai/customize/connectors to connect first.${h ? ` The default git repo is already set to \`${h}\`. Ask the user if this is the right repo or if they need a different one.` : " Ask which git repos the cloud agent needs cloned into its environment."}
6. **Review and confirm** \u2014 Show the full configuration before creating. Let them adjust.
7. **Create it** \u2014 Call \`${REMOTE_TRIGGER_TOOL_NAME}\` with \`action: "create"\` and show the result. The response includes the routine ID. Always output a link at the end: \`https://claude.ai/code/routines/{ROUTINE_ID}\`

### UPDATE a routine:

1. List routines first so they can pick one
2. Ask what they want to change
3. Show current vs proposed value
4. Confirm and update

### LIST routines:

1. Fetch and display in a readable format
2. Show: name, schedule (human-readable), enabled/disabled, next run, repo(s)

### RUN NOW:

1. List routines if they haven't specified which one
2. Confirm which routine
3. Execute and confirm

## Important Notes

- These are CLOUD agents \u2014 they run in Anthropic's cloud, not on the user's machine. They cannot access local files, local services, or local environment variables.
- Always convert cron to human-readable when displaying
- When listing routines, \`ended_reason: "run_once_fired"\` means a one-shot already ran (shows as "Ran" in the web UI). The user can re-arm it by updating with a new \`run_once_at\`.
- Default to \`enabled: true\` unless user says otherwise
- Accept GitHub URLs in any format (https://github.com/org/repo, org/repo, etc.) and normalize to the full HTTPS URL (without .git suffix)
- The prompt is the most important part \u2014 spend time getting it right. The cloud agent starts with zero context, so the prompt must be self-contained.
- To delete a routine, direct users to https://claude.ai/code/routines
${C ? `- If the user's request seems to require GitHub repo access (e.g. cloning a repo, opening PRs, reading code), remind them that ${M() ? "they should run /web-setup to connect their GitHub account (or install the Claude GitHub App on the repo as an alternative) \u2014 otherwise the cloud agent won't be able to access it" : "they need the Claude GitHub App installed on the repo \u2014 otherwise the cloud agent won't be able to access it"}.` : ""}
${
  m
    ? `
## User Request

The user said: "${m}"

Start by understanding their intent and working through the appropriate workflow above.`
    : ""
}`;
}
function registerScheduleRemoteAgentsSkill() {
  registerBundledSkill({
    name: SCHEDULE_SKILL_NAME,
    menuDescription: "Create and manage routines: cloud agents on a schedule",
    aliases: ["routines"],
    description:
      "Create, update, list, or run scheduled cloud agents (routines) that execute on a cron schedule.",
    whenToUse:
      'When the user wants to schedule a recurring cloud agent, set up automated tasks, create a cron job for Claude Code, or manage their scheduled agents/routines. Also use when the user wants a one-time scheduled run ("run this once at 3pm", "remind me to check X tomorrow").',
    userInvocable: !0,
    isEnabled: () =>
      isFirstPartyProvider() &&
      isClaudeAISubscriber() &&
      !a.CLAUDE_CODE_REMOTE &&
      isPolicyAllowed("allow_remote_sessions") &&
      isPolicyAllowed(ALLOW_ROUTINES_POLICY),
    allowedTools: [REMOTE_TRIGGER_TOOL_NAME, ASK_USER_QUESTION_TOOL_NAME, "Bash(date *)"],
    async getPromptForCommand(s, t) {
      if (!hasStoredOAuthToken())
        return [
          {
            type: "text",
            text: "You need to authenticate with a claude.ai account first. API accounts are not supported. Run /login, then try /schedule again.",
          },
        ];
      let i = [],
        p = null,
        r = [],
        h = !1,
        c = null;
      if (t.options?.isSkillPreload)
        r.push(
          "Environment and repository details are resolved when the skill is actually run.",
        );
      else {
        try {
          i = await fetchRemoteEnvironments(void 0, t.storageV5, t.credentials);
        } catch (l) {
          return (
            logForDebugging(`[schedule] Failed to fetch environments: ${l}`, {
              level: "warn",
            }),
            [
              {
                type: "text",
                text: "We're having trouble connecting with your remote claude.ai account to set up a scheduled task. Please try /schedule again in a few minutes.",
              },
            ]
          );
        }
        if (i.length === 0)
          try {
            ((p = await createDefaultRemoteEnvironment()), (i = [p]));
          } catch (l) {
            return (
              logForDebugging(`[schedule] Failed to create environment: ${l}`, {
                level: "warn",
              }),
              [
                {
                  type: "text",
                  text: "No remote environments found, and we could not create one automatically. Visit https://claude.ai/code to set one up, then run /schedule again.",
                },
              ]
            );
          }
        let e = await detectCurrentRepositoryWithHost();
        if (e === null)
          r.push(
            "Not in a git repo \u2014 you'll need to specify a repo URL manually (or skip repos entirely).",
          );
        else if (isGitHubHost(e.host)) {
          let { hasAccess: l, transient: w } = await checkGithubAccess(e.owner, e.name);
          if (!l) {
            h = !0;
            let D = M(),
              L = w
                ? `Couldn't verify GitHub access for ${e.owner}/${e.name} (the check failed in a way that may be temporary) \u2014 if your routine needs this repo and this persists, install the Claude GitHub App at https://claude.ai/code/onboarding?magic=github-app-setup.`
                : D
                  ? `GitHub not connected for ${e.owner}/${e.name} \u2014 run /web-setup to sync your GitHub credentials, or install the Claude GitHub App at https://claude.ai/code/onboarding?magic=github-app-setup.`
                  : `Claude GitHub App not installed on ${e.owner}/${e.name} \u2014 install at https://claude.ai/code/onboarding?magic=github-app-setup if your routine needs this repo.`;
            r.push(L);
          }
        }
        c = await W();
      }
      let f = G(t.options.mcpClients),
        u = getSuppressedClaudeAiConnectors(t),
        C = new Set(u.map((e) => e.duplicateOf)),
        m = new Set();
      for (let e of t.options.mcpClients)
        if (
          (_(e.config) &&
            (isConnectedMcpServer(e) ||
              ((e.type === "failed" || e.type === "pending") &&
                e.config.scope === "claudeai"))) ||
          C.has(e.name)
        ) {
          let l = getMcpServerSignature(e.config);
          if (l !== null) m.add(l);
        }
      let g = t.options.mcpClients.some(
          (e) =>
            _(e.config) &&
            (e.type === "failed" || e.type === "pending") &&
            e.config.scope === "claudeai",
        ),
        o = new Set(
          t.options.mcpClients
            .filter((e) => {
              if (
                !j.has(e.config.scope) ||
                e.config.type === "sdk" ||
                e.type === "disabled" ||
                C.has(e.name)
              )
                return !1;
              let l = getMcpServerSignature(e.config);
              return l === null || !m.has(l);
            })
            .map((e) => e.name),
        ).size,
        d = dedupe(
          u
            .map((e) => k(e.name.replace(/^claude[.\s-]ai[.\s-]/i, "")))
            .filter((e) => e.length > 0),
        ),
        y = !hasOAuthScope("user:mcp_servers"),
        v = shouldSkipClaudeAiFetchForEnterpriseLockdown()
          ? "lockdown"
          : M0() || isSimpleMode()
            ? "restricted"
            : a.ENABLE_CLAUDEAI_MCP_SERVERS === !1 || hasDisableClaudeAiConnectors()
              ? "optout"
              : isCustomizationDisabled("mcpClaudeAi")
                ? "safe-mode"
                : y
                  ? "missing-scope"
                  : null;
      if (f.length === 0) {
        let e =
          v === "lockdown"
            ? "claude.ai connectors are not loaded in this session (your organization manages MCP servers); any configured on claude.ai remain available to routines there."
            : v === "restricted"
              ? "claude.ai connectors are not loaded in this session (MCP servers are restricted to explicitly passed config); any on claude.ai remain available to routines there."
              : v === "optout"
                ? "claude.ai connectors are disabled in this session (disableClaudeAiConnectors setting or ENABLE_CLAUDEAI_MCP_SERVERS env var); any already connected on claude.ai remain available to routines there."
                : v === "safe-mode"
                  ? "claude.ai connectors are not loaded in this session (safe mode); any connected on claude.ai remain available to routines there."
                  : v === "missing-scope"
                    ? "claude.ai connectors could not be loaded in this session (the login token does not include the MCP-connectors permission); any connected on claude.ai remain available to routines there."
                    : g
                      ? "A claude.ai connector for this account exists but isn't connected in this session right now (still connecting, or its last connect failed); it remains available to routines on claude.ai."
                      : "Connect one at https://claude.ai/customize/connectors if needed.";
        if (
          (r.push(
            o > 0
              ? `No MCP connectors for cloud routines \u2014 ${o} MCP ${pluralize(o, "server")} configured in Claude Code can't be attached to routines (run /mcp to see ${pluralize(o, "it", "them")}); routines can only use claude.ai connectors. ${e}`
              : v !== null || g
                ? `No MCP connectors \u2014 ${e}`
                : "No MCP connectors \u2014 connect at https://claude.ai/customize/connectors if needed.",
          ),
          u.length > 0)
        ) {
          let l = u.length,
            w = d.length > 0 ? ` (${d.join(", ")})` : "";
          r.push(
            `${l} claude.ai ${pluralize(l, "connector")}${w} ${pluralize(l, "is", "are")} not active in this session (${pluralize(l, "a server configured in Claude Code covers", "servers configured in Claude Code cover")} the same ${pluralize(l, "service")}), but ${pluralize(l, "it remains", "they remain")} available to routines on claude.ai.`,
          );
        }
      }
      let A = Intl.DateTimeFormat().resolvedOptions().timeZone,
        E = new Date(),
        N = E.toISOString(),
        U = E.toLocaleString("en-US", {
          timeZone: A,
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        P = F({
          connectors: f,
          localOnlyServerCount: o,
          suppressedTwinCount: u.length,
          suppressedTwinLabels: d,
          connectorFetchSkipReason: v,
          hasUnlistedTrustedConnector: g,
        }),
        T = ["Available environments:"];
      for (let e of i)
        T.push(`- ${e.name} (id: ${e.environment_id}, kind: ${e.kind})`);
      let I = T.join(`
`);
      return [
        {
          type: "text",
          text: q({
            userTimezone: A,
            nowUtcIso: N,
            nowLocal: U,
            connectorsInfo: P,
            gitRepoUrl: c,
            environmentsInfo: I,
            createdEnvironment: p,
            setupNotes: r,
            needsGitHubAccessReminder: h,
            userArgs: s,
          }),
        },
      ];
    },
  });
}
export { registerScheduleRemoteAgentsSkill };

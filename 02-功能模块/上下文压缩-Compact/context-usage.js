// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { xRt } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getContextCategoryKind, analyzeContextUsage, sliceFromLastCompactBoundary } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { formatTokens, formatTokenEstimate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
function formatContextLimitWarning(o) {
  let r = C(o);
  if (r === null) return null;
  let t = formatTokens(o.totalTokens - o.rawMaxTokens),
    l = formatTokens(o.rawMaxTokens);
  if (r === "hard_limit") {
    let m = Ie(process.env.DISABLE_COMPACT) ? "/clear" : "/compact or /clear";
    return `Context exceeds the ${l}-token limit by ${t} tokens \u2014 run ${m} to continue.`;
  }
  let i = Ie(process.env.DISABLE_COMPACT) ? "/clear" : "/compact";
  return `Context is ${t} tokens past the ${l}-token compaction window \u2014 run ${i} to reduce usage.`;
}
function C(o) {
  if (o.totalTokens <= o.rawMaxTokens) return null;
  return o.autocompactSource === "auto" ? "hard_limit" : "compaction_window";
}
function formatContextUsageReport(o, r) {
  let {
      categories: t,
      totalTokens: l,
      rawMaxTokens: i,
      percentage: m,
      model: T,
      memoryFiles: g,
      mcpTools: k,
      agents: f,
      skills: p,
      messageBreakdown: y,
      systemTools: c,
      systemPromptSections: u,
    } = o,
    e = `## Context Usage

`;
  ((e += `**Model:** ${T}  
`),
    (e += `**Tokens:** ${formatTokens(l)} / ${formatTokens(i)} (${m}%)
`));
  let d = formatContextLimitWarning(o);
  if (d)
    e += `**Over limit:** ${d}
`;
  e += `
`;
  let x = t.filter(
    (n) =>
      n.tokens > 0 &&
      n.name !== "Free space" &&
      n.name !== "Autocompact buffer",
  );
  if (x.length > 0) {
    ((e += `### Estimated usage by category

`),
      (e += `| Category | Tokens | Percentage |
`),
      (e += `|----------|--------|------------|
`));
    for (let a of x) {
      let S = ((a.tokens / i) * 100).toFixed(1);
      e += `| ${a.name} | ${formatTokens(a.tokens)} | ${S}% |
`;
    }
    let n = t.find((a) => a.name === "Free space");
    if (n && n.tokens > 0) {
      let a = ((n.tokens / i) * 100).toFixed(1);
      e += `| Free space | ${formatTokens(n.tokens)} | ${a}% |
`;
    }
    let s = t.find((a) => a.name === "Autocompact buffer");
    if (s && s.tokens > 0) {
      let a = ((s.tokens / i) * 100).toFixed(1);
      e += `| Autocompact buffer | ${formatTokens(s.tokens)} | ${a}% |
`;
    }
    e += `
`;
  }
  if (k.length > 0) {
    ((e += `### MCP Tools

`),
      (e += `| Tool | Server | Tokens |
`),
      (e += `|------|--------|--------|
`));
    for (let n of k)
      e += `| ${n.name} | ${n.serverName} | ${formatTokens(n.tokens)} |
`;
    e += `
`;
  }
  if ((c && c.length > 0, u && u.length > 0, f.length > 0)) {
    ((e += `### Custom Agents

`),
      (e += `| Agent Type | Source | Tokens |
`),
      (e += `|------------|--------|--------|
`));
    for (let n of f) {
      let s;
      switch (n.source) {
        case "projectSettings":
          s = "Project";
          break;
        case "userSettings":
          s = "User";
          break;
        case "localSettings":
          s = "Local";
          break;
        case "flagSettings":
          s = "Flag";
          break;
        case "policySettings":
          s = "Policy";
          break;
        case "plugin":
          s = "Plugin";
          break;
        case "built-in":
          s = "Built-in";
          break;
        default:
          s = String(n.source);
      }
      e += `| ${n.agentType} | ${s} | ${formatTokens(n.tokens)} |
`;
    }
    e += `
`;
  }
  if (g.length > 0) {
    ((e += `### Memory Files

`),
      (e += `| Type | Path | Tokens |
`),
      (e += `|------|------|--------|
`));
    for (let n of g)
      e += `| ${n.type} | ${n.path} | ${formatTokens(n.tokens)} |
`;
    e += `
`;
  }
  if (p && p.tokens > 0 && p.skillFrontmatter.length > 0) {
    ((e += `### Skills

`),
      (e += `| Skill | Source | Tokens |
`),
      (e += `|-------|--------|--------|
`));
    for (let n of p.skillFrontmatter) {
      let s = xRt(n.source) + (n.pluginName ? ` (${n.pluginName})` : "");
      e += `| ${n.name} | ${s} | ${formatTokenEstimate(n.tokens)} |
`;
    }
    e += `
`;
  }
  return e;
}
async function collectContextData(o) {
  let {
      session: r,
      messages: t,
      getAppState: l,
      options: {
        mainLoopModel: i,
        tools: m,
        agentDefinitions: T,
        customSystemPrompt: g,
        appendSystemPrompt: k,
        systemPromptSnapshot: f,
        excludeDynamicSections: p,
      },
      detail: y,
    } = o,
    c = sliceFromLastCompactBoundary(t),
    u = l();
  return analyzeContextUsage(c, i, async () => u.toolPermissionContext, m, T, {
    session: r,
    toolUseContext: {
      options: {
        customSystemPrompt: g,
        appendSystemPrompt: k,
        systemPromptSnapshot: f,
      },
      getMcp: o.getMcp,
      storageV5: o.storageV5,
      credentials: o.credentials,
    },
    originalMessages: c,
    configuredWindow: u.autoCompactWindow,
    excludeDynamicSections: p,
    detail: y,
  });
}
async function call(o, r) {
  let t = await collectContextData(r),
    l = mayHaveRemoteClient(r.session),
    i = l ? { ...t, memoryFiles: [] } : t;
  return {
    type: "text",
    value: formatContextUsageReport(i, { skipCollapseStatus: l }),
    contextUsage: buildContextUsage(i),
  };
}
function buildContextUsage(o) {
  let r = C(o);
  return {
    model: o.model,
    total_tokens: o.totalTokens,
    raw_max_tokens: o.rawMaxTokens,
    percentage: o.percentage,
    ...(r !== null && {
      over_limit: { tokens_over: o.totalTokens - o.rawMaxTokens, kind: r },
    }),
    categories: o.categories.map((t) => ({
      name: t.name,
      tokens: t.tokens,
      kind: getContextCategoryKind(t),
    })),
    mcp_tools: o.mcpTools.map((t) => ({
      name: t.name,
      server_name: t.serverName,
      tokens: t.tokens,
    })),
    memory_files: o.memoryFiles.map((t) => ({
      path: t.path,
      type: t.type,
      tokens: t.tokens,
    })),
    agents: o.agents.map((t) => ({
      agent_type: t.agentType,
      source: t.source,
      tokens: t.tokens,
    })),
    ...(o.skills &&
      o.skills.skillFrontmatter.length > 0 && {
        skills: o.skills.skillFrontmatter.map((t) => ({
          name: t.name,
          source: t.source,
          ...(t.pluginName !== void 0 && { plugin_name: t.pluginName }),
          tokens: t.tokens,
        })),
      }),
  };
}
export { formatContextLimitWarning, formatContextUsageReport, collectContextData, call, buildContextUsage };

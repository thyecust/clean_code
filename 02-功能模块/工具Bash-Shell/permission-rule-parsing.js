// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var i = {
  Task: "Agent",
  KillShell: "TaskStop",
  KillBash: "TaskStop",
  AgentOutputTool: "TaskOutput",
  BashOutputTool: "TaskOutput",
  AgentOutput: "TaskOutput",
  BashOutput: "TaskOutput",
  ListPeers: "ListAgents",
  Brief: "SendUserMessage",
  ListMcpResources: "ListMcpResourcesTool",
  ReadMcpResource: "ReadMcpResourceTool",
  ReadMcpResourceDir: "ReadMcpResourceDirTool",
};
function resolveToolNameAlias(e) {
  return Object.hasOwn(i, e) ? i[e] : e;
}
function getBuiltinLegacyToolNames(e) {
  let n = [];
  for (let [t, r] of Object.entries(i)) if (r === e) n.push(t);
  return n;
}
var WORKSPACE_MCP_SERVER_NAME = "workspace",
  WORKSPACE_MCP_BASH_TOOL_NAME = `mcp__${WORKSPACE_MCP_SERVER_NAME}__bash`,
  WORKSPACE_MCP_WEB_FETCH_TOOL_NAME = `mcp__${WORKSPACE_MCP_SERVER_NAME}__web_fetch`;
function expandToolNameAlias(e, n) {
  let t = n && Object.hasOwn(n, e) ? n[e] : void 0;
  return t !== void 0 && t !== e ? [e, t] : [e];
}
function getAliasNamesForToolName(e, n) {
  if (!n) return [];
  let t = [];
  for (let [r, s] of Object.entries(n)) if (s === e) t.push(r);
  return t;
}
function containsWildcard(e) {
  return e.includes("*");
}
function matchesWildcardPattern(e, n) {
  return new RegExp(
    `^${e
      .split("*")
      .map((r) => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join(".*")}$`,
    "s",
  ).test(n);
}
function matchesToolNameGlob(e, n) {
  return matchesWildcardPattern(e, n);
}
function a(e) {
  return e
    .replaceAll("\\", "\\\\")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)");
}
function escapeGlobSpecials(e, n) {
  let t = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, (r) => `\\${r}`);
  if (n?.escapeGlobs) t = t.replaceAll("*", "\\*");
  if (t.startsWith("!") || t.startsWith("#")) t = `\\${t}`;
  return (
    (t = t.replace(/\s+$/, (r) => Array.from(r, (s) => `\\${s}`).join(""))),
    t
  );
}
function unescapeGlobSpecials(e) {
  return e.replace(/\\([^])/g, (n, t) => (isGlobSpecialChar(t) ? t : n));
}
var l = /^[\\[\]!#()|+^$*?\s]$/;
function isGlobSpecialChar(e) {
  return l.test(e);
}
var c = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;
function isWindowsStylePath(e) {
  return c.test(e);
}
function unescapeRuleEscapes(e) {
  return unescapeRuleParentheses(e).replaceAll("\\\\", "\\");
}
function unescapeRuleParentheses(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")");
}
function parseToolRuleSpec(e) {
  let n = u(e, "("),
    t = p(e, ")");
  if (n === -1 && t === -1) return { kind: "bare" };
  let r = e.substring(0, n);
  if (n === -1 || t <= n || t !== e.length - 1 || /[()]/.test(r))
    return { kind: "malformed" };
  return { kind: "call", toolName: r, rawContent: e.substring(n + 1, t) };
}
function parsePermissionRule(e) {
  let n = parseToolRuleSpec(e);
  if (n.kind !== "call" || !n.toolName) return { toolName: resolveToolNameAlias(e) };
  if (n.rawContent === "" || n.rawContent === "*")
    return { toolName: resolveToolNameAlias(n.toolName) };
  let t = unescapeRuleEscapes(n.rawContent);
  return { toolName: resolveToolNameAlias(n.toolName), ruleContent: t };
}
function formatPermissionRule(e) {
  if (!e.ruleContent) return e.toolName;
  let n = a(e.ruleContent);
  return `${e.toolName}(${n})`;
}
function splitToolRuleList(e) {
  if (e.length === 0) return [];
  let n = [];
  for (let t of e) {
    if (!t) continue;
    let r = "",
      s = !1;
    for (let o of t)
      switch (o) {
        case "(":
          ((s = !0), (r += o));
          break;
        case ")":
          ((s = !1), (r += o));
          break;
        case ",":
          if (s) r += o;
          else {
            if (r.trim()) n.push(r.trim());
            r = "";
          }
          break;
        case " ":
          if (s) r += o;
          else if (r.trim()) (n.push(r.trim()), (r = ""));
          break;
        default:
          r += o;
      }
    if (r.trim()) n.push(r.trim());
  }
  return n;
}
function u(e, n) {
  for (let t = 0; t < e.length; t++)
    if (e[t] === n) {
      let r = 0,
        s = t - 1;
      while (s >= 0 && e[s] === "\\") (r++, s--);
      if (r % 2 === 0) return t;
    }
  return -1;
}
function p(e, n) {
  for (let t = e.length - 1; t >= 0; t--)
    if (e[t] === n) {
      let r = 0,
        s = t - 1;
      while (s >= 0 && e[s] === "\\") (r++, s--);
      if (r % 2 === 0) return t;
    }
  return -1;
}
export {
  resolveToolNameAlias,
  getBuiltinLegacyToolNames,
  WORKSPACE_MCP_SERVER_NAME,
  WORKSPACE_MCP_BASH_TOOL_NAME,
  WORKSPACE_MCP_WEB_FETCH_TOOL_NAME,
  expandToolNameAlias,
  getAliasNamesForToolName,
  containsWildcard,
  matchesWildcardPattern,
  matchesToolNameGlob,
  escapeGlobSpecials,
  unescapeGlobSpecials,
  isGlobSpecialChar,
  isWindowsStylePath,
  unescapeRuleEscapes,
  unescapeRuleParentheses,
  parseToolRuleSpec,
  parsePermissionRule,
  formatPermissionRule,
  splitToolRuleList,
};

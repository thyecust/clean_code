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
function Tu(e) {
  return Object.hasOwn(i, e) ? i[e] : e;
}
function M8t(e) {
  let n = [];
  for (let [t, r] of Object.entries(i)) if (r === e) n.push(t);
  return n;
}
var N8t = "workspace",
  the = `mcp__${N8t}__bash`,
  ikt = `mcp__${N8t}__web_fetch`;
function nhe(e, n) {
  let t = n && Object.hasOwn(n, e) ? n[e] : void 0;
  return t !== void 0 && t !== e ? [e, t] : [e];
}
function W5(e, n) {
  if (!n) return [];
  let t = [];
  for (let [r, s] of Object.entries(n)) if (s === e) t.push(r);
  return t;
}
function Tx(e) {
  return e.includes("*");
}
function Cie(e, n) {
  return new RegExp(
    `^${e
      .split("*")
      .map((r) => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join(".*")}$`,
    "s",
  ).test(n);
}
function Cke(e, n) {
  return Cie(e, n);
}
function a(e) {
  return e
    .replaceAll("\\", "\\\\")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)");
}
function vie(e, n) {
  let t = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, (r) => `\\${r}`);
  if (n?.escapeGlobs) t = t.replaceAll("*", "\\*");
  if (t.startsWith("!") || t.startsWith("#")) t = `\\${t}`;
  return (
    (t = t.replace(/\s+$/, (r) => Array.from(r, (s) => `\\${s}`).join(""))),
    t
  );
}
function akt(e) {
  return e.replace(/\\([^])/g, (n, t) => (t0n(t) ? t : n));
}
var l = /^[\\[\]!#()|+^$*?\s]$/;
function t0n(e) {
  return l.test(e);
}
var c = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;
function n0n(e) {
  return c.test(e);
}
function r0n(e) {
  return o0n(e).replaceAll("\\\\", "\\");
}
function o0n(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")");
}
function Ett(e) {
  let n = u(e, "("),
    t = p(e, ")");
  if (n === -1 && t === -1) return { kind: "bare" };
  let r = e.substring(0, n);
  if (n === -1 || t <= n || t !== e.length - 1 || /[()]/.test(r))
    return { kind: "malformed" };
  return { kind: "call", toolName: r, rawContent: e.substring(n + 1, t) };
}
function Fr(e) {
  let n = Ett(e);
  if (n.kind !== "call" || !n.toolName) return { toolName: Tu(e) };
  if (n.rawContent === "" || n.rawContent === "*")
    return { toolName: Tu(n.toolName) };
  let t = r0n(n.rawContent);
  return { toolName: Tu(n.toolName), ruleContent: t };
}
function Er(e) {
  if (!e.ruleContent) return e.toolName;
  let n = a(e.ruleContent);
  return `${e.toolName}(${n})`;
}
function qu(e) {
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
  Tu,
  M8t,
  N8t,
  the,
  ikt,
  nhe,
  W5,
  Tx,
  Cie,
  Cke,
  vie,
  akt,
  t0n,
  n0n,
  r0n,
  o0n,
  Ett,
  Fr,
  Er,
  qu,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Dt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { yt, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { OAUTH_BETA_HEADER, CLAUDE_AI_OAUTH_SCOPES, preservableScopesFrom } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  ht,
  refreshOAuthToken,
  isInvalidGrantError,
  saveRefreshedOAuthTokensRespectingLock,
  markRefreshTokenDeadAfterInvalidGrant,
  isOAuthRefreshKnownDeadAsync,
  getClaudeAIOAuthTokens,
  OAuthRefreshLockContendedError as lge,
  withOAuthRefreshLock,
  checkAndRefreshOAuthTokenIfNeeded,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { Gi } from "../认证-OAuth登录/chunk-7rf7w8yf.js";
import { isPolicyAllowed } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var w = 30000,
  R = "/v2/ccr-sessions/-/chat-project";
function kce() {
  return Gi() !== null;
}
async function p(e, t, r, i, o) {
  let s = await ht.post(
    R,
    { op: e, ...t },
    {
      auth: "session-jwt",
      timeout: w,
      validateStatus: () => !0,
      signal: i,
      maxContentLength: o,
    },
  );
  if (s.ok && s.status >= 300) throw new fqe(r, s.status, D(s.data));
  return u(s, r);
}
function D(e) {
  return e !== null &&
    typeof e === "object" &&
    "error" in e &&
    typeof e.error === "string"
    ? e.error
    : e;
}
function d(e, t) {
  return {
    auth: "teleport-org",
    timeout: w,
    headers: { "anthropic-beta": OAUTH_BETA_HEADER },
    validateStatus: () => !0,
    signal: e,
    credentials: t,
  };
}
function f(e, t) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${t}`;
}
async function dbe(e, t, r) {
  if (kce()) return p("detail", {}, "get project detail", t);
  let i = await ht.get(f(e, "/detail"), d(t, r));
  return u(i, "get project detail");
}
async function d6n(e, t, r, i) {
  if (kce()) return p("read-doc", { doc_uuid: t }, "read doc", r);
  let o = await ht.get(f(e, `/docs/${encodeURIComponent(t)}`), d(r, i));
  return u(o, "read doc");
}
async function p6n(e, t, r, i) {
  if (kce()) return p("read-file", { file_uuid: t }, "read file", r);
  let o = await ht.get(
    f(e, `/files/${encodeURIComponent(t)}/extracted`),
    d(r, i),
  );
  return u(o, "read file");
}
var o1t = 20971520,
  k = Math.ceil((o1t * 4) / 3) + 65536;
async function Hsn(e, t, r, i) {
  if (kce()) return p("read-file-raw", { file_uuid: t }, "download file", r, k);
  let o = await ht.get(f(e, `/files/${encodeURIComponent(t)}/raw`), {
    ...d(r, i),
    maxContentLength: k,
  });
  return u(o, "download file");
}
async function Isn(e, t, r, i, o) {
  if (kce())
    return p("write-doc", { file_name: t, content: r }, "create doc", i);
  let s = await ht.post(f(e, "/docs"), { file_name: t, content: r }, d(i, o));
  return u(s, "create doc");
}
async function f6n(e, t, r, i, o) {
  let s = await ht.patch(
    f(e, `/docs/${encodeURIComponent(t)}`),
    { content: r },
    d(i, o),
  );
  return u(s, "update doc");
}
async function Psn(e, t, r, i) {
  if (kce()) {
    await p("delete-doc", { doc_uuid: t }, "delete doc", r);
    return;
  }
  let o = await ht.delete(
    f(e, `/docs/${encodeURIComponent(t)}`),
    void 0,
    d(r, i),
  );
  u(o, "delete doc");
}
async function m6n(e, t, r, i, o) {
  if (kce())
    return S(
      await p("kb-search", { query: t, n: r }, "search knowledge base", i),
    );
  let s = await ht.get(
    f(e, `/kb/search?query=${encodeURIComponent(t)}&n=${r}`),
    d(i, o),
  );
  return S(u(s, "search knowledge base"));
}
function S(e) {
  if (typeof e === "string")
    try {
      return z(e);
    } catch {
      return e;
    }
  return e;
}
function g6n(e, t) {
  if (!t) return e;
  return e.split(t).join("[redacted-oauth-token]");
}
class fqe extends Error {
  action;
  status;
  body;
  constructor(e, t, r) {
    super(`Projects API: ${e} failed (HTTP ${t})${E(r)}`);
    this.action = e;
    this.status = t;
    this.body = r;
    this.name = "ProjectsApiError";
  }
}
function u(e, t) {
  if (!e.ok) throw new fqe(t, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new fqe(t, e.status, e.data);
  return e.data;
}
function E(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${b(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var P = "user:projects:read",
  x = "user:projects:write";
async function s1t(e) {
  if (!isPolicyAllowed("allow_projects_tool")) return { ok: !1, reason: "policy_disabled" };
  if (!isFirstPartyProvider()) return { ok: !1, reason: "wrong_provider" };
  if (St()) return { ok: !1, reason: "essential_traffic_only" };
  let t = Gi();
  if (t) return { ok: !0, accessToken: t, expanded: !1 };
  try {
    await checkAndRefreshOAuthTokenIfNeeded({ credentials: e });
  } catch {}
  let r = getClaudeAIOAuthTokens();
  if (!r?.accessToken) return { ok: !1, reason: "no_token" };
  if (h(r.scopes)) return { ok: !0, accessToken: r.accessToken, expanded: !1 };
  if (r.clientId) return { ok: !1, reason: "custom_client" };
  if (!r.refreshToken) return { ok: !1, reason: "no_refresh" };
  if (await isOAuthRefreshKnownDeadAsync(e)) return { ok: !1, reason: "no_refresh" };
  let i = !1;
  try {
    return await withOAuthRefreshLock(
      async ({ lockedTokens: o, isCompromised: s, signal: m }) => {
        if (!o?.refreshToken) return { ok: !1, reason: "no_refresh" };
        if (s()) return { ok: !1, reason: "lock_contended" };
        if (h(o.scopes) && o.accessToken)
          return { ok: !0, accessToken: o.accessToken, expanded: !1 };
        if (o.clientId) return { ok: !1, reason: "custom_client" };
        if (await isOAuthRefreshKnownDeadAsync(e)) return { ok: !1, reason: "no_refresh" };
        let c;
        try {
          ((i = !0),
            (c = await refreshOAuthToken(o.refreshToken, {
              clientId: o.clientId,
              scopes: Y([...CLAUDE_AI_OAUTH_SCOPES, ...preservableScopesFrom(o.scopes), P, x]),
              signal: m,
              telemetryContext: "projects_scope_expansion",
            })));
        } catch (_) {
          if (isInvalidGrantError(_) && !s()) await markRefreshTokenDeadAfterInvalidGrant(o.refreshToken, e);
          if (s() || yt(_)) return { ok: !1, reason: "lock_contended" };
          throw _;
        }
        let j = await saveRefreshedOAuthTokensRespectingLock({
          isCompromised: s,
          postedRefreshToken: o.refreshToken,
          refreshedTokens: c,
          credentials: e,
        });
        if (j === "adopted_sibling")
          return { ok: !1, reason: "lock_contended" };
        if (j === "save_failed")
          return (
            logFeatureSad("projects_scope_expansion", "save_failed"),
            { ok: !1, reason: "save_failed" }
          );
        if (!h(c.scopes))
          return (
            logFeatureSad("projects_scope_expansion", "expand_failed"),
            {
              ok: !1,
              reason: "expand_failed",
              detail: "refresh succeeded but projects scopes not granted",
            }
          );
        return (
          logFeatureOk("projects_scope_expansion"),
          { ok: !0, accessToken: c.accessToken, expanded: !0 }
        );
      },
      e,
    );
  } catch (o) {
    if (o instanceof lge || yt(o)) return { ok: !1, reason: "lock_contended" };
    if (!i) return { ok: !1, reason: "lock_contended", detail: l(o) };
    return (
      logFeatureSad("projects_scope_expansion", "expand_failed"),
      { ok: !1, reason: "expand_failed", detail: l(o) }
    );
  }
}
function h(e) {
  return !!e && e.includes(P) && e.includes(x);
}
var T = 50,
  v = {
    gdrive: "Google Drive",
    github: "GitHub",
    outlin: "Outline",
    mcpres: "MCP resource",
  },
  O = 5000;
async function getProjectContextBlock(e) {
  let t = a.CLAUDE_PROJECT_UUID;
  if (!t) return null;
  try {
    return await Dt(I(t, e), O, "project context fetch timed out");
  } catch (r) {
    return (
      n(`project context fetch failed: ${l(r)}`, { level: "warn" }),
      null
    );
  }
}
async function I(e, t) {
  let r = await s1t(t);
  if (!r.ok)
    return (
      n(`project context skipped: ${r.reason}`, { level: "verbose" }),
      null
    );
  return F(await dbe(e, void 0, t));
}
function safeInline(e) {
  return e.replace(/[\r\n]+/g, " ").replace(/`/g, "'");
}
function C(e) {
  let t = e.slice(0, T),
    r = e.length - t.length;
  return (
    t.join(`
`) +
    (r > 0
      ? `
- \u2026 and ${r} more \u2014 call \`project_info\` for the full list`
      : "")
  );
}
var A = 200;
function H(e) {
  let t = v[e.type ?? ""] ?? safeInline(e.type ?? "source"),
    r = safeInline(b(e.config)),
    i = [...r],
    o = i.length > A ? `${i.slice(0, A).join("")}\u2026` : r;
  return `${t}: \`${o}\``;
}
function F(e) {
  let t = e.documents.map((c) => c.file_name).filter((c) => c !== null),
    r = (e.files ?? []).filter((c) => c.file_name !== null),
    i = e.sync_sources ?? [],
    o = i.slice(0, T),
    s = i.length - o.length,
    m =
      o.map((c) => `- ${H(c)}`).join(`
`) +
      (s > 0
        ? `
- \u2026 and ${s} more \u2014 call \`project_info\` for the full list`
        : "");
  return [
    `This session is attached to the Project **"${safeInline(e.name)}"**.`,
    "",
    ...(e.description ? ["## Project description", e.description, ""] : []),
    ...(e.prompt_template
      ? ["## Project instructions", e.prompt_template, ""]
      : []),
    `## Project docs (${t.length})`,
    C(t.map((c) => `- \`${safeInline(c)}\``)) || "(none yet)",
    "",
    ...(r.length > 0
      ? [
          `## Project files (${r.length})`,
          C(r.map((c) => `- \`${safeInline(c.file_name)}\` (${safeInline(c.file_kind)})`)),
          "",
        ]
      : []),
    ...(i.length > 0
      ? [
          `## Synced sources (${i.length})`,
          m,
          "These are synced automatically \u2014 use the matching connector tool (Google Drive, GitHub, etc.) to read them.",
          "",
        ]
      : []),
    "## When to use the Projects tool",
    "- **Before answering questions about anything in the doc list above**, read or search the relevant doc with `project_read` or `project_search`. Do not Glob/Grep the local filesystem for these \u2014 they live in the project, not on disk.",
    "- **When you produce something durable and relevant to this project** \u2014 a new doc, an update to an existing one, a captured decision or finding the user or their team would look for here later \u2014 write it to the project with `project_write`. The project is what they see across Claude products. Be selective: write things that belong alongside the existing docs, not every artifact or note.",
    "- **To edit a project doc**, `project_read` it, make the change, and `project_write` the full updated content back to the same path. There is no in-place patch.",
    "- **You don't have to use the project for everything.** If the request is unrelated to it, answer normally without reading or writing the project.",
  ].join(`
`);
}
export {
  kce,
  dbe,
  d6n,
  p6n,
  o1t,
  Hsn,
  Isn,
  f6n,
  Psn,
  m6n,
  g6n,
  fqe,
  s1t,
  getProjectContextBlock,
  safeInline,
};

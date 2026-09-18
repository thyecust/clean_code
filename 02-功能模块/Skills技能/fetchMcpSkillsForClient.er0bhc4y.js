// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 66 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { hashForTelemetry } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logMCPError, logMCPDebug } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { hashSha256 } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { stripInvisibleChars, sanitizeDeep } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { getMcpClientState } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { getOfficialPluginPromptOverrides } from "../插件系统/plugin-prompt-overrides.js";
import { MAX_SKILL_FILE_BYTES, getMcpSkillBuilders, getMcpServerConfigCacheKey, readMcpResourceRaw } from "../MCP客户端/chunk-7wm8t84g.js";
import { parseFrontmatter } from "../MCP客户端/chunk-3kmsshb6.js";
import { SKILL_FILE_NAME, parseSha256Digest, readCachedMcpSkill, isMcpSkillContentCached, resolveMcpSkillCacheEntry, writeMcpSkillContent, writeMcpSkillCacheMeta } from "./mcp-skill-cache.js";
import { declaresMcpSkillsExtension } from "../MCP客户端/mcp-skills-extension.js";
import { getMcpTimeoutMs } from "../MCP客户端/mcp-timeouts.js";
import { createEmptyCommandMetadata, escapeCommandFrontmatter, escapeOptionalSingleLineText, escapeMultilineText } from "../../01-核心基础设施/核心工具-未归类/chunk-339z9efw.js";
import { normalizeMcpName } from "../MCP客户端/mcp-name-normalization.js";
import { xA, Jke } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { randomBytes } from "crypto";
import { mkdir, rename, rm, writeFile } from "fs/promises";
import { join } from "path";
function F(e) {
  if (!e.endsWith("/SKILL.md")) return;
  let r = e.slice(0, -9);
  if (!/^[a-z][a-z0-9+.-]*:\/\/./i.test(r)) return;
  if (/[<>"\s\p{Cc}]/u.test(r)) return;
  return r;
}
function T() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js").mcpDirectoryReadModule();
}
function O() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js").mcpSkillsListModule();
}
function U() {
  return import.meta
    .require("../MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpSdkErrorClassificationModule();
}
function P(e) {
  return import.meta
    .require("../MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpIsListAuthErrorModule()
    .isClaudeAiBearerRejectedError(e);
}
var B = 100,
  X = 20,
  q = 20,
  E = 4096;
function j(e, r, s) {
  let c = `${e}:${getMcpServerConfigCacheKey(r.name, r.config)}`,
    o = getMcpClientState().skillsFunnelSeen,
    a = o.has(c) ? "refetch" : "initial";
  (o.add(c),
    logEvent("tengu_mcp_skills_funnel", {
      step: fromEnum(e),
      client: S("claude-code-cli"),
      server_name: hashForTelemetry(r.name),
      cause: fromEnum(a),
      skill_count: s,
    }));
}
class I {
  fetchForClient = xA(
    async (e, r) => {
      if (!declaresMcpSkillsExtension(e.capabilities)) return [];
      let s = null,
        c = !1,
        o = await H(e, () => {
          ((c = !0), (e.discoveryBearerRejected = !0));
        });
      if (o.length === 0) {
        if (c)
          (this.invalidate(getMcpServerConfigCacheKey(e.name, e.config)),
            logFeatureSad("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected"));
        return [];
      }
      (j("parsed_nonempty", e, o.length),
        logMCPDebug(e.name, `Found ${o.length} ${pluralize(o.length, "skill")} via skills/list`));
      let a = getMcpSkillBuilders(),
        p = (d) => {
          if (d === "skill_mcp_claudeai_bearer_rejected") c = !0;
          else s = d;
        },
        k = await Promise.all(o.map((d) => W(e, d, a, p, r))),
        t = getOfficialPluginPromptOverrides(e.config)?.skills,
        h = k.filter((d) => d !== null),
        m = t
          ? h.map((d) => {
              let _ = t[d.name];
              return _ === void 0 ? d : { ...d, description: _ };
            })
          : h;
      if (c)
        (this.invalidate(getMcpServerConfigCacheKey(e.name, e.config)),
          (e.discoveryBearerRejected = !0));
      if (s) logFeatureBad("skill_mcp_load", s, { mcp_server_sha12: hashForTelemetry(e.name) });
      else if (c) logFeatureSad("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected");
      else if (m.length > 0) logFeatureOk("skill_mcp_load");
      if (m.length > 0)
        (j("surfaced", e, m.length),
          logForDebugging(
            `[mcp-skills] Loaded ${m.length} skills from MCP server '${e.name}'`,
          ));
      return m;
    },
    (e, r) => getMcpServerConfigCacheKey(e.name, e.config),
    X,
  );
  invalidate(e) {
    this.fetchForClient.cache.delete(e);
  }
  invalidateExcept(e) {
    Jke(this.fetchForClient.cache, e);
  }
  reset() {
    this.fetchForClient.cache.clear();
  }
}
function v() {
  let e = getMcpClientState();
  if (e.skillsFetcher === null) e.skillsFetcher = new I();
  return e.skillsFetcher;
}
function fetchMcpSkillsForClient(e, r) {
  return v().fetchForClient(e, r);
}
function invalidateMcpSkillsForServer(e) {
  v().invalidate(e);
}
function invalidateMcpSkillsExcept(e) {
  v().invalidateExcept(e);
}
async function H(e, r) {
  let s = [],
    c = 0,
    o = !1,
    a,
    p = 0;
  do {
    let k;
    try {
      k = await O().listMcpSkillPage(e, a);
    } catch (t) {
      if (p === 0) {
        if (!U().isMcpMethodNotFoundError(t))
          if (
            (logMCPDebug(
              e.name,
              `skills/list failed (${l(t)}) \u2014 skipping skill discovery`,
            ),
            e.config.type === "claudeai-proxy" && P(t))
          )
            (logFeatureSad("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected"),
              v().invalidate(getMcpServerConfigCacheKey(e.name, e.config)),
              (e.discoveryBearerRejected = !0));
          else logFeatureSad("skill_mcp_load", "skill_mcp_list_failed");
        return [];
      }
      if (
        (logMCPDebug(
          e.name,
          `skills/list page ${p + 1} failed (${l(t)}) \u2014 using ${s.length} ${pluralize(s.length, "entry", "entries")} from prior pages`,
        ),
        e.config.type === "claudeai-proxy" && P(t))
      )
        r();
      else logFeatureSad("skill_mcp_load", "skill_mcp_list_page_failed");
      break;
    }
    for (let t of k.skills) {
      if (s.length >= B) {
        o = !0;
        break;
      }
      let h = G(t.frontmatter?.name);
      if (
        !h ||
        !t.uri ||
        h.length > E ||
        t.uri.length > E ||
        (t.digest?.length ?? 0) > E
      ) {
        c++;
        continue;
      }
      s.push({ name: h, uri: t.uri, digest: t.digest });
    }
    ((a = k.nextCursor || void 0), p++);
  } while (a !== void 0 && p < q && s.length < B);
  if (a !== void 0 || o)
    logMCPDebug(
      e.name,
      `skills/list: stopped after ${p} ${pluralize(p, "page")} / ${s.length} valid ${pluralize(s.length, "entry", "entries")} with more pending`,
    );
  if (c > 0)
    (logMCPDebug(
      e.name,
      `${c} skills/list ${pluralize(c, "entry", "entries")} skipped (malformed, missing, or oversized fields)`,
    ),
      logFeatureSad("skill_mcp_load", "skill_mcp_list_entries_dropped"));
  return s;
}
function G(e) {
  return typeof e === "string" && e.length > 0 ? e : void 0;
}
async function W(e, r, s, c, o) {
  let a = await readCachedMcpSkill(e.name, r, o);
  if (a.hit)
    return (
      logMCPDebug(e.name, `Skill '${r.name}' cache hit \u2014 no resources/read`),
      D({
        client: e,
        uri: r.uri,
        fallbackName: r.name,
        rawContent: a.skillMd,
        builders: s,
      })
    );
  return Y({
    client: e,
    uri: r.uri,
    fallbackName: r.name,
    builders: s,
    onError: c,
    cacheEntry: r,
    storageV5: o,
  });
}
async function Y({
  client: e,
  uri: r,
  fallbackName: s,
  builders: c,
  onError: o,
  cacheEntry: a,
  storageV5: p,
}) {
  try {
    let t = (await readMcpResourceRaw(e, r, { timeout: getMcpTimeoutMs() })).contents?.find(
      (_) => "text" in _ && typeof _.text === "string",
    );
    if (!t || !("text" in t))
      return (
        logMCPDebug(e.name, `Skill resource ${r} has no text content`),
        o("skill_mcp_no_text_content"),
        null
      );
    if (t.text.length > MAX_SKILL_FILE_BYTES)
      return (
        logMCPDebug(e.name, `Skill resource ${r} exceeds ${MAX_SKILL_FILE_BYTES / 1e6}MB, skipping`),
        o("skill_mcp_content_too_large"),
        null
      );
    let h = String(t.text),
      m = parseSha256Digest(a.digest ?? void 0),
      d = hashSha256(h);
    if (m && m !== d)
      return (
        logMCPError(
          e.name,
          `SKILL.md digest mismatch for ${r}: skills/list declares ${m.slice(0, 12)}\u2026, served content hashes to ${d.slice(0, 12)}\u2026`,
        ),
        o("skill_mcp_skill_md_digest_mismatch"),
        null
      );
    return (
      await Z(e.name, a, h, d, p),
      D({ client: e, uri: r, fallbackName: s, rawContent: h, builders: c })
    );
  } catch (k) {
    if (e.config.type === "claudeai-proxy" && P(k))
      (logMCPDebug(e.name, `Failed to load MCP skill from ${r}: ${l(k)}`),
        o("skill_mcp_claudeai_bearer_rejected"));
    else
      (logMCPError(e.name, `Failed to load MCP skill from ${r}: ${l(k)}`),
        o("skill_mcp_fetch_failed"));
    return null;
  }
}
async function Z(e, r, s, c, o) {
  try {
    let a = parseSha256Digest(r.digest ?? void 0) ?? c,
      {
        slug: p,
        slugDir: k,
        keyDir: t,
        alreadyCached: h,
      } = await resolveMcpSkillCacheEntry(e, r, a, o);
    if (!h)
      if (isHoverRestEnabled() && o) await writeMcpSkillContent(o, p, a, s);
      else {
        let m = join(k, `.tmp-${process.pid}-${randomBytes(4).toString("hex")}`);
        await mkdir(m, { recursive: !0 });
        let d = !1;
        try {
          await writeFile(join(m, SKILL_FILE_NAME), s);
          try {
            (await rename(m, t), (d = !0));
          } catch (_) {
            if (!(await isMcpSkillContentCached(p, a, t, void 0))) {
              let C = A(_);
              if (
                C !== "EEXIST" &&
                C !== "ENOTEMPTY" &&
                C !== "ENOTDIR" &&
                C !== "EPERM" &&
                C !== "EACCES"
              )
                throw _;
              (logMCPDebug(
                e,
                `Replacing ${t}, which has no SKILL.md, with the fetched copy`,
              ),
                await rm(t, { recursive: !0, force: !0 }),
                await rename(m, t),
                (d = !0));
            }
          }
        } finally {
          if (!d) await rm(m, { recursive: !0, force: !0 }).catch(() => {});
        }
      }
    await writeMcpSkillCacheMeta({ slug: p, slugDir: k }, r, a, o);
  } catch (a) {
    logMCPDebug(e, `Failed to cache SKILL.md for '${r.name}': ${l(a)}`);
  }
}
function D({
  client: e,
  uri: r,
  fallbackName: s,
  rawContent: c,
  builders: { createSkillCommand: o, parseSkillFrontmatterFields: a },
}) {
  let p = sanitizeDeep(c),
    { frontmatter: k, content: t } = parseFrontmatter(p, r, { normalizeKeys: !0 }),
    h = escapeMultilineText(t),
    m = a(k, h, s),
    d = normalizeMcpName(s);
  if (m.hooks)
    logMCPDebug(
      e.name,
      `Skill '${d}' declared hooks in frontmatter \u2014 ignored (MCP-sourced skills cannot register hooks)`,
    );
  if (m.allowedTools.length > 0)
    logMCPDebug(
      e.name,
      `Skill '${d}' declared allowed-tools in frontmatter \u2014 ignored (MCP-sourced skills cannot bypass permissions)`,
    );
  let _ = `${normalizeMcpName(e.name)}:${d}`,
    L = F(r),
    C = L
      ? {
          server: stripInvisibleChars(e.name),
          uri: stripInvisibleChars(L),
          directoryRead: T().serverDeclaresDirectoryRead(e.capabilities),
        }
      : void 0;
  return (
    logMCPDebug(e.name, `Loaded MCP skill '${d}' from ${r}`),
    o({
      ...m,
      ...escapeCommandFrontmatter(m),
      ...createEmptyCommandMetadata(),
      displayName: escapeOptionalSingleLineText(m.displayName),
      skillName: _,
      markdownContent: h,
      source: "mcp",
      baseDir: void 0,
      mcpResourceRoot: C,
      loadedFrom: "mcp",
    })
  );
}
export {
  fetchMcpSkillsForClient,
  invalidateMcpSkillsExcept,
  invalidateMcpSkillsForServer,
};

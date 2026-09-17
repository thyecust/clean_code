// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { createJsonFileStore } from "../../01-核心基础设施/共享小工具-未细化/json-file-store.js";
import { normalizeMcpName } from "../../01-核心基础设施/共享小工具-未细化/mcp-name-normalization.js";
import { s, T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { readFile, stat as v } from "fs/promises";
import { join as f } from "path";
var MCP_SKILL_ARCHIVES_DIR_NAME = "mcp-skill-archives",
  p = "meta.json",
  SKILL_FILE_NAME = "SKILL.md",
  I = 86400000,
  k = createLazyValue(() =>
    c({
      uri: s().optional(),
      cacheKey: s(),
      declaredDigest: s().optional(),
      fetchedAt: T(),
    }),
  );
function S() {
  return f(getClaudeConfigDir(), MCP_SKILL_ARCHIVES_DIR_NAME);
}
function g(e, t) {
  return STORAGE_KEYS.userConfigDir(MCP_SKILL_ARCHIVES_DIR_NAME, [e, t, SKILL_FILE_NAME]);
}
function w(e) {
  return STORAGE_KEYS.userConfigDir(MCP_SKILL_ARCHIVES_DIR_NAME, [e, p]);
}
function C(e) {
  return createJsonFileStore(f(e, p), () => k().nullable(), {
    defaultValue: null,
    ensureDir: !0,
  });
}
function y(e, t, i) {
  let r = hashSha256(`${e}\x00${i}`).slice(0, 8),
    o = t.replace(/[^A-Za-z0-9._-]/g, "-").slice(0, 64);
  return `${normalizeMcpName(e)}--${o}--${r}`;
}
function parseSha256Digest(e) {
  if (!e) return;
  let t = /^(?:sha256:)?([0-9a-fA-F]{64})$/.exec(e.trim());
  return t ? t[1].toLowerCase() : void 0;
}
async function readMcpSkillCacheMeta(e) {
  try {
    return await C(e).read();
  } catch {
    return null;
  }
}
async function _(e, t) {
  await C(e).write(t);
}
async function E(e, t) {
  let i = await e.read([w(t)]);
  if (!i.ok) return null;
  let r = i.value.items[0];
  if (!r.found) return null;
  let o;
  try {
    o = z(Buffer.from(r.value).toString("utf8"));
  } catch (a) {
    return (
      n(`mcpSkillCache: meta.json for ${t} is not valid JSON: ${a}`, {
        level: "warn",
      }),
      null
    );
  }
  let l = k().nullable().safeParse(o);
  if (!l.success)
    return (
      n(
        `mcpSkillCache: meta.json for ${t} failed schema validation: ${l.error.message}`,
        { level: "warn" },
      ),
      null
    );
  return l.data;
}
async function L(e, t, i) {
  let r = await e.write(w(t), b(i), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask(),
  });
  if (!r.ok)
    throw new R(
      `meta.json write failed: ${We(r.error)}`,
      "MCP skill cache meta.json write failed",
    );
}
async function readCachedMcpSkill(e, t, i) {
  let r = y(e, t.name, t.uri),
    o = f(S(), r),
    l = { hit: !1, slugDir: o },
    a,
    d = parseSha256Digest(t.digest ?? void 0);
  if (d) a = d;
  else {
    let u = i ? await E(i, r) : await readMcpSkillCacheMeta(o);
    if (!u || Date.now() - u.fetchedAt >= I) return l;
    a = u.cacheKey;
  }
  if (i) {
    let u = await i.read([g(r, a)]);
    if (!u.ok) return l;
    let h = u.value.items[0];
    return h.found
      ? { hit: !0, cacheKey: a, skillMd: Buffer.from(h.value).toString("utf8") }
      : l;
  }
  let D = f(o, a);
  try {
    let u = await readFile(f(D, SKILL_FILE_NAME), "utf8");
    return { hit: !0, cacheKey: a, skillMd: u };
  } catch {
    return l;
  }
}
async function isMcpSkillContentCached(e, t, i, r) {
  return r
    ? (await r.statMeta(g(e, t))).ok
    : v(f(i, SKILL_FILE_NAME))
        .then((o) => o.isFile())
        .catch(() => !1);
}
async function resolveMcpSkillCacheEntry(e, t, i, r) {
  let o = y(e, t.name, t.uri),
    l = f(S(), o),
    a = f(l, i),
    d = await isMcpSkillContentCached(o, i, a, r);
  if (d) logMCPDebug(e, `Skill '${t.name}' content unchanged \u2014 reusing ${a}`);
  return { slug: o, slugDir: l, keyDir: a, alreadyCached: d };
}
async function x(e, t, i) {
  for (let r of [[t, i], [t]]) {
    let o = STORAGE_KEYS.userConfigDir(MCP_SKILL_ARCHIVES_DIR_NAME, r);
    if ((await e.statMeta(o)).ok) {
      n(
        `[mcp-skills] replacing a stray file at ${MCP_SKILL_ARCHIVES_DIR_NAME}/${r.join("/")} with the cache directory`,
      );
      let l = await e.delete(o);
      if (!l.ok) n(`[mcp-skills] could not remove it: ${We(l.error)}`);
      return l.ok;
    }
  }
  return !1;
}
async function writeMcpSkillContent(e, t, i, r) {
  let o = g(t, i),
    l = { publishDiscipline: "atomic", mode: 438 & ~process.umask() },
    a = await e.write(o, r, l);
  if (
    !a.ok &&
    a.error.code === "Failed" &&
    (a.error.telemetryCode === "ENOTDIR" ||
      a.error.telemetryCode === "ENOENT") &&
    (await x(e, t, i))
  )
    a = await e.write(o, r, l);
  if (!a.ok)
    throw new R(
      `SKILL.md write failed: ${We(a.error)}`,
      "MCP skill cache SKILL.md write failed",
    );
}
async function writeMcpSkillCacheMeta(e, t, i, r) {
  let o = {
    uri: t.uri,
    cacheKey: i,
    declaredDigest: parseSha256Digest(t.digest ?? void 0),
    fetchedAt: Date.now(),
  };
  if (isHoverRestEnabled() && r) {
    await L(r, e.slug, o);
    return;
  }
  await _(e.slugDir, o);
}
export { MCP_SKILL_ARCHIVES_DIR_NAME, SKILL_FILE_NAME, parseSha256Digest, readMcpSkillCacheMeta, readCachedMcpSkill, isMcpSkillContentCached, resolveMcpSkillCacheEntry, writeMcpSkillContent, writeMcpSkillCacheMeta };

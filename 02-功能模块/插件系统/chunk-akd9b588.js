// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { pluralize, truncateWithCharCount, normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { stripInvisibleChars } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { CS, zrt } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, jsonStringify, jsonParse, getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import {
  removeInvisibleChars,
  isHookMatcher,
  hasMisplacedGuardHooks,
  EMPTY_KEY_SET,
  UNLOADABLE_GUARD_HOOK_NOTE,
  validateHooksConfig,
  getHooksJsonSchema,
  BINARIES_BASENAME_PATTERN,
  SHA256_HEX_PATTERN,
  MAX_FETCHED_BINARIES,
  MAX_DECLARED_BINARIES,
  MAX_PLUGIN_FILE_BYTES,
  parsePluginBinaries,
  getPluginManifestSchema,
  isDotRelativeSourcePath,
  getRelevanceSignalsSchema,
  getPluginRelevanceSchema,
  getMarketplacePluginSchema,
  isBarePluginSourceName,
  normalizePluginRootPath,
  resolvePluginEntrySource,
  resolveMarketplacePluginSources,
  getMarketplaceManifestSchema,
  getMarketplaceSchema,
  getPluginIdSchema,
} from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { externalHttp } from "../../01-核心基础设施/HTTP-网络层/external-http.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { getPluginRegistryFileScope, getPluginsDir } from "./plugin-system-core.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { execFileNoThrow } from "../工作树-Git/git-exec-hardening.js";
import { findGitRoot } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { cs } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { logPluginRemoteFetch, classifyNetworkErrorKind, MAX_MARKETPLACE_CATALOG_BYTES, hasHeadersHelper, isRequestRoutingHeader } from "./chunk-ajtn749s.js";
import { FRONTMATTER_PATTERN, parseFrontmatterYaml } from "../MCP客户端/chunk-3kmsshb6.js";
import { analyzeHooksModule } from "../Hooks钩子/chunk-z3433nr6.js";
import { validatePluginManifest, damerauLevenshteinDistance, buildVersionTagName, resolvePluginRenameChain } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isNonMarketplacePluginSource, hasNonMarketplacePluginSource, getNonMarketplacePluginSource, splitPluginIdOnLastAt, getPluginMarketplace, isEqualIgnoringCase } from "./chunk-33bdfgmx.js";
import { SUPPORTED_BINARY_TARGETS, stripBinaryTargetSuffix, isExistingDirectory, checkContainedDirectory, readOptionalFileContent, readTextFileCapped } from "../制品发布-Artifact/chunk-01ymf0ar.js";
import { pg } from "../../00-第三方库/semver/chunk-jm5cswvd.js";
import { s, T, se, v, c, fe, ai } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { isRecord } from "../../01-核心基础设施/核心工具-类型与数值/is-record.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { toESM } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
function de(e, t, a) {
  if (isOrphanPluginEntry(e)) return !1;
  if (e.source === t) return !0;
  return "plugin" in e && e.plugin === a && getNonMarketplacePluginSource(e.source) === getNonMarketplacePluginSource(t);
}
function isOrphanPluginEntry(e) {
  return "orphan" in e && e.orphan === !0;
}
function isErrorForPlugin(e, t) {
  return de(e, t.source, t.name);
}
function isWarningForPlugin(e, t) {
  return de(e, t.source, t.name);
}
function Xe(e, t, a) {
  if (hasNonMarketplacePluginSource(e.source)) return !1;
  if (e.source === t) return !0;
  let r = getPluginMarketplace(e.source);
  return "plugin" in e && e.plugin === a && (r === void 0 || r === getPluginMarketplace(t));
}
function isDiagnosticForPlugin(e, t, a) {
  return isNonMarketplacePluginSource(getPluginMarketplace(t)) ? de(e, t, a) : Xe(e, t, a) && !isOrphanPluginEntry(e);
}
function resolvePluginIdentity(e, t) {
  let a = t.filter((k) => isDiagnosticForPlugin(e, k.source, k.name)),
    r = a.length === 1 ? a[0] : a.find((k) => isEqualIgnoringCase(k.source, e.source));
  if (r) return { name: r.name, marketplace: getPluginMarketplace(r.source) };
  let [o] = a;
  if (o !== void 0) return { name: o.name, marketplace: void 0 };
  let { name: i, marketplace: f } = splitPluginIdOnLastAt(e.source);
  if (f !== void 0) return { name: i, marketplace: f };
  let u = getNonMarketplacePluginSource(e.source);
  return {
    name: u !== void 0 && "plugin" in e && e.plugin ? e.plugin : i,
    marketplace: u,
  };
}
import { readFile as Je, unlink } from "fs/promises";
import { join as je } from "path";
var he = 1,
  Qe = "plugin-catalog-cache.json",
  Z =
    "https://storage.googleapis.com/claude-code-dist-86c565f3-f756-42ad-8dfa-d59b1c096819/plugin-stats/plugin-details.json",
  et = 86400000,
  Te = createLazyValue(() => c({ always_on: T(), on_invoke: T() })),
  ge = createLazyValue(() => c({ name: s(), chars: Te().optional() }).loose()),
  tt = createLazyValue(() =>
    c({
      plugin: s(),
      tokens: fe(s(), Te()),
      components: c({
        commands: v(ge()),
        agents: v(ge()),
        skills: v(ge()),
        hooks: v(s()).optional(),
        mcpServers: v(s()).optional(),
        lspServers: v(s()).optional(),
      }).loose(),
      unique_installs: T().optional(),
      last_updated: s().optional(),
      marketplace_entry: fe(s(), se()),
    }).loose(),
  ),
  Ae = createLazyValue(() =>
    c({
      generated_at: s(),
      installs_generated_at: s().optional(),
      marketplace_sha: s(),
      models: v(s()),
      plugins: fe(s(), tt()),
    }).loose(),
  ),
  nt = createLazyValue(() => c({ version: T(), fetchedAt: s(), catalog: Ae() }));
function Ne() {
  return je(getPluginsDir(), Qe);
}
async function at(e) {
  let t = Ne(),
    a = isHoverRestEnabled() && e !== void 0 ? getPluginRegistryFileScope("catalog", getPluginsDir()) : null;
  if (e && a) {
    let r = await e.read([a]);
    if (!r.ok)
      return (logForDebugging(`Failed to load plugin catalog cache: ${describeStorageError(r.error)}`), null);
    let o = r.value.items[0];
    if (!o.found) return null;
    let i = o.value;
    return Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString("utf-8");
  }
  return await Je(t, { encoding: "utf-8" });
}
async function st(e) {
  try {
    let t = await at(e);
    if (t === null) return null;
    let a = nt().safeParse(jsonParse(t));
    if (!a.success)
      return (logForDebugging("Plugin catalog cache has invalid structure"), null);
    let r = a.data;
    if (r.version !== he)
      return (
        logForDebugging(
          `Plugin catalog cache version mismatch (got ${r.version}, expected ${he})`,
        ),
        null
      );
    let o = new Date(r.fetchedAt).getTime();
    if (Number.isNaN(o) || Date.now() - o > et)
      return (logForDebugging("Plugin catalog cache is stale (>24 h old)"), null);
    return r;
  } catch (t) {
    if (!W(t)) logForDebugging(`Failed to load plugin catalog cache: ${l(t)}`);
    return null;
  }
}
async function rt(e, t) {
  try {
    let a = Ne(),
      r = isHoverRestEnabled() && t !== void 0 ? getPluginRegistryFileScope("catalog", getPluginsDir()) : null;
    if (t && r) {
      let o = await t.write(r, jsonStringify(e));
      if (!o.ok) {
        logForDebugging(`Failed to save plugin catalog cache: ${describeStorageError(o.error)}`, {
          level: "error",
        });
        return;
      }
    } else (await getFsSurface().mkdir(getPluginsDir()), await writeFileAtomic(a, jsonStringify(e), 384));
    await unlink(je(getPluginsDir(), "install-counts-cache.json")).catch(() => {});
  } catch (a) {
    logForDebugging(`Failed to save plugin catalog cache: ${l(a)}`, { level: "error" });
  }
}
async function ot() {
  logForDebugging(`Fetching plugin catalog from ${Z}`);
  let e = performance.now();
  try {
    let t = await externalHttp.get(Z, { timeout: 1e4, maxContentLength: MAX_MARKETPLACE_CATALOG_BYTES }),
      a = Ae().safeParse(t.data);
    if (!a.success) throw Error("Invalid response format from plugin catalog");
    return (logPluginRemoteFetch("plugin_catalog", Z, "success", performance.now() - e), a.data);
  } catch (t) {
    throw (logPluginRemoteFetch("plugin_catalog", Z, "failure", performance.now() - e, classifyNetworkErrorKind(t)), t);
  }
}
class xe {
  promise;
  load(e) {
    return (this.promise ??= e());
  }
  reset() {
    this.promise = void 0;
  }
}
var it = new j(() => new xe());
function Me(e) {
  let t = it.of(B().host);
  return t.load(async () => {
    let a = await st(e);
    if (a) return (logPluginRemoteFetch("plugin_catalog", Z, "cache_hit", 0), a.catalog);
    try {
      let r = await ot();
      return (
        await rt(
          { version: he, fetchedAt: new Date().toISOString(), catalog: r },
          e,
        ),
        r
      );
    } catch (r) {
      return (
        logForDebugging(`Failed to fetch plugin catalog: ${l(r)}`, { level: "error" }),
        t.reset(),
        null
      );
    }
  });
}
async function fetchPluginInstallCounts(e) {
  let t = await Me(e);
  if (!t) return null;
  let a = new Map();
  for (let [r, o] of Object.entries(t.plugins))
    if (typeof o.unique_installs === "number") a.set(r, o.unique_installs);
  return a;
}
async function getPluginCatalogEntry(e, t) {
  return (await Me(t))?.plugins[e];
}
var PLUGIN_CONTEXT_COST_WARNING_THRESHOLD = 2000,
  Re = 3;
async function estimatePluginContextCost(e, t, a) {
  let r = await getPluginCatalogEntry(e, a);
  if (!r) return null;
  let o = r.tokens[t];
  if (o)
    return { alwaysOn: o.always_on, onInvoke: o.on_invoke, isEstimate: !1 };
  let i = [
      ...r.components.commands,
      ...r.components.agents,
      ...r.components.skills,
    ],
    f = 0,
    u = 0;
  for (let k of i)
    ((f += k.chars?.always_on ?? 0), (u += k.chars?.on_invoke ?? 0));
  return {
    alwaysOn: Math.round(f / Re),
    onInvoke: Math.round(u / Re),
    isEstimate: !0,
  };
}
function formatCompactCount(e) {
  if (e < 1000) return String(e);
  if (e < 1e6) {
    let a = (e / 1000).toFixed(1);
    return a.endsWith(".0") ? `${a.slice(0, -2)}K` : `${a}K`;
  }
  let t = (e / 1e6).toFixed(1);
  return t.endsWith(".0") ? `${t.slice(0, -2)}M` : `${t}M`;
}
import {
  lstat,
  readdir,
  readFile as $e,
  stat as ze,
} from "fs/promises";
import * as h from "path";
var ct = new Set([
    "category",
    "source",
    "tags",
    "strict",
    "id",
    "relevance",
    "headers",
    "headersHelper",
  ]),
  Ie = new Map([
    ["publisher", "a VS Code/Cursor extension manifest"],
    ["engines", "a VS Code/Cursor extension manifest"],
    ["categories", "a VS Code/Cursor extension manifest"],
    ["icon", "a VS Code/Cursor extension manifest"],
    ["contributes", "a VS Code/Cursor extension manifest"],
    ["activationEvents", "a VS Code/Cursor extension manifest"],
    ["preview", "a VS Code/Cursor extension manifest"],
    ["main", "an npm package.json"],
    ["type", "an npm package.json"],
    ["files", "an npm package.json"],
    ["bin", "an npm package.json"],
    ["scripts", "an npm package.json"],
    ["private", "an npm package.json"],
    ["bugs", "an npm package.json"],
    ["contributors", "an npm package.json"],
    ["dxt_version", "an MCPB/DXT manifest"],
    ["mcpb_version", "an MCPB/DXT manifest"],
    ["user_config", "an MCPB/DXT manifest"],
    ["compatibility", "an MCPB/DXT manifest"],
    ["server", "an MCP server manifest"],
    ["tools", "an MCP server manifest"],
    ["prompts", "an MCP server manifest"],
    ["resources", "an MCP server manifest"],
    ["logo", "manifests across many tools"],
    ["readme", "manifests across many tools"],
    ["changelog", "manifests across many tools"],
    ["support", "manifests across many tools"],
    ["privacy_policy", "manifests across many tools"],
    ["privacy_policies", "manifests across many tools"],
    ["terms_of_service", "manifests across many tools"],
    ["_comment", "manifests across many tools"],
    ["$id", "a JSON Schema document"],
    ["$comment", "a JSON Schema document"],
  ]),
  ut = new Map([["user_config", "userConfig"]]),
  dt = ["monitors", "themes"],
  Ve = new Set([
    "themes",
    "monitors",
    "outputStyles",
    "evals",
    "syntaxHighlighting",
  ]);
function summarizeValidationResults(e, t) {
  let a = e.every((o) => o.success),
    r = e.some((o) => o.warnings.length > 0);
  return { noErrors: a, hasWarnings: r, allSuccess: t.strict ? a && !r : a };
}
function _e(e) {
  try {
    return (new RegExp(e), !0);
  } catch {
    return !1;
  }
}
function X(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function pt(e) {
  let t = h.basename(e),
    a = h.basename(h.dirname(e));
  if (t === "plugin.json") return "plugin";
  if (t === "marketplace.json") return "marketplace";
  if (a === ".claude-plugin") return "plugin";
  return "unknown";
}
function De(e) {
  return e.issues.map((t) => ({
    path: t.path.join(".") || "root",
    message: t.message,
    code: t.code,
  }));
}
function mt(e, t) {
  if (Ie.has(e)) return;
  let a = e.length <= 3 ? 1 : 2,
    r = e.toLowerCase(),
    o,
    i = a + 1;
  for (let f of t) {
    if (Math.abs(f.length - e.length) > a) continue;
    if (f.toLowerCase() === r) return f;
    let u = damerauLevenshteinDistance(e, f);
    if (u < i) ((i = u), (o = f));
  }
  return o;
}
function ft(e, t, a) {
  if (a?.has(e))
    return (
      `Field '${e}' belongs in the marketplace entry (marketplace.json), ` +
      "not plugin.json. It's harmless here but unused \u2014 Claude Code " +
      "ignores it at load time."
    );
  let r = mt(e, t);
  if (r)
    return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let o = ut.get(e);
  if (o && t.has(o))
    return (
      `Field '${e}' is the cross-tool spelling of Claude Code's '${o}'. Rename it to '${o}' for Claude Code to read it (the option ` +
      "shapes differ slightly \u2014 re-run validate after renaming to check). " +
      "As-is, Claude Code ignores it at load time."
    );
  let i = Ie.get(e);
  if (i)
    return `Unknown field '${e}' (commonly seen in ${i}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function H(e, t, a, r, o) {
  for (let i of Object.keys(e)) {
    if (t.has(i)) continue;
    r.push({ path: a ? `${a}.${i}` : i, message: ft(i, t, o) });
  }
}
function we(e, t, a, r) {
  if (e.includes(".."))
    a.push({
      path: t,
      message: r
        ? `Path contains "..": ${e}. ${r}`
        : `Path contains ".." which could be a path traversal attempt: ${e}`,
    });
}
function gt(e) {
  let t = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${t !== e ? `./${t}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function ee(e) {
  return q(await ht(e));
}
async function ht(e) {
  let t = h.resolve(e),
    a;
  try {
    a = await $e(t, { encoding: "utf-8" });
  } catch (r) {
    let o = A(r),
      i;
    if (o === "ENOENT") i = `File not found: ${t}`;
    else if (o === "EISDIR") i = `Path is not a file: ${t}`;
    else i = `Failed to read file: ${l(r)}`;
    return {
      success: !1,
      errors: [{ path: "file", message: i, code: o }],
      warnings: [],
      filePath: t,
      fileType: "plugin",
    };
  }
  return He(t, a);
}
async function He(e, t) {
  let a = [],
    r = [],
    o;
  try {
    o = jsonParse(cs(t));
  } catch (u) {
    return {
      success: !1,
      errors: [{ path: "json", message: `Invalid JSON syntax: ${l(u)}` }],
      warnings: [],
      filePath: e,
      fileType: "plugin",
    };
  }
  let i = validatePluginManifest(o, "plugin-json", {
    pluginName: h.basename(h.dirname(h.dirname(e))),
    manifestPath: e,
  });
  if (!i.ok) a.push(...i.errors.map((u) => ({ ...u, path: u.path || "root" })));
  else
    r.push(
      ...i.hookNotes.map((u) => ({
        path: "hooks",
        message: `${u} at runtime`,
      })),
    );
  if (o && typeof o === "object") {
    let u = i.rawCandidate ?? o,
      k = h.dirname(e),
      C = h.basename(k) === ".claude-plugin" ? h.dirname(k) : k,
      w = async (y, p) => {
        if (
          (we(y, p, a),
          y.includes("..") || h.isAbsolute(y) || /^[a-zA-Z]:/.test(y))
        )
          return;
        try {
          return await ze(h.resolve(C, y));
        } catch (S) {
          let R = A(S);
          a.push({
            path: p,
            message: `Path not found: ${y}${R && R !== "ENOENT" ? ` (${R})` : ""}. The runtime loader will report this as a load failure.`,
          });
          return;
        }
      };
    if (u.commands) {
      if (typeof u.commands === "string") await w(u.commands, "commands");
      else if (Array.isArray(u.commands)) {
        for (let [y, p] of u.commands.entries())
          if (typeof p === "string") await w(p, `commands[${y}]`);
      } else if (typeof u.commands === "object") {
        for (let [y, p] of Object.entries(u.commands))
          if (
            p &&
            typeof p === "object" &&
            "source" in p &&
            typeof p.source === "string"
          )
            await w(p.source, `commands.${y}.source`);
      }
    }
    if (u.hooks) {
      let y = Array.isArray(u.hooks) ? u.hooks : [u.hooks];
      for (let [p, S] of y.entries())
        if (typeof S === "string") await w(S, `hooks[${p}]`);
    }
    if (u.agents) {
      let y = Array.isArray(u.agents) ? u.agents : [u.agents];
      for (let [p, S] of y.entries())
        if (typeof S === "string") await w(S, `agents[${p}]`);
    }
    if (u.skills) {
      let y = Array.isArray(u.skills) ? u.skills : [u.skills];
      for (let [p, S] of y.entries()) {
        if (typeof S !== "string") continue;
        let R = await w(S, `skills[${p}]`);
        if (R && !R.isDirectory()) {
          let E = h.dirname(S),
            d =
              h.basename(S).toLowerCase() === "skill.md"
                ? E === "."
                  ? " \u2014 point to the plugin root '.' instead"
                  : ` \u2014 point to the parent directory '${E}' instead`
                : "";
          a.push({
            path: `skills[${p}]`,
            message: `Path is a file; skills entries must be directories containing SKILL.md${d}: ${S}`,
          });
        }
      }
    }
    if (u.workflows) {
      let y = Array.isArray(u.workflows) ? u.workflows : [u.workflows];
      for (let [p, S] of y.entries())
        if (typeof S === "string") await w(S, `workflows[${p}]`);
    }
  }
  if (isRecord(o)) {
    let u = o,
      k = i.rawCandidate ?? u;
    if (
      (H(k, new Set(Object.keys(getPluginManifestSchema().shape)), "", r, ct), "capabilities" in k)
    ) {
      let C = r.findIndex((y) => y.path === "capabilities"),
        w = {
          path: "capabilities",
          message:
            "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field.",
        };
      if (C === -1) r.push(w);
      else r[C] = w;
    }
    for (let C of dt)
      if (C in u)
        r.push({
          path: C,
          message: `'${C}' is an experimental component; declare it under 'experimental.${C}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`,
        });
    if ("experimental" in u)
      if (isRecord(u.experimental)) {
        let C = u.experimental;
        H(C, Ve, "experimental", r);
      } else
        r.push({
          path: "experimental",
          message: `'experimental' must be an object containing component declarations; got ${X(u.experimental)}. It will be ignored at load time.`,
        });
    if ("metadata" in k && !isRecord(k.metadata))
      r.push({
        path: "metadata",
        message: `'metadata' must be a free-form object; got ${X(k.metadata)}. It will be ignored at load time.`,
      });
    if ("binaries" in u)
      if (isRecord(u.binaries)) {
        let C = parsePluginBinaries(u.binaries) ?? {},
          w = 0;
        for (let [p, S] of Object.entries(u.binaries)) {
          if (
            BINARIES_BASENAME_PATTERN.test(p) &&
            typeof S === "object" &&
            S !== null &&
            typeof S.sha256 === "string" &&
            SHA256_HEX_PATTERN.test(S.sha256)
          ) {
            w++;
            continue;
          }
          if (!Object.hasOwn(C, p))
            r.push({
              path: `binaries.${p}`,
              message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String(BINARIES_BASENAME_PATTERN)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.`,
            });
        }
        if (w > MAX_DECLARED_BINARIES)
          r.push({
            path: "binaries",
            message: `${w} valid binaries entries declared, but the install hook processes at most ${MAX_DECLARED_BINARIES}; the rest are dropped entirely.`,
          });
        let y = Object.keys(C).length;
        if (y > MAX_FETCHED_BINARIES)
          r.push({
            path: "binaries",
            message: `${y} valid binaries entries declared, but only the first ${MAX_FETCHED_BINARIES} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.`,
          });
      } else
        r.push({
          path: "binaries",
          message: `'binaries' must be an object mapping basenames to { sha256 }; got ${X(u.binaries)}. It will be ignored at install time.`,
        });
  }
  let f = i.manifest;
  if (f) {
    let u = f;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(u.name))
      r.push({
        path: "name",
        message: `Plugin name "${u.name}" is not kebab-case. Claude Code accepts it, but the Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").`,
      });
    if (!u.version)
      r.push({
        path: "version",
        message:
          'No version specified. Consider adding a version following semver (e.g., "1.0.0")',
      });
    if (!u.description)
      r.push({
        path: "description",
        message:
          "No description provided. Adding a description helps users understand what your plugin does",
      });
    if (!u.author)
      r.push({
        path: "author",
        message:
          "No author information provided. Consider adding author details for plugin attribution",
      });
  }
  return {
    success: a.length === 0,
    errors: a,
    warnings: r,
    filePath: e,
    fileType: "plugin",
  };
}
var Oe = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/,
  yt = new Set(["org", "org-provisioned", "unknown"]);
async function ye(e) {
  return q(await kt(e));
}
async function kt(e) {
  let t = [],
    a = [],
    r = h.resolve(e),
    o;
  try {
    o = await $e(r, { encoding: "utf-8" });
  } catch (d) {
    let g = A(d),
      P;
    if (g === "ENOENT") P = `File not found: ${r}`;
    else if (g === "EISDIR") P = `Path is not a file: ${r}`;
    else P = `Failed to read file: ${l(d)}`;
    return {
      success: !1,
      errors: [{ path: "file", message: P, code: g }],
      warnings: [],
      filePath: r,
      fileType: "marketplace",
    };
  }
  let i;
  try {
    i = jsonParse(cs(o));
  } catch (d) {
    return {
      success: !1,
      errors: [{ path: "json", message: `Invalid JSON syntax: ${l(d)}` }],
      warnings: [],
      filePath: r,
      fileType: "marketplace",
    };
  }
  let f = [],
    u = isRecord(i) && isRecord(i.metadata) ? i.metadata.pluginRoot : void 0,
    k = normalizePluginRootPath(u);
  if (i && typeof i === "object") {
    let d = i;
    if (Array.isArray(d.plugins))
      ((f = d.plugins),
        d.plugins.forEach((g, P) => {
          if (g && typeof g === "object" && "source" in g) {
            let N = g.source;
            if (typeof N === "string") we(N, `plugins[${P}].source`, t, gt(N));
            if (isBarePluginSourceName(N) && k === void 0)
              t.push({
                path: `plugins[${P}].source`,
                message:
                  u === void 0
                    ? `Bare source name "${N}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.`
                    : typeof u === "string"
                      ? `Bare source name "${N}" cannot resolve: metadata.pluginRoot ("${u}") must be a relative path inside the marketplace (e.g. "./plugins").`
                      : `Bare source name "${N}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").`,
              });
            if (
              N &&
              typeof N === "object" &&
              "path" in N &&
              typeof N.path === "string"
            )
              we(N.path, `plugins[${P}].source.path`, t);
          }
        }));
  }
  let C = getPluginRelevanceSchema()
      .extend({
        topic: s().min(1).max(64).optional(),
        signals: getRelevanceSignalsSchema()
          .extend({
            cli: v(s().min(1).max(64)).max(10).optional(),
            hosts: v(
              s()
                .min(1)
                .max(128)
                .refine(
                  (d) => /^[a-z0-9.-]+$/.test(d),
                  "must be a lowercase bare hostname (no scheme, port, or path)",
                ),
            )
              .max(20)
              .optional(),
            filesRead: v(
              s()
                .min(1)
                .max(256)
                .refine(
                  (d) => !d.includes("\\"),
                  'must use forward slashes (e.g. "**/*.tf"), not backslashes',
                ),
            )
              .max(10)
              .optional(),
            manifestDeps: v(
              c({
                file: s()
                  .min(1)
                  .max(256)
                  .refine(_e, "must be a valid regular expression"),
                pattern: s()
                  .min(1)
                  .max(256)
                  .refine(_e, "must be a valid regular expression"),
              }),
            )
              .min(1)
              .max(10)
              .optional(),
            cwd: v(
              s()
                .min(1)
                .max(256)
                .refine(
                  (d) => !d.includes("\\"),
                  'must use forward slashes (e.g. "Engine/Source/**"), not backslashes',
                ),
            )
              .max(10)
              .optional(),
          })
          .refine(
            (d) =>
              (d.cli?.length ?? 0) > 0 ||
              (d.hosts?.length ?? 0) > 0 ||
              (d.filesRead?.length ?? 0) > 0 ||
              (d.manifestDeps?.length ?? 0) > 0 ||
              (d.cwd?.length ?? 0) > 0,
            "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)",
          ),
      })
      .optional(),
    w = getMarketplacePluginSchema()
      .extend({ relevance: ai((d) => (isRecord(d) ? d : void 0), C) })
      .refine(
        (d) =>
          typeof d.source === "string" || d.source.source !== "unsupported",
        {
          message:
            "source.source: 'unsupported' is a parse-time placeholder and cannot be authored",
        },
      ),
    p = getMarketplaceManifestSchema()
      .extend({ plugins: v(w), renames: fe(s(), s().nullable()).optional() })
      .safeParse(resolveMarketplacePluginSources(i));
  if (!p.success) t.push(...De(p.error));
  if (p.success && p.data.renames) {
    let d = new Set(p.data.plugins.map((g) => g.name));
    for (let g of Object.keys(p.data.renames)) {
      let P = resolvePluginRenameChain(g, p.data.renames, d);
      if (P?.kind === "unresolved")
        t.push({
          path: `renames.${g}`,
          message: `chain does not resolve (${P.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`,
        });
      else if (
        P?.kind === "renamed" &&
        !getPluginIdSchema().safeParse(`${P.to}@placeholder`).success
      )
        t.push({
          path: `renames.${g}`,
          message: `target "${P.to}" is not a valid plugin name (PluginIdSchema)`,
        });
    }
  }
  if (isRecord(i)) {
    let d = i;
    if (
      (H(d, new Set(Object.keys(getMarketplaceManifestSchema().shape)), "", a),
      typeof d.name === "string" && d.name)
    ) {
      if (yt.has(d.name.toLowerCase()))
        a.push({
          path: "name",
          message: `Marketplace name "${d.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`,
        });
      else if (!Oe.test(d.name))
        a.push({
          path: "name",
          message: `Marketplace name "${d.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`,
        });
    }
    let g = d.metadata;
    if (isRecord(g))
      H(
        g,
        new Set(Object.keys(getMarketplaceManifestSchema().shape.metadata.unwrap().shape)),
        "metadata",
        a,
      );
    if (Array.isArray(d.plugins)) {
      let P = new Set(Object.keys(getMarketplacePluginSchema().shape)),
        N = new Set(Object.keys(getPluginRelevanceSchema().shape)),
        O = new Set(Object.keys(getRelevanceSignalsSchema().shape));
      d.plugins.forEach((F, L) => {
        if (!isRecord(F)) return;
        let _ = F;
        if (
          (H(_, P, `plugins[${L}]`, a),
          typeof _.name === "string" && _.name && !Oe.test(_.name))
        )
          a.push({
            path: `plugins[${L}].name`,
            message: `Plugin name "${_.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry.`,
          });
        let D = _.experimental;
        if (isRecord(D)) H(D, Ve, `plugins[${L}].experimental`, a);
        else if (D !== void 0)
          a.push({
            path: `plugins[${L}].experimental`,
            message: `'experimental' must be an object containing component declarations; got ${X(D)}. It will be ignored at load time.`,
          });
        let V = _.relevance;
        if (isRecord(V)) {
          H(V, N, `plugins[${L}].relevance`, a);
          let J = V.signals;
          if (isRecord(J)) H(J, O, `plugins[${L}].relevance.signals`, a);
        } else if (V !== void 0)
          a.push({
            path: `plugins[${L}].relevance`,
            message: `'relevance' must be an object containing topic and signals; got ${X(V)}. It will be ignored at load time.`,
          });
        let K = _.metadata;
        if (K !== void 0 && !isRecord(K))
          a.push({
            path: `plugins[${L}].metadata`,
            message: `'metadata' must be a free-form object; got ${X(K)}. It will be ignored at load time.`,
          });
      });
    }
  }
  if (p.success) {
    let d = p.data;
    if (!d.plugins || d.plugins.length === 0)
      a.push({
        path: "plugins",
        message: "Marketplace has no plugins defined",
      });
    if (d.plugins)
      d.plugins.forEach((g, P) => {
        if (d.plugins.filter((F) => F.name === g.name).length > 1)
          t.push({
            path: `plugins[${P}].name`,
            message: `Duplicate plugin name "${g.name}" found in marketplace`,
          });
        let O = typeof g.source === "object" && g.source.source === "archive";
        if (O && hasHeadersHelper(g) && g.strict !== !1)
          t.push({
            path: `plugins[${P}].headersHelper`,
            message: `Plugin "${removeInvisibleChars(g.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.`,
          });
        if ((g.headers !== void 0 || hasHeadersHelper(g)) && !O)
          a.push({
            path: `plugins[${P}].${hasHeadersHelper(g) ? "headersHelper" : "headers"}`,
            message: `Plugin "${removeInvisibleChars(g.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.`,
          });
        else if (
          hasHeadersHelper(g) &&
          typeof g.source === "object" &&
          g.source.source === "archive" &&
          !g.source.sha256
        )
          a.push({
            path: `plugins[${P}].source.sha256`,
            message: `Plugin "${removeInvisibleChars(g.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).`,
          });
        for (let F of O ? Object.keys(g.headers ?? {}) : [])
          if (isRequestRoutingHeader(F))
            a.push({
              path: `plugins[${P}].headers.${removeInvisibleChars(F)}`,
              message: `Header "${removeInvisibleChars(F)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.`,
            });
      });
    if (!d.description && !d.metadata?.description)
      a.push({
        path: "description",
        message:
          "No marketplace description provided. Adding a description helps users understand what this marketplace offers",
      });
  }
  let S = getMarketplacePluginSchema(),
    R = h.dirname(r),
    E = h.basename(R) === ".claude-plugin" ? h.dirname(R) : R;
  for (let [d, g] of f.entries()) {
    let P = S.safeParse(resolvePluginEntrySource(g, k));
    if (!P.success) continue;
    let N = P.data,
      O = N.source;
    if (!isDotRelativeSourcePath(O) || O.includes("..")) continue;
    let F = h.join(E, O),
      L = h.join(F, ".claude-plugin", "plugin.json"),
      _ = h.relative(E, L),
      D = await checkContainedDirectory(E, h.join(F, ".claude-plugin"));
    if (D === "not-a-directory") {
      t.push({
        path: `plugins[${d}] plugin.json \u2192 file`,
        code: "ENOTDIR",
        message: `A path component of ${_} is not a directory, so the file cannot be read. The entry will fail to load at install time.`,
      });
      continue;
    }
    if (D === "refused") {
      a.push({
        path: `plugins[${d}].source`,
        message:
          `Local source "${O}" is or traverses a symlink, so ${_} was not read \u2014 ` +
          "validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately.",
      });
      continue;
    }
    if (D !== "ok") continue;
    let V;
    try {
      V = await readTextFileCapped(L);
    } catch (I) {
      t.push({
        path: `plugins[${d}] plugin.json \u2192 file`,
        message: `Failed to read ${_}: ${l(I)}`,
      });
      continue;
    }
    if (V.kind === "refused" || V.kind === "too-large") {
      a.push({
        path: `plugins[${d}].source`,
        message: `${_} ${V.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${MAX_PLUGIN_FILE_BYTES} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.`,
      });
      continue;
    }
    if (V.kind === "absent") continue;
    let K = V.content;
    if (N.version) {
      let I;
      try {
        let U = jsonParse(cs(K));
        if (typeof U.version === "string") I = U.version;
      } catch (U) {
        a.push({
          path: `plugins[${d}].source`,
          message: `Could not parse ${h.relative(E, L)} for version cross-check: ${l(U)}`,
        });
      }
      if (I && I !== N.version) {
        let U = h.relative(E, L);
        a.push({
          path: `plugins[${d}].version`,
          message:
            `Entry declares version "${N.version}" but ${U} says "${I}". ` +
            "At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. " +
            `Update this entry to "${I}" to match.`,
        });
      }
    }
    let J = q(await He(L, K)),
      Ee = `plugins[${d}] plugin.json \u2192 `;
    for (let I of J.errors) t.push({ ...I, path: Ee + I.path });
    for (let I of J.warnings) a.push({ ...I, path: Ee + I.path });
  }
  return {
    success: t.length === 0,
    errors: t,
    warnings: a,
    filePath: r,
    fileType: "marketplace",
  };
}
function sanitizeDiagnosticText(e, t) {
  return normalizeWhitespace(truncateWithCharCount(stripInvisibleChars(e), t));
}
function q(e) {
  return {
    ...e,
    errors: e.errors.map((t) => ({
      ...t,
      path: sanitizeDiagnosticText(t.path, 200),
      message: sanitizeDiagnosticText(t.message, 1000),
    })),
    warnings: e.warnings.map((t) => ({
      path: sanitizeDiagnosticText(t.path, 200),
      message: sanitizeDiagnosticText(t.message, 1000),
    })),
    ...(e.notes !== void 0 && { notes: e.notes.map((t) => sanitizeDiagnosticText(t, 1000)) }),
  };
}
function wt(e, t, a, r) {
  let o = [],
    i = [],
    f = r === "project" && a === "agent",
    u = cs(t).match(FRONTMATTER_PATTERN);
  if (!u) {
    if (!f)
      i.push({
        path: "frontmatter",
        message:
          "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata.",
      });
    return { success: !0, errors: o, warnings: i, filePath: e, fileType: a };
  }
  let k = parseFrontmatterYaml(u[1] || "");
  if (!k.ok) {
    let p =
      a !== "agent"
        ? `At runtime this ${a} loads with empty metadata (all frontmatter fields silently dropped).`
        : r === "project"
          ? "At runtime this agent does not load at all \u2014 with no frontmatter " +
            "name it is treated as a co-located reference document and skipped."
          : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
    return (
      o.push({
        path: "frontmatter",
        message: `YAML frontmatter failed to parse: ${sanitizeDiagnosticText(k.error, 200)}. ` + p,
      }),
      { success: !1, errors: o, warnings: i, filePath: e, fileType: a }
    );
  }
  let C = k.value;
  if (C !== null && !isRecord(C))
    return (
      o.push({
        path: "frontmatter",
        message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(C) ? "an array" : typeof C}.`,
      }),
      { success: !1, errors: o, warnings: i, filePath: e, fileType: a }
    );
  let w = C ?? {};
  if (w.description !== void 0) {
    let p = w.description;
    if (
      typeof p !== "string" &&
      typeof p !== "number" &&
      typeof p !== "boolean" &&
      p !== null
    )
      o.push({
        path: "description",
        message: `description must be a string, got ${Array.isArray(p) ? "array" : typeof p}. At runtime this value is dropped.`,
      });
  } else if (!f || typeof w.name === "string")
    i.push({
      path: "description",
      message: `No description in frontmatter. A description helps users and Claude understand when to use this ${a}.`,
    });
  if (w.name !== void 0 && w.name !== null && typeof w.name !== "string")
    o.push({
      path: "name",
      message: `name must be a string, got ${typeof w.name}.`,
    });
  let y = w["allowed-tools"];
  if (y !== void 0 && y !== null) {
    if (typeof y !== "string" && !Array.isArray(y))
      o.push({
        path: "allowed-tools",
        message: `allowed-tools must be a string or array of strings, got ${typeof y}.`,
      });
    else if (Array.isArray(y) && y.some((p) => typeof p !== "string"))
      o.push({
        path: "allowed-tools",
        message: "allowed-tools array must contain only strings.",
      });
  }
  if (a === "skill" || a === "command") {
    let p = !1;
    ((R) => {
      if (R == null || isRecord(R)) return;
      ((p = !0),
        i.push({
          path: "metadata",
          message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(R) ? "array" : typeof R}. It is dropped at load time.`,
        }));
    })(w.metadata);
  }
  if (a === "skill" || a === "command") {
    let p = w.shell;
    if (p !== void 0 && p !== null)
      if (typeof p !== "string")
        o.push({
          path: "shell",
          message: `shell must be a string, got ${typeof p}.`,
        });
      else {
        let S = p.trim().toLowerCase();
        if (S !== "bash" && S !== "powershell")
          o.push({
            path: "shell",
            message: `shell must be 'bash' or 'powershell', got '${sanitizeDiagnosticText(p, 64)}'.`,
          });
      }
  }
  return {
    success: o.length === 0,
    errors: o,
    warnings: i,
    filePath: e,
    fileType: a,
  };
}
async function bt(e, t) {
  let a = {
      result: {
        success: !0,
        errors: [],
        warnings: [],
        filePath: e,
        fileType: "hooks",
      },
      modules: [],
    },
    r = (E) => ({
      result: Y(
        e,
        "hooks",
        `${E} \u2014 hooks are read without following symlinks and are capped at ` +
          `${MAX_PLUGIN_FILE_BYTES} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`,
      ),
      modules: [],
    }),
    o = h.dirname(e),
    i = await checkContainedDirectory(h.dirname(o), o);
  if (i === "refused")
    return r("The hooks directory is a symlink and was not read");
  if (i !== "ok") return a;
  let f;
  try {
    f = await readTextFileCapped(e);
  } catch (E) {
    return {
      result: {
        success: !1,
        errors: [{ path: "file", message: `Failed to read file: ${l(E)}` }],
        warnings: [],
        filePath: e,
        fileType: "hooks",
      },
      modules: [],
    };
  }
  if (f.kind === "refused")
    return r(
      "hooks.json is not a regular file (a symlink, a FIFO, a directory)",
    );
  if (f.kind === "too-large")
    return r("hooks.json is past the size cap and was not read");
  if (f.kind === "absent") return a;
  let u = f.content,
    k;
  try {
    k = jsonParse(u);
  } catch (E) {
    return {
      result: {
        success: !1,
        errors: [
          {
            path: "json",
            message: `Invalid JSON syntax: ${l(E)}. At runtime this breaks the entire plugin load.`,
          },
        ],
        warnings: [],
        filePath: e,
        fileType: "hooks",
      },
      modules: [],
    };
  }
  if (hasMisplacedGuardHooks(k, EMPTY_KEY_SET) || isHookMatcher(k))
    return {
      result: {
        success: !1,
        errors: [
          {
            path: "hooks",
            message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${UNLOADABLE_GUARD_HOOK_NOTE}`,
          },
        ],
        warnings: [],
        filePath: e,
        fileType: "hooks",
      },
      modules: [],
    };
  let C =
      k && typeof k === "object" && "hooks" in k
        ? validateHooksConfig(k.hooks)
        : { notes: [], unloadableGuards: [] },
    w = C.notes.map((E) => ({ path: "hooks", message: `${E} at runtime` }));
  if (C.unloadableGuards.length > 0)
    return {
      result: {
        success: !1,
        errors: C.unloadableGuards.map((E) => ({
          path: "hooks",
          message: `${E} \u2014 ${UNLOADABLE_GUARD_HOOK_NOTE}`,
        })),
        warnings: w,
        filePath: e,
        fileType: "hooks",
      },
      modules: [],
    };
  let y = getHooksJsonSchema().safeParse(k);
  if (!y.success)
    return {
      result: {
        success: !1,
        errors: De(y.error),
        warnings: w,
        filePath: e,
        fileType: "hooks",
      },
      modules: [],
    };
  let p = [],
    S = [],
    R = y.data.modules ?? [];
  for (let E of R) {
    let d = h.resolve(o, E),
      g = h.relative(t, d);
    if (
      g === ".." ||
      g.startsWith(`..${h.sep}`) ||
      h.resolve(g) === g ||
      zrt(E)
    ) {
      p.push({
        path: `modules.${E}`,
        message: "The module path leaves the plugin directory",
      });
      continue;
    }
    try {
      let {
          scan: P,
          registrations: N,
          helperCalls: O,
        } = await analyzeHooksModule(d, t, h.basename(t)),
        F = N.length === 0 ? "nothing" : N.join(", "),
        L =
          P.calls.length === 0
            ? "nothing on $"
            : P.calls
                .map((_) => {
                  let D = O.get(_);
                  return D === void 0
                    ? `$.${_}`
                    : `$.${_} (via ${D.join(", ")})`;
                })
                .join(", ");
      S.push(`${E} hooks: ${F}`, `${E} calls: ${L}`);
    } catch (P) {
      p.push({ path: `modules.${E}`, message: sanitizeDiagnosticText(l(P), 400) });
    }
  }
  return {
    result: {
      success: p.length === 0,
      errors: p,
      warnings: w,
      filePath: e,
      fileType: "hooks",
      ...(S.length > 0 && { notes: S }),
    },
    modules: R,
  };
}
async function vt(e) {
  let t = [h.join(e, "hooks", "hooks.json")];
  if (!(await isExistingDirectory(h.join(e, ".claude-plugin")))) return t;
  let a = await oe(h.join(e, ".claude-plugin", "plugin.json")),
    r = a === void 0 ? void 0 : ie(cs(a))?.hooks,
    o = Array.isArray(r) ? r : [r];
  for (let i of o) {
    if (typeof i !== "string") continue;
    let f = h.resolve(e, i),
      u = h.relative(e, f);
    if (
      u === ".." ||
      u.startsWith(`..${h.sep}`) ||
      h.resolve(u) === u ||
      zrt(i)
    )
      continue;
    if (!t.includes(f)) t.push(f);
  }
  return t;
}
async function $t(e) {
  let t = [],
    a = [];
  for (let o of await vt(e)) {
    let { result: i, modules: f } = await bt(o, e);
    if (f.length > 0) a.push(o);
    if (i.errors.length > 0 || i.warnings.length > 0 || i.notes !== void 0)
      t.push(i);
  }
  let [, r] = a;
  if (r !== void 0) {
    let o = a.map((i) => h.relative(e, i));
    t.push({
      success: !1,
      errors: [
        {
          path: "modules",
          message: `The plugin names one hooks module per plugin, but ${o.join(" and ")} each name one; the loader refuses both`,
        },
      ],
      warnings: [],
      filePath: r,
      fileType: "hooks",
    });
  }
  return t;
}
async function Pe(e, t) {
  let a;
  try {
    a = await readdir(e, { withFileTypes: !0 });
  } catch (i) {
    let f = A(i);
    if (f === "ENOENT" || f === "ENOTDIR")
      return { files: [], skippedSymlinks: 0 };
    throw i;
  }
  let r = countMatching(a, (i) => i.isSymbolicLink());
  if (t)
    return {
      files: a
        .filter((i) => i.isDirectory())
        .map((i) => h.join(e, i.name, "SKILL.md")),
      skippedSymlinks: r,
    };
  let o = [];
  for (let i of a) {
    let f = h.join(e, i.name);
    if (i.isDirectory()) {
      let u = await Pe(f, !1);
      (o.push(...u.files), (r += u.skippedSymlinks));
    } else if (i.isFile() && i.name.toLowerCase().endsWith(".md")) o.push(f);
  }
  return { files: o, skippedSymlinks: r };
}
var Ke = "NO_MANIFEST",
  Be = new Map([
    ["skills", "skill"],
    ["agents", "agent"],
    ["commands", "command"],
  ]);
function Le(e, t) {
  return e === "project" || t === "skill";
}
async function be(e) {
  let t = [...Be].map(([r, o]) => [o, h.join(e, r)]),
    a = await Promise.all(t.map(([, r]) => checkContainedDirectory(e, r)));
  return {
    dirs: t.filter((r, o) => a[o] === "ok"),
    refused: t.filter((r, o) => a[o] === "refused"),
  };
}
async function Pt(e) {
  if ((await checkContainedDirectory(e, h.join(e, ".claude-plugin"))) === "ok") return !0;
  let t = h.join(e, "skills"),
    a = await checkContainedDirectory(e, t);
  if (a === "refused") return !0;
  if (a !== "ok") return !1;
  let { files: r } = await Pe(t, !0);
  for (let o of r)
    if (
      await lstat(o).then(
        () => !0,
        (f) => {
          let u = A(f);
          return u !== "ENOENT" && u !== "ENOTDIR";
        },
      )
    )
      return !0;
  return !1;
}
function Y(e, t, a) {
  return {
    success: !0,
    errors: [],
    warnings: [{ path: "directory", message: a }],
    filePath: e,
    fileType: t,
  };
}
async function re(e, t, a) {
  let r = [],
    o = 0,
    i = t.length;
  for (let [f, u] of t)
    r.push(
      Y(
        u,
        f,
        "This directory is a symlink and nothing in it was read \u2014 component " +
          `directories are read without following symlinks. A session loading this ${a === "plugin" ? "plugin" : "project"} does follow it, so validate the real directory separately.`,
      ),
    );
  for (let [f, u] of e) {
    let { files: k, skippedSymlinks: C } = await Pe(u, f === "skill"),
      w = Le(a, f) ? C : 0,
      y = 0,
      p = 0;
    for (let R of k) {
      let E = sanitizeDiagnosticText(R, 256),
        d;
      try {
        d = await readTextFileCapped(R);
      } catch (P) {
        r.push({
          success: !1,
          errors: [
            { path: "file", message: `Failed to read: ${sanitizeDiagnosticText(l(P), 200)}` },
          ],
          warnings: [],
          filePath: E,
          fileType: f,
        });
        continue;
      }
      if (d.kind !== "ok") {
        if (d.kind === "refused" && Le(a, f)) y++;
        else if (d.kind === "too-large") p++;
        continue;
      }
      o++;
      let g = wt(E, d.content, f, a);
      if (g.errors.length > 0 || g.warnings.length > 0) r.push(g);
    }
    i += w + y + p;
    let S =
      "A session loading this " +
      (a === "plugin" ? "plugin" : "directory") +
      " does follow them, so validate the real paths separately.";
    if (w > 0)
      r.push(
        Y(
          u,
          f,
          `${w} ${pluralize(w, "entry", "entries")} here ${pluralize(w, "is", "are")} ${pluralize(w, "a symlink", "symlinks")} and ${pluralize(w, "was", "were")} not read \u2014 components are read ` +
            `without following symlinks. ${S}`,
        ),
      );
    if (y > 0)
      r.push(
        Y(
          u,
          f,
          `${y} ${pluralize(y, "component")} here ${pluralize(y, "was", "were")} not read \u2014 the path is not a ` +
            `regular file (a symlink, a FIFO, a directory). ${S}`,
        ),
      );
    if (p > 0)
      r.push(
        Y(
          u,
          f,
          `${p} ${pluralize(p, "file")} here ${pluralize(p, "is", "are")} larger than ${MAX_PLUGIN_FILE_BYTES} bytes and ${pluralize(p, "was", "were")} not validated.`,
        ),
      );
  }
  return { results: r, scanned: o, skipped: i };
}
async function Ct(e) {
  return (await St(e))?.map(q) ?? null;
}
async function St(e) {
  let t = Be.get(h.basename(e));
  if (t) {
    let R = h.dirname(e),
      E;
    if (h.basename(R) === ".claude" && !(await isExistingDirectory(R)))
      E = "The enclosing .claude directory is a symlink.";
    else if (!(await isExistingDirectory(e))) E = "This path is a symlink.";
    if (E)
      return [
        {
          success: !1,
          errors: [
            {
              path: "directory",
              message: `${E} Component directories are read without following symlinks, so nothing here was validated. Pass the real directory instead.`,
            },
          ],
          warnings: [],
          filePath: e,
          fileType: t,
        },
      ];
    return (await re([[t, e]], [], "project")).results;
  }
  let a = h.join(e, ".claude"),
    r = h.basename(e) === ".claude",
    [o, i] = await Promise.all([checkContainedDirectory(e, a), r ? Promise.resolve(!1) : Pt(e)]),
    f = r || i ? await be(e) : { dirs: [], refused: [] },
    u = o === "ok" ? await be(a) : { dirs: [], refused: [] },
    k = r ? "project" : "plugin",
    [C, w] = await Promise.all([
      re(f.dirs, f.refused, k),
      re(u.dirs, u.refused, "project"),
    ]),
    y = [...C.results, ...w.results],
    p = C.scanned + w.scanned,
    S = C.skipped + w.skipped;
  if (o === "refused")
    y.push(
      Y(
        a,
        "plugin",
        "This directory is a symlink and nothing in it was read \u2014 .claude is " +
          "read without following symlinks. A session loading this project does follow it, so validate the real directory separately.",
      ),
    );
  return p > 0 || S > 0 || y.length > 0 ? y : null;
}
async function Ce(e) {
  let t = [],
    a = new Set(["claude.md", "claude.local.md"]),
    r = [];
  try {
    r = await readdir(e, { withFileTypes: !0 });
  } catch {}
  for (let i of r) {
    if (!i.isFile() || !a.has(i.name.toLowerCase())) continue;
    let u =
      i.name.toLowerCase() === "claude.local.md"
        ? "Remove it from the plugin root."
        : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
    t.push({
      success: !0,
      errors: [],
      warnings: [
        {
          path: "root",
          message: `${i.name} at the plugin root is not loaded as project context. ${u}`,
        },
      ],
      filePath: h.join(e, sanitizeDiagnosticText(i.name, 64)),
      fileType: "plugin",
    });
  }
  t.push(...(await Rt(e)));
  let o = await be(e);
  return (
    t.push(...(await re(o.dirs, o.refused, "plugin")).results),
    t.push(...(await $t(e))),
    t.map(q)
  );
}
async function validatePluginPath(e) {
  return q(await Et(e));
}
async function Et(e) {
  let t = h.resolve(e),
    a = null;
  try {
    a = await ze(t);
  } catch (o) {
    if (!W(o)) throw o;
  }
  if (a?.isDirectory()) {
    let o = h.join(t, ".claude-plugin", "marketplace.json"),
      i = await ye(o),
      f = i.errors[0];
    if (!(f?.path === "file" && (f.code === "ENOENT" || f.code === "ENOTDIR")))
      return i;
    let k = h.join(t, ".claude-plugin", "plugin.json"),
      C = await ee(k),
      w = C.errors[0]?.code;
    if (w !== "ENOENT" && w !== "ENOTDIR") return C;
    return {
      success: !1,
      errors: [
        {
          path: "directory",
          code: Ke,
          message:
            "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json",
        },
      ],
      warnings: [],
      filePath: t,
      fileType: "plugin",
    };
  }
  switch (pt(e)) {
    case "plugin":
      return ee(e);
    case "marketplace":
      return ye(e);
    case "unknown": {
      try {
        let o = await $e(t, { encoding: "utf-8" }),
          i = jsonParse(cs(o));
        if (Array.isArray(i.plugins)) return ye(e);
      } catch (o) {
        if (A(o) === "ENOENT")
          return {
            success: !1,
            errors: [{ path: "file", message: `File not found: ${t}` }],
            warnings: [],
            filePath: t,
            fileType: "plugin",
          };
      }
      return ee(e);
    }
  }
}
async function resolvePluginManifestAndContents(e) {
  let t = await validatePluginPath(e),
    a = t.filePath;
  if (t.errors.some((i) => i.code === Ke)) {
    let i = await Ct(a);
    return i
      ? { manifest: null, contents: i, resolvedPath: a }
      : { manifest: t, contents: [], resolvedPath: a };
  }
  let r = h.dirname(a),
    o =
      t.fileType === "plugin" && h.basename(r) === ".claude-plugin"
        ? await Ce(h.dirname(r))
        : [];
  return { manifest: t, contents: o, resolvedPath: a };
}
async function oe(e) {
  return readOptionalFileContent(e).catch(() => {
    return;
  });
}
function te(e) {
  return isRecord(e) ? e : void 0;
}
function ie(e) {
  try {
    return te(jsonParse(e));
  } catch {
    return;
  }
}
function ke(e, t, a) {
  let r = [];
  for (let [o, i] of Object.entries(e)) {
    let f = te(i);
    if (!f || typeof f.command !== "string") continue;
    let k = f.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
    if (k === void 0 || t.has(k) || a.has(k)) continue;
    let C = sanitizeDiagnosticText(o, 64),
      w = sanitizeDiagnosticText(k, 64);
    r.push({
      path: `mcpServers.${C}`,
      message:
        `bin/${w} is not a shipped file, a declared binaries entry, or ` +
        "a name derivable from the declared entries \u2014 the server will " +
        'fail to start. Check for a typo against the "binaries" map in plugin.json.',
    });
  }
  return r;
}
async function Rt(e) {
  if (!(await isExistingDirectory(h.join(e, ".claude-plugin")))) return [];
  let t = h.join(e, ".claude-plugin", "plugin.json"),
    a = await oe(t);
  if (a === void 0) return [];
  let r = ie(cs(a)),
    o = parsePluginBinaries(r?.binaries);
  if (!r || !o) return [];
  let i = new Set(Object.keys(o));
  for (let d of SUPPORTED_BINARY_TARGETS) {
    let g = new Map();
    for (let P of Object.keys(o)) {
      let N = stripBinaryTargetSuffix(P, d);
      if (N !== void 0) g.set(N, (g.get(N) ?? 0) + 1);
    }
    for (let [P, N] of g) if (N === 1) i.add(P);
  }
  let f = h.join(e, "bin"),
    u = new Set();
  if (await isExistingDirectory(f))
    u = await readdir(f)
      .then((d) => new Set(d))
      .catch(() => new Set());
  let k = [];
  function C(d, g) {
    if (g.length > 0)
      k.push({
        success: !0,
        errors: [],
        warnings: g,
        filePath: d,
        fileType: "plugin",
      });
  }
  let w = h.join(e, ".mcp.json"),
    y = await oe(w);
  if (y !== void 0) {
    let d = ie(y);
    if (d) {
      let g = te(d.mcpServers || d);
      if (g) C(w, ke(g, u, i));
    }
  }
  let p = r.mcpServers,
    S = p === void 0 ? [] : Array.isArray(p) ? p : [p],
    R = [],
    E = 16;
  for (let d of S) {
    if (typeof d === "string" && E <= 0) continue;
    if (typeof d === "string") {
      if ((E--, !d.startsWith("./") || d.includes(".."))) continue;
      let P = h.join(e, d);
      if ((await checkContainedDirectory(e, h.dirname(P))) !== "ok") continue;
      let N = await oe(P);
      if (N === void 0) continue;
      let O = ie(N);
      if (!O) continue;
      let F = te(O.mcpServers || O);
      if (F) C(h.join(e, sanitizeDiagnosticText(d, 128)), ke(F, u, i));
      continue;
    }
    let g = te(d);
    if (g) R.push(...ke(g, u, i));
  }
  return (C(t, R), k);
}
var Ye = toESM(pg(), 1);
import { readFile as Ge, stat as jt } from "fs/promises";
import {
  dirname,
  join as ue,
  relative,
  resolve,
  sep as Ue,
} from "path";
async function buildPluginTagPlan(e, t = {}) {
  let a = [],
    r = await Tt(e);
  if (!r.ok) return { ok: !1, error: r.error, warnings: a };
  let { pluginRoot: o, manifestPath: i, manifest: f } = r,
    u = await ee(i),
    k = [u];
  if (u.success) k.push(...(await Ce(o)));
  for (let g of k)
    for (let P of g.warnings) a.push(`${relative(getCwd(), g.filePath)}: ${P.message}`);
  let C = k.find((g) => !g.success);
  if (C) {
    let g = C.errors.map((P) => `  ${P.path}: ${P.message}`).join(`
`);
    return {
      ok: !1,
      error: `Plugin validation failed for ${C.filePath}:
${g}`,
      warnings: a,
    };
  }
  let w = f.name;
  if (typeof w !== "string" || w.length === 0)
    return {
      ok: !1,
      error: `plugin.json at ${i} has no "name" field`,
      warnings: a,
    };
  let y = await At(o, w),
    p =
      typeof f.version === "string" && f.version.length > 0
        ? f.version
        : void 0,
    S,
    R;
  if (p !== void 0) ((S = p), (R = "plugin.json"));
  else if (y?.entry.version) ((S = y.entry.version), (R = "marketplace entry"));
  else
    return {
      ok: !1,
      error:
        `No version to tag. Set "version" in ${relative(getCwd(), i)}` +
        (y
          ? ` or in the marketplace entry at ${relative(getCwd(), y.path)} plugins[${y.entryIndex}].`
          : ".") +
        " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
      warnings: a,
    };
  if (y?.entry.version && p !== void 0 && y.entry.version !== p)
    return {
      ok: !1,
      error: `Version mismatch: plugin.json says "${p}" but ${relative(getCwd(), y.path)} plugins[${y.entryIndex}].version says "${y.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${p}" (or remove it) before tagging.`,
      warnings: a,
    };
  if (Ye.valid(S) === null)
    return {
      ok: !1,
      error: `Version "${S}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
      warnings: a,
    };
  let E = buildVersionTagName(w, S);
  if (!CS(E))
    return {
      ok: !1,
      error: `Computed tag name "${E}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
      warnings: a,
    };
  let d = findGitRoot(o);
  if (d === null)
    return {
      ok: !1,
      error: `${o} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
      warnings: a,
    };
  if (!t.force) {
    let g = await _t(d, y ? [o, y.path] : [o]);
    if (g.length > 0) {
      let P = g.slice(0, 5).join(`
  `),
        N =
          g.length > 5
            ? `
  \u2026and ${g.length - 5} more`
            : "";
      return {
        ok: !1,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${P}${N}`,
        warnings: a,
      };
    }
  }
  if (!t.force) {
    if (await Ot(d, E))
      return {
        ok: !1,
        error: `Tag "${E}" already exists locally. Bump the version in ${R}, or re-run with --force to move the tag.`,
        warnings: a,
      };
  }
  return {
    ok: !0,
    warnings: a,
    plan: {
      pluginName: w,
      version: S,
      versionFrom: R,
      tag: E,
      pluginRoot: o,
      gitRoot: d,
      marketplace: y
        ? {
            path: y.path,
            entryIndex: y.entryIndex,
            entryVersion: y.entry.version,
          }
        : void 0,
      validation: k,
    },
  };
}
async function createPluginVersionTag(e, t) {
  let a = ["-C", e.gitRoot, "tag"];
  if (t.force) a.push("-f");
  a.push("-a", e.tag, "-m", buildVersionTagMessage(e, t.message), "HEAD");
  let r = await execFileNoThrow("git", a);
  if (r.code !== 0)
    return {
      ok: !1,
      error: `git tag failed (exit ${r.code}): ${r.stderr.trim() || r.stdout.trim()}`,
    };
  if (!t.push) return { ok: !0, pushed: !1 };
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(t.remote))
    return {
      ok: !1,
      error: `Tag created locally but not pushed: "${t.remote}" is not a valid remote name.`,
    };
  let o = ["-C", e.gitRoot, "push"];
  if (t.force) o.push("--force");
  o.push(t.remote, `refs/tags/${e.tag}`);
  let i = await execFileNoThrow("git", o, { allowRepoGitHooks: !0, useCwd: !0 });
  if (i.code !== 0)
    return {
      ok: !1,
      error: `Tag created locally but push failed (exit ${i.code}): ${i.stderr.trim() || i.stdout.trim()}`,
    };
  return { ok: !0, pushed: !0 };
}
function buildVersionTagMessage(e, t) {
  return t === void 0
    ? `${e.pluginName} ${e.version}`
    : t.replaceAll("%s", e.version);
}
async function Tt(e) {
  let t = resolve(e),
    a;
  try {
    a = await jt(t);
  } catch (o) {
    return {
      ok: !1,
      error: W(o) ? `Path not found: ${t}` : `Cannot stat ${t}: ${l(o)}`,
    };
  }
  let r = a.isFile()
    ? [[dirname(dirname(t)), t]]
    : [
        [t, ue(t, ".claude-plugin", "plugin.json")],
        [dirname(t), ue(t, "plugin.json")],
      ];
  for (let [o, i] of r) {
    let f;
    try {
      f = await Ge(i, { encoding: "utf-8" });
    } catch (k) {
      if (W(k)) continue;
      return { ok: !1, error: `Cannot read ${i}: ${l(k)}` };
    }
    let u;
    try {
      u = jsonParse(cs(f));
    } catch (k) {
      return { ok: !1, error: `Invalid JSON in ${i}: ${l(k)}` };
    }
    return {
      ok: !0,
      pluginRoot: o,
      manifestPath: i,
      manifest: typeof u === "object" && u !== null ? u : {},
    };
  }
  return {
    ok: !1,
    error: `No plugin manifest found. Expected ${ue(t, ".claude-plugin", "plugin.json")}.`,
  };
}
async function At(e, t) {
  let a = findGitRoot(e) ?? void 0,
    r = e;
  for (;;) {
    let o = ue(r, ".claude-plugin", "marketplace.json"),
      i = await Nt(o);
    if (i) {
      for (let [u, k] of i.plugins.entries())
        if (xt(k, r, e, t)) return { path: o, entryIndex: u, entry: k };
    }
    if (r === a) return;
    let f = dirname(r);
    if (f === r) return;
    r = f;
  }
}
async function Nt(e) {
  let t;
  try {
    t = await Ge(e, { encoding: "utf-8" });
  } catch (o) {
    if (W(o)) return;
    return;
  }
  let a;
  try {
    a = jsonParse(cs(t));
  } catch {
    return;
  }
  let r = getMarketplaceSchema().safeParse(a);
  return r.success ? r.data : void 0;
}
function xt(e, t, a, r) {
  if (typeof e.source === "string") {
    let o = resolve(t, e.source);
    return Mt(o, a);
  }
  return e.name === r;
}
function Mt(e, t) {
  let a = (r) => {
    let o = resolve(r);
    return o.endsWith(Ue) ? o.slice(0, -Ue.length) : o;
  };
  return a(e) === a(t);
}
async function _t(e, t) {
  let a = t.map((o) => relative(e, o) || "."),
    r = await execFileNoThrow("git", ["-C", e, "status", "--porcelain", "--", ...a]);
  if (r.code !== 0) return [];
  return r.stdout
    .split(
      `
`,
    )
    .map((o) => o.slice(3).trim())
    .filter((o) => o.length > 0);
}
async function Ot(e, t) {
  let a = await execFileNoThrow("git", ["-C", e, "tag", "-l", "--", t]);
  return a.code === 0 && a.stdout.trim() === t;
}
export {
  isOrphanPluginEntry,
  isErrorForPlugin,
  isWarningForPlugin,
  isDiagnosticForPlugin,
  resolvePluginIdentity,
  fetchPluginInstallCounts,
  getPluginCatalogEntry,
  PLUGIN_CONTEXT_COST_WARNING_THRESHOLD,
  estimatePluginContextCost,
  formatCompactCount,
  summarizeValidationResults,
  sanitizeDiagnosticText,
  validatePluginPath,
  resolvePluginManifestAndContents,
  buildPluginTagPlan,
  createPluginVersionTag,
  buildVersionTagMessage,
};

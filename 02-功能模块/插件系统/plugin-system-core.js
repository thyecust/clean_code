// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { hasValidPathSegments, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import {
  Le,
  THt,
  AB,
  Pz,
  li,
  Krt,
  Ju,
  NW,
  yZ,
  Bxe,
  CHt,
  identity as Oje,
  IYt,
  PYt,
  OYt,
  Ww,
  vHt,
  jxe,
  Oz,
  $b,
  wh,
  $W,
} from "../../00-第三方库/lodash/lodash.207999qb.js";
import { getClaudeConfigDir } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { l, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { isTempFileFor } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { j, rE, B, he, Irt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { jsonParse, getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { INVISIBLE_CHAR_CLASS } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { describeSettingsSourceShort, sanitizeForDisplay, formatLongDisplayText, truncateWithEllipsis, toDisplayText, formatQuotedDisplayText, CLAUDE_AI_MARKETPLACE_NAME_PREFIX } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { createStore } from "../../01-核心基础设施/文件存储-原子写入/state-store.js";
import { readBoundedFile } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { s, se, v, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { formatFileSize } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-7axvc6rn.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { isAbsolute as te } from "path";
var PLUGIN_LINK_MARKER_FILENAME = ".claude-plugin-link",
  getPluginLinkMarkerSchema = createLazyValue(() =>
    c({
      target: s()
        .min(1)
        .max(4096)
        .refine((e) => te(e), { message: "must be an absolute path" })
        .refine((e) => !$W(e) && !li(e), { message: "must be a local path" })
        .refine((e) => !AB(e), { message: "must be canonical" }),
    }),
  ),
  LINK_MODE_COMMAND_SUFFIX = `
[mode: link]`;
import { isAbsolute as ie, join as L, relative as O, sep as U } from "path";
function E() {
  return L(getClaudeConfigDir(), "skills");
}
function re(e) {
  let t = O(E(), e);
  return t !== "" && t !== ".." && !t.startsWith(`..${U}`) && !ie(t);
}
function F(e) {
  if (!re(e)) return null;
  let t = O(E(), e).split(U);
  return hasValidPathSegments(t) && L(E(), ...t) === e ? t : null;
}
function toUserSkillsStorageKey(e) {
  let t = F(e);
  return t === null ? null : STORAGE_KEYS.userConfigDir("skills", t);
}
function toUserSkillsStorageScope(e) {
  let t = F(e);
  return t === null
    ? null
    : { namespace: "userConfigDir", dir: "skills", relPath: t };
}
import { isAbsolute as T, join as k, relative as H, sep as C } from "path";
var ORPHANED_AT_MARKER_FILENAME = ".orphaned_at",
  IN_USE_MARKER_FILENAME = ".in_use",
  GCS_SHA_FILENAME = ".gcs-sha",
  LINKS_MATERIALIZED_MARKER_FILENAME = ".links_materialized";
function M() {
  return k(getClaudeConfigDir(), "plugins", "cache");
}
function w(e, t) {
  let i = M();
  if (t !== i) return null;
  let r = H(i, e);
  if (r === "" || r === ".." || r.startsWith(`..${C}`) || T(r)) return null;
  let o = r.split(C);
  return k(i, ...o) === e ? o : null;
}
function D(e) {
  return e.endsWith(".zip");
}
function parsePluginCachePath(e, t) {
  let i = w(e, t);
  if (i === null || i.length !== 3 || !hasValidPathSegments(i) || D(i[2])) return null;
  let [r, o, u] = i;
  return { marketplace: r, plugin: o, version: u };
}
function isPluginVersionCacheScope(e) {
  return (
    e.namespace === "pluginCache" &&
    e.marketplace !== void 0 &&
    e.plugin !== void 0 &&
    e.version !== void 0 &&
    e.relPath === void 0
  );
}
function toPluginVersionCacheScope(e, t) {
  let i = parsePluginCachePath(e, t);
  return i === null ? null : { namespace: "pluginCache", ...i };
}
function toPluginVersionCachePath(e, t) {
  let i = [e.marketplace, e.plugin, e.version];
  if (t !== M() || !hasValidPathSegments(i) || D(e.version)) return null;
  return k(t, ...i);
}
function oe(e, t) {
  let i = w(e, t);
  if (i === null || i.length < 4 || !hasValidPathSegments(i) || D(i[2])) return null;
  let [r, o, u, ...d] = i;
  return STORAGE_KEYS.pluginCache(r, o, u, d);
}
function resolvePathStorageScope(e, t) {
  return oe(e, t) ?? toUserSkillsStorageKey(e);
}
function getPluginRegistryFileScope(e, t) {
  return A(t) ? STORAGE_KEYS.pluginRegistry(e) : null;
}
function getMarketplaceCacheScope(e, t, i) {
  return A(i) && hasValidPathSegments([e]) ? STORAGE_KEYS.marketplaceCache(e, t) : null;
}
function A(e) {
  return e === k(getClaudeConfigDir(), "plugins");
}
function le(e, t) {
  if (!A(t)) return null;
  let i = k(t, "marketplaces"),
    r = H(i, e);
  if (r === "" || r === ".." || r.startsWith(`..${C}`) || T(r)) return null;
  let o = r.split(C);
  return k(i, ...o) === e ? o : null;
}
function toMarketplaceTreeScope(e, t) {
  let i = le(e, t);
  if (i === null || i.length < 2 || !hasValidPathSegments(i)) return null;
  return STORAGE_KEYS.marketplaceTree(i[0], i.slice(1));
}
function toPluginAssetCacheScope(e) {
  return e === k(getClaudeConfigDir(), "plugins", "asset-cache")
    ? { namespace: "pluginAssetCache" }
    : null;
}
function parsePluginCacheDirScope(e, t) {
  if (e === t) return t === M() ? { namespace: "pluginCache" } : null;
  let i = w(e, t);
  if (i === null || i.length > 2 || !hasValidPathSegments(i)) return null;
  let [r, o] = i;
  return o === void 0
    ? { namespace: "pluginCache", marketplace: r }
    : { namespace: "pluginCache", marketplace: r, plugin: o };
}
var PLUGIN_RESERVED_MARKER_FILES = new Set([PLUGIN_LINK_MARKER_FILENAME, IN_USE_MARKER_FILENAME, ORPHANED_AT_MARKER_FILENAME]);
function toComparableName(e) {
  return Pz(e).replace(/[. ]+$/, "");
}
function isReservedOrTempName(e, t) {
  let i = toComparableName(e);
  if (t.has(i)) return !0;
  for (let r of t) if (isTempFileFor(i, r)) return !0;
  return !1;
}
function isNodeModulesDirName(e) {
  return toComparableName(e) === "node_modules";
}
import { readdir, rm as de, stat as ce } from "fs/promises";
import { delimiter, join as I } from "path";
var pe = "plugins",
  K = "cowork_plugins";
function me() {
  if (Irt()) return K;
  if (a.CLAUDE_CODE_USE_COWORK_PLUGINS) return K;
  return pe;
}
function getPluginsDir() {
  let e = a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (e) return Ju(e);
  return I(getClaudeConfigDir(), me());
}
function getPluginSeedDirs() {
  let e = a.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!e) return [];
  return e.split(delimiter).filter(Boolean).map(Ju);
}
function toPathSafeSegment(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}
function isReservedClaudeAiMarketplaceName(e) {
  let t = toComparableName(e.normalize("NFKC"));
  return t.startsWith(CLAUDE_AI_MARKETPLACE_NAME_PREFIX) || toPathSafeSegment(t).toLowerCase().startsWith(CLAUDE_AI_MARKETPLACE_NAME_PREFIX);
}
function toMarketplaceNameKey(e) {
  return toPathSafeSegment(toComparableName(e.normalize("NFKC"))).toLowerCase();
}
function getPluginDataDir(e) {
  return I(getPluginsDir(), "data", toPathSafeSegment(e));
}
function ensurePluginDataDir(e) {
  let t = getPluginDataDir(e);
  return (getFsSurface().mkdirSync(t), t);
}
async function getPluginDataDirSize(e) {
  let t = getPluginDataDir(e),
    i = 0,
    r = async (o) => {
      for (let u of await readdir(o, { withFileTypes: !0 })) {
        let d = I(o, u.name);
        if (u.isDirectory()) await r(d);
        else
          try {
            i += (await ce(d)).size;
          } catch {}
      }
    };
  try {
    await r(t);
  } catch (o) {
    if (Rt(o)) return null;
    throw o;
  }
  if (i === 0) return null;
  return { bytes: i, human: formatFileSize(i) };
}
async function removePluginDataDir(e) {
  let t = getPluginDataDir(e);
  try {
    await de(t, { recursive: !0, force: !0 });
  } catch (i) {
    logForDebugging(`Failed to delete plugin data dir ${t}: ${l(i)}`, { level: "warn" });
  }
}
import { join as fe, resolve as R } from "path";
var PLUGIN_CACHE_DIR_NAME = "cache";
function getResolvedPluginsDir() {
  return R(he(), getPluginsDir());
}
function getPluginCacheDir() {
  return fe(getResolvedPluginsDir(), PLUGIN_CACHE_DIR_NAME);
}
function getAllPluginRootDirs() {
  return dedupe([
    R(getClaudeConfigDir(), "plugins"),
    R(getClaudeConfigDir(), "cowork_plugins"),
    getResolvedPluginsDir(),
    ...getPluginSeedDirs().map((e) => R(he(), e)),
  ]);
}
function isValidCliNameToken(e) {
  return /^\w[\w.@-]*$/.test(e);
}
function buildCliCommand(e, t, i) {
  if (!isValidCliNameToken(t)) return null;
  return `claude ${e} ${t}${i ? ` ${i}` : ""}`;
}
function buildRunCommandHint(e, t, { extra: i, tail: r = "", fallback: o }) {
  let u = buildCliCommand(e, t, i);
  return u === null ? o : `run \`${u}\`${r ? ` ${r}` : ""}`;
}
var ye = ["available", "required", "auto_install", "not_available"],
  getInstallationPreferenceSchema = createLazyValue(() => X(ye));
function parseInstallationPreference(e) {
  return getInstallationPreferenceSchema().safeParse(e).data;
}
var NOT_RECORDED_INSTALL_PATH = "(not recorded)",
  Pe = {
    "path-not-found": !1,
    "path-traversal": !1,
    "mcp-config-invalid": !1,
    "lsp-config-invalid": !1,
    "hook-load-failed": !1,
    "component-load-failed": !1,
    "mcpb-download-failed": !1,
    "mcpb-extract-failed": !1,
    "mcpb-invalid-manifest": !1,
    "lsp-server-start-failed": !1,
    "lsp-server-crashed": !1,
    "lsp-request-timeout": !1,
    "lsp-request-failed": !1,
    "plugin-not-installed": !1,
    "marketplace-blocked-by-policy": !1,
    "autoupdate-blocked-by-pinner": !1,
    "autoupdate-deferred-entry-helper": !1,
    "autoupdate-disabled-by-policy": !1,
    "plugin-cache-miss": !0,
    "generic-error": !0,
    "manifest-parse-error": !0,
    "manifest-validation-error": !0,
    "marketplace-not-found": !0,
    "marketplace-load-failed": !0,
    "plugin-not-found": !0,
    "git-auth-failed": !0,
    "git-timeout": !0,
    "network-error": !0,
    "dependency-unsatisfied": !0,
    "dependency-version-unsatisfied": !0,
  };
function isSignificantPluginError(e) {
  if (e.type === "path-not-found")
    return e.plugin === void 0 && e.errno !== void 0;
  if (e.type === "plugin-not-installed")
    return e.seedHasOtherVersion === !0 || e.registryReadFailed === !0;
  if (e.type === "generic-error") return e.orphan !== !0 && e.refused !== !0;
  if (e.type === "marketplace-load-failed")
    return e.untrustedReservedName !== !0;
  if (e.type === "marketplace-not-found")
    return (
      e.registrationHidden === void 0 ||
      e.registrationHidden === "network-location"
    );
  return Pe[e.type];
}
function isDependencyError(e) {
  return (
    e.type === "dependency-unsatisfied" ||
    e.type === "dependency-version-unsatisfied"
  );
}
function getErrorPluginId(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  let t = e.source.lastIndexOf("@");
  if (t > 0) return e.source.slice(0, t);
  return;
}
function isAutoupdateSkippedError(e) {
  return (
    e.type === "autoupdate-deferred-entry-helper" ||
    e.type === "autoupdate-disabled-by-policy"
  );
}
function formatPluginError(e) {
  return sanitizeForDisplay(ke(e));
}
function ke(e) {
  switch (e.type) {
    case "generic-error":
      return truncateWithEllipsis(e.error);
    case "path-not-found":
      return `Path not found: ${toDisplayText(e.path)} (${formatQuotedDisplayText(e.component)}${e.errno ? `, ${formatQuotedDisplayText(e.errno)}` : ""})`;
    case "path-traversal":
      return `Path escapes plugin directory: ${toDisplayText(e.path)} (${formatQuotedDisplayText(e.component)})${e.reason ? ` \u2014 ${toDisplayText(e.reason)}` : ""}`;
    case "git-auth-failed":
      return `Git authentication failed (${formatQuotedDisplayText(e.authType)}): ${toDisplayText(e.gitUrl)}`;
    case "git-timeout":
      return `Git ${formatQuotedDisplayText(e.operation)} timeout: ${toDisplayText(e.gitUrl)}`;
    case "network-error":
      return `Network error: ${toDisplayText(e.url)}${e.details ? ` - ${formatQuotedDisplayText(e.details)}` : ""}`;
    case "manifest-parse-error":
      return `Manifest parse error: ${formatQuotedDisplayText(e.parseError)}`;
    case "manifest-validation-error":
      return `Manifest validation failed: ${formatQuotedDisplayText(e.validationErrors.join(", "))}`;
    case "plugin-not-found":
      return `Plugin ${formatQuotedDisplayText(e.pluginId)} not found in marketplace ${formatQuotedDisplayText(e.marketplace)}`;
    case "marketplace-not-found":
      return `Marketplace ${formatQuotedDisplayText(e.marketplace)} not found`;
    case "marketplace-load-failed":
      return `Marketplace ${formatQuotedDisplayText(e.marketplace)} failed to load: ${formatQuotedDisplayText(e.reason)}`;
    case "mcp-config-invalid":
      return `MCP server ${formatQuotedDisplayText(e.serverName)} invalid: ${formatQuotedDisplayText(e.validationError)}`;
    case "hook-load-failed":
      return `Hook load failed: ${formatQuotedDisplayText(e.reason)}`;
    case "component-load-failed":
      return `${formatQuotedDisplayText(e.component)} load failed from ${toDisplayText(e.path)}: ${formatQuotedDisplayText(e.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${toDisplayText(e.url)}: ${formatQuotedDisplayText(e.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${toDisplayText(e.mcpbPath)}: ${formatQuotedDisplayText(e.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${toDisplayText(e.mcpbPath)}: ${formatQuotedDisplayText(e.validationError)}`;
    case "lsp-config-invalid":
      return `Plugin "${formatQuotedDisplayText(e.plugin)}" has invalid LSP server config for "${formatQuotedDisplayText(e.serverName)}": ${formatQuotedDisplayText(e.validationError)}`;
    case "lsp-server-start-failed":
      return `Plugin "${formatQuotedDisplayText(e.plugin)}" failed to start LSP server "${formatQuotedDisplayText(e.serverName)}": ${formatQuotedDisplayText(e.reason)}`;
    case "lsp-server-crashed":
      if (e.signal)
        return `Plugin "${formatQuotedDisplayText(e.plugin)}" LSP server "${formatQuotedDisplayText(e.serverName)}" crashed with signal ${e.signal}`;
      return `Plugin "${formatQuotedDisplayText(e.plugin)}" LSP server "${formatQuotedDisplayText(e.serverName)}" crashed with exit code ${e.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `Plugin "${formatQuotedDisplayText(e.plugin)}" LSP server "${formatQuotedDisplayText(e.serverName)}" timed out on ${formatQuotedDisplayText(e.method)} request after ${e.timeoutMs}ms`;
    case "lsp-request-failed":
      return `Plugin "${formatQuotedDisplayText(e.plugin)}" LSP server "${formatQuotedDisplayText(e.serverName)}" ${formatQuotedDisplayText(e.method)} request failed: ${formatQuotedDisplayText(e.error)}`;
    case "marketplace-blocked-by-policy":
      if (e.blockedByBlocklist)
        return `Marketplace '${formatQuotedDisplayText(e.marketplace)}' is blocked by enterprise policy`;
      return `Marketplace '${formatQuotedDisplayText(e.marketplace)}' is not in the allowed marketplace list`;
    case "dependency-unsatisfied": {
      let t = buildCliCommand("plugin install", e.dependency),
        i =
          e.reason === "not-enabled"
            ? "disabled \u2014 enable it or remove the dependency"
            : `not installed \u2014 ${t ? `run \`${t}\`, or ` : ""}check that its marketplace is added`;
      return `Dependency "${formatQuotedDisplayText(e.dependency)}" is ${i}`;
    }
    case "dependency-version-unsatisfied":
      return `Requires "${formatQuotedDisplayText(e.dependency)}" ${formatQuotedDisplayText(e.required)}, installed ${formatQuotedDisplayText(e.installed ?? "version unknown")}`;
    case "plugin-cache-miss":
      return `Plugin "${formatQuotedDisplayText(e.plugin)}" not cached at ${toDisplayText(e.installPath)} \u2014 run /plugin to refresh`;
    case "plugin-not-installed": {
      let t = buildCliCommand("plugin install", e.source, "--scope project");
      return `Plugin "${formatQuotedDisplayText(e.plugin)}" is enabled in project settings but isn't installed${t ? ` \u2014 run \`${t}\`` : " \u2014 install it at project scope (from /plugin or claude plugin install)"}`;
    }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return e.message;
    case "autoupdate-blocked-by-pinner": {
      let t = e.heldAt ? ` at ${toDisplayText(e.heldAt)}` : "",
        i = formatQuotedDisplayText(e.blockedBy.join(", ")),
        r =
          e.disabledPinners.length > 0
            ? ` (note: ${formatQuotedDisplayText(e.disabledPinners.join(", "))} ${e.disabledPinners.length === 1 ? "is" : "are"} currently disabled)`
            : "";
      return `Autoupdate held "${formatQuotedDisplayText(e.plugin)}"${t} \u2014 version constraint from ${i}${r}`;
    }
  }
}
function formatPluginWarning(e) {
  return sanitizeForDisplay(Se(e));
}
function Se(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let t = W(e.manifestFields);
      return `Default ${formatQuotedDisplayText(e.component)}/ folder is ignored because the manifest sets ${t}`;
    }
    case "mcp-server-suppressed-duplicate": {
      let t = e.duplicateOf.startsWith("plugin:")
        ? `server provided by plugin "${formatQuotedDisplayText(e.duplicateOf.split(":")[1] ?? "?")}"`
        : `already-configured "${formatQuotedDisplayText(e.duplicateOf)}"`;
      return `MCP server "${formatQuotedDisplayText(e.serverName)}" skipped \u2014 same command/URL as ${t}`;
    }
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Removed from the "${formatQuotedDisplayText(e.marketplace)}" marketplace`
        : `Renamed to "${formatQuotedDisplayText(e.renamedTo)}" in the "${formatQuotedDisplayText(e.marketplace)}" marketplace`;
    case "lsp-extension-conflict": {
      let t = e.activeServer.startsWith("plugin:")
          ? e.activeServer.split(":")[1]
          : void 0,
        i = t ? `plugin "${formatQuotedDisplayText(t)}"` : `"${formatQuotedDisplayText(e.activeServer)}"`;
      return `LSP server "${formatQuotedDisplayText(e.serverName)}" is not used for ${formatQuotedDisplayText(e.extension)} files \u2014 ${i} already registered a server for that extension`;
    }
    case "project-scope-suppressed-untrusted":
    case "project-scope-server-stripped":
      return formatLongDisplayText(e.warning);
    case "broken-wikilink":
      return `${formatQuotedDisplayText(e.raw)} in ${toDisplayText(e.filePath)}:${e.line} doesn't resolve to a skill`;
    case "synced-plugin-shadowed":
      return `"${formatQuotedDisplayText(e.source)}" from claude.ai not loaded \u2014 "${formatQuotedDisplayText(e.shadowedBy)}" on this machine has the same name and takes precedence`;
    case "managed-hooks-restricted":
      return `"${formatQuotedDisplayText(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;
    case "managed-plugin-disabled-by-settings":
      return `"${formatQuotedDisplayText(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;
    case "ineffective-disable":
      return `Disabled in ~/.claude/settings.json but still loads \u2014 ${describeSettingsSourceShort(e.overriddenBy)} settings enable it, which overrides your user setting`;
  }
}
function formatPluginWarningGuidance(e) {
  return sanitizeForDisplay(ve(e));
}
function ve(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let t = W(e.manifestFields);
      if (e.manifestFields.length === 1)
        return `Remove ${t} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${t} list if you want both`;
      return `Remove ${t} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`;
    }
    case "project-scope-suppressed-untrusted":
      return "Accept the trust dialog for this workspace, then run /reload-plugins.";
    case "project-scope-server-stripped":
      return "Monitors from project @skills-dir plugins are not supported \u2014 install the plugin at user scope instead.";
    case "broken-wikilink":
      return e.reason === "invalid"
        ? "Wikilink names may use letters, digits, dash, underscore \u2014 rename the link"
        : `Create one of: ${e.tried.map((t) => toDisplayText(t)).join(" or ")}, or fix the link spelling`;
    case "mcp-server-suppressed-duplicate": {
      if (e.duplicateOf.startsWith("plugin:")) {
        let t = e.duplicateOf.split(":")[1] ?? "the other plugin";
        return `Disable plugin "${formatQuotedDisplayText(t)}" if you want this plugin's version instead`;
      }
      return `Remove "${formatQuotedDisplayText(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`;
    }
    case "lsp-extension-conflict": {
      let t = e.activeServer.startsWith("plugin:")
        ? (e.activeServer.split(":")[1] ?? "the other plugin")
        : e.activeServer;
      if (t === e.plugin)
        return `Plugin "${formatQuotedDisplayText(e.plugin)}" declares two LSP servers for ${formatQuotedDisplayText(e.extension)} \u2014 remove or reorder "${formatQuotedDisplayText(e.serverName)}" in its lspServers config`;
      return `Disable plugin "${formatQuotedDisplayText(t)}" to use this plugin's LSP server for ${formatQuotedDisplayText(e.extension)} files, or disable "${formatQuotedDisplayText(e.plugin)}" to silence this warning`;
    }
    case "synced-plugin-shadowed": {
      let t = buildCliCommand("plugin enable", e.source);
      return `To use the claude.ai copy instead, ${t ? `run \`${t}\`` : "enable it from /plugin"}, then disable or remove "${formatQuotedDisplayText(e.shadowedBy)}"`;
    }
    case "managed-hooks-restricted":
      return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";
    case "managed-plugin-disabled-by-settings": {
      let t = buildCliCommand("plugin enable", e.source);
      return `To run it, ${t ? `run \`${t}\`` : "enable it from /plugin"}; if you did not expect this copy, remove its directory`;
    }
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Remove "${formatQuotedDisplayText(e.source)}" from enabledPlugins if you still see this on the next start`
        : `If you still see this on the next start, update enabledPlugins to use "${formatQuotedDisplayText(e.renamedTo)}@${formatQuotedDisplayText(e.marketplace)}" (managed settings are not rewritten automatically)`;
    case "ineffective-disable":
      switch (e.overriddenBy) {
        case "projectSettings":
          return `Set "enabledPlugins": {"${formatQuotedDisplayText(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
        case "localSettings":
          return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";
        case "flagSettings":
          return `Remove "${formatQuotedDisplayText(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;
        case "policySettings":
          return "Managed policy can't be overridden locally \u2014 contact your administrator";
        case "userSettings":
          return "";
      }
  }
}
function W(e) {
  return e.map((t) => `"${t}"`).join(" and ");
}
import { resolve as Re } from "path";
function toNormalizedPathKey(e) {
  let t = Re(e).normalize("NFC");
  return getCurrentPlatform() === "windows" ? t.toLowerCase() : t;
}
function parseAttributionMap(e, t, i, r) {
  let o = new Map();
  if (Buffer.byteLength(t) > i)
    return (logForDebugging(`Ignoring ${e}: larger than the size cap`), o);
  let u;
  try {
    u = jsonParse(t);
  } catch {
    return (logForDebugging(`Ignoring ${e}: not valid JSON`), o);
  }
  if (typeof u !== "object" || u === null || Array.isArray(u))
    return (logForDebugging(`Ignoring ${e}: not a JSON object`), o);
  for (let [d, g] of Object.entries(u)) {
    let p = r(g);
    if (p !== void 0) o.set(toNormalizedPathKey(d), p);
  }
  return o;
}
var ATTRIBUTION_SIDECAR_SUFFIX = ".meta.json",
  SERVER_PLUGIN_ID_FIELD_NAME = "server_plugin_id",
  MARKETPLACE_NAME_FIELD_NAME = "marketplace_name",
  INSTALLATION_PREFERENCE_FIELD_NAME = "installation_preference",
  V = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${INVISIBLE_CHAR_CLASS}]{1,128}$`, "u");
function isValidMarketplaceName(e) {
  return V.test(e);
}
var PLUGIN_ID_PATTERN = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function isValidPluginId(e) {
  return PLUGIN_ID_PATTERN.test(e);
}
var xe = createLazyValue(() =>
    c({
      [SERVER_PLUGIN_ID_FIELD_NAME]: s()
        .regex(PLUGIN_ID_PATTERN)
        .optional()
        .catch(void 0),
      [MARKETPLACE_NAME_FIELD_NAME]: s()
        .regex(V)
        .optional()
        .catch(void 0),
      [INSTALLATION_PREFERENCE_FIELD_NAME]: getInstallationPreferenceSchema()
        .optional()
        .catch(void 0),
    }),
  ),
  ATTRIBUTION_SIDECAR_MAX_BYTES = 4096;
async function readPluginAttributionSidecar(e) {
  let t = e + ATTRIBUTION_SIDECAR_SUFFIX,
    i = await readBoundedFile(t, ATTRIBUTION_SIDECAR_MAX_BYTES);
  if (i === null) return {};
  let r;
  try {
    r = jsonParse(i);
  } catch {
    return (
      logForDebugging(`Ignoring plugin attribution sidecar at ${t}: not valid JSON`),
      {}
    );
  }
  return G(r, `sidecar at ${t}`);
}
function G(e, t) {
  let i = xe().safeParse(e);
  if (!i.success)
    return (logForDebugging(`Ignoring plugin attribution ${t}: not a JSON object`), {});
  let r = {},
    o = i.data[SERVER_PLUGIN_ID_FIELD_NAME];
  if (typeof o === "string" && isValidPluginId(o)) r.serverPluginId = o;
  let u = i.data[MARKETPLACE_NAME_FIELD_NAME];
  if (typeof u === "string" && isValidMarketplaceName(u)) r.marketplaceName = u;
  let d = parseInstallationPreference(i.data[INSTALLATION_PREFERENCE_FIELD_NAME]);
  if (d !== void 0) r.installationPreference = d;
  if (typeof e === "object" && e !== null) {
    for (let [g, p] of [
      [SERVER_PLUGIN_ID_FIELD_NAME, r.serverPluginId],
      [MARKETPLACE_NAME_FIELD_NAME, r.marketplaceName],
      [INSTALLATION_PREFERENCE_FIELD_NAME, r.installationPreference],
    ])
      if (g in e && p === void 0)
        logForDebugging(`Ignoring plugin attribution field (${t}): invalid ${g}`);
  }
  return r;
}
var Ee = 65536;
function getPluginAttributionFromEnv(e) {
  let t = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
  if (t === void 0) return;
  return parseAttributionMap("CLAUDE_CODE_PLUGIN_ATTRIBUTION", t, Ee, (i) =>
    G(i, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry"),
  ).get(toNormalizedPathKey(e));
}
import { normalize, parse, resolve as q, sep as De } from "path";
var UNTRUSTED_PATH_REASON =
  "is network-shaped, carries a dot segment or link component, or could not be classified";
function classifyPathTrust(e, { trustedRoots: t = [] } = {}) {
  let i = Ae(e, t),
    { absolute: r, root: o, tail: u } = i;
  if (i.dotSegmentInTail) return { absolute: r, suspect: !0 };
  if (o !== void 0) {
    let g = q(he(), o);
    return { absolute: r, suspect: vHt(g, u) };
  }
  let d = i.networkShapedUnvouched || Bxe(r);
  return { absolute: r, suspect: d };
}
function Ae(e, t) {
  if (e.trim() === "")
    return {
      absolute: e,
      root: void 0,
      tail: e,
      dotSegmentInTail: !1,
      networkShapedUnvouched: !0,
    };
  let i = q(he(), e),
    { root: r, tail: o } = Ie(e, t);
  return {
    absolute: i,
    root: r,
    tail: o,
    dotSegmentInTail: AB(o),
    networkShapedUnvouched: r === void 0 && (Ww(e) || Ww(i)),
  };
}
function $e(e) {
  return [getPluginsDir(), ...getPluginSeedDirs(), ...e];
}
function Ie(e, t) {
  let i = Oje(e),
    r;
  for (let o of $e(t))
    for (let u of [o, normalize(o)]) {
      let d = Oje(u.replace(/[\\/]+$/, ""));
      if (d === "" || d === ".") continue;
      let g;
      if (i === d) g = "";
      else if (i.startsWith(d + De) || i.startsWith(d + "/"))
        g = e.slice(e.length - (i.length - d.length));
      if (g !== void 0 && (r === void 0 || g.length < r.tail.length))
        r = { root: o, tail: g };
    }
  return r ?? { root: void 0, tail: e };
}
function toCaseFoldedPath(e) {
  switch (getCurrentPlatform()) {
    case "windows":
      return Pz(Oje(e));
    case "macos":
      return Pz(e);
    default:
      return e;
  }
}
function N(e) {
  if (getCurrentPlatform() !== "windows") return;
  let t = parse(e).root,
    i = (o) => Krt(NW(o)),
    r = i(t);
  if (r === void 0) {
    let o = yZ(t);
    if (o === null) return "undeterminable";
    r = i(o);
  }
  return r === void 0 ? void 0 : { walkRoot: t, ...r };
}
function getWslCompanionView(e) {
  let t = N(e);
  if (t === void 0 || t === "undeterminable") return t;
  return {
    walkRoot: t.walkRoot,
    distroDir: t.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/"),
  };
}
function toWslCompanionPath(e, t) {
  return (
    OYt(e, { exactDots: !0 }) ??
    PYt(e, { exactDots: !0 }) ??
    (t === void 0 ? void 0 : IYt(e, t.walkRoot, t.distroDir))
  );
}
function Ne() {
  return {
    pluginLoad: void 0,
    pluginLoadArm: void 0,
    pluginLoadCacheOnly: void 0,
    pluginLoadCacheOnlyArm: void 0,
    commands: void 0,
    skills: void 0,
    skillsV5: void 0,
    agents: void 0,
    outputStyles: void 0,
    workflows: void 0,
    hookRegistration: void 0,
    hookRegistrationInFlight: void 0,
    hooksUnknownCause: void 0,
    pluginsWithHooks: new Set(),
    hookRegistrationEpoch: 0,
    hookSwapEpoch: 0,
    unlatchedAbsentManagedIds: new Set(),
    hookRegistrationArgs: void 0,
    hookHotReloadUnsubscribe: void 0,
    hookHotReloadSettingsSnapshot: void 0,
    loadedModules: [],
    notices: createStore(new Map()),
    openCalls: new Map(),
    spawnProvenance: new Map(),
    renderVersions: createStore(new Map()),
    uiLogSink: null,
    pendingUiLog: [],
    armedMonitorKeys: new Set(),
    marketplaces: new Map(),
    marketplaceRefreshesInFlight: new Map(),
    marketplaceHelperMemo: new Map(),
    addDirMarketplacesMemo: void 0,
    headlessInstallPass: void 0,
    installedPluginsMigrated: !1,
    installedPluginsFile: null,
    installedPluginsEpoch: 0,
    installedPluginsSnapshot: null,
    optionValues: new Map(),
    flaggedPlugins: null,
    orphanedVersionGlobExclusions: null,
    recentActivity: [],
    pluginActivityFeatures: new Map(),
    autoUpdateListener: null,
    commandSourceReresolve: null,
    pendingAutoUpdateNotification: null,
    ownInUseMarkerPaths: new Set(),
    ownInUseMarkerHandles: new Map(),
    commandProducerDirsDenied: new Set(),
    commandProducerDirsScannedAt: 0,
    commandProducerDirsComparable: null,
    commandProducerDirsNeedCanonicalCandidate: !1,
    commandProducerDirsWslProviderUndeterminable: !1,
    commandProducerDirsChanged: Le(),
    inUseMarkerCleanup: void 0,
    hintedPluginIds: new Set(),
    seenHintPluginIds: new Set(),
    gitAvailable: void 0,
    operatorDeclaredMemo: void 0,
    marketplaceAdmissionVerdicts: new Map(),
    hiddenRegistryEntries: { raw: new Map(), v5: new Map() },
    releasedRegistryEntries: { raw: new Set(), v5: new Set() },
    cacheRootComparableMemo: void 0,
    provenLocalRoots: new Map(),
    wslProviderOfPluginsRootMemo: void 0,
  };
}
class J {
  registry = Ne();
}
var _e = new j(() => new J());
function Oe() {
  return _e.of(B().host);
}
function getPluginRegistryState() {
  return Oe().registry;
}
function clearPluginWorkflowsCache() {
  getPluginRegistryState().workflows = void 0;
}
import { readFileSync, statSync } from "fs";
import { isAbsolute as Q, join as Te, resolve as Z } from "path";
function isWithinMaxAge(e, t, i = Date.now()) {
  return Number.isFinite(e) && Math.abs(i - e) < t;
}
var je = 4194304,
  He = createLazyValue(() =>
    c({
      sourceCommand: s()
        .optional()
        .catch(void 0),
      sourceProducerPath: s()
        .optional()
        .catch(void 0),
      previousProducerPaths: v(se())
        .transform((e) => e.filter((t) => typeof t === "string"))
        .optional()
        .catch(void 0),
    }).passthrough(),
  );
function collectPluginCommandProducerDirs(e) {
  let t = getPluginRegistryState(),
    i = t.commandProducerDirsDenied,
    r = ee();
  t.commandProducerDirsWslProviderUndeterminable = r === "undeterminable";
  let o = r === "undeterminable" ? void 0 : r;
  ((t.commandProducerDirsScannedAt = Date.now()),
    (t.commandProducerDirsComparable = null));
  for (let u of new Set(e)) {
    let d;
    try {
      let p = Te(u, "installed_plugins.json"),
        b = statSync(p);
      if (!b.isFile() || b.size > je) continue;
      let y = readFileSync(p, "utf8");
      d = JSON.parse(y);
    } catch {
      continue;
    }
    let g =
      typeof d === "object" && d !== null && "plugins" in d
        ? d.plugins
        : void 0;
    if (typeof g !== "object" || g === null) continue;
    for (let p of Object.values(g)) {
      if (!Array.isArray(p)) continue;
      for (let b of p) {
        let y = He().safeParse(b);
        if (!y.success) continue;
        for (let S of [
          y.data.sourceProducerPath,
          ...(y.data.previousProducerPaths ?? []),
        ]) {
          let f = S === void 0 ? void 0 : Oz(S),
            _ = f === void 0 ? void 0 : ne(f, o);
          if (_ !== void 0) i.add(_);
        }
      }
    }
  }
  return [...i];
}
function markPluginCommandProducerDirDenied(e, { emit: t = !0 } = {}) {
  let i = ee(),
    r = ne(Oz(e), i === "undeterminable" ? void 0 : i);
  if (r === void 0) return;
  let o = getPluginRegistryState().commandProducerDirsDenied;
  if (o.has(r)) return;
  if ((o.add(r), (getPluginRegistryState().commandProducerDirsComparable = null), t)) emitCommandProducerDirsChanged();
}
function emitCommandProducerDirsChanged() {
  try {
    getPluginRegistryState().commandProducerDirsChanged.emit();
  } catch (e) {
    logError(e);
  }
}
var commandProducerDirsChangedEmitter = rE(() => getPluginRegistryState().commandProducerDirsChanged);
function isPluginCommandProducerDir(e, t, i, { maxAgeMs: r = 0 } = {}) {
  let o = getPluginRegistryState();
  if (
    !(r > 0 && Date.now() - o.commandProducerDirsScannedAt < r) ||
    o.commandProducerDirsComparable === null
  ) {
    let g = { foldCase: !0 },
      p = $b(he(), g),
      b = $b(i, g),
      y = t
        .map((f) => $b(f, g))
        .filter((f) => !wh(f, p, { alreadyComparable: !0 })),
      S = collectPluginCommandProducerDirs(t).map((f) => $b(f, g));
    ((o.commandProducerDirsComparable = [...y, ...S]),
      (o.commandProducerDirsNeedCanonicalCandidate =
        S.length > 0 || y.some((f) => !wh(b, f, { alreadyComparable: !0 }))));
  }
  if (
    o.commandProducerDirsWslProviderUndeterminable &&
    (Krt(Oz(e)) !== void 0 || Krt($b(e, { foldCase: !0 })) !== void 0)
  )
    return !0;
  if (o.commandProducerDirsComparable.length === 0) return !1;
  if (
    o.commandProducerDirsNeedCanonicalCandidate &&
    jxe(Q(e) ? e : Z(e), { allowLocalWsl: !0 })
  )
    return !0;
  let d = o.commandProducerDirsNeedCanonicalCandidate
    ? $b(e, { foldCase: !0, knownNotSuspect: !0 })
    : Z(e).normalize("NFC").toLowerCase();
  return o.commandProducerDirsComparable.some((g) =>
    wh(g, d, { alreadyComparable: !0 }),
  );
}
function ee() {
  let e = getPluginRegistryState(),
    t = getResolvedPluginsDir(),
    i = e.wslProviderOfPluginsRootMemo;
  if (i?.root === t && isWithinMaxAge(i.at, Ke)) return i.value;
  let r = N(t);
  if (r === "undeterminable") return "undeterminable";
  let o = r === void 0 ? void 0 : { prefix: r.prefix };
  return (
    (e.wslProviderOfPluginsRootMemo = { root: t, value: o, at: Date.now() }),
    o
  );
}
var Ke = 30000;
function ne(e, t) {
  let i =
    PYt(e, { exactDots: !0 }) ?? (t === void 0 ? void 0 : IYt(e, t.prefix));
  if (i !== void 0) return i;
  if (Q(e)) return !THt(e) && (!Ww(e) || CHt(e)) ? e : void 0;
  return OYt(e, { exactDots: !0 });
}
export {
  PLUGIN_LINK_MARKER_FILENAME,
  getPluginLinkMarkerSchema,
  LINK_MODE_COMMAND_SUFFIX,
  toUserSkillsStorageKey,
  toUserSkillsStorageScope,
  ORPHANED_AT_MARKER_FILENAME,
  IN_USE_MARKER_FILENAME,
  GCS_SHA_FILENAME,
  LINKS_MATERIALIZED_MARKER_FILENAME,
  parsePluginCachePath,
  isPluginVersionCacheScope,
  toPluginVersionCacheScope,
  toPluginVersionCachePath,
  resolvePathStorageScope,
  getPluginRegistryFileScope,
  getMarketplaceCacheScope,
  toMarketplaceTreeScope,
  toPluginAssetCacheScope,
  parsePluginCacheDirScope,
  PLUGIN_RESERVED_MARKER_FILES,
  toComparableName,
  isReservedOrTempName,
  isNodeModulesDirName,
  getPluginsDir,
  getPluginSeedDirs,
  toPathSafeSegment,
  isReservedClaudeAiMarketplaceName,
  toMarketplaceNameKey,
  getPluginDataDir,
  ensurePluginDataDir,
  getPluginDataDirSize,
  removePluginDataDir,
  PLUGIN_CACHE_DIR_NAME,
  getResolvedPluginsDir,
  getPluginCacheDir,
  getAllPluginRootDirs,
  isValidCliNameToken,
  buildCliCommand,
  buildRunCommandHint,
  getInstallationPreferenceSchema,
  parseInstallationPreference,
  NOT_RECORDED_INSTALL_PATH,
  isSignificantPluginError,
  isDependencyError,
  getErrorPluginId,
  isAutoupdateSkippedError,
  formatPluginError,
  formatPluginWarning,
  formatPluginWarningGuidance,
  toNormalizedPathKey,
  parseAttributionMap,
  ATTRIBUTION_SIDECAR_SUFFIX,
  SERVER_PLUGIN_ID_FIELD_NAME,
  MARKETPLACE_NAME_FIELD_NAME,
  INSTALLATION_PREFERENCE_FIELD_NAME,
  isValidMarketplaceName,
  PLUGIN_ID_PATTERN,
  isValidPluginId,
  ATTRIBUTION_SIDECAR_MAX_BYTES,
  readPluginAttributionSidecar,
  getPluginAttributionFromEnv,
  isWithinMaxAge,
  UNTRUSTED_PATH_REASON,
  classifyPathTrust,
  toCaseFoldedPath,
  getWslCompanionView,
  toWslCompanionPath,
  getPluginRegistryState,
  clearPluginWorkflowsCache,
  collectPluginCommandProducerDirs,
  markPluginCommandProducerDirDenied,
  emitCommandProducerDirsChanged,
  commandProducerDirsChangedEmitter,
  isPluginCommandProducerDir,
};

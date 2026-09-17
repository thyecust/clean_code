// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { Uw, Ce } from "../Teammates团队/chunk-qe04h4c5.js";
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
  Oje,
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
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { l, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { kA } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import { j, rE, B, he, Irt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { z, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { mhe } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { ay, wr, yHn, ott, Al, zt, z6 } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Xa } from "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import { Wi } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { s, se, v, c, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { formatFileSize as Ft } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { isAbsolute as te } from "path";
var nve = ".claude-plugin-link",
  Bzt = m(() =>
    c({
      target: s()
        .min(1)
        .max(4096)
        .refine((e) => te(e), { message: "must be an absolute path" })
        .refine((e) => !$W(e) && !li(e), { message: "must be a local path" })
        .refine((e) => !AB(e), { message: "must be canonical" }),
    }),
  ),
  SJe = `
[mode: link]`;
import { isAbsolute as ie, join as L, relative as O, sep as U } from "path";
function E() {
  return L(be(), "skills");
}
function re(e) {
  let t = O(E(), e);
  return t !== "" && t !== ".." && !t.startsWith(`..${U}`) && !ie(t);
}
function F(e) {
  if (!re(e)) return null;
  let t = O(E(), e).split(U);
  return Uw(t) && L(E(), ...t) === e ? t : null;
}
function jzt(e) {
  let t = F(e);
  return t === null ? null : Ce.userConfigDir("skills", t);
}
function enr(e) {
  let t = F(e);
  return t === null
    ? null
    : { namespace: "userConfigDir", dir: "skills", relPath: t };
}
import { isAbsolute as T, join as k, relative as H, sep as C } from "path";
var cP = ".orphaned_at",
  $u = ".in_use",
  REt = ".gcs-sha",
  xD = ".links_materialized";
function M() {
  return k(be(), "plugins", "cache");
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
function HD(e, t) {
  let i = w(e, t);
  if (i === null || i.length !== 3 || !Uw(i) || D(i[2])) return null;
  let [r, o, u] = i;
  return { marketplace: r, plugin: o, version: u };
}
function tnr(e) {
  return (
    e.namespace === "pluginCache" &&
    e.marketplace !== void 0 &&
    e.plugin !== void 0 &&
    e.version !== void 0 &&
    e.relPath === void 0
  );
}
function u$e(e, t) {
  let i = HD(e, t);
  return i === null ? null : { namespace: "pluginCache", ...i };
}
function nnr(e, t) {
  let i = [e.marketplace, e.plugin, e.version];
  if (t !== M() || !Uw(i) || D(e.version)) return null;
  return k(t, ...i);
}
function oe(e, t) {
  let i = w(e, t);
  if (i === null || i.length < 4 || !Uw(i) || D(i[2])) return null;
  let [r, o, u, ...d] = i;
  return Ce.pluginCache(r, o, u, d);
}
function bJe(e, t) {
  return oe(e, t) ?? jzt(e);
}
function BG(e, t) {
  return A(t) ? Ce.pluginRegistry(e) : null;
}
function Wzt(e, t, i) {
  return A(i) && Uw([e]) ? Ce.marketplaceCache(e, t) : null;
}
function A(e) {
  return e === k(be(), "plugins");
}
function le(e, t) {
  if (!A(t)) return null;
  let i = k(t, "marketplaces"),
    r = H(i, e);
  if (r === "" || r === ".." || r.startsWith(`..${C}`) || T(r)) return null;
  let o = r.split(C);
  return k(i, ...o) === e ? o : null;
}
function wJe(e, t) {
  let i = le(e, t);
  if (i === null || i.length < 2 || !Uw(i)) return null;
  return Ce.marketplaceTree(i[0], i.slice(1));
}
function rnr(e) {
  return e === k(be(), "plugins", "asset-cache")
    ? { namespace: "pluginAssetCache" }
    : null;
}
function kEt(e, t) {
  if (e === t) return t === M() ? { namespace: "pluginCache" } : null;
  let i = w(e, t);
  if (i === null || i.length > 2 || !Uw(i)) return null;
  let [r, o] = i;
  return o === void 0
    ? { namespace: "pluginCache", marketplace: r }
    : { namespace: "pluginCache", marketplace: r, plugin: o };
}
var d$e = new Set([nve, $u, cP]);
function wR(e) {
  return Pz(e).replace(/[. ]+$/, "");
}
function TJe(e, t) {
  let i = wR(e);
  if (t.has(i)) return !0;
  for (let r of t) if (kA(i, r)) return !0;
  return !1;
}
function rve(e) {
  return wR(e) === "node_modules";
}
import { readdir as ue, rm as de, stat as ce } from "fs/promises";
import { delimiter as ge, join as I } from "path";
var pe = "plugins",
  K = "cowork_plugins";
function me() {
  if (Irt()) return K;
  if (a.CLAUDE_CODE_USE_COWORK_PLUGINS) return K;
  return pe;
}
function Sl() {
  let e = a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (e) return Ju(e);
  return I(be(), me());
}
function MC() {
  let e = a.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!e) return [];
  return e.split(ge).filter(Boolean).map(Ju);
}
function ove(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}
function xEt(e) {
  let t = wR(e.normalize("NFKC"));
  return t.startsWith(z6) || ove(t).toLowerCase().startsWith(z6);
}
function KEn(e) {
  return ove(wR(e.normalize("NFKC"))).toLowerCase();
}
function sve(e) {
  return I(Sl(), "data", ove(e));
}
function cme(e) {
  let t = sve(e);
  return (ae().mkdirSync(t), t);
}
async function onr(e) {
  let t = sve(e),
    i = 0,
    r = async (o) => {
      for (let u of await ue(o, { withFileTypes: !0 })) {
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
  return { bytes: i, human: Ft(i) };
}
async function p$e(e) {
  let t = sve(e);
  try {
    await de(t, { recursive: !0, force: !0 });
  } catch (i) {
    n(`Failed to delete plugin data dir ${t}: ${l(i)}`, { level: "warn" });
  }
}
import { join as fe, resolve as R } from "path";
var EJe = "cache";
function sb() {
  return R(he(), Sl());
}
function z$() {
  return fe(sb(), EJe);
}
function HEt() {
  return Y([
    R(be(), "plugins"),
    R(be(), "cowork_plugins"),
    sb(),
    ...MC().map((e) => R(he(), e)),
  ]);
}
function V$(e) {
  return /^\w[\w.@-]*$/.test(e);
}
function Aa(e, t, i) {
  if (!V$(t)) return null;
  return `claude ${e} ${t}${i ? ` ${i}` : ""}`;
}
function rA(e, t, { extra: i, tail: r = "", fallback: o }) {
  let u = Aa(e, t, i);
  return u === null ? o : `run \`${u}\`${r ? ` ${r}` : ""}`;
}
var ye = ["available", "required", "auto_install", "not_available"],
  IEt = m(() => X(ye));
function Gzt(e) {
  return IEt().safeParse(e).data;
}
var PEt = "(not recorded)",
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
function $J(e) {
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
function ive(e) {
  return (
    e.type === "dependency-unsatisfied" ||
    e.type === "dependency-version-unsatisfied"
  );
}
function zoe(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  let t = e.source.lastIndexOf("@");
  if (t > 0) return e.source.slice(0, t);
  return;
}
function UJ(e) {
  return (
    e.type === "autoupdate-deferred-entry-helper" ||
    e.type === "autoupdate-disabled-by-policy"
  );
}
function vm(e) {
  return wr(ke(e));
}
function ke(e) {
  switch (e.type) {
    case "generic-error":
      return ott(e.error);
    case "path-not-found":
      return `Path not found: ${Al(e.path)} (${zt(e.component)}${e.errno ? `, ${zt(e.errno)}` : ""})`;
    case "path-traversal":
      return `Path escapes plugin directory: ${Al(e.path)} (${zt(e.component)})${e.reason ? ` \u2014 ${Al(e.reason)}` : ""}`;
    case "git-auth-failed":
      return `Git authentication failed (${zt(e.authType)}): ${Al(e.gitUrl)}`;
    case "git-timeout":
      return `Git ${zt(e.operation)} timeout: ${Al(e.gitUrl)}`;
    case "network-error":
      return `Network error: ${Al(e.url)}${e.details ? ` - ${zt(e.details)}` : ""}`;
    case "manifest-parse-error":
      return `Manifest parse error: ${zt(e.parseError)}`;
    case "manifest-validation-error":
      return `Manifest validation failed: ${zt(e.validationErrors.join(", "))}`;
    case "plugin-not-found":
      return `Plugin ${zt(e.pluginId)} not found in marketplace ${zt(e.marketplace)}`;
    case "marketplace-not-found":
      return `Marketplace ${zt(e.marketplace)} not found`;
    case "marketplace-load-failed":
      return `Marketplace ${zt(e.marketplace)} failed to load: ${zt(e.reason)}`;
    case "mcp-config-invalid":
      return `MCP server ${zt(e.serverName)} invalid: ${zt(e.validationError)}`;
    case "hook-load-failed":
      return `Hook load failed: ${zt(e.reason)}`;
    case "component-load-failed":
      return `${zt(e.component)} load failed from ${Al(e.path)}: ${zt(e.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${Al(e.url)}: ${zt(e.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${Al(e.mcpbPath)}: ${zt(e.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${Al(e.mcpbPath)}: ${zt(e.validationError)}`;
    case "lsp-config-invalid":
      return `Plugin "${zt(e.plugin)}" has invalid LSP server config for "${zt(e.serverName)}": ${zt(e.validationError)}`;
    case "lsp-server-start-failed":
      return `Plugin "${zt(e.plugin)}" failed to start LSP server "${zt(e.serverName)}": ${zt(e.reason)}`;
    case "lsp-server-crashed":
      if (e.signal)
        return `Plugin "${zt(e.plugin)}" LSP server "${zt(e.serverName)}" crashed with signal ${e.signal}`;
      return `Plugin "${zt(e.plugin)}" LSP server "${zt(e.serverName)}" crashed with exit code ${e.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `Plugin "${zt(e.plugin)}" LSP server "${zt(e.serverName)}" timed out on ${zt(e.method)} request after ${e.timeoutMs}ms`;
    case "lsp-request-failed":
      return `Plugin "${zt(e.plugin)}" LSP server "${zt(e.serverName)}" ${zt(e.method)} request failed: ${zt(e.error)}`;
    case "marketplace-blocked-by-policy":
      if (e.blockedByBlocklist)
        return `Marketplace '${zt(e.marketplace)}' is blocked by enterprise policy`;
      return `Marketplace '${zt(e.marketplace)}' is not in the allowed marketplace list`;
    case "dependency-unsatisfied": {
      let t = Aa("plugin install", e.dependency),
        i =
          e.reason === "not-enabled"
            ? "disabled \u2014 enable it or remove the dependency"
            : `not installed \u2014 ${t ? `run \`${t}\`, or ` : ""}check that its marketplace is added`;
      return `Dependency "${zt(e.dependency)}" is ${i}`;
    }
    case "dependency-version-unsatisfied":
      return `Requires "${zt(e.dependency)}" ${zt(e.required)}, installed ${zt(e.installed ?? "version unknown")}`;
    case "plugin-cache-miss":
      return `Plugin "${zt(e.plugin)}" not cached at ${Al(e.installPath)} \u2014 run /plugin to refresh`;
    case "plugin-not-installed": {
      let t = Aa("plugin install", e.source, "--scope project");
      return `Plugin "${zt(e.plugin)}" is enabled in project settings but isn't installed${t ? ` \u2014 run \`${t}\`` : " \u2014 install it at project scope (from /plugin or claude plugin install)"}`;
    }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return e.message;
    case "autoupdate-blocked-by-pinner": {
      let t = e.heldAt ? ` at ${Al(e.heldAt)}` : "",
        i = zt(e.blockedBy.join(", ")),
        r =
          e.disabledPinners.length > 0
            ? ` (note: ${zt(e.disabledPinners.join(", "))} ${e.disabledPinners.length === 1 ? "is" : "are"} currently disabled)`
            : "";
      return `Autoupdate held "${zt(e.plugin)}"${t} \u2014 version constraint from ${i}${r}`;
    }
  }
}
function K$(e) {
  return wr(Se(e));
}
function Se(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let t = W(e.manifestFields);
      return `Default ${zt(e.component)}/ folder is ignored because the manifest sets ${t}`;
    }
    case "mcp-server-suppressed-duplicate": {
      let t = e.duplicateOf.startsWith("plugin:")
        ? `server provided by plugin "${zt(e.duplicateOf.split(":")[1] ?? "?")}"`
        : `already-configured "${zt(e.duplicateOf)}"`;
      return `MCP server "${zt(e.serverName)}" skipped \u2014 same command/URL as ${t}`;
    }
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Removed from the "${zt(e.marketplace)}" marketplace`
        : `Renamed to "${zt(e.renamedTo)}" in the "${zt(e.marketplace)}" marketplace`;
    case "lsp-extension-conflict": {
      let t = e.activeServer.startsWith("plugin:")
          ? e.activeServer.split(":")[1]
          : void 0,
        i = t ? `plugin "${zt(t)}"` : `"${zt(e.activeServer)}"`;
      return `LSP server "${zt(e.serverName)}" is not used for ${zt(e.extension)} files \u2014 ${i} already registered a server for that extension`;
    }
    case "project-scope-suppressed-untrusted":
    case "project-scope-server-stripped":
      return yHn(e.warning);
    case "broken-wikilink":
      return `${zt(e.raw)} in ${Al(e.filePath)}:${e.line} doesn't resolve to a skill`;
    case "synced-plugin-shadowed":
      return `"${zt(e.source)}" from claude.ai not loaded \u2014 "${zt(e.shadowedBy)}" on this machine has the same name and takes precedence`;
    case "managed-hooks-restricted":
      return `"${zt(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;
    case "managed-plugin-disabled-by-settings":
      return `"${zt(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;
    case "ineffective-disable":
      return `Disabled in ~/.claude/settings.json but still loads \u2014 ${ay(e.overriddenBy)} settings enable it, which overrides your user setting`;
  }
}
function qzt(e) {
  return wr(ve(e));
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
        : `Create one of: ${e.tried.map((t) => Al(t)).join(" or ")}, or fix the link spelling`;
    case "mcp-server-suppressed-duplicate": {
      if (e.duplicateOf.startsWith("plugin:")) {
        let t = e.duplicateOf.split(":")[1] ?? "the other plugin";
        return `Disable plugin "${zt(t)}" if you want this plugin's version instead`;
      }
      return `Remove "${zt(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`;
    }
    case "lsp-extension-conflict": {
      let t = e.activeServer.startsWith("plugin:")
        ? (e.activeServer.split(":")[1] ?? "the other plugin")
        : e.activeServer;
      if (t === e.plugin)
        return `Plugin "${zt(e.plugin)}" declares two LSP servers for ${zt(e.extension)} \u2014 remove or reorder "${zt(e.serverName)}" in its lspServers config`;
      return `Disable plugin "${zt(t)}" to use this plugin's LSP server for ${zt(e.extension)} files, or disable "${zt(e.plugin)}" to silence this warning`;
    }
    case "synced-plugin-shadowed": {
      let t = Aa("plugin enable", e.source);
      return `To use the claude.ai copy instead, ${t ? `run \`${t}\`` : "enable it from /plugin"}, then disable or remove "${zt(e.shadowedBy)}"`;
    }
    case "managed-hooks-restricted":
      return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";
    case "managed-plugin-disabled-by-settings": {
      let t = Aa("plugin enable", e.source);
      return `To run it, ${t ? `run \`${t}\`` : "enable it from /plugin"}; if you did not expect this copy, remove its directory`;
    }
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Remove "${zt(e.source)}" from enabledPlugins if you still see this on the next start`
        : `If you still see this on the next start, update enabledPlugins to use "${zt(e.renamedTo)}@${zt(e.marketplace)}" (managed settings are not rewritten automatically)`;
    case "ineffective-disable":
      switch (e.overriddenBy) {
        case "projectSettings":
          return `Set "enabledPlugins": {"${zt(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
        case "localSettings":
          return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";
        case "flagSettings":
          return `Remove "${zt(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;
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
function OEt(e) {
  let t = Re(e).normalize("NFC");
  return P() === "windows" ? t.toLowerCase() : t;
}
function zzt(e, t, i, r) {
  let o = new Map();
  if (Buffer.byteLength(t) > i)
    return (n(`Ignoring ${e}: larger than the size cap`), o);
  let u;
  try {
    u = z(t);
  } catch {
    return (n(`Ignoring ${e}: not valid JSON`), o);
  }
  if (typeof u !== "object" || u === null || Array.isArray(u))
    return (n(`Ignoring ${e}: not a JSON object`), o);
  for (let [d, g] of Object.entries(u)) {
    let p = r(g);
    if (p !== void 0) o.set(OEt(d), p);
  }
  return o;
}
var ave = ".meta.json",
  ume = "server_plugin_id",
  DEt = "marketplace_name",
  LEt = "installation_preference",
  V = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${mhe}]{1,128}$`, "u");
function XEn(e) {
  return V.test(e);
}
var Vzt = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function Voe(e) {
  return Vzt.test(e);
}
var xe = m(() =>
    c({
      [ume]: s()
        .regex(Vzt)
        .optional()
        .catch(void 0),
      [DEt]: s()
        .regex(V)
        .optional()
        .catch(void 0),
      [LEt]: IEt()
        .optional()
        .catch(void 0),
    }),
  ),
  YEn = 4096;
async function snr(e) {
  let t = e + ave,
    i = await Wi(t, YEn);
  if (i === null) return {};
  let r;
  try {
    r = z(i);
  } catch {
    return (
      n(`Ignoring plugin attribution sidecar at ${t}: not valid JSON`),
      {}
    );
  }
  return G(r, `sidecar at ${t}`);
}
function G(e, t) {
  let i = xe().safeParse(e);
  if (!i.success)
    return (n(`Ignoring plugin attribution ${t}: not a JSON object`), {});
  let r = {},
    o = i.data[ume];
  if (typeof o === "string" && Voe(o)) r.serverPluginId = o;
  let u = i.data[DEt];
  if (typeof u === "string" && XEn(u)) r.marketplaceName = u;
  let d = Gzt(i.data[LEt]);
  if (d !== void 0) r.installationPreference = d;
  if (typeof e === "object" && e !== null) {
    for (let [g, p] of [
      [ume, r.serverPluginId],
      [DEt, r.marketplaceName],
      [LEt, r.installationPreference],
    ])
      if (g in e && p === void 0)
        n(`Ignoring plugin attribution field (${t}): invalid ${g}`);
  }
  return r;
}
var Ee = 65536;
function inr(e) {
  let t = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
  if (t === void 0) return;
  return zzt("CLAUDE_CODE_PLUGIN_ATTRIBUTION", t, Ee, (i) =>
    G(i, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry"),
  ).get(OEt(e));
}
import { normalize as Me, parse as we, resolve as q, sep as De } from "path";
var lve =
  "is network-shaped, carries a dot segment or link component, or could not be classified";
function NC(e, { trustedRoots: t = [] } = {}) {
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
  return [Sl(), ...MC(), ...e];
}
function Ie(e, t) {
  let i = Oje(e),
    r;
  for (let o of $e(t))
    for (let u of [o, Me(o)]) {
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
function t6(e) {
  switch (P()) {
    case "windows":
      return Pz(Oje(e));
    case "macos":
      return Pz(e);
    default:
      return e;
  }
}
function N(e) {
  if (P() !== "windows") return;
  let t = we(e).root,
    i = (o) => Krt(NW(o)),
    r = i(t);
  if (r === void 0) {
    let o = yZ(t);
    if (o === null) return "undeterminable";
    r = i(o);
  }
  return r === void 0 ? void 0 : { walkRoot: t, ...r };
}
function Kzt(e) {
  let t = N(e);
  if (t === void 0 || t === "undeterminable") return t;
  return {
    walkRoot: t.walkRoot,
    distroDir: t.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/"),
  };
}
function Xzt(e, t) {
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
    notices: Xa(new Map()),
    openCalls: new Map(),
    spawnProvenance: new Map(),
    renderVersions: Xa(new Map()),
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
function $t() {
  return Oe().registry;
}
function MEt() {
  $t().workflows = void 0;
}
import { readFileSync as Ue, statSync as Fe } from "fs";
import { isAbsolute as Q, join as Te, resolve as Z } from "path";
function X$(e, t, i = Date.now()) {
  return Number.isFinite(e) && Math.abs(i - e) < t;
}
var je = 4194304,
  He = m(() =>
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
function JEn(e) {
  let t = $t(),
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
        b = Fe(p);
      if (!b.isFile() || b.size > je) continue;
      let y = Ue(p, "utf8");
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
function dme(e, { emit: t = !0 } = {}) {
  let i = ee(),
    r = ne(Oz(e), i === "undeterminable" ? void 0 : i);
  if (r === void 0) return;
  let o = $t().commandProducerDirsDenied;
  if (o.has(r)) return;
  if ((o.add(r), ($t().commandProducerDirsComparable = null), t)) Koe();
}
function Koe() {
  try {
    $t().commandProducerDirsChanged.emit();
  } catch (e) {
    h(e);
  }
}
var anr = rE(() => $t().commandProducerDirsChanged);
function lnr(e, t, i, { maxAgeMs: r = 0 } = {}) {
  let o = $t();
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
      S = JEn(t).map((f) => $b(f, g));
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
  let e = $t(),
    t = sb(),
    i = e.wslProviderOfPluginsRootMemo;
  if (i?.root === t && X$(i.at, Ke)) return i.value;
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
  nve,
  Bzt,
  SJe,
  jzt,
  enr,
  cP,
  $u,
  REt,
  xD,
  HD,
  tnr,
  u$e,
  nnr,
  bJe,
  BG,
  Wzt,
  wJe,
  rnr,
  kEt,
  d$e,
  wR,
  TJe,
  rve,
  Sl,
  MC,
  ove,
  xEt,
  KEn,
  sve,
  cme,
  onr,
  p$e,
  EJe,
  sb,
  z$,
  HEt,
  V$,
  Aa,
  rA,
  IEt,
  Gzt,
  PEt,
  $J,
  ive,
  zoe,
  UJ,
  vm,
  K$,
  qzt,
  OEt,
  zzt,
  ave,
  ume,
  DEt,
  LEt,
  XEn,
  Vzt,
  Voe,
  YEn,
  snr,
  inr,
  X$,
  lve,
  NC,
  t6,
  Kzt,
  Xzt,
  $t,
  MEt,
  JEn,
  dme,
  Koe,
  anr,
  lnr,
};

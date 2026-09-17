// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he, y_e } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { An, my, jf } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { shouldSkipPluginAutoupdate } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R, l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Xg, Sh, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { pluralize, formatShortText } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { isEssentialTrafficOnly } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import {
  yi,
  ay,
  ms,
  zl,
  wr,
  ntt,
  Vn,
  Al,
  zt,
  MQ,
  Om,
} from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Gu, El } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getSettingsForSource, updateSettingsForSourceWithTransform } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { sanitizeUnicodeText } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import {
  afe,
  vC,
  Ui,
  cXe,
  S1e,
  xj,
  R$,
  awt,
  uXe,
  lwt,
  dXe,
  Pbn,
  k$,
  uwt,
  noe,
  b1e,
  lJ,
  yD,
  mXe,
} from "./chunk-ajtn749s.js";
import { isPluginBlockedByPolicy, areLocalPluginDirsAllowedByPolicy, localPluginDirsBlockedMessage, areCommandPluginSourcesDisabledByPolicy, headersHelperPolicyRefusal, isHeadersHelperDisabledByPolicy, COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE, isSourceDisallowedOrUnverifiable, isSourceAllowedByPolicy } from "./plugin-source-policy.js";
import { p$e, Aa, rA, ive, NC, $t, Koe } from "./chunk-7s6mt1vg.js";
import {
  deletePluginOptions,
  getPolicyPluginEntries,
  resolvePolicyPluginAccess,
  reloadPluginDirsFromDisk,
  resolveTrustedBuiltinPluginId,
  isTrustedBuiltinPlugin,
  initPluginUsage,
  deletePluginUsage,
  touchPluginUsage,
  getEnabledPluginsBySettingsSource,
  filterEnablementRecordsToTrustedSources,
  getPluginEnablementRecords,
  intersectVersionRanges,
  formatDependencyVersionMismatch,
  formatNoMatchingGitTag,
  collectDependencyRequirementsOn,
  findDependentPluginNames,
  collectTransitiveDependents,
  getEnabledPluginIdsForSource,
  formatRequiredByWarning,
  resolvePluginDependencyClosure,
  statLocalMarketplacePath,
  getMarketplaceTrustedRoots,
  loadLocalMarketplace,
  describeMarketplaceLoadFailure,
  refreshPluginState,
  markVersionOrphaned,
  findTrustedMarketplaceAuth,
  findSettingsDeclaredEntryAuth,
  getDeclaredMarketplaces,
  getOperatorDeclaredMarketplaces,
  getKnownMarketplaces,
  getKnownMarketplacesOrEmpty,
  findContainingSeedDir,
  loadMarketplace,
  findCachedPluginEntry,
  findPluginEntry,
  refreshMarketplace,
  formatShortHash,
  resolvePluginVersion,
  resolveInstallPathGitSha,
  getSourceCloneUrl,
  getMarketplaceSourceUrl,
  resolveSubdirSource,
  resolveVersionRange,
  getInstalledPlugins,
  removePluginInstallation,
  readInstalledPluginsFile,
  readInstalledPluginsViaStorage,
  updateInstalledPluginRecord,
  clearPluginAutoInstallFlag,
  formatDependencyResolutionError,
  isPluginInstalledOnDisk,
  installPluginWithDependencies,
  getVersionedCachePath,
  cacheDirHasPluginContentStrict,
  getVersionedZipCachePath,
  copyPluginToVersionedCache,
  cachePlugin,
  loadPluginManifest,
  entryDeclaredComponentPaths,
  entryDeclaresComponents,
  syncedPluginMintedName,
  localCopyShadowingSynced,
  loadAllPlugins,
  loadAllPluginsCacheOnly,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { uD, _j, ASt, v8e } from "../Hooks钩子/chunk-z3433nr6.js";
import { checkEnabledPlugins, getPluginEditableScopes } from "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
import { getDependencyErrorsForPlugin, buildMissingDependencyNotice } from "./plugin-dependency-resolution.js";
import {
  INLINE_PLUGIN_SOURCE,
  SKILLS_DIR_PLUGIN_SOURCE,
  SYNCED_PLUGIN_SOURCE,
  BUILTIN_PLUGIN_SOURCE,
  isNonMarketplacePluginSource,
  normalizePluginId,
  findPluginEnablementFromRecords,
  parsePluginSettingsRecord,
  isInlineOrSyncedPluginId,
  findPluginEnablementEntry,
  getPluginEnabledFromRecords,
  resolvePluginEnabledFromRecords,
  SETTINGS_SOURCE_TO_CLI_SCOPE,
  splitPluginId,
  splitPluginIdOnLastAt,
  parsePluginId,
  formatPluginId,
  getPluginMarketplace,
  isEqualIgnoringCase,
  normalizeLookupKey,
  findKeyIgnoringCase,
  filterPluginIdsByName,
  getSettingsSourceForScope,
} from "./chunk-33bdfgmx.js";
import { pg } from "../../00-第三方库/_未识别/第三方库-其他/chunk-jm5cswvd.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
async function bUn(e, t, s) {
  if (shouldSkipPluginAutoupdate()) return "ineligible";
  if (!t?.source || !isSourceAllowedByPolicy(t.source)) return "ineligible";
  if (!MQ(e, t, getDeclaredMarketplaces()[e]?.autoUpdate)) return "ineligible";
  try {
    return (
      await refreshMarketplace(e, s, void 0, { skipIfRecent: !0 }),
      $t().marketplaces.delete(e),
      "refreshed"
    );
  } catch (r) {
    return (
      n(
        `Failed to refresh marketplace '${e}' on catalog miss; using cached data: ${l(r)}`,
        { level: "warn" },
      ),
      "refresh-failed"
    );
  }
}
function dle(e) {
  if (e === "refreshed") logFeatureOk("plugin_install_refresh_first");
  else if (e === "refresh-failed")
    logFeatureBad("plugin_install_refresh_first", "refresh_failed");
  else logFeatureSad("plugin_install_refresh_first", "ineligible");
}
async function d0e(e, t, s) {
  if (isEssentialTrafficOnly()) return { outcome: "ineligible" };
  if (!t?.source || !isSourceAllowedByPolicy(t.source)) return { outcome: "ineligible" };
  if (t.installLocation && findContainingSeedDir(t.installLocation))
    return { outcome: "ineligible" };
  let r = t.source.source;
  if (r !== "github" && r !== "git" && r !== "url" && r !== "claudeai") {
    if (Om(t.source) || r === "settings") $t().marketplaces.delete(e);
    return { outcome: "ineligible" };
  }
  try {
    return (
      await refreshMarketplace(e, s, void 0, { skipIfRecent: !0 }),
      $t().marketplaces.delete(e),
      { outcome: "refreshed" }
    );
  } catch (i) {
    return (
      n(
        `Failed to refresh marketplace '${e}' before scoped install; using cached data: ${l(i)}`,
        { level: "warn" },
      ),
      { outcome: "refresh-failed", errorMessage: formatShortText(l(i)) }
    );
  }
}
var _e = toESM(pg(), 1);
import { join as Ae, resolve, sep as He } from "path";
function We(e, t) {
  let s = { install: "installed", update: "updated", uninstall: "uninstalled" }[
    t
  ];
  switch (e) {
    case INLINE_PLUGIN_SOURCE:
      return `This plugin is loaded via --plugin-dir for this session with no marketplace backing \u2014 it cannot be ${s}. Drop the --plugin-dir flag to stop loading it, or \`claude plugin disable\` to turn it off.`;
    case SYNCED_PLUGIN_SOURCE:
      return `This plugin is synced from your claude.ai account with no marketplace backing \u2014 it cannot be ${s} here. Manage it on claude.ai, or \`claude plugin disable\` to turn it off on this machine.`;
    case SKILLS_DIR_PLUGIN_SOURCE:
      return `This plugin is loaded from ${Gu(Ae(getClaudeConfigDir(), "skills"))}/ with no marketplace backing \u2014 it cannot be ${s}. Delete the directory to remove it; \`claude plugin disable\` to turn it off; edits there take effect after /reload-plugins.`;
  }
}
function Ce(e, t, s) {
  if (isNonMarketplacePluginSource(t)) return We(t, s);
  if (_j(e) && ASt(splitPluginId(e).name) !== void 0)
    return "This is a built-in plugin \u2014 built-in plugins cannot be installed, updated or uninstalled. Use `claude plugin enable` / `claude plugin disable` to turn it on or off.";
  return;
}
function ze(e, t) {
  let { name: s } = parsePluginId(e),
    r = resolvePolicyPluginAccess(getPolicyPluginEntries(), s, t);
  return r.outcome === "locked" ? r.entry.name : void 0;
}
function Ge(e) {
  switch (e) {
    case INLINE_PLUGIN_SOURCE:
      return "--plugin-dir";
    case SKILLS_DIR_PLUGIN_SOURCE:
      return "skills-directory";
    case SYNCED_PLUGIN_SOURCE:
      return "claude.ai-synced";
  }
}
var jB = ["user", "project", "local"],
  fe = { user: 0, project: 1, local: 2 },
  n9e = ["user", "project", "local", "managed"];
function De(e) {
  if (!jB.includes(e))
    throw Error(`Invalid scope "${e}". Must be one of: ${jB.join(", ")}`);
}
function r9e(e) {
  return jB.includes(e);
}
function o9e(e) {
  return e === "project" || e === "local" ? he() : void 0;
}
function wUn(e) {
  let t = getSettingsForSource("projectSettings")?.enabledPlugins;
  if (!t) return !1;
  let s = findKeyIgnoringCase(Object.keys(t), e);
  return s !== void 0 && t[s] === !0;
}
function TUn(e) {
  return Ie[e] === "sad";
}
var Ie = {
  ...Pbn,
  not_installed: "bad",
  not_installed_at_scope: "bad",
  ambiguous_marketplace: "sad",
  not_found: "bad",
  not_cached: "bad",
  source_missing: "bad",
  directory_loaded: "bad",
  builtin: "sad",
  marketplace_dir_missing: "bad",
  marketplace_dir_unreadable: "bad",
  marketplace_location_refused: "bad",
  marketplace_entry_path_refused: "bad",
  marketplace_policy_blocked: "sad",
  plugin_policy_blocked: "sad",
  command_source_inactive: "sad",
  command_source_skipped: "sad",
  command_source_refused: "sad",
  entry_helper_declined: "sad",
  claudeai_identity_changed: "sad",
};
function s9e(e) {
  let t = getInstalledPlugins(),
    s = findKeyIgnoringCase(Object.keys(t.plugins), e);
  if (s) return s;
  for (let r of ["local", "project", "user"]) {
    let i = getSettingsForSource(getSettingsSourceForScope(r))?.enabledPlugins;
    if (!i) continue;
    let o = findKeyIgnoringCase(Object.keys(i), e);
    if (o) return o;
  }
  return e;
}
function p0e(e, t, s) {
  return findPluginEnablementEntry(e, filterEnablementRecordsToTrustedSources(e, s))?.enabled ?? t.defaultEnabled !== !1;
}
function Re(e, t = ["local", "project", "user"]) {
  let s = e.includes("@"),
    r = e.toLowerCase();
  for (let i of t) {
    let o = getSettingsForSource(getSettingsSourceForScope(i))?.enabledPlugins;
    if (!o) continue;
    for (let p of Object.keys(o))
      if (s ? isEqualIgnoringCase(p, e) : p.toLowerCase().startsWith(`${r}@`))
        return { pluginId: p, scope: i };
  }
  return null;
}
function je(e, t) {
  let { name: s, marketplace: r } = parsePluginId(e);
  return t.find((i) => {
    if (isEqualIgnoringCase(i.name, e) || isEqualIgnoringCase(i.name, s)) return !0;
    if (r && i.source)
      return (
        isEqualIgnoringCase(i.name, s) && i.source.toLowerCase().includes(`@${r.toLowerCase()}`)
      );
    return !1;
  });
}
function Ke(e, t, s) {
  let { name: r } = splitPluginId(e),
    i = getInstalledPlugins(),
    o = Object.keys(i.plugins),
    p = findKeyIgnoringCase(o, e);
  if (p && i.plugins[p]?.length) return { pluginId: p, pluginName: r };
  let k = e.includes("@"),
    a = filterPluginIdsByName(o, r).filter(
      (S) => (!k || !splitPluginId(S).marketplace) && (i.plugins[S]?.length ?? 0) > 0,
    ),
    P =
      a.find((S) =>
        i.plugins[S]?.some((w) => w.scope === t && w.projectPath === s),
      ) ?? a[0];
  if (P) return { pluginId: P, pluginName: r };
  return null;
}
function rOt(e) {
  let t = getInstalledPlugins(),
    s = findKeyIgnoringCase(Object.keys(t.plugins), e),
    r = s ? t.plugins[s] : void 0;
  if (!r || r.length === 0) return { scope: "user" };
  let i = he(),
    o = r.find((a) => a.scope === "local" && a.projectPath === i);
  if (o) return { scope: o.scope, projectPath: o.projectPath };
  let p = r.find((a) => a.scope === "project" && a.projectPath === i);
  if (p) return { scope: p.scope, projectPath: p.projectPath };
  let k = r.find((a) => a.scope === "user");
  if (k) return { scope: k.scope };
  return { scope: r[0].scope, projectPath: r[0].projectPath };
}
async function fen(e, t, s) {
  if (!(await isPluginInstalledOnDisk(e, t, s))) return !1;
  return !(await getDependencyErrorsForPlugin(e, s)).some(
    (i) => i.type !== "dependency-unsatisfied" || i.reason !== "not-found",
  );
}
async function EUn(
  e,
  t = "user",
  { shownSourceCommand: s, shownEntryHelper: r, announceRefreshResult: i } = {},
  o,
) {
  (De(t), (e = normalizePluginId(e)));
  let { name: p, marketplace: k } = parsePluginId(e),
    a = Ce(e, k, "install");
  if (a !== void 0) return { success: !1, message: a };
  let P,
    S,
    w,
    X = !1,
    A,
    c = !1,
    _ = !1;
  if (k) {
    let I = (await getKnownMarketplaces(o))[k],
      b = I !== void 0 && isSourceAllowedByPolicy(I.source);
    c = I !== void 0 && !b;
    let z = i ?? (await d0e(k, I, o));
    if ((dle(z.outcome), z.outcome === "refreshed")) X = !0;
    else if (z.outcome === "refresh-failed")
      ((_ = !0), (A = `marketplace not refreshed (${z.errorMessage})`));
    let j = await findPluginEntry(e, o);
    if (j) ((P = j.entry), (S = k), (w = j.marketplaceInstallLocation));
  } else {
    let m = await sOt(p, o);
    if (m)
      ((P = m.entry), (S = m.marketplace), (w = m.marketplaceInstallLocation));
  }
  if (!P || !S) {
    let m = k ? `marketplace "${k}"` : "any configured marketplace",
      I = k ? Aa("plugin marketplace update", k) : null,
      b =
        k && !X
          ? `. Your local copy may be out of date${I ? ` \u2014 try \`${I}\`` : " \u2014 update it from /plugin > Marketplaces"}.`
          : "";
    return (
      logFeatureBad(
        "plugin_marketplace_resolve",
        c
          ? "marketplace_policy_blocked"
          : _
            ? "refresh_failed_stale_lookup"
            : "not_found",
        { scoped: k !== void 0 },
      ),
      { success: !1, message: `Plugin "${p}" not found in ${m}${b}` }
    );
  }
  let N = P,
    D = `${N.name}@${S}`;
  if (c)
    logFeatureBad("plugin_marketplace_resolve", "marketplace_policy_blocked", {
      scoped: !0,
    });
  else logFeatureOk("plugin_marketplace_resolve", { scoped: k !== void 0 });
  if (await fen(D, t, o)) {
    let m = await clearPluginAutoInstallFlag(D, t, o9e(t), o),
      I = await buildMissingDependencyNotice(D, o);
    return {
      success: !0,
      message: `Plugin "${D}" is already installed (scope: ${t})${m ? " \u2014 marked as manually installed" : ""}${I?.suffix ?? ""}`,
      pluginId: D,
      pluginName: N.name,
      scope: t,
    };
  }
  let U;
  if (r !== void 0) U = r;
  else if (((U = await g0e(D, N, o)), U !== null))
    throw new k$(
      `${oOt(U)}
This install runs that command; confirm it by running \`claude plugin install\` in a terminal (or with -y/--yes).`,
      "entry_helper_unconfirmed",
    );
  let C = await installPluginWithDependencies({
    pluginId: D,
    entry: N,
    scope: t,
    marketplaceInstallLocation: w,
    trigger: "cli",
    explicit: !0,
    consentedEntryHelper: U,
    commandSourceConsent:
      s !== void 0
        ? { kind: "shown", command: s, pluginId: D }
        : Ye(
            D,
            N.source,
            (isHoverRestEnabled() && o !== void 0 ? await readInstalledPluginsViaStorage(o) : readInstalledPluginsFile()).plugins[D],
          ),
    storageV5: o,
  });
  if (!C.ok)
    switch (C.reason) {
      case "local-source-no-location":
        return {
          success: !1,
          message: `Cannot install local plugin "${C.pluginName}" without marketplace install location`,
        };
      case "settings-write-failed":
        return {
          success: !1,
          message: `Failed to update settings: ${C.message}`,
        };
      case "resolution-failed":
        return { success: !1, message: formatDependencyResolutionError(C.resolution) };
      case "blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${C.pluginName}" is blocked by your organization's policy and cannot be installed`,
        };
      case "dependency-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${C.pluginName}" depends on "${C.blockedDependency}", which is blocked by your organization's policy`,
        };
      case "marketplace-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${C.pluginName}" is from marketplace "${C.marketplaceName}", which is blocked by your organization's policy`,
        };
      case "dependency-marketplace-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${C.pluginName}" depends on "${C.blockedDependency}" from marketplace "${C.marketplaceName}", which is blocked by your organization's policy`,
        };
      case "range-conflict": {
        let m = C.dep === D ? "Plugin" : "Dependency";
        return {
          success: !1,
          message: formatDependencyVersionMismatch(m, C.dep, C.ranges, C.why, C.installed),
        };
      }
      case "no-matching-tag": {
        let m = C.dep === D ? "Plugin" : "Dependency";
        return { success: !1, message: formatNoMatchingGitTag(m, C.dep, C.range) };
      }
    }
  let ce = Aa("plugin enable", D),
    d = ce ? ` \u2014 enable it with: ${ce}` : " \u2014 enable it in /plugin",
    F = C.installedDisabled.includes(D)
      ? C.installedDisabledByDefault.includes(D)
        ? `. This plugin is disabled by default${d}`
        : `. This plugin is disabled in your settings${d}`
      : "",
    h = A
      ? `. Warning: ${A} \u2014 installed from the cached catalog, so the version may be stale`
      : "";
  return {
    success: !0,
    message: `Successfully installed plugin: ${D} (scope: ${t})${C.depNote}${F}${h}`,
    pluginId: D,
    pluginName: N.name,
    scope: t,
  };
}
async function r4(e, t = "user", s = !0, r) {
  (De(t), (e = normalizePluginId(e)));
  let i = Ce(e, parsePluginId(e).marketplace, "uninstall");
  if (i !== void 0) return { success: !1, message: i };
  let { enabled: o, disabled: p } = await loadAllPlugins(r),
    k = [...o, ...p],
    a = je(e, k),
    P = getSettingsSourceForScope(t),
    S = getSettingsForSource(P),
    w,
    X,
    A = getInstalledPlugins(),
    c = Object.keys(A.plugins),
    _ = o9e(t);
  if (a) {
    let m = Object.keys(S?.enabledPlugins ?? {}),
      I = a.name.toLowerCase(),
      b = e.includes("@"),
      z = [
        ...m.filter((j) => j === e),
        ...m.filter((j) => isEqualIgnoringCase(j, e)),
        ...(b
          ? []
          : [
              ...m.filter((j) => j === a.name),
              ...m.filter((j) => j.startsWith(`${a.name}@`)),
              ...m.filter((j) => j.toLowerCase() === I),
              ...m.filter((j) => j.toLowerCase().startsWith(`${I}@`)),
            ]),
        b ? e : a.name,
      ];
    ((w =
      z.find((j) => {
        let ee = findKeyIgnoringCase(c, j) ?? j;
        return (A.plugins[ee] ?? []).some(
          (T) => T.scope === t && T.projectPath === _,
        );
      }) ?? z[0]),
      (X = a.name));
  } else {
    let m = Ke(e, t, _);
    if (!m)
      return {
        success: !1,
        message: `Plugin "${e}" not found in installed plugins`,
      };
    ((w = m.pluginId), (X = m.pluginName));
  }
  w = findKeyIgnoringCase(c, w) ?? w;
  let N = A.plugins[w],
    D = N?.find((m) => m.scope === t && m.projectPath === _);
  if (!D) {
    let { scope: m } = rOt(w);
    if (m !== t && N && N.length > 0) {
      if (m === "project") {
        let I = Aa("plugin disable", e, "--scope local");
        return {
          success: !1,
          message: `Plugin "${e}" is enabled at project scope (.claude/settings.json, shared with your team). To disable just for you${I ? `: ${I}` : ", use claude plugin disable with --scope local"}`,
        };
      }
      return {
        success: !1,
        message: `Plugin "${e}" is installed in ${m} scope, not ${t}. Use --scope ${m} to uninstall.`,
      };
    }
    return {
      success: !1,
      message: `Plugin "${e}" is not installed in ${t} scope. Use --scope to specify the correct scope.`,
    };
  }
  let U = D.installPath;
  (await updateSettingsForSourceWithTransform(
    P,
    (m) => {
      let I = { ...m?.enabledPlugins },
        b = findKeyIgnoringCase(Object.keys(I), w) ?? w;
      return ((I[b] = void 0), { enabledPlugins: I });
    },
    void 0,
    r,
  ),
    refreshPluginState(r),
    await removePluginInstallation(w, t, _, r));
  let ce = getInstalledPlugins().plugins[w],
    d = !ce || ce.length === 0;
  if (d && U) await markVersionOrphaned(U, r);
  if (d) {
    if ((await deletePluginOptions(w, r), deletePluginUsage([w], r), s)) await p$e(w);
  }
  let F = findDependentPluginNames(w, k),
    h = formatRequiredByWarning(F);
  return {
    success: !0,
    message: `Successfully uninstalled plugin: ${X} (scope: ${t})${h}`,
    pluginId: w,
    pluginName: X,
    scope: t,
    reverseDependents: F.length > 0 ? F : void 0,
  };
}
async function $e(e, t, s, r, i) {
  let o = t ? "enable" : "disable",
    p = Xe();
  e = normalizePluginId(e);
  let { name: k, marketplace: a } = parsePluginId(e);
  if (a === void 0 && !_j(e)) {
    let F = formatPluginId(e, BUILTIN_PLUGIN_SOURCE),
      h = Re(e, ["user"])?.pluginId;
    if (isTrustedBuiltinPlugin(F) && h !== void 0 && !_j(h)) return $e(h, t, s, r, i);
    if (isTrustedBuiltinPlugin(F)) {
      let I = await loadAllPlugins(i);
      if (
        ![...I.enabled, ...I.disabled].some(
          (z) => isEqualIgnoringCase(z.name, e) && !_j(z.source),
        )
      )
        return $e(F, t, s, r, i);
      return {
        success: !1,
        message: `Plugin "${e}" names both a built-in and another loaded plugin. Use plugin@marketplace format.`,
      };
    }
    let m = Re(e)?.pluginId;
    if (m !== void 0 && (isNonMarketplacePluginSource(getPluginMarketplace(m)) || isTrustedBuiltinPlugin(m))) return $e(m, t, s, r, i);
  }
  if (_j(e) || isNonMarketplacePluginSource(a)) {
    let F = "user",
      h = resolveTrustedBuiltinPluginId(e) ?? e,
      m = en(h, t);
    if (m !== void 0) return Le(h, t, m, h);
    let I,
      b,
      z = [],
      j = !1,
      ee,
      T = !1,
      de = "";
    if (isNonMarketplacePluginSource(a)) {
      let O = await loadAllPlugins(i),
        v = je(
          e,
          [...O.enabled, ...O.disabled].filter((K) => getPluginMarketplace(K.source) === a),
        );
      if (v) ((h = v.source), (I = v.manifest.defaultEnabled === !1));
      let J = O.warnings.some(
          (K) => K.type === "synced-plugin-shadowed" && normalizeLookupKey(K.source) === normalizeLookupKey(h),
        ),
        te = t && !J ? ze(h, v?.attributedMarketplaceName) : void 0;
      if (te !== void 0)
        return {
          success: !1,
          message: `Plugin "${h}" cannot be ${o}d here: "${te}" is locked by your organization's managed settings, so this ${Ge(a)} copy is never loaded`,
        };
      if (
        ((j =
          v !== void 0 &&
          resolvePolicyPluginAccess(getPolicyPluginEntries(), parsePluginId(h).name, v.attributedMarketplaceName).outcome ===
            "admitted"),
        t && j && v !== void 0)
      )
        z = [`${v.name}@${SYNCED_PLUGIN_SOURCE}`, `${v.name}@${INLINE_PLUGIN_SOURCE}`].flatMap((K) =>
          ["local", "user"].flatMap((ue) => {
            let q = Se(ue, K, p);
            return q?.value === !1 ? [{ scope: ue, key: q.key }] : [];
          }),
        );
      if (t && a === SYNCED_PLUGIN_SOURCE) {
        let K = new Set(O.errors.filter(ive).map((q) => q.source)),
          ue = localCopyShadowingSynced(k, [
            ...O.enabled.filter((q) => !q.isBuiltin),
            ...O.disabled
              .filter((q) => K.has(q.source))
              .map((q) => ({ ...q, enabled: !0 })),
            ...O.enabled.filter((q) => q.isBuiltin),
          ]);
        if (ue !== void 0)
          de = ` (a local copy, ${wr(ue.source)}, currently takes precedence over the synced one \u2014 disable it in /plugin to run this copy)`;
      }
      if (t && a === INLINE_PLUGIN_SOURCE && !j) {
        let { name: K } = splitPluginIdOnLastAt(h),
          ue = `${K}@${SYNCED_PLUGIN_SOURCE}`,
          q = jB.filter(
            (we) => Se(we, h, p)?.value === !1 && Se(we, ue, p) === void 0,
          );
        if (q.length > 0) b = { syncedId: ue, scopes: q };
      }
      let B = Je(h, s, p);
      if (((ee = B.override), s)) {
        if (
          ((h = B.atRequested?.key ?? B.found?.key ?? h),
          (T = B.atRequested !== void 0),
          B.atRequested === void 0 && B.found && fe[B.found.scope] > fe[s])
        )
          return {
            success: !1,
            message: `Plugin "${h}" is set at ${B.found.scope} scope (which overrides ${s}). Use --scope ${B.found.scope} or omit --scope to auto-detect.`,
          };
        F = s;
      } else
        ((F = B.decidingScope ?? B.found?.scope ?? "user"),
          (h = Se(F, h, p)?.key ?? h));
    }
    if (t && a === SKILLS_DIR_PLUGIN_SOURCE) {
      if (!areLocalPluginDirsAllowedByPolicy()) return { success: !1, message: localPluginDirsBlockedMessage(Gu(Ae(getClaudeConfigDir(), "skills"))) };
    }
    if (t && isPluginBlockedByPolicy(h))
      return {
        success: !1,
        message: `Plugin "${h}" is blocked by your organization's policy and cannot be enabled`,
      };
    if (a === SYNCED_PLUGIN_SOURCE && ee && ee.enabling !== t) return Le(h, t, ee.source, ee.key);
    let oe = getSettingsSourceForScope(F),
      le =
        t &&
        isNonMarketplacePluginSource(a) &&
        oe === "userSettings" &&
        I === !1 &&
        (a !== SYNCED_PLUGIN_SOURCE || getPluginEnabledFromRecords(h, nn(oe, h)) !== !1)
          ? void 0
          : t,
      ge = "";
    if (a === SYNCED_PLUGIN_SOURCE) {
      let O = Ne(oe, h, le),
        v = findPluginEnablementFromRecords(
          h,
          O.map(({ record: B }) => B),
        ),
        J = v?.enabled ?? I !== !0,
        te = v === void 0 ? void 0 : O[v.index]?.source;
      if (J !== t && te !== void 0) {
        let B = ay(te),
          K =
            te === "localSettings" ||
            te === "projectSettings" ||
            te === "userSettings"
              ? ` (--scope ${SETTINGS_SOURCE_TO_CLI_SCOPE[te]})`
              : "";
        if (!T)
          return {
            success: !1,
            message: `Plugin "${h}" would still be ${t ? "disabled" : "enabled"} after writing ${F} settings: ${B} settings govern it. Change it there${K}.`,
          };
        ge = ` (still ${t ? "disabled" : "enabled"} here: ${B} settings govern it${K})`;
      }
      if (!ms().includes(oe))
        ge += ` (this session ignores ${ay(oe)} settings: --setting-sources)`;
    }
    for (let { scope: O, key: v } of z) {
      if (O === F && normalizeLookupKey(v) === normalizeLookupKey(h)) continue;
      let { error: J } = await ve(getSettingsSourceForScope(O), v, !0, {}, i);
      if (J)
        return { success: !1, message: `Failed to ${o} plugin: ${J.message}` };
    }
    if (
      !t &&
      isNonMarketplacePluginSource(a) &&
      F === "project" &&
      (getPolicyPluginEntries()?.some((O) => O.enabled && normalizeLookupKey(O.name) === normalizeLookupKey(parsePluginId(h).name)) ?? !1)
    ) {
      let { error: O } = await ve("userSettings", h, !1, {}, i);
      if (O)
        return { success: !1, message: `Failed to ${o} plugin: ${O.message}` };
    }
    if (b) {
      let { syncedId: O, scopes: v } = b;
      for (let J of v) {
        if (J === F) continue;
        let { error: te } = await ve(getSettingsSourceForScope(J), O, !1, {}, i);
        if (te)
          return {
            success: !1,
            message: `Failed to ${o} plugin: ${te.message}`,
          };
      }
    }
    let { error: H } = await ve(
      oe,
      h,
      le,
      b?.scopes.includes(F) ? { [b.syncedId]: !1 } : {},
      i,
    );
    if (H)
      return { success: !1, message: `Failed to ${o} plugin: ${H.message}` };
    refreshPluginState(i);
    let { name: ne } = splitPluginIdOnLastAt(h);
    return {
      success: !0,
      message: `Successfully ${o}d plugin: ${ne}${ge}${de}`,
      pluginId: h,
      pluginName: ne,
      scope: F,
    };
  }
  if (s) De(s);
  let P,
    S,
    w = Re(e);
  if (s)
    if (((S = s), w)) P = w.pluginId;
    else if (e.includes("@")) P = e;
    else
      return {
        success: !1,
        message: `Plugin "${e}" not found in settings. Use plugin@marketplace format.`,
      };
  else if (w) ((P = w.pluginId), (S = w.scope));
  else if (e.includes("@")) ((P = e), (S = "user"));
  else
    return {
      success: !1,
      message: `Plugin "${e}" not found in any editable settings scope. Use plugin@marketplace format.`,
    };
  if (t && isPluginBlockedByPolicy(P))
    return {
      success: !1,
      message: `Plugin "${P}" is blocked by your organization's policy and cannot be enabled`,
    };
  let X = getSettingsSourceForScope(S),
    A = getSettingsForSource(X)?.enabledPlugins?.[P],
    c = s && w && fe[s] > fe[w.scope];
  if (s && A === void 0 && w && w.scope !== s && !c)
    return {
      success: !1,
      message: `Plugin "${e}" is installed at ${w.scope} scope, not ${s}. Use --scope ${w.scope} or omit --scope to auto-detect.`,
    };
  let _ = s && !c ? A === !0 : getPluginEditableScopes().has(P);
  if (t === _)
    return {
      success: !1,
      alreadyInGoalState: !0,
      message: `Plugin "${e}" is already ${t ? "enabled" : "disabled"}${s ? ` at ${s} scope` : ""}`,
    };
  let N;
  if (!t) {
    let { enabled: F, disabled: h } = await loadAllPlugins(i),
      m = [...F, ...h],
      I = findDependentPluginNames(P, m);
    if (I.length > 0) N = I;
    let b = mXe() ? m : m.filter((j) => getPluginMarketplace(j.source) !== SYNCED_PLUGIN_SOURCE),
      z = findDependentPluginNames(P, b);
    if (z.length > 0 && !r?.bypassDependentsBlock) {
      let { name: j } = splitPluginId(P),
        T = [...collectTransitiveDependents(P, b), P].map((oe) => Aa("plugin disable", oe)),
        de = T.every((oe) => oe !== null)
          ? `, or disable everything together: ${T.join(" && ")}`
          : ", or disable them together in /plugin.";
      return {
        success: !1,
        message: `${j} is still required by ${z.map(wr).join(", ")}. Disable ${pluralize(z.length, "that plugin", "those plugins")} first${de}`,
        reverseDependents: z,
      };
    }
  }
  let D = [];
  if (t) {
    let { enabled: F, disabled: h } = await loadAllPlugins(i),
      { closure: m, missing: I } = resolvePluginDependencyClosure(P, [...F, ...h]);
    if (I.length > 0) {
      let { name: E } = splitPluginId(P),
        H = I.map((O) => Aa("plugin install", O)),
        ne = H.every((O) => O !== null)
          ? `: ${H.join(" && ")}`
          : " from /plugin.";
      return {
        success: !1,
        message: `${E} depends on ${I.join(", ")}, which ${pluralize(I.length, "is", "are")} not installed. Install ${pluralize(I.length, "it", "them")} first${ne}`,
      };
    }
    let b = new Set(F.map((E) => E.source)),
      z = new Map(
        [...F, ...h].filter((E) => isNonMarketplacePluginSource(getPluginMarketplace(E.source))).map((E) => [E.source, E]),
      ),
      j = getEnabledPluginsBySettingsSource().map(({ record: E }) => E),
      ee = m.filter(
        (E) =>
          isNonMarketplacePluginSource(getPluginMarketplace(E)) &&
          !b.has(E) &&
          !resolvePluginEnabledFromRecords(E, j, z.get(E)?.manifest.defaultEnabled),
      );
    if (ee.length > 0) {
      let { name: E } = splitPluginId(P),
        H = ee.length,
        ne = ee.map((v) => Aa("plugin enable", v)),
        O = ne.every((v) => v !== null)
          ? `: ${ne.join(" && ")}`
          : " in /plugin.";
      return {
        success: !1,
        message: `${E} depends on ${ee.join(", ")}, ${pluralize(H, "a local copy that is", "local copies that are")} currently disabled. Enable ${pluralize(H, "it", "them")} first${O}`,
      };
    }
    let T = m.filter((E) => !isNonMarketplacePluginSource(getPluginMarketplace(E))),
      de = T.filter((E) => isPluginBlockedByPolicy(E));
    if (de.length > 0) {
      let { name: E } = splitPluginId(P);
      return {
        success: !1,
        message: `${E} depends on ${de.join(", ")}, which ${pluralize(de.length, "is", "are")} blocked by your organization's plugin policy. Ask an admin to allow ${pluralize(de.length, "it", "them")}.`,
      };
    }
    let oe = [...jB].sort((E, H) => fe[H] - fe[E]),
      le = [];
    for (let E of T)
      for (let H of oe) {
        if (fe[H] <= fe[S]) continue;
        let ne = getSettingsForSource(getSettingsSourceForScope(H))?.enabledPlugins?.[E];
        if (ne === void 0) continue;
        if (ne === !1) le.push({ dep: E, scope: H });
        break;
      }
    if (le.length > 0) {
      let { name: E } = splitPluginId(P),
        H = le.map((v) => `${v.dep} (${v.scope} scope)`).join(", "),
        ne = dedupe(le.map((v) => v.scope)),
        O =
          ne.length === 1
            ? `, or use --scope ${ne[0]} to write where the override lives`
            : "";
      return {
        success: !1,
        message: `${E} depends on ${H}, which ${pluralize(le.length, "is", "are")} disabled there. Enable ${pluralize(le.length, "it", "them")} at that scope${O}.`,
      };
    }
    let ge = getEnabledPluginIdsForSource(X);
    D = T.filter((E) => !ge.has(E));
  }
  let { error: U } = await updateSettingsForSourceWithTransform(
    X,
    (F) => ({
      enabledPlugins: {
        ...F?.enabledPlugins,
        [P]: t,
        ...Object.fromEntries(D.map((h) => [h, !0])),
      },
    }),
    void 0,
    i,
  );
  if (U) return { success: !1, message: `Failed to ${o} plugin: ${U.message}` };
  if ((refreshPluginState(i), t)) (initPluginUsage([P, ...D], i), touchPluginUsage([P, ...D], i));
  let { name: C } = splitPluginId(P),
    ce = formatRequiredByWarning(N),
    d =
      D.length > 0
        ? ` (also enabled ${D.length} ${pluralize(D.length, "dependency", "dependencies")}: ${D.map((F) => splitPluginId(F).name).join(", ")})`
        : "";
  return {
    success: !0,
    message: `Successfully ${o}d plugin: ${C} (scope: ${S})${ce}${d}`,
    pluginId: P,
    pluginName: C,
    scope: S,
    reverseDependents: N,
  };
}
async function f0e(e, t, s) {
  return $e(e, !0, t, void 0, s);
}
async function m0e(e, t, s) {
  return $e(e, !1, t, void 0, s);
}
async function AUn(e) {
  let t = getPluginEditableScopes();
  await reloadPluginDirsFromDisk();
  let s = await Promise.all(y_e().map((_) => syncedPluginMintedName(_, e))),
    r = dedupe(s.filter((_) => _ !== void 0).map((_) => `${_}@${SYNCED_PLUGIN_SOURCE}`)),
    i = getEnabledPluginsBySettingsSource(),
    p = ((_) =>
      new Set(_.flatMap(({ record: N }) => Object.keys(N ?? {}).map(normalizeLookupKey))))(i),
    k = r.filter((_) => !p.has(normalizeLookupKey(_))),
    a = (_) => new Set(_.flatMap(({ record: N }) => Object.keys(N ?? {}))),
    P = a(i),
    S = a(i.filter(({ source: _ }) => uD.includes(_))),
    w = v8e()
      .enabled.map((_) => _.source)
      .filter((_) => !(isTrustedBuiltinPlugin(_) ? S : P).has(_)),
    X = [...k, ...w];
  if (t.size === 0 && X.length === 0)
    return { success: !0, message: "No enabled plugins to disable" };
  let A = [],
    c = [];
  for (let [_] of t) {
    let N = await $e(_, !1, void 0, { bypassDependentsBlock: !0 }, e);
    if (N.success) A.push(_);
    else c.push(wr(`${_}: ${N.message}`));
  }
  for (let _ of X) {
    let { error: N } = await updateSettingsForSourceWithTransform(
      "userSettings",
      (D) => ({ enabledPlugins: { ...D?.enabledPlugins, [_]: !1 } }),
      void 0,
      e,
    );
    if (N) c.push(wr(`${_}: ${N.message}`));
    else A.push(_);
  }
  if (X.length > 0) refreshPluginState(e);
  if (c.length > 0)
    return {
      success: !1,
      message: `Disabled ${A.length} ${pluralize(A.length, "plugin")}, ${c.length} failed:
${c.join(`
`)}`,
    };
  return {
    success: !0,
    message: `Disabled ${A.length} ${pluralize(A.length, "plugin")}`,
  };
}
async function Pye(e, t, s = {}, r) {
  let i;
  try {
    i = await qe(e, t, s, r);
  } catch (o) {
    if (o instanceof Ui) {
      let p = o instanceof k$ ? o.failureCode : "command_source_refused";
      if (Ie[p] === "sad") logFeatureSad("plugin_update_op", p);
      else logFeatureBad("plugin_update_op", p);
      return {
        outcome: "failed",
        message: o.message,
        scope: t,
        failureCode: p,
      };
    }
    throw (logFeatureBad("plugin_update_op", "exception"), o);
  }
  switch (i.outcome) {
    case "failed":
      if (i.failureCode !== void 0 && Ie[i.failureCode] === "sad")
        logFeatureSad("plugin_update_op", i.failureCode);
      else logFeatureBad("plugin_update_op", i.failureCode ?? "op_failed");
      break;
    case "skipped":
      logFeatureSad("plugin_update_op", i.skipReason ?? "skipped");
      break;
    case "up_to_date":
    case "updated":
      if (i.refreshFailed)
        logFeatureSad(
          "plugin_update_op",
          i.refreshRefusedByPolicy
            ? "marketplace_refresh_policy_refused"
            : "marketplace_refresh_failed",
        );
      else
        logFeatureOk("plugin_update_op", {
          already_up_to_date: i.outcome === "up_to_date",
          version_unknown: i.newVersion === "unknown",
        });
      break;
  }
  return i;
}
async function qe(
  e,
  t,
  {
    skipMarketplaceRefresh: s = !1,
    skipCommandSources: r = !1,
    announceCommandSource: i,
    explicit: o = !1,
    consentedEntryHelper: p,
    onEntryHelperDisclosure: k,
  },
  a,
) {
  let P = o;
  e = normalizePluginId(e);
  let { name: S, marketplace: w } = parsePluginId(e),
    X = Ce(e, w, "update");
  if (X !== void 0)
    return {
      outcome: "failed",
      message: X,
      failureCode: _j(e) ? "builtin" : "directory_loaded",
    };
  let A = w,
    c = A ? `${S}@${A}` : e,
    _ = isHoverRestEnabled() && a !== void 0 ? await readInstalledPluginsViaStorage(a) : readInstalledPluginsFile(),
    N = findKeyIgnoringCase(Object.keys(_.plugins), c);
  if (N === void 0 && A === void 0) {
    let u = filterPluginIdsByName(Object.keys(_.plugins), S).filter(
      (L) => (_.plugins[L]?.length ?? 0) > 0,
    );
    if (u.length > 1)
      return {
        outcome: "failed",
        message: `Plugin "${Vn(S, 200)}" is installed from more than one marketplace. Include the marketplace name to pick one: ${u.map((L) => `\`claude plugin update ${Vn(L, 200)}\``).join(" or ")}`,
        scope: t,
        failureCode: "ambiguous_marketplace",
      };
    if (u.length === 0)
      return {
        outcome: "failed",
        message: `Plugin "${Vn(S, 200)}" is not installed`,
        scope: t,
        failureCode: "not_installed",
      };
    N = u[0];
  }
  if (N) ((c = N), ({ marketplace: A } = splitPluginId(c)));
  let D = N ? _.plugins[N] : void 0,
    U,
    C = !1;
  if (isPluginBlockedByPolicy(c))
    return {
      outcome: "failed",
      message: `Plugin "${Vn(c, 200)}" is blocked by your organization's policy and was not updated`,
      pluginId: c,
      scope: t,
      failureCode: "plugin_policy_blocked",
    };
  if (A) {
    let L = (await getKnownMarketplaces(a))[A]?.source;
    if (isSourceDisallowedOrUnverifiable(L))
      return {
        outcome: "failed",
        message: `Plugin "${S}" is from marketplace "${A}", which is blocked by your organization's policy`,
        pluginId: c,
        scope: t,
        failureCode: "marketplace_policy_blocked",
      };
    if (
      !s &&
      L &&
      (L.source === "github" ||
        L.source === "git" ||
        L.source === "url" ||
        L.source === "claudeai")
    )
      try {
        await refreshMarketplace(A, a, void 0, { skipIfRecent: !0 });
      } catch (G) {
        ((C = G instanceof Ui),
          (U = C
            ? "marketplace not refreshed \u2014 your organization's managed settings forbid its headersHelper (the version shown is from the cached catalog; ask your admin)"
            : `marketplace not refreshed (${formatShortText(l(G))})`),
          n(
            `Failed to refresh marketplace '${A}' before update; using cached data: ${l(G)}`,
            { level: "warn" },
          ));
      }
  }
  let ce = s ? await findCachedPluginEntry(c, a) : await findPluginEntry(c, a);
  if (!ce)
    return {
      outcome: "failed",
      message: s
        ? `Plugin "${S}" is not in the locally cached marketplace catalog; it was not re-resolved.`
        : `Plugin "${S}" not found`,
      pluginId: c,
      scope: t,
      failureCode: s ? "not_cached" : "not_found",
    };
  let { entry: d } = ce,
    { marketplaceInstallLocation: F } = ce;
  if (!D || D.length === 0)
    return {
      outcome: "failed",
      message: `Plugin "${S}" is not installed`,
      pluginId: c,
      scope: t,
      failureCode: "not_installed",
    };
  let h = o9e(t),
    m = D.filter((u) => u.scope === t),
    I = m.find((u) => u.projectPath === h);
  if (!I && m.length > 1)
    n(
      `updatePluginOp: ${m.length} ${t}-scope installs, none match CWD '${h}'; updating '${m[0]?.projectPath}' only`,
      { level: "warn" },
    );
  let b = I ?? m[0];
  if (!b) {
    let u = h ? `${t} (${h})` : t;
    return {
      outcome: "failed",
      message: `Plugin "${S}" is not installed at scope ${u}`,
      pluginId: c,
      scope: t,
      failureCode: "not_installed_at_scope",
    };
  }
  let z = b.projectPath,
    j;
  if (typeof d.source === "object" && d.source.source === "command") {
    let u = areCommandPluginSourcesDisabledByPolicy(),
      L = u || r,
      G = findKeyIgnoringCase(await checkEnabledPlugins(), c) !== void 0,
      Z = u || (r && !G),
      Q = t === "user" ? void 0 : `--scope ${t}`;
    j = L ? void 0 : await i?.(c, d, b.sourceCommand);
    let se = i !== void 0 && !afe() && b.sourceCommand === vC(d.source);
    if (L || (j === void 0 && !se && !G))
      return {
        outcome: "failed",
        message:
          r && !Z
            ? `${Vn(S, 200)} is installed by running a command, which the background marketplace update never runs; it is left to the per-session re-resolve (when that is enabled) or an explicit update \u2014 ${rA("plugin update", c, { extra: Q, fallback: "a per-plugin update reviews it" })}.`
            : u
              ? COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE
              : `${Vn(S, 200)} is disabled, so the command that installs it was not run. Enable it first, then ${rA("plugin update", c, { extra: Q, fallback: "update it explicitly" })}.`,
        pluginId: c,
        scope: t,
        failureCode:
          r && !Z ? "command_source_skipped" : "command_source_inactive",
      };
  }
  let ee = ae(),
    T = b.version,
    { enabled: de, disabled: oe } = s ? await loadAllPluginsCacheOnly(a) : await loadAllPlugins(a),
    le = collectDependencyRequirementsOn(c, [...de, ...oe]),
    ge = le.filter((u) => u.constraint.version !== void 0),
    E = le.map((u) => u.constraint.version).filter((u) => u !== void 0),
    H,
    ne = "",
    O = await getKnownMarketplaces(a);
  if (E.length > 0) {
    let u = intersectVersionRanges(E);
    if (!u.ok)
      return {
        outcome: "skipped",
        message: `Skipped \u2014 ${formatDependencyVersionMismatch("Plugin", c, E, u.reason)}`,
        pluginId: c,
        scope: t,
        blockedBy: ge.map((Z) => Z.plugin.source),
        oldVersion: T,
        skipReason: "pinner_blocked",
      };
    let L = O[A ?? ""]?.source,
      G = getSourceCloneUrl(d.source) ?? (typeof d.source === "string" ? getMarketplaceSourceUrl(L) : null);
    if (G !== null && u.range !== "*") {
      let Z = await resolveVersionRange(G, d.name, u.range);
      if (Z === null)
        n(
          `updatePluginOp(${c}): no ${d.name}--v* tag satisfying ${u.range}; falling back to HEAD + post-fetch guard`,
        );
      else if (Z.version === b.resolvedVersion && Z.sha === b.gitCommitSha)
        return {
          outcome: "up_to_date",
          message: `${S} is already at the latest version satisfying ${E.join(", ")} (${Z.version}, required by ${ge.map((Q) => Q.plugin.name).join(", ")}).${U ? ` Warning: ${U} \u2014 version shown may be stale.` : ""}`,
          pluginId: c,
          newVersion: b.version,
          oldVersion: T,
          scope: t,
          refreshFailed: U !== void 0 ? !0 : void 0,
          refreshRefusedByPolicy: C || void 0,
        };
      else if (
        ((H = Z),
        (ne = ` (highest tag satisfying ${E.join(", ")} from ${ge.map((Q) => Q.plugin.name).join(", ")})`),
        typeof d.source === "string")
      ) {
        let Q = resolveSubdirSource(L, d.source);
        if (Q !== null) d = { ...d, source: Q };
      }
    }
  }
  let v,
    J,
    te,
    B,
    K,
    ue = !1,
    q,
    we;
  {
    let u = d.source,
      L = typeof u === "object" && u.source === "claudeai",
      G = b.claudeaiPluginId;
    if ((G !== void 0 && (!L || u.pluginId !== G)) || (G === void 0 && L))
      return {
        outcome: "failed",
        message:
          G === void 0
            ? `${S} is listed by a claude.ai-hosted marketplace but its install record no longer says which claude.ai plugin it came from \u2014 not updated. Uninstall and install it again to re-pin it.`
            : `${S} was installed from a claude.ai-hosted marketplace, but "${A}" now lists ${L ? "a different claude.ai plugin" : "another source"} under that name \u2014 not updated. Uninstall and install it again to switch to what the marketplace lists now, or remove it.`,
        pluginId: c,
        scope: t,
        failureCode: "claudeai_identity_changed",
      };
  }
  if (typeof d.source !== "string") {
    let u = d.source,
      L =
        H &&
        (u.source === "github" ||
          u.source === "url" ||
          u.source === "git-subdir")
          ? { ...u, ref: H.ref, sha: H.sha }
          : u,
      G = O[A ?? ""]?.source,
      Z = yD(c),
      Q = findSettingsDeclaredEntryAuth(Z, d.name),
      se =
        u.source === "archive"
          ? noe({
              entry: d,
              archiveUrl: u.url,
              marketplaceSource: G,
              trustedSettingsEntryAuth: Q,
            })
          : void 0,
      me = se !== void 0 && u.source === "archive" ? uXe(se, u.url) : null,
      Pe = me === null ? null : headersHelperPolicyRefusal(G, A),
      re =
        Pe !== null
          ? {
              outcome: "failed",
              message: dXe(d.name, Pe),
              pluginId: c,
              scope: t,
              failureCode:
                Pe === "remote_policy_unconsented"
                  ? "entry_helper_remote_policy_unconsented"
                  : "entry_helper_disabled_by_policy",
            }
          : null;
    if (P && re !== null) return re;
    let ie = P && k === void 0 ? lwt(p, me) : null;
    if (ie !== null)
      return {
        outcome: "failed",
        message: uwt(ie, d.name, "update"),
        pluginId: c,
        scope: t,
        failureCode: awt[ie],
      };
    if (!P && me !== null) {
      let ke =
        d.version ??
        (u.source === "archive" && u.sha256 !== void 0
          ? formatShortHash(u.sha256)
          : void 0);
      if (ke !== void 0 && ke === T) {
        let Me = `${S} is already at the latest version (${T}).`;
        return {
          outcome: "up_to_date",
          message: U
            ? `${Me} Warning: ${U} \u2014 version shown may be stale.`
            : Me,
          pluginId: c,
          newVersion: T,
          oldVersion: T,
          scope: t,
          refreshFailed: U !== void 0 ? !0 : void 0,
          refreshRefusedByPolicy: C || void 0,
        };
      }
      if (re !== null) return re;
      let Oe = Aa("plugin update", c);
      return {
        outcome: "skipped",
        message:
          `Skipped \u2014 "${zt(d.name)}" fetches its archive through a headersHelper, which only runs when you update it yourself. Update it from /plugin` +
          (Oe ? ` (or \`${Oe}\`).` : "."),
        pluginId: c,
        scope: t,
        oldVersion: T,
        skipReason: "entry_helper_deferred",
      };
    }
    if (P && me !== null) {
      if (k !== void 0) {
        let ke = await k(oOt(me));
        if (ke !== "accepted")
          return {
            outcome: "failed",
            message:
              "Aborted \u2014 the headersHelper command was not confirmed, so it was not run.",
            pluginId: c,
            scope: t,
            failureCode:
              ke === "declined"
                ? "entry_helper_declined"
                : "entry_helper_unconfirmed",
          };
      }
    }
    if (
      u.source === "claudeai" &&
      H === void 0 &&
      u.version !== "" &&
      u.version === T
    ) {
      let ke = `${S} is already at the latest version (${T}).`;
      return {
        outcome: "up_to_date",
        message: U
          ? `${ke} Warning: ${U} \u2014 version shown may be stale.`
          : ke,
        pluginId: c,
        newVersion: T,
        oldVersion: T,
        scope: t,
        refreshFailed: U !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: C || void 0,
      };
    }
    let V = await cachePlugin(L, {
      manifest: { name: d.name },
      storageV5: a,
      archiveAuth: await b1e({
        pluginSource: L,
        pluginName: d.name,
        marketplaceName: A,
        marketplaceSource: G,
        trustedMarketplaceAuth: findTrustedMarketplaceAuth(G, Z),
        trustedSettingsEntryAuth: Q,
        entry: d,
        runEntryHelper: P,
      }),
      entryDeclaresComponents: entryDeclaresComponents(d),
      declaredComponentPaths: entryDeclaredComponentPaths(d),
      commandSourceConsent:
        j !== void 0
          ? { kind: "shown", command: j, pluginId: c }
          : {
              kind: "recorded",
              command: afe() ? void 0 : b.sourceCommand,
              pluginId: c,
            },
    });
    ((v = V.path),
      (J = V.producerPath),
      (te = V.contentSha256),
      (ue = !0),
      (q = H?.sha ?? V.gitCommitSha),
      (K = V.manifest?.version));
    let Ee = await resolvePluginVersion(
      c,
      d.source,
      V.manifest,
      V.path,
      d.version,
      H?.sha ?? V.gitCommitSha,
      V.contentSha256,
    );
    B =
      H && (V.manifest?.version || d.version)
        ? `${Ee}-${H.sha.substring(0, 12)}`
        : Ee;
  } else {
    let u = findContainingSeedDir(F) !== void 0 ? "system" : "workspace",
      L = await loadLocalMarketplace(c, F, d.source, O, getOperatorDeclaredMarketplaces(), a, u);
    if (L.kind === "location-error") throw L.error;
    if (L.kind !== "ok") {
      let se = describeMarketplaceLoadFailure(L, F, d.source);
      return {
        outcome: "failed",
        message: se.message,
        pluginId: c,
        scope: t,
        failureCode: se.code,
      };
    }
    ((we = L.marketplaceDir), (v = L.entryPath));
    let G = O[A ?? ""],
      Z = G !== void 0 && Om(G.source);
    try {
      if (Z) await statLocalMarketplacePath(a, v, u);
      else await ee.stat(v);
    } catch (se) {
      if (W(se))
        return {
          outcome: "failed",
          message: `Plugin source not found at ${Al(v)}`,
          pluginId: c,
          scope: t,
          failureCode: "source_missing",
        };
      throw se;
    }
    let Q;
    try {
      Q = (await loadPluginManifest(v, d.name, d.source)).manifest;
    } catch {}
    ((K = Q?.version),
      (q = (await resolveInstallPathGitSha(v)) ?? void 0),
      (B = await resolvePluginVersion(c, d.source, Q, v, d.version)));
  }
  try {
    if (H === void 0 && E.length > 0) {
      let re = _e.valid(K) ?? _e.coerce(K)?.version,
        ie = le
          .filter(
            ({ constraint: V }) =>
              V.version !== void 0 &&
              re !== void 0 &&
              !_e.satisfies(re, V.version),
          )
          .map(({ plugin: V }) => V.source);
      if (ie.length > 0)
        return {
          outcome: "skipped",
          message: `Skipped \u2014 ${ie.join(", ")} requires ${S} at a version range that ${K ?? B} does not satisfy`,
          pluginId: c,
          scope: t,
          blockedBy: ie,
          oldVersion: T,
          skipReason: "pinner_blocked",
        };
    }
    let u = getVersionedCachePath(c, B),
      L = B === "unknown",
      G = getVersionedZipCachePath(c, B),
      Z = !L && (b.version === B || b.installPath === u || b.installPath === G),
      Q = !1;
    if (Z && typeof d.source === "object" && d.source.source === "command") {
      let re = NC(b.installPath, { trustedRoots: getMarketplaceTrustedRoots(c, O, getOperatorDeclaredMarketplaces()) }),
        ie = re.absolute;
      Q =
        re.suspect ||
        !(await (R$(d.source)
          ? cXe(ie)
          : ie.endsWith(".zip")
            ? El(ie)
            : cacheDirHasPluginContentStrict(ie, a))) ||
        (R$(d.source)
          ? await Qe(ie, J ?? b.sourceProducerPath)
          : await cXe(ie, { unclassifiableIsFarm: !0 }));
    }
    if (Z && !Q) {
      if (
        typeof d.source === "object" &&
        d.source.source === "command" &&
        (b.sourceCommand !== vC(d.source) ||
          (J !== void 0 && b.sourceProducerPath !== J))
      )
        (await updateInstalledPluginRecord(
          c,
          t,
          z,
          b.installPath,
          B,
          b.gitCommitSha,
          b.resolvedVersion,
          {
            sourceCommand: vC(d.source),
            sourceProducerPath: J ?? b.sourceProducerPath,
          },
          a,
        ),
          Koe());
      let re = `${S} is already at the latest version (${B}).`;
      return {
        outcome: "up_to_date",
        message: U
          ? `${re} Warning: ${U} \u2014 version shown may be stale.`
          : re,
        pluginId: c,
        newVersion: B,
        oldVersion: T,
        scope: t,
        refreshFailed: U !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: C || void 0,
      };
    }
    u = await copyPluginToVersionedCache(v, c, B, d, we, { forceOverwrite: L, storageV5: a });
    let se = b.installPath;
    if (
      (await updateInstalledPluginRecord(
        c,
        t,
        z,
        u,
        B,
        q,
        H?.version,
        typeof d.source === "object" && d.source.source === "command"
          ? {
              sourceCommand: vC(d.source),
              sourceProducerPath: J ?? b.sourceProducerPath,
            }
          : void 0,
        a,
        typeof d.source === "object" && d.source.source === "claudeai"
          ? { claudeaiPluginId: d.source.pluginId, archiveSha256: te }
          : void 0,
      ),
      J !== void 0)
    )
      Koe();
    if (se && se !== u) {
      let re = isHoverRestEnabled() && a !== void 0 ? await readInstalledPluginsViaStorage(a) : readInstalledPluginsFile();
      if (
        !Object.values(re.plugins).some((V) =>
          V.some((Ee) => Ee.installPath === se),
        )
      )
        await markVersionOrphaned(se, a);
    }
    let me = z ? `${t} (${z})` : t,
      Pe =
        L && (T ?? "unknown") === "unknown"
          ? `Plugin "${S}" refreshed from source for scope ${me}. Restart to apply changes.`
          : `Plugin "${S}" updated from ${T || "unknown"} to ${B}${ne} for scope ${me}. Restart to apply changes.`;
    return {
      outcome: "updated",
      message: U ? `${Pe} Warning: ${U}.` : Pe,
      pluginId: c,
      newVersion: B,
      oldVersion: T,
      scope: t,
      refreshFailed: U !== void 0 ? !0 : void 0,
      refreshRefusedByPolicy: C || void 0,
    };
  } finally {
    let u = getVersionedCachePath(c, B);
    if (ue && v !== u && !resolve(u).startsWith(resolve(v) + He))
      await ee.rm(v, { recursive: !0, force: !0 });
  }
}
async function g0e(e, t, s) {
  let r = t ?? (await findCachedPluginEntry(e, s))?.entry;
  if (!r || typeof r.source !== "object" || r.source.source !== "archive")
    return null;
  if (isPluginBlockedByPolicy(e)) return null;
  let i = await getKnownMarketplacesOrEmpty(s),
    o = yD(e);
  if (o !== void 0 && isSourceDisallowedOrUnverifiable(i[o]?.source)) return null;
  let p = lJ(e, i),
    k;
  try {
    k = noe({
      entry: r,
      archiveUrl: r.source.url,
      marketplaceSource: p,
      trustedSettingsEntryAuth: findSettingsDeclaredEntryAuth(o, r.name),
    });
  } catch (a) {
    if (a instanceof k$) return null;
    throw a;
  }
  if (isHeadersHelperDisabledByPolicy(p, o)) return null;
  return uXe(k, r.source.url);
}
function oOt(e) {
  let t = ntt(e);
  return (
    `Fetching this plugin's archive sends helper-minted headers to ${t.destination}; ` +
    (t.hiddenCharactersWarning
      ? `WARNING: ${t.hiddenCharactersWarning} `
      : "") +
    `the local command it runs (headersHelper) is: ${t.command}`
  );
}
function Ye(e, t, s) {
  let r = xj(t);
  if (!r || !s || s.length === 0 || afe()) return;
  let i = vC(r);
  return {
    kind: "recorded",
    command:
      s.find((p) => p.sourceCommand === i)?.sourceCommand ??
      s.find((p) => p.sourceCommand !== void 0)?.sourceCommand,
    pluginId: e,
  };
}
async function sOt(e, t) {
  let s = await getKnownMarketplaces(t),
    r;
  for (let [i, o] of Object.entries(s)) {
    if (!isSourceAllowedByPolicy(o.source)) continue;
    try {
      let k = (await loadMarketplace(i, t)).plugins.find((a) => a.name === e);
      if (k)
        return {
          entry: k,
          marketplace: i,
          marketplaceInstallLocation: o.installLocation,
        };
    } catch (p) {
      if (p instanceof Ui) {
        r ??= p;
        continue;
      }
      n(
        `Failed to load marketplace "${i}" while searching for plugin "${e}": ${l(p)}`,
        { level: "error" },
      );
    }
  }
  if (r !== void 0) throw r;
  return;
}
async function Qe(e, t) {
  return t === void 0 || (await S1e(e, t));
}
function Se(e, t, s) {
  return Ze(getSettingsForSource(getSettingsSourceForScope(e))?.enabledPlugins, t, s);
}
function Xe() {
  let e = new Map();
  return (t) => {
    let s = e.get(t);
    if (s === void 0) ((s = parsePluginSettingsRecord(t)), e.set(t, s));
    return s;
  };
}
function Ze(e, t, s) {
  if (!e) return;
  let r = isInlineOrSyncedPluginId(t) ? s(e).byFold.get(normalizeLookupKey(t))?.key : findKeyIgnoringCase(Object.keys(e), t);
  return r === void 0 ? void 0 : { key: r, value: e[r] };
}
function Je(e, t, s) {
  let r;
  for (let k of Ve) {
    let a = Se(k, e, s);
    if (a !== void 0) {
      r = { scope: k, ...a };
      break;
    }
  }
  let i = getPluginEnablementRecords(e),
    o = findPluginEnablementEntry(
      e,
      i.map(({ record: k }) => (k === void 0 ? void 0 : s(k))),
    ),
    p = o === void 0 ? void 0 : i[o.index]?.source;
  return {
    found: r,
    atRequested: t === void 0 ? void 0 : Se(t, e, s),
    override:
      o !== void 0 && (p === "policySettings" || p === "flagSettings")
        ? { source: p, enabling: o.enabled, key: o.key }
        : void 0,
    decidingScope:
      p === "localSettings" || p === "projectSettings" || p === "userSettings"
        ? SETTINGS_SOURCE_TO_CLI_SCOPE[p]
        : void 0,
    effective: o?.enabled,
  };
}
var Ve = [...jB].sort((e, t) => fe[t] - fe[e]);
function Le(e, t, s, r) {
  let i = isEqualIgnoringCase(r, e) ? "" : ` via its legacy "${wr(r)}" entry`,
    o = i ? ` (remove that entry, or add "${e}": true beside it)` : "";
  if (s === "policySettings")
    return {
      success: !1,
      message: t
        ? `Plugin "${e}" is blocked by your organization's policy${i} and cannot be enabled here \u2014 ask an admin${o}`
        : `Plugin "${e}" is turned on by your organization's managed settings and cannot be disabled here`,
    };
  return {
    success: !1,
    message: t
      ? `Plugin "${e}" is turned off by this session's --settings flag${i}, which overrides your settings files. Change it in --settings to enable it${o}.`
      : `Plugin "${e}" is turned on by this session's --settings flag, which overrides your settings files. Remove it from --settings to disable it.`,
  };
}
function en(e, t) {
  if (!isTrustedBuiltinPlugin(e)) return;
  let s = new Set(ms());
  for (let r of ["policySettings", "flagSettings"]) {
    if (!s.has(r)) continue;
    let i = getSettingsForSource(r)?.enabledPlugins?.[e];
    if (i === void 0) continue;
    return (i === !0) === t ? void 0 : r;
  }
  return;
}
function Be(e, t) {
  let s = Object.keys(e ?? {});
  if (!isInlineOrSyncedPluginId(t)) return s.filter((i) => i === t);
  let r = normalizeLookupKey(t);
  return s.filter((i) => normalizeLookupKey(i) === r);
}
function ve(e, t, s, r, i) {
  let o = { ...r, [t]: s };
  return updateSettingsForSourceWithTransform(
    e,
    (p) => ({
      enabledPlugins: {
        ...p?.enabledPlugins,
        ...Object.fromEntries(
          Object.keys(o).flatMap((k) =>
            Be(p?.enabledPlugins, k)
              .filter((a) => a !== k)
              .map((a) => [a, void 0]),
          ),
        ),
        ...o,
      },
    }),
    void 0,
    i,
  );
}
function nn(e, t) {
  return Ne(e, t, void 0).map(({ record: s }) => s);
}
function Ne(e, t, s) {
  return tn.map((r) => {
    let i = getSettingsForSource(r)?.enabledPlugins;
    if (r !== e) return { source: r, record: i };
    let o = zl(i ?? {}, Be(i, t));
    return { source: r, record: s === void 0 ? o : { ...o, [t]: s } };
  });
}
var tn = [...yi].reverse();
var WB = "claude-cli";
function Ue(e, { allowNewlineAndTab: t = !1 } = {}) {
  for (let s = 0; s < e.length; s++) {
    let r = e.charCodeAt(s);
    if (r <= 31 || (r >= 127 && r <= 159)) {
      if (t && (r === 10 || r === 9)) continue;
      return !0;
    }
  }
  return !1;
}
var sn = /^[\w.-]+\/[\w.-]+$/,
  xe = 5000,
  Te = 4096;
function men(e, t = Sh) {
  if (An(e) || jf(e))
    throw Error(
      `Invalid cwd in deep link: UNC / network paths are not supported, got "${e}"`,
    );
  if (my(e))
    throw new R(
      `Invalid cwd in deep link: parent-directory segments are not supported, got "${e}"`,
      "Invalid cwd in deep link: parent-directory segments are not supported",
    );
  if (!e.startsWith("/") && !/^[a-zA-Z]:[/\\]/.test(e))
    throw Error(
      `Invalid cwd in deep link: must be an absolute path, got "${e}"`,
    );
  if (Ue(e))
    throw Error("Deep link cwd contains disallowed control characters");
  if (
    /(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Default_Ignorable_Code_Point}\u2028\u2029\u2800\uFFF9-\uFFFB\u{1D173}-\u{1D17A}]/u.test(
      e,
    )
  )
    throw Error(
      "Deep link cwd contains invisible or bidirectional control characters",
    );
  if (e.length > Te)
    throw Error(`Deep link cwd exceeds ${Te} characters (got ${e.length})`);
  if (
    Xg(t, e, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" }) !==
    void 0
  )
    throw new R(
      `Invalid cwd in deep link: the path resolves through a network link, got "${e}"`,
      "Invalid cwd in deep link: the path resolves through a network link",
    );
}
function gen(e) {
  let t = sanitizeUnicodeText(e).replace(
    /\r\n?/g,
    `
`,
  );
  if (Ue(t, { allowNewlineAndTab: !0 }))
    throw Error("Deep link query contains disallowed control characters");
  if (t.length > xe)
    throw Error(`Deep link query exceeds ${xe} characters (got ${t.length})`);
  return t;
}
function CUn(e) {
  let t = e.startsWith(`${WB}://`)
    ? e
    : e.startsWith(`${WB}:`)
      ? e.replace(`${WB}:`, `${WB}://`)
      : null;
  if (!t)
    throw Error(`Invalid deep link: expected ${WB}:// scheme, got "${e}"`);
  let s;
  try {
    s = new URL(t);
  } catch {
    throw Error(`Invalid deep link URL: "${e}"`);
  }
  if (s.hostname !== "open")
    throw Error(`Unknown deep link action: "${s.hostname}"`);
  let r = s.searchParams.get("cwd") ?? void 0,
    i = s.searchParams.get("repo") ?? void 0,
    o = s.searchParams.get("q");
  if (r) men(r);
  if (i && !sn.test(i))
    throw Error(`Invalid repo in deep link: expected "owner/repo", got "${i}"`);
  let p;
  if (o && o.trim().length > 0) p = gen(o.trim());
  return { query: p, cwd: r, repo: i };
}
export {
  bUn,
  dle,
  d0e,
  jB,
  n9e,
  r9e,
  o9e,
  wUn,
  TUn,
  s9e,
  p0e,
  rOt,
  fen,
  EUn,
  r4,
  f0e,
  m0e,
  AUn,
  Pye,
  g0e,
  oOt,
  sOt,
  WB,
  men,
  gen,
  CUn,
};

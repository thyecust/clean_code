// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { COMMUNITY_MARKETPLACE_NAMES, OFFICIAL_MARKETPLACE_NAMES, isReservedMarketplaceName, getPluginIdSchema } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
function l(e) {
  return u(e) || e === "synced";
}
function u(e) {
  return e === "inline";
}
var INLINE_PLUGIN_SOURCE = "inline",
  SKILLS_DIR_PLUGIN_SOURCE = "skills-dir",
  SYNCED_PLUGIN_SOURCE = "synced",
  BUILTIN_PLUGIN_SOURCE = "builtin";
function isNonMarketplacePluginSource(e) {
  return e === INLINE_PLUGIN_SOURCE || e === SKILLS_DIR_PLUGIN_SOURCE || e === SYNCED_PLUGIN_SOURCE;
}
function normalizePluginId(e) {
  let n = e.lastIndexOf("@");
  if (n <= 0) return e;
  return `${e.slice(0, n)}@${normalizePluginSourceName(e.slice(n + 1))}`;
}
function normalizePluginSourceName(e) {
  let n = e.toLowerCase();
  return isReservedMarketplaceName(n) ? n : e;
}
function hasNonMarketplacePluginSource(e) {
  return getNonMarketplacePluginSource(e) !== void 0;
}
function getNonMarketplacePluginSource(e) {
  let n = getPluginMarketplace(e);
  if (isNonMarketplacePluginSource(n)) return n;
  if (e.includes("@")) return;
  if (e.startsWith(`${INLINE_PLUGIN_SOURCE}[`)) return INLINE_PLUGIN_SOURCE;
  if (e.startsWith(`${SYNCED_PLUGIN_SOURCE}[`)) return SYNCED_PLUGIN_SOURCE;
  return;
}
function findPluginEnablementFromRecords(e, n) {
  return findPluginEnablementEntry(e, parsePluginSettingsRecords(n));
}
function parsePluginSettingsRecords(e) {
  return e.map((n) => (n === void 0 ? void 0 : parsePluginSettingsRecord(n)));
}
function parsePluginSettingsRecord(e) {
  let n = new Map();
  for (let [t, i] of Object.entries(e)) {
    if (i === void 0) continue;
    let d = normalizeLookupKey(t),
      o = c(t, i),
      r = n.get(d);
    if (r === void 0 || r.enabled)
      n.set(d, { key: t, enabled: o && (r?.enabled ?? !0) });
  }
  return { record: e, byFold: n };
}
function c(e, n) {
  if (n === void 0) return !1;
  let t = getPluginMarketplace(normalizePluginId(e));
  return t === INLINE_PLUGIN_SOURCE || t === SKILLS_DIR_PLUGIN_SOURCE ? n !== !1 : n === !0;
}
function isInlineOrSyncedPluginId(e) {
  let n = getPluginMarketplace(normalizePluginId(e));
  return n === INLINE_PLUGIN_SOURCE || n === SYNCED_PLUGIN_SOURCE;
}
function findPluginEnablementEntry(e, n) {
  if (!isInlineOrSyncedPluginId(e)) {
    for (let [o, r] of n.entries()) {
      let a = r?.record[e];
      if (a !== void 0) return { index: o, enabled: c(e, a), key: e };
    }
    return;
  }
  let t = normalizeLookupKey(e),
    i = normalizePluginId(e),
    d = getPluginMarketplace(i) === SYNCED_PLUGIN_SOURCE ? normalizeLookupKey(`${i.slice(0, i.lastIndexOf("@"))}@${INLINE_PLUGIN_SOURCE}`) : void 0;
  for (let [o, r] of n.entries()) {
    if (r === void 0) continue;
    let a = r.byFold.get(t);
    if (a !== void 0) return { index: o, enabled: a.enabled, key: a.key };
    if (d !== void 0) {
      let s = r.byFold.get(d);
      if (s !== void 0 && !s.enabled)
        return { index: o, enabled: !1, key: s.key };
    }
  }
  return;
}
function getPluginEnabledFromRecords(e, n) {
  return findPluginEnablementFromRecords(e, n)?.enabled;
}
function resolvePluginEnabledFromRecords(e, n, t) {
  return getPluginEnabledFromRecords(e, n) ?? t !== !1;
}
function resolvePluginEnabledFromEntries(e, n, t) {
  return findPluginEnablementEntry(e, n)?.enabled ?? t !== !1;
}
function isNonMarketplaceOrBuiltinPluginSource(e) {
  return isNonMarketplacePluginSource(e) || e === BUILTIN_PLUGIN_SOURCE;
}
function isProjectSkillsDirPlugin(e) {
  return e.scope === "project" && e.source.endsWith(`@${SKILLS_DIR_PLUGIN_SOURCE}`);
}
var SETTINGS_SOURCE_TO_CLI_SCOPE = {
  policySettings: "managed",
  userSettings: "user",
  projectSettings: "project",
  localSettings: "local",
  flagSettings: "flag",
};
function splitPluginId(e) {
  if (e.includes("@")) {
    let n = e.split("@");
    return { name: n[0] || "", marketplace: n[1] };
  }
  return { name: e };
}
function splitPluginIdOnLastAt(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return { name: e };
  return { name: e.slice(0, n), marketplace: e.slice(n + 1) };
}
function parsePluginId(e) {
  let n = normalizePluginId(e),
    t = splitPluginIdOnLastAt(n);
  return isNonMarketplacePluginSource(t.marketplace) ? t : splitPluginId(n);
}
function formatPluginId(e, n) {
  return n ? `${e}@${n}` : e;
}
function getPluginMarketplace(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return;
  let t = e.slice(n + 1);
  return t === "" ? void 0 : t;
}
function parsePluginIdIgnoringReservedMarketplace(e) {
  let { name: n, marketplace: t } = splitPluginIdOnLastAt(e);
  if ((isOfficialOrCommunityMarketplace(t) || t === BUILTIN_PLUGIN_SOURCE) && !getPluginIdSchema().safeParse(e).success) return { name: n };
  return { name: n, marketplace: t };
}
function isEqualIgnoringCase(e, n) {
  return e === n || e.toLowerCase() === n.toLowerCase();
}
function normalizeLookupKey(e) {
  return e.normalize("NFC").toLowerCase();
}
function findKeyIgnoringCase(e, n) {
  return e.find((t) => t === n) ?? e.find((t) => isEqualIgnoringCase(t, n));
}
function filterPluginIdsByName(e, n) {
  return e.filter((t) => isEqualIgnoringCase(splitPluginId(t).name, n));
}
function isOfficialMarketplace(e) {
  return e !== void 0 && OFFICIAL_MARKETPLACE_NAMES.has(e.toLowerCase());
}
function isOfficialOrCommunityMarketplace(e) {
  return isOfficialMarketplace(e) || (e !== void 0 && COMMUNITY_MARKETPLACE_NAMES.has(e.toLowerCase()));
}
var f = new Set([
  "anthropic-skills",
  "core",
  "cowork-plugin-management",
  "data",
  "design",
  "engineering",
  "enterprise-search",
  "figma",
  "finance",
  "human-resources",
  "internal-apps",
  "legal",
  "marketing",
  "operations",
  "product-management",
  "productivity",
  "sales",
  "small-business",
  "ai-governance-legal",
  "cocounsel-legal",
  "commercial-legal",
  "corporate-legal",
  "employment-legal",
  "ip-legal",
  "law-student",
  "legal-builder-hub",
  "legal-clinic",
  "litigation-legal",
  "privacy-legal",
  "product-legal",
  "regulatory-legal",
  "healthcare",
  "fhir-developer",
  "npi-registry",
  "icd10-codes",
  "pubmed",
  "prior-auth-review",
  "cms-coverage",
  "clinical-trial-protocol",
  "documents",
]);
function isFirstPartyPlugin(e, n) {
  return l(n) && f.has(e);
}
var g = {
  user: "userSettings",
  project: "projectSettings",
  local: "localSettings",
};
function getSettingsSourceForScope(e) {
  if (e === "managed") throw Error("Cannot install plugins to managed scope");
  return g[e];
}
function getCliScopeForSettingsSource(e) {
  return SETTINGS_SOURCE_TO_CLI_SCOPE[e];
}
export {
  INLINE_PLUGIN_SOURCE,
  SKILLS_DIR_PLUGIN_SOURCE,
  SYNCED_PLUGIN_SOURCE,
  BUILTIN_PLUGIN_SOURCE,
  isNonMarketplacePluginSource,
  normalizePluginId,
  normalizePluginSourceName,
  hasNonMarketplacePluginSource,
  getNonMarketplacePluginSource,
  findPluginEnablementFromRecords,
  parsePluginSettingsRecords,
  parsePluginSettingsRecord,
  isInlineOrSyncedPluginId,
  findPluginEnablementEntry,
  getPluginEnabledFromRecords,
  resolvePluginEnabledFromRecords,
  resolvePluginEnabledFromEntries,
  isNonMarketplaceOrBuiltinPluginSource,
  isProjectSkillsDirPlugin,
  SETTINGS_SOURCE_TO_CLI_SCOPE,
  splitPluginId,
  splitPluginIdOnLastAt,
  parsePluginId,
  formatPluginId,
  getPluginMarketplace,
  parsePluginIdIgnoringReservedMarketplace,
  isEqualIgnoringCase,
  normalizeLookupKey,
  findKeyIgnoringCase,
  filterPluginIdsByName,
  isOfficialMarketplace,
  isOfficialOrCommunityMarketplace,
  isFirstPartyPlugin,
  getSettingsSourceForScope,
  getCliScopeForSettingsSource,
};

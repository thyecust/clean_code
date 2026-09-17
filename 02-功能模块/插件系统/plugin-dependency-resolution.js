// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isDependencyError } from "./plugin-system-core.js";
import { hasHeadersHelper, resolveTrustedEntryAuth, lookupMarketplaceSource, getMarketplaceNameFromPluginId } from "./chunk-ajtn749s.js";
import { isSourceAllowedByPolicy } from "./plugin-source-policy.js";
import { getEnabledPluginIdsForSource, formatDependencyCountSuffix, formatUnresolvedDependenciesNotice, findSettingsDeclaredEntryAuth, getKnownMarketplacesOrEmpty, loadCachedMarketplaceCatalog, findPluginEntry, installPluginWithDependencies, loadAllPluginsCacheOnly } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { splitPluginId, getSettingsSourceForScope } from "./chunk-33bdfgmx.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var k = ["user", "project", "local"];
async function resolveMissingDependencies(a, r) {
  let t = new Map();
  for (let e of a) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found")
      continue;
    let c = t.get(e.dependency);
    if (!c) ((c = new Set()), t.set(e.dependency, c));
    c.add(e.source);
  }
  if (t.size === 0)
    return { installed: [], stillUnresolved: [], marketplaceMissing: [] };
  let s = await getKnownMarketplacesOrEmpty(r),
    f = k.map((e) => [e, getEnabledPluginIdsForSource(getSettingsSourceForScope(e))]),
    g = [],
    i = [],
    d = [];
  for (let [e, c] of t) {
    let u = splitPluginId(e).marketplace;
    if (!u || !s[u]) {
      (i.push(e), d.push(e));
      continue;
    }
    if (!isSourceAllowedByPolicy(s[u].source)) {
      (logForDebugging(
        `resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${u}" is blocked by enterprise policy`,
      ),
        i.push(e));
      continue;
    }
    let y = !1;
    for (let o of c) {
      let p = splitPluginId(o).marketplace;
      if (p === u) {
        y = !0;
        break;
      }
      if (!p) continue;
      if ((await loadCachedMarketplaceCatalog(p, r))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
        y = !0;
        break;
      }
    }
    if (!y) {
      (logForDebugging(
        `resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`,
      ),
        i.push(e));
      continue;
    }
    try {
      let o = await findPluginEntry(e, r);
      if (!o) {
        i.push(e);
        continue;
      }
      let p = o.entry.source;
      if (
        typeof p === "object" &&
        p.source === "archive" &&
        hasHeadersHelper(
          resolveTrustedEntryAuth({
            entry: o.entry,
            archiveUrl: p.url,
            marketplaceSource: lookupMarketplaceSource(e, s),
            trustedSettingsEntryAuth: findSettingsDeclaredEntryAuth(getMarketplaceNameFromPluginId(e), o.entry.name),
          }).entry,
        )
      ) {
        (logForDebugging(
          `resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`,
        ),
          i.push(e));
        continue;
      }
      let m = v(c, f),
        S = await installPluginWithDependencies({
          pluginId: e,
          entry: o.entry,
          scope: m ?? "user",
          marketplaceInstallLocation: o.marketplaceInstallLocation,
          trigger: "dependency-resolution",
          explicit: !1,
          auto: m !== void 0,
          requiredByEnabledDependent: !0,
          storageV5: r,
        });
      if (S.ok) {
        for (let h of S.closure) if (!g.includes(h)) g.push(h);
      } else
        (logForDebugging(
          `resolveMissingDependencies: install of "${e}" did not complete (${S.reason})`,
          { level: "warn" },
        ),
          i.push(e));
    } catch (o) {
      (logForDebugging(`resolveMissingDependencies: install of "${e}" threw: ${l(o)}`, {
        level: "warn",
      }),
        i.push(e));
    }
  }
  return { installed: g, stillUnresolved: i, marketplaceMissing: d };
}
async function getDependencyErrorsForPlugin(a, r) {
  let { errors: t } = await loadAllPluginsCacheOnly(r);
  return t.filter(isDependencyError).filter((s) => s.source === a);
}
async function buildMissingDependencyNotice(a, r) {
  let t = await getDependencyErrorsForPlugin(a, r);
  if (t.length === 0) return null;
  let { installed: s, marketplaceMissing: f } = await resolveMissingDependencies(t, r),
    g = new Set(s),
    i = dedupe(t.map((d) => d.dependency)).filter((d) => !g.has(d));
  return { suffix: `${formatDependencyCountSuffix(s)}${formatUnresolvedDependenciesNotice(i, f)}`, changed: s.length > 0 };
}
function v(a, r) {
  for (let [t, s] of r) for (let f of a) if (s.has(f)) return t;
  return;
}
export { resolveMissingDependencies, getDependencyErrorsForPlugin, buildMissingDependencyNotice };

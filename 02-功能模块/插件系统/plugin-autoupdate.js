// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Nm, ld } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { l, Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { formatDisplayText, MAX_CONSENT_TEXT_LENGTH, shouldAutoUpdateMarketplace } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { isRemoteActive } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { getFeatureValue_CACHED_MAY_BE_STALE, shouldSkipPluginAutoupdate } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { buildCliCommand, getPluginRegistryState, emitCommandProducerDirsChanged } from "./plugin-system-core.js";
import {
  isClaudeAiMarketplaceSource,
  classifyPluginError,
  initExtractMemories,
  registerAutoDreamRunner,
  getDeclaredMarketplaces,
  getKnownMarketplaces,
  getKnownMarketplacesOrEmpty,
  loadCachedMarketplaceCatalog,
  refreshMarketplace,
  readInstalledPluginsFile,
  readInstalledPluginsViaStorage,
  isInstallationInCurrentScope,
  loadAllPluginsCacheOnly,
  clearPluginCache,
  touchSessionTranscript,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isPluginCommandSourceRefreshEnabled, getSourceCommandKey, PluginSourceError, canSyncPluginsFromClaudeAi } from "./chunk-ajtn749s.js";
import { isPluginBlockedByPolicy, areCommandPluginSourcesDisabledByPolicy, policyTierCommandsMayRun, isSourceDisallowedOrUnverifiable, isSourceAllowedByPolicy } from "./plugin-source-policy.js";
import { cleanupOldVersions } from "../自动更新-安装/native-installer.js";
import { isCleanupQuietFsErrno, healRefusedSentinelLeaf, reapStaleHousekeepingStagingFiles, cleanupOldMessageFilesInBackground } from "../会话-历史-恢复/retention-cleanup.js";
import { ensureDeepLinkHandlerRegistered } from "../深链接-URL协议/深链接-URL协议.wjw0bmt6.js";
import { checkEnabledPlugins } from "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
import { updatePlugin } from "./chunk-q8w2zntw.js";
import { resolveMissingDependencies } from "./plugin-dependency-resolution.js";
import { splitPluginId } from "./chunk-33bdfgmx.js";
import { countMatching, dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { stat as z, writeFile } from "fs/promises";
import { join as B } from "path";
var D = 600000;
function registerAutoUpdateListener(t) {
  let e = getPluginRegistryState();
  if (((e.autoUpdateListener = t), e.pendingAutoUpdateNotification !== null))
    (t(
      e.pendingAutoUpdateNotification.updated,
      e.pendingAutoUpdateNotification.blocked,
      e.pendingAutoUpdateNotification.reresolved,
      e.pendingAutoUpdateNotification.announce,
    ),
      (e.pendingAutoUpdateNotification = null));
  return () => {
    e.autoUpdateListener = null;
  };
}
async function F(t) {
  let e = await getKnownMarketplaces(t),
    c = getDeclaredMarketplaces(),
    s = new Set();
  for (let [p, o] of Object.entries(e)) {
    if (!isSourceAllowedByPolicy(o.source)) continue;
    if (isClaudeAiMarketplaceSource(o.source) && !canSyncPluginsFromClaudeAi()) continue;
    if (shouldAutoUpdateMarketplace(p, o, c[p]?.autoUpdate)) s.add(p.toLowerCase());
  }
  return s;
}
async function L(t, e, c, s, p) {
  let o = !1,
    g = !1,
    b = null,
    k = null;
  for (let { scope: m } of e)
    try {
      let a = await updatePlugin(t, m, s ?? {}, p);
      switch (a.outcome) {
        case "updated":
          ((o = !0),
            logForDebugging(
              `Plugin autoupdate: updated ${t} from ${a.oldVersion} to ${a.newVersion}`,
            ));
          break;
        case "skipped": {
          if (
            (logForDebugging(`Plugin autoupdate: ${t} ${a.message}`),
            a.skipReason === "entry_helper_deferred")
          )
            k = {
              type: "autoupdate-deferred-entry-helper",
              source: t,
              plugin: splitPluginId(t).name,
              message: a.message,
            };
          else if (a.blockedBy && a.blockedBy.length > 0) {
            let y = a.blockedBy.map((r) => splitPluginId(r).name),
              _ = a.blockedBy.filter((r) => c.has(r)).map((r) => splitPluginId(r).name);
            k = {
              type: "autoupdate-blocked-by-pinner",
              source: t,
              plugin: splitPluginId(t).name,
              heldAt: a.oldVersion,
              blockedBy: y,
              disabledPinners: _,
            };
          }
          break;
        }
        case "failed":
          if (a.failureCode === "command_source_skipped") b = t;
          else if (
            a.failureCode === "entry_helper_disabled_by_policy" ||
            a.failureCode === "entry_helper_remote_policy_unconsented" ||
            a.failureCode === "plugin_policy_blocked" ||
            (a.failureCode === "command_source_refused" && (areCommandPluginSourcesDisabledByPolicy() || !policyTierCommandsMayRun()))
          )
            k = {
              type: "autoupdate-disabled-by-policy",
              source: t,
              plugin: splitPluginId(t).name,
              message: a.message,
            };
          else if (a.failureCode === "entry_helper_not_inlined")
            ((k = {
              type: "generic-error",
              source: t,
              plugin: splitPluginId(t).name,
              error: a.message,
            }),
              (g = !0));
          else if (a.failureCode !== "command_source_inactive") g = !0;
          logForDebugging(`Plugin autoupdate: failed to update ${t}: ${a.message}`, {
            level: "warn",
          });
          break;
        case "up_to_date":
          break;
      }
    } catch (a) {
      ((g = !0),
        logForDebugging(`Plugin autoupdate: error updating ${t}: ${l(a)}`, {
          level: "warn",
        }));
    }
  return {
    updated: o ? t : null,
    blocked: k,
    failed: g,
    commandSourceSkipped: b,
  };
}
async function runPluginAutoupdateForMarketplaces(t, e = new Set(), { skipCommandSources: c = !1 } = {}, s) {
  let p = isHoverRestEnabled() && s !== void 0 ? await readInstalledPluginsViaStorage(s) : readInstalledPluginsFile(),
    o = Object.keys(p.plugins);
  if (o.length === 0)
    return {
      updated: [],
      blocked: [],
      updateFailedCount: 0,
      commandSourceSkipped: [],
    };
  let { disabled: g } = await loadAllPluginsCacheOnly(s),
    b = new Set(g.map((r) => r.source)),
    k = await Promise.allSettled(
      o.map(async (r) => {
        let { marketplace: d } = splitPluginId(r);
        if (!d || !t.has(d.toLowerCase())) return null;
        if (e.has(r)) return null;
        let f = p.plugins[r];
        if (!f || f.length === 0) return null;
        let P = f.filter(isInstallationInCurrentScope);
        if (P.length === 0) return null;
        return L(r, P, b, c ? { skipCommandSources: !0 } : void 0, s);
      }),
    ),
    m = [],
    a = [],
    y = [],
    _ = 0;
  for (let r of k) {
    if (r.status !== "fulfilled" || r.value === null) continue;
    if (r.value.updated !== null) m.push(r.value.updated);
    if (r.value.blocked !== null) a.push(r.value.blocked);
    if (r.value.failed) _++;
    if (r.value.commandSourceSkipped !== null)
      y.push(r.value.commandSourceSkipped);
  }
  return {
    updated: m,
    blocked: a,
    updateFailedCount: _,
    commandSourceSkipped: y,
  };
}
async function I(t) {
  let e = {
      attemptedCount: 0,
      commandSourced: new Set(),
      updated: [],
      blocked: [],
      failedCount: 0,
    },
    c = areCommandPluginSourcesDisabledByPolicy(),
    s = !isPluginCommandSourceRefreshEnabled();
  if (c || s)
    logForDebugging(
      c
        ? "Plugin autoupdate: command-source refresh disabled by managed settings (still excluding command-sourced plugins from the regular pass)"
        : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)",
    );
  try {
    let p = isHoverRestEnabled() && t !== void 0 ? await readInstalledPluginsViaStorage(t) : readInstalledPluginsFile(),
      o = new Map();
    for (let [m, a] of Object.entries(p.plugins)) {
      let y = (a ?? []).filter(isInstallationInCurrentScope),
        { name: _, marketplace: r } = splitPluginId(m);
      if (y.length === 0 || !_ || !r) continue;
      let d = o.get(r) ?? [];
      (d.push({ pluginId: m, name: _, installations: y }), o.set(r, d));
    }
    let g,
      b = new Set(),
      k = o.size > 0 ? await getKnownMarketplacesOrEmpty(t) : {};
    for (let [m, a] of o) {
      let y = k[m];
      if (isSourceDisallowedOrUnverifiable(y?.source)) {
        for (let { pluginId: r, installations: d } of a)
          if (d.some((f) => f.sourceCommand !== void 0))
            e.commandSourced.add(r);
        continue;
      }
      let _ = await loadCachedMarketplaceCatalog(m, t);
      if (!_) continue;
      for (let { pluginId: r, name: d, installations: f } of a) {
        let P = _.plugins.find((C) => C.name === d);
        if (!P || typeof P.source === "string" || P.source.source !== "command")
          continue;
        if ((e.commandSourced.add(r), c || s)) continue;
        if (!g)
          ((g = new Set(await checkEnabledPlugins())),
            (b = new Set((await loadAllPluginsCacheOnly(t)).disabled.map((C) => C.source))));
        if (!g.has(r) || isPluginBlockedByPolicy(r)) {
          logForDebugging(
            `Plugin autoupdate: not re-resolving ${r} (disabled or blocked by policy)`,
          );
          continue;
        }
        let R = getSourceCommandKey(P.source),
          E = f.filter((C) => C.sourceCommand !== R);
        if (E.length > 0) {
          let C = E.every((w) => w.sourceCommand === void 0),
            T = dedupe(E.map((w) => w.scope))
              .map((w) => buildCliCommand("plugin update", r, `--scope ${w}`))
              .filter((w) => w !== null)
              .map((w) => `\`${w}\``);
          (logForDebugging(
            `Plugin autoupdate: not re-resolving ${r}: marketplace command differs from the accepted one`,
            { level: "warn" },
          ),
            e.blocked.push({
              type: "generic-error",
              source: r,
              plugin: d,
              error:
                (C
                  ? `${formatDisplayText(d, 200)}'s marketplace entry now installs it by running a command`
                  : `${formatDisplayText(d, 200)}'s marketplace entry changed the command it runs`) +
                ` (\`${formatDisplayText(P.source.command, MAX_CONSENT_TEXT_LENGTH)}${P.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${T.length > 0 ? `run ${T.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.`,
            }));
        }
        let U = f.filter((C) => C.sourceCommand === R);
        if (U.length === 0) continue;
        (e.attemptedCount++,
          logForDebugging(`Plugin autoupdate: re-resolving command-sourced plugin ${r}`));
        let v = await L(r, U, b, { skipMarketplaceRefresh: !0 }, t);
        if (v.updated !== null) e.updated.push(v.updated);
        if (v.blocked !== null) e.blocked.push(v.blocked);
        if (v.failed) e.failedCount++;
      }
    }
  } catch (p) {
    logForDebugging(`Plugin autoupdate: command-source refresh failed: ${l(p)}`, {
      level: "warn",
    });
  }
  return e;
}
function publishPluginAutoUpdateNotification(t, e, c = [], { announce: s = !0 } = {}) {
  if (t.length === 0 && e.length === 0) return;
  let p = getPluginRegistryState();
  if (p.autoUpdateListener) p.autoUpdateListener(t, e, c, s);
  else {
    let o = p.pendingAutoUpdateNotification;
    p.pendingAutoUpdateNotification = {
      updated: dedupe([...(o?.updated ?? []), ...t]),
      blocked: [...(o?.blocked ?? []), ...e],
      reresolved: dedupe([...(o?.reresolved ?? []), ...c]),
      announce: (o?.announce ?? !1) || s,
    };
  }
}
function x() {
  return {
    attemptedCount: 0,
    commandSourced: new Set(),
    updated: [],
    blocked: [],
    failedCount: 0,
  };
}
function runCommandSourcePluginRefresh(t) {
  let e = getPluginRegistryState();
  return (
    (e.commandSourceReresolve ??= (async () => {
      if (isRemoteActive()) return x();
      let c = await I(t);
      if (c.attemptedCount > 0) emitCommandProducerDirsChanged();
      try {
        publishPluginAutoUpdateNotification(c.updated, c.blocked, c.updated);
      } catch (s) {
        logError(s);
      }
      return c;
    })()),
    e.commandSourceReresolve
  );
}
function N(t) {
  return (async () => {
    let e = await runCommandSourcePluginRefresh(t),
      c = Date.now(),
      s = {
        marketplaces_refreshed: 0,
        marketplace_refresh_failed: 0,
        marketplace_refresh_policy_skipped: 0,
        plugins_updated: 0,
        plugin_update_failed: 0,
        plugins_blocked_by_pin: 0,
        plugins_helper_deferred: 0,
        plugins_policy_blocked: 0,
        command_plugins_refreshed: e.attemptedCount,
        command_plugin_refresh_failed: e.failedCount,
      },
      p = () => {
        if (e.attemptedCount > 0 || e.failedCount > 0)
          logEvent("tengu_plugin_autoupdate_pass", {
            outcome: S("skipped"),
            ...s,
            duration_ms: Date.now() - c,
          });
      };
    if (shouldSkipPluginAutoupdate()) {
      (logForDebugging("Plugin autoupdate: skipped (auto-updater disabled)"), p());
      return;
    }
    try {
      let o = await F(t);
      if (o.size === 0) {
        p();
        return;
      }
      let g = Math.floor(Math.random() * D);
      (await sleep(g, void 0, { unref: !0 }), (c = Date.now()));
      let b = getFeatureValue_CACHED_MAY_BE_STALE("tengu_plugin_autoupdate_allow_credential_helper", !1),
        k = await Promise.allSettled(
          Array.from(o).map(async (d) => {
            try {
              return (
                await refreshMarketplace(d, t, void 0, {
                  disableCredentialHelper: !b,
                  isBackground: !0,
                }),
                "refreshed"
              );
            } catch (f) {
              if (f instanceof PluginSourceError)
                return (
                  logForDebugging(
                    `Plugin autoupdate: marketplace ${d} not refreshed (managed policy): ${l(f)}`,
                  ),
                  "policy"
                );
              return (
                logForDebugging(
                  `Plugin autoupdate: failed to refresh marketplace ${d}: ${l(f)}`,
                  { level: "warn" },
                ),
                "failed"
              );
            }
          }),
        );
      ((s.marketplace_refresh_failed = countMatching(
        k,
        (d) => d.status === "fulfilled" && d.value === "failed",
      )),
        (s.marketplace_refresh_policy_skipped = countMatching(
          k,
          (d) => d.status === "fulfilled" && d.value === "policy",
        )),
        (s.marketplaces_refreshed =
          o.size -
          s.marketplace_refresh_failed -
          s.marketplace_refresh_policy_skipped),
        logForDebugging("Plugin autoupdate: checking installed plugins"));
      let {
        updated: m,
        blocked: a,
        updateFailedCount: y,
      } = await runPluginAutoupdateForMarketplaces(o, e.commandSourced, { skipCommandSources: !0 }, t);
      if (
        ((s.plugins_updated = m.length),
        (s.plugin_update_failed = y),
        (s.plugins_blocked_by_pin = countMatching(
          a,
          (d) => d.type === "autoupdate-blocked-by-pinner",
        )),
        (s.plugins_helper_deferred = countMatching(
          a,
          (d) => d.type === "autoupdate-deferred-entry-helper",
        )),
        (s.plugins_policy_blocked = countMatching(
          a,
          (d) => d.type === "autoupdate-disabled-by-policy",
        )),
        m.length > 0)
      )
        clearPluginCache("autoupdate dep-resolution");
      let { errors: _ } = await loadAllPluginsCacheOnly(t),
        r = await resolveMissingDependencies(
          _.filter((d) => {
            if (d.type !== "dependency-unsatisfied") return !1;
            let f = splitPluginId(d.source).marketplace;
            return f !== void 0 && o.has(f.toLowerCase());
          }),
          t,
        );
      if (r.installed.length > 0)
        (logForDebugging(
          `Plugin autoupdate: resolved ${r.installed.length} missing plugin dependencies: ${r.installed.join(", ")}`,
        ),
          m.push(...r.installed));
      (publishPluginAutoUpdateNotification(m, a),
        logEvent("tengu_plugin_autoupdate_pass", {
          outcome:
            s.marketplace_refresh_failed > 0 || s.plugin_update_failed > 0
              ? S("partial")
              : S("ok"),
          ...s,
          duration_ms: Date.now() - c,
        }));
    } catch (o) {
      (logForDebugging(`Plugin autoupdate: failed: ${l(o)}`, { level: "error" }),
        logEvent("tengu_plugin_autoupdate_pass", {
          outcome: S("failed"),
          error_kind: fromEnum(classifyPluginError(o)),
          ...s,
          duration_ms: Date.now() - c,
        }));
    }
  })();
}
var O = 86400000,
  A = 600000,
  W = 5000,
  X = 3600000;
async function q(t) {
  if (isHoverRestEnabled() && t !== void 0) {
    let e = await t.statMeta(STORAGE_KEYS.state("last-cleanup"));
    return e.ok && Date.now() - e.value.mtimeMs < O;
  }
  try {
    let e = await z(B(getClaudeConfigDir(), ".last-cleanup"));
    return Date.now() - e.mtimeMs < O;
  } catch {
    return !1;
  }
}
async function runBackgroundHousekeeping(t, e) {
  if (!t.backgroundHousekeeping.claim()) return;
  if ((initExtractMemories(t), registerAutoDreamRunner(t), N(e), ld()))
    (ensureDeepLinkHandlerRegistered(e), touchSessionTranscript(e), setInterval(touchSessionTranscript, X, e).unref());
  let c = "sentinel-unchecked";
  async function s() {
    if (ld() && Nm() > Date.now() - 60000) {
      setTimeout(p, A).unref();
      return;
    }
    if (c !== "done") {
      if (c === "sentinel-unchecked") {
        if (((c = "sweep-due"), await q(e))) {
          setTimeout(p, A).unref();
          return;
        }
      }
      if (((c = "done"), await cleanupOldMessageFilesInBackground(e), isHoverRestEnabled() && e !== void 0)) {
        (await reapStaleHousekeepingStagingFiles(getClaudeConfigDir(), t.backgroundHousekeeping), await healRefusedSentinelLeaf(e));
        let o = await e.write(
          STORAGE_KEYS.state("last-cleanup"),
          new Date().toISOString(),
          { publishDiscipline: "inPlace" },
        );
        if (!o.ok)
          logForDebugging(`.last-cleanup write failed: ${o.error.code}`, { level: "error" });
      } else
        await writeFile(B(getClaudeConfigDir(), ".last-cleanup"), new Date().toISOString()).catch(
          (o) =>
            Po(o)
              ? logForDebugging(`.last-cleanup write failed: ${o.code} ${o.message}`, {
                  level: "error",
                })
              : logError(o),
        );
    }
    if (ld() && Nm() > Date.now() - 60000) {
      setTimeout(p, A).unref();
      return;
    }
    await cleanupOldVersions();
  }
  function p() {
    return s().catch((o) =>
      isCleanupQuietFsErrno(o)
        ? logForDebugging(`background housekeeping failed: ${o.message}`, { level: "error" })
        : logError(o),
    );
  }
  setTimeout(p, W).unref();
}
export { registerAutoUpdateListener, runPluginAutoupdateForMarketplaces, publishPluginAutoUpdateNotification, runCommandSourcePluginRefresh, runBackgroundHousekeeping };

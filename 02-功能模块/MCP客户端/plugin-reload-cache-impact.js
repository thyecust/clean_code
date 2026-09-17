// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he, jc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { isCustomizationDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import { $J } from "../插件系统/chunk-7s6mt1vg.js";
import {
  discoverPluginMcpServers,
  getAgentDefinitionsWithOverrides,
  SandboxManager,
  readPluginLspConfig,
  findLspExtensionConflicts,
  loadPluginLspServers,
  shouldDeferLspServerManagerStart,
  hasLspServerManagerEverConnected,
  reinitializeLspServerManager,
  clearOrphanedVersionGlobCache,
  resetShellProviderCache,
  loadPluginHooks,
  skillsChangedEmitter,
  isLspEnabled,
  getPluginCommands,
  getPluginSkills,
  refreshPluginState,
  clearInstalledPluginsCache,
  loadAllPlugins,
  loadAllPluginsForPreview,
  getConnectablePluginMcpServerNames,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isVertexModelUnsupportedForToolSearch, isToolSearchSupportedModel, isToolSearchEnabled } from "../工具ToolSearch/tool-search-enablement.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
async function EDt(r, o) {
  return 0;
}
async function refreshActivePlugins(r, o, m, p = {}) {
  let d = p.applyStagedInstalls ?? !0;
  if ((n("refreshActivePlugins: clearing all plugin caches"), d)) clearInstalledPluginsCache();
  if ((refreshPluginState(o, m), d)) clearOrphanedVersionGlobCache();
  let g = await loadAllPlugins(o, m);
  (resetShellProviderCache(), SandboxManager.refreshConfig());
  let [f, y, c] = await Promise.all([getPluginCommands(o), getPluginSkills(o), getAgentDefinitionsWithOverrides(he(), o)]),
    { enabled: t, disabled: u, errors: w, warnings: s } = g,
    k = [],
    [L, F] = await Promise.all([
      Promise.all(
        t.map(async (e) => {
          if (e.mcpServers) return Object.keys(e.mcpServers).length;
          let a = await discoverPluginMcpServers(e, k, o);
          if (a) e.mcpServers = a;
          return a ? Object.keys(a).length : 0;
        }),
      ),
      Promise.all(
        t.map(async (e) => {
          if (e.lspServers) return Object.keys(e.lspServers).length;
          let a = await readPluginLspConfig(e, k, o);
          if (a) e.lspServers = a;
          return a ? Object.keys(a).length : 0;
        }),
      ),
    ]),
    S = L.reduce((e, a) => e + a, 0),
    _ = F.reduce((e, a) => e + a, 0);
  await EDt(t, k);
  let P = [...s, ...findLspExtensionConflicts(t)],
    b = [...w, ...k];
  (r.applyRefresh({
    enabled: t,
    disabled: u,
    commands: f,
    errors: b,
    warnings: P,
    agentDefinitions: c,
  }),
    reinitializeLspServerManager(o, m));
  let A = !1;
  try {
    await loadPluginHooks(o, m);
  } catch (e) {
    ((A = !0),
      logError(e),
      n(`refreshActivePlugins: loadPluginHooks failed: ${l(e)}`));
  }
  let j = t.reduce((e, a) => {
    if (!a.hooksConfig) return e;
    return (
      e +
      Object.values(a.hooksConfig).reduce(
        (R, E) => R + (E?.reduce((C, I) => C + I.hooks.length, 0) ?? 0),
        0,
      )
    );
  }, 0);
  return (
    skillsChangedEmitter.emit(),
    n(
      `refreshActivePlugins: ${t.length} enabled, ${f.length} commands, ${y.length} skills, ${c.allAgents.length} agents, ${j} hooks, ${S} MCP, ${_} LSP`,
    ),
    {
      enabled_count: countMatching(t, (e) => e.isBuiltin !== !0),
      disabled_count: countMatching(u, (e) => e.isBuiltin !== !0),
      command_count: f.length,
      skill_count: y.length,
      agent_count: c.allAgents.length,
      hook_count: j,
      mcp_count: S,
      lsp_count: _,
      error_count: b.length + (A ? 1 : 0),
      errors: b,
      warnings: P,
      agentDefinitions: c,
      pluginCommands: f,
    }
  );
}
async function getPluginReloadCacheImpact(r) {
  let o = new Set(
      r.mcpClients
        .filter((s) => s.config.pluginSource !== void 0)
        .map((s) => s.name),
    ),
    m,
    p = () => (m ??= loadAllPluginsForPreview(r.storageV5)),
    d = await getConnectablePluginMcpServerNames(r.dynamicMcpConfig ?? {}, r.storageV5, p),
    g = [...d].filter((s) => !o.has(s)).sort(),
    f = [...o].filter((s) => !d.has(s)).sort(),
    y = g.length > 0 || f.length > 0,
    c = isToolSearchEnabled() && isToolSearchSupportedModel(r.model) && !isVertexModelUnsupportedForToolSearch(r.model),
    t = jc() > 0,
    u = null;
  if (isLspEnabled() && !c && t && !isCustomizationDisabled("lspServers")) {
    let s = shouldDeferLspServerManagerStart()
      ? {
          hasServers: !1,
          loaderFailed: !1,
          loaderFailedApplyHealable: !1,
          derivationFailed: !1,
        }
      : await O(p, r.storageV5, r.credentials);
    if (!hasLspServerManagerEverConnected()) {
      if (s.hasServers) u = "adds";
      else if (s.loaderFailedApplyHealable) u = "may-add";
    } else if (!s.hasServers && !s.derivationFailed) {
      if (s.loaderFailedApplyHealable) u = "may-remove";
      else if (!s.loaderFailed) u = "removes";
    }
  }
  return {
    mcpServersAdded: g,
    mcpServersRemoved: f,
    toolSearchEnabled: c,
    lspToolChange: u,
    wouldInvalidateCache: (y || u !== null) && !c && t,
  };
}
async function O(r, o, m) {
  let { enabled: p, errors: d } = await r(),
    g = !1,
    f = d.some($J),
    y = d.some(
      (t) =>
        $J(t) &&
        !(t.type === "plugin-not-installed" && t.registryReadFailed !== !0) &&
        !(t.type === "marketplace-not-found" && t.registryReadFailed !== !0) &&
        t.type !== "dependency-version-unsatisfied" &&
        !(t.type === "dependency-unsatisfied" && t.reason !== "not-found"),
    ),
    c = !1;
  for (let t of p) {
    let u = [];
    try {
      let w = await loadPluginLspServers(t, u, o, m);
      if (w !== void 0 && Object.keys(w).length > 0) g = !0;
    } catch {
      c = !0;
    }
    if (u.length > 0) c = !0;
  }
  return {
    hasServers: g,
    loaderFailed: f,
    loaderFailedApplyHealable: y,
    derivationFailed: c,
  };
}
function logPluginReloadCacheImpact(r, o) {
  logEvent("tengu_reload_plugins_cache_impact", {
    mcp_changed: r.mcpServersAdded.length > 0 || r.mcpServersRemoved.length > 0,
    lsp_changed: r.lspToolChange !== null,
    tool_search_on: r.toolSearchEnabled,
    warned: o.warned,
    forced: o.forced,
  });
}
export { EDt, refreshActivePlugins, getPluginReloadCacheImpact, logPluginReloadCacheImpact };

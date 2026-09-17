// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 206 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { sanitizeForDisplay } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getRemoteTransport, hasRemoteControlChannel } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { formatDependencyCountSuffix } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { refreshActivePlugins, getPluginReloadCacheImpact, logPluginReloadCacheImpact } from "./plugin-reload-cache-impact.js";
import { parseThinClientReply } from "../../01-核心基础设施/核心工具-未归类/parse-thin-client-reply.js";
import { resolveMissingDependencies } from "../插件系统/plugin-dependency-resolution.js";
import { PluginStateStore } from "../插件系统/plugin-state-store.js";
import { T, se, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var S = createLazyValue(() => {
    let n = v(se())
      .optional()
      .catch(void 0);
    return c({
      plugins: n,
      commands: n,
      agents: n,
      mcpServers: n,
      error_count: T().catch(0),
    });
  }),
  REMOTE_INPUT_DECLINE =
    "/reload-plugins isn't available over a remote connection in this session.",
  HEADLESS_MCP_PENDING_NOTE = "Plugin MCP server changes take effect in your next session.",
  j = async (n, e) => {
    if (!P(e)) return { type: "text", value: REMOTE_INPUT_DECLINE };
    if (hasRemoteControlChannel()) {
      let o = parseThinClientReply(
        "reload_plugins",
        S(),
        await getRemoteTransport().sendControlRequest(
          { subtype: "reload_plugins" },
          { signal: e.abortController.signal },
        ),
      );
      if (
        !o ||
        (o.plugins ?? o.commands ?? o.agents ?? o.mcpServers) === void 0
      )
        return { type: "text", value: "Reloaded on remote." };
      let a = `Reloaded on remote: ${[r(o.plugins?.length ?? 0, "plugin"), r(o.commands?.length ?? 0, "skill"), r(o.agents?.length ?? 0, "agent"), r(o.mcpServers?.length ?? 0, "plugin MCP server")].join(" \xB7 ")}`;
      if (o.error_count > 0)
        a += `
${r(o.error_count, "error")} during load. Run /plugin on the remote for details.`;
      return { type: "text", value: a };
    }
    let t = n
        .trim()
        .split(/\s+/)
        .some((o) => o === "--force" || o === "force"),
      s = e.options.isNonInteractiveSession,
      l = await getPluginReloadCacheImpact({
        model: e.options.mainLoopModel,
        mcpClients: e.getAppState().mcp.clients,
        dynamicMcpConfig: e.options.dynamicMcpConfig,
        storageV5: e.storageV5,
        credentials: e.credentials,
      }),
      f = t ? null : C(l, s);
    if (f !== null)
      return (logPluginReloadCacheImpact(l, { warned: !0, forced: !1 }), { type: "text", value: f });
    let i = null,
      h = l,
      g = PluginStateStore.over({ getState: e.getAppState, setState: e.setAppState });
    try {
      let o = await refreshActivePlugins(g, e.storageV5, e.credentials),
        d = "",
        a = await resolveMissingDependencies(o.errors, e.storageV5);
      if (a.installed.length > 0) {
        let u = t
          ? null
          : await getPluginReloadCacheImpact({
              model: e.options.mainLoopModel,
              mcpClients: e.getAppState().mcp.clients,
              dynamicMcpConfig: e.options.dynamicMcpConfig,
              storageV5: e.storageV5,
              credentials: e.credentials,
            });
        if (((i = u === null ? null : C(u, s)), u !== null && i !== null))
          ((h = u),
            (d = `${formatDependencyCountSuffix(a.installed)} installed but not applied`),
            g.markNeedsRefresh());
        else
          ((d = `${formatDependencyCountSuffix(a.installed)} resolved`),
            (o = await refreshActivePlugins(g, e.storageV5, e.credentials)));
      }
      let p = `Reloaded: ${[r(o.enabled_count, "plugin"), r(o.command_count + o.skill_count, "skill"), r(o.agent_count, "agent"), r(o.hook_count, "hook"), ...(s ? [] : [r(o.mcp_count, "plugin MCP server")]), r(o.lsp_count, "plugin LSP server")].join(" \xB7 ")}${d}`;
      if (s && l.mcpServersAdded.length + l.mcpServersRemoved.length > 0)
        p += `
${HEADLESS_MCP_PENDING_NOTE}`;
      if (i !== null)
        p += `
${i}`;
      if (o.error_count > 0)
        p += `
${r(o.error_count, "error")} during load. Run /plugin for details.`;
      return { type: "text", value: p };
    } finally {
      logPluginReloadCacheImpact(h, { warned: i !== null, forced: t });
    }
  };
function P(n) {
  return (
    !n.options.isNonInteractiveSession ||
    (n.submittedOnLocalStdin === !0 &&
      n.dispatchedOverBridge !== !0 &&
      n.submissionVerifiedSlackHumanTurn !== !0)
  );
}
function C(n, e) {
  if (!n.wouldInvalidateCache) return null;
  if (!e)
    return formatCacheWarningText({
      added: n.mcpServersAdded,
      removed: n.mcpServersRemoved,
      lspToolChange: n.lspToolChange,
    });
  if (n.lspToolChange === null) return null;
  return formatCacheWarningText({ added: [], removed: [], lspToolChange: n.lspToolChange });
}
function r(n, e) {
  return `${n} ${pluralize(n, e)}`;
}
function formatCacheWarningText(n) {
  let e = [...n.added, ...n.removed],
    [t] = e,
    s =
      e.length === 1 && t !== void 0
        ? sanitizeForDisplay(t.split(":").slice(2).join(":") || t)
        : `${e.length} MCP servers`,
    l = [];
  if (e.length > 0) l.push(`changes MCP tools (${s})`);
  if (n.lspToolChange !== null)
    l.push(
      n.lspToolChange === "may-add"
        ? "may add the LSP tool"
        : n.lspToolChange === "may-remove"
          ? "may remove the LSP tool"
          : `${n.lspToolChange} the LSP tool`,
    );
  return (
    `This reload ${l.join(" and ")} \u2014 your next message will re-read ` +
    "the whole conversation instead of using the cache. Run /reload-plugins --force to apply."
  );
}
export {
  HEADLESS_MCP_PENDING_NOTE,
  REMOTE_INPUT_DECLINE,
  j as call,
  formatCacheWarningText,
};

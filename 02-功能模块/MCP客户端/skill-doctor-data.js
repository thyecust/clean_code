// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { S1, Pp } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getRuntimeMainLoopModel } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getSkillUsageStats, getSkillListingCharCounts, collectSkillCommands, attributionSkillName, dropShadowedFallbackSkills, isFallbackStub } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { te, formatTokens, formatTokenEstimate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { i3e, $Bn } from "../成本-Token统计/chunk-3nwwgatc.js";
import { getDisusedPlugins } from "../插件系统/plugin-disuse.js";
import { normalizeMcpName } from "../../01-核心基础设施/共享小工具-未细化/mcp-name-normalization.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function padEndToWidth(n, t) {
  return n + " ".repeat(Math.max(0, t - te(n)));
}
function padStartToWidth(n, t) {
  return " ".repeat(Math.max(0, t - te(n))) + n;
}
function buildSkillTableLayout(n) {
  let t = n.map((o) => ({
    context: o.listingTokens === null ? "-" : formatTokenEstimate(o.listingTokens),
    week: o.weekTokens === null ? "-" : formatTokens(o.weekTokens),
    lastUsed:
      o.daysSinceUse === null
        ? "never"
        : o.daysSinceUse === 0
          ? "today"
          : `${o.daysSinceUse} ${pluralize(o.daysSinceUse, "day")}`,
  }));
  return {
    cells: t,
    widths: {
      name: Math.max(5, ...n.map((o) => te(o.name))),
      source: Math.max(6, ...n.map((o) => te(o.source))),
      context: Math.max(7, ...t.map((o) => te(o.context))),
      week: Math.max(9, ...t.map((o) => te(o.week))),
      uses: Math.max(4, ...n.map((o) => te(String(o.usageCount)))),
    },
  };
}
class SkillDoctorStageError extends Error {
  featureErrorCode;
  constructor(n, t) {
    super("skill-doctor stage failed", { cause: t });
    this.featureErrorCode = n;
  }
}
function buildSkillDoctorContext(n) {
  return {
    commands: n.options.commands,
    mcpCommands: n.getMcp().commands,
    mcpClients: n.getMcp().clients,
    agentId: n.agentId,
    mainLoopModel: n.options.mainLoopModel,
    permissionMode: getToolPermissionContext(n).mode,
    storageV5: n.storageV5,
  };
}
async function collectSkillUsageData(n) {
  let t = getDisusedPlugins();
  t.catch(() => {});
  let o = i3e(),
    c = o.allowed
      ? $Bn(n.storageV5).catch((e) => {
          throw new SkillDoctorStageError("scan_failed", e);
        })
      : Promise.resolve(new Map());
  c.catch(() => {});
  let { included: k } = await collectSkillCommands(n.mcpCommands, n.agentId, n.storageV5).catch(
      (e) => {
        throw new SkillDoctorStageError("skill_set_failed", e);
      },
    ),
    S = getRuntimeMainLoopModel({
      permissionMode: n.permissionMode,
      mainLoopModel: n.mainLoopModel,
    }),
    w = getSkillListingCharCounts(k, S, n.mainLoopModel),
    p = await c,
    r = [],
    l = dropShadowedFallbackSkills([...n.commands]),
    y = new Set(l.map((e) => e.name)),
    M = new Set(
      n.commands.filter((e) => isFallbackStub(e) && !y.has(e.name)).map((e) => e.name),
    ),
    m = new Map();
  for (let e of l) {
    let s = e.type === "prompt" ? e.name.lastIndexOf(":") : -1;
    if (s > 0) {
      let i = e.name.slice(s + 1);
      m.set(i, (m.get(i) ?? 0) + 1);
    }
  }
  for (let e of l) {
    if (e.type !== "prompt") continue;
    if (
      e.source === "bundled" ||
      e.source === "builtin" ||
      e.source === "policySettings"
    )
      continue;
    if (e.source === "mcp" && e.loadedFrom !== "mcp") continue;
    let s = e.name.lastIndexOf(":"),
      i = s > 0 ? e.name.slice(s + 1) : void 0,
      d = i !== void 0 && M.has(i) && m.get(i) === 1 ? i : void 0,
      f = getSkillUsageStats(e.name, d ?? e.unqualifiedName);
    r.push({
      name: e.pluginInfo ? Pp(e.name) : e.name,
      source: e.pluginInfo
        ? Pp(e.pluginInfo.pluginManifest.name)
        : e.loadedFrom === "syncedSkills"
          ? S1
          : e.source,
      owner:
        e.source === "plugin"
          ? "plugin"
          : e.source === "mcp"
            ? "mcp"
            : e.loadedFrom === "syncedSkills"
              ? "synced"
              : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: w.get(e.name) ?? null,
      weekTokens: p.get(attributionSkillName(e)) ?? (d ? p.get(d) : void 0) ?? null,
    });
  }
  r.sort((e, s) => (s.daysSinceUse ?? 1 / 0) - (e.daysSinceUse ?? 1 / 0));
  let a = r.filter((e) => e.usageCount === 0 && e.listingTokens !== null),
    h = a.filter((e) => e.owner === "settings"),
    C = a.filter((e) => e.owner === "synced"),
    b = new Set(
      r
        .filter((e) => e.usageCount > 0 && e.pluginKey !== void 0)
        .map((e) => e.pluginKey),
    ),
    T = a.filter(
      (e) =>
        e.owner === "plugin" && (e.pluginKey === void 0 || !b.has(e.pluginKey)),
    ),
    u = (e) => {
      let s = e.name.indexOf(":");
      return s > 0 ? e.name.slice(0, s) : void 0;
    },
    I = new Set(
      r
        .filter((e) => e.owner === "mcp" && e.usageCount > 0)
        .map(u)
        .filter((e) => e !== void 0),
    ),
    g = a.filter((e) => {
      if (e.owner !== "mcp") return !1;
      let s = u(e);
      return s === void 0 || !I.has(s);
    }),
    L = dedupe(g.map(u).filter((e) => e !== void 0)).map((e) =>
      Pp(n.mcpClients.find((s) => normalizeMcpName(s.name) === e)?.name ?? e),
    );
  return {
    rows: r,
    unusedOwned: h,
    unusedFromPlugins: T,
    unusedFromMcp: g,
    unusedSynced: C,
    unusedMcpServers: L,
    disusedPlugins: await t,
    weekTokensNote: o.allowed ? null : o.reason,
  };
}
export { padEndToWidth, padStartToWidth, buildSkillTableLayout, SkillDoctorStageError, buildSkillDoctorContext, collectSkillUsageData };

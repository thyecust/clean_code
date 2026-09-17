// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { VR, M0 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ms } from "./设置-配置.aqbb35ee.js";
import { getGlobalClaudeFile } from "./chunk-zqr5ctyf.js";
import { projectSettingsAliasesUserSettings, getSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { ZTe, n7n, Rgn, pC, isMcpServerAllowedByPolicy, getMcpConfigsByScope, doesEnterpriseMcpConfigExist } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { REn, JYe } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { isPluginBlockedByPolicy, areCommandPluginSourcesDisabledByPolicy, isSourceAllowedByPolicy } from "../../02-功能模块/插件系统/plugin-source-policy.js";
var a = Rgn.filter((e) => e !== "userSettings");
function shouldOfferTrustBackstop(e) {
  if (REn()) return !1;
  if (JYe()) return !0;
  return (e ?? getRepoHelperSources()).length > 0;
}
function getRepoHelperSources(e = getMarketplaceHelperSources()) {
  let r = [...e];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${getGlobalClaudeFile()} (local-scope MCP servers for this project)`);
  return r;
}
function c(e, r) {
  if (areCommandPluginSourcesDisabledByPolicy()) return !1;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return !1;
    let s = l.source;
    if (s.source === "url")
      return (
        !!s.headersHelper && /^https:\/\//i.test(s.url) && isSourceAllowedByPolicy(s) && !u(t, s.url)
      );
    if (s.source === "settings")
      return (
        isSourceAllowedByPolicy(s) &&
        !p(t) &&
        s.plugins.some(
          (n) =>
            !!n.headersHelper &&
            typeof n.source === "object" &&
            n.source.source === "archive" &&
            !isPluginBlockedByPolicy(`${n.name}@${t}`),
        )
      );
    return !1;
  });
}
function u(e, r) {
  let o = ms();
  if (
    a.some(
      (t) =>
        o.includes(t) && Object.hasOwn(getSettingsForSource(t)?.extraKnownMarketplaces ?? {}, e),
    )
  )
    return !0;
  return n7n({ source: "url", url: r }, e) !== void 0;
}
function p(e) {
  return Object.hasOwn(pC(), e);
}
function i(e) {
  if (M0() || doesEnterpriseMcpConfigExist()) return !1;
  let { servers: r } = getMcpConfigsByScope(e, { expandVars: !1 });
  return Object.entries(r).some(
    ([o, t]) =>
      "headersHelper" in t &&
      !!t.headersHelper &&
      !(e === "project" && ZTe(o) === "rejected") &&
      isMcpServerAllowedByPolicy(o, t),
  );
}
function getMarketplaceHelperSources() {
  if (VR()) return [];
  let e = ms(),
    r = e.includes("localSettings") ? getSettingsForSource("localSettings") : null,
    o = [];
  if (e.includes("projectSettings") && !projectSettingsAliasesUserSettings() && c(getSettingsForSource("projectSettings"), r))
    o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}
export { shouldOfferTrustBackstop, getRepoHelperSources, getMarketplaceHelperSources };

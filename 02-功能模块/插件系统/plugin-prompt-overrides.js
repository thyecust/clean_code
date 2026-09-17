// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { parsePluginScopedServerName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { splitPluginId, isOfficialMarketplace, isFirstPartyPlugin } from "./chunk-33bdfgmx.js";
import { s, se, c, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var f = createLazyValue(() =>
    c({
      server_instructions: s().optional(),
      server_instructions_by_server: fe(s(), s()).optional(),
      tools: fe(s(), s()).optional(),
      search_hints: fe(s(), s()).optional(),
      param_descriptions: fe(s(), fe(s(), s())).optional(),
      prompts: fe(s(), s()).optional(),
      skills: fe(s(), s()).optional(),
    }),
  ),
  l = createLazyValue(() => fe(s(), se()));
function getOfficialPluginPromptOverrides(e) {
  if (!e.pluginSource) return;
  let { name: r, marketplace: i } = splitPluginId(e.pluginSource);
  if (!isOfficialMarketplace(i) && !isFirstPartyPlugin(r, i)) return;
  let u = getFeatureValue_CACHED_MAY_BE_STALE("tengu_official_plugin_prompt_overrides", {}),
    t = l().safeParse(u);
  if (!t.success) {
    n(
      "tengu_official_plugin_prompt_overrides: GB payload is not an object; ignoring",
      { level: "error" },
    );
    return;
  }
  let a = t.data[r];
  if (a === void 0) return;
  let p = f().safeParse(a);
  if (!p.success) {
    n(
      `tengu_official_plugin_prompt_overrides: entry for '${r}' failed schema (${p.error.issues[0]?.message}); using baked-in text`,
      { level: "error" },
    );
    return;
  }
  let o = p.data;
  if (Object.keys(o).length === 0) return;
  return {
    ...o,
    server_instructions_by_server: d(o.server_instructions_by_server),
    tools: d(o.tools),
    search_hints: d(o.search_hints),
    param_descriptions: d(o.param_descriptions),
    prompts: d(o.prompts),
    skills: d(o.skills),
  };
}
function d(e) {
  if (e === void 0) return;
  let r = Object.create(null);
  return Object.assign(r, e);
}
function getOverriddenServerInstructions(e, r) {
  if (!e) return;
  let i = e.server_instructions_by_server;
  if (i) {
    let u = parsePluginScopedServerName(r),
      t = u && i[u.serverName];
    if (t !== void 0) return t;
  }
  return e.server_instructions;
}
function applyParamDescriptions(e, r) {
  if (!r || !e.properties) return e;
  let i = { ...e.properties },
    u = !1;
  for (let [t, a] of Object.entries(r)) {
    let p = i[t];
    if (p !== null && typeof p === "object")
      ((i[t] = { ...p, description: a }), (u = !0));
  }
  if (!u) return e;
  return { ...e, properties: i };
}
export { getOfficialPluginPromptOverrides, getOverriddenServerInstructions, applyParamDescriptions };

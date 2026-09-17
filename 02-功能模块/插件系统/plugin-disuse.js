// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { MC, $t } from "./chunk-7s6mt1vg.js";
import { PH } from "./chunk-hh8f1qrw.js";
import { Xf, Idn, Cmt, vmt, Odn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Ul, Bn } from "./chunk-33bdfgmx.js";
var d = 14,
  f = 10;
async function getDisusedPlugins() {
  try {
    let e = $t().pluginLoadCacheOnly;
    if (e === void 0) return [];
    if (PH() !== null) return [];
    let { enabled: s } = await e;
    if (s.length === 0) return [];
    let u = Xf(),
      l = MC(),
      g = ee().numStartups,
      c = Date.now(),
      r = [];
    for (let t of s) {
      let { marketplace: o } = Bn(t.repository);
      if (!o || Ul(o)) continue;
      if (Odn(t, u, l) !== "user-install") continue;
      if (p(t)) continue;
      let i = Cmt(t.repository);
      if (!i) continue;
      if (Idn(t.repository)) continue;
      let { sessionsSinceLastUse: m, daysSinceLastUse: a } = vmt(i, g, c);
      if (a >= d && m >= f)
        r.push({ pluginId: t.repository, name: t.name, daysSinceLastUse: a });
    }
    return (r.sort((t, o) => o.daysSinceLastUse - t.daysSinceLastUse), r);
  } catch (e) {
    return (
      n(`plugin-disuse tip: failed to compute disused plugins: ${e}`, {
        level: "error",
      }),
      []
    );
  }
}
function getPluginDaysSinceLastUse(e) {
  if (PH() !== null) return null;
  let s = Cmt(e);
  if (!s) return null;
  if (Idn(e)) return 0;
  return vmt(s, ee().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(
    e.themesPath ||
    e.themesPaths?.length ||
    e.outputStylesPath ||
    e.outputStylesPaths?.length ||
    e.monitors?.length ||
    e.workflowsPath ||
    e.workflowsPaths?.length,
  );
}
export { getDisusedPlugins, getPluginDaysSinceLastUse };

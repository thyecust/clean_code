// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getSettingsForSource, getInitialSettings } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { uD, a3t } from "../../02-功能模块/Hooks钩子/chunk-z3433nr6.js";
import { iH, Iue } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isInlineOrSyncedPluginId, normalizeLookupKey } from "../../02-功能模块/插件系统/chunk-33bdfgmx.js";
async function checkEnabledPlugins() {
  let o = getInitialSettings(),
    t = [],
    r = Iue();
  for (let [e, i] of Object.entries(r)) {
    if (iH(e)) continue;
    if (e.includes("@") && i) t.push(e);
  }
  if (o.enabledPlugins)
    for (let [e, i] of Object.entries(o.enabledPlugins)) {
      if (!e.includes("@")) continue;
      let c = iH(e) ? a3t(e) : i,
        s = t.indexOf(e);
      if (c) {
        if (s === -1) t.push(e);
      } else if (s !== -1) t.splice(s, 1);
    }
  return t;
}
function getPluginEditableScopes() {
  let o = new Map(),
    t = Iue();
  for (let [e, i] of Object.entries(t)) {
    if (!e.includes("@")) continue;
    if (iH(e)) continue;
    if (i === !0) o.set(e, "flag");
    else if (i === !1) o.delete(e);
  }
  let r = [
    { scope: "managed", source: "policySettings" },
    { scope: "user", source: "userSettings" },
    { scope: "project", source: "projectSettings" },
    { scope: "local", source: "localSettings" },
    { scope: "flag", source: "flagSettings" },
  ];
  for (let { scope: e, source: i } of r) {
    let c = getSettingsForSource(i);
    if (!c?.enabledPlugins) continue;
    for (let [s, u] of Object.entries(c.enabledPlugins)) {
      if (!s.includes("@")) continue;
      if (s in t && t[s] !== u)
        n(`Plugin ${s} from --add-dir (${t[s]}) overridden by ${i} (${u})`);
      if (!uD.includes(i) && iH(s)) continue;
      if (u === !0) o.set(s, e);
      else if (u === !1) o.delete(s);
    }
  }
  return (
    n(
      `Found ${o.size} enabled plugins with scopes: ${Array.from(o.entries())
        .map(([e, i]) => `${e}(${i})`)
        .join(", ")}`,
    ),
    o
  );
}
function editableScopeOf(o, t) {
  let r = o.get(t);
  if (r !== void 0 || !isInlineOrSyncedPluginId(t)) return r;
  let e = normalizeLookupKey(t);
  for (let [i, c] of o) if (normalizeLookupKey(i) === e) return c;
  return;
}
export { checkEnabledPlugins, getPluginEditableScopes, editableScopeOf };

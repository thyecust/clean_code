// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 206 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { bd } from "./chunk-hh8f1qrw.js";
import { hMe, c$, Ql, CE, Cf, nD, A5e, _H } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getPluginEditableScopes } from "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
import { isSkillDoctorEnabled } from "../../01-核心基础设施/设置-配置/early-access-feature-gates.js";
var p = [
    {
      value: "--enabled",
      description: "Only show enabled plugins",
      isFinal: !0,
    },
    {
      value: "--disabled",
      description: "Only show disabled plugins",
      isFinal: !0,
    },
  ],
  m = [
    { value: "add", description: "Add a marketplace from a URL or path" },
    { value: "remove", description: "Remove a known marketplace" },
    { value: "update", description: "Refresh a marketplace from its source" },
    { value: "list", description: "List known marketplaces", isFinal: !0 },
  ];
async function getPluginArgumentCompletions(a, n, r) {
  if (a.length === 0) {
    let s = [
      { value: "list", description: "List installed plugins", isFinal: !0 },
      { value: "enable", description: "Enable an installed plugin" },
      { value: "disable", description: "Disable an installed plugin" },
      { value: "install", description: "Install a plugin from a marketplace" },
      { value: "uninstall", description: "Remove an installed plugin" },
      { value: "marketplace", description: "Manage plugin marketplaces" },
      ...(isSkillDoctorEnabled()
        ? [
            {
              value: "stats",
              description: "Show skill usage and context costs",
              isFinal: !0,
            },
          ]
        : []),
    ];
    return c(s, n);
  }
  let l = a[0]?.toLowerCase();
  if (a.length === 1)
    switch (l) {
      case "enable":
      case "disable":
      case "uninstall": {
        let s = Cf(),
          i = Object.entries(s.plugins).filter(([, t]) => t.some(nD));
        if (l === "enable" || l === "disable") {
          let t = getPluginEditableScopes(),
            o = l === "disable";
          i = i.filter(([u]) => t.has(u) === o);
        }
        let e = i
          .map(([t, o]) => {
            let u = (o.find(nD) ?? o[0])?.version;
            return { value: t, description: A5e(u), isFinal: !0 };
          })
          .sort((t, o) => t.value.localeCompare(o.value));
        return c(e, n);
      }
      case "install":
      case "i": {
        if (n.includes("/") || n.includes("\\")) return [];
        return c(await f(g.of(B().host), r), n);
      }
      case "list":
      case "ls":
        return c(p, n);
      case "marketplace":
      case "market":
        return c(m, n);
      default:
        return [];
    }
  if (a.length === 2 && (l === "marketplace" || l === "market")) {
    let s = a[1]?.toLowerCase();
    if (s === "remove" || s === "rm" || s === "update") {
      let i = await Ql(r),
        e = Object.entries(i)
          .map(([t, o]) => ({
            value: t,
            description: hMe(o.source),
            isFinal: !0,
          }))
          .sort((t, o) => t.value.localeCompare(o.value));
      return c(e, n);
    }
  }
  return [];
}
class d {
  key = null;
  candidates = [];
  get(a) {
    return this.key === a ? this.candidates : void 0;
  }
  store(a, n) {
    ((this.key = a), (this.candidates = n));
  }
}
var g = new j(() => new d());
async function f(a, n) {
  let r = await Ql(n),
    l = Object.keys(r).sort(),
    s = b(l.map((e) => [e, r[e]?.installLocation, r[e]?.lastUpdated])),
    i = a.get(s);
  if (i === void 0) {
    let e = await Promise.all(
      l.map(async (t) => ({ name: t, marketplace: await CE(t, n) })),
    );
    i = [];
    for (let { name: t, marketplace: o } of e) {
      if (!o) continue;
      for (let u of o.plugins)
        i.push({ pluginId: c$(u.name, t), description: u.description });
    }
    (i.sort((t, o) => t.pluginId.localeCompare(o.pluginId)), a.store(s, i));
  }
  return i
    .filter((e) => !_H(e.pluginId) && !bd(e.pluginId))
    .map((e) => ({
      value: e.pluginId,
      description: e.description,
      isFinal: !0,
    }));
}
function c(a, n) {
  if (!n) return a;
  let r = n.toLowerCase(),
    l = [],
    s = [];
  for (let i of a) {
    let e = i.value.toLowerCase();
    if (e.startsWith(r)) l.push(i);
    else if (e.includes(r)) s.push(i);
  }
  return l.concat(s);
}
export { getPluginArgumentCompletions };

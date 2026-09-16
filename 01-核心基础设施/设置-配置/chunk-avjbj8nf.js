// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { VR, M0 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ms } from "./设置-配置.aqbb35ee.js";
import { Pi } from "./chunk-zqr5ctyf.js";
import { zT, ye } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { ZTe, n7n, Rgn, pC, uj, nd, Zm } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { REn, JYe } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { bd, JS, Hc } from "../../02-功能模块/插件系统/chunk-hh8f1qrw.js";
var a = Rgn.filter((e) => e !== "userSettings");
function Nae(e) {
  if (REn()) return !1;
  if (JYe()) return !0;
  return (e ?? x0t()).length > 0;
}
function x0t(e = H0t()) {
  let r = [...e];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${Pi()} (local-scope MCP servers for this project)`);
  return r;
}
function c(e, r) {
  if (JS()) return !1;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return !1;
    let s = l.source;
    if (s.source === "url")
      return (
        !!s.headersHelper && /^https:\/\//i.test(s.url) && Hc(s) && !u(t, s.url)
      );
    if (s.source === "settings")
      return (
        Hc(s) &&
        !p(t) &&
        s.plugins.some(
          (n) =>
            !!n.headersHelper &&
            typeof n.source === "object" &&
            n.source.source === "archive" &&
            !bd(`${n.name}@${t}`),
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
        o.includes(t) && Object.hasOwn(ye(t)?.extraKnownMarketplaces ?? {}, e),
    )
  )
    return !0;
  return n7n({ source: "url", url: r }, e) !== void 0;
}
function p(e) {
  return Object.hasOwn(pC(), e);
}
function i(e) {
  if (M0() || Zm()) return !1;
  let { servers: r } = nd(e, { expandVars: !1 });
  return Object.entries(r).some(
    ([o, t]) =>
      "headersHelper" in t &&
      !!t.headersHelper &&
      !(e === "project" && ZTe(o) === "rejected") &&
      uj(o, t),
  );
}
function H0t() {
  if (VR()) return [];
  let e = ms(),
    r = e.includes("localSettings") ? ye("localSettings") : null,
    o = [];
  if (e.includes("projectSettings") && !zT() && c(ye("projectSettings"), r))
    o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}
export { Nae, x0t, H0t };

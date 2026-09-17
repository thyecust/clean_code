// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ec, KR } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, po } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { tq, FD, H, ql } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { tl } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getHostManagedToolSearchEnv as Rxn, getAdminTierEnvValue as vBe } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { er, getAPIProvider as Pe, isFirstPartyAnthropicBaseUrl as fo } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { Ol } from "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
function s$e(e, r) {
  let t = /^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e),
    i = t?.[1],
    l = t?.[2];
  if (!i || !l) return !1;
  let o = r.find(([s]) => s === i)?.[1];
  if (!o) return !1;
  let c = l.split("-").map(Number);
  for (let s = 0; s < Math.max(c.length, o.length); s++) {
    let f = (c[s] ?? 0) - (o[s] ?? 0);
    if (f !== 0) return f > 0;
  }
  return !0;
}
var d = "force";
function u() {
  try {
    if (FD()) return !1;
    if (Pe() !== "firstParty") return !1;
    let e = vBe("ENABLE_TOOL_SEARCH");
    if (e === d) return !0;
    if (Rxn() !== d) return !1;
    if (Ie(vBe("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS"))) return !1;
    return e === void 0 || !p(e);
  } catch (e) {
    return (
      n(`isToolSearchForceOverride: settings read failed: ${e}`, {
        level: "error",
      }),
      !1
    );
  }
}
function p(e) {
  if (e.startsWith("auto:")) {
    let r = tl(e.slice(5));
    return !isNaN(r) && r >= 100;
  }
  return po(e);
}
function pJe() {
  return tq() && !u();
}
function MEn(e) {
  if (!e.startsWith("auto:")) return null;
  let r = e.slice(5),
    t = tl(r);
  if (isNaN(t))
    return (
      n(
        `Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`,
      ),
      null
    );
  return Math.max(0, Math.min(100, t));
}
function m(e) {
  if (!e) return !1;
  return e === "auto" || e.startsWith("auto:");
}
function fJe() {
  if (pJe()) return "standard";
  if (u()) return "tst";
  let e = process.env.ENABLE_TOOL_SEARCH,
    r = e ? MEn(e) : null;
  if (r === 0) return "tst";
  if (r === 100) return "standard";
  if (m(e)) return "tst-auto";
  if (Ie(e)) return "tst";
  if (po(e)) return "standard";
  return "tst";
}
var E = ["claude-3-5-haiku", "claude-3-haiku"],
  _ = [
    ["opus", [4, 5]],
    ["sonnet", [4, 5]],
    ["haiku", [4, 5]],
  ];
function Zj(e) {
  if (Pe() !== "vertex") return !1;
  let r = er(e).replace(/[@-]\d{8}$/, "");
  if (/^claude-3(-|$)/.test(r)) return !0;
  return /^claude-(opus|sonnet|haiku)-\d/.test(r) && !s$e(r, _);
}
function g() {
  try {
    let e = H("tengu_tool_search_unsupported_models", null);
    if (Array.isArray(e)) return e;
  } catch {}
  return E;
}
var h = [];
function A(e) {
  if (e === null || Array.isArray(e) || typeof e !== "object") return e;
  let r = e,
    t = Ec(),
    i = t !== void 0 ? t : KR();
  if (typeof i === "string") {
    let l = i.toLowerCase();
    for (let o of Object.keys(r))
      if (o !== "*" && o.length > 0 && l.includes(o.toLowerCase())) return r[o];
  }
  return r["*"];
}
function Qtr() {
  let e = new Set();
  try {
    let r = A(H("tengu_non_deferrable_builtins", null));
    if (Array.isArray(r)) {
      for (let t of r) if (typeof t === "string") e.add(t);
    }
  } catch {}
  try {
    let r = ql()?.non_deferrable_builtins;
    if (Array.isArray(r)) {
      for (let t of r) if (typeof t === "string") e.add(t);
    }
  } catch {}
  if (e.size === 0) return h;
  return [...e];
}
function e6(e) {
  let r = e.toLowerCase(),
    t = g();
  for (let i of t) if (r.includes(i.toLowerCase())) return !1;
  return !0;
}
function Z_() {
  let e = fJe();
  if (e === "standard") {
    if (Ol().claim("tool_search_optimistic_decision"))
      n(
        `[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=false`,
      );
    return !1;
  }
  if (!a.ENABLE_TOOL_SEARCH && !u() && Pe() === "firstParty" && !fo()) {
    if (Ol().claim("tool_search_optimistic_decision"))
      n(
        `[ToolSearch:optimistic] disabled: ANTHROPIC_BASE_URL=${a.ANTHROPIC_BASE_URL} is not a first-party Anthropic host. Set ENABLE_TOOL_SEARCH=true (or auto / auto:N) if your proxy forwards tool_reference blocks.`,
      );
    return !1;
  }
  if (Ol().claim("tool_search_optimistic_decision"))
    n(
      `[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=true`,
    );
  return !0;
}
function TEt() {
  return H("tengu_surface_failed_mcp_servers", !0);
}
export { pJe, s$e, MEn, fJe, Zj, Qtr, e6, Z_, TEt };

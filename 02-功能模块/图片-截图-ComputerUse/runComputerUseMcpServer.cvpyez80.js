// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 84 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ListToolsRequestSchema as C0 } from "../MCP客户端/chunk-tv3jbp8f.js";
import "../MCP客户端/chunk-98spw152.js";
import "../MCP客户端/chunk-j8556pzt.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { w5, NR, EP, x5 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { zR, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _F } from "../../01-核心基础设施/共享小工具-未细化/chunk-hxq0hkxe.js";
import { Iv } from "../../01-核心基础设施/共享小工具-未细化/chunk-bfth4n1b.js";
import { SGe } from "../../01-核心基础设施/设置-配置/chunk-6rz5fqzm.js";
import { HH, mK } from "./chunk-bvxymt09.js";
import "./chunk-w5bhde2m.js";
import { X2n, put } from "./chunk-v76f8dbx.js";
import { WSe } from "./chunk-6842b6x1.js";
import { GSe } from "../../01-核心基础设施/共享小工具-未细化/chunk-4p4f6hsz.js";
import { che } from "../../01-核心基础设施/共享小工具-未细化/chunk-36nx9gcx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c0wtcn4y.js";
import "./chunk-jeefwg1w.js";
import { homedir as N } from "os";
var u = ["/Applications/", "/System/Applications/"],
  f = [
    /Helper(?:$|\s\()/,
    /Agent(?:$|\s\()/,
    /Service(?:$|\s\()/,
    /Uninstaller(?:$|\s\()/,
    /Updater(?:$|\s\()/,
    /^\./,
  ],
  g = new Set([
    "com.apple.Safari",
    "com.google.Chrome",
    "com.microsoft.edgemac",
    "org.mozilla.firefox",
    "company.thebrowser.Browser",
    "com.tinyspeck.slackmacgap",
    "us.zoom.xos",
    "com.microsoft.teams2",
    "com.microsoft.teams",
    "com.apple.MobileSMS",
    "com.apple.mail",
    "com.microsoft.Word",
    "com.microsoft.Excel",
    "com.microsoft.Powerpoint",
    "com.microsoft.Outlook",
    "com.apple.iWork.Pages",
    "com.apple.iWork.Numbers",
    "com.apple.iWork.Keynote",
    "com.google.GoogleDocs",
    "notion.id",
    "com.apple.Notes",
    "md.obsidian",
    "com.linear",
    "com.figma.Desktop",
    "com.microsoft.VSCode",
    "com.apple.Terminal",
    "com.googlecode.iterm2",
    "com.github.GitHubDesktop",
    "com.apple.finder",
    "com.apple.iCal",
    "com.apple.systempreferences",
  ]),
  A = /^[\p{L}\p{M}\p{N}_ .&'()+-]+$/u;
function y(t, e) {
  if (u.some((o) => t.startsWith(o))) return !0;
  if (e) {
    let o = e.endsWith("/") ? `${e}Applications/` : `${e}/Applications/`;
    if (t.startsWith(o)) return !0;
  }
  return !1;
}
function P(t) {
  return f.some((e) => e.test(t));
}
function c(t, e) {
  let o = new Set();
  return t
    .map((r) => r.trim())
    .filter((r) => {
      if (!r) return !1;
      if (r.length > 40) return !1;
      if (e && !A.test(r)) return !1;
      if (o.has(r)) return !1;
      return (o.add(r), !0);
    })
    .sort((r, s) => r.localeCompare(s));
}
function S(t) {
  let e = c(t, !0);
  if (e.length <= 50) return e;
  return [...e.slice(0, 50), `\u2026 and ${e.length - 50} more`];
}
function C(t) {
  return c(t, !1);
}
function l(t, e) {
  let { alwaysKept: o, rest: r } = t.reduce(
      (i, a) => {
        if (g.has(a.bundleId)) i.alwaysKept.push(a.displayName);
        else if (y(a.path, e) && !P(a.displayName)) i.rest.push(a.displayName);
        return i;
      },
      { alwaysKept: [], rest: [] },
    ),
    s = C(o),
    p = new Set(s);
  return [...s, ...S(r).filter((i) => !p.has(i))];
}
var m = 1000;
async function _() {
  try {
    let t = HH(),
      { apps: e } = await mK(() => t.apps.listInstalled(), m),
      o = l(e, N());
    if (!o.includes("Finder")) o.unshift("Finder");
    return o;
  } catch {
    n(
      `[Computer Use MCP] app enumeration exceeded ${m}ms or failed; tool description omits list`,
    );
    return;
  }
}
async function h() {
  let t = put(),
    e = GSe(),
    o = X2n(t, e),
    r = await _(),
    s = WSe(t.executor.capabilities, e, r);
  return (
    o.setRequestHandler(C0, async () =>
      t.isDisabled() ? { tools: [] } : { tools: s },
    ),
    o
  );
}
async function H(t) {
  let e = await SGe(t);
  if (e)
    process.stderr.write(`${e}
`);
  _F();
  let o = Iv(t);
  if (M() && o !== void 0) {
    (zR({ storageV5: o }), NR(o));
    let [{ credentialsStoreFor: a }, { primeFastPathCredentials: d }] =
      await Promise.all([
        import("../../01-核心基础设施/共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
        import("../../01-核心基础设施/共享小工具-未细化/primeFastPathCredentials.eb5w3wem.js"),
      ]);
    (await d(a(o)), await EP(o));
  }
  let r = await h(),
    s = new che(),
    p = !1,
    i = async () => {
      if (p) return;
      ((p = !0), await Promise.all([w5(), x5()]), process.exit(0));
    };
  (process.stdin.on("end", () => void i()),
    process.stdin.on("error", () => void i()),
    n("[Computer Use MCP] Starting MCP server"),
    await r.connect(s),
    n("[Computer Use MCP] MCP server started"));
}
export { h as createComputerUseMcpServerForCli, H as runComputerUseMcpServer };

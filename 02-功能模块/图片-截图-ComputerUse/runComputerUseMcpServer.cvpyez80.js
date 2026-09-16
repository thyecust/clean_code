// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { C0 } from "../MCP客户端/chunk-tv3jbp8f.js";
import "../MCP客户端/chunk-98spw152.js";
import "../MCP客户端/chunk-j8556pzt.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { w5, NR, EP, x5 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { zR, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "./chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import { _F } from "../../01-核心基础设施/共享小工具-未细化/chunk-hxq0hkxe.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ss8pwgq.js";
import { Iv } from "../../01-核心基础设施/共享小工具-未细化/chunk-bfth4n1b.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-01r8gcpb.js";
import { SGe } from "../../01-核心基础设施/设置-配置/chunk-6rz5fqzm.js";
import { HH, mK } from "./chunk-bvxymt09.js";
import "./chunk-w5bhde2m.js";
import { X2n, put } from "./chunk-v76f8dbx.js";
import { WSe } from "./chunk-6842b6x1.js";
import { GSe } from "../../01-核心基础设施/共享小工具-未细化/chunk-4p4f6hsz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import { che } from "../../01-核心基础设施/共享小工具-未细化/chunk-36nx9gcx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c0wtcn4y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "./chunk-6kdvf977.js";
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

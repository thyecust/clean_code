// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { Tie } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import { ce } from "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { vk, DX, sVn, ajt, tfn, MX } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import { Je } from "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../Teammates团队/chunk-t899nada.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import "../MCP客户端/chunk-0mwqsv0r.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/chunk-5kyac4wk.js";
import "../MCP客户端/chunk-tznd4407.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k1vb7vky.js";
import "../工具Monitor/chunk-kxk3njnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "../Teammates团队/chunk-eey53z5b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-px58ry6q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
import "../工具ToolSearch/chunk-1m51pqtd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../权限系统/chunk-pcxn6gwz.js";
import { Ke } from "../../01-核心基础设施/共享小工具-未细化/chunk-fcskxvsh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { au } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var N = {};
au(N, { call: () => ho, default: () => N, outputJsonSchemaOf: () => D });
import { mkdir as yo, realpath as xo } from "fs/promises";
import { relative as L, resolve as E } from "path";
var P = ".claude/types";
var f = "claude-code-mcp.d.ts";
var d = (o) => ({ type: "text", level: "error", value: o });
import { resolve as z } from "path";
async function M(o, e, r) {
  let t = z(o, e),
    a = (s) => new Je(`${t}: ${s}`);
  try {
    await ajt(t, a);
    let s = await sVn(t);
    try {
      (await tfn(s, t, { realRoot: o, refused: a }),
        await s.truncate(0),
        await s.writeFile(r, "utf8"));
    } finally {
      await s.close();
    }
  } catch (s) {
    if (A(s) === "ELOOP")
      return d(`Did not write ${e}: ${t} is a symbolic link.`);
    throw s;
  }
  return;
}
var S = (o) => o.replace(/\s+/g, " ").trim().replace(/\*\//g, "* /");
function O(o, e) {
  let { description: r } = o,
    a = typeof r === "string" ? S(r) : "";
  return a === ""
    ? ""
    : `${e}/** ${a} */
`;
}
var _ = /^[A-Za-z_$][\w$]*$/;
var k = (o) => (_.test(o) ? o : b(o));
function F(o) {
  return typeof o === "string" ||
    typeof o === "number" ||
    typeof o === "boolean" ||
    o === null
    ? b(o)
    : "unknown";
}
var eo = 32;
function m(o, e = "", r = 0) {
  if (o === !0 || r > eo) return "unknown";
  if (o === !1) return "never";
  if (!me(o)) return "unknown";
  if ("const" in o) return F(o.const);
  if (Array.isArray(o.enum)) return o.enum.map(F).join(" | ") || "never";
  if (Array.isArray(o.anyOf) || Array.isArray(o.oneOf)) {
    let t = (o.anyOf ?? o.oneOf).map((a) => m(a, e, r + 1));
    return t.length === 0 ? "unknown" : Y(t).join(" | ");
  }
  if (Array.isArray(o.allOf)) {
    let t = o.allOf.map((s) => m(s, e, r + 1));
    return t.length === 0
      ? "unknown"
      : t.map((s) => (s.includes(" | ") ? `(${s})` : s)).join(" & ");
  }
  if (Array.isArray(o.type))
    return (
      Y(o.type.map((t) => m({ ...o, type: t }, e, r + 1))).join(" | ") ||
      "unknown"
    );
  switch (o.type) {
    case "string":
      return "string";
    case "number":
    case "integer":
      return "number";
    case "boolean":
      return "boolean";
    case "null":
      return "null";
    case "array": {
      if (Array.isArray(o.items))
        return `[${o.items.map((s) => m(s, e, r + 1)).join(", ")}]`;
      let t = m(o.items, e, r + 1);
      return t.includes(" | ") || t.includes(" & ") || t.includes("/*")
        ? `Array<${t}>`
        : `${t}[]`;
    }
    case "object":
    case void 0: {
      if (!me(o.properties)) {
        let l = o.type === "object",
          p = "$ref" in o;
        return l
          ? "{}"
          : p
            ? `unknown /* $ref ${S(String(o.$ref))} */`
            : "unknown";
      }
      let t = new Set(Array.isArray(o.required) ? o.required.map(String) : []),
        a = `${e}  `,
        s = Object.entries(o.properties).map(([l, p]) => {
          let h = me(p) ? O(p, a) : "",
            I = t.has(l) ? "" : "?",
            T = m(p, a, r + 1);
          return `${h}${a}${k(l)}${I}: ${T}`;
        });
      return s.length === 0
        ? "{}"
        : `{
${s.join(`
`)}
${e}}`;
    }
    default:
      return "unknown";
  }
}
var u = (o, e, r = (t) => m(t.inputSchema, "    ")) => [
  "declare module 'claude-code' {",
  `  interface ${o} {`,
  ...[...e]
    .sort((t, a) => t.name.localeCompare(a.name))
    .map((t) => {
      let s =
          t.description === void 0
            ? ""
            : O({ description: t.description }, "    "),
        c = k(t.name);
      return `${s}    ${c}: ${r(t)}`;
    }),
  "  }",
  "}",
];
var so = (o) =>
  [
    "// The inputs of the built-in tools this build has, from each tool's",
    "// input schema. Merges into ToolCallInput (BuiltinToolInputs) so",
    '// `e.tool === "Bash"` narrows to the tool\'s arguments.',
    ...u("BuiltinToolInputs", o),
    "",
    "// The structured results of the same tools, from each tool's output",
    "// schema. Merges into ToolCallResult (BuiltinToolResults) so after",
    '// `e.tool === "Bash"` the `result` of `next(e)` is the tool\'s record.',
    ...u("BuiltinToolResults", o, (e) =>
      e.outputSchema !== void 0 ? m(e.outputSchema, "    ") : "unknown",
    ),
    "",
  ].join(`
`);
var io = (o) =>
  [
    "// The inputs of the MCP tools this session had, from each server's tools/list",
    "// inputSchema; written by `/plugin-types` (src/plugins/functionHooks/mcp-tool-types/mcp-tool-declarations.ts).",
    "// Merges into the engine's ToolCallInput (types/ McpToolInputs) so",
    '// `e.tool === "mcp__<server>__<tool>"` narrows to the tool\'s arguments.',
    "// Regenerate rather than edit.",
    "export {}",
    ...u("McpToolInputs", o),
    "",
  ].join(`
`);
function po(o) {
  let e = [];
  for (let r of o) {
    if (!r.name.startsWith("mcp__")) continue;
    if (r.inputJSONSchema === void 0) {
      n(`plugin-types: ${r.name} has no inputJSONSchema; skipped`);
      continue;
    }
    e.push({
      name: r.name,
      inputSchema: r.inputJSONSchema,
      ...(r.description !== void 0 && { description: r.description }),
    });
  }
  return e;
}
var y = "claude-code.d.ts";
var H = "./claude-code.d.ts-4adb7067.txt.zst";
var U = Ke(H, import.meta.dirname);
var G = U;
var uo = (o, e) =>
  `// Written by Claude Code ${o}.
${G}
` + so(e);
function D(o) {
  try {
    return Tie(o, { unrepresentable: "any" });
  } catch (e) {
    n(`plugin-types: an output schema did not convert: ${e}`);
    return;
  }
}
var ho = async (o, e) => {
  let r = Q(),
    t = E(r, o.trim() || P),
    a = ce(e),
    s = po(
      await Promise.all(
        e
          .getMcp()
          .tools.filter((i) => i.isMcp === !0)
          .map(async (i) => ({
            name: i.name,
            inputJSONSchema: i.inputJSONSchema,
            description: await i.description(
              {},
              {
                isNonInteractiveSession: e.options.isNonInteractiveSession,
                toolPermissionContext: a,
                tools: e.options.tools,
              },
            ),
          })),
      ),
    ),
    c = e.options.tools
      .filter((i) => i.isMcp !== !0)
      .map((i) => ({
        name: i.name,
        inputSchema: i.inputJSONSchema ?? MX(i.inputSchema),
        ...(i.outputSchema !== void 0 && { outputSchema: D(i.outputSchema) }),
      })),
    l = new Set(s.map((i) => i.name.split("__")[1] ?? i.name)),
    p = await DX(t),
    h = await xo(r).catch(() => r);
  if (!vk(L(r, t)) && vk(L(h, p)))
    return d(
      `Did not write ${y} or ${f}: ${t} resolves outside the project (${p}).`,
    );
  await yo(p, { recursive: !0 });
  let T = [
    {
      name: y,
      text: uo(
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
        c,
      ),
    },
    { name: f, text: io(s) },
  ];
  for (let i of T) {
    let w = await M(p, i.name, i.text);
    if (w !== void 0) return w;
  }
  let v = E(p, y),
    C = E(p, f),
    Z =
      s.length === 0
        ? `Wrote ${C}: no MCP tools are connected, so it is empty (every mcp__* tool stays loosely typed).`
        : `Wrote ${C}: ${s.length} MCP ${x(s.length, "tool")} from ${l.size} ${x(l.size, "server")}.`;
  return {
    type: "text",
    value: [
      `Wrote ${v}: the plugin API (module 'claude-code', early access: it may change between releases) and ${c.length} built-in ${x(c.length, "tool")}.`,
      Z,
      `Point the plugin's tsconfig.json (or jsconfig.json) at them: "include": ["${L(r, p) || "."}", "hooks"] with "lib": ["es2023"] and "jsx": "react", "jsxFactory": "h"; the header of ${y} has the whole file. Then \`import type { Register } from "claude-code"\` types register(on, options), and e narrows per tool.`,
    ].join(`
`),
  };
};
export { ho as call, N as default, D as outputJsonSchemaOf };

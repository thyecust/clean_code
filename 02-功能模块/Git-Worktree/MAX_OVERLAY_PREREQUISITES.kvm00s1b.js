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
import { kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "./chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "./chunk-bk9696gx.js";
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
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import {
  Ds,
  Ct,
  vLe,
  UX,
  YVn,
  r$,
  Jm,
  T3,
  WTe,
  GTe,
  eKn,
  xl,
  OV,
  xk,
  tKn,
  o$,
  Hk,
  AKe,
  CKe,
  nKn,
  rKn,
  oKn,
  sKn,
  iKn,
  TE,
  Lne,
  pH,
  nn,
  vKn,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import { pI, a3n, l3n, SO, uk } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-x4qgycdj.js";
import "../文件同步-Sync/chunk-ht8ydg1v.js";
import { E3n, JA, Jbe } from "../../01-核心基础设施/共享小工具-未细化/chunk-37w8v4sh.js";
import "./chunk-7jshw9s9.js";
import { Xbe } from "./chunk-v967hawf.js";
import { EFt } from "../文件同步-Sync/chunk-tqwnv5vj.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../Teammates团队/chunk-t899nada.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import { U9n } from "../云会话-Teleport/chunk-8scrd4ba.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ca2zxbyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { G, Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var Ue =
    /^:([0-7]{6}) ([0-7]{6}) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([A-Z])[0-9]*$/,
  ze = /^0{40}(?:0{24})?$/,
  D = {
    GIT_ALLOW_PROTOCOL: "none",
    GIT_GLOB_PATHSPECS: "",
    GIT_GRAFT_FILE: "/dev/null",
    GIT_ICASE_PATHSPECS: "",
    GIT_LITERAL_PATHSPECS: "",
    GIT_NOGLOB_PATHSPECS: "",
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
  },
  v = ["--no-optional-locks", "-c", "advice.graftFileDeprecated=false"];
function ge(e) {
  return [
    "diff-index",
    "-z",
    "--no-renames",
    "--ignore-submodules=all",
    e,
    "--",
  ];
}
function ye(e) {
  let t = e.split("\x00");
  if (t.length % 2 !== 1 || t.at(-1) !== "") return null;
  let r = Array.from({ length: (t.length - 1) / 2 }, (i, o) => {
    let s = Ue.exec(t[2 * o] ?? ""),
      u = t[2 * o + 1];
    if (s === null || u === void 0 || u === "") return null;
    let [, f = "", g = "", c = "", y = "", w = ""] = s;
    return {
      path: u,
      status: w,
      oldMode: f,
      newMode: g,
      oldId: c,
      newId: ze.test(y) ? null : y,
    };
  });
  return r.includes(null) ? null : r.filter((i) => i !== null);
}
function ke(e) {
  let t = {
    nul: 0,
    lonecr: 0,
    lonelf: 0,
    crlf: 0,
    printable: 0,
    nonprintable: 0,
  };
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (i === 13)
      if (r + 1 < e.length && e[r + 1] === 10) (t.crlf++, r++);
      else t.lonecr++;
    else if (i === 10) t.lonelf++;
    else if (i === 127) t.nonprintable++;
    else if (i < 32)
      if (i === 8 || i === 9 || i === 27 || i === 12) t.printable++;
      else ((t.nul += i === 0 ? 1 : 0), t.nonprintable++);
    else t.printable++;
  }
  if (e.at(-1) === 26) t.nonprintable--;
  return t;
}
function $e(e) {
  return e.lonecr > 0 || e.nul > 0 || e.printable >> 7 < e.nonprintable;
}
function we(e) {
  switch (e) {
    case "set":
    case "input":
      return "text";
    case "unset":
      return "binary";
    case "auto":
      return "auto";
    default:
      return null;
  }
}
function je(e, t) {
  let r = we(e.text) ?? we(e.crlf);
  if (r === "binary" || r === "auto") return r;
  if (r === "text" || e.eol === "lf" || e.eol === "crlf") return "text";
  return t === "true" || t === "input" ? "auto" : "binary";
}
function be(e, t, r) {
  if (r.crlf === 0) return !1;
  let i = je(e, t);
  return i === "text" || (i === "auto" && !$e(r));
}
function _e(e) {
  if (e === null) return null;
  let t = e.trim().toLowerCase();
  if (t === "input") return "input";
  if (["true", "yes", "on"].includes(t) || /^-?[1-9]\d*$/.test(t))
    return "true";
  if (["false", "no", "off", "0", ""].includes(t)) return "false";
  return null;
}
function Se(e) {
  let t = e.split("\x00");
  if (t.length % 3 !== 1 || t.at(-1) !== "") return null;
  let r = new Map();
  for (let i = 0; i + 2 < t.length; i += 3) {
    let [o, s, u] = [t[i], t[i + 1], t[i + 2]];
    r.set(o, { ...r.get(o), [s]: u });
  }
  return r;
}
function Ae(e) {
  return {
    text: e?.text ?? "unspecified",
    crlf: e?.crlf ?? "unspecified",
    eol: e?.eol ?? "unspecified",
  };
}
function z(e) {
  let t = e?.filter;
  return t !== void 0 && t !== "unspecified" && t !== "unset";
}
import { lstat as ee, readdir as Ve, readlink as We } from "fs/promises";
import { join as K } from "path";
var J = 8,
  W = "120000",
  Q = new Set(["100644", "100755"]),
  Re = "000000";
async function Ke(e, t, r, i) {
  try {
    for (let s of te(t)) if (!(await r(s))) return "gone";
    if (!(await ee(K(e, t))).isFile()) return "other";
    return (await qe(i, t)) ? "file" : "gone";
  } catch (o) {
    let s = A(o);
    return s === "ENOENT" || s === "ENOTDIR" ? "gone" : "unreadable";
  }
}
function Ye(e) {
  let t = new Map();
  return (r) => {
    let i = t.get(r);
    if (i !== void 0) return i;
    let o = Ve(r === "" ? e : K(e, r)).then(
      (s) => new Set(s.map((u) => u.normalize("NFC"))),
    );
    return (t.set(r, o), o);
  };
}
async function qe(e, t) {
  let r = t.lastIndexOf("/");
  return (await e(r < 0 ? "" : t.slice(0, r))).has(
    t.slice(r + 1).normalize("NFC"),
  );
}
async function ve(e, t, r) {
  let i = De(e),
    o = Ye(e),
    s = Ds(
      J,
      async (f) => (r?.throwIfAborted(), [f.path, await Ke(e, f.path, i, o)]),
    ),
    u = await Hk(
      t.filter((f) => f.status === "D" && f.oldMode !== W).map(s),
      r,
    );
  return u === null ? null : new Map(u);
}
function ie(e, t, r) {
  return {
    path: e.path,
    base: e.oldId,
    foldStats: Je(t, r) === e.oldId ? ke(t) : null,
  };
}
function te(e) {
  let t = e.split("/").slice(0, -1);
  return t.map((r, i) => t.slice(0, i + 1).join("/"));
}
function De(e) {
  let t = new Map();
  return (r) => {
    let i = t.get(r);
    if (i !== void 0) return i;
    let o = ee(K(e, r)).then((s) => s.isDirectory());
    return (t.set(r, o), o);
  };
}
async function Me(e, t, r, i) {
  if (r.length === 0) return new Set();
  let o = new Set();
  for (let s of re(r, ne)) {
    let u = await xl(
      e,
      [
        ...v,
        "--literal-pathspecs",
        "ls-tree",
        "-z",
        "--full-tree",
        t,
        "--",
        ...s,
      ],
      i,
      void 0,
      D,
    );
    if (u.code !== 0) return null;
    vKn(u.stdout).forEach((f) => o.add(f.path));
  }
  return o;
}
async function Ce(e, t, r) {
  if (t.length === 0) return new Set();
  let i = new Map(t.map((f) => [`./${f}`, f])),
    o = await xl(
      e,
      [...v, "check-ignore", "-z", "--stdin", "--no-index"],
      r,
      void 0,
      D,
      [...i.keys()].map((f) => `${f}\x00`).join(""),
    );
  if (o.exitCode === 1) return new Set();
  if (o.code !== 0) return null;
  let s = o.stdout.split("\x00").filter((f) => f !== ""),
    u = s.flatMap((f) => {
      let g = i.get(f);
      return g === void 0 ? [] : [g];
    });
  return u.length === s.length ? new Set(u) : null;
}
function Je(e, t) {
  if (
    !e.includes(`\r
`)
  )
    return null;
  let r = Buffer.allocUnsafe(e.length),
    i = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s !== 13 || e[o + 1] !== 10) r[i++] = s;
  }
  return JA(r.subarray(0, i), t);
}
async function ae(e, t, r) {
  let i = await Ee(
    e,
    t.flatMap((o) =>
      o.kind === "row" && o.checkin !== null ? [o.checkin] : [],
    ),
    r,
  );
  if (i === null) return null;
  return t.map((o) =>
    o.kind === "row" && i.has(o.row.path)
      ? { kind: "unchanged", path: o.row.path, resurfaced: o.resurfaced }
      : o,
  );
}
var Xe = ["text", "crlf", "eol", "ident", "working-tree-encoding", "filter"];
function Ze(e) {
  let t = e?.["working-tree-encoding"],
    r = e?.ident;
  return (
    !z(e) &&
    (r === void 0 || r === "unset" || r === "unspecified") &&
    (t === void 0 || t === "unset" || t === "unspecified")
  );
}
function Qe(e) {
  let t = e?.["working-tree-encoding"],
    r = t !== void 0 && t !== "unspecified" && t !== "unset";
  return !z(e) && t !== "set" && (e?.ident === "set" || r);
}
async function Ee(e, t, r) {
  if (t.length === 0) return new Set();
  let i = t.map((m) => m.path),
    [o, s, u] = await Promise.all([X(e, i, Xe, r), rt(e, r), tt(e, i, r)]);
  if (Ct(r)) return null;
  if (o === null || u === null) return new Set();
  let f = t.filter((m) => u.get(m.path) === m.base),
    g = f.filter(
      (m) =>
        m.foldStats !== null &&
        Ze(o.get(m.path)) &&
        be(Ae(o.get(m.path)), s, m.foldStats),
    ),
    c = new Set(g.map((m) => m.path)),
    y = f.filter((m) => !c.has(m.path) && Qe(o.get(m.path))),
    w = y.length === 0 ? new Set() : await Te(e, r);
  if (Ct(r)) return null;
  let p =
      w === null
        ? []
        : y.filter((m) => !["", ...te(m.path)].some((R) => w.has(R))),
    b = await Pe(
      e,
      p.map((m) => m.path),
      r,
    );
  if (Ct(r)) return null;
  return new Set([
    ...c,
    ...p.flatMap((m) => (b?.get(m.path) === m.base ? [m.path] : [])),
  ]);
}
var et = ["unset", "unspecified", "set"].flatMap((e) => [
  "-c",
  `filter.${e}.clean=`,
  "-c",
  `filter.${e}.smudge=`,
  "-c",
  `filter.${e}.process=`,
  "-c",
  `filter.${e}.required=false`,
]);
async function Pe(e, t, r) {
  let i = new Map(),
    o = async (s) => {
      try {
        let u = await ee(K(e, s), { bigint: !0 });
        return u.isFile() && u.ino !== 0n
          ? `${u.dev}:${u.ino}:${u.size}:${u.mtimeNs}:${u.ctimeNs}`
          : null;
      } catch {
        return null;
      }
    };
  for (let s of re(t, ne)) {
    let u = await Promise.all(s.map(o)),
      f = s.filter((p, b) => u[b] !== null);
    if (f.length === 0) continue;
    let g = await xl(
        e,
        [...v, ...et, "hash-object", "--", ...f],
        r,
        void 0,
        D,
        void 0,
        { filterDriversOff: !0 },
      ),
      c = g.stdout
        .split(
          `
`,
        )
        .filter((p) => p !== "");
    if (g.code !== 0 || c.length !== f.length) return null;
    let y = new Map(s.map((p, b) => [p, u[b]])),
      w = await Promise.all(f.map(o));
    c.forEach((p, b) => {
      let m = f[b];
      if (m !== void 0 && nn.test(p) && w[b] !== null && w[b] === y.get(m))
        i.set(m, p);
    });
  }
  return i;
}
async function xe(e, t, r) {
  if (t.length === 0) return new Map();
  let i = await Te(e, r);
  if (i === null) return null;
  return Pe(
    e,
    t.filter((o) => !["", ...te(o)].some((s) => i.has(s))),
    r,
  );
}
async function Ie(e, t, r, i) {
  if (r.length === 0) return new Set();
  let o = new Map();
  for (let c of re(
    r.map((y) => `:(icase,literal)${y.path}`),
    ne,
  )) {
    let y = await xl(
      e,
      [...v, "ls-files", "-z", "--full-name", "--", ...c],
      i,
      void 0,
      D,
    );
    if (y.code !== 0) return null;
    for (let w of y.stdout.split("\x00").filter((p) => p !== "")) {
      let p = T3(w);
      o.set(p, (o.get(p) ?? new Set()).add(w));
    }
  }
  let s = [...o.values()].filter((c) => c.size > 1);
  if (s.length === 0) return new Set();
  let u = new Set(s.flatMap((c) => ([...c].some((y) => !pI(y)) ? [...c] : []))),
    f = Ds(J, (c) =>
      u.has(c) ? Promise.resolve({ path: c, identity: null }) : a3n(t, c),
    ),
    g = l3n(await Promise.all(s.flatMap((c) => [...c]).map(f)));
  return new Set(
    r.flatMap((c) => (g.has(c.path) || u.has(c.path) ? [c.path] : [])),
  );
}
async function Te(e, t) {
  let r = await xl(
    e,
    [
      ...v,
      "ls-files",
      "-z",
      "--full-name",
      "--",
      ":(top,glob).gitattributes",
      ":(top,glob)**/.gitattributes",
    ],
    t,
    void 0,
    D,
  );
  if (r.code !== 0) return null;
  let i = r.stdout.split("\x00").filter((u) => u !== ""),
    o = Ds(J, (u) =>
      pI(u)
        ? ee(K(e, u)).then(
            (f) => f.isFile(),
            () => !1,
          )
        : Promise.resolve(!1),
    ),
    s = await Promise.all(i.map(o));
  return new Set(
    i.flatMap((u, f) => (s[f] ? [] : [u.split("/").slice(0, -1).join("/")])),
  );
}
async function tt(e, t, r) {
  let i = new Map();
  for (let o of re(t, ne)) {
    let s = await xl(
      e,
      [
        ...v,
        "--literal-pathspecs",
        "ls-files",
        "-s",
        "-z",
        "--full-name",
        "--",
        ...o,
      ],
      r,
      void 0,
      D,
    );
    if (s.code !== 0) return null;
    for (let u of s.stdout.split("\x00")) {
      let f = nt.exec(u);
      if (f !== null && f[2] === "0" && f[3] !== void 0)
        i.set(f[3], f[1] ?? "");
    }
  }
  return i;
}
var nt = /^[0-7]{6} ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([0-3])\t(.+)$/s;
async function X(e, t, r, i, o) {
  if (t.length === 0) return new Map();
  let s = await xl(
    e,
    [
      ...v,
      "check-attr",
      "-z",
      "--stdin",
      ...(o === void 0 ? [] : [`--source=${o}`]),
      ...r,
    ],
    i,
    void 0,
    D,
    t.map((u) => `${u}\x00`).join(""),
  );
  return s.code === 0 ? Se(s.stdout) : null;
}
async function Oe(e, t) {
  let r = await xl(
    e,
    [...v, "config", "--bool", "--default", "true", "--get", "core.filemode"],
    t,
    void 0,
    D,
  );
  return r.code === 0 && r.stdout.trim() === "true";
}
async function rt(e, t) {
  let r = await xl(e, [...v, "config", "--get", "core.autocrlf"], t, void 0, D);
  return r.code === 0 ? _e(r.stdout) : null;
}
var ne = 24000;
function re(e, t) {
  return e.reduce(
    (r, i) => {
      let o = i.length + 1,
        s = r.chunks.at(-1);
      if (s === void 0 || r.used + o > t) (r.chunks.push([i]), (r.used = o));
      else (s.push(i), (r.used += o));
      return r;
    },
    { chunks: [], used: 0 },
  ).chunks;
}
function Ne(e) {
  return e === "100755" ? 493 : 420;
}
function oe(e) {
  let t =
    e.status === "D"
      ? (Q.has(e.oldMode) || e.oldMode === W) && e.newMode === Re
      : (Q.has(e.oldMode) || e.oldMode === Re) && Q.has(e.newMode);
  return (
    ["M", "A", "D"].includes(e.status) &&
    t &&
    pI(e.path) &&
    r$(e.path) === null &&
    !e.path.split("/").some(EFt)
  );
}
async function Fe(e, t, r, i, o, s) {
  let u = (p) =>
      p.status === "M" &&
      p.oldMode === p.newMode &&
      p.newId === null &&
      !oe(p) &&
      pI(p.path) &&
      !p.path.split("/").some(EFt),
    f = De(e),
    g = async (p) => {
      for (let b of te(p)) if (!(await f(b).catch(() => !1))) return !1;
      return !0;
    },
    c = Ds(J, async (p) => {
      s?.throwIfAborted();
      let b = { unchanged: !1, checkin: null };
      if (!u(p)) return b;
      if (p.oldMode === W) {
        if (!(await g(p.path))) return b;
        let R = await We(K(e, p.path), "buffer").catch(() => null);
        if (R !== null) {
          let k =
            P() === "windows"
              ? Buffer.from(R.toString("utf8").replaceAll("\\", "/"))
              : R;
          return { unchanged: JA(k, o) === p.oldId, checkin: null };
        }
      } else if (!Q.has(p.oldMode)) return b;
      let m = await o$(e, t, p.path, r);
      if (m.kind !== "read") return b;
      return JA(m.content, o) === p.oldId
        ? { unchanged: !0, checkin: null }
        : {
            unchanged: !1,
            checkin: p.oldMode === W ? null : ie(p, m.content, o),
          };
    }),
    y = await Hk(i.map(c), s);
  if (y === null) return null;
  let w = await Ee(
    e,
    y.flatMap((p) => (p.checkin === null ? [] : [p.checkin])),
    s,
  );
  if (w === null) return null;
  return i.filter((p, b) => !y[b]?.unchanged && !w.has(p.path));
}
function se(e, t) {
  return { kind: "refused", refusal: e, count: t };
}
function Be(e) {
  return (
    e === "read_denied" ||
    e === "sensitive" ||
    e === "sensitive_tracked" ||
    e === "rules_unreadable"
  );
}
function it(e) {
  return e.includes("too_large") ? "tracked_too_large" : "tracked_unreadable";
}
async function at({
  gitRoot: e,
  realRoot: t,
  anchor: r,
  headCommit: i,
  pinnedCommit: o,
  signal: s,
  uploadFilter: u,
  platform: f,
}) {
  if (!nn.test(i) || !nn.test(o) || o.length !== i.length)
    return { kind: "failed", reason: "diff_index_failed" };
  let [g, c] = await Promise.all([
      xl(e, [...v, ...ge(i)], s, void 0, D),
      xl(e, [...v, "ls-files", "--unmerged", "-z"], s, void 0, D),
    ]),
    y = g.code === 0 ? ye(g.stdout) : null;
  if (y === null || c.code !== 0)
    return { kind: "failed", reason: Ct(s) ? "aborted" : "diff_index_failed" };
  let w = E3n(i);
  if (y.some((a) => a.oldId.length !== i.length))
    return { kind: "failed", reason: "diff_index_failed" };
  let p = new Set(
      c.stdout
        .split("\x00")
        .filter((a) => a !== "")
        .map((a) => a.slice(a.indexOf("\t") + 1)),
    ),
    b = (a) => a.status === "D" && f === "windows" && TE(a.path),
    m = (a) => {
      if (a.status === "D") return !1;
      let x = u(a.path, !0);
      return x !== null && Be(x);
    },
    R = y.filter((a) => !p.has(a.path) && !b(a)),
    k = await Fe(
      e,
      t,
      r,
      R.filter((a) => !m(a)),
      w,
      s,
    ),
    C = k === null ? null : [...k, ...R.filter(m)];
  if (C === null || Ct(s)) return { kind: "failed", reason: "aborted" };
  let N = await Ie(
    e,
    t,
    C.filter((a) => !m(a)),
    s,
  );
  if (N === null)
    return { kind: "failed", reason: Ct(s) ? "aborted" : "diff_index_failed" };
  let F = p.size + G(C, (a) => !m(a) && (!oe(a) || N.has(a.path)));
  if (F > 0) return se("tracked_unrepresentable", F);
  let M = await ve(e, C, s);
  if (M === null || Ct(s)) return { kind: "failed", reason: "aborted" };
  let B = await ot({
    gitRoot: e,
    records: C,
    headCommit: i,
    pinnedCommit: o,
    mayCarryBytes: (a) => a.status !== "D" || M.get(a.path) === "file",
    signal: s,
    uploadFilter: u,
  });
  if (B.kind !== "classified") return B;
  let { carried: L, setAside: I, bytesVerdict: _ } = B,
    T = await Oe(e, s),
    U = Ds(J, async (a) => {
      if ((s?.throwIfAborted(), a.status === "D" && a.oldMode === W))
        return { kind: "unchanged", path: a.path, resurfaced: !1 };
      let x = a.status === "D" ? (M.get(a.path) ?? "unreadable") : null;
      if (x === "unreadable") return { kind: "skip", reason: "unreadable" };
      if (x === "gone" || x === "other")
        return { kind: "removed", removal: { path: a.path, base: a.oldId } };
      let H = x === "file",
        pe = H ? (_.get(a.path) ?? null) : null;
      if (pe !== null) return { kind: "aside", record: a, reason: pe };
      let O = await o$(e, t, a.path, r);
      if (O.kind === "skip") {
        if (
          (H ||
            (a.status === "M" &&
              a.newId === null &&
              a.oldMode === a.newMode)) &&
          (O.skipped.reason === "too_large" || O.skipped.reason === "hard_link")
        ) {
          if ((await xe(e, [a.path], s))?.get(a.path) === a.oldId)
            return { kind: "unchanged", path: a.path, resurfaced: H };
        }
        return { kind: "skip", reason: O.skipped.reason };
      }
      let he = Jbe(O.content),
        Le = w === "sha1" ? he.gitBlobId : JA(O.content, w),
        me = H || a.oldMode === a.newMode;
      if (a.status !== "A" && me && Le === a.oldId)
        return { kind: "unchanged", path: a.path, resurfaced: H };
      let He =
        a.status === "M" && me && a.newId === null ? ie(a, O.content, w) : null;
      return {
        kind: "row",
        resurfaced: H,
        checkin: He,
        row: {
          path: a.path,
          sha256: he.sha256,
          size: O.content.length,
          mode:
            H && T
              ? (O.mode & 73) !== 0
                ? 493
                : 420
              : Ne(H ? a.oldMode : a.newMode),
          ...(a.status !== "A" && { base: a.oldId }),
        },
      };
    }),
    j = (a) =>
      a.record.status === "M" && a.record.newId === null && !Be(a.reason),
    d = await Hk(
      I.filter(j).map((a) => U(a.record)),
      s,
    ),
    S = d === null ? null : await ae(e, d, s);
  if (S === null) return { kind: "failed", reason: "aborted" };
  let ue = new Set(S.flatMap((a) => (a.kind === "unchanged" ? [a.path] : []))),
    fe = I.filter((a) => !ue.has(a.record.path)),
    ce = await Hk(L.map(U), s),
    V = ce === null ? null : await ae(e, ce, s);
  if (V === null || Ct(s)) return { kind: "failed", reason: "aborted" };
  let Z = V.flatMap((a) => (a.kind === "skip" ? [a.reason] : []));
  if (Z.length > 0) {
    let a = it(Z);
    return se(
      a,
      a === "tracked_too_large" ? G(Z, (x) => x === "too_large") : Z.length,
    );
  }
  return {
    kind: "listed",
    rows: V.flatMap((a) => (a.kind === "row" ? [a.row] : [])),
    removed: V.flatMap((a) => (a.kind === "removed" ? [a.removal] : [])),
    resurfaced: new Set([
      ...fe.flatMap(({ record: a }) =>
        a.status === "D" && M.get(a.path) === "file" ? [a.path] : [],
      ),
      ...V.flatMap((a) =>
        a.kind === "aside"
          ? [a.record.path]
          : (a.kind === "row" && a.resurfaced) ||
              (a.kind === "unchanged" && a.resurfaced)
            ? [a.kind === "row" ? a.row.path : a.path]
            : [],
      ),
    ]),
    skipped: [...fe, ...V.flatMap((a) => (a.kind === "aside" ? [a] : []))].map(
      ({ record: a, reason: x }) => ({ path: a.path, reason: x }),
    ),
  };
}
async function ot({
  gitRoot: e,
  records: t,
  headCommit: r,
  pinnedCommit: i,
  mayCarryBytes: o,
  signal: s,
  uploadFilter: u,
}) {
  let f = t.filter((d) => d.status !== "A"),
    g =
      i === r
        ? new Set(f.map((d) => d.path))
        : await Me(
            e,
            i,
            f.map((d) => d.path),
            s,
          );
  if (g === null)
    return { kind: "failed", reason: Ct(s) ? "aborted" : "pin_tree_failed" };
  let c = f.filter((d) => g.has(d.path)),
    y = t.filter((d) => d.status === "A" || !g.has(d.path)),
    w = OV(
      y,
      (d) => d.path,
      (d) => u(d.path, !1) ?? (Lne(d.path) ? "sensitive" : null),
      (d) => d.status !== "A",
    ),
    p = c.map((d) => u(d.path, !0));
  if (
    p.includes("rules_unreadable") ||
    w.withheld.some(({ reason: d }) => d === "rules_unreadable")
  )
    return se("rules_unreadable", t.length);
  let b = new Set(w.eligible.map((d) => d.path)),
    m = new Set(w.withheld.map(({ item: d }) => d.path)),
    R = [
      ...y.filter(
        (d) => o(d) && !m.has(d.path) && (d.status === "A" || b.has(d.path)),
      ),
      ...c.filter((d) => d.status === "D" && o(d)),
    ].map((d) => d.path),
    k = (d) => Y([d, d.normalize("NFC"), d.normalize("NFD")]),
    C = t.filter(o).map((d) => d.path),
    [N, F, M] = await Promise.all([
      Ce(e, R.flatMap(k), s),
      X(e, C, ["filter"], s),
      X(e, C, ["filter"], s, i),
    ]),
    E =
      N === null ? null : new Set(R.filter((d) => k(d).some((S) => N.has(S))));
  if (F !== null && M === null && !Ct(s))
    q("warn", "dir_sync_overlay_pin_attrs_unread", {});
  let B = M ?? new Map();
  if (E === null || F === null)
    return {
      kind: "failed",
      reason: Ct(s)
        ? "aborted"
        : E === null
          ? "check_ignore_failed"
          : "check_attr_failed",
    };
  let L = (d) =>
      z(F.get(d.path)) || z(B.get(d.path)) ? "content_filter" : null,
    I = (d, S) =>
      d.status !== "A" ? "unpushed_only" : E.has(d.path) ? "ignored" : S,
    _ = new Map([
      ...c.map((d, S) => [
        d.path,
        p[S] ?? (d.status === "D" && E.has(d.path) ? "ignored" : L(d)),
      ]),
      ...w.filtered.map((d) => [d.path, I(d, "filtered")]),
      ...w.dependency.map((d) => [d.path, I(d, "dependency_dir")]),
      ...w.withheld.map(({ item: d, reason: S }) => [d.path, S]),
      ...w.eligible.map((d) => [
        d.path,
        E.has(d.path) ? I(d, "ignored") : L(d),
      ]),
    ]),
    T = t.flatMap((d) => {
      let S = _.get(d.path) ?? null;
      return S !== null && (d.status !== "D" || S === "read_denied")
        ? [{ record: d, reason: S }]
        : [];
    }),
    U = new Set(T.map(({ record: d }) => d.path)),
    j = t.filter((d) => !U.has(d.path));
  return {
    kind: "classified",
    carried: j,
    setAside: T,
    bytesVerdict: new Map(
      j
        .filter((d) => d.status === "D")
        .map((d) => [d.path, _.get(d.path) ?? null]),
    ),
  };
}
function st(e, t, r) {
  if (e.kind === "too_many")
    return {
      files: [],
      skipped: [
        ...e.skipped,
        ...e.eligiblePaths.map((c) => ({ path: c, reason: "left_behind" })),
      ],
      note: iKn(e.eligiblePaths.length),
      leftBehind: "too_many",
    };
  let { files: i, skipped: o } = e,
    s = i.reduce((c, y) => c + y.size, 0),
    u = G(o, (c) => c.reason === "over_budget");
  if (s <= t)
    return {
      files: i,
      skipped: o,
      note: u > 0 ? sKn(u, r) : null,
      leftBehind: u > 0 ? "over_rows" : "none",
    };
  let { kept: f } = i.reduce(
      (c, y) => {
        if (c.used + y.size <= t) (c.kept.push(y), (c.used += y.size));
        return c;
      },
      { kept: [], used: 0 },
    ),
    g = new Set(f.map((c) => c.path));
  return {
    files: f,
    skipped: [
      ...o,
      ...i
        .filter((c) => !g.has(c.path))
        .map((c) => ({ path: c.path, reason: "over_budget" })),
    ],
    note: oKn(s, t),
    leftBehind: "over_bytes",
  };
}
async function Ge({
  gitRoot: e,
  containerOrigin: t,
  signal: r,
  createUploadFilter: i,
  withheldOf: o,
  host: s = uk(),
  filterAttributed: u,
  purpose: f = "seed",
}) {
  let g = Date.now(),
    { bundle: c, headCommit: y, pinnedCommit: w } = t;
  if (c !== null && c.size > Jm) return CKe("overlay_too_large", 1, t, g, f);
  let p = await xk(e);
  if (p === null) return AKe("root_unresolvable", t, g, f);
  let b = await tKn(e, r);
  if (b === null) return AKe(Ct(r) ? "aborted" : "rev_parse_failed", t, g, f);
  let m = o ?? i(e, { realRoot: p });
  await using R = await SO(s, { gitRoot: e, realRoot: p }).catch(
    (_) => (
      n(`dirSync overlay inventory: tree anchor not opened (${A(_) ?? l(_)})`),
      null
    ),
  );
  if (R === null) return AKe("anchor_unavailable", t, g, f);
  let k = await at({
    gitRoot: e,
    realRoot: p,
    anchor: R,
    headCommit: t.headCommit,
    pinnedCommit: t.pinnedCommit,
    signal: r,
    uploadFilter: m,
    platform: s.platform(),
  });
  if (k.kind === "failed") return AKe(k.reason, t, g, f);
  if (k.kind === "refused") return CKe(k.refusal, k.count, t, g, f);
  let C = k.rows.reduce((_, T) => _ + T.size, 0);
  if (k.rows.length > WTe || C > GTe)
    return CKe("tracked_over_budget", k.rows.length, t, g, f);
  let N = C + (c?.size ?? 0);
  if (N > GTe) return CKe("overlay_over_budget", k.rows.length, t, g, f);
  if (k.removed.length > YVn)
    return CKe("too_many_removed", k.removed.length, t, g, f);
  let F =
      u === void 0
        ? void 0
        : async (_, T) => {
            let [U, j] = await Promise.all([
              u(_, T),
              X(e, _, ["filter"], T, w),
            ]);
            return U === null
              ? null
              : new Set([
                  ...U,
                  ...[...(j ?? new Map())].flatMap(([d, S]) =>
                    z(S) ? [d] : [],
                  ),
                ]);
          },
    M = await rKn({
      gitRoot: e,
      realRoot: p,
      anchor: R,
      signal: r,
      uploadFilter: m,
      rowBudget: WTe - k.rows.length,
      filterAttributed: F,
      alreadyJudged: new Set([
        ...k.resurfaced,
        ...k.removed.map((_) => _.path),
      ]),
    });
  if (M.kind === "failed") return AKe(M.reason, t, g, f);
  let E = st(M, GTe - N, Math.max(0, WTe - k.rows.length)),
    B = [...k.rows, ...E.files],
    L = c === null ? void 0 : { ...c, head: y, pin: w },
    I = {
      version: eKn({ overlay: L, files: B, removed: k.removed }),
      gitRoot: e,
      headSha: b,
      originKind: "overlay",
      ...(L !== void 0 && { overlay: L }),
      files: B,
      ...(k.removed.length > 0 && { removed: k.removed }),
      skipped: [...k.skipped, ...E.skipped],
    };
  return (
    nKn(
      I,
      {
        untrackedCount: M.untrackedCount,
        trackedCount: k.rows.length,
        removedCount: k.removed.length,
        overlayBytes: c?.size ?? 0,
        untrackedLeftBehind: E.leftBehind,
        purpose: f,
      },
      g,
    ),
    {
      ok: !0,
      manifest: I,
      trackedPaths: k.rows.map((_) => _.path),
      note: E.note,
    }
  );
}
var le = 60000,
  lt = 8,
  de = 5000;
async function un({ gitRoot: e, pin: t, head: r, signal: i }) {
  let o = AbortSignal.timeout(de),
    s = await kt(
      UX(e, i === void 0 ? o : AbortSignal.any([i, o]), { bound: !0 }).catch(
        () => ({ kind: "failed" }),
      ),
      de,
    );
  if (s === void 0 || s.kind === "failed")
    return { kind: "not_planned", whyNot: Ct(i) ? "aborted" : "unavailable" };
  if (s.kind !== "read" || (s.layout.gitDir !== s.layout.commonDir && !vLe()))
    return { kind: "not_planned", whyNot: "layout_unsupported" };
  let u = await dt({ gitRoot: e, pin: t, head: r, signal: i });
  if (u.kind === "not_planned") return u;
  let f = Date.now(),
    g = AbortSignal.timeout(le),
    c = i === void 0 ? g : AbortSignal.any([i, g]),
    y = (await kt(
      Ge({
        gitRoot: e,
        containerOrigin: {
          kind: "overlay",
          pinnedCommit: t,
          headCommit: r,
          bundle:
            u.bundle === null
              ? null
              : { sha256: u.bundle.sha256, size: u.bundle.sizeBytes },
        },
        signal: c,
        createUploadFilter: pH,
        filterAttributed: Xbe(e),
        purpose: "create_check",
      }).catch((w) => (h(w), { ok: !1, reason: "aborted" })),
      le,
    )) ?? { ok: !1, reason: "aborted" };
  if (y.ok)
    return (await kt(ut(e, r, c), de)) === !0
      ? u
      : { kind: "not_planned", whyNot: "head_moved" };
  if (y.reason === "refused")
    return {
      kind: "not_planned",
      whyNot: "inventory_refused",
      refusal: y.refusal,
    };
  return Ct(i)
    ? { kind: "not_planned", whyNot: "aborted" }
    : g.aborted || Date.now() - f >= le
      ? { kind: "not_planned", whyNot: "inventory_cut" }
      : { kind: "not_planned", whyNot: "inventory_failed" };
}
async function dt({ gitRoot: e, pin: t, head: r, signal: i }) {
  if (r === t) return { kind: "planned", bundle: null };
  let o = await U9n({ gitRoot: e, prerequisiteSha: t, signal: i });
  if (o.ok) {
    if (o.prerequisites.length > lt)
      return { kind: "not_planned", whyNot: "too_many_prerequisites" };
    return o.headSha === r
      ? {
          kind: "planned",
          bundle: {
            content: o.content,
            sha256: o.sha256,
            sizeBytes: o.sizeBytes,
            aheadCount: o.aheadCount,
          },
        }
      : { kind: "not_planned", whyNot: "head_moved" };
  }
  switch (o.reason) {
    case "not_diverged":
      return { kind: "not_planned", whyNot: "head_moved" };
    case "too_large":
      return { kind: "not_planned", whyNot: "too_large" };
    case "not_ancestor":
      return { kind: "not_planned", whyNot: "not_ancestor" };
    case "aborted":
      return { kind: "not_planned", whyNot: "aborted" };
    case "git_error":
      return { kind: "not_planned", whyNot: "git_error", stage: o.stage };
  }
}
async function ut(e, t, r) {
  let i = await xl(
    e,
    [...v, "rev-parse", "-q", "--verify", "HEAD^{commit}"],
    r,
  );
  return i.code === 0 && i.stdout.trim() === t;
}
export {
  lt as MAX_OVERLAY_PREREQUISITES,
  le as OVERLAY_CHECK_DEADLINE_MS,
  un as planOverlay,
};

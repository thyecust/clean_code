// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oo, Mb, ze, Dxe } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { Ve, yt, R, l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { lxe, St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { pr } from "../权限系统/chunk-ynkf3yy4.js";
import { BU } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { or } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "./chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { Eg } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { gie } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { ly } from "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { HU } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import {
  yg,
  FT,
  Ovn,
  Xme,
  mc,
  fA,
  WCt,
  uf,
  GCt,
  yr,
  SU,
  nge,
  l0,
  Zvn,
  jD,
  bU,
  TKt,
  eZe,
  zCt,
  H,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { lS, Ip, ii, Zi, cS, ZC } from "./chunk-811z9z0t.js";
import { qNe, $re, abt } from "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import { ps, t5 } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import { ce } from "../权限系统/chunk-fjrcf22x.js";
import { Kt, ar, Tt } from "../权限系统/chunk-qdy0h5k2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import { ewt } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import { $i } from "./chunk-t899nada.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import {
  nH,
  xn,
  K4e,
  BS,
  sne,
  hd,
  tde,
  h2t,
  Agt,
  nr,
  lde,
  PX,
  x3,
  nY,
  gH,
  P3,
  UEe,
  npe,
  rpe,
  fC,
  h9t,
  _9t,
  n8e,
  pre,
  Epe,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "./chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import { Mo, NJe } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import { Sbt, $Ae, UAe, V3t, dK, BAe, bbt, uN } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { FGt, $Gt, ag, twn, nwn, rwn, DH, OXe } from "./chunk-g6nvp9mm.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { zr } from "./chunk-3k2smxfn.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import { ZS } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import { UTn, OCe } from "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import { Pf, TK } from "./chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import { _bt } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import {
  tdt,
  bPe,
  Uee,
  qGe,
  zGe,
  Kjn,
  f2,
  Yb,
  obe,
  wPe,
  TPe,
  EPe,
  SF,
} from "./chunk-sr4920wy.js";
import { ajn } from "../../01-核心基础设施/共享小工具-未细化/chunk-mybtnk9f.js";
import { kPe, HPe } from "../权限系统/chunk-4tar9p3n.js";
import { Ton, Ou, uM, y9, Dee, Eon } from "../工具Task-Agent调度/工具Task-Agent调度.5xpzy7cr.js";
import { cjn, ujn, yon, djn } from "../../01-核心基础设施/共享小工具-未细化/chunk-wqaxtswb.js";
import { wut } from "../../01-核心基础设施/共享小工具-未细化/chunk-zh4679df.js";
import "../后台任务-Shell管理/chunk-531ast3t.js";
import {
  IGe,
  XSe,
  _ce,
  PGe,
  Aut,
  Aon,
  uPe,
  ENt,
  ANt,
  Cut,
  Con,
  von,
  dPe,
  Ron,
  OGe,
} from "./chunk-wsyjx2r0.js";
import { Nin } from "./chunk-4ma81w0c.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "./chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import "../MCP客户端/chunk-0mwqsv0r.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/chunk-5kyac4wk.js";
import { NE, jre } from "../../01-核心基础设施/共享小工具-未细化/chunk-1md6qpsy.js";
import "../MCP客户端/chunk-tznd4407.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import { pK } from "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k1vb7vky.js";
import "../工具Monitor/chunk-kxk3njnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "./chunk-eey53z5b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import { Vr, _Ce } from "../../01-核心基础设施/共享小工具-未细化/chunk-9mfwkyac.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-px58ry6q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
import "../工具ToolSearch/chunk-1m51pqtd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../权限系统/chunk-pcxn6gwz.js";
import { mt } from "../工具Task-Agent调度/chunk-1px84m19.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import { cp, wge, fs } from "./chunk-enjekn9t.js";
import { rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-q4e7ggp5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import { s, O, c, $e, Ko, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import { iB, oz } from "../../01-核心基础设施/共享小工具-未细化/chunk-xcc43dkx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
var Be = /^local_[0-9a-f-]{8,}$/,
  xe = "ccd_session_mgmt",
  Le = "send_message",
  nt = `mcp__${rn(xe)}__${rn(Le)}`,
  Cs = 1000;
function Es(e) {
  let { tools: t, toolAliases: p } = e.options,
    r = t.filter(
      (_) =>
        _.mcpInfo?.serverName === xe &&
        _.mcpInfo.toolName === Le &&
        _.mcpInfo.serverType === "sdk",
    ),
    d = r.length === 1 ? r[0] : void 0;
  if (!d || ar(t, d.name, p) !== d) return;
  return d;
}
class qe {
  promptIndexSeen = -1;
  forwardsSincePrompt = 0;
}
function je(e) {
  let t = Es(e);
  if (!t) return { kind: "unavailable" };
  let p = e.toolState.get(qe),
    r = Dxe();
  if (r !== p.promptIndexSeen)
    ((p.promptIndexSeen = r), (p.forwardsSincePrompt = 0));
  if ((p.forwardsSincePrompt++, p.forwardsSincePrompt > Sbt.maxSelfHops))
    return { kind: "loop-paused", forwards: p.forwardsSincePrompt - 1 };
  return { tool: t };
}
async function Fe({
  tool: e,
  sessionId: t,
  message: p,
  context: r,
  canUseTool: d,
  assistantMessage: _,
}) {
  let i = {
      type: "tool_use",
      id: `${r.toolUseId ?? "sendmessage"}_desktop`,
      name: e.name,
      input: { session_id: t, message: p },
      caller: { type: "direct" },
    },
    w = 0,
    q = async (...X) => {
      let se = Date.now();
      try {
        return await d(...X);
      } finally {
        w += Date.now() - se;
      }
    },
    N,
    K = [],
    Y = !1;
  for await (let X of P3(i, _, q, r, () => new Date().toISOString())) {
    if (gH(X)) continue;
    if (X.message.type === "attachment") {
      if (X.message.attachment.type === "hook_deferred_tool") Y = !0;
      else K.push(X.message);
      continue;
    }
    if (X.message.type !== "user") continue;
    let se = X.message.message.content;
    if (!Array.isArray(se)) continue;
    for (let U of se)
      if (U.type === "tool_result" && U.tool_use_id === i.id) N = U;
  }
  let W = w >= Cs;
  if (!N)
    return {
      kind: "refused",
      message: Y
        ? "a hook deferred Claude Desktop's messaging tool, so nothing was sent; send it again when you are ready (a forwarded send cannot be resumed later)."
        : "the send did not run (interrupted).",
      attachments: K,
      deferredByHook: Y,
      blockedWait: W,
    };
  let o = As(N);
  return N.is_error
    ? {
        kind: "refused",
        message: o || "Claude Desktop reported an error.",
        attachments: K,
        deferredByHook: Y,
        blockedWait: W,
      }
    : {
        kind: "sent",
        detail: o,
        attachments: K,
        deferredByHook: Y,
        blockedWait: W,
      };
}
function As(e) {
  let { content: t } = e;
  if (typeof t === "string") return t.trim();
  if (!Array.isArray(t)) return "";
  return t
    .flatMap((p) => (p.type === "text" ? [p.text] : []))
    .join(
      `
`,
    )
    .trim();
}
async function He(e, t) {
  let p = await fC(e, t);
  return p?.taskKind === "in_process_teammate" ? p : null;
}
async function Xe({
  resumableAgentId: e,
  prompt: t,
  senderName: p,
  meta: r,
  fallbackName: d,
  toolUseContext: _,
}) {
  let i = r.name ?? d,
    w = r.teamName ?? ii(_.getAppState().teamContext);
  if (!i || !w)
    throw (
      f("swarm_in_process_resume", "no_team_context"),
      Error("Cannot resume teammate: no team is active in this session")
    );
  if (l0(i))
    throw (
      f("swarm_in_process_resume", "unclaimable_name"),
      Error(
        "Cannot resume teammate: its recorded name is a reserved recipient or agent-id-shaped name",
      )
    );
  let q,
    N = await pre(e, _.storageV5, { signal: _.abortController.signal }).catch(
      (F) => {
        if (yt(F)) throw F;
        throw (
          f("swarm_in_process_resume", "transcript_load_failed"),
          new R(
            `Cannot resume teammate: ${l(F)}`,
            "Cannot resume teammate: its transcript could not be loaded",
          )
        );
      },
    );
  if (_.abortController.signal.aborted) throw new Ve();
  if (N) (sne(N.messages), ewt(N.messages));
  if (!N || N.messages.length === 0) q = "no_transcript";
  let K = N ? npe(rpe(UEe(PX(N.messages, { site: "agent_resume" })))) : [],
    Y = _bt(_.contentReplacementState, K, N?.contentReplacements ?? []),
    W;
  if (r.customAgentType) {
    let F = _.options.agentDefinitions.activeAgents.find(
      (Z) => Z.agentType === r.customAgentType,
    );
    if (F && K4e(F)) W = F;
    else
      ((q = "agent_type_unresolved"),
        (W = {
          agentType: r.customAgentType,
          whenToUse: "",
          tools: [],
          getSystemPrompt: () => "",
          source: "projectSettings",
        }));
  }
  if (!(await OXe(i, (F) => DH(F.text), w, _.storageV5)))
    n(
      `[resumeInProcessTeammate] stale protocol-frame drop for ${i} did not land; the resumed runner may see stale protocol frames`,
      { level: "warn" },
    );
  let { spawnInProcessTeammate: X } = import.meta.require(
      "./spawnInProcessTeammate.g3fc6s9e.js",
    ),
    { startInProcessTeammate: se } = import.meta.require("./startInProcessTeammate.k24hqy5t.js"),
    U = await X(
      {
        name: i,
        teamName: w,
        prompt: t,
        description: r.description,
        color: r.color,
        planModeRequired: r.planModeRequired ?? !1,
        model: r.model,
        permissionMode:
          r.permissionMode !== void 0 &&
          r.permissionMode !== "bypassPermissions" &&
          ly.includes(r.permissionMode)
            ? r.permissionMode
            : void 0,
        resumableAgentId: e,
      },
      _,
    );
  if (!U.ok)
    throw (
      f("swarm_in_process_resume", "spawn_failed"),
      n(`[resumeInProcessTeammate] spawn failed: ${U.error}`),
      Error("Failed to respawn in-process teammate")
    );
  if (
    (await TK(
      w,
      (F) => {
        let Z = F.members.find((ie) => ie.agentId === U.agentId);
        if (Z) {
          Z.joinedAt = Date.now();
          return;
        }
        F.members.push({
          agentId: U.agentId,
          name: i,
          color: r.color,
          agentType: r.customAgentType,
          planModeRequired: r.planModeRequired,
          joinedAt: Date.now(),
          tmuxPaneId: "in-process",
          cwd: Q(),
          subscriptions: [],
          backendType: "in-process",
        });
      },
      void 0,
      _.storageV5,
    ).catch((F) =>
      n(
        `[resumeInProcessTeammate] team file re-add failed (ad-hoc team?): ${F}`,
      ),
    ),
    _.agentLifecycle.setTeammate(U.agentId, {
      name: i,
      color: r.color,
      agentType: r.customAgentType,
      tmuxSessionName: "in-process",
      tmuxPaneId: "in-process",
      cwd: Q(),
      spawnedAt: Date.now(),
    }),
    se({
      identity: U.identity,
      taskId: U.taskId,
      prompt: t,
      initialFrom: p,
      description: r.description,
      agentDefinition: W,
      model: r.model,
      teammateContext: U.teammateContext,
      toolUseContext: { ..._, messages: [] },
      abortController: U.abortController,
      resumeMessages: K,
      resumeReplacementState: Y,
    }),
    n(
      `[resumeInProcessTeammate] Resumed ${U.agentId} with ${K.length} prior messages`,
    ),
    q)
  )
    g("swarm_in_process_resume", q);
  else y("swarm_in_process_resume");
  return {
    agentId: U.agentId,
    taskId: U.taskId,
    resumedMessageCount: K.length,
  };
}
var We = "Send a message to another agent";
function Ge(e) {
  let t = Mo()
      ? `
| \`"worker"\` | Any agent from \`${$i}\` \u2014 subagent, another local Claude session |
| \`"worker [3fa9c1]"\` | Same, plus its \`[ref]\` \u2014 only when a listing or an error shows one |`
      : "",
    p = "",
    r = Mo()
      ? `

## Cross-session

Use \`${$i}\` to discover targets. Every row leads with the agent's \`name [ref]\` \u2014 the name IS the address; there is no separate address syntax.

\`\`\`json
{"to": "worker", "message": "check if tests pass over there"}
{"to": "worker [3fa9c1]", "message": "you, specifically"}
\`\`\`

Send the bare name \u2014 a name that exactly matches one live agent or session (on this machine, on another machine, or in the cloud) delivers directly. Append the \` [ref]\` only when the bare name is not enough \u2014 \`${$i}\` shows two rows with it, or an error asks you to disambiguate (you typed only a prefix, or a session list could not be checked). A ref you did not just read from a listing or an error will not resolve, and if the same name also names an in-process agent, the bare name always wins \u2014 use the in-process one.

A listed peer is alive and will process your message; messages enqueue and drain at the receiver's next tool round (its \`${$i}\` row says whether it is busy or idle right now). Your message arrives wrapped as \`<cross-session-message from="...">\`. **To reply to an incoming message, copy its \`from\` attribute as your \`to\`.** Cross-session messages travel between SESSIONS: if you are a subagent, your send goes out under your parent session's address, and any reply is delivered to the parent session's conversation, not to you.

To hear when a session ON THIS MACHINE finishes what it is doing, pass \`notify_when_idle: true\` (from the main conversation only) \u2014 one-shot and opt-in: exactly one \`[Cross-session idle notice]\` arrives when it next goes idle (or exits) \u2014 shown to you, or only to your user when this session holds peer messages for approval (the tool result says which); if it never signals within the subscription's lifetime (it may still be busy, may refuse inbound requests, or may have ended abruptly) the notice says the subscription expired instead. Omit \`message\` for a pure subscription that costs that session nothing; include one to deliver it now AND subscribe. Never poll \`${$i}\` in a loop or send "are you done?" messages instead.

Permission boundaries are per-session: NEVER ask a peer to perform an action that was denied or blocked in your session, or that you expect your own permission settings would block \u2014 a peer doing it for you bypasses the user's permission decision (cross-session permission laundering). Route blocked work back to your user instead.`
      : "";
  return `
# SendMessage

Send a message to another agent.

\`\`\`json
{"to": "researcher", "summary": "assign task 1", "message": "start on task #1"}
\`\`\`

| \`to\` | |
|---|---|
| \`"researcher"\` | Teammate by name |
| \`"main"\` | The main conversation (background subagents only) |${t}${""}

Your plain text output is NOT visible to other agents \u2014 to communicate, you MUST call this tool. Messages from teammates are delivered automatically; you don't check an inbox. Refer to agents by name \u2014 names keep working after an agent completes (a send resumes it from its transcript). Use the raw \`agentId\` (format \`a...-...\`) from its spawn result only when the agent has no name, or when a newer agent took the name (latest wins). When relaying, don't quote the original \u2014 it's already rendered to the user.${r}${e ? '\n\n## Protocol responses (legacy)\n\nIf you receive a JSON message with `type: "shutdown_request"` or `type: "plan_approval_request"`, respond with the matching `_response` type \u2014 echo the `request_id`, set `approve` true/false:\n\n```json\n{"to": "team-lead", "message": {"type": "shutdown_response", "request_id": "...", "approve": true}}\n{"to": "researcher", "message": {"type": "plan_approval_response", "request_id": "...", "approve": false, "feedback": "add error handling"}}\n```\n\nApproving shutdown terminates your process. Rejecting plan sends the teammate back to revise. Don\'t originate `shutdown_request` unless asked. Don\'t send structured JSON status messages \u2014 report progress through your task tools if you have them, otherwise in plain prose.' : ""}
`.trim();
}
function ge(e) {
  switch (dK(e)) {
    case "gone":
      return "stale_socket";
    case "busy":
      return "socket_busy";
    case "other":
      break;
  }
  if ($Ae(e)) return "too_large";
  if (UAe(e)) return "sender_paced";
  if (e instanceof uN)
    switch (e.refusal) {
      case "wrong-endpoint":
        return "stale_socket";
      case "endpoint-unverifiable":
        return "socket_busy";
      case "symlink":
      case "unvettable":
      case "non-local":
        return "invalid_target";
    }
  if (e instanceof Error && e.message.startsWith("Timed out sending"))
    return "timeout";
  return "other";
}
function de({
  route: e,
  startedAt: t,
  errorClass: p,
  degradedClass: r,
  blockedWait: d,
  via: _,
  exactUnique: i,
  previouslyPinned: w,
  searchTruncated: q,
}) {
  let N = {
    route: u(e),
    duration_ms: Date.now() - t,
    ...(d && { blocked_wait: !0 }),
    ...(_ !== void 0 && { via: u(_) }),
    ...(i && { exact_unique: !0 }),
    ...(w && { previously_pinned: !0 }),
    ...(q && { search_truncated: !0 }),
  };
  if (p !== void 0) f("send_message_delivery", p, N);
  else if (r !== void 0) g("send_message_delivery", r, N);
  else y("send_message_delivery", N);
}
var Rs = 100,
  ke = fA + Rs,
  Os = 2 + Zvn + 1,
  us = Math.max(fA + Os, Ovn),
  Te = /^[^\n\r]*$/u;
function gs(e) {
  return new RegExp(`^[\\s\\S]{0,${e}}$`, "u");
}
var Ye = gs(ke),
  Ms = gs(us);
class pe extends x3 {}
function Ne(e) {
  return [e.to, e.message];
}
function ue({ toolUseId: e, toolState: t }, p, r) {
  if (!e) return;
  t.get(pe).set(e, Ne(p), r);
}
class hs extends Map {}
function Ke(e) {
  return $e([Re(e), Ds()]);
}
function Re(e) {
  return s().describe(e ?? "Plain text message content");
}
var ys =
    "Plain text message content. The recipient's human sees only the FIRST LINE as a one-line preview until they expand it, so make the first line a " +
    "clear, self-contained sentence saying what this is about \u2014 not a greeting, " +
    "preamble, or bare @-mention.",
  bs = "",
  Ds = m(() =>
    Ko("type", [
      c({ type: k("shutdown_request"), reason: s().optional() }),
      c({
        type: k("shutdown_response"),
        request_id: s()
          .min(1, "must be the request id being responded to")
          .regex(Te, "must be a single-line request id")
          .regex(
            Ye,
            `request id longer than any real one (max ${ke} characters)`,
          ),
        approve: NE(),
        reason: s().optional(),
      }),
      c({
        type: k("plan_approval_response"),
        request_id: s()
          .min(1, "must be the request id being responded to")
          .regex(Te, "must be a single-line request id")
          .regex(
            Ye,
            `request id longer than any real one (max ${ke} characters)`,
          ),
        approve: NE(),
        feedback: s().optional(),
      }),
    ]),
  );
function _s(e) {
  return c({
    to: s()
      .regex(Te, "must be a single-line recipient name or address")
      .regex(
        Ms,
        `recipient longer than any listed name or address (max ${us} characters)`,
      )
      .describe(
        e
          ? `Recipient: a name from ${$i} (append its " [ref]" only when a listing or an error shows one), a teammate name, "main", or a background agent's agentId`
          : "Recipient: teammate name",
      ),
    summary: s()
      .max(_Ce)
      .optional()
      .describe(
        e
          ? `A 5-10 word label for your own transcript row (not transmitted \u2014 the recipient previews the first line of \`message\`). Truncated to ${_Ce} characters rather than rejected.`
          : `A 5-10 word summary shown as a one-line preview in the UI. Defaults to the first line of a plain-text message; longer summaries are truncated to ${_Ce} characters rather than rejected.`,
      ),
    message: e ? Ke(ys).default(bs) : Ke(),
    ...(e && {
      notify_when_idle: NE(O().optional()).describe(
        "Ask a session ON THIS MACHINE to send you ONE notice when it next goes idle (finishes its turn with nothing queued) or exits \u2014 opt-in, one-shot, no polling. With a message: deliver it now AND subscribe. Without a message (omit it): a pure subscription that costs the other session nothing.",
      ),
    }),
  });
}
var ws = m(() => _s(!1)),
  Ss = m(() => _s(!0)),
  Ps = m(() => ws().extend({ message: Re() })),
  Us = m(() => Ss().extend({ message: Re(ys).default(bs) }));
function Se() {
  if (Mo()) return zr() ? Ss() : Us();
  return zr() ? ws() : Ps();
}
function he(e) {
  switch (e.reason) {
    case "requester-refuses-inbound":
      return "permission_denied";
    case "no-inbox":
    case "unreachable-namespace":
    case "peer-unsupported":
      return "not_reachable";
    case "self-target":
      return "invalid_target";
    case "peer-gone":
      return "stale_socket";
    case "send-failed":
    case "send-uncertain":
      return e.error !== void 0 ? ge(e.error) : "other";
    case "cap":
      return "subscription_cap";
  }
}
function Je(e, t, p = {}) {
  if (e.ok) return;
  let r =
    e.reason === "send-uncertain" ||
    e.reason === "requester-refuses-inbound" ||
    e.reason === "cap";
  t("uds", r ? void 0 : he(e), { ...(r && { degradedClass: he(e) }), ...p });
}
function Qe({
  input: e,
  plainMessage: t,
  notify: p,
  refusedForPrincipal: r,
  assistantMessage: d,
  toolUseId: _,
  emit: i,
}) {
  if (t.trim().length > 0) return;
  if (Is(e, d, _))
    return (i("uds", "handler_rewrite"), ne(e) ? (r ? $s : qs) : Oe);
  if (!p) {
    if (r) Ce();
    return (i("uds", r ? "permission_denied" : "empty_message"), xs(r));
  }
  return;
}
function ve(e, t) {
  let p = ne(e),
    r = p && (t.agentId !== void 0 || t.teammateContext !== void 0 || Zi());
  return { notify: p && !r, refusedForPrincipal: r };
}
var vs = "message must not be empty";
function Ce() {
  g("cross_session_notify_idle", "subscribe_refused_principal");
}
function Is(e, t, p) {
  if (typeof e.message === "string" && e.message.trim().length > 0) return !1;
  let r = ks(t, p)?.message;
  return (typeof r === "string" && r.trim().length > 0) || ye(e, t, p);
}
function ye(e, t, p) {
  return !ne(e) && jre(ks(t, p)?.notify_when_idle) === !0;
}
function Bs(e, t, p) {
  return ne(e) || ye(e, t, p);
}
function ks(e, t) {
  if (t === void 0 || !Array.isArray(e.message.content)) return;
  let p = e.message.content.find((i) => i.type === "tool_use" && i.id === t);
  if (p === void 0 || p.type !== "tool_use") return;
  let r = p.input;
  if (typeof r !== "object" || r === null) return;
  let d = $Gt(r, { applySplit: Ts() }),
    _ = d !== null && me(d.input) ? d.input : r;
  return {
    message: "message" in _ ? _.message : void 0,
    notify_when_idle: "notify_when_idle" in _ ? _.notify_when_idle : void 0,
  };
}
function xs(e) {
  return { data: { success: !1, message: e ? be : vs } };
}
function ne(e) {
  if (!("notify_when_idle" in e)) return !1;
  return jre(e.notify_when_idle) === !0;
}
var fe =
    "notify_when_idle is only supported for Claude sessions on this machine in this release (not teammates, subagents, Remote Control or cloud sessions).",
  Ls = `
The message was delivered, but no idle subscription was made: ${fe}`;
function Ze(e) {
  return Eg() && Be.test(e);
}
var qs = {
    data: {
      success: !1,
      message:
        "A permission handler emptied this message; nothing was sent, and no idle subscription was made (a blanked delivery is never reinterpreted as a pure subscription \u2014 send notify_when_idle without a message if that is what you want).",
    },
  },
  $s = {
    data: {
      success: !1,
      message:
        "A permission handler emptied this message; nothing was sent, and no idle subscription was made.",
    },
  },
  Oe = {
    data: {
      success: !1,
      message:
        "A permission handler rewrote this call so that nothing was left to send or subscribe; nothing was sent.",
    },
  };
function es(e, t) {
  if (typeof e === "string" && e.trim().length > 0) return;
  return (t(), Oe);
}
var js =
    " Your message was NOT delivered; send it again without notify_when_idle if it should still go.",
  be =
    "notify_when_idle is only available from the main conversation of this session (not from a subagent or teammate).",
  Fs = `
The message was delivered, but no idle subscription was made: ${be}`,
  Hs =
    "No idle subscription was made (only the main conversation can subscribe).",
  Xs = `
The message was delivered, but no idle subscription was made: a permission handler removed notify_when_idle from this call.`,
  Ws =
    "No idle subscription was made (a permission handler removed it from the call).";
function ss(e, t, p, r) {
  if (e) return { model: Fs, display: Hs };
  if (ye(t, p, r))
    return (
      g("cross_session_notify_idle", "subscribe_stripped_by_handler"),
      { model: Xs, display: Ws }
    );
  return;
}
function ts(e, t, p, r) {
  if (e)
    return `
Nothing was subscribed either: ${be}`;
  if (ye(t, p, r))
    return `
Nothing was subscribed either: a permission handler removed notify_when_idle from this call.`;
  return ne(t)
    ? `
Nothing was subscribed either (when a message rides along, the idle subscription is only made after that message is delivered).`
    : "";
}
function Vs(e, t) {
  let p = e.teamContext?.teammates;
  if (!p) return;
  for (let r of Object.values(p))
    if ("name" in r && r.name === t) return r.color;
  return;
}
function Ee(e, t) {
  let p = e.agentContext;
  if (p?.agentType === "teammate" && p.agentName)
    return { from: p.agentName, displayName: p.agentName };
  let r = e.getAppState();
  for (let [_, i] of r.agentNameRegistry)
    if (i === t) return { from: _, displayName: _ };
  let d = r.tasks[t];
  if (hd(d))
    return { from: d.identity.agentName, displayName: d.identity.agentName };
  return { from: t, displayName: nr(d) ? d.agentType : t };
}
var Ie = {
  data: {
    success: !1,
    message:
      "That agent cannot receive messages (it is a background observer, or its status could not be verified).",
  },
};
function Me(e) {
  if (e.agentId) return Ee(e, e.agentId).from;
  return Ip() || (Zi() ? "teammate" : fs);
}
async function Gs(e, t, p, r, d, _) {
  let i = r.getAppState(),
    w = ii(i.teamContext);
  if (!w)
    return {
      data: {
        success: !1,
        message: `No agent named '${e}' is currently addressable. Spawn a new one or use the agent ID.`,
      },
      errorClass: "not_reachable",
    };
  let q = e;
  if (e !== fs || d !== void 0) {
    let o = i.teamContext?.teammates ?? {},
      X =
        d !== void 0 && _ === "team-context" && Object.hasOwn(o, d)
          ? o[d]
          : void 0,
      se = d === void 0 && Object.values(o).some((U) => U.name === e);
    if (X !== void 0) q = X.name;
    else if (d !== void 0 && _ === "team-context")
      return {
        data: {
          success: !1,
          message: `The member this message was resolved to has left team '${w}' \u2014 nothing was sent. Another member may share the same display name '${e}', so a bare re-send could reach someone you did not choose: pick again explicitly with a fresh 'name [ref]', or message the lead.`,
        },
        errorClass: "not_reachable",
      };
    else if (!se) {
      let U = await Pf(w, r.storageV5);
      if (U !== null) {
        let F =
          d !== void 0
            ? nge(U, SU(r.getAppState())).filter((ie) => ie.agentId === d)
            : [];
        if (F.length > 1)
          return {
            data: {
              success: !1,
              message: `The team roster lists the member this message was resolved to more than once \u2014 nothing was sent. Ask the lead to repair team '${w}''s file.`,
            },
            errorClass: "not_reachable",
          };
        let Z = d !== void 0 ? F[0] : zCt(nge(U, SU(r.getAppState())), e);
        if (Z === void 0) {
          if (d !== void 0)
            return {
              data: {
                success: !1,
                message: `The member this message was resolved to has left team '${w}' \u2014 nothing was sent. Another member may share the same display name '${e}', so a bare re-send could reach someone you did not choose: pick again explicitly with a fresh 'name [ref]', or message the lead.`,
              },
              errorClass: "not_reachable",
            };
          return {
            data: {
              success: !1,
              message:
                mc(r.agentContext) < ZS()
                  ? `No teammate named '${e}' is currently on team '${w}'. Spawn one with ${mt}({name: '${e}'}) \u2014 or message the lead to do so.`
                  : `No teammate named '${e}' is currently on team '${w}'. Message the lead to spawn one.`,
            },
            errorClass: "not_reachable",
          };
        }
        q = Z.name;
      } else if (d !== void 0)
        return {
          data: {
            success: !1,
            message: `Couldn't read the roster of team '${w}' to locate the member this message was resolved to \u2014 nothing was sent. Try again, or message the lead.`,
          },
          errorClass: "not_reachable",
        };
    }
  }
  let N = Me(r),
    K = cS(),
    Y = await ag(
      q,
      {
        from: N,
        text: t,
        summary: p,
        timestamp: new Date().toISOString(),
        color: K,
      },
      w,
      r.storageV5,
    );
  if (Y === void 0)
    return {
      data: {
        success: !1,
        message: `Failed to write to ${e}'s inbox \u2014 nothing was sent. Try again, or message the lead.`,
      },
      errorClass: "mailbox_write_failed",
    };
  Nin(r.getAppState().tasks, q, w);
  let W = Vs(i, q);
  return {
    data: {
      success: !0,
      message: `Message sent to ${e}'s inbox`,
      msg_id: Y,
      routing: {
        sender: N,
        senderColor: K,
        target: `@${e}`,
        targetColor: W,
        summary: p,
        content: or(t, 50),
      },
    },
  };
}
async function as(e, t, p, r, d, _) {
  let i = await ag(
    e.identity.agentName,
    {
      from: Me(r),
      text: t,
      summary: p,
      timestamp: new Date().toISOString(),
      color: cS(),
    },
    e.identity.teamName,
    r.storageV5,
  );
  if (i === void 0)
    return {
      data: {
        success: !1,
        message: `Teammate "${d}" is running, but writing to its inbox failed \u2014 nothing was queued. Try again.`,
      },
    };
  return (
    e.retryWake?.emit(),
    {
      data: {
        success: !0,
        message: `Teammate "${d}" is already running; queued your message for its next turn.`,
        msg_id: i,
        ..._,
      },
    }
  );
}
function ns(e) {
  if (e instanceof uM) return "not_reachable";
  if (e instanceof Dee) return "still_stopping";
  if (e instanceof Ou) return "no_transcript";
  return "resume_failed";
}
function Ae(e) {
  return Mb(e) ? oe(e, 7) : e;
}
function os(e, t) {
  return {
    message: cjn,
    inlineHandback: {
      displayName: Ae(e),
      content: t.content,
      harnessNoteCount: t.harnessNoteCount,
      harnessTailCount: t.harnessTailCount,
      harnessSectionHash: t.harnessSectionHash,
    },
  };
}
async function Ys(e, t, p, r) {
  let d = r.getAppState(),
    _ = ii(d.teamContext),
    i = Me(r),
    w = WCt("shutdown", t),
    q = twn({ requestId: w, from: i, reason: p });
  if (
    (await ag(
      e,
      { from: i, text: b(q), timestamp: new Date().toISOString(), color: cS() },
      _,
      r.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message: `Failed to write the shutdown request to ${t}'s inbox \u2014 nothing was sent.`,
        request_id: w,
        target: t,
      },
    };
  if (_) Nin(r.getAppState().tasks, e, _);
  return {
    data: {
      success: !0,
      message: `Shutdown request sent to ${t}. Request ID: ${w}`,
      request_id: w,
      target: t,
    },
  };
}
async function zs(e, t) {
  let p = ii(),
    r = lS(),
    d = Ip() || "teammate";
  n(
    `[SendMessageTool] handleShutdownApproval: teamName=${p}, agentId=${r}, agentName=${d}`,
  );
  let _, i;
  if (p) {
    let Y = await Pf(p, t.storageV5);
    if (Y && r) {
      let W = Y.members.find((o) => o.agentId === r);
      if (W) ((_ = W.tmuxPaneId), (i = W.backendType));
    }
  }
  let w = nwn({ requestId: e, from: d, paneId: _, backendType: i }),
    q = await ag(
      fs,
      { from: d, text: b(w), timestamp: new Date().toISOString(), color: cS() },
      p,
      t.storageV5,
    ),
    N =
      q === void 0
        ? "The confirmation could not be written to team-lead's inbox."
        : "Sent confirmation to team-lead.",
    K = q === void 0 ? { degradedClass: "mailbox_write_failed" } : void 0;
  if (i === "in-process") {
    if (
      (n(
        `[SendMessageTool] In-process teammate ${d} approving shutdown - signaling abort`,
      ),
      r)
    ) {
      let Y = t.getAppState(),
        W = nY(r, Y.tasks);
      if (W?.abortController)
        (W.abortController.abort(),
          n(
            `[SendMessageTool] Aborted controller for in-process teammate ${d}`,
          ));
      else
        n(
          `[SendMessageTool] Warning: Could not find task/abortController for ${d}`,
        );
    }
  } else {
    if (r) {
      let Y = t.getAppState(),
        W = nY(r, Y.tasks);
      if (W?.abortController)
        return (
          n(
            `[SendMessageTool] Fallback: Found in-process task for ${d} via AppState, aborting`,
          ),
          W.abortController.abort(),
          {
            data: {
              success: !0,
              message: `Shutdown approved (fallback path). Agent ${d} is now exiting.`,
              request_id: e,
            },
            ...K,
          }
        );
    }
    setImmediate(async () => {
      await xn(0, "other");
    });
  }
  return {
    data: {
      success: !0,
      message: `Shutdown approved. ${N} Agent ${d} is now exiting.`,
      request_id: e,
    },
    ...K,
  };
}
async function Ks(e, t, p) {
  let r = ii(),
    d = Ip() || "teammate",
    _ = rwn({ requestId: e, from: d, reason: t });
  if (
    (await ag(
      fs,
      { from: d, text: b(_), timestamp: new Date().toISOString(), color: cS() },
      r,
      p.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message:
          "Failed to write the shutdown rejection to team-lead's inbox \u2014 nothing was sent. Try again.",
        request_id: e,
      },
    };
  return {
    data: {
      success: !0,
      message: `Shutdown rejected. Reason: "${or(t, 50)}". Continuing to work.`,
      request_id: e,
    },
  };
}
class De extends Error {
  constructor(e) {
    super(e);
    this.name = "SendMessagePreconditionError";
  }
}
async function Js(e, t, p, r, d) {
  let _ = d.getAppState(),
    i = _.teamContext?.teamName;
  if (!ZC(_.teamContext))
    throw new De(
      "Only the team lead can approve plans. Teammates cannot approve their own or other plans.",
    );
  let w = wut({
      recipientName: e,
      leaderMode: ce(d).mode,
      proactivityLevel: _.proactivityLevel,
      tasks: _.tasks,
    }),
    q = {
      type: "plan_approval_response",
      requestId: p,
      approved: !0,
      ...(r !== void 0 && { feedback: r }),
      timestamp: new Date().toISOString(),
      permissionMode: w,
    };
  if (
    (await ag(
      e,
      { from: fs, text: b(q), timestamp: new Date().toISOString() },
      i,
      d.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message: `Failed to write the plan approval to ${t}'s inbox \u2014 nothing was sent. Try again.`,
        request_id: p,
      },
    };
  return {
    data: {
      success: !0,
      message: `Plan approved for ${t}. They will receive the approval and can proceed with implementation.`,
      request_id: p,
    },
  };
}
async function Qs(e, t, p, r, d) {
  let _ = d.getAppState(),
    i = _.teamContext?.teamName;
  if (!ZC(_.teamContext))
    throw new De(
      "Only the team lead can reject plans. Teammates cannot reject their own or other plans.",
    );
  let w = {
    type: "plan_approval_response",
    requestId: p,
    approved: !1,
    feedback: r,
    timestamp: new Date().toISOString(),
  };
  if (
    (await ag(
      e,
      { from: fs, text: b(w), timestamp: new Date().toISOString() },
      i,
      d.storageV5,
    )) === void 0
  )
    return {
      data: {
        success: !1,
        message: `Failed to write the plan rejection to ${t}'s inbox \u2014 nothing was sent. Try again.`,
        request_id: p,
      },
    };
  return {
    data: {
      success: !0,
      message: `Plan rejected for ${t} with feedback: "${or(r, 50)}"`,
      request_id: p,
    },
  };
}
var rs =
  "Cross-machine messaging is unavailable: it sends the message through Anthropic servers, which is not allowed on a third-party provider or with nonessential traffic disabled. Messages to sessions on this machine still work.";
function is() {
  return Pe() === "firstParty" && !St();
}
function ds() {
  if (OCe()?.live) return;
  if (a.CLAUDE_CODE_REMOTE === !0)
    return pK() === void 0 ? "no-container-address" : void 0;
  return "rc-disconnected";
}
function ls(e) {
  return e === "rc-disconnected"
    ? "Remote Control is not connected"
    : "this session has no reply address";
}
function ms(e) {
  return a.CLAUDE_CODE_REMOTE === !0 && !e && pK() !== void 0
    ? "; note: this session has no name yet, so the receiver can answer only by the address on the message, not by name"
    : "";
}
function Ts() {
  return H("tengu_deep_feather", !0);
}
var cs = Tt({
  name: Vr,
  searchHint: "send messages to agent teammates",
  maxResultSizeChars: 1e5,
  userFacingName() {
    return "SendMessage";
  },
  get inputSchema() {
    return Se();
  },
  coerceInput: (e) => $Gt(e, { applySplit: Ts() }),
  shouldDefer: !0,
  isReadOnly(e) {
    return typeof e.message === "string";
  },
  backfillObservableInput(e) {
    if ("type" in e) return;
    if (typeof e.to !== "string") return;
    if (FGt(e) !== void 0) return;
    let t = e.message ?? "";
    if (typeof t === "string")
      ((e.type = "message"), (e.recipient = e.to), (e.content = or(t, 50)));
    else if (typeof e.message === "object" && e.message !== null) {
      let p = e.message;
      if (((e.type = p.type), (e.recipient = e.to), p.request_id !== void 0))
        e.request_id = p.request_id;
      if (p.approve !== void 0) e.approve = p.approve;
      let r = p.reason ?? p.feedback;
      if (r !== void 0) e.content = or(r, 50);
    }
  },
  toAutoClassifierInput(e) {
    let t = (w, q) => (q ? ` [${w}: ${q}]` : ""),
      p = $Gt(e),
      r = p !== null && me(p.input) ? p.input : void 0,
      d = t(
        "summary",
        r === void 0
          ? e.summary
          : typeof r.summary === "string"
            ? r.summary
            : void 0,
      ),
      i =
        (r !== void 0 && typeof r.message === "string" ? r.message : void 0) ??
        e.message ??
        "";
    if (typeof i === "string") {
      if (ne(e))
        return i.trim().length === 0
          ? `notify when idle: ${e.to}${d}`
          : `to ${e.to}: ${i}${d} [notify when idle]`;
      return `to ${e.to}: ${i}${d}`;
    }
    switch (i.type) {
      case "shutdown_request":
        return `shutdown_request to ${e.to}${t("reason", i.reason)}${d}`;
      case "shutdown_response":
        return `shutdown_response ${i.approve ? "approve" : "reject"} ${i.request_id} to ${e.to}${t("reason", i.reason)}${d}`;
      case "plan_approval_response":
        return `plan_approval ${i.approve ? "approve" : "reject"} ${i.request_id} to ${e.to}${t("feedback", i.feedback)}${d}`;
    }
  },
  async checkPermissions(e, t) {
    if (gie() && !Ze(e.to)) {
      let p = uf(e.to),
        r = p.scheme;
      if (r === "bridge") {
        let d = qNe(t.session, p.target, e.to);
        if (d)
          return (
            de({
              route: "bridge",
              startedAt: Date.now(),
              errorClass: "bridge_auth",
              via: "address",
            }),
            {
              behavior: "deny",
              message: ps(d),
              decisionReason: {
                type: "other",
                reason:
                  "target is an elevated-security session unreachable from a cloud session",
              },
            }
          );
        let _ = $re(t.session, p.target, e.to);
        if (_)
          return (
            de({
              route: "bridge",
              startedAt: Date.now(),
              errorClass: "recipient_gate_off",
              via: "address",
            }),
            {
              behavior: "deny",
              message: ps(_),
              decisionReason: {
                type: "other",
                reason:
                  "target session reports it cannot receive cross-session messages",
              },
            }
          );
        return (
          ue(t, e, null),
          {
            behavior: "ask",
            message: ps(
              `Send a message to Remote Control session ${e.to}? It reaches the receiving Claude (possibly another machine) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`,
            ),
            decisionReason: {
              type: "safetyCheck",
              reason:
                "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
              classifierApprovable: !1,
              circuitBreaker: "isolatePeerMachines",
            },
          }
        );
      }
      if (r === "other") {
        let d;
        try {
          d = await OGe(
            t.session,
            e.to,
            e.message,
            t.getAppState(),
            t.storageV5,
            t.credentials,
          );
        } catch (_) {
          return (
            n(
              `[SendMessage] permission-phase resolve failed (${BU(l(_))}) \u2014 asking`,
              { level: "warn" },
            ),
            ue(t, e, null),
            {
              behavior: "ask",
              message: ps(
                `Send a message to '${e.to}'? Its destination could not be resolved just now, so it is unknown whether this name is a Claude session on another machine (isolatePeerMachines is enabled).`,
              ),
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                classifierApprovable: !1,
                circuitBreaker: "isolatePeerMachines",
              },
            }
          );
        }
        if (d.kind === "cloud-session") {
          if (f2(d.sessionId))
            return {
              behavior: "deny",
              message: ps(SF(e.to, Yb(t))),
              decisionReason: { type: "other", reason: tdt },
            };
          let {
            isRemoteControlPeerUnreachableFromHere: _,
            formatUnreachableElevatedRefusal: i,
          } = import.meta.require("../Bridge-RemoteControl/getTrustedDeviceToken.xdsmf5rh.js");
          if (d.via === "remote-control" && _())
            return (
              de({
                route: "bridge",
                startedAt: Date.now(),
                errorClass: "bridge_auth",
                via: "remote_control_name",
              }),
              {
                behavior: "deny",
                message: ps(i(d.displayName)),
                decisionReason: {
                  type: "other",
                  reason:
                    "target is an elevated-security session unreachable from a cloud session",
                },
              }
            );
          let w = $re(t.session, d.sessionId, d.displayName);
          if (w)
            return (
              de({
                route: "bridge",
                startedAt: Date.now(),
                errorClass: "recipient_gate_off",
                via: d.via === "cloud" ? "cloud_name" : "remote_control_name",
              }),
              {
                behavior: "deny",
                message: ps(w),
                decisionReason: {
                  type: "other",
                  reason:
                    "target session reports it cannot receive cross-session messages",
                },
              }
            );
          return (
            ue(t, e, d),
            {
              behavior: "ask",
              message: ps(
                d.via === "cloud"
                  ? `Send a message to cloud session '${d.displayName}'? It reaches the receiving Claude (running in the cloud) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`
                  : `Send a message to Remote Control session '${d.displayName}'? It reaches the receiving Claude (on another machine) via Anthropic's servers as a cross-session message \u2014 marked as from another Claude session, not from its user.`,
              ),
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
                classifierApprovable: !1,
                circuitBreaker: "isolatePeerMachines",
              },
            }
          );
        }
        if (
          d.kind === "not-found" &&
          (d.cloudUnavailable !== void 0 || d.bridgeUnavailable !== void 0)
        ) {
          ue(t, e, null);
          let _ = [
            d.cloudUnavailable !== void 0
              ? "the cloud session list could not be fetched"
              : void 0,
            d.bridgeUnavailable !== void 0
              ? "the account session list could not be checked"
              : void 0,
          ]
            .filter((i) => i !== void 0)
            .join(" and ");
          return {
            behavior: "ask",
            message: ps(
              `Send a message to '${e.to}'? Just now ${_}, so it is unknown whether this name is a Claude session on another machine (isolatePeerMachines is enabled).`,
            ),
            decisionReason: {
              type: "safetyCheck",
              reason:
                "isolatePeerMachines is enabled \u2014 cross-machine message requires explicit approval",
              classifierApprovable: !1,
              circuitBreaker: "isolatePeerMachines",
            },
          };
        }
        ue(t, e, d);
      }
    }
    if (yg(ce(t).mode))
      return {
        behavior: "passthrough",
        message: "Message to another agent requires classifier review.",
      };
    return { behavior: "allow", updatedInput: e };
  },
  async validateInput(e, t) {
    if (e.to === "*")
      return {
        result: !1,
        message:
          'broadcast (to: "*") is no longer supported \u2014 send a message per recipient',
        errorCode: 9,
      };
    {
      let r = uf(e.to).scheme;
      if ((r === "uds" || r === "bridge") && !Mo())
        return { result: !1, message: NJe, errorCode: 9 };
    }
    if (ne(e)) {
      if (typeof e.message !== "string")
        return {
          result: !1,
          message:
            "notify_when_idle cannot ride a structured message \u2014 send plain text, or omit the message for a pure subscription",
          errorCode: 9,
        };
      if (ve(e, t).refusedForPrincipal && e.message.trim().length === 0)
        return { result: !1, message: be, errorCode: 9 };
      let r = uf(e.to).scheme;
      if (r === "bridge" || r === "did")
        return { result: !1, message: fe, errorCode: 9 };
    }
    let p = GCt(e.to, $i);
    if (p !== void 0) return { result: !1, message: p, errorCode: 9 };
    {
      let r = uf(e.to);
      if (r.scheme === "uds" && Uee(r.target))
        return { result: !1, message: SF(e.to, Yb(t)), errorCode: 9 };
    }
    if (e.to.includes("@"))
      return {
        result: !1,
        message:
          "to must be a bare teammate name \u2014 there is only one team per session",
        errorCode: 9,
      };
    if (
      typeof e.message === "string" &&
      e.message.trim().length === 0 &&
      !ne(e)
    )
      return { result: !1, message: vs, errorCode: 9 };
    if (uf(e.to).scheme === "bridge") {
      if (f2(uf(e.to).target))
        return { result: !1, message: SF(e.to, Yb(t)), errorCode: 9 };
      if (typeof e.message !== "string")
        return {
          result: !1,
          message:
            "structured messages cannot be sent cross-session \u2014 only plain text",
          errorCode: 9,
        };
      return { result: !0 };
    }
    if (uf(e.to).scheme === "uds" && typeof e.message === "string")
      return { result: !0 };
    if (typeof e.message === "string") {
      if (DH(e.message))
        return {
          result: !1,
          message:
            'message text must not be a teammate protocol frame (permission/mode/plan/shutdown JSON) \u2014 to respond to a plan or shutdown request, use the structured object form ({"message": {"type": ...}}); otherwise send plain text',
          errorCode: 9,
        };
      try {
        let r = z(e.message);
        if (
          r !== null &&
          typeof r === "object" &&
          "type" in r &&
          typeof r.type === "string" &&
          [
            "idle_notification",
            "teammate_terminated",
            "task_assignment",
            "task_completed",
            "shutdown_rejected",
          ].includes(r.type)
        )
          return {
            result: !1,
            message:
              "message text must not be a teammate lifecycle/task frame (idle/terminated/task/shutdown JSON) \u2014 send plain text instead",
            errorCode: 9,
          };
      } catch {}
      return { result: !0 };
    }
    if (!zr())
      return {
        result: !1,
        message:
          "Structured team-protocol messages are only available with agent teams enabled.",
        errorCode: 9,
      };
    if (uf(e.to).scheme !== "other")
      return {
        result: !1,
        message:
          "structured messages cannot be sent cross-session \u2014 only plain text",
        errorCode: 9,
      };
    if (e.message.type === "shutdown_response" && e.to !== fs)
      return {
        result: !1,
        message: `shutdown_response must be sent to "${fs}"`,
        errorCode: 9,
      };
    if (
      e.message.type === "shutdown_response" &&
      e.message.approve &&
      e.message.reason !== void 0
    )
      return {
        result: !1,
        message:
          "reason is only delivered on rejections (approve: false) \u2014 approvals are sent as a silent confirmation with no reason text; omit reason or reject instead",
        errorCode: 9,
      };
    if (
      e.message.type === "shutdown_response" &&
      !e.message.approve &&
      (!e.message.reason || e.message.reason.trim().length === 0)
    )
      return {
        result: !1,
        message: "reason is required when rejecting a shutdown request",
        errorCode: 9,
      };
    return { result: !0 };
  },
  async description() {
    return We;
  },
  async prompt() {
    return Ge(zr());
  },
  mapToolResultToToolResultBlockParam(e, t) {
    let p = e;
    if (typeof p !== "object" || p === null || Array.isArray(p))
      throw TypeError("SendMessage output is not an object");
    let {
        display: r,
        inlineHandback: d,
        ..._
      } = { display: void 0, inlineHandback: void 0, ...e },
      i = (w) => b({ success: !0, message: w });
    if (d) {
      if (tde()) {
        let w = h2t(
          d.content,
          d.harnessNoteCount,
          d.harnessTailCount,
          d.harnessSectionHash,
        );
        return {
          tool_use_id: t,
          type: "tool_result",
          content: [
            {
              type: "text",
              text: `${i(ujn)}
${w[0].text}`,
            },
          ],
        };
      }
      return {
        tool_use_id: t,
        type: "tool_result",
        content: [{ type: "text", text: b({ ..._, message: yon(d) }) }],
      };
    }
    return {
      tool_use_id: t,
      type: "tool_result",
      content: [{ type: "text", text: b(_) }],
    };
  },
  async call(e, t, p, r) {
    let d = t.agentId;
    if (d !== void 0 && nH(d))
      throw (
        f("subagent_launch", "send_message_spawner_stop_pending"),
        Error(
          "This agent has been stopped and its stop is still completing; it cannot send messages.",
        )
      );
    let _ = Date.now();
    function i(h, I, D) {
      de({ route: h, startedAt: _, errorClass: I, ...D });
    }
    let w = kPe() ? HPe(ce(t)) : void 0;
    if (d !== void 0 && Agt(t.session, d))
      return (
        i("unresolved", "not_reachable"),
        {
          data: {
            success: !1,
            message:
              "Observers report via ObserverReport, not SendMessage. SendMessage is not available from an observer.",
          },
        }
      );
    if (Ze(e.to)) {
      if (!Mo())
        return (
          i("desktop_host", "not_reachable"),
          { data: { success: !1, message: NJe } }
        );
      let h = !1;
      if (((h = ne(e)), typeof e.message !== "string"))
        return (
          i("desktop_host", "invalid_target"),
          {
            data: {
              success: !1,
              message: `Not sent: a Claude Desktop session takes a plain-text message, not a structured ${e.message.type}.`,
            },
          }
        );
      if (e.message.trim().length === 0) {
        if (Is(e, r, t.toolUseId))
          return (i("desktop_host", "handler_rewrite"), h ? $s : Oe);
        return (
          i("desktop_host", h ? "not_reachable" : "empty_message"),
          {
            data: {
              success: !1,
              message: h
                ? `Nothing was subscribed: ${fe}`
                : "Not sent: the message is empty.",
            },
          }
        );
      }
      let I = je(t);
      if ("kind" in I)
        switch (I.kind) {
          case "unavailable":
            return (
              i("unresolved", "desktop_session_id"),
              {
                data: {
                  success: !1,
                  message: `No agent named '${e.to}' is reachable. It has the shape of a Claude Desktop session id, but Claude Desktop's session messaging tool is not available in this session, so SendMessage cannot deliver to it.`,
                },
              }
            );
          case "loop-paused":
            return (
              i("desktop_host", void 0, { degradedClass: "hop_loop" }),
              {
                data: {
                  success: !1,
                  message: `Not delivered: this session has already messaged Claude Desktop sessions ${I.forwards} times since your user last typed here, which looks like sessions messaging each other automatically. Paused until your user's next message in this session.`,
                },
              }
            );
        }
      let D = d ? Ee(t, d).from : void 0,
        M = d !== void 0 && D !== void 0 ? wge(D, e.message) : e.message,
        E = PGe(d, D, { oneWay: !1 }),
        S = await Fe({
          tool: I.tool,
          sessionId: e.to,
          message: M,
          context: t,
          canUseTool: p,
          assistantMessage: r,
        }),
        B = S.blockedWait ? { blockedWait: !0 } : void 0,
        P = S.attachments.length > 0 ? S.attachments : void 0;
      switch (S.kind) {
        case "sent":
          return (
            i("desktop_host", void 0, B),
            {
              data: {
                success: !0,
                message: `Forwarded to Claude Desktop's session messaging: ${S.detail || "sent."}${E.message}${h ? Ls : ""}`,
              },
              ...(P && { newMessages: P }),
            }
          );
        case "refused":
          return (
            i("desktop_host", "desktop_refused", B),
            {
              data: {
                success: !1,
                message: `Not delivered to Claude Desktop session ${e.to}: ${S.message}`,
              },
              ...(P && { newMessages: P }),
            }
          );
      }
    }
    let q = d ? Ee(t, d) : void 0,
      N = q?.from;
    if (typeof e.message === "string") {
      let h = uf(e.to),
        I = !1;
      if (h.scheme === "bridge" && t.toolUseId) {
        let M = t.toolState.get(pe);
        ((I = M.take(t.toolUseId, Ne(e)) !== void 0),
          M.dropToolUse(t.toolUseId));
      }
      if ((h.scheme === "bridge" || h.scheme === "uds") && !Mo())
        return { data: { success: !1, message: NJe } };
      let D = n8e(h.scheme === "bridge" ? "bridge" : "uds");
      if (h.scheme === "bridge") {
        if (f2(h.target))
          return (
            i("bridge", "invalid_target"),
            {
              data: {
                success: !1,
                message: SF(e.to, Yb(t)),
                display: obe(e.to),
              },
            }
          );
        if (!is()) return { data: { success: !1, message: rs } };
        let {
            postInterClaudeMessage: M,
            isLikelyStaleBridgeError: E,
            classifyBridgeSendError: S,
          } = import.meta.require("../Bridge-RemoteControl/listBridgePeerSessions.g159fp6a.js"),
          B = qNe(t.session, h.target, e.to);
        if (B)
          return (
            i("bridge", "bridge_auth", { via: "address" }),
            { data: { success: !1, message: B } }
          );
        let P = $re(t.session, h.target, e.to);
        if (P)
          return (
            i("bridge", "recipient_gate_off", { via: "address" }),
            { data: { success: !1, message: P } }
          );
        let v = await IGe({
          tool: cs,
          input: e,
          context: t,
          canUseTool: p,
          assistantMessage: r,
          permissionPhaseRan: I,
          recipientLabel: `Remote Control session '${e.to}'`,
          parse: (re) => Se().safeParse(re),
        });
        if (!v.proceed)
          return (
            i(
              "bridge",
              v.reason === "denied" ? "permission_denied" : "handler_rewrite",
              { blockedWait: !0, via: "address" },
            ),
            { data: { success: !1, message: v.message } }
          );
        let x = v.input,
          C = typeof x.message === "string" ? x.message : e.message,
          V = es(C, () => i("bridge", "handler_rewrite", { via: "address" }));
        if (V !== void 0) return V;
        let ee = d !== void 0 && N !== void 0 ? wge(N, C) : C,
          j = ds(),
          L = PGe(d, N, { oneWay: j !== void 0 }),
          J = Aon(abt(t.session, h.target)),
          G = await M(
            h.target,
            ee,
            D,
            void 0,
            Xme(t.messages),
            w,
            t.credentials,
          ),
          te = x.summary || or(C, 50);
        if (G.ok) {
          i("bridge", void 0, {
            via: "address",
            ...(v.asked && { blockedWait: !0 }),
          });
          let re = j
            ? `\u201C${te}\u201D \u2192 ${e.to} (one-way: ${ls(j)}, so the receiver cannot address a reply to this session)`
            : `\u201C${te}\u201D \u2192 ${e.to}${ms(D)}`;
          return {
            data: {
              success: !0,
              message: `${re}${J.message}${L.message}`,
              ...((J.display || L.display) && {
                display: `${re}${J.display}${L.display}`,
              }),
              msg_id: G.msgId,
            },
          };
        }
        i("bridge", S(G.error), {
          via: "address",
          ...(v.asked && { blockedWait: !0 }),
        });
        let ae = E(G.error)
          ? ` \u2014 the peer session may have ended or restarted, so this bridge ID is stale. Call ${$i} to get the current address.`
          : "";
        return {
          data: {
            success: !1,
            message: `Failed to send to ${e.to}: ${G.error ?? "unknown"}${ae}`,
          },
        };
      }
      if (h.scheme === "uds") {
        if (Uee(h.target))
          return (
            i("uds", "invalid_target"),
            {
              data: {
                success: !1,
                message: SF(e.to, Yb(t)),
                display: obe(e.to),
              },
            }
          );
        let { sendToUdsSocket: M, ownMessagingSocket: E } = import.meta.require(
            "../../01-核心基础设施/共享小工具-未细化/listAllLiveSessions.wa1da7x1.js",
          ),
          { subscribeToPeerIdle: S, idleSubscriptionLines: B } =
            import.meta.require("./subscribeToPeerIdle.tk67nd8x.js"),
          { notify: P, refusedForPrincipal: v } = ve(e, t),
          x = e.message.trim().length > 0,
          C = Qe({
            input: e,
            plainMessage: e.message,
            notify: P,
            refusedForPrincipal: v,
            assistantMessage: r,
            toolUseId: t.toolUseId,
            emit: i,
          });
        if (C !== void 0) return C;
        if (v) Ce();
        let V = d !== void 0 && N !== void 0 ? wge(N, e.message) : e.message,
          ee = PGe(d, N, { oneWay: E() === void 0 });
        try {
          let j = x
              ? await M(h.target, V, t.storageV5, D, void 0, Xme(t.messages), w)
              : void 0,
            L = P ? await S(h.target, e.to, t.storageV5, w) : void 0;
          if (j)
            i("uds", void 0, { ...(L && !L.ok && { degradedClass: he(L) }) });
          else if (L) Je(L, i);
          let J = e.summary || or(e.message, 50),
            G = L ? B(e.to, L, $i) : void 0,
            te = [
              ...(j ? [`\u201C${J}\u201D \u2192 ${e.to}${ee.message}`] : []),
              ...(G ? [G.model] : []),
            ],
            ae = G ? void 0 : ss(v, e, r, t.toolUseId);
          return {
            data: {
              success: j !== void 0 || L?.ok === !0,
              message: `${te.join(`
`)}${ae?.model ?? ""}`,
              ...((G || ae || ee.display) && {
                display: [
                  ...(j
                    ? [`\u201C${J}\u201D \u2192 ${e.to}${ee.display}`]
                    : []),
                  ...(G ? [G.display] : ae ? [ae.display] : []),
                ].join(`
`),
              }),
              ...(j && { msg_id: j.msgId }),
            },
          };
        } catch (j) {
          i("uds", ge(j));
          let L = dK(j),
            J = L === "gone" ? BAe($i) : L === "busy" ? bbt(j) : "";
          return {
            data: {
              success: !1,
              message: `Failed to send to ${e.to}: ${l(j)}${J}${ts(v, e, r, t.toolUseId)}`,
            },
          };
        }
      }
    }
    let K = t.toolState.get(pe),
      Y = !1,
      W;
    if (t.toolUseId) {
      let h = K.take(t.toolUseId, Ne(e));
      ((Y = h !== void 0), (W = h ?? void 0), K.dropToolUse(t.toolUseId));
    }
    let o =
      W ??
      (await OGe(
        t.session,
        e.to,
        e.message,
        t.getAppState(),
        t.storageV5,
        t.credentials,
      ));
    if ((o.kind === "local-session" || o.kind === "cloud-session") && !Mo())
      return { data: { success: !1, message: NJe } };
    if (o.kind === "cloud-session" && f2(o.sessionId))
      return (
        i("unresolved", "invalid_target"),
        { data: { success: !1, message: SF(e.to, Yb(t)), display: obe(e.to) } }
      );
    if (o.kind === "local-session" && bPe(o.sock))
      return (
        i("unresolved", "invalid_target"),
        { data: { success: !1, message: SF(e.to, Yb(t)), display: obe(e.to) } }
      );
    if (o.kind === "local-session" && qGe(e.to, o.sock))
      return (
        i("unresolved", void 0, { degradedClass: "claimed_locally" }),
        { data: { success: !1, message: zGe(e.to), display: Kjn(e.to) } }
      );
    if (o.kind === "local-session" && Uee(o.sock))
      return (
        i("unresolved", "invalid_target"),
        { data: { success: !1, message: SF(e.to, Yb(t)), display: obe(e.to) } }
      );
    if (
      Bs(e, r, t.toolUseId) &&
      o.kind !== "local-session" &&
      o.kind !== "ambiguous" &&
      o.kind !== "not-found"
    ) {
      let { idleSelfTargetMessage: h } = import.meta.require(
        "./subscribeToPeerIdle.tk67nd8x.js",
      );
      return (
        i("unresolved", "invalid_target"),
        g(
          "cross_session_notify_idle",
          o.kind === "main"
            ? "subscribe_self_target"
            : "subscribe_refused_target",
        ),
        {
          data: {
            success: !1,
            message: `${o.kind === "main" ? h('"main"') : fe}${typeof e.message !== "string" || e.message.trim().length > 0 ? js : ""}`,
          },
        }
      );
    }
    let X = t.options.tools.some((h) => Kt(h, $i)),
      se = X ? ` (${$i} lists them)` : "";
    if (
      o.kind === "agent-live" ||
      o.kind === "agent-stopped" ||
      o.kind === "agent-evicted"
    ) {
      if (Agt(t.session, o.agentId))
        return (i("unresolved", "not_reachable"), Ie);
      let h;
      try {
        h = await fC(oo(o.agentId), t.storageV5);
      } catch {
        return (i("unresolved", "not_reachable"), Ie);
      }
      if (h?.isObserver) return (i("unresolved", "not_reachable"), Ie);
    }
    if (o.kind === "not-found") {
      let h = typeof e.message === "string" ? EPe(e.to) : "no",
        I = o.closest.some((P) => yr(P.name) === yr(jD(e.to)?.name ?? e.to));
      if (h === "categorical" && !I && TPe(o))
        return (
          i("unresolved", "invalid_target"),
          {
            data: { success: !1, message: SF(e.to, Yb(t)), display: obe(e.to) },
          }
        );
      let D =
          o.closest.length > 0
            ? ` Did you mean: ${o.closest.map((P) => (typeof e.message === "string" && P.where === "in-process" ? bU(P) : P.name)).join(", ")}?`
            : "",
        M =
          typeof e.message === "string" && !0 && X
            ? `Use ${$i} to see everyone you can message.`
            : typeof e.message === "string"
              ? "Check the spelling, or use the agent ID from a background agent's spawn result."
              : "Check the spelling against your team roster.",
        E = "";
      if (o.cloudUnavailable)
        E = `
The cloud session list could not be fetched just now, so cloud sessions were not searched.`;
      let S = "";
      if (o.pinnedIdentityClaimedLocally)
        S += `
Note: earlier in this conversation '${o.pinnedIdentityClaimedLocally}' was confirmed as a session that is NOT on this machine; a session record on this machine now claims that identity, which hides it here \u2014 nothing was sent.${X ? ` ${$i} will not show it while that claim stands.` : ""} A session on this machine impersonating it is suspicious: ask the user.`;
      if (o.bridgeUnavailable)
        S += `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so they were not searched. If '${e.to}' is one, retry${X ? ` (or run ${$i} first)` : ""} \u2014 do not fall back to the send_message connector; it cannot reach these sessions.`;
      let B = "";
      if (o.localUnavailable)
        B = `
The sessions on this machine could not be listed just now, so they were not searched; retry if you meant a session on this machine.`;
      return (
        i(
          "unresolved",
          o.bridgeUnavailable === "timeout" || o.cloudUnavailable === "timeout"
            ? "timeout"
            : o.localUnavailable
              ? "local_unlisted"
              : "not_reachable",
          o.searchTruncated ? { searchTruncated: !0 } : void 0,
        ),
        {
          data: {
            success: !1,
            message: `No agent named '${e.to}' is reachable.${D}${E}${S}${B}${o.searchTruncated ? dPe : ""}${h !== "no" ? wPe(e.to, Yb(t)) : ""}
${M}`,
            display: `Not sent \u2014 no agent named '${e.to}' is reachable.${o.closest.length > 0 ? ` Did you mean: ${o.closest.map((P) => P.name).join(", ")}?` : ""}${o.bridgeUnavailable || o.cloudUnavailable || o.localUnavailable ? ` Note: ${Con(o)} \u2014 it may exist there; a retry searches again.` : ""}${o.searchTruncated ? ` Note: ${Ron} \u2014 it may exist beyond what was searched.` : ""}${o.pinnedIdentityClaimedLocally ? ` ${von(o.pinnedIdentityClaimedLocally)} \u2014 that is suspicious if you did not set it up.` : ""}`,
          },
        }
      );
    }
    if (o.kind === "ambiguous") {
      let h = typeof e.message === "string" ? EPe(e.to) : "no";
      if (h === "categorical" && o.matchedBy === "prefix" && TPe(o))
        return (
          i("unresolved", "invalid_target"),
          {
            data: { success: !1, message: SF(e.to, Yb(t)), display: obe(e.to) },
          }
        );
      let I = Date.now(),
        D = o.candidates.map((G) => `  ${eZe(G, I)}`).join(`
`),
        M =
          o.total > o.candidates.length
            ? `
  \u2026and ${o.total - o.candidates.length} more${X ? ` \u2014 use ${$i} to see them all.` : "."}`
            : "",
        E = Boolean(
          o.bridgeUnavailable || o.cloudUnavailable || o.localUnavailable,
        ),
        S = o.searchTruncated ? dPe : "",
        B = o.searchTruncated ? ` (${Ron})` : "",
        P =
          o.total === 1
            ? o.matchedBy === "prefix"
              ? `No agent is named '${e.to}' exactly. Re-send with the ref to confirm you mean:`
              : E
                ? `'${e.to}' matches one session that could be checked, but not every session could be \u2014 re-send with the ref to confirm you mean:`
                : `'${e.to}' needs a one-time confirm before this send. Re-send with the ref to confirm you mean:`
            : o.matchedBy === "prefix"
              ? `'${e.to}' matches ${o.total} agents by prefix. Re-send with the ref of the one you mean:`
              : `${o.total} agents are named '${e.to}'. Re-send with the ref of the one you mean:`,
        v = "";
      if (o.bridgeUnavailable)
        v += `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so this list may be missing one; if you meant one of them, retry${X ? ` (or run ${$i} first)` : ""}.`;
      if (o.cloudUnavailable)
        v += `
The cloud session list could not be fetched just now, so this list may be missing a cloud session; retry if you meant one.`;
      if (o.localUnavailable)
        v += `
The sessions on this machine could not be listed just now, so this list may be missing one here; retry if you meant a session on this machine.`;
      if (o.pinnedIdentityClaimedLocally)
        v += `
Note: earlier in this conversation '${o.pinnedIdentityClaimedLocally}' was confirmed as a session that is NOT on this machine; a session record on this machine now claims that identity, so nothing was assumed and nothing was sent. ${X ? `${$i} will not show the other session while that claim stands. ` : ""}A session on this machine claiming that identity, that your user did not set up, is suspicious: ask the user before confirming anyone.`;
      let x =
          o.total === 1 &&
          !o.bridgeUnavailable &&
          !o.cloudUnavailable &&
          !o.localUnavailable &&
          !o.pinnedIdentityClaimedLocally
            ? `
e.g. {"to": "${bU(o.candidates[0])}", ...}`
            : "",
        C = o.searchTruncated ? { searchTruncated: !0 } : void 0;
      if (o.bridgeUnavailable === "timeout" || o.cloudUnavailable === "timeout")
        i("unresolved", "timeout", C);
      else if (
        o.bridgeUnavailable === "fetch_failed" ||
        o.cloudUnavailable === "fetch_failed"
      )
        i("unresolved", "not_reachable", C);
      else if (o.localUnavailable) i("unresolved", "local_unlisted", C);
      else if (o.pinnedIdentityClaimedLocally)
        i("unresolved", void 0, { degradedClass: "claimed_locally", ...C });
      else
        i("unresolved", void 0, {
          degradedClass: o.total === 1 ? "confirm_required" : "ambiguous",
          ...C,
        });
      let V = o.candidates[0],
        ee = o.pinnedIdentityClaimedLocally
          ? ` ${von(o.pinnedIdentityClaimedLocally)} \u2014 ask before confirming anyone.`
          : "",
        j = Con(o),
        L = o.candidates.map((G) => `'${G.name}' ${TKt(G.where)}`).join(", "),
        J = `${o.total === 1 ? (o.matchedBy === "prefix" ? `Not sent \u2014 no agent is named '${e.to}' exactly${E ? ` among the sessions that could be checked (${j})` : ""}; asked Claude to confirm it means '${V.name}'.` : o.pinnedIdentityClaimedLocally ? `Not sent \u2014 '${e.to}' needs a confirm before this send.` : E ? `Not sent yet \u2014 '${e.to}' matches '${V.name}', but ${j}; asked Claude to confirm.` : `Not sent \u2014 '${e.to}' needs a one-time confirm before this send; asked Claude to confirm it means '${V.name}'.`) : o.matchedBy === "prefix" ? `Not sent \u2014 '${e.to}' matches ${o.total} agents by prefix (${L}${o.total > o.candidates.length ? ", \u2026" : ""}); asked Claude to pick one.` : `Not sent \u2014 ${o.total} agents are named '${e.to}' (${L}${o.total > o.candidates.length ? ", \u2026" : ""}); asked Claude to pick one.`}${E && o.total !== 1 ? ` Note: ${j}.` : ""}${B}${ee}`;
      return {
        data: {
          success: !1,
          message: `${P}
${D}${M}${x}${v}${S}${h !== "no" ? wPe(e.to, Yb(t)) : ""}`,
          display: J,
        },
      };
    }
    await UTn({ refresh: !0, credentials: t.credentials });
    let U = await ajn({
      session: t.session,
      to: e.to,
      message: e.message,
      resolved: o,
      appState: t.getAppState(),
      agentLifecycle: t.agentLifecycle,
      storageV5: t.storageV5,
      credentials: t.credentials,
    });
    if (U.kind === "rebound") {
      (g("send_message_pin_guard", "rebound"),
        i("unresolved", "not_reachable"));
      let h = `'${U.name}' now resolves to a different agent than it did earlier in this conversation: earlier sends went to [${U.previous.ref}], which this name no longer reaches. Nothing was sent.`,
        I = `Not sent \u2014 '${U.name}' now means a different agent than it did earlier in this conversation; asked Claude to confirm which one it wants.`,
        D = U.previous.id,
        M =
          Mb(D) !== null
            ? "If you need the earlier agent and it is still running, address it by its agent ID from its spawn result."
            : `The earlier recipient is ${pr(D) !== D ? "a Claude session on another machine (cloud or Remote Control)" : _ce}; this name now belongs to an agent in this session.${X ? ` Use ${$i} if you still need that session.` : ""}`;
      if (U.next === void 0) {
        let E = X
          ? `Use ${$i} to see everyone you can message.`
          : "Check the spelling, or use the agent ID from a background agent's spawn result.";
        return {
          data: {
            success: !1,
            message: `${h}
${E}`,
            display: I,
          },
        };
      }
      return {
        data: {
          success: !1,
          message: `${h}
It now resolves to:
  ${eZe(U.next, Date.now())}
To message the new agent, re-send with its ref:
e.g. {"to": "${bU(U.next)}", ...}
${M}`,
          display: I,
        },
      };
    }
    let F = U.pin ? { pin: U.pin } : void 0;
    if (F) y("send_message_pin_guard");
    if (typeof e.message !== "string") {
      let h = o.kind === "mailbox" ? o.recipientName : e.to,
        I = o.kind === "mailbox" ? (o.displayName ?? o.recipientName) : e.to;
      if (t.agentId) {
        let E = t.getAppState().tasks[t.agentId];
        if (nr(E) || t.agentContext?.agentType !== "teammate")
          return (
            i("mailbox", "not_reachable"),
            {
              data: {
                success: !1,
                message:
                  "Structured team-protocol messages (shutdown/plan responses and requests) are acts of the session itself and cannot be sent by a background subagent. Send a plain text message instead.",
              },
            }
          );
      }
      let D = h;
      if (
        o.kind === "mailbox" &&
        o.memberAgentId !== void 0 &&
        e.message.type !== "shutdown_response"
      ) {
        let E = t.getAppState(),
          S = E.teamContext?.teammates ?? {};
        if (
          o.memberIdentitySource === "team-context" &&
          Object.hasOwn(S, o.memberAgentId)
        )
          D = S[o.memberAgentId].name;
        else if (o.memberIdentitySource === "team-context")
          return (
            i("mailbox", "not_reachable"),
            {
              data: {
                success: !1,
                message: `The member this message was resolved to has left team '${ii(E.teamContext) ?? ""}' \u2014 nothing was sent. Another member may share the same display name '${I}'. Check the roster, or message the lead.`,
              },
            }
          );
        else {
          let B = ii(E.teamContext);
          if (B) {
            let P = await Pf(B, t.storageV5);
            if (P === null)
              return (
                i("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `Couldn't read the roster of team '${B}' to locate the member this message was resolved to \u2014 nothing was sent. Try again, or message the lead.`,
                  },
                }
              );
            let v = nge(P, SU(E)).filter((C) => C.agentId === o.memberAgentId);
            if (v.length > 1)
              return (
                i("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `The team roster lists the member this message was resolved to more than once \u2014 nothing was sent. Ask the lead to repair team '${B}''s file.`,
                  },
                }
              );
            let x = v[0];
            if (x === void 0)
              return (
                i("mailbox", "not_reachable"),
                {
                  data: {
                    success: !1,
                    message: `The member this message was resolved to has left team '${B}' \u2014 nothing was sent. Another member may share the same display name '${I}'. Check the roster, or message the lead.`,
                  },
                }
              );
            D = x.name;
          }
        }
      }
      let M;
      try {
        switch (e.message.type) {
          case "shutdown_request":
            M = await Ys(D, I, e.message.reason, t);
            break;
          case "shutdown_response":
            M = e.message.approve
              ? await zs(e.message.request_id, t)
              : await Ks(e.message.request_id, e.message.reason, t);
            break;
          case "plan_approval_response":
            M = e.message.approve
              ? await Js(D, I, e.message.request_id, e.message.feedback, t)
              : await Qs(
                  D,
                  I,
                  e.message.request_id,
                  e.message.feedback ?? "Plan needs revision",
                  t,
                );
            break;
        }
      } catch (E) {
        throw (i("mailbox", "not_reachable"), E);
      }
      return (
        i(
          "mailbox",
          M.data.success ? void 0 : "mailbox_write_failed",
          M.degradedClass ? { degradedClass: M.degradedClass } : void 0,
        ),
        { data: M.data }
      );
    }
    let Z = d !== void 0 && N !== void 0 ? wge(N, e.message) : e.message,
      ie = q ? FT(q.displayName) : "",
      le =
        d !== void 0 && N !== void 0
          ? {
              kind: "peer",
              from: N,
              senderTaskId: d,
              ...(ie && { name: ie }),
              body: HU(lxe, e.message),
            }
          : { kind: "coordinator" };
    switch (o.kind) {
      case "main": {
        if (d === void 0)
          return (
            i("in_process", "not_reachable"),
            {
              data: {
                success: !1,
                message: `You are the main conversation \u2014 "${cp}" addresses you. Send to a named agent instead.`,
              },
            }
          );
        return (
          BS({
            mode: "prompt",
            agentId: ze(),
            value: Z,
            priority: "next",
            origin: le,
            skipSlashCommands: !0,
            isMeta: !0,
            skipAttachments: !0,
          }),
          i("in_process"),
          {
            data: {
              success: !0,
              message: "Message queued for the main conversation's next turn.",
            },
          }
        );
      }
      case "agent-live":
        return (
          lde(o.agentId, Z, t.taskRegistry, { origin: le, isMeta: !0 }),
          i("in_process"),
          {
            data: {
              success: !0,
              message: `Message queued for delivery to ${o.agentName} at its next tool round.`,
              ...F,
            },
          }
        );
      case "agent-stopped-by-user":
        return (
          i("resume", "not_reachable"),
          {
            data: {
              success: !1,
              message: `Agent "${o.agentName}" was stopped by the user and was not resumed. Treat its work as cancelled; only start a new agent for it if the user explicitly asks.`,
            },
          }
        );
      case "agent-stopped":
        try {
          let h = await Eon({
              agentId: o.agentId,
              prompt: Z,
              promptOrigin: le,
              toolUseContext: t,
              canUseTool: p,
              invokingRequestId: r?.requestId,
              parentPromptId: Epe(t.messages, t.agentContext),
            }),
            I = h.inlineHandback !== void 0,
            D = t.getAppState().tasks[o.agentId],
            M = !nr(D) || !D.ownerAgentId || D.ownerAgentId === ze();
          return (
            i("resume", void 0, I ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !0,
                ...(h.inlineHandback
                  ? os(o.agentName, h.inlineHandback)
                  : { message: `Resuming agent ${Ae(o.agentName)}` }),
                ...(!I && M && { resumedAgentId: o.agentId }),
                ...F,
              },
            }
          );
        } catch (h) {
          if (h instanceof y9) {
            let I = lde(o.agentId, Z, t.taskRegistry, {
              origin: le,
              isMeta: !0,
            });
            return (
              i("in_process", I ? void 0 : "not_reachable"),
              {
                data: {
                  success: I,
                  message: I
                    ? `${o.agentName} is already waking; message queued for its next tool round (not delivered if the agent turns out to have been stopped).`
                    : `${o.agentName} is being resumed by another caller and its task record is gone; the message was not delivered. Retry shortly.`,
                  ...(I && F),
                },
              }
            );
          }
          return (
            i("resume", ns(h), Ton(h) ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !1,
                message:
                  h instanceof uM
                    ? l(h)
                    : h instanceof Ou
                      ? `Agent "${o.agentName}" is stopped (${o.status}) and could not be resumed: ${l(h)}`
                      : `Agent "${o.agentName}" was resumed but ${h instanceof Error && h.name === "AbortError" ? "was interrupted" : "failed while running"}: ${l(h)}`,
              },
            }
          );
        }
      case "agent-evicted": {
        let h = o.agentId,
          I = t.toolState.get(hs),
          D = I.get(h);
        if (D) {
          let S = await D,
            B = S ? t.getAppState().tasks[S] : void 0;
          if (B && hd(B)) {
            let P = await as(B, e.message, e.summary, t, o.agentName, F);
            return (
              i("mailbox", P.data.success ? void 0 : "mailbox_write_failed", {
                blockedWait: !0,
              }),
              P
            );
          }
        }
        let M = Promise.withResolvers();
        I.set(h, M.promise);
        let E = null;
        try {
          if (((E = await He(h, t.storageV5)), E)) {
            let P = E.name ?? o.agentName,
              v = E.teamName ?? ii(t.getAppState().teamContext);
            for (let C of Object.values(t.getAppState().tasks))
              if (
                hd(C) &&
                C.status === "running" &&
                (C.identity.resumableAgentId === h ||
                  (C.identity.agentName === P && C.identity.teamName === v))
              ) {
                M.resolve(C.id);
                let V = await as(C, e.message, e.summary, t, o.agentName, F);
                return (
                  i(
                    "mailbox",
                    V.data.success ? void 0 : "mailbox_write_failed",
                  ),
                  V
                );
              }
            let x = await Xe({
              resumableAgentId: h,
              prompt: e.message,
              senderName: N,
              meta: E,
              fallbackName: o.agentName,
              toolUseContext: t,
            });
            return (
              M.resolve(x.taskId),
              i("resume"),
              {
                data: {
                  success: !0,
                  message:
                    x.resumedMessageCount > 0
                      ? `Teammate "${o.agentName}" was not running; resumed it as an in-process teammate with ${x.resumedMessageCount} prior messages and your message as its next prompt.`
                      : `Teammate "${o.agentName}" was not running; resumed it as an in-process teammate (no prior transcript) with your message as its next prompt.`,
                  ...F,
                },
              }
            );
          }
          M.resolve(null);
          let S = await Eon({
              agentId: h,
              prompt: Z,
              promptOrigin: le,
              toolUseContext: t,
              canUseTool: p,
              invokingRequestId: r?.requestId,
              parentPromptId: Epe(t.messages, t.agentContext),
            }),
            B = S.inlineHandback !== void 0;
          return (
            i("resume", void 0, B ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !0,
                ...(S.inlineHandback
                  ? os(o.agentName, S.inlineHandback)
                  : { message: `Resuming agent ${Ae(o.agentName)}` }),
                ...(B ? {} : { resumedAgentId: h }),
                ...F,
              },
            }
          );
        } catch (S) {
          return (
            M.resolve(null),
            i("resume", ns(S), Ton(S) ? { blockedWait: !0 } : void 0),
            {
              data: {
                success: !1,
                message:
                  S instanceof uM
                    ? l(S)
                    : E
                      ? `Failed to resume teammate "${o.agentName}": ${l(S)}`
                      : S instanceof Ou &&
                          S.transcriptMissing &&
                          Mb(o.agentName) !== null
                        ? `Agent "${o.agentName}" could not be resumed: ${l(S)}. If you read this id in a message from another Claude Code process (e.g. the lead's subagent, seen from a teammate pane), it never ran in this session \u2014 reply through "${fs}" or the session that sent it instead of the raw id.`
                        : S instanceof Ou
                          ? `Agent "${o.agentName}" could not be resumed: ${l(S)}`
                          : `Agent "${o.agentName}" was resumed but ${S instanceof Error && S.name === "AbortError" ? "was interrupted" : "failed while running"}: ${l(S)}`,
              },
            }
          );
        } finally {
          I.delete(h);
        }
      }
      case "local-session": {
        let { sendToUdsSocket: h, ownMessagingSocket: I } = import.meta.require(
            "../../01-核心基础设施/共享小工具-未细化/listAllLiveSessions.wa1da7x1.js",
          ),
          D = h9t(),
          { subscribeToPeerIdle: M, idleSubscriptionLines: E } =
            import.meta.require("./subscribeToPeerIdle.tk67nd8x.js"),
          { notify: S, refusedForPrincipal: B } = ve(e, t),
          P = Qe({
            input: e,
            plainMessage: e.message,
            notify: S,
            refusedForPrincipal: B,
            assistantMessage: r,
            toolUseId: t.toolUseId,
            emit: i,
          });
        if (P !== void 0) return P;
        if (B) Ce();
        if (S && e.message.trim().length === 0) {
          let v = await M(o.sock, o.displayName, t.storageV5, w),
            x = v.ok || v.reason === "send-uncertain";
          if (x)
            XSe(t.setAppState, o.displayName, { kind: "session", id: o.sock });
          Je(v, i, {
            ...(o.exactUnique && { exactUnique: !0 }),
            ...(o.previouslyPinned && { previouslyPinned: !0 }),
            ...(o.searchTruncated && { searchTruncated: !0 }),
          });
          let C = x ? ENt(o, se, "live session", "subscription") : "",
            V = x ? ANt(o, "live session", "subscription") : "",
            { model: ee, display: j } = E(o.displayName, v, $i),
            L = !v.ok && v.reason === "peer-gone";
          return {
            data: {
              success: v.ok,
              message: L
                ? ee
                : `${ee} (${o.displayName} is ${_ce}${uPe(o)})${C}`,
              display: L ? j : `${j} (${_ce}${uPe(o)})${V}`,
            },
          };
        }
        try {
          let { msgId: v } = await h(
              o.sock,
              Z,
              t.storageV5,
              D,
              void 0,
              Xme(t.messages),
              w,
            ),
            x = S ? await M(o.sock, o.displayName, t.storageV5, w) : void 0,
            C = x ? E(o.displayName, x, $i) : void 0,
            V = C ? void 0 : ss(B, e, r, t.toolUseId),
            ee = C
              ? `
${C.model}`
              : (V?.model ?? "");
          (XSe(t.setAppState, o.displayName, { kind: "session", id: o.sock }),
            i("uds", void 0, {
              ...(o.exactUnique && { exactUnique: !0 }),
              ...(o.previouslyPinned && { previouslyPinned: !0 }),
              ...(o.searchTruncated && { searchTruncated: !0 }),
              ...(x && !x.ok && { degradedClass: he(x) }),
            }));
          let j = e.summary || or(e.message, 50),
            L = PGe(d, N, { oneWay: I() === void 0 }),
            J = uPe(o),
            G = ENt(o, se);
          return {
            data: {
              success: !0,
              message: `\u201C${j}\u201D \u2192 ${o.displayName} (${_ce}${J}${L.message})${G}${ee}`,
              display: `\u201C${j}\u201D \u2192 sent to ${o.displayName} \u2014 ${_ce}${J}${L.display}${ANt(o)}${
                C
                  ? `
${C.display}`
                  : V
                    ? `
${V.display}`
                    : ""
              }`,
              msg_id: v,
            },
          };
        } catch (v) {
          let x = A(v);
          i("uds", ge(v), {
            ...(o.exactUnique && { exactUnique: !0 }),
            ...(o.previouslyPinned && { previouslyPinned: !0 }),
            ...(o.searchTruncated && { searchTruncated: !0 }),
          });
          let C = dK(v),
            V =
              C === "gone"
                ? ` \u2014 that session may have just exited.${X ? ` Call ${$i} to see who is reachable now.` : ""}`
                : C === "busy"
                  ? V3t(v)
                    ? " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same name shortly."
                    : " \u2014 the session is alive but momentarily busy. Retry the same name shortly."
                  : $Ae(v) || UAe(v)
                    ? `: ${l(v)}`
                    : "";
          return {
            data: {
              success: !1,
              message: `Failed to send to ${o.displayName}${x ? ` (${x})` : ""}${V || "."}${ts(B, e, r, t.toolUseId)}`,
            },
          };
        }
      }
      case "cloud-session": {
        if (!is()) return { data: { success: !1, message: rs } };
        let h = o.via === "cloud" ? "cloud session" : "Remote Control session",
          I = o.via === "cloud" ? "cloud_name" : "remote_control_name",
          {
            postInterClaudeMessage: D,
            isLikelyStaleBridgeError: M,
            classifyBridgeSendError: E,
          } = import.meta.require("../Bridge-RemoteControl/listBridgePeerSessions.g159fp6a.js"),
          {
            isRemoteControlPeerUnreachableFromHere: S,
            formatUnreachableElevatedRefusal: B,
          } = import.meta.require("../Bridge-RemoteControl/getTrustedDeviceToken.xdsmf5rh.js");
        if (o.via === "remote-control" && S())
          return (
            i("bridge", "bridge_auth", { via: I }),
            { data: { success: !1, message: B(o.displayName) } }
          );
        let P = $re(t.session, o.sessionId, o.displayName);
        if (P)
          return (
            i("bridge", "recipient_gate_off", { via: I }),
            { data: { success: !1, message: P } }
          );
        let v = await IGe({
          tool: cs,
          input: e,
          context: t,
          canUseTool: p,
          assistantMessage: r,
          permissionPhaseRan: Y,
          recipientLabel: `${h} '${o.displayName}'`,
          parse: (_e) => Se().safeParse(_e),
        });
        if (!v.proceed)
          return (
            i(
              "bridge",
              v.reason === "denied" ? "permission_denied" : "handler_rewrite",
              { blockedWait: !0, via: I },
            ),
            { data: { success: !1, message: v.message } }
          );
        let x = v.input,
          C = typeof x.message === "string" ? x.message : e.message,
          V = es(C, () => i("bridge", "handler_rewrite", { via: I }));
        if (V !== void 0) return V;
        let ee = x === e ? Z : d !== void 0 && N !== void 0 ? wge(N, C) : C,
          j = _9t(),
          L = await D(
            o.sessionId,
            ee,
            j,
            void 0,
            Xme(t.messages),
            w,
            t.credentials,
          ),
          J = x.summary || or(C, 50);
        if (
          (i("bridge", L.ok ? void 0 : E(L.error), {
            via: I,
            ...(v.asked && { blockedWait: !0 }),
            ...(o.exactUnique && { exactUnique: !0 }),
            ...(o.previouslyPinned && { previouslyPinned: !0 }),
            ...(o.searchTruncated && { searchTruncated: !0 }),
          }),
          !L.ok)
        ) {
          let _e = M(L.error)
            ? ` \u2014 that ${h} may have ended${o.via === "cloud" ? " or been archived" : " or disconnected"}.${X ? ` Call ${$i} to see who is reachable now.` : ""}`
            : "";
          return {
            data: {
              success: !1,
              message: `Failed to send to ${o.displayName}: ${L.error ?? "unknown"}${_e}`,
            },
          };
        }
        XSe(t.setAppState, o.displayName, { kind: o.refKind, id: o.sessionId });
        let G = ENt(o, se, "agent"),
          te = ds(),
          ae = Cut(o),
          re = PGe(d, N, { oneWay: o.via === "cloud" || te !== void 0 }),
          Ue = Aon(
            o.via === "remote-control" &&
              !o.reportsInbound &&
              !o.inboundReportUnavailable,
          ),
          Ns =
            o.via === "cloud"
              ? "; one-way for now: a cloud session cannot message other sessions back yet \u2014 do not ask it to reply here; its response appears in its own transcript at claude.ai/code"
              : te
                ? `; one-way: ${ls(te)}, so the receiver cannot address a reply to this session`
                : ms(j);
        return {
          data: {
            success: !0,
            message: `\u201C${J}\u201D \u2192 ${o.displayName} (${Aut(o.via)}${Ue.message}${Ns}${ae}${re.message})${G}`,
            display: `\u201C${J}\u201D \u2192 sent to ${o.displayName} \u2014 ${o.via === "cloud" ? "a cloud session (can't reply yet)" : `a session on another machine via Remote Control${te ? ` (one-way: ${te === "rc-disconnected" ? "Remote Control is not connected here" : "no reply address here"})` : ""}`}${Ue.display}${ae}${re.display}${ANt(o, "agent")}`,
            msg_id: L.msgId,
          },
        };
      }
      case "mailbox": {
        let { data: h, errorClass: I } = await Gs(
          o.recipientName,
          e.message,
          e.summary,
          t,
          o.memberAgentId,
          o.memberIdentitySource,
        );
        return (i("mailbox", h.success ? void 0 : (I ?? "other")), { data: h });
      }
    }
  },
  extractSearchText(e) {
    return djn(e);
  },
  renderToolUseMessage(e) {
    if (
      typeof e.to === "string" &&
      e.to.startsWith("did:") &&
      typeof e.message === "string"
    ) {
      let t = (_) =>
          t5(_)
            .replace(/[\s\u2800]+/g, " ")
            .trim(),
        p = t(e.message),
        r = iB(p),
        d =
          r > 200
            ? `${oz(p).slice(0, 200).join("")}\u2026 [${r} chars total]`
            : p;
      return ps(`${t(e.to)} \u2190 "${d}"`);
    }
    if (typeof e.message !== "object" || e.message === null) return null;
    if (e.message.type === "plan_approval_response")
      return e.message.approve
        ? `approve plan from: ${e.to}`
        : `reject plan from: ${e.to}`;
    return null;
  },
});
export { cs as SendMessageTool };

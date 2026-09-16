// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { SB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i, qs } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u, we } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, f, g, ki, wn, ul } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { dt, ge, l, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Jlr } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { bn } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { wr, ff, sd } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import { Gu } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { Ui, mXe } from "./chunk-ajtn749s.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import { bK, gXe, hXe } from "./chunk-hh8f1qrw.js";
import { V$, Aa, vm, K$ } from "./chunk-7s6mt1vg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { _se, brr, rt, Tn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p7jm635c.js";
import {
  Xf,
  xn,
  wM,
  pDe,
  qwe,
  xue,
  Hue,
  kdn,
  hDe,
  zwe,
  aX,
  Gte,
  Vwe,
  mV,
  UF,
  TM,
  Tmt,
  tC,
  Emt,
  xy,
  P2,
  fu,
  c$,
  D3,
  iyt,
  vgn,
  T5e,
  gl,
  Ql,
  dY,
  TEe,
  r7n,
  eD,
  tD,
  _H,
  AEe,
  Ph,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../MCP客户端/chunk-3kmsshb6.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
import { dle, jB, n9e, f0e } from "./chunk-q8w2zntw.js";
import {
  ZPt,
  eOt,
  z8,
  c0e,
  SUn,
  ek,
  pen,
  ZWe,
  e9e,
  t9e,
  u0e,
} from "./chunk-akd9b588.js";
import { Gb, bv } from "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import { un, Kb, xle, ys, di } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import {
  Dae,
  Lae,
  NNn,
  FNn,
  $Nn,
  UNn,
  BNn,
  jNn,
  WNn,
  GNn,
  t6e,
  qNn,
  zNn,
  VNn,
  Rot,
} from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import { JB } from "./chunk-bh1q9esj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { Dn, kn, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import {
  np,
  Xc,
  Qp,
  $g,
  Ul,
  jI,
  Bn,
  J3,
  XSt,
  Lu,
  $y,
  xi,
  Ug,
  bC,
} from "./chunk-33bdfgmx.js";
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
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
F();
import { join as ce, relative as De, resolve as Fe } from "path";
async function ee(a, o, s) {
  if (o instanceof Ui) await ul(a, "command_source_refused");
  else await wn(a, s);
  await xle();
}
function Le(a, o, s, d = 0) {
  let c = a - o.length - s.length,
    p = [];
  if (o.length > 0) p.push(hXe(o.length, o));
  if (s.length > 0) p.push(vgn(s.length, s));
  if (d > 0)
    p.push(
      `${d} ${x(d, "marketplace")} skipped (nothing to refresh: declared in settings, managed, or not allowed)`,
    );
  return { messages: p, summary: Be(c, o.length, s.length) };
}
function Be(a, o, s) {
  let d = iyt({ failedCount: s, updatedCount: a, policyRefusedCount: o }),
    c =
      s > 0
        ? a > 0
          ? `Updated ${a} ${x(a, "marketplace")}, but not all`
          : "No marketplaces were updated"
        : a > 0
          ? `Successfully updated ${a} ${x(a, "marketplace")}`
          : o > 0
            ? "No marketplaces were updated"
            : "No marketplaces needed updating";
  return d === null ? c : `${d} ${c}`;
}
function Z(a, o) {
  if (a instanceof Ui)
    return (n(`${o} refused: ${a.message}`), un(ff(a.message)));
  (n(`Failed to ${o}: ${l(a)}`, { level: "error" }),
    un(ff(`${L.cross} Failed to ${o}: ${l(a)}`)));
}
function de(a) {
  let o = [];
  if (a.errors.length > 0)
    (o.push(
      `${L.cross} Found ${a.errors.length} ${x(a.errors.length, "error")}:`,
      "",
    ),
      a.errors.forEach((s) => {
        o.push(`  ${L.pointer} ${s.path}: ${s.message}`);
      }),
      o.push(""));
  if (a.warnings.length > 0)
    (o.push(
      `${L.warning} Found ${a.warnings.length} ${x(a.warnings.length, "warning")}:`,
      "",
    ),
      a.warnings.forEach((s) => {
        o.push(`  ${L.pointer} ${s.path}: ${s.message}`);
      }),
      o.push(""));
  if (a.notes !== void 0)
    (a.notes.forEach((s) => {
      o.push(`  ${L.pointer} ${s}`);
    }),
      o.push(""));
  return o;
}
async function na(a, o, s) {
  if (s.cowork) SB(!0);
  let d;
  try {
    d = await ZWe(o);
  } catch (C) {
    if (Rt(C))
      n(`Plugin validation failed for ${o}: ${l(C)}`, { level: "error" });
    else h(C);
    return (
      console.error(
        `${L.cross} Unexpected error during validation: ${ek(l(C), 200)}`,
      ),
      await wn("cli_plugin_validate", "cli_plugin_validate_exception"),
      ys(2)
    );
  }
  let { manifest: c, contents: p } = d,
    { allSuccess: k, noErrors: w, hasWarnings: v } = SUn(c ? [c, ...p] : p, s),
    P = () =>
      k
        ? ki("cli_plugin_validate")
        : ul("cli_plugin_validate", "cli_plugin_validate_failed");
  if (s.json)
    return (
      await Kb(
        ne(je(d, { success: k, strict: s.strict === !0 })) +
          `
`,
      ),
      await P(),
      ys(k ? 0 : 1)
    );
  let R = c
    ? [`Validating ${c.fileType} manifest: ${c.filePath}`, "", ...de(c)]
    : [`Validating components in: ${d.resolvedPath}`, ""];
  for (let C of p)
    (R.push(`Validating ${C.fileType}: ${C.filePath}`, ""), R.push(...de(C)));
  if (k)
    R.push(
      v
        ? `${L.tick} Validation passed with warnings`
        : `${L.tick} Validation passed`,
    );
  else if (w && v)
    R.push(`${L.cross} Validation failed (--strict treats warnings as errors)`);
  else R.push(`${L.cross} Validation failed`);
  return (
    await bv(await a(), e(t, { children: X(R) })),
    await P(),
    ys(k ? 0 : 1)
  );
}
async function aa(a, o, s) {
  let d = await e9e(o ?? ".", { force: s.force }),
    c = [];
  for (let C of d.warnings) c.push(`${L.warning} ${C}`);
  if (!d.ok) {
    (f("cli_plugin_tag", "cli_plugin_tag_prepare_failed"),
      c.push(`${L.cross} ${d.error}`),
      z(a, c, 1));
    return;
  }
  let { plan: p } = d;
  if (
    (c.push(
      `Plugin:  ${p.pluginName}`,
      `Version: ${p.version} (from ${p.versionFrom})`,
    ),
    p.marketplace)
  )
    c.push(
      `Marketplace entry: plugins[${p.marketplace.entryIndex}] in ${p.marketplace.path}` +
        (p.marketplace.entryVersion
          ? ` (version: ${p.marketplace.entryVersion})`
          : ""),
    );
  c.push(`Tag:     ${p.tag}`, "");
  let k = s.remote ?? "origin",
    w = s.force ?? !1,
    v = u0e(p, s.message),
    P = `git -C ${p.gitRoot} push ${w ? "--force " : ""}${k} refs/tags/${p.tag}`;
  if (s.dryRun) {
    (y("cli_plugin_tag"),
      c.push(
        `${L.tick} Dry run \u2014 would create tag ${p.tag} at HEAD in ${p.gitRoot}`,
        `  git -C ${p.gitRoot} tag ${w ? "-f " : ""}-a ${p.tag} -m ${b(v)}`,
        `  ${P}`,
      ),
      z(a, c, 0));
    return;
  }
  let R = await t9e(p, {
    push: s.push ?? !1,
    force: w,
    message: s.message,
    remote: k,
  });
  if (!R.ok) {
    (f("cli_plugin_tag", "cli_plugin_tag_create_failed"),
      c.push(`${L.cross} ${R.error}`),
      z(a, c, 1));
    return;
  }
  if ((y("cli_plugin_tag"), c.push(`${L.tick} Created tag ${p.tag}`), R.pushed))
    c.push(`${L.tick} Pushed to ${k}`);
  else c.push(`  Push with: ${P}`);
  z(a, c, 0);
}
function z(a, o, s) {
  (a.render(e(Gb, { children: e(t, { children: X(o) }) })),
    a.waitUntilExit().then(() => process.exit(s)));
}
async function ta(a, o, s, d) {
  let c = [],
    p = qNn(o);
  if (p) {
    (f("cli_plugin_init", "invalid_name"),
      c.push(`${L.cross} Invalid plugin name "${o}": ${p}`),
      z(a, c, 1));
    return;
  }
  let k = [];
  for (let D of s.with ?? [])
    if (t6e.includes(D)) k.push(D);
    else {
      (f("cli_plugin_init", "invalid_component"),
        c.push(
          `${L.cross} Unknown --with component "${D}". Valid: ${t6e.join(", ")}`,
        ),
        z(a, c, 1));
      return;
    }
  if (!bK()) {
    (f("cli_plugin_init", "policy_blocked"),
      c.push(`${L.cross} ${gXe(Gu(ce(be(), "skills")))}`),
      z(a, c, 1));
    return;
  }
  let w = ce(be(), "skills"),
    v = ce(w, o);
  if (De(w, Fe(v)).startsWith("..")) {
    (f("cli_plugin_init", "invalid_name"),
      c.push(`${L.cross} Plugin name "${o}" would write outside ${Gu(w)}`),
      z(a, c, 1));
    return;
  }
  let P = s.author ?? (await brr()),
    R = s.authorEmail ?? (await _se());
  if (!P && s.authorEmail)
    c.push(
      `${L.warning} --author-email was ignored because no author name was found. Pass --author or set git config user.name.`,
    );
  let C = P ? (R ? { name: P, email: R } : { name: P }) : void 0,
    N = zNn({ name: o, description: s.description, author: C, with: k }),
    A;
  try {
    let D = await VNn(v, N, { force: s.force });
    if (!D.ok) {
      (f("cli_plugin_init", "target_exists"),
        c.push(`${L.cross} ${D.error}`),
        z(a, c, 1));
      return;
    }
    A = D.skipped;
  } catch (D) {
    (f("cli_plugin_init", "write_failed"),
      h(D),
      c.push(`${L.cross} Failed to write scaffold: ${l(D)}`),
      z(a, c, 1));
    return;
  }
  for (let D of A) c.push(`  kept existing ${D} (use --force to overwrite)`);
  let m = await pen(v);
  if (!m.success || m.warnings.length > 0) c.push(...de(m));
  if (!m.success) {
    (f("cli_plugin_init", "self_validate_failed"), z(a, c, 1));
    return;
  }
  y("cli_plugin_init");
  let H = `${o}@${Xc}`;
  c.push(`${L.tick} Created plugin "${o}" at ${Gu(v)}`);
  let E = bn().enabledPlugins ?? {},
    B = Xf()?.has(o) ?? !1,
    Y = await Ql(d),
    T = Object.keys(E).find((D) => {
      let J = Bn(D);
      return (
        J.name === o &&
        J.marketplace !== void 0 &&
        J.marketplace !== $g &&
        !Ul(J.marketplace) &&
        Y[J.marketplace] !== void 0
      );
    }),
    O = E[H] === !1;
  if (B)
    c.push(
      `  ${L.warning} A plugin named "${o}" is locked by managed settings, which takes precedence \u2014 ${H} won't load. To load this copy, give it a different "name" in .claude-plugin/plugin.json.`,
    );
  else if (T)
    c.push(
      `  ${L.warning} The name "${o}" is already taken by ${T} \u2014 when that plugin loads, ${H} won't. To load this copy, give it a different "name" in .claude-plugin/plugin.json or uninstall the conflicting plugin.`,
    );
  else if (O) {
    let D = Aa("plugin enable", H);
    c.push(
      `  ${L.warning} A disabled setting for ${H} exists, so it won't load until you re-enable it${D ? `: ${D}` : " in /plugin"}`,
    );
  } else
    c.push(
      `  It will auto-load next session as ${H}. Run /reload-plugins to load it now.`,
    );
  let U = Aa("plugin disable", H);
  (c.push(
    `  ${U ? `Disable: ${U}. ` : "Disable: in /plugin. "}Remove: delete the directory.`,
  ),
    z(a, c, 0));
}
async function ra(a, o, s, d) {
  if (o.cowork) SB(!0);
  (Rot(), i("tengu_plugin_list_command", {}));
  let c = await tD(s),
    { getPluginEditableScopes: p, editableScopeOf: k } =
      await import("./getPluginEditableScopes.ccxx4mv7.js"),
    w = p(),
    v = Object.keys(c.plugins);
  await qwe();
  let { enabled: P, disabled: R, errors: C, warnings: N } = await Ph(s, d),
    A = [...P, ...R],
    m = new Map(A.map((T) => [T.source, T])),
    H = { plugins: A, errors: C, warnings: N },
    E = [
      {
        header: "Session-only plugins (--plugin-dir / --plugin-url):",
        scopeOf: () => "session",
        standaloneErrorScope: "session",
        standaloneWarningScope: "session",
        pathOf: (T) => T.path,
        showScope: !1,
        ...ue(np, H),
      },
      {
        header: `Synced from claude.ai${mXe() ? "" : " \u2014 sync is off in this shell; these load only in a synced session"}:`,
        scopeOf: () => "synced",
        standaloneErrorScope: "synced",
        standaloneWarningScope: "synced",
        pathOf: (T) => T.path,
        showScope: !1,
        ...ue(Qp, H),
      },
      {
        header: "Skills-directory plugins (.claude/skills/*):",
        scopeOf: (T) => T.scope ?? "user",
        standaloneErrorScope: "user",
        standaloneWarningScope: "project",
        pathOf: AEe,
        showScope: !0,
        ...ue(Xc, H),
      },
    ];
  if (o.json) {
    let T = [];
    for (let U of v.sort()) {
      let D = c.plugins[U];
      if (!D || D.length === 0) continue;
      let J = m.get(U),
        W = J?.name ?? Bn(U).name,
        G = C.filter((V) => z8(V, U, W)).map(vm),
        K = N.filter((V) => z8(V, U, W)).map(K$);
      for (let V of D) {
        let q;
        if (J) {
          let I =
            J.mcpServers ||
            (await wM(J, void 0, s, void 0, { readOnlyListing: !0 }));
          if (I && Object.keys(I).length > 0) q = I;
        }
        T.push({
          id: U,
          version: V.version || "unknown",
          scope: V.scope,
          enabled: k(w, U) !== void 0,
          installPath: V.installPath,
          installedAt: V.installedAt,
          lastUpdated: V.lastUpdated,
          projectPath: V.projectPath,
          mcpServers: q,
          errors: G.length > 0 ? G : void 0,
          notes: K.length > 0 ? K : void 0,
        });
      }
    }
    for (let U of E) T.push(...(await Ue(U, s)));
    let O;
    if (o.available) {
      let U = [];
      try {
        let [D, J] = await Promise.all([gl(s), c0e(s)]),
          { marketplaces: W } = await D3(D, s);
        for (let { name: G, data: K } of W)
          if (K)
            for (let V of K.plugins) {
              let q = c$(V.name, G);
              if (!_H(q))
                U.push({
                  pluginId: q,
                  name: V.name,
                  description: V.description,
                  marketplaceName: G,
                  version: V.version,
                  source: V.source,
                  installCount: J?.get(q),
                });
            }
      } catch {}
      O = ne({ installed: T, available: U });
    } else O = ne(T);
    (y("cli_plugin_list"),
      await Kb(
        O +
          `
`,
      ));
    return;
  }
  let B = [];
  if (v.length === 0 && !E.some(Re))
    B.push(
      "No plugins installed. Use `claude plugin install` to install a plugin.",
    );
  if (v.length > 0) B.push("Installed plugins:", "");
  for (let T of v.sort()) {
    let O = c.plugins[T];
    if (!O || O.length === 0) continue;
    let U = m.get(T)?.name ?? Bn(T).name,
      D = C.filter((W) => z8(W, T, U)),
      J = N.filter((W) => z8(W, T, U));
    for (let W of O) {
      let G = k(w, T) !== void 0,
        K =
          D.length > 0
            ? `${L.cross} failed to load`
            : G
              ? `${L.tick} enabled`
              : `${L.cross} disabled`,
        V = W.version || "unknown",
        q = W.scope;
      (B.push(`  ${L.pointer} ${T}`),
        B.push(`    Version: ${V}`),
        B.push(`    Scope: ${q}`),
        B.push(`    Status: ${K}`));
      for (let I of D) B.push(`    Error: ${vm(I)}`);
      for (let I of J) B.push(`    Note: ${K$(I)}`);
      B.push("");
    }
  }
  for (let T of E) B.push(...He(T));
  y("cli_plugin_list");
  let Y = await a();
  await bv(Y, e(t, { children: X(B) }));
}
function pe(_a) {
  let Te = _(4),
    { promise: wa } = _a,
    fe = kn(wa),
    te;
  if (Te[0] !== fe) ((te = X(fe)), (Te[0] = fe), (Te[1] = te));
  else te = Te[1];
  let Ce;
  if (Te[2] !== te)
    ((Ce = e(Gb, { children: e(t, { children: te }) })),
      (Te[2] = te),
      (Te[3] = Ce));
  else Ce = Te[3];
  return Ce;
}
async function ia(a, o, s, d, c) {
  if (s.cowork) SB(!0);
  if (s.claudeai) {
    if (s.sparse !== void 0 || s.scope !== void 0)
      return un(
        `${L.cross} --claudeai takes only the marketplace name (no --sparse or --scope: a claude.ai marketplace is hosted for your account, not declared in settings)`,
      );
    await Ne(a, o, d, c);
    return;
  }
  let p, k, w;
  try {
    let P = await pDe(o);
    if (!P)
      return (
        await wn("cli_marketplace_add", "cli_marketplace_add_invalid_source"),
        di(
          `${L.cross} Invalid marketplace source format. Try: owner/repo, https://..., or ./path`,
        )
      );
    if ("error" in P)
      return (
        await wn("cli_marketplace_add", "cli_marketplace_add_parse_failed"),
        di(`${L.cross} ${P.error}`)
      );
    if (
      ((w = s.scope ?? "user"),
      w !== "user" && w !== "project" && w !== "local")
    )
      return un(
        `${L.cross} Invalid scope '${w}'. Use: user, project, or local`,
      );
    if (((k = bC(w)), (p = P), s.sparse && s.sparse.length > 0))
      if (p.source === "github" || p.source === "git")
        p = { ...p, sparsePaths: s.sparse };
      else
        return un(
          `${L.cross} --sparse is only supported for github and git marketplace sources (got: ${p.source})`,
        );
  } catch (P) {
    return (
      await ee("cli_marketplace_add", P, "cli_marketplace_add_failed"),
      Z(P, "add marketplace")
    );
  }
  let v = (async () => {
    try {
      let P = [],
        {
          name: R,
          alreadyMaterialized: C,
          resolvedSource: N,
        } = await dY(
          p,
          (E) => {
            P.push(E);
          },
          d,
        ),
        { error: A } = await T5e(R, { source: N }, k, d);
      if (A) throw A;
      (fu(d, c),
        await qs("tengu_marketplace_added", {
          _PROTO_marketplace_name: R,
          source_type: u(p.source),
          repo_hash: p.source === "github" ? Tn(p.repo) : void 0,
          is_official_marketplace: Ug(R),
        }),
        await ki("cli_marketplace_add"));
      let m = [];
      try {
        m = (await JB((await Ph(d, c)).errors, d)).installed;
      } catch (E) {
        n(`marketplace add: dep auto-resolve skipped: ${l(E)}`, {
          level: "warn",
        });
      }
      let H = P2(m);
      return (
        P.push(
          C
            ? `${L.tick} Marketplace '${R}' already on disk \u2014 declared in ${w} settings${H}`
            : `${L.tick} Successfully added marketplace: ${R} (declared in ${w} settings)${H}`,
        ),
        P
      );
    } catch (P) {
      return (
        await ee("cli_marketplace_add", P, "cli_marketplace_add_failed"),
        Z(P, "add marketplace")
      );
    }
  })();
  (a.render(
    e(Dn, {
      fallback: e(t, { children: "Adding marketplace\u2026" }),
      children: e(pe, { promise: v }),
    }),
  ),
    await a.waitUntilExit(),
    await ys(0));
}
async function Ne(a, o, s, d) {
  let c = (async () => {
    try {
      let p = await gl(s),
        k = await xue(d).catch(() => null);
      if (k === null)
        throw new tC(
          "claude.ai marketplaces are not available here \u2014 sign in to claude.ai (claude /login) with plugin sync on, then run: claude plugin marketplace list",
          "tier_unavailable",
        );
      let w = kdn(k.hosted, o);
      if (w.kind === "ambiguous")
        throw new tC(
          `claude.ai hosts more than one marketplace called "${o}" for this account \u2014 add it by its unique name instead: ${w.localNames.join(", ")} (claude plugin marketplace list)`,
          "ambiguous_name",
        );
      if (w.kind === "none") {
        if (kdn(k.policyBlocked, o).kind !== "none")
          throw new tC(
            `"${o}" is hosted on claude.ai for this account but not allowed by your organization's marketplace policy (personal claude.ai uploads and blocked hosts are not admitted)`,
            "policy_blocked",
          );
        throw new tC(
          `claude.ai hosts no marketplace named "${o}" for this account \u2014 run: claude plugin marketplace list`,
          "not_listed",
        );
      }
      let v = w.row,
        {
          name: P,
          marketplace: R,
          status: C,
        } = await Emt(v, { configured: p, credentials: d });
      (fu(s, d),
        await qs("tengu_marketplace_added", { source_type: S("claudeai") }),
        await ki("cli_marketplace_add"));
      let N = Vwe(C),
        A = R.plugins.length;
      return [
        `${L.tick} Successfully added marketplace: ${hDe(v)} \u2014 hosted on claude.ai, ${aX(v.scope)} \u2014 ${A} ${x(A, "plugin")}${N ? ` (${N})` : ""}`,
        `  Install its plugins with: claude plugin install <plugin>@${P}`,
      ];
    } catch (p) {
      if (p instanceof tC)
        (await wn(
          "cli_marketplace_add",
          `cli_marketplace_add_claudeai_${p.code}`,
        ),
          await xle());
      else await ee("cli_marketplace_add", p, "cli_marketplace_add_failed");
      return Z(p, "add marketplace");
    }
  })();
  (c.catch(() => {}),
    a.render(
      e(Dn, {
        fallback: e(t, { children: "Adding marketplace\u2026" }),
        children: e(pe, { promise: c }),
      }),
    ),
    await a.waitUntilExit(),
    await ys(0));
}
async function oa(a, o, s) {
  if (o.cowork) SB(!0);
  let d;
  try {
    d = await gl(s);
  } catch (A) {
    return (
      await wn("cli_marketplace_list", "cli_marketplace_list_load_failed"),
      await xle(),
      Z(A, "list marketplaces")
    );
  }
  let c = Object.keys(d),
    p = await xue().catch(() => null),
    { available: k, hosted: w } = Hue(p, d),
    v = p?.browseOnly ?? [],
    P = await UF(),
    R = new Map();
  for (let A of c) {
    let m = d[A]?.source;
    if (TM(m))
      R.set(
        A,
        (await mV(A, m, { mode: "cache-only", credentials: void 0 })).status,
      );
  }
  if (o.json) {
    let A = c.sort().map((m) => {
      let H = d[m],
        E = H?.source,
        B = E?.source === "github" || E?.source === "git" ? E.ref : void 0;
      return {
        name: m,
        source: E?.source,
        ...(E?.source === "github" && { repo: E.repo }),
        ...(E?.source === "git" && { url: E.url }),
        ...(E?.source === "url" && { url: E.url }),
        ...(E?.source === "directory" && { path: E.path }),
        ...(E?.source === "file" && { path: E.path }),
        ...(B && { ref: B }),
        ...(E?.source === "claudeai"
          ? {
              marketplaceId: E.marketplaceId,
              organizationUuid: E.organizationUuid,
              ...(P[m]?.scope !== void 0 && { scope: P[m]?.scope }),
              status: R.get(m)?.kind,
            }
          : { installLocation: H?.installLocation }),
      };
    });
    (y("cli_marketplace_list"),
      await Kb(
        ne(A) +
          `
`,
      ));
    return;
  }
  let C;
  if (c.length === 0 && k.length === 0 && w.length === 0 && v.length === 0)
    C = e(t, { children: "No marketplaces configured" });
  else {
    let A =
      c.length > 0
        ? ["Configured marketplaces:", ""]
        : ["No marketplaces configured", ""];
    if (
      (c.forEach((m) => {
        let H = d[m];
        if ((A.push(`  ${L.pointer} ${m}`), H?.source)) {
          let E = H.source;
          if (E.source === "github") {
            let B = E.ref ? `@${E.ref}` : "";
            A.push(`    Source: GitHub (${E.repo}${B})`);
          } else if (E.source === "git") {
            let B = E.ref ? `@${E.ref}` : "";
            A.push(`    Source: Git (${E.url}${B})`);
          } else if (E.source === "url") A.push(`    Source: URL (${E.url})`);
          else if (E.source === "directory")
            A.push(`    Source: Directory (${E.path})`);
          else if (E.source === "file") A.push(`    Source: File (${E.path})`);
          else if (E.source === "claudeai") {
            let B = R.get(m),
              Y = B === void 0 ? void 0 : Vwe(B);
            A.push(
              `    Source: ${Tmt(P[m])}${Y === void 0 ? "" : ` \u2014 ${Y}`}`,
            );
          }
        }
        A.push("");
      }),
      k.length > 0 || w.length > 0 || v.length > 0)
    )
      A.push("From claude.ai:", "");
    for (let m of k)
      (A.push(
        `  ${L.pointer} ${m.name} (available from claude.ai${m.scope ? `, ${m.scope}` : ""} \u2014 not added)`,
      ),
        A.push(
          `    Source: ${m.source.source === "github" ? "GitHub" : "Git"} (${Gte(m.source)})`,
        ),
        A.push(""));
    for (let m of w)
      (A.push(
        `  ${L.pointer} ${hDe(m)} \u2014 hosted on claude.ai, ${aX(m.scope)} \xB7 not added`,
      ),
        A.push(
          `    Add: claude plugin marketplace add --claudeai ${V$(m.name) ? m.name : "<name>"}`,
        ),
        A.push(""));
    for (let m of v)
      (A.push(`  ${L.pointer} ${zwe(m)} (browse on claude.ai)`), A.push(""));
    C = e(t, { children: X(A) });
  }
  y("cli_marketplace_list");
  let N = await a();
  await bv(N, C);
}
async function sa(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c;
  if (s.scope !== void 0) {
    let p = s.scope;
    if (p !== "user" && p !== "project" && p !== "local")
      return un(
        `${L.cross} Invalid scope '${p}'. Use: user, project, or local`,
      );
    c = bC(p);
  }
  try {
    (await TEe(o, c, d),
      fu(d),
      i("tengu_marketplace_removed", { marketplace_name: o }));
  } catch (p) {
    (await wn("cli_marketplace_remove", "cli_marketplace_remove_failed"),
      await xle(),
      Z(p, "remove marketplace"));
  }
  (y("cli_marketplace_remove"),
    await bv(
      a,
      r(t, {
        children: [
          L.tick,
          " Successfully removed marketplace:",
          " ",
          wr(o),
          s.scope ? ` (from ${s.scope} settings)` : "",
        ],
      }),
    ));
}
function Se(ka) {
  let ke = _(11),
    { promise: ya } = ka,
    { messages: he, summary: _e } = kn(ya),
    re,
    ie,
    oe;
  if (ke[0] !== he || ke[1] !== _e) {
    let $a = [...he, _e];
    ie = Gb;
    re = t;
    oe = X($a);
    ((ke[0] = he), (ke[1] = _e), (ke[2] = re), (ke[3] = ie), (ke[4] = oe));
  } else ((re = ke[2]), (ie = ke[3]), (oe = ke[4]));
  let se;
  if (ke[5] !== re || ke[6] !== oe)
    ((se = e(re, { children: oe })), (ke[5] = re), (ke[6] = oe), (ke[7] = se));
  else se = ke[7];
  let Me;
  if (ke[8] !== ie || ke[9] !== se)
    ((Me = e(ie, { children: se })), (ke[8] = ie), (ke[9] = se), (ke[10] = Me));
  else Me = ke[10];
  return Me;
}
async function la(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c,
    p = 0,
    k;
  if (o) {
    c = `Updating marketplace: ${o}...`;
    let w = [];
    k = eD(o, d, (v) => {
      w.push(v);
    })
      .then(
        async () => (
          fu(d),
          await qs("tengu_marketplace_updated", { marketplace_name: o }),
          await ki("cli_marketplace_update"),
          {
            messages: w,
            summary: `${L.tick} Successfully updated marketplace: ${o}`,
          }
        ),
      )
      .catch(
        async (v) => (
          await ee(
            "cli_marketplace_update",
            v,
            "cli_marketplace_update_failed",
          ),
          Z(v, "update marketplace(s)")
        ),
      );
  } else {
    let w;
    try {
      w = await gl(d);
    } catch (P) {
      return (
        await ee(
          "cli_marketplace_update",
          P,
          "cli_marketplace_update_load_failed",
        ),
        Z(P, "update marketplace(s)")
      );
    }
    let v = Object.keys(w);
    if (v.length === 0) {
      (await bv(a, e(t, { children: "No marketplaces configured" })),
        process.exit(0));
      return;
    }
    ((c = "Updating marketplaces..."),
      (k = r7n(d)
        .then(async ({ policyRefused: P, failed: R, attempted: C }) => {
          if (
            ((p = R.length > 0 ? 1 : 0),
            fu(d),
            await qs("tengu_marketplace_updated_all", {
              count: v.length,
              attempted: C,
              refreshed: C - P.length - R.length,
              policy_refused: P.length,
              failed: R.length,
            }),
            R.length > 0)
          )
            await ul("cli_marketplace_update", "marketplace_refresh_failed");
          else if (P.length > 0)
            await ul("cli_marketplace_update", "command_source_refused");
          else await ki("cli_marketplace_update");
          return Le(C, P, R, v.length - C);
        })
        .catch(
          async (P) => (
            await ee(
              "cli_marketplace_update",
              P,
              "cli_marketplace_update_failed",
            ),
            Z(P, "update marketplace(s)")
          ),
        )));
  }
  (a.render(
    e(Dn, { fallback: e(t, { children: c }), children: e(Se, { promise: k }) }),
  ),
    await a.waitUntilExit(),
    await ys(p));
}
function ve(Pa) {
  let xe = _(4),
    { promise: Sa } = Pa,
    ye = kn(Sa),
    le;
  if (xe[0] !== ye) ((le = ff(ye)), (xe[0] = ye), (xe[1] = le));
  else le = xe[1];
  let Oe;
  if (xe[2] !== le)
    ((Oe = e(Gb, { children: r(t, { children: [L.tick, " ", le] }) })),
      (xe[2] = le),
      (xe[3] = Oe));
  else Oe = xe[3];
  return Oe;
}
function Ee(a) {
  return jB.some((o) => o === a);
}
function me(a) {
  let o = a.scope || "user";
  if (a.cowork && o !== "user") un("--cowork can only be used with user scope");
  if (!Ee(o)) un(`Invalid scope: ${o}. Must be one of: ${jB.join(", ")}.`);
  return o;
}
function Ie(a) {
  let o;
  if (a.scope) {
    if (!Ee(a.scope))
      un(`Invalid scope "${a.scope}". Valid scopes: ${jB.join(", ")}`);
    o = a.scope;
  }
  if (a.cowork && o !== void 0 && o !== "user")
    un("--cowork can only be used with user scope");
  if (a.cowork && o === void 0) o = "user";
  return o;
}
function ae(a, o, s) {
  let { name: d, marketplace: c } = J3(o);
  i(a, {
    _PROTO_plugin_name: d,
    ...(c && { _PROTO_marketplace_name: c }),
    ...(s !== void 0 && { scope: s }),
  });
}
async function ca(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = me(s);
  ae("tengu_plugin_install_command", o, u(c));
  let p,
    k,
    w = (N) => {
      if (p) dle(p.outcome);
      return Lae(N, "install", o);
    },
    v = await FNn(
      o,
      {
        yes: s.yes,
        scope: c,
        onMarketplaceRefreshResult: (N) => {
          p = N;
        },
        onResolvedMarketplace: (N) => {
          k = N;
        },
      },
      d,
    ).catch(w);
  if (v?.kind === "declined") {
    if (p) dle(p.outcome);
    (g("cli_plugin_install", "command_source_declined"),
      await bv(a, e(t, { children: "Aborted." })),
      await xn(1));
    return;
  }
  let P = v?.grantKey,
    R = await NNn(o, { yes: s.yes, scope: c, resolvedMarketplace: k }, d).catch(
      w,
    );
  if (R === "declined" || R === "unconfirmed") {
    if (
      (g(
        "cli_plugin_install",
        R === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed",
      ),
      p)
    )
      dle(p.outcome);
    (await bv(a, e(t, { children: "Aborted \u2014 the command was not run." })),
      await xn(1));
    return;
  }
  let C = $Nn(o, c, s.config, P, R, d, p).then(
    (N) => (y("cli_plugin_install"), N),
  );
  (a.render(
    e(Dn, {
      fallback: e(t, { children: wr(`Installing plugin "${o}"...`) }),
      children: e(ve, { promise: C }),
    }),
  ),
    await a.waitUntilExit(),
    await xn(0));
}
async function ua(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = me(s);
  ae("tengu_plugin_uninstall_command", o, u(c));
  let p = await UNn(o, c, s.keepData, s.prune, s.yes, d);
  (await bv(a, e(t, { children: ff(s.prune ? p : `${L.tick} ${p}`) })),
    await ki("cli_plugin_uninstall"),
    await ys(0));
}
async function da(a, o, s) {
  if (o.cowork) SB(!0);
  let d = me(o);
  i("tengu_plugin_prune_command", { scope: u(d), dry_run: o.dryRun ?? !1 });
  let c = await BNn(d, { dryRun: o.dryRun, yes: o.yes }, s);
  (await bv(a, e(t, { children: ff(c) })),
    await ki("cli_plugin_prune"),
    await ys(0));
}
async function pa(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = Ie(s);
  ae("tengu_plugin_enable_command", o, u(c ?? "auto"));
  let p;
  try {
    if ((await qwe(), Rot(), (p = await f0e(o, c, d)), !p.success))
      throw new Dae(p.message);
  } catch (k) {
    return await Lae(k, "enable", o);
  }
  (await bv(a, r(t, { children: [L.tick, " ", ff(p.message)] })),
    await qs("tengu_plugin_enabled_cli", {
      ...xy(p.pluginId || o, Xf()),
      scope: we(p.scope),
    }),
    await ki("cli_plugin_enable"),
    await ys(0));
}
async function ga(a, o, s, d) {
  if (s.all && o) un("Cannot use --all with a specific plugin");
  if (!s.all && !o)
    un("Please specify a plugin name or use --all to disable all plugins");
  if (s.cowork) SB(!0);
  let c;
  if (s.all) {
    if (s.scope) un("Cannot use --scope with --all");
    (i("tengu_plugin_disable_command", {}), Rot(), (c = await WNn(d)));
  } else {
    let p = Ie(s);
    (ae("tengu_plugin_disable_command", o, u(p ?? "auto")),
      await qwe(),
      Rot(),
      (c = await jNn(o, p, d)));
  }
  (await bv(a, e(t, { children: ff(c) })),
    await ki("cli_plugin_disable"),
    await ys(0));
}
async function ma(a, o, s) {
  if (o.cowork) SB(!0);
  ae("tengu_plugin_update_command", a);
  let d = "user";
  if (o.scope) {
    if (!n9e.includes(o.scope))
      un(`Invalid scope "${o.scope}". Valid scopes: ${n9e.join(", ")}`);
    d = o.scope;
  }
  if (o.cowork && d !== "user") un("--cowork can only be used with user scope");
  await GNn(a, d, { yes: o.yes }, s);
}
async function fa(a, o, s, d, c) {
  if (s.cowork) SB(!0);
  (Rot(), i("tengu_plugin_details_command", {}));
  let {
      getPluginInventory: p,
      computePluginTokenCost: k,
      scaleCharsToTokens: w,
    } = await import("./getPluginInventory.fnes377h.js"),
    { formatTokenEstimate: v } = await import("./formatTokenEstimate.t191sxdq.js");
  await qwe();
  let { enabled: P, disabled: R } = await Ph(M() ? d : void 0, c),
    C = J3(o),
    N = C.marketplace ? XSt(C.name, C.marketplace) : C.name,
    A = Ul(C.marketplace) ? (I) => xi(I) === xi(N) : (I) => $y(I, N),
    m = [...P, ...R].find((I) => A(C.marketplace ? I.source : I.name));
  if (!m) {
    f("cli_plugin_details", "not_found");
    let I = `Plugin "${o}" not found. Run \`claude plugin list\` to see installed plugins, or pass --plugin-dir <path> to load one from disk.`;
    if (s.json) return un(ff(I));
    let j = await a();
    (await bv(j, e(t, { children: ff(I) })), process.exit(1));
  }
  let H = Lu(m.source) ?? np,
    E = s.models?.length ? s.models : [rt()],
    B;
  try {
    let I = await p(m, H);
    B = await k(I, E, m.name);
  } catch (I) {
    (h(dt(ge(I), "plugin details: inventory/token-cost failed")),
      f("cli_plugin_details", "inventory_failed"));
    let j = `${L.cross} Could not load details for "${m.name}": ${l(I)}`;
    if (s.json) return un(ff(j));
    let Q = await a();
    (await bv(Q, e(t, { children: ff(j) })), process.exit(1));
  }
  let { tokens: Y, inventory: T } = B;
  if (s.json) {
    y("cli_plugin_details");
    let I = ({ path: j, ...Q }) => Q;
    await Kb(
      ne({
        plugin: m.name,
        version: m.manifest.version,
        source: m.source,
        sha: m.sha ?? null,
        tokens: Y,
        components: {
          ...T,
          commands: T.commands.map(I),
          agents: T.agents.map(I),
          skills: T.skills.map(I),
        },
      }) +
        `
`,
    );
    return;
  }
  let O = [],
    U = sd(m),
    D = U === m.name ? m.name : `${U} (${m.name})`;
  if (
    (O.push(`${D} ${m.manifest.version ?? ""}`.trimEnd()),
    m.manifest.description)
  ) {
    let [I, ...j] = m.manifest.description.split(`
`);
    O.push(`  Description: ${I}`);
    for (let Q of j) O.push(`      ${Q}`);
  }
  (O.push(`  Source: ${m.source}`), O.push(""), O.push("Component inventory"));
  let J = [
    ["Skills", [...T.skills, ...T.commands].map((I) => I.name).sort(), ""],
    ["Agents", T.agents.map((I) => I.name), ""],
    ["Hooks", T.hooks, "  (harness-only \u2014 no model context cost)"],
    [
      "MCP servers",
      T.mcpServers,
      "  (tool schemas resolved at runtime; not counted)",
    ],
    [
      "LSP servers",
      T.lspServers,
      "  (out-of-process tooling; no model context cost)",
    ],
  ];
  for (let [I, j, Q] of J)
    O.push(
      `  ${I} (${j.length})${j.length > 0 ? `  ${j.join(", ")}` : ""}${j.length > 0 ? Q : ""}`,
    );
  O.push("");
  let W = [...T.skills, ...T.agents, ...T.commands].filter(
      (I) => I.chars != null,
    ),
    G = {
      always_on: W.reduce((I, j) => I + j.chars.always_on, 0),
      on_invoke: W.reduce((I, j) => I + j.chars.on_invoke, 0),
    },
    K = Y[E[0]],
    V = K?.always_on ?? w(G.always_on, G.always_on, void 0);
  if (
    (O.push("Projected token cost"),
    O.push(
      `  Always-on:   ~${V.toLocaleString()} tok   added to every session`,
    ),
    W.length > 0)
  ) {
    (O.push(""), O.push("Per-component (rounded)"));
    let I = Math.max(...W.map((j) => j.name.length), 9);
    O.push(
      `  ${"component".padEnd(I)}  ${"always-on".padStart(9)}  ${"on-invoke".padStart(9)}`,
    );
    for (let j of W) {
      let Q = w(j.chars.always_on, G.always_on, K?.always_on),
        Ae = w(j.chars.on_invoke, G.on_invoke, K?.on_invoke);
      O.push(
        `  ${j.name.padEnd(I)}  ${v(Q).padStart(9)}  ${v(Ae).padStart(9)}`,
      );
    }
    (O.push(""),
      O.push("  On-invoke cost is paid each time a skill or agent fires."),
      O.push("  Token counts are estimates and may differ from actual usage."));
  }
  if (K) y("cli_plugin_details");
  else g("cli_plugin_details", "count_tokens_unreachable");
  let q = await a();
  await bv(q, e(t, { children: X(O) }));
}
function X(a) {
  return a.map(wr).join(`
`);
}
function ne(a) {
  return Jlr(b(a, null, 2));
}
function ue(a, o) {
  let s = (k) => jI(k.source) === a,
    d = o.plugins.filter(s),
    c = o.errors.filter(s),
    p = o.warnings.filter(s);
  return {
    plugins: d,
    errors: c,
    warnings: p,
    standaloneErrorRows: c.filter((k) => !d.some((w) => ZPt(k, w))),
    standaloneWarningRows: p.filter((k) => !d.some((w) => eOt(k, w))),
  };
}
function Re(a) {
  return (
    a.plugins.length > 0 ||
    a.standaloneErrorRows.length > 0 ||
    a.standaloneWarningRows.length > 0
  );
}
function He(a) {
  if (!Re(a)) return [];
  let { standaloneErrorRows: o, standaloneWarningRows: s } = a,
    d = [a.header, ""];
  for (let c of s) d.push(`  ${L.warning} ${K$(c)}`, "");
  for (let c of a.plugins) {
    let p = a.errors.filter((v) => ZPt(v, c)),
      k = a.warnings.filter((v) => eOt(v, c)),
      w =
        c.enabled === !1
          ? `${L.cross} disabled`
          : p.length > 0
            ? `${L.cross} loaded with errors`
            : `${L.tick} loaded`;
    if (
      (d.push(`  ${L.pointer} ${c.source}`),
      d.push(`    Version: ${c.manifest.version ?? "unknown"}`),
      a.showScope)
    )
      d.push(`    Scope: ${a.scopeOf(c)}`);
    (d.push(`    Path: ${a.pathOf(c)}`), d.push(`    Status: ${w}`));
    for (let v of p) d.push(`    Error: ${vm(v)}`);
    for (let v of k) d.push(`    Note: ${K$(v)}`);
    d.push("");
  }
  for (let c of o)
    d.push(`  ${L.pointer} ${c.source}: ${L.cross} ${vm(c)}`, "");
  return d;
}
function $e({ path: a, message: o }) {
  return { path: a, message: o, code: null };
}
function Pe(a) {
  return {
    file: a.filePath,
    type: a.fileType,
    errors: a.errors.map($e),
    warnings: a.warnings.map($e),
    notes: a.notes ?? [],
  };
}
function je(a, o) {
  return {
    success: o.success,
    strict: o.strict,
    target: a.resolvedPath,
    manifest: a.manifest ? Pe(a.manifest) : null,
    contents: a.contents.map(Pe),
  };
}
async function Ue(a, o) {
  let s = [];
  for (let d of a.plugins) {
    let c =
        d.mcpServers ||
        (await wM(d, void 0, o, void 0, { readOnlyListing: !0 })),
      p = a.errors.filter((w) => ZPt(w, d)).map(vm),
      k = a.warnings.filter((w) => eOt(w, d)).map(K$);
    s.push({
      id: d.source,
      version: d.manifest.version ?? "unknown",
      scope: a.scopeOf(d),
      enabled: d.enabled !== !1,
      installPath: d.path,
      mcpServers: c && Object.keys(c).length > 0 ? c : void 0,
      errors: p.length > 0 ? p : void 0,
      notes: k.length > 0 ? k : void 0,
    });
  }
  for (let d of a.standaloneErrorRows)
    s.push({
      id: d.source,
      version: "unknown",
      scope: a.standaloneErrorScope,
      enabled: !1,
      installPath: "path" in d ? d.path : "",
      errors: [vm(d)],
    });
  for (let d of a.standaloneWarningRows)
    s.push({
      id: d.source,
      version: "unknown",
      scope: a.standaloneWarningScope,
      enabled: d.type === "synced-plugin-shadowed",
      installPath: "",
      notes: [K$(d)],
    });
  return s;
}
export {
  ia as marketplaceAddHandler,
  oa as marketplaceListHandler,
  sa as marketplaceRemoveHandler,
  la as marketplaceUpdateHandler,
  fa as pluginDetailsHandler,
  ga as pluginDisableHandler,
  pa as pluginEnableHandler,
  ta as pluginInitHandler,
  ca as pluginInstallHandler,
  ra as pluginListHandler,
  da as pluginPruneHandler,
  aa as pluginTagHandler,
  ua as pluginUninstallHandler,
  ma as pluginUpdateHandler,
  na as pluginValidateHandler,
};

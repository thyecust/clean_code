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
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { eZ, Vt } from "./chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { eS } from "./认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "./chunk-wk0e3dz4.js";
import "./chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "./chunk-y7b7kf5n.js";
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
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t, ct, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "./chunk-s51acx6w.js";
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
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
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
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "./chunk-x3rm9w4b.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../../01-核心基础设施/设置-配置/chunk-9m8zsynn.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../工具TodoWrite-Tasks/chunk-5a7p8d2p.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../Hooks钩子/chunk-22aft7vr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import { e9, YL, JL } from "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import { fbe, Sdt, bdt, FPe, l1t } from "../DesignSync/chunk-aycc6z76.js";
import { ck } from "./chunk-5bg9xwqx.js";
import { fM } from "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function oe() {
  return new ck();
}
function ne(Ie) {
  return Ie();
}
function ie(Te) {
  return Te();
}
var G = "Paste code here if prompted > ";
function At(Re) {
  let g = _(54),
    { onDone: k, hadExistingCredential: pt } = Re,
    Bt;
  if (g[0] === p) ((Bt = { state: "starting" }), (g[0] = Bt));
  else Bt = g[0];
  let [s, b] = d(Bt),
    [D] = d(oe),
    [O, Y] = d(""),
    [ht, yt] = d(0),
    [y, Z] = d(!1),
    {
      copiedVia: tt,
      copy: j,
      reset: Ct,
    } = e9(s.state === "waiting_for_login" ? s.url : null),
    et = vt(),
    Lt;
  if (g[1] === p) ((Lt = new Set()), (g[1] = Lt));
  else Lt = g[1];
  let W = C(Lt),
    rt = C(!1),
    ke = Se(),
    _t = Math.max(50, ke.columns - G.length - 4),
    Nt;
  if (g[2] !== s.state || g[3] !== s.toRetry || g[4] !== k)
    ((Nt = function M(S) {
      if (s.state === "success") {
        (S.preventDefault(), k("Design-system access authorized."));
        return;
      }
      if (s.state !== "error") {
        if (
          S.key === "escape" ||
          ((S.ctrl || S.meta) && (S.key === "c" || S.key === "d"))
        )
          (S.preventDefault(), (rt.current = !0), k("Design login cancelled."));
        return;
      }
      if ((S.preventDefault(), S.key === "return" && s.toRetry))
        (Y(""), yt(0), b({ state: "about_to_retry", nextState: s.toRetry }));
      else ((rt.current = !0), k("Design login cancelled."));
    }),
      (g[2] = s.state),
      (g[3] = s.toRetry),
      (g[4] = k),
      (g[5] = Nt));
  else Nt = g[5];
  let M = Nt,
    Ft;
  if (g[6] !== D)
    ((Ft = function q(Kt, jt) {
      if (!Kt.trim()) {
        (Y(""), yt(0));
        return;
      }
      let [Xt, Jt] = Kt.split("#");
      if (!Xt || !Jt) {
        (b({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: { state: "waiting_for_login", url: jt },
        }),
          n(`Design login: invalid pasted code for ${jt}`));
        return;
      }
      (i("tengu_design_oauth_manual_entry", {}),
        D.handleManualAuthCodeInput({ authorizationCode: Xt, state: Jt }));
    }),
      (g[6] = D),
      (g[7] = Ft));
  else Ft = g[7];
  let q = Ft,
    Wt;
  if (g[8] !== et || g[9] !== D || g[10] !== k || g[11] !== Ct)
    ((Wt = async () => {
      if ((W.current.forEach(ne), W.current.clear(), !FPe())) {
        b({
          state: "error",
          message:
            "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client.",
        });
        return;
      }
      try {
        let Pe = Vt();
        let wt = bdt();
        let bt = await D.startOAuthFlow(
          async (Ae) => {
            if ((Ct(), Z(!1), b({ state: "waiting_for_login", url: Ae }), fM()))
              Z(!0);
            else W.current.add(et.setTimeout(() => Z(!0), 3000));
          },
          {
            loginWithClaudeAi: !0,
            oauthClient: { clientId: wt, scopes: eZ },
            skipProfileFetch: !0,
            successRedirectUrl: Pe.CLAUDEAI_SUCCESS_URL,
          },
        );
        if (rt.current) {
          if (bt.refreshToken) await eS(bt.refreshToken, wt);
          return;
        }
        b({ state: "processing" });
        let z = await l1t(bt, wt);
        if (!z.ok) {
          b({
            state: "error",
            message: z.message,
            toRetry: { state: "starting" },
          });
          return;
        }
        if (rt.current) {
          await eS(z.slot.refreshToken, z.slot.clientId);
          return;
        }
        let $t = await Sdt(z.slot);
        if (!$t.success) {
          (await eS(z.slot.refreshToken, z.slot.clientId),
            b({
              state: "error",
              message:
                $t.warning ??
                "Could not save the design credential to secure storage.",
              toRetry: { state: "starting" },
            }));
          return;
        }
        (i("tengu_design_oauth_login_success", {}),
          b({ state: "success" }),
          W.current.add(
            et.setTimeout(() => k("Design-system access authorized."), 1500),
          ));
      } catch (st) {
        let Mt = st;
        (h(Mt),
          i("tengu_design_oauth_login_error", {}),
          b({
            state: "error",
            message: l(Mt),
            toRetry: { state: "starting" },
          }));
      }
    }),
      (g[8] = et),
      (g[9] = D),
      (g[10] = k),
      (g[11] = Ct),
      (g[12] = Wt));
  else Wt = g[12];
  let ot = Wt,
    st,
    qt;
  if (g[13] !== s.state || g[14] !== ot)
    ((st = () => {
      if (s.state === "starting") ot();
    }),
      (qt = [s.state, ot]),
      (g[13] = s.state),
      (g[14] = ot),
      (g[15] = st),
      (g[16] = qt));
  else ((st = g[15]), (qt = g[16]));
  E(st, qt);
  let Gt;
  if (g[17] !== s.nextState || g[18] !== s.state)
    ((Gt = () => {
      if (s.state === "about_to_retry")
        (Z(s.nextState.state === "waiting_for_login"), b(s.nextState));
    }),
      (g[17] = s.nextState),
      (g[18] = s.state),
      (g[19] = Gt));
  else Gt = g[19];
  Un(Gt, s.state === "about_to_retry" ? 500 : null);
  let Ht;
  if (
    g[20] !== j ||
    g[21] !== s.state ||
    g[22] !== s.url ||
    g[23] !== O ||
    g[24] !== y
  )
    ((Ht = () => {
      if (/^c+$/.test(O) && s.state === "waiting_for_login" && y)
        (Y(""), j(s.url));
    }),
      (g[20] = j),
      (g[21] = s.state),
      (g[22] = s.url),
      (g[23] = O),
      (g[24] = y),
      (g[25] = Ht));
  else Ht = g[25];
  let Qt;
  if (g[26] !== j || g[27] !== s || g[28] !== O || g[29] !== y)
    ((Qt = [O, s, y, j]),
      (g[26] = j),
      (g[27] = s),
      (g[28] = O),
      (g[29] = y),
      (g[30] = Qt));
  else Qt = g[30];
  E(Ht, Qt);
  let Yt, Zt;
  if (g[31] !== D)
    ((Yt = () => {
      let te = W.current;
      return () => {
        (D.cleanup(), te.forEach(ie), te.clear());
      };
    }),
      (Zt = [D]),
      (g[31] = D),
      (g[32] = Yt),
      (g[33] = Zt));
  else ((Yt = g[32]), (Zt = g[33]));
  E(Yt, Zt);
  let nt;
  if (g[34] !== pt || g[35] !== s.state)
    ((nt =
      s.state !== "success" &&
      r(o, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1,
        children: [
          e(t, { bold: !0, children: "Design login" }),
          e(t, {
            dimColor: !0,
            children:
              "Authorize design-system access (read and write your organization's claude.ai/design projects) with your claude.ai account. This is separate from this session's authentication and changes nothing else.",
          }),
          pt &&
            e(t, {
              dimColor: !0,
              children:
                "A design credential is already stored \u2014 completing this flow replaces it.",
            }),
        ],
      })),
      (g[34] = pt),
      (g[35] = s.state),
      (g[36] = nt));
  else nt = g[36];
  let it;
  if (g[37] !== s.state || g[38] !== s.url || g[39] !== y || g[40] !== tt)
    ((it =
      s.state === "waiting_for_login" &&
      y &&
      r(o, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1,
        children: [
          r(o, {
            flexDirection: "column",
            paddingX: 1,
            children: [
              r(o, {
                children: [
                  r(t, {
                    dimColor: !0,
                    children: [
                      "Browser didn't open? Use the url below to sign in",
                      " ",
                    ],
                  }),
                  e(YL, { via: tt }),
                ],
              }),
              e(JL, { via: tt }),
            ],
          }),
          e(ct, {
            url: s.url,
            assumeSupport: !0,
            children: e(t, { dimColor: !0, children: s.url }),
          }),
        ],
      })),
      (g[37] = s.state),
      (g[38] = s.url),
      (g[39] = y),
      (g[40] = tt),
      (g[41] = it));
  else it = g[41];
  let at;
  if (
    g[42] !== ht ||
    g[43] !== q ||
    g[44] !== s ||
    g[45] !== O ||
    g[46] !== y ||
    g[47] !== _t
  )
    ((at = e(o, {
      paddingLeft: 1,
      flexDirection: "column",
      gap: 1,
      children: e(ut, {
        oauthStatus: s,
        showPastePrompt: y,
        pastedCode: O,
        setPastedCode: Y,
        cursorOffset: ht,
        setCursorOffset: yt,
        textInputColumns: _t,
        onSubmitCode: q,
      }),
    })),
      (g[42] = ht),
      (g[43] = q),
      (g[44] = s),
      (g[45] = O),
      (g[46] = y),
      (g[47] = _t),
      (g[48] = at));
  else at = g[48];
  let ee;
  if (g[49] !== M || g[50] !== nt || g[51] !== it || g[52] !== at)
    ((ee = r(mr, { gap: 1, onKeyDown: M, children: [nt, it, at] })),
      (g[49] = M),
      (g[50] = nt),
      (g[51] = it),
      (g[52] = at),
      (g[53] = ee));
  else ee = g[53];
  return ee;
}
function ut(ze) {
  let v = _(23),
    {
      oauthStatus: P,
      showPastePrompt: Dt,
      pastedCode: xt,
      setPastedCode: Ot,
      cursorOffset: St,
      setCursorOffset: Rt,
      textInputColumns: kt,
      onSubmitCode: Pt,
    } = ze;
  switch (P.state) {
    case "starting": {
      let u;
      if (v[0] === p)
        ((u = e($n, { message: "Starting design login\u2026" })), (v[0] = u));
      else u = v[0];
      return u;
    }
    case "waiting_for_login": {
      let u;
      if (v[1] === p)
        ((u = e($n, { message: "Waiting for browser authorization\u2026" })),
          (v[1] = u));
      else u = v[1];
      let A;
      if (
        v[2] !== St ||
        v[3] !== P.url ||
        v[4] !== Pt ||
        v[5] !== xt ||
        v[6] !== Rt ||
        v[7] !== Ot ||
        v[8] !== Dt ||
        v[9] !== kt
      )
        ((A =
          Dt &&
          r(o, {
            children: [
              e(t, { children: G }),
              e(hn, {
                value: xt,
                onChange: Ot,
                onSubmit: (Ue) => Pt(Ue, P.url),
                cursorOffset: St,
                onChangeCursorOffset: Rt,
                columns: kt,
              }),
            ],
          })),
          (v[2] = St),
          (v[3] = P.url),
          (v[4] = Pt),
          (v[5] = xt),
          (v[6] = Rt),
          (v[7] = Ot),
          (v[8] = Dt),
          (v[9] = kt),
          (v[10] = A));
      else A = v[10];
      let U;
      if (v[11] !== A)
        ((U = r(o, { flexDirection: "column", gap: 1, children: [u, A] })),
          (v[11] = A),
          (v[12] = U));
      else U = v[12];
      return U;
    }
    case "processing": {
      let u;
      if (v[13] === p)
        ((u = e($n, { message: "Saving design credential\u2026" })),
          (v[13] = u));
      else u = v[13];
      return u;
    }
    case "success": {
      let u;
      if (v[14] === p)
        ((u = e(t, {
          color: "success",
          children:
            "Design-system access authorized. /design-sync can now reach your claude.ai/design projects.",
        })),
          (v[14] = u));
      else u = v[14];
      return u;
    }
    case "error": {
      let u;
      if (v[15] !== P.message)
        ((u = e(t, { color: "error", children: P.message })),
          (v[15] = P.message),
          (v[16] = u));
      else u = v[16];
      const A = P.toRetry
        ? "Press Enter to retry, or any other key to cancel."
        : "Press any key to close.";
      let U;
      if (v[17] !== A)
        ((U = e(t, { dimColor: !0, children: A })), (v[17] = A), (v[18] = U));
      else U = v[18];
      let se;
      if (v[19] !== u || v[20] !== U)
        ((se = r(o, { flexDirection: "column", gap: 1, children: [u, U] })),
          (v[19] = u),
          (v[20] = U),
          (v[21] = se));
      else se = v[21];
      return se;
    }
    case "about_to_retry": {
      let u;
      if (v[22] === p)
        ((u = e(t, { color: "permission", children: "Retrying\u2026" })),
          (v[22] = u));
      else u = v[22];
      return u;
    }
  }
}
async function xe(m) {
  let B = (await fbe()) !== null;
  return e(At, { onDone: (a) => m(a), hadExistingCredential: B });
}
export { At as DesignLogin, xe as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { VR, Dx, Aje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { ae } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Ne } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { qe, Bo, eu } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "./chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "./chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
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
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
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
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import { Pr, $s, an, nd } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "./chunk-t3b7pg2x.js";
import "./chunk-fjrcf22x.js";
import "./chunk-qdy0h5k2.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
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
import "./chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "./chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import { Nae, x0t, H0t } from "../../01-核心基础设施/设置-配置/chunk-avjbj8nf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { ui, Gm, fa, $o } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import {
  een,
  s0e,
  i0e,
  ten,
  jb,
  nen,
  ren,
  oen,
  sen,
  ien,
  aen,
  len,
} from "../状态栏-主题/chunk-67rzccvb.js";
import { gs } from "./chunk-n5mgv42x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import { kh } from "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { E, V, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import "./chunk-pcxn6gwz.js";
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
function Qt(Mt) {
  return Mt === qe || Mt.startsWith(qe + "(");
}
function Nt(Q) {
  return (
    Q.type === "prompt" &&
    Q.loadedFrom === "commands_DEPRECATED" &&
    (Q.source === "projectSettings" || Q.source === "localSettings") &&
    Q.allowedTools?.some(Qt)
  );
}
function Ut(Vt) {
  return Vt === qe || Vt.startsWith(qe + "(");
}
function Kt(b) {
  return (
    b.type === "prompt" &&
    (b.loadedFrom === "skills" || b.loadedFrom === "plugin") &&
    (b.source === "projectSettings" ||
      b.source === "localSettings" ||
      b.source === "plugin") &&
    b.allowedTools?.some(Ut)
  );
}
function qt(Eo) {
  return { ...Eo, hasTrustDialogAccepted: !0 };
}
function Gt(wo) {
  let s = _(67),
    { onDone: I, commands: T } = wo,
    { storageV5: Ce } = _e(),
    it;
  if (s[0] === p) ((it = nd("project")), (s[0] = it));
  else it = s[0];
  let { servers: bo } = it,
    lt;
  if (s[1] === p) ((lt = Object.keys(bo)), (s[1] = lt));
  else lt = s[1];
  let xe = lt.length > 0,
    ut;
  if (s[2] === p) ((ut = een()), (s[2] = ut));
  else ut = s[2];
  let Se = ut.length > 0,
    pt;
  if (s[3] === p) ((pt = ten()), (s[3] = pt));
  else pt = s[3];
  let yo = pt,
    j = s0e(),
    B = j.sources.length > 0,
    A = i0e(),
    M = A.sources.length > 0,
    dt;
  if (s[4] === p) ((dt = oen()), (s[4] = dt));
  else dt = s[4];
  let De = dt.length > 0,
    ht;
  if (s[5] === p) ((ht = sen()), (s[5] = ht));
  else ht = s[5];
  let He = ht.length > 0,
    ft;
  if (s[6] === p) ((ft = ien()), (s[6] = ft));
  else ft = s[6];
  let ve = ft.length > 0,
    mt;
  if (s[7] === p) ((mt = nen()), (s[7] = mt));
  else mt = s[7];
  let Te = mt.length > 0,
    gt;
  if (s[8] === p) ((gt = aen()), (s[8] = gt));
  else gt = s[8];
  let je = gt.length > 0,
    wt;
  if (s[9] === p) {
    let bt = H0t();
    let yt = x0t(bt);
    wt = {
      marketplaceHelperSources: bt,
      repoHelperSources: yt,
      offerBackstop: Nae(yt),
    };
    s[9] = wt;
  } else wt = s[9];
  let {
      marketplaceHelperSources: ko,
      repoHelperSources: kt,
      offerBackstop: Co,
    } = wt,
    Ae = ko.length > 0,
    G = kt.length > 0,
    Ct;
  if (s[10] === p) ((Ct = len()), (s[10] = Ct));
  else Ct = s[10];
  let Pe = Ct.length > 0,
    xt;
  if (s[11] === p) ((xt = ren()), (s[11] = xt));
  else xt = s[11];
  let Re = xt.length > 0,
    St;
  if (s[12] !== T) ((St = T?.some(Nt) ?? !1), (s[12] = T), (s[13] = St));
  else St = s[13];
  let xo = St,
    Dt;
  if (s[14] !== T) ((Dt = T?.some(Kt) ?? !1), (s[14] = T), (s[15] = Dt));
  else Dt = s[15];
  let So = Dt,
    g = yo.length > 0 || xo || So,
    Ht;
  if (s[16] === p) ((Ht = Bo()), (s[16] = Ht));
  else Ht = s[16];
  let vt = Ht,
    w = vt,
    _t,
    Tt;
  if (s[17] !== g)
    ((_t = () => {
      let Do = VR();
      i("tengu_trust_dialog_shown", {
        isHomeDir: Do,
        hasMcpServers: xe,
        hasHooks: Se,
        hasBashExecution: g,
        hasProjectAllowRules: B,
        hasProjectAddDirs: M,
        hasApiKeyHelper: De,
        hasAwsCommands: He,
        hasGcpCommands: ve,
        hasOtelHeadersHelper: Te,
        hasProxyAuthHelper: je,
        hasMarketplaceHeadersHelper: Ae,
        hasRepoHeadersHelpers: G,
        hasDangerousEnvVars: Pe,
        hasAutoMemoryDirectory: Re,
      });
    }),
      (Tt = [xe, Se, g, B, M, De, He, ve, Te, je, Ae, G, Pe, Re]),
      (s[17] = g),
      (s[18] = _t),
      (s[19] = Tt));
  else ((_t = s[18]), (Tt = s[19]));
  E(_t, Tt);
  let K = C(!1),
    l = ui(),
    { refusedWithin: u, noteRefused: d, epoch: Ho } = $o(),
    jt;
  if (s[20] !== l || s[21] !== d || s[22] !== u)
    ((jt = function q() {
      if (l() || u()) {
        return (d(), !0);
      }
      return !1;
    }),
      (s[20] = l),
      (s[21] = d),
      (s[22] = u),
      (s[23] = jt));
  else jt = s[23];
  let q = jt,
    Ee = Gm(),
    Ie = fa(Ho),
    At;
  if (
    s[24] !== g ||
    s[25] !== w ||
    s[26] !== l ||
    s[27] !== d ||
    s[28] !== I ||
    s[29] !== u ||
    s[30] !== Ce
  )
    ((At = function c(vo) {
      if (K.current || $s()) {
        return;
      }
      if (l() || u()) {
        d();
        return;
      }
      if (((K.current = !0), vo === "exit")) {
        if (w) {
          (f("onboarding_trust_dialog", "gated_grants_backstop_declined"), I());
          return;
        }
        (f("onboarding_trust_dialog", "onboarding_trust_denied"), Pr(1));
        return;
      }
      let Pt = VR();
      if (
        (y("onboarding_trust_dialog"),
        i("tengu_trust_dialog_accept", {
          isHomeDir: Pt,
          hasMcpServers: xe,
          hasHooks: Se,
          hasBashExecution: g,
          hasProjectAllowRules: B,
          hasProjectAddDirs: M,
          hasApiKeyHelper: De,
          hasAwsCommands: He,
          hasGcpCommands: ve,
          hasOtelHeadersHelper: Te,
          hasProxyAuthHelper: je,
          hasMarketplaceHeadersHelper: Ae,
          hasRepoHeadersHelpers: G,
          hasDangerousEnvVars: Pe,
          hasAutoMemoryDirectory: Re,
        }),
        Pt)
      )
        (Dx(!0), Aje(!0));
      else eu(qt, Ce);
      I();
    }),
      (s[24] = g),
      (s[25] = w),
      (s[26] = l),
      (s[27] = d),
      (s[28] = I),
      (s[29] = u),
      (s[30] = Ce),
      (s[31] = At));
  else At = s[31];
  let c = At,
    Rt;
  if (s[32] === p)
    ((Rt = () => {
      ((K.current = !0), Pr(1));
    }),
      (s[32] = Rt));
  else Rt = s[32];
  let P = is(Rt),
    Et;
  if (s[33] !== w || s[34] !== l || s[35] !== d || s[36] !== c || s[37] !== u)
    ((Et = () => {
      if (kh()) {
        c("exit");
        return;
      }
      if (w) {
        c("exit");
        return;
      }
      if (l() || u()) {
        d();
        return;
      }
      if (K.current || $s()) {
        return;
      }
      ((K.current = !0), Pr(0));
    }),
      (s[33] = w),
      (s[34] = l),
      (s[35] = d),
      (s[36] = c),
      (s[37] = u),
      (s[38] = Et));
  else Et = s[38];
  let It;
  if (s[39] === p) ((It = { context: "Confirmation" }), (s[39] = It));
  else It = s[39];
  if ((Ne("confirm:no", Et, It), vt && !Co)) {
    return (queueMicrotask(I), null);
  }
  const Be = gs,
    _o = "warning",
    To = "warning",
    jo = "Accessing workspace:",
    Fe = o,
    Ao = "column",
    Po = 1,
    Ro = 1;
  let ce, le, pe;
  if (s[40] === p)
    ((ce = e(t, { bold: !0, children: an(ae().cwd()) })),
      (le = r(t, {
        children: [
          "Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what",
          "'",
          "s in this folder first.",
        ],
      })),
      (pe = r(t, {
        children: [
          "Claude Code",
          "'",
          "ll be able to read, edit, and execute files here.",
        ],
      })),
      (s[40] = ce),
      (s[41] = le),
      (s[42] = pe));
  else ((ce = s[40]), (le = s[41]), (pe = s[42]));
  const Me =
    (B || M || G) &&
    r(o, {
      flexDirection: "column",
      children: [
        B &&
          r(N, {
            children: [
              r(t, {
                bold: !0,
                color: "warning",
                children: [
                  e(et, { status: "warning", withSpace: !0 }),
                  "This folder pre-approves ",
                  j.rawCount,
                  " ",
                  x(j.rawCount, "tool permission"),
                  " in",
                  " ",
                  jb(j.sources),
                  ":",
                ],
              }),
              r(t, {
                children: [
                  "  ",
                  j.rules.length > 0
                    ? jb(j.rules, 8)
                    : "(rule names contain unprintable characters)",
                ],
              }),
            ],
          }),
        M &&
          r(N, {
            children: [
              r(t, {
                bold: !0,
                color: "warning",
                children: [
                  e(et, { status: "warning", withSpace: !0 }),
                  "This folder adds ",
                  A.rawCount,
                  " ",
                  x(A.rawCount, "directory", "directories"),
                  " ",
                  "to the workspace in",
                  " ",
                  jb(A.sources),
                  ":",
                ],
              }),
              r(t, {
                children: [
                  "  ",
                  A.dirs.length > 0
                    ? jb(A.dirs, 6)
                    : "(directory names contain unprintable characters)",
                ],
              }),
            ],
          }),
        G &&
          r(t, {
            bold: !0,
            color: "warning",
            children: [
              e(et, { status: "warning", withSpace: !0 }),
              "This folder runs commands to mint HTTP headers (headersHelper), declared in ",
              jb(kt),
            ],
          }),
        e(t, {
          dimColor: !0,
          children:
            "These will apply without asking. Only proceed if you trust this configuration.",
        }),
      ],
    });
  let Bt;
  if (s[43] === p)
    ((Bt = e(t, {
      dimColor: !0,
      children: e(ct, {
        url: "https://code.claude.com/docs/en/security",
        children: "Security guide",
      }),
    })),
      (s[43] = Bt));
  else Bt = s[43];
  let de, he;
  if (s[44] !== c)
    ((de = () => c("enable_all")),
      (he = () => c("exit")),
      (s[44] = c),
      (s[45] = de),
      (s[46] = he));
  else ((de = s[45]), (he = s[46]));
  let fe;
  if (
    s[47] !== Ie.remountKey ||
    s[48] !== q ||
    s[49] !== Ee ||
    s[50] !== de ||
    s[51] !== he
  )
    ((fe = e(
      En,
      {
        refuseInput: q,
        openedAt: Ee,
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Yes, I trust this folder",
        cancelLabel: w ? "No, continue without these permissions" : "No, exit",
        onConfirm: de,
        onCancel: he,
      },
      Ie.remountKey,
    )),
      (s[47] = Ie.remountKey),
      (s[48] = q),
      (s[49] = Ee),
      (s[50] = de),
      (s[51] = he),
      (s[52] = fe));
  else fe = s[52];
  let me;
  if (s[53] !== P.keyName || s[54] !== P.pending)
    ((me = e(t, {
      dimColor: !0,
      children: P.pending
        ? r(N, { children: ["Press ", P.keyName, " again to exit"] })
        : r(ue, {
            children: [
              e(D, { chord: "enter", action: "confirm" }),
              e(D, { chord: "escape", action: "cancel" }),
            ],
          }),
    })),
      (s[53] = P.keyName),
      (s[54] = P.pending),
      (s[55] = me));
  else me = s[55];
  let ge;
  if (
    s[56] !== Fe ||
    s[57] !== ce ||
    s[58] !== le ||
    s[59] !== pe ||
    s[60] !== Me ||
    s[61] !== fe ||
    s[62] !== me
  )
    ((ge = r(Fe, {
      flexDirection: Ao,
      gap: Po,
      paddingTop: Ro,
      children: [ce, le, pe, Me, Bt, fe, me],
    })),
      (s[56] = Fe),
      (s[57] = ce),
      (s[58] = le),
      (s[59] = pe),
      (s[60] = Me),
      (s[61] = fe),
      (s[62] = me),
      (s[63] = ge));
  else ge = s[63];
  let Ft;
  if (s[64] !== Be || s[65] !== ge)
    ((Ft = e(Be, { color: _o, titleColor: To, title: jo, children: ge })),
      (s[64] = Be),
      (s[65] = ge),
      (s[66] = Ft));
  else Ft = s[66];
  return Ft;
}
export { Gt as TrustDialog };

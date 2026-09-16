// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { P6 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Zge, X6 } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { vA } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "./chunk-e4pfvp7x.js";
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
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
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
import "./chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t, ct, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { mo, ma } from "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { an } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import { Aot, Cot, vot } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { Szt } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "./chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "./chunk-t3b7pg2x.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import { ce } from "./chunk-fjrcf22x.js";
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
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
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
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../文件监听-Watch/chunk-mmg1rsp2.js";
import { XWe, NPt, FPt, $Pt, UPt, BPt } from "../Memory-CLAUDE.md/chunk-br7dq41d.js";
import {
  jPt,
  s0e,
  i0e,
  jb,
  WPt,
  GPt,
  qPt,
  zPt,
  VPt,
} from "../状态栏-主题/chunk-67rzccvb.js";
import { gs } from "./chunk-n5mgv42x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import { Dbe } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
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
import { resolve as so } from "path";
F();
import { join as le, resolve as ao } from "path";
function de(s, { backstop: a = !1 } = {}) {
  return (
    s.allowRules.sources.length > 0 ||
    s.additionalDirectories.sources.length > 0 ||
    (!a && (s.hookSources.length > 0 || s.commandHelperSources.length > 0))
  );
}
function ge() {
  return {
    allowRules: s0e(),
    additionalDirectories: i0e(),
    hookSources: [],
    commandHelperSources: [],
  };
}
function Oe(s) {
  let a = ao(s),
    l = X6(a, vA),
    c = Zge(le(a, ".claude", "settings.json")).settings,
    u = le(l, ".claude", "settings.local.json"),
    h = le(a, ".claude", "settings.local.json"),
    v = [Zge(u).settings, ...(h === u ? [] : [Zge(h).settings])].filter(
      (S) => S !== null,
    ),
    w =
      v.length === 0
        ? null
        : {
            permissions: {
              additionalDirectories: v.flatMap(
                (S) => S.permissions?.additionalDirectories ?? [],
              ),
            },
          },
    g = { projectSettings: c, localSettings: w },
    G = {
      sources: [
        ["projectSettings", ".claude/settings.json"],
        ["localSettings", ".claude/settings.local.json"],
      ],
      read: (S) => g[S] ?? null,
      rules: (S) =>
        S === "localSettings"
          ? v.flatMap((io) => Szt(io, S))
          : Szt(g[S] ?? null, S),
    },
    i = (S) => GPt(S) || qPt(S) || zPt(S) || WPt(S) || VPt(S),
    m = [],
    ae = [];
  if (jPt(c)) m.push(".claude/settings.json");
  if (v.some(jPt)) m.push(".claude/settings.local.json");
  if (i(c)) ae.push(".claude/settings.json");
  if (v.some(i)) ae.push(".claude/settings.local.json");
  return {
    allowRules: s0e(G),
    additionalDirectories: i0e(G),
    hookSources: m,
    commandHelperSources: ae,
  };
}
function Po() {
  try {
    return ge();
  } catch (We) {
    let xt = We;
    n(
      `/cd: reading the project settings for the backstop prompt failed: ${xt}`,
      { level: "error" },
    );
    return;
  }
}
function Do(Nt) {
  n(`/cd: persisting trust failed: ${Nt}`, { level: "error" });
}
function E(pt) {
  let Le = _(7),
    { message: Fe, args: He, onDone: mt } = pt;
  Un(mt, 0);
  let pe;
  if (Le[0] !== He)
    ((pe = r(t, { dimColor: !0, children: [L.pointer, " /cd ", He] })),
      (Le[0] = He),
      (Le[1] = pe));
  else pe = Le[1];
  let me;
  if (Le[2] !== Fe)
    ((me = e(xe, { children: e(t, { children: Fe }) })),
      (Le[2] = Fe),
      (Le[3] = me));
  else me = Le[3];
  let co;
  if (Le[4] !== pe || Le[5] !== me)
    ((co = r(o, { flexDirection: "column", children: [pe, me] })),
      (Le[4] = pe),
      (Le[5] = me),
      (Le[6] = co));
  else co = Le[6];
  return co;
}
function ee(ft) {
  let R = _(33),
    {
      directory: Xe,
      trustRoot: fe,
      disclosures: oe,
      backstop: lo,
      onConfirm: Ae,
      onCancel: Ve,
    } = ft,
    k = lo === void 0 ? !1 : lo,
    uo = C(!1),
    go;
  if (R[0] === p) ((go = Date.now()), (R[0] = go));
  else go = R[0];
  let ht = C(go),
    po;
  if (R[1] === p)
    ((po = (yt) => {
      if (uo.current || ma(ht.current, mo)) {
        return;
      }
      ((uo.current = !0), yt());
    }),
      (R[1] = po));
  else po = R[1];
  let fo = po;
  const Be = k ? "Now in a new directory:" : "Moving to a new directory:";
  let he;
  if (R[2] !== Xe) ((he = an(Xe)), (R[2] = Xe), (R[3] = he));
  else he = R[3];
  let ye;
  if (R[4] !== he)
    ((ye = e(t, { bold: !0, children: he })), (R[4] = he), (R[5] = ye));
  else ye = R[5];
  let ve;
  if (R[6] !== fe)
    ((ve =
      fe != null &&
      r(t, {
        children: [
          "This directory is part of the repository at",
          " ",
          e(t, { bold: !0, children: an(fe) }),
          ". Trusting it trusts that whole repository, including its other worktrees and subdirectories.",
        ],
      })),
      (R[6] = fe),
      (R[7] = ve));
  else ve = R[7];
  let Ce;
  if (R[8] !== k)
    ((Ce = k
      ? e(t, {
          children:
            "Its settings declare project permission rules and/or additional directories. They apply only if you trust this directory explicitly (it is trusted through a parent directory so far).",
        })
      : r(N, {
          children: [
            r(t, {
              children: [
                "This session hasn",
                "'",
                "t worked here before. Is this a directory you created or one you trust?",
              ],
            }),
            r(t, {
              children: [
                "Claude Code",
                "'",
                "ll be able to read, edit, and execute files here.",
              ],
            }),
          ],
        })),
      (R[8] = k),
      (R[9] = Ce));
  else Ce = R[9];
  let Se;
  if (R[10] !== k || R[11] !== oe)
    ((Se =
      oe !== void 0 &&
      de(oe, { backstop: k }) &&
      e(Je, { disclosures: oe, backstop: k })),
      (R[10] = k),
      (R[11] = oe),
      (R[12] = Se));
  else Se = R[12];
  let ho;
  if (R[13] === p)
    ((ho = e(t, {
      dimColor: !0,
      children: e(ct, {
        url: "https://code.claude.com/docs/en/security",
        children: "Security guide",
      }),
    })),
      (R[13] = ho));
  else ho = R[13];
  const Ue = k ? "Yes, trust it and apply them" : "Yes, move here",
    Ee = k ? "No, keep them off" : "No, stay put";
  let we;
  if (R[14] !== Ae) ((we = () => fo(Ae)), (R[14] = Ae), (R[15] = we));
  else we = R[15];
  let je;
  if (R[16] !== Ve) ((je = () => fo(Ve)), (R[16] = Ve), (R[17] = je));
  else je = R[17];
  let Re;
  if (R[18] !== Ue || R[19] !== Ee || R[20] !== we || R[21] !== je)
    ((Re = e(En, {
      hideIndexes: !0,
      cancelFirst: !0,
      focus: "cancel",
      confirmLabel: Ue,
      cancelLabel: Ee,
      onConfirm: we,
      onCancel: je,
      windowMs: mo,
    })),
      (R[18] = Ue),
      (R[19] = Ee),
      (R[20] = we),
      (R[21] = je),
      (R[22] = Re));
  else Re = R[22];
  let yo;
  if (R[23] === p)
    ((yo = e(t, {
      dimColor: !0,
      children: r(ue, {
        children: [
          e(D, { chord: "enter", action: "confirm" }),
          e(D, { chord: "escape", action: "cancel" }),
        ],
      }),
    })),
      (R[23] = yo));
  else yo = R[23];
  let Me;
  if (
    R[24] !== Re ||
    R[25] !== ye ||
    R[26] !== ve ||
    R[27] !== Ce ||
    R[28] !== Se
  )
    ((Me = r(o, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [ye, ve, Ce, Se, ho, Re, yo],
    })),
      (R[24] = Re),
      (R[25] = ye),
      (R[26] = ve),
      (R[27] = Ce),
      (R[28] = Se),
      (R[29] = Me));
  else Me = R[29];
  let vo;
  if (R[30] !== Me || R[31] !== Be)
    ((vo = e(gs, {
      color: "warning",
      titleColor: "warning",
      title: Be,
      children: Me,
    })),
      (R[30] = Me),
      (R[31] = Be),
      (R[32] = vo));
  else vo = R[32];
  return vo;
}
function Je(vt) {
  let q = _(22),
    { disclosures: Ct, backstop: X } = vt,
    {
      allowRules: b,
      additionalDirectories: P,
      hookSources: be,
      commandHelperSources: Pe,
    } = Ct,
    De;
  if (q[0] !== b.rawCount || q[1] !== b.rules || q[2] !== b.sources)
    ((De =
      b.sources.length > 0 &&
      r(t, {
        bold: !0,
        color: "warning",
        children: [
          e(et, { status: "warning", withSpace: !0 }),
          "This directory pre-approves ",
          b.rawCount,
          " ",
          x(b.rawCount, "tool permission", "tool permissions"),
          " ",
          "in ",
          jb(b.sources),
          ":",
          " ",
          jb(b.rules, 8),
        ],
      })),
      (q[0] = b.rawCount),
      (q[1] = b.rules),
      (q[2] = b.sources),
      (q[3] = De));
  else De = q[3];
  let Te;
  if (q[4] !== P.dirs || q[5] !== P.rawCount || q[6] !== P.sources)
    ((Te =
      P.sources.length > 0 &&
      r(t, {
        bold: !0,
        color: "warning",
        children: [
          e(et, { status: "warning", withSpace: !0 }),
          "This directory grants access to ",
          P.rawCount,
          " ",
          "additional",
          " ",
          x(P.rawCount, "directory", "directories"),
          " ",
          "in ",
          jb(P.sources),
          ":",
          " ",
          jb(P.dirs, 6),
        ],
      })),
      (q[4] = P.dirs),
      (q[5] = P.rawCount),
      (q[6] = P.sources),
      (q[7] = Te));
  else Te = q[7];
  let Ge;
  if (q[8] !== X || q[9] !== be)
    ((Ge =
      !X &&
      be.length > 0 &&
      r(t, {
        bold: !0,
        color: "warning",
        children: [
          e(et, { status: "warning", withSpace: !0 }),
          "This directory configures hooks that run commands, declared in",
          " ",
          jb(be),
        ],
      })),
      (q[8] = X),
      (q[9] = be),
      (q[10] = Ge));
  else Ge = q[10];
  let Ne;
  if (q[11] !== X || q[12] !== Pe)
    ((Ne =
      !X &&
      Pe.length > 0 &&
      r(t, {
        bold: !0,
        color: "warning",
        children: [
          e(et, { status: "warning", withSpace: !0 }),
          "This directory runs commands on the session",
          "'",
          "s behalf (auth / header helpers), declared in",
          " ",
          jb(Pe),
        ],
      })),
      (q[11] = X),
      (q[12] = Pe),
      (q[13] = Ne));
  else Ne = q[13];
  const Ye = X
    ? "These apply to this session only if you trust it. Only proceed if you trust this configuration."
    : "These will apply to this session as soon as you move. Only proceed if you trust this configuration.";
  let ke;
  if (q[14] !== Ye)
    ((ke = e(t, { dimColor: !0, children: Ye })), (q[14] = Ye), (q[15] = ke));
  else ke = q[15];
  let Co;
  if (
    q[16] !== De ||
    q[17] !== Te ||
    q[18] !== Ge ||
    q[19] !== Ne ||
    q[20] !== ke
  )
    ((Co = r(o, { flexDirection: "column", children: [De, Te, Ge, Ne, ke] })),
      (q[16] = De),
      (q[17] = Te),
      (q[18] = Ge),
      (q[19] = Ne),
      (q[20] = ke),
      (q[21] = Co));
  else Co = q[21];
  return Co;
}
async function ut(s, a, l) {
  let c = (l ?? "").trim();
  if (!c)
    return e(E, {
      message: "Usage: /cd <path>",
      args: "",
      onDone: () => s("Usage: /cd <path>"),
    });
  let u = await NPt(c, ce(a));
  switch (u.result) {
    case "not_found": {
      let i = `Couldn't find a directory at ${ie.bold(u.path)}.`;
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "not_a_directory": {
      let i = `${ie.bold(u.path)} is not a directory. Did you mean ${ie.bold(u.parent)}?`;
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "same": {
      let i = `Already in ${ie.bold(an(u.directory))}.`;
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "blocked_by_rule": {
      let i = FPt(u.directory, u.check, ie.bold, { display: an });
      return e(E, { message: i, args: c, onDone: () => s(i) });
    }
    case "ok":
      break;
  }
  let h = u.directory,
    v = async () => {
      let i;
      try {
        i = await $Pt(a.session, h, "cd_command", a.storageV5);
      } catch (m) {
        return (
          n(`/cd relocate failed: ${m}`, { level: "error" }),
          s(
            `Couldn't move to ${ie.bold(an(h))} \u2014 the directory may no longer exist, or the session couldn't be moved. Staying in ${ie.bold(an(Q()))}.`,
          ),
          null
        );
      }
      try {
        a.retireDepartedAdditionalDirectories?.(
          i.departedAdditionalDirectories,
        );
      } catch (m) {
        n(
          `/cd: retiring the previous project's additional directories failed (continuing): ${m}`,
          { level: "error" },
        );
      }
      return {
        modelMessage: i.modelMessage,
        pending: await Mo(a),
        projectGrantsGated: i.projectGrantsGated,
        gatedNotice: i.gatedNotice,
      };
    },
    w = async (i, m) => {
      if ((await bo(a), m?.persistFailed))
        f("mcp_project_approval_dialog", "mcp_approval_persist_failed");
      else if (m) y("mcp_project_approval_dialog");
      s(
        m?.persistFailed
          ? `Moved to ${ie.bold(an(h))}. One or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \u2014 you will be asked again next time.`
          : `Moved to ${ie.bold(an(h))}`,
        { display: "system", metaMessages: [i] },
      );
    };
  if (P6(h)) {
    let i = await v();
    if (i === null) return null;
    if (i.projectGrantsGated) return e(ne, { outcome: i, onComplete: w });
    if (i.pending.pendingServers.length === 0)
      return (await w(i.modelMessage), null);
    return e(Y, {
      pending: i.pending,
      onComplete: (m) => void w(i.modelMessage, m),
    });
  }
  let g = vA(so(h)),
    G;
  try {
    G = Oe(h);
  } catch (i) {
    n(
      `/cd: reading the target's project settings for the trust prompt failed: ${i}`,
      { level: "error" },
    );
  }
  return e(no, {
    directory: h,
    trustRoot: g != null && g !== so(h) ? g : void 0,
    disclosures: G,
    onConfirm: async () => (
      await XWe(h, a.storageV5).catch((i) => {
        n(`/cd: persisting trust failed: ${i}`, { level: "error" });
      }),
      v()
    ),
    onComplete: w,
    onCancel: () => {
      s(`Staying in ${ie.bold(an(Q()))}`);
    },
  });
}
async function Mo(s) {
  let a = { pendingServers: [], pluginServerNames: new Set() };
  try {
    let l = await vot(s.storageV5);
    if (l.pendingServers.length > 0 && Dbe().length > 0)
      return (
        n(
          "/cd: project MCP servers await approval but a settings file has errors; leaving them pending",
          { level: "warn" },
        ),
        a
      );
    return l;
  } catch (l) {
    return (
      n(
        `/cd: collecting the new directory's project MCP servers failed (continuing without approvals): ${l}`,
        { level: "error" },
      ),
      a
    );
  }
}
async function bo(s) {
  try {
    await s.reloadPlugins?.();
  } catch (a) {
    n(
      `/cd: refreshing plugins/MCP for the new directory failed (continuing): ${a}`,
      { level: "error" },
    );
  }
}
function Y(St) {
  let qe = _(11),
    { pending: J, onComplete: I } = St,
    [A, ...wt] = J.pendingServers;
  if (A !== void 0 && wt.length === 0) {
    let V;
    if (qe[0] !== A || qe[1] !== J.pluginServerNames)
      ((V = J.pluginServerNames.has(A)),
        (qe[0] = A),
        (qe[1] = J.pluginServerNames),
        (qe[2] = V));
    else V = qe[2];
    let So;
    if (qe[3] !== I || qe[4] !== A || qe[5] !== V)
      ((So = e(Aot, { serverName: A, isPluginServer: V, onDone: I })),
        (qe[3] = I),
        (qe[4] = A),
        (qe[5] = V),
        (qe[6] = So));
    else So = qe[6];
    return So;
  }
  let V;
  if (
    qe[7] !== I ||
    qe[8] !== J.pendingServers ||
    qe[9] !== J.pluginServerNames
  )
    ((V = e(Cot, {
      serverNames: J.pendingServers,
      pluginServerNames: J.pluginServerNames,
      onDone: I,
    })),
      (qe[7] = I),
      (qe[8] = J.pendingServers),
      (qe[9] = J.pluginServerNames),
      (qe[10] = V));
  else V = qe[10];
  return V;
}
function no(jt) {
  let te = _(18),
    {
      directory: Ie,
      trustRoot: Ke,
      disclosures: Qe,
      onConfirm: Ze,
      onComplete: H,
      onCancel: ze,
    } = jt,
    [T, Rt] = d(null);
  if (T !== null) {
    if (T.projectGrantsGated) {
      let M;
      if (te[0] !== T || te[1] !== H)
        ((M = e(ne, { outcome: T, onComplete: H })),
          (te[0] = T),
          (te[1] = H),
          (te[2] = M));
      else M = te[2];
      return M;
    }
    let M;
    if (te[3] !== T.modelMessage || te[4] !== H)
      ((M = (Mt) => void H(T.modelMessage, Mt)),
        (te[3] = T.modelMessage),
        (te[4] = H),
        (te[5] = M));
    else M = te[5];
    let re;
    if (te[6] !== T.pending || te[7] !== M)
      ((re = e(Y, { pending: T.pending, onComplete: M })),
        (te[6] = T.pending),
        (te[7] = M),
        (te[8] = re));
    else re = te[8];
    return re;
  }
  let M;
  if (te[9] !== H || te[10] !== Ze)
    ((M = () => {
      Ze().then((se) => {
        if (se === null) {
          return;
        }
        if (!se.projectGrantsGated && se.pending.pendingServers.length === 0) {
          return H(se.modelMessage);
        }
        Rt(se);
      });
    }),
      (te[9] = H),
      (te[10] = Ze),
      (te[11] = M));
  else M = te[11];
  let re;
  if (
    te[12] !== Ie ||
    te[13] !== Qe ||
    te[14] !== ze ||
    te[15] !== M ||
    te[16] !== Ke
  )
    ((re = e(ee, {
      directory: Ie,
      trustRoot: Ke,
      disclosures: Qe,
      onConfirm: M,
      onCancel: ze,
    })),
      (te[12] = Ie),
      (te[13] = Qe),
      (te[14] = ze),
      (te[15] = M),
      (te[16] = Ke),
      (te[17] = re));
  else re = te[17];
  return re;
}
function ne(We) {
  let B = _(25),
    { outcome: j, onComplete: K } = We,
    { storageV5: eo } = _e(),
    [oo, bt] = d(j.modelMessage),
    [Pt, Dt] = d(!j.projectGrantsGated),
    [O] = d(Q),
    wo;
  if (B[0] !== O) ((wo = () => vA(O)), (B[0] = O), (B[1] = wo));
  else wo = B[1];
  let [to] = d(wo),
    [ro] = d(Po);
  if (!Pt) {
    let U;
    if (B[2] !== K || B[3] !== j.pending.pendingServers.length)
      ((U = (jo) => {
        if ((bt(jo), Dt(!0), j.pending.pendingServers.length === 0)) K(jo);
      }),
        (B[2] = K),
        (B[3] = j.pending.pendingServers.length),
        (B[4] = U));
    else U = B[4];
    let Z = U;
    const z = to != null && to !== O ? to : void 0;
    let $e;
    if (B[5] !== O || B[6] !== Z || B[7] !== j || B[8] !== eo)
      (($e = () => {
        XWe(O, eo)
          .catch(Do)
          .then(() => {
            try {
              UPt();
            } catch (W) {
              let Tt = W;
              n(
                `/cd: re-applying the project settings after the trust change failed: ${Tt}`,
                { level: "error" },
              );
            }
            Z(BPt(j));
          });
      }),
        (B[5] = O),
        (B[6] = Z),
        (B[7] = j),
        (B[8] = eo),
        (B[9] = $e));
    else $e = B[9];
    let W;
    if (B[10] !== Z || B[11] !== j.modelMessage)
      ((W = () => Z(j.modelMessage)),
        (B[10] = Z),
        (B[11] = j.modelMessage),
        (B[12] = W));
    else W = B[12];
    let Ro;
    if (
      B[13] !== O ||
      B[14] !== ro ||
      B[15] !== z ||
      B[16] !== $e ||
      B[17] !== W
    )
      ((Ro = e(ee, {
        backstop: !0,
        directory: O,
        trustRoot: z,
        disclosures: ro,
        onConfirm: $e,
        onCancel: W,
      })),
        (B[13] = O),
        (B[14] = ro),
        (B[15] = z),
        (B[16] = $e),
        (B[17] = W),
        (B[18] = Ro));
    else Ro = B[18];
    return Ro;
  }
  if (j.pending.pendingServers.length === 0) {
    return null;
  }
  let U;
  if (B[19] !== oo || B[20] !== K)
    ((U = (Gt) => void K(oo, Gt)), (B[19] = oo), (B[20] = K), (B[21] = U));
  else U = B[21];
  let z;
  if (B[22] !== j.pending || B[23] !== U)
    ((z = e(Y, { pending: j.pending, onComplete: U })),
      (B[22] = j.pending),
      (B[23] = U),
      (B[24] = z));
  else z = B[24];
  return z;
}
export { ee as CdTrustPrompt, no as CdUntrustedMoveFlow, ut as call };

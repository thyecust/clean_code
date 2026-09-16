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
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
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
import { Ia, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { Fe } from "../Git-Worktree/chunk-9ys1bnqr.js";
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
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { U, It } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { ui, fa, $o, vs, ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { TV, b2t, lH, A2t, S4n, C2t, Ipn, Ng } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { vh } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import { Q3 } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
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
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
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
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import { Rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import { lu } from "../../01-核心基础设施/共享小工具-未细化/chunk-qck6h2yw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import * as fe from "path";
F();
function St(Wo) {
  return { ...Wo, autoConnectIde: !1 };
}
function ne(_o) {
  let O = _(20),
    { onComplete: X } = _o,
    { storageV5: $e } = _e(),
    Ae = ui(mo),
    { refusedWithin: je, noteRefused: Me, epoch: ko } = $o(),
    We = fa(ko, mo),
    Le = C(!1),
    ht;
  if (O[0] !== Ae || O[1] !== Me || O[2] !== je)
    ((ht = () => {
      if (Ae() || je(mo)) {
        return (Me(), !0);
      }
      return !1;
    }),
      (O[0] = Ae),
      (O[1] = Me),
      (O[2] = je),
      (O[3] = ht));
  else ht = O[3];
  let M = ht,
    gt;
  if (O[4] !== X || O[5] !== M || O[6] !== $e)
    ((gt = async (Po) => {
      if (M()) {
        return;
      }
      if (Le.current) {
        return;
      }
      Le.current = !0;
      let Fo = Po === "yes";
      (await Te(
        (Ao) => ({
          ...Ao,
          autoConnectIde: Fo,
          hasIdeAutoConnectDialogBeenShown: !0,
        }),
        $e,
      ),
        X());
    }),
      (O[4] = X),
      (O[5] = M),
      (O[6] = $e),
      (O[7] = gt));
  else gt = O[7];
  let Oe = gt,
    Dt;
  if (O[8] !== X || O[9] !== M)
    ((Dt = () => {
      if (M()) {
        return;
      }
      if (Le.current) {
        return;
      }
      X();
    }),
      (O[8] = X),
      (O[9] = M),
      (O[10] = Dt));
  else Dt = O[10];
  let Be = Dt,
    Ct;
  if (O[11] === p)
    ((Ct = [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ]),
      (O[11] = Ct));
  else Ct = O[11];
  let jo = Ct,
    he;
  if (O[12] !== Oe || O[13] !== We.remountKey || O[14] !== M)
    ((he = e(
      ve,
      {
        hideIndexes: !0,
        refuseInput: M,
        options: jo,
        onChange: Oe,
        defaultFocusValue: "no",
        selectedValue: vs,
      },
      We.remountKey,
    )),
      (O[12] = Oe),
      (O[13] = We.remountKey),
      (O[14] = M),
      (O[15] = he));
  else he = O[15];
  let yt;
  if (O[16] === p)
    ((yt = e(t, {
      dimColor: !0,
      children: "You can also configure this in /config or with the --ide flag",
    })),
      (O[16] = yt));
  else yt = O[16];
  let wt;
  if (O[17] !== Be || O[18] !== he)
    ((wt = r(de, {
      title: "Do you wish to enable auto-connect to IDE?",
      color: "ide",
      onCancel: Be,
      children: [he, yt],
    })),
      (O[17] = Be),
      (O[18] = he),
      (O[19] = wt));
  else wt = O[19];
  return wt;
}
function De() {
  let n = ee();
  return (
    !lH() &&
    n.autoConnectIde !== !0 &&
    n.hasIdeAutoConnectDialogBeenShown !== !0
  );
}
function re(Mo) {
  let ge = _(11),
    { onComplete: H } = Mo,
    { storageV5: Ye } = _e(),
    Et;
  if (ge[0] !== H || ge[1] !== Ye)
    ((Et = () => {
      (Te(St, Ye), H(!0));
    }),
      (ge[0] = H),
      (ge[1] = Ye),
      (ge[2] = Et));
  else Et = ge[2];
  let qe = Et,
    bt;
  if (ge[3] !== H)
    ((bt = () => {
      H(!1);
    }),
      (ge[3] = H),
      (ge[4] = bt));
  else bt = ge[4];
  let K = bt,
    Ie;
  if (ge[5] !== K || ge[6] !== qe)
    ((Ie = e(En, {
      hideIndexes: !0,
      cancelFirst: !0,
      focus: "cancel",
      onConfirm: qe,
      onCancel: K,
    })),
      (ge[5] = K),
      (ge[6] = qe),
      (ge[7] = Ie));
  else Ie = ge[7];
  let vt;
  if (ge[8] !== K || ge[9] !== Ie)
    ((vt = e(de, {
      title: "Do you wish to disable auto-connect to IDE?",
      subtitle: "You can also configure this in /config",
      onCancel: K,
      color: "ide",
      children: Ie,
    })),
      (ge[8] = K),
      (ge[9] = Ie),
      (ge[10] = vt));
  else vt = ge[10];
  return vt;
}
function Ce() {
  let n = ee();
  return !lH() && n.autoConnectIde === !0;
}
function ro(Ke, kt) {
  return ((Ke[kt.name] = (Ke[kt.name] || 0) + 1), Ke);
}
function so(Pt) {
  return Pt.name === "VS Code" || Pt.name === "Visual Studio Code";
}
function ao(Ft, Dn) {
  return e(
    lu,
    {
      children: r(t, {
        dimColor: !0,
        children: [Ft.name, ": ", me(Ft.workspaceFolders)],
      }),
    },
    Dn,
  );
}
function co(Ot) {
  return { label: Ot.name, value: Ot.port.toString() };
}
function lo(Xt) {
  return { label: Ng(Xt), value: Xt };
}
function go(An) {
  return An.name === "ide";
}
function uo(jn) {
  return jn.mcp.clients.find(go);
}
function po() {}
function Io(Mn) {
  return Mn.name !== "ide";
}
function Do(Wn) {
  return !Wn.name?.startsWith("mcp__ide__");
}
function Co(Ln) {
  return !Ln.name?.startsWith("mcp__ide__");
}
function fo(pe) {
  return {
    ...pe,
    mcp: {
      ...pe.mcp,
      clients: pe.mcp.clients.filter(Io),
      tools: pe.mcp.tools.filter(Do),
      commands: pe.mcp.commands.filter(Co),
    },
  };
}
function ho(On) {
  let { ide: _removed, ...Bn } = On ?? {};
  return Bn;
}
function Pe(dn) {
  let A = _(30),
    {
      availableIDEs: V,
      unavailableIDEs: B,
      selectedIDE: Je,
      onClose: ze,
      onSelect: Z,
    } = dn,
    Rt;
  if (A[0] !== Je?.port)
    ((Rt = Je?.port?.toString() ?? "None"), (A[0] = Je?.port), (A[1] = Rt));
  else Rt = A[1];
  let [Y, un] = d(Rt),
    [pn, mn] = d(!1),
    [fn, hn] = d(!1),
    xt;
  if (A[2] !== V || A[3] !== Z)
    ((xt = (Xe) => {
      if (Xe !== "None" && De()) mn(!0);
      else if (Xe === "None" && Ce()) hn(!0);
      else Z(V.find((gn) => gn.port === parseInt(Xe)));
    }),
      (A[2] = V),
      (A[3] = Z),
      (A[4] = xt));
  else xt = A[4];
  let G = xt,
    Nt;
  if (A[5] !== V) ((Nt = V.reduce(ro, {})), (A[5] = V), (A[6] = Nt));
  else Nt = A[6];
  let se = Nt,
    Tt;
  if (A[7] !== V || A[8] !== se) {
    let k;
    if (A[10] !== se)
      ((k = (ae) => {
        let In = (se[ae.name] || 0) > 1 && ae.workspaceFolders.length > 0;
        return {
          label: ae.name,
          value: ae.port.toString(),
          description: In ? me(ae.workspaceFolders) : void 0,
        };
      }),
        (A[10] = se),
        (A[11] = k));
    else k = A[11];
    Tt = V.map(k).concat([
      { label: "None", value: "None", description: void 0 },
    ]);
    ((A[7] = V), (A[8] = se), (A[9] = Tt));
  } else Tt = A[9];
  let He = Tt;
  if (pn) {
    let k;
    if (A[12] !== G || A[13] !== Y)
      ((k = e(ne, { onComplete: () => G(Y) })),
        (A[12] = G),
        (A[13] = Y),
        (A[14] = k));
    else k = A[14];
    return k;
  }
  if (fn) {
    let k;
    if (A[15] !== Z)
      ((k = e(re, {
        onComplete: () => {
          Z(void 0);
        },
      })),
        (A[15] = Z),
        (A[16] = k));
    else k = A[16];
    return k;
  }
  let k;
  if (A[17] !== V || A[18] !== G || A[19] !== He || A[20] !== Y)
    ((k =
      V.length === 0
        ? e(Rn, {
            children: b2t()
              ? `No available IDEs detected. Please install the plugin and restart your IDE:
https://code.claude.com/docs/en/jetbrains`
              : "No available IDEs detected. Make sure your IDE has the Claude Code extension or plugin installed and is running.",
          })
        : r(N, {
            children: [
              e(ve, {
                defaultValue: Y,
                defaultFocusValue: Y,
                options: He,
                onChange: (Vt) => {
                  (un(Vt), G(Vt));
                },
              }),
              V.some(so) &&
                e(o, {
                  marginTop: 1,
                  children: e(t, {
                    color: "warning",
                    children:
                      "Note: Only one Claude Code instance can be connected to VS Code at a time.",
                  }),
                }),
              !lH() &&
                e(o, {
                  marginTop: 1,
                  children: e(t, {
                    dimColor: !0,
                    children:
                      "Tip: You can enable auto-connect to IDE in /config or with the --ide flag",
                  }),
                }),
            ],
          })),
      (A[17] = V),
      (A[18] = G),
      (A[19] = He),
      (A[20] = Y),
      (A[21] = k));
  else k = A[21];
  let ye;
  if (A[22] !== B)
    ((ye =
      B.length > 0 &&
      r(o, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          r(t, {
            dimColor: !0,
            children: [
              "Found ",
              B.length,
              " other running IDE(s). However, their workspace/project directories do not match the current cwd.",
            ],
          }),
          r(o, {
            marginTop: 1,
            paddingLeft: 3,
            flexDirection: "column",
            children: [
              B.slice(0, 4).map(ao),
              B.length > 4 && e(vh, { count: B.length - 4, unit: "IDE" }),
            ],
          }),
        ],
      })),
      (A[22] = B),
      (A[23] = ye));
  else ye = A[23];
  let we;
  if (A[24] !== k || A[25] !== ye)
    ((we = r(o, { flexDirection: "column", children: [k, ye] })),
      (A[24] = k),
      (A[25] = ye),
      (A[26] = we));
  else we = A[26];
  let _t;
  if (A[27] !== ze || A[28] !== we)
    ((_t = e(de, {
      title: "Select IDE",
      subtitle: "Connect to an IDE for integrated development features.",
      onCancel: ze,
      color: "ide",
      children: we,
    })),
      (A[27] = ze),
      (A[28] = we),
      (A[29] = _t));
  else _t = A[29];
  return _t;
}
async function no(n, s) {
  let m = s?.ide;
  if (!m || (m.type !== "sse-ide" && m.type !== "ws-ide")) return null;
  for (let l of n) if (l.url === m.url) return l;
  return null;
}
function ut(Cn) {
  let q = _(18),
    { availableIDEs: W, onSelectIDE: Ue, onDone: Qe } = Cn,
    $t;
  if (q[0] !== W[0]?.port)
    (($t = W[0]?.port?.toString() ?? ""), (q[0] = W[0]?.port), (q[1] = $t));
  else $t = q[1];
  let [Ee, yn] = d($t),
    At;
  if (q[2] !== W || q[3] !== Ue)
    ((At = (wn) => {
      let vn = W.find((bn) => bn.port === parseInt(wn));
      Ue(vn);
    }),
      (q[2] = W),
      (q[3] = Ue),
      (q[4] = At));
  else At = q[4];
  let Ze = At,
    jt;
  if (q[5] !== W) ((jt = W.map(co)), (q[5] = W), (q[6] = jt));
  else jt = q[6];
  let Ge = jt,
    Mt;
  if (q[7] !== Qe)
    ((Mt = function ce() {
      Qe("IDE selection cancelled", { display: "system" });
    }),
      (q[7] = Qe),
      (q[8] = Mt));
  else Mt = q[8];
  let ce = Mt,
    be;
  if (q[9] !== Ze)
    ((be = (Wt) => {
      (yn(Wt), Ze(Wt));
    }),
      (q[9] = Ze),
      (q[10] = be));
  else be = q[10];
  let Se;
  if (q[11] !== Ge || q[12] !== Ee || q[13] !== be)
    ((Se = e(ve, {
      defaultValue: Ee,
      defaultFocusValue: Ee,
      options: Ge,
      onChange: be,
    })),
      (q[11] = Ge),
      (q[12] = Ee),
      (q[13] = be),
      (q[14] = Se));
  else Se = q[14];
  let Lt;
  if (q[15] !== ce || q[16] !== Se)
    ((Lt = e(de, {
      title: "Select an IDE to open the project",
      onCancel: ce,
      color: "ide",
      children: Se,
    })),
      (q[15] = ce),
      (q[16] = Se),
      (q[17] = Lt));
  else Lt = q[17];
  return Lt;
}
function pt(Sn) {
  let te = _(15),
    { runningIDEs: Re, onSelectIDE: et, onDone: tt } = Sn,
    [ot, xn] = d(Re[0] ?? ""),
    Bt;
  if (te[0] !== et)
    ((Bt = (Nn) => {
      et(Nn);
    }),
      (te[0] = et),
      (te[1] = Bt));
  else Bt = te[1];
  let nt = Bt,
    Yt;
  if (te[2] !== Re) ((Yt = Re.map(lo)), (te[2] = Re), (te[3] = Yt));
  else Yt = te[3];
  let it = Yt,
    qt;
  if (te[4] !== tt)
    ((qt = function le() {
      tt("IDE selection cancelled", { display: "system" });
    }),
      (te[4] = tt),
      (te[5] = qt));
  else qt = te[5];
  let le = qt,
    xe;
  if (te[6] !== nt)
    ((xe = (Jt) => {
      (xn(Jt), nt(Jt));
    }),
      (te[6] = nt),
      (te[7] = xe));
  else xe = te[7];
  let Ne;
  if (te[8] !== it || te[9] !== ot || te[10] !== xe)
    ((Ne = e(ve, { defaultFocusValue: ot, options: it, onChange: xe })),
      (te[8] = it),
      (te[9] = ot),
      (te[10] = xe),
      (te[11] = Ne));
  else Ne = te[11];
  let zt;
  if (te[12] !== le || te[13] !== Ne)
    ((zt = e(de, {
      title: "Select IDE to install extension",
      onCancel: le,
      color: "ide",
      children: Ne,
    })),
      (te[12] = le),
      (te[13] = Ne),
      (te[14] = zt));
  else zt = te[14];
  return zt;
}
function mt(Tn) {
  let Vn = _(4),
    { ide: Ve, onInstall: ke } = Tn,
    Ht,
    Kt;
  if (Vn[0] !== Ve || Vn[1] !== ke)
    ((Ht = () => {
      ke(Ve);
    }),
      (Kt = [Ve, ke]),
      (Vn[0] = Ve),
      (Vn[1] = ke),
      (Vn[2] = Ht),
      (Vn[3] = Kt));
  else ((Ht = Vn[2]), (Kt = Vn[3]));
  return (E(Ht, Kt), null);
}
async function io(n, s, m, l) {
  if (!n) {
    l("No IDE selected.");
    return;
  }
  let h = S4n(n.name),
    a = h ? await C2t(h, n.name) : null;
  if (!a) {
    l(
      `Please open the ${m ? "worktree" : "project"} manually in ${ie.bold(n.name)}: ${s}`,
    );
    return;
  }
  let w = { useCwd: !0, useToolMemoryCgroup: !1 },
    { code: g } = await Fe(a, [s], w);
  if (g !== 0 && !fe.basename(a).startsWith("code"))
    ({ code: g } = await Fe("code", [s], w));
  if (g === 0) {
    (y("ide_open_project"),
      l(`Opened ${m ? "worktree" : "project"} in ${ie.bold(n.name)}`));
    return;
  }
  (f("ide_open_project", "ide_open_project_failed"),
    l(`Failed to open in ${n.name}. Try opening manually: ${s}`));
}
async function cn(n, s, m) {
  i("tengu_ext_ide_command", {});
  let {
    options: { dynamicMcpConfig: l },
    onChangeDynamicMcpConfig: h,
  } = s;
  if (m?.trim() === "open") {
    let I = Ia(),
      x = I ? I.worktreePath : Q(),
      b = (await A2t(!0)).filter((T) => T.isValid);
    if (b.length === 0)
      return (n("No IDEs with Claude Code extension detected."), null);
    return e(ut, {
      availableIDEs: b,
      onSelectIDE: (T) => io(T, x, !!I, n),
      onDone: () => {
        n("Exited without opening IDE", { display: "system" });
      },
    });
  }
  let a = await A2t(!0);
  if (a.length === 0 && s.onInstallIDEExtension && !lH()) {
    let I = await Ipn(),
      x = (D) => {
        if (s.onInstallIDEExtension)
          if ((s.onInstallIDEExtension(D), TV(D)))
            n(`Installed plugin to ${ie.bold(Ng(D))}
Please ${ie.bold("restart your IDE")} completely for it to take effect`);
          else n(`Installed extension to ${ie.bold(Ng(D))}`);
      };
    if (I.length > 1)
      return e(pt, {
        runningIDEs: I,
        onSelectIDE: x,
        onDone: () => {
          n("No IDE selected.", { display: "system" });
        },
      });
    else if (I.length === 1) return e(mt, { ide: I[0], onInstall: x });
  }
  let w = a.filter((I) => I.isValid),
    g = a.filter((I) => !I.isValid),
    u = await no(w, l);
  return e(ft, {
    availableIDEs: w,
    unavailableIDEs: g,
    currentIDE: u,
    onChangeDynamicMcpConfig: h,
    onDone: n,
  });
}
var dt = 35000;
function ft(_n) {
  let J = _(27),
    {
      availableIDEs: rt,
      unavailableIDEs: st,
      currentIDE: L,
      onChangeDynamicMcpConfig: ue,
      onDone: v,
    } = _n,
    [S, kn] = d(null),
    P = U(uo),
    at = It(),
    ct = C(!0),
    Ut,
    Qt;
  if (J[0] !== S || J[1] !== P || J[2] !== v)
    ((Ut = () => {
      if (!S) {
        return;
      }
      if (ct.current) {
        ct.current = !1;
        return;
      }
      if (!P || P.type === "pending") {
        return;
      }
      if (P.type === "connected")
        (y("ide_connect"), v(`Connected to ${S.name}.`));
      else if (P.type === "failed")
        (f("ide_connect", "ide_connect_failed"),
          v(`Failed to connect to ${S.name}.`));
    }),
      (Qt = [P, S, v]),
      (J[0] = S),
      (J[1] = P),
      (J[2] = v),
      (J[3] = Ut),
      (J[4] = Qt));
  else ((Ut = J[3]), (Qt = J[4]));
  E(Ut, Qt);
  let Zt;
  if (J[5] !== S || J[6] !== v)
    ((Zt = () => {
      if (!S) {
        return;
      }
      (f("ide_connect", "ide_connect_timeout"),
        v(`Connection to ${S.name} timed out.`));
    }),
      (J[5] = S),
      (J[6] = v),
      (J[7] = Zt));
  else Zt = J[7];
  let Gt;
  if (J[8] !== S || J[9] !== v)
    ((Gt = [S, v]), (J[8] = S), (J[9] = v), (J[10] = Gt));
  else Gt = J[10];
  Un(Zt, S ? dt : null, Gt);
  let eo;
  if (J[11] !== L || J[12] !== P || J[13] !== ue || J[14] !== v || J[15] !== at)
    ((eo = (oe) => {
      if (!ue) {
        v("Error connecting to IDE.");
        return;
      }
      if (!oe) {
        if (P && P.type === "connected" && L) {
          Q3(P, po);
          let { clearServerCache: Pn } = import.meta
            .require("../MCP客户端/mcpClientModule.4cyej0np.js")
            .mcpClientModule();
          (Pn("ide", P.config), at(fo));
        }
        if ((ue(ho), L)) y("ide_disconnect");
        v(L ? `Disconnected from ${L.name}.` : "No IDE selected.");
        return;
      }
      let to = oe.url;
      let Fn = {
        type: to.startsWith("ws:") ? "ws-ide" : "sse-ide",
        url: to,
        ideName: oe.name,
        authToken: oe.authToken,
        ideRunningInWindows: oe.ideRunningInWindows,
        scope: "dynamic",
      };
      ((ct.current = !0), kn(oe), ue(($n) => ({ ...$n, ide: Fn })));
    }),
      (J[11] = L),
      (J[12] = P),
      (J[13] = ue),
      (J[14] = v),
      (J[15] = at),
      (J[16] = eo));
  else eo = J[16];
  let lt = eo;
  if (S) {
    let z;
    if (J[17] !== S.name)
      ((z = r(t, {
        dimColor: !0,
        children: ["Connecting to ", S.name, "\u2026"],
      })),
        (J[17] = S.name),
        (J[18] = z));
    else z = J[18];
    return z;
  }
  let z;
  if (J[19] !== v)
    ((z = () => v("IDE selection cancelled", { display: "system" })),
      (J[19] = v),
      (J[20] = z));
  else z = J[20];
  let oo;
  if (
    J[21] !== rt ||
    J[22] !== L ||
    J[23] !== lt ||
    J[24] !== z ||
    J[25] !== st
  )
    ((oo = e(Pe, {
      availableIDEs: rt,
      unavailableIDEs: st,
      selectedIDE: L,
      onClose: z,
      onSelect: lt,
    })),
      (J[21] = rt),
      (J[22] = L),
      (J[23] = lt),
      (J[24] = z),
      (J[25] = st),
      (J[26] = oo));
  else oo = J[26];
  return oo;
}
function me(n, s = 100) {
  if (n.length === 0) return "";
  let m = Q(),
    l = n.slice(0, 2),
    h = n.length > 2,
    a = h ? 3 : 0,
    w = (l.length - 1) * 2,
    g = s - w - a,
    u = Math.floor(g / l.length),
    I = m.normalize("NFC"),
    D = l
      .map((b) => {
        let T = b.normalize("NFC");
        if (T.startsWith(I + fe.sep)) b = T.slice(I.length + 1);
        if (b.length <= u) return b;
        return "\u2026" + b.slice(-(u - 1));
      })
      .join(", ");
  if (h) D += ", \u2026";
  return D;
}
export {
  ft as IDECommandFlow,
  dt as IDE_CONNECTION_TIMEOUT_MS,
  cn as call,
  me as formatWorkspaceFolders,
  io as openProjectInSelectedIDE,
};

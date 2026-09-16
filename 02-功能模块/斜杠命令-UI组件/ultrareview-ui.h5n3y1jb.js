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
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Ub } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { hb, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import { Do } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
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
import { op } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { CDt, vDt, Z9e, RDt, e3e, kDt, xDt, t3e } from "../CodeReview/CodeReview.ddrd6y06.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../策略限制(PolicyLimits)/chunk-hpw6352m.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { q7, HF, BOe, Km, q3 } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
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
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../CodeReview/chunk-rp57gfa9.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { o, t, ct, bs } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { cu } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { Rs } from "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import { l9e, o4 } from "../状态栏-主题/chunk-jrr487ty.js";
import { b6e, sst } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { Ai } from "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { Dn, kn, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
function qe() {
  return !ee().hasSeenUltrareviewTerms;
}
function ze() {
  return null;
}
function Qe(Pe) {
  return Pe.hasSeenUltrareviewTerms
    ? Pe
    : { ...Pe, hasSeenUltrareviewTerms: !0 };
}
function me(ho) {
  let O = _(27),
    {
      subtitle: fe,
      body: he,
      scope: pe,
      postOption: ge,
      onProceed: be,
      onCancel: x,
    } = ho;
  Rs("ultrareview-launch");
  let { storageV5: we } = _e(),
    [T] = d(qe),
    [Ce, De] = d(!1),
    [ye, po] = d(null),
    xe;
  if (O[0] === p) ((xe = new AbortController()), (O[0] = xe));
  else xe = O[0];
  let Re = C(xe),
    Ae;
  if (O[1] !== T)
    ((Ae = () => (T ? b6e().catch(ze) : null)), (O[1] = T), (O[2] = Ae));
  else Ae = O[2];
  let [Le] = d(Ae),
    q = C(!1),
    Fe;
  if (O[3] !== x || O[4] !== be || O[5] !== T || O[6] !== we)
    ((Fe = (z) => {
      if (q.current) {
        return;
      }
      if (((q.current = !0), z === "proceed" || z === "proceed-post")) {
        if (T) Te(Qe, we);
        (po(z),
          De(!0),
          be(Re.current.signal, { postToPR: z === "proceed-post" }).catch(
            () => {
              ((q.current = !1), De(!1));
            },
          ));
      } else (Re.current.abort(), x());
    }),
      (O[3] = x),
      (O[4] = be),
      (O[5] = T),
      (O[6] = we),
      (O[7] = Fe));
  else Fe = O[7];
  let Se = Fe,
    Me;
  if (O[8] !== x)
    ((Me = () => {
      ((q.current = !0), Re.current.abort(), x());
    }),
      (O[8] = x),
      (O[9] = Me));
  else Me = O[9];
  let A = Me,
    Q;
  if (O[10] !== fe)
    ((Q = fe ?? `${HF()} \xB7 Est. cost ${q7()} USD`),
      (O[10] = fe),
      (O[11] = Q));
  else Q = O[11];
  let Ee;
  if (O[12] === p)
    ((Ee = e(t, { dimColor: !0, children: "Loading\u2026" })), (O[12] = Ee));
  else Ee = O[12];
  let Y;
  if (
    O[13] !== he ||
    O[14] !== A ||
    O[15] !== Se ||
    O[16] !== Ce ||
    O[17] !== ye ||
    O[18] !== ge ||
    O[19] !== pe ||
    O[20] !== T ||
    O[21] !== Le
  )
    ((Y = e(Dn, {
      fallback: Ee,
      children: e(ce, {
        showTerms: T,
        sourcePromise: Le,
        body: he,
        scope: pe,
        postOption: ge,
        retryFocus: ye,
        isLaunching: Ce,
        onSelect: Se,
        onCancel: A,
      }),
    })),
      (O[13] = he),
      (O[14] = A),
      (O[15] = Se),
      (O[16] = Ce),
      (O[17] = ye),
      (O[18] = ge),
      (O[19] = pe),
      (O[20] = T),
      (O[21] = Le),
      (O[22] = Y));
  else Y = O[22];
  let Ge;
  if (O[23] !== A || O[24] !== Q || O[25] !== Y)
    ((Ge = e(de, {
      title: "Run ultrareview in the cloud?",
      subtitle: Q,
      onCancel: A,
      children: Y,
    })),
      (O[23] = A),
      (O[24] = Q),
      (O[25] = Y),
      (O[26] = Ge));
  else Ge = O[26];
  return Ge;
}
function ce(go) {
  let J = _(24),
    {
      showTerms: B,
      sourcePromise: Ie,
      body: M,
      scope: a,
      postOption: D,
      retryFocus: ke,
      isLaunching: Ne,
      onSelect: j,
      onCancel: K,
    } = go,
    Z = Ie ? kn(Ie) : null,
    He;
  if (J[0] !== Z) ((He = Z && sst(Z)), (J[0] = Z), (J[1] = He));
  else He = J[1];
  let oe = He,
    E = D
      ? `When it finishes, Claude can post the findings to the PR as a single comment from your GitHub account${D.githubLogin ? ` (@${D.githubLogin})` : ""} \u2014 one plain comment, not a review or an approval, and it carries a "Generated by Claude Code" note.`
      : null,
    ne =
      a.mode === "pr"
        ? `Reviewing ${a.repo}#${a.prNumber} fetched from GitHub.`
        : a.noMergeBase === "unrelated_history"
          ? `Reviewing all files (no common history with ${a.baseBranch}).`
          : a.noMergeBase === "base_ref_missing"
            ? `Reviewing all files (no ${a.baseBranch} branch to compare against).`
            : a.headBranch === a.baseBranch
              ? `Reviewing local changes on ${a.baseBranch}.`
              : `Reviewing ${a.headBranch} against ${a.baseBranch}.`,
    G = a.mode === "branch" && a.diffStat ? a.diffStat : null,
    Je;
  if (J[2] !== a.instructions || J[3] !== a.mode)
    ((Je =
      a.mode === "branch" && a.instructions
        ? `Note for findings (not a base branch): "${e3e(a.instructions)}"`
        : null),
      (J[2] = a.instructions),
      (J[3] = a.mode),
      (J[4] = Je));
  else Je = J[4];
  let I = Je,
    te =
      a.mode === "pr"
        ? "Tip: run /code-review ultra (no number) to review your current branch instead."
        : "Tip: run /code-review ultra <PR number> to fetch and review a specific GitHub PR instead.",
    re;
  if (
    J[5] !== M ||
    J[6] !== G ||
    J[7] !== I ||
    J[8] !== E ||
    J[9] !== ne ||
    J[10] !== B ||
    J[11] !== oe ||
    J[12] !== te
  )
    ((re = B
      ? r(N, {
          children: [
            r(o, {
              flexDirection: "column",
              children: [
                e(t, { dimColor: !0, children: ne }),
                G && r(t, { dimColor: !0, children: ["Scope: ", G] }),
                I && e(t, { dimColor: !0, children: I }),
                e(t, {
                  dimColor: !0,
                  children:
                    "Finds and verifies bugs using a multi-agent review fleet.",
                }),
                e(t, { dimColor: !0, children: te }),
                oe && e(t, { dimColor: !0, children: oe }),
                M && e(t, { dimColor: !0, children: M }),
                E && e(t, { dimColor: !0, children: E }),
                r(t, {
                  dimColor: !0,
                  children: [
                    "More information: ",
                    e(ct, { url: q3, children: q3 }),
                  ],
                }),
              ],
            }),
            e(t, { children: "Proceed?" }),
          ],
        })
      : r(o, {
          flexDirection: "column",
          children: [
            e(t, { dimColor: !0, children: ne }),
            G && r(t, { dimColor: !0, children: ["Scope: ", G] }),
            I && e(t, { dimColor: !0, children: I }),
            e(t, {
              dimColor: !0,
              children:
                "Finds and verifies bugs using a multi-agent review fleet.",
            }),
            e(t, { dimColor: !0, children: te }),
            M && e(t, { dimColor: !0, children: M }),
            E && e(t, { dimColor: !0, children: E }),
          ],
        })),
      (J[5] = M),
      (J[6] = G),
      (J[7] = I),
      (J[8] = E),
      (J[9] = ne),
      (J[10] = B),
      (J[11] = oe),
      (J[12] = te),
      (J[13] = re));
  else re = J[13];
  let ie;
  if (
    J[14] !== Ne ||
    J[15] !== K ||
    J[16] !== j ||
    J[17] !== D ||
    J[18] !== ke ||
    J[19] !== B
  )
    ((ie = Ne
      ? e(ue, {})
      : D
        ? e(ve, {
            options: [
              {
                label: "Run and only show findings here",
                value: "proceed",
                description: "launch in Claude Code on the web",
              },
              { label: "Cancel", value: "cancel" },
              {
                label: "Run and post the findings to the PR as me",
                value: "proceed-post",
                description: "launch in Claude Code on the web",
              },
            ],
            defaultFocusValue:
              ke ?? (D.preferPost ? "proceed-post" : "proceed"),
            onChange: j,
            onCancel: K,
          })
        : e(ve, {
            options: [
              {
                label: B ? "Yes" : "Run ultrareview",
                value: "proceed",
                description: "launch in Claude Code on the web",
              },
              { label: B ? "No" : "Not now", value: "cancel" },
            ],
            onChange: j,
            onCancel: K,
          })),
      (J[14] = Ne),
      (J[15] = K),
      (J[16] = j),
      (J[17] = D),
      (J[18] = ke),
      (J[19] = B),
      (J[20] = ie));
  else ie = J[20];
  let Xe;
  if (J[21] !== re || J[22] !== ie)
    ((Xe = r(o, { flexDirection: "column", gap: 1, children: [re, ie] })),
      (J[21] = re),
      (J[22] = ie),
      (J[23] = Xe));
  else Xe = J[23];
  return Xe;
}
function ue() {
  let ae = _(12),
    $e = Ai(),
    Ve;
  if (ae[0] !== $e.prefersReducedMotion)
    ((Ve = cu($e.prefersReducedMotion)),
      (ae[0] = $e.prefersReducedMotion),
      (ae[1] = Ve));
  else Ve = ae[1];
  let X = Ve,
    [Oe, V] = bs(X ? null : 50),
    Ue = X ? -100 : 19 - (Math.floor(V / 200) % 29),
    Be = Math.floor(V / 120),
    se;
  if (ae[2] !== Be || ae[3] !== X || ae[4] !== V)
    ((se = e(o4, {
      frame: Be,
      messageColor: "inactive",
      reducedMotion: X,
      time: V,
    })),
      (ae[2] = Be),
      (ae[3] = X),
      (ae[4] = V),
      (ae[5] = se));
  else se = ae[5];
  let le;
  if (ae[6] !== Ue)
    ((le = e(l9e, {
      message: "Launching",
      mode: "responding",
      messageColor: "inactive",
      glimmerIndex: Ue,
      flashOpacity: 0,
      shimmerColor: "subtle",
    })),
      (ae[6] = Ue),
      (ae[7] = le));
  else le = ae[7];
  let We;
  if (ae[8] !== Oe || ae[9] !== se || ae[10] !== le)
    ((We = r(o, {
      ref: Oe,
      flexDirection: "row",
      columnGap: 1,
      children: [se, le],
    })),
      (ae[8] = Oe),
      (ae[9] = se),
      (ae[10] = le),
      (ae[11] = We));
  else We = ae[11];
  return We;
}
async function Ye({
  scope: l,
  context: f,
  onDone: b,
  billingNote: n,
  applyFixes: h,
  postToPR: L,
  postDropped: P,
  signal: g,
}) {
  let c = await xDt(l, f, n, {
    applyFixesOnComplete: h,
    postReviewToPR: L,
    signal: g,
  });
  if (g?.aborted) {
    if (c?.launched && c.taskId && l.mode === "pr")
      f.taskRegistry.update(c.taskId, (m) => ({ ...m, postReviewTo: void 0 }));
    return;
  }
  if (c) {
    let m = P && c.launched ? (P === "disabled" ? vDt : CDt) : "",
      R =
        c.blocks.map((w) => (w.type === "text" ? w.text : "")).filter(Boolean)
          .join(`
`) + m;
    b(R, {
      shouldQuery: !0,
      metaMessages: c.launched
        ? [t3e(h, l.mode === "branch" ? l.instructions : void 0)]
        : void 0,
    });
  } else
    b(
      "Ultrareview failed to launch the cloud session. Check that this is a GitHub repo and try again.",
      { display: "system" },
    );
}
var $o = async (l, f, b, n) => {
  let h = op("allow_remote_sessions", "Cloud sessions", "are");
  if (h) return (l(h, { display: "system" }), null);
  let { scopeArgs: L, applyFixes: P, postReview: g } = Z9e(b),
    c = await RDt(L, n ? `/${n}` : "/ultrareview");
  if (!c.ok) return (l(c.error, { display: "system" }), null);
  let m = c.scope,
    R = !1,
    w = (y) => {
      if (m.mode === "branch" && m.noMergeBase)
        i("tengu_review_remote_precondition_recovery", {
          reason: S("no_merge_base"),
          method: S("empty_tree_bundle"),
          outcome: u(y),
        });
    },
    s = await kDt({
      overageConfirmed: f.isUltrareviewOverageConfirmed(),
      credentials: f.credentials,
    });
  switch (s.kind) {
    case "blocked": {
      i("tengu_review_overage_blocked", { reason: Ub(s.reason) });
      let k = s.actionUrl
          ? `
  \u2192 ${s.actionUrl}`
          : "",
        U =
          s.actionUrl?.includes("/admin-settings/") && hb() && !Km()
            ? `
  Run /usage-credits to request this from your admin.`
            : "";
      return (l(`${s.message}${k}${U}`, { display: "system" }), null);
    }
    case "needs-confirm":
    case "proceed":
      if (s.kind === "needs-confirm")
        i("tengu_review_overage_dialog_shown", {});
      let y = !BOe(),
        v =
          m.mode === "pr" && Do(m.host) && g !== !1 && !y
            ? { githubLogin: s.githubLogin ?? null, preferPost: g === !0 }
            : null;
      return e(me, {
        subtitle: s.kind === "needs-confirm" ? HF() : s.billingNote || null,
        body: s.kind === "needs-confirm" ? s.body : void 0,
        scope: m,
        postOption: v,
        onProceed: async (k, U) => {
          if (!R) ((R = !0), w("accepted"));
          if (
            (await Ye({
              scope: m,
              context: f,
              onDone: l,
              billingNote: s.billingNote,
              applyFixes: P,
              postToPR: v !== null && U.postToPR,
              postDropped:
                g === !0 && v === null ? (y ? "disabled" : "target") : void 0,
              signal: k,
            }),
            !k.aborted && s.kind === "needs-confirm")
          )
            f.markUltrareviewOverageConfirmed();
        },
        onCancel: () => {
          if (!R) w("declined");
          l("Ultrareview cancelled.", { display: "system" });
        },
      });
  }
};
export { $o as call };

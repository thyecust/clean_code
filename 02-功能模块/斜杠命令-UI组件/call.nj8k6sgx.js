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
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { j0 } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
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
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { Bf } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
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
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
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
import { MM, hne, jV } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-7s6mt1vg.js";
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
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
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
import { bnn, wnn, zBn, Tnn, c7, b4 } from "../Grove-隐私设置/chunk-a4mdm49v.js";
import { sHe } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import { Gr } from "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
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
async function J() {
  let s;
  try {
    s = await Bf("gh", ["api", "--include", "user"], {
      stdout: "pipe",
      stderr: "ignore",
      timeout: 5000,
      reject: !1,
    });
  } catch {
    return (g("remote_setup_gh_token_scopes", "spawn_failed"), "unknown");
  }
  if (s.timedOut)
    return (g("remote_setup_gh_token_scopes", "timeout"), "unknown");
  if (s.exitCode !== 0)
    return (g("remote_setup_gh_token_scopes", "gh_api_failed"), "unknown");
  let a = at(s.stdout);
  if (a === null)
    return (g("remote_setup_gh_token_scopes", "no_scopes_header"), "unknown");
  return (
    y("remote_setup_gh_token_scopes"),
    a.includes("workflow") ? "present" : "missing"
  );
}
function at(s) {
  let a = pt(s).split(/\r?\n\r?\n/, 1)[0] ?? "",
    R = /^x-oauth-scopes:[ \t]*(.*)$/im.exec(a);
  if (!R) return null;
  let k = R[1]
    .split(",")
    .map((m) => m.trim())
    .filter((m) => m !== "");
  return k.length === 0 ? null : k;
}
async function tt(s) {
  if (!(await zBn(s))) return { status: "not_signed_in" };
  let a = await sHe({ allowNetworkFallbackForOldGh: !0 });
  if (a.status === "not_installed") return { status: "gh_not_installed" };
  if (a.status === "not_authenticated")
    return { status: "gh_not_authenticated" };
  if (a.status === "unknown")
    return { status: "gh_check_failed", error: a.error };
  if (!a.supportsAuthTokenCommand) return { status: "gh_too_old" };
  let { stdout: R } = await Bf("gh", ["auth", "token"], {
      stdout: "pipe",
      stderr: "ignore",
      timeout: 5000,
      reject: !1,
    }),
    k = R.trim();
  if (!k) return { status: "gh_not_authenticated" };
  return { status: "has_gh_token", token: new bnn(k) };
}
function et(s, a) {
  switch (s.kind) {
    case "not_signed_in":
      return `Login failed. Please visit ${a} and login using the GitHub App`;
    case "invalid_token":
      return "GitHub rejected that token. Run `gh auth login` and try again.";
    case "server":
      return `Server error (${s.status}). Try again in a moment.`;
    case "network":
      return "Couldn't reach the server. Check your connection.";
  }
}
function V() {
  let Nt = _(1),
    it;
  if (Nt[0] === p)
    ((it = e(o, {
      marginTop: 1,
      children: r(t, {
        color: "warning",
        children: [
          "Your GitHub CLI token doesn't have the workflow scope. Without it, GitHub rejects pushes that change GitHub Actions workflow files, and pushes to very large repositories can be rejected while GitHub checks for them. You can continue now. To add the scope, run `gh auth refresh -s workflow` and then run /web-setup again:",
          " ",
          "https://cli.github.com/manual/gh_auth_refresh",
        ],
      }),
    })),
      (Nt[0] = it));
  else it = Nt[0];
  return it;
}
function ot(Vt) {
  let l = _(38),
    { onDone: f, host: K, storageV5: P, credentials: x } = Vt,
    ut;
  if (l[0] === p) ((ut = { name: "checking" }), (l[0] = ut));
  else ut = l[0];
  let [h, ct] = d(ut),
    H = C(!1),
    lt;
  if (l[1] !== x || l[2] !== f)
    ((lt = () => {
      (i("tengu_remote_setup_started", {}),
        tt(x).then(async (O) => {
          if (H.current) {
            return;
          }
          switch (O.status) {
            case "not_signed_in": {
              (i("tengu_remote_setup_result", { result: S("not_signed_in") }),
                f("Not signed in to Claude. Run /login first."));
              return;
            }
            case "gh_not_installed":
            case "gh_not_authenticated": {
              let M = `${c7()}/onboarding?step=alt-auth`;
              if ((await Gr(M), H.current)) {
                return;
              }
              (i("tengu_remote_setup_result", { result: u(O.status) }),
                f(
                  O.status === "gh_not_installed"
                    ? `GitHub CLI not found. Install it via https://cli.github.com/, then run \`gh auth login\`, or connect GitHub on the web: ${M}`
                    : `GitHub CLI not authenticated. Run \`gh auth login\` and try again, or connect GitHub on the web: ${M}`,
                ));
              return;
            }
            case "gh_too_old": {
              let ht = `${c7()}/onboarding?step=alt-auth`;
              if ((await Gr(ht), H.current)) {
                return;
              }
              (i("tengu_remote_setup_result", { result: S("gh_too_old") }),
                f(
                  `GitHub CLI is logged in, but this version is too old to share its login (\`gh auth token\` needs GitHub CLI 2.17.0 or newer). Update it via https://cli.github.com/, or connect GitHub on the web: ${ht}`,
                ));
              return;
            }
            case "gh_check_failed": {
              (n(`/web-setup: couldn't check gh auth status: ${O.error}`, {
                level: "error",
              }),
                i("tengu_remote_setup_result", {
                  result: S("gh_check_failed"),
                }));
              let dt = j0(O.error).replace(/[.\s]+$/, "");
              let qt = dt ? ` (${dt})` : "";
              f(
                `Couldn't check GitHub CLI login status${qt}. Run \`gh auth status\` to check, or connect GitHub on the web: ${c7()}/onboarding?step=alt-auth`,
              );
              return;
            }
            case "has_gh_token": {
              let [zt, Kt] = await Promise.all([Tnn(x), J()]);
              if (H.current) {
                return;
              }
              ct({
                name: "confirm",
                token: O.token,
                existingOAuth: zt === "oauth",
                ghTokenWorkflowScope: Kt,
              });
            }
          }
        }));
    }),
      (l[1] = x),
      (l[2] = f),
      (l[3] = lt));
  else lt = l[3];
  let mt;
  if (l[4] === p) ((mt = []), (l[4] = mt));
  else mt = l[4];
  E(lt, mt);
  let _t;
  if (l[5] !== f)
    ((_t = () => {
      ((H.current = !0),
        i("tengu_remote_setup_result", { result: S("cancelled") }),
        f());
    }),
      (l[5] = f),
      (l[6] = _t));
  else _t = l[6];
  let T = _t,
    gt;
  if (l[7] !== x || l[8] !== K || l[9] !== f || l[10] !== P)
    ((gt = async (Mt, ft) => {
      ct({ name: "uploading" });
      let v = await wnn(Mt, x);
      if (v.ok) b4.of(K).markConnected(P);
      if (H.current) {
        return;
      }
      if (!v.ok) {
        (i("tengu_remote_setup_result", {
          result: S("import_failed"),
          error_kind: u(v.error.kind),
          gh_token_workflow_scope: u(ft),
        }),
          f(et(v.error, c7())));
        return;
      }
      let Q;
      try {
        Q = (await MM(void 0, P, x)).length === 0;
      } catch {
        Q = !0;
      }
      if (H.current) {
        return;
      }
      if (Q) {
        try {
          await hne();
        } catch (L) {
          let Qt = L;
          n(`[web-setup] Failed to create default environment: ${Qt}`, {
            level: "warn",
          });
        }
        if (H.current) {
          return;
        }
      }
      let kt = c7();
      if ((await Gr(kt), H.current)) {
        return;
      }
      (i("tengu_remote_setup_result", {
        result: S("success"),
        gh_token_workflow_scope: u(ft),
      }),
        f(`Connected as ${v.result.github_username}. Opened ${kt}`));
    }),
      (l[7] = x),
      (l[8] = K),
      (l[9] = f),
      (l[10] = P),
      (l[11] = gt));
  else gt = l[11];
  let Z = gt;
  if (h.name === "checking" || h.name === "uploading") {
    const L =
      h.name === "uploading"
        ? "Connecting GitHub to Claude\u2026"
        : "Checking login status\u2026";
    let A;
    if (l[12] !== L) ((A = e($n, { message: L })), (l[12] = L), (l[13] = A));
    else A = l[13];
    let I;
    if (l[14] !== T || l[15] !== A)
      ((I = e(de, {
        title: "Connect Claude on the web to GitHub?",
        onCancel: T,
        hideInputGuide: !0,
        children: A,
      })),
        (l[14] = T),
        (l[15] = A),
        (l[16] = I));
    else I = l[16];
    return I;
  }
  let D = h.token,
    L,
    A;
  if (l[17] === p)
    ((L = e(t, {
      children:
        "Claude on the web requires connecting to your GitHub account to clone and push code on your behalf.",
    })),
      (A = e(t, {
        dimColor: !0,
        children: "Your local credentials are used to authenticate with GitHub",
      })),
      (l[17] = L),
      (l[18] = A));
  else ((L = l[17]), (A = l[18]));
  let I;
  if (l[19] !== h.existingOAuth)
    ((I =
      h.existingOAuth &&
      e(o, {
        marginTop: 1,
        children: r(t, {
          color: "warning",
          children: [
            "You're already connected via the GitHub App. Continuing replaces your authentication credential for Claude Code on the web. Your repository access will change to reflect your local token's scopes. You can reconnect the GitHub App from",
            " ",
            jV(),
            " later.",
          ],
        }),
      })),
      (l[19] = h.existingOAuth),
      (l[20] = I));
  else I = l[20];
  let W;
  if (l[21] !== h.ghTokenWorkflowScope)
    ((W = h.ghTokenWorkflowScope === "missing" && e(V, {})),
      (l[21] = h.ghTokenWorkflowScope),
      (l[22] = W));
  else W = l[22];
  let X;
  if (l[23] !== I || l[24] !== W)
    ((X = r(o, { flexDirection: "column", children: [L, A, I, W] })),
      (l[23] = I),
      (l[24] = W),
      (l[25] = X));
  else X = l[25];
  const U = h.existingOAuth ? "Replace connection" : "Continue";
  let B;
  if (l[26] !== Z || l[27] !== h.ghTokenWorkflowScope || l[28] !== D)
    ((B = () => void Z(D, h.ghTokenWorkflowScope)),
      (l[26] = Z),
      (l[27] = h.ghTokenWorkflowScope),
      (l[28] = D),
      (l[29] = B));
  else B = l[29];
  let N;
  if (l[30] !== T || l[31] !== U || l[32] !== B)
    ((N = e(En, {
      confirmLabel: U,
      cancelLabel: "Cancel",
      onConfirm: B,
      onCancel: T,
    })),
      (l[30] = T),
      (l[31] = U),
      (l[32] = B),
      (l[33] = N));
  else N = l[33];
  let wt;
  if (l[34] !== T || l[35] !== X || l[36] !== N)
    ((wt = r(de, {
      title: "Connect Claude on the web to GitHub?",
      onCancel: T,
      hideInputGuide: !0,
      children: [X, N],
    })),
      (l[34] = T),
      (l[35] = X),
      (l[36] = N),
      (l[37] = wt));
  else wt = l[37];
  return wt;
}
var Xt = async (s, a) =>
  e(ot, {
    onDone: s,
    host: a.session.host,
    storageV5: a.storageV5,
    credentials: a.credentials,
  });
export { Xt as call };

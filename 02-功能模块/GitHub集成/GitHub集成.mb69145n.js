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
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { uB } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { cn } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { ap, lm, cl, gb, Wse, Te } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { a_ } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { Fe } from "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { N2e } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import { fi, Do } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
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
import { bhe } from "../Git-Worktree/chunk-bk9696gx.js";
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
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { Ne, Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { lE } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
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
import { e9, YL, JL } from "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dhg3raay.js";
import "../后台任务-Shell管理/chunk-rh0xpf1w.js";
import { aye } from "../../01-核心基础设施/共享小工具-未细化/chunk-ttwbb0b4.js";
import { uc } from "../../01-核心基础设施/共享小工具-未细化/chunk-2gabx7f1.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import { _s } from "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import { lu } from "../../01-核心基础设施/共享小工具-未细化/chunk-qck6h2yw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import { ut } from "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import { ck } from "../认证-OAuth登录/chunk-5bg9xwqx.js";
import { fM, Gr } from "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import "../权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import { av, $ke } from "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
function Ur(Dr) {
  return { label: Dr.label, value: Dr.value };
}
var fs = [
    {
      value: "claude",
      label: "@Claude Code - Tag @claude in issues and PR comments",
    },
    {
      value: "claude-review",
      label: "Claude Code Review - Automated code review on new PRs",
    },
  ],
  hs = r(ue, {
    children: [
      e(D, { chord: ["up", "down"], action: "navigate" }),
      e(D, { chord: "space", action: "toggle" }),
      e(D, { chord: "enter", action: "confirm" }),
      e(je, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "cancel",
      }),
    ],
  });
function St(ul) {
  let Ge = _(14),
    { onSubmit: us, defaultSelections: ps } = ul,
    [ms, Jt] = d(!1),
    Tr;
  if (Ge[0] !== us)
    ((Tr = (Er) => {
      if (Er.length === 0) {
        Jt(!0);
        return;
      }
      (Jt(!1), us(Er));
    }),
      (Ge[0] = us),
      (Ge[1] = Tr));
  else Tr = Ge[1];
  let ds = Tr,
    Hr;
  if (Ge[2] === p)
    ((Hr = () => {
      Jt(!1);
    }),
      (Ge[2] = Hr));
  else Hr = Ge[2];
  let pl = Hr,
    Br;
  if (Ge[3] === p)
    ((Br = () => {
      Jt(!0);
    }),
      (Ge[3] = Br));
  else Br = Ge[3];
  let Nr = Br,
    $r;
  if (Ge[4] === p)
    (($r = e(o, {
      children: r(t, {
        dimColor: !0,
        children: [
          "More workflow examples (issue triage, CI fixes, etc.) at:",
          " ",
          e(ct, {
            url: "https://github.com/anthropics/claude-code-action/blob/main/examples/",
            children:
              "https://github.com/anthropics/claude-code-action/blob/main/examples/",
          }),
        ],
      }),
    })),
      (Ge[4] = $r));
  else $r = Ge[4];
  let Kr;
  if (Ge[5] === p) ((Kr = fs.map(Ur)), (Ge[5] = Kr));
  else Kr = Ge[5];
  let Zt;
  if (Ge[6] !== ps || Ge[7] !== ds)
    ((Zt = e(lE, {
      options: Kr,
      defaultValue: ps,
      onSubmit: ds,
      onChange: pl,
      onCancel: Nr,
      hideIndexes: !0,
    })),
      (Ge[6] = ps),
      (Ge[7] = ds),
      (Ge[8] = Zt));
  else Zt = Ge[8];
  let Qt;
  if (Ge[9] !== ms)
    ((Qt =
      ms &&
      e(o, {
        children: e(t, {
          color: "error",
          children: "You must select at least one workflow to continue",
        }),
      })),
      (Ge[9] = ms),
      (Ge[10] = Qt));
  else Qt = Ge[10];
  let Wr;
  if (Ge[11] !== Zt || Ge[12] !== Qt)
    ((Wr = r(de, {
      title: "Select GitHub workflows to install",
      subtitle:
        "We'll create a workflow file in your repository for each one you select.",
      onCancel: Nr,
      inputGuide: hs,
      children: [$r, Zt, Qt],
    })),
      (Ge[11] = Zt),
      (Ge[12] = Qt),
      (Ge[13] = Wr));
  else Wr = Ge[13];
  return Wr;
}
var gs = "Add Claude Code GitHub Workflow",
  Z =
    "https://github.com/anthropics/claude-code-action/blob/main/docs/setup.md",
  ws = "https://code.claude.com/docs/en/gitlab-ci-cd",
  bs = `name: Claude Code

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && (contains(github.event.issue.body, '@claude') || contains(github.event.issue.title, '@claude')))
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
      actions: read # Required for Claude to read CI results on PRs
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code
        id: claude
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}

          # This is an optional setting that allows Claude to read CI results on PRs
          additional_permissions: |
            actions: read

          # Optional: Give a custom prompt to Claude. If this is not specified, Claude will perform the instructions specified in the comment that tagged it.
          # prompt: 'Update the pull request description to include a summary of changes.'

          # Optional: Add claude_args to customize behavior and configuration
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://code.claude.com/docs/en/cli-reference for available options
          # claude_args: '--allowed-tools Bash(gh pr *)'

`,
  ys = `## \uD83E\uDD16 Installing Claude Code GitHub App

This PR adds a GitHub Actions workflow that enables Claude Code integration in our repository.

### What is Claude Code?

[Claude Code](https://claude.com/claude-code) is an AI coding agent that can help with:
- Bug fixes and improvements  
- Documentation updates
- Implementing new features
- Code reviews and suggestions
- Writing tests
- And more!

### How it works

Once this PR is merged, we'll be able to interact with Claude by mentioning @claude in a pull request or issue comment.
Once the workflow is triggered, Claude will analyze the comment and surrounding context, and execute on the request in a GitHub action.

### Important Notes

- **This workflow won't take effect until this PR is merged**
- **@claude mentions won't work until after the merge is complete**
- The workflow runs automatically whenever Claude is mentioned in PR or issue comments
- Claude gets access to the entire PR or issue context including files, diffs, and previous comments

### Security

- Our Anthropic API key is securely stored as a GitHub Actions secret
- Only users with write access to the repository can trigger the workflow
- All Claude runs are stored in the GitHub Actions run history
- Claude's default tools are limited to reading/writing files and interacting with our repo by creating comments, branches, and commits.
- We can add more allowed tools by adding them to the workflow file like:

\`\`\`
allowed_tools: Bash(npm install),Bash(npm run build),Bash(npm run lint),Bash(npm run test)
\`\`\`

There's more information in the [Claude Code action repo](https://github.com/anthropics/claude-code-action).

After merging this PR, let's try mentioning @claude in a comment on any PR to get started!`,
  ks = `name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize, ready_for_review, reopened]
    # Optional: Only run on specific file changes
    # paths:
    #   - "src/**/*.ts"
    #   - "src/**/*.tsx"
    #   - "src/**/*.js"
    #   - "src/**/*.jsx"

jobs:
  claude-review:
    # Optional: Filter by PR author
    # if: |
    #   github.event.pull_request.user.login == 'external-contributor' ||
    #   github.event.pull_request.user.login == 'new-developer' ||
    #   github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'

    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code Review
        id: claude-review
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          plugin_marketplaces: 'https://github.com/anthropics/claude-code.git'
          plugins: 'code-review@claude-code-plugins'
          prompt: '/code-review:code-review --comment \${{ github.repository }}/pull/\${{ github.event.pull_request.number }}'
          claude_args: '--allowedTools "mcp__github_inline_comment__create_inline_comment"'
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://code.claude.com/docs/en/cli-reference for available options

`;
F();
function Pt(Rl) {
  let oe = _(55),
    {
      existingApiKey: Le,
      apiKeyOrOAuthToken: Cs,
      onApiKeyChange: eo,
      onSubmit: Me,
      onToggleUseExistingKey: Je,
      onCreateOAuthToken: me,
      selectedOption: Lr,
      onSelectOption: $e,
    } = Rl,
    K = Lr === void 0 ? (Le ? "existing" : me ? "oauth" : "new") : Lr,
    [xs, vl] = d(0),
    As = Se(),
    [Ie] = cn(),
    Fr;
  if (
    oe[0] !== Le ||
    oe[1] !== me ||
    oe[2] !== $e ||
    oe[3] !== Je ||
    oe[4] !== K
  )
    ((Fr = () => {
      if (K === "new" && me) $e("oauth");
      else if (K === "oauth" && Le) ($e("existing"), Je(!0));
    }),
      (oe[0] = Le),
      (oe[1] = me),
      (oe[2] = $e),
      (oe[3] = Je),
      (oe[4] = K),
      (oe[5] = Fr));
  else Fr = oe[5];
  let Qe = Fr,
    qr;
  if (oe[6] !== me || oe[7] !== $e || oe[8] !== Je || oe[9] !== K)
    ((qr = () => {
      if (K === "existing") ($e(me ? "oauth" : "new"), Je(!1));
      else if (K === "oauth") $e("new");
    }),
      (oe[6] = me),
      (oe[7] = $e),
      (oe[8] = Je),
      (oe[9] = K),
      (oe[10] = qr));
  else qr = oe[10];
  let tt = qr,
    Yr;
  if (oe[11] !== me || oe[12] !== Me || oe[13] !== K)
    ((Yr = () => {
      if (K === "oauth" && me) me();
      else Me();
    }),
      (oe[11] = me),
      (oe[12] = Me),
      (oe[13] = K),
      (oe[14] = Yr));
  else Yr = oe[14];
  let Rs = Yr,
    to = K === "new",
    Vr;
  if (oe[15] !== Rs || oe[16] !== tt || oe[17] !== Qe)
    ((Vr = { "confirm:previous": Qe, "confirm:next": tt, "confirm:yes": Rs }),
      (oe[15] = Rs),
      (oe[16] = tt),
      (oe[17] = Qe),
      (oe[18] = Vr));
  else Vr = oe[18];
  const vs = !to;
  let zr;
  if (oe[19] !== vs)
    ((zr = { context: "Confirmation", isActive: vs }),
      (oe[19] = vs),
      (oe[20] = zr));
  else zr = oe[20];
  Ze(Vr, zr);
  let Xr;
  if (oe[21] !== tt || oe[22] !== Qe)
    ((Xr = { "confirm:previous": Qe, "confirm:next": tt }),
      (oe[21] = tt),
      (oe[22] = Qe),
      (oe[23] = Xr));
  else Xr = oe[23];
  let jr;
  if (oe[24] !== to)
    ((jr = { context: "Confirmation", isActive: to }),
      (oe[24] = to),
      (oe[25] = jr));
  else jr = oe[25];
  Ze(Xr, jr);
  let Mr;
  if (oe[26] === p)
    ((Mr = e(o, {
      marginBottom: 1,
      children: e(uc, {
        subtitle: "Choose API key",
        children: "Install GitHub App",
      }),
    })),
      (oe[26] = Mr));
  else Mr = oe[26];
  let oo;
  if (oe[27] !== Le || oe[28] !== K || oe[29] !== Ie)
    ((oo =
      Le &&
      e(o, {
        marginBottom: 1,
        children: r(t, {
          children: [
            K === "existing" ? ut("success", Ie)("> ") : "  ",
            "Use your existing Claude Code API key",
          ],
        }),
      })),
      (oe[27] = Le),
      (oe[28] = K),
      (oe[29] = Ie),
      (oe[30] = oo));
  else oo = oe[30];
  let so;
  if (oe[31] !== me || oe[32] !== K || oe[33] !== Ie)
    ((so =
      me &&
      e(o, {
        marginBottom: 1,
        children: r(t, {
          children: [
            K === "oauth" ? ut("success", Ie)("> ") : "  ",
            "Create a long-lived token with your Claude subscription",
          ],
        }),
      })),
      (oe[31] = me),
      (oe[32] = K),
      (oe[33] = Ie),
      (oe[34] = so));
  else so = oe[34];
  let ro;
  if (oe[35] !== K || oe[36] !== Ie)
    ((ro = K === "new" ? ut("success", Ie)("> ") : "  "),
      (oe[35] = K),
      (oe[36] = Ie),
      (oe[37] = ro));
  else ro = oe[37];
  let io;
  if (oe[38] !== ro)
    ((io = e(o, {
      marginBottom: 1,
      children: r(t, { children: [ro, "Enter a new API key"] }),
    })),
      (oe[38] = ro),
      (oe[39] = io));
  else io = oe[39];
  let no;
  if (
    oe[40] !== Cs ||
    oe[41] !== xs ||
    oe[42] !== eo ||
    oe[43] !== Me ||
    oe[44] !== K ||
    oe[45] !== As
  )
    ((no =
      K === "new" &&
      e(hn, {
        value: Cs,
        onChange: eo,
        onSubmit: Me,
        onPaste: eo,
        focus: !0,
        placeholder:
          "sk-ant\u2026 (Create a new key at https://platform.claude.com/settings/keys)",
        mask: "*",
        columns: As.columns,
        cursorOffset: xs,
        onChangeCursorOffset: vl,
        showCursor: !0,
      })),
      (oe[40] = Cs),
      (oe[41] = xs),
      (oe[42] = eo),
      (oe[43] = Me),
      (oe[44] = K),
      (oe[45] = As),
      (oe[46] = no));
  else no = oe[46];
  let ao;
  if (oe[47] !== oo || oe[48] !== so || oe[49] !== io || oe[50] !== no)
    ((ao = r(o, {
      flexDirection: "column",
      borderStyle: "round",
      paddingX: 1,
      children: [Mr, oo, so, io, no],
    })),
      (oe[47] = oo),
      (oe[48] = so),
      (oe[49] = io),
      (oe[50] = no),
      (oe[51] = ao));
  else ao = oe[51];
  let Jr;
  if (oe[52] === p)
    ((Jr = e(o, {
      marginLeft: 3,
      children: e(t, {
        dimColor: !0,
        children: r(ue, {
          children: [
            e(D, { chord: ["up", "down"], action: "select" }),
            e(D, { chord: "enter", action: "continue" }),
          ],
        }),
      }),
    })),
      (oe[52] = Jr));
  else Jr = oe[52];
  let Zr;
  if (oe[53] !== ao)
    ((Zr = r(N, { children: [ao, Jr] })), (oe[53] = ao), (oe[54] = Zr));
  else Zr = oe[54];
  return Zr;
}
F();
function It(Wl) {
  let ee = _(42),
    {
      useExistingSecret: ge,
      secretName: Ss,
      onToggleUseExistingSecret: ot,
      onSecretNameChange: Ps,
      onSubmit: st,
    } = Wl,
    [Is, Dl] = d(0),
    Os = Se(),
    [rt] = cn(),
    Qr;
  if (ee[0] !== ot) ((Qr = () => ot(!0)), (ee[0] = ot), (ee[1] = Qr));
  else Qr = ee[1];
  let it = Qr,
    ei;
  if (ee[2] !== ot) ((ei = () => ot(!1)), (ee[2] = ot), (ee[3] = ei));
  else ei = ee[3];
  let nt = ei,
    ti;
  if (ee[4] !== nt || ee[5] !== it || ee[6] !== st)
    ((ti = { "confirm:previous": it, "confirm:next": nt, "confirm:yes": st }),
      (ee[4] = nt),
      (ee[5] = it),
      (ee[6] = st),
      (ee[7] = ti));
  else ti = ee[7];
  let oi;
  if (ee[8] !== ge)
    ((oi = { context: "Confirmation", isActive: ge }),
      (ee[8] = ge),
      (ee[9] = oi));
  else oi = ee[9];
  Ze(ti, oi);
  let si;
  if (ee[10] !== nt || ee[11] !== it)
    ((si = { "confirm:previous": it, "confirm:next": nt }),
      (ee[10] = nt),
      (ee[11] = it),
      (ee[12] = si));
  else si = ee[12];
  const Ts = !ge;
  let ri;
  if (ee[13] !== Ts)
    ((ri = { context: "Confirmation", isActive: Ts }),
      (ee[13] = Ts),
      (ee[14] = ri));
  else ri = ee[14];
  Ze(si, ri);
  let ii;
  if (ee[15] === p)
    ((ii = e(o, {
      marginBottom: 1,
      children: e(uc, {
        subtitle: "Setup API key secret",
        children: "Install GitHub App",
      }),
    })),
      (ee[15] = ii));
  else ii = ee[15];
  let ni;
  if (ee[16] === p)
    ((ni = e(o, {
      marginBottom: 1,
      children: e(t, {
        color: "warning",
        children: "ANTHROPIC_API_KEY already exists in repository secrets!",
      }),
    })),
      (ee[16] = ni));
  else ni = ee[16];
  let ai;
  if (ee[17] === p)
    ((ai = e(o, {
      marginBottom: 1,
      children: e(t, { children: "Would you like to:" }),
    })),
      (ee[17] = ai));
  else ai = ee[17];
  let lo;
  if (ee[18] !== rt || ee[19] !== ge)
    ((lo = ge ? ut("success", rt)("> ") : "  "),
      (ee[18] = rt),
      (ee[19] = ge),
      (ee[20] = lo));
  else lo = ee[20];
  let co;
  if (ee[21] !== lo)
    ((co = e(o, {
      marginBottom: 1,
      children: r(t, { children: [lo, "Use the existing API key"] }),
    })),
      (ee[21] = lo),
      (ee[22] = co));
  else co = ee[22];
  let uo;
  if (ee[23] !== rt || ee[24] !== ge)
    ((uo = !ge ? ut("success", rt)("> ") : "  "),
      (ee[23] = rt),
      (ee[24] = ge),
      (ee[25] = uo));
  else uo = ee[25];
  let po;
  if (ee[26] !== uo)
    ((po = e(o, {
      marginBottom: 1,
      children: r(t, {
        children: [uo, "Create a new secret with a different name"],
      }),
    })),
      (ee[26] = uo),
      (ee[27] = po));
  else po = ee[27];
  let mo;
  if (
    ee[28] !== Is ||
    ee[29] !== Ps ||
    ee[30] !== st ||
    ee[31] !== Ss ||
    ee[32] !== Os ||
    ee[33] !== ge
  )
    ((mo =
      !ge &&
      r(N, {
        children: [
          e(o, {
            marginBottom: 1,
            children: e(t, {
              children:
                "Enter new secret name (alphanumeric with underscores):",
            }),
          }),
          e(hn, {
            value: Ss,
            onChange: Ps,
            onSubmit: st,
            focus: !0,
            placeholder: "e.g., CLAUDE_API_KEY",
            columns: Os.columns,
            cursorOffset: Is,
            onChangeCursorOffset: Dl,
            showCursor: !0,
          }),
        ],
      })),
      (ee[28] = Is),
      (ee[29] = Ps),
      (ee[30] = st),
      (ee[31] = Ss),
      (ee[32] = Os),
      (ee[33] = ge),
      (ee[34] = mo));
  else mo = ee[34];
  let fo;
  if (ee[35] !== co || ee[36] !== po || ee[37] !== mo)
    ((fo = r(o, {
      flexDirection: "column",
      borderStyle: "round",
      paddingX: 1,
      children: [ii, ni, ai, co, po, mo],
    })),
      (ee[35] = co),
      (ee[36] = po),
      (ee[37] = mo),
      (ee[38] = fo));
  else fo = ee[38];
  let li;
  if (ee[39] === p)
    ((li = e(o, {
      marginLeft: 3,
      children: e(t, {
        dimColor: !0,
        children: r(ue, {
          children: [
            e(D, { chord: ["up", "down"], action: "select" }),
            e(D, { chord: "enter", action: "continue" }),
          ],
        }),
      }),
    })),
      (ee[39] = li));
  else li = ee[39];
  let ci;
  if (ee[40] !== fo)
    ((ci = r(N, { children: [fo, li] })), (ee[40] = fo), (ee[41] = ci));
  else ci = ee[41];
  return ci;
}
function Ot() {
  let zl = _(1),
    ui;
  if (zl[0] === p)
    ((ui = e(o, {
      paddingX: 2,
      children: e($n, { message: "Checking GitHub CLI installation\u2026" }),
    })),
      (zl[0] = ui));
  else ui = zl[0];
  return ui;
}
F();
function Tt(nc) {
  let te = _(52),
    {
      currentRepo: M,
      useCurrentRepo: ae,
      repoUrl: at,
      onRepoUrlChange: Es,
      onSubmit: Hs,
      onToggleUseCurrentRepo: lt,
    } = nc,
    [Bs, ac] = d(0),
    [Gs, ho] = d(!1),
    Ns = Se().columns,
    pi;
  if (te[0] !== M || te[1] !== Hs || te[2] !== at || te[3] !== ae)
    ((pi = () => {
      if (!(ae ? M : at)?.trim()) {
        ho(!0);
        return;
      }
      Hs();
    }),
      (te[0] = M),
      (te[1] = Hs),
      (te[2] = at),
      (te[3] = ae),
      (te[4] = pi));
  else pi = te[4];
  let pt = pi,
    go = !ae || !M,
    mi;
  if (te[5] !== lt)
    ((mi = () => {
      (lt(!0), ho(!1));
    }),
      (te[5] = lt),
      (te[6] = mi));
  else mi = te[6];
  let mt = mi,
    di;
  if (te[7] !== lt)
    ((di = () => {
      (lt(!1), ho(!1));
    }),
      (te[7] = lt),
      (te[8] = di));
  else di = te[8];
  let dt = di,
    hi;
  if (te[9] !== dt || te[10] !== mt || te[11] !== pt)
    ((hi = { "confirm:previous": mt, "confirm:next": dt, "confirm:yes": pt }),
      (te[9] = dt),
      (te[10] = mt),
      (te[11] = pt),
      (te[12] = hi));
  else hi = te[12];
  const $s = !go;
  let gi;
  if (te[13] !== $s)
    ((gi = { context: "Confirmation", isActive: $s }),
      (te[13] = $s),
      (te[14] = gi));
  else gi = te[14];
  Ze(hi, gi);
  let wi;
  if (te[15] !== dt || te[16] !== mt)
    ((wi = { "confirm:previous": mt, "confirm:next": dt }),
      (te[15] = dt),
      (te[16] = mt),
      (te[17] = wi));
  else wi = te[17];
  let _i;
  if (te[18] !== go)
    ((_i = { context: "Confirmation", isActive: go }),
      (te[18] = go),
      (te[19] = _i));
  else _i = te[19];
  Ze(wi, _i);
  let bi;
  if (te[20] === p)
    ((bi = e(o, {
      marginBottom: 1,
      children: e(uc, {
        subtitle: "Select GitHub repository",
        children: "Install GitHub App",
      }),
    })),
      (te[20] = bi));
  else bi = te[20];
  let wo;
  if (te[21] !== M || te[22] !== ae)
    ((wo =
      M &&
      e(o, {
        marginBottom: 1,
        children: r(t, {
          bold: ae,
          color: ae ? "permission" : void 0,
          children: [ae ? "> " : "  ", "Use current repository: ", M],
        }),
      })),
      (te[21] = M),
      (te[22] = ae),
      (te[23] = wo));
  else wo = te[23];
  const Ks = !ae || !M,
    Ws = !ae || !M ? "permission" : void 0,
    Ds = !ae || !M ? "> " : "  ",
    Us = M ? "Enter a different repository" : "Enter repository";
  let _o;
  if (te[24] !== Ks || te[25] !== Ws || te[26] !== Ds || te[27] !== Us)
    ((_o = e(o, {
      marginBottom: 1,
      children: r(t, { bold: Ks, color: Ws, children: [Ds, Us] }),
    })),
      (te[24] = Ks),
      (te[25] = Ws),
      (te[26] = Ds),
      (te[27] = Us),
      (te[28] = _o));
  else _o = te[28];
  let bo;
  if (
    te[29] !== M ||
    te[30] !== Bs ||
    te[31] !== pt ||
    te[32] !== Es ||
    te[33] !== at ||
    te[34] !== Ns ||
    te[35] !== ae
  )
    ((bo =
      (!ae || !M) &&
      e(o, {
        marginLeft: 2,
        marginBottom: 1,
        children: e(hn, {
          value: at,
          onChange: (lc) => {
            (Es(lc), ho(!1));
          },
          onSubmit: pt,
          focus: !0,
          placeholder:
            "Enter a repo as owner/repo or https://github.com/owner/repo\u2026",
          columns: Ns,
          cursorOffset: Bs,
          onChangeCursorOffset: ac,
          showCursor: !0,
        }),
      })),
      (te[29] = M),
      (te[30] = Bs),
      (te[31] = pt),
      (te[32] = Es),
      (te[33] = at),
      (te[34] = Ns),
      (te[35] = ae),
      (te[36] = bo));
  else bo = te[36];
  let yo;
  if (te[37] !== wo || te[38] !== _o || te[39] !== bo)
    ((yo = r(o, {
      flexDirection: "column",
      borderStyle: "round",
      paddingX: 1,
      children: [bi, wo, _o, bo],
    })),
      (te[37] = wo),
      (te[38] = _o),
      (te[39] = bo),
      (te[40] = yo));
  else yo = te[40];
  let ko;
  if (te[41] !== Gs)
    ((ko =
      Gs &&
      e(o, {
        marginLeft: 3,
        marginBottom: 1,
        children: e(t, {
          color: "error",
          children: "Please enter a repository name to continue",
        }),
      })),
      (te[41] = Gs),
      (te[42] = ko));
  else ko = te[42];
  let Co;
  if (te[43] !== M)
    ((Co = M ? e(D, { chord: ["up", "down"], action: "select" }) : null),
      (te[43] = M),
      (te[44] = Co));
  else Co = te[44];
  let yi;
  if (te[45] === p)
    ((yi = e(D, { chord: "enter", action: "continue" })), (te[45] = yi));
  else yi = te[45];
  let xo;
  if (te[46] !== Co)
    ((xo = e(o, {
      marginLeft: 3,
      children: e(t, { dimColor: !0, children: r(ue, { children: [Co, yi] }) }),
    })),
      (te[46] = Co),
      (te[47] = xo));
  else xo = te[47];
  let ki;
  if (te[48] !== yo || te[49] !== ko || te[50] !== xo)
    ((ki = r(N, { children: [yo, ko, xo] })),
      (te[48] = yo),
      (te[49] = ko),
      (te[50] = xo),
      (te[51] = ki));
  else ki = te[51];
  return ki;
}
function Et(wc) {
  let qs = _(10),
    {
      currentWorkflowInstallStep: Ao,
      secretExists: Ro,
      useExistingSecret: vo,
      secretName: So,
      skipWorkflow: Ci,
      selectedWorkflows: Ls,
    } = wc,
    Fs = Ci === void 0 ? !1 : Ci,
    xi;
  if (
    qs[0] !== Ro ||
    qs[1] !== So ||
    qs[2] !== Ls ||
    qs[3] !== Fs ||
    qs[4] !== vo
  )
    ((xi = Fs
      ? [
          "Getting repository information",
          Ro && vo
            ? "Using existing API key secret"
            : `Setting up ${So} secret`,
        ]
      : [
          "Getting repository information",
          "Creating branch",
          Ls.length > 1 ? "Creating workflow files" : "Creating workflow file",
          Ro && vo
            ? "Using existing API key secret"
            : `Setting up ${So} secret`,
          "Opening pull request page",
        ]),
      (qs[0] = Ro),
      (qs[1] = So),
      (qs[2] = Ls),
      (qs[3] = Fs),
      (qs[4] = vo),
      (qs[5] = xi));
  else xi = qs[5];
  let Ys = xi,
    Ai;
  if (qs[6] === p)
    ((Ai = e(o, {
      marginBottom: 1,
      children: e(uc, {
        subtitle: "Create GitHub Actions workflow",
        children: "Install GitHub App",
      }),
    })),
      (qs[6] = Ai));
  else Ai = qs[6];
  let Ri;
  if (qs[7] !== Ao || qs[8] !== Ys)
    ((Ri = e(N, {
      children: r(_s, {
        children: [
          Ai,
          Ys.map((_c, Vs) => {
            let ft = "pending";
            if (Vs < Ao) ft = "completed";
            else if (Vs === Ao) ft = "in-progress";
            return e(
              o,
              {
                children: r(t, {
                  color:
                    ft === "completed"
                      ? "success"
                      : ft === "in-progress"
                        ? "warning"
                        : void 0,
                  children: [
                    ft === "completed" ? "\u2713 " : "",
                    _c,
                    ft === "in-progress" ? "\u2026" : "",
                  ],
                }),
              },
              Vs,
            );
          }),
        ],
      }),
    })),
      (qs[7] = Ao),
      (qs[8] = Ys),
      (qs[9] = Ri));
  else Ri = qs[9];
  return Ri;
}
function Oi(Ic, Oc) {
  return e(lu, { children: Ic }, Oc);
}
function Ht(Pc) {
  let Ke = _(15),
    { error: zs, errorReason: Po, errorInstructions: Io } = Pc,
    vi;
  if (Ke[0] === p)
    ((vi = e(o, {
      marginBottom: 1,
      children: e(uc, { children: "Install GitHub App" }),
    })),
      (Ke[0] = vi));
  else vi = Ke[0];
  let Oo;
  if (Ke[1] !== zs)
    ((Oo = r(t, { color: "error", children: ["Error: ", zs] })),
      (Ke[1] = zs),
      (Ke[2] = Oo));
  else Oo = Ke[2];
  let To;
  if (Ke[3] !== Po)
    ((To =
      Po &&
      e(o, {
        marginTop: 1,
        children: r(t, { dimColor: !0, children: ["Reason: ", Po] }),
      })),
      (Ke[3] = Po),
      (Ke[4] = To));
  else To = Ke[4];
  let Eo;
  if (Ke[5] !== Io)
    ((Eo =
      Io.length > 0 &&
      r(o, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          e(t, { dimColor: !0, children: "How to fix:" }),
          e(o, {
            flexDirection: "column",
            marginLeft: 2,
            children: Io.map(Oi),
          }),
        ],
      })),
      (Ke[5] = Io),
      (Ke[6] = Eo));
  else Eo = Ke[6];
  let Si;
  if (Ke[7] === p)
    ((Si = e(o, {
      marginTop: 1,
      children: r(t, {
        dimColor: !0,
        children: [
          "For manual setup instructions, see:",
          " ",
          e(t, { color: "claude", children: Z }),
        ],
      }),
    })),
      (Ke[7] = Si));
  else Si = Ke[7];
  let Ho;
  if (Ke[8] !== Oo || Ke[9] !== To || Ke[10] !== Eo)
    ((Ho = r(_s, { children: [vi, Oo, To, Eo, Si] })),
      (Ke[8] = Oo),
      (Ke[9] = To),
      (Ke[10] = Eo),
      (Ke[11] = Ho));
  else Ho = Ke[11];
  let Pi;
  if (Ke[12] === p)
    ((Pi = e(o, {
      marginLeft: 3,
      children: e(t, { dimColor: !0, children: "Press any key to exit" }),
    })),
      (Ke[12] = Pi));
  else Pi = Ke[12];
  let Ii;
  if (Ke[13] !== Ho)
    ((Ii = r(N, { children: [Ho, Pi] })), (Ke[13] = Ho), (Ke[14] = Ii));
  else Ii = Ke[14];
  return Ii;
}
function Bt(Kc) {
  let We = _(15),
    { repoName: Wc, onSelectAction: ht } = Kc,
    Ti;
  if (We[0] === p)
    ((Ti = [
      { label: "Update workflow file with latest version", value: "update" },
      { label: "Skip workflow update (configure secrets only)", value: "skip" },
      { label: "Exit without making changes", value: "exit" },
    ]),
      (We[0] = Ti));
  else Ti = We[0];
  let Dc = Ti,
    Ei;
  if (We[1] !== ht)
    ((Ei = (Uc) => {
      ht(Uc);
    }),
      (We[1] = ht),
      (We[2] = Ei));
  else Ei = We[2];
  let Xs = Ei,
    Hi;
  if (We[3] !== ht)
    ((Hi = () => {
      ht("exit");
    }),
      (We[3] = ht),
      (We[4] = Hi));
  else Hi = We[4];
  let js = Hi;
  const Ms = `Repository: ${Wc}`;
  let Bo;
  if (We[5] !== Ms)
    ((Bo = e(o, {
      marginBottom: 1,
      children: e(uc, { subtitle: Ms, children: "Existing Workflow Found" }),
    })),
      (We[5] = Ms),
      (We[6] = Bo));
  else Bo = We[6];
  let Bi;
  if (We[7] === p)
    ((Bi = r(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        r(t, {
          children: [
            "A Claude workflow file already exists at",
            " ",
            e(t, { color: "claude", children: ".github/workflows/claude.yml" }),
          ],
        }),
        e(t, { dimColor: !0, children: "What would you like to do?" }),
      ],
    })),
      (We[7] = Bi));
  else Bi = We[7];
  let Go;
  if (We[8] !== js || We[9] !== Xs)
    ((Go = e(o, {
      flexDirection: "column",
      children: e(ve, { options: Dc, onChange: Xs, onCancel: js }),
    })),
      (We[8] = js),
      (We[9] = Xs),
      (We[10] = Go));
  else Go = We[10];
  let Gi;
  if (We[11] === p)
    ((Gi = e(o, {
      marginTop: 1,
      children: r(t, {
        dimColor: !0,
        children: [
          "View the latest workflow template at:",
          " ",
          e(t, {
            color: "claude",
            children:
              "https://github.com/anthropics/claude-code-action/blob/main/examples/claude.yml",
          }),
        ],
      }),
    })),
      (We[11] = Gi));
  else Gi = We[11];
  let Ni;
  if (We[12] !== Bo || We[13] !== Go)
    ((Ni = r(o, {
      flexDirection: "column",
      borderStyle: "round",
      borderDimColor: !0,
      paddingX: 1,
      children: [Bo, Bi, Go, Gi],
    })),
      (We[12] = Bo),
      (We[13] = Go),
      (We[14] = Ni));
  else Ni = We[14];
  return Ni;
}
function Gt(Mc) {
  let xe = _(12),
    { repoUrl: Js, onSubmit: Jc } = Mc,
    $i;
  if (xe[0] === p) (($i = { context: "Confirmation" }), (xe[0] = $i));
  else $i = xe[0];
  Ne("confirm:yes", Jc, $i);
  let Ki;
  if (xe[1] === p)
    ((Ki = e(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: e(t, { bold: !0, children: "Install the Claude GitHub App" }),
    })),
      (xe[1] = Ki));
  else Ki = xe[1];
  let Wi;
  if (xe[2] === p)
    ((Wi = e(o, {
      marginBottom: 1,
      children: e(t, {
        children: "Opening browser to install the Claude GitHub App\u2026",
      }),
    })),
      (xe[2] = Wi));
  else Wi = xe[2];
  let Di;
  if (xe[3] === p)
    ((Di = e(o, {
      marginBottom: 1,
      children: e(t, {
        children: "If your browser doesn't open automatically, visit:",
      }),
    })),
      (xe[3] = Di));
  else Di = xe[3];
  let Ui;
  if (xe[4] === p)
    ((Ui = e(o, {
      marginBottom: 1,
      children: e(t, {
        underline: !0,
        children: "https://github.com/apps/claude",
      }),
    })),
      (xe[4] = Ui));
  else Ui = xe[4];
  let No;
  if (xe[5] !== Js)
    ((No = e(o, {
      marginBottom: 1,
      children: r(t, {
        children: [
          "Please install the app for repository: ",
          e(t, { bold: !0, children: Js }),
        ],
      }),
    })),
      (xe[5] = Js),
      (xe[6] = No));
  else No = xe[6];
  let Li;
  if (xe[7] === p)
    ((Li = e(o, {
      marginBottom: 1,
      children: e(t, {
        dimColor: !0,
        children:
          "Important: Make sure to grant access to this specific repository",
      }),
    })),
      (xe[7] = Li));
  else Li = xe[7];
  let Fi;
  if (xe[8] === p)
    ((Fi = e(o, {
      children: r(t, {
        bold: !0,
        color: "permission",
        children: ["Press Enter once you've installed the app", L.ellipsis],
      }),
    })),
      (xe[8] = Fi));
  else Fi = xe[8];
  let qi;
  if (xe[9] === p)
    ((qi = e(o, {
      marginTop: 1,
      children: r(t, {
        dimColor: !0,
        children: [
          "Having trouble? See manual setup instructions at:",
          " ",
          e(t, { color: "claude", children: Z }),
        ],
      }),
    })),
      (xe[9] = qi));
  else qi = xe[9];
  let Yi;
  if (xe[10] !== No)
    ((Yi = r(o, {
      flexDirection: "column",
      borderStyle: "round",
      borderDimColor: !0,
      paddingX: 1,
      children: [Ki, Wi, Di, Ui, No, Li, Fi, qi],
    })),
      (xe[10] = No),
      (xe[11] = Yi));
  else Yi = xe[11];
  return Yi;
}
F();
function wn() {
  return new ck();
}
function _n(xu) {
  return xu();
}
function bn(Au) {
  return Au();
}
var Dt = "Paste code here if prompted > ";
function Ut(yu) {
  let le = _(56),
    { onSuccess: Zs, onCancel: Qs } = yu,
    Vi;
  if (le[0] === p) ((Vi = { state: "starting" }), (le[0] = Vi));
  else Vi = le[0];
  let [y, Oe] = d(Vi),
    [Ae] = d(wn),
    [Ee, $o] = d(""),
    [er, tr] = d(0),
    [ye, Ko] = d(!1),
    {
      copiedVia: Wo,
      copy: gt,
      reset: or,
    } = e9(y.state === "waiting_for_login" ? y.url : null),
    Nt = vt(),
    zi;
  if (le[1] === p) ((zi = new Set()), (le[1] = zi));
  else zi = le[1];
  let wt = C(zi),
    ku = Se(),
    sr = Math.max(50, ku.columns - Dt.length - 4),
    Xi;
  if (le[2] !== y.state || le[3] !== y.toRetry || le[4] !== Qs)
    ((Xi = function $t(ji) {
      if (y.state !== "error") {
        return;
      }
      if ((ji.preventDefault(), ji.key === "return" && y.toRetry))
        ($o(""), tr(0), Oe({ state: "about_to_retry", nextState: y.toRetry }));
      else Qs();
    }),
      (le[2] = y.state),
      (le[3] = y.toRetry),
      (le[4] = Qs),
      (le[5] = Xi));
  else Xi = le[5];
  let $t = Xi,
    Mi;
  if (le[6] !== Ae)
    ((Mi = async function Kt(Ji, Zi) {
      if (!Ji.trim()) {
        ($o(""), tr(0));
        return;
      }
      try {
        let [Qi, en] = Ji.split("#");
        if (!Qi || !en) {
          Oe({
            state: "error",
            message: "Invalid code. Please make sure the full code was copied",
            toRetry: { state: "waiting_for_login", url: Zi },
          });
          return;
        }
        (i("tengu_oauth_manual_entry", {}),
          Ae.handleManualAuthCodeInput({ authorizationCode: Qi, state: en }));
      } catch (Uo) {
        let tn = Uo;
        (h(tn),
          Oe({
            state: "error",
            message: l(tn),
            toRetry: { state: "waiting_for_login", url: Zi },
          }));
      }
    }),
      (le[6] = Ae),
      (le[7] = Mi));
  else Mi = le[7];
  let Kt = Mi,
    Uo;
  if (le[8] !== Nt || le[9] !== Ae || le[10] !== Zs || le[11] !== or)
    ((Uo = async () => {
      (wt.current.forEach(_n), wt.current.clear());
      let on = Wse(!0);
      if (!on.valid) {
        Oe({
          state: "error",
          message: `${on.message} This step creates a long-lived Claude.ai subscription token, which this policy does not permit \u2014 use an API key instead.`,
        });
        return;
      }
      try {
        let sn = await Ae.startOAuthFlow(
          async (Cu) => {
            if (
              (or(), Ko(!1), Oe({ state: "waiting_for_login", url: Cu }), fM())
            )
              Ko(!0);
            else wt.current.add(Nt.setTimeout(() => Ko(!0), 3000));
          },
          { loginWithClaudeAi: !0, inferenceOnly: !0, expiresIn: uB },
        );
        (Oe({ state: "processing" }),
          wt.current.add(
            Nt.setTimeout(() => {
              (Oe({ state: "success", token: sn.accessToken }),
                wt.current.add(Nt.setTimeout(() => Zs(sn.accessToken), 1000)));
            }, 100),
          ));
      } catch (Lo) {
        let rn = Lo;
        let nn = l(rn);
        (Oe({ state: "error", message: nn, toRetry: { state: "starting" } }),
          n(`OAuth flow failed in install-github-app: ${nn}`, {
            level: "error",
          }),
          i("tengu_oauth_error", { ...lm(rn) }));
      }
    }),
      (le[8] = Nt),
      (le[9] = Ae),
      (le[10] = Zs),
      (le[11] = or),
      (le[12] = Uo));
  else Uo = le[12];
  let Fo = Uo,
    Lo,
    an;
  if (le[13] !== y.state || le[14] !== Fo)
    ((Lo = () => {
      if (y.state === "starting") Fo();
    }),
      (an = [y.state, Fo]),
      (le[13] = y.state),
      (le[14] = Fo),
      (le[15] = Lo),
      (le[16] = an));
  else ((Lo = le[15]), (an = le[16]));
  E(Lo, an);
  let ln;
  if (le[17] !== y.nextState || le[18] !== y.state)
    ((ln = () => {
      if (y.state === "about_to_retry")
        (Ko(y.nextState.state === "waiting_for_login"), Oe(y.nextState));
    }),
      (le[17] = y.nextState),
      (le[18] = y.state),
      (le[19] = ln));
  else ln = le[19];
  Un(ln, y.state === "about_to_retry" ? 500 : null);
  let un;
  if (
    le[20] !== gt ||
    le[21] !== y.state ||
    le[22] !== y.url ||
    le[23] !== Ee ||
    le[24] !== ye
  )
    ((un = () => {
      if (/^c+$/.test(Ee) && y.state === "waiting_for_login" && ye)
        ($o(""), gt(y.url));
    }),
      (le[20] = gt),
      (le[21] = y.state),
      (le[22] = y.url),
      (le[23] = Ee),
      (le[24] = ye),
      (le[25] = un));
  else un = le[25];
  let pn;
  if (le[26] !== gt || le[27] !== y || le[28] !== Ee || le[29] !== ye)
    ((pn = [Ee, y, ye, gt]),
      (le[26] = gt),
      (le[27] = y),
      (le[28] = Ee),
      (le[29] = ye),
      (le[30] = pn));
  else pn = le[30];
  E(un, pn);
  let mn, dn;
  if (le[31] !== Ae)
    ((mn = () => {
      let fn = wt.current;
      return () => {
        (Ae.cleanup(), fn.forEach(bn), fn.clear());
      };
    }),
      (dn = [Ae]),
      (le[31] = Ae),
      (le[32] = mn),
      (le[33] = dn));
  else ((mn = le[32]), (dn = le[33]));
  E(mn, dn);
  let qo;
  if (le[34] !== y.state)
    ((qo =
      y.state === "starting" &&
      r(o, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1,
        children: [
          e(t, { bold: !0, children: "Create Authentication Token" }),
          e(t, {
            dimColor: !0,
            children: "Creating a long-lived token for GitHub Actions",
          }),
        ],
      })),
      (le[34] = y.state),
      (le[35] = qo));
  else qo = le[35];
  let Yo;
  if (le[36] !== y.state)
    ((Yo =
      y.state !== "success" &&
      y.state !== "starting" &&
      y.state !== "processing" &&
      r(
        o,
        {
          flexDirection: "column",
          gap: 1,
          paddingBottom: 1,
          children: [
            e(t, { bold: !0, children: "Create Authentication Token" }),
            e(t, {
              dimColor: !0,
              children: "Creating a long-lived token for GitHub Actions",
            }),
          ],
        },
        "header",
      )),
      (le[36] = y.state),
      (le[37] = Yo));
  else Yo = le[37];
  let Vo;
  if (le[38] !== y.state || le[39] !== y.url || le[40] !== ye || le[41] !== Wo)
    ((Vo =
      y.state === "waiting_for_login" &&
      ye &&
      r(
        o,
        {
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
                    e(YL, { via: Wo }),
                  ],
                }),
                e(JL, { via: Wo }),
              ],
            }),
            e(ct, {
              url: y.url,
              assumeSupport: !0,
              children: e(t, { dimColor: !0, children: y.url }),
            }),
          ],
        },
        "urlToCopy",
      )),
      (le[38] = y.state),
      (le[39] = y.url),
      (le[40] = ye),
      (le[41] = Wo),
      (le[42] = Vo));
  else Vo = le[42];
  let zo;
  if (
    le[43] !== er ||
    le[44] !== Kt ||
    le[45] !== y ||
    le[46] !== Ee ||
    le[47] !== ye ||
    le[48] !== sr
  )
    ((zo = e(o, {
      paddingLeft: 1,
      flexDirection: "column",
      gap: 1,
      children: e(Xo, {
        oauthStatus: y,
        showPastePrompt: ye,
        pastedCode: Ee,
        setPastedCode: $o,
        cursorOffset: er,
        setCursorOffset: tr,
        textInputColumns: sr,
        onSubmitCode: Kt,
      }),
    })),
      (le[43] = er),
      (le[44] = Kt),
      (le[45] = y),
      (le[46] = Ee),
      (le[47] = ye),
      (le[48] = sr),
      (le[49] = zo));
  else zo = le[49];
  let gn;
  if (
    le[50] !== $t ||
    le[51] !== qo ||
    le[52] !== Yo ||
    le[53] !== Vo ||
    le[54] !== zo
  )
    ((gn = r(mr, { gap: 1, onKeyDown: $t, children: [qo, Yo, Vo, zo] })),
      (le[50] = $t),
      (le[51] = qo),
      (le[52] = Yo),
      (le[53] = Vo),
      (le[54] = zo),
      (le[55] = gn));
  else gn = le[55];
  return gn;
}
function Xo(Ru) {
  let Pe = _(25),
    {
      oauthStatus: Re,
      showPastePrompt: _t,
      pastedCode: rr,
      setPastedCode: ir,
      cursorOffset: nr,
      setCursorOffset: ar,
      textInputColumns: lr,
      onSubmitCode: cr,
    } = Ru;
  switch (Re.state) {
    case "starting": {
      let Y;
      if (Pe[0] === p)
        ((Y = e($n, { message: "Starting authentication\u2026" })),
          (Pe[0] = Y));
      else Y = Pe[0];
      return Y;
    }
    case "waiting_for_login": {
      let Y;
      if (Pe[1] !== _t)
        ((Y =
          !_t &&
          e($n, {
            message:
              "Opening browser to sign in with your Claude account\u2026",
          })),
          (Pe[1] = _t),
          (Pe[2] = Y));
      else Y = Pe[2];
      let He;
      if (
        Pe[3] !== nr ||
        Pe[4] !== Re.url ||
        Pe[5] !== cr ||
        Pe[6] !== rr ||
        Pe[7] !== ar ||
        Pe[8] !== ir ||
        Pe[9] !== _t ||
        Pe[10] !== lr
      )
        ((He =
          _t &&
          r(o, {
            children: [
              e(t, { children: Dt }),
              e(hn, {
                value: rr,
                onChange: ir,
                onSubmit: (vu) => cr(vu, Re.url),
                cursorOffset: nr,
                onChangeCursorOffset: ar,
                columns: lr,
              }),
            ],
          })),
          (Pe[3] = nr),
          (Pe[4] = Re.url),
          (Pe[5] = cr),
          (Pe[6] = rr),
          (Pe[7] = ar),
          (Pe[8] = ir),
          (Pe[9] = _t),
          (Pe[10] = lr),
          (Pe[11] = He));
      else He = Pe[11];
      let Wt;
      if (Pe[12] !== Y || Pe[13] !== He)
        ((Wt = r(o, { flexDirection: "column", gap: 1, children: [Y, He] })),
          (Pe[12] = Y),
          (Pe[13] = He),
          (Pe[14] = Wt));
      else Wt = Pe[14];
      return Wt;
    }
    case "processing": {
      let Y;
      if (Pe[15] === p)
        ((Y = e($n, { message: "Processing authentication\u2026" })),
          (Pe[15] = Y));
      else Y = Pe[15];
      return Y;
    }
    case "success": {
      let Y;
      if (Pe[16] === p)
        ((Y = r(o, {
          flexDirection: "column",
          gap: 1,
          children: [
            e(t, {
              color: "success",
              children: "\u2713 Authentication token created successfully!",
            }),
            e(t, {
              dimColor: !0,
              children: "Using token for GitHub Actions setup\u2026",
            }),
          ],
        })),
          (Pe[16] = Y));
      else Y = Pe[16];
      return Y;
    }
    case "error": {
      let Y;
      if (Pe[17] !== Re.message)
        ((Y = r(t, {
          color: "error",
          children: ["OAuth error: ", Re.message],
        })),
          (Pe[17] = Re.message),
          (Pe[18] = Y));
      else Y = Pe[18];
      let He;
      if (Pe[19] !== Re.toRetry)
        ((He = Re.toRetry
          ? e(t, {
              dimColor: !0,
              children: "Press Enter to try again, or any other key to cancel",
            })
          : e(t, {
              dimColor: !0,
              children: "Press any key to return to API key selection",
            })),
          (Pe[19] = Re.toRetry),
          (Pe[20] = He));
      else He = Pe[20];
      let Wt;
      if (Pe[21] !== Y || Pe[22] !== He)
        ((Wt = r(o, { flexDirection: "column", gap: 1, children: [Y, He] })),
          (Pe[21] = Y),
          (Pe[22] = He),
          (Pe[23] = Wt));
      else Wt = Pe[23];
      return Wt;
    }
    case "about_to_retry": {
      let Y;
      if (Pe[24] === p)
        ((Y = e(o, {
          flexDirection: "column",
          gap: 1,
          children: e(t, { color: "permission", children: "Retrying\u2026" }),
        })),
          (Pe[24] = Y));
      else Y = Pe[24];
      return Y;
    }
    default: {
      return null;
    }
  }
}
function Ft(Bu) {
  let Lt = _(8),
    { onSelect: ur, onCancel: pr } = Bu,
    yn;
  if (Lt[0] === p)
    ((yn = [
      { label: "Set up GitHub Actions workflows", value: "setup" },
      {
        label: "Skip for now (you can run /install-github-app again later)",
        value: "skip",
      },
    ]),
      (Lt[0] = yn));
  else yn = Lt[0];
  let Gu = yn,
    kn;
  if (Lt[1] !== ur)
    ((kn = (Nu) => {
      ur(Nu);
    }),
      (Lt[1] = ur),
      (Lt[2] = kn));
  else kn = Lt[2];
  let dr = kn,
    Cn;
  if (Lt[3] === p)
    ((Cn = e(o, {
      marginBottom: 1,
      children: e(uc, {
        subtitle: "Set up GitHub Actions",
        children: "GitHub App installed!",
      }),
    })),
      (Lt[3] = Cn));
  else Cn = Lt[3];
  let xn;
  if (Lt[4] === p)
    ((xn = e(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: e(t, {
        children:
          "The Claude GitHub App is now installed. You can optionally set up GitHub Actions workflows so Claude responds to @claude mentions in issues and PRs.",
      }),
    })),
      (Lt[4] = xn));
  else xn = Lt[4];
  let An;
  if (Lt[5] !== dr || Lt[6] !== pr)
    ((An = r(o, {
      flexDirection: "column",
      borderStyle: "round",
      borderDimColor: !0,
      paddingX: 1,
      children: [
        Cn,
        xn,
        e(o, {
          flexDirection: "column",
          children: e(ve, { options: Gu, onChange: dr, onCancel: pr }),
        }),
      ],
    })),
      (Lt[5] = dr),
      (Lt[6] = pr),
      (Lt[7] = An));
  else An = Lt[7];
  return An;
}
function Yt(Yu) {
  let we = _(25),
    {
      secretExists: bt,
      useExistingSecret: yt,
      secretName: fr,
      skipWorkflow: Rn,
      appOnlyInstall: vn,
    } = Yu,
    kt = Rn === void 0 ? !1 : Rn;
  if (vn === void 0 ? !1 : vn) {
    let qt;
    if (we[0] === p)
      ((qt = e(o, {
        marginBottom: 1,
        children: e(uc, {
          subtitle: "Success",
          children: "Install GitHub App",
        }),
      })),
        (we[0] = qt));
    else qt = we[0];
    let qe;
    if (we[1] === p)
      ((qe = r(t, {
        color: "success",
        children: [
          e(et, { status: "success", withSpace: !0 }),
          "GitHub App installed",
        ],
      })),
        (we[1] = qe));
    else qe = we[1];
    let Ye;
    if (we[2] === p)
      ((Ye = r(_s, {
        children: [
          qt,
          qe,
          e(o, {
            marginTop: 1,
            children: e(t, {
              children:
                "Run /install-github-app again anytime to set up GitHub Actions workflows.",
            }),
          }),
        ],
      })),
        (we[2] = Ye));
    else Ye = we[2];
    let Ve;
    if (we[3] === p)
      ((Ve = r(N, {
        children: [
          Ye,
          e(o, {
            marginLeft: 3,
            children: e(t, { dimColor: !0, children: "Press any key to exit" }),
          }),
        ],
      })),
        (we[3] = Ve));
    else Ve = we[3];
    return Ve;
  }
  let qt;
  if (we[4] === p)
    ((qt = e(o, {
      marginBottom: 1,
      children: e(uc, { subtitle: "Success", children: "Install GitHub App" }),
    })),
      (we[4] = qt));
  else qt = we[4];
  let qe;
  if (we[5] !== kt)
    ((qe =
      !kt &&
      r(t, {
        color: "success",
        children: [
          e(et, { status: "success", withSpace: !0 }),
          "GitHub Actions workflow created!",
        ],
      })),
      (we[5] = kt),
      (we[6] = qe));
  else qe = we[6];
  let Ye;
  if (we[7] !== bt || we[8] !== yt)
    ((Ye =
      bt &&
      yt &&
      e(o, {
        marginTop: 1,
        children: r(t, {
          color: "success",
          children: [
            e(et, { status: "success", withSpace: !0 }),
            "Using existing ANTHROPIC_API_KEY secret",
          ],
        }),
      })),
      (we[7] = bt),
      (we[8] = yt),
      (we[9] = Ye));
  else Ye = we[9];
  let Ve;
  if (we[10] !== bt || we[11] !== fr || we[12] !== yt)
    ((Ve =
      (!bt || !yt) &&
      e(o, {
        marginTop: 1,
        children: r(t, {
          color: "success",
          children: [
            e(et, { status: "success", withSpace: !0 }),
            "API key saved as ",
            fr,
            " secret",
          ],
        }),
      })),
      (we[10] = bt),
      (we[11] = fr),
      (we[12] = yt),
      (we[13] = Ve));
  else Ve = we[13];
  let Sn;
  if (we[14] === p)
    ((Sn = e(o, { marginTop: 1, children: e(t, { children: "Next steps:" }) })),
      (we[14] = Sn));
  else Sn = we[14];
  let jo;
  if (we[15] !== kt)
    ((jo = kt
      ? r(N, {
          children: [
            e(t, {
              children:
                "1. Install the Claude GitHub App if you haven't already",
            }),
            e(t, { children: "2. Your workflow file was kept unchanged" }),
            e(t, { children: "3. API key is configured and ready to use" }),
          ],
        })
      : r(N, {
          children: [
            e(t, { children: "1. A pre-filled PR page has been created" }),
            e(t, {
              children:
                "2. Install the Claude GitHub App if you haven't already",
            }),
            e(t, {
              children: "3. Merge the PR to enable Claude PR assistance",
            }),
          ],
        })),
      (we[15] = kt),
      (we[16] = jo));
  else jo = we[16];
  let Mo;
  if (we[17] !== qe || we[18] !== Ye || we[19] !== Ve || we[20] !== jo)
    ((Mo = r(_s, { children: [qt, qe, Ye, Ve, Sn, jo] })),
      (we[17] = qe),
      (we[18] = Ye),
      (we[19] = Ve),
      (we[20] = jo),
      (we[21] = Mo));
  else Mo = we[21];
  let Pn;
  if (we[22] === p)
    ((Pn = e(o, {
      marginLeft: 3,
      children: e(t, { dimColor: !0, children: "Press any key to exit" }),
    })),
      (we[22] = Pn));
  else Pn = we[22];
  let In;
  if (we[23] !== Mo)
    ((In = r(N, { children: [Mo, Pn] })), (we[23] = Mo), (we[24] = In));
  else In = we[24];
  return In;
}
async function On({
  repoName: g,
  branchName: b,
  workflowPath: f,
  workflowContent: a,
  secretName: c,
  message: v,
  context: O,
}) {
  let A = await Fe("gh", ["api", `repos/${g}/contents/${f}`, "--jq", ".sha"]),
    H = null;
  if (A.code === 0) H = A.stdout.trim();
  let P = a;
  if (c === "CLAUDE_CODE_OAUTH_TOKEN")
    P = a.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      "claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}",
    );
  else if (c !== "ANTHROPIC_API_KEY")
    P = a.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      `anthropic_api_key: \${{ secrets.${c} }}`,
    );
  let U = Buffer.from(P).toString("base64"),
    X = [
      "api",
      "--method",
      "PUT",
      `repos/${g}/contents/${f}`,
      "-f",
      `message=${H ? `"Update ${v}"` : `"${v}"`}`,
      "-f",
      `content=${U}`,
      "-f",
      `branch=${b}`,
    ];
  if (H) X.push("-f", `sha=${H}`);
  let B = await Fe("gh", X);
  if (B.code !== 0) {
    if (B.stderr.includes("422") && B.stderr.includes("sha"))
      throw (
        i("tengu_setup_github_actions_failed", {
          reason: S("failed_to_create_workflow_file"),
          exit_code: B.code,
          ...O,
        }),
        Error(
          `Failed to create workflow file ${f}: A Claude workflow file already exists in this repository. Please remove it first or update it manually.`,
        )
      );
    i("tengu_setup_github_actions_failed", {
      reason: S("failed_to_create_workflow_file"),
      exit_code: B.code,
      ...O,
    });
    let ie =
      `

Need help? Common issues:
` +
      `\xB7 Permission denied \u2192 Run: gh auth refresh -h github.com -s repo,workflow
` +
      `\xB7 Not authorized \u2192 Ensure you have admin access to the repository
` +
      "\xB7 For manual setup \u2192 Visit: https://github.com/anthropics/claude-code-action";
    throw Error(`Failed to create workflow file ${f}: ${B.stderr}${ie}`);
  }
}
async function Jo(g, b, f, a, c = !1, v, O, A, H) {
  try {
    i("tengu_setup_github_actions_started", {
      skip_workflow: c,
      has_api_key: !!b,
      using_default_secret_name: f === "ANTHROPIC_API_KEY",
      selected_claude_workflow: v.includes("claude"),
      selected_claude_review_workflow: v.includes("claude-review"),
      ...A,
    });
    let P = await Fe("gh", ["api", `repos/${g}`, "--jq", ".id"]);
    if (P.code !== 0)
      throw (
        i("tengu_setup_github_actions_failed", {
          reason: S("repo_not_found"),
          exit_code: P.code,
          ...A,
        }),
        Error(`Failed to access repository ${g}: ${P.stderr}`)
      );
    let U = await Fe("gh", ["api", `repos/${g}`, "--jq", ".default_branch"]);
    if (U.code !== 0)
      throw (
        i("tengu_setup_github_actions_failed", {
          reason: S("failed_to_get_default_branch"),
          exit_code: U.code,
          ...A,
        }),
        Error(`Failed to get default branch: ${U.stderr}`)
      );
    let X = U.stdout.trim(),
      B = await Fe("gh", [
        "api",
        `repos/${g}/git/ref/heads/${X}`,
        "--jq",
        ".object.sha",
      ]);
    if (B.code !== 0)
      throw (
        i("tengu_setup_github_actions_failed", {
          reason: S("failed_to_get_branch_sha"),
          exit_code: B.code,
          ...A,
        }),
        Error(`Failed to get branch SHA: ${B.stderr}`)
      );
    let ie = B.stdout.trim(),
      j = null;
    if (!c) {
      (a(), (j = `add-claude-github-actions-${Date.now()}`));
      let T = await Fe("gh", [
        "api",
        "--method",
        "POST",
        `repos/${g}/git/refs`,
        "-f",
        `ref=refs/heads/${j}`,
        "-f",
        `sha=${ie}`,
      ]);
      if (T.code !== 0)
        throw (
          i("tengu_setup_github_actions_failed", {
            reason: S("failed_to_create_branch"),
            exit_code: T.code,
            ...A,
          }),
          Error(`Failed to create branch: ${T.stderr}`)
        );
      a();
      let fe = [];
      if (v.includes("claude"))
        fe.push({
          path: ".github/workflows/claude.yml",
          content: bs,
          message: "Claude PR Assistant workflow",
        });
      if (v.includes("claude-review"))
        fe.push({
          path: ".github/workflows/claude-code-review.yml",
          content: ks,
          message: "Claude Code Review workflow",
        });
      for (let Be of fe)
        await On({
          repoName: g,
          branchName: j,
          workflowPath: Be.path,
          workflowContent: Be.content,
          secretName: f,
          message: Be.message,
          context: A,
        });
    }
    if ((a(), b)) {
      let T = await Fe("gh", ["secret", "set", f, "--body", b, "--repo", g]);
      if (T.code !== 0) {
        i("tengu_setup_github_actions_failed", {
          reason: S("failed_to_set_api_key_secret"),
          exit_code: T.code,
          ...A,
        });
        let fe =
          `

Need help? Common issues:
` +
          `\xB7 Permission denied \u2192 Run: gh auth refresh -h github.com -s repo
` +
          `\xB7 Not authorized \u2192 Ensure you have admin access to the repository
` +
          "\xB7 For manual setup \u2192 Visit: https://github.com/anthropics/claude-code-action";
        throw Error(
          `Failed to set API key secret: ${T.stderr || "Unknown error"}${fe}`,
        );
      }
    }
    if (!c && j) {
      a();
      let T = `https://github.com/${g}/compare/${X}...${j}?quick_pull=1&title=${encodeURIComponent(gs)}&body=${encodeURIComponent(ys)}`;
      await Gr(T);
    }
    (i("tengu_setup_github_actions_completed", {
      skip_workflow: c,
      has_api_key: !!b,
      auth_type: u(O),
      using_default_secret_name: f === "ANTHROPIC_API_KEY",
      selected_claude_workflow: v.includes("claude"),
      selected_claude_review_workflow: v.includes("claude-review"),
      ...A,
    }),
      Te(
        (T) => ({
          ...T,
          githubActionSetupCount: (T.githubActionSetupCount ?? 0) + 1,
        }),
        H,
      ));
  } catch (P) {
    if (P instanceof Error && P.message.includes("Failed to"))
      n(`GitHub Actions setup failed: ${P.message}`, { level: "error" });
    else if (
      (i("tengu_setup_github_actions_failed", {
        reason: S("unexpected_error"),
        ...A,
      }),
      P instanceof Error)
    )
      h(P);
    throw P;
  }
}
function Wn(hp, gp) {
  return e(lu, { children: e(t, { dimColor: !0, children: hp }) }, gp);
}
function Kn(Qo, wp) {
  return r(
    o,
    {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        e(t, { color: "warning", bold: !0, children: Qo.title }),
        e(t, { children: Qo.message }),
        Qo.instructions.length > 0 &&
          e(o, {
            flexDirection: "column",
            marginLeft: 2,
            marginTop: 1,
            children: Qo.instructions.map(Wn),
          }),
      ],
    },
    wp,
  );
}
function Vt(dp) {
  let ze = _(9),
    { warnings: hr, onContinue: fp } = dp,
    Tn;
  if (ze[0] === p) ((Tn = { context: "Confirmation" }), (ze[0] = Tn));
  else Tn = ze[0];
  Ne("confirm:yes", fp, Tn);
  let En;
  if (ze[1] === p)
    ((En = r(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        r(t, { bold: !0, children: [L.warning, " Setup Warnings"] }),
        e(t, {
          dimColor: !0,
          children:
            "We found some potential issues, but you can continue anyway",
        }),
      ],
    })),
      (ze[1] = En));
  else En = ze[1];
  let Zo;
  if (ze[2] !== hr) ((Zo = hr.map(Kn)), (ze[2] = hr), (ze[3] = Zo));
  else Zo = ze[3];
  let Hn;
  if (ze[4] === p)
    ((Hn = e(D, { chord: "enter", action: "continue anyway" })), (ze[4] = Hn));
  else Hn = ze[4];
  let Bn;
  if (ze[5] === p)
    ((Bn = e(o, {
      marginTop: 1,
      children: r(t, {
        bold: !0,
        color: "permission",
        children: [
          "Press",
          " ",
          Hn,
          ", or",
          " ",
          e(D, {
            chord: "ctrl+c",
            action: "exit and fix issues",
            format: { modCase: "title", charCase: "upper" },
          }),
        ],
      }),
    })),
      (ze[5] = Bn));
  else Bn = ze[5];
  let Gn;
  if (ze[6] === p)
    ((Gn = e(o, {
      marginTop: 1,
      children: r(t, {
        dimColor: !0,
        children: [
          "You can also try the manual setup steps if needed:",
          " ",
          e(t, { color: "claude", children: Z }),
        ],
      }),
    })),
      (ze[6] = Gn));
  else Gn = ze[6];
  let Nn;
  if (ze[7] !== Zo)
    ((Nn = e(N, { children: r(_s, { children: [En, Zo, Bn, Gn] }) })),
      (ze[7] = Zo),
      (ze[8] = Nn));
  else Nn = ze[8];
  return Nn;
}
function Ta() {
  return gb();
}
function Ea() {
  i("tengu_install_github_app_started", {});
}
function Ha(Um) {
  return { ...Um, ...Xt };
}
function Ba(Lm) {
  return { ...Lm, step: "creating", currentWorkflowInstallStep: 0 };
}
function Ga(Oa) {
  return {
    ...Oa,
    currentWorkflowInstallStep: Oa.currentWorkflowInstallStep + 1,
  };
}
function Na(Fm) {
  return { ...Fm, step: "success" };
}
function $a(qm) {
  return {
    ...qm,
    step: "error",
    error: "A Claude workflow file already exists in this repository.",
    errorReason: "Workflow file conflict",
    errorInstructions: [
      "The file .github/workflows/claude.yml already exists",
      "You can either:",
      "  1. Delete the existing file and run this command again",
      "  2. Update the existing file manually using the template from:",
      `     ${Z}`,
    ],
  };
}
function Ka(Ym) {
  return /^ANTHROPIC_API_KEY\s+/.test(Ym);
}
function Wa(Vm) {
  return { ...Vm, secretExists: !0, step: "check-existing-secret" };
}
function Da(zm) {
  return { ...zm, step: "api-key" };
}
function Ua(Xm) {
  return { ...Xm, step: "api-key" };
}
function La(jm) {
  return { ...jm, step: "install-app" };
}
function Fa(Mm) {
  return { ...Mm, step: "setup-actions-prompt" };
}
function qa(Jm) {
  return { ...Jm, step: "error", error: "API key is required" };
}
function Ya(Zm) {
  return /^ANTHROPIC_API_KEY\s+/.test(Zm);
}
function Va(Qm) {
  return { ...Qm, secretExists: !0, step: "check-existing-secret" };
}
function za(ed) {
  return { ...ed, ...Xt };
}
function Xa(td) {
  return { ...td, step: "oauth-flow" };
}
function ja(od) {
  return { ...od, step: "api-key" };
}
function Ma(sd) {
  return { ...sd, step: "success", appOnlyInstall: !0 };
}
function Ja(rd) {
  return { ...rd, step: "check-existing-workflow" };
}
function Za(id) {
  return { ...id, step: "select-workflows" };
}
function Qa(nd) {
  return { ...nd, step: "api-key" };
}
function el(ad) {
  return { ...ad, step: "api-key" };
}
var Ir = {
    step: "check-gh",
    selectedRepoName: "",
    currentRepo: "",
    useCurrentRepo: !1,
    apiKeyOrOAuthToken: "",
    useExistingKey: !0,
    currentWorkflowInstallStep: 0,
    errorInstructions: [],
    warnings: [],
    secretExists: !1,
    secretName: "ANTHROPIC_API_KEY",
    useExistingSecret: !0,
    workflowExists: !1,
    selectedWorkflows: ["claude", "claude-review"],
    selectedApiKeyOption: "new",
    authType: "api_key",
  },
  Xt = {
    step: "error",
    error:
      "Can't finish /install-github-app while no terminal is attached to this background session. Attach to it and run the command again.",
    errorReason: "No terminal attached",
    errorInstructions: [],
  };
function Or(ke) {
  let R = _(126),
    { storageV5: gr } = _e(),
    [q] = d(Ta);
  const wr = !!q,
    _r = q ? "existing" : cl() ? "oauth" : "new";
  let Dn;
  if (R[0] !== wr || R[1] !== _r)
    ((Dn = { ...Ir, useExistingKey: wr, selectedApiKeyOption: _r }),
      (R[0] = wr),
      (R[1] = _r),
      (R[2] = Dn));
  else Dn = R[2];
  let [s, I] = d(Dn),
    es = vt();
  is();
  let Ln;
  if (R[3] !== ke)
    ((Ln = { "confirm:no": () => ke.onDone("Installation cancelled by user") }),
      (R[3] = ke),
      (R[4] = Ln));
  else Ln = R[4];
  const br =
    s.step !== "success" && s.step !== "error" && s.step !== "oauth-flow";
  let Fn;
  if (R[5] !== br)
    ((Fn = { context: "Settings", isActive: br }), (R[5] = br), (R[6] = Fn));
  else Fn = R[6];
  Ze(Ln, Fn);
  let qn;
  if (R[7] === p) ((qn = []), (R[7] = qn));
  else qn = R[7];
  E(Ea, qn);
  let Yn;
  if (R[8] === p)
    ((Yn = async () => {
      let ts = [];
      if ((await a_("gh --version", { reject: !1 })).exitCode !== 0)
        ts.push({
          title: "GitHub CLI not found",
          message:
            "GitHub CLI (gh) does not appear to be installed or accessible.",
          instructions: [
            "Install GitHub CLI from https://cli.github.com/",
            "macOS: brew install gh",
            "Windows: winget install --id GitHub.cli",
            "Linux: See installation instructions at https://github.com/cli/cli#installation",
          ],
        });
      let Vn = await a_("gh auth status -a", { reject: !1 });
      if (Vn.exitCode !== 0)
        ts.push({
          title: "GitHub CLI not authenticated",
          message: "GitHub CLI does not appear to be authenticated.",
          instructions: [
            "Run: gh auth login",
            "Follow the prompts to authenticate with GitHub",
            "Or set up authentication using environment variables or other methods",
          ],
        });
      else {
        let zn = Vn.stdout.match(/Token scopes:.*$/m);
        if (zn) {
          let Xn = zn[0];
          let Ct = [];
          if (!Xn.includes("repo")) Ct.push("repo");
          if (!Xn.includes("workflow")) Ct.push("workflow");
          if (Ct.length > 0) {
            I((sm) => ({
              ...sm,
              step: "error",
              error: `GitHub CLI is missing required permissions: ${Ct.join(", ")}.`,
              errorReason: "Missing required scopes",
              errorInstructions: [
                `Your GitHub CLI authentication is missing the "${Ct.join('" and "')}" ${x(Ct.length, "scope")} needed to manage GitHub Actions and secrets.`,
                "",
                "To fix this, run:",
                "  gh auth refresh -h github.com -s repo,workflow",
                "",
                "This will add the necessary permissions to manage workflows and secrets.",
              ],
            }));
            return;
          }
        }
      }
      let yr = (await N2e()) ?? "";
      (i("tengu_install_github_app_step_completed", { step: S("check-gh") }),
        I((rm) => ({
          ...rm,
          warnings: ts,
          currentRepo: yr,
          selectedRepoName: yr,
          useCurrentRepo: !!yr,
          step: ts.length > 0 ? "warnings" : "choose-repo",
        })));
    }),
      (R[8] = Yn));
  else Yn = R[8];
  let jn = Yn,
    Mn,
    Jn;
  if (R[9] !== s.step)
    ((Mn = () => {
      if (s.step === "check-gh") jn();
    }),
      (Jn = [s.step, jn]),
      (R[9] = s.step),
      (R[10] = Mn),
      (R[11] = Jn));
  else ((Mn = R[10]), (Jn = R[11]));
  E(Mn, Jn);
  let Zn;
  if (
    R[12] !== s.authType ||
    R[13] !== s.secretExists ||
    R[14] !== s.selectedRepoName ||
    R[15] !== s.selectedWorkflows ||
    R[16] !== s.useCurrentRepo ||
    R[17] !== s.workflowAction ||
    R[18] !== s.workflowExists ||
    R[19] !== gr
  )
    ((Zn = async (im, nm) => {
      if (ap()) {
        (i("tengu_install_github_app_error", {
          reason: S("unattended_bg_session"),
        }),
          I(Ha));
        return;
      }
      I(Ba);
      try {
        (await Jo(
          s.selectedRepoName,
          im,
          nm,
          () => {
            I(Ga);
          },
          s.workflowAction === "skip",
          s.selectedWorkflows,
          s.authType,
          {
            useCurrentRepo: s.useCurrentRepo,
            workflowExists: s.workflowExists,
            secretExists: s.secretExists,
          },
          gr,
        ),
          i("tengu_install_github_app_step_completed", { step: S("creating") }),
          I(Na));
      } catch (os) {
        let Qn = os;
        let ea =
          Qn instanceof Error ? Qn.message : "Failed to set up GitHub Actions";
        if (ea.includes("workflow file already exists"))
          (i("tengu_install_github_app_error", {
            reason: S("workflow_file_exists"),
          }),
            I($a));
        else
          (i("tengu_install_github_app_error", {
            reason: S("setup_github_actions_failed"),
          }),
            I((am) => ({
              ...am,
              step: "error",
              error: ea,
              errorReason: "GitHub Actions setup failed",
              errorInstructions: [],
            })));
      }
    }),
      (R[12] = s.authType),
      (R[13] = s.secretExists),
      (R[14] = s.selectedRepoName),
      (R[15] = s.selectedWorkflows),
      (R[16] = s.useCurrentRepo),
      (R[17] = s.workflowAction),
      (R[18] = s.workflowExists),
      (R[19] = gr),
      (R[20] = Zn));
  else Zn = R[20];
  let be = Zn,
    os;
  if (R[21] === p)
    ((os = async function ss() {
      await Gr("https://github.com/apps/claude");
    }),
      (R[21] = os));
  else os = R[21];
  let ss = os,
    ta;
  if (R[22] === p)
    ((ta = async function kr(cm) {
      try {
        let rs = await Fe("gh", [
          "api",
          `repos/${cm}`,
          "--jq",
          ".permissions.admin",
        ]);
        if (rs.code === 0) {
          return { hasAccess: rs.stdout.trim() === "true" };
        }
        if (rs.stderr.includes("404") || rs.stderr.includes("Not Found")) {
          return { hasAccess: !1, error: "repository_not_found" };
        }
        return { hasAccess: !1 };
      } catch {
        return { hasAccess: !1 };
      }
    }),
      (R[22] = ta));
  else ta = R[22];
  let kr = ta,
    oa;
  if (R[23] === p)
    ((oa = async function Cr(um) {
      return (
        (
          await Fe("gh", [
            "api",
            `repos/${um}/contents/.github/workflows/claude.yml`,
            "--jq",
            ".sha",
          ])
        ).code === 0
      );
    }),
      (R[23] = oa));
  else oa = R[23];
  let Cr = oa,
    sa;
  if (
    R[24] !== q ||
    R[25] !== be ||
    R[26] !== s.secretName ||
    R[27] !== s.selectedRepoName
  )
    ((sa = async function De() {
      let ra = await Fe("gh", [
        "secret",
        "list",
        "--app",
        "actions",
        "--repo",
        s.selectedRepoName,
      ]);
      if (ra.code === 0) {
        if (
          ra.stdout
            .split(
              `
`,
            )
            .some(Ka)
        )
          I(Wa);
        else if (q)
          (I((pm) => ({ ...pm, apiKeyOrOAuthToken: q, useExistingKey: !0 })),
            await be(q, s.secretName));
        else I(Da);
      } else if (q)
        (I((mm) => ({ ...mm, apiKeyOrOAuthToken: q, useExistingKey: !0 })),
          await be(q, s.secretName));
      else I(Ua);
    }),
      (R[24] = q),
      (R[25] = be),
      (R[26] = s.secretName),
      (R[27] = s.selectedRepoName),
      (R[28] = sa));
  else sa = R[28];
  let De = sa,
    ia;
  if (
    R[29] !== es ||
    R[30] !== q ||
    R[31] !== be ||
    R[32] !== s.apiKeyOrOAuthToken ||
    R[33] !== s.currentRepo ||
    R[34] !== s.secretName ||
    R[35] !== s.selectedApiKeyOption ||
    R[36] !== s.selectedRepoName ||
    R[37] !== s.step ||
    R[38] !== s.useCurrentRepo ||
    R[39] !== s.useExistingSecret ||
    R[40] !== s.warnings
  )
    ((ia = async () => {
      if (s.step === "warnings")
        (i("tengu_install_github_app_step_completed", { step: S("warnings") }),
          I(La),
          es.setTimeout(ss, 0));
      else if (s.step === "choose-repo") {
        let se = s.useCurrentRepo ? s.currentRepo : s.selectedRepoName;
        if (!se.trim()) {
          return;
        }
        let xt = [];
        let zt;
        let ns;
        if (se.includes("://")) {
          try {
            let na = new URL(se);
            ((zt = na.hostname), (ns = na.pathname.replace(/^\/+/, "")));
          } catch {}
        } else {
          let xr = se.match(/^[^@]+@([^:]+):(.+)$/);
          if (xr) ((zt = xr[1]), (ns = xr[2]));
          else {
            let Ar = se.search(/[:/]/);
            if (Ar > 0) ((zt = se.slice(0, Ar)), (ns = se.slice(Ar + 1)));
          }
        }
        if (zt && Do(zt)) {
          let aa = ns?.match(/^([^/]+\/[^/]+?)(?:\.git)?\/?$/);
          if (aa?.[1]) se = aa[1];
          else
            xt.push({
              title: "Invalid GitHub URL format",
              message: "The repository URL format appears to be invalid.",
              instructions: [
                `Use format: owner/repo or https://${fi}/owner/repo`,
                "Example: anthropics/claude-cli",
              ],
            });
        }
        if (!se.includes("/"))
          xt.push({
            title: "Repository format warning",
            message: 'Repository should be in format "owner/repo"',
            instructions: [
              "Use format: owner/repo",
              "Example: anthropics/claude-cli",
            ],
          });
        let la = await kr(se);
        if (la.error === "repository_not_found")
          xt.push({
            title: "Repository not found",
            message: `Repository ${se} was not found or you don't have access.`,
            instructions: [
              `Check that the repository name is correct: ${se}`,
              "Ensure you have access to this repository",
              'For private repositories, make sure your GitHub token has the "repo" scope',
              "You can add the repo scope with: gh auth refresh -h github.com -s repo,workflow",
            ],
          });
        else if (!la.hasAccess)
          xt.push({
            title: "Admin permissions required",
            message: `You might need admin permissions on ${se} to set up GitHub Actions.`,
            instructions: [
              "Repository admins can install GitHub Apps and set secrets",
              "Ask a repository admin to run this command if setup fails",
              "Alternatively, you can use the manual setup instructions",
            ],
          });
        let ca = await Cr(se);
        if (xt.length > 0) {
          let dm = [...s.warnings, ...xt];
          I((fm) => ({
            ...fm,
            selectedRepoName: se,
            workflowExists: ca,
            warnings: dm,
            step: "warnings",
          }));
        } else
          (i("tengu_install_github_app_step_completed", {
            step: S("choose-repo"),
          }),
            I((hm) => ({
              ...hm,
              selectedRepoName: se,
              workflowExists: ca,
              step: "install-app",
            })),
            es.setTimeout(ss, 0));
      } else if (s.step === "install-app")
        (i("tengu_install_github_app_step_completed", {
          step: S("install-app"),
        }),
          I(Fa));
      else if (s.step === "check-existing-workflow") {
        return;
      } else if (s.step === "select-workflows") {
        return;
      } else if (s.step === "check-existing-secret") {
        if (
          (i("tengu_install_github_app_step_completed", {
            step: S("check-existing-secret"),
          }),
          s.useExistingSecret)
        )
          await be(null, s.secretName);
        else await be(s.apiKeyOrOAuthToken, s.secretName);
      } else if (s.step === "api-key") {
        if (s.selectedApiKeyOption === "oauth") {
          return;
        }
        let as =
          s.selectedApiKeyOption === "existing" ? q : s.apiKeyOrOAuthToken;
        if (!as) {
          (i("tengu_install_github_app_error", {
            reason: S("api_key_missing"),
          }),
            I(qa));
          return;
        }
        I((gm) => ({
          ...gm,
          apiKeyOrOAuthToken: as,
          useExistingKey: s.selectedApiKeyOption === "existing",
        }));
        let ua = await Fe("gh", [
          "secret",
          "list",
          "--app",
          "actions",
          "--repo",
          s.selectedRepoName,
        ]);
        if (ua.code === 0) {
          if (
            ua.stdout
              .split(
                `
`,
              )
              .some(Ya)
          )
            (i("tengu_install_github_app_step_completed", {
              step: S("api-key"),
            }),
              I(Va));
          else
            (i("tengu_install_github_app_step_completed", {
              step: S("api-key"),
            }),
              await be(as, s.secretName));
        } else
          (i("tengu_install_github_app_step_completed", { step: S("api-key") }),
            await be(as, s.secretName));
      }
    }),
      (R[29] = es),
      (R[30] = q),
      (R[31] = be),
      (R[32] = s.apiKeyOrOAuthToken),
      (R[33] = s.currentRepo),
      (R[34] = s.secretName),
      (R[35] = s.selectedApiKeyOption),
      (R[36] = s.selectedRepoName),
      (R[37] = s.step),
      (R[38] = s.useCurrentRepo),
      (R[39] = s.useExistingSecret),
      (R[40] = s.warnings),
      (R[41] = ia));
  else ia = R[41];
  let ce = ia,
    pa;
  if (R[42] === p)
    ((pa = (wm) => {
      I((_m) => ({ ..._m, selectedRepoName: wm }));
    }),
      (R[42] = pa));
  else pa = R[42];
  let bm = pa,
    ma;
  if (R[43] === p)
    ((ma = (ym) => {
      I((km) => ({ ...km, apiKeyOrOAuthToken: ym }));
    }),
      (R[43] = ma));
  else ma = R[43];
  let Cm = ma,
    da;
  if (R[44] === p)
    ((da = (xm) => {
      I((Am) => ({ ...Am, selectedApiKeyOption: xm }));
    }),
      (R[44] = da));
  else da = R[44];
  let Rm = da,
    fa;
  if (R[45] === p)
    ((fa = () => {
      if (ap()) {
        (i("tengu_install_github_app_error", {
          reason: S("unattended_bg_session"),
        }),
          I(za));
        return;
      }
      (i("tengu_install_github_app_step_completed", { step: S("api-key") }),
        I(Xa));
    }),
      (R[45] = fa));
  else fa = R[45];
  let vm = fa,
    ha;
  if (R[46] !== be)
    ((ha = (ga) => {
      (i("tengu_install_github_app_step_completed", { step: S("oauth-flow") }),
        I((Sm) => ({
          ...Sm,
          apiKeyOrOAuthToken: ga,
          useExistingKey: !1,
          secretName: "CLAUDE_CODE_OAUTH_TOKEN",
          authType: "oauth_token",
        })),
        be(ga, "CLAUDE_CODE_OAUTH_TOKEN"));
    }),
      (R[46] = be),
      (R[47] = ha));
  else ha = R[47];
  let Rr = ha,
    wa;
  if (R[48] === p)
    ((wa = () => {
      I(ja);
    }),
      (R[48] = wa));
  else wa = R[48];
  let Pm = wa,
    _a;
  if (R[49] === p)
    ((_a = (vr) => {
      if (vr && !/^[a-zA-Z0-9_]+$/.test(vr)) {
        return;
      }
      I((Im) => ({ ...Im, secretName: vr }));
    }),
      (R[49] = _a));
  else _a = R[49];
  let Om = _a,
    ba;
  if (R[50] === p)
    ((ba = (ya) => {
      I((ka) => ({
        ...ka,
        useCurrentRepo: ya,
        selectedRepoName: ya ? ka.currentRepo : "",
      }));
    }),
      (R[50] = ba));
  else ba = R[50];
  let Tm = ba,
    Ca;
  if (R[51] === p)
    ((Ca = (Em) => {
      I((Hm) => ({ ...Hm, useExistingKey: Em }));
    }),
      (R[51] = Ca));
  else Ca = R[51];
  let Bm = Ca,
    xa;
  if (R[52] === p)
    ((xa = (Aa) => {
      I((Gm) => ({
        ...Gm,
        useExistingSecret: Aa,
        secretName: Aa ? "ANTHROPIC_API_KEY" : "",
      }));
    }),
      (R[52] = xa));
  else xa = R[52];
  let Nm = xa,
    Ra;
  if (R[53] !== s.workflowExists)
    ((Ra = (va) => {
      if (
        (i("tengu_install_github_app_step_completed", {
          step: S("setup-actions-prompt"),
          action: u(va),
        }),
        va === "skip")
      )
        I(Ma);
      else if (s.workflowExists) I(Ja);
      else I(Za);
    }),
      (R[53] = s.workflowExists),
      (R[54] = Ra));
  else Ra = R[54];
  let Sr = Ra,
    Sa;
  if (R[55] !== De || R[56] !== q || R[57] !== ke)
    ((Sa = async (ls) => {
      if (ls === "exit") {
        ke.onDone("Installation cancelled by user");
        return;
      }
      if (
        (i("tengu_install_github_app_step_completed", {
          step: S("check-existing-workflow"),
        }),
        I(($m) => ({ ...$m, workflowAction: ls })),
        ls === "skip" || ls === "update")
      ) {
        if (q) await De();
        else I(Qa);
      }
    }),
      (R[55] = De),
      (R[56] = q),
      (R[57] = ke),
      (R[58] = Sa));
  else Sa = R[58];
  let Pr = Sa,
    Pa;
  if (
    R[59] !== ke ||
    R[60] !== s.appOnlyInstall ||
    R[61] !== s.error ||
    R[62] !== s.step
  )
    ((Pa = function Ue(Km) {
      if ((Km.preventDefault(), s.step === "success"))
        i("tengu_install_github_app_completed", {});
      ke.onDone(
        s.step === "success"
          ? s.appOnlyInstall
            ? "GitHub App installed!"
            : "GitHub Actions setup complete!"
          : s.error
            ? `Couldn't install GitHub App: ${s.error}
For manual setup instructions, see: ${Z}`
            : `GitHub App installation failed
For manual setup instructions, see: ${Z}`,
      );
    }),
      (R[59] = ke),
      (R[60] = s.appOnlyInstall),
      (R[61] = s.error),
      (R[62] = s.step),
      (R[63] = Pa));
  else Pa = R[63];
  let Ue = Pa;
  switch (s.step) {
    case "check-gh": {
      let k;
      if (R[64] === p) ((k = e(Ot, {})), (R[64] = k));
      else k = R[64];
      return k;
    }
    case "warnings": {
      let k;
      if (R[65] !== ce || R[66] !== s.warnings)
        ((k = e(Vt, { warnings: s.warnings, onContinue: ce })),
          (R[65] = ce),
          (R[66] = s.warnings),
          (R[67] = k));
      else k = R[67];
      return k;
    }
    case "choose-repo": {
      let k;
      if (
        R[68] !== ce ||
        R[69] !== s.currentRepo ||
        R[70] !== s.selectedRepoName ||
        R[71] !== s.useCurrentRepo
      )
        ((k = e(Tt, {
          currentRepo: s.currentRepo,
          useCurrentRepo: s.useCurrentRepo,
          repoUrl: s.selectedRepoName,
          onRepoUrlChange: bm,
          onToggleUseCurrentRepo: Tm,
          onSubmit: ce,
        })),
          (R[68] = ce),
          (R[69] = s.currentRepo),
          (R[70] = s.selectedRepoName),
          (R[71] = s.useCurrentRepo),
          (R[72] = k));
      else k = R[72];
      return k;
    }
    case "install-app": {
      let k;
      if (R[73] !== ce || R[74] !== s.selectedRepoName)
        ((k = e(Gt, { repoUrl: s.selectedRepoName, onSubmit: ce })),
          (R[73] = ce),
          (R[74] = s.selectedRepoName),
          (R[75] = k));
      else k = R[75];
      return k;
    }
    case "setup-actions-prompt": {
      let k;
      if (R[76] !== ke)
        ((k = () => ke.onDone("Installation cancelled by user")),
          (R[76] = ke),
          (R[77] = k));
      else k = R[77];
      let z;
      if (R[78] !== Sr || R[79] !== k)
        ((z = e(Ft, { onSelect: Sr, onCancel: k })),
          (R[78] = Sr),
          (R[79] = k),
          (R[80] = z));
      else z = R[80];
      return z;
    }
    case "check-existing-workflow": {
      let k;
      if (R[81] !== Pr || R[82] !== s.selectedRepoName)
        ((k = e(Bt, { repoName: s.selectedRepoName, onSelectAction: Pr })),
          (R[81] = Pr),
          (R[82] = s.selectedRepoName),
          (R[83] = k));
      else k = R[83];
      return k;
    }
    case "check-existing-secret": {
      let k;
      if (
        R[84] !== ce ||
        R[85] !== s.secretName ||
        R[86] !== s.useExistingSecret
      )
        ((k = e(It, {
          useExistingSecret: s.useExistingSecret,
          secretName: s.secretName,
          onToggleUseExistingSecret: Nm,
          onSecretNameChange: Om,
          onSubmit: ce,
        })),
          (R[84] = ce),
          (R[85] = s.secretName),
          (R[86] = s.useExistingSecret),
          (R[87] = k));
      else k = R[87];
      return k;
    }
    case "api-key": {
      let k;
      if (R[88] === p) ((k = cl() ? vm : void 0), (R[88] = k));
      else k = R[88];
      let z;
      if (
        R[89] !== q ||
        R[90] !== ce ||
        R[91] !== s.apiKeyOrOAuthToken ||
        R[92] !== s.selectedApiKeyOption ||
        R[93] !== s.useExistingKey
      )
        ((z = e(Pt, {
          existingApiKey: q,
          useExistingKey: s.useExistingKey,
          apiKeyOrOAuthToken: s.apiKeyOrOAuthToken,
          onApiKeyChange: Cm,
          onToggleUseExistingKey: Bm,
          onSubmit: ce,
          onCreateOAuthToken: k,
          selectedOption: s.selectedApiKeyOption,
          onSelectOption: Rm,
        })),
          (R[89] = q),
          (R[90] = ce),
          (R[91] = s.apiKeyOrOAuthToken),
          (R[92] = s.selectedApiKeyOption),
          (R[93] = s.useExistingKey),
          (R[94] = z));
      else z = R[94];
      return z;
    }
    case "creating": {
      const k = s.workflowAction === "skip";
      let z;
      if (
        R[95] !== s.currentWorkflowInstallStep ||
        R[96] !== s.secretExists ||
        R[97] !== s.secretName ||
        R[98] !== s.selectedWorkflows ||
        R[99] !== s.useExistingSecret ||
        R[100] !== k
      )
        ((z = e(Et, {
          currentWorkflowInstallStep: s.currentWorkflowInstallStep,
          secretExists: s.secretExists,
          useExistingSecret: s.useExistingSecret,
          secretName: s.secretName,
          skipWorkflow: k,
          selectedWorkflows: s.selectedWorkflows,
        })),
          (R[95] = s.currentWorkflowInstallStep),
          (R[96] = s.secretExists),
          (R[97] = s.secretName),
          (R[98] = s.selectedWorkflows),
          (R[99] = s.useExistingSecret),
          (R[100] = k),
          (R[101] = z));
      else z = R[101];
      return z;
    }
    case "success": {
      const k = s.workflowAction === "skip";
      let z;
      if (
        R[102] !== s.appOnlyInstall ||
        R[103] !== s.secretExists ||
        R[104] !== s.secretName ||
        R[105] !== s.useExistingSecret ||
        R[106] !== k
      )
        ((z = e(Yt, {
          secretExists: s.secretExists,
          useExistingSecret: s.useExistingSecret,
          secretName: s.secretName,
          skipWorkflow: k,
          appOnlyInstall: s.appOnlyInstall,
        })),
          (R[102] = s.appOnlyInstall),
          (R[103] = s.secretExists),
          (R[104] = s.secretName),
          (R[105] = s.useExistingSecret),
          (R[106] = k),
          (R[107] = z));
      else z = R[107];
      let Ia;
      if (R[108] !== Ue || R[109] !== z)
        ((Ia = e(o, {
          tabIndex: 0,
          autoFocus: !0,
          onKeyDown: Ue,
          children: z,
        })),
          (R[108] = Ue),
          (R[109] = z),
          (R[110] = Ia));
      else Ia = R[110];
      return Ia;
    }
    case "error": {
      let k;
      if (
        R[111] !== s.error ||
        R[112] !== s.errorInstructions ||
        R[113] !== s.errorReason
      )
        ((k = e(Ht, {
          error: s.error,
          errorReason: s.errorReason,
          errorInstructions: s.errorInstructions,
        })),
          (R[111] = s.error),
          (R[112] = s.errorInstructions),
          (R[113] = s.errorReason),
          (R[114] = k));
      else k = R[114];
      let z;
      if (R[115] !== Ue || R[116] !== k)
        ((z = e(o, { tabIndex: 0, autoFocus: !0, onKeyDown: Ue, children: k })),
          (R[115] = Ue),
          (R[116] = k),
          (R[117] = z));
      else z = R[117];
      return z;
    }
    case "select-workflows": {
      let k;
      if (R[118] !== De || R[119] !== q)
        ((k = (Wm) => {
          if (
            (i("tengu_install_github_app_step_completed", {
              step: S("select-workflows"),
            }),
            I((Dm) => ({ ...Dm, selectedWorkflows: Wm })),
            q)
          )
            De();
          else I(el);
        }),
          (R[118] = De),
          (R[119] = q),
          (R[120] = k));
      else k = R[120];
      let z;
      if (R[121] !== s.selectedWorkflows || R[122] !== k)
        ((z = e(St, { defaultSelections: s.selectedWorkflows, onSubmit: k })),
          (R[121] = s.selectedWorkflows),
          (R[122] = k),
          (R[123] = z));
      else z = R[123];
      return z;
    }
    case "oauth-flow": {
      let k;
      if (R[124] !== Rr)
        ((k = e(Ut, { onSuccess: Rr, onCancel: Pm })),
          (R[124] = Rr),
          (R[125] = k));
      else k = R[125];
      return k;
    }
  }
}
async function tm(g, b) {
  if (ap()) {
    let v = await aye(
      b.session.host,
      "open this session to finish /install-github-app",
      "/install-github-app requested",
      b.storageV5,
    );
    return (
      g(
        v
          ? `Can't run /install-github-app while no terminal is attached to this background session. This session now shows "needs input" in agent view \u2014 open it and run the command again.`
          : "Can't run /install-github-app while no terminal is attached to this background session. Attach to it and run the command again.",
        { display: "system" },
      ),
      null
    );
  }
  let f = await bhe(Q()),
    a = f ? $ke(f) : null,
    c = a ? av(a) : null;
  if (c === "gitlab")
    return (
      g(
        `The Claude GitHub App only works with GitHub repositories, and this repository's git remote is on GitLab. To run Claude Code from GitLab CI/CD instead, see ${ws}. To install the app for a GitHub repository, run /install-github-app from a checkout of that repository.`,
        { display: "system" },
      ),
      null
    );
  if (c === "bitbucket")
    return (
      g(
        "The Claude GitHub App only works with GitHub repositories, and this repository's git remote is on Bitbucket. To install the app for a GitHub repository, run /install-github-app from a checkout of that repository.",
        { display: "system" },
      ),
      null
    );
  return e(Or, { onDone: g });
}
export { Xt as UNATTENDED_BG_DECLINE, tm as call };

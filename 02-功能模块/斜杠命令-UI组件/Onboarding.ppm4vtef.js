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
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Vt } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { we } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Fp } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { cn } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { ex, cl, yZe, vZe, RZe, zg } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
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
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import { Oie, f2e, As } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
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
import { o, t, zb, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { gle, bOt } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
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
import { kG } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
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
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import "../Hooks钩子/chunk-22aft7vr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import { k0t } from "../../01-核心基础设施/共享小工具-未细化/chunk-4q59mpqf.js";
import "../Grove-隐私设置/chunk-a4mdm49v.js";
import "../Artifact发布-渲染/chunk-y8j05azr.js";
import "../认证-OAuth登录/chunk-9g86t9bp.js";
import "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import "../策略限制(PolicyLimits)/chunk-hpw6352m.js";
import "../../01-核心基础设施/设置-配置/chunk-1pbaa558.js";
import "../上下文压缩-Compact/chunk-npckj9cm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1phhhgcj.js";
import "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../Bedrock-Vertex/chunk-g6sqdw6w.js";
import { V8 } from "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import { KZ } from "../状态栏-主题/chunk-rhjpq9s2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vwjqzjhr.js";
import { Gp } from "../../01-核心基础设施/共享小工具-未细化/chunk-c8g7bday.js";
import "../认证-OAuth登录/chunk-dtt2nn79.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import { zB } from "../../03-入口与运行时/CLI入口-Commander/chunk-nhpr06js.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { ew, Qt, L_, De, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
F();
function be() {
  (Fp("preflight_endpoint"), process.exit(1));
}
var ce = 1e4;
async function ae() {
  try {
    await f2e();
    let s = Vt(),
      c = new URL(s.TOKEN_URL),
      g = [`${s.BASE_API_URL}/api/hello`, `${c.origin}/v1/oauth/hello`],
      R = async (u) => {
        let S = new URL(u).hostname,
          b = As({ url: u }),
          T = b.proxy !== void 0;
        try {
          let n = await fetch(u, {
            headers: { "User-Agent": ex() },
            signal: AbortSignal.timeout(ce),
            ...b,
          });
          if ((n.body?.cancel().catch(() => {}), n.status !== 200))
            return {
              success: !1,
              error: `Failed to connect to ${S}: Status ${n.status}`,
              usedProxy: T,
            };
          return { success: !0 };
        } catch (n) {
          if (n instanceof Error && n.name === "TimeoutError")
            return {
              success: !1,
              error: `Connection to ${S} timed out after ${ce / 1000} seconds`,
              usedProxy: T,
            };
          let Y = kG(n);
          return {
            success: !1,
            error: `Failed to connect to ${S}: ${n instanceof Error ? n.code || n.message : String(n)}`,
            sslHint: Y ?? void 0,
            usedProxy: T,
          };
        }
      },
      x = (await Promise.all(g.map(R))).find((u) => !u.success);
    if (x)
      i("tengu_preflight_check_failed", {
        isConnectivityError: !1,
        hasErrorMessage: !!x.error,
        isSSLError: !!x.sslHint,
      });
    return x || { success: !0 };
  } catch (s) {
    return (
      h(s),
      i("tengu_preflight_check_failed", { isConnectivityError: !0 }),
      {
        success: !1,
        error: `Connectivity check error: ${s instanceof Error ? s.code || s.message : String(s)}`,
      }
    );
  }
}
function z(Ge) {
  let B = _(14),
    { onSuccess: w } = Ge,
    [l, Ve] = d(null),
    [I, Xe] = d(!0),
    ye = Oie()?.source,
    ie = Un(1000) && I,
    Se,
    Ce;
  if (B[0] === p)
    ((Se = () => {
      let se = async function se() {
        let qe = await ae();
        (Ve(qe), Xe(!1));
      };
      se();
    }),
      (Ce = []),
      (B[0] = Se),
      (B[1] = Ce));
  else ((Se = B[0]), (Ce = B[1]));
  E(Se, Ce);
  let ke;
  if (B[2] !== w || B[3] !== l?.success)
    ((ke = () => {
      if (l?.success) w();
    }),
      (B[2] = w),
      (B[3] = l?.success),
      (B[4] = ke));
  else ke = B[4];
  let Re;
  if (B[5] !== w || B[6] !== l)
    ((Re = [l, w]), (B[5] = w), (B[6] = l), (B[7] = Re));
  else Re = B[7];
  (E(ke, Re), Un(be, l && !l.success ? 100 : null));
  let q;
  if (B[8] !== I || B[9] !== l || B[10] !== ie)
    ((q =
      I && ie
        ? r(o, {
            paddingLeft: 1,
            children: [
              e(yo, {}),
              e(t, { children: "Checking connectivity..." }),
            ],
          })
        : !l?.success &&
          !I &&
          r(o, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(t, {
                color: "error",
                children: "Unable to connect to Anthropic services",
              }),
              e(t, { color: "error", children: l?.error }),
              l?.sslHint
                ? r(o, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      e(t, { children: l.sslHint }),
                      e(t, {
                        color: "suggestion",
                        children:
                          "See https://code.claude.com/docs/en/network-config",
                      }),
                    ],
                  })
                : r(o, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      ye && l?.usedProxy
                        ? r(t, {
                            children: [
                              "A proxy is configured via ",
                              ye,
                              ". Check that it allows connections to the host above.",
                              " ",
                              e(t, {
                                color: "suggestion",
                                children:
                                  "See https://code.claude.com/docs/en/network-config",
                              }),
                            ],
                          })
                        : null,
                      e(t, {
                        children:
                          "Please check your internet connection and network settings.",
                      }),
                      r(t, {
                        children: [
                          "Note: Claude Code might not be available in your country. Check supported countries at",
                          " ",
                          e(t, {
                            color: "suggestion",
                            children:
                              "https://anthropic.com/supported-countries",
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          })),
      (B[8] = I),
      (B[9] = l),
      (B[10] = ie),
      (B[11] = q));
  else q = B[11];
  let Pe;
  if (B[12] !== q)
    ((Pe = e(o, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      children: q,
    })),
      (B[12] = q),
      (B[13] = Pe));
  else Pe = B[13];
  return Pe;
}
function J() {
  let tt = _(1),
    Te;
  if (tt[0] === p)
    ((Te = r(t, {
      color: "permission",
      children: [
        "Press ",
        e(t, { bold: !0, children: "Enter" }),
        " to continue\u2026",
      ],
    })),
      (tt[0] = Te));
  else Te = tt[0];
  return Te;
}
F();
F();
F();
var L = Qt({ marker: "" });
function P(at) {
  let le = _(7),
    { children: pe } = at,
    { marker: me } = De(L),
    Q;
  if (le[0] !== me)
    ((Q = e(t, { dimColor: !0, children: me })), (le[0] = me), (le[1] = Q));
  else Q = le[1];
  let Z;
  if (le[2] !== pe)
    ((Z = e(o, { flexDirection: "column", children: pe })),
      (le[2] = pe),
      (le[3] = Z));
  else Z = le[3];
  let ve;
  if (le[4] !== Q || le[5] !== Z)
    ((ve = r(o, { gap: 1, children: [Q, Z] })),
      (le[4] = Q),
      (le[5] = Z),
      (le[6] = ve));
  else ve = le[6];
  return ve;
}
var M = Qt({ marker: "" });
function oe(gt) {
  let de = _(9),
    { children: j } = gt,
    { marker: H } = De(M),
    Ee = 0;
  for (const Oe of ew.toArray(j)) {
    if (!L_(Oe) || Oe.type !== P) {
      continue;
    }
    Ee++;
  }
  let U = String(Ee).length,
    ee;
  if (de[0] !== j || de[1] !== U || de[2] !== H) {
    let K;
    if (de[4] !== U || de[5] !== H)
      ((K = (te, xt) => {
        if (!L_(te) || te.type !== P) {
          return te;
        }
        let yt = `${String(xt + 1).padStart(U)}.`;
        let Le = `${H}${yt}`;
        return e(M.Provider, {
          value: { marker: Le },
          children: e(L.Provider, { value: { marker: Le }, children: te }),
        });
      }),
        (de[4] = U),
        (de[5] = H),
        (de[6] = K));
    else K = de[6];
    ee = ew.map(j, K);
    ((de[0] = j), (de[1] = U), (de[2] = H), (de[3] = ee));
  } else ee = de[3];
  let K;
  if (de[7] !== ee)
    ((K = e(o, { flexDirection: "column", children: ee })),
      (de[7] = ee),
      (de[8] = K));
  else K = de[8];
  return K;
}
oe.Item = P;
var W = oe;
function Yt({ host: s, onDone: c }) {
  let [g, R] = d(0),
    [m] = d(() => cl()),
    [x] = d(() => vZe() || RZe()),
    u = C(!1),
    [S, b] = cn(),
    { storageV5: T } = _e();
  E(() => {
    i("tengu_began_setup", { oauthEnabled: m });
  }, [m]);
  function n(v = 1) {
    let O = g + v;
    if (O < k.length) {
      R(O);
      for (let X = g + 1; X <= O; X++)
        (i("tengu_onboarding_step", { oauthEnabled: m, stepId: we(k[X]?.id) }),
          y("onboarding_step_complete"));
    } else {
      if (u.current) return;
      ((u.current = !0), y("onboarding_complete"), c());
    }
  }
  function Y(v) {
    (b(v), n());
  }
  let A = is(),
    fe = e(o, {
      marginX: 1,
      children: e(KZ, {
        onThemeSelect: Y,
        showIntroText: !0,
        helpText: "To change this later, run /theme",
        hideEscToCancel: !0,
        skipExitHandling: !0,
      }),
    }),
    he = r(o, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      children: [
        e(t, { bold: !0, children: "Security notes:" }),
        e(o, {
          flexDirection: "column",
          width: 70,
          children: r(W, {
            children: [
              r(W.Item, {
                children: [
                  e(t, { children: "Claude can make mistakes." }),
                  r(t, {
                    dimColor: !0,
                    wrap: "wrap",
                    children: [
                      "You're responsible for Claude's actions and should always",
                      e(zb, {}),
                      "review them, especially when running code.",
                      e(zb, {}),
                    ],
                  }),
                ],
              }),
              r(W.Item, {
                children: [
                  e(t, {
                    children:
                      "Due to prompt injection risks, only use it with code you trust",
                  }),
                  e(Gp, { url: "https://code.claude.com/docs/en/security" }),
                ],
              }),
            ],
          }),
        }),
        e(J, {}),
      ],
    }),
    ge = e(z, { onSuccess: n }),
    re = V(yZe, []);
  function xe(v) {
    let O = v && k[g + 1]?.id === "oauth";
    n(O ? 2 : 1);
  }
  let k = [];
  if (m && !x) k.push({ id: "preflight", component: ge });
  if ((k.push({ id: "theme", component: fe }), re))
    k.push({
      id: "api-key",
      component: e(k0t, { customApiKeyTruncated: re, onDone: xe }),
    });
  if (m)
    k.push({
      id: "oauth",
      component: e(o, {
        flexDirection: "column",
        gap: 1,
        paddingLeft: 1,
        children: e(V8, { onDone: n, urlOutdent: 1 }),
      }),
    });
  if ((k.push({ id: "security", component: he }), gle()))
    k.push({
      id: "terminal-setup",
      component: r(o, {
        flexDirection: "column",
        gap: 1,
        paddingLeft: 1,
        children: [
          e(t, { bold: !0, children: "Use Claude Code's terminal setup?" }),
          r(o, {
            flexDirection: "column",
            width: 70,
            gap: 1,
            children: [
              r(t, {
                children: [
                  "For the optimal coding experience, enable the recommended settings",
                  e(zb, {}),
                  "for your terminal:",
                  " ",
                  a.terminal === "Apple_Terminal"
                    ? zg()
                      ? "Option+Enter for newlines"
                      : "Option+Enter for newlines and no audible bell"
                    : "Shift+Enter for newlines",
                ],
              }),
              e(En, {
                confirmLabel: "Yes, use recommended settings",
                cancelLabel: "No, maybe later with /terminal-setup",
                onConfirm: () =>
                  void bOt(s, S, T)
                    .then(() => y("onboarding_terminal_setup"))
                    .catch(() =>
                      f(
                        "onboarding_terminal_setup",
                        "onboarding_terminal_setup_failed",
                      ),
                    )
                    .finally(n),
                onCancel: n,
              }),
              e(t, {
                dimColor: !0,
                children: A.pending
                  ? r(N, { children: ["Press ", A.keyName, " again to exit"] })
                  : r(ue, {
                      children: [
                        e(D, { chord: "enter", action: "confirm" }),
                        e(D, { chord: "escape", action: "skip" }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
    });
  let G = k[g];
  function ne() {
    n();
  }
  return (
    Ze(
      { "confirm:yes": ne },
      { context: "Confirmation", isActive: G?.id === "security" },
    ),
    Ze(
      { "confirm:no": ne },
      { context: "Confirmation", isActive: G?.id === "terminal-setup" },
    ),
    r(o, {
      flexDirection: "column",
      children: [
        e(zB, {}),
        r(o, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            G?.component,
            A.pending &&
              e(o, {
                padding: 1,
                children: r(t, {
                  dimColor: !0,
                  children: ["Press ", A.keyName, " again to exit"],
                }),
              }),
          ],
        }),
      ],
    })
  );
}
export { Yt as Onboarding };

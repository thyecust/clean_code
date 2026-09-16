// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Tn } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { qP } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { uo, Hr } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { qr } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { To } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../02-功能模块/Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../../02-功能模块/工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../02-功能模块/权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../02-功能模块/Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../02-功能模块/认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../02-功能模块/认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../../02-功能模块/Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../02-功能模块/Hooks钩子/chunk-9em0d4k5.js";
import { Mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { B8e } from "../../02-功能模块/权限系统/chunk-8rrcddth.js";
import { _X, tY, hl } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../../02-功能模块/文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";
import "../../02-功能模块/状态栏-主题/chunk-q7ekqy5h.js";
import "../../02-功能模块/上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../02-功能模块/认证-OAuth登录/chunk-s51acx6w.js";
import "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
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
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { $i } from "../../02-功能模块/Teammates团队/chunk-t899nada.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../../02-功能模块/Teammates团队/chunk-thxapyam.js";
import "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../02-功能模块/MCP客户端/chunk-3kmsshb6.js";
import "../../02-功能模块/插件系统/chunk-7s6mt1vg.js";
import "../../02-功能模块/图表-Mermaid/chunk-743atbtj.js";
import "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import "../核心应用-Agent循环/chunk-h3cty6gp.js";
import "../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-x3txegas.js";
import "../../02-功能模块/工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../../02-功能模块/Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../02-功能模块/Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../02-功能模块/Teammates团队/chunk-g6nvp9mm.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../../02-功能模块/Hooks钩子/chunk-z3433nr6.js";
import "../../02-功能模块/Hooks钩子/chunk-bzqqe6xh.js";
import "../../02-功能模块/插件系统/chunk-ajtn749s.js";
import "../../02-功能模块/插件系统/chunk-hh8f1qrw.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-djserjj5.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../02-功能模块/认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../02-功能模块/Skills技能/chunk-1zy5c8mf.js";
import "../../02-功能模块/Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../../02-功能模块/Cron-定时任务/chunk-mk3zm4ew.js";
import "../../02-功能模块/工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../02-功能模块/Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../02-功能模块/ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../../02-功能模块/权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../02-功能模块/会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../../02-功能模块/语音-音频/chunk-cfhndstm.js";
import "../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-jfk5mpe1.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-xmxjyg29.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-5jv5fvbn.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-gnmy62vg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yrv8wzwe.js";
import "../../02-功能模块/语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../../02-功能模块/策略限制(PolicyLimits)/chunk-hpw6352m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kyy28ene.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q8r1ycrr.js";
import "../../02-功能模块/AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../02-功能模块/键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../../02-功能模块/键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "./chunk-fgcep5na.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dhg3raay.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-rh0xpf1w.js";
import "../../02-功能模块/MCP客户端/chunk-xcbagjx9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pbd0pf42.js";
import "../../02-功能模块/会话-历史-恢复/chunk-ybcvb652.js";
import "../../02-功能模块/Workflow编排/chunk-va9cgbfs.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-5gz5xvw9.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-c7mzes79.js";
import { F0t, uHe, Uae } from "./会话UI(REPL).qs63rzfp.js";
import { git, mWe, fZt, ZIt } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../Headless-SDK模式/chunk-9r4nh249.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-azh5vchz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-awxpn5er.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d3d1v4d6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-nhnqmzyt.js";
import "../../02-功能模块/Teammates团队/chunk-2j84y871.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tkfrb8jm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../02-功能模块/Workflow编排/chunk-hdhsmge4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../../02-功能模块/插件系统/chunk-33bdfgmx.js";
import "../../02-功能模块/MCP客户端/chunk-0mwqsv0r.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../../02-功能模块/DesignSync/chunk-5kyac4wk.js";
import "../../02-功能模块/MCP客户端/chunk-tznd4407.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k1vb7vky.js";
import "../../02-功能模块/工具Monitor/chunk-kxk3njnj.js";
import { Ci } from "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "../../02-功能模块/Teammates团队/chunk-eey53z5b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import { Vr } from "../../01-核心基础设施/共享小工具-未细化/chunk-9mfwkyac.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-px58ry6q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
import "../../02-功能模块/工具ToolSearch/chunk-1m51pqtd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../../02-功能模块/权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../../02-功能模块/Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-6kdvf977.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function ee($e) {
  return $e.sessionEffort;
}
function oe(be) {
  return be.toolPermissionContext.additionalWorkingDirectories;
}
function se(xe) {
  return xe.toolPermissionContext.alwaysAllowRules;
}
function re(Be) {
  return Be.toolPermissionContext.alwaysDenyRules;
}
var Ne = async (r, n, g) => {
  if (Ci()) return (r(F0t, { display: "system" }), null);
  if (hl())
    return (
      r(
        "Can't fork: session persistence is off, so the new session would have nothing to start from. Run the task here, or fork from a session that saves its transcript.",
      ),
      null
    );
  if (Hr() || uo() || qP())
    return (
      r(
        `Can't fork: this session was started with launch flags (safe or bare mode, ${B8e}) that the copy wouldn't inherit, so it would run with fewer restrictions than this session. Run the task here, or start a session without those flags and fork from there.`,
      ),
      null
    );
  let a = (g ?? "").trim(),
    m = Uae(n.messages, a, "(forked)");
  if (m === null)
    return (r("Nothing to fork yet. Send a message first."), null);
  return e(W, { onDone: r, prompt: a, seed: m, messages: n.messages });
};
function W(Pe) {
  let G = _(14),
    { onDone: d, prompt: c, seed: w, messages: k } = Pe,
    R = U(ee),
    v = U(_X),
    I = U(tY),
    T = U(oe),
    S = U(se),
    L = U(re),
    { storageV5: M } = _e(),
    q = C(!1),
    H,
    V;
  if (
    G[0] !== T ||
    G[1] !== S ||
    G[2] !== L ||
    G[3] !== k ||
    G[4] !== d ||
    G[5] !== v ||
    G[6] !== I ||
    G[7] !== c ||
    G[8] !== w ||
    G[9] !== R ||
    G[10] !== M
  )
    ((H = () => {
      if (q.current) {
        return;
      }
      ((q.current = !0),
        (async () => {
          let s = await uHe(w, c || null, R, v, T, S, L, "fork_session", k, {
            proactivityLevel: I,
            keepParent: !0,
            taskFreeInFlight: { tasks: 0, queued: 0, kinds: [] },
            storageV5: M,
          });
          if (!s.ok) {
            (f("repl_session_fork", s.reason ?? "spawn_failed"), d(s.error));
            return;
          }
          (y("repl_session_fork"),
            i("tengu_session_fork", {
              had_prompt: c.length > 0,
              message_count: k.length,
              had_worktree: s.hadWorktree,
              relocated: s.relocatedTo !== void 0,
              ...(s.relocatedFrom && { relocated_from: u(s.relocatedFrom) }),
              ...(s.sessionId && { child_session_hash: Tn(s.sessionId) }),
            }));
          let De = s.name ? fZt(qr(To(s.name))) : void 0;
          let Ee = c ? git : mWe;
          let z = s.relocatedTo
            ? "runs in the origin tree"
            : s.editsIn === "this-tree"
              ? "edits this checkout"
              : void 0;
          let Xe = ZIt({
            state: Ee,
            name: De,
            id: s.short,
            chips: z ? [z] : [],
          });
          let Q = Mo()
            ? `The fork runs as its own separate session \u2014 nothing it does arrives in this conversation, and it does not see what happens here after the fork point. If you need to coordinate with it, it appears in the ${$i} listing as '${qr(To(s.rosterName))}' (it may be renamed later) and ${Vr} can message it there; it can message this session the same way.`
            : void 0;
          d(Xe, {
            display: "system",
            ...(Q !== void 0 && { metaMessages: [Q] }),
          });
        })().catch((Y) => {
          (h(Y),
            f("repl_session_fork", "unexpected_error"),
            d(
              `Couldn't fork: ${l(Y)}. This session is unaffected; try again.`,
            ));
        }));
    }),
      (V = [T, S, L, R, k, d, v, I, c, w, M]),
      (G[0] = T),
      (G[1] = S),
      (G[2] = L),
      (G[3] = k),
      (G[4] = d),
      (G[5] = v),
      (G[6] = I),
      (G[7] = c),
      (G[8] = w),
      (G[9] = R),
      (G[10] = M),
      (G[11] = H),
      (G[12] = V));
  else ((H = G[11]), (V = G[12]));
  E(H, V);
  let Z;
  if (G[13] === p)
    ((Z = e(t, { dimColor: !0, children: "Forking\u2026" })), (G[13] = Z));
  else Z = G[13];
  return Z;
}
export { Ne as call };

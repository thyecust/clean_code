// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { pv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { GQe, yq } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { tr, Da, U7t, Tnt, vhe } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
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
import { at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
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
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { y3, _ht, PVn, y6t, Ht, mj } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
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
import { fg } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { Yi } from "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import { wa } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import { uh } from "../Bridge-RemoteControl/chunk-tyce0p0b.js";
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
import { W$e } from "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import { m_, wC, Ype } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
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
import { tye } from "../Bridge-RemoteControl/chunk-m1vpawx6.js";
import "../后台任务-Shell管理/chunk-c7mzes79.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import "../MCP客户端/chunk-g4gdwpa0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vz37aa8z.js";
import "../Workflow编排/chunk-va9cgbfs.js";
import "../Artifact发布-渲染/chunk-5gz5xvw9.js";
import "../MCP客户端/chunk-xcbagjx9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q8r1ycrr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s1hpfa12.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cj5z5g82.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-cq8x5zt4.js";
import "../Grove-隐私设置/chunk-a4mdm49v.js";
import "../Artifact发布-渲染/chunk-y8j05azr.js";
import "../认证-OAuth登录/chunk-9g86t9bp.js";
import { jlt, Wlt, Tee } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import "../策略限制(PolicyLimits)/chunk-hpw6352m.js";
import "../../01-核心基础设施/设置-配置/chunk-1pbaa558.js";
import "../上下文压缩-Compact/chunk-npckj9cm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1phhhgcj.js";
import "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../Bedrock-Vertex/chunk-g6sqdw6w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "./chunk-eq05pssv.js";
import { YB } from "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ps79w9dv.js";
import { nWe } from "../../01-核心基础设施/共享小工具-未细化/chunk-vm6pzj28.js";
import { oWe } from "../../01-核心基础设施/共享小工具-未细化/chunk-0dk7tzf3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../认证-OAuth登录/chunk-dtt2nn79.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { ci } from "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
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
import "../权限系统/chunk-2ttypdwq.js";
import "../后台任务-Shell管理/chunk-nhnqmzyt.js";
import "../Teammates团队/chunk-2j84y871.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tkfrb8jm.js";
import "../插件系统/chunk-5ztq0v89.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../MCP客户端/chunk-k2gczbnj.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../Workflow编排/chunk-hdhsmge4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
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
F();
async function U(s) {
  let {
      sessionId: a,
      baseUrl: c,
      accessToken: h,
      environmentId: m,
      trustedDeviceToken: _,
      outcomeBranch: T,
      timeoutMs: R = 15000,
    } = s,
    w = `${c}/v1/code/sessions/${a}/move-to-cloud`,
    v = W$e(h);
  if (_) v["X-Trusted-Device-Token"] = _;
  let p;
  try {
    p = await at.post(
      w,
      { environment_id: m, ...(T && { outcome_branch: T }) },
      { headers: v, timeout: R, validateStatus: (b) => b < 600 },
    );
  } catch (b) {
    let I =
        b !== null && typeof b === "object" && "code" in b
          ? String(b.code)
          : "",
      B = I === "ENOTFOUND" || I === "ECONNREFUSED";
    return {
      ok: !1,
      message: `Couldn't reach the server \u2014 ${l(b)}${B ? "" : ". The move may still have gone through \u2014 check the session in the web UI."}`,
      mayHaveCommitted: !B,
    };
  }
  if (p.status === 200 || p.status === 201) {
    let b = G(p.data),
      I = b?.environment_kind ?? "cloud",
      B = b?.environment_id ?? m;
    return (
      n(`[code-session] move-to-cloud ${a} \u2192 ${I} (env ${B})`),
      { ok: !0, environmentKind: I, environmentId: B, sessionId: a }
    );
  }
  let k = fg(p.data) ?? "";
  if (
    (n(
      `[code-session] move-to-cloud ${a} failed ${p.status}${k ? `: ${k}` : ""}`,
    ),
    p.status >= 500)
  )
    return {
      ok: !1,
      message: `The server responded with ${p.status}. The move may still have gone through \u2014 check the session in the web UI.`,
      mayHaveCommitted: !0,
    };
  if (p.status === 400 && /not a bridge session/i.test(k))
    return {
      ok: !1,
      message:
        "This session is already on cloud \u2014 refresh the web UI to see it.",
      mayHaveCommitted: !0,
    };
  return {
    ok: !1,
    message:
      (k && !/^the request was invalid\.?$/i.test(k) ? k : "") ||
      `The server couldn\u2019t move this session (HTTP ${p.status}). Run with --debug to see the raw response.`,
    mayHaveCommitted: !1,
  };
}
function G(s) {
  if (
    s === null ||
    typeof s !== "object" ||
    !("session" in s) ||
    s.session === null ||
    typeof s.session !== "object"
  )
    return;
  let a = s.session;
  return {
    environment_kind:
      typeof a.environment_kind === "string" ? a.environment_kind : void 0,
    environment_id:
      typeof a.environment_id === "string" ? a.environment_id : void 0,
  };
}
async function K(s) {
  if (!tr(Q())) return { kind: "no-git" };
  let [a, c, h, m] = await Promise.all([
    Da(),
    vhe({ ignoreUntracked: !0 }),
    Tnt(),
    U7t(),
  ]);
  if (!c) return { kind: "dirty", branch: a };
  if (h || !m) return { kind: "unpushed", branch: a };
  return { kind: "ready", outcomeBranch: `claude/teleport-${s.slice(-8)}` };
}
async function P(s) {
  if (pv())
    return (
      f("teleport_to_cloud", "restricted_session"),
      { kind: "precondition", message: y6t }
    );
  let a = X(Yi()),
    c = a?.bridgeSessionId;
  if (!a || !c)
    return (
      f("teleport_to_cloud", "no_bridge"),
      {
        kind: "precondition",
        message:
          "This session isn\u2019t connected to Remote Control. Run /remote-control first, then try again.",
      }
    );
  let h = M() && s.credentials !== void 0 ? await wC(s.credentials) : m_();
  if (!h)
    return (
      f("teleport_to_cloud", "no_auth"),
      {
        kind: "precondition",
        message:
          "Not signed in to claude.ai. Run /login with your claude.ai account and try again.",
      }
    );
  let m = await K(c);
  switch (m.kind) {
    case "no-git":
      return (
        f("teleport_to_cloud", "no_git"),
        {
          kind: "precondition",
          message: `${Q()} isn\u2019t a git repository. The cloud session clones your repo from its remote, so there\u2019s nothing for it to check out here \u2014 try again from inside a git repo that has a remote.`,
        }
      );
    case "dirty":
      return (
        f("teleport_to_cloud", "git_dirty"),
        {
          kind: "precondition",
          message: `You have uncommitted changes on ${m.branch || "this branch"}. The cloud session clones from the remote, so local edits won\u2019t be visible there. Commit and push them, or stash them if they shouldn\u2019t go to the cloud. Then try again.`,
        }
      );
    case "unpushed":
      return (
        f("teleport_to_cloud", "git_unpushed"),
        {
          kind: "precondition",
          message: `${m.branch || "This branch"} has commits that haven\u2019t been pushed. The cloud session clones from the remote, so it won\u2019t have them. Push, then try again.`,
        }
      );
    case "ready":
      break;
    default:
      return m;
  }
  let _ = m.outcomeBranch,
    T;
  try {
    T = await oWe(s.storageV5, s.credentials);
  } catch (p) {
    return (
      f("teleport_to_cloud", "env_lookup_failed"),
      {
        kind: "precondition",
        message: `Couldn\u2019t look up cloud environments \u2014 ${l(p)}`,
      }
    );
  }
  let R = (p) => p.kind !== "bridge" && !y3(p),
    w =
      T.selectedTarget && R(T.selectedTarget)
        ? T.selectedTarget
        : T.availableTargets.find(R);
  if (!w || y3(w)) {
    if (T.environmentsError)
      return (
        f("teleport_to_cloud", "env_lookup_failed"),
        {
          kind: "precondition",
          message: `Couldn\u2019t look up cloud environments \u2014 ${T.environmentsError}`,
        }
      );
    return (
      f("teleport_to_cloud", "no_environment"),
      {
        kind: "precondition",
        message:
          "No cloud environment available. Create one from the web UI (or run /web-setup), then try again." +
          (y3(T.selectedTarget)
            ? " Your default target is a self-hosted environment \u2014 continuing in the cloud needs a managed environment."
            : ""),
      }
    );
  }
  (i("tengu_teleport_to_cloud", { action: S("start") }),
    _ht(c),
    s.beforeMove?.(),
    await a.settleUploadsBeforeHandoff?.());
  let v = await U({
    sessionId: c,
    baseUrl: Ype(),
    accessToken: h,
    environmentId: w.environment_id,
    trustedDeviceToken: await uh(),
    outcomeBranch: _,
  });
  if (!v.ok) {
    if (v.mayHaveCommitted) g("teleport_to_cloud", "maybe_committed");
    else (f("teleport_to_cloud", "request_failed"), PVn(c));
    return (
      i("tengu_teleport_to_cloud", {
        action: S(v.mayHaveCommitted ? "maybe_committed" : "failed"),
      }),
      { kind: "server-error", failure: v, sessionId: c }
    );
  }
  return (
    y("teleport_to_cloud"),
    i("tengu_teleport_to_cloud", {
      action: S("success"),
      environment_kind: GQe(v.environmentKind)
        ? u(v.environmentKind)
        : S(v.environmentKind === "cloud" ? "cloud" : "other"),
    }),
    {
      kind: "ok",
      success: v,
      sessionUrl: wa(c, a.sessionIngressUrl, { from: "cli" }),
    }
  );
}
function A(s) {
  return yq() ? { kind: "reconnect", oldSessionId: s } : { kind: "disconnect" };
}
var x =
  "/remote-control is no longer active. Run /remote-control to start a new session.";
function O(s, a) {
  let c = `Session now in the cloud: ${s}`;
  switch (a.kind) {
    case "disconnected":
      return `${c}
${x}`;
    case "reconnected":
      return `${c}
New /remote-control session is active \xB7 Continue here, on your phone, or at ${a.newUrl}`;
    case "reconnect-pending":
      return `${c}
Starting a new /remote-control session \u2014 it\u2019ll appear in the footer shortly.`;
  }
}
function X(s) {
  return s && !s.outboundOnly ? s : null;
}
var J = 1e4,
  W = 100,
  L = 250;
function H(s, a = !1) {
  s.setAppState((c) => {
    if (!c.replBridgeEnabled) return c;
    return {
      ...c,
      replBridgeSkipNextArchive: !0,
      replBridgeEnabled: !1,
      replBridgeExplicit: !1,
      replBridgeOutboundOnly: !1,
      ...(a && { replBridgeSessionGroupingId: void 0 }),
    };
  });
}
function q(s) {
  s.setAppState((a) => {
    if (a.replBridgeEnabled) return a;
    return { ...a, replBridgeEnabled: !0 };
  });
}
async function Y(s, a, c = J) {
  let h = Date.now() + c;
  while (Date.now() < h) {
    if (a.aborted) return null;
    let m = Yi()?.bridgeSessionId;
    if (m && m !== s) return m;
    await Z(W, a);
  }
  return null;
}
async function V(s) {
  let a = !1,
    c;
  try {
    c = await P({
      beforeMove: () => {
        if (((a = Wlt("cloud_handoff")), a))
          s.setMessages((h) => [...h, Ht(jlt.cloud_handoff, "warning")]);
      },
      credentials: s.credentials,
      storageV5: s.storageV5,
    });
  } finally {
    Tee();
  }
  switch (c.kind) {
    case "precondition":
      return c.message;
    case "server-error": {
      if (c.failure.mayHaveCommitted)
        return (
          _ht(c.sessionId),
          mj(void 0, void 0, void 0, s.storageV5),
          setTimeout(H, L, s, !0),
          YB(
            `Couldn\u2019t teleport: ${c.failure.message}
${x}`,
            a,
          )
        );
      return YB(`Couldn\u2019t teleport: ${c.failure.message}`, a);
    }
    case "ok": {
      (_ht(c.success.sessionId), mj(void 0, void 0, void 0, s.storageV5));
      let h = c.sessionUrl,
        m = A(c.success.sessionId);
      if (m.kind === "disconnect")
        return (setTimeout(H, L, s, !0), O(h, { kind: "disconnected" }));
      (H(s), await Z(0), q(s));
      let _ = await Y(m.oldSessionId, s.abortController.signal);
      return O(
        h,
        _
          ? { kind: "reconnected", newUrl: wa(_, void 0, { from: "cli" }) }
          : { kind: "reconnect-pending" },
      );
    }
  }
}
function j(s) {
  i("tengu_teleport_menu", { action: u(s) });
}
function Qe({
  onExit: s,
  context: a,
  exposure: c,
  retireOnSurface: h,
  canSend: m,
}) {
  let [_, T] = d("menu"),
    R = Ye();
  E(() => {
    if (!c.logged) ((c.logged = !0), j(m ? "shown" : "shown_no_bridge"));
  }, [c, m]);
  let w = C(!1),
    v = (k) => {
      if (w.current) return !1;
      return ((w.current = !0), j(k), !0);
    },
    p = () => {
      if (v("cancel")) s("Teleport cancelled", { display: "system" });
    };
  if (_ === "resume")
    return e(tye, {
      onComplete: (k) => {
        (nWe(a, k.log, h, R),
          s("Session resumed successfully", { display: "system" }));
      },
      onCancel: () => s("Teleport cancelled", { display: "system" }),
      onError: (k) => s(k, { display: "system" }),
      isEmbedded: !0,
      source: "localCommand",
    });
  if (_ === "sending")
    return r(o, {
      flexDirection: "column",
      padding: 1,
      children: [
        r(o, {
          flexDirection: "row",
          children: [
            e(yo, {}),
            e(t, { bold: !0, children: "Moving your session\u2026" }),
          ],
        }),
        e(t, {
          dimColor: !0,
          children:
            "Same session, picking up from your branch\u2019s last push.",
        }),
      ],
    });
  return r(o, {
    flexDirection: "column",
    padding: 1,
    children: [
      e(t, { bold: !0, children: "Teleport" }),
      e(o, {
        flexDirection: "column",
        marginTop: 1,
        children: e(ve, {
          options: [
            {
              label: "Continue this session in the cloud",
              value: "send",
              disabled: !m,
              description: m ? void 0 : "Not connected \xB7 /remote-control",
            },
            { label: "Resume a session from cloud", value: "resume" },
          ],
          defaultFocusValue: m ? void 0 : "resume",
          onCancel: p,
          onChange: (k) => {
            if (k === "resume") {
              if (v("resume")) T("resume");
              return;
            }
            if (!v("send")) return;
            (T("sending"), V(a).then((N) => s(N, { display: "system" })));
          },
        }),
      }),
      e(o, {
        marginTop: 1,
        children: e(ci, {
          children: r(ue, {
            children: [
              e(D, { chord: ["up", "down"], action: "navigate" }),
              e(D, { chord: "enter", action: "select" }),
              e(D, { chord: "escape", action: "cancel" }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { Qe as TeleportMenu };

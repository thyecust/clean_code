// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { eI } from "../../00-第三方库/_未识别/第三方库-其他/chunk-x46ksw6d.js";
import { ns } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { S } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { vn, Te } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
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
import { m_, wC } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { T4t } from "./chunk-9estzwf5.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { ndt } from "./chunk-ga43tr2w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "./chunk-5ne99rq3.js";
import { Ive, r5, fAt, V4t } from "./chunk-tyce0p0b.js";
import { vAe, Hre } from "./chunk-ct52ffwb.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
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
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { nl } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { U, It } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { Rs } from "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import { D0e } from "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { R0e } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { Z1 } from "../../01-核心基础设施/共享小工具-未细化/chunk-0k3bh4m8.js";
import "./chunk-3j7ezsr7.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../插件系统/chunk-7s6mt1vg.js";
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
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../Teammates团队/chunk-t899nada.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "./chunk-1yq098a7.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "./chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../../01-核心基础设施/设置-配置/chunk-9m8zsynn.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../工具TodoWrite-Tasks/chunk-5a7p8d2p.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../Hooks钩子/chunk-22aft7vr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ajpjkvdj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import "../MCP客户端/chunk-g4gdwpa0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vz37aa8z.js";
import "../Workflow编排/chunk-va9cgbfs.js";
import "../Artifact发布-渲染/chunk-5gz5xvw9.js";
import "../MCP客户端/chunk-xcbagjx9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q8r1ycrr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s1hpfa12.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cj5z5g82.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hxt46tkz.js";
import "../../01-核心基础设施/设置-配置/chunk-tswdb9jt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-85wxphev.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-22525f7p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8r3h1dwe.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import { N8, Kz } from "./chunk-3b6ct3yp.js";
import { o6e } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { zJt } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../权限系统/chunk-n5mgv42x.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import { ik } from "./chunk-2c3z3wjk.js";
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
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import "./chunk-4zd60pbm.js";
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
function br(Eo) {
  return Eo.replBridgeConnected;
}
function Cr(jo) {
  return jo.replBridgeEnabled;
}
function Rr(ko) {
  return ko.replBridgeOutboundOnly;
}
function Er() {
  let ve = vn();
  return (
    ve && { accountUuid: ve.accountUuid, organizationUuid: ve.organizationUuid }
  );
}
function jr() {
  return ns();
}
function kr(Ue) {
  return Ue.remoteDialogSeen ? Ue : { ...Ue, remoteDialogSeen: !0 };
}
function wr(So) {
  return So.replBridgeSessionUrl;
}
function Ir(Fo) {
  return Fo.replBridgeConnectUrl;
}
function xr(Po) {
  return Po.replBridgeSessionActive;
}
function Or(te) {
  if (!te.replBridgeEnabled && te.replBridgeError === void 0) {
    return te;
  }
  return {
    ...te,
    replBridgeEnabled: !1,
    replBridgeExplicit: !1,
    replBridgeOutboundOnly: !1,
    replBridgeError: void 0,
    replBridgeErrorKind: void 0,
    replBridgeSessionGroupingId: void 0,
    notifications: D0e(te.notifications, ik),
  };
}
function Tr(Lo) {
  return !Lo;
}
function Sr(Do) {
  return (Do + 1) % 3;
}
function Fr(Ao) {
  return (Ao - 1 + 3) % 3;
}
function Pr(No) {
  return No.length > 0;
}
function Lr(Go, vo) {
  return e(t, { children: Go }, vo);
}
var He =
  "Remote Control is already connected \u2014 a session's Project is fixed when it's created. Disconnect first, then re-run /remote-control --project to start a new session in the Project.";
function ze(_o) {
  let K = _(25),
    { onDone: u, name: Y, sessionGroupingId: x, context: g } = _o,
    W = It(),
    Se = U(br),
    Fe = U(Cr),
    Pe = U(Rr),
    [yo, ho] = d(!1),
    [Bo, bo] = d(!1),
    [Le] = d(Er),
    [De] = d(jr),
    Ye;
  if (
    K[0] !== g?.dialogStore ||
    K[1] !== g?.requestDialog ||
    K[2] !== g?.storageV5 ||
    K[3] !== Y ||
    K[4] !== u ||
    K[5] !== x ||
    K[6] !== W
  )
    ((Ye = function P() {
      if ((o6e(g?.storageV5), zJt())) {
        let $e = g?.requestDialog;
        if (!$e) {
          u(
            "Remote Control asks for a one-time confirmation before it's first enabled, and this session can't show it. Run /remote-control from an interactive Claude Code session.",
            { display: "system" },
          );
          return;
        }
        let We = g?.dialogStore;
        if (We && R0e(We.getState(), Z1.kind)) {
          u("", { display: "system" });
          return;
        }
        (W((ae) =>
          ae.replBridgeInitialName === Y && ae.replBridgeSessionGroupingId === x
            ? ae
            : {
                ...ae,
                replBridgeInitialName: Y,
                replBridgeSessionGroupingId: x,
              },
        ),
          u("", { display: "system" }));
        let Co = se(vn());
        $e(Z1, {}, { place: "under" })
          .then((Ke) => {
            let Ae = Ke === "enable" && se(vn()) === Co;
            if (Ke === "enable" && !Ae)
              n(
                "[bridge:repl] Remote Control callout answered under a different account than it was asked for \u2014 not enabling",
              );
            if (Ae)
              (Te(kr, g?.storageV5),
                i("tengu_bridge_command", { action: S("connect") }));
            W((O) => {
              if (Ae) {
                return O.replBridgeEnabled &&
                  O.replBridgeExplicit &&
                  !O.replBridgeOutboundOnly
                  ? O
                  : {
                      ...O,
                      replBridgeEnabled: !0,
                      replBridgeExplicit: !0,
                      replBridgeOutboundOnly: !1,
                    };
              }
              return O.replBridgeInitialName === void 0 &&
                O.replBridgeSessionGroupingId === void 0
                ? O
                : {
                    ...O,
                    replBridgeInitialName: void 0,
                    replBridgeSessionGroupingId: void 0,
                  };
            });
          })
          .catch(h);
        return;
      }
      i("tengu_bridge_command", { action: S("connect") });
      let er = !1;
      if (
        (W((ce) => {
          if (ce.replBridgeEnabled && !ce.replBridgeOutboundOnly) {
            if (x !== void 0) er = !0;
            return ce;
          }
          return {
            ...ce,
            replBridgeEnabled: !0,
            replBridgeExplicit: !0,
            replBridgeOutboundOnly: !1,
            replBridgeInitialName: Y,
            replBridgeSessionGroupingId: x,
          };
        }),
        er)
      ) {
        u(He, { display: "system" });
        return;
      }
      u("", { display: "system" });
    }),
      (K[0] = g?.dialogStore),
      (K[1] = g?.requestDialog),
      (K[2] = g?.storageV5),
      (K[3] = Y),
      (K[4] = u),
      (K[5] = x),
      (K[6] = W),
      (K[7] = Ye));
  else Ye = K[7];
  let P = Ye,
    rr;
  if (
    K[8] !== g?.credentials ||
    K[9] !== P ||
    K[10] !== u ||
    K[11] !== Se ||
    K[12] !== Fe ||
    K[13] !== Pe
  )
    ((rr = () => {
      if ((Se || Fe) && !Pe) {
        ho(!0);
        return;
      }
      let or = !1;
      return (
        (async () => {
          let Ne = await ie(g?.credentials);
          if (or) {
            return;
          }
          if (Ne?.kind === "error") {
            (i("tengu_bridge_command", { action: S("preflight_failed") }),
              u(Ne.message, { display: "system" }));
            return;
          }
          if (Ne?.kind === "unenrolled-trusted-device") {
            (i("tengu_bridge_command", {
              action: S("preflight_login_for_enrollment"),
            }),
              bo(!0));
            return;
          }
          P();
        })(),
        () => {
          or = !0;
        }
      );
    }),
      (K[8] = g?.credentials),
      (K[9] = P),
      (K[10] = u),
      (K[11] = Se),
      (K[12] = Fe),
      (K[13] = Pe),
      (K[14] = rr));
  else rr = K[14];
  let nr;
  if (K[15] === p) ((nr = []), (K[15] = nr));
  else nr = K[15];
  if ((E(rr, nr), yo)) {
    let Z;
    if (K[16] !== u || K[17] !== x)
      ((Z = e(Oe, { onDone: u, sessionGroupingId: x })),
        (K[16] = u),
        (K[17] = x),
        (K[18] = Z));
    else Z = K[18];
    return Z;
  }
  if (Bo) {
    if (!g) {
      return (
        u(
          "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.",
          { display: "system" },
        ),
        null
      );
    }
    let Z;
    if (
      K[19] !== g ||
      K[20] !== P ||
      K[21] !== u ||
      K[22] !== Le ||
      K[23] !== De
    )
      ((Z = e(Kz, {
        startingMessage: "Sign in to enroll this device for Remote Control.",
        onDone: async (tr, _mainLoopModel, Ro) => {
          let me = await N8(g, tr, {
            setAppState: Ro,
            awaitEnrollment: !0,
            previousAccount: Le,
            previousGatewayAuth: De,
          });
          if (me.gatewayLoginError !== void 0 || me.relaunching) {
            u(
              me.gatewayLoginError,
              me.gatewayLoginError !== void 0 ? { display: "system" } : void 0,
            );
            return;
          }
          if (!tr) {
            (i("tengu_bridge_command", {
              action: S("preflight_login_canceled"),
            }),
              u(
                "Sign-in canceled. Run /remote-control after enrolling this device.",
                { display: "system" },
              ));
            return;
          }
          let Ge = await ie(g?.credentials);
          if (Ge?.kind === "error") {
            u(Ge.message, { display: "system" });
            return;
          }
          if (Ge?.kind === "unenrolled-trusted-device") {
            (i("tengu_bridge_command", {
              action: S("preflight_enrollment_did_not_complete"),
            }),
              u(
                "Signed in, but device enrollment didn't complete. Run /remote-control again, or check the debug log for [trusted-device] messages.",
                { display: "system" },
              ));
            return;
          }
          P();
        },
      })),
        (K[19] = g),
        (K[20] = P),
        (K[21] = u),
        (K[22] = Le),
        (K[23] = De),
        (K[24] = Z));
    else Z = K[24];
    return Z;
  }
  return null;
}
function Oe(wo) {
  let c = _(69),
    { onDone: Q, sessionGroupingId: ee } = wo;
  Rs("bridge-disconnect-dialog");
  let Ve = It(),
    Io = U(wr),
    xo = U(Ir),
    Oo = U(xr),
    [G, ir] = d(2),
    [j, To] = d(!1),
    [pe, Je] = d(""),
    T = Oo ? Io : xo,
    sr,
    lr;
  if (c[0] !== T || c[1] !== j)
    ((sr = () => {
      if (!j || !T) {
        Je("");
        return;
      }
      eI(T, { type: "utf8", errorCorrectionLevel: "L", small: !0 })
        .then(Je)
        .catch(() => Je(""));
    }),
      (lr = [j, T]),
      (c[0] = T),
      (c[1] = j),
      (c[2] = sr),
      (c[3] = lr));
  else ((sr = c[2]), (lr = c[3]));
  E(sr, lr);
  let dr;
  if (c[4] !== Q || c[5] !== Ve)
    ((dr = function re() {
      (Ve(Or),
        i("tengu_bridge_command", { action: S("disconnect") }),
        Q(Hre, { display: "system" }));
    }),
      (c[4] = Q),
      (c[5] = Ve),
      (c[6] = dr));
  else dr = c[6];
  let re = dr,
    ar;
  if (c[7] === p)
    ((ar = function Me() {
      To(Tr);
    }),
      (c[7] = ar));
  else ar = c[7];
  let Me = ar,
    cr;
  if (c[8] !== Q)
    ((cr = function L() {
      Q(void 0, { display: "skip" });
    }),
      (c[8] = Q),
      (c[9] = cr));
  else cr = c[9];
  let L = cr,
    ur,
    mr;
  if (c[10] === p)
    ((ur = () => ir(Sr)), (mr = () => ir(Fr)), (c[10] = ur), (c[11] = mr));
  else ((ur = c[10]), (mr = c[11]));
  let pr;
  if (c[12] !== G || c[13] !== L || c[14] !== re)
    ((pr = {
      "select:next": ur,
      "select:previous": mr,
      "select:accept": () => {
        if (G === 0) re();
        else if (G === 1) Me();
        else L();
      },
    }),
      (c[12] = G),
      (c[13] = L),
      (c[14] = re),
      (c[15] = pr));
  else pr = c[15];
  let gr;
  if (c[16] === p) ((gr = { context: "Select" }), (c[16] = gr));
  else gr = c[16];
  Ze(pr, gr);
  let ge, fe, _e, ye, oe, ne, he, Be, be, Ce;
  if (
    c[17] !== T ||
    c[18] !== L ||
    c[19] !== pe ||
    c[20] !== ee ||
    c[21] !== j
  ) {
    let fr = pe
      ? pe
          .split(
            `
`,
          )
          .filter(Pr)
      : [];
    fe = de;
    Be = "Remote Control";
    be = L;
    Ce = !0;
    ge = o;
    _e = "column";
    ye = 1;
    if (c[32] !== ee)
      ((oe =
        ee !== void 0 &&
        e(t, {
          children:
            "A session's Project is fixed when it's created \u2014 disconnect first, then re-run /remote-control --project to start a new one.",
        })),
        (c[32] = ee),
        (c[33] = oe));
    else oe = c[33];
    const v = T ? ` and at ${T}` : " and claude.ai/code";
    if (c[34] !== v)
      ((ne = r(t, {
        children: [
          "This session is available in the Claude mobile app",
          v,
          ".",
        ],
      })),
        (c[34] = v),
        (c[35] = ne));
    else ne = c[35];
    he =
      j &&
      fr.length > 0 &&
      e(o, { flexDirection: "column", children: fr.map(Lr) });
    ((c[17] = T),
      (c[18] = L),
      (c[19] = pe),
      (c[20] = ee),
      (c[21] = j),
      (c[22] = ge),
      (c[23] = fe),
      (c[24] = _e),
      (c[25] = ye),
      (c[26] = oe),
      (c[27] = ne),
      (c[28] = he),
      (c[29] = Be),
      (c[30] = be),
      (c[31] = Ce));
  } else
    ((ge = c[22]),
      (fe = c[23]),
      (_e = c[24]),
      (ye = c[25]),
      (oe = c[26]),
      (ne = c[27]),
      (he = c[28]),
      (Be = c[29]),
      (be = c[30]),
      (Ce = c[31]));
  const v = G === 0;
  let _r;
  if (c[36] === p)
    ((_r = e(t, { children: "Disconnect this session" })), (c[36] = _r));
  else _r = c[36];
  let Re;
  if (c[37] !== v)
    ((Re = e(nl, { isFocused: v, children: _r })), (c[37] = v), (c[38] = Re));
  else Re = c[38];
  const qe = G === 1,
    Xe = j ? "Hide QR code" : "Show QR code";
  let Ee;
  if (c[39] !== j)
    ((Ee =
      !j &&
      e(t, {
        dimColor: !0,
        children: "  Scan with your phone to open this session",
      })),
      (c[39] = j),
      (c[40] = Ee));
  else Ee = c[40];
  let je;
  if (c[41] !== Xe || c[42] !== Ee)
    ((je = r(t, { children: [Xe, Ee] })),
      (c[41] = Xe),
      (c[42] = Ee),
      (c[43] = je));
  else je = c[43];
  let ke;
  if (c[44] !== qe || c[45] !== je)
    ((ke = e(nl, { isFocused: qe, children: je })),
      (c[44] = qe),
      (c[45] = je),
      (c[46] = ke));
  else ke = c[46];
  const Qe = G === 2;
  let yr;
  if (c[47] === p) ((yr = e(t, { children: "Continue" })), (c[47] = yr));
  else yr = c[47];
  let we;
  if (c[48] !== Qe)
    ((we = e(nl, { isFocused: Qe, children: yr })), (c[48] = Qe), (c[49] = we));
  else we = c[49];
  let Ie;
  if (c[50] !== Re || c[51] !== ke || c[52] !== we)
    ((Ie = r(o, { flexDirection: "column", children: [Re, ke, we] })),
      (c[50] = Re),
      (c[51] = ke),
      (c[52] = we),
      (c[53] = Ie));
  else Ie = c[53];
  let hr;
  if (c[54] === p)
    ((hr = e(t, {
      dimColor: !0,
      children: r(ue, {
        children: [
          e(D, { chord: "enter", action: "select" }),
          e(D, { chord: "escape", action: "continue" }),
        ],
      }),
    })),
      (c[54] = hr));
  else hr = c[54];
  let xe;
  if (
    c[55] !== ge ||
    c[56] !== _e ||
    c[57] !== ye ||
    c[58] !== oe ||
    c[59] !== ne ||
    c[60] !== he ||
    c[61] !== Ie
  )
    ((xe = r(ge, {
      flexDirection: _e,
      gap: ye,
      children: [oe, ne, he, Ie, hr],
    })),
      (c[55] = ge),
      (c[56] = _e),
      (c[57] = ye),
      (c[58] = oe),
      (c[59] = ne),
      (c[60] = he),
      (c[61] = Ie),
      (c[62] = xe));
  else xe = c[62];
  let Br;
  if (
    c[63] !== fe ||
    c[64] !== Be ||
    c[65] !== be ||
    c[66] !== Ce ||
    c[67] !== xe
  )
    ((Br = e(fe, {
      title: Be,
      onCancel: be,
      hideInputGuide: Ce,
      children: xe,
    })),
      (c[63] = fe),
      (c[64] = Be),
      (c[65] = be),
      (c[66] = Ce),
      (c[67] = xe),
      (c[68] = Br));
  else Br = c[68];
  return Br;
}
async function ie(l) {
  let C = await T4t();
  if (C) return { kind: "error", message: C };
  let b = await ndt();
  if (b) return { kind: "error", message: b };
  if (!(M() && l !== void 0 ? await wC(l) : m_()))
    return { kind: "error", message: vAe };
  if ((await V4t(l), await fAt())) {
    if (r5()) return { kind: "error", message: Ive };
    return { kind: "unenrolled-trusted-device" };
  }
  return (n("[bridge] Prerequisites passed, enabling bridge"), null);
}
async function go(l, C, b) {
  let f,
    V = b.trim() || void 0;
  return e(ze, { onDone: l, name: V, sessionGroupingId: f, context: C });
}
function se(l) {
  return l && `${l.accountUuid}/${l.organizationUuid || ""}`;
}
export { go as call };

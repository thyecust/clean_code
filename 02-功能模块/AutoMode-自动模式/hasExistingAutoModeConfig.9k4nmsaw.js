// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { fOn, NXt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Ht } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
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
import { ye, OU } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import { pi } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
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
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import { ce } from "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
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
import { OIe, wSe } from "../权限系统/chunk-4wrkmv3h.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { o, t, tn } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Ne, Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
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
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { X8, ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import { Yot, d6e, p6e, f6e } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { PIe } from "./chunk-z0qj8awf.js";
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
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../Git-Worktree/chunk-33y3h2sy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import { Ypt } from "../../01-核心基础设施/共享小工具-未细化/chunk-ca2zxbyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { Dh, Md, L } from "../Teammates团队/chunk-mrfx53ye.js";
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
var Me = "Expected a function";
function be(n, a) {
  var s;
  if (typeof a != "function") throw TypeError(Me);
  return (
    (n = Ypt(n)),
    function () {
      if (--n > 0) s = a.apply(this, arguments);
      if (n <= 1) a = void 0;
      return s;
    }
  );
}
var oe = be;
function _e(n) {
  return oe(2, n);
}
var te = _e;
function ke(n) {
  return (
    typeof n === "object" &&
    n !== null &&
    "type" in n &&
    n.type === "auto_mode_scan"
  );
}
function Z(n) {
  for (let a of Object.values(n.all()))
    if (ke(a) && a.status === "running") return a;
  return;
}
function re(n, a, s) {
  let w = Dh("auto_mode_scan"),
    M = {
      ...Md(w, "auto_mode_scan", "scanning for auto-mode setup"),
      type: "auto_mode_scan",
      status: "running",
      skipTranscript: !0,
      gathersFromGitHubOrg: s,
      abortController: a,
    };
  return (n.register(M), w);
}
function X(n, a, s) {
  let w = !1;
  if (
    (a.update(n, (M) => {
      if (M.status !== "running") return M;
      return (
        (w = !0),
        {
          ...M,
          status: s,
          endTime: Date.now(),
          notified: !0,
          abortController: void 0,
        }
      );
    }),
    w)
  )
    pi(n, s, { skipTranscript: !0, ambient: !0 });
}
F();
function J(n) {
  return {
    environment: n.environment,
    ...(n.allow.length > 0 && { allow: n.allow }),
    ...(n.soft_deny.length > 0 && { soft_deny: n.soft_deny }),
    ...(n.hard_deny.length > 0 && { hard_deny: n.hard_deny }),
  };
}
function K(n, a) {
  return (
    `Saved to ${n.filePath} (${n.autoModeKeysWritten.join(", ")}` +
    (n.environmentEntriesPreserved > 0
      ? `; kept ${n.environmentEntriesPreserved} existing environment ${n.environmentEntriesPreserved === 1 ? "entry" : "entries"}`
      : "") +
    (a.removed > 0
      ? `; removed ${a.removed} permissions.allow ${a.removed === 1 ? "entry" : "entries"}`
      : "") +
    "). Run `claude auto-mode config` to see the effective result." +
    (a.skipped > 0
      ? ` Note: ${a.skipped} ${a.skipped === 1 ? "rule" : "rules"} couldn\u2019t be removed \u2014 permissions.allow isn\u2019t an array in your settings.`
      : "") +
    ((a.notFound ?? 0) > 0
      ? ` Note: ${a.notFound} ${a.notFound === 1 ? "rule was" : "rules were"} already gone from permissions.allow.`
      : "") +
    (n.warnings.length > 0
      ? `
${n.warnings.join(`
`)}`
      : "")
  );
}
function pe(n = !1) {
  return {
    step: n ? "existing" : "confirm",
    hasExisting: n,
    mode: "append",
    posture: "mixed",
    gathersFromGitHubOrg: !1,
    flaggedPicking: !1,
    flaggedSelection: [],
    confirmSelection: ["shell"],
    confirmFocus: 1,
    confirmSrAtPosture: !0,
    shownLogged: !1,
    resolution: "none",
  };
}
var me = "Teach auto mode about your environment?",
  ge =
    "Claude Code reads this project, your recent Claude sessions, and optionally your shell history and other repositories. Claude analyzes this data and customizes auto mode to make better decisions.",
  ee = "How you use Claude here",
  q = [
    { value: "enterprise", label: "Work" },
    { value: "open-source", label: "Open source" },
    { value: "personal", label: "Hobby" },
    { value: "mixed", label: "Mixed" },
  ],
  Q = [
    { value: "shell", label: "Also scan shell history" },
    { value: "repos", label: "Also scan your other repos" },
  ],
  Pe = [
    { value: "shell", label: "Also scan shell history (default)" },
    { value: "repos", label: "Also scan your other repos" },
    { value: "both", label: "Scan both" },
    { value: "here", label: "Neither \u2014 just this project and sessions" },
  ];
function Fe(n) {
  switch (n) {
    case "both":
      return ["shell", "repos"];
    case "shell":
      return ["shell"];
    case "repos":
      return ["repos"];
    case "here":
      return [];
  }
}
function fe({
  state: n,
  propose: a,
  onBackgroundStart: s,
  abort: w,
  write: M,
  writeRemoval: T,
  onDone: k,
  onCancel: v,
}) {
  let [, m] = d(n.step),
    b = n.step,
    I = vt();
  (d(() => ((n.lastAcceptAt = Math.max(I.now(), n.lastAcceptAt ?? 0)), null)),
    E(
      () => (
        (n.notify = () => m(n.step)),
        m(n.step),
        () => {
          n.notify = void 0;
        }
      ),
      [n],
    ),
    E(() => {
      if (!n.shownLogged)
        ((n.shownLogged = !0),
          i("tengu_auto_mode_setup_wizard_shown", {
            has_existing: n.hasExisting ? 1 : 0,
          }));
    }, [n]));
  function z() {
    let S = I.now(),
      A = n.lastAcceptAt;
    return (
      (n.lastAcceptAt = Math.max(S, A ?? S)),
      A !== void 0 && S - A >= mo
    );
  }
  function C(S) {
    if (!z()) return !1;
    return n.step === S && n.resolution === "none";
  }
  function x(S) {
    ((n.lastAcceptAt = Math.max(I.now(), n.lastAcceptAt ?? 0)),
      (n.step = S),
      n.notify?.());
  }
  function P(S) {
    if (n.resolution !== "none") return;
    ((n.resolution = "cancel"),
      i("tengu_auto_mode_setup_wizard_resolved", {
        choice: u(S),
        step: u(n.step),
      }),
      v());
  }
  function c() {
    P("cancel");
  }
  function O(S, A) {
    if (n.resolution !== "none") return;
    ((n.resolution = "done"),
      i("tengu_auto_mode_setup_wizard_resolved", {
        choice: u("saved"),
        mode: u(n.mode),
      }),
      k(K(S, A)));
  }
  function j() {
    if (!z()) return;
    if (n.saved) {
      O(n.saved, { removed: 0, skipped: 0 });
      return;
    }
    P("error");
  }
  let G = r(ue, {
    children: [
      b === "confirm"
        ? e(D, { chord: ["left", "right"], action: "change usage" })
        : null,
      e(D, { chord: "enter", action: "continue" }),
      e(D, { chord: "escape", action: "cancel" }),
    ],
  });
  if (b === "existing")
    return e(de, {
      title:
        "You already have auto-mode entries \u2014 add to them, or start fresh?",
      onCancel: c,
      inputGuide: G,
      children: e(ve, {
        options: [
          {
            value: "append",
            label: "Add to them (keeps your existing entries)",
          },
          {
            value: "replace",
            label: "Start fresh (replaces the environment section)",
          },
          { value: "cancel", label: "Cancel" },
        ],
        onChange: (S) => {
          if (!C("existing")) return;
          if (S === "cancel") {
            c();
            return;
          }
          ((n.mode = S), x("confirm"));
        },
        onCancel: c,
      }),
    });
  if (b === "confirm")
    return e(he, {
      persisted: n,
      cancel: c,
      footer: G,
      isFreshKeypress: z,
      onContinue: (S) => {
        if (!C("confirm")) return;
        let A = S.includes("shell"),
          B = S.includes("repos"),
          V = {
            posture: n.posture,
            scope: "project",
            depth: A && B ? "both" : A ? "shell" : B ? "repos" : "here",
          };
        if (
          (i("tengu_auto_mode_setup_wizard_answers", {
            posture: u(V.posture),
            scope: u(V.scope),
            depth: u(V.depth),
          }),
          (n.gathersFromGitHubOrg = OIe(V).allProjects),
          s)
        ) {
          ((n.resolution = "done"),
            s(V),
            k(
              `Gathering data and drafting your auto-mode setup; back soon${n.gathersFromGitHubOrg ? " (also scanning your GitHub org \u2014 stoppable from the background tasks list)" : ""}`,
            ));
          return;
        }
        (x("propose"),
          a(V).then(
            (W) => {
              if (W.ok) ((n.proposal = W.proposal), x("review"));
              else if (W.code === "aborted") c();
              else ((n.error = W.reason), x("error"));
            },
            (W) => {
              ((n.error = W instanceof Error ? W.message : String(W)),
                x("error"));
            },
          ));
      },
    });
  if (b === "propose")
    return e(Se, {
      message: n.gathersFromGitHubOrg
        ? "Scanning your repo, recent sessions, and your GitHub org\u2026"
        : "Scanning your repo and recent sessions\u2026",
      subtitle:
        "then drafting a proposal \u2014 this can take a moment (Esc to cancel)",
      onEscape: w,
    });
  if (b === "review" && n.proposal) {
    let S = n.proposal;
    return e(d6e, {
      hideIndexes: !0,
      proposal: S,
      onCancel: c,
      onDecline: () => {
        if (!C("review")) return;
        ((n.resolution = "done"),
          i("tengu_auto_mode_setup_wizard_resolved", { choice: u("decline") }),
          k(
            "Discarded \u2014 nothing was saved. Re-run /auto-mode-setup anytime.",
          ));
      },
      onAccept: () => {
        if (!C("review")) return;
        (x("write"),
          M(S, n.mode).then(
            (A) => {
              if (((n.saved = A), S.remove_from_permissions_allow.length > 0))
                x("flagged");
              else O(A, { removed: 0, skipped: 0 });
            },
            (A) => {
              ((n.error = A instanceof Error ? A.message : String(A)),
                x("error"));
            },
          ));
      },
    });
  }
  if (b === "write") return e($n, { message: "Saving\u2026" });
  if (b === "flagged" && n.proposal && n.saved) {
    let S = n.saved;
    return e(Yot, {
      hideIndexes: !0,
      flagged: n.proposal.remove_from_permissions_allow,
      initialPicking: n.flaggedPicking,
      onPickingChange: (A) => {
        if (!C("flagged")) return !1;
        return ((n.flaggedPicking = A), !0);
      },
      initialSelection: n.flaggedSelection,
      onSelectionChange: (A) => {
        n.flaggedSelection = A;
      },
      onCancel: () => {
        if (!z()) return;
        O(S, { removed: 0, skipped: 0 });
      },
      onResolve: (A) => {
        if (!C("flagged")) return;
        if (A.length === 0) {
          O(S, { removed: 0, skipped: 0 });
          return;
        }
        (x("write"),
          T(A).then(
            (B) =>
              O(S, {
                removed: B.permissionsAllowRemoved.length,
                skipped: B.permissionsAllowSkipped ? A.length : 0,
                notFound: B.permissionsAllowNotFound.length,
              }),
            (B) => {
              ((n.error = B instanceof Error ? B.message : String(B)),
                x("error"));
            },
          ));
      },
    });
  }
  return e(de, {
    title: "Auto-mode setup",
    onCancel: j,
    children: r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(o, {
          children: [
            e(et, { status: "error" }),
            r(t, { children: [" ", n.error ?? "Something went wrong."] }),
          ],
        }),
        e(ve, {
          options: [{ value: "close", label: "Close" }],
          onChange: j,
          onCancel: j,
        }),
      ],
    }),
  });
}
var se = Math.max(ee.length, ...Q.map((n) => n.label.length));
function he(U) {
  let Re = _(4);
  if (tn()) {
    let Y;
    if (Re[0] !== U) ((Y = e(le, { ...U })), (Re[0] = U), (Re[1] = Y));
    else Y = Re[1];
    return Y;
  }
  let Y;
  if (Re[2] !== U) ((Y = e(ie, { ...U })), (Re[2] = U), (Re[3] = Y));
  else Y = Re[3];
  return Y;
}
function ie({
  persisted: n,
  cancel: a,
  footer: s,
  onContinue: w,
  isFreshKeypress: M,
}) {
  let [, T] = d(0),
    k = () => T((c) => c + 1),
    v = Q.length + 2,
    m = n.confirmFocus,
    b = (c) => {
      let O = q.findIndex((G) => G.value === n.posture),
        j = q[(O + c + q.length) % q.length];
      if (j) ((n.posture = j.value), k());
    },
    I = (c) => {
      ((n.confirmFocus = (n.confirmFocus + c + v) % v), k());
    },
    z = (c) => {
      ((n.confirmSelection = n.confirmSelection.includes(c)
        ? n.confirmSelection.filter((O) => O !== c)
        : [...n.confirmSelection, c]),
        k());
    },
    C = () => {
      let c = n.confirmFocus;
      if (c === v - 1) {
        w(n.confirmSelection);
        return;
      }
      if (!M()) return;
      let O = Q[c - 1];
      if (O) z(O.value);
    };
  (Ze(
    { "tabs:previous": () => b(-1), "tabs:next": () => b(1) },
    { context: "Tabs", isActive: n.confirmFocus === 0 },
  ),
    Ze(
      {
        "confirm:previous": () => I(-1),
        "confirm:next": () => I(1),
        "confirm:toggle": C,
        "confirm:yes": C,
      },
      { context: "Confirmation" },
    ));
  let x = q.find((c) => c.value === n.posture)?.label ?? n.posture,
    P = (c) =>
      r(t, {
        color: m === c ? "suggestion" : void 0,
        children: [m === c ? L.pointer : " ", " "],
      });
  return r(de, {
    title: me,
    onCancel: a,
    inputGuide: s,
    children: [
      e(t, { children: ge }),
      r(o, {
        flexDirection: "column",
        children: [
          r(o, {
            children: [
              P(0),
              r(t, {
                color: m === 0 ? "suggestion" : void 0,
                children: [ee.padEnd(se), " "],
              }),
              r(t, { dimColor: !0, children: [L.triangleLeft, " "] }),
              e(t, { children: x }),
              r(t, { dimColor: !0, children: [" ", L.triangleRight] }),
            ],
          }),
          Q.map((c, O) => {
            let j = O + 1,
              G = n.confirmSelection.includes(c.value);
            return r(
              o,
              {
                children: [
                  P(j),
                  r(t, {
                    color: m === j ? "suggestion" : void 0,
                    children: [c.label.padEnd(se), " "],
                  }),
                  r(t, {
                    color: G ? "success" : void 0,
                    children: ["[", G ? L.tick : " ", "]"],
                  }),
                ],
              },
              c.value,
            );
          }),
          r(o, {
            marginTop: 1,
            children: [
              P(v - 1),
              e(t, {
                bold: !0,
                color: m === v - 1 ? "suggestion" : void 0,
                children: "Continue",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function le({ persisted: n, cancel: a, onContinue: s }) {
  let w = vt(),
    [, M] = d(0),
    T = () => {
      n.lastAcceptAt = Math.max(w.now(), n.lastAcceptAt ?? 0);
    };
  return r(de, {
    title: me,
    onCancel: a,
    children: [
      e(t, { children: ge }),
      n.confirmSrAtPosture
        ? r(N, {
            children: [
              r(t, { children: [ee, ":"] }),
              e(X8, {
                options: q,
                defaultValue: n.posture,
                onChange: (k) => {
                  ((n.posture = k),
                    (n.confirmSrAtPosture = !1),
                    T(),
                    M((v) => v + 1));
                },
                onCancel: a,
              }),
            ],
          })
        : r(N, {
            children: [
              e(t, {
                children: "Optional reads (Claude already reads this project):",
              }),
              e(X8, {
                options: Pe,
                defaultValue: "shell",
                onChange: (k) => {
                  let v = Fe(k);
                  ((n.confirmSelection = v), s(v));
                },
                onCancel: a,
              }),
            ],
          }),
    ],
  });
}
function Se(go) {
  let Ce = _(4),
    { message: ne, subtitle: ae, onEscape: fo } = go,
    xe;
  if (Ce[0] === p) ((xe = { context: "Settings" }), (Ce[0] = xe));
  else xe = Ce[0];
  Ne("confirm:no", fo, xe);
  let Te;
  if (Ce[1] !== ne || Ce[2] !== ae)
    ((Te = e($n, { message: ne, subtitle: ae })),
      (Ce[1] = ne),
      (Ce[2] = ae),
      (Ce[3] = Te));
  else Te = Ce[3];
  return Te;
}
function H(n, a, s) {
  if (
    (i("tengu_auto_mode_setup_wizard_resolved", {
      choice: u(n),
      step: u(a),
      ...(s !== void 0 && { mode: u(s) }),
    }),
    n === "saved")
  )
    y("auto_mode_setup_wizard");
  else if (n === "error") f("auto_mode_setup_wizard", a);
  else g("auto_mode_setup_wizard", n);
}
function Ae() {
  return fOn();
}
async function we(n) {
  NXt(!0);
  try {
    await Ee(n);
  } catch (a) {
    (n.appendSystemMessage?.(
      Ht(
        `Auto-mode setup hit an unexpected error and stopped: ${l(a)}. Re-run /auto-mode-setup to try again.`,
        "warning",
      ),
    ),
      h(
        new R(
          `background auto-mode setup crashed: ${l(a)}`,
          "background auto-mode setup crashed",
        ),
      ),
      H("error", "background_crash"));
  } finally {
    NXt(!1);
  }
}
async function Ee(n) {
  let { taskRegistry: a } = n,
    s = new AbortController(),
    w = re(a, s, OIe(n.answers).allProjects);
  try {
    await De(n, w, s);
  } finally {
    X(w, a, "failed");
  }
}
async function De(n, a, s) {
  let {
      taskRegistry: w,
      requestDialog: M,
      appendSystemMessage: T,
      propose: k = PIe,
      write: v = wSe,
    } = n,
    m = await k(
      n.answers,
      n.permissionContext,
      s.signal,
      void 0,
      void 0,
      n.storageV5,
      n.credentials,
    ).catch(
      (C) => (
        h(
          new R(
            `background auto-mode scan rejected: ${l(C)}`,
            "background auto-mode scan rejected",
          ),
        ),
        {
          ok: !1,
          code: "api_failed",
          reason:
            "The model call didn\u2019t complete. This is usually temporary \u2014 re-run /auto-mode-setup to try again.",
        }
      ),
    );
  if (!m.ok) {
    if (m.code === "aborted" || s.signal.aborted) {
      H("cancel", "background_scan");
      return;
    }
    (X(a, w, "failed"),
      T?.(Ht(`Auto-mode setup scan failed: ${m.reason}`, "warning")),
      H("error", "background_scan"));
    return;
  }
  if (s.signal.aborted) {
    H("cancel", "background_scan");
    return;
  }
  X(a, w, "completed");
  let b = await M(p6e, { ...m.proposal, mode: n.mode }, { place: "under" });
  if (b !== "accept") {
    (T?.(
      Ht(
        "Auto-mode proposal discarded \u2014 nothing was saved. Re-run /auto-mode-setup anytime.",
        "notice",
      ),
    ),
      H(b === "decline" ? "decline" : "cancel", "background_review"));
    return;
  }
  let I;
  try {
    I = await v({ mode: n.mode, autoMode: J(m.proposal) }, n.storageV5);
  } catch (C) {
    (T?.(
      Ht(
        `Auto-mode setup couldn\u2019t save: ${l(C)}. Re-run /auto-mode-setup to try again.`,
        "warning",
      ),
    ),
      H("error", "background_write"));
    return;
  }
  let z = { removed: 0, skipped: 0, notFound: 0 };
  if (m.proposal.remove_from_permissions_allow.length > 0) {
    let C = await M(
        f6e,
        { flagged: m.proposal.remove_from_permissions_allow, runId: a },
        { place: "under" },
      ),
      x =
        C === "cancelled"
          ? []
          : C.toRemove.filter((P) =>
              m.proposal.remove_from_permissions_allow.includes(P),
            );
    if (x.length > 0)
      try {
        let P = await v({ removeFromPermissionsAllow: x }, n.storageV5);
        z = {
          removed: P.permissionsAllowRemoved.length,
          skipped: P.permissionsAllowSkipped ? x.length : 0,
          notFound: P.permissionsAllowNotFound.length,
        };
      } catch (P) {
        (T?.(
          Ht(
            `${K(I, { removed: 0, skipped: 0 })}
Note: removing the flagged permissions.allow entries failed: ${l(P)}`,
            "warning",
          ),
        ),
          H("saved", "background_write", n.mode));
        return;
      }
  }
  (T?.(Ht(K(I, z), "notice")), H("saved", "background", n.mode));
}
var Vo = async (n, a, s) => {
  if (s.trim() !== "")
    return (
      n(
        "/auto-mode-setup doesn\u2019t take arguments \u2014 run it on its own to open the setup dialog. In non-interactive mode, use --propose / --apply-file.",
        { display: "system" },
      ),
      null
    );
  if (Ae() || Z(a.taskRegistry))
    return (
      n(
        Z(a.taskRegistry)
          ? "An auto-mode setup is already in progress \u2014 the proposal review will pop up when the scan finishes. (The scan shows in the background tasks list.)"
          : "An auto-mode setup is already wrapping up \u2014 if its proposal review hasn\u2019t popped up, answer it when it does; if you just stopped the scan, it\u2019s winding down \u2014 try again in a moment.",
        { display: "system" },
      ),
      null
    );
  let w = te(n),
    M = new AbortController(),
    T = pe(Oe()),
    k = !1,
    v = a.requestDialog;
  return e(fe, {
    state: T,
    onBackgroundStart:
      v &&
      ((m) => {
        ((k = !0),
          we({
            answers: m,
            mode: T.mode,
            permissionContext: ce(a),
            taskRegistry: a.taskRegistry,
            requestDialog: v,
            appendSystemMessage: a.appendSystemMessage,
            storageV5: a.storageV5,
            credentials: a.credentials,
          }).catch((b) => {
            h(
              new R(
                `background auto-mode setup crashed: ${l(b)}`,
                "background auto-mode setup crashed",
              ),
            );
          }));
      }),
    propose: (m) =>
      PIe(
        m,
        ce(a),
        AbortSignal.any([a.abortController.signal, M.signal]),
        void 0,
        void 0,
        a.storageV5,
        a.credentials,
      ),
    abort: () => M.abort(),
    write: (m, b) => wSe({ mode: b, autoMode: J(m) }, a.storageV5),
    writeRemoval: (m) => wSe({ removeFromPermissionsAllow: m }, a.storageV5),
    onCancel: () => {
      (g("auto_mode_setup_wizard", "cancelled"),
        w(void 0, { display: "skip" }));
    },
    onDone: (m) => {
      if (!k) y("auto_mode_setup_wizard");
      w(m, { display: "system" });
    },
  });
};
function Oe() {
  let n = OU().safeParse(ye("userSettings")?.autoMode);
  if (!n.success) return !1;
  let a = n.data;
  return (
    (a.environment?.length ?? 0) > 0 ||
    (a.allow?.length ?? 0) > 0 ||
    (a.soft_deny?.length ?? 0) > 0 ||
    (a.hard_deny?.length ?? 0) > 0
  );
}
export { Vo as call, Oe as hasExistingAutoModeConfig };

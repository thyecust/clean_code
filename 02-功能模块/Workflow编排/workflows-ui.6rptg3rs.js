// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import { Ot, Pn } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import { zj } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { wf } from "../../01-核心基础设施/共享小工具-未细化/chunk-pbd0pf42.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Ma, ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import { Rs } from "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import { h_ } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import { oa } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "./chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
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
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import { k7, EF, Cbe, vbe } from "./chunk-va9cgbfs.js";
import { Vf } from "./chunk-cd542wve.js";
import { mit } from "./chunk-dyq13fbm.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
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
import { KW } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import { DHe, eye } from "./chunk-6gjsfh7a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import { Rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
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
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-56wrzxpk.js";
import { Tin } from "./chunk-hdhsmge4.js";
import "./chunk-pqyn1fh3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g00x7t7w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { Dn, kn, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { p, en } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Qo() {
  return [];
}
function qo(ts) {
  return ts.tasks;
}
function zo(os) {
  return os.type === "local_workflow";
}
function Ko(es) {
  return es.workflowRunId;
}
function Yo(ss) {
  return !!ss;
}
function Zo(Ao) {
  return { task: io(Ao), snapshot: Ao };
}
function Ho(ns) {
  return { task: ns };
}
function te(rs, as) {
  return as.task.startTime - rs.task.startTime;
}
function oe(is) {
  return Math.max(0, is - 1);
}
function ee(ms) {
  return ms.task.status === "running";
}
function io(i) {
  return {
    id: i.taskId,
    type: "local_workflow",
    description: i.summary ?? "Dynamic workflow",
    status: i.status,
    startTime: i.startTime,
    endTime: i.startTime + i.durationMs,
    toolUseId: void 0,
    outputFile: "",
    outputOffset: 0,
    notified: !0,
    script: i.script,
    scriptPath: i.scriptPath,
    prompt: i.script,
    summary: i.summary,
    workflowName: i.workflowName,
    phases: i.phases,
    defaultModel: i.defaultModel,
    workflowRunId: i.runId,
    workflowProgress: i.workflowProgress,
    progressVersion: 0,
    agentCount: i.agentCount,
    totalTokens: i.totalTokens ?? 0,
    totalToolCalls: i.totalToolCalls ?? 0,
    logs: i.logs,
    result: i.result,
    error: i.error,
  };
}
function ot(i) {
  i("Dynamic workflows dialog dismissed", { display: "system" });
}
function Vt(Oe) {
  let nt = _(15),
    { onDone: st, toolUseContext: ut } = Oe;
  Rs("workflow-history-dialog");
  let yo;
  if (nt[0] !== ut.storageV5)
    ((yo = () => Tin(ut.storageV5).catch(Qo)),
      (nt[0] = ut.storageV5),
      (nt[1] = yo));
  else yo = nt[1];
  let [Gt] = d(yo),
    kt;
  if (nt[2] !== st) ((kt = () => ot(st)), (nt[2] = st), (nt[3] = kt));
  else kt = nt[3];
  let go, ho;
  if (nt[4] === p)
    ((go = e(ue, { children: e(D, { chord: "escape", action: "close" }) })),
      (ho = e($n, {
        message: "Loading dynamic workflow history\u2026",
        dimColor: !0,
      })),
      (nt[4] = go),
      (nt[5] = ho));
  else ((go = nt[4]), (ho = nt[5]));
  let wt;
  if (nt[6] !== kt)
    ((wt = e(de, {
      title: "Dynamic workflows",
      onCancel: kt,
      color: "background",
      inputGuide: go,
      children: ho,
    })),
      (nt[6] = kt),
      (nt[7] = wt));
  else wt = nt[7];
  const _t = ut.isMidTurn === !0;
  let yt;
  if (nt[8] !== st || nt[9] !== Gt || nt[10] !== _t)
    ((yt = e(Xt, { snapshotsPromise: Gt, onDone: st, promptVisibleBelow: _t })),
      (nt[8] = st),
      (nt[9] = Gt),
      (nt[10] = _t),
      (nt[11] = yt));
  else yt = nt[11];
  let Co;
  if (nt[12] !== wt || nt[13] !== yt)
    ((Co = e(Dn, { fallback: wt, children: yt })),
      (nt[12] = wt),
      (nt[13] = yt),
      (nt[14] = Co));
  else Co = nt[14];
  return Co;
}
function Xt(We) {
  let a = _(128),
    { snapshotsPromise: Ve, onDone: c, promptVisibleBelow: gt } = We,
    Qt = kn(Ve),
    { rows: qt } = ks(Se()),
    je = Ma(),
    zt = U(qo),
    T = wf(),
    So;
  if (a[0] !== Qt || a[1] !== zt) {
    let To = Object.values(zt ?? {}).filter(zo);
    let $e = new Set(To.map(Ko).filter(Yo));
    let Ee = Qt.filter((Ae) => !$e.has(Ae.runId)).map(Zo);
    So = [...To.map(Ho), ...Ee].sort(te);
    ((a[0] = Qt), (a[1] = zt), (a[2] = So));
  } else So = a[2];
  let s = So,
    vo;
  if (a[3] === p) ((vo = { mode: "list" }), (a[3] = vo));
  else vo = a[3];
  let [m, Z] = d(vo),
    [ct, Io] = d(0),
    ht = C(!1),
    Do;
  if (a[4] !== s[0] || a[5] !== s.length || a[6] !== m.mode)
    ((Do = () => {
      if (s.length === 1 && m.mode === "list" && !ht.current)
        ((ht.current = !0), Z({ mode: "detail", itemId: s[0].task.id }));
    }),
      (a[4] = s[0]),
      (a[5] = s.length),
      (a[6] = m.mode),
      (a[7] = Do));
  else Do = a[7];
  let bo;
  if (a[8] !== s || a[9] !== m.mode)
    ((bo = [s, m.mode]), (a[8] = s), (a[9] = m.mode), (a[10] = bo));
  else bo = a[10];
  E(Do, bo);
  let k = s[ct],
    Lo;
  if (a[11] === p) ((Lo = () => Io(oe)), (a[11] = Lo));
  else Lo = a[11];
  let Ct;
  if (a[12] !== s.length)
    ((Ct = () => Io((Ue) => Math.min(s.length - 1, Ue + 1))),
      (a[12] = s.length),
      (a[13] = Ct));
  else Ct = a[13];
  let St;
  if (a[14] !== k)
    ((St = () => {
      if (k) Z({ mode: "detail", itemId: k.task.id });
    }),
      (a[14] = k),
      (a[15] = St));
  else St = a[15];
  let xo;
  if (a[16] !== Ct || a[17] !== St)
    ((xo = { "confirm:previous": Lo, "confirm:next": Ct, "confirm:yes": St }),
      (a[16] = Ct),
      (a[17] = St),
      (a[18] = xo));
  else xo = a[18];
  const Kt = m.mode === "list";
  let Mo;
  if (a[19] !== Kt)
    ((Mo = { context: "Confirmation", isActive: Kt }),
      (a[19] = Kt),
      (a[20] = Mo));
  else Mo = a[20];
  Ze(xo, Mo);
  let q = k !== void 0 && k.task.script.length > 0,
    Ro;
  if (a[21] !== k || a[22] !== q || a[23] !== T || a[24] !== m.mode)
    ((Ro = (rt) => {
      if (m.mode !== "list") {
        return;
      }
      if (rt.ctrl || rt.meta) {
        return;
      }
      if (rt.key === "x" && k?.task.status === "running")
        (rt.preventDefault(), EF(k.task.id, T, "user"));
      else if (rt.key === "s" && q && k)
        (rt.preventDefault(), Z({ mode: "save", itemId: k.task.id }));
    }),
      (a[21] = k),
      (a[22] = q),
      (a[23] = T),
      (a[24] = m.mode),
      (a[25] = Ro));
  else Ro = a[25];
  let Yt = Ro,
    Po;
  if (a[26] !== s.length || a[27] !== c)
    ((Po = () => {
      if (ht.current && s.length <= 1) ot(c);
      else ((ht.current = !1), Z({ mode: "list" }));
    }),
      (a[26] = s.length),
      (a[27] = c),
      (a[28] = Po));
  else Po = a[28];
  let Zt = Po;
  if (m.mode === "detail") {
    let J;
    if (a[29] !== s || a[30] !== m.itemId) {
      let w;
      if (a[32] !== m.itemId)
        ((w = (Fe) => Fe.task.id === m.itemId),
          (a[32] = m.itemId),
          (a[33] = w));
      else w = a[33];
      J = s.find(w);
      ((a[29] = s), (a[30] = m.itemId), (a[31] = J));
    } else J = a[31];
    let f = J;
    if (!f) {
      return (Z({ mode: "list" }), null);
    }
    let M = f.task.status === "running";
    let w;
    if (a[34] !== c)
      ((w = (Bo) => (Bo ? c(Bo, { display: "system" }) : c())),
        (a[34] = c),
        (a[35] = w));
    else w = a[35];
    let y;
    if (a[36] !== M || a[37] !== f.task.id || a[38] !== T)
      ((y = M ? () => EF(f.task.id, T, "user") : void 0),
        (a[36] = M),
        (a[37] = f.task.id),
        (a[38] = T),
        (a[39] = y));
    else y = a[39];
    let R;
    if (a[40] !== M || a[41] !== f.task.id || a[42] !== T)
      ((R = M ? () => k7(f.task.id, T) : void 0),
        (a[40] = M),
        (a[41] = f.task.id),
        (a[42] = T),
        (a[43] = R));
    else R = a[43];
    let N;
    if (a[44] !== c)
      ((N = (Jo) =>
        c(Jo, { shouldQuery: !0, display: "system", metaMessages: [Jo] })),
        (a[44] = c),
        (a[45] = N));
    else N = a[45];
    let W;
    if (a[46] !== M || a[47] !== f.task.id || a[48] !== T)
      ((W = M ? (Ge) => Cbe(f.task.id, Ge, T) : void 0),
        (a[46] = M),
        (a[47] = f.task.id),
        (a[48] = T),
        (a[49] = W));
    else W = a[49];
    let j;
    if (a[50] !== M || a[51] !== f.task.id || a[52] !== T)
      ((j = M ? (_e) => vbe(f.task.id, _e, T) : void 0),
        (a[50] = M),
        (a[51] = f.task.id),
        (a[52] = T),
        (a[53] = j));
    else j = a[53];
    let X;
    if (
      a[54] !== Zt ||
      a[55] !== f.task ||
      a[56] !== gt ||
      a[57] !== w ||
      a[58] !== y ||
      a[59] !== R ||
      a[60] !== N ||
      a[61] !== W ||
      a[62] !== j
    )
      ((X = e(
        eye,
        {
          workflow: f.task,
          onDone: w,
          onBack: Zt,
          promptVisibleBelow: gt,
          onKill: y,
          onPause: R,
          onResume: N,
          onSkipAgent: W,
          onRetryAgent: j,
        },
        f.task.id,
      )),
        (a[54] = Zt),
        (a[55] = f.task),
        (a[56] = gt),
        (a[57] = w),
        (a[58] = y),
        (a[59] = R),
        (a[60] = N),
        (a[61] = W),
        (a[62] = j),
        (a[63] = X));
    else X = a[63];
    return X;
  }
  if (m.mode === "save") {
    let A, J, w;
    if (a[64] !== s || a[65] !== m.itemId) {
      w = en;
      bb0: {
        let y;
        if (a[69] !== m.itemId)
          ((y = (Qe) => Qe.task.id === m.itemId),
            (a[69] = m.itemId),
            (a[70] = y));
        else y = a[70];
        A = s.find(y);
        if (!A || A.task.script.length === 0) {
          w = (Z({ mode: "list" }), null);
          break bb0;
        }
        let No = Vf(A.task.script);
        J = !("error" in No)
          ? No.meta.name
          : zj(A.task.summary ?? A.task.description);
      }
      ((a[64] = s), (a[65] = m.itemId), (a[66] = A), (a[67] = J), (a[68] = w));
    } else ((A = a[66]), (J = a[67]), (w = a[68]));
    if (w !== en) return w;
    let Ht = J;
    let y;
    if (a[71] !== c)
      ((y = (Xo) => {
        if (Xo) c(Xo, { display: "system" });
        else Z({ mode: "list" });
      }),
        (a[71] = c),
        (a[72] = y));
    else y = a[72];
    let R;
    if (a[73] !== Ht || a[74] !== A.task.script || a[75] !== y)
      ((R = e(DHe, { script: A.task.script, defaultName: Ht, onDone: y })),
        (a[73] = Ht),
        (a[74] = A.task.script),
        (a[75] = y),
        (a[76] = R));
    else R = a[76];
    return R;
  }
  let H = G(s, ee),
    at = s.length - H,
    to = gt && !je && !h_() ? mit : 0,
    Tt,
    vt,
    J,
    w,
    y,
    R,
    N,
    W,
    j;
  if (
    a[77] !== to ||
    a[78] !== at ||
    a[79] !== Yt ||
    a[80] !== s ||
    a[81] !== c ||
    a[82] !== qt ||
    a[83] !== H ||
    a[84] !== k?.task.status ||
    a[85] !== q ||
    a[86] !== ct
  ) {
    let qe = oa(qt - 7 - to, 3, s.length);
    let {
      windowStart: Oo,
      windowEnd: ze,
      moreAbove: Wo,
      moreBelow: Vo,
    } = KW(ct, s.length, qe);
    let Ke = s.slice(Oo, ze);
    let X;
    if (a[96] !== c) ((X = () => ot(c)), (a[96] = c), (a[97] = X));
    else X = a[97];
    let Ye = X;
    vt = mr;
    j = Yt;
    Tt = de;
    J = "Dynamic workflows";
    if (a[98] !== at || a[99] !== s.length || a[100] !== H)
      ((w =
        s.length === 0
          ? void 0
          : e(t, {
              dimColor: !0,
              children: r(ue, {
                children: [
                  H > 0 && `${H} running`,
                  at > 0 && `${at} completed`,
                ],
              }),
            })),
        (a[98] = at),
        (a[99] = s.length),
        (a[100] = H),
        (a[101] = w));
    else w = a[101];
    y = Ye;
    R = "background";
    let tt;
    if (a[102] !== s.length)
      ((tt = s.length > 0 && e(D, { chord: ["up", "down"], action: "select" })),
        (a[102] = s.length),
        (a[103] = tt));
    else tt = a[103];
    let It;
    if (a[104] !== s.length)
      ((It = s.length > 0 && e(D, { chord: "enter", action: "view" })),
        (a[104] = s.length),
        (a[105] = It));
    else It = a[105];
    let Dt;
    if (a[106] !== k?.task.status)
      ((Dt =
        k?.task.status === "running" && e(D, { chord: "x", action: "stop" })),
        (a[106] = k?.task.status),
        (a[107] = Dt));
    else Dt = a[107];
    let bt;
    if (a[108] !== q)
      ((bt = q && e(D, { chord: "s", action: "save" })),
        (a[108] = q),
        (a[109] = bt));
    else bt = a[109];
    let jo;
    if (a[110] === p)
      ((jo = e(D, { chord: "escape", action: "close" })), (a[110] = jo));
    else jo = a[110];
    if (a[111] !== tt || a[112] !== It || a[113] !== Dt || a[114] !== bt)
      ((N = r(ue, { children: [tt, It, Dt, bt, jo] })),
        (a[111] = tt),
        (a[112] = It),
        (a[113] = Dt),
        (a[114] = bt),
        (a[115] = N));
    else N = a[115];
    W =
      s.length === 0
        ? e(Rn, { children: "No dynamic workflows in this session." })
        : r(o, {
            flexDirection: "column",
            children: [
              Wo > 0 &&
                r(t, {
                  dimColor: !0,
                  children: ["  ", L.arrowUp, " ", Wo, " more above"],
                }),
              Ke.map(($o, He) =>
                e(Wt, { item: $o, isSelected: Oo + He === ct }, $o.task.id),
              ),
              Vo > 0 &&
                r(t, {
                  dimColor: !0,
                  children: ["  ", L.arrowDown, " ", Vo, " more below"],
                }),
            ],
          });
    ((a[77] = to),
      (a[78] = at),
      (a[79] = Yt),
      (a[80] = s),
      (a[81] = c),
      (a[82] = qt),
      (a[83] = H),
      (a[84] = k?.task.status),
      (a[85] = q),
      (a[86] = ct),
      (a[87] = Tt),
      (a[88] = vt),
      (a[89] = J),
      (a[90] = w),
      (a[91] = y),
      (a[92] = R),
      (a[93] = N),
      (a[94] = W),
      (a[95] = j));
  } else
    ((Tt = a[87]),
      (vt = a[88]),
      (J = a[89]),
      (w = a[90]),
      (y = a[91]),
      (R = a[92]),
      (N = a[93]),
      (W = a[94]),
      (j = a[95]));
  let X;
  if (
    a[116] !== Tt ||
    a[117] !== J ||
    a[118] !== w ||
    a[119] !== y ||
    a[120] !== R ||
    a[121] !== N ||
    a[122] !== W
  )
    ((X = e(Tt, {
      title: J,
      subtitle: w,
      onCancel: y,
      color: R,
      inputGuide: N,
      children: W,
    })),
      (a[116] = Tt),
      (a[117] = J),
      (a[118] = w),
      (a[119] = y),
      (a[120] = R),
      (a[121] = N),
      (a[122] = W),
      (a[123] = X));
  else X = a[123];
  let tt;
  if (a[124] !== vt || a[125] !== j || a[126] !== X)
    ((tt = e(vt, { onKeyDown: j, children: X })),
      (a[124] = vt),
      (a[125] = j),
      (a[126] = X),
      (a[127] = tt));
  else tt = a[127];
  return tt;
}
function Wt(ls) {
  let O = _(27),
    { item: Eo, isSelected: Uo } = ls,
    { task: v, snapshot: ds } = Eo,
    it,
    mt;
  bb0: switch (v.status) {
    case "completed": {
      ((it = L.tick), (mt = "success"));
      break bb0;
    }
    case "failed":
    case "killed": {
      ((it = L.cross), (mt = "error"));
      break bb0;
    }
    default: {
      ((it = "\u27F3"), (mt = void 0));
    }
  }
  let Lt = ds?.totalTokens ?? v.totalTokens ?? 0,
    Fo;
  if (O[0] !== v.endTime)
    ((Fo = v.endTime ?? Date.now()), (O[0] = v.endTime), (O[1] = Fo));
  else Fo = O[1];
  let oo = Math.max(0, Fo - v.startTime - (v.totalPausedMs ?? 0)),
    xt;
  if (O[2] !== v.agentCount)
    ((xt =
      v.agentCount > 0 ? `${v.agentCount} ${x(v.agentCount, "agent")}` : null),
      (O[2] = v.agentCount),
      (O[3] = xt));
  else xt = O[3];
  let Mt;
  if (O[4] !== Lt)
    ((Mt = Lt > 0 ? `${Pn(Lt)} tok` : null), (O[4] = Lt), (O[5] = Mt));
  else Mt = O[5];
  let Rt;
  if (O[6] !== oo) ((Rt = Ot(oo)), (O[6] = oo), (O[7] = Rt));
  else Rt = O[7];
  let Go;
  if (O[8] !== xt || O[9] !== Mt || O[10] !== Rt)
    ((Go = [xt, Mt, Rt].filter(Boolean)),
      (O[8] = xt),
      (O[9] = Mt),
      (O[10] = Rt),
      (O[11] = Go));
  else Go = O[11];
  let cs = Go,
    eo = v.workflowName ?? v.summary ?? v.description,
    so = eo.length > 50 ? eo.slice(0, 49) + "\u2026" : eo;
  const no = Uo ? L.pointer + " " : "  ";
  let Pt;
  if (O[12] !== no) ((Pt = e(t, { children: no })), (O[12] = no), (O[13] = Pt));
  else Pt = O[13];
  const ro = Uo ? "suggestion" : void 0;
  let Bt;
  if (O[14] !== it || O[15] !== mt)
    ((Bt = e(t, { color: mt, children: it })),
      (O[14] = it),
      (O[15] = mt),
      (O[16] = Bt));
  else Bt = O[16];
  const ao = cs.join(" \xB7 ");
  let Jt;
  if (O[17] !== ao)
    ((Jt = r(t, { dimColor: !0, children: ["  ", ao] })),
      (O[17] = ao),
      (O[18] = Jt));
  else Jt = O[18];
  let Nt;
  if (O[19] !== so || O[20] !== Jt || O[21] !== ro || O[22] !== Bt)
    ((Nt = r(t, { color: ro, children: [Bt, " ", so, Jt] })),
      (O[19] = so),
      (O[20] = Jt),
      (O[21] = ro),
      (O[22] = Bt),
      (O[23] = Nt));
  else Nt = O[23];
  let _o;
  if (O[24] !== Nt || O[25] !== Pt)
    ((_o = r(o, { children: [Pt, Nt] })),
      (O[24] = Nt),
      (O[25] = Pt),
      (O[26] = _o));
  else _o = O[26];
  return _o;
}
async function ys(i, h) {
  return e(Vt, { toolUseContext: h, onDone: i });
}
export { ys as call };

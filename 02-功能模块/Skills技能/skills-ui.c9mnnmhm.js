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
import { Hr, yf } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { lf } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { S1, ay } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { jn } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { xx } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { ye, Jt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
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
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import { oa } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import { Va } from "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { qo, an, J_t, rR } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { Zr } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "./chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "./chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
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
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import { jp, Xd } from "../Vim模式/Vim模式.nnewe0gf.js";
import { NIt, iye } from "../插件系统/chunk-jwm9gdkd.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
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
import "../插件系统/chunk-akd9b588.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../插件系统/chunk-q8w2zntw.js";
import "../MCP客户端/chunk-g4gdwpa0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-3eztvm1y.js";
import "../认证-OAuth登录/chunk-7jz937t3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/chunk-4k4dssd9.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../MCP客户端/chunk-4xr0rjb4.js";
import "../成本-Token统计/chunk-3nwwgatc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4bdjksjf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x93xfjz0.js";
import { Rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../MCP客户端/chunk-35zjqw7h.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qck6h2yw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../MCP客户端/chunk-49ds54j4.js";
import "../插件系统/chunk-bh1q9esj.js";
import "../MCP客户端/chunk-d7zajrh1.js";
import "../插件系统/chunk-gzfe39h3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ey89qg3e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g2fqhcwj.js";
import "../MCP客户端/chunk-k2gczbnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { re, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function et(ss) {
  return ss.workerInventory?.skills;
}
function ot(Yo) {
  return { value: Yo, label: `/${an(Yo)}` };
}
function tt() {}
function Oe(ts) {
  let K = _(18),
    { onExit: ze } = ts,
    h = U(et),
    Wo;
  if (K[0] !== ze)
    ((Wo = () => ze("Skills dialog dismissed", { display: "system" })),
      (K[0] = ze),
      (K[1] = Wo));
  else Wo = K[1];
  let ee = Wo,
    Ce;
  if (K[2] !== h)
    ((Ce =
      h && h.length > 0
        ? `${h.length} ${x(h.length, "skill")} loaded in the cloud session`
        : void 0),
      (K[2] = h),
      (K[3] = Ce));
  else Ce = K[3];
  let be;
  if (K[4] !== h)
    ((be =
      h && h.length > 0 && e(D, { chord: ["up", "down"], action: "navigate" })),
      (K[4] = h),
      (K[5] = be));
  else be = K[5];
  let zo;
  if (K[6] === p)
    ((zo = e(D, { chord: "escape", action: "close" })), (K[6] = zo));
  else zo = K[6];
  let we;
  if (K[7] !== be)
    ((we = r(ue, { children: [be, zo] })), (K[7] = be), (K[8] = we));
  else we = K[8];
  let xe;
  if (K[9] !== ee || K[10] !== h)
    ((xe =
      h === void 0
        ? e(Rn, {
            hint: "It reports them at the start of each turn; /reload-skills re-scans its skill folders",
            children:
              "The cloud session hasn't reported which skills it loaded",
          })
        : h.length === 0
          ? e(Rn, {
              hint: "Skills come from the repo's .claude/skills and the plugins the session loaded",
              children: "No skills loaded in the cloud session",
            })
          : e(ve, {
              options: h.map(ot),
              visibleOptionCount: 10,
              hideIndexes: !0,
              onChange: tt,
              onCancel: ee,
            })),
      (K[9] = ee),
      (K[10] = h),
      (K[11] = xe));
  else xe = K[11];
  let Ho;
  if (K[12] === p)
    ((Ho = e(o, {
      children: e(t, {
        dimColor: !0,
        wrap: "wrap-trim",
        children:
          "Read-only here: the cloud session sends skill names only, and per-skill toggles are this machine's setting \u2014 /skills in a local session changes those; /reload-skills re-scans the session's skill folders.",
      }),
    })),
      (K[12] = Ho));
  else Ho = K[12];
  let Zo;
  if (K[13] !== ee || K[14] !== Ce || K[15] !== we || K[16] !== xe)
    ((Zo = r(de, {
      title: "Skills",
      subtitle: Ce,
      onCancel: ee,
      color: "suggestion",
      inputGuide: we,
      children: [xe, Ho],
    })),
      (K[13] = ee),
      (K[14] = Ce),
      (K[15] = we),
      (K[16] = xe),
      (K[17] = Zo));
  else Zo = K[17];
  return Zo;
}
F();
function At(ae) {
  return (
    ae.type === "prompt" &&
    (ae.loadedFrom === "skills" ||
      ae.loadedFrom === "syncedSkills" ||
      ae.loadedFrom === "commands_DEPRECATED" ||
      ae.loadedFrom === "plugin" ||
      ae.loadedFrom === "mcp")
  );
}
function Xt(Mt) {
  return [Mt, J_t(Mt)];
}
function _t(xo, Oo) {
  return (
    E(xo.source, xo.loadedFrom).localeCompare(E(Oo.source, Oo.loadedFrom)) ||
    qo(xo).localeCompare(qo(Oo))
  );
}
function jt(Ws) {
  return Ws.name;
}
function Gt(zs) {
  return !zs;
}
function qt(Hs) {
  return Hs.source === "plugin";
}
var H = ["on", "name-only", "user-invocable-only", "off"],
  Lo = {
    on: { glyph: L.tick, label: "on", color: "success" },
    "name-only": { glyph: L.bullet, label: "name-only" },
    "user-invocable-only": {
      glyph: L.circle,
      label: "user-only",
      color: "warning",
    },
    off: { glyph: L.cross, label: "off", color: "error" },
  };
function $o(a, c) {
  let P = ye("policySettings")?.skillOverrides?.[c];
  if (P) return { value: P, source: "policy" };
  let w = ye("flagSettings")?.skillOverrides?.[c];
  if (w) return { value: w, source: "flag" };
  if (a.disableModelInvocation)
    return { value: "user-invocable-only", source: "author" };
  if (a.source === "plugin") return { value: "on", source: "plugin" };
  return;
}
function To(a) {
  return (
    ye("projectSettings")?.skillOverrides?.[a] ??
    ye("userSettings")?.skillOverrides?.[a]
  );
}
function E(a, c) {
  if (c === "syncedSkills") return S1;
  switch (a) {
    case "mcp":
    case "plugin":
      return a;
    case "memoryStore":
      return "memory store";
    case "bundled":
    case "builtin":
      return "built-in";
    default:
      return ay(a);
  }
}
function Ae(Es) {
  let i = _(89),
    { onExit: R, commands: He, bytesPerToken: Ye } = Es,
    { storageV5: eo } = _e(),
    [X, Ms] = d(!1),
    Pe;
  if (i[0] !== He || i[1] !== X) {
    bb0: {
      let oo = He.filter(At);
      if (X) {
        let st = new Map(oo.map(Xt));
        Pe = oo.sort(
          (nt, rt) =>
            (st.get(rt) ?? 0) - (st.get(nt) ?? 0) ||
            qo(nt).localeCompare(qo(rt)),
        );
        break bb0;
      }
      Pe = oo.sort(_t);
    }
    ((i[0] = He), (i[1] = X), (i[2] = Pe));
  } else Pe = i[2];
  let l = Pe,
    it;
  if (i[3] === p)
    ((it = ye("localSettings")?.skillOverrides ?? {}), (i[3] = it));
  else it = i[3];
  let to = it,
    so;
  if (i[4] !== l) {
    so = new Map();
    for (const lt of l) {
      let at = To(lt.name);
      if (at) so.set(lt.name, at);
    }
    ((i[4] = l), (i[5] = so));
  } else so = i[5];
  let oe = so,
    no;
  if (i[6] !== l) {
    no = new Map();
    for (const ro of l) {
      let ct = $o(ro, ro.name);
      if (ct) no.set(ro, ct);
    }
    ((i[6] = l), (i[7] = no));
  } else no = i[7];
  let S = no,
    mt;
  if (i[8] !== S || i[9] !== oe || i[10] !== l)
    ((mt = () => {
      let io = {};
      for (const pe of l) {
        if (pe.name in io) {
          continue;
        }
        io[pe.name] =
          S.get(pe)?.value ?? to[pe.name] ?? oe.get(pe.name) ?? "on";
      }
      return io;
    }),
      (i[8] = S),
      (i[9] = oe),
      (i[10] = l),
      (i[11] = mt));
  else mt = i[11];
  let [te, Bs] = d(mt),
    [lo, Ks] = d(l[0]),
    ao = Va(),
    [v, Re] = d(!1),
    se = C(v),
    dt,
    ut;
  if (i[12] === p)
    ((dt = () => {
      ((se.current = !1), Re(!1));
    }),
      (ut = ["c", "d"]),
      (i[12] = dt),
      (i[13] = ut));
  else ((dt = i[12]), (ut = i[13]));
  let pt;
  if (i[14] !== v)
    ((pt = { isActive: v, onExit: dt, passthroughCtrlKeys: ut }),
      (i[14] = v),
      (i[15] = pt));
  else pt = i[15];
  let {
    query: u,
    setQuery: j,
    cursorOffset: co,
    handleKeyDown: mo,
    handlePaste: uo,
  } = jp(pt);
  is();
  let po;
  bb1: {
    if (!u) {
      po = l;
      break bb1;
    }
    let ne;
    if (i[16] !== u || i[17] !== l) {
      let fo = u.toLowerCase();
      ne = l.filter(
        (De) =>
          De.name.toLowerCase().includes(fo) ||
          (De.description ?? "").toLowerCase().includes(fo) ||
          E(De.source, De.loadedFrom).toLowerCase().includes(fo),
      );
      ((i[16] = u), (i[17] = l), (i[18] = ne));
    } else ne = i[18];
    po = ne;
  }
  let g = po,
    { rows: Ns } = ks(Se());
  const ne = Ns - 13;
  let ft;
  if (i[19] !== g.length || i[20] !== ne)
    ((ft = oa(ne, 4, g.length)),
      (i[19] = g.length),
      (i[20] = ne),
      (i[21] = ft));
  else ft = i[21];
  let go = ft,
    gt;
  if (i[22] !== g || i[23] !== lo || i[24] !== S)
    ((gt = () => {
      let fe = lo;
      if (!fe || !g.includes(fe)) {
        return;
      }
      if (S.has(fe)) {
        return;
      }
      Bs((ht) => {
        let As = ht[fe.name] ?? "on";
        let Js = H[(H.indexOf(As) + 1) % H.length];
        return { ...ht, [fe.name]: Js };
      });
    }),
      (i[22] = g),
      (i[23] = lo),
      (i[24] = S),
      (i[25] = gt));
  else gt = i[25];
  let ho = gt,
    kt = C(!1),
    yt;
  if (
    i[26] !== te ||
    i[27] !== S ||
    i[28] !== oe ||
    i[29] !== R ||
    i[30] !== l ||
    i[31] !== eo
  )
    ((yt = async () => {
      if (kt.current) {
        return;
      }
      kt.current = !0;
      let Xs = new Set(Array.from(S.keys(), jt));
      let St = new Set(Xs);
      let vt = {};
      let Ct = 0;
      let Fe = 0;
      for (const G of l) {
        if (St.has(G.name)) {
          continue;
        }
        St.add(G.name);
        let ko = te[G.name] ?? "on";
        let bt = oe.get(G.name) ?? "on";
        let _s = to[G.name] ?? bt;
        let wt = ko === bt ? void 0 : ko;
        if (wt !== to[G.name]) ((vt[G.name] = wt), Ct++);
        if (ko !== _s) Fe++;
      }
      if (Ct > 0) {
        let { error: xt } = await Jt(
          "localSettings",
          { skillOverrides: vt },
          void 0,
          eo,
        );
        if (xt) {
          R(`Failed to save skill overrides: ${xt.message}`, {
            display: "system",
          });
          return;
        }
        rR();
      }
      R(Fe > 0 ? `Updated ${Fe} skill ${x(Fe, "override")}` : "No changes", {
        display: "system",
      });
    }),
      (i[26] = te),
      (i[27] = S),
      (i[28] = oe),
      (i[29] = R),
      (i[30] = l),
      (i[31] = eo),
      (i[32] = yt));
  else yt = i[32];
  let yo = yt,
    Ot = Zr("confirm:no", "Settings", "esc"),
    js = Zr("settings:sortByTokens", "Settings", "t"),
    Pt;
  if (i[33] === p) ((Pt = () => Ms(Gt)), (i[33] = Pt));
  else Pt = i[33];
  let Rt;
  if (i[34] !== ho)
    ((Rt = { "select:accept": ho, "settings:sortByTokens": Pt }),
      (i[34] = ho),
      (i[35] = Rt));
  else Rt = i[35];
  const So = !v && g.length > 0;
  let Dt;
  if (i[36] !== So)
    ((Dt = { context: "Settings", isActive: So }), (i[36] = So), (i[37] = Dt));
  else Dt = i[37];
  Ze(Rt, Dt);
  let Ft;
  if (i[38] !== yo) ((Ft = { "confirm:no": yo }), (i[38] = yo), (i[39] = Ft));
  else Ft = i[39];
  const vo = !v;
  let Lt;
  if (i[40] !== vo)
    ((Lt = { context: "Settings", isActive: vo }), (i[40] = vo), (i[41] = Lt));
  else Lt = i[41];
  Ze(Ft, Lt);
  let $t;
  if (i[42] !== mo || i[43] !== u || i[44] !== j)
    (($t = (b) => {
      if (se.current) {
        mo(b);
        return;
      }
      if (b.ctrl || b.meta) {
        return;
      }
      if (b.name === "backspace") {
        if (u)
          (b.preventDefault(), (se.current = !0), Re(!0), j(u.slice(0, -1)));
        return;
      }
      if (b.name.length > 1 && b.name !== "number") {
        return;
      }
      if (b.key.length >= 1 && b.key !== " ") {
        (b.preventDefault(), (se.current = !0), Re(!0));
        let Gs = b.key.startsWith("/") ? b.key.slice(1) : b.key;
        j(u + Gs);
      }
    }),
      (i[42] = mo),
      (i[43] = u),
      (i[44] = j),
      (i[45] = $t));
  else $t = i[45];
  let Co = $t,
    Tt;
  if (i[46] !== uo || i[47] !== u || i[48] !== j)
    ((Tt = (bo) => {
      if (se.current) {
        uo(bo);
        return;
      }
      let Le = bo.text.split(/\r\n|\r|\n/, 2)[0] ?? "";
      if (Le.length === 0) {
        return;
      }
      (bo.preventDefault(), (se.current = !0), Re(!0));
      let qs = Le.startsWith("/") ? Le.slice(1) : Le;
      j(u + qs);
    }),
      (i[46] = uo),
      (i[47] = u),
      (i[48] = j),
      (i[49] = Tt));
  else Tt = i[49];
  let wo = Tt;
  if (l.length === 0) {
    let q;
    if (i[50] !== R)
      ((q = () => R("Skills dialog dismissed", { display: "system" })),
        (i[50] = R),
        (i[51] = q));
    else q = i[51];
    let ie;
    if (i[52] === p)
      ((ie = e(je, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "close",
      })),
        (i[52] = ie));
    else ie = i[52];
    let Q;
    if (i[53] === p)
      ((Q = e(Rn, {
        hint: Hr()
          ? `Custom skills are disabled in safe mode \u2014 ${yf()} to load them`
          : "Create skills in .claude/skills/ or ~/.claude/skills/",
        children: "No skills found",
      })),
        (i[53] = Q));
    else Q = i[53];
    let W;
    if (i[54] !== q)
      ((W = e(de, {
        title: "Skills",
        onCancel: q,
        inputGuide: ie,
        children: Q,
      })),
        (i[54] = q),
        (i[55] = W));
    else W = i[55];
    return W;
  }
  let q;
  if (i[56] !== g.length || i[57] !== u || i[58] !== l.length)
    ((q = u
      ? `${g.length}/${l.length} ${x(l.length, "skill")}`
      : `${l.length} ${x(l.length, "skill")}`),
      (i[56] = g.length),
      (i[57] = u),
      (i[58] = l.length),
      (i[59] = q));
  else q = i[59];
  let Qs = q,
    Us = v
      ? "type to filter \xB7 \u2193/enter to select \xB7 esc to clear"
      : g.length === 0
        ? `/ to search, ${Ot} to close`
        : `enter/space to cycle, / to search, ${js} to sort, ${Ot} to close`;
  const ie = `${Qs}${X ? " \xB7 sorted by tokens" : ""} \xB7 ${Us}`;
  let Q;
  if (i[60] !== R)
    ((Q = () => R("Skills dialog dismissed", { display: "system" })),
      (i[60] = R),
      (i[61] = Q));
  else Q = i[61];
  let W;
  if (i[62] !== v || i[63] !== ao || i[64] !== co || i[65] !== u)
    ((W = e(Xd, {
      query: u,
      isFocused: v,
      isTerminalFocused: ao,
      cursorOffset: co,
      placeholder: "Search skills\u2026",
    })),
      (i[62] = v),
      (i[63] = ao),
      (i[64] = co),
      (i[65] = u),
      (i[66] = W));
  else W = i[66];
  let $e;
  if (
    i[67] !== Ye ||
    i[68] !== te ||
    i[69] !== g ||
    i[70] !== v ||
    i[71] !== S ||
    i[72] !== u ||
    i[73] !== X ||
    i[74] !== go
  )
    (($e =
      g.length === 0
        ? e(o, {
            marginTop: 1,
            children: e(Rn, { children: `No skills match "${u}"` }),
          })
        : e(
            iye,
            {
              visibleCount: go,
              isDisabled: v,
              wrap: !0,
              overflowHint: "count",
              onFocus: (Vs) => Ks(g[Vs]),
              children: g.map((le) =>
                e(
                  iye.Item,
                  {
                    children: e(Ne, {
                      skill: le,
                      lock: S.get(le),
                      state: S.get(le)?.value ?? te[le.name] ?? "on",
                      bytesPerToken: Ye,
                    }),
                  },
                  `${le.name}-${le.source}`,
                ),
              ),
            },
            X ? "tok" : "name",
          )),
      (i[67] = Ye),
      (i[68] = te),
      (i[69] = g),
      (i[70] = v),
      (i[71] = S),
      (i[72] = u),
      (i[73] = X),
      (i[74] = go),
      (i[75] = $e));
  else $e = i[75];
  let Te;
  if (i[76] !== l)
    ((Te =
      l.some(qt) &&
      e(o, {
        marginTop: 1,
        children: e(t, {
          dimColor: !0,
          children: "Plugin skills are managed via /plugin",
        }),
      })),
      (i[76] = l),
      (i[77] = Te));
  else Te = i[77];
  let It;
  if (i[78] === p)
    ((It =
      Hr() &&
      e(o, {
        marginTop: 1,
        children: r(t, {
          dimColor: !0,
          children: [
            "Custom skills are disabled in safe mode \u2014",
            " ",
            `${yf()} to load them`,
          ],
        }),
      })),
      (i[78] = It));
  else It = i[78];
  let Ie;
  if (
    i[79] !== Co ||
    i[80] !== wo ||
    i[81] !== W ||
    i[82] !== $e ||
    i[83] !== Te
  )
    ((Ie = r(o, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: Co,
      onPaste: wo,
      children: [W, $e, Te, It],
    })),
      (i[79] = Co),
      (i[80] = wo),
      (i[81] = W),
      (i[82] = $e),
      (i[83] = Te),
      (i[84] = Ie));
  else Ie = i[84];
  let Et;
  if (i[85] !== ie || i[86] !== Q || i[87] !== Ie)
    ((Et = e(de, {
      title: "Skills",
      subtitle: ie,
      onCancel: Q,
      isCancelActive: !1,
      hideInputGuide: !0,
      children: Ie,
    })),
      (i[85] = ie),
      (i[86] = Q),
      (i[87] = Ie),
      (i[88] = Et));
  else Et = i[88];
  return Et;
}
function Ne(Zs) {
  let z = _(23),
    { skill: O, lock: ge, state: Ys, bytesPerToken: Po } = Zs,
    en = NIt(),
    T = Lo[Ys],
    Bt;
  if (z[0] !== Po || z[1] !== O)
    ((Bt = xx(J_t(O, Po))), (z[0] = Po), (z[1] = O), (z[2] = Bt));
  else Bt = z[2];
  let Ro = `${Bt} tok`,
    Ee;
  if (z[3] !== T.color || z[4] !== T.glyph || z[5] !== T.label || z[6] !== ge)
    ((Ee = ge
      ? e(t, { dimColor: !0, children: "\uD83D\uDD12 " + T.label.padEnd(9) })
      : r(t, { color: T.color, children: [T.glyph, " ", T.label.padEnd(9)] })),
      (z[3] = T.color),
      (z[4] = T.glyph),
      (z[5] = T.label),
      (z[6] = ge),
      (z[7] = Ee));
  else Ee = z[7];
  let Kt;
  if (z[8] === p) ((Kt = e(t, { children: "  " })), (z[8] = Kt));
  else Kt = z[8];
  const Do = en ? "suggestion" : void 0;
  let Me;
  if (z[9] !== O.name || z[10] !== Do)
    ((Me = e(t, { color: Do, children: O.name })),
      (z[9] = O.name),
      (z[10] = Do),
      (z[11] = Me));
  else Me = z[11];
  let Be;
  if (z[12] !== O.loadedFrom || z[13] !== O.source)
    ((Be = E(O.source, O.loadedFrom)),
      (z[12] = O.loadedFrom),
      (z[13] = O.source),
      (z[14] = Be));
  else Be = z[14];
  const Fo = ge ? ` \xB7 locked by ${ge.source}` : "";
  let Ke;
  if (z[15] !== Be || z[16] !== Fo || z[17] !== Ro)
    ((Ke = r(t, {
      dimColor: !0,
      children: [" ", "\xB7 ", Be, " \xB7 ", Ro, Fo],
    })),
      (z[15] = Be),
      (z[16] = Fo),
      (z[17] = Ro),
      (z[18] = Ke));
  else Ke = z[18];
  let Nt;
  if (z[19] !== Ee || z[20] !== Me || z[21] !== Ke)
    ((Nt = r(o, { children: [Ee, Kt, Me, Ke] })),
      (z[19] = Ee),
      (z[20] = Me),
      (z[21] = Ke),
      (z[22] = Nt));
  else Nt = z[22];
  return Nt;
}
async function kn(a, c) {
  if (jn()) return e(Oe, { onExit: a });
  return e(Ae, {
    onExit: a,
    commands: c.options.commands,
    bytesPerToken: lf(c.options.mainLoopModel),
  });
}
export { kn as call };

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
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
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
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
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
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { l_ } from "../../01-核心基础设施/共享小工具-未细化/chunk-anjm5g41.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Zr } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
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
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
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
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import { hye, _We } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nj1exzcd.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../Artifact发布-渲染/chunk-stvynqrz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s3mpt973.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wqaxtswb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7m5aewa3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-0mg59v9m.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Hooks钩子/chunk-22aft7vr.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ctr3zhmb.js";
import { Zz } from "../工具Bash-Shell/chunk-qnax4jt7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bhcz98rd.js";
import "./chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-86zcr8cb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-400h8hta.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vwjqzjhr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x93xfjz0.js";
import { Rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-awxpn5er.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../Teammates团队/chunk-2j84y871.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nkg0z9p5.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pvfkaage.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xvyb4e66.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
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
import { s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { p, en } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function A(l) {
  if (!l.task_id) return null;
  return r(t, { dimColor: !0, children: [" ", l.task_id] });
}
function F(l) {
  let T = l.at(-1)?.data;
  return r(o, {
    flexDirection: "column",
    children: [
      T?.taskDescription && r(t, { children: ["\xA0\xA0", T.taskDescription] }),
      r(t, {
        children: [
          "\xA0\xA0\xA0\xA0\xA0Waiting for task",
          " ",
          e(t, {
            dimColor: !0,
            children: e(D, {
              chord: "escape",
              action: "give additional instructions",
              parens: !0,
              format: { keyCase: "lower" },
            }),
          }),
        ],
      }),
    ],
  });
}
var N = m(() =>
  c({
    retrieval_status: s().optional(),
    task: c({
      task_type: s().optional(),
      status: s().optional(),
      description: s().optional(),
      output: s().optional(),
      error: s().optional(),
      prompt: s().optional(),
      result: s().optional(),
      harnessHead: s().optional(),
    })
      .nullable()
      .optional(),
  }),
);
function J(l, g, { verbose: T, theme: y }) {
  return e(O, { content: l, verbose: T, theme: y });
}
function O(V) {
  let b = _(15),
    { content: d, verbose: P, theme: C } = V,
    f = P === void 0 ? !1 : P,
    x = Zr("app:toggleTranscript", "Global", "ctrl+o"),
    R,
    u;
  if (b[0] !== d || b[1] !== x || b[2] !== C || b[3] !== f) {
    u = en;
    bb0: {
      let S = N().safeParse(typeof d === "string" ? xt(d, !1) : d);
      if (!S.success) {
        let i;
        if (b[6] !== d || b[7] !== f)
          ((i =
            typeof d === "string"
              ? e(l_, { content: pt(d), verbose: f })
              : e(xe, {
                  children: e(Rn, { children: "No task output available" }),
                })),
            (b[6] = d),
            (b[7] = f),
            (b[8] = i));
        else i = b[8];
        u = i;
        break bb0;
      }
      let h = S.data;
      if (!h.task) {
        let i;
        if (b[9] === p)
          ((i = e(xe, {
            children: e(Rn, { children: "No task output available" }),
          })),
            (b[9] = i));
        else i = b[9];
        u = i;
        break bb0;
      }
      let { task: a } = h;
      if (a.task_type === "local_bash") {
        let X = {
          stdout: a.output ?? "",
          stderr: "",
          isImage: !1,
          dangerouslyDisableSandbox: !0,
          returnCodeInterpretation: a.error,
        };
        u = e(Zz, { content: X, verbose: f });
        break bb0;
      }
      if (a.task_type === "local_agent") {
        let Y = a.result
          ? ln(
              a.result,
              `
`,
            ) + 1
          : 0;
        if (h.retrieval_status === "success") {
          if (f) {
            u = r(o, {
              flexDirection: "column",
              children: [
                r(t, { children: [a.description, " (", Y, " lines)"] }),
                r(o, {
                  flexDirection: "column",
                  paddingLeft: 2,
                  marginTop: 1,
                  children: [
                    a.prompt && e(hye, { prompt: a.prompt, theme: C, dim: !0 }),
                    a.harnessHead &&
                      e(o, {
                        marginTop: 1,
                        children: e(t, {
                          dimColor: !0,
                          children: a.harnessHead,
                        }),
                      }),
                    a.result &&
                      e(o, {
                        marginTop: 1,
                        children: e(_We, {
                          content: [{ type: "text", text: a.result }],
                          theme: C,
                        }),
                      }),
                    a.error &&
                      r(o, {
                        flexDirection: "column",
                        marginTop: 1,
                        children: [
                          e(t, {
                            color: "error",
                            bold: !0,
                            children: "Error:",
                          }),
                          e(o, {
                            paddingLeft: 2,
                            children: e(t, {
                              color: "error",
                              children: a.error,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
            break bb0;
          }
          let i;
          if (b[10] !== x)
            ((i = e(xe, {
              children: r(t, {
                dimColor: !0,
                children: ["Read output (", x, " to expand)"],
              }),
            })),
              (b[10] = x),
              (b[11] = i));
          else i = b[11];
          u = i;
          break bb0;
        }
        if (h.retrieval_status === "timeout" || a.status === "running") {
          let i;
          if (b[12] === p)
            ((i = e(xe, {
              children: e(t, {
                dimColor: !0,
                children: "Task is still running\u2026",
              }),
            })),
              (b[12] = i));
          else i = b[12];
          u = i;
          break bb0;
        }
        if (h.retrieval_status === "not_ready") {
          let i;
          if (b[13] === p)
            ((i = e(xe, {
              children: e(t, {
                dimColor: !0,
                children: "Task is still running\u2026",
              }),
            })),
              (b[13] = i));
          else i = b[13];
          u = i;
          break bb0;
        }
        let i;
        if (b[14] === p)
          ((i = e(xe, {
            children: e(t, { dimColor: !0, children: "Task not ready" }),
          })),
            (b[14] = i));
        else i = b[14];
        u = i;
        break bb0;
      }
      if (a.task_type === "remote_agent") {
        u = r(o, {
          flexDirection: "column",
          children: [
            r(t, {
              children: ["\xA0\xA0", a.description, " [", a.status, "]"],
            }),
            a.output &&
              f &&
              e(o, {
                paddingLeft: 4,
                marginTop: 1,
                children: e(t, { children: a.output }),
              }),
            !f &&
              a.output &&
              r(t, {
                dimColor: !0,
                children: ["     ", "(", x, " to expand)"],
              }),
          ],
        });
        break bb0;
      }
      R = r(o, {
        flexDirection: "column",
        children: [
          r(t, { children: ["\xA0\xA0", a.description, " [", a.status, "]"] }),
          a.output &&
            e(o, {
              paddingLeft: 4,
              children: e(t, { children: a.output.slice(0, 500) }),
            }),
        ],
      });
    }
    ((b[0] = d), (b[1] = x), (b[2] = C), (b[3] = f), (b[4] = R), (b[5] = u));
  } else ((R = b[4]), (u = b[5]));
  if (u !== en) return u;
  return R;
}
export {
  J as renderToolResultMessage,
  F as renderToolUseProgressMessage,
  A as renderToolUseTag,
};

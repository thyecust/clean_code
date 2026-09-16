// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Ne } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { or } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
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
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { Zr } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Sk, MY } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Skills技能/chunk-sapykxw7.js";
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
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
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
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
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
import "../Skills技能/chunk-1zy5c8mf.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import { ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { qp, ss, Jd } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hrfnq7gz.js";
import { pHe } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tfspgges.js";
import "../权限系统/chunk-hv6z01db.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x93xfjz0.js";
import { Rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
function xo(Wo, Xo) {
  return Wo.name.localeCompare(Xo.name);
}
function f(Io) {
  let mo = _(14),
    {
      commands: g,
      maxHeight: Uo,
      columns: Jo,
      title: j,
      onCancel: oo,
      emptyMessage: W,
    } = Io,
    { headerFocused: eo, focusHeader: to } = Jd(),
    O = Math.max(1, Jo - 10),
    no = Math.max(1, Math.floor((Uo - 10) / 2)),
    Co;
  if (mo[0] !== g || mo[1] !== O) {
    let yo = new Set();
    let w;
    if (mo[3] !== O)
      ((w = (so) => ({
        label: `/${so.name}`,
        value: so.name,
        description: or(MY(so), O, !0),
      })),
        (mo[3] = O),
        (mo[4] = w));
    else w = mo[4];
    Co = g
      .filter((go) => {
        if (yo.has(go.name)) {
          return !1;
        }
        return (yo.add(go.name), !0);
      })
      .sort(xo)
      .map(w);
    ((mo[0] = g), (mo[1] = O), (mo[2] = Co));
  } else Co = mo[2];
  let ao = Co,
    w;
  if (
    mo[5] !== g.length ||
    mo[6] !== W ||
    mo[7] !== to ||
    mo[8] !== eo ||
    mo[9] !== oo ||
    mo[10] !== ao ||
    mo[11] !== j ||
    mo[12] !== no
  )
    ((w = e(o, {
      flexDirection: "column",
      paddingY: 1,
      children:
        g.length === 0 && W
          ? e(Rn, { children: W })
          : r(N, {
              children: [
                e(t, { children: j }),
                e(o, {
                  marginTop: 1,
                  children: e(ve, {
                    options: ao,
                    visibleOptionCount: no,
                    onCancel: oo,
                    disableSelection: !0,
                    hideIndexes: !0,
                    layout: "compact-vertical",
                    onUpFromFirstItem: to,
                    isDisabled: eo,
                  }),
                }),
              ],
            }),
    })),
      (mo[5] = g.length),
      (mo[6] = W),
      (mo[7] = to),
      (mo[8] = eo),
      (mo[9] = oo),
      (mo[10] = ao),
      (mo[11] = j),
      (mo[12] = no),
      (mo[13] = w));
  else w = mo[13];
  return w;
}
var lo = 44;
function D() {
  let X = _(8),
    { rows: Qo } = Se(),
    v = Qo < lo;
  const io = v ? 0 : 1,
    ro = v ? 0 : 1;
  let bo;
  if (X[0] === p)
    ((bo = e(o, {
      flexShrink: 0,
      children: e(t, {
        children:
          "Claude understands your codebase, makes edits with your permission, and executes commands \u2014 right from your terminal.",
      }),
    })),
      (X[0] = bo));
  else bo = X[0];
  let q;
  if (X[1] !== v)
    ((q =
      !v &&
      e(o, {
        children: r(t, {
          dimColor: !0,
          children: [
            "New here? Run ",
            e(t, { color: "suggestion", children: "/powerup" }),
            " to learn the features most people miss.",
          ],
        }),
      })),
      (X[1] = v),
      (X[2] = q));
  else q = X[2];
  let So;
  if (X[3] === p)
    ((So = r(o, {
      flexDirection: "column",
      children: [
        e(o, {
          flexShrink: 0,
          children: e(t, { bold: !0, children: "Shortcuts" }),
        }),
        e(pHe, { gap: 2, fixedWidth: !0 }),
      ],
    })),
      (X[3] = So));
  else So = X[3];
  let No;
  if (X[4] !== io || X[5] !== ro || X[6] !== q)
    ((No = r(o, {
      flexDirection: "column",
      paddingY: io,
      gap: ro,
      children: [bo, q, So],
    })),
      (X[4] = io),
      (X[5] = ro),
      (X[6] = q),
      (X[7] = No));
  else No = X[7];
  return No;
}
function Mo(fo) {
  return (
    fo.type !== "prompt" || fo.source === "builtin" || fo.source === "bundled"
  );
}
var ho = 44;
function Q(he) {
  let n = _(41),
    { onClose: co, commands: x } = he,
    z = Se(),
    { rows: Ce, columns: c } = ks(z),
    d = Ce,
    To;
  if (n[0] !== z.rows)
    ((To = z.rows >= ho && Sk()), (n[0] = z.rows), (n[1] = To));
  else To = n[1];
  let po = To,
    Ho;
  if (n[2] !== co)
    ((Ho = () => co("Help dialog dismissed", { display: "system" })),
      (n[2] = co),
      (n[3] = Ho));
  else Ho = n[3];
  let l = Ho,
    Ro;
  if (n[4] === p) ((Ro = { context: "Help" }), (n[4] = Ro));
  else Ro = n[4];
  Ne("help:dismiss", l, Ro);
  let b = is(l),
    uo = Zr("help:dismiss", "Help", "esc"),
    ko = Mo,
    Oo;
  if (n[5] !== x) {
    let M;
    if (n[7] === p) ((M = (wo) => ko(wo) && !wo.isHidden), (n[7] = M));
    else M = n[7];
    Oo = x.filter(M);
    ((n[5] = x), (n[6] = Oo));
  } else Oo = n[6];
  let B = Oo,
    M;
  if (n[8] !== x) {
    let P;
    if (n[10] === p) ((P = (vo) => !ko(vo) && !vo.isHidden), (n[10] = P));
    else P = n[10];
    M = x.filter(P);
    ((n[8] = x), (n[9] = M));
  } else M = n[9];
  let E = M,
    P;
  if (n[11] === p)
    ((P = e(
      ss,
      { id: "general", title: "General", children: e(D, {}) },
      "general",
    )),
      (n[11] = P));
  else P = n[11];
  let S;
  if (n[12] !== B || n[13] !== l || n[14] !== c || n[15] !== E || n[16] !== d) {
    S = [P];
    let h;
    if (n[18] !== B || n[19] !== l || n[20] !== c || n[21] !== d)
      ((h = e(
        ss,
        {
          id: "commands",
          title: "Commands",
          children: e(f, {
            commands: B,
            maxHeight: d,
            columns: c,
            title: "Browse default commands",
            onCancel: l,
          }),
        },
        "commands",
      )),
        (n[18] = B),
        (n[19] = l),
        (n[20] = c),
        (n[21] = d),
        (n[22] = h));
    else h = n[22];
    S.push(h);
    let L;
    if (n[23] !== l || n[24] !== c || n[25] !== E || n[26] !== d)
      ((L = e(
        ss,
        {
          id: "custom",
          title: "Custom commands",
          children: e(f, {
            commands: E,
            maxHeight: d,
            columns: c,
            title: "Browse custom commands",
            emptyMessage: "No custom commands found",
            onCancel: l,
          }),
        },
        "custom",
      )),
        (n[23] = l),
        (n[24] = c),
        (n[25] = E),
        (n[26] = d),
        (n[27] = L));
    else L = n[27];
    S.push(L);
    ((n[12] = B),
      (n[13] = l),
      (n[14] = c),
      (n[15] = E),
      (n[16] = d),
      (n[17] = S));
  } else S = n[17];
  let h;
  if (n[28] !== S)
    ((h = e(qp, {
      title: "Help",
      color: "professionalBlue",
      defaultTab: "general",
      children: S,
    })),
      (n[28] = S),
      (n[29] = h));
  else h = n[29];
  let L;
  if (n[30] === p)
    ((L = e(o, {
      marginTop: 1,
      flexShrink: 0,
      children: r(t, {
        children: [
          "For more help:",
          " ",
          e(ct, { url: "https://code.claude.com/docs/en/overview" }),
        ],
      }),
    })),
      (n[30] = L));
  else L = n[30];
  let G;
  if (n[31] !== po)
    ((G =
      po &&
      e(o, {
        marginTop: 1,
        flexShrink: 0,
        children: e(t, {
          dimColor: !0,
          children:
            "Something else? Use /feedback to report bugs or request features.",
        }),
      })),
      (n[31] = po),
      (n[32] = G));
  else G = n[32];
  let K;
  if (n[33] !== uo || n[34] !== b.keyName || n[35] !== b.pending)
    ((K = e(o, {
      marginTop: 1,
      flexShrink: 0,
      children: e(t, {
        dimColor: !0,
        children: b.pending
          ? r(N, { children: ["Press ", b.keyName, " again to exit"] })
          : r(t, { italic: !0, children: [uo, " to cancel"] }),
      }),
    })),
      (n[33] = uo),
      (n[34] = b.keyName),
      (n[35] = b.pending),
      (n[36] = K));
  else K = n[36];
  let Do;
  if (n[37] !== K || n[38] !== h || n[39] !== G)
    ((Do = e(o, {
      flexDirection: "column",
      children: r(Qr, { color: "professionalBlue", children: [h, L, G, K] }),
    })),
      (n[37] = K),
      (n[38] = h),
      (n[39] = G),
      (n[40] = Do));
  else Do = n[40];
  return Do;
}
var Te = async (a, { options: { commands: m } }) =>
  e(Q, { commands: m, onClose: a });
export { Te as call };

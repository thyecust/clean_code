// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze, VP } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
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
import { _t, ap, Te } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import { jn, Ks } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Xe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { io, cnt, Xkt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { mS } from "../权限系统/chunk-e4pfvp7x.js";
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
import { o, t, ko, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import { z_ } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { yln } from "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
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
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import {
  Nue,
  BS,
  Hy,
  Zo,
  BO,
  Vc,
  Re,
  ya,
  j_,
  hC,
  VS,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { Td } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
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
import { hr } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
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
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import { ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { js } from "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import { $8 } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import { j_e, HB } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { oat, sat, EOt, AOt, COt, vOt, ROt } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dhg3raay.js";
import "../后台任务-Shell管理/chunk-rh0xpf1w.js";
import "../MCP客户端/chunk-xcbagjx9.js";
import { IS } from "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import { l0e } from "../权限系统/chunk-qjqc5vxm.js";
import { Ur } from "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { o4 } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-awxpn5er.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../后台任务-Shell管理/chunk-nhnqmzyt.js";
import "../Teammates团队/chunk-2j84y871.js";
import { kv } from "../../01-核心基础设施/共享小工具-未细化/chunk-mnzfncps.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import { Ci } from "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
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
import { s, se, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var wt = 5,
  bt = 6,
  qe = 3,
  $e = 5,
  kt = m(() =>
    c({
      response: s().nullable(),
      synthetic: se()
        .optional()
        .transform((i) => i === !0),
      refusal_fallback: c({
        original_model: s(),
        fallback_model: s(),
        content: s(),
      })
        .optional()
        .catch(void 0),
    }),
  );
function ve({
  question: i,
  initialResponse: u,
  initialFallbackNotice: h,
  inFlight: B,
  context: x,
  onDone: b,
}) {
  let R = C(!1),
    w = re(
      (a, A) => {
        ((R.current = !0), b(a, A));
      },
      [b],
    ),
    [T, Ye] = d(u ?? null),
    [Fe, Ze] = d(!1),
    [te, tt] = d(h ?? null),
    [ne, rt] = d(null),
    [nt, de] = d(null),
    [ot, st] = d(0),
    k = x.session.btwHistory,
    [U, it] = d(() =>
      u !== void 0
        ? k.exchanges.slice(0, -1)
        : k.exchanges.filter((a) => a !== B?.landed),
    ),
    z = C(U),
    K = C(!1),
    [Ie, Me] = d(!1),
    P = C(null),
    [Q, Pe] = d(null),
    [Ne] = d(AOt),
    [G, me] = d(null),
    X = C(!1),
    oe = C(B ?? null),
    [De] = d(() => ({})),
    ie = C(u === void 0 ? "pending" : "answered"),
    V = C(null),
    pe = () => {
      ((P.current = null), Pe(null), V.current?.scrollTo(0));
    },
    [ge, Ee] = d(0),
    { rows: at, columns: lt } = ks(Se()),
    ye = jn(),
    J = _t() && !ye;
  (ko(() => st((a) => a + 1), T || ne ? null : 80),
    Un(() => Ee(0), ge ? 2000 : null, [ge]),
    Un(() => me(null), G ? oat : null, [G]));
  let ae = re(() => {
    if (R.current) return;
    switch (ie.current) {
      case "pending":
        if (((X.current = !0), oe.current))
          (k.setInFlight(oe.current), j(k, oe.current, !0));
        break;
      case "answered":
        j(k, De, !0);
        break;
      case "nothing":
        break;
    }
    w(void 0, { display: "skip" });
  }, [k, w, De]);
  function he(a, A = !1) {
    let f = z.current.length,
      S = Math.min(f, $e),
      g = P.current === null ? 0 : f - P.current,
      L = a === "older" ? 1 : -1,
      Y = A ? (g + L + S + 1) % (S + 1) : Math.min(Math.max(g + L, 0), S);
    if (Y === g) return;
    ((P.current = Y === 0 ? null : f - Y),
      Pe(P.current),
      V.current?.scrollTo(0));
  }
  E(() => {
    if (!J) return;
    let a = !fe(),
      A = VP(() => {
        let f = !fe();
        if (a && !f && !K.current) ae();
        a = f;
      });
    if (!a && !K.current) ae();
    return A;
  }, [J, ae]);
  function ct(a) {
    if (K.current) {
      a.preventDefault();
      return;
    }
    let A = P.current !== null ? z.current[P.current]?.response : T;
    if (
      a.key === "escape" ||
      a.key === "return" ||
      a.key === " " ||
      (a.ctrl && (a.key === "c" || a.key === "d"))
    ) {
      (a.preventDefault(), w(void 0, { display: "skip" }));
      return;
    }
    if ((a.key === "[" || a.key === "]") && !a.ctrl && !a.meta) {
      (a.preventDefault(), he(a.key === "[" ? "older" : "newer"));
      return;
    }
    if (a.name === "tab" && !a.ctrl && !a.meta) {
      (a.preventDefault(), he(a.shift ? "newer" : "older", !0));
      return;
    }
    if (a.name === "left" || a.name === "right") {
      if (
        (a.preventDefault(),
        a.shift && !(a.ctrl || a.meta || a.fn || a.superKey))
      ) {
        he(a.name === "left" ? "older" : "newer");
        return;
      }
      if (J && a.name === "left" && !(a.ctrl || a.meta || a.fn || a.superKey)) {
        let f = Date.now(),
          S = COt(Ne, f, a.soloKeypress);
        switch ((vOt(Ne, S, f), ROt(S, f), S)) {
          case "fire":
            (ae(), HB());
            return;
          case "arm":
            me({ text: sat });
            return;
          case "attach-arm":
            me({ text: EOt });
            return;
          case "absorb":
          case "attach-absorb":
          case "reject":
            return;
        }
      }
      return;
    }
    if (a.key === "x" && !a.ctrl && !a.meta && z.current.length > 0) {
      a.preventDefault();
      let f = new Set(z.current);
      (k.replace(k.exchanges.filter((S) => !f.has(S))),
        (z.current = []),
        it([]),
        pe());
      return;
    }
    if (a.key === "c" && !a.ctrl && !a.meta && A) {
      (a.preventDefault(),
        z_(Td(A)).then((f) => {
          if (f) process.stdout.write(f);
        }),
        Ee((f) => f + 1));
      return;
    }
    if (
      a.key === "f" &&
      !a.ctrl &&
      !a.meta &&
      T &&
      !Fe &&
      !ye &&
      P.current === null
    ) {
      (a.preventDefault(), (K.current = !0), Me(!0));
      let f = [
          Re({ content: i }),
          Vc({
            content: te
              ? `\u26A0 ${te}

${T}`
              : T,
          }),
        ],
        S = () => {
          ((K.current = !1), Me(!1));
        };
      if (!Ci())
        Promise.all([
          import("./spawnForkFromDirective.s7gf5e5r.js"),
          import("../权限系统/PERMISSION_CHECK_CRASHED_REASON.csj1td3d.js"),
        ])
          .then(
            ([{ spawnForkFromDirective: g }, { hasPermissionsToUseTool: L }]) =>
              g(i, x, x.canUseTool ?? L, f, "btw"),
          )
          .then((g) => {
            if (g)
              w(`${mS} forked ${g.name} (${g.agentId.slice(-4)})`, {
                display: "system",
              });
            else
              (S(),
                w("Cannot fork before the first conversation turn", {
                  display: "system",
                }));
          })
          .catch((g) => {
            (S(), w(`Failed to fork: ${l(g)}`));
          });
      else
        import("../会话-历史-恢复/branch-cmd.36vyfzw0.js")
          .then(({ branchAndResume: g }) =>
            g(x, w, {
              customTitle: Be(`btw: ${i}`, 80),
              extraMessages: f,
            }).then((L) => {
              if (!L) S();
            }),
          )
          .catch((g) => {
            (S(), w(`Failed to branch conversation: ${l(g)}`));
          });
      return;
    }
    if (a.key === "up" || (a.ctrl && a.key === "p"))
      (a.preventDefault(), V.current?.scrollBy(-qe));
    if (a.key === "down" || (a.ctrl && a.key === "n"))
      (a.preventDefault(), V.current?.scrollBy(qe));
  }
  E(() => {
    if (u !== void 0) return;
    let a = hr(),
      A = k.inFlight,
      f = B ?? (A?.question === i ? A : void 0),
      S = () => {},
      g = f ?? {
        question: i,
        settled: new Promise((y) => {
          S = y;
        }),
        abort: () => a.abort(),
      };
    if (
      ((oe.current = g),
      (g.onRetry = de),
      f?.retry && f.retry.retryAt > Date.now())
    )
      de(f.retry);
    if (X.current) (k.setInFlight(g), j(k, g, !0));
    n(
      `[btw] panel mounted: ${f ? "adopting the running side question" : "asking"}`,
    );
    async function L() {
      let y = jn();
      if (y && !Ks())
        return {
          error: y.viewerOnly
            ? "Side questions aren't available when viewing a session read-only"
            : "This remote connection doesn't support side questions",
        };
      let v = y
        ? kv(
            "side_question",
            kt(),
            await y.sendControlRequest(
              { subtype: "side_question", question: i },
              {
                signal: a.signal,
                onProgress: (be) => {
                  if (a.signal.aborted) return;
                  let ke = Ct(be);
                  if (ke) ((g.retry = ke), g.onRetry?.(ke));
                },
              },
            ),
          )
        : await l0e({
            question: i,
            cacheSafeParams: await Je(x),
            parentController: a,
            onRetry: (be) => {
              if (a.signal.aborted) return;
              Qe(g, be);
            },
          });
      if (a.signal.aborted) return null;
      if (v === null)
        return {
          error: "The remote session sent a reply this version can't display",
        };
      if (!v.response) return xe(v.response);
      let Oe =
        !y && "refusalFallback" in v
          ? v.refusalFallback
          : "refusal_fallback" in v &&
              v.refusal_fallback &&
              typeof v.refusal_fallback.content === "string"
            ? {
                originalModel: v.refusal_fallback.original_model,
                fallbackModel: v.refusal_fallback.fallback_model,
                content: io(v.refusal_fallback.content, {
                  drop: Xkt,
                  maxCodeUnits: cnt,
                }),
              }
            : void 0;
      if (y && !v.synthetic)
        x.session.btwHistory.append(i, v.response, Oe?.content);
      return xe(v.response, v.synthetic, Oe?.content);
    }
    async function Y() {
      let y;
      if (f) ((y = await f.settled), k.clearInFlight(f));
      else {
        try {
          y = await L();
        } catch (v) {
          y = a.signal.aborted ? null : Ge(v);
        }
        if (
          (n(
            `[btw] side question settled: ${y === null ? "cancelled" : "error" in y ? "error" : "answer"}${X.current ? " (panel had stepped aside)" : ""}`,
          ),
          y !== null && "response" in y && !y.synthetic)
        )
          g.landed = k.exchanges.at(-1);
        (S(y), k.clearInFlight(g));
      }
      if (y === null) return;
      if ("error" in y) {
        dt(y.error);
        return;
      }
      if ((pe(), Ye(y.response), Ze(y.synthetic), y.fallbackNotice))
        tt(y.fallbackNotice);
      if (y.synthetic) He("came back synthetic");
      else ie.current = "answered";
    }
    function He(y) {
      if (((ie.current = "nothing"), X.current))
        (_e(k, g),
          n(`[btw] side question ${y} after the panel stepped aside`, {
            level: "warn",
          }));
    }
    function dt(y) {
      (He("failed"), pe(), rt(y));
    }
    return (
      Y(),
      () => {
        if (g.onRetry === de) g.onRetry = void 0;
        if (X.current) return;
        if (R.current) {
          (g.abort(), k.clearInFlight(g), _e(k, g));
          return;
        }
        if (ie.current === "pending")
          (n("[btw] panel torn down undismissed; question handed on"),
            k.setInFlight(g));
      }
    );
  }, [i, x, k, u, B]);
  let we = U.slice(-$e),
    le = U.length - we.length,
    M = Q !== null ? U[Q] : null,
    ut = we.length + (le > 0 ? 1 : 0),
    Le = Math.max(20, lt - 7),
    ft = Math.max(5, at - wt - bt - ut);
  return r(o, {
    flexDirection: "column",
    paddingLeft: 2,
    marginTop: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: ct,
    children: [
      le > 0 && r(t, { dimColor: !0, children: ["(+", le, " earlier /btw)"] }),
      we.map((a, A) => {
        let f = le + A;
        return r(
          t,
          {
            dimColor: Q !== f,
            bold: Q === f,
            children: ["/btw ", Be(a.question, Le)],
          },
          f,
        );
      }),
      r(t, {
        children: [
          r(t, {
            color: M ? void 0 : "warning",
            bold: !M,
            dimColor: !!M,
            children: ["/btw", " "],
          }),
          e(t, { dimColor: !0, children: Be(i, Le) }),
        ],
      }),
      e(o, {
        marginTop: 1,
        marginLeft: 2,
        maxHeight: ft,
        children: e(IS, {
          ref: V,
          flexDirection: "column",
          flexGrow: 1,
          stickyScroll: !1,
          children: M
            ? r(N, {
                children: [
                  M.fallbackNotice && e(Ae, { notice: M.fallbackNotice }),
                  e(js, { children: M.response }),
                ],
              })
            : ne
              ? e(Ur, { error: ne })
              : T
                ? r(N, {
                    children: [
                      te && e(Ae, { notice: te }),
                      e(js, { children: T }),
                    ],
                  })
                : e(Ve, { frame: ot, retry: nt }),
        }),
      }),
      r(o, {
        marginTop: 1,
        children: [
          Ie
            ? e(t, { dimColor: !0, children: "Forking\u2026" })
            : G
              ? e(t, { dimColor: !0, children: G.text })
              : r(t, {
                  dimColor: !0,
                  children: [
                    r(ue, {
                      children: [
                        U.length > 0
                          ? e(D, {
                              chord: ["shift+left", "shift+right"],
                              format: {
                                modCase: "glyph",
                                modSep: "",
                                arrowSep: "/",
                              },
                              action: "browse",
                            })
                          : (M || T || ne) &&
                            e(D, { chord: ["up", "down"], action: "scroll" }),
                        (M || T) &&
                          (ge > 0
                            ? e(t, {
                                color: "success",
                                children: "Copied to clipboard",
                              })
                            : e(D, { chord: "c", action: "copy" })),
                        T &&
                          !Fe &&
                          !ye &&
                          Q === null &&
                          e(D, { chord: "f", action: "fork" }),
                        U.length > 0 &&
                          e(D, { chord: "x", action: "clear history" }),
                        e(D, { chord: "escape", action: "close" }),
                      ],
                    }),
                    J && " \xB7 ",
                  ],
                }),
          !Ie && !G && J && e(j_e, {}),
        ],
      }),
    ],
  });
}
function Qe(i, u) {
  let h = { ...u, retryAt: Date.now() + u.retryInMs };
  ((i.retry = h), i.onRetry?.(h));
}
function xe(i, u, h) {
  if (!i) return { error: "No response received" };
  return { response: i, synthetic: u ?? !1, ...(h && { fallbackNotice: h }) };
}
function Ge(i) {
  return { error: l(i) || "Failed to get response" };
}
function fe() {
  return ap() || (_t() && yln());
}
function Rt(i) {
  i.clearPendingReopen();
  for (let u of i.pendingBesidesTop()) j(i, u);
  if (i.reopenNow()) {
    Hy(ee);
    return;
  }
  if (Nue().some(ee)) return;
  BS({ ...ce, agentId: ze() });
}
function _e(i, u) {
  if ((i.clearPendingReopen(u), !i.inFlight && i.exchanges.length === 0))
    Hy(ee);
}
var ce = {
  value: "/btw",
  mode: "task-notification",
  priority: "later",
  origin: { kind: "task-notification" },
};
function ee(i) {
  return (
    i.value === ce.value &&
    i.mode === ce.mode &&
    i.origin?.kind === ce.origin.kind
  );
}
function j(i, u, h = fe()) {
  if (
    (i.armReopen(u, () =>
      VP(() => {
        if (yln()) i.reopenAway = !0;
        if (ap()) {
          i.reopenAway = !0;
          return;
        }
        if (i.reopenAway) ((i.reopenAway = !1), queueMicrotask(() => Rt(i)));
      }),
    ),
    h)
  )
    i.reopenAway = !0;
}
function Ae(pr) {
  let mt = _(3),
    { notice: Ue } = pr,
    pt;
  if (mt[0] === p)
    ((pt = e(t, {
      color: "warning",
      bold: !0,
      children: e(et, { status: "warning", withSpace: !0 }),
    })),
      (mt[0] = pt));
  else pt = mt[0];
  let gt;
  if (mt[1] !== Ue)
    ((gt = r(o, {
      marginBottom: 1,
      children: [pt, e($8, { color: "warning", bold: !0, children: Ue })],
    })),
      (mt[1] = Ue),
      (mt[2] = gt));
  else gt = mt[2];
  return gt;
}
function Be(i, u) {
  return Xe(i.replace(/\s+/g, " ").trim(), u);
}
function Ct(i) {
  if (
    i.status !== "api_retry" ||
    typeof i.attempt !== "number" ||
    typeof i.max_retries !== "number" ||
    typeof i.retry_delay_ms !== "number"
  )
    return null;
  return {
    retryAttempt: i.attempt,
    maxRetries: i.max_retries,
    retryInMs: i.retry_delay_ms,
    status: i.error_status ?? void 0,
    retryAt: Date.now() + i.retry_delay_ms,
  };
}
function Ve(gr) {
  let O = _(19),
    { frame: Z, retry: I } = gr;
  if (!I) {
    let H;
    if (O[0] !== Z)
      ((H = e(o4, { frame: Z, messageColor: "warning" })),
        (O[0] = Z),
        (O[1] = H));
    else H = O[1];
    let W;
    if (O[2] === p)
      ((W = e(t, { color: "warning", children: "Answering\u2026" })),
        (O[2] = W));
    else W = O[2];
    let q;
    if (O[3] !== H) ((q = r(o, { children: [H, W] })), (O[3] = H), (O[4] = q));
    else q = O[4];
    return q;
  }
  let We = Math.max(0, Math.ceil((I.retryAt - Date.now()) / 1000)),
    H;
  if (O[5] !== Z)
    ((H = e(o4, { frame: Z, messageColor: "warning" })),
      (O[5] = Z),
      (O[6] = H));
  else H = O[6];
  let W;
  if (O[7] !== I.status) ((W = je(I.status)), (O[7] = I.status), (O[8] = W));
  else W = O[8];
  let q;
  if (O[9] !== W)
    ((q = e(t, { color: "warning", children: W })), (O[9] = W), (O[10] = q));
  else q = O[10];
  let Ce;
  if (O[11] !== We || O[12] !== I.maxRetries || O[13] !== I.retryAttempt)
    ((Ce = r(t, {
      dimColor: !0,
      children: [
        " \xB7 retrying in ",
        We,
        "s \xB7 attempt ",
        I.retryAttempt,
        "/",
        I.maxRetries,
      ],
    })),
      (O[11] = We),
      (O[12] = I.maxRetries),
      (O[13] = I.retryAttempt),
      (O[14] = Ce));
  else Ce = O[14];
  let yt;
  if (O[15] !== H || O[16] !== q || O[17] !== Ce)
    ((yt = r(o, { children: [H, q, Ce] })),
      (O[15] = H),
      (O[16] = q),
      (O[17] = Ce),
      (O[18] = yt));
  else yt = O[18];
  return yt;
}
function je(i) {
  switch (i) {
    case 429:
      return "Rate limited";
    case 529:
      return "API overloaded";
    case 401:
    case 403:
      return "Authentication failed";
    default:
      return "API error";
  }
}
function St(i) {
  let u = i.at(-1);
  if (u?.type === "assistant" && u.message.stop_reason === null)
    return i.slice(0, -1);
  return i;
}
async function Je(i) {
  let u = ya(St(i.messages)),
    h = BO();
  if (h)
    return {
      systemPrompt: h.systemPrompt,
      userContext: h.userContext,
      systemContext: h.systemContext,
      toolUseContext: i,
      forkContextMessages: u,
      advisorModel: i.getAdvisorSetting(),
    };
  let [B, x, b] = await Promise.all([
    VS(i.options.tools, i.options.mainLoopModel, []),
    hC(i.session, i.storageV5, i.credentials),
    j_(i.session, i.options.cacheBreakerPhrase),
  ]);
  return {
    systemPrompt: Zo(B),
    userContext: x,
    systemContext: b,
    toolUseContext: i,
    forkContextMessages: u,
    advisorModel: i.getAdvisorSetting(),
  };
}
async function dr(i, u, h) {
  let B = h?.trim();
  if (!B) {
    let b = u.session.btwHistory,
      R = b.inFlight,
      w = b.exchanges.at(-1);
    if ((R || w) && Ke())
      return (j(b, w ?? R ?? b), i(void 0, { display: "skip" }), null);
    if ((Hy(ee), R))
      return e(ve, {
        question: R.question,
        inFlight: R,
        context: u,
        onDone: i,
      });
    if (!w)
      return (i("Usage: /btw <your question>", { display: "system" }), null);
    return e(ve, {
      question: w.question,
      initialResponse: w.response,
      initialFallbackNotice: w.fallbackNotice,
      context: u,
      onDone: i,
    });
  }
  if (
    (await Te((b) => ({ ...b, btwUseCount: b.btwUseCount + 1 }), u.storageV5),
    Ke())
  )
    return (vt(B, u), i(void 0, { display: "skip" }), null);
  let x = u.session.btwHistory.inFlight;
  if (x === null || x.question === B) Hy(ee);
  return e(ve, { question: B, context: u, onDone: i });
}
function Ke() {
  return jn() === null && fe();
}
async function vt(i, u) {
  let h = u.session.btwHistory,
    B = hr(),
    x = () => {},
    b = {
      question: i,
      settled: new Promise((w) => {
        x = w;
      }),
      abort: () => B.abort(),
    };
  (h.setInFlight(b), j(h, b));
  let R;
  try {
    let w = await l0e({
      question: i,
      cacheSafeParams: await Je(u),
      parentController: B,
      onRetry: (T) => Qe(b, T),
    });
    R = B.signal.aborted
      ? null
      : xe(w.response, w.synthetic, w.refusalFallback?.content);
  } catch (w) {
    R = B.signal.aborted ? null : Ge(w);
  }
  if (R !== null && "response" in R && !R.synthetic)
    b.landed = h.exchanges.at(-1);
  if ((x(R), h.clearInFlight(b), b.landed)) return;
  (_e(h, b),
    n(
      `[btw] unwatched side question ${R === null ? "was cancelled" : "error" in R ? "failed" : "came back synthetic"}`,
      { level: "warn" },
    ));
}
export { dr as call };

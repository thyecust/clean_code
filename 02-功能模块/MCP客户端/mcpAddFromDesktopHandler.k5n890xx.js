// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { zm } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { B1, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oy, ee, es, FZe } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R, l, A, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { S, u, Gf } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { Kn } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { qs } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { ki, wn } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Lq, qge } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
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
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { Iet, ye, Jt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
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
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { cn } from "../状态栏-主题/chunk-w5jaj6kg.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t, J0 } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import {
  $v,
  xn,
  wI,
  ow,
  cw,
  qLe,
  zLe,
  ZTe,
  uj,
  KM,
  MWt,
  Jde,
  N3,
  mY,
  nd,
  wyt,
  vE,
  Zm,
  Uo,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "./chunk-3kmsshb6.js";
import { Aa } from "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import { Uu } from "../Skills技能/chunk-sapykxw7.js";
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
import { QSt } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import "./chunk-g4gdwpa0.js";
import "../Hooks钩子/chunk-22aft7vr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../工具TodoWrite-Tasks/chunk-5a7p8d2p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vz37aa8z.js";
import "../Workflow编排/chunk-va9cgbfs.js";
import "../Artifact发布-渲染/chunk-5gz5xvw9.js";
import "./chunk-xcbagjx9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q8r1ycrr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s1hpfa12.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cj5z5g82.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { lE } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import { i9e } from "./chunk-rxp6fm7a.js";
import { kF } from "../../01-核心基础设施/共享小工具-未细化/chunk-p7jm635c.js";
import "../../01-核心基础设施/设置-配置/chunk-1pbaa558.js";
import { V0, Fz, cJt } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { Gb, bv } from "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import { rM, un, di, dO } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import { HUn } from "./chunk-35zjqw7h.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Mtn, zat } from "../../01-核心基础设施/共享小工具-未细化/chunk-k4m00mjj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../权限系统/chunk-2ttypdwq.js";
import "../后台任务-Shell管理/chunk-nhnqmzyt.js";
import "../Teammates团队/chunk-2j84y871.js";
import "../插件系统/chunk-5ztq0v89.js";
import { ut } from "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "./chunk-k2gczbnj.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../Workflow编排/chunk-hdhsmge4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
import { uze, Dbe } from "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { Dn, kn, E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import "./chunk-0mwqsv0r.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/chunk-5kyac4wk.js";
import "./chunk-tznd4407.js";
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
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { stat as it } from "fs/promises";
F();
import { cwd as ct } from "process";
F();
function ot(Wt) {
  n(`Failed to read existing MCP configs for Desktop import: ${l(Wt)}`, {
    level: "error",
  });
}
function st(Kt) {
  return Kt !== null;
}
function he(kt) {
  let T = _(50),
    { servers: V, scope: W, onDone: ce } = kt,
    qe;
  if (T[0] !== V) ((qe = Object.keys(V)), (T[0] = V), (T[1] = qe));
  else qe = T[1];
  let I = qe,
    Ge;
  if (T[2] === p) ((Ge = {}), (T[2] = Ge));
  else Ge = T[2];
  let [z, At] = d(Ge),
    [re] = cn(),
    { storageV5: G } = _e(),
    Je,
    Ve;
  if (T[3] !== G)
    ((Je = () => {
      vE({ storageV5: G })
        .then((ae) => {
          let { servers: Tt } = ae;
          return At(Tt);
        })
        .catch(ot);
    }),
      (Ve = [G]),
      (T[3] = G),
      (T[4] = Je),
      (T[5] = Ve));
  else ((Je = T[4]), (Ve = T[5]));
  E(Je, Ve);
  let ae;
  if (T[6] !== z || T[7] !== I) {
    let oe;
    if (T[9] !== z) ((oe = (Ft) => z[Ft] !== void 0), (T[9] = z), (T[10] = oe));
    else oe = T[10];
    ae = I.filter(oe);
    ((T[6] = z), (T[7] = I), (T[8] = ae));
  } else ae = T[8];
  let q = ae,
    oe;
  if (T[11] !== z)
    ((oe = function se(le) {
      if (z[le] === void 0) {
        return le;
      }
      let $e = 1;
      while (z[`${le}_${$e}`] !== void 0) $e++;
      return `${le}_${$e}`;
    }),
      (T[11] = z),
      (T[12] = oe));
  else oe = T[12];
  let se = oe,
    We;
  if (T[13] !== se || T[14] !== W || T[15] !== G)
    ((We = async function ne(Ke, Nt) {
      try {
        return (await KM(se(Ke), Nt, W, G), null);
      } catch (K) {
        let Ot = K;
        return { serverName: Ke, reason: l(Ot) };
      }
    }),
      (T[13] = se),
      (T[14] = W),
      (T[15] = G),
      (T[16] = We));
  else We = T[16];
  let ne = We,
    ie,
    X;
  if (
    T[17] !== ne ||
    T[18] !== ce ||
    T[19] !== W ||
    T[20] !== V ||
    T[21] !== re
  ) {
    let Re = async function Re(Dt) {
      let Qe = await Dt.flatMap((Xe) => {
        let Ye = V[Xe];
        return Ye ? [{ serverName: Xe, serverConfig: Ye }] : [];
      }).reduce(async (It, K) => {
        let { serverName: Bt, serverConfig: Ht } = K;
        return [...(await It), await ne(Bt, Ht)];
      }, Promise.resolve([]));
      let Ze = Qe.filter(st);
      ie({ importedCount: Qe.length - Ze.length, failures: Ze });
    };
    X = function X(Lt) {
      Re(Lt).catch((Ut) => {
        (Kn(`
${ut("error", re)(l(Ut))}
`),
          ce(),
          xn());
      });
    };
    ie = (Ee) => {
      let { importedCount: ke, failures: zt } = Ee;
      if (ke > 0)
        Kn(`
${ut("success", re)(`Successfully imported ${ke} MCP ${x(ke, "server")} to ${W} config.`)}
`);
      else
        Kn(`
No servers were imported.`);
      (zt.forEach((pe) => {
        let { serverName: qt, reason: Gt } = pe;
        Kn(`
${ut("error", re)(`Could not import ${qt}: ${Gt}`)}
`);
      }),
        ce(),
        xn());
    };
    ((T[17] = ne),
      (T[18] = ce),
      (T[19] = W),
      (T[20] = V),
      (T[21] = re),
      (T[22] = ie),
      (T[23] = X));
  } else ((ie = T[22]), (X = T[23]));
  let K;
  if (T[24] !== ie)
    ((K = () => {
      ie({ importedCount: 0, failures: [] });
    }),
      (T[24] = ie),
      (T[25] = K));
  else K = T[25];
  let Q = K;
  const Ee = I.length;
  let pe;
  if (T[26] !== I.length)
    ((pe = x(I.length, "server")), (T[26] = I.length), (T[27] = pe));
  else pe = T[27];
  const xe = `Found ${Ee} MCP ${pe} in Claude Desktop.`;
  let fe;
  if (T[28] !== q.length)
    ((fe =
      q.length > 0 &&
      e(t, {
        color: "warning",
        children:
          "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix.",
      })),
      (T[28] = q.length),
      (T[29] = fe));
  else fe = T[29];
  let et;
  if (T[30] === p)
    ((et = e(t, { children: "Please select the servers you want to import:" })),
      (T[30] = et));
  else et = T[30];
  let me, ge;
  if (T[31] !== q || T[32] !== I) {
    me = I.map((Ae) => ({
      label: `${Ae}${q.includes(Ae) ? " (already exists)" : ""}`,
      value: Ae,
    }));
    let J;
    if (T[35] !== q) ((J = (Vt) => !q.includes(Vt)), (T[35] = q), (T[36] = J));
    else J = T[36];
    ge = I.filter(J);
    ((T[31] = q), (T[32] = I), (T[33] = me), (T[34] = ge));
  } else ((me = T[33]), (ge = T[34]));
  let J;
  if (T[37] !== Q || T[38] !== X || T[39] !== me || T[40] !== ge)
    ((J = e(lE, {
      options: me,
      defaultValue: ge,
      onSubmit: X,
      onCancel: Q,
      hideIndexes: !0,
    })),
      (T[37] = Q),
      (T[38] = X),
      (T[39] = me),
      (T[40] = ge),
      (T[41] = J));
  else J = T[41];
  let ve;
  if (T[42] !== Q || T[43] !== xe || T[44] !== fe || T[45] !== J)
    ((ve = r(de, {
      title: "Import MCP Servers from Claude Desktop",
      subtitle: xe,
      color: "success",
      onCancel: Q,
      hideInputGuide: !0,
      children: [fe, et, J],
    })),
      (T[42] = Q),
      (T[43] = xe),
      (T[44] = fe),
      (T[45] = J),
      (T[46] = ve));
  else ve = T[46];
  let tt;
  if (T[47] === p)
    ((tt = e(o, {
      paddingX: 1,
      children: e(t, {
        dimColor: !0,
        italic: !0,
        children: r(ue, {
          children: [
            e(D, { chord: "space", action: "select" }),
            e(D, { chord: "enter", action: "confirm" }),
            e(je, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        }),
      }),
    })),
      (T[47] = tt));
  else tt = T[47];
  let rt;
  if (T[48] !== ve)
    ((rt = r(N, { children: [ve, tt] })), (T[48] = ve), (T[49] = rt));
  else rt = T[49];
  return rt;
}
function dt(Xr) {
  return Xr !== null;
}
function Pe() {
  return import.meta.require("./mcpClientModule.4cyej0np.js");
}
function Z() {
  return Pe().mcpAuthModule();
}
function De() {
  return Pe().mcpClientModule();
}
function at() {
  return Pe().mcpIsListAuthErrorModule();
}
function lt(h) {
  let s = h?.issues;
  if (Array.isArray(s) && s.length > 0) {
    let v = s[0],
      a = typeof v.message === "string" ? v.message : l(h),
      f =
        Array.isArray(v.path) && v.path.length > 0
          ? ` (at ${v.path.join(".")})`
          : "",
      m = s.length > 1 ? ` (+${s.length - 1} more)` : "";
    return wI(a + f + m);
  }
  return wI(l(h));
}
async function Ie(h, s, v) {
  try {
    let a = await De().connectToServer(h, s, void 0, v);
    if (a.type === "connected") {
      if (a.capabilities.tools)
        try {
          await QSt(a, { timeout: 5000 });
        } catch (f) {
          if (at().isListAuthError(f))
            return { status: "! Needs authentication" };
          return {
            status: "! Connected \xB7 tools fetch failed",
            issue: lt(f),
          };
        }
      return { status: `${L.tick} Connected` };
    } else if (a.type === "needs-auth")
      return { status: "! Needs authentication" };
    else if (ow(a)) return { status: "- Not configured" };
    else if (a.type === "failed") {
      let f = HUn(a);
      return {
        status: `${L.cross} Failed to connect`,
        ...(f !== "" && { issue: f }),
      };
    } else return { status: `${L.cross} Failed to connect` };
  } catch (a) {
    return { status: `${L.cross} Connection error` };
  }
}
async function Br(
  { debug: h, verbose: s, transport: v, port: a, resultFormat: f },
  m,
) {
  let y = ct(),
    i = "stdio",
    k = "raw";
  await qs("tengu_mcp_start", { transport: u("stdio") });
  let M = 0;
  try {
    await it(y);
  } catch (g) {
    if (Rt(g))
      return (
        await wn("cli_mcp_serve", "cli_mcp_serve_cwd_missing"),
        di(`Error: Directory ${y} does not exist`)
      );
    throw g;
  }
  try {
    let { setup: g } = await import("../../03-入口与运行时/CLI入口-Commander/setup.sbdmcpy2.js");
    await g(y, "default", !1, !1, void 0, !1, void 0, void 0, void 0, m);
    let { SandboxManager: C } = await import("./SandboxManager.creds2pz.js"),
      O = C.getSandboxUnavailableReason();
    if (O) {
      if (C.isSandboxRequired())
        return (
          await wn(
            "cli_mcp_serve",
            "cli_mcp_serve_sandbox_required_unavailable",
          ),
          di(
            `Error: sandbox required but unavailable: ${O}
` +
              "  sandbox.failIfUnavailable is set \u2014 refusing to start without a working sandbox.",
          )
        );
      process.stderr.write(`
\u26A0 Sandbox disabled: ${O}
  Commands will run WITHOUT sandboxing. Network and filesystem restrictions will NOT be enforced.

`);
    } else {
      if (C.canMaskCredentialWarningFire()) C.checkDependencies();
      let j = C.getMaskCredentialWarning();
      if (j)
        process.stderr.write(`
\u26A0 ${j}

`);
    }
    {
      let { startMCPServer: j } = await import("../Teammates团队/startMCPServer.404m9js2.js");
      await j(y, h ?? !1, s ?? !1, m, "raw");
    }
    await ki("cli_mcp_serve");
  } catch (g) {
    return (
      await wn("cli_mcp_serve", "cli_mcp_serve_start_failed"),
      di(`Error: Failed to start MCP server: ${g}`)
    );
  }
}
async function Hr(h, s, v, a) {
  let f = null,
    m = (M) => {
      let g = N3.find((C) => C === M);
      f = g ? (nd(g).servers[s] ?? null) : null;
    },
    y = async () => {
      if (f && (f.type === "sse" || f.type === "http"))
        try {
          (await Z().clearServerTokensFromLocalStorage(s, f),
            await Z().clearMcpClientConfig(s, f));
        } catch (M) {
          n(`mcp remove: secure-storage cleanup for "${s}" failed: ${l(M)}`, {
            level: "warn",
          });
        }
    },
    i;
  try {
    let M = oy(s, wyt(s) ?? void 0);
    if (v.scope) {
      let g = zLe(v.scope);
      (await qs("tengu_mcp_delete", { name: Gf(s, M), scope: u(g) }),
        m(g),
        await MWt(s, g, a),
        await y(),
        (i = g));
    } else {
      let g = es(),
        C = ee(),
        O = await Jde().catch((c) => {
          if (c instanceof R || A(c) !== void 0) throw c;
          return {};
        }),
        j = Object.hasOwn(O, s),
        b = [];
      if (g.mcpServers?.[s]) b.push("local");
      if (j) b.push("project");
      if (C.mcpServers?.[s]) b.push("user");
      if (b.length === 0) {
        await V0({ hasDynamicMcpConfig: !1 });
        let c = wyt(s)?.scope;
        if (c && mY(c))
          return di(
            `MCP server "${s}" is provided by your organization (${c === "managed" ? "managed settings" : cw("enterprise")}) and cannot be removed locally.`,
          );
        let w = [
          ...Object.keys(g.mcpServers ?? {}),
          ...Object.keys(O),
          ...Object.keys(C.mcpServers ?? {}),
        ];
        return (
          await wn("cli_mcp_remove", "cli_mcp_remove_not_found"),
          di(Mtn(s, Y(w)))
        );
      } else if (b.length === 1) {
        let c = b[0];
        (await qs("tengu_mcp_delete", { name: Gf(s, M), scope: u(c) }),
          m(c),
          await MWt(s, c, a),
          await y(),
          (i = c));
      } else {
        (process.stderr.write(`MCP server "${s}" exists in multiple scopes:
`),
          b.forEach((w) => {
            process.stderr.write(`  - ${qLe(w)} (${cw(w)})
`);
          }));
        let c = b
          .map((w) => Aa("mcp remove", s, `-s ${w}`))
          .filter((w) => w !== null);
        if (c.length > 0)
          (process.stderr.write(`
To remove from a specific scope, use:
`),
            c.forEach((w) =>
              process.stderr.write(`  ${w}
`),
            ));
        else
          process.stderr.write(`
Specify a scope with -s to remove from a specific one.
`);
        return (
          await wn("cli_mcp_remove", "cli_mcp_remove_ambiguous_scope"),
          di()
        );
      }
    }
  } catch (M) {
    return (await wn("cli_mcp_remove", "cli_mcp_remove_failed"), di(l(M)));
  }
  await ki("cli_mcp_remove");
  let k = v.scope ? s : `"${s}"`;
  await bv(
    h,
    r(o, {
      flexDirection: "column",
      children: [
        r(t, { children: ["Removed MCP server ", k, " from ", i, " config"] }),
        r(t, { children: ["File modified: ", cw(i)] }),
      ],
    }),
  );
}
function Be(h) {
  let s = new Map(),
    v = {};
  for (let [a, f] of Object.entries(h))
    if (
      f.scope === "local" ||
      f.scope === "user" ||
      f.scope === "project" ||
      f.scope === "enterprise" ||
      f.scope === "managed"
    ) {
      let m = s.get(f.scope);
      if (!m)
        ((m = nd(f.scope, { expandVars: !1 }).servers), s.set(f.scope, m));
      let y = m[a] ?? f;
      if (y.scope !== "managed") {
        v[a] = y;
        continue;
      }
      let i = B1(y);
      v[a] = "url" in i ? Fz(i, y.scope) : i;
    } else v[a] = B1(f);
  return v;
}
function Ne({ name: h, server: s, status: v, issue: a }) {
  let f = a ? `${v} \u2014 ${a}` : v;
  if (s.type === "sse") return `${h}: ${s.url} (SSE) - ${f}`;
  if (s.type === "http") return `${h}: ${s.url} (HTTP) - ${f}`;
  if (s.type === "claudeai-proxy") return `${h}: ${s.url} - ${f}`;
  if (!s.type || s.type === "stdio") {
    let m = Array.isArray(s.args) ? s.args : [];
    return `${h}: ${s.command} ${m.join(" ")} - ${f}`;
  }
  return null;
}
function He(Vr) {
  let Fe = _(10),
    { promise: Wr } = Vr,
    Te = kn(Wr),
    we,
    Ce,
    be;
  if (Fe[0] !== Te) {
    let Kr = Te.map(Ne).filter(dt);
    Ce = Gb;
    we = t;
    be = Kr.join(`
`);
    ((Fe[0] = Te), (Fe[1] = we), (Fe[2] = Ce), (Fe[3] = be));
  } else ((we = Fe[1]), (Ce = Fe[2]), (be = Fe[3]));
  let Me;
  if (Fe[4] !== we || Fe[5] !== be)
    ((Me = e(we, { children: be })), (Fe[4] = we), (Fe[5] = be), (Fe[6] = Me));
  else Me = Fe[6];
  let nt;
  if (Fe[7] !== Ce || Fe[8] !== Me)
    ((nt = e(Ce, { children: Me })), (Fe[7] = Ce), (Fe[8] = Me), (Fe[9] = nt));
  else nt = Fe[9];
  return nt;
}
var Le = "\u23F8 Pending approval (run `claude` to approve)",
  pt = `${L.cross} Rejected (see disabledMcpjsonServers in settings)`,
  Ue = "\u2298 Disabled for this project (re-enable via /mcp)";
async function Lr(h, s, v) {
  (await qs("tengu_mcp_list", {}), await V0({ hasDynamicMcpConfig: !1 }));
  let { servers: a, pendingProjectServers: f } = await vE({
    includePendingProjectServers: !0,
    storageV5: s,
    credentials: v,
  });
  await ki("cli_mcp_list");
  let m = e(i9e, {});
  if (Object.keys(a).length === 0) {
    (await bv(
      h,
      r(o, {
        flexDirection: "column",
        children: [
          e(t, {
            children:
              "No MCP servers configured. Use `claude mcp add` to add a server.",
          }),
          m,
        ],
      }),
    ),
      await xn(0));
    return;
  }
  let y = Be(a),
    i = $v(
      Object.entries(a),
      async ([k, M]) => {
        let g = f.has(k)
          ? { status: Le }
          : Uo(k)
            ? { status: Ue }
            : await Ie(k, M, s);
        return {
          name: k,
          server: y[k] ?? M,
          status: g.status,
          ...(g.issue !== void 0 && { issue: g.issue }),
        };
      },
      { concurrency: De().getMcpServerConnectionBatchSize() },
    );
  (h.render(
    e(Dn, {
      fallback: r(t, {
        children: [
          "Checking MCP server health\u2026",
          `

`,
        ],
      }),
      children: r(o, {
        flexDirection: "column",
        children: [e(He, { promise: i }), m],
      }),
    }),
  ),
    await h.waitUntilExit(),
    await xn(0));
}
async function Ur(h, s, v, a) {
  (await qs("tengu_mcp_get", { name: Gf(s, oy(s, wyt(s) ?? void 0)) }),
    await V0({ hasDynamicMcpConfig: !1 }));
  let {
      servers: f,
      pendingProjectServers: m,
      rejectedProjectServers: y,
    } = await vE({
      includePendingProjectServers: !0,
      includeRejectedProjectServers: !0,
      storageV5: v,
      credentials: a,
    }),
    i = f[s] ?? null,
    k = m.has(s) ? "pending" : y.has(s) ? "rejected" : null;
  if (!i) {
    await wn("cli_mcp_get", "cli_mcp_get_not_found");
    let c = Object.keys(f).filter((w) => !m.has(w) && !y.has(w));
    return di(zat(s, c, m.size > 0));
  }
  let M =
      k === "pending"
        ? { status: Le }
        : k === "rejected"
          ? { status: pt }
          : Uo(s)
            ? { status: Ue }
            : await Ie(s, i, v),
    g = Be({ [s]: i })[s] ?? i,
    C = [
      `${s}:`,
      `  Scope: ${qLe(i.scope)}`,
      `  Status: ${M.status}`,
      ...(M.issue ? [`  Issue: ${M.issue}`] : []),
    ];
  if (
    (i.type === "sse" || i.type === "http") &&
    (g.type === "sse" || g.type === "http")
  ) {
    if ((C.push(`  Type: ${i.type}`), C.push(`  URL: ${g.url}`), g.headers)) {
      C.push("  Headers:");
      for (let [c, w] of Object.entries(g.headers)) C.push(`    ${c}: ${w}`);
    }
    if (i.oauth?.clientId || i.oauth?.callbackPort) {
      let c = [];
      if (i.oauth.clientId) {
        if (
          (c.push("client_id configured"),
          (await Z().getMcpClientConfig(s, i))?.clientSecret)
        )
          c.push("client_secret configured");
      }
      if (i.oauth.callbackPort) c.push(`callback_port ${i.oauth.callbackPort}`);
      C.push(`  OAuth: ${c.join(", ")}`);
    }
  } else if (i.type === "stdio" && g.type === "stdio") {
    (C.push("  Type: stdio"), C.push(`  Command: ${g.command}`));
    let c = Array.isArray(g.args) ? g.args : [];
    if ((C.push(`  Args: ${c.join(" ")}`), g.env)) {
      C.push("  Environment:");
      for (let [w, H] of Object.entries(g.env)) C.push(`    ${w}=${H}`);
    }
  }
  if (i.timeout !== void 0)
    C.push(
      `  Timeout: ${i.timeout}ms${i.timeout < 1000 ? " (ignored: below 1000ms minimum)" : ""}`,
    );
  let j =
      i.scope === "local" || i.scope === "project" || i.scope === "user"
        ? Aa("mcp remove", s, `-s ${i.scope}`)
        : null,
    b = null;
  if (j) b = `To remove this server, run: ${j}`;
  else if (
    i.scope === "user" ||
    i.scope === "project" ||
    i.scope === "local" ||
    i.scope === "enterprise"
  )
    b = `To remove this server, edit ${cw(i.scope)}`;
  else if (i.scope === "managed")
    b =
      "This server is provided by your organization's managed settings and cannot be removed locally.";
  if (b) (C.push(""), C.push(b));
  (await ki("cli_mcp_get"),
    await bv(
      h,
      e(t, {
        children: C.join(`
`),
      }),
    ),
    await xn(0));
}
async function zr(h, s, v, a, f) {
  let m, y;
  try {
    m = zLe(a.scope);
    let i = xt(v, !1);
    if (i === null)
      n("mcp add-json: user-provided JSON was empty, invalid, or null", {
        level: "error",
      });
    let M =
      a.clientSecret &&
      i &&
      typeof i === "object" &&
      "type" in i &&
      (i.type === "sse" || i.type === "http" || i.type === "streamable-http") &&
      "url" in i &&
      typeof i.url === "string" &&
      "oauth" in i &&
      i.oauth &&
      typeof i.oauth === "object" &&
      "clientId" in i.oauth
        ? await Z().readClientSecret()
        : void 0;
    await KM(s, i, m, f);
    let g = Lq().safeParse(i);
    if (
      ((y = (g.success ? g.data.type : void 0) ?? "stdio"),
      M &&
        i &&
        typeof i === "object" &&
        "type" in i &&
        (i.type === "sse" ||
          i.type === "http" ||
          i.type === "streamable-http") &&
        "url" in i &&
        typeof i.url === "string")
    ) {
      let j = await Z().saveMcpClientSecret(
        s,
        { type: i.type === "sse" ? "sse" : "http", url: i.url },
        M,
      );
      if (!j.success)
        process.stderr
          .write(`Server added, but the client secret could not be stored${j.warning ? ` (${j.warning})` : ""}. Re-run with --client-secret once secure storage is available.
`);
    }
    let C = m,
      O = y;
    await qs("tengu_mcp_add", { scope: u(C), source: S("json"), type: u(O) });
  } catch (i) {
    return (await wn("cli_mcp_add_json", "cli_mcp_add_json_failed"), di(l(i)));
  }
  (await ki("cli_mcp_add_json"),
    await bv(
      h,
      r(t, {
        children: ["Added ", y, " MCP server ", s, " to ", m, " config"],
      }),
    ));
}
async function qr(h, s) {
  try {
    let v = zLe(h.scope),
      a = P();
    await qs("tengu_mcp_add", {
      scope: u(v),
      platform: u(a),
      source: S("desktop"),
    });
    let { readClaudeDesktopMcpServers: f } =
        await import("./readClaudeDesktopMcpServers.k2w4wb5c.js"),
      m = await f();
    if (Object.keys(m).length === 0)
      return (
        await ki("cli_mcp_add_from_desktop"),
        dO(
          "No MCP servers found in Claude Desktop configuration or configuration file does not exist.",
        )
      );
    await ki("cli_mcp_add_from_desktop");
    let { unmount: y } = await J0(
      e(zm, {
        session: B(),
        storageV5: s,
        children: e(he, {
          servers: m,
          scope: v,
          onDone: () => {
            y();
          },
        }),
      }),
      { exitOnCtrlC: !0, patchConsole: !1 },
    );
  } catch (v) {
    return (
      await wn("cli_mcp_add_from_desktop", "cli_mcp_add_from_desktop_failed"),
      di(l(v))
    );
  }
}
async function Gr(h, s) {
  if (
    (await qs("tengu_mcp_reset_mcpjson_choices", {}),
    !(await FZe(
      [
        "enabledMcpjsonServers",
        "disabledMcpjsonServers",
        "enableAllProjectMcpServers",
      ],
      s,
    )))
  )
    return (
      rM(
        "Error: Failed to reset project choices: legacy approvals in ~/.claude.json could not be cleared (is the file writable?). Nothing was changed.",
      ),
      await wn(
        "cli_mcp_reset_choices",
        "cli_mcp_reset_choices_projectconfig_delete_failed",
      ),
      await kF(),
      un()
    );
  let a = ye("localSettings");
  if (
    a
      ? a.enabledMcpjsonServers !== void 0 ||
        a.disabledMcpjsonServers !== void 0 ||
        a.enableAllProjectMcpServers !== void 0
      : Iet().length > 0
  ) {
    if (a !== null && uze().length > 0)
      return (
        rM(
          "Error: Failed to reset project choices: settings.local.json carries validation warnings, and rewriting it would delete the warned entries \u2014 run `claude doctor` to list them, fix them, then re-run (legacy approvals in ~/.claude.json were cleared; local settings were not)",
        ),
        await wn(
          "cli_mcp_reset_choices",
          "cli_mcp_reset_choices_settings_warnings_blocked",
        ),
        await kF(),
        un()
      );
    let { error: y } = await Jt(
      "localSettings",
      {
        enabledMcpjsonServers: void 0,
        disabledMcpjsonServers: void 0,
        enableAllProjectMcpServers: void 0,
      },
      void 0,
      s,
    );
    if (y)
      return (
        rM(
          `Error: Failed to reset project choices: ${y.message} (legacy approvals in ~/.claude.json were cleared; local settings were not)`,
        ),
        await wn(
          "cli_mcp_reset_choices",
          "cli_mcp_reset_choices_settings_write_failed",
        ),
        await kF(),
        un()
      );
  }
  await ki("cli_mcp_reset_choices");
  let m = null;
  try {
    let y = Uu("mcp");
    if (!Zm()) {
      let {
          serverNames: i,
          pluginServerNames: k,
          rootServers: M,
        } = await cJt(s),
        g = (b) => qge(b, k.has(b)),
        C = [],
        O = [],
        j = 0;
      for (let b of i) {
        if (y && !k.has(b)) continue;
        let c = ZTe(b);
        if (c === "approved") {
          if (Uo(b)) continue;
          let w = M[b];
          if (w && !uj(b, w)) continue;
          C.push(g(b));
        } else if (c === "rejected") O.push(g(b));
        else j++;
      }
      m = {
        autoApprovedServers: C,
        stillRejectedServers: O,
        pendingCount: j,
        gatingErrors: Dbe().length,
      };
    }
  } catch (y) {
    (n(
      `mcp reset-project-choices: post-reset disclosure scan failed: ${l(y)}`,
      { level: "warn" },
    ),
      (m = null));
  }
  (h.render(
    e(Gb, {
      children: r(o, {
        flexDirection: "column",
        children: [
          e(t, {
            children:
              "Project-scoped (.mcp.json) server approvals and rejections stored for this project have been reset.",
          }),
          m &&
            m.autoApprovedServers.length > 0 &&
            e(t, {
              children: Oe(
                m.autoApprovedServers,
                "is still approved by other settings and will connect automatically without prompting.",
                "are still approved by other settings and will connect automatically without prompting.",
              ),
            }),
          m &&
            m.stillRejectedServers.length > 0 &&
            e(t, {
              children: Oe(
                m.stillRejectedServers,
                "remains rejected by other settings and will not prompt.",
                "remain rejected by other settings and will not prompt.",
              ),
            }),
          m &&
            m.pendingCount > 0 &&
            (m.gatingErrors > 0
              ? e(t, {
                  children:
                    "Settings errors are currently blocking the approval prompt \u2014 run `claude doctor` to list them, fix them, then restart Claude Code to be prompted.",
                })
              : e(t, {
                  children:
                    "You will be prompted for approval next time you start Claude Code.",
                })),
        ],
      }),
    }),
  ),
    await h.waitUntilExit());
}
function Oe(h, s, v) {
  return h.length === 1
    ? `1 server (${h[0]}) ${s}`
    : `${h.length} servers (${h.join(", ")}) ${v}`;
}
export {
  qr as mcpAddFromDesktopHandler,
  zr as mcpAddJsonHandler,
  Ur as mcpGetHandler,
  Lr as mcpListHandler,
  Hr as mcpRemoveHandler,
  Gr as mcpResetChoicesHandler,
  Br as mcpServeHandler,
};

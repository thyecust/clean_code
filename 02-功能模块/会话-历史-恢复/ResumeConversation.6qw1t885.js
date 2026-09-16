// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { j1, K, $p } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { dt, ge, z0 } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { $1, h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "./chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { jo } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
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
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import {
  xn,
  jwe,
  Cgt,
  LX,
  Jf,
  PV,
  YLe,
  Ht,
  ipe,
  KV,
  XM,
  XV,
  YV,
  Q5e,
  FMe,
  are,
  Li,
  EH,
  Kc,
  UMe,
  tAe,
  mre,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { Gpe } from "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import { xH } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { Vre } from "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import { z_ } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
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
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
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
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "./chunk-m1xj4s02.js";
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
import { wQt } from "../../01-核心基础设施/共享小工具-未细化/chunk-wdns14nh.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { gi, o, t, n7, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { U, It } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
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
import { j8 } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../Vim模式/Vim模式.nnewe0gf.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import {
  THe,
  Nst,
  AHe,
  Gz,
  HZ,
  IZ,
  vHe,
  PZ,
  OZ,
  O8,
  RHe,
  DZ,
  kHe,
} from "../Git-Worktree/chunk-xercceag.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f4zey5rf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../成本-Token统计/chunk-adrc9xt1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c9wxfdax.js";
import { W0t } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-aeg1pn1f.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/chunk-4k4dssd9.js";
import "../用量额度-限额/chunk-1bfn62xh.js";
import "../后台任务-Shell管理/chunk-n6g2zfwn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../跨会话消息(UDS)/chunk-t2esphmv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import { VB } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import "../上下文压缩-Compact/chunk-1ntrf0ja.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anjm5g41.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nj1exzcd.js";
import "../Artifact发布-渲染/chunk-stvynqrz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s3mpt973.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7m5aewa3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-0mg59v9m.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wqaxtswb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import { rit, LIt, oit } from "./chunk-t3q91yqm.js";
import "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { Vz } from "../../01-核心基础设施/共享小工具-未细化/chunk-4w3ae8h6.js";
import { oF } from "../../01-核心基础设施/共享小工具-未细化/chunk-vz37aa8z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kyy28ene.js";
import "../Workflow编排/chunk-va9cgbfs.js";
import "../Artifact发布-渲染/chunk-5gz5xvw9.js";
import "../MCP客户端/chunk-xcbagjx9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q8r1ycrr.js";
import "../后台任务-Shell管理/chunk-jfk5mpe1.js";
import "../后台任务-Shell管理/chunk-xmxjyg29.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import "../后台任务-Shell管理/chunk-5jv5fvbn.js";
import "../后台任务-Shell管理/chunk-gnmy62vg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yrv8wzwe.js";
import "../策略限制(PolicyLimits)/chunk-hpw6352m.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dhg3raay.js";
import "../后台任务-Shell管理/chunk-rh0xpf1w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pbd0pf42.js";
import "./chunk-ybcvb652.js";
import "../MCP客户端/chunk-g4gdwpa0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s1hpfa12.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cj5z5g82.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-cq8x5zt4.js";
import "../工具Monitor/工具Monitor.981fw9dy.js";
import "../Artifact发布-渲染/chunk-qpgskeea.js";
import "../Artifact发布-渲染/chunk-qdg189tc.js";
import "../Artifact发布-渲染/chunk-p1dkvpxj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d8c3rz29.js";
import "../Artifact发布-渲染/chunk-kshc4v5t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ajpjkvdj.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-zds66w6y.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hxt46tkz.js";
import { F_e } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import "../斜杠命令-UI组件/chunk-d9snm4c7.js";
import "../权限系统/chunk-0hcqee2w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-m85ks9bj.js";
import "../文件监听-Watch/chunk-mmg1rsp2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1m91n7yv.js";
import "../上下文压缩-Compact/chunk-40jcpbzh.js";
import "../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js";
import "../插件系统/chunk-q8w2zntw.js";
import "../Bridge-RemoteControl/chunk-x379yyxb.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-ph7v431y.js";
import "../权限系统/chunk-jsd70b22.js";
import "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import "../Bridge-RemoteControl/chunk-ga43tr2w.js";
import "../Bridge-RemoteControl/chunk-znhfst8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-thdf1760.js";
import "../Bridge-RemoteControl/chunk-jpq2fv3g.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-2skajgkt.js";
import "../Bridge-RemoteControl/chunk-2mm1aqzx.js";
import "../Hooks钩子/chunk-6wg4v2yj.js";
import "../AutoMode-自动模式/chunk-15n5gf3t.js";
import "../远程工具执行/chunk-66axrkvh.js";
import "../权限系统/chunk-z0pt04s8.js";
import "../斜杠命令-框架/chunk-s195n5de.js";
import "../工具Glob-Grep-搜索/chunk-57axeagj.js";
import "../工具WebFetch-WebSearch/chunk-1mxgbqzj.js";
import "../Teammates团队/chunk-r8fvp46d.js";
import "../Artifact发布-渲染/chunk-fx5ekm7e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mybtnk9f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6k8nm416.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f7n720sn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import "../工具Task-Agent调度/工具Task-Agent调度.5xpzy7cr.js";
import "../Workflow编排/chunk-bkcg0nbj.js";
import "../Workflow编排/chunk-cd542wve.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kaxe7rw8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ps79w9dv.js";
import "../Artifact发布-渲染/chunk-54kz7amv.js";
import "../权限系统/chunk-4tar9p3n.js";
import "../Teammates团队/chunk-nhk351pe.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y2pwa8n5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0k3bh4m8.js";
import "../Workflow编排/chunk-dyq13fbm.js";
import "../上下文压缩-Compact/chunk-npckj9cm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-aqawy2mp.js";
import "../CodeReview/chunk-rp57gfa9.js";
import "../Workflow编排/chunk-6gjsfh7a.js";
import "../自动更新-安装/chunk-548xet6h.js";
import "../自动更新-安装/chunk-brx72pf1.js";
import "../自动更新-安装/chunk-2g5h49pk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hrfnq7gz.js";
import "../权限系统/chunk-qjqc5vxm.js";
import "../Teammates团队/chunk-88ybhavr.js";
import "../Teammates团队/chunk-qy9488g9.js";
import "../后台任务-Shell管理/chunk-yndsh193.js";
import "../../01-核心基础设施/设置-配置/chunk-tswdb9jt.js";
import "../图片-截图-ComputerUse/chunk-1c6fx285.js";
import "../MCP客户端/chunk-z2a573sr.js";
import "../语法高亮-Markdown渲染/chunk-mnn6q099.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t0dp6656.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jq60dfkn.js";
import "../工具Bash-Shell/chunk-8sjdj5bm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1phhhgcj.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-7gt0xchv.js";
import "../CodeReview/chunk-cwdcyphs.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wm4s322b.js";
import "../Grove-隐私设置/chunk-a4mdm49v.js";
import "../斜杠命令-框架/chunk-a4vej95c.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5pc36v8n.js";
import "../Skills技能/chunk-wwgqvtfr.js";
import "../../01-核心基础设施/设置-配置/chunk-xy3cbvd8.js";
import "./chunk-szqky9sa.js";
import "../跨会话消息(UDS)/chunk-qvnte9zp.js";
import "../深链接-URL协议/深链接-URL协议.wjw0bmt6.js";
import "../插件系统/chunk-d0tph3ay.js";
import "../限流-重试/限流-重试.4mc5yc28.js";
import "../用量额度-限额/chunk-n4zff40p.js";
import "../Bedrock-Vertex/chunk-bnft4099.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-drgqeenr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-3eztvm1y.js";
import "../认证-OAuth登录/chunk-7jz937t3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdeyn1dg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cbdr3qdm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c172f2at.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tfspgges.js";
import "../权限系统/chunk-hv6z01db.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-mmzy53cr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ctr3zhmb.js";
import "../工具Bash-Shell/chunk-qnax4jt7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bhcz98rd.js";
import "../工具Bash-Shell/chunk-ktp8xtmy.js";
import "../工具UI渲染/chunk-g4k5jjwt.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-9r4nh249.js";
import { t4 } from "../../01-核心基础设施/共享小工具-未细化/chunk-azh5vchz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-86zcr8cb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-400h8hta.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vwjqzjhr.js";
import "../权限系统/chunk-n5mgv42x.js";
import "../反馈-错误上报/chunk-rmpn4ety.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c8g7bday.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x93xfjz0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qck6h2yw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ga0qgvpz.js";
import "../自动更新-安装/chunk-dv82rn71.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-awxpn5er.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d3d1v4d6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../权限系统/chunk-2ttypdwq.js";
import "../成本-Token统计/chunk-f1ehes3v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hyrh6kmc.js";
import "../后台任务-Shell管理/chunk-nhnqmzyt.js";
import "../Teammates团队/chunk-2j84y871.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tkfrb8jm.js";
import "../MCP客户端/chunk-49ds54j4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mnzfncps.js";
import "../插件系统/chunk-bh1q9esj.js";
import "../插件系统/chunk-5ztq0v89.js";
import "../插件系统/chunk-gzfe39h3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-txc6d085.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ey89qg3e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tc59qdh4.js";
import "../权限系统/chunk-3bdrfpdv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nkg0z9p5.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/设置-配置/chunk-992erern.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import "../Teammates团队/chunk-c8267s4e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pvfkaage.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g2fqhcwj.js";
import "../MCP客户端/chunk-k2gczbnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xvyb4e66.js";
import "../Teammates团队/chunk-w2g8t42p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-zh4679df.js";
import "../后台任务-Shell管理/chunk-531ast3t.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-yb7jadvp.js";
import "../Bridge-RemoteControl/chunk-z5v9hvat.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42rkrq9r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kv5vaqew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s5e85mz9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gkztysec.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-56wrzxpk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wprkdaj.js";
import "../Workflow编排/chunk-hdhsmge4.js";
import "../Workflow编排/chunk-pqyn1fh3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g00x7t7w.js";
import "../../01-核心基础设施/设置-配置/chunk-ekwet1zd.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import "../权限系统/chunk-n4x6jsp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kdfkgcfn.js";
import "../Teammates团队/chunk-4ma81w0c.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-3k9e6gxt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nbvmqw0g.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { re, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import { Ire } from "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
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
import { dirname as Ho } from "path";
function Go() {
  xn(1);
}
function Wo() {
  process.exit(0);
}
function $o() {
  process.exit(0);
}
function Uo(Kt) {
  return Kt.project.originalCwd;
}
function qo(A) {
  let R = parseInt(A, 10);
  if (!isNaN(R) && R > 0) return R;
  let k = A.match(
    /(?:https?:\/\/)?[^/\s]+\/[^\s]+?\/(?:pull|pull-requests|-\/merge_requests)\/(\d+)/,
  );
  if (k?.[1]) return parseInt(k[1], 10);
  return null;
}
function Ut({
  commands: A,
  worktreePaths: R,
  initialTools: k,
  mcpClients: Z,
  dynamicMcpConfig: ee,
  debug: oe,
  mainThreadAgentDefinition: te,
  autoConnectIdeFlag: $e,
  strictMcpConfig: ye = !1,
  systemPrompt: Ue,
  appendSystemPrompt: ze,
  systemPromptSnapshot: Qe,
  initialSearchQuery: Ve,
  disableSlashCommands: Xe = !1,
  forkSession: G,
  filterByPr: N,
  thinkingConfig: Je,
  thinkingConfigExplicit: Ke,
  fallbackModel: Ze,
  onTurnComplete: eo,
  onCaptureSnapshot: oo,
}) {
  let { storageV5: g, credentials: Ae } = _e(),
    x = Ye(),
    { rows: to } = Se(),
    no = U((s) => s.agentDefinitions),
    ne = U((s) => s.standaloneAgentContext),
    so = U((s) => s.mainLoopModel),
    D = It(),
    ro = VB(),
    [se, j] = d([]),
    [Me, W] = d(!0),
    [io, ao] = d(!1),
    be = C(!1),
    [Te, Le] = d(null),
    [O, lo] = d(!1),
    [w, co] = d(null),
    [we, mo] = d(null),
    [ve, uo] = d(null),
    P = C(null),
    [fo, po] = d(0),
    z = C(0),
    Q = C(0),
    ke = V(() => {
      let s = se.filter((c) => !c.isSidechain);
      if (N !== void 0) {
        if (N === !0) s = s.filter((c) => c.prNumber !== void 0);
        else if (typeof N === "number") s = s.filter((c) => c.prNumber === N);
        else if (typeof N === "string") {
          let c = qo(N);
          if (c !== null) s = s.filter((L) => L.prNumber === c);
        }
      }
      return s;
    }, [se, N]),
    go = ipe(),
    So = V(() => a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE, []);
  (n7(w || So ? null : "claude \xB7 resume"),
    E(() => {
      tAe(R, void 0, void 0, g)
        .then((s) => {
          ((P.current = s),
            (z.current = s.logs.length),
            j(s.logs),
            W(!1),
            y("screen_resume_conversation"));
        })
        .catch((s) => {
          (f("screen_resume_conversation", "resume_conversation_load_failed"),
            h(s),
            W(!1));
        });
    }, [R, g]));
  let ie = C(!1),
    Fe = re(
      (s) => {
        if (ie.current) return;
        let c = P.current;
        if (!c || c.nextIndex >= c.allStatLogs.length) return;
        ie.current = !0;
        let L = !1;
        mre(c.allStatLogs, c.nextIndex, s, g)
          .then((v) => {
            if (P.current !== c) return;
            if (((c.nextIndex = v.nextIndex), v.logs.length > 0)) {
              let n = z.current;
              ($1(v.logs).forEach((m, b) => {
                m.value = n + b;
              }),
                j((m) => m.concat(v.logs)),
                (z.current += v.logs.length));
            } else if (c.nextIndex < c.allStatLogs.length) L = !0;
          })
          .finally(() => {
            if (((ie.current = !1), L)) Fe(s);
          });
      },
      [g],
    ),
    ae = re(
      (s) => {
        W(!0);
        let c = ++Q.current,
          L = P.current;
        ((P.current = null),
          po((n) => n + 1),
          (s ? UMe(void 0, void 0, g) : tAe(R, void 0, void 0, g))
            .then((n) => {
              if (Q.current !== c) return;
              ((P.current = n), (z.current = n.logs.length), j(n.logs));
            })
            .catch((n) => {
              if (Q.current !== c) return;
              if (L !== null) P.current = L;
              (j((m) => m.slice()), h(n));
            })
            .finally(() => {
              if (Q.current !== c) return;
              W(!1);
            }));
      },
      [R, g],
    ),
    ho = re(() => {
      let s = !O;
      (lo(s), ae(s));
    }, [O, ae]);
  function Co() {
    process.exit(1);
  }
  async function Ro(s) {
    if (be.current) return;
    ((be.current = !0), ao(!0));
    let c = performance.now();
    try {
      let n = await oit(s, O, R);
      if (n) {
        let m = await z_(n);
        if (m) process.stdout.write(m);
        uo(n);
        return;
      }
      if (!G) {
        let m = Kc(s),
          b = m ? await t4(m) : null;
        if (m && b) {
          mo({ sessionId: m, jobId: b.jobId, projectPath: s.projectPath });
          return;
        }
      }
    } catch (n) {
      (h(dt(ge(n), "resume picker: pre-load failed")),
        Le({ sessionId: Kc(s) ?? void 0 }));
      return;
    }
    let L = !1,
      v = "load_error";
    try {
      let n = await PV(s, void 0, {
        forkSession: G ?? !1,
        storageV5: g,
        credentials: Ae,
        ...LX(x.precompute, g, { forkSession: !!G }),
      });
      if (!n)
        throw (
          i("tengu_session_resumed", {
            entrypoint: S("picker"),
            success: !1,
            failure_reason: S("not_found_picker"),
          }),
          (L = !0),
          Error("Failed to load conversation")
        );
      v = "processing_error";
      {
        let B = import.meta
          .require("../Teammates团队/getCoordinatorSystemPrompt.geqa52wg.js")
          .matchSessionMode(n.mode);
        if (B) {
          let Ao = await O8(x.project.originalCwd, [], g);
          (D((Mo) => ({ ...Mo, agentDefinitions: Ao })),
            n.messages.push(Ht(B, "warning")));
        }
      }
      Cgt(x);
      let { adoptedSessionId: m, effectiveFork: b } = Vre(n.sessionId, !!G),
        xe = m ? Li(m) : Li(K());
      if (m)
        ($p(m, "resume", s.fullPath ? Ho(s.fullPath) : null),
          await Nst(x, g),
          await XM());
      else if (b) {
        if (
          (await are(n, {
            stripWorktreeSession: !0,
            stripRelocatedCwd: !0,
            destSid: xe,
            storageV5: g,
          }),
          n.contentReplacements?.length)
        )
          await KV(n.contentReplacements, void 0, g);
      }
      jwe(n);
      let yo = await HZ(s.projectPath, g),
        { agentDefinition: le } = Gz(n.agentSetting, te, no, {
          sessionAgentDefinitions: yo,
          sessionCwd: s.projectPath,
          onResolveMiss: (l) => n.messages.push(Ht(l, "warning")),
        });
      if (le?.mcpServers?.length) await YLe();
      if ((D((l) => ({ ...l, agent: le?.agentType })), b)) vHe(n.messages);
      OZ(n.messages, b);
      let De = IZ(n.messages, so, (l) => n.messages.push(Ht(l, "warning"))),
        X = De ? PZ(n.messages, De, b, g, Ae) : void 0;
      if (X)
        D((l) => {
          if (l.mainLoopModel === X) return l;
          return (Jf(x, l, X, "resume"), { ...l, mainLoopModel: X });
        });
      kHe(n.messages, { fork: b, startup: !0 });
      {
        let { saveMode: l } = import.meta.require("./getTranscriptPathForSession.yb7s8f31.js"),
          { isCoordinatorMode: B } = import.meta.require("../Teammates团队/getCoordinatorSystemPrompt.geqa52wg.js");
        l(B() ? "coordinator" : "normal");
      }
      let Ie = AHe(n.agentName, n.agentColor),
        ce = ne ? { ...Ie, ...ne } : Ie;
      if (ce) D((l) => ({ ...l, standaloneAgentContext: ce }));
      if (
        (Gpe(ce?.name, g, { autoOnly: !n.customTitle && !ne?.name }),
        EH(
          b ? FMe(n, { stripWorktreeSession: !0, stripRelocatedCwd: !0 }) : n,
          { taintSid: xe, storageV5: g },
        ),
        Q5e(Ire(n), D),
        wQt(n.messages, D, ro),
        THe(x.host),
        !b && n.bridgeSessionId)
      )
        D((l) =>
          l.replBridgeEnabled && !l.replBridgeOutboundOnly
            ? l
            : { ...l, replBridgeEnabled: !0, replBridgeOutboundOnly: !1 },
        );
      if (!b) {
        let l = DZ(oF.of(x.host), n.worktreeSession, void 0, { storageV5: g });
        if (l) n.messages.push(Ht(RHe(l), "warning"));
        if ((j8(x.host, D), m))
          if (M() && g !== void 0) await YV(g);
          else XV();
      }
      (i("tengu_session_resumed", {
        entrypoint: S("picker"),
        success: !0,
        resume_duration_ms: Math.round(performance.now() - c),
      }),
        j([]),
        co({
          messages: n.messages,
          fileHistorySnapshots: n.fileHistorySnapshots,
          contentReplacements: n.contentReplacements,
          agentName: n.agentName,
          agentColor: n.agentColor === "default" ? void 0 : n.agentColor,
          mainThreadAgentDefinition: le,
        }));
    } catch (n) {
      if (!L) {
        let m = v;
        i("tengu_session_resumed", {
          entrypoint: S("picker"),
          success: !1,
          failure_reason: u(m),
          error_name: z0(ge(n)),
        });
      }
      (h(dt(ge(n), "resume picker: onSelect failed")),
        Le({ sessionId: Kc(s) ?? void 0 }));
    }
  }
  if (we) return e(We, { ...we });
  if (ve) return e(Ge, { command: ve });
  if (w)
    return e(W0t, {
      debug: oe,
      commands: A,
      initialTools: k,
      initialMessages: w.messages,
      initialFileHistorySnapshots: w.fileHistorySnapshots,
      initialContentReplacements: w.contentReplacements,
      initialAgentName: w.agentName,
      initialAgentColor: w.agentColor,
      mcpClients: Z,
      dynamicMcpConfig: F_e(ee ?? {}, w.mainThreadAgentDefinition, {
        strictMcpConfig: ye,
      }),
      strictMcpConfig: ye,
      systemPrompt: Ue,
      appendSystemPrompt: ze,
      systemPromptSnapshot: Qe,
      mainThreadAgentDefinition: w.mainThreadAgentDefinition,
      autoConnectIdeFlag: $e,
      disableSlashCommands: Xe,
      thinkingConfig: Je,
      thinkingConfigExplicit: Ke,
      fallbackModel: Ze,
      onTurnComplete: eo,
      onCaptureSnapshot: oo,
    });
  if (Me && (se.length === 0 || ke.length === 0))
    return e(Y, {
      children: e($n, { message: "Loading conversations\u2026" }),
    });
  if (Te) return e(qe, { sessionId: Te.sessionId });
  if (io)
    return e(Y, {
      children: e($n, { message: "Resuming conversation\u2026" }),
    });
  return e(Y, {
    children: e(rit, {
      logs: ke,
      maxHeight: to,
      onCancel: Co,
      onSelect: Ro,
      onLogsChanged: go ? () => ae(O) : void 0,
      onLoadMore: Fe,
      initialSearchQuery: Ve,
      isLoading: Me,
      reloadGeneration: fo,
      showAllProjects: O,
      onToggleAllProjects: ho,
    }),
  });
}
function Y(Qt) {
  let bo = _(3),
    { children: me } = Qt;
  if (!gi()) {
    return me;
  }
  let To;
  if (bo[0] === p) ((To = xH()), (bo[0] = To));
  else To = bo[0];
  let Lo;
  if (bo[1] !== me)
    ((Lo = e(Vz, { mouseTracking: To, children: me })),
      (bo[1] = me),
      (bo[2] = Lo));
  else Lo = bo[2];
  return Lo;
}
function qe(Vt) {
  let Ne = _(4),
    { sessionId: wo } = Vt,
    vo;
  if (Ne[0] === p) ((vo = []), (Ne[0] = vo));
  else vo = Ne[0];
  Un(Go, 100, vo);
  let ko;
  if (Ne[1] === p)
    ((ko = e(t, { children: "Failed to resume the conversation." })),
      (Ne[1] = ko));
  else ko = Ne[1];
  const Ee = j1(wo)
    ? `Run claude --resume ${wo} to retry, or claude to start a new session.`
    : "Run claude to start a new session.";
  let Fo;
  if (Ne[2] !== Ee)
    ((Fo = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [ko, e(t, { dimColor: !0, children: Ee })],
    })),
      (Ne[2] = Ee),
      (Ne[3] = Fo));
  else Fo = Ne[3];
  return Fo;
}
function Ge(Xt) {
  let q = _(8),
    { command: Pe } = Xt,
    xo;
  if (q[0] === p) ((xo = []), (q[0] = xo));
  else xo = q[0];
  Un(Wo, 100, xo);
  let Do;
  if (q[1] === p)
    ((Do = e(t, {
      children: "This conversation is from a different directory.",
    })),
      (q[1] = Do));
  else Do = q[1];
  let _o;
  if (q[2] === p) ((_o = e(t, { children: "To resume, run:" })), (q[2] = _o));
  else _o = q[2];
  let de;
  if (q[3] !== Pe)
    ((de = r(o, {
      flexDirection: "column",
      children: [_o, r(t, { children: [" ", Pe] })],
    })),
      (q[3] = Pe),
      (q[4] = de));
  else de = q[4];
  let Io;
  if (q[5] === p)
    ((Io = e(t, { dimColor: !0, children: "(Command copied to clipboard)" })),
      (q[5] = Io));
  else Io = q[5];
  let No;
  if (q[6] !== de)
    ((No = r(o, { flexDirection: "column", gap: 1, children: [Do, de, Io] })),
      (q[6] = de),
      (q[7] = No));
  else No = q[7];
  return No;
}
function We(Jt) {
  let I = _(23),
    { sessionId: Eo, jobId: T, projectPath: J } = Jt,
    Po;
  if (I[0] === p) ((Po = []), (I[0] = Po));
  else Po = I[0];
  Un($o, 100, Po);
  let je = Ye(Uo),
    Oo;
  if (I[1] !== je || I[2] !== J)
    ((Oo = J && J !== je ? `cd ${jo([J])} ${LIt()} ` : ""),
      (I[1] = je),
      (I[2] = J),
      (I[3] = Oo));
  else Oo = I[3];
  let Oe = Oo,
    Be = j1(Eo) ? ` ${Eo}` : "";
  const He = T ? ` (${T})` : "";
  let ue;
  if (I[4] !== He)
    ((ue = r(t, {
      children: [
        "That session is still running as a background session",
        He,
        ".",
      ],
    })),
      (I[4] = He),
      (I[5] = ue));
  else ue = I[5];
  let fe;
  if (I[6] !== T)
    ((fe = T
      ? r(t, {
          children: [
            "Run ",
            r(t, { bold: !0, children: ["claude attach ", T] }),
            " to open it, or",
            " ",
            r(t, { bold: !0, children: ["claude stop ", T] }),
            " first to resume it here.",
          ],
        })
      : null),
      (I[6] = T),
      (I[7] = fe));
  else fe = I[7];
  let pe;
  if (I[8] !== T)
    ((pe = T
      ? e(t, { children: "To branch off a copy instead, run:" })
      : r(t, {
          children: [
            "Run ",
            e(t, { bold: !0, children: "claude agents" }),
            " to find its id and attach to it, or run:",
          ],
        })),
      (I[8] = T),
      (I[9] = pe));
  else pe = I[9];
  let he;
  if (I[10] !== Oe || I[11] !== Be)
    ((he = r(t, {
      children: [" ", Oe, "claude --resume", Be, " --fork-session"],
    })),
      (I[10] = Oe),
      (I[11] = Be),
      (I[12] = he));
  else he = I[12];
  let Ce;
  if (I[13] !== pe || I[14] !== he)
    ((Ce = r(o, { flexDirection: "column", children: [pe, he] })),
      (I[13] = pe),
      (I[14] = he),
      (I[15] = Ce));
  else Ce = I[15];
  let Re;
  if (I[16] !== T)
    ((Re = T
      ? null
      : e(t, { dimColor: !0, children: "to branch off a copy." })),
      (I[16] = T),
      (I[17] = Re));
  else Re = I[17];
  let Bo;
  if (I[18] !== ue || I[19] !== fe || I[20] !== Ce || I[21] !== Re)
    ((Bo = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [ue, fe, Ce, Re],
    })),
      (I[18] = ue),
      (I[19] = fe),
      (I[20] = Ce),
      (I[21] = Re),
      (I[22] = Bo));
  else Bo = I[22];
  return Bo;
}
export { Ut as ResumeConversation };

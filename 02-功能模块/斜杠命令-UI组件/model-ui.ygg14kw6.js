// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Cz, xW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { DA, Hur, St, h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import {
  CAt,
  vAt,
  Or,
  bt,
  Mr,
  Jy,
  af,
  db,
  pb,
  QH,
  UAt,
  mU,
  Rr,
  zN,
  XAt,
  t0,
  oq,
  dh,
  Hm,
  wt,
  Tn,
  MR,
  H,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { jn, Pt, Ks, eE } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
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
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { Xt, Pe, fo } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
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
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import {
  gdn,
  QF,
  e$,
  zv,
  Jf,
  Ym,
  eg,
  tre,
  nre,
  qWt,
  zWt,
  wT,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import { VH, Yk, Ya, ese, tse, zG } from "../权限系统/chunk-t3b7pg2x.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../上下文压缩-Compact/chunk-npckj9cm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
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
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
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
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../Teammates团队/chunk-t899nada.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { U, It, Yn } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { RZ, Q1, fHe } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import { Ir } from "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
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
import "../成本-Token统计/chunk-adrc9xt1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hxt46tkz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { q8 } from "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-mmzy53cr.js";
import { QW } from "../../01-核心基础设施/共享小工具-未细化/chunk-dvytaktr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c8g7bday.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
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
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../成本-Token统计/chunk-f1ehes3v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import {
  p7,
  Yle,
  ySe,
  P_,
  Rl,
  rI,
  I3e,
  kIe,
  Qnn,
  Zg,
  t2,
  nLt,
  P3e,
  rLt,
  n2,
  Qle,
} from "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { Lh } from "../Teammates团队/chunk-mrfx53ye.js";
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
var Ot = "tengu_swift_garden",
  et = 2,
  ze = 15000;
function tt() {
  return Or().providerCache.fableEntitlementProbeInFlight;
}
function Ye() {
  let r = Or().providerCache;
  if (r.fableEntitlementProbeInFlight === void 0) return ze;
  return Math.max(0, ze - (Date.now() - r.fableEntitlementProbeStartedAt));
}
function Ue() {
  if (!H(Ot, !0)) return !1;
  let r = Or().providerCache;
  if (r.fableEntitlementProbeInFlight !== void 0) return Ye() > 0;
  if (vAt() !== void 0 || r.fableEntitlementProbeAttempts >= et || ot(r))
    return !1;
  if (Pe() !== "firstParty" || !fo()) return !1;
  if (mU()) return !1;
  if (St() || !XAt()) return !1;
  if (MR().some((o) => typeof o.value === "string" && zN(o.value))) return !1;
  let t = oq();
  return Rr(t) && t0(t)?.reason === "absent";
}
function ot(r) {
  return (
    r.fableEntitlementProbeAccount !== void 0 &&
    r.fableEntitlementProbeAccount !== null &&
    CAt() === null
  );
}
function nt({ credentials: r }) {
  let t = Or().providerCache;
  if (t.fableEntitlementProbeInFlight !== void 0)
    return t.fableEntitlementProbeInFlight;
  let o = vAt();
  if (o !== void 0) return Promise.resolve(o);
  if (t.fableEntitlementProbeAttempts >= et || ot(t))
    return Promise.resolve("failed");
  let O = CAt(),
    T = oq();
  ((t.fableEntitlementProbeAttempts += 1),
    (t.fableEntitlementProbeAccount = O),
    (t.fableEntitlementProbeEpoch = xW()),
    (t.fableEntitlementProbeStartedAt = Date.now()),
    (t.fableEntitlementProbeModel = T));
  let c = Tt(t, T, O, r).finally(() => {
    if (t.fableEntitlementProbeInFlight === c)
      t.fableEntitlementProbeInFlight = void 0;
  });
  return ((t.fableEntitlementProbeInFlight = c), c);
}
async function Tt(r, t, o, O) {
  let T = r.fableEntitlementProbeGeneration;
  try {
    let c = await Yle(t, { forceServerProbe: !0, credentials: O }),
      M = CAt(),
      q = Or().providerCache;
    if (
      q !== r ||
      r.fableEntitlementProbeGeneration !== T ||
      (o !== null && M !== null && M !== o)
    )
      return (
        q.validatedModels.delete(t),
        r.validatedModels.delete(t),
        n(
          "[model picker] Fable entitlement probe answered under a superseded credential; discarded",
        ),
        g("model_picker_fable_probe", "superseded_credential"),
        "failed"
      );
    if (c.valid)
      return (
        (r.fableEntitlementProbe = "accepted"),
        y("model_picker_fable_probe", { accepted: !0 }),
        "accepted"
      );
    if (c.notFound)
      return (
        (r.fableEntitlementProbe = "refused"),
        y("model_picker_fable_probe", { accepted: !1 }),
        "refused"
      );
    return (
      n(`[model picker] Fable entitlement probe failed: ${c.error}`),
      g("model_picker_fable_probe", "failed"),
      "failed"
    );
  } catch (c) {
    return (
      n(`[model picker] Fable entitlement probe threw: ${c}`),
      g("model_picker_fable_probe", "failed"),
      "failed"
    );
  }
}
function lo(En) {
  return En.mainLoopModel;
}
function ao() {
  return new AbortController();
}
function co(vn) {
  return vn !== null;
}
function mo() {
  return jn() !== null && Ks();
}
function uo(Gn) {
  return Gn.mainLoopModel;
}
function po(Kn) {
  return Kn.mainLoopModelForSession;
}
function go(xn) {
  return xn.sessionEffort;
}
function bo(Jn) {
  return Jn.settingsEffortTable;
}
var Qe =
    "Model picker shows local options in cloud sessions \u2014 pass a model name, e.g. /model sonnet",
  Ft =
    "Couldn\u2019t load the model list from the cloud session \u2014 pass a model name, e.g. /model sonnet",
  Ct =
    "Stopped waiting for the cloud session\u2019s model list \u2014 run /model again, or pass a model name, e.g. /model sonnet",
  Et = 15000,
  je = (r) => Xt(r) !== r,
  vt = (r) =>
    r.reduce(
      (t, o) =>
        t === null || (o.value?.length ?? 0) > (t.value?.length ?? 0) ? o : t,
      null,
    )?.value ?? null;
function io({
  getMessages: r,
  onDone: t,
  storageV5: o,
  credentials: O,
  session: T,
}) {
  let c = Yn(),
    M = U((s) => s.mainLoopModel),
    q = U((s) => s.mainLoopModelForSession),
    x = q8() ?? M,
    X = U((s) => s.fastMode),
    ee = It(),
    { addNotification: de } = Ir(),
    [D, k] = d(null),
    Q = C([]),
    [te, fe] = d(null),
    oe = C(!1),
    ce = C(!1),
    _e = C(0),
    [$e, Z] = d(!1),
    Ee = C(null),
    [Me, ke] = d(() => Ue()),
    [P] = d(() => Ye());
  (Un(() => ke(!1), Me ? P : null),
    E(() => {
      if (!Me) return;
      if (!Ue()) {
        ke(!1);
        return;
      }
      let s = !0;
      return (
        (tt() ?? nt({ credentials: O })).finally(() => {
          if (s) ke(!1);
        }),
        () => {
          s = !1;
        }
      );
    }, [Me, O]));
  function A() {
    i("tengu_model_command_menu", { action: S("cancel") });
    let s = Zg(x);
    t(`${nre}${eg(s)}`, { display: "system" });
  }
  function v(s, w, ne = !1) {
    if (!ne && rLt(s)) {
      ((ce.current = !1), (_e.current += 1), fe({ model: s, effort: w }));
      return;
    }
    let Y = Qle(s, w),
      N = oe.current;
    oe.current = !1;
    let se = new AbortController();
    ((Ee.current = se),
      Z(!0),
      Ym(T, () => P_(T, c.getState, s, "picker", { signal: se.signal }))
        .then((L) => {
          if ((Z(!1), se.signal.aborted)) return;
          if (((Q.current = L.messages), L.decision === "block")) {
            (g("model_switch", "blocked_by_hook"),
              t(rI(s, L.reason, L.messages), { display: "system" }));
            return;
          }
          if (L.decision === "ask") {
            k({
              model: s,
              pick: Y,
              kind: "model",
              hookReason: L.reason ?? "Confirm switching the model",
              vettedFrom: zv(c.getState()),
              saveAsDefault: N,
            });
            return;
          }
          m(s, Y, L.skipConfirm, N);
        })
        .catch((L) => {
          if ((Z(!1), se.signal.aborted)) return;
          (h(ge(L)),
            t(`Model switch failed: ${Rl(l(L))}`, { display: "system" }));
        }));
  }
  function m(s, w, ne, Y) {
    let N = c.getState();
    if (
      !ne &&
      nLt(
        s,
        N.mainLoopModel,
        N.mainLoopModelForSession,
        N.cacheMissAckedAtOutputTokens,
        QF(r()),
      )
    ) {
      k({
        model: s,
        pick: w,
        kind: "model",
        vettedFrom: zv(c.getState()),
        saveAsDefault: Y,
      });
      return;
    }
    if (
      w !== void 0 &&
      tse(w.level, Ya(N), t2(s), N.cacheMissAckedAtOutputTokens, QF(r()))
    ) {
      k({
        model: s,
        pick: w,
        kind: "effort",
        vettedFrom: zv(c.getState()),
        saveAsDefault: Y,
      });
      return;
    }
    B(s, w, Y);
  }
  function B(s, w, ne) {
    if (
      (i("tengu_model_command_menu", {
        action: bt(s),
        from_model: bt(M),
        to_model: bt(s),
      }),
      w?.fromUltracode)
    )
      ese(ne, o);
    else if (w !== void 0) zG(w.level, t2(s), ne, o);
    Cz();
    let Y = !1,
      N = !1;
    if (Mr()) QH();
    (Jf(T, c.getState(), s, "picker"),
      ee(
        (ve) => (
          (Y = !!ve.fastMode),
          (N = Mr() ? db(s, ve.fastMode) : Y),
          {
            ...ve,
            mainLoopModel: s,
            mainLoopModelForSession: null,
            ...(w !== void 0 && {
              sessionEffort: Yk(w.level),
              ultracode: w.ultracode,
            }),
            ...(N !== Y && { fastMode: N }),
          }
        ),
      ),
      pb(Y, N));
    let se = ne;
    if (se) kIe(s, o);
    (y("model_switch"), Ze(s, de));
    let L = `${tre}${eg(Zg(s))}${se ? " and saved as your default for new sessions" : " for this session only"}`;
    if (w !== void 0) {
      let ve = w.ultracode ? "ultracode" : w.level;
      if (((L += ` with ${eg(ve)} effort`), w.fromUltracode && se))
        L += w.ultracode
          ? " (ultracode applies to this session only)"
          : " (the effort applies to this session only)";
      let Ne = w.fromUltracode ? VH() : void 0;
      if (Ne !== void 0 && Ne !== "xhigh") {
        let Lt =
          Ne === null ? a.CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() : String(Ne);
        L += ` \u2014 CLAUDE_CODE_EFFORT_LEVEL=${Lt} overrides effort this session; clear it and ${ve} takes over`;
      }
    }
    if (((L += p7(Y, N, s, { announceKeptOn: !0 })), se)) L += Qnn(s);
    if (Q.current.length > 0)
      ((L += `
${Q.current.map(Rl).join(`
`)}`),
        (Q.current = []));
    t(L);
  }
  if (Me)
    return e(Q1, { message: "Checking model availability\u2026", onCancel: A });
  if (te) {
    let { model: s, effort: w } = te,
      ne = _e.current;
    return e(fHe, {
      variant: "picker",
      modelName: Hm(wt(s ?? dh())),
      onDone: (Y, N) => {
        if (ne !== _e.current) return !1;
        if (ce.current) return !1;
        if (((ce.current = !0), fe(null), Y === "consent")) {
          v(s, w, !0);
          return;
        }
        ((oe.current = !1),
          t(N ?? `${nre}${eg(Zg(x))}`, { display: "system" }));
      },
    });
  }
  if ($e)
    return e(Q1, {
      message: "Running PreModelSwitch hooks\u2026",
      onCancel: () => {
        (Ee.current?.abort(),
          Z(!1),
          t("Model switch cancelled", { display: "system" }));
      },
    });
  if (D)
    return e(QW, {
      kind: D.kind,
      model: D.model,
      effort: D.pick?.level,
      hookReason: D.hookReason,
      onConfirm: () => {
        if (D.vettedFrom !== void 0 && zv(c.getState()) !== D.vettedFrom) {
          (k(null),
            t("The model changed while you were confirming; pick again", {
              display: "system",
            }));
          return;
        }
        B(D.model, D.pick, D.saveAsDefault);
      },
      onCancel: () => {
        (k(null), (oe.current = !1));
      },
    });
  return e(RZ, {
    initial: M,
    sessionModel: q,
    onSelect: v,
    onSetDefault: (s) => {
      oe.current = !0;
    },
    onCancel: A,
    isStandaloneCommand: !0,
    skipSettingsWrite: !0,
    showFastModeNotice: Mr() && X && af(x) && Jy(),
  });
}
function Rt(yn) {
  let pe = _(31),
    {
      getMessages: rt,
      onDone: V,
      storageV5: st,
      credentials: it,
      session: lt,
    } = yn,
    G = U(lo),
    [ie, _n] = d(null),
    [We, Mn] = d(null),
    [ue] = d(ao),
    Nt,
    Bt;
  if (pe[0] !== ue || pe[1] !== V)
    ((Nt = () => {
      let jt = jn();
      if (!jt) {
        V(Qe, { display: "system" });
        return;
      }
      let at = !1;
      return (
        jt
          .sendControlRequest(
            { subtype: "list_models" },
            { signal: ue.signal, timeoutMs: Et },
          )
          .then((kn) => {
            if (at || ue.signal.aborted) {
              return;
            }
            let Dt = kn.models.map(gdn).filter(co);
            (i("tengu_remote_model_picker", {
              outcome: S("opened"),
              model_count: Dt.length,
            }),
              _n(Dt));
          })
          .catch((An) => {
            if (at || ue.signal.aborted) {
              return;
            }
            (i("tengu_remote_model_picker", {
              outcome: S(An instanceof wT ? "timeout" : "fallback"),
            }),
              V(Ft, { display: "system" }));
          }),
        () => {
          at = !0;
        }
      );
    }),
      (Bt = [V, ue]),
      (pe[0] = ue),
      (pe[1] = V),
      (pe[2] = Nt),
      (pe[3] = Bt));
  else ((Nt = pe[2]), (Bt = pe[3]));
  if ((E(Nt, Bt), We !== null)) {
    let Ae;
    if (
      pe[4] !== it ||
      pe[5] !== rt ||
      pe[6] !== V ||
      pe[7] !== We ||
      pe[8] !== lt ||
      pe[9] !== st
    )
      ((Ae = e(De, {
        args: We,
        getMessages: rt,
        onDone: V,
        storageV5: st,
        credentials: it,
        session: lt,
      })),
        (pe[4] = it),
        (pe[5] = rt),
        (pe[6] = V),
        (pe[7] = We),
        (pe[8] = lt),
        (pe[9] = st),
        (pe[10] = Ae));
    else Ae = pe[10];
    return Ae;
  }
  if (ie === null) {
    let Ae;
    if (pe[11] !== ue || pe[12] !== V)
      ((Ae = e(Q1, {
        message: "Loading models from the cloud session\u2026",
        onCancel: () => {
          (ue.abort(),
            i("tengu_remote_model_picker", { outcome: S("cancelled") }),
            V(Ct, { display: "system" }));
        },
      })),
        (pe[11] = ue),
        (pe[12] = V),
        (pe[13] = Ae));
    else Ae = pe[13];
    return Ae;
  }
  let Ae;
  if (pe[14] !== G || pe[15] !== ie) {
    let Ie;
    if (pe[17] !== G)
      ((Ie = (Fn) => Fn.value === G), (pe[17] = G), (pe[18] = Ie));
    else Ie = pe[18];
    Ae = ie.find(Ie);
    ((pe[14] = G), (pe[15] = ie), (pe[16] = Ae));
  } else Ae = pe[16];
  let He = Ae,
    Ie;
  if (pe[19] !== He || pe[20] !== G || pe[21] !== ie)
    ((Ie = He
      ? He.value
      : vt(
          G === null
            ? []
            : ie.filter(
                (dt) =>
                  dt.value !== null &&
                  Xt(G).includes(Xt(dt.value)) &&
                  je(G) === je(dt.value),
              ),
        )),
      (pe[19] = He),
      (pe[20] = G),
      (pe[21] = ie),
      (pe[22] = Ie));
  else Ie = pe[22];
  let ft = Ie,
    Yt;
  if (pe[23] === p) ((Yt = (Cn) => Mn(Cn ?? "default")), (pe[23] = Yt));
  else Yt = pe[23];
  let Ve;
  if (pe[24] !== G || pe[25] !== V)
    ((Ve = () => {
      (i("tengu_model_command_menu", { action: S("cancel") }),
        V(
          G === null
            ? "Kept the workspace\u2019s current model"
            : `${nre}${eg(Zg(G))}`,
          { display: "system" },
        ));
    }),
      (pe[24] = G),
      (pe[25] = V),
      (pe[26] = Ve));
  else Ve = pe[26];
  let Ut;
  if (pe[27] !== ft || pe[28] !== ie || pe[29] !== Ve)
    ((Ut = e(RZ, {
      initial: ft,
      options: ie,
      headerText:
        "Models reported by the cloud session. Your pick applies to that session.",
      onSelect: Yt,
      onCancel: Ve,
      isStandaloneCommand: !0,
      skipSettingsWrite: !0,
    })),
      (pe[27] = ft),
      (pe[28] = ie),
      (pe[29] = Ve),
      (pe[30] = Ut));
  else Ut = pe[30];
  return Ut;
}
function De(wn) {
  let W = _(67),
    {
      args: J,
      getMessages: ct,
      onDone: b,
      storageV5: le,
      credentials: we,
      session: ae,
    } = wn,
    R = Yn(),
    be = It(),
    { addNotification: Fe } = Ir(),
    [I, Wt] = d(null),
    Ht;
  if (W[0] === p) ((Ht = []), (W[0] = Ht));
  else Ht = W[0];
  let mt = C(Ht),
    [Pn, Ge] = d(!1),
    Vt = C(null),
    [Gt, Kt] = d(null),
    [Sn] = d(mo),
    Ke = C(!1),
    ut = C(!1),
    pt = C(0),
    Le = C(!1),
    xt;
  if (
    W[1] !== Fe ||
    W[2] !== b ||
    W[3] !== ae ||
    W[4] !== be ||
    W[5] !== le ||
    W[6] !== R
  )
    ((xt = (Be, gt) => {
      let Rn = !Pt();
      let Jt = I3e(ae, Be, () => R.getState(), be, Rn, "command", gt, le);
      if (gt !== void 0 && Be !== null)
        Fe({
          key: `model-restricted-${Be}`,
          kind: "warning",
          text: Lh(gt, Be),
          priority: "immediate",
        });
      Ze(Be, Fe);
      let qt = mt.current;
      ((mt.current = []),
        b(
          qt.length > 0
            ? `${Jt}
${qt.map(Rl).join(`
`)}`
            : Jt,
        ));
    }),
      (W[1] = Fe),
      (W[2] = b),
      (W[3] = ae),
      (W[4] = be),
      (W[5] = le),
      (W[6] = R),
      (W[7] = xt));
  else xt = W[7];
  let Oe = xt,
    Qt;
  if (W[8] !== Oe || W[9] !== ct || W[10] !== R)
    ((Qt = (ht, Zt, $n) => {
      let yt = R.getState();
      if (
        !$n &&
        nLt(
          ht,
          yt.mainLoopModel,
          yt.mainLoopModelForSession,
          yt.cacheMissAckedAtOutputTokens,
          QF(ct()),
        )
      ) {
        Wt({ model: ht, substitutedFrom: Zt, vettedFrom: zv(R.getState()) });
        return;
      }
      Oe(ht, Zt);
    }),
      (W[8] = Oe),
      (W[9] = ct),
      (W[10] = R),
      (W[11] = Qt));
  else Qt = W[11];
  let _t = Qt,
    zt;
  if (W[12] !== _t || W[13] !== b || W[14] !== ae || W[15] !== R)
    ((zt = (xe, eo) => {
      let Je = new AbortController();
      ((Vt.current = Je),
        Ge(!0),
        Ym(ae, () => P_(ae, R.getState, xe, "command", { signal: Je.signal }))
          .then((Se) => {
            if ((Ge(!1), Je.signal.aborted)) {
              return;
            }
            if (((mt.current = Se.messages), Se.decision === "block")) {
              (g("model_switch", "blocked_by_hook"),
                b(rI(xe, Se.reason, Se.messages), { display: "system" }));
              return;
            }
            if (Se.decision === "ask") {
              Wt({
                model: xe,
                substitutedFrom: eo,
                hookReason: Se.reason ?? "Confirm switching the model",
                vettedFrom: zv(R.getState()),
              });
              return;
            }
            _t(xe, eo, Se.skipConfirm);
          })
          .catch((to) => {
            if ((Ge(!1), Je.signal.aborted)) {
              return;
            }
            (h(ge(to)),
              b(`Model switch failed: ${Rl(l(to))}`, { display: "system" }));
          }));
    }),
      (W[12] = _t),
      (W[13] = b),
      (W[14] = ae),
      (W[15] = R),
      (W[16] = zt));
  else zt = W[16];
  let he = zt,
    oo;
  if (
    W[17] !== Fe ||
    W[18] !== J ||
    W[19] !== we ||
    W[20] !== b ||
    W[21] !== he ||
    W[22] !== ae ||
    W[23] !== be ||
    W[24] !== le
  )
    ((oo = () => {
      let no = jn();
      if (no && Ks()) {
        ySe(J, le, we).then((ye) => {
          if (Ke.current) {
            return;
          }
          if (!ye.ok) {
            ((Le.current = !0), b(ye.message, { display: "system" }));
            return;
          }
          if (ye.model !== null && n2(ye.model)) {
            (g("model_fable_consent", "remote_thin_client_blocked"),
              (Le.current = !0),
              b(
                `${Hm(wt(ye.model))} uses usage credits, and this cloud session can\u2019t show the consent prompt yet \xB7 switch models from the workspace, or consent once in a local session first`,
                { display: "system" },
              ));
            return;
          }
          let z = ye.model;
          return no
            .sendControlRequest({ subtype: "set_model", model: z ?? void 0 })
            .then(() => {
              let Mt = !1;
              if (
                (be(
                  (qe) => (
                    (Mt = Mr() && !!qe.fastMode && !db(z, qe.fastMode)),
                    Jf(ae, qe, z, "command"),
                    {
                      ...qe,
                      mainLoopModel: z,
                      mainLoopModelForSession: null,
                      ...(Mt && { fastMode: !1 }),
                    }
                  ),
                ),
                Mt)
              )
                pb(!0, !1);
              if (Ke.current) {
                Fe({
                  key: `remote-model-switch-landed-${z ?? "default"}`,
                  kind: "event",
                  text:
                    z === null
                      ? "The cloud session reset its model to the workspace default"
                      : `The cloud session switched to ${Zg(z)}`,
                  priority: "high",
                });
                return;
              }
              if (ye.substitutedFrom !== void 0 && z !== null)
                Fe({
                  key: `model-restricted-${z}`,
                  kind: "warning",
                  text: Lh(ye.substitutedFrom, z),
                  priority: "immediate",
                });
              if (ye.substitutedFrom !== void 0)
                g("model_switch", "family_alias_stepped_down");
              else y("model_switch");
              ((Le.current = !0),
                b(
                  z === null
                    ? "Reset model to the workspace default"
                    : `${tre}${eg(Zg(z))}`,
                ));
            })
            .catch((kt) => {
              if ((n(`[remote] set_model rejected: ${l(kt)}`), Ke.current)) {
                return;
              }
              let ro = kt instanceof wT;
              (f("model_switch", ro ? "timeout" : "remote_rejected"),
                (Le.current = !0),
                b(
                  ro
                    ? `${qWt}${eg(J)} may still have been applied`
                    : `${zWt}${eg(J)}: ${Rl(l(kt))}`,
                  { display: "system" },
                ));
            });
        });
        return;
      }
      ySe(J, le, we).then((Re) => {
        if (!Re.ok) {
          b(Re.message, { display: "system" });
          return;
        }
        if (rLt(Re.model)) {
          ((ut.current = !1),
            (pt.current = pt.current + 1),
            Kt({ model: Re.model, substitutedFrom: Re.substitutedFrom }));
          return;
        }
        he(Re.model, Re.substitutedFrom);
      });
    }),
      (W[17] = Fe),
      (W[18] = J),
      (W[19] = we),
      (W[20] = b),
      (W[21] = he),
      (W[22] = ae),
      (W[23] = be),
      (W[24] = le),
      (W[25] = oo));
  else oo = W[25];
  let so;
  if (
    W[26] !== J ||
    W[27] !== we ||
    W[28] !== b ||
    W[29] !== he ||
    W[30] !== be ||
    W[31] !== le
  )
    ((so = [J, b, be, he, le, we]),
      (W[26] = J),
      (W[27] = we),
      (W[28] = b),
      (W[29] = he),
      (W[30] = be),
      (W[31] = le),
      (W[32] = so));
  else so = W[32];
  if ((E(oo, so), Sn)) {
    const j = `Switching the cloud session to ${J}\u2026`;
    let K;
    if (W[33] !== J || W[34] !== b)
      ((K = () => {
        if (Le.current) {
          return;
        }
        ((Le.current = !0),
          (Ke.current = !0),
          g("model_switch", "remote_wait_cancelled"),
          b(
            `Stopped waiting for the cloud session \u2014 you\u2019ll get a notice if the switch to ${J} still lands`,
            { display: "system" },
          ));
      }),
        (W[33] = J),
        (W[34] = b),
        (W[35] = K));
    else K = W[35];
    let Ce;
    if (W[36] !== j || W[37] !== K)
      ((Ce = e(Q1, { message: j, onCancel: K })),
        (W[36] = j),
        (W[37] = K),
        (W[38] = Ce));
    else Ce = W[38];
    return Ce;
  }
  if (Gt) {
    let { model: Te, substitutedFrom: At } = Gt;
    let Ln = pt.current;
    let j;
    if (W[39] !== Te) ((j = Hm(wt(Te ?? dh()))), (W[39] = Te), (W[40] = j));
    else j = W[40];
    let K;
    if (
      W[41] !== Te ||
      W[42] !== b ||
      W[43] !== he ||
      W[44] !== R ||
      W[45] !== At
    )
      ((K = (On, Nn) => {
        if (Ln !== pt.current) {
          return !1;
        }
        if (ut.current) {
          return !1;
        }
        if (((ut.current = !0), Kt(null), On === "consent")) {
          he(Te, At);
          return;
        }
        b(Nn ?? `${nre}${eg(Zg(e$(R.getState())))}`, { display: "system" });
      }),
        (W[41] = Te),
        (W[42] = b),
        (W[43] = he),
        (W[44] = R),
        (W[45] = At),
        (W[46] = K));
    else K = W[46];
    let Ce;
    if (W[47] !== j || W[48] !== K)
      ((Ce = e(fHe, { variant: "picker", modelName: j, onDone: K })),
        (W[47] = j),
        (W[48] = K),
        (W[49] = Ce));
    else Ce = W[49];
    return Ce;
  }
  if (I) {
    let j;
    if (
      W[50] !== Oe ||
      W[51] !== b ||
      W[52] !== I.model ||
      W[53] !== I.substitutedFrom ||
      W[54] !== I.vettedFrom ||
      W[55] !== R
    )
      ((j = () => {
        if (I.vettedFrom !== void 0 && zv(R.getState()) !== I.vettedFrom) {
          b("The model changed while you were confirming; pick again", {
            display: "system",
          });
          return;
        }
        Oe(I.model, I.substitutedFrom);
      }),
        (W[50] = Oe),
        (W[51] = b),
        (W[52] = I.model),
        (W[53] = I.substitutedFrom),
        (W[54] = I.vettedFrom),
        (W[55] = R),
        (W[56] = j));
    else j = W[56];
    let K;
    if (W[57] !== b || W[58] !== R)
      ((K = () =>
        b(`${nre}${eg(Zg(e$(R.getState())))}`, { display: "system" })),
        (W[57] = b),
        (W[58] = R),
        (W[59] = K));
    else K = W[59];
    let Ce;
    if (
      W[60] !== I.hookReason ||
      W[61] !== I.model ||
      W[62] !== j ||
      W[63] !== K
    )
      ((Ce = e(QW, {
        kind: "model",
        model: I.model,
        effort: void 0,
        hookReason: I.hookReason,
        onConfirm: j,
        onCancel: K,
      })),
        (W[60] = I.hookReason),
        (W[61] = I.model),
        (W[62] = j),
        (W[63] = K),
        (W[64] = Ce));
    else Ce = W[64];
    return Ce;
  }
  if (Pn) {
    let j;
    if (W[65] !== b)
      ((j = e(Q1, {
        message: "Running PreModelSwitch hooks\u2026",
        onCancel: () => {
          (Vt.current?.abort(),
            Ge(!1),
            b("Model switch cancelled", { display: "system" }));
        },
      })),
        (W[65] = b),
        (W[66] = j));
    else j = W[66];
    return j;
  }
  return null;
}
function Ze(r, t) {
  let o = UAt(r);
  if (!o) return;
  t({
    key: "model-deprecation-warning",
    kind: "warning",
    text: o,
    color: "warning",
    priority: "immediate",
    invalidates: ["model-deprecation-warning"],
  });
}
function $t(In) {
  let { onDone: Bn } = In,
    Dn = U(uo),
    Wn = U(po),
    Hn = U(go),
    Vn = U(bo);
  return (
    Bn(
      P3e({
        mainLoopModel: Dn,
        mainLoopModelForSession: Wn,
        sessionEffort: Hn,
        settingsEffortTable: Vn,
      }),
    ),
    null
  );
}
var bn = async (r, t, o) => {
  if (((o = o?.trim() || ""), Hur(o)))
    return (
      i("tengu_model_command_inline_help", { args: u(o) }),
      e($t, { onDone: r })
    );
  if (DA.includes(o)) {
    r(
      "Run /model to open the model selection menu, or /model [modelName] to set the model.",
      { display: "system" },
    );
    return;
  }
  if (o)
    return (
      i("tengu_model_command_inline", {
        args_hash: Tn(o),
        args_length: o.length,
      }),
      e(De, {
        args: o,
        getMessages: () => t.getMessages?.() ?? t.messages,
        onDone: r,
        storageV5: t.storageV5,
        credentials: t.credentials,
        session: t.session,
      })
    );
  if (jn()) {
    if (eE("modelCatalog") && Ks())
      return e(Rt, {
        getMessages: () => t.getMessages?.() ?? t.messages,
        onDone: r,
        storageV5: t.storageV5,
        credentials: t.credentials,
        session: t.session,
      });
    r(Qe, { display: "system" });
    return;
  }
  return e(io, {
    onDone: r,
    getMessages: () => t.getMessages?.() ?? t.messages,
    storageV5: t.storageV5,
    credentials: t.credentials,
    session: t.session,
  });
};
export { bn as call };

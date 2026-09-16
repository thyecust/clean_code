// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x, oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Vl } from "../权限系统/chunk-e4pfvp7x.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { el } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
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
import {
  Hp,
  ret,
  xkn,
  oet,
  rie,
  Wt,
  JD,
  br,
  ls,
  e_,
  Bkn,
  D5,
  Pa,
  yb,
  met,
  get,
} from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
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
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { yw, jg, Cn, rl, $j } from "./chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
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
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
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
import "./chunk-rr78st95.js";
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
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { xut } from "./chunk-fx5ekm7e.js";
import { wte, lwe, FS } from "./chunk-qpgskeea.js";
import "./chunk-y8j05azr.js";
import "./chunk-01jnk0v2.js";
import "./chunk-p1dkvpxj.js";
import { yte, sT, icn, acn, lcn } from "./chunk-pdd7kz7p.js";
import "./chunk-5gz5xvw9.js";
import "./chunk-kshc4v5t.js";
import "../工具Monitor/工具Monitor.981fw9dy.js";
import "./chunk-qdg189tc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d8c3rz29.js";
import "./chunk-stvynqrz.js";
import { Sce, yPe, Mut, Nut, Fut, $ut, dM, bm } from "./chunk-b6k1z7an.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cj5z5g82.js";
import "./chunk-x29r16ke.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ghshta0.js";
import {
  mO,
  Mee,
  gO,
  vut,
  M4,
  Nee,
  pPe,
  YSe,
  JSe,
  QSe,
  b9,
  w9,
  Xb,
  fPe,
  yce,
  E7,
  mPe,
  gjn,
  kon,
  Fee,
  DGe,
  ZSe,
  LGe,
  CNt,
  Ion,
  Pon,
  kut,
} from "./chunk-pvztfdrb.js";
import "../Teammates团队/chunk-weg7y2ya.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f7n720sn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wm4s322b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dgth8ahx.js";
import "../Bridge-RemoteControl/chunk-jpq2fv3g.js";
import "./chunk-yrjr7v83.js";
import "./chunk-5gvg7p5p.js";
import "../Teammates团队/chunk-y89mhs4a.js";
import "../CodeReview/chunk-cwdcyphs.js";
import { QHe } from "../../01-核心基础设施/共享小工具-未细化/chunk-86zcr8cb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-3k9e6gxt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { Ft } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function R(ee) {
  let D = _(8),
    { name: A, url: E, iconColor: q } = ee,
    L = q === void 0 ? "claude" : q,
    M;
  if (D[0] !== L)
    ((M = e(t, { color: L, children: Vl })), (D[0] = L), (D[1] = M));
  else M = D[1];
  let k;
  if (D[2] !== A || D[3] !== E)
    ((k = E
      ? e(ct, {
          url: E,
          fallback: A === E ? void 0 : `${A} (${E})`,
          children: A,
        })
      : A),
      (D[2] = A),
      (D[3] = E),
      (D[4] = k));
  else k = D[4];
  let V;
  if (D[5] !== M || D[6] !== k)
    ((V = r(t, { children: [M, " ", k] })), (D[5] = M), (D[6] = k), (D[7] = V));
  else V = D[7];
  return V;
}
import { basename as W } from "path";
var P = null,
  U = null,
  O = null,
  j = null,
  Y = 8;
function H(s, m) {
  let n = FS() ? wte(s) : s;
  if (n.action === "live-edit")
    return U
      ? U.renderLiveEditToolUse(n, m?.verbose === !0, bm())
      : e(t, { children: "live-edit" });
  if (n.action === "preview") {
    let d = n,
      a = typeof d.file_path === "string" ? d.file_path : "",
      c = yb(Pa(a) ?? "(no file)");
    if (m?.verbose !== !0)
      return r(t, { children: ["preview ", el(W(c), 60)] });
    let f = Fut(d),
      g = $ut(d);
    return r(t, {
      children: [
        "preview ",
        el(c, 1024),
        e(t, {
          dimColor: !0,
          children: ` \xB7 ${f.join("/")} \xB7 ${g.join("+")}`,
        }),
      ],
    });
  }
  if (n.action === "sync")
    return r(t, {
      children: [
        "sync working copy",
        typeof n.file_path === "string"
          ? ` ${el(met(n.file_path) || "(unprintable path)", 256)}`
          : "",
        typeof n.url === "string"
          ? ` \u2192 ${ls(n.url, "(unrecognized address)")}`
          : "",
      ],
    });
  if (n.action === "version")
    return r(t, {
      children: [
        "version",
        typeof n.url === "string"
          ? ` ${ls(n.url, "(unrecognized address)")}`
          : "",
        typeof n.label === "string" && n.label !== ""
          ? e(t, { dimColor: !0, children: ` \xB7 ${Pa(n.label) ?? ""}` })
          : null,
      ],
    });
  if (n.action === "list") {
    if (Fee(n)) {
      let a = DGe(n),
        c = fPe(n),
        f =
          c !== void 0
            ? `"${Pa(oe(c, 200)) ?? ""}"`
            : ls(Xb(n), "(unrecognized address)");
      return r(t, {
        children: [
          "list",
          a === "shared" ? " (shared)" : a === "all" ? " (mine + shared)" : "",
          " ",
          "of type ",
          e(t, { dimColor: !0, children: f }),
        ],
      });
    }
    let d = D5(n);
    return r(t, {
      children: [
        "list",
        d === "shared" ? " (shared)" : d === "all" ? " (mine + shared)" : "",
      ],
    });
  }
  if (n.action === "list_types") {
    let d =
      typeof n.type_query === "string" && n.type_query !== ""
        ? Pa(oe(n.type_query, 200))
        : null;
    return r(t, {
      children: [
        "list types",
        d ? e(t, { dimColor: !0, children: ` "${d}"` }) : "",
      ],
    });
  }
  if (n.action === "describe_type")
    return r(t, {
      children: [
        "describe type",
        " ",
        e(t, { dimColor: !0, children: ls(Xb(n), "(unrecognized address)") }),
      ],
    });
  if (
    n.action === "comments" ||
    n.action === "reply" ||
    n.action === "resolve"
  ) {
    let d = typeof n.url === "string" ? Wt(n.url) : null,
      a =
        n.action === "reply" && m?.verbose === !0
          ? mPe(mO(n).replyText)
          : void 0,
      c =
        (n.action === "reply" || n.action === "resolve") &&
        m?.verbose === !0 &&
        d !== null
          ? Cn(d.slug)
          : void 0,
      f = $j(c);
    return r(t, {
      children: [
        n.action,
        r(t, {
          dimColor: !0,
          children: [" ", d !== null ? br(d) : "(unrecognized address)"],
        }),
        f !== "" && e(t, { dimColor: !0, children: f }),
        a !== void 0 &&
          a !== "" &&
          e(t, { dimColor: !0, children: ` \u2014 "${a}"` }),
      ],
    });
  }
  if (
    n.action === "read_page_data" ||
    n.action === "read_db" ||
    n.action === "write_db" ||
    n.action === "room_send" ||
    n.action === "watch" ||
    n.action === "unwatch" ||
    n.action === "resume_replies" ||
    n.action === "status" ||
    n.action === "verify" ||
    n.action === "open"
  ) {
    let d =
      n.action === "read_page_data"
        ? "read page data"
        : n.action === "read_db"
          ? "read database"
          : n.action === "write_db"
            ? "write database"
            : n.action === "room_send"
              ? `room send ${LGe(ZSe(n).topic)}`
              : n.action === "resume_replies"
                ? "resume auto-replies"
                : n.action;
    if ((n.action === "status" || n.action === "verify") && n.url === void 0)
      return e(t, { children: d });
    let a = n.action === "read_db" ? yce(n) : void 0,
      c =
        a?.kind === "dir"
          ? ` \u2192 ${el(Pa(a.dir) ?? "(unprintable path)", 1024)}`
          : a?.kind === "unresolvable"
            ? " \u2192 (unresolvable out_dir)"
            : "";
    if (n.action === "write_db" && m?.verbose === !0) {
      let f = typeof n.url === "string" ? Wt(n.url) : null,
        g = f !== null ? Cn(f.slug) : void 0,
        p = $j(g),
        { opLabel: T, docTarget: y } = gjn(n),
        { data: C, filePath: F } = b9(n),
        z =
          T === sT
            ? [Ion(w9(n)), kon(Pon(w9(n)))]
                .filter((B) => B !== "")
                .join(" \u2014 ")
            : F !== void 0
              ? `from ${el(Pa(F) ?? "(unprintable path)", 1024)}`
              : E7(C),
        N = rl(g);
      return r(t, {
        children: [
          d,
          " (",
          T,
          ")",
          " ",
          e(t, { dimColor: !0, children: ls(n.url, "(unrecognized address)") }),
          e(t, { dimColor: !0, children: ` \u2014 ${y}${p}` }),
          N !== "" && e(t, { color: "warning", children: N }),
          z !== "" && e(t, { dimColor: !0, children: ` \u2014 ${z}` }),
        ],
      });
    }
    if (n.action === "room_send" && m?.verbose === !0) {
      let f = typeof n.url === "string" ? Wt(n.url) : null,
        g = f !== null ? Cn(f.slug) : void 0,
        p = $j(g),
        T = E7(ZSe(n).data),
        y = rl(g);
      return r(t, {
        children: [
          d,
          " ",
          e(t, { dimColor: !0, children: ls(n.url, "(unrecognized address)") }),
          p !== "" && e(t, { dimColor: !0, children: p }),
          y !== "" && e(t, { color: "warning", children: y }),
          T !== "" && e(t, { dimColor: !0, children: ` \u2014 ${T}` }),
        ],
      });
    }
    if (n.action === "resume_replies" && m?.verbose === !0) {
      let f = typeof n.url === "string" ? Wt(n.url) : null,
        g = f !== null ? Cn(f.slug) : void 0;
      return r(t, {
        children: [
          d,
          " ",
          e(t, { dimColor: !0, children: ls(n.url, "(unrecognized address)") }),
          e(t, { dimColor: !0, children: $j(g) }),
        ],
      });
    }
    return r(t, {
      children: [
        d,
        " ",
        r(t, {
          dimColor: !0,
          children: [ls(n.url, "(unrecognized address)"), c],
        }),
      ],
    });
  }
  if (
    n.action === "get_endpoints" ||
    n.action === "call_endpoint" ||
    n.action === "run_script"
  ) {
    let { verb: d, body: a } = O
      ? O.handlersToolUseLine(n, m?.verbose === !0)
      : { verb: String(n.action), body: "" };
    return r(t, {
      children: [
        d,
        " ",
        e(t, { dimColor: !0, children: ls(n.url, "(unrecognized address)") }),
        a !== "" && e(t, { dimColor: !0, children: a }),
      ],
    });
  }
  if (n.action === "read") {
    let d = JD(n.url),
      a = d !== null ? Cn(d.slug) : void 0,
      c = m?.verbose === !0 ? rl(a) : "";
    return r(t, {
      children: [
        "read",
        " ",
        e(t, {
          dimColor: !0,
          children: d !== null ? br(d) : "(unrecognized address)",
        }),
        c !== "" && e(t, { color: "warning", children: c }),
      ],
    });
  }
  if (n.action === "upload_asset") {
    let d = typeof n.url === "string" ? Wt(n.url) : null,
      a = d !== null ? Cn(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? rl(a) : "",
      g = el(Pa(n.file_path ?? "") ?? "(unprintable path)", 1024);
    return r(t, {
      children: [
        "upload ",
        g,
        e(t, {
          dimColor: !0,
          children: ` \u2192 ${ls(n.url, "(unrecognized address)")}${c ? $j(a) : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (n.action === "copy_from") {
    let d = typeof n.url === "string" ? Wt(n.url) : null,
      a = d !== null ? Cn(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? rl(a) : "",
      g = n.asset_ids,
      p = Array.isArray(g) ? g.length : 0,
      T = n.from_url,
      y = typeof T === "string" ? Wt(T) : null,
      C = c ? pPe(y !== null ? Cn(y.slug) : void 0, "assets") : "";
    return r(t, {
      children: [
        "copy ",
        p,
        " ",
        x(p, "asset"),
        " from",
        " ",
        ls(T, "(unrecognized address)"),
        C !== "" && e(t, { color: "warning", children: C }),
        e(t, {
          dimColor: !0,
          children: ` \u2192 ${ls(n.url, "(unrecognized address)")}${c ? $j(a) : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (n.action === "list_files" || n.action === "read_file") {
    let d = typeof n.url === "string" ? Wt(n.url) : null,
      a = d !== null ? Cn(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? rl(a) : "",
      g = "list files",
      p = "";
    if (n.action === "read_file") {
      let { path: T } = JSe(n);
      g = `save file ${T !== void 0 ? el(Pa(T) ?? "(unprintable path)", 256) : "(no path)"}`;
      let y = n[gO] != null,
        C = QSe(n, { outDirJudged: y });
      p = ` \u2192 ${"dest" in C ? el(Pa(C.dest) ?? "(unprintable path)", 1024) : "(no destination)"}`;
    }
    return r(t, {
      children: [
        g,
        e(t, {
          dimColor: !0,
          children: ` of ${ls(n.url, "(unrecognized address)")}${c ? $j(a) : ""}${p}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (n.action === "pin" || n.action === "unpin") {
    let d = typeof n.url === "string" ? Wt(n.url) : null,
      a = n[M4],
      c = me(a) ? a.title : void 0,
      f = Nee(
        (d !== null ? Cn(d.slug)?.title : void 0) ||
          (typeof c === "string" ? c : ""),
      );
    return r(t, {
      children: [
        n.action,
        f ? ` "${f}"` : "",
        e(t, {
          dimColor: !0,
          children: ` \xB7 ${ls(n.url, "(unrecognized address)")}`,
        }),
      ],
    });
  }
  if (n.action === "delete") {
    let d = typeof n.url === "string" ? Wt(n.url) : null,
      a = d !== null ? Cn(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? rl(a) : "",
      g = n[vut],
      p = me(g) ? g.title : void 0,
      T = Nee(a?.title || (typeof p === "string" ? p : ""));
    return r(t, {
      children: [
        "delete",
        T ? ` "${T}"` : "",
        e(t, {
          dimColor: !0,
          children: ` \xB7 ${ls(n.url, "(unrecognized address)")}${c ? $j(a) : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (
    n.action === "list_assets" ||
    n.action === "read_asset" ||
    n.action === "delete_asset"
  ) {
    let d = typeof n.url === "string" ? Wt(n.url) : null,
      a = d !== null ? Cn(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? rl(a) : "",
      { assetId: g } = Mee(n),
      p = g !== void 0 && Hp.test(g) ? g : "(no id)",
      T = n.action === "read_asset" ? YSe(n) : void 0,
      y =
        n.action === "delete_asset"
          ? `delete asset ${p}`
          : n.action === "read_asset"
            ? `save asset ${p}`
            : "list assets";
    return r(t, {
      children: [
        y,
        e(t, {
          dimColor: !0,
          children: ` ${n.action === "delete_asset" ? "from" : "of"} ${ls(n.url, "(unrecognized address)")}${c ? $j(a) : ""}${T !== void 0 ? ` \u2192 ${el(Pa(`${T}.*`) ?? "(unprintable path)", 1024)}` : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  let { file_path: b, url: w } = n,
    i = m?.verbose === !0,
    l = i && dM() && kut(n) ? yte.trimStart() : void 0,
    u = Xb(n);
  if (u !== void 0) {
    let d = ls(u, "(unrecognized address)"),
      a = b !== void 0 ? yb(Pa(b) ?? "(unprintable path)") : void 0;
    return r(t, {
      children: [
        a !== void 0 ? `${a} ` : "",
        r(t, { dimColor: !0, children: ["\u2192 new Artifact from type ", d] }),
        l !== void 0 &&
          e(t, {
            dimColor: !0,
            children: `
${l}`,
          }),
      ],
    });
  }
  let h = i && w !== void 0 ? ls(w, "(unrecognized address)") : void 0,
    v = yb(Pa(b ?? "") ?? "(unprintable path)");
  return r(t, {
    children: [
      v,
      h !== void 0 && r(t, { dimColor: !0, children: [" \u2192 ", h] }),
      l !== void 0 &&
        e(t, {
          dimColor: !0,
          children: `
${l}`,
        }),
    ],
  });
}
function S(s) {
  return (m, n) => H(lwe(s, m), n);
}
var De = S("comments"),
  Ue = S("data"),
  Oe = S("check");
function je(s) {
  let m = s.at(-1)?.data;
  if (!m || m.type !== "artifact_publish_retry" || m.resolved) return null;
  let n =
    m.status === 503
      ? "Publish service temporarily unavailable"
      : "Publish service busy";
  return e(xe, {
    children: r(t, {
      dimColor: !0,
      children: [
        n,
        " \u2014 retrying (attempt ",
        m.attempt,
        " of ",
        m.maxAttempts,
        ")\u2026",
      ],
    }),
  });
}
function X(s) {
  let m = CNt(s);
  return (
    m === "handlers_doc" || m === "handler_result" || m === "script_result"
  );
}
function J(s) {
  return "preview" in s && CNt(s) === "preview";
}
function We(s, m, n) {
  if (J(s)) {
    let i = {
        ...s.preview,
        file: oe(s.preview.file, 4096),
        shots: s.preview.shots
          .slice(0, Mut)
          .map((a) => ({ ...a, theme: oe(a.theme, 32) })),
        issues: s.preview.issues.slice(0, Nut),
        widths: s.preview.widths.slice(0, Sce),
        themes: s.preview.themes.slice(0, 2).map((a) => oe(a, 32)),
      },
      l = G(i.shots, (a) => a.error === void 0),
      u = i.issues.length + (i.issuesDropped ?? 0),
      h = (a, c) => {
        let f = oe(a, c),
          g = Pa(f) ?? "";
        return f.length < a.length ? `${g}\u2026` : g;
      },
      v = n?.verbose === !0 ? i.issues : i.issues.slice(0, Y),
      d = i.issues.length - v.length + (i.issuesDropped ?? 0);
    return e(xe, {
      children: r(o, {
        flexDirection: "column",
        children: [
          r(t, {
            dimColor: !0,
            children: [
              l === 0 ? "Could not preview " : "Previewed ",
              h(W(i.file), 80),
              " \xB7 ",
              h(i.widths.join("/"), 24),
              " \xB7",
              " ",
              h(i.themes.join("+"), 24),
              " \xB7 ",
              u === 0
                ? i.renderError !== void 0
                  ? "browser did not start \u2014 static checks only"
                  : "no issues"
                : `${u}${i.issuesDropped === yPe ? "+" : ""} ${x(u, "issue")}`,
              l < i.shots.length && i.renderError === void 0
                ? ` \xB7 ${l}/${i.shots.length} captured`
                : "",
            ],
          }),
          i.renderError !== void 0 &&
            e(o, {
              paddingLeft: 2,
              children: e(t, {
                color: "warning",
                children: h(i.renderError, 200),
              }),
            }),
          v.map((a, c) =>
            r(
              o,
              {
                paddingLeft: 2,
                flexDirection: "row",
                children: [
                  e(t, { dimColor: !0, children: "\xB7 " }),
                  e(t, { dimColor: !0, children: h(a.text, 200) }),
                ],
              },
              c,
            ),
          ),
          d > 0 &&
            e(o, {
              paddingLeft: 2,
              children: r(t, {
                dimColor: !0,
                children: [
                  "\xB7 \u2026 ",
                  d,
                  " more",
                  i.issues.length > v.length ? " (ctrl+o)" : "",
                ],
              }),
            }),
          n?.verbose === !0 &&
            i.shots.map((a, c) =>
              e(
                o,
                {
                  paddingLeft: 2,
                  children: r(t, {
                    dimColor: !0,
                    children: [
                      h(`${a.width} ${a.theme}`, 20),
                      ":",
                      " ",
                      a.error !== void 0
                        ? `not captured \u2014 ${h(a.error, 120)}`
                        : h(a.path ?? "(not saved)", 512),
                    ],
                  }),
                },
                `s${c}`,
              ),
            ),
        ],
      }),
    });
  }
  if ("read" in s)
    return e(QHe, {
      bytes: s.read.bytes,
      status: `${s.read.code} ${s.read.codeText}`,
    });
  if ("threads" in s) {
    let i = s.threads_dropped === !0,
      l = s.thread_filter !== void 0;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: l
          ? s.threads.some((u) => u.id === s.thread_filter)
            ? "read 1 comment thread (filtered)"
            : i
              ? "requested thread not among the readable threads"
              : "requested thread not in this result"
          : s.threads.length === 0
            ? i
              ? "comment threads could not be read"
              : "no comment threads yet"
            : `read ${s.threads.length} comment ${x(s.threads.length, "thread")}${i ? " (some could not be read)" : ""}`,
      }),
    });
  }
  if ("replied" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.replied
          ? "replied to comment thread"
          : s.summon_answered === !0
            ? "reply not posted (summon already answered)"
            : s.summon_foreign === !0
              ? "reply not posted (another user's summon or activation)"
              : s.already_answered === !0
                ? "reply not posted (thread already answered)"
                : "reply needs thread activation by the user",
      }),
    });
  if ("thread_resolved" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.thread_resolved
          ? "resolved comment thread"
          : s.not_authorized === !0
            ? "not resolved (not the thread starter or a writer)"
            : s.summon_foreign === !0
              ? "not resolved (another user's activation)"
              : s.relayed_credential === !0
                ? "not resolved (unavailable from this session)"
                : "not resolved (thread not activated)",
      }),
    });
  if ("liveEdit" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: P
          ? P.renderLiveEditResultText(s.liveEdit)
          : "live edit landed",
      }),
    });
  if ("sync" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: P ? P.renderSyncResultText(s.sync) : "synced",
      }),
    });
  if ("versioned" in s) {
    let i = typeof s.versioned.url === "string" ? Wt(s.versioned.url) : null,
      l = i ? br(i) : void 0;
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: [
          "Versioned",
          " ",
          l !== void 0 ? e(R, { name: l, url: l }) : "(unrecognized address)",
        ],
      }),
    });
  }
  if ("db_read" in s) {
    let i = s.db_read,
      l = i.docs?.length ?? 0,
      u = i.saved,
      h =
        me(u) &&
        typeof u.dir === "string" &&
        Array.isArray(u.files) &&
        Array.isArray(u.skipped)
          ? {
              dir: u.dir,
              fileCount: u.files.length,
              skippedCount: u.skipped.length,
            }
          : void 0,
      v =
        h !== void 0
          ? `saved ${h.fileCount} ${x(h.fileCount, "document")} under ${el(Pa(h.dir) ?? "(unprintable path)", 1024)}${h.skippedCount > 0 ? ` (${h.skippedCount} skipped)` : ""}`
          : void 0;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          i.found === !1
            ? "no such document"
            : (v ?? `read ${l} ${x(l, "document")}`),
      }),
    });
  }
  if ("db_write" in s) {
    let i =
      "results" in s.db_write && Array.isArray(s.db_write.results)
        ? s.db_write.results.length
        : void 0;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: !s.db_write.committed
          ? "database write not committed"
          : i !== void 0
            ? `database batch ${"fallback" in s.db_write && s.db_write.fallback === "sequential" ? "written one at a time" : "committed"} (${i} ${x(i, "write")})`
            : "database write committed",
      }),
    });
  }
  if (X(s))
    return j
      ? j.renderHandlersResult(s)
      : e(xe, {
          children: e(t, {
            dimColor: !0,
            children: "This record is unreadable in this build.",
          }),
        });
  if ("room_send" in s) {
    let i = s.room_send,
      l =
        typeof i.peers === "number" &&
        Number.isSafeInteger(i.peers) &&
        i.peers >= 0
          ? `${i.peers} ${x(i.peers, "peer")}`
          : "? peers",
      u = typeof i.reason === "string" ? jg(i.reason, { max: 32 }) : void 0;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          i.delivered === !0
            ? `sent to ${l}`
            : u === void 0
              ? "not sent"
              : `not sent (${u})`,
      }),
    });
  }
  if ("asset_upload" in s) {
    let i = s.asset_upload;
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: [
          "uploaded ",
          Pa(i.file_name) ?? "asset",
          " (",
          Ft(i.size_bytes),
          ") as ",
          Pa(i.url) ?? "_blob/\u2026",
        ],
      }),
    });
  }
  if ("asset_list" in s) {
    let i = me(s.asset_list) ? s.asset_list : {},
      l = Array.isArray(i.assets) ? i.assets.length : void 0;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          l === void 0
            ? "listed assets (record unreadable)"
            : l === 0
              ? "no assets listed"
              : `listed ${l} ${x(l, "asset")}${typeof i.next === "string" && i.next !== "" ? " (more follow)" : ""}`,
      }),
    });
  }
  if ("file_list" in s) {
    let i = me(s.file_list) ? s.file_list : {},
      l = Array.isArray(i.files) ? i.files.length : void 0;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          l === void 0
            ? "listed files (record unreadable)"
            : l === 0
              ? "no files listed"
              : `listed ${l} ${x(l, "file")}`,
      }),
    });
  }
  if ("file_read" in s) {
    let i = me(s.file_read) ? s.file_read : {};
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: [
          "saved",
          " ",
          el(
            (typeof i.saved_to === "string" ? Pa(i.saved_to) : void 0) ??
              "file",
            1024,
          ),
          typeof i.size_bytes === "number" ? ` (${Ft(i.size_bytes)})` : "",
        ],
      }),
    });
  }
  if ("asset_read" in s) {
    let i = s.asset_read;
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: [
          "saved ",
          el(Pa(i.path) ?? "asset", 1024),
          " (",
          Ft(i.size_bytes),
          ")",
        ],
      }),
    });
  }
  if ("asset_delete" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.asset_delete.deleted ? "asset deleted" : "no such asset",
      }),
    });
  if ("asset_copy" in s) {
    let i = Array.isArray(s.asset_copy.assets) ? s.asset_copy.assets.length : 0;
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: ["copied ", i, " ", x(i, "asset"), " into the artifact"],
      }),
    });
  }
  if ("artifact_delete" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          s.artifact_delete.already_gone === !0
            ? "Artifact was already deleted"
            : "Artifact deleted",
      }),
    });
  if ("pin" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.pin.pinned ? "pinned to the sidebar" : "unpinned",
      }),
    });
  if ("watch" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.watch.watching
          ? s.watch.events?.includes("comment")
            ? "watching for republishes and to-Claude comments"
            : "watching for republishes"
          : s.watch.reason === "stop_latched"
            ? "not watching (stopped earlier in this session)"
            : `not watching (${e_(s.watch.reason ?? s.watch.outcome) ?? "unknown"})`,
      }),
    });
  if ("unwatch" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.unwatch.was_watching
          ? "stopped watching"
          : "no watch to stop",
      }),
    });
  if ("watches" in s) {
    let { watching: i, stopped: l } = get(s.watches),
      u = s.arms ?? [],
      h = G(
        u,
        (p) =>
          p.rail === void 0 &&
          (p.state === "arming" || p.state === "backing_off"),
      ),
      v = G(u, (p) => p.rail !== void 0 && p.state === "arming"),
      d = G(u, (p) => p.state === "failed" || p.state === "ended"),
      a = [
        h > 0 ? `${h} connecting` : "",
        v > 0 ? `${v} registering` : "",
        d > 0 ? `${d} ended or failed` : "",
      ]
        .filter((p) => p !== "")
        .join(", "),
      c = Array.isArray(s.rooms) ? s.rooms : [],
      f = G(c, (p) => p?.connected !== !0),
      g =
        c.length > 0
          ? ` \xB7 ${c.length} artifact ${x(c.length, "room")} joined${f > 0 ? ` (${f} reconnecting)` : ""}`
          : "";
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: `${i} artifact ${x(i, "watch", "watches")}${l > 0 ? ` \xB7 ${l} with auto-replies paused or stopped` : ""}${a !== "" ? `, ${a}` : ""}${g}`,
      }),
    });
  }
  if ("resume_replies" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.resume_replies.resumed
          ? "auto-replies resumed"
          : s.resume_replies.reason === "stop_latched"
            ? "auto-replies not resumed (watch stopped earlier in this session)"
            : s.resume_replies.reason === "arm_in_flight"
              ? "auto-replies not resumed (an earlier connection is still winding down; the stop stays)"
              : `auto-replies not resumed (${e_(s.resume_replies.reason ?? s.resume_replies.outcome) ?? "unknown"})`,
      }),
    });
  if ("verify" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          s.verify.state === "no_row"
            ? "no diagnostics readable: none captured in 24h, or not readable for this artifact"
            : s.verify.state !== "empty" && s.verify.state !== "entries"
              ? "unrecognized diagnostics result \u2014 verify again for a current read"
              : s.verify.entries.length === 0
                ? (s.verify.dropped ?? 0) > 0 || s.verify.truncated === !0
                  ? "diagnostics captured but none readable (size cap) \u2014 not a clean signal"
                  : "loaded clean: zero diagnostics captured"
                : `read ${s.verify.entries.length} diagnostic ${x(s.verify.entries.length, "entry", "entries")}`,
      }),
    });
  if ("page_data" in s) {
    let i =
        s.page_data.derived === void 0
          ? ""
          : ` (${Object.entries(s.page_data.derived)
              .map(([u, h]) => `${u}: ${h}`)
              .join(", ")})`,
      l = ` \xB7 ${s.page_data.provenance.authorship}`;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children: s.page_data.islandPresent
          ? `read ${s.page_data.entries.length} ${x(s.page_data.entries.length, "entry", "entries")} [${s.page_data.schema}]${i}${l}`
          : `no ${s.page_data.schema} data island on the page${l}`,
      }),
    });
  }
  if ("artifact_types" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          s.artifact_types.length === 0
            ? s.unavailable === !0
              ? "artifact types not available to this account"
              : "no artifact types listed"
            : `listed ${s.artifact_types.length} artifact ${x(s.artifact_types.length, "type")}`,
      }),
    });
  if ("artifact_type" in s) {
    let i = Wt(s.artifact_type.type_url),
      l = i ? br(i) : void 0;
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: [
          "described artifact type",
          " ",
          l !== void 0 ? e(R, { name: l, url: l }) : "(unrecognized address)",
          ` (${s.artifact_type.files.length} ${x(s.artifact_type.files.length, "file")}${typeof s.artifact_type.files_omitted === "number" && s.artifact_type.files_omitted > 0 ? ` +${s.artifact_type.files_omitted} not shown` : ""}${s.artifact_type.instructions_file ? ", ships instructions" : ""})`,
        ],
      }),
    });
  }
  if ("type_instances" in s) {
    let i = Array.isArray(s.type_instances?.instances)
      ? s.type_instances.instances.length
      : 0;
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          i === 0
            ? s.type_instances?.unavailable === !0
              ? "instance listing not available to this account"
              : "no artifacts of this type listed"
            : `listed ${i} ${x(i, "artifact")} of this type`,
      }),
    });
  }
  if ("artifacts" in s)
    return e(xe, {
      children: e(t, {
        dimColor: !0,
        children:
          s.artifacts.length === 0
            ? s.scope === "shared"
              ? "no shared artifacts listed"
              : s.scope === "all"
                ? "no artifacts listed"
                : "no published artifacts yet"
            : `listed ${s.artifacts.length} ${x(s.artifacts.length, s.scope !== void 0 ? "artifact" : "published artifact")}`,
      }),
    });
  if ("opened" in s) {
    let i = typeof s.url === "string" ? Wt(s.url) : null,
      l = i ? br(i) : void 0;
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: [
          "Opened",
          " ",
          l !== void 0
            ? e(R, {
                name: (typeof s.title === "string" ? yw(s.title) : null) ?? l,
                url: l,
              })
            : "(unrecognized address)",
        ],
      }),
    });
  }
  if ("created_from_type" in s) {
    let i = (l) => {
      let u = typeof l === "string" ? Wt(l) : null,
        h = u ? br(u) : void 0;
      return h !== void 0
        ? e(R, { name: h, url: h })
        : "(unrecognized address)";
    };
    return e(xe, {
      children: r(t, {
        dimColor: !0,
        children: [
          "Created ",
          i(s.url),
          " from Artifact type",
          " ",
          i(s.type?.url),
          "instructions" in s && typeof s.instructions === "string"
            ? ", read its instructions"
            : "",
        ],
      }),
    });
  }
  let b = icn(s.publishesRemaining),
    w = acn(s.publishesResetAt);
  return e(xe, {
    children: r(o, {
      flexDirection: "column",
      children: [
        r(t, {
          dimColor: !0,
          children: [
            s.updated ? "Updated" : "Published",
            " ",
            e(R, { name: s.url, url: s.url }),
          ],
        }),
        b !== void 0 &&
          w !== void 0 &&
          e(t, { dimColor: !0, children: lcn(b, w) }),
      ],
    }),
  });
}
function Be(s, m) {
  if (typeof s === "string") {
    let n = xut(s);
    if (n.startsWith(ret) || n.startsWith(xkn) || n.startsWith(rie)) {
      let b = m.verbose ? null : oet.exec(n),
        w = s;
      if (b !== null) {
        let i = s.slice(0, s.length - n.length),
          l = n.slice(0, b.index + b[0].length - 1);
        w = `${i}${l} (content shown to the model; elided here)`;
      }
      return e(Yd, { result: Bkn(w), verbose: m.verbose, verbatim: !0 });
    }
  }
  return e(Yd, { result: s, verbose: m.verbose });
}
export {
  Oe as renderCheckToolUseMessage,
  De as renderCommentsToolUseMessage,
  Ue as renderDataToolUseMessage,
  We as renderToolResultMessage,
  Be as renderToolUseErrorMessage,
  H as renderToolUseMessage,
  je as renderToolUseProgressMessage,
};

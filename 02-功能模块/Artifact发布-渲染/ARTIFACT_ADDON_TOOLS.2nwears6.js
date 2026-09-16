// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
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
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
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
import { _r, Zh, CP, XD, Oe } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "./chunk-rr78st95.js";
import "./chunk-01ymf0ar.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../权限系统/chunk-1y2g140m.js";
import "./chunk-y8j05azr.js";
import { Wze, Xze, Yze, Jze } from "./chunk-pdd7kz7p.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
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
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
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
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "./chunk-5gz5xvw9.js";
import "./chunk-kshc4v5t.js";
import "./chunk-p1dkvpxj.js";
import "../工具Monitor/工具Monitor.981fw9dy.js";
import { gI, lwe, Tte } from "./chunk-qpgskeea.js";
import "./chunk-qdg189tc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d8c3rz29.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cj5z5g82.js";
import "./chunk-x29r16ke.js";
import "./chunk-stvynqrz.js";
import { swe, iwe, Qze } from "./chunk-01jnk0v2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ghshta0.js";
import { E9 } from "./chunk-b6k1z7an.js";
import "./chunk-fx5ekm7e.js";
import {
  hjn,
  _jn,
  yjn,
  xon,
  Hon,
  Sjn,
  Rut,
  MS,
  MGe,
} from "./chunk-pvztfdrb.js";
import "../Teammates团队/chunk-weg7y2ya.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f7n720sn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wm4s322b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dgth8ahx.js";
import "../Bridge-RemoteControl/chunk-jpq2fv3g.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import { Out, Fon } from "./chunk-yrjr7v83.js";
import "./chunk-5gvg7p5p.js";
import { FGe } from "../Teammates团队/chunk-y89mhs4a.js";
import "../CodeReview/chunk-cwdcyphs.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-3k9e6gxt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42mwj027.js";
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
var l = {
    comments: [
      [/action:? "comments"/g, 'action "read"'],
      [/action:? "unwatch"/g, 'action "watch" with `on: false`'],
      [/action:? "status"/g, 'action "watch" with no `url`'],
      [
        /action:? "resume_replies"|\bresume_replies\b/g,
        'action "watch" with `replies: true`',
      ],
    ],
    data: [
      [/action:? "(?:read_db|write_db)" with db_op /g, "action "],
      [/\bdb_op\b/g, "action"],
      [/action:? "read_db"|\bread_db\b/g, "a read (get, list or query)"],
      [
        /action:? "write_db"|\bwrite_db\b/g,
        "a write (set, update, delete or batch)",
      ],
    ],
    check: [],
  },
  u = {
    comments: {
      comments: '`action: "read"`',
      status: '`action: "watch"` with no `url`',
      unwatch: '`action: "watch"` with `on: false`',
      resume_replies: '`action: "watch"` with `replies: true`',
    },
    data: {
      read_db: 'as the read itself \u2014 `action`: "get", "list" or "query"',
      write_db:
        'as the write itself \u2014 `action`: "set", "update", "delete" or "batch"',
    },
    check: {},
  };
function c(e, a) {
  let r = a;
  for (let [t, o] of l[e]) r = r.replace(t, o);
  return r;
}
var d = [
  ['`action: "comments"`', '`action: "read"`'],
  ['`action: "status"` lists', '`action: "watch"` with no `url` lists'],
  [" (pass `url` to check one)", ""],
  [
    '`action: "unwatch"` with `url`',
    '`action: "watch"` with `on: false` and its `url`',
  ],
  ["`status` shows", "that listing shows"],
  [
    "that artifact's `status` row says",
    "that artifact's row in that listing says",
  ],
  ["a watch result, `status`, or", "a watch result, that listing, or"],
];
function h(e) {
  let a = Fon(!0, e);
  for (let [r, t] of d) a = a.replaceAll(r, t);
  return a;
}
function m(e) {
  let a = [
    `Read and answer the comment threads people leave on a published artifact, and manage this session's artifact watches. Publishing and reading the artifact itself is the \`${_r}\` tool's job; every call here names the artifact by its \`url\`.`,
    FGe(Xze(e.watchRail === "none" ? Out() : ""), [
      ['`action: "comments"`', '`action: "read"`'],
    ]),
    h(e.watchRail),
  ];
  if (e.watchRail === "live")
    a.push(
      "**Resuming automatic replies**: `action: \"watch\"` with `replies: true` and the artifact's `url` re-enables automatic comment replies that were stopped or paused for it (they stop when their live-updates task is killed or the watch is stopped, and pause \u2014 the watch kept, until the user's next message \u2014 when the user interrupts the session with Ctrl+C / Stop). Use it ONLY when the user has explicitly asked to resume auto-replies; it is approved the way a publish is (a prompt in default mode) and cannot undo the session-wide auto-reply disarm from the kill-all-agents gesture.",
    );
  return a.join(`

`);
}
var p = [
  [
    'these actions read and write it as the user. Pass `action: "read_db"` with the artifact\'s `url` and `db_op`:',
    "this tool reads and writes it as the user; every call takes the artifact's `url`. To read, pass `action`:",
  ],
  ['Pass `action: "write_db"` with `db_op`:', "To write, pass `action`:"],
];
function f() {
  return [
    `The artifact itself is published and read with the \`${_r}\` tool; this tool is its page's shared database.`,
    FGe(Yze, p),
  ].join(`

`);
}
function w(e) {
  return [
    `Check a page before or after publishing it with the \`${_r}\` tool.`,
    ...(e.previewOn ? [Wze] : []),
    ...(e.verifyOn ? [Jze] : []),
  ].join(`

`);
}
function g(e) {
  let a = Object.entries(gI)
    .filter(([r, t]) => t === e.addon && (e.offersLegacyVerb?.(r) ?? !0))
    .map(([r]) => r);
  return a.length === 0
    ? e.searchHint
    : `${e.searchHint} (formerly the ${_r} tool's ${a.join(", ")})`;
}
function i(e) {
  let a = (t) => lwe(e.addon, t),
    r = (t) => Tte(e.addon, t);
  return Tt({
    name: e.name,
    get searchHint() {
      return g(e);
    },
    shouldDefer: !0,
    briefStandalone: MS.briefStandalone,
    familyParentToolName: _r,
    toFamilyParentInput: (t) => a(t),
    ruleContentField: MS.ruleContentField,
    getPath: (t) => MS.getPath(a(t)),
    maxResultSizeChars: MS.maxResultSizeChars,
    persistenceThresholdCeiling: MS.persistenceThresholdCeiling,
    skipAggregateToolResultBudget: MS.skipAggregateToolResultBudget,
    preserveToolUseResultInSubagents: MS.preserveToolUseResultInSubagents,
    stripToolUseResultAtCreation: MS.stripToolUseResultAtCreation,
    stripForStorage: MS.stripForStorage,
    userFacingName: () => _r,
    get inputSchema() {
      return e.inputSchema();
    },
    get outputSchema() {
      return MS.outputSchema;
    },
    isEnabled: () => Qze(e.addon),
    isConcurrencySafe: (t) => MS.isConcurrencySafe(a(t)),
    isReadOnly: (t) => MS.isReadOnly(a(t)),
    isDestructive: (t) => MS.isDestructive(a(t)),
    ignoresWholeToolAllowRule: (t) => MS.ignoresWholeToolAllowRule(a(t)),
    suppressesAlwaysAllowRule: (t) => MS.suppressesAlwaysAllowRule(a(t)),
    permissionCheckFailureDecision: (t, o) => {
      let n = a(t);
      return Rut(
        Hon(
          e.name,
          () => MS.permissionCheckFailureDecision(n, o),
          n,
          n,
          o,
          MGe,
        ),
        r,
      );
    },
    async checkPermissions(t, o) {
      let n = a(t);
      return Rut(
        await Sjn(await MS.checkPermissions(n, o), xon(o, n, MGe), () =>
          MS.description(n),
        ),
        r,
      );
    },
    toAutoClassifierInput: (t) => MS.toAutoClassifierInput(a(t)),
    description: (t, ...o) => MS.description(a(t), ...o),
    getToolUseSummary: (t) => MS.getToolUseSummary(a(t)),
    prompt: async () => e.prompt(E9()),
    async validateInput(t, o) {
      let n = e.contradiction?.(t);
      if (n !== void 0) return { result: !1, message: n, errorCode: 8 };
      let s = await MS.validateInput(a(t), o);
      return s.result ? s : { ...s, message: c(e.addon, s.message) };
    },
    async call(t, ...o) {
      try {
        return await MS.call(a(t), ...o);
      } catch (n) {
        if (n instanceof Oe) n.message = c(e.addon, n.message);
        throw n;
      }
    },
    validationErrorSteer(t) {
      let o = t?.action,
        n = u[e.addon],
        s = typeof o === "string" && Object.hasOwn(n, o) ? n[o] : void 0;
      return s === void 0
        ? null
        : `action "${o}" is spelled ${s} in this tool.`;
    },
    mapToolResultToToolResultBlockParam: MS.mapToolResultToToolResultBlockParam,
  });
}
var R = i({
    addon: "comments",
    name: Zh,
    searchHint:
      "read and reply to comment threads on a published artifact; watch it for republishes",
    inputSchema: hjn,
    prompt: m,
    contradiction: (e) =>
      e.action === "watch" && e.on === !1 && e.replies === !0
        ? "watch: `on: false` stops the watch and `replies: true` resumes automatic replies on it \u2014 pass one, not both"
        : void 0,
  }),
  A = i({
    addon: "data",
    name: CP,
    searchHint: "read and write a published artifact's shared database",
    inputSchema: _jn,
    prompt: f,
  }),
  y = i({
    addon: "check",
    name: XD,
    searchHint: "preview a page locally and read viewers' runtime diagnostics",
    inputSchema: yjn,
    prompt: w,
    offersLegacyVerb: (e) => (e === "verify" ? swe() : iwe()),
  }),
  H = [R, A, y];
export { H as ARTIFACT_ADDON_TOOLS };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze, wje, Ixe, Lrt, Eje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "./chunk-qe04h4c5.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "./chunk-thxapyam.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { g6 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "./chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
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
import { jn } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
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
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import { Zgt, nY, Re, Dk, Hyt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { It, Yn } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { wf } from "../../01-核心基础设施/共享小工具-未细化/chunk-pbd0pf42.js";
import { SK } from "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import { wre } from "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import { YXn, QXn, BY } from "../语音-音频/chunk-cfhndstm.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
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
import "./chunk-g6nvp9mm.js";
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
import "./chunk-6b13bhw1.js";
import "./chunk-t899nada.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import { EC } from "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "./chunk-3k2smxfn.js";
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
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../00-第三方库/react/react.zhnvc798.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import { UJt } from "../工具AskUserQuestion/工具AskUserQuestion.72ht85nd.js";
import { qc } from "../../01-核心基础设施/共享小工具-未细化/chunk-vke340te.js";
import { zqe } from "./chunk-4ma81w0c.js";
import { E, vr, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { xs } from "./chunk-mrfx53ye.js";
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
import { Xi } from "./chunk-z2t8b9yc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "./chunk-eey53z5b.js";
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
import "./chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
F();
import { randomUUID as N } from "crypto";
function I(o) {
  return (
    o.type === "system" &&
    o.subtype === "scheduled_task_fire" &&
    o.cronKind === "loop"
  );
}
function P(o) {
  if (o.type !== "system") return !1;
  if (o.subtype === "scheduled_task_fire" || o.subtype === "compact_boundary")
    return !0;
  return !1;
}
function v(o) {
  let r = o.findLastIndex(I),
    s = o[r];
  if (s === void 0 || !I(s)) return { kind: "none" };
  for (let a = r - 1; a >= 0; a--) {
    let e = o[a];
    if (I(e)) break;
    if (P(e))
      return {
        kind: "veto",
        fireIdx: r,
        reason: "blocking_system_before_anchor",
      };
  }
  let p,
    c = new Set();
  for (let a = r + 1; a < o.length; a++) {
    let e = o[a];
    if (P(e))
      return { kind: "veto", fireIdx: r, reason: "blocking_system_in_span" };
    if (e.type === "assistant")
      for (let i of e.message.content) {
        if (i.type !== "tool_use") continue;
        if ((c.add(i.id), i.name === Xi)) p = i.input?.noop === !0;
      }
    else if (e.type === "user") {
      if (e.toolDenialKind !== void 0)
        return {
          kind: "veto",
          fireIdx: r,
          reason:
            e.toolDenialKind === "interrupted" ||
            e.toolDenialKind === "cancelled"
              ? "tool_abort"
              : "tool_denial",
        };
      let i = e.message.content;
      if (typeof i !== "string") {
        for (let d of i)
          if (d.type === "tool_result" && !c.has(d.tool_use_id))
            return { kind: "veto", fireIdx: r, reason: "split_tool_pair" };
      }
      if (
        !Dk(e) &&
        (e.verifiedSlackHumanTurn === !0 ||
          e.origin !== void 0 ||
          (e.queuePriority !== "later" && e.isMeta !== !0))
      )
        return { kind: "veto", fireIdx: r, reason: "foreign_user_input" };
    } else if (
      e.type === "attachment" &&
      e.attachment.type === "queued_command"
    )
      return { kind: "veto", fireIdx: r, reason: "queued_command" };
  }
  if (p !== !0)
    return { kind: "veto", fireIdx: r, reason: "model_reported_work" };
  return {
    kind: "fold",
    fireIdx: r,
    priorStreak: s.noOpStreak ?? 0,
    since: s.streakStartedAt ?? s.timestamp,
    toolUseCount: c.size,
  };
}
function K(o) {
  return {
    ...Re({
      content: `[${o} prior /loop ${x(o, "wakeup")} found nothing actionable; loop is healthy.]`,
      isMeta: !0,
    }),
    turnCompanion: !0,
  };
}
function S(o) {
  return o
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
    .replace(/,? at |, /, " ")
    .replace(/[ \u202f]([AP]M)/i, (r, s) => s.toLowerCase());
}
function D(o, r, s, p) {
  let a = `Claude resuming /loop wakeup (${S(new Date())})`,
    e = r ? v(o) : { kind: "none" };
  if (e.kind === "veto") g("loop_noop_fold", e.reason);
  if (e.kind !== "fold")
    return [...o, Hyt(a, { task: s, uuid: p, ...(r && { cronKind: "loop" }) })];
  let i = e.priorStreak + 1,
    d = S(new Date(e.since)),
    b = o.slice(e.fireIdx).map((_) => _.uuid);
  return (
    y("loop_noop_fold", {
      streak: i,
      span_len: b.length,
      tool_uses: e.toolUseCount,
      span_duration_s: w(o, e.fireIdx),
    }),
    [
      ...o,
      Hyt(`${a} \xB7 ${i} no-op ${x(i, "tick")} since ${d}`, {
        task: s,
        uuid: p,
        cronKind: "loop",
        noOpStreak: i,
        streakStartedAt: e.since,
        foldedUuids: b,
      }),
      K(i),
    ]
  );
}
function w(o, r) {
  let s = o[r]?.timestamp,
    p = o.at(-1)?.timestamp;
  if (!s || !p) return 0;
  return Math.round((Date.parse(p) - Date.parse(s)) / 1000);
}
var T = import.meta.require("../自主会话-循环/LOOP_FILE_DYNAMIC_SENTINEL.y675anba.js"),
  A = null;
function ke({ isLoading: o, assistantMode: r, transcript: s, storageV5: p }) {
  let c = qc(),
    a = vr(() => o),
    e = C(null),
    i = Ye(),
    d = Yn(),
    b = It(),
    _ = wf();
  (E(() => {
    if (!EC() || jn() !== null) return;
    let m = (t, l, u) => ({
        value: t,
        mode: "prompt",
        agentId: ze(),
        priority: "later",
        isMeta: !0,
        skipSlashCommands: !0,
        modelScheduledOrigin: !0,
        skipAttachments: !0,
        wakeupSource: l,
        scheduledTaskId: u?.taskId,
        scheduledFireId: u?.fireId,
        workload: g6,
      }),
      O = Promise.resolve(),
      R = (t, l, u) => {
        if (M() && p !== void 0) {
          O = O.then(async () => {
            try {
              c.enqueuePendingNotification(
                m(
                  await T.resolveLoopDefaultFireAsync(
                    i.autonomousLoopPreamble,
                    t,
                    p,
                  ),
                  l,
                  u,
                ),
              );
            } catch (f) {
              n(
                `[ScheduledTasks] fire enqueue (v5 arm) failed; fire skipped: ${f}`,
              );
            }
          });
          return;
        }
        c.enqueuePendingNotification(
          m(T.resolveLoopDefaultFire(i.autonomousLoopPreamble, t), l, u),
        );
      },
      U = (t) => {
        if (T.isLoopDefaultSentinel(t.prompt))
          return {
            ...t,
            prompt: T.isLoopFileSentinel(t.prompt)
              ? "/loop (loop.md)"
              : "/loop",
          };
        return t;
      },
      L = void 0,
      h = UJt({
        onFire: (t) => R(t, "schedule_wakeup"),
        onFireTask: (t) => {
          if (t.agentId) {
            let u = nY(t.agentId, d.getState().tasks);
            if (u && !xs(u.status)) {
              zqe(u.id, t.prompt, _, { kind: "task-notification" });
              return;
            }
            (n(
              `[ScheduledTasks] teammate ${t.agentId} gone, removing orphaned cron ${t.id}`,
            ),
              SK([t.id]));
            return;
          }
          let l = N();
          if (t.kind === "loop") {
            let u = !a();
            (s.replace((f) => D(f, u, U(t), l)), Ixe(t.prompt), Lrt());
          } else {
            let u = Hyt(`Running scheduled task (${S(new Date())})`, {
              task: U(t),
              uuid: l,
            });
            s.replace((f) => [...f, u]);
          }
          R(t.prompt, Zgt(t), { taskId: t.id, fireId: l });
        },
        isLoading: () => a(),
        assistantMode: r,
        getJitterConfig: wre,
        isKilled: () => !EC(),
        getExtraTasks:
          A && L
            ? () => A.getRoutineCronTasks(i.project.projectRoot, L, p)
            : void 0,
      });
    return (
      h.start(),
      (e.current = h),
      () => {
        ((e.current = null), h.stop());
      }
    );
  }, [r, s, d.getState, _, i]),
    E(() => {
      if (o) return;
      let m = wje();
      if (m !== null) {
        if ((Ixe(null), YXn() && !BY())) QXn(m);
        if (!BY()) Eje();
      }
      e.current?.checkNow();
    }, [o]));
}
export { ke as useScheduledTasks };

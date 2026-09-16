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
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { yt, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { io } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
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
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { xk, pH } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import { SO, uk } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-x4qgycdj.js";
import {
  $pt,
  Upt,
  W9n,
  Bpt,
  jpt,
  G9n,
  yze,
  Wpt,
  Wbe,
  Man,
  Gpt,
  qpt,
} from "../目录同步(dir-sync)/chunk-gbhqtdpn.js";
import "./chunk-ht8ydg1v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37w8v4sh.js";
import { Cze } from "../Git-Worktree/chunk-v967hawf.js";
import "./chunk-tqwnv5vj.js";
import "./chunk-eg4wmaq4.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
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
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ca2zxbyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vcb9z55e.js";
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
var E = 3;
async function D({
  folder: t,
  realRoot: s,
  maxBytes: d = yze,
  storeBudgetBytes: p = Wpt,
  statCache: m,
  withheldOf: w,
  signal: g,
  now: a = Date.now,
}) {
  let _ = a();
  try {
    let { store: r } = W9n({ objectFormat: "sha1" }),
      c = $pt({ store: r, identity: jpt });
    await using f = await SO(uk(), { gitRoot: t, realRoot: s }).catch(
      (y) => (n(`[folderSeed] tree anchor not opened (${l(y)})`), null),
    );
    let e = await Man({
      folder: t,
      realRoot: s,
      repo: c,
      statCache: m,
      through: f,
      known: new Map(),
      peer: new Map(),
      peerHasBlob: () => !1,
      budgetBytes: d,
      withheldOf: w ?? pH(t, { realRoot: s }),
      ...(g !== void 0 && { signal: g }),
      now: a,
    });
    if (e.kind === "refused")
      return e.reason === "too_large"
        ? {
            kind: "refused",
            reason: "too_large",
            detail:
              e.totalBytes === 0 && e.largest.length === 0
                ? "it holds more files than a cloud session can start with from a folder. Remove or ignore what the session does not need (a .gitignore in this folder is honoured) and start again"
                : O(e),
          }
        : { kind: "refused", reason: e.reason, detail: B(e.detail) };
    if (e.heldBack.length > 0) {
      let y = e.heldBack
        .slice(0, E)
        .map((F) => B(F.path))
        .join(", ");
      return {
        kind: "refused",
        reason: "busy",
        detail: `${e.heldBack.length} ${x(e.heldBack.length, "file")} changed while ${x(e.heldBack.length, "it was", "they were")} being read (${y}${e.heldBack.length > E ? ", \u2026" : ""}); let whatever is writing to this folder finish and start again`,
      };
    }
    if (e.stats.bytes > p)
      return {
        kind: "refused",
        reason: "too_large",
        detail: O({ totalBytes: e.stats.bytes, capBytes: p, largest: [] }),
      };
    let b = await c.writeCommit({
      tree: e.rootTree,
      parents: [],
      message: "sync 0",
      whenUnix: Math.floor(a() / 1000),
    });
    if (!b.ok)
      return {
        kind: "refused",
        reason: "internal",
        detail: `the seed commit could not be written (${b.reason})`,
      };
    let o = await c.objectsToSend({ tip: b.id, peerHolds: [] });
    if (o.missing.length > 0)
      return {
        kind: "refused",
        reason: "internal",
        detail: `${o.missing.length} seed objects missing from the build`,
      };
    let k = await T(r, [...o.ids.commits, ...o.ids.trees, ...o.ids.blobs]);
    if (k === null)
      return {
        kind: "refused",
        reason: "internal",
        detail: "a seed object could not be read back",
      };
    let j = Buffer.concat([
        Cze({
          version: 2,
          capabilities: [],
          prerequisites: [],
          refs: [{ name: G9n, id: b.id }],
          packOffset: 0,
        }),
        await Upt(k, r.objectFormat),
      ]),
      C = new Set(o.ids.blobs);
    return {
      kind: "built",
      seed: {
        content: j,
        seedCommit: b.id,
        seedTree: e.rootTree,
        files: e.commitFiles.size,
        bytes: k.filter((y) => C.has(y.id)).reduce((y, F) => y + F.size, 0),
        withheld: e.withheldCounts,
        buildMs: a() - _,
        objects: k,
      },
    };
  } catch (r) {
    if (yt(r) || g?.aborted === !0)
      return {
        kind: "refused",
        reason: "aborted",
        detail: "the create was cancelled",
      };
    return (h(r), { kind: "refused", reason: "internal", detail: l(r) });
  }
}
function O(t) {
  let s = t.largest.slice(0, E).map((d) => `${B(d.path)} (${Ft(d.bytes)})`);
  return `its files come to ${Ft(t.totalBytes)}, which with packaging does not fit the ${Ft(t.capBytes)} a cloud session can start with from a folder${s.length > 0 ? `; the largest: ${s.join(", ")}` : ""}. Remove or ignore what the session does not need (a .gitignore in this folder is honoured) and start again`;
}
async function T(t, s) {
  let d = await Promise.all(s.map((m) => t.getDeflated(m))),
    p = d.flatMap((m) => (m.kind === "ok" ? [m.object] : []));
  return p.length === d.length ? p : null;
}
function v(t) {
  return `Cannot start a cloud session from this folder: ${t}.`;
}
function B(t) {
  return io(t, { maxCodeUnits: 512 });
}
var M = {
    unreadable: "its files could not all be read",
    busy: "its files kept changing while they were read",
  },
  R = "packaging its files failed unexpectedly";
async function re({
  folder: t,
  signal: s,
  onProgress: d,
  maxBytes: p = yze,
  now: m = Date.now,
  storageV5: w,
}) {
  let g = (a, _, r) => {
    if (s.aborted) return { kind: "aborted" };
    return (
      i(Wbe.seed, r),
      d?.({ kind: "bundle_failed", fallback: null }),
      { kind: "refused", line: v(a), reason: _ }
    );
  };
  try {
    let a = await xk(t);
    if (a === null)
      return g("it could not be resolved on disk", "folder_seed_failed", {
        outcome: S("unresolvable"),
      });
    d?.({ kind: "bundling", rerouted: !1, folder: !0 });
    let _ = await Bpt(qpt(await Gpt(t, w))),
      r = p,
      c = await D({
        folder: t,
        realRoot: a,
        statCache: _,
        maxBytes: r,
        signal: s,
        now: m,
      });
    if (c.kind === "refused") {
      n(`[folderSeed] refused (${c.reason}): ${c.detail}`);
      let o = c.reason;
      return g(
        o !== "internal" && c.detail !== "" ? c.detail : (M[o] ?? R),
        o === "too_large" ? "folder_too_large" : "folder_seed_failed",
        { outcome: S("refused"), reason: u(o) },
      );
    }
    let { seed: f } = c;
    if (f.content.length > r)
      return g(
        `the packaged folder came to ${Ft(f.content.length)}, over the ${Ft(r)} a session may start from`,
        "folder_too_large",
        { outcome: S("refused"), reason: S("too_large") },
      );
    d?.({ kind: "bundled", sizeBytes: f.content.length, scope: "squashed" });
    let { content: e, ...b } = f;
    return (
      i(Wbe.seed, {
        outcome: S("built"),
        files: f.files,
        bytes: f.bytes,
        bundle_bytes: f.content.length,
        withheld: [...f.withheld.values()].reduce((o, k) => o + k, 0),
        build_ms: f.buildMs,
      }),
      { kind: "built", seed: b }
    );
  } catch (a) {
    if (yt(a) || s.aborted) return { kind: "aborted" };
    return (h(a), g(R, "folder_seed_failed", { outcome: S("threw") }));
  }
}
export { re as shipFolderSeed };

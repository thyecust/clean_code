// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { hU, Dse, Uor, Zy, RKt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
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
import "./chunk-qe04h4c5.js";
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
import "./chunk-811z9z0t.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
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
import "./chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import { SD } from "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import { dK, BAe, bbt, mD, t1e, E7e, C$ } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
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
import "./chunk-g6nvp9mm.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { v7e } from "../后台任务-Shell管理/chunk-djserjj5.js";
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
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
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
import { cbe, Wee } from "../权限系统/chunk-4tar9p3n.js";
import { RPe, pdt, Ssn, nqe, fdt } from "./chunk-nhk351pe.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "./chunk-mrfx53ye.js";
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
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
async function K(e, r, s, i) {
  try {
    return await y(e, r, s, i);
  } catch (n) {
    return (
      h(n),
      f("cross_session_notify_idle", "subscribe_internal_error"),
      { ok: !1, reason: "send-failed", error: n }
    );
  }
}
async function y(e, r, s, i) {
  if (Wee() === "refuse") return t("requester-refuses-inbound");
  let n = C$();
  if (n === void 0) return t("no-inbox");
  let a = Zy(e);
  if (a === void 0) return t("unreachable-namespace");
  if (a === Zy(n)) return t("self-target");
  let o;
  try {
    o = await E7e(e);
  } catch {
    o = void 0;
  }
  if (o !== void 0 && !(o.features?.includes(RKt) ?? !1))
    return t("peer-unsupported");
  if (!Uor(n, a, o?.features, await x()) || !Dse(hU(n)))
    return t("unreachable-namespace");
  let p = P() !== "windows" ? o?.pid : void 0,
    u = SD(),
    l = Ssn(u.msg_id, r, e);
  if (!l.ok) return t(l.reason === "cap" ? "cap" : "unreachable-namespace");
  let b = l.priors;
  try {
    return (
      await t1e(
        e,
        {
          action: "notify_when_idle",
          from: hU(n),
          ...(i !== void 0 && { from_mode: i }),
        },
        u,
        { ...(p !== void 0 && { expectPeerPid: p }), storageV5: s },
      ),
      { ok: !0, peerKnownCapable: o !== void 0 }
    );
  } catch (d) {
    if (dK(d) === "gone") {
      fdt(u.msg_id);
      for (let c of b) fdt(c);
      return (
        f("cross_session_notify_idle", "subscribe_peer_gone"),
        { ok: !1, reason: "peer-gone", error: d }
      );
    }
    if (mD(d)) {
      fdt(u.msg_id);
      let c = b.some(nqe);
      return (
        f("cross_session_notify_idle", "subscribe_send_failed"),
        {
          ok: !1,
          reason: "send-failed",
          ...(c && { restoredEarlier: !0 }),
          error: d,
        }
      );
    }
    return (
      g("cross_session_notify_idle", "subscribe_send_uncertain"),
      { ok: !1, reason: "send-uncertain", error: d }
    );
  }
}
function t(e) {
  return (g("cross_session_notify_idle", m[e]), { ok: !1, reason: e });
}
function w(e) {
  return `notify_when_idle: ${e} is THIS session \u2014 nothing was subscribed; you already know when your own turn ends.`;
}
var m = {
  "requester-refuses-inbound": "subscribe_requester_refuses_inbound",
  "no-inbox": "subscribe_no_inbox",
  "self-target": "subscribe_self_target",
  "unreachable-namespace": "subscribe_unreachable_namespace",
  "peer-unsupported": "subscribe_peer_unsupported",
  cap: "subscribe_cap",
};
function _(e, r = !0) {
  let s = pdt(e);
  if (!r)
    return `Subscription sent to "${s}" \u2014 but whether it supports idle notices is unknown (no readable session-registry record vouches for it), so a notice may never come; you will be told if it lapses unheard. Do not rely on it.`;
  let i = cbe();
  if (i === "accept")
    return `Subscribed \u2014 you will get one notice here when "${s}" is next idle (or exits). Do not poll or wait for it; carry on.`;
  let n = ke();
  if (i === "hold")
    return n
      ? `Subscribed \u2014 "${s}" will send one notice when it is next idle (or exits), but this session holds ALL inbound peer traffic (crossSessionInbound: hold), so it will only be logged here, not delivered to you. Carry on; do not poll.`
      : `Subscribed \u2014 "${s}" will send one notice when it is next idle (or exits); this session holds ALL inbound peer traffic (crossSessionInbound: hold), so it will be shown to your user in the transcript, not delivered to you. Carry on; do not poll.`;
  let a =
    "that session runs in the same permission class as this one (or is one this session spawned)";
  return Wee() === "accept"
    ? `Subscribed \u2014 you will get one notice here when "${s}" is next idle (or exits), provided ${a} or asserts none; otherwise it is ${n ? "only logged here" : "shown to your user in the transcript"}. Do not poll or wait for it; carry on.`
    : `Subscribed \u2014 "${s}" will send one notice when it is next idle (or exits). It is delivered to you if ${a}; otherwise it is ${n ? "only logged here" : "shown to your user in the transcript"} (this session holds other inbound peer traffic). Carry on; do not poll.`;
}
function S(e, r) {
  if (e.ok) return "";
  switch (e.reason) {
    case "no-inbox":
      return "notify_when_idle needs this session to have a messaging inbox, and it has none \u2014 no notice will arrive.";
    case "self-target":
      return w("that address");
    case "requester-refuses-inbound":
      return "notify_when_idle: this session does not accept inbound cross-session traffic (messaging is off here or crossSessionInbound is refuse), so an idle notice could never be shown to you \u2014 nothing was subscribed.";
    case "unreachable-namespace":
      return "notify_when_idle: that session could not answer into this session's messaging inbox (different namespace, or an address it will not accept), so its idle notice could not be delivered here \u2014 nothing was subscribed.";
    case "peer-unsupported":
      return "notify_when_idle: that session runs a version without idle notices \u2014 nothing was subscribed. Ask your user, or message it and wait for its reply instead.";
    case "cap":
      return `notify_when_idle: this session already holds ${RPe} pending idle subscriptions \u2014 wait for some to fire or expire.`;
    case "peer-gone":
      return `notify_when_idle: no session is listening at that address any more; nothing was subscribed, and any earlier idle subscription to it is void${BAe(r)}`;
    case "send-failed": {
      let s = dK(e.error) === "busy" ? bbt(e.error) : ".";
      return e.restoredEarlier
        ? `notify_when_idle: the re-subscribe could not be sent; your earlier idle subscription to that session still stands${s}`
        : `notify_when_idle: the subscription could not be sent \u2014 no notice will arrive${s}`;
    }
    case "send-uncertain":
      return "notify_when_idle: sending the subscription did not complete cleanly, so it is unknown whether that session recorded it \u2014 a notice may or may not arrive. Do not rely on it.";
  }
}
function I(e, r) {
  let s = pdt(e);
  if (r.ok)
    return r.peerKnownCapable
      ? `You will be told here when ${s} is next idle.`
      : `Idle subscription sent to ${s}; whether it supports idle notices is unknown.`;
  switch (r.reason) {
    case "send-uncertain":
      return `The idle subscription for ${s} may not have been recorded; a notice may or may not arrive.`;
    case "peer-gone":
      return `No session is listening at ${s}'s address any more; no idle subscription.`;
    case "peer-unsupported":
      return `${s} runs a version without idle notices; no idle subscription.`;
    case "self-target":
      return "That address is this session; no idle subscription.";
    case "send-failed":
      return r.restoredEarlier
        ? `Re-subscribing to ${s} failed; the earlier idle subscription still stands.`
        : `The idle subscription for ${s} could not be set up; you will not be told when it goes idle.`;
    case "requester-refuses-inbound":
    case "no-inbox":
    case "unreachable-namespace":
    case "cap":
      return `The idle subscription for ${s} could not be set up; you will not be told when it goes idle.`;
  }
}
function N(e, r, s) {
  try {
    return {
      model: r.ok ? _(e, r.peerKnownCapable) : S(r, s),
      display: I(e, r),
    };
  } catch (i) {
    h(i);
    let n = r.ok
      ? "Idle subscription sent."
      : "The idle subscription could not be set up.";
    return { model: n, display: n };
  }
}
async function x() {
  let e = (await v7e()) ?? process.getuid?.();
  return e === void 0 ? [] : [e];
}
export {
  w as idleSelfTargetMessage,
  N as idleSubscriptionLines,
  K as subscribeToPeerIdle,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { uo, Hr } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a, Lb } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { _m, j, B, K, $p, sn, ES, o_e, ke, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { ud, l, Jr } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, Yu, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Fp } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { Ia, _t, WD, SRn, Ff, H, Bo, Te, ee, es } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../02-功能模块/Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { $r, kx, hh } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { Ee, Br } from "./chunk-6rfqqsva.js";
import { ye, bn } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../../02-功能模块/工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../02-功能模块/权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../02-功能模块/Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import { P0n, D0n } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../02-功能模块/认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../02-功能模块/认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../../02-功能模块/Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../02-功能模块/Hooks钩子/chunk-9em0d4k5.js";
import { Mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { no } from "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../02-功能模块/工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import {
  bUt,
  $s,
  EX,
  j4n,
  pu,
  zX,
  uw,
  eEe,
  VLe,
  p6t,
  t_t,
  xde,
  DKe,
  Smn,
  VX,
  LKe,
  Ide,
  NKe,
  n_t,
  M3,
  ei,
  mC,
  PY,
  T8e,
} from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../02-功能模块/MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../../02-功能模块/插件系统/chunk-7s6mt1vg.js";
import "../../02-功能模块/图表-Mermaid/chunk-743atbtj.js";
import { eAn, PD, f$e } from "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import "../核心应用-Agent循环/chunk-h3cty6gp.js";
import { lh, LN, Ea } from "../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../02-功能模块/Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../../02-功能模块/Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import { qJn } from "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../02-功能模块/会话-历史-恢复/chunk-m1xj4s02.js";
import { Ts } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../02-功能模块/文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import "../../02-功能模块/Teammates团队/chunk-g6nvp9mm.js";
import "../../02-功能模块/Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../../02-功能模块/Hooks钩子/chunk-z3433nr6.js";
import "../../02-功能模块/Hooks钩子/chunk-bzqqe6xh.js";
import "../../02-功能模块/插件系统/chunk-ajtn749s.js";
import "../../02-功能模块/插件系统/chunk-hh8f1qrw.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-djserjj5.js";
import "../../02-功能模块/上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../../02-功能模块/认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../02-功能模块/Skills技能/chunk-1zy5c8mf.js";
import "../../02-功能模块/Teammates团队/chunk-6b13bhw1.js";
import "../../02-功能模块/Teammates团队/chunk-t899nada.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../../02-功能模块/Cron-定时任务/chunk-mk3zm4ew.js";
import "../../02-功能模块/工具结果持久化/工具结果持久化.jj43r39n.js";
import { zr, z_n } from "../../02-功能模块/Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../02-功能模块/ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../../02-功能模块/权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../../02-功能模块/权限系统/chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../../02-功能模块/语音-音频/chunk-cfhndstm.js";
import { hw, NYn } from "../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-1yq098a7.js";
import { xPe } from "../../02-功能模块/权限系统/chunk-4tar9p3n.js";
import { o$n } from "../../02-功能模块/发布日志-Changelog/发布日志-Changelog.2nyyps5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hxq0hkxe.js";
import "../../02-功能模块/MCP客户端/chunk-855hfv8z.js";
import { jtn } from "../../01-核心基础设施/共享小工具-未细化/chunk-6dxnhjfw.js";
import { _Oe } from "../../02-功能模块/状态栏-主题/chunk-q7ekqy5h.js";
import "../../02-功能模块/自动更新-安装/chunk-548xet6h.js";
import "../../02-功能模块/自动更新-安装/chunk-brx72pf1.js";
import { q4 } from "../../02-功能模块/自动更新-安装/chunk-2g5h49pk.js";
import { kF } from "../../01-核心基础设施/共享小工具-未细化/chunk-p7jm635c.js";
import { yOt } from "../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../../02-功能模块/插件系统/chunk-33bdfgmx.js";
import "../../02-功能模块/MCP客户端/chunk-0mwqsv0r.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../../02-功能模块/DesignSync/chunk-5kyac4wk.js";
import "../../02-功能模块/MCP客户端/chunk-tznd4407.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k1vb7vky.js";
import "../../02-功能模块/工具Monitor/chunk-kxk3njnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "../../02-功能模块/Teammates团队/chunk-eey53z5b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-px58ry6q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
import "../../02-功能模块/工具ToolSearch/chunk-1m51pqtd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../../02-功能模块/权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../../02-功能模块/Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-6kdvf977.js";
import { Ae } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function X(e, o) {
  let r = !1,
    c = Ff(() => {
      if (r || $s() || Nn() || !Mo()) return;
      return ((r = !0), c(), se(e, o));
    });
  return (Et(async () => c()), c);
}
async function se(e, o) {
  let r = await import("../../02-功能模块/Bridge-RemoteControl/validateExplicitMessagingSocketPath.knbv811d.js"),
    c;
  try {
    c = await r.startCrossSessionInbox(e, o);
  } catch (k) {
    if (k instanceof ud)
      n(`[uds-messaging] Late bind refused: ${k.message}`, { level: "warn" });
    else h(k);
    f(
      "agents_cross_session_inbox",
      `${r.getUdsStartFailureCause() ?? "bind_failed"}_late`,
    );
    return;
  }
  if (!c) {
    f(
      "agents_cross_session_inbox",
      `${r.getUdsStartFailureCause() ?? "bind_failed"}_late`,
    );
    return;
  }
  if (no()) {
    (await c(),
      n(
        "[uds-messaging] Late bind landed during shutdown \u2014 torn down, not published",
      ),
      g("agents_cross_session_inbox", "shutdown_discarded"));
    return;
  }
  (n(
    "[uds-messaging] Late bind: gate enabled by a GrowthBook refresh after startup",
  ),
    xPe());
  let m = r.getUdsStartDegradedCause();
  if (m) g("agents_cross_session_inbox", m, { bind_late: !0 });
  else y("agents_cross_session_inbox", { bind_late: !0 });
  let { updateSessionMessagingSocketPath: _ } =
      await import("../../01-核心基础设施/共享小工具-未细化/updateSessionMessagingSocketPath.af9ag5c5.js"),
    S = r.getUdsMessagingSocketPath();
  if (S !== void 0) await _(S, o);
}
import { constants as z } from "fs";
import { open as ne } from "fs/promises";
import { isatty as L } from "tty";
async function W() {
  try {
    return (await (await ne("/dev/tty", z.O_RDWR | z.O_NOCTTY)).close(), !0);
  } catch {
    return !1;
  }
}
async function J() {
  if (P() === "windows") return "unsupported";
  if (!L(0) || !L(1) || !L(2)) return "not_a_tty";
  if (await W()) return "already";
  let e = le();
  if (!e) return "ffi_unavailable";
  if (e(0) !== 0)
    return (n("[bg-ctty] login_tty(0) failed", { level: "warn" }), "failed");
  return "acquired";
}
function ae() {
  return P() === "macos"
    ? ["/usr/lib/libSystem.B.dylib", "libSystem.B.dylib"]
    : ["libc.so.6", "libutil.so.1", "libc.so"];
}
function le() {
  let e;
  try {
    e = Ae("bun:ffi");
  } catch (o) {
    return (
      n(
        `[bg-ctty] bun:ffi unavailable: ${o instanceof Error ? o.message : String(o)}`,
      ),
      null
    );
  }
  for (let o of ae())
    try {
      let r = e.dlopen(o, { login_tty: { args: ["i32"], returns: "i32" } });
      return (c) => r.symbols.login_tty(c);
    } catch {}
  return (n("[bg-ctty] no libc candidate exports login_tty"), null);
}
import { copyFile as ce, stat as me } from "fs/promises";
import { homedir as pe } from "os";
import { join as de } from "path";
async function R(e) {
  await Te((o) => ({ ...o, iterm2SetupInProgress: !1 }), e);
}
function ue() {
  let e = ee();
  return {
    inProgress: e.iterm2SetupInProgress ?? !1,
    backupPath: e.iterm2BackupPath || null,
  };
}
function fe() {
  return de(pe(), "Library", "Preferences", "com.googlecode.iterm2.plist");
}
async function V(e) {
  let { inProgress: o, backupPath: r } = ue();
  if (!o) return { status: "no_backup" };
  if (
    (i("tengu_dead_probe_iterm2_crash_restore", {
      has_backup_path: u(r ? "true" : "false"),
    }),
    !r)
  )
    return (await R(e), { status: "no_backup" });
  try {
    await me(r);
  } catch {
    return (await R(e), { status: "no_backup" });
  }
  try {
    return (await ce(r, fe()), await R(e), { status: "restored" });
  } catch (c) {
    return (
      n(`Failed to restore iTerm2 settings with: ${c}`, { level: "error" }),
      await R(e),
      { status: "failed", backupPath: r }
    );
  }
}
import { realpath as ge } from "fs/promises";
import { basename as _e, resolve as he } from "path";
async function oe(e, o) {
  if (!o?.worktreePath || o.worktreeHookBased) return null;
  let r = await ge(e).catch(() => e);
  if (!(
    o.worktreePath === e ||
    o.worktreePath === r ||
    he(o.worktreePath) === r
  ))
    return null;
  let m = $r(e);
  if (!m || !kx(e) || !t_t(e, m)) return null;
  let _ = _e(e).replaceAll("+", "/");
  try {
    eEe(_);
  } catch {
    return null;
  }
  let S = await zX(e, [], uw(e, m));
  if (!S.ok)
    return (
      n(`[worktree] bg boot: not adopting ${e} \u2014 ${S.message}`, {
        level: "warn",
      }),
      null
    );
  let k = await NKe(e, m, _, "session");
  if (!k || !(await te(e, m))) {
    if (
      (await Z(250),
      (k = await NKe(e, m, _, "session")),
      k && !(await te(e, m)))
    )
      n(
        `[worktree] bg boot: adopted ${e} but no worktree lock names this process`,
        { level: "warn" },
      );
  }
  if (!k) return null;
  let w = {
    originalCwd: m,
    worktreePath: e,
    worktreeName: _,
    worktreeBranch: xde(_),
    originalHeadCommit: (await DKe(e)) ?? void 0,
    sessionId: K(),
    hookBased: !1,
    enteredExisting: !1,
  };
  return (VLe(w), mC(w), w);
}
async function te(e, o) {
  try {
    return LKe(await Ide(e, o)) === process.pid;
  } catch {
    return !1;
  }
}
async function _o(e, o, r, c, m, _, S, k, w, s, T) {
  q("info", "setup_started");
  let U = process.version.match(/^v(\d+)\./)?.[1];
  if (!U || parseInt(U) < 22)
    (console.error(
      ie.bold.red("Error: Claude Code requires Node.js version 22 or higher."),
    ),
      process.exit(1));
  if (a.CLAUDE_BG_BACKEND === "daemon") {
    let t = H("tengu_bg_worker_ctty", !0)
      ? await J()
      : (await W())
        ? "already"
        : "switched_off";
    switch ((q("info", "bg_worker_ctty", { outcome: t }), t)) {
      case "acquired":
        (bUt(), y("bg_worker_ctty"));
        break;
      case "already":
        bUt();
        break;
      case "failed":
        g("bg_worker_ctty", t);
        break;
      case "ffi_unavailable":
      case "not_a_tty":
        g("bg_worker_ctty", t);
        break;
      case "unsupported":
      case "switched_off":
        break;
    }
  }
  if (S) $p(_m(S), "startup_custom_id");
  if (
    (Lb.unset("CLAUDE_CODE_MESSAGING_SOCKET"),
    Lb.unset("CLAUDE_CODE_MESSAGING_TOKEN"),
    !uo() || w !== void 0)
  )
    if (!Mo())
      if (!Nn()) {
        if (w !== void 0)
          await (
            await import("../../02-功能模块/Bridge-RemoteControl/validateExplicitMessagingSocketPath.knbv811d.js")
          ).validateExplicitMessagingSocketPath(w);
        (n(
          "[uds-messaging] Skipped: cross-session messaging gate off (will late-bind if a GrowthBook refresh enables it)",
        ),
          X(w, s));
      } else n("[uds-messaging] Skipped: cross-session messaging gate off");
    else if (Nn()) n("[uds-messaging] Skipped: remote thin client");
    else {
      let t = performance.now(),
        d = await import("../../02-功能模块/Bridge-RemoteControl/validateExplicitMessagingSocketPath.knbv811d.js"),
        v = await d.startCrossSessionInbox(w, s);
      if (v) {
        let C = d.getUdsStartDegradedCause();
        if (C) g("agents_cross_session_inbox", C);
        else y("agents_cross_session_inbox");
      } else
        f(
          "agents_cross_session_inbox",
          d.getUdsStartFailureCause() ?? "bind_failed",
        );
      let b = performance.now() - t;
      (Ts("setup_uds_messaging_ms", b, t),
        i("tengu_uds_startup_bind", { durationMs: Math.round(b), bound: !!v }));
    }
  if (process.env.CLAUDE_BG_BACKEND === "daemon") {
    let { startRendezvousServer: t } = await import("../../02-功能模块/后台任务-Shell管理/clearStartupDialogBlocked.1zrxea5b.js");
    t(s);
  }
  await z_n();
  {
    let { installObserverSpawner: t } = await import("../../02-功能模块/权限系统/installObserverSpawner.hb2mjtdb.js");
    t(B());
  }
  if (!ke()) {
    if (zr()) {
      let t = await V(s);
      if (t.status === "restored")
        console.log(
          ie.yellow(
            "Detected an interrupted iTerm2 setup. Your original settings have been restored. You may need to restart iTerm2 for the changes to take effect.",
          ),
        );
      else if (t.status === "failed")
        console.error(
          ie.red(
            `Failed to restore iTerm2 settings. Please manually restore your original settings with: defaults import com.googlecode.iterm2 ${t.backupPath}.`,
          ),
        );
    }
    try {
      let t = await yOt(s);
      if (t.status === "restored")
        console.log(
          ie.yellow(
            "Detected an interrupted Terminal.app setup. Your original settings have been restored. You may need to restart Terminal.app for the changes to take effect.",
          ),
        );
      else if (t.status === "failed")
        console.error(
          ie.red(
            `Failed to restore Terminal.app settings. Please manually restore your original settings with: defaults import com.apple.Terminal ${t.backupPath}.`,
          ),
        );
    } catch (t) {
      h(t);
    }
  }
  try {
    pu(e);
  } catch (t) {
    (process.stderr.write(
      ie.red(`Error: Can't access working directory ${ie.bold(e)}: ${l(t)}
`),
    ),
      Fp("setcwd"),
      process.exit(1));
  }
  let O = performance.now();
  if (M() && s !== void 0) await f$e(s);
  else eAn();
  if (
    (Ts("setup_hooks_snapshot_ms", performance.now() - O, O),
    q("info", "setup_hooks_captured", {
      duration_ms: Math.round(performance.now() - O),
    }),
    !Nn())
  ) {
    let t = performance.now();
    (j4n(e, s, T), Ts("setup_file_watcher_ms", performance.now() - t, t));
  }
  let G = performance.now();
  if (c) {
    let t = EX(),
      d = await hh();
    if (!t && !d)
      (process.stderr.write(
        ie.red(`Error: Can only use --worktree in a git repository, but ${ie.bold(e)} is not a git repository. Configure a WorktreeCreate hook in settings.json to use --worktree with other VCS systems.
`),
      ),
        process.exit(1));
    let v = k ? `pr-${k}` : (m ?? LN()),
      b,
      C = null;
    if (d) {
      if (((C = $r(Q())), !C))
        (process.stderr.write(
          ie.red(`Error: Could not determine the main git repository root.
`),
        ),
          process.exit(1));
      if (kx(Q())) (q("info", "worktree_resolved_to_main_repo"), Yu(C), pu(C));
      b = _ ? p6t(C, xde(v)) : void 0;
    } else b = _ ? p6t(Q(), xde(v)) : void 0;
    let I;
    try {
      I = await n_t(K(), v, b, {
        prNumber: k,
        fromCwd: e,
        repoRoot: C ?? void 0,
        storageV5: s,
        credentials: T,
      });
    } catch (E) {
      (process.stderr.write(
        ie.red(`Error creating worktree: ${l(E)}
`),
      ),
        Fp("worktree_create"),
        process.exit(1));
    }
    i("tengu_worktree_created", { tmux_enabled: _ });
    let N = !1;
    if (_ && b) {
      let E = await Smn(b, I.worktreePath);
      if (E.created)
        ((N = !0),
          console.log(
            ie.green(`Created tmux session: ${ie.bold(b)}
To attach: ${ie.bold(`tmux attach -t ${b}`)}`),
          ));
      else
        console.error(
          ie.yellow(`Warning: Failed to create tmux session: ${E.error}`),
        );
    }
    try {
      Yu(I.worktreePath);
    } catch (E) {
      let x = Jr(E);
      if (!x) throw E;
      let D;
      if (x === "ENOENT" || x === "ENOTDIR")
        D = I.hookBased
          ? "does not exist or is not a directory. The path came from a " +
            "WorktreeCreate hook \u2014 the hook must print the directory it " +
            "created as the last line of its stdout."
          : "does not exist or is not a directory. It may have been removed out from under this session; retrying will recreate it.";
      else if (x === "EACCES" || x === "EPERM")
        D = `is not accessible (${x}). Check the directory's permissions.`;
      else D = `cannot be entered (${l(E)}).`;
      if (
        (process.stderr.write(
          ie.red(`Error: worktree directory ${I.worktreePath} ${D}
`),
        ),
        h(E),
        N && b)
      )
        await VX(b);
      (Fp(`worktree_chdir:${x}`), await kF(), process.exit(1));
    }
    if (
      (pu(I.worktreePath), ES(Q()), o_e(Q()), mC(I), PY(), M() && s !== void 0)
    )
      await f$e(s);
    else PD();
    (Ea.cache.clear?.(),
      lh(s),
      Ts("setup_worktree_ms", performance.now() - G, G));
  } else if (_t() && !Ia()) {
    let t = performance.now();
    try {
      let d = WD(),
        v = d
          ? await (await import("../../02-功能模块/后台任务-Shell管理/getJobDir.q5d14g0s.js")).readJobState(d, s)
          : null;
      await oe(e, v);
    } catch (d) {
      n(`[worktree] bg adopt-time reclaim skipped: ${l(d)}`);
    }
    Ts("setup_bg_worktree_adopt_ms", performance.now() - t, t);
  }
  if ((q("info", "setup_background_jobs_starting"), !uo()));
  (q4(),
    q("info", "setup_background_jobs_launched"),
    Br("setup_before_prefetch"),
    q("info", "setup_prefetch_starting"));
  let Y = (ke() && a.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) || uo() || Hr();
  if (!Y) {
    if (M3(T)) ei(s, T).catch(() => {});
    T8e(sn(), s);
  }
  if (
    (import("../Headless-SDK模式/setupPluginHookHotReload.b8npbg0k.js").then((t) => {
      if (!Y)
        (t.loadPluginHooks(s, T).catch((d) => {
          n(`plugin hooks prefetch: ${l(d)}`);
        }),
          t.setupPluginHookHotReload(s, T));
    }),
    !uo())
  ) {
    if (
      (import("../../02-功能模块/Memory-CLAUDE.md/isMemoryFileAccess.qp28e8kz.js").then((t) =>
        t.registerSessionFileAccessHooks(),
      ),
      import("../../02-功能模块/Hooks钩子/registerUltrareviewPostCommitHook.t2cxwtta.js").then((t) =>
        t.registerUltrareviewPostCommitHook(),
      ),
      !Nn() && Bo())
    )
      import("../../01-核心基础设施/共享小工具-未细化/startMemoryWatcher.vp74yq2e.js").then((t) => t.startMemoryWatcher(s, T));
  }
  (jtn(),
    i("tengu_started", {
      trigger_id: Ee(a.CLAUDE_CODE_TRIGGER_ID),
      worktree_flag: c,
      tmux_flag: _,
      in_tmux_worktree: Boolean(a.CLAUDE_CODE_TMUX_SESSION && a.TMUX),
    }),
    SRn(ke()));
  let F = (bn() || {}).proxyAuthHelper;
  if (
    (P0n({
      helper: F,
      fromProjectOrLocal:
        ye("projectSettings")?.proxyAuthHelper === F ||
        ye("localSettings")?.proxyAuthHelper === F,
      trustAccepted: Bo,
    }),
    D0n(),
    be({
      isNonInteractiveSession: ke(),
      isRemoteMode: Nn(),
      isBareMode: uo(),
      exitAfterFirstRender: a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER,
      trustAccepted: Bo(),
    }))
  )
    qJn();
  Br("setup_after_prefetch");
  {
    let t = performance.now(),
      d = [_Oe(s), ...(M() && s !== void 0 ? [NYn(hw, s)] : [])];
    if (!uo()) d.push(o$n(void 0, s));
    (await Promise.all(d),
      Ts("setup_release_notes_ms", performance.now() - t, t));
  }
  if (o === "bypassPermissions" || r) {
    if (
      typeof process.getuid === "function" &&
      process.getuid() === 0 &&
      process.env.IS_SANDBOX !== "1" &&
      !a.CLAUDE_CODE_BUBBLEWRAP
    )
      (console.error(
        "--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons",
      ),
        process.exit(1));
  }
  let p = es();
  if (p.lastCost !== void 0 && p.lastDuration !== void 0)
    i("tengu_exit", {
      last_session_cost: p.lastCost,
      last_session_api_duration: p.lastAPIDuration,
      last_session_tool_duration: p.lastToolDuration,
      last_session_duration: p.lastDuration,
      last_session_lines_added: p.lastLinesAdded,
      last_session_lines_removed: p.lastLinesRemoved,
      last_session_total_input_tokens: p.lastTotalInputTokens,
      last_session_total_output_tokens: p.lastTotalOutputTokens,
      last_session_total_cache_creation_input_tokens:
        p.lastTotalCacheCreationInputTokens,
      last_session_total_cache_read_input_tokens:
        p.lastTotalCacheReadInputTokens,
      last_session_fps_average: p.lastFpsAverage,
      last_session_fps_low_1_pct: p.lastFpsLow1Pct,
      last_session_graceful_shutdown: p.lastGracefulShutdown ?? !1,
      last_session_version_base: p.lastVersionBase ?? "unknown",
      last_session_id: Ee(p.lastSessionId),
      ...p.lastSessionMetrics,
    });
}
function be({
  isNonInteractiveSession: e,
  isRemoteMode: o,
  isBareMode: r,
  exitAfterFirstRender: c,
  trustAccepted: m,
}) {
  return !e && !o && !r && !c && m;
}
class re {
  fired = !1;
  claim() {
    if (this.fired) return !1;
    return ((this.fired = !0), !0);
  }
}
var we = new j(() => new re());
function ho(e) {
  if (!we.of(e.host).claim()) return;
  if (Nn() || !Bo()) return;
  (async () => {
    let [o, r] = await Promise.all([
      import("../../01-核心基础设施/共享小工具-未细化/AUTO_MEM_WRITE_ALLOW_REASON.tjdny6p5.js"),
      import("../../01-核心基础设施/共享小工具-未细化/loadedIndexExclusions.dhdc4t68.js"),
    ]);
    if (
      !process.argv.some(
        (c) =>
          /^-(?!-)[A-Za-z]*[cr]/.test(c) ||
          ["--resume", "--continue", "--from-pr"].some(
            (m) => c === m || c.startsWith(`${m}=`),
          ),
      ) &&
      r.loadedIndexExclusions() === null &&
      o.isAutoMemoryEnabled() &&
      o.isMemoryRecallEnabled() &&
      o.isIndexRecallEnabled()
    ) {
      let c = await import("../../02-功能模块/Memory-CLAUDE.md/searchMemoryFilesWithIndex.5h247hbm.js"),
        m = await import("../../01-核心基础设施/共享小工具-未细化/getOrgMemoryServedIdentity.1k01dqaf.js"),
        _ = await import("../../01-核心基础设施/共享小工具-未细化/isMultiStoreSyncAvailable.mskcay01.js"),
        S = await import("../../01-核心基础设施/共享小工具-未细化/FIRST_STORE_PULL_WAIT_DEADLINE_MS.xwkzg70n.js"),
        k = await import("../../01-核心基础设施/共享小工具-未细化/getOrgMemoryPickerData.p4q92bv4.js");
      if (_.isMultiStoreSyncAvailable() || k.hasOrgMemoryDecisionRunStarted()) {
        if (
          (await m.waitForOrgMemoryDecisionSettled(
            S.FIRST_STORE_PULL_WAIT_DEADLINE_MS,
            new AbortController().signal,
          ),
          m.getOrgMemoryDecision().state === "undecided")
        )
          return;
      }
      await o.getAutoMemPathState().warmCanonicalWcRoot();
      let w = r.recallVisibleTeamMounts(o.getAutoMemPath());
      c.prewarmMemoryIndex(
        e,
        o.getAutoMemPath(),
        o.activeSessionLogExcluder(),
        (s) => r.isRecallVisiblePath(s, w),
      );
    }
  })().catch((o) => n(`recall prewarm skipped: ${l(o)}`));
}
export { ho as maybePrewarmRecallIndex, _o as setup };

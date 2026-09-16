// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { yt, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { lo } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
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
import { IR, qe, tt, ro, Ut } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { S1, xRt } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { Ao } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { jn, nxt, eE } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Pn, xx } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
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
import "./chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
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
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { fl } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../插件系统/chunk-7s6mt1vg.js";
import { rht, ya } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import { Cr } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import { yle } from "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import { kv } from "../../01-核心基础设施/共享小工具-未细化/chunk-mnzfncps.js";
import { xlt, Hlt } from "./chunk-40jcpbzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
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
import { s, T, O, v, c, qd } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var To = 15,
  Ae = 1e4,
  Mo = 5,
  xo = 80,
  Eo = 5,
  _o = 5000;
function Pe(d) {
  let i = [];
  return (
    Po(d, i),
    Oo(d, i),
    $o(d, i),
    jo(d, i),
    Uo(d, i),
    i.sort((g, u) => {
      if (g.severity !== u.severity) return g.severity === "warning" ? -1 : 1;
      return (u.savingsTokens ?? 0) - (g.savingsTokens ?? 0);
    }),
    i
  );
}
function Po(d, i) {
  if (d.totalTokens > d.rawMaxTokens) return;
  if (d.percentage >= xo)
    i.push({
      severity: "warning",
      title: `Context is ${d.percentage}% full`,
      detail: d.isAutoCompactEnabled
        ? "Autocompact will trigger soon, which discards older messages. Use /compact now to control what gets kept."
        : Ie(process.env.DISABLE_COMPACT)
          ? "Compaction is disabled."
          : "Autocompact is disabled. Use /compact to free space, or enable autocompact in /config.",
    });
}
function Oo(d, i) {
  if (!d.messageBreakdown) return;
  for (let g of d.messageBreakdown.toolCallsByType) {
    let u = g.callTokens + g.resultTokens,
      f = (u / d.rawMaxTokens) * 100;
    if (f < To || u < Ae) continue;
    let C = Fo(g.name, u, f);
    if (C) i.push(C);
  }
}
function Fo(d, i, g) {
  let u = Pn(i);
  switch (d) {
    case qe:
    case Ut:
      return {
        severity: "warning",
        title: `${d} results using ${u} tokens (${g.toFixed(0)}%)`,
        detail:
          d === Ut
            ? "Pipe output through Select-Object -First/-Last or Select-String to reduce result size. Avoid Get-Content on large files \u2014 use Read with offset/limit instead."
            : "Pipe output through head, tail, or grep to reduce result size. Avoid cat on large files \u2014 use Read with offset/limit instead.",
        savingsTokens: Math.floor(i * 0.5),
      };
    case tt:
      return {
        severity: "info",
        title: `Read results using ${u} tokens (${g.toFixed(0)}%)`,
        detail:
          "Use offset and limit parameters to read only the sections you need. Avoid re-reading entire files when you only need a few lines.",
        savingsTokens: Math.floor(i * 0.3),
      };
    case ro:
      return {
        severity: "info",
        title: `Grep results using ${u} tokens (${g.toFixed(0)}%)`,
        detail:
          "Add more specific patterns or use the glob or type parameter to narrow file types. Consider Glob for file discovery instead of Grep.",
        savingsTokens: Math.floor(i * 0.3),
      };
    case Cr:
      return {
        severity: "info",
        title: `WebFetch results using ${u} tokens (${g.toFixed(0)}%)`,
        detail:
          "Web page content can be very large. Consider extracting only the specific information needed.",
        savingsTokens: Math.floor(i * 0.4),
      };
    default:
      if (g >= 20)
        return {
          severity: "info",
          title: `${d} using ${u} tokens (${g.toFixed(0)}%)`,
          detail: "This tool is consuming a significant portion of context.",
          savingsTokens: Math.floor(i * 0.2),
        };
      return null;
  }
}
function $o(d, i) {
  if (!d.messageBreakdown) return;
  let u = d.messageBreakdown.toolCallsByType.find((j) => j.name === tt);
  if (!u) return;
  let f = u.callTokens + u.resultTokens,
    C = (f / d.rawMaxTokens) * 100,
    h = (u.resultTokens / d.rawMaxTokens) * 100;
  if (C >= To && f >= Ae) return;
  if (h >= Mo && u.resultTokens >= Ae)
    i.push({
      severity: "info",
      title: `File reads using ${Pn(u.resultTokens)} tokens (${h.toFixed(0)}%)`,
      detail:
        "If you are re-reading files, consider referencing earlier reads. Use offset/limit for large files.",
      savingsTokens: Math.floor(u.resultTokens * 0.3),
    });
}
function jo(d, i) {
  let g = d.memoryFiles.reduce((f, C) => f + C.tokens, 0),
    u = (g / d.rawMaxTokens) * 100;
  if (u >= Eo && g >= _o) {
    let f = [...d.memoryFiles]
      .sort((C, h) => h.tokens - C.tokens)
      .slice(0, 3)
      .map((C) => `${Ao(C.path)} (${Pn(C.tokens)})`)
      .join(", ");
    i.push({
      severity: "info",
      title: `Memory files using ${Pn(g)} tokens (${u.toFixed(0)}%)`,
      detail: `Largest: ${f}. Use /memory to review and prune stale entries.`,
      savingsTokens: Math.floor(g * 0.3),
    });
  }
}
function Uo(d, i) {
  if (
    !d.isAutoCompactEnabled &&
    !Ie(process.env.DISABLE_COMPACT) &&
    d.percentage >= 50 &&
    d.percentage < xo
  )
    i.push({
      severity: "info",
      title: "Autocompact is disabled",
      detail:
        "Without autocompact, you will hit context limits and lose the conversation. Enable it in /config or use /compact manually.",
    });
}
function Vo(fe, Yo) {
  return r(
    o,
    {
      flexDirection: "column",
      marginTop: Yo === 0 ? 0 : 1,
      children: [
        r(o, {
          children: [
            e(et, { status: fe.severity, withSpace: !0 }),
            e(t, { bold: !0, children: fe.title }),
            fe.savingsTokens
              ? r(t, {
                  dimColor: !0,
                  children: [
                    " ",
                    L.arrowRight,
                    " save ~",
                    Pn(fe.savingsTokens),
                  ],
                })
              : null,
          ],
        }),
        e(o, {
          marginLeft: 2,
          children: e(t, { dimColor: !0, children: fe.detail }),
        }),
      ],
    },
    Yo,
  );
}
function Te(Zt) {
  let ko = _(5),
    { suggestions: Oe } = Zt;
  if (Oe.length === 0) {
    return null;
  }
  let Wo;
  if (ko[0] === p)
    ((Wo = e(t, { bold: !0, children: "Suggestions" })), (ko[0] = Wo));
  else Wo = ko[0];
  let Fe;
  if (ko[1] !== Oe) ((Fe = Oe.map(Vo)), (ko[1] = Oe), (ko[2] = Fe));
  else Fe = ko[2];
  let Io;
  if (ko[3] !== Fe)
    ((Io = r(o, { flexDirection: "column", marginTop: 1, children: [Wo, Fe] })),
      (ko[3] = Fe),
      (ko[4] = Io));
  else Io = ko[4];
  return Io;
}
function ut(go) {
  return (
    go.tokens > 0 && go.name !== "Free space" && go.name !== X && !go.isDeferred
  );
}
function pt(nt) {
  return nt.isDeferred && nt.name.includes("MCP");
}
function gt(wn) {
  return wn.name === X;
}
function Et(Ee, zo) {
  if (Ee.categoryName === "Free space") {
    return e(t, { dimColor: !0, children: "\u26F6 " }, zo);
  }
  if (Ee.categoryName === X) {
    return e(t, { color: Ee.color, children: "\u26DD " }, zo);
  }
  return e(
    t,
    {
      color: Ee.color,
      children: Ee.squareFullness >= 0.7 ? "\u26C1 " : "\u26C0 ",
    },
    zo,
  );
}
function ft(vn, Nn) {
  return e(
    o,
    { flexDirection: "row", marginLeft: -1, children: vn.map(Et) },
    Nn,
  );
}
function Tt(Dn) {
  return Dn.name === "Free space";
}
function xt(Ln) {
  return Ln.name === "Free space";
}
function kt(Rn) {
  return Rn.name === "Free space";
}
function Ct(Mn, En) {
  return Mn + En.tokens;
}
function ht(_n) {
  return _n.isLoaded;
}
function bt(An) {
  return An.isLoaded;
}
function St(st, On) {
  return e(
    fl.Node,
    {
      children: r(t, {
        children: [
          st.name,
          ":",
          " ",
          r(t, { dimColor: !0, children: [Pn(st.tokens), " tokens"] }),
        ],
      }),
    },
    On,
  );
}
function zt(Fn) {
  return !Fn.isLoaded;
}
function Bt($n) {
  return !$n.isLoaded;
}
function wt(Un, Wn) {
  return e(fl.Node, { dimColor: !0, children: Un.name }, Wn);
}
function vt(rt, In) {
  return e(
    fl.Node,
    {
      children: r(t, {
        children: [
          rt.name,
          ":",
          " ",
          r(t, { dimColor: !0, children: [Pn(rt.tokens), " tokens"] }),
        ],
      }),
    },
    In,
  );
}
function Nt(Yn, Vn) {
  return Yn + Vn.tokens;
}
function _t(at, Gn) {
  return e(
    fl.Node,
    {
      children: r(t, {
        children: [
          at.agentType,
          ":",
          " ",
          r(t, { dimColor: !0, children: [Pn(at.tokens), " tokens"] }),
        ],
      }),
    },
    Gn,
  );
}
function Dt(xe) {
  let [it, Hn] = xe;
  return r(
    o,
    {
      flexDirection: "column",
      marginTop: 1,
      children: [
        e(t, { dimColor: !0, children: it }),
        e(fl, { variant: "tree", children: Hn.map(_t) }),
      ],
    },
    it,
  );
}
function Lt(Xn, Jn) {
  return Xn + Jn.tokens;
}
function Rt(lt, Kn) {
  return e(
    fl.Node,
    {
      children: r(t, {
        children: [
          Ao(lt.path),
          ":",
          " ",
          r(t, { dimColor: !0, children: [Pn(lt.tokens), " tokens"] }),
        ],
      }),
    },
    Kn,
  );
}
function At(mt, qn) {
  return e(
    fl.Node,
    {
      children: r(t, {
        children: [
          mt.name,
          ":",
          " ",
          r(t, { dimColor: !0, children: [xx(mt.tokens), " tokens"] }),
        ],
      }),
    },
    qn,
  );
}
function Mt(xe) {
  let [ct, Zn] = xe;
  return r(
    o,
    {
      flexDirection: "column",
      marginTop: 1,
      children: [
        e(t, { dimColor: !0, children: ct }),
        e(fl, { variant: "tree", children: Zn.map(At) }),
      ],
    },
    ct,
  );
}
var X = "Autocompact buffer";
function Bo() {
  return null;
}
var dt = ["Project", "User", S1, "Managed", "Plugin", "MCP", "Built-in"];
function _e(d) {
  let i = new Map();
  for (let u of d) {
    let f = xRt(u.source) + (u.pluginName ? ` (${u.pluginName})` : ""),
      C = i.get(f) || [];
    (C.push(u), i.set(f, C));
  }
  for (let [u, f] of i.entries())
    i.set(
      u,
      f.sort((C, h) => h.tokens - C.tokens),
    );
  let g = new Map();
  for (let u of dt) {
    let f = i.get(u);
    if (f) g.set(u, f);
    let C = [...i.keys()].filter((h) => h.startsWith(u + " (")).sort();
    for (let h of C) g.set(h, i.get(h));
  }
  for (let [u, f] of i) if (!g.has(u)) g.set(u, f);
  return g;
}
function F(Tn) {
  let ho = _(9),
    { count: ae, noun: yo, tokens: Co } = Tn,
    $e;
  if (ho[0] !== ae || ho[1] !== yo)
    (($e = x(ae, yo)), (ho[0] = ae), (ho[1] = yo), (ho[2] = $e));
  else $e = ho[2];
  let je;
  if (ho[3] !== Co) ((je = Pn(Co)), (ho[3] = Co), (ho[4] = je));
  else je = ho[4];
  let Go;
  if (ho[5] !== ae || ho[6] !== $e || ho[7] !== je)
    ((Go = e(fl, {
      variant: "tree",
      children: r(fl.Node, {
        dimColor: !0,
        children: [ae, " ", $e, " \xB7 ", je, " tokens"],
      }),
    })),
      (ho[5] = ae),
      (ho[6] = $e),
      (ho[7] = je),
      (ho[8] = Go));
  else Go = ho[8];
  return Go;
}
function ne(xe) {
  let y = _(136),
    {
      data: W,
      isRemote: Ho,
      skipCollapseStatus: Xo,
      collapseDetailSections: Jo,
    } = xe,
    ke = Ho === void 0 ? !1 : Ho,
    ye = Xo === void 0 ? !1 : Xo,
    z = Jo === void 0 ? !1 : Jo,
    {
      categories: M,
      totalTokens: Ce,
      rawMaxTokens: b,
      autocompactSource: ie,
      percentage: he,
      gridRows: be,
      model: I,
      memoryFiles: Y,
      mcpTools: R,
      deferredBuiltinTools: Ue,
      systemTools: Ko,
      systemPromptSections: qo,
      agents: V,
      skills: P,
      messageBreakdown: xn,
    } = W,
    Zo;
  if (y[0] !== Ue) ((Zo = Ue === void 0 ? [] : Ue), (y[0] = Ue), (y[1] = Zo));
  else Zo = y[1];
  let bo = Zo,
    We,
    Ye,
    Ve,
    Ge,
    Qo,
    Q,
    Se,
    ze,
    Be,
    we,
    ve,
    He,
    Ne,
    Xe,
    Je,
    Ke,
    De,
    Ze,
    Qe,
    Le,
    Re,
    eo,
    oo,
    to,
    Me;
  if (
    y[2] !== V.length ||
    y[3] !== M ||
    y[4] !== W ||
    y[5] !== bo.length ||
    y[6] !== be ||
    y[7] !== ke ||
    y[8] !== R.length ||
    y[9] !== Y.length ||
    y[10] !== I ||
    y[11] !== he ||
    y[12] !== b ||
    y[13] !== P?.tokens ||
    y[14] !== ye ||
    y[15] !== Ce
  ) {
    let kn = M.filter(ut);
    let ee;
    if (y[41] !== M) ((ee = M.some(pt)), (y[41] = M), (y[42] = ee));
    else ee = y[42];
    Q = ee;
    Qo = bo.length > 0;
    let le = M.find(gt);
    let oe;
    if (y[43] !== W) ((oe = xlt(W)), (y[43] = W), (y[44] = oe));
    else oe = y[44];
    let no = oe;
    Ge =
      R.length > 0 ||
      V.length > 0 ||
      Y.length > 0 ||
      (P?.tokens ?? 0) > 0 ||
      !1;
    Ve = o;
    Ze = "column";
    Qe = 1;
    if (y[45] === p)
      ((Le = e(t, { bold: !0, children: "Context Usage" })), (y[45] = Le));
    else Le = y[45];
    if (y[46] !== no)
      ((Re = no && e(t, { color: "error", wrap: "wrap", children: no })),
        (y[46] = no),
        (y[47] = Re));
    else Re = y[47];
    Ye = o;
    Je = "row";
    Ke = 2;
    let G;
    if (y[48] !== be) ((G = be.map(ft)), (y[48] = be), (y[49] = G));
    else G = y[49];
    if (y[50] !== G)
      ((De = e(o, { flexDirection: "column", flexShrink: 0, children: G })),
        (y[50] = G),
        (y[51] = De));
    else De = y[51];
    We = o;
    eo = "column";
    oo = 0;
    to = 0;
    if (y[52] !== I)
      ((Me = IR(I) && e(t, { children: IR(I) })), (y[52] = I), (y[53] = Me));
    else Me = y[53];
    if (y[54] !== I)
      ((Se = e(t, { dimColor: !0, children: I })), (y[54] = I), (y[55] = Se));
    else Se = y[55];
    let H;
    if (y[56] !== Ce) ((H = Pn(Ce)), (y[56] = Ce), (y[57] = H));
    else H = y[57];
    let K;
    if (y[58] !== b) ((K = Pn(b)), (y[58] = b), (y[59] = K));
    else K = y[59];
    if (y[60] !== he || y[61] !== H || y[62] !== K)
      ((ze = r(t, {
        dimColor: !0,
        children: [H, "/", K, " tokens (", he, "%)"],
      })),
        (y[60] = he),
        (y[61] = H),
        (y[62] = K),
        (y[63] = ze));
    else ze = y[63];
    if (y[64] !== ke || y[65] !== ye)
      ((Be = !ke && !ye && e(Bo, {})),
        (y[64] = ke),
        (y[65] = ye),
        (y[66] = Be));
    else Be = y[66];
    if (y[67] === p)
      ((we = e(t, { children: " " })),
        (ve = e(t, {
          dimColor: !0,
          italic: !0,
          children: "Estimated usage by category",
        })),
        (y[67] = we),
        (y[68] = ve));
    else ((we = y[67]), (ve = y[68]));
    let me;
    if (y[69] !== b)
      ((me = (te, yn) => {
        let Cn = Pn(te.tokens);
        let hn = te.isDeferred
          ? "N/A"
          : `${((te.tokens / b) * 100).toFixed(1)}%`;
        let bn = te.name === X;
        let Sn = te.name;
        let zn = te.isDeferred ? " " : bn ? "\u26DD" : "\u26C1";
        return r(
          o,
          {
            children: [
              e(t, { color: te.color, children: zn }),
              r(t, { children: [" ", Sn, ": "] }),
              r(t, { dimColor: !0, children: [Cn, " tokens (", hn, ")"] }),
            ],
          },
          yn,
        );
      }),
        (y[69] = b),
        (y[70] = me));
    else me = y[70];
    He = kn.map(me);
    if (y[71] !== M || y[72] !== b)
      ((Ne =
        (M.find(Tt)?.tokens ?? 0) > 0 &&
        r(o, {
          children: [
            e(t, { dimColor: !0, children: "\u26F6" }),
            e(t, { children: " Free space: " }),
            r(t, {
              dimColor: !0,
              children: [
                Pn(M.find(xt)?.tokens || 0),
                " ",
                "(",
                (((M.find(kt)?.tokens || 0) / b) * 100).toFixed(1),
                "%)",
              ],
            }),
          ],
        })),
        (y[71] = M),
        (y[72] = b),
        (y[73] = Ne));
    else Ne = y[73];
    Xe =
      le &&
      le.tokens > 0 &&
      r(o, {
        children: [
          e(t, { color: le.color, children: "\u26DD" }),
          r(t, { dimColor: !0, children: [" ", le.name, ": "] }),
          r(t, {
            dimColor: !0,
            children: [
              Pn(le.tokens),
              " tokens (",
              ((le.tokens / b) * 100).toFixed(1),
              "%)",
            ],
          }),
        ],
      });
    ((y[2] = V.length),
      (y[3] = M),
      (y[4] = W),
      (y[5] = bo.length),
      (y[6] = be),
      (y[7] = ke),
      (y[8] = R.length),
      (y[9] = Y.length),
      (y[10] = I),
      (y[11] = he),
      (y[12] = b),
      (y[13] = P?.tokens),
      (y[14] = ye),
      (y[15] = Ce),
      (y[16] = We),
      (y[17] = Ye),
      (y[18] = Ve),
      (y[19] = Ge),
      (y[20] = Qo),
      (y[21] = Q),
      (y[22] = Se),
      (y[23] = ze),
      (y[24] = Be),
      (y[25] = we),
      (y[26] = ve),
      (y[27] = He),
      (y[28] = Ne),
      (y[29] = Xe),
      (y[30] = Je),
      (y[31] = Ke),
      (y[32] = De),
      (y[33] = Ze),
      (y[34] = Qe),
      (y[35] = Le),
      (y[36] = Re),
      (y[37] = eo),
      (y[38] = oo),
      (y[39] = to),
      (y[40] = Me));
  } else
    ((We = y[16]),
      (Ye = y[17]),
      (Ve = y[18]),
      (Ge = y[19]),
      (Qo = y[20]),
      (Q = y[21]),
      (Se = y[22]),
      (ze = y[23]),
      (Be = y[24]),
      (we = y[25]),
      (ve = y[26]),
      (He = y[27]),
      (Ne = y[28]),
      (Xe = y[29]),
      (Je = y[30]),
      (Ke = y[31]),
      (De = y[32]),
      (Ze = y[33]),
      (Qe = y[34]),
      (Le = y[35]),
      (Re = y[36]),
      (eo = y[37]),
      (oo = y[38]),
      (to = y[39]),
      (Me = y[40]));
  let ee;
  if (
    y[74] !== We ||
    y[75] !== Se ||
    y[76] !== ze ||
    y[77] !== Be ||
    y[78] !== we ||
    y[79] !== ve ||
    y[80] !== He ||
    y[81] !== Ne ||
    y[82] !== Xe ||
    y[83] !== eo ||
    y[84] !== oo ||
    y[85] !== to ||
    y[86] !== Me
  )
    ((ee = r(We, {
      flexDirection: eo,
      gap: oo,
      flexShrink: to,
      children: [Me, Se, ze, Be, we, ve, He, Ne, Xe],
    })),
      (y[74] = We),
      (y[75] = Se),
      (y[76] = ze),
      (y[77] = Be),
      (y[78] = we),
      (y[79] = ve),
      (y[80] = He),
      (y[81] = Ne),
      (y[82] = Xe),
      (y[83] = eo),
      (y[84] = oo),
      (y[85] = to),
      (y[86] = Me),
      (y[87] = ee));
  else ee = y[87];
  let oe;
  if (
    y[88] !== Ye ||
    y[89] !== Je ||
    y[90] !== Ke ||
    y[91] !== De ||
    y[92] !== ee
  )
    ((oe = r(Ye, { flexDirection: Je, gap: Ke, children: [De, ee] })),
      (y[88] = Ye),
      (y[89] = Je),
      (y[90] = Ke),
      (y[91] = De),
      (y[92] = ee),
      (y[93] = oe));
  else oe = y[93];
  let G;
  if (y[94] !== ie || y[95] !== b)
    ((G =
      ie !== "auto" &&
      r(o, {
        marginTop: 1,
        children: [
          e(t, { bold: !0, children: "Auto-compact window: " }),
          e(t, {
            dimColor: !0,
            children:
              ie === "experiment" || ie === "clientdata"
                ? `auto (${Pn(b)} tokens)`
                : ie === "unknown-model"
                  ? `${Pn(b)} tokens (default for an unrecognized model)`
                  : `${Pn(b)} tokens`,
          }),
        ],
      })),
      (y[94] = ie),
      (y[95] = b),
      (y[96] = G));
  else G = y[96];
  let H;
  if (y[97] !== z || y[98] !== Q || y[99] !== R)
    ((H =
      R.length > 0 &&
      r(o, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          r(o, {
            children: [
              e(t, { bold: !0, children: "MCP tools" }),
              r(t, {
                dimColor: !0,
                children: [" ", "\xB7 /mcp", Q ? " (loaded on-demand)" : ""],
              }),
            ],
          }),
          z
            ? e(F, {
                count: R.length,
                noun: "tool",
                tokens: R.filter((Bn) => !Q || Bn.isLoaded).reduce(Ct, 0),
              })
            : r(N, {
                children: [
                  R.some(ht) &&
                    r(o, {
                      flexDirection: "column",
                      marginTop: 1,
                      children: [
                        e(t, { dimColor: !0, children: "Loaded" }),
                        e(fl, {
                          variant: "tree",
                          children: R.filter(bt).map(St),
                        }),
                      ],
                    }),
                  Q &&
                    R.some(zt) &&
                    r(o, {
                      flexDirection: "column",
                      marginTop: 1,
                      children: [
                        e(t, { dimColor: !0, children: "Available" }),
                        e(fl, {
                          variant: "tree",
                          children: R.filter(Bt).map(wt),
                        }),
                      ],
                    }),
                  !Q && e(fl, { variant: "tree", children: R.map(vt) }),
                ],
              }),
        ],
      })),
      (y[97] = z),
      (y[98] = Q),
      (y[99] = R),
      (y[100] = H));
  else H = y[100];
  const K = ((Ko && Ko.length > 0) || Qo) && !1,
    me = qo && qo.length > 0 && !1;
  let so;
  if (y[101] !== V || y[102] !== z)
    ((so =
      V.length > 0 &&
      r(o, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          r(o, {
            children: [
              e(t, { bold: !0, children: "Custom agents" }),
              e(t, { dimColor: !0, children: " \xB7 .claude/agents/" }),
            ],
          }),
          z
            ? e(F, { count: V.length, noun: "agent", tokens: V.reduce(Nt, 0) })
            : Array.from(_e(V).entries()).map(Dt),
        ],
      })),
      (y[101] = V),
      (y[102] = z),
      (y[103] = so));
  else so = y[103];
  let ao;
  if (y[104] !== z || y[105] !== Y)
    ((ao =
      Y.length > 0 &&
      r(o, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          r(o, {
            children: [
              e(t, { bold: !0, children: "Memory files" }),
              e(t, { dimColor: !0, children: " \xB7 /memory" }),
            ],
          }),
          z
            ? e(F, { count: Y.length, noun: "file", tokens: Y.reduce(Lt, 0) })
            : e(fl, { variant: "tree", children: Y.map(Rt) }),
        ],
      })),
      (y[104] = z),
      (y[105] = Y),
      (y[106] = ao));
  else ao = y[106];
  let io;
  if (y[107] !== z || y[108] !== P)
    ((io =
      P &&
      P.tokens > 0 &&
      r(o, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          r(o, {
            children: [
              e(t, { bold: !0, children: "Skills" }),
              e(t, { dimColor: !0, children: " \xB7 /skills" }),
            ],
          }),
          z
            ? e(F, {
                count: P.skillFrontmatter.length,
                noun: "skill",
                tokens: P.tokens,
              })
            : Array.from(_e(P.skillFrontmatter).entries()).map(Mt),
        ],
      })),
      (y[107] = z),
      (y[108] = P),
      (y[109] = io));
  else io = y[109];
  const So = xn && !1;
  let mo;
  if (y[110] !== z || y[111] !== Ge)
    ((mo =
      z &&
      Ge &&
      e(o, {
        marginTop: 1,
        children: e(t, { dimColor: !0, children: "/context all to expand" }),
      })),
      (y[110] = z),
      (y[111] = Ge),
      (y[112] = mo));
  else mo = y[112];
  let co;
  if (
    y[113] !== G ||
    y[114] !== H ||
    y[115] !== K ||
    y[116] !== me ||
    y[117] !== so ||
    y[118] !== ao ||
    y[119] !== io ||
    y[120] !== So ||
    y[121] !== mo
  )
    ((co = r(o, {
      flexDirection: "column",
      marginLeft: -1,
      children: [G, H, K, me, so, ao, io, So, mo],
    })),
      (y[113] = G),
      (y[114] = H),
      (y[115] = K),
      (y[116] = me),
      (y[117] = so),
      (y[118] = ao),
      (y[119] = io),
      (y[120] = So),
      (y[121] = mo),
      (y[122] = co));
  else co = y[122];
  let uo;
  if (y[123] !== W) ((uo = Pe(W)), (y[123] = W), (y[124] = uo));
  else uo = y[124];
  let po;
  if (y[125] !== uo)
    ((po = e(Te, { suggestions: uo })), (y[125] = uo), (y[126] = po));
  else po = y[126];
  let ot;
  if (
    y[127] !== Ve ||
    y[128] !== Ze ||
    y[129] !== Qe ||
    y[130] !== Le ||
    y[131] !== Re ||
    y[132] !== oe ||
    y[133] !== co ||
    y[134] !== po
  )
    ((ot = r(Ve, {
      flexDirection: Ze,
      paddingLeft: Qe,
      children: [Le, Re, oe, co, po],
    })),
      (y[127] = Ve),
      (y[128] = Ze),
      (y[129] = Qe),
      (y[130] = Le),
      (y[131] = Re),
      (y[132] = oe),
      (y[133] = co),
      (y[134] = po),
      (y[135] = ot));
  else ot = y[135];
  return ot;
}
var wo = m(() => {
  let d = c({ name: s(), tokens: T() });
  return c({
    categories: v(
      c({
        name: s(),
        tokens: T(),
        color: ce().catch("inactive"),
        isDeferred: O()
          .optional()
          .catch(void 0),
      }),
    ),
    totalTokens: T(),
    maxTokens: T(),
    rawMaxTokens: T()
      .optional()
      .catch(void 0),
    autocompactSource: ce().catch("model-default"),
    percentage: T(),
    gridRows: v(
      v(
        c({
          color: ce(),
          isFilled: O(),
          categoryName: s(),
          tokens: T(),
          percentage: T(),
          squareFullness: T(),
        }),
      ),
    ).catch([]),
    model: s().catch(""),
    memoryFiles: v(c({ path: s(), type: s(), tokens: T() })).catch([]),
    mcpTools: v(
      c({
        name: s(),
        serverName: s(),
        tokens: T(),
        isLoaded: O()
          .optional()
          .catch(void 0),
      }),
    ).catch([]),
    deferredBuiltinTools: v(c({ name: s(), tokens: T(), isLoaded: O() }))
      .optional()
      .catch(void 0),
    systemTools: v(d)
      .optional()
      .catch(void 0),
    systemPromptSections: v(d)
      .optional()
      .catch(void 0),
    agents: v(c({ agentType: s(), source: ce(), tokens: T() })).catch([]),
    slashCommands: c({ totalCommands: T(), includedCommands: T(), tokens: T() })
      .optional()
      .catch(void 0),
    skills: c({
      totalSkills: T(),
      includedSkills: T(),
      tokens: T(),
      skillFrontmatter: v(
        c({
          name: s(),
          source: ce(),
          pluginName: s()
            .optional()
            .catch(void 0),
          tokens: T(),
        }),
      ).catch([]),
    })
      .optional()
      .catch(void 0),
    autoCompactThreshold: T()
      .optional()
      .catch(void 0),
    isAutoCompactEnabled: O().catch(!1),
    messageBreakdown: c({
      toolCallTokens: T(),
      toolResultTokens: T(),
      attachmentTokens: T(),
      assistantMessageTokens: T(),
      userMessageTokens: T(),
      redirectedContextTokens: T().catch(0),
      unattributedTokens: T().catch(0),
      toolCallsByType: v(
        c({ name: s(), callTokens: T(), resultTokens: T() }),
      ).catch([]),
      attachmentsByType: v(d).catch([]),
    })
      .optional()
      .catch(void 0),
    apiUsage: c({
      input_tokens: T(),
      output_tokens: T(),
      cache_creation_input_tokens: T(),
      cache_read_input_tokens: T(),
    })
      .nullable()
      .catch(null),
  }).transform((i) => ({ ...i, rawMaxTokens: i.rawMaxTokens ?? i.maxTokens }));
});
function ce() {
  return qd((d) => typeof d === "string");
}
function Pt(d, i = []) {
  return ya(d);
}
async function xs(d, i, g) {
  let u = i.presentation === "fullscreen" && g.trim().toLowerCase() !== "all",
    f = jn();
  if (f) {
    if (!eE("controlChannel"))
      return (
        d("Context usage isn't available over this remote connection"),
        null
      );
    try {
      let S = kv(
        "get_context_usage",
        wo(),
        await f.sendControlRequest(
          { subtype: "get_context_usage" },
          { signal: i.abortController.signal },
        ),
      );
      if (!S)
        return (
          d(
            "Couldn't show context usage: the remote sent a reply this version can't display",
          ),
          null
        );
      let w = lo(i.session),
        q = w ? { ...S, memoryFiles: [] } : S,
        pe = await yle(
          e(ne, { data: q, isRemote: !0, collapseDetailSections: u }),
          { storageV5: i.storageV5 },
        );
      if (!w && lo(i.session))
        ((w = !0),
          (q = { ...S, memoryFiles: [] }),
          (pe = await yle(
            e(ne, { data: q, isRemote: !0, collapseDetailSections: u }),
            { storageV5: i.storageV5 },
          )));
      d(pe, {
        display: "system",
        metaMessages: [Hlt(q, { skipCollapseStatus: !0 })],
      });
    } catch (S) {
      if (yt(S)) return (d(nxt), null);
      let w = lo(i.session);
      if (w) n(`/context remote fetch failed: ${l(S)}`, { level: "error" });
      d(
        w
          ? "Couldn't fetch context from remote"
          : `Couldn't fetch context from remote: ${l(S)}`,
      );
    }
    return null;
  }
  let {
      messages: C,
      getAppState: h,
      options: { mainLoopModel: j, tools: de },
    } = i,
    ue = Pt(C, de),
    se = process.stdout.columns || 80,
    E = h(),
    B = await rht(
      ue,
      j,
      async () => E.toolPermissionContext,
      de,
      E.agentDefinitions,
      {
        session: i.session,
        terminalWidth: se,
        toolUseContext: i,
        originalMessages: ue,
        configuredWindow: E.autoCompactWindow,
      },
    ),
    U = lo(i.session),
    J = U ? { ...B, memoryFiles: [] } : B,
    re = await yle(
      e(ne, { data: J, collapseDetailSections: u, skipCollapseStatus: U }),
      { storageV5: i.storageV5 },
    );
  if (!U && lo(i.session))
    ((U = !0),
      (J = { ...B, memoryFiles: [] }),
      (re = await yle(
        e(ne, { data: J, collapseDetailSections: u, skipCollapseStatus: U }),
        { storageV5: i.storageV5 },
      )));
  return (
    d(re, {
      display: "system",
      metaMessages: [Hlt(J, { skipCollapseStatus: U })],
    }),
    null
  );
}
export { xs as call };

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
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { Jo } from "../权限系统/chunk-ynkf3yy4.js";
import { wa } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { Et, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { YNt } from "../../01-核心基础设施/共享小工具-未细化/chunk-ds47w88s.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { vCt, wUe, ht } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import {
  xZ,
  iIt,
  qae,
  AFn,
  L6e,
  CFn,
  aIt,
  V_e,
  Mst,
} from "../Bridge-RemoteControl/chunk-x379yyxb.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { Ht } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
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
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
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
import "../远程工具执行/chunk-66axrkvh.js";
import { w6e, mHe, VJt, kZ, jae } from "../../03-入口与运行时/Headless-SDK模式/chunk-ph7v431y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cbdr3qdm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
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
import { createWriteStream as R } from "fs";
import {
  mkdir as T,
  readFile as q,
  rm as O,
  stat as x,
  unlink as E,
} from "fs/promises";
import { tmpdir as N } from "os";
import { join as b } from "path";
import { pipeline as U } from "stream/promises";
var w = null,
  k = CFn,
  j = 4,
  F = 500,
  C = 16000000,
  K = 30000,
  G = 3000;
function z() {
  let e = Jo();
  if (e.historySpoolDir === null)
    ((e.historySpoolDir = b(N(), `cc-history-prefetch-${process.pid}`)),
      Et(() =>
        e.historySpoolDir === null
          ? void 0
          : O(e.historySpoolDir, { recursive: !0, force: !0 }).catch(() => {}),
      ));
  return e.historySpoolDir;
}
function B(e, t, s) {
  if (Pe() !== "firstParty") return;
  if (!YNt.test(e)) {
    n(`[historyPrefetch] ${e} fails CCR_SESSION_ID_RE \u2014 refusing`, {
      level: "warn",
    });
    return;
  }
  let r = Jo().historyPrefetchEntries,
    a = r.get(e);
  if (a && !a.settled) return;
  if (
    s?.force !== !0 &&
    a?.settledOk === !0 &&
    a.settledAt !== void 0 &&
    Date.now() - a.settledAt < G
  )
    return;
  let u = z(),
    i = b(u, `${e}.${Date.now()}.json`),
    p = performance.now(),
    d = { path: i, written: Promise.resolve(null), settled: !1, pageSize: k },
    S = (async () => {
      await T(u, { recursive: !0, mode: 448 });
      let c = async (o) =>
          ht.get(`/v1/code/sessions/${e}/events?limit=${o}&sort_order=desc`, {
            auth: "teleport-org",
            credentials: t,
            headers: await wUe(),
            responseType: "stream",
            timeout: 15000,
            validateStatus: () => !0,
          }),
        f = await c(k);
      if (f.ok && f.status === 400)
        (n(
          `[historyPrefetch] ${e} limit=${k} rejected (400) \u2014 retrying at ${L6e}`,
        ),
          f.data.resume(),
          (d.pageSize = L6e),
          (f = await c(L6e)));
      if (!f.ok)
        return (
          n(
            `[historyPrefetch] ${e} gate=${f.reason} ${"detail" in f ? f.detail : ""}`,
          ),
          null
        );
      if (f.status !== 200)
        return (
          n(`[historyPrefetch] ${e} HTTP ${f.status}`),
          f.data.resume(),
          null
        );
      return (await U(f.data, R(i, { mode: 384 })), i);
    })().catch(
      (c) => (
        n(`[historyPrefetch] ${e} failed: ${l(c)}`),
        E(i).catch(() => {}),
        null
      ),
    );
  if (((d.written = S), r.set(e, d), a))
    setTimeout(
      (c) => {
        E(c).catch(() => {});
      },
      K,
      a.path,
    ).unref();
  S.then((c) => {
    if (
      ((d.settled = !0),
      (d.settledAt = Date.now()),
      (d.settledOk = c !== null),
      c === null && a?.settled === !0 && r.get(e) === d)
    )
      r.set(e, { ...a, settledAt: Date.now() });
    n(
      `[historyPrefetch] ${e} ${c ? `\u2192 ${c}` : "null"} +${(performance.now() - p).toFixed(0)}ms`,
    );
  });
}
async function L(e, t) {
  let s;
  try {
    s = (await x(t)).size;
  } catch (r) {
    if (!W(r)) n(`[historyPrefetch] stat ${t} failed: ${l(r)}`);
    return { skip: "gone" };
  }
  if (s > C)
    return (
      n(`[historyPrefetch] ${e} spool ${s}B exceeds cap \u2014 skipping`),
      { skip: "oversize" }
    );
  try {
    return { body: await q(t, "utf8") };
  } catch (r) {
    if (!W(r)) n(`[historyPrefetch] read ${t} failed: ${l(r)}`);
    return { skip: "gone" };
  }
}
async function Ae(e, t) {
  let s = Jo().historyPrefetchEntries;
  if (!s.has(e)) B(e, t);
  let r = s.get(e);
  if ((s.delete(e), !r)) return null;
  let a = await r.written;
  if (a === null) return null;
  let u = await L(e, a);
  if ((await E(a).catch(() => {}), "skip" in u)) return null;
  let i = u.body,
    p = Y(i);
  if (p === null) return (n(`[historyPrefetch] ${e} parse failed`), null);
  if (!p.hasMore) return v(p);
  let d = await V_e(e, t).catch(() => null);
  if (d === null) return v(p);
  let S = p.events,
    c = p.firstId,
    f = 1,
    o = Date.now() + F;
  while (c !== null && f < j && Date.now() < o && !M(S)) {
    let _ = o - Date.now(),
      h = await Promise.race([
        Mst(d, c, r.pageSize, C),
        Z(_).then(() => "budget"),
      ]);
    if (h === "budget" || h === null) break;
    (f++, S.unshift(...h.events), (c = h.hasMore ? h.firstId : null), (p = h));
  }
  let m = c !== null && M(S);
  return (
    n(
      `[historyPrefetch] ${e} walked ${f} pages, ${S.length} events, complete=${c === null || m}`,
    ),
    v({ events: S, firstId: c, hasMore: c !== null && !m })
  );
}
function Y(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  if (t === null || typeof t !== "object") return null;
  let s = Array.isArray(t.data) ? t.data : [],
    r = [];
  for (let u = s.length - 1; u >= 0; u--) {
    let i = s[u];
    if (i?.payload)
      r.push({
        payload: i.payload,
        createdAt: i.created_at,
        source: i.source,
        sequenceNum: aIt(i),
      });
  }
  let a = t.next_cursor ?? null;
  return { events: r, firstId: a, hasMore: a !== null };
}
function v(e) {
  let t = J(e.events),
    s = [],
    r = 0,
    a = new Set(),
    u = new Map(),
    i = !1,
    p = new Set(),
    d,
    S,
    c,
    f;
  for (let o of t) {
    if (o.sequenceNum !== void 0 && o.sequenceNum > r) r = o.sequenceNum;
    try {
      if (!xZ(o.payload)) continue;
      if (o.source === "worker") {
        let h = jae(o.payload);
        if (h) for (let P of h.uuids) a.add(P);
        if (o.payload.type === "active_goal") {
          d = mHe(o.payload.value);
          continue;
        }
        if (o.payload.type === "autocompact_state") {
          S = VJt(o.payload.value);
          continue;
        }
        if (
          ((c = vCt(o.payload) ?? c),
          o.payload.type === "system" && o.payload.subtype === "init")
        ) {
          let { skills: P, plugins: A } = w6e(o.payload);
          if (P !== void 0 || A !== void 0)
            f = { skills: P ?? [], plugins: A ?? [] };
        }
      }
      if (!Q(o)) continue;
      if (D(o)) {
        ((s = []), a.clear(), u.clear(), (i = !1), p.clear());
        continue;
      }
      if (w !== null) {
        if (!i) i = I(o.payload);
        X(o.payload, p);
      }
      let m = null;
      if (m !== null) {
        let h = o.payload.uuid;
        if (typeof h === "string")
          u.set(
            h,
            m.map((P) => P.uuid),
          );
        s.push(...m);
        continue;
      }
      let _ = kZ(o.payload, { convertUserTextMessages: !0 });
      if (_.type === "message") s.push(_.message);
    } catch (m) {
      n(
        `[historyPrefetch] Skipping ${o.payload.type} frame seq=${o.sequenceNum ?? "?"} \u2014 conversion threw: ${l(m)}`,
        { level: "error" },
      );
    }
  }
  if (a.size > 0) {
    let o = new Set(a);
    for (let m of a) for (let _ of u.get(m) ?? []) o.add(_);
    s = s.filter((m) => !o.has(m.uuid));
  }
  return {
    messages: s,
    maxSequenceNum: r,
    complete: !e.hasMore,
    nestedUuidAliases: [...u.entries()].filter(([, o]) => o.length > 1),
    hasReplyChannel: i,
    replyChannelToolUseIds: [...p],
    lastActiveGoal: d,
    lastAutocompactState: S,
    lastWorkerPermissionMode: c,
    lastWorkerInventory: f,
  };
}
function J(e) {
  let t = new Map();
  for (let r = 0; r < e.length; r++) {
    let a = e[r],
      u = a.payload;
    if (u.type === "control_response") {
      let i = u.response;
      if (
        typeof i === "object" &&
        i !== null &&
        "request_id" in i &&
        typeof i.request_id === "string"
      )
        t.delete(i.request_id);
    } else if (
      a.source === "worker" &&
      u.type === "control_cancel_request" &&
      typeof u.request_id === "string"
    )
      t.delete(u.request_id);
    else if (u.type === "result" && a.source === "worker") t.clear();
    else if (
      a.source === "worker" &&
      u.type === "control_request" &&
      a.sequenceNum !== void 0 &&
      typeof u.request_id === "string"
    ) {
      let i = u.request;
      if (
        typeof i === "object" &&
        i !== null &&
        "subtype" in i &&
        typeof i.subtype === "string" &&
        AFn.includes(i.subtype)
      )
        t.set(u.request_id, r);
    }
  }
  if (t.size === 0) return e;
  let s = e.length;
  for (let r of t.values()) s = Math.min(s, r);
  return e.slice(0, s);
}
function X(e, t) {
  let s = w;
  if (s === null || e.type !== "assistant") return;
  for (let r of e.message.content)
    if (r.type === "tool_use" && s.replyChannelBlockKind(r) !== void 0)
      t.add(r.id);
}
function I(e) {
  let t = w;
  if (t === null) return !1;
  if (e.type === "system" && e.subtype === "init") {
    let s = w6e(e);
    return t.hasReplyChannelInit({ mcp_servers: s.mcpServers, tools: s.tools });
  }
  return (
    e.type === "assistant" &&
    !e.parent_tool_use_id &&
    e.message.content.some((s) => t.replyChannelBlockKind(s) !== void 0)
  );
}
function D(e) {
  if (
    e.payload.type !== "conversation_reset" ||
    (e.source !== void 0 && e.source !== "worker")
  )
    return !1;
  let t = e.payload.new_conversation_id;
  return typeof t === "string" && t !== "";
}
function M(e) {
  return e.some(D);
}
function Q(e) {
  if (e.source === void 0 || e.source === "worker") return !0;
  if (e.payload.type === "user") return !qae(e.payload);
  return iIt.has(e.payload.type);
}
function Me(e) {
  if (e === null) g("remote_history_prefetch", "miss");
  else if (e.maxSequenceNum === 0) g("remote_history_prefetch", "no_seq");
  else if (!e.complete && e.messages.length === 0)
    g("remote_history_prefetch", "empty_partial");
  else if (!e.complete) g("remote_history_prefetch", "incomplete");
  else y("remote_history_prefetch");
}
function be(e) {
  if (e === null || e.maxSequenceNum === 0) return null;
  if (!e.complete && e.messages.length === 0) return null;
  return e;
}
function Ce(e) {
  return Ht(
    `Showing recent messages \xB7 full history at ${wa(e, void 0, { from: "cli", m: "0" })}`,
    "notice",
  );
}
export {
  Ae as consumePrefetchedHistory,
  be as gateSeed,
  Ce as partialSeedNotice,
  Me as reportPrefetchOutcome,
};

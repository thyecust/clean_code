// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { K, ze, Lx } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { le, nt, uv, Cu } from "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
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
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
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
import "./chunk-3kmsshb6.js";
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
import { mce, rPe, _Ge, $Se } from "./chunk-5wa92x7d.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { O_, as } from "../认证-OAuth登录/chunk-7jz937t3.js";
import { ite, Zdt, U4, ept } from "./chunk-xcbagjx9.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { ha, zF, _a, hde, Dy, b3, Kde, xI } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
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
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
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
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import { vee, m9 } from "../../01-核心基础设施/共享小工具-未细化/chunk-xvyb4e66.js";
import { T7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-g36jzdvm.js";
import { Pee } from "../../01-核心基础设施/共享小工具-未细化/chunk-ka9d46rr.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { Md } from "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import "./chunk-0mwqsv0r.js";
import { Yo } from "../../01-核心基础设施/共享小工具-未细化/chunk-1ftn6vfs.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/chunk-5kyac4wk.js";
import { rG } from "./chunk-tznd4407.js";
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
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
var W = 2000,
  z = 100,
  V = 60000,
  X = 10,
  R = 30000;
async function w(e, s) {
  try {
    await (s ? U4(e, s) : U4(e));
  } catch (i) {
    n(`removeMcpTaskMetadata failed: ${String(i)}`);
  }
}
async function x(e, s, i, t, r) {
  try {
    (await i, await U4(e, s, t, r));
  } catch (p) {
    n(`removeWatcherSidecar failed: ${String(p)}`);
  }
}
function N(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
function L({ taskRegistry: e, registryId: s, registered: i }) {
  let t = e.get(s);
  return t === void 0 ? i : t.status !== "running";
}
var A = new WeakMap();
function G(e, s, i) {
  let t = A.get(e);
  if (!t)
    ((t = new Map()),
      A.set(e, t),
      e.setNotificationHandler(
        "notifications/tasks/status",
        { params: rPe },
        (r) => {
          A.get(e)?.get(r.taskId)?.(r.status, r.statusMessage);
        },
      ));
  return (
    t.set(s, i),
    () => {
      t.delete(s);
    }
  );
}
var Y = m(() =>
    uv([
      nt({ data: le(), mimeType: le().optional() }),
      nt({
        source: nt({
          type: Cu("base64"),
          data: le(),
          media_type: le().optional(),
        }),
      }),
      nt({ resource: nt({ blob: le(), mimeType: le().optional() }) }),
    ]),
  ),
  J = m(() => nt({ resource: nt({ uri: le().optional(), text: le() }) })),
  Q = m(() =>
    nt({
      type: Cu("resource_link"),
      name: le(),
      uri: le(),
      description: le().optional(),
    }),
  );
async function ee(e, s, i, t = hde) {
  let r;
  if (typeof e === "string") r = e;
  else {
    let p = [];
    for (let a of e ?? []) {
      let { text: o, bytesPersisted: g } = await se(a, t, s);
      ((t -= g), p.push(o));
    }
    r = p.join(`
`);
  }
  try {
    let p = await m9(r, i),
      a = typeof p === "string" ? p : r,
      o = vee();
    if (a === r && (r.length > o || Nt(r).length > o)) a = H(r, o);
    if (a === r) return { text: r };
    if (r.length > t)
      return {
        text: a,
        savedHint:
          "[The portion truncated above was not saved: the per-result persist budget is exhausted.]",
      };
    let g = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      u = await Dy(Buffer.from(r, "utf8"), "text/plain", g, void 0, s);
    if ("error" in u) return { text: a };
    t -= u.size;
    let d = P() === "windows" ? "python" : "python3",
      c = u.filepath.replaceAll("\\", "/").replaceAll("'", "'\\''"),
      k = te(r)
        ? "use Read to retrieve the portion truncated above"
        : `its lines are too long for Read's offset/limit \u2014 slice by character range via Bash instead, e.g. ${d} -c 'print(open("${c}").read()[A:B])' in ~${j.toLocaleString()}-char spans`;
    return {
      text: a,
      savedHint: `[The complete ${r.length}-character output was saved to ${u.filepath}; ${k}.]`,
    };
  } catch {
    return { text: oe(r, vee()) };
  }
}
var j = 80000;
function te(e) {
  let s = 0,
    i = 0;
  for (;;) {
    let t = e.indexOf(
      `
`,
      s,
    );
    if ((t === -1 ? e.length : t) - s > j) return !1;
    if (t === -1) return i > 0;
    (i++, (s = t + 1));
  }
}
async function se(e, s, i) {
  if (e.type === "text" && typeof e.text === "string")
    return { text: e.text, bytesPersisted: 0 };
  let t = Y().safeParse(e);
  if (!t.success) {
    let a = J().safeParse(e);
    if (a.success) {
      let { uri: g, text: u } = a.data.resource;
      return { text: g ? `[Resource at ${g}] ${u}` : u, bytesPersisted: 0 };
    }
    let o = Q().safeParse(e);
    if (o.success) {
      let { name: g, uri: u, description: d } = o.data;
      return {
        text: `[Resource link: ${g}] ${u}${d ? ` (${d})` : ""}`,
        bytesPersisted: 0,
      };
    }
    return { text: `[${e.type}]`, bytesPersisted: 0 };
  }
  let r =
      "source" in t.data
        ? { data: t.data.source.data, mimeType: t.data.source.media_type }
        : "resource" in t.data
          ? { data: t.data.resource.blob, mimeType: t.data.resource.mimeType }
          : { data: t.data.data, mimeType: t.data.mimeType },
    p = (r.data.length * 3) / 4;
  if (p > hde)
    return { text: `[${e.type} content too large to save]`, bytesPersisted: 0 };
  if (p > s)
    return {
      text: `[${e.type} content skipped: per-result persist budget exhausted]`,
      bytesPersisted: 0,
    };
  try {
    let a = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      o = await Dy(Buffer.from(r.data, "base64"), r.mimeType, a, void 0, i);
    if ("error" in o)
      return {
        text: `[${e.type} content (${r.mimeType ?? "unknown type"}) could not be saved to disk: ${o.error}]`,
        bytesPersisted: 0,
      };
    return {
      text: b3(o.filepath, r.mimeType, o.size, `[${e.type} result] `),
      bytesPersisted: o.size,
    };
  } catch (a) {
    return (
      n(`persisting MCP task result block failed: ${String(a)}`, {
        level: "error",
      }),
      { text: `[${e.type}]`, bytesPersisted: 0 }
    );
  }
}
var B = 1e4,
  re = /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function v(e) {
  if (e === void 0) return;
  let s = e.replace(re, " ").replace(/ {2,}/g, " ").trim();
  if (s === "") return;
  return s.length > B ? `${oe(s, B)}\u2026 [truncated]` : s;
}
function F(e) {
  let i = `MCP task ${rG(e.mcpTaskId)} (${Pee(e.serverName, e.toolName)}) ${e.status}.`,
    t = v(e.statusMessage) ?? "no detail",
    r =
      e.status === "completed"
        ? (e.resultText ?? "")
        : e.status === "failed"
          ? `Task failed: ${t}`
          : e.statusMessage !== void 0
            ? `Task cancelled: ${t}`
            : "Task was cancelled by the server.",
    p = e.resultHint
      ? `

${Nt(e.resultHint)}`
      : "";
  return _a({
    taskId: e.registryId,
    status: e.status,
    summary: Nt(i),
    body: `
<result>
${ne(r, vee() - p.length)}${p}
</result>`,
  });
}
function ne(e, s) {
  let i = Nt(e);
  if (i.length <= s) return i;
  return Nt(H(e, s));
}
function H(e, s) {
  let t = Math.max(0, Math.floor(e.length * (s / Nt(e).length)));
  for (;;) {
    let r = oe(e, t);
    if (Nt(r).length + 13 <= s || t === 0) return r + "\u2026 [truncated]";
    t = Math.floor(t * 0.9);
  }
}
function ae(e) {
  return ie(e).catch((s) => h(s));
}
async function ie({
  client: e,
  taskRegistry: s,
  taskState: i,
  pollIntervalMs: t,
  storageV5: r,
  credentials: p,
}) {
  let { id: a, mcpTaskId: o, serverName: g, toolName: u } = i,
    { mcpStatus: d, statusMessage: c } = i,
    k = s.get(a) !== void 0,
    T = K(),
    b = ite(),
    I = Zdt(
      a,
      {
        taskId: a,
        serverName: g,
        toolName: u,
        mcpTaskId: o,
        pollIntervalMs: t,
        spawnedAt: i.startTime,
        toolUseId: i.toolUseId,
      },
      r,
    ).catch((S) => n(`writeMcpTaskMetadata ${a}: ${String(S)}`));
  if (s.get(a)?.status === "running")
    s.update(a, (S) => ({
      ...S,
      sidecarWrite: I,
      sidecarSessionId: T,
      sidecarProjectDir: b,
    }));
  let E = (S, M) => {
      let l = v(M);
      if (S === d && l === c) return;
      if (N(d) && !N(S)) return;
      ((d = S),
        (c = l),
        s.update(a, (U) => ({ ...U, mcpStatus: S, statusMessage: l })));
    },
    q = G(e, o, E),
    O = Math.min(Math.max(t ?? W, z), V),
    _ = 0,
    C;
  try {
    while (!N(d)) {
      if (d === "input_required")
        try {
          await e.request(
            { method: "tasks/result", params: { taskId: o } },
            mce,
          );
        } catch (l) {
          n(`mcp task ${o} getTaskResult during input_required: ${O_(l)}`);
        }
      if ((await Z(O), L({ taskRegistry: s, registryId: a, registered: k }))) {
        (e
          .request({ method: "tasks/cancel", params: { taskId: o } }, $Se, {
            signal: AbortSignal.timeout(Kde),
          })
          .catch((l) => n(`mcp task ${o} cancel after kill: ${O_(l)}`)),
          x(a, r, I, T, b));
        return;
      }
      try {
        let l = await e.request(
          { method: "tasks/get", params: { taskId: o } },
          _Ge,
        );
        ((_ = 0), E(l.status, l.statusMessage));
      } catch (l) {
        if ((_++, n(`mcp task ${o} poll failed: ${O_(l)}`), _ >= X)) {
          ((d = "failed"),
            (c = v(`Task polling failed repeatedly: ${O_(l)}`)),
            (C = "poll_failed_repeatedly"));
          break;
        }
      }
    }
    let S, M;
    if (d === "completed")
      try {
        let l = await e.request(
          { method: "tasks/result", params: { taskId: o } },
          mce,
        );
        if (l.isError !== !0) M = T7(l.content);
        S = await ee(l.content ?? [], r, p);
      } catch (l) {
        ((d = "failed"),
          (c = v(`Failed to fetch task result: ${O_(l)}`)),
          (C = "result_fetch_failed"));
      }
    if (L({ taskRegistry: s, registryId: a, registered: k })) {
      (e
        .request({ method: "tasks/cancel", params: { taskId: o } }, $Se, {
          signal: AbortSignal.timeout(Kde),
        })
        .catch((l) => n(`mcp task ${o} cancel after kill: ${O_(l)}`)),
        x(a, r, I, T, b));
      return;
    }
    if (d === "completed") y("mcp_task_complete");
    else if (d === "cancelled") f("mcp_task_complete", "cancelled_by_server");
    else f("mcp_task_complete", C ?? "failed");
    (s.update(a, (l) => ({
      ...l,
      status: d === "completed" ? "completed" : "failed",
      mcpStatus: d,
      statusMessage: c,
      endTime: Date.now(),
      notified: !0,
      terminal: {
        summary: c ?? `${Pee(g, u)} ${d}`,
        ...(M && { resource_links: M }),
      },
    })),
      x(a, r, I, T, b),
      ha(
        {
          value: F({
            registryId: a,
            mcpTaskId: o,
            serverName: g,
            toolName: u,
            status: d,
            resultText: S?.text,
            resultHint: S?.savedHint,
            statusMessage: c,
          }),
          mode: "task-notification",
          skipAttachments: !0,
          agentId: ze(),
          priority: "next",
          taskId: a,
        },
        { turnAttribution: "inherit" },
      ));
  } finally {
    q();
  }
}
async function je(e) {
  if (!xI()) return;
  let s;
  try {
    s = await ept(e.storageV5);
  } catch (t) {
    (f("mcp_task_restore", "list_failed"),
      n(`restoreMcpTasks list failed: ${String(t)}`));
    return;
  }
  let i = s.filter((t) => t.protocol === "sep2663");
  for (let t of s) {
    if (t.protocol === "sep2663") continue;
    if (t.protocol !== void 0) {
      n(
        `restoreMcpTasks: sidecar ${t.taskId} has unknown protocol '${t.protocol}'; parked`,
        { level: "error" },
      );
      continue;
    }
    ce(t, e).catch((r) => n(`restoreMcpTasks ${t.taskId}: ${O_(r)}`));
  }
  y("mcp_task_restore");
}
function D(e, s, i) {
  let t = e.getNegotiatedProtocolVersion?.(),
    r = t === void 0 ? void 0 : zF(t);
  return `server '${s}' ${i} on ${r ? `protocol revision ${r}` : "a modern-era protocol revision"}, which has no tasks support`;
}
async function ce(
  e,
  { taskRegistry: s, getMcpClients: i, storageV5: t, credentials: r },
) {
  let p = s.get(e.taskId);
  if (
    p?.type === "mcp_task" &&
    p.status === "running" &&
    p.sidecarWrite !== void 0
  )
    return;
  let a = {
    ...Md(e.taskId, "mcp_task", Pee(e.serverName, e.toolName), e.toolUseId),
    type: "mcp_task",
    status: "running",
    serverName: e.serverName,
    toolName: e.toolName,
    mcpTaskId: e.mcpTaskId,
    mcpStatus: "working",
    statusMessage: "reconnecting\u2026",
    pollIntervalMs: e.pollIntervalMs,
    startTime: e.spawnedAt,
  };
  s.register(a);
  let o = Date.now() + R,
    g,
    u,
    d = "Could not reconnect after resume";
  while (Date.now() < o) {
    if (s.get(e.taskId)?.status === "killed") {
      w(e.taskId, t);
      return;
    }
    let c = i().find((k) => k.name === e.serverName);
    if (c?.type === "connected") {
      let k = Yo(c.client);
      if (k.getProtocolEra() === "modern") {
        ((u = D(k, e.serverName, "reconnected")),
          (d = "Task could not be resumed"));
        break;
      }
      g = k;
      break;
    }
    if (c?.type === "cached") {
      let k = Lx();
      if (!k) {
        u = `server '${e.serverName}' has no MCP session wired`;
        break;
      }
      try {
        let T = Yo(
          (
            await k(c, {
              timeoutMs: Math.max(0, o - Date.now()),
              context: "MCP task restore",
            })
          ).client,
        );
        if (T.getProtocolEra() === "modern") {
          ((u = D(T, e.serverName, "connected")),
            (d = "Task could not be resumed"));
          break;
        }
        g = T;
        break;
      } catch (T) {
        u = `server '${e.serverName}' failed to connect: ${as(T, c.config)}`;
        break;
      }
    }
    if (
      c?.type === "failed" ||
      c?.type === "disabled" ||
      c?.type === "needs-auth"
    ) {
      u = `server '${e.serverName}' is ${c.type}`;
      break;
    }
    await Z(500);
  }
  if (!g) {
    u ??= `server '${e.serverName}' did not connect within ${R / 1000}s`;
    let c = v(u) ?? "no detail",
      k = !1;
    if (
      (s.update(e.taskId, (T) => {
        if (T.notified || T.status !== "running") return T;
        return (
          (k = !0),
          {
            ...T,
            status: "failed",
            mcpStatus: "failed",
            statusMessage: c,
            endTime: Date.now(),
            notified: !0,
            terminal: { summary: c },
          }
        );
      }),
      w(e.taskId, t),
      !k)
    )
      return;
    ha({
      value: F({
        registryId: e.taskId,
        mcpTaskId: e.mcpTaskId,
        serverName: e.serverName,
        toolName: e.toolName,
        status: "failed",
        statusMessage: `${d}: ${u}`,
      }),
      mode: "task-notification",
      agentId: ze(),
      priority: "next",
      skipAttachments: !0,
      taskId: e.taskId,
    });
    return;
  }
  if (s.get(e.taskId)?.status !== "running") {
    (w(e.taskId, t),
      g
        .request(
          { method: "tasks/cancel", params: { taskId: e.mcpTaskId } },
          $Se,
          { signal: AbortSignal.timeout(Kde) },
        )
        .catch((c) =>
          n(`mcp task ${e.mcpTaskId} cancel after kill: ${O_(c)}`),
        ));
    return;
  }
  ae({
    client: g,
    taskRegistry: s,
    taskState: a,
    pollIntervalMs: e.pollIntervalMs,
    storageV5: t,
    credentials: r,
  });
}
export {
  V as MAX_POLL_INTERVAL_MS,
  z as MIN_POLL_INTERVAL_MS,
  v as boundMcpStatusMessage,
  F as buildMcpTaskNotification,
  ee as mcpContentToNotificationText,
  je as restoreMcpTasks,
  ae as startMcpTaskWatcher,
};

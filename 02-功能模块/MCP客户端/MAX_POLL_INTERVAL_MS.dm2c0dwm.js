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
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { O_, as } from "../认证-OAuth登录/chunk-7jz937t3.js";
import { dhe, v1 } from "./chunk-tv3jbp8f.js";
import { ite, Zdt, U4, ept } from "./chunk-xcbagjx9.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { ha, _a, hde, Dy, b3, Kde, xI } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
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
  q = 100,
  z = 60000,
  X = 10,
  R = 30000;
async function C(e, t) {
  try {
    await (t ? U4(e, t) : U4(e));
  } catch (a) {
    n(`removeMcpTaskMetadata failed: ${String(a)}`);
  }
}
async function w(e, t, a, s, r) {
  try {
    (await a, await U4(e, t, s, r));
  } catch (u) {
    n(`removeWatcherSidecar failed: ${String(u)}`);
  }
}
function N(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
function L({ taskRegistry: e, registryId: t, registered: a }) {
  let s = e.get(t);
  return s === void 0 ? a : s.status !== "running";
}
var A = new WeakMap();
function G(e, t, a) {
  let s = A.get(e);
  if (!s)
    ((s = new Map()),
      A.set(e, s),
      e.setNotificationHandler(dhe, (r) => {
        A.get(e)?.get(r.params.taskId)?.(
          r.params.status,
          r.params.statusMessage,
        );
      }));
  return (
    s.set(t, a),
    () => {
      s.delete(t);
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
  V = m(() => nt({ resource: nt({ uri: le().optional(), text: le() }) })),
  J = m(() =>
    nt({
      type: Cu("resource_link"),
      name: le(),
      uri: le(),
      description: le().optional(),
    }),
  );
async function Q(e, t, a, s = hde) {
  let r;
  if (typeof e === "string") r = e;
  else {
    let u = [];
    for (let i of e ?? []) {
      let { text: c, bytesPersisted: p } = await te(i, s, t);
      ((s -= p), u.push(c));
    }
    r = u.join(`
`);
  }
  try {
    let u = await m9(r, a),
      i = typeof u === "string" ? u : r,
      c = vee();
    if (i === r && (r.length > c || Nt(r).length > c)) i = D(r, c);
    if (i === r) return { text: r };
    if (r.length > s)
      return {
        text: i,
        savedHint:
          "[The portion truncated above was not saved: the per-result persist budget is exhausted.]",
      };
    let p = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      l = await Dy(Buffer.from(r, "utf8"), "text/plain", p, void 0, t);
    if ("error" in l) return { text: i };
    s -= l.size;
    let o = P() === "windows" ? "python" : "python3",
      g = l.filepath.replaceAll("\\", "/").replaceAll("'", "'\\''"),
      T = ee(r)
        ? "use Read to retrieve the portion truncated above"
        : `its lines are too long for Read's offset/limit \u2014 slice by character range via Bash instead, e.g. ${o} -c 'print(open("${g}").read()[A:B])' in ~${H.toLocaleString()}-char spans`;
    return {
      text: i,
      savedHint: `[The complete ${r.length}-character output was saved to ${l.filepath}; ${T}.]`,
    };
  } catch {
    return { text: oe(r, vee()) };
  }
}
var H = 80000;
function ee(e) {
  let t = 0,
    a = 0;
  for (;;) {
    let s = e.indexOf(
      `
`,
      t,
    );
    if ((s === -1 ? e.length : s) - t > H) return !1;
    if (s === -1) return a > 0;
    (a++, (t = s + 1));
  }
}
async function te(e, t, a) {
  if (e.type === "text" && typeof e.text === "string")
    return { text: e.text, bytesPersisted: 0 };
  let s = Y().safeParse(e);
  if (!s.success) {
    let i = V().safeParse(e);
    if (i.success) {
      let { uri: p, text: l } = i.data.resource;
      return { text: p ? `[Resource at ${p}] ${l}` : l, bytesPersisted: 0 };
    }
    let c = J().safeParse(e);
    if (c.success) {
      let { name: p, uri: l, description: o } = c.data;
      return {
        text: `[Resource link: ${p}] ${l}${o ? ` (${o})` : ""}`,
        bytesPersisted: 0,
      };
    }
    return { text: `[${e.type}]`, bytesPersisted: 0 };
  }
  let r =
      "source" in s.data
        ? { data: s.data.source.data, mimeType: s.data.source.media_type }
        : "resource" in s.data
          ? { data: s.data.resource.blob, mimeType: s.data.resource.mimeType }
          : { data: s.data.data, mimeType: s.data.mimeType },
    u = (r.data.length * 3) / 4;
  if (u > hde)
    return { text: `[${e.type} content too large to save]`, bytesPersisted: 0 };
  if (u > t)
    return {
      text: `[${e.type} content skipped: per-result persist budget exhausted]`,
      bytesPersisted: 0,
    };
  try {
    let i = `mcp-task-result-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      c = await Dy(Buffer.from(r.data, "base64"), r.mimeType, i, void 0, a);
    if ("error" in c)
      return {
        text: `[${e.type} content (${r.mimeType ?? "unknown type"}) could not be saved to disk: ${c.error}]`,
        bytesPersisted: 0,
      };
    return {
      text: b3(c.filepath, r.mimeType, c.size, `[${e.type} result] `),
      bytesPersisted: c.size,
    };
  } catch (i) {
    return (
      n(`persisting MCP task result block failed: ${String(i)}`, {
        level: "error",
      }),
      { text: `[${e.type}]`, bytesPersisted: 0 }
    );
  }
}
var B = 1e4,
  se = /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function S(e) {
  if (e === void 0) return;
  let t = e.replace(se, " ").replace(/ {2,}/g, " ").trim();
  if (t === "") return;
  return t.length > B ? `${oe(t, B)}\u2026 [truncated]` : t;
}
function j(e) {
  let a = `MCP task ${rG(e.mcpTaskId)} (${Pee(e.serverName, e.toolName)}) ${e.status}.`,
    s = S(e.statusMessage) ?? "no detail",
    r =
      e.status === "completed"
        ? (e.resultText ?? "")
        : e.status === "failed"
          ? `Task failed: ${s}`
          : e.statusMessage !== void 0
            ? `Task cancelled: ${s}`
            : "Task was cancelled by the server.",
    u = e.resultHint
      ? `

${Nt(e.resultHint)}`
      : "";
  return _a({
    taskId: e.registryId,
    status: e.status,
    summary: Nt(a),
    body: `
<result>
${re(r, vee() - u.length)}${u}
</result>`,
  });
}
function re(e, t) {
  let a = Nt(e);
  if (a.length <= t) return a;
  return Nt(D(e, t));
}
function D(e, t) {
  let s = Math.max(0, Math.floor(e.length * (t / Nt(e).length)));
  for (;;) {
    let r = oe(e, s);
    if (Nt(r).length + 13 <= t || s === 0) return r + "\u2026 [truncated]";
    s = Math.floor(s * 0.9);
  }
}
function ae(e) {
  return ne(e).catch((t) => h(t));
}
async function ne({
  client: e,
  taskRegistry: t,
  taskState: a,
  pollIntervalMs: s,
  storageV5: r,
  credentials: u,
}) {
  let { id: i, mcpTaskId: c, serverName: p, toolName: l } = a,
    { mcpStatus: o, statusMessage: g } = a,
    T = t.get(i) !== void 0,
    v = K(),
    b = ite(),
    I = Zdt(
      i,
      {
        taskId: i,
        serverName: p,
        toolName: l,
        mcpTaskId: c,
        pollIntervalMs: s,
        spawnedAt: a.startTime,
        toolUseId: a.toolUseId,
      },
      r,
    ).catch((k) => n(`writeMcpTaskMetadata ${i}: ${String(k)}`));
  if (t.get(i)?.status === "running")
    t.update(i, (k) => ({
      ...k,
      sidecarWrite: I,
      sidecarSessionId: v,
      sidecarProjectDir: b,
    }));
  let E = (k, M) => {
      let d = S(M);
      if (k === o && d === g) return;
      if (N(o) && !N(k)) return;
      ((o = k),
        (g = d),
        t.update(i, (U) => ({ ...U, mcpStatus: k, statusMessage: d })));
    },
    F = G(e, c, E),
    O = Math.min(Math.max(s ?? W, q), z),
    _ = 0,
    x;
  try {
    while (!N(o)) {
      if (o === "input_required")
        try {
          await e.experimental.tasks.getTaskResult(c, v1);
        } catch (d) {
          n(`mcp task ${c} getTaskResult during input_required: ${O_(d)}`);
        }
      if ((await Z(O), L({ taskRegistry: t, registryId: i, registered: T }))) {
        (e.experimental.tasks
          .cancelTask(c, { signal: AbortSignal.timeout(Kde) })
          .catch((d) => n(`mcp task ${c} cancel after kill: ${O_(d)}`)),
          w(i, r, I, v, b));
        return;
      }
      try {
        let d = await e.experimental.tasks.getTask(c);
        ((_ = 0), E(d.status, d.statusMessage));
      } catch (d) {
        if ((_++, n(`mcp task ${c} poll failed: ${O_(d)}`), _ >= X)) {
          ((o = "failed"),
            (g = S(`Task polling failed repeatedly: ${O_(d)}`)),
            (x = "poll_failed_repeatedly"));
          break;
        }
      }
    }
    let k, M;
    if (o === "completed")
      try {
        let d = await e.experimental.tasks.getTaskResult(c, v1);
        if (d.isError !== !0) M = T7(d.content);
        k = await Q(d.content ?? [], r, u);
      } catch (d) {
        ((o = "failed"),
          (g = S(`Failed to fetch task result: ${O_(d)}`)),
          (x = "result_fetch_failed"));
      }
    if (L({ taskRegistry: t, registryId: i, registered: T })) {
      (e.experimental.tasks
        .cancelTask(c, { signal: AbortSignal.timeout(Kde) })
        .catch((d) => n(`mcp task ${c} cancel after kill: ${O_(d)}`)),
        w(i, r, I, v, b));
      return;
    }
    if (o === "completed") y("mcp_task_complete");
    else if (o === "cancelled") f("mcp_task_complete", "cancelled_by_server");
    else f("mcp_task_complete", x ?? "failed");
    (t.update(i, (d) => ({
      ...d,
      status: o === "completed" ? "completed" : "failed",
      mcpStatus: o,
      statusMessage: g,
      endTime: Date.now(),
      notified: !0,
      terminal: {
        summary: g ?? `${Pee(p, l)} ${o}`,
        ...(M && { resource_links: M }),
      },
    })),
      w(i, r, I, v, b),
      ha(
        {
          value: j({
            registryId: i,
            mcpTaskId: c,
            serverName: p,
            toolName: l,
            status: o,
            resultText: k?.text,
            resultHint: k?.savedHint,
            statusMessage: g,
          }),
          mode: "task-notification",
          skipAttachments: !0,
          agentId: ze(),
          priority: "next",
          taskId: i,
        },
        { turnAttribution: "inherit" },
      ));
  } finally {
    F();
  }
}
async function Re(e) {
  if (!xI()) return;
  let t;
  try {
    t = await ept(e.storageV5);
  } catch (a) {
    (f("mcp_task_restore", "list_failed"),
      n(`restoreMcpTasks list failed: ${String(a)}`));
    return;
  }
  for (let a of t) {
    if (a.protocol === "sep2663") {
      n(
        `restoreMcpTasks: sep2663 sidecar ${a.taskId} needs the v2 runtime; parked`,
      );
      continue;
    }
    if (a.protocol !== void 0) {
      n(
        `restoreMcpTasks: sidecar ${a.taskId} has unknown protocol '${a.protocol}'; parked`,
        { level: "error" },
      );
      continue;
    }
    ie(a, e).catch((s) => n(`restoreMcpTasks ${a.taskId}: ${O_(s)}`));
  }
  y("mcp_task_restore");
}
async function ie(
  e,
  { taskRegistry: t, getMcpClients: a, storageV5: s, credentials: r },
) {
  let u = t.get(e.taskId);
  if (
    u?.type === "mcp_task" &&
    u.status === "running" &&
    u.sidecarWrite !== void 0
  )
    return;
  let i = {
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
  t.register(i);
  let c = Date.now() + R,
    p,
    l;
  while (Date.now() < c) {
    if (t.get(e.taskId)?.status === "killed") {
      C(e.taskId, s);
      return;
    }
    let o = a().find((g) => g.name === e.serverName);
    if (o?.type === "connected") {
      p = Yo(o.client);
      break;
    }
    if (o?.type === "cached") {
      let g = Lx();
      if (!g) {
        l = `server '${e.serverName}' has no MCP session wired`;
        break;
      }
      try {
        p = Yo(
          (
            await g(o, {
              timeoutMs: Math.max(0, c - Date.now()),
              context: "MCP task restore",
            })
          ).client,
        );
        break;
      } catch (T) {
        l = `server '${e.serverName}' failed to connect: ${as(T, o.config)}`;
        break;
      }
    }
    if (
      o?.type === "failed" ||
      o?.type === "disabled" ||
      o?.type === "needs-auth"
    ) {
      l = `server '${e.serverName}' is ${o.type}`;
      break;
    }
    await Z(500);
  }
  if (!p) {
    l ??= `server '${e.serverName}' did not connect within ${R / 1000}s`;
    let o = S(l) ?? "no detail",
      g = !1;
    if (
      (t.update(e.taskId, (T) => {
        if (T.notified || T.status !== "running") return T;
        return (
          (g = !0),
          {
            ...T,
            status: "failed",
            mcpStatus: "failed",
            statusMessage: o,
            endTime: Date.now(),
            notified: !0,
            terminal: { summary: o },
          }
        );
      }),
      C(e.taskId, s),
      !g)
    )
      return;
    ha({
      value: j({
        registryId: e.taskId,
        mcpTaskId: e.mcpTaskId,
        serverName: e.serverName,
        toolName: e.toolName,
        status: "failed",
        statusMessage: `Could not reconnect after resume: ${l}`,
      }),
      mode: "task-notification",
      agentId: ze(),
      priority: "next",
      skipAttachments: !0,
      taskId: e.taskId,
    });
    return;
  }
  if (t.get(e.taskId)?.status !== "running") {
    (C(e.taskId, s),
      p.experimental.tasks
        .cancelTask(e.mcpTaskId, { signal: AbortSignal.timeout(Kde) })
        .catch((o) =>
          n(`mcp task ${e.mcpTaskId} cancel after kill: ${O_(o)}`),
        ));
    return;
  }
  ae({
    client: p,
    taskRegistry: t,
    taskState: i,
    pollIntervalMs: e.pollIntervalMs,
    storageV5: s,
    credentials: r,
  });
}
export {
  z as MAX_POLL_INTERVAL_MS,
  q as MIN_POLL_INTERVAL_MS,
  S as boundMcpStatusMessage,
  j as buildMcpTaskNotification,
  Q as mcpContentToNotificationText,
  Re as restoreMcpTasks,
  ae as startMcpTaskWatcher,
};

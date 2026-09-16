// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { tRe, kCt, yUe, GQe } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { FAe } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { BU } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import { zu, pr } from "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { ise, XG } from "./chunk-9estzwf5.js";
import { fg } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { m6 } from "./chunk-mxsfy35q.js";
import "./chunk-ct52ffwb.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import { cLe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
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
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { SD } from "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
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
import "./chunk-5ne99rq3.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
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
import "./chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import { ZG, z4t, uh, o5, Rme } from "./chunk-tyce0p0b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import { $Tn, bTt, WTn } from "../权限系统/chunk-1y2g140m.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import { P3t } from "./chunk-1yq098a7.js";
import { A7 } from "./chunk-ga43tr2w.js";
import "./chunk-znhfst8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-thdf1760.js";
import "./chunk-jpq2fv3g.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-2skajgkt.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-yb7jadvp.js";
import "./chunk-z5v9hvat.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-42rkrq9r.js";
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
import { pK } from "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
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
import "./chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { va } from "../../01-核心基础设施/共享小工具-未细化/chunk-qdhvxsk2.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { randomUUID as H } from "crypto";
var A = 5;
async function ne(t, i) {
  let { prepareApiRequest: u, sessionsApiWire: w } =
      await import("../../01-核心基础设施/共享小工具-未细化/CCR_BYOC_BETA.422dq0ss.js"),
    { getOauthConfig: P } = await import("./getOauthConfig.94gbqg2e.js"),
    k,
    x;
  try {
    ({ accessToken: k, orgUUID: x } = await u(i));
  } catch (c) {
    if ((n(`[bridge:peers] auth prep failed: ${l(c)}`), t)) t.failed = !0;
    return [];
  }
  let f = XG(),
    C = w(f ? "v1alpha2" : "v1", P().BASE_API_URL, k),
    b = {
      ...C.headers,
      ...(!f && { "x-organization-uuid": x }),
      "User-Agent": va(),
    },
    p = await uh();
  if (p) b["X-Trusted-Device-Token"] = p;
  let v = bTt(),
    S = v ? pr(v) : void 0,
    o = [],
    g = new Set(),
    m = null,
    _ = !1,
    y = !1;
  for (let c = 0; c < A; c++) {
    let h = new URLSearchParams();
    if (f) h.set("limit", "100");
    if (m) h.set(f ? "cursor" : "after_id", m);
    let E = h.toString(),
      T = E ? `${C.url}?${E}` : C.url,
      s;
    try {
      s = await at.get(T, {
        headers: b,
        timeout: 15000,
        validateStatus: (e) => e < 500,
      });
    } catch (e) {
      if ((n(`[bridge:peers] list request failed: ${l(e)}`), t)) t.failed = !0;
      return o;
    }
    if (
      s.status === 403 &&
      !y &&
      m6(s.data, fg(s.data)) === "untrusted_device"
    ) {
      y = !0;
      let e = await o5(p);
      if (e) {
        ((b["X-Trusted-Device-Token"] = e), (p = e), c--);
        continue;
      }
    }
    if (s.status !== 200) {
      if ((n(`[bridge:peers] list failed ${s.status}`), t)) t.failed = !0;
      return o;
    }
    if (
      s.data === null ||
      typeof s.data !== "object" ||
      !Array.isArray(s.data.data)
    ) {
      if ((n("[bridge:peers] list body `data` not an array; stopping"), t))
        t.failed = !0;
      return o;
    }
    for (let e of s.data.data)
      try {
        let d = "session_status" in e,
          D = d
            ? e.session_status
            : e.status === "archived"
              ? "archived"
              : e.worker_status === "running" ||
                  e.worker_status === "requires_action"
                ? e.worker_status
                : "idle";
        if (D === "archived") continue;
        let I = d ? e.id : zu(e.id),
          R = pr(I);
        if (S && R === S) {
          $Tn(e.title);
          continue;
        }
        if (g.has(R)) continue;
        (g.add(R),
          o.push({
            id: I,
            title: d ? e.title : e.title || null,
            status: D,
            updated_at: (d ? e.updated_at : e.last_event_at) ?? "",
            ...(GQe(e.environment_kind) && {
              environmentKind: e.environment_kind,
            }),
            ...((e.connection_status === "connected" ||
              e.connection_status === "disconnected") && {
              connected: e.connection_status === "connected",
            }),
            ...(d
              ? { inboundReportUnavailable: !0 }
              : P3t(e.external_metadata)),
          }));
      } catch (d) {
        n(`[bridge:peers] skipping malformed session row: ${l(d)}`);
      }
    let r = f
      ? (s.data.next_cursor ?? null)
      : s.data.has_more
        ? (s.data.last_id ?? null)
        : null;
    if (!r) break;
    if (((m = r), c === A - 1))
      ((_ = !0),
        n(
          `[bridge:peers] page budget exhausted with more sessions remaining (scanned ${A} pages)`,
        ));
  }
  if (
    (n(
      `[bridge:peers] listed ${o.length} peer sessions${_ ? ` \u2014 TRUNCATED at ${A} pages (more sessions exist)` : ""}`,
      _ ? { level: "warn" } : void 0,
    ),
    t)
  )
    t.truncated = _;
  return o;
}
function oe(t) {
  if (!t) return !1;
  if (t.startsWith("auth:")) return !1;
  if (t.startsWith("invalid session ID format")) return !1;
  let i = /^HTTP (\d{3})/.exec(t);
  if (i) {
    let u = Number(i[1]);
    if (u === 401 || u === 403) return !1;
    if (u >= 500) return !1;
  }
  if (/status code 5\d\d/.test(t)) return !1;
  return !0;
}
function ae(t) {
  if (!t) return "other";
  if (t.startsWith("auth:")) return "bridge_auth";
  if (t.startsWith("invalid session ID format")) return "invalid_target";
  let i = /^HTTP (\d)\d\d/.exec(t);
  if (i) return i[1] === "5" ? "bridge_http_5xx" : "bridge_http_4xx";
  if (/status code 5\d\d/.test(t)) return "bridge_http_5xx";
  if (/timeout/i.test(t)) return "timeout";
  return "other";
}
async function de(t, i, u, w, P, k, x) {
  let {
      prepareApiRequest: f,
      getOAuthHeaders: C,
      CCR_BYOC_BETA: b,
    } = await import("../../01-核心基础设施/共享小工具-未细化/CCR_BYOC_BETA.422dq0ss.js"),
    { getOauthConfig: p } = await import("./getOauthConfig.94gbqg2e.js"),
    v,
    S;
  try {
    ({ accessToken: v, orgUUID: S } = await f(x));
  } catch (e) {
    return { ok: !1, error: `auth: ${l(e)}` };
  }
  let o = zu(t);
  if (!/^session_[A-Za-z0-9_-]+$/.test(o))
    return { ok: !1, error: `invalid session ID format: ${t}` };
  let g = bTt() ?? pK(),
    m = g ? tRe(g) : "unknown",
    _ = yUe(m, WTn() ?? u, i, void 0, kCt(P, g ? FAe(m) : void 0), k),
    y = SD(),
    c = {
      ...y,
      type: "user",
      message: { role: "user", content: _ },
      parent_tool_use_id: null,
      session_id: o,
      uuid: H(),
      ...((w?.length ?? 0) > 0 && { file_attachments: w }),
    },
    { url: h, body: E } = cLe(p().BASE_API_URL, o, [c], ise()),
    T = {
      ...C(v),
      "anthropic-beta": b,
      "x-organization-uuid": S,
      "User-Agent": va(),
    },
    s = await uh();
  if (s) T["X-Trusted-Device-Token"] = s;
  let r;
  try {
    r = await at.post(h, E, {
      headers: T,
      timeout: 1e4,
      validateStatus: (e) => e < 500,
    });
  } catch (e) {
    return { ok: !1, error: l(e) };
  }
  if (
    (U(o, r), r.status === 403 && m6(r.data, fg(r.data)) === "untrusted_device")
  ) {
    if (a.CLAUDE_CODE_REMOTE === !0 && !s && !a.CLAUDE_TRUSTED_DEVICE_TOKEN)
      return { ok: !1, error: `auth: ${z4t}` };
    let e = await o5(s);
    if (e) {
      try {
        r = await at.post(h, E, {
          headers: { ...T, "X-Trusted-Device-Token": e },
          timeout: 1e4,
          validateStatus: (d) => d < 500,
        });
      } catch (d) {
        return { ok: !1, error: l(d) };
      }
      U(o, r);
    }
    if (r.status === 403 && m6(r.data, fg(r.data)) === "untrusted_device") {
      if (ZG()) return { ok: !1, error: `auth: ${Rme()}` };
    }
  }
  if (r.status === 403 && m6(r.data, fg(r.data)) === "session_stale_relogin")
    return {
      ok: !1,
      error: `auth: ${A7({ terminal: !0, reason: "session_stale_relogin" })}`,
    };
  if (!B(r.status)) {
    if (r.status === 401 && a.CLAUDE_CODE_REMOTE === !0)
      return { ok: !1, error: `auth: ${O}` };
    return { ok: !1, error: `HTTP ${r.status}` };
  }
  return (
    n(`[bridge:peers] posted to ${o}: ${i.slice(0, 60)}`),
    { ok: !0, msgId: y.msg_id }
  );
}
var O =
  "this cloud session cannot message other sessions yet \u2014 its credential is accepted for its own work but not for delivering to another session, so a reply from here is not possible; say so in your response instead of retrying";
function B(t) {
  return t === 200 || t === 201 || t === 204;
}
function U(t, i) {
  if (B(i.status)) return;
  let u = fg(i.data);
  n(
    `[bridge:peers] post to ${t} rejected: HTTP ${i.status}${u ? ` \u2014 ${BU(u)}` : ""}`,
    { level: "warn" },
  );
}
export {
  ae as classifyBridgeSendError,
  oe as isLikelyStaleBridgeError,
  ne as listBridgePeerSessions,
  de as postInterClaudeMessage,
};

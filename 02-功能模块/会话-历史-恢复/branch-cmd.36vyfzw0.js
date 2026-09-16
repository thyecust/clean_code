// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, he, X1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { ge, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import { b, z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { iu, ft } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { gu, b$ } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import { yh, Phe } from "./chunk-mkmy4cx2.js";
import "../权限系统/chunk-8rrcddth.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import {
  TH,
  il,
  Tp,
  DI,
  YM,
  JV,
  Li,
  fj,
  mu,
  EY,
  QM,
  w9t,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { ll, yl } from "../Teammates团队/chunk-thxapyam.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
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
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
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
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "./chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../Teammates团队/chunk-mrfx53ye.js";
import { hu } from "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
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
import { Ohe } from "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
import { randomUUID as D } from "crypto";
import { once as N } from "events";
import { createReadStream as O, createWriteStream as x } from "fs";
import { mkdir as j, unlink as H } from "fs/promises";
import { createInterface as J } from "readline";
import { finished as V } from "stream/promises";
var X = 4194304,
  q = 1e5;
function G(t) {
  let u = { commandFallback: "" },
    d;
  for (let n of t) if (((d = Ohe(n, u)), d !== void 0)) break;
  return (
    (d ??= u.commandFallback),
    d.replace(/\s+/g, " ").trim().slice(0, 100).trimEnd() ||
      "Branched conversation"
  );
}
async function Y(t, u, d, n) {
  let a = D(),
    p = K(),
    A = YM() || JV(Li(p)),
    s = X1(),
    E = ll(he()),
    l = Tp(a),
    C = il() ?? yl(),
    g = hu(C, n);
  if (g !== void 0)
    return Q({
      sourceV5: g,
      forkKey: Ce.transcript(yh(he()), a),
      forkSessionId: a,
      originalSessionId: p,
      sourceTaintAtEntry: A,
      atisLatchAtEntry: s,
      currentMessages: t,
      customTitle: u,
      extraMessages: d,
      forkSessionPath: l,
    });
  await j(E, { recursive: !0, mode: 448 });
  let F;
  try {
    ((F = O(C, { encoding: "utf8" })), await N(F, "open"));
  } catch (e) {
    if (W(e)) throw Error("No conversation to branch");
    throw (h(e), e);
  }
  let m = x(l, { encoding: "utf8", mode: 384 }),
    w = null;
  m.on("error", (e) => {
    w = ge(e);
  });
  let S = J({ input: F, crlfDelay: 1 / 0 }),
    U = new Set(t.map((e) => e.uuid)),
    v = new Map(),
    I = [],
    k,
    R = async () => {
      (m.destroy(), await H(l).catch(() => {}));
    },
    M = async (e) => {
      if (w) throw (await R(), w);
      if (!m.write(e)) await N(m, "drain").catch(() => {});
    },
    r = A,
    o = () =>
      M(
        b(Phe(a, "fork_inherit")) +
          `
`,
      );
  try {
    if (r) await o();
    for await (let e of S) {
      if (e.length === 0) continue;
      let f;
      try {
        f = z(e);
      } catch {
        continue;
      }
      if (!me(f)) continue;
      let c = f;
      if (
        c.type === "content-replacement" &&
        c.sessionId === p &&
        Array.isArray(c.replacements)
      ) {
        I.push(...c.replacements);
        continue;
      }
      if (
        c.type === "relocated" &&
        c.sessionId === p &&
        typeof c.relocatedCwd === "string" &&
        c.relocatedCwd !== ""
      ) {
        k = c.relocatedCwd;
        continue;
      }
      if (c.type === "history-suppression") {
        if (!r) ((r = !0), await o());
        continue;
      }
      if (!TH(c) || c.isSidechain || !U.has(c.uuid)) continue;
      v.set(c.uuid, c);
    }
  } catch (e) {
    throw (await R(), e);
  } finally {
    (S.close(), F.destroy());
  }
  let y = null,
    T = null,
    P = [];
  try {
    for (let e of t) {
      let f = v.get(e.uuid);
      if (!f) continue;
      let c =
          f.type === "system" && f.subtype === "model_refusal_fallback"
            ? { neutralizedByFork: !0 }
            : void 0,
        L = {
          ...f,
          ...c,
          sessionId: a,
          parentUuid: y,
          isSidechain: !1,
          sessionKind: void 0,
          forkedFrom: { sessionId: p, messageUuid: f.uuid },
        },
        _ = { ...f, ...c, sessionId: a };
      if (
        (P.push(_),
        (T = f),
        await M(
          b(L) +
            `
`,
        ),
        f.type !== "progress")
      )
        y = f.uuid;
    }
  } catch (e) {
    throw (await R(), e);
  }
  if (T === null) throw (await R(), Error("No messages to branch"));
  if (d?.length)
    for (let e of d) {
      let f = {
          ...e,
          cwd: T.cwd,
          userType: T.userType,
          entrypoint: T.entrypoint,
          version: T.version,
          gitBranch: T.gitBranch,
          sessionId: a,
          timestamp: new Date().toISOString(),
        },
        c = { ...f, parentUuid: y, isSidechain: !1 };
      if (
        (P.push(f),
        await M(
          b(c) +
            `
`,
        ),
        e.type !== "progress")
      )
        y = e.uuid;
    }
  if (I.length > 0)
    await M(
      b({ type: "content-replacement", sessionId: a, replacements: I }) +
        `
`,
    );
  if (k)
    await M(
      b({ type: "relocated", sessionId: a, relocatedCwd: k }) +
        `
`,
    );
  if (s !== void 0)
    await M(
      b({ type: "atis-latch", sessionId: a, atis: s }) +
        `
`,
    );
  if ((m.end(), await V(m).catch(() => {}), w)) throw (await R(), w);
  return {
    sessionId: a,
    title: u,
    forkPath: l,
    serializedMessages: P,
    contentReplacementRecords: I,
    sessionHistorySuppressed: r,
  };
}
function B(t) {
  return {
    data:
      b(t) +
      `
`,
  };
}
async function Q(t) {
  let {
      sourceV5: u,
      forkKey: d,
      forkSessionId: n,
      originalSessionId: a,
      currentMessages: p,
      customTitle: A,
      extraMessages: s,
      forkSessionPath: E,
    } = t,
    { backend: l, key: C } = u,
    g = [],
    F = new Set(p.map((r) => r.uuid)),
    m = new Map(),
    w = [],
    S,
    U = t.sourceTaintAtEntry;
  if (U) g.push(B(Phe(n, "fork_inherit")));
  let v;
  for (let r = 0; ; r++) {
    if (r >= q) throw Error("Conversation too long to branch through storage");
    let o = await l.readRecords(C, {
      order: "forward",
      maxBytes: X,
      ...(v !== void 0 && { fromSeq: v }),
    });
    if (!o.ok) {
      if (o.error.code === "NotFound") throw Error("No conversation to branch");
      let y = Error("Conversation unreadable through storage", {
        cause: o.error,
      });
      throw (h(y), y);
    }
    for (let y of o.value.items) {
      let T = Buffer.from(y.data.buffer, y.data.byteOffset, y.data.byteLength)
        .toString("utf8")
        .trimEnd();
      if (T.length === 0) continue;
      let P;
      try {
        P = z(T);
      } catch {
        continue;
      }
      if (!me(P)) continue;
      let e = P;
      if (
        e.type === "content-replacement" &&
        e.sessionId === a &&
        Array.isArray(e.replacements)
      ) {
        w.push(...e.replacements);
        continue;
      }
      if (
        e.type === "relocated" &&
        e.sessionId === a &&
        typeof e.relocatedCwd === "string" &&
        e.relocatedCwd !== ""
      ) {
        S = e.relocatedCwd;
        continue;
      }
      if (e.type === "history-suppression") {
        if (!U) ((U = !0), g.push(B(Phe(n, "fork_inherit"))));
        continue;
      }
      if (!TH(e) || e.isSidechain || !F.has(e.uuid)) continue;
      m.set(e.uuid, e);
    }
    if (((v = o.value.nextSeq), v === void 0)) break;
  }
  let I = null,
    k = null,
    R = [];
  for (let r of p) {
    let o = m.get(r.uuid);
    if (!o) continue;
    let y =
        o.type === "system" && o.subtype === "model_refusal_fallback"
          ? { neutralizedByFork: !0 }
          : void 0,
      T = {
        ...o,
        ...y,
        sessionId: n,
        parentUuid: I,
        isSidechain: !1,
        sessionKind: void 0,
        forkedFrom: { sessionId: a, messageUuid: o.uuid },
      };
    if (
      (R.push({ ...o, ...y, sessionId: n }),
      (k = o),
      g.push(B(T)),
      o.type !== "progress")
    )
      I = o.uuid;
  }
  if (k === null) throw Error("No messages to branch");
  if (s?.length)
    for (let r of s) {
      let o = {
        ...r,
        cwd: k.cwd,
        userType: k.userType,
        entrypoint: k.entrypoint,
        version: k.version,
        gitBranch: k.gitBranch,
        sessionId: n,
        timestamp: new Date().toISOString(),
      };
      if (
        (R.push(o),
        g.push(B({ ...o, parentUuid: I, isSidechain: !1 })),
        r.type !== "progress")
      )
        I = r.uuid;
    }
  if (w.length > 0) {
    let r = { type: "content-replacement", sessionId: n, replacements: w };
    g.push(B(r));
  }
  if (S) {
    let r = { type: "relocated", sessionId: n, relocatedCwd: S };
    g.push(B(r));
  }
  if (t.atisLatchAtEntry !== void 0) {
    let r = { type: "atis-latch", sessionId: n, atis: t.atisLatchAtEntry };
    g.push(B(r));
  }
  let M = await l.append(d, g);
  if (!M.ok)
    throw (
      await l.delete(d).catch(() => {
        return;
      }),
      Error("Branch could not be written through storage", { cause: M.error })
    );
  return {
    sessionId: n,
    title: A,
    forkPath: E,
    serializedMessages: R,
    contentReplacementRecords: w,
    sessionHistorySuppressed: U,
  };
}
async function Z(t, u) {
  let d = `${t} (Branch)`;
  if ((await QM(d, { exact: !0 }, u)).length === 0) return d;
  let a = await QM(`${t} (Branch`, void 0, u),
    p = new Set([1]),
    A = new RegExp(`^${iu(t)} \\(Branch(?: (\\d+))?\\)$`);
  for (let E of a) {
    let l = E.customTitle?.match(A);
    if (l)
      if (l[1]) p.add(parseInt(l[1], 10));
      else p.add(1);
  }
  let s = 2;
  while (p.has(s)) s++;
  return `${t} (Branch ${s})`;
}
async function ee(t, u, d = {}) {
  let n = K(),
    a = mu(n),
    p = YM() || JV(Li(n)),
    A = X1();
  try {
    let {
      sessionId: s,
      title: E,
      forkPath: l,
      serializedMessages: C,
      contentReplacementRecords: g,
      sessionHistorySuppressed: F,
    } = await Y(t.messages, d.customTitle, d.extraMessages, t.storageV5);
    w9t(
      s,
      C.map((M) => M.uuid),
    );
    let m = new Date(),
      w = G(C),
      S = E?.replace(/\s+/g, " ").trim() ?? (await Z(w, t.storageV5)),
      U = E ? "user" : "auto";
    (await DI(s, S, l, U, t.storageV5),
      await EY(s, S, l, U, t.storageV5),
      i("tengu_conversation_forked", {
        message_count: C.length,
        has_custom_title: !!E,
      }));
    let v = {
        date: ft(m.toISOString(), "T"),
        messages: C,
        fullPath: l,
        value: m.getTime(),
        created: m,
        modified: m,
        firstPrompt: w,
        messageCount: C.length,
        isSidechain: !1,
        sessionId: s,
        customTitle: S,
        agentName: S,
        contentReplacements: g,
        sessionHistorySuppressed: F || p ? !0 : void 0,
        atisLatch: A,
        precautionarySuppressionHeld: fj(Li(n)) ? !0 : void 0,
        forkedFromSessionId: n,
      },
      I = E ? ` "${S}"` : "",
      k = a ? ` ("${a}")` : "",
      R = `Branched conversation${I}. You are now in the new branch (session ${s}). Use /resume ${n}${k} to return to the original, or run \`claude -r ${n}\` in a new terminal.`;
    if (t.resume)
      (await t.resume(s, v, "fork"),
        b$(gu(), S, "user", t.storageV5),
        u(R, { display: "system" }));
    else u(`Branched conversation${I}. Resume with: /resume ${s}`);
    return !0;
  } catch (s) {
    let E = s instanceof Error ? s.message : "Unknown error occurred";
    return (u(`Failed to branch conversation: ${E}`), !1);
  }
}
async function ve(t, u, d) {
  return (await ee(u, t, { customTitle: d?.trim() || void 0 }), null);
}
export {
  ee as branchAndResume,
  ve as call,
  Y as createFork,
  G as deriveFirstPrompt,
};

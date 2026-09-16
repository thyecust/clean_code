// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z, kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { yc } from "../权限系统/chunk-ynkf3yy4.js";
import { l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { We, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { tr } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Sc } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
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
import { ri } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import {
  _de,
  CLe,
  yde,
  DLe,
  zTe,
  Kjt,
  VTe,
  Yjt,
  vKe,
  RKe,
  Nht,
  _Kn,
  Jjt,
  Fht,
  EKn,
  AKn,
  CKn,
  Zfn,
  an,
  LLe,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "./chunk-ht8ydg1v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37w8v4sh.js";
import { p3n, mte } from "../目录同步(dir-sync)/chunk-zbxyj64j.js";
import { N7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-rs9aqm75.js";
import { vy } from "../../01-核心基础设施/共享小工具-未细化/chunk-mbq1q667.js";
import { nft, Qce, oln, IFt } from "../../01-核心基础设施/共享小工具-未细化/chunk-vcb9z55e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
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
import { lstat as H, readdir as K } from "fs/promises";
import { dirname as U, join as C, resolve as T } from "path";
var G = 250,
  L = 30000;
function R({
  sessionId: a,
  gitRoot: w,
  boundToThisMachine: d,
  hostConsented: p = !1,
  createFacts: s,
  credentials: S,
  registry: k,
  storageV5: D,
  engine: r,
}) {
  let i = yc(a),
    o = N7(),
    m = {
      sessionId: i,
      gitRoot: w,
      status: o,
      sync:
        r.kind === "git"
          ? N(
              o.publish,
              import("./armGitSession.d117zwxn.js").then(({ openLaptopGitSync: _ }) =>
                _({
                  sessionId: i,
                  gitRoot: w,
                  start: r.start,
                  boundToThisMachine: d,
                  onStatus: o.publish,
                  credentials: S,
                  ...(p && { consent: O }),
                  uploadAtOpen: r.uploadAtOpen,
                  ...(r.endedEarlier !== void 0 && {
                    endedEarlier: r.endedEarlier,
                  }),
                  storageV5: D,
                }),
              ),
              "git",
              r.withholdFirstSendOnOpenFailure,
            )
          : r.kind === "folder"
            ? N(
                o.publish,
                import("../目录同步(dir-sync)/openFolderGitSync.by6ppgfd.js").then(({ openFolderGitSync: _ }) =>
                  _({
                    sessionId: i,
                    folder: w,
                    start: r.start,
                    ...(r.created !== void 0 && { created: r.created }),
                    ...(r.signal !== void 0 && { signal: r.signal }),
                    ...(r.endedEarlier !== void 0 && {
                      endedEarlier: r.endedEarlier,
                    }),
                    boundToThisMachine: d,
                    onStatus: o.publish,
                    credentials: S,
                    ...(p && { consent: O }),
                    storageV5: D,
                  }),
                ),
                "folder",
              )
            : r.kind === "not_armed"
              ? EKn(r.reason, r.line)
              : r.kind === "off"
                ? CKn(r.withholdFirstSend)
                : r.silent === !0
                  ? AKn(r.reason, r.line, r.withholdFirstSend)
                  : Fht(o.publish, r.reason, r.line, r.level),
      ...(s !== void 0 && { createFacts: s }),
    };
  return (k.hold(m, vKe), m);
}
async function O() {
  return (await Jjt()) === "on" ? "given" : "switched_off";
}
function N(a, w, d, p) {
  let s = null,
    S = !1,
    k = !1,
    D = new Set(),
    r = null,
    i = kt(w, L).then(
      (e) => {
        if (e === void 0 && k)
          return (
            w.then(
              (t) => t.shutdown(0),
              () => {},
            ),
            null
          );
        if (e === void 0)
          return (
            (S = !0),
            f("ccr_dir_sync_pull", `${d}_engine_open_timeout`),
            a(
              "File sync could not start for this session: its engine did not open in time",
              "warning",
            ),
            w.then(
              (t) => t.shutdown(0),
              () => {},
            ),
            null
          );
        return ((s = e), y("ccr_dir_sync_pull", { engine: u(d) }), e);
      },
      (e) => (
        (S = !0),
        h(e),
        f("ccr_dir_sync_pull", `${d}_engine_open_failed`),
        a(
          "File sync could not start for this session: its engine failed to open",
          "warning",
        ),
        null
      ),
    );
  i.then((e) => {
    if (k && e !== null) e.shutdown(0);
  });
  let o = (e) => {
      i.then((t) => {
        if (t !== null && !k) e(t);
      });
    },
    m = (e) => kt(i, e).then((t) => t ?? null),
    _ = p3n(
      i.then((e) => (k ? null : (e?.streaming ?? null))),
      Yjt,
    );
  return {
    state: () =>
      s !== null
        ? s.state()
        : S
          ? { state: "off", reason: "internal_error" }
          : k
            ? { state: "stopped", reason: "shut_down" }
            : { state: "seeding" },
    messageSent: (e) => o((t) => t.messageSent(e)),
    beforeSend: async (e) => {
      await (await m(Yjt))?.beforeSend(e);
    },
    seedGate: async (e) => {
      let t = await Promise.race([
        m(L),
        e.released.then(() => null),
        e.withdrawn.then(() => null),
      ]);
      if (await Zfn(e.released, e.withdrawn)) return;
      if (t !== null) return t.seedGate?.(e);
      let E = Date.now();
      if (!k && p !== void 0 && (r === null || E - r < DLe))
        return ((r ??= E), { go: !1, reason: p.reason });
      return;
    },
    onOffline: (e) => {
      let t = null,
        E = !1;
      return (
        o((b) => {
          if (!E) t = b.onOffline?.(e) ?? null;
        }),
        () => {
          ((E = !0), t?.());
        }
      );
    },
    catchUp: async (e, t) =>
      (await (await m(L))?.catchUp?.(e, t)) ?? { kind: "not_running" },
    syncPoint: async (e, t) =>
      (await (await m(L))?.syncPoint?.(e, t)) ?? {
        catchUp: { kind: "not_running" },
        push: { kind: "not_attempted" },
      },
    afterResult: () => o((e) => e.afterResult()),
    laneChanged: (e) => o((t) => t.laneChanged(e)),
    afterConnect: () => o((e) => e.afterConnect()),
    afterDisconnect: () => o((e) => e.afterDisconnect()),
    holdInstalls: async (e) => {
      D.add(e);
      let t = await m(Yjt);
      if (t === null) {
        o((E) => {
          if (D.delete(e)) E.holdInstalls?.(e);
        });
        return;
      }
      if (D.delete(e)) await t.holdInstalls?.(e);
    },
    releaseInstalls: (e) => {
      if (!D.delete(e)) o((t) => t.releaseInstalls?.(e));
    },
    capturePoint: async (e) =>
      s !== null && !k && s.capturePoint !== void 0
        ? s.capturePoint(e)
        : { kind: "not_running" },
    drain: async (e) => {
      let t = Date.now();
      return (
        (await (await m(e))?.drain(Math.max(0, e - (Date.now() - t)))) ?? !1
      );
    },
    shutdown: async (e) => {
      let t = e ?? vKe,
        E = Date.now(),
        b = s !== null;
      k = !0;
      let P = await m(t);
      if (b) await P?.shutdown(Math.max(0, t - (Date.now() - E)));
    },
    streaming: _,
  };
}
async function Fe(
  a,
  { boundToThisMachine: w, credentials: d, host: p, storageV5: s },
) {
  let S = yc(a);
  if (!ri()) return;
  let k = T(he()),
    D = tr(he()),
    r = async (E) => {
      let b = await Qce(E, S, s),
        P = await mte(b.path, S, b.v5);
      return P.kind === "unreadable"
        ? await Z(G).then(() => mte(b.path, S, b.v5))
        : P;
    },
    i = async (E) => VTe(E) && !(await LLe(E)),
    o =
      D !== null && D !== k && (await Kjt(k)) === "container_sync"
        ? await r(k)
        : null,
    m =
      o !== null &&
      ((o.kind === "git" && o.record.start.kind === "folder") ||
        o.kind === "unsupported" ||
        o.kind === "unreadable"),
    _ = m ? k : (D ?? Y(k));
  if (_ === null) return;
  if (!m && (await zTe(_)) !== "container_sync") return;
  let c = m && o !== null ? o : await r(_);
  if (c.kind === "absent") return;
  let e = () => (
    g("ccr_dir_sync_pull", "attach_engine_declined"),
    R({
      sessionId: S,
      gitRoot: _,
      boundToThisMachine: Promise.resolve(!1),
      createFacts: void 0,
      credentials: d,
      engine: {
        kind: "stopped",
        reason: "engine_declined",
        line: _Kn,
        level: "info",
      },
      registry: _de.of(p),
      storageV5: s,
    })
  );
  if (
    D === null || m || (c.kind === "git" && c.record.start.kind === "folder")
      ? !yde()
      : !CLe()
  )
    return e();
  if (c.kind === "git" && c.record.start.kind === "folder")
    return (await i(_))
      ? R({
          sessionId: S,
          gitRoot: _,
          boundToThisMachine:
            c.record.uploadOnly === !0 ? Promise.resolve(!1) : w,
          createFacts: void 0,
          credentials: d,
          engine: {
            kind: "folder",
            start: c.record.start,
            ...(c.record.ended !== void 0 && { endedEarlier: c.record.ended }),
          },
          registry: _de.of(p),
          storageV5: s,
        })
      : void 0;
  if (c.kind === "unsupported")
    return (
      g("ccr_dir_sync_pull", "attach_engine_unsupported"),
      R({
        sessionId: S,
        gitRoot: _,
        boundToThisMachine: Promise.resolve(!1),
        createFacts: void 0,
        credentials: d,
        engine: { kind: "stopped", reason: "engine_unsupported", line: Nht },
        registry: _de.of(p),
        storageV5: s,
      })
    );
  if (D === null || m) {
    if (c.kind === "unreadable")
      g("ccr_dir_sync_pull", "attach_folder_record_unreadable");
    return c.kind === "unreadable"
      ? R({
          sessionId: S,
          gitRoot: _,
          boundToThisMachine: Promise.resolve(!1),
          createFacts: void 0,
          credentials: d,
          engine: { kind: "stopped", reason: "store_unreadable", line: RKe },
          registry: _de.of(p),
          storageV5: s,
        })
      : void 0;
  }
  if (c.kind === "git")
    return R({
      sessionId: S,
      gitRoot: _,
      boundToThisMachine: c.record.uploadOnly === !0 ? Promise.resolve(!1) : w,
      createFacts: void 0,
      credentials: d,
      engine: {
        kind: "git",
        start: c.record.start,
        uploadAtOpen: !1,
        ...(c.record.ended !== void 0 && { endedEarlier: c.record.ended }),
      },
      registry: _de.of(p),
      storageV5: s,
    });
  return (
    g("ccr_dir_sync_pull", "attach_record_unreadable"),
    R({
      sessionId: S,
      gitRoot: _,
      boundToThisMachine: Promise.resolve(!1),
      createFacts: void 0,
      credentials: d,
      engine: { kind: "stopped", reason: "store_unreadable", line: RKe },
      registry: _de.of(p),
      storageV5: s,
    })
  );
}
function Y(a) {
  return VTe(a) ? a : null;
}
var q = 4000,
  v = 16,
  I = { kind: "elsewhere" },
  F = { kind: "nowhere" };
async function j(a, w) {
  return H(a).then(
    (d) => ((w === "file" ? d.isFile() : d.isDirectory()) ? !0 : void 0),
    (d) => {
      let p = A(d);
      return p === "ENOENT" || p === "ENOTDIR" ? !1 : void 0;
    },
  );
}
function x(a) {
  return j(a, "file");
}
async function B(a) {
  let w = await j(U(a), "dir");
  return w === !0 ? x(a) : w;
}
async function Pe(a, w, d = q) {
  if (!ri()) return { kind: "unknown", why: "not_looked" };
  let p = yc(a),
    s = he(),
    S = tr(s) ?? T(s);
  if (M() && w !== void 0) return X(w, S, p, d);
  let k = await nft(S, p, w),
    D = Sc(),
    r = IFt(p);
  try {
    let i = await B(k);
    if (i !== !1) return i ? F : { kind: "unknown", why: "here_unreadable" };
    let o = await K(D, { withFileTypes: !0 }),
      m = await Promise.all(o.map((t) => vy(t, C(D, t.name), "unknown"))),
      _ = o.filter((t, E) => m[E] === "dir"),
      c = _.slice(0, d),
      e = m.some((t) => t === "symlink" || t === "unknown");
    for (let t = 0; t < c.length; t += v) {
      let E = await Promise.all(
        c.slice(t, t + v).map((b) => x(C(D, b.name, r))),
      );
      if (E.includes(!0)) return I;
      e ||= E.includes(void 0);
    }
    return e
      ? { kind: "unknown", why: "probe_failed" }
      : _.length > c.length
        ? { kind: "unknown", why: "listing_capped" }
        : F;
  } catch (i) {
    if (W(i)) return F;
    return (
      n(`[dirSync] looking for this session's base elsewhere failed: ${l(i)}`, {
        level: "warn",
      }),
      { kind: "unknown", why: "listing_failed" }
    );
  }
}
function Le() {
  return `File sync for this session was set up from another directory on this machine, not ${an(he())}: edits here are not uploaded, and Claude's changes are not written here. Attaching from that directory resumes it if sync is still on there.`;
}
async function X(a, w, d, p) {
  try {
    return await z(a, w, d, p);
  } catch (s) {
    return (
      n(`[dirSync] looking for this session's base elsewhere failed: ${l(s)}`, {
        level: "warn",
      }),
      { kind: "unknown", why: "listing_failed" }
    );
  }
}
async function z(a, w, d, p) {
  let s = await Qce(w, d, a);
  if (s.v5 === void 0) {
    let i = await B(s.path);
    if (i !== !1) return i ? F : { kind: "unknown", why: "here_unreadable" };
  } else {
    let i = await a.scopeKind({
      namespace: "transcript",
      projectKey: s.projectKey,
    });
    if (!i.ok || i.value.kind === "link" || i.value.kind === "other")
      return { kind: "unknown", why: "here_unreadable" };
    if (i.value.kind === "directory") {
      let o = await a.statMeta(s.v5.key);
      if (o.ok) return F;
      if (o.error.code !== "NotFound")
        return { kind: "unknown", why: "here_unreadable" };
    }
  }
  let S = [],
    k;
  do {
    let i = await a.listEntries(
      { namespace: "transcript" },
      { cursor: k, skipScopeStats: !0, skipKeyStats: !0 },
    );
    if (!i.ok)
      return (
        n(
          `[dirSync] looking for this session's base elsewhere failed: ${We(i.error)}`,
          { level: "warn" },
        ),
        { kind: "unknown", why: "listing_failed" }
      );
    for (let o of i.value.items)
      if (o.kind === "scope" && o.scope.namespace === "transcript") {
        let m = o.scope.projectKey;
        if (m !== void 0) S.push(m);
      }
    k = i.value.cursor;
  } while (k !== void 0 && S.length < p);
  let D = S.slice(0, p),
    r = !1;
  for (let i = 0; i < D.length; i += v) {
    let o = await Promise.all(
      D.slice(i, i + v).map(async (m) => {
        let _ = oln(m, d);
        if (_ === void 0) return;
        let c = await a.statMeta(_);
        return c.ok ? !0 : c.error.code === "NotFound" ? !1 : void 0;
      }),
    );
    if (o.includes(!0)) return I;
    r ||= o.includes(void 0);
  }
  return r
    ? { kind: "unknown", why: "probe_failed" }
    : k !== void 0 || S.length > D.length
      ? { kind: "unknown", why: "listing_capped" }
      : F;
}
export {
  Fe as attachLaptopDirSyncSession,
  R as createLaptopDirSyncSession,
  Le as dirSyncElsewhereLine,
  Pe as dirSyncElsewhereLookup,
};

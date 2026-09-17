// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 98 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z, kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { toInfraSessionId } from "../权限系统/chunk-ynkf3yy4.js";
import { l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { We, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { findGitRoot } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { getProjectsDir } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { isViolinWoodEnabledCached } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import {
  laptopDirSyncRegistries,
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
import "./chunk-ht8ydg1v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37w8v4sh.js";
import { p3n, mte } from "../目录同步(dir-sync)/chunk-zbxyj64j.js";
import { N7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-rs9aqm75.js";
import { vy } from "../../01-核心基础设施/共享小工具-未细化/chunk-mbq1q667.js";
import { nft, Qce, oln, IFt } from "../../01-核心基础设施/共享小工具-未细化/chunk-vcb9z55e.js";
import { lstat, readdir } from "fs/promises";
import { dirname, join as C, resolve } from "path";
var G = 250,
  L = 30000;
function createLaptopDirSyncSession({
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
  let i = toInfraSessionId(a),
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
            logFeatureBad("ccr_dir_sync_pull", `${d}_engine_open_timeout`),
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
        return ((s = e), logFeatureOk("ccr_dir_sync_pull", { engine: fromEnum(d) }), e);
      },
      (e) => (
        (S = !0),
        logError(e),
        logFeatureBad("ccr_dir_sync_pull", `${d}_engine_open_failed`),
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
async function attachLaptopDirSyncSession(
  a,
  { boundToThisMachine: w, credentials: d, host: p, storageV5: s },
) {
  let S = toInfraSessionId(a);
  if (!isViolinWoodEnabledCached()) return;
  let k = resolve(he()),
    D = findGitRoot(he()),
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
    logFeatureSad("ccr_dir_sync_pull", "attach_engine_declined"),
    createLaptopDirSyncSession({
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
      registry: laptopDirSyncRegistries.of(p),
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
      ? createLaptopDirSyncSession({
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
          registry: laptopDirSyncRegistries.of(p),
          storageV5: s,
        })
      : void 0;
  if (c.kind === "unsupported")
    return (
      logFeatureSad("ccr_dir_sync_pull", "attach_engine_unsupported"),
      createLaptopDirSyncSession({
        sessionId: S,
        gitRoot: _,
        boundToThisMachine: Promise.resolve(!1),
        createFacts: void 0,
        credentials: d,
        engine: { kind: "stopped", reason: "engine_unsupported", line: Nht },
        registry: laptopDirSyncRegistries.of(p),
        storageV5: s,
      })
    );
  if (D === null || m) {
    if (c.kind === "unreadable")
      logFeatureSad("ccr_dir_sync_pull", "attach_folder_record_unreadable");
    return c.kind === "unreadable"
      ? createLaptopDirSyncSession({
          sessionId: S,
          gitRoot: _,
          boundToThisMachine: Promise.resolve(!1),
          createFacts: void 0,
          credentials: d,
          engine: { kind: "stopped", reason: "store_unreadable", line: RKe },
          registry: laptopDirSyncRegistries.of(p),
          storageV5: s,
        })
      : void 0;
  }
  if (c.kind === "git")
    return createLaptopDirSyncSession({
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
      registry: laptopDirSyncRegistries.of(p),
      storageV5: s,
    });
  return (
    logFeatureSad("ccr_dir_sync_pull", "attach_record_unreadable"),
    createLaptopDirSyncSession({
      sessionId: S,
      gitRoot: _,
      boundToThisMachine: Promise.resolve(!1),
      createFacts: void 0,
      credentials: d,
      engine: { kind: "stopped", reason: "store_unreadable", line: RKe },
      registry: laptopDirSyncRegistries.of(p),
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
  return lstat(a).then(
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
  let w = await j(dirname(a), "dir");
  return w === !0 ? x(a) : w;
}
async function dirSyncElsewhereLookup(a, w, d = q) {
  if (!isViolinWoodEnabledCached()) return { kind: "unknown", why: "not_looked" };
  let p = toInfraSessionId(a),
    s = he(),
    S = findGitRoot(s) ?? resolve(s);
  if (M() && w !== void 0) return X(w, S, p, d);
  let k = await nft(S, p, w),
    D = getProjectsDir(),
    r = IFt(p);
  try {
    let i = await B(k);
    if (i !== !1) return i ? F : { kind: "unknown", why: "here_unreadable" };
    let o = await readdir(D, { withFileTypes: !0 }),
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
function dirSyncElsewhereLine() {
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
  attachLaptopDirSyncSession,
  createLaptopDirSyncSession,
  dirSyncElsewhereLine,
  dirSyncElsewhereLookup,
};

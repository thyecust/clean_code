// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xn, Si, K, sc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ARTIFACT_SLUG_RE } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { isActingAsBgJob, getBgJobDir } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { tu } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { ownProcStartMemo, ownProcStartAsync, procIdentityFields } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { ownPidSpace } from "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import {
  getMaterializedSessionFile,
  getTranscriptPathForSession,
  getTranscriptWriteFailureSeq,
  registerTranscriptExitReStamp,
  registerTranscriptExitDrain,
  registerForeignTranscriptExitReStamp,
  currentSessionFileIsFor,
  onSessionFileMaterialized,
  flushSessionStorage,
  appendEntryToCurrentTranscriptNow,
  sealTornTranscriptTail,
  appendEntryToFileAsync,
  recordArtifactCommentMonitor,
  takeResumedArtifactCommentMonitor,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getSessionTranscriptPath } from "../Teammates团队/transcript-paths.js";
import { ne, RTn } from "./chunk-rr78st95.js";
import { s, T, se, v, c, fe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { basename } from "path";
var ot = { published: "published", comment: "comment" },
  z = 64,
  W = 16,
  it = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
  st = "",
  at = createLazyValue(() => {
    let e = c({ v: k(1), rows: fe(s(), se()) }),
      t = c({ v: T().gt(1) }),
      n = c({ stopped: fe(s(), se()) }),
      o = X(ot),
      r = s().refine((p) => Xn(p) !== null),
      d = c({
        orphans: v(se()).transform((p) =>
          p.slice(0, W).flatMap((f) => {
            let l = r.safeParse(f);
            return l.success ? [l.data] : [];
          }),
        ),
      }),
      i = c({
        trigger_id: r,
        since: s().regex(it),
        events: v(s())
          .max(16)
          .transform((p) =>
            dedupe(p).flatMap((f) => {
              let l = o.safeParse(f);
              return l.success ? [l.data] : [];
            }),
          )
          .refine((p) => p.length > 0),
        unreleased: v(se())
          .catch([])
          .transform((p) =>
            p.slice(0, W).flatMap((f) => {
              let l = r.safeParse(f);
              return l.success ? [l.data] : [];
            }),
          ),
      }),
      u = c({ at_ms: T().refine(Number.isFinite) });
    return {
      rowsEnvelope: e,
      newerEnvelope: t,
      stopsEnvelope: n,
      orphansEnvelope: d,
      row: i,
      stop: u,
    };
  });
function e9n(e) {
  ne().durable.registrySink = e;
}
function t9n() {
  ne().durable.registryPublished = st;
}
function I7() {
  if (!a.CLAUDE_CODE_REMOTE) return;
  let e = ne(),
    { durable: t } = e;
  if (t.registrySink === null) return;
  let n = {},
    o = [],
    r = new Set();
  for (let l of t.pendingRestoredRows.values()) {
    let h = t.rows.get(l.slug);
    if (h === void 0 && !t.unwatchedSlugs.has(l.slug)) {
      o.push(l);
      continue;
    }
    for (let S of [l.triggerId, ...(l.unreleased ?? [])])
      if (S !== h?.triggerId) r.add(S);
  }
  for (let l of [...t.rows.values(), ...o].slice(0, z))
    n[l.slug] = {
      trigger_id: l.triggerId,
      since: l.since,
      events: [...l.events],
      ...(l.unreleased !== void 0 &&
        l.unreleased.length > 0 && { unreleased: [...l.unreleased] }),
    };
  let d = {},
    i = [...e.commentMonitorIntent.bySlug.entries()]
      .filter(([, l]) => l.state === "stopped")
      .sort(([, l], [, h]) => h.writtenAtMs - l.writtenAtMs)
      .slice(0, z);
  for (let [l, h] of i) d[l] = { at_ms: h.writtenAtMs };
  let u = dedupe([...t.orphanTriggers, ...r]).slice(0, W),
    p =
      t.rows.size + o.length === 0 && i.length === 0 && u.length === 0
        ? null
        : { v: 1, rows: n, stopped: d, ...(u.length > 0 && { orphans: u }) },
    f = b(p);
  if (f === t.registryPublished) return;
  ((t.registryPublished = f), t.registrySink({ artifact_durable_watches: p }));
}
function n9n(e) {
  if (e === void 0 || e === null) return null;
  let t = at(),
    n = 0,
    o = [],
    r = t.rowsEnvelope.safeParse(e);
  if (r.success)
    for (let [f, l] of j(r.data.rows)) {
      let h = t.row.safeParse(l);
      if (!ARTIFACT_SLUG_RE.test(f) || !h.success) {
        n++;
        continue;
      }
      o.push({
        slug: f,
        triggerId: h.data.trigger_id,
        since: h.data.since,
        events: h.data.events,
        ...(h.data.unreleased.length > 0 && { unreleased: h.data.unreleased }),
      });
    }
  let d = new Map(),
    i = t.stopsEnvelope.safeParse(e);
  if (i.success)
    for (let [f, l] of j(i.data.stopped)) {
      if (!ARTIFACT_SLUG_RE.test(f)) {
        n++;
        continue;
      }
      let h = t.stop.safeParse(l);
      if ((d.set(f, h.success ? h.data.at_ms : Date.now()), !h.success)) n++;
    }
  if (!r.success || !i.success)
    logFeatureSad(
      "artifact_durable_subscribe",
      i.success && t.newerEnvelope.safeParse(e).success
        ? "registry_newer_version"
        : "registry_invalid",
    );
  else if (n > 0) logFeatureSad("artifact_durable_subscribe", "registry_entry_invalid");
  let u = t.orphansEnvelope.safeParse(e),
    p = u.success ? u.data.orphans : [];
  return { rows: o, stopped: d, orphans: p };
}
function j(e) {
  return Object.keys(e)
    .slice(0, z)
    .map((n) => [n, e[n]]);
}
var R = "\x00unwritten",
  q = 256,
  G = 32,
  F = 64,
  dt = createLazyValue(() => {
    let e = T().refine(Number.isFinite),
      t = c({
        state: X(["armed", "stopped"]),
        writtenAtMs: e,
        title: s().min(1).max(q).optional(),
        holder: s()
          .optional()
          .transform((o) => (o === void 0 ? void 0 : "bg")),
        holderPid: T()
          .int()
          .positive()
          .optional()
          .catch(void 0),
        holderProcStart: s()
          .min(1)
          .max(64)
          .optional()
          .catch(void 0),
        holderProcStartFt: s()
          .min(1)
          .max(64)
          .optional()
          .catch(void 0),
        holderJob: s()
          .regex(/^[0-9a-f]{8}$/)
          .optional()
          .catch(void 0),
        holderPidSpace: s()
          .min(1)
          .max(160)
          .optional()
          .catch(void 0),
      }),
      n = c({
        type: k("artifact-comment-monitor"),
        v: k(1),
        sessionId: s(),
        artifacts: fe(s(), se()),
        crossLineMerged: k(!0)
          .optional()
          .catch(void 0),
        tailTorn: k(!0)
          .optional()
          .catch(void 0),
      });
    return { record: t, envelope: n };
  });
function H(e) {
  if (
    e.holderPid === void 0 ||
    e.holderJob === void 0 ||
    e.holderPidSpace === void 0 ||
    (e.holderProcStart === void 0 && e.holderProcStartFt === void 0)
  )
    return {};
  return {
    holderPid: e.holderPid,
    holderJob: e.holderJob,
    ...(e.holderProcStart !== void 0 && { holderProcStart: e.holderProcStart }),
    ...(e.holderProcStartFt !== void 0 && {
      holderProcStartFt: e.holderProcStartFt,
    }),
    holderPidSpace: e.holderPidSpace,
  };
}
function Z() {
  let e = ownProcStartMemo.token;
  if (e === void 0) return (ownProcStartAsync(), {});
  let t = getBgJobDir();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(basename(t))) return {};
  let { procStart: n, procStartFt: o } = procIdentityFields(e);
  return H({
    holderPid: process.pid,
    holderJob: basename(t),
    holderProcStart: n,
    holderProcStartFt: o,
    holderPidSpace: ownPidSpace().slice(0, 160),
  });
}
function ian() {
  return ownProcStartAsync();
}
function mpt(e, t) {
  let n = dt(),
    o = n.envelope.safeParse(e);
  if (!o.success)
    return (
      logFeatureSad("artifact_live_subscribe", "comment_monitor_intent_invalid"),
      null
    );
  if (o.data.sessionId !== K())
    return (
      logFeatureSad("artifact_live_subscribe", "comment_monitor_intent_foreign"),
      null
    );
  if (o.data.crossLineMerged === !0) t?.onLossy?.();
  let r = o.data.tailTorn === !0;
  if (r) t?.onLossy?.();
  let d = new Map(),
    i = 0,
    u = 0,
    p = 0;
  for (let [f, l] of Object.entries(o.data.artifacts)) {
    if (u++ >= 2 * F) {
      t?.onLossy?.();
      break;
    }
    let h = n.record.safeParse(l);
    if (!ARTIFACT_SLUG_RE.test(f)) {
      (i++, t?.onLossy?.());
      continue;
    }
    if (!h.success) {
      if (
        (i++,
        t?.onLossy?.(),
        typeof l === "object" && l !== null && l.state === "stopped")
      )
        d.set(f, { state: "stopped", writtenAtMs: Date.now() });
      continue;
    }
    if (r && h.data.state === "armed" && h.data.holder === void 0) {
      (d.set(f, {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...(h.data.title !== void 0 && { title: h.data.title }),
      }),
        t?.onTornStop?.(f));
      continue;
    }
    if (h.data.state === "armed" && p++ >= F) {
      t?.onLossy?.();
      continue;
    }
    let { state: S, writtenAtMs: w, title: M, holder: y } = h.data;
    d.set(f, {
      state: S,
      writtenAtMs: w,
      ...(M !== void 0 && { title: M }),
      ...(y !== void 0 && { holder: y, ...(r ? {} : H(h.data)) }),
    });
  }
  if (i > 0)
    logFeatureSad("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}
function sze(e) {
  let t = C(e.storageV5),
    n = new Map([...(t.pendingRestore ?? []), ...t.bySlug]);
  t.pendingRestore = null;
  let { excludeSlug: o } = e;
  if (o !== void 0) n.delete(o);
  return (A(), n);
}
function gpt() {
  return ne().commentMonitorIntent.tornStops;
}
function r9n() {
  return ne().commentMonitorIntent.storageV5;
}
function H9(e) {
  C(e?.storageV5);
}
function o9n(e, t) {
  if (e === void 0 && !RTn()) return;
  let n = ne().commentMonitorIntent;
  ((n.earlySeed = e), (n.adoptPendingFor = K()), C(t?.storageV5));
}
function hpt(e, t) {
  let n = C(t?.storageV5);
  if (ne().durable.stopLatches.isStopped(e)) return;
  let o = t?.title,
    r = o !== void 0 && o.length >= 1 && o.length <= q,
    d = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e);
  let i = Date.now(),
    u = isActingAsBgJob() ? { holder: "bg", ...Z() } : void 0;
  if (
    (n.bySlug.set(e, {
      state: "armed",
      writtenAtMs: i,
      ...(r ? { title: o } : d !== void 0 && { title: d }),
      ...u,
    }),
    tt(n, e),
    A(),
    u !== void 0 && u.holderPid === void 0)
  )
    ct(e, i);
}
function ct(e, t) {
  ownProcStartAsync()
    .then(() => {
      if (!RTn() || !isActingAsBgJob()) return;
      let n = ne().commentMonitorIntent,
        o = n.bySlug.get(e);
      if (
        n.sid !== K() ||
        o?.state !== "armed" ||
        o.holder !== "bg" ||
        o.holderPid !== void 0 ||
        o.writtenAtMs !== t
      )
        return;
      let r = Z();
      if (r.holderPid === void 0) return;
      (n.bySlug.set(e, { ...o, ...r }), A());
    })
    .catch(() => {
      return;
    });
}
function Ibe(e, t) {
  let n = C(t?.storageV5),
    o = n.bySlug.get(e);
  (n.bySlug.set(e, {
    state: "stopped",
    writtenAtMs: Date.now(),
    ...(o?.title !== void 0 && { title: o.title }),
  }),
    A({ durableNow: !0 }));
  for (let [r, d] of n.parked) {
    let i = d.line[e];
    if (i?.state === "armed")
      ((d.line[e] = {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...(i.title !== void 0 && { title: i.title }),
      }),
        P(r, d.path, d.line, { durableNow: !0 }));
  }
}
function s9n(e, t) {
  return C(t?.storageV5).bySlug.get(e)?.state;
}
function ize(e, t) {
  let n = C(t?.storageV5),
    o = !1,
    r = new Set(typeof e === "string" ? [e] : e),
    d = Date.now();
  for (let i of r) {
    if (
      ((o = n.bySlug.delete(i) || o),
      n.forgottenAt.delete(i),
      n.forgottenAt.size >= ft)
    ) {
      let u = n.forgottenAt.keys().next().value;
      if (u !== void 0) n.forgottenAt.delete(u);
    }
    n.forgottenAt.set(i, d);
  }
  if (o) A({ durableNow: !0 });
  for (let [i, u] of n.parked) {
    let p = !1;
    for (let f of r)
      if (u.traveling?.has(f) && u.line[f]?.state === "armed")
        (delete u.line[f], u.traveling.delete(f), (p = !0));
    if (p) {
      if (
        (P(i, u.path, u.line, { durableNow: !0 }),
        !Object.values(u.line).some((f) => f.state === "armed"))
      )
        n.parked.delete(i);
    }
  }
}
function _pt(e, t) {
  let n = C(t?.storageV5),
    { stopLatches: o } = ne().durable;
  for (let [r, d] of e) {
    if (o.wasClearedByRewatch(r)) continue;
    let i = n.bySlug.get(r);
    if (i === void 0 || i.state === "armed" || i.writtenAtMs <= d)
      n.bySlug.set(r, {
        state: "stopped",
        writtenAtMs: d,
        ...(i?.title !== void 0 && { title: i.title }),
      });
    o.reaffirmStop(r);
  }
  A();
}
function i9n(e) {
  let t = C(e?.storageV5),
    { yieldedSlugs: n } = ne().wakes,
    o = Date.now(),
    r = !1;
  for (let [d, i] of t.bySlug)
    if (i.state === "armed" && !n.has(d))
      (t.bySlug.set(d, {
        state: "stopped",
        writtenAtMs: o,
        ...(i.title !== void 0 && { title: i.title }),
      }),
        (r = !0));
  if (r) A({ durableNow: !0 });
  for (let [d, i] of t.parked) {
    let u = !1;
    for (let [p, f] of Object.entries(i.line))
      if (f.state === "armed")
        ((i.line[p] = {
          state: "stopped",
          writtenAtMs: o,
          ...(f.title !== void 0 && { title: f.title }),
        }),
          (u = !0));
    if (u) P(d, i.path, i.line, { durableNow: !0 });
  }
}
function lt(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "fork":
    case "remote_attach":
      return !0;
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return !1;
  }
}
function ate(e) {
  let { live: t } = ne(),
    n = t.supervisors.get(e);
  return (
    (n !== void 0 && !n.stopped && n.autoReactWiring !== void 0) ||
    t.inFlightWiredIntent.has(e)
  );
}
function ut() {
  let e = ne().commentMonitorIntent,
    t = e.sid;
  if (t === null || t === K()) {
    e.leftWith = null;
    return;
  }
  let n = new Set();
  for (let [o, r] of e.bySlug) if (r.state === "armed" && ate(o)) n.add(o);
  e.leftWith = {
    sid: t,
    traveling: n,
    unwritten: !e.onFile && !currentSessionFileIsFor(t) && e.adoptPendingFor !== t,
    inWindow: e.adoptPendingFor === t,
  };
}
function E() {
  let e = ne().commentMonitorIntent;
  if (!currentSessionFileIsFor(K())) return;
  for (let [t, n] of e.parked) {
    if (n.traveling === void 0 || t === K()) continue;
    let o = !1;
    for (let r of n.traveling)
      if (n.line[r]?.state === "armed") (delete n.line[r], (o = !0));
    if (((n.traveling = void 0), o)) P(t, n.path, n.line);
    if (!Object.values(n.line).some((r) => r.state === "armed"))
      e.parked.delete(t);
  }
}
function D(e, t) {
  if (currentSessionFileIsFor(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return !1;
  }
  return e.adoptPendingFor === t || getMaterializedSessionFile() !== null;
}
function B(e, t, n, o, r) {
  if (t === null) return;
  let d = ne().commentMonitorIntent,
    i = { path: t, line: Q(e, n) };
  (d.pendingLines.set(e, i),
    registerForeignTranscriptExitReStamp(O),
    (d.writeChain = d.writeChain.then(async () => {
      if ((await flushSessionStorage().catch(() => {}), d.pendingLines.get(e) !== i)) return;
      if (d.exitStamped) return;
      if ((d.pendingLines.delete(e), !o && getTranscriptWriteFailureSeq() === r)) return;
      if (e === d.sid) {
        ((d.lastWritten = R), A());
        return;
      }
      P(e, t, n);
    })),
    (d.writeChain = d.writeChain.catch(() => {})));
}
var ft = 1024;
function Q(e, t) {
  let n = ne().commentMonitorIntent,
    o = n.parked.get(e);
  if (o?.unwritten === !0) {
    let { traveling: r } = o;
    return r === void 0 ? t : tu(t, (d, i) => d.state === "armed" && r.has(i));
  }
  if (o?.leftInWindow === !0)
    return N(n, {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: e,
      artifacts: t,
    }).artifacts;
  return t;
}
function P(e, t, n, o) {
  if (t === null) return;
  let r = ne().commentMonitorIntent,
    { storageV5: d } = r,
    i = Q(e, { ...n }),
    u = { type: "artifact-comment-monitor", v: 1, sessionId: e, artifacts: i };
  r.owedLines.delete(e);
  let p = { path: t, line: i };
  if ((r.pendingLines.set(e, p), registerForeignTranscriptExitReStamp(O), o?.durableNow === !0)) appendEntryToCurrentTranscriptNow(u, t, I(u));
  r.writeChain = r.writeChain
    .then(async () => {
      if ((await flushSessionStorage().catch(() => {}), r.exitStamped)) return;
      if (e === r.sid) {
        if (r.pendingLines.get(e) === p) r.pendingLines.delete(e);
        ((r.lastWritten = R), A());
        return;
      }
      if (
        (await appendEntryToFileAsync(t, u, d, { onlyIfExists: !0, tornTailEntry: I(u) }),
        r.pendingLines.get(e) === p)
      )
        r.pendingLines.delete(e);
    })
    .catch(() => {
      if (r.pendingLines.get(e) !== p) {
        logFeatureSad("artifact_live_subscribe", "comment_monitor_intent_write_failed");
        return;
      }
      if ((r.pendingLines.delete(e), r.owedLines.size >= 2 * G)) {
        let f = r.owedLines.keys().next().value;
        if (f !== void 0) r.owedLines.delete(f);
      }
      (r.owedLines.set(e, { path: t, line: i }),
        logFeatureSad("artifact_live_subscribe", "comment_monitor_intent_write_failed"));
    });
}
function a9n(e, t) {
  tt(C(t?.storageV5), e);
}
function tt(e, t) {
  let n = !1;
  for (let [o, r] of e.parked) {
    if (o === K() || r.line[t]?.state !== "armed") continue;
    ((r.traveling ??= new Set()).add(t), (n = !0));
  }
  if (n) E();
}
function J(e) {
  if (e.owedLines.size === 0) return;
  let t = [...e.owedLines.entries()];
  e.owedLines.clear();
  let n = !1;
  for (let [o, { path: r, line: d }] of t) {
    if (o === e.sid) {
      ((e.lastWritten = R), (n = !0));
      continue;
    }
    if (e.pendingLines.has(o)) continue;
    let i = e.parked.get(o);
    P(o, i?.path ?? r, i?.line ?? d);
  }
  if (n) A();
}
function C(e) {
  let t = ne().commentMonitorIntent;
  if (e !== void 0) t.storageV5 = e;
  let n = K(),
    o = !1,
    r = !1;
  if (t.sid !== n) {
    let i = t.leftWith !== null && t.leftWith.sid === t.sid ? t.leftWith : null,
      u = (S) => (i !== null ? i.traveling.has(S) : ate(S));
    t.leftWith = null;
    let p = _(t),
      f = new Set(),
      l = 0;
    for (let [S, w] of t.bySlug) {
      if (w.state !== "armed") continue;
      if (u(S)) f.add(S);
      else (t.bySlug.delete(S), l++);
    }
    let { stopLatches: h } = ne().durable;
    for (let [S, w] of Object.entries(t.parked.get(n)?.line ?? {})) {
      let M = t.forgottenAt.get(S);
      if (
        w.state === "armed" &&
        M !== void 0 &&
        w.writtenAtMs <= M &&
        !ate(S)
      ) {
        r = !0;
        continue;
      }
      let y = x(t.bySlug.get(S), w);
      if (y.state === "armed" && h.isStopped(S))
        y = {
          state: "stopped",
          writtenAtMs: Date.now(),
          ...(y.title !== void 0 && { title: y.title }),
        };
      if ((t.bySlug.set(S, y), y.state === "stopped")) h.confirmStop(S);
    }
    t.parked.delete(n);
    for (let S of [t.owedLines.get(n), t.pendingLines.get(n)])
      for (let [w, M] of Object.entries(S?.line ?? {})) {
        if (M.state !== "stopped") continue;
        let y = x(t.bySlug.get(w), M);
        if ((t.bySlug.set(w, y), y.state === "stopped")) h.confirmStop(w);
      }
    if (t.sid !== null && (l > 0 || f.size > 0)) {
      t.parked.set(t.sid, {
        path: t.transcriptPath,
        line: p,
        ...(f.size > 0 && { traveling: f }),
        ...(i?.unwritten === !0 && { unwritten: !0 }),
        ...(i?.inWindow === !0 && { leftInWindow: !0 }),
      });
      while (t.parked.size > G) {
        let [S, w] = t.parked.entries().next().value;
        t.parked.delete(S);
        let M = Date.now();
        P(
          S,
          w.path,
          Object.fromEntries(
            Object.entries(w.line).flatMap(([y, L]) =>
              L.state !== "armed"
                ? [[y, L]]
                : w.traveling?.has(y)
                  ? []
                  : [
                      [
                        y,
                        {
                          state: "stopped",
                          writtenAtMs: M,
                          ...(L.title !== void 0 && { title: L.title }),
                        },
                      ],
                    ],
            ),
          ),
        );
      }
    }
    if (t.sid !== null && t.wroteCurrentLine)
      B(t.sid, t.transcriptPath, p, t.lastWritten === R, t.failureSeqAtWrite);
    else if (t.sid !== null && i?.inWindow === !0 && nt(t, p))
      B(t.sid, t.transcriptPath, p, !0, t.failureSeqAtWrite);
    if (
      (E(),
      (o = [...t.bySlug.values()].some((S) => S.state === "armed")),
      (t.sid = n),
      t.adoptPendingFor !== n)
    )
      t.adoptPendingFor = null;
    ((t.lastWritten = r ? R : null),
      (t.wroteCurrentLine = !1),
      (t.pendingRestore = null),
      (t.transcriptPath = null),
      t.tornStops.clear(),
      (t.onFile = !1));
  }
  if (!t.onFile && currentSessionFileIsFor(n)) t.onFile = !0;
  if (
    ((t.transcriptPath = D(t, n) ? getSessionTranscriptPath() : getTranscriptPathForSession(n)),
    t.unsubscribeMaterialized === void 0)
  )
    t.unsubscribeMaterialized = onSessionFileMaterialized(() => {
      if (t.sid !== null && currentSessionFileIsFor(t.sid)) t.onFile = !0;
      E();
    });
  if (t.unsubscribeSwitch === void 0)
    ((t.unregisterExitDrain = registerTranscriptExitDrain(() => (J(t), t.writeChain))),
      registerForeignTranscriptExitReStamp(O),
      (t.unsubscribeSwitch = sc((i, u) => {
        if (u === "cd" && t.sid === i) t.transcriptPath = getTranscriptPathForSession(i);
        if (lt(u)) ut();
        if (u === "clear") queueMicrotask(A);
      })));
  let d = t.earlySeed ?? takeResumedArtifactCommentMonitor();
  if (((t.earlySeed = void 0), d !== void 0)) {
    let i = !1,
      u = mpt(d, {
        onLossy: () => {
          i = !0;
        },
        onTornStop: (p) => {
          t.tornStops.add(p);
        },
      });
    if (u !== null) {
      if (d.tailTorn === !0) sealTornTranscriptTail(t.transcriptPath ?? void 0);
      let { stopLatches: p } = ne().durable,
        f = new Map();
      for (let [l, h] of u) {
        let S = t.forgottenAt.get(l);
        if (
          h.state === "armed" &&
          S !== void 0 &&
          h.writtenAtMs <= S &&
          !ate(l)
        ) {
          i = !0;
          continue;
        }
        let w = t.bySlug.get(l);
        if (t.tornStops.has(l) && w?.state === "armed" && ate(l)) {
          (t.tornStops.delete(l), f.set(l, w), (i = !0));
          continue;
        }
        let M = x(w, h);
        if ((t.bySlug.set(l, M), f.set(l, M), M.state === "stopped"))
          p.confirmStop(l);
      }
      if (((t.pendingRestore = f), !i && t.lastWritten === null))
        ((t.lastWritten = V(Object.fromEntries(u))),
          (t.failureSeqAtWrite = getTranscriptWriteFailureSeq()));
      else if (i && t.lastWritten === null) t.lastWritten = R;
      I7();
    }
  }
  if ((J(t), o || r)) A();
  return t;
}
function x(e, t) {
  if (e === void 0) return t;
  if (
    t.state === "stopped" &&
    e.state !== "stopped" &&
    t.writtenAtMs >= e.writtenAtMs
  )
    return t;
  if (
    t.state === "armed" &&
    e.state === "armed" &&
    t.writtenAtMs > e.writtenAtMs
  )
    return t;
  return e;
}
function _(e) {
  return Object.fromEntries(
    [...e.bySlug.entries()]
      .sort(
        ([, t], [, n]) =>
          Number(n.state === "stopped") - Number(t.state === "stopped") ||
          n.writtenAtMs - t.writtenAtMs,
      )
      .slice(0, F),
  );
}
function et() {
  let { commentMonitorIntent: e, wakes: t } = ne();
  if (
    !e.wroteCurrentLine ||
    e.sid !== K() ||
    [...e.bySlug.keys()].some((n) => t.yieldedSlugs.has(n))
  )
    return;
  return {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: K(),
    artifacts: _(e),
  };
}
function O() {
  let e = ne().commentMonitorIntent,
    t = K(),
    n,
    o = () => nt(e, _(e)),
    r = !e.exitStamped && e.sid === t;
  if (r && currentSessionFileIsFor(t)) {
    if (
      e.wroteCurrentLine ||
      o() ||
      e.owedLines.has(t) ||
      e.pendingLines.has(t)
    )
      (E(), (e.wroteCurrentLine = !0), registerTranscriptExitReStamp(et));
  } else if (r && D(e, t) && e.transcriptPath !== null && o()) {
    let i = N(e, {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: t,
      artifacts: _(e),
    });
    n = { path: e.transcriptPath, entry: i, tornTailEntry: I(i) };
    for (let u of [e.owedLines, e.pendingLines])
      if (u.get(t)?.path === n.path) u.delete(t);
  }
  e.exitStamped = !0;
  let d = [...e.owedLines, ...e.pendingLines].map(
    ([i, { path: u, line: p }]) => {
      let f = {
        type: "artifact-comment-monitor",
        v: 1,
        sessionId: i,
        artifacts: p,
      };
      return { path: u, entry: f, tornTailEntry: I(f) };
    },
  );
  return n === void 0 ? d : [...d, n];
}
function I(e) {
  let t = Date.now();
  return {
    ...e,
    artifacts: Si(e.artifacts, (n) =>
      n.state === "armed" && n.holder === void 0
        ? {
            state: "stopped",
            writtenAtMs: t,
            ...(n.title !== void 0 && { title: n.title }),
          }
        : n,
    ),
  };
}
function N(e, t) {
  let n = K(),
    o = new Set();
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let i of d.traveling ?? []) if (d.line[i]?.state === "armed") o.add(i);
  }
  if (o.size === 0) return t;
  return {
    ...t,
    artifacts: tu(t.artifacts, (r, d) => r.state === "armed" && o.has(d)),
  };
}
function nt(e, t) {
  return (
    e.lastWritten !== V(t) &&
    !(e.lastWritten === null && Object.keys(t).length === 0)
  );
}
function V(e) {
  return b(
    Object.entries(e)
      .map(([t, n]) => [
        t,
        n.state,
        n.writtenAtMs,
        n.title ?? null,
        n.holder ?? null,
        n.holderPid ?? null,
        n.holderProcStart ?? n.holderProcStartFt ?? null,
        n.holderJob ?? null,
        n.holderPidSpace ?? null,
      ])
      .sort(),
  );
}
function A(e) {
  let t = C();
  (E(), I7());
  let n = _(t),
    o = V(n);
  if (o === t.lastWritten && getTranscriptWriteFailureSeq() === t.failureSeqAtWrite) return;
  if (
    ((t.failureSeqAtWrite = getTranscriptWriteFailureSeq()),
    t.lastWritten === null && t.bySlug.size === 0)
  ) {
    t.lastWritten = o;
    return;
  }
  let r = {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: K(),
    artifacts: n,
  };
  if (D(t, K())) {
    if (
      ((t.lastWritten = R), e?.durableNow === !0 && t.transcriptPath !== null)
    ) {
      let d = N(t, r);
      appendEntryToCurrentTranscriptNow(d, t.transcriptPath, I(d));
    }
    return;
  }
  if (
    ((t.lastWritten = o),
    (t.wroteCurrentLine = !0),
    registerTranscriptExitReStamp(et),
    e?.durableNow === !0)
  )
    appendEntryToCurrentTranscriptNow(r);
  recordArtifactCommentMonitor(r, t.storageV5).catch(() => {
    if (t.lastWritten === o) t.lastWritten = R;
    logFeatureSad("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
export {
  e9n,
  t9n,
  I7,
  n9n,
  ian,
  mpt,
  sze,
  gpt,
  r9n,
  H9,
  o9n,
  hpt,
  Ibe,
  s9n,
  ize,
  _pt,
  i9n,
  ate,
  a9n,
};

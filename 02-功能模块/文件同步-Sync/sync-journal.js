// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodePoints, isWellFormed, toWellFormed } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import {
  xht,
  qfn,
  zfn,
  $M,
  r$,
  MAX_WORKING_FILE_BYTES,
  Pht,
  ILe,
  Oht,
  ej,
  TE,
  emn,
  Lne,
  nn,
  Mne,
  qO,
  Wht,
  $_,
  aw,
  xKe,
  rmn,
  lC,
  XTe,
  YTe,
  C3,
  GX,
  omn,
  Ade,
  kKn,
  zO,
  smn,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { nc } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { s, T, O, se, v, c, $e, Ko, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var h = 1,
  JOURNAL_VERSION_WITH_NOTE = 2,
  MAX_JOURNAL_ENTRIES = qfn - zfn,
  MAX_ETAG_LENGTH = 256,
  SHA256_HEX_RE = /^[0-9a-f]{64}$/,
  N = 512,
  A = 256,
  y = 64,
  w = 2097152,
  MAX_USER_EVENT_UUIDS = 32,
  P = 128,
  D = ["over_budget", "too_large", "lane_path", "unreadable", "case_collision"],
  J = ["recreated", "ended", "cleared", "start_failed"],
  E = 300,
  HALT_REASONS = [
    "withdrawn",
    "switched_off",
    "seed_incomplete",
    "arm_failed",
    "engine_declined",
    "engine_unavailable",
    "store_unwritable",
    "lane_full",
    "unauthorized",
    "lane_unavailable",
    "repeated_errors",
    "refused",
    "too_large",
    "start_failed",
    "offline",
    "ended_earlier",
    "layout_unserved",
  ],
  M = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/gu;
function f(e) {
  return toWellFormed(e).replace(M, "\uFFFD");
}
function formatHaltLine(e) {
  return f(truncateToCodePoints(e, E));
}
var H = createLazyValue(() =>
    c({
      path: s().refine((e) => r$(e) === null),
      sha256: s().regex(SHA256_HEX_RE),
      size: T().int().nonnegative(),
      mode: T().int().nonnegative().transform(normalizeFileMode),
      etag: s().min(1).max(MAX_ETAG_LENGTH),
      gen: T().int().nonnegative().optional(),
    }),
  ),
  getAgreedBlobSchema = createLazyValue(() =>
    Ko("kind", [
      c({ kind: k("sha256"), sha256: s().regex(SHA256_HEX_RE) }),
      c({ kind: k("git_blob"), blobId: s().regex(Wht) }),
    ]),
  ),
  U = createLazyValue(() =>
    c({
      path: s().refine((e) => r$(e) === null),
      agreed: getAgreedBlobSchema(),
      generation: T().int().nonnegative(),
      peerSeen: T().int().nonnegative().optional(),
    }),
  ),
  u = createLazyValue(() => s().regex(nn).refine(Mne)),
  x = createLazyValue(() =>
    v(u())
      .max($_)
      .refine((e) => new Set(e).size === e.length),
  ),
  R = createLazyValue(() =>
    s()
      .max(Ade)
      .refine(smn)
      .transform((e) => (zO(e) ? e : null))
      .nullable(),
  ),
  B = /^[A-Za-z0-9_-]+$/,
  F = 104857600,
  z = { row: MAX_WORKING_FILE_BYTES, file: F, direct: xht },
  getBundleSchema = createLazyValue(() =>
    c({
      via: s().min(1).max(32),
      fileId: s().max(kKn).regex(B).optional(),
      sha256: s().regex(SHA256_HEX_RE),
      size: T().int().positive(),
      tipRef: s().refine(qO),
      prerequisites: x(),
    })
      .refine((e) => (e.via === "file") === (e.fileId !== void 0))
      .refine((e) => e.size <= (Object.hasOwn(z, e.via) ? z[e.via] : xht))
      .transform(({ via: e, fileId: n, ...t }) =>
        e === "file" && n !== void 0
          ? { via: e, fileId: n, ...t }
          : {
              via: e === "direct" ? "direct" : e === "row" ? "row" : "unknown",
              ...t,
            },
      ),
  ),
  getResolvedBundleSchema = createLazyValue(() => getBundleSchema().refine((e) => e.via !== "unknown")),
  g = 128,
  W = /[\p{Cc}\\]|^[A-Za-z]:/u;
function isSyncableRelativePath(e) {
  return (
    e.length <= 2 * rmn &&
    $M(e) &&
    !W.test(e) &&
    !e.split("/").some(G) &&
    isWellFormed(e) &&
    Array.from(e).length <= rmn
  );
}
function G(e) {
  let n = nc(e);
  return n === ".git" || /^git~\d+$/.test(n);
}
var V = createLazyValue(() => v(s().refine(isSyncableRelativePath)).max(lC)),
  K = createLazyValue(() =>
    s()
      .refine((e) => Array.from(e).length <= xKe)
      .transform(f),
  ),
  I = () => ({
    engine: k("git"),
    generation: T().int().positive(),
    head: u(),
    branch: R(),
    indexCommit: u(),
    worktreeCommit: u(),
    bundle: getBundleSchema().nullable(),
    holds: x(),
  }),
  L = createLazyValue(() =>
    c({
      ...I(),
      downApplied: v(
        c({ turn: T().int().positive(), notInstalled: q(), truncated: O() }),
      )
        .max(C3)
        .refine((e) => e.reduce((n, t) => n + t.notInstalled.length, 0) <= g),
      withheldCounts: getWithheldCountsSchema(),
      conflicted: v(
        s()
          .refine((e) => Array.from(e).length <= YTe)
          .transform(f),
      )
        .max(XTe)
        .optional()
        .catch(void 0),
      fastForwardedTo: v(u())
        .max(GX)
        .refine((e) => new Set(e).size === e.length)
        .default(() => []),
      origin: s()
        .max(32)
        .optional()
        .transform((e) => (e === "folder" ? "folder" : void 0))
        .catch(void 0),
      acceptsHeldParents: k(!0)
        .optional()
        .catch(void 0),
      seedless: se()
        .optional()
        .transform((e) => (e === !0 ? !0 : void 0))
        .catch(void 0),
    }),
  ),
  getSkipReasonSchema = createLazyValue(() =>
    s()
      .max(64)
      .transform((e) => (omn.includes(e) ? e : "other")),
  ),
  q = createLazyValue(() => v(c({ path: s().refine(isSyncableRelativePath), reason: getSkipReasonSchema() })).max(lC)),
  C = createLazyValue(() =>
    c({
      ...I(),
      bundle: getBundleSchema()
        .refine((e) => e.via !== "file")
        .nullable(),
      basedOn: u().nullable(),
      appliedGeneration: T().int().nonnegative(),
      notTaken: V(),
      notTakenTruncated: O(),
      need: u().nullable(),
      report: v(K()).max(aw),
      agentHead: u(),
      agentHeadContainsBasis: O().nullable(),
      recreatedAfterTurn: T().int().nonnegative().optional(),
      installsBankedThrough: T().int().nonnegative().optional(),
      unshipped: k(!0)
        .optional()
        .catch(void 0),
    })
      .refine((e) => e.basedOn !== null || e.appliedGeneration === 0)
      .refine((e) => e.basedOn !== null || e.agentHeadContainsBasis === null),
  ),
  Z = createLazyValue(() =>
    c({
      version: $e([k(h), k(JOURNAL_VERSION_WITH_NOTE)]),
      side: X(["laptop", "worker"]),
      generation: T().int().nonnegative(),
      turnIndex: T().int().nonnegative(),
      userEventUuids: v(s().min(1).max(P)).max(MAX_USER_EVENT_UUIDS),
      writtenAtMs: T().int().nonnegative(),
      entries: v(H())
        .max(MAX_JOURNAL_ENTRIES)
        .refine((e) => new Set(e.map((n) => n.path)).size === e.length),
      skipped: v(
        c({
          path: s()
            .min(1)
            .refine((e) => Array.from(e).length <= N)
            .transform(f),
          reason: X(D),
        }),
      ).max(A),
      skippedOmittedCount: T().int().nonnegative(),
      skippedDeferredCount: T().int().nonnegative().optional(),
      countsDependencyDirs: k(!0)
        .optional()
        .catch(void 0),
      deletedWithheldCount: T().int().nonnegative().optional(),
      deleted: v(U())
        .max(y)
        .refine((e) => new Set(e.map((n) => n.path)).size === e.length)
        .default([]),
      halted: X(J)
        .optional()
        .catch(void 0),
      haltLine: s()
        .min(1)
        .transform((e) => formatHaltLine(e))
        .optional()
        .catch(void 0),
      haltReason: X(HALT_REASONS)
        .optional()
        .catch(void 0),
      uploading: c({
        generation: T().int().positive(),
        startedAtMs: T().int().nonnegative(),
        abandoned: k(!0)
          .optional()
          .catch(void 0),
        writer: s()
          .min(1)
          .max(64)
          .optional()
          .catch(void 0),
        heartbeatAtMs: T()
          .int()
          .nonnegative()
          .optional()
          .catch(void 0),
        reason: s()
          .max(200)
          .transform((e) => f(e))
          .optional()
          .catch(void 0),
      })
        .optional()
        .catch(void 0),
      note: se().optional(),
    }),
  ),
  Q = createLazyValue(() => c({ version: T().int() }));
function j(e) {
  let n = Q().safeParse(e);
  return n.success ? n.data.version : null;
}
var getWithheldCountsSchema = createLazyValue(() =>
  c({
    credentialNamed: T().int().nonnegative(),
    filterAttributed: T().int().nonnegative(),
    hardLinked: T().int().nonnegative(),
    tooLarge: T().int().nonnegative().optional(),
    unresolvedConflicts: T().int().nonnegative().optional(),
  }),
);
function isPathEligibleForSync(e) {
  let n = ej(),
    t = n ? e.path.split("/").map(emn).join("/") : e.path;
  return (
    !Oht(t, !0) && !(n && TE(e.path)) && !(n && Lne(t)) && !Pht(t) && !ILe(t)
  );
}
function parseSyncJournal(e, n, { engine: t }) {
  if (e.length > w) return { ok: !1, reason: "oversize" };
  let i = xt(e.toString("utf8"), !1),
    p = j(i);
  if (p !== null && p !== h && p !== JOURNAL_VERSION_WITH_NOTE)
    return { ok: !1, reason: "unsupported_version" };
  let o = Z().safeParse(i);
  if (!o.success || !ee(o.data)) return { ok: !1, reason: "malformed" };
  if (o.data.side !== n) return { ok: !1, reason: "wrong_side" };
  let { note: a, ...r } = o.data,
    d =
      a !== void 0 ||
      (r.uploading !== void 0 && n === "laptop") ||
      (r.halted === "start_failed" && n === "worker");
  if (
    d !== (r.version === JOURNAL_VERSION_WITH_NOTE) ||
    d !== (t === "git") ||
    (r.halted === "start_failed" && a !== void 0) ||
    (d &&
      (r.entries.length > 0 ||
        r.skipped.length > 0 ||
        r.skippedOmittedCount > 0 ||
        (r.skippedDeferredCount ?? 0) > 0 ||
        (r.deletedWithheldCount ?? 0) > 0 ||
        r.deleted.length > 0))
  )
    return { ok: !1, reason: "wrong_note" };
  let l = a === void 0 ? void 0 : (n === "laptop" ? L() : C()).safeParse(a);
  if (l !== void 0 && !l.success) return { ok: !1, reason: "wrong_note" };
  let _ = r.entries.filter(isPathEligibleForSync),
    S = r.deleted.filter(isPathEligibleForSync);
  return {
    ok: !0,
    journal: {
      ...r,
      entries: _,
      deleted: S,
      ...(l !== void 0 && { note: l.data }),
    },
    droppedEntries: r.entries.length - _.length + (r.deleted.length - S.length),
  };
}
function ee(e) {
  return (
    e.entries.every((n) => n.gen === void 0 || n.gen <= e.generation) &&
    (e.deleted ?? []).every((n) => n.generation <= e.generation)
  );
}
function normalizeFileMode(e) {
  return (e & 64) !== 0 ? 493 : 420;
}
function encodeSyncJournal(e) {
  let n = ne(e.deleted ?? []),
    t = e.note === void 0 ? void 0 : te(e.note),
    i =
      t !== void 0 ||
      (e.uploading !== void 0 && e.side === "laptop") ||
      (e.halted === "start_failed" && e.side === "worker");
  if (
    i &&
    ((e.halted === "start_failed" && t !== void 0) ||
      e.entries.length > 0 ||
      e.skipped.length > 0 ||
      e.skippedOmittedCount > 0 ||
      (e.skippedDeferredCount ?? 0) > 0 ||
      (e.deletedWithheldCount ?? 0) > 0 ||
      n.length > 0 ||
      (t !== void 0 &&
        (t.bundle?.via === "unknown" ||
          !(e.side === "laptop" ? L() : C()).safeParse(t).success)))
  )
    throw Error(
      "sync journal note is not one its reader would accept, or rides with rows",
    );
  return Buffer.from(
    b({
      ...e,
      version: i ? JOURNAL_VERSION_WITH_NOTE : h,
      uploading: e.side === "laptop" ? e.uploading : void 0,
      haltLine: e.haltLine === void 0 ? void 0 : truncateToCodePoints(e.haltLine, E),
      ...(t !== void 0 && { note: t }),
      userEventUuids: e.userEventUuids.slice(-MAX_USER_EVENT_UUIDS),
      entries: e.entries.toSorted(compareByPath).slice(0, MAX_JOURNAL_ENTRIES),
      skipped: e.skipped
        .toSorted(compareByPath)
        .slice(0, A)
        .map(({ path: p, reason: o }) => ({ path: truncateToCodePoints(p, N), reason: o })),
      deleted: n.length > 0 ? n : void 0,
      deletedWithheldCount:
        (e.deletedWithheldCount ?? 0) > 0 ? e.deletedWithheldCount : void 0,
    }),
  );
}
function ne(e) {
  let n = new Set();
  return e
    .toSorted((t, i) => i.generation - t.generation || compareByPath(t, i))
    .filter((t) => {
      let i = r$(t.path) === null && !n.has(t.path);
      return (n.add(t.path), i);
    })
    .slice(0, y);
}
function compareByPath(e, n) {
  return e.path < n.path ? -1 : e.path > n.path ? 1 : 0;
}
function te(e) {
  let n = (o) => truncateToCodePoints(o, xKe),
    t = {
      holds: dedupe(e.holds).slice(0, $_),
      branch: R().safeParse(e.branch).data ?? null,
      bundle:
        e.bundle === null
          ? null
          : {
              ...e.bundle,
              prerequisites: dedupe(e.bundle.prerequisites).slice(0, $_),
            },
    },
    i = (o, a, r = g) => {
      let d = o.filter((l) => isSyncableRelativePath(a(l))).slice(0, Math.max(0, Math.min(lC, r)));
      return { kept: d, truncated: d.length !== o.length };
    };
  if ("report" in e) {
    let o = i(e.notTaken, (a) => a);
    return {
      ...e,
      ...t,
      notTaken: o.kept,
      notTakenTruncated: e.notTakenTruncated || o.truncated,
      report: e.report.slice(0, aw).map(n),
    };
  }
  let p = e.downApplied.slice(-C3).reduceRight(
    (o, a) => {
      let r = i(a.notInstalled, (d) => d.path, o.left);
      return {
        left: o.left - r.kept.length,
        turns: [
          {
            turn: a.turn,
            notInstalled: r.kept.map(({ path: d, reason: l }) => ({
              path: d,
              reason: l,
            })),
            truncated: a.truncated || r.truncated,
          },
          ...o.turns,
        ],
      };
    },
    { left: g, turns: [] },
  );
  return {
    ...e,
    ...t,
    downApplied: p.turns,
    fastForwardedTo: dedupe([...e.fastForwardedTo].reverse())
      .reverse()
      .slice(-GX),
  };
}
export {
  JOURNAL_VERSION_WITH_NOTE,
  MAX_JOURNAL_ENTRIES,
  MAX_ETAG_LENGTH,
  SHA256_HEX_RE,
  MAX_USER_EVENT_UUIDS,
  HALT_REASONS,
  formatHaltLine,
  getAgreedBlobSchema,
  getBundleSchema,
  getResolvedBundleSchema,
  isSyncableRelativePath,
  getSkipReasonSchema,
  getWithheldCountsSchema,
  isPathEligibleForSync,
  parseSyncJournal,
  normalizeFileMode,
  encodeSyncJournal,
  compareByPath,
};

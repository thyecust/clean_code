// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 204 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { toInfraSessionId } from "../权限系统/chunk-ynkf3yy4.js";
import { Ve, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { formatSingleLineText } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { Ct, vht, xk, TKn, Fht, jht, pH, tj, $_ } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { SO, uk } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-x4qgycdj.js";
import "../文件同步-Sync/sync-journal.js";
import "../../01-核心基础设施/共享小工具-未细化/sync-state-schema.js";
import { Jpt, Zpt, mte, Ybe } from "./chunk-zbxyj64j.js";
import { I9, Cze, Qan } from "../Git-Worktree/chunk-v967hawf.js";
import "../文件同步-Sync/chunk-tqwnv5vj.js";
import { mFt, gFt, hFt, _Ft, yFt } from "../云目录同步-Git/云目录同步-Git.tksek4c2.js";
import { qbe, Fan, iOe, wze, Tze } from "../文件同步-Sync/chunk-eg4wmaq4.js";
import {
  z4,
  fFt,
  Npt,
  Fpt,
  $pt,
  Upt,
  B9n,
  jbe,
  j9n,
  Bpt,
  jpt,
  yze,
  Wpt,
  Wbe,
  q9n,
  z9n,
  Gpt,
  V9n,
  qpt,
} from "./chunk-gbhqtdpn.js";
import { createDirSyncJournalTransport } from "./dir-sync-git-lane.js";
import "../../01-核心基础设施/共享小工具-未细化/truncate-with-ellipsis.js";
import "../../01-核心基础设施/共享小工具-未细化/to-integer.js";
import { sanitizePathSegment, resolveDirSyncRecordLocation } from "../../01-核心基础设施/共享小工具-未细化/dir-sync-record-path.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { mkdir } from "fs/promises";
import { join as q } from "path";
var M = new Set();
function W({ folder: e }) {
  return {
    async ignoredHere(t) {
      let s = await Tze(e);
      if (s.kind === "unusable")
        return { ignored: M, unjudged: new Set(t), unjudgeable: M };
      let d = wze(s.lines, { ignoreCase: iOe(e) }),
        h = Fan(e),
        m = new Set(),
        y = new Set();
      for (let g of t)
        if (await h(g)) y.add(g);
        else if (V(d, g)) m.add(g);
      return { ignored: m, unjudged: M, unjudgeable: y };
    },
    trackedHere: async () => new Map(),
    modesTrusted: async () => getCurrentPlatform() !== "windows",
    filterAttributed: async () => M,
    cleanFilterBlobIds: async () => new Map(),
  };
}
function V(e, t) {
  let s = t.split("/");
  return (
    e.ignoresFile(t) ||
    s
      .slice(0, -1)
      .some((d, h) => e.ignoresDirectory(s.slice(0, h + 1).join("/")))
  );
}
var X = 268435456,
  K = 400000,
  J = new Set([33188, 33261]);
function N({
  repo: e,
  refs: t,
  sessionId: s,
  onReceive: d,
  signal: h,
  now: m = Date.now,
}) {
  let y = e.store.objectFormat,
    g = async (r) => {
      if (!z4(r, y)) return null;
      try {
        let o = await e.listingOf(r);
        return o.kind === "ok"
          ? o.listing
          : o.kind === "too_large"
            ? "too_large"
            : null;
      } catch (o) {
        return (n(`folder sync: listing ${r} failed: ${String(o)}`), null);
      }
    },
    R = async (r, o) => {
      try {
        return await o();
      } catch (c) {
        return (n(`folder sync: store read failed: ${String(c)}`), r);
      }
    },
    p = async ({ content: r, targets: o, heldBases: c, heldRefs: b }) => {
      let F = m();
      if (Ct(h)) return { ok: !1, reason: "aborted" };
      if (r.length > I9)
        return { ok: !1, reason: "too_large", sizeBytes: r.length };
      let E = Qan(r, { refNames: [...o.keys()] });
      if (!E.ok) return E;
      let { header: k } = E;
      if (k.refs.length === 0) return { ok: !1, reason: "unexpected_refs" };
      let C = new Set([...c, ...t.matching(b.glob).map((w) => w.id)]),
        _ = [];
      for (let w of k.prerequisites) if (!(await z(e, w, C))) _.push(w);
      if (_.length > 0)
        return {
          ok: !1,
          reason: "prerequisites_missing",
          missingCount: _.length,
          missing: _,
        };
      let O = await B9n(r.subarray(k.packOffset), {
        objectFormat: y,
        maxInflatedBytes: X,
        maxObjects: K,
      });
      if (!O.ok)
        return O.reason === "not_a_pack"
          ? { ok: !1, reason: "not_a_bundle" }
          : {
              ok: !1,
              reason: "unpack_failed",
              detail: `${O.reason}: ${O.detail}`,
            };
      let v = O.objects.find((w) => !Q(w, y));
      if (v !== void 0)
        return {
          ok: !1,
          reason: "unpack_failed",
          detail: `${v.type} ${v.id} is not one git would accept`,
        };
      let T = O.objects.find((w) => w.body.length > jbe);
      if (T !== void 0)
        return {
          ok: !1,
          reason: "unpack_failed",
          detail: `${T.type} ${T.id} is ${String(T.body.length)} bytes, more than this machine stores`,
        };
      let a = new Map(O.objects.map((w) => [w.id, w])),
        j = [];
      for (let w of k.refs) {
        let L = a.get(w.id);
        if (L === void 0 || L.type !== "commit")
          return {
            ok: !1,
            reason: "unpack_failed",
            detail: `tip ${w.id} is not a commit in the pack`,
          };
        j.push(L);
      }
      let B = await ee(e, a, j, C, y);
      if (B.unaccounted !== null)
        return {
          ok: !1,
          reason: "unpack_failed",
          detail: `the pack does not account for ${B.unaccounted} (a tree it names, or a parent outside it that is not history this session holds)`,
        };
      let D = O.objects.find((w) => !B.reached.has(w.id));
      if (D !== void 0)
        return {
          ok: !1,
          reason: "unpack_failed",
          detail: `the pack carries ${D.type} ${D.id}, which none of its tips reaches`,
        };
      if (Ct(h)) return { ok: !1, reason: "aborted" };
      for (let w of ["blob", "tree", "commit"])
        for (let L of O.objects)
          if (L.type === w) await e.store.put(L.type, L.body);
      await e.store.flush();
      let I = k.refs.flatMap((w) => {
        let L = o.get(w.name);
        return L === void 0 ? [] : [{ name: L, id: w.id }];
      });
      return (
        t.write(I),
        d?.({
          objectsRead: O.objects.length,
          decodeMs: m() - F,
          packBytes: r.length - k.packOffset,
        }),
        { ok: !0, refs: I, prerequisiteCount: k.prerequisites.length }
      );
    };
  return {
    withSignal: (r) =>
      N({
        repo: e,
        refs: t,
        sessionId: s,
        onReceive: d,
        ...(r !== void 0 && { signal: r }),
        now: m,
      }),
    async diffTrees(r, o) {
      let [c, b] = await Promise.all([g(r), g(o)]);
      if (c === "too_large" || b === "too_large") return "too_large";
      return c === null || b === null ? null : e.changedPaths(c, b);
    },
    async listTreePaths(r, o) {
      let c = await g(r);
      if (c === null || c === "too_large") return null;
      return new Map(o.map((b) => [b, c.files.get(b) ?? null]));
    },
    commitParents: (r) => R("unknown", () => e.commitParents(r)),
    async holdsCommit(r) {
      let o = await R("unknown", () => e.commitParents(r));
      return o !== "none" && o !== "unknown";
    },
    async listTree(r) {
      let o = await g(r);
      if (o === null || o === "too_large") return o;
      return { paths: [...o.files.keys()], blobIds: H(o) };
    },
    isAncestor: (r, o) => R("unknown", () => e.isAncestor(r, o)),
    async receiveBundle(r) {
      try {
        return await p(r);
      } catch (o) {
        return (
          n(`folder sync: receive failed: ${String(o)}`),
          { ok: !1, reason: "git_error", stage: "threw", detail: String(o) }
        );
      }
    },
    async deleteRefs(r) {
      return (t.remove(r), !0);
    },
    async firstCommitCarrying(r, o) {
      if (o.length === 0) return "unknown";
      let c = !0;
      for (let b of o) {
        let F = await g(b);
        if (F === null || F === "too_large") {
          c = !1;
          continue;
        }
        if (H(F).has(r)) return "found";
      }
      return c ? "not_found" : "unknown";
    },
    async blobIdsOfTrees(r) {
      let o = new Set();
      for (let c of r) {
        let b = await g(c);
        if (b === null || b === "too_large") return null;
        for (let F of H(b)) o.add(F);
      }
      return o;
    },
    async heldInOwnRight(r) {
      return R(null, async () => {
        let o = new Set();
        for (let c of r) if (z4(c, y) && (await e.store.hasHere(c))) o.add(c);
        return o;
      });
    },
    async openBlobReader({ maxBytes: r }) {
      let o = !1;
      return {
        read: async (b) => {
          if (o || Ct(h) || !z4(b, y)) return { kind: "unavailable" };
          if (e.store.deflatedSize(b) === null) return { kind: "unavailable" };
          let k = (await R(!1, () => e.store.hasHere(b)))
            ? await R({ kind: "absent" }, () => e.store.get(b))
            : { kind: "absent" };
          if (k.kind !== "ok" || k.object.type !== "blob")
            return { kind: "unavailable" };
          return k.object.body.length > r
            ? { kind: "too_large" }
            : { kind: "ok", bytes: k.object.body };
        },
        close: () => {
          o = !0;
        },
        [Symbol.asyncDispose]: async () => {
          o = !0;
        },
      };
    },
  };
}
function H(e) {
  return new Set(
    [...e.files.values()].filter((t) => J.has(t.mode)).map((t) => t.blobId),
  );
}
function Q(e, t) {
  switch (e.type) {
    case "tree": {
      let s = Npt(e.body, t);
      if (s === null) return !1;
      let d = fFt(s, t);
      return d.ok && d.tree.id === e.id;
    }
    case "commit":
      return Fpt(e.body, t) !== null && Z(e.body);
    case "blob":
      return !0;
    case "tag":
      return !1;
  }
}
function Z(e) {
  let t = e.indexOf(`

`),
    s = (t < 0 ? e : e.subarray(0, t)).toString("latin1");
  if (s.includes("\x00")) return !1;
  let d = s.split(`
`),
    h = /^[^<>\n]+ <[^<>\n]*> \d+ [+-]\d{4}$/,
    m = d.filter((g) => g.startsWith("author ")),
    y = d.filter((g) => g.startsWith("committer "));
  return (
    m.length === 1 &&
    y.length === 1 &&
    h.test(m[0].slice(7)) &&
    h.test(y[0].slice(10)) &&
    d.indexOf(m[0]) < d.indexOf(y[0])
  );
}
async function ee(e, t, s, d, h) {
  let m = new Set(),
    y = new Set(),
    g = [],
    R = [...s];
  while (R.length > 0) {
    let p = R.pop();
    if (m.has(p.id)) continue;
    m.add(p.id);
    let f = Fpt(p.body, h);
    if (f === null) return { unaccounted: p.id, reached: m };
    g.push(f.tree);
    for (let r of f.parents) {
      let o = t.get(r);
      if (o?.type === "commit") R.push(o);
      else if (o !== void 0 || !(await z(e, r, d)))
        return { unaccounted: r, reached: m };
    }
  }
  while (g.length > 0) {
    let p = g.pop();
    if (y.has(p)) continue;
    y.add(p);
    let f = t.get(p);
    if (f !== void 0) m.add(p);
    let r = f?.type === "tree" ? f.body : await te(e, p);
    if (r === null) return { unaccounted: p, reached: m };
    for (let o of Npt(r, h) ?? []) {
      if (o.kind === "directory") {
        g.push(o.id);
        continue;
      }
      if (o.kind === "gitlink") continue;
      let c = t.get(o.id);
      if (c?.type === "blob") {
        m.add(o.id);
        continue;
      }
      if (f !== void 0 && (c !== void 0 || !(await e.store.hasHere(o.id))))
        return { unaccounted: o.id, reached: m };
    }
  }
  return { unaccounted: null, reached: m };
}
async function te(e, t) {
  if (!(await e.store.hasHere(t))) return null;
  let s = await e.store.get(t);
  return s.kind === "ok" && s.object.type === "tree" ? s.object.body : null;
}
async function z(e, t, s) {
  let d = await e.commitParents(t);
  if (d === "none" || d === "unknown") return !1;
  if (s.has(t)) return !0;
  for (let h of s) if ((await e.isAncestor(t, h)) === !0) return !0;
  return !1;
}
import { createHash } from "crypto";
function G({ repo: e, refs: t, onPass: s, signal: d, now: h = Date.now }) {
  let m = e.store.objectFormat,
    y = async (p, f) => {
      try {
        return await f();
      } catch (r) {
        return (n(`folder sync: store read failed: ${String(r)}`), p);
      }
    },
    g = {
      ...(d !== void 0 && { signal: d }),
      snapshotPin: {},
      withSignal: (p) => G({ repo: e, refs: t, onPass: s, signal: p, now: h }),
      pinForPass: async () => ({ kind: "nothing_to_pin" }),
      async presentCommits(p) {
        return y(null, async () => {
          let f = new Set();
          for (let r of p) {
            if (!z4(r, m) || !(await e.store.hasHere(r))) continue;
            let o = await e.commitParents(r);
            if (o === "unknown") {
              n(
                `folder sync: commit ${r} is unreadable in the local store; treated as not held`,
              );
              continue;
            }
            if (o !== "none") f.add(r);
          }
          return f;
        });
      },
      async readTrees(p) {
        return y(null, async () => {
          let f = [];
          for (let r of p) {
            let o = await e.treeOf(r);
            if (o === null) return null;
            f.push(o);
          }
          return f;
        });
      },
      async writeRefs(p) {
        return (t.write(p), !0);
      },
      async createBundle(p) {
        try {
          return await R(p);
        } catch (f) {
          return (
            n(`folder sync: bundle failed: ${String(f)}`),
            Ct(d)
              ? { ok: !1, reason: "aborted" }
              : A("range", `the local store could not be read: ${String(f)}`)
          );
        }
      },
      async listSessionRefs(p) {
        return t.list(p);
      },
      async deleteRefs(p) {
        return (t.remove(p), !0);
      },
    },
    R = async ({ tips: p, prerequisites: f, maxBytes: r }) => {
      if (Ct(d)) return { ok: !1, reason: "aborted" };
      let o = p.map((a) => ({ name: a, id: t.read(a) })),
        c = o.find((a) => a.id === null);
      if (c !== void 0 || o.length === 0)
        return A("tips", `no ref ${c?.name ?? "(none asked)"}`);
      let b = o.flatMap((a) =>
        a.id === null ? [] : [{ name: a.name, id: a.id }],
      );
      if (!f.every((a) => z4(a, m)))
        return A("arguments", "a prerequisite is not an object id");
      if (f.length > $_)
        return {
          ok: !1,
          reason: "too_many_prerequisites",
          prerequisiteCount: f.length,
        };
      let F = await g.presentCommits(f);
      if (F === null)
        return A(
          "range",
          "the store could not say which prerequisites it holds",
        );
      if (F.size !== new Set(f).size)
        return {
          ok: !1,
          reason: "prerequisites_missing",
          missingCount: new Set(f).size - F.size,
        };
      let E = b.filter((a) => F.has(a.id)),
        k = b.filter((a) => !F.has(a.id));
      if (k.length === 0)
        return { ok: !1, reason: "nothing_to_send", omitted: E };
      let C = h(),
        _ = [],
        O = 0;
      for (let a of k) {
        let j = await e.objectsToSend({ tip: a.id, peerHolds: f });
        if (j.missing.length > 0)
          return A(
            "range",
            `${j.missing.length} object(s) the upload needs are not in this folder's local store (first: ${j.missing[0]})`,
          );
        if (j.bytesEstimate > r)
          return { ok: !1, reason: "too_large", sizeBytes: j.bytesEstimate };
        O += j.ids.commits.length;
        for (let B of [...j.ids.commits, ...j.ids.trees, ...j.ids.blobs]) {
          if (Ct(d)) return { ok: !1, reason: "aborted" };
          let D = await e.store.getDeflated(B);
          if (D.kind !== "ok")
            return A(
              "range",
              `object ${B} is ${D.kind} in this folder's local store`,
            );
          _.push(D.object);
        }
      }
      let v = await Upt(_, m),
        T = Buffer.concat([
          Cze({
            version: m === "sha1" ? 2 : 3,
            capabilities: m === "sha1" ? [] : [`object-format=${m}`],
            prerequisites: [...f],
            refs: k,
            packOffset: 0,
          }),
          v,
        ]);
      if (T.length > r)
        return { ok: !1, reason: "too_large", sizeBytes: T.length };
      return (
        s?.({ objects: _.length, packBytes: v.length, packMs: h() - C }),
        {
          ok: !0,
          content: T,
          sizeBytes: T.length,
          sha256: createHash("sha256").update(T).digest("hex"),
          refs: k,
          omitted: E,
          prerequisites: [...f],
          commitCount: O,
        }
      );
    };
  return g;
}
function A(e, t) {
  return { ok: !1, reason: "git_error", stage: e, detail: t };
}
function U() {
  let e = new Map();
  return {
    read: (t) => e.get(t) ?? null,
    write(t) {
      for (let { name: s, id: d } of t) e.set(s, d);
    },
    remove(t) {
      for (let s of t) e.delete(s);
    },
    list: (t) => Y(e, `${tj}${t}/`),
    matching: (t) => (t.endsWith("/*") ? Y(e, t.slice(0, -1)) : []),
  };
}
function Y(e, t) {
  return [...e]
    .filter(([s]) => s.startsWith(t))
    .map(([s, d]) => ({ name: s, id: d }))
    .toSorted((s, d) => (s.name < d.name ? -1 : s.name > d.name ? 1 : 0));
}
var re = "writer.lock",
  se = 448,
  ie =
    "The cloud session has not picked up anything synced from this folder yet \u2014 if its side of folder sync is not switched on, changes made here and there will not reach the other side",
  ae =
    "This folder is not syncing: the cloud session never picked up anything synced from here (its side of folder sync is off), so this session stops. A new cloud session from this folder will try again.",
  de =
    "This folder is not syncing: this session's local sync store is missing or unreadable on this machine. Start a new cloud session from this folder to sync again.",
  ce =
    "This folder is not syncing: its files could not be recorded in the local sync store as the session opened. Start a new cloud session from this folder to try again.";
function le(e) {
  let t = e.split("/");
  return t.every((s, d) => qbe(s, d < t.length - 1) === null);
}
async function openFolderGitSync({
  sessionId: e,
  folder: t,
  start: s,
  created: d,
  signal: h,
  boundToThisMachine: m,
  onStatus: y,
  credentials: g,
  consent: R,
  storageV5: p,
  endedEarlier: f,
}) {
  let r = await xk(t);
  if (r === null) throw Error("launch folder cannot be resolved");
  let o = toInfraSessionId(e),
    c = await resolveDirSyncRecordLocation(t, o, p),
    b = d !== void 0,
    F = await Gpt(t, p),
    E = V9n(F, o),
    k = q(E, z9n);
  await mkdir(k, { recursive: !0, mode: se });
  let C = he(y),
    _ = await ue({
      folder: t,
      realRoot: r,
      sessionId: o,
      storeRoot: F,
      start: s,
      ...(d !== void 0 && { seedObjects: d.seedObjects }),
      ...(h !== void 0 && { signal: h }),
      lastSentCommit: async () => {
        let a = await mte(c.path, o, c.v5);
        return a.kind === "git"
          ? (a.record.sent[0]?.worktreeCommit ?? null)
          : null;
      },
      ackedOf: async () => {
        let a = await mte(c.path, o, c.v5);
        return a.kind === "git" ? a.record.acked : [];
      },
      onPassStats: (a) => {
        if ((fe(a), a.kind === "tree")) C(a.withheldCounts, a.heldBack.length);
      },
    });
  if (_.kind !== "ok") {
    n(`folder sync: ${_.kind} for session ${o} (${_.detail})`);
    let a = _.kind;
    return (
      logEvent("tengu_dir_sync_folder_store_lost", { reason: fromEnum(a), at_create: b }),
      Fht(
        y,
        _.kind === "seed_not_stored" ? "store_unwritable" : "store_unreadable",
        _.kind === "seed_not_stored" ? ce : de,
      )
    );
  }
  let { ports: O, close: v } = _;
  try {
    if (d !== void 0) {
      if (h?.aborted === !0) throw new Ve();
      if (
        (await Ybe(
          c.path,
          Zpt({
            sessionId: o,
            armedAtMs: d.armedAtMs,
            start: s,
            uploadOnly: d.uploadOnly,
          }),
          c.v5,
        ),
        d.startLine !== void 0)
      )
        y(d.startLine, "debug");
    }
    return T(r, O, v);
  } catch (a) {
    throw (await v(), a);
  }
  function T(a, j, B) {
    let D = jht({ sessionId: o, credentials: g }),
      I = hFt({
        sessionId: o,
        gitRoot: t,
        push: j.push,
        recordPath: c.path,
        snapshot: j.snapshot,
        transport: createDirSyncJournalTransport({ client: D, direct: D }),
        applyDown: gFt({
          gitRoot: t,
          realRoot: a,
          sessionId: o,
          objects: j.objects,
          checkout: j.checkout,
          deps: {
            now: () => new Date(),
            trash: _Ft(
              t,
              a,
              async () => k,
              (w) =>
                y(
                  `When Claude deletes or replaces a file in the cloud, your copy is moved to ${formatSingleLineText(w, { maxCodeUnits: 512 })} on this machine, not discarded`,
                  "info",
                ),
            ),
          },
        }),
        codec: yFt,
        onStatus: y,
        boundToThisMachine: m,
        consent: R ?? (() => TKn(t)),
        checkoutBranch: j.checkoutBranch,
        initialPass: b ? "send" : "none",
        ...(f !== void 0 && { endedEarlier: f }),
        writerLock: (w) =>
          mFt({ recordPath: c.path, lockPath: q(E, re), onLost: w }),
        onPeerSilent: () => {},
        ...(vht() && {
          changeFeed: () => Jpt({ root: t }),
          streamingScope: async (w) => w.some(le),
        }),
        lines: { peerQuiet: ie, peerSilent: ae },
      });
    return {
      ...I,
      shutdown: async (w) => {
        try {
          await I.shutdown(w);
        } finally {
          await B();
        }
      },
    };
  }
}
async function ue({
  folder: e,
  realRoot: t,
  sessionId: s,
  storeRoot: d,
  start: h,
  seedObjects: m,
  agreedOf: y,
  lastSentCommit: g,
  ackedOf: R,
  withheldOf: p,
  onPassStats: f = () => {},
  maxBytes: r = yze,
  budgetBytes: o = Wpt,
  signal: c,
}) {
  let b = await j9n({
    root: d,
    sessionId: sanitizePathSegment(s),
    objectFormat: "sha1",
    budgetBytes: o,
    ...(c !== void 0 && { signal: c }),
  });
  if (b.kind !== "ok") return { kind: "store_unreadable", detail: b.detail };
  let F = b.store;
  try {
    return await E(F);
  } catch (k) {
    throw (await F.close().catch(() => {}), k);
  }
  async function E(k) {
    if (m !== void 0) {
      let a = await pe(k, m);
      if (a !== null)
        return (
          await k.close().catch(() => {}),
          { kind: "seed_not_stored", detail: a }
        );
    }
    let C = $pt({ store: k, identity: jpt }),
      _ = await C.listingOf(h.pin);
    if (_.kind !== "ok")
      return (
        await k.close().catch(() => {}),
        {
          kind: "seed_missing",
          detail:
            _.kind === "too_large"
              ? "the seed listing is too large"
              : `${_.kind} ${_.id} at ${_.at || "/"}`,
        }
      );
    let O = await Bpt(qpt(d)),
      v = U();
    return {
      kind: "ok",
      ports: {
        store: k,
        repo: C,
        statCache: O,
        push: G({
          repo: C,
          refs: v,
          onPass: (a) => f({ kind: "push", ...a }),
          ...(c !== void 0 && { signal: c }),
        }),
        snapshot: q9n({
          folder: e,
          realRoot: t,
          repo: C,
          statCache: O,
          start: h,
          ...(y !== void 0 && { agreedOf: y }),
          ...(g !== void 0 && { lastSentCommit: g }),
          ...(R !== void 0 && { ackedOf: R }),
          maxBytes: r,
          withheldOf: p ?? (() => pH(e, { realRoot: t })),
          anchor: () =>
            SO(uk(), { gitRoot: e, realRoot: t }).catch(
              (a) => (n(`folder sync: tree anchor not opened (${l(a)})`), null),
            ),
          onPass: (a) => f({ kind: "tree", ...a }),
        }),
        objects: N({
          repo: C,
          refs: v,
          sessionId: s,
          onReceive: (a) => f({ kind: "receive", ...a }),
          ...(c !== void 0 && { signal: c }),
        }),
        checkout: W({ folder: e }),
        checkoutBranch: async () => ({ kind: "unknown" }),
      },
      close: async () => {
        (await O.save().catch(() => {}), await k.close().catch(() => {}));
      },
    };
  }
}
function fe(e) {
  switch (e.kind) {
    case "tree":
      logEvent(Wbe.repoPass, {
        pass: S("tree"),
        listed_paths: e.listedPaths,
        hashed_files: e.hashedFiles,
        hash_ms: e.hashMs,
        plan_ms: e.planMs,
        held_back: e.heldBack.length,
        held_back_bytes: e.heldBack.reduce((t, s) => t + s.bytes, 0),
        withheld: [...e.withheldCounts.values()].reduce((t, s) => t + s, 0),
        blobs_stored: e.blobsStored,
        bytes_planned: e.bytesPlanned,
        total_ms: e.totalMs,
      });
      return;
    case "push":
      logEvent(Wbe.repoPass, {
        pass: S("push"),
        objects: e.objects,
        pack_bytes: e.packBytes,
        pack_ms: e.packMs,
      });
      return;
    case "receive":
      logEvent(Wbe.repoPass, {
        pass: S("receive"),
        objects_read: e.objectsRead,
        decode_ms: e.decodeMs,
        pack_bytes: e.packBytes,
      });
      return;
  }
}
async function pe(e, t) {
  try {
    for (let s of t)
      if (!(await e.putDeflated(s.id, s.type, s.size, s.deflated)))
        return `object ${s.id} refused`;
    return (await e.flush(), null);
  } catch (s) {
    return (n(`folder sync: seed objects not stored (${l(s)})`), l(s));
  }
}
var me = {
  credential_name: "with a credential-like name",
  read_denied: "denied by a Read rule or a sandbox read-deny setting",
  not_regular_file: "not a regular file (a link or socket)",
  unreadable: "unreadable just now",
  name_refused_by_git: "with a name git cannot store",
  gitmodules: "named .gitmodules",
  gitattributes: "named .gitattributes",
  name_not_utf8: "with a name that is not valid UTF-8",
  too_large: "larger than sync carries",
};
function he(e) {
  let t = "",
    s = 0;
  return (d, h) => {
    let m = [...d]
        .filter(([, g]) => g > 0)
        .map(([g, R]) => `${R} ${pluralize(R, "file")} ${me[g]}`),
      y = m.join(", ");
    if (y !== t) {
      if (((t = y), m.length > 0))
        e(`Not uploaded from this folder: ${y}`, "info");
    }
    if (h !== s) {
      if (((s = h), h > 0))
        e(
          `${h} ${pluralize(h, "file")} in this folder changed while ${pluralize(h, "it was", "they were")} being read; ${pluralize(h, "it goes", "they go")} up with your next message`,
          "info",
        );
    }
  };
}
export { openFolderGitSync };

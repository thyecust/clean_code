// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isWellFormed, beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { normalizePathSegment } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getProjectDir, canonicalizePath } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { CLOUD_SNAPSHOTS_DIR_NAME, FOLDER_SYNC_DIR_NAME } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { toInfraSessionId } from "../权限系统/chunk-ynkf3yy4.js";
import { createConcurrencyLimiter, isSignalAborted, readExactBytes, readSeedFile, GIT_OBJECT_ID_REGEX, isNonZeroObjectId } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { compareByPath } from "../文件同步-Sync/sync-journal.js";
import { computeGitBlobId, isMtimeSettled } from "../../01-核心基础设施/共享小工具-未细化/sync-state-schema.js";
import { iOe, wze, $an, Tze, Uan } from "../文件同步-Sync/chunk-eg4wmaq4.js";
import { sanitizePathSegment } from "../../01-核心基础设施/共享小工具-未细化/dir-sync-record-path.js";
import { createHoverRestOptions } from "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import { getSafeReadOpenFlags } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { s, T, se, v, c, uW, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { createHash as _t } from "crypto";
var Ie = {
    file: "100644",
    executable: "100755",
    symlink: "120000",
    directory: "40000",
    gitlink: "160000",
  },
  Tt = ["file", "executable", "symlink", "directory", "gitlink"],
  me = 4096,
  Ot = /^git~\d+$/,
  Rt = De("gitmod", "gi7eba"),
  Ft = De("gitatt", "gi7d29"),
  Be = /[<>\n\0]/,
  Pt = 1439;
function Q(e) {
  return e === "sha256" ? 32 : 20;
}
function z4(e, t) {
  return e.length === 2 * Q(t) && GIT_OBJECT_ID_REGEX.test(e) && isNonZeroObjectId(e);
}
function J(e, t, r) {
  return {
    id: _t(r).update(`${e} ${t.length}\x00`).update(t).digest("hex"),
    type: e,
    body: t,
  };
}
function pe({ name: e, kind: t, id: r }, a) {
  if (e === "") return "empty_name";
  if (e.includes("/")) return "name_has_slash";
  if (e.includes("\x00")) return "name_has_nul";
  if (!isWellFormed(e)) return "name_not_unicode";
  if (e === "." || e === "..") return "dot_name";
  if (Buffer.byteLength(e) > me) return "name_too_long";
  if (be(e).some((o) => o === ".git" || Ot.test(o))) return "dotgit_name";
  if (t !== "file" && t !== "executable" && ge(e))
    return "gitmodules_not_regular_file";
  if ((t === "directory" || t === "gitlink") && he(e))
    return "gitattributes_directory";
  if (!z4(r, a)) return "bad_id";
  return null;
}
function ge(e) {
  return be(e).some((t) => t === ".gitmodules" || Rt.test(t));
}
function he(e) {
  return be(e).some((t) => t === ".gitattributes" || Ft.test(t));
}
function fFt(e, t) {
  let r = new Set();
  for (let o of e) {
    let d = r.has(o.name) ? "duplicate_name" : pe(o, t);
    if (d !== null) return { ok: !1, reason: d, name: o.name };
    r.add(o.name);
  }
  let a = e
    .map((o) => ({
      sortKey: Buffer.from(o.kind === "directory" ? `${o.name}/` : o.name),
      bytes: Buffer.concat([
        Buffer.from(`${Ie[o.kind]} ${o.name}\x00`),
        Buffer.from(o.id, "hex"),
      ]),
    }))
    .toSorted((o, d) => Buffer.compare(o.sortKey, d.sortKey));
  return { ok: !0, tree: J("tree", Buffer.concat(a.map((o) => o.bytes)), t) };
}
function Npt(e, t) {
  let r = Q(t),
    a = [],
    o = new Set(),
    d = 0;
  while (d < e.length) {
    let i = e.indexOf(32, d),
      l = i < 0 ? -1 : e.indexOf(0, i + 1);
    if (i < 0 || l <= i + 1 || l + 1 + r > e.length) return null;
    let h = e.toString("latin1", d, i),
      y = Tt.find((p) => Ie[p] === h);
    if (y === void 0) return null;
    let g = e.toString("utf8", i + 1, l);
    if (g === "." || g === ".." || g.includes("/") || o.has(g)) return null;
    (o.add(g),
      a.push({ name: g, kind: y, id: e.toString("hex", l + 1, l + 1 + r) }),
      (d = l + 1 + r));
  }
  return a;
}
function Ae({ tree: e, parents: t, author: r, committer: a, message: o }, d) {
  if (![e, ...t].every((l) => z4(l, d))) return { ok: !1, reason: "bad_id" };
  if (!je(r) || !je(a)) return { ok: !1, reason: "bad_signature" };
  if (o.includes("\x00")) return { ok: !1, reason: "nul_in_message" };
  let i = [
    `tree ${e}`,
    ...t.map((l) => `parent ${l}`),
    `author ${Ce(r)}`,
    `committer ${Ce(a)}`,
    "",
    o,
  ].join(`
`);
  return { ok: !0, commit: J("commit", Buffer.from(i), d) };
}
function Fpt(e, t) {
  let [r = "", ...a] = e.toString("latin1").split(`
`),
    o = Me(r, "tree", t),
    d = a.findIndex((l) => !l.startsWith("parent ")),
    i = a.slice(0, d < 0 ? a.length : d).map((l) => Me(l, "parent", t));
  return o !== null && i.every((l) => l !== null)
    ? { tree: o, parents: i }
    : null;
}
function Me(e, t, r) {
  let a = e.startsWith(`${t} `) ? e.slice(t.length + 1) : "";
  return a.length === 2 * Q(r) && GIT_OBJECT_ID_REGEX.test(a) ? a : null;
}
function je({ name: e, email: t, unixSeconds: r, utcOffsetMinutes: a }) {
  return (
    e !== "" &&
    !Be.test(e) &&
    !Be.test(t) &&
    Number.isSafeInteger(r) &&
    r >= 0 &&
    Number.isInteger(a) &&
    Math.abs(a) <= Pt
  );
}
function Ce({ name: e, email: t, unixSeconds: r, utcOffsetMinutes: a }) {
  let o = Math.abs(a),
    d = String(Math.floor(o / 60) * 100 + (o % 60));
  return `${e} <${t}> ${r} ${a < 0 ? "-" : "+"}${d.padStart(4, "0")}`;
}
function be(e) {
  return e.split("\\").map((t) => normalizePathSegment(beforeFirst(t, ":")));
}
function De(e, t) {
  let r = Array.from(
    { length: t.length + 1 },
    (a, o) => `${t.slice(0, o)}~[1-9]\\d{${6 - o}}`,
  );
  return new RegExp(`^(?:${e}~\\d+|${r.join("|")})$`);
}
var ve = 128,
  Se = 1e6,
  we = 67108864,
  Ne = 8,
  Bt = 16,
  Mt = 16,
  jt = 12,
  It = 44,
  ze = {
    file: 33188,
    executable: 33261,
    symlink: 40960,
    directory: 16384,
    gitlink: 57344,
  },
  At = ["file", "executable", "symlink", "gitlink"];
function $pt({ store: e, identity: t }) {
  let r = e.objectFormat,
    a = new Map(),
    o = new Map(),
    d = new Map();
  async function i(f) {
    let u = await e.get(f);
    if (u.kind !== "ok")
      return u.kind === "absent" ? { kind: "absent" } : { kind: "unreadable" };
    let E = u.object.type === "commit" ? Fpt(u.object.body, r) : null;
    return E === null ? { kind: "unreadable" } : { kind: "ok", ...E };
  }
  async function l(f) {
    let u = await e.get(f);
    if (u.kind !== "ok")
      return u.kind === "absent" ? { kind: "absent" } : { kind: "unreadable" };
    let E = u.object.type === "tree" ? Npt(u.object.body, r) : null;
    return E === null ? { kind: "unreadable" } : { kind: "ok", entries: E };
  }
  async function h(f) {
    let u = ye(a, f);
    if (u !== void 0) return { kind: "ok", listing: u };
    let E = new Map(),
      R = new Map(),
      x = new Map(),
      B = 0,
      M = [{ id: f, path: "", depth: 0 }];
    for (let j = M.pop(); j !== void 0; j = M.pop()) {
      if (j.depth > ve) return { kind: "too_large" };
      let N = x.get(j.id);
      if (N === void 0) {
        let D = await l(j.id);
        if (D.kind !== "ok") return { kind: D.kind, id: j.id, at: j.path };
        ((N = D.entries), x.set(j.id, N));
      }
      if (E.size + R.size + M.length + N.length > Se)
        return { kind: "too_large" };
      R.set(j.path, j.id);
      for (let D of N) {
        if (Buffer.byteLength(D.name) > me)
          return { kind: "unreadable", id: j.id, at: j.path };
        let z = j.path === "" ? D.name : j.path + "/" + D.name;
        if (((B += z.length), B > we)) return { kind: "too_large" };
        if (D.kind === "directory")
          M.push({ id: D.id, path: z, depth: j.depth + 1 });
        else E.set(z, { mode: ze[D.kind], blobId: D.id });
      }
    }
    let C = { rootTree: f, files: E, trees: R };
    return (ae(a, f, C, Ne), { kind: "ok", listing: C });
  }
  async function y(f, u) {
    let E = [],
      R = [f];
    for (let x = R.pop(); x !== void 0; x = R.pop()) {
      if (u.has(x)) continue;
      u.add(x);
      let B = await l(x);
      if (B.kind !== "ok") {
        E.push(x);
        continue;
      }
      for (let M of B.entries)
        if (M.kind === "directory") R.push(M.id);
        else if (M.kind !== "gitlink") u.add(M.id);
    }
    return { unread: E };
  }
  async function g(f) {
    let u = new Set(),
      E = new Set();
    for (let R of f) {
      let x = new Set(),
        B = [],
        M = [R];
      for (let C = M.pop(); C !== void 0; C = M.pop()) {
        if (x.has(C)) continue;
        let j = ye(d, C);
        if (j !== void 0) {
          for (let D of j) x.add(D);
          continue;
        }
        x.add(C);
        let N = await i(C);
        if (N.kind !== "ok") {
          B.push(C);
          continue;
        }
        for (let D of N.parents) M.push(D);
      }
      if (B.length === 0) ae(d, R, x, Mt);
      for (let C of x) u.add(C);
      for (let C of B) E.add(C);
    }
    return { reached: u, unread: [...E] };
  }
  async function p(f) {
    let u = ye(o, f);
    if (u !== void 0) return { objects: u, unread: [] };
    let E = new Set(),
      R = await i(f);
    if (R.kind !== "ok") return { objects: E, unread: [f] };
    let { unread: x } = await y(R.tree, E);
    if (x.length === 0) ae(o, f, E, Bt);
    return { objects: E, unread: x };
  }
  return {
    store: e,
    async writeTree(f) {
      let u = Nt(f);
      if (!u.ok) return u;
      let E = new Map(),
        R = await Le(u.node, "", E, e);
      if (!R.ok) return R;
      let x = { rootTree: R.id, files: new Map(f), trees: E };
      return (ae(a, R.id, x, Ne), { ok: !0, rootTree: R.id, listing: x });
    },
    async writeCommit({ tree: f, parents: u, message: E, whenUnix: R }) {
      let x = { ...t, unixSeconds: R, utcOffsetMinutes: 0 },
        B = Ae({ tree: f, parents: u, author: x, committer: x, message: E }, r);
      if (!B.ok) return B;
      return { ok: !0, id: await e.put("commit", B.commit.body) };
    },
    async listingOf(f) {
      let u = await i(f);
      if (u.kind !== "ok") return { kind: u.kind, id: f, at: "commit" };
      let E = await h(u.tree);
      return E.kind === "ok"
        ? { kind: "ok", listing: { commit: f, ...E.listing } }
        : E;
    },
    async treeOf(f) {
      let u = await i(f);
      return u.kind === "ok" ? u.tree : null;
    },
    async objectsToSend({ tip: f, peerHolds: u }) {
      let E = await g(u),
        R = E.reached,
        x = [],
        B = [],
        M = [],
        C = [...E.unread],
        j = new Set(C),
        N = new Set(),
        D = new Set(u),
        z = [f],
        X = [];
      for (let _ = z.shift(); _ !== void 0; _ = z.shift()) {
        if (N.has(_)) continue;
        if (R.has(_)) {
          D.add(_);
          continue;
        }
        N.add(_);
        let O = await i(_);
        if (O.kind !== "ok") {
          C.push(_);
          continue;
        }
        (x.push(_), X.push(O.tree));
        for (let F of O.parents) z.push(F);
      }
      let V = new Set();
      for (let _ of D) {
        let O = await p(_);
        for (let F of O.objects) V.add(F);
        for (let F of O.unread) if (!j.has(F)) (j.add(F), C.push(F));
      }
      let S = [...X];
      for (let _ = S.pop(); _ !== void 0; _ = S.pop()) {
        if (V.has(_) || N.has(_)) continue;
        N.add(_);
        let O = await l(_);
        if (O.kind !== "ok") {
          C.push(_);
          continue;
        }
        B.push(_);
        for (let F of O.entries)
          if (F.kind === "directory") S.push(F.id);
          else if (F.kind !== "gitlink" && !V.has(F.id) && !N.has(F.id))
            if ((N.add(F.id), await e.has(F.id))) M.push(F.id);
            else C.push(F.id);
      }
      let w = [...x, ...B, ...M].reduce(
        (_, O) => _ + (e.deflatedSize(O) ?? 0) + jt,
        It,
      );
      return {
        ids: { commits: x, trees: B, blobs: M },
        bytesEstimate: w,
        missing: C,
      };
    },
    changedPaths(f, u) {
      let E = new Map();
      for (let [R, x] of f.files) {
        let B = u.files.get(R) ?? null;
        if (B === null || B.mode !== x.mode || B.blobId !== x.blobId)
          E.set(R, { before: x, after: B });
      }
      for (let [R, x] of u.files)
        if (!f.files.has(R)) E.set(R, { before: null, after: x });
      return E;
    },
    async isAncestor(f, u) {
      let E = !1,
        R = new Set(),
        x = [u];
      for (let B = x.pop(); B !== void 0; B = x.pop()) {
        if (B === f) return !0;
        if (R.has(B)) continue;
        R.add(B);
        let M = await i(B);
        if (M.kind === "ok") for (let C of M.parents) x.push(C);
        else E = !0;
      }
      return E ? "unknown" : !1;
    },
    async commitParents(f) {
      let u = await i(f);
      return u.kind === "ok"
        ? u.parents
        : u.kind === "absent"
          ? "none"
          : "unknown";
    },
  };
}
function Dt(e) {
  return At.find((t) => ze[t] === e) ?? null;
}
function Nt(e) {
  let t = { entries: new Map() },
    r = e.size,
    a = 0;
  if (r > Se) return { ok: !1, reason: "too_large", path: "" };
  for (let [o, d] of e) {
    if (((a += o.length), a > we))
      return { ok: !1, reason: "too_large", path: o };
    let i = o.split("/");
    if (i.some((g) => g === "" || g === "." || g === ".."))
      return { ok: !1, reason: "bad_path", path: o };
    if (i.length - 1 > ve) return { ok: !1, reason: "too_large", path: o };
    let l = t,
      h = 0;
    for (let g of i.slice(0, -1)) {
      h += (h === 0 ? 0 : 1) + g.length;
      let p = l.entries.get(g);
      if (p === void 0) {
        if (((r += 1), (a += h), r > Se || a > we))
          return { ok: !1, reason: "too_large", path: o };
        let f = { entries: new Map() };
        (l.entries.set(g, f), (l = f));
      } else if ("entries" in p) l = p;
      else return { ok: !1, reason: "path_conflict", path: o };
    }
    let y = i.at(-1) ?? "";
    if (l.entries.has(y)) return { ok: !1, reason: "path_conflict", path: o };
    l.entries.set(y, d);
  }
  return { ok: !0, node: t };
}
async function Le(e, t, r, a) {
  let o = [];
  for (let [l, h] of e.entries) {
    let y = t === "" ? l : t + "/" + l;
    if ("entries" in h) {
      let p = await Le(h, y, r, a);
      if (!p.ok) return p;
      o.push({ name: l, kind: "directory", id: p.id });
      continue;
    }
    let g = Dt(h.mode);
    if (g === null) return { ok: !1, reason: "bad_mode", path: y };
    o.push({ name: l, kind: g, id: h.blobId });
  }
  let d = fFt(o, a.objectFormat);
  if (!d.ok)
    return {
      ok: !1,
      reason: d.reason,
      path: t === "" ? d.name : t + "/" + d.name,
    };
  let i = await a.put("tree", d.tree.body);
  return (r.set(t, i), { ok: !0, id: i });
}
function ye(e, t) {
  let r = e.get(t);
  if (r !== void 0) (e.delete(t), e.set(t, r));
  return r;
}
function ae(e, t, r, a) {
  (e.delete(t), e.set(t, r));
  for (let o of e.keys()) {
    if (e.size <= a) break;
    e.delete(o);
  }
}
import { createHash as He } from "crypto";
import { promisify as Ye } from "util";
import {
  deflate as vt,
  deflateSync as zt,
  inflate,
  inflateSync,
} from "zlib";
var $e = "PACK",
  We = 2,
  le = 12,
  Ue = { commit: 1, tree: 2, blob: 3, tag: 4 },
  Ht = ["commit", "tree", "blob", "tag"],
  Yt = 6,
  $t = 7,
  Ke = 8,
  Wt = 65536,
  Xe = 262144,
  Ve = 64,
  Ut = 16384,
  te = 512,
  Ge = 8388608,
  Kt = Ye(vt),
  Xt = Ye(inflate);
async function Upt(e, t) {
  let r = new Set(),
    a = e.filter((l) => (r.has(l.id) ? !1 : Boolean(r.add(l.id)))),
    o = Buffer.alloc(le);
  (o.write($e, 0, "latin1"),
    o.writeUInt32BE(We, 4),
    o.writeUInt32BE(a.length, 8));
  let d = [o],
    i = He(t).update(o);
  for (let [l, h] of a.entries()) {
    if (l % te === te - 1) await de();
    let y = "deflated" in h ? h.size : h.body.length,
      g = "deflated" in h ? h.deflated : await on(h.body);
    for (let p of [Qt(Ue[h.type], y), g]) (d.push(p), i.update(p));
  }
  return Buffer.concat([...d, i.digest()]);
}
async function B9n(e, { objectFormat: t, maxInflatedBytes: r, maxObjects: a }) {
  try {
    return await Vt(Buffer.from(e.buffer, e.byteOffset, e.length), t, r, a);
  } catch (o) {
    return L("malformed", `unexpected: ${String(o)}`);
  }
}
function L(e, t) {
  return { ok: !1, reason: e, detail: t };
}
async function Vt(e, t, r, a) {
  let o = Q(t);
  if (e.length < le + o || e.toString("latin1", 0, 4) !== $e)
    return L("not_a_pack", "no pack signature");
  if (e.readUInt32BE(4) !== We)
    return L("unsupported_version", `version ${e.readUInt32BE(4)}`);
  let d = e.readUInt32BE(8);
  if (d > a) return L("over_budget", `${d} objects is more than the budget`);
  let i = e.length - o,
    l = He(t);
  for (let f = 0; f < i; f += Ge)
    (l.update(e.subarray(f, Math.min(i, f + Ge))), await de());
  if (!l.digest().equals(e.subarray(i)))
    return L("checksum_mismatch", "the trailer does not hash the pack");
  let h = [],
    y = new Set(),
    g = le,
    p = 0;
  for (let f = 0; f < d; f++) {
    if (f % te === te - 1) await de();
    let u = await Jt(e, g, i, o, r - p);
    if (!u.ok) return u;
    if (u.entry.base.kind === "offset" && !y.has(u.entry.base.offset))
      return L(
        "malformed",
        `an offset delta at ${g} does not point at an object`,
      );
    (y.add(g), h.push(u.entry), (g = u.next), (p += u.inflatedBytes));
  }
  if (g !== i)
    return L("malformed", "bytes between the last object and the trailer");
  return qt(h, t, r - p);
}
async function Jt(e, t, r, a, o) {
  if (t >= r)
    return L("truncated", "the header counts more objects than the pack holds");
  let d = e.readUInt8(t),
    i = (d >> 4) & 7,
    l = ke(e, t + 1, r, (d & 128) !== 0);
  if (l === null) return L("malformed", `an unreadable size at ${t}`);
  let h = (d & 15) + 16 * l.value,
    y = l.next,
    g,
    p = Ht.find((u) => Ue[u] === i);
  if (p !== void 0) g = { kind: "none", type: p };
  else if (i === Yt) {
    let u = en(e, y, r);
    if (u === null || u.value > t - le)
      return L("malformed", `an offset delta at ${t} points outside the pack`);
    ((g = { kind: "offset", offset: t - u.value }), (y = u.next));
  } else if (i === $t) {
    if (y + a > r)
      return L("malformed", `a delta base id at ${t} runs past the pack`);
    ((g = { kind: "id", id: e.toString("hex", y, y + a) }), (y += a));
  } else return L("malformed", `object type ${i} at ${t}`);
  if (h > o) return L("over_budget", "the objects inflate past the budget");
  let f = await Ee(e.subarray(y, r), h);
  if (!f.ok) return L(f.reason, `${f.detail} at ${t}`);
  return {
    ok: !0,
    entry: { offset: t, data: f.data, base: g },
    next: y + f.consumed,
    inflatedBytes: h,
  };
}
async function Ee(e, t) {
  let r = {
      info: !0,
      maxOutputLength: Math.max(1, t),
      chunkSize: Math.max(Ve, t + 1),
    },
    a;
  try {
    a = t < Xe ? inflateSync(e, r) : await Xt(e, r);
  } catch (o) {
    return A(o) === "Z_BUF_ERROR"
      ? L("truncated", "a zlib stream ends early")
      : L("malformed", "a zlib stream does not inflate to its declared size");
  }
  if (!Zt(a) || a.buffer.length !== t)
    return L("malformed", "a zlib stream is shorter than its declared size");
  return { ok: !0, data: a.buffer, consumed: a.engine.bytesWritten };
}
function Zt(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "buffer" in e &&
    Buffer.isBuffer(e.buffer) &&
    "engine" in e &&
    typeof e.engine === "object" &&
    e.engine !== null &&
    "bytesWritten" in e.engine &&
    typeof e.engine.bytesWritten === "number"
  );
}
async function qt(e, t, r) {
  let a = new Map(),
    o = new Map();
  for (let g of e)
    if (g.base.kind === "offset") {
      let p = a.get(g.base.offset) ?? [];
      (p.push(g), a.set(g.base.offset, p));
    } else if (g.base.kind === "id") {
      let p = o.get(g.base.id) ?? [];
      (p.push(g), o.set(g.base.id, p));
    }
  let d = new Map(),
    i = new Map(),
    l = e.filter((g) => g.base.kind === "none"),
    h = r;
  for (let g = l.pop(); g !== void 0; g = l.pop()) {
    if (d.size % te === te - 1) await de();
    let p;
    if (g.base.kind === "none") p = J(g.base.type, g.data, t);
    else {
      let f =
        g.base.kind === "offset" ? d.get(g.base.offset) : i.get(g.base.id);
      if (f === void 0)
        return L(
          "malformed",
          `a delta at ${g.offset} was ready before its base`,
        );
      let u = tn(g.data);
      if (u === null)
        return L("malformed", `an unreadable delta header at ${g.offset}`);
      if (u.resultSize > h)
        return L("over_budget", "the objects inflate past the budget");
      h -= u.resultSize;
      let E = rn(f.body, g.data, u);
      if (E === null)
        return L(
          "malformed",
          `a delta at ${g.offset} does not apply to its base`,
        );
      p = J(f.type, E, t);
    }
    if ((d.set(g.offset, p), !i.has(p.id))) i.set(p.id, p);
    for (let f of a.get(g.offset) ?? []) l.push(f);
    for (let f of o.get(p.id) ?? []) l.push(f);
    (a.delete(g.offset), o.delete(p.id));
  }
  let y = e.map((g) => d.get(g.offset));
  if (!y.every((g) => g !== void 0))
    return L("thin_pack", "a delta rests on an object the pack does not carry");
  return { ok: !0, objects: y };
}
function Qt(e, t) {
  let r = [];
  for (let a = Math.floor(t / 16); a > 0; a = Math.floor(a / 128))
    r.push(a % 128);
  return Buffer.from([
    (e << 4) | (t % 16) | (r.length > 0 ? 128 : 0),
    ...r.map((a, o) => (o < r.length - 1 ? a | 128 : a)),
  ]);
}
function ke(e, t, r, a) {
  let o = 0,
    d = 1,
    i = t,
    l = a;
  for (let h = 0; l; h++) {
    let y = e[i];
    if (y === void 0 || i >= r || h >= Ke) return null;
    ((o += (y & 127) * d), (d *= 128), (i += 1), (l = (y & 128) !== 0));
  }
  return { value: o, next: i };
}
function en(e, t, r) {
  let a = -1,
    o = t;
  for (let d = 0; ; d++) {
    let i = e[o];
    if (i === void 0 || o >= r || d >= Ke) return null;
    if (((a = (a + 1) * 128 + (i & 127)), (o += 1), (i & 128) === 0))
      return { value: a, next: o };
  }
}
function tn(e) {
  let t = ke(e, 0, e.length, !0),
    r = t === null ? null : ke(e, t.next, e.length, !0);
  return t === null || r === null
    ? null
    : { baseSize: t.value, resultSize: r.value, next: r.next };
}
function rn(e, t, r) {
  if (r.baseSize !== e.length) return null;
  let a = Buffer.alloc(r.resultSize),
    o = 0,
    d = r.next;
  while (d < t.length) {
    let i = t.readUInt8(d);
    if (((d += 1), i === 0)) return null;
    if ((i & 128) === 0) {
      if (d + i > t.length || o + i > a.length) return null;
      (t.copy(a, o, d, d + i), (d += i), (o += i));
      continue;
    }
    let l = 0,
      h = 0;
    for (let g = 0; g < 7; g++) {
      if ((i & (1 << g)) === 0) continue;
      let p = t[d];
      if (p === void 0) return null;
      if (((d += 1), g < 4)) l += p * 2 ** (8 * g);
      else h += p * 2 ** (8 * (g - 4));
    }
    let y = h === 0 ? Wt : h;
    if (l + y > e.length || o + y > a.length) return null;
    (e.copy(a, o, l, l + y), (o += y));
  }
  return o === a.length ? a : null;
}
async function on(e) {
  let t = { chunkSize: Math.min(Ut, Math.max(Ve, e.length)) };
  return e.length < Xe ? zt(e, t) : await Kt(e, t);
}
function de() {
  return new Promise((e) => setImmediate(e));
}
import { randomBytes } from "crypto";
import {
  link as an,
  lstat,
  mkdir as ln,
  open as ie,
  readdir,
  realpath,
  rm as dn,
  unlink,
} from "fs/promises";
import { join as ee } from "path";
import { promisify as cn } from "util";
import { deflate as un, deflateSync as fn } from "zlib";
var Re = "store",
  nt = /^([A-Za-z0-9][A-Za-z0-9_-]{0,127})\.(\d{6,12})-([0-9a-f]{8})\.seg$/,
  rt = 1,
  jbe = 134217728,
  ot = /^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/,
  ne = Buffer.from("ccobjs", "latin1"),
  Je = ne.length + 2,
  it = { sha1: 1, sha256: 2 },
  st = 197,
  at = { commit: 1, tree: 2, blob: 3, tag: 4 },
  mn = ["commit", "tree", "blob", "tag"],
  lt = 5,
  Te = 64,
  dt = 8,
  pn = 2 + 2 * dt + 32,
  gn = 1048576,
  hn = 262144,
  bn = 6,
  yn = 999999999999,
  Sn = 4,
  wn = ".dropped-",
  kn = 384,
  En = 448,
  _n = cn(un);
function Tn(e, t) {
  return ot.test(t) ? ee(e, t, Re) : null;
}
async function j9n({
  root: e,
  sessionId: t,
  budgetBytes: r,
  objectFormat: a = "sha1",
  signal: o,
}) {
  let d = Tn(e, t);
  if (d === null)
    return {
      kind: "unreadable",
      detail: "not an id a directory can be named after",
    };
  let i;
  try {
    if (
      (await ln(d, { recursive: !0, mode: En }),
      (i = ee(await realpath(e), t, Re)),
      (await realpath(d)) !== i)
    )
      return {
        kind: "unreadable",
        detail: "the session directory is not a plain directory under the root",
      };
  } catch (f) {
    return {
      kind: "unreadable",
      detail: "cannot create the session directory: " + String(f),
    };
  }
  let l = await xn(e, t);
  if (l === null)
    return { kind: "unreadable", detail: "cannot list the root directory" };
  let h = new Map(),
    y = new Set();
  for (let f of l) {
    if (o?.aborted) return { kind: "unreadable", detail: "aborted" };
    await Bn(f, a, h, y);
  }
  n(
    "dir-sync object store: opened with " +
      String(h.size) +
      " objects in " +
      String(l.length) +
      " segments, " +
      String(l.reduce((f, u) => f + u.bytes, 0)) +
      " bytes on disk",
  );
  let g = 0;
  for (let f of l)
    if (f.own) g = Math.max(g, Number(nt.exec(f.name)?.[2] ?? 0));
  let p = g + 1;
  return {
    kind: "ok",
    store: Rn({
      objectFormat: a,
      budgetBytes: r,
      ownDirectory: i,
      sessionId: t,
      nextSequence: p,
      segments: l,
      index: h,
      adopted: y,
    }),
  };
}
function W9n({
  objectFormat: e = "sha1",
  budgetBytes: t = Number.POSITIVE_INFINITY,
} = {}) {
  let r = new Map();
  function a() {
    let i = 0;
    for (let l of r.values()) i += l.deflated.length;
    return i;
  }
  async function o(i) {
    let l = r.get(i);
    if (l === void 0) return "absent";
    let h = await ue(l.deflated, l.size);
    return h !== null && J(l.type, h, e).id === i
      ? { object: l, body: h }
      : "corrupt";
  }
  return {
    store: {
      objectFormat: e,
      has: (i) => Promise.resolve(r.has(i)),
      hasHere: (i) => Promise.resolve(r.has(i)),
      async get(i) {
        let l = await o(i);
        return l === "absent" || l === "corrupt"
          ? { kind: l }
          : { kind: "ok", object: { type: l.object.type, body: l.body } };
      },
      async getDeflated(i) {
        let l = await o(i);
        return l === "absent" || l === "corrupt"
          ? { kind: l }
          : { kind: "ok", object: l.object };
      },
      deflatedSize: (i) => r.get(i)?.deflated.length ?? null,
      async put(i, l) {
        let { id: h } = J(i, l, e);
        if (!r.has(h))
          r.set(h, { id: h, type: i, size: l.length, deflated: await ut(l) });
        return h;
      },
      async putDeflated(i, l, h, y) {
        if (r.has(i)) return !0;
        let g = z4(i, e) ? await ue(y, h) : null;
        if (g === null || J(l, g, e).id !== i) return !1;
        return (r.set(i, { id: i, type: l, size: h, deflated: y }), !0);
      },
      hold: (i) => Promise.resolve(i.filter((l) => !r.has(l))),
      stats: () =>
        Promise.resolve({
          objects: r.size,
          bytes: a(),
          sessionBytes: a(),
          budgetBytes: t,
          segments: 0,
        }),
      wouldExceed: (i) => a() + i > t,
      flush: () => Promise.resolve(),
      close: () => Promise.resolve(),
    },
    objects: () => [...r.values()],
  };
}
function Rn({
  objectFormat: e,
  budgetBytes: t,
  ownDirectory: r,
  sessionId: a,
  nextSequence: o,
  segments: d,
  index: i,
  adopted: l,
}) {
  let h = Promise.resolve(),
    y = null,
    g = !1,
    p = !1,
    f = !1,
    u = new Set(),
    E = new Set();
  function R(S) {
    let w = h.then(S, S);
    return (
      (h = w.catch(() => {
        return;
      })),
      w
    );
  }
  function x(S, w) {
    let _ = i.get(S);
    if (_ === void 0) return;
    if (_ === w) {
      if (w.next === null) i.delete(S);
      else i.set(S, w.next);
      return;
    }
    for (let O = _; O.next !== null; O = O.next)
      if (O.next === w) {
        O.next = w.next;
        return;
      }
  }
  function B(S, w) {
    let _ = i.get(S);
    if (_ === void 0 || _ === w) return;
    for (let O = _; O.next !== null; O = O.next)
      if (O.next === w) {
        ((O.next = w.next), (w.next = _), i.set(S, w));
        return;
      }
  }
  async function M(S) {
    if (f) return "absent";
    let w = [];
    for (let F = i.get(S) ?? null; F !== null; F = F.next) w.push(F);
    let _ = !1;
    for (let F of w) {
      if (F.segment.vanished) continue;
      let I = await Cn(F);
      if (I === "vanished") In(F.segment, i);
      else if (I === "unreadable") _ = !0;
      else {
        let H = await ue(I, F.size);
        if (H !== null && J(F.type, H, e).id === S)
          return (
            u.delete(S),
            E.add(S),
            B(S, F),
            { entry: F, deflated: I, body: H }
          );
        ((_ = !0), x(S, F));
      }
    }
    let O = i.get(S);
    if (O !== void 0 && !w.includes(O)) return M(S);
    if (_ && O !== void 0) u.add(S);
    return _ ? "corrupt" : "absent";
  }
  async function C() {
    if (g)
      throw Error(
        "this session can append nothing more in this process: its segment could not be made or mended",
      );
    if (((y ??= await Pn(r, a, Math.min(o, yn), e)), y === null))
      throw ((g = !0), Error("cannot create a segment to append to"));
    if (!d.includes(y.segment)) (d.unshift(y.segment), (p = !0));
    return y;
  }
  function j(S) {
    let w = i.get(S);
    return w !== void 0 && w.segment.own && !w.kept;
  }
  function N(S) {
    for (let w = i.get(S) ?? null; w !== null; w = w.next)
      if (w.segment.own && !w.kept) return !0;
    return !1;
  }
  function D(S) {
    return R(async () => {
      if (f || l.has(S) || j(S)) return;
      let w = await C(),
        _ = Ze({ type: "adopt", size: 0, deflatedSize: 0, id: S });
      try {
        await Oe(w.handle, _, w.offset);
      } catch (O) {
        throw (
          await w.handle.truncate(w.offset).catch(() => {
            g = !0;
          }),
          O
        );
      }
      ((w.offset += _.length), (w.segment.bytes = w.offset), l.add(S));
    });
  }
  function z(S, w, _, O, F = !1) {
    return R(async () => {
      if (f) throw Error("the object store is closed");
      if (i.get(S)?.segment.own && !u.has(S)) return;
      if (O.length > jbe) throw Error("an object larger than the store takes");
      let I = await C(),
        H = Ze({ type: w, kept: F, size: _, deflatedSize: O.length, id: S });
      try {
        await Oe(I.handle, Buffer.concat([H, O]), I.offset);
      } catch (fe) {
        throw (
          await I.handle.truncate(I.offset).catch(() => {
            g = !0;
          }),
          fe
        );
      }
      let q = I.offset + H.length;
      ((I.offset = q + O.length),
        (I.segment.bytes = I.offset),
        i.set(S, {
          segment: I.segment,
          type: w,
          size: _,
          dataOffset: q,
          deflatedSize: O.length,
          kept: F,
          next: i.get(S) ?? null,
        }),
        u.delete(S),
        E.add(S));
    });
  }
  async function X(S) {
    if (f) return [...S];
    let w = [],
      _ = new Map();
    for (let O of S) {
      let F = i.get(O);
      if (F === void 0) {
        w.push(O);
        continue;
      }
      if (F.segment.own && !u.has(O)) continue;
      let I = await M(O);
      if (I === "absent" || I === "corrupt") w.push(O);
      else if (!I.entry.segment.secured) {
        let H = _.get(I.entry.segment) ?? [];
        (H.push(O), _.set(I.entry.segment, H));
      }
    }
    for (let [O, F] of _) {
      if (!O.name.startsWith(a + ".") && (await An(O, r))) {
        p = !0;
        continue;
      }
      for (let I of F) {
        let H = await M(I);
        if (H === "absent" || H === "corrupt") w.push(I);
        else if (!H.entry.segment.secured)
          try {
            await z(I, H.entry.type, H.entry.size, H.deflated, !0);
          } catch (q) {
            (n("dir-sync object store: cannot carry a copy over: " + String(q)),
              w.push(I));
          }
      }
    }
    return w;
  }
  function V(S) {
    let w = new Map();
    for (let O of d) if (!O.vanished && S(O)) w.set(O.inode, O.bytes);
    let _ = 0;
    for (let O of w.values()) _ += O;
    return _;
  }
  return {
    objectFormat: e,
    has: (S) => Promise.resolve(!f && i.has(S)),
    hasHere: (S) =>
      Promise.resolve(!f && !u.has(S) && (N(S) || (l.has(S) && i.has(S)))),
    async get(S) {
      let w = await M(S);
      return w === "absent" || w === "corrupt"
        ? { kind: w }
        : { kind: "ok", object: { type: w.entry.type, body: w.body } };
    },
    async getDeflated(S) {
      let w = await M(S);
      return w === "absent" || w === "corrupt"
        ? { kind: w }
        : {
            kind: "ok",
            object: {
              id: S,
              type: w.entry.type,
              size: w.entry.size,
              deflated: w.deflated,
            },
          };
    },
    deflatedSize: (S) => (f ? null : (i.get(S)?.deflatedSize ?? null)),
    async put(S, w) {
      if (f) throw Error("the object store is closed");
      if (w.length > jbe) throw Error("an object larger than the store takes");
      let { id: _ } = J(S, w, e),
        O = i.get(_);
      if (
        O === void 0 ||
        u.has(_) ||
        (O.segment.own
          ? !E.has(_) && typeof (await M(_)) !== "object"
          : (await X([_])).length > 0)
      )
        await z(_, S, w.length, await ut(w));
      else if (!j(_))
        await D(_).catch((F) => {
          n("dir-sync object store: adoption not recorded: " + String(F));
        });
      return _;
    },
    async putDeflated(S, w, _, O) {
      if (f) throw Error("the object store is closed");
      if (
        !z4(S, e) ||
        !Number.isSafeInteger(_) ||
        _ < 0 ||
        _ > jbe ||
        O.length > jbe
      )
        return !1;
      let F = await ue(O, _);
      if (F === null || J(w, F, e).id !== S) return !1;
      let I = i.get(S);
      if (
        I !== void 0 &&
        !u.has(S) &&
        (I.segment.own
          ? typeof (await M(S)) === "object"
          : (await X([S])).length === 0)
      ) {
        if (!j(S))
          await D(S).catch((H) => {
            n("dir-sync object store: adoption not recorded: " + String(H));
          });
        return !0;
      }
      return (await z(S, w, _, O), !0);
    },
    hold: X,
    async stats() {
      return (
        await h,
        {
          objects: i.size,
          bytes: V(() => !0),
          sessionBytes: V((S) => S.secured),
          budgetBytes: t,
          segments: new Set(d.filter((S) => !S.vanished).map((S) => S.inode))
            .size,
        }
      );
    },
    wouldExceed: (S) => V(() => !0) + S > t,
    flush: () =>
      R(async () => {
        if (f) return;
        if ((await y?.handle.sync(), p)) ((p = !1), await Nn(r));
      }),
    close: () =>
      R(async () => {
        if (f) return;
        ((f = !0),
          await y?.handle.sync().catch(() => {
            return;
          }),
          await y?.handle.close().catch(() => {
            return;
          }));
      }),
  };
}
async function xn(e, t) {
  let r, a;
  try {
    ((a = await realpath(e)),
      (r = (await readdir(e, { withFileTypes: !0 }))
        .filter((i) => i.isDirectory() && ot.test(i.name))
        .map((i) => i.name)
        .toSorted(
          (i, l) => Number(l === t) - Number(i === t) || (i < l ? -1 : 1),
        )));
  } catch {
    return null;
  }
  await Fn(a);
  let o = [],
    d = new Map();
  for (let i of r) {
    let l = ee(a, i, Re),
      h,
      y;
    try {
      if ((await realpath(l)) !== l) continue;
      y = et(await lstat(l, { bigint: !0 }));
      let p = (await readdir(l, { withFileTypes: !0 }))
          .filter((u) => u.isFile() && nt.test(u.name))
          .map((u) => u.name)
          .toSorted(),
        f = t + ".";
      h =
        i === t
          ? [
              ...p.filter((u) => u.startsWith(f)).toReversed(),
              ...p.filter((u) => !u.startsWith(f)),
            ]
          : p;
    } catch (p) {
      if (!W(p))
        n(
          "dir-sync object store: cannot list a session directory: " +
            String(p),
        );
      continue;
    }
    let g = [];
    for (let p of h) {
      let f = ee(l, p);
      try {
        let u = await lstat(f, { bigint: !0 }),
          E = oe(u);
        if (E !== "")
          g.push({ name: p, path: f, inode: E, bytes: Number(u.size) });
      } catch {
        continue;
      }
    }
    try {
      if ((await realpath(l)) !== l || et(await lstat(l, { bigint: !0 })) !== y)
        continue;
    } catch {
      continue;
    }
    for (let { name: p, path: f, inode: u, bytes: E } of g) {
      let R = d.get(u);
      if (R !== void 0) {
        R.paths.push(f);
        continue;
      }
      let x = {
        name: p,
        paths: [f],
        inode: u,
        bytes: E,
        secured: i === t,
        own: i === t && p.startsWith(t + "."),
        vanished: !1,
      };
      (d.set(u, x), o.push(x));
    }
  }
  return o;
}
async function Fn(e) {
  try {
    let t = (await readdir(e, { withFileTypes: !0 })).filter((r) =>
      r.name.startsWith(wn),
    );
    await Promise.all(
      t.map((r) =>
        dn(ee(e, r.name), { recursive: !0, force: !0 }).catch(() => {
          return;
        }),
      ),
    );
  } catch {}
}
async function Pn(e, t, r, a) {
  let o =
      t +
      "." +
      String(r).padStart(bn, "0") +
      "-" +
      randomBytes(4).toString("hex") +
      ".seg",
    d = ee(e, o),
    i;
  try {
    i = await ie(d, "wx", kn);
  } catch (l) {
    return (
      n("dir-sync object store: cannot create a segment: " + String(l)),
      null
    );
  }
  try {
    if ((await realpath(d)) !== d)
      throw Error("the new segment is not inside the session directory");
    let l = Buffer.concat([ne, Buffer.from([rt, it[a]])]);
    await Oe(i, l, 0);
    let h = await i.stat({ bigint: !0 });
    return {
      segment: {
        name: o,
        paths: [d],
        inode: oe(h),
        bytes: l.length,
        secured: !0,
        own: !0,
        vanished: !1,
      },
      handle: i,
      offset: l.length,
    };
  } catch (l) {
    return (
      n("dir-sync object store: cannot write a new segment: " + String(l)),
      await i.close().catch(() => {
        return;
      }),
      await unlink(d).catch(() => {
        return;
      }),
      null
    );
  }
}
async function Oe(e, t, r) {
  let a = 0;
  while (a < t.length) {
    let { bytesWritten: o } = await e.write(t, a, t.length - a, r + a);
    if (o <= 0) throw Error("the segment file accepted no bytes");
    a += o;
  }
}
async function Bn(e, t, r, a) {
  let o = await ct(e);
  if (o === "vanished" || o === "unreadable") return;
  let d = Q(t),
    i = Buffer.alloc(0),
    l = 0,
    h = 0;
  async function y(g, p) {
    if (h >= l && h + p <= l + i.length) return i.subarray(h - l, h - l + p);
    let f = Math.min(Math.max(p, gn), e.bytes - h);
    if (f < p) return null;
    let u = Buffer.alloc(f),
      E = 0;
    while (E < f) {
      let { bytesRead: R } = await g.read(u, E, f - E, h + E);
      if (R === 0) break;
      E += R;
    }
    return ((i = u.subarray(0, E)), (l = h), E >= p ? i.subarray(0, p) : null);
  }
  try {
    let g = await y(o, Je);
    if (
      g === null ||
      !g.subarray(0, ne.length).equals(ne) ||
      g[ne.length] !== rt ||
      g[ne.length + 1] !== it[t]
    )
      return;
    h = Je;
    while (h < e.bytes) {
      let p = Math.min(pn, e.bytes - h),
        f = await y(o, p),
        u = f === null ? null : jn(f, d);
      if (u === null || h + u.headerBytes + u.deflatedSize > e.bytes) return;
      let E = h + u.headerBytes;
      if (u.type === "adopt") {
        if (e.own) a.add(u.id);
      } else
        Mn(r, u.id, {
          segment: e,
          type: u.type,
          size: u.size,
          dataOffset: E,
          deflatedSize: u.deflatedSize,
          kept: u.kept,
          next: null,
        });
      h = E + u.deflatedSize;
    }
  } catch (g) {
    n(
      "dir-sync object store: a segment could not be scanned whole: " +
        String(g),
    );
  } finally {
    await o.close().catch(() => {
      return;
    });
  }
}
function Mn(e, t, r) {
  let a = e.get(t);
  if (a === void 0) {
    e.set(t, r);
    return;
  }
  let o = a,
    d = 1;
  while (o.next !== null) ((o = o.next), (d += 1));
  if (d >= Sn) return;
  o.next = r;
}
function jn(e, t) {
  if (e.length < 2 || e[0] !== st) return null;
  let r = (e[1] ?? 0) & ~Te,
    a = ((e[1] ?? 0) & Te) !== 0,
    o = r === lt ? (a ? void 0 : "adopt") : mn.find((l) => at[l] === r),
    d = o === void 0 ? null : Qe(e, 2),
    i = d === null ? null : Qe(e, d.next);
  if (
    o === void 0 ||
    d === null ||
    i === null ||
    d.value > jbe ||
    i.value > jbe ||
    (o === "adopt" && (d.value !== 0 || i.value !== 0)) ||
    i.next + t > e.length
  )
    return null;
  return {
    type: o,
    kept: a,
    size: d.value,
    deflatedSize: i.value,
    id: e.toString("hex", i.next, i.next + t),
    headerBytes: i.next + t,
  };
}
function Ze({ type: e, kept: t = !1, size: r, deflatedSize: a, id: o }) {
  return Buffer.concat([
    Buffer.from([st, (e === "adopt" ? lt : at[e]) | (t ? Te : 0)]),
    qe(r),
    qe(a),
    Buffer.from(o, "hex"),
  ]);
}
function qe(e) {
  let t = [],
    r = e;
  do {
    let a = r % 128;
    ((r = Math.floor(r / 128)), t.push(r > 0 ? a | 128 : a));
  } while (r > 0);
  return Buffer.from(t);
}
function Qe(e, t) {
  let r = 0,
    a = 1;
  for (let o = 0; o < dt; o++) {
    let d = e[t + o];
    if (d === void 0) return null;
    if (((r += (d & 127) * a), (a *= 128), (d & 128) === 0))
      return { value: r, next: t + o + 1 };
  }
  return null;
}
async function ct(e) {
  while (e.paths[0] !== void 0)
    try {
      let t = await ie(e.paths[0], getSafeReadOpenFlags());
      if (oe(await t.stat({ bigint: !0 })) !== e.inode)
        return (
          await t.close().catch(() => {
            return;
          }),
          "unreadable"
        );
      return t;
    } catch (t) {
      let r = A(t);
      if (r === "EMFILE" || r === "ENFILE") throw t;
      if (r !== "ENOENT") return "unreadable";
      e.paths.shift();
    }
  return ((e.vanished = !0), "vanished");
}
async function Cn(e) {
  let t = await ct(e.segment);
  if (t === "vanished" || t === "unreadable") return t;
  try {
    let r = Buffer.alloc(e.deflatedSize),
      a = 0;
    while (a < e.deflatedSize) {
      let { bytesRead: o } = await t.read(
        r,
        a,
        e.deflatedSize - a,
        e.dataOffset + a,
      );
      if (o === 0) return "unreadable";
      a += o;
    }
    return r;
  } catch {
    return "unreadable";
  } finally {
    await t.close().catch(() => {
      return;
    });
  }
}
function In(e, t) {
  e.vanished = !0;
  for (let [r, a] of t) {
    let o = [];
    for (let i = a; i !== null; i = i.next) if (i.segment !== e) o.push(i);
    o.forEach((i, l) => {
      i.next = o[l + 1] ?? null;
    });
    let [d] = o;
    if (d === void 0) t.delete(r);
    else if (d !== a) t.set(r, d);
  }
}
async function An(e, t) {
  let r = e.paths[0];
  if (r === void 0) return !1;
  let a = ee(t, e.name);
  try {
    let o = await ie(r, getSafeReadOpenFlags());
    try {
      if (oe(await o.stat({ bigint: !0 })) !== e.inode) return !1;
      await an(r, a);
    } finally {
      await o.close().catch(() => {
        return;
      });
    }
  } catch (o) {
    return (
      n(
        "dir-sync object store: cannot link a segment, copying its records instead: " +
          String(o),
      ),
      !1
    );
  }
  try {
    if (oe(await lstat(a, { bigint: !0 })) !== e.inode)
      return (
        await unlink(a).catch(() => {
          return;
        }),
        !1
      );
  } catch {
    return !1;
  }
  return (e.paths.unshift(a), (e.secured = !0), await Dn(a), !0);
}
function et(e) {
  return String(e.dev) + ":" + String(e.ino);
}
function oe(e) {
  return e.isFile() ? String(e.dev) + ":" + String(e.ino) : "";
}
async function Dn(e) {
  try {
    let t = await ie(e, getSafeReadOpenFlags());
    try {
      await t.sync();
    } finally {
      await t.close();
    }
  } catch {}
}
async function ue(e, t) {
  let r = await Ee(e, t);
  return r.ok && r.consumed === e.length ? r.data : null;
}
async function ut(e) {
  return e.length < hn ? fn(e) : await _n(e);
}
async function Nn(e) {
  try {
    let t = await ie(e, "r");
    try {
      await t.sync();
    } finally {
      await t.close();
    }
  } catch {}
}
import { mkdir as vn, open as zn } from "fs/promises";
import { dirname } from "path";
var xe = 1,
  mt = 262144,
  pt = 67108864,
  Gn = 384,
  Hn = 448,
  Yn = createLazyValue(() =>
    uW([
      s().min(1),
      T().int().nonnegative(),
      T(),
      T(),
      T().int().nonnegative(),
      T().nonnegative(),
      T(),
      s().regex(GIT_OBJECT_ID_REGEX),
    ]),
  ),
  $n = createLazyValue(() => c({ version: k(xe), entries: v(se()).max(mt) }));
async function Bpt(e, { maxEntries: t = mt } = {}) {
  let r = new Map();
  for (let [a, o, d, i, l, h, y, g] of await Wn(e))
    r.set(a, {
      stat: { size: o, mtimeMs: d, mode: l, observedAtMs: y },
      ctimeMs: i,
      ino: h,
      blobId: g,
      touched: !1,
    });
  return {
    lookup(a, o) {
      let d = r.get(a);
      if (
        d === void 0 ||
        d.stat.size !== o.size ||
        d.stat.mtimeMs !== o.mtimeMs ||
        d.ctimeMs !== o.ctimeMs ||
        d.stat.mode !== o.mode ||
        d.ino !== o.ino ||
        !isMtimeSettled(d.stat)
      )
        return null;
      return ((d.touched = !0), d.blobId);
    },
    remember(
      a,
      { size: o, mtimeMs: d, ctimeMs: i, mode: l, ino: h, observedAtMs: y },
      g,
    ) {
      let p = { size: o, mtimeMs: d, mode: l, observedAtMs: y };
      if (isMtimeSettled(p))
        r.set(a, { stat: p, ctimeMs: i, ino: h, blobId: g, touched: !0 });
      else r.delete(a);
    },
    forget(a) {
      r.delete(a);
    },
    get size() {
      return r.size;
    },
    async save() {
      let a = [...r]
          .toSorted(([, d], [, i]) => Number(i.touched) - Number(d.touched))
          .slice(0, t)
          .map(([d, { stat: i, ctimeMs: l, ino: h, blobId: y }]) => [
            d,
            i.size,
            i.mtimeMs,
            l,
            i.mode,
            h,
            i.observedAtMs,
            y,
          ]),
        o = b({ version: xe, entries: a });
      while (Buffer.byteLength(o) > pt && a.length > 0)
        ((a.length = Math.floor(a.length / 2)),
          (o = b({ version: xe, entries: a })));
      try {
        return (
          await vn(dirname(e), { recursive: !0, mode: Hn }),
          await writeFileAtomic(e, o, Gn),
          !0
        );
      } catch (d) {
        return (n("dir-sync stat cache: not saved: " + String(d)), !1);
      }
    },
  };
}
async function Wn(e) {
  try {
    let t = await zn(e, getSafeReadOpenFlags());
    try {
      let r = await t.stat();
      if (!r.isFile() || r.size > pt) return [];
      let a = await readExactBytes(t, r.size),
        o = $n().safeParse(xt(a.toString("utf8"), !1));
      return o.success
        ? o.data.entries.flatMap((d) => {
            let i = Yn().safeParse(d);
            return i.success ? [i.data] : [];
          })
        : [];
    } finally {
      await t.close();
    }
  } catch {
    return [];
  }
}
var gt = "main",
  jpt = { name: "Claude Code file sync", email: "noreply@anthropic.com" },
  G9n = "refs/seed/root",
  yze = 104857600,
  Wpt = 2147483648,
  Wbe = {
    repoPass: "tengu_dir_sync_folder_repo",
    seed: "tengu_dir_sync_folder_seed",
  };
var Un = 3;
function ht({
  wanted: e,
  known: t,
  peer: r,
  peerHasBlob: a,
  sizeOf: o,
  outOfSight: d,
}) {
  let i = new Map(),
    l = new Map(),
    h = (p, f, u) => {
      if (
        (i.set(p, { mode: f.mode, blobId: f.blobId }),
        a(f.blobId) || l.has(f.blobId))
      )
        return;
      l.set(f.blobId, { path: p, bytes: u });
    };
  for (let [p, f] of [...e].toSorted(Kn)) h(p, f, f.bytes);
  let y = [],
    g = dedupe([...t.keys(), ...r.keys()])
      .filter((p) => !e.has(p) && d(p) !== !1)
      .toSorted();
  for (let p of g) {
    let f = t.get(p),
      u = r.get(p),
      E = f === void 0 ? null : o(f.blobId),
      R = d(p) === "excluded";
    if (!R && f !== void 0 && (a(f.blobId) || E !== null)) {
      h(p, f, E ?? 0);
      continue;
    }
    if (u !== void 0) h(p, u, 0);
    if (!R && f !== void 0 && f.blobId !== u?.blobId)
      y.push({ path: p, kept: u === void 0 ? "none" : "held" });
  }
  return {
    commitFiles: i,
    heldBack: [],
    demoted: y,
    bytesPlanned: [...l.values()].reduce((p, { bytes: f }) => p + f, 0),
    largest: [...l.values()]
      .toSorted((p, f) => f.bytes - p.bytes || compareByPath(p, f))
      .slice(0, Un),
  };
}
function Kn(e, t) {
  return compareByPath({ path: e[0] }, { path: t[0] });
}
var Xn = 33188,
  Vn = 33261,
  Jn = 64,
  Zn = 8,
  qn = 65536,
  Qn = 16777216,
  er = 4,
  tr = 1048576,
  nr = 160,
  bt = "sync";
async function Man({
  folder: e,
  realRoot: t,
  repo: r,
  statCache: a,
  known: o,
  peer: d,
  peerHasBlob: i,
  budgetBytes: l,
  withheldOf: h,
  through: y = null,
  signal: g,
  now: p = Date.now,
}) {
  let f = p(),
    u = await Tze(e);
  if (u.kind === "unusable")
    return K("unreadable", `the .gitignore in this folder ${$an(u)}`);
  let E = await Uan({
    root: e,
    ignores: wze(u.lines, { ignoreCase: iOe(e) }),
    withheldOf: h,
    signal: g,
  });
  if (!E.ok)
    switch (E.reason) {
      case "aborted":
        return K("aborted", "the sync point was abandoned");
      case "too_many_files":
        return {
          kind: "refused",
          reason: "too_large",
          detail: "this folder holds more files than sync lists",
          totalBytes: 0,
          capBytes: l,
          largest: [],
        };
      case "root_unreadable":
      case "ignore_unreadable":
        return K("unreadable", "this folder cannot be read");
    }
  let { listing: R } = E,
    x = R.files.flatMap((U) => {
      let Z = rr(U.path);
      return Z === null ? [] : [{ path: U.path, reason: Z }];
    }),
    B = new Set(x.map(({ path: U }) => U)),
    M = R.files.filter((U) => !B.has(U.path)),
    C = p(),
    j = await cr({
      candidates: M,
      folder: e,
      realRoot: t,
      statCache: a,
      through: y,
      signal: g,
    });
  if (isSignalAborted(g)) return K("aborted", "the sync point was abandoned");
  let N = p() - C,
    D = new Map(j.skipped.map((U) => [U.path, U.reason])),
    z = ur(R, B, D),
    X = new Map(
      [...j.files].map(([U, Z]) => [
        U,
        { mode: or(Z.stat.mode), blobId: Z.blobId, bytes: Z.stat.size },
      ]),
    ),
    V = p(),
    S = ht({
      wanted: X,
      known: o,
      peer: d,
      peerHasBlob: i,
      sizeOf: (U) => r.store.deflatedSize(U),
      outOfSight: z,
    }),
    w = p() - V,
    _ = ir(l, S.commitFiles.size);
  if (S.bytesPlanned > _) {
    let U = S.largest[0] ?? { path: "(none)", bytes: 0 };
    return {
      kind: "refused",
      reason: "too_large",
      detail: `${U.path} (largest, ${String(U.bytes)} bytes): ${String(S.bytesPlanned)} bytes of changed files exceed the ${String(l)}-byte cap`,
      totalBytes: S.bytesPlanned,
      capBytes: l,
      largest: S.largest,
    };
  }
  for (let { path: U, kept: Z } of S.demoted)
    n(
      `folder sync: ${U} cannot keep what was last sent this pass; the tree carries ${Z === "held" ? "the cloud session's copy" : "no entry"} for it`,
    );
  let O = lr(S.commitFiles, X);
  for (let U of O.dropped)
    n(
      `folder sync: ${U} kept from an earlier state collides with a directory or file of the same name now; left out of the tree`,
    );
  let F = await fr({
    plan: O.files,
    wanted: X,
    sighted: j.files,
    known: o,
    peer: d,
    statCache: a,
    peerHasBlob: i,
    repo: r,
    folder: e,
    realRoot: t,
    through: y,
    signal: g,
  });
  if (isSignalAborted(g)) return K("aborted", "the sync point was abandoned");
  let I = await r.writeTree(F.commitFiles);
  if (!I.ok)
    return K(
      "git_error",
      `a tree for this folder could not be built (${I.reason} at ${I.path})`,
    );
  if (j.hashed > 0 || F.slipped.length > 0) await a.save();
  let H = F.slipped.toSorted(compareByPath),
    q = gr(R, x, D),
    fe = {
      listedPaths: R.files.length,
      hashedFiles: j.hashed,
      hashMs: N,
      planMs: w,
      heldBack: H,
      withheldCounts: q,
      blobsStored: F.blobsStored,
      bytesPlanned: S.bytesPlanned,
      totalMs: p() - f,
    };
  return {
    kind: "built",
    rootTree: I.rootTree,
    listing: I.listing,
    commitFiles: F.commitFiles,
    heldBack: H,
    withheldCounts: q,
    withheld: pr(R, x),
    stats: { paths: F.commitFiles.size, bytes: S.bytesPlanned, ms: p() - f },
    report: fe,
  };
}
function q9n({
  folder: e,
  realRoot: t,
  repo: r,
  statCache: a,
  start: o,
  agreedOf: d,
  lastSentCommit: i = async () => null,
  ackedOf: l,
  maxBytes: h,
  withheldOf: y,
  anchor: g = async () => null,
  onPass: p,
  now: f = Date.now,
}) {
  let u = null,
    E = null;
  return async (R) => {
    let { basis: x, signal: B } = R,
      M = R.alsoParents ?? [];
    try {
      let C = [];
      if (x === null)
        for (let w of ((await l?.()) ?? []).slice(0, er)) {
          let _ = await r.commitParents(w);
          if (_ !== "none" && _ !== "unknown") C.push(w);
        }
      let j = await sr(r, [
        o.pin,
        ...[...C].reverse(),
        ...(x === null ? [] : [...M, x]),
      ]);
      if (j.kind === "absent")
        return j.commit === o.pin
          ? K(
              "git_error",
              "this folder session's starting snapshot is not in its local store; start a new session from this folder",
            )
          : K("basis_not_held", `${j.commit} is not held here`);
      let N = new Set(
          j.listings.flatMap((w) => [...w.files.values()].map((_) => _.blobId)),
        ),
        D = await ar(r, j.listings, { basis: x, acked: x === null ? [] : M }),
        z = await i();
      if (z !== null && (E === null || E.worktreeCommit !== z)) {
        let w = await r.listingOf(z),
          _ = await r.commitParents(z);
        if (w.kind !== "ok")
          return K(
            "git_error",
            "what this machine last sent could not be read back from its local store",
          );
        E = {
          files: w.listing.files,
          basis: Array.isArray(_) ? (_[2] ?? null) : null,
          worktreeCommit: z,
        };
      }
      let X = E?.files ?? new Map(),
        V =
          d === void 0
            ? E !== null && E.basis === x
              ? new Map([...D, ...X])
              : new Map([...X, ...D])
            : await d();
      if (V === null)
        return K(
          "git_error",
          "what this machine last sent could not be read back",
        );
      let S = await g(B);
      try {
        let w = await Man({
          folder: e,
          realRoot: t,
          repo: r,
          statCache: a,
          known: V,
          peer: D,
          peerHasBlob: (I) => N.has(I),
          budgetBytes: h,
          withheldOf: y(),
          through: S,
          signal: B,
          now: f,
        });
        if (w.kind === "refused") return K(w.reason, w.detail);
        p?.(w.report);
        let _ = [o.pin, ...(x === null ? [] : [x, ...M])],
          O = [w.rootTree, ..._].join(" "),
          F =
            u !== null && u.key === O
              ? u
              : await dr(r, w.rootTree, o.pin, _.slice(1), f);
        if (F === null)
          return K("git_error", "the snapshot commits could not be written");
        return (
          (u = { key: O, ...F }),
          (E = {
            files: w.commitFiles,
            basis: x,
            worktreeCommit: F.worktreeCommit,
          }),
          await r.store.flush(),
          {
            kind: "snapshot",
            snapshot: {
              head: o.pin,
              branch: gt,
              indexCommit: F.indexCommit,
              worktreeCommit: F.worktreeCommit,
              withheld: w.withheld,
              stats: w.stats,
            },
          }
        );
      } finally {
        await S?.close();
      }
    } catch (C) {
      if (isSignalAborted(B)) return K("aborted", "the sync point was abandoned");
      return (
        n(`folder sync: snapshot failed: ${String(C)}`),
        K("git_error", "this folder could not be written into its local store")
      );
    }
  };
}
function rr(e) {
  if (e.includes("\uFFFD")) return "name_not_utf8";
  let t = e.split("/"),
    r = t.at(-1) ?? "";
  if (ge(r)) return "gitmodules";
  if (he(r)) return "gitattributes";
  return t.some(
    (a, o) =>
      pe(
        {
          name: a,
          kind: o < t.length - 1 ? "directory" : "file",
          id: "1".repeat(40),
        },
        "sha1",
      ) !== null,
  )
    ? "name_refused_by_git"
    : null;
}
function K(e, t) {
  return { kind: "refused", reason: e, detail: t };
}
function or(e) {
  return getCurrentPlatform() !== "windows" && (e & Jn) !== 0 ? Vn : Xn;
}
function ir(e, t) {
  let r = Math.min(tr, Math.floor(e / 16));
  return Math.max(0, e - r - nr * t);
}
async function sr(e, t) {
  let r = [];
  for (let a of t) {
    let o = await e.listingOf(a);
    if (o.kind !== "ok") return { kind: "absent", commit: a };
    r.push(o.listing);
  }
  return { kind: "ok", listings: r };
}
function Fe(e) {
  return e.at(-1)?.files ?? new Map();
}
async function ar(e, t, { basis: r, acked: a }) {
  if (r === null || a.length === 0) return Fe(t);
  for (let [o, d] of a.entries())
    if ((await e.isAncestor(d, r)) === !1) return t[1 + o]?.files ?? Fe(t);
  return Fe(t);
}
function lr(e, t) {
  let r = (l) => (t instanceof Map || t instanceof Set ? t.has(l) : !1),
    a = new Set();
  for (let l of e.keys())
    for (let h = l.indexOf("/"); h >= 0; h = l.indexOf("/", h + 1))
      a.add(l.slice(0, h));
  let o = [],
    d = new Map(),
    i = [];
  for (let [l, h] of e) {
    if (a.has(l)) {
      if (r(l)) (i.push(`${l}/`), d.set(l, h));
      else o.push(l);
      continue;
    }
    d.set(l, h);
  }
  if (i.length > 0) {
    for (let l of [...d.keys()])
      if (i.some((h) => l.startsWith(h))) (d.delete(l), o.push(l));
  }
  return { files: d, dropped: o.toSorted() };
}
async function dr(e, t, r, a, o) {
  let d = Math.floor(o() / 1000),
    i = await e.writeCommit({
      tree: t,
      parents: [r],
      message: bt,
      whenUnix: d,
    });
  if (!i.ok) return null;
  let l = await e.writeCommit({
    tree: t,
    parents: dedupe([r, i.id, ...a]),
    message: bt,
    whenUnix: d,
  });
  return l.ok ? { indexCommit: i.id, worktreeCommit: l.id } : null;
}
async function cr({
  candidates: e,
  folder: t,
  realRoot: r,
  statCache: a,
  through: o,
  signal: d,
}) {
  let i = 0,
    l = createConcurrencyLimiter(Zn, async (y) => {
      let g = y.ctimeMs !== void 0 && y.ino !== void 0,
        p = {
          size: y.size,
          mtimeMs: y.mtimeMs,
          ctimeMs: y.ctimeMs ?? 0,
          mode: y.mode,
          ino: y.ino ?? 0,
        },
        f = g ? a.lookup(y.path, p) : null;
      if (f !== null)
        return {
          kind: "file",
          file: { stat: y, blobId: f, kept: null },
          hashed: !1,
        };
      if (isSignalAborted(d)) return { kind: "skip", path: y.path, reason: "unreadable" };
      let u = await readSeedFile(t, r, y.path, o);
      if (u.kind === "skip")
        return { kind: "skip", path: y.path, reason: u.skipped.reason };
      let E = computeGitBlobId(u.content),
        R = { ...y, size: u.content.length, mode: u.mode },
        x = { ...p, size: R.size, mode: u.mode, observedAtMs: y.observedAtMs };
      if (g) a.remember(y.path, x, E);
      let B = u.content.length <= qn && i + u.content.length <= Qn;
      if (B) i += u.content.length;
      return {
        kind: "file",
        file: { stat: R, blobId: E, kept: B ? u.content : null },
        hashed: !0,
      };
    }),
    h = await Promise.all(e.map(l));
  return {
    files: new Map(
      h.flatMap((y) => (y.kind === "file" ? [[y.file.stat.path, y.file]] : [])),
    ),
    skipped: h.flatMap((y) =>
      y.kind === "skip" ? [{ path: y.path, reason: y.reason }] : [],
    ),
    hashed: countMatching(h, (y) => y.kind === "file" && y.hashed),
  };
}
function ur(e, t, r) {
  let a = new Set(
      e.skipped.filter((p) => !yt.has(p.reason)).map((p) => p.path),
    ),
    o = [
      ...e.ignoredDirectories,
      ...e.unlistedDirectories.filter((p) => a.has(p)),
    ],
    d = new Set([...a, ...e.ignoredFiles, ...t, ...o]),
    i = new Set([
      ...e.skipped.filter((p) => yt.has(p.reason)).map((p) => p.path),
      ...r.keys(),
    ]),
    l = e.unlistedDirectories.filter((p) => !a.has(p)),
    h = new Set(o),
    y = new Set(l),
    g = (p, f) => {
      for (let u = f.lastIndexOf("/"); u > 0; u = f.lastIndexOf("/", u - 1))
        if (p.has(f.slice(0, u))) return !0;
      return !1;
    };
  return (p) => {
    if (d.has(p) || g(h, p)) return "excluded";
    if (i.has(p) || y.has(p) || g(y, p)) return "transient";
    return !1;
  };
}
async function fr({
  plan: e,
  wanted: t,
  sighted: r,
  known: a,
  peer: o,
  statCache: d,
  peerHasBlob: i,
  repo: l,
  folder: h,
  realRoot: y,
  through: g,
  signal: p,
}) {
  let f = new Map(e),
    u = [],
    E = 0,
    R = new Set();
  for (let [B, M] of e) {
    let C = t.get(B);
    if (C === void 0 || C.blobId !== M.blobId) continue;
    if (R.has(M.blobId) || i(M.blobId) || (await l.store.hasHere(M.blobId)))
      continue;
    if (isSignalAborted(p)) break;
    let N = r.get(B)?.kept ?? null ?? (await mr(h, y, B, g));
    if (N === null || computeGitBlobId(N) !== M.blobId) {
      d.forget(B);
      let D = a.get(B),
        z =
          D !== void 0 && (i(D.blobId) || (await l.store.hasHere(D.blobId)))
            ? D
            : o.get(B);
      if (z === void 0) f.delete(B);
      else f.set(B, { mode: z.mode, blobId: z.blobId });
      u.push({ path: B, bytes: C.bytes });
      continue;
    }
    (await l.store.put("blob", N), R.add(M.blobId), E++);
  }
  let x = await l.store.hold([...f.values()].map((B) => B.blobId));
  if (x.length > 0)
    n(
      `folder sync: ${String(x.length)} object(s) the tree names could not be secured in this session's store`,
    );
  return { commitFiles: f, slipped: u, blobsStored: E };
}
async function mr(e, t, r, a) {
  let o = await readSeedFile(e, t, r, a);
  return o.kind === "read" ? o.content : null;
}
var yt = new Set(["unreadable", "changed", "too_large"]),
  wt = new Set(["sensitive", "sensitive_tracked"]),
  kt = new Set(["read_denied", "rules_unreadable"]),
  Et = new Set([
    "symlink",
    "not_regular_file",
    "nested_repository",
    "unsafe_name",
  ]);
function pr(e, t) {
  let r = (a) => e.skipped.filter((o) => a.has(o.reason)).map((o) => o.path);
  return {
    credentialNamed: r(wt),
    filterAttributed: [],
    hardLinked: r(new Set(["hard_link"])),
    notFiles: [...r(Et), ...t.map(({ path: a }) => a)].toSorted(),
    readDenied: r(kt),
    tooLarge: r(new Set(["too_large"])),
  };
}
function gr(e, t, r) {
  let a = new Map(),
    o = (d) => {
      a.set(d, (a.get(d) ?? 0) + 1);
    };
  for (let { reason: d } of e.skipped) {
    let i = St(d);
    if (i !== null) o(i);
  }
  for (let { reason: d } of t) o(d);
  for (let d of r.values()) o(St(d) ?? "unreadable");
  return a;
}
function St(e) {
  if (wt.has(e)) return "credential_name";
  if (kt.has(e)) return "read_denied";
  if (Et.has(e) || e === "hard_link") return "not_regular_file";
  if (e === "too_large") return "too_large";
  if (e === "unreadable" || e === "changed") return "unreadable";
  return null;
}
import { join as Pe } from "path";
var z9n = "trash",
  hr = "stat-cache.json";
async function Gpt(e, t) {
  return br(getProjectDir(await canonicalizePath(e, createHoverRestOptions(t))));
}
function br(e) {
  return Pe(e, CLOUD_SNAPSHOTS_DIR_NAME, FOLDER_SYNC_DIR_NAME);
}
function V9n(e, t) {
  return Pe(e, sanitizePathSegment(toInfraSessionId(t)));
}
function qpt(e) {
  return Pe(e, hr);
}
export {
  z4,
  fFt,
  Npt,
  Fpt,
  $pt,
  Upt,
  B9n,
  jbe,
  j9n,
  W9n,
  Bpt,
  jpt,
  G9n,
  yze,
  Wpt,
  Wbe,
  Man,
  q9n,
  z9n,
  Gpt,
  V9n,
  qpt,
};

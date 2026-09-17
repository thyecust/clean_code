// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 204 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { yt, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { io } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { xk, pH } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { SO, uk } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-x4qgycdj.js";
import {
  $pt,
  Upt,
  W9n,
  Bpt,
  jpt,
  G9n,
  yze,
  Wpt,
  Wbe,
  Man,
  Gpt,
  qpt,
} from "../目录同步(dir-sync)/chunk-gbhqtdpn.js";
import "./chunk-ht8ydg1v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37w8v4sh.js";
import { Cze } from "../Git-Worktree/chunk-v967hawf.js";
import "./chunk-tqwnv5vj.js";
import "./chunk-eg4wmaq4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ca2zxbyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vcb9z55e.js";
import { formatFileSize } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
var E = 3;
async function D({
  folder: t,
  realRoot: s,
  maxBytes: d = yze,
  storeBudgetBytes: p = Wpt,
  statCache: m,
  withheldOf: w,
  signal: g,
  now: a = Date.now,
}) {
  let _ = a();
  try {
    let { store: r } = W9n({ objectFormat: "sha1" }),
      c = $pt({ store: r, identity: jpt });
    await using f = await SO(uk(), { gitRoot: t, realRoot: s }).catch(
      (y) => (n(`[folderSeed] tree anchor not opened (${l(y)})`), null),
    );
    let e = await Man({
      folder: t,
      realRoot: s,
      repo: c,
      statCache: m,
      through: f,
      known: new Map(),
      peer: new Map(),
      peerHasBlob: () => !1,
      budgetBytes: d,
      withheldOf: w ?? pH(t, { realRoot: s }),
      ...(g !== void 0 && { signal: g }),
      now: a,
    });
    if (e.kind === "refused")
      return e.reason === "too_large"
        ? {
            kind: "refused",
            reason: "too_large",
            detail:
              e.totalBytes === 0 && e.largest.length === 0
                ? "it holds more files than a cloud session can start with from a folder. Remove or ignore what the session does not need (a .gitignore in this folder is honoured) and start again"
                : O(e),
          }
        : { kind: "refused", reason: e.reason, detail: B(e.detail) };
    if (e.heldBack.length > 0) {
      let y = e.heldBack
        .slice(0, E)
        .map((F) => B(F.path))
        .join(", ");
      return {
        kind: "refused",
        reason: "busy",
        detail: `${e.heldBack.length} ${x(e.heldBack.length, "file")} changed while ${x(e.heldBack.length, "it was", "they were")} being read (${y}${e.heldBack.length > E ? ", \u2026" : ""}); let whatever is writing to this folder finish and start again`,
      };
    }
    if (e.stats.bytes > p)
      return {
        kind: "refused",
        reason: "too_large",
        detail: O({ totalBytes: e.stats.bytes, capBytes: p, largest: [] }),
      };
    let b = await c.writeCommit({
      tree: e.rootTree,
      parents: [],
      message: "sync 0",
      whenUnix: Math.floor(a() / 1000),
    });
    if (!b.ok)
      return {
        kind: "refused",
        reason: "internal",
        detail: `the seed commit could not be written (${b.reason})`,
      };
    let o = await c.objectsToSend({ tip: b.id, peerHolds: [] });
    if (o.missing.length > 0)
      return {
        kind: "refused",
        reason: "internal",
        detail: `${o.missing.length} seed objects missing from the build`,
      };
    let k = await T(r, [...o.ids.commits, ...o.ids.trees, ...o.ids.blobs]);
    if (k === null)
      return {
        kind: "refused",
        reason: "internal",
        detail: "a seed object could not be read back",
      };
    let j = Buffer.concat([
        Cze({
          version: 2,
          capabilities: [],
          prerequisites: [],
          refs: [{ name: G9n, id: b.id }],
          packOffset: 0,
        }),
        await Upt(k, r.objectFormat),
      ]),
      C = new Set(o.ids.blobs);
    return {
      kind: "built",
      seed: {
        content: j,
        seedCommit: b.id,
        seedTree: e.rootTree,
        files: e.commitFiles.size,
        bytes: k.filter((y) => C.has(y.id)).reduce((y, F) => y + F.size, 0),
        withheld: e.withheldCounts,
        buildMs: a() - _,
        objects: k,
      },
    };
  } catch (r) {
    if (yt(r) || g?.aborted === !0)
      return {
        kind: "refused",
        reason: "aborted",
        detail: "the create was cancelled",
      };
    return (logError(r), { kind: "refused", reason: "internal", detail: l(r) });
  }
}
function O(t) {
  let s = t.largest.slice(0, E).map((d) => `${B(d.path)} (${formatFileSize(d.bytes)})`);
  return `its files come to ${formatFileSize(t.totalBytes)}, which with packaging does not fit the ${formatFileSize(t.capBytes)} a cloud session can start with from a folder${s.length > 0 ? `; the largest: ${s.join(", ")}` : ""}. Remove or ignore what the session does not need (a .gitignore in this folder is honoured) and start again`;
}
async function T(t, s) {
  let d = await Promise.all(s.map((m) => t.getDeflated(m))),
    p = d.flatMap((m) => (m.kind === "ok" ? [m.object] : []));
  return p.length === d.length ? p : null;
}
function v(t) {
  return `Cannot start a cloud session from this folder: ${t}.`;
}
function B(t) {
  return io(t, { maxCodeUnits: 512 });
}
var M = {
    unreadable: "its files could not all be read",
    busy: "its files kept changing while they were read",
  },
  R = "packaging its files failed unexpectedly";
async function shipFolderSeed({
  folder: t,
  signal: s,
  onProgress: d,
  maxBytes: p = yze,
  now: m = Date.now,
  storageV5: w,
}) {
  let g = (a, _, r) => {
    if (s.aborted) return { kind: "aborted" };
    return (
      i(Wbe.seed, r),
      d?.({ kind: "bundle_failed", fallback: null }),
      { kind: "refused", line: v(a), reason: _ }
    );
  };
  try {
    let a = await xk(t);
    if (a === null)
      return g("it could not be resolved on disk", "folder_seed_failed", {
        outcome: S("unresolvable"),
      });
    d?.({ kind: "bundling", rerouted: !1, folder: !0 });
    let _ = await Bpt(qpt(await Gpt(t, w))),
      r = p,
      c = await D({
        folder: t,
        realRoot: a,
        statCache: _,
        maxBytes: r,
        signal: s,
        now: m,
      });
    if (c.kind === "refused") {
      n(`[folderSeed] refused (${c.reason}): ${c.detail}`);
      let o = c.reason;
      return g(
        o !== "internal" && c.detail !== "" ? c.detail : (M[o] ?? R),
        o === "too_large" ? "folder_too_large" : "folder_seed_failed",
        { outcome: S("refused"), reason: fromEnum(o) },
      );
    }
    let { seed: f } = c;
    if (f.content.length > r)
      return g(
        `the packaged folder came to ${formatFileSize(f.content.length)}, over the ${formatFileSize(r)} a session may start from`,
        "folder_too_large",
        { outcome: S("refused"), reason: S("too_large") },
      );
    d?.({ kind: "bundled", sizeBytes: f.content.length, scope: "squashed" });
    let { content: e, ...b } = f;
    return (
      i(Wbe.seed, {
        outcome: S("built"),
        files: f.files,
        bytes: f.bytes,
        bundle_bytes: f.content.length,
        withheld: [...f.withheld.values()].reduce((o, k) => o + k, 0),
        build_ms: f.buildMs,
      }),
      { kind: "built", seed: b }
    );
  } catch (a) {
    if (yt(a) || s.aborted) return { kind: "aborted" };
    return (logError(a), g(R, "folder_seed_failed", { outcome: S("threw") }));
  }
}
export { shipFolderSeed };

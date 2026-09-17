// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { resolvePath, getFileMtimeMs } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { buildAgentArtifactKey, getArtifactState } from "./chunk-rr78st95.js";
import { observationStamp, observedWithoutSource, compareArtifactVersions } from "./chunk-01ymf0ar.js";
import { estimateTokensForContent, getDefaultFileReadingLimits, removeWebFetchSavedFile } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { createHash } from "crypto";
import { readFile, stat as G, unlink } from "fs/promises";
function versionHeldBy(e, r, n) {
  return (
    e.ver === r && (e.observers === void 0 || Object.hasOwn(e.observers, n))
  );
}
function L(e, r, n) {
  return (
    versionHeldBy(e.getArtifactReadObservation(r), n, e.agentId ?? "main") &&
    !observedWithoutSource(e.agentId, r, n)
  );
}
async function registerHandoverRead(
  {
    filepath: e,
    persistId: r,
    html: n,
    slug: t,
    ver: i,
    confirmsResend: d,
    batch: o,
    heldSkipsRead: c,
  },
  l,
) {
  let a = l.agentId ?? "main",
    F = l.fileReadingLimits?.maxTokens ?? getDefaultFileReadingLimits().maxTokens,
    b = !0,
    m = 0,
    f = 0;
  while (f <= n.length) {
    let M = n.indexOf(
        `
`,
        f,
      ),
      P = M === -1 ? n.length : M;
    if (estimateTokensForContent(n.slice(f, P), "html") > F / 4) {
      b = !1;
      break;
    }
    (m++, (f = P + 1));
  }
  let T = L(l, t, i),
    R = T ? "held" : "unverifiable",
    H = resolvePath(e),
    s = await getFileMtimeMs(H).catch(() => {
      return;
    });
  if (s === void 0) return R;
  let C = createHash("sha256").update(n).digest("hex"),
    p = getArtifactState().pendingHandoverReads,
    v = p.get(H),
    u =
      v !== void 0 && v.slug === t && v.ver === i && v.contentHash === C
        ? v
        : void 0;
  if (u !== void 0) u.mtimeMs = s;
  if (!b) return R;
  let B = T && c;
  if (u !== void 0) {
    if ((u.handedTo.add(a), B)) return (u.completedBy.add(a), "held");
    if (d) u.confirmsResendFor.set(a, o ?? "");
    else u.confirmsResendFor.delete(a);
    return (
      u.completedBy.delete(a),
      u.unrecordableBy.has(a) ? "unverifiable" : "pending"
    );
  }
  let k = new Set();
  for (let [M, P] of p)
    if (P.slug === t) {
      for (let V of P.unrecordableBy) k.add(V);
      p.delete(M);
    }
  let A = !n.endsWith(`
`);
  return (
    p.set(H, {
      slug: t,
      ver: i,
      mtimeMs: s,
      totalLines: m,
      unterminated: A,
      contentHash: C,
      bytes: Buffer.byteLength(n),
      requiredLines: A ? m : m - 1,
      linesReturned: new Map(),
      linesPrepared: new Map(),
      completedBy: new Set(B ? [a] : []),
      handedTo: new Set([a]),
      unrecordableBy: k,
      persistId: r,
      confirmsResendFor: new Map(d ? [[a, o ?? ""]] : []),
    }),
    B ? "held" : k.has(a) ? "unverifiable" : "pending"
  );
}
async function handoverPersistTarget(e, r, n) {
  for (let [t, i] of getArtifactState().pendingHandoverReads)
    if (i.slug === e && i.ver === r) {
      let d = await getFileMtimeMs(t).catch(() => {
        return;
      });
      return d !== void 0 && d !== i.mtimeMs
        ? { persistId: `${n}-${Date.now().toString(36)}`, editedCopy: t }
        : { persistId: i.persistId };
    }
  return { persistId: n };
}
async function refreshHandoverCopy(e, r) {
  let n = resolvePath(e),
    t = getArtifactState().pendingHandoverReads,
    i = t.get(n);
  if (i === void 0) return;
  if (createHash("sha256").update(r).digest("hex") !== i.contentHash) {
    t.delete(n);
    return;
  }
  let d = await getFileMtimeMs(n).catch(() => {
    return;
  });
  if (d !== void 0) i.mtimeMs = d;
}
function N(e, r, n) {
  for (let [t, i] of getArtifactState().pendingHandoverReads)
    if (
      i.slug === r &&
      (n === void 0 || i.ver === n) &&
      i.handedTo.has(e) &&
      !i.completedBy.has(e) &&
      !i.unrecordableBy.has(e)
    )
      return [t, i];
  return;
}
function readPendingFor(e, r, n) {
  return N(e ?? "main", r, n) !== void 0;
}
function O(e, r, n, t = !1) {
  let i = e.agentId ?? "main",
    d = N(i, r, n);
  if (d === void 0) return;
  let o = d[1];
  return q(o, e) || (!t && L(e, r, o.ver)) ? void 0 : d;
}
function J(e, r, n, { ignoreHold: t = !1 } = {}) {
  let i = O(e, r, n, t);
  return i === void 0 ? void 0 : S(i[0], i[1], e.agentId);
}
async function checkedHandoverCoverage(e, r, n) {
  let t = O(e, r, n);
  if (t === void 0) return;
  let [i, d] = t,
    o;
  try {
    o = (await getFileMtimeMs(i)) === d.mtimeMs ? "intact" : "changed";
  } catch (c) {
    o = W(c) ? "changed" : "unknown";
  }
  return { ...S(i, d, e.agentId), file: o };
}
function S(e, r, n) {
  return {
    path: e,
    slug: r.slug,
    ver: r.ver,
    lines: r.requiredLines,
    unterminated: r.unterminated,
    unread: U(r.linesReturned.get(n ?? "main") ?? [], r.requiredLines),
  };
}
function handoverReadConfirmsResend(e, r, n) {
  let t = O(e, r, n);
  return t !== void 0 && D(t[1], e.agentId, e.agentId ?? "main") === void 0;
}
function describeHandoverCoverage({ lines: e, unterminated: r, unread: n }) {
  let t = n.reduce((i, [d, o]) => i + o - d + 1, 0);
  return (
    `${e} ${pluralize(e, "line")}` +
    (r
      ? `; the last has no trailing newline, so \`wc -l\` reports ${e - 1} \u2014 Read through line ${e} and leave the file as it is`
      : "") +
    (t > 0 && t < e
      ? `; you have not yet Read ${pluralize(t, "line")} ${n.map(([i, d]) => (i === d ? `${i}` : `${i}-${d}`)).join(", ")}`
      : "")
  );
}
function handoverCoverageNote(e, r, n, t) {
  let i = J(e, r, n, t);
  return i === void 0 ? "" : ` (${describeHandoverCoverage(i)})`;
}
function U(e, r) {
  let n = [],
    t = 0;
  for (let [i, d] of I(e)) {
    if (i > t) n.push([t + 1, Math.min(i, r)]);
    if (((t = Math.max(t, d)), t >= r)) break;
  }
  if (t < r) n.push([t + 1, r]);
  return n;
}
async function discardHandoverCopy(e, r) {
  (getArtifactState().pendingHandoverReads.delete(resolvePath(e)),
    removeWebFetchSavedFile(r, e),
    await unlink(e).catch(() => {}));
}
var w = {
  artifactRead: void 0,
  remaining: void 0,
  commit: () => {
    return;
  },
};
async function prepareHandoverRead(e, r, n, t) {
  try {
    let i = getArtifactState().pendingHandoverReads,
      d = i.get(e),
      o = r.agentId ?? "main";
    if (
      d === void 0 ||
      n === void 0 ||
      t.lineCount <= 0 ||
      d.completedBy.has(o)
    )
      return w;
    if (Math.floor(t.mtimeMs) !== d.mtimeMs || t.totalLines !== d.totalLines)
      return (logFeatureSad("artifact_handover_read", "file_changed"), w);
    if (j(d, e, r)) return w;
    let c = [t.firstLine, t.firstLine + t.lineCount],
      l = await X(e, d.bytes, d.contentHash);
    if (l === "changed")
      return (i.delete(e), logFeatureSad("artifact_handover_read", "file_changed"), w);
    if (l === "unreadable") logFeatureSad("artifact_handover_read", "file_unreadable");
    let a = l === "holds",
      F = (d.linesPrepared.get(o) ?? []).filter((s) => s.messageId === n),
      b = I([...(d.linesReturned.get(o) ?? []), ...F.map((s) => s.range), c]),
      m = E(b, d.requiredLines),
      f = { messageId: n, range: c };
    d.linesPrepared.set(o, [...F, f]);
    let T = () => {
        try {
          let s = d.linesPrepared.get(o) ?? [];
          if (i.get(e) !== d || d.completedBy.has(o) || !s.includes(f)) return;
          let C = s.filter((v) => v !== f);
          if (C.length > 0) d.linesPrepared.set(o, C);
          else d.linesPrepared.delete(o);
          let p = I([...(d.linesReturned.get(o) ?? []), c]);
          if (!a || !E(p, d.requiredLines)) {
            d.linesReturned.set(o, p);
            return;
          }
          return (
            d.linesReturned.delete(o),
            d.completedBy.add(o),
            Q(d, e, r, n, o) ? { slug: d.slug, ver: d.ver } : void 0
          );
        } catch (s) {
          logError(s);
          return;
        }
      },
      R = !d.unrecordableBy.has(o),
      H = R && d.handedTo.has(o) && !L(r, d.slug, d.ver);
    return {
      artifactRead: m && a && R ? { slug: d.slug, ver: d.ver } : void 0,
      remaining:
        m || !H
          ? void 0
          : { ...S(e, d, r.agentId), unread: U(b, d.requiredLines) },
      commit: T,
    };
  } catch (i) {
    return (logError(i), w);
  }
}
function q(e, r) {
  let n = r.getArtifactReadObservation(e.slug).ver;
  return n !== void 0 && n !== e.ver && (compareArtifactVersions(n, e.ver) ?? 0) > 0;
}
function j(e, r, n) {
  if (q(e, n))
    return (
      getArtifactState().pendingHandoverReads.delete(r),
      logFeatureSad("artifact_handover_read", "superseded"),
      !0
    );
  return !1;
}
function I(e) {
  let r = e.map((t) => [t[0], t[1]]).sort((t, i) => t[0] - i[0]),
    n = [];
  for (let t of r) {
    let i = n.at(-1);
    if (i !== void 0 && t[0] <= i[1]) i[1] = Math.max(i[1], t[1]);
    else n.push(t);
  }
  return n;
}
function E(e, r) {
  let n = e[0];
  return n !== void 0 && n[0] <= 0 && n[1] >= r;
}
function D(e, r, n) {
  let t = getArtifactState().refusedPublishBodies.get(buildAgentArtifactKey(r, e.slug)),
    i = e.confirmsResendFor.get(n);
  return i !== void 0 && (t === void 0 || t.batch !== i) ? void 0 : t;
}
function Q(e, r, n, t, i) {
  if (j(e, r, n)) return !1;
  let d = D(e, n.agentId, i),
    o = d?.observedFrom;
  try {
    n.setArtifactReadVersion(e.slug, e.ver, observationStamp(n.agentId, t));
  } finally {
    if (d !== void 0)
      if (o === void 0) delete d.observedFrom;
      else d.observedFrom = o;
  }
  if (versionHeldBy(n.getArtifactReadObservation(e.slug), e.ver, i))
    return (logFeatureOk("artifact_handover_read"), !0);
  return (
    e.unrecordableBy.add(i),
    logFeatureSad("artifact_handover_read", "seed_not_persisted"),
    !1
  );
}
async function X(e, r, n) {
  try {
    return (await G(e)).size === r &&
      createHash("sha256")
        .update(await readFile(e))
        .digest("hex") === n
      ? "holds"
      : "changed";
  } catch (t) {
    return W(t) ? "changed" : "unreadable";
  }
}
export { versionHeldBy, registerHandoverRead, handoverPersistTarget, refreshHandoverCopy, readPendingFor, checkedHandoverCoverage, handoverReadConfirmsResend, describeHandoverCoverage, handoverCoverageNote, discardHandoverCopy, prepareHandoverRead };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { isSafeRelativePath, GIT_OBJECT_ID_REGEX, GIT_SHA1_HEX_REGEX } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hashSha256 } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { MAX_JOURNAL_ENTRIES, MAX_ETAG_LENGTH, SHA256_HEX_RE, getAgreedBlobSchema } from "../文件同步-Sync/sync-journal.js";
import { s, T, v, c, $e, Ko, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { createHash } from "crypto";
var o = 1,
  l = 2,
  d = 3,
  r = 200000 + MAX_JOURNAL_ENTRIES;
function inferHashAlgorithmFromDigestLength(e) {
  return e.length === 64 ? "sha256" : "sha1";
}
var u = ["index", "seed", "pushed", "pulled", "conflict_copy", "rebuilt"],
  p = 2000,
  b = 8;
function stripSentField(e) {
  let { sent: t, ...n } = e;
  return n;
}
var g = createLazyValue(() =>
    Ko("kind", [
      c({ kind: k("sha256"), sha256: s().regex(SHA256_HEX_RE) }),
      c({ kind: k("git_blob"), blobId: s().regex(GIT_SHA1_HEX_REGEX) }),
      c({ kind: k("unknown") }),
    ]),
  ),
  a = createLazyValue(() => s().refine(isSafeRelativePath)),
  h = createLazyValue(() =>
    c({
      agreed: g(),
      stat: c({
        size: T().int().nonnegative(),
        mtimeMs: T(),
        mode: T().int().nonnegative(),
        observedAtMs: T(),
      }).nullable(),
      etag: s().min(1).max(MAX_ETAG_LENGTH).nullable(),
      origin: X(u),
      sent: v(s().regex(SHA256_HEX_RE)).max(b).optional(),
      gen: T().int().nonnegative().optional(),
      peerGen: T().int().nonnegative().optional(),
      trashedAt: T().int().nonnegative().optional(),
    }),
  ),
  z = createLazyValue(() =>
    c({
      published: v(
        c({
          path: a(),
          agreed: getAgreedBlobSchema(),
          generation: T().int().nonnegative(),
          unheard: k(!0).optional(),
          peerSeen: T().int().nonnegative().optional(),
        }),
      ).max(r),
      withheld: v(a()).max(r),
      pending: v(
        c({
          path: a(),
          agreed: getAgreedBlobSchema(),
          unjudged: T().int().nonnegative().optional(),
        }),
      ).max(r),
      judged: v(c({ path: a(), generation: T().int().nonnegative() })).max(r),
    }),
  ),
  S = createLazyValue(() =>
    c({
      version: $e([k(o), k(l), k(d)]),
      sessionId: s().min(1),
      armedAtMs: T().int().nonnegative(),
      pinnedTreeish: s().regex(GIT_OBJECT_ID_REGEX).nullable(),
      publishedGeneration: T().int().nonnegative(),
      publishedEtag: s().min(1).max(MAX_ETAG_LENGTH).nullable(),
      peerGenerationSeen: T().int().nonnegative(),
      excludedPaths: v(a()).max(r),
      uploadOnly: k(!0).optional(),
      withheldPaths: v(a()).max(r).optional(),
      detachedPaths: v(a()).max(r).optional(),
      tracksDependencyDirs: k(!0)
        .optional()
        .catch(void 0),
      lostWithDisk: v(a()).max(r).optional(),
      tombstones: z().optional(),
      entries: v(h().extend({ path: a() }))
        .max(r)
        .refine((e) => new Set(e.map((t) => t.path)).size === e.length),
    }),
  );
function parseSessionSyncState(e, t) {
  let n = S().safeParse(e);
  return n.success && n.data.sessionId === t ? n.data : null;
}
var y = ["seed_pending", "seed_incomplete"],
  _ = createLazyValue(() => c({ note: X(y), sessionId: s().min(1) }));
function parseSessionSeedNote(e, t) {
  let n = _().safeParse(e);
  return n.success && n.data.sessionId === t ? n.data.note : null;
}
function computeGitBlobId(e, t = "sha1") {
  return createHash(t).update(`blob ${e.length}\x00`).update(e).digest("hex");
}
function computeContentDigests(e) {
  return { sha256: hashSha256(e), gitBlobId: computeGitBlobId(e) };
}
function matchesAgreedDigest(e, t) {
  switch (e.kind) {
    case "sha256":
      return e.sha256 === t.sha256;
    case "git_blob":
      return e.blobId === t.gitBlobId;
    case "unknown":
      return !1;
  }
}
function isMtimeSettled(e) {
  return e.mtimeMs <= e.observedAtMs - p;
}
export { inferHashAlgorithmFromDigestLength, stripSentField, parseSessionSyncState, parseSessionSeedNote, computeGitBlobId, computeContentDigests, matchesAgreedDigest, isMtimeSettled };

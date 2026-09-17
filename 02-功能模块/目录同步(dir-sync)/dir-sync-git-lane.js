// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { The } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { SHA256_HEX_REGEX, hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import {
  xne,
  bde,
  wKe,
  TKe,
  XVn,
  $ht,
  Uht,
  Bht,
  nn,
  tj,
  qO,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { on, I9 } from "../Git-Worktree/chunk-v967hawf.js";
import { basename, dirname, isAbsolute, join as p } from "path";
var R = "side.git",
  m = /^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/,
  g = /^[a-z][a-z0-9-]{0,31}(?:\/[a-z0-9][a-z0-9_-]{0,63})?$/;
function getSideGitDirPath(o) {
  return p(o, The, R);
}
function buildSessionRefName(o, a) {
  let e = `${tj}${o}/${a}`;
  return m.test(o) && g.test(a) && qO(e) ? e : null;
}
async function listSessionRefs(o, a) {
  if (!m.test(a)) return null;
  let e = `${tj}${a}/`,
    u = await on(o, ["for-each-ref", "--format=%(objectname) %(refname)", e]);
  if (u.exitCode !== 0) return null;
  let t = u.stdout
    .split(
      `
`,
    )
    .filter((i) => i !== "")
    .map((i) => {
      let [c = "", r = ""] = i.split(" ");
      return { name: r, id: c };
    })
    .filter((i) => i.name.startsWith(e) && qO(i.name));
  return t.every((i) => nn.test(i.id)) ? t : null;
}
var UNREADABLE_CARRIER_STATUS = 422,
  d = { kind: "failed", status: UNREADABLE_CARRIER_STATUS };
function createDirSyncJournalTransport({
  client: o,
  direct: a,
  inboundMaxBytes: e = I9,
  stallMs: u,
  restartPauseMs: t,
}) {
  let i = {
      put: (r, l, s, f) =>
        o.putLaneRow(r, l, { ifMatchSha256: s, signal: f, oneTryIfLong: !0 }),
      get: (r, l, s) => o.getLaneFile(r, l, s),
    },
    c = $ht();
  return {
    putOutbound: (r, { ifMatchEtag: l, signal: s }) =>
      Uht({
        client: a,
        rel: wKe,
        content: r,
        ifMatchEtag: l,
        signal: s,
        side: "laptop",
        memo: c,
        ...(u !== void 0 && { stallMs: u }),
        ...(t !== void 0 && { restartPauseMs: t }),
      }),
    async getInbound(r, l) {
      switch (r.via) {
        case "direct": {
          let s = await Bht({
            client: a,
            rel: TKe,
            object: r,
            maxBytes: e,
            signal: l,
            ...(u !== void 0 && { stallMs: u }),
          });
          return s.kind === "impossible"
            ? d
            : s.kind === "unsupported" ||
                (s.kind === "failed" && s.status === UNREADABLE_CARRIER_STATUS)
              ? { kind: "failed" }
              : s;
        }
        case "row":
          return O(i, TKe, r, l);
        case "file":
        case "unknown":
          return (
            n(
              "dir-sync: refused a container object named by a carrier this side cannot read",
            ),
            d
          );
      }
    },
    publishJournal: (r, { ifMatchEtag: l, createOnly: s, signal: f }) =>
      s === !0 && l === null ? i.put(xne, r, void 0, f) : E(i, xne, r, l, f),
    readPeerJournal: (r) => i.get(bde, r),
    readOwnJournal: (r) => i.get(xne, r),
  };
}
async function E(o, a, e, u, t) {
  if (u !== null) return o.put(a, e, u, t);
  let i = await o.put(a, e, void 0, t);
  if (i.kind !== "conflict") return i;
  let c = await o.get(a, t, e.length);
  if (c.kind === "ok") return o.put(a, e, c.etag, t);
  return c.kind === "not_found" ? { kind: "failed" } : c;
}
async function O(o, a, e, u) {
  if (
    !SHA256_HEX_REGEX.test(e.sha256) ||
    !Number.isSafeInteger(e.size) ||
    e.size < 0 ||
    e.size > XVn
  )
    return d;
  let t = await o.get(a, u, e.size);
  if (t.kind !== "ok")
    return t.kind === "failed" && t.status === UNREADABLE_CARRIER_STATUS ? { kind: "failed" } : t;
  return t.content.length === e.size && hashSha256(t.content) === e.sha256
    ? t
    : { kind: "not_found" };
}
export { getSideGitDirPath, buildSessionRefName, listSessionRefs, UNREADABLE_CARRIER_STATUS, createDirSyncJournalTransport };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, z1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { R, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { q } from "../共享小工具-未细化/chunk-7beprh8k.js";
import { createHash as g, randomUUID as D } from "crypto";
import {
  closeSync as y,
  constants as m,
  fchmodSync as T,
  fstatSync as E,
  lstatSync as w,
  mkdirSync as s,
  openSync as _,
} from "fs";
import { tmpdir as S } from "os";
import { join as d } from "path";
function zy() {
  let e = a.CLAUDE_CODE_TMPDIR;
  if (e) return e;
  return "/tmp";
}
var aAn = 44;
function jJ(e) {
  let r = process.getuid?.();
  if (r === void 0) return;
  let t = e.replace(/[\/]+$/, "") || e,
    i =
      "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.",
    n;
  try {
    n = _(t, m.O_RDONLY | m.O_DIRECTORY | m.O_NOFOLLOW);
  } catch (o) {
    let c = A(o);
    if (c === "ELOOP" || c === "ENOTDIR")
      throw Error(
        `Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${i}`,
      );
    if (c === "EACCES") {
      let u;
      try {
        let p = w(t);
        if (p.uid !== r) u = p.uid;
      } catch {}
      if (u !== void 0)
        throw new R(
          `Temp directory ${e} is owned by uid ${u}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${i}`,
          "temp dir owned by another uid (EACCES at open); refusing to use it",
        );
      throw new R(
        `Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${i}`,
        "temp dir unreadable (owner-read or path search bit missing); refusing to use it",
      );
    }
    throw o;
  }
  try {
    let o = E(n);
    if (o.uid !== r) {
      if (r === 0 && a.CLAUDE_CODE_CONTAINER_ID) {
        q("warn", "tempdir_owner_mismatch", { observed_uid: o.uid });
        return;
      }
      throw Error(
        `Temp directory ${e} is owned by uid ${o.uid}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${i}`,
      );
    }
    if ((o.mode & 511) !== 448) T(n, 448);
  } finally {
    y(n);
  }
}
class f {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}
var l = new j(() => new f());
function bl() {
  return h(l.of(B().host));
}
function h(e) {
  if (z1())
    throw Error(
      "The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root",
    );
  let r = `claude-${process.getuid?.() ?? 0}`,
    t = d(zy(), r);
  if (t !== e.ensured) {
    if (typeof process.getuid === "function")
      (s(t, { recursive: !0, mode: 448 }), jJ(t));
    else
      try {
        s(t, { recursive: !0, mode: 448 });
      } catch {}
    e.markEnsured(t);
  }
  return t;
}
function pve() {
  let e = bl();
  (s(e, { recursive: !0, mode: 448 }), jJ(e));
  let r = d(e, "plugin-tool-staging");
  return (s(r, { recursive: !0, mode: 448 }), jJ(r), r);
}
function Qoe() {
  let e = l.of(B().host),
    r = h(e);
  if (Buffer.byteLength(r) <= aAn) return r;
  let t = "/tmp",
    i = e.childProcessTmpDirMemo;
  if (i?.forDir === r) return i.result;
  let n = d(t, `claude-${process.getuid?.() ?? 0}`),
    o = n;
  try {
    (s(n, { recursive: !0, mode: 448 }), jJ(n));
  } catch {
    o = r;
  }
  return (e.setChildProcessTmpDirMemo({ forDir: r, result: o }), o);
}
function WJ(e = "claude-prompt", r = ".md", t) {
  let i = t?.contentHash
    ? g("sha256").update(t.contentHash).digest("hex").slice(0, 16)
    : D();
  return d(bl(), `${e}-${i}${r}`);
}
export { zy, aAn, jJ, bl, pve, Qoe, WJ };

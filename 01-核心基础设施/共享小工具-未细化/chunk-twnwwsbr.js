// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { AHt } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { execFileSync } from "child_process";
import { lstatSync } from "fs";
import { join as w } from "path";
function E() {
  return !1;
}
class f {
  resolved = new Map();
  lookup(e) {
    return this.resolved.get(e);
  }
  remember(e, t) {
    this.resolved.set(e, t);
  }
  forget(e) {
    this.resolved.delete(e);
  }
}
var h = new j(() => new f()),
  b = 5000;
function u(e) {
  try {
    return lstatSync(e, { throwIfNoEntry: !1 }) === void 0;
  } catch {
    return !1;
  }
}
var v = new Set([".com", ".exe", ".bat", ".cmd"]);
function y(e) {
  let t = e
      .toLowerCase()
      .replace(/.*[\\/]/, "")
      .replace(/[. ]+$/, ""),
    n = t.lastIndexOf(".");
  return n > 0 && v.has(t.slice(n));
}
function findExecutableWindows(e, t = !1) {
  let n = h.of(B().host),
    o = n.lookup(e);
  if (o !== void 0)
    if (o !== null) {
      if (!u(o)) return o;
      n.forget(e);
    } else {
      if (!t) return o;
      n.forget(e);
    }
  let c = a.SYSTEMROOT || "C:\\Windows",
    d = w(c, "System32", "where.exe");
  try {
    let i = execFileSync(d, [e], {
        stdio: "pipe",
        encoding: "utf8",
        timeout: b,
        windowsHide: !0,
        env: process.env,
      })
        .trim()
        .split(/\r?\n/)
        .filter(Boolean),
      p = process.cwd(),
      l = !1;
    for (let r of i) {
      if (u(r)) continue;
      if (AHt(r, p)) {
        l = !0;
        continue;
      }
      if (!y(r)) continue;
      return (n.remember(e, r), r);
    }
    if (i.length > 0 && !l) n.remember(e, null);
    return null;
  } catch (s) {
    if (S(s)) n.remember(e, null);
    return null;
  }
}
function S(e) {
  if (e === null || typeof e !== "object") return !1;
  let t = "status" in e ? e.status : void 0,
    n = "signal" in e ? e.signal : void 0,
    o = "code" in e ? e.code : void 0;
  return t === 1 && !n && !o;
}
function resolveExecutableSafely(e, t = !1) {
  if (!E()) return e;
  if (e.includes("/") || e.includes("\\")) return e;
  return findExecutableWindows(e, t);
}
export { findExecutableWindows, resolveExecutableSafely };

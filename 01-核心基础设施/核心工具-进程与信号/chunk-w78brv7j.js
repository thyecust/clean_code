// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { b, z, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { bD } from "../共享小工具-未细化/chunk-cyyrj58q.js";
import { P } from "../核心工具-路径与平台/chunk-13kdp2ag.js";
import { constants as p, statSync as m } from "fs";
import { access as h, stat as g } from "fs/promises";
import { isAbsolute as d, join as w } from "path";
var eb = "CLAUDE_CODE_PROCESS_WRAPPER",
  bfe = 12000,
  c = { argv: [], error: null, platformIgnored: !1, record: "" };
class f {
  memoRaw = void 0;
  memoState = c;
  getState() {
    let r = process.env[eb];
    if (!r) return c;
    let e = r === this.memoRaw ? this.memoState.error : null;
    if (r === this.memoRaw && e === null) return this.memoState;
    if (
      ((this.memoRaw = r),
      (this.memoState = v(r)),
      this.memoState.error && this.memoState.error !== e)
    )
      n(
        `${eb} is set but can't be used \u2014 self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`,
        { level: "error" },
      );
    else if (this.memoState.platformIgnored)
      n(
        `${eb} is set but ignored on Windows \u2014 the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`,
        { level: "warn" },
      );
    return this.memoState;
  }
}
var S = new j(() => new f());
function Uwt() {
  return S.of(B().host).getState();
}
function Il() {
  return Uwt().argv;
}
function Pc() {
  return Uwt().error;
}
async function YE() {
  if (Pc() !== null) return !1;
  let r = Il();
  if (r.length === 0) return !0;
  let e = ywn(r)[0];
  return e === void 0 ? !0 : _wn(e);
}
async function _wn(r) {
  try {
    if (!(await g(r)).isFile()) return !1;
    return (await h(r, p.X_OK), !0);
  } catch {
    return !1;
  }
}
function ywn(r) {
  let e = r[0];
  return e !== void 0 && e.startsWith("/") ? [e] : [];
}
async function wfe() {
  let r = Pc();
  if (r) return r;
  if (await YE()) return null;
  return `${eb}: launcher \`${Il()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry`;
}
function Gk() {
  return Uwt().record;
}
function v(r) {
  if (P() === "windows")
    return { argv: [], error: null, platformIgnored: !0, record: "" };
  let e;
  try {
    e = W(r);
  } catch (o) {
    return i(o instanceof Error ? o.message : String(o));
  }
  if (e.length === 0)
    return i(
      "the value is set but contains no launcher \u2014 unset the variable to run without one, or set it to the absolute path of your launcher",
    );
  let s = e[0];
  if (s === process.execPath || s === w(bD(), "claude"))
    return i(
      `launcher \`${s}\` is Claude Code's own launch path \u2014 point ${eb} at your launcher, not at claude`,
    );
  if (!d(s))
    return i(
      "the launcher must be an absolute path, not a bare name resolved via PATH",
    );
  try {
    let o = m(s);
    if (!o.isFile() || (o.mode & 73) === 0)
      return i(`launcher \`${s}\` is not an executable regular file`);
  } catch {
    return i(`launcher \`${s}\` does not exist or is not readable`);
  }
  return {
    argv: e,
    error: null,
    platformIgnored: !1,
    record: e.map((o) => (/[\s"]/.test(o) ? b(o) : o)).join(" "),
  };
}
function i(r) {
  return { argv: [], error: `${eb}: ${r}`, platformIgnored: !1, record: "" };
}
var y = ";|&$()`<>";
function W(r) {
  let e = r.trim();
  if (e === "") return [];
  if (e.startsWith("[")) {
    let t;
    try {
      t = z(e);
    } catch {
      throw Error("value starts with `[` but is not valid JSON");
    }
    if (!Array.isArray(t) || !t.every((a) => typeof a === "string"))
      throw Error("JSON form must be an array of strings");
    if (t.length > 0 && t.some((a) => a === "")) {
      if (t.every((a) => a === "")) return [];
      throw Error(
        "the JSON array contains an empty element \u2014 remove it, or fill in the value it was a placeholder for",
      );
    }
    return t;
  }
  let s = [],
    o = "",
    u = !1,
    l = !1;
  for (let t = 0; t < e.length; t++) {
    let a = e[t];
    if (l) {
      if (a === "\\" && (e[t + 1] === '"' || e[t + 1] === "\\")) o += e[++t];
      else if (a === '"') l = !1;
      else o += a;
      continue;
    }
    if (a === '"') {
      ((l = !0), (u = !0));
      continue;
    }
    if (/\s/.test(a)) {
      if (u) (s.push(o), (o = ""), (u = !1));
      continue;
    }
    if (y.includes(a))
      throw Error(
        "the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) \u2014 it is an argv list, not a shell command",
      );
    ((o += a), (u = !0));
  }
  if (l) throw Error("unterminated double quote");
  if (u) s.push(o);
  if (s.length > 0 && s.some((t) => t === "")) {
    if (s.every((t) => t === "")) return [];
    throw Error(
      'the value contains an empty `""` token \u2014 remove it, or fill in the value it was a placeholder for',
    );
  }
  return s;
}
export { eb, bfe, Uwt, Il, Pc, YE, _wn, ywn, wfe, Gk };

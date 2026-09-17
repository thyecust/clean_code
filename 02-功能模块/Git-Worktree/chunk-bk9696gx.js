// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { ft } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { fn, execFileNoThrowWithCwd as Be } from "./chunk-9ys1bnqr.js";
import { Eu, gitExe as lt, redactGitRemoteCredentials as Uie } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Do } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { av, $ke } from "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
var R1 = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`,
  Zkt = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`,
  yIn = `(?:${R1}/)+${R1}/-/merge_requests`,
  SIn = String.raw`[a-z0-9-]+-review\.googlesource\.com`,
  ext = new RegExp(String.raw`^https://${SIn}/c/(?:${R1}/)*${R1}/\+/\d{1,9}$`),
  scr = new RegExp(`^https?://${Zkt}(?::\\d{1,5})?/${yIn}/\\d+$`),
  H2e = 2048;
function dW(t) {
  return /\/-\/merge_requests\/\d/.test(t);
}
var b = 21;
function Mw(t) {
  return t.owner.includes("/");
}
function bIn() {
  (Eu().repositoryByCwd.clear(), Eu().remoteHostByCwd.clear());
}
async function She() {
  let t = await Pb();
  if (!t) return null;
  if (!Do(t.host)) return null;
  return `${t.owner}/${t.name}`;
}
class y {
  guards = null;
  setGuards(t) {
    this.guards = t;
  }
  blocked() {
    if (!this.guards) return !0;
    try {
      return !this.guards.trustProbe();
    } catch {
      return !0;
    }
  }
}
var _ = new j(() => new y());
function pnt() {
  return _.of(B().host);
}
function fnt(t) {
  pnt().setGuards(t);
}
async function I2e(t) {
  if (pnt().blocked()) return null;
  let r = await Be(lt(), [...fn, "remote", "get-url", "origin"], {
    cwd: t,
    preserveOutputOnError: !1,
  });
  if (r.code === 0 && r.stdout.trim())
    return { name: "origin", url: r.stdout.trim() };
  let e = await Be(lt(), [...fn, "remote"], {
      cwd: t,
      preserveOutputOnError: !1,
    }),
    o =
      e.code === 0
        ? ft(
            e.stdout.trim(),
            `
`,
          ).trim()
        : void 0;
  if (!o) return null;
  let l = await Be(lt(), [...fn, "remote", "get-url", o], {
      cwd: t,
      preserveOutputOnError: !1,
    }),
    s = l.code === 0 ? l.stdout.trim() : "";
  return s ? { name: o, url: s } : null;
}
async function bhe(t) {
  return (await I2e(t))?.url ?? null;
}
async function wIn(t) {
  return (await G(t)).url;
}
async function G(t) {
  if (pnt().blocked()) return { url: null, answered: !1 };
  let {
      stdout: r,
      code: e,
      exitCode: o,
    } = await Be(lt(), [...fn, "remote", "get-url", "--push", "origin"], {
      cwd: t,
      preserveOutputOnError: !1,
    }),
    l = e === 0 ? r.trim() || null : null;
  return { url: l, answered: l !== null || o === 2 };
}
async function Pb(t, r) {
  let e = t ?? Q(),
    o = Eu().repositoryByCwd;
  if (!r?.skipCache && o.has(e)) {
    let s = o.get(e) ?? null;
    if (!s || !Mw(s)) return s;
  }
  let l = () => {
    let s = o.get(e);
    if (s && Mw(s)) o.delete(e);
  };
  try {
    let s = await bhe(e);
    if ((n(`Git remote URL: ${Uie(s)}`), !s))
      return (
        n("No git remote URL found"),
        Eu().remoteHostByCwd.delete(e),
        l(),
        null
      );
    let u = null,
      i = ((g) => {
        let p = Rx(g);
        if (p && Mw(p)) return ((u ??= p), null);
        return p;
      })(s),
      h = !1;
    if (!i) {
      let {
          stdout: g,
          code: p,
          exitCode: E,
        } = await Be(lt(), [...fn, "config", "--get", "remote.origin.url"], {
          cwd: e,
          preserveOutputOnError: !1,
        }),
        d = p === 0 ? g.trim() : null,
        x = d !== null || E === 1;
      if (d && d !== s) {
        if (((i = Rx(d)), i && Mw(i))) ((u ??= i), (i = null));
      }
      if (!i) {
        let w = await G(e),
          f = w.url;
        if (f && f !== s && f !== d) {
          if (((i = Rx(f)), i && Mw(i))) ((u ??= i), (i = null));
        }
        h = x && w.answered;
      }
    }
    ((i ??= u),
      n(
        `Parsed repository: ${i ? `${i.host}/${i.owner}/${i.name}` : null} from URL: ${Uie(s)}`,
      ));
    let R = i?.host ?? $ke(s);
    if (R) Eu().remoteHostByCwd.set(e, R);
    else Eu().remoteHostByCwd.delete(e);
    if (i) o.set(e, i);
    else if (h) o.delete(e);
    return i;
  } catch (s) {
    return (n(`Error detecting repository: ${s}`), l(), null);
  }
}
function TIn() {
  let t = Eu().repositoryByCwd.get(Q());
  if (!t || !Do(t.host)) return null;
  return `${t.owner}/${t.name}`;
}
function E7t() {
  return Eu().repositoryByCwd.get(Q())?.host ?? null;
}
function EIn(t) {
  if (dW(t) || /^!\d+$/.test(t)) return !0;
  if (/^https?:\/\//i.test(t)) return !1;
  let r = E7t();
  return r !== null && av(r) === "gitlab";
}
function AIn(t) {
  let e =
    /\/-\/merge_requests\/(\d+)/.exec(t)?.[1] ?? t.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(e) ? e : "";
}
var C = new RegExp(
  `^(https?://${Zkt}(?::\\d{1,5})?/(?:${R1}/)+${R1})/-/merge_requests/\\d`,
);
function CIn(t) {
  return C.exec(t)?.[1] ?? null;
}
function A7t() {
  return Eu().remoteHostByCwd.get(Q()) ?? null;
}
function mnt() {
  let t = Q(),
    r = Eu().repositoryByCwd;
  if (!r.has(t)) return;
  let e = r.get(t);
  return !!e && Do(e.host);
}
function Rx(t) {
  let r = t.trim(),
    e = r.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (e?.[1] && e[2] && e[3]) {
    if (!m(e[1])) return null;
    if (!c(e[2]) || !c(e[3])) return null;
    return { host: e[1], owner: e[2], name: e[3] };
  }
  let o = r.match(
    /^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/,
  );
  if (o?.[1] && o[2] && o[3] && o[4]) {
    let l = o[1],
      s = o[2],
      u = ft(s, ":");
    if (!m(u)) return null;
    let a = l === "https" || l === "http" ? s : u;
    if (!c(o[3]) || !c(o[4])) return null;
    return { host: a, owner: o[3], name: o[4] };
  }
  return P(r);
}
function P(t) {
  let r,
    e,
    o,
    l = t.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (l?.[1] && l[2]) ((e = l[1]), (o = l[2]));
  else {
    let a = t.match(
      /^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/,
    );
    if (!a?.[1] || !a[2] || !a[3]) return null;
    ((r = a[1]), (e = a[2]), (o = a[3]));
  }
  let s = ft(e, ":");
  if (!m(s) || av(s) !== "gitlab") return null;
  let u = o.split("/");
  if (u.length < 3 || u.length > b + 1 || !u.every(c)) return null;
  return {
    host: r === "https" || r === "http" ? e : s,
    owner: u.slice(0, -1).join("/"),
    name: u.at(-1),
  };
}
function vIn(t) {
  let r = t
    .trim()
    .replace(/\/+$/, "")
    .replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "")
    .match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!r?.[1] || !r[2]) return null;
  if (!c(r[1]) || !c(r[2])) return null;
  return { owner: r[1], name: r[2] };
}
function whe(t) {
  let r = t.trim(),
    e = Rx(r);
  if (e) {
    if (!Do(e.host)) return null;
    return `${e.owner}/${e.name}`;
  }
  if (!r.includes("://") && !r.includes("@") && r.includes("/")) {
    let o = r.split("/");
    if (o.length === 2 && o[0] && o[1]) {
      let l = o[1].replace(/\.git$/, "");
      if (!c(o[0]) || !c(l)) return null;
      return `${o[0]}/${l}`;
    }
  }
  return (n(`Could not parse repository from: ${r}`), null);
}
var A = /^[A-Za-z0-9._-]+$/;
function c(t) {
  return A.test(t) && !t.startsWith("-") && t !== "." && t !== "..";
}
function m(t) {
  if (!/^[A-Za-z0-9.-]+$/.test(t) || t.startsWith("-") || !t.includes("."))
    return !1;
  let r = t.split(".").pop();
  if (!r) return !1;
  return /^[a-zA-Z]+$/.test(r);
}
export {
  R1,
  Zkt,
  yIn,
  SIn,
  ext,
  scr,
  H2e,
  dW,
  Mw,
  bIn,
  She,
  pnt,
  fnt,
  I2e,
  bhe,
  wIn,
  Pb,
  TIn,
  E7t,
  EIn,
  AIn,
  CIn,
  A7t,
  mnt,
  Rx,
  vIn,
  whe,
};

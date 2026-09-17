// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
function Ie(t) {
  if (!t) return !1;
  if (typeof t === "boolean") return t;
  let e = String(t).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(e);
}
function po(t) {
  if (t === void 0) return !1;
  if (typeof t === "boolean") return !t;
  let e = String(t).toLowerCase().trim();
  return ["0", "false", "no", "off"].includes(e);
}
function CS(t) {
  if (!t || t.startsWith("-") || t.startsWith("/")) return !1;
  if (t.includes("..")) return !1;
  if (t.split("/").some((e) => e === "." || e === "")) return !1;
  return /^[a-zA-Z0-9/._+@-]+$/.test(t);
}
var q = globalThis.process?.getBuiltinModule?.("async_hooks"),
  qrt = q ? (t) => q.AsyncResource.bind(t) : (t) => t;
function Le() {
  let t = new Set();
  return {
    subscribe(e) {
      let r = qrt(e);
      return (
        t.add(r),
        () => {
          t.delete(r);
        }
      );
    },
    emit(...e) {
      let r;
      for (let n of t)
        try {
          n(...e);
        } catch (o) {
          (r ??= []).push(o);
        }
      if (r)
        throw r.length === 1
          ? r[0]
          : AggregateError(r, "Signal listener(s) threw");
    },
    clear() {
      t.clear();
    },
  };
}
var Ut = {
    english: "en",
    spanish: "es",
    español: "es",
    espanol: "es",
    french: "fr",
    français: "fr",
    francais: "fr",
    japanese: "ja",
    日本語: "ja",
    german: "de",
    deutsch: "de",
    portuguese: "pt",
    português: "pt",
    portugues: "pt",
    italian: "it",
    italiano: "it",
    korean: "ko",
    한국어: "ko",
    hindi: "hi",
    हिन्दी: "hi",
    हिंदी: "hi",
    indonesian: "id",
    "bahasa indonesia": "id",
    bahasa: "id",
    russian: "ru",
    русский: "ru",
    polish: "pl",
    polski: "pl",
    turkish: "tr",
    türkçe: "tr",
    turkce: "tr",
    dutch: "nl",
    nederlands: "nl",
    ukrainian: "uk",
    українська: "uk",
    greek: "el",
    ελληνικά: "el",
    czech: "cs",
    čeština: "cs",
    cestina: "cs",
    danish: "da",
    dansk: "da",
    swedish: "sv",
    svenska: "sv",
    norwegian: "no",
    norsk: "no",
  },
  Q = new Set([
    "en",
    "es",
    "fr",
    "ja",
    "de",
    "pt",
    "it",
    "ko",
    "hi",
    "id",
    "ru",
    "pl",
    "tr",
    "nl",
    "uk",
    "el",
    "cs",
    "da",
    "sv",
    "no",
  ]);
function Ije(t) {
  if (!t) return { code: "en" };
  let e = t.toLowerCase().trim();
  if (!e) return { code: "en" };
  if (Q.has(e)) return { code: e };
  let r = Ut[e];
  if (r) return { code: r };
  let n = e.split("-")[0];
  if (n && Q.has(n)) return { code: n };
  return { code: "en", fellBackFrom: t };
}
var freeGlobal =
    typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self,
  root = freeGlobal || freeSelf || Function("return this")()
var Gt = root.Symbol,
  F0 = Gt;
var tt = Object.prototype,
  { hasOwnProperty: Bt, toString: Jt } = tt,
  N = F0 ? F0.toStringTag : void 0;
function getRawTag(t) {
  var e = Bt.call(t, N),
    r = t[N];
  try {
    t[N] = void 0;
    var n = !0;
  } catch (i) {}
  var o = Jt.call(t);
  if (n)
    if (e) t[N] = r;
    else delete t[N];
  return o;
}
var Zt = Object.prototype,
  Kt = Zt.toString;
function objectToString(t) {
  return Kt.call(t);
}
var Yt = "[object Null]",
  qt = "[object Undefined]",
  nt = F0 ? F0.toStringTag : void 0;
function baseGetTag(t) {
  if (t == null) return t === void 0 ? qt : Yt;
  return nt && nt in Object(t) ? getRawTag(t) : objectToString(t);
}
function isObject(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ee = "[object AsyncFunction]",
  re = "[object Function]",
  ne = "[object GeneratorFunction]",
  oe = "[object Proxy]";
function isFunction(t) {
  if (!isObject(t)) return !1;
  var e = baseGetTag(t);
  return e == re || e == ne || e == ee || e == oe;
}
var se = root["__core-js_shared__"],
  k = se;
var ot = (function () {
  var t = /[^.]+$/.exec((k && k.keys && k.keys.IE_PROTO) || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function isMasked(t) {
  return !!ot && ot in t;
}
var ue = Function.prototype,
  le = ue.toString;
function toSource(t) {
  if (t != null) {
    try {
      return le.call(t);
    } catch (e) {}
    try {
      return t + "";
    } catch (e) {}
  }
  return "";
}
var fe = /[\\^$.*+?()[\]{}|]/g,
  pe = /^\[object .+?Constructor\]$/,
  de = Function.prototype,
  ge = Object.prototype,
  he = de.toString,
  me = ge.hasOwnProperty,
  xe = RegExp(
    "^" +
      he
        .call(me)
        .replace(fe, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function baseIsNative(t) {
  if (!isObject(t) || isMasked(t)) return !1;
  var e = isFunction(t) ? xe : pe;
  return e.test(toSource(t));
}
function getValue(t, e) {
  return t == null ? void 0 : t[e];
}
function getNative(t, e) {
  var r = getValue(t, e);
  return baseIsNative(r) ? r : void 0;
}
var _e = getNative(Object, "create"),
  h = _e;
function hashClear() {
  ((this.__data__ = h ? h(null) : {}), (this.size = 0));
}
function hashDelete(t) {
  var e = this.has(t) && delete this.__data__[t];
  return ((this.size -= e ? 1 : 0), e);
}
var ye = "__lodash_hash_undefined__",
  Te = Object.prototype,
  Ce = Te.hasOwnProperty;
function hashGet(t) {
  var e = this.__data__;
  if (h) {
    var r = e[t];
    return r === ye ? void 0 : r;
  }
  return Ce.call(e, t) ? e[t] : void 0;
}
var Ee = Object.prototype,
  Oe = Ee.hasOwnProperty;
function hashHas(t) {
  var e = this.__data__;
  return h ? e[t] !== void 0 : Oe.call(e, t);
}
var ke = "__lodash_hash_undefined__";
function hashSet(t, e) {
  var r = this.__data__;
  return (
    (this.size += this.has(t) ? 0 : 1),
    (r[t] = h && e === void 0 ? ke : e),
    this
  );
}
function Hash(t) {
  var e = -1,
    r = t == null ? 0 : t.length;
  this.clear();
  while (++e < r) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
var F = Hash;
function listCacheClear() {
  ((this.__data__ = []), (this.size = 0));
}
function eq(t, e) {
  return t === e || (t !== t && e !== e);
}
function assocIndexOf(t, e) {
  var r = t.length;
  while (r--) if (eq(t[r][0], e)) return r;
  return -1;
}
var $e = Array.prototype,
  He = $e.splice;
function listCacheDelete(t) {
  var e = this.__data__,
    r = assocIndexOf(e, t);
  if (r < 0) return !1;
  var n = e.length - 1;
  if (r == n) e.pop();
  else He.call(e, r, 1);
  return (--this.size, !0);
}
function listCacheGet(t) {
  var e = this.__data__,
    r = assocIndexOf(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function listCacheHas(t) {
  return assocIndexOf(this.__data__, t) > -1;
}
function listCacheSet(t, e) {
  var r = this.__data__,
    n = assocIndexOf(r, t);
  if (n < 0) (++this.size, r.push([t, e]));
  else r[n][1] = e;
  return this;
}
function ListCache(t) {
  var e = -1,
    r = t == null ? 0 : t.length;
  this.clear();
  while (++e < r) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Ge = getNative(root, "Map"),
  Fxe = Ge;
function mapCacheClear() {
  ((this.size = 0),
    (this.__data__ = {
      hash: new F(),
      map: new (Fxe || ListCache)(),
      string: new F(),
    }));
}
function isKeyable(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean"
    ? t !== "__proto__"
    : t === null;
}
function getMapData(t, e) {
  var r = t.__data__;
  return isKeyable(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function mapCacheDelete(t) {
  var e = getMapData(this, t).delete(t);
  return ((this.size -= e ? 1 : 0), e);
}
function mapCacheGet(t) {
  return getMapData(this, t).get(t);
}
function mapCacheHas(t) {
  return getMapData(this, t).has(t);
}
function mapCacheSet(t, e) {
  var r = getMapData(this, t),
    n = r.size;
  return (r.set(t, e), (this.size += r.size == n ? 0 : 1), this);
}
function MapCache(t) {
  var e = -1,
    r = t == null ? 0 : t.length;
  this.clear();
  while (++e < r) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var Hje = MapCache;
var qe = "Expected a function";
function H(t, e) {
  if (typeof t != "function" || (e != null && typeof e != "function"))
    throw TypeError(qe);
  var r = function () {
    var n = arguments,
      o = e ? e.apply(this, n) : n[0],
      i = r.cache;
    if (i.has(o)) return i.get(o);
    var s = t.apply(this, n);
    return ((r.cache = i.set(o, s) || i), s);
  };
  return ((r.cache = new (H.Cache || Hje)()), r);
}
H.Cache = Hje;
var rs = H;
var A_e = /[.\s]+$/,
  HMn = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i;
function FL(t) {
  let e = t.indexOf("."),
    r = (e === -1 ? t : t.slice(0, e)).replace(/ +$/, "");
  return /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/i.test(
    r,
  );
}
function Zur(t) {
  return A_e.test(t) || HMn.test(t);
}
function edr(t) {
  return /^(?=[^.]{3,8}(?:\.|$))[^.]{1,6}~[0-9]{1,6}(?:\.[^.]{1,3})?$/.test(t);
}
import { lstatSync, readlinkSync, realpathSync } from "fs";
import { readlink } from "fs/promises";
import { homedir } from "os";
import {
  basename,
  dirname,
  isAbsolute,
  join as G,
  parse,
  relative,
  resolve,
  sep as d,
} from "path";
import * as J from "path";
function zn(t) {
  return t.normalize("NFC");
}
function An(t) {
  return /^[\\/]{2}/.test(t) || UW(t);
}
function my(t) {
  return /(^|[\\/])\.\.([\\/]|$)/.test(t);
}
function gp(t) {
  return /^[\\/]\?\?[\\/]/.test(t);
}
function $L(t) {
  if (/^[\\/]{2}[?.][\\/](?!unc[\\/])/i.test(t)) return null;
  return (
    t
      .match(/^[\\/]{2}(?:[?.][\\/]unc[\\/])?([^\\/]+)/i)?.[1]
      ?.replace(/[A-Z]/g, (e) => e.toLowerCase()) ?? null
  );
}
function pl(t) {
  return /(^|[\\/])\.{1,2}[. ]*([\\/]|$)/.test(t);
}
function zrt(t) {
  return t.split(/[/\\]/).some((e) => /^\.\. [ .]*$/.test(e));
}
function THt(t, e = "darwin") {
  return e === "win32"
    ? /(^|[\\/])\.{1,2}([\\/]|$)/.test(t)
    : /(^|\/)\.{1,2}(\/|$)/.test(t);
}
function AB(t) {
  return THt(t);
}
function UL(t) {
  return /^[\\/]{2}[?.][\\/]/.test(t);
}
function xYt(t) {
  return /^[\\/](GLOBAL\?\?|GLOBALROOT|DosDevices|Device)[\\/]/i.test(t);
}
function $xe(t, e) {
  if (!An(t)) return !1;
  if (UL(t) || UW(t)) return !0;
  if (pl(t)) return !0;
  let r = $L(t);
  return r === null || r !== $L(e);
}
function C(t) {
  return (
    (t.length === 2 && Pz(t[0]) === "net") ||
    (t.length === 3 && Pz(t[0]) === "network" && Pz(t[1]) === "servers")
  );
}
function C_e(t) {
  if (!t.startsWith("/")) return null;
  let e = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      e.pop();
      continue;
    }
    if ((e.push(r), C(e))) return X(r);
  }
  return null;
}
function X(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function Pz(t) {
  return t
    .replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "")
    .toUpperCase()
    .toLowerCase();
}
function EHt(t, e = "darwin") {
  let r = t.split("/");
  if (r[0] !== "") return t;
  let n, o;
  if (e === "darwin" ? C(r.slice(1, 3)) : r[1] === "net" && r.length >= 3)
    ((n = "/net/"), (o = 2));
  else if (e === "darwin" && C(r.slice(1, 4)))
    ((n = "/Network/Servers/"), (o = 3));
  else return t;
  let i = r[o];
  if (i === void 0 || i === "") return t;
  let s = r.slice(o + 1);
  return n + X(i).replace(/\.$/, "") + (s.length > 0 ? "/" + s.join("/") : "");
}
function HYt(t) {
  let e = /^([\\/]{2,})([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.(?=[\\/]|$)/.exec(
    t,
  );
  if (e === null || e[2].toLowerCase() === "wsl.localhost") return t;
  return e[1][0].repeat(2) + e[2] + t.slice(e[1].length + e[2].length + 1);
}
function XR(t, e) {
  if (!Dr(t)) return !1;
  let r = C_e(t);
  return r === null || r !== C_e(e);
}
function ac(t, e) {
  let r = resolve(e, t);
  if ($xe(t, e) || $xe(r, e)) return !0;
  let n = C_e(e);
  for (let o of [t, r]) {
    if (Dr(o)) {
      let i = C_e(o);
      if (i === null || i !== n) return !0;
    }
    if (hZ(o) || $m(o)) return !0;
  }
  return !1;
}
function Dr(t) {
  return li(t);
}
function Vrt(t) {
  if (!t.startsWith("/")) return !1;
  let e = t.split("/").filter((n) => n !== "" && n !== ".");
  if (e.length < 1 || e.length > 3 || e.includes("..")) return !1;
  if (C(e) && (e.length === 2 || !0)) return !0;
  let r = e[0].toLowerCase();
  return (
    e.length <= 2 &&
    (r === "net" || r === "network" || (r === "home" && e.length === 1))
  );
}
function ku(t) {
  return An(t) || Dr(t) || vS(t);
}
function li(t) {
  return Pje(t) !== null;
}
function Pje(t) {
  if (!t.startsWith("/")) return null;
  let e = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      e.pop();
      continue;
    }
    if ((e.push(r), C(e))) return "/" + e.join("/");
  }
  return null;
}
function tdr(t) {
  let e = Pje(t);
  return e === null ? null : e.slice(e.lastIndexOf("/") + 1);
}
var er = /^([\\/]{2}(?:wsl\.localhost|wsl\$)[\\/]+[^\\/]+)((?:[\\/].*)?)$/i;
function Krt(t) {
  let e = er.exec(t);
  return e === null ? void 0 : { prefix: e[1], rest: e[2] ?? "" };
}
function $m(t) {
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      e.pop();
      continue;
    }
    e.push(r);
  }
  return e.length === 1 && e[0].toLowerCase() === "net";
}
function hZ(t) {
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      e.pop();
      continue;
    }
    if ((e.push(r), e.length === 1 && e[0].toLowerCase() === "network"))
      return !0;
  }
  return !1;
}
function vS(t) {
  return hZ(t);
}
function jf(t) {
  return li(t) || $m(t) || hZ(t);
}
function Uxe(t, e, r = null) {
  let n = _Z(t),
    o = _Z(e);
  if (!n && !o) return !1;
  if (n && !o) return !0;
  if (!n && o) {
    let l = r === null || An(r) ? null : C_e(r),
      _ = An(e) ? null : U(e);
    if (l !== null && _ !== null && l === _) return !1;
    if (r !== null && An(r) && An(e) && !$xe(e, r)) return !1;
    return !0;
  }
  let i = An(t) ? null : U(t),
    s = An(e) ? null : U(e);
  if (i !== null || s !== null) return i === null || s === null || i !== s;
  let a = $L(t),
    u = $L(e);
  if (a !== null || u !== null) return a === null || u === null || a !== u;
  return t !== e;
}
function U(t) {
  return hZ(t) ? null : C_e(t);
}
function _Z(t) {
  return Xo(t) || li(t) || hZ(t) || $m(t) || UL(t) || UW(t) || xYt(t);
}
function IMn(t) {
  let e = t.split("/").filter(Boolean);
  if (e.length === 0) return t;
  let r = e.at(-1);
  return "/" + [...e.slice(0, -1).map(Pz), X(r)].join("/");
}
function ndr(t) {
  if (!t.startsWith("/")) return [];
  let e = [],
    r = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      r.pop();
      continue;
    }
    if ((r.push(n), C(r))) e.push(IMn("/" + r.join("/")));
  }
  return e;
}
function Oi(t) {
  return /^[\\/]{2}wsl(\$|\.localhost)[\\/]/i.test(t);
}
function Xo(t) {
  return An(t) && !Oi(t);
}
function Ju(t) {
  if (t === "~" || t.startsWith("~/")) return homedir() + t.slice(1);
  return t;
}
function Fx(t) {
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    if (r === "*" || r === "?") return e;
    if (r === "[" && t.indexOf("]", e + 1) !== -1) return e;
  }
  return -1;
}
function NW(t) {
  if (t.startsWith("\\\\?\\UNC\\")) return "\\\\" + t.slice(8);
  if (t.startsWith("\\\\?\\") && t.length >= 7 && t[5] === ":")
    return t.slice(4);
  return t;
}
function Fb(t) {
  if (BL(t)) {
    let e = NW(t).replace(/^([\\/])[\\/]+/, "$1");
    for (let r = 0; r < rr && UW(e); r++) {
      e = Ht(e).replace(/^([\\/])[\\/]+/, "$1");
      let n = 1;
      while (
        e[n] === "?" &&
        e[n + 1] === "?" &&
        (n + 2 === e.length || yt(e[n + 2]))
      ) {
        n += 3;
        while (yt(e[n])) n++;
      }
      e = e.slice(0, 1) + e.slice(n);
    }
    return UW(e) ? e.slice(0, 1) : e;
  }
  return t;
}
var rr = 4;
function yt(t) {
  return t === "\\" || t === "/";
}
function BL(t) {
  if (/^\\\\\?\\volume\{/i.test(t)) return Tt(t);
  if (UW(t)) return !0;
  let e = NW(t);
  if (e !== t && Tt(e)) return !0;
  return An(e) && !Oi(e);
}
function Tt(t) {
  return pl(t) || t.includes("/");
}
function RS(t) {
  try {
    return NW(realpathSync.native(t));
  } catch {
    return null;
  }
}
var Rt = 50,
  Ct;
function yZ(t) {
  return It(t).real ?? null;
}
function AHt(t, e) {
  let r = resolve(e).toLowerCase(),
    n = dirname(resolve(t)).toLowerCase();
  if (n === r || Nt(n, r) || Et(n, r, "lexical")) return !0;
  let o = yZ(e)?.toLowerCase();
  if (o == null) return !1;
  let i = yZ(dirname(resolve(t)))?.toLowerCase();
  if (i == null) return !0;
  return i === o || Nt(i, o) || Et(i, o, "canonical");
}
var nr = new Set([
  "node_modules",
  ".venv",
  "venv",
  "env",
  ".env",
  "virtualenv",
  ".tox",
  ".nox",
  ".direnv",
  "__pypackages__",
]);
function Nt(t, e) {
  if (!t.startsWith(R(e) + d)) return !1;
  return t.split(d).some((r) => nr.has(r));
}
function R(t) {
  return t.endsWith(d) ? t.slice(0, -1) : t;
}
var W;
function Et(t, e, r) {
  let n = homedir(),
    o = (process.env.LOCALAPPDATA ?? "").trim();
  if (r === "lexical")
    return z(
      Ot(n, o, (u) => resolve(u).toLowerCase()),
      t,
      e,
    );
  let i = n + "\x00" + o;
  if (W?.key === i) return z(W.aliasDirs, t, e);
  let s = !0,
    a = Ot(n, o, (u) => {
      if (!or(u)) return resolve(u).toLowerCase();
      let l = yZ(u)?.toLowerCase();
      if (l == null) return ((s = !1), resolve(u).toLowerCase());
      return l;
    });
  if (s) W = { key: i, aliasDirs: a };
  return z(a, t, e);
}
function Ot(t, e, r) {
  let n = [];
  if (t)
    n.push(
      R(r(t)) + d + ["appdata", "local", "microsoft", "windowsapps"].join(d),
    );
  if (e) {
    let o = R(r(e)) + d + ["microsoft", "windowsapps"].join(d);
    if (!n.includes(o)) n.push(o);
  }
  return n;
}
function or(t) {
  return t.startsWith("/") && !An(t);
}
function z(t, e, r) {
  let n = R(r);
  for (let o of t) {
    if (!(o === n || o.startsWith(n + d))) continue;
    if (e === o || e.startsWith(o + d)) return !0;
  }
  return !1;
}
var ir = [
  "usr/local",
  "usr/libexec/cups",
  "usr/share/snmp",
  "AppleInternal",
  "Applications",
  "Library",
  "Users",
  "Volumes",
  "cores",
  "home",
  "media",
  "mnt",
  "opt",
  "pkg",
  "private",
  "sw",
];
function SZ(t) {
  let e = t.split("/");
  if (
    e.length < 5 ||
    e[0] !== "" ||
    E(e[1] ?? "") !== "system" ||
    E(e[2] ?? "") !== "volumes" ||
    E(e[3] ?? "") !== "data"
  )
    return t;
  let r = e.slice(4);
  for (let n of ir) {
    let o = n.split("/");
    if (r.length < o.length) continue;
    if (o.every((i, s) => E(r[s] ?? "") === E(i))) return "/" + r.join("/");
  }
  return t;
}
function E(t) {
  return t.toUpperCase().toLowerCase();
}
function FW(t) {
  return basename(dirname(t)) === "worktrees" && basename(dirname(dirname(t))) === ".claude"
    ? dirname(dirname(dirname(t)))
    : null;
}
function Bxe(t, { allowLocalWsl: e = !1 } = {}) {
  let r = (i) => e && CHt(i);
  if (r(t)) return !1;
  if (Ww(t)) return !0;
  let n = Oz(t);
  if (!isAbsolute(n)) return !0;
  if (jxe(n, { allowLocalWsl: e })) return !0;
  let o = resolve(n);
  for (;;) {
    let i = It(o);
    if (i.real !== void 0) return Ww(i.real) && !r(i.real);
    if (i.code !== "ENOENT" && i.code !== "ENOTDIR") return !0;
    let s = dirname(o);
    if (s === o) return !1;
    o = s;
  }
}
function CHt(t) {
  return !1;
}
function identity(t) {
  return t;
}
var sr = /^\/mnt\/[a-z](?:\/|$)/i;
function IYt(t, e, r = "") {
  if (!t.startsWith("/") || sr.test(t) || THt(t, "linux")) return;
  let n = r === "" ? t : t.startsWith(r + "/") ? t.slice(r.length) : void 0;
  return n === void 0
    ? void 0
    : e.replace(/[\\/]+$/, "") + n.replace(/\//g, "\\");
}
function PYt(t, { exactDots: e = !1 } = {}) {
  return;
}
function OYt(t, { exactDots: e = !1 } = {}) {
  let r = Oz(t);
  if (e ? THt(r, "win32") : pl(r)) return;
  let n = /^([A-Za-z]):[\\/]+(.*)$/.exec(r),
    o = Krt(r)?.rest.replace(/^[\\/]+/, ""),
    i = (n?.[2] ?? o ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (i === "") return;
  let s = n ? `/mnt/${n[1].toLowerCase()}/${i}` : `/${i}`;
  return Ww(s) ? void 0 : s;
}
function rdr(t) {
  return Ww(t) && !CHt(t);
}
function Ww(t) {
  let e = Oz(t);
  return lr(e) || jf(e) || xYt(e);
}
function DYt(t, { allowLocalWsl: e = !1 } = {}) {
  let r = Oz(t);
  if (!isAbsolute(r)) return !0;
  let { root: n } = parse(r);
  return S(n, w(r.slice(n.length)), 0, e);
}
function vHt(t, e) {
  return S(t, w(e), 0, !1, { trustedStart: !0, trustedRoot: t });
}
function RHt(t, e = dirname(t)) {
  let r = O(() => readlinkSync(t));
  if (r.value === void 0) return r.code !== "ENOENT" && r.code !== "EINVAL";
  let n = r.value.replace(/^\/{2,}/, "/");
  if (jt(n)) return !0;
  let o = !1;
  if (o && pl(n)) return !0;
  let i = o ? G(parse(e).root, n) : n,
    s = { trustedStart: !0, trustedRoot: e };
  if (isAbsolute(i)) {
    let l = relative(e, i);
    if (!pl(i) && l !== "" && !Lt(l) && !isAbsolute(l)) return S(e, w(l), 1, !1, s);
    return Ww(i) || jxe(i);
  }
  if (Ww(i)) return !0;
  let a = relative(e, dirname(t)),
    u = !Lt(a) && !isAbsolute(a);
  return S(u ? e : dirname(t), [...(u ? w(a) : []), ...w(i)], 1, !1, s);
}
function jxe(t, e = {}) {
  return DYt(t, e) || (pl(t) && DYt(resolve(t), e));
}
var ar = 40;
function w(t) {
  return t.split(/\/+/).filter(Boolean);
}
function P(t, e) {
  return Ww(t) && !(e && CHt(t));
}
function Lt(t) {
  return t === ".." || /^\.\.[\\/]/.test(t);
}
function jt(t) {
  return !1;
}
function S(t, e, r, n, { trustedStart: o = !1, trustedRoot: i = t } = {}) {
  let s = i.endsWith(d) ? i : i + d,
    a = (l) => o && (l === i || l.startsWith(s)),
    u = t;
  if (!a(u) && P(u, n)) return !0;
  for (let l = 0; l < e.length; l++) {
    let _ = e[l];
    if (_ === ".") continue;
    if (_ === "..") {
      u = dirname(u);
      continue;
    }
    let A = G(u, _);
    if (!a(A) && P(A, n)) return !0;
    let L = O(() => lstatSync(A));
    if (L.value === void 0) {
      if (L.code !== "ENOENT" && L.code !== "ENOTDIR") return !0;
      let g = A;
      for (let D of e.slice(l + 1))
        if (
          ((g = D === ".." ? dirname(g) : D === "." ? g : G(g, D)), !a(g) && P(g, n))
        )
          return !0;
      return !1;
    }
    let j;
    if (L.value.isSymbolicLink()) {
      if (r >= ar) return !0;
      if (((j = O(() => readlinkSync(A)).value), j === void 0)) return !0;
    } else {
      u = A;
      continue;
    }
    let p = j.replace(/^\/{2,}/, "/");
    if (!(o && isAbsolute(p) && !pl(p) && a(p)) && P(p, n)) return !0;
    let I = e.slice(l + 1);
    if (jt(p)) return !0;
    if (isAbsolute(p)) {
      if (o && !pl(p) && a(p))
        return S(i, [...w(p.slice(s.length)), ...I], r + 1, n, {
          trustedStart: !0,
          trustedRoot: i,
        });
      let g = parse(p).root;
      return S(g, [...w(p.slice(g.length)), ...I], r + 1, n);
    }
    return S(u, [...w(p), ...I], r + 1, n, {
      trustedStart: a(u),
      trustedRoot: i,
    });
  }
  return !1;
}
function It(t) {
  let e = O(() => NW(realpathSync.native(t)));
  return { real: e.value, code: e.code };
}
function Y(t) {
  return t != null &&
    typeof t === "object" &&
    "code" in t &&
    typeof t.code === "string"
    ? t.code
    : void 0;
}
function O(t) {
  for (let e = 0; ; e++)
    try {
      return { value: t() };
    } catch (r) {
      let n = Y(r);
      return { code: n };
    }
}
function Ft(t) {
  let e = Y(t);
  return e === "EINVAL"
    ? { kind: "directory" }
    : e === "ENOENT"
      ? { kind: "absent" }
      : { kind: "error", code: e, error: t };
}
function odr(t) {
  let e,
    r = O(() => {
      try {
        return readlinkSync(t);
      } catch (n) {
        throw ((e = n), n);
      }
    });
  return r.value !== void 0 ? { kind: "junction", target: r.value } : Ft(e);
}
async function Tae(t) {
  let e,
    r = await ur(async () => {
      try {
        return await readlink(t);
      } catch (n) {
        throw ((e = n), n);
      }
    });
  return r.value !== void 0 ? { kind: "junction", target: r.value } : Ft(e);
}
async function ur(t) {
  for (let e = 0; ; e++)
    try {
      return { value: await t() };
    } catch (r) {
      let n = Y(r);
      return { code: n };
    }
}
function lr(t) {
  return $W(t) || li(t);
}
function $t(t) {
  return (
    pl(t) ||
    /[. :](?=[\\/]|$)/.test(t) ||
    t
      .split(/[\\/]/)
      .some((e) => FL(e) || FL(e.slice(0, Math.max(0, e.indexOf(":")))))
  );
}
function Oz(t) {
  let e = /^(?:\\\\[?.]\\|\\\?\?\\)(?=[A-Za-z]:[\\/])/.exec(t);
  if (!e) return t;
  let r = t.slice(e[0].length),
    n = r.slice(2);
  return (e[0].includes("\\") && n.includes("/")) || $t(n) ? t : r;
}
function $b(t, { foldCase: e, knownNotSuspect: r = !1 } = {}) {
  if (((e ??= !0), (t = Oz(t)), $W(t) || li(t))) {
    let a = identity(resolve(identity(t))).normalize("NFC");
    return e ? a.toLowerCase() : a;
  }
  if (!r && jxe(isAbsolute(t) ? t : resolve(t))) {
    let a = resolve(t).normalize("NFC");
    return e ? a.toLowerCase() : a;
  }
  let n = resolve(t),
    o = [],
    i = RS(n);
  while (i === null && dirname(n) !== n) (o.unshift(basename(n)), (n = dirname(n)), (i = RS(n)));
  i = o.length > 0 ? resolve(i ?? n, ...o) : (i ?? n);
  let s = identity(i).normalize("NFC");
  return e ? s.toLowerCase() : s;
}
function wh(t, e, { alreadyComparable: r = !1, foldCase: n } = {}) {
  let o = relative(r ? t : $b(t, { foldCase: n }), r ? e : $b(e, { foldCase: n }));
  return o === "" || (!isAbsolute(o) && o !== ".." && !o.startsWith(`..${d}`));
}
function $W(t) {
  return An(t);
}
function UW(t) {
  return Dt.test(t) || (t.includes("??") && Dt.test(Ht(t)));
}
var Dt = /^[\\/]\?\?[\\/]/;
function Ht(t) {
  return J.win32 ? J.win32.normalize(t) : t;
}
export {
  eq,
  ListCache,
  freeGlobal,
  root,
  F0,
  baseGetTag,
  isObject,
  isFunction,
  toSource,
  getNative,
  Fxe,
  Hje,
  qrt,
  Ie,
  po,
  CS,
  Le,
  Ije,
  rs,
  A_e,
  HMn,
  FL,
  Zur,
  edr,
  zn,
  An,
  my,
  gp,
  $L,
  pl,
  zrt,
  THt,
  AB,
  UL,
  xYt,
  $xe,
  C_e,
  Pz,
  EHt,
  HYt,
  XR,
  ac,
  Dr,
  Vrt,
  ku,
  li,
  Pje,
  tdr,
  Krt,
  $m,
  hZ,
  vS,
  jf,
  Uxe,
  _Z,
  IMn,
  ndr,
  Oi,
  Xo,
  Ju,
  Fx,
  NW,
  Fb,
  BL,
  RS,
  yZ,
  AHt,
  SZ,
  FW,
  Bxe,
  CHt,
  identity,
  IYt,
  PYt,
  OYt,
  rdr,
  Ww,
  DYt,
  vHt,
  RHt,
  jxe,
  odr,
  Tae,
  Oz,
  $b,
  wh,
  $W,
  UW,
};

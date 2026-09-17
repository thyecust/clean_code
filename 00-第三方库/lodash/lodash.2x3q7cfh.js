// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  eq as isEqualPrimitive,
  ListCache as HashStore,
  freeGlobal,
  root as sE,
  F0,
  baseGetTag as LW,
  isObject as Fm,
  isFunction as xje,
  toSource as E_e,
  getNative as MW,
  Fxe,
  Hje,
  Le,
  rs,
  zn,
} from "./lodash.207999qb.js";
import { OMn, idr, adr, M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { au } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { homedir } from "os";
import { sep as cn } from "path";
import { randomUUID as i8 } from "crypto";
import { randomUUID as An } from "crypto";
import { createHash, randomBytes } from "crypto";
function identity(e) {
  return e;
}
function oo(e) {
  return e;
}
function j1(e) {
  return (
    typeof e === "string" &&
    e.length <= 200 &&
    /^[A-Za-z0-9_][A-Za-z0-9_-]*$/.test(e) &&
    !/^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i.test(e)
  );
}
var Xe = "[\\w-]{1,63}",
  Ye = new RegExp(`^${Xe}$`),
  bn = /^[\w-]{1,128}$/;
function TXt(e) {
  return bn.test(e);
}
var shortIdRegex = new RegExp(`^a(?:${Xe}-)?[0-9a-f]{16}$`);
function parseShortId(e) {
  return shortIdRegex.test(e) ? e : null;
}
var Tn = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function mB(e, t) {
  let o = Buffer.from(t.replace(/-/g, ""), "hex"),
    r = createHash("sha1").update(o).update(Buffer.from(e, "utf8")).digest();
  ((r[6] = (r[6] & 15) | 80), (r[8] = (r[8] & 63) | 128));
  let i = r.subarray(0, 16).toString("hex");
  return `${i.slice(0, 8)}-${i.slice(8, 12)}-${i.slice(12, 16)}-${i.slice(16, 20)}-${i.slice(20, 32)}`;
}
function Xn(e) {
  if (typeof e !== "string") return null;
  return Tn.test(e) ? e : null;
}
function bh(e) {
  if (e && !Ye.test(e)) e = e.replace(/[^\w-]/g, "").slice(0, 63);
  let t = randomBytes(8).toString("hex");
  return e ? `a${e}-${t}` : `a${t}`;
}
var Z = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
function Vur(e) {
  return mB(e.trim(), Z);
}
function qxt() {
  let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return e ? mB(e, Z) : null;
}
function sOn(e) {
  if (e.toLowerCase().endsWith(".jsonl"))
    return {
      sessionId: An(),
      ingressUrl: null,
      isUrl: !1,
      jsonlFile: e,
      isJsonlFile: !0,
    };
  if (Xn(e))
    return {
      sessionId: e,
      ingressUrl: null,
      isUrl: !1,
      jsonlFile: null,
      isJsonlFile: !1,
    };
  try {
    let t = new URL(e);
    return {
      sessionId: qxt() ?? mB(t.href, Z),
      ingressUrl: t.href,
      isUrl: !0,
      jsonlFile: null,
      isJsonlFile: !1,
    };
  } catch {}
  return null;
}
function stackClear() {
  ((this.__data__ = new HashStore()), (this.size = 0));
}
function stackDelete(e) {
  var t = this.__data__,
    o = t.delete(e);
  return ((this.size = t.size), o);
}
function stackGet(e) {
  return this.__data__.get(e);
}
function stackHas(e) {
  return this.__data__.has(e);
}
var Ln = 200;
function stackSet(e, t) {
  var o = this.__data__;
  if (o instanceof HashStore) {
    var r = o.__data__;
    if (!Fxe || r.length < Ln - 1)
      return (r.push([e, t]), (this.size = ++o.size), this);
    o = this.__data__ = new Hje(r);
  }
  return (o.set(e, t), (this.size = o.size), this);
}
function Stack(e) {
  var t = (this.__data__ = new HashStore(e));
  this.size = t.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype.delete = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var On = "__lodash_hash_undefined__";
function Fn(e) {
  return (this.__data__.set(e, On), this);
}
var rt = Fn;
function setCacheHas(e) {
  return this.__data__.has(e);
}
function SetCache(e) {
  var t = -1,
    o = e == null ? 0 : e.length;
  this.__data__ = new Hje();
  while (++t < o) this.add(e[t]);
}
SetCache.prototype.add = SetCache.prototype.push = rt;
SetCache.prototype.has = setCacheHas;
function arraySome(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length;
  while (++o < r) if (t(e[o], o, e)) return !0;
  return !1;
}
function cacheHas(e, t) {
  return e.has(t);
}
var Bn = 1,
  _n = 2;
function Un(e, t, o, r, i, s) {
  var a = o & Bn,
    l = e.length,
    d = t.length;
  if (l != d && !(a && d > l)) return !1;
  var u = s.get(e),
    S = s.get(t);
  if (u && S) return u == t && S == e;
  var c = -1,
    p = !0,
    f = o & _n ? new SetCache() : void 0;
  (s.set(e, t), s.set(t, e));
  while (++c < l) {
    var m = e[c],
      v = t[c];
    if (r) var b = a ? r(v, m, c, t, e, s) : r(m, v, c, e, t, s);
    if (b !== void 0) {
      if (b) continue;
      p = !1;
      break;
    }
    if (f) {
      if (
        !arraySome(t, function (k, x) {
          if (!cacheHas(f, x) && (m === k || i(m, k, o, r, s))) return f.push(x);
        })
      ) {
        p = !1;
        break;
      }
    } else if (!(m === v || i(m, v, o, r, s))) {
      p = !1;
      break;
    }
  }
  return (s.delete(e), s.delete(t), p);
}
var D = Un;
var jn = sE.Uint8Array,
  Xnt = jn;
function Wn(e) {
  var t = -1,
    o = Array(e.size);
  return (
    e.forEach(function (r, i) {
      o[++t] = [i, r];
    }),
    o
  );
}
var at = Wn;
function qn(e) {
  var t = -1,
    o = Array(e.size);
  return (
    e.forEach(function (r) {
      o[++t] = r;
    }),
    o
  );
}
var Ynt = qn;
var Gn = 1,
  Kn = 2,
  Jn = "[object Boolean]",
  Vn = "[object Date]",
  $n = "[object Error]",
  Qn = "[object Map]",
  Yn = "[object Number]",
  Zn = "[object RegExp]",
  eo = "[object Set]",
  to = "[object String]",
  no = "[object Symbol]",
  ro = "[object ArrayBuffer]",
  io = "[object DataView]",
  lt = F0 ? F0.prototype : void 0,
  ee = lt ? lt.valueOf : void 0;
function so(e, t, o, r, i, s, a) {
  switch (o) {
    case io:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      ((e = e.buffer), (t = t.buffer));
    case ro:
      if (e.byteLength != t.byteLength || !s(new Xnt(e), new Xnt(t))) return !1;
      return !0;
    case Jn:
    case Vn:
    case Yn:
      return isEqualPrimitive(+e, +t);
    case $n:
      return e.name == t.name && e.message == t.message;
    case Zn:
    case to:
      return e == t + "";
    case Qn:
      var l = at;
    case eo:
      var d = r & Gn;
      if ((l || (l = Ynt), e.size != t.size && !d)) return !1;
      var u = a.get(e);
      if (u) return u == t;
      ((r |= Kn), a.set(e, t));
      var S = D(l(e), l(t), r, i, s, a);
      return (a.delete(e), S);
    case no:
      if (ee) return ee.call(e) == ee.call(t);
  }
  return !1;
}
var dt = so;
function arrayPush(e, t) {
  var o = -1,
    r = t.length,
    i = e.length;
  while (++o < r) e[i + o] = t[o];
  return e;
}
var lo = Array.isArray,
  vg = lo;
function baseGetAllKeys(e, t, o) {
  var r = t(e);
  return vg(e) ? r : arrayPush(r, o(e));
}
function arrayFilter(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length,
    i = 0,
    s = [];
  while (++o < r) {
    var a = e[o];
    if (t(a, o, e)) s[i++] = a;
  }
  return s;
}
function stubArray() {
  return [];
}
var go = Object.prototype,
  fo = go.propertyIsEnumerable,
  ut = Object.getOwnPropertySymbols,
  ho = !ut
    ? stubArray
    : function (e) {
        if (e == null) return [];
        return (
          (e = Object(e)),
          arrayFilter(ut(e), function (t) {
            return fo.call(e, t);
          })
        );
      },
  Qnt = ho;
function baseTimes(e, t) {
  var o = -1,
    r = Array(e);
  while (++o < e) r[o] = t(o);
  return r;
}
function isObjectLike(e) {
  return e != null && typeof e == "object";
}
var vo = "[object Arguments]";
function yo(e) {
  return isObjectLike(e) && LW(e) == vo;
}
var te = yo;
var pt = Object.prototype,
  { hasOwnProperty: bo, propertyIsEnumerable: Co } = pt,
  ko = te(
    (function () {
      return arguments;
    })(),
  )
    ? te
    : function (e) {
        return isObjectLike(e) && bo.call(e, "callee") && !Co.call(e, "callee");
      },
  e_e = ko;
var _ = {};
au(_, { default: () => cae });
function stubFalse() {
  return !1;
}
var mt = typeof _ == "object" && _ && !_.nodeType && _,
  ft = mt && typeof H == "object" && H && !H.nodeType && H,
  To = ft && ft.exports === mt,
  ht = To ? sE.Buffer : void 0,
  Ao = ht ? ht.isBuffer : void 0,
  Po = Ao || stubFalse,
  cae = Po;
var Ro = 9007199254740991,
  Mo = /^(?:0|[1-9]\d*)$/;
function wo(e, t) {
  var o = typeof e;
  return (
    (t = t == null ? Ro : t),
    !!t &&
      (o == "number" || (o != "symbol" && Mo.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var _xe = wo;
var Lo = 9007199254740991;
function isLength(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lo;
}
var Oo = "[object Arguments]",
  Fo = "[object Array]",
  Eo = "[object Boolean]",
  Do = "[object Date]",
  Ho = "[object Error]",
  Bo = "[object Function]",
  _o = "[object Map]",
  Uo = "[object Number]",
  jo = "[object Object]",
  Wo = "[object RegExp]",
  qo = "[object Set]",
  Go = "[object String]",
  No = "[object WeakMap]",
  Ko = "[object ArrayBuffer]",
  Jo = "[object DataView]",
  Vo = "[object Float32Array]",
  zo = "[object Float64Array]",
  $o = "[object Int8Array]",
  Qo = "[object Int16Array]",
  Xo = "[object Int32Array]",
  Yo = "[object Uint8Array]",
  Zo = "[object Uint8ClampedArray]",
  er = "[object Uint16Array]",
  tr = "[object Uint32Array]",
  h = {};
h[Vo] = h[zo] = h[$o] = h[Qo] = h[Xo] = h[Yo] = h[Zo] = h[er] = h[tr] = !0;
h[Oo] =
  h[Fo] =
  h[Ko] =
  h[Eo] =
  h[Jo] =
  h[Do] =
  h[Ho] =
  h[Bo] =
  h[_o] =
  h[Uo] =
  h[jo] =
  h[Wo] =
  h[qo] =
  h[Go] =
  h[No] =
    !1;
function baseIsTypedArray(e) {
  return isObjectLike(e) && isLength(e.length) && !!h[LW(e)];
}
function baseUnary(e) {
  return function (t) {
    return e(t);
  };
}
var W = {};
au(W, { default: () => uae });
var vt = typeof W == "object" && W && !W.nodeType && W,
  I = vt && typeof U == "object" && U && !U.nodeType && U,
  rr = I && I.exports === vt,
  ne = rr && freeGlobal.process,
  ir = (function () {
    try {
      var e = I && I.require && I.require("util").types;
      if (e) return e;
      return ne && ne.binding && ne.binding("util");
    } catch (t) {}
  })(),
  uae = ir;
var yt = uae && uae.isTypedArray,
  sr = yt ? baseUnary(yt) : baseIsTypedArray,
  ert = sr;
var ar = Object.prototype,
  lr = ar.hasOwnProperty;
function arrayLikeKeys(e, t) {
  var o = vg(e),
    r = !o && e_e(e),
    i = !o && !r && cae(e),
    s = !o && !r && !i && ert(e),
    a = o || r || i || s,
    l = a ? baseTimes(e.length, String) : [],
    d = l.length;
  for (var u in e)
    if (
      (t || lr.call(e, u)) &&
      !(
        a &&
        (u == "length" ||
          (i && (u == "offset" || u == "parent")) ||
          (s && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          _xe(u, d))
      )
    )
      l.push(u);
  return l;
}
var ur = Object.prototype;
function isPrototype(e) {
  var t = e && e.constructor,
    o = (typeof t == "function" && t.prototype) || ur;
  return e === o;
}
function overArg(e, t) {
  return function (o) {
    return e(t(o));
  };
}
var gr = overArg(Object.keys, Object),
  bt = gr;
var fr = Object.prototype,
  hr = fr.hasOwnProperty;
function baseKeys(e) {
  if (!isPrototype(e)) return bt(e);
  var t = [];
  for (var o in Object(e)) if (hr.call(e, o) && o != "constructor") t.push(o);
  return t;
}
function isArrayLike(e) {
  return e != null && isLength(e.length) && !xje(e);
}
function vr(e) {
  return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
}
var yz = vr;
function yr(e) {
  return baseGetAllKeys(e, yz, Qnt);
}
var zxt = yr;
var br = 1,
  Cr = Object.prototype,
  kr = Cr.hasOwnProperty;
function xr(e, t, o, r, i, s) {
  var a = o & br,
    l = zxt(e),
    d = l.length,
    u = zxt(t),
    S = u.length;
  if (d != S && !a) return !1;
  var c = d;
  while (c--) {
    var p = l[c];
    if (!(a ? p in t : kr.call(t, p))) return !1;
  }
  var f = s.get(e),
    m = s.get(t);
  if (f && m) return f == t && m == e;
  var v = !0;
  (s.set(e, t), s.set(t, e));
  var b = a;
  while (++c < d) {
    p = l[c];
    var k = e[p],
      x = t[p];
    if (r) var Qe = a ? r(x, k, p, t, e, s) : r(k, x, p, e, t, s);
    if (!(Qe === void 0 ? k === x || i(k, x, o, r, s) : Qe)) {
      v = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (v && !b) {
    var O = e.constructor,
      F = t.constructor;
    if (
      O != F &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof O == "function" &&
        O instanceof O &&
        typeof F == "function" &&
        F instanceof F
      )
    )
      v = !1;
  }
  return (s.delete(e), s.delete(t), v);
}
var kt = xr;
var Tr = MW(sE, "DataView"),
  q = Tr;
var Ar = MW(sE, "Promise"),
  G = Ar;
var Pr = MW(sE, "Set"),
  yxe = Pr;
var Rr = MW(sE, "WeakMap"),
  N = Rr;
var xt = "[object Map]",
  Mr = "[object Object]",
  Tt = "[object Promise]",
  At = "[object Set]",
  Pt = "[object WeakMap]",
  Rt = "[object DataView]",
  wr = E_e(q),
  Lr = E_e(Fxe),
  Ir = E_e(G),
  Or = E_e(yxe),
  Fr = E_e(N),
  T = LW;
if (
  (q && T(new q(new ArrayBuffer(1))) != Rt) ||
  (Fxe && T(new Fxe()) != xt) ||
  (G && T(G.resolve()) != Tt) ||
  (yxe && T(new yxe()) != At) ||
  (N && T(new N()) != Pt)
)
  T = function (e) {
    var t = LW(e),
      o = t == Mr ? e.constructor : void 0,
      r = o ? E_e(o) : "";
    if (r)
      switch (r) {
        case wr:
          return Rt;
        case Lr:
          return xt;
        case Ir:
          return Tt;
        case Or:
          return At;
        case Fr:
          return Pt;
      }
    return t;
  };
var t_e = T;
var Er = 1,
  Mt = "[object Arguments]",
  wt = "[object Array]",
  J = "[object Object]",
  Dr = Object.prototype,
  Lt = Dr.hasOwnProperty;
function Hr(e, t, o, r, i, s) {
  var a = vg(e),
    l = vg(t),
    d = a ? wt : t_e(e),
    u = l ? wt : t_e(t);
  ((d = d == Mt ? J : d), (u = u == Mt ? J : u));
  var S = d == J,
    c = u == J,
    p = d == u;
  if (p && cae(e)) {
    if (!cae(t)) return !1;
    ((a = !0), (S = !1));
  }
  if (p && !S)
    return (
      s || (s = new Stack()),
      a || ert(e) ? D(e, t, o, r, i, s) : dt(e, t, d, o, r, i, s)
    );
  if (!(o & Er)) {
    var f = S && Lt.call(e, "__wrapped__"),
      m = c && Lt.call(t, "__wrapped__");
    if (f || m) {
      var v = f ? e.value() : e,
        b = m ? t.value() : t;
      return (s || (s = new Stack()), i(v, b, o, r, s));
    }
  }
  if (!p) return !1;
  return (s || (s = new Stack()), kt(e, t, o, r, i, s));
}
var It = Hr;
function baseIsEqual(e, t, o, r, i) {
  if (e === t) return !0;
  if (e == null || t == null || (!isObjectLike(e) && !isObjectLike(t))) return e !== e && t !== t;
  return It(e, t, o, r, baseIsEqual, i);
}
function Br(e, t) {
  return baseIsEqual(e, t);
}
var Qs = Br;
import { basename, dirname } from "path";
class j {
  #e;
  #t = new WeakMap();
  constructor(e) {
    this.#e = e;
  }
  of(e) {
    let t = this.#t.get(e);
    if (t !== void 0) return t;
    let o = this.#e();
    return (this.#t.set(e, o), o);
  }
}
function rE(e) {
  return {
    subscribe(t) {
      return e().subscribe(t);
    },
    emit(...t) {
      e().emit(...t);
    },
    clear() {
      e().clear();
    },
  };
}
class Et {
  mergedSettings = null;
  perSource = new Map();
  parsedFiles = new Map();
  folderListings = new Map();
  managedFileReads = new Map();
  primedFiles = new Set();
  policyWalks = 0;
  walkedFolders = new Map();
  policy = {};
  lastPolicyEnvComposition = null;
  isLoadingFromDisk = !1;
  autoModeUntrustedSourceWarned = !1;
  changed = Le();
  internalWrites = new Map();
  enabledSources;
  pluginBase;
  epoch = 0;
  systemSpaceServingLogged = !1;
  systemAttestationContradicted = !1;
  backendReadResetTail = Promise.resolve();
  invalidated = Le();
  pluginBaseLoaded = !1;
  primer;
  localStoreProbes = new Dt();
  retained = new Map();
  retainedListings = new Map();
  setPluginBase(e) {
    ((this.pluginBase = e), (this.pluginBaseLoaded = !0));
  }
  clearPluginBase() {
    this.pluginBase = void 0;
  }
  invalidateAll(e) {
    if (
      (this.epoch++,
      (this.mergedSettings = null),
      this.perSource.clear(),
      this.parsedFiles.clear(),
      this.primedFiles.clear(),
      (this.policyWalks = 0),
      this.walkedFolders.clear(),
      this.folderListings.clear(),
      (this.policy = {}),
      e?.userLayer === "retain" && M() && this.primer !== void 0)
    ) {
      for (let [t, o] of this.retained)
        (this.parsedFiles.set(t, o.parsed), this.primedFiles.add(t));
      for (let [t, o] of this.retainedListings)
        this.folderListings.set(t, o.names);
    } else (this.retained.clear(), this.retainedListings.clear());
    this.invalidated.emit();
  }
  invalidatePolicyLayer() {
    ((this.mergedSettings = null),
      this.perSource.delete("policySettings"),
      (this.policy = {}));
  }
  onInvalidate(e) {
    return this.invalidated.subscribe(e);
  }
  seedParsedFile(e, t, o, r) {
    if (r !== this.epoch) return !1;
    let i = this.parsedFiles.get(e),
      s = i === void 0 || !Qs(i, o);
    if ((this.parsedFiles.set(e, o), s || this.primedFiles.has(e)))
      this.primedFiles.add(e);
    let a = this.retained.get(e);
    if (a !== void 0) a.parsed = o;
    if (s) this.dropDerivedCaches(t);
    return !0;
  }
  walkReadDiffers(e, t) {
    let o = this.parsedFiles.get(e);
    return o !== void 0 && !this.primedFiles.has(e) && !Qs(o, t);
  }
  unseedParsedFile(e, t, o) {
    if (o !== this.epoch) return;
    if (
      (this.retained.delete(e),
      !this.primedFiles.has(e) ||
        (t === "policySettings" && this.policyWalks > 0))
    )
      return;
    (this.primedFiles.delete(e),
      this.parsedFiles.delete(e),
      this.dropDerivedCaches(t));
  }
  dropDerivedCaches(e) {
    if (
      (this.perSource.delete(e),
      (this.mergedSettings = null),
      e === "policySettings")
    )
      this.policy = {};
  }
  primedFolderListing(e) {
    return M() ? this.folderListings.get(e) : void 0;
  }
  folderListingForPolicyWalk(e) {
    if (!M()) return;
    this.policyWalks++;
    let t = this.folderListings.get(e);
    if (!this.walkedFolders.has(e) || t !== void 0)
      this.walkedFolders.set(e, t ?? null);
    return t;
  }
  noteWalkListing(e, t) {
    if (!M()) return;
    this.walkedFolders.set(e, t);
  }
  get policyWalkCount() {
    return this.policyWalks;
  }
  policyInstallVerdict(e, t, o) {
    let r = this.parsedFiles.get(e);
    if (r === void 0 || Qs(r, t)) return "install";
    if (!this.primedFiles.has(e)) return "raced";
    if (this.policyWalks === 0) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  folderInstallVerdict(e, t, o) {
    if (!this.walkedFolders.has(e))
      return this.hasParsedDropInOutside(e, t) ? "raced" : "install";
    let r = this.walkedFolders.get(e);
    if (r !== null && r !== void 0 && Qs(r, t)) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  seedFolderListing(e, t, o) {
    if (o !== this.epoch) return !1;
    let r = this.folderListings.get(e);
    this.folderListings.set(e, t);
    let i = this.retainedListings.get(e);
    if (i !== void 0) i.names = t;
    if (r !== void 0 && !Qs(r, t)) this.dropDerivedCaches("policySettings");
    return !0;
  }
  walkReadManagedFileIn(e, t) {
    for (let [o, r] of this.parsedFiles)
      if (
        !o.includes("\x00") &&
        !this.primedFiles.has(o) &&
        (r.settings !== null || r.errors.length > 0) &&
        (o === e || dirname(o) === t)
      )
        return !0;
    return !1;
  }
  walkRead(e) {
    return this.parsedFiles.has(e) && !this.primedFiles.has(e);
  }
  hasParsedDropInOutside(e, t) {
    for (let o of this.parsedFiles.keys())
      if (
        !o.includes("\x00") &&
        !this.primedFiles.has(o) &&
        dirname(o) === e &&
        !t.includes(basename(o))
      )
        return !0;
    return !1;
  }
  clearFolderListing(e, t) {
    if (t !== this.epoch) return;
    if (
      (this.retainedListings.delete(e),
      !this.folderListings.has(e) || this.walkedFolders.has(e))
    )
      return;
    (this.folderListings.delete(e), this.dropDerivedCaches("policySettings"));
  }
  retainLayer(e, t) {
    let o = { parsed: t };
    return (
      this.retained.set(e, o),
      () => {
        if (this.retained.get(e) === o) this.retained.delete(e);
      }
    );
  }
  dropRetainedLayer(e) {
    this.retained.delete(e);
  }
  retainFolderListing(e, t) {
    let o = { names: t };
    return (
      this.retainedListings.set(e, o),
      () => {
        if (this.retainedListings.get(e) === o) this.retainedListings.delete(e);
      }
    );
  }
}
class Dt {
  ownerUidsByRoot = new Map();
  realHomeDir = void 0;
  canonicalRootOwnerUids(e, t) {
    let o = this.ownerUidsByRoot.get(e);
    if (o !== void 0) return o;
    let r = t(e);
    return (this.ownerUidsByRoot.set(e, r), r);
  }
  hasCanonicalRootOwnerUids(e) {
    return this.ownerUidsByRoot.has(e);
  }
  primeCanonicalRootOwnerUids(e, t) {
    if (this.ownerUidsByRoot.has(e)) return !1;
    return (this.ownerUidsByRoot.set(e, t), !0);
  }
  clearCanonicalRootOwnerUids() {
    this.ownerUidsByRoot.clear();
  }
  normalizedRealHomeDir(e) {
    return ((this.realHomeDir ??= e()), this.realHomeDir);
  }
  clearNormalizedRealHomeDir() {
    this.realHomeDir = void 0;
  }
}
var HXt = new j(() => new Et());
function CW() {
  return {
    sent: new Set(),
    rejected: new Set(),
    declaredTools: void 0,
    declaredToolsDecided: !1,
    readsTranscriptRecord: !0,
    nameOnlyAnnouncements: new Set(),
    surfacedOnWire: new Set(),
  };
}
function LA(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: void 0,
    declaredToolsDecided: !1,
    readsTranscriptRecord: !1,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
  };
}
function ije(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: e.declaredTools,
    declaredToolsDecided: e.declaredToolsDecided,
    readsTranscriptRecord: e.readsTranscriptRecord,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
  };
}
function Vxt(e) {
  ((e.declaredTools = void 0), (e.declaredToolsDecided = !1));
}
function nrt(e) {
  e.declaredToolsDecided = !0;
}
function V(e) {
  let t = CW();
  return (
    (t.declaredTools = e.declaredTools),
    (t.declaredToolsDecided = e.declaredToolsDecided),
    (t.readsTranscriptRecord = e.readsTranscriptRecord),
    t
  );
}
function Kxt(e, t) {
  if (e.declaredTools === void 0) e.declaredTools = t;
  nrt(e);
}
function gB(e, t) {
  if (!e.rejected.has(t)) e.sent.add(t);
}
function W1(e, t) {
  return e.sent.has(t) && !e.rejected.has(t);
}
function TS(e, t) {
  (e.sent.delete(t), e.rejected.add(t));
}
function x_(e, t) {
  return e.rejected.has(t);
}
class oe {
  spawner = void 0;
  pairings = new Map();
  mainEnsureInFlight = !1;
  mainSlotBlocked = !1;
}
class re {
  #e = CW();
  #t = new Map();
  #n = void 0;
  stickyBetas() {
    return this.#e;
  }
  unlatchStickyBetas() {
    this.#e = V(this.#e);
  }
  perTurnEffortPins() {
    return this.#t;
  }
  atisLatch() {
    return this.#n;
  }
  replaceAtisLatch(e) {
    this.#n = e;
  }
  reset() {
    ((this.#e = CW()), (this.#t = new Map()), (this.#n = void 0));
  }
}
var Ur = (function () {
    try {
      var e = MW(Object, "defineProperty");
      return (e({}, "", {}), e);
    } catch (t) {}
  })(),
  rrt = Ur;
function jr(e, t, o) {
  if (t == "__proto__" && rrt)
    rrt(e, t, { configurable: !0, enumerable: !0, value: o, writable: !0 });
  else e[t] = o;
}
var sZ = jr;
function createBaseFor(e) {
  return function (t, o, r) {
    var i = -1,
      s = Object(t),
      a = r(t),
      l = a.length;
    while (l--) {
      var d = a[e ? l : ++i];
      if (o(s[d], d, s) === !1) break;
    }
    return t;
  };
}
var qr = createBaseFor(),
  IXt = qr;
function Gr(e, t) {
  return e && IXt(e, t, yz);
}
var ort = Gr;
var Nr = 1,
  Kr = 2;
function baseIsMatch(e, t, o, r) {
  var i = o.length,
    s = i,
    a = !r;
  if (e == null) return !s;
  e = Object(e);
  while (i--) {
    var l = o[i];
    if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  while (++i < s) {
    l = o[i];
    var d = l[0],
      u = e[d],
      S = l[1];
    if (a && l[2]) {
      if (u === void 0 && !(d in e)) return !1;
    } else {
      var c = new Stack();
      if (r) var p = r(u, S, d, e, t, c);
      if (!(p === void 0 ? baseIsEqual(S, u, Nr | Kr, r, c) : p)) return !1;
    }
  }
  return !0;
}
function isStrictComparable(e) {
  return e === e && !Fm(e);
}
function getMatchData(e) {
  var t = yz(e),
    o = t.length;
  while (o--) {
    var r = t[o],
      i = e[r];
    t[o] = [r, i, isStrictComparable(i)];
  }
  return t;
}
function matchesStrictComparable(e, t) {
  return function (o) {
    if (o == null) return !1;
    return o[e] === t && (t !== void 0 || e in Object(o));
  };
}
function baseMatches(e) {
  var t = getMatchData(e);
  if (t.length == 1 && t[0][2]) return matchesStrictComparable(t[0][0], t[0][1]);
  return function (o) {
    return o === e || baseIsMatch(o, e, t);
  };
}
var Xr = "[object Symbol]";
function isSymbol(e) {
  return typeof e == "symbol" || (isObjectLike(e) && LW(e) == Xr);
}
var Zr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  ei = /^\w*$/;
function isKey(e, t) {
  if (vg(e)) return !1;
  var o = typeof e;
  if (o == "number" || o == "symbol" || o == "boolean" || e == null || isSymbol(e))
    return !0;
  return ei.test(e) || !Zr.test(e) || (t != null && e in Object(t));
}
var ni = 500;
function memoizeCapped(e) {
  var t = rs(e, function (r) {
      if (o.size === ni) o.clear();
      return r;
    }),
    o = t.cache;
  return t;
}
var ri =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  ii = /\\(\\)?/g,
  si = memoizeCapped(function (e) {
    var t = [];
    if (e.charCodeAt(0) === 46) t.push("");
    return (
      e.replace(ri, function (o, r, i, s) {
        t.push(i ? s.replace(ii, "$1") : r || o);
      }),
      t
    );
  }),
  Wt = si;
function arrayMap(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length,
    i = Array(r);
  while (++o < r) i[o] = t(e[o], o, e);
  return i;
}
var li = 1 / 0,
  qt = F0 ? F0.prototype : void 0,
  Nt = qt ? qt.toString : void 0;
function baseToString(e) {
  if (typeof e == "string") return e;
  if (vg(e)) return arrayMap(e, baseToString) + "";
  if (isSymbol(e)) return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -li ? "-0" : t;
}
function toString(e) {
  return e == null ? "" : baseToString(e);
}
function castPath(e, t) {
  if (vg(e)) return e;
  return isKey(e, t) ? [e] : Wt(toString(e));
}
var ci = 1 / 0;
function toKey(e) {
  if (typeof e == "string" || isSymbol(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -ci ? "-0" : t;
}
function baseGet(e, t) {
  t = castPath(t, e);
  var o = 0,
    r = t.length;
  while (e != null && o < r) e = e[toKey(t[o++])];
  return o && o == r ? e : void 0;
}
function get(e, t, o) {
  var r = e == null ? void 0 : baseGet(e, t);
  return r === void 0 ? o : r;
}
function baseHasIn(e, t) {
  return e != null && t in Object(e);
}
function mi(e, t, o) {
  t = castPath(t, e);
  var r = -1,
    i = t.length,
    s = !1;
  while (++r < i) {
    var a = toKey(t[r]);
    if (!(s = e != null && o(e, a))) break;
    e = e[a];
  }
  if (s || ++r != i) return s;
  return (
    (i = e == null ? 0 : e.length),
    !!i && isLength(i) && _xe(a, i) && (vg(e) || e_e(e))
  );
}
var $t = mi;
function vi(e, t) {
  return e != null && $t(e, t, baseHasIn);
}
var PXt = vi;
var yi = 1,
  Ci = 2;
function baseMatchesProperty(e, t) {
  if (isKey(e) && isStrictComparable(t)) return matchesStrictComparable(toKey(e), t);
  return function (o) {
    var r = get(o, e);
    return r === void 0 && r === t ? PXt(o, e) : baseIsEqual(t, r, yi | Ci);
  };
}
function xi(e) {
  return e;
}
var srt = xi;
function baseProperty(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
function basePropertyDeep(e) {
  return function (t) {
    return baseGet(t, e);
  };
}
function property(e) {
  return isKey(e) ? baseProperty(toKey(e)) : basePropertyDeep(e);
}
function baseIteratee(e) {
  if (typeof e == "function") return e;
  if (e == null) return srt;
  if (typeof e == "object") return vg(e) ? baseMatchesProperty(e[0], e[1]) : baseMatches(e);
  return property(e);
}
function Mi(e, t) {
  var o = {};
  return (
    (t = baseIteratee(t, 3)),
    ort(e, function (r, i, s) {
      sZ(o, i, t(r, i, s));
    }),
    o
  );
}
var Si = Mi;
function baseSum(e, t) {
  var o,
    r = -1,
    i = e.length;
  while (++r < i) {
    var s = t(e[r]);
    if (s !== void 0) o = o === void 0 ? s : o + s;
  }
  return o;
}
function sumBy(e, t) {
  return e && e.length ? baseSum(e, baseIteratee(t, 2)) : 0;
}
function X(e) {
  let t = Object.create(null);
  return Object.assign(t, e);
}
class ie {
  #e = 0;
  #t = 0;
  #n = 0;
  #o = 0;
  #r = Date.now();
  #i = void 0;
  #d = 0;
  #s = 0;
  #a = !1;
  #l = X();
  #u = null;
  #g = null;
  #p = null;
  totalCostUSD() {
    return this.#e;
  }
  totalAPIDuration() {
    return this.#t;
  }
  totalAPIDurationWithoutRetries() {
    return this.#n;
  }
  totalToolDuration() {
    return this.#o;
  }
  totalDuration() {
    return Math.max(0, Date.now() - this.#r);
  }
  sessionStartTime() {
    return this.#i ?? this.#r;
  }
  totalLinesAdded() {
    return this.#d;
  }
  totalLinesRemoved() {
    return this.#s;
  }
  hasUnknownModelCost() {
    return this.#a;
  }
  modelUsage() {
    return this.#l;
  }
  usageForModel(e) {
    return this.#l[e];
  }
  totalInputTokens() {
    return sumBy(Object.values(this.#l), "inputTokens");
  }
  totalOutputTokens() {
    return sumBy(Object.values(this.#l), "outputTokens");
  }
  totalCacheReadInputTokens() {
    return sumBy(Object.values(this.#l), "cacheReadInputTokens");
  }
  totalCacheCreationInputTokens() {
    return sumBy(Object.values(this.#l), "cacheCreationInputTokens");
  }
  totalWebSearchRequests() {
    return sumBy(Object.values(this.#l), "webSearchRequests");
  }
  recordApiDuration(e, t) {
    ((this.#t += e), (this.#n += t));
  }
  recordCost(e, t, o) {
    ((this.#l[o] = t), (this.#e += e));
  }
  recordToolDuration(e) {
    this.#o += e;
  }
  recordLinesChanged(e, t) {
    ((this.#d += e), (this.#s += t));
  }
  markUnknownModelCost() {
    this.#a = !0;
  }
  zeroDurationsAndCostForTests() {
    ((this.#t = 0), (this.#n = 0), (this.#e = 0));
  }
  restartClock() {
    ((this.#r = Date.now()), this.anchorLogicalStart(void 0));
  }
  anchorLogicalStart(e) {
    this.#i = e === void 0 ? void 0 : Math.min(e, this.#r);
  }
  restore(
    {
      totalCostUSD: e,
      totalAPIDuration: t,
      totalAPIDurationWithoutRetries: o,
      totalToolDuration: r,
      totalLinesAdded: i,
      totalLinesRemoved: s,
      lastDuration: a,
      startTime: l,
      modelUsage: d,
      hasUnknownModelCost: u,
    },
    S,
  ) {
    if (
      ((this.#p = S),
      (this.#e = e),
      (this.#t = t),
      (this.#n = o),
      (this.#o = r),
      (this.#d = i),
      (this.#s = s),
      (this.#a = u ?? !1),
      d)
    )
      this.#l = X(d);
    if (a !== void 0) this.#r = Date.now() - a;
    this.anchorLogicalStart(l);
  }
  registerSaver(e) {
    this.#u = e;
  }
  runSaver(e, t) {
    (this.#u ?? (t ? t.#u : null))?.(e);
  }
  registerTranscriptRecorder(e) {
    this.#g = e;
  }
  runTranscriptRecorder(e, t, o) {
    (this.#g ?? (o ? o.#g : null))?.(e, t);
  }
  snapshot() {
    return {
      ownerSessionId: this.#p,
      totalCostUSD: this.#e,
      totalAPIDuration: this.#t,
      totalAPIDurationWithoutRetries: this.#n,
      totalToolDuration: this.#o,
      startTime: this.#r,
      sessionLogicalStartTime: this.#i,
      totalLinesAdded: this.#d,
      totalLinesRemoved: this.#s,
      hasUnknownModelCost: this.#a,
      modelUsage: Si(this.#l, (e) => ({ ...e })),
    };
  }
  restoreSnapshot(e) {
    ((this.#p = e.ownerSessionId),
      (this.#e = e.totalCostUSD),
      (this.#t = e.totalAPIDuration),
      (this.#n = e.totalAPIDurationWithoutRetries),
      (this.#o = e.totalToolDuration),
      (this.#r = e.startTime),
      (this.#i = e.sessionLogicalStartTime),
      (this.#d = e.totalLinesAdded),
      (this.#s = e.totalLinesRemoved),
      (this.#a = e.hasUnknownModelCost),
      (this.#l = X(Si(e.modelUsage, (t) => ({ ...t })))));
  }
  claim(e) {
    this.#p ??= e;
  }
  scopeTo(e) {
    this.#p = e;
  }
  ownerSessionId() {
    return this.#p;
  }
  belongsTo(e) {
    return this.#p === e;
  }
  reset(e) {
    ((this.#p = e),
      (this.#e = 0),
      (this.#t = 0),
      (this.#n = 0),
      (this.#o = 0),
      (this.#r = Date.now()),
      this.anchorLogicalStart(void 0),
      (this.#d = 0),
      (this.#s = 0),
      (this.#a = !1),
      (this.#l = X()));
  }
}
class se {
  #e = !1;
  fableConsentSessionFallback() {
    return this.#e;
  }
  replaceFableConsentSessionFallback(e) {
    this.#e = e;
  }
  reset() {
    this.#e = !1;
  }
}
class ae {
  #e = { registeredHooks: null };
  #t = void 0;
  #n = void 0;
  holder() {
    return this.#e;
  }
  mainThreadAgentType() {
    return this.#t;
  }
  replaceMainThreadAgentType(e) {
    this.#t = e;
  }
  mainThreadAgentHooks() {
    return this.#n;
  }
  replaceMainThreadAgentHooks(e) {
    this.#n = e;
  }
  reset() {
    ((this.#e = { registeredHooks: null }),
      (this.#t = void 0),
      (this.#n = void 0));
  }
}
class le {
  #e = new Map();
  skills() {
    return this.#e;
  }
  lookup(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
  forget(e) {
    this.#e.delete(e);
  }
  forgetAll() {
    this.#e.clear();
  }
  reset() {
    this.#e = new Map();
  }
}
class de {
  #e = [];
  #t;
  #n;
  #o;
  #r;
  approvedServers() {
    return this.#e;
  }
  approveServers(e, t) {
    for (let o of t)
      if (!this.#e.some((r) => r.name === o && r.workspaceKey === e))
        this.#e.push({ name: o, workspaceKey: e });
  }
  registerClientsAccessor(e) {
    this.#t = e;
  }
  acquireClientsAccessor(e) {
    if (this.#t) return () => {};
    return (
      (this.#t = e),
      () => {
        if (this.#t === e) this.#t = void 0;
      }
    );
  }
  clientsFromAccessor() {
    return this.#t?.();
  }
  registerConnectedClientWiring(e) {
    this.#n = e;
  }
  connectedClientWiring() {
    return this.#n;
  }
  registerToolsSwapper(e) {
    this.#o = e;
  }
  acquireToolsSwapper(e) {
    if (this.#o) return () => {};
    return (
      (this.#o = e),
      () => {
        if (this.#o === e) this.#o = void 0;
      }
    );
  }
  swapServerTools(e, t) {
    if (!this.#o) return !1;
    return this.#o(e, t);
  }
  registerConnections(e) {
    this.#r = e;
  }
  acquireConnections(e) {
    if (this.#r) return () => {};
    return (
      (this.#r = e),
      () => {
        if (this.#r === e) this.#r = void 0;
      }
    );
  }
  connections() {
    return this.#r;
  }
  reset() {
    ((this.#e = []), (this.#t = void 0));
  }
}
class ue {
  #e = void 0;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = void 0;
  #i = void 0;
  #d = !1;
  #s = !1;
  #a = void 0;
  #l = void 0;
  mainLoopModelOverride() {
    return this.#e;
  }
  overrideMainLoopModel(e) {
    this.#e = e;
  }
  mainLoopEffortState() {
    return this.#t;
  }
  replaceMainLoopEffortState(e) {
    this.#t = e;
  }
  initialMainLoopModel() {
    return this.#n;
  }
  replaceInitialMainLoopModel(e) {
    this.#n = e;
  }
  initialModelSettingLayer() {
    return this.#o;
  }
  replaceInitialModelSettingLayer(e) {
    this.#o = e;
  }
  resolvedOrgDefault() {
    return this.#r;
  }
  replaceResolvedOrgDefault(e) {
    this.#r = e;
  }
  initialEnvDefaultModel() {
    return this.#i;
  }
  replaceInitialEnvDefaultModel(e) {
    this.#i = e;
  }
  refusalFallbackOccurred() {
    return this.#d;
  }
  markRefusalFallbackOccurred(e) {
    ((this.#d = !0), (this.#a ??= e));
  }
  refusalFallbackHeaderArmed() {
    return this.#s;
  }
  armRefusalFallbackHeader(e) {
    ((this.#s = !0), (this.#a ??= e));
  }
  refusalFallbackLatchOriginRequestId() {
    return this.#a;
  }
  forgetRefusalFallbackOccurred() {
    ((this.#d = !1), (this.#s = !1), (this.#a = void 0));
  }
  refusalFallbackModelLatch() {
    return this.#l;
  }
  replaceRefusalFallbackModelLatch(e) {
    this.#l = e;
  }
  unlatchRefusalFallbackModel() {
    this.#l = void 0;
  }
  reset() {
    ((this.#e = void 0),
      (this.#t = void 0),
      (this.#n = void 0),
      (this.#o = void 0),
      (this.#r = void 0),
      (this.#i = void 0),
      (this.#d = !1),
      (this.#s = !1),
      (this.#a = void 0),
      (this.#l = void 0));
  }
}
class ce {
  #e = new Map();
  #t = null;
  #n = 0;
  #o = void 0;
  #r = null;
  sections() {
    return this.#e;
  }
  recordSection(e, t) {
    this.#e.set(e, t);
  }
  forgetAllSections() {
    this.#e.clear();
  }
  noteInvalidation(e = "other") {
    ((this.#n += 1), (this.#o = e));
  }
  epoch() {
    return this.#n;
  }
  lastInvalidationReason() {
    return this.#o;
  }
  registerWordingLatchClear(e) {
    this.#r = e;
  }
  clearWordingLatch(e) {
    (this.#r ?? (e ? e.#r : null))?.();
  }
  lastEmittedDate() {
    return this.#t;
  }
  replaceLastEmittedDate(e) {
    this.#t = e;
  }
  reset() {
    ((this.#e = new Map()), (this.#t = null));
  }
}
class pe {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #i = 0;
  #d = void 0;
  #s = null;
  #a = null;
  #l = !1;
  #u = null;
  #g = null;
  #p = !1;
  lastAPIRequest() {
    return this.#e;
  }
  replaceLastAPIRequest(e) {
    this.#e = e;
  }
  lastCancelledAPIMessageId() {
    return this.#t;
  }
  replaceLastCancelledAPIMessageId(e) {
    this.#t = e;
  }
  lastAPIRequestMessages() {
    return this.#n;
  }
  replaceLastAPIRequestMessages(e) {
    this.#n = e;
  }
  lastClassifierRequests() {
    return this.#o;
  }
  replaceLastClassifierRequests(e) {
    this.#o = e;
  }
  promptId() {
    return this.#r;
  }
  replacePromptId(e) {
    this.#r = e;
  }
  promptIndex() {
    return this.#i;
  }
  replacePromptIndex(e) {
    this.#i = e;
  }
  incrementPromptIndex() {
    return (this.#i++, this.#i);
  }
  lastMainRequestId() {
    return this.#d;
  }
  replaceLastMainRequestId(e) {
    this.#d = e;
  }
  lastMainThreadCacheTtlMs() {
    return this.#s;
  }
  replaceLastMainThreadCacheTtlMs(e) {
    ((this.#s = e), (this.#a = Date.now()), (this.#l = !0));
  }
  lastMainThreadRequestAt() {
    return this.#a;
  }
  mainThreadRequestedInProcess() {
    return this.#l;
  }
  recordMainThreadTurnStart() {
    this.#l = !0;
  }
  replaceLastMainThreadRequest(e, t) {
    ((this.#a = e), (this.#s = t));
  }
  lastMainThreadContextTokens() {
    return this.#u;
  }
  replaceLastMainThreadContextTokens(e) {
    this.#u = e;
  }
  stageResumeSeed(e) {
    this.#c = e;
  }
  applyResumeSeed(e) {
    ((this.#c = null),
      (this.#s = e.ttlMs),
      (this.#a = e.requestAt),
      (this.#u = e.contextTokens));
  }
  #c = null;
  clearLastMainThreadRequest(e) {
    let t = e !== void 0 && this.#c?.sessionId === e ? this.#c : null;
    ((this.#c = null),
      (this.#s = t?.ttlMs ?? null),
      (this.#a = t?.requestAt ?? null),
      (this.#u = t?.contextTokens ?? null),
      (this.#l = !1));
  }
  lastApiCompletionTimestamp() {
    return this.#g;
  }
  replaceLastApiCompletionTimestamp(e) {
    this.#g = e;
  }
  pendingPostCompaction() {
    return this.#p;
  }
  replacePendingPostCompaction(e) {
    this.#p = e;
  }
  reset() {
    ((this.#e = null),
      (this.#t = null),
      (this.#n = null),
      (this.#o = null),
      (this.#r = null),
      (this.#i = 0),
      (this.#d = void 0),
      (this.#s = null),
      (this.#a = null),
      (this.#l = !1),
      (this.#u = null),
      (this.#c = null),
      (this.#g = null),
      (this.#p = !1));
  }
}
class ge {
  #e = [];
  #t = Object.create(null);
  #n = null;
  #o = 0;
  #r = !1;
  #i = 0;
  tasks() {
    return this.#e;
  }
  schedule(e) {
    this.#e.push(e);
  }
  replaceTasks(e) {
    this.#e = e;
  }
  chainStartedAt(e) {
    return this.#t[e];
  }
  recordChainStart(e, t) {
    this.#t[e] = t;
  }
  forgetChainStart(e) {
    delete this.#t[e];
  }
  tickInFlightPrompt() {
    return this.#n;
  }
  replaceTickInFlightPrompt(e) {
    this.#n = e;
  }
  consecutiveKeepalives() {
    return this.#o;
  }
  replaceConsecutiveKeepalives(e) {
    this.#o = e;
  }
  ended() {
    return this.#r;
  }
  replaceEnded(e) {
    this.#r = e;
  }
  wakeFires() {
    return this.#i;
  }
  recordWakeFire() {
    this.#i++;
  }
  resetWakeFires() {
    this.#i = 0;
  }
  reset() {
    ((this.#e = []),
      (this.#t = Object.create(null)),
      (this.#n = null),
      (this.#o = 0),
      (this.#r = !1),
      (this.#i = 0));
  }
}
class fe {
  #e = !1;
  #t = !1;
  #n = !1;
  #o = !1;
  #r = !1;
  #i = !1;
  #d = !1;
  #s = !1;
  #a = !1;
  #l = !1;
  #u = null;
  #g = null;
  #p = null;
  #c = !1;
  #f = null;
  #h = !1;
  #m = !1;
  #S = !1;
  #y = !1;
  #b = !1;
  #v = void 0;
  #C = void 0;
  #x = void 0;
  #k = null;
  #T = null;
  onboardingShownThisSession() {
    return this.#e;
  }
  replaceOnboardingShownThisSession(e) {
    this.#e = e;
  }
  lspRecommendationShownThisSession() {
    return this.#t;
  }
  replaceLspRecommendationShownThisSession(e) {
    this.#t = e;
  }
  sessionTrustAccepted() {
    return this.#n;
  }
  replaceSessionTrustAccepted(e) {
    this.#n = e;
  }
  homeTrustDialogAccepted() {
    return this.#o;
  }
  replaceHomeTrustDialogAccepted(e) {
    this.#o = e;
  }
  hasExitedPlanMode() {
    return this.#r;
  }
  replaceHasExitedPlanMode(e) {
    this.#r = e;
  }
  needsPlanModeExitAttachment() {
    return this.#i;
  }
  replaceNeedsPlanModeExitAttachment(e) {
    this.#i = e;
  }
  needsAutoModeExitAttachment() {
    return this.#d;
  }
  replaceNeedsAutoModeExitAttachment(e) {
    this.#d = e;
  }
  memoryToggledOff() {
    return this.#s;
  }
  replaceMemoryToggledOff(e) {
    this.#s = e;
  }
  teardownUnwindRequested() {
    return this.#c;
  }
  replaceTeardownUnwindRequested(e) {
    this.#c = e;
  }
  backgroundAutoModeSetupInFlight() {
    return this.#a;
  }
  replaceBackgroundAutoModeSetupInFlight(e) {
    this.#a = e;
  }
  launchEffortPinsReleasedForSession() {
    return this.#l;
  }
  markLaunchEffortPinsReleasedForSession() {
    this.#l = !0;
  }
  restoreLaunchEffortPinsReleasedForSession(e) {
    this.#l = e;
  }
  deferredToolStubGateLatch() {
    return this.#u;
  }
  replaceDeferredToolStubGateLatch(e) {
    this.#u = e;
  }
  verifySkillRolloutGateLatch() {
    return this.#g;
  }
  replaceVerifySkillRolloutGateLatch(e) {
    this.#g = e;
  }
  commitSkillRolloutGateLatch() {
    return this.#p;
  }
  replaceCommitSkillRolloutGateLatch(e) {
    this.#p = e;
  }
  memoryToolsShapeLatch() {
    return this.#f;
  }
  replaceMemoryToolsShapeLatch(e) {
    this.#f = e;
  }
  proposeGoalAvailabilityLogged() {
    return this.#h;
  }
  markProposeGoalAvailabilityLogged() {
    this.#h = !0;
  }
  activeRoutine() {
    return this.#C;
  }
  replaceActiveRoutine(e) {
    this.#C = e;
  }
  inheritedTeamName() {
    return this.#x;
  }
  replaceInheritedTeamName(e) {
    this.#x = e;
  }
  teleportedSessionInfo() {
    return this.#k;
  }
  replaceTeleportedSessionInfo(e) {
    this.#k = e;
  }
  markFirstTeleportMessageLogged() {
    if (this.#k) this.#k.hasLoggedFirstMessage = !0;
  }
  cachedClaudeMdContent() {
    return this.#T;
  }
  replaceCachedClaudeMdContent(e) {
    this.#T = e;
  }
  accountSkillsSyncEnabled() {
    return this.#m;
  }
  replaceAccountSkillsSyncEnabled(e) {
    this.#m = e;
  }
  skillsSyncVetoed() {
    return this.#S;
  }
  replaceSkillsSyncVetoed(e) {
    this.#S = e;
  }
  accountPluginsSyncEnabled() {
    return this.#y;
  }
  replaceAccountPluginsSyncEnabled(e) {
    this.#y = e;
  }
  pluginsSyncVetoed() {
    return this.#b;
  }
  replacePluginsSyncVetoed(e) {
    this.#b = e;
  }
  armPendingContextCompacted(e) {
    this.#v = e;
  }
  consumePendingContextCompacted() {
    let e = this.#v;
    return ((this.#v = void 0), e);
  }
  forgetPendingContextCompacted() {
    this.#v = void 0;
  }
  reset() {
    ((this.#m = !1),
      (this.#S = !1),
      (this.#y = !1),
      (this.#b = !1),
      (this.#e = !1),
      (this.#t = !1),
      (this.#n = !1),
      (this.#o = !1),
      (this.#r = !1),
      (this.#i = !1),
      (this.#d = !1),
      (this.#s = !1),
      (this.#c = !1),
      (this.#a = !1),
      (this.#l = !1),
      (this.#u = null),
      (this.#g = null),
      (this.#p = null),
      (this.#f = null),
      (this.#h = !1),
      (this.#C = void 0),
      (this.#x = void 0),
      (this.#k = null),
      (this.#T = null),
      (this.#v = void 0));
  }
}
class me {
  #e = new Map();
  #t = new Map();
  #n = null;
  #o = new Map();
  #r = new Set();
  #i = new Set();
  #d = new Set();
  #s = new Set();
  #a = new Set();
  #l = new Set();
  #u = new Set();
  #g = new Set();
  #p = new Set();
  #c = new Map();
  #f = new Set();
  #h = void 0;
  #m = void 0;
  #S = void 0;
  planSlugCache() {
    return this.#e;
  }
  forgetPlanSlug(e) {
    this.#e.delete(e);
  }
  pendingBranchLinks() {
    return this.#t;
  }
  replacePendingBranchLinks() {
    this.#t = new Map();
  }
  vimSharedState() {
    return this.#n;
  }
  replaceVimSharedState(e) {
    this.#n = e;
  }
  agentColorMap() {
    return this.#o;
  }
  sessionCreatedTeams() {
    return this.#r;
  }
  surfacedHookSpawnFailures() {
    return this.#i;
  }
  bareMcpServerMatchersWarned() {
    return this.#d;
  }
  pendingConversationEditKinds() {
    return this.#s;
  }
  clientTruncatedAssistantIds() {
    return this.#a;
  }
  heldStatelessReplyIds() {
    return this.#l;
  }
  unsupportedThreadKeys() {
    return this.#u;
  }
  pendingPrLinks() {
    return this.#g;
  }
  policyPredicateTelemetryEmitted() {
    return this.#p;
  }
  humanAttachmentDigests() {
    return this.#c;
  }
  chromeAvailabilityStagesLogged() {
    return this.#f;
  }
  replaceChromeAvailabilityStagesLogged(e) {
    if (((this.#f = new Set()), e)) this.#h = Date.now();
  }
  chromeAvailabilityAnchorMs() {
    return this.#h;
  }
  pendingGoalIdleCheckin() {
    return this.#m;
  }
  replacePendingGoalIdleCheckin(e) {
    this.#m = e;
  }
  workerCheckin() {
    return this.#S;
  }
  replaceWorkerCheckin(e) {
    this.#S = e;
  }
  reset() {
    ((this.#e = new Map()),
      (this.#t = new Map()),
      (this.#n = null),
      (this.#o = new Map()),
      (this.#r = new Set()),
      (this.#i = new Set()),
      (this.#d = new Set()),
      (this.#s = new Set()),
      (this.#a = new Set()),
      (this.#l = new Set()),
      (this.#u = new Set()),
      (this.#g = new Set()),
      (this.#p = new Set()),
      (this.#c = new Map()),
      (this.#f = new Set()),
      (this.#h = void 0),
      clearTimeout(this.#m),
      (this.#m = void 0),
      clearInterval(this.#S?.timer),
      (this.#S = void 0));
  }
}
var tn = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null,
};
class Se {
  #e = !1;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = null;
  #i = !1;
  #d = void 0;
  #s = tn;
  #a = !1;
  #l = "idle";
  attacherCapsChanged = Le();
  rvSupervisorLinkChanged = Le();
  sdkDialogHostActive() {
    return this.#e;
  }
  markSdkDialogHostActive(e) {
    this.#e = e;
  }
  sdkSupportedDialogKinds() {
    return this.#t;
  }
  sdkSupportedDialogKindsSource() {
    return this.#n;
  }
  declareDialogKinds(e, t) {
    ((this.#t = e), (this.#n = e === void 0 ? void 0 : t));
  }
  sdkPerTaskStopAffordance() {
    return this.#o;
  }
  declarePerTaskStopAffordance(e) {
    this.#o = e;
  }
  attacherCaps() {
    return this.#r;
  }
  replaceAttacherCaps(e) {
    ((this.#r = e), this.attacherCapsChanged.emit());
  }
  rvSupervisorLinkLive() {
    return this.#i;
  }
  replaceRvSupervisorLinkLive(e) {
    if (this.#i === e) return;
    ((this.#i = e), this.rvSupervisorLinkChanged.emit());
  }
  sdkBetas() {
    return this.#d;
  }
  replaceSdkBetas(e) {
    this.#d = e;
  }
  caps() {
    return this.#s;
  }
  replaceCaps(e) {
    this.#s = e;
  }
  markRemote(e) {
    this.#s = { ...this.#s, workspace: e ? "remote" : "local" };
  }
  replBridgeActive() {
    return this.#a;
  }
  replaceReplBridgeActive(e) {
    if (this.#a === e) return;
    this.#a = e;
  }
  mainLoopBusy() {
    return this.#l !== "idle";
  }
  mainQueryRunning() {
    return this.#l === "running";
  }
  replaceMainLoopStatus(e) {
    this.#l = e;
  }
  reset() {
    ((this.#e = !1),
      (this.#t = void 0),
      (this.#n = void 0),
      (this.#o = void 0),
      (this.#r = null),
      (this.#d = void 0),
      (this.#s = tn),
      (this.#a = !1),
      (this.#l = "idle"),
      (this.#i = !1),
      this.attacherCapsChanged.clear(),
      this.rvSupervisorLinkChanged.clear());
  }
}
class ve {
  #e = 0;
  #t = null;
  #n = 0;
  outputTokensAtTurnStart() {
    return this.#e;
  }
  budget() {
    return this.#t;
  }
  continuationCount() {
    return this.#n;
  }
  snapshotForTurn(e, t) {
    ((this.#e = e), (this.#t = t), (this.#n = 0));
  }
  incrementContinuation() {
    this.#n++;
  }
  reset() {
    ((this.#e = 0), (this.#t = null), (this.#n = 0));
  }
}
var nn = 150;
class ye {
  #e = Date.now();
  #t = !1;
  interactionFired = Le();
  #n = void 0;
  terminalFocusFired = Le();
  #o = !1;
  #r;
  lastInteractionTime() {
    return this.#e;
  }
  recordInteraction(e) {
    if (e) this.#i();
    else this.#t = !0;
  }
  flushIfDirty() {
    if (this.#t) this.#i();
  }
  #i() {
    ((this.#e = Date.now()), (this.#t = !1), this.interactionFired.emit());
  }
  resetBaseline() {
    ((this.#e = Date.now()), (this.#t = !1));
  }
  terminalFocus() {
    return this.#n;
  }
  updateTerminalFocus(e) {
    ((this.#n = e), this.terminalFocusFired.emit());
  }
  scrollDraining() {
    return this.#o;
  }
  markScrollActivity() {
    if (((this.#o = !0), this.#r)) clearTimeout(this.#r);
    ((this.#r = setTimeout(() => {
      ((this.#o = !1), (this.#r = void 0));
    }, nn)),
      this.#r.unref?.());
  }
  async waitForScrollIdle() {
    while (this.#o) await new Promise((e) => setTimeout(e, nn));
  }
  reset() {
    ((this.#e = Date.now()),
      (this.#n = void 0),
      this.interactionFired.clear(),
      this.terminalFocusFired.clear());
  }
}
var Ii = ["sdk_single_prompt_gate", "subagent_estimate", "subagent_final_turn"];
class be {
  byAgent = new Map();
  attemptsByAgent = new Map();
  cappedFailuresByAgent = new Map();
  armGateEventEmitted = new Set();
  sidecarIo = Promise.resolve();
  rehydrateAttemptedSessions = new Set();
  sidecarReadsAhead = new Map();
  get(e) {
    return this.byAgent.get(e);
  }
  has(e) {
    return this.byAgent.has(e);
  }
  put(e, t) {
    this.byAgent.set(e, t);
  }
  remove(e) {
    this.byAgent.delete(e);
  }
  nextAttemptNumber(e) {
    let t = (this.attemptsByAgent.get(e) ?? 0) + 1;
    return (this.attemptsByAgent.set(e, t), t);
  }
  consecutiveCountedFailures(e) {
    return this.cappedFailuresByAgent.get(e) ?? 0;
  }
  recordCountedFailure(e) {
    let t = (this.cappedFailuresByAgent.get(e) ?? 0) + 1;
    return (this.cappedFailuresByAgent.set(e, t), t);
  }
  clearCountedFailures(e) {
    this.cappedFailuresByAgent.delete(e);
  }
  latchArmGateEvent(e) {
    if (this.armGateEventEmitted.has(e)) return !1;
    return (this.armGateEventEmitted.add(e), !0);
  }
  enqueueSidecarIo(e, t) {
    return (
      (this.sidecarIo = this.sidecarIo.then(e, e).catch(t)),
      this.sidecarIo
    );
  }
  sidecarIoSettled() {
    return this.sidecarIo;
  }
  hasAttemptedRehydrate(e) {
    return this.rehydrateAttemptedSessions.has(e);
  }
  markRehydrateAttempted(e) {
    this.rehydrateAttemptedSessions.add(e);
  }
  keepSidecarReadAhead(e, t) {
    this.sidecarReadsAhead.delete(e);
    while (this.sidecarReadsAhead.size >= 8) {
      let o = this.sidecarReadsAhead.keys().next().value;
      if (o === void 0) break;
      this.sidecarReadsAhead.delete(o);
    }
    this.sidecarReadsAhead.set(e, t);
  }
  takeSidecarReadAhead(e) {
    let t = this.sidecarReadsAhead.get(e);
    return (this.sidecarReadsAhead.delete(e), t);
  }
  dropSidecarReadAhead(e) {
    this.sidecarReadsAhead.delete(e);
  }
  forgetSubagentTelemetry(e) {
    (this.attemptsByAgent.delete(e), this.cappedFailuresByAgent.delete(e));
    for (let t of Ii) this.armGateEventEmitted.delete(`${e}:${t}`);
  }
}
class Ce {
  #e = null;
  #t = null;
  mainAgentId(e) {
    return ((this.#e ??= oo(e)), this.#e);
  }
  projectDir() {
    return this.#t;
  }
  replaceProjectDir(e) {
    this.#t = e;
  }
}
class xe {
  openToolUseId;
  answeredThisSession = !1;
  get answered() {
    return this.answeredThisSession;
  }
  markAnswered() {
    this.answeredThisSession = !0;
  }
  isOpenElsewhere(e) {
    return this.openToolUseId !== void 0 && this.openToolUseId !== e;
  }
  open(e) {
    this.openToolUseId = e;
  }
  closeFor(e) {
    if (e !== void 0 && this.openToolUseId === e) this.openToolUseId = void 0;
  }
}
class Te {
  granted = !1;
  isGranted() {
    return this.granted;
  }
  grant() {
    this.granted = !0;
  }
}
class Ae {
  inFlight = null;
  startedForTurnEnd = !1;
  reset() {
    (this.inFlight?.abort(),
      (this.inFlight = null),
      (this.startedForTurnEnd = !1));
  }
}
class Pe {
  firstSyncPromise = null;
  syncErrors = [];
  syncedLaneOpened = !1;
  removalsDeferredHere = new Set();
  pendingTrashRemovals = [];
  ensureBucketRoot = null;
}
class Re {
  abortController = null;
  reset() {
    (this.abortController?.abort(), (this.abortController = null));
  }
}
class Me {
  #e = void 0;
  #t = void 0;
  ccrSessionID() {
    return this.#e;
  }
  latchCcrSessionID(e) {
    this.#e = e;
  }
  syncEnabled() {
    return this.#t;
  }
  latchSyncEnabled(e) {
    return ((this.#t = e), e);
  }
}
class we {
  autonomousPreambleDelivered = !1;
  lastLoopFileDelivered = null;
  reset() {
    ((this.autonomousPreambleDelivered = !1),
      (this.lastLoopFileDelivered = null));
  }
}
class Ie {
  exchanges = [];
  replace(e) {
    this.exchanges = e;
  }
  append(e, t, o) {
    this.exchanges = [
      ...this.exchanges,
      { question: e, response: t, ...(o && { fallbackNotice: o }) },
    ].slice(-20);
  }
  pendingReopen = null;
  reopenAway = !1;
  get reopenPending() {
    return this.pendingReopen !== null;
  }
  armReopen(e, t) {
    if (this.pendingReopen) {
      this.pendingReopen.owners.add(e);
      return;
    }
    this.pendingReopen = { owners: new Set([e]), cancel: t() };
  }
  clearPendingReopen(e) {
    let t = this.pendingReopen;
    if (!t) {
      this.reopenAway = !1;
      return;
    }
    if (e !== void 0) {
      if ((t.owners.delete(e), t.owners.size > 0)) return;
    }
    (t.cancel(), (this.pendingReopen = null), (this.reopenAway = !1));
  }
  reopener = null;
  setReopener(e) {
    this.reopener = e;
  }
  get hasReopener() {
    return this.reopener !== null;
  }
  reopenNow() {
    return this.reopener?.() ?? !1;
  }
  inFlightQuestions = [];
  get inFlight() {
    return this.inFlightQuestions.at(-1) ?? null;
  }
  pendingBesidesTop() {
    return this.inFlightQuestions.slice(0, -1);
  }
  setInFlight(e) {
    if (!this.inFlightQuestions.includes(e))
      this.inFlightQuestions = [...this.inFlightQuestions, e];
  }
  clearInFlight(e) {
    if (this.inFlightQuestions.includes(e))
      this.inFlightQuestions = this.inFlightQuestions.filter((t) => t !== e);
  }
}
var Oi = 16;
class Oe {
  pending = null;
  shownThisSession = !1;
  changed = Le();
  submitted = [];
  submittedChanged = Le();
  subscribe = this.changed.subscribe;
  getSnapshot = () => this.pending;
  subscribeSubmitted = this.submittedChanged.subscribe;
  submit(e) {
    if (this.shownThisSession) return;
    if (this.submitted.length >= Oi) this.submitted.shift();
    (this.submitted.push(e), this.submittedChanged.emit());
  }
  takeSubmitted() {
    let e = this.submitted;
    return ((this.submitted = []), e);
  }
  offer(e) {
    if (this.shownThisSession) return;
    ((this.pending = e), this.changed.emit());
  }
  dismiss() {
    if (this.pending !== null) ((this.pending = null), this.changed.emit());
  }
  markShown() {
    this.shownThisSession = !0;
  }
}
class Fe {
  lastEmittedAt = new Map();
  shouldEmit(e, t, o) {
    let r = this.lastEmittedAt.get(e) || 0;
    if (t - r < o) return !1;
    if (this.lastEmittedAt.size >= 100) {
      let i = this.lastEmittedAt.keys().next().value;
      if (i !== void 0) this.lastEmittedAt.delete(i);
    }
    return (this.lastEmittedAt.set(e, t), !0);
  }
}
var iOn = Symbol("permission-stash-evicted");
class De {
  entriesCap;
  evictedKeysCap;
  lanes = { write: new Map(), read: new Map() };
  evicted = { write: new Set(), read: new Set() };
  poisoned = { write: !1, read: !1 };
  constructor(e = 256, t = 1048576) {
    this.entriesCap = e;
    this.evictedKeysCap = t;
  }
  stash(e, t, o, r = "write") {
    if (e === void 0) return;
    let i = this.lanes[r],
      s = this.evicted[r],
      a = Ee(e, t);
    if (s.has(a)) return;
    let l = i.get(a);
    if (l !== void 0) {
      let d = new Set(o);
      i.set(
        a,
        l.filter((u) => d.has(u)),
      );
      return;
    }
    if (i.size >= this.entriesCap) {
      let d = i.keys().next().value;
      if (d !== void 0) {
        if ((i.delete(d), s.add(d), s.size > this.evictedKeysCap)) {
          this.poisoned[r] = !0;
          let u = s.values().next().value;
          if (u !== void 0) s.delete(u);
        }
      }
    }
    i.set(a, o);
  }
  holds(e, t, o = "write") {
    return e !== void 0 && this.lanes[o].has(Ee(e, t));
  }
  consume(e, t, o = "write") {
    if (e === void 0) return;
    let r = this.lanes[o],
      i = Ee(e, t),
      s = r.get(i),
      a = s === void 0 && (this.evicted[o].delete(i) || this.poisoned[o]),
      l = `${e}\x00`;
    for (let d of r.keys()) if (d.startsWith(l)) r.delete(d);
    if (a) return iOn;
    return s;
  }
}
function Ee(e, t) {
  return `${e}\x00${t}`;
}
function OXt(e) {
  return on(
    { kind: "root", host: e.host, id: e.id, parentId: e.parentId },
    e.project,
  );
}
function on(e, t) {
  let o = zn(t.originalCwd),
    r = zn(t.projectRoot),
    i = zn(t.cwd),
    s = Le(),
    a = e.kind === "fork" ? e.root.observers : new oe(),
    l = e.kind === "fork" ? e.root.autonomousLoopPreamble : new we(),
    d = e.kind === "fork" ? e.root.precompute : new be(),
    u = {
      get originalCwd() {
        return o;
      },
      get projectRoot() {
        return r;
      },
      get cwd() {
        return i;
      },
    },
    S = {
      host: e.kind === "fork" ? e.root.host : e.host,
      get id() {
        return e.kind === "fork" ? e.root.id : e.id;
      },
      get parentId() {
        return e.kind === "fork" ? e.root.parentId : e.parentId;
      },
      get root() {
        return e.kind === "fork" ? e.root : S;
      },
      project: u,
      observers: a,
      autonomousLoopPreamble: l,
      btwHistory: e.kind === "fork" ? e.root.btwHistory : new Ie(),
      ccrRecap: e.kind === "fork" ? e.root.ccrRecap : new Ae(),
      conversationLatches:
        e.kind === "fork" ? e.root.conversationLatches : new re(),
      costLedger: e.kind === "fork" ? e.root.costLedger : new ie(),
      fableConsentSlots:
        e.kind === "fork" ? e.root.fableConsentSlots : new se(),
      hookRegistry: e.kind === "fork" ? e.root.hookRegistry : new ae(),
      identity: e.kind === "fork" ? e.root.identity : new Ce(),
      invokedSkills: e.kind === "fork" ? e.root.invokedSkills : new le(),
      mcpSessionWiring: e.kind === "fork" ? e.root.mcpSessionWiring : new de(),
      modelSelection: e.kind === "fork" ? e.root.modelSelection : new ue(),
      promptAssembly: e.kind === "fork" ? e.root.promptAssembly : new ce(),
      promptSuggestion: e.kind === "fork" ? e.root.promptSuggestion : new Re(),
      pendingHint: e.kind === "fork" ? e.root.pendingHint : new Oe(),
      pluginsSync: e.kind === "fork" ? e.root.pluginsSync : new Pe(),
      precompute: d,
      requestJournal: e.kind === "fork" ? e.root.requestJournal : new pe(),
      sessionCron: e.kind === "fork" ? e.root.sessionCron : new ge(),
      sessionFlags: e.kind === "fork" ? e.root.sessionFlags : new fe(),
      sessionRefsGate: e.kind === "fork" ? e.root.sessionRefsGate : new Me(),
      sessionScratch: e.kind === "fork" ? e.root.sessionScratch : new me(),
      surfaceCapabilities:
        e.kind === "fork" ? e.root.surfaceCapabilities : new Se(),
      toolProgressThrottle:
        e.kind === "fork" ? e.root.toolProgressThrottle : new Fe(),
      turnBudget: e.kind === "fork" ? e.root.turnBudget : new ve(),
      userPresence: e.kind === "fork" ? e.root.userPresence : new ye(),
      workflowUsageConsent:
        e.kind === "fork" ? e.root.workflowUsageConsent : new Te(),
      outsideReadPrompt:
        e.kind === "fork" ? e.root.outsideReadPrompt : new xe(),
      writePermissionStash:
        e.kind === "fork" ? e.root.writePermissionStash : new De(),
      subscribe(c) {
        let p = s.subscribe(c);
        if (e.kind !== "fork") return p;
        let f = e.root,
          { id: m, parentId: v } = f,
          b = f.subscribe(() => {
            if (f.id === m && f.parentId === v) return;
            ((m = f.id), (v = f.parentId), c());
          });
        return () => {
          (p(), b());
        };
      },
      setCwd(c) {
        S.update({ project: { cwd: c } });
      },
      withProject(c) {
        return on(
          { kind: "fork", root: S.root },
          {
            originalCwd: c.originalCwd ?? o,
            projectRoot: c.projectRoot ?? r,
            cwd: c.cwd ?? i,
          },
        );
      },
      update(c) {
        let p = !1;
        if (c.id !== void 0 || "parentId" in c) {
          if (e.kind === "fork")
            throw Error(
              "A withProject fork cannot re-identify the session \u2014 update the root session instead",
            );
          if (c.id !== void 0 && c.id !== e.id) ((e.id = c.id), (p = !0));
          if ("parentId" in c && c.parentId !== e.parentId)
            ((e.parentId = c.parentId), (p = !0));
        }
        let f = c.project;
        if (f) {
          if (f.originalCwd !== void 0) {
            let m = zn(f.originalCwd);
            if (m !== o) ((o = m), (p = !0));
          }
          if (f.projectRoot !== void 0) {
            let m = zn(f.projectRoot);
            if (m !== r) ((r = m), (p = !0));
          }
          if (f.cwd !== void 0) {
            let m = zn(f.cwd);
            if (m !== i) ((i = m), (p = !0));
          }
        }
        if (p) s.emit();
      },
    };
  return S;
}
class Gt {
  #e;
  #t = new WeakMap();
  constructor(e) {
    this.#e = e;
  }
  peek(e) {
    return this.#t.get(e.root);
  }
  of(e) {
    let t = e.root,
      o = this.#t.get(t);
    if (o !== void 0) return o;
    let r = this.#e();
    return (this.#t.set(t, r), r);
  }
  drop(e) {
    this.#t.delete(e.root);
  }
}
class He {
  #e = !1;
  #t = null;
  #n = !1;
  #o = void 0;
  #r = !1;
  #i = !1;
  #d = !1;
  #s = !1;
  #a = void 0;
  #l = !1;
  #u = !1;
  #g = null;
  #p = null;
  #c = new Map();
  #f = "cli";
  #h = "fresh";
  #m = void 0;
  #S = !1;
  #y = [];
  #b = !1;
  #v = !1;
  #C = !1;
  #x = !1;
  #k = "none";
  #T = !1;
  #A = !1;
  #P = !1;
  #R = !1;
  #M = !1;
  #w = !0;
  #L = null;
  #I = !1;
  #O = null;
  #F = !1;
  #E = !1;
  #D = {};
  isInteractive() {
    return this.#e;
  }
  replaceIsInteractive(e) {
    this.#e = e;
  }
  printOutputFormat() {
    return this.#t;
  }
  replacePrintOutputFormat(e) {
    this.#t = e;
  }
  thinkingDisplayExplicit() {
    return this.#n;
  }
  replaceThinkingDisplayExplicit(e) {
    this.#n = e;
  }
  permissionPromptToolName() {
    return this.#o;
  }
  replacePermissionPromptToolName(e) {
    this.#o = e;
  }
  hasStreamingInput() {
    return this.#r;
  }
  replaceHasStreamingInput(e) {
    this.#r = e;
  }
  singleShotPrintSession() {
    return this.#i;
  }
  replaceSingleShotPrintSession(e) {
    this.#i = e;
  }
  printInputClosed() {
    return this.#d;
  }
  markPrintInputClosed() {
    this.#d = !0;
  }
  modelOverrideOptOutForSession() {
    return this.#s;
  }
  replaceModelOverrideOptOutForSession(e) {
    this.#s = e;
  }
  rendererMode() {
    return this.#a;
  }
  replaceRendererMode(e) {
    this.#a = e;
  }
  strictToolResultPairing() {
    return this.#l;
  }
  replaceStrictToolResultPairing(e) {
    this.#l = e;
  }
  restrictedSession() {
    return this.#u;
  }
  replaceRestrictedSession(e) {
    this.#u = e;
  }
  workspaceRestrictionState() {
    return this.#g;
  }
  replaceWorkspaceRestrictionState(e) {
    this.#g = e;
  }
  replaceWorkspaceRestrictionUnsubscribe(e) {
    (this.#p?.(), (this.#p = e));
  }
  restrictedWorkspaceRoots() {
    return this.#c;
  }
  addRestrictedWorkspaceRoot(e, t) {
    this.#c.set(e, t);
  }
  clearRestrictedWorkspaceRoots() {
    this.#c = new Map();
  }
  clientType() {
    return this.#f;
  }
  replaceClientType(e) {
    this.#f = e;
  }
  sessionStartType() {
    return this.#h;
  }
  replaceSessionStartType(e) {
    this.#h = e;
  }
  questionPreviewFormat() {
    return this.#m;
  }
  replaceQuestionPreviewFormat(e) {
    this.#m = e;
  }
  extendedQuestionsEnabled() {
    return this.#S;
  }
  replaceExtendedQuestionsEnabled(e) {
    this.#S = e;
  }
  replConfigArgv() {
    return this.#y;
  }
  replaceReplConfigArgv(e) {
    this.#y = e;
  }
  userMsgOptIn() {
    return this.#b;
  }
  replaceUserMsgOptIn(e) {
    this.#b = e;
  }
  searchToolsOptIn() {
    return this.#v;
  }
  replaceSearchToolsOptIn(e) {
    this.#v = e;
  }
  todoToolsOptIn() {
    return this.#C;
  }
  replaceTodoToolsOptIn(e) {
    this.#C = e;
  }
  wizardOperatorToolsEnabled() {
    return this.#x;
  }
  replaceWizardOperatorToolsEnabled(e) {
    this.#x = e;
  }
  pollEventIngress() {
    return this.#k;
  }
  markPollEventIngress(e) {
    this.#k = e;
  }
  sdkAgentProgressSummariesEnabled() {
    return this.#T;
  }
  replaceSdkAgentProgressSummariesEnabled(e) {
    this.#T = e;
  }
  sessionPersistenceDisabled() {
    return this.#A;
  }
  replaceSessionPersistenceDisabled(e) {
    this.#A = e;
  }
  diskless() {
    return this.#P;
  }
  replaceDiskless(e) {
    this.#P = e;
  }
  sessionBypassPermissionsMode() {
    return this.#R;
  }
  replaceSessionBypassPermissionsMode(e) {
    this.#R = e;
  }
  disableSlashCommands() {
    return this.#M;
  }
  replaceDisableSlashCommands(e) {
    this.#M = e;
  }
  mayForwardHomeSettings() {
    return this.#w;
  }
  replaceMayForwardHomeSettings(e) {
    this.#w = e;
  }
  homeSettingsHostConsent() {
    return this.#L;
  }
  replaceHomeSettingsHostConsent(e) {
    this.#L = e;
  }
  scheduledTasksEnabled() {
    return this.#I;
  }
  replaceScheduledTasksEnabled(e) {
    this.#I = e;
  }
  initJsonSchema() {
    return this.#O;
  }
  replaceInitJsonSchema(e) {
    this.#O = e;
  }
  cliSessionConfigCarried() {
    return this.#F;
  }
  replaceCliSessionConfigCarried(e) {
    this.#F = e;
  }
  forkRestrictedLaunchConfig() {
    return this.#E;
  }
  replaceForkRestrictedLaunchConfig(e) {
    this.#E = e;
  }
  forkReplayLaunchConfig() {
    return this.#D;
  }
  replaceForkReplayLaunchConfig(e) {
    this.#D = e;
  }
  reset() {
    ((this.#e = !1),
      (this.#t = null),
      (this.#n = !1),
      (this.#o = void 0),
      (this.#r = !1),
      (this.#i = !1),
      (this.#d = !1),
      (this.#s = !1),
      (this.#a = void 0),
      (this.#l = !1),
      (this.#u = !1),
      (this.#g = null),
      this.replaceWorkspaceRestrictionUnsubscribe(null),
      (this.#c = new Map()),
      (this.#f = "cli"),
      (this.#h = "fresh"),
      (this.#m = void 0),
      (this.#S = !1),
      (this.#y = []),
      (this.#b = !1),
      (this.#v = !1),
      (this.#C = !1),
      (this.#x = !1),
      (this.#k = "none"),
      (this.#T = !1),
      (this.#A = !1),
      (this.#P = !1),
      (this.#R = !1),
      (this.#M = !1),
      (this.#w = !0),
      (this.#L = null),
      (this.#I = !1),
      (this.#O = null),
      (this.#F = !1),
      (this.#E = !1),
      (this.#D = {}));
  }
}
class Be {
  #e = void 0;
  #t = void 0;
  #n = void 0;
  #o = null;
  #r = null;
  #i = !1;
  #d = rn();
  #s = null;
  #a = !1;
  flagSettingsPath() {
    return this.#e;
  }
  replaceFlagSettingsPath(e) {
    this.#e = e;
  }
  flagSettingsExpectedContent() {
    return this.#t;
  }
  replaceFlagSettingsExpectedContent(e) {
    this.#t = e;
  }
  flagSettingsFilePinnedContent() {
    return this.#n;
  }
  replaceFlagSettingsFilePinnedContent(e) {
    this.#n = e;
  }
  flagSettingsInline() {
    return this.#o;
  }
  replaceFlagSettingsInline(e) {
    this.#o = e;
  }
  parentManagedSettings() {
    return this.#r;
  }
  replaceParentManagedSettings(e) {
    this.#r = e;
  }
  parentManagedSettingsInvalid() {
    return this.#i;
  }
  replaceParentManagedSettingsInvalid(e) {
    this.#i = e;
  }
  allowedSettingSources() {
    return this.#d;
  }
  replaceAllowedSettingSources(e) {
    this.#d = e;
  }
  allowedSettingSourcesWithoutRepoDirSources() {
    let e = this.#d;
    if (this.#s?.of !== e)
      this.#s = {
        of: e,
        result: e.filter(
          (t) => t !== "projectSettings" && t !== "localSettings",
        ),
      };
    return this.#s.result;
  }
  useCoworkPlugins() {
    return this.#a;
  }
  replaceUseCoworkPlugins(e) {
    this.#a = e;
  }
  reset() {
    ((this.#e = void 0),
      (this.#t = void 0),
      (this.#n = void 0),
      (this.#o = null),
      (this.#r = null),
      (this.#i = !1),
      (this.#d = rn()),
      (this.#s = null),
      (this.#a = !1));
  }
}
function rn() {
  return [
    "userSettings",
    "projectSettings",
    "localSettings",
    "flagSettings",
    "policySettings",
  ];
}
class _e {
  #e = [];
  #t = [];
  #n = [];
  #o = void 0;
  #r = [];
  #i = [];
  #d = !1;
  #s = void 0;
  #a = void 0;
  #l = void 0;
  inlinePlugins() {
    return this.#e;
  }
  replaceInlinePlugins(e) {
    this.#e = e;
  }
  inlinePluginsNoMcp() {
    return this.#t;
  }
  replaceInlinePluginsNoMcp(e) {
    this.#t = e;
  }
  inlinePluginUrls() {
    return this.#n;
  }
  replaceInlinePluginUrls(e) {
    this.#n = e;
  }
  syncedPluginDirs() {
    return this.#o ?? [];
  }
  syncedPluginDirsRegistered() {
    return this.#o !== void 0;
  }
  replaceSyncedPluginDirs(e) {
    this.#o = e;
  }
  clearSyncedPluginDirs() {
    this.#o = void 0;
  }
  additionalDirectoriesForClaudeMd() {
    return this.#r;
  }
  replaceAdditionalDirectoriesForClaudeMd(e) {
    this.#r = e;
  }
  allowedChannels() {
    return this.#i;
  }
  replaceAllowedChannels(e) {
    this.#i = e;
  }
  hasDevChannels() {
    return this.#d;
  }
  replaceHasDevChannels(e) {
    this.#d = e;
  }
  sessionSkillAllowlist() {
    return this.#s;
  }
  replaceSessionSkillAllowlist(e) {
    this.#s = e;
  }
  chromeFlagOverride() {
    return this.#a;
  }
  replaceChromeFlagOverride(e) {
    this.#a = e;
  }
  teammateAgentId() {
    return this.#l;
  }
  replaceTeammateAgentId(e) {
    this.#l = e;
  }
  reset() {
    ((this.#e = []),
      (this.#t = []),
      (this.#n = []),
      this.clearSyncedPluginDirs(),
      (this.#r = []),
      (this.#i = []),
      (this.#d = !1),
      (this.#s = void 0),
      (this.#a = void 0),
      (this.#l = void 0));
  }
}
class Ue {
  #e = null;
  #t = null;
  modelStrings() {
    return this.#e;
  }
  replaceModelStrings(e) {
    this.#e = e;
  }
  invalidate() {
    this.#e = null;
  }
  admin3PSteeringSnapshot() {
    return this.#t;
  }
  recordAdmin3PSteeringSnapshot(e) {
    this.#t = e;
  }
  reset() {
    ((this.#e = null), (this.#t = null));
  }
}
var an = [];
class je {
  #e = [];
  #t = [];
  #n = void 0;
  errorLog() {
    return this.#e;
  }
  recordError(e) {
    if (this.#e.length >= 100) this.#e.shift();
    this.#e.push(e);
  }
  recordSlowOperation(e, t) {
    return;
  }
  slowOperations() {
    if (this.#t.length === 0) return an;
    let e = Date.now();
    if (this.#t.some((t) => e - t.timestamp >= 1e4)) {
      if (
        ((this.#t = this.#t.filter((t) => e - t.timestamp < 1e4)),
        this.#t.length === 0)
      )
        return an;
    }
    return this.#t;
  }
  recordDevBarAlert(e) {
    return;
  }
  devBarAlert() {
    let e = this.#n;
    if (e && Date.now() - e.timestamp >= 60000) {
      this.#n = void 0;
      return;
    }
    return e;
  }
  reset() {
    ((this.#e = []), (this.#t = []), (this.#n = void 0));
  }
}
function ln() {
  return {
    rateTokens: null,
    rateLastRefillMs: null,
    featureOkLogged: !1,
    reportedDropReasons: new Set(),
  };
}
class We {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #i = null;
  #d = null;
  #s = null;
  #a = null;
  #l = null;
  #u = null;
  #g = null;
  #p = null;
  #c = [];
  #f = null;
  #h = ln();
  #m = null;
  #S = null;
  #y = null;
  #b = { direct: null, proxied: null };
  #v = null;
  #C = null;
  installMeter(e, t, { omitUnits: o = !1 } = {}) {
    this.#e = e;
    let r = (i) => (o ? void 0 : i);
    ((this.#t = t("claude_code.session.count", {
      description: "Count of CLI sessions started",
    })),
      (this.#n = t("claude_code.lines_of_code.count", {
        description:
          "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change",
      })),
      (this.#o = t("claude_code.pull_request.count", {
        description: "Number of pull requests created",
      })),
      (this.#r = t("claude_code.commit.count", {
        description: "Number of git commits created",
      })),
      (this.#i = t("claude_code.cost.usage", {
        description: "Cost of the Claude Code session",
        unit: r("USD"),
      })),
      (this.#d = t("claude_code.token.usage", {
        description: "Number of tokens used",
        unit: r("tokens"),
      })),
      (this.#s = t("claude_code.code_edit_tool.decision", {
        description:
          "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools",
      })),
      (this.#a = t("claude_code.active_time.total", {
        description: "Total active time in seconds",
        unit: r("s"),
      })));
  }
  meter() {
    return this.#e;
  }
  sessionCounter() {
    return this.#t;
  }
  locCounter() {
    return this.#n;
  }
  prCounter() {
    return this.#o;
  }
  commitCounter() {
    return this.#r;
  }
  costCounter() {
    return this.#i;
  }
  tokenCounter() {
    return this.#d;
  }
  codeEditToolDecisionCounter() {
    return this.#s;
  }
  activeTimeCounter() {
    return this.#a;
  }
  statsStore() {
    return this.#l;
  }
  replaceStatsStore(e) {
    this.#l = e;
  }
  loggerProvider() {
    return this.#u;
  }
  replaceLoggerProvider(e) {
    this.#u = e;
  }
  eventLogger() {
    return this.#g;
  }
  eventLoggerOwner() {
    return this.#p;
  }
  attachEventLogger(e, t) {
    if (((this.#g = e), (this.#p = e ? t : null), !e)) return;
    let o = this.#c;
    if (((this.#c = null), o)) for (let r of o) e.emit(r);
  }
  bufferPendingEvent(e) {
    if (this.#c === null || this.#c.length >= 100) return !1;
    return (this.#c.push(e), !0);
  }
  closeWindow(e) {
    ((this.#c = null), (this.#f = e));
  }
  windowCloseCause() {
    return this.#f;
  }
  isWindowOpen() {
    return this.#c !== null;
  }
  hostOtel() {
    return this.#h;
  }
  meterProvider() {
    return this.#m;
  }
  replaceMeterProvider(e) {
    this.#m = e;
  }
  tracerProvider() {
    return this.#S;
  }
  replaceTracerProvider(e) {
    this.#S = e;
  }
  cachedTelemetryResource() {
    return this.#y;
  }
  replaceCachedTelemetryResource(e) {
    this.#y = e;
  }
  cachedOtlpHttpAgentFactory(e) {
    return this.#b[e ? "proxied" : "direct"];
  }
  replaceCachedOtlpHttpAgentFactory(e, t) {
    this.#b[e ? "proxied" : "direct"] = t;
  }
  inClusterOtlpTrustRoots() {
    return this.#v;
  }
  replaceInClusterOtlpTrustRoots(e) {
    this.#v = e;
  }
  inClusterOtlpAgentFactory() {
    return this.#C;
  }
  replaceInClusterOtlpAgentFactory(e) {
    this.#C = e;
  }
  reset() {
    ((this.#e = null),
      (this.#t = null),
      (this.#n = null),
      (this.#o = null),
      (this.#r = null),
      (this.#i = null),
      (this.#d = null),
      (this.#s = null),
      (this.#a = null),
      (this.#l = null),
      (this.#u = null),
      (this.#g = null),
      (this.#p = null),
      (this.#c = []),
      (this.#f = null),
      (this.#h = ln()),
      (this.#m = null),
      (this.#S = null),
      (this.#y = null),
      (this.#b = { direct: null, proxied: null }),
      (this.#v = null),
      (this.#C = null));
  }
}
class qe {
  #e = void 0;
  #t = void 0;
  #n = !1;
  #o = void 0;
  #r = void 0;
  #i = new Set();
  #d = void 0;
  #s = null;
  #a = null;
  #l = 0;
  #u = !1;
  #g = () => !1;
  #p = null;
  #c = void 0;
  #f = null;
  #h = null;
  sessionIngressToken() {
    return this.#e;
  }
  replaceSessionIngressToken(e) {
    this.#e = e;
  }
  oauthTokenFromFd() {
    return this.#t;
  }
  replaceOauthTokenFromFd(e) {
    this.#t = e;
  }
  oauthTokenFromBgSnapshot() {
    return this.#n;
  }
  replaceOauthTokenFromBgSnapshot(e) {
    this.#n = e;
  }
  oauthScopesFromFd() {
    return this.#o;
  }
  replaceOauthScopesFromFd(e) {
    this.#o = e;
  }
  apiKeyFromFd() {
    return this.#r;
  }
  replaceApiKeyFromFd(e) {
    this.#r = e;
  }
  descriptorAnnouncementConsumed(e) {
    return this.#i.has(e);
  }
  markDescriptorAnnouncementConsumed(e) {
    this.#i.add(e);
  }
  gatewayTokenFromDescriptor() {
    return this.#d;
  }
  replaceGatewayTokenFromDescriptor(e) {
    this.#d = e;
  }
  resetFdCredentialState() {
    ((this.#e = void 0),
      (this.#t = void 0),
      (this.#n = !1),
      (this.#o = void 0),
      (this.#r = void 0));
  }
  gatewayAuth() {
    return this.#s;
  }
  replaceGatewayAuth(e) {
    this.#s = e;
  }
  gatewayServerProcess() {
    return this.#u;
  }
  replaceGatewayServerProcess(e) {
    this.#u = e;
  }
  gatewayRequiredByHostPolicy() {
    return this.#g();
  }
  replaceGatewayRequiredByHostPolicyReader(e) {
    this.#g = e;
  }
  authenticatedAccount() {
    return this.#a;
  }
  authenticatedAccountEpoch() {
    return this.#l;
  }
  stampAuthenticatedAccount(e) {
    let t = this.#a;
    if (
      e !== null &&
      t !== null &&
      e.accountUuid === t.accountUuid &&
      e.emailAddress === t.emailAddress &&
      e.organizationUuid === t.organizationUuid
    )
      return;
    ((this.#l += 1), (this.#a = e));
  }
  startupPolicySnapshot() {
    return this.#c;
  }
  replaceStartupPolicySnapshot(e) {
    this.#c = e;
  }
  gatewayRefreshInFlight() {
    return this.#p;
  }
  replaceGatewayRefreshInFlight(e) {
    this.#p = e;
  }
  sdkOAuthTokenRefreshCallback() {
    return this.#f;
  }
  replaceSdkOAuthTokenRefreshCallback(e) {
    this.#f = e;
  }
  hostAuthTokenRefreshCallback() {
    return this.#h;
  }
  replaceHostAuthTokenRefreshCallback(e) {
    this.#h = e;
  }
  resetForTests() {
    ((this.#e = null),
      (this.#t = null),
      (this.#n = !1),
      (this.#o = void 0),
      (this.#r = null),
      this.#i.clear(),
      (this.#d = void 0),
      (this.#s = null),
      (this.#a = null),
      (this.#l = 0),
      (this.#u = !1),
      (this.#g = () => !1),
      (this.#p = null),
      (this.#c = void 0),
      (this.#f = null),
      (this.#h = null));
  }
}
class Ge {
  #e = void 0;
  #t = !1;
  #n = !1;
  #o;
  directConnectServerUrl() {
    return this.#e;
  }
  replaceDirectConnectServerUrl(e) {
    this.#e = e;
  }
  connectNonBlocking() {
    return this.#t;
  }
  replaceConnectNonBlocking(e) {
    this.#t = e;
  }
  strictConfig() {
    return this.#n;
  }
  replaceStrictConfig(e) {
    this.#n = e;
  }
  registerEnsureConnectedClient(e) {
    this.#o = e;
  }
  ensureConnectedClient() {
    return this.#o;
  }
  reset() {
    ((this.#e = void 0), (this.#t = !1), (this.#n = !1));
  }
}
class Ne {
  #e = null;
  #t = new Map();
  #n = new Map();
  #o = new Set();
  #r = !1;
  #i = !1;
  #d = !1;
  #s = !1;
  #a = new Set();
  #l = new Map();
  #u = new Map();
  promptCache1hAllowlist() {
    return this.#e;
  }
  replacePromptCache1hAllowlist(e) {
    this.#e = e;
  }
  thinkingTypeOverrides() {
    return this.#t;
  }
  recordThinkingTypeOverride(e, t) {
    this.#t.set(e, t);
  }
  servedModelsByRequestedModel() {
    return this.#n;
  }
  recordServedModels(e, t) {
    this.#n.set(e, t);
  }
  effortUnsupportedModels() {
    return this.#o;
  }
  markEffortUnsupported(e) {
    this.#o.add(e);
  }
  midConvCachePromotionRejected() {
    return this.#r;
  }
  markMidConvCachePromotionRejected() {
    this.#r = !0;
  }
  perTurnEffortOkEmitted() {
    return this.#i;
  }
  markPerTurnEffortOkEmitted() {
    this.#i = !0;
  }
  lateToolAdditionsOkEmitted() {
    return this.#d;
  }
  markLateToolAdditionsOkEmitted() {
    this.#d = !0;
  }
  toolChangeHeaderRefused() {
    return this.#s;
  }
  markToolChangeHeaderRefused() {
    this.#s = !0;
  }
  toolChangeUnsupportedModels() {
    return this.#a;
  }
  markToolChangeUnsupportedModel(e) {
    this.#a.add(e);
  }
  inferenceProfileBackingModels() {
    return this.#l;
  }
  recordInferenceProfileBackingModel(e, t) {
    this.#l.set(e, t);
  }
  foundryDeploymentCapabilities() {
    return this.#u;
  }
  reset() {
    ((this.#e = null),
      (this.#t = new Map()),
      (this.#n = new Map()),
      (this.#o = new Set()),
      (this.#r = !1),
      (this.#i = !1),
      (this.#d = !1),
      (this.#s = !1),
      (this.#a = new Set()),
      (this.#l = new Map()),
      (this.#u = new Map()));
  }
}
class Ke {
  #e = !1;
  #t = !1;
  longContext1mCreditsBlocked() {
    return this.#e;
  }
  replaceLongContext1mCreditsBlocked(e) {
    this.#e = e;
  }
  fableCreditsRequired() {
    return this.#t;
  }
  replaceFableCreditsRequired(e) {
    this.#t = e;
  }
  reset() {
    ((this.#e = !1), (this.#t = !1));
  }
}
class Je {
  #e = !1;
  #t = !1;
  #n = dn;
  #o = Le();
  selectorGate() {
    return this.#e;
  }
  selectorGateEverOn() {
    return this.#t;
  }
  replaceSelectorGate(e) {
    ((this.#e = e), (this.#t ||= e));
  }
  inheritSelectorGateEverOn() {
    this.#t = !0;
  }
  resampleSelectorGate(e) {
    let t = this.#e;
    if (((this.#e = e), (this.#t ||= e), t !== e)) this.#o.emit(e);
  }
  subscribeSelectorGateChanged(e) {
    return this.#o.subscribe(e);
  }
  replaceHostGateSubscription(e) {
    let t = this.#n;
    ((this.#n = e), t());
  }
  dropHostGateSubscription() {
    this.replaceHostGateSubscription(dn);
  }
}
function dn() {}
class Ve {
  started = !1;
  stagingReaped = !1;
  claim() {
    if (this.started) return !1;
    return ((this.started = !0), !0);
  }
  claimStagingReap() {
    if (this.stagingReaped) return !1;
    return ((this.stagingReaped = !0), !0);
  }
}
class $e {
  backgroundHousekeeping;
  launchOptions;
  settingsSource;
  extensionsConfig;
  modelStringsCache;
  diagnostics;
  telemetryHandles;
  credentialSlots;
  mcpProcessWiring;
  requestLatches;
  accountCreditLatches;
  proactivity;
  constructor(e) {
    ((this.backgroundHousekeeping = e.backgroundHousekeeping),
      (this.launchOptions = e.launchOptions),
      (this.settingsSource = e.settingsSource),
      (this.extensionsConfig = e.extensionsConfig),
      (this.modelStringsCache = e.modelStringsCache),
      (this.diagnostics = e.diagnostics),
      (this.telemetryHandles = e.telemetryHandles),
      (this.credentialSlots = e.credentialSlots),
      (this.mcpProcessWiring = e.mcpProcessWiring),
      (this.requestLatches = e.requestLatches),
      (this.accountCreditLatches = e.accountCreditLatches),
      (this.proactivity = e.proactivity));
  }
}
function un() {
  return new $e({
    backgroundHousekeeping: new Ve(),
    launchOptions: new He(),
    settingsSource: new Be(),
    extensionsConfig: new _e(),
    modelStringsCache: new Ue(),
    diagnostics: new je(),
    telemetryHandles: new We(),
    credentialSlots: new qe(),
    mcpProcessWiring: new Ge(),
    requestLatches: new Ne(),
    accountCreditLatches: new Ke(),
    proactivity: new Je(),
  });
}
function Ei(e = OMn()) {
  return OXt({
    host: un(),
    id: qxt() ?? i8(),
    project: { originalCwd: e, projectRoot: e, cwd: e },
  });
}
var y = Ei(idr);
function B() {
  return n();
}
function n() {
  return C()?.session ?? y;
}
function bi(e) {
  return e.of(y.host);
}
function g() {
  let e = C();
  return e?.session ? void 0 : e;
}
var C = () => {
  return;
};
function Cbr(e) {
  C = e;
}
function K() {
  return g()?.sessionId ?? n().id;
}
function ze() {
  let e = g()?.sessionId;
  if (e) return oo(e);
  let t = n();
  return t.identity.mainAgentId(t.id);
}
function pn() {
  let e = n();
  return (
    e.requestJournal.promptIndex() > 0 ||
    e.sessionScratch.chromeAvailabilityStagesLogged().size > 0
  );
}
function aOn(e = {}) {
  let t = n(),
    o = t.id;
  (t.sessionScratch.forgetPlanSlug(o), t.identity.replaceProjectDir(null));
  let r = pn();
  (t.requestJournal.replacePromptIndex(0),
    t.requestJournal.replaceLastCancelledAPIMessageId(null),
    t.requestJournal.clearLastMainThreadRequest(),
    t.requestJournal.replaceLastMainRequestId(void 0),
    t.modelSelection.forgetRefusalFallbackOccurred(),
    t.sessionFlags.forgetPendingContextCompacted(),
    t.sessionScratch.replacePendingBranchLinks(),
    t.sessionScratch.replaceChromeAvailabilityStagesLogged(r));
  let i = hn(),
    s = i8();
  return (
    t.costLedger.scopeTo(s),
    t.update({ id: s, ...(e.setCurrentAsParent && { parentId: o }) }),
    gn(t, "clear", i),
    t.id
  );
}
function gn(e, t, o) {
  let r = mn.of(e);
  if (o) r.emit(e.id, t, o);
  else r.emit(e.id, t);
}
function fn(e) {
  vn.of(e).emit(e.project.originalCwd);
}
function r_e() {
  let e = g();
  return e ? e.parentSessionId : n().parentId;
}
function $p(e, t, o = null, r) {
  let i = n(),
    s,
    a = i.parentId;
  if (i.id !== e) {
    if (
      (i.sessionScratch.forgetPlanSlug(i.id),
      i.requestJournal.replaceLastCancelledAPIMessageId(null),
      i.requestJournal.clearLastMainThreadRequest(e),
      t !== "fork")
    )
      i.requestJournal.replaceLastMainRequestId(void 0);
    (i.modelSelection.forgetRefusalFallbackOccurred(),
      i.sessionFlags.forgetPendingContextCompacted(),
      i.sessionScratch.replacePendingBranchLinks(),
      i.sessionScratch.replaceChromeAvailabilityStagesLogged(pn()),
      (s = hn()),
      (a = void 0));
  }
  if (
    (i.identity.replaceProjectDir(o),
    i.update({ id: e, parentId: a, ...(r && { project: Sn(r) }) }),
    gn(i, t, s),
    r?.originalCwd !== void 0)
  )
    fn(i);
}
function hn() {
  let e = n(),
    t = e.modelSelection.refusalFallbackModelLatch();
  if (
    (e.modelSelection.unlatchRefusalFallbackModel(),
    !t || e.modelSelection.mainLoopModelOverride() !== t.fallbackModel)
  )
    return;
  return (
    e.modelSelection.overrideMainLoopModel(t.previousOverride),
    {
      appStateModel: t.previousAppStateModel,
      forSessionValue: t.previousModelForSession,
      overrideValue: t.previousOverride,
      restoredToExplicitOverride: t.previousOverride !== void 0,
      fallbackModel: t.fallbackModel,
    }
  );
}
var mn = new Gt(() => Le());
function sc(e) {
  return mn.of(n()).subscribe(e);
}
function DXt() {
  return n().sessionScratch.humanAttachmentDigests();
}
function fy() {
  let e = g();
  return e ? e.sessionProjectDir : n().identity.projectDir();
}
function he() {
  return g()?.originalCwd ?? n().project.originalCwd;
}
function wz() {
  let e = process.env.CLAUDE_CODE_SESSION_KIND;
  return e !== void 0 && String(e).trim() === "bg" ? null : adr;
}
function VR() {
  return he() === homedir();
}
function sn() {
  return g()?.projectRoot ?? n().project.projectRoot;
}
function Sn(e) {
  return {
    originalCwd: e.originalCwd?.normalize("NFC"),
    projectRoot: e.projectRoot?.normalize("NFC"),
    cwd: e.cwd?.normalize("NFC"),
  };
}
function irt(e) {
  let t = n();
  if ((t.update({ project: Sn(e) }), e.originalCwd !== void 0)) fn(t);
}
function ES(e) {
  irt({ originalCwd: e });
}
var vn = new Gt(() => Le());
function lOn(e) {
  return vn.of(n()).subscribe(e);
}
function o_e(e) {
  irt({ projectRoot: e });
}
function Bw() {
  return n().project.cwd;
}
function s_e(e) {
  irt({ cwd: e });
}
function cOn() {
  n().costLedger.restartClock();
}
function aje() {
  return n().costLedger.sessionStartTime();
}
function uOn() {
  return n().host.mcpProcessWiring.directConnectServerUrl();
}
function i_e() {
  return n().host.mcpProcessWiring.connectNonBlocking();
}
function dOn(e) {
  n().host.mcpProcessWiring.replaceConnectNonBlocking(e);
}
function pOn() {
  return n().sessionFlags.teardownUnwindRequested();
}
function LXt(e) {
  n().sessionFlags.replaceTeardownUnwindRequested(e);
}
function MXt() {
  return n().sessionFlags.launchEffortPinsReleasedForSession();
}
function Xxt() {
  n().sessionFlags.markLaunchEffortPinsReleasedForSession();
}
function fOn() {
  return n().sessionFlags.backgroundAutoModeSetupInFlight();
}
function NXt(e) {
  n().sessionFlags.replaceBackgroundAutoModeSetupInFlight(e);
}
function mOn() {
  return n().sessionFlags.deferredToolStubGateLatch();
}
function gOn(e) {
  n().sessionFlags.replaceDeferredToolStubGateLatch(e);
}
function hOn() {
  return n().sessionFlags.verifySkillRolloutGateLatch();
}
function _On(e) {
  n().sessionFlags.replaceVerifySkillRolloutGateLatch(e);
}
function yOn() {
  return n().sessionFlags.commitSkillRolloutGateLatch();
}
function SOn(e) {
  n().sessionFlags.replaceCommitSkillRolloutGateLatch(e);
}
function bOn() {
  return n().sessionFlags.memoryToolsShapeLatch();
}
function Yxt(e) {
  n().sessionFlags.replaceMemoryToolsShapeLatch(e);
}
function Jxt(e) {
  n().sessionFlags.armPendingContextCompacted(e);
}
function wOn() {
  return n().sessionFlags.consumePendingContextCompacted();
}
function TOn() {
  n().sessionFlags.forgetPendingContextCompacted();
}
function M0() {
  return n().host.mcpProcessWiring.strictConfig();
}
function EOn(e) {
  n().host.mcpProcessWiring.replaceStrictConfig(e);
}
function AOn() {
  return n().host.launchOptions.cliSessionConfigCarried();
}
function art(e) {
  n().host.launchOptions.replaceCliSessionConfigCarried(e);
}
function qP() {
  return n().host.launchOptions.forkRestrictedLaunchConfig();
}
function COn(e) {
  n().host.launchOptions.replaceForkRestrictedLaunchConfig(e);
}
function Tz() {
  return n().host.launchOptions.forkReplayLaunchConfig();
}
function vOn(e) {
  n().host.launchOptions.replaceForkReplayLaunchConfig(e);
}
function lrt() {
  return n().mcpSessionWiring.approvedServers();
}
function Qxt(e, t) {
  n().mcpSessionWiring.approveServers(e, t);
}
function ROn(e, t) {
  n().costLedger.recordApiDuration(e, t);
}
function kOn(e, t, o) {
  n().costLedger.recordCost(e, t, o);
}
function su() {
  return n().costLedger.totalCostUSD();
}
function oE() {
  return n().costLedger.totalAPIDuration();
}
function vW() {
  return n().costLedger.totalDuration();
}
function FXt() {
  return n().costLedger.totalAPIDurationWithoutRetries();
}
function $Xt() {
  return n().costLedger.totalToolDuration();
}
function UXt(e) {
  n().costLedger.recordToolDuration(e);
}
function wxe() {
  return n().host.telemetryHandles.statsStore();
}
function xOn(e) {
  n().host.telemetryHandles.replaceStatsStore(e);
}
function Ez(e) {
  n().userPresence.recordInteraction(e);
}
function Az() {
  n().userPresence.flushIfDirty();
}
function hB(e) {
  return n().userPresence.interactionFired.subscribe(e);
}
function HOn() {
  n().userPresence.resetBaseline();
}
function BXt(e, t) {
  n().costLedger.recordLinesChanged(e, t);
}
function l8() {
  return n().costLedger.totalLinesAdded();
}
function c8() {
  return n().costLedger.totalLinesRemoved();
}
function Txe() {
  return n().costLedger.totalInputTokens();
}
function jc() {
  return n().costLedger.totalOutputTokens();
}
function Exe() {
  return n().costLedger.totalCacheReadInputTokens();
}
function Axe() {
  return n().costLedger.totalCacheCreationInputTokens();
}
function IOn() {
  return n().costLedger.totalWebSearchRequests();
}
function lje() {
  return jc() - n().turnBudget.outputTokensAtTurnStart();
}
function cje() {
  return n().turnBudget.budget();
}
function POn() {
  n().costLedger.markUnknownModelCost();
}
function jXt() {
  return n().costLedger.hasUnknownModelCost();
}
function zP() {
  return n().requestJournal.lastMainRequestId();
}
function OOn(e) {
  n().requestJournal.replaceLastMainRequestId(e);
}
function Zxt() {
  n().requestJournal.replaceLastMainRequestId(void 0);
}
function dae() {
  return n().requestJournal.lastMainThreadCacheTtlMs();
}
function DOn() {
  return n().requestJournal.lastMainThreadRequestAt();
}
function LOn(e) {
  n().requestJournal.replaceLastMainThreadCacheTtlMs(e);
}
function MOn() {
  return n().requestJournal.lastMainThreadContextTokens();
}
function pae(e) {
  n().requestJournal.replaceLastMainThreadContextTokens(e);
}
function NOn(e) {
  let t = n();
  if (e.sessionId !== void 0 && e.sessionId === t.id)
    t.requestJournal.applyResumeSeed(e);
  else t.requestJournal.stageResumeSeed(e);
}
function u8() {
  return n().requestJournal.lastApiCompletionTimestamp();
}
function eHt(e) {
  n().requestJournal.replaceLastApiCompletionTimestamp(e);
}
function crt(e, { keepsCachedPrefix: t = !1 } = {}) {
  let o = n().requestJournal;
  if (
    (o.replacePendingPostCompaction(!0),
    o.replaceLastMainThreadContextTokens(e),
    !t)
  )
    o.replaceLastMainThreadRequest(null, null);
}
function FOn() {
  let e = n(),
    t = e.requestJournal.pendingPostCompaction();
  return (e.requestJournal.replacePendingPostCompaction(!1), t);
}
function Nm() {
  return n().userPresence.lastInteractionTime();
}
var WXt = 60000;
function $On(e) {
  n().userPresence.updateTerminalFocus(e);
}
function iZ() {
  return n().userPresence.terminalFocus();
}
function UOn(e) {
  return n().userPresence.terminalFocusFired.subscribe(e);
}
function BOn() {
  let e = iZ();
  if (e !== void 0) return e;
  return Date.now() - Nm() < WXt;
}
function GXt() {
  n().userPresence.markScrollActivity();
}
function Cxe() {
  return n().userPresence.scrollDraining();
}
async function urt() {
  return n().userPresence.waitForScrollIdle();
}
function jw() {
  return n().costLedger.modelUsage();
}
function jOn(e) {
  return n().costLedger.usageForModel(e);
}
function Ec() {
  return n().modelSelection.mainLoopModelOverride();
}
function KR() {
  return n().modelSelection.initialMainLoopModel();
}
function ad(e) {
  n().modelSelection.overrideMainLoopModel(e);
}
function WOn() {
  return n().modelSelection.mainLoopEffortState();
}
function drt(e) {
  n().modelSelection.replaceMainLoopEffortState(e);
}
function qXt(e) {
  n().modelSelection.markRefusalFallbackOccurred(e);
}
function RW() {
  return n().modelSelection.refusalFallbackOccurred();
}
function vxe(e) {
  n().modelSelection.armRefusalFallbackHeader(e);
}
function a_e() {
  return n().modelSelection.refusalFallbackHeaderArmed();
}
function GOn() {
  return n().modelSelection.refusalFallbackLatchOriginRequestId();
}
function uje(e) {
  let t = n(),
    o = t.modelSelection.refusalFallbackModelLatch();
  if (o && t.modelSelection.mainLoopModelOverride() === o.fallbackModel) {
    t.modelSelection.replaceRefusalFallbackModelLatch({
      ...o,
      fallbackModel: e.fallbackModel,
    });
    return;
  }
  t.modelSelection.replaceRefusalFallbackModelLatch(e);
}
function Cz() {
  n().modelSelection.unlatchRefusalFallbackModel();
}
function vz() {
  return n().modelSelection.refusalFallbackModelLatch();
}
function qOn(e) {
  let t = n(),
    o = t.modelSelection.refusalFallbackModelLatch();
  if (o)
    t.modelSelection.replaceRefusalFallbackModelLatch({
      ...o,
      previousOverride: e,
    });
}
function zOn() {
  n().modelSelection.forgetRefusalFallbackOccurred();
}
function VOn(e) {
  n().surfaceCapabilities.markSdkDialogHostActive(e);
}
function aZ() {
  return n().surfaceCapabilities.sdkDialogHostActive();
}
function zXt(e, t) {
  n().surfaceCapabilities.declareDialogKinds(e, t);
}
function Rxe() {
  return n().surfaceCapabilities.sdkSupportedDialogKinds();
}
function KOn() {
  let e = n();
  if (e.surfaceCapabilities.sdkSupportedDialogKinds() === void 0) return "none";
  return e.surfaceCapabilities.sdkSupportedDialogKindsSource() ?? "none";
}
function XOn(e) {
  n().surfaceCapabilities.declarePerTaskStopAffordance(e);
}
function prt() {
  return n().surfaceCapabilities.sdkPerTaskStopAffordance() === !0;
}
function _B() {
  return n().host.launchOptions.replConfigArgv();
}
function fae(e) {
  n().host.launchOptions.replaceReplConfigArgv(e);
}
function YOn(e) {
  n().modelSelection.replaceInitialMainLoopModel(e);
}
function JOn() {
  return n().modelSelection.initialModelSettingLayer();
}
function QOn(e) {
  n().modelSelection.replaceInitialModelSettingLayer(e);
}
function ZOn() {
  return n().modelSelection.resolvedOrgDefault();
}
function l_e(e) {
  n().modelSelection.replaceResolvedOrgDefault(e);
}
function eDn() {
  return n().modelSelection.initialEnvDefaultModel();
}
function tDn(e) {
  n().modelSelection.replaceInitialEnvDefaultModel(e);
}
function Up() {
  return g()?.sdkBetas ?? n().surfaceCapabilities.sdkBetas();
}
function nDn(e) {
  n().surfaceCapabilities.replaceSdkBetas(e);
}
function dje() {
  return n().host.accountCreditLatches.longContext1mCreditsBlocked();
}
function rDn(e) {
  n().host.accountCreditLatches.replaceLongContext1mCreditsBlocked(e);
}
function oDn() {
  return n().host.accountCreditLatches.fableCreditsRequired();
}
function tHt(e) {
  n().host.accountCreditLatches.replaceFableCreditsRequired(e);
}
function VXt() {
  return n().fableConsentSlots.fableConsentSessionFallback();
}
function sDn(e) {
  n().fableConsentSlots.replaceFableConsentSessionFallback(e);
}
function kxe() {
  return n().host.credentialSlots.sdkOAuthTokenRefreshCallback();
}
function pje(e) {
  n().host.credentialSlots.replaceSdkOAuthTokenRefreshCallback(e);
}
function frt() {
  return n().host.credentialSlots.hostAuthTokenRefreshCallback();
}
function mrt(e) {
  n().host.credentialSlots.replaceHostAuthTokenRefreshCallback(e);
}
function iDn(e) {
  y.costLedger.registerSaver(e);
}
function aDn(e) {
  n().costLedger.runSaver(e, y.costLedger);
}
function lDn(e) {
  y.costLedger.registerTranscriptRecorder(e);
}
function cDn(e, t) {
  n().costLedger.runTranscriptRecorder(e, t, y.costLedger);
}
function uDn() {
  let e = n();
  return e.costLedger.belongsTo(e.id);
}
function dDn() {
  let e = n();
  e.costLedger.claim(e.id);
}
function pDn() {
  let e = n();
  e.costLedger.scopeTo(e.id);
}
function c_e() {
  let e = n();
  (e.costLedger.reset(e.id), e.requestJournal.replacePromptId(null));
}
function fDn(e) {
  let t = n();
  t.costLedger.restore(e, t.id);
}
function fje() {
  return n().host.modelStringsCache.modelStrings();
}
function nHt(e) {
  n().host.modelStringsCache.replaceModelStrings(e);
}
function mDn() {
  n().host.modelStringsCache.invalidate();
}
function gDn(e) {
  n().host.modelStringsCache.recordAdmin3PSteeringSnapshot(e);
}
function hDn() {
  return n().host.modelStringsCache.admin3PSteeringSnapshot();
}
function _Dn(e, t, o = {}) {
  n().host.telemetryHandles.installMeter(e, t, o);
}
function yDn() {
  return n().host.telemetryHandles.sessionCounter();
}
function KXt() {
  return n().host.telemetryHandles.locCounter();
}
function u_e() {
  return n().host.telemetryHandles.prCounter();
}
function SDn() {
  return n().host.telemetryHandles.commitCounter();
}
function bDn() {
  return n().host.telemetryHandles.costCounter();
}
function grt() {
  return n().host.telemetryHandles.tokenCounter();
}
function rHt() {
  return n().host.telemetryHandles.codeEditToolDecisionCounter();
}
function wDn() {
  return n().host.telemetryHandles.activeTimeCounter();
}
function oHt() {
  return n().host.telemetryHandles.loggerProvider();
}
function XXt(e) {
  n().host.telemetryHandles.replaceLoggerProvider(e);
}
function hrt() {
  return n().host.telemetryHandles.eventLogger();
}
function YXt() {
  return n().host.telemetryHandles.eventLoggerOwner();
}
function JXt(e, t = "org") {
  n().host.telemetryHandles.attachEventLogger(e, t);
}
function TDn(e) {
  return n().host.telemetryHandles.bufferPendingEvent(e);
}
function QXt(e) {
  n().host.telemetryHandles.closeWindow(e);
}
function EDn() {
  return n().host.telemetryHandles.windowCloseCause();
}
function _rt() {
  return n().host.telemetryHandles.isWindowOpen();
}
function mje() {
  return n().host.telemetryHandles.hostOtel();
}
function ADn() {
  return n().host.telemetryHandles.meterProvider();
}
function ZXt(e) {
  n().host.telemetryHandles.replaceMeterProvider(e);
}
function d_e() {
  return n().host.telemetryHandles.tracerProvider();
}
function eYt(e) {
  n().host.telemetryHandles.replaceTracerProvider(e);
}
function sHt() {
  return n().host.requestLatches.foundryDeploymentCapabilities();
}
function CDn() {
  return n().host.telemetryHandles.cachedTelemetryResource();
}
function vDn(e) {
  n().host.telemetryHandles.replaceCachedTelemetryResource(e);
}
function RDn(e) {
  return n().host.telemetryHandles.cachedOtlpHttpAgentFactory(e);
}
function kDn(e, t) {
  n().host.telemetryHandles.replaceCachedOtlpHttpAgentFactory(e, t);
}
function ke() {
  return !n().host.launchOptions.isInteractive();
}
function ld() {
  return n().host.launchOptions.isInteractive();
}
function xDn(e) {
  n().host.launchOptions.replaceIsInteractive(e);
}
function gje() {
  return n().host.launchOptions.printOutputFormat();
}
function HDn(e) {
  n().host.launchOptions.replacePrintOutputFormat(e);
}
function iHt() {
  return n().host.launchOptions.thinkingDisplayExplicit();
}
function hje(e) {
  n().host.launchOptions.replaceThinkingDisplayExplicit(e);
}
function yB() {
  return n().host.launchOptions.permissionPromptToolName();
}
function IDn(e) {
  n().host.launchOptions.replacePermissionPromptToolName(e);
}
function dl() {
  return n().surfaceCapabilities.attacherCaps();
}
function PDn(e) {
  n().surfaceCapabilities.replaceAttacherCaps(e);
}
function VP(e) {
  return n().surfaceCapabilities.attacherCapsChanged.subscribe(e);
}
function ODn() {
  return n().surfaceCapabilities.rvSupervisorLinkLive();
}
function yrt(e) {
  n().surfaceCapabilities.replaceRvSupervisorLinkLive(e);
}
function DDn(e) {
  return n().surfaceCapabilities.rvSupervisorLinkChanged.subscribe(e);
}
function Srt() {
  return n().host.launchOptions.hasStreamingInput();
}
function LDn(e) {
  n().host.launchOptions.replaceHasStreamingInput(e);
}
function MDn({ hasStreamingInput: e, sdkUrl: t }) {
  return !e && !t;
}
function NDn({ hasStreamingInput: e, sdkUrl: t, asyncReplRequested: o }) {
  if (e || t) return "host";
  if (o) return "evals";
  return "none";
}
function FDn(e) {
  n().host.launchOptions.replaceSingleShotPrintSession(e);
}
function brt() {
  return n().host.launchOptions.singleShotPrintSession();
}
function $Dn() {
  n().host.launchOptions.markPrintInputClosed();
}
function wrt() {
  return n().host.launchOptions.clientType();
}
function UDn(e) {
  n().host.launchOptions.replaceClientType(e);
}
function p_e() {
  return n().host.launchOptions.sdkAgentProgressSummariesEnabled();
}
function BDn(e) {
  n().host.launchOptions.replaceSdkAgentProgressSummariesEnabled(e);
}
function Trt() {
  return n().host.launchOptions.rendererMode();
}
function jDn(e) {
  n().host.launchOptions.replaceRendererMode(e);
}
function WDn() {
  return n().host.launchOptions.strictToolResultPairing();
}
function pv() {
  return n().host.launchOptions.restrictedSession();
}
function Ert(e) {
  n().host.launchOptions.replaceRestrictedSession(e);
}
function Art() {
  return (
    n().host.launchOptions.workspaceRestrictionState()?.restriction ?? null
  );
}
function G1() {
  return Art() !== null;
}
function Di(e) {
  for (let [t, o] of n().host.launchOptions.restrictedWorkspaceRoots())
    if (e === t || e.startsWith(t.endsWith(cn) ? t : t + cn)) return o;
  return null;
}
function GDn(e) {
  return Di(e) !== null;
}
function qDn(e) {
  if (Art()?.gateKeys.includes(e)) return !0;
  for (let t of n().host.launchOptions.restrictedWorkspaceRoots().values())
    if (t.gateKeys.includes(e)) return !0;
  return !1;
}
function AS() {
  return n().sessionFlags.memoryToggledOff();
}
function f_e(e) {
  n().sessionFlags.replaceMemoryToggledOff(e);
}
function zDn(e) {
  if (e === !1)
    throw Error(
      "setWizardOperatorToolsEnabled(false) is test-only: the wizard latch is one-way in production",
    );
  n().host.launchOptions.replaceWizardOperatorToolsEnabled(e);
}
function VDn() {
  return n().host.launchOptions.wizardOperatorToolsEnabled();
}
function tYt() {
  return n().host.launchOptions.pollEventIngress();
}
function KDn() {
  return tYt() !== "none";
}
function XDn(e) {
  n().host.launchOptions.markPollEventIngress(e);
}
function Ox() {
  return n().host.launchOptions.userMsgOptIn();
}
function lZ(e) {
  n().host.launchOptions.replaceUserMsgOptIn(e);
}
function YDn() {
  return n().host.launchOptions.searchToolsOptIn();
}
function JDn(e) {
  n().host.launchOptions.replaceSearchToolsOptIn(e);
}
function QDn() {
  return n().host.launchOptions.todoToolsOptIn();
}
function ZDn(e) {
  n().host.launchOptions.replaceTodoToolsOptIn(e);
}
function eLn() {
  return n().host.launchOptions.sessionStartType();
}
function Crt(e) {
  n().host.launchOptions.replaceSessionStartType(e);
}
function nYt() {
  return n().host.launchOptions.questionPreviewFormat();
}
function rYt(e) {
  n().host.launchOptions.replaceQuestionPreviewFormat(e);
}
function xxe() {
  return n().host.launchOptions.extendedQuestionsEnabled();
}
function tLn(e) {
  n().host.launchOptions.replaceExtendedQuestionsEnabled(e);
}
function oYt() {
  return n().sessionScratch.agentColorMap();
}
function q1() {
  return n().host.settingsSource.flagSettingsPath();
}
function nLn(e) {
  n().host.settingsSource.replaceFlagSettingsPath(e);
}
function MA() {
  return n().host.settingsSource.flagSettingsExpectedContent();
}
function rLn(e) {
  n().host.settingsSource.replaceFlagSettingsExpectedContent(e);
}
function d8() {
  return n().host.settingsSource.flagSettingsFilePinnedContent();
}
function oLn(e) {
  n().host.settingsSource.replaceFlagSettingsFilePinnedContent(e);
}
function RL() {
  return n().host.settingsSource.flagSettingsInline();
}
function cZ(e) {
  n().host.settingsSource.replaceFlagSettingsInline(e);
}
function sLn() {
  return n().host.settingsSource.parentManagedSettings();
}
function iLn(e) {
  n().host.settingsSource.replaceParentManagedSettings(e);
}
function m_e() {
  return n().host.settingsSource.parentManagedSettingsInvalid();
}
function aLn(e) {
  n().host.settingsSource.replaceParentManagedSettingsInvalid(e);
}
function _je() {
  let e = C();
  return e
    ? e.secrets.sessionIngressToken
    : n().host.credentialSlots.sessionIngressToken();
}
function mae(e) {
  let t = C();
  if (t) t.secrets.sessionIngressToken = e;
  else n().host.credentialSlots.replaceSessionIngressToken(e);
}
function uZ() {
  return n().host.credentialSlots.oauthTokenFromFd();
}
function N0(e) {
  n().host.credentialSlots.replaceOauthTokenFromFd(e);
}
function dZ() {
  return n().host.credentialSlots.oauthTokenFromBgSnapshot();
}
function yje(e) {
  n().host.credentialSlots.replaceOauthTokenFromBgSnapshot(e);
}
function lLn() {
  return n().host.credentialSlots.oauthScopesFromFd();
}
function Sje(e) {
  n().host.credentialSlots.replaceOauthScopesFromFd(e);
}
function sYt() {
  return n().host.credentialSlots.apiKeyFromFd();
}
function iYt(e) {
  n().host.credentialSlots.replaceApiKeyFromFd(e);
}
function cLn(e) {
  return n().host.credentialSlots.descriptorAnnouncementConsumed(e);
}
function aHt(e) {
  n().host.credentialSlots.markDescriptorAnnouncementConsumed(e);
}
function aYt() {
  return n().host.credentialSlots.gatewayTokenFromDescriptor();
}
function lHt(e) {
  n().host.credentialSlots.replaceGatewayTokenFromDescriptor(e);
}
function uLn() {
  n().host.credentialSlots.resetFdCredentialState();
}
function ns() {
  return n().host.credentialSlots.gatewayAuth();
}
function dLn() {
  let e = n().host.credentialSlots.gatewayAuth();
  return !!e && e.expiresAt <= Date.now();
}
function fv(e) {
  return !!e && !e.unpinned;
}
function pLn(e) {
  n().host.credentialSlots.replaceGatewayServerProcess(e);
}
function fLn() {
  return n().host.credentialSlots.gatewayServerProcess();
}
function g_e(e) {
  n().host.credentialSlots.replaceGatewayRequiredByHostPolicyReader(e);
}
function h_e() {
  return n().host.credentialSlots.gatewayRequiredByHostPolicy();
}
function kW(e) {
  n().host.credentialSlots.replaceGatewayAuth(e);
}
function cHt() {
  return n().host.credentialSlots.authenticatedAccount();
}
function p8(e) {
  n().host.credentialSlots.stampAuthenticatedAccount(e);
}
function xW() {
  return n().host.credentialSlots.authenticatedAccountEpoch();
}
function mLn() {
  return n().host.credentialSlots.startupPolicySnapshot();
}
function gLn(e) {
  n().host.credentialSlots.replaceStartupPolicySnapshot(e);
}
function bje() {
  return n().host.credentialSlots.gatewayRefreshInFlight();
}
function lYt(e) {
  n().host.credentialSlots.replaceGatewayRefreshInFlight(e);
}
function hLn(e) {
  n().requestJournal.replaceLastAPIRequest(e);
}
function vrt() {
  return n().requestJournal.lastAPIRequest();
}
function uHt(e) {
  n().requestJournal.replaceLastCancelledAPIMessageId(e);
}
function pZ() {
  return n().requestJournal.lastCancelledAPIMessageId();
}
function _Ln(e) {
  n().requestJournal.replaceLastAPIRequestMessages(e);
}
function dHt(e) {
  n().requestJournal.replaceLastClassifierRequests(e);
}
function cYt() {
  return n().requestJournal.lastClassifierRequests();
}
function yLn(e) {
  let t = g();
  if (t) t.cachedClaudeMdContent = e;
  else n().sessionFlags.replaceCachedClaudeMdContent(e);
}
function SLn() {
  let e = g();
  return e ? e.cachedClaudeMdContent : n().sessionFlags.cachedClaudeMdContent();
}
function gae() {
  let { settingsSource: e, launchOptions: t } = n().host;
  return t.workspaceRestrictionState()?.restriction
    ? e.allowedSettingSourcesWithoutRepoDirSources()
    : e.allowedSettingSources();
}
function uYt() {
  return n().host.settingsSource.allowedSettingSources();
}
function bLn(e) {
  n().host.settingsSource.replaceAllowedSettingSources(e);
}
function Rrt() {
  return ke() && n().host.launchOptions.clientType() !== "claude-vscode";
}
function krt(e) {
  n().host.extensionsConfig.replaceInlinePlugins(e);
}
function kL() {
  return n().host.extensionsConfig.inlinePlugins();
}
function xrt(e) {
  n().host.extensionsConfig.replaceInlinePluginsNoMcp(e);
}
function xL() {
  return n().host.extensionsConfig.inlinePluginsNoMcp();
}
function wLn(e) {
  n().host.extensionsConfig.replaceInlinePluginUrls(e);
}
function hae() {
  return n().host.extensionsConfig.inlinePluginUrls();
}
function __e(e) {
  n().host.extensionsConfig.replaceSyncedPluginDirs(e);
}
function pHt() {
  return n().host.extensionsConfig.syncedPluginDirsRegistered();
}
function _ae() {
  return n().pluginsSync.syncedLaneOpened;
}
function TLn() {
  n().pluginsSync.syncedLaneOpened = !0;
}
function ELn() {
  (n().host.extensionsConfig.clearSyncedPluginDirs(),
    (n().pluginsSync.syncedLaneOpened = !1),
    n().pluginsSync.removalsDeferredHere.clear());
}
function y_e() {
  return n().host.extensionsConfig.syncedPluginDirs();
}
function fHt(e) {
  n().sessionFlags.replaceAccountSkillsSyncEnabled(e);
}
function Hrt() {
  return n().sessionFlags.accountSkillsSyncEnabled();
}
function mHt(e) {
  n().sessionFlags.replaceSkillsSyncVetoed(e);
}
function Nb() {
  return n().sessionFlags.skillsSyncVetoed();
}
function ALn(e) {
  n().sessionFlags.replaceAccountPluginsSyncEnabled(e);
}
function Hxe() {
  return n().sessionFlags.accountPluginsSyncEnabled();
}
function CLn(e) {
  n().sessionFlags.replacePluginsSyncVetoed(e);
}
function HW() {
  return n().sessionFlags.pluginsSyncVetoed();
}
function vLn(e) {
  n().host.extensionsConfig.replaceChromeFlagOverride(e);
}
function S_e() {
  return n().host.extensionsConfig.chromeFlagOverride();
}
function RLn(e) {
  n().host.extensionsConfig.replaceTeammateAgentId(e);
}
function f8() {
  return n().host.extensionsConfig.teammateAgentId();
}
function kLn(e) {
  n().sessionFlags.replaceOnboardingShownThisSession(e);
}
function xLn() {
  return n().sessionFlags.onboardingShownThisSession();
}
function SB(e) {
  let t = n();
  (t.host.settingsSource.replaceUseCoworkPlugins(e),
    HXt.of(t.host).invalidateAll());
}
function Irt() {
  return n().host.settingsSource.useCoworkPlugins();
}
function HLn(e) {
  n().host.launchOptions.replaceDisableSlashCommands(e);
}
function Rg() {
  return n().host.launchOptions.disableSlashCommands();
}
function ILn(e) {
  n().host.launchOptions.replaceSessionBypassPermissionsMode(e);
}
function Rz() {
  return n().host.launchOptions.sessionBypassPermissionsMode();
}
function bB(e) {
  n().host.launchOptions.replaceScheduledTasksEnabled(e);
}
function Prt() {
  return n().host.launchOptions.scheduledTasksEnabled();
}
function kg() {
  return g()?.sessionCronTasks ?? n().sessionCron.tasks();
}
function m8(e) {
  let t = g();
  if (t) t.sessionCronTasks.push(e);
  else n().sessionCron.schedule(e);
}
function PLn(e) {
  return n().sessionCron.chainStartedAt(e);
}
function dYt(e, t) {
  n().sessionCron.recordChainStart(e, t);
}
function Ort(e) {
  n().sessionCron.forgetChainStart(e);
}
function wje() {
  return n().sessionCron.tickInFlightPrompt();
}
function Ixe(e) {
  n().sessionCron.replaceTickInFlightPrompt(e);
}
function pYt() {
  return n().sessionCron.consecutiveKeepalives();
}
function Drt(e) {
  n().sessionCron.replaceConsecutiveKeepalives(e);
}
function OLn() {
  return n().sessionCron.ended();
}
function Tje() {
  return n().sessionCron.wakeFires();
}
function Lrt() {
  n().sessionCron.recordWakeFire();
}
function Eje() {
  n().sessionCron.resetWakeFires();
}
function gHt(e) {
  n().sessionCron.replaceEnded(e);
}
function HL(e) {
  if (e.length === 0) return 0;
  let t = new Set(e),
    o = g(),
    r = o ? o.sessionCronTasks : n().sessionCron.tasks(),
    i = r.filter((a) => !t.has(a.id)),
    s = r.length - i.length;
  if (s === 0) return 0;
  if (o) ((o.sessionCronTasks.length = 0), o.sessionCronTasks.push(...i));
  else n().sessionCron.replaceTasks(i);
  return s;
}
function Dx(e) {
  n().sessionFlags.replaceSessionTrustAccepted(e);
}
function g8() {
  return n().sessionFlags.sessionTrustAccepted();
}
function Aje(e) {
  n().sessionFlags.replaceHomeTrustDialogAccepted(e);
}
function DLn() {
  return n().sessionFlags.homeTrustDialogAccepted();
}
function LLn(e) {
  n().host.launchOptions.replaceSessionPersistenceDisabled(e);
}
function IL() {
  return n().host.launchOptions.sessionPersistenceDisabled();
}
function z1() {
  return n().host.launchOptions.diskless();
}
function hHt() {
  return n().sessionFlags.hasExitedPlanMode();
}
function PL(e) {
  n().sessionFlags.replaceHasExitedPlanMode(e);
}
function fYt(e) {
  return n().host.proactivity.subscribeSelectorGateChanged(e);
}
function MLn() {
  return n().sessionFlags.needsPlanModeExitAttachment();
}
function IW(e) {
  n().sessionFlags.replaceNeedsPlanModeExitAttachment(e);
}
function h8(e, t) {
  if (t === "plan" && e !== "plan")
    n().sessionFlags.replaceNeedsPlanModeExitAttachment(!1);
  if (e === "plan" && t !== "plan")
    n().sessionFlags.replaceNeedsPlanModeExitAttachment(!0);
}
function NLn() {
  return n().sessionFlags.needsAutoModeExitAttachment();
}
function OL(e) {
  n().sessionFlags.replaceNeedsAutoModeExitAttachment(e);
}
function FLn(e, t) {
  if ((e === "auto" && t === "plan") || (e === "plan" && t === "auto")) return;
  let o = e === "auto",
    r = t === "auto";
  if (r && !o) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!1);
  if (o && !r) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!0);
}
function mYt() {
  return n().sessionFlags.lspRecommendationShownThisSession();
}
function gYt(e) {
  n().sessionFlags.replaceLspRecommendationShownThisSession(e);
}
function $Ln(e) {
  n().host.launchOptions.replaceInitJsonSchema(e);
}
function hYt() {
  return n().host.launchOptions.initJsonSchema();
}
function ULn(e) {
  n().mcpSessionWiring.registerClientsAccessor(e);
}
function _Yt(e) {
  return n().mcpSessionWiring.acquireClientsAccessor(e);
}
function DL() {
  return n().mcpSessionWiring.clientsFromAccessor();
}
function Mrt(e) {
  n().host.mcpProcessWiring.registerEnsureConnectedClient(e);
}
function Lx() {
  return n().host.mcpProcessWiring.ensureConnectedClient();
}
function Pxe(e) {
  n().mcpSessionWiring.registerConnectedClientWiring(e);
}
function Nrt() {
  return n().mcpSessionWiring.connectedClientWiring();
}
function BLn(e) {
  n().mcpSessionWiring.registerToolsSwapper(e);
}
function yYt(e) {
  return n().mcpSessionWiring.acquireToolsSwapper(e);
}
function Frt(e, t) {
  return n().mcpSessionWiring.swapServerTools(e, t);
}
function Y() {
  return g() ?? n().hookRegistry.holder();
}
function wB(e) {
  let t = Y();
  if (!t.registeredHooks) t.registeredHooks = {};
  for (let [o, r] of Object.entries(e)) {
    let i = o;
    if (!t.registeredHooks[i]) t.registeredHooks[i] = [];
    t.registeredHooks[i].push(...r);
  }
  V1();
}
function LL() {
  return Y().registeredHooks;
}
function jLn() {
  return y.hookRegistry.holder().registeredHooks;
}
function $rt() {
  ((Y().registeredHooks = null), V1());
}
function SYt() {
  let e = Y();
  if (!e.registeredHooks) return;
  let t = {};
  for (let [o, r] of Object.entries(e.registeredHooks)) {
    let i = r.filter((s) => !("pluginRoot" in s));
    if (i.length > 0) t[o] = i;
  }
  ((e.registeredHooks = Object.keys(t).length > 0 ? t : null), V1());
}
var yn = new j(() => Le());
function V1() {
  bi(yn).emit();
}
function WLn(e) {
  return bi(yn).subscribe(e);
}
function _8() {
  return n().sessionScratch.planSlugCache();
}
function bYt() {
  return g()?.sessionCreatedTeams ?? n().sessionScratch.sessionCreatedTeams();
}
function GLn() {
  return (
    g()?.surfacedHookSpawnFailures ??
    n().sessionScratch.surfacedHookSpawnFailures()
  );
}
function qLn() {
  return (
    C()?.pendingConversationEditKinds ??
    y.sessionScratch.pendingConversationEditKinds()
  );
}
function vbr() {
  return (
    C()?.clientTruncatedAssistantIds ??
    y.sessionScratch.clientTruncatedAssistantIds()
  );
}
function Rbr() {
  return C()?.heldStatelessReplyIds ?? y.sessionScratch.heldStatelessReplyIds();
}
function kbr() {
  return C()?.unsupportedThreadKeys ?? y.sessionScratch.unsupportedThreadKeys();
}
function zLn() {
  return (
    g()?.bareMcpServerMatchersWarned ??
    n().sessionScratch.bareMcpServerMatchersWarned()
  );
}
function _Ht() {
  return g()?.pendingBranchLinks ?? n().sessionScratch.pendingBranchLinks();
}
function wYt() {
  return n().sessionScratch.pendingPrLinks();
}
function VLn() {
  return n().sessionScratch.policyPredicateTelemetryEmitted();
}
function KLn() {
  return (
    g()?.chromeAvailabilityStagesLogged ??
    n().sessionScratch.chromeAvailabilityStagesLogged()
  );
}
function XLn() {
  return n().sessionScratch.chromeAvailabilityAnchorMs();
}
function YLn() {
  return n().sessionFlags.proposeGoalAvailabilityLogged();
}
function JLn() {
  n().sessionFlags.markProposeGoalAvailabilityLogged();
}
function TYt() {
  return n().sessionFlags.inheritedTeamName();
}
function QLn(e) {
  n().sessionFlags.replaceInheritedTeamName(e);
}
function Cje(e) {
  n().sessionFlags.replaceTeleportedSessionInfo({
    isTeleported: !0,
    hasLoggedFirstMessage: !1,
    sessionId: e.sessionId,
  });
}
function vje() {
  return n().sessionFlags.teleportedSessionInfo();
}
function EYt() {
  n().sessionFlags.markFirstTeleportMessageLogged();
}
function TB(e, t, o, r = null) {
  let i = `${r ?? ""}:${e}`;
  n().invokedSkills.record(i, {
    skillName: e,
    skillPath: t,
    content: o,
    invokedAt: Date.now(),
    agentId: r,
  });
}
function EB() {
  return n().invokedSkills.skills();
}
function AYt(e, t) {
  let o = n(),
    r = o.invokedSkills.lookup(e);
  if (r) o.invokedSkills.record(e, { ...r, content: t });
}
function ZLn(e) {
  let t = e ?? null,
    o = new Map();
  for (let [r, i] of n().invokedSkills.skills())
    if (i.agentId === t) o.set(r, i);
  return o;
}
function eMn(e) {
  let t = n();
  if (!e || e.size === 0) {
    t.invokedSkills.forgetAll();
    return;
  }
  for (let [o, r] of t.invokedSkills.skills())
    if (r.agentId === null || !e.has(r.agentId)) t.invokedSkills.forget(o);
}
function Oxe(e) {
  let t = n();
  for (let [o, r] of t.invokedSkills.skills())
    if (r.agentId === e) t.invokedSkills.forget(o);
}
function xbr(e, t) {
  n().host.diagnostics.recordSlowOperation(e, t);
}
function Hbr() {
  return n().host.diagnostics.slowOperations();
}
function Ibr() {
  return n().host.diagnostics.devBarAlert();
}
function H_() {
  let e = g();
  return e ? e.mainThreadAgentType : n().hookRegistry.mainThreadAgentType();
}
function PW(e) {
  let t = g();
  if (t) t.mainThreadAgentType = e;
  else n().hookRegistry.replaceMainThreadAgentType(e);
}
function yae() {
  let e = g();
  return e ? e.mainThreadAgentHooks : n().hookRegistry.mainThreadAgentHooks();
}
function tMn() {
  return y.hookRegistry.mainThreadAgentHooks();
}
function yHt(e) {
  let t = g();
  if (t) t.mainThreadAgentHooks = e;
  else n().hookRegistry.replaceMainThreadAgentHooks(e);
  V1();
}
function K1() {
  return n().host.extensionsConfig.sessionSkillAllowlist();
}
function nMn(e) {
  n().host.extensionsConfig.replaceSessionSkillAllowlist(e);
}
function Mx() {
  return n().surfaceCapabilities.caps();
}
function rMn(e) {
  n().surfaceCapabilities.replaceCaps(e);
}
function Nn() {
  return n().surfaceCapabilities.caps().workspace === "remote";
}
function kz(e) {
  n().surfaceCapabilities.markRemote(e);
}
function ML() {
  return n().promptAssembly.sections();
}
function oMn(e, t) {
  n().promptAssembly.recordSection(e, t);
}
function Urt(e) {
  (n().promptAssembly.forgetAllSections(), mv(e));
}
function mv(e) {
  n().promptAssembly.noteInvalidation(e);
}
function xz() {
  return n().promptAssembly.epoch();
}
function Pbr() {
  return n().promptAssembly.lastInvalidationReason();
}
function sMn(e) {
  y.promptAssembly.registerWordingLatchClear(e);
}
function Brt() {
  n().promptAssembly.clearWordingLatch(y.promptAssembly);
}
function iMn() {
  return n().promptAssembly.lastEmittedDate();
}
function jrt(e) {
  n().promptAssembly.replaceLastEmittedDate(e);
}
function aMn() {
  return n().sessionScratch.vimSharedState();
}
function lMn(e) {
  n().sessionScratch.replaceVimSharedState(e);
}
function mp() {
  return n().host.extensionsConfig.additionalDirectoriesForClaudeMd();
}
function Hz(e) {
  n().host.extensionsConfig.replaceAdditionalDirectoriesForClaudeMd(e);
}
function ym() {
  return n().host.extensionsConfig.allowedChannels();
}
function Sae(e) {
  n().host.extensionsConfig.replaceAllowedChannels(e);
}
function Wrt() {
  return n().host.extensionsConfig.hasDevChannels();
}
function cMn(e) {
  n().host.extensionsConfig.replaceHasDevChannels(e);
}
function uMn() {
  return n().host.requestLatches.promptCache1hAllowlist();
}
function dMn(e) {
  n().host.requestLatches.replacePromptCache1hAllowlist(e);
}
function SHt(e) {
  return n().host.requestLatches.thinkingTypeOverrides().get(e);
}
function pMn(e, t) {
  n().host.requestLatches.recordThinkingTypeOverride(e, t);
}
function fMn(e) {
  return n().host.requestLatches.servedModelsByRequestedModel().get(e);
}
function CYt(e, t) {
  if (e === t) return;
  let o = n().host.requestLatches,
    r = o.servedModelsByRequestedModel().get(e);
  if (r) r.add(t);
  else o.recordServedModels(e, new Set([t]));
}
function mMn(e, t) {
  let o = Bi(),
    r = o.get(e);
  if (r !== void 0) return r;
  if (o.size >= Hi) {
    let i = o.keys().next().value;
    if (i !== void 0) o.delete(i);
  }
  return (o.set(e, t), t);
}
var Hi = 1e4;
function Bi() {
  return g()?.perTurnEffortPins ?? n().conversationLatches.perTurnEffortPins();
}
function bHt(e) {
  return n().host.requestLatches.effortUnsupportedModels().has(e);
}
function vYt(e) {
  n().host.requestLatches.markEffortUnsupported(e);
}
function gMn() {
  return n().host.requestLatches.midConvCachePromotionRejected();
}
function hMn() {
  n().host.requestLatches.markMidConvCachePromotionRejected();
}
function _Mn() {
  return n().host.requestLatches.perTurnEffortOkEmitted();
}
function yMn() {
  n().host.requestLatches.markPerTurnEffortOkEmitted();
}
function SMn() {
  return n().host.requestLatches.lateToolAdditionsOkEmitted();
}
function bMn() {
  n().host.requestLatches.markLateToolAdditionsOkEmitted();
}
function wMn() {
  return n().host.requestLatches.toolChangeHeaderRefused();
}
function TMn() {
  n().host.requestLatches.markToolChangeHeaderRefused();
}
function EMn(e) {
  return n().host.requestLatches.toolChangeUnsupportedModels().has(e);
}
function AMn(e) {
  n().host.requestLatches.markToolChangeUnsupportedModel(e);
}
function OW(e) {
  return n().host.requestLatches.inferenceProfileBackingModels().get(e);
}
function CMn(e, t) {
  n().host.requestLatches.recordInferenceProfileBackingModel(e, t);
}
function pa() {
  return g()?.stickyBetas ?? n().conversationLatches.stickyBetas();
}
function X1() {
  let e = g();
  return e ? e.conversationAtisLatch : n().conversationLatches.atisLatch();
}
function bae(e) {
  let t = g();
  if (t) t.conversationAtisLatch = e;
  else n().conversationLatches.replaceAtisLatch(e);
}
function wHt() {
  let e = g();
  if (e) e.stickyBetas = V(e.stickyBetas);
  else n().conversationLatches.unlatchStickyBetas();
  e?.perTurnEffortPins.clear();
}
function fZ() {
  return n().requestJournal.promptId();
}
function Rje(e) {
  n().requestJournal.replacePromptId(e);
}
function vMn() {
  return n().requestJournal.incrementPromptIndex();
}
function Dxe() {
  return n().requestJournal.promptIndex();
}
function ic() {
  return n().surfaceCapabilities.replBridgeActive();
}
function wae(e) {
  n().surfaceCapabilities.replaceReplBridgeActive(e);
}
function b_e() {
  return n().surfaceCapabilities.mainLoopBusy();
}
function RMn() {
  return n().surfaceCapabilities.mainQueryRunning();
}
function kMn(e) {
  n().surfaceCapabilities.replaceMainLoopStatus(e);
}
export {
  i8,
  identity,
  oo,
  j1,
  TXt,
  parseShortId,
  mB,
  Xn,
  bh,
  Vur,
  qxt,
  sOn,
  Stack,
  SetCache,
  cacheHas,
  Xnt,
  Ynt,
  arrayPush,
  vg,
  baseGetAllKeys,
  arrayFilter,
  stubArray,
  Qnt,
  isObjectLike,
  e_e,
  cae,
  _xe,
  baseUnary,
  uae,
  ert,
  arrayLikeKeys,
  isPrototype,
  overArg,
  isArrayLike,
  yz,
  zxt,
  yxe,
  t_e,
  Qs,
  j,
  rE,
  HXt,
  CW,
  LA,
  ije,
  Vxt,
  nrt,
  Kxt,
  gB,
  W1,
  TS,
  x_,
  rrt,
  sZ,
  IXt,
  ort,
  isSymbol,
  arrayMap,
  toString,
  castPath,
  toKey,
  baseGet,
  PXt,
  srt,
  baseIteratee,
  Si,
  iOn,
  OXt,
  Gt,
  B,
  bi,
  Cbr,
  K,
  ze,
  aOn,
  r_e,
  $p,
  sc,
  DXt,
  fy,
  he,
  wz,
  VR,
  sn,
  irt,
  ES,
  lOn,
  o_e,
  Bw,
  s_e,
  cOn,
  aje,
  uOn,
  i_e,
  dOn,
  pOn,
  LXt,
  MXt,
  Xxt,
  fOn,
  NXt,
  mOn,
  gOn,
  hOn,
  _On,
  yOn,
  SOn,
  bOn,
  Yxt,
  Jxt,
  wOn,
  TOn,
  M0,
  EOn,
  AOn,
  art,
  qP,
  COn,
  Tz,
  vOn,
  lrt,
  Qxt,
  ROn,
  kOn,
  su,
  oE,
  vW,
  FXt,
  $Xt,
  UXt,
  wxe,
  xOn,
  Ez,
  Az,
  hB,
  HOn,
  BXt,
  l8,
  c8,
  Txe,
  jc,
  Exe,
  Axe,
  IOn,
  lje,
  cje,
  POn,
  jXt,
  zP,
  OOn,
  Zxt,
  dae,
  DOn,
  LOn,
  MOn,
  pae,
  NOn,
  u8,
  eHt,
  crt,
  FOn,
  Nm,
  WXt,
  $On,
  iZ,
  UOn,
  BOn,
  GXt,
  Cxe,
  urt,
  jw,
  jOn,
  Ec,
  KR,
  ad,
  WOn,
  drt,
  qXt,
  RW,
  vxe,
  a_e,
  GOn,
  uje,
  Cz,
  vz,
  qOn,
  zOn,
  VOn,
  aZ,
  zXt,
  Rxe,
  KOn,
  XOn,
  prt,
  _B,
  fae,
  YOn,
  JOn,
  QOn,
  ZOn,
  l_e,
  eDn,
  tDn,
  Up,
  nDn,
  dje,
  rDn,
  oDn,
  tHt,
  VXt,
  sDn,
  kxe,
  pje,
  frt,
  mrt,
  iDn,
  aDn,
  lDn,
  cDn,
  uDn,
  dDn,
  pDn,
  c_e,
  fDn,
  fje,
  nHt,
  mDn,
  gDn,
  hDn,
  _Dn,
  yDn,
  KXt,
  u_e,
  SDn,
  bDn,
  grt,
  rHt,
  wDn,
  oHt,
  XXt,
  hrt,
  YXt,
  JXt,
  TDn,
  QXt,
  EDn,
  _rt,
  mje,
  ADn,
  ZXt,
  d_e,
  eYt,
  sHt,
  CDn,
  vDn,
  RDn,
  kDn,
  ke,
  ld,
  xDn,
  gje,
  HDn,
  iHt,
  hje,
  yB,
  IDn,
  dl,
  PDn,
  VP,
  ODn,
  yrt,
  DDn,
  Srt,
  LDn,
  MDn,
  NDn,
  FDn,
  brt,
  $Dn,
  wrt,
  UDn,
  p_e,
  BDn,
  Trt,
  jDn,
  WDn,
  pv,
  Ert,
  Art,
  G1,
  GDn,
  qDn,
  AS,
  f_e,
  zDn,
  VDn,
  tYt,
  KDn,
  XDn,
  Ox,
  lZ,
  YDn,
  JDn,
  QDn,
  ZDn,
  eLn,
  Crt,
  nYt,
  rYt,
  xxe,
  tLn,
  oYt,
  q1,
  nLn,
  MA,
  rLn,
  d8,
  oLn,
  RL,
  cZ,
  sLn,
  iLn,
  m_e,
  aLn,
  _je,
  mae,
  uZ,
  N0,
  dZ,
  yje,
  lLn,
  Sje,
  sYt,
  iYt,
  cLn,
  aHt,
  aYt,
  lHt,
  uLn,
  ns,
  dLn,
  fv,
  pLn,
  fLn,
  g_e,
  h_e,
  kW,
  cHt,
  p8,
  xW,
  mLn,
  gLn,
  bje,
  lYt,
  hLn,
  vrt,
  uHt,
  pZ,
  _Ln,
  dHt,
  cYt,
  yLn,
  SLn,
  gae,
  uYt,
  bLn,
  Rrt,
  krt,
  kL,
  xrt,
  xL,
  wLn,
  hae,
  __e,
  pHt,
  _ae,
  TLn,
  ELn,
  y_e,
  fHt,
  Hrt,
  mHt,
  Nb,
  ALn,
  Hxe,
  CLn,
  HW,
  vLn,
  S_e,
  RLn,
  f8,
  kLn,
  xLn,
  SB,
  Irt,
  HLn,
  Rg,
  ILn,
  Rz,
  bB,
  Prt,
  kg,
  m8,
  PLn,
  dYt,
  Ort,
  wje,
  Ixe,
  pYt,
  Drt,
  OLn,
  Tje,
  Lrt,
  Eje,
  gHt,
  HL,
  Dx,
  g8,
  Aje,
  DLn,
  LLn,
  IL,
  z1,
  hHt,
  PL,
  fYt,
  MLn,
  IW,
  h8,
  NLn,
  OL,
  FLn,
  mYt,
  gYt,
  $Ln,
  hYt,
  ULn,
  _Yt,
  DL,
  Mrt,
  Lx,
  Pxe,
  Nrt,
  BLn,
  yYt,
  Frt,
  wB,
  LL,
  jLn,
  $rt,
  SYt,
  V1,
  WLn,
  _8,
  bYt,
  GLn,
  qLn,
  vbr,
  Rbr,
  kbr,
  zLn,
  _Ht,
  wYt,
  VLn,
  KLn,
  XLn,
  YLn,
  JLn,
  TYt,
  QLn,
  Cje,
  vje,
  EYt,
  TB,
  EB,
  AYt,
  ZLn,
  eMn,
  Oxe,
  xbr,
  Hbr,
  Ibr,
  H_,
  PW,
  yae,
  tMn,
  yHt,
  K1,
  nMn,
  Mx,
  rMn,
  Nn,
  kz,
  ML,
  oMn,
  Urt,
  mv,
  xz,
  Pbr,
  sMn,
  Brt,
  iMn,
  jrt,
  aMn,
  lMn,
  mp,
  Hz,
  ym,
  Sae,
  Wrt,
  cMn,
  uMn,
  dMn,
  SHt,
  pMn,
  fMn,
  CYt,
  mMn,
  bHt,
  vYt,
  gMn,
  hMn,
  _Mn,
  yMn,
  SMn,
  bMn,
  wMn,
  TMn,
  EMn,
  AMn,
  OW,
  CMn,
  pa,
  X1,
  bae,
  wHt,
  fZ,
  Rje,
  vMn,
  Dxe,
  ic,
  wae,
  b_e,
  RMn,
  kMn,
};

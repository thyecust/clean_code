// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  NI,
  pNe,
  rYn,
  fNe,
  sYn,
  TSt,
  Cpe,
  Ere,
  o3t,
} from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import {
  te,
  FP,
  $w,
  khe,
  G7t,
  Bie,
  nPn,
  $P,
  gm,
  fW,
  q7t,
  i_,
  lxt,
  Rcr,
  kcr,
  nz,
  oB,
  xcr,
  Hcr,
  jke,
  xhe,
  rz,
  Hhe,
  sB,
  dp,
} from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { j, B, Ez, Az, dl } from "../lodash/lodash.2x3q7cfh.js";
import { sE, Fm, Ie, po } from "../lodash/lodash.207999qb.js";
import { R, dt, ge, A, Po } from "../@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { os, Yg, ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../react/react.zhnvc798.js";
import { cz } from "../which-isexe/ isexe.knmpyrza.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Fe } from "../../02-功能模块/Git-Worktree/chunk-9ys1bnqr.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { usr, zg, n5t, Isr, Psr, Dsr, H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ie, $Ze } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { CT, xYn, HYn, iK, HNe, jY, IYn } from "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { rue, Nze, aft } from "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import { Ei } from "../../02-功能模块/Hooks钩子/chunk-9em0d4k5.js";
import { CF } from "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import { dG, Ta, zSn } from "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { no } from "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import { mw, z_, vNe, kAe, xAe, BSt, jSt, z8e } from "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { ws } from "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import {
  cee,
  H9e,
  sk,
  YUn,
  Zd,
  JUn,
  Av,
  W0e,
  ZUn,
  m4,
  dE,
  tBn,
  lO,
  lDt,
  Jye,
  uDt,
  dDt,
  Dtn,
  Ltn,
  $at,
  ga,
  Kx,
  Uat,
  I9e,
  Bat,
} from "../_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import {
  zf,
  jat,
  Wat,
  q0e,
  Gat,
  Cv,
  vv,
  z0e,
  V0e,
  qat,
  s7,
  O9e,
} from "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import { Lyn, Pre, $I, kYn } from "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import { fBn, mBn, hBn, Btn } from "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import { Ev, xtn, Htn } from "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import { Ol } from "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import { e, r } from "../react/react.kwtapczy.js";
import { Jw } from "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import { M7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import { Cln, Uze, Qt, vln, V, F } from "../_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { Hve } from "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import { Xs } from "../../01-核心基础设施/共享小工具-未细化/chunk-xcc43dkx.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { pe, w, Wo, p, Ae } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function Uf(t, s) {
  var c = t.length;
  t.push(s);
  e: for (; 0 < c;) {
    var f = (c - 1) >>> 1,
      m = t[f];
    if (0 < iu(m, s)) ((t[f] = s), (t[c] = m), (c = f));
    else break e;
  }
}
function Bi(t) {
  return t.length === 0 ? null : t[0];
}
function au(t) {
  if (t.length === 0) return null;
  var s = t[0],
    c = t.pop();
  if (c !== s) {
    t[0] = c;
    e: for (var f = 0, m = t.length, y = m >>> 1; f < y;) {
      var b = 2 * (f + 1) - 1,
        S = t[b],
        E = b + 1,
        x = t[E];
      if (0 > iu(S, c))
        E < m && 0 > iu(x, S)
          ? ((t[f] = x), (t[E] = c), (f = E))
          : ((t[f] = S), (t[b] = c), (f = b));
      else if (E < m && 0 > iu(x, c)) ((t[f] = x), (t[E] = c), (f = E));
      else break e;
    }
  }
  return s;
}
function iu(t, s) {
  var c = t.sortIndex - s.sortIndex;
  return c !== 0 ? c : t.id - s.id;
}
function ru(t) {
  for (var s = Bi(Pl); s !== null;) {
    if (s.callback === null) au(Pl);
    else if (s.startTime <= t)
      (au(Pl), (s.sortIndex = s.expirationTime), Uf(ol, s));
    else break;
    s = Bi(Pl);
  }
}
function Gf(t) {
  if (((Fa = !1), ru(t), !Ua))
    if (Bi(ol) !== null) ((Ua = !0), To || ((To = !0), Ro()));
    else {
      var s = Bi(Pl);
      s !== null && jf(Gf, s.startTime - t);
    }
}
function _y() {
  return kf ? !0 : Li() - Ay < x1 ? !1 : !0;
}
function Lf() {
  if (((kf = !1), To)) {
    var t = Li();
    Ay = t;
    var s = !0;
    try {
      e: {
        ((Ua = !1), Fa && ((Fa = !1), Ny(Pa), (Pa = -1)), (Yf = !0));
        var c = Bf;
        try {
          t: {
            ru(t);
            for (
              Jn = Bi(ol);
              Jn !== null && !(Jn.expirationTime > t && _y());
            ) {
              var f = Jn.callback;
              if (typeof f === "function") {
                ((Jn.callback = null), (Bf = Jn.priorityLevel));
                var m = f(Jn.expirationTime <= t);
                if (((t = Li()), typeof m === "function")) {
                  ((Jn.callback = m), ru(t), (s = !0));
                  break t;
                }
                (Jn === Bi(ol) && au(ol), ru(t));
              } else au(ol);
              Jn = Bi(ol);
            }
            if (Jn !== null) s = !0;
            else {
              var y = Bi(Pl);
              (y !== null && jf(Gf, y.startTime - t), (s = !1));
            }
          }
          break e;
        } finally {
          ((Jn = null), (Bf = c), (Yf = !1));
        }
        s = void 0;
      }
    } finally {
      s ? Ro() : (To = !1);
    }
  }
}
function jf(t, s) {
  Pa = Ty(function () {
    t(Li());
  }, s);
}
var Li = void 0,
  Ff,
  lu,
  Pf,
  ol,
  Pl,
  E1 = 1,
  Jn = null,
  Bf = 3,
  Yf = !1,
  Ua = !1,
  Fa = !1,
  kf = !1,
  Ty,
  Ny,
  Ry,
  To = !1,
  Pa = -1,
  x1 = 5,
  Ay = -1,
  Ro,
  ou,
  Kf,
  Wf = 5,
  Vf = 1,
  su = 3,
  qf = 2,
  Xf = function (t) {
    t.callback = null;
  },
  Qf = function () {
    kf = !0;
  },
  uu = function (t, s, c) {
    var f = Li();
    switch (
      (typeof c === "object" && c !== null
        ? ((c = c.delay), (c = typeof c === "number" && 0 < c ? f + c : f))
        : (c = f),
      t)
    ) {
      case 1:
        var m = -1;
        break;
      case 2:
        m = 250;
        break;
      case 5:
        m = 1073741823;
        break;
      case 4:
        m = 1e4;
        break;
      default:
        m = 5000;
    }
    return (
      (m = c + m),
      (t = {
        id: E1++,
        callback: s,
        priorityLevel: t,
        startTime: c,
        expirationTime: m,
        sortIndex: -1,
      }),
      c > f
        ? ((t.sortIndex = c),
          Uf(Pl, t),
          Bi(ol) === null &&
            t === Bi(Pl) &&
            (Fa ? (Ny(Pa), (Pa = -1)) : (Fa = !0), jf(Gf, c - f)))
        : ((t.sortIndex = m),
          Uf(ol, t),
          Ua || Yf || ((Ua = !0), To || ((To = !0), Ro()))),
      t
    );
  },
  Zf;
var Oy = Wo(() => {
  if (typeof performance === "object" && typeof performance.now === "function")
    ((Ff = performance),
      (Li = function () {
        return Ff.now();
      }));
  else
    ((lu = Date),
      (Pf = lu.now()),
      (Li = function () {
        return lu.now() - Pf;
      }));
  ((ol = []),
    (Pl = []),
    (Ty = typeof setTimeout === "function" ? setTimeout : null),
    (Ny = typeof clearTimeout === "function" ? clearTimeout : null),
    (Ry = typeof setImmediate < "u" ? setImmediate : null));
  if (typeof Ry === "function")
    Ro = function () {
      Ry(Lf);
    };
  else if (typeof MessageChannel < "u")
    ((ou = new MessageChannel()),
      (Kf = ou.port2),
      (ou.port1.onmessage = Lf),
      (Ro = function () {
        Kf.postMessage(null);
      }));
  else
    Ro = function () {
      Ty(Lf, 0);
    };
  Zf = _y;
});
var wy = w(function (r2, Ya) {
  F();
  Oy();
  Ya.exports = function (t) {
    function s(l, o, u, d) {
      return new $g(l, o, u, d);
    }
    function c() {}
    function f(l) {
      var o = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        o += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var u = 2; u < arguments.length; u++)
          o += "&args[]=" + encodeURIComponent(arguments[u]);
      }
      return (
        "Minified React error #" +
        l +
        "; visit " +
        o +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function m(l) {
      var o = l,
        u = l;
      if (l.alternate) for (; o.return;) o = o.return;
      else {
        l = o;
        do ((o = l), (o.flags & 4098) !== 0 && (u = o.return), (l = o.return));
        while (l);
      }
      return o.tag === 3 ? u : null;
    }
    function y(l) {
      if (m(l) !== l) throw Error(f(188));
    }
    function b(l) {
      var o = l.alternate;
      if (!o) {
        if (((o = m(l)), o === null)) throw Error(f(188));
        return o !== l ? null : l;
      }
      for (var u = l, d = o; ;) {
        var v = u.return;
        if (v === null) break;
        var g = v.alternate;
        if (g === null) {
          if (((d = v.return), d !== null)) {
            u = d;
            continue;
          }
          break;
        }
        if (v.child === g.child) {
          for (g = v.child; g;) {
            if (g === u) return (y(v), l);
            if (g === d) return (y(v), o);
            g = g.sibling;
          }
          throw Error(f(188));
        }
        if (u.return !== d.return) ((u = v), (d = g));
        else {
          for (var M = !1, K = v.child; K;) {
            if (K === u) {
              ((M = !0), (u = v), (d = g));
              break;
            }
            if (K === d) {
              ((M = !0), (d = v), (u = g));
              break;
            }
            K = K.sibling;
          }
          if (!M) {
            for (K = g.child; K;) {
              if (K === u) {
                ((M = !0), (u = g), (d = v));
                break;
              }
              if (K === d) {
                ((M = !0), (d = g), (u = v));
                break;
              }
              K = K.sibling;
            }
            if (!M) throw Error(f(189));
          }
        }
        if (u.alternate !== d) throw Error(f(190));
      }
      if (u.tag !== 3) throw Error(f(188));
      return u.stateNode.current === u ? l : o;
    }
    function S(l) {
      var o = l.tag;
      if (o === 5 || o === 26 || o === 27 || o === 6) return l;
      for (l = l.child; l !== null;) {
        if (((o = S(l)), o !== null)) return o;
        l = l.sibling;
      }
      return null;
    }
    function E(l) {
      var o = l.tag;
      if (o === 5 || o === 26 || o === 27 || o === 6) return l;
      for (l = l.child; l !== null;) {
        if (l.tag !== 4 && ((o = E(l)), o !== null)) return o;
        l = l.sibling;
      }
      return null;
    }
    function x(l) {
      if (l === null || typeof l !== "object") return null;
      return (
        (l = (bm && l[bm]) || l["@@iterator"]),
        typeof l === "function" ? l : null
      );
    }
    function C(l) {
      if (l == null) return null;
      if (typeof l === "function")
        return l.$$typeof === ib ? null : l.displayName || l.name || null;
      if (typeof l === "string") return l;
      switch (l) {
        case Ir:
          return "Fragment";
        case cc:
          return "Profiler";
        case ym:
          return "StrictMode";
        case dc:
          return "Suspense";
        case hc:
          return "SuspenseList";
        case pc:
          return "Activity";
      }
      if (typeof l === "object")
        switch (l.$$typeof) {
          case Zr:
            return "Portal";
          case Ml:
            return l.displayName || "Context";
          case vm:
            return (l._context.displayName || "Context") + ".Consumer";
          case fc:
            var o = l.render;
            return (
              (l = l.displayName),
              l ||
                ((l = o.displayName || o.name || ""),
                (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
              l
            );
          case mc:
            return (
              (o = l.displayName || null),
              o !== null ? o : C(l.type) || "Memo"
            );
          case Rl:
            ((o = l._payload), (l = l._init));
            try {
              return C(l(o));
            } catch (u) {}
        }
      return null;
    }
    function D(l) {
      return { current: l };
    }
    function N(l) {
      0 > eo || ((l.current = Ec[eo]), (Ec[eo] = null), eo--);
    }
    function T(l, o) {
      (eo++, (Ec[eo] = l.current), (l.current = o));
    }
    function L(l) {
      return ((l >>>= 0), l === 0 ? 32 : (31 - ((O0(l) / w0) | 0)) | 0);
    }
    function O(l) {
      var o = l & 42;
      if (o !== 0) return o;
      switch (l & -l) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return l & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return l;
      }
    }
    function z(l, o, u) {
      var d = l.pendingLanes;
      if (d === 0) return 0;
      var v = 0,
        g = l.suspendedLanes,
        M = l.pingedLanes;
      l = l.warmLanes;
      var K = d & 134217727;
      return (
        K !== 0
          ? ((d = K & ~g),
            d !== 0
              ? (v = O(d))
              : ((M &= K),
                M !== 0
                  ? (v = O(M))
                  : u || ((u = K & ~l), u !== 0 && (v = O(u)))))
          : ((K = d & ~g),
            K !== 0
              ? (v = O(K))
              : M !== 0
                ? (v = O(M))
                : u || ((u = d & ~l), u !== 0 && (v = O(u)))),
        v === 0
          ? 0
          : o !== 0 &&
              o !== v &&
              (o & g) === 0 &&
              ((g = v & -v),
              (u = o & -o),
              g >= u || (g === 32 && (u & 4194048) !== 0))
            ? o
            : v
      );
    }
    function W(l, o) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & o) === 0;
    }
    function Y(l, o) {
      switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return o + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return o + 5000;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function X() {
      var l = xs;
      return ((xs <<= 1), (xs & 62914560) === 0 && (xs = 4194304), l);
    }
    function U(l) {
      for (var o = [], u = 0; 31 > u; u++) o.push(l);
      return o;
    }
    function k(l, o) {
      ((l.pendingLanes |= o),
        o !== 268435456 &&
          ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
    }
    function Z(l, o, u, d, v, g) {
      var M = l.pendingLanes;
      ((l.pendingLanes = u),
        (l.suspendedLanes = 0),
        (l.pingedLanes = 0),
        (l.warmLanes = 0),
        (l.expiredLanes &= u),
        (l.entangledLanes &= u),
        (l.errorRecoveryDisabledLanes &= u),
        (l.shellSuspendCounter = 0));
      var { entanglements: K, expirationTimes: ne, hiddenUpdates: ae } = l;
      for (u = M & ~u; 0 < u;) {
        var be = 31 - Hn(u),
          me = 1 << be;
        ((K[be] = 0), (ne[be] = -1));
        var xe = ae[be];
        if (xe !== null)
          for (ae[be] = null, be = 0; be < xe.length; be++) {
            var ze = xe[be];
            ze !== null && (ze.lane &= -536870913);
          }
        u &= ~me;
      }
      (d !== 0 && J(l, d, 0),
        g !== 0 &&
          v === 0 &&
          l.tag !== 0 &&
          (l.suspendedLanes |= g & ~(M & ~o)));
    }
    function J(l, o, u) {
      ((l.pendingLanes |= o), (l.suspendedLanes &= ~o));
      var d = 31 - Hn(o);
      ((l.entangledLanes |= o),
        (l.entanglements[d] = l.entanglements[d] | 1073741824 | (u & 261930)));
    }
    function re(l, o) {
      var u = (l.entangledLanes |= o);
      for (l = l.entanglements; u;) {
        var d = 31 - Hn(u),
          v = 1 << d;
        ((v & o) | (l[d] & o) && (l[d] |= o), (u &= ~v));
      }
    }
    function Q(l, o) {
      var u = o & -o;
      return (
        (u = (u & 42) !== 0 ? 1 : ce(u)),
        (u & (l.suspendedLanes | o)) !== 0 ? 0 : u
      );
    }
    function ce(l) {
      switch (l) {
        case 2:
          l = 1;
          break;
        case 8:
          l = 4;
          break;
        case 32:
          l = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          l = 128;
          break;
        case 268435456:
          l = 134217728;
          break;
        default:
          l = 0;
      }
      return l;
    }
    function le(l) {
      return (
        (l &= -l),
        2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
      );
    }
    function oe(l) {
      if (
        (typeof U0 === "function" && F0(l),
        Bn && typeof Bn.setStrictMode === "function")
      )
        try {
          Bn.setStrictMode(ha, l);
        } catch (o) {}
    }
    function fe(l, o) {
      return (l === o && (l !== 0 || 1 / l === 1 / o)) || (l !== l && o !== o);
    }
    function ue(l) {
      if (Mc === void 0)
        try {
          throw Error();
        } catch (u) {
          var o = u.stack.trim().match(/\n( *(at )?)/);
          ((Mc = (o && o[1]) || ""),
            (qm =
              -1 <
              u.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < u.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : ""));
        }
      return (
        `
` +
        Mc +
        l +
        qm
      );
    }
    function se(l, o) {
      if (!l || Rc) return "";
      Rc = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var d = {
          DetermineComponentFrameRoot: function () {
            try {
              if (o) {
                var me = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(me.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect === "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(me, []);
                  } catch (ze) {
                    var xe = ze;
                  }
                  Reflect.construct(l, [], me);
                } else {
                  try {
                    me.call();
                  } catch (ze) {
                    xe = ze;
                  }
                  l.call(me.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ze) {
                  xe = ze;
                }
                (me = l()) &&
                  typeof me.catch === "function" &&
                  me.catch(function () {});
              }
            } catch (ze) {
              if (ze && xe && typeof ze.stack === "string")
                return [ze.stack, xe.stack];
            }
            return [null, null];
          },
        };
        d.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var v = Object.getOwnPropertyDescriptor(
          d.DetermineComponentFrameRoot,
          "name",
        );
        v &&
          v.configurable &&
          Object.defineProperty(d.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var g = d.DetermineComponentFrameRoot(),
          M = g[0],
          K = g[1];
        if (M && K) {
          var ne = M.split(`
`),
            ae = K.split(`
`);
          for (
            v = d = 0;
            d < ne.length && !ne[d].includes("DetermineComponentFrameRoot");
          )
            d++;
          for (
            ;
            v < ae.length && !ae[v].includes("DetermineComponentFrameRoot");
          )
            v++;
          if (d === ne.length || v === ae.length)
            for (
              d = ne.length - 1, v = ae.length - 1;
              1 <= d && 0 <= v && ne[d] !== ae[v];
            )
              v--;
          for (; 1 <= d && 0 <= v; d--, v--)
            if (ne[d] !== ae[v]) {
              if (d !== 1 || v !== 1)
                do
                  if ((d--, v--, 0 > v || ne[d] !== ae[v])) {
                    var be =
                      `
` + ne[d].replace(" at new ", " at ");
                    return (
                      l.displayName &&
                        be.includes("<anonymous>") &&
                        (be = be.replace("<anonymous>", l.displayName)),
                      be
                    );
                  }
                while (1 <= d && 0 <= v);
              break;
            }
        }
      } finally {
        ((Rc = !1), (Error.prepareStackTrace = u));
      }
      return (u = l ? l.displayName || l.name : "") ? ue(u) : "";
    }
    function ve(l, o) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return ue(l.type);
        case 16:
          return ue("Lazy");
        case 13:
          return l.child !== o && o !== null
            ? ue("Suspense Fallback")
            : ue("Suspense");
        case 19:
          return ue("SuspenseList");
        case 0:
        case 15:
          return se(l.type, !1);
        case 11:
          return se(l.type.render, !1);
        case 1:
          return se(l.type, !0);
        case 31:
          return ue("Activity");
        default:
          return "";
      }
    }
    function he(l) {
      try {
        var o = "",
          u = null;
        do ((o += ve(l, u)), (u = l), (l = l.return));
        while (l);
        return o;
      } catch (d) {
        return (
          `
Error generating stack: ` +
          d.message +
          `
` +
          d.stack
        );
      }
    }
    function Se(l, o) {
      if (typeof l === "object" && l !== null) {
        var u = Xm.get(l);
        if (u !== void 0) return u;
        return ((o = { value: l, source: o, stack: he(o) }), Xm.set(l, o), o);
      }
      return { value: l, source: o, stack: he(o) };
    }
    function Ee(l, o) {
      ((io[lo++] = ma), (io[lo++] = Ms), (Ms = l), (ma = o));
    }
    function Ue(l, o, u) {
      ((kn[Gn++] = Ai), (kn[Gn++] = _i), (kn[Gn++] = Tl), (Tl = l));
      var d = Ai;
      l = _i;
      var v = 32 - Hn(d) - 1;
      ((d &= ~(1 << v)), (u += 1));
      var g = 32 - Hn(o) + v;
      if (30 < g) {
        var M = v - (v % 5);
        ((g = (d & ((1 << M) - 1)).toString(32)),
          (d >>= M),
          (v -= M),
          (Ai = (1 << (32 - Hn(o) + v)) | (u << v) | d),
          (_i = g + l));
      } else ((Ai = (1 << g) | (u << v) | d), (_i = l));
    }
    function ke(l) {
      l.return !== null && (Ee(l, 1), Ue(l, 1, 0));
    }
    function et(l) {
      for (; l === Ms;)
        ((Ms = io[--lo]), (io[lo] = null), (ma = io[--lo]), (io[lo] = null));
      for (; l === Tl;)
        ((Tl = kn[--Gn]),
          (kn[Gn] = null),
          (_i = kn[--Gn]),
          (kn[Gn] = null),
          (Ai = kn[--Gn]),
          (kn[Gn] = null));
    }
    function wt(l, o) {
      ((kn[Gn++] = Ai),
        (kn[Gn++] = _i),
        (kn[Gn++] = Tl),
        (Ai = o.id),
        (_i = o.overflow),
        (Tl = l));
    }
    function bt(l, o) {
      (T(Nl, o), T(pa, l), T(It, null), (l = ob(o)), N(It), T(It, l));
    }
    function Mt() {
      (N(It), N(pa), N(Nl));
    }
    function nn(l) {
      l.memoizedState !== null && T(Rs, l);
      var o = It.current,
        u = ab(o, l.type);
      o !== u && (T(pa, l), T(It, u));
    }
    function rn(l) {
      (pa.current === l && (N(It), N(pa)),
        Rs.current === l &&
          (N(Rs), Zi ? (fr._currentValue = Jr) : (fr._currentValue2 = Jr)));
    }
    function yt(l) {
      var o = Error(
        f(
          418,
          1 < arguments.length && arguments[1] !== void 0 && arguments[1]
            ? "text"
            : "HTML",
          "",
        ),
      );
      throw (hn(Se(o, l)), Tc);
    }
    function ti(l, o) {
      if (!fn) throw Error(f(175));
      a0(l.stateNode, l.type, l.memoizedProps, o, l) || yt(l, !0);
    }
    function Vt(l) {
      for (Jt = l.return; Jt;)
        switch (Jt.tag) {
          case 5:
          case 31:
          case 13:
            jn = !1;
            return;
          case 27:
          case 3:
            jn = !0;
            return;
          default:
            Jt = Jt.return;
        }
    }
    function Rt(l) {
      if (!fn || l !== Jt) return !1;
      if (!Xe) return (Vt(l), (Xe = !0), !1);
      var o = l.tag;
      if (
        (Kt
          ? o !== 3 &&
            o !== 27 &&
            (o !== 5 || (wm(l.type) && !bs(l.type, l.memoizedProps))) &&
            Tt &&
            yt(l)
          : o !== 3 &&
            (o !== 5 || (wm(l.type) && !bs(l.type, l.memoizedProps))) &&
            Tt &&
            yt(l),
        Vt(l),
        o === 13)
      ) {
        if (!fn) throw Error(f(316));
        if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
          throw Error(f(317));
        Tt = d0(l);
      } else if (o === 31) {
        if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
          throw Error(f(317));
        Tt = f0(l);
      } else Tt = Kt && o === 27 ? Ib(l.type, Tt) : Jt ? Om(l.stateNode) : null;
      return !0;
    }
    function tt() {
      fn && ((Tt = Jt = null), (Xe = !1));
    }
    function St() {
      var l = Al;
      return (
        l !== null &&
          (Nn === null ? (Nn = l) : Nn.push.apply(Nn, l), (Al = null)),
        l
      );
    }
    function hn(l) {
      Al === null ? (Al = [l]) : Al.push(l);
    }
    function Lt(l, o, u) {
      Zi
        ? (T(Ts, o._currentValue), (o._currentValue = u))
        : (T(Ts, o._currentValue2), (o._currentValue2 = u));
    }
    function nt(l) {
      var o = Ts.current;
      (Zi ? (l._currentValue = o) : (l._currentValue2 = o), N(Ts));
    }
    function mn(l, o, u) {
      for (; l !== null;) {
        var d = l.alternate;
        if (
          ((l.childLanes & o) !== o
            ? ((l.childLanes |= o), d !== null && (d.childLanes |= o))
            : d !== null && (d.childLanes & o) !== o && (d.childLanes |= o),
          l === u)
        )
          break;
        l = l.return;
      }
    }
    function Ce(l, o, u, d) {
      var v = l.child;
      v !== null && (v.return = l);
      for (; v !== null;) {
        var g = v.dependencies;
        if (g !== null) {
          var M = v.child;
          g = g.firstContext;
          e: for (; g !== null;) {
            var K = g;
            g = v;
            for (var ne = 0; ne < o.length; ne++)
              if (K.context === o[ne]) {
                ((g.lanes |= u),
                  (K = g.alternate),
                  K !== null && (K.lanes |= u),
                  mn(g.return, u, l),
                  d || (M = null));
                break e;
              }
            g = K.next;
          }
        } else if (v.tag === 18) {
          if (((M = v.return), M === null)) throw Error(f(341));
          ((M.lanes |= u),
            (g = M.alternate),
            g !== null && (g.lanes |= u),
            mn(M, u, l),
            (M = null));
        } else M = v.child;
        if (M !== null) M.return = v;
        else
          for (M = v; M !== null;) {
            if (M === l) {
              M = null;
              break;
            }
            if (((v = M.sibling), v !== null)) {
              ((v.return = M.return), (M = v));
              break;
            }
            M = M.return;
          }
        v = M;
      }
    }
    function He(l, o, u, d) {
      l = null;
      for (var v = o, g = !1; v !== null;) {
        if (!g) {
          if ((v.flags & 524288) !== 0) g = !0;
          else if ((v.flags & 262144) !== 0) break;
        }
        if (v.tag === 10) {
          var M = v.alternate;
          if (M === null) throw Error(f(387));
          if (((M = M.memoizedProps), M !== null)) {
            var K = v.type;
            Ln(v.pendingProps.value, M.value) ||
              (l !== null ? l.push(K) : (l = [K]));
          }
        } else if (v === Rs.current) {
          if (((M = v.alternate), M === null)) throw Error(f(387));
          M.memoizedState.memoizedState !== v.memoizedState.memoizedState &&
            (l !== null ? l.push(fr) : (l = [fr]));
        }
        v = v.return;
      }
      (l !== null && Ce(o, l, u, d), (o.flags |= 262144));
    }
    function Me(l) {
      for (l = l.firstContext; l !== null;) {
        var o = l.context;
        if (!Ln(Zi ? o._currentValue : o._currentValue2, l.memoizedValue))
          return !0;
        l = l.next;
      }
      return !1;
    }
    function de(l) {
      ((dr = l),
        (Ji = null),
        (l = l.dependencies),
        l !== null && (l.firstContext = null));
    }
    function Te(l) {
      return Le(dr, l);
    }
    function _e(l, o) {
      return (dr === null && de(l), Le(l, o));
    }
    function Le(l, o) {
      var u = Zi ? o._currentValue : o._currentValue2;
      if (((o = { context: o, memoizedValue: u, next: null }), Ji === null)) {
        if (l === null) throw Error(f(308));
        ((Ji = o),
          (l.dependencies = { lanes: 0, firstContext: o }),
          (l.flags |= 524288));
      } else Ji = Ji.next = o;
      return u;
    }
    function De() {
      return { controller: new Y0(), data: new Map(), refCount: 0 };
    }
    function rt(l) {
      (l.refCount--,
        l.refCount === 0 &&
          K0(k0, function () {
            l.controller.abort();
          }));
    }
    function st() {}
    function Ne(l) {
      (l !== ro &&
        l.next === null &&
        (ro === null ? (Ns = ro = l) : (ro = ro.next = l)),
        (As = !0),
        Nc || ((Nc = !0), ht()));
    }
    function Ke(l, o) {
      if (!Ac && As) {
        Ac = !0;
        do {
          var u = !1;
          for (var d = Ns; d !== null;) {
            if (!o)
              if (l !== 0) {
                var v = d.pendingLanes;
                if (v === 0) var g = 0;
                else {
                  var M = d.suspendedLanes,
                    K = d.pingedLanes;
                  ((g = (1 << (31 - Hn(42 | l) + 1)) - 1),
                    (g &= v & ~(M & ~K)),
                    (g = g & 201326741 ? (g & 201326741) | 1 : g ? g | 2 : 0));
                }
                g !== 0 && ((u = !0), Ve(d, g));
              } else
                ((g = qe),
                  (g = z(
                    d,
                    d === ft ? g : 0,
                    d.cancelPendingCommit !== null || d.timeoutHandle !== cr,
                  )),
                  (g & 3) === 0 || W(d, g) || ((u = !0), Ve(d, g)));
            d = d.next;
          }
        } while (u);
        Ac = !1;
      }
    }
    function ot() {
      Pe();
    }
    function Pe() {
      As = Nc = !1;
      var l = 0;
      hr !== 0 && yb() && (l = hr);
      for (var o = Rn(), u = null, d = Ns; d !== null;) {
        var v = d.next,
          g = it(d, o);
        if (g === 0)
          ((d.next = null),
            u === null ? (Ns = v) : (u.next = v),
            v === null && (ro = u));
        else if (((u = d), l !== 0 || (g & 3) !== 0)) As = !0;
        d = v;
      }
      ((kt !== 0 && kt !== 5) || Ke(l, !1), hr !== 0 && (hr = 0));
    }
    function it(l, o) {
      for (
        var { suspendedLanes: u, pingedLanes: d, expirationTimes: v } = l,
          g = l.pendingLanes & -62914561;
        0 < g;
      ) {
        var M = 31 - Hn(g),
          K = 1 << M,
          ne = v[M];
        if (ne === -1) {
          if ((K & u) === 0 || (K & d) !== 0) v[M] = Y(K, o);
        } else ne <= o && (l.expiredLanes |= K);
        g &= ~K;
      }
      if (
        ((o = ft),
        (u = qe),
        (u = z(
          l,
          l === o ? u : 0,
          l.cancelPendingCommit !== null || l.timeoutHandle !== cr,
        )),
        (d = l.callbackNode),
        u === 0 ||
          (l === o && (lt === 2 || lt === 9)) ||
          l.cancelPendingCommit !== null)
      )
        return (
          d !== null && d !== null && xc(d),
          (l.callbackNode = null),
          (l.callbackPriority = 0)
        );
      if ((u & 3) === 0 || W(l, u)) {
        if (((o = u & -u), o === l.callbackPriority)) return o;
        switch ((d !== null && xc(d), le(u))) {
          case 2:
          case 8:
            u = L0;
            break;
          case 32:
            u = Cc;
            break;
          case 268435456:
            u = z0;
            break;
          default:
            u = Cc;
        }
        return (
          (d = ut.bind(null, l)),
          (u = Cs(u, d)),
          (l.callbackPriority = o),
          (l.callbackNode = u),
          o
        );
      }
      return (
        d !== null && d !== null && xc(d),
        (l.callbackPriority = 2),
        (l.callbackNode = null),
        2
      );
    }
    function ut(l, o) {
      if (kt !== 0 && kt !== 5)
        return ((l.callbackNode = null), (l.callbackPriority = 0), null);
      var u = l.callbackNode;
      if (ua() && l.callbackNode !== u) return null;
      var d = qe;
      if (
        ((d = z(
          l,
          l === ft ? d : 0,
          l.cancelPendingCommit !== null || l.timeoutHandle !== cr,
        )),
        d === 0)
      )
        return null;
      return (
        jh(l, d, o),
        it(l, Rn()),
        l.callbackNode != null && l.callbackNode === u ? ut.bind(null, l) : null
      );
    }
    function Ve(l, o) {
      if (ua()) return null;
      jh(l, o, !0);
    }
    function ht() {
      Cb
        ? Mb(function () {
            (je & 6) !== 0 ? Cs(jm, ot) : Pe();
          })
        : Cs(jm, ot);
    }
    function Et() {
      if (hr === 0) {
        var l = oo;
        (l === 0 && ((l = Ss), (Ss <<= 1), (Ss & 261888) === 0 && (Ss = 256)),
          (hr = l));
      }
      return hr;
    }
    function Yt(l, o) {
      if (ya === null) {
        var u = (ya = []);
        ((_c = 0),
          (oo = Et()),
          (ao = {
            status: "pending",
            value: void 0,
            then: function (d) {
              u.push(d);
            },
          }));
      }
      return (_c++, o.then(pn, pn), o);
    }
    function pn() {
      if (--_c === 0 && ya !== null) {
        ao !== null && (ao.status = "fulfilled");
        var l = ya;
        ((ya = null), (oo = 0), (ao = null));
        for (var o = 0; o < l.length; o++) (0, l[o])();
      }
    }
    function xt(l, o) {
      var u = [],
        d = {
          status: "pending",
          value: null,
          reason: null,
          then: function (v) {
            u.push(v);
          },
        };
      return (
        l.then(
          function () {
            ((d.status = "fulfilled"), (d.value = o));
            for (var v = 0; v < u.length; v++) (0, u[v])(o);
          },
          function (v) {
            ((d.status = "rejected"), (d.reason = v));
            for (v = 0; v < u.length; v++) (0, u[v])(void 0);
          },
        ),
        d
      );
    }
    function Ct() {
      var l = mr.current;
      return l !== null ? l : ft.pooledCache;
    }
    function vi(l, o) {
      o === null ? T(mr, mr.current) : T(mr, o.pool);
    }
    function ni() {
      var l = Ct();
      return l === null
        ? null
        : { parent: Zi ? Nt._currentValue : Nt._currentValue2, pool: l };
    }
    function ii(l, o) {
      if (Ln(l, o)) return !0;
      if (
        typeof l !== "object" ||
        l === null ||
        typeof o !== "object" ||
        o === null
      )
        return !1;
      var u = Object.keys(l),
        d = Object.keys(o);
      if (u.length !== d.length) return !1;
      for (d = 0; d < u.length; d++) {
        var v = u[d];
        if (!P0.call(o, v) || !Ln(l[v], o[v])) return !1;
      }
      return !0;
    }
    function gi(l) {
      return ((l = l.status), l === "fulfilled" || l === "rejected");
    }
    function gn(l, o, u) {
      switch (
        ((u = l[u]),
        u === void 0 ? l.push(o) : u !== o && (o.then(st, st), (o = u)),
        o.status)
      ) {
        case "fulfilled":
          return o.value;
        case "rejected":
          throw ((l = o.reason), _n(l), l);
        default:
          if (typeof o.status === "string") o.then(st, st);
          else {
            if (((l = ft), l !== null && 100 < l.shellSuspendCounter))
              throw Error(f(482));
            ((l = o),
              (l.status = "pending"),
              l.then(
                function (d) {
                  if (o.status === "pending") {
                    var v = o;
                    ((v.status = "fulfilled"), (v.value = d));
                  }
                },
                function (d) {
                  if (o.status === "pending") {
                    var v = o;
                    ((v.status = "rejected"), (v.reason = d));
                  }
                },
              ));
          }
          switch (o.status) {
            case "fulfilled":
              return o.value;
            case "rejected":
              throw ((l = o.reason), _n(l), l);
          }
          throw ((pr = o), so);
      }
    }
    function Ht(l) {
      try {
        var o = l._init;
        return o(l._payload);
      } catch (u) {
        if (u !== null && typeof u === "object" && typeof u.then === "function")
          throw ((pr = u), so);
        throw u;
      }
    }
    function bn() {
      if (pr === null) throw Error(f(459));
      var l = pr;
      return ((pr = null), l);
    }
    function _n(l) {
      if (l === so || l === _s) throw Error(f(483));
    }
    function li(l) {
      var o = va;
      return ((va += 1), uo === null && (uo = []), gn(uo, l, o));
    }
    function qt(l, o) {
      ((o = o.props.ref), (l.ref = o !== void 0 ? o : null));
    }
    function bi(l, o) {
      if (o.$$typeof === tb) throw Error(f(525));
      throw (
        (l = Object.prototype.toString.call(o)),
        Error(
          f(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : l,
          ),
        )
      );
    }
    function Si(l) {
      function o(I, q) {
        if (l) {
          var ee = I.deletions;
          ee === null ? ((I.deletions = [q]), (I.flags |= 16)) : ee.push(q);
        }
      }
      function u(I, q) {
        if (!l) return null;
        for (; q !== null;) (o(I, q), (q = q.sibling));
        return null;
      }
      function d(I) {
        for (var q = new Map(); I !== null;)
          (I.key !== null ? q.set(I.key, I) : q.set(I.index, I),
            (I = I.sibling));
        return q;
      }
      function v(I, q) {
        return ((I = Qi(I, q)), (I.index = 0), (I.sibling = null), I);
      }
      function g(I, q, ee) {
        if (((I.index = ee), !l)) return ((I.flags |= 1048576), q);
        if (((ee = I.alternate), ee !== null))
          return ((ee = ee.index), ee < q ? ((I.flags |= 67108866), q) : ee);
        return ((I.flags |= 67108866), q);
      }
      function M(I) {
        return (l && I.alternate === null && (I.flags |= 67108866), I);
      }
      function K(I, q, ee, ye) {
        if (q === null || q.tag !== 6)
          return ((q = oc(ee, I.mode, ye)), (q.return = I), q);
        return ((q = v(q, ee)), (q.return = I), q);
      }
      function ne(I, q, ee, ye) {
        var we = ee.type;
        if (we === Ir) return be(I, q, ee.props.children, ye, ee.key);
        if (
          q !== null &&
          (q.elementType === we ||
            (typeof we === "object" &&
              we !== null &&
              we.$$typeof === Rl &&
              Ht(we) === q.type))
        )
          return ((q = v(q, ee.props)), qt(q, ee), (q.return = I), q);
        return (
          (q = ys(ee.type, ee.key, ee.props, null, I.mode, ye)),
          qt(q, ee),
          (q.return = I),
          q
        );
      }
      function ae(I, q, ee, ye) {
        if (
          q === null ||
          q.tag !== 4 ||
          q.stateNode.containerInfo !== ee.containerInfo ||
          q.stateNode.implementation !== ee.implementation
        )
          return ((q = ac(ee, I.mode, ye)), (q.return = I), q);
        return ((q = v(q, ee.children || [])), (q.return = I), q);
      }
      function be(I, q, ee, ye, we) {
        if (q === null || q.tag !== 7)
          return ((q = ur(ee, I.mode, ye, we)), (q.return = I), q);
        return ((q = v(q, ee)), (q.return = I), q);
      }
      function me(I, q, ee) {
        if (
          (typeof q === "string" && q !== "") ||
          typeof q === "number" ||
          typeof q === "bigint"
        )
          return ((q = oc("" + q, I.mode, ee)), (q.return = I), q);
        if (typeof q === "object" && q !== null) {
          switch (q.$$typeof) {
            case vs:
              return (
                (ee = ys(q.type, q.key, q.props, null, I.mode, ee)),
                qt(ee, q),
                (ee.return = I),
                ee
              );
            case Zr:
              return ((q = ac(q, I.mode, ee)), (q.return = I), q);
            case Rl:
              return ((q = Ht(q)), me(I, q, ee));
          }
          if (gs(q) || x(q))
            return ((q = ur(q, I.mode, ee, null)), (q.return = I), q);
          if (typeof q.then === "function") return me(I, li(q), ee);
          if (q.$$typeof === Ml) return me(I, _e(I, q), ee);
          bi(I, q);
        }
        return null;
      }
      function xe(I, q, ee, ye) {
        var we = q !== null ? q.key : null;
        if (
          (typeof ee === "string" && ee !== "") ||
          typeof ee === "number" ||
          typeof ee === "bigint"
        )
          return we !== null ? null : K(I, q, "" + ee, ye);
        if (typeof ee === "object" && ee !== null) {
          switch (ee.$$typeof) {
            case vs:
              return ee.key === we ? ne(I, q, ee, ye) : null;
            case Zr:
              return ee.key === we ? ae(I, q, ee, ye) : null;
            case Rl:
              return ((ee = Ht(ee)), xe(I, q, ee, ye));
          }
          if (gs(ee) || x(ee))
            return we !== null ? null : be(I, q, ee, ye, null);
          if (typeof ee.then === "function") return xe(I, q, li(ee), ye);
          if (ee.$$typeof === Ml) return xe(I, q, _e(I, ee), ye);
          bi(I, ee);
        }
        return null;
      }
      function ze(I, q, ee, ye, we) {
        if (
          (typeof ye === "string" && ye !== "") ||
          typeof ye === "number" ||
          typeof ye === "bigint"
        )
          return ((I = I.get(ee) || null), K(q, I, "" + ye, we));
        if (typeof ye === "object" && ye !== null) {
          switch (ye.$$typeof) {
            case vs:
              return (
                (I = I.get(ye.key === null ? ee : ye.key) || null),
                ne(q, I, ye, we)
              );
            case Zr:
              return (
                (I = I.get(ye.key === null ? ee : ye.key) || null),
                ae(q, I, ye, we)
              );
            case Rl:
              return ((ye = Ht(ye)), ze(I, q, ee, ye, we));
          }
          if (gs(ye) || x(ye))
            return ((I = I.get(ee) || null), be(q, I, ye, we, null));
          if (typeof ye.then === "function") return ze(I, q, ee, li(ye), we);
          if (ye.$$typeof === Ml) return ze(I, q, ee, _e(q, ye), we);
          bi(q, ye);
        }
        return null;
      }
      function $t(I, q, ee, ye) {
        for (
          var we = null, At = null, Be = q, Je = (q = 0), Wt = null;
          Be !== null && Je < ee.length;
          Je++
        ) {
          Be.index > Je ? ((Wt = Be), (Be = null)) : (Wt = Be.sibling);
          var $e = xe(I, Be, ee[Je], ye);
          if ($e === null) {
            Be === null && (Be = Wt);
            break;
          }
          (l && Be && $e.alternate === null && o(I, Be),
            (q = g($e, q, Je)),
            At === null ? (we = $e) : (At.sibling = $e),
            (At = $e),
            (Be = Wt));
        }
        if (Je === ee.length) return (u(I, Be), Xe && Ee(I, Je), we);
        if (Be === null) {
          for (; Je < ee.length; Je++)
            ((Be = me(I, ee[Je], ye)),
              Be !== null &&
                ((q = g(Be, q, Je)),
                At === null ? (we = Be) : (At.sibling = Be),
                (At = Be)));
          return (Xe && Ee(I, Je), we);
        }
        for (Be = d(Be); Je < ee.length; Je++)
          ((Wt = ze(Be, I, Je, ee[Je], ye)),
            Wt !== null &&
              (l &&
                Wt.alternate !== null &&
                Be.delete(Wt.key === null ? Je : Wt.key),
              (q = g(Wt, q, Je)),
              At === null ? (we = Wt) : (At.sibling = Wt),
              (At = Wt)));
        return (
          l &&
            Be.forEach(function (Ll) {
              return o(I, Ll);
            }),
          Xe && Ee(I, Je),
          we
        );
      }
      function Ra(I, q, ee, ye) {
        if (ee == null) throw Error(f(151));
        for (
          var we = null,
            At = null,
            Be = q,
            Je = (q = 0),
            Wt = null,
            $e = ee.next();
          Be !== null && !$e.done;
          Je++, $e = ee.next()
        ) {
          Be.index > Je ? ((Wt = Be), (Be = null)) : (Wt = Be.sibling);
          var Ll = xe(I, Be, $e.value, ye);
          if (Ll === null) {
            Be === null && (Be = Wt);
            break;
          }
          (l && Be && Ll.alternate === null && o(I, Be),
            (q = g(Ll, q, Je)),
            At === null ? (we = Ll) : (At.sibling = Ll),
            (At = Ll),
            (Be = Wt));
        }
        if ($e.done) return (u(I, Be), Xe && Ee(I, Je), we);
        if (Be === null) {
          for (; !$e.done; Je++, $e = ee.next())
            (($e = me(I, $e.value, ye)),
              $e !== null &&
                ((q = g($e, q, Je)),
                At === null ? (we = $e) : (At.sibling = $e),
                (At = $e)));
          return (Xe && Ee(I, Je), we);
        }
        for (Be = d(Be); !$e.done; Je++, $e = ee.next())
          (($e = ze(Be, I, Je, $e.value, ye)),
            $e !== null &&
              (l &&
                $e.alternate !== null &&
                Be.delete($e.key === null ? Je : $e.key),
              (q = g($e, q, Je)),
              At === null ? (we = $e) : (At.sibling = $e),
              (At = $e)));
        return (
          l &&
            Be.forEach(function (V0) {
              return o(I, V0);
            }),
          Xe && Ee(I, Je),
          we
        );
      }
      function br(I, q, ee, ye) {
        if (
          (typeof ee === "object" &&
            ee !== null &&
            ee.type === Ir &&
            ee.key === null &&
            (ee = ee.props.children),
          typeof ee === "object" && ee !== null)
        ) {
          switch (ee.$$typeof) {
            case vs:
              e: {
                for (var we = ee.key; q !== null;) {
                  if (q.key === we) {
                    if (((we = ee.type), we === Ir)) {
                      if (q.tag === 7) {
                        (u(I, q.sibling),
                          (ye = v(q, ee.props.children)),
                          (ye.return = I),
                          (I = ye));
                        break e;
                      }
                    } else if (
                      q.elementType === we ||
                      (typeof we === "object" &&
                        we !== null &&
                        we.$$typeof === Rl &&
                        Ht(we) === q.type)
                    ) {
                      (u(I, q.sibling),
                        (ye = v(q, ee.props)),
                        qt(ye, ee),
                        (ye.return = I),
                        (I = ye));
                      break e;
                    }
                    u(I, q);
                    break;
                  } else o(I, q);
                  q = q.sibling;
                }
                ee.type === Ir
                  ? ((ye = ur(ee.props.children, I.mode, ye, ee.key)),
                    (ye.return = I),
                    (I = ye))
                  : ((ye = ys(ee.type, ee.key, ee.props, null, I.mode, ye)),
                    qt(ye, ee),
                    (ye.return = I),
                    (I = ye));
              }
              return M(I);
            case Zr:
              e: {
                for (we = ee.key; q !== null;) {
                  if (q.key === we)
                    if (
                      q.tag === 4 &&
                      q.stateNode.containerInfo === ee.containerInfo &&
                      q.stateNode.implementation === ee.implementation
                    ) {
                      (u(I, q.sibling),
                        (ye = v(q, ee.children || [])),
                        (ye.return = I),
                        (I = ye));
                      break e;
                    } else {
                      u(I, q);
                      break;
                    }
                  else o(I, q);
                  q = q.sibling;
                }
                ((ye = ac(ee, I.mode, ye)), (ye.return = I), (I = ye));
              }
              return M(I);
            case Rl:
              return ((ee = Ht(ee)), br(I, q, ee, ye));
          }
          if (gs(ee)) return $t(I, q, ee, ye);
          if (x(ee)) {
            if (((we = x(ee)), typeof we !== "function")) throw Error(f(150));
            return ((ee = we.call(ee)), Ra(I, q, ee, ye));
          }
          if (typeof ee.then === "function") return br(I, q, li(ee), ye);
          if (ee.$$typeof === Ml) return br(I, q, _e(I, ee), ye);
          bi(I, ee);
        }
        return (typeof ee === "string" && ee !== "") ||
          typeof ee === "number" ||
          typeof ee === "bigint"
          ? ((ee = "" + ee),
            q !== null && q.tag === 6
              ? (u(I, q.sibling), (ye = v(q, ee)), (ye.return = I), (I = ye))
              : (u(I, q), (ye = oc(ee, I.mode, ye)), (ye.return = I), (I = ye)),
            M(I))
          : u(I, q);
      }
      return function (I, q, ee, ye) {
        try {
          va = 0;
          var we = br(I, q, ee, ye);
          return ((uo = null), we);
        } catch (Be) {
          if (Be === so || Be === _s) throw Be;
          var At = s(29, Be, null, I.mode);
          return ((At.lanes = ye), (At.return = I), At);
        } finally {
        }
      };
    }
    function Yn() {
      for (var l = co, o = (Oc = co = 0); o < l;) {
        var u = Wn[o];
        Wn[o++] = null;
        var d = Wn[o];
        Wn[o++] = null;
        var v = Wn[o];
        Wn[o++] = null;
        var g = Wn[o];
        if (((Wn[o++] = null), d !== null && v !== null)) {
          var M = d.pending;
          (M === null ? (v.next = v) : ((v.next = M.next), (M.next = v)),
            (d.pending = v));
        }
        g !== 0 && Vl(u, v, g);
      }
    }
    function Fi(l, o, u, d) {
      ((Wn[co++] = l),
        (Wn[co++] = o),
        (Wn[co++] = u),
        (Wn[co++] = d),
        (Oc |= d),
        (l.lanes |= d),
        (l = l.alternate),
        l !== null && (l.lanes |= d));
    }
    function Wl(l, o, u, d) {
      return (Fi(l, o, u, d), ri(l));
    }
    function xi(l, o) {
      return (Fi(l, null, null, o), ri(l));
    }
    function Vl(l, o, u) {
      l.lanes |= u;
      var d = l.alternate;
      d !== null && (d.lanes |= u);
      for (var v = !1, g = l.return; g !== null;)
        ((g.childLanes |= u),
          (d = g.alternate),
          d !== null && (d.childLanes |= u),
          g.tag === 22 &&
            ((l = g.stateNode), l === null || l._visibility & 1 || (v = !0)),
          (l = g),
          (g = g.return));
      return l.tag === 3
        ? ((g = l.stateNode),
          v &&
            o !== null &&
            ((v = 31 - Hn(u)),
            (l = g.hiddenUpdates),
            (d = l[v]),
            d === null ? (l[v] = [o]) : d.push(o),
            (o.lane = u | 536870912)),
          g)
        : null;
    }
    function ri(l) {
      if (50 < Ma) throw ((Ma = 0), (Gc = null), Error(f(185)));
      for (var o = l.return; o !== null;) ((l = o), (o = l.return));
      return l.tag === 3 ? l.stateNode : null;
    }
    function ql(l) {
      l.updateQueue = {
        baseState: l.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function wr(l, o) {
      ((l = l.updateQueue),
        o.updateQueue === l &&
          (o.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null,
          }));
    }
    function Kn(l) {
      return { lane: l, tag: 0, payload: null, callback: null, next: null };
    }
    function Ci(l, o, u) {
      var d = l.updateQueue;
      if (d === null) return null;
      if (((d = d.shared), (je & 2) !== 0)) {
        var v = d.pending;
        return (
          v === null ? (o.next = o) : ((o.next = v.next), (v.next = o)),
          (d.pending = o),
          (o = ri(l)),
          Vl(l, null, u),
          o
        );
      }
      return (Fi(l, d, o, u), ri(l));
    }
    function sl(l, o, u) {
      if (
        ((o = o.updateQueue),
        o !== null && ((o = o.shared), (u & 4194048) !== 0))
      ) {
        var d = o.lanes;
        ((d &= l.pendingLanes), (u |= d), (o.lanes = u), re(l, u));
      }
    }
    function ul(l, o) {
      var u = l.updateQueue,
        d = l.alternate;
      if (d !== null && ((d = d.updateQueue), u === d)) {
        var v = null,
          g = null;
        if (((u = u.firstBaseUpdate), u !== null)) {
          do {
            var M = {
              lane: u.lane,
              tag: u.tag,
              payload: u.payload,
              callback: null,
              next: null,
            };
            (g === null ? (v = g = M) : (g = g.next = M), (u = u.next));
          } while (u !== null);
          g === null ? (v = g = o) : (g = g.next = o);
        } else v = g = o;
        ((u = {
          baseState: d.baseState,
          firstBaseUpdate: v,
          lastBaseUpdate: g,
          shared: d.shared,
          callbacks: d.callbacks,
        }),
          (l.updateQueue = u));
        return;
      }
      ((l = u.lastBaseUpdate),
        l === null ? (u.firstBaseUpdate = o) : (l.next = o),
        (u.lastBaseUpdate = o));
    }
    function Pi() {
      if (wc) {
        var l = ao;
        if (l !== null) throw l;
      }
    }
    function Xl(l, o, u, d) {
      wc = !1;
      var v = l.updateQueue;
      _l = !1;
      var { firstBaseUpdate: g, lastBaseUpdate: M } = v,
        K = v.shared.pending;
      if (K !== null) {
        v.shared.pending = null;
        var ne = K,
          ae = ne.next;
        ((ne.next = null), M === null ? (g = ae) : (M.next = ae), (M = ne));
        var be = l.alternate;
        be !== null &&
          ((be = be.updateQueue),
          (K = be.lastBaseUpdate),
          K !== M &&
            (K === null ? (be.firstBaseUpdate = ae) : (K.next = ae),
            (be.lastBaseUpdate = ne)));
      }
      if (g !== null) {
        var me = v.baseState;
        ((M = 0), (be = ae = ne = null), (K = g));
        do {
          var xe = K.lane & -536870913,
            ze = xe !== K.lane;
          if (ze ? (qe & xe) === xe : (d & xe) === xe) {
            (xe !== 0 && xe === oo && (wc = !0),
              be !== null &&
                (be = be.next =
                  {
                    lane: 0,
                    tag: K.tag,
                    payload: K.payload,
                    callback: null,
                    next: null,
                  }));
            e: {
              var $t = l,
                Ra = K;
              xe = o;
              var br = u;
              switch (Ra.tag) {
                case 1:
                  if ((($t = Ra.payload), typeof $t === "function")) {
                    me = $t.call(br, me, xe);
                    break e;
                  }
                  me = $t;
                  break e;
                case 3:
                  $t.flags = ($t.flags & -65537) | 128;
                case 0:
                  if (
                    (($t = Ra.payload),
                    (xe = typeof $t === "function" ? $t.call(br, me, xe) : $t),
                    xe === null || xe === void 0)
                  )
                    break e;
                  me = uc({}, me, xe);
                  break e;
                case 2:
                  _l = !0;
              }
            }
            ((xe = K.callback),
              xe !== null &&
                ((l.flags |= 64),
                ze && (l.flags |= 8192),
                (ze = v.callbacks),
                ze === null ? (v.callbacks = [xe]) : ze.push(xe)));
          } else
            ((ze = {
              lane: xe,
              tag: K.tag,
              payload: K.payload,
              callback: K.callback,
              next: null,
            }),
              be === null ? ((ae = be = ze), (ne = me)) : (be = be.next = ze),
              (M |= xe));
          if (((K = K.next), K === null))
            if (((K = v.shared.pending), K === null)) break;
            else
              ((ze = K),
                (K = ze.next),
                (ze.next = null),
                (v.lastBaseUpdate = ze),
                (v.shared.pending = null));
        } while (1);
        (be === null && (ne = me),
          (v.baseState = ne),
          (v.firstBaseUpdate = ae),
          (v.lastBaseUpdate = be),
          g === null && (v.shared.lanes = 0),
          (wl |= M),
          (l.lanes = M),
          (l.memoizedState = me));
      }
    }
    function Yo(l, o) {
      if (typeof l !== "function") throw Error(f(191, l));
      l.call(o);
    }
    function Ql(l, o) {
      var u = l.callbacks;
      if (u !== null)
        for (l.callbacks = null, l = 0; l < u.length; l++) Yo(u[l], o);
    }
    function Hr(l, o) {
      ((l = tl), T(Os, l), T(fo, o), (tl = l | o.baseLanes));
    }
    function Zl() {
      (T(Os, tl), T(fo, fo.current));
    }
    function Re() {
      ((tl = Os.current), N(fo), N(Os));
    }
    function Sn(l) {
      var o = l.alternate;
      (T(Bt, Bt.current & 1),
        T(zn, l),
        Vn === null &&
          (o === null || fo.current !== null
            ? (Vn = l)
            : o.memoizedState !== null && (Vn = l)));
    }
    function Ko(l) {
      (T(Bt, Bt.current), T(zn, l), Vn === null && (Vn = l));
    }
    function Yi(l) {
      l.tag === 22
        ? (T(Bt, Bt.current), T(zn, l), Vn === null && (Vn = l))
        : Dn(l);
    }
    function Dn() {
      (T(Bt, Bt.current), T(zn, zn.current));
    }
    function on(l) {
      (N(zn), Vn === l && (Vn = null), N(Bt));
    }
    function cl(l) {
      for (var o = l; o !== null;) {
        if (o.tag === 13) {
          var u = o.memoizedState;
          if (u !== null && ((u = u.dehydrated), u === null || gc(u) || bc(u)))
            return o;
        } else if (
          o.tag === 19 &&
          (o.memoizedProps.revealOrder === "forwards" ||
            o.memoizedProps.revealOrder === "backwards" ||
            o.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
            o.memoizedProps.revealOrder === "together")
        ) {
          if ((o.flags & 128) !== 0) return o;
        } else if (o.child !== null) {
          ((o.child.return = o), (o = o.child));
          continue;
        }
        if (o === l) break;
        for (; o.sibling === null;) {
          if (o.return === null || o.return === l) return null;
          o = o.return;
        }
        ((o.sibling.return = o.return), (o = o.sibling));
      }
      return null;
    }
    function ct() {
      throw Error(f(321));
    }
    function fl(l, o) {
      if (o === null) return !1;
      for (var u = 0; u < o.length && u < l.length; u++)
        if (!Ln(l[u], o[u])) return !1;
      return !0;
    }
    function Br(l, o, u, d, v, g) {
      return (
        ($i = g),
        (Ye = o),
        (o.memoizedState = null),
        (o.updateQueue = null),
        (o.lanes = 0),
        (Oe.H = l === null || l.memoizedState === null ? Im : Hc),
        (vr = !1),
        (g = u(d, v)),
        (vr = !1),
        ho && (g = ko(o, u, d, v)),
        Il(l),
        g
      );
    }
    function Il(l) {
      Oe.H = Sa;
      var o = at !== null && at.next !== null;
      if (
        (($i = 0), (zt = at = Ye = null), (Hs = !1), (ba = 0), (mo = null), o)
      )
        throw Error(f(300));
      l === null ||
        Ut ||
        ((l = l.dependencies), l !== null && Me(l) && (Ut = !0));
    }
    function ko(l, o, u, d) {
      Ye = l;
      var v = 0;
      do {
        if ((ho && (mo = null), (ba = 0), (ho = !1), 25 <= v))
          throw Error(f(301));
        if (((v += 1), (zt = at = null), l.updateQueue != null)) {
          var g = l.updateQueue;
          ((g.lastEffect = null),
            (g.events = null),
            (g.stores = null),
            g.memoCache != null && (g.memoCache.index = 0));
        }
        ((Oe.H = Jm), (g = o(u, d)));
      } while (ho);
      return g;
    }
    function Go() {
      var l = Oe.H,
        o = l.useState()[0];
      return (
        (o = typeof o.then === "function" ? ki(o) : o),
        (l = l.useState()[0]),
        (at !== null ? at.memoizedState : null) !== l && (Ye.flags |= 1024),
        o
      );
    }
    function Lr() {
      var l = Bs !== 0;
      return ((Bs = 0), l);
    }
    function Ki(l, o, u) {
      ((o.updateQueue = l.updateQueue), (o.flags &= -2053), (l.lanes &= ~u));
    }
    function Jl(l) {
      if (Hs) {
        for (l = l.memoizedState; l !== null;) {
          var o = l.queue;
          (o !== null && (o.pending = null), (l = l.next));
        }
        Hs = !1;
      }
      (($i = 0), (zt = at = Ye = null), (ho = !1), (ba = Bs = 0), (mo = null));
    }
    function _t() {
      var l = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        zt === null ? (Ye.memoizedState = zt = l) : (zt = zt.next = l),
        zt
      );
    }
    function vt() {
      if (at === null) {
        var l = Ye.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = at.next;
      var o = zt === null ? Ye.memoizedState : zt.next;
      if (o !== null) ((zt = o), (at = l));
      else {
        if (l === null) {
          if (Ye.alternate === null) throw Error(f(467));
          throw Error(f(310));
        }
        ((at = l),
          (l = {
            memoizedState: at.memoizedState,
            baseState: at.baseState,
            baseQueue: at.baseQueue,
            queue: at.queue,
            next: null,
          }),
          zt === null ? (Ye.memoizedState = zt = l) : (zt = zt.next = l));
      }
      return zt;
    }
    function hl() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ki(l) {
      var o = ba;
      return (
        (ba += 1),
        mo === null && (mo = []),
        (l = gn(mo, l, o)),
        (o = Ye),
        (zt === null ? o.memoizedState : zt.next) === null &&
          ((o = o.alternate),
          (Oe.H = o === null || o.memoizedState === null ? Im : Hc)),
        l
      );
    }
    function yn(l) {
      if (l !== null && typeof l === "object") {
        if (typeof l.then === "function") return ki(l);
        if (l.$$typeof === Ml) return Te(l);
      }
      throw Error(f(438, String(l)));
    }
    function jo(l) {
      var o = null,
        u = Ye.updateQueue;
      if ((u !== null && (o = u.memoCache), o == null)) {
        var d = Ye.alternate;
        d !== null &&
          ((d = d.updateQueue),
          d !== null &&
            ((d = d.memoCache),
            d != null &&
              (o = {
                data: d.data.map(function (v) {
                  return v.slice();
                }),
                index: 0,
              })));
      }
      if (
        (o == null && (o = { data: [], index: 0 }),
        u === null && ((u = hl()), (Ye.updateQueue = u)),
        (u.memoCache = o),
        (u = o.data[o.index]),
        u === void 0)
      )
        for (u = o.data[o.index] = Array(l), d = 0; d < l; d++) u[d] = nb;
      return (o.index++, u);
    }
    function En(l, o) {
      return typeof o === "function" ? o(l) : o;
    }
    function Mi(l) {
      var o = vt();
      return zr(o, at, l);
    }
    function zr(l, o, u) {
      var d = l.queue;
      if (d === null) throw Error(f(311));
      d.lastRenderedReducer = u;
      var v = l.baseQueue,
        g = d.pending;
      if (g !== null) {
        if (v !== null) {
          var M = v.next;
          ((v.next = g.next), (g.next = M));
        }
        ((o.baseQueue = v = g), (d.pending = null));
      }
      if (((g = l.baseState), v === null)) l.memoizedState = g;
      else {
        o = v.next;
        var K = (M = null),
          ne = null,
          ae = o,
          be = !1;
        do {
          var me = ae.lane & -536870913;
          if (me !== ae.lane ? (qe & me) === me : ($i & me) === me) {
            var xe = ae.revertLane;
            if (xe === 0)
              (ne !== null &&
                (ne = ne.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: ae.action,
                    hasEagerState: ae.hasEagerState,
                    eagerState: ae.eagerState,
                    next: null,
                  }),
                me === oo && (be = !0));
            else if (($i & xe) === xe) {
              ((ae = ae.next), xe === oo && (be = !0));
              continue;
            } else
              ((me = {
                lane: 0,
                revertLane: ae.revertLane,
                gesture: null,
                action: ae.action,
                hasEagerState: ae.hasEagerState,
                eagerState: ae.eagerState,
                next: null,
              }),
                ne === null ? ((K = ne = me), (M = g)) : (ne = ne.next = me),
                (Ye.lanes |= xe),
                (wl |= xe));
            ((me = ae.action),
              vr && u(g, me),
              (g = ae.hasEagerState ? ae.eagerState : u(g, me)));
          } else
            ((xe = {
              lane: me,
              revertLane: ae.revertLane,
              gesture: ae.gesture,
              action: ae.action,
              hasEagerState: ae.hasEagerState,
              eagerState: ae.eagerState,
              next: null,
            }),
              ne === null ? ((K = ne = xe), (M = g)) : (ne = ne.next = xe),
              (Ye.lanes |= me),
              (wl |= me));
          ae = ae.next;
        } while (ae !== null && ae !== o);
        if (
          (ne === null ? (M = g) : (ne.next = K),
          !Ln(g, l.memoizedState) && ((Ut = !0), be && ((u = ao), u !== null)))
        )
          throw u;
        ((l.memoizedState = g),
          (l.baseState = M),
          (l.baseQueue = ne),
          (d.lastRenderedState = g));
      }
      return (v === null && (d.lanes = 0), [l.memoizedState, d.dispatch]);
    }
    function ml(l) {
      var o = vt(),
        u = o.queue;
      if (u === null) throw Error(f(311));
      u.lastRenderedReducer = l;
      var { dispatch: d, pending: v } = u,
        g = o.memoizedState;
      if (v !== null) {
        u.pending = null;
        var M = (v = v.next);
        do ((g = l(g, M.action)), (M = M.next));
        while (M !== v);
        (Ln(g, o.memoizedState) || (Ut = !0),
          (o.memoizedState = g),
          o.baseQueue === null && (o.baseState = g),
          (u.lastRenderedState = g));
      }
      return [g, d];
    }
    function $l(l, o, u) {
      var d = Ye,
        v = vt(),
        g = Xe;
      if (g) {
        if (u === void 0) throw Error(f(407));
        u = u();
      } else u = o();
      var M = !Ln((at || v).memoizedState, u);
      if (
        (M && ((v.memoizedState = u), (Ut = !0)),
        (v = v.queue),
        Gr(qo.bind(null, d, v, l), [l]),
        v.getSnapshot !== o || M || (zt !== null && zt.memoizedState.tag & 1))
      ) {
        if (
          ((d.flags |= 2048),
          Ri(9, { destroy: void 0 }, Vo.bind(null, d, v, u, o), null),
          ft === null)
        )
          throw Error(f(349));
        g || ($i & 127) !== 0 || Ur(d, o, u);
      }
      return u;
    }
    function Ur(l, o, u) {
      ((l.flags |= 16384),
        (l = { getSnapshot: o, value: u }),
        (o = Ye.updateQueue),
        o === null
          ? ((o = hl()), (Ye.updateQueue = o), (o.stores = [l]))
          : ((u = o.stores), u === null ? (o.stores = [l]) : u.push(l)));
    }
    function Vo(l, o, u, d) {
      ((o.value = u), (o.getSnapshot = d), Fr(o) && pl(l));
    }
    function qo(l, o, u) {
      return u(function () {
        Fr(o) && pl(l);
      });
    }
    function Fr(l) {
      var o = l.getSnapshot;
      l = l.value;
      try {
        var u = o();
        return !Ln(l, u);
      } catch (d) {
        return !0;
      }
    }
    function pl(l) {
      var o = xi(l, 2);
      o !== null && Mn(o, l, 2);
    }
    function Pr(l) {
      var o = _t();
      if (typeof l === "function") {
        var u = l;
        if (((l = u()), vr)) {
          oe(!0);
          try {
            u();
          } finally {
            oe(!1);
          }
        }
      }
      return (
        (o.memoizedState = o.baseState = l),
        (o.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: En,
          lastRenderedState: l,
        }),
        o
      );
    }
    function er(l, o, u, d) {
      return ((l.baseState = u), zr(l, at, typeof d === "function" ? d : En));
    }
    function yl(l, o, u, d, v) {
      if (is(l)) throw Error(f(485));
      if (((l = o.action), l !== null)) {
        var g = {
          payload: v,
          action: l,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (M) {
            g.listeners.push(M);
          },
        };
        (Oe.T !== null ? u(!0) : (g.isTransition = !1),
          d(g),
          (u = o.pending),
          u === null
            ? ((g.next = o.pending = g), Gi(o, g))
            : ((g.next = u.next), (o.pending = u.next = g)));
      }
    }
    function Gi(l, o) {
      var { action: u, payload: d } = o,
        v = l.state;
      if (o.isTransition) {
        var g = Oe.T,
          M = {};
        Oe.T = M;
        try {
          var K = u(v, d),
            ne = Oe.S;
          (ne !== null && ne(M, K), vl(l, o, K));
        } catch (ae) {
          ji(l, o, ae);
        } finally {
          (g !== null && M.types !== null && (g.types = M.types), (Oe.T = g));
        }
      } else
        try {
          ((g = u(v, d)), vl(l, o, g));
        } catch (ae) {
          ji(l, o, ae);
        }
    }
    function vl(l, o, u) {
      u !== null && typeof u === "object" && typeof u.then === "function"
        ? u.then(
            function (d) {
              Xo(l, o, d);
            },
            function (d) {
              return ji(l, o, d);
            },
          )
        : Xo(l, o, u);
    }
    function Xo(l, o, u) {
      ((o.status = "fulfilled"),
        (o.value = u),
        Yr(o),
        (l.state = u),
        (o = l.pending),
        o !== null &&
          ((u = o.next),
          u === o
            ? (l.pending = null)
            : ((u = u.next), (o.next = u), Gi(l, u))));
    }
    function ji(l, o, u) {
      var d = l.pending;
      if (((l.pending = null), d !== null)) {
        d = d.next;
        do ((o.status = "rejected"), (o.reason = u), Yr(o), (o = o.next));
        while (o !== d);
      }
      l.action = null;
    }
    function Yr(l) {
      l = l.listeners;
      for (var o = 0; o < l.length; o++) (0, l[o])();
    }
    function Kr(l, o) {
      return o;
    }
    function Qo(l, o) {
      if (Xe) {
        var u = ft.formState;
        if (u !== null) {
          e: {
            var d = Ye;
            if (Xe) {
              if (Tt) {
                var v = Qb(Tt, jn);
                if (v) {
                  ((Tt = Om(v)), (d = Zb(v)));
                  break e;
                }
              }
              yt(d);
            }
            d = !1;
          }
          d && (o = u[0]);
        }
      }
      ((u = _t()),
        (u.memoizedState = u.baseState = o),
        (d = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Kr,
          lastRenderedState: o,
        }),
        (u.queue = d),
        (u = Xt.bind(null, Ye, d)),
        (d.dispatch = u),
        (d = Pr(!1)));
      var g = Vr.bind(null, Ye, !1, d.queue);
      return (
        (d = _t()),
        (v = { state: o, dispatch: null, action: l, pending: null }),
        (d.queue = v),
        (u = yl.bind(null, Ye, v, g, u)),
        (v.dispatch = u),
        (d.memoizedState = l),
        [o, u, !1]
      );
    }
    function tr(l) {
      var o = vt();
      return kr(o, at, l);
    }
    function kr(l, o, u) {
      if (
        ((o = zr(l, o, Kr)[0]),
        (l = Mi(En)[0]),
        typeof o === "object" && o !== null && typeof o.then === "function")
      )
        try {
          var d = ki(o);
        } catch (M) {
          if (M === so) throw _s;
          throw M;
        }
      else d = o;
      o = vt();
      var v = o.queue,
        g = v.dispatch;
      return (
        u !== o.memoizedState &&
          ((Ye.flags |= 2048),
          Ri(9, { destroy: void 0 }, es.bind(null, v, u), null)),
        [d, g, l]
      );
    }
    function es(l, o) {
      l.action = o;
    }
    function xn(l) {
      var o = vt(),
        u = at;
      if (u !== null) return kr(o, u, l);
      (vt(), (o = o.memoizedState), (u = vt()));
      var d = u.queue.dispatch;
      return ((u.memoizedState = l), [o, d, !1]);
    }
    function Ri(l, o, u, d) {
      return (
        (l = { tag: l, create: u, deps: d, inst: o, next: null }),
        (o = Ye.updateQueue),
        o === null && ((o = hl()), (Ye.updateQueue = o)),
        (u = o.lastEffect),
        u === null
          ? (o.lastEffect = l.next = l)
          : ((d = u.next), (u.next = l), (l.next = d), (o.lastEffect = l)),
        l
      );
    }
    function Zo() {
      return vt().memoizedState;
    }
    function nr(l, o, u, d) {
      var v = _t();
      ((Ye.flags |= l),
        (v.memoizedState = Ri(
          1 | o,
          { destroy: void 0 },
          u,
          d === void 0 ? null : d,
        )));
    }
    function gl(l, o, u, d) {
      var v = vt();
      d = d === void 0 ? null : d;
      var g = v.memoizedState.inst;
      at !== null && d !== null && fl(d, at.memoizedState.deps)
        ? (v.memoizedState = Ri(o, g, u, d))
        : ((Ye.flags |= l), (v.memoizedState = Ri(1 | o, g, u, d)));
    }
    function Io(l, o) {
      nr(8390656, 8, l, o);
    }
    function Gr(l, o) {
      gl(2048, 8, l, o);
    }
    function ir(l) {
      Ye.flags |= 4;
      var o = Ye.updateQueue;
      if (o === null) ((o = hl()), (Ye.updateQueue = o), (o.events = [l]));
      else {
        var u = o.events;
        u === null ? (o.events = [l]) : u.push(l);
      }
    }
    function bl(l) {
      var o = vt().memoizedState;
      return (
        ir({ ref: o, nextImpl: l }),
        function () {
          if ((je & 2) !== 0) throw Error(f(440));
          return o.impl.apply(void 0, arguments);
        }
      );
    }
    function oi(l, o) {
      return gl(4, 2, l, o);
    }
    function Jo(l, o) {
      return gl(4, 4, l, o);
    }
    function jr(l, o) {
      if (typeof o === "function") {
        l = l();
        var u = o(l);
        return function () {
          typeof u === "function" ? u() : o(null);
        };
      }
      if (o !== null && o !== void 0)
        return (
          (l = l()),
          (o.current = l),
          function () {
            o.current = null;
          }
        );
    }
    function Wr(l, o, u) {
      ((u = u !== null && u !== void 0 ? u.concat([l]) : null),
        gl(4, 4, jr.bind(null, o, l), u));
    }
    function Wi() {}
    function $o(l, o) {
      var u = vt();
      o = o === void 0 ? null : o;
      var d = u.memoizedState;
      if (o !== null && fl(o, d[1])) return d[0];
      return ((u.memoizedState = [l, o]), l);
    }
    function Sl(l, o) {
      var u = vt();
      o = o === void 0 ? null : o;
      var d = u.memoizedState;
      if (o !== null && fl(o, d[1])) return d[0];
      if (((d = l()), vr)) {
        oe(!0);
        try {
          l();
        } finally {
          oe(!1);
        }
      }
      return ((u.memoizedState = [d, o]), d);
    }
    function lr(l, o, u) {
      if (u === void 0 || (($i & 1073741824) !== 0 && (qe & 261930) === 0))
        return (l.memoizedState = o);
      return ((l.memoizedState = u), (l = Gh()), (Ye.lanes |= l), (wl |= l), u);
    }
    function an(l, o, u, d) {
      if (Ln(u, o)) return u;
      if (fo.current !== null)
        return ((l = lr(l, u, d)), Ln(l, o) || (Ut = !0), l);
      if (($i & 42) === 0 || (($i & 1073741824) !== 0 && (qe & 261930) === 0))
        return ((Ut = !0), (l.memoizedState = u));
      return ((l = Gh()), (Ye.lanes |= l), (wl |= l), o);
    }
    function ts(l, o, u, d, v) {
      var g = Ii();
      Gt(g !== 0 && 8 > g ? g : 8);
      var M = Oe.T,
        K = {};
      ((Oe.T = K), Vr(l, !1, o, u));
      try {
        var ne = v(),
          ae = Oe.S;
        if (
          (ae !== null && ae(K, ne),
          ne !== null &&
            typeof ne === "object" &&
            typeof ne.then === "function")
        ) {
          var be = xt(ne, d);
          Cn(l, o, be, wn(l));
        } else Cn(l, o, d, wn(l));
      } catch (me) {
        Cn(
          l,
          o,
          { then: function () {}, status: "rejected", reason: me },
          wn(),
        );
      } finally {
        (Gt(g),
          M !== null && K.types !== null && (M.types = K.types),
          (Oe.T = M));
      }
    }
    function rr(l) {
      var o = l.memoizedState;
      if (o !== null) return o;
      o = {
        memoizedState: Jr,
        baseState: Jr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: En,
          lastRenderedState: Jr,
        },
        next: null,
      };
      var u = {};
      return (
        (o.next = {
          memoizedState: u,
          baseState: u,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: En,
            lastRenderedState: u,
          },
          next: null,
        }),
        (l.memoizedState = o),
        (l = l.alternate),
        l !== null && (l.memoizedState = o),
        o
      );
    }
    function El() {
      return Te(fr);
    }
    function ea() {
      return vt().memoizedState;
    }
    function ns() {
      return vt().memoizedState;
    }
    function sn(l) {
      for (var o = l.return; o !== null;) {
        switch (o.tag) {
          case 24:
          case 3:
            var u = wn();
            l = Kn(u);
            var d = Ci(o, l, u);
            (d !== null && (Mn(d, o, u), sl(d, o, u)),
              (o = { cache: De() }),
              (l.payload = o));
            return;
        }
        o = o.return;
      }
    }
    function On(l, o, u) {
      var d = wn();
      ((u = {
        lane: d,
        revertLane: 0,
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        is(l)
          ? eh(o, u)
          : ((u = Wl(l, o, u, d)), u !== null && (Mn(u, l, d), th(u, o, d))));
    }
    function Xt(l, o, u) {
      var d = wn();
      Cn(l, o, u, d);
    }
    function Cn(l, o, u, d) {
      var v = {
        lane: d,
        revertLane: 0,
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (is(l)) eh(o, v);
      else {
        var g = l.alternate;
        if (
          l.lanes === 0 &&
          (g === null || g.lanes === 0) &&
          ((g = o.lastRenderedReducer), g !== null)
        )
          try {
            var M = o.lastRenderedState,
              K = g(M, u);
            if (((v.hasEagerState = !0), (v.eagerState = K), Ln(K, M)))
              return (Fi(l, o, v, 0), ft === null && Yn(), !1);
          } catch (ne) {
          } finally {
          }
        if (((u = Wl(l, o, v, d)), u !== null))
          return (Mn(u, l, d), th(u, o, d), !0);
      }
      return !1;
    }
    function Vr(l, o, u, d) {
      if (
        ((d = {
          lane: 2,
          revertLane: Et(),
          gesture: null,
          action: d,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        is(l))
      ) {
        if (o) throw Error(f(479));
      } else ((o = Wl(l, u, d, 2)), o !== null && Mn(o, l, 2));
    }
    function is(l) {
      var o = l.alternate;
      return l === Ye || (o !== null && o === Ye);
    }
    function eh(l, o) {
      ho = Hs = !0;
      var u = l.pending;
      (u === null ? (o.next = o) : ((o.next = u.next), (u.next = o)),
        (l.pending = o));
    }
    function th(l, o, u) {
      if ((u & 4194048) !== 0) {
        var d = o.lanes;
        ((d &= l.pendingLanes), (u |= d), (o.lanes = u), re(l, u));
      }
    }
    function Bu(l, o, u, d) {
      ((o = l.memoizedState),
        (u = u(d, o)),
        (u = u === null || u === void 0 ? o : uc({}, o, u)),
        (l.memoizedState = u),
        l.lanes === 0 && (l.updateQueue.baseState = u));
    }
    function nh(l, o, u, d, v, g, M) {
      return (
        (l = l.stateNode),
        typeof l.shouldComponentUpdate === "function"
          ? l.shouldComponentUpdate(d, g, M)
          : o.prototype && o.prototype.isPureReactComponent
            ? !ii(u, d) || !ii(v, g)
            : !0
      );
    }
    function ih(l, o, u, d) {
      ((l = o.state),
        typeof o.componentWillReceiveProps === "function" &&
          o.componentWillReceiveProps(u, d),
        typeof o.UNSAFE_componentWillReceiveProps === "function" &&
          o.UNSAFE_componentWillReceiveProps(u, d),
        o.state !== l && Bc.enqueueReplaceState(o, o.state, null));
    }
    function or(l, o) {
      var u = o;
      if ("ref" in o) {
        u = {};
        for (var d in o) d !== "ref" && (u[d] = o[d]);
      }
      if ((l = l.defaultProps)) {
        u === o && (u = uc({}, u));
        for (var v in l) u[v] === void 0 && (u[v] = l[v]);
      }
      return u;
    }
    function ls(l, o) {
      try {
        var u = l.onUncaughtError;
        u(o.value, { componentStack: o.stack });
      } catch (d) {
        setTimeout(function () {
          throw d;
        });
      }
    }
    function lh(l, o, u) {
      try {
        var d = l.onCaughtError;
        d(u.value, {
          componentStack: u.stack,
          errorBoundary: o.tag === 1 ? o.stateNode : null,
        });
      } catch (v) {
        setTimeout(function () {
          throw v;
        });
      }
    }
    function Lu(l, o, u) {
      return (
        (u = Kn(u)),
        (u.tag = 3),
        (u.payload = { element: null }),
        (u.callback = function () {
          ls(l, o);
        }),
        u
      );
    }
    function rh(l) {
      return ((l = Kn(l)), (l.tag = 3), l);
    }
    function oh(l, o, u, d) {
      var v = u.type.getDerivedStateFromError;
      if (typeof v === "function") {
        var g = d.value;
        ((l.payload = function () {
          return v(g);
        }),
          (l.callback = function () {
            lh(o, u, d);
          }));
      }
      var M = u.stateNode;
      M !== null &&
        typeof M.componentDidCatch === "function" &&
        (l.callback = function () {
          (lh(o, u, d),
            typeof v !== "function" &&
              (Hl === null ? (Hl = new Set([this])) : Hl.add(this)));
          var K = d.stack;
          this.componentDidCatch(d.value, {
            componentStack: K !== null ? K : "",
          });
        });
    }
    function Ug(l, o, u, d, v) {
      if (
        ((u.flags |= 32768),
        d !== null && typeof d === "object" && typeof d.then === "function")
      ) {
        if (
          ((o = u.alternate),
          o !== null && He(o, u, v, !0),
          (u = zn.current),
          u !== null)
        ) {
          switch (u.tag) {
            case 31:
            case 13:
              return (
                Vn === null
                  ? ms()
                  : u.alternate === null && Dt === 0 && (Dt = 3),
                (u.flags &= -257),
                (u.flags |= 65536),
                (u.lanes = v),
                d === Ds
                  ? (u.flags |= 16384)
                  : ((o = u.updateQueue),
                    o === null ? (u.updateQueue = new Set([d])) : o.add(d),
                    lc(l, d, v)),
                !1
              );
            case 22:
              return (
                (u.flags |= 65536),
                d === Ds
                  ? (u.flags |= 16384)
                  : ((o = u.updateQueue),
                    o === null
                      ? ((o = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([d]),
                        }),
                        (u.updateQueue = o))
                      : ((u = o.retryQueue),
                        u === null ? (o.retryQueue = new Set([d])) : u.add(d)),
                    lc(l, d, v)),
                !1
              );
          }
          throw Error(f(435, u.tag));
        }
        return (lc(l, d, v), ms(), !1);
      }
      if (Xe)
        return (
          (o = zn.current),
          o !== null
            ? ((o.flags & 65536) === 0 && (o.flags |= 256),
              (o.flags |= 65536),
              (o.lanes = v),
              d !== Tc && ((l = Error(f(422), { cause: d })), hn(Se(l, u))))
            : (d !== Tc && ((o = Error(f(423), { cause: d })), hn(Se(o, u))),
              (l = l.current.alternate),
              (l.flags |= 65536),
              (v &= -v),
              (l.lanes |= v),
              (d = Se(d, u)),
              (v = Lu(l.stateNode, d, v)),
              ul(l, v),
              Dt !== 4 && (Dt = 2)),
          !1
        );
      var g = Error(f(520), { cause: d });
      if (
        ((g = Se(g, u)),
        xa === null ? (xa = [g]) : xa.push(g),
        Dt !== 4 && (Dt = 2),
        o === null)
      )
        return !0;
      ((d = Se(d, u)), (u = o));
      do {
        switch (u.tag) {
          case 3:
            return (
              (u.flags |= 65536),
              (l = v & -v),
              (u.lanes |= l),
              (l = Lu(u.stateNode, d, l)),
              ul(u, l),
              !1
            );
          case 1:
            if (
              ((o = u.type),
              (g = u.stateNode),
              (u.flags & 128) === 0 &&
                (typeof o.getDerivedStateFromError === "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch === "function" &&
                    (Hl === null || !Hl.has(g)))))
            )
              return (
                (u.flags |= 65536),
                (v &= -v),
                (u.lanes |= v),
                (v = rh(v)),
                oh(v, l, u, d),
                ul(u, v),
                !1
              );
        }
        u = u.return;
      } while (u !== null);
      return !1;
    }
    function Zt(l, o, u, d) {
      o.child = l === null ? Zm(o, null, u, d) : yr(o, l.child, u, d);
    }
    function ah(l, o, u, d, v) {
      u = u.render;
      var g = o.ref;
      if ("ref" in d) {
        var M = {};
        for (var K in d) K !== "ref" && (M[K] = d[K]);
      } else M = d;
      if ((de(o), (d = Br(l, o, u, M, g, v)), (K = Lr()), l !== null && !Ut))
        return (Ki(l, o, v), Vi(l, o, v));
      return (Xe && K && ke(o), (o.flags |= 1), Zt(l, o, d, v), o.child);
    }
    function sh(l, o, u, d, v) {
      if (l === null) {
        var g = u.type;
        if (
          typeof g === "function" &&
          !rc(g) &&
          g.defaultProps === void 0 &&
          u.compare === null
        )
          return ((o.tag = 15), (o.type = g), uh(l, o, g, d, v));
        return (
          (l = ys(u.type, null, d, o, o.mode, v)),
          (l.ref = o.ref),
          (l.return = o),
          (o.child = l)
        );
      }
      if (((g = l.child), !ku(l, v))) {
        var M = g.memoizedProps;
        if (
          ((u = u.compare),
          (u = u !== null ? u : ii),
          u(M, d) && l.ref === o.ref)
        )
          return Vi(l, o, v);
      }
      return (
        (o.flags |= 1),
        (l = Qi(g, d)),
        (l.ref = o.ref),
        (l.return = o),
        (o.child = l)
      );
    }
    function uh(l, o, u, d, v) {
      if (l !== null) {
        var g = l.memoizedProps;
        if (ii(g, d) && l.ref === o.ref)
          if (((Ut = !1), (o.pendingProps = d = g), ku(l, v)))
            (l.flags & 131072) !== 0 && (Ut = !0);
          else return ((o.lanes = l.lanes), Vi(l, o, v));
      }
      return zu(l, o, u, d, v);
    }
    function ch(l, o, u, d) {
      var v = d.children,
        g = l !== null ? l.memoizedState : null;
      if (
        (l === null &&
          o.stateNode === null &&
          (o.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        d.mode === "hidden")
      ) {
        if ((o.flags & 128) !== 0) {
          if (((g = g !== null ? g.baseLanes | u : u), l !== null)) {
            d = o.child = l.child;
            for (v = 0; d !== null;)
              ((v = v | d.lanes | d.childLanes), (d = d.sibling));
            d = v & ~g;
          } else ((d = 0), (o.child = null));
          return fh(l, o, g, u, d);
        }
        if ((u & 536870912) !== 0)
          ((o.memoizedState = { baseLanes: 0, cachePool: null }),
            l !== null && vi(o, g !== null ? g.cachePool : null),
            g !== null ? Hr(o, g) : Zl(),
            Yi(o));
        else
          return (
            (d = o.lanes = 536870912),
            fh(l, o, g !== null ? g.baseLanes | u : u, u, d)
          );
      } else
        g !== null
          ? (vi(o, g.cachePool), Hr(o, g), Dn(o), (o.memoizedState = null))
          : (l !== null && vi(o, null), Zl(), Dn(o));
      return (Zt(l, o, v, u), o.child);
    }
    function ta(l, o) {
      return (
        (l !== null && l.tag === 22) ||
          o.stateNode !== null ||
          (o.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        o.sibling
      );
    }
    function fh(l, o, u, d, v) {
      var g = Ct();
      return (
        (g =
          g === null
            ? null
            : { parent: Zi ? Nt._currentValue : Nt._currentValue2, pool: g }),
        (o.memoizedState = { baseLanes: u, cachePool: g }),
        l !== null && vi(o, null),
        Zl(),
        Yi(o),
        l !== null && He(l, o, d, !0),
        (o.childLanes = v),
        null
      );
    }
    function rs(l, o) {
      return (
        (o = ss({ mode: o.mode, children: o.children }, l.mode)),
        (o.ref = l.ref),
        (l.child = o),
        (o.return = l),
        o
      );
    }
    function dh(l, o, u) {
      return (
        yr(o, l.child, null, u),
        (l = rs(o, o.pendingProps)),
        (l.flags |= 2),
        on(o),
        (o.memoizedState = null),
        l
      );
    }
    function Fg(l, o, u) {
      var d = o.pendingProps,
        v = (o.flags & 128) !== 0;
      if (((o.flags &= -129), l === null)) {
        if (Xe) {
          if (d.mode === "hidden")
            return ((l = rs(o, d)), (o.lanes = 536870912), ta(null, l));
          if (
            (Ko(o),
            (l = Tt)
              ? ((l = r0(l, jn)),
                l !== null &&
                  ((o.memoizedState = {
                    dehydrated: l,
                    treeContext: Tl !== null ? { id: Ai, overflow: _i } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (u = cm(l)),
                  (u.return = o),
                  (o.child = u),
                  (Jt = o),
                  (Tt = null)))
              : (l = null),
            l === null)
          )
            throw yt(o);
          return ((o.lanes = 536870912), null);
        }
        return rs(o, d);
      }
      var g = l.memoizedState;
      if (g !== null) {
        var M = g.dehydrated;
        if ((Ko(o), v))
          if (o.flags & 256) ((o.flags &= -257), (o = dh(l, o, u)));
          else if (o.memoizedState !== null)
            ((o.child = l.child), (o.flags |= 128), (o = null));
          else throw Error(f(558));
        else if (
          (Ut || He(l, o, u, !1), (v = (u & l.childLanes) !== 0), Ut || v)
        ) {
          if (
            ((d = ft),
            d !== null && ((M = Q(d, u)), M !== 0 && M !== g.retryLane))
          )
            throw ((g.retryLane = M), xi(l, M), Mn(d, l, M), Lc);
          (ms(), (o = dh(l, o, u)));
        } else
          ((l = g.treeContext),
            fn &&
              ((Tt = e0(M)),
              (Jt = o),
              (Xe = !0),
              (Al = null),
              (jn = !1),
              l !== null && wt(o, l)),
            (o = rs(o, d)),
            (o.flags |= 4096));
        return o;
      }
      return (
        (l = Qi(l.child, { mode: d.mode, children: d.children })),
        (l.ref = o.ref),
        (o.child = l),
        (l.return = o),
        l
      );
    }
    function as(l, o) {
      var u = o.ref;
      if (u === null) l !== null && l.ref !== null && (o.flags |= 4194816);
      else {
        if (typeof u !== "function" && typeof u !== "object")
          throw Error(f(284));
        if (l === null || l.ref !== u) o.flags |= 4194816;
      }
    }
    function zu(l, o, u, d, v) {
      if (
        (de(o), (u = Br(l, o, u, d, void 0, v)), (d = Lr()), l !== null && !Ut)
      )
        return (Ki(l, o, v), Vi(l, o, v));
      return (Xe && d && ke(o), (o.flags |= 1), Zt(l, o, u, v), o.child);
    }
    function hh(l, o, u, d, v, g) {
      if (
        (de(o),
        (o.updateQueue = null),
        (u = ko(o, d, u, v)),
        Il(l),
        (d = Lr()),
        l !== null && !Ut)
      )
        return (Ki(l, o, g), Vi(l, o, g));
      return (Xe && d && ke(o), (o.flags |= 1), Zt(l, o, u, g), o.child);
    }
    function mh(l, o, u, d, v) {
      if ((de(o), o.stateNode === null)) {
        var g = to,
          M = u.contextType;
        (typeof M === "object" && M !== null && (g = Te(M)),
          (g = new u(d, g)),
          (o.memoizedState =
            g.state !== null && g.state !== void 0 ? g.state : null),
          (g.updater = Bc),
          (o.stateNode = g),
          (g._reactInternals = o),
          (g = o.stateNode),
          (g.props = d),
          (g.state = o.memoizedState),
          (g.refs = {}),
          ql(o),
          (M = u.contextType),
          (g.context = typeof M === "object" && M !== null ? Te(M) : to),
          (g.state = o.memoizedState),
          (M = u.getDerivedStateFromProps),
          typeof M === "function" &&
            (Bu(o, u, M, d), (g.state = o.memoizedState)),
          typeof u.getDerivedStateFromProps === "function" ||
            typeof g.getSnapshotBeforeUpdate === "function" ||
            (typeof g.UNSAFE_componentWillMount !== "function" &&
              typeof g.componentWillMount !== "function") ||
            ((M = g.state),
            typeof g.componentWillMount === "function" &&
              g.componentWillMount(),
            typeof g.UNSAFE_componentWillMount === "function" &&
              g.UNSAFE_componentWillMount(),
            M !== g.state && Bc.enqueueReplaceState(g, g.state, null),
            Xl(o, d, g, v),
            Pi(),
            (g.state = o.memoizedState)),
          typeof g.componentDidMount === "function" && (o.flags |= 4194308),
          (d = !0));
      } else if (l === null) {
        g = o.stateNode;
        var K = o.memoizedProps,
          ne = or(u, K);
        g.props = ne;
        var ae = g.context,
          be = u.contextType;
        ((M = to), typeof be === "object" && be !== null && (M = Te(be)));
        var me = u.getDerivedStateFromProps;
        ((be =
          typeof me === "function" ||
          typeof g.getSnapshotBeforeUpdate === "function"),
          (K = o.pendingProps !== K),
          be ||
            (typeof g.UNSAFE_componentWillReceiveProps !== "function" &&
              typeof g.componentWillReceiveProps !== "function") ||
            ((K || ae !== M) && ih(o, g, d, M)),
          (_l = !1));
        var xe = o.memoizedState;
        ((g.state = xe),
          Xl(o, d, g, v),
          Pi(),
          (ae = o.memoizedState),
          K || xe !== ae || _l
            ? (typeof me === "function" &&
                (Bu(o, u, me, d), (ae = o.memoizedState)),
              (ne = _l || nh(o, u, ne, d, xe, ae, M))
                ? (be ||
                    (typeof g.UNSAFE_componentWillMount !== "function" &&
                      typeof g.componentWillMount !== "function") ||
                    (typeof g.componentWillMount === "function" &&
                      g.componentWillMount(),
                    typeof g.UNSAFE_componentWillMount === "function" &&
                      g.UNSAFE_componentWillMount()),
                  typeof g.componentDidMount === "function" &&
                    (o.flags |= 4194308))
                : (typeof g.componentDidMount === "function" &&
                    (o.flags |= 4194308),
                  (o.memoizedProps = d),
                  (o.memoizedState = ae)),
              (g.props = d),
              (g.state = ae),
              (g.context = M),
              (d = ne))
            : (typeof g.componentDidMount === "function" &&
                (o.flags |= 4194308),
              (d = !1)));
      } else {
        ((g = o.stateNode),
          wr(l, o),
          (M = o.memoizedProps),
          (be = or(u, M)),
          (g.props = be),
          (me = o.pendingProps),
          (xe = g.context),
          (ae = u.contextType),
          (ne = to),
          typeof ae === "object" && ae !== null && (ne = Te(ae)),
          (K = u.getDerivedStateFromProps),
          (ae =
            typeof K === "function" ||
            typeof g.getSnapshotBeforeUpdate === "function") ||
            (typeof g.UNSAFE_componentWillReceiveProps !== "function" &&
              typeof g.componentWillReceiveProps !== "function") ||
            ((M !== me || xe !== ne) && ih(o, g, d, ne)),
          (_l = !1),
          (xe = o.memoizedState),
          (g.state = xe),
          Xl(o, d, g, v),
          Pi());
        var ze = o.memoizedState;
        M !== me ||
        xe !== ze ||
        _l ||
        (l !== null && l.dependencies !== null && Me(l.dependencies))
          ? (typeof K === "function" &&
              (Bu(o, u, K, d), (ze = o.memoizedState)),
            (be =
              _l ||
              nh(o, u, be, d, xe, ze, ne) ||
              (l !== null && l.dependencies !== null && Me(l.dependencies)))
              ? (ae ||
                  (typeof g.UNSAFE_componentWillUpdate !== "function" &&
                    typeof g.componentWillUpdate !== "function") ||
                  (typeof g.componentWillUpdate === "function" &&
                    g.componentWillUpdate(d, ze, ne),
                  typeof g.UNSAFE_componentWillUpdate === "function" &&
                    g.UNSAFE_componentWillUpdate(d, ze, ne)),
                typeof g.componentDidUpdate === "function" && (o.flags |= 4),
                typeof g.getSnapshotBeforeUpdate === "function" &&
                  (o.flags |= 1024))
              : (typeof g.componentDidUpdate !== "function" ||
                  (M === l.memoizedProps && xe === l.memoizedState) ||
                  (o.flags |= 4),
                typeof g.getSnapshotBeforeUpdate !== "function" ||
                  (M === l.memoizedProps && xe === l.memoizedState) ||
                  (o.flags |= 1024),
                (o.memoizedProps = d),
                (o.memoizedState = ze)),
            (g.props = d),
            (g.state = ze),
            (g.context = ne),
            (d = be))
          : (typeof g.componentDidUpdate !== "function" ||
              (M === l.memoizedProps && xe === l.memoizedState) ||
              (o.flags |= 4),
            typeof g.getSnapshotBeforeUpdate !== "function" ||
              (M === l.memoizedProps && xe === l.memoizedState) ||
              (o.flags |= 1024),
            (d = !1));
      }
      return (
        (g = d),
        as(l, o),
        (d = (o.flags & 128) !== 0),
        g || d
          ? ((g = o.stateNode),
            (u =
              d && typeof u.getDerivedStateFromError !== "function"
                ? null
                : g.render()),
            (o.flags |= 1),
            l !== null && d
              ? ((o.child = yr(o, l.child, null, v)),
                (o.child = yr(o, null, u, v)))
              : Zt(l, o, u, v),
            (o.memoizedState = g.state),
            (l = o.child))
          : (l = Vi(l, o, v)),
        l
      );
    }
    function ph(l, o, u, d) {
      return (tt(), (o.flags |= 256), Zt(l, o, u, d), o.child);
    }
    function Uu(l) {
      return { baseLanes: l, cachePool: ni() };
    }
    function Fu(l, o, u) {
      return ((l = l !== null ? l.childLanes & ~u : 0), o && (l |= Fn), l);
    }
    function yh(l, o, u) {
      var d = o.pendingProps,
        v = !1,
        g = (o.flags & 128) !== 0,
        M;
      if (
        ((M = g) ||
          (M =
            l !== null && l.memoizedState === null
              ? !1
              : (Bt.current & 2) !== 0),
        M && ((v = !0), (o.flags &= -129)),
        (M = (o.flags & 32) !== 0),
        (o.flags &= -33),
        l === null)
      ) {
        if (Xe) {
          if (
            (v ? Sn(o) : Dn(o),
            (l = Tt)
              ? ((l = o0(l, jn)),
                l !== null &&
                  ((o.memoizedState = {
                    dehydrated: l,
                    treeContext: Tl !== null ? { id: Ai, overflow: _i } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (u = cm(l)),
                  (u.return = o),
                  (o.child = u),
                  (Jt = o),
                  (Tt = null)))
              : (l = null),
            l === null)
          )
            throw yt(o);
          return (bc(l) ? (o.lanes = 32) : (o.lanes = 536870912), null);
        }
        var K = d.children;
        if (((d = d.fallback), v))
          return (
            Dn(o),
            (v = o.mode),
            (K = ss({ mode: "hidden", children: K }, v)),
            (d = ur(d, v, u, null)),
            (K.return = o),
            (d.return = o),
            (K.sibling = d),
            (o.child = K),
            (d = o.child),
            (d.memoizedState = Uu(u)),
            (d.childLanes = Fu(l, M, u)),
            (o.memoizedState = zc),
            ta(null, d)
          );
        return (Sn(o), Pu(o, K));
      }
      var ne = l.memoizedState;
      if (ne !== null && ((K = ne.dehydrated), K !== null)) {
        if (g)
          o.flags & 256
            ? (Sn(o), (o.flags &= -257), (o = Yu(l, o, u)))
            : o.memoizedState !== null
              ? (Dn(o), (o.child = l.child), (o.flags |= 128), (o = null))
              : (Dn(o),
                (K = d.fallback),
                (v = o.mode),
                (d = ss({ mode: "visible", children: d.children }, v)),
                (K = ur(K, v, u, null)),
                (K.flags |= 2),
                (d.return = o),
                (K.return = o),
                (d.sibling = K),
                (o.child = d),
                yr(o, l.child, null, u),
                (d = o.child),
                (d.memoizedState = Uu(u)),
                (d.childLanes = Fu(l, M, u)),
                (o.memoizedState = zc),
                (o = ta(null, d)));
        else if ((Sn(o), bc(K)))
          ((M = qb(K).digest),
            (d = Error(f(419))),
            (d.stack = ""),
            (d.digest = M),
            hn({ value: d, source: null, stack: null }),
            (o = Yu(l, o, u)));
        else if (
          (Ut || He(l, o, u, !1), (M = (u & l.childLanes) !== 0), Ut || M)
        ) {
          if (
            ((M = ft),
            M !== null && ((d = Q(M, u)), d !== 0 && d !== ne.retryLane))
          )
            throw ((ne.retryLane = d), xi(l, d), Mn(M, l, d), Lc);
          (gc(K) || ms(), (o = Yu(l, o, u)));
        } else
          gc(K)
            ? ((o.flags |= 192), (o.child = l.child), (o = null))
            : ((l = ne.treeContext),
              fn &&
                ((Tt = t0(K)),
                (Jt = o),
                (Xe = !0),
                (Al = null),
                (jn = !1),
                l !== null && wt(o, l)),
              (o = Pu(o, d.children)),
              (o.flags |= 4096));
        return o;
      }
      if (v)
        return (
          Dn(o),
          (K = d.fallback),
          (v = o.mode),
          (ne = l.child),
          (g = ne.sibling),
          (d = Qi(ne, { mode: "hidden", children: d.children })),
          (d.subtreeFlags = ne.subtreeFlags & 65011712),
          g !== null
            ? (K = Qi(g, K))
            : ((K = ur(K, v, u, null)), (K.flags |= 2)),
          (K.return = o),
          (d.return = o),
          (d.sibling = K),
          (o.child = d),
          ta(null, d),
          (d = o.child),
          (K = l.child.memoizedState),
          K === null
            ? (K = Uu(u))
            : ((v = K.cachePool),
              v !== null
                ? ((ne = Zi ? Nt._currentValue : Nt._currentValue2),
                  (v = v.parent !== ne ? { parent: ne, pool: ne } : v))
                : (v = ni()),
              (K = { baseLanes: K.baseLanes | u, cachePool: v })),
          (d.memoizedState = K),
          (d.childLanes = Fu(l, M, u)),
          (o.memoizedState = zc),
          ta(l.child, d)
        );
      return (
        Sn(o),
        (u = l.child),
        (l = u.sibling),
        (u = Qi(u, { mode: "visible", children: d.children })),
        (u.return = o),
        (u.sibling = null),
        l !== null &&
          ((M = o.deletions),
          M === null ? ((o.deletions = [l]), (o.flags |= 16)) : M.push(l)),
        (o.child = u),
        (o.memoizedState = null),
        u
      );
    }
    function Pu(l, o) {
      return (
        (o = ss({ mode: "visible", children: o }, l.mode)),
        (o.return = l),
        (l.child = o)
      );
    }
    function ss(l, o) {
      return ((l = s(22, l, null, o)), (l.lanes = 0), l);
    }
    function Yu(l, o, u) {
      return (
        yr(o, l.child, null, u),
        (l = Pu(o, o.pendingProps.children)),
        (l.flags |= 2),
        (o.memoizedState = null),
        l
      );
    }
    function vh(l, o, u) {
      l.lanes |= o;
      var d = l.alternate;
      (d !== null && (d.lanes |= o), mn(l.return, o, u));
    }
    function Ku(l, o, u, d, v, g) {
      var M = l.memoizedState;
      M === null
        ? (l.memoizedState = {
            isBackwards: o,
            rendering: null,
            renderingStartTime: 0,
            last: d,
            tail: u,
            tailMode: v,
            treeForkCount: g,
          })
        : ((M.isBackwards = o),
          (M.rendering = null),
          (M.renderingStartTime = 0),
          (M.last = d),
          (M.tail = u),
          (M.tailMode = v),
          (M.treeForkCount = g));
    }
    function gh(l, o, u) {
      var d = o.pendingProps,
        v = d.revealOrder,
        g = d.tail;
      d = d.children;
      var M = Bt.current,
        K = (M & 2) !== 0;
      if (
        (K ? ((M = (M & 1) | 2), (o.flags |= 128)) : (M &= 1),
        T(Bt, M),
        Zt(l, o, d, u),
        (d = Xe ? ma : 0),
        !K && l !== null && (l.flags & 128) !== 0)
      )
        e: for (l = o.child; l !== null;) {
          if (l.tag === 13) l.memoizedState !== null && vh(l, u, o);
          else if (l.tag === 19) vh(l, u, o);
          else if (l.child !== null) {
            ((l.child.return = l), (l = l.child));
            continue;
          }
          if (l === o) break e;
          for (; l.sibling === null;) {
            if (l.return === null || l.return === o) break e;
            l = l.return;
          }
          ((l.sibling.return = l.return), (l = l.sibling));
        }
      switch (v) {
        case "forwards":
          u = o.child;
          for (v = null; u !== null;)
            ((l = u.alternate),
              l !== null && cl(l) === null && (v = u),
              (u = u.sibling));
          ((u = v),
            u === null
              ? ((v = o.child), (o.child = null))
              : ((v = u.sibling), (u.sibling = null)),
            Ku(o, !1, v, u, g, d));
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          ((u = null), (v = o.child));
          for (o.child = null; v !== null;) {
            if (((l = v.alternate), l !== null && cl(l) === null)) {
              o.child = v;
              break;
            }
            ((l = v.sibling), (v.sibling = u), (u = v), (v = l));
          }
          Ku(o, !0, u, null, g, d);
          break;
        case "together":
          Ku(o, !1, null, null, void 0, d);
          break;
        default:
          o.memoizedState = null;
      }
      return o.child;
    }
    function Vi(l, o, u) {
      if (
        (l !== null && (o.dependencies = l.dependencies),
        (wl |= o.lanes),
        (u & o.childLanes) === 0)
      )
        if (l !== null) {
          if ((He(l, o, u, !1), (u & o.childLanes) === 0)) return null;
        } else return null;
      if (l !== null && o.child !== l.child) throw Error(f(153));
      if (o.child !== null) {
        ((l = o.child), (u = Qi(l, l.pendingProps)), (o.child = u));
        for (u.return = o; l.sibling !== null;)
          ((l = l.sibling),
            (u = u.sibling = Qi(l, l.pendingProps)),
            (u.return = o));
        u.sibling = null;
      }
      return o.child;
    }
    function ku(l, o) {
      if ((l.lanes & o) !== 0) return !0;
      return ((l = l.dependencies), l !== null && Me(l) ? !0 : !1);
    }
    function Pg(l, o, u) {
      switch (o.tag) {
        case 3:
          (bt(o, o.stateNode.containerInfo),
            Lt(o, Nt, l.memoizedState.cache),
            tt());
          break;
        case 27:
        case 5:
          nn(o);
          break;
        case 4:
          bt(o, o.stateNode.containerInfo);
          break;
        case 10:
          Lt(o, o.type, o.memoizedProps.value);
          break;
        case 31:
          if (o.memoizedState !== null) return ((o.flags |= 128), Ko(o), null);
          break;
        case 13:
          var d = o.memoizedState;
          if (d !== null) {
            if (d.dehydrated !== null) return (Sn(o), (o.flags |= 128), null);
            if ((u & o.child.childLanes) !== 0) return yh(l, o, u);
            return (Sn(o), (l = Vi(l, o, u)), l !== null ? l.sibling : null);
          }
          Sn(o);
          break;
        case 19:
          var v = (l.flags & 128) !== 0;
          if (
            ((d = (u & o.childLanes) !== 0),
            d || (He(l, o, u, !1), (d = (u & o.childLanes) !== 0)),
            v)
          ) {
            if (d) return gh(l, o, u);
            o.flags |= 128;
          }
          if (
            ((v = o.memoizedState),
            v !== null &&
              ((v.rendering = null), (v.tail = null), (v.lastEffect = null)),
            T(Bt, Bt.current),
            d)
          )
            break;
          else return null;
        case 22:
          return ((o.lanes = 0), ch(l, o, u, o.pendingProps));
        case 24:
          Lt(o, Nt, l.memoizedState.cache);
      }
      return Vi(l, o, u);
    }
    function bh(l, o, u) {
      if (l !== null)
        if (l.memoizedProps !== o.pendingProps) Ut = !0;
        else {
          if (!ku(l, u) && (o.flags & 128) === 0)
            return ((Ut = !1), Pg(l, o, u));
          Ut = (l.flags & 131072) !== 0 ? !0 : !1;
        }
      else ((Ut = !1), Xe && (o.flags & 1048576) !== 0 && Ue(o, ma, o.index));
      switch (((o.lanes = 0), o.tag)) {
        case 16:
          e: {
            var d = o.pendingProps;
            if (
              ((l = Ht(o.elementType)), (o.type = l), typeof l === "function")
            )
              rc(l)
                ? ((d = or(l, d)), (o.tag = 1), (o = mh(null, o, l, d, u)))
                : ((o.tag = 0), (o = zu(null, o, l, d, u)));
            else {
              if (l !== void 0 && l !== null) {
                var v = l.$$typeof;
                if (v === fc) {
                  ((o.tag = 11), (o = ah(null, o, l, d, u)));
                  break e;
                } else if (v === mc) {
                  ((o.tag = 14), (o = sh(null, o, l, d, u)));
                  break e;
                }
              }
              throw ((o = C(l) || l), Error(f(306, o, "")));
            }
          }
          return o;
        case 0:
          return zu(l, o, o.type, o.pendingProps, u);
        case 1:
          return ((d = o.type), (v = or(d, o.pendingProps)), mh(l, o, d, v, u));
        case 3:
          e: {
            if ((bt(o, o.stateNode.containerInfo), l === null))
              throw Error(f(387));
            var g = o.pendingProps;
            ((v = o.memoizedState),
              (d = v.element),
              wr(l, o),
              Xl(o, g, null, u));
            var M = o.memoizedState;
            if (
              ((g = M.cache),
              Lt(o, Nt, g),
              g !== v.cache && Ce(o, [Nt], u, !0),
              Pi(),
              (g = M.element),
              fn && v.isDehydrated)
            )
              if (
                ((v = { element: g, isDehydrated: !1, cache: M.cache }),
                (o.updateQueue.baseState = v),
                (o.memoizedState = v),
                o.flags & 256)
              ) {
                o = ph(l, o, g, u);
                break e;
              } else if (g !== d) {
                ((d = Se(Error(f(424)), o)), hn(d), (o = ph(l, o, g, u)));
                break e;
              } else
                for (
                  fn &&
                    ((Tt = $b(o.stateNode.containerInfo)),
                    (Jt = o),
                    (Xe = !0),
                    (Al = null),
                    (jn = !0)),
                    u = Zm(o, null, g, u),
                    o.child = u;
                  u;
                )
                  ((u.flags = (u.flags & -3) | 4096), (u = u.sibling));
            else {
              if ((tt(), g === d)) {
                o = Vi(l, o, u);
                break e;
              }
              Zt(l, o, g, u);
            }
            o = o.child;
          }
          return o;
        case 26:
          if (ci)
            return (
              as(l, o),
              l === null
                ? (u = Bm(o.type, null, o.pendingProps, null))
                  ? (o.memoizedState = u)
                  : Xe ||
                    (o.stateNode = T0(o.type, o.pendingProps, Nl.current, o))
                : (o.memoizedState = Bm(
                    o.type,
                    l.memoizedProps,
                    o.pendingProps,
                    l.memoizedState,
                  )),
              null
            );
        case 27:
          if (Kt)
            return (
              nn(o),
              l === null &&
                Kt &&
                Xe &&
                ((d = o.stateNode =
                  Km(o.type, o.pendingProps, Nl.current, It.current, !1)),
                (Jt = o),
                (jn = !0),
                (Tt = n0(o.type, d, Tt))),
              Zt(l, o, o.pendingProps.children, u),
              as(l, o),
              l === null && (o.flags |= 4194304),
              o.child
            );
        case 5:
          if (l === null && Xe) {
            if ((C0(o.type, o.pendingProps, It.current), (v = d = Tt)))
              ((d = i0(d, o.type, o.pendingProps, jn)),
                d !== null
                  ? ((o.stateNode = d),
                    (Jt = o),
                    (Tt = Jb(d)),
                    (jn = !1),
                    (v = !0))
                  : (v = !1));
            v || yt(o);
          }
          return (
            nn(o),
            (v = o.type),
            (g = o.pendingProps),
            (M = l !== null ? l.memoizedProps : null),
            (d = g.children),
            bs(v, g) ? (d = null) : M !== null && bs(v, M) && (o.flags |= 32),
            o.memoizedState !== null &&
              ((v = Br(l, o, Go, null, null, u)),
              Zi ? (fr._currentValue = v) : (fr._currentValue2 = v)),
            as(l, o),
            Zt(l, o, d, u),
            o.child
          );
        case 6:
          if (l === null && Xe) {
            if ((M0(o.pendingProps, It.current), (l = u = Tt)))
              ((u = l0(u, o.pendingProps, jn)),
                u !== null
                  ? ((o.stateNode = u), (Jt = o), (Tt = null), (l = !0))
                  : (l = !1));
            l || yt(o);
          }
          return null;
        case 13:
          return yh(l, o, u);
        case 4:
          return (
            bt(o, o.stateNode.containerInfo),
            (d = o.pendingProps),
            l === null ? (o.child = yr(o, null, d, u)) : Zt(l, o, d, u),
            o.child
          );
        case 11:
          return ah(l, o, o.type, o.pendingProps, u);
        case 7:
          return (Zt(l, o, o.pendingProps, u), o.child);
        case 8:
          return (Zt(l, o, o.pendingProps.children, u), o.child);
        case 12:
          return (Zt(l, o, o.pendingProps.children, u), o.child);
        case 10:
          return (
            (d = o.pendingProps),
            Lt(o, o.type, d.value),
            Zt(l, o, d.children, u),
            o.child
          );
        case 9:
          return (
            (v = o.type._context),
            (d = o.pendingProps.children),
            de(o),
            (v = Te(v)),
            (d = d(v)),
            (o.flags |= 1),
            Zt(l, o, d, u),
            o.child
          );
        case 14:
          return sh(l, o, o.type, o.pendingProps, u);
        case 15:
          return uh(l, o, o.type, o.pendingProps, u);
        case 19:
          return gh(l, o, u);
        case 31:
          return Fg(l, o, u);
        case 22:
          return ch(l, o, u, o.pendingProps);
        case 24:
          return (
            de(o),
            (d = Te(Nt)),
            l === null
              ? ((v = Ct()),
                v === null &&
                  ((v = ft),
                  (g = De()),
                  (v.pooledCache = g),
                  g.refCount++,
                  g !== null && (v.pooledCacheLanes |= u),
                  (v = g)),
                (o.memoizedState = { parent: d, cache: v }),
                ql(o),
                Lt(o, Nt, v))
              : ((l.lanes & u) !== 0 && (wr(l, o), Xl(o, null, null, u), Pi()),
                (v = l.memoizedState),
                (g = o.memoizedState),
                v.parent !== d
                  ? ((v = { parent: d, cache: d }),
                    (o.memoizedState = v),
                    o.lanes === 0 &&
                      (o.memoizedState = o.updateQueue.baseState = v),
                    Lt(o, Nt, d))
                  : ((d = g.cache),
                    Lt(o, Nt, d),
                    d !== v.cache && Ce(o, [Nt], u, !0))),
            Zt(l, o, o.pendingProps.children, u),
            o.child
          );
        case 29:
          throw o.pendingProps;
      }
      throw Error(f(156, o.tag));
    }
    function ai(l) {
      l.flags |= 4;
    }
    function us(l) {
      Ni && (l.flags |= 8);
    }
    function Sh(l, o) {
      if (l !== null && l.child === o.child) return !1;
      if ((o.flags & 16) !== 0) return !0;
      for (l = o.child; l !== null;) {
        if ((l.flags & 8218) !== 0 || (l.subtreeFlags & 8218) !== 0) return !0;
        l = l.sibling;
      }
      return !1;
    }
    function Gu(l, o, u, d) {
      if (cn)
        for (u = o.child; u !== null;) {
          if (u.tag === 5 || u.tag === 6) yc(l, u.stateNode);
          else if (!(u.tag === 4 || (Kt && u.tag === 27)) && u.child !== null) {
            ((u.child.return = u), (u = u.child));
            continue;
          }
          if (u === o) break;
          for (; u.sibling === null;) {
            if (u.return === null || u.return === o) return;
            u = u.return;
          }
          ((u.sibling.return = u.return), (u = u.sibling));
        }
      else if (Ni)
        for (var v = o.child; v !== null;) {
          if (v.tag === 5) {
            var g = v.stateNode;
            (u && d && (g = _m(g, v.type, v.memoizedProps)), yc(l, g));
          } else if (v.tag === 6)
            ((g = v.stateNode),
              u && d && (g = Dm(g, v.memoizedProps)),
              yc(l, g));
          else if (v.tag !== 4) {
            if (v.tag === 22 && v.memoizedState !== null)
              ((g = v.child), g !== null && (g.return = v), Gu(l, v, !0, !0));
            else if (v.child !== null) {
              ((v.child.return = v), (v = v.child));
              continue;
            }
          }
          if (v === o) break;
          for (; v.sibling === null;) {
            if (v.return === null || v.return === o) return;
            v = v.return;
          }
          ((v.sibling.return = v.return), (v = v.sibling));
        }
    }
    function Eh(l, o, u, d) {
      var v = !1;
      if (Ni)
        for (var g = o.child; g !== null;) {
          if (g.tag === 5) {
            var M = g.stateNode;
            (u && d && (M = _m(M, g.type, g.memoizedProps)), Nm(l, M));
          } else if (g.tag === 6)
            ((M = g.stateNode),
              u && d && (M = Dm(M, g.memoizedProps)),
              Nm(l, M));
          else if (g.tag !== 4) {
            if (g.tag === 22 && g.memoizedState !== null)
              ((v = g.child),
                v !== null && (v.return = g),
                Eh(l, g, !0, !0),
                (v = !0));
            else if (g.child !== null) {
              ((g.child.return = g), (g = g.child));
              continue;
            }
          }
          if (g === o) break;
          for (; g.sibling === null;) {
            if (g.return === null || g.return === o) return v;
            g = g.return;
          }
          ((g.sibling.return = g.return), (g = g.sibling));
        }
      return v;
    }
    function xh(l, o) {
      if (Ni && Sh(l, o)) {
        l = o.stateNode;
        var u = l.containerInfo,
          d = Tm();
        (Eh(d, o, !1, !1), (l.pendingChildren = d), ai(o), Vb(u, d));
      }
    }
    function ju(l, o, u, d) {
      if (cn) l.memoizedProps !== d && ai(o);
      else if (Ni) {
        var v = l.stateNode,
          g = l.memoizedProps;
        if ((l = Sh(l, o)) || g !== d) {
          var M = It.current;
          ((g = Wb(v, u, g, d, !l, null)),
            g === v
              ? (o.stateNode = v)
              : (us(o),
                Em(g, u, d, M) && ai(o),
                (o.stateNode = g),
                l && Gu(g, o, !1, !1)));
        } else o.stateNode = v;
      }
    }
    function Wu(l, o, u, d, v) {
      if ((l.mode & 32) !== 0 && (u === null ? gb(o, d) : bb(o, u, d))) {
        if (((l.flags |= 16777216), (v & 335544128) === v || vc(o, d)))
          if (Cm(l.stateNode, o, d)) l.flags |= 8192;
          else if (Xh()) l.flags |= 8192;
          else throw ((pr = Ds), Dc);
      } else l.flags &= -16777217;
    }
    function Ch(l, o) {
      if (A0(o)) {
        if (((l.flags |= 16777216), !Ym(o)))
          if (Xh()) l.flags |= 8192;
          else throw ((pr = Ds), Dc);
      } else l.flags &= -16777217;
    }
    function cs(l, o) {
      (o !== null && (l.flags |= 4),
        l.flags & 16384 &&
          ((o = l.tag !== 22 ? X() : 536870912), (l.lanes |= o), (go |= o)));
    }
    function na(l, o) {
      if (!Xe)
        switch (l.tailMode) {
          case "hidden":
            o = l.tail;
            for (var u = null; o !== null;)
              (o.alternate !== null && (u = o), (o = o.sibling));
            u === null ? (l.tail = null) : (u.sibling = null);
            break;
          case "collapsed":
            u = l.tail;
            for (var d = null; u !== null;)
              (u.alternate !== null && (d = u), (u = u.sibling));
            d === null
              ? o || l.tail === null
                ? (l.tail = null)
                : (l.tail.sibling = null)
              : (d.sibling = null);
        }
    }
    function gt(l) {
      var o = l.alternate !== null && l.alternate.child === l.child,
        u = 0,
        d = 0;
      if (o)
        for (var v = l.child; v !== null;)
          ((u |= v.lanes | v.childLanes),
            (d |= v.subtreeFlags & 65011712),
            (d |= v.flags & 65011712),
            (v.return = l),
            (v = v.sibling));
      else
        for (v = l.child; v !== null;)
          ((u |= v.lanes | v.childLanes),
            (d |= v.subtreeFlags),
            (d |= v.flags),
            (v.return = l),
            (v = v.sibling));
      return ((l.subtreeFlags |= d), (l.childLanes = u), o);
    }
    function Kg(l, o, u) {
      var d = o.pendingProps;
      switch ((et(o), o.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (gt(o), null);
        case 1:
          return (gt(o), null);
        case 3:
          if (
            ((u = o.stateNode),
            (d = null),
            l !== null && (d = l.memoizedState.cache),
            o.memoizedState.cache !== d && (o.flags |= 2048),
            nt(Nt),
            Mt(),
            u.pendingContext &&
              ((u.context = u.pendingContext), (u.pendingContext = null)),
            l === null || l.child === null)
          )
            Rt(o)
              ? ai(o)
              : l === null ||
                (l.memoizedState.isDehydrated && (o.flags & 256) === 0) ||
                ((o.flags |= 1024), St());
          return (xh(l, o), gt(o), null);
        case 26:
          if (ci) {
            var { type: v, memoizedState: g } = o;
            return (
              l === null
                ? (ai(o),
                  g !== null
                    ? (gt(o), Ch(o, g))
                    : (gt(o), Wu(o, v, null, d, u)))
                : g
                  ? g !== l.memoizedState
                    ? (ai(o), gt(o), Ch(o, g))
                    : (gt(o), (o.flags &= -16777217))
                  : ((g = l.memoizedProps),
                    cn ? g !== d && ai(o) : ju(l, o, v, d),
                    gt(o),
                    Wu(o, v, g, d, u)),
              null
            );
          }
        case 27:
          if (Kt) {
            if (
              (rn(o),
              (u = Nl.current),
              (v = o.type),
              l !== null && o.stateNode != null)
            )
              cn ? l.memoizedProps !== d && ai(o) : ju(l, o, v, d);
            else {
              if (!d) {
                if (o.stateNode === null) throw Error(f(166));
                return (gt(o), null);
              }
              ((l = It.current),
                Rt(o)
                  ? ti(o, l)
                  : ((l = Km(v, d, u, l, !0)), (o.stateNode = l), ai(o)));
            }
            return (gt(o), null);
          }
        case 5:
          if ((rn(o), (v = o.type), l !== null && o.stateNode != null))
            ju(l, o, v, d);
          else {
            if (!d) {
              if (o.stateNode === null) throw Error(f(166));
              return (gt(o), null);
            }
            if (((g = It.current), Rt(o)))
              (ti(o, g), v0(o.stateNode, v, d, g) && (o.flags |= 64));
            else {
              var M = cb(v, d, Nl.current, g, o);
              (us(o),
                Gu(M, o, !1, !1),
                (o.stateNode = M),
                Em(M, v, d, g) && ai(o));
            }
          }
          return (
            gt(o),
            Wu(
              o,
              o.type,
              l === null ? null : l.memoizedProps,
              o.pendingProps,
              u,
            ),
            null
          );
        case 6:
          if (l && o.stateNode != null)
            ((u = l.memoizedProps),
              cn
                ? u !== d && ai(o)
                : Ni &&
                  (u !== d
                    ? ((l = Nl.current),
                      (u = It.current),
                      us(o),
                      (o.stateNode = xm(d, l, u, o)))
                    : (o.stateNode = l.stateNode)));
          else {
            if (typeof d !== "string" && o.stateNode === null)
              throw Error(f(166));
            if (((l = Nl.current), (u = It.current), Rt(o))) {
              if (!fn) throw Error(f(176));
              if (
                ((l = o.stateNode),
                (u = o.memoizedProps),
                (d = null),
                (v = Jt),
                v !== null)
              )
                switch (v.tag) {
                  case 27:
                  case 5:
                    d = v.memoizedProps;
                }
              s0(l, u, o, d) || yt(o, !0);
            } else (us(o), (o.stateNode = xm(d, l, u, o)));
          }
          return (gt(o), null);
        case 31:
          if (((u = o.memoizedState), l === null || l.memoizedState !== null)) {
            if (((d = Rt(o)), u !== null)) {
              if (l === null) {
                if (!d) throw Error(f(318));
                if (!fn) throw Error(f(556));
                if (
                  ((l = o.memoizedState),
                  (l = l !== null ? l.dehydrated : null),
                  !l)
                )
                  throw Error(f(557));
                u0(l, o);
              } else
                (tt(),
                  (o.flags & 128) === 0 && (o.memoizedState = null),
                  (o.flags |= 4));
              (gt(o), (l = !1));
            } else
              ((u = St()),
                l !== null &&
                  l.memoizedState !== null &&
                  (l.memoizedState.hydrationErrors = u),
                (l = !0));
            if (!l) {
              if (o.flags & 256) return (on(o), o);
              return (on(o), null);
            }
            if ((o.flags & 128) !== 0) throw Error(f(558));
          }
          return (gt(o), null);
        case 13:
          if (
            ((d = o.memoizedState),
            l === null ||
              (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
          ) {
            if (((v = Rt(o)), d !== null && d.dehydrated !== null)) {
              if (l === null) {
                if (!v) throw Error(f(318));
                if (!fn) throw Error(f(344));
                if (
                  ((v = o.memoizedState),
                  (v = v !== null ? v.dehydrated : null),
                  !v)
                )
                  throw Error(f(317));
                c0(v, o);
              } else
                (tt(),
                  (o.flags & 128) === 0 && (o.memoizedState = null),
                  (o.flags |= 4));
              (gt(o), (v = !1));
            } else
              ((v = St()),
                l !== null &&
                  l.memoizedState !== null &&
                  (l.memoizedState.hydrationErrors = v),
                (v = !0));
            if (!v) {
              if (o.flags & 256) return (on(o), o);
              return (on(o), null);
            }
          }
          if ((on(o), (o.flags & 128) !== 0)) return ((o.lanes = u), o);
          return (
            (u = d !== null),
            (l = l !== null && l.memoizedState !== null),
            u &&
              ((d = o.child),
              (v = null),
              d.alternate !== null &&
                d.alternate.memoizedState !== null &&
                d.alternate.memoizedState.cachePool !== null &&
                (v = d.alternate.memoizedState.cachePool.pool),
              (g = null),
              d.memoizedState !== null &&
                d.memoizedState.cachePool !== null &&
                (g = d.memoizedState.cachePool.pool),
              g !== v && (d.flags |= 2048)),
            u !== l && u && (o.child.flags |= 8192),
            cs(o, o.updateQueue),
            gt(o),
            null
          );
        case 4:
          return (
            Mt(),
            xh(l, o),
            l === null && mb(o.stateNode.containerInfo),
            gt(o),
            null
          );
        case 10:
          return (nt(o.type), gt(o), null);
        case 19:
          if ((N(Bt), (d = o.memoizedState), d === null)) return (gt(o), null);
          if (((v = (o.flags & 128) !== 0), (g = d.rendering), g === null))
            if (v) na(d, !1);
            else {
              if (Dt !== 0 || (l !== null && (l.flags & 128) !== 0))
                for (l = o.child; l !== null;) {
                  if (((g = cl(l)), g !== null)) {
                    ((o.flags |= 128),
                      na(d, !1),
                      (l = g.updateQueue),
                      (o.updateQueue = l),
                      cs(o, l),
                      (o.subtreeFlags = 0),
                      (l = u));
                    for (u = o.child; u !== null;) (um(u, l), (u = u.sibling));
                    return (
                      T(Bt, (Bt.current & 1) | 2),
                      Xe && Ee(o, d.treeForkCount),
                      o.child
                    );
                  }
                  l = l.sibling;
                }
              d.tail !== null &&
                Rn() > Ca &&
                ((o.flags |= 128), (v = !0), na(d, !1), (o.lanes = 4194304));
            }
          else {
            if (!v)
              if (((l = cl(g)), l !== null)) {
                if (
                  ((o.flags |= 128),
                  (v = !0),
                  (l = l.updateQueue),
                  (o.updateQueue = l),
                  cs(o, l),
                  na(d, !0),
                  d.tail === null &&
                    d.tailMode === "hidden" &&
                    !g.alternate &&
                    !Xe)
                )
                  return (gt(o), null);
              } else
                2 * Rn() - d.renderingStartTime > Ca &&
                  u !== 536870912 &&
                  ((o.flags |= 128), (v = !0), na(d, !1), (o.lanes = 4194304));
            d.isBackwards
              ? ((g.sibling = o.child), (o.child = g))
              : ((l = d.last),
                l !== null ? (l.sibling = g) : (o.child = g),
                (d.last = g));
          }
          if (d.tail !== null)
            return (
              (l = d.tail),
              (d.rendering = l),
              (d.tail = l.sibling),
              (d.renderingStartTime = Rn()),
              (l.sibling = null),
              (u = Bt.current),
              T(Bt, v ? (u & 1) | 2 : u & 1),
              Xe && Ee(o, d.treeForkCount),
              l
            );
          return (gt(o), null);
        case 22:
        case 23:
          return (
            on(o),
            Re(),
            (d = o.memoizedState !== null),
            l !== null
              ? (l.memoizedState !== null) !== d && (o.flags |= 8192)
              : d && (o.flags |= 8192),
            d
              ? (u & 536870912) !== 0 &&
                (o.flags & 128) === 0 &&
                (gt(o), o.subtreeFlags & 6 && (o.flags |= 8192))
              : gt(o),
            (u = o.updateQueue),
            u !== null && cs(o, u.retryQueue),
            (u = null),
            l !== null &&
              l.memoizedState !== null &&
              l.memoizedState.cachePool !== null &&
              (u = l.memoizedState.cachePool.pool),
            (d = null),
            o.memoizedState !== null &&
              o.memoizedState.cachePool !== null &&
              (d = o.memoizedState.cachePool.pool),
            d !== u && (o.flags |= 2048),
            l !== null && N(mr),
            null
          );
        case 24:
          return (
            (u = null),
            l !== null && (u = l.memoizedState.cache),
            o.memoizedState.cache !== u && (o.flags |= 2048),
            nt(Nt),
            gt(o),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(f(156, o.tag));
    }
    function kg(l, o) {
      switch ((et(o), o.tag)) {
        case 1:
          return (
            (l = o.flags),
            l & 65536 ? ((o.flags = (l & -65537) | 128), o) : null
          );
        case 3:
          return (
            nt(Nt),
            Mt(),
            (l = o.flags),
            (l & 65536) !== 0 && (l & 128) === 0
              ? ((o.flags = (l & -65537) | 128), o)
              : null
          );
        case 26:
        case 27:
        case 5:
          return (rn(o), null);
        case 31:
          if (o.memoizedState !== null) {
            if ((on(o), o.alternate === null)) throw Error(f(340));
            tt();
          }
          return (
            (l = o.flags),
            l & 65536 ? ((o.flags = (l & -65537) | 128), o) : null
          );
        case 13:
          if (
            (on(o), (l = o.memoizedState), l !== null && l.dehydrated !== null)
          ) {
            if (o.alternate === null) throw Error(f(340));
            tt();
          }
          return (
            (l = o.flags),
            l & 65536 ? ((o.flags = (l & -65537) | 128), o) : null
          );
        case 19:
          return (N(Bt), null);
        case 4:
          return (Mt(), null);
        case 10:
          return (nt(o.type), null);
        case 22:
        case 23:
          return (
            on(o),
            Re(),
            l !== null && N(mr),
            (l = o.flags),
            l & 65536 ? ((o.flags = (l & -65537) | 128), o) : null
          );
        case 24:
          return (nt(Nt), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Mh(l, o) {
      switch ((et(o), o.tag)) {
        case 3:
          (nt(Nt), Mt());
          break;
        case 26:
        case 27:
        case 5:
          rn(o);
          break;
        case 4:
          Mt();
          break;
        case 31:
          o.memoizedState !== null && on(o);
          break;
        case 13:
          on(o);
          break;
        case 19:
          N(Bt);
          break;
        case 10:
          nt(o.type);
          break;
        case 22:
        case 23:
          (on(o), Re(), l !== null && N(mr));
          break;
        case 24:
          nt(Nt);
      }
    }
    function ia(l, o) {
      try {
        var u = o.updateQueue,
          d = u !== null ? u.lastEffect : null;
        if (d !== null) {
          var v = d.next;
          u = v;
          do {
            if ((u.tag & l) === l) {
              d = void 0;
              var g = u.create,
                M = u.inst;
              ((d = g()), (M.destroy = d));
            }
            u = u.next;
          } while (u !== v);
        }
      } catch (K) {
        Ze(o, o.return, K);
      }
    }
    function xl(l, o, u) {
      try {
        var d = o.updateQueue,
          v = d !== null ? d.lastEffect : null;
        if (v !== null) {
          var g = v.next;
          d = g;
          do {
            if ((d.tag & l) === l) {
              var M = d.inst,
                K = M.destroy;
              if (K !== void 0) {
                ((M.destroy = void 0), (v = o));
                var ne = u,
                  ae = K;
                try {
                  ae();
                } catch (be) {
                  Ze(v, ne, be);
                }
              }
            }
            d = d.next;
          } while (d !== g);
        }
      } catch (be) {
        Ze(o, o.return, be);
      }
    }
    function Rh(l) {
      var o = l.updateQueue;
      if (o !== null) {
        var u = l.stateNode;
        try {
          Ql(o, u);
        } catch (d) {
          Ze(l, l.return, d);
        }
      }
    }
    function Th(l, o, u) {
      ((u.props = or(l.type, l.memoizedProps)), (u.state = l.memoizedState));
      try {
        u.componentWillUnmount();
      } catch (d) {
        Ze(l, o, d);
      }
    }
    function la(l, o) {
      try {
        var u = l.ref;
        if (u !== null) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              var d = ca(l.stateNode);
              break;
            case 30:
              d = l.stateNode;
              break;
            default:
              d = l.stateNode;
          }
          typeof u === "function" ? (l.refCleanup = u(d)) : (u.current = d);
        }
      } catch (v) {
        Ze(l, o, v);
      }
    }
    function Ti(l, o) {
      var u = l.ref,
        d = l.refCleanup;
      if (u !== null)
        if (typeof d === "function")
          try {
            d();
          } catch (v) {
            Ze(l, o, v);
          } finally {
            ((l.refCleanup = null),
              (l = l.alternate),
              l != null && (l.refCleanup = null));
          }
        else if (typeof u === "function")
          try {
            u(null);
          } catch (v) {
            Ze(l, o, v);
          }
        else u.current = null;
    }
    function Nh(l) {
      var { type: o, memoizedProps: u, stateNode: d } = l;
      try {
        Bb(d, o, u, l);
      } catch (v) {
        Ze(l, l.return, v);
      }
    }
    function Vu(l, o, u) {
      try {
        Lb(l.stateNode, l.type, u, o, l);
      } catch (d) {
        Ze(l, l.return, d);
      }
    }
    function Ah(l) {
      return (
        l.tag === 5 ||
        l.tag === 3 ||
        (ci ? l.tag === 26 : !1) ||
        (Kt ? l.tag === 27 && $r(l.type) : !1) ||
        l.tag === 4
      );
    }
    function qu(l) {
      e: for (;;) {
        for (; l.sibling === null;) {
          if (l.return === null || Ah(l.return)) return null;
          l = l.return;
        }
        l.sibling.return = l.return;
        for (l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
          if (Kt && l.tag === 27 && $r(l.type)) continue e;
          if (l.flags & 2) continue e;
          if (l.child === null || l.tag === 4) continue e;
          else ((l.child.return = l), (l = l.child));
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function Xu(l, o, u) {
      var d = l.tag;
      if (d === 5 || d === 6) ((l = l.stateNode), o ? Ub(u, l, o) : wb(u, l));
      else if (
        d !== 4 &&
        (Kt && d === 27 && $r(l.type) && ((u = l.stateNode), (o = null)),
        (l = l.child),
        l !== null)
      )
        for (Xu(l, o, u), l = l.sibling; l !== null;)
          (Xu(l, o, u), (l = l.sibling));
    }
    function fs(l, o, u) {
      var d = l.tag;
      if (d === 5 || d === 6) ((l = l.stateNode), o ? zb(u, l, o) : Ob(u, l));
      else if (
        d !== 4 &&
        (Kt && d === 27 && $r(l.type) && (u = l.stateNode),
        (l = l.child),
        l !== null)
      )
        for (fs(l, o, u), l = l.sibling; l !== null;)
          (fs(l, o, u), (l = l.sibling));
    }
    function _h(l, o, u) {
      l = l.containerInfo;
      try {
        Am(l, u);
      } catch (d) {
        Ze(o, o.return, d);
      }
    }
    function Dh(l) {
      var { stateNode: o, memoizedProps: u } = l;
      try {
        D0(l.type, u, o, l);
      } catch (d) {
        Ze(l, l.return, d);
      }
    }
    function Gg(l, o) {
      sb(l.containerInfo);
      for (jt = o; jt !== null;)
        if (
          ((l = jt), (o = l.child), (l.subtreeFlags & 1028) !== 0 && o !== null)
        )
          ((o.return = l), (jt = o));
        else
          for (; jt !== null;) {
            l = jt;
            var u = l.alternate;
            switch (((o = l.flags), l.tag)) {
              case 0:
              case 11:
              case 15:
                if (
                  (o & 4) !== 0 &&
                  ((o = l.updateQueue),
                  (o = o !== null ? o.events : null),
                  o !== null)
                )
                  for (var d = 0; d < o.length; d++) {
                    var v = o[d];
                    v.ref.impl = v.nextImpl;
                  }
                break;
              case 1:
                if ((o & 1024) !== 0 && u !== null) {
                  ((o = void 0),
                    (d = l),
                    (v = u.memoizedProps),
                    (u = u.memoizedState));
                  var g = d.stateNode;
                  try {
                    var M = or(d.type, v);
                    ((o = g.getSnapshotBeforeUpdate(M, u)),
                      (g.__reactInternalSnapshotBeforeUpdate = o));
                  } catch (K) {
                    Ze(d, d.return, K);
                  }
                }
                break;
              case 3:
                (o & 1024) !== 0 && cn && jb(l.stateNode.containerInfo);
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0) throw Error(f(163));
            }
            if (((o = l.sibling), o !== null)) {
              ((o.return = l.return), (jt = o));
              break;
            }
            jt = l.return;
          }
    }
    function Oh(l, o, u) {
      var d = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (qi(l, u), d & 4 && ia(5, u));
          break;
        case 1:
          if ((qi(l, u), d & 4))
            if (((l = u.stateNode), o === null))
              try {
                l.componentDidMount();
              } catch (M) {
                Ze(u, u.return, M);
              }
            else {
              var v = or(u.type, o.memoizedProps);
              o = o.memoizedState;
              try {
                l.componentDidUpdate(
                  v,
                  o,
                  l.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (M) {
                Ze(u, u.return, M);
              }
            }
          (d & 64 && Rh(u), d & 512 && la(u, u.return));
          break;
        case 3:
          if ((qi(l, u), d & 64 && ((d = u.updateQueue), d !== null))) {
            if (((l = null), u.child !== null))
              switch (u.child.tag) {
                case 27:
                case 5:
                  l = ca(u.child.stateNode);
                  break;
                case 1:
                  l = u.child.stateNode;
              }
            try {
              Ql(d, l);
            } catch (M) {
              Ze(u, u.return, M);
            }
          }
          break;
        case 27:
          Kt && o === null && d & 4 && Dh(u);
        case 26:
        case 5:
          if ((qi(l, u), o === null)) {
            if (d & 4) Nh(u);
            else if (d & 64) {
              ((l = u.type), (o = u.memoizedProps), (v = u.stateNode));
              try {
                h0(v, l, o, u);
              } catch (M) {
                Ze(u, u.return, M);
              }
            }
          }
          d & 512 && la(u, u.return);
          break;
        case 12:
          qi(l, u);
          break;
        case 31:
          (qi(l, u), d & 4 && Hh(l, u));
          break;
        case 13:
          (qi(l, u),
            d & 4 && Bh(l, u),
            d & 64 &&
              ((d = u.memoizedState),
              d !== null &&
                ((d = d.dehydrated),
                d !== null && ((u = Zg.bind(null, u)), Xb(d, u)))));
          break;
        case 22:
          if (((d = u.memoizedState !== null || el), !d)) {
            ((o = (o !== null && o.memoizedState !== null) || Ft), (v = el));
            var g = Ft;
            ((el = d),
              (Ft = o) && !g
                ? Xi(l, u, (u.subtreeFlags & 8772) !== 0)
                : qi(l, u),
              (el = v),
              (Ft = g));
          }
          break;
        case 30:
          break;
        default:
          qi(l, u);
      }
    }
    function wh(l) {
      var o = l.alternate;
      (o !== null && ((l.alternate = null), wh(o)),
        (l.child = null),
        (l.deletions = null),
        (l.sibling = null),
        l.tag === 5 && ((o = l.stateNode), o !== null && vb(o)),
        (l.stateNode = null),
        (l.return = null),
        (l.dependencies = null),
        (l.memoizedProps = null),
        (l.memoizedState = null),
        (l.pendingProps = null),
        (l.stateNode = null),
        (l.updateQueue = null));
    }
    function si(l, o, u) {
      for (u = u.child; u !== null;) (Qu(l, o, u), (u = u.sibling));
    }
    function Qu(l, o, u) {
      if (Bn && typeof Bn.onCommitFiberUnmount === "function")
        try {
          Bn.onCommitFiberUnmount(ha, u);
        } catch (g) {}
      switch (u.tag) {
        case 26:
          if (ci) {
            (Ft || Ti(u, o),
              si(l, o, u),
              u.memoizedState
                ? zm(u.memoizedState)
                : u.stateNode && Pm(u.stateNode));
            break;
          }
        case 27:
          if (Kt) {
            Ft || Ti(u, o);
            var d = Pt,
              v = Tn;
            ($r(u.type) && ((Pt = u.stateNode), (Tn = !1)),
              si(l, o, u),
              km(u.stateNode),
              (Pt = d),
              (Tn = v));
            break;
          }
        case 5:
          Ft || Ti(u, o);
        case 6:
          if (cn) {
            if (
              ((d = Pt),
              (v = Tn),
              (Pt = null),
              si(l, o, u),
              (Pt = d),
              (Tn = v),
              Pt !== null)
            )
              if (Tn)
                try {
                  Pb(Pt, u.stateNode);
                } catch (g) {
                  Ze(u, o, g);
                }
              else
                try {
                  Fb(Pt, u.stateNode);
                } catch (g) {
                  Ze(u, o, g);
                }
          } else si(l, o, u);
          break;
        case 18:
          cn && Pt !== null && (Tn ? S0(Pt, u.stateNode) : b0(Pt, u.stateNode));
          break;
        case 4:
          cn
            ? ((d = Pt),
              (v = Tn),
              (Pt = u.stateNode.containerInfo),
              (Tn = !0),
              si(l, o, u),
              (Pt = d),
              (Tn = v))
            : (Ni && _h(u.stateNode, u, Tm()), si(l, o, u));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (xl(2, u, o), Ft || xl(4, u, o), si(l, o, u));
          break;
        case 1:
          (Ft ||
            (Ti(u, o),
            (d = u.stateNode),
            typeof d.componentWillUnmount === "function" && Th(u, o, d)),
            si(l, o, u));
          break;
        case 21:
          si(l, o, u);
          break;
        case 22:
          ((Ft = (d = Ft) || u.memoizedState !== null), si(l, o, u), (Ft = d));
          break;
        default:
          si(l, o, u);
      }
    }
    function Hh(l, o) {
      if (
        fn &&
        o.memoizedState === null &&
        ((l = o.alternate), l !== null && ((l = l.memoizedState), l !== null))
      ) {
        l = l.dehydrated;
        try {
          p0(l);
        } catch (u) {
          Ze(o, o.return, u);
        }
      }
    }
    function Bh(l, o) {
      if (
        fn &&
        o.memoizedState === null &&
        ((l = o.alternate),
        l !== null &&
          ((l = l.memoizedState),
          l !== null && ((l = l.dehydrated), l !== null)))
      )
        try {
          y0(l);
        } catch (u) {
          Ze(o, o.return, u);
        }
    }
    function jg(l) {
      switch (l.tag) {
        case 31:
        case 13:
        case 19:
          var o = l.stateNode;
          return (o === null && (o = l.stateNode = new $m()), o);
        case 22:
          return (
            (l = l.stateNode),
            (o = l._retryCache),
            o === null && (o = l._retryCache = new $m()),
            o
          );
        default:
          throw Error(f(435, l.tag));
      }
    }
    function ds(l, o) {
      var u = jg(l);
      o.forEach(function (d) {
        if (!u.has(d)) {
          u.add(d);
          var v = Ig.bind(null, l, d);
          d.then(v, v);
        }
      });
    }
    function un(l, o) {
      var u = o.deletions;
      if (u !== null)
        for (var d = 0; d < u.length; d++) {
          var v = u[d],
            g = l,
            M = o;
          if (cn) {
            var K = M;
            e: for (; K !== null;) {
              switch (K.tag) {
                case 27:
                  if (Kt) {
                    if ($r(K.type)) {
                      ((Pt = K.stateNode), (Tn = !1));
                      break e;
                    }
                    break;
                  }
                case 5:
                  ((Pt = K.stateNode), (Tn = !1));
                  break e;
                case 3:
                case 4:
                  ((Pt = K.stateNode.containerInfo), (Tn = !0));
                  break e;
              }
              K = K.return;
            }
            if (Pt === null) throw Error(f(160));
            (Qu(g, M, v), (Pt = null), (Tn = !1));
          } else Qu(g, M, v);
          ((g = v.alternate),
            g !== null && (g.return = null),
            (v.return = null));
        }
      if (o.subtreeFlags & 13886)
        for (o = o.child; o !== null;) (Lh(o, l), (o = o.sibling));
    }
    function Lh(l, o) {
      var u = l.alternate,
        d = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (un(o, l),
            vn(l),
            d & 4 && (xl(3, l, l.return), ia(3, l), xl(5, l, l.return)));
          break;
        case 1:
          (un(o, l),
            vn(l),
            d & 512 && (Ft || u === null || Ti(u, u.return)),
            d & 64 &&
              el &&
              ((l = l.updateQueue),
              l !== null &&
                ((d = l.callbacks),
                d !== null &&
                  ((u = l.shared.hiddenCallbacks),
                  (l.shared.hiddenCallbacks = u === null ? d : u.concat(d))))));
          break;
        case 26:
          if (ci) {
            var v = fi;
            if (
              (un(o, l),
              vn(l),
              d & 512 && (Ft || u === null || Ti(u, u.return)),
              d & 4)
            ) {
              d = u !== null ? u.memoizedState : null;
              var g = l.memoizedState;
              u === null
                ? g === null
                  ? l.stateNode === null
                    ? (l.stateNode = R0(v, l.type, l.memoizedProps, l))
                    : Um(v, l.type, l.stateNode)
                  : (l.stateNode = Lm(v, g, l.memoizedProps))
                : d !== g
                  ? (d === null
                      ? u.stateNode !== null && Pm(u.stateNode)
                      : zm(d),
                    g === null
                      ? Um(v, l.type, l.stateNode)
                      : Lm(v, g, l.memoizedProps))
                  : g === null &&
                    l.stateNode !== null &&
                    Vu(l, l.memoizedProps, u.memoizedProps);
            }
            break;
          }
        case 27:
          if (Kt) {
            (un(o, l),
              vn(l),
              d & 512 && (Ft || u === null || Ti(u, u.return)),
              u !== null && d & 4 && Vu(l, l.memoizedProps, u.memoizedProps));
            break;
          }
        case 5:
          if (
            (un(o, l),
            vn(l),
            d & 512 && (Ft || u === null || Ti(u, u.return)),
            cn)
          ) {
            if (l.flags & 32) {
              v = l.stateNode;
              try {
                Rm(v);
              } catch (me) {
                Ze(l, l.return, me);
              }
            }
            (d & 4 &&
              l.stateNode != null &&
              ((v = l.memoizedProps),
              Vu(l, v, u !== null ? u.memoizedProps : v)),
              d & 1024 && (Uc = !0));
          } else
            Ni && l.alternate !== null && (l.alternate.stateNode = l.stateNode);
          break;
        case 6:
          if ((un(o, l), vn(l), d & 4 && cn)) {
            if (l.stateNode === null) throw Error(f(162));
            ((d = l.memoizedProps),
              (u = u !== null ? u.memoizedProps : d),
              (v = l.stateNode));
            try {
              Hb(v, u, d);
            } catch (me) {
              Ze(l, l.return, me);
            }
          }
          break;
        case 3:
          if (
            (ci
              ? (N0(), (v = fi), (fi = Sc(o.containerInfo)), un(o, l), (fi = v))
              : un(o, l),
            vn(l),
            d & 4)
          ) {
            if (cn && fn && u !== null && u.memoizedState.isDehydrated)
              try {
                m0(o.containerInfo);
              } catch (me) {
                Ze(l, l.return, me);
              }
            if (Ni) {
              ((d = o.containerInfo), (u = o.pendingChildren));
              try {
                Am(d, u);
              } catch (me) {
                Ze(l, l.return, me);
              }
            }
          }
          Uc && ((Uc = !1), zh(l));
          break;
        case 4:
          (ci
            ? ((u = fi),
              (fi = Sc(l.stateNode.containerInfo)),
              un(o, l),
              vn(l),
              (fi = u))
            : (un(o, l), vn(l)),
            d & 4 && Ni && _h(l.stateNode, l, l.stateNode.pendingChildren));
          break;
        case 12:
          (un(o, l), vn(l));
          break;
        case 31:
          (un(o, l),
            vn(l),
            d & 4 &&
              ((d = l.updateQueue),
              d !== null && ((l.updateQueue = null), ds(l, d))));
          break;
        case 13:
          (un(o, l),
            vn(l),
            l.child.flags & 8192 &&
              (l.memoizedState !== null) !==
                (u !== null && u.memoizedState !== null) &&
              (Ys = Rn()),
            d & 4 &&
              ((d = l.updateQueue),
              d !== null && ((l.updateQueue = null), ds(l, d))));
          break;
        case 22:
          v = l.memoizedState !== null;
          var M = u !== null && u.memoizedState !== null,
            K = el,
            ne = Ft;
          if (
            ((el = K || v),
            (Ft = ne || M),
            un(o, l),
            (Ft = ne),
            (el = K),
            vn(l),
            d & 8192 &&
              ((o = l.stateNode),
              (o._visibility = v ? o._visibility & -2 : o._visibility | 1),
              v && (u === null || M || el || Ft || ar(l)),
              cn))
          ) {
            e: if (((u = null), cn))
              for (o = l; ;) {
                if (o.tag === 5 || (ci && o.tag === 26)) {
                  if (u === null) {
                    M = u = o;
                    try {
                      ((g = M.stateNode),
                        v ? Yb(g) : kb(M.stateNode, M.memoizedProps));
                    } catch (me) {
                      Ze(M, M.return, me);
                    }
                  }
                } else if (o.tag === 6) {
                  if (u === null) {
                    M = o;
                    try {
                      var ae = M.stateNode;
                      v ? Kb(ae) : Gb(ae, M.memoizedProps);
                    } catch (me) {
                      Ze(M, M.return, me);
                    }
                  }
                } else if (o.tag === 18) {
                  if (u === null) {
                    M = o;
                    try {
                      var be = M.stateNode;
                      v ? E0(be) : x0(M.stateNode);
                    } catch (me) {
                      Ze(M, M.return, me);
                    }
                  }
                } else if (
                  ((o.tag !== 22 && o.tag !== 23) ||
                    o.memoizedState === null ||
                    o === l) &&
                  o.child !== null
                ) {
                  ((o.child.return = o), (o = o.child));
                  continue;
                }
                if (o === l) break e;
                for (; o.sibling === null;) {
                  if (o.return === null || o.return === l) break e;
                  (u === o && (u = null), (o = o.return));
                }
                (u === o && (u = null),
                  (o.sibling.return = o.return),
                  (o = o.sibling));
              }
          }
          d & 4 &&
            ((d = l.updateQueue),
            d !== null &&
              ((u = d.retryQueue),
              u !== null && ((d.retryQueue = null), ds(l, u))));
          break;
        case 19:
          (un(o, l),
            vn(l),
            d & 4 &&
              ((d = l.updateQueue),
              d !== null && ((l.updateQueue = null), ds(l, d))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (un(o, l), vn(l));
      }
    }
    function vn(l) {
      var o = l.flags;
      if (o & 2) {
        try {
          for (var u, d = l.return; d !== null;) {
            if (Ah(d)) {
              u = d;
              break;
            }
            d = d.return;
          }
          if (cn) {
            if (u == null) throw Error(f(160));
            switch (u.tag) {
              case 27:
                if (Kt) {
                  var v = u.stateNode,
                    g = qu(l);
                  fs(l, g, v);
                  break;
                }
              case 5:
                var M = u.stateNode;
                u.flags & 32 && (Rm(M), (u.flags &= -33));
                var K = qu(l);
                fs(l, K, M);
                break;
              case 3:
              case 4:
                var ne = u.stateNode.containerInfo,
                  ae = qu(l);
                Xu(l, ae, ne);
                break;
              default:
                throw Error(f(161));
            }
          }
        } catch (be) {
          Ze(l, l.return, be);
        }
        l.flags &= -3;
      }
      o & 4096 && (l.flags &= -4097);
    }
    function zh(l) {
      if (l.subtreeFlags & 1024)
        for (l = l.child; l !== null;) {
          var o = l;
          (zh(o),
            o.tag === 5 && o.flags & 1024 && xb(o.stateNode),
            (l = l.sibling));
        }
    }
    function qi(l, o) {
      if (o.subtreeFlags & 8772)
        for (o = o.child; o !== null;) (Oh(l, o.alternate, o), (o = o.sibling));
    }
    function ar(l) {
      for (l = l.child; l !== null;) {
        var o = l;
        switch (o.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (xl(4, o, o.return), ar(o));
            break;
          case 1:
            Ti(o, o.return);
            var u = o.stateNode;
            (typeof u.componentWillUnmount === "function" && Th(o, o.return, u),
              ar(o));
            break;
          case 27:
            Kt && km(o.stateNode);
          case 26:
          case 5:
            (Ti(o, o.return), ar(o));
            break;
          case 22:
            o.memoizedState === null && ar(o);
            break;
          case 30:
            ar(o);
            break;
          default:
            ar(o);
        }
        l = l.sibling;
      }
    }
    function Xi(l, o, u) {
      u = u && (o.subtreeFlags & 8772) !== 0;
      for (o = o.child; o !== null;) {
        var d = o.alternate,
          v = l,
          g = o,
          M = g.flags;
        switch (g.tag) {
          case 0:
          case 11:
          case 15:
            (Xi(v, g, u), ia(4, g));
            break;
          case 1:
            if (
              (Xi(v, g, u),
              (d = g),
              (v = d.stateNode),
              typeof v.componentDidMount === "function")
            )
              try {
                v.componentDidMount();
              } catch (ae) {
                Ze(d, d.return, ae);
              }
            if (((d = g), (v = d.updateQueue), v !== null)) {
              var K = d.stateNode;
              try {
                var ne = v.shared.hiddenCallbacks;
                if (ne !== null)
                  for (
                    v.shared.hiddenCallbacks = null, v = 0;
                    v < ne.length;
                    v++
                  )
                    Yo(ne[v], K);
              } catch (ae) {
                Ze(d, d.return, ae);
              }
            }
            (u && M & 64 && Rh(g), la(g, g.return));
            break;
          case 27:
            Kt && Dh(g);
          case 26:
          case 5:
            (Xi(v, g, u), u && d === null && M & 4 && Nh(g), la(g, g.return));
            break;
          case 12:
            Xi(v, g, u);
            break;
          case 31:
            (Xi(v, g, u), u && M & 4 && Hh(v, g));
            break;
          case 13:
            (Xi(v, g, u), u && M & 4 && Bh(v, g));
            break;
          case 22:
            (g.memoizedState === null && Xi(v, g, u), la(g, g.return));
            break;
          case 30:
            break;
          default:
            Xi(v, g, u);
        }
        o = o.sibling;
      }
    }
    function Zu(l, o) {
      var u = null;
      (l !== null &&
        l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (u = l.memoizedState.cachePool.pool),
        (l = null),
        o.memoizedState !== null &&
          o.memoizedState.cachePool !== null &&
          (l = o.memoizedState.cachePool.pool),
        l !== u && (l != null && l.refCount++, u != null && rt(u)));
    }
    function Iu(l, o) {
      ((l = null),
        o.alternate !== null && (l = o.alternate.memoizedState.cache),
        (o = o.memoizedState.cache),
        o !== l && (o.refCount++, l != null && rt(l)));
    }
    function ui(l, o, u, d) {
      if (o.subtreeFlags & 10256)
        for (o = o.child; o !== null;) (Uh(l, o, u, d), (o = o.sibling));
    }
    function Uh(l, o, u, d) {
      var v = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (ui(l, o, u, d), v & 2048 && ia(9, o));
          break;
        case 1:
          ui(l, o, u, d);
          break;
        case 3:
          (ui(l, o, u, d),
            v & 2048 &&
              ((l = null),
              o.alternate !== null && (l = o.alternate.memoizedState.cache),
              (o = o.memoizedState.cache),
              o !== l && (o.refCount++, l != null && rt(l))));
          break;
        case 12:
          if (v & 2048) {
            (ui(l, o, u, d), (l = o.stateNode));
            try {
              var g = o.memoizedProps,
                M = g.id,
                K = g.onPostCommit;
              typeof K === "function" &&
                K(
                  M,
                  o.alternate === null ? "mount" : "update",
                  l.passiveEffectDuration,
                  -0,
                );
            } catch (ne) {
              Ze(o, o.return, ne);
            }
          } else ui(l, o, u, d);
          break;
        case 31:
          ui(l, o, u, d);
          break;
        case 13:
          ui(l, o, u, d);
          break;
        case 23:
          break;
        case 22:
          ((g = o.stateNode),
            (M = o.alternate),
            o.memoizedState !== null
              ? g._visibility & 2
                ? ui(l, o, u, d)
                : ra(l, o)
              : g._visibility & 2
                ? ui(l, o, u, d)
                : ((g._visibility |= 2),
                  qr(l, o, u, d, (o.subtreeFlags & 10256) !== 0 || !1)),
            v & 2048 && Zu(M, o));
          break;
        case 24:
          (ui(l, o, u, d), v & 2048 && Iu(o.alternate, o));
          break;
        default:
          ui(l, o, u, d);
      }
    }
    function qr(l, o, u, d, v) {
      v = v && ((o.subtreeFlags & 10256) !== 0 || !1);
      for (o = o.child; o !== null;) {
        var g = l,
          M = o,
          K = u,
          ne = d,
          ae = M.flags;
        switch (M.tag) {
          case 0:
          case 11:
          case 15:
            (qr(g, M, K, ne, v), ia(8, M));
            break;
          case 23:
            break;
          case 22:
            var be = M.stateNode;
            (M.memoizedState !== null
              ? be._visibility & 2
                ? qr(g, M, K, ne, v)
                : ra(g, M)
              : ((be._visibility |= 2), qr(g, M, K, ne, v)),
              v && ae & 2048 && Zu(M.alternate, M));
            break;
          case 24:
            (qr(g, M, K, ne, v), v && ae & 2048 && Iu(M.alternate, M));
            break;
          default:
            qr(g, M, K, ne, v);
        }
        o = o.sibling;
      }
    }
    function ra(l, o) {
      if (o.subtreeFlags & 10256)
        for (o = o.child; o !== null;) {
          var u = l,
            d = o,
            v = d.flags;
          switch (d.tag) {
            case 22:
              (ra(u, d), v & 2048 && Zu(d.alternate, d));
              break;
            case 24:
              (ra(u, d), v & 2048 && Iu(d.alternate, d));
              break;
            default:
              ra(u, d);
          }
          o = o.sibling;
        }
    }
    function sr(l, o, u) {
      if (l.subtreeFlags & yo)
        for (l = l.child; l !== null;) (Fh(l, o, u), (l = l.sibling));
    }
    function Fh(l, o, u) {
      switch (l.tag) {
        case 26:
          if ((sr(l, o, u), l.flags & yo))
            if (l.memoizedState !== null)
              _0(u, fi, l.memoizedState, l.memoizedProps);
            else {
              var d = l.stateNode,
                v = l.type;
              ((l = l.memoizedProps),
                ((o & 335544128) === o || vc(v, l)) && Mm(u, d, v, l));
            }
          break;
        case 5:
          (sr(l, o, u),
            l.flags & yo &&
              ((d = l.stateNode),
              (v = l.type),
              (l = l.memoizedProps),
              ((o & 335544128) === o || vc(v, l)) && Mm(u, d, v, l)));
          break;
        case 3:
        case 4:
          ci
            ? ((d = fi),
              (fi = Sc(l.stateNode.containerInfo)),
              sr(l, o, u),
              (fi = d))
            : sr(l, o, u);
          break;
        case 22:
          l.memoizedState === null &&
            ((d = l.alternate),
            d !== null && d.memoizedState !== null
              ? ((d = yo), (yo = 16777216), sr(l, o, u), (yo = d))
              : sr(l, o, u));
          break;
        default:
          sr(l, o, u);
      }
    }
    function Ph(l) {
      var o = l.alternate;
      if (o !== null && ((l = o.child), l !== null)) {
        o.child = null;
        do ((o = l.sibling), (l.sibling = null), (l = o));
        while (l !== null);
      }
    }
    function aa(l) {
      var o = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (o !== null)
          for (var u = 0; u < o.length; u++) {
            var d = o[u];
            ((jt = d), Kh(d, l));
          }
        Ph(l);
      }
      if (l.subtreeFlags & 10256)
        for (l = l.child; l !== null;) (Yh(l), (l = l.sibling));
    }
    function Yh(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          (aa(l), l.flags & 2048 && xl(9, l, l.return));
          break;
        case 3:
          aa(l);
          break;
        case 12:
          aa(l);
          break;
        case 22:
          var o = l.stateNode;
          l.memoizedState !== null &&
          o._visibility & 2 &&
          (l.return === null || l.return.tag !== 13)
            ? ((o._visibility &= -3), hs(l))
            : aa(l);
          break;
        default:
          aa(l);
      }
    }
    function hs(l) {
      var o = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (o !== null)
          for (var u = 0; u < o.length; u++) {
            var d = o[u];
            ((jt = d), Kh(d, l));
          }
        Ph(l);
      }
      for (l = l.child; l !== null;) {
        switch (((o = l), o.tag)) {
          case 0:
          case 11:
          case 15:
            (xl(8, o, o.return), hs(o));
            break;
          case 22:
            ((u = o.stateNode),
              u._visibility & 2 && ((u._visibility &= -3), hs(o)));
            break;
          default:
            hs(o);
        }
        l = l.sibling;
      }
    }
    function Kh(l, o) {
      for (; jt !== null;) {
        var u = jt;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            xl(8, u, o);
            break;
          case 23:
          case 22:
            if (
              u.memoizedState !== null &&
              u.memoizedState.cachePool !== null
            ) {
              var d = u.memoizedState.cachePool.pool;
              d != null && d.refCount++;
            }
            break;
          case 24:
            rt(u.memoizedState.cache);
        }
        if (((d = u.child), d !== null)) ((d.return = u), (jt = d));
        else
          e: for (u = l; jt !== null;) {
            d = jt;
            var v = d.sibling,
              g = d.return;
            if ((wh(d), d === u)) {
              jt = null;
              break e;
            }
            if (v !== null) {
              ((v.return = g), (jt = v));
              break e;
            }
            jt = g;
          }
      }
    }
    function Ju(l) {
      var o = hb(l);
      if (o != null) {
        if (typeof o.memoizedProps["data-testname"] !== "string")
          throw Error(f(364));
        return o;
      }
      if (((l = Rb(l)), l === null)) throw Error(f(362));
      return l.stateNode.current;
    }
    function $u(l, o) {
      var u = l.tag;
      switch (o.$$typeof) {
        case Ls:
          if (l.type === o.value) return !0;
          break;
        case zs:
          e: {
            ((o = o.value), (l = [l, 0]));
            for (u = 0; u < l.length;) {
              var d = l[u++],
                v = d.tag,
                g = l[u++],
                M = o[g];
              if ((v !== 5 && v !== 26 && v !== 27) || !da(d)) {
                for (; M != null && $u(d, M);) (g++, (M = o[g]));
                if (g === o.length) {
                  o = !0;
                  break e;
                } else
                  for (d = d.child; d !== null;)
                    (l.push(d, g), (d = d.sibling));
              }
            }
            o = !1;
          }
          return o;
        case Us:
          if ((u === 5 || u === 26 || u === 27) && Ab(l.stateNode, o.value))
            return !0;
          break;
        case Ps:
          if (u === 5 || u === 6 || u === 26 || u === 27) {
            if (((l = Nb(l)), l !== null && 0 <= l.indexOf(o.value))) return !0;
          }
          break;
        case Fs:
          if (u === 5 || u === 26 || u === 27) {
            if (
              ((l = l.memoizedProps["data-testname"]),
              typeof l === "string" &&
                l.toLowerCase() === o.value.toLowerCase())
            )
              return !0;
          }
          break;
        default:
          throw Error(f(365));
      }
      return !1;
    }
    function ec(l) {
      switch (l.$$typeof) {
        case Ls:
          return "<" + (C(l.value) || "Unknown") + ">";
        case zs:
          return ":has(" + (ec(l) || "") + ")";
        case Us:
          return '[role="' + l.value + '"]';
        case Ps:
          return '"' + l.value + '"';
        case Fs:
          return '[data-testname="' + l.value + '"]';
        default:
          throw Error(f(365));
      }
    }
    function kh(l, o) {
      var u = [];
      l = [l, 0];
      for (var d = 0; d < l.length;) {
        var v = l[d++],
          g = v.tag,
          M = l[d++],
          K = o[M];
        if ((g !== 5 && g !== 26 && g !== 27) || !da(v)) {
          for (; K != null && $u(v, K);) (M++, (K = o[M]));
          if (M === o.length) u.push(v);
          else for (v = v.child; v !== null;) (l.push(v, M), (v = v.sibling));
        }
      }
      return u;
    }
    function tc(l, o) {
      if (!fa) throw Error(f(363));
      ((l = Ju(l)), (l = kh(l, o)), (o = []), (l = Array.from(l)));
      for (var u = 0; u < l.length;) {
        var d = l[u++],
          v = d.tag;
        if (v === 5 || v === 26 || v === 27) da(d) || o.push(d.stateNode);
        else for (d = d.child; d !== null;) (l.push(d), (d = d.sibling));
      }
      return o;
    }
    function wn() {
      return (je & 2) !== 0 && qe !== 0
        ? qe & -qe
        : Oe.T !== null
          ? Et()
          : pb();
    }
    function Gh() {
      if (Fn === 0)
        if ((qe & 536870912) === 0 || Xe) {
          var l = Es;
          ((Es <<= 1), (Es & 3932160) === 0 && (Es = 262144), (Fn = l));
        } else Fn = 536870912;
      return ((l = zn.current), l !== null && (l.flags |= 32), Fn);
    }
    function Mn(l, o, u) {
      if (
        (l === ft && (lt === 2 || lt === 9)) ||
        l.cancelPendingCommit !== null
      )
        (Xr(l, 0), Cl(l, qe, Fn, !1));
      if ((k(l, u), (je & 2) === 0 || l !== ft))
        (l === ft &&
          ((je & 2) === 0 && (gr |= u), Dt === 4 && Cl(l, qe, Fn, !1)),
          Ne(l));
    }
    function jh(l, o, u) {
      if ((je & 6) !== 0) throw Error(f(327));
      var d = (!u && (o & 127) === 0 && (o & l.expiredLanes) === 0) || W(l, o),
        v = d ? qg(l, o) : ic(l, o, !0),
        g = d;
      do {
        if (v === 0) {
          vo && !d && Cl(l, o, 0, !1);
          break;
        } else {
          if (((u = l.current.alternate), g && !Wg(u))) {
            ((v = ic(l, o, !1)), (g = !1));
            continue;
          }
          if (v === 2) {
            if (((g = o), l.errorRecoveryDisabledLanes & g)) var M = 0;
            else
              ((M = l.pendingLanes & -536870913),
                (M = M !== 0 ? M : M & 536870912 ? 536870912 : 0));
            if (M !== 0) {
              o = M;
              e: {
                var K = l;
                v = xa;
                var ne = fn && K.current.memoizedState.isDehydrated;
                if (
                  (ne && (Xr(K, M).flags |= 256), (M = ic(K, M, !1)), M !== 2)
                ) {
                  if (Fc && !ne) {
                    ((K.errorRecoveryDisabledLanes |= g), (gr |= g), (v = 4));
                    break e;
                  }
                  ((g = Nn),
                    (Nn = v),
                    g !== null &&
                      (Nn === null ? (Nn = g) : Nn.push.apply(Nn, g)));
                }
                v = M;
              }
              if (((g = !1), v !== 2)) continue;
            }
          }
          if (v === 1) {
            (Xr(l, 0), Cl(l, o, 0, !0));
            break;
          }
          e: {
            switch (((d = l), (g = v), g)) {
              case 0:
              case 1:
                throw Error(f(345));
              case 4:
                if ((o & 4194048) !== o) break;
              case 6:
                Cl(d, o, Fn, !Dl);
                break e;
              case 2:
                Nn = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(f(329));
            }
            if ((o & 62914560) === o && ((v = Ys + 0 - Rn()), 10 < v)) {
              if ((Cl(d, o, Fn, !Dl), z(d, 0, !0) !== 0)) break e;
              ((nl = o),
                (d.timeoutHandle = fb(
                  Wh.bind(
                    null,
                    d,
                    u,
                    Nn,
                    Ks,
                    Yc,
                    o,
                    Fn,
                    gr,
                    go,
                    Dl,
                    g,
                    "Throttled",
                    -0,
                    0,
                  ),
                  v,
                )));
              break e;
            }
            Wh(d, u, Nn, Ks, Yc, o, Fn, gr, go, Dl, g, null, -0, 0);
          }
        }
        break;
      } while (1);
      Ne(l);
    }
    function Wh(l, o, u, d, v, g, M, K, ne, ae, be, me, xe, ze) {
      if (
        ((l.timeoutHandle = cr),
        (me = o.subtreeFlags),
        me & 8192 || (me & 16785408) === 16785408)
      ) {
        ((me = Sb()), Fh(o, g, me));
        var $t =
          (g & 62914560) === g
            ? Ys - Rn()
            : (g & 4194048) === g
              ? ep - Rn()
              : 0;
        if ((($t = Eb(me, $t)), $t !== null)) {
          ((nl = g),
            (l.cancelPendingCommit = $t(
              em.bind(null, l, o, g, u, d, v, M, K, ne, be, me, null, xe, ze),
            )),
            Cl(l, g, M, !ae));
          return;
        }
      }
      em(l, o, g, u, d, v, M, K, ne);
    }
    function Wg(l) {
      for (var o = l; ;) {
        var u = o.tag;
        if (
          (u === 0 || u === 11 || u === 15) &&
          o.flags & 16384 &&
          ((u = o.updateQueue), u !== null && ((u = u.stores), u !== null))
        )
          for (var d = 0; d < u.length; d++) {
            var v = u[d],
              g = v.getSnapshot;
            v = v.value;
            try {
              if (!Ln(g(), v)) return !1;
            } catch (M) {
              return !1;
            }
          }
        if (((u = o.child), o.subtreeFlags & 16384 && u !== null))
          ((u.return = o), (o = u));
        else {
          if (o === l) break;
          for (; o.sibling === null;) {
            if (o.return === null || o.return === l) return !0;
            o = o.return;
          }
          ((o.sibling.return = o.return), (o = o.sibling));
        }
      }
      return !0;
    }
    function Cl(l, o, u, d) {
      ((o &= ~Pc),
        (o &= ~gr),
        (l.suspendedLanes |= o),
        (l.pingedLanes &= ~o),
        d && (l.warmLanes |= o),
        (d = l.expirationTimes));
      for (var v = o; 0 < v;) {
        var g = 31 - Hn(v),
          M = 1 << g;
        ((d[g] = -1), (v &= ~M));
      }
      u !== 0 && J(l, u, o);
    }
    function Vh() {
      return (je & 6) === 0 ? (Ke(0, !1), !1) : !0;
    }
    function nc() {
      if (We !== null) {
        if (lt === 0) var l = We.return;
        else
          ((l = We), (Ji = dr = null), Jl(l), (uo = null), (va = 0), (l = We));
        for (; l !== null;) (Mh(l.alternate, l), (l = l.return));
        We = null;
      }
    }
    function Xr(l, o) {
      var u = l.timeoutHandle;
      (u !== cr && ((l.timeoutHandle = cr), db(u)),
        (u = l.cancelPendingCommit),
        u !== null && ((l.cancelPendingCommit = null), u()),
        (nl = 0),
        nc(),
        (ft = l),
        (We = u = Qi(l.current, null)),
        (qe = o),
        (lt = 0),
        (Un = null),
        (Dl = !1),
        (vo = W(l, o)),
        (Fc = !1),
        (go = Fn = Pc = gr = wl = Dt = 0),
        (Nn = xa = null),
        (Yc = !1),
        (o & 8) !== 0 && (o |= o & 32));
      var d = l.entangledLanes;
      if (d !== 0)
        for (l = l.entanglements, d &= o; 0 < d;) {
          var v = 31 - Hn(d),
            g = 1 << v;
          ((o |= l[v]), (d &= ~g));
        }
      return ((tl = o), Yn(), u);
    }
    function qh(l, o) {
      ((Ye = null),
        (Oe.H = Sa),
        o === so || o === _s
          ? ((o = bn()), (lt = 3))
          : o === Dc
            ? ((o = bn()), (lt = 4))
            : (lt =
                o === Lc
                  ? 8
                  : o !== null &&
                      typeof o === "object" &&
                      typeof o.then === "function"
                    ? 6
                    : 1),
        (Un = o),
        We === null && ((Dt = 1), ls(l, Se(o, l.current))));
    }
    function Xh() {
      var l = zn.current;
      return l === null
        ? !0
        : (qe & 4194048) === qe
          ? Vn === null
            ? !0
            : !1
          : (qe & 62914560) === qe || (qe & 536870912) !== 0
            ? l === Vn
            : !1;
    }
    function Qh() {
      var l = Oe.H;
      return ((Oe.H = Sa), l === null ? Sa : l);
    }
    function Zh() {
      var l = Oe.A;
      return ((Oe.A = j0), l);
    }
    function ms() {
      ((Dt = 4),
        Dl || ((qe & 4194048) !== qe && zn.current !== null) || (vo = !0),
        ((wl & 134217727) === 0 && (gr & 134217727) === 0) ||
          ft === null ||
          Cl(ft, qe, Fn, !1));
    }
    function ic(l, o, u) {
      var d = je;
      je |= 2;
      var v = Qh(),
        g = Zh();
      if (ft !== l || qe !== o) ((Ks = null), Xr(l, o));
      o = !1;
      var M = Dt;
      e: do
        try {
          if (lt !== 0 && We !== null) {
            var K = We,
              ne = Un;
            switch (lt) {
              case 8:
                (nc(), (M = 6));
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                zn.current === null && (o = !0);
                var ae = lt;
                if (((lt = 0), (Un = null), Qr(l, K, ne, ae), u && vo)) {
                  M = 0;
                  break e;
                }
                break;
              default:
                ((ae = lt), (lt = 0), (Un = null), Qr(l, K, ne, ae));
            }
          }
          (Vg(), (M = Dt));
          break;
        } catch (be) {
          qh(l, be);
        }
      while (1);
      return (
        o && l.shellSuspendCounter++,
        (Ji = dr = null),
        (je = d),
        (Oe.H = v),
        (Oe.A = g),
        We === null && ((ft = null), (qe = 0), Yn()),
        M
      );
    }
    function Vg() {
      for (; We !== null;) Ih(We);
    }
    function qg(l, o) {
      var u = je;
      je |= 2;
      var d = Qh(),
        v = Zh();
      ft !== l || qe !== o
        ? ((Ks = null), (Ca = Rn() + 500), Xr(l, o))
        : (vo = W(l, o));
      e: do
        try {
          if (lt !== 0 && We !== null) {
            o = We;
            var g = Un;
            t: switch (lt) {
              case 1:
                ((lt = 0), (Un = null), Qr(l, o, g, 1));
                break;
              case 2:
              case 9:
                if (gi(g)) {
                  ((lt = 0), (Un = null), Jh(o));
                  break;
                }
                ((o = function () {
                  ((lt !== 2 && lt !== 9) || ft !== l || (lt = 7), Ne(l));
                }),
                  g.then(o, o));
                break e;
              case 3:
                lt = 7;
                break e;
              case 4:
                lt = 5;
                break e;
              case 7:
                gi(g)
                  ? ((lt = 0), (Un = null), Jh(o))
                  : ((lt = 0), (Un = null), Qr(l, o, g, 7));
                break;
              case 5:
                var M = null;
                switch (We.tag) {
                  case 26:
                    M = We.memoizedState;
                  case 5:
                  case 27:
                    var K = We,
                      { type: ne, pendingProps: ae } = K;
                    if (M ? Ym(M) : Cm(K.stateNode, ne, ae)) {
                      ((lt = 0), (Un = null));
                      var be = K.sibling;
                      if (be !== null) We = be;
                      else {
                        var me = K.return;
                        me !== null ? ((We = me), ps(me)) : (We = null);
                      }
                      break t;
                    }
                }
                ((lt = 0), (Un = null), Qr(l, o, g, 5));
                break;
              case 6:
                ((lt = 0), (Un = null), Qr(l, o, g, 6));
                break;
              case 8:
                (nc(), (Dt = 6));
                break e;
              default:
                throw Error(f(462));
            }
          }
          Xg();
          break;
        } catch (xe) {
          qh(l, xe);
        }
      while (1);
      if (((Ji = dr = null), (Oe.H = d), (Oe.A = v), (je = u), We !== null))
        return 0;
      return ((ft = null), (qe = 0), Yn(), Dt);
    }
    function Xg() {
      for (; We !== null && !H0();) Ih(We);
    }
    function Ih(l) {
      var o = bh(l.alternate, l, tl);
      ((l.memoizedProps = l.pendingProps), o === null ? ps(l) : (We = o));
    }
    function Jh(l) {
      var o = l,
        u = o.alternate;
      switch (o.tag) {
        case 15:
        case 0:
          o = hh(u, o, o.pendingProps, o.type, void 0, qe);
          break;
        case 11:
          o = hh(u, o, o.pendingProps, o.type.render, o.ref, qe);
          break;
        case 5:
          Jl(o);
        default:
          (Mh(u, o), (o = We = um(o, tl)), (o = bh(u, o, tl)));
      }
      ((l.memoizedProps = l.pendingProps), o === null ? ps(l) : (We = o));
    }
    function Qr(l, o, u, d) {
      ((Ji = dr = null), Jl(o), (uo = null), (va = 0));
      var v = o.return;
      try {
        if (Ug(l, v, o, u, qe)) {
          ((Dt = 1), ls(l, Se(u, l.current)), (We = null));
          return;
        }
      } catch (g) {
        if (v !== null) throw ((We = v), g);
        ((Dt = 1), ls(l, Se(u, l.current)), (We = null));
        return;
      }
      if (o.flags & 32768) {
        if (Xe || d === 1) l = !0;
        else if (vo || (qe & 536870912) !== 0) l = !1;
        else if (((Dl = l = !0), d === 2 || d === 9 || d === 3 || d === 6))
          ((d = zn.current), d !== null && d.tag === 13 && (d.flags |= 16384));
        $h(o, l);
      } else ps(o);
    }
    function ps(l) {
      var o = l;
      do {
        if ((o.flags & 32768) !== 0) {
          $h(o, Dl);
          return;
        }
        l = o.return;
        var u = Kg(o.alternate, o, tl);
        if (u !== null) {
          We = u;
          return;
        }
        if (((o = o.sibling), o !== null)) {
          We = o;
          return;
        }
        We = o = l;
      } while (o !== null);
      Dt === 0 && (Dt = 5);
    }
    function $h(l, o) {
      do {
        var u = kg(l.alternate, l);
        if (u !== null) {
          ((u.flags &= 32767), (We = u));
          return;
        }
        if (
          ((u = l.return),
          u !== null &&
            ((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
          !o && ((l = l.sibling), l !== null))
        ) {
          We = l;
          return;
        }
        We = l = u;
      } while (l !== null);
      ((Dt = 6), (We = null));
    }
    function em(l, o, u, d, v, g, M, K, ne) {
      l.cancelPendingCommit = null;
      do ua();
      while (kt !== 0);
      if ((je & 6) !== 0) throw Error(f(327));
      if (o !== null) {
        if (o === l.current) throw Error(f(177));
        if (
          ((g = o.lanes | o.childLanes),
          (g |= Oc),
          Z(l, u, g, M, K, ne),
          l === ft && ((We = ft = null), (qe = 0)),
          (bo = o),
          (Bl = l),
          (nl = u),
          (Kc = g),
          (kc = v),
          (tp = d),
          (o.subtreeFlags & 10256) !== 0 || (o.flags & 10256) !== 0
            ? ((l.callbackNode = null),
              (l.callbackPriority = 0),
              Jg(Cc, function () {
                return (rm(), null);
              }))
            : ((l.callbackNode = null), (l.callbackPriority = 0)),
          (d = (o.flags & 13878) !== 0),
          (o.subtreeFlags & 13878) !== 0 || d)
        ) {
          ((d = Oe.T), (Oe.T = null), (v = Ii()), Gt(2), (M = je), (je |= 4));
          try {
            Gg(l, o, u);
          } finally {
            ((je = M), Gt(v), (Oe.T = d));
          }
        }
        ((kt = 1), tm(), nm(), im());
      }
    }
    function tm() {
      if (kt === 1) {
        kt = 0;
        var l = Bl,
          o = bo,
          u = (o.flags & 13878) !== 0;
        if ((o.subtreeFlags & 13878) !== 0 || u) {
          ((u = Oe.T), (Oe.T = null));
          var d = Ii();
          Gt(2);
          var v = je;
          je |= 4;
          try {
            (Lh(o, l), ub(l.containerInfo));
          } finally {
            ((je = v), Gt(d), (Oe.T = u));
          }
        }
        ((l.current = o), (kt = 2));
      }
    }
    function nm() {
      if (kt === 2) {
        kt = 0;
        var l = Bl,
          o = bo,
          u = (o.flags & 8772) !== 0;
        if ((o.subtreeFlags & 8772) !== 0 || u) {
          ((u = Oe.T), (Oe.T = null));
          var d = Ii();
          Gt(2);
          var v = je;
          je |= 4;
          try {
            Oh(l, o.alternate, o);
          } finally {
            ((je = v), Gt(d), (Oe.T = u));
          }
        }
        kt = 3;
      }
    }
    function im() {
      if (kt === 4 || kt === 3) {
        ((kt = 0), B0());
        var l = Bl,
          o = bo,
          u = nl,
          d = tp;
        (o.subtreeFlags & 10256) !== 0 || (o.flags & 10256) !== 0
          ? (kt = 5)
          : (om(o), (kt = 0), (bo = Bl = null), lm(l, l.pendingLanes));
        var v = l.pendingLanes;
        if (
          (v === 0 && (Hl = null),
          le(u),
          (o = o.stateNode),
          Bn && typeof Bn.onCommitFiberRoot === "function")
        )
          try {
            Bn.onCommitFiberRoot(
              ha,
              o,
              void 0,
              (o.current.flags & 128) === 128,
            );
          } catch (ne) {}
        if (d !== null) {
          ((o = Oe.T), (v = Ii()), Gt(2), (Oe.T = null));
          try {
            for (var g = l.onRecoverableError, M = 0; M < d.length; M++) {
              var K = d[M];
              g(K.value, { componentStack: K.stack });
            }
          } finally {
            ((Oe.T = o), Gt(v));
          }
        }
        ((nl & 3) !== 0 && ua(),
          Ne(l),
          (v = l.pendingLanes),
          (u & 261930) !== 0 && (v & 42) !== 0
            ? l === Gc
              ? Ma++
              : ((Ma = 0), (Gc = l))
            : (Ma = 0),
          fn && g0(),
          Ke(0, !1));
      }
    }
    function lm(l, o) {
      (l.pooledCacheLanes &= o) === 0 &&
        ((o = l.pooledCache), o != null && ((l.pooledCache = null), rt(o)));
    }
    function ua() {
      return (tm(), nm(), im(), rm());
    }
    function rm() {
      if (kt !== 5) return !1;
      var l = Bl,
        o = Kc;
      Kc = 0;
      var u = le(nl),
        d = 32 > u ? 32 : u;
      u = Oe.T;
      var v = Ii();
      try {
        (Gt(d), (Oe.T = null), (d = kc), (kc = null));
        var g = Bl,
          M = nl;
        if (((kt = 0), (bo = Bl = null), (nl = 0), (je & 6) !== 0))
          throw Error(f(331));
        var K = je;
        if (
          ((je |= 4),
          Yh(g.current),
          Uh(g, g.current, M, d),
          (je = K),
          Ke(0, !1),
          Bn && typeof Bn.onPostCommitFiberRoot === "function")
        )
          try {
            Bn.onPostCommitFiberRoot(ha, g);
          } catch (ne) {}
        return (om(g.current), !0);
      } finally {
        (Gt(v), (Oe.T = u), lm(l, o));
      }
    }
    function om(l) {
      var o = l;
      for (;;) {
        var u = o.alternate,
          d = !1;
        if (u !== null) {
          if (
            u.memoizedProps !== null ||
            u.memoizedState !== null ||
            u.pendingProps !== null ||
            u.dependencies !== null
          )
            ((u.memoizedState = null),
              (u.memoizedProps = null),
              (u.dependencies = null),
              (u.pendingProps = null),
              (d = !0));
        }
        if ((d || o === l) && o.child !== null) {
          ((o.child.return = o), (o = o.child));
          continue;
        }
        if (o === l) return;
        for (; o.sibling === null;) {
          if (o.return === null || o.return === l) return;
          o = o.return;
        }
        ((o.sibling.return = o.return), (o = o.sibling));
      }
    }
    function am(l, o, u) {
      ((o = Se(u, o)),
        (o = Lu(l.stateNode, o, 2)),
        (l = Ci(l, o, 2)),
        l !== null && (k(l, 2), Ne(l)));
    }
    function Ze(l, o, u) {
      if (l.tag === 3) am(l, l, u);
      else
        for (; o !== null;) {
          if (o.tag === 3) {
            am(o, l, u);
            break;
          } else if (o.tag === 1) {
            var d = o.stateNode;
            if (
              typeof o.type.getDerivedStateFromError === "function" ||
              (typeof d.componentDidCatch === "function" &&
                (Hl === null || !Hl.has(d)))
            ) {
              ((l = Se(u, l)),
                (u = rh(2)),
                (d = Ci(o, u, 2)),
                d !== null && (oh(u, d, o, l), k(d, 2), Ne(d)));
              break;
            }
          }
          o = o.return;
        }
    }
    function lc(l, o, u) {
      var d = l.pingCache;
      if (d === null) {
        d = l.pingCache = new W0();
        var v = new Set();
        d.set(o, v);
      } else ((v = d.get(o)), v === void 0 && ((v = new Set()), d.set(o, v)));
      v.has(u) ||
        ((Fc = !0), v.add(u), (l = Qg.bind(null, l, o, u)), o.then(l, l));
    }
    function Qg(l, o, u) {
      var d = l.pingCache;
      (d !== null && d.delete(o),
        (l.pingedLanes |= l.suspendedLanes & u),
        (l.warmLanes &= ~u),
        ft === l &&
          (qe & u) === u &&
          (Dt === 4 || (Dt === 3 && (qe & 62914560) === qe && 0 > Rn() - Ys)
            ? (je & 2) === 0 && Xr(l, 0)
            : (Pc |= u),
          go === qe && (go = 0)),
        Ne(l));
    }
    function sm(l, o) {
      (o === 0 && (o = X()), (l = xi(l, o)), l !== null && (k(l, o), Ne(l)));
    }
    function Zg(l) {
      var o = l.memoizedState,
        u = 0;
      (o !== null && (u = o.retryLane), sm(l, u));
    }
    function Ig(l, o) {
      var u = 0;
      switch (l.tag) {
        case 31:
        case 13:
          var { stateNode: d, memoizedState: v } = l;
          v !== null && (u = v.retryLane);
          break;
        case 19:
          d = l.stateNode;
          break;
        case 22:
          d = l.stateNode._retryCache;
          break;
        default:
          throw Error(f(314));
      }
      (d !== null && d.delete(o), sm(l, u));
    }
    function Jg(l, o) {
      return Cs(l, o);
    }
    function $g(l, o, u, d) {
      ((this.tag = l),
        (this.key = u),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = o),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = d),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function rc(l) {
      return ((l = l.prototype), !(!l || !l.isReactComponent));
    }
    function Qi(l, o) {
      var u = l.alternate;
      return (
        u === null
          ? ((u = s(l.tag, o, l.key, l.mode)),
            (u.elementType = l.elementType),
            (u.type = l.type),
            (u.stateNode = l.stateNode),
            (u.alternate = l),
            (l.alternate = u))
          : ((u.pendingProps = o),
            (u.type = l.type),
            (u.flags = 0),
            (u.subtreeFlags = 0),
            (u.deletions = null)),
        (u.flags = l.flags & 65011712),
        (u.childLanes = l.childLanes),
        (u.lanes = l.lanes),
        (u.child = l.child),
        (u.memoizedProps = l.memoizedProps),
        (u.memoizedState = l.memoizedState),
        (u.updateQueue = l.updateQueue),
        (o = l.dependencies),
        (u.dependencies =
          o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
        (u.sibling = l.sibling),
        (u.index = l.index),
        (u.ref = l.ref),
        (u.refCleanup = l.refCleanup),
        u
      );
    }
    function um(l, o) {
      l.flags &= 65011714;
      var u = l.alternate;
      return (
        u === null
          ? ((l.childLanes = 0),
            (l.lanes = o),
            (l.child = null),
            (l.subtreeFlags = 0),
            (l.memoizedProps = null),
            (l.memoizedState = null),
            (l.updateQueue = null),
            (l.dependencies = null),
            (l.stateNode = null))
          : ((l.childLanes = u.childLanes),
            (l.lanes = u.lanes),
            (l.child = u.child),
            (l.subtreeFlags = 0),
            (l.deletions = null),
            (l.memoizedProps = u.memoizedProps),
            (l.memoizedState = u.memoizedState),
            (l.updateQueue = u.updateQueue),
            (l.type = u.type),
            (o = u.dependencies),
            (l.dependencies =
              o === null
                ? null
                : { lanes: o.lanes, firstContext: o.firstContext })),
        l
      );
    }
    function ys(l, o, u, d, v, g) {
      var M = 0;
      if (((d = l), typeof l === "function")) rc(l) && (M = 1);
      else if (typeof l === "string")
        M =
          ci && Kt
            ? Hm(l, u, It.current)
              ? 26
              : Gm(l)
                ? 27
                : 5
            : ci
              ? Hm(l, u, It.current)
                ? 26
                : 5
              : Kt
                ? Gm(l)
                  ? 27
                  : 5
                : 5;
      else
        e: switch (l) {
          case pc:
            return (
              (l = s(31, u, o, v)),
              (l.elementType = pc),
              (l.lanes = g),
              l
            );
          case Ir:
            return ur(u.children, v, g, o);
          case ym:
            ((M = 8), (v |= 24));
            break;
          case cc:
            return (
              (l = s(12, u, o, v | 2)),
              (l.elementType = cc),
              (l.lanes = g),
              l
            );
          case dc:
            return (
              (l = s(13, u, o, v)),
              (l.elementType = dc),
              (l.lanes = g),
              l
            );
          case hc:
            return (
              (l = s(19, u, o, v)),
              (l.elementType = hc),
              (l.lanes = g),
              l
            );
          default:
            if (typeof l === "object" && l !== null)
              switch (l.$$typeof) {
                case Ml:
                  M = 10;
                  break e;
                case vm:
                  M = 9;
                  break e;
                case fc:
                  M = 11;
                  break e;
                case mc:
                  M = 14;
                  break e;
                case Rl:
                  ((M = 16), (d = null));
                  break e;
              }
            ((M = 29),
              (u = Error(f(130, l === null ? "null" : typeof l, ""))),
              (d = null));
        }
      return (
        (o = s(M, u, o, v)),
        (o.elementType = l),
        (o.type = d),
        (o.lanes = g),
        o
      );
    }
    function ur(l, o, u, d) {
      return ((l = s(7, l, d, o)), (l.lanes = u), l);
    }
    function oc(l, o, u) {
      return ((l = s(6, l, null, o)), (l.lanes = u), l);
    }
    function cm(l) {
      var o = s(18, null, null, 0);
      return ((o.stateNode = l), o);
    }
    function ac(l, o, u) {
      return (
        (o = s(4, l.children !== null ? l.children : [], l.key, o)),
        (o.lanes = u),
        (o.stateNode = {
          containerInfo: l.containerInfo,
          pendingChildren: null,
          implementation: l.implementation,
        }),
        o
      );
    }
    function eb(l, o, u, d, v, g, M, K, ne) {
      ((this.tag = 1),
        (this.containerInfo = l),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = cr),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = U(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = U(0)),
        (this.hiddenUpdates = U(null)),
        (this.identifierPrefix = d),
        (this.onUncaughtError = v),
        (this.onCaughtError = g),
        (this.onRecoverableError = M),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = ne),
        (this.incompleteTransitions = new Map()));
    }
    function fm(l, o, u, d, v, g, M, K, ne, ae, be, me) {
      return (
        (l = new eb(l, o, u, M, ne, ae, be, me, K)),
        (o = 1),
        g === !0 && (o |= 24),
        (g = s(3, null, null, o)),
        (l.current = g),
        (g.stateNode = l),
        (o = De()),
        o.refCount++,
        (l.pooledCache = o),
        o.refCount++,
        (g.memoizedState = { element: d, isDehydrated: u, cache: o }),
        ql(g),
        l
      );
    }
    function dm(l) {
      if (!l) return to;
      return ((l = to), l);
    }
    function hm(l) {
      var o = l._reactInternals;
      if (o === void 0) {
        if (typeof l.render === "function") throw Error(f(188));
        throw ((l = Object.keys(l).join(",")), Error(f(268, l)));
      }
      return (
        (l = b(o)),
        (l = l !== null ? S(l) : null),
        l === null ? null : ca(l.stateNode)
      );
    }
    function mm(l, o, u, d, v, g) {
      ((v = dm(v)),
        d.context === null ? (d.context = v) : (d.pendingContext = v),
        (d = Kn(o)),
        (d.payload = { element: u }),
        (g = g === void 0 ? null : g),
        g !== null && (d.callback = g),
        (u = Ci(l, d, o)),
        u !== null && (Mn(u, l, o), sl(u, l, o)));
    }
    function pm(l, o) {
      if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
        var u = l.retryLane;
        l.retryLane = u !== 0 && u < o ? u : o;
      }
    }
    function sc(l, o) {
      (pm(l, o), (l = l.alternate) && pm(l, o));
    }
    var Ge = {},
      uc = Object.assign,
      tb = Symbol.for("react.element"),
      vs = Symbol.for("react.transitional.element"),
      Zr = Symbol.for("react.portal"),
      Ir = Symbol.for("react.fragment"),
      ym = Symbol.for("react.strict_mode"),
      cc = Symbol.for("react.profiler"),
      vm = Symbol.for("react.consumer"),
      Ml = Symbol.for("react.context"),
      fc = Symbol.for("react.forward_ref"),
      dc = Symbol.for("react.suspense"),
      hc = Symbol.for("react.suspense_list"),
      mc = Symbol.for("react.memo"),
      Rl = Symbol.for("react.lazy"),
      pc = Symbol.for("react.activity"),
      nb = Symbol.for("react.memo_cache_sentinel"),
      bm = Symbol.iterator,
      ib = Symbol.for("react.client.reference"),
      gs = Array.isArray,
      Oe = Uze,
      {
        rendererVersion: lb,
        rendererPackageName: rb,
        extraDevToolsConfig: Sm,
        getPublicInstance: ca,
        getRootHostContext: ob,
        getChildHostContext: ab,
        prepareForCommit: sb,
        resetAfterCommit: ub,
        createInstance: cb,
      } = t;
    t.cloneMutableInstance;
    var {
      appendInitialChild: yc,
      finalizeInitialChildren: Em,
      shouldSetTextContent: bs,
      createTextInstance: xm,
    } = t;
    t.cloneMutableTextInstance;
    var {
      scheduleTimeout: fb,
      cancelTimeout: db,
      noTimeout: cr,
      isPrimaryRenderer: Zi,
    } = t;
    t.warnsIfNotActing;
    var {
      supportsMutation: cn,
      supportsPersistence: Ni,
      supportsHydration: fn,
      getInstanceFromNode: hb,
    } = t;
    t.beforeActiveInstanceBlur;
    var mb = t.preparePortalMount;
    (t.prepareScopeUpdate, t.getInstanceFromScope);
    var {
      setCurrentUpdatePriority: Gt,
      getCurrentUpdatePriority: Ii,
      resolveUpdatePriority: pb,
    } = t;
    (t.trackSchedulerEvent, t.resolveEventType, t.resolveEventTimeStamp);
    var { shouldAttemptEagerTransition: yb, detachDeletedInstance: vb } = t;
    t.requestPostPaintCallback;
    var {
      maySuspendCommit: gb,
      maySuspendCommitOnUpdate: bb,
      maySuspendCommitInSyncRender: vc,
      preloadInstance: Cm,
      startSuspendingCommit: Sb,
      suspendInstance: Mm,
    } = t;
    t.suspendOnActiveViewTransition;
    var Eb = t.waitForCommitToBeReady;
    t.getSuspendedCommitReason;
    var {
      NotPendingTransition: Jr,
      HostTransitionContext: fr,
      resetFormInstance: xb,
    } = t;
    t.bindToConsole;
    var {
      supportsMicrotasks: Cb,
      scheduleMicrotask: Mb,
      supportsTestSelectors: fa,
      findFiberRoot: Rb,
      getBoundingRect: Tb,
      getTextContent: Nb,
      isHiddenSubtree: da,
      matchAccessibilityRole: Ab,
      setFocusIfFocusable: _b,
      setupIntersectionObserver: Db,
      appendChild: Ob,
      appendChildToContainer: wb,
      commitTextUpdate: Hb,
      commitMount: Bb,
      commitUpdate: Lb,
      insertBefore: zb,
      insertInContainerBefore: Ub,
      removeChild: Fb,
      removeChildFromContainer: Pb,
      resetTextContent: Rm,
      hideInstance: Yb,
      hideTextInstance: Kb,
      unhideInstance: kb,
      unhideTextInstance: Gb,
    } = t;
    (t.cancelViewTransitionName,
      t.cancelRootViewTransitionName,
      t.restoreRootViewTransitionName,
      t.cloneRootViewTransitionContainer,
      t.removeRootViewTransitionClone,
      t.measureClonedInstance,
      t.hasInstanceChanged,
      t.hasInstanceAffectedParent,
      t.startViewTransition,
      t.startGestureTransition,
      t.stopViewTransition,
      t.getCurrentGestureOffset,
      t.createViewTransitionInstance);
    var jb = t.clearContainer;
    (t.createFragmentInstance,
      t.updateFragmentInstanceFiber,
      t.commitNewChildToFragmentInstance,
      t.deleteChildFromFragmentInstance);
    var {
      cloneInstance: Wb,
      createContainerChildSet: Tm,
      appendChildToContainerChildSet: Nm,
      finalizeContainerChildren: Vb,
      replaceContainerChildren: Am,
      cloneHiddenInstance: _m,
      cloneHiddenTextInstance: Dm,
      isSuspenseInstancePending: gc,
      isSuspenseInstanceFallback: bc,
      getSuspenseInstanceFallbackErrorDetails: qb,
      registerSuspenseInstanceRetry: Xb,
      canHydrateFormStateMarker: Qb,
      isFormStateMarkerMatching: Zb,
      getNextHydratableSibling: Om,
      getNextHydratableSiblingAfterSingleton: Ib,
      getFirstHydratableChild: Jb,
      getFirstHydratableChildWithinContainer: $b,
      getFirstHydratableChildWithinActivityInstance: e0,
      getFirstHydratableChildWithinSuspenseInstance: t0,
      getFirstHydratableChildWithinSingleton: n0,
      canHydrateInstance: i0,
      canHydrateTextInstance: l0,
      canHydrateActivityInstance: r0,
      canHydrateSuspenseInstance: o0,
      hydrateInstance: a0,
      hydrateTextInstance: s0,
      hydrateActivityInstance: u0,
      hydrateSuspenseInstance: c0,
      getNextHydratableInstanceAfterActivityInstance: f0,
      getNextHydratableInstanceAfterSuspenseInstance: d0,
      commitHydratedInstance: h0,
      commitHydratedContainer: m0,
      commitHydratedActivityInstance: p0,
      commitHydratedSuspenseInstance: y0,
      finalizeHydratedChildren: v0,
      flushHydrationEvents: g0,
    } = t;
    t.clearActivityBoundary;
    var b0 = t.clearSuspenseBoundary;
    t.clearActivityBoundaryFromContainer;
    var {
      clearSuspenseBoundaryFromContainer: S0,
      hideDehydratedBoundary: E0,
      unhideDehydratedBoundary: x0,
      shouldDeleteUnhydratedTailInstances: wm,
    } = t;
    (t.diffHydratedPropsForDevWarnings,
      t.diffHydratedTextForDevWarnings,
      t.describeHydratableInstanceForDevWarnings);
    var {
        validateHydratableInstance: C0,
        validateHydratableTextInstance: M0,
        supportsResources: ci,
        isHostHoistableType: Hm,
        getHoistableRoot: Sc,
        getResource: Bm,
        acquireResource: Lm,
        releaseResource: zm,
        hydrateHoistable: R0,
        mountHoistable: Um,
        unmountHoistable: Pm,
        createHoistableInstance: T0,
        prepareToCommitHoistables: N0,
        mayResourceSuspendCommit: A0,
        preloadResource: Ym,
        suspendResource: _0,
        supportsSingletons: Kt,
        resolveSingletonInstance: Km,
        acquireSingletonInstance: D0,
        releaseSingletonInstance: km,
        isHostSingletonType: Gm,
        isSingletonScope: $r,
      } = t,
      Ec = [],
      eo = -1,
      to = {},
      Hn = Math.clz32 ? Math.clz32 : L,
      { log: O0, LN2: w0 } = Math,
      Ss = 256,
      Es = 262144,
      xs = 4194304,
      Cs = uu,
      xc = Xf,
      H0 = Zf,
      B0 = Qf,
      Rn = Li,
      jm = Vf,
      L0 = qf,
      Cc = su,
      z0 = Wf,
      U0 = void 0,
      F0 = void 0,
      ha = null,
      Bn = null,
      Ln = typeof Object.is === "function" ? Object.is : fe,
      Wm =
        typeof reportError === "function"
          ? reportError
          : function (l) {
              if (
                typeof window === "object" &&
                typeof window.ErrorEvent === "function"
              ) {
                var o = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof l === "object" &&
                    l !== null &&
                    typeof l.message === "string"
                      ? String(l.message)
                      : String(l),
                  error: l,
                });
                if (!window.dispatchEvent(o)) return;
              } else if (
                typeof process === "object" &&
                typeof process.emit === "function"
              ) {
                process.emit("uncaughtException", l);
                return;
              }
              console.error(l);
            },
      P0 = Object.prototype.hasOwnProperty,
      Mc,
      qm,
      Rc = !1,
      Xm = new WeakMap(),
      io = [],
      lo = 0,
      Ms = null,
      ma = 0,
      kn = [],
      Gn = 0,
      Tl = null,
      Ai = 1,
      _i = "",
      It = D(null),
      pa = D(null),
      Nl = D(null),
      Rs = D(null),
      Jt = null,
      Tt = null,
      Xe = !1,
      Al = null,
      jn = !1,
      Tc = Error(f(519)),
      Ts = D(null),
      dr = null,
      Ji = null,
      Y0 =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var l = [],
                o = (this.signal = {
                  aborted: !1,
                  addEventListener: function (u, d) {
                    l.push(d);
                  },
                });
              this.abort = function () {
                ((o.aborted = !0),
                  l.forEach(function (u) {
                    return u();
                  }));
              };
            },
      K0 = uu,
      k0 = su,
      Nt = {
        $$typeof: Ml,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      },
      Ns = null,
      ro = null,
      Nc = !1,
      As = !1,
      Ac = !1,
      hr = 0,
      ya = null,
      _c = 0,
      oo = 0,
      ao = null,
      Qm = Oe.S;
    Oe.S = function (l, o) {
      ((ep = Rn()),
        typeof o === "object" &&
          o !== null &&
          typeof o.then === "function" &&
          Yt(l, o),
        Qm !== null && Qm(l, o));
    };
    var mr = D(null),
      so = Error(f(460)),
      Dc = Error(f(474)),
      _s = Error(f(542)),
      Ds = { then: function () {} },
      pr = null,
      uo = null,
      va = 0,
      yr = Si(!0),
      Zm = Si(!1),
      Wn = [],
      co = 0,
      Oc = 0,
      _l = !1,
      wc = !1,
      fo = D(null),
      Os = D(0),
      zn = D(null),
      Vn = null,
      Bt = D(0),
      $i = 0,
      Ye = null,
      at = null,
      zt = null,
      Hs = !1,
      ho = !1,
      vr = !1,
      Bs = 0,
      ba = 0,
      mo = null,
      G0 = 0,
      Sa = {
        readContext: Te,
        use: yn,
        useCallback: ct,
        useContext: ct,
        useEffect: ct,
        useImperativeHandle: ct,
        useLayoutEffect: ct,
        useInsertionEffect: ct,
        useMemo: ct,
        useReducer: ct,
        useRef: ct,
        useState: ct,
        useDebugValue: ct,
        useDeferredValue: ct,
        useTransition: ct,
        useSyncExternalStore: ct,
        useId: ct,
        useHostTransitionStatus: ct,
        useFormState: ct,
        useActionState: ct,
        useOptimistic: ct,
        useMemoCache: ct,
        useCacheRefresh: ct,
      };
    Sa.useEffectEvent = ct;
    var Im = {
        readContext: Te,
        use: yn,
        useCallback: function (l, o) {
          return ((_t().memoizedState = [l, o === void 0 ? null : o]), l);
        },
        useContext: Te,
        useEffect: Io,
        useImperativeHandle: function (l, o, u) {
          ((u = u !== null && u !== void 0 ? u.concat([l]) : null),
            nr(4194308, 4, jr.bind(null, o, l), u));
        },
        useLayoutEffect: function (l, o) {
          return nr(4194308, 4, l, o);
        },
        useInsertionEffect: function (l, o) {
          nr(4, 2, l, o);
        },
        useMemo: function (l, o) {
          var u = _t();
          o = o === void 0 ? null : o;
          var d = l();
          if (vr) {
            oe(!0);
            try {
              l();
            } finally {
              oe(!1);
            }
          }
          return ((u.memoizedState = [d, o]), d);
        },
        useReducer: function (l, o, u) {
          var d = _t();
          if (u !== void 0) {
            var v = u(o);
            if (vr) {
              oe(!0);
              try {
                u(o);
              } finally {
                oe(!1);
              }
            }
          } else v = o;
          return (
            (d.memoizedState = d.baseState = v),
            (l = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: l,
              lastRenderedState: v,
            }),
            (d.queue = l),
            (l = l.dispatch = On.bind(null, Ye, l)),
            [d.memoizedState, l]
          );
        },
        useRef: function (l) {
          var o = _t();
          return ((l = { current: l }), (o.memoizedState = l));
        },
        useState: function (l) {
          l = Pr(l);
          var o = l.queue,
            u = Xt.bind(null, Ye, o);
          return ((o.dispatch = u), [l.memoizedState, u]);
        },
        useDebugValue: Wi,
        useDeferredValue: function (l, o) {
          var u = _t();
          return lr(u, l, o);
        },
        useTransition: function () {
          var l = Pr(!1);
          return (
            (l = ts.bind(null, Ye, l.queue, !0, !1)),
            (_t().memoizedState = l),
            [!1, l]
          );
        },
        useSyncExternalStore: function (l, o, u) {
          var d = Ye,
            v = _t();
          if (Xe) {
            if (u === void 0) throw Error(f(407));
            u = u();
          } else {
            if (((u = o()), ft === null)) throw Error(f(349));
            (qe & 127) !== 0 || Ur(d, o, u);
          }
          v.memoizedState = u;
          var g = { value: u, getSnapshot: o };
          return (
            (v.queue = g),
            Io(qo.bind(null, d, g, l), [l]),
            (d.flags |= 2048),
            Ri(9, { destroy: void 0 }, Vo.bind(null, d, g, u, o), null),
            u
          );
        },
        useId: function () {
          var l = _t(),
            o = ft.identifierPrefix;
          if (Xe) {
            var u = _i,
              d = Ai;
            ((u = (d & ~(1 << (32 - Hn(d) - 1))).toString(32) + u),
              (o = "_" + o + "R_" + u),
              (u = Bs++),
              0 < u && (o += "H" + u.toString(32)),
              (o += "_"));
          } else ((u = G0++), (o = "_" + o + "r_" + u.toString(32) + "_"));
          return (l.memoizedState = o);
        },
        useHostTransitionStatus: El,
        useFormState: Qo,
        useActionState: Qo,
        useOptimistic: function (l) {
          var o = _t();
          o.memoizedState = o.baseState = l;
          var u = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (o.queue = u),
            (o = Vr.bind(null, Ye, !0, u)),
            (u.dispatch = o),
            [l, o]
          );
        },
        useMemoCache: jo,
        useCacheRefresh: function () {
          return (_t().memoizedState = sn.bind(null, Ye));
        },
        useEffectEvent: function (l) {
          var o = _t(),
            u = { impl: l };
          return (
            (o.memoizedState = u),
            function () {
              if ((je & 2) !== 0) throw Error(f(440));
              return u.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Hc = {
        readContext: Te,
        use: yn,
        useCallback: $o,
        useContext: Te,
        useEffect: Gr,
        useImperativeHandle: Wr,
        useInsertionEffect: oi,
        useLayoutEffect: Jo,
        useMemo: Sl,
        useReducer: Mi,
        useRef: Zo,
        useState: function () {
          return Mi(En);
        },
        useDebugValue: Wi,
        useDeferredValue: function (l, o) {
          var u = vt();
          return an(u, at.memoizedState, l, o);
        },
        useTransition: function () {
          var l = Mi(En)[0],
            o = vt().memoizedState;
          return [typeof l === "boolean" ? l : ki(l), o];
        },
        useSyncExternalStore: $l,
        useId: ea,
        useHostTransitionStatus: El,
        useFormState: tr,
        useActionState: tr,
        useOptimistic: function (l, o) {
          var u = vt();
          return er(u, at, l, o);
        },
        useMemoCache: jo,
        useCacheRefresh: ns,
      };
    Hc.useEffectEvent = bl;
    var Jm = {
      readContext: Te,
      use: yn,
      useCallback: $o,
      useContext: Te,
      useEffect: Gr,
      useImperativeHandle: Wr,
      useInsertionEffect: oi,
      useLayoutEffect: Jo,
      useMemo: Sl,
      useReducer: ml,
      useRef: Zo,
      useState: function () {
        return ml(En);
      },
      useDebugValue: Wi,
      useDeferredValue: function (l, o) {
        var u = vt();
        return at === null ? lr(u, l, o) : an(u, at.memoizedState, l, o);
      },
      useTransition: function () {
        var l = ml(En)[0],
          o = vt().memoizedState;
        return [typeof l === "boolean" ? l : ki(l), o];
      },
      useSyncExternalStore: $l,
      useId: ea,
      useHostTransitionStatus: El,
      useFormState: xn,
      useActionState: xn,
      useOptimistic: function (l, o) {
        var u = vt();
        if (at !== null) return er(u, at, l, o);
        return ((u.baseState = l), [l, u.queue.dispatch]);
      },
      useMemoCache: jo,
      useCacheRefresh: ns,
    };
    Jm.useEffectEvent = bl;
    var Bc = {
        enqueueSetState: function (l, o, u) {
          l = l._reactInternals;
          var d = wn(),
            v = Kn(d);
          ((v.payload = o),
            u !== void 0 && u !== null && (v.callback = u),
            (o = Ci(l, v, d)),
            o !== null && (Mn(o, l, d), sl(o, l, d)));
        },
        enqueueReplaceState: function (l, o, u) {
          l = l._reactInternals;
          var d = wn(),
            v = Kn(d);
          ((v.tag = 1),
            (v.payload = o),
            u !== void 0 && u !== null && (v.callback = u),
            (o = Ci(l, v, d)),
            o !== null && (Mn(o, l, d), sl(o, l, d)));
        },
        enqueueForceUpdate: function (l, o) {
          l = l._reactInternals;
          var u = wn(),
            d = Kn(u);
          ((d.tag = 2),
            o !== void 0 && o !== null && (d.callback = o),
            (o = Ci(l, d, u)),
            o !== null && (Mn(o, l, u), sl(o, l, u)));
        },
      },
      Lc = Error(f(461)),
      Ut = !1,
      zc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
      },
      el = !1,
      Ft = !1,
      Uc = !1,
      $m = typeof WeakSet === "function" ? WeakSet : Set,
      jt = null,
      Pt = null,
      Tn = !1,
      fi = null,
      yo = 8192,
      j0 = {
        getCacheForType: function (l) {
          var o = Te(Nt),
            u = o.data.get(l);
          return (u === void 0 && ((u = l()), o.data.set(l, u)), u);
        },
        cacheSignal: function () {
          return Te(Nt).controller.signal;
        },
      },
      Ls = 0,
      zs = 1,
      Us = 2,
      Fs = 3,
      Ps = 4;
    if (typeof Symbol === "function" && Symbol.for) {
      var Ea = Symbol.for;
      ((Ls = Ea("selector.component")),
        (zs = Ea("selector.has_pseudo_class")),
        (Us = Ea("selector.role")),
        (Fs = Ea("selector.test_id")),
        (Ps = Ea("selector.text")));
    }
    var W0 = typeof WeakMap === "function" ? WeakMap : Map,
      je = 0,
      ft = null,
      We = null,
      qe = 0,
      lt = 0,
      Un = null,
      Dl = !1,
      vo = !1,
      Fc = !1,
      tl = 0,
      Dt = 0,
      wl = 0,
      gr = 0,
      Pc = 0,
      Fn = 0,
      go = 0,
      xa = null,
      Nn = null,
      Yc = !1,
      Ys = 0,
      ep = 0,
      Ca = 1 / 0,
      Ks = null,
      Hl = null,
      kt = 0,
      Bl = null,
      bo = null,
      nl = 0,
      Kc = 0,
      kc = null,
      tp = null,
      Ma = 0,
      Gc = null;
    return (
      (Ge.attemptContinuousHydration = function (l) {
        if (l.tag === 13 || l.tag === 31) {
          var o = xi(l, 67108864);
          (o !== null && Mn(o, l, 67108864), sc(l, 67108864));
        }
      }),
      (Ge.attemptHydrationAtCurrentPriority = function (l) {
        if (l.tag === 13 || l.tag === 31) {
          var o = wn();
          o = ce(o);
          var u = xi(l, o);
          (u !== null && Mn(u, l, o), sc(l, o));
        }
      }),
      (Ge.attemptSynchronousHydration = function (l) {
        switch (l.tag) {
          case 3:
            if (((l = l.stateNode), l.current.memoizedState.isDehydrated)) {
              var o = O(l.pendingLanes);
              if (o !== 0) {
                l.pendingLanes |= 2;
                for (l.entangledLanes |= 2; o;) {
                  var u = 1 << (31 - Hn(o));
                  ((l.entanglements[1] |= u), (o &= ~u));
                }
                (Ne(l), (je & 6) === 0 && ((Ca = Rn() + 500), Ke(0, !1)));
              }
            }
            break;
          case 31:
          case 13:
            ((o = xi(l, 2)), o !== null && Mn(o, l, 2), Vh(), sc(l, 2));
        }
      }),
      (Ge.batchedUpdates = function (l, o) {
        return l(o);
      }),
      (Ge.createComponentSelector = function (l) {
        return { $$typeof: Ls, value: l };
      }),
      (Ge.createContainer = function (l, o, u, d, v, g, M, K, ne, ae) {
        return fm(l, o, !1, null, u, d, g, null, M, K, ne, ae);
      }),
      (Ge.createHasPseudoClassSelector = function (l) {
        return { $$typeof: zs, value: l };
      }),
      (Ge.createHydrationContainer = function (
        l,
        o,
        u,
        d,
        v,
        g,
        M,
        K,
        ne,
        ae,
        be,
        me,
        xe,
        ze,
      ) {
        return (
          (l = fm(u, d, !0, l, v, g, K, ze, ne, ae, be, me)),
          (l.context = dm(null)),
          (u = l.current),
          (d = wn()),
          (d = ce(d)),
          (v = Kn(d)),
          (v.callback = o !== void 0 && o !== null ? o : null),
          Ci(u, v, d),
          (o = d),
          (l.current.lanes = o),
          k(l, o),
          Ne(l),
          l
        );
      }),
      (Ge.createPortal = function (l, o, u) {
        var d =
          3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Zr,
          key: d == null ? null : "" + d,
          children: l,
          containerInfo: o,
          implementation: u,
        };
      }),
      (Ge.createRoleSelector = function (l) {
        return { $$typeof: Us, value: l };
      }),
      (Ge.createTestNameSelector = function (l) {
        return { $$typeof: Fs, value: l };
      }),
      (Ge.createTextSelector = function (l) {
        return { $$typeof: Ps, value: l };
      }),
      (Ge.defaultOnCaughtError = function (l) {
        console.error(l);
      }),
      (Ge.defaultOnRecoverableError = function (l) {
        Wm(l);
      }),
      (Ge.defaultOnUncaughtError = function (l) {
        Wm(l);
      }),
      (Ge.deferredUpdates = function (l) {
        var o = Oe.T,
          u = Ii();
        try {
          return (Gt(32), (Oe.T = null), l());
        } finally {
          (Gt(u), (Oe.T = o));
        }
      }),
      (Ge.discreteUpdates = function (l, o, u, d, v) {
        var g = Oe.T,
          M = Ii();
        try {
          return (Gt(2), (Oe.T = null), l(o, u, d, v));
        } finally {
          (Gt(M), (Oe.T = g), je === 0 && (Ca = Rn() + 500));
        }
      }),
      (Ge.findAllNodes = tc),
      (Ge.findBoundingRects = function (l, o) {
        if (!fa) throw Error(f(363));
        ((o = tc(l, o)), (l = []));
        for (var u = 0; u < o.length; u++) l.push(Tb(o[u]));
        for (o = l.length - 1; 0 < o; o--) {
          u = l[o];
          for (
            var d = u.x, v = d + u.width, g = u.y, M = g + u.height, K = o - 1;
            0 <= K;
            K--
          )
            if (o !== K) {
              var ne = l[K],
                ae = ne.x,
                be = ae + ne.width,
                me = ne.y,
                xe = me + ne.height;
              if (d >= ae && g >= me && v <= be && M <= xe) {
                l.splice(o, 1);
                break;
              } else if (!(
                d !== ae ||
                u.width !== ne.width ||
                xe < g ||
                me > M
              )) {
                (me > g && ((ne.height += me - g), (ne.y = g)),
                  xe < M && (ne.height = M - me),
                  l.splice(o, 1));
                break;
              } else if (!(
                g !== me ||
                u.height !== ne.height ||
                be < d ||
                ae > v
              )) {
                (ae > d && ((ne.width += ae - d), (ne.x = d)),
                  be < v && (ne.width = v - ae),
                  l.splice(o, 1));
                break;
              }
            }
        }
        return l;
      }),
      (Ge.findHostInstance = hm),
      (Ge.findHostInstanceWithNoPortals = function (l) {
        return (
          (l = b(l)),
          (l = l !== null ? E(l) : null),
          l === null ? null : ca(l.stateNode)
        );
      }),
      (Ge.findHostInstanceWithWarning = function (l) {
        return hm(l);
      }),
      (Ge.flushPassiveEffects = ua),
      (Ge.flushSyncFromReconciler = function (l) {
        var o = je;
        je |= 1;
        var u = Oe.T,
          d = Ii();
        try {
          if ((Gt(2), (Oe.T = null), l)) return l();
        } finally {
          (Gt(d), (Oe.T = u), (je = o), (je & 6) === 0 && Ke(0, !1));
        }
      }),
      (Ge.flushSyncWork = Vh),
      (Ge.focusWithin = function (l, o) {
        if (!fa) throw Error(f(363));
        ((l = Ju(l)), (o = kh(l, o)), (o = Array.from(o)));
        for (l = 0; l < o.length;) {
          var u = o[l++],
            d = u.tag;
          if (!da(u)) {
            if ((d === 5 || d === 26 || d === 27) && _b(u.stateNode)) return !0;
            for (u = u.child; u !== null;) (o.push(u), (u = u.sibling));
          }
        }
        return !1;
      }),
      (Ge.getFindAllNodesFailureDescription = function (l, o) {
        if (!fa) throw Error(f(363));
        var u = 0,
          d = [];
        l = [Ju(l), 0];
        for (var v = 0; v < l.length;) {
          var g = l[v++],
            M = g.tag,
            K = l[v++],
            ne = o[K];
          if ((M !== 5 && M !== 26 && M !== 27) || !da(g)) {
            if (
              ($u(g, ne) && (d.push(ec(ne)), K++, K > u && (u = K)),
              K < o.length)
            )
              for (g = g.child; g !== null;) (l.push(g, K), (g = g.sibling));
          }
        }
        if (u < o.length) {
          for (l = []; u < o.length; u++) l.push(ec(o[u]));
          return (
            `findAllNodes was able to match part of the selector:
  ` +
            (d.join(" > ") +
              `

No matching component was found for:
  `) +
            l.join(" > ")
          );
        }
        return null;
      }),
      (Ge.getPublicRootInstance = function (l) {
        if (((l = l.current), !l.child)) return null;
        switch (l.child.tag) {
          case 27:
          case 5:
            return ca(l.child.stateNode);
          default:
            return l.child.stateNode;
        }
      }),
      (Ge.injectIntoDevTools = function () {
        var l = {
          bundleType: 0,
          version: lb,
          rendererPackageName: rb,
          currentDispatcherRef: Oe,
          reconcilerVersion: "19.2.0",
        };
        if (
          (Sm !== null && (l.rendererConfig = Sm),
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        )
          l = !1;
        else {
          var o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (o.isDisabled || !o.supportsFiber) l = !0;
          else {
            try {
              ((ha = o.inject(l)), (Bn = o));
            } catch (u) {}
            l = o.checkDCE ? !0 : !1;
          }
        }
        return l;
      }),
      (Ge.isAlreadyRendering = function () {
        return (je & 6) !== 0;
      }),
      (Ge.observeVisibleRects = function (l, o, u, d) {
        if (!fa) throw Error(f(363));
        l = tc(l, o);
        var v = Db(l, u, d).disconnect;
        return {
          disconnect: function () {
            v();
          },
        };
      }),
      (Ge.shouldError = function () {
        return null;
      }),
      (Ge.shouldSuspend = function () {
        return !1;
      }),
      (Ge.startHostTransition = function (l, o, u, d) {
        if (l.tag !== 5) throw Error(f(476));
        var v = rr(l).queue;
        ts(
          l,
          v,
          o,
          Jr,
          u === null
            ? c
            : function () {
                var g = rr(l);
                return (
                  g.next === null && (g = l.alternate.memoizedState),
                  Cn(l, g.next.queue, {}, wn()),
                  u(d)
                );
              },
        );
      }),
      (Ge.updateContainer = function (l, o, u, d) {
        var v = o.current,
          g = wn();
        return (mm(v, g, l, o, u, d), g);
      }),
      (Ge.updateContainerSync = function (l, o, u, d) {
        return (mm(o.current, 2, l, o, u, d), 2);
      }),
      Ge
    );
  };
  Ya.exports.default = Ya.exports;
  Object.defineProperty(Ya.exports, "__esModule", { value: !0 });
});
var Fv = w(function (lM, Uv) {
  var RE = /[|\\{}()[\]^$+*?.-]/g;
  Uv.exports = (t) => {
    if (typeof t !== "string") throw TypeError("Expected a string");
    return t.replace(RE, "\\$&");
  };
});
var kv = w(function (rM, Kv) {
  var TE = Fv(),
    NE =
      typeof process === "object" &&
      process &&
      typeof process.cwd === "function"
        ? process.cwd()
        : ".",
    Yv = []
      .concat(Ae("module").builtinModules, "bootstrap_node", "node")
      .map(
        (t) =>
          new RegExp(
            `(?:\\((?:node:)?${t}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${t}(?:\\.js)?:\\d+:\\d+$)`,
          ),
      );
  Yv.push(
    /\((?:node:)?internal\/[^:]+:\d+:\d+\)$/,
    /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/,
    /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/,
  );
  class Nd {
    constructor(t) {
      if (((t = { ignoredPackages: [], ...t }), "internals" in t === !1))
        t.internals = Nd.nodeInternals();
      if ("cwd" in t === !1) t.cwd = NE;
      ((this._cwd = t.cwd.replace(/\\/g, "/")),
        (this._internals = [].concat(t.internals, AE(t.ignoredPackages))),
        (this._wrapCallSite = t.wrapCallSite || !1));
    }
    static nodeInternals() {
      return [...Yv];
    }
    clean(t, s = 0) {
      if (((s = " ".repeat(s)), !Array.isArray(t)))
        t = t.split(`
`);
      if (!/^\s*at /.test(t[0]) && /^\s*at /.test(t[1])) t = t.slice(1);
      let c = !1,
        f = null,
        m = [];
      return (
        t.forEach((y) => {
          if (
            ((y = y.replace(/\\/g, "/")),
            this._internals.some((S) => S.test(y)))
          )
            return;
          let b = /^\s*at /.test(y);
          if (c) y = y.trimEnd().replace(/^(\s+)at /, "$1");
          else if (((y = y.trim()), b)) y = y.slice(3);
          if (((y = y.replace(`${this._cwd}/`, "")), y))
            if (b) {
              if (f) (m.push(f), (f = null));
              m.push(y);
            } else ((c = !0), (f = y));
        }),
        m
          .map(
            (y) => `${s}${y}
`,
          )
          .join("")
      );
    }
    captureString(t, s = this.captureString) {
      if (typeof t === "function") ((s = t), (t = 1 / 0));
      let { stackTraceLimit: c } = Error;
      if (t) Error.stackTraceLimit = t;
      let f = {};
      Error.captureStackTrace(f, s);
      let { stack: m } = f;
      return ((Error.stackTraceLimit = c), this.clean(m));
    }
    capture(t, s = this.capture) {
      if (typeof t === "function") ((s = t), (t = 1 / 0));
      let { prepareStackTrace: c, stackTraceLimit: f } = Error;
      if (
        ((Error.prepareStackTrace = (b, S) => {
          if (this._wrapCallSite) return S.map(this._wrapCallSite);
          return S;
        }),
        t)
      )
        Error.stackTraceLimit = t;
      let m = {};
      Error.captureStackTrace(m, s);
      let { stack: y } = m;
      return (
        Object.assign(Error, { prepareStackTrace: c, stackTraceLimit: f }),
        y
      );
    }
    at(t = this.at) {
      let [s] = this.capture(1, t);
      if (!s) return {};
      let c = { line: s.getLineNumber(), column: s.getColumnNumber() };
      if ((Pv(c, s.getFileName(), this._cwd), s.isConstructor()))
        Object.defineProperty(c, "constructor", {
          value: !0,
          configurable: !0,
        });
      if (s.isEval()) c.evalOrigin = s.getEvalOrigin();
      if (s.isNative()) c.native = !0;
      let f;
      try {
        f = s.getTypeName();
      } catch (b) {}
      if (f && f !== "Object" && f !== "[object Object]") c.type = f;
      let m = s.getFunctionName();
      if (m) c.function = m;
      let y = s.getMethodName();
      if (y && m !== y) c.method = y;
      return c;
    }
    parseLine(t) {
      let s = t && t.match(_E);
      if (!s) return null;
      let c = s[1] === "new",
        f = s[2],
        m = s[3],
        y = s[4],
        b = Number(s[5]),
        S = Number(s[6]),
        E = s[7],
        x = s[8],
        C = s[9],
        D = s[10] === "native",
        N = s[11] === ")",
        T,
        L = {};
      if (x) L.line = Number(x);
      if (C) L.column = Number(C);
      if (N && E) {
        let O = 0;
        for (let z = E.length - 1; z > 0; z--)
          if (E.charAt(z) === ")") O++;
          else if (E.charAt(z) === "(" && E.charAt(z - 1) === " ") {
            if ((O--, O === -1 && E.charAt(z - 1) === " ")) {
              let W = E.slice(0, z - 1);
              ((E = E.slice(z + 1)), (f += ` (${W}`));
              break;
            }
          }
      }
      if (f) {
        let O = f.match(DE);
        if (O) ((f = O[1]), (T = O[2]));
      }
      if ((Pv(L, E, this._cwd), c))
        Object.defineProperty(L, "constructor", {
          value: !0,
          configurable: !0,
        });
      if (m)
        ((L.evalOrigin = m),
          (L.evalLine = b),
          (L.evalColumn = S),
          (L.evalFile = y && y.replace(/\\/g, "/")));
      if (D) L.native = !0;
      if (f) L.function = f;
      if (T && f !== T) L.method = T;
      return L;
    }
  }
  function Pv(t, s, c) {
    if (s) {
      if (((s = s.replace(/\\/g, "/")), s.startsWith(`${c}/`)))
        s = s.slice(c.length + 1);
      t.file = s;
    }
  }
  function AE(t) {
    if (t.length === 0) return [];
    let s = t.map((c) => TE(c));
    return new RegExp(
      `[/\\\\]node_modules[/\\\\](?:${s.join("|")})[/\\\\][^:]+:\\d+:\\d+`,
    );
  }
  var _E = new RegExp(
      "^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$",
    ),
    DE = /^(.*?) \[as (.*?)\]$/;
  Kv.exports = Nd;
});
class r7 extends cee {
  type;
  timeStamp;
  bubbles;
  cancelable;
  _target = null;
  _currentTarget = null;
  _eventPhase = "none";
  _propagationStopped = !1;
  _defaultPrevented = !1;
  constructor(t, s) {
    super();
    ((this.type = t),
      (this.timeStamp = performance.now()),
      (this.bubbles = s?.bubbles ?? !0),
      (this.cancelable = s?.cancelable ?? !0));
  }
  get target() {
    return this._target;
  }
  get currentTarget() {
    return this._currentTarget;
  }
  get eventPhase() {
    return this._eventPhase;
  }
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  stopPropagation() {
    this._propagationStopped = !0;
  }
  stopImmediatePropagation() {
    (super.stopImmediatePropagation(), (this._propagationStopped = !0));
  }
  preventDefault() {
    if (this.cancelable) this._defaultPrevented = !0;
  }
  consume() {
    (this.preventDefault(), this.stopImmediatePropagation());
  }
  _setTarget(t) {
    this._target = t;
  }
  _setCurrentTarget(t) {
    this._currentTarget = t;
  }
  _setEventPhase(t) {
    this._eventPhase = t;
  }
  _isPropagationStopped() {
    return this._propagationStopped;
  }
  _isImmediatePropagationStopped() {
    return this.didStopImmediatePropagation();
  }
  _prepareForTarget(t) {}
}
class zl extends r7 {
  relatedTarget;
  constructor(t, s = null) {
    super(t, { bubbles: !0, cancelable: !1 });
    this.relatedTarget = s;
  }
}
var np = 32;
class ytn {
  activeElement = null;
  dispatchFocusEvent;
  focusStack = [];
  autoFocusStack = [];
  listeners = new Set();
  constructor(t) {
    this.dispatchFocusEvent = t;
  }
  subscribe = (t) => (this.listeners.add(t), () => this.listeners.delete(t));
  notify() {
    for (let t of this.listeners) t();
  }
  focus(t) {
    if (t === this.activeElement) return;
    let s = this.activeElement;
    if (s) {
      let c = this.focusStack.indexOf(s);
      if (c !== -1) this.focusStack.splice(c, 1);
      if ((this.focusStack.push(s), this.focusStack.length > np))
        this.focusStack.shift();
      this.dispatchFocusEvent(s, new zl("blur", t));
    }
    ((this.activeElement = t),
      this.dispatchFocusEvent(t, new zl("focus", s)),
      this.notify());
  }
  blur() {
    if (!this.activeElement) return;
    let t = this.activeElement;
    ((this.activeElement = null),
      this.dispatchFocusEvent(t, new zl("blur", null)),
      this.notify());
  }
  handleNodeRemoved(t, s) {
    if (
      ((this.focusStack = this.focusStack.filter((m) => m !== t && KB(m, s))),
      (this.autoFocusStack = this.autoFocusStack.filter(
        (m) => m !== t && KB(m, s),
      )),
      !this.activeElement)
    )
      return;
    if (this.activeElement !== t && KB(this.activeElement, s)) return;
    let c = this.activeElement;
    ((this.activeElement = null),
      this.dispatchFocusEvent(c, new zl("blur", null)));
    while (this.focusStack.length > 0) {
      let m = this.focusStack.pop();
      if (KB(m, s)) {
        ((this.activeElement = m),
          this.dispatchFocusEvent(m, new zl("focus", c)),
          this.notify());
        return;
      }
    }
    let f = this.autoFocusStack.at(-1);
    if (f)
      ((this.activeElement = f),
        this.dispatchFocusEvent(f, new zl("focus", c)));
    this.notify();
  }
  pushAutoFocusFallback(t) {
    if (this.autoFocusStack.at(-1) === t) return;
    let s = this.autoFocusStack.indexOf(t);
    if (s !== -1) this.autoFocusStack.splice(s, 1);
    if ((this.autoFocusStack.push(t), this.autoFocusStack.length > np))
      this.autoFocusStack.shift();
  }
  handleAutoFocus(t) {
    (this.pushAutoFocusFallback(t), this.focus(t));
  }
  handleClickFocus(t) {
    if (typeof t.attributes.tabIndex !== "number") return;
    this.focus(t);
  }
  focusNext(t) {
    this.moveFocus(1, t);
  }
  focusPrevious(t) {
    this.moveFocus(-1, t);
  }
  focusDirection(t, s) {
    if (!this.activeElement) return (this.moveFocus(1, s), !0);
    let c = rp(this.activeElement);
    if (!c) return !1;
    let f = null,
      m = 1 / 0;
    for (let y of jc(s)) {
      if (y === this.activeElement) continue;
      let b = rp(y);
      if (!b) continue;
      let S = q0(c, b, t);
      if (S < m) ((m = S), (f = y));
    }
    if (f) return (this.focus(f), !0);
    return !1;
  }
  moveFocus(t, s) {
    let c = jc(s);
    if (c.length === 0) return;
    let f = this.activeElement ? c.indexOf(this.activeElement) : -1,
      m =
        f === -1 ? (t === 1 ? 0 : c.length - 1) : (f + t + c.length) % c.length,
      y = c[m];
    if (y) this.focus(y);
  }
}
function jc(t) {
  let s = [];
  return (op(t, s), s);
}
function op(t, s) {
  let c = t.attributes.tabIndex;
  if (typeof c === "number" && c >= 0) s.push(t);
  for (let f of t.childNodes) if (f.nodeName !== "#text") op(f, s);
}
function KUn(t) {
  for (let s of t.childNodes) {
    if (s.nodeName === "#text") continue;
    if (jc(s).length > 0) return !0;
  }
  return !1;
}
function q0(t, s, c) {
  let f = t.x + t.width / 2,
    m = t.y + t.height / 2,
    y = s.x + s.width / 2,
    b = s.y + s.height / 2,
    S = c === "left" || c === "right",
    E = c === "right" || c === "down" ? 1 : -1,
    x = (S ? y - f : b - m) * E;
  if (x <= 0) return 1 / 0;
  let C = S ? ip(m, s.y, s.height) : ip(f, s.x, s.width),
    D = S ? lp(t.y, t.height, s.y, s.height) : lp(t.x, t.width, s.x, s.width);
  return x + (S ? 2 : 0.5) * C - D;
}
function ip(t, s, c) {
  if (t < s) return s - t;
  if (t > s + c) return t - (s + c);
  return 0;
}
function lp(t, s, c, f) {
  return Math.max(0, Math.min(t + s, c + f) - Math.max(t, c));
}
function rp(t) {
  let s = t.cachedLayout;
  if (s) return s;
  let c = t.yogaNode;
  if (!c) return;
  let f = c.getComputedLeft(),
    m = c.getComputedTop(),
    y = t.parentNode;
  while (y) {
    let b = y.cachedLayout;
    if (b)
      return {
        x: b.x + f,
        y: b.y + m,
        width: c.getComputedWidth(),
        height: c.getComputedHeight(),
      };
    if (y.yogaNode)
      ((f += y.yogaNode.getComputedLeft()), (m += y.yogaNode.getComputedTop()));
    y = y.parentNode;
  }
  return;
}
function KB(t, s) {
  let c = t;
  while (c) {
    if (c === s) return !0;
    c = c.parentNode;
  }
  return !1;
}
function U0e(t) {
  let s = t;
  while (s) {
    if (s.focusManager) return s;
    s = s.parentNode;
  }
  throw Error("Node is not in a tree with a FocusManager");
}
function XB(t) {
  return U0e(t).focusManager;
}
var X0 = 4096;
class ap {
  #e = new Map();
  measure(t) {
    let s = this.#e.get(t);
    if (s !== void 0) return s;
    let c = te(t);
    if (this.#e.size >= X0) this.#e.clear();
    return (this.#e.set(t, c), c);
  }
  get size() {
    return this.#e.size;
  }
  reset() {
    this.#e.clear();
  }
}
var Z0 = new ap();
function E9e(t) {
  return Z0.measure(t);
}
function I0(t, s) {
  if (t.length === 0) return { width: 0, height: 0 };
  let c = s <= 0 || !Number.isFinite(s),
    f = 0,
    m = 0,
    y = 0;
  while (y <= t.length) {
    let b = t.indexOf(
        `
`,
        y,
      ),
      S = b === -1 ? t.substring(y) : t.substring(y, b),
      E = E9e(S);
    if (((m = Math.max(m, E)), c)) f++;
    else f += E === 0 ? 1 : Math.ceil(E / s);
    if (b === -1) break;
    y = b + 1;
  }
  return { width: m, height: f };
}
var A9e = I0;
var Na = "\u2026";
function Wc(t, s, c) {
  let f = TSt(t);
  if (f <= s) return null;
  if (s === 1) return { head: "", tail: "" };
  if (c === "start") return { head: "", tail: Cpe(t, f - s + 1, f) };
  if (c === "middle") {
    let m = Math.floor(s / 2);
    return { head: Cpe(t, 0, m), tail: Cpe(t, f - (s - m) + 1, f) };
  }
  return { head: Cpe(t, 0, s - 1), tail: "" };
}
function J0(t, s, c) {
  if (s < 1) return "";
  let f = Wc(t, s, c);
  return f === null ? t : f.head + Na + f.tail;
}
function Vm(t, s, c = "wrap") {
  if (c === "wrap" || c === "wrap-stream")
    return dp(t, s, { trim: !1, hard: !0 });
  if (c === "wrap-trim") return dp(t, s, { trim: !0, hard: !0 });
  if (c === "end" || c === "middle" || c.startsWith("truncate")) {
    let f = "end";
    if (c === "truncate-middle" || c === "middle") f = "middle";
    if (c === "truncate-start") f = "start";
    return J0(t, s, f);
  }
  return t;
}
import {
  closeSync as cp,
  constants as Vc,
  fstatSync as sp,
  openSync as $0,
  writeSync as eS,
} from "fs";
var tS = 4194304,
  nS = 25,
  iS = Buffer.from("\x1B[0m"),
  Aa = new WeakMap();
function lS() {
  if (!process.stdout.isTTY) return { reason: "not_a_tty" };
  let t, s;
  switch (P()) {
    case "linux":
    case "wsl":
      ((t = "/proc/self/fd/1"), (s = 524288));
      break;
    case "macos": {
      let m = rS();
      if (m === void 0) return { reason: "ttyname_unavailable" };
      ((t = m), (s = 16777216));
      break;
    }
    default:
      return { reason: "platform" };
  }
  let c;
  try {
    c = $0(t, Vc.O_WRONLY | Vc.O_NONBLOCK | Vc.O_NOCTTY | s);
  } catch (m) {
    return { reason: `open_${A(m) ?? "failed"}` };
  }
  let f = "not_same_tty";
  try {
    let m = sp(c),
      y = sp(1);
    if (m.rdev === y.rdev && m.ino === y.ino) return { fd: c };
  } catch (m) {
    f = `fstat_${A(m) ?? "failed"}`;
  }
  try {
    cp(c);
  } catch {}
  return { reason: f };
}
function rS() {
  try {
    let s = Ae("bun:ffi").dlopen("/usr/lib/libSystem.B.dylib", {
      ttyname_r: { args: ["i32", "ptr", "u64"], returns: "i32" },
    });
    try {
      let c = new Uint8Array(256);
      if (s.symbols.ttyname_r(1, c, c.length) !== 0) return;
      return new TextDecoder().decode(c.subarray(0, c.indexOf(0)));
    } finally {
      s.close();
    }
  } catch {
    return;
  }
}
function fp(t, s = lS) {
  let c = Aa.get(process.stdout);
  if (c?.installedWrite !== void 0) return ((c.onEpisodeEnd = t), up(c));
  let f = s();
  if (f.fd === void 0)
    return (n(`nonBlockingStdout: inactive (${f.reason})`), null);
  let m = {
      fd: f.fd,
      originalWrite: process.stdout.write,
      installedWrite: void 0,
      queue: [],
      queuedBytes: 0,
      dropping: !1,
      timer: void 0,
      retryMs: 0,
      episode: { startedMs: 0, peakQueuedBytes: 0, droppedBytes: 0 },
      onEpisodeEnd: t,
      onExit: () => ks(m),
    },
    y = (b, S, E) => {
      let x = typeof S === "string" ? S : void 0,
        C = typeof S === "function" ? S : E;
      if (m.installedWrite === void 0)
        return m.originalWrite.call(process.stdout, b, x, C);
      return (
        oS(m, typeof b === "string" ? Buffer.from(b, x) : Buffer.from(b)),
        C?.(),
        !0
      );
    };
  return (
    (m.installedWrite = y),
    (process.stdout.write = y),
    Aa.set(process.stdout, m),
    process.on("exit", m.onExit),
    n("nonBlockingStdout: active"),
    up(m)
  );
}
function up(t) {
  return {
    flush: () => ks(t),
    restore: () => yp(t),
    isActive: () => t.installedWrite !== void 0,
  };
}
function XUn() {
  return Aa.get(process.stdout)?.installedWrite !== void 0;
}
function QOt() {
  let t = Aa.get(process.stdout);
  if (t?.installedWrite !== void 0) ks(t);
}
function hp(t, s) {
  try {
    return eS(t, s);
  } catch (c) {
    if (A(c) === "EAGAIN") return 0;
    throw c;
  }
}
function oS(t, s) {
  if (s.length === 0) return;
  if (t.queue.length === 0) {
    let c;
    try {
      c = hp(t.fd, s);
    } catch (f) {
      (Xc(t, f), process.stdout.write(s));
      return;
    }
    if (c === s.length) return;
    ((t.episode = {
      startedMs: performance.now(),
      peakQueuedBytes: 0,
      droppedBytes: 0,
    }),
      qc(t, s.subarray(c)),
      mp(t, c > 0));
    return;
  }
  if (t.dropping) {
    t.episode.droppedBytes += s.length;
    return;
  }
  if (t.queuedBytes + s.length > tS) {
    ((t.episode.droppedBytes += t.queuedBytes + s.length),
      (t.queue = []),
      (t.queuedBytes = 0),
      (t.dropping = !0),
      n(
        `nonBlockingStdout: terminal stopped reading; dropped ${t.episode.droppedBytes} queued bytes, will repaint when it resumes`,
        { level: "warn" },
      ),
      qc(t, iS));
    return;
  }
  qc(t, s);
}
function qc(t, s) {
  if (
    (t.queue.push(s),
    (t.queuedBytes += s.length),
    t.queuedBytes > t.episode.peakQueuedBytes)
  )
    t.episode.peakQueuedBytes = t.queuedBytes;
}
function mp(t, s) {
  ((t.retryMs = s ? 0 : Math.min(Math.max(1, t.retryMs * 2), nS)),
    (t.timer = setTimeout(aS, t.retryMs, t)),
    t.timer.unref());
}
function aS(t) {
  t.timer = void 0;
  let s = !1;
  try {
    while (t.queue.length > 0) {
      if (s && t.queue.length > 1)
        t.queue = [Buffer.concat(t.queue, t.queuedBytes)];
      let c = t.queue[0],
        f = hp(t.fd, c);
      if (f === 0) {
        mp(t, s);
        return;
      }
      if (((s = !0), (t.queuedBytes -= f), f < c.length))
        t.queue[0] = c.subarray(f);
      else t.queue.shift();
    }
  } catch (c) {
    Xc(t, c);
    return;
  }
  pp(t, "drain");
}
function pp(t, s) {
  ((t.dropping = !1), (t.retryMs = 0));
  try {
    t.onEpisodeEnd({
      durationMs: Math.round(performance.now() - t.episode.startedMs),
      peakQueuedBytes: t.episode.peakQueuedBytes,
      droppedBytes: t.episode.droppedBytes,
      endedBy: s,
    });
  } catch (c) {
    h(c);
  }
}
function ks(t) {
  if (t.timer !== void 0) (clearTimeout(t.timer), (t.timer = void 0));
  if (t.queue.length === 0) return;
  let s = t.queue;
  ((t.queue = []), (t.queuedBytes = 0));
  try {
    for (let c of s) t.originalWrite.call(process.stdout, c);
  } catch (c) {
    Xc(t, c);
    return;
  }
  pp(t, "flush");
}
function Xc(t, s) {
  (n(`nonBlockingStdout: uninstalling (${s})`),
    (t.queue = []),
    (t.queuedBytes = 0),
    yp(t));
}
function yp(t) {
  if (t.installedWrite === void 0) return;
  if (process.stdout.write === t.installedWrite)
    process.stdout.write = t.originalWrite;
  ((t.installedWrite = void 0),
    Aa.delete(process.stdout),
    process.off("exit", t.onExit));
  try {
    cp(t.fd);
  } catch {}
  ks(t);
}
function il(t) {
  return { flexGrow: 0, flexShrink: 1, flexDirection: "row", textWrap: t };
}
var Mp = {
  wrap: il("wrap"),
  "wrap-trim": il("wrap-trim"),
  "wrap-stream": il("wrap-stream"),
  end: il("end"),
  middle: il("middle"),
  "truncate-end": il("truncate-end"),
  truncate: il("truncate"),
  "truncate-middle": il("truncate-middle"),
  "truncate-start": il("truncate-start"),
};
function sa(vC) {
  let Di = _(36),
    {
      color: Qc,
      backgroundColor: Zc,
      bold: Ic,
      dim: Jc,
      italic: sS,
      underline: uS,
      strikethrough: cS,
      inverse: fS,
      wrap: dS,
      children: Gs,
      "aria-hidden": vp,
      "aria-label": gp,
      "aria-role": bp,
      "aria-state": Sp,
      "aria-preserve-whitespace": Ep,
    } = vC,
    $c = sS === void 0 ? !1 : sS,
    ef = uS === void 0 ? !1 : uS,
    tf = cS === void 0 ? !1 : cS,
    nf = fS === void 0 ? !1 : fS,
    gC = dS === void 0 ? "wrap" : dS;
  if (Gs === void 0 || Gs === null) {
    return null;
  }
  let lf;
  if (Di[0] !== Qc) ((lf = Qc && { color: Qc }), (Di[0] = Qc), (Di[1] = lf));
  else lf = Di[1];
  let rf;
  if (Di[2] !== Zc)
    ((rf = Zc && { backgroundColor: Zc }), (Di[2] = Zc), (Di[3] = rf));
  else rf = Di[3];
  let of;
  if (Di[4] !== Jc) ((of = Jc && { dim: Jc }), (Di[4] = Jc), (Di[5] = of));
  else of = Di[5];
  let af;
  if (Di[6] !== Ic) ((af = Ic && { bold: Ic }), (Di[6] = Ic), (Di[7] = af));
  else af = Di[7];
  let sf;
  if (Di[8] !== $c) ((sf = $c && { italic: $c }), (Di[8] = $c), (Di[9] = sf));
  else sf = Di[9];
  let uf;
  if (Di[10] !== ef)
    ((uf = ef && { underline: ef }), (Di[10] = ef), (Di[11] = uf));
  else uf = Di[11];
  let cf;
  if (Di[12] !== tf)
    ((cf = tf && { strikethrough: tf }), (Di[12] = tf), (Di[13] = cf));
  else cf = Di[13];
  let ff;
  if (Di[14] !== nf)
    ((ff = nf && { inverse: nf }), (Di[14] = nf), (Di[15] = ff));
  else ff = Di[15];
  let hS;
  if (
    Di[16] !== sf ||
    Di[17] !== uf ||
    Di[18] !== cf ||
    Di[19] !== ff ||
    Di[20] !== lf ||
    Di[21] !== rf ||
    Di[22] !== of ||
    Di[23] !== af
  )
    ((hS = { ...lf, ...rf, ...of, ...af, ...sf, ...uf, ...cf, ...ff }),
      (Di[16] = sf),
      (Di[17] = uf),
      (Di[18] = cf),
      (Di[19] = ff),
      (Di[20] = lf),
      (Di[21] = rf),
      (Di[22] = of),
      (Di[23] = af),
      (Di[24] = hS));
  else hS = Di[24];
  let xp = hS;
  const Cp = Mp[gC];
  let df;
  if (
    Di[25] !== vp ||
    Di[26] !== gp ||
    Di[27] !== Ep ||
    Di[28] !== bp ||
    Di[29] !== Sp
  )
    ((df = $at(vp, gp, bp, Sp, Ep)),
      (Di[25] = vp),
      (Di[26] = gp),
      (Di[27] = Ep),
      (Di[28] = bp),
      (Di[29] = Sp),
      (Di[30] = df));
  else df = Di[30];
  let mS;
  if (Di[31] !== Gs || Di[32] !== Cp || Di[33] !== df || Di[34] !== xp)
    ((mS = e("ink-text", {
      style: Cp,
      textStyles: xp,
      accessibility: df,
      children: Gs,
    })),
      (Di[31] = Gs),
      (Di[32] = Cp),
      (Di[33] = df),
      (Di[34] = xp),
      (Di[35] = mS));
  else mS = Di[35];
  return mS;
}
var v9e = 300;
class tDt extends cee {
  col;
  row;
  localCol = 0;
  localRow = 0;
  cellIsBlank;
  hyperlinkUrl;
  isWindowActivation;
  defaultAllowed = !1;
  allowDefault() {
    this.defaultAllowed = !0;
  }
  droppedAsStray = !1;
  dropAsStray() {
    this.droppedAsStray = !0;
  }
  constructor(t, s, c, f, m = !1) {
    super();
    ((this.col = t),
      (this.row = s),
      (this.cellIsBlank = c),
      (this.hyperlinkUrl = f),
      (this.isWindowActivation = m));
  }
}
var pS = (t) => {
  let s = new Set();
  do for (let c of Reflect.ownKeys(t)) s.add([t, c]);
  while ((t = Reflect.getPrototypeOf(t)) && t !== Object.prototype);
  return s;
};
function hf(t, { include: s, exclude: c } = {}) {
  let f = (m) => {
    let y = (b) => (typeof b === "string" ? m === b : b.test(m));
    if (s) return s.some(y);
    if (c) return !c.some(y);
    return !0;
  };
  for (let [m, y] of pS(t.constructor.prototype)) {
    if (y === "constructor" || !f(y)) continue;
    let b = Reflect.getOwnPropertyDescriptor(m, y);
    if (b && typeof b.value === "function") t[y] = t[y].bind(t);
  }
  return t;
}
import {
  closeSync as Ox,
  constants as _g,
  openSync as wx,
  readSync as Hx,
  writeSync as $d,
} from "fs";
var yS = function () {
    return sE.Date.now();
  },
  js = yS;
var vS = "Expected a function",
  { max: gS, min: bS } = Math;
function SS(t, s, c) {
  var f,
    m,
    y,
    b,
    S,
    E,
    x = 0,
    C = !1,
    D = !1,
    N = !0;
  if (typeof t != "function") throw TypeError(vS);
  if (((s = M7(s) || 0), Fm(c)))
    ((C = !!c.leading),
      (D = "maxWait" in c),
      (y = D ? gS(M7(c.maxWait) || 0, s) : y),
      (N = "trailing" in c ? !!c.trailing : N));
  function T(Z) {
    var J = f,
      re = m;
    return ((f = m = void 0), (x = Z), (b = t.apply(re, J)), b);
  }
  function L(Z) {
    return ((x = Z), (S = setTimeout(W, s)), C ? T(Z) : b);
  }
  function O(Z) {
    var J = Z - E,
      re = Z - x,
      Q = s - J;
    return D ? bS(Q, y - re) : Q;
  }
  function z(Z) {
    var J = Z - E,
      re = Z - x;
    return E === void 0 || J >= s || J < 0 || (D && re >= y);
  }
  function W() {
    var Z = js();
    if (z(Z)) return Y(Z);
    S = setTimeout(W, O(Z));
  }
  function Y(Z) {
    if (((S = void 0), N && f)) return T(Z);
    return ((f = m = void 0), b);
  }
  function X() {
    if (S !== void 0) clearTimeout(S);
    ((x = 0), (f = E = m = S = void 0));
  }
  function U() {
    return S === void 0 ? b : Y(js());
  }
  function k() {
    var Z = js(),
      J = z(Z);
    if (((f = arguments), (m = this), (E = Z), J)) {
      if (S === void 0) return L(E);
      if (D) return (clearTimeout(S), (S = setTimeout(W, s)), T(E));
    }
    if (S === void 0) S = setTimeout(W, s);
    return b;
  }
  return ((k.cancel = X), (k.flush = U), k);
}
var Rp = SS;
var ES = "Expected a function";
function xS(t, s, c) {
  var f = !0,
    m = !0;
  if (typeof t != "function") throw TypeError(ES);
  if (Fm(c))
    ((f = "leading" in c ? !!c.leading : f),
      (m = "trailing" in c ? !!c.trailing : m));
  return Rp(t, s, { leading: f, maxWait: s, trailing: m });
}
var Tp = xS;
F();
var mf = 1,
  Ws = 8,
  _a = 32,
  pf = 2;
var yf = 0;
var en = { unit: 0, value: NaN },
  ll = { unit: 3, value: NaN };
function wi(t) {
  return Number.isFinite(t) && Math.abs(t) <= 2147483647;
}
function Is(t) {
  return wi(t) ? { unit: 1, value: Zn(t) } : en;
}
function Xn(t) {
  return wi(t) ? { unit: 2, value: t } : en;
}
function mt(t, s) {
  switch (t.unit) {
    case 1:
      return t.value;
    case 2: {
      let c = (t.value * s) / 100;
      return wi(c) ? Zn(c) : NaN;
    }
    default:
      return NaN;
  }
}
function Qe(t) {
  return !isNaN(t);
}
var Js = -2147483648;
function Zn(t) {
  return t >= 0 ? (t + 0.5) | 0 : (t - 0.5) | 0;
}
function Ot(t) {
  return t !== t ? Js : t;
}
var Eo = 0,
  xo = 1,
  wa = 2;
function vf(t) {
  return new Int32Array(t).fill(Js);
}
function Np() {
  return {
    direction: 0,
    flexDirection: 0,
    justifyContent: 0,
    alignItems: 4,
    alignSelf: 0,
    alignContent: 1,
    flexWrap: 0,
    overflow: 0,
    display: 0,
    positionType: 1,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: ll,
    margin: [, , , , , , , , ,].fill(en),
    padding: [, , , , , , , , ,].fill(en),
    border: [, , , , , , , , ,].fill(en),
    position: [, , , , , , , , ,].fill(en),
    gap: [, , ,].fill(en),
    width: ll,
    height: ll,
    minWidth: en,
    minHeight: en,
    maxWidth: en,
    maxHeight: en,
  };
}
var An = 0,
  In = 1,
  hi = 2,
  Hi = 3;
function Ul(t, s, c, f = !1) {
  let m = Qn(t, s);
  if (m.unit === 0) return 0;
  if (m.unit === 3) return f ? NaN : 0;
  return mt(m, c);
}
function Qn(t, s) {
  let c = s === An ? t[4] : s === hi ? t[5] : en;
  if (c.unit === 0) c = t[s];
  if (c.unit === 0)
    if (s === An || s === hi) c = t[6];
    else c = t[7];
  if (c.unit === 0) c = t[8];
  return c;
}
function Oi(t, s) {
  return Qn(t, s).unit === 3;
}
function $s(t, s) {
  for (let c = 0; c < 9; c++) if (t[c].unit === s) return !0;
  return !1;
}
function Vs(t) {
  for (let s = 0; s < 9; s++) if (t[s].unit !== 0) return !0;
  return !1;
}
function qn(t) {
  return (
    t.width.unit === 2 ||
    t.minWidth.unit === 2 ||
    t.maxWidth.unit === 2 ||
    $s(t.margin, 2) ||
    $s(t.padding, 2)
  );
}
function Sr(t) {
  return (
    t.height.unit === 2 || t.minHeight.unit === 2 || t.maxHeight.unit === 2
  );
}
function gf(t, s, c) {
  let f = t[6],
    m = t[7],
    y = t[8],
    b = t[4],
    S = t[5],
    E = b;
  if (E.unit === 0) E = t[0];
  if (E.unit === 0) E = f;
  if (E.unit === 0) E = y;
  if (((c[0] = qs(E, s)), (E = t[1]), E.unit === 0)) E = m;
  if (E.unit === 0) E = y;
  if (((c[1] = qs(E, s)), (E = S), E.unit === 0)) E = t[2];
  if (E.unit === 0) E = f;
  if (E.unit === 0) E = y;
  if (((c[2] = qs(E, s)), (E = t[3]), E.unit === 0)) E = m;
  if (E.unit === 0) E = y;
  c[3] = qs(E, s);
}
function qs(t, s) {
  let c = t.unit;
  if (c === 1) return t.value;
  if (c === 2) {
    let f = (t.value * s) / 100;
    return wi(f) ? Zn(f) : 0;
  }
  return 0;
}
function Ba(t) {
  return t === 2 || t === 3;
}
function qp(t) {
  return t === 3 || t === 1;
}
function CS(t) {
  return Ba(t) ? 0 : 2;
}
function eu(t) {
  switch (t) {
    case 2:
      return An;
    case 3:
      return hi;
    case 0:
      return In;
    case 1:
      return Hi;
  }
}
function Cf(t) {
  switch (t) {
    case 2:
      return hi;
    case 3:
      return An;
    case 0:
      return Hi;
    case 1:
      return In;
  }
}
function Xp() {
  let t = {
    pointScaleFactor: 1,
    errata: 0,
    useWebDefaults: !1,
    generation: 0,
    nodesVisited: 0,
    measureCalls: 0,
    measureCacheHits: 0,
    cacheHits: 0,
    liveNodes: 0,
    free() {},
    isExperimentalFeatureEnabled() {
      return !1;
    },
    setExperimentalFeatureEnabled() {},
    setPointScaleFactor(s) {
      if (s !== 0 && s !== 1)
        throw Error(
          "setPointScaleFactor: Int32 storage supports scale 0 or 1 only",
        );
      t.pointScaleFactor = s;
    },
    getErrata() {
      return t.errata;
    },
    setErrata(s) {
      t.errata = s;
    },
    setUseWebDefaults(s) {
      t.useWebDefaults = s;
    },
  };
  return t;
}
class Da {
  style;
  layout;
  parent;
  children;
  measureFunc;
  config;
  isDirty_;
  isReferenceBaseline_;
  _sz = new Int32Array(3);
  _lineIndex = 0;
  _hasAutoMargin = !1;
  _hasPosition = !1;
  _hasPadding = !1;
  _hasBorder = !1;
  _hasMargin = !1;
  _readsOwnerWidth = !1;
  _readsOwnerHeight = !1;
  _lc = vf(6);
  _lWM = 0;
  _lHM = 0;
  _lFW = !1;
  _lFH = !1;
  _hasL = !1;
  _mc = vf(6);
  _mWM = 0;
  _mHM = 0;
  _hasM = !1;
  _fb = vf(5);
  _fbCrossMode = -1;
  _fbIsRow = !1;
  _fbGen = -1;
  _cIn = null;
  _cOut = null;
  _cGen = -1;
  _cN = 0;
  _cWr = 0;
  _mfC = null;
  _mfN = 0;
  _mfWr = 0;
  _mGen = -1;
  constructor(t) {
    ((this.style = Np()),
      (this.layout = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        border: new Int32Array(4),
        padding: new Int32Array(4),
        margin: new Int32Array(4),
      }),
      (this.parent = null),
      (this.children = []),
      (this.measureFunc = null),
      (this.config = t ?? MS),
      (this.isDirty_ = !0),
      (this.isReferenceBaseline_ = !1),
      this.config.liveNodes++);
  }
  insertChild(t, s) {
    if (t.config !== this.config)
      throw Error("insertChild: child was created with a different Config");
    ((t.parent = this), this.children.splice(s, 0, t), this.markDirty());
  }
  removeChild(t) {
    let s = this.children.indexOf(t);
    if (s >= 0)
      (this.children.splice(s, 1), (t.parent = null), this.markDirty());
  }
  getChild(t) {
    return this.children[t];
  }
  getChildCount() {
    return this.children.length;
  }
  getParent() {
    return this.parent;
  }
  free() {
    ((this.parent = null),
      (this.children = []),
      (this.measureFunc = null),
      (this._cIn = null),
      (this._cOut = null),
      this.config.liveNodes--);
  }
  freeRecursive() {
    let t = this.children;
    for (let s = 0, c = t.length; s < c; s++) t[s].freeRecursive();
    this.free();
  }
  clearLayoutCacheRecursive() {
    let t = new Set(),
      s = [this],
      c = (this.config.liveNodes | 0) * 4 + 1024;
    while (s.length > 0 && --c >= 0) {
      let f = s.pop();
      if (!(f instanceof Da) || t.has(f)) continue;
      (t.add(f),
        (f.isDirty_ = !0),
        (f._hasL = !1),
        (f._hasM = !1),
        (f._cN = 0),
        (f._cWr = 0),
        (f._cGen = -1),
        (f._mfN = 0),
        (f._mfWr = 0),
        (f._fbCrossMode = -1),
        (f._fbGen = -1),
        (f._mGen = -1));
      let m = f.children;
      if (Array.isArray(m))
        for (let y = 0, b = m.length; y < b && y < c; y++) s.push(m[y]);
    }
    try {
      this.markDirty();
    } catch {}
  }
  reset() {
    ((this.style = Np()),
      (this.children = []),
      (this.parent = null),
      (this.measureFunc = null),
      (this.isDirty_ = !0),
      (this._hasAutoMargin = !1),
      (this._hasPosition = !1),
      (this._hasPadding = !1),
      (this._hasBorder = !1),
      (this._hasMargin = !1),
      (this._readsOwnerWidth = !1),
      (this._readsOwnerHeight = !1),
      (this._hasL = !1),
      (this._hasM = !1),
      (this._cN = 0),
      (this._cWr = 0),
      (this._mfN = 0),
      (this._mfWr = 0),
      (this._fbCrossMode = -1),
      (this._fbGen = -1),
      (this._mGen = -1));
  }
  markDirty() {
    ((this.isDirty_ = !0), (this._mfN = 0), (this._mfWr = 0));
    let t = this.parent;
    if (t && !t.isDirty_) t.markDirty();
  }
  isDirty() {
    return this.isDirty_;
  }
  hasNewLayout() {
    return !0;
  }
  markLayoutSeen() {}
  setMeasureFunc(t) {
    ((this.measureFunc = t), this.markDirty());
  }
  unsetMeasureFunc() {
    ((this.measureFunc = null), this.markDirty());
  }
  getComputedLeft() {
    return this.layout.left;
  }
  getComputedTop() {
    return this.layout.top;
  }
  getComputedWidth() {
    return this.layout.width;
  }
  getComputedHeight() {
    return this.layout.height;
  }
  getComputedRight() {
    let t = this.parent;
    if (!t) return 0;
    let s = this.layout;
    return t.layout.width - s.left - s.width;
  }
  getComputedBottom() {
    let t = this.parent;
    if (!t) return 0;
    let s = this.layout;
    return t.layout.height - s.top - s.height;
  }
  getComputedLayout() {
    return {
      left: this.layout.left,
      top: this.layout.top,
      right: this.getComputedRight(),
      bottom: this.getComputedBottom(),
      width: this.layout.width,
      height: this.layout.height,
    };
  }
  getComputedBorder(t) {
    return this.layout.border[Ef(t)];
  }
  getComputedPadding(t) {
    return this.layout.padding[Ef(t)];
  }
  getComputedMargin(t) {
    return this.layout.margin[Ef(t)];
  }
  setWidth(t) {
    ((this.style.width = di(t)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setWidthPercent(t) {
    ((this.style.width = Xn(t)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setWidthAuto() {
    ((this.style.width = ll),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setHeight(t) {
    ((this.style.height = di(t)),
      (this._readsOwnerHeight = Sr(this.style)),
      this.markDirty());
  }
  setHeightPercent(t) {
    ((this.style.height = Xn(t)),
      (this._readsOwnerHeight = Sr(this.style)),
      this.markDirty());
  }
  setHeightAuto() {
    ((this.style.height = ll),
      (this._readsOwnerHeight = Sr(this.style)),
      this.markDirty());
  }
  setMinWidth(t) {
    ((this.style.minWidth = di(t)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setMinWidthPercent(t) {
    ((this.style.minWidth = Xn(t)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setMinHeight(t) {
    ((this.style.minHeight = di(t)),
      (this._readsOwnerHeight = Sr(this.style)),
      this.markDirty());
  }
  setMinHeightPercent(t) {
    ((this.style.minHeight = Xn(t)),
      (this._readsOwnerHeight = Sr(this.style)),
      this.markDirty());
  }
  setMaxWidth(t) {
    ((this.style.maxWidth = di(t)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setMaxWidthPercent(t) {
    ((this.style.maxWidth = Xn(t)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setMaxHeight(t) {
    ((this.style.maxHeight = di(t)),
      (this._readsOwnerHeight = Sr(this.style)),
      this.markDirty());
  }
  setMaxHeightPercent(t) {
    ((this.style.maxHeight = Xn(t)),
      (this._readsOwnerHeight = Sr(this.style)),
      this.markDirty());
  }
  setFlexDirection(t) {
    ((this.style.flexDirection = t), this.markDirty());
  }
  setFlexGrow(t) {
    ((this.style.flexGrow = t ?? 0), this.markDirty());
  }
  setFlexShrink(t) {
    ((this.style.flexShrink = t ?? 0), this.markDirty());
  }
  setFlex(t) {
    if (t === void 0 || isNaN(t))
      ((this.style.flexGrow = 0), (this.style.flexShrink = 0));
    else if (t > 0)
      ((this.style.flexGrow = t),
        (this.style.flexShrink = 1),
        (this.style.flexBasis = Is(0)));
    else if (t < 0) ((this.style.flexGrow = 0), (this.style.flexShrink = -t));
    else ((this.style.flexGrow = 0), (this.style.flexShrink = 0));
    this.markDirty();
  }
  setFlexBasis(t) {
    ((this.style.flexBasis = di(t)), this.markDirty());
  }
  setFlexBasisPercent(t) {
    ((this.style.flexBasis = Xn(t)), this.markDirty());
  }
  setFlexBasisAuto() {
    ((this.style.flexBasis = ll), this.markDirty());
  }
  setFlexWrap(t) {
    ((this.style.flexWrap = t), this.markDirty());
  }
  setAlignItems(t) {
    ((this.style.alignItems = t), this.markDirty());
  }
  setAlignSelf(t) {
    ((this.style.alignSelf = t), this.markDirty());
  }
  setAlignContent(t) {
    ((this.style.alignContent = t), this.markDirty());
  }
  setJustifyContent(t) {
    ((this.style.justifyContent = t), this.markDirty());
  }
  setDisplay(t) {
    ((this.style.display = t), this.markDirty());
  }
  getDisplay() {
    return this.style.display;
  }
  setPositionType(t) {
    ((this.style.positionType = t), this.markDirty());
  }
  setPosition(t, s) {
    ((this.style.position[t] = di(s)),
      (this._hasPosition = Vs(this.style.position)),
      this.markDirty());
  }
  setPositionPercent(t, s) {
    ((this.style.position[t] = Xn(s)),
      (this._hasPosition = !0),
      this.markDirty());
  }
  setPositionAuto(t) {
    ((this.style.position[t] = ll), (this._hasPosition = !0), this.markDirty());
  }
  setOverflow(t) {
    ((this.style.overflow = t), this.markDirty());
  }
  setDirection(t) {
    ((this.style.direction = t), this.markDirty());
  }
  setBoxSizing(t) {}
  setMargin(t, s) {
    let c = di(s);
    if (((this.style.margin[t] = c), c.unit === 3)) this._hasAutoMargin = !0;
    else this._hasAutoMargin = $s(this.style.margin, 3);
    ((this._hasMargin = this._hasAutoMargin || Vs(this.style.margin)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setMarginPercent(t, s) {
    ((this.style.margin[t] = Xn(s)),
      (this._hasAutoMargin = $s(this.style.margin, 3)),
      (this._hasMargin = !0),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setMarginAuto(t) {
    ((this.style.margin[t] = ll),
      (this._hasAutoMargin = !0),
      (this._hasMargin = !0),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setPadding(t, s) {
    ((this.style.padding[t] = di(s)),
      (this._hasPadding = Vs(this.style.padding)),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setPaddingPercent(t, s) {
    ((this.style.padding[t] = Xn(s)),
      (this._hasPadding = !0),
      (this._readsOwnerWidth = qn(this.style)),
      this.markDirty());
  }
  setBorder(t, s) {
    ((this.style.border[t] = s === void 0 ? en : Is(s)),
      (this._hasBorder = Vs(this.style.border)),
      this.markDirty());
  }
  setGap(t, s) {
    ((this.style.gap[t] = di(s)), this.markDirty());
  }
  setGapPercent(t, s) {
    ((this.style.gap[t] = Xn(s)), this.markDirty());
  }
  getFlexDirection() {
    return this.style.flexDirection;
  }
  getJustifyContent() {
    return this.style.justifyContent;
  }
  getAlignItems() {
    return this.style.alignItems;
  }
  getAlignSelf() {
    return this.style.alignSelf;
  }
  getAlignContent() {
    return this.style.alignContent;
  }
  getFlexGrow() {
    return this.style.flexGrow;
  }
  getFlexShrink() {
    return this.style.flexShrink;
  }
  getFlexBasis() {
    return this.style.flexBasis;
  }
  getFlexWrap() {
    return this.style.flexWrap;
  }
  getWidth() {
    return this.style.width;
  }
  getHeight() {
    return this.style.height;
  }
  getOverflow() {
    return this.style.overflow;
  }
  getPositionType() {
    return this.style.positionType;
  }
  getDirection() {
    return this.style.direction;
  }
  copyStyle(t) {}
  setDirtiedFunc(t) {}
  unsetDirtiedFunc() {}
  setIsReferenceBaseline(t) {
    ((this.isReferenceBaseline_ = t), this.markDirty());
  }
  isReferenceBaseline() {
    return this.isReferenceBaseline_;
  }
  setAspectRatio(t) {}
  getAspectRatio() {
    return NaN;
  }
  setAlwaysFormsContainingBlock(t) {}
  calculateLayout(t, s, c) {
    let f = this.config;
    ((f.nodesVisited = 0),
      (f.measureCalls = 0),
      (f.measureCacheHits = 0),
      (f.cacheHits = 0),
      f.generation++);
    let m = wi(t) ? Zn(t) : NaN,
      y = wi(s) ? Zn(s) : NaN;
    Mo(this, m, y, Qe(m) ? 1 : 0, Qe(y) ? 1 : 0, m, y, !0, !1, !1);
    let b = this.layout.margin,
      S = mt(Qn(this.style.position, An), Qe(m) ? m : 0),
      E = mt(Qn(this.style.position, In), Qe(y) ? y : 0);
    if (
      ((this.layout.left = b[An] + (Qe(S) ? S : 0)),
      (this.layout.top = b[In] + (Qe(E) ? E : 0)),
      this.config.pointScaleFactor !== 0)
    )
      iy(this);
  }
}
var MS = Xp(),
  Qs = 8,
  bf = 4;
function RS(t, s, c, f, m, y, b, S, E, x, C) {
  let D = t.config.generation;
  if (C && t._cGen !== D) ((t._cN = 0), (t._cWr = 0));
  if (x) return;
  if (!t._cIn)
    ((t._cIn = new Int32Array(Qs * 8)), (t._cOut = new Int32Array(Qs * 2)));
  let N = t._cWr++ % Qs;
  if (t._cN < Qs) t._cN = t._cWr;
  let T = N * 8,
    L = t._cIn;
  ((L[T] = Ot(s)),
    (L[T + 1] = Ot(c)),
    (L[T + 2] = f),
    (L[T + 3] = m),
    (L[T + 4] = Ot(y)),
    (L[T + 5] = Ot(b)),
    (L[T + 6] = S ? 1 : 0),
    (L[T + 7] = E ? 1 : 0));
  let { _cOut: O, layout: z } = t;
  ((O[N * 2] = z.width), (O[N * 2 + 1] = z.height), (t._cGen = D));
}
function TS(t, s) {
  let c = t.layout,
    { width: f, height: m } = c;
  if (s) ((t._lc[4] = f), (t._lc[5] = m));
  else ((t._mc[4] = f), (t._mc[5] = m));
}
function Qp(t) {
  let s = t.config;
  return {
    visited: s.nodesVisited,
    measured: s.measureCalls,
    measureCacheHits: s.measureCacheHits,
    cacheHits: s.cacheHits,
    live: s.liveNodes,
  };
}
function NS(t, s, c, f, m, y, b, S, E, x, C) {
  let D = t.config,
    N = D.generation,
    T = t._cGen === N && !E,
    L = E && t._mGen === N,
    O = t.isDirty_;
  if ((O && !T) || L) return !1;
  let z = Ot(c),
    W = Ot(f),
    Y = Ot(b),
    X = Ot(S);
  if (
    !O &&
    t._hasL &&
    t._lWM === m &&
    t._lHM === y &&
    t._lFW === x &&
    t._lFH === C &&
    t._lc[0] === z &&
    t._lc[1] === W &&
    t._lc[2] === Y &&
    t._lc[3] === X
  )
    return (D.cacheHits++, (s.width = t._lc[4]), (s.height = t._lc[5]), !0);
  let U = t._cN;
  if (U > 0 && !E && (T || !O)) {
    let { _cIn: k, _cOut: Z } = t,
      J = x ? 1 : 0,
      re = C ? 1 : 0;
    for (let Q = 0; Q < U; Q++) {
      let ce = Q * 8;
      if (
        k[ce + 2] === m &&
        k[ce + 3] === y &&
        k[ce + 6] === J &&
        k[ce + 7] === re &&
        k[ce] === z &&
        k[ce + 1] === W &&
        k[ce + 4] === Y &&
        k[ce + 5] === X
      )
        return (
          (s.width = Z[Q * 2]),
          (s.height = Z[Q * 2 + 1]),
          D.cacheHits++,
          !0
        );
    }
  }
  if (
    !O &&
    !E &&
    t._hasM &&
    t._mWM === m &&
    t._mHM === y &&
    t._mc[0] === z &&
    t._mc[1] === W &&
    t._mc[2] === Y &&
    t._mc[3] === X
  )
    return ((s.width = t._mc[4]), (s.height = t._mc[5]), D.cacheHits++, !0);
  return !1;
}
function AS(t, s, c, f, m, y, b, S, E, x) {
  let C = t.isDirty_;
  if (S) {
    if (
      ((t._lc[0] = Ot(s)),
      (t._lc[1] = Ot(c)),
      (t._lWM = f),
      (t._lHM = m),
      (t._lc[2] = Ot(y)),
      (t._lc[3] = Ot(b)),
      (t._lFW = E),
      (t._lFH = x),
      (t._hasL = !0),
      (t.isDirty_ = !1),
      C)
    )
      t._hasM = !1;
  } else if (
    ((t._mc[0] = Ot(s)),
    (t._mc[1] = Ot(c)),
    (t._mWM = f),
    (t._mHM = m),
    (t._mc[2] = Ot(y)),
    (t._mc[3] = Ot(b)),
    (t._hasM = !0),
    (t._mGen = t.config.generation),
    C)
  )
    t._hasL = !1;
  return C;
}
function Mo(t, s, c, f, m, y, b, S, E, x) {
  t.config.nodesVisited++;
  let { style: C, layout: D } = t,
    N = t._readsOwnerWidth ? y : NaN,
    T = t._readsOwnerHeight ? b : NaN;
  if (NS(t, D, s, c, f, m, N, T, S, E, x)) return;
  let L = AS(t, s, c, f, m, N, T, S, E, x),
    { padding: O, border: z, margin: W } = D;
  if (t._hasPadding) gf(C.padding, y, O);
  else O[0] = O[1] = O[2] = O[3] = 0;
  if (t._hasBorder) gf(C.border, y, z);
  else z[0] = z[1] = z[2] = z[3] = 0;
  if (t._hasMargin) gf(C.margin, y, W);
  else W[0] = W[1] = W[2] = W[3] = 0;
  let Y = O[0] + O[2] + z[0] + z[2],
    X = O[1] + O[3] + z[1] + z[3],
    U = E ? NaN : mt(C.width, y),
    k = x ? NaN : mt(C.height, b),
    Z = s,
    J = c,
    re = f,
    Q = m;
  if (Qe(U)) ((Z = U), (re = 1));
  if (Qe(k)) ((J = k), (Q = 1));
  if (
    ((Z = Pn(C, !0, Z, y, b)),
    (J = Pn(C, !1, J, y, b)),
    t.children.length === 0)
  )
    if (t.measureFunc) _S(t, C, D, Z, J, re, Q, Y, X, y, b);
    else
      ((D.width = re === 1 ? Z : Pn(C, !0, Y, y, b)),
        (D.height = Q === 1 ? J : Pn(C, !1, X, y, b)));
  else DS(t, C, D, Z, J, re, Q, Y, X, y, b, S);
  (TS(t, S), RS(t, s, c, f, m, N, T, E, x, S, L));
}
function _S(t, s, c, f, m, y, b, S, E, x, C) {
  if (y === 1 && b === 1) {
    ((c.width = f), (c.height = m));
    return;
  }
  let D = y === 0 ? NaN : Math.max(0, f - S),
    N = D >= 1 ? D | 0 : D,
    T = b === 0 ? NaN : Math.max(0, m - E),
    L = T >= 1 ? T | 0 : T,
    O = t.config;
  O.measureCalls++;
  let z = Ot(N),
    W = Ot(L),
    Y = t._mfC;
  for (let re = 0; re < t._mfN; re++) {
    let Q = re * 6,
      ce = Y[Q + 4],
      le = Y[Q + 5];
    if (Ap(y, z, Y[Q + 1], Y[Q], ce) && Ap(b, W, Y[Q + 3], Y[Q + 2], le)) {
      (O.measureCacheHits++,
        (c.width = y === 1 ? f : Pn(s, !0, ce + S, x, C)),
        (c.height = b === 1 ? m : Pn(s, !1, le + E, x, C)));
      return;
    }
  }
  let X = t.measureFunc(N, y, L, b);
  if (!Y) Y = t._mfC = new Int32Array(bf * 6);
  let U = t._mfWr++ % bf;
  if (t._mfN < bf) t._mfN++;
  let k = U * 6;
  ((Y[k] = z), (Y[k + 1] = y), (Y[k + 2] = W), (Y[k + 3] = b));
  let Z = wi(X.width) ? Math.ceil(X.width) : 0,
    J = wi(X.height) ? Math.ceil(X.height) : 0;
  ((Y[k + 4] = Z),
    (Y[k + 5] = J),
    (c.width = y === 1 ? f : Pn(s, !0, Z + S, x, C)),
    (c.height = b === 1 ? m : Pn(s, !1, J + E, x, C)));
}
function Ap(t, s, c, f, m) {
  if (c === t && f === s) return !0;
  if (c === 1) return !1;
  if (t === 1) return s === m && (c === 0 || m <= f);
  return t === 2 && m <= s && (c === 0 || f > s);
}
function DS(t, s, c, f, m, y, b, S, E, x, C, D) {
  let { padding: N, border: T } = c,
    L = s.flexDirection,
    O = CS(L),
    z = Ba(L),
    W = z ? f : m,
    Y = z ? m : f,
    X = z ? y : b,
    U = z ? b : y,
    k = z ? S : E,
    Z = z ? E : S,
    J = Qe(W) ? Math.max(0, W - k) : NaN,
    re = Qe(Y) ? Math.max(0, Y - Z) : NaN,
    Q = Fp(s, z ? 0 : 1, J),
    ce = [],
    le = [];
  ny(t, ce, le);
  let oe = Qe(f) ? f : NaN,
    fe = Qe(m) ? m : NaN,
    ue = s.flexWrap !== 0,
    se = Fp(s, z ? 1 : 0, re),
    ve = ce.length;
  for (let Pe = 0; Pe < ve; Pe++) {
    let it = ce[Pe];
    it._sz[Eo] = YS(it, L, J, re, U, oe, fe);
  }
  let he;
  if (!ue || !Qe(J) || ve === 0) {
    for (let Pe = 0; Pe < ve; Pe++) ce[Pe]._lineIndex = 0;
    he = [ce];
  } else he = BS(ce, J, z, L, oe, fe, Q);
  let Se = he.length,
    Ee = jS(t, ce),
    Ue = new Int32Array(Se),
    ke = new Int32Array(Se),
    et = Ee ? new Int32Array(Se) : OS,
    wt = z ? x : C,
    bt = 0,
    Mt = 0;
  for (let Pe = 0; Pe < Se; Pe++) {
    let it = he[Pe];
    wS(it, s, L, O, z, J, re, U, Q, oe, fe, wt, k, ue, D);
    let ut = Ip;
    if (Ee) ut = LS(t, it, oe, et, Pe, ut);
    let Ve = Zp;
    ((Ue[Pe] = Ve), (ke[Pe] = ut), (bt = Math.max(bt, Ve)), (Mt += ut));
  }
  let nn = Se > 1 ? se * (Se - 1) : 0;
  Mt += nn;
  let rn = s.overflow === 2,
    yt = bt + k,
    ti =
      X === 1
        ? W
        : X === 2 && rn
          ? Math.max(Math.min(W, yt), k)
          : ue && Se > 1 && X === 2
            ? W
            : yt,
    Vt = Mt + Z,
    Rt = U === 1 ? Y : U === 2 && rn ? Math.max(Math.min(Y, Vt), Z) : Vt,
    tt = Pn(s, !0, z ? ti : Rt, x, C),
    St = Pn(s, !1, z ? Rt : ti, x, C);
  if (((c.width = tt), (c.height = St), !D)) return;
  let hn = (z ? tt : St) - k,
    Lt = (z ? St : tt) - Z,
    nt = eu(L),
    mn = z ? In : An,
    Ce = z ? Hi : hi,
    He = qp(L),
    Me = z ? tt : St,
    Te = N[mn] + T[mn],
    _e = se,
    Le = Lt - Mt;
  if (Se === 1 && !ue && !Ee) ke[0] = Lt;
  else (zS(s.alignContent, Le, Se, ke), (Te += So), (_e += Er));
  let De = s.flexWrap === 2,
    rt = z ? St : tt,
    st = ue || U !== 1,
    Ne = N[nt] + T[nt],
    Ke = s.alignItems,
    ot = Te;
  for (let Pe = 0; Pe < Se; Pe++) {
    let it = he[Pe],
      ut = ke[Pe];
    if (st) US(it, Ke, z, O, mn, Ce, ut, oe, fe, D);
    (HS(
      it,
      s,
      L,
      z,
      ut,
      De ? rt - ot - ut : ot,
      Ue[Pe],
      hn,
      Ne,
      Me,
      Q,
      oe,
      fe,
      He,
      De,
      Ee,
      Ee ? et[Pe] : 0,
    ),
      (ot += ut + _e));
  }
  for (let Pe = 0, it = le.length; Pe < it; Pe++) PS(t, le[Pe], tt, St, N, T);
}
var OS = new Int32Array(0),
  So = 0,
  Er = 0,
  Zp = 0,
  Ip = 0;
function wS(t, s, c, f, m, y, b, S, E, x, C, D, N, T, L) {
  let O = t.length,
    z = s.alignItems,
    W = O > 1 ? E * (O - 1) : 0,
    Y = W;
  for (let le = 0; le < O; le++) {
    let oe = t[le];
    Y += oe._sz[Eo] + xr(oe, c, x);
  }
  let X = y;
  if (X !== X) {
    let le = mt(m ? s.minWidth : s.minHeight, D),
      oe = mt(m ? s.maxWidth : s.maxHeight, D);
    if (oe === oe && Y > oe - N) X = Math.max(0, oe - N);
    else if (le === le && Y < le - N) X = Math.max(0, le - N);
  }
  GS(t, X, Y, m, x, C);
  let U = m ? In : An,
    k = m ? Hi : hi,
    Z = b === b,
    J = 0;
  for (let le = 0; le < O; le++) {
    let oe = t[le],
      fe = oe.style,
      ue = fe.alignSelf,
      se = ue === 0 ? z : ue,
      ve = xr(oe, f, x),
      he = NaN,
      Se = 0,
      Ee = mt(m ? fe.height : fe.width, m ? C : x),
      Ue = !1;
    if (oe._hasAutoMargin) {
      let bt = fe.margin;
      Ue = Oi(bt, U) || Oi(bt, k);
    }
    if (Ee === Ee) ((he = Ee), (Se = 1));
    else if (se === 4 && !Ue && !T && Z && S === 1)
      ((he = Math.max(0, b - ve)), (Se = 1));
    else if (!T && Z) ((he = Math.max(0, b - ve)), (Se = 2));
    let ke = m ? oe._sz[xo] : he,
      et = m ? he : oe._sz[xo];
    Mo(oe, ke, et, m ? 1 : Se, m ? Se : 1, x, C, L, m, !m);
    let wt = oe.layout;
    ((oe._sz[wa] = m ? wt.height : wt.width),
      (J = Math.max(J, oe._sz[wa] + ve)));
  }
  let re = eu(c),
    Q = Cf(c),
    ce = W;
  for (let le = 0; le < O; le++) {
    let oe = t[le],
      fe = oe.layout.margin;
    ce += oe._sz[xo] + fe[re] + fe[Q];
  }
  ((Zp = ce), (Ip = J));
}
function HS(t, s, c, f, m, y, b, S, E, x, C, D, N, T, L, O, z) {
  let W = t.length,
    Y = s.alignItems,
    X = eu(c),
    U = Cf(c),
    k = f ? In : An,
    Z = f ? Hi : hi,
    J = E,
    re = C,
    Q = 0;
  for (let ue = 0; ue < W; ue++) {
    let se = t[ue];
    if (!se._hasAutoMargin) continue;
    let ve = se.style.margin;
    if (Oi(ve, X)) Q++;
    if (Oi(ve, U)) Q++;
  }
  let ce = S - b,
    le = Math.max(0, ce),
    oe = Q > 0 && le > 0 ? le / Q : 0;
  if (Q === 0)
    switch (s.justifyContent) {
      case 0:
        break;
      case 1:
        J += ce / 2;
        break;
      case 2:
        J += ce;
        break;
      case 3:
        if (W > 1) re += le / (W - 1);
        break;
      case 4:
        if (W > 0) ((re += le / W), (J += le / W / 2));
        break;
      case 5:
        if (W > 0) ((re += le / (W + 1)), (J += le / (W + 1)));
        break;
    }
  let fe = J;
  for (let ue = 0; ue < W; ue++) {
    let se = t[ue],
      { style: ve, layout: he } = se,
      Se = se._sz[xo],
      Ee = ve.margin,
      Ue = he.margin,
      ke = !1,
      et = !1,
      wt = !1,
      bt = !1,
      Mt,
      nn,
      rn,
      yt;
    if (se._hasAutoMargin)
      ((ke = Oi(Ee, X)),
        (et = Oi(Ee, U)),
        (wt = Oi(Ee, k)),
        (bt = Oi(Ee, Z)),
        (Mt = ke ? oe : Ue[X]),
        (nn = et ? oe : Ue[U]),
        (rn = wt ? 0 : Ue[k]),
        (yt = bt ? 0 : Ue[Z]));
    else ((Mt = Ue[X]), (nn = Ue[U]), (rn = Ue[k]), (yt = Ue[Z]));
    let ti = T ? x - (fe + Mt) - Se : fe + Mt,
      Vt = ve.alignSelf,
      Rt = Vt === 0 ? Y : Vt,
      tt = y + rn,
      St = m - se._sz[wa] - rn - yt;
    if (wt && bt) tt += Math.max(0, St) / 2;
    else if (wt) tt += Math.max(0, St);
    else if (bt);
    else
      switch (Rt) {
        case 1:
        case 4:
          if (L) tt += St;
          break;
        case 2:
          tt += St / 2;
          break;
        case 3:
          if (!L) tt += St;
          break;
        case 5:
          if (O) tt = y + z - Mf(se);
          break;
        default:
          break;
      }
    let hn = se.measureFunc !== null,
      Lt = f ? ti : tt,
      nt = f ? tt : ti,
      mn = hn ? Math.floor(Lt) : Zn(Lt),
      Ce = hn ? Math.floor(nt) : Zn(nt);
    if (se._hasPosition) FS(se, D, N, he, mn, Ce);
    else ((he.left = mn), (he.top = Ce));
    fe += Se + Mt + nn + re;
  }
}
function BS(t, s, c, f, m, y, b) {
  let S = [],
    E = t.length,
    x = 0,
    C = 0;
  for (let D = 0; D < E; D++) {
    let N = t[D],
      T = Pn(N.style, c, N._sz[Eo], m, y),
      L = Math.max(0, T) + xr(N, f, m),
      O = D > x ? b : 0;
    if (D > x && C + O + L > s) (S.push(t.slice(x, D)), (x = D), (C = L));
    else C += O + L;
    N._lineIndex = S.length;
  }
  return (S.push(t.slice(x)), S);
}
function LS(t, s, c, f, m, y) {
  let b = 0,
    S = 0;
  for (let x = 0, C = s.length; x < C; x++) {
    let D = s[x];
    if (ey(t, D) !== 5) continue;
    let N = D.style.margin,
      T = Ul(N, In, c),
      L = Ul(N, Hi, c),
      O = Mf(D) + T,
      z = D.layout.height + T + L - O;
    if (O > b) b = O;
    if (z > S) S = z;
  }
  f[m] = b;
  let E = b + S;
  return E > y ? E : y;
}
function zS(t, s, c, f) {
  let m = Math.max(0, s);
  switch (((So = 0), (Er = 0), t)) {
    case 1:
      break;
    case 2:
      So = s / 2;
      break;
    case 3:
      So = s;
      break;
    case 4:
      if (c > 0 && m > 0) {
        let y = 0,
          b = 0;
        for (let S = 0; S < c; S++) {
          y += m / c;
          let E = Zn(y);
          ((f[S] += E - b), (b = E));
        }
      }
      break;
    case 6:
      if (c > 1) Er = m / (c - 1);
      break;
    case 7:
      if (c > 0) ((Er = m / c), (So = Er / 2));
      break;
    case 8:
      if (c > 0) ((Er = m / (c + 1)), (So = Er));
      break;
    default:
      break;
  }
}
function US(t, s, c, f, m, y, b, S, E, x) {
  for (let C = 0, D = t.length; C < D; C++) {
    let N = t[C],
      T = N.style,
      L = T.alignSelf;
    if ((L === 0 ? s : L) !== 4) continue;
    if (Qe(mt(c ? T.height : T.width, c ? E : S))) continue;
    if (N._hasAutoMargin) {
      let X = T.margin;
      if (Oi(X, m) || Oi(X, y)) continue;
    }
    let W = xr(N, f, S),
      Y = Math.max(0, b - W);
    if (N._sz[wa] !== Y) {
      let X = N._sz[xo];
      (Mo(N, c ? X : Y, c ? Y : X, 1, 1, S, E, x, c, !c), (N._sz[wa] = Y));
    }
  }
}
function FS(t, s, c, f, m, y) {
  let b = t.style.position,
    S = mt(Qn(b, An), s),
    E = mt(Qn(b, hi), s),
    x = mt(Qn(b, In), c),
    C = mt(Qn(b, Hi), c),
    D = Qe(S) ? S : Qe(E) ? -E : 0,
    N = Qe(x) ? x : Qe(C) ? -C : 0;
  ((f.left = m + D), (f.top = y + N));
}
function PS(t, s, c, f, m, y) {
  let b = s.style,
    S = Qn(b.position, An),
    E = Qn(b.position, hi),
    x = Qn(b.position, In),
    C = Qn(b.position, Hi),
    D = mt(S, c),
    N = mt(E, c),
    T = mt(x, f),
    L = mt(C, f),
    O = c - y[0] - y[2],
    z = f - y[1] - y[3],
    W = mt(b.width, O),
    Y = mt(b.height, z);
  if (!Qe(W) && Qe(D) && Qe(N)) W = O - D - N;
  if (!Qe(Y) && Qe(T) && Qe(L)) Y = z - T - L;
  Mo(s, W, Y, Qe(W) ? 1 : 0, Qe(Y) ? 1 : 0, O, z, !0, !1, !1);
  let X = Ul(b.margin, An, c),
    U = Ul(b.margin, In, c),
    k = Ul(b.margin, hi, c),
    Z = Ul(b.margin, Hi, c),
    J = t.style,
    re = J.flexDirection,
    Q = qp(re),
    ce = Ba(re),
    le = J.flexWrap === 2,
    oe = J.justifyContent,
    fe = b.alignSelf,
    ue = fe === 0 ? J.alignItems : fe,
    se = s.layout,
    { width: ve, height: he } = se,
    Se;
  if (Qe(D)) Se = y[0] + D + X;
  else if (Qe(N)) Se = c - y[2] - N - ve - k;
  else if (ce) {
    let ke = m[0] + y[0],
      et = c - m[2] - y[2];
    Se = Q ? et - ve - k : _p(oe, ke, et, ve) + X;
  } else Se = Dp(ue, m[0] + y[0], c - m[2] - y[2], ve, le) + X;
  let Ee;
  if (Qe(T)) Ee = y[1] + T + U;
  else if (Qe(L)) Ee = f - y[3] - L - he - Z;
  else if (ce) Ee = Dp(ue, m[1] + y[1], f - m[3] - y[3], he, le) + U;
  else {
    let ke = m[1] + y[1],
      et = f - m[3] - y[3];
    Ee = Q ? et - he - Z : _p(oe, ke, et, he) + U;
  }
  let Ue = s.measureFunc !== null;
  ((se.left = Ue ? Math.floor(Se) : Zn(Se)),
    (se.top = Ue ? Math.floor(Ee) : Zn(Ee)));
}
function _p(t, s, c, f) {
  switch (t) {
    case 1:
      return s + (c - s - f) / 2;
    case 2:
      return c - f;
    default:
      return s;
  }
}
function Dp(t, s, c, f, m) {
  switch (t) {
    case 2:
      return s + (c - s - f) / 2;
    case 3:
      return m ? s : c - f;
    default:
      return m ? c - f : s;
  }
}
var Op = 0,
  wp = 1,
  Hp = 2,
  Bp = 3,
  Lp = 4;
function YS(t, s, c, f, m, y, b) {
  let S = t._fb,
    E = t.config.generation,
    x = t._readsOwnerWidth ? Ot(y) : Js,
    C = t._readsOwnerHeight ? Ot(b) : Js,
    D = Ot(c),
    N = Ot(f),
    T = Ba(s);
  if (
    (t._fbGen === E || !t.isDirty_) &&
    t._fbCrossMode === m &&
    t._fbIsRow === T &&
    S[wp] === x &&
    S[Hp] === C &&
    S[Bp] === D &&
    S[Lp] === N
  )
    return S[Op];
  let L = T ? KS(t, c, f, m, y, b) : kS(t, c, f, m, y, b);
  return (
    (S[Op] = L),
    (S[wp] = x),
    (S[Hp] = C),
    (S[Bp] = D),
    (S[Lp] = N),
    (t._fbCrossMode = m),
    (t._fbIsRow = T),
    (t._fbGen = E),
    L
  );
}
function KS(t, s, c, f, m, y) {
  let b = t.style,
    S = mt(b.flexBasis, s);
  if (S === S) return S > 0 ? S : 0;
  let E = mt(b.width, m);
  if (E === E) return E > 0 ? E : 0;
  let x = mt(b.height, y),
    C;
  if (x === x) C = 1;
  else if (c === c) ((x = c - xr(t, 0, m)), (C = f === 1 && $p(t) ? 1 : 2));
  else C = 0;
  let D = NaN,
    N = 0;
  if (s === s && Jp(t)) ((D = s - xr(t, 2, m)), (N = 2));
  return (Mo(t, D, x, N, C, m, y, !1, !1, !1), t.layout.width);
}
function kS(t, s, c, f, m, y) {
  let b = t.style,
    S = mt(b.flexBasis, s);
  if (S === S) return S > 0 ? S : 0;
  let E = mt(b.height, y);
  if (E === E) return E > 0 ? E : 0;
  let x = mt(b.width, m),
    C;
  if (x === x) C = 1;
  else if (c === c) ((x = c - xr(t, 2, m)), (C = f === 1 && $p(t) ? 1 : 2));
  else C = 0;
  return (Mo(t, x, NaN, C, 0, m, y, !1, !1, !1), t.layout.height);
}
function Jp(t) {
  if (t.measureFunc) return !0;
  let s = t.children;
  for (let c = 0, f = s.length; c < f; c++) if (Jp(s[c])) return !0;
  return !1;
}
var Oa = new Int32Array(8),
  Sf = new Float64Array(64),
  zp = new Float64Array(64);
function Zs(t) {
  return Oa[t >>> 5] & (1 << t);
}
function Up(t) {
  Oa[t >>> 5] |= 1 << t;
}
function GS(t, s, c, f, m, y) {
  let b = t.length,
    S = (b + 31) >>> 5;
  if (S > Oa.length) Oa = new Int32Array(S * 2);
  if (b > Sf.length)
    ((Sf = new Float64Array(b * 2)), (zp = new Float64Array(b * 2)));
  let E = Sf,
    x = zp;
  Oa.fill(0, 0, S);
  let C = Qe(s) ? s - c : 0;
  for (let T = 0; T < b; T++) {
    let L = t[T],
      O = L.style,
      z = L._sz[Eo],
      W = Pn(O, f, z, m, y);
    if (!Qe(s) || (C >= 0 ? O.flexGrow === 0 : O.flexShrink === 0))
      ((x[T] = Math.max(0, W)), Up(T));
    else x[T] = z;
  }
  for (let T = 0; T <= b; T++) {
    let L = 0,
      O = 0,
      z = 0,
      W = 0;
    for (let k = 0; k < b; k++) {
      let Z = t[k],
        J = Z._sz[Eo];
      if (Zs(k)) L += x[k] - J;
      else {
        let re = Z.style;
        ((O += re.flexGrow), (z += re.flexShrink * J), W++);
      }
    }
    if (W === 0) break;
    let Y = C - L;
    if (Y > 0 && O > 0 && O < 1) {
      let k = C * O;
      if (k < Y) Y = k;
    } else if (Y < 0 && z > 0) {
      let k = 0;
      for (let Z = 0; Z < b; Z++) if (!Zs(Z)) k += t[Z].style.flexShrink;
      if (k < 1) {
        let Z = C * k;
        if (Z > Y) Y = Z;
      }
    }
    let X = 0;
    for (let k = 0; k < b; k++) {
      if (Zs(k)) continue;
      let Z = t[k],
        J = Z.style,
        re = Z._sz[Eo],
        Q = re;
      if (Y > 0 && O > 0) Q += (Y * J.flexGrow) / O;
      else if (Y < 0 && z > 0) Q += (Y * (J.flexShrink * re)) / z;
      E[k] = Q;
      let ce = Math.max(0, Pn(J, f, Q, m, y));
      ((x[k] = ce), (X += ce - Q));
    }
    if (X === 0) break;
    let U = !1;
    for (let k = 0; k < b; k++) {
      if (Zs(k)) continue;
      let Z = x[k] - E[k];
      if ((X > 0 && Z > 0) || (X < 0 && Z < 0)) (Up(k), (U = !0));
    }
    if (!U) break;
  }
  let D = 0,
    N = 0;
  for (let T = 0; T < b; T++) {
    D += x[T];
    let L = (D + 0.5) | 0;
    ((t[T]._sz[xo] = L - N), (N = L));
  }
}
function $p(t) {
  let s = t.parent;
  if (!s) return !1;
  let c = t.style.alignSelf;
  return (c === 0 ? s.style.alignItems : c) === 4;
}
function ey(t, s) {
  let c = s.style.alignSelf;
  return c === 0 ? t.style.alignItems : c;
}
function Mf(t) {
  let s = t.children,
    c = s.length,
    f = -1;
  for (let y = 0; y < c; y++) {
    let b = s[y];
    if (b._lineIndex > 0) break;
    let S = b.style;
    if (S.positionType === 2) continue;
    if (S.display === 1) continue;
    if (ey(t, b) === 5 || b.isReferenceBaseline_) {
      f = y;
      break;
    }
    if (f === -1) f = y;
  }
  if (f === -1) return t.layout.height;
  let m = s[f];
  return Mf(m) + m.layout.top;
}
function jS(t, s) {
  let c = t.style;
  if (!Ba(c.flexDirection)) return !1;
  if (c.alignItems === 5) return !0;
  for (let f = 0, m = s.length; f < m; f++)
    if (s[f].style.alignSelf === 5) return !0;
  return !1;
}
function xr(t, s, c) {
  if (!t._hasMargin) return 0;
  let f = t.style.margin,
    m = Ul(f, eu(s), c),
    y = Ul(f, Cf(s), c);
  return m + y;
}
function Fp(t, s, c) {
  let f = t.gap,
    m = f[s];
  if (m.unit === 0) m = f[2];
  let y = mt(m, c);
  return Qe(y) ? Math.max(0, y) : 0;
}
function Pn(t, s, c, f, m) {
  let y = s ? t.minWidth : t.minHeight,
    b = s ? t.maxWidth : t.maxHeight,
    S = y.unit,
    E = b.unit;
  if (S === 0 && E === 0) return c;
  let x = S === 1 || S === 2 ? y.value : 0,
    C = E === 1 || E === 2 ? b.value : 0;
  return WS(c, S, E, x, C, s ? f : m);
}
function WS(t, s, c, f, m, y) {
  let b = t;
  if (c === 1) {
    if (b > m) b = m;
  } else if (c === 2) {
    let S = (m * y) / 100;
    if (wi(S) && b > S) b = Zn(S);
  }
  if (s === 1) {
    if (b < f) b = f;
  } else if (s === 2) {
    let S = (f * y) / 100;
    if (wi(S) && b < S) b = Zn(S);
  }
  return b;
}
function xf(t) {
  ((t.left = 0), (t.top = 0), (t.width = 0), (t.height = 0));
}
function VS(t) {
  (xf(t.layout), (t.isDirty_ = !0), (t._hasL = !1), (t._hasM = !1));
}
function ty(t) {
  let s = t.children;
  for (let c = 0, f = s.length; c < f; c++) {
    let m = s[c];
    (VS(m), ty(m));
  }
}
function ny(t, s, c) {
  let f = t.children;
  for (let m = 0, y = f.length; m < y; m++) {
    let b = f[m],
      S = b.style,
      E = S.display;
    if (E === 1) (xf(b.layout), ty(b));
    else if (E === 2) (xf(b.layout), ny(b, s, c));
    else if (S.positionType === 2) c.push(b);
    else s.push(b);
  }
}
function iy(t) {
  let s = t.layout;
  ((s.left = s.left | 0),
    (s.top = s.top | 0),
    (s.width = s.width | 0),
    (s.height = s.height | 0));
  let c = t.children;
  for (let f = 0, m = c.length; f < m; f++) iy(c[f]);
}
function di(t) {
  if (t === void 0) return en;
  if (t === "auto") return ll;
  if (typeof t === "number") return Number.isFinite(t) ? Is(t) : en;
  if (typeof t === "string" && t.endsWith("%")) {
    let c = parseFloat(t);
    return Number.isFinite(c) ? Xn(c) : en;
  }
  let s = parseFloat(t);
  return Number.isFinite(s) ? Is(s) : en;
}
function Ef(t) {
  switch (t) {
    case 0:
    case 4:
      return An;
    case 1:
      return In;
    case 2:
    case 5:
      return hi;
    case 3:
      return Hi;
    default:
      return An;
  }
}
var qS = {
  Config: { create: Xp, destroy() {} },
  Node: {
    create: (t) => new Da(t),
    createDefault: () => new Da(),
    createWithConfig: (t) => new Da(t),
    destroy() {},
  },
};
var tu = qS;
import { format as Ou } from "util";
F();
var ly = Qt(!1);
ly.displayName = "InternalAccessibilityContext";
var JOt = ly;
F();
class nu extends cee {
  type;
  constructor(t) {
    super();
    this.type = t;
  }
}
import { Buffer as Tf } from "buffer";
var XS = /^\x1b\[(\d*(?:;\d*){0,5})_$/;
var QS = {
    33: { code: 5, final: "~" },
    34: { code: 6, final: "~" },
    35: { code: 1, final: "F" },
    36: { code: 1, final: "H" },
    37: { code: 1, final: "D" },
    38: { code: 1, final: "A" },
    39: { code: 1, final: "C" },
    40: { code: 1, final: "B" },
    45: { code: 2, final: "~" },
    46: { code: 3, final: "~" },
  },
  ZS = [15, 17, 18, 19, 20, 21, 23, 24];
function oy(t, s) {
  let c = XS.exec(t);
  if (!c) return null;
  let f = c[1].split(";"),
    m = La(f, 0, 0),
    y = La(f, 2, 0),
    b = La(f, 3, 0) !== 0,
    S = La(f, 4, 0),
    E = Math.min(Math.max(La(f, 5, 1), 1), 8);
  if (!b) {
    if (m === 18 && y !== 0)
      return { sequences: [String.fromCharCode(y)], highSurrogate: "" };
    return { sequences: [], highSurrogate: s };
  }
  let x = (S & 3) !== 0,
    C = (S & 12) !== 0,
    D = (S & 16) !== 0,
    N = x && C && y > 32 && y !== 127,
    T = C && !N,
    L = x && !N,
    O = 1 + (D ? 1 : 0) + (L ? 2 : 0) + (T ? 4 : 0),
    z = QS[m];
  if (z) {
    if (z.final === "~")
      return rl(E, O === 1 ? `\x1B[${z.code}~` : `\x1B[${z.code};${O}~`);
    return rl(E, O === 1 ? `\x1B[${z.final}` : `\x1B[1;${O}${z.final}`);
  }
  if (m >= 112 && m <= 115) {
    let U = String.fromCharCode(80 + (m - 112));
    return rl(E, O === 1 ? `\x1BO${U}` : `\x1B[1;${O}${U}`);
  }
  if (m >= 116 && m <= 123) {
    let U = ZS[m - 116];
    return rl(E, O === 1 ? `\x1B[${U}~` : `\x1B[${U};${O}~`);
  }
  let W = L ? "\x1B" : "";
  switch (m) {
    case 8:
      return rl(E, W + (T ? "\b" : "\x7F"));
    case 9:
      return rl(E, W + (D ? "\x1B[Z" : "\t"));
    case 13:
      return rl(
        E,
        W +
          (T
            ? `
`
            : "\r"),
      );
    case 27:
      return rl(E, W + "\x1B");
    default:
      break;
  }
  let Y = y;
  if (T && m === 32) Y = 0;
  else if (Y === 0) {
    let U = m >= 65 && m <= 90,
      k = m >= 48 && m <= 57;
    if (!(T || L) || !(U || k)) return { sequences: [], highSurrogate: s };
    if (((Y = U && !D ? m + 32 : m), T)) Y = ry(Y);
  } else if (T) Y = ry(Y);
  if (Y >= 55296 && Y <= 56319)
    return { sequences: [], highSurrogate: String.fromCharCode(Y) };
  let X = String.fromCharCode(Y);
  if (Y >= 56320 && Y <= 57343) {
    if (!s) return { sequences: [], highSurrogate: "" };
    X = s + X;
  }
  return rl(E, W + X);
}
function La(t, s, c) {
  let f = t[s];
  return f === void 0 || f === "" ? c : parseInt(f, 10);
}
function rl(t, s) {
  return { sequences: Array(t).fill(s), highSurrogate: "" };
}
function ry(t) {
  if (t < 32) return t;
  if ((t >= 64 && t <= 95) || (t >= 97 && t <= 122)) return t & 31;
  switch (t) {
    case 32:
    case 50:
      return 0;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      return t - 51 + 27;
    case 56:
    case 63:
      return 127;
    case 47:
      return 31;
    default:
      return t;
  }
}
var IS = /^(?:\x1b)([a-zA-Z0-9])$/,
  JS =
    /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/,
  Af = /^\x1b\[(\d+)(?::(\d*)(?::(\d+))?)?(?:;(\d+))?u/,
  _f = /^\x1b\[27;(\d+);(\d+)~/,
  $S = /^\x1b\[\?(\d+);(\d+)\$y$/,
  e1 = /^\x1b\[\?([\d;]*)c$/,
  t1 = /^\x1b\[>([\d;]*)c$/,
  n1 = /^\x1b\[\?(\d+)u$/,
  i1 = /^\x1b\[\?(\d+);(\d+)R$/,
  l1 = /^\x1b\[\?997;([12])n$/,
  r1 = /^\x1b\](\d+);(.*?)(?:\x07|\x1b\\)$/s,
  o1 = /^\x1bP>\|(.*?)(?:\x07|\x1b\\)$/s,
  Df = /^\x1b\[<(\d+);(\d+);(\d+)([Mm])$/,
  gy = /^\x1b\[<[\d;]*$/,
  a1 = /^\x1b\[<[\d;]*[Mm]/,
  s1 = /^\x1b\[<\d+;\d+;\d+[Mm]/,
  u1 = 32;
function Mr(t) {
  return t.length <= u1 && gy.test(t);
}
function by(t) {
  let s = t._tokenizer?.buffer() ?? "";
  return (
    t._tokenizer?.reset(),
    { ...t, incomplete: "", droppedMousePrefix: s }
  );
}
function ay(t) {
  return {
    kind: "key",
    name: "",
    fn: !1,
    ctrl: !1,
    meta: !1,
    shift: !1,
    option: !1,
    super: !1,
    sequence: t,
    raw: t,
    isPasted: !0,
    code: void 0,
    col: void 0,
    row: void 0,
  };
}
function sy(t) {
  if (t.startsWith("\x1B[")) {
    let s;
    if ((s = $S.exec(t)))
      return {
        type: "decrpm",
        mode: parseInt(s[1], 10),
        status: parseInt(s[2], 10),
      };
    if ((s = e1.exec(t))) return { type: "da1", params: uy(s[1]) };
    if ((s = t1.exec(t))) return { type: "da2", params: uy(s[1]) };
    if ((s = n1.exec(t)))
      return { type: "kittyKeyboard", flags: parseInt(s[1], 10) };
    if ((s = i1.exec(t)))
      return {
        type: "cursorPosition",
        row: parseInt(s[1], 10),
        col: parseInt(s[2], 10),
      };
    if ((s = l1.exec(t))) return { type: "themeNotify", dark: s[1] === "1" };
    return null;
  }
  if (t.startsWith("\x1B]")) {
    let s = r1.exec(t);
    if (s) return { type: "osc", code: parseInt(s[1], 10), data: s[2] };
  }
  if (t.startsWith("\x1BP")) {
    let s = o1.exec(t);
    if (s) return { type: "xtversion", name: s[1] };
  }
  return null;
}
function uy(t) {
  if (!t) return [];
  return t.split(";").map((s) => parseInt(s, 10));
}
var Sy = {
  mode: "NORMAL",
  incomplete: "",
  pasteBuffer: "",
  pendingByteEvents: [],
  droppedMousePrefix: "",
  flushedEscapePrefix: "",
  win32HighSurrogate: "",
};
function c1(t, s) {
  let c = s.CLAUDE_CODE_BS_AS_CTRL_BACKSPACE;
  if (Ie(c)) return !0;
  if (po(c)) return !1;
  return t === "win32" && s.TERM_PROGRAM !== "mintty" && s.TERM !== "cygwin";
}
function wtn() {
  return c1("darwin", process.env);
}
function f1(t, s) {
  let c = t.CLAUDE_CODE_ALTGR_AS_TEXT;
  if (Ie(c)) return "force";
  if (po(c)) return "off";
  return (s ?? !!t.WT_SESSION) ? "auto" : "off";
}
function d1() {
  return f1(process.env, dl()?.wtSession);
}
function h1(t) {
  return (t > 32 && t < 127) || (t >= 160 && t < 55296);
}
function m1(t) {
  return (t >= 48 && t <= 57) || (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
}
function cy(t, s, c) {
  return {
    kind: "key",
    name: String.fromCodePoint(s),
    fn: !1,
    ctrl: !1,
    meta: !1,
    shift: c,
    option: !1,
    super: !1,
    sequence: t,
    raw: t,
    isPasted: !1,
    code: void 0,
    col: void 0,
    row: void 0,
  };
}
function fy(t, s) {
  if (!(t.ctrl && t.meta) || t.super) return !1;
  if (!h1(s)) return !1;
  let c = d1();
  if (c === "off") return !1;
  return c === "force" || !m1(s);
}
function p1(t) {
  if (Tf.isBuffer(t))
    if (t[0] > 127 && t[1] === void 0)
      return ((t[0] -= 128), "\x1B" + String(t));
    else return String(t);
  else if (t !== void 0 && typeof t !== "string") return String(t);
  else if (!t) return "";
  else return t;
}
function Ey(t, s = "") {
  let c = s === null,
    f = c ? "" : p1(s),
    m = t._tokenizer ?? sB({ x10Mouse: !0 }),
    y = t.droppedMousePrefix,
    b = c ? t.flushedEscapePrefix : "",
    S = t.flushedEscapePrefix,
    E;
  if (c && t.mode !== "IN_PASTE") {
    let Y = m.buffer();
    if (Mr(Y)) E = [];
    else if (gy.test(Y)) (m.reset(), (y = Y), (E = []));
    else {
      if (Y === "\x1B" || Y === "\x1B[") b = Y;
      E = m.flush();
    }
  } else E = c ? m.flush() : m.feed(f);
  let x = [],
    C = t.mode === "IN_PASTE",
    { pasteBuffer: D, pendingByteEvents: N, win32HighSurrogate: T } = t;
  function L(Y) {
    if (C) D += String.fromCharCode(Y.byte);
    else x.push(Cr(Y.seq));
  }
  function O() {
    for (let Y of N) L(Y);
    N = [];
  }
  function z(Y, X) {
    if (N.length === 0) {
      if (X >= 194 && X <= 244) {
        N = [{ seq: Y, byte: X }];
        return;
      }
      L({ seq: Y, byte: X });
      return;
    }
    if (X >= 128 && X <= 191) {
      N = [...N, { seq: Y, byte: X }];
      let U = N[0].byte,
        k = U <= 223 ? 2 : U <= 239 ? 3 : 4;
      if (N.length < k) return;
      let Z = N;
      N = [];
      let J = Tf.from(Z.map((Q) => Q.byte)).toString("utf8");
      if ([...J].length !== 1 || Tf.byteLength(J, "utf8") !== Z.length)
        for (let Q of Z) L(Q);
      else if (C) D += J;
      else x.push(Cr(J));
      return;
    }
    (O(), z(Y, X));
  }
  for (let Y of E)
    if (Y.type === "sequence")
      if (((y = ""), (S = ""), Y.value === xcr)) (O(), (C = !0), (D = ""));
      else if (Y.value === Hcr) (O(), x.push(ay(D)), (C = !1), (D = ""));
      else if (C) {
        if (yy(Y.value)) continue;
        let X = my(Y.value);
        if (X !== void 0) {
          z(Y.value, X);
          continue;
        }
        if (!sy(Y.value) && !py.test(Y.value)) O();
        D += b1(Y.value);
      } else {
        let X = oy(Y.value, T);
        if (X) {
          (O(), (T = X.highSurrogate));
          for (let J of X.sequences) x.push(Cr(J));
          continue;
        }
        let U = my(Y.value);
        if (U !== void 0) {
          z(Y.value, U);
          continue;
        }
        let k = sy(Y.value);
        if (k) {
          x.push({ kind: "response", sequence: Y.value, response: k });
          continue;
        }
        let Z = Rf(Y.value);
        if (Z) {
          x.push(Z);
          continue;
        }
        if (Y.value === xhe || (!yy(Y.value) && !py.test(Y.value))) O();
        x.push(Cr(Y.value));
      }
    else if (Y.type === "text") {
      O();
      let X = Y.value;
      if (!C && S) {
        let U = S + X,
          k = s1.exec(U);
        if (((S = ""), k)) {
          let Z = Rf(k[0]);
          if ((x.push(Z ?? Cr(k[0])), (X = U.slice(k[0].length)), !X)) continue;
        }
      }
      if (!C && y) {
        let U = y + X,
          k = a1.exec(U);
        if (k) {
          if (((y = ""), (X = U.slice(k[0].length)), !X)) continue;
        } else if (Mr(U)) {
          y = U;
          continue;
        } else y = "";
      } else if (!C && Mr(X)) {
        y = X;
        continue;
      }
      if (C) D += X;
      else if (
        /^\[<\d+;\d+;\d+[Mm]$/.test(X) ||
        /^\[M[\x60-\x7f][\x20-\uffff]{2}$/.test(X)
      ) {
        let U = "\x1B" + X,
          k = Rf(U);
        x.push(k ?? Cr(U));
      } else x.push(Cr(X));
    }
  if (c) O();
  if (c && C) {
    if (D) x.push(ay(D));
    ((C = !1), (D = ""));
  }
  let W = {
    mode: C ? "IN_PASTE" : "NORMAL",
    incomplete: m.buffer(),
    pasteBuffer: D,
    pendingByteEvents: N,
    droppedMousePrefix: y,
    flushedEscapePrefix: b,
    win32HighSurrogate: T,
    _tokenizer: m,
  };
  return [x, W];
}
var y1 = {
    OP: "f1",
    OQ: "f2",
    OR: "f3",
    OS: "f4",
    Op: "0",
    Oq: "1",
    Or: "2",
    Os: "3",
    Ot: "4",
    Ou: "5",
    Ov: "6",
    Ow: "7",
    Ox: "8",
    Oy: "9",
    Oj: "*",
    Ok: "+",
    Ol: ",",
    Om: "-",
    On: ".",
    Oo: "/",
    OM: "return",
    "[11~": "f1",
    "[12~": "f2",
    "[13~": "f3",
    "[14~": "f4",
    "[[A": "f1",
    "[[B": "f2",
    "[[C": "f3",
    "[[D": "f4",
    "[[E": "f5",
    "[15~": "f5",
    "[17~": "f6",
    "[18~": "f7",
    "[19~": "f8",
    "[20~": "f9",
    "[21~": "f10",
    "[23~": "f11",
    "[24~": "f12",
    "[A": "up",
    "[B": "down",
    "[C": "right",
    "[D": "left",
    "[E": "clear",
    "[F": "end",
    "[H": "home",
    OA: "up",
    OB: "down",
    OC: "right",
    OD: "left",
    OE: "clear",
    OF: "end",
    OH: "home",
    "[1~": "home",
    "[2~": "insert",
    "[3~": "delete",
    "[4~": "end",
    "[5~": "pageup",
    "[6~": "pagedown",
    "[[5~": "pageup",
    "[[6~": "pagedown",
    "[7~": "home",
    "[8~": "end",
    "[a": "up",
    "[b": "down",
    "[c": "right",
    "[d": "left",
    "[e": "clear",
    "[2$": "insert",
    "[3$": "delete",
    "[5$": "pageup",
    "[6$": "pagedown",
    "[7$": "home",
    "[8$": "end",
    Oa: "up",
    Ob: "down",
    Oc: "right",
    Od: "left",
    Oe: "clear",
    "[2^": "insert",
    "[3^": "delete",
    "[5^": "pageup",
    "[6^": "pagedown",
    "[7^": "home",
    "[8^": "end",
    "[Z": "tab",
  },
  v1 = (t) =>
    [
      "[a",
      "[b",
      "[c",
      "[d",
      "[e",
      "[2$",
      "[3$",
      "[5$",
      "[6$",
      "[7$",
      "[8$",
      "[Z",
    ].includes(t),
  g1 = (t) =>
    [
      "Oa",
      "Ob",
      "Oc",
      "Od",
      "Oe",
      "[2^",
      "[3^",
      "[5^",
      "[6^",
      "[7^",
      "[8^",
    ].includes(t);
function Nf(t) {
  let s = t - 1;
  return {
    shift: !!(s & 1),
    meta: !!(s & 2),
    ctrl: !!(s & 4),
    super: !!(s & 8),
  };
}
function dy(t) {
  switch (t) {
    case 8:
      return "backspace";
    case 9:
      return "tab";
    case 13:
      return "return";
    case 27:
      return "escape";
    case 32:
      return "space";
    case 127:
      return "backspace";
    case 57399:
      return "0";
    case 57400:
      return "1";
    case 57401:
      return "2";
    case 57402:
      return "3";
    case 57403:
      return "4";
    case 57404:
      return "5";
    case 57405:
      return "6";
    case 57406:
      return "7";
    case 57407:
      return "8";
    case 57408:
      return "9";
    case 57409:
      return ".";
    case 57410:
      return "/";
    case 57411:
      return "*";
    case 57412:
      return "-";
    case 57413:
      return "+";
    case 57414:
      return "return";
    case 57415:
      return "=";
    case 57416:
      return ",";
    case 57417:
      return "left";
    case 57418:
      return "right";
    case 57419:
      return "up";
    case 57420:
      return "down";
    case 57421:
      return "pageup";
    case 57422:
      return "pagedown";
    case 57423:
      return "home";
    case 57424:
      return "end";
    case 57425:
      return "insert";
    case 57426:
      return "delete";
    default:
      if (t >= 32 && t <= 126) return String.fromCharCode(t).toLowerCase();
      if (t >= 160 && t < 55296) return String.fromCodePoint(t);
      return;
  }
}
function hy(t, s) {
  if (!t.ctrl || t.shift || t.meta || t.super) return;
  switch (s) {
    case 91:
      return "escape";
    case 109:
    case 77:
      return "return";
    case 105:
    case 73:
      return "tab";
    case 104:
    case 72:
      return "backspace";
    default:
      return;
  }
}
function my(t) {
  let s,
    c,
    f = Af.exec(t);
  if (f)
    ((s = parseInt(f[1], 10)),
      (c = f[4] === void 0 ? void 0 : parseInt(f[4], 10)));
  else if ((f = _f.exec(t)))
    ((c = parseInt(f[1], 10)), (s = parseInt(f[2], 10)));
  if (s === void 0 || s < 128 || s > 255) return;
  if (c !== void 0 && c !== 1) return;
  return s;
}
function b1(t) {
  let s = Af.exec(t),
    c = s ? parseInt(s[1], 10) : void 0,
    f = s ? (s[4] ? parseInt(s[4], 10) : 1) : 1;
  if (c === void 0 && (s = _f.exec(t)))
    ((f = parseInt(s[1], 10)), (c = parseInt(s[2], 10)));
  if (c !== void 0 && c <= 1114111) {
    if (f < 1) f = 1;
    if (Nf(f).ctrl)
      switch (c) {
        case 105:
        case 73:
          return "\t";
        case 106:
        case 74:
          return `
`;
        case 109:
        case 77:
          return "\r";
      }
    return String.fromCodePoint(c);
  }
  return t;
}
var S1 = /^\x1b\[M[\x60-\x7f][\x20-\uffff]{2}$/,
  py = /^\x1b\[M[\x20-\x7f][\x20-\uffff]{2}$/;
function yy(t) {
  return t === jke || t === xhe || Df.test(t) || S1.test(t);
}
function Rf(t) {
  let s = Df.exec(t);
  if (!s) return null;
  let c = parseInt(s[1], 10);
  if ((c & 64) !== 0) return null;
  return {
    kind: "mouse",
    button: c,
    action: s[4] === "M" ? "press" : "release",
    col: parseInt(s[2], 10),
    row: parseInt(s[3], 10),
    sequence: t,
  };
}
function Cr(t = "") {
  let s,
    c = {
      kind: "key",
      name: "",
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: t,
      raw: t,
      isPasted: !1,
      code: void 0,
      col: void 0,
      row: void 0,
    };
  c.sequence = c.sequence || t || c.name;
  let f;
  if ((f = Af.exec(t))) {
    let m = parseInt(f[1], 10),
      y = f[4] ? parseInt(f[4], 10) : 1,
      b = Nf(y);
    if (fy(b, m)) return cy(t, m, b.shift);
    let S = f[3] ? parseInt(f[3], 10) : void 0,
      E = b.ctrl && m > 127 && S !== void 0 ? S : m,
      x = hy(b, E);
    return {
      kind: "key",
      name: x ?? dy(E),
      fn: !1,
      ctrl: x === void 0 && b.ctrl,
      meta: b.meta,
      shift: b.shift,
      option: !1,
      super: b.super,
      sequence: t,
      raw: t,
      isPasted: !1,
      code: void 0,
      col: void 0,
      row: void 0,
    };
  }
  if ((f = _f.exec(t))) {
    let m = Nf(parseInt(f[1], 10)),
      y = parseInt(f[2], 10);
    if (fy(m, y)) return cy(t, y, m.shift);
    let b = hy(m, y);
    return {
      kind: "key",
      name: b ?? dy(y),
      fn: !1,
      ctrl: b === void 0 && m.ctrl,
      meta: m.meta,
      shift: m.shift,
      option: !1,
      super: m.super,
      sequence: t,
      raw: t,
      isPasted: !1,
      code: void 0,
      col: void 0,
      row: void 0,
    };
  }
  if ((f = Df.exec(t))) {
    let m = parseInt(f[1], 10),
      y = parseInt(f[2], 10),
      b = parseInt(f[3], 10);
    return vy(t, m, y, b) ?? Fl(t, "mouse", !1);
  }
  if (t.length === 6 && t.startsWith("\x1B[M")) {
    let m = t.charCodeAt(3) - 32,
      y = t.charCodeAt(4) - 32,
      b = t.charCodeAt(5) - 32;
    return vy(t, m, y, b) ?? Fl(t, "mouse", !1);
  }
  if (t === "\r" || t === "\x1B\r")
    ((c.raw = void 0), (c.name = "return"), (c.meta = t.length === 2));
  else if (
    t ===
      `
` ||
    t ===
      `\x1B
`
  )
    ((c.name = "enter"), (c.meta = t.length === 2));
  else if (t === "\t" || t === "\x1B\t")
    ((c.name = "tab"), (c.meta = t.length === 2));
  else if (t === "\b" || t === "\x1B\b") {
    if (((c.name = "backspace"), (c.meta = t.charAt(0) === "\x1B"), wtn()))
      c.ctrl = !0;
  } else if (t === "\x7F" || t === "\x1B\x7F")
    ((c.name = "backspace"), (c.meta = t.charAt(0) === "\x1B"));
  else if (t === "\x1B" || t === "\x1B\x1B")
    ((c.name = "escape"), (c.meta = t.length === 2));
  else if (t === " " || t === "\x1B ")
    ((c.name = "space"), (c.meta = t.length === 2));
  else if (t === "\x1C") ((c.name = "\\"), (c.ctrl = !0));
  else if (t === "\x1D") ((c.name = "]"), (c.ctrl = !0));
  else if (t === "\x1E") ((c.name = "^"), (c.ctrl = !0));
  else if (t === "\x1F") ((c.name = "_"), (c.ctrl = !0));
  else if (t <= "\x1A" && t.length === 1)
    ((c.name = String.fromCharCode(t.charCodeAt(0) + 97 - 1)), (c.ctrl = !0));
  else if (t.length === 1 && t >= "0" && t <= "9") c.name = "number";
  else if (t.length === 1 && t >= "a" && t <= "z") c.name = t;
  else if (t.length === 1 && t >= "A" && t <= "Z")
    ((c.name = t.toLowerCase()), (c.shift = !0));
  else if ((s = IS.exec(t)))
    ((c.meta = !0),
      (c.shift = /^[A-Z]$/.test(s[1])),
      (c.name = s[1].toLowerCase()));
  else if ((s = JS.exec(t))) {
    let m = [...t];
    if (m[0] === "\x1B" && m[1] === "\x1B") c.option = !0;
    let y = [s[1], s[2], s[4], s[6]].filter(Boolean).join(""),
      b = (s[3] || s[5] || 1) - 1;
    ((c.ctrl = !!(b & 4)),
      (c.meta = !!(b & 2)),
      (c.super = !!(b & 8)),
      (c.shift = !!(b & 1)),
      (c.code = y),
      (c.name = y1[y]),
      (c.shift = v1(y) || c.shift),
      (c.ctrl = g1(y) || c.ctrl));
  }
  if (c.raw === "\x1Bb") ((c.meta = !0), (c.name = "left"));
  else if (c.raw === "\x1Bf") ((c.meta = !0), (c.name = "right"));
  switch (t) {
    case "\x1B[1~":
      return Fl(t, "home", !1);
    case "\x1B[4~":
      return Fl(t, "end", !1);
    case "\x1B[5~":
      return Fl(t, "pageup", !1);
    case "\x1B[6~":
      return Fl(t, "pagedown", !1);
    case "\x1B[1;5D":
      return Fl(t, "left", !0);
    case "\x1B[1;5C":
      return Fl(t, "right", !0);
  }
  return c;
}
function vy(t, s, c, f) {
  let m = s & 67;
  if (m !== 64 && m !== 65) return null;
  return {
    kind: "key",
    name: m === 64 ? "wheelup" : "wheeldown",
    fn: !1,
    ctrl: (s & 16) !== 0,
    meta: (s & 8) !== 0,
    shift: (s & 4) !== 0,
    option: !1,
    super: !1,
    sequence: t,
    raw: t,
    isPasted: !1,
    code: void 0,
    col: c,
    row: f,
  };
}
function Fl(t, s, c) {
  return {
    kind: "key",
    name: s,
    fn: !1,
    ctrl: c,
    meta: !1,
    shift: !1,
    option: !1,
    super: !1,
    sequence: t,
    raw: t,
    isPasted: !1,
    code: void 0,
    col: void 0,
    row: void 0,
  };
}
var za = 50,
  xy = 2000,
  Of = 2000;
function Cy(t) {
  return {
    parse: { ...Sy },
    lastInputAt: t,
    byteRunDeadlineAt: null,
    mousePrefixDropAt: null,
    droppedPrefixDropAt: null,
  };
}
function wf(t) {
  let { parse: s } = t;
  return (
    s.incomplete !== "" ||
    s.mode === "IN_PASTE" ||
    s.pendingByteEvents.length > 0
  );
}
function Hf(t, s, c) {
  let { parse: f, droppedPrefixDropAt: m } = t;
  if (m !== null && c >= m && (f.droppedMousePrefix || f.flushedEscapePrefix))
    ((f = { ...f, droppedMousePrefix: "", flushedEscapePrefix: "" }),
      (m = null));
  let y = f,
    [b, S] = Ey(f, s),
    E = S.mode === "IN_PASTE",
    x = t.byteRunDeadlineAt;
  if (S.pendingByteEvents.length === 0) x = null;
  else if (y.pendingByteEvents !== S.pendingByteEvents || x === null)
    x = c + za;
  let C = t.mousePrefixDropAt;
  if (!E && Mr(S.incomplete)) {
    if (!(
      C !== null &&
      Mr(y.incomplete) &&
      S.incomplete.startsWith(y.incomplete)
    ))
      C = c + Of;
  } else C = null;
  if (S.droppedMousePrefix || S.flushedEscapePrefix) {
    if (!y.droppedMousePrefix && !y.flushedEscapePrefix) m = c + Of;
  } else m = null;
  let D =
      S.incomplete || E
        ? E
          ? xy
          : C !== null
            ? Math.max(0, C - c)
            : za
        : null,
    N = x === null || E ? null : Math.max(0, x - c),
    T = D === null ? N : N === null ? D : Math.min(D, N);
  return {
    keys: b,
    reader: {
      parse: S,
      lastInputAt: s === null ? t.lastInputAt : c,
      byteRunDeadlineAt: x,
      mousePrefixDropAt: C,
      droppedPrefixDropAt: m,
    },
    wakeAt: T === null ? null : c + T,
  };
}
function My(t, s) {
  if (!wf(t)) return { keys: [], reader: t, wakeAt: null };
  let c = t;
  if (
    c.mousePrefixDropAt !== null &&
    s >= c.mousePrefixDropAt &&
    c.parse.mode !== "IN_PASTE" &&
    Mr(c.parse.incomplete)
  )
    c = {
      ...c,
      parse: by(c.parse),
      mousePrefixDropAt: null,
      droppedPrefixDropAt: s + Of,
    };
  if (c.parse.incomplete) {
    let m = (c.parse.mode === "IN_PASTE" ? xy : za) - (s - c.lastInputAt);
    if (m > 0) return { keys: [], reader: c, wakeAt: s + m };
  }
  return Hf(c, null, s);
}
var Qy = pe(wy(), 1);
function Hy(t, s) {
  if (t.pendingClears) t.pendingClears.push(s);
  else t.pendingClears = [s];
}
function By(t) {
  let s = t;
  while (s.parentNode) s = s.parentNode;
  s.absoluteNodeRemoved = !0;
}
function Ly(t) {
  let s = t.absoluteNodeRemoved === !0;
  return ((t.absoluteNodeRemoved = !1), s);
}
function cu(t, s = {}, c, f = []) {
  let m = t.textStyles ? { ...s, ...t.textStyles } : s;
  for (let y of t.childNodes) {
    if (y === void 0) continue;
    if (y.nodeName === "#text") {
      if (y.nodeValue.length > 0)
        f.push({ text: y.nodeValue, styles: m, hyperlink: c });
    } else if (y.nodeName === "ink-text" || y.nodeName === "ink-virtual-text")
      cu(y, m, c, f);
    else if (y.nodeName === "ink-link") {
      let b = y.attributes.href;
      cu(y, m, b || c, f);
    }
  }
  return f;
}
function If(t) {
  let s = "";
  for (let c of t.childNodes) {
    if (c === void 0) continue;
    if (c.nodeName === "#text") s += c.nodeValue;
    else if (c.nodeName === "ink-text" || c.nodeName === "ink-virtual-text")
      s += If(c);
    else if (c.nodeName === "ink-link") s += If(c);
  }
  return s;
}
var zy = If;
var fu = (t, s) => {
  let f = {
    nodeName: t,
    attributes: {},
    childNodes: [],
    textStyles: void 0,
    accessibility: void 0,
    onComputeLayout: void 0,
    onRender: void 0,
    onImmediateRender: void 0,
    hasRenderedContent: void 0,
    dirty: !1,
    isHidden: void 0,
    _eventHandlers: void 0,
    _holdsRawModeRef: void 0,
    scrollTop: void 0,
    pendingScrollDelta: void 0,
    scrollClampMin: void 0,
    scrollClampMax: void 0,
    scrollHeight: void 0,
    scrollHeightHwm: void 0,
    scrollViewportHeight: void 0,
    scrollViewportTop: void 0,
    scrollTopRendered: void 0,
    stickyScroll: void 0,
    scrollAnchor: void 0,
    focusManager: void 0,
    setRawMode: void 0,
    _pendingRawModeDelta: void 0,
    scrollCommitStartedAt: void 0,
    lastCommitMs: void 0,
    debugRepaints: void 0,
    debugOwnerChain: void 0,
    hasAbsoluteDescendant: void 0,
    cachedLayout: void 0,
    hasEscapingDescendant: void 0,
    pendingClears: void 0,
    absoluteNodeRemoved: void 0,
    parentNode: void 0,
    yogaNode:
      t !== "ink-virtual-text" && t !== "ink-link" && t !== "ink-progress"
        ? tu.Node.create(s)
        : void 0,
    style: {},
  };
  if (t === "ink-text") f.yogaNode?.setMeasureFunc(N1.bind(null, f));
  else if (t === "ink-raw-ansi") f.yogaNode?.setMeasureFunc(A1.bind(null, f));
  return f;
};
function Jf(t) {
  let s = t;
  while (s && !s.hasAbsoluteDescendant)
    ((s.hasAbsoluteDescendant = !0), (s = s.parentNode));
}
var du = (t, s) => {
    if (s.parentNode) Ka(s.parentNode, s);
    if (((s.parentNode = t), t.childNodes.push(s), s.yogaNode))
      t.yogaNode?.insertChild(s.yogaNode, t.yogaNode.getChildCount());
    if (s.style.position === "absolute" || s.hasAbsoluteDescendant) Jf(t);
    GA(t);
  },
  $f = (t, s, c) => {
    if (s.parentNode) Ka(s.parentNode, s);
    if (
      ((s.parentNode = t),
      s.style.position === "absolute" ||
        (s.nodeName !== "#text" && s.hasAbsoluteDescendant))
    )
      Jf(t);
    let f = t.childNodes.indexOf(c);
    if (f >= 0) {
      let m = 0;
      if (s.yogaNode && t.yogaNode) {
        for (let y = 0; y < f; y++) if (t.childNodes[y]?.yogaNode) m++;
      }
      if ((t.childNodes.splice(f, 0, s), s.yogaNode && t.yogaNode))
        t.yogaNode.insertChild(s.yogaNode, m);
      GA(t);
      return;
    }
    if ((t.childNodes.push(s), s.yogaNode))
      t.yogaNode?.insertChild(s.yogaNode, t.yogaNode.getChildCount());
    GA(t);
  },
  Ka = (t, s) => {
    if (s.yogaNode) s.parentNode?.yogaNode?.removeChild(s.yogaNode);
    if (Uy(t, s, !1)) By(t);
    s.parentNode = void 0;
    let c = t.childNodes.indexOf(s);
    if (c >= 0) t.childNodes.splice(c, 1);
    GA(t);
  };
function Uy(t, s, c) {
  if (s.nodeName === "#text") return !1;
  let f = s,
    m = c || f.style.position === "absolute",
    y = !1,
    b = f.cachedLayout;
  if (b) (Hy(t, b), (f.cachedLayout = void 0), (y = m));
  for (let S of f.childNodes) if (Uy(t, S, m)) y = !0;
  return y;
}
var ed = (t, s, c) => {
    if (s === "children") return;
    if (t.attributes[s] === c) return;
    ((t.attributes[s] = c), GA(t));
  },
  td = (t, s) => {
    t.accessibility = s;
  },
  nd = (t, s) => {
    if (T1(t.style, s)) return;
    let c = s.position === "absolute" && t.style.position !== "absolute";
    if (((t.style = s), c && t.parentNode)) Jf(t.parentNode);
    GA(t);
  },
  Fy = (t, s) => {
    if (Py(t.textStyles, s)) return;
    ((t.textStyles = s), GA(t));
  };
function T1(t, s) {
  return Py(t, s);
}
function Py(t, s) {
  if (t === s) return !0;
  if (t === void 0 || s === void 0) return !1;
  let c = Object.keys(t),
    f = Object.keys(s);
  if (c.length !== f.length) return !1;
  for (let m of c) if (!Object.hasOwn(s, m) || t[m] !== s[m]) return !1;
  return !0;
}
var Yy = (t) => {
    let s = {
      nodeName: "#text",
      nodeValue: t,
      yogaNode: void 0,
      parentNode: void 0,
      style: {},
    };
    return (ka(s, t), s);
  },
  N1 = function (t, s, c) {
    let f = t.nodeName === "#text" ? t.nodeValue : zy(t),
      m = Hve(f),
      y = t.style?.textWrap ?? "wrap";
    if (y === "wrap-stream") {
      let E = A9e(Vm(m, s, "wrap"), s);
      return { width: E.width, height: Math.max(0, E.height - 1) };
    }
    let b = A9e(m, s);
    if (c === 0 || b.width <= s) return b;
    if (b.width >= 1 && s > 0 && s < 1) return b;
    let S = Vm(m, s, y);
    return A9e(S, s);
  },
  A1 = function (t) {
    return { width: t.attributes.rawWidth, height: t.attributes.rawHeight };
  },
  GA = (t) => {
    let s = t,
      c = !1;
    while (s) {
      if (s.nodeName !== "#text") {
        if (
          ((s.dirty = !0),
          !c &&
            (s.nodeName === "ink-text" || s.nodeName === "ink-raw-ansi") &&
            s.yogaNode)
        )
          (s.yogaNode.markDirty(), (c = !0));
      }
      s = s.parentNode;
    }
  },
  Stn = (t) => {
    let s = t;
    while (s?.parentNode) s = s.parentNode;
    if (s && s.nodeName !== "#text") s.onRender?.();
  };
function btn(t) {
  let s = t;
  while (s.parentNode) s = s.parentNode;
  s.scrollCommitStartedAt = performance.now();
}
var ka = (t, s) => {
  if (typeof s !== "string") s = String(s);
  if (t.nodeValue === s) return;
  ((t.nodeValue = s), GA(t));
};
function _1(t) {
  return t.nodeName !== "#text";
}
var id = (t) => {
  if ("childNodes" in t) for (let s of t.childNodes) id(s);
  t.yogaNode = void 0;
};
function Ky(t, s) {
  let c = [];
  return (f(t, 0), c);
  function f(m, y) {
    let b = m.yogaNode;
    if (!b || b.getDisplay() === 1) return;
    let S = y + b.getComputedTop(),
      E = b.getComputedHeight();
    if (s < S || s >= S + E) return;
    if (m.debugOwnerChain) c = m.debugOwnerChain;
    for (let x of m.childNodes) if (_1(x)) f(x, S);
  }
}
function d4(t) {
  let s = t.scrollTop ?? 0;
  if (t.scrollHeight === void 0) return s;
  return Math.min(
    s,
    Math.max(0, t.scrollHeight - (t.scrollViewportHeight ?? 0)),
  );
}
var ky = {
    keydown: { bubble: "onKeyDown", capture: "onKeyDownCapture" },
    focus: { bubble: "onFocus", capture: "onFocusCapture" },
    blur: { bubble: "onBlur", capture: "onBlurCapture" },
    paste: { bubble: "onPaste", capture: "onPasteCapture" },
    wheel: { bubble: "onWheel", capture: "onWheelCapture" },
    action: { bubble: "onAction", capture: "onActionCapture" },
    click: { bubble: "onClick" },
  },
  ld = new Set([
    "onKeyDown",
    "onKeyDownCapture",
    "onPaste",
    "onPasteCapture",
    "onWheel",
    "onWheelCapture",
  ]),
  rd = new Set([
    "onKeyDown",
    "onKeyDownCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onPaste",
    "onPasteCapture",
    "onWheel",
    "onWheelCapture",
    "onAction",
    "onActionCapture",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
  ]);
function Gy(t, s, c) {
  let f = t._eventHandlers;
  if (!f) return;
  let m = ky[s];
  if (!m) return;
  let y = c ? m.capture : m.bubble;
  if (!y) return;
  return f[y];
}
function O1(t, s) {
  let c = [],
    f = t;
  while (f) {
    let m = f === t,
      y = Gy(f, s.type, !0),
      b = Gy(f, s.type, !1);
    if (y)
      c.unshift({ node: f, handler: y, phase: m ? "at_target" : "capturing" });
    if (b && (s.bubbles || m))
      c.push({ node: f, handler: b, phase: m ? "at_target" : "bubbling" });
    f = f.parentNode;
  }
  return c;
}
function w1(t, s) {
  let c;
  for (let { node: f, handler: m, phase: y } of t) {
    if (s._isImmediatePropagationStopped()) break;
    if (s._isPropagationStopped() && f !== c) break;
    (s._setEventPhase(y), s._setCurrentTarget(f), s._prepareForTarget(f));
    try {
      m(s);
    } catch (b) {
      h(dt(ge(b), "Ink event handler threw"));
    }
    c = f;
  }
}
function H1(t) {
  switch (t) {
    case "keydown":
    case "keyup":
    case "click":
    case "focus":
    case "blur":
    case "paste":
    case "action":
      return pf;
    case "resize":
    case "scroll":
    case "wheel":
    case "mousemove":
      return Ws;
    default:
      return _a;
  }
}
class od {
  discreteUpdates;
  currentEvent = null;
  currentUpdatePriority = _a;
  constructor(t = null) {
    this.discreteUpdates = t;
  }
  setCurrentUpdatePriority(t) {
    this.currentUpdatePriority = t;
  }
  resolveEventPriority() {
    if (this.currentUpdatePriority !== yf) return this.currentUpdatePriority;
    if (this.currentEvent) return H1(this.currentEvent.type);
    return _a;
  }
  dispatch(t, s) {
    let c = this.currentEvent;
    this.currentEvent = s;
    try {
      s._setTarget(t);
      let f = O1(t, s);
      return (
        w1(f, s),
        s._setEventPhase("none"),
        s._setCurrentTarget(null),
        !s.defaultPrevented
      );
    } finally {
      this.currentEvent = c;
    }
  }
  dispatchDiscrete(t, s) {
    if (!this.discreteUpdates) return this.dispatch(t, s);
    return this.discreteUpdates(
      (c, f) => this.dispatch(c, f),
      t,
      s,
      void 0,
      void 0,
    );
  }
  dispatchContinuous(t, s) {
    let c = this.currentUpdatePriority;
    try {
      return ((this.currentUpdatePriority = Ws), this.dispatch(t, s));
    } finally {
      this.currentUpdatePriority = c;
    }
  }
}
function B1(t) {
  return t === "absolute" ? 2 : 1;
}
function L1(t) {
  return t === "none" ? 1 : 0;
}
function z1(t) {
  switch (t) {
    case "wrap":
      return 1;
    case "wrap-reverse":
      return 2;
    default:
      return 0;
  }
}
function U1(t) {
  switch (t) {
    case "row":
      return 2;
    case "row-reverse":
      return 3;
    case "column-reverse":
      return 1;
    default:
      return 0;
  }
}
function jy(t, s) {
  switch (t) {
    case "auto":
      return 0;
    case "stretch":
      return 4;
    case "flex-start":
      return 1;
    case "center":
      return 2;
    case "flex-end":
      return 3;
    default:
      return s;
  }
}
function F1(t) {
  switch (t) {
    case "center":
      return 1;
    case "flex-end":
      return 2;
    case "space-between":
      return 3;
    case "space-around":
      return 4;
    case "space-evenly":
      return 5;
    default:
      return 0;
  }
}
var P1 = (t, s) => {
  if ("position" in s) t.setPositionType(B1(s.position));
  if ("top" in s) hu(t, 1, s.top);
  if ("bottom" in s) hu(t, 3, s.bottom);
  if ("left" in s) hu(t, 0, s.left);
  if ("right" in s) hu(t, 2, s.right);
};
function hu(t, s, c) {
  if (typeof c === "string") t.setPositionPercent(s, Number.parseInt(c, 10));
  else if (typeof c === "number") t.setPosition(s, c);
  else t.setPosition(s, Number.NaN);
}
var Y1 = (t, s) => {
    let c = s.overflowY ?? s.overflow,
      f = s.overflowX ?? s.overflow;
    if (c === "scroll" || f === "scroll") t.setOverflow(2);
    else if (c === "hidden" || f === "hidden") t.setOverflow(1);
    else if ("overflow" in s || "overflowX" in s || "overflowY" in s)
      t.setOverflow(0);
  },
  K1 = (t, s) => {
    if ("margin" in s) t.setMargin(8, s.margin);
    if ("marginX" in s) t.setMargin(6, s.marginX);
    if ("marginY" in s) t.setMargin(7, s.marginY);
    if ("marginLeft" in s) {
      let c = s.marginLeft;
      if (c === "auto") t.setMarginAuto(4);
      else t.setMargin(4, c);
    }
    if ("marginRight" in s) {
      let c = s.marginRight;
      if (c === "auto") t.setMarginAuto(5);
      else t.setMargin(5, c);
    }
    if ("marginTop" in s) t.setMargin(1, s.marginTop);
    if ("marginBottom" in s) t.setMargin(3, s.marginBottom);
  },
  k1 = (t, s) => {
    if ("padding" in s) t.setPadding(8, s.padding);
    if ("paddingX" in s) t.setPadding(6, s.paddingX);
    if ("paddingY" in s) t.setPadding(7, s.paddingY);
    if ("paddingLeft" in s) t.setPadding(0, s.paddingLeft);
    if ("paddingRight" in s) t.setPadding(2, s.paddingRight);
    if ("paddingTop" in s) t.setPadding(1, s.paddingTop);
    if ("paddingBottom" in s) t.setPadding(3, s.paddingBottom);
  },
  G1 = (t, s) => {
    if ("flexGrow" in s) t.setFlexGrow(s.flexGrow ?? 0);
    if ("flexShrink" in s) {
      let c = s.flexShrink;
      t.setFlexShrink(typeof c === "number" ? c : 1);
    }
    if ("flexWrap" in s) t.setFlexWrap(z1(s.flexWrap));
    if ("flexDirection" in s) t.setFlexDirection(U1(s.flexDirection));
    if ("flexBasis" in s) {
      let c = s.flexBasis;
      if (typeof c === "number") t.setFlexBasis(c);
      else if (typeof c === "string")
        t.setFlexBasisPercent(Number.parseInt(c, 10));
      else t.setFlexBasis(Number.NaN);
    }
    if ("alignItems" in s) t.setAlignItems(jy(s.alignItems, 4));
    if ("alignSelf" in s) t.setAlignSelf(jy(s.alignSelf, 0));
    if ("justifyContent" in s) t.setJustifyContent(F1(s.justifyContent));
  },
  j1 = (t, s) => {
    if ("width" in s) {
      let c = s.width;
      if (typeof c === "number") t.setWidth(c);
      else if (typeof c === "string") t.setWidthPercent(Number.parseInt(c, 10));
      else t.setWidthAuto();
    }
    if ("height" in s) {
      let c = s.height;
      if (typeof c === "number") t.setHeight(c);
      else if (typeof c === "string")
        t.setHeightPercent(Number.parseInt(c, 10));
      else t.setHeightAuto();
    }
    if ("minWidth" in s) {
      let c = s.minWidth;
      if (typeof c === "string") t.setMinWidthPercent(Number.parseInt(c, 10));
      else t.setMinWidth(c ?? 0);
    }
    if ("minHeight" in s) {
      let c = s.minHeight;
      if (typeof c === "string") t.setMinHeightPercent(Number.parseInt(c, 10));
      else t.setMinHeight(c ?? 0);
    }
    if ("maxWidth" in s) {
      let c = s.maxWidth;
      if (typeof c === "string") t.setMaxWidthPercent(Number.parseInt(c, 10));
      else t.setMaxWidth(c);
    }
    if ("maxHeight" in s) {
      let c = s.maxHeight;
      if (typeof c === "string") t.setMaxHeightPercent(Number.parseInt(c, 10));
      else t.setMaxHeight(c);
    }
  },
  W1 = (t, s) => {
    if ("display" in s) t.setDisplay(L1(s.display));
  },
  V1 = (t, s, c) => {
    let f = c ?? s;
    if ("borderStyle" in s) {
      let m = s.borderStyle ? 1 : 0;
      (t.setBorder(1, f.borderTop !== !1 ? m : 0),
        t.setBorder(3, f.borderBottom !== !1 ? m : 0),
        t.setBorder(0, f.borderLeft !== !1 ? m : 0),
        t.setBorder(2, f.borderRight !== !1 ? m : 0));
    } else {
      let m = f.borderStyle ? 1 : 0;
      if ("borderTop" in s) t.setBorder(1, s.borderTop === !1 ? 0 : m);
      if ("borderBottom" in s) t.setBorder(3, s.borderBottom === !1 ? 0 : m);
      if ("borderLeft" in s) t.setBorder(0, s.borderLeft === !1 ? 0 : m);
      if ("borderRight" in s) t.setBorder(2, s.borderRight === !1 ? 0 : m);
    }
  },
  q1 = (t, s) => {
    if ("gap" in s) t.setGap(2, s.gap);
    if ("columnGap" in s) t.setGap(0, s.columnGap);
    if ("rowGap" in s) t.setGap(1, s.rowGap);
  },
  X1 = (t, s = {}, c) => {
    (P1(t, s),
      Y1(t, s),
      K1(t, s),
      k1(t, s),
      G1(t, s),
      j1(t, s),
      W1(t, s),
      V1(t, s, c),
      q1(t, s));
  },
  ad = X1;
var Wy = (t, s) => {
    if (t === s) return;
    if (!t) return s;
    let c = {},
      f = !1;
    for (let m of Object.keys(t))
      if (s ? !Object.hasOwn(s, m) : !0) ((c[m] = void 0), (f = !0));
    if (s) {
      for (let m of Object.keys(s))
        if (s[m] !== t[m]) ((c[m] = s[m]), (f = !0));
    }
    return f ? c : void 0;
  },
  Vy = (t) => {
    let s = t.yogaNode;
    if (s) (s.unsetMeasureFunc(), id(t), s.freeRecursive());
  };
function Zy(t, s, c) {
  if (!t._eventHandlers) t._eventHandlers = {};
  t._eventHandlers[s] = c;
}
function Q1(t) {
  let s = t._eventHandlers;
  if (!s) return !1;
  for (let c of ld) if (s[c] != null) return !0;
  return !1;
}
function Iy(t, s) {
  if (t.setRawMode) t.setRawMode(s > 0);
  else t._pendingRawModeDelta = (t._pendingRawModeDelta ?? 0) + s;
}
function qy(t, s) {
  let c = Q1(t);
  if (c === !!t._holdsRawModeRef) return;
  ((t._holdsRawModeRef = c), Iy(s, c ? 1 : -1));
}
function sd(t, s) {
  if (t._holdsRawModeRef) ((t._holdsRawModeRef = !1), Iy(s, -1));
  for (let c of t.childNodes) if (c.nodeName !== "#text") sd(c, s);
}
function Z1(t, s, c) {
  if (s === "children") return;
  if (s === "style") {
    if ((nd(t, c), t.yogaNode)) ad(t.yogaNode, c);
    return;
  }
  if (s === "textStyles") {
    t.textStyles = c;
    return;
  }
  if (s === "accessibility") {
    td(t, c);
    return;
  }
  if (rd.has(s)) {
    Zy(t, s, c);
    return;
  }
  ed(t, s, c);
}
function Jy(t) {
  let s = [],
    c = new Set(),
    f = t;
  for (let m = 0; f && m < 50; m++) {
    if (c.has(f)) break;
    c.add(f);
    let y = f.elementType,
      b =
        typeof y === "function"
          ? y.displayName || y.name
          : typeof y === "string"
            ? void 0
            : y?.displayName || y?.name;
    if (b && b !== s.at(-1)) s.push(b);
    f = f._debugOwner ?? f.return;
  }
  return s;
}
function Xy(t) {
  try {
    let s = Jy(t);
    return s.length > 0 ? ` (owner chain: ${s.join(" > ")})` : "";
  } catch {
    return "";
  }
}
var p4 = new od((t, s, c, f, m) => $y.discreteUpdates(t, s, c, f, m)),
  $y = Qy.default({
    getRootHostContext: () => ({ isInsideText: !1 }),
    prepareForCommit: () => null,
    preparePortalMount: () => null,
    clearContainer: () => !1,
    resetAfterCommit(t) {
      let s = t.scrollCommitStartedAt;
      if (
        ((t.lastCommitMs = s === void 0 ? 0 : performance.now() - s),
        (t.scrollCommitStartedAt = void 0),
        typeof t.onComputeLayout === "function")
      )
        t.onComputeLayout();
      t.onRender?.();
    },
    getChildHostContext(t, s) {
      let c = t.isInsideText,
        f = s === "ink-text" || s === "ink-virtual-text" || s === "ink-link";
      if (c === f) return t;
      return { isInsideText: f };
    },
    shouldSetTextContent: () => !1,
    createInstance(t, s, c, f, m) {
      if (f.isInsideText && t === "ink-box")
        throw Error(`<Box> can't be nested inside <Text> component${Xy(m)}`);
      let y = t === "ink-text" && f.isInsideText ? "ink-virtual-text" : t,
        b = fu(y, c.yogaNode?.config);
      for (let [S, E] of Object.entries(s)) Z1(b, S, E);
      if ((qy(b, c), c.debugRepaints)) b.debugOwnerChain = Jy(m);
      return b;
    },
    createTextInstance(t, s, c, f) {
      if (!c.isInsideText) {
        let m = Xy(f);
        throw dt(
          Error(
            `Text string "${t}" must be rendered inside <Text> component${m}`,
          ),
          `Text string "<redacted: ${t.length} chars>" must be rendered inside <Text> component${m}`,
        );
      }
      return Yy(t);
    },
    resetTextContent() {},
    hideTextInstance(t) {
      ka(t, "");
    },
    unhideTextInstance(t, s) {
      ka(t, s);
    },
    getPublicInstance: (t) => t,
    hideInstance(t) {
      ((t.isHidden = !0), t.yogaNode?.setDisplay(1), GA(t));
    },
    unhideInstance(t) {
      ((t.isHidden = !1), t.yogaNode?.setDisplay(0), GA(t));
    },
    appendInitialChild: du,
    appendChild: du,
    insertBefore: $f,
    finalizeInitialChildren(t, s, c) {
      return c.autoFocus === !0;
    },
    commitMount(t) {
      XB(t).handleAutoFocus(t);
    },
    isPrimaryRenderer: !0,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    getCurrentUpdatePriority: () => p4.currentUpdatePriority,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    getInstanceFromNode: () => null,
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    appendChildToContainer: du,
    insertInContainerBefore: $f,
    removeChildFromContainer(t, s) {
      (Ka(t, s), Vy(s), XB(t).handleNodeRemoved(s, t), sd(s, t));
    },
    commitUpdate(t, s, c, f) {
      let m = Wy(c, f),
        y = Wy(c.style, f.style),
        b = !1;
      if (m)
        for (let [S, E] of Object.entries(m)) {
          if (S === "style") {
            nd(t, E);
            continue;
          }
          if (S === "textStyles") {
            Fy(t, E);
            continue;
          }
          if (S === "accessibility") {
            td(t, E);
            continue;
          }
          if (rd.has(S)) {
            if ((Zy(t, S, E), ld.has(S))) b = !0;
            continue;
          }
          ed(t, S, E);
        }
      if (b) qy(t, U0e(t));
      if (m?.autoFocus === !0) XB(t).handleAutoFocus(t);
      if (y && t.yogaNode) ad(t.yogaNode, y, f.style);
    },
    commitTextUpdate(t, s, c) {
      ka(t, c);
    },
    removeChild(t, s) {
      if ((Ka(t, s), Vy(s), s.nodeName !== "#text")) {
        let c = U0e(t);
        (c.focusManager.handleNodeRemoved(s, c), sd(s, c));
      }
    },
    maySuspendCommit() {
      return !1;
    },
    preloadInstance() {
      return !0;
    },
    startSuspendingCommit() {},
    suspendInstance() {},
    waitForCommitToBeReady() {
      return null;
    },
    NotPendingTransition: null,
    HostTransitionContext: {
      $$typeof: Symbol.for("react.context"),
      _currentValue: null,
    },
    setCurrentUpdatePriority(t) {
      p4.setCurrentUpdatePriority(t);
    },
    resolveUpdatePriority() {
      return p4.resolveEventPriority();
    },
    resetFormInstance() {},
    requestPostPaintCallback() {},
    shouldAttemptEagerTransition() {
      return !1;
    },
    trackSchedulerEvent() {},
    resolveEventType() {
      return p4.currentEvent?.type ?? null;
    },
    resolveEventTimeStamp() {
      return p4.currentEvent?.timeStamp ?? -1.1;
    },
  }),
  zi = $y;
function Rr(t, s) {
  let c = Math.min(t.x, s.x),
    f = Math.min(t.y, s.y),
    m = Math.max(t.x + t.width, s.x + s.width),
    y = Math.max(t.y + t.height, s.y + s.height);
  return { x: c, y: f, width: m - c, height: y - f };
}
function oa(t, s, c) {
  if (s !== void 0 && t < s) return s;
  if (c !== void 0 && t > c) return c;
  return t;
}
class ud {
  recording = !1;
  autoResetEnabled = !1;
  debugTainted = !1;
  stylePoolHealthyReported = !1;
  stylePoolCapHitReported = !1;
  keys = new Set();
  saturatedLatch = !1;
  maxKeys = 131072;
  proactiveResetCount = 0;
  lastProactiveResetReason = "none";
  lastProactiveResetAt = 0;
  record(t, s) {
    if (t < 2) return;
    if (this.keys.size >= this.maxKeys) {
      this.saturatedLatch = !0;
      return;
    }
    this.keys.add(t * 32768 + s);
  }
  get size() {
    return this.keys.size;
  }
  get saturated() {
    return this.saturatedLatch;
  }
  reset() {
    (this.keys.clear(), (this.saturatedLatch = !1));
  }
  setMaxKeys(t) {
    this.maxKeys = t ?? 131072;
  }
  recordProactiveReset(t) {
    (this.proactiveResetCount++,
      (this.lastProactiveResetReason = t),
      (this.lastProactiveResetAt = performance.now()));
  }
  get proactiveResetStats() {
    return {
      count: this.proactiveResetCount,
      lastReason: this.lastProactiveResetReason,
      lastResetAt: this.lastProactiveResetAt,
    };
  }
}
var cd = "\x1B[1m",
  fd = "\x1B[2m";
function I1(t, s) {
  let c = 0,
    f = 0;
  for (let m of t)
    if (m.code === cd) c |= 1;
    else if (m.code === fd) c |= 2;
  for (let m of s)
    if (m.code === cd) f |= 1;
    else if (m.code === fd) f |= 2;
  if (c & ~f && f) {
    let m = c & f;
    return "\x1B[22m" + (m & 1 ? cd : "") + (m & 2 ? fd : "");
  }
  return "";
}
class dd {
  strings = [" ", ""];
  stringMap = new Map([
    [" ", 0],
    ["", 1],
  ]);
  ascii = rE();
  intern(t) {
    if (t.length === 1) {
      let f = t.charCodeAt(0);
      if (f < 128) {
        let m = this.ascii[f];
        if (m !== -1) return m;
        let y = this.strings.length;
        return (this.strings.push(t), (this.ascii[f] = y), y);
      }
    }
    let s = this.stringMap.get(t);
    if (s !== void 0) return s;
    let c = this.strings.length;
    return (this.strings.push(t), this.stringMap.set(t, c), c);
  }
  get(t) {
    return this.strings[t] ?? " ";
  }
  get size() {
    return this.strings.length;
  }
}
var nv = 4096,
  J1 = 512,
  $1 = 8192;
class pu {
  strings = [""];
  stringMap = new Map();
  intern(t) {
    if (!t) return 0;
    let s = this.stringMap.get(t);
    if (s === void 0)
      ((s = this.strings.length),
        this.strings.push(t),
        this.stringMap.set(t, s));
    return s;
  }
  get(t) {
    return t === 0 ? void 0 : this.strings[t];
  }
  get size() {
    return this.strings.length;
  }
}
var ev = { type: "ansi", code: "\x1B[7m", endCode: "\x1B[27m" },
  eE = { type: "ansi", code: "\x1B[1m", endCode: "\x1B[22m" },
  tE = { type: "ansi", code: "\x1B[4m", endCode: "\x1B[24m" },
  nE = { type: "ansi", code: "\x1B[33m", endCode: "\x1B[39m" };
class hd {
  ids = new Map();
  styles = [];
  transitionCache = new Map();
  overflowWarned = !1;
  generationCount = 0;
  none;
  atlasRecorder = new ud();
  constructor() {
    this.none = this.intern([]);
  }
  get size() {
    return this.styles.length;
  }
  get overflowed() {
    return this.overflowWarned;
  }
  get transitionCacheSize() {
    return this.transitionCache.size;
  }
  needsCompaction(t) {
    return this.overflowWarned || this.styles.length > Math.max(J1, 2 * t);
  }
  get generation() {
    return this.generationCount;
  }
  intern(t) {
    let s = t.length === 0 ? "" : t.map((f) => f.code).join("\x00"),
      c = this.ids.get(s);
    if (c === void 0) {
      let f = this.styles.length;
      if (f > tv) {
        if (!this.overflowWarned)
          ((this.overflowWarned = !0),
            n(
              `StylePool exhausted ${tv} unique styles \u2014 further ` +
                "style combinations render unstyled to avoid packed-cell aliasing",
              { level: "warn" },
            ));
        return this.none;
      }
      (this.styles.push(t.length === 0 ? [] : t),
        (c = (f << 1) | (t.length > 0 && lE(t) ? 1 : 0)),
        this.ids.set(s, c));
    }
    return c;
  }
  get(t) {
    return this.styles[t >>> 1] ?? [];
  }
  transition(t, s) {
    if (t === s) return "";
    let c = t * 1048576 + s,
      f = this.transitionCache.get(c);
    if (f === void 0) {
      if (this.transitionCache.size >= $1) this.transitionCache.clear();
      let m = this.get(t),
        y = this.get(s);
      ((f = I1(m, y) + NI(pNe(m, y))), this.transitionCache.set(c, f));
    }
    return f;
  }
  inverseCache = new Map();
  withInverse(t) {
    let s = this.inverseCache.get(t);
    if (s === void 0) {
      let c = this.get(t);
      ((s = c.some((m) => m.endCode === "\x1B[27m")
        ? t
        : this.intern([...c, ev])),
        this.inverseCache.set(t, s));
    }
    return s;
  }
  currentMatchCache = new Map();
  withCurrentMatch(t) {
    let s = this.currentMatchCache.get(t);
    if (s === void 0) {
      let c = this.get(t),
        f = c.filter(
          (m) => m.endCode !== "\x1B[39m" && m.endCode !== "\x1B[49m",
        );
      if ((f.push(nE), !c.some((m) => m.endCode === "\x1B[27m"))) f.push(ev);
      if (!c.some((m) => m.endCode === "\x1B[22m")) f.push(eE);
      if (!c.some((m) => m.endCode === "\x1B[24m")) f.push(tE);
      ((s = this.intern(f)), this.currentMatchCache.set(t, s));
    }
    return s;
  }
  selectionBgCode = null;
  selectionBgCache = new Map();
  setSelectionBg(t) {
    if (this.selectionBgCode?.code === t?.code) return;
    ((this.selectionBgCode = t), this.selectionBgCache.clear());
  }
  withSelectionBg(t) {
    let s = this.selectionBgCode;
    if (s === null) return this.withInverse(t);
    let c = this.selectionBgCache.get(t);
    if (c === void 0) {
      let f = this.get(t).filter(
        (m) => m.endCode !== "\x1B[49m" && m.endCode !== "\x1B[27m",
      );
      (f.push(s), (c = this.intern(f)), this.selectionBgCache.set(t, c));
    }
    return c;
  }
  compact() {
    let t = this.styles;
    ((this.ids = new Map()),
      (this.styles = []),
      this.transitionCache.clear(),
      this.inverseCache.clear(),
      this.currentMatchCache.clear(),
      this.selectionBgCache.clear(),
      (this.overflowWarned = !1),
      this.generationCount++,
      this.intern([]));
    let s = new Int32Array(t.length).fill(-1);
    return (c) => {
      let f = c >>> 1,
        m = s[f];
      if (m !== void 0 && m !== -1) return m;
      let y = this.intern(t[f] ?? []);
      if (f < s.length) s[f] = y;
      return y;
    };
  }
}
var iE = new Set(["\x1B[49m", "\x1B[27m", "\x1B[24m", "\x1B[29m", "\x1B[55m"]);
function lE(t) {
  for (let s of t) if (iE.has(s.endCode)) return !0;
  return !1;
}
var Yl = 0,
  md = 1;
function rE() {
  let t = new Int32Array(128);
  return (t.fill(-1), (t[32] = Yl), t);
}
var Tr = 17,
  No = 2,
  Ga = 32767,
  tn = 3,
  oE = (1 << (32 - Tr)) - 1,
  tv = oE >>> 1;
function $n(t, s, c) {
  return (t << Tr) | (s << No) | c;
}
var mu = 0n;
function iv(t) {
  let s = t.cells;
  for (let c = 0; c < s.length; c += 2) s[c] = md;
}
function lv(t, s) {
  if (t.width !== s.width || t.height !== s.height) return !1;
  let c = t.width * t.height * 2,
    f = t.cells,
    m = s.cells;
  for (let y = 0; y < c; y++) if (f[y] !== m[y]) return !1;
  return !0;
}
function pd(t, s) {
  if (s > 32767)
    n(
      `packSoftWrap: start column ${s} exceeds the 15-bit field; bit 15 is reserved for SW_ELIDED_SEP and will be corrupted`,
      { level: "error" },
    );
  return (t << 16) | (s & 32767);
}
var Ao = 32768;
function ja(t) {
  return t & 32767;
}
var mi = { HardBreak: 0, Continuation: 1, ContinuationElidedSep: 2 };
function aE(t, s) {
  let c = s << 1;
  return (t.cells[c] | t.cells[c | 1]) === 0;
}
function Nr(t, s, c) {
  if (s < 0 || c < 0 || s >= t.width || c >= t.height) return !0;
  return aE(t, c * t.width + s);
}
function uE(t, s) {
  return t.hyperlinkPool.intern(s);
}
function o7(t, s, c, f, m) {
  if (
    (dE(t, "createScreen width"),
    dE(s, "createScreen height"),
    !Number.isInteger(t) || t < 0)
  )
    t = Math.max(0, Math.floor(t) || 0);
  if (!Number.isInteger(s) || s < 0) s = Math.max(0, Math.floor(s) || 0);
  let y = t * s,
    b = new ArrayBuffer(y << 3),
    S = new Int32Array(b),
    E = new BigInt64Array(b);
  return {
    width: t,
    height: s,
    cells: S,
    cells64: E,
    charPool: f,
    hyperlinkPool: m,
    emptyStyleId: c.none,
    atlasRecorder: c.atlasRecorder,
    damage: void 0,
    noSelect: new Uint8Array(y),
    softWrap: new Int32Array(s),
  };
}
function yd(t, s, c) {
  if (
    (dE(s, "resetScreen width"),
    dE(c, "resetScreen height"),
    !Number.isInteger(s) || s < 0)
  )
    s = Math.max(0, Math.floor(s) || 0);
  if (!Number.isInteger(c) || c < 0) c = Math.max(0, Math.floor(c) || 0);
  let f = s * c;
  if (t.cells64.length < f) {
    let m = new ArrayBuffer(f << 3);
    ((t.cells = new Int32Array(m)),
      (t.cells64 = new BigInt64Array(m)),
      (t.noSelect = new Uint8Array(f)));
  }
  if (t.softWrap.length < c) t.softWrap = new Int32Array(c);
  (t.cells64.fill(mu, 0, f),
    t.noSelect.fill(0, 0, f),
    t.softWrap.fill(0, 0, c),
    (t.width = s),
    (t.height = c),
    (t.damage = void 0));
}
function rv(t, s, c, f) {
  let { charPool: m, hyperlinkPool: y } = t,
    b = m !== s,
    S = y !== c;
  if (!b && !S && !f) return;
  let E = t.width * t.height,
    x = t.cells;
  for (let C = 0; C < E << 1; C += 2) {
    if (b) {
      let z = x[C];
      x[C] = s.intern(m.get(z));
    }
    let D = x[C + 1],
      N = (D >>> No) & Ga,
      T = D >>> Tr,
      L = S && N !== 0 ? c.intern(y.get(N)) : N,
      O = f && T !== 0 ? f(T) : T;
    if (L !== N || O !== T) {
      let z = D & tn;
      x[C + 1] = $n(O, L, z);
    }
  }
  ((t.charPool = s), (t.hyperlinkPool = c));
}
function dn(t, s, c) {
  if (s < 0 || c < 0 || s >= t.width || c >= t.height) return;
  return f4(t, c * t.width + s);
}
function f4(t, s) {
  let c = s << 1,
    f = t.cells[c + 1],
    m = (f >>> No) & Ga;
  return {
    char: t.charPool.get(t.cells[c]),
    styleId: f >>> Tr,
    width: f & tn,
    hyperlink: m === 0 ? void 0 : t.hyperlinkPool.get(m),
  };
}
function ov(t, s, c, f, m) {
  let y = f << 1,
    b = t[y];
  if (b === 1) return;
  let S = t[y + 1];
  if (b === 0 && (S & 262140) === 0) {
    let x = S >>> Tr;
    if (x === 0 || x === m) return;
  }
  let E = (S >>> No) & Ga;
  return {
    char: s.get(b),
    styleId: S >>> Tr,
    width: S & tn,
    hyperlink: E === 0 ? void 0 : c.get(E),
  };
}
function Kl(t, s, c) {
  let f = s | 1,
    m = t.cells[f];
  ((c.char = t.charPool.get(t.cells[s])),
    (c.styleId = m >>> Tr),
    (c.width = m & tn));
  let y = (m >>> No) & Ga;
  c.hyperlink = y === 0 ? void 0 : t.hyperlinkPool.get(y);
}
function av(t, s, c) {
  if (s < 0 || c < 0 || s >= t.width || c >= t.height) return;
  let f = (c * t.width + s) << 1;
  return t.charPool.get(t.cells[f]);
}
function Ar(t, s, c, f) {
  if (s < 0 || c < 0 || s >= t.width || c >= t.height) return;
  let m = (c * t.width + s) << 1,
    y = t.cells,
    b = y[m + 1] & tn;
  if (b === 1 && f.width !== 1) {
    if (s + 1 < t.width) {
      let N = m + 2;
      if ((y[N + 1] & tn) === 2)
        ((y[N] = Yl), (y[N + 1] = $n(t.emptyStyleId, 0, 0)));
    }
  }
  let S = -1;
  if (b === 2 && f.width !== 2) {
    if (s > 0) {
      let D = m - 2;
      if ((y[D + 1] & tn) === 1)
        ((y[D] = Yl), (y[D + 1] = $n(t.emptyStyleId, 0, 0)), (S = s - 1));
    }
  }
  ((y[m] = cE(t, f.char)),
    (y[m + 1] = $n(f.styleId, uE(t, f.hyperlink), f.width)));
  let E = t.atlasRecorder;
  if (E.recording) E.record(y[m], f.styleId);
  let x = S >= 0 ? Math.min(s, S) : s,
    C = t.damage;
  if (C) {
    let D = C.x + C.width,
      N = C.y + C.height;
    if (x < C.x) ((C.width += C.x - x), (C.x = x));
    else if (s >= D) C.width = s - C.x + 1;
    if (c < C.y) ((C.height += C.y - c), (C.y = c));
    else if (c >= N) C.height = c - C.y + 1;
  } else t.damage = { x, y: c, width: s - x + 1, height: 1 };
  if (f.width === 1) {
    let D = s + 1;
    if (D < t.width) {
      let N = m + 2;
      if ((y[N + 1] & tn) === 1) {
        let L = N + 2;
        if (D + 1 < t.width && (y[L + 1] & tn) === 2)
          ((y[L] = Yl), (y[L + 1] = $n(t.emptyStyleId, 0, 0)));
      }
      ((y[N] = md), (y[N + 1] = $n(t.emptyStyleId, 0, 2)));
      let T = t.damage;
      if (T && D >= T.x + T.width) T.width = D - T.x + 1;
    }
  }
}
function vd(t) {
  return t.length > 2;
}
function sv(t) {
  let s = t.damage;
  if (!s) return;
  let c = Math.min(t.width - 2, s.x + s.width - 1),
    f = Math.min(t.height, s.y + s.height);
  for (let m = s.y; m < f; m++)
    for (let y = s.x; y <= c; y++) {
      if ((t.cells[((m * t.width + y) << 1) + 1] & tn) !== 1) continue;
      let S = dn(t, y, m);
      if (!S || !vd(S.char)) continue;
      let E = Math.max(2, te(S.char));
      if (y + E < t.width) continue;
      for (let x = y; x < t.width; x++)
        Ar(t, x, m, {
          char: x === y ? Na : " ",
          styleId: S.styleId,
          width: 0,
          hyperlink: S.hyperlink,
        });
    }
}
function _o(t, s, c, f) {
  if (s < 0 || c < 0 || s >= t.width || c >= t.height) return;
  let m = (c * t.width + s) << 1,
    y = t.cells,
    b = y[m + 1],
    S = b & tn;
  if (S === 2 || S === 3) return;
  let E = (b >>> No) & Ga;
  y[m + 1] = $n(f, E, S);
  let x = t.damage;
  if (x) {
    let C = x.x + x.width,
      D = x.y + x.height;
    if (s < x.x) ((x.width += x.x - s), (x.x = s));
    else if (s >= C) x.width = s - x.x + 1;
    if (c < x.y) ((x.height += x.y - c), (x.y = c));
    else if (c >= D) x.height = c - x.y + 1;
  } else t.damage = { x: s, y: c, width: 1, height: 1 };
}
function cE(t, s) {
  return t.charPool.intern(s);
}
function gd(t, s, c, f, m, y) {
  if (((c = Math.max(0, c)), (f = Math.max(0, f)), c >= m || f >= y)) return;
  let b = m - c,
    S = s.width << 1,
    E = t.width << 1,
    x = b << 1,
    C = s.cells,
    D = t.cells,
    N = s.noSelect,
    T = t.noSelect;
  if (
    (t.softWrap.set(s.softWrap.subarray(f, y), f),
    c === 0 && m === s.width && s.width === t.width)
  ) {
    let k = f * S,
      Z = (y - f) * S;
    D.set(C.subarray(k, k + Z), k);
    let J = f * s.width,
      re = (y - f) * s.width;
    T.set(N.subarray(J, J + re), J);
  } else {
    let k = f * S + (c << 1),
      Z = f * E + (c << 1),
      J = f * s.width + c,
      re = f * t.width + c;
    for (let Q = f; Q < y; Q++)
      (D.set(C.subarray(k, k + x), Z),
        T.set(N.subarray(J, J + b), re),
        (k += S),
        (Z += E),
        (J += s.width),
        (re += t.width));
  }
  let L = c > 0,
    O = m < t.width,
    z = !1,
    W = 0;
  if (L || O) {
    let k = (f * t.width + c - 1) << 1,
      Z = (f * t.width + m - 1) << 1;
    for (let J = f; J < y; J++) {
      if (L) {
        let re = D[k + 3] & tn;
        if ((D[k + 1] & tn) === 1) {
          if (re !== 2)
            ((D[k] = Yl), (D[k + 1] = $n(t.emptyStyleId, 0, 0)), (z = !0));
        } else if (re === 2)
          ((D[k + 2] = Yl), (D[k + 3] = $n(t.emptyStyleId, 0, 0)));
      }
      if (O) {
        if ((D[Z + 1] & tn) === 1) {
          if (m + 1 < t.width && (D[Z + 3] & tn) === 1 && (D[Z + 5] & tn) === 2)
            ((D[Z + 4] = Yl), (D[Z + 5] = $n(t.emptyStyleId, 0, 0)), (W = 2));
          else if (W < 1) W = 1;
          ((D[Z + 2] = md), (D[Z + 3] = $n(t.emptyStyleId, 0, 2)));
        } else if ((D[Z + 3] & tn) === 2) {
          if (((D[Z + 2] = Yl), (D[Z + 3] = $n(t.emptyStyleId, 0, 0)), W < 1))
            W = 1;
        }
      }
      ((k += E), (Z += E));
    }
  }
  let Y = z ? c - 1 : c,
    X = m + W,
    U = { x: Y, y: f, width: X - Y, height: y - f };
  if (t.damage) t.damage = Rr(t.damage, U);
  else t.damage = U;
}
function yu(t, s, c, f) {
  if (f === 0 || s < 0 || c >= t.height || s > c) return;
  let { width: m, cells64: y, noSelect: b, softWrap: S } = t;
  if (Math.abs(f) > c - s) {
    (y.fill(mu, s * m, (c + 1) * m),
      b.fill(0, s * m, (c + 1) * m),
      S.fill(0, s, c + 1));
    return;
  }
  if (f > 0)
    (y.copyWithin(s * m, (s + f) * m, (c + 1) * m),
      b.copyWithin(s * m, (s + f) * m, (c + 1) * m),
      S.copyWithin(s, s + f, c + 1),
      y.fill(mu, (c - f + 1) * m, (c + 1) * m),
      b.fill(0, (c - f + 1) * m, (c + 1) * m),
      S.fill(0, c - f + 1, c + 1));
  else
    (y.copyWithin((s - f) * m, s * m, (c + f + 1) * m),
      b.copyWithin((s - f) * m, s * m, (c + f + 1) * m),
      S.copyWithin(s - f, s, c + f + 1),
      y.fill(mu, s * m, (s - f) * m),
      b.fill(0, s * m, (s - f) * m),
      S.fill(0, s, s - f));
}
var uv = new RegExp(`^${FP}\\]8${khe}${khe}([^${$w}]*)${$w}$`),
  Vye = `${FP}]8${khe}`;
function cv(t) {
  for (let s of t) {
    let c = s.code;
    if (c.length < 5 || !c.startsWith(Vye)) continue;
    let f = c.match(uv);
    if (f) return f[1] || null;
  }
  return null;
}
function fv(t) {
  return t.filter((s) => !s.code.startsWith(Vye) || !uv.test(s.code));
}
function dv(t, s, c) {
  let f = t.width,
    m = s.width,
    y = t.height,
    b = s.height,
    S;
  if (f === 0 && y === 0) S = { x: 0, y: 0, width: m, height: b };
  else if (s.damage) {
    if (((S = s.damage), t.damage)) S = Rr(S, t.damage);
  } else if (t.damage) S = t.damage;
  else S = { x: 0, y: 0, width: 0, height: 0 };
  if (y > b) S = Rr(S, { x: 0, y: b, width: f, height: y - b });
  if (f > m) S = Rr(S, { x: m, y: 0, width: f - m, height: y });
  let E = Math.max(y, b),
    x = Math.max(f, m),
    C = Math.min(S.y + S.height, E),
    D = Math.min(S.x + S.width, x);
  if (f === m) return yE(t, s, S.x, D, S.y, C, c);
  return vE(t, s, S.x, D, S.y, C, c);
}
function fE(t, s, c, f) {
  for (let m = 0; m < f; m++, c += 2) {
    let y = c | 1;
    if (t[c] !== s[c] || t[y] !== s[y]) return m;
  }
  return f;
}
function hE(t, s, c, f, m, y, b, S, E, x, C) {
  let D = b;
  while (D < S) {
    let N = fE(t, s, m, S - D);
    if (((D += N), (m += N << 1), D >= S)) break;
    if ((Kl(c, m, E), Kl(f, m, x), C(D, y, E, x))) return !0;
    (D++, (m += 2));
  }
  return !1;
}
function mE(t, s, c, f, m, y, b) {
  for (let S = f; S < m; S++, s += 2)
    if ((Kl(t, s, y), b(S, c, y, void 0))) return !0;
  return !1;
}
function pE(t, s, c, f, m, y, b, S) {
  for (let E = m; E < y; E++, c += 2) {
    if (t[c] === 0 && t[c | 1] === 0) continue;
    if ((Kl(s, c, b), S(E, f, void 0, b))) return !0;
  }
  return !1;
}
function yE(t, s, c, f, m, y, b) {
  let S = t.cells,
    E = s.cells,
    { width: x, height: C } = t,
    D = s.height,
    N = x << 1,
    T = { char: " ", styleId: 0, width: 0, hyperlink: void 0 },
    L = { char: " ", styleId: 0, width: 0, hyperlink: void 0 },
    O = Math.min(f, x),
    z = (m * x + c) << 1;
  for (let W = m; W < y; W++) {
    let Y = W < C,
      X = W < D;
    if (Y && X) {
      if (hE(S, E, t, s, z, W, c, O, T, L, b)) return !0;
    } else if (Y) {
      if (mE(t, z, W, c, O, T, b)) return !0;
    } else if (X) {
      if (pE(E, s, z, W, c, O, L, b)) return !0;
    }
    z += N;
  }
  return !1;
}
function vE(t, s, c, f, m, y, b) {
  let S = t.width,
    E = s.width,
    x = t.cells,
    C = s.cells,
    D = { char: " ", styleId: 0, width: 0, hyperlink: void 0 },
    N = { char: " ", styleId: 0, width: 0, hyperlink: void 0 },
    T = S << 1,
    L = E << 1,
    O = (m * S + c) << 1,
    z = (m * E + c) << 1;
  for (let W = m; W < y; W++) {
    let Y = W < t.height,
      X = W < s.height,
      U = Y ? Math.min(f, S) : c,
      k = X ? Math.min(f, E) : c,
      Z = Math.min(U, k),
      J = O,
      re = z;
    for (let Q = c; Q < Z; Q++) {
      if (x[J] === C[re] && x[J + 1] === C[re + 1]) {
        ((J += 2), (re += 2));
        continue;
      }
      if ((Kl(t, J, D), Kl(s, re, N), (J += 2), (re += 2), b(Q, W, D, N)))
        return !0;
    }
    if (U > Z) {
      J = O + ((Z - c) << 1);
      for (let Q = Z; Q < U; Q++)
        if ((Kl(t, J, D), (J += 2), b(Q, W, D, void 0))) return !0;
    }
    if (k > Z) {
      re = z + ((Z - c) << 1);
      for (let Q = Z; Q < k; Q++) {
        if (C[re] === 0 && C[re | 1] === 0) {
          re += 2;
          continue;
        }
        if ((Kl(s, re, N), (re += 2), b(Q, W, void 0, N))) return !0;
      }
    }
    ((O += T), (z += L));
  }
  return !1;
}
function hv(t, s, c, f, m) {
  yv(t, s, c, f, m, 1);
}
function mv(t, s, c, f, m) {
  yv(t, s, c, f, m, 0);
}
function pv(t, s, c, f, m, y) {
  let b = Math.max(0, c),
    S = Math.max(0, f),
    E = Math.min(m, t.width, s.width),
    x = Math.min(y, t.height, s.height);
  if (b >= E || S >= x) return;
  let C = s.noSelect,
    D = t.noSelect,
    N = E - b,
    T = S * s.width + b,
    L = S * t.width + b;
  for (let O = S; O < x; O++)
    (D.set(C.subarray(T, T + N), L), (T += s.width), (L += t.width));
}
function yv(t, s, c, f, m, y) {
  let b = Math.min(s + f, t.width),
    S = Math.min(c + m, t.height),
    { noSelect: E, width: x } = t;
  for (let C = Math.max(0, c); C < S; C++) {
    let D = C * x;
    E.fill(y, D + Math.max(0, s), D + b);
  }
}
function gv() {
  return {
    anchor: null,
    focus: null,
    isDragging: !1,
    anchorSpan: null,
    scrolledOffAbove: [],
    scrolledOffBelow: [],
    scrolledOffAboveSW: [],
    scrolledOffBelowSW: [],
    lastPressHadAlt: !1,
  };
}
function Md(t, s, c, f) {
  ((t.scope = f),
    (t.anchor = { col: Do(t, s), row: c }),
    (t.focus = null),
    (t.isDragging = !0),
    (t.anchorSpan = null),
    (t.scrolledOffAbove = []),
    (t.scrolledOffBelow = []),
    (t.scrolledOffAboveSW = []),
    (t.scrolledOffBelowSW = []),
    (t.virtualAnchorRow = void 0),
    (t.virtualFocusRow = void 0),
    (t.virtualAnchorCol = void 0),
    (t.virtualFocusCol = void 0),
    (t.lastPressHadAlt = !1));
}
function bv(t, s, c) {
  if (!t.isDragging) return;
  let f = Do(t, s);
  if (!t.focus && t.anchor && t.anchor.col === f && t.anchor.row === c) return;
  t.focus = { col: f, row: c };
}
function Do(t, s) {
  return t.scope ? oa(s, t.scope.x1, t.scope.x2 - 1) : s;
}
function Oo(t, s) {
  return t.scope
    ? { lo: t.scope.x1, hi: Math.min(t.scope.x2, s) - 1 }
    : { lo: 0, hi: s - 1 };
}
function wo(t) {
  t.isDragging = !1;
}
function Va(t) {
  ((t.anchor = null),
    (t.focus = null),
    (t.isDragging = !1),
    (t.anchorSpan = null),
    (t.scope = void 0),
    (t.scrolledOffAbove = []),
    (t.scrolledOffBelow = []),
    (t.scrolledOffAboveSW = []),
    (t.scrolledOffBelowSW = []),
    (t.virtualAnchorRow = void 0),
    (t.virtualFocusRow = void 0),
    (t.virtualAnchorCol = void 0),
    (t.virtualFocusCol = void 0),
    (t.lastPressHadAlt = !1));
}
var gE = /[\p{L}\p{N}_/.\-+~\\]/u;
function vu(t) {
  if (t === " " || t === "") return 0;
  if (gE.test(t)) return 1;
  return 2;
}
function Sv(t, s, c) {
  if (c < 0 || c >= t.height) return null;
  let { width: f, noSelect: m } = t,
    y = c * f,
    b = s;
  if (b > 0) {
    let N = dn(t, b, c);
    if (N && N.width === 2) b -= 1;
  }
  if (b < 0 || b >= f || m[y + b] === 1) return null;
  let S = dn(t, b, c);
  if (!S) return null;
  let E = Rv(t, b, c);
  if (E) return { lo: E.lo, hi: E.hi };
  let x = vu(S.char),
    C = b;
  while (C > 0) {
    let N = C - 1;
    if (m[y + N] === 1) break;
    let T = dn(t, N, c);
    if (!T) break;
    if (T.width === 2) {
      if (N === 0 || m[y + N - 1] === 1) break;
      let L = dn(t, N - 1, c);
      if (!L || vu(L.char) !== x) break;
      C = N - 1;
      continue;
    }
    if (vu(T.char) !== x) break;
    C = N;
  }
  let D = b;
  while (D < f - 1) {
    let N = D + 1;
    if (m[y + N] === 1) break;
    let T = dn(t, N, c);
    if (!T) break;
    if (T.width === 2) {
      D = N;
      continue;
    }
    if (vu(T.char) !== x) break;
    D = N;
  }
  return { lo: C, hi: D };
}
function Cd(t, s) {
  if (t.row !== s.row) return t.row < s.row ? -1 : 1;
  if (t.col !== s.col) return t.col < s.col ? -1 : 1;
  return 0;
}
function xv(t, s, c, f) {
  let m = Sv(s, c, f);
  if (!m) return;
  let y = { col: Do(t, m.lo), row: f },
    b = { col: Do(t, m.hi), row: f };
  ((t.anchor = y),
    (t.focus = b),
    (t.isDragging = !0),
    (t.anchorSpan = { lo: y, hi: b, kind: "word" }));
}
var bE = new Set([..."<>\"'` "]);
function SE(t) {
  if (t.length !== 1) return !1;
  let s = t.charCodeAt(0);
  return s >= 33 && s <= 126 && !bE.has(t);
}
function bd(t, s, c) {
  if (t.noSelect[c * t.width + s] === 1) return null;
  let f = dn(t, s, c);
  return f && f.width === 0 && SE(f.char) ? f.char : null;
}
function Sd(t, s, c, f, m) {
  if (c < f || c > m) return null;
  let y = bd(t, c, s);
  if (y === null) return null;
  let b = c,
    S = "";
  while (b > f) {
    let C = bd(t, b - 1, s);
    if (C === null) break;
    ((S = C + S), b--);
  }
  let E = c,
    x = "";
  while (E < m) {
    let C = bd(t, E + 1, s);
    if (C === null) break;
    ((x += C), E++);
  }
  return { lo: b, hi: E, text: S + y + x };
}
function Ed(t, s) {
  let c = t.softWrap[s],
    f = s + 1 < t.height ? t.softWrap[s + 1] : 0;
  return { start: c !== 0 ? ja(c) : 0, end: f !== 0 ? f >>> 16 : t.width };
}
function Mv(t, s, c) {
  return Rv(t, s, c)?.url;
}
function Rv(t, s, c) {
  if (c < 0 || c >= t.height) return;
  let f = t.width,
    m = s;
  if (m > 0) {
    let Q = dn(t, m, c);
    if (Q && Q.width === 2) m -= 1;
  }
  if (m < 0 || m >= f) return;
  let y = t.softWrap,
    b = Ed(t, c),
    S,
    E,
    x = m >= b.start && m < b.end;
  if (x) ((S = b.start), (E = b.end - 1));
  else if (m >= b.end) ((S = b.end), (E = f - 1));
  else ((S = 0), (E = b.start - 1));
  let C = Sd(t, c, m, S, E);
  if (!C) return;
  let D = C.text,
    N = m - C.lo,
    T = c,
    L = C.hi,
    O = c,
    z = C.lo;
  if (x) {
    while (T + 1 < t.height) {
      let Q = y[T + 1];
      if (Q === 0 || L + 1 !== Q >>> 16 || (Q & Ao) !== 0) break;
      let ce = Ed(t, T + 1),
        le = Sd(t, T + 1, ce.start, ce.start, ce.end - 1);
      if (!le) break;
      ((D += le.text), T++, (L = le.hi));
    }
    while (O > 0) {
      let Q = y[O],
        ce = Q >>> 16;
      if (Q === 0 || z !== ja(Q) || ce === 0 || (Q & Ao) !== 0) break;
      let le = Ed(t, O - 1),
        oe = Sd(t, O - 1, ce - 1, le.start, ce - 1);
      if (!oe) break;
      ((D = oe.text + D), (N += oe.text.length), O--, (z = oe.lo));
    }
  }
  let W = /(?:https?|file):\/\//g,
    Y = -1,
    X = D.length;
  for (let Q; (Q = W.exec(D));) {
    if (Q.index > N) {
      X = Q.index;
      break;
    }
    Y = Q.index;
  }
  if (Y < 0) return;
  if (X === D.length && L + 1 < f) {
    if (dn(t, L + 1, T)?.char === "\u2026") return;
  }
  let U = D.slice(Y, X),
    k = { ")": "(", "]": "[", "}": "{" };
  while (U.length > 0) {
    let Q = U.at(-1);
    if (".,;:!?".includes(Q)) {
      U = U.slice(0, -1);
      continue;
    }
    let ce = k[Q];
    if (!ce) break;
    let le = 0,
      oe = 0;
    for (let fe = 0; fe < U.length; fe++) {
      let ue = U.charAt(fe);
      if (ue === ce) le++;
      else if (ue === Q) oe++;
    }
    if (oe > le) U = U.slice(0, -1);
    else break;
  }
  if (N >= Y + U.length) return;
  let Z = N - (m - C.lo),
    J = C.lo + Math.max(0, Y - Z),
    re = C.lo + Math.min(C.hi - C.lo, Y + U.length - 1 - Z);
  return { url: U, lo: J, hi: re };
}
function Tv(t, s, c) {
  if (c < 0 || c >= s.height) return;
  let f = Oo(t, s.width),
    m = { col: f.lo, row: c },
    y = { col: f.hi, row: c };
  ((t.anchor = m),
    (t.focus = y),
    (t.isDragging = !0),
    (t.anchorSpan = { lo: m, hi: y, kind: "line" }));
}
function Nv(t, s, c, f) {
  if (!t.isDragging || !t.anchorSpan) return;
  let m = t.anchorSpan,
    y,
    b;
  if (m.kind === "word") {
    let S = Sv(s, c, f);
    ((y = { col: Do(t, S ? S.lo : c), row: f }),
      (b = { col: Do(t, S ? S.hi : c), row: f }));
  } else {
    let S = oa(f, 0, s.height - 1),
      E = Oo(t, s.width);
    ((y = { col: E.lo, row: S }), (b = { col: E.hi, row: S }));
  }
  if (Cd(b, m.lo) < 0) ((t.anchor = m.hi), (t.focus = y));
  else if (Cd(y, m.hi) > 0) ((t.anchor = m.lo), (t.focus = b));
  else ((t.anchor = m.lo), (t.focus = m.hi));
}
function _v(t, s, c) {
  if (!t.focus) return;
  ((t.anchorSpan = null),
    (t.focus = { col: s, row: c }),
    (t.virtualFocusRow = void 0),
    (t.virtualFocusCol = void 0));
}
function Dv(t, s, c, f, m) {
  if (!t.anchor || !t.focus) return;
  let y = (t.virtualAnchorRow ?? t.anchor.row) + s,
    b = (t.virtualFocusRow ?? t.focus.row) + s,
    S = Math.min(
      t.virtualAnchorRow ?? t.anchor.row,
      t.virtualFocusRow ?? t.focus.row,
    ),
    E = Math.max(
      t.virtualAnchorRow ?? t.anchor.row,
      t.virtualFocusRow ?? t.focus.row,
    ),
    x = E - S + 1,
    C = Math.min(x, Math.max(0, c - S)),
    D = Math.min(x, Math.max(0, E - f)),
    N = Math.min(x, Math.max(0, c - Math.min(y, b))),
    T = Math.min(x, Math.max(0, Math.max(y, b) - f));
  if (D === x && N === x)
    ((t.scrolledOffAbove = t.scrolledOffBelow),
      (t.scrolledOffAboveSW = t.scrolledOffBelowSW),
      (t.scrolledOffBelow = []),
      (t.scrolledOffBelowSW = []));
  else if (C === x && T === x)
    ((t.scrolledOffBelow = t.scrolledOffAbove),
      (t.scrolledOffBelowSW = t.scrolledOffAboveSW),
      (t.scrolledOffAbove = []),
      (t.scrolledOffAboveSW = []));
  if (N < C) {
    let U = Math.min(C - N, t.scrolledOffAbove.length);
    ((t.scrolledOffAbove.length -= U),
      (t.scrolledOffAboveSW.length = t.scrolledOffAbove.length));
  }
  if (T < D) {
    let U = D - T;
    (t.scrolledOffBelow.splice(0, U), t.scrolledOffBelowSW.splice(0, U));
  }
  if (t.scrolledOffAbove.length > N)
    ((t.scrolledOffAbove = N > 0 ? t.scrolledOffAbove.slice(-N) : []),
      (t.scrolledOffAboveSW = N > 0 ? t.scrolledOffAboveSW.slice(-N) : []));
  if (t.scrolledOffBelow.length > T)
    ((t.scrolledOffBelow = t.scrolledOffBelow.slice(0, T)),
      (t.scrolledOffBelowSW = t.scrolledOffBelowSW.slice(0, T)));
  let L = Oo(t, m),
    O = (U, k) => {
      if (U < c) return { col: L.lo, row: c };
      if (U > f) return { col: L.hi, row: f };
      return { col: k, row: U };
    },
    z = t.virtualAnchorCol ?? t.anchor.col,
    W = t.virtualFocusCol ?? t.focus.col;
  ((t.anchor = O(y, z)), (t.focus = O(b, W)));
  let Y = y < c || y > f,
    X = b < c || b > f;
  if (
    ((t.virtualAnchorRow = Y ? y : void 0),
    (t.virtualAnchorCol = Y ? z : void 0),
    (t.virtualFocusRow = X ? b : void 0),
    (t.virtualFocusCol = X ? W : void 0),
    t.anchorSpan)
  ) {
    let U = (k) => {
      let Z = k.row + s;
      if (Z < c) return { col: L.lo, row: c };
      if (Z > f) return { col: L.hi, row: f };
      return { col: k.col, row: Z };
    };
    t.anchorSpan = {
      lo: U(t.anchorSpan.lo),
      hi: U(t.anchorSpan.hi),
      kind: t.anchorSpan.kind,
    };
  }
}
function Ov(t, s, c, f) {
  if (!t.anchor) return;
  let m = (t.virtualAnchorRow ?? t.anchor.row) + s,
    y = m < c || m > f,
    b = t.virtualAnchorCol ?? t.anchor.col;
  if (
    ((t.anchor = { col: y ? t.anchor.col : b, row: oa(m, c, f) }),
    (t.virtualAnchorRow = y ? m : void 0),
    (t.virtualAnchorCol = y ? b : void 0),
    t.anchorSpan)
  ) {
    let S = (E) => ({ col: E.col, row: oa(E.row + s, c, f) });
    t.anchorSpan = {
      lo: S(t.anchorSpan.lo),
      hi: S(t.anchorSpan.hi),
      kind: t.anchorSpan.kind,
    };
  }
}
function pi(t) {
  return t.anchor !== null && t.focus !== null;
}
function Kye(t) {
  if (
    !t.anchor ||
    !t.focus ||
    t.virtualAnchorRow === void 0 ||
    t.virtualFocusRow === void 0
  )
    return !1;
  return (
    (t.virtualAnchorRow < t.anchor.row && t.virtualFocusRow < t.focus.row) ||
    (t.virtualAnchorRow > t.anchor.row && t.virtualFocusRow > t.focus.row)
  );
}
function C9e(t) {
  if (!t.anchor || !t.focus) return null;
  return Cd(t.anchor, t.focus) <= 0
    ? { start: t.anchor, end: t.focus }
    : { start: t.focus, end: t.anchor };
}
function gu(t, s) {
  if (!(t > 0)) return !1;
  let c = ja(t);
  return c >= s.lo && c <= s.hi;
}
function wv(t, s, c, f, m, y) {
  let b = t.noSelect,
    S = s * t.width,
    E = gu(t.softWrap[s], y) ? t.softWrap[s] : 0,
    C =
      (s + 1 < t.height && gu(t.softWrap[s + 1], y) ? t.softWrap[s + 1] : 0) >>>
      16,
    D = C > 0 ? Math.min(f, C - 1) : f,
    N = E !== 0 ? ja(E) : 0,
    T = E !== 0 ? Math.max(c, N) : c,
    L = m && E !== 0 && (E & Ao) !== 0 && c <= N && f >= N ? " " : "";
  for (let O = T; O <= D; O++) {
    if (b[S + O] === 1) continue;
    let z = dn(t, O, s);
    if (!z) continue;
    if (z.width === 2 || z.width === 3) continue;
    L += z.char;
  }
  return C > 0 ? L : L.replace(/\s+$/, "");
}
function xd(t, s, c) {
  if (c && t.length > 0) t[t.length - 1] += s;
  else t.push(s);
}
function Hv(t, s) {
  let c = C9e(t);
  if (!c) return "";
  let { start: f, end: m } = c,
    y = s.softWrap,
    b = [];
  for (let S = 0; S < t.scrolledOffAbove.length; S++)
    xd(b, t.scrolledOffAbove[S], t.scrolledOffAboveSW[S]);
  if (!Kye(t)) {
    let S = Oo(t, s.width);
    for (let E = f.row; E <= m.row; E++) {
      let x = E === f.row ? Math.max(f.col, S.lo) : S.lo,
        C = E === m.row ? Math.min(m.col, S.hi) : S.hi;
      xd(b, wv(s, E, x, C, b.length > 0, S), gu(y[E], S));
    }
  }
  for (let S = 0; S < t.scrolledOffBelow.length; S++)
    xd(b, t.scrolledOffBelow[S], t.scrolledOffBelowSW[S]);
  return b.join(`
`);
}
function Rd(t, s, c, f, m) {
  let y = C9e(t);
  if (!y || c > f || Kye(t)) return;
  let { start: b, end: S } = y,
    E = Math.max(c, b.row),
    x = Math.min(f, S.row);
  if (E > x) return;
  let { width: C, softWrap: D } = s,
    N = [],
    T = [],
    L = Oo(t, C);
  for (let O = E; O <= x; O++) {
    let z = O === b.row ? Math.max(b.col, L.lo) : L.lo,
      W = O === S.row ? Math.min(S.col, L.hi) : L.hi,
      Y = O > b.row || t.scrolledOffAbove.length > 0;
    (N.push(wv(s, O, z, W, Y, L)), T.push(gu(D[O], L)));
  }
  if (m === "above") {
    if (
      (t.scrolledOffAbove.push(...N),
      t.scrolledOffAboveSW.push(...T),
      t.anchor && t.anchor.row === b.row && E === b.row)
    ) {
      if (
        ((t.virtualAnchorCol ??= t.anchor.col),
        (t.anchor = { col: L.lo, row: t.anchor.row }),
        t.anchorSpan)
      )
        t.anchorSpan = {
          kind: t.anchorSpan.kind,
          lo: { col: L.lo, row: t.anchorSpan.lo.row },
          hi: { col: L.hi, row: t.anchorSpan.hi.row },
        };
    }
  } else if (
    (t.scrolledOffBelow.unshift(...N),
    t.scrolledOffBelowSW.unshift(...T),
    t.anchor && t.anchor.row === S.row && x === S.row)
  ) {
    if (
      ((t.virtualAnchorCol ??= t.anchor.col),
      (t.anchor = { col: L.hi, row: t.anchor.row }),
      t.anchorSpan)
    )
      t.anchorSpan = {
        kind: t.anchorSpan.kind,
        lo: { col: L.lo, row: t.anchorSpan.lo.row },
        hi: { col: L.hi, row: t.anchorSpan.hi.row },
      };
  }
}
function Bv(t, s, c) {
  let f = C9e(s);
  if (!f || Kye(s)) return;
  let { start: m, end: y } = f,
    { width: b, noSelect: S } = t,
    E = Oo(s, b);
  for (let x = m.row; x <= y.row && x < t.height; x++) {
    let C = x === m.row ? Math.max(m.col, E.lo) : E.lo,
      D = x === y.row ? Math.min(y.col, b - 1, E.hi) : E.hi,
      N = x * b;
    for (let T = C; T <= D; T++) {
      let L = N + T;
      if (S[L] === 1) continue;
      let O = f4(t, L);
      _o(t, T, x, c.withSelectionBg(O.styleId));
    }
  }
}
F();
var Lv = Qt({
  exit() {},
  focusManager: null,
  rootNode: null,
  dispatchPasteEvent() {},
  subscribeLayout: () => () => {},
});
Lv.displayName = "InternalAppContext";
var Q0 = Lv;
F();
var EE = Qt(() => {}),
  ZOt = EE;
var xE = (t, s = 2) => t.replace(/^\t+/gm, (c) => " ".repeat(c.length * s)),
  zv = xE;
var CE = (t, s) => {
    let c = [],
      f = t - s,
      m = t + s;
    for (let y = f; y <= m; y++) c.push(y);
    return c;
  },
  ME = (t, s, c = {}) => {
    var f;
    if (typeof t !== "string") throw TypeError("Source code is missing.");
    if (!s || s < 1) throw TypeError("Line number must start from `1`.");
    let m = zv(t).split(/\r?\n/);
    if (s > m.length) return;
    return CE(s, (f = c.around) !== null && f !== void 0 ? f : 3)
      .filter((y) => m[y - 1] !== void 0)
      .map((y) => ({ line: y, value: m[y - 1] }));
  },
  Td = ME;
F();
var Xa = pe(kv(), 1);
import { readFileSync as jv } from "fs";
function BE(Gv) {
  let { value: pM } = Gv;
  return pM.length > Wv;
}
var xu = (t) => t?.replace(`file://${process.cwd()}/`, ""),
  Wv = 200;
function Vv(t) {
  return (
    t.includes("$bunfs") ||
    t.includes("~BUN") ||
    t.includes("/snapshot/") ||
    t.startsWith("node:")
  );
}
function Cu(Gv) {
  let qa = _(22),
    { error: ei } = Gv,
    OE;
  if (qa[0] === p)
    ((OE = new Xa.default({
      cwd: process.cwd(),
      internals: Xa.default.nodeInternals(),
    })),
      (qa[0] = OE));
  else OE = qa[0];
  let wE = OE,
    Ad,
    _d,
    Dd,
    bu,
    Od,
    wd;
  if (qa[1] !== ei.message || qa[2] !== ei.stack) {
    let HE = ei.stack
      ? ei.stack
          .split(
            `
`,
          )
          .slice(1)
      : void 0;
    let yi = HE ? wE.parseLine(HE[0]) : void 0;
    let Su = xu(yi?.file);
    let Ho;
    let Hd = 0;
    if (Su && yi?.line && !Vv(Su)) {
      try {
        let dM = jv(Su, "utf8");
        if (((Ho = Td(dM, yi.line)), Ho?.some(BE))) Ho = void 0;
        if (Ho) {
          for (const { line: hM } of Ho) Hd = Math.max(Hd, String(hM).length);
        }
      } catch {}
    }
    Ad = ga;
    _d = "column";
    Dd = 1;
    let Bo;
    if (qa[9] === p)
      ((Bo = r(sa, {
        backgroundColor: "ansi:red",
        color: "ansi:white",
        children: [" ", "ERROR", " "],
      })),
        (qa[9] = Bo));
    else Bo = qa[9];
    if (qa[10] !== ei.message)
      ((bu = r(ga, { children: [Bo, r(sa, { children: [" ", ei.message] })] })),
        (qa[10] = ei.message),
        (qa[11] = bu));
    else bu = qa[11];
    Od =
      yi &&
      Su &&
      e(ga, {
        marginTop: 1,
        children: r(sa, {
          dim: !0,
          children: [Su, ":", yi.line, ":", yi.column],
        }),
      });
    wd =
      yi &&
      Ho &&
      e(ga, {
        marginTop: 1,
        flexDirection: "column",
        children: Ho.map((Bd) => {
          let { line: _r, value: mM } = Bd;
          return r(
            ga,
            {
              children: [
                e(ga, {
                  width: Hd + 1,
                  children: r(sa, {
                    dim: _r !== yi.line,
                    backgroundColor: _r === yi.line ? "ansi:red" : void 0,
                    color: _r === yi.line ? "ansi:white" : void 0,
                    children: [String(_r).padStart(Hd, " "), ":"],
                  }),
                }),
                e(
                  sa,
                  {
                    backgroundColor: _r === yi.line ? "ansi:red" : void 0,
                    color: _r === yi.line ? "ansi:white" : void 0,
                    children: " " + mM,
                  },
                  _r,
                ),
              ],
            },
            _r,
          );
        }),
      });
    ((qa[1] = ei.message),
      (qa[2] = ei.stack),
      (qa[3] = Ad),
      (qa[4] = _d),
      (qa[5] = Dd),
      (qa[6] = bu),
      (qa[7] = Od),
      (qa[8] = wd));
  } else
    ((Ad = qa[3]),
      (_d = qa[4]),
      (Dd = qa[5]),
      (bu = qa[6]),
      (Od = qa[7]),
      (wd = qa[8]));
  let Bo;
  if (qa[12] !== ei.stack)
    ((Bo =
      ei.stack &&
      e(ga, {
        marginTop: 1,
        flexDirection: "column",
        children: ei.stack
          .split(
            `
`,
          )
          .slice(1)
          .map((Ld) => {
            let Eu = wE.parseLine(Ld);
            if (!Eu) {
              return r(
                ga,
                {
                  children: [
                    e(sa, { dim: !0, children: "- " }),
                    e(sa, { bold: !0, children: Ld }),
                  ],
                },
                Ld,
              );
            }
            return r(
              ga,
              {
                children: [
                  e(sa, { dim: !0, children: "- " }),
                  e(sa, { bold: !0, children: Eu.function }),
                  r(sa, {
                    dim: !0,
                    children: [
                      " ",
                      "(",
                      xu(Eu.file) ?? "",
                      ":",
                      Eu.line,
                      ":",
                      Eu.column,
                      ")",
                    ],
                  }),
                ],
              },
              Ld,
            );
          }),
      })),
      (qa[12] = ei.stack),
      (qa[13] = Bo));
  else Bo = qa[13];
  let Bd;
  if (
    qa[14] !== Ad ||
    qa[15] !== _d ||
    qa[16] !== Dd ||
    qa[17] !== bu ||
    qa[18] !== Od ||
    qa[19] !== wd ||
    qa[20] !== Bo
  )
    ((Bd = r(Ad, {
      flexDirection: _d,
      padding: Dd,
      children: [bu, Od, wd, Bo],
    })),
      (qa[14] = Ad),
      (qa[15] = _d),
      (qa[16] = Dd),
      (qa[17] = bu),
      (qa[18] = Od),
      (qa[19] = wd),
      (qa[20] = Bo),
      (qa[21] = Bd));
  else Bd = qa[21];
  return Bd;
}
var LE = () => {};
function eDt() {
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return !1;
  return !0;
}
async function qv(t) {
  let [s] = await Promise.all([t.send(hBn()), t.flush()]);
  if (s) {
    let y = s.name;
    if (a.TMUX && y.startsWith("tmux ")) {
      let { stdout: b } = await Fe(
          "tmux",
          ["display-message", "-p", "#{client_termtype}"],
          { timeout: 1000, useCwd: !1 },
        ),
        S = b.trim();
      if (S) y = S;
    }
    (YUn(y), n(`XTVERSION: terminal identified as "${y}"`));
  } else n("XTVERSION: no reply (terminal ignored query)");
  let c = !s || a.TERM_PROGRAM === "Apple_Terminal",
    [f] = await Promise.all([
      c ? Promise.resolve(void 0) : t.send(fBn(zf.SYNCHRONIZED_UPDATE)),
      c ? Promise.resolve() : t.flush(),
    ]),
    m = f?.status === 1 || f?.status === 2;
  (tBn(m),
    n(
      `DECRQM(2026): ${c ? `skipped (${s ? "Apple_Terminal" : "no XTVERSION reply"})` : f ? `status=${f.status}` : "no reply"} \u2192 sync ${m ? "supported" : "unsupported"}`,
    ),
    n(
      `DECSTBM: ${uDt ? "enabled" : "gated"} (TMUX=${a.TMUX ? "set" : "unset"} ZELLIJ=${process.env.ZELLIJ != null ? "set" : "unset"} TERM_PROGRAM=${a.TERM_PROGRAM ?? "unset"} TERM=${a.TERM ?? "unset"})`,
    ));
}
var zE = 5000,
  Xv = 500,
  Qv = 1,
  Zv = 400;
class Ru extends Cln {
  static displayName = "InternalApp";
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  state = { error: void 0 };
  rawModeEnabledCount = 0;
  internal_eventEmitter = new H9e();
  keyReader = Cy(performance.now());
  incompleteEscapeTimer = null;
  querier =
    this.props.stdout.isTTY && this.props.stdin.isTTY
      ? new Btn(this.props.stdout)
      : null;
  lastClickTime = 0;
  lastClickCol = -1;
  lastClickRow = -1;
  clickCount = 0;
  pressIsWindowActivation = !1;
  windowActivationClickArmed = !0;
  lastActivationInputTime = Number.NEGATIVE_INFINITY;
  pendingHyperlinkTimer = null;
  pendingHyperlinkOpensInPanel = !1;
  lastHoverCol = -1;
  lastHoverRow = -1;
  lastStdinTime = performance.now();
  arrowWindow = [];
  arrowWindowDir = "";
  jediTermInput = W0e();
  emitJediTermScrollBug = () =>
    this.internal_eventEmitter.emit("jediterm-scroll-bug");
  isRawModeSupported() {
    return this.props.stdin.isTTY;
  }
  render() {
    return e(Kx.Provider, {
      value: {
        columns: this.props.terminalColumns,
        rows: this.props.terminalRows,
      },
      children: e(Q0.Provider, {
        value: {
          exit: this.handleExit,
          focusManager: this.props.focusManager,
          rootNode: this.props.rootNode,
          dispatchPasteEvent: this.props.dispatchPasteEvent,
          subscribeLayout: this.props.subscribeLayout,
        },
        children: e(m4.Provider, {
          value: {
            stdin: this.props.stdin,
            setRawMode: this.handleSetRawMode,
            isRawModeSupported: this.isRawModeSupported(),
            internal_eventEmitter: this.internal_eventEmitter,
            internal_querier: this.querier,
            internal_jediTermInput: this.jediTermInput,
          },
          children: e(xtn, {
            children: e(Htn, {
              children: e(ZOt.Provider, {
                value: this.props.onCursorDeclaration ?? LE,
                children: this.state.error
                  ? e(Cu, { error: this.state.error })
                  : this.props.children,
              }),
            }),
          }),
        }),
      }),
    });
  }
  componentDidMount() {
    let t = this.props.rootNode,
      s = t._pendingRawModeDelta ?? 0;
    t._pendingRawModeDelta = 0;
    for (let c = 0; c < s; c++) this.handleSetRawMode(!0);
    for (let c = 0; c > s; c--) this.handleSetRawMode(!1);
    t.setRawMode = this.handleSetRawMode;
  }
  componentWillUnmount() {
    if (
      ((this.appUnmounted = !0),
      (this.props.rootNode.setRawMode = void 0),
      this.props.stdout.isTTY)
    )
      this.props.stdout.write(Cv);
    if (this.incompleteEscapeTimer)
      (clearTimeout(this.incompleteEscapeTimer),
        (this.incompleteEscapeTimer = null));
    if (this.pendingHyperlinkTimer)
      (clearTimeout(this.pendingHyperlinkTimer),
        (this.pendingHyperlinkTimer = null),
        (this.pendingHyperlinkOpensInPanel = !1));
    if (this.isRawModeSupported())
      while (this.rawModeEnabledCount > 0) this.handleSetRawMode(!1);
  }
  componentDidCatch(t, s) {
    (usr(t, s), this.handleExit(t));
  }
  handleSetRawMode = (t) => {
    let { stdin: s } = this.props;
    if (!this.isRawModeSupported())
      if (s === process.stdin)
        throw Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
      else
        throw Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
    if ((s.setEncoding("utf8"), t)) {
      if (this.rawModeEnabledCount === 0) {
        if (
          (CF(),
          this.props.onRawModeEnter?.(),
          s.ref(),
          Jw(s, !0),
          s.addListener("readable", this.handleReadable),
          P() === "windows")
        )
          (s.resume(), s.pause());
        let { modes: c } = this.props;
        if (
          (this.props.stdout.write(
            c.set("bracketedPaste") +
              c.set("themeReports") +
              c.set("focusEvents"),
          ),
          P() === "windows")
        )
          this.props.stdout.write(qat);
        if (
          (this.props.stdout.write(c.set("extendedKeys")),
          a.CLAUDE_BG_BACKEND !== "daemon")
        )
          setImmediate(() => {
            if (this.querier && !this.hasReleasedTerminal) qv(this.querier);
          });
      }
      this.rawModeEnabledCount++;
      return;
    }
    if (this.rawModeEnabledCount <= 0) return;
    if (--this.rawModeEnabledCount === 0) {
      let { modes: c } = this.props;
      if (
        (this.props.stdout.write(
          c.reset("extendedKeys") +
            c.reset("focusEvents") +
            c.reset("themeReports") +
            c.reset("bracketedPaste"),
        ),
        !ws().get(this.props.stdout)?.isHandoffRawMode)
      )
        Jw(s, !1);
      (s.removeListener("readable", this.handleReadable), s.unref());
    }
  };
  flushIncomplete = () => {
    if (((this.incompleteEscapeTimer = null), !wf(this.keyReader))) return;
    if (this.props.stdin.readableLength > 0) {
      this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, za);
      return;
    }
    let t = performance.now();
    this.applyKeysRead(My(this.keyReader, t), t);
  };
  processInput = (t, s) => {
    this.applyKeysRead(Hf(this.keyReader, t, s), s);
  };
  applyKeysRead({ keys: t, reader: s, wakeAt: c }, f) {
    if (((this.keyReader = s), this.incompleteEscapeTimer))
      (clearTimeout(this.incompleteEscapeTimer),
        (this.incompleteEscapeTimer = null));
    if (c !== null)
      this.incompleteEscapeTimer = setTimeout(
        this.flushIncomplete,
        Math.max(0, c - f),
      );
    if (t.length > 0) zi.discreteUpdates(UE, this, t, void 0, void 0);
  }
  handleReadable = () => {
    let t = performance.now();
    if (t - this.lastStdinTime > zE) this.props.onStdinResume?.();
    this.lastStdinTime = t;
    try {
      let s;
      while ((s = this.props.stdin.read()) !== null) this.processInput(s, t);
    } catch (s) {
      h(dt(ge(s), "stdin readable handler threw during input processing"));
      let { stdin: c } = this.props;
      if (
        this.rawModeEnabledCount > 0 &&
        !c.listeners("readable").includes(this.handleReadable)
      )
        (n(
          "handleReadable: re-attaching stdin readable listener after error recovery",
          { level: "warn" },
        ),
          c.addListener("readable", this.handleReadable));
    }
  };
  handleInput = (t) => {
    if (t === "\x03" && this.props.exitOnCtrlC) this.handleExit();
  };
  handleExit = (t) => {
    if (this.isRawModeSupported()) this.handleSetRawMode(!1);
    this.props.onExit(t);
  };
  attachProbeDeferred = !1;
  appUnmounted = !1;
  get hasReleasedTerminal() {
    return (
      this.appUnmounted ||
      no() ||
      ws().get(this.props.stdout)?.hasUnmounted === !0
    );
  }
  handleTerminalFocus = (t) => {
    let s = $I();
    if (!t || Date.now() - this.lastActivationInputTime >= Zv)
      this.windowActivationClickArmed = !0;
    if ((Lyn(t), t && s === "blurred"))
      ws().get(this.props.stdout)?.proactiveAtlasResetOnFocus();
    if (
      t &&
      s !== "focused" &&
      a.CLAUDE_BG_BACKEND === "daemon" &&
      this.querier &&
      !this.attachProbeDeferred
    )
      ((this.attachProbeDeferred = !0),
        aft().then(() => {
          if (
            ((this.attachProbeDeferred = !1),
            this.querier && !this.hasReleasedTerminal)
          )
            qv(this.querier);
        }));
  };
  consumeWindowActivationLatch(t) {
    if (((this.lastActivationInputTime = t), !this.windowActivationClickArmed))
      return !1;
    return ((this.windowActivationClickArmed = !1), !0);
  }
  handleSuspend = () => {
    if (!this.isRawModeSupported()) return;
    let t = this.rawModeEnabledCount;
    if (this.props.stdout.isTTY)
      this.props.stdout.write(Cv + s7 + this.props.modes.suspend());
    while (this.rawModeEnabledCount > 0) this.handleSetRawMode(!1);
    this.internal_eventEmitter.emit("suspend");
    let s = () => {
      if ((process.removeListener("SIGCONT", s), this.hasReleasedTerminal))
        return;
      for (let c = 0; c < t; c++)
        if (this.isRawModeSupported()) this.handleSetRawMode(!0);
      if (this.props.stdout.isTTY) {
        let c = this.props.isScreenReaderEnabled ?? !1;
        this.props.stdout.write(
          this.props.modes.resume() +
            (a.CLAUDE_CODE_ACCESSIBILITY || c ? "" : vv),
        );
      }
      this.internal_eventEmitter.emit("resume");
    };
    (process.on("SIGCONT", s), QOt(), process.kill(0, "SIGTSTP"));
  };
}
function zd(t) {
  if (t.kind === "response") return !1;
  if (t.kind === "mouse") return !Ud(t.button);
  if (t.name === "mouse") return !1;
  return t.sequence !== jke && t.sequence !== xhe;
}
function UE(t, s, c, f) {
  let m = Nze(Date.now());
  if (!m && s.some(zd)) (Ez(), n5t());
  let y = ZUn(t.jediTermInput, s, performance.now(), t.emitJediTermScrollBug);
  KE(t, y);
  let b = G(y, zd) === 1;
  for (let S of y) {
    if (m && zd(S) && !(S.kind === "key" && S.name === "left")) {
      n(
        `attachQuietDrain: dropped ${S.kind} (ms_since_stamp=${Date.now() - rue()})`,
        { level: "debug" },
      );
      continue;
    }
    if (S.kind === "response") {
      t.querier?.onResponse(S.response);
      continue;
    }
    if (S.kind === "mouse") {
      if ((zSn(), S.action === "press" && !Ud(S.button) && !Pre()))
        t.handleTerminalFocus(!0);
      if (t.props.getMouseMode?.() === "scroll" && (S.button & 3) === 0)
        continue;
      FE(t, S);
      continue;
    }
    let E = S.sequence;
    if (E === jke) {
      t.handleTerminalFocus(!0);
      let x = new nu("terminalfocus");
      t.internal_eventEmitter.emit("terminalfocus", x);
      continue;
    }
    if (E === xhe) {
      if ((t.handleTerminalFocus(!1), t.props.selection.isDragging))
        (wo(t.props.selection), t.props.onSelectionChange());
      let x = new nu("terminalblur");
      t.internal_eventEmitter.emit("terminalblur", x);
      continue;
    }
    if (S.name !== "wheelup" && S.name !== "wheeldown" && S.name !== "mouse") {
      if (!Pre()) Lyn(!0);
      t.consumeWindowActivationLatch(Date.now());
    }
    if (S.name === "z" && S.ctrl && eDt()) {
      t.handleSuspend();
      continue;
    }
    if (!S.isPasted) t.handleInput(E);
    if (S.isPasted) t.props.dispatchPasteEvent(S.sequence ?? "");
    else if (
      S.name === "wheelup" ||
      S.name === "wheeldown" ||
      S.name === "mouse"
    ) {
      if (S.name !== "mouse") (zSn(), t.props.dispatchWheelEvent(S));
    } else t.props.dispatchKeyboardEvent(S, { soloKeypress: b });
  }
}
function Ud(t) {
  return (t & 32) !== 0 && (t & 3) === 3;
}
function FE(t, s) {
  let c = t.props.selection,
    f = s.col - 1,
    m = s.row - 1,
    y = s.button & 3;
  if (s.action === "press") {
    if (Ud(s.button)) {
      if (c.isDragging) (wo(c), t.props.onSelectionChange());
      if (f === t.lastHoverCol && m === t.lastHoverRow) return;
      ((t.lastHoverCol = f), (t.lastHoverRow = m), t.props.onHoverAt(f, m));
      return;
    }
    if (y !== 0) {
      if (((t.clickCount = 0), (s.button & 32) === 0))
        t.consumeWindowActivationLatch(Date.now());
      if ((s.button & 32) === 0) {
        let S = P();
        if (y === 2 && (S === "windows" || S === "wsl" || S === "linux")) {
          if (pi(c)) (Va(c), t.props.onSelectionChange());
          else if (!Zd())
            vNe("clipboard").then((E) => {
              if (E) t.props.dispatchPasteEvent(E);
            });
        } else if (y === 1 && S === "linux")
          vNe("primary").then((E) => {
            if (E) t.props.dispatchPasteEvent(E);
          });
      }
      return;
    }
    if ((s.button & 32) !== 0) {
      t.props.onSelectionDrag(f, m);
      return;
    }
    if (c.isDragging) (wo(c), t.props.onSelectionChange());
    let b = Date.now();
    if (
      ((t.pressIsWindowActivation =
        t.consumeWindowActivationLatch(b) && b - kYn() < Zv),
      t.pressIsWindowActivation)
    )
      t.clickCount = 0;
    else {
      let S =
        b - t.lastClickTime < Xv &&
        Math.abs(f - t.lastClickCol) <= Qv &&
        Math.abs(m - t.lastClickRow) <= Qv;
      ((t.clickCount = S ? t.clickCount + 1 : 1),
        (t.lastClickTime = b),
        (t.lastClickCol = f),
        (t.lastClickRow = m));
    }
    if (t.clickCount >= 2) {
      if (t.pendingHyperlinkTimer && !t.pendingHyperlinkOpensInPanel)
        (clearTimeout(t.pendingHyperlinkTimer),
          (t.pendingHyperlinkTimer = null));
      let S = t.clickCount === 2 ? 2 : 3;
      t.props.onMultiClick(f, m, S);
      return;
    }
    (t.props.onSelectionStart(f, m),
      (c.lastPressHadAlt = (s.button & 8) !== 0),
      t.props.onSelectionChange());
    return;
  }
  if (y !== 0) {
    if (!c.isDragging) return;
    (wo(c), t.props.onSelectionChange());
    return;
  }
  if ((wo(c), !pi(c) && c.anchor)) {
    let b = t.props.onClickAt(f, m, t.pressIsWindowActivation);
    if (b === "stray") ((t.clickCount = 0), (t.lastClickTime = 0));
    if (b === "unhandled" && !t.pressIsWindowActivation) {
      let S = t.props.getHyperlinkAt(f, m);
      if (
        S &&
        a.TERM_PROGRAM !== "vscode" &&
        !Zd() &&
        ((s.button & 24) !== 0 ||
          CT.macCmdClickArrivesWithoutSgrModifierBit() ||
          JUn())
      ) {
        if (t.pendingHyperlinkTimer) clearTimeout(t.pendingHyperlinkTimer);
        ((t.pendingHyperlinkOpensInPanel = !1),
          (t.pendingHyperlinkTimer = setTimeout(
            (E, x) => {
              ((E.pendingHyperlinkTimer = null),
                (E.pendingHyperlinkOpensInPanel = !1),
                E.props.onOpenHyperlink(x));
            },
            Xv,
            t,
            S,
          )));
      }
    }
  }
  t.props.onSelectionChange();
}
var PE = 100,
  YE = 8;
function KE(t, s) {
  let c = s[0];
  if (
    c?.kind !== "key" ||
    (c.name !== "up" && c.name !== "down") ||
    c.ctrl ||
    c.meta ||
    c.shift ||
    c.isPasted ||
    !s.every(
      (b) =>
        b.kind === "key" && b.name === c.name && !b.ctrl && !b.meta && !b.shift,
    )
  ) {
    t.arrowWindow.length = 0;
    return;
  }
  if (t.arrowWindowDir !== c.name)
    ((t.arrowWindow.length = 0), (t.arrowWindowDir = c.name));
  let f = performance.now(),
    m = t.arrowWindow;
  m.push({ t: f, n: s.length });
  while (m.length > 0 && f - m[0].t > PE) m.shift();
  let y = 0;
  for (let b of m) y += b.n;
  if (y >= YE)
    (t.internal_eventEmitter.emit("arrow-burst", {
      direction: c.name,
      count: y,
    }),
      t.props.onStdinResume?.(),
      (m.length = 0));
}
class R9e extends r7 {
  key;
  name;
  sequence;
  ctrl;
  shift;
  meta;
  superKey;
  fn;
  soloKeypress;
  constructor(t, s) {
    super("keydown", { bubbles: !0, cancelable: !0 });
    ((this.key = kE(t)),
      (this.name = t.name ?? ""),
      (this.sequence = t.sequence ?? ""),
      (this.ctrl = t.ctrl),
      (this.shift = t.shift),
      (this.meta = t.meta || t.option),
      (this.superKey = t.super),
      (this.fn = t.fn),
      (this.soloKeypress = s?.soloKeypress));
  }
}
function kE(t) {
  let s = t.sequence ?? "",
    c = t.name ?? "";
  if (c === "space") return " ";
  if (t.ctrl) return c;
  if (s.length === 1) {
    let f = s.charCodeAt(0);
    if (f >= 32 && f !== 127) return s;
  }
  if (c) {
    if (t.shift && c.length === 1) {
      let f = c.toUpperCase();
      if (f !== c && f.length === 1) return f;
    }
    return c;
  }
  if (s.charCodeAt(0) === 27) return "";
  if (/^(\[<\d[\d;]*[Mm]?)+$/.test(s)) return "";
  return s;
}
var GE = /[\u0090\u0098\u009b\u009d-\u009f]/,
  jE = /\u001b[\u0090\u0098\u009b\u009d-\u009f]/g,
  WE = /[\u0090\u0098\u009b\u009d-\u009f]/g,
  VE =
    /([\u0090\u0098\u009d-\u009f][^\u0007\u001b\u0090\u0098\u009d-\u009f\r\n]*)\u0007/g,
  qE = /(\u001b[PX^_][^\u0007\u001b]*)\u0007/g,
  XE = /(\r\n|\r|\n)/;
class iee extends r7 {
  text;
  rawEmpty;
  rawEndedWithFocusTail;
  constructor(t) {
    super("paste", { bubbles: !0, cancelable: !0 });
    if (t instanceof iee) {
      ((this.text = t.text),
        (this.rawEmpty = t.rawEmpty),
        (this.rawEndedWithFocusTail = t.rawEndedWithFocusTail));
      return;
    }
    ((this.rawEmpty = t.length === 0 || t === "[I" || t === "[O"),
      (this.rawEndedWithFocusTail = t.endsWith("[I") || t.endsWith("[O")));
    let s = GE.test(t)
      ? t.replace(VE, "$1").replace(jE, "").replace(WE, "")
      : t;
    if (s.includes("\x1B")) {
      let f = s
        .replace(qE, "$1\x1B\\")
        .split(XE)
        .map((m, y) => (y % 2 === 1 ? m : pt(m)))
        .join("");
      s = Yg(f.replaceAll("\x07", ""));
    }
    this.text = s;
  }
}
class Fd extends r7 {
  deltaY;
  deltaX;
  ctrl;
  shift;
  meta;
  constructor(t, s) {
    super("wheel", { bubbles: !0, cancelable: !0 });
    ((this.deltaY = t),
      (this.deltaX = s.deltaX ?? 0),
      (this.ctrl = s.ctrl ?? !1),
      (this.shift = s.shift ?? !1),
      (this.meta = s.meta ?? !1));
  }
}
function Dr(t, s, c, f, m) {
  return {
    screen: o7(0, 0, c, f, m),
    viewport: { width: s, height: t },
    cursor: { x: 0, y: 0, visible: !0 },
  };
}
function Qa(t) {
  return t.screen.height >= t.viewport.height;
}
var kl = 256;
function Lo(t, s) {
  if (!Ol().claim(`ink_tree_depth_cap:${t}`)) return;
  h(
    new R(
      `${t}: ink tree depth exceeded MAX_TREE_DEPTH (${kl}) at <${s}>; skipping deeper subtree instead of overflowing the call stack`,
      "ink tree walk stopped at MAX_TREE_DEPTH",
    ),
  );
}
function zo(t, s, c, f = 0) {
  if (f >= kl) return (Lo("hitTest", t.nodeName), null);
  let m = t.cachedLayout;
  if (!m) return null;
  let y = s >= m.x && s < m.x + m.width && c >= m.y && c < m.y + m.height;
  if (!y && !t.hasAbsoluteDescendant) return null;
  let b = null,
    S = !1;
  for (let E = t.childNodes.length - 1; E >= 0; E--) {
    let x = t.childNodes[E];
    if (x.nodeName === "#text") continue;
    let C = x.cachedLayout;
    if (!C) continue;
    let D = s >= C.x && s < C.x + C.width && c >= C.y && c < C.y + C.height;
    if (!D && !x.hasAbsoluteDescendant) continue;
    if (b !== null && D) continue;
    let N = zo(x, s, c, f + 1);
    if (!N) continue;
    let T = !D;
    if (b === null || (T && !S)) ((b = N), (S = T));
    if (S) break;
  }
  return b ?? (y ? t : null);
}
function Pd(t, s, c) {
  let f = zo(t, s, c) ?? void 0,
    m;
  while (f) {
    let y = f.cachedLayout;
    if (y) {
      let b = Math.floor(y.x),
        S = Math.floor(y.x + y.width);
      if (!m) {
        if (f.style.selectionScope) {
          let E = f.yogaNode,
            x = E ? E.getComputedBorder(0) + E.getComputedPadding(0) : 0,
            C = E ? E.getComputedBorder(2) + E.getComputedPadding(2) : 0;
          m = { x1: b + x, x2: S - C, node: f };
        }
      } else {
        let E = f.style.overflowX ?? f.style.overflow;
        if (E === "hidden" || E === "scroll")
          ((m.x1 = Math.max(m.x1, b)), (m.x2 = Math.min(m.x2, S)));
      }
    }
    f = f.parentNode;
  }
  return m && m.x2 > m.x1 ? m : void 0;
}
function Iv(t, s) {
  let { col: c, row: f } = s,
    m = zo(t, c, f) ?? void 0;
  if (!m) return !1;
  if (t.focusManager && !s.isWindowActivation) {
    let b = m;
    while (b) {
      if (typeof b.attributes.tabIndex === "number") {
        t.focusManager.handleClickFocus(b);
        break;
      }
      b = b.parentNode;
    }
  }
  let y = !1;
  while (m) {
    let b = m._eventHandlers?.onClick;
    if (b) {
      let S = m.cachedLayout;
      if (S) ((s.localCol = c - S.x), (s.localRow = f - S.y));
      if (((s.defaultAllowed = !1), b(s), s.didStopImmediatePropagation()))
        return !s.defaultAllowed;
      if (!s.defaultAllowed) y = !0;
    }
    m = m.parentNode;
  }
  return y;
}
function Jv(t, s, c, f, m = !1) {
  let y = new Set(),
    b = zo(t, s, c) ?? void 0;
  while (b) {
    let S = b._eventHandlers;
    if (
      (S?.onMouseEnter || S?.onMouseLeave) &&
      !(m && b.attributes.hoverIgnoresBlankCells)
    )
      y.add(b);
    b = b.parentNode;
  }
  for (let S of f)
    if (!y.has(S)) {
      if ((f.delete(S), S.parentNode)) S._eventHandlers?.onMouseLeave?.();
    }
  for (let S of y)
    if (!f.has(S)) (f.add(S), S._eventHandlers?.onMouseEnter?.());
}
var QE = [],
  ZE = [];
function $v(t) {
  if (!t) return 0;
  let s = 0,
    c = QE;
  ((c.length = 0), c.push(t));
  while (c.length > 0) {
    let f = c.pop();
    if ((s++, f.alternate)) s++;
    if (f.sibling) c.push(f.sibling);
    if (f.child) c.push(f.child);
  }
  return ((c.length = 0), s);
}
function eg(t) {
  if (!t) return 0;
  let s = 0,
    c = ZE;
  ((c.length = 0), c.push(t));
  while (c.length > 0) {
    let f = c.pop();
    if ((s++, "childNodes" in f)) {
      let m = f.childNodes;
      for (let y = 0; y < m.length; y++) c.push(m[y]);
    }
  }
  return ((c.length = 0), s);
}
var Uo = { type: "carriageReturn" },
  Nu = {
    type: "stdout",
    content: `
`,
  },
  IE = { type: "stdout", content: q7t() };
class Yd {
  options;
  state;
  constructor(t) {
    this.options = t;
    this.state = { previousOutput: "" };
  }
  renderPreviousOutput_DEPRECATED(t) {
    if (!this.options.isTTY) return [Nu];
    return this.getRenderOpsForDone(t);
  }
  reset() {
    ((this.state.previousOutput = ""), (this.forceReset = !1));
  }
  forceReset = !1;
  forceFullReset() {
    this.forceReset = !0;
  }
  renderFullFrame(t) {
    let { screen: s } = t,
      c = [],
      f = [],
      m = void 0;
    for (let y = 0; y < s.height; y++) {
      let b = "";
      for (let E = 0; E < s.width; E++) {
        let x = dn(s, E, y);
        if (x && x.width !== 2) {
          if (x.hyperlink !== m) {
            if (m !== void 0) b += xAe;
            if (x.hyperlink !== void 0) b += kAe(x.hyperlink);
            m = x.hyperlink;
          }
          let C = this.options.stylePool.get(x.styleId),
            D = pNe(f, C);
          if (D.length > 0) ((b += NI(D)), (f = C));
          b += x.char;
        }
      }
      if (m !== void 0) ((b += xAe), (m = void 0));
      let S = pNe(f, []);
      if (S.length > 0) ((b += NI(S)), (f = []));
      c.push(b.trimEnd());
    }
    if (c.length === 0) return [];
    return [
      {
        type: "stdout",
        content: c.join(`
`),
      },
    ];
  }
  getRenderOpsForDone(t) {
    if (((this.state.previousOutput = ""), !t.cursor.visible))
      return [{ type: "cursorShow" }];
    return [];
  }
  render(t, s, c = !1, f = !0) {
    if (!this.options.isTTY) {
      if (lv(t.screen, s.screen)) return [];
      return this.renderFullFrame(s);
    }
    let m = performance.now(),
      y = this.options.stylePool,
      S = t.cursor.y >= t.screen.height && Qa(t),
      E = Math.max(
        0,
        t.screen.height - Math.min(t.viewport.height, s.viewport.height),
      ),
      x = Qa(t) ? 1 : 0,
      C = E + x;
    if (this.forceReset)
      return ((this.forceReset = !1), Za(s, "clear", y, c, C));
    if (
      s.viewport.height < t.viewport.height ||
      (s.viewport.height > t.viewport.height && S) ||
      (t.viewport.width !== 0 && s.viewport.width !== t.viewport.width)
    )
      return Za(s, "resize", y, c, C);
    let D = [];
    if (c && s.scrollHint && f) {
      let { top: fe, bottom: ue, delta: se } = s.scrollHint;
      if (fe >= 0 && ue < t.screen.height && ue < s.screen.height)
        (yu(t.screen, fe, ue, se),
          (D = [
            {
              type: "stdout",
              content:
                nz(fe + 1, ue + 1) + (se > 0 ? Rcr(se) : kcr(-se)) + oB + gm,
            },
          ]));
    }
    let N = s.screen.height < t.screen.height,
      T = s.screen.height <= t.viewport.height;
    if (S && T && N)
      return (
        n(
          `Full reset (shrink->below): prevHeight=${t.screen.height}, nextHeight=${s.screen.height}, viewport=${t.viewport.height}`,
        ),
        Za(s, "offscreen", y, c, C)
      );
    let L = new Kd(t.cursor, s.viewport.width),
      O = Math.max(s.screen.height, 1) - Math.max(t.screen.height, 1),
      z = O < 0,
      W = O > 0;
    if (z) {
      let fe = t.screen.height - s.screen.height;
      if (fe > t.viewport.height)
        return Za(s, "offscreen", this.options.stylePool, c, C);
      L.txn((ue) => [
        [
          { type: "clear", count: fe },
          { type: "cursorMove", x: 0, y: -1 },
        ],
        { dx: -ue.x, dy: -fe },
      ]);
    }
    let Y = S ? 1 : 0,
      X = W
        ? Math.max(0, t.screen.height - t.viewport.height + Y)
        : Math.max(t.screen.height, s.screen.height) - s.viewport.height + Y,
      U = y.none,
      k = void 0,
      Z = -1,
      J = -1,
      re = !1,
      Q = !1,
      ce = !1,
      le = -1;
    if (
      (dv(t.screen, s.screen, (fe, ue, se, ve) => {
        if (W && ue >= t.screen.height) return;
        if (ve && (ve.width === 2 || ve.width === 3)) return;
        if (se && (se.width === 2 || se.width === 3) && !ve) return;
        if (ve && Nr(s.screen, fe, ue) && !se) return;
        if (ue < X) {
          if (c || z) return ((ce = !0), (le = ue), !0);
          return;
        }
        if (ue !== Z)
          ((k = Gl(L.diff, k, void 0)),
            (Z = ue),
            (J = -1),
            (re = !1),
            (Q = !1));
        if (se && Nr(s.screen, fe, ue)) {
          if (!re) {
            if (((re = !0), ue < s.screen.height)) {
              for (let he = s.screen.width - 1; he > fe; he--)
                if (!Nr(s.screen, he, ue)) {
                  J = he;
                  break;
                }
            }
          }
          if (fe > J) {
            if (Q) return;
            ((Q = !0), Tu(L, fe, ue));
            let he = U,
              Se = k;
            ((U = y.none),
              (k = void 0),
              L.txn(() => {
                let Ee = [];
                return (
                  Ia(Ee, y, he, y.none),
                  Gl(Ee, Se, void 0),
                  Ee.push(IE),
                  [Ee, { dx: 0, dy: 0 }]
                );
              }));
            return;
          }
        }
        if ((Tu(L, fe, ue), ve)) {
          let he = ve.hyperlink;
          k = Gl(L.diff, k, he);
          let Se = y.transition(U, ve.styleId);
          if (ig(L, ve, Se)) U = ve.styleId;
        } else if (se) {
          let he = U,
            Se = k;
          ((U = y.none),
            (k = void 0),
            L.txn(() => {
              let Ee = [];
              return (
                Ia(Ee, y, he, y.none),
                Gl(Ee, Se, void 0),
                Ee.push({ type: "stdout", content: " " }),
                [Ee, { dx: 1, dy: 0 }]
              );
            }));
        }
      }),
      ce)
    )
      return Za(s, "offscreen", y, c, C, {
        triggerY: le,
        prevLine: tg(t.screen, le),
        nextLine: tg(s.screen, le),
      });
    if (((U = Ia(L.diff, y, U, y.none)), (k = Gl(L.diff, k, void 0)), W))
      ng(L, s, t.screen.height, s.screen.height, y);
    if (c);
    else if (s.cursor.y >= s.screen.height)
      L.txn((fe) => {
        let ue = s.cursor.y - fe.y;
        if (ue > 0) {
          let ve = Array(1 + ue);
          ve[0] = Uo;
          for (let he = 0; he < ue; he++) ve[1 + he] = Nu;
          return [ve, { dx: -fe.x, dy: ue }];
        }
        let se = s.cursor.y - fe.y;
        if (se !== 0 || fe.x !== s.cursor.x) {
          let ve = [Uo];
          return (
            ve.push({ type: "cursorMove", x: s.cursor.x, y: se }),
            [ve, { dx: s.cursor.x - fe.x, dy: se }]
          );
        }
        return [[], { dx: 0, dy: 0 }];
      });
    else Tu(L, s.cursor.x, s.cursor.y);
    let oe = performance.now() - m;
    if (oe > 50) {
      let fe = s.screen.damage,
        ue = fe ? `${fe.width}x${fe.height} at (${fe.x},${fe.y})` : "none";
      n(
        `Slow render: ${oe.toFixed(1)}ms, screen: ${s.screen.height}x${s.screen.width}, damage: ${ue}, changes: ${L.diff.length}`,
      );
    }
    return D.length > 0 ? [...D, ...L.diff] : L.diff;
  }
}
function Gl(t, s, c) {
  if (s !== c) return (t.push({ type: "hyperlink", uri: c ?? "" }), c);
  return s;
}
function Ia(t, s, c, f) {
  let m = s.transition(c, f);
  if (m.length > 0) t.push({ type: "styleStr", str: m });
  return f;
}
function tg(t, s) {
  let c = "";
  for (let f = 0; f < t.width; f++) c += av(t, f, s) ?? " ";
  return c.trimEnd();
}
function Za(t, s, c, f, m, y) {
  let b = f
      ? 0
      : Math.min(m, Math.max(0, t.screen.height - t.viewport.height + 1)),
    S = new Kd({ x: 0, y: b }, t.viewport.width);
  return (
    ng(S, t, b, t.screen.height, c),
    [
      {
        type: "clearTerminal",
        reason: s,
        altScreen: f,
        viewportRows: t.viewport.height,
        debug: y,
      },
      ...S.diff,
    ]
  );
}
function ng(t, s, c, f, m) {
  let y = m.none,
    b = void 0,
    S = -1,
    { width: E, cells: x, charPool: C, hyperlinkPool: D } = s.screen,
    N = c * E;
  for (let T = c; T < f; T += 1) {
    if (t.cursor.y < T) {
      let L = T - t.cursor.y;
      t.txn((O) => {
        let z = Array(1 + L);
        z[0] = Uo;
        for (let W = 0; W < L; W++) z[1 + W] = Nu;
        return [z, { dx: -O.x, dy: L }];
      });
    }
    S = -1;
    for (let L = 0; L < E; L += 1, N += 1) {
      let O = ov(x, C, D, N, S);
      if (!O) continue;
      Tu(t, L, T);
      let z = O.hyperlink;
      b = Gl(t.diff, b, z);
      let W = m.transition(y, O.styleId);
      if (ig(t, O, W)) ((y = O.styleId), (S = O.styleId));
    }
    ((y = Ia(t.diff, m, y, m.none)),
      (b = Gl(t.diff, b, void 0)),
      t.txn((L) => [[Uo, Nu], { dx: -L.x, dy: 1 }]));
  }
  return (Ia(t.diff, m, y, m.none), Gl(t.diff, b, void 0), t);
}
function ig(t, s, c) {
  let f = s.width === 1 ? Math.max(2, te(s.char)) : 1,
    m = t.cursor.x,
    y = t.viewportWidth;
  if (f >= 2 && m < y) {
    let E = vd(s.char) ? y : y + 1;
    if (m + f >= E) return !1;
  }
  let b = t.diff;
  if (c.length > 0) b.push({ type: "styleStr", str: c });
  let S = f >= 3 || (f === 2 && JE(s.char));
  if (S && m + 1 < y)
    (b.push({ type: "cursorTo", col: m + 2 }),
      b.push({ type: "stdout", content: os(" ", f - 1) }),
      b.push({ type: "cursorTo", col: m + 1 }));
  if ((b.push({ type: "stdout", content: s.char }), S))
    b.push({ type: "cursorTo", col: m + f + 1 });
  if (m >= y) ((t.cursor.x = f), t.cursor.y++);
  else t.cursor.x = m + f;
  return !0;
}
function Tu(t, s, c) {
  t.txn((f) => {
    let m = s - f.x,
      y = c - f.y;
    if (f.x >= t.viewportWidth)
      return [[Uo, { type: "cursorMove", x: s, y }], { dx: m, dy: y }];
    if (y !== 0)
      return [[Uo, { type: "cursorMove", x: s, y }], { dx: m, dy: y }];
    if (m !== 0) return [[{ type: "cursorTo", col: s + 1 }], { dx: m, dy: y }];
    return [[], { dx: 0, dy: 0 }];
  });
}
function JE(t) {
  let s = t.codePointAt(0);
  if (s === void 0) return !1;
  if ((s >= 129648 && s <= 129791) || (s >= 129792 && s <= 130047)) return !0;
  if (t.length >= 2) {
    for (let c = 0; c < t.length; c++) if (t.charCodeAt(c) === 65039) return !0;
  }
  return !1;
}
class Kd {
  viewportWidth;
  cursor;
  diff = [];
  constructor(t, s) {
    this.viewportWidth = s;
    this.cursor = { ...t };
  }
  txn(t) {
    let [s, c] = t(this.cursor);
    for (let f of s) this.diff.push(f);
    ((this.cursor.x += c.dx), (this.cursor.y += c.dy));
  }
}
function kd(t) {
  let s = [],
    c = 0;
  for (let f of t) {
    let m = f.type;
    if (m === "stdout") {
      if (f.content === "") continue;
    } else if (m === "cursorMove") {
      if (f.x === 0 && f.y === 0) continue;
    } else if (m === "clear") {
      if (f.count === 0) continue;
    } else if (m === "styleStr") {
      if (f.str === "") continue;
    }
    if (c > 0) {
      let y = c - 1,
        b = s[y],
        S = b.type;
      if (m === "cursorMove" && S === "cursorMove") {
        let E = b.x + f.x,
          x = b.y + f.y;
        if (E === 0 && x === 0) (s.pop(), c--);
        else s[y] = { type: "cursorMove", x: E, y: x };
        continue;
      }
      if (m === "cursorTo" && S === "cursorTo") {
        s[y] = f;
        continue;
      }
      if (m === "styleStr" && S === "styleStr") {
        s[y] = { type: "styleStr", str: b.str + f.str };
        continue;
      }
      if (m === "hyperlink" && S === "hyperlink" && f.uri === b.uri) continue;
      if (
        (m === "cursorShow" || m === "cursorHide") &&
        (S === "cursorShow" || S === "cursorHide")
      ) {
        s[y] = f;
        continue;
      }
    }
    (s.push(f), c++);
  }
  return s;
}
function $E() {
  var t = (function (s) {
    var c = {
        R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
        EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
        ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
        ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
        AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
        CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
        B: "a,3,f+2,2v,690",
        S: "9,2,k",
        WS: "c,k,4f4,1vk+a,u,1j,335",
        ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
        BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
        NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
        AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
        LRO: "6ct",
        RLO: "6cu",
        LRE: "6cq",
        RLE: "6cr",
        PDF: "6cs",
        LRI: "6ee",
        RLI: "6ef",
        FSI: "6eg",
        PDI: "6eh",
      },
      f = {},
      m = {};
    ((f.L = 1),
      (m[1] = "L"),
      Object.keys(c).forEach(function (Ce, He) {
        ((f[Ce] = 1 << (He + 1)), (m[f[Ce]] = Ce));
      }),
      Object.freeze(f));
    var y = f.LRI | f.RLI | f.FSI,
      b = f.L | f.R | f.AL,
      S = f.B | f.S | f.WS | f.ON | f.FSI | f.LRI | f.RLI | f.PDI,
      E = f.BN | f.RLE | f.LRE | f.RLO | f.LRO | f.PDF,
      x = f.S | f.WS | f.B | y | f.PDI | E,
      C = null;
    function D() {
      if (!C) {
        C = new Map();
        var Ce = function (Me) {
          if (c.hasOwnProperty(Me)) {
            var de = 0;
            c[Me].split(",").forEach(function (Te) {
              var _e = Te.split("+"),
                Le = _e[0],
                De = _e[1];
              ((Le = parseInt(Le, 36)),
                (De = De ? parseInt(De, 36) : 0),
                C.set((de += Le), f[Me]));
              for (var rt = 0; rt < De; rt++) C.set(++de, f[Me]);
            });
          }
        };
        for (var He in c) Ce(He);
      }
    }
    function N(Ce) {
      return (D(), C.get(Ce.codePointAt(0)) || f.L);
    }
    function T(Ce) {
      return m[N(Ce)];
    }
    var L = {
      pairs:
        "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      canonical:
        "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye",
    };
    function O(Ce, He) {
      var Me = 36,
        de = 0,
        Te = new Map(),
        _e = He && new Map(),
        Le;
      return (
        Ce.split(",").forEach(function De(rt) {
          if (rt.indexOf("+") !== -1) for (var st = +rt; st--;) De(Le);
          else {
            Le = rt;
            var Ne = rt.split(">"),
              Ke = Ne[0],
              ot = Ne[1];
            ((Ke = String.fromCodePoint((de += parseInt(Ke, Me)))),
              (ot = String.fromCodePoint((de += parseInt(ot, Me)))),
              Te.set(Ke, ot),
              He && _e.set(ot, Ke));
          }
        }),
        { map: Te, reverseMap: _e }
      );
    }
    var z, W, Y;
    function X() {
      if (!z) {
        var Ce = O(L.pairs, !0),
          { map: He, reverseMap: Me } = Ce;
        ((z = He), (W = Me), (Y = O(L.canonical, !1).map));
      }
    }
    function U(Ce) {
      return (X(), z.get(Ce) || null);
    }
    function k(Ce) {
      return (X(), W.get(Ce) || null);
    }
    function Z(Ce) {
      return (X(), Y.get(Ce) || null);
    }
    var {
      L: J,
      R: re,
      EN: Q,
      ES: ce,
      ET: le,
      AN: oe,
      CS: fe,
      B: ue,
      S: se,
      ON: ve,
      BN: he,
      NSM: Se,
      AL: Ee,
      LRO: Ue,
      RLO: ke,
      LRE: et,
      RLE: wt,
      PDF: bt,
      LRI: Mt,
      RLI: nn,
      FSI: rn,
      PDI: yt,
    } = f;
    function ti(Ce, He) {
      var Me = 125,
        de = new Uint32Array(Ce.length);
      for (var Te = 0; Te < Ce.length; Te++) de[Te] = N(Ce[Te]);
      var _e = new Map();
      function Le(sn, On) {
        var Xt = de[sn];
        if (((de[sn] = On), _e.set(Xt, _e.get(Xt) - 1), Xt & S))
          _e.set(S, _e.get(S) - 1);
        if ((_e.set(On, (_e.get(On) || 0) + 1), On & S))
          _e.set(S, (_e.get(S) || 0) + 1);
      }
      var De = new Uint8Array(Ce.length),
        rt = new Map(),
        st = [],
        Ne = null;
      for (var Ke = 0; Ke < Ce.length; Ke++) {
        if (!Ne)
          st.push(
            (Ne = {
              start: Ke,
              end: Ce.length - 1,
              level: He === "rtl" ? 1 : He === "ltr" ? 0 : ea(Ke, !1),
            }),
          );
        if (de[Ke] & ue) ((Ne.end = Ke), (Ne = null));
      }
      var ot = wt | et | ke | Ue | y | yt | bt | ue,
        Pe = function (sn) {
          return sn + (sn & 1 ? 1 : 2);
        },
        it = function (sn) {
          return sn + (sn & 1 ? 2 : 1);
        };
      for (var ut = 0; ut < st.length; ut++) {
        Ne = st[ut];
        var Ve = [{ _level: Ne.level, _override: 0, _isolate: 0 }],
          ht = void 0,
          Et = 0,
          Yt = 0,
          pn = 0;
        _e.clear();
        for (var xt = Ne.start; xt <= Ne.end; xt++) {
          var Ct = de[xt];
          if (
            ((ht = Ve[Ve.length - 1]),
            _e.set(Ct, (_e.get(Ct) || 0) + 1),
            Ct & S)
          )
            _e.set(S, (_e.get(S) || 0) + 1);
          if (Ct & ot) {
            if (Ct & (wt | et)) {
              De[xt] = ht._level;
              var vi = (Ct === wt ? it : Pe)(ht._level);
              if (vi <= Me && !Et && !Yt)
                Ve.push({ _level: vi, _override: 0, _isolate: 0 });
              else if (!Et) Yt++;
            } else if (Ct & (ke | Ue)) {
              De[xt] = ht._level;
              var ni = (Ct === ke ? it : Pe)(ht._level);
              if (ni <= Me && !Et && !Yt)
                Ve.push({
                  _level: ni,
                  _override: Ct & ke ? re : J,
                  _isolate: 0,
                });
              else if (!Et) Yt++;
            } else if (Ct & y) {
              if (Ct & rn) Ct = ea(xt + 1, !0) === 1 ? nn : Mt;
              if (((De[xt] = ht._level), ht._override)) Le(xt, ht._override);
              var ii = (Ct === nn ? it : Pe)(ht._level);
              if (ii <= Me && Et === 0 && Yt === 0)
                (pn++,
                  Ve.push({
                    _level: ii,
                    _override: 0,
                    _isolate: 1,
                    _isolInitIndex: xt,
                  }));
              else Et++;
            } else if (Ct & yt) {
              if (Et > 0) Et--;
              else if (pn > 0) {
                Yt = 0;
                while (!Ve[Ve.length - 1]._isolate) Ve.pop();
                var gi = Ve[Ve.length - 1]._isolInitIndex;
                if (gi != null) (rt.set(gi, xt), rt.set(xt, gi));
                (Ve.pop(), pn--);
              }
              if (
                ((ht = Ve[Ve.length - 1]), (De[xt] = ht._level), ht._override)
              )
                Le(xt, ht._override);
            } else if (Ct & bt) {
              if (Et === 0) {
                if (Yt > 0) Yt--;
                else if (!ht._isolate && Ve.length > 1)
                  (Ve.pop(), (ht = Ve[Ve.length - 1]));
              }
              De[xt] = ht._level;
            } else if (Ct & ue) De[xt] = Ne.level;
          } else if (((De[xt] = ht._level), ht._override && Ct !== he))
            Le(xt, ht._override);
        }
        var gn = [],
          Ht = null;
        for (var bn = Ne.start; bn <= Ne.end; bn++) {
          var _n = de[bn];
          if (!(_n & E)) {
            var li = De[bn],
              qt = _n & y,
              bi = _n === yt;
            if (Ht && li === Ht._level)
              ((Ht._end = bn), (Ht._endsWithIsolInit = qt));
            else
              gn.push(
                (Ht = {
                  _start: bn,
                  _end: bn,
                  _level: li,
                  _startsWithPDI: bi,
                  _endsWithIsolInit: qt,
                }),
              );
          }
        }
        var Si = [];
        for (var Yn = 0; Yn < gn.length; Yn++) {
          var Fi = gn[Yn];
          if (!Fi._startsWithPDI || (Fi._startsWithPDI && !rt.has(Fi._start))) {
            var Wl = [(Ht = Fi)];
            for (
              var xi = void 0;
              Ht && Ht._endsWithIsolInit && (xi = rt.get(Ht._end)) != null;
            )
              for (var Vl = Yn + 1; Vl < gn.length; Vl++)
                if (gn[Vl]._start === xi) {
                  Wl.push((Ht = gn[Vl]));
                  break;
                }
            var ri = [];
            for (var ql = 0; ql < Wl.length; ql++) {
              var wr = Wl[ql];
              for (var Kn = wr._start; Kn <= wr._end; Kn++) ri.push(Kn);
            }
            var Ci = De[ri[0]],
              sl = Ne.level;
            for (var ul = ri[0] - 1; ul >= 0; ul--)
              if (!(de[ul] & E)) {
                sl = De[ul];
                break;
              }
            var Pi = ri[ri.length - 1],
              Xl = De[Pi],
              Yo = Ne.level;
            if (!(de[Pi] & y)) {
              for (var Ql = Pi + 1; Ql <= Ne.end; Ql++)
                if (!(de[Ql] & E)) {
                  Yo = De[Ql];
                  break;
                }
            }
            Si.push({
              _seqIndices: ri,
              _sosType: Math.max(sl, Ci) % 2 ? re : J,
              _eosType: Math.max(Yo, Xl) % 2 ? re : J,
            });
          }
        }
        for (var Hr = 0; Hr < Si.length; Hr++) {
          var Zl = Si[Hr],
            { _seqIndices: Re, _sosType: Sn, _eosType: Ko } = Zl,
            Yi = De[Re[0]] & 1 ? re : J;
          if (_e.get(Se))
            for (var Dn = 0; Dn < Re.length; Dn++) {
              var on = Re[Dn];
              if (de[on] & Se) {
                var cl = Sn;
                for (var ct = Dn - 1; ct >= 0; ct--)
                  if (!(de[Re[ct]] & E)) {
                    cl = de[Re[ct]];
                    break;
                  }
                Le(on, cl & (y | yt) ? ve : cl);
              }
            }
          if (_e.get(Q))
            for (var fl = 0; fl < Re.length; fl++) {
              var Br = Re[fl];
              if (de[Br] & Q)
                for (var Il = fl - 1; Il >= -1; Il--) {
                  var ko = Il === -1 ? Sn : de[Re[Il]];
                  if (ko & b) {
                    if (ko === Ee) Le(Br, oe);
                    break;
                  }
                }
            }
          if (_e.get(Ee))
            for (var Go = 0; Go < Re.length; Go++) {
              var Lr = Re[Go];
              if (de[Lr] & Ee) Le(Lr, re);
            }
          if (_e.get(ce) || _e.get(fe))
            for (var Ki = 1; Ki < Re.length - 1; Ki++) {
              var Jl = Re[Ki];
              if (de[Jl] & (ce | fe)) {
                var _t = 0,
                  vt = 0;
                for (var hl = Ki - 1; hl >= 0; hl--)
                  if (((_t = de[Re[hl]]), !(_t & E))) break;
                for (var ki = Ki + 1; ki < Re.length; ki++)
                  if (((vt = de[Re[ki]]), !(vt & E))) break;
                if (_t === vt && (de[Jl] === ce ? _t === Q : _t & (Q | oe)))
                  Le(Jl, _t);
              }
            }
          if (_e.get(Q))
            for (var yn = 0; yn < Re.length; yn++) {
              var jo = Re[yn];
              if (de[jo] & Q) {
                for (var En = yn - 1; En >= 0 && de[Re[En]] & (le | E); En--)
                  Le(Re[En], Q);
                for (yn++; yn < Re.length && de[Re[yn]] & (le | E | Q); yn++)
                  if (de[Re[yn]] !== Q) Le(Re[yn], Q);
              }
            }
          if (_e.get(le) || _e.get(ce) || _e.get(fe))
            for (var Mi = 0; Mi < Re.length; Mi++) {
              var zr = Re[Mi];
              if (de[zr] & (le | ce | fe)) {
                Le(zr, ve);
                for (var ml = Mi - 1; ml >= 0 && de[Re[ml]] & E; ml--)
                  Le(Re[ml], ve);
                for (var $l = Mi + 1; $l < Re.length && de[Re[$l]] & E; $l++)
                  Le(Re[$l], ve);
              }
            }
          if (_e.get(Q))
            for (var Ur = 0, Vo = Sn; Ur < Re.length; Ur++) {
              var qo = Re[Ur],
                Fr = de[qo];
              if (Fr & Q) {
                if (Vo === J) Le(qo, J);
              } else if (Fr & b) Vo = Fr;
            }
          if (_e.get(S)) {
            var pl = re | Q | oe,
              Pr = pl | J,
              er = [];
            {
              var yl = [];
              for (var Gi = 0; Gi < Re.length; Gi++)
                if (de[Re[Gi]] & S) {
                  var vl = Ce[Re[Gi]],
                    Xo = void 0;
                  if (U(vl) !== null)
                    if (yl.length < 63) yl.push({ char: vl, seqIndex: Gi });
                    else break;
                  else if ((Xo = k(vl)) !== null)
                    for (var ji = yl.length - 1; ji >= 0; ji--) {
                      var Yr = yl[ji].char;
                      if (Yr === Xo || Yr === k(Z(vl)) || U(Z(Yr)) === vl) {
                        (er.push([yl[ji].seqIndex, Gi]), (yl.length = ji));
                        break;
                      }
                    }
                }
              er.sort(function (sn, On) {
                return sn[0] - On[0];
              });
            }
            for (var Kr = 0; Kr < er.length; Kr++) {
              var Qo = er[Kr],
                tr = Qo[0],
                kr = Qo[1],
                es = !1,
                xn = 0;
              for (var Ri = tr + 1; Ri < kr; Ri++) {
                var Zo = Re[Ri];
                if (de[Zo] & Pr) {
                  es = !0;
                  var nr = de[Zo] & pl ? re : J;
                  if (nr === Yi) {
                    xn = nr;
                    break;
                  }
                }
              }
              if (es && !xn) {
                xn = Sn;
                for (var gl = tr - 1; gl >= 0; gl--) {
                  var Io = Re[gl];
                  if (de[Io] & Pr) {
                    var Gr = de[Io] & pl ? re : J;
                    if (Gr !== Yi) xn = Gr;
                    else xn = Yi;
                    break;
                  }
                }
              }
              if (xn) {
                if (((de[Re[tr]] = de[Re[kr]] = xn), xn !== Yi)) {
                  for (var ir = tr + 1; ir < Re.length; ir++)
                    if (!(de[Re[ir]] & E)) {
                      if (N(Ce[Re[ir]]) & Se) de[Re[ir]] = xn;
                      break;
                    }
                }
                if (xn !== Yi) {
                  for (var bl = kr + 1; bl < Re.length; bl++)
                    if (!(de[Re[bl]] & E)) {
                      if (N(Ce[Re[bl]]) & Se) de[Re[bl]] = xn;
                      break;
                    }
                }
              }
            }
            for (var oi = 0; oi < Re.length; oi++)
              if (de[Re[oi]] & S) {
                var Jo = oi,
                  jr = oi,
                  Wr = Sn;
                for (var Wi = oi - 1; Wi >= 0; Wi--)
                  if (de[Re[Wi]] & E) Jo = Wi;
                  else {
                    Wr = de[Re[Wi]] & pl ? re : J;
                    break;
                  }
                var $o = Ko;
                for (var Sl = oi + 1; Sl < Re.length; Sl++)
                  if (de[Re[Sl]] & (S | E)) jr = Sl;
                  else {
                    $o = de[Re[Sl]] & pl ? re : J;
                    break;
                  }
                for (var lr = Jo; lr <= jr; lr++)
                  de[Re[lr]] = Wr === $o ? Wr : Yi;
                oi = jr;
              }
          }
        }
        for (var an = Ne.start; an <= Ne.end; an++) {
          var ts = De[an],
            rr = de[an];
          if (ts & 1) {
            if (rr & (J | Q | oe)) De[an]++;
          } else if (rr & re) De[an]++;
          else if (rr & (oe | Q)) De[an] += 2;
          if (rr & E) De[an] = an === 0 ? Ne.level : De[an - 1];
          if (an === Ne.end || N(Ce[an]) & (se | ue))
            for (var El = an; El >= 0 && N(Ce[El]) & x; El--) De[El] = Ne.level;
        }
      }
      return { levels: De, paragraphs: st };
      function ea(sn, On) {
        for (var Xt = sn; Xt < Ce.length; Xt++) {
          var Cn = de[Xt];
          if (Cn & (re | Ee)) return 1;
          if (Cn & (ue | J) || (On && Cn === yt)) return 0;
          if (Cn & y) {
            var Vr = ns(Xt);
            Xt = Vr === -1 ? Ce.length : Vr;
          }
        }
        return 0;
      }
      function ns(sn) {
        var On = 1;
        for (var Xt = sn + 1; Xt < Ce.length; Xt++) {
          var Cn = de[Xt];
          if (Cn & ue) break;
          if (Cn & yt) {
            if (--On === 0) return Xt;
          } else if (Cn & y) On++;
        }
        return -1;
      }
    }
    var Vt =
        "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",
      Rt;
    function tt() {
      if (!Rt) {
        var Ce = O(Vt, !0),
          { map: He, reverseMap: Me } = Ce;
        (Me.forEach(function (de, Te) {
          He.set(Te, de);
        }),
          (Rt = He));
      }
    }
    function St(Ce) {
      return (tt(), Rt.get(Ce) || null);
    }
    function hn(Ce, He, Me, de) {
      var Te = Ce.length;
      ((Me = Math.max(0, Me == null ? 0 : +Me)),
        (de = Math.min(Te - 1, de == null ? Te - 1 : +de)));
      var _e = new Map();
      for (var Le = Me; Le <= de; Le++)
        if (He[Le] & 1) {
          var De = St(Ce[Le]);
          if (De !== null) _e.set(Le, De);
        }
      return _e;
    }
    function Lt(Ce, He, Me, de) {
      var Te = Ce.length;
      ((Me = Math.max(0, Me == null ? 0 : +Me)),
        (de = Math.min(Te - 1, de == null ? Te - 1 : +de)));
      var _e = [];
      return (
        He.paragraphs.forEach(function (Le) {
          var De = Math.max(Me, Le.start),
            rt = Math.min(de, Le.end);
          if (De < rt) {
            var st = He.levels.slice(De, rt + 1);
            for (var Ne = rt; Ne >= De && N(Ce[Ne]) & x; Ne--)
              st[Ne] = Le.level;
            var Ke = Le.level,
              ot = 1 / 0;
            for (var Pe = 0; Pe < st.length; Pe++) {
              var it = st[Pe];
              if (it > Ke) Ke = it;
              if (it < ot) ot = it | 1;
            }
            for (var ut = Ke; ut >= ot; ut--)
              for (var Ve = 0; Ve < st.length; Ve++)
                if (st[Ve] >= ut) {
                  var ht = Ve;
                  while (Ve + 1 < st.length && st[Ve + 1] >= ut) Ve++;
                  if (Ve > ht) _e.push([ht + De, Ve + De]);
                }
          }
        }),
        _e
      );
    }
    function nt(Ce, He, Me, de) {
      var Te = mn(Ce, He, Me, de),
        _e = [].concat(Ce);
      return (
        Te.forEach(function (Le, De) {
          _e[De] = (He.levels[Le] & 1 ? St(Ce[Le]) : null) || Ce[Le];
        }),
        _e.join("")
      );
    }
    function mn(Ce, He, Me, de) {
      var Te = Lt(Ce, He, Me, de),
        _e = [];
      for (var Le = 0; Le < Ce.length; Le++) _e[Le] = Le;
      return (
        Te.forEach(function (De) {
          var rt = De[0],
            st = De[1],
            Ne = _e.slice(rt, st + 1);
          for (var Ke = Ne.length; Ke--;) _e[st - Ke] = Ne[Ke];
        }),
        _e
      );
    }
    return (
      (s.closingToOpeningBracket = k),
      (s.getBidiCharType = N),
      (s.getBidiCharTypeName = T),
      (s.getCanonicalBracket = Z),
      (s.getEmbeddingLevels = ti),
      (s.getMirroredCharacter = St),
      (s.getMirroredCharactersMap = hn),
      (s.getReorderSegments = Lt),
      (s.getReorderedIndices = mn),
      (s.getReorderedString = nt),
      (s.openingToClosingBracket = U),
      Object.defineProperty(s, "__esModule", { value: !0 }),
      s
    );
  })({});
  return t;
}
var lg = $E;
var ex;
class rg {
  needed;
  isNeeded() {
    if (this.needed === void 0)
      this.needed =
        typeof process.env.WT_SESSION === "string" ||
        a.TERM_PROGRAM === "vscode";
    return this.needed;
  }
}
var tx = new j(() => new rg());
function og(t) {
  if (!tx.of(B().host).isNeeded() || t.length === 0) return t;
  let s = t
    .map((E) =>
      E.value.replace(/[\u061C\u202A-\u202E\u2066-\u2069]/g, "\uFFFD"),
    )
    .join("");
  if (!rx(s)) return t;
  let c = (ex ??= lg()),
    { levels: f } = c.getEmbeddingLevels(s, "auto"),
    m = [],
    y = 0;
  for (let E = 0; E < t.length; E++) (m.push(f[y]), (y += t[E].value.length));
  let b = [...t],
    S = Math.max(...m);
  for (let E = S; E >= 1; E--) {
    let x = 0;
    while (x < b.length)
      if (m[x] >= E) {
        let C = x + 1;
        while (C < b.length && m[C] >= E) C++;
        (nx(b, x, C - 1), ix(m, x, C - 1), (x = C));
      } else x++;
  }
  return b;
}
function nx(t, s, c) {
  while (s < c) {
    let f = t[s];
    ((t[s] = t[c]), (t[c] = f), s++, c--);
  }
}
function ix(t, s, c) {
  while (s < c) {
    let f = t[s];
    ((t[s] = t[c]), (t[c] = f), s++, c--);
  }
}
var lx =
  /[\u0590-\u05FF\uFB1D-\uFB4F\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0780-\u07BF\u0700-\u074F]/u;
function rx(t) {
  return lx.test(t);
}
function ag(t, s) {
  if (!t) return s;
  return {
    x1: sg(t.x1, s.x1),
    x2: ug(t.x2, s.x2),
    y1: sg(t.y1, s.y1),
    y2: ug(t.y2, s.y2),
  };
}
function sg(t, s) {
  if (t === void 0) return s;
  if (s === void 0) return t;
  return Math.max(t, s);
}
function ug(t, s) {
  if (t === void 0) return s;
  if (s === void 0) return t;
  return Math.min(t, s);
}
var cg = 512,
  ox = [];
class Xye {
  width;
  height;
  stylePool;
  screen;
  operations = [];
  charCache = new Map();
  charCacheGeneration;
  charCacheChalkGeneration;
  constructor(t) {
    let { width: s, height: c, stylePool: f, screen: m } = t;
    ((this.width = s),
      (this.height = c),
      (this.stylePool = f),
      (this.screen = m),
      (this.charCacheGeneration = f.generation),
      (this.charCacheChalkGeneration = $Ze()),
      yd(m, s, c));
  }
  reset(t, s, c) {
    if (
      ((this.width = t),
      (this.height = s),
      (this.screen = c),
      (this.operations.length = 0),
      yd(c, t, s),
      this.stylePool.generation !== this.charCacheGeneration ||
        $Ze() !== this.charCacheChalkGeneration)
    )
      ((this.charCacheGeneration = this.stylePool.generation),
        (this.charCacheChalkGeneration = $Ze()),
        this.charCache.clear());
    else if (this.charCache.size > cg) {
      let f = this.charCache.size - cg;
      for (let m of this.charCache.keys()) {
        if (f-- <= 0) break;
        this.charCache.delete(m);
      }
    }
  }
  blit(t, s, c, f, m, y) {
    this.operations.push({
      type: "blit",
      src: t,
      x: s,
      y: c,
      width: f,
      height: m,
      restoreNoSelect: y,
    });
  }
  shift(t, s, c) {
    this.operations.push({ type: "shift", top: t, bottom: s, n: c });
  }
  clear(t, s) {
    this.operations.push({ type: "clear", region: t, fromAbsolute: s });
  }
  noSelect(t) {
    this.operations.push({ type: "noSelect", region: t, value: 1 });
  }
  clearNoSelect(t) {
    this.operations.push({ type: "noSelect", region: t, value: 0 });
  }
  write(t, s, c, f) {
    if (!c) return;
    this.operations.push({ type: "write", x: t, y: s, text: c, softWrap: f });
  }
  clip(t) {
    this.operations.push({ type: "clip", clip: t });
  }
  unclip() {
    this.operations.push({ type: "unclip" });
  }
  get() {
    let t = this.screen,
      s = this.width,
      c = this.height,
      f = 0,
      m = 0,
      y = [];
    for (let D = 0; D < this.operations.length; D++) {
      let N = this.operations[D];
      if (N.type !== "clear") continue;
      let { x: T, y: L, width: O, height: z } = N.region,
        W = Math.max(0, T),
        Y = Math.max(0, L),
        X = Math.min(T + O, s),
        U = Math.min(L + z, c);
      if (W >= X || Y >= U) continue;
      let k = { x: W, y: Y, width: X - W, height: U - Y };
      if (((t.damage = t.damage ? Rr(t.damage, k) : k), N.fromAbsolute))
        y.push({ rect: k, opIndex: D });
    }
    let b = [],
      S = [];
    for (let D = 0; D < this.operations.length; D++) {
      let N = this.operations[D];
      switch (N.type) {
        case "clear":
          continue;
        case "clip":
          b.push(ag(b.at(-1), N.clip));
          continue;
        case "unclip":
          b.pop();
          continue;
        case "blit": {
          let { src: T, x: L, y: O, width: z, height: W } = N,
            Y = b.at(-1),
            X = Math.max(L, Y?.x1 ?? 0),
            U = Math.max(O, Y?.y1 ?? 0),
            k = Math.min(O + W, c, T.height, Y?.y2 ?? 1 / 0),
            Z = Math.min(L + z, s, T.width, Y?.x2 ?? 1 / 0);
          if (X >= Z || U >= k) continue;
          let J = y.length === 0 ? ox : y.filter((Q) => Q.opIndex > D);
          if (J.length === 0) {
            if (
              (gd(t, T, X, U, Z, k),
              (f += (k - U) * (Z - X)),
              N.restoreNoSelect)
            )
              S.push({ opIndex: D, src: T, x1: X, y1: U, x2: Z, y2: k });
            continue;
          }
          let re = U;
          for (let Q = U; Q <= k; Q++)
            if (
              (Q < k &&
                J.some(
                  ({ rect: le }) =>
                    Q >= le.y &&
                    Q < le.y + le.height &&
                    X >= le.x &&
                    Z <= le.x + le.width,
                )) ||
              Q === k
            ) {
              if (Q > re) {
                if (
                  (gd(t, T, X, re, Z, Q),
                  (f += (Q - re) * (Z - X)),
                  N.restoreNoSelect)
                )
                  S.push({ opIndex: D, src: T, x1: X, y1: re, x2: Z, y2: Q });
              }
              re = Q + 1;
            }
          continue;
        }
        case "shift": {
          yu(t, N.top, N.bottom, N.n);
          continue;
        }
        case "write": {
          let { text: T, softWrap: L } = N,
            { x: O, y: z } = N,
            W = T.split(`
`),
            Y = 0,
            X = 0,
            U = b.at(-1);
          if (U) {
            let J = typeof U?.x1 === "number" && typeof U?.x2 === "number",
              re = typeof U?.y1 === "number" && typeof U?.y2 === "number";
            if (J && O > U.x2) continue;
            if (re) {
              let Q = W.length;
              if (z + Q < U.y1 || z > U.y2) continue;
            }
            if (J) {
              let Q = 0,
                ce = W.length,
                le = z;
              if (re)
                ((Q = z < U.y1 ? U.y1 - z : 0),
                  (ce = z + W.length > U.y2 ? U.y2 - z : ce),
                  (le = z < U.y1 ? U.y1 : z));
              ce = Math.min(ce, Q + (c - le));
              let oe = !1;
              if (
                ((W = W.map((fe, ue) => {
                  if (ue < Q - 1 || ue >= ce) return fe;
                  let se = O < U.x1 ? U.x1 - O : 0,
                    ve = dg(Gd(fe, this.stylePool, this.charCache));
                  if (O + ve >= U.x1) oe = !0;
                  if (se === 0 && O + ve <= U.x2) return fe;
                  return Cpe(fe, se, U.x2 - O);
                })),
                !oe)
              )
                continue;
              if (O < U.x1) O = U.x1;
            }
            if (re) {
              let Q = z < U.y1 ? U.y1 - z : 0,
                ce = W.length,
                le = z + ce > U.y2 ? U.y2 - z : ce;
              if (L && Q > 0 && (L[Q] ?? mi.HardBreak) !== mi.HardBreak)
                X = pd(O + dg(Gd(W[Q - 1], this.stylePool, this.charCache)), O);
              if (((W = W.slice(Q, le)), (Y = Q), z < U.y1)) z = U.y1;
            }
          }
          let k = t.softWrap,
            Z = 0;
          for (let J of W) {
            let re = z + Z;
            if (re >= c) break;
            let Q = ux(t, J, O, re, s, this.stylePool, this.charCache);
            if (((m += Q - O), L)) {
              let ce = L[Y + Z];
              ((k[re] =
                ce === mi.HardBreak || ce === void 0
                  ? 0
                  : ce === mi.ContinuationElidedSep
                    ? X | Ao
                    : X),
                (X = pd(Q, O)));
            }
            Z++;
          }
          continue;
        }
      }
    }
    let E = [],
      x = 0;
    for (let D = 0; D < this.operations.length; D++) {
      let N = this.operations[D];
      if (N.type === "clip") E.push(ag(E.at(-1), N.clip));
      else if (N.type === "unclip") E.pop();
      else if (N.type === "blit")
        while (x < S.length && S[x].opIndex === D) {
          let { src: T, x1: L, y1: O, x2: z, y2: W } = S[x];
          (pv(t, T, L, O, z, W), x++);
        }
      else if (N.type === "noSelect") {
        let { x: T, y: L, width: O, height: z } = N.region,
          W = E.at(-1),
          Y = Math.max(T, W?.x1 ?? 0),
          X = Math.max(L, W?.y1 ?? 0),
          U = Math.min(T + O, W?.x2 ?? 1 / 0),
          k = Math.min(L + z, W?.y2 ?? 1 / 0);
        if (U > Y && k > X)
          if (N.value === 1) hv(t, Y, X, U - Y, k - X);
          else mv(t, Y, X, U - Y, k - X);
      }
    }
    let C = f + m;
    if (C > 1000 && m > f)
      n(
        `High write ratio: blit=${f}, write=${m} (${((m / C) * 100).toFixed(1)}% writes), screen=${c}x${s}`,
      );
    return t;
  }
}
function ax(t, s) {
  if (t === s) return !0;
  let c = 0,
    f = 0;
  for (;;) {
    while (c < t.length && t[c].code === t[c].endCode) c++;
    while (f < s.length && s[f].code === s[f].endCode) f++;
    if (c === t.length || f === s.length)
      return c === t.length && f === s.length;
    if (t[c].code !== s[f].code) return !1;
    (c++, f++);
  }
}
function sx(t, s) {
  let c = t.length;
  if (c === 0) return [];
  let f = [],
    m = [],
    y = t[0].styles;
  for (let b = 0; b < c; b++) {
    let S = t[b],
      E = S.styles;
    if (m.length > 0 && !ax(E, y)) (fg(m.join(""), y, s, f), (m.length = 0));
    (m.push(S.value), (y = E));
  }
  if (m.length > 0) fg(m.join(""), y, s, f);
  return f;
}
function fg(t, s, c, f) {
  let m = cv(s) ?? void 0,
    b =
      m !== void 0 ||
      s.some((E) => E.code.length >= Vye.length && E.code.startsWith(Vye))
        ? fv(s)
        : s,
    S = c.intern(HYn(xYn(b)));
  for (let { segment: E } of Xs().segment(t))
    f.push({ value: E, width: te(E), styleId: S, hyperlink: m });
}
function Gd(t, s, c) {
  let f = c.get(t);
  if (f) (c.delete(t), c.set(t, f));
  else ((f = og(sx(rYn(fNe(sYn(t))), s))), c.set(t, f));
  return f;
}
function dg(t) {
  let s = 0;
  for (let c = 0; c < t.length; c++) s += t[c].width;
  return s;
}
function ux(t, s, c, f, m, y, b) {
  let S = Gd(s, y, b),
    E = c,
    x = { char: " ", styleId: y.none, width: 0, hyperlink: void 0 };
  for (let C = 0; C < S.length; C++) {
    let D = S[C],
      N = D.value.codePointAt(0);
    if (N !== void 0 && N <= 31) {
      if (N === 9) {
        let z = 8 - (E % 8);
        ((x.char = " "),
          (x.styleId = y.none),
          (x.width = 0),
          (x.hyperlink = void 0));
        for (let W = 0; W < z && E < m; W++) (Ar(t, E, f, x), E++);
      } else if (N === 27) {
        let O = S[C + 1]?.value,
          z = O?.codePointAt(0);
        if (O === "(" || O === ")" || O === "*" || O === "+") C += 2;
        else if (O === "[") {
          C++;
          while (C < S.length - 1) {
            C++;
            let W = S[C]?.value.codePointAt(0);
            if (W !== void 0 && W >= 64 && W <= 126) break;
          }
        } else if (
          O === "]" ||
          O === "P" ||
          O === "_" ||
          O === "^" ||
          O === "X"
        ) {
          C++;
          while (C < S.length - 1) {
            C++;
            let W = S[C]?.value;
            if (W === "\x07") break;
            if (W === "\x1B") {
              if (S[C + 1]?.value === "\\") {
                C++;
                break;
              }
            }
          }
        } else if (z !== void 0 && z >= 48 && z <= 126) C++;
      }
      continue;
    }
    if (
      N !== void 0 &&
      D.value.length === 1 &&
      (N === 1564 || (N >= 8234 && N <= 8238) || (N >= 8294 && N <= 8297))
    ) {
      ((x.char = "\uFFFD"),
        (x.styleId = D.styleId),
        (x.width = 0),
        (x.hyperlink = D.hyperlink),
        Ar(t, E, f, x),
        E++);
      continue;
    }
    let T = D.width;
    if (T === 0) continue;
    let L = T >= 2;
    if (L && E + T > m) {
      ((x.char = " "),
        (x.styleId = y.none),
        (x.width = 3),
        (x.hyperlink = void 0),
        Ar(t, E, f, x),
        E++);
      continue;
    }
    ((x.char = D.value),
      (x.styleId = D.styleId),
      (x.width = L ? 1 : 0),
      (x.hyperlink = D.hyperlink),
      Ar(t, E, f, x));
    for (let O = 2; O < T; O++)
      ((x.char = ""), (x.width = 2), Ar(t, E + O, f, x));
    E += L ? T : 1;
  }
  return E;
}
class jd {
  stylePool;
  snapshot = { boxOpen: !1, stress: "off", cellsPerFrame: 480, fullScreen: !1 };
  recordingBeforeHud = !1;
  listeners = new Set();
  constructor(t) {
    this.stylePool = t;
  }
  subscribe = (t) => (this.listeners.add(t), () => this.listeners.delete(t));
  getSnapshot = () => this.snapshot;
  isBoxOpen() {
    return this.snapshot.boxOpen;
  }
  get stressing() {
    return this.snapshot.stress !== "off";
  }
  getAtlasKeyCount() {
    return this.stylePool.atlasRecorder.size;
  }
  getStylePoolStats() {
    return { size: this.stylePool.size, overflowed: this.stylePool.overflowed };
  }
  setBox(t) {
    if (this.snapshot.boxOpen === t) return;
    if (t) {
      (this.beginHudRecording(),
        this.update({ ...this.snapshot, boxOpen: !0 }));
      return;
    }
    let s = this.stylePool.atlasRecorder;
    (s.reset(),
      s.setMaxKeys(null),
      (s.recording = this.recordingBeforeHud),
      this.update({ ...this.snapshot, boxOpen: !1, stress: "off" }));
  }
  setStress(t, s) {
    let c = this.snapshot,
      f = s?.cellsPerFrame ?? c.cellsPerFrame,
      m = s?.fullScreen ?? c.fullScreen,
      y = c.boxOpen;
    if (t !== "off" && !y) ((y = !0), this.beginHudRecording());
    if (
      y === c.boxOpen &&
      c.stress === t &&
      c.cellsPerFrame === f &&
      c.fullScreen === m
    )
      return;
    this.update({ boxOpen: y, stress: t, cellsPerFrame: f, fullScreen: m });
  }
  resetKeys() {
    (this.stylePool.atlasRecorder.reset(), this.update({ ...this.snapshot }));
  }
  beginHudRecording() {
    let t = this.stylePool.atlasRecorder;
    ((this.recordingBeforeHud = t.recording),
      (t.debugTainted = !0),
      t.setMaxKeys(1500000),
      t.reset(),
      (t.recording = !0));
  }
  update(t) {
    this.snapshot = t;
    for (let s of this.listeners) s();
  }
}
function Wd(t, s = 1, c = {}) {
  let { indent: f = " ", includeEmptyLines: m = !1 } = c;
  if (typeof t !== "string")
    throw TypeError(
      `Expected \`input\` to be a \`string\`, got \`${typeof t}\``,
    );
  if (typeof s !== "number")
    throw TypeError(
      `Expected \`count\` to be a \`number\`, got \`${typeof s}\``,
    );
  if (s < 0)
    throw RangeError(`Expected \`count\` to be at least 0, got \`${s}\``);
  if (typeof f !== "string")
    throw TypeError(
      `Expected \`options.indent\` to be a \`string\`, got \`${typeof f}\``,
    );
  if (s === 0) return t;
  let y = m ? /^/gm : /^(?!\s*$)/gm;
  return t.replace(y, f.repeat(s));
}
var cx = (t) =>
    t.getComputedWidth() -
    t.getComputedPadding(0) -
    t.getComputedPadding(2) -
    t.getComputedBorder(0) -
    t.getComputedBorder(2),
  hg = cx;
var pg = pe(o3t(), 1);
var fx = {
  dashed: {
    top: "\u254C",
    left: "\u254E",
    right: "\u254E",
    bottom: "\u254C",
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
  },
  quote: {
    top: " ",
    left: "\u258E",
    right: " ",
    bottom: " ",
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
  },
};
function mg(t, s, c, f = 0, m) {
  let y = TSt(s),
    b = t.length;
  if (y >= b - 2) {
    let C = Cpe(s, 0, b),
      D = m.repeat(Math.max(0, b - TSt(C)));
    return ["", C, D];
  }
  let S;
  if (c === "center") S = Math.floor((b - y) / 2);
  else if (c === "start") S = f + 1;
  else S = b - y - f - 1;
  S = Math.max(1, Math.min(S, b - y - 1));
  let E = t.substring(0, 1) + os(m, S - 1),
    x = os(m, b - S - y - 1) + t.substring(b - 1);
  return [E, s, x];
}
function Fo(t, s, c) {
  let f = jY(t, s);
  if (c) f = ie.dim(f);
  return f;
}
var dx = (t, s, c, f) => {
    if (c.style.borderStyle) {
      let m = Math.floor(c.yogaNode.getComputedWidth()),
        y = Math.floor(c.yogaNode.getComputedHeight()),
        b =
          typeof c.style.borderStyle === "string"
            ? (fx[c.style.borderStyle] ?? pg.default[c.style.borderStyle])
            : c.style.borderStyle,
        S = c.style.borderTopColor ?? c.style.borderColor,
        E = c.style.borderBottomColor ?? c.style.borderColor,
        x = c.style.borderLeftColor ?? c.style.borderColor,
        C = c.style.borderRightColor ?? c.style.borderColor,
        D = c.style.borderTopDimColor ?? c.style.borderDimColor,
        N = c.style.borderBottomDimColor ?? c.style.borderDimColor,
        T = c.style.borderLeftDimColor ?? c.style.borderDimColor,
        L = c.style.borderRightDimColor ?? c.style.borderDimColor,
        O = c.style.borderTop !== !1,
        z = c.style.borderBottom !== !1,
        W = c.style.borderLeft !== !1,
        Y = c.style.borderRight !== !1,
        X = Math.max(0, m - (W ? 1 : 0) - (Y ? 1 : 0)),
        U = O
          ? (W ? b.topLeft : "") + b.top.repeat(X) + (Y ? b.topRight : "")
          : "",
        k = Array.isArray(c.style.borderText)
          ? c.style.borderText
          : c.style.borderText
            ? [c.style.borderText]
            : [],
        Z = k.find((se) => se.position === "top"),
        J = k.find((se) => se.position === "bottom"),
        re;
      if (O && Z) {
        let [se, ve, he] = mg(U, Z.content, Z.align, Z.offset, b.top);
        re = Fo(se, S, D) + ve + Fo(he, S, D);
      } else if (O) re = Fo(U, S, D);
      let Q = y;
      if (O) Q -= 1;
      if (z) Q -= 1;
      Q = Math.max(0, Q);
      let ce = (
        jY(b.left, x) +
        `
`
      ).repeat(Q);
      if (T) ce = ie.dim(ce);
      let le = (
        jY(b.right, C) +
        `
`
      ).repeat(Q);
      if (L) le = ie.dim(le);
      let oe = z
          ? (W ? b.bottomLeft : "") +
            b.bottom.repeat(X) +
            (Y ? b.bottomRight : "")
          : "",
        fe;
      if (z && J) {
        let [se, ve, he] = mg(oe, J.content, J.align, J.offset, b.bottom);
        fe = Fo(se, E, N) + ve + Fo(he, E, N);
      } else if (z) fe = Fo(oe, E, N);
      let ue = O ? 1 : 0;
      if (re) f.write(t, s, re);
      if (W) f.write(t, s + ue, ce);
      if (Y) f.write(t + m - 1, s + ue, le);
      if (fe) f.write(t, s + y - 1, fe);
    }
  },
  yg = dx;
var vg = 256;
class gg {
  enabled = !1;
  events = [];
  position = null;
  lastInputTs = 0;
  snapshot = { enabled: !1, events: this.events, position: null };
  listeners = new Set();
  liveWatching = !1;
  demoRuler = !1;
  liveState = null;
  liveListeners = new Set();
  setLiveWatching(t, s) {
    let c = t && (s?.demoRuler ?? !0);
    if (this.liveWatching === t && this.demoRuler === c) return;
    if (((this.liveWatching = t), (this.demoRuler = c), !t))
      this.liveState = null;
    for (let f of this.liveListeners) f();
  }
  subscribeLive(t) {
    return (this.liveListeners.add(t), () => this.liveListeners.delete(t));
  }
  getLiveState() {
    return this.liveState;
  }
  isLiveWatching() {
    return this.liveWatching;
  }
  isDemoRulerEnabled() {
    return this.demoRuler;
  }
  subscribe(t) {
    return (this.listeners.add(t), () => this.listeners.delete(t));
  }
  getSnapshot() {
    return this.snapshot;
  }
  isEnabled() {
    return this.enabled;
  }
  setEnabled(t) {
    if (this.enabled === t) return;
    if (((this.enabled = t), !t))
      ((this.events = []), (this.lastInputTs = 0), (this.position = null));
    this.bump();
  }
  recordInput(t, s, c, f) {
    if (this.liveWatching) {
      this.liveState = { wheelMode: c.wheelMode };
      for (let y of this.liveListeners) y();
    }
    if (!this.enabled) return;
    let m = this.lastInputTs === 0 ? 1 / 0 : f - this.lastInputTs;
    ((this.lastInputTs = f),
      this.push({
        kind: "in",
        ts: f,
        dir: t,
        step: s,
        flip: c.pendingFlip && s === 0,
        gap: m,
        mult: c.mult,
        wheelMode: c.wheelMode,
        burst: c.burstCount,
        jbBypass: c.jbBypass,
      }));
  }
  recordOut(t, s, c) {
    if (!this.enabled) return;
    this.push({
      kind: "out",
      ts: performance.now(),
      applied: t,
      remaining: s,
      algo: c,
    });
  }
  recordPosition(t) {
    if (!this.enabled) return;
    this.position = {
      top: t.getScrollTop(),
      height: t.getScrollHeight(),
      viewport: t.getViewportHeight(),
    };
  }
  push(t) {
    ((this.events =
      this.events.length >= vg
        ? [...this.events.slice(1 - vg), t]
        : [...this.events, t]),
      this.bump());
  }
  bump() {
    this.snapshot = {
      enabled: this.enabled,
      events: this.events,
      position: this.position,
    };
    for (let t of this.listeners) t();
  }
}
var hx = new j(() => new gg());
function jl() {
  return hx.of(B().host);
}
function Dat(t, s) {
  jl().setLiveWatching(t, s);
}
function aee(t) {
  return jl().subscribeLive(t);
}
function Ttn() {
  return jl().getLiveState();
}
function Etn() {
  return jl().isLiveWatching();
}
function Atn() {
  return jl().isDemoRulerEnabled();
}
function Ctn(t, s, c, f) {
  jl().recordInput(t, s, c, f);
}
function bg(t, s, c) {
  jl().recordOut(t, s, c);
}
function vtn(t) {
  jl().recordPosition(t);
}
function Vd(t) {
  let s = 0,
    c = 0;
  while (c <= t.length) {
    let f = t.indexOf(
        `
`,
        c,
      ),
      m = f === -1 ? t.substring(c) : t.substring(c, f);
    if (((s = Math.max(s, E9e(m))), f === -1)) break;
    c = f + 1;
  }
  return s;
}
function k9e() {
  return {
    overlayActive: !1,
    layoutShifted: !1,
    scrollHint: null,
    scrollDrainNode: null,
    followScroll: null,
    absoluteRectsPrev: [],
    absoluteRectsCur: [],
    segmentMapScratch: new Uint32Array(0),
    rawBgRewriteCache: new WeakMap(),
  };
}
function Rg(t) {
  ((t.overlayActive = !1),
    (t.layoutShifted = !1),
    (t.scrollHint = null),
    (t.scrollDrainNode = null),
    (t.followScroll = null),
    (t.absoluteRectsPrev = t.absoluteRectsCur),
    (t.absoluteRectsCur = []));
}
var mx = 4,
  px = 5,
  yx = 12,
  vx = 2,
  gx = 3,
  qd = 30;
function bx(t, s, c) {
  let f = s > 0 ? 1 : -1,
    m = Math.abs(s),
    y = 0;
  if (m > qd) ((y += f * (m - qd)), (m = qd));
  let b = m <= px ? m : m < yx ? vx : gx;
  y += f * b;
  let S = m - b,
    E = Math.max(1, c - 1),
    x = Math.abs(y);
  if (x > E) {
    let C = x - E;
    return ((t.pendingScrollDelta = f * (S + C)), f * E);
  }
  return ((t.pendingScrollDelta = S > 0 ? f * S : void 0), y);
}
function Sx(t, s, c) {
  let f = Math.abs(s),
    m = Math.max(1, c - 1),
    y = Math.min(m, Math.max(mx, (f * 3) >> 2));
  if (f <= y) return ((t.pendingScrollDelta = void 0), s);
  let b = s > 0 ? y : -y;
  return ((t.pendingScrollDelta = s - b), b);
}
var Sg = "\x1B]",
  Eg = "\x07";
function Ja(t, s) {
  return `${Sg}8;;${s}${Eg}${t}${Sg}8;;${Eg}`;
}
function xg(t, s) {
  let c = 0;
  for (let y = 0; y < s.length; y++) c += s[y].text.length;
  if (t.segmentMapScratch.length < c)
    t.segmentMapScratch = new Uint32Array(
      Math.max(c, t.segmentMapScratch.length * 2),
    );
  let f = t.segmentMapScratch.subarray(0, c),
    m = 0;
  for (let y = 0; y < s.length; y++) {
    let b = m + s[y].text.length;
    (f.fill(y, m, b), (m = b));
  }
  return f;
}
function Qd(t, s, c, f, m = !1, y) {
  let b = t.split(`
`),
    S = [],
    E = 0;
  for (let x = 0; x < b.length; x++) {
    let C = b[x];
    if (m && C.length > 0) {
      let z = /\s/.test(C[0]);
      if (E < f.length && /\s/.test(f[E]) && !z)
        while (E < f.length && /\s/.test(f[E])) E++;
    }
    let D = "",
      N = 0,
      T = c[E] ?? 0;
    for (let z = 0; z < C.length; z++) {
      let W = c[E] ?? T;
      if (W !== T) {
        let Y = C.slice(N, z),
          X = s[T];
        if (X) {
          let U = HNe(Y, X.styles);
          if (X.hyperlink) U = Ja(U, X.hyperlink);
          D += U;
        } else D += Y;
        ((N = z), (T = W));
      }
      E++;
    }
    let L = C.slice(N),
      O = s[T];
    if (O) {
      let z = HNe(L, O.styles);
      if (O.hyperlink) z = Ja(z, O.hyperlink);
      D += z;
    } else D += L;
    if ((S.push(D), E < f.length && f[E] === "\r")) E++;
    if (
      E < f.length &&
      f[E] ===
        `
`
    )
      E++;
    if (y?.[x + 1] === mi.ContinuationElidedSep && E < f.length && f[E] === " ")
      E++;
    if (m && x < b.length - 1) {
      let z = b[x + 1],
        W = z.length > 0 ? z[0] : null;
      while (E < f.length && /\s/.test(f[E])) {
        if (W !== null && f[E] === W) break;
        E++;
      }
    }
  }
  return S.join(`
`);
}
function Cg(t, s, c) {
  let f = c === "wrap-stream";
  if (c !== "wrap" && c !== "wrap-trim" && !f)
    return { wrapped: Vm(t, s, c), softWrap: void 0 };
  let m = f ? "wrap" : c,
    y = t.replace(
      /\r\n?/g,
      `
`,
    ).split(`
`),
    b = [],
    S = [];
  for (let E of y) {
    let x = Vm(E, s, m).split(`
`);
    for (let C = 0; C < x.length; C++) {
      if (C === 0) {
        (b.push(x[C]), S.push(mi.HardBreak));
        continue;
      }
      let D = x[C],
        N = D.startsWith(" ") ? D.slice(1) : D,
        T = Vd(N) > 0 ? N : D;
      (b.push(T),
        S.push(
          T.length < D.length ? mi.ContinuationElidedSep : mi.Continuation,
        ));
    }
  }
  if (f) (b.pop(), S.pop());
  return {
    wrapped: b.join(`
`),
    softWrap: S,
  };
}
function Ex(t, s, c) {
  let f = t.childNodes[0]?.yogaNode;
  if (f) {
    let m = f.getComputedLeft(),
      y = f.getComputedTop();
    if (
      ((s =
        `
`.repeat(y) + Wd(s, m)),
      c && y > 0)
    )
      c.unshift(...Array(y).fill(mi.HardBreak));
  }
  return s;
}
function Au(
  t,
  s,
  c,
  {
    offsetX: f = 0,
    offsetY: m = 0,
    prevScreen: y,
    skipSelfBlit: b = !1,
    inheritedBackgroundColor: S,
    depth: E = 0,
  },
) {
  if (E >= kl) {
    Lo("renderNodeToOutput", t.nodeName);
    return;
  }
  let { yogaNode: x } = t;
  if (x) {
    if (x.getDisplay() === 1) {
      if (t.dirty) {
        let U = t.cachedLayout;
        if (U)
          (s.clear({
            x: Math.floor(U.x),
            y: Math.floor(U.y),
            width: Math.floor(U.width),
            height: Math.floor(U.height),
          }),
            nDt(t),
            (c.layoutShifted = !0));
      }
      t.hasEscapingDescendant = !1;
      return;
    }
    let C = f + x.getComputedLeft(),
      D = x.getComputedTop(),
      N = m + D,
      T = x.getComputedWidth(),
      L = x.getComputedHeight();
    if (N < 0 && t.style.position === "absolute") N = 0;
    let O = t.cachedLayout;
    if (
      !t.dirty &&
      !b &&
      t.pendingScrollDelta === void 0 &&
      O &&
      O.x === C &&
      O.y === N &&
      O.width === T &&
      O.height === L &&
      y
    ) {
      let U = Math.floor(C),
        k = Math.floor(N),
        Z = Math.floor(T),
        J = Math.floor(L);
      if (
        (s.blit(y, U, k, Z, J, t.style.opaque), t.style.position === "absolute")
      )
        c.absoluteRectsCur.push(O);
      Rx(t, s, c, y, U, k, Z, J);
      return;
    }
    let z =
      O !== void 0 &&
      (O.x !== C || O.y !== N || O.width !== T || O.height !== L);
    if (z) c.layoutShifted = !0;
    if (O && (t.dirty || z))
      s.clear(
        {
          x: Math.floor(O.x),
          y: Math.floor(O.y),
          width: Math.floor(O.width),
          height: Math.floor(O.height),
        },
        t.style.position === "absolute",
      );
    let W = t.pendingClears,
      Y = W !== void 0;
    if (Y) {
      c.layoutShifted = !0;
      for (let U of W)
        s.clear({
          x: Math.floor(U.x),
          y: Math.floor(U.y),
          width: Math.floor(U.width),
          height: Math.floor(U.height),
        });
      t.pendingClears = void 0;
    }
    if (L === 0 && Mx(t, x)) {
      ((t.cachedLayout = { x: C, y: N, width: T, height: L, top: D }),
        (t.hasEscapingDescendant = !1));
      for (let U of t.childNodes) if (U.nodeName !== "#text") Tx(U, C, N);
      t.dirty = !1;
      return;
    }
    if (t.nodeName === "ink-raw-ansi") {
      let U = t.attributes.rawText;
      if (typeof U === "string" && U) s.write(C, N, S ? Nx(c, t, U, S) : U);
    } else if (t.nodeName === "ink-text") {
      let U = cu(t, S ? { backgroundColor: S } : void 0),
        k = U.map((Z) => Z.text).join("");
      if (k.length > 0) {
        let Z = Math.min(hg(x), s.width - C),
          J = t.style.textWrap ?? "wrap",
          re = J === "wrap-stream" || Vd(k) > Z,
          Q,
          ce;
        if (re && U.length === 1) {
          let le = U[0],
            oe = Cg(k, Z, J);
          ((ce = oe.softWrap),
            (Q = oe.wrapped
              .split(
                `
`,
              )
              .map((fe) => {
                let ue = HNe(fe, le.styles);
                if (le.hyperlink) ue = Ja(ue, le.hyperlink);
                return ue;
              }).join(`
`)));
        } else if (
          re &&
          (J === "truncate-start" || J === "truncate-middle" || J === "middle")
        )
          Q = Ax(
            k,
            Z,
            U,
            xg(c, U),
            J === "truncate-start" ? "start" : "middle",
          );
        else if (re) {
          let le = Cg(k, Z, J);
          ce = le.softWrap;
          let oe = xg(c, U);
          Q = Qd(le.wrapped, U, oe, k, J === "wrap-trim", le.softWrap);
        } else
          Q = U.map((le) => {
            let oe = HNe(le.text, le.styles);
            if (le.hyperlink) oe = Ja(oe, le.hyperlink);
            return oe;
          }).join("");
        ((Q = Ex(t, Q, ce)), s.write(C, N, Q, ce));
      }
    } else if (t.nodeName === "ink-box") {
      let U = t.style.backgroundColor ?? S;
      if (t.style.noSelect) {
        let ue = Math.floor(C),
          se = t.style.noSelect === "from-left-edge";
        s.noSelect({
          x: se ? 0 : ue,
          y: Math.floor(N),
          width: se ? ue + Math.floor(T) : Math.floor(T),
          height: Math.floor(L),
        });
      }
      let k = t.style.overflowX ?? t.style.overflow,
        Z = t.style.overflowY ?? t.style.overflow,
        J = k === "hidden" || k === "scroll",
        re = Z === "hidden" || Z === "scroll",
        Q = Z === "scroll",
        ce = J || re,
        le,
        oe;
      if (ce) {
        let ue = J ? C + x.getComputedBorder(0) : void 0,
          se = J ? C + x.getComputedWidth() - x.getComputedBorder(2) : void 0;
        ((le = re ? N + x.getComputedBorder(1) : void 0),
          (oe = re
            ? N + x.getComputedHeight() - x.getComputedBorder(3)
            : void 0),
          s.clip({ x1: ue, x2: se, y1: le, y2: oe }));
      }
      let fe = !1;
      if (Q) {
        let ue = x.getComputedPadding(1),
          se = Math.max(
            0,
            (oe ?? N + L) - (le ?? N) - ue - x.getComputedPadding(3),
          ),
          ve = t.childNodes.find((He) => He.yogaNode),
          he = ve?.yogaNode,
          Se = he?.getComputedHeight() ?? 0,
          Ee = t.scrollHeight ?? Se,
          Ue = t.scrollViewportHeight ?? se;
        ((t.scrollHeight = Se),
          (t.scrollViewportHeight = se),
          (t.scrollViewportTop = (le ?? N) + ue));
        let ke = Math.max(0, Se - se);
        if (t.scrollAnchor) {
          let He = t.scrollAnchor.el.yogaNode;
          if (He) {
            let Me = He.getComputedTop(),
              de = Me + t.scrollAnchor.offset;
            if (t.scrollAnchor.nearest) {
              let Te = Me + He.getComputedHeight() - se;
              t.scrollTop = Math.min(Math.max(t.scrollTop ?? 0, Te), de);
            } else t.scrollTop = de;
            t.pendingScrollDelta = void 0;
          }
          t.scrollAnchor = void 0;
        }
        let et = t.scrollTop ?? 0,
          wt = t.attributes.stickyScroll,
          bt = t.stickyScroll ?? Boolean(wt),
          Mt = bt ? Ee : Math.max(t.scrollHeightHwm ?? 0, Ee);
        t.scrollHeightHwm = bt ? void 0 : Math.max(Mt, Se);
        let nn = Math.max(0, Mt - Ue),
          rn = Se >= Ee,
          yt = t.attributes.followGrowth !== !1;
        if (
          (bt || (wt !== !1 && yt && rn && et >= nn)) &&
          (t.pendingScrollDelta ?? 0) >= 0
        ) {
          if (
            ((t.scrollTop = ke),
            (t.pendingScrollDelta = void 0),
            t.stickyScroll === !1 && et >= nn)
          ) {
            if (ke - et > 3)
              n(
                `render-node-to-output: positional follow re-enabled sticky (scrollTop=${et} prevMax=${nn} \u2192 newMax=${ke}, prevH=${Ee} \u2192 ${Se})`,
              );
            t.stickyScroll = !0;
          }
        }
        let Vt = t.scrollTop ?? 0,
          {
            pendingScrollDelta: Rt,
            scrollClampMin: tt,
            scrollClampMax: St,
          } = t,
          hn = tt !== void 0 && St !== void 0;
        if (Rt !== void 0 && Rt !== 0) {
          let Me =
              hn && ((Rt < 0 && Vt < tt) || (Rt > 0 && Vt > St))
                ? Math.min(4, se >> 3)
                : se,
            de = Av().useAdaptiveDrain,
            Te = de ? bx(t, Rt, Me) : Sx(t, Rt, Me);
          ((Vt += Te),
            bg(
              Te,
              t.pendingScrollDelta ?? 0,
              de ? "adaptive" : "proportional",
            ));
        } else if (Rt === 0) t.pendingScrollDelta = void 0;
        let Lt = Math.max(0, Math.min(Vt, Math.max(ke, Mt - se))),
          nt = Math.max(0, Math.min(Vt, ke)),
          mn = hn && !bt ? Math.max(tt, Math.min(nt, St)) : nt;
        if (((t.scrollTop = Lt), Lt !== Vt)) t.pendingScrollDelta = void 0;
        if (t.pendingScrollDelta !== void 0) c.scrollDrainNode = t;
        nt = mn;
        let Ce = nt - (t.scrollTopRendered ?? nt);
        if (Ce !== 0) {
          let He = t.scrollViewportTop ?? 0;
          c.followScroll = {
            delta: Ce,
            viewportLeft: Math.floor(C),
            viewportRight: Math.floor(C + T) - 1,
            viewportTop: He,
            viewportBottom: He + se - 1,
          };
        }
        if (((t.scrollTopRendered = nt), ve && he)) {
          let He = C + he.getComputedLeft(),
            Me = N + he.getComputedTop() - nt,
            de = ve.cachedLayout,
            Te = null;
          if (de && de.y !== Me) {
            let Ne = de.y - Me,
              Ke = Math.floor(N + he.getComputedTop()),
              ot = Ke + se - 1;
            if (
              Math.floor(C) <= 0 &&
              Math.floor(C + T) >= s.width &&
              O?.y === N &&
              O.height === L &&
              se > 0 &&
              Math.abs(Ne) < se
            )
              ((Te = { top: Ke, bottom: ot, delta: Ne }), (c.scrollHint = Te));
            else c.layoutShifted = !0;
          }
          let _e = he.getComputedHeight(),
            Le = de?.height ?? _e,
            De = _e - Le,
            rt = !Te || De === 0 || (Te.delta > 0 && De === Te.delta),
            st = y && rt && !c.overlayActive;
          if (Te && !st) c.scrollHint = null;
          if (Te && st) {
            let { top: Ne, bottom: Ke, delta: ot } = Te,
              Pe = Math.floor(T);
            (s.blit(y, Math.floor(C), Ne, Pe, Ke - Ne + 1),
              s.shift(Ne, Ke, ot));
            let it = ot > 0 ? Ke - ot + 1 : Ne,
              ut = ot > 0 ? Ke : Ne - ot - 1;
            (s.clear({
              x: Math.floor(C),
              y: it,
              width: Pe,
              height: ut - it + 1,
            }),
              s.clip({ x1: void 0, x2: void 0, y1: it, y2: ut + 1 }));
            let Ve = ve.dirty
              ? new Set(ve.childNodes.filter((Et) => Et.dirty))
              : null;
            if (
              (Xd(
                ve,
                s,
                c,
                He,
                Me,
                Y,
                void 0,
                it - Me,
                ut + 1 - Me,
                U,
                E + 2,
                !0,
              ),
              s.unclip(),
              Ve)
            ) {
              let Et = it - Me,
                Yt = ut + 1 - Me,
                pn = " ".repeat(Pe),
                xt = 0,
                Ct;
              for (let vi of ve.childNodes) {
                let ni = vi,
                  ii = Ve.has(vi);
                if (!ii && xt === 0) {
                  if (ni.cachedLayout !== void 0) continue;
                }
                let gi = ni.yogaNode;
                if (!gi) continue;
                let gn = gi.getComputedTop(),
                  Ht = gi.getComputedHeight(),
                  bn = gn + Ht;
                if (ii) {
                  let qt = ni.cachedLayout;
                  xt += Ht - (qt ? qt.height : 0);
                }
                if (bn <= nt || gn >= nt + se) continue;
                if (gn >= Et && bn <= Yt) continue;
                let _n = Math.floor(Me + gn);
                if (!ii) {
                  let qt = ni.cachedLayout;
                  if (qt) {
                    let bi = Math.floor(qt.y) - ot;
                    if (bi === _n) continue;
                    let Si = Math.max(bi, Te.top),
                      Yn = Math.min(bi + qt.height, Ct ?? Te.bottom + 1);
                    if (Si < Yn)
                      s.write(
                        Math.floor(C),
                        Si,
                        Array(Yn - Si).fill(pn).join(`
`),
                      );
                  }
                }
                let li = Math.min(
                  Math.floor(Me + bn),
                  Math.floor((le ?? N) + ue + se),
                );
                if (_n < li) {
                  Ct ??= _n;
                  let qt = Array(li - _n).fill(pn).join(`
`);
                  (s.write(Math.floor(C), _n, qt),
                    s.clip({ x1: void 0, x2: void 0, y1: _n, y2: li }),
                    Au(ni, s, c, {
                      offsetX: He,
                      offsetY: Me,
                      prevScreen: void 0,
                      inheritedBackgroundColor: U,
                      depth: E + 2,
                    }),
                    s.unclip());
                }
              }
            }
            let ht = c.absoluteRectsPrev.length ? " ".repeat(Pe) : "";
            for (let Et of c.absoluteRectsPrev) {
              if (Et.y >= Ke + 1 || Et.y + Et.height <= Ne) continue;
              let Yt = Math.max(Ne, Math.floor(Et.y) - ot),
                pn = Math.min(Ke + 1, Math.floor(Et.y + Et.height) - ot);
              if (Yt >= it && pn <= ut + 1) continue;
              if (Yt >= pn) continue;
              let xt = Array(pn - Yt).fill(ht).join(`
`);
              (s.write(Math.floor(C), Yt, xt),
                s.clip({ x1: void 0, x2: void 0, y1: Yt, y2: pn }),
                Xd(ve, s, c, He, Me, Y, void 0, Yt - Me, pn - Me, U, E + 2, !0),
                s.unclip());
            }
          } else {
            let Ne = de && de.y !== Me;
            if (Ne && le !== void 0 && oe !== void 0)
              s.clear({
                x: Math.floor(C),
                y: Math.floor(le),
                width: Math.floor(T),
                height: Math.floor(oe - le),
              });
            Xd(
              ve,
              s,
              c,
              He,
              Me,
              Y,
              Ne || z ? void 0 : y,
              nt,
              nt + se,
              U,
              E + 2,
            );
          }
          ((ve.cachedLayout = {
            x: He,
            y: Me,
            width: he.getComputedWidth(),
            height: he.getComputedHeight(),
          }),
            (ve.dirty = !1));
        }
      } else {
        if (t.style.opaque)
          s.clearNoSelect({
            x: Math.floor(C),
            y: Math.floor(N),
            width: Math.floor(T),
            height: Math.floor(L),
          });
        let ue = t.style.backgroundColor;
        if (ue || t.style.opaque) {
          let se = x.getComputedBorder(0),
            ve = x.getComputedBorder(2),
            he = x.getComputedBorder(1),
            Se = x.getComputedBorder(3),
            Ee = Math.floor(T) - se - ve,
            Ue = Math.floor(L) - he - Se;
          if (Ee > 0 && Ue > 0) {
            let ke = " ".repeat(Ee),
              et = ue ? HNe(ke, { backgroundColor: ue }) : ke,
              wt = Array(Ue).fill(et).join(`
`);
            s.write(C + se, N + he, wt);
          }
        }
        fe = Mg(
          t,
          s,
          c,
          C,
          N,
          T,
          L,
          Y,
          ue || t.style.opaque ? void 0 : y,
          U,
          E + 1,
        );
      }
      if (ce) s.unclip();
      ((t.hasEscapingDescendant = ce ? !1 : fe), yg(C, N, t, s));
    } else if (t.nodeName === "ink-root")
      t.hasEscapingDescendant = Mg(t, s, c, C, N, T, L, Y, y, S, E + 1);
    let X = { x: C, y: N, width: T, height: L, top: D };
    if (((t.cachedLayout = X), t.style.position === "absolute"))
      c.absoluteRectsCur.push(X);
    t.dirty = !1;
  }
}
function xx(t, s, c) {
  if (!t.hasAbsoluteDescendant) return !1;
  for (let f of t.childNodes) {
    let m = f;
    if (m.style.position !== "absolute") continue;
    let y = m.yogaNode;
    if (!y || y.getDisplay() === 1) continue;
    let b = m.cachedLayout;
    if (!b) continue;
    let S = s + y.getComputedLeft(),
      E = c + y.getComputedTop();
    if (E < 0) E = 0;
    if (
      b.x !== S ||
      b.y !== E ||
      b.width !== y.getComputedWidth() ||
      b.height !== y.getComputedHeight()
    )
      return !0;
  }
  return !1;
}
function Mg(t, s, c, f, m, y, b, S, E, x, C) {
  let D = E !== void 0 && xx(t, f, m),
    N = !1,
    T = !1,
    L = !1,
    O = f + y,
    z = m + b;
  for (let W of t.childNodes) {
    let Y = W,
      X = Y.dirty,
      U = Y.style.position === "absolute";
    if (
      (Au(Y, s, c, {
        offsetX: f,
        offsetY: m,
        prevScreen:
          S || N || (D && !U) || (T && Y.hasEscapingDescendant === !0)
            ? void 0
            : E,
        skipSelfBlit:
          T && U && !Y.style.opaque && Y.style.backgroundColor === void 0,
        inheritedBackgroundColor: x,
        depth: C,
      }),
      X && !N)
    )
      if (!Cx(Y) || U) N = !0;
      else T = !0;
    if (!L) {
      let k = Y.cachedLayout;
      if (
        Y.hasEscapingDescendant ||
        (k !== void 0 &&
          !U &&
          (k.x < f || k.y < m || k.x + k.width > O || k.y + k.height > z))
      )
        L = !0;
    }
  }
  return L;
}
function Cx(t) {
  let s = t.style.overflowX ?? t.style.overflow,
    c = t.style.overflowY ?? t.style.overflow;
  return (
    (s === "hidden" || s === "scroll") && (c === "hidden" || c === "scroll")
  );
}
function Mx(t, s) {
  let c = t.parentNode;
  if (!c) return !1;
  let f = s.getComputedTop(),
    m = c.childNodes,
    y = m.indexOf(t);
  for (let b = y + 1; b < m.length; b++) {
    let S = m[b].yogaNode;
    if (!S) continue;
    return S.getComputedTop() === f;
  }
  for (let b = y - 1; b >= 0; b--) {
    let S = m[b].yogaNode;
    if (!S) continue;
    return S.getComputedTop() === f;
  }
  return !1;
}
function Rx(t, s, c, f, m, y, b, S) {
  if (!t.hasAbsoluteDescendant && !t.hasEscapingDescendant) return;
  let E = m + b,
    x = y + S,
    C = [],
    D = [],
    N = (T, L) => {
      let O = T.childNodes;
      for (let z = O.length - 1; z >= 0; z--) {
        let W = O[z];
        if (W.nodeName !== "#text") (C.push(W), D.push(L));
      }
    };
  N(t, t.hasEscapingDescendant === !0);
  for (let T = C.pop(); T !== void 0; T = C.pop()) {
    let L = D.pop(),
      O = T.cachedLayout;
    if (O) {
      let W = T.style.position === "absolute";
      if (W) c.absoluteRectsCur.push(O);
      if (W || L) {
        let Y = Math.floor(O.x),
          X = Math.floor(O.y),
          U = Math.floor(O.width),
          k = Math.floor(O.height);
        if (Y < m || X < y || Y + U > E || X + k > x)
          s.blit(f, Y, X, U, k, T.style.opaque);
      }
    }
    let z = L && T.hasEscapingDescendant === !0;
    if (T.hasAbsoluteDescendant || z) N(T, z);
  }
}
function Xd(t, s, c, f, m, y, b, S, E, x, C, D = !1) {
  let N = !1,
    T = 0;
  for (let L of t.childNodes) {
    let O = L,
      z = O.yogaNode;
    if (z) {
      let Y = O.cachedLayout,
        X,
        U;
      if (Y?.top !== void 0 && !O.dirty && T === 0)
        ((X = Y.top), (U = Y.height));
      else {
        if (((X = z.getComputedTop()), (U = z.getComputedHeight()), O.dirty))
          T += U - (Y ? Y.height : 0);
        if (Y) Y.top = X;
      }
      if (X + U <= S || X >= E) {
        if (!D) nDt(O);
        continue;
      }
    }
    let W = O.dirty;
    if (
      (Au(O, s, c, {
        offsetX: f,
        offsetY: m,
        prevScreen: y || N ? void 0 : b,
        inheritedBackgroundColor: x,
        depth: C,
      }),
      W)
    )
      N = !0;
  }
}
function nDt(t) {
  let s = [t];
  for (let c = s.pop(); c !== void 0; c = s.pop()) {
    c.cachedLayout = void 0;
    let f = c.childNodes;
    for (let m = f.length - 1; m >= 0; m--) {
      let y = f[m];
      if (y.nodeName !== "#text") s.push(y);
    }
  }
}
function Tx(t, s, c) {
  let f = [{ node: t, offsetX: s, offsetY: c }];
  for (let m = f.pop(); m !== void 0; m = f.pop()) {
    let y = m.node.yogaNode;
    if (!y || y.getDisplay() === 1) continue;
    let b = m.offsetX + y.getComputedLeft(),
      S = m.offsetY + y.getComputedTop();
    m.node.cachedLayout = {
      x: b,
      y: S,
      width: y.getComputedWidth(),
      height: y.getComputedHeight(),
      top: y.getComputedTop(),
    };
    let E = m.node.childNodes;
    for (let x = E.length - 1; x >= 0; x--) {
      let C = E[x];
      if (C.nodeName !== "#text") f.push({ node: C, offsetX: b, offsetY: S });
    }
  }
}
function Nx(t, s, c, f) {
  let m = $Ze(),
    y = t.rawBgRewriteCache.get(s);
  if (y && y.text === c && y.color === f && y.levelGeneration === m)
    return y.out;
  let b = IYn(c, f);
  return (
    t.rawBgRewriteCache.set(s, {
      text: c,
      color: f,
      levelGeneration: m,
      out: b,
    }),
    b
  );
}
function Ax(t, s, c, f, m) {
  if (s < 1) return "";
  let y = Wc(t, s, m);
  if (y === null) return Qd(t, c, f, t);
  let { head: b, tail: S } = y,
    E = b + Na + S;
  if (!t.startsWith(b) || !t.endsWith(S)) return Qd(E, c, f, t);
  let x = b.length,
    C = t.length - S.length,
    D = (L) =>
      L < x
        ? (f[L] ?? 0)
        : L === x
          ? (f[Math.max(0, C - 1)] ?? 0)
          : (f[C + (L - x - 1)] ?? 0),
    N = E.split(`
`),
    T = 0;
  for (let L = 0; L < N.length; L++) {
    let O = N[L],
      z = "",
      W = 0,
      Y = O.length > 0 ? D(T) : -1;
    for (let X = 1; X <= O.length; X++) {
      let U = X < O.length ? D(T + X) : -1;
      if (U !== Y) {
        let k = c[Y],
          Z = O.slice(W, X);
        if (k) {
          let J = HNe(Z, k.styles);
          if (k.hyperlink) J = Ja(J, k.hyperlink);
          z += J;
        } else z += Z;
        ((W = X), (Y = U));
      }
    }
    ((N[L] = z), (T += O.length + 1));
  }
  return N.join(`
`);
}
var x9e = Au;
var _x = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u061c\u202a-\u202e\u2066-\u2069]/;
function Du(t) {
  if (!_x.test(t)) return t;
  let s = t
      .split(
        `
`,
      )
      .map((f) => pt(f)).join(`
`),
    c = "";
  for (let f = 0; f < s.length; f++) {
    let m = s.charCodeAt(f);
    if (m < 32) {
      if (m === 9 || m === 10) c += s[f];
    } else if (m === 127 || (m >= 128 && m <= 159));
    else if (m === 1564 || (m >= 8234 && m <= 8238) || (m >= 8294 && m <= 8297))
      c += "\uFFFD";
    else c += s[f];
  }
  return c;
}
var al = [];
function $a(t, s, c = 0) {
  if (c >= kl)
    return (
      Lo("renderNodeToScreenReaderOutput", t.nodeName),
      { text: "", preserveRanges: al }
    );
  if (t.nodeName === "#text")
    return { text: Du(t.nodeValue), preserveRanges: al };
  let f = t.accessibility;
  if (f?.hidden) return { text: "", preserveRanges: al };
  if (t.isHidden || t.yogaNode?.getDisplay() === 1)
    return { text: "", preserveRanges: al };
  let m = "",
    y = al;
  if (f?.label !== void 0) m = Du(f.label);
  else if (
    t.nodeName === "ink-text" ||
    t.nodeName === "ink-virtual-text" ||
    t.nodeName === "ink-link"
  )
    for (let b of t.childNodes) {
      let S = $a(b, f?.role ?? s, c + 1);
      if (S.preserveRanges.length > 0) y = _u(y, S.preserveRanges, m.length);
      m += S.text;
    }
  else if (t.nodeName === "ink-box" || t.nodeName === "ink-root") {
    let b = Dx(t, f?.role ?? s, c);
    ((m = b.text), (y = b.preserveRanges));
  }
  if (f?.state) {
    let b = Object.keys(f.state).filter((S) => f.state[S]);
    if (b.length > 0) {
      let S = `(${b.join(", ")}) `;
      ((m = S + m), (y = _u(al, y, S.length)));
    }
  }
  if (f?.role && f.role !== s) {
    let b = `${f.role}: `;
    ((m = b + m), (y = _u(al, y, b.length)));
  }
  if (f?.preserveWhitespace && m !== "") y = [[0, m.length]];
  return { text: m, preserveRanges: y };
}
function Rtn(t, s, c = 0) {
  return $a(t, s, c).text;
}
function _u(t, s, c) {
  if (s.length === 0) return t;
  let f = t === al ? [] : [...t];
  for (let [m, y] of s) f.push([m + c, y + c]);
  return f;
}
function Dx(t, s, c) {
  let f = t.style.flexDirection ?? "row",
    m = f === "column" || f === "column-reverse",
    y = f === "row-reverse" || f === "column-reverse",
    b = m
      ? `
`
      : " ",
    S = [];
  for (let C of t.childNodes) {
    let D = $a(C, s, c + 1);
    if (D.text !== "") S.push(D);
  }
  if (y) S.reverse();
  let E = "",
    x = al;
  for (let C of S) {
    if (E !== "") E += b;
    if (C.preserveRanges.length > 0) x = _u(x, C.preserveRanges, E.length);
    E += C.text;
  }
  return { text: E, preserveRanges: x };
}
function Id(t, s, c, f = 0) {
  if (f >= kl) return null;
  if (t === s) return 0;
  if (t.nodeName === "#text") return null;
  let m = t.accessibility;
  if (m?.hidden) return null;
  if (t.isHidden || t.yogaNode?.getDisplay() === 1) return null;
  if (m?.label !== void 0) return null;
  if (
    t.nodeName === "ink-text" ||
    t.nodeName === "ink-virtual-text" ||
    t.nodeName === "ink-link"
  )
    return null;
  if (t.nodeName !== "ink-box" && t.nodeName !== "ink-root") return null;
  let y = m?.role ?? c,
    b = 0;
  if (m?.state) {
    let T = Object.keys(m.state).filter((L) => m.state[L]);
    if (T.length > 0) b += `(${T.join(", ")}) `.length;
  }
  if (m?.role && m.role !== c) b += `${m.role}: `.length;
  let S = t.style.flexDirection ?? "row",
    E = S === "column" || S === "column-reverse",
    x = S === "row-reverse" || S === "column-reverse",
    C = E ? 1 : 1,
    D = [];
  for (let T of t.childNodes) {
    let L = Rtn(T, y, f + 1);
    if (L !== "") D.push({ node: T, out: L });
  }
  if (x) D.reverse();
  let N = 0;
  for (let T of D) {
    let L = Id(T.node, s, y, f + 1);
    if (L !== null) return b + N + L;
    N += T.out.length + C;
  }
  return null;
}
function Tg(t, s) {
  let c = s.toLowerCase();
  if (!c) return [];
  let f = c.length,
    { width: m, height: y, noSelect: b } = t,
    S = [];
  for (let E = 0; E < y; E++) {
    let x = E * m,
      C = "",
      D = [],
      N = [];
    for (let L = 0; L < m; L++) {
      let O = x + L,
        z = f4(t, O);
      if (z.width === 2 || z.width === 3 || b[O] === 1) continue;
      let W = z.char.toLowerCase(),
        Y = D.length;
      for (let X = 0; X < W.length; X++) N.push(Y);
      ((C += W), D.push(L));
    }
    let T = C.indexOf(c);
    while (T >= 0) {
      let L = N[T],
        O = N[T + f - 1],
        z = D[L],
        W = D[O] + 1;
      (S.push({ row: E, col: z, len: W - z }), (T = C.indexOf(c, T + f)));
    }
  }
  return S;
}
function Ng(t, s, c, f, m) {
  if (m < 0 || m >= c.length) return !1;
  let y = c[m],
    b = y.row + f;
  if (b < 0 || b >= t.height) return !1;
  let S = (x) => s.withCurrentMatch(x),
    E = b * t.width;
  for (let x = y.col; x < y.col + y.len; x++) {
    if (x < 0 || x >= t.width) continue;
    let C = f4(t, E + x);
    _o(t, x, b, S(C.styleId));
  }
  return !0;
}
function Jd(t, s) {
  let c,
    f = k9e();
  return (m) => {
    let {
        frontFrame: y,
        backFrame: b,
        isTTY: S,
        terminalWidth: E,
        terminalRows: x,
      } = m,
      C = y.screen,
      D = b.screen,
      { charPool: N, hyperlinkPool: T } = D,
      L = t.yogaNode?.getComputedHeight(),
      O = t.yogaNode?.getComputedWidth(),
      z = L === void 0 || !Number.isFinite(L) || L < 0,
      W = O === void 0 || !Number.isFinite(O) || O < 0;
    if (!t.yogaNode || z || W) {
      if (t.yogaNode && (z || W))
        n(
          `Invalid yoga dimensions: width=${O}, height=${L}, childNodes=${t.childNodes.length}, terminalWidth=${E}, terminalRows=${x}`,
        );
      return {
        screen: o7(E, 0, s, N, T),
        viewport: { width: E, height: x },
        cursor: { x: 0, y: 0, visible: !0 },
      };
    }
    let Y = Math.floor(t.yogaNode.getComputedWidth()),
      X = Math.floor(t.yogaNode.getComputedHeight()),
      U = m.altScreen ? x : X;
    if (m.altScreen && X > x)
      n(
        `alt-screen: yoga height ${X} > terminalRows ${x} \u2014 ` +
          "something is rendering outside <AlternateScreen>. Overflow clipped.",
        { level: "warn" },
      );
    let k = D ?? o7(Y, U, s, N, T);
    if (c) c.reset(Y, U, k);
    else c = new Xye({ width: Y, height: U, stylePool: s, screen: k });
    (Rg(f), (f.overlayActive = m.overlayActive));
    let Z = Ly(t);
    x9e(t, c, f, { prevScreen: Z || m.prevFrameContaminated ? void 0 : C });
    let J = c.get();
    if (S && J.width === E) sv(J);
    let re = f.scrollDrainNode;
    if (re) GA(re);
    return {
      scrollHint: m.altScreen ? f.scrollHint : null,
      scrollDrainPending: re !== null,
      followScroll: f.followScroll,
      layoutShifted: f.layoutShifted,
      screen: J,
      viewport: { width: E, height: m.altScreen ? x + 1 : x },
      cursor: {
        x: 0,
        y: m.altScreen ? Math.max(0, Math.min(k.height, x) - 1) : k.height,
        visible: !S || k.height === 0,
      },
    };
  };
}
import { writeSync as Ui } from "fs";
function rDt() {
  try {
    if (
      (Ui(1, G7t),
      Ui(1, Hhe),
      Ui(1, rz),
      Ui(1, q0e),
      Ui(1, Gat),
      Ui(1, jat),
      Ui(1, Cv),
      Ui(1, "\x1B7" + oB + "\x1B8"),
      Jye())
    )
      Ui(1, BSt);
    if (z8e()) Ui(1, mw(jSt));
  } catch (t) {
    if (Po(t))
      n(`restoreTerminalModes writeSync failed: ${t}`, { level: "error" });
    else throw t;
  }
}
function Ag(t, s, c) {
  if (!s) return !1;
  let f = s.toLowerCase(),
    m = f.length,
    { width: y, noSelect: b, height: S } = t,
    E = !1;
  for (let x = 0; x < S; x++) {
    let C = x * y,
      D = "",
      N = [],
      T = [];
    for (let O = 0; O < y; O++) {
      let z = C + O,
        W = f4(t, z);
      if (W.width === 2 || W.width === 3 || b[z] === 1) continue;
      let Y = W.char.toLowerCase(),
        X = N.length;
      for (let U = 0; U < Y.length; U++) T.push(X);
      ((D += Y), N.push(O));
    }
    let L = D.indexOf(f);
    while (L >= 0) {
      E = !0;
      let O = T[L],
        z = T[L + m - 1];
      for (let W = O; W <= z; W++) {
        let Y = N[W],
          X = f4(t, C + Y);
        _o(t, Y, x, c.withInverse(X.styleId));
      }
      L = D.indexOf(f, L + m);
    }
  }
  return E;
}
var wu = 8192,
  Bx = 16,
  Dg = 5,
  Lx = 50,
  zx = mBn(),
  Ux = Object.freeze({ x: 0, y: 0, visible: !1 }),
  Fx = Object.freeze({ type: "stdout", content: gm }),
  Px = Object.freeze({ type: "stdout", content: i_ + gm }),
  Og = "\x1B]104;255\x07",
  Yx = 2000,
  kx = 2000;
function wg(t, s) {
  if (s <= 0) return !0;
  for (let c of Xs().segment(t)) {
    if (c.index === s) return !0;
    if (c.index > s) return !1;
  }
  return s >= t.length;
}
function Hg(t) {
  return Object.freeze({ type: "stdout", content: $P(t, 1) });
}
var Bg = wu,
  Lg = 2048;
function Hu(t, s, c, f, m) {
  if (typeof t !== "number" || !Number.isFinite(t) || t < 1) {
    if (t !== void 0 && t !== 0)
      m?.(
        `terminal winsize read returned a garbage dimension: ${String(t)} \u2014 falling back to ${s}`,
      );
    return s;
  }
  let y = Math.floor(t);
  if (y > c)
    return (
      m?.(
        `terminal winsize read returned an absurd dimension: ${String(t)} \u2014 ${f === "clamp" ? `clamping to ${c}` : `falling back to ${s}`}`,
      ),
      f === "clamp" ? c : s
    );
  return y;
}
function oDt(t, s) {
  return {
    cols: Hu(t.columns, 80, Bg, "clamp", s),
    rows: Hu(t.rows, 24, Lg, "clamp", s),
  };
}
class Yye {
  options;
  log;
  terminal;
  scheduleRender;
  isUnmounted = !1;
  layoutListeners = new Set();
  subscribeLayout = (t) => (
    this.layoutListeners.add(t),
    () => {
      this.layoutListeners.delete(t);
    }
  );
  isPaused = !1;
  get isHandedOff() {
    return this.isPaused || this.modes.isSuspended;
  }
  container;
  rootNode;
  focusManager;
  renderer;
  stylePool;
  renderDebug;
  charPool;
  hyperlinkPool;
  exitPromise;
  hasExited = !1;
  exitError;
  restoreConsole;
  restoreStderr;
  nonBlockingStdout = null;
  appRef = vln();
  unsubscribeTTYHandlers;
  terminalColumns;
  terminalRows;
  loggedGarbageWinsize = !1;
  currentNode = null;
  frontFrame;
  backFrame;
  lastPoolResetTime = performance.now();
  lastAtlasResetAt = 0;
  lastStyleLiveSize = 0;
  drainTimer = null;
  lastYogaCounters = { ms: 0, visited: 0, measured: 0, cacheHits: 0, live: 0 };
  layoutFailed = !1;
  consecutiveLayoutFailures = 0;
  layoutFaultDebugLines = 0;
  reportedLayoutFaultMessages = new Set();
  reportedLayoutFaultRecovered = !1;
  reportedLayoutFaultDropped = !1;
  reportedLayoutFaultPersisting = !1;
  altScreenParkPatch;
  selection = gv();
  searchHighlightQuery = "";
  searchPositions = null;
  selectionListeners = new Set();
  frameSink = null;
  hoveredNodes = new Set();
  hasRendered = !1;
  renderCalled = !1;
  isExiting = !1;
  altScreenActive = !1;
  _handoffRawMode = !1;
  altScreenMouseTracking = "off";
  modes = new Uat();
  prevFrameContaminated = !1;
  prevOverlaySig = "";
  needsEraseBeforePaint = !1;
  get altScreenFullRepaint() {
    return a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT;
  }
  bgWorkerForceShowCursor;
  fullRepaintSentinelScreen;
  cursorDeclaration = null;
  displayCursor = null;
  accessibilityMode;
  nativeCursorVisible;
  isScreenReaderEnabled;
  prevScreenReaderLines = [];
  prevScreenReaderPark = { row: 0, col: 0 };
  prevScreenReaderParkDeclared = !1;
  prevScreenReaderAnchor = "clean";
  srStartupQuietTimer = null;
  srPreParkTimer = null;
  srPreParked = !1;
  resetScreenReaderDiffState() {
    ((this.prevScreenReaderLines = []),
      (this.prevScreenReaderPark = { row: 0, col: 0 }),
      (this.prevScreenReaderParkDeclared = !1),
      (this.prevScreenReaderAnchor = "clean"),
      (this.srPreParked = !1));
  }
  constructor(t) {
    this.options = t;
    if (
      (hf(this),
      (this.accessibilityMode = a.CLAUDE_CODE_ACCESSIBILITY),
      (this.bgWorkerForceShowCursor =
        this.altScreenFullRepaint &&
        !this.options.nativeCursor &&
        a.CLAUDE_CODE_SESSION_KIND === "bg" &&
        P() === "windows"),
      (this.nativeCursorVisible = this.accessibilityMode),
      (this.liveCountsEnabled = a.CLAUDE_CODE_BENCH_LIVE_COUNTS),
      (this.isScreenReaderEnabled =
        t.isScreenReaderEnabled ??
        (!!t.stdout.isTTY && Ie(process.env.INK_SCREEN_READER))),
      this.options.patchConsole)
    )
      ((this.restoreConsole = this.patchConsole()),
        (this.restoreStderr = this.patchStderr()));
    if (
      ((this.terminal = {
        stdout: t.stdout,
        stderr: t.stderr,
        tolerateDeadStdout: a.CLAUDE_BG_BACKEND === "daemon",
        stdoutDead: !1,
      }),
      t.stdout === process.stdout && (a.CLAUDE_CODE_NONBLOCKING_STDOUT ?? !1))
    )
      this.nonBlockingStdout = fp(this.handleStdoutBackpressure);
    if (t.stdout === process.stdout) {
      if (t.stdout.isTTY) t.stdout.write("\x1B7" + oB + "\x1B8" + Cv);
    }
    let { cols: s, rows: c } = oDt(t.stdout, this.warnGarbageWinsizeOnce);
    if (
      ((this.terminalColumns = s),
      (this.terminalRows = c),
      (this.altScreenParkPatch = Hg(this.terminalRows)),
      (this.stylePool = new hd()),
      t.atlasRecorder)
    ) {
      let m = this.stylePool.atlasRecorder;
      ((m.recording = t.atlasRecorder.recording),
        (m.autoResetEnabled = t.atlasRecorder.autoResetEnabled));
    }
    ((this.renderDebug = new jd(this.stylePool)),
      (this.charPool = new dd()),
      (this.hyperlinkPool = new pu()),
      (this.frontFrame = Dr(
        this.terminalRows,
        this.terminalColumns,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      (this.backFrame = Dr(
        this.terminalRows,
        this.terminalColumns,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      (this.log = new Yd({
        isTTY: t.stdout.isTTY || !1,
        stylePool: this.stylePool,
      })));
    let f = () => queueMicrotask(this.onRender);
    ((this.scheduleRender = Tp(f, Ev, { leading: !0, trailing: !0 })),
      (this.isUnmounted = !1),
      (this.unsubscribeExit = cz(this.unmount, { alwaysLast: !1 })),
      (this.rootNode = fu("ink-root", tu.Config.create())),
      (this.focusManager = new ytn((m, y) => p4.dispatchDiscrete(m, y))),
      (this.rootNode.focusManager = this.focusManager),
      (this.rootNode.debugRepaints = a.CLAUDE_CODE_DEBUG_REPAINTS),
      (this.renderer = Jd(this.rootNode, this.stylePool)),
      (this.rootNode.onRender = this.scheduleRender),
      (this.rootNode.onImmediateRender = this.onRender),
      (this.rootNode.onComputeLayout = () => {
        if (this.isUnmounted) return;
        if (this.options.stdout.isTTY && this.syncTerminalSize()) {
          let m = this.currentNode;
          if (m !== null)
            queueMicrotask(() => {
              if (!this.isUnmounted) this.render(m);
            });
        }
        if (this.rootNode.yogaNode) this.runLayoutPass(this.rootNode.yogaNode);
        for (let m of this.layoutListeners) m();
      }),
      (this.container = zi.createContainer(
        this.rootNode,
        mf,
        null,
        !1,
        null,
        "id",
        Ere,
        Ere,
        Ere,
        Ere,
      )));
  }
  handleResume = () => {
    if (!this.options.stdout.isTTY) return;
    if ((process.kill(process.pid, "SIGWINCH"), this.altScreenActive)) {
      if (this.modes.isSuspended) {
        (this.resetFramesForAltScreen(), this.scheduleRender());
        return;
      }
      this.reenterAltScreen();
      return;
    }
    ((this.frontFrame = Dr(
      this.frontFrame.viewport.height,
      this.frontFrame.viewport.width,
      this.stylePool,
      this.charPool,
      this.hyperlinkPool,
    )),
      (this.backFrame = Dr(
        this.backFrame.viewport.height,
        this.backFrame.viewport.width,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      this.log.reset(),
      (this.prevFrameContaminated = !0),
      (this.displayCursor = null),
      (this.nativeCursorVisible = this.accessibilityMode),
      this.resetScreenReaderDiffState());
  };
  stdoutSize() {
    return {
      columns: Hu(
        this.options.stdout.columns,
        this.terminalColumns,
        Bg,
        "fallback",
        this.warnGarbageWinsizeOnce,
      ),
      rows: Hu(
        this.options.stdout.rows,
        this.terminalRows,
        Lg,
        "fallback",
        this.warnGarbageWinsizeOnce,
      ),
    };
  }
  warnGarbageWinsizeOnce(t) {
    if (this.loggedGarbageWinsize) return;
    ((this.loggedGarbageWinsize = !0), n(t, { level: "warn" }));
  }
  hasStaleTerminalSize() {
    let { columns: t, rows: s } = this.stdoutSize();
    return t !== this.terminalColumns || s !== this.terminalRows;
  }
  syncTerminalSize() {
    if (!this.hasStaleTerminalSize()) return !1;
    let { columns: t, rows: s } = this.stdoutSize();
    if (
      ((this.terminalColumns = t),
      (this.terminalRows = s),
      (this.altScreenParkPatch = Hg(this.terminalRows)),
      this.resetScreenReaderDiffState(),
      this.altScreenActive && !this.isHandedOff && this.options.stdout.isTTY)
    ) {
      if (this.altScreenMouseTracking !== "off")
        this.options.stdout.write(O9e(this.altScreenMouseTracking));
      (this.resetFramesForAltScreen(), (this.needsEraseBeforePaint = !0));
    }
    return !0;
  }
  handleResize = () => {
    if (!this.syncTerminalSize()) return;
    if (this.currentNode !== null) this.render(this.currentNode);
  };
  resolveExitPromise = () => {
    this.exitPromise ??= Promise.resolve();
  };
  rejectExitPromise = (t) => {
    if (this.exitPromise === void 0)
      ((this.exitPromise = Promise.reject(t)),
        this.exitPromise.catch(() => {}));
  };
  unsubscribeExit = () => {};
  enterAlternateScreen() {
    (this.pause(),
      this.options.stdout.write(
        this.modes.suspend("altScreen") +
          (this.altScreenActive ? "" : z0e + rz) +
          "\x1B[0m\x1B[?25h\x1B[2J\x1B[H",
      ),
      this.nonBlockingStdout?.flush(),
      this.suspendStdin());
  }
  exitAlternateScreen() {
    this.resumeStdin();
    let t =
      this.altScreenActive ||
      !(this.accessibilityMode || this.isScreenReaderEnabled);
    if (
      (this.options.stdout.write(
        (this.altScreenActive ? "" : V0e) +
          (t ? vv : "") +
          this.modes.resume({ clearKeys: !0 }),
      ),
      this.altScreenActive)
    )
      this.resetFramesForAltScreen();
    else if (!this.isScreenReaderEnabled) this.repaint();
    this.resume();
  }
  prepareTerminalForHandoff() {
    (this.pause(),
      this.options.stdout.write(
        (this.altScreenMouseTracking !== "off" ? s7 : "") + q0e,
      ),
      this.nonBlockingStdout?.flush(),
      this.suspendStdin());
  }
  restoreTerminalAfterHandoff() {
    (this.resumeStdin(),
      this.options.stdout.write(O9e(this.altScreenMouseTracking) + Wat),
      this.resume());
  }
  ensureInteractive = () => {
    if (this.unsubscribeTTYHandlers || !this.options.stdout.isTTY) return;
    if (!this.accessibilityMode && !this.isScreenReaderEnabled)
      this.options.stdout.write(vv);
    (this.options.stdout.on("resize", this.handleResize),
      process.on("SIGCONT", this.handleResume),
      (this.unsubscribeTTYHandlers = () => {
        (this.options.stdout.off("resize", this.handleResize),
          process.off("SIGCONT", this.handleResume));
      }));
  };
  skipSyncMarkers() {
    if (!this.options.stdout.isTTY) return !0;
    if (!lO()) return !0;
    if (!this.unsubscribeTTYHandlers) return !0;
    return !1;
  }
  runLayoutPass(t) {
    try {
      (this.calculateYogaLayout(t),
        (this.layoutFailed = !1),
        (this.consecutiveLayoutFailures = 0));
    } catch (s) {
      let c = this.relayoutFromScratch(t);
      ((this.layoutFailed = !c.recovered),
        (this.consecutiveLayoutFailures = c.recovered
          ? 0
          : this.consecutiveLayoutFailures + 1));
      let f = Yye.describeLayoutFault(s),
        m = c.recovered ? void 0 : Yye.describeLayoutFault(c.retryFault);
      (this.reportLayoutFaultToErrorTracking(f, m),
        this.logLayoutFaultForDebugging(f, m));
    }
  }
  calculateYogaLayout(t) {
    let s = performance.now();
    if (this.options.stdout.isTTY || this.options.stdout.columns)
      (t.setWidth(this.terminalColumns),
        t.calculateLayout(this.terminalColumns));
    else if ((t.setWidthAuto(), t.calculateLayout(), t.getComputedWidth() > wu))
      (t.setWidth(wu), t.calculateLayout(wu));
    let c = performance.now() - s,
      f = Qp(t);
    this.lastYogaCounters = { ms: c, ...f };
  }
  relayoutFromScratch(t) {
    try {
      return (
        t.clearLayoutCacheRecursive(),
        this.calculateYogaLayout(t),
        { recovered: !0 }
      );
    } catch (s) {
      try {
        t.clearLayoutCacheRecursive();
      } catch {}
      return { recovered: !1, retryFault: s };
    }
  }
  retryFailedLayout() {
    let t = this.rootNode.yogaNode;
    if (!t || !this.relayoutFromScratch(t).recovered) return !1;
    return ((this.layoutFailed = !1), (this.consecutiveLayoutFailures = 0), !0);
  }
  static describeLayoutFault(t) {
    try {
      let s = ge(t);
      if (typeof s.message === "string" && typeof s.name === "string") return s;
    } catch {}
    return new R("ink layout pass threw a value that cannot be described");
  }
  reportLayoutFaultToErrorTracking(t, s) {
    try {
      if ((this.reportLayoutFaultErrorOnce(t), s === void 0)) {
        if (!this.reportedLayoutFaultRecovered)
          ((this.reportedLayoutFaultRecovered = !0),
            this.reportLayoutFaultRecovered());
        return;
      }
      if (
        (this.reportLayoutFaultErrorOnce(s), !this.reportedLayoutFaultDropped)
      )
        ((this.reportedLayoutFaultDropped = !0),
          this.reportLayoutFaultDropped());
      if (
        !this.reportedLayoutFaultPersisting &&
        this.consecutiveLayoutFailures >= Lx
      )
        ((this.reportedLayoutFaultPersisting = !0),
          this.reportLayoutFaultPersisting());
    } catch {}
  }
  reportLayoutFaultErrorOnce(t) {
    let s = this.reportedLayoutFaultMessages;
    if (s.has(t.message) || s.size >= Bx) return;
    (s.add(t.message), h(t));
  }
  reportLayoutFaultRecovered() {
    h(new R("ink layout pass threw; recovered by immediate re-layout"));
  }
  reportLayoutFaultDropped() {
    h(
      new R(
        "ink layout pass threw; immediate re-layout also threw, frame dropped",
      ),
    );
  }
  reportLayoutFaultPersisting() {
    h(
      new R(
        "ink layout pass still throwing after many consecutive commits, frames dropped",
      ),
    );
  }
  logLayoutFaultForDebugging(t, s) {
    try {
      if (this.layoutFaultDebugLines >= Dg) return;
      this.layoutFaultDebugLines++;
      let c =
          s === void 0
            ? "recovered by immediate re-layout"
            : `immediate re-layout also threw (${s.name}: ${s.message}); frame dropped`,
        f =
          this.layoutFaultDebugLines >= Dg
            ? " \u2014 further layout faults in this session are not logged"
            : "";
      n(`ink layout pass threw (${c}): ${t.name}: ${t.message}${f}`, {
        level: "warn",
      });
    } catch {}
  }
  onRender() {
    if (this.isUnmounted || this.isHandedOff) return;
    if (this.hasRendered && !this.isExiting) this.ensureInteractive();
    if (((this.hasRendered = !0), this.drainTimer !== null))
      (clearTimeout(this.drainTimer), (this.drainTimer = null));
    if ((Az(), this.isScreenReaderEnabled)) {
      this.onRenderScreenReader();
      return;
    }
    if (this.layoutFailed && !this.retryFailedLayout()) return;
    let t = performance.now(),
      { columns: s, rows: c } = this.stdoutSize(),
      { anchor: f, focus: m } = this.selection,
      y = this.searchPositions,
      b = `${f?.row},${f?.col},${m?.row},${m?.col}|${this.searchHighlightQuery}|${y?.currentIdx},${y?.rowOffset},${y?.positions.length}`,
      S = this.prevFrameContaminated || b !== this.prevOverlaySig;
    this.prevOverlaySig = b;
    let E =
        (f !== null && m !== null && !Kye(this.selection)) ||
        !!this.searchHighlightQuery ||
        !!y,
      x = this.renderer({
        frontFrame: this.frontFrame,
        backFrame: this.backFrame,
        isTTY: this.options.stdout.isTTY,
        terminalWidth: s,
        terminalRows: c,
        altScreen: this.altScreenActive,
        prevFrameContaminated: S,
        overlayActive: E,
      }),
      C = performance.now() - t;
    if (this.frameSink) {
      let he = this.frameSink(x, this.stylePool);
      if (he) {
        if (
          ((this.backFrame = this.frontFrame),
          (this.frontFrame = x),
          (this.prevFrameContaminated = !1),
          this.maybeResetPools(t),
          he === "tick")
        )
          this.drainTimer = setTimeout(() => this.onRender(), Ev >> 2);
        this.options.onFrame?.({
          durationMs: performance.now() - t,
          flickers: [],
        });
        return;
      }
    }
    let D = x.followScroll ?? null;
    if (
      D &&
      this.selection.anchor &&
      this.selection.anchor.row >= D.viewportTop &&
      this.selection.anchor.row <= D.viewportBottom &&
      (this.selection.virtualAnchorCol ?? this.selection.anchor.col) >=
        D.viewportLeft &&
      (this.selection.virtualAnchorCol ?? this.selection.anchor.col) <=
        D.viewportRight
    ) {
      let { delta: he, viewportTop: Se, viewportBottom: Ee } = D,
        Ue = he > 0 ? Se : Ee + he + 1,
        ke = he > 0 ? Se + he - 1 : Ee,
        et = he > 0 ? "above" : "below";
      if (this.selection.isDragging) {
        if (pi(this.selection))
          Rd(this.selection, this.frontFrame.screen, Ue, ke, et);
        Ov(this.selection, -he, Se, Ee);
      } else if (
        !this.selection.focus ||
        (this.selection.focus.row >= Se &&
          this.selection.focus.row <= Ee &&
          (this.selection.virtualFocusCol ?? this.selection.focus.col) >=
            D.viewportLeft &&
          (this.selection.virtualFocusCol ?? this.selection.focus.col) <=
            D.viewportRight)
      ) {
        if (pi(this.selection))
          Rd(this.selection, this.frontFrame.screen, Ue, ke, et);
        Dv(this.selection, -he, Se, Ee, this.frontFrame.screen.width);
      }
    }
    let N = !1,
      T = !1;
    if (this.altScreenActive) {
      if (((N = pi(this.selection) && !Kye(this.selection)), N))
        Bv(x.screen, this.selection, this.stylePool);
      if (
        ((T = Ag(x.screen, this.searchHighlightQuery, this.stylePool)),
        this.searchPositions)
      ) {
        let he = this.searchPositions,
          Se = Ng(
            x.screen,
            this.stylePool,
            he.positions,
            he.rowOffset,
            he.currentIdx,
          );
        T = T || Se;
      }
    }
    if (
      x.layoutShifted ||
      N ||
      T ||
      S ||
      (this.altScreenFullRepaint && this.altScreenActive)
    )
      x.screen.damage = {
        x: 0,
        y: 0,
        width: x.screen.width,
        height: x.screen.height,
      };
    let L = this.frontFrame;
    if (this.altScreenActive) {
      if (
        ((L = { ...this.frontFrame, cursor: Ux }), this.altScreenFullRepaint)
      ) {
        let { width: he, height: Se } = this.frontFrame.screen;
        if (
          this.fullRepaintSentinelScreen?.width !== he ||
          this.fullRepaintSentinelScreen.height !== Se
        )
          ((this.fullRepaintSentinelScreen = o7(
            he,
            Se,
            this.stylePool,
            this.charPool,
            this.hyperlinkPool,
          )),
            iv(this.fullRepaintSentinelScreen));
        L = { ...L, screen: this.fullRepaintSentinelScreen };
      }
    }
    let O = performance.now(),
      z = this.log.render(
        L,
        x,
        this.altScreenActive,
        uDt && !this.altScreenFullRepaint,
      ),
      W = performance.now() - O;
    ((this.backFrame = this.frontFrame), (this.frontFrame = x));
    let Y = [];
    for (let he of z)
      if (he.type === "clearTerminal") {
        if (
          (Y.push({
            desiredHeight: x.screen.height,
            availableHeight: x.viewport.height,
            reason: he.reason,
          }),
          this.rootNode.debugRepaints && he.debug)
        ) {
          let Se = Ky(this.rootNode, he.debug.triggerY);
          n(
            `[REPAINT] full reset \xB7 ${he.reason} \xB7 row ${he.debug.triggerY}
  prev: "${he.debug.prevLine}"
  next: "${he.debug.nextLine}"
  culprit: ${Se.length ? Se.join(" < ") : "(no owner chain captured)"}`,
            { level: "warn" },
          );
        }
      }
    let X = performance.now(),
      U = kd(z),
      k = performance.now() - X,
      Z = U.length > 0;
    if (this.altScreenActive && Z) {
      if (this.needsEraseBeforePaint)
        ((this.needsEraseBeforePaint = !1), U.unshift(Px));
      else U.unshift(Fx);
      U.push(this.altScreenParkPatch);
    }
    let J = this.cursorDeclaration,
      re = J !== null ? J.node.cachedLayout : void 0,
      Q =
        J !== null && re !== void 0
          ? { x: re.x + J.relativeX, y: re.y + J.relativeY }
          : null,
      ce = this.displayCursor,
      le = Q !== null && (ce === null || ce.x !== Q.x || ce.y !== Q.y),
      oe =
        this.options.nativeCursor &&
        Q !== null &&
        J !== null &&
        (J.visible || this.accessibilityMode) !== this.nativeCursorVisible;
    if (Z || le || oe || (Q === null && ce !== null)) {
      let he = c - 1,
        Se = (Ee) => Math.max(-he, Math.min(he, Ee));
      if (ce !== null && !this.altScreenActive && Z) {
        let Ee = L.cursor.x - ce.x,
          Ue = Se(L.cursor.y - ce.y);
        if (Ee !== 0 || Ue !== 0)
          U.unshift({ type: "stdout", content: fW(Ee, Ue) });
      }
      if (Q !== null) {
        if (this.altScreenActive) {
          let Ee = Math.min(Math.max(Q.y + 1, 1), c),
            Ue = Math.min(Math.max(Q.x + 1, 1), s);
          U.push({ type: "stdout", content: $P(Ee, Ue) });
        } else {
          let Ee = !Z && ce !== null ? ce : { x: x.cursor.x, y: x.cursor.y },
            Ue = Q.x - Ee.x,
            ke = Se(Q.y - Ee.y);
          if (Ue !== 0 || ke !== 0)
            U.push({ type: "stdout", content: fW(Ue, ke) });
        }
        if (
          ((this.displayCursor = { ...Q, emittedRows: c }),
          this.options.nativeCursor || this.bgWorkerForceShowCursor)
        ) {
          let Ee =
            this.bgWorkerForceShowCursor ||
            (J !== null && J.visible) ||
            this.accessibilityMode;
          if (this.nativeCursorVisible) U.unshift({ type: "cursorHide" });
          if (Ee) U.push({ type: "cursorShow" });
          this.nativeCursorVisible = Ee;
        }
      } else {
        if (ce !== null && !this.altScreenActive && !Z) {
          let Ee = x.cursor.x - ce.x,
            Ue = Se(x.cursor.y - ce.y);
          if (Ee !== 0 || Ue !== 0)
            U.push({ type: "stdout", content: fW(Ee, Ue) });
        }
        if (
          ((this.displayCursor = null),
          (this.options.nativeCursor || this.bgWorkerForceShowCursor) &&
            this.nativeCursorVisible &&
            !this.accessibilityMode)
        )
          (U.unshift({ type: "cursorHide" }), (this.nativeCursorVisible = !1));
      }
    }
    if (Z) this.maybeProactiveAtlasReset(U);
    let fe = performance.now();
    Ltn(this.terminal, U, this.skipSyncMarkers(), c);
    let ue = performance.now() - fe;
    if (
      (this.maybeResetPools(t),
      (this.prevFrameContaminated = !1),
      x.scrollDrainPending)
    )
      this.drainTimer = setTimeout(() => this.onRender(), Ev >> 2);
    let se = this.rootNode.lastCommitMs ?? 0,
      ve = this.lastYogaCounters;
    ((this.rootNode.lastCommitMs = 0),
      (this.rootNode.scrollCommitStartedAt = void 0),
      (this.lastYogaCounters = {
        ms: 0,
        visited: 0,
        measured: 0,
        cacheHits: 0,
        live: 0,
      }),
      this.options.onFrame?.({
        durationMs: performance.now() - t,
        phases: {
          renderer: C,
          diff: W,
          optimize: k,
          write: ue,
          patches: z.length,
          yoga: ve.ms,
          commit: se,
          yogaVisited: ve.visited,
          yogaMeasured: ve.measured,
          yogaCacheHits: ve.cacheHits,
          yogaLive: ve.live,
          ...(this.liveCountsEnabled &&
            this.shouldSampleLiveCounts() && {
              domLive: eg(this.rootNode),
              fiberLive: $v(this.container.current),
            }),
        },
        flickers: Y,
        front: {
          screen: this.frontFrame.screen,
          altScreen: this.altScreenActive,
          viewport: this.frontFrame.viewport,
          cursor: this.frontFrame.cursor,
          parked: this.displayCursor,
        },
      }));
  }
  static LIVE_COUNTS_INTERVAL_MS = 100;
  liveCountsEnabled;
  lastLiveCountSampleAt = 0;
  shouldSampleLiveCounts() {
    let t = performance.now();
    if (t - this.lastLiveCountSampleAt < Yye.LIVE_COUNTS_INTERVAL_MS) return !1;
    return ((this.lastLiveCountSampleAt = t), !0);
  }
  onRenderScreenReader() {
    if (!this.isExiting) {
      let le = Isr();
      if (le > 0) {
        if (this.srStartupQuietTimer === null)
          this.srStartupQuietTimer = setTimeout(() => {
            ((this.srStartupQuietTimer = null), n5t(), this.onRender());
          }, le);
        return;
      }
    }
    if (this.srPreParkTimer !== null) {
      if (!this.isExiting) return;
      (clearTimeout(this.srPreParkTimer), (this.srPreParkTimer = null));
    }
    let { text: t, preserveRanges: s } = $a(this.rootNode),
      { columns: c } = this.stdoutSize(),
      f = [];
    for (let [le, oe] of [...s].sort((fe, ue) => fe[0] - ue[0])) {
      let fe = f.at(-1);
      if (fe !== void 0 && le <= fe[1]) fe[1] = Math.max(fe[1], oe);
      else f.push([le, oe]);
    }
    let m =
        t === ""
          ? []
          : t.split(`
`),
      y = [],
      b = [],
      S = 0;
    for (let le of m) {
      let oe = S + le.length,
        ue =
          S + le.trimEnd().length < oe &&
          f.some(([se, ve]) => se < oe && oe <= ve);
      if ((b.push(y.length), le === "")) y.push("");
      else {
        let se = dp(le, c, { trim: !1, hard: !0 }).split(`
`);
        for (let ve = 0; ve < se.length; ve++) {
          let he = se[ve];
          y.push(ue && ve === se.length - 1 ? he : he.trimEnd());
        }
      }
      S = oe + 1;
    }
    let E = this.computeScreenReaderPark(t, b, y, c),
      x = -1;
    for (let le of Dsr()) {
      let oe = Du(le);
      if (oe === "") continue;
      for (let fe of oe.split(`
`)) {
        if (x === -1) x = y.length;
        if (fe === "") y.push("");
        else {
          let ue = dp(fe, c, { trim: !1, hard: !0 });
          for (let se of ue.split(`
`))
            y.push(se.trimEnd());
        }
      }
    }
    let C = this.prevScreenReaderLines,
      D = Math.max(0, y.length - 1),
      N = E ?? { row: D, col: te(y[D] ?? "") },
      T = 0,
      L = Math.min(C.length, y.length);
    while (T < L && C[T] === y[T]) T++;
    if (x !== -1 && T > x) T = x;
    let O = T === C.length && T === y.length,
      z = this.prevScreenReaderPark,
      W = N.row === z.row && N.col === z.col;
    if (O && W) {
      if (this.srPreParked)
        ((this.srPreParked = !1), this.options.stdout.write(Bie(N.col + 1)));
      this.prevScreenReaderParkDeclared = E !== null;
      return;
    }
    if (
      !O &&
      x === -1 &&
      !this.srPreParked &&
      (this.prevScreenReaderAnchor === "clean" ||
        (this.prevScreenReaderAnchor === "lastRowAnchored" &&
          T === C.length - 1 &&
          z.row === T &&
          N.row === T)) &&
      C.length === y.length &&
      T >= C.length - this.terminalRows &&
      z.row >= C.length - this.terminalRows &&
      y[T].startsWith(C[T]) &&
      !y[T].includes("\t")
    ) {
      let le = !0;
      for (let se = T + 1; se < C.length; se++)
        if (C[se] !== y[se]) {
          le = !1;
          break;
        }
      let oe = le ? y[T].slice(C[T].length) : "",
        fe = oe === "" ? 0 : te(C[T]);
      if (
        oe !== "" &&
        te(String.fromCodePoint(oe.codePointAt(0))) > 0 &&
        fe + te(oe) === te(y[T]) &&
        wg(y[T], C[T].length)
      ) {
        let se = (T !== z.row ? fW(0, T - z.row) : "") + Bie(fe + 1),
          ve = Bie(N.col + 1) + (N.row !== T ? fW(0, N.row - T) : "");
        (this.writeContent(se + oe + ve),
          (this.prevScreenReaderLines = y),
          (this.prevScreenReaderPark = N),
          (this.prevScreenReaderParkDeclared = E !== null));
        return;
      }
    }
    if (
      !O &&
      x === -1 &&
      !this.srPreParked &&
      (this.prevScreenReaderAnchor === "clean" ||
        (this.prevScreenReaderAnchor === "lastRowAnchored" &&
          T === C.length - 1 &&
          z.row === T &&
          N.row === T)) &&
      C.length === y.length &&
      T >= C.length - this.terminalRows &&
      C[T].startsWith(y[T]) &&
      !C[T].includes("\t")
    ) {
      let le = !0;
      for (let se = T + 1; se < C.length; se++)
        if (C[se] !== y[se]) {
          le = !1;
          break;
        }
      let oe = le ? C[T].slice(y[T].length) : "",
        fe = oe === "" ? 0 : te(y[T]);
      if (
        oe !== "" &&
        te(String.fromCodePoint(oe.codePointAt(0))) > 0 &&
        fe + te(oe) === te(C[T]) &&
        wg(C[T], y[T].length) &&
        (!/\s/.test(oe) || /^\s+$/.test(oe)) &&
        E !== null &&
        this.prevScreenReaderParkDeclared &&
        z.row === T &&
        z.col === te(C[T])
      ) {
        let se = Bie(fe + 1),
          ve = Bie(N.col + 1) + (N.row !== T ? fW(0, N.row - T) : "");
        (this.writeContent(se + q7t() + ve),
          (this.prevScreenReaderLines = y),
          (this.prevScreenReaderPark = N),
          (this.prevScreenReaderParkDeclared = E !== null));
        return;
      }
    }
    if (!this.isExiting && !O && x === -1 && !this.srPreParked) {
      let le = Psr();
      if (le > 0) {
        (this.options.stdout.write(nPn),
          (this.srPreParked = !0),
          (this.srPreParkTimer = setTimeout(() => {
            ((this.srPreParkTimer = null), this.onRender());
          }, le)));
        return;
      }
    }
    let Y = Math.max(0, C.length - 1),
      X = z.row !== Y ? fW(0, Y - z.row) : "",
      U = C.length - this.terminalRows,
      k = T === y.length && T > 0,
      Z = (U > T && U >= y.length) || (k && U === T);
    if (U > T && U < y.length) T = U;
    let J = lxt(C.length - T),
      re = y.slice(T).join(`
`),
      Q;
    if (O) Q = "";
    else if (T === C.length)
      Q =
        T > 0
          ? `
${re}`
          : re;
    else if (T === y.length) Q = T > 0 ? J + fW(0, -1) : J;
    else Q = J + re;
    let ce = Bie(N.col + 1) + (N.row !== D ? fW(0, N.row - D) : "");
    if (
      (this.writeContent(X + Q + ce),
      (this.prevScreenReaderLines = y),
      (this.prevScreenReaderPark = N),
      (this.prevScreenReaderParkDeclared = E !== null),
      (this.srPreParked = !1),
      !O)
    ) {
      let le = y.length - T,
        oe = N.row === y.length - 1,
        fe = y.length < C.length,
        ue = C.length <= this.terminalRows;
      if (Z) this.prevScreenReaderAnchor = "broken";
      else if (le >= Math.min(y.length, this.terminalRows))
        this.prevScreenReaderAnchor = "clean";
      else if (le > 0) {
        if (this.prevScreenReaderAnchor === "broken")
          this.prevScreenReaderAnchor = oe ? "lastRowAnchored" : "broken";
        else if (this.prevScreenReaderAnchor === "lastRowAnchored") {
          if (!oe) this.prevScreenReaderAnchor = "broken";
        } else if (fe && !ue)
          this.prevScreenReaderAnchor = oe ? "lastRowAnchored" : "broken";
      } else if (this.prevScreenReaderAnchor === "lastRowAnchored")
        this.prevScreenReaderAnchor = "broken";
      else if (fe && this.prevScreenReaderAnchor === "clean" && !ue)
        this.prevScreenReaderAnchor = oe ? "lastRowAnchored" : "broken";
    } else if (
      this.prevScreenReaderAnchor === "lastRowAnchored" &&
      (z.row !== Math.max(0, C.length - 1) || N.row !== D)
    )
      this.prevScreenReaderAnchor = "broken";
  }
  computeScreenReaderPark(t, s, c, f) {
    let m = this.cursorDeclaration;
    if (m === null) return null;
    let y = Id(this.rootNode, m.node);
    if (y === null) return null;
    let b = t.slice(0, y),
      E =
        ln(
          b,
          `
`,
        ) + m.relativeY;
    if (E < 0 || E >= s.length) return null;
    let x =
        b.lastIndexOf(`
`) + 1,
      D = (m.relativeY === 0 ? te(t.slice(x, y)) : 0) + m.relativeX,
      N = f > 0 ? Math.floor(D / f) : 0,
      T = Math.min(s[E] + N, c.length - 1),
      L = f > 0 ? D % f : D;
    return { row: Math.max(0, T), col: Math.max(0, L) };
  }
  pause() {
    (zi.flushSyncFromReconciler(), this.onRender(), (this.isPaused = !0));
  }
  resume() {
    ((this.isPaused = !1), this.onRender());
  }
  repaint() {
    ((this.frontFrame = Dr(
      this.frontFrame.viewport.height,
      this.frontFrame.viewport.width,
      this.stylePool,
      this.charPool,
      this.hyperlinkPool,
    )),
      (this.backFrame = Dr(
        this.backFrame.viewport.height,
        this.backFrame.viewport.width,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      this.log.reset(),
      (this.displayCursor = null),
      (this.prevFrameContaminated = !0),
      this.resetScreenReaderDiffState());
  }
  emitAtlasReset(t) {
    if (t) t.unshift({ type: "stdout", content: Og });
    else this.options.stdout.write(Og);
    (this.stylePool.atlasRecorder.reset(),
      (this.lastAtlasResetAt = performance.now()));
  }
  maybeProactiveAtlasReset(t) {
    let s = this.stylePool.atlasRecorder;
    if (!s.autoResetEnabled) return;
    if (this.renderDebug.stressing) return;
    if (s.size < Yx) return;
    if (
      !this.renderDebug.isBoxOpen() &&
      performance.now() - this.lastAtlasResetAt < kx
    )
      return;
    if (!Zd()) return;
    (this.emitAtlasReset(t), s.recordProactiveReset("delta"));
  }
  proactiveAtlasResetOnFocus() {
    let t = this.stylePool.atlasRecorder;
    if (
      t.autoResetEnabled &&
      !this.renderDebug.stressing &&
      this.options.stdout.isTTY &&
      !this.isUnmounted &&
      !this.isHandedOff &&
      Zd()
    )
      (this.emitAtlasReset(), t.recordProactiveReset("focus"));
  }
  forceRedraw(t) {
    if (!this.options.stdout.isTTY || this.isUnmounted || this.isHandedOff)
      return !1;
    if (t?.flushReact) zi.flushSyncFromReconciler();
    if (Zd()) this.emitAtlasReset();
    if (this.hasStaleTerminalSize()) return (this.handleResize(), !0);
    if (this.altScreenActive)
      ((this.needsEraseBeforePaint = !0),
        (this.displayCursor = null),
        this.resetFramesForAltScreen());
    else (this.log.forceFullReset(), (this.prevFrameContaminated = !0));
    return (this.resetScreenReaderDiffState(), this.onRender(), !0);
  }
  async probeExternalClear(t) {
    if (!this.altScreenActive || this.isHandedOff || this.isUnmounted)
      return !1;
    let s = this.displayCursor;
    if (!s) return !1;
    let c = (y) =>
      Math.min(Math.max(y.y + 1, 1), this.stdoutSize().rows, y.emittedRows);
    if (c(s) <= 1) return !1;
    let f = await t.send(zx);
    if (f?.row !== 1) return !1;
    let m = this.displayCursor;
    if (m === null || c(m) <= 1) return !1;
    return (
      n(
        `probeExternalClear: detected wipe (parked at y=${m.y}, sent at y=${s.y}, terminal reports row=1 col=${f.col})`,
      ),
      this.forceRedraw(),
      !0
    );
  }
  invalidatePrevFrame() {
    this.prevFrameContaminated = !0;
  }
  setAltScreenActive(t, s = "off") {
    if (this.altScreenActive === t) return;
    if (
      ((this.altScreenActive = t),
      (this.altScreenMouseTracking = t ? s : "off"),
      t)
    )
      (this.ensureInteractive(), this.resetFramesForAltScreen());
    else this.repaint();
  }
  get isAltScreenActive() {
    return this.altScreenActive;
  }
  get terminalSize() {
    return { columns: this.terminalColumns, rows: this.terminalRows };
  }
  getMouseMode = () => this.altScreenMouseTracking;
  handoffAltScreen() {
    ((this.isPaused = !0),
      (this.altScreenActive = !1),
      this.modes.reset("altScreen"),
      this.modes.reset("background"));
  }
  get lastFrameFillsCurrentViewport() {
    let t = oDt(this.options.stdout, this.warnGarbageWinsizeOnce);
    return (
      this.frontFrame.screen.height > 0 &&
      Qa(this.frontFrame) &&
      this.frontFrame.viewport.height === t.rows &&
      this.frontFrame.viewport.width === t.cols
    );
  }
  handoffRawMode() {
    this._handoffRawMode = !0;
  }
  get isHandoffRawMode() {
    return this._handoffRawMode;
  }
  get hasUnmounted() {
    return this.isUnmounted;
  }
  get domRoot() {
    return this.rootNode;
  }
  getStylePool() {
    return this.stylePool;
  }
  getCharPool() {
    return this.charPool;
  }
  getHyperlinkPool() {
    return this.hyperlinkPool;
  }
  takeSlowestFrameWrite() {
    let t = this.terminal.slowestWrite;
    return ((this.terminal.slowestWrite = void 0), t);
  }
  writeContent(t) {
    Dtn(this.terminal, t);
  }
  recordContentWrite = (t, s) => {
    dDt(this.terminal, t, s);
  };
  handleStdoutBackpressure = (t) => {
    if (t.droppedBytes > 0) {
      let s = t.endedBy === "drain";
      if ((this.appRef.current?.querier?.resync({ probe: s }), s))
        (this.reassertTerminalModes(), this.forceRedraw());
      else this.repaint();
    }
    if (t.droppedBytes > 0 || t.durationMs >= 1000)
      i("tengu_stdout_backpressure", {
        duration_ms: t.durationMs,
        peak_queued_bytes: t.peakQueuedBytes,
        dropped_bytes: t.droppedBytes,
      });
  };
  reassertTerminalModes = (t = !1) => {
    if (!this.options.stdout.isTTY) return;
    if (this.isHandedOff || this.isUnmounted) return;
    if (
      (this.options.stdout.write(
        G7t +
          this.modes.reassert("extendedKeys") +
          this.modes.reassert("mouse"),
      ),
      t && this.altScreenActive)
    )
      this.reenterAltScreen();
  };
  detachForShutdown() {
    if (
      (this.nonBlockingStdout?.flush(),
      !this.isUnmounted &&
        !this.altScreenActive &&
        this.displayCursor !== null &&
        this.options.stdout.isTTY)
    ) {
      let s = this.frontFrame.cursor.x - this.displayCursor.x,
        c = this.frontFrame.cursor.y - this.displayCursor.y;
      if (s !== 0 || c !== 0) $d(1, fW(s, c));
      this.displayCursor = null;
    }
    ((this.isUnmounted = !0),
      this.scheduleRender.cancel?.(),
      this.unsubscribeTTYHandlers?.());
    let t = this.options.stdin;
    if ((this.drainStdin(), t.isTTY && t.isRaw)) Jw(t, !1);
    for (let s of new Set([t, process.stdin]))
      (s.removeAllListeners("readable"),
        s.removeAllListeners("data"),
        s.removeAllListeners("keypress"),
        s.pause(),
        s.unref?.());
  }
  drainStdin() {
    return B0e(this.options.stdin);
  }
  reenterAltScreen() {
    (this.options.stdout.write(this.modes.reassertFrom("altScreen")),
      this.resetFramesForAltScreen(),
      this.onRender());
  }
  resetFramesForAltScreen() {
    let t = this.terminalRows,
      s = this.terminalColumns,
      c = () => ({
        screen: o7(s, t, this.stylePool, this.charPool, this.hyperlinkPool),
        viewport: { width: s, height: t + 1 },
        cursor: { x: 0, y: 0, visible: !0 },
      });
    ((this.frontFrame = c()),
      (this.backFrame = c()),
      this.log.reset(),
      (this.displayCursor = null),
      (this.prevFrameContaminated = !0));
  }
  getSelectedText() {
    if (!pi(this.selection)) return "";
    return Hv(this.selection, this.frontFrame.screen);
  }
  copySelectionNoClear() {
    let t = this.getSelectedText();
    if (t)
      z_(t).then((s) => {
        if (s) this.options.stdout.write(s);
      });
    return t;
  }
  copySelection() {
    if (!pi(this.selection)) return "";
    let t = this.copySelectionNoClear();
    return (Va(this.selection), this.notifySelectionChange(), t);
  }
  clearTextSelection() {
    if (!pi(this.selection)) return;
    (Va(this.selection), this.notifySelectionChange());
  }
  setSearchHighlight(t) {
    if (this.searchHighlightQuery === t) return;
    ((this.searchHighlightQuery = t), this.scheduleRender());
  }
  scanElementSubtree(t) {
    if (!this.searchHighlightQuery || !t.yogaNode) return [];
    let s = Math.ceil(t.yogaNode.getComputedWidth()),
      c = Math.ceil(t.yogaNode.getComputedHeight());
    if (s <= 0 || c <= 0) return [];
    let f = t.yogaNode.getComputedLeft(),
      m = t.yogaNode.getComputedTop(),
      y = o7(s, c, this.stylePool, this.charPool, this.hyperlinkPool),
      b = new Xye({
        width: s,
        height: c,
        stylePool: this.stylePool,
        screen: y,
      });
    x9e(t, b, k9e(), { offsetX: -f, offsetY: -m, prevScreen: void 0 });
    let S = b.get();
    GA(t);
    let E = Tg(S, this.searchHighlightQuery);
    return (
      n(
        `scanElementSubtree: q='${this.searchHighlightQuery}' el=${s}x${c}@(${f},${m}) n=${E.length} [${E.slice(
          0,
          10,
        )
          .map((x) => `${x.row}:${x.col}`)
          .join(",")}${E.length > 10 ? ",\u2026" : ""}]`,
      ),
      E
    );
  }
  setSearchPositions(t) {
    ((this.searchPositions = t), this.scheduleRender());
  }
  setSelectionBgColor(t) {
    let s = iK("\x00", t, "background"),
      c = s.indexOf("\x00");
    if (c <= 0 || c === s.length - 1) {
      this.stylePool.setSelectionBg(null);
      return;
    }
    this.stylePool.setSelectionBg({
      type: "ansi",
      code: s.slice(0, c),
      endCode: s.slice(c + 1),
    });
  }
  moveSelectionFocus(t) {
    if (!this.altScreenActive) return;
    let { focus: s, scope: c } = this.selection;
    if (!s) return;
    let { width: f, height: m } = this.frontFrame.screen,
      y = c ? c.x1 : 0,
      b = (c ? Math.min(c.x2, f) : f) - 1,
      S = m - 1,
      { col: E, row: x } = s;
    switch (t) {
      case "left":
        if (E > y) E--;
        else if (x > 0) ((E = b), x--);
        break;
      case "right":
        if (E < b) E++;
        else if (x < S) ((E = y), x++);
        break;
      case "up":
        if (x > 0) x--;
        break;
      case "down":
        if (x < S) x++;
        break;
      case "lineStart":
        E = y;
        break;
      case "lineEnd":
        E = b;
        break;
    }
    if (E === s.col && x === s.row) return;
    (_v(this.selection, E, x), this.notifySelectionChange());
  }
  hasTextSelection() {
    return pi(this.selection);
  }
  subscribeToSelectionChange(t) {
    return (
      this.selectionListeners.add(t),
      () => this.selectionListeners.delete(t)
    );
  }
  notifySelectionChange() {
    this.scheduleRender();
    for (let t of this.selectionListeners) t();
  }
  dispatchClick(t, s) {
    return this.dispatchMouseClick(t, s, !1) !== "unhandled";
  }
  dispatchMouseClick(t, s, c) {
    if (!this.altScreenActive) return "unhandled";
    let f = Nr(this.frontFrame.screen, t, s),
      m = this.getHyperlinkAt(t, s),
      y = new tDt(t, s, f, m, c),
      b = Iv(this.rootNode, y);
    if (y.droppedAsStray) return "stray";
    return b ? "handled" : "unhandled";
  }
  dispatchHover(t, s) {
    if (!this.altScreenActive) return;
    let c = Nr(this.frontFrame.screen, t, s);
    Jv(this.rootNode, t, s, this.hoveredNodes, c);
  }
  dispatchPasteEvent(t) {
    let s = this.focusManager.activeElement ?? this.rootNode;
    p4.dispatchDiscrete(s, new iee(t));
  }
  dispatchWheelEvent = (t) => {
    let s =
        t.col != null && t.row != null
          ? zo(this.rootNode, t.col - 1, t.row - 1)
          : null,
      f =
        (s && Wx(s) ? s : null) ??
        this.focusManager.activeElement ??
        this.rootNode,
      m = t.name === "wheeldown" ? 1 : -1;
    p4.dispatchContinuous(
      f,
      new Fd(m, { ctrl: t.ctrl, shift: t.shift, meta: t.meta || t.option }),
    );
  };
  dispatchKeyboardEvent(t, s) {
    let f = this.focusManager.activeElement ?? this.rootNode,
      m = new R9e(t, s);
    if (
      (p4.dispatchDiscrete(f, m),
      !m.defaultPrevented && t.name === "tab" && !t.ctrl && !t.meta)
    )
      if (t.shift) this.focusManager.focusPrevious(this.rootNode);
      else this.focusManager.focusNext(this.rootNode);
  }
  getHyperlinkAt(t, s) {
    if (!this.altScreenActive) return;
    let c = this.frontFrame.screen,
      f = dn(c, t, s),
      m = f?.hyperlink;
    if (!m && f?.width === 2 && t > 0) m = dn(c, t - 1, s)?.hyperlink;
    return m ?? Mv(c, t, s);
  }
  onHyperlinkClick;
  openHyperlink(t) {
    this.onHyperlinkClick?.(t);
  }
  fileHyperlinkOpensInPanel;
  fileLinkOpensInPanel() {
    return this.fileHyperlinkOpensInPanel?.() === !0;
  }
  handleMultiClick(t, s, c) {
    if (!this.altScreenActive) return;
    let f = this.frontFrame.screen;
    if ((Md(this.selection, t, s, Pd(this.rootNode, t, s)), c === 2))
      xv(this.selection, f, t, s);
    else Tv(this.selection, f, s);
    if (!this.selection.focus) this.selection.focus = this.selection.anchor;
    this.notifySelectionChange();
  }
  handleSelectionStart(t, s) {
    Md(this.selection, t, s, Pd(this.rootNode, t, s));
  }
  handleSelectionDrag(t, s) {
    if (!this.altScreenActive) return;
    let c = this.selection;
    if (c.anchorSpan) Nv(c, this.frontFrame.screen, t, s);
    else bv(c, t, s);
    this.notifySelectionChange();
  }
  stdinListeners = [];
  wasRawMode = !1;
  suspendStdin() {
    let t = this.options.stdin;
    if (!t.isTTY) return;
    let s = t.listeners("readable");
    (n(
      `[stdin] suspendStdin: removing ${s.length} readable listener(s), wasRawMode=${t.isRaw ?? !1}`,
    ),
      s.forEach((f) => {
        (this.stdinListeners.push({ event: "readable", listener: f }),
          t.removeListener("readable", f));
      }));
    let c = t;
    if (c.isRaw) (Jw(c, !1), (this.wasRawMode = !0));
  }
  resumeStdin() {
    let t = this.options.stdin;
    if (!t.isTTY) return;
    if (this.stdinListeners.length === 0 && !this.wasRawMode)
      n(
        "[stdin] resumeStdin: called with no stored listeners and wasRawMode=false (possible desync)",
        { level: "warn" },
      );
    if (
      (n(
        `[stdin] resumeStdin: re-attaching ${this.stdinListeners.length} listener(s), wasRawMode=${this.wasRawMode}`,
      ),
      this.stdinListeners.forEach(({ event: s, listener: c }) => {
        t.addListener(s, c);
      }),
      (this.stdinListeners = []),
      this.wasRawMode)
    )
      (Jw(t, !0), (this.wasRawMode = !1));
  }
  writeRaw(t) {
    this.options.stdout.write(t);
  }
  setCursorDeclaration = (t, s) => {
    if (t === null && s !== void 0 && this.cursorDeclaration?.node !== s)
      return;
    this.cursorDeclaration = t;
  };
  render(t) {
    ((this.renderCalled = !0), (this.currentNode = t));
    let s = e(Ru, {
      ref: this.appRef,
      stdin: this.options.stdin,
      stdout: this.options.stdout,
      stderr: this.options.stderr,
      exitOnCtrlC: this.options.exitOnCtrlC,
      onExit: this.unmount,
      subscribeLayout: this.subscribeLayout,
      terminalColumns: this.terminalColumns,
      terminalRows: this.terminalRows,
      selection: this.selection,
      onSelectionChange: this.notifySelectionChange,
      onClickAt: this.dispatchMouseClick,
      onHoverAt: this.dispatchHover,
      getHyperlinkAt: this.getHyperlinkAt,
      onOpenHyperlink: this.openHyperlink,
      fileLinkOpensInPanel: this.fileLinkOpensInPanel,
      onMultiClick: this.handleMultiClick,
      onSelectionStart: this.handleSelectionStart,
      onSelectionDrag: this.handleSelectionDrag,
      onStdinResume: this.reassertTerminalModes,
      modes: this.modes,
      getMouseMode: this.getMouseMode,
      onRawModeEnter: this.ensureInteractive,
      onCursorDeclaration: this.setCursorDeclaration,
      dispatchKeyboardEvent: this.dispatchKeyboardEvent,
      dispatchPasteEvent: this.dispatchPasteEvent,
      dispatchWheelEvent: this.dispatchWheelEvent,
      focusManager: this.focusManager,
      rootNode: this.rootNode,
      isScreenReaderEnabled: this.isScreenReaderEnabled,
      children: e(JOt.Provider, {
        value: this.isScreenReaderEnabled,
        children: e(Bat, {
          value: this.writeRaw,
          children: e(I9e.Provider, { value: this.modes, children: t }),
        }),
      }),
    });
    (zi.updateContainerSync(s, this.container, null, Ere), zi.flushSyncWork());
  }
  restoreConsolePatches() {
    (this.restoreConsole?.(),
      (this.restoreConsole = void 0),
      this.restoreStderr?.(),
      (this.restoreStderr = void 0));
  }
  unmount(t) {
    if (this.isUnmounted) return;
    if (t instanceof Error)
      ((this.exitError = t), (this.hasExited = !0), this.rejectExitPromise(t));
    else ((this.hasExited = !0), this.resolveExitPromise());
    if (((this.isExiting = !0), this.srStartupQuietTimer !== null))
      (clearTimeout(this.srStartupQuietTimer),
        (this.srStartupQuietTimer = null));
    if (this.srPreParkTimer !== null)
      (clearTimeout(this.srPreParkTimer), (this.srPreParkTimer = null));
    if (
      (this.onRender(),
      this.unsubscribeExit(),
      this.restoreConsolePatches(),
      this.unsubscribeTTYHandlers?.(),
      this.renderCalled && !this.isHandedOff)
    ) {
      let s = this.log.renderPreviousOutput_DEPRECATED(this.frontFrame);
      Ltn(this.terminal, kd(s), this.skipSyncMarkers(), this.stdoutSize().rows);
    }
    if ((this.nonBlockingStdout?.flush(), this.options.stdout.isTTY))
      try {
        if (this.altScreenActive) {
          let s =
            this.modes.reset("altScreen") + this.modes.reset("background");
          if (s) $d(1, s);
          this.altScreenActive = !1;
        }
        ($d(1, s7), this.drainStdin(), rDt());
      } catch (s) {
        if (Po(s))
          n(`unmount terminal cleanup writeSync failed: ${s}`, {
            level: "error",
          });
        else throw s;
      }
    if (
      ((this.isUnmounted = !0),
      this.scheduleRender.cancel?.(),
      this.drainTimer !== null)
    )
      (clearTimeout(this.drainTimer), (this.drainTimer = null));
    (zi.updateContainerSync(null, this.container, null, Ere),
      zi.flushSyncWork(),
      ws().delete(this.options.stdout),
      this.rootNode.yogaNode?.free(),
      (this.rootNode.yogaNode = void 0));
  }
  async waitUntilExit() {
    if (this.hasExited) {
      if (this.exitError) throw this.exitError;
      return;
    }
    return (
      (this.exitPromise ||= new Promise((t, s) => {
        ((this.resolveExitPromise = t), (this.rejectExitPromise = s));
      })),
      this.exitPromise
    );
  }
  maybeResetPools(t) {
    let s = t - this.lastPoolResetTime;
    if (s <= 30000) return;
    if (s <= 300000 && !this.stylePool.needsCompaction(this.lastStyleLiveSize))
      return;
    ((this.lastPoolResetTime = t), this.resetPools());
  }
  resetPools() {
    let t = this.hyperlinkPool.size > nv,
      s = this.stylePool.needsCompaction(this.lastStyleLiveSize);
    if (!t && !s) return;
    if (t) this.hyperlinkPool = new pu();
    if (
      (rv(
        this.frontFrame.screen,
        this.charPool,
        this.hyperlinkPool,
        s ? this.stylePool.compact() : void 0,
      ),
      s)
    )
      this.lastStyleLiveSize = this.stylePool.size;
    ((this.backFrame.screen.hyperlinkPool = this.hyperlinkPool),
      (this.fullRepaintSentinelScreen = void 0));
  }
  patchConsole() {
    let t = console,
      s = {},
      c = (...y) => n(`console.log: ${Ou(...y)}`),
      f =
        (y) =>
        (...b) =>
          h(dt(Error(`console.${y}: ${Ou(...b)}`), `console.${y} failed`)),
      m =
        (y) =>
        (...b) =>
          n(`console.${y}: ${Ou(...b)}`, { level: "warn" });
    for (let y of Gx) ((s[y] = t[y]), (t[y] = c));
    for (let y of jx)
      ((s[y] = t[y]),
        (t[y] =
          y === "error"
            ? (...b) => n(`console.error: ${Ou(...b)}`, { level: "error" })
            : m(y)));
    return (
      (s.assert = t.assert),
      (t.assert = (y, ...b) => {
        if (!y) f("assert")(...b);
      }),
      () => Object.assign(t, s)
    );
  }
  patchStderr() {
    let t = process.stderr,
      s = t.write,
      c = !1,
      f = (m, y, b) => {
        let S = typeof y === "function" ? y : b;
        if (c) {
          let E = typeof y === "string" ? y : void 0;
          return s.call(t, m, E, S);
        }
        c = !0;
        try {
          let E = typeof m === "string" ? m : Buffer.from(m).toString("utf8");
          if (
            (n(`[stderr] ${E}`, { level: "warn" }),
            this.altScreenActive && !this.isUnmounted && !this.isHandedOff)
          )
            ((this.prevFrameContaminated = !0), this.scheduleRender());
        } finally {
          ((c = !1), S?.());
        }
        return !0;
      };
    return (
      (t.write = f),
      () => {
        if (t.write === f) t.write = s;
      }
    );
  }
}
function B0e(t = process.stdin) {
  if (!t.isTTY) return;
  let s = [];
  try {
    let y;
    while ((y = t.read()) !== null)
      s.push(typeof y === "string" ? Buffer.from(y, "utf8") : y);
  } catch {}
  let c = t,
    f = c.isRaw === !0,
    m = -1;
  try {
    if (!f) c.setRawMode?.(!0);
    m = wx("/dev/tty", _g.O_RDONLY | _g.O_NONBLOCK);
    let y = Buffer.alloc(1024);
    for (let b = 0; b < 64; b++) {
      let S = Hx(m, y, 0, y.length, null);
      if (S <= 0) break;
      s.push(Buffer.from(y.subarray(0, S)));
    }
  } catch {
  } finally {
    if (m >= 0)
      try {
        Ox(m);
      } catch {}
    if (!f)
      try {
        c.setRawMode?.(!1);
      } catch {}
  }
  return s.length ? Buffer.concat(s) : void 0;
}
var Gx = [
    "log",
    "info",
    "debug",
    "dir",
    "dirxml",
    "count",
    "countReset",
    "group",
    "groupCollapsed",
    "groupEnd",
    "table",
    "time",
    "timeEnd",
    "timeLog",
  ],
  jx = ["warn", "error", "trace"];
function Wx(t) {
  let s = t;
  while (s) {
    if (s._eventHandlers?.onWheel) return !0;
    s = s.parentNode;
  }
  return !1;
}
function lee() {
  {
    let t = Ei();
    if (t.decstbmRendererEnabled !== void 0) return t.decstbmRendererEnabled;
    if (!process.stdout.isTTY) return (t.decstbmRendererEnabled = !1);
    if (dG()) return (t.decstbmRendererEnabled = !1);
    if (!lDt()) return (t.decstbmRendererEnabled = !1);
    if (Ta()) return (t.decstbmRendererEnabled = !1);
    if (zg()) return (t.decstbmRendererEnabled = !1);
    if (Ie(a.CLAUDE_CODE_DECSTBM)) return (t.decstbmRendererEnabled = !0);
    return (
      (t.decstbmRendererEnabled = H("tengu_marlin_porch", !1)),
      t.decstbmRendererEnabled
    );
  }
  return !1;
}
function lF() {
  let t = sk();
  if (t.nativeCursorEnabled !== void 0) return t.nativeCursorEnabled;
  if (a.CLAUDE_CODE_ACCESSIBILITY) return (t.nativeCursorEnabled = !0);
  if (zg()) return (t.nativeCursorEnabled = !0);
  return (t.nativeCursorEnabled = !lee() && ktn());
}
function ktn() {
  if (a.CLAUDE_CODE_ACCESSIBILITY) return !0;
  if (zg()) return !0;
  if (a.CLAUDE_CODE_NATIVE_CURSOR) return !0;
  return H("tengu_native_cursor", !1);
}
export {
  r7,
  ytn,
  KUn,
  KB,
  U0e,
  XB,
  E9e,
  A9e,
  Vm,
  GA,
  Stn,
  btn,
  d4,
  p4,
  JOt,
  wtn,
  oa,
  o7,
  f4,
  Vye,
  Kye,
  C9e,
  XUn,
  QOt,
  Q0,
  ZOt,
  sa,
  eDt,
  v9e,
  tDt,
  R9e,
  iee,
  Xye,
  Dat,
  aee,
  Ttn,
  Etn,
  Atn,
  Ctn,
  vtn,
  k9e,
  nDt,
  x9e,
  Rtn,
  rDt,
  oDt,
  Yye,
  B0e,
  lee,
  lF,
  ktn,
};

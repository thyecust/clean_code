// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { dt } from "../@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { xA } from "../lru-cache/lru-cache.8crev50p.js";
function cs(e) {
  return e.startsWith("\uFEFF") ? e.slice(1) : e;
}
function j(e, i = !1) {
  let r = e.length,
    t = 0,
    l = "",
    s = 0,
    u = 16,
    f = 0,
    o = 0,
    g = 0,
    a = 0,
    k = 0;
  function T(p, y) {
    let c = 0,
      d = 0;
    while (c < p || !y) {
      let m = e.charCodeAt(t);
      if (m >= 48 && m <= 57) d = d * 16 + m - 48;
      else if (m >= 65 && m <= 70) d = d * 16 + m - 65 + 10;
      else if (m >= 97 && m <= 102) d = d * 16 + m - 97 + 10;
      else break;
      (t++, c++);
    }
    if (c < p) d = -1;
    return d;
  }
  function w(p) {
    ((t = p), (l = ""), (s = 0), (u = 16), (k = 0));
  }
  function A() {
    let p = t;
    if (e.charCodeAt(t) === 48) t++;
    else {
      t++;
      while (t < e.length && x(e.charCodeAt(t))) t++;
    }
    if (t < e.length && e.charCodeAt(t) === 46)
      if ((t++, t < e.length && x(e.charCodeAt(t)))) {
        t++;
        while (t < e.length && x(e.charCodeAt(t))) t++;
      } else return ((k = 3), e.substring(p, t));
    let y = t;
    if (t < e.length && (e.charCodeAt(t) === 69 || e.charCodeAt(t) === 101)) {
      if (
        (t++,
        (t < e.length && e.charCodeAt(t) === 43) || e.charCodeAt(t) === 45)
      )
        t++;
      if (t < e.length && x(e.charCodeAt(t))) {
        t++;
        while (t < e.length && x(e.charCodeAt(t))) t++;
        y = t;
      } else k = 3;
    }
    return e.substring(p, y);
  }
  function v() {
    let p = "",
      y = t;
    while (!0) {
      if (t >= r) {
        ((p += e.substring(y, t)), (k = 2));
        break;
      }
      let c = e.charCodeAt(t);
      if (c === 34) {
        ((p += e.substring(y, t)), t++);
        break;
      }
      if (c === 92) {
        if (((p += e.substring(y, t)), t++, t >= r)) {
          k = 2;
          break;
        }
        switch (e.charCodeAt(t++)) {
          case 34:
            p += '"';
            break;
          case 92:
            p += "\\";
            break;
          case 47:
            p += "/";
            break;
          case 98:
            p += "\b";
            break;
          case 102:
            p += "\f";
            break;
          case 110:
            p += `
`;
            break;
          case 114:
            p += "\r";
            break;
          case 116:
            p += "\t";
            break;
          case 117:
            let m = T(4, !0);
            if (m >= 0) p += String.fromCharCode(m);
            else k = 4;
            break;
          default:
            k = 5;
        }
        y = t;
        continue;
      }
      if (c >= 0 && c <= 31)
        if (J(c)) {
          ((p += e.substring(y, t)), (k = 2));
          break;
        } else k = 6;
      t++;
    }
    return p;
  }
  function N() {
    if (((l = ""), (k = 0), (s = t), (o = f), (a = g), t >= r))
      return ((s = r), (u = 17));
    let p = e.charCodeAt(t);
    if (H(p)) {
      do (t++, (l += String.fromCharCode(p)), (p = e.charCodeAt(t)));
      while (H(p));
      return (u = 15);
    }
    if (J(p)) {
      if (
        (t++, (l += String.fromCharCode(p)), p === 13 && e.charCodeAt(t) === 10)
      )
        (t++,
          (l += `
`));
      return (f++, (g = t), (u = 14));
    }
    switch (p) {
      case 123:
        return (t++, (u = 1));
      case 125:
        return (t++, (u = 2));
      case 91:
        return (t++, (u = 3));
      case 93:
        return (t++, (u = 4));
      case 58:
        return (t++, (u = 6));
      case 44:
        return (t++, (u = 5));
      case 34:
        return (t++, (l = v()), (u = 10));
      case 47:
        let y = t - 1;
        if (e.charCodeAt(t + 1) === 47) {
          t += 2;
          while (t < r) {
            if (J(e.charCodeAt(t))) break;
            t++;
          }
          return ((l = e.substring(y, t)), (u = 12));
        }
        if (e.charCodeAt(t + 1) === 42) {
          t += 2;
          let c = r - 1,
            d = !1;
          while (t < c) {
            let m = e.charCodeAt(t);
            if (m === 42 && e.charCodeAt(t + 1) === 47) {
              ((t += 2), (d = !0));
              break;
            }
            if ((t++, J(m))) {
              if (m === 13 && e.charCodeAt(t) === 10) t++;
              (f++, (g = t));
            }
          }
          if (!d) (t++, (k = 1));
          return ((l = e.substring(y, t)), (u = 13));
        }
        return ((l += String.fromCharCode(p)), t++, (u = 16));
      case 45:
        if (
          ((l += String.fromCharCode(p)), t++, t === r || !x(e.charCodeAt(t)))
        )
          return (u = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return ((l += A()), (u = 11));
      default:
        while (t < r && B(p)) (t++, (p = e.charCodeAt(t)));
        if (s !== t) {
          switch (((l = e.substring(s, t)), l)) {
            case "true":
              return (u = 8);
            case "false":
              return (u = 9);
            case "null":
              return (u = 7);
          }
          return (u = 16);
        }
        return ((l += String.fromCharCode(p)), t++, (u = 16));
    }
  }
  function B(p) {
    if (H(p) || J(p)) return !1;
    switch (p) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function I() {
    let p;
    do p = N();
    while (p >= 12 && p <= 15);
    return p;
  }
  return {
    setPosition: w,
    getPosition: () => t,
    scan: i ? I : N,
    getToken: () => u,
    getTokenValue: () => l,
    getTokenOffset: () => s,
    getTokenLength: () => t - s,
    getTokenStartLine: () => o,
    getTokenStartCharacter: () => s - a,
    getTokenError: () => k,
  };
}
function H(e) {
  return e === 32 || e === 9;
}
function J(e) {
  return e === 10 || e === 13;
}
function x(e) {
  return e >= 48 && e <= 57;
}
var K;
(function (e) {
  ((e[(e.lineFeed = 10)] = "lineFeed"),
    (e[(e.carriageReturn = 13)] = "carriageReturn"),
    (e[(e.space = 32)] = "space"),
    (e[(e._0 = 48)] = "_0"),
    (e[(e._1 = 49)] = "_1"),
    (e[(e._2 = 50)] = "_2"),
    (e[(e._3 = 51)] = "_3"),
    (e[(e._4 = 52)] = "_4"),
    (e[(e._5 = 53)] = "_5"),
    (e[(e._6 = 54)] = "_6"),
    (e[(e._7 = 55)] = "_7"),
    (e[(e._8 = 56)] = "_8"),
    (e[(e._9 = 57)] = "_9"),
    (e[(e.a = 97)] = "a"),
    (e[(e.b = 98)] = "b"),
    (e[(e.c = 99)] = "c"),
    (e[(e.d = 100)] = "d"),
    (e[(e.e = 101)] = "e"),
    (e[(e.f = 102)] = "f"),
    (e[(e.g = 103)] = "g"),
    (e[(e.h = 104)] = "h"),
    (e[(e.i = 105)] = "i"),
    (e[(e.j = 106)] = "j"),
    (e[(e.k = 107)] = "k"),
    (e[(e.l = 108)] = "l"),
    (e[(e.m = 109)] = "m"),
    (e[(e.n = 110)] = "n"),
    (e[(e.o = 111)] = "o"),
    (e[(e.p = 112)] = "p"),
    (e[(e.q = 113)] = "q"),
    (e[(e.r = 114)] = "r"),
    (e[(e.s = 115)] = "s"),
    (e[(e.t = 116)] = "t"),
    (e[(e.u = 117)] = "u"),
    (e[(e.v = 118)] = "v"),
    (e[(e.w = 119)] = "w"),
    (e[(e.x = 120)] = "x"),
    (e[(e.y = 121)] = "y"),
    (e[(e.z = 122)] = "z"),
    (e[(e.A = 65)] = "A"),
    (e[(e.B = 66)] = "B"),
    (e[(e.C = 67)] = "C"),
    (e[(e.D = 68)] = "D"),
    (e[(e.E = 69)] = "E"),
    (e[(e.F = 70)] = "F"),
    (e[(e.G = 71)] = "G"),
    (e[(e.H = 72)] = "H"),
    (e[(e.I = 73)] = "I"),
    (e[(e.J = 74)] = "J"),
    (e[(e.K = 75)] = "K"),
    (e[(e.L = 76)] = "L"),
    (e[(e.M = 77)] = "M"),
    (e[(e.N = 78)] = "N"),
    (e[(e.O = 79)] = "O"),
    (e[(e.P = 80)] = "P"),
    (e[(e.Q = 81)] = "Q"),
    (e[(e.R = 82)] = "R"),
    (e[(e.S = 83)] = "S"),
    (e[(e.T = 84)] = "T"),
    (e[(e.U = 85)] = "U"),
    (e[(e.V = 86)] = "V"),
    (e[(e.W = 87)] = "W"),
    (e[(e.X = 88)] = "X"),
    (e[(e.Y = 89)] = "Y"),
    (e[(e.Z = 90)] = "Z"),
    (e[(e.asterisk = 42)] = "asterisk"),
    (e[(e.backslash = 92)] = "backslash"),
    (e[(e.closeBrace = 125)] = "closeBrace"),
    (e[(e.closeBracket = 93)] = "closeBracket"),
    (e[(e.colon = 58)] = "colon"),
    (e[(e.comma = 44)] = "comma"),
    (e[(e.dot = 46)] = "dot"),
    (e[(e.doubleQuote = 34)] = "doubleQuote"),
    (e[(e.minus = 45)] = "minus"),
    (e[(e.openBrace = 123)] = "openBrace"),
    (e[(e.openBracket = 91)] = "openBracket"),
    (e[(e.plus = 43)] = "plus"),
    (e[(e.slash = 47)] = "slash"),
    (e[(e.formFeed = 12)] = "formFeed"),
    (e[(e.tab = 9)] = "tab"));
})(K || (K = {}));
var E = Array(20)
  .fill(0)
  .map((e, i) => " ".repeat(i));
var Q = {
    " ": {
      "\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `
` + " ".repeat(i),
        ),
      "\r": Array(200)
        .fill(0)
        .map((e, i) => "\r" + " ".repeat(i)),
      "\r\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `\r
` + " ".repeat(i),
        ),
    },
    "\t": {
      "\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `
` + "\t".repeat(i),
        ),
      "\r": Array(200)
        .fill(0)
        .map((e, i) => "\r" + "\t".repeat(i)),
      "\r\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `\r
` + "\t".repeat(i),
        ),
    },
  },
  C = [
    `
`,
    "\r",
    `\r
`,
  ];
function X(e, i, r) {
  let t, l, s, u, f;
  if (i) {
    ((u = i.offset), (f = u + i.length), (s = u));
    while (s > 0 && !V(e, s - 1)) s--;
    let c = f;
    while (c < e.length && !V(e, c)) c++;
    ((l = e.substring(s, c)), (t = ue(l, r)));
  } else ((l = e), (t = 0), (s = 0), (u = 0), (f = e.length));
  let o = ce(r, e),
    g = C.includes(o),
    a = 0,
    k = 0,
    T;
  if (r.insertSpaces) T = E[r.tabSize || 4] ?? U(E[1], r.tabSize || 4);
  else T = "\t";
  let w = T === "\t" ? "\t" : " ",
    A = j(l, !1),
    v = !1;
  function N() {
    if (a > 1) return U(o, a) + U(T, t + k);
    let c = T.length * (t + k);
    if (!g || c > Q[w][o].length) return o + U(T, t + k);
    if (c <= 0) return o;
    return Q[w][o][c];
  }
  function B() {
    let c = A.scan();
    a = 0;
    while (c === 15 || c === 14) {
      if (c === 14 && r.keepLines) a += 1;
      else if (c === 14) a = 1;
      c = A.scan();
    }
    return ((v = c === 16 || A.getTokenError() !== 0), c);
  }
  let I = [];
  function p(c, d, m) {
    if (!v && (!i || (d < f && m > u)) && e.substring(d, m) !== c)
      I.push({ offset: d, length: m - d, content: c });
  }
  let y = B();
  if (r.keepLines && a > 0) p(U(o, a), 0, 0);
  if (y !== 17) {
    let c = A.getTokenOffset() + s,
      d = T.length * t < 20 && r.insertSpaces ? E[T.length * t] : U(T, t);
    p(d, s, c);
  }
  while (y !== 17) {
    let c = A.getTokenOffset() + A.getTokenLength() + s,
      d = B(),
      m = "",
      S = !1;
    while (a === 0 && (d === 12 || d === 13)) {
      let W = A.getTokenOffset() + s;
      (p(E[1], c, W),
        (c = A.getTokenOffset() + A.getTokenLength() + s),
        (S = d === 12),
        (m = S ? N() : ""),
        (d = B()));
    }
    if (d === 2) {
      if (y !== 1) k--;
      if ((r.keepLines && a > 0) || (!r.keepLines && y !== 1)) m = N();
      else if (r.keepLines) m = E[1];
    } else if (d === 4) {
      if (y !== 3) k--;
      if ((r.keepLines && a > 0) || (!r.keepLines && y !== 3)) m = N();
      else if (r.keepLines) m = E[1];
    } else {
      switch (y) {
        case 3:
        case 1:
          if ((k++, (r.keepLines && a > 0) || !r.keepLines)) m = N();
          else m = E[1];
          break;
        case 5:
          if ((r.keepLines && a > 0) || !r.keepLines) m = N();
          else m = E[1];
          break;
        case 12:
          m = N();
          break;
        case 13:
          if (a > 0) m = N();
          else if (!S) m = E[1];
          break;
        case 6:
          if (r.keepLines && a > 0) m = N();
          else if (!S) m = E[1];
          break;
        case 10:
          if (r.keepLines && a > 0) m = N();
          else if (d === 6 && !S) m = "";
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          if (r.keepLines && a > 0) m = N();
          else if ((d === 12 || d === 13) && !S) m = E[1];
          else if (d !== 5 && d !== 17) v = !0;
          break;
        case 16:
          v = !0;
          break;
      }
      if (a > 0 && (d === 12 || d === 13)) m = N();
    }
    if (d === 17)
      if (r.keepLines && a > 0) m = N();
      else m = r.insertFinalNewline ? o : "";
    let z = A.getTokenOffset() + s;
    (p(m, c, z), (y = d));
  }
  return I;
}
function U(e, i) {
  let r = "";
  for (let t = 0; t < i; t++) r += e;
  return r;
}
function ue(e, i) {
  let r = 0,
    t = 0,
    l = i.tabSize || 4;
  while (r < e.length) {
    let s = e.charAt(r);
    if (s === E[1]) t++;
    else if (s === "\t") t += l;
    else break;
    r++;
  }
  return Math.floor(t / l);
}
function ce(e, i) {
  for (let r = 0; r < i.length; r++) {
    let t = i.charAt(r);
    if (t === "\r") {
      if (
        r + 1 < i.length &&
        i.charAt(r + 1) ===
          `
`
      )
        return `\r
`;
      return "\r";
    } else if (
      t ===
      `
`
    )
      return `
`;
  }
  return (
    (e && e.eol) ||
    `
`
  );
}
function V(e, i) {
  return (
    `\r
`.indexOf(e.charAt(i)) !== -1
  );
}
var F;
(function (e) {
  e.DEFAULT = { allowTrailingComma: !1 };
})(F || (F = {}));
function ee(e, i = [], r = F.DEFAULT) {
  let t = null,
    l = [],
    s = [];
  function u(o) {
    if (Array.isArray(l)) l.push(o);
    else if (t !== null) l[t] = o;
  }
  return (
    q(
      e,
      {
        onObjectBegin: () => {
          let o = {};
          (u(o), s.push(l), (l = o), (t = null));
        },
        onObjectProperty: (o) => {
          t = o;
        },
        onObjectEnd: () => {
          l = s.pop();
        },
        onArrayBegin: () => {
          let o = [];
          (u(o), s.push(l), (l = o), (t = null));
        },
        onArrayEnd: () => {
          l = s.pop();
        },
        onLiteralValue: u,
        onError: (o, g, a) => {
          i.push({ error: o, offset: g, length: a });
        },
      },
      r,
    ),
    l[0]
  );
}
function Z(e, i = [], r = F.DEFAULT) {
  let t = {
    type: "array",
    offset: -1,
    length: -1,
    children: [],
    parent: void 0,
  };
  function l(o) {
    if (t.type === "property") ((t.length = o - t.offset), (t = t.parent));
  }
  function s(o) {
    return (t.children.push(o), o);
  }
  q(
    e,
    {
      onObjectBegin: (o) => {
        t = s({
          type: "object",
          offset: o,
          length: -1,
          parent: t,
          children: [],
        });
      },
      onObjectProperty: (o, g, a) => {
        ((t = s({
          type: "property",
          offset: g,
          length: -1,
          parent: t,
          children: [],
        })),
          t.children.push({
            type: "string",
            value: o,
            offset: g,
            length: a,
            parent: t,
          }));
      },
      onObjectEnd: (o, g) => {
        (l(o + g), (t.length = o + g - t.offset), (t = t.parent), l(o + g));
      },
      onArrayBegin: (o, g) => {
        t = s({
          type: "array",
          offset: o,
          length: -1,
          parent: t,
          children: [],
        });
      },
      onArrayEnd: (o, g) => {
        ((t.length = o + g - t.offset), (t = t.parent), l(o + g));
      },
      onLiteralValue: (o, g, a) => {
        (s({ type: pe(o), offset: g, length: a, parent: t, value: o }),
          l(g + a));
      },
      onSeparator: (o, g, a) => {
        if (t.type === "property") {
          if (o === ":") t.colonOffset = g;
          else if (o === ",") l(g);
        }
      },
      onError: (o, g, a) => {
        i.push({ error: o, offset: g, length: a });
      },
    },
    r,
  );
  let f = t.children[0];
  if (f) delete f.parent;
  return f;
}
function R(e, i) {
  if (!e) return;
  let r = e;
  for (let t of i)
    if (typeof t === "string") {
      if (r.type !== "object" || !Array.isArray(r.children)) return;
      let l = !1;
      for (let s of r.children)
        if (
          Array.isArray(s.children) &&
          s.children[0].value === t &&
          s.children.length === 2
        ) {
          ((r = s.children[1]), (l = !0));
          break;
        }
      if (!l) return;
    } else {
      let l = t;
      if (
        r.type !== "array" ||
        l < 0 ||
        !Array.isArray(r.children) ||
        l >= r.children.length
      )
        return;
      r = r.children[l];
    }
  return r;
}
function q(e, i, r = F.DEFAULT) {
  let t = j(e, !1),
    l = [];
  function s(O) {
    return O
      ? () =>
          O(
            t.getTokenOffset(),
            t.getTokenLength(),
            t.getTokenStartLine(),
            t.getTokenStartCharacter(),
          )
      : () => !0;
  }
  function u(O) {
    return O
      ? () =>
          O(
            t.getTokenOffset(),
            t.getTokenLength(),
            t.getTokenStartLine(),
            t.getTokenStartCharacter(),
            () => l.slice(),
          )
      : () => !0;
  }
  function f(O) {
    return O
      ? (L) =>
          O(
            L,
            t.getTokenOffset(),
            t.getTokenLength(),
            t.getTokenStartLine(),
            t.getTokenStartCharacter(),
          )
      : () => !0;
  }
  function o(O) {
    return O
      ? (L) =>
          O(
            L,
            t.getTokenOffset(),
            t.getTokenLength(),
            t.getTokenStartLine(),
            t.getTokenStartCharacter(),
            () => l.slice(),
          )
      : () => !0;
  }
  let g = u(i.onObjectBegin),
    a = o(i.onObjectProperty),
    k = s(i.onObjectEnd),
    T = u(i.onArrayBegin),
    w = s(i.onArrayEnd),
    A = o(i.onLiteralValue),
    v = f(i.onSeparator),
    N = s(i.onComment),
    B = f(i.onError),
    I = r && r.disallowComments,
    p = r && r.allowTrailingComma;
  function y() {
    while (!0) {
      let O = t.scan();
      switch (t.getTokenError()) {
        case 4:
          c(14);
          break;
        case 5:
          c(15);
          break;
        case 3:
          c(13);
          break;
        case 1:
          if (!I) c(11);
          break;
        case 2:
          c(12);
          break;
        case 6:
          c(16);
          break;
      }
      switch (O) {
        case 12:
        case 13:
          if (I) c(10);
          else N();
          break;
        case 16:
          c(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return O;
      }
    }
  }
  function c(O, L = [], G = []) {
    if ((B(O), L.length + G.length > 0)) {
      let M = t.getToken();
      while (M !== 17) {
        if (L.indexOf(M) !== -1) {
          y();
          break;
        } else if (G.indexOf(M) !== -1) break;
        M = y();
      }
    }
  }
  function d(O) {
    let L = t.getTokenValue();
    if (O) A(L);
    else (a(L), l.push(L));
    return (y(), !0);
  }
  function m() {
    switch (t.getToken()) {
      case 11:
        let O = t.getTokenValue(),
          L = Number(O);
        if (isNaN(L)) (c(2), (L = 0));
        A(L);
        break;
      case 7:
        A(null);
        break;
      case 8:
        A(!0);
        break;
      case 9:
        A(!1);
        break;
      default:
        return !1;
    }
    return (y(), !0);
  }
  function S() {
    if (t.getToken() !== 10) return (c(3, [], [2, 5]), !1);
    if ((d(!1), t.getToken() === 6)) {
      if ((v(":"), y(), !Y())) c(4, [], [2, 5]);
    } else c(5, [], [2, 5]);
    return (l.pop(), !0);
  }
  function z() {
    (g(), y());
    let O = !1;
    while (t.getToken() !== 2 && t.getToken() !== 17) {
      if (t.getToken() === 5) {
        if (!O) c(4, [], []);
        if ((v(","), y(), t.getToken() === 2 && p)) break;
      } else if (O) c(6, [], []);
      if (!S()) c(4, [], [2, 5]);
      O = !0;
    }
    if ((k(), t.getToken() !== 2)) c(7, [2], []);
    else y();
    return !0;
  }
  function W() {
    (T(), y());
    let O = !0,
      L = !1;
    while (t.getToken() !== 4 && t.getToken() !== 17) {
      if (t.getToken() === 5) {
        if (!L) c(4, [], []);
        if ((v(","), y(), t.getToken() === 4 && p)) break;
      } else if (L) c(6, [], []);
      if (O) (l.push(0), (O = !1));
      else l[l.length - 1]++;
      if (!Y()) c(4, [], [4, 5]);
      L = !0;
    }
    if ((w(), !O)) l.pop();
    if (t.getToken() !== 4) c(8, [4], []);
    else y();
    return !0;
  }
  function Y() {
    switch (t.getToken()) {
      case 3:
        return W();
      case 1:
        return z();
      case 10:
        return d(!0);
      default:
        return m();
    }
  }
  if ((y(), t.getToken() === 17)) {
    if (r.allowEmptyContent) return !0;
    return (c(4, [], []), !1);
  }
  if (!Y()) return (c(4, [], []), !1);
  if (t.getToken() !== 17) c(9, [], []);
  return !0;
}
function pe(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (!e) return "null";
      else if (Array.isArray(e)) return "array";
      return "object";
    }
    default:
      return "null";
  }
}
function ne(e, i, r, t) {
  let l = i.slice(),
    u = Z(e, []),
    f = void 0,
    o = void 0;
  while (l.length > 0)
    if (((o = l.pop()), (f = R(u, l)), f === void 0 && r !== void 0))
      if (typeof o === "string") r = { [o]: r };
      else r = [r];
    else break;
  if (!f) {
    if (r === void 0) throw Error("Can not delete in empty document");
    return _(
      e,
      {
        offset: u ? u.offset : 0,
        length: u ? u.length : 0,
        content: JSON.stringify(r),
      },
      t,
    );
  } else if (
    f.type === "object" &&
    typeof o === "string" &&
    Array.isArray(f.children)
  ) {
    let g = R(f, [o]);
    if (g !== void 0)
      if (r === void 0) {
        if (!g.parent) throw Error("Malformed AST");
        let a = f.children.indexOf(g.parent),
          k,
          T = g.parent.offset + g.parent.length;
        if (a > 0) {
          let w = f.children[a - 1];
          k = w.offset + w.length;
        } else if (((k = f.offset + 1), f.children.length > 1))
          T = f.children[1].offset;
        return _(e, { offset: k, length: T - k, content: "" }, t);
      } else
        return _(
          e,
          { offset: g.offset, length: g.length, content: JSON.stringify(r) },
          t,
        );
    else {
      if (r === void 0) return [];
      let a = `${JSON.stringify(o)}: ${JSON.stringify(r)}`,
        k = t.getInsertionIndex
          ? t.getInsertionIndex(f.children.map((w) => w.children[0].value))
          : f.children.length,
        T;
      if (k > 0) {
        let w = f.children[k - 1];
        T = { offset: w.offset + w.length, length: 0, content: "," + a };
      } else if (f.children.length === 0)
        T = { offset: f.offset + 1, length: 0, content: a };
      else T = { offset: f.offset + 1, length: 0, content: a + "," };
      return _(e, T, t);
    }
  } else if (
    f.type === "array" &&
    typeof o === "number" &&
    Array.isArray(f.children)
  ) {
    let g = o;
    if (g === -1) {
      let a = `${JSON.stringify(r)}`,
        k;
      if (f.children.length === 0)
        k = { offset: f.offset + 1, length: 0, content: a };
      else {
        let T = f.children[f.children.length - 1];
        k = { offset: T.offset + T.length, length: 0, content: "," + a };
      }
      return _(e, k, t);
    } else if (r === void 0 && f.children.length >= 0) {
      let a = o,
        k = f.children[a],
        T;
      if (f.children.length === 1)
        T = { offset: f.offset + 1, length: f.length - 2, content: "" };
      else if (f.children.length - 1 === a) {
        let w = f.children[a - 1],
          A = w.offset + w.length,
          v = f.offset + f.length;
        T = { offset: A, length: v - 2 - A, content: "" };
      } else
        T = {
          offset: k.offset,
          length: f.children[a + 1].offset - k.offset,
          content: "",
        };
      return _(e, T, t);
    } else if (r !== void 0) {
      let a,
        k = `${JSON.stringify(r)}`;
      if (!t.isArrayInsertion && f.children.length > o) {
        let T = f.children[o];
        a = { offset: T.offset, length: T.length, content: k };
      } else if (f.children.length === 0 || o === 0)
        a = {
          offset: f.offset + 1,
          length: 0,
          content: f.children.length === 0 ? k : k + ",",
        };
      else {
        let T = o > f.children.length ? f.children.length : o,
          w = f.children[T - 1];
        a = { offset: w.offset + w.length, length: 0, content: "," + k };
      }
      return _(e, a, t);
    } else
      throw Error(
        `Can not ${r === void 0 ? "remove" : t.isArrayInsertion ? "insert" : "modify"} Array index ${g} as length is not sufficient`,
      );
  } else
    throw Error(
      `Can not add ${typeof o !== "number" ? "index" : "property"} to parent of type ${f.type}`,
    );
}
function _(e, i, r) {
  if (!r.formattingOptions) return [i];
  let t = D(e, i),
    l = i.offset,
    s = i.offset + i.content.length;
  if (i.length === 0 || i.content.length === 0) {
    while (l > 0 && !V(t, l - 1)) l--;
    while (s < t.length && !V(t, s)) s++;
  }
  let u = X(
    t,
    { offset: l, length: s - l },
    { ...r.formattingOptions, keepLines: !1 },
  );
  for (let o = u.length - 1; o >= 0; o--) {
    let g = u[o];
    ((t = D(t, g)),
      (l = Math.min(l, g.offset)),
      (s = Math.max(s, g.offset + g.length)),
      (s += g.content.length - g.length));
  }
  let f = e.length - (t.length - s) - l;
  return [{ offset: l, length: f, content: t.substring(l, s) }];
}
function D(e, i) {
  return (
    e.substring(0, i.offset) + i.content + e.substring(i.offset + i.length)
  );
}
var te;
(function (e) {
  ((e[(e.None = 0)] = "None"),
    (e[(e.UnexpectedEndOfComment = 1)] = "UnexpectedEndOfComment"),
    (e[(e.UnexpectedEndOfString = 2)] = "UnexpectedEndOfString"),
    (e[(e.UnexpectedEndOfNumber = 3)] = "UnexpectedEndOfNumber"),
    (e[(e.InvalidUnicode = 4)] = "InvalidUnicode"),
    (e[(e.InvalidEscapeCharacter = 5)] = "InvalidEscapeCharacter"),
    (e[(e.InvalidCharacter = 6)] = "InvalidCharacter"));
})(te || (te = {}));
var re;
(function (e) {
  ((e[(e.OpenBraceToken = 1)] = "OpenBraceToken"),
    (e[(e.CloseBraceToken = 2)] = "CloseBraceToken"),
    (e[(e.OpenBracketToken = 3)] = "OpenBracketToken"),
    (e[(e.CloseBracketToken = 4)] = "CloseBracketToken"),
    (e[(e.CommaToken = 5)] = "CommaToken"),
    (e[(e.ColonToken = 6)] = "ColonToken"),
    (e[(e.NullKeyword = 7)] = "NullKeyword"),
    (e[(e.TrueKeyword = 8)] = "TrueKeyword"),
    (e[(e.FalseKeyword = 9)] = "FalseKeyword"),
    (e[(e.StringLiteral = 10)] = "StringLiteral"),
    (e[(e.NumericLiteral = 11)] = "NumericLiteral"),
    (e[(e.LineCommentTrivia = 12)] = "LineCommentTrivia"),
    (e[(e.BlockCommentTrivia = 13)] = "BlockCommentTrivia"),
    (e[(e.LineBreakTrivia = 14)] = "LineBreakTrivia"),
    (e[(e.Trivia = 15)] = "Trivia"),
    (e[(e.Unknown = 16)] = "Unknown"),
    (e[(e.EOF = 17)] = "EOF"));
})(re || (re = {}));
var IBe = ee;
var ie;
(function (e) {
  ((e[(e.InvalidSymbol = 1)] = "InvalidSymbol"),
    (e[(e.InvalidNumberFormat = 2)] = "InvalidNumberFormat"),
    (e[(e.PropertyNameExpected = 3)] = "PropertyNameExpected"),
    (e[(e.ValueExpected = 4)] = "ValueExpected"),
    (e[(e.ColonExpected = 5)] = "ColonExpected"),
    (e[(e.CommaExpected = 6)] = "CommaExpected"),
    (e[(e.CloseBraceExpected = 7)] = "CloseBraceExpected"),
    (e[(e.CloseBracketExpected = 8)] = "CloseBracketExpected"),
    (e[(e.EndOfFileExpected = 9)] = "EndOfFileExpected"),
    (e[(e.InvalidCommentToken = 10)] = "InvalidCommentToken"),
    (e[(e.UnexpectedEndOfComment = 11)] = "UnexpectedEndOfComment"),
    (e[(e.UnexpectedEndOfString = 12)] = "UnexpectedEndOfString"),
    (e[(e.UnexpectedEndOfNumber = 13)] = "UnexpectedEndOfNumber"),
    (e[(e.InvalidUnicode = 14)] = "InvalidUnicode"),
    (e[(e.InvalidEscapeCharacter = 15)] = "InvalidEscapeCharacter"),
    (e[(e.InvalidCharacter = 16)] = "InvalidCharacter"));
})(ie || (ie = {}));
function Wet(e, i, r, t) {
  return ne(e, i, r, t);
}
function vRt(e, i) {
  let r = i.slice(0).sort((l, s) => {
      let u = l.offset - s.offset;
      if (u === 0) return l.length - s.length;
      return u;
    }),
    t = e.length;
  for (let l = r.length - 1; l >= 0; l--) {
    let s = r[l];
    if (s.offset + s.length <= t) e = D(e, s);
    else throw Error("Overlapping edit");
    t = s.offset;
  }
  return e;
}
import { open as me, readFile, stat as de } from "fs/promises";
var Get = "__unparsedToolInput";
function qet(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let i = Object.entries(e);
  if (i.length !== 1) return !1;
  let [r, t] = i[0];
  return (
    r === Get &&
    typeof t === "object" &&
    t !== null &&
    typeof t.raw === "string" &&
    typeof t.len === "number"
  );
}
function oL(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let i = Object.entries(e);
  if (i.length !== 1) return null;
  let [r, t] = i[0];
  if (r !== Get || typeof t !== "object" || t === null) return null;
  let { raw: l, len: s } = t;
  if (typeof l !== "string" || typeof s !== "number") return null;
  return `input JSON failed to parse \u2014 ${s} bytes`;
}
var be = 8192;
function se(e, i) {
  try {
    return { ok: !0, value: JSON.parse(cs(e)) };
  } catch (r) {
    if (i)
      logError(
        dt(
          r,
          `safeParseJSON: invalid JSON (${r instanceof Error ? r.constructor.name : typeof r}, ${e.length} bytes)`,
        ),
      );
    return { ok: !1 };
  }
}
class fe {
  cached = xA(se, (e) => e, 50);
  cache = this.cached.cache;
  parse(e, i) {
    return this.cached(e, i);
  }
}
var le = new fe();
function bx(e) {
  return e
    .trim()
    .replace(/^```[a-zA-Z]*\s*/, "")
    .replace(/\s*```$/, "")
    .trim();
}
var xt = Object.assign(
  function (i, r = !0) {
    if (!i) return null;
    let t = i.length > be ? se(i, r) : le.parse(i, r);
    return t.ok ? t.value : null;
  },
  { cache: le.cache },
);
function ike(e) {
  if (!e) return null;
  try {
    return IBe(cs(e));
  } catch (i) {
    return (
      logForDebugging(
        `Failed to parse JSONC: ${i instanceof Error ? i.message : String(i)}`,
        { level: "error" },
      ),
      null
    );
  }
}
function ye() {
  return Bun.JSONL?.parseChunk;
}
function Te(e, i) {
  let r = e.length,
    t = i(e);
  if (!t.error || t.done || t.read >= r) return t.values;
  let { values: l, read: s } = t;
  while (s < r) {
    let u =
      typeof e === "string"
        ? e.indexOf(
            `
`,
            s,
          )
        : e.indexOf(10, s);
    if (u === -1) break;
    s = u + 1;
    let f = i(e, s);
    if (f.values.length > 0) l = l.concat(f.values);
    if (!f.error || f.done || f.read >= r) break;
    s = f.read;
  }
  return l;
}
function Oe(e) {
  let i = e.length,
    r = 0;
  if (e[0] === 239 && e[1] === 187 && e[2] === 191) r = 3;
  let t = [];
  while (r < i) {
    let l = e.indexOf(10, r);
    if (l === -1) l = i;
    let s = e.toString("utf8", r, l).trim();
    if (((r = l + 1), !s)) continue;
    try {
      t.push(JSON.parse(s));
    } catch {}
  }
  return t;
}
function we(e) {
  let i = cs(e),
    r = i.length,
    t = 0,
    l = [];
  while (t < r) {
    let s = i.indexOf(
      `
`,
      t,
    );
    if (s === -1) s = r;
    let u = i.substring(t, s).trim();
    if (((t = s + 1), !u)) continue;
    try {
      l.push(JSON.parse(u));
    } catch {}
  }
  return l;
}
function Nge(e) {
  let i = ye();
  if (i) return Te(e, i);
  if (typeof e === "string") return we(e);
  return Oe(e);
}
var P = 104857600;
async function ake(e) {
  let { size: i } = await de(e);
  if (i <= P) return Nge(await readFile(e));
  await using r = await me(e, "r");
  let t = Buffer.allocUnsafe(P),
    l = 0,
    s = i - P;
  while (l < P) {
    let { bytesRead: f } = await r.read(t, l, P - l, s + l);
    if (f === 0) break;
    l += f;
  }
  let u = t.indexOf(10);
  if (u !== -1 && u < l - 1) return Nge(t.subarray(u + 1, l));
  return Nge(t.subarray(0, l));
}
function rHn(e, i, r) {
  if (!e || e.trim() === "") return jsonStringify({ [i]: r }, null, 4);
  let t = cs(e);
  try {
    let l = [],
      s = IBe(t, l);
    if (l.length > 0 || s === null || typeof s !== "object" || Array.isArray(s))
      return e;
    let u = Wet(t, [i], r, {
      formattingOptions: { insertSpaces: !0, tabSize: 4 },
    });
    if (!u || u.length === 0) return t;
    return vRt(t, u);
  } catch (l) {
    return (
      logForDebugging(
        `Failed to set JSONC property "${i}": ${l instanceof Error ? l.message : String(l)}`,
        { level: "error" },
      ),
      e
    );
  }
}
function qar(e, i) {
  try {
    if (!e || e.trim() === "") return jsonStringify([i], null, 4);
    let r = cs(e),
      t = IBe(r);
    if (Array.isArray(t)) {
      let l = t.length,
        f = Wet(r, l === 0 ? [0] : [l], i, {
          formattingOptions: { insertSpaces: !0, tabSize: 4 },
          isArrayInsertion: !0,
        });
      if (!f || f.length === 0) {
        let o = [...t, i];
        return jsonStringify(o, null, 4);
      }
      return vRt(r, f);
    } else return jsonStringify([i], null, 4);
  } catch (r) {
    return (
      logForDebugging(
        `Failed to insert item into user JSONC array, falling back to overwrite: ${r instanceof Error ? r.message : String(r)}`,
        { level: "error" },
      ),
      jsonStringify([i], null, 4)
    );
  }
}
export { cs, IBe, Wet, vRt, Get, qet, oL, bx, xt, ike, Nge, ake, rHn, qar };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { sa } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { V, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { parseKeybindingChord, getKeybindingPlatform } from "./键位绑定-Keybindings.sanfja6a.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var A = {
  default: {
    keyCase: "title",
    modCase: "lower",
    caretCtrl: !1,
    modSep: "+",
    arrowSep: "/",
    chordSep: " ",
    shiftAsCase: !1,
    charCase: "preserve",
    platform: "other",
  },
  compact: {
    keyCase: "lower",
    modCase: "lower",
    caretCtrl: !0,
    modSep: "+",
    arrowSep: "",
    chordSep: " ",
    shiftAsCase: !0,
    charCase: "preserve",
    platform: "other",
  },
  symbol: {
    keyCase: "glyph",
    modCase: "glyph",
    caretCtrl: !1,
    modSep: "",
    arrowSep: "",
    chordSep: " ",
    shiftAsCase: !0,
    charCase: "upper",
    platform: "other",
  },
};
function M(t) {
  let { style: o, ...s } = t;
  return { ...A[o ?? "default"], ...E(s) };
}
function E(t) {
  let o = {};
  for (let s in t) if (t[s] !== void 0) o[s] = t[s];
  return o;
}
function formatKeybindingChord(t, o = {}) {
  let s = M(o),
    n = (l) => U(l, s),
    a = (l) => l.map(n).join(s.chordSep);
  if (t.length === 0) return "";
  if (t.length === 1) return a(t[0]);
  let i = t.every((l) => l.length === 1) ? t.map((l) => l[0]) : void 0;
  if (!i) return t.map(a).join("/");
  let f = W(i, s),
    b =
      i.every((l) => T.has(l.key)) &&
      (!!f || i.every((l) => u(l, s).length === 0))
        ? s.arrowSep
        : "/";
  if (f) {
    let l = i.map((k) => n({ ...k, ...N }));
    return Y(f, s) + l.join(b);
  }
  return i.map(n).join(b);
}
var j = {
    enter: ["Enter", "enter", "\u23CE"],
    escape: ["Esc", "esc", "\u238B"],
    tab: ["Tab", "tab", "\u21E5"],
    " ": ["Space", "space", "\u2423"],
    backspace: ["Backspace", "backspace", "\u232B"],
    delete: ["Delete", "delete", "\u2326"],
    up: ["\u2191", "\u2191", "\u2191"],
    down: ["\u2193", "\u2193", "\u2193"],
    left: ["\u2190", "\u2190", "\u2190"],
    right: ["\u2192", "\u2192", "\u2192"],
    pageup: ["PageUp", "pgup", "\u21DE"],
    pagedown: ["PageDown", "pgdn", "\u21DF"],
    home: ["Home", "home", "\u2196"],
    end: ["End", "end", "\u2198"],
  },
  L = { title: 0, lower: 1, glyph: 2 },
  x = {
    ctrl: { lower: "ctrl", title: "Ctrl", glyph: "\u2303" },
    shift: { lower: "shift", title: "Shift", glyph: "\u21E7" },
    alt: {
      lower: (t) => (t === "macos" ? "opt" : "alt"),
      title: (t) => (t === "macos" ? "Opt" : "Alt"),
      glyph: "\u2325",
    },
    super: {
      lower: (t) => (t === "macos" ? "cmd" : "super"),
      title: (t) => (t === "macos" ? "Cmd" : "Super"),
      glyph: "\u2318",
    },
  },
  T = new Set(["up", "down", "left", "right"]),
  N = { ctrl: !1, alt: !1, shift: !1, meta: !1, super: !1 };
function S(t) {
  let o = [];
  if (t.ctrl) o.push("ctrl");
  if (t.shift) o.push("shift");
  if (t.alt || t.meta) o.push("alt");
  if (t.super) o.push("super");
  return o;
}
function m(t, o) {
  let s = x[t][o.modCase];
  return typeof s === "function" ? s(o.platform) : s;
}
function B(t, o) {
  let s = j[t];
  if (s) return s[L[o.keyCase]];
  return o.charCase === "upper" ? t.toUpperCase() : t;
}
function v(t) {
  return (
    t.shift &&
    !t.ctrl &&
    !t.alt &&
    !t.meta &&
    !t.super &&
    t.key.length === 1 &&
    t.key >= "a" &&
    t.key <= "z"
  );
}
function U(t, o) {
  if (o.shiftAsCase && v(t)) return t.key.toUpperCase();
  let s = S(t),
    n = B(t.key, o);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return `^${n}`;
  if (o.modCase === "glyph") return s.map((a) => m(a, o)).join("") + n;
  return [...s.map((a) => m(a, o)), n].join(o.modSep);
}
function W(t, o) {
  let [s, ...n] = t;
  if (!u(s, o).length) return;
  return n.every((i) => H(s, i, o)) ? s : void 0;
}
function u(t, o) {
  if (o.shiftAsCase && v(t)) return [];
  return S(t);
}
function H(t, o, s) {
  let n = u(t, s),
    a = u(o, s);
  return n.length === a.length && n.every((i, f) => i === a[f]);
}
function Y(t, o) {
  let s = S(t);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return "^";
  if (o.modCase === "glyph") return s.map((n) => m(n, o)).join("");
  return s.map((n) => m(n, o)).join(o.modSep) + o.modSep;
}
F();
function KeybindingHint(ae) {
  let h = _(13),
    { chord: w, action: c, format: P, parens: q, bold: z } = ae,
    ie = q === void 0 ? !1 : q,
    R = z === void 0 ? !1 : z,
    I;
  if (h[0] === MEMO_CACHE_SENTINEL) ((I = O()), (h[0] = I));
  else I = h[0];
  let le = I,
    X;
  if (h[1] !== w || h[2] !== P)
    ((X = K(w, P, le)), (h[1] = w), (h[2] = P), (h[3] = X));
  else X = h[3];
  let y = X;
  if (!y) {
    return null;
  }
  let G;
  if (h[4] !== R || h[5] !== y)
    ((G = R ? e(sa, { bold: !0, children: y }) : y),
      (h[4] = R),
      (h[5] = y),
      (h[6] = G));
  else G = h[6];
  let d = G;
  if (ie) {
    let g;
    if (h[7] !== c || h[8] !== d)
      ((g = r(sa, { children: ["(", d, " to ", c, ")"] })),
        (h[7] = c),
        (h[8] = d),
        (h[9] = g));
    else g = h[9];
    return g;
  }
  let g;
  if (h[10] !== c || h[11] !== d)
    ((g = r(sa, { children: [d, " to ", c] })),
      (h[10] = c),
      (h[11] = d),
      (h[12] = g));
  else g = h[12];
  return g;
}
function O() {
  return getKeybindingPlatform() === "macos" ? "macos" : "other";
}
function K(t, o, s) {
  let n = (typeof t === "string" ? [t] : t).filter((a) => a !== "");
  return formatKeybindingChord(n.map(parseKeybindingChord), { ...o, platform: o?.platform ?? s });
}
export { formatKeybindingChord, KeybindingHint };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { commonJS, importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var mee = commonJS(function (ITs, qRt) {
  var zRt = {
      DOT_LITERAL: "\\.",
      PLUS_LITERAL: "\\+",
      QMARK_LITERAL: "\\?",
      SLASH_LITERAL: "\\/",
      ONE_CHAR: "(?=.)",
      QMARK: "[^/]",
      END_ANCHOR: "(?:\\/|$)",
      DOTS_SLASH: "\\.{1,2}(?:\\/|$)",
      NO_DOT: "(?!\\.)",
      NO_DOTS: "(?!(?:^|\\/)\\.{1,2}(?:\\/|$))",
      NO_DOT_SLASH: "(?!\\.{0,1}(?:\\/|$))",
      NO_DOTS_SLASH: "(?!\\.{1,2}(?:\\/|$))",
      QMARK_NO_DOT: "[^.\\/]",
      STAR: "[^/]*?",
      START_ANCHOR: "(?:^|\\/)",
      SEP: "/",
    },
    vSr = {
      ...zRt,
      SLASH_LITERAL: "[\\\\/]",
      QMARK: "[^\\\\/]",
      STAR: "[^\\\\/]*?",
      DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)",
      NO_DOT: "(?!\\.)",
      NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",
      NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))",
      NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))",
      QMARK_NO_DOT: "[^.\\\\/]",
      START_ANCHOR: "(?:^|[\\\\/])",
      END_ANCHOR: "(?:[\\\\/]|$)",
      SEP: "\\",
    },
    CSr = {
      __proto__: null,
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9",
    };
  qRt.exports = {
    DEFAULT_MAX_EXTGLOB_RECURSION: 0,
    MAX_LENGTH: 65536,
    POSIX_REGEX_SOURCE: CSr,
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    REPLACEMENTS: {
      __proto__: null,
      "***": "*",
      "**/**": "**",
      "**/**/**": "**",
    },
    CHAR_0: 48,
    CHAR_9: 57,
    CHAR_UPPERCASE_A: 65,
    CHAR_LOWERCASE_A: 97,
    CHAR_UPPERCASE_Z: 90,
    CHAR_LOWERCASE_Z: 122,
    CHAR_LEFT_PARENTHESES: 40,
    CHAR_RIGHT_PARENTHESES: 41,
    CHAR_ASTERISK: 42,
    CHAR_AMPERSAND: 38,
    CHAR_AT: 64,
    CHAR_BACKWARD_SLASH: 92,
    CHAR_CARRIAGE_RETURN: 13,
    CHAR_CIRCUMFLEX_ACCENT: 94,
    CHAR_COLON: 58,
    CHAR_COMMA: 44,
    CHAR_DOT: 46,
    CHAR_DOUBLE_QUOTE: 34,
    CHAR_EQUAL: 61,
    CHAR_EXCLAMATION_MARK: 33,
    CHAR_FORM_FEED: 12,
    CHAR_FORWARD_SLASH: 47,
    CHAR_GRAVE_ACCENT: 96,
    CHAR_HASH: 35,
    CHAR_HYPHEN_MINUS: 45,
    CHAR_LEFT_ANGLE_BRACKET: 60,
    CHAR_LEFT_CURLY_BRACE: 123,
    CHAR_LEFT_SQUARE_BRACKET: 91,
    CHAR_LINE_FEED: 10,
    CHAR_NO_BREAK_SPACE: 160,
    CHAR_PERCENT: 37,
    CHAR_PLUS: 43,
    CHAR_QUESTION_MARK: 63,
    CHAR_RIGHT_ANGLE_BRACKET: 62,
    CHAR_RIGHT_CURLY_BRACE: 125,
    CHAR_RIGHT_SQUARE_BRACKET: 93,
    CHAR_SEMICOLON: 59,
    CHAR_SINGLE_QUOTE: 39,
    CHAR_SPACE: 32,
    CHAR_TAB: 9,
    CHAR_UNDERSCORE: 95,
    CHAR_VERTICAL_LINE: 124,
    CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    extglobChars(e) {
      return {
        "!": { type: "negate", open: "(?:(?!(?:", close: `))${e.STAR})` },
        "?": { type: "qmark", open: "(?:", close: ")?" },
        "+": { type: "plus", open: "(?:", close: ")+" },
        "*": { type: "star", open: "(?:", close: ")*" },
        "@": { type: "at", open: "(?:", close: ")" },
      };
    },
    globChars(e) {
      return e === !0 ? vSr : zRt;
    },
  };
});
var gee = commonJS(function (ISr) {
  var {
    REGEX_BACKSLASH: xSr,
    REGEX_REMOVE_BACKSLASH: ASr,
    REGEX_SPECIAL_CHARS: RSr,
    REGEX_SPECIAL_CHARS_GLOBAL: PSr,
  } = mee();
  ISr.isObject = (e) =>
    e !== null && typeof e === "object" && !Array.isArray(e);
  ISr.hasRegexChars = (e) => RSr.test(e);
  ISr.isRegexChar = (e) => e.length === 1 && ISr.hasRegexChars(e);
  ISr.escapeRegex = (e) => e.replace(PSr, "\\$1");
  ISr.toPosixSlashes = (e) => e.replace(xSr, "/");
  ISr.isWindows = () => {
    if (typeof navigator < "u" && navigator.platform) {
      let e = navigator.platform.toLowerCase();
      return e === "win32" || e === "windows";
    }
    if (typeof process < "u") return !1;
    return !1;
  };
  ISr.removeBackslashes = (e) => e.replace(ASr, (t) => (t === "\\" ? "" : t));
  ISr.escapeLast = (e, t, r) => {
    let o = e.lastIndexOf(t, r);
    if (o === -1) return e;
    if (e[o - 1] === "\\") return ISr.escapeLast(e, t, o - 1);
    return `${e.slice(0, o)}\\${e.slice(o)}`;
  };
  ISr.removePrefix = (e, t = {}) => {
    let r = e;
    if (r.startsWith("./")) ((r = r.slice(2)), (t.prefix = "./"));
    return r;
  };
  ISr.wrapOutput = (e, t = {}, r = {}) => {
    let o = r.contains ? "" : "^",
      d = r.contains ? "" : "$",
      p = `${o}(?:${e})${d}`;
    if (t.negated === !0) p = `(?:^(?!${p}).*$)`;
    return p;
  };
  ISr.basename = (e, { windows: t } = {}) => {
    let r = e.split(t ? /[\\/]/ : "/"),
      o = r[r.length - 1];
    if (o === "") return r[r.length - 2];
    return o;
  };
});
var oPt = commonJS(function (OTs, rPt) {
  var QRt = gee(),
    {
      CHAR_ASTERISK: bWe,
      CHAR_AT: HSr,
      CHAR_BACKWARD_SLASH: hee,
      CHAR_COMMA: jSr,
      CHAR_DOT: SWe,
      CHAR_EXCLAMATION_MARK: kWe,
      CHAR_FORWARD_SLASH: nPt,
      CHAR_LEFT_CURLY_BRACE: wWe,
      CHAR_LEFT_PARENTHESES: EWe,
      CHAR_LEFT_SQUARE_BRACKET: WSr,
      CHAR_PLUS: GSr,
      CHAR_QUESTION_MARK: JRt,
      CHAR_RIGHT_CURLY_BRACE: zSr,
      CHAR_RIGHT_PARENTHESES: ZRt,
      CHAR_RIGHT_SQUARE_BRACKET: qSr,
    } = mee(),
    ePt = (e) => e === nPt || e === hee,
    tPt = (e) => {
      if (e.isPrefix !== !0) e.depth = e.isGlobstar ? 1 / 0 : 1;
    },
    VSr = (e, t) => {
      let r = t || {},
        o = e.length - 1,
        d = r.parts === !0 || r.scanToEnd === !0,
        p = [],
        _ = [],
        E = [],
        C = e,
        I = -1,
        D = 0,
        N = 0,
        F = !1,
        U = !1,
        V = !1,
        re = !1,
        ue = !1,
        de = !1,
        _e = !1,
        Se = !1,
        ve = !1,
        Me = !1,
        xe = 0,
        Oe,
        Ne,
        De = { value: "", depth: 0, isGlob: !1 },
        He = () => I >= o,
        je = () => C.charCodeAt(I + 1),
        Ke = () => ((Oe = Ne), C.charCodeAt(++I));
      while (I < o) {
        Ne = Ke();
        let en;
        if (Ne === hee) {
          if (((_e = De.backslashes = !0), (Ne = Ke()), Ne === wWe)) de = !0;
          continue;
        }
        if (de === !0 || Ne === wWe) {
          xe++;
          while (He() !== !0 && (Ne = Ke())) {
            if (Ne === hee) {
              ((_e = De.backslashes = !0), Ke());
              continue;
            }
            if (Ne === wWe) {
              xe++;
              continue;
            }
            if (de !== !0 && Ne === SWe && (Ne = Ke()) === SWe) {
              if (
                ((F = De.isBrace = !0),
                (V = De.isGlob = !0),
                (Me = !0),
                d === !0)
              )
                continue;
              break;
            }
            if (de !== !0 && Ne === jSr) {
              if (
                ((F = De.isBrace = !0),
                (V = De.isGlob = !0),
                (Me = !0),
                d === !0)
              )
                continue;
              break;
            }
            if (Ne === zSr) {
              if ((xe--, xe === 0)) {
                ((de = !1), (F = De.isBrace = !0), (Me = !0));
                break;
              }
            }
          }
          if (d === !0) continue;
          break;
        }
        if (Ne === nPt) {
          if (
            (p.push(I),
            _.push(De),
            (De = { value: "", depth: 0, isGlob: !1 }),
            Me === !0)
          )
            continue;
          if (Oe === SWe && I === D + 1) {
            D += 2;
            continue;
          }
          N = I + 1;
          continue;
        }
        if (r.noext !== !0) {
          if (
            (Ne === GSr ||
              Ne === HSr ||
              Ne === bWe ||
              Ne === JRt ||
              Ne === kWe) === !0 &&
            je() === EWe
          ) {
            if (
              ((V = De.isGlob = !0),
              (re = De.isExtglob = !0),
              (Me = !0),
              Ne === kWe && I === D)
            )
              ve = !0;
            if (d === !0) {
              while (He() !== !0 && (Ne = Ke())) {
                if (Ne === hee) {
                  ((_e = De.backslashes = !0), (Ne = Ke()));
                  continue;
                }
                if (Ne === ZRt) {
                  ((V = De.isGlob = !0), (Me = !0));
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (Ne === bWe) {
          if (Oe === bWe) ue = De.isGlobstar = !0;
          if (((V = De.isGlob = !0), (Me = !0), d === !0)) continue;
          break;
        }
        if (Ne === JRt) {
          if (((V = De.isGlob = !0), (Me = !0), d === !0)) continue;
          break;
        }
        if (Ne === WSr) {
          while (He() !== !0 && (en = Ke())) {
            if (en === hee) {
              ((_e = De.backslashes = !0), Ke());
              continue;
            }
            if (en === qSr) {
              ((U = De.isBracket = !0), (V = De.isGlob = !0), (Me = !0));
              break;
            }
          }
          if (d === !0) continue;
          break;
        }
        if (r.nonegate !== !0 && Ne === kWe && I === D) {
          ((Se = De.negated = !0), D++);
          continue;
        }
        if (r.noparen !== !0 && Ne === EWe) {
          if (((V = De.isGlob = !0), d === !0)) {
            while (He() !== !0 && (Ne = Ke())) {
              if (Ne === EWe) {
                ((_e = De.backslashes = !0), (Ne = Ke()));
                continue;
              }
              if (Ne === ZRt) {
                Me = !0;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (V === !0) {
          if (((Me = !0), d === !0)) continue;
          break;
        }
      }
      if (r.noext === !0) ((re = !1), (V = !1));
      let ct = C,
        vt = "",
        ut = "";
      if (D > 0) ((vt = C.slice(0, D)), (C = C.slice(D)), (N -= D));
      if (ct && V === !0 && N > 0) ((ct = C.slice(0, N)), (ut = C.slice(N)));
      else if (V === !0) ((ct = ""), (ut = C));
      else ct = C;
      if (ct && ct !== "" && ct !== "/" && ct !== C) {
        if (ePt(ct.charCodeAt(ct.length - 1))) ct = ct.slice(0, -1);
      }
      if (r.unescape === !0) {
        if (ut) ut = QRt.removeBackslashes(ut);
        if (ct && _e === !0) ct = QRt.removeBackslashes(ct);
      }
      let Wt = {
        prefix: vt,
        input: e,
        start: D,
        base: ct,
        glob: ut,
        isBrace: F,
        isBracket: U,
        isGlob: V,
        isExtglob: re,
        isGlobstar: ue,
        negated: Se,
        negatedExtglob: ve,
      };
      if (r.tokens === !0) {
        if (((Wt.maxDepth = 0), !ePt(Ne))) _.push(De);
        Wt.tokens = _;
      }
      if (r.parts === !0 || r.tokens === !0) {
        let en;
        for (let tn = 0; tn < p.length; tn++) {
          let dn = en ? en + 1 : D,
            cn = p[tn],
            It = e.slice(dn, cn);
          if (r.tokens) {
            if (tn === 0 && D !== 0)
              ((_[tn].isPrefix = !0), (_[tn].value = vt));
            else _[tn].value = It;
            (tPt(_[tn]), (Wt.maxDepth += _[tn].depth));
          }
          if (tn !== 0 || It !== "") E.push(It);
          en = cn;
        }
        if (en && en + 1 < e.length) {
          let tn = e.slice(en + 1);
          if ((E.push(tn), r.tokens))
            ((_[_.length - 1].value = tn),
              tPt(_[_.length - 1]),
              (Wt.maxDepth += _[_.length - 1].depth));
        }
        ((Wt.slashes = p), (Wt.parts = E));
      }
      return Wt;
    };
  rPt.exports = VSr;
});
var cPt = commonJS(function (DTs, lPt) {
  var yee = mee(),
    fx = gee(),
    {
      MAX_LENGTH: Dhe,
      POSIX_REGEX_SOURCE: KSr,
      REGEX_NON_SPECIAL_CHARS: YSr,
      REGEX_SPECIAL_CHARS_BACKREF: XSr,
      REPLACEMENTS: sPt,
    } = yee,
    QSr = (e, t) => {
      if (typeof t.expandRange === "function") return t.expandRange(...e, t);
      e.sort();
      let r = `[${e.join("-")}]`;
      try {
        new RegExp(r);
      } catch (o) {
        return e.map((d) => fx.escapeRegex(d)).join("..");
      }
      return r;
    },
    y4 = (e, t) =>
      `Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,
    iPt = (e) => {
      let t = [],
        r = 0,
        o = 0,
        d = 0,
        p = "",
        _ = !1;
      for (let E of e) {
        if (_ === !0) {
          ((p += E), (_ = !1));
          continue;
        }
        if (E === "\\") {
          ((p += E), (_ = !0));
          continue;
        }
        if (E === '"') {
          ((d = d === 1 ? 0 : 1), (p += E));
          continue;
        }
        if (d === 0) {
          if (E === "[") r++;
          else if (E === "]" && r > 0) r--;
          else if (r === 0) {
            if (E === "(") o++;
            else if (E === ")" && o > 0) o--;
            else if (E === "|" && o === 0) {
              (t.push(p), (p = ""));
              continue;
            }
          }
        }
        p += E;
      }
      return (t.push(p), t);
    },
    JSr = (e) => {
      let t = !1;
      for (let r of e) {
        if (t === !0) {
          t = !1;
          continue;
        }
        if (r === "\\") {
          t = !0;
          continue;
        }
        if (/[?*+@!()[\]{}]/.test(r)) return !1;
      }
      return !0;
    },
    aPt = (e) => {
      let t = e.trim(),
        r = !0;
      while (r === !0)
        if (((r = !1), /^@\([^\\()[\]{}|]+\)$/.test(t)))
          ((t = t.slice(2, -1)), (r = !0));
      if (!JSr(t)) return;
      return t.replace(/\\(.)/g, "$1");
    },
    ZSr = (e) => {
      let t = e.map(aPt).filter(Boolean);
      for (let r = 0; r < t.length; r++)
        for (let o = r + 1; o < t.length; o++) {
          let d = t[r],
            p = t[o],
            _ = d[0];
          if (!_ || d !== _.repeat(d.length) || p !== _.repeat(p.length))
            continue;
          if (d === p || d.startsWith(p) || p.startsWith(d)) return !0;
        }
      return !1;
    },
    TWe = (e, t = !0) => {
      if ((e[0] !== "+" && e[0] !== "*") || e[1] !== "(") return;
      let r = 0,
        o = 0,
        d = 0,
        p = !1;
      for (let _ = 1; _ < e.length; _++) {
        let E = e[_];
        if (p === !0) {
          p = !1;
          continue;
        }
        if (E === "\\") {
          p = !0;
          continue;
        }
        if (E === '"') {
          d = d === 1 ? 0 : 1;
          continue;
        }
        if (d === 1) continue;
        if (E === "[") {
          r++;
          continue;
        }
        if (E === "]" && r > 0) {
          r--;
          continue;
        }
        if (r > 0) continue;
        if (E === "(") {
          o++;
          continue;
        }
        if (E === ")") {
          if ((o--, o === 0)) {
            if (t === !0 && _ !== e.length - 1) return;
            return { type: e[0], body: e.slice(2, _), end: _ };
          }
        }
      }
    },
    ekr = (e) => {
      let t = 0,
        r = [];
      while (t < e.length) {
        let d = TWe(e.slice(t), !1);
        if (!d || d.type !== "*") return;
        let p = iPt(d.body).map((E) => E.trim());
        if (p.length !== 1) return;
        let _ = aPt(p[0]);
        if (!_ || _.length !== 1) return;
        (r.push(_), (t += d.end + 1));
      }
      if (r.length < 1) return;
      return `${r.length === 1 ? fx.escapeRegex(r[0]) : `[${r.map((d) => fx.escapeRegex(d)).join("")}]`}*`;
    },
    tkr = (e) => {
      let t = 0,
        r = e.trim(),
        o = TWe(r);
      while (o) (t++, (r = o.body.trim()), (o = TWe(r)));
      return t;
    },
    nkr = (e, t) => {
      if (t.maxExtglobRecursion === !1) return { risky: !1 };
      let r =
          typeof t.maxExtglobRecursion === "number"
            ? t.maxExtglobRecursion
            : yee.DEFAULT_MAX_EXTGLOB_RECURSION,
        o = iPt(e).map((d) => d.trim());
      if (o.length > 1) {
        if (
          o.some((d) => d === "") ||
          o.some((d) => /^[*?]+$/.test(d)) ||
          ZSr(o)
        )
          return { risky: !0 };
      }
      for (let d of o) {
        let p = ekr(d);
        if (p) return { risky: !0, safeOutput: p };
        if (tkr(d) > r) return { risky: !0 };
      }
      return { risky: !1 };
    },
    vWe = (e, t) => {
      if (typeof e !== "string") throw TypeError("Expected a string");
      e = sPt[e] || e;
      let r = { ...t },
        o = typeof r.maxLength === "number" ? Math.min(Dhe, r.maxLength) : Dhe,
        d = e.length;
      if (d > o)
        throw SyntaxError(
          `Input length: ${d}, exceeds maximum allowed length: ${o}`,
        );
      let p = { type: "bos", value: "", output: r.prepend || "" },
        _ = [p],
        E = r.capture ? "" : "?:",
        C = yee.globChars(r.windows),
        I = yee.extglobChars(C),
        {
          DOT_LITERAL: D,
          PLUS_LITERAL: N,
          SLASH_LITERAL: F,
          ONE_CHAR: U,
          DOTS_SLASH: V,
          NO_DOT: re,
          NO_DOT_SLASH: ue,
          NO_DOTS_SLASH: de,
          QMARK: _e,
          QMARK_NO_DOT: Se,
          STAR: ve,
          START_ANCHOR: Me,
        } = C,
        xe = (on) => `(${E}(?:(?!${Me}${on.dot ? V : D}).)*?)`,
        Oe = r.dot ? "" : re,
        Ne = r.dot ? _e : Se,
        De = r.bash === !0 ? xe(r) : ve;
      if (r.capture) De = `(${De})`;
      if (typeof r.noext === "boolean") r.noextglob = r.noext;
      let He = {
        input: e,
        index: -1,
        start: 0,
        dot: r.dot === !0,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: !1,
        negated: !1,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: !1,
        tokens: _,
      };
      ((e = fx.removePrefix(e, He)), (d = e.length));
      let je = [],
        Ke = [],
        ct = [],
        vt = p,
        ut,
        Wt = () => He.index === d - 1,
        en = (He.peek = (on = 1) => e[He.index + on]),
        tn = (He.advance = () => e[++He.index] || ""),
        dn = () => e.slice(He.index + 1),
        cn = (on = "", En = 0) => {
          ((He.consumed += on), (He.index += En));
        },
        It = (on) => {
          ((He.output += on.output != null ? on.output : on.value),
            cn(on.value));
        },
        Dn = () => {
          let on = 1;
          while (en() === "!" && (en(2) !== "(" || en(3) === "?"))
            (tn(), He.start++, on++);
          if (on % 2 === 0) return !1;
          return ((He.negated = !0), He.start++, !0);
        },
        gn = (on) => {
          (He[on]++, ct.push(on));
        },
        Qt = (on) => {
          (He[on]--, ct.pop());
        },
        wn = (on) => {
          if (vt.type === "globstar") {
            let En =
                He.braces > 0 && (on.type === "comma" || on.type === "brace"),
              $n =
                on.extglob === !0 ||
                (je.length && (on.type === "pipe" || on.type === "paren"));
            if (on.type !== "slash" && on.type !== "paren" && !En && !$n)
              ((He.output = He.output.slice(0, -vt.output.length)),
                (vt.type = "star"),
                (vt.value = "*"),
                (vt.output = De),
                (He.output += vt.output));
          }
          if (je.length && on.type !== "paren")
            je[je.length - 1].inner += on.value;
          if (on.value || on.output) It(on);
          if (vt && vt.type === "text" && on.type === "text") {
            ((vt.output = (vt.output || vt.value) + on.value),
              (vt.value += on.value));
            return;
          }
          ((on.prev = vt), _.push(on), (vt = on));
        },
        un = (on, En) => {
          let $n = { ...I[En], conditions: 1, inner: "" };
          (($n.prev = vt),
            ($n.parens = He.parens),
            ($n.output = He.output),
            ($n.startIndex = He.index),
            ($n.tokensIndex = _.length));
          let ur = (r.capture ? "(" : "") + $n.open;
          (gn("parens"),
            wn({ type: on, value: En, output: He.output ? "" : U }),
            wn({ type: "paren", extglob: !0, value: tn(), output: ur }),
            je.push($n));
        },
        kn = (on) => {
          let En = e.slice(on.startIndex, He.index + 1),
            $n = e.slice(on.startIndex + 2, He.index),
            ur = nkr($n, r);
          if ((on.type === "plus" || on.type === "star") && ur.risky) {
            let hn = ur.safeOutput
                ? (on.output ? "" : U) +
                  (r.capture ? `(${ur.safeOutput})` : ur.safeOutput)
                : void 0,
              At = _[on.tokensIndex];
            ((At.type = "text"),
              (At.value = En),
              (At.output = hn || fx.escapeRegex(En)));
            for (let Fn = on.tokensIndex + 1; Fn < _.length; Fn++)
              ((_[Fn].value = ""), (_[Fn].output = ""), delete _[Fn].suffix);
            ((He.output = on.output + At.output),
              (He.backtrack = !0),
              wn({ type: "paren", extglob: !0, value: ut, output: "" }),
              Qt("parens"));
            return;
          }
          let Cn = on.close + (r.capture ? ")" : ""),
            Kn;
          if (on.type === "negate") {
            let hn = De;
            if (on.inner && on.inner.length > 1 && on.inner.includes("/"))
              hn = xe(r);
            if (hn !== De || Wt() || /^\)+$/.test(dn()))
              Cn = on.close = `)$))${hn}`;
            if (
              on.inner.includes("*") &&
              (Kn = dn()) &&
              /^\.[^\\/.]+$/.test(Kn)
            ) {
              let At = vWe(Kn, { ...t, fastpaths: !1 }).output;
              Cn = on.close = `)${At})${hn})`;
            }
            if (on.prev.type === "bos") He.negatedExtglob = !0;
          }
          (wn({ type: "paren", extglob: !0, value: ut, output: Cn }),
            Qt("parens"));
        };
      if (r.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(e)) {
        let on = !1,
          En = e.replace(XSr, ($n, ur, Cn, Kn, hn, At) => {
            if (Kn === "\\") return ((on = !0), $n);
            if (Kn === "?") {
              if (ur) return ur + Kn + (hn ? _e.repeat(hn.length) : "");
              if (At === 0) return Ne + (hn ? _e.repeat(hn.length) : "");
              return _e.repeat(Cn.length);
            }
            if (Kn === ".") return D.repeat(Cn.length);
            if (Kn === "*") {
              if (ur) return ur + Kn + (hn ? De : "");
              return De;
            }
            return ur ? $n : `\\${$n}`;
          });
        if (on === !0)
          if (r.unescape === !0) En = En.replace(/\\/g, "");
          else
            En = En.replace(/\\+/g, ($n) =>
              $n.length % 2 === 0 ? "\\\\" : $n ? "\\" : "",
            );
        if (En === e && r.contains === !0) return ((He.output = e), He);
        return ((He.output = fx.wrapOutput(En, He, t)), He);
      }
      while (!Wt()) {
        if (((ut = tn()), ut === "\x00")) continue;
        if (ut === "\\") {
          let $n = en();
          if ($n === "/" && r.bash !== !0) continue;
          if ($n === "." || $n === ";") continue;
          if (!$n) {
            ((ut += "\\"), wn({ type: "text", value: ut }));
            continue;
          }
          let ur = /^\\+/.exec(dn()),
            Cn = 0;
          if (ur && ur[0].length > 2) {
            if (((Cn = ur[0].length), (He.index += Cn), Cn % 2 !== 0))
              ut += "\\";
          }
          if (r.unescape === !0) ut = tn();
          else ut += tn();
          if (He.brackets === 0) {
            wn({ type: "text", value: ut });
            continue;
          }
        }
        if (
          He.brackets > 0 &&
          (ut !== "]" || vt.value === "[" || vt.value === "[^")
        ) {
          if (r.posix !== !1 && ut === ":") {
            let $n = vt.value.slice(1);
            if ($n.includes("[")) {
              if (((vt.posix = !0), $n.includes(":"))) {
                let ur = vt.value.lastIndexOf("["),
                  Cn = vt.value.slice(0, ur),
                  Kn = vt.value.slice(ur + 2),
                  hn = KSr[Kn];
                if (hn) {
                  if (
                    ((vt.value = Cn + hn),
                    (He.backtrack = !0),
                    tn(),
                    !p.output && _.indexOf(vt) === 1)
                  )
                    p.output = U;
                  continue;
                }
              }
            }
          }
          if ((ut === "[" && en() !== ":") || (ut === "-" && en() === "]"))
            ut = `\\${ut}`;
          if (ut === "]" && (vt.value === "[" || vt.value === "[^"))
            ut = `\\${ut}`;
          if (r.posix === !0 && ut === "!" && vt.value === "[") ut = "^";
          ((vt.value += ut), It({ value: ut }));
          continue;
        }
        if (He.quotes === 1 && ut !== '"') {
          ((ut = fx.escapeRegex(ut)), (vt.value += ut), It({ value: ut }));
          continue;
        }
        if (ut === '"') {
          if (((He.quotes = He.quotes === 1 ? 0 : 1), r.keepQuotes === !0))
            wn({ type: "text", value: ut });
          continue;
        }
        if (ut === "(") {
          (gn("parens"), wn({ type: "paren", value: ut }));
          continue;
        }
        if (ut === ")") {
          if (He.parens === 0 && r.strictBrackets === !0)
            throw SyntaxError(y4("opening", "("));
          let $n = je[je.length - 1];
          if ($n && He.parens === $n.parens + 1) {
            kn(je.pop());
            continue;
          }
          (wn({ type: "paren", value: ut, output: He.parens ? ")" : "\\)" }),
            Qt("parens"));
          continue;
        }
        if (ut === "[") {
          if (r.nobracket === !0 || !dn().includes("]")) {
            if (r.nobracket !== !0 && r.strictBrackets === !0)
              throw SyntaxError(y4("closing", "]"));
            ut = `\\${ut}`;
          } else gn("brackets");
          wn({ type: "bracket", value: ut });
          continue;
        }
        if (ut === "]") {
          if (
            r.nobracket === !0 ||
            (vt && vt.type === "bracket" && vt.value.length === 1)
          ) {
            wn({ type: "text", value: ut, output: `\\${ut}` });
            continue;
          }
          if (He.brackets === 0) {
            if (r.strictBrackets === !0) throw SyntaxError(y4("opening", "["));
            wn({ type: "text", value: ut, output: `\\${ut}` });
            continue;
          }
          Qt("brackets");
          let $n = vt.value.slice(1);
          if (vt.posix !== !0 && $n[0] === "^" && !$n.includes("/"))
            ut = `/${ut}`;
          if (
            ((vt.value += ut),
            It({ value: ut }),
            r.literalBrackets === !1 || fx.hasRegexChars($n))
          )
            continue;
          let ur = fx.escapeRegex(vt.value);
          if (
            ((He.output = He.output.slice(0, -vt.value.length)),
            r.literalBrackets === !0)
          ) {
            ((He.output += ur), (vt.value = ur));
            continue;
          }
          ((vt.value = `(${E}${ur}|${vt.value})`), (He.output += vt.value));
          continue;
        }
        if (ut === "{" && r.nobrace !== !0) {
          gn("braces");
          let $n = {
            type: "brace",
            value: ut,
            output: "(",
            outputIndex: He.output.length,
            tokensIndex: He.tokens.length,
          };
          (Ke.push($n), wn($n));
          continue;
        }
        if (ut === "}") {
          let $n = Ke[Ke.length - 1];
          if (r.nobrace === !0 || !$n) {
            wn({ type: "text", value: ut, output: ut });
            continue;
          }
          let ur = ")";
          if ($n.dots === !0) {
            let Cn = _.slice(),
              Kn = [];
            for (let hn = Cn.length - 1; hn >= 0; hn--) {
              if ((_.pop(), Cn[hn].type === "brace")) break;
              if (Cn[hn].type !== "dots") Kn.unshift(Cn[hn].value);
            }
            ((ur = QSr(Kn, r)), (He.backtrack = !0));
          }
          if ($n.comma !== !0 && $n.dots !== !0) {
            let Cn = He.output.slice(0, $n.outputIndex),
              Kn = He.tokens.slice($n.tokensIndex);
            (($n.value = $n.output = "\\{"),
              (ut = ur = "\\}"),
              (He.output = Cn));
            for (let hn of Kn) He.output += hn.output || hn.value;
          }
          (wn({ type: "brace", value: ut, output: ur }),
            Qt("braces"),
            Ke.pop());
          continue;
        }
        if (ut === "|") {
          if (je.length > 0) je[je.length - 1].conditions++;
          wn({ type: "text", value: ut });
          continue;
        }
        if (ut === ",") {
          let $n = ut,
            ur = Ke[Ke.length - 1];
          if (ur && ct[ct.length - 1] === "braces")
            ((ur.comma = !0), ($n = "|"));
          wn({ type: "comma", value: ut, output: $n });
          continue;
        }
        if (ut === "/") {
          if (vt.type === "dot" && He.index === He.start + 1) {
            ((He.start = He.index + 1),
              (He.consumed = ""),
              (He.output = ""),
              _.pop(),
              (vt = p));
            continue;
          }
          wn({ type: "slash", value: ut, output: F });
          continue;
        }
        if (ut === ".") {
          if (He.braces > 0 && vt.type === "dot") {
            if (vt.value === ".") vt.output = D;
            let $n = Ke[Ke.length - 1];
            ((vt.type = "dots"),
              (vt.output += ut),
              (vt.value += ut),
              ($n.dots = !0));
            continue;
          }
          if (
            He.braces + He.parens === 0 &&
            vt.type !== "bos" &&
            vt.type !== "slash"
          ) {
            wn({ type: "text", value: ut, output: D });
            continue;
          }
          wn({ type: "dot", value: ut, output: D });
          continue;
        }
        if (ut === "?") {
          if (
            !(vt && vt.value === "(") &&
            r.noextglob !== !0 &&
            en() === "(" &&
            en(2) !== "?"
          ) {
            un("qmark", ut);
            continue;
          }
          if (vt && vt.type === "paren") {
            let ur = en(),
              Cn = ut;
            if (
              (vt.value === "(" && !/[!=<:]/.test(ur)) ||
              (ur === "<" && !/<([!=]|\w+>)/.test(dn()))
            )
              Cn = `\\${ut}`;
            wn({ type: "text", value: ut, output: Cn });
            continue;
          }
          if (r.dot !== !0 && (vt.type === "slash" || vt.type === "bos")) {
            wn({ type: "qmark", value: ut, output: Se });
            continue;
          }
          wn({ type: "qmark", value: ut, output: _e });
          continue;
        }
        if (ut === "!") {
          if (r.noextglob !== !0 && en() === "(") {
            if (en(2) !== "?" || !/[!=<:]/.test(en(3))) {
              un("negate", ut);
              continue;
            }
          }
          if (r.nonegate !== !0 && He.index === 0) {
            Dn();
            continue;
          }
        }
        if (ut === "+") {
          if (r.noextglob !== !0 && en() === "(" && en(2) !== "?") {
            un("plus", ut);
            continue;
          }
          if ((vt && vt.value === "(") || r.regex === !1) {
            wn({ type: "plus", value: ut, output: N });
            continue;
          }
          if (
            (vt &&
              (vt.type === "bracket" ||
                vt.type === "paren" ||
                vt.type === "brace")) ||
            He.parens > 0
          ) {
            wn({ type: "plus", value: ut });
            continue;
          }
          wn({ type: "plus", value: N });
          continue;
        }
        if (ut === "@") {
          if (r.noextglob !== !0 && en() === "(" && en(2) !== "?") {
            wn({ type: "at", extglob: !0, value: ut, output: "" });
            continue;
          }
          wn({ type: "text", value: ut });
          continue;
        }
        if (ut !== "*") {
          if (ut === "$" || ut === "^") ut = `\\${ut}`;
          let $n = YSr.exec(dn());
          if ($n) ((ut += $n[0]), (He.index += $n[0].length));
          wn({ type: "text", value: ut });
          continue;
        }
        if (vt && (vt.type === "globstar" || vt.star === !0)) {
          ((vt.type = "star"),
            (vt.star = !0),
            (vt.value += ut),
            (vt.output = De),
            (He.backtrack = !0),
            (He.globstar = !0),
            cn(ut));
          continue;
        }
        let on = dn();
        if (r.noextglob !== !0 && /^\([^?]/.test(on)) {
          un("star", ut);
          continue;
        }
        if (vt.type === "star") {
          if (r.noglobstar === !0) {
            cn(ut);
            continue;
          }
          let $n = vt.prev,
            ur = $n.prev,
            Cn = $n.type === "slash" || $n.type === "bos",
            Kn = ur && (ur.type === "star" || ur.type === "globstar");
          if (r.bash === !0 && (!Cn || (on[0] && on[0] !== "/"))) {
            wn({ type: "star", value: ut, output: "" });
            continue;
          }
          let hn =
              He.braces > 0 && ($n.type === "comma" || $n.type === "brace"),
            At = je.length && ($n.type === "pipe" || $n.type === "paren");
          if (!Cn && $n.type !== "paren" && !hn && !At) {
            wn({ type: "star", value: ut, output: "" });
            continue;
          }
          while (on.slice(0, 3) === "/**") {
            let Fn = e[He.index + 4];
            if (Fn && Fn !== "/") break;
            ((on = on.slice(3)), cn("/**", 3));
          }
          if ($n.type === "bos" && Wt()) {
            ((vt.type = "globstar"),
              (vt.value += ut),
              (vt.output = xe(r)),
              (He.output = vt.output),
              (He.globstar = !0),
              cn(ut));
            continue;
          }
          if ($n.type === "slash" && $n.prev.type !== "bos" && !Kn && Wt()) {
            ((He.output = He.output.slice(0, -($n.output + vt.output).length)),
              ($n.output = `(?:${$n.output}`),
              (vt.type = "globstar"),
              (vt.output = xe(r) + (r.strictSlashes ? ")" : "|$)")),
              (vt.value += ut),
              (He.globstar = !0),
              (He.output += $n.output + vt.output),
              cn(ut));
            continue;
          }
          if ($n.type === "slash" && $n.prev.type !== "bos" && on[0] === "/") {
            let Fn = on[1] !== void 0 ? "|$" : "";
            ((He.output = He.output.slice(0, -($n.output + vt.output).length)),
              ($n.output = `(?:${$n.output}`),
              (vt.type = "globstar"),
              (vt.output = `${xe(r)}${F}|${F}${Fn})`),
              (vt.value += ut),
              (He.output += $n.output + vt.output),
              (He.globstar = !0),
              cn(ut + tn()),
              wn({ type: "slash", value: "/", output: "" }));
            continue;
          }
          if ($n.type === "bos" && on[0] === "/") {
            ((vt.type = "globstar"),
              (vt.value += ut),
              (vt.output = `(?:^|${F}|${xe(r)}${F})`),
              (He.output = vt.output),
              (He.globstar = !0),
              cn(ut + tn()),
              wn({ type: "slash", value: "/", output: "" }));
            continue;
          }
          ((He.output = He.output.slice(0, -vt.output.length)),
            (vt.type = "globstar"),
            (vt.output = xe(r)),
            (vt.value += ut),
            (He.output += vt.output),
            (He.globstar = !0),
            cn(ut));
          continue;
        }
        let En = { type: "star", value: ut, output: De };
        if (r.bash === !0) {
          if (((En.output = ".*?"), vt.type === "bos" || vt.type === "slash"))
            En.output = Oe + En.output;
          wn(En);
          continue;
        }
        if (
          vt &&
          (vt.type === "bracket" || vt.type === "paren") &&
          r.regex === !0
        ) {
          ((En.output = ut), wn(En));
          continue;
        }
        if (He.index === He.start || vt.type === "slash" || vt.type === "dot") {
          if (vt.type === "dot") ((He.output += ue), (vt.output += ue));
          else if (r.dot === !0) ((He.output += de), (vt.output += de));
          else ((He.output += Oe), (vt.output += Oe));
          if (en() !== "*") ((He.output += U), (vt.output += U));
        }
        wn(En);
      }
      while (He.brackets > 0) {
        if (r.strictBrackets === !0) throw SyntaxError(y4("closing", "]"));
        ((He.output = fx.escapeLast(He.output, "[")), Qt("brackets"));
      }
      while (He.parens > 0) {
        if (r.strictBrackets === !0) throw SyntaxError(y4("closing", ")"));
        ((He.output = fx.escapeLast(He.output, "(")), Qt("parens"));
      }
      while (He.braces > 0) {
        if (r.strictBrackets === !0) throw SyntaxError(y4("closing", "}"));
        ((He.output = fx.escapeLast(He.output, "{")), Qt("braces"));
      }
      if (
        r.strictSlashes !== !0 &&
        (vt.type === "star" || vt.type === "bracket")
      )
        wn({ type: "maybe_slash", value: "", output: `${F}?` });
      if (He.backtrack === !0) {
        He.output = "";
        for (let on of He.tokens)
          if (
            ((He.output += on.output != null ? on.output : on.value), on.suffix)
          )
            He.output += on.suffix;
      }
      return He;
    };
  vWe.fastpaths = (e, t) => {
    let r = { ...t },
      o = typeof r.maxLength === "number" ? Math.min(Dhe, r.maxLength) : Dhe,
      d = e.length;
    if (d > o)
      throw SyntaxError(
        `Input length: ${d}, exceeds maximum allowed length: ${o}`,
      );
    e = sPt[e] || e;
    let {
        DOT_LITERAL: p,
        SLASH_LITERAL: _,
        ONE_CHAR: E,
        DOTS_SLASH: C,
        NO_DOT: I,
        NO_DOTS: D,
        NO_DOTS_SLASH: N,
        STAR: F,
        START_ANCHOR: U,
      } = yee.globChars(r.windows),
      V = r.dot ? D : I,
      re = r.dot ? N : I,
      ue = r.capture ? "" : "?:",
      de = { negated: !1, prefix: "" },
      _e = r.bash === !0 ? ".*?" : F;
    if (r.capture) _e = `(${_e})`;
    let Se = (Oe) => {
        if (Oe.noglobstar === !0) return _e;
        return `(${ue}(?:(?!${U}${Oe.dot ? C : p}).)*?)`;
      },
      ve = (Oe) => {
        switch (Oe) {
          case "*":
            return `${V}${E}${_e}`;
          case ".*":
            return `${p}${E}${_e}`;
          case "*.*":
            return `${V}${_e}${p}${E}${_e}`;
          case "*/*":
            return `${V}${_e}${_}${E}${re}${_e}`;
          case "**":
            return V + Se(r);
          case "**/*":
            return `(?:${V}${Se(r)}${_})?${re}${E}${_e}`;
          case "**/*.*":
            return `(?:${V}${Se(r)}${_})?${re}${_e}${p}${E}${_e}`;
          case "**/.*":
            return `(?:${V}${Se(r)}${_})?${p}${E}${_e}`;
          default: {
            let Ne = /^(.*?)\.(\w+)$/.exec(Oe);
            if (!Ne) return;
            let De = ve(Ne[1]);
            if (!De) return;
            return De + p + Ne[2];
          }
        }
      },
      Me = fx.removePrefix(e, de),
      xe = ve(Me);
    if (xe && r.strictSlashes !== !0) xe += `${_}?`;
    return xe;
  };
  lPt.exports = vWe;
});
var fPt = commonJS(function (NTs, dPt) {
  var rkr = oPt(),
    CWe = cPt(),
    uPt = gee(),
    okr = mee(),
    skr = (e) => e && typeof e === "object" && !Array.isArray(e),
    zb = (e, t, r = !1) => {
      if (Array.isArray(e)) {
        let D = e.map((F) => zb(F, t, r));
        return (F) => {
          for (let U of D) {
            let V = U(F);
            if (V) return V;
          }
          return !1;
        };
      }
      let o = skr(e) && e.tokens && e.input;
      if (e === "" || (typeof e !== "string" && !o))
        throw TypeError("Expected pattern to be a non-empty string");
      let d = t || {},
        p = d.windows,
        _ = o ? zb.compileRe(e, t) : zb.makeRe(e, t, !1, !0),
        E = _.state;
      delete _.state;
      let C = () => !1;
      if (d.ignore) {
        let D = { ...t, ignore: null, onMatch: null, onResult: null };
        C = zb(d.ignore, D, r);
      }
      let I = (D, N = !1) => {
        let {
            isMatch: F,
            match: U,
            output: V,
          } = zb.test(D, _, t, { glob: e, posix: p }),
          re = {
            glob: e,
            state: E,
            regex: _,
            posix: p,
            input: D,
            output: V,
            match: U,
            isMatch: F,
          };
        if (typeof d.onResult === "function") d.onResult(re);
        if (F === !1) return ((re.isMatch = !1), N ? re : !1);
        if (C(D)) {
          if (typeof d.onIgnore === "function") d.onIgnore(re);
          return ((re.isMatch = !1), N ? re : !1);
        }
        if (typeof d.onMatch === "function") d.onMatch(re);
        return N ? re : !0;
      };
      if (r) I.state = E;
      return I;
    };
  zb.test = (e, t, r, { glob: o, posix: d } = {}) => {
    if (typeof e !== "string") throw TypeError("Expected input to be a string");
    if (e === "") return { isMatch: !1, output: "" };
    let p = r || {},
      _ = p.format || (d ? uPt.toPosixSlashes : null),
      E = e === o,
      C = E && _ ? _(e) : e;
    if (E === !1) ((C = _ ? _(e) : e), (E = C === o));
    if (E === !1 || p.capture === !0)
      if (p.matchBase === !0 || p.basename === !0) E = zb.matchBase(e, t, r, d);
      else E = t.exec(C);
    return { isMatch: Boolean(E), match: E, output: C };
  };
  zb.matchBase = (e, t, r) =>
    (t instanceof RegExp ? t : zb.makeRe(t, r)).test(uPt.basename(e));
  zb.isMatch = (e, t, r) => zb(t, r)(e);
  zb.parse = (e, t) => {
    if (Array.isArray(e)) return e.map((r) => zb.parse(r, t));
    return CWe(e, { ...t, fastpaths: !1 });
  };
  zb.scan = (e, t) => rkr(e, t);
  zb.compileRe = (e, t, r = !1, o = !1) => {
    if (r === !0) return e.output;
    let d = t || {},
      p = d.contains ? "" : "^",
      _ = d.contains ? "" : "$",
      E = `${p}(?:${e.output})${_}`;
    if (e && e.negated === !0) E = `^(?!${E}).*$`;
    let C = zb.toRegex(E, t);
    if (o === !0) C.state = e;
    return C;
  };
  zb.makeRe = (e, t = {}, r = !1, o = !1) => {
    if (!e || typeof e !== "string")
      throw TypeError("Expected a non-empty string");
    let d = { negated: !1, fastpaths: !0 };
    if (t.fastpaths !== !1 && (e[0] === "." || e[0] === "*"))
      d.output = CWe.fastpaths(e, t);
    if (!d.output) d = CWe(e, t);
    return zb.compileRe(d, t, r, o);
  };
  zb.toRegex = (e, t) => {
    try {
      let r = t || {};
      return new RegExp(e, r.flags || (r.nocase ? "i" : ""));
    } catch (r) {
      if (t && t.debug === !0) throw r;
      return /$^/;
    }
  };
  zb.constants = okr;
  dPt.exports = zb;
});
var picomatchModule = commonJS(function (LTs, gPt) {
  var pPt = fPt(),
    ikr = gee();
  function mPt(e, t, r = !1) {
    if (t && (t.windows === null || t.windows === void 0))
      t = { ...t, windows: ikr.isWindows() };
    return pPt(e, t, r);
  }
  Object.assign(mPt, pPt);
  gPt.exports = mPt;
});
var yp = commonJS(function ($Ps, e0t) {
  e0t.exports = { options: { usePureJavaScript: !1 } };
});
var r0t = commonJS(function (BPs, n0t) {
  var O2e = {};
  n0t.exports = O2e;
  var t0t = {};
  O2e.encode = function (e, t, r) {
    if (typeof t !== "string") throw TypeError('"alphabet" must be a string.');
    if (r !== void 0 && typeof r !== "number")
      throw TypeError('"maxline" must be a number.');
    var o = "";
    if (!(e instanceof Uint8Array)) o = mTr(e, t);
    else {
      var d = 0,
        p = t.length,
        _ = t.charAt(0),
        E = [0];
      for (d = 0; d < e.length; ++d) {
        for (var C = 0, I = e[d]; C < E.length; ++C)
          ((I += E[C] << 8), (E[C] = I % p), (I = (I / p) | 0));
        while (I > 0) (E.push(I % p), (I = (I / p) | 0));
      }
      for (d = 0; e[d] === 0 && d < e.length - 1; ++d) o += _;
      for (d = E.length - 1; d >= 0; --d) o += t[E[d]];
    }
    if (r) {
      var D = new RegExp(".{1," + r + "}", "g");
      o = o.match(D).join(`\r
`);
    }
    return o;
  };
  O2e.decode = function (e, t) {
    if (typeof e !== "string") throw TypeError('"input" must be a string.');
    if (typeof t !== "string") throw TypeError('"alphabet" must be a string.');
    var r = t0t[t];
    if (!r) {
      r = t0t[t] = [];
      for (var o = 0; o < t.length; ++o) r[t.charCodeAt(o)] = o;
    }
    e = e.replace(/\s/g, "");
    var d = t.length,
      p = t.charAt(0),
      _ = [0];
    for (var o = 0; o < e.length; o++) {
      var E = r[e.charCodeAt(o)];
      if (E === void 0) return;
      for (var C = 0, I = E; C < _.length; ++C)
        ((I += _[C] * d), (_[C] = I & 255), (I >>= 8));
      while (I > 0) (_.push(I & 255), (I >>= 8));
    }
    for (var D = 0; e[D] === p && D < e.length - 1; ++D) _.push(0);
    if (typeof Buffer < "u") return Buffer.from(_.reverse());
    return new Uint8Array(_.reverse());
  };
  function mTr(e, t) {
    var r = 0,
      o = t.length,
      d = t.charAt(0),
      p = [0];
    for (r = 0; r < e.length(); ++r) {
      for (var _ = 0, E = e.at(r); _ < p.length; ++_)
        ((E += p[_] << 8), (p[_] = E % o), (E = (E / o) | 0));
      while (E > 0) (p.push(E % o), (E = (E / o) | 0));
    }
    var C = "";
    for (r = 0; e.at(r) === 0 && r < e.length() - 1; ++r) C += d;
    for (r = p.length - 1; r >= 0; --r) C += t[p[r]];
    return C;
  }
});
var Ig = commonJS(function (UPs, a0t) {
  var o0t = yp(),
    s0t = r0t(),
    Go = (a0t.exports = o0t.util = o0t.util || {});
  (function () {
    if (typeof process < "u" && process.nextTick) {
      if (
        ((Go.nextTick = process.nextTick), typeof setImmediate === "function")
      )
        Go.setImmediate = setImmediate;
      else Go.setImmediate = Go.nextTick;
      return;
    }
    if (typeof setImmediate === "function") {
      ((Go.setImmediate = function () {
        return setImmediate.apply(void 0, arguments);
      }),
        (Go.nextTick = function (E) {
          return setImmediate(E);
        }));
      return;
    }
    if (
      ((Go.setImmediate = function (E) {
        setTimeout(E, 0);
      }),
      typeof window < "u" && typeof window.postMessage === "function")
    ) {
      let E = function (C) {
        if (C.source === window && C.data === e) {
          C.stopPropagation();
          var I = t.slice();
          ((t.length = 0),
            I.forEach(function (D) {
              D();
            }));
        }
      };
      var _ = E,
        e = "forge.setImmediate",
        t = [];
      ((Go.setImmediate = function (C) {
        if ((t.push(C), t.length === 1)) window.postMessage(e, "*");
      }),
        window.addEventListener("message", E, !0));
    }
    if (typeof MutationObserver < "u") {
      var r = Date.now(),
        o = !0,
        d = document.createElement("div"),
        t = [];
      new MutationObserver(function () {
        var C = t.slice();
        ((t.length = 0),
          C.forEach(function (I) {
            I();
          }));
      }).observe(d, { attributes: !0 });
      var p = Go.setImmediate;
      Go.setImmediate = function (C) {
        if (Date.now() - r > 15) ((r = Date.now()), p(C));
        else if ((t.push(C), t.length === 1)) d.setAttribute("a", (o = !o));
      };
    }
    Go.nextTick = Go.setImmediate;
  })();
  Go.isNodejs =
    typeof process < "u" && process.versions && process.versions.node;
  Go.globalScope = (function () {
    if (Go.isNodejs) return global;
    return typeof self > "u" ? window : self;
  })();
  Go.isArray =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
  Go.isArrayBuffer = function (e) {
    return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer;
  };
  Go.isArrayBufferView = function (e) {
    return e && Go.isArrayBuffer(e.buffer) && e.byteLength !== void 0;
  };
  function Lee(e) {
    if (!(e === 8 || e === 16 || e === 24 || e === 32))
      throw Error("Only 8, 16, 24, or 32 bits supported: " + e);
  }
  Go.ByteBuffer = D2e;
  function D2e(e) {
    if (((this.data = ""), (this.read = 0), typeof e === "string"))
      this.data = e;
    else if (Go.isArrayBuffer(e) || Go.isArrayBufferView(e))
      if (typeof Buffer < "u" && e instanceof Buffer)
        this.data = e.toString("binary");
      else {
        var t = new Uint8Array(e);
        try {
          this.data = String.fromCharCode.apply(null, t);
        } catch (o) {
          for (var r = 0; r < t.length; ++r) this.putByte(t[r]);
        }
      }
    else if (
      e instanceof D2e ||
      (typeof e === "object" &&
        typeof e.data === "string" &&
        typeof e.read === "number")
    )
      ((this.data = e.data), (this.read = e.read));
    this._constructedStringLength = 0;
  }
  Go.ByteStringBuffer = D2e;
  var gTr = 4096;
  Go.ByteStringBuffer.prototype._optimizeConstructedString = function (e) {
    if (
      ((this._constructedStringLength += e),
      this._constructedStringLength > gTr)
    )
      (this.data.substr(0, 1), (this._constructedStringLength = 0));
  };
  Go.ByteStringBuffer.prototype.length = function () {
    return this.data.length - this.read;
  };
  Go.ByteStringBuffer.prototype.isEmpty = function () {
    return this.length() <= 0;
  };
  Go.ByteStringBuffer.prototype.putByte = function (e) {
    return this.putBytes(String.fromCharCode(e));
  };
  Go.ByteStringBuffer.prototype.fillWithByte = function (e, t) {
    e = String.fromCharCode(e);
    var r = this.data;
    while (t > 0) {
      if (t & 1) r += e;
      if (((t >>>= 1), t > 0)) e += e;
    }
    return ((this.data = r), this._optimizeConstructedString(t), this);
  };
  Go.ByteStringBuffer.prototype.putBytes = function (e) {
    return ((this.data += e), this._optimizeConstructedString(e.length), this);
  };
  Go.ByteStringBuffer.prototype.putString = function (e) {
    return this.putBytes(Go.encodeUtf8(e));
  };
  Go.ByteStringBuffer.prototype.putInt16 = function (e) {
    return this.putBytes(
      String.fromCharCode((e >> 8) & 255) + String.fromCharCode(e & 255),
    );
  };
  Go.ByteStringBuffer.prototype.putInt24 = function (e) {
    return this.putBytes(
      String.fromCharCode((e >> 16) & 255) +
        String.fromCharCode((e >> 8) & 255) +
        String.fromCharCode(e & 255),
    );
  };
  Go.ByteStringBuffer.prototype.putInt32 = function (e) {
    return this.putBytes(
      String.fromCharCode((e >> 24) & 255) +
        String.fromCharCode((e >> 16) & 255) +
        String.fromCharCode((e >> 8) & 255) +
        String.fromCharCode(e & 255),
    );
  };
  Go.ByteStringBuffer.prototype.putInt16Le = function (e) {
    return this.putBytes(
      String.fromCharCode(e & 255) + String.fromCharCode((e >> 8) & 255),
    );
  };
  Go.ByteStringBuffer.prototype.putInt24Le = function (e) {
    return this.putBytes(
      String.fromCharCode(e & 255) +
        String.fromCharCode((e >> 8) & 255) +
        String.fromCharCode((e >> 16) & 255),
    );
  };
  Go.ByteStringBuffer.prototype.putInt32Le = function (e) {
    return this.putBytes(
      String.fromCharCode(e & 255) +
        String.fromCharCode((e >> 8) & 255) +
        String.fromCharCode((e >> 16) & 255) +
        String.fromCharCode((e >> 24) & 255),
    );
  };
  Go.ByteStringBuffer.prototype.putInt = function (e, t) {
    Lee(t);
    var r = "";
    do ((t -= 8), (r += String.fromCharCode((e >> t) & 255)));
    while (t > 0);
    return this.putBytes(r);
  };
  Go.ByteStringBuffer.prototype.putSignedInt = function (e, t) {
    if (e < 0) e += 2 << (t - 1);
    return this.putInt(e, t);
  };
  Go.ByteStringBuffer.prototype.putBuffer = function (e) {
    return this.putBytes(e.getBytes());
  };
  Go.ByteStringBuffer.prototype.getByte = function () {
    return this.data.charCodeAt(this.read++);
  };
  Go.ByteStringBuffer.prototype.getInt16 = function () {
    var e =
      (this.data.charCodeAt(this.read) << 8) ^
      this.data.charCodeAt(this.read + 1);
    return ((this.read += 2), e);
  };
  Go.ByteStringBuffer.prototype.getInt24 = function () {
    var e =
      (this.data.charCodeAt(this.read) << 16) ^
      (this.data.charCodeAt(this.read + 1) << 8) ^
      this.data.charCodeAt(this.read + 2);
    return ((this.read += 3), e);
  };
  Go.ByteStringBuffer.prototype.getInt32 = function () {
    var e =
      (this.data.charCodeAt(this.read) << 24) ^
      (this.data.charCodeAt(this.read + 1) << 16) ^
      (this.data.charCodeAt(this.read + 2) << 8) ^
      this.data.charCodeAt(this.read + 3);
    return ((this.read += 4), e);
  };
  Go.ByteStringBuffer.prototype.getInt16Le = function () {
    var e =
      this.data.charCodeAt(this.read) ^
      (this.data.charCodeAt(this.read + 1) << 8);
    return ((this.read += 2), e);
  };
  Go.ByteStringBuffer.prototype.getInt24Le = function () {
    var e =
      this.data.charCodeAt(this.read) ^
      (this.data.charCodeAt(this.read + 1) << 8) ^
      (this.data.charCodeAt(this.read + 2) << 16);
    return ((this.read += 3), e);
  };
  Go.ByteStringBuffer.prototype.getInt32Le = function () {
    var e =
      this.data.charCodeAt(this.read) ^
      (this.data.charCodeAt(this.read + 1) << 8) ^
      (this.data.charCodeAt(this.read + 2) << 16) ^
      (this.data.charCodeAt(this.read + 3) << 24);
    return ((this.read += 4), e);
  };
  Go.ByteStringBuffer.prototype.getInt = function (e) {
    Lee(e);
    var t = 0;
    do ((t = (t << 8) + this.data.charCodeAt(this.read++)), (e -= 8));
    while (e > 0);
    return t;
  };
  Go.ByteStringBuffer.prototype.getSignedInt = function (e) {
    var t = this.getInt(e),
      r = 2 << (e - 2);
    if (t >= r) t -= r << 1;
    return t;
  };
  Go.ByteStringBuffer.prototype.getBytes = function (e) {
    var t;
    if (e)
      ((e = Math.min(this.length(), e)),
        (t = this.data.slice(this.read, this.read + e)),
        (this.read += e));
    else if (e === 0) t = "";
    else
      ((t = this.read === 0 ? this.data : this.data.slice(this.read)),
        this.clear());
    return t;
  };
  Go.ByteStringBuffer.prototype.bytes = function (e) {
    return typeof e > "u"
      ? this.data.slice(this.read)
      : this.data.slice(this.read, this.read + e);
  };
  Go.ByteStringBuffer.prototype.at = function (e) {
    return this.data.charCodeAt(this.read + e);
  };
  Go.ByteStringBuffer.prototype.setAt = function (e, t) {
    return (
      (this.data =
        this.data.substr(0, this.read + e) +
        String.fromCharCode(t) +
        this.data.substr(this.read + e + 1)),
      this
    );
  };
  Go.ByteStringBuffer.prototype.last = function () {
    return this.data.charCodeAt(this.data.length - 1);
  };
  Go.ByteStringBuffer.prototype.copy = function () {
    var e = Go.createBuffer(this.data);
    return ((e.read = this.read), e);
  };
  Go.ByteStringBuffer.prototype.compact = function () {
    if (this.read > 0)
      ((this.data = this.data.slice(this.read)), (this.read = 0));
    return this;
  };
  Go.ByteStringBuffer.prototype.clear = function () {
    return ((this.data = ""), (this.read = 0), this);
  };
  Go.ByteStringBuffer.prototype.truncate = function (e) {
    var t = Math.max(0, this.length() - e);
    return (
      (this.data = this.data.substr(this.read, t)),
      (this.read = 0),
      this
    );
  };
  Go.ByteStringBuffer.prototype.toHex = function () {
    var e = "";
    for (var t = this.read; t < this.data.length; ++t) {
      var r = this.data.charCodeAt(t);
      if (r < 16) e += "0";
      e += r.toString(16);
    }
    return e;
  };
  Go.ByteStringBuffer.prototype.toString = function () {
    return Go.decodeUtf8(this.bytes());
  };
  function hTr(e, t) {
    ((t = t || {}),
      (this.read = t.readOffset || 0),
      (this.growSize = t.growSize || 1024));
    var r = Go.isArrayBuffer(e),
      o = Go.isArrayBufferView(e);
    if (r || o) {
      if (r) this.data = new DataView(e);
      else this.data = new DataView(e.buffer, e.byteOffset, e.byteLength);
      this.write = "writeOffset" in t ? t.writeOffset : this.data.byteLength;
      return;
    }
    if (
      ((this.data = new DataView(new ArrayBuffer(0))),
      (this.write = 0),
      e !== null && e !== void 0)
    )
      this.putBytes(e);
    if ("writeOffset" in t) this.write = t.writeOffset;
  }
  Go.DataBuffer = hTr;
  Go.DataBuffer.prototype.length = function () {
    return this.write - this.read;
  };
  Go.DataBuffer.prototype.isEmpty = function () {
    return this.length() <= 0;
  };
  Go.DataBuffer.prototype.accommodate = function (e, t) {
    if (this.length() >= e) return this;
    t = Math.max(t || this.growSize, e);
    var r = new Uint8Array(
        this.data.buffer,
        this.data.byteOffset,
        this.data.byteLength,
      ),
      o = new Uint8Array(this.length() + t);
    return (o.set(r), (this.data = new DataView(o.buffer)), this);
  };
  Go.DataBuffer.prototype.putByte = function (e) {
    return (this.accommodate(1), this.data.setUint8(this.write++, e), this);
  };
  Go.DataBuffer.prototype.fillWithByte = function (e, t) {
    this.accommodate(t);
    for (var r = 0; r < t; ++r) this.data.setUint8(e);
    return this;
  };
  Go.DataBuffer.prototype.putBytes = function (e, t) {
    if (Go.isArrayBufferView(e)) {
      var r = new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
        o = r.byteLength - r.byteOffset;
      this.accommodate(o);
      var d = new Uint8Array(this.data.buffer, this.write);
      return (d.set(r), (this.write += o), this);
    }
    if (Go.isArrayBuffer(e)) {
      var r = new Uint8Array(e);
      this.accommodate(r.byteLength);
      var d = new Uint8Array(this.data.buffer);
      return (d.set(r, this.write), (this.write += r.byteLength), this);
    }
    if (
      e instanceof Go.DataBuffer ||
      (typeof e === "object" &&
        typeof e.read === "number" &&
        typeof e.write === "number" &&
        Go.isArrayBufferView(e.data))
    ) {
      var r = new Uint8Array(e.data.byteLength, e.read, e.length());
      this.accommodate(r.byteLength);
      var d = new Uint8Array(e.data.byteLength, this.write);
      return (d.set(r), (this.write += r.byteLength), this);
    }
    if (e instanceof Go.ByteStringBuffer) ((e = e.data), (t = "binary"));
    if (((t = t || "binary"), typeof e === "string")) {
      var p;
      if (t === "hex")
        return (
          this.accommodate(Math.ceil(e.length / 2)),
          (p = new Uint8Array(this.data.buffer, this.write)),
          (this.write += Go.binary.hex.decode(e, p, this.write)),
          this
        );
      if (t === "base64")
        return (
          this.accommodate(Math.ceil(e.length / 4) * 3),
          (p = new Uint8Array(this.data.buffer, this.write)),
          (this.write += Go.binary.base64.decode(e, p, this.write)),
          this
        );
      if (t === "utf8") ((e = Go.encodeUtf8(e)), (t = "binary"));
      if (t === "binary" || t === "raw")
        return (
          this.accommodate(e.length),
          (p = new Uint8Array(this.data.buffer, this.write)),
          (this.write += Go.binary.raw.decode(p)),
          this
        );
      if (t === "utf16")
        return (
          this.accommodate(e.length * 2),
          (p = new Uint16Array(this.data.buffer, this.write)),
          (this.write += Go.text.utf16.encode(p)),
          this
        );
      throw Error("Invalid encoding: " + t);
    }
    throw Error("Invalid parameter: " + e);
  };
  Go.DataBuffer.prototype.putBuffer = function (e) {
    return (this.putBytes(e), e.clear(), this);
  };
  Go.DataBuffer.prototype.putString = function (e) {
    return this.putBytes(e, "utf16");
  };
  Go.DataBuffer.prototype.putInt16 = function (e) {
    return (
      this.accommodate(2),
      this.data.setInt16(this.write, e),
      (this.write += 2),
      this
    );
  };
  Go.DataBuffer.prototype.putInt24 = function (e) {
    return (
      this.accommodate(3),
      this.data.setInt16(this.write, (e >> 8) & 65535),
      this.data.setInt8(this.write, (e >> 16) & 255),
      (this.write += 3),
      this
    );
  };
  Go.DataBuffer.prototype.putInt32 = function (e) {
    return (
      this.accommodate(4),
      this.data.setInt32(this.write, e),
      (this.write += 4),
      this
    );
  };
  Go.DataBuffer.prototype.putInt16Le = function (e) {
    return (
      this.accommodate(2),
      this.data.setInt16(this.write, e, !0),
      (this.write += 2),
      this
    );
  };
  Go.DataBuffer.prototype.putInt24Le = function (e) {
    return (
      this.accommodate(3),
      this.data.setInt8(this.write, (e >> 16) & 255),
      this.data.setInt16(this.write, (e >> 8) & 65535, !0),
      (this.write += 3),
      this
    );
  };
  Go.DataBuffer.prototype.putInt32Le = function (e) {
    return (
      this.accommodate(4),
      this.data.setInt32(this.write, e, !0),
      (this.write += 4),
      this
    );
  };
  Go.DataBuffer.prototype.putInt = function (e, t) {
    (Lee(t), this.accommodate(t / 8));
    do ((t -= 8), this.data.setInt8(this.write++, (e >> t) & 255));
    while (t > 0);
    return this;
  };
  Go.DataBuffer.prototype.putSignedInt = function (e, t) {
    if ((Lee(t), this.accommodate(t / 8), e < 0)) e += 2 << (t - 1);
    return this.putInt(e, t);
  };
  Go.DataBuffer.prototype.getByte = function () {
    return this.data.getInt8(this.read++);
  };
  Go.DataBuffer.prototype.getInt16 = function () {
    var e = this.data.getInt16(this.read);
    return ((this.read += 2), e);
  };
  Go.DataBuffer.prototype.getInt24 = function () {
    var e =
      (this.data.getInt16(this.read) << 8) ^ this.data.getInt8(this.read + 2);
    return ((this.read += 3), e);
  };
  Go.DataBuffer.prototype.getInt32 = function () {
    var e = this.data.getInt32(this.read);
    return ((this.read += 4), e);
  };
  Go.DataBuffer.prototype.getInt16Le = function () {
    var e = this.data.getInt16(this.read, !0);
    return ((this.read += 2), e);
  };
  Go.DataBuffer.prototype.getInt24Le = function () {
    var e =
      this.data.getInt8(this.read) ^
      (this.data.getInt16(this.read + 1, !0) << 8);
    return ((this.read += 3), e);
  };
  Go.DataBuffer.prototype.getInt32Le = function () {
    var e = this.data.getInt32(this.read, !0);
    return ((this.read += 4), e);
  };
  Go.DataBuffer.prototype.getInt = function (e) {
    Lee(e);
    var t = 0;
    do ((t = (t << 8) + this.data.getInt8(this.read++)), (e -= 8));
    while (e > 0);
    return t;
  };
  Go.DataBuffer.prototype.getSignedInt = function (e) {
    var t = this.getInt(e),
      r = 2 << (e - 2);
    if (t >= r) t -= r << 1;
    return t;
  };
  Go.DataBuffer.prototype.getBytes = function (e) {
    var t;
    if (e)
      ((e = Math.min(this.length(), e)),
        (t = this.data.slice(this.read, this.read + e)),
        (this.read += e));
    else if (e === 0) t = "";
    else
      ((t = this.read === 0 ? this.data : this.data.slice(this.read)),
        this.clear());
    return t;
  };
  Go.DataBuffer.prototype.bytes = function (e) {
    return typeof e > "u"
      ? this.data.slice(this.read)
      : this.data.slice(this.read, this.read + e);
  };
  Go.DataBuffer.prototype.at = function (e) {
    return this.data.getUint8(this.read + e);
  };
  Go.DataBuffer.prototype.setAt = function (e, t) {
    return (this.data.setUint8(e, t), this);
  };
  Go.DataBuffer.prototype.last = function () {
    return this.data.getUint8(this.write - 1);
  };
  Go.DataBuffer.prototype.copy = function () {
    return new Go.DataBuffer(this);
  };
  Go.DataBuffer.prototype.compact = function () {
    if (this.read > 0) {
      var e = new Uint8Array(this.data.buffer, this.read),
        t = new Uint8Array(e.byteLength);
      (t.set(e),
        (this.data = new DataView(t)),
        (this.write -= this.read),
        (this.read = 0));
    }
    return this;
  };
  Go.DataBuffer.prototype.clear = function () {
    return (
      (this.data = new DataView(new ArrayBuffer(0))),
      (this.read = this.write = 0),
      this
    );
  };
  Go.DataBuffer.prototype.truncate = function (e) {
    return (
      (this.write = Math.max(0, this.length() - e)),
      (this.read = Math.min(this.read, this.write)),
      this
    );
  };
  Go.DataBuffer.prototype.toHex = function () {
    var e = "";
    for (var t = this.read; t < this.data.byteLength; ++t) {
      var r = this.data.getUint8(t);
      if (r < 16) e += "0";
      e += r.toString(16);
    }
    return e;
  };
  Go.DataBuffer.prototype.toString = function (e) {
    var t = new Uint8Array(this.data, this.read, this.length());
    if (((e = e || "utf8"), e === "binary" || e === "raw"))
      return Go.binary.raw.encode(t);
    if (e === "hex") return Go.binary.hex.encode(t);
    if (e === "base64") return Go.binary.base64.encode(t);
    if (e === "utf8") return Go.text.utf8.decode(t);
    if (e === "utf16") return Go.text.utf16.decode(t);
    throw Error("Invalid encoding: " + e);
  };
  Go.createBuffer = function (e, t) {
    if (((t = t || "raw"), e !== void 0 && t === "utf8")) e = Go.encodeUtf8(e);
    return new Go.ByteBuffer(e);
  };
  Go.fillString = function (e, t) {
    var r = "";
    while (t > 0) {
      if (t & 1) r += e;
      if (((t >>>= 1), t > 0)) e += e;
    }
    return r;
  };
  Go.xorBytes = function (e, t, r) {
    var o = "",
      d = "",
      p = "",
      _ = 0,
      E = 0;
    for (; r > 0; --r, ++_) {
      if (((d = e.charCodeAt(_) ^ t.charCodeAt(_)), E >= 10))
        ((o += p), (p = ""), (E = 0));
      ((p += String.fromCharCode(d)), ++E);
    }
    return ((o += p), o);
  };
  Go.hexToBytes = function (e) {
    var t = "",
      r = 0;
    if (e.length & !0)
      ((r = 1), (t += String.fromCharCode(parseInt(e[0], 16))));
    for (; r < e.length; r += 2)
      t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
    return t;
  };
  Go.bytesToHex = function (e) {
    return Go.createBuffer(e).toHex();
  };
  Go.int32ToBytes = function (e) {
    return (
      String.fromCharCode((e >> 24) & 255) +
      String.fromCharCode((e >> 16) & 255) +
      String.fromCharCode((e >> 8) & 255) +
      String.fromCharCode(e & 255)
    );
  };
  var Z$ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    rB = [
      62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1,
      64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28,
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 50, 51,
    ],
    i0t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  Go.encode64 = function (e, t) {
    var r = "",
      o = "",
      d,
      p,
      _,
      E = 0;
    while (E < e.length) {
      if (
        ((d = e.charCodeAt(E++)),
        (p = e.charCodeAt(E++)),
        (_ = e.charCodeAt(E++)),
        (r += Z$.charAt(d >> 2)),
        (r += Z$.charAt(((d & 3) << 4) | (p >> 4))),
        isNaN(p))
      )
        r += "==";
      else
        ((r += Z$.charAt(((p & 15) << 2) | (_ >> 6))),
          (r += isNaN(_) ? "=" : Z$.charAt(_ & 63)));
      if (t && r.length > t)
        ((o +=
          r.substr(0, t) +
          `\r
`),
          (r = r.substr(t)));
    }
    return ((o += r), o);
  };
  Go.decode64 = function (e) {
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    var t = "",
      r,
      o,
      d,
      p,
      _ = 0;
    while (_ < e.length)
      if (
        ((r = rB[e.charCodeAt(_++) - 43]),
        (o = rB[e.charCodeAt(_++) - 43]),
        (d = rB[e.charCodeAt(_++) - 43]),
        (p = rB[e.charCodeAt(_++) - 43]),
        (t += String.fromCharCode((r << 2) | (o >> 4))),
        d !== 64)
      ) {
        if (((t += String.fromCharCode(((o & 15) << 4) | (d >> 2))), p !== 64))
          t += String.fromCharCode(((d & 3) << 6) | p);
      }
    return t;
  };
  Go.encodeUtf8 = function (e) {
    return unescape(encodeURIComponent(e));
  };
  Go.decodeUtf8 = function (e) {
    return decodeURIComponent(escape(e));
  };
  Go.binary = {
    raw: {},
    hex: {},
    base64: {},
    base58: {},
    baseN: { encode: s0t.encode, decode: s0t.decode },
  };
  Go.binary.raw.encode = function (e) {
    return String.fromCharCode.apply(null, e);
  };
  Go.binary.raw.decode = function (e, t, r) {
    var o = t;
    if (!o) o = new Uint8Array(e.length);
    r = r || 0;
    var d = r;
    for (var p = 0; p < e.length; ++p) o[d++] = e.charCodeAt(p);
    return t ? d - r : o;
  };
  Go.binary.hex.encode = Go.bytesToHex;
  Go.binary.hex.decode = function (e, t, r) {
    var o = t;
    if (!o) o = new Uint8Array(Math.ceil(e.length / 2));
    r = r || 0;
    var d = 0,
      p = r;
    if (e.length & 1) ((d = 1), (o[p++] = parseInt(e[0], 16)));
    for (; d < e.length; d += 2) o[p++] = parseInt(e.substr(d, 2), 16);
    return t ? p - r : o;
  };
  Go.binary.base64.encode = function (e, t) {
    var r = "",
      o = "",
      d,
      p,
      _,
      E = 0;
    while (E < e.byteLength) {
      if (
        ((d = e[E++]),
        (p = e[E++]),
        (_ = e[E++]),
        (r += Z$.charAt(d >> 2)),
        (r += Z$.charAt(((d & 3) << 4) | (p >> 4))),
        isNaN(p))
      )
        r += "==";
      else
        ((r += Z$.charAt(((p & 15) << 2) | (_ >> 6))),
          (r += isNaN(_) ? "=" : Z$.charAt(_ & 63)));
      if (t && r.length > t)
        ((o +=
          r.substr(0, t) +
          `\r
`),
          (r = r.substr(t)));
    }
    return ((o += r), o);
  };
  Go.binary.base64.decode = function (e, t, r) {
    var o = t;
    if (!o) o = new Uint8Array(Math.ceil(e.length / 4) * 3);
    ((e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "")), (r = r || 0));
    var d,
      p,
      _,
      E,
      C = 0,
      I = r;
    while (C < e.length)
      if (
        ((d = rB[e.charCodeAt(C++) - 43]),
        (p = rB[e.charCodeAt(C++) - 43]),
        (_ = rB[e.charCodeAt(C++) - 43]),
        (E = rB[e.charCodeAt(C++) - 43]),
        (o[I++] = (d << 2) | (p >> 4)),
        _ !== 64)
      ) {
        if (((o[I++] = ((p & 15) << 4) | (_ >> 2)), E !== 64))
          o[I++] = ((_ & 3) << 6) | E;
      }
    return t ? I - r : o.subarray(0, I);
  };
  Go.binary.base58.encode = function (e, t) {
    return Go.binary.baseN.encode(e, i0t, t);
  };
  Go.binary.base58.decode = function (e, t) {
    return Go.binary.baseN.decode(e, i0t, t);
  };
  Go.text = { utf8: {}, utf16: {} };
  Go.text.utf8.encode = function (e, t, r) {
    e = Go.encodeUtf8(e);
    var o = t;
    if (!o) o = new Uint8Array(e.length);
    r = r || 0;
    var d = r;
    for (var p = 0; p < e.length; ++p) o[d++] = e.charCodeAt(p);
    return t ? d - r : o;
  };
  Go.text.utf8.decode = function (e) {
    return Go.decodeUtf8(String.fromCharCode.apply(null, e));
  };
  Go.text.utf16.encode = function (e, t, r) {
    var o = t;
    if (!o) o = new Uint8Array(e.length * 2);
    var d = new Uint16Array(o.buffer);
    r = r || 0;
    var p = r,
      _ = r;
    for (var E = 0; E < e.length; ++E) ((d[_++] = e.charCodeAt(E)), (p += 2));
    return t ? p - r : o;
  };
  Go.text.utf16.decode = function (e) {
    return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
  };
  Go.deflate = function (e, t, r) {
    if (((t = Go.decode64(e.deflate(Go.encode64(t)).rval)), r)) {
      var o = 2,
        d = t.charCodeAt(1);
      if (d & 32) o = 6;
      t = t.substring(o, t.length - 4);
    }
    return t;
  };
  Go.inflate = function (e, t, r) {
    var o = e.inflate(Go.encode64(t)).rval;
    return o === null ? null : Go.decode64(o);
  };
  var L2e = function (e, t, r) {
      if (!e) throw Error("WebStorage not available.");
      var o;
      if (r === null) o = e.removeItem(t);
      else ((r = Go.encode64(JSON.stringify(r))), (o = e.setItem(t, r)));
      if (typeof o < "u" && o.rval !== !0) {
        var d = Error(o.error.message);
        throw ((d.id = o.error.id), (d.name = o.error.name), d);
      }
    },
    F2e = function (e, t) {
      if (!e) throw Error("WebStorage not available.");
      var r = e.getItem(t);
      if (e.init)
        if (r.rval === null) {
          if (r.error) {
            var o = Error(r.error.message);
            throw ((o.id = r.error.id), (o.name = r.error.name), o);
          }
          r = null;
        } else r = r.rval;
      if (r !== null) r = JSON.parse(Go.decode64(r));
      return r;
    },
    yTr = function (e, t, r, o) {
      var d = F2e(e, t);
      if (d === null) d = {};
      ((d[r] = o), L2e(e, t, d));
    },
    _Tr = function (e, t, r) {
      var o = F2e(e, t);
      if (o !== null) o = r in o ? o[r] : null;
      return o;
    },
    bTr = function (e, t, r) {
      var o = F2e(e, t);
      if (o !== null && r in o) {
        delete o[r];
        var d = !0;
        for (var p in o) {
          d = !1;
          break;
        }
        if (d) o = null;
        L2e(e, t, o);
      }
    },
    STr = function (e, t) {
      L2e(e, t, null);
    },
    Eye = function (e, t, r) {
      var o = null;
      if (typeof r > "u") r = ["web", "flash"];
      var d,
        p = !1,
        _ = null;
      for (var E in r) {
        d = r[E];
        try {
          if (d === "flash" || d === "both") {
            if (t[0] === null)
              throw Error("Flash local storage not available.");
            ((o = e.apply(this, t)), (p = d === "flash"));
          }
          if (d === "web" || d === "both")
            ((t[0] = localStorage), (o = e.apply(this, t)), (p = !0));
        } catch (C) {
          _ = C;
        }
        if (p) break;
      }
      if (!p) throw _;
      return o;
    };
  Go.setItem = function (e, t, r, o, d) {
    Eye(yTr, arguments, d);
  };
  Go.getItem = function (e, t, r, o) {
    return Eye(_Tr, arguments, o);
  };
  Go.removeItem = function (e, t, r, o) {
    Eye(bTr, arguments, o);
  };
  Go.clearItems = function (e, t, r) {
    Eye(STr, arguments, r);
  };
  Go.isEmpty = function (e) {
    for (var t in e) if (e.hasOwnProperty(t)) return !1;
    return !0;
  };
  Go.format = function (e) {
    var t = /%./g,
      r,
      o,
      d = 0,
      p = [],
      _ = 0;
    while ((r = t.exec(e))) {
      if (((o = e.substring(_, t.lastIndex - 2)), o.length > 0)) p.push(o);
      _ = t.lastIndex;
      var E = r[0][1];
      switch (E) {
        case "s":
        case "o":
          if (d < arguments.length) p.push(arguments[d++ + 1]);
          else p.push("<?>");
          break;
        case "%":
          p.push("%");
          break;
        default:
          p.push("<%" + E + "?>");
      }
    }
    return (p.push(e.substring(_)), p.join(""));
  };
  Go.formatNumber = function (e, t, r, o) {
    var d = e,
      p = isNaN((t = Math.abs(t))) ? 2 : t,
      _ = r === void 0 ? "," : r,
      E = o === void 0 ? "." : o,
      C = d < 0 ? "-" : "",
      I = parseInt((d = Math.abs(+d || 0).toFixed(p)), 10) + "",
      D = I.length > 3 ? I.length % 3 : 0;
    return (
      C +
      (D ? I.substr(0, D) + E : "") +
      I.substr(D).replace(/(\d{3})(?=\d)/g, "$1" + E) +
      (p
        ? _ +
          Math.abs(d - I)
            .toFixed(p)
            .slice(2)
        : "")
    );
  };
  Go.formatSize = function (e) {
    if (e >= 1073741824)
      e = Go.formatNumber(e / 1073741824, 2, ".", "") + " GiB";
    else if (e >= 1048576)
      e = Go.formatNumber(e / 1048576, 2, ".", "") + " MiB";
    else if (e >= 1024) e = Go.formatNumber(e / 1024, 0) + " KiB";
    else e = Go.formatNumber(e, 0) + " bytes";
    return e;
  };
  Go.bytesFromIP = function (e) {
    if (e.indexOf(".") !== -1) return Go.bytesFromIPv4(e);
    if (e.indexOf(":") !== -1) return Go.bytesFromIPv6(e);
    return null;
  };
  Go.bytesFromIPv4 = function (e) {
    if (((e = e.split(".")), e.length !== 4)) return null;
    var t = Go.createBuffer();
    for (var r = 0; r < e.length; ++r) {
      var o = parseInt(e[r], 10);
      if (isNaN(o)) return null;
      t.putByte(o);
    }
    return t.getBytes();
  };
  Go.bytesFromIPv6 = function (e) {
    var t = 0;
    e = e.split(":").filter(function (_) {
      if (_.length === 0) ++t;
      return !0;
    });
    var r = (8 - e.length + t) * 2,
      o = Go.createBuffer();
    for (var d = 0; d < 8; ++d) {
      if (!e[d] || e[d].length === 0) {
        (o.fillWithByte(0, r), (r = 0));
        continue;
      }
      var p = Go.hexToBytes(e[d]);
      if (p.length < 2) o.putByte(0);
      o.putBytes(p);
    }
    return o.getBytes();
  };
  Go.bytesToIP = function (e) {
    if (e.length === 4) return Go.bytesToIPv4(e);
    if (e.length === 16) return Go.bytesToIPv6(e);
    return null;
  };
  Go.bytesToIPv4 = function (e) {
    if (e.length !== 4) return null;
    var t = [];
    for (var r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
    return t.join(".");
  };
  Go.bytesToIPv6 = function (e) {
    if (e.length !== 16) return null;
    var t = [],
      r = [],
      o = 0;
    for (var d = 0; d < e.length; d += 2) {
      var p = Go.bytesToHex(e[d] + e[d + 1]);
      while (p[0] === "0" && p !== "0") p = p.substr(1);
      if (p === "0") {
        var _ = r[r.length - 1],
          E = t.length;
        if (!_ || E !== _.end + 1) r.push({ start: E, end: E });
        else if (((_.end = E), _.end - _.start > r[o].end - r[o].start))
          o = r.length - 1;
      }
      t.push(p);
    }
    if (r.length > 0) {
      var C = r[o];
      if (C.end - C.start > 0) {
        if ((t.splice(C.start, C.end - C.start + 1, ""), C.start === 0))
          t.unshift("");
        if (C.end === 7) t.push("");
      }
    }
    return t.join(":");
  };
  Go.estimateCores = function (e, t) {
    if (typeof e === "function") ((t = e), (e = {}));
    if (((e = e || {}), "cores" in Go && !e.update)) return t(null, Go.cores);
    if (
      typeof navigator < "u" &&
      "hardwareConcurrency" in navigator &&
      navigator.hardwareConcurrency > 0
    )
      return ((Go.cores = navigator.hardwareConcurrency), t(null, Go.cores));
    if (typeof Worker > "u") return ((Go.cores = 1), t(null, Go.cores));
    if (typeof Blob > "u") return ((Go.cores = 2), t(null, Go.cores));
    var r = URL.createObjectURL(
      new Blob(
        [
          "(",
          function () {
            self.addEventListener("message", function (_) {
              var E = Date.now(),
                C = E + 4;
              while (Date.now() < C);
              self.postMessage({ st: E, et: C });
            });
          }.toString(),
          ")()",
        ],
        { type: "application/javascript" },
      ),
    );
    o([], 5, 16);
    function o(_, E, C) {
      if (E === 0) {
        var I = Math.floor(
          _.reduce(function (D, N) {
            return D + N;
          }, 0) / _.length,
        );
        return (
          (Go.cores = Math.max(1, I)),
          URL.revokeObjectURL(r),
          t(null, Go.cores)
        );
      }
      d(C, function (D, N) {
        (_.push(p(C, N)), o(_, E - 1, C));
      });
    }
    function d(_, E) {
      var C = [],
        I = [];
      for (var D = 0; D < _; ++D) {
        var N = new Worker(r);
        (N.addEventListener("message", function (F) {
          if ((I.push(F.data), I.length === _)) {
            for (var U = 0; U < _; ++U) C[U].terminate();
            E(null, I);
          }
        }),
          C.push(N));
      }
      for (var D = 0; D < _; ++D) C[D].postMessage(D);
    }
    function p(_, E) {
      var C = [];
      for (var I = 0; I < _; ++I) {
        var D = E[I],
          N = (C[I] = []);
        for (var F = 0; F < _; ++F) {
          if (I === F) continue;
          var U = E[F];
          if ((D.st > U.st && D.st < U.et) || (U.st > D.st && U.st < D.et))
            N.push(F);
        }
      }
      return C.reduce(function (V, re) {
        return Math.max(V, re.length);
      }, 0);
    }
  };
});
var Tye = commonJS(function (HPs, l0t) {
  var fk = yp();
  Ig();
  l0t.exports = fk.cipher = fk.cipher || {};
  fk.cipher.algorithms = fk.cipher.algorithms || {};
  fk.cipher.createCipher = function (e, t) {
    var r = e;
    if (typeof r === "string") {
      if (((r = fk.cipher.getAlgorithm(r)), r)) r = r();
    }
    if (!r) throw Error("Unsupported algorithm: " + e);
    return new fk.cipher.BlockCipher({ algorithm: r, key: t, decrypt: !1 });
  };
  fk.cipher.createDecipher = function (e, t) {
    var r = e;
    if (typeof r === "string") {
      if (((r = fk.cipher.getAlgorithm(r)), r)) r = r();
    }
    if (!r) throw Error("Unsupported algorithm: " + e);
    return new fk.cipher.BlockCipher({ algorithm: r, key: t, decrypt: !0 });
  };
  fk.cipher.registerAlgorithm = function (e, t) {
    ((e = e.toUpperCase()), (fk.cipher.algorithms[e] = t));
  };
  fk.cipher.getAlgorithm = function (e) {
    if (((e = e.toUpperCase()), e in fk.cipher.algorithms))
      return fk.cipher.algorithms[e];
    return null;
  };
  var $2e = (fk.cipher.BlockCipher = function (e) {
    ((this.algorithm = e.algorithm),
      (this.mode = this.algorithm.mode),
      (this.blockSize = this.mode.blockSize),
      (this._finish = !1),
      (this._input = null),
      (this.output = null),
      (this._op = e.decrypt ? this.mode.decrypt : this.mode.encrypt),
      (this._decrypt = e.decrypt),
      this.algorithm.initialize(e));
  });
  $2e.prototype.start = function (e) {
    e = e || {};
    var t = {};
    for (var r in e) t[r] = e[r];
    ((t.decrypt = this._decrypt),
      (this._finish = !1),
      (this._input = fk.util.createBuffer()),
      (this.output = e.output || fk.util.createBuffer()),
      this.mode.start(t));
  };
  $2e.prototype.update = function (e) {
    if (e) this._input.putBuffer(e);
    while (
      !this._op.call(this.mode, this._input, this.output, this._finish) &&
      !this._finish
    );
    this._input.compact();
  };
  $2e.prototype.finish = function (e) {
    if (e && (this.mode.name === "ECB" || this.mode.name === "CBC"))
      ((this.mode.pad = function (r) {
        return e(this.blockSize, r, !1);
      }),
        (this.mode.unpad = function (r) {
          return e(this.blockSize, r, !0);
        }));
    var t = {};
    if (
      ((t.decrypt = this._decrypt),
      (t.overflow = this._input.length() % this.blockSize),
      !this._decrypt && this.mode.pad)
    ) {
      if (!this.mode.pad(this._input, t)) return !1;
    }
    if (
      ((this._finish = !0), this.update(), this._decrypt && this.mode.unpad)
    ) {
      if (!this.mode.unpad(this.output, t)) return !1;
    }
    if (this.mode.afterFinish) {
      if (!this.mode.afterFinish(this.output, t)) return !1;
    }
    return !0;
  };
});
var q2e = commonJS(function (jPs, c0t) {
  var pk = yp();
  Ig();
  pk.cipher = pk.cipher || {};
  var rm = (c0t.exports = pk.cipher.modes = pk.cipher.modes || {});
  rm.ecb = function (e) {
    ((e = e || {}),
      (this.name = "ECB"),
      (this.cipher = e.cipher),
      (this.blockSize = e.blockSize || 16),
      (this._ints = this.blockSize / 4),
      (this._inBlock = Array(this._ints)),
      (this._outBlock = Array(this._ints)));
  };
  rm.ecb.prototype.start = function (e) {};
  rm.ecb.prototype.encrypt = function (e, t, r) {
    if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
    for (var o = 0; o < this._ints; ++o) this._inBlock[o] = e.getInt32();
    this.cipher.encrypt(this._inBlock, this._outBlock);
    for (var o = 0; o < this._ints; ++o) t.putInt32(this._outBlock[o]);
  };
  rm.ecb.prototype.decrypt = function (e, t, r) {
    if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
    for (var o = 0; o < this._ints; ++o) this._inBlock[o] = e.getInt32();
    this.cipher.decrypt(this._inBlock, this._outBlock);
    for (var o = 0; o < this._ints; ++o) t.putInt32(this._outBlock[o]);
  };
  rm.ecb.prototype.pad = function (e, t) {
    var r =
      e.length() === this.blockSize
        ? this.blockSize
        : this.blockSize - e.length();
    return (e.fillWithByte(r, r), !0);
  };
  rm.ecb.prototype.unpad = function (e, t) {
    if (t.overflow > 0) return !1;
    var r = e.length(),
      o = e.at(r - 1);
    if (o > this.blockSize << 2) return !1;
    return (e.truncate(o), !0);
  };
  rm.cbc = function (e) {
    ((e = e || {}),
      (this.name = "CBC"),
      (this.cipher = e.cipher),
      (this.blockSize = e.blockSize || 16),
      (this._ints = this.blockSize / 4),
      (this._inBlock = Array(this._ints)),
      (this._outBlock = Array(this._ints)));
  };
  rm.cbc.prototype.start = function (e) {
    if (e.iv === null) {
      if (!this._prev) throw Error("Invalid IV parameter.");
      this._iv = this._prev.slice(0);
    } else if (!("iv" in e)) throw Error("Invalid IV parameter.");
    else
      ((this._iv = vye(e.iv, this.blockSize)),
        (this._prev = this._iv.slice(0)));
  };
  rm.cbc.prototype.encrypt = function (e, t, r) {
    if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
    for (var o = 0; o < this._ints; ++o)
      this._inBlock[o] = this._prev[o] ^ e.getInt32();
    this.cipher.encrypt(this._inBlock, this._outBlock);
    for (var o = 0; o < this._ints; ++o) t.putInt32(this._outBlock[o]);
    this._prev = this._outBlock;
  };
  rm.cbc.prototype.decrypt = function (e, t, r) {
    if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
    for (var o = 0; o < this._ints; ++o) this._inBlock[o] = e.getInt32();
    this.cipher.decrypt(this._inBlock, this._outBlock);
    for (var o = 0; o < this._ints; ++o)
      t.putInt32(this._prev[o] ^ this._outBlock[o]);
    this._prev = this._inBlock.slice(0);
  };
  rm.cbc.prototype.pad = function (e, t) {
    var r =
      e.length() === this.blockSize
        ? this.blockSize
        : this.blockSize - e.length();
    return (e.fillWithByte(r, r), !0);
  };
  rm.cbc.prototype.unpad = function (e, t) {
    if (t.overflow > 0) return !1;
    var r = e.length(),
      o = e.at(r - 1);
    if (o > this.blockSize << 2) return !1;
    return (e.truncate(o), !0);
  };
  rm.cfb = function (e) {
    ((e = e || {}),
      (this.name = "CFB"),
      (this.cipher = e.cipher),
      (this.blockSize = e.blockSize || 16),
      (this._ints = this.blockSize / 4),
      (this._inBlock = null),
      (this._outBlock = Array(this._ints)),
      (this._partialBlock = Array(this._ints)),
      (this._partialOutput = pk.util.createBuffer()),
      (this._partialBytes = 0));
  };
  rm.cfb.prototype.start = function (e) {
    if (!("iv" in e)) throw Error("Invalid IV parameter.");
    ((this._iv = vye(e.iv, this.blockSize)),
      (this._inBlock = this._iv.slice(0)),
      (this._partialBytes = 0));
  };
  rm.cfb.prototype.encrypt = function (e, t, r) {
    var o = e.length();
    if (o === 0) return !0;
    if (
      (this.cipher.encrypt(this._inBlock, this._outBlock),
      this._partialBytes === 0 && o >= this.blockSize)
    ) {
      for (var d = 0; d < this._ints; ++d)
        ((this._inBlock[d] = e.getInt32() ^ this._outBlock[d]),
          t.putInt32(this._inBlock[d]));
      return;
    }
    var p = (this.blockSize - o) % this.blockSize;
    if (p > 0) p = this.blockSize - p;
    this._partialOutput.clear();
    for (var d = 0; d < this._ints; ++d)
      ((this._partialBlock[d] = e.getInt32() ^ this._outBlock[d]),
        this._partialOutput.putInt32(this._partialBlock[d]));
    if (p > 0) e.read -= this.blockSize;
    else
      for (var d = 0; d < this._ints; ++d)
        this._inBlock[d] = this._partialBlock[d];
    if (this._partialBytes > 0)
      this._partialOutput.getBytes(this._partialBytes);
    if (p > 0 && !r)
      return (
        t.putBytes(this._partialOutput.getBytes(p - this._partialBytes)),
        (this._partialBytes = p),
        !0
      );
    (t.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
      (this._partialBytes = 0));
  };
  rm.cfb.prototype.decrypt = function (e, t, r) {
    var o = e.length();
    if (o === 0) return !0;
    if (
      (this.cipher.encrypt(this._inBlock, this._outBlock),
      this._partialBytes === 0 && o >= this.blockSize)
    ) {
      for (var d = 0; d < this._ints; ++d)
        ((this._inBlock[d] = e.getInt32()),
          t.putInt32(this._inBlock[d] ^ this._outBlock[d]));
      return;
    }
    var p = (this.blockSize - o) % this.blockSize;
    if (p > 0) p = this.blockSize - p;
    this._partialOutput.clear();
    for (var d = 0; d < this._ints; ++d)
      ((this._partialBlock[d] = e.getInt32()),
        this._partialOutput.putInt32(
          this._partialBlock[d] ^ this._outBlock[d],
        ));
    if (p > 0) e.read -= this.blockSize;
    else
      for (var d = 0; d < this._ints; ++d)
        this._inBlock[d] = this._partialBlock[d];
    if (this._partialBytes > 0)
      this._partialOutput.getBytes(this._partialBytes);
    if (p > 0 && !r)
      return (
        t.putBytes(this._partialOutput.getBytes(p - this._partialBytes)),
        (this._partialBytes = p),
        !0
      );
    (t.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
      (this._partialBytes = 0));
  };
  rm.ofb = function (e) {
    ((e = e || {}),
      (this.name = "OFB"),
      (this.cipher = e.cipher),
      (this.blockSize = e.blockSize || 16),
      (this._ints = this.blockSize / 4),
      (this._inBlock = null),
      (this._outBlock = Array(this._ints)),
      (this._partialOutput = pk.util.createBuffer()),
      (this._partialBytes = 0));
  };
  rm.ofb.prototype.start = function (e) {
    if (!("iv" in e)) throw Error("Invalid IV parameter.");
    ((this._iv = vye(e.iv, this.blockSize)),
      (this._inBlock = this._iv.slice(0)),
      (this._partialBytes = 0));
  };
  rm.ofb.prototype.encrypt = function (e, t, r) {
    var o = e.length();
    if (e.length() === 0) return !0;
    if (
      (this.cipher.encrypt(this._inBlock, this._outBlock),
      this._partialBytes === 0 && o >= this.blockSize)
    ) {
      for (var d = 0; d < this._ints; ++d)
        (t.putInt32(e.getInt32() ^ this._outBlock[d]),
          (this._inBlock[d] = this._outBlock[d]));
      return;
    }
    var p = (this.blockSize - o) % this.blockSize;
    if (p > 0) p = this.blockSize - p;
    this._partialOutput.clear();
    for (var d = 0; d < this._ints; ++d)
      this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[d]);
    if (p > 0) e.read -= this.blockSize;
    else
      for (var d = 0; d < this._ints; ++d) this._inBlock[d] = this._outBlock[d];
    if (this._partialBytes > 0)
      this._partialOutput.getBytes(this._partialBytes);
    if (p > 0 && !r)
      return (
        t.putBytes(this._partialOutput.getBytes(p - this._partialBytes)),
        (this._partialBytes = p),
        !0
      );
    (t.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
      (this._partialBytes = 0));
  };
  rm.ofb.prototype.decrypt = rm.ofb.prototype.encrypt;
  rm.ctr = function (e) {
    ((e = e || {}),
      (this.name = "CTR"),
      (this.cipher = e.cipher),
      (this.blockSize = e.blockSize || 16),
      (this._ints = this.blockSize / 4),
      (this._inBlock = null),
      (this._outBlock = Array(this._ints)),
      (this._partialOutput = pk.util.createBuffer()),
      (this._partialBytes = 0));
  };
  rm.ctr.prototype.start = function (e) {
    if (!("iv" in e)) throw Error("Invalid IV parameter.");
    ((this._iv = vye(e.iv, this.blockSize)),
      (this._inBlock = this._iv.slice(0)),
      (this._partialBytes = 0));
  };
  rm.ctr.prototype.encrypt = function (e, t, r) {
    var o = e.length();
    if (o === 0) return !0;
    if (
      (this.cipher.encrypt(this._inBlock, this._outBlock),
      this._partialBytes === 0 && o >= this.blockSize)
    )
      for (var d = 0; d < this._ints; ++d)
        t.putInt32(e.getInt32() ^ this._outBlock[d]);
    else {
      var p = (this.blockSize - o) % this.blockSize;
      if (p > 0) p = this.blockSize - p;
      this._partialOutput.clear();
      for (var d = 0; d < this._ints; ++d)
        this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[d]);
      if (p > 0) e.read -= this.blockSize;
      if (this._partialBytes > 0)
        this._partialOutput.getBytes(this._partialBytes);
      if (p > 0 && !r)
        return (
          t.putBytes(this._partialOutput.getBytes(p - this._partialBytes)),
          (this._partialBytes = p),
          !0
        );
      (t.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
        (this._partialBytes = 0));
    }
    Cye(this._inBlock);
  };
  rm.ctr.prototype.decrypt = rm.ctr.prototype.encrypt;
  rm.gcm = function (e) {
    ((e = e || {}),
      (this.name = "GCM"),
      (this.cipher = e.cipher),
      (this.blockSize = e.blockSize || 16),
      (this._ints = this.blockSize / 4),
      (this._inBlock = Array(this._ints)),
      (this._outBlock = Array(this._ints)),
      (this._partialOutput = pk.util.createBuffer()),
      (this._partialBytes = 0),
      (this._R = 3774873600));
  };
  rm.gcm.prototype.start = function (e) {
    if (!("iv" in e)) throw Error("Invalid IV parameter.");
    var t = pk.util.createBuffer(e.iv);
    this._cipherLength = 0;
    var r;
    if ("additionalData" in e) r = pk.util.createBuffer(e.additionalData);
    else r = pk.util.createBuffer();
    if ("tagLength" in e) this._tagLength = e.tagLength;
    else this._tagLength = 128;
    if (((this._tag = null), e.decrypt)) {
      if (
        ((this._tag = pk.util.createBuffer(e.tag).getBytes()),
        this._tag.length !== this._tagLength / 8)
      )
        throw Error("Authentication tag does not match tag length.");
    }
    ((this._hashBlock = Array(this._ints)),
      (this.tag = null),
      (this._hashSubkey = Array(this._ints)),
      this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey),
      (this.componentBits = 4),
      (this._m = this.generateHashTable(this._hashSubkey, this.componentBits)));
    var o = t.length();
    if (o === 12) this._j0 = [t.getInt32(), t.getInt32(), t.getInt32(), 1];
    else {
      this._j0 = [0, 0, 0, 0];
      while (t.length() > 0)
        this._j0 = this.ghash(this._hashSubkey, this._j0, [
          t.getInt32(),
          t.getInt32(),
          t.getInt32(),
          t.getInt32(),
        ]);
      this._j0 = this.ghash(
        this._hashSubkey,
        this._j0,
        [0, 0].concat(B2e(o * 8)),
      );
    }
    ((this._inBlock = this._j0.slice(0)),
      Cye(this._inBlock),
      (this._partialBytes = 0),
      (r = pk.util.createBuffer(r)),
      (this._aDataLength = B2e(r.length() * 8)));
    var d = r.length() % this.blockSize;
    if (d) r.fillWithByte(0, this.blockSize - d);
    this._s = [0, 0, 0, 0];
    while (r.length() > 0)
      this._s = this.ghash(this._hashSubkey, this._s, [
        r.getInt32(),
        r.getInt32(),
        r.getInt32(),
        r.getInt32(),
      ]);
  };
  rm.gcm.prototype.encrypt = function (e, t, r) {
    var o = e.length();
    if (o === 0) return !0;
    if (
      (this.cipher.encrypt(this._inBlock, this._outBlock),
      this._partialBytes === 0 && o >= this.blockSize)
    ) {
      for (var d = 0; d < this._ints; ++d)
        t.putInt32((this._outBlock[d] ^= e.getInt32()));
      this._cipherLength += this.blockSize;
    } else {
      var p = (this.blockSize - o) % this.blockSize;
      if (p > 0) p = this.blockSize - p;
      this._partialOutput.clear();
      for (var d = 0; d < this._ints; ++d)
        this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[d]);
      if (p <= 0 || r) {
        if (r) {
          var _ = o % this.blockSize;
          ((this._cipherLength += _),
            this._partialOutput.truncate(this.blockSize - _));
        } else this._cipherLength += this.blockSize;
        for (var d = 0; d < this._ints; ++d)
          this._outBlock[d] = this._partialOutput.getInt32();
        this._partialOutput.read -= this.blockSize;
      }
      if (this._partialBytes > 0)
        this._partialOutput.getBytes(this._partialBytes);
      if (p > 0 && !r)
        return (
          (e.read -= this.blockSize),
          t.putBytes(this._partialOutput.getBytes(p - this._partialBytes)),
          (this._partialBytes = p),
          !0
        );
      (t.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
        (this._partialBytes = 0));
    }
    ((this._s = this.ghash(this._hashSubkey, this._s, this._outBlock)),
      Cye(this._inBlock));
  };
  rm.gcm.prototype.decrypt = function (e, t, r) {
    var o = e.length();
    if (o < this.blockSize && !(r && o > 0)) return !0;
    (this.cipher.encrypt(this._inBlock, this._outBlock),
      Cye(this._inBlock),
      (this._hashBlock[0] = e.getInt32()),
      (this._hashBlock[1] = e.getInt32()),
      (this._hashBlock[2] = e.getInt32()),
      (this._hashBlock[3] = e.getInt32()),
      (this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock)));
    for (var d = 0; d < this._ints; ++d)
      t.putInt32(this._outBlock[d] ^ this._hashBlock[d]);
    if (o < this.blockSize) this._cipherLength += o % this.blockSize;
    else this._cipherLength += this.blockSize;
  };
  rm.gcm.prototype.afterFinish = function (e, t) {
    var r = !0;
    if (t.decrypt && t.overflow) e.truncate(this.blockSize - t.overflow);
    this.tag = pk.util.createBuffer();
    var o = this._aDataLength.concat(B2e(this._cipherLength * 8));
    this._s = this.ghash(this._hashSubkey, this._s, o);
    var d = [];
    this.cipher.encrypt(this._j0, d);
    for (var p = 0; p < this._ints; ++p) this.tag.putInt32(this._s[p] ^ d[p]);
    if (
      (this.tag.truncate(this.tag.length() % (this._tagLength / 8)),
      t.decrypt && this.tag.bytes() !== this._tag)
    )
      r = !1;
    return r;
  };
  rm.gcm.prototype.multiply = function (e, t) {
    var r = [0, 0, 0, 0],
      o = t.slice(0);
    for (var d = 0; d < 128; ++d) {
      var p = e[(d / 32) | 0] & (1 << (31 - (d % 32)));
      if (p) ((r[0] ^= o[0]), (r[1] ^= o[1]), (r[2] ^= o[2]), (r[3] ^= o[3]));
      this.pow(o, o);
    }
    return r;
  };
  rm.gcm.prototype.pow = function (e, t) {
    var r = e[3] & 1;
    for (var o = 3; o > 0; --o) t[o] = (e[o] >>> 1) | ((e[o - 1] & 1) << 31);
    if (((t[0] = e[0] >>> 1), r)) t[0] ^= this._R;
  };
  rm.gcm.prototype.tableMultiply = function (e) {
    var t = [0, 0, 0, 0];
    for (var r = 0; r < 32; ++r) {
      var o = (r / 8) | 0,
        d = (e[o] >>> ((7 - (r % 8)) * 4)) & 15,
        p = this._m[r][d];
      ((t[0] ^= p[0]), (t[1] ^= p[1]), (t[2] ^= p[2]), (t[3] ^= p[3]));
    }
    return t;
  };
  rm.gcm.prototype.ghash = function (e, t, r) {
    return (
      (t[0] ^= r[0]),
      (t[1] ^= r[1]),
      (t[2] ^= r[2]),
      (t[3] ^= r[3]),
      this.tableMultiply(t)
    );
  };
  rm.gcm.prototype.generateHashTable = function (e, t) {
    var r = 8 / t,
      o = 4 * r,
      d = 16 * r,
      p = Array(d);
    for (var _ = 0; _ < d; ++_) {
      var E = [0, 0, 0, 0],
        C = (_ / o) | 0,
        I = (o - 1 - (_ % o)) * t;
      ((E[C] = (1 << (t - 1)) << I),
        (p[_] = this.generateSubHashTable(this.multiply(E, e), t)));
    }
    return p;
  };
  rm.gcm.prototype.generateSubHashTable = function (e, t) {
    var r = 1 << t,
      o = r >>> 1,
      d = Array(r);
    d[o] = e.slice(0);
    var p = o >>> 1;
    while (p > 0) (this.pow(d[2 * p], (d[p] = [])), (p >>= 1));
    p = 2;
    while (p < o) {
      for (var _ = 1; _ < p; ++_) {
        var E = d[p],
          C = d[_];
        d[p + _] = [E[0] ^ C[0], E[1] ^ C[1], E[2] ^ C[2], E[3] ^ C[3]];
      }
      p *= 2;
    }
    d[0] = [0, 0, 0, 0];
    for (p = o + 1; p < r; ++p) {
      var I = d[p ^ o];
      d[p] = [e[0] ^ I[0], e[1] ^ I[1], e[2] ^ I[2], e[3] ^ I[3]];
    }
    return d;
  };
  function vye(e, t) {
    if (typeof e === "string") e = pk.util.createBuffer(e);
    if (pk.util.isArray(e) && e.length > 4) {
      var r = e;
      e = pk.util.createBuffer();
      for (var o = 0; o < r.length; ++o) e.putByte(r[o]);
    }
    if (e.length() < t)
      throw Error(
        "Invalid IV length; got " +
          e.length() +
          " bytes and expected " +
          t +
          " bytes.",
      );
    if (!pk.util.isArray(e)) {
      var d = [],
        p = t / 4;
      for (var o = 0; o < p; ++o) d.push(e.getInt32());
      e = d;
    }
    return e;
  }
  function Cye(e) {
    e[e.length - 1] = (e[e.length - 1] + 1) & 4294967295;
  }
  function B2e(e) {
    return [(e / 4294967296) | 0, e & 4294967295];
  }
});
var oB = commonJS(function (WPs, p0t) {
  var Ky = yp();
  Tye();
  q2e();
  Ig();
  p0t.exports = Ky.aes = Ky.aes || {};
  Ky.aes.startEncrypting = function (e, t, r, o) {
    var d = xye({ key: e, output: r, decrypt: !1, mode: o });
    return (d.start(t), d);
  };
  Ky.aes.createEncryptionCipher = function (e, t) {
    return xye({ key: e, output: null, decrypt: !1, mode: t });
  };
  Ky.aes.startDecrypting = function (e, t, r, o) {
    var d = xye({ key: e, output: r, decrypt: !0, mode: o });
    return (d.start(t), d);
  };
  Ky.aes.createDecryptionCipher = function (e, t) {
    return xye({ key: e, output: null, decrypt: !0, mode: t });
  };
  Ky.aes.Algorithm = function (e, t) {
    if (!tGe) d0t();
    var r = this;
    ((r.name = e),
      (r.mode = new t({
        blockSize: 16,
        cipher: {
          encrypt: function (o, d) {
            return eGe(r._w, o, d, !1);
          },
          decrypt: function (o, d) {
            return eGe(r._w, o, d, !0);
          },
        },
      })),
      (r._init = !1));
  };
  Ky.aes.Algorithm.prototype.initialize = function (e) {
    if (this._init) return;
    var t = e.key,
      r;
    if (
      typeof t === "string" &&
      (t.length === 16 || t.length === 24 || t.length === 32)
    )
      t = Ky.util.createBuffer(t);
    else if (
      Ky.util.isArray(t) &&
      (t.length === 16 || t.length === 24 || t.length === 32)
    ) {
      ((r = t), (t = Ky.util.createBuffer()));
      for (var o = 0; o < r.length; ++o) t.putByte(r[o]);
    }
    if (!Ky.util.isArray(t)) {
      ((r = t), (t = []));
      var d = r.length();
      if (d === 16 || d === 24 || d === 32) {
        d = d >>> 2;
        for (var o = 0; o < d; ++o) t.push(r.getInt32());
      }
    }
    if (
      !Ky.util.isArray(t) ||
      !(t.length === 4 || t.length === 6 || t.length === 8)
    )
      throw Error("Invalid key parameter.");
    var p = this.mode.name,
      _ = ["CFB", "OFB", "CTR", "GCM"].indexOf(p) !== -1;
    ((this._w = f0t(t, e.decrypt && !_)), (this._init = !0));
  };
  Ky.aes._expandKey = function (e, t) {
    if (!tGe) d0t();
    return f0t(e, t);
  };
  Ky.aes._updateBlock = eGe;
  $4("AES-ECB", Ky.cipher.modes.ecb);
  $4("AES-CBC", Ky.cipher.modes.cbc);
  $4("AES-CFB", Ky.cipher.modes.cfb);
  $4("AES-OFB", Ky.cipher.modes.ofb);
  $4("AES-CTR", Ky.cipher.modes.ctr);
  $4("AES-GCM", Ky.cipher.modes.gcm);
  function $4(e, t) {
    var r = function () {
      return new Ky.aes.Algorithm(e, t);
    };
    Ky.cipher.registerAlgorithm(e, r);
  }
  var tGe = !1,
    F4 = 4,
    nT,
    V2e,
    u0t,
    PW,
    ZR;
  function d0t() {
    ((tGe = !0), (u0t = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]));
    var e = Array(256);
    for (var t = 0; t < 128; ++t)
      ((e[t] = t << 1), (e[t + 128] = ((t + 128) << 1) ^ 283));
    ((nT = Array(256)), (V2e = Array(256)), (PW = [, , , ,]), (ZR = [, , , ,]));
    for (var t = 0; t < 4; ++t) ((PW[t] = Array(256)), (ZR[t] = Array(256)));
    var r = 0,
      o = 0,
      d,
      p,
      _,
      E,
      C,
      I,
      D;
    for (var t = 0; t < 256; ++t) {
      ((E = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4)),
        (E = (E >> 8) ^ (E & 255) ^ 99),
        (nT[r] = E),
        (V2e[E] = r),
        (C = e[E]),
        (d = e[r]),
        (p = e[d]),
        (_ = e[p]),
        (I = (C << 24) ^ (E << 16) ^ (E << 8) ^ (E ^ C)),
        (D =
          ((d ^ p ^ _) << 24) ^
          ((r ^ _) << 16) ^
          ((r ^ p ^ _) << 8) ^
          (r ^ d ^ _)));
      for (var N = 0; N < 4; ++N)
        ((PW[N][r] = I),
          (ZR[N][E] = D),
          (I = (I << 24) | (I >>> 8)),
          (D = (D << 24) | (D >>> 8)));
      if (r === 0) r = o = 1;
      else ((r = d ^ e[e[e[d ^ _]]]), (o ^= e[e[o]]));
    }
  }
  function f0t(e, t) {
    var r = e.slice(0),
      o,
      d = 1,
      p = r.length,
      _ = p + 6 + 1,
      E = F4 * _;
    for (var C = p; C < E; ++C) {
      if (((o = r[C - 1]), C % p === 0))
        ((o =
          (nT[(o >>> 16) & 255] << 24) ^
          (nT[(o >>> 8) & 255] << 16) ^
          (nT[o & 255] << 8) ^
          nT[o >>> 24] ^
          (u0t[d] << 24)),
          d++);
      else if (p > 6 && C % p === 4)
        o =
          (nT[o >>> 24] << 24) ^
          (nT[(o >>> 16) & 255] << 16) ^
          (nT[(o >>> 8) & 255] << 8) ^
          nT[o & 255];
      r[C] = r[C - p] ^ o;
    }
    if (t) {
      var I,
        D = ZR[0],
        N = ZR[1],
        F = ZR[2],
        U = ZR[3],
        V = r.slice(0);
      E = r.length;
      for (var C = 0, re = E - F4; C < E; C += F4, re -= F4)
        if (C === 0 || C === E - F4)
          ((V[C] = r[re]),
            (V[C + 1] = r[re + 3]),
            (V[C + 2] = r[re + 2]),
            (V[C + 3] = r[re + 1]));
        else
          for (var ue = 0; ue < F4; ++ue)
            ((I = r[re + ue]),
              (V[C + (3 & -ue)] =
                D[nT[I >>> 24]] ^
                N[nT[(I >>> 16) & 255]] ^
                F[nT[(I >>> 8) & 255]] ^
                U[nT[I & 255]]));
      r = V;
    }
    return r;
  }
  function eGe(e, t, r, o) {
    var d = e.length / 4 - 1,
      p,
      _,
      E,
      C,
      I;
    if (o) ((p = ZR[0]), (_ = ZR[1]), (E = ZR[2]), (C = ZR[3]), (I = V2e));
    else ((p = PW[0]), (_ = PW[1]), (E = PW[2]), (C = PW[3]), (I = nT));
    var D, N, F, U, V, re, ue;
    ((D = t[0] ^ e[0]),
      (N = t[o ? 3 : 1] ^ e[1]),
      (F = t[2] ^ e[2]),
      (U = t[o ? 1 : 3] ^ e[3]));
    var de = 3;
    for (var _e = 1; _e < d; ++_e)
      ((V =
        p[D >>> 24] ^
        _[(N >>> 16) & 255] ^
        E[(F >>> 8) & 255] ^
        C[U & 255] ^
        e[++de]),
        (re =
          p[N >>> 24] ^
          _[(F >>> 16) & 255] ^
          E[(U >>> 8) & 255] ^
          C[D & 255] ^
          e[++de]),
        (ue =
          p[F >>> 24] ^
          _[(U >>> 16) & 255] ^
          E[(D >>> 8) & 255] ^
          C[N & 255] ^
          e[++de]),
        (U =
          p[U >>> 24] ^
          _[(D >>> 16) & 255] ^
          E[(N >>> 8) & 255] ^
          C[F & 255] ^
          e[++de]),
        (D = V),
        (N = re),
        (F = ue));
    ((r[0] =
      (I[D >>> 24] << 24) ^
      (I[(N >>> 16) & 255] << 16) ^
      (I[(F >>> 8) & 255] << 8) ^
      I[U & 255] ^
      e[++de]),
      (r[o ? 3 : 1] =
        (I[N >>> 24] << 24) ^
        (I[(F >>> 16) & 255] << 16) ^
        (I[(U >>> 8) & 255] << 8) ^
        I[D & 255] ^
        e[++de]),
      (r[2] =
        (I[F >>> 24] << 24) ^
        (I[(U >>> 16) & 255] << 16) ^
        (I[(D >>> 8) & 255] << 8) ^
        I[N & 255] ^
        e[++de]),
      (r[o ? 1 : 3] =
        (I[U >>> 24] << 24) ^
        (I[(D >>> 16) & 255] << 16) ^
        (I[(N >>> 8) & 255] << 8) ^
        I[F & 255] ^
        e[++de]));
  }
  function xye(e) {
    e = e || {};
    var t = (e.mode || "CBC").toUpperCase(),
      r = "AES-" + t,
      o;
    if (e.decrypt) o = Ky.cipher.createDecipher(r, e.key);
    else o = Ky.cipher.createCipher(r, e.key);
    var d = o.start;
    return (
      (o.start = function (p, _) {
        var E = null;
        if (_ instanceof Ky.util.ByteBuffer) ((E = _), (_ = {}));
        ((_ = _ || {}), (_.output = E), (_.iv = p), d.call(o, _));
      }),
      o
    );
  }
});
var sB = commonJS(function (GPs, m0t) {
  var Fee = yp();
  Fee.pki = Fee.pki || {};
  var nGe = (m0t.exports = Fee.pki.oids = Fee.oids = Fee.oids || {});
  function fa(e, t) {
    ((nGe[e] = t), (nGe[t] = e));
  }
  function Th(e, t) {
    nGe[e] = t;
  }
  fa("1.2.840.113549.1.1.1", "rsaEncryption");
  fa("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
  fa("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
  fa("1.2.840.113549.1.1.7", "RSAES-OAEP");
  fa("1.2.840.113549.1.1.8", "mgf1");
  fa("1.2.840.113549.1.1.9", "pSpecified");
  fa("1.2.840.113549.1.1.10", "RSASSA-PSS");
  fa("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
  fa("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
  fa("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
  fa("1.3.101.112", "EdDSA25519");
  fa("1.2.840.10040.4.3", "dsa-with-sha1");
  fa("1.3.14.3.2.7", "desCBC");
  fa("1.3.14.3.2.26", "sha1");
  fa("1.3.14.3.2.29", "sha1WithRSASignature");
  fa("2.16.840.1.101.3.4.2.1", "sha256");
  fa("2.16.840.1.101.3.4.2.2", "sha384");
  fa("2.16.840.1.101.3.4.2.3", "sha512");
  fa("2.16.840.1.101.3.4.2.4", "sha224");
  fa("2.16.840.1.101.3.4.2.5", "sha512-224");
  fa("2.16.840.1.101.3.4.2.6", "sha512-256");
  fa("1.2.840.113549.2.2", "md2");
  fa("1.2.840.113549.2.5", "md5");
  fa("1.2.840.113549.1.7.1", "data");
  fa("1.2.840.113549.1.7.2", "signedData");
  fa("1.2.840.113549.1.7.3", "envelopedData");
  fa("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
  fa("1.2.840.113549.1.7.5", "digestedData");
  fa("1.2.840.113549.1.7.6", "encryptedData");
  fa("1.2.840.113549.1.9.1", "emailAddress");
  fa("1.2.840.113549.1.9.2", "unstructuredName");
  fa("1.2.840.113549.1.9.3", "contentType");
  fa("1.2.840.113549.1.9.4", "messageDigest");
  fa("1.2.840.113549.1.9.5", "signingTime");
  fa("1.2.840.113549.1.9.6", "counterSignature");
  fa("1.2.840.113549.1.9.7", "challengePassword");
  fa("1.2.840.113549.1.9.8", "unstructuredAddress");
  fa("1.2.840.113549.1.9.14", "extensionRequest");
  fa("1.2.840.113549.1.9.20", "friendlyName");
  fa("1.2.840.113549.1.9.21", "localKeyId");
  fa("1.2.840.113549.1.9.22.1", "x509Certificate");
  fa("1.2.840.113549.1.12.10.1.1", "keyBag");
  fa("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
  fa("1.2.840.113549.1.12.10.1.3", "certBag");
  fa("1.2.840.113549.1.12.10.1.4", "crlBag");
  fa("1.2.840.113549.1.12.10.1.5", "secretBag");
  fa("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
  fa("1.2.840.113549.1.5.13", "pkcs5PBES2");
  fa("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
  fa("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
  fa("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
  fa("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
  fa("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
  fa("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
  fa("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
  fa("1.2.840.113549.2.7", "hmacWithSHA1");
  fa("1.2.840.113549.2.8", "hmacWithSHA224");
  fa("1.2.840.113549.2.9", "hmacWithSHA256");
  fa("1.2.840.113549.2.10", "hmacWithSHA384");
  fa("1.2.840.113549.2.11", "hmacWithSHA512");
  fa("1.2.840.113549.3.7", "des-EDE3-CBC");
  fa("2.16.840.1.101.3.4.1.2", "aes128-CBC");
  fa("2.16.840.1.101.3.4.1.22", "aes192-CBC");
  fa("2.16.840.1.101.3.4.1.42", "aes256-CBC");
  fa("2.5.4.3", "commonName");
  fa("2.5.4.4", "surname");
  fa("2.5.4.5", "serialNumber");
  fa("2.5.4.6", "countryName");
  fa("2.5.4.7", "localityName");
  fa("2.5.4.8", "stateOrProvinceName");
  fa("2.5.4.9", "streetAddress");
  fa("2.5.4.10", "organizationName");
  fa("2.5.4.11", "organizationalUnitName");
  fa("2.5.4.12", "title");
  fa("2.5.4.13", "description");
  fa("2.5.4.15", "businessCategory");
  fa("2.5.4.17", "postalCode");
  fa("2.5.4.42", "givenName");
  fa("2.5.4.65", "pseudonym");
  fa(
    "1.3.6.1.4.1.311.60.2.1.2",
    "jurisdictionOfIncorporationStateOrProvinceName",
  );
  fa("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
  fa("2.16.840.1.113730.1.1", "nsCertType");
  fa("2.16.840.1.113730.1.13", "nsComment");
  Th("2.5.29.1", "authorityKeyIdentifier");
  Th("2.5.29.2", "keyAttributes");
  Th("2.5.29.3", "certificatePolicies");
  Th("2.5.29.4", "keyUsageRestriction");
  Th("2.5.29.5", "policyMapping");
  Th("2.5.29.6", "subtreesConstraint");
  Th("2.5.29.7", "subjectAltName");
  Th("2.5.29.8", "issuerAltName");
  Th("2.5.29.9", "subjectDirectoryAttributes");
  Th("2.5.29.10", "basicConstraints");
  Th("2.5.29.11", "nameConstraints");
  Th("2.5.29.12", "policyConstraints");
  Th("2.5.29.13", "basicConstraints");
  fa("2.5.29.14", "subjectKeyIdentifier");
  fa("2.5.29.15", "keyUsage");
  Th("2.5.29.16", "privateKeyUsagePeriod");
  fa("2.5.29.17", "subjectAltName");
  fa("2.5.29.18", "issuerAltName");
  fa("2.5.29.19", "basicConstraints");
  Th("2.5.29.20", "cRLNumber");
  Th("2.5.29.21", "cRLReason");
  Th("2.5.29.22", "expirationDate");
  Th("2.5.29.23", "instructionCode");
  Th("2.5.29.24", "invalidityDate");
  Th("2.5.29.25", "cRLDistributionPoints");
  Th("2.5.29.26", "issuingDistributionPoint");
  Th("2.5.29.27", "deltaCRLIndicator");
  Th("2.5.29.28", "issuingDistributionPoint");
  Th("2.5.29.29", "certificateIssuer");
  Th("2.5.29.30", "nameConstraints");
  fa("2.5.29.31", "cRLDistributionPoints");
  fa("2.5.29.32", "certificatePolicies");
  Th("2.5.29.33", "policyMappings");
  Th("2.5.29.34", "policyConstraints");
  fa("2.5.29.35", "authorityKeyIdentifier");
  Th("2.5.29.36", "policyConstraints");
  fa("2.5.29.37", "extKeyUsage");
  Th("2.5.29.46", "freshestCRL");
  Th("2.5.29.54", "inhibitAnyPolicy");
  fa("1.3.6.1.4.1.11129.2.4.2", "timestampList");
  fa("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
  fa("1.3.6.1.5.5.7.3.1", "serverAuth");
  fa("1.3.6.1.5.5.7.3.2", "clientAuth");
  fa("1.3.6.1.5.5.7.3.3", "codeSigning");
  fa("1.3.6.1.5.5.7.3.4", "emailProtection");
  fa("1.3.6.1.5.5.7.3.8", "timeStamping");
});
var eP = commonJS(function (zPs, h0t) {
  var m_ = yp();
  Ig();
  sB();
  var Vl = (h0t.exports = m_.asn1 = m_.asn1 || {});
  Vl.Class = {
    UNIVERSAL: 0,
    APPLICATION: 64,
    CONTEXT_SPECIFIC: 128,
    PRIVATE: 192,
  };
  Vl.Type = {
    NONE: 0,
    BOOLEAN: 1,
    INTEGER: 2,
    BITSTRING: 3,
    OCTETSTRING: 4,
    NULL: 5,
    OID: 6,
    ODESC: 7,
    EXTERNAL: 8,
    REAL: 9,
    ENUMERATED: 10,
    EMBEDDED: 11,
    UTF8: 12,
    ROID: 13,
    SEQUENCE: 16,
    SET: 17,
    PRINTABLESTRING: 19,
    IA5STRING: 22,
    UTCTIME: 23,
    GENERALIZEDTIME: 24,
    BMPSTRING: 30,
  };
  Vl.maxDepth = 256;
  Vl.create = function (e, t, r, o, d) {
    if (m_.util.isArray(o)) {
      var p = [];
      for (var _ = 0; _ < o.length; ++_) if (o[_] !== void 0) p.push(o[_]);
      o = p;
    }
    var E = {
      tagClass: e,
      type: t,
      constructed: r,
      composed: r || m_.util.isArray(o),
      value: o,
    };
    if (d && "bitStringContents" in d)
      ((E.bitStringContents = d.bitStringContents), (E.original = Vl.copy(E)));
    return E;
  };
  Vl.copy = function (e, t) {
    var r;
    if (m_.util.isArray(e)) {
      r = [];
      for (var o = 0; o < e.length; ++o) r.push(Vl.copy(e[o], t));
      return r;
    }
    if (typeof e === "string") return e;
    if (
      ((r = {
        tagClass: e.tagClass,
        type: e.type,
        constructed: e.constructed,
        composed: e.composed,
        value: Vl.copy(e.value, t),
      }),
      t && !t.excludeBitStringContents)
    )
      r.bitStringContents = e.bitStringContents;
    return r;
  };
  Vl.equals = function (e, t, r) {
    if (m_.util.isArray(e)) {
      if (!m_.util.isArray(t)) return !1;
      if (e.length !== t.length) return !1;
      for (var o = 0; o < e.length; ++o) if (!Vl.equals(e[o], t[o])) return !1;
      return !0;
    }
    if (typeof e !== typeof t) return !1;
    if (typeof e === "string") return e === t;
    var d =
      e.tagClass === t.tagClass &&
      e.type === t.type &&
      e.constructed === t.constructed &&
      e.composed === t.composed &&
      Vl.equals(e.value, t.value);
    if (r && r.includeBitStringContents)
      d = d && e.bitStringContents === t.bitStringContents;
    return d;
  };
  Vl.getBerValueLength = function (e) {
    var t = e.getByte();
    if (t === 128) return;
    var r,
      o = t & 128;
    if (!o) r = t;
    else r = e.getInt((t & 127) << 3);
    return r;
  };
  function $ee(e, t, r) {
    if (r > t) {
      var o = Error("Too few bytes to parse DER.");
      throw (
        (o.available = e.length()),
        (o.remaining = t),
        (o.requested = r),
        o
      );
    }
  }
  var kTr = function (e, t) {
    var r = e.getByte();
    if ((t--, r === 128)) return;
    var o,
      d = r & 128;
    if (!d) o = r;
    else {
      var p = r & 127;
      ($ee(e, t, p), (o = e.getInt(p << 3)));
    }
    if (o < 0) throw Error("Negative length: " + o);
    return o;
  };
  Vl.fromDer = function (e, t) {
    if (t === void 0)
      t = { strict: !0, parseAllBytes: !0, decodeBitStrings: !0 };
    if (typeof t === "boolean")
      t = { strict: t, parseAllBytes: !0, decodeBitStrings: !0 };
    if (!("strict" in t)) t.strict = !0;
    if (!("parseAllBytes" in t)) t.parseAllBytes = !0;
    if (!("decodeBitStrings" in t)) t.decodeBitStrings = !0;
    if (!("maxDepth" in t)) t.maxDepth = Vl.maxDepth;
    if (typeof e === "string") e = m_.util.createBuffer(e);
    var r = e.length(),
      o = Aye(e, e.length(), 0, t);
    if (t.parseAllBytes && e.length() !== 0) {
      var d = Error("Unparsed DER bytes remain after ASN.1 parsing.");
      throw ((d.byteCount = r), (d.remaining = e.length()), d);
    }
    return o;
  };
  function Aye(e, t, r, o) {
    if (r >= o.maxDepth)
      throw Error("ASN.1 parsing error: Max depth exceeded.");
    var d;
    $ee(e, t, 2);
    var p = e.getByte();
    t--;
    var _ = p & 192,
      E = p & 31;
    d = e.length();
    var C = kTr(e, t);
    if (((t -= d - e.length()), C !== void 0 && C > t)) {
      if (o.strict) {
        var I = Error("Too few bytes to read ASN.1 value.");
        throw (
          (I.available = e.length()),
          (I.remaining = t),
          (I.requested = C),
          I
        );
      }
      C = t;
    }
    var D,
      N,
      F = (p & 32) === 32;
    if (F)
      if (((D = []), C === void 0))
        for (;;) {
          if (($ee(e, t, 2), e.bytes(2) === String.fromCharCode(0, 0))) {
            (e.getBytes(2), (t -= 2));
            break;
          }
          ((d = e.length()),
            D.push(Aye(e, t, r + 1, o)),
            (t -= d - e.length()));
        }
      else
        while (C > 0)
          ((d = e.length()),
            D.push(Aye(e, C, r + 1, o)),
            (t -= d - e.length()),
            (C -= d - e.length()));
    if (D === void 0 && _ === Vl.Class.UNIVERSAL && E === Vl.Type.BITSTRING)
      N = e.bytes(C);
    if (
      D === void 0 &&
      o.decodeBitStrings &&
      _ === Vl.Class.UNIVERSAL &&
      E === Vl.Type.BITSTRING &&
      C > 1
    ) {
      var U = e.read,
        V = t,
        re = 0;
      if (E === Vl.Type.BITSTRING) ($ee(e, t, 1), (re = e.getByte()), t--);
      if (re === 0)
        try {
          d = e.length();
          var ue = { strict: !0, decodeBitStrings: !0 },
            de = Aye(e, t, r + 1, ue),
            _e = d - e.length();
          if (((t -= _e), E == Vl.Type.BITSTRING)) _e++;
          var Se = de.tagClass;
          if (
            _e === C &&
            (Se === Vl.Class.UNIVERSAL || Se === Vl.Class.CONTEXT_SPECIFIC)
          )
            D = [de];
        } catch (Me) {}
      if (D === void 0) ((e.read = U), (t = V));
    }
    if (D === void 0) {
      if (C === void 0) {
        if (o.strict)
          throw Error("Non-constructed ASN.1 object of indefinite length.");
        C = t;
      }
      if (E === Vl.Type.BMPSTRING) {
        D = "";
        for (; C > 0; C -= 2)
          ($ee(e, t, 2), (D += String.fromCharCode(e.getInt16())), (t -= 2));
      } else ((D = e.getBytes(C)), (t -= C));
    }
    var ve = N === void 0 ? null : { bitStringContents: N };
    return Vl.create(_, E, F, D, ve);
  }
  Vl.toDer = function (e) {
    var t = m_.util.createBuffer(),
      r = e.tagClass | e.type,
      o = m_.util.createBuffer(),
      d = !1;
    if ("bitStringContents" in e) {
      if (((d = !0), e.original)) d = Vl.equals(e, e.original);
    }
    if (d) o.putBytes(e.bitStringContents);
    else if (e.composed) {
      if (e.constructed) r |= 32;
      else o.putByte(0);
      for (var p = 0; p < e.value.length; ++p)
        if (e.value[p] !== void 0) o.putBuffer(Vl.toDer(e.value[p]));
    } else if (e.type === Vl.Type.BMPSTRING)
      for (var p = 0; p < e.value.length; ++p)
        o.putInt16(e.value.charCodeAt(p));
    else if (
      e.type === Vl.Type.INTEGER &&
      e.value.length > 1 &&
      ((e.value.charCodeAt(0) === 0 && (e.value.charCodeAt(1) & 128) === 0) ||
        (e.value.charCodeAt(0) === 255 &&
          (e.value.charCodeAt(1) & 128) === 128))
    )
      o.putBytes(e.value.substr(1));
    else o.putBytes(e.value);
    if ((t.putByte(r), o.length() <= 127)) t.putByte(o.length() & 127);
    else {
      var _ = o.length(),
        E = "";
      do ((E += String.fromCharCode(_ & 255)), (_ = _ >>> 8));
      while (_ > 0);
      t.putByte(E.length | 128);
      for (var p = E.length - 1; p >= 0; --p) t.putByte(E.charCodeAt(p));
    }
    return (t.putBuffer(o), t);
  };
  Vl.oidToDer = function (e) {
    var t = e.split("."),
      r = m_.util.createBuffer();
    r.putByte(40 * parseInt(t[0], 10) + parseInt(t[1], 10));
    var o, d, p, _;
    for (var E = 2; E < t.length; ++E) {
      if (((o = !0), (d = []), (p = parseInt(t[E], 10)), p > 4294967295))
        throw Error("OID value too large; max is 32-bits.");
      do {
        if (((_ = p & 127), (p = p >>> 7), !o)) _ |= 128;
        (d.push(_), (o = !1));
      } while (p > 0);
      for (var C = d.length - 1; C >= 0; --C) r.putByte(d[C]);
    }
    return r;
  };
  Vl.derToOid = function (e) {
    var t;
    if (typeof e === "string") e = m_.util.createBuffer(e);
    var r = e.getByte();
    t = Math.floor(r / 40) + "." + (r % 40);
    var o = 0;
    while (e.length() > 0) {
      if (o > 70368744177663)
        throw Error("OID value too large; max is 53-bits.");
      if (((r = e.getByte()), (o = o * 128), r & 128)) o += r & 127;
      else ((t += "." + (o + r)), (o = 0));
    }
    return t;
  };
  Vl.utcTimeToDate = function (e) {
    var t = new Date(),
      r = parseInt(e.substr(0, 2), 10);
    r = r >= 50 ? 1900 + r : 2000 + r;
    var o = parseInt(e.substr(2, 2), 10) - 1,
      d = parseInt(e.substr(4, 2), 10),
      p = parseInt(e.substr(6, 2), 10),
      _ = parseInt(e.substr(8, 2), 10),
      E = 0;
    if (e.length > 11) {
      var C = e.charAt(10),
        I = 10;
      if (C !== "+" && C !== "-")
        ((E = parseInt(e.substr(10, 2), 10)), (I += 2));
    }
    if ((t.setUTCFullYear(r, o, d), t.setUTCHours(p, _, E, 0), I)) {
      if (((C = e.charAt(I)), C === "+" || C === "-")) {
        var D = parseInt(e.substr(I + 1, 2), 10),
          N = parseInt(e.substr(I + 4, 2), 10),
          F = D * 60 + N;
        if (((F *= 60000), C === "+")) t.setTime(+t - F);
        else t.setTime(+t + F);
      }
    }
    return t;
  };
  Vl.generalizedTimeToDate = function (e) {
    var t = new Date(),
      r = parseInt(e.substr(0, 4), 10),
      o = parseInt(e.substr(4, 2), 10) - 1,
      d = parseInt(e.substr(6, 2), 10),
      p = parseInt(e.substr(8, 2), 10),
      _ = parseInt(e.substr(10, 2), 10),
      E = parseInt(e.substr(12, 2), 10),
      C = 0,
      I = 0,
      D = !1;
    if (e.charAt(e.length - 1) === "Z") D = !0;
    var N = e.length - 5,
      F = e.charAt(N);
    if (F === "+" || F === "-") {
      var U = parseInt(e.substr(N + 1, 2), 10),
        V = parseInt(e.substr(N + 4, 2), 10);
      if (((I = U * 60 + V), (I *= 60000), F === "+")) I *= -1;
      D = !0;
    }
    if (e.charAt(14) === ".") C = parseFloat(e.substr(14), 10) * 1000;
    if (D)
      (t.setUTCFullYear(r, o, d), t.setUTCHours(p, _, E, C), t.setTime(+t + I));
    else (t.setFullYear(r, o, d), t.setHours(p, _, E, C));
    return t;
  };
  Vl.dateToUtcTime = function (e) {
    if (typeof e === "string") return e;
    var t = "",
      r = [];
    (r.push(("" + e.getUTCFullYear()).substr(2)),
      r.push("" + (e.getUTCMonth() + 1)),
      r.push("" + e.getUTCDate()),
      r.push("" + e.getUTCHours()),
      r.push("" + e.getUTCMinutes()),
      r.push("" + e.getUTCSeconds()));
    for (var o = 0; o < r.length; ++o) {
      if (r[o].length < 2) t += "0";
      t += r[o];
    }
    return ((t += "Z"), t);
  };
  Vl.dateToGeneralizedTime = function (e) {
    if (typeof e === "string") return e;
    var t = "",
      r = [];
    (r.push("" + e.getUTCFullYear()),
      r.push("" + (e.getUTCMonth() + 1)),
      r.push("" + e.getUTCDate()),
      r.push("" + e.getUTCHours()),
      r.push("" + e.getUTCMinutes()),
      r.push("" + e.getUTCSeconds()));
    for (var o = 0; o < r.length; ++o) {
      if (r[o].length < 2) t += "0";
      t += r[o];
    }
    return ((t += "Z"), t);
  };
  Vl.integerToDer = function (e) {
    var t = m_.util.createBuffer();
    if (e >= -128 && e < 128) return t.putSignedInt(e, 8);
    if (e >= -32768 && e < 32768) return t.putSignedInt(e, 16);
    if (e >= -8388608 && e < 8388608) return t.putSignedInt(e, 24);
    if (e >= -2147483648 && e < 2147483648) return t.putSignedInt(e, 32);
    var r = Error("Integer too large; max is 32-bits.");
    throw ((r.integer = e), r);
  };
  Vl.derToInteger = function (e) {
    if (typeof e === "string") e = m_.util.createBuffer(e);
    var t = e.length() * 8;
    if (t > 32) throw Error("Integer too large; max is 32-bits.");
    return e.getSignedInt(t);
  };
  Vl.validate = function (e, t, r, o) {
    var d = !1;
    if (
      (e.tagClass === t.tagClass || typeof t.tagClass > "u") &&
      (e.type === t.type || typeof t.type > "u")
    ) {
      if (e.constructed === t.constructed || typeof t.constructed > "u") {
        if (((d = !0), t.value && m_.util.isArray(t.value))) {
          var p = 0;
          for (var _ = 0; d && _ < t.value.length; ++_) {
            var E = t.value[_];
            d = !!E.optional;
            var C = e.value[p];
            if (!C) {
              if (!E.optional) {
                if (((d = !1), o))
                  o.push(
                    "[" +
                      t.name +
                      '] Missing required element. Expected tag class "' +
                      E.tagClass +
                      '", type "' +
                      E.type +
                      '"',
                  );
              }
              continue;
            }
            var I = typeof E.tagClass < "u" && typeof E.type < "u";
            if (I && (C.tagClass !== E.tagClass || C.type !== E.type))
              if (E.optional) {
                d = !0;
                continue;
              } else {
                if (((d = !1), o))
                  o.push(
                    "[" +
                      t.name +
                      "] Tag mismatch. Expected (" +
                      E.tagClass +
                      "," +
                      E.type +
                      "), got (" +
                      C.tagClass +
                      "," +
                      C.type +
                      ")",
                  );
                break;
              }
            var D = Vl.validate(C, E, r, o);
            if (D) (++p, (d = !0));
            else if (E.optional) d = !0;
            else {
              d = !1;
              break;
            }
          }
        }
        if (d && r) {
          if (t.capture) r[t.capture] = e.value;
          if (t.captureAsn1) r[t.captureAsn1] = e;
          if (t.captureBitStringContents && "bitStringContents" in e)
            r[t.captureBitStringContents] = e.bitStringContents;
          if (t.captureBitStringValue && "bitStringContents" in e) {
            var N;
            if (e.bitStringContents.length < 2) r[t.captureBitStringValue] = "";
            else {
              var F = e.bitStringContents.charCodeAt(0);
              if (F !== 0)
                throw Error(
                  "captureBitStringValue only supported for zero unused bits",
                );
              r[t.captureBitStringValue] = e.bitStringContents.slice(1);
            }
          }
        }
      } else if (o)
        o.push(
          "[" +
            t.name +
            '] Expected constructed "' +
            t.constructed +
            '", got "' +
            e.constructed +
            '"',
        );
    } else if (o) {
      if (e.tagClass !== t.tagClass)
        o.push(
          "[" +
            t.name +
            '] Expected tag class "' +
            t.tagClass +
            '", got "' +
            e.tagClass +
            '"',
        );
      if (e.type !== t.type)
        o.push(
          "[" +
            t.name +
            '] Expected type "' +
            t.type +
            '", got "' +
            e.type +
            '"',
        );
    }
    return d;
  };
  var g0t = /[^\\u0000-\\u00ff]/;
  Vl.prettyPrint = function (e, t, r) {
    var o = "";
    if (((t = t || 0), (r = r || 2), t > 0))
      o += `
`;
    var d = "";
    for (var p = 0; p < t * r; ++p) d += " ";
    switch (((o += d + "Tag: "), e.tagClass)) {
      case Vl.Class.UNIVERSAL:
        o += "Universal:";
        break;
      case Vl.Class.APPLICATION:
        o += "Application:";
        break;
      case Vl.Class.CONTEXT_SPECIFIC:
        o += "Context-Specific:";
        break;
      case Vl.Class.PRIVATE:
        o += "Private:";
        break;
    }
    if (e.tagClass === Vl.Class.UNIVERSAL)
      switch (((o += e.type), e.type)) {
        case Vl.Type.NONE:
          o += " (None)";
          break;
        case Vl.Type.BOOLEAN:
          o += " (Boolean)";
          break;
        case Vl.Type.INTEGER:
          o += " (Integer)";
          break;
        case Vl.Type.BITSTRING:
          o += " (Bit string)";
          break;
        case Vl.Type.OCTETSTRING:
          o += " (Octet string)";
          break;
        case Vl.Type.NULL:
          o += " (Null)";
          break;
        case Vl.Type.OID:
          o += " (Object Identifier)";
          break;
        case Vl.Type.ODESC:
          o += " (Object Descriptor)";
          break;
        case Vl.Type.EXTERNAL:
          o += " (External or Instance of)";
          break;
        case Vl.Type.REAL:
          o += " (Real)";
          break;
        case Vl.Type.ENUMERATED:
          o += " (Enumerated)";
          break;
        case Vl.Type.EMBEDDED:
          o += " (Embedded PDV)";
          break;
        case Vl.Type.UTF8:
          o += " (UTF8)";
          break;
        case Vl.Type.ROID:
          o += " (Relative Object Identifier)";
          break;
        case Vl.Type.SEQUENCE:
          o += " (Sequence)";
          break;
        case Vl.Type.SET:
          o += " (Set)";
          break;
        case Vl.Type.PRINTABLESTRING:
          o += " (Printable String)";
          break;
        case Vl.Type.IA5String:
          o += " (IA5String (ASCII))";
          break;
        case Vl.Type.UTCTIME:
          o += " (UTC time)";
          break;
        case Vl.Type.GENERALIZEDTIME:
          o += " (Generalized time)";
          break;
        case Vl.Type.BMPSTRING:
          o += " (BMP String)";
          break;
      }
    else o += e.type;
    if (
      ((o += `
`),
      (o +=
        d +
        "Constructed: " +
        e.constructed +
        `
`),
      e.composed)
    ) {
      var _ = 0,
        E = "";
      for (var p = 0; p < e.value.length; ++p)
        if (e.value[p] !== void 0) {
          if (
            ((_ += 1),
            (E += Vl.prettyPrint(e.value[p], t + 1, r)),
            p + 1 < e.value.length)
          )
            E += ",";
        }
      o += d + "Sub values: " + _ + E;
    } else {
      if (((o += d + "Value: "), e.type === Vl.Type.OID)) {
        var C = Vl.derToOid(e.value);
        if (((o += C), m_.pki && m_.pki.oids)) {
          if (C in m_.pki.oids) o += " (" + m_.pki.oids[C] + ") ";
        }
      }
      if (e.type === Vl.Type.INTEGER)
        try {
          o += Vl.derToInteger(e.value);
        } catch (D) {
          o += "0x" + m_.util.bytesToHex(e.value);
        }
      else if (e.type === Vl.Type.BITSTRING) {
        if (e.value.length > 1)
          o += "0x" + m_.util.bytesToHex(e.value.slice(1));
        else o += "(none)";
        if (e.value.length > 0) {
          var I = e.value.charCodeAt(0);
          if (I == 1) o += " (1 unused bit shown)";
          else if (I > 1) o += " (" + I + " unused bits shown)";
        }
      } else if (e.type === Vl.Type.OCTETSTRING) {
        if (!g0t.test(e.value)) o += "(" + e.value + ") ";
        o += "0x" + m_.util.bytesToHex(e.value);
      } else if (e.type === Vl.Type.UTF8)
        try {
          o += m_.util.decodeUtf8(e.value);
        } catch (D) {
          if (D.message === "URI malformed")
            o += "0x" + m_.util.bytesToHex(e.value) + " (malformed UTF8)";
          else throw D;
        }
      else if (
        e.type === Vl.Type.PRINTABLESTRING ||
        e.type === Vl.Type.IA5String
      )
        o += e.value;
      else if (g0t.test(e.value)) o += "0x" + m_.util.bytesToHex(e.value);
      else if (e.value.length === 0) o += "[null]";
      else o += e.value;
    }
    return o;
  };
});
var nM = commonJS(function (qPs, y0t) {
  var Rye = yp();
  y0t.exports = Rye.md = Rye.md || {};
  Rye.md.algorithms = Rye.md.algorithms || {};
});
var B4 = commonJS(function (VPs, _0t) {
  var jD = yp();
  nM();
  Ig();
  var wTr = (_0t.exports = jD.hmac = jD.hmac || {});
  wTr.create = function () {
    var e = null,
      t = null,
      r = null,
      o = null,
      d = {};
    return (
      (d.start = function (p, _) {
        if (p !== null)
          if (typeof p === "string")
            if (((p = p.toLowerCase()), p in jD.md.algorithms))
              t = jD.md.algorithms[p].create();
            else throw Error('Unknown hash algorithm "' + p + '"');
          else t = p;
        if (_ === null) _ = e;
        else {
          if (typeof _ === "string") _ = jD.util.createBuffer(_);
          else if (jD.util.isArray(_)) {
            var E = _;
            _ = jD.util.createBuffer();
            for (var C = 0; C < E.length; ++C) _.putByte(E[C]);
          }
          var I = _.length();
          if (I > t.blockLength)
            (t.start(), t.update(_.bytes()), (_ = t.digest()));
          ((r = jD.util.createBuffer()),
            (o = jD.util.createBuffer()),
            (I = _.length()));
          for (var C = 0; C < I; ++C) {
            var E = _.at(C);
            (r.putByte(54 ^ E), o.putByte(92 ^ E));
          }
          if (I < t.blockLength) {
            var E = t.blockLength - I;
            for (var C = 0; C < E; ++C) (r.putByte(54), o.putByte(92));
          }
          ((e = _), (r = r.bytes()), (o = o.bytes()));
        }
        (t.start(), t.update(r));
      }),
      (d.update = function (p) {
        t.update(p);
      }),
      (d.getMac = function () {
        var p = t.digest().bytes();
        return (t.start(), t.update(o), t.update(p), t.digest());
      }),
      (d.digest = d.getMac),
      d
    );
  };
});
var Iye = commonJS(function (KPs, w0t) {
  var rM = yp();
  nM();
  Ig();
  var S0t = (w0t.exports = rM.md5 = rM.md5 || {});
  rM.md.md5 = rM.md.algorithms.md5 = S0t;
  S0t.create = function () {
    if (!k0t) ETr();
    var e = null,
      t = rM.util.createBuffer(),
      r = Array(16),
      o = {
        algorithm: "md5",
        blockLength: 64,
        digestLength: 16,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8,
      };
    return (
      (o.start = function () {
        ((o.messageLength = 0), (o.fullMessageLength = o.messageLength64 = []));
        var d = o.messageLengthSize / 4;
        for (var p = 0; p < d; ++p) o.fullMessageLength.push(0);
        return (
          (t = rM.util.createBuffer()),
          (e = {
            h0: 1732584193,
            h1: 4023233417,
            h2: 2562383102,
            h3: 271733878,
          }),
          o
        );
      }),
      o.start(),
      (o.update = function (d, p) {
        if (p === "utf8") d = rM.util.encodeUtf8(d);
        var _ = d.length;
        ((o.messageLength += _), (_ = [(_ / 4294967296) >>> 0, _ >>> 0]));
        for (var E = o.fullMessageLength.length - 1; E >= 0; --E)
          ((o.fullMessageLength[E] += _[1]),
            (_[1] = _[0] + ((o.fullMessageLength[E] / 4294967296) >>> 0)),
            (o.fullMessageLength[E] = o.fullMessageLength[E] >>> 0),
            (_[0] = (_[1] / 4294967296) >>> 0));
        if ((t.putBytes(d), b0t(e, r, t), t.read > 2048 || t.length() === 0))
          t.compact();
        return o;
      }),
      (o.digest = function () {
        var d = rM.util.createBuffer();
        d.putBytes(t.bytes());
        var p =
            o.fullMessageLength[o.fullMessageLength.length - 1] +
            o.messageLengthSize,
          _ = p & (o.blockLength - 1);
        d.putBytes(rGe.substr(0, o.blockLength - _));
        var E,
          C = 0;
        for (var I = o.fullMessageLength.length - 1; I >= 0; --I)
          ((E = o.fullMessageLength[I] * 8 + C),
            (C = (E / 4294967296) >>> 0),
            d.putInt32Le(E >>> 0));
        var D = { h0: e.h0, h1: e.h1, h2: e.h2, h3: e.h3 };
        b0t(D, r, d);
        var N = rM.util.createBuffer();
        return (
          N.putInt32Le(D.h0),
          N.putInt32Le(D.h1),
          N.putInt32Le(D.h2),
          N.putInt32Le(D.h3),
          N
        );
      }),
      o
    );
  };
  var rGe = null,
    Pye = null,
    Bee = null,
    U4 = null,
    k0t = !1;
  function ETr() {
    ((rGe = String.fromCharCode(128)),
      (rGe += rM.util.fillString(String.fromCharCode(0), 64)),
      (Pye = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5,
        10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4, 7, 10, 13, 0,
        3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2,
        9,
      ]),
      (Bee = [
        7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14,
        20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16,
        23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10,
        15, 21, 6, 10, 15, 21,
      ]),
      (U4 = Array(64)));
    for (var e = 0; e < 64; ++e)
      U4[e] = Math.floor(Math.abs(Math.sin(e + 1)) * 4294967296);
    k0t = !0;
  }
  function b0t(e, t, r) {
    var o,
      d,
      p,
      _,
      E,
      C,
      I,
      D,
      N = r.length();
    while (N >= 64) {
      ((d = e.h0), (p = e.h1), (_ = e.h2), (E = e.h3));
      for (D = 0; D < 16; ++D)
        ((t[D] = r.getInt32Le()),
          (C = E ^ (p & (_ ^ E))),
          (o = d + C + U4[D] + t[D]),
          (I = Bee[D]),
          (d = E),
          (E = _),
          (_ = p),
          (p += (o << I) | (o >>> (32 - I))));
      for (; D < 32; ++D)
        ((C = _ ^ (E & (p ^ _))),
          (o = d + C + U4[D] + t[Pye[D]]),
          (I = Bee[D]),
          (d = E),
          (E = _),
          (_ = p),
          (p += (o << I) | (o >>> (32 - I))));
      for (; D < 48; ++D)
        ((C = p ^ _ ^ E),
          (o = d + C + U4[D] + t[Pye[D]]),
          (I = Bee[D]),
          (d = E),
          (E = _),
          (_ = p),
          (p += (o << I) | (o >>> (32 - I))));
      for (; D < 64; ++D)
        ((C = _ ^ (p | ~E)),
          (o = d + C + U4[D] + t[Pye[D]]),
          (I = Bee[D]),
          (d = E),
          (E = _),
          (_ = p),
          (p += (o << I) | (o >>> (32 - I))));
      ((e.h0 = (e.h0 + d) | 0),
        (e.h1 = (e.h1 + p) | 0),
        (e.h2 = (e.h2 + _) | 0),
        (e.h3 = (e.h3 + E) | 0),
        (N -= 64));
    }
  }
});
var MW = commonJS(function (YPs, T0t) {
  var Oye = yp();
  Ig();
  var E0t = (T0t.exports = Oye.pem = Oye.pem || {});
  E0t.encode = function (e, t) {
    t = t || {};
    var r =
        "-----BEGIN " +
        e.type +
        `-----\r
`,
      o;
    if (e.procType)
      ((o = {
        name: "Proc-Type",
        values: [String(e.procType.version), e.procType.type],
      }),
        (r += Mye(o)));
    if (e.contentDomain)
      ((o = { name: "Content-Domain", values: [e.contentDomain] }),
        (r += Mye(o)));
    if (e.dekInfo) {
      if (
        ((o = { name: "DEK-Info", values: [e.dekInfo.algorithm] }),
        e.dekInfo.parameters)
      )
        o.values.push(e.dekInfo.parameters);
      r += Mye(o);
    }
    if (e.headers)
      for (var d = 0; d < e.headers.length; ++d) r += Mye(e.headers[d]);
    if (e.procType)
      r += `\r
`;
    return (
      (r +=
        Oye.util.encode64(e.body, t.maxline || 64) +
        `\r
`),
      (r +=
        "-----END " +
        e.type +
        `-----\r
`),
      r
    );
  };
  E0t.decode = function (e) {
    var t = [],
      r =
        /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,
      o = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,
      d = /\r?\n/,
      p;
    while (!0) {
      if (((p = r.exec(e)), !p)) break;
      var _ = p[1];
      if (_ === "NEW CERTIFICATE REQUEST") _ = "CERTIFICATE REQUEST";
      var E = {
        type: _,
        procType: null,
        contentDomain: null,
        dekInfo: null,
        headers: [],
        body: Oye.util.decode64(p[3]),
      };
      if ((t.push(E), !p[2])) continue;
      var C = p[2].split(d),
        I = 0;
      while (p && I < C.length) {
        var D = C[I].replace(/\s+$/, "");
        for (var N = I + 1; N < C.length; ++N) {
          var F = C[N];
          if (!/\s/.test(F[0])) break;
          ((D += F), (I = N));
        }
        if (((p = D.match(o)), p)) {
          var U = { name: p[1], values: [] },
            V = p[2].split(",");
          for (var re = 0; re < V.length; ++re) U.values.push(TTr(V[re]));
          if (!E.procType) {
            if (U.name !== "Proc-Type")
              throw Error(
                'Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".',
              );
            else if (U.values.length !== 2)
              throw Error(
                'Invalid PEM formatted message. The "Proc-Type" header must have two subfields.',
              );
            E.procType = { version: V[0], type: V[1] };
          } else if (!E.contentDomain && U.name === "Content-Domain")
            E.contentDomain = V[0] || "";
          else if (!E.dekInfo && U.name === "DEK-Info") {
            if (U.values.length === 0)
              throw Error(
                'Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.',
              );
            E.dekInfo = { algorithm: V[0], parameters: V[1] || null };
          } else E.headers.push(U);
        }
        ++I;
      }
      if (E.procType === "ENCRYPTED" && !E.dekInfo)
        throw Error(
          'Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".',
        );
    }
    if (t.length === 0) throw Error("Invalid PEM formatted message.");
    return t;
  };
  function Mye(e) {
    var t = e.name + ": ",
      r = [],
      o = function (C, I) {
        return " " + I;
      };
    for (var d = 0; d < e.values.length; ++d)
      r.push(e.values[d].replace(/^(\S+\r\n)/, o));
    t +=
      r.join(",") +
      `\r
`;
    var p = 0,
      _ = -1;
    for (var d = 0; d < t.length; ++d, ++p)
      if (p > 65 && _ !== -1) {
        var E = t[_];
        if (E === ",")
          (++_,
            (t =
              t.substr(0, _) +
              `\r
 ` +
              t.substr(_)));
        else
          t =
            t.substr(0, _) +
            `\r
` +
            E +
            t.substr(_ + 1);
        ((p = d - _ - 1), (_ = -1), ++d);
      } else if (t[d] === " " || t[d] === "\t" || t[d] === ",") _ = d;
    return t;
  }
  function TTr(e) {
    return e.replace(/^\s+/, "");
  }
});
var Uee = commonJS(function (XPs, C0t) {
  var z_ = yp();
  Tye();
  q2e();
  Ig();
  C0t.exports = z_.des = z_.des || {};
  z_.des.startEncrypting = function (e, t, r, o) {
    var d = Dye({
      key: e,
      output: r,
      decrypt: !1,
      mode: o || (t === null ? "ECB" : "CBC"),
    });
    return (d.start(t), d);
  };
  z_.des.createEncryptionCipher = function (e, t) {
    return Dye({ key: e, output: null, decrypt: !1, mode: t });
  };
  z_.des.startDecrypting = function (e, t, r, o) {
    var d = Dye({
      key: e,
      output: r,
      decrypt: !0,
      mode: o || (t === null ? "ECB" : "CBC"),
    });
    return (d.start(t), d);
  };
  z_.des.createDecryptionCipher = function (e, t) {
    return Dye({ key: e, output: null, decrypt: !0, mode: t });
  };
  z_.des.Algorithm = function (e, t) {
    var r = this;
    ((r.name = e),
      (r.mode = new t({
        blockSize: 8,
        cipher: {
          encrypt: function (o, d) {
            return v0t(r._keys, o, d, !1);
          },
          decrypt: function (o, d) {
            return v0t(r._keys, o, d, !0);
          },
        },
      })),
      (r._init = !1));
  };
  z_.des.Algorithm.prototype.initialize = function (e) {
    if (this._init) return;
    var t = z_.util.createBuffer(e.key);
    if (this.name.indexOf("3DES") === 0) {
      if (t.length() !== 24)
        throw Error("Invalid Triple-DES key size: " + t.length() * 8);
    }
    ((this._keys = OTr(t)), (this._init = !0));
  };
  oM("DES-ECB", z_.cipher.modes.ecb);
  oM("DES-CBC", z_.cipher.modes.cbc);
  oM("DES-CFB", z_.cipher.modes.cfb);
  oM("DES-OFB", z_.cipher.modes.ofb);
  oM("DES-CTR", z_.cipher.modes.ctr);
  oM("3DES-ECB", z_.cipher.modes.ecb);
  oM("3DES-CBC", z_.cipher.modes.cbc);
  oM("3DES-CFB", z_.cipher.modes.cfb);
  oM("3DES-OFB", z_.cipher.modes.ofb);
  oM("3DES-CTR", z_.cipher.modes.ctr);
  function oM(e, t) {
    var r = function () {
      return new z_.des.Algorithm(e, t);
    };
    z_.cipher.registerAlgorithm(e, r);
  }
  var vTr = [
      16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776,
      16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240,
      66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220,
      65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776,
      16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4,
      16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028,
      66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756,
    ],
    CTr = [
      -2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040,
      -2147450848, -2147483616, -2146402272, -2146402304, -2147483648,
      -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0,
      -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0,
      1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040,
      1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072,
      -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800,
      -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616,
      1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040,
      -2146402272, 1081344,
    ],
    xTr = [
      520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080,
      134217736, 134217736, 131072, 134349320, 131080, 134348800, 520,
      134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592,
      134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728,
      134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512,
      131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248,
      131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800,
      134218248, 520, 134348800, 131592, 8, 134348808, 131584,
    ],
    ATr = [
      8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800,
      8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801,
      128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928,
      8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800,
      8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1,
      8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128,
      8388608, 8192, 8396928,
    ],
    RTr = [
      256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720,
      1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544,
      1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800,
      1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976,
      33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432,
      1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824,
      1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800,
      524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256,
      524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080,
    ],
    PTr = [
      536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304,
      536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912,
      16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232,
      541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912,
      536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928,
      4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688,
      541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216,
      4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320,
      536887312,
    ],
    ITr = [
      2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064,
      69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912,
      2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154,
      69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864,
      2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154,
      67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050,
      67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202,
      69206016, 2048, 67108866, 67110912, 2048, 2097154,
    ],
    MTr = [
      268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456,
      262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64,
      268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664,
      268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144,
      266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552,
      64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0,
      268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0,
      268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696,
    ];
  function OTr(e) {
    var t = [
        0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512,
        516, 536871424, 536871428, 66048, 66052, 536936960, 536936964,
      ],
      r = [
        0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256,
        257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697,
      ],
      o = [
        0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048,
        2056, 16777216, 16777224, 16779264, 16779272,
      ],
      d = [
        0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072,
        131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992,
        136454144,
      ],
      p = [
        0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112,
        266256, 4096, 266240, 4112, 266256,
      ],
      _ = [
        0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464,
        33555488, 33554432, 33555456, 33554464, 33555488,
      ],
      E = [
        0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0,
        268435456, 524288, 268959744, 2, 268435458, 524290, 268959746,
      ],
      C = [
        0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496,
        131072, 196608, 133120, 198656, 537001984, 537067520, 537004032,
        537069568,
      ],
      I = [
        0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576,
        33554432, 33816576, 33554434, 33816578, 33554434, 33816578,
      ],
      D = [
        0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480,
        1032, 268436488, 1024, 268436480, 1032, 268436488,
      ],
      N = [
        0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192,
        8224, 1056768, 1056800, 1056768, 1056800,
      ],
      F = [
        0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880,
        67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528,
        85983744,
      ],
      U = [
        0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16,
        4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128,
      ],
      V = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261],
      re = e.length() > 8 ? 3 : 1,
      ue = [],
      de = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      _e = 0,
      Se;
    for (var ve = 0; ve < re; ve++) {
      var Me = e.getInt32(),
        xe = e.getInt32();
      ((Se = ((Me >>> 4) ^ xe) & 252645135),
        (xe ^= Se),
        (Me ^= Se << 4),
        (Se = ((xe >>> -16) ^ Me) & 65535),
        (Me ^= Se),
        (xe ^= Se << -16),
        (Se = ((Me >>> 2) ^ xe) & 858993459),
        (xe ^= Se),
        (Me ^= Se << 2),
        (Se = ((xe >>> -16) ^ Me) & 65535),
        (Me ^= Se),
        (xe ^= Se << -16),
        (Se = ((Me >>> 1) ^ xe) & 1431655765),
        (xe ^= Se),
        (Me ^= Se << 1),
        (Se = ((xe >>> 8) ^ Me) & 16711935),
        (Me ^= Se),
        (xe ^= Se << 8),
        (Se = ((Me >>> 1) ^ xe) & 1431655765),
        (xe ^= Se),
        (Me ^= Se << 1),
        (Se = (Me << 8) | ((xe >>> 20) & 240)),
        (Me =
          (xe << 24) |
          ((xe << 8) & 16711680) |
          ((xe >>> 8) & 65280) |
          ((xe >>> 24) & 240)),
        (xe = Se));
      for (var Oe = 0; Oe < de.length; ++Oe) {
        if (de[Oe])
          ((Me = (Me << 2) | (Me >>> 26)), (xe = (xe << 2) | (xe >>> 26)));
        else ((Me = (Me << 1) | (Me >>> 27)), (xe = (xe << 1) | (xe >>> 27)));
        ((Me &= -15), (xe &= -15));
        var Ne =
            t[Me >>> 28] |
            r[(Me >>> 24) & 15] |
            o[(Me >>> 20) & 15] |
            d[(Me >>> 16) & 15] |
            p[(Me >>> 12) & 15] |
            _[(Me >>> 8) & 15] |
            E[(Me >>> 4) & 15],
          De =
            C[xe >>> 28] |
            I[(xe >>> 24) & 15] |
            D[(xe >>> 20) & 15] |
            N[(xe >>> 16) & 15] |
            F[(xe >>> 12) & 15] |
            U[(xe >>> 8) & 15] |
            V[(xe >>> 4) & 15];
        ((Se = ((De >>> 16) ^ Ne) & 65535),
          (ue[_e++] = Ne ^ Se),
          (ue[_e++] = De ^ (Se << 16)));
      }
    }
    return ue;
  }
  function v0t(e, t, r, o) {
    var d = e.length === 32 ? 3 : 9,
      p;
    if (d === 3) p = o ? [30, -2, -2] : [0, 32, 2];
    else
      p = o
        ? [94, 62, -2, 32, 64, 2, 30, -2, -2]
        : [0, 32, 2, 62, 30, -2, 64, 96, 2];
    var _,
      E = t[0],
      C = t[1];
    ((_ = ((E >>> 4) ^ C) & 252645135),
      (C ^= _),
      (E ^= _ << 4),
      (_ = ((E >>> 16) ^ C) & 65535),
      (C ^= _),
      (E ^= _ << 16),
      (_ = ((C >>> 2) ^ E) & 858993459),
      (E ^= _),
      (C ^= _ << 2),
      (_ = ((C >>> 8) ^ E) & 16711935),
      (E ^= _),
      (C ^= _ << 8),
      (_ = ((E >>> 1) ^ C) & 1431655765),
      (C ^= _),
      (E ^= _ << 1),
      (E = (E << 1) | (E >>> 31)),
      (C = (C << 1) | (C >>> 31)));
    for (var I = 0; I < d; I += 3) {
      var D = p[I + 1],
        N = p[I + 2];
      for (var F = p[I]; F != D; F += N) {
        var U = C ^ e[F],
          V = ((C >>> 4) | (C << 28)) ^ e[F + 1];
        ((_ = E),
          (E = C),
          (C =
            _ ^
            (CTr[(U >>> 24) & 63] |
              ATr[(U >>> 16) & 63] |
              PTr[(U >>> 8) & 63] |
              MTr[U & 63] |
              vTr[(V >>> 24) & 63] |
              xTr[(V >>> 16) & 63] |
              RTr[(V >>> 8) & 63] |
              ITr[V & 63])));
      }
      ((_ = E), (E = C), (C = _));
    }
    ((E = (E >>> 1) | (E << 31)),
      (C = (C >>> 1) | (C << 31)),
      (_ = ((E >>> 1) ^ C) & 1431655765),
      (C ^= _),
      (E ^= _ << 1),
      (_ = ((C >>> 8) ^ E) & 16711935),
      (E ^= _),
      (C ^= _ << 8),
      (_ = ((C >>> 2) ^ E) & 858993459),
      (E ^= _),
      (C ^= _ << 2),
      (_ = ((E >>> 16) ^ C) & 65535),
      (C ^= _),
      (E ^= _ << 16),
      (_ = ((E >>> 4) ^ C) & 252645135),
      (C ^= _),
      (E ^= _ << 4),
      (r[0] = E),
      (r[1] = C));
  }
  function Dye(e) {
    e = e || {};
    var t = (e.mode || "CBC").toUpperCase(),
      r = "DES-" + t,
      o;
    if (e.decrypt) o = z_.cipher.createDecipher(r, e.key);
    else o = z_.cipher.createCipher(r, e.key);
    var d = o.start;
    return (
      (o.start = function (p, _) {
        var E = null;
        if (_ instanceof z_.util.ByteBuffer) ((E = _), (_ = {}));
        ((_ = _ || {}), (_.output = E), (_.iv = p), d.call(o, _));
      }),
      o
    );
  }
});
var Nye = commonJS(function (QPs, x0t) {
  var rT = yp();
  B4();
  nM();
  Ig();
  var DTr = (rT.pkcs5 = rT.pkcs5 || {}),
    WD;
  if (rT.util.isNodejs && !rT.options.usePureJavaScript) WD = importMetaRequire("crypto");
  x0t.exports =
    rT.pbkdf2 =
    DTr.pbkdf2 =
      function (e, t, r, o, d, p) {
        if (typeof d === "function") ((p = d), (d = null));
        if (
          rT.util.isNodejs &&
          !rT.options.usePureJavaScript &&
          WD.pbkdf2 &&
          (d === null || typeof d !== "object") &&
          (WD.pbkdf2Sync.length > 4 || !d || d === "sha1")
        ) {
          if (typeof d !== "string") d = "sha1";
          if (
            ((e = Buffer.from(e, "binary")), (t = Buffer.from(t, "binary")), !p)
          ) {
            if (WD.pbkdf2Sync.length === 4)
              return WD.pbkdf2Sync(e, t, r, o).toString("binary");
            return WD.pbkdf2Sync(e, t, r, o, d).toString("binary");
          }
          if (WD.pbkdf2Sync.length === 4)
            return WD.pbkdf2(e, t, r, o, function (Se, ve) {
              if (Se) return p(Se);
              p(null, ve.toString("binary"));
            });
          return WD.pbkdf2(e, t, r, o, d, function (Se, ve) {
            if (Se) return p(Se);
            p(null, ve.toString("binary"));
          });
        }
        if (typeof d > "u" || d === null) d = "sha1";
        if (typeof d === "string") {
          if (!(d in rT.md.algorithms))
            throw Error("Unknown hash algorithm: " + d);
          d = rT.md[d].create();
        }
        var _ = d.digestLength;
        if (o > 4294967295 * _) {
          var E = Error("Derived key is too long.");
          if (p) return p(E);
          throw E;
        }
        var C = Math.ceil(o / _),
          I = o - (C - 1) * _,
          D = rT.hmac.create();
        D.start(d, e);
        var N = "",
          F,
          U,
          V;
        if (!p) {
          for (var re = 1; re <= C; ++re) {
            (D.start(null, null),
              D.update(t),
              D.update(rT.util.int32ToBytes(re)),
              (F = V = D.digest().getBytes()));
            for (var ue = 2; ue <= r; ++ue)
              (D.start(null, null),
                D.update(V),
                (U = D.digest().getBytes()),
                (F = rT.util.xorBytes(F, U, _)),
                (V = U));
            N += re < C ? F : F.substr(0, I);
          }
          return N;
        }
        var re = 1,
          ue;
        function de() {
          if (re > C) return p(null, N);
          (D.start(null, null),
            D.update(t),
            D.update(rT.util.int32ToBytes(re)),
            (F = V = D.digest().getBytes()),
            (ue = 2),
            _e());
        }
        function _e() {
          if (ue <= r)
            return (
              D.start(null, null),
              D.update(V),
              (U = D.digest().getBytes()),
              (F = rT.util.xorBytes(F, U, _)),
              (V = U),
              ++ue,
              rT.util.setImmediate(_e)
            );
          ((N += re < C ? F : F.substr(0, I)), ++re, de());
        }
        de();
      };
});
var sGe = commonJS(function (JPs, M0t) {
  var sM = yp();
  nM();
  Ig();
  var R0t = (M0t.exports = sM.sha256 = sM.sha256 || {});
  sM.md.sha256 = sM.md.algorithms.sha256 = R0t;
  R0t.create = function () {
    if (!P0t) NTr();
    var e = null,
      t = sM.util.createBuffer(),
      r = Array(64),
      o = {
        algorithm: "sha256",
        blockLength: 64,
        digestLength: 32,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8,
      };
    return (
      (o.start = function () {
        ((o.messageLength = 0), (o.fullMessageLength = o.messageLength64 = []));
        var d = o.messageLengthSize / 4;
        for (var p = 0; p < d; ++p) o.fullMessageLength.push(0);
        return (
          (t = sM.util.createBuffer()),
          (e = {
            h0: 1779033703,
            h1: 3144134277,
            h2: 1013904242,
            h3: 2773480762,
            h4: 1359893119,
            h5: 2600822924,
            h6: 528734635,
            h7: 1541459225,
          }),
          o
        );
      }),
      o.start(),
      (o.update = function (d, p) {
        if (p === "utf8") d = sM.util.encodeUtf8(d);
        var _ = d.length;
        ((o.messageLength += _), (_ = [(_ / 4294967296) >>> 0, _ >>> 0]));
        for (var E = o.fullMessageLength.length - 1; E >= 0; --E)
          ((o.fullMessageLength[E] += _[1]),
            (_[1] = _[0] + ((o.fullMessageLength[E] / 4294967296) >>> 0)),
            (o.fullMessageLength[E] = o.fullMessageLength[E] >>> 0),
            (_[0] = (_[1] / 4294967296) >>> 0));
        if ((t.putBytes(d), A0t(e, r, t), t.read > 2048 || t.length() === 0))
          t.compact();
        return o;
      }),
      (o.digest = function () {
        var d = sM.util.createBuffer();
        d.putBytes(t.bytes());
        var p =
            o.fullMessageLength[o.fullMessageLength.length - 1] +
            o.messageLengthSize,
          _ = p & (o.blockLength - 1);
        d.putBytes(oGe.substr(0, o.blockLength - _));
        var E,
          C,
          I = o.fullMessageLength[0] * 8;
        for (var D = 0; D < o.fullMessageLength.length - 1; ++D)
          ((E = o.fullMessageLength[D + 1] * 8),
            (C = (E / 4294967296) >>> 0),
            (I += C),
            d.putInt32(I >>> 0),
            (I = E >>> 0));
        d.putInt32(I);
        var N = {
          h0: e.h0,
          h1: e.h1,
          h2: e.h2,
          h3: e.h3,
          h4: e.h4,
          h5: e.h5,
          h6: e.h6,
          h7: e.h7,
        };
        A0t(N, r, d);
        var F = sM.util.createBuffer();
        return (
          F.putInt32(N.h0),
          F.putInt32(N.h1),
          F.putInt32(N.h2),
          F.putInt32(N.h3),
          F.putInt32(N.h4),
          F.putInt32(N.h5),
          F.putInt32(N.h6),
          F.putInt32(N.h7),
          F
        );
      }),
      o
    );
  };
  var oGe = null,
    P0t = !1,
    I0t = null;
  function NTr() {
    ((oGe = String.fromCharCode(128)),
      (oGe += sM.util.fillString(String.fromCharCode(0), 64)),
      (I0t = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]),
      (P0t = !0));
  }
  function A0t(e, t, r) {
    var o,
      d,
      p,
      _,
      E,
      C,
      I,
      D,
      N,
      F,
      U,
      V,
      re,
      ue,
      de,
      _e = r.length();
    while (_e >= 64) {
      for (I = 0; I < 16; ++I) t[I] = r.getInt32();
      for (; I < 64; ++I)
        ((o = t[I - 2]),
          (o =
            ((o >>> 17) | (o << 15)) ^ ((o >>> 19) | (o << 13)) ^ (o >>> 10)),
          (d = t[I - 15]),
          (d = ((d >>> 7) | (d << 25)) ^ ((d >>> 18) | (d << 14)) ^ (d >>> 3)),
          (t[I] = (o + t[I - 7] + d + t[I - 16]) | 0));
      ((D = e.h0),
        (N = e.h1),
        (F = e.h2),
        (U = e.h3),
        (V = e.h4),
        (re = e.h5),
        (ue = e.h6),
        (de = e.h7));
      for (I = 0; I < 64; ++I)
        ((_ =
          ((V >>> 6) | (V << 26)) ^
          ((V >>> 11) | (V << 21)) ^
          ((V >>> 25) | (V << 7))),
          (E = ue ^ (V & (re ^ ue))),
          (p =
            ((D >>> 2) | (D << 30)) ^
            ((D >>> 13) | (D << 19)) ^
            ((D >>> 22) | (D << 10))),
          (C = (D & N) | (F & (D ^ N))),
          (o = de + _ + E + I0t[I] + t[I]),
          (d = p + C),
          (de = ue),
          (ue = re),
          (re = V),
          (V = (U + o) >>> 0),
          (U = F),
          (F = N),
          (N = D),
          (D = (o + d) >>> 0));
      ((e.h0 = (e.h0 + D) | 0),
        (e.h1 = (e.h1 + N) | 0),
        (e.h2 = (e.h2 + F) | 0),
        (e.h3 = (e.h3 + U) | 0),
        (e.h4 = (e.h4 + V) | 0),
        (e.h5 = (e.h5 + re) | 0),
        (e.h6 = (e.h6 + ue) | 0),
        (e.h7 = (e.h7 + de) | 0),
        (_e -= 64));
    }
  }
});
var iGe = commonJS(function (ZPs, O0t) {
  var iM = yp();
  Ig();
  var Lye = null;
  if (
    iM.util.isNodejs &&
    !iM.options.usePureJavaScript &&
    !process.versions["node-webkit"]
  )
    Lye = importMetaRequire("crypto");
  var LTr = (O0t.exports = iM.prng = iM.prng || {});
  LTr.create = function (e) {
    var t = {
        plugin: e,
        key: null,
        seed: null,
        time: null,
        reseeds: 0,
        generated: 0,
        keyBytes: "",
      },
      r = e.md,
      o = Array(32);
    for (var d = 0; d < 32; ++d) o[d] = r.create();
    ((t.pools = o),
      (t.pool = 0),
      (t.generate = function (I, D) {
        if (!D) return t.generateSync(I);
        var N = t.plugin.cipher,
          F = t.plugin.increment,
          U = t.plugin.formatKey,
          V = t.plugin.formatSeed,
          re = iM.util.createBuffer();
        ((t.key = null), ue());
        function ue(de) {
          if (de) return D(de);
          if (re.length() >= I) return D(null, re.getBytes(I));
          if (t.generated > 1048575) t.key = null;
          if (t.key === null)
            return iM.util.nextTick(function () {
              p(ue);
            });
          var _e = N(t.key, t.seed);
          ((t.generated += _e.length),
            re.putBytes(_e),
            (t.key = U(N(t.key, F(t.seed)))),
            (t.seed = V(N(t.key, t.seed))),
            iM.util.setImmediate(ue));
        }
      }),
      (t.generateSync = function (I) {
        var D = t.plugin.cipher,
          N = t.plugin.increment,
          F = t.plugin.formatKey,
          U = t.plugin.formatSeed;
        t.key = null;
        var V = iM.util.createBuffer();
        while (V.length() < I) {
          if (t.generated > 1048575) t.key = null;
          if (t.key === null) _();
          var re = D(t.key, t.seed);
          ((t.generated += re.length),
            V.putBytes(re),
            (t.key = F(D(t.key, N(t.seed)))),
            (t.seed = U(D(t.key, t.seed))));
        }
        return V.getBytes(I);
      }));
    function p(I) {
      if (t.pools[0].messageLength >= 32) return (E(), I());
      var D = (32 - t.pools[0].messageLength) << 5;
      t.seedFile(D, function (N, F) {
        if (N) return I(N);
        (t.collect(F), E(), I());
      });
    }
    function _() {
      if (t.pools[0].messageLength >= 32) return E();
      var I = (32 - t.pools[0].messageLength) << 5;
      (t.collect(t.seedFileSync(I)), E());
    }
    function E() {
      t.reseeds = t.reseeds === 4294967295 ? 0 : t.reseeds + 1;
      var I = t.plugin.md.create();
      I.update(t.keyBytes);
      var D = 1;
      for (var N = 0; N < 32; ++N) {
        if (t.reseeds % D === 0)
          (I.update(t.pools[N].digest().getBytes()), t.pools[N].start());
        D = D << 1;
      }
      ((t.keyBytes = I.digest().getBytes()), I.start(), I.update(t.keyBytes));
      var F = I.digest().getBytes();
      ((t.key = t.plugin.formatKey(t.keyBytes)),
        (t.seed = t.plugin.formatSeed(F)),
        (t.generated = 0));
    }
    function C(I) {
      var D = null,
        N = iM.util.globalScope,
        F = N.crypto || N.msCrypto;
      if (F && F.getRandomValues)
        D = function (Me) {
          return F.getRandomValues(Me);
        };
      var U = iM.util.createBuffer();
      if (D)
        while (U.length() < I) {
          var V = Math.max(1, Math.min(I - U.length(), 65536) / 4),
            re = new Uint32Array(Math.floor(V));
          try {
            D(re);
            for (var ue = 0; ue < re.length; ++ue) U.putInt32(re[ue]);
          } catch (Me) {
            if (!(
              typeof QuotaExceededError < "u" &&
              Me instanceof QuotaExceededError
            ))
              throw Me;
          }
        }
      if (U.length() < I) {
        var de,
          _e,
          Se,
          ve = Math.floor(Math.random() * 65536);
        while (U.length() < I) {
          ((_e = 16807 * (ve & 65535)),
            (de = 16807 * (ve >> 16)),
            (_e += (de & 32767) << 16),
            (_e += de >> 15),
            (_e = (_e & 2147483647) + (_e >> 31)),
            (ve = _e & 4294967295));
          for (var ue = 0; ue < 3; ++ue)
            ((Se = ve >>> (ue << 3)),
              (Se ^= Math.floor(Math.random() * 256)),
              U.putByte(Se & 255));
        }
      }
      return U.getBytes(I);
    }
    if (Lye)
      ((t.seedFile = function (I, D) {
        Lye.randomBytes(I, function (N, F) {
          if (N) return D(N);
          D(null, F.toString());
        });
      }),
        (t.seedFileSync = function (I) {
          return Lye.randomBytes(I).toString();
        }));
    else
      ((t.seedFile = function (I, D) {
        try {
          D(null, C(I));
        } catch (N) {
          D(N);
        }
      }),
        (t.seedFileSync = C));
    return (
      (t.collect = function (I) {
        var D = I.length;
        for (var N = 0; N < D; ++N)
          (t.pools[t.pool].update(I.substr(N, 1)),
            (t.pool = t.pool === 31 ? 0 : t.pool + 1));
      }),
      (t.collectInt = function (I, D) {
        var N = "";
        for (var F = 0; F < D; F += 8) N += String.fromCharCode((I >> F) & 255);
        t.collect(N);
      }),
      (t.registerWorker = function (I) {
        if (I === self)
          t.seedFile = function (N, F) {
            function U(V) {
              var re = V.data;
              if (re.forge && re.forge.prng)
                (self.removeEventListener("message", U),
                  F(re.forge.prng.err, re.forge.prng.bytes));
            }
            (self.addEventListener("message", U),
              self.postMessage({ forge: { prng: { needed: N } } }));
          };
        else {
          var D = function (N) {
            var F = N.data;
            if (F.forge && F.forge.prng)
              t.seedFile(F.forge.prng.needed, function (U, V) {
                I.postMessage({ forge: { prng: { err: U, bytes: V } } });
              });
          };
          I.addEventListener("message", D);
        }
      }),
      t
    );
  };
});
var Zx = commonJS(function (eIs, aGe) {
  var mk = yp();
  oB();
  sGe();
  iGe();
  Ig();
  (function () {
    if (mk.random && mk.random.getBytes) {
      aGe.exports = mk.random;
      return;
    }
    (function (e) {
      var t = {},
        r = [, , , ,],
        o = mk.util.createBuffer();
      ((t.formatKey = function (N) {
        var F = mk.util.createBuffer(N);
        return (
          (N = [, , , ,]),
          (N[0] = F.getInt32()),
          (N[1] = F.getInt32()),
          (N[2] = F.getInt32()),
          (N[3] = F.getInt32()),
          mk.aes._expandKey(N, !1)
        );
      }),
        (t.formatSeed = function (N) {
          var F = mk.util.createBuffer(N);
          return (
            (N = [, , , ,]),
            (N[0] = F.getInt32()),
            (N[1] = F.getInt32()),
            (N[2] = F.getInt32()),
            (N[3] = F.getInt32()),
            N
          );
        }),
        (t.cipher = function (N, F) {
          return (
            mk.aes._updateBlock(N, F, r, !1),
            o.putInt32(r[0]),
            o.putInt32(r[1]),
            o.putInt32(r[2]),
            o.putInt32(r[3]),
            o.getBytes()
          );
        }),
        (t.increment = function (N) {
          return (++N[3], N);
        }),
        (t.md = mk.md.sha256));
      function d() {
        var N = mk.prng.create(t);
        return (
          (N.getBytes = function (F, U) {
            return N.generate(F, U);
          }),
          (N.getBytesSync = function (F) {
            return N.generate(F);
          }),
          N
        );
      }
      var p = d(),
        _ = null,
        E = mk.util.globalScope,
        C = E.crypto || E.msCrypto;
      if (C && C.getRandomValues)
        _ = function (N) {
          return C.getRandomValues(N);
        };
      if (mk.options.usePureJavaScript || (!mk.util.isNodejs && !_)) {
        if (typeof window > "u" || window.document === void 0);
        if ((p.collectInt(+new Date(), 32), typeof navigator < "u")) {
          var I = "";
          for (var D in navigator)
            try {
              if (typeof navigator[D] == "string") I += navigator[D];
            } catch (N) {}
          (p.collect(I), (I = null));
        }
        if (e)
          (e().mousemove(function (N) {
            (p.collectInt(N.clientX, 16), p.collectInt(N.clientY, 16));
          }),
            e().keypress(function (N) {
              p.collectInt(N.charCode, 8);
            }));
      }
      if (!mk.random) mk.random = p;
      else for (var D in p) mk.random[D] = p[D];
      ((mk.random.createInstance = d), (aGe.exports = mk.random));
    })(typeof jQuery < "u" ? jQuery : null);
  })();
});
var cGe = commonJS(function (tIs, L0t) {
  var Cv = yp();
  Ig();
  var lGe = [
      217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216,
      157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251,
      162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125,
      50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78,
      130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241,
      220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182,
      38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3,
      248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215,
      8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42,
      150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236,
      194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57,
      153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45,
      93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211,
      0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56,
      52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243,
      219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173,
    ],
    D0t = [1, 2, 3, 5],
    FTr = function (e, t) {
      return ((e << t) & 65535) | ((e & 65535) >> (16 - t));
    },
    $Tr = function (e, t) {
      return ((e & 65535) >> t) | ((e << (16 - t)) & 65535);
    };
  L0t.exports = Cv.rc2 = Cv.rc2 || {};
  Cv.rc2.expandKey = function (e, t) {
    if (typeof e === "string") e = Cv.util.createBuffer(e);
    t = t || 128;
    var r = e,
      o = e.length(),
      d = t,
      p = Math.ceil(d / 8),
      _ = 255 >> (d & 7),
      E;
    for (E = o; E < 128; E++) r.putByte(lGe[(r.at(E - 1) + r.at(E - o)) & 255]);
    r.setAt(128 - p, lGe[r.at(128 - p) & _]);
    for (E = 127 - p; E >= 0; E--) r.setAt(E, lGe[r.at(E + 1) ^ r.at(E + p)]);
    return r;
  };
  var N0t = function (e, t, r) {
    var o = !1,
      d = null,
      p = null,
      _ = null,
      E,
      C,
      I,
      D,
      N = [];
    e = Cv.rc2.expandKey(e, t);
    for (I = 0; I < 64; I++) N.push(e.getInt16Le());
    if (r)
      ((E = function (V) {
        for (I = 0; I < 4; I++)
          ((V[I] +=
            N[D] +
            (V[(I + 3) % 4] & V[(I + 2) % 4]) +
            (~V[(I + 3) % 4] & V[(I + 1) % 4])),
            (V[I] = FTr(V[I], D0t[I])),
            D++);
      }),
        (C = function (V) {
          for (I = 0; I < 4; I++) V[I] += N[V[(I + 3) % 4] & 63];
        }));
    else
      ((E = function (V) {
        for (I = 3; I >= 0; I--)
          ((V[I] = $Tr(V[I], D0t[I])),
            (V[I] -=
              N[D] +
              (V[(I + 3) % 4] & V[(I + 2) % 4]) +
              (~V[(I + 3) % 4] & V[(I + 1) % 4])),
            D--);
      }),
        (C = function (V) {
          for (I = 3; I >= 0; I--) V[I] -= N[V[(I + 3) % 4] & 63];
        }));
    var F = function (V) {
        var re = [];
        for (I = 0; I < 4; I++) {
          var ue = d.getInt16Le();
          if (_ !== null)
            if (r) ue ^= _.getInt16Le();
            else _.putInt16Le(ue);
          re.push(ue & 65535);
        }
        D = r ? 0 : 63;
        for (var de = 0; de < V.length; de++)
          for (var _e = 0; _e < V[de][0]; _e++) V[de][1](re);
        for (I = 0; I < 4; I++) {
          if (_ !== null)
            if (r) _.putInt16Le(re[I]);
            else re[I] ^= _.getInt16Le();
          p.putInt16Le(re[I]);
        }
      },
      U = null;
    return (
      (U = {
        start: function (V, re) {
          if (V) {
            if (typeof V === "string") V = Cv.util.createBuffer(V);
          }
          ((o = !1),
            (d = Cv.util.createBuffer()),
            (p = re || new Cv.util.createBuffer()),
            (_ = V),
            (U.output = p));
        },
        update: function (V) {
          if (!o) d.putBuffer(V);
          while (d.length() >= 8)
            F([
              [5, E],
              [1, C],
              [6, E],
              [1, C],
              [5, E],
            ]);
        },
        finish: function (V) {
          var re = !0;
          if (r)
            if (V) re = V(8, d, !r);
            else {
              var ue = d.length() === 8 ? 8 : 8 - d.length();
              d.fillWithByte(ue, ue);
            }
          if (re) ((o = !0), U.update());
          if (!r) {
            if (((re = d.length() === 0), re))
              if (V) re = V(8, p, !r);
              else {
                var de = p.length(),
                  _e = p.at(de - 1);
                if (_e > de) re = !1;
                else p.truncate(_e);
              }
          }
          return re;
        },
      }),
      U
    );
  };
  Cv.rc2.startEncrypting = function (e, t, r) {
    var o = Cv.rc2.createEncryptionCipher(e, 128);
    return (o.start(t, r), o);
  };
  Cv.rc2.createEncryptionCipher = function (e, t) {
    return N0t(e, t, !0);
  };
  Cv.rc2.startDecrypting = function (e, t, r) {
    var o = Cv.rc2.createDecryptionCipher(e, 128);
    return (o.start(t, r), o);
  };
  Cv.rc2.createDecryptionCipher = function (e, t) {
    return N0t(e, t, !1);
  };
});
var jee = commonJS(function (nIs, G0t) {
  var uGe = yp();
  G0t.exports = uGe.jsbn = uGe.jsbn || {};
  var qD,
    BTr = 244837814094590,
    F0t = (BTr & 16777215) == 15715070;
  function Vi(e, t, r) {
    if (((this.data = []), e != null))
      if (typeof e == "number") this.fromNumber(e, t, r);
      else if (t == null && typeof e != "string") this.fromString(e, 256);
      else this.fromString(e, t);
  }
  uGe.jsbn.BigInteger = Vi;
  function qm() {
    return new Vi(null);
  }
  function UTr(e, t, r, o, d, p) {
    while (--p >= 0) {
      var _ = t * this.data[e++] + r.data[o] + d;
      ((d = Math.floor(_ / 67108864)), (r.data[o++] = _ & 67108863));
    }
    return d;
  }
  function HTr(e, t, r, o, d, p) {
    var _ = t & 32767,
      E = t >> 15;
    while (--p >= 0) {
      var C = this.data[e] & 32767,
        I = this.data[e++] >> 15,
        D = E * C + I * _;
      ((C = _ * C + ((D & 32767) << 15) + r.data[o] + (d & 1073741823)),
        (d = (C >>> 30) + (D >>> 15) + E * I + (d >>> 30)),
        (r.data[o++] = C & 1073741823));
    }
    return d;
  }
  function $0t(e, t, r, o, d, p) {
    var _ = t & 16383,
      E = t >> 14;
    while (--p >= 0) {
      var C = this.data[e] & 16383,
        I = this.data[e++] >> 14,
        D = E * C + I * _;
      ((C = _ * C + ((D & 16383) << 14) + r.data[o] + d),
        (d = (C >> 28) + (D >> 14) + E * I),
        (r.data[o++] = C & 268435455));
    }
    return d;
  }
  if (typeof navigator > "u") ((Vi.prototype.am = $0t), (qD = 28));
  else if (F0t && navigator.appName == "Microsoft Internet Explorer")
    ((Vi.prototype.am = HTr), (qD = 30));
  else if (F0t && navigator.appName != "Netscape")
    ((Vi.prototype.am = UTr), (qD = 26));
  else ((Vi.prototype.am = $0t), (qD = 28));
  Vi.prototype.DB = qD;
  Vi.prototype.DM = (1 << qD) - 1;
  Vi.prototype.DV = 1 << qD;
  var dGe = 52;
  Vi.prototype.FV = Math.pow(2, dGe);
  Vi.prototype.F1 = dGe - qD;
  Vi.prototype.F2 = 2 * qD - dGe;
  var jTr = "0123456789abcdefghijklmnopqrstuvwxyz",
    Fye = [],
    H4,
    iA;
  H4 = 48;
  for (iA = 0; iA <= 9; ++iA) Fye[H4++] = iA;
  H4 = 97;
  for (iA = 10; iA < 36; ++iA) Fye[H4++] = iA;
  H4 = 65;
  for (iA = 10; iA < 36; ++iA) Fye[H4++] = iA;
  function B0t(e) {
    return jTr.charAt(e);
  }
  function U0t(e, t) {
    var r = Fye[e.charCodeAt(t)];
    return r == null ? -1 : r;
  }
  function WTr(e) {
    for (var t = this.t - 1; t >= 0; --t) e.data[t] = this.data[t];
    ((e.t = this.t), (e.s = this.s));
  }
  function GTr(e) {
    if (((this.t = 1), (this.s = e < 0 ? -1 : 0), e > 0)) this.data[0] = e;
    else if (e < -1) this.data[0] = e + this.DV;
    else this.t = 0;
  }
  function iB(e) {
    var t = qm();
    return (t.fromInt(e), t);
  }
  function zTr(e, t) {
    var r;
    if (t == 16) r = 4;
    else if (t == 8) r = 3;
    else if (t == 256) r = 8;
    else if (t == 2) r = 1;
    else if (t == 32) r = 5;
    else if (t == 4) r = 2;
    else {
      this.fromRadix(e, t);
      return;
    }
    ((this.t = 0), (this.s = 0));
    var o = e.length,
      d = !1,
      p = 0;
    while (--o >= 0) {
      var _ = r == 8 ? e[o] & 255 : U0t(e, o);
      if (_ < 0) {
        if (e.charAt(o) == "-") d = !0;
        continue;
      }
      if (((d = !1), p == 0)) this.data[this.t++] = _;
      else if (p + r > this.DB)
        ((this.data[this.t - 1] |= (_ & ((1 << (this.DB - p)) - 1)) << p),
          (this.data[this.t++] = _ >> (this.DB - p)));
      else this.data[this.t - 1] |= _ << p;
      if (((p += r), p >= this.DB)) p -= this.DB;
    }
    if (r == 8 && (e[0] & 128) != 0) {
      if (((this.s = -1), p > 0))
        this.data[this.t - 1] |= ((1 << (this.DB - p)) - 1) << p;
    }
    if ((this.clamp(), d)) Vi.ZERO.subTo(this, this);
  }
  function qTr() {
    var e = this.s & this.DM;
    while (this.t > 0 && this.data[this.t - 1] == e) --this.t;
  }
  function VTr(e) {
    if (this.s < 0) return "-" + this.negate().toString(e);
    var t;
    if (e == 16) t = 4;
    else if (e == 8) t = 3;
    else if (e == 2) t = 1;
    else if (e == 32) t = 5;
    else if (e == 4) t = 2;
    else return this.toRadix(e);
    var r = (1 << t) - 1,
      o,
      d = !1,
      p = "",
      _ = this.t,
      E = this.DB - ((_ * this.DB) % t);
    if (_-- > 0) {
      if (E < this.DB && (o = this.data[_] >> E) > 0) ((d = !0), (p = B0t(o)));
      while (_ >= 0) {
        if (E < t)
          ((o = (this.data[_] & ((1 << E) - 1)) << (t - E)),
            (o |= this.data[--_] >> (E += this.DB - t)));
        else if (((o = (this.data[_] >> (E -= t)) & r), E <= 0))
          ((E += this.DB), --_);
        if (o > 0) d = !0;
        if (d) p += B0t(o);
      }
    }
    return d ? p : "0";
  }
  function KTr() {
    var e = qm();
    return (Vi.ZERO.subTo(this, e), e);
  }
  function YTr() {
    return this.s < 0 ? this.negate() : this;
  }
  function XTr(e) {
    var t = this.s - e.s;
    if (t != 0) return t;
    var r = this.t;
    if (((t = r - e.t), t != 0)) return this.s < 0 ? -t : t;
    while (--r >= 0) if ((t = this.data[r] - e.data[r]) != 0) return t;
    return 0;
  }
  function $ye(e) {
    var t = 1,
      r;
    if ((r = e >>> 16) != 0) ((e = r), (t += 16));
    if ((r = e >> 8) != 0) ((e = r), (t += 8));
    if ((r = e >> 4) != 0) ((e = r), (t += 4));
    if ((r = e >> 2) != 0) ((e = r), (t += 2));
    if ((r = e >> 1) != 0) ((e = r), (t += 1));
    return t;
  }
  function QTr() {
    if (this.t <= 0) return 0;
    return (
      this.DB * (this.t - 1) + $ye(this.data[this.t - 1] ^ (this.s & this.DM))
    );
  }
  function JTr(e, t) {
    var r;
    for (r = this.t - 1; r >= 0; --r) t.data[r + e] = this.data[r];
    for (r = e - 1; r >= 0; --r) t.data[r] = 0;
    ((t.t = this.t + e), (t.s = this.s));
  }
  function ZTr(e, t) {
    for (var r = e; r < this.t; ++r) t.data[r - e] = this.data[r];
    ((t.t = Math.max(this.t - e, 0)), (t.s = this.s));
  }
  function evr(e, t) {
    var r = e % this.DB,
      o = this.DB - r,
      d = (1 << o) - 1,
      p = Math.floor(e / this.DB),
      _ = (this.s << r) & this.DM,
      E;
    for (E = this.t - 1; E >= 0; --E)
      ((t.data[E + p + 1] = (this.data[E] >> o) | _),
        (_ = (this.data[E] & d) << r));
    for (E = p - 1; E >= 0; --E) t.data[E] = 0;
    ((t.data[p] = _), (t.t = this.t + p + 1), (t.s = this.s), t.clamp());
  }
  function tvr(e, t) {
    t.s = this.s;
    var r = Math.floor(e / this.DB);
    if (r >= this.t) {
      t.t = 0;
      return;
    }
    var o = e % this.DB,
      d = this.DB - o,
      p = (1 << o) - 1;
    t.data[0] = this.data[r] >> o;
    for (var _ = r + 1; _ < this.t; ++_)
      ((t.data[_ - r - 1] |= (this.data[_] & p) << d),
        (t.data[_ - r] = this.data[_] >> o));
    if (o > 0) t.data[this.t - r - 1] |= (this.s & p) << d;
    ((t.t = this.t - r), t.clamp());
  }
  function nvr(e, t) {
    var r = 0,
      o = 0,
      d = Math.min(e.t, this.t);
    while (r < d)
      ((o += this.data[r] - e.data[r]),
        (t.data[r++] = o & this.DM),
        (o >>= this.DB));
    if (e.t < this.t) {
      o -= e.s;
      while (r < this.t)
        ((o += this.data[r]), (t.data[r++] = o & this.DM), (o >>= this.DB));
      o += this.s;
    } else {
      o += this.s;
      while (r < e.t)
        ((o -= e.data[r]), (t.data[r++] = o & this.DM), (o >>= this.DB));
      o -= e.s;
    }
    if (((t.s = o < 0 ? -1 : 0), o < -1)) t.data[r++] = this.DV + o;
    else if (o > 0) t.data[r++] = o;
    ((t.t = r), t.clamp());
  }
  function rvr(e, t) {
    var r = this.abs(),
      o = e.abs(),
      d = r.t;
    t.t = d + o.t;
    while (--d >= 0) t.data[d] = 0;
    for (d = 0; d < o.t; ++d)
      t.data[d + r.t] = r.am(0, o.data[d], t, d, 0, r.t);
    if (((t.s = 0), t.clamp(), this.s != e.s)) Vi.ZERO.subTo(t, t);
  }
  function ovr(e) {
    var t = this.abs(),
      r = (e.t = 2 * t.t);
    while (--r >= 0) e.data[r] = 0;
    for (r = 0; r < t.t - 1; ++r) {
      var o = t.am(r, t.data[r], e, 2 * r, 0, 1);
      if (
        (e.data[r + t.t] += t.am(
          r + 1,
          2 * t.data[r],
          e,
          2 * r + 1,
          o,
          t.t - r - 1,
        )) >= t.DV
      )
        ((e.data[r + t.t] -= t.DV), (e.data[r + t.t + 1] = 1));
    }
    if (e.t > 0) e.data[e.t - 1] += t.am(r, t.data[r], e, 2 * r, 0, 1);
    ((e.s = 0), e.clamp());
  }
  function svr(e, t, r) {
    var o = e.abs();
    if (o.t <= 0) return;
    var d = this.abs();
    if (d.t < o.t) {
      if (t != null) t.fromInt(0);
      if (r != null) this.copyTo(r);
      return;
    }
    if (r == null) r = qm();
    var p = qm(),
      _ = this.s,
      E = e.s,
      C = this.DB - $ye(o.data[o.t - 1]);
    if (C > 0) (o.lShiftTo(C, p), d.lShiftTo(C, r));
    else (o.copyTo(p), d.copyTo(r));
    var I = p.t,
      D = p.data[I - 1];
    if (D == 0) return;
    var N = D * (1 << this.F1) + (I > 1 ? p.data[I - 2] >> this.F2 : 0),
      F = this.FV / N,
      U = (1 << this.F1) / N,
      V = 1 << this.F2,
      re = r.t,
      ue = re - I,
      de = t == null ? qm() : t;
    if ((p.dlShiftTo(ue, de), r.compareTo(de) >= 0))
      ((r.data[r.t++] = 1), r.subTo(de, r));
    (Vi.ONE.dlShiftTo(I, de), de.subTo(p, p));
    while (p.t < I) p.data[p.t++] = 0;
    while (--ue >= 0) {
      var _e =
        r.data[--re] == D
          ? this.DM
          : Math.floor(r.data[re] * F + (r.data[re - 1] + V) * U);
      if ((r.data[re] += p.am(0, _e, r, ue, 0, I)) < _e) {
        (p.dlShiftTo(ue, de), r.subTo(de, r));
        while (r.data[re] < --_e) r.subTo(de, r);
      }
    }
    if (t != null) {
      if ((r.drShiftTo(I, t), _ != E)) Vi.ZERO.subTo(t, t);
    }
    if (((r.t = I), r.clamp(), C > 0)) r.rShiftTo(C, r);
    if (_ < 0) Vi.ZERO.subTo(r, r);
  }
  function ivr(e) {
    var t = qm();
    if (
      (this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(Vi.ZERO) > 0)
    )
      e.subTo(t, t);
    return t;
  }
  function LW(e) {
    this.m = e;
  }
  function avr(e) {
    if (e.s < 0 || e.compareTo(this.m) >= 0) return e.mod(this.m);
    else return e;
  }
  function lvr(e) {
    return e;
  }
  function cvr(e) {
    e.divRemTo(this.m, null, e);
  }
  function uvr(e, t, r) {
    (e.multiplyTo(t, r), this.reduce(r));
  }
  function dvr(e, t) {
    (e.squareTo(t), this.reduce(t));
  }
  LW.prototype.convert = avr;
  LW.prototype.revert = lvr;
  LW.prototype.reduce = cvr;
  LW.prototype.mulTo = uvr;
  LW.prototype.sqrTo = dvr;
  function fvr() {
    if (this.t < 1) return 0;
    var e = this.data[0];
    if ((e & 1) == 0) return 0;
    var t = e & 3;
    return (
      (t = (t * (2 - (e & 15) * t)) & 15),
      (t = (t * (2 - (e & 255) * t)) & 255),
      (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
      (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
      t > 0 ? this.DV - t : -t
    );
  }
  function $W(e) {
    ((this.m = e),
      (this.mp = e.invDigit()),
      (this.mpl = this.mp & 32767),
      (this.mph = this.mp >> 15),
      (this.um = (1 << (e.DB - 15)) - 1),
      (this.mt2 = 2 * e.t));
  }
  function pvr(e) {
    var t = qm();
    if (
      (e.abs().dlShiftTo(this.m.t, t),
      t.divRemTo(this.m, null, t),
      e.s < 0 && t.compareTo(Vi.ZERO) > 0)
    )
      this.m.subTo(t, t);
    return t;
  }
  function mvr(e) {
    var t = qm();
    return (e.copyTo(t), this.reduce(t), t);
  }
  function gvr(e) {
    while (e.t <= this.mt2) e.data[e.t++] = 0;
    for (var t = 0; t < this.m.t; ++t) {
      var r = e.data[t] & 32767,
        o =
          (r * this.mpl +
            (((r * this.mph + (e.data[t] >> 15) * this.mpl) & this.um) << 15)) &
          e.DM;
      ((r = t + this.m.t), (e.data[r] += this.m.am(0, o, e, t, 0, this.m.t)));
      while (e.data[r] >= e.DV) ((e.data[r] -= e.DV), e.data[++r]++);
    }
    if ((e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0))
      e.subTo(this.m, e);
  }
  function hvr(e, t) {
    (e.squareTo(t), this.reduce(t));
  }
  function yvr(e, t, r) {
    (e.multiplyTo(t, r), this.reduce(r));
  }
  $W.prototype.convert = pvr;
  $W.prototype.revert = mvr;
  $W.prototype.reduce = gvr;
  $W.prototype.mulTo = yvr;
  $W.prototype.sqrTo = hvr;
  function _vr() {
    return (this.t > 0 ? this.data[0] & 1 : this.s) == 0;
  }
  function bvr(e, t) {
    if (e > 4294967295 || e < 1) return Vi.ONE;
    var r = qm(),
      o = qm(),
      d = t.convert(this),
      p = $ye(e) - 1;
    d.copyTo(r);
    while (--p >= 0)
      if ((t.sqrTo(r, o), (e & (1 << p)) > 0)) t.mulTo(o, d, r);
      else {
        var _ = r;
        ((r = o), (o = _));
      }
    return t.revert(r);
  }
  function Svr(e, t) {
    var r;
    if (e < 256 || t.isEven()) r = new LW(t);
    else r = new $W(t);
    return this.exp(e, r);
  }
  Vi.prototype.copyTo = WTr;
  Vi.prototype.fromInt = GTr;
  Vi.prototype.fromString = zTr;
  Vi.prototype.clamp = qTr;
  Vi.prototype.dlShiftTo = JTr;
  Vi.prototype.drShiftTo = ZTr;
  Vi.prototype.lShiftTo = evr;
  Vi.prototype.rShiftTo = tvr;
  Vi.prototype.subTo = nvr;
  Vi.prototype.multiplyTo = rvr;
  Vi.prototype.squareTo = ovr;
  Vi.prototype.divRemTo = svr;
  Vi.prototype.invDigit = fvr;
  Vi.prototype.isEven = _vr;
  Vi.prototype.exp = bvr;
  Vi.prototype.toString = VTr;
  Vi.prototype.negate = KTr;
  Vi.prototype.abs = YTr;
  Vi.prototype.compareTo = XTr;
  Vi.prototype.bitLength = QTr;
  Vi.prototype.mod = ivr;
  Vi.prototype.modPowInt = Svr;
  Vi.ZERO = iB(0);
  Vi.ONE = iB(1);
  function kvr() {
    var e = qm();
    return (this.copyTo(e), e);
  }
  function wvr() {
    if (this.s < 0) {
      if (this.t == 1) return this.data[0] - this.DV;
      else if (this.t == 0) return -1;
    } else if (this.t == 1) return this.data[0];
    else if (this.t == 0) return 0;
    return (
      ((this.data[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this.data[0]
    );
  }
  function Evr() {
    return this.t == 0 ? this.s : (this.data[0] << 24) >> 24;
  }
  function Tvr() {
    return this.t == 0 ? this.s : (this.data[0] << 16) >> 16;
  }
  function vvr(e) {
    return Math.floor((Math.LN2 * this.DB) / Math.log(e));
  }
  function Cvr() {
    if (this.s < 0) return -1;
    else if (this.t <= 0 || (this.t == 1 && this.data[0] <= 0)) return 0;
    else return 1;
  }
  function xvr(e) {
    if (e == null) e = 10;
    if (this.signum() == 0 || e < 2 || e > 36) return "0";
    var t = this.chunkSize(e),
      r = Math.pow(e, t),
      o = iB(r),
      d = qm(),
      p = qm(),
      _ = "";
    this.divRemTo(o, d, p);
    while (d.signum() > 0)
      ((_ = (r + p.intValue()).toString(e).substr(1) + _), d.divRemTo(o, d, p));
    return p.intValue().toString(e) + _;
  }
  function Avr(e, t) {
    if ((this.fromInt(0), t == null)) t = 10;
    var r = this.chunkSize(t),
      o = Math.pow(t, r),
      d = !1,
      p = 0,
      _ = 0;
    for (var E = 0; E < e.length; ++E) {
      var C = U0t(e, E);
      if (C < 0) {
        if (e.charAt(E) == "-" && this.signum() == 0) d = !0;
        continue;
      }
      if (((_ = t * _ + C), ++p >= r))
        (this.dMultiply(o), this.dAddOffset(_, 0), (p = 0), (_ = 0));
    }
    if (p > 0) (this.dMultiply(Math.pow(t, p)), this.dAddOffset(_, 0));
    if (d) Vi.ZERO.subTo(this, this);
  }
  function Rvr(e, t, r) {
    if (typeof t == "number")
      if (e < 2) this.fromInt(1);
      else {
        if ((this.fromNumber(e, r), !this.testBit(e - 1)))
          this.bitwiseTo(Vi.ONE.shiftLeft(e - 1), fGe, this);
        if (this.isEven()) this.dAddOffset(1, 0);
        while (!this.isProbablePrime(t))
          if ((this.dAddOffset(2, 0), this.bitLength() > e))
            this.subTo(Vi.ONE.shiftLeft(e - 1), this);
      }
    else {
      var o = [],
        d = e & 7;
      if (((o.length = (e >> 3) + 1), t.nextBytes(o), d > 0))
        o[0] &= (1 << d) - 1;
      else o[0] = 0;
      this.fromString(o, 256);
    }
  }
  function Pvr() {
    var e = this.t,
      t = [];
    t[0] = this.s;
    var r = this.DB - ((e * this.DB) % 8),
      o,
      d = 0;
    if (e-- > 0) {
      if (r < this.DB && (o = this.data[e] >> r) != (this.s & this.DM) >> r)
        t[d++] = o | (this.s << (this.DB - r));
      while (e >= 0) {
        if (r < 8)
          ((o = (this.data[e] & ((1 << r) - 1)) << (8 - r)),
            (o |= this.data[--e] >> (r += this.DB - 8)));
        else if (((o = (this.data[e] >> (r -= 8)) & 255), r <= 0))
          ((r += this.DB), --e);
        if ((o & 128) != 0) o |= -256;
        if (d == 0 && (this.s & 128) != (o & 128)) ++d;
        if (d > 0 || o != this.s) t[d++] = o;
      }
    }
    return t;
  }
  function Ivr(e) {
    return this.compareTo(e) == 0;
  }
  function Mvr(e) {
    return this.compareTo(e) < 0 ? this : e;
  }
  function Ovr(e) {
    return this.compareTo(e) > 0 ? this : e;
  }
  function Dvr(e, t, r) {
    var o,
      d,
      p = Math.min(e.t, this.t);
    for (o = 0; o < p; ++o) r.data[o] = t(this.data[o], e.data[o]);
    if (e.t < this.t) {
      d = e.s & this.DM;
      for (o = p; o < this.t; ++o) r.data[o] = t(this.data[o], d);
      r.t = this.t;
    } else {
      d = this.s & this.DM;
      for (o = p; o < e.t; ++o) r.data[o] = t(d, e.data[o]);
      r.t = e.t;
    }
    ((r.s = t(this.s, e.s)), r.clamp());
  }
  function Nvr(e, t) {
    return e & t;
  }
  function Lvr(e) {
    var t = qm();
    return (this.bitwiseTo(e, Nvr, t), t);
  }
  function fGe(e, t) {
    return e | t;
  }
  function Fvr(e) {
    var t = qm();
    return (this.bitwiseTo(e, fGe, t), t);
  }
  function H0t(e, t) {
    return e ^ t;
  }
  function $vr(e) {
    var t = qm();
    return (this.bitwiseTo(e, H0t, t), t);
  }
  function j0t(e, t) {
    return e & ~t;
  }
  function Bvr(e) {
    var t = qm();
    return (this.bitwiseTo(e, j0t, t), t);
  }
  function Uvr() {
    var e = qm();
    for (var t = 0; t < this.t; ++t) e.data[t] = this.DM & ~this.data[t];
    return ((e.t = this.t), (e.s = ~this.s), e);
  }
  function Hvr(e) {
    var t = qm();
    if (e < 0) this.rShiftTo(-e, t);
    else this.lShiftTo(e, t);
    return t;
  }
  function jvr(e) {
    var t = qm();
    if (e < 0) this.lShiftTo(-e, t);
    else this.rShiftTo(e, t);
    return t;
  }
  function Wvr(e) {
    if (e == 0) return -1;
    var t = 0;
    if ((e & 65535) == 0) ((e >>= 16), (t += 16));
    if ((e & 255) == 0) ((e >>= 8), (t += 8));
    if ((e & 15) == 0) ((e >>= 4), (t += 4));
    if ((e & 3) == 0) ((e >>= 2), (t += 2));
    if ((e & 1) == 0) ++t;
    return t;
  }
  function Gvr() {
    for (var e = 0; e < this.t; ++e)
      if (this.data[e] != 0) return e * this.DB + Wvr(this.data[e]);
    if (this.s < 0) return this.t * this.DB;
    return -1;
  }
  function zvr(e) {
    var t = 0;
    while (e != 0) ((e &= e - 1), ++t);
    return t;
  }
  function qvr() {
    var e = 0,
      t = this.s & this.DM;
    for (var r = 0; r < this.t; ++r) e += zvr(this.data[r] ^ t);
    return e;
  }
  function Vvr(e) {
    var t = Math.floor(e / this.DB);
    if (t >= this.t) return this.s != 0;
    return (this.data[t] & (1 << (e % this.DB))) != 0;
  }
  function Kvr(e, t) {
    var r = Vi.ONE.shiftLeft(e);
    return (this.bitwiseTo(r, t, r), r);
  }
  function Yvr(e) {
    return this.changeBit(e, fGe);
  }
  function Xvr(e) {
    return this.changeBit(e, j0t);
  }
  function Qvr(e) {
    return this.changeBit(e, H0t);
  }
  function Jvr(e, t) {
    var r = 0,
      o = 0,
      d = Math.min(e.t, this.t);
    while (r < d)
      ((o += this.data[r] + e.data[r]),
        (t.data[r++] = o & this.DM),
        (o >>= this.DB));
    if (e.t < this.t) {
      o += e.s;
      while (r < this.t)
        ((o += this.data[r]), (t.data[r++] = o & this.DM), (o >>= this.DB));
      o += this.s;
    } else {
      o += this.s;
      while (r < e.t)
        ((o += e.data[r]), (t.data[r++] = o & this.DM), (o >>= this.DB));
      o += e.s;
    }
    if (((t.s = o < 0 ? -1 : 0), o > 0)) t.data[r++] = o;
    else if (o < -1) t.data[r++] = this.DV + o;
    ((t.t = r), t.clamp());
  }
  function Zvr(e) {
    var t = qm();
    return (this.addTo(e, t), t);
  }
  function eCr(e) {
    var t = qm();
    return (this.subTo(e, t), t);
  }
  function tCr(e) {
    var t = qm();
    return (this.multiplyTo(e, t), t);
  }
  function nCr() {
    var e = qm();
    return (this.squareTo(e), e);
  }
  function rCr(e) {
    var t = qm();
    return (this.divRemTo(e, t, null), t);
  }
  function oCr(e) {
    var t = qm();
    return (this.divRemTo(e, null, t), t);
  }
  function sCr(e) {
    var t = qm(),
      r = qm();
    return (this.divRemTo(e, t, r), [t, r]);
  }
  function iCr(e) {
    ((this.data[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
      ++this.t,
      this.clamp());
  }
  function aCr(e, t) {
    if (e == 0) return;
    while (this.t <= t) this.data[this.t++] = 0;
    this.data[t] += e;
    while (this.data[t] >= this.DV) {
      if (((this.data[t] -= this.DV), ++t >= this.t)) this.data[this.t++] = 0;
      ++this.data[t];
    }
  }
  function Hee() {}
  function W0t(e) {
    return e;
  }
  function lCr(e, t, r) {
    e.multiplyTo(t, r);
  }
  function cCr(e, t) {
    e.squareTo(t);
  }
  Hee.prototype.convert = W0t;
  Hee.prototype.revert = W0t;
  Hee.prototype.mulTo = lCr;
  Hee.prototype.sqrTo = cCr;
  function uCr(e) {
    return this.exp(e, new Hee());
  }
  function dCr(e, t, r) {
    var o = Math.min(this.t + e.t, t);
    ((r.s = 0), (r.t = o));
    while (o > 0) r.data[--o] = 0;
    var d;
    for (d = r.t - this.t; o < d; ++o)
      r.data[o + this.t] = this.am(0, e.data[o], r, o, 0, this.t);
    for (d = Math.min(e.t, t); o < d; ++o)
      this.am(0, e.data[o], r, o, 0, t - o);
    r.clamp();
  }
  function fCr(e, t, r) {
    --t;
    var o = (r.t = this.t + e.t - t);
    r.s = 0;
    while (--o >= 0) r.data[o] = 0;
    for (o = Math.max(t - this.t, 0); o < e.t; ++o)
      r.data[this.t + o - t] = this.am(
        t - o,
        e.data[o],
        r,
        0,
        0,
        this.t + o - t,
      );
    (r.clamp(), r.drShiftTo(1, r));
  }
  function j4(e) {
    ((this.r2 = qm()),
      (this.q3 = qm()),
      Vi.ONE.dlShiftTo(2 * e.t, this.r2),
      (this.mu = this.r2.divide(e)),
      (this.m = e));
  }
  function pCr(e) {
    if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
    else if (e.compareTo(this.m) < 0) return e;
    else {
      var t = qm();
      return (e.copyTo(t), this.reduce(t), t);
    }
  }
  function mCr(e) {
    return e;
  }
  function gCr(e) {
    if ((e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1))
      ((e.t = this.m.t + 1), e.clamp());
    (this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2));
    while (e.compareTo(this.r2) < 0) e.dAddOffset(1, this.m.t + 1);
    e.subTo(this.r2, e);
    while (e.compareTo(this.m) >= 0) e.subTo(this.m, e);
  }
  function hCr(e, t) {
    (e.squareTo(t), this.reduce(t));
  }
  function yCr(e, t, r) {
    (e.multiplyTo(t, r), this.reduce(r));
  }
  j4.prototype.convert = pCr;
  j4.prototype.revert = mCr;
  j4.prototype.reduce = gCr;
  j4.prototype.mulTo = yCr;
  j4.prototype.sqrTo = hCr;
  function _Cr(e, t) {
    var r = e.bitLength(),
      o,
      d = iB(1),
      p;
    if (r <= 0) return d;
    else if (r < 18) o = 1;
    else if (r < 48) o = 3;
    else if (r < 144) o = 4;
    else if (r < 768) o = 5;
    else o = 6;
    if (r < 8) p = new LW(t);
    else if (t.isEven()) p = new j4(t);
    else p = new $W(t);
    var _ = [],
      E = 3,
      C = o - 1,
      I = (1 << o) - 1;
    if (((_[1] = p.convert(this)), o > 1)) {
      var D = qm();
      p.sqrTo(_[1], D);
      while (E <= I) ((_[E] = qm()), p.mulTo(D, _[E - 2], _[E]), (E += 2));
    }
    var N = e.t - 1,
      F,
      U = !0,
      V = qm(),
      re;
    r = $ye(e.data[N]) - 1;
    while (N >= 0) {
      if (r >= C) F = (e.data[N] >> (r - C)) & I;
      else if (((F = (e.data[N] & ((1 << (r + 1)) - 1)) << (C - r)), N > 0))
        F |= e.data[N - 1] >> (this.DB + r - C);
      E = o;
      while ((F & 1) == 0) ((F >>= 1), --E);
      if ((r -= E) < 0) ((r += this.DB), --N);
      if (U) (_[F].copyTo(d), (U = !1));
      else {
        while (E > 1) (p.sqrTo(d, V), p.sqrTo(V, d), (E -= 2));
        if (E > 0) p.sqrTo(d, V);
        else ((re = d), (d = V), (V = re));
        p.mulTo(V, _[F], d);
      }
      while (N >= 0 && (e.data[N] & (1 << r)) == 0)
        if ((p.sqrTo(d, V), (re = d), (d = V), (V = re), --r < 0))
          ((r = this.DB - 1), --N);
    }
    return p.revert(d);
  }
  function bCr(e) {
    var t = this.s < 0 ? this.negate() : this.clone(),
      r = e.s < 0 ? e.negate() : e.clone();
    if (t.compareTo(r) < 0) {
      var o = t;
      ((t = r), (r = o));
    }
    var d = t.getLowestSetBit(),
      p = r.getLowestSetBit();
    if (p < 0) return t;
    if (d < p) p = d;
    if (p > 0) (t.rShiftTo(p, t), r.rShiftTo(p, r));
    while (t.signum() > 0) {
      if ((d = t.getLowestSetBit()) > 0) t.rShiftTo(d, t);
      if ((d = r.getLowestSetBit()) > 0) r.rShiftTo(d, r);
      if (t.compareTo(r) >= 0) (t.subTo(r, t), t.rShiftTo(1, t));
      else (r.subTo(t, r), r.rShiftTo(1, r));
    }
    if (p > 0) r.lShiftTo(p, r);
    return r;
  }
  function SCr(e) {
    if (e <= 0) return 0;
    var t = this.DV % e,
      r = this.s < 0 ? e - 1 : 0;
    if (this.t > 0)
      if (t == 0) r = this.data[0] % e;
      else for (var o = this.t - 1; o >= 0; --o) r = (t * r + this.data[o]) % e;
    return r;
  }
  function kCr(e) {
    if (this.signum() == 0) return Vi.ZERO;
    var t = e.isEven();
    if ((this.isEven() && t) || e.signum() == 0) return Vi.ZERO;
    var r = e.clone(),
      o = this.clone(),
      d = iB(1),
      p = iB(0),
      _ = iB(0),
      E = iB(1);
    while (r.signum() != 0) {
      while (r.isEven()) {
        if ((r.rShiftTo(1, r), t)) {
          if (!d.isEven() || !p.isEven()) (d.addTo(this, d), p.subTo(e, p));
          d.rShiftTo(1, d);
        } else if (!p.isEven()) p.subTo(e, p);
        p.rShiftTo(1, p);
      }
      while (o.isEven()) {
        if ((o.rShiftTo(1, o), t)) {
          if (!_.isEven() || !E.isEven()) (_.addTo(this, _), E.subTo(e, E));
          _.rShiftTo(1, _);
        } else if (!E.isEven()) E.subTo(e, E);
        E.rShiftTo(1, E);
      }
      if (r.compareTo(o) >= 0) {
        if ((r.subTo(o, r), t)) d.subTo(_, d);
        p.subTo(E, p);
      } else {
        if ((o.subTo(r, o), t)) _.subTo(d, _);
        E.subTo(p, E);
      }
    }
    if (o.compareTo(Vi.ONE) != 0) return Vi.ZERO;
    if (E.compareTo(e) >= 0) return E.subtract(e);
    if (E.signum() < 0) E.addTo(e, E);
    else return E;
    if (E.signum() < 0) return E.add(e);
    else return E;
  }
  var tP = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
      151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
      233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
      317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
      419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
      503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
      607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
      701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
      811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907,
      911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
    ],
    wCr = 67108864 / tP[tP.length - 1];
  function ECr(e) {
    var t,
      r = this.abs();
    if (r.t == 1 && r.data[0] <= tP[tP.length - 1]) {
      for (t = 0; t < tP.length; ++t) if (r.data[0] == tP[t]) return !0;
      return !1;
    }
    if (r.isEven()) return !1;
    t = 1;
    while (t < tP.length) {
      var o = tP[t],
        d = t + 1;
      while (d < tP.length && o < wCr) o *= tP[d++];
      o = r.modInt(o);
      while (t < d) if (o % tP[t++] == 0) return !1;
    }
    return r.millerRabin(e);
  }
  function TCr(e) {
    var t = this.subtract(Vi.ONE),
      r = t.getLowestSetBit();
    if (r <= 0) return !1;
    var o = t.shiftRight(r),
      d = vCr(),
      p;
    for (var _ = 0; _ < e; ++_) {
      do p = new Vi(this.bitLength(), d);
      while (p.compareTo(Vi.ONE) <= 0 || p.compareTo(t) >= 0);
      var E = p.modPow(o, this);
      if (E.compareTo(Vi.ONE) != 0 && E.compareTo(t) != 0) {
        var C = 1;
        while (C++ < r && E.compareTo(t) != 0)
          if (((E = E.modPowInt(2, this)), E.compareTo(Vi.ONE) == 0)) return !1;
        if (E.compareTo(t) != 0) return !1;
      }
    }
    return !0;
  }
  function vCr() {
    return {
      nextBytes: function (e) {
        for (var t = 0; t < e.length; ++t)
          e[t] = Math.floor(Math.random() * 256);
      },
    };
  }
  Vi.prototype.chunkSize = vvr;
  Vi.prototype.toRadix = xvr;
  Vi.prototype.fromRadix = Avr;
  Vi.prototype.fromNumber = Rvr;
  Vi.prototype.bitwiseTo = Dvr;
  Vi.prototype.changeBit = Kvr;
  Vi.prototype.addTo = Jvr;
  Vi.prototype.dMultiply = iCr;
  Vi.prototype.dAddOffset = aCr;
  Vi.prototype.multiplyLowerTo = dCr;
  Vi.prototype.multiplyUpperTo = fCr;
  Vi.prototype.modInt = SCr;
  Vi.prototype.millerRabin = TCr;
  Vi.prototype.clone = kvr;
  Vi.prototype.intValue = wvr;
  Vi.prototype.byteValue = Evr;
  Vi.prototype.shortValue = Tvr;
  Vi.prototype.signum = Cvr;
  Vi.prototype.toByteArray = Pvr;
  Vi.prototype.equals = Ivr;
  Vi.prototype.min = Mvr;
  Vi.prototype.max = Ovr;
  Vi.prototype.and = Lvr;
  Vi.prototype.or = Fvr;
  Vi.prototype.xor = $vr;
  Vi.prototype.andNot = Bvr;
  Vi.prototype.not = Uvr;
  Vi.prototype.shiftLeft = Hvr;
  Vi.prototype.shiftRight = jvr;
  Vi.prototype.getLowestSetBit = Gvr;
  Vi.prototype.bitCount = qvr;
  Vi.prototype.testBit = Vvr;
  Vi.prototype.setBit = Yvr;
  Vi.prototype.clearBit = Xvr;
  Vi.prototype.flipBit = Qvr;
  Vi.prototype.add = Zvr;
  Vi.prototype.subtract = eCr;
  Vi.prototype.multiply = tCr;
  Vi.prototype.divide = rCr;
  Vi.prototype.remainder = oCr;
  Vi.prototype.divideAndRemainder = sCr;
  Vi.prototype.modPow = _Cr;
  Vi.prototype.modInverse = kCr;
  Vi.prototype.pow = uCr;
  Vi.prototype.gcd = bCr;
  Vi.prototype.isProbablePrime = ECr;
  Vi.prototype.square = nCr;
});
var W4 = commonJS(function (rIs, K0t) {
  var aM = yp();
  nM();
  Ig();
  var q0t = (K0t.exports = aM.sha1 = aM.sha1 || {});
  aM.md.sha1 = aM.md.algorithms.sha1 = q0t;
  q0t.create = function () {
    if (!V0t) CCr();
    var e = null,
      t = aM.util.createBuffer(),
      r = Array(80),
      o = {
        algorithm: "sha1",
        blockLength: 64,
        digestLength: 20,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8,
      };
    return (
      (o.start = function () {
        ((o.messageLength = 0), (o.fullMessageLength = o.messageLength64 = []));
        var d = o.messageLengthSize / 4;
        for (var p = 0; p < d; ++p) o.fullMessageLength.push(0);
        return (
          (t = aM.util.createBuffer()),
          (e = {
            h0: 1732584193,
            h1: 4023233417,
            h2: 2562383102,
            h3: 271733878,
            h4: 3285377520,
          }),
          o
        );
      }),
      o.start(),
      (o.update = function (d, p) {
        if (p === "utf8") d = aM.util.encodeUtf8(d);
        var _ = d.length;
        ((o.messageLength += _), (_ = [(_ / 4294967296) >>> 0, _ >>> 0]));
        for (var E = o.fullMessageLength.length - 1; E >= 0; --E)
          ((o.fullMessageLength[E] += _[1]),
            (_[1] = _[0] + ((o.fullMessageLength[E] / 4294967296) >>> 0)),
            (o.fullMessageLength[E] = o.fullMessageLength[E] >>> 0),
            (_[0] = (_[1] / 4294967296) >>> 0));
        if ((t.putBytes(d), z0t(e, r, t), t.read > 2048 || t.length() === 0))
          t.compact();
        return o;
      }),
      (o.digest = function () {
        var d = aM.util.createBuffer();
        d.putBytes(t.bytes());
        var p =
            o.fullMessageLength[o.fullMessageLength.length - 1] +
            o.messageLengthSize,
          _ = p & (o.blockLength - 1);
        d.putBytes(pGe.substr(0, o.blockLength - _));
        var E,
          C,
          I = o.fullMessageLength[0] * 8;
        for (var D = 0; D < o.fullMessageLength.length - 1; ++D)
          ((E = o.fullMessageLength[D + 1] * 8),
            (C = (E / 4294967296) >>> 0),
            (I += C),
            d.putInt32(I >>> 0),
            (I = E >>> 0));
        d.putInt32(I);
        var N = { h0: e.h0, h1: e.h1, h2: e.h2, h3: e.h3, h4: e.h4 };
        z0t(N, r, d);
        var F = aM.util.createBuffer();
        return (
          F.putInt32(N.h0),
          F.putInt32(N.h1),
          F.putInt32(N.h2),
          F.putInt32(N.h3),
          F.putInt32(N.h4),
          F
        );
      }),
      o
    );
  };
  var pGe = null,
    V0t = !1;
  function CCr() {
    ((pGe = String.fromCharCode(128)),
      (pGe += aM.util.fillString(String.fromCharCode(0), 64)),
      (V0t = !0));
  }
  function z0t(e, t, r) {
    var o,
      d,
      p,
      _,
      E,
      C,
      I,
      D,
      N = r.length();
    while (N >= 64) {
      ((d = e.h0), (p = e.h1), (_ = e.h2), (E = e.h3), (C = e.h4));
      for (D = 0; D < 16; ++D)
        ((o = r.getInt32()),
          (t[D] = o),
          (I = E ^ (p & (_ ^ E))),
          (o = ((d << 5) | (d >>> 27)) + I + C + 1518500249 + o),
          (C = E),
          (E = _),
          (_ = ((p << 30) | (p >>> 2)) >>> 0),
          (p = d),
          (d = o));
      for (; D < 20; ++D)
        ((o = t[D - 3] ^ t[D - 8] ^ t[D - 14] ^ t[D - 16]),
          (o = (o << 1) | (o >>> 31)),
          (t[D] = o),
          (I = E ^ (p & (_ ^ E))),
          (o = ((d << 5) | (d >>> 27)) + I + C + 1518500249 + o),
          (C = E),
          (E = _),
          (_ = ((p << 30) | (p >>> 2)) >>> 0),
          (p = d),
          (d = o));
      for (; D < 32; ++D)
        ((o = t[D - 3] ^ t[D - 8] ^ t[D - 14] ^ t[D - 16]),
          (o = (o << 1) | (o >>> 31)),
          (t[D] = o),
          (I = p ^ _ ^ E),
          (o = ((d << 5) | (d >>> 27)) + I + C + 1859775393 + o),
          (C = E),
          (E = _),
          (_ = ((p << 30) | (p >>> 2)) >>> 0),
          (p = d),
          (d = o));
      for (; D < 40; ++D)
        ((o = t[D - 6] ^ t[D - 16] ^ t[D - 28] ^ t[D - 32]),
          (o = (o << 2) | (o >>> 30)),
          (t[D] = o),
          (I = p ^ _ ^ E),
          (o = ((d << 5) | (d >>> 27)) + I + C + 1859775393 + o),
          (C = E),
          (E = _),
          (_ = ((p << 30) | (p >>> 2)) >>> 0),
          (p = d),
          (d = o));
      for (; D < 60; ++D)
        ((o = t[D - 6] ^ t[D - 16] ^ t[D - 28] ^ t[D - 32]),
          (o = (o << 2) | (o >>> 30)),
          (t[D] = o),
          (I = (p & _) | (E & (p ^ _))),
          (o = ((d << 5) | (d >>> 27)) + I + C + 2400959708 + o),
          (C = E),
          (E = _),
          (_ = ((p << 30) | (p >>> 2)) >>> 0),
          (p = d),
          (d = o));
      for (; D < 80; ++D)
        ((o = t[D - 6] ^ t[D - 16] ^ t[D - 28] ^ t[D - 32]),
          (o = (o << 2) | (o >>> 30)),
          (t[D] = o),
          (I = p ^ _ ^ E),
          (o = ((d << 5) | (d >>> 27)) + I + C + 3395469782 + o),
          (C = E),
          (E = _),
          (_ = ((p << 30) | (p >>> 2)) >>> 0),
          (p = d),
          (d = o));
      ((e.h0 = (e.h0 + d) | 0),
        (e.h1 = (e.h1 + p) | 0),
        (e.h2 = (e.h2 + _) | 0),
        (e.h3 = (e.h3 + E) | 0),
        (e.h4 = (e.h4 + C) | 0),
        (N -= 64));
    }
  }
});
var mGe = commonJS(function (oIs, X0t) {
  var lM = yp();
  Ig();
  Zx();
  W4();
  var Y0t = (X0t.exports = lM.pkcs1 = lM.pkcs1 || {});
  Y0t.encode_rsa_oaep = function (e, t, r) {
    var o, d, p, _;
    if (typeof r === "string")
      ((o = r), (d = arguments[3] || void 0), (p = arguments[4] || void 0));
    else if (r) {
      if (
        ((o = r.label || void 0),
        (d = r.seed || void 0),
        (p = r.md || void 0),
        r.mgf1 && r.mgf1.md)
      )
        _ = r.mgf1.md;
    }
    if (!p) p = lM.md.sha1.create();
    else p.start();
    if (!_) _ = p;
    var E = Math.ceil(e.n.bitLength() / 8),
      C = E - 2 * p.digestLength - 2;
    if (t.length > C) {
      var I = Error("RSAES-OAEP input message length is too long.");
      throw ((I.length = t.length), (I.maxLength = C), I);
    }
    if (!o) o = "";
    p.update(o, "raw");
    var D = p.digest(),
      N = "",
      F = C - t.length;
    for (var U = 0; U < F; U++) N += "\x00";
    var V = D.getBytes() + N + "\x01" + t;
    if (!d) d = lM.random.getBytes(p.digestLength);
    else if (d.length !== p.digestLength) {
      var I = Error(
        "Invalid RSAES-OAEP seed. The seed length must match the digest length.",
      );
      throw ((I.seedLength = d.length), (I.digestLength = p.digestLength), I);
    }
    var re = Bye(d, E - p.digestLength - 1, _),
      ue = lM.util.xorBytes(V, re, V.length),
      de = Bye(ue, p.digestLength, _),
      _e = lM.util.xorBytes(d, de, d.length);
    return "\x00" + _e + ue;
  };
  Y0t.decode_rsa_oaep = function (e, t, r) {
    var o, d, p;
    if (typeof r === "string") ((o = r), (d = arguments[3] || void 0));
    else if (r) {
      if (((o = r.label || void 0), (d = r.md || void 0), r.mgf1 && r.mgf1.md))
        p = r.mgf1.md;
    }
    var _ = Math.ceil(e.n.bitLength() / 8);
    if (t.length !== _) {
      var ue = Error("RSAES-OAEP encoded message length is invalid.");
      throw ((ue.length = t.length), (ue.expectedLength = _), ue);
    }
    if (d === void 0) d = lM.md.sha1.create();
    else d.start();
    if (!p) p = d;
    if (_ < 2 * d.digestLength + 2)
      throw Error("RSAES-OAEP key is too short for the hash function.");
    if (!o) o = "";
    d.update(o, "raw");
    var E = d.digest().getBytes(),
      C = t.charAt(0),
      I = t.substring(1, d.digestLength + 1),
      D = t.substring(1 + d.digestLength),
      N = Bye(D, d.digestLength, p),
      F = lM.util.xorBytes(I, N, I.length),
      U = Bye(F, _ - d.digestLength - 1, p),
      V = lM.util.xorBytes(D, U, D.length),
      re = V.substring(0, d.digestLength),
      ue = C !== "\x00";
    for (var de = 0; de < d.digestLength; ++de)
      ue |= E.charAt(de) !== re.charAt(de);
    var _e = 1,
      Se = d.digestLength;
    for (var ve = d.digestLength; ve < V.length; ve++) {
      var Me = V.charCodeAt(ve),
        xe = (Me & 1) ^ 1,
        Oe = _e ? 65534 : 0;
      ((ue |= Me & Oe), (_e = _e & xe), (Se += _e));
    }
    if (ue || V.charCodeAt(Se) !== 1)
      throw Error("Invalid RSAES-OAEP padding.");
    return V.substring(Se + 1);
  };
  function Bye(e, t, r) {
    if (!r) r = lM.md.sha1.create();
    var o = "",
      d = Math.ceil(t / r.digestLength);
    for (var p = 0; p < d; ++p) {
      var _ = String.fromCharCode(
        (p >> 24) & 255,
        (p >> 16) & 255,
        (p >> 8) & 255,
        p & 255,
      );
      (r.start(), r.update(e + _), (o += r.digest().getBytes()));
    }
    return o.substring(0, t);
  }
});
var hGe = commonJS(function (sIs, gGe) {
  var aB = yp();
  Ig();
  jee();
  Zx();
  (function () {
    if (aB.prime) {
      gGe.exports = aB.prime;
      return;
    }
    var e = (gGe.exports = aB.prime = aB.prime || {}),
      t = aB.jsbn.BigInteger,
      r = [6, 4, 2, 4, 2, 4, 6, 2],
      o = new t(null);
    o.fromInt(30);
    var d = function (N, F) {
      return N | F;
    };
    e.generateProbablePrime = function (N, F, U) {
      if (typeof F === "function") ((U = F), (F = {}));
      F = F || {};
      var V = F.algorithm || "PRIMEINC";
      if (typeof V === "string") V = { name: V };
      V.options = V.options || {};
      var re = F.prng || aB.random,
        ue = {
          nextBytes: function (de) {
            var _e = re.getBytesSync(de.length);
            for (var Se = 0; Se < de.length; ++Se) de[Se] = _e.charCodeAt(Se);
          },
        };
      if (V.name === "PRIMEINC") return p(N, ue, V.options, U);
      throw Error("Invalid prime generation algorithm: " + V.name);
    };
    function p(N, F, U, V) {
      if ("workers" in U) return C(N, F, U, V);
      return _(N, F, U, V);
    }
    function _(N, F, U, V) {
      var re = I(N, F),
        ue = 0,
        de = D(re.bitLength());
      if ("millerRabinTests" in U) de = U.millerRabinTests;
      var _e = 10;
      if ("maxBlockTime" in U) _e = U.maxBlockTime;
      E(re, N, F, ue, de, _e, V);
    }
    function E(N, F, U, V, re, ue, de) {
      var _e = +new Date();
      do {
        if (N.bitLength() > F) N = I(F, U);
        if (N.isProbablePrime(re)) return de(null, N);
        N.dAddOffset(r[V++ % 8], 0);
      } while (ue < 0 || +new Date() - _e < ue);
      aB.util.setImmediate(function () {
        E(N, F, U, V, re, ue, de);
      });
    }
    function C(N, F, U, V) {
      if (typeof Worker > "u") return _(N, F, U, V);
      var re = I(N, F),
        ue = U.workers,
        de = U.workLoad || 100,
        _e = (de * 30) / 8,
        Se = U.workerScript || "forge/prime.worker.js";
      if (ue === -1)
        return aB.util.estimateCores(function (Me, xe) {
          if (Me) xe = 2;
          ((ue = xe - 1), ve());
        });
      ve();
      function ve() {
        ue = Math.max(1, ue);
        var Me = [];
        for (var xe = 0; xe < ue; ++xe) Me[xe] = new Worker(Se);
        var Oe = ue;
        for (var xe = 0; xe < ue; ++xe) Me[xe].addEventListener("message", De);
        var Ne = !1;
        function De(He) {
          if (Ne) return;
          --Oe;
          var je = He.data;
          if (je.found) {
            for (var Ke = 0; Ke < Me.length; ++Ke) Me[Ke].terminate();
            return ((Ne = !0), V(null, new t(je.prime, 16)));
          }
          if (re.bitLength() > N) re = I(N, F);
          var ct = re.toString(16);
          (He.target.postMessage({ hex: ct, workLoad: de }),
            re.dAddOffset(_e, 0));
        }
      }
    }
    function I(N, F) {
      var U = new t(N, F),
        V = N - 1;
      if (!U.testBit(V)) U.bitwiseTo(t.ONE.shiftLeft(V), d, U);
      return (U.dAddOffset(31 - U.mod(o).byteValue(), 0), U);
    }
    function D(N) {
      if (N <= 100) return 27;
      if (N <= 150) return 18;
      if (N <= 200) return 15;
      if (N <= 250) return 12;
      if (N <= 300) return 9;
      if (N <= 350) return 8;
      if (N <= 400) return 7;
      if (N <= 500) return 6;
      if (N <= 600) return 5;
      if (N <= 800) return 4;
      if (N <= 1250) return 3;
      return 2;
    }
  })();
});
var Wee = commonJS(function (iIs, rOt) {
  var Nd = yp();
  eP();
  jee();
  sB();
  mGe();
  hGe();
  Zx();
  Ig();
  if (typeof Bm > "u") Bm = Nd.jsbn.BigInteger;
  var Bm,
    yGe = Nd.util.isNodejs ? importMetaRequire("crypto") : null,
    { asn1: ks, util: aA } = Nd;
  Nd.pki = Nd.pki || {};
  rOt.exports = Nd.pki.rsa = Nd.rsa = Nd.rsa || {};
  var Vf = Nd.pki,
    xCr = [6, 4, 2, 4, 2, 4, 6, 2],
    ACr = {
      name: "PrivateKeyInfo",
      tagClass: ks.Class.UNIVERSAL,
      type: ks.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "PrivateKeyInfo.version",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyVersion",
        },
        {
          name: "PrivateKeyInfo.privateKeyAlgorithm",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "AlgorithmIdentifier.algorithm",
              tagClass: ks.Class.UNIVERSAL,
              type: ks.Type.OID,
              constructed: !1,
              capture: "privateKeyOid",
            },
          ],
        },
        {
          name: "PrivateKeyInfo",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.OCTETSTRING,
          constructed: !1,
          capture: "privateKey",
        },
      ],
    },
    RCr = {
      name: "RSAPrivateKey",
      tagClass: ks.Class.UNIVERSAL,
      type: ks.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "RSAPrivateKey.version",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyVersion",
        },
        {
          name: "RSAPrivateKey.modulus",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyModulus",
        },
        {
          name: "RSAPrivateKey.publicExponent",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyPublicExponent",
        },
        {
          name: "RSAPrivateKey.privateExponent",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyPrivateExponent",
        },
        {
          name: "RSAPrivateKey.prime1",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyPrime1",
        },
        {
          name: "RSAPrivateKey.prime2",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyPrime2",
        },
        {
          name: "RSAPrivateKey.exponent1",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyExponent1",
        },
        {
          name: "RSAPrivateKey.exponent2",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyExponent2",
        },
        {
          name: "RSAPrivateKey.coefficient",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyCoefficient",
        },
      ],
    },
    PCr = {
      name: "RSAPublicKey",
      tagClass: ks.Class.UNIVERSAL,
      type: ks.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "RSAPublicKey.modulus",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "publicKeyModulus",
        },
        {
          name: "RSAPublicKey.exponent",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.INTEGER,
          constructed: !1,
          capture: "publicKeyExponent",
        },
      ],
    },
    ICr = (Nd.pki.rsa.publicKeyValidator = {
      name: "SubjectPublicKeyInfo",
      tagClass: ks.Class.UNIVERSAL,
      type: ks.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "subjectPublicKeyInfo",
      value: [
        {
          name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "AlgorithmIdentifier.algorithm",
              tagClass: ks.Class.UNIVERSAL,
              type: ks.Type.OID,
              constructed: !1,
              capture: "publicKeyOid",
            },
          ],
        },
        {
          name: "SubjectPublicKeyInfo.subjectPublicKey",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.BITSTRING,
          constructed: !1,
          value: [
            {
              name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
              tagClass: ks.Class.UNIVERSAL,
              type: ks.Type.SEQUENCE,
              constructed: !0,
              optional: !0,
              captureAsn1: "rsaPublicKey",
            },
          ],
        },
      ],
    }),
    MCr = {
      name: "DigestInfo",
      tagClass: ks.Class.UNIVERSAL,
      type: ks.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "DigestInfo.DigestAlgorithm",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
              tagClass: ks.Class.UNIVERSAL,
              type: ks.Type.OID,
              constructed: !1,
              capture: "algorithmIdentifier",
            },
            {
              name: "DigestInfo.DigestAlgorithm.parameters",
              tagClass: ks.Class.UNIVERSAL,
              type: ks.Type.NULL,
              capture: "parameters",
              optional: !0,
              constructed: !1,
            },
          ],
        },
        {
          name: "DigestInfo.digest",
          tagClass: ks.Class.UNIVERSAL,
          type: ks.Type.OCTETSTRING,
          constructed: !1,
          capture: "digest",
        },
      ],
    },
    OCr = function (e) {
      var t;
      if (e.algorithm in Vf.oids) t = Vf.oids[e.algorithm];
      else {
        var r = Error("Unknown message digest algorithm.");
        throw ((r.algorithm = e.algorithm), r);
      }
      var o = ks.oidToDer(t).getBytes(),
        d = ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, []),
        p = ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, []);
      (p.value.push(ks.create(ks.Class.UNIVERSAL, ks.Type.OID, !1, o)),
        p.value.push(ks.create(ks.Class.UNIVERSAL, ks.Type.NULL, !1, "")));
      var _ = ks.create(
        ks.Class.UNIVERSAL,
        ks.Type.OCTETSTRING,
        !1,
        e.digest().getBytes(),
      );
      return (d.value.push(p), d.value.push(_), ks.toDer(d).getBytes());
    },
    tOt = function (e, t, r) {
      if (r) return e.modPow(t.e, t.n);
      if (!t.p || !t.q) return e.modPow(t.d, t.n);
      if (!t.dP) t.dP = t.d.mod(t.p.subtract(Bm.ONE));
      if (!t.dQ) t.dQ = t.d.mod(t.q.subtract(Bm.ONE));
      if (!t.qInv) t.qInv = t.q.modInverse(t.p);
      var o;
      do
        o = new Bm(
          Nd.util.bytesToHex(Nd.random.getBytes(t.n.bitLength() / 8)),
          16,
        );
      while (o.compareTo(t.n) >= 0 || !o.gcd(t.n).equals(Bm.ONE));
      e = e.multiply(o.modPow(t.e, t.n)).mod(t.n);
      var d = e.mod(t.p).modPow(t.dP, t.p),
        p = e.mod(t.q).modPow(t.dQ, t.q);
      while (d.compareTo(p) < 0) d = d.add(t.p);
      var _ = d.subtract(p).multiply(t.qInv).mod(t.p).multiply(t.q).add(p);
      return ((_ = _.multiply(o.modInverse(t.n)).mod(t.n)), _);
    };
  Vf.rsa.encrypt = function (e, t, r) {
    var o = r,
      d,
      p = Math.ceil(t.n.bitLength() / 8);
    if (r !== !1 && r !== !0) ((o = r === 2), (d = nOt(e, t, r)));
    else ((d = Nd.util.createBuffer()), d.putBytes(e));
    var _ = new Bm(d.toHex(), 16),
      E = tOt(_, t, o),
      C = E.toString(16),
      I = Nd.util.createBuffer(),
      D = p - Math.ceil(C.length / 2);
    while (D > 0) (I.putByte(0), --D);
    return (I.putBytes(Nd.util.hexToBytes(C)), I.getBytes());
  };
  Vf.rsa.decrypt = function (e, t, r, o) {
    var d = Math.ceil(t.n.bitLength() / 8);
    if (e.length !== d) {
      var p = Error("Encrypted message length is invalid.");
      throw ((p.length = e.length), (p.expected = d), p);
    }
    var _ = new Bm(Nd.util.createBuffer(e).toHex(), 16);
    if (_.compareTo(t.n) >= 0) throw Error("Encrypted message is invalid.");
    var E = tOt(_, t, r),
      C = E.toString(16),
      I = Nd.util.createBuffer(),
      D = d - Math.ceil(C.length / 2);
    while (D > 0) (I.putByte(0), --D);
    if ((I.putBytes(Nd.util.hexToBytes(C)), o !== !1))
      return Uye(I.getBytes(), t, r);
    return I.getBytes();
  };
  Vf.rsa.createKeyPairGenerationState = function (e, t, r) {
    if (typeof e === "string") e = parseInt(e, 10);
    ((e = e || 2048), (r = r || {}));
    var o = r.prng || Nd.random,
      d = {
        nextBytes: function (E) {
          var C = o.getBytesSync(E.length);
          for (var I = 0; I < E.length; ++I) E[I] = C.charCodeAt(I);
        },
      },
      p = r.algorithm || "PRIMEINC",
      _;
    if (p === "PRIMEINC")
      ((_ = {
        algorithm: p,
        state: 0,
        bits: e,
        rng: d,
        eInt: t || 65537,
        e: new Bm(null),
        p: null,
        q: null,
        qBits: e >> 1,
        pBits: e - (e >> 1),
        pqState: 0,
        num: null,
        keys: null,
      }),
        _.e.fromInt(_.eInt));
    else throw Error("Invalid key generation algorithm: " + p);
    return _;
  };
  Vf.rsa.stepKeyPairGenerationState = function (e, t) {
    if (!("algorithm" in e)) e.algorithm = "PRIMEINC";
    var r = new Bm(null);
    r.fromInt(30);
    var o = 0,
      d = function (N, F) {
        return N | F;
      },
      p = +new Date(),
      _,
      E = 0;
    while (e.keys === null && (t <= 0 || E < t)) {
      if (e.state === 0) {
        var C = e.p === null ? e.pBits : e.qBits,
          I = C - 1;
        if (e.pqState === 0) {
          if (((e.num = new Bm(C, e.rng)), !e.num.testBit(I)))
            e.num.bitwiseTo(Bm.ONE.shiftLeft(I), d, e.num);
          (e.num.dAddOffset(31 - e.num.mod(r).byteValue(), 0),
            (o = 0),
            ++e.pqState);
        } else if (e.pqState === 1)
          if (e.num.bitLength() > C) e.pqState = 0;
          else if (e.num.isProbablePrime(NCr(e.num.bitLength()))) ++e.pqState;
          else e.num.dAddOffset(xCr[o++ % 8], 0);
        else if (e.pqState === 2)
          e.pqState =
            e.num.subtract(Bm.ONE).gcd(e.e).compareTo(Bm.ONE) === 0 ? 3 : 0;
        else if (e.pqState === 3) {
          if (((e.pqState = 0), e.p === null)) e.p = e.num;
          else e.q = e.num;
          if (e.p !== null && e.q !== null) ++e.state;
          e.num = null;
        }
      } else if (e.state === 1) {
        if (e.p.compareTo(e.q) < 0) ((e.num = e.p), (e.p = e.q), (e.q = e.num));
        ++e.state;
      } else if (e.state === 2)
        ((e.p1 = e.p.subtract(Bm.ONE)),
          (e.q1 = e.q.subtract(Bm.ONE)),
          (e.phi = e.p1.multiply(e.q1)),
          ++e.state);
      else if (e.state === 3)
        if (e.phi.gcd(e.e).compareTo(Bm.ONE) === 0) ++e.state;
        else ((e.p = null), (e.q = null), (e.state = 0));
      else if (e.state === 4)
        if (((e.n = e.p.multiply(e.q)), e.n.bitLength() === e.bits)) ++e.state;
        else ((e.q = null), (e.state = 0));
      else if (e.state === 5) {
        var D = e.e.modInverse(e.phi);
        e.keys = {
          privateKey: Vf.rsa.setPrivateKey(
            e.n,
            e.e,
            D,
            e.p,
            e.q,
            D.mod(e.p1),
            D.mod(e.q1),
            e.q.modInverse(e.p),
          ),
          publicKey: Vf.rsa.setPublicKey(e.n, e.e),
        };
      }
      ((_ = +new Date()), (E += _ - p), (p = _));
    }
    return e.keys !== null;
  };
  Vf.rsa.generateKeyPair = function (e, t, r, o) {
    if (arguments.length === 1) {
      if (typeof e === "object") ((r = e), (e = void 0));
      else if (typeof e === "function") ((o = e), (e = void 0));
    } else if (arguments.length === 2)
      if (typeof e === "number") {
        if (typeof t === "function") ((o = t), (t = void 0));
        else if (typeof t !== "number") ((r = t), (t = void 0));
      } else ((r = e), (o = t), (e = void 0), (t = void 0));
    else if (arguments.length === 3)
      if (typeof t === "number") {
        if (typeof r === "function") ((o = r), (r = void 0));
      } else ((o = r), (r = t), (t = void 0));
    if (((r = r || {}), e === void 0)) e = r.bits || 2048;
    if (t === void 0) t = r.e || 65537;
    if (
      !Nd.options.usePureJavaScript &&
      !r.prng &&
      e >= 256 &&
      e <= 16384 &&
      (t === 65537 || t === 3)
    ) {
      if (o) {
        if (Q0t("generateKeyPair"))
          return yGe.generateKeyPair(
            "rsa",
            {
              modulusLength: e,
              publicExponent: t,
              publicKeyEncoding: { type: "spki", format: "pem" },
              privateKeyEncoding: { type: "pkcs8", format: "pem" },
            },
            function (E, C, I) {
              if (E) return o(E);
              o(null, {
                privateKey: Vf.privateKeyFromPem(I),
                publicKey: Vf.publicKeyFromPem(C),
              });
            },
          );
        if (J0t("generateKey") && J0t("exportKey"))
          return aA.globalScope.crypto.subtle
            .generateKey(
              {
                name: "RSASSA-PKCS1-v1_5",
                modulusLength: e,
                publicExponent: eOt(t),
                hash: { name: "SHA-256" },
              },
              !0,
              ["sign", "verify"],
            )
            .then(function (E) {
              return aA.globalScope.crypto.subtle.exportKey(
                "pkcs8",
                E.privateKey,
              );
            })
            .then(void 0, function (E) {
              o(E);
            })
            .then(function (E) {
              if (E) {
                var C = Vf.privateKeyFromAsn1(
                  ks.fromDer(Nd.util.createBuffer(E)),
                );
                o(null, {
                  privateKey: C,
                  publicKey: Vf.setRsaPublicKey(C.n, C.e),
                });
              }
            });
        if (Z0t("generateKey") && Z0t("exportKey")) {
          var d = aA.globalScope.msCrypto.subtle.generateKey(
            {
              name: "RSASSA-PKCS1-v1_5",
              modulusLength: e,
              publicExponent: eOt(t),
              hash: { name: "SHA-256" },
            },
            !0,
            ["sign", "verify"],
          );
          ((d.oncomplete = function (E) {
            var C = E.target.result,
              I = aA.globalScope.msCrypto.subtle.exportKey(
                "pkcs8",
                C.privateKey,
              );
            ((I.oncomplete = function (D) {
              var N = D.target.result,
                F = Vf.privateKeyFromAsn1(ks.fromDer(Nd.util.createBuffer(N)));
              o(null, {
                privateKey: F,
                publicKey: Vf.setRsaPublicKey(F.n, F.e),
              });
            }),
              (I.onerror = function (D) {
                o(D);
              }));
          }),
            (d.onerror = function (E) {
              o(E);
            }));
          return;
        }
      } else if (Q0t("generateKeyPairSync")) {
        var p = yGe.generateKeyPairSync("rsa", {
          modulusLength: e,
          publicExponent: t,
          publicKeyEncoding: { type: "spki", format: "pem" },
          privateKeyEncoding: { type: "pkcs8", format: "pem" },
        });
        return {
          privateKey: Vf.privateKeyFromPem(p.privateKey),
          publicKey: Vf.publicKeyFromPem(p.publicKey),
        };
      }
    }
    var _ = Vf.rsa.createKeyPairGenerationState(e, t, r);
    if (!o) return (Vf.rsa.stepKeyPairGenerationState(_, 0), _.keys);
    DCr(_, r, o);
  };
  Vf.setRsaPublicKey = Vf.rsa.setPublicKey = function (e, t) {
    var r = { n: e, e: t };
    return (
      (r.encrypt = function (o, d, p) {
        if (typeof d === "string") d = d.toUpperCase();
        else if (d === void 0) d = "RSAES-PKCS1-V1_5";
        if (d === "RSAES-PKCS1-V1_5")
          d = {
            encode: function (E, C, I) {
              return nOt(E, C, 2).getBytes();
            },
          };
        else if (d === "RSA-OAEP" || d === "RSAES-OAEP")
          d = {
            encode: function (E, C) {
              return Nd.pkcs1.encode_rsa_oaep(C, E, p);
            },
          };
        else if (["RAW", "NONE", "NULL", null].indexOf(d) !== -1)
          d = {
            encode: function (E) {
              return E;
            },
          };
        else if (typeof d === "string")
          throw Error('Unsupported encryption scheme: "' + d + '".');
        var _ = d.encode(o, r, !0);
        return Vf.rsa.encrypt(_, r, !0);
      }),
      (r.verify = function (o, d, p, _) {
        if (typeof p === "string") p = p.toUpperCase();
        else if (p === void 0) p = "RSASSA-PKCS1-V1_5";
        if (_ === void 0)
          _ = { _parseAllDigestBytes: !0, _skipPaddingChecks: !1 };
        if (!("_parseAllDigestBytes" in _)) _._parseAllDigestBytes = !0;
        if (!("_skipPaddingChecks" in _)) _._skipPaddingChecks = !1;
        if (p === "RSASSA-PKCS1-V1_5")
          p = {
            verify: function (C, I) {
              I = Uye(I, r, !0, void 0, _);
              var D = ks.fromDer(I, { parseAllBytes: _._parseAllDigestBytes }),
                N = {},
                F = [];
              if (!ks.validate(D, MCr, N, F) || D.value.length !== 2) {
                var U = Error(
                  "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.",
                );
                throw ((U.errors = F), U);
              }
              var V = ks.derToOid(N.algorithmIdentifier);
              if (!(
                V === Nd.oids.md2 ||
                V === Nd.oids.md5 ||
                V === Nd.oids.sha1 ||
                V === Nd.oids.sha224 ||
                V === Nd.oids.sha256 ||
                V === Nd.oids.sha384 ||
                V === Nd.oids.sha512 ||
                V === Nd.oids["sha512-224"] ||
                V === Nd.oids["sha512-256"]
              )) {
                var U = Error(
                  "Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.",
                );
                throw ((U.oid = V), U);
              }
              if (V === Nd.oids.md2 || V === Nd.oids.md5) {
                if (!("parameters" in N))
                  throw Error(
                    "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifier NULL parameters.",
                  );
              }
              return C === N.digest;
            },
          };
        else if (p === "NONE" || p === "NULL" || p === null)
          p = {
            verify: function (C, I) {
              return ((I = Uye(I, r, !0, void 0, _)), C === I);
            },
          };
        var E = Vf.rsa.decrypt(d, r, !0, !1);
        return p.verify(o, E, r.n.bitLength());
      }),
      r
    );
  };
  Vf.setRsaPrivateKey = Vf.rsa.setPrivateKey = function (
    e,
    t,
    r,
    o,
    d,
    p,
    _,
    E,
  ) {
    var C = { n: e, e: t, d: r, p: o, q: d, dP: p, dQ: _, qInv: E };
    return (
      (C.decrypt = function (I, D, N) {
        if (typeof D === "string") D = D.toUpperCase();
        else if (D === void 0) D = "RSAES-PKCS1-V1_5";
        var F = Vf.rsa.decrypt(I, C, !1, !1);
        if (D === "RSAES-PKCS1-V1_5") D = { decode: Uye };
        else if (D === "RSA-OAEP" || D === "RSAES-OAEP")
          D = {
            decode: function (U, V) {
              return Nd.pkcs1.decode_rsa_oaep(V, U, N);
            },
          };
        else if (["RAW", "NONE", "NULL", null].indexOf(D) !== -1)
          D = {
            decode: function (U) {
              return U;
            },
          };
        else throw Error('Unsupported encryption scheme: "' + D + '".');
        return D.decode(F, C, !1);
      }),
      (C.sign = function (I, D) {
        var N = !1;
        if (typeof D === "string") D = D.toUpperCase();
        if (D === void 0 || D === "RSASSA-PKCS1-V1_5")
          ((D = { encode: OCr }), (N = 1));
        else if (D === "NONE" || D === "NULL" || D === null)
          ((D = {
            encode: function () {
              return I;
            },
          }),
            (N = 1));
        var F = D.encode(I, C.n.bitLength());
        return Vf.rsa.encrypt(F, C, N);
      }),
      C
    );
  };
  Vf.wrapRsaPrivateKey = function (e) {
    return ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, [
      ks.create(
        ks.Class.UNIVERSAL,
        ks.Type.INTEGER,
        !1,
        ks.integerToDer(0).getBytes(),
      ),
      ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, [
        ks.create(
          ks.Class.UNIVERSAL,
          ks.Type.OID,
          !1,
          ks.oidToDer(Vf.oids.rsaEncryption).getBytes(),
        ),
        ks.create(ks.Class.UNIVERSAL, ks.Type.NULL, !1, ""),
      ]),
      ks.create(
        ks.Class.UNIVERSAL,
        ks.Type.OCTETSTRING,
        !1,
        ks.toDer(e).getBytes(),
      ),
    ]);
  };
  Vf.privateKeyFromAsn1 = function (e) {
    var t = {},
      r = [];
    if (ks.validate(e, ACr, t, r))
      e = ks.fromDer(Nd.util.createBuffer(t.privateKey));
    if (((t = {}), (r = []), !ks.validate(e, RCr, t, r))) {
      var o = Error(
        "Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.",
      );
      throw ((o.errors = r), o);
    }
    var d, p, _, E, C, I, D, N;
    return (
      (d = Nd.util.createBuffer(t.privateKeyModulus).toHex()),
      (p = Nd.util.createBuffer(t.privateKeyPublicExponent).toHex()),
      (_ = Nd.util.createBuffer(t.privateKeyPrivateExponent).toHex()),
      (E = Nd.util.createBuffer(t.privateKeyPrime1).toHex()),
      (C = Nd.util.createBuffer(t.privateKeyPrime2).toHex()),
      (I = Nd.util.createBuffer(t.privateKeyExponent1).toHex()),
      (D = Nd.util.createBuffer(t.privateKeyExponent2).toHex()),
      (N = Nd.util.createBuffer(t.privateKeyCoefficient).toHex()),
      Vf.setRsaPrivateKey(
        new Bm(d, 16),
        new Bm(p, 16),
        new Bm(_, 16),
        new Bm(E, 16),
        new Bm(C, 16),
        new Bm(I, 16),
        new Bm(D, 16),
        new Bm(N, 16),
      )
    );
  };
  Vf.privateKeyToAsn1 = Vf.privateKeyToRSAPrivateKey = function (e) {
    return ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, [
      ks.create(
        ks.Class.UNIVERSAL,
        ks.Type.INTEGER,
        !1,
        ks.integerToDer(0).getBytes(),
      ),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.n)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.e)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.d)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.p)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.q)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.dP)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.dQ)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.qInv)),
    ]);
  };
  Vf.publicKeyFromAsn1 = function (e) {
    var t = {},
      r = [];
    if (ks.validate(e, ICr, t, r)) {
      var o = ks.derToOid(t.publicKeyOid);
      if (o !== Vf.oids.rsaEncryption) {
        var d = Error("Cannot read public key. Unknown OID.");
        throw ((d.oid = o), d);
      }
      e = t.rsaPublicKey;
    }
    if (((r = []), !ks.validate(e, PCr, t, r))) {
      var d = Error(
        "Cannot read public key. ASN.1 object does not contain an RSAPublicKey.",
      );
      throw ((d.errors = r), d);
    }
    var p = Nd.util.createBuffer(t.publicKeyModulus).toHex(),
      _ = Nd.util.createBuffer(t.publicKeyExponent).toHex();
    return Vf.setRsaPublicKey(new Bm(p, 16), new Bm(_, 16));
  };
  Vf.publicKeyToAsn1 = Vf.publicKeyToSubjectPublicKeyInfo = function (e) {
    return ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, [
      ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, [
        ks.create(
          ks.Class.UNIVERSAL,
          ks.Type.OID,
          !1,
          ks.oidToDer(Vf.oids.rsaEncryption).getBytes(),
        ),
        ks.create(ks.Class.UNIVERSAL, ks.Type.NULL, !1, ""),
      ]),
      ks.create(ks.Class.UNIVERSAL, ks.Type.BITSTRING, !1, [
        Vf.publicKeyToRSAPublicKey(e),
      ]),
    ]);
  };
  Vf.publicKeyToRSAPublicKey = function (e) {
    return ks.create(ks.Class.UNIVERSAL, ks.Type.SEQUENCE, !0, [
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.n)),
      ks.create(ks.Class.UNIVERSAL, ks.Type.INTEGER, !1, cM(e.e)),
    ]);
  };
  function nOt(e, t, r) {
    var o = Nd.util.createBuffer(),
      d = Math.ceil(t.n.bitLength() / 8);
    if (e.length > d - 11) {
      var p = Error("Message is too long for PKCS#1 v1.5 padding.");
      throw ((p.length = e.length), (p.max = d - 11), p);
    }
    (o.putByte(0), o.putByte(r));
    var _ = d - 3 - e.length,
      E;
    if (r === 0 || r === 1) {
      E = r === 0 ? 0 : 255;
      for (var C = 0; C < _; ++C) o.putByte(E);
    } else
      while (_ > 0) {
        var I = 0,
          D = Nd.random.getBytes(_);
        for (var C = 0; C < _; ++C)
          if (((E = D.charCodeAt(C)), E === 0)) ++I;
          else o.putByte(E);
        _ = I;
      }
    return (o.putByte(0), o.putBytes(e), o);
  }
  function Uye(e, t, r, o, d) {
    var p = Math.ceil(t.n.bitLength() / 8),
      _ = Nd.util.createBuffer(e),
      E = _.getByte(),
      C = _.getByte();
    if (
      E !== 0 ||
      (r && C !== 0 && C !== 1) ||
      (!r && C !== 2) ||
      (r && C === 0 && typeof o > "u")
    )
      throw Error("Encryption block is invalid.");
    var I = 0;
    if (C === 0) {
      I = p - 3 - o;
      for (var D = 0; D < I; ++D)
        if (_.getByte() !== 0) throw Error("Encryption block is invalid.");
    } else if (C === 1) {
      I = 0;
      while (_.length() > 1) {
        if (_.getByte() !== 255) {
          --_.read;
          break;
        }
        ++I;
      }
      if (I < 8 && !(d ? d._skipPaddingChecks : !1))
        throw Error("Encryption block is invalid.");
    } else if (C === 2) {
      I = 0;
      while (_.length() > 1) {
        if (_.getByte() === 0) {
          --_.read;
          break;
        }
        ++I;
      }
      if (I < 8 && !(d ? d._skipPaddingChecks : !1))
        throw Error("Encryption block is invalid.");
    }
    var N = _.getByte();
    if (N !== 0 || I !== p - 3 - _.length())
      throw Error("Encryption block is invalid.");
    return _.getBytes();
  }
  function DCr(e, t, r) {
    if (typeof t === "function") ((r = t), (t = {}));
    t = t || {};
    var o = {
      algorithm: {
        name: t.algorithm || "PRIMEINC",
        options: {
          workers: t.workers || 2,
          workLoad: t.workLoad || 100,
          workerScript: t.workerScript,
        },
      },
    };
    if ("prng" in t) o.prng = t.prng;
    d();
    function d() {
      p(e.pBits, function (E, C) {
        if (E) return r(E);
        if (((e.p = C), e.q !== null)) return _(E, e.q);
        p(e.qBits, _);
      });
    }
    function p(E, C) {
      Nd.prime.generateProbablePrime(E, o, C);
    }
    function _(E, C) {
      if (E) return r(E);
      if (((e.q = C), e.p.compareTo(e.q) < 0)) {
        var I = e.p;
        ((e.p = e.q), (e.q = I));
      }
      if (e.p.subtract(Bm.ONE).gcd(e.e).compareTo(Bm.ONE) !== 0) {
        ((e.p = null), d());
        return;
      }
      if (e.q.subtract(Bm.ONE).gcd(e.e).compareTo(Bm.ONE) !== 0) {
        ((e.q = null), p(e.qBits, _));
        return;
      }
      if (
        ((e.p1 = e.p.subtract(Bm.ONE)),
        (e.q1 = e.q.subtract(Bm.ONE)),
        (e.phi = e.p1.multiply(e.q1)),
        e.phi.gcd(e.e).compareTo(Bm.ONE) !== 0)
      ) {
        ((e.p = e.q = null), d());
        return;
      }
      if (((e.n = e.p.multiply(e.q)), e.n.bitLength() !== e.bits)) {
        ((e.q = null), p(e.qBits, _));
        return;
      }
      var D = e.e.modInverse(e.phi);
      ((e.keys = {
        privateKey: Vf.rsa.setPrivateKey(
          e.n,
          e.e,
          D,
          e.p,
          e.q,
          D.mod(e.p1),
          D.mod(e.q1),
          e.q.modInverse(e.p),
        ),
        publicKey: Vf.rsa.setPublicKey(e.n, e.e),
      }),
        r(null, e.keys));
    }
  }
  function cM(e) {
    var t = e.toString(16);
    if (t[0] >= "8") t = "00" + t;
    var r = Nd.util.hexToBytes(t);
    if (
      r.length > 1 &&
      ((r.charCodeAt(0) === 0 && (r.charCodeAt(1) & 128) === 0) ||
        (r.charCodeAt(0) === 255 && (r.charCodeAt(1) & 128) === 128))
    )
      return r.substr(1);
    return r;
  }
  function NCr(e) {
    if (e <= 100) return 27;
    if (e <= 150) return 18;
    if (e <= 200) return 15;
    if (e <= 250) return 12;
    if (e <= 300) return 9;
    if (e <= 350) return 8;
    if (e <= 400) return 7;
    if (e <= 500) return 6;
    if (e <= 600) return 5;
    if (e <= 800) return 4;
    if (e <= 1250) return 3;
    return 2;
  }
  function Q0t(e) {
    return Nd.util.isNodejs && typeof yGe[e] === "function";
  }
  function J0t(e) {
    return (
      typeof aA.globalScope < "u" &&
      typeof aA.globalScope.crypto === "object" &&
      typeof aA.globalScope.crypto.subtle === "object" &&
      typeof aA.globalScope.crypto.subtle[e] === "function"
    );
  }
  function Z0t(e) {
    return (
      typeof aA.globalScope < "u" &&
      typeof aA.globalScope.msCrypto === "object" &&
      typeof aA.globalScope.msCrypto.subtle === "object" &&
      typeof aA.globalScope.msCrypto.subtle[e] === "function"
    );
  }
  function eOt(e) {
    var t = Nd.util.hexToBytes(e.toString(16)),
      r = new Uint8Array(t.length);
    for (var o = 0; o < t.length; ++o) r[o] = t.charCodeAt(o);
    return r;
  }
});
var bGe = commonJS(function (aIs, aOt) {
  var $c = yp();
  oB();
  eP();
  Uee();
  nM();
  sB();
  Nye();
  MW();
  Zx();
  cGe();
  Wee();
  Ig();
  if (typeof _Ge > "u") _Ge = $c.jsbn.BigInteger;
  var _Ge,
    Zs = $c.asn1,
    ap = ($c.pki = $c.pki || {});
  aOt.exports = ap.pbe = $c.pbe = $c.pbe || {};
  var WW = ap.oids,
    LCr = {
      name: "EncryptedPrivateKeyInfo",
      tagClass: Zs.Class.UNIVERSAL,
      type: Zs.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
          tagClass: Zs.Class.UNIVERSAL,
          type: Zs.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "AlgorithmIdentifier.algorithm",
              tagClass: Zs.Class.UNIVERSAL,
              type: Zs.Type.OID,
              constructed: !1,
              capture: "encryptionOid",
            },
            {
              name: "AlgorithmIdentifier.parameters",
              tagClass: Zs.Class.UNIVERSAL,
              type: Zs.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "encryptionParams",
            },
          ],
        },
        {
          name: "EncryptedPrivateKeyInfo.encryptedData",
          tagClass: Zs.Class.UNIVERSAL,
          type: Zs.Type.OCTETSTRING,
          constructed: !1,
          capture: "encryptedData",
        },
      ],
    },
    FCr = {
      name: "PBES2Algorithms",
      tagClass: Zs.Class.UNIVERSAL,
      type: Zs.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "PBES2Algorithms.keyDerivationFunc",
          tagClass: Zs.Class.UNIVERSAL,
          type: Zs.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PBES2Algorithms.keyDerivationFunc.oid",
              tagClass: Zs.Class.UNIVERSAL,
              type: Zs.Type.OID,
              constructed: !1,
              capture: "kdfOid",
            },
            {
              name: "PBES2Algorithms.params",
              tagClass: Zs.Class.UNIVERSAL,
              type: Zs.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "PBES2Algorithms.params.salt",
                  tagClass: Zs.Class.UNIVERSAL,
                  type: Zs.Type.OCTETSTRING,
                  constructed: !1,
                  capture: "kdfSalt",
                },
                {
                  name: "PBES2Algorithms.params.iterationCount",
                  tagClass: Zs.Class.UNIVERSAL,
                  type: Zs.Type.INTEGER,
                  constructed: !1,
                  capture: "kdfIterationCount",
                },
                {
                  name: "PBES2Algorithms.params.keyLength",
                  tagClass: Zs.Class.UNIVERSAL,
                  type: Zs.Type.INTEGER,
                  constructed: !1,
                  optional: !0,
                  capture: "keyLength",
                },
                {
                  name: "PBES2Algorithms.params.prf",
                  tagClass: Zs.Class.UNIVERSAL,
                  type: Zs.Type.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "PBES2Algorithms.params.prf.algorithm",
                      tagClass: Zs.Class.UNIVERSAL,
                      type: Zs.Type.OID,
                      constructed: !1,
                      capture: "prfOid",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "PBES2Algorithms.encryptionScheme",
          tagClass: Zs.Class.UNIVERSAL,
          type: Zs.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PBES2Algorithms.encryptionScheme.oid",
              tagClass: Zs.Class.UNIVERSAL,
              type: Zs.Type.OID,
              constructed: !1,
              capture: "encOid",
            },
            {
              name: "PBES2Algorithms.encryptionScheme.iv",
              tagClass: Zs.Class.UNIVERSAL,
              type: Zs.Type.OCTETSTRING,
              constructed: !1,
              capture: "encIv",
            },
          ],
        },
      ],
    },
    $Cr = {
      name: "pkcs-12PbeParams",
      tagClass: Zs.Class.UNIVERSAL,
      type: Zs.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "pkcs-12PbeParams.salt",
          tagClass: Zs.Class.UNIVERSAL,
          type: Zs.Type.OCTETSTRING,
          constructed: !1,
          capture: "salt",
        },
        {
          name: "pkcs-12PbeParams.iterations",
          tagClass: Zs.Class.UNIVERSAL,
          type: Zs.Type.INTEGER,
          constructed: !1,
          capture: "iterations",
        },
      ],
    };
  ap.encryptPrivateKeyInfo = function (e, t, r) {
    ((r = r || {}),
      (r.saltSize = r.saltSize || 8),
      (r.count = r.count || 2048),
      (r.algorithm = r.algorithm || "aes128"),
      (r.prfAlgorithm = r.prfAlgorithm || "sha1"));
    var o = $c.random.getBytesSync(r.saltSize),
      d = r.count,
      p = Zs.integerToDer(d),
      _,
      E,
      C;
    if (r.algorithm.indexOf("aes") === 0 || r.algorithm === "des") {
      var I, D, N;
      switch (r.algorithm) {
        case "aes128":
          ((_ = 16),
            (I = 16),
            (D = WW["aes128-CBC"]),
            (N = $c.aes.createEncryptionCipher));
          break;
        case "aes192":
          ((_ = 24),
            (I = 16),
            (D = WW["aes192-CBC"]),
            (N = $c.aes.createEncryptionCipher));
          break;
        case "aes256":
          ((_ = 32),
            (I = 16),
            (D = WW["aes256-CBC"]),
            (N = $c.aes.createEncryptionCipher));
          break;
        case "des":
          ((_ = 8),
            (I = 8),
            (D = WW.desCBC),
            (N = $c.des.createEncryptionCipher));
          break;
        default:
          var F = Error(
            "Cannot encrypt private key. Unknown encryption algorithm.",
          );
          throw ((F.algorithm = r.algorithm), F);
      }
      var U = "hmacWith" + r.prfAlgorithm.toUpperCase(),
        V = iOt(U),
        re = $c.pkcs5.pbkdf2(t, o, d, _, V),
        ue = $c.random.getBytesSync(I),
        de = N(re);
      (de.start(ue),
        de.update(Zs.toDer(e)),
        de.finish(),
        (C = de.output.getBytes()));
      var _e = BCr(o, p, _, U);
      E = Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
        Zs.create(
          Zs.Class.UNIVERSAL,
          Zs.Type.OID,
          !1,
          Zs.oidToDer(WW.pkcs5PBES2).getBytes(),
        ),
        Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
          Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
            Zs.create(
              Zs.Class.UNIVERSAL,
              Zs.Type.OID,
              !1,
              Zs.oidToDer(WW.pkcs5PBKDF2).getBytes(),
            ),
            _e,
          ]),
          Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
            Zs.create(
              Zs.Class.UNIVERSAL,
              Zs.Type.OID,
              !1,
              Zs.oidToDer(D).getBytes(),
            ),
            Zs.create(Zs.Class.UNIVERSAL, Zs.Type.OCTETSTRING, !1, ue),
          ]),
        ]),
      ]);
    } else if (r.algorithm === "3des") {
      _ = 24;
      var Se = new $c.util.ByteBuffer(o),
        re = ap.pbe.generatePkcs12Key(t, Se, 1, d, _),
        ue = ap.pbe.generatePkcs12Key(t, Se, 2, d, _),
        de = $c.des.createEncryptionCipher(re);
      (de.start(ue),
        de.update(Zs.toDer(e)),
        de.finish(),
        (C = de.output.getBytes()),
        (E = Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
          Zs.create(
            Zs.Class.UNIVERSAL,
            Zs.Type.OID,
            !1,
            Zs.oidToDer(WW["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes(),
          ),
          Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
            Zs.create(Zs.Class.UNIVERSAL, Zs.Type.OCTETSTRING, !1, o),
            Zs.create(Zs.Class.UNIVERSAL, Zs.Type.INTEGER, !1, p.getBytes()),
          ]),
        ])));
    } else {
      var F = Error(
        "Cannot encrypt private key. Unknown encryption algorithm.",
      );
      throw ((F.algorithm = r.algorithm), F);
    }
    var ve = Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
      E,
      Zs.create(Zs.Class.UNIVERSAL, Zs.Type.OCTETSTRING, !1, C),
    ]);
    return ve;
  };
  ap.decryptPrivateKeyInfo = function (e, t) {
    var r = null,
      o = {},
      d = [];
    if (!Zs.validate(e, LCr, o, d)) {
      var p = Error(
        "Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.",
      );
      throw ((p.errors = d), p);
    }
    var _ = Zs.derToOid(o.encryptionOid),
      E = ap.pbe.getCipher(_, o.encryptionParams, t),
      C = $c.util.createBuffer(o.encryptedData);
    if ((E.update(C), E.finish())) r = Zs.fromDer(E.output);
    return r;
  };
  ap.encryptedPrivateKeyToPem = function (e, t) {
    var r = { type: "ENCRYPTED PRIVATE KEY", body: Zs.toDer(e).getBytes() };
    return $c.pem.encode(r, { maxline: t });
  };
  ap.encryptedPrivateKeyFromPem = function (e) {
    var t = $c.pem.decode(e)[0];
    if (t.type !== "ENCRYPTED PRIVATE KEY") {
      var r = Error(
        'Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".',
      );
      throw ((r.headerType = t.type), r);
    }
    if (t.procType && t.procType.type === "ENCRYPTED")
      throw Error(
        "Could not convert encrypted private key from PEM; PEM is encrypted.",
      );
    return Zs.fromDer(t.body);
  };
  ap.encryptRsaPrivateKey = function (e, t, r) {
    if (((r = r || {}), !r.legacy)) {
      var o = ap.wrapRsaPrivateKey(ap.privateKeyToAsn1(e));
      return (
        (o = ap.encryptPrivateKeyInfo(o, t, r)),
        ap.encryptedPrivateKeyToPem(o)
      );
    }
    var d, p, _, E;
    switch (r.algorithm) {
      case "aes128":
        ((d = "AES-128-CBC"),
          (_ = 16),
          (p = $c.random.getBytesSync(16)),
          (E = $c.aes.createEncryptionCipher));
        break;
      case "aes192":
        ((d = "AES-192-CBC"),
          (_ = 24),
          (p = $c.random.getBytesSync(16)),
          (E = $c.aes.createEncryptionCipher));
        break;
      case "aes256":
        ((d = "AES-256-CBC"),
          (_ = 32),
          (p = $c.random.getBytesSync(16)),
          (E = $c.aes.createEncryptionCipher));
        break;
      case "3des":
        ((d = "DES-EDE3-CBC"),
          (_ = 24),
          (p = $c.random.getBytesSync(8)),
          (E = $c.des.createEncryptionCipher));
        break;
      case "des":
        ((d = "DES-CBC"),
          (_ = 8),
          (p = $c.random.getBytesSync(8)),
          (E = $c.des.createEncryptionCipher));
        break;
      default:
        var C = Error(
          'Could not encrypt RSA private key; unsupported encryption algorithm "' +
            r.algorithm +
            '".',
        );
        throw ((C.algorithm = r.algorithm), C);
    }
    var I = $c.pbe.opensslDeriveBytes(t, p.substr(0, 8), _),
      D = E(I);
    (D.start(p), D.update(Zs.toDer(ap.privateKeyToAsn1(e))), D.finish());
    var N = {
      type: "RSA PRIVATE KEY",
      procType: { version: "4", type: "ENCRYPTED" },
      dekInfo: {
        algorithm: d,
        parameters: $c.util.bytesToHex(p).toUpperCase(),
      },
      body: D.output.getBytes(),
    };
    return $c.pem.encode(N);
  };
  ap.decryptRsaPrivateKey = function (e, t) {
    var r = null,
      o = $c.pem.decode(e)[0];
    if (
      o.type !== "ENCRYPTED PRIVATE KEY" &&
      o.type !== "PRIVATE KEY" &&
      o.type !== "RSA PRIVATE KEY"
    ) {
      var d = Error(
        'Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".',
      );
      throw ((d.headerType = d), d);
    }
    if (o.procType && o.procType.type === "ENCRYPTED") {
      var p, _;
      switch (o.dekInfo.algorithm) {
        case "DES-CBC":
          ((p = 8), (_ = $c.des.createDecryptionCipher));
          break;
        case "DES-EDE3-CBC":
          ((p = 24), (_ = $c.des.createDecryptionCipher));
          break;
        case "AES-128-CBC":
          ((p = 16), (_ = $c.aes.createDecryptionCipher));
          break;
        case "AES-192-CBC":
          ((p = 24), (_ = $c.aes.createDecryptionCipher));
          break;
        case "AES-256-CBC":
          ((p = 32), (_ = $c.aes.createDecryptionCipher));
          break;
        case "RC2-40-CBC":
          ((p = 5),
            (_ = function (N) {
              return $c.rc2.createDecryptionCipher(N, 40);
            }));
          break;
        case "RC2-64-CBC":
          ((p = 8),
            (_ = function (N) {
              return $c.rc2.createDecryptionCipher(N, 64);
            }));
          break;
        case "RC2-128-CBC":
          ((p = 16),
            (_ = function (N) {
              return $c.rc2.createDecryptionCipher(N, 128);
            }));
          break;
        default:
          var d = Error(
            'Could not decrypt private key; unsupported encryption algorithm "' +
              o.dekInfo.algorithm +
              '".',
          );
          throw ((d.algorithm = o.dekInfo.algorithm), d);
      }
      var E = $c.util.hexToBytes(o.dekInfo.parameters),
        C = $c.pbe.opensslDeriveBytes(t, E.substr(0, 8), p),
        I = _(C);
      if ((I.start(E), I.update($c.util.createBuffer(o.body)), I.finish()))
        r = I.output.getBytes();
      else return r;
    } else r = o.body;
    if (o.type === "ENCRYPTED PRIVATE KEY")
      r = ap.decryptPrivateKeyInfo(Zs.fromDer(r), t);
    else r = Zs.fromDer(r);
    if (r !== null) r = ap.privateKeyFromAsn1(r);
    return r;
  };
  ap.pbe.generatePkcs12Key = function (e, t, r, o, d, p) {
    var _, E;
    if (typeof p > "u" || p === null) {
      if (!("sha1" in $c.md)) throw Error('"sha1" hash algorithm unavailable.');
      p = $c.md.sha1.create();
    }
    var C = p.digestLength,
      I = p.blockLength,
      D = new $c.util.ByteBuffer(),
      N = new $c.util.ByteBuffer();
    if (e !== null && e !== void 0) {
      for (E = 0; E < e.length; E++) N.putInt16(e.charCodeAt(E));
      N.putInt16(0);
    }
    var F = N.length(),
      U = t.length(),
      V = new $c.util.ByteBuffer();
    V.fillWithByte(r, I);
    var re = I * Math.ceil(U / I),
      ue = new $c.util.ByteBuffer();
    for (E = 0; E < re; E++) ue.putByte(t.at(E % U));
    var de = I * Math.ceil(F / I),
      _e = new $c.util.ByteBuffer();
    for (E = 0; E < de; E++) _e.putByte(N.at(E % F));
    var Se = ue;
    Se.putBuffer(_e);
    var ve = Math.ceil(d / C);
    for (var Me = 1; Me <= ve; Me++) {
      var xe = new $c.util.ByteBuffer();
      (xe.putBytes(V.bytes()), xe.putBytes(Se.bytes()));
      for (var Oe = 0; Oe < o; Oe++)
        (p.start(), p.update(xe.getBytes()), (xe = p.digest()));
      var Ne = new $c.util.ByteBuffer();
      for (E = 0; E < I; E++) Ne.putByte(xe.at(E % C));
      var De = Math.ceil(U / I) + Math.ceil(F / I),
        He = new $c.util.ByteBuffer();
      for (_ = 0; _ < De; _++) {
        var je = new $c.util.ByteBuffer(Se.getBytes(I)),
          Ke = 511;
        for (E = Ne.length() - 1; E >= 0; E--)
          ((Ke = Ke >> 8), (Ke += Ne.at(E) + je.at(E)), je.setAt(E, Ke & 255));
        He.putBuffer(je);
      }
      ((Se = He), D.putBuffer(xe));
    }
    return (D.truncate(D.length() - d), D);
  };
  ap.pbe.getCipher = function (e, t, r) {
    switch (e) {
      case ap.oids.pkcs5PBES2:
        return ap.pbe.getCipherForPBES2(e, t, r);
      case ap.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
      case ap.oids["pbewithSHAAnd40BitRC2-CBC"]:
        return ap.pbe.getCipherForPKCS12PBE(e, t, r);
      default:
        var o = Error("Cannot read encrypted PBE data block. Unsupported OID.");
        throw (
          (o.oid = e),
          (o.supportedOids = [
            "pkcs5PBES2",
            "pbeWithSHAAnd3-KeyTripleDES-CBC",
            "pbewithSHAAnd40BitRC2-CBC",
          ]),
          o
        );
    }
  };
  ap.pbe.getCipherForPBES2 = function (e, t, r) {
    var o = {},
      d = [];
    if (!Zs.validate(t, FCr, o, d)) {
      var p = Error(
        "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.",
      );
      throw ((p.errors = d), p);
    }
    if (((e = Zs.derToOid(o.kdfOid)), e !== ap.oids.pkcs5PBKDF2)) {
      var p = Error(
        "Cannot read encrypted private key. Unsupported key derivation function OID.",
      );
      throw ((p.oid = e), (p.supportedOids = ["pkcs5PBKDF2"]), p);
    }
    if (
      ((e = Zs.derToOid(o.encOid)),
      e !== ap.oids["aes128-CBC"] &&
        e !== ap.oids["aes192-CBC"] &&
        e !== ap.oids["aes256-CBC"] &&
        e !== ap.oids["des-EDE3-CBC"] &&
        e !== ap.oids.desCBC)
    ) {
      var p = Error(
        "Cannot read encrypted private key. Unsupported encryption scheme OID.",
      );
      throw (
        (p.oid = e),
        (p.supportedOids = [
          "aes128-CBC",
          "aes192-CBC",
          "aes256-CBC",
          "des-EDE3-CBC",
          "desCBC",
        ]),
        p
      );
    }
    var _ = o.kdfSalt,
      E = $c.util.createBuffer(o.kdfIterationCount);
    E = E.getInt(E.length() << 3);
    var C, I;
    switch (ap.oids[e]) {
      case "aes128-CBC":
        ((C = 16), (I = $c.aes.createDecryptionCipher));
        break;
      case "aes192-CBC":
        ((C = 24), (I = $c.aes.createDecryptionCipher));
        break;
      case "aes256-CBC":
        ((C = 32), (I = $c.aes.createDecryptionCipher));
        break;
      case "des-EDE3-CBC":
        ((C = 24), (I = $c.des.createDecryptionCipher));
        break;
      case "desCBC":
        ((C = 8), (I = $c.des.createDecryptionCipher));
        break;
    }
    var D = sOt(o.prfOid),
      N = $c.pkcs5.pbkdf2(r, _, E, C, D),
      F = o.encIv,
      U = I(N);
    return (U.start(F), U);
  };
  ap.pbe.getCipherForPKCS12PBE = function (e, t, r) {
    var o = {},
      d = [];
    if (!Zs.validate(t, $Cr, o, d)) {
      var p = Error(
        "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.",
      );
      throw ((p.errors = d), p);
    }
    var _ = $c.util.createBuffer(o.salt),
      E = $c.util.createBuffer(o.iterations);
    E = E.getInt(E.length() << 3);
    var C, I, D;
    switch (e) {
      case ap.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
        ((C = 24), (I = 8), (D = $c.des.startDecrypting));
        break;
      case ap.oids["pbewithSHAAnd40BitRC2-CBC"]:
        ((C = 5),
          (I = 8),
          (D = function (re, ue) {
            var de = $c.rc2.createDecryptionCipher(re, 40);
            return (de.start(ue, null), de);
          }));
        break;
      default:
        var p = Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
        throw ((p.oid = e), p);
    }
    var N = sOt(o.prfOid),
      F = ap.pbe.generatePkcs12Key(r, _, 1, E, C, N);
    N.start();
    var U = ap.pbe.generatePkcs12Key(r, _, 2, E, I, N);
    return D(F, U);
  };
  ap.pbe.opensslDeriveBytes = function (e, t, r, o) {
    if (typeof o > "u" || o === null) {
      if (!("md5" in $c.md)) throw Error('"md5" hash algorithm unavailable.');
      o = $c.md.md5.create();
    }
    if (t === null) t = "";
    var d = [oOt(o, e + t)];
    for (var p = 16, _ = 1; p < r; ++_, p += 16)
      d.push(oOt(o, d[_ - 1] + e + t));
    return d.join("").substr(0, r);
  };
  function oOt(e, t) {
    return e.start().update(t).digest().getBytes();
  }
  function sOt(e) {
    var t;
    if (!e) t = "hmacWithSHA1";
    else if (((t = ap.oids[Zs.derToOid(e)]), !t)) {
      var r = Error("Unsupported PRF OID.");
      throw (
        (r.oid = e),
        (r.supported = [
          "hmacWithSHA1",
          "hmacWithSHA224",
          "hmacWithSHA256",
          "hmacWithSHA384",
          "hmacWithSHA512",
        ]),
        r
      );
    }
    return iOt(t);
  }
  function iOt(e) {
    var t = $c.md;
    switch (e) {
      case "hmacWithSHA224":
        t = $c.md.sha512;
      case "hmacWithSHA1":
      case "hmacWithSHA256":
      case "hmacWithSHA384":
      case "hmacWithSHA512":
        e = e.substr(8).toLowerCase();
        break;
      default:
        var r = Error("Unsupported PRF algorithm.");
        throw (
          (r.algorithm = e),
          (r.supported = [
            "hmacWithSHA1",
            "hmacWithSHA224",
            "hmacWithSHA256",
            "hmacWithSHA384",
            "hmacWithSHA512",
          ]),
          r
        );
    }
    if (!t || !(e in t)) throw Error("Unknown hash algorithm: " + e);
    return t[e].create();
  }
  function BCr(e, t, r, o) {
    var d = Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
      Zs.create(Zs.Class.UNIVERSAL, Zs.Type.OCTETSTRING, !1, e),
      Zs.create(Zs.Class.UNIVERSAL, Zs.Type.INTEGER, !1, t.getBytes()),
    ]);
    if (o !== "hmacWithSHA1")
      d.value.push(
        Zs.create(
          Zs.Class.UNIVERSAL,
          Zs.Type.INTEGER,
          !1,
          $c.util.hexToBytes(r.toString(16)),
        ),
        Zs.create(Zs.Class.UNIVERSAL, Zs.Type.SEQUENCE, !0, [
          Zs.create(
            Zs.Class.UNIVERSAL,
            Zs.Type.OID,
            !1,
            Zs.oidToDer(ap.oids[o]).getBytes(),
          ),
          Zs.create(Zs.Class.UNIVERSAL, Zs.Type.NULL, !1, ""),
        ]),
      );
    return d;
  }
});
var SGe = commonJS(function (lIs, uOt) {
  var G4 = yp();
  eP();
  Ig();
  var Ac = G4.asn1,
    z4 = (uOt.exports = G4.pkcs7asn1 = G4.pkcs7asn1 || {});
  G4.pkcs7 = G4.pkcs7 || {};
  G4.pkcs7.asn1 = z4;
  var lOt = {
    name: "ContentInfo",
    tagClass: Ac.Class.UNIVERSAL,
    type: Ac.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "ContentInfo.ContentType",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.OID,
        constructed: !1,
        capture: "contentType",
      },
      {
        name: "ContentInfo.content",
        tagClass: Ac.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: !0,
        optional: !0,
        captureAsn1: "content",
      },
    ],
  };
  z4.contentInfoValidator = lOt;
  var cOt = {
    name: "EncryptedContentInfo",
    tagClass: Ac.Class.UNIVERSAL,
    type: Ac.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "EncryptedContentInfo.contentType",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.OID,
        constructed: !1,
        capture: "contentType",
      },
      {
        name: "EncryptedContentInfo.contentEncryptionAlgorithm",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
            tagClass: Ac.Class.UNIVERSAL,
            type: Ac.Type.OID,
            constructed: !1,
            capture: "encAlgorithm",
          },
          {
            name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
            tagClass: Ac.Class.UNIVERSAL,
            captureAsn1: "encParameter",
          },
        ],
      },
      {
        name: "EncryptedContentInfo.encryptedContent",
        tagClass: Ac.Class.CONTEXT_SPECIFIC,
        type: 0,
        capture: "encryptedContent",
        captureAsn1: "encryptedContentAsn1",
      },
    ],
  };
  z4.envelopedDataValidator = {
    name: "EnvelopedData",
    tagClass: Ac.Class.UNIVERSAL,
    type: Ac.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "EnvelopedData.Version",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.INTEGER,
        constructed: !1,
        capture: "version",
      },
      {
        name: "EnvelopedData.RecipientInfos",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SET,
        constructed: !0,
        captureAsn1: "recipientInfos",
      },
    ].concat(cOt),
  };
  z4.encryptedDataValidator = {
    name: "EncryptedData",
    tagClass: Ac.Class.UNIVERSAL,
    type: Ac.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "EncryptedData.Version",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.INTEGER,
        constructed: !1,
        capture: "version",
      },
    ].concat(cOt),
  };
  var UCr = {
    name: "SignerInfo",
    tagClass: Ac.Class.UNIVERSAL,
    type: Ac.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "SignerInfo.version",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.INTEGER,
        constructed: !1,
      },
      {
        name: "SignerInfo.issuerAndSerialNumber",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "SignerInfo.issuerAndSerialNumber.issuer",
            tagClass: Ac.Class.UNIVERSAL,
            type: Ac.Type.SEQUENCE,
            constructed: !0,
            captureAsn1: "issuer",
          },
          {
            name: "SignerInfo.issuerAndSerialNumber.serialNumber",
            tagClass: Ac.Class.UNIVERSAL,
            type: Ac.Type.INTEGER,
            constructed: !1,
            capture: "serial",
          },
        ],
      },
      {
        name: "SignerInfo.digestAlgorithm",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "SignerInfo.digestAlgorithm.algorithm",
            tagClass: Ac.Class.UNIVERSAL,
            type: Ac.Type.OID,
            constructed: !1,
            capture: "digestAlgorithm",
          },
          {
            name: "SignerInfo.digestAlgorithm.parameter",
            tagClass: Ac.Class.UNIVERSAL,
            constructed: !1,
            captureAsn1: "digestParameter",
            optional: !0,
          },
        ],
      },
      {
        name: "SignerInfo.authenticatedAttributes",
        tagClass: Ac.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: !0,
        optional: !0,
        capture: "authenticatedAttributes",
      },
      {
        name: "SignerInfo.digestEncryptionAlgorithm",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SEQUENCE,
        constructed: !0,
        capture: "signatureAlgorithm",
      },
      {
        name: "SignerInfo.encryptedDigest",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.OCTETSTRING,
        constructed: !1,
        capture: "signature",
      },
      {
        name: "SignerInfo.unauthenticatedAttributes",
        tagClass: Ac.Class.CONTEXT_SPECIFIC,
        type: 1,
        constructed: !0,
        optional: !0,
        capture: "unauthenticatedAttributes",
      },
    ],
  };
  z4.signedDataValidator = {
    name: "SignedData",
    tagClass: Ac.Class.UNIVERSAL,
    type: Ac.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "SignedData.Version",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.INTEGER,
        constructed: !1,
        capture: "version",
      },
      {
        name: "SignedData.DigestAlgorithms",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SET,
        constructed: !0,
        captureAsn1: "digestAlgorithms",
      },
      lOt,
      {
        name: "SignedData.Certificates",
        tagClass: Ac.Class.CONTEXT_SPECIFIC,
        type: 0,
        optional: !0,
        captureAsn1: "certificates",
      },
      {
        name: "SignedData.CertificateRevocationLists",
        tagClass: Ac.Class.CONTEXT_SPECIFIC,
        type: 1,
        optional: !0,
        captureAsn1: "crls",
      },
      {
        name: "SignedData.SignerInfos",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SET,
        capture: "signerInfos",
        optional: !0,
        value: [UCr],
      },
    ],
  };
  z4.recipientInfoValidator = {
    name: "RecipientInfo",
    tagClass: Ac.Class.UNIVERSAL,
    type: Ac.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "RecipientInfo.version",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.INTEGER,
        constructed: !1,
        capture: "version",
      },
      {
        name: "RecipientInfo.issuerAndSerial",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "RecipientInfo.issuerAndSerial.issuer",
            tagClass: Ac.Class.UNIVERSAL,
            type: Ac.Type.SEQUENCE,
            constructed: !0,
            captureAsn1: "issuer",
          },
          {
            name: "RecipientInfo.issuerAndSerial.serialNumber",
            tagClass: Ac.Class.UNIVERSAL,
            type: Ac.Type.INTEGER,
            constructed: !1,
            capture: "serial",
          },
        ],
      },
      {
        name: "RecipientInfo.keyEncryptionAlgorithm",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
            tagClass: Ac.Class.UNIVERSAL,
            type: Ac.Type.OID,
            constructed: !1,
            capture: "encAlgorithm",
          },
          {
            name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
            tagClass: Ac.Class.UNIVERSAL,
            constructed: !1,
            captureAsn1: "encParameter",
            optional: !0,
          },
        ],
      },
      {
        name: "RecipientInfo.encryptedKey",
        tagClass: Ac.Class.UNIVERSAL,
        type: Ac.Type.OCTETSTRING,
        constructed: !1,
        capture: "encKey",
      },
    ],
  };
});
var kGe = commonJS(function (cIs, dOt) {
  var zW = yp();
  Ig();
  zW.mgf = zW.mgf || {};
  var HCr = (dOt.exports = zW.mgf.mgf1 = zW.mgf1 = zW.mgf1 || {});
  HCr.create = function (e) {
    var t = {
      generate: function (r, o) {
        var d = new zW.util.ByteBuffer(),
          p = Math.ceil(o / e.digestLength);
        for (var _ = 0; _ < p; _++) {
          var E = new zW.util.ByteBuffer();
          (E.putInt32(_),
            e.start(),
            e.update(r + E.getBytes()),
            d.putBuffer(e.digest()));
        }
        return (d.truncate(d.length() - o), d.getBytes());
      },
    };
    return t;
  };
});
var pOt = commonJS(function (uIs, fOt) {
  var Hye = yp();
  kGe();
  fOt.exports = Hye.mgf = Hye.mgf || {};
  Hye.mgf.mgf1 = Hye.mgf1;
});
var jye = commonJS(function (dIs, mOt) {
  var qW = yp();
  Zx();
  Ig();
  var jCr = (mOt.exports = qW.pss = qW.pss || {});
  jCr.create = function (e) {
    if (arguments.length === 3)
      e = { md: arguments[0], mgf: arguments[1], saltLength: arguments[2] };
    var t = e.md,
      r = e.mgf,
      o = t.digestLength,
      d = e.salt || null;
    if (typeof d === "string") d = qW.util.createBuffer(d);
    var p;
    if ("saltLength" in e) p = e.saltLength;
    else if (d !== null) p = d.length();
    else throw Error("Salt length not specified or specific salt not given.");
    if (d !== null && d.length() !== p)
      throw Error("Given salt length does not match length of given salt.");
    var _ = e.prng || qW.random,
      E = {};
    return (
      (E.encode = function (C, I) {
        var D,
          N = I - 1,
          F = Math.ceil(N / 8),
          U = C.digest().getBytes();
        if (F < o + p + 2) throw Error("Message is too long to encrypt.");
        var V;
        if (d === null) V = _.getBytesSync(p);
        else V = d.bytes();
        var re = new qW.util.ByteBuffer();
        (re.fillWithByte(0, 8),
          re.putBytes(U),
          re.putBytes(V),
          t.start(),
          t.update(re.getBytes()));
        var ue = t.digest().getBytes(),
          de = new qW.util.ByteBuffer();
        (de.fillWithByte(0, F - p - o - 2), de.putByte(1), de.putBytes(V));
        var _e = de.getBytes(),
          Se = F - o - 1,
          ve = r.generate(ue, Se),
          Me = "";
        for (D = 0; D < Se; D++)
          Me += String.fromCharCode(_e.charCodeAt(D) ^ ve.charCodeAt(D));
        var xe = (65280 >> (8 * F - N)) & 255;
        return (
          (Me = String.fromCharCode(Me.charCodeAt(0) & ~xe) + Me.substr(1)),
          Me + ue + String.fromCharCode(188)
        );
      }),
      (E.verify = function (C, I, D) {
        var N,
          F = D - 1,
          U = Math.ceil(F / 8);
        if (((I = I.substr(-U)), U < o + p + 2))
          throw Error("Inconsistent parameters to PSS signature verification.");
        if (I.charCodeAt(U - 1) !== 188)
          throw Error("Encoded message does not end in 0xBC.");
        var V = U - o - 1,
          re = I.substr(0, V),
          ue = I.substr(V, o),
          de = (65280 >> (8 * U - F)) & 255;
        if ((re.charCodeAt(0) & de) !== 0)
          throw Error("Bits beyond keysize not zero as expected.");
        var _e = r.generate(ue, V),
          Se = "";
        for (N = 0; N < V; N++)
          Se += String.fromCharCode(re.charCodeAt(N) ^ _e.charCodeAt(N));
        Se = String.fromCharCode(Se.charCodeAt(0) & ~de) + Se.substr(1);
        var ve = U - o - p - 2;
        for (N = 0; N < ve; N++)
          if (Se.charCodeAt(N) !== 0)
            throw Error("Leftmost octets not zero as expected");
        if (Se.charCodeAt(ve) !== 1)
          throw Error("Inconsistent PSS signature, 0x01 marker not found");
        var Me = Se.substr(-p),
          xe = new qW.util.ByteBuffer();
        (xe.fillWithByte(0, 8),
          xe.putBytes(C),
          xe.putBytes(Me),
          t.start(),
          t.update(xe.getBytes()));
        var Oe = t.digest().getBytes();
        return ue === Oe;
      }),
      E
    );
  };
});
var zye = commonJS(function (fIs, bOt) {
  var Fd = yp();
  oB();
  eP();
  Uee();
  nM();
  pOt();
  sB();
  MW();
  jye();
  Wee();
  Ig();
  var Qn = Fd.asn1,
    ul = (bOt.exports = Fd.pki = Fd.pki || {}),
    Vm = ul.oids,
    Ib = {};
  Ib.CN = Vm.commonName;
  Ib.commonName = "CN";
  Ib.C = Vm.countryName;
  Ib.countryName = "C";
  Ib.L = Vm.localityName;
  Ib.localityName = "L";
  Ib.ST = Vm.stateOrProvinceName;
  Ib.stateOrProvinceName = "ST";
  Ib.O = Vm.organizationName;
  Ib.organizationName = "O";
  Ib.OU = Vm.organizationalUnitName;
  Ib.organizationalUnitName = "OU";
  Ib.E = Vm.emailAddress;
  Ib.emailAddress = "E";
  var hOt = Fd.pki.rsa.publicKeyValidator,
    WCr = {
      name: "Certificate",
      tagClass: Qn.Class.UNIVERSAL,
      type: Qn.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "Certificate.TBSCertificate",
          tagClass: Qn.Class.UNIVERSAL,
          type: Qn.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "tbsCertificate",
          value: [
            {
              name: "Certificate.TBSCertificate.version",
              tagClass: Qn.Class.CONTEXT_SPECIFIC,
              type: 0,
              constructed: !0,
              optional: !0,
              value: [
                {
                  name: "Certificate.TBSCertificate.version.integer",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.INTEGER,
                  constructed: !1,
                  capture: "certVersion",
                },
              ],
            },
            {
              name: "Certificate.TBSCertificate.serialNumber",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.INTEGER,
              constructed: !1,
              capture: "certSerialNumber",
            },
            {
              name: "Certificate.TBSCertificate.signature",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "Certificate.TBSCertificate.signature.algorithm",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.OID,
                  constructed: !1,
                  capture: "certinfoSignatureOid",
                },
                {
                  name: "Certificate.TBSCertificate.signature.parameters",
                  tagClass: Qn.Class.UNIVERSAL,
                  optional: !0,
                  captureAsn1: "certinfoSignatureParams",
                },
              ],
            },
            {
              name: "Certificate.TBSCertificate.issuer",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "certIssuer",
            },
            {
              name: "Certificate.TBSCertificate.validity",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "Certificate.TBSCertificate.validity.notBefore (utc)",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.UTCTIME,
                  constructed: !1,
                  optional: !0,
                  capture: "certValidity1UTCTime",
                },
                {
                  name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.GENERALIZEDTIME,
                  constructed: !1,
                  optional: !0,
                  capture: "certValidity2GeneralizedTime",
                },
                {
                  name: "Certificate.TBSCertificate.validity.notAfter (utc)",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.UTCTIME,
                  constructed: !1,
                  optional: !0,
                  capture: "certValidity3UTCTime",
                },
                {
                  name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.GENERALIZEDTIME,
                  constructed: !1,
                  optional: !0,
                  capture: "certValidity4GeneralizedTime",
                },
              ],
            },
            {
              name: "Certificate.TBSCertificate.subject",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "certSubject",
            },
            hOt,
            {
              name: "Certificate.TBSCertificate.issuerUniqueID",
              tagClass: Qn.Class.CONTEXT_SPECIFIC,
              type: 1,
              constructed: !0,
              optional: !0,
              value: [
                {
                  name: "Certificate.TBSCertificate.issuerUniqueID.id",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.BITSTRING,
                  constructed: !1,
                  captureBitStringValue: "certIssuerUniqueId",
                },
              ],
            },
            {
              name: "Certificate.TBSCertificate.subjectUniqueID",
              tagClass: Qn.Class.CONTEXT_SPECIFIC,
              type: 2,
              constructed: !0,
              optional: !0,
              value: [
                {
                  name: "Certificate.TBSCertificate.subjectUniqueID.id",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.BITSTRING,
                  constructed: !1,
                  captureBitStringValue: "certSubjectUniqueId",
                },
              ],
            },
            {
              name: "Certificate.TBSCertificate.extensions",
              tagClass: Qn.Class.CONTEXT_SPECIFIC,
              type: 3,
              constructed: !0,
              captureAsn1: "certExtensions",
              optional: !0,
            },
          ],
        },
        {
          name: "Certificate.signatureAlgorithm",
          tagClass: Qn.Class.UNIVERSAL,
          type: Qn.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "Certificate.signatureAlgorithm.algorithm",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.OID,
              constructed: !1,
              capture: "certSignatureOid",
            },
            {
              name: "Certificate.TBSCertificate.signature.parameters",
              tagClass: Qn.Class.UNIVERSAL,
              optional: !0,
              captureAsn1: "certSignatureParams",
            },
          ],
        },
        {
          name: "Certificate.signatureValue",
          tagClass: Qn.Class.UNIVERSAL,
          type: Qn.Type.BITSTRING,
          constructed: !1,
          captureBitStringValue: "certSignature",
        },
      ],
    },
    GCr = {
      name: "rsapss",
      tagClass: Qn.Class.UNIVERSAL,
      type: Qn.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "rsapss.hashAlgorithm",
          tagClass: Qn.Class.CONTEXT_SPECIFIC,
          type: 0,
          constructed: !0,
          value: [
            {
              name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Class.SEQUENCE,
              constructed: !0,
              optional: !0,
              value: [
                {
                  name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.OID,
                  constructed: !1,
                  capture: "hashOid",
                },
              ],
            },
          ],
        },
        {
          name: "rsapss.maskGenAlgorithm",
          tagClass: Qn.Class.CONTEXT_SPECIFIC,
          type: 1,
          constructed: !0,
          value: [
            {
              name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Class.SEQUENCE,
              constructed: !0,
              optional: !0,
              value: [
                {
                  name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.OID,
                  constructed: !1,
                  capture: "maskGenOid",
                },
                {
                  name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
                      tagClass: Qn.Class.UNIVERSAL,
                      type: Qn.Type.OID,
                      constructed: !1,
                      capture: "maskGenHashOid",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "rsapss.saltLength",
          tagClass: Qn.Class.CONTEXT_SPECIFIC,
          type: 2,
          optional: !0,
          value: [
            {
              name: "rsapss.saltLength.saltLength",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Class.INTEGER,
              constructed: !1,
              capture: "saltLength",
            },
          ],
        },
        {
          name: "rsapss.trailerField",
          tagClass: Qn.Class.CONTEXT_SPECIFIC,
          type: 3,
          optional: !0,
          value: [
            {
              name: "rsapss.trailer.trailer",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Class.INTEGER,
              constructed: !1,
              capture: "trailer",
            },
          ],
        },
      ],
    },
    zCr = {
      name: "CertificationRequestInfo",
      tagClass: Qn.Class.UNIVERSAL,
      type: Qn.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "certificationRequestInfo",
      value: [
        {
          name: "CertificationRequestInfo.integer",
          tagClass: Qn.Class.UNIVERSAL,
          type: Qn.Type.INTEGER,
          constructed: !1,
          capture: "certificationRequestInfoVersion",
        },
        {
          name: "CertificationRequestInfo.subject",
          tagClass: Qn.Class.UNIVERSAL,
          type: Qn.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certificationRequestInfoSubject",
        },
        hOt,
        {
          name: "CertificationRequestInfo.attributes",
          tagClass: Qn.Class.CONTEXT_SPECIFIC,
          type: 0,
          constructed: !0,
          optional: !0,
          capture: "certificationRequestInfoAttributes",
          value: [
            {
              name: "CertificationRequestInfo.attributes",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "CertificationRequestInfo.attributes.type",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.OID,
                  constructed: !1,
                },
                {
                  name: "CertificationRequestInfo.attributes.value",
                  tagClass: Qn.Class.UNIVERSAL,
                  type: Qn.Type.SET,
                  constructed: !0,
                },
              ],
            },
          ],
        },
      ],
    },
    qCr = {
      name: "CertificationRequest",
      tagClass: Qn.Class.UNIVERSAL,
      type: Qn.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "csr",
      value: [
        zCr,
        {
          name: "CertificationRequest.signatureAlgorithm",
          tagClass: Qn.Class.UNIVERSAL,
          type: Qn.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "CertificationRequest.signatureAlgorithm.algorithm",
              tagClass: Qn.Class.UNIVERSAL,
              type: Qn.Type.OID,
              constructed: !1,
              capture: "csrSignatureOid",
            },
            {
              name: "CertificationRequest.signatureAlgorithm.parameters",
              tagClass: Qn.Class.UNIVERSAL,
              optional: !0,
              captureAsn1: "csrSignatureParams",
            },
          ],
        },
        {
          name: "CertificationRequest.signature",
          tagClass: Qn.Class.UNIVERSAL,
          type: Qn.Type.BITSTRING,
          constructed: !1,
          captureBitStringValue: "csrSignature",
        },
      ],
    };
  ul.RDNAttributesAsArray = function (e, t) {
    var r = [],
      o,
      d,
      p;
    for (var _ = 0; _ < e.value.length; ++_) {
      o = e.value[_];
      for (var E = 0; E < o.value.length; ++E) {
        if (
          ((p = {}),
          (d = o.value[E]),
          (p.type = Qn.derToOid(d.value[0].value)),
          (p.value = d.value[1].value),
          (p.valueTagClass = d.value[1].type),
          p.type in Vm)
        ) {
          if (((p.name = Vm[p.type]), p.name in Ib)) p.shortName = Ib[p.name];
        }
        if (t) (t.update(p.type), t.update(p.value));
        r.push(p);
      }
    }
    return r;
  };
  ul.CRIAttributesAsArray = function (e) {
    var t = [];
    for (var r = 0; r < e.length; ++r) {
      var o = e[r],
        d = Qn.derToOid(o.value[0].value),
        p = o.value[1].value;
      for (var _ = 0; _ < p.length; ++_) {
        var E = {};
        if (
          ((E.type = d),
          (E.value = p[_].value),
          (E.valueTagClass = p[_].type),
          E.type in Vm)
        ) {
          if (((E.name = Vm[E.type]), E.name in Ib)) E.shortName = Ib[E.name];
        }
        if (E.type === Vm.extensionRequest) {
          E.extensions = [];
          for (var C = 0; C < E.value.length; ++C)
            E.extensions.push(ul.certificateExtensionFromAsn1(E.value[C]));
        }
        t.push(E);
      }
    }
    return t;
  };
  function uB(e, t) {
    if (typeof t === "string") t = { shortName: t };
    var r = null,
      o;
    for (var d = 0; r === null && d < e.attributes.length; ++d)
      if (((o = e.attributes[d]), t.type && t.type === o.type)) r = o;
      else if (t.name && t.name === o.name) r = o;
      else if (t.shortName && t.shortName === o.shortName) r = o;
    return r;
  }
  var Wye = function (e, t, r) {
      var o = {};
      if (e !== Vm["RSASSA-PSS"]) return o;
      if (r)
        o = {
          hash: { algorithmOid: Vm.sha1 },
          mgf: { algorithmOid: Vm.mgf1, hash: { algorithmOid: Vm.sha1 } },
          saltLength: 20,
        };
      var d = {},
        p = [];
      if (!Qn.validate(t, GCr, d, p)) {
        var _ = Error("Cannot read RSASSA-PSS parameter block.");
        throw ((_.errors = p), _);
      }
      if (d.hashOid !== void 0)
        ((o.hash = o.hash || {}),
          (o.hash.algorithmOid = Qn.derToOid(d.hashOid)));
      if (d.maskGenOid !== void 0)
        ((o.mgf = o.mgf || {}),
          (o.mgf.algorithmOid = Qn.derToOid(d.maskGenOid)),
          (o.mgf.hash = o.mgf.hash || {}),
          (o.mgf.hash.algorithmOid = Qn.derToOid(d.maskGenHashOid)));
      if (d.saltLength !== void 0) o.saltLength = d.saltLength.charCodeAt(0);
      return o;
    },
    Gye = function (e) {
      switch (Vm[e.signatureOid]) {
        case "sha1WithRSAEncryption":
        case "sha1WithRSASignature":
          return Fd.md.sha1.create();
        case "md5WithRSAEncryption":
          return Fd.md.md5.create();
        case "sha256WithRSAEncryption":
          return Fd.md.sha256.create();
        case "sha384WithRSAEncryption":
          return Fd.md.sha384.create();
        case "sha512WithRSAEncryption":
          return Fd.md.sha512.create();
        case "RSASSA-PSS":
          return Fd.md.sha256.create();
        default:
          var t = Error(
            "Could not compute " + e.type + " digest. Unknown signature OID.",
          );
          throw ((t.signatureOid = e.signatureOid), t);
      }
    },
    yOt = function (e) {
      var t = e.certificate,
        r;
      switch (t.signatureOid) {
        case Vm.sha1WithRSAEncryption:
        case Vm.sha1WithRSASignature:
          break;
        case Vm["RSASSA-PSS"]:
          var o, d;
          if (
            ((o = Vm[t.signatureParameters.mgf.hash.algorithmOid]),
            o === void 0 || Fd.md[o] === void 0)
          ) {
            var p = Error("Unsupported MGF hash function.");
            throw (
              (p.oid = t.signatureParameters.mgf.hash.algorithmOid),
              (p.name = o),
              p
            );
          }
          if (
            ((d = Vm[t.signatureParameters.mgf.algorithmOid]),
            d === void 0 || Fd.mgf[d] === void 0)
          ) {
            var p = Error("Unsupported MGF function.");
            throw (
              (p.oid = t.signatureParameters.mgf.algorithmOid),
              (p.name = d),
              p
            );
          }
          if (
            ((d = Fd.mgf[d].create(Fd.md[o].create())),
            (o = Vm[t.signatureParameters.hash.algorithmOid]),
            o === void 0 || Fd.md[o] === void 0)
          ) {
            var p = Error("Unsupported RSASSA-PSS hash function.");
            throw (
              (p.oid = t.signatureParameters.hash.algorithmOid),
              (p.name = o),
              p
            );
          }
          r = Fd.pss.create(
            Fd.md[o].create(),
            d,
            t.signatureParameters.saltLength,
          );
          break;
      }
      return t.publicKey.verify(e.md.digest().getBytes(), e.signature, r);
    };
  ul.certificateFromPem = function (e, t, r) {
    var o = Fd.pem.decode(e)[0];
    if (
      o.type !== "CERTIFICATE" &&
      o.type !== "X509 CERTIFICATE" &&
      o.type !== "TRUSTED CERTIFICATE"
    ) {
      var d = Error(
        'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".',
      );
      throw ((d.headerType = o.type), d);
    }
    if (o.procType && o.procType.type === "ENCRYPTED")
      throw Error("Could not convert certificate from PEM; PEM is encrypted.");
    var p = Qn.fromDer(o.body, r);
    return ul.certificateFromAsn1(p, t);
  };
  ul.certificateToPem = function (e, t) {
    var r = {
      type: "CERTIFICATE",
      body: Qn.toDer(ul.certificateToAsn1(e)).getBytes(),
    };
    return Fd.pem.encode(r, { maxline: t });
  };
  ul.publicKeyFromPem = function (e) {
    var t = Fd.pem.decode(e)[0];
    if (t.type !== "PUBLIC KEY" && t.type !== "RSA PUBLIC KEY") {
      var r = Error(
        'Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".',
      );
      throw ((r.headerType = t.type), r);
    }
    if (t.procType && t.procType.type === "ENCRYPTED")
      throw Error("Could not convert public key from PEM; PEM is encrypted.");
    var o = Qn.fromDer(t.body);
    return ul.publicKeyFromAsn1(o);
  };
  ul.publicKeyToPem = function (e, t) {
    var r = {
      type: "PUBLIC KEY",
      body: Qn.toDer(ul.publicKeyToAsn1(e)).getBytes(),
    };
    return Fd.pem.encode(r, { maxline: t });
  };
  ul.publicKeyToRSAPublicKeyPem = function (e, t) {
    var r = {
      type: "RSA PUBLIC KEY",
      body: Qn.toDer(ul.publicKeyToRSAPublicKey(e)).getBytes(),
    };
    return Fd.pem.encode(r, { maxline: t });
  };
  ul.getPublicKeyFingerprint = function (e, t) {
    t = t || {};
    var r = t.md || Fd.md.sha1.create(),
      o = t.type || "RSAPublicKey",
      d;
    switch (o) {
      case "RSAPublicKey":
        d = Qn.toDer(ul.publicKeyToRSAPublicKey(e)).getBytes();
        break;
      case "SubjectPublicKeyInfo":
        d = Qn.toDer(ul.publicKeyToAsn1(e)).getBytes();
        break;
      default:
        throw Error('Unknown fingerprint type "' + t.type + '".');
    }
    (r.start(), r.update(d));
    var p = r.digest();
    if (t.encoding === "hex") {
      var _ = p.toHex();
      if (t.delimiter) return _.match(/.{2}/g).join(t.delimiter);
      return _;
    } else if (t.encoding === "binary") return p.getBytes();
    else if (t.encoding) throw Error('Unknown encoding "' + t.encoding + '".');
    return p;
  };
  ul.certificationRequestFromPem = function (e, t, r) {
    var o = Fd.pem.decode(e)[0];
    if (o.type !== "CERTIFICATE REQUEST") {
      var d = Error(
        'Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".',
      );
      throw ((d.headerType = o.type), d);
    }
    if (o.procType && o.procType.type === "ENCRYPTED")
      throw Error(
        "Could not convert certification request from PEM; PEM is encrypted.",
      );
    var p = Qn.fromDer(o.body, r);
    return ul.certificationRequestFromAsn1(p, t);
  };
  ul.certificationRequestToPem = function (e, t) {
    var r = {
      type: "CERTIFICATE REQUEST",
      body: Qn.toDer(ul.certificationRequestToAsn1(e)).getBytes(),
    };
    return Fd.pem.encode(r, { maxline: t });
  };
  ul.createCertificate = function () {
    var e = {};
    return (
      (e.version = 2),
      (e.serialNumber = "00"),
      (e.signatureOid = null),
      (e.signature = null),
      (e.siginfo = {}),
      (e.siginfo.algorithmOid = null),
      (e.validity = {}),
      (e.validity.notBefore = new Date()),
      (e.validity.notAfter = new Date()),
      (e.issuer = {}),
      (e.issuer.getField = function (t) {
        return uB(e.issuer, t);
      }),
      (e.issuer.addField = function (t) {
        (lA([t]), e.issuer.attributes.push(t));
      }),
      (e.issuer.attributes = []),
      (e.issuer.hash = null),
      (e.subject = {}),
      (e.subject.getField = function (t) {
        return uB(e.subject, t);
      }),
      (e.subject.addField = function (t) {
        (lA([t]), e.subject.attributes.push(t));
      }),
      (e.subject.attributes = []),
      (e.subject.hash = null),
      (e.extensions = []),
      (e.publicKey = null),
      (e.md = null),
      (e.setSubject = function (t, r) {
        if ((lA(t), (e.subject.attributes = t), delete e.subject.uniqueId, r))
          e.subject.uniqueId = r;
        e.subject.hash = null;
      }),
      (e.setIssuer = function (t, r) {
        if ((lA(t), (e.issuer.attributes = t), delete e.issuer.uniqueId, r))
          e.issuer.uniqueId = r;
        e.issuer.hash = null;
      }),
      (e.setExtensions = function (t) {
        for (var r = 0; r < t.length; ++r) _Ot(t[r], { cert: e });
        e.extensions = t;
      }),
      (e.getExtension = function (t) {
        if (typeof t === "string") t = { name: t };
        var r = null,
          o;
        for (var d = 0; r === null && d < e.extensions.length; ++d)
          if (((o = e.extensions[d]), t.id && o.id === t.id)) r = o;
          else if (t.name && o.name === t.name) r = o;
        return r;
      }),
      (e.sign = function (t, r) {
        e.md = r || Fd.md.sha1.create();
        var o = Vm[e.md.algorithm + "WithRSAEncryption"];
        if (!o) {
          var d = Error(
            "Could not compute certificate digest. Unknown message digest algorithm OID.",
          );
          throw ((d.algorithm = e.md.algorithm), d);
        }
        ((e.signatureOid = e.siginfo.algorithmOid = o),
          (e.tbsCertificate = ul.getTBSCertificate(e)));
        var p = Qn.toDer(e.tbsCertificate);
        (e.md.update(p.getBytes()), (e.signature = t.sign(e.md)));
      }),
      (e.verify = function (t) {
        var r = !1;
        if (!e.issued(t)) {
          var o = t.issuer,
            d = e.subject,
            p = Error(
              "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.",
            );
          throw (
            (p.expectedIssuer = d.attributes),
            (p.actualIssuer = o.attributes),
            p
          );
        }
        var _ = t.md;
        if (_ === null) {
          _ = Gye({ signatureOid: t.signatureOid, type: "certificate" });
          var E = t.tbsCertificate || ul.getTBSCertificate(t),
            C = Qn.toDer(E);
          _.update(C.getBytes());
        }
        if (_ !== null)
          r = yOt({ certificate: e, md: _, signature: t.signature });
        return r;
      }),
      (e.isIssuer = function (t) {
        var r = !1,
          o = e.issuer,
          d = t.subject;
        if (o.hash && d.hash) r = o.hash === d.hash;
        else if (o.attributes.length === d.attributes.length) {
          r = !0;
          var p, _;
          for (var E = 0; r && E < o.attributes.length; ++E)
            if (
              ((p = o.attributes[E]),
              (_ = d.attributes[E]),
              p.type !== _.type || p.value !== _.value)
            )
              r = !1;
        }
        return r;
      }),
      (e.issued = function (t) {
        return t.isIssuer(e);
      }),
      (e.generateSubjectKeyIdentifier = function () {
        return ul.getPublicKeyFingerprint(e.publicKey, {
          type: "RSAPublicKey",
        });
      }),
      (e.verifySubjectKeyIdentifier = function () {
        var t = Vm.subjectKeyIdentifier;
        for (var r = 0; r < e.extensions.length; ++r) {
          var o = e.extensions[r];
          if (o.id === t) {
            var d = e.generateSubjectKeyIdentifier().getBytes();
            return Fd.util.hexToBytes(o.subjectKeyIdentifier) === d;
          }
        }
        return !1;
      }),
      e
    );
  };
  ul.certificateFromAsn1 = function (e, t) {
    var r = {},
      o = [];
    if (!Qn.validate(e, WCr, r, o)) {
      var d = Error(
        "Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.",
      );
      throw ((d.errors = o), d);
    }
    var p = Qn.derToOid(r.publicKeyOid);
    if (p !== ul.oids.rsaEncryption)
      throw Error("Cannot read public key. OID is not RSA.");
    var _ = ul.createCertificate();
    _.version = r.certVersion ? r.certVersion.charCodeAt(0) : 0;
    var E = Fd.util.createBuffer(r.certSerialNumber);
    ((_.serialNumber = E.toHex()),
      (_.signatureOid = Fd.asn1.derToOid(r.certSignatureOid)),
      (_.signatureParameters = Wye(_.signatureOid, r.certSignatureParams, !0)),
      (_.siginfo.algorithmOid = Fd.asn1.derToOid(r.certinfoSignatureOid)),
      (_.siginfo.parameters = Wye(
        _.siginfo.algorithmOid,
        r.certinfoSignatureParams,
        !1,
      )),
      (_.signature = r.certSignature));
    var C = [];
    if (r.certValidity1UTCTime !== void 0)
      C.push(Qn.utcTimeToDate(r.certValidity1UTCTime));
    if (r.certValidity2GeneralizedTime !== void 0)
      C.push(Qn.generalizedTimeToDate(r.certValidity2GeneralizedTime));
    if (r.certValidity3UTCTime !== void 0)
      C.push(Qn.utcTimeToDate(r.certValidity3UTCTime));
    if (r.certValidity4GeneralizedTime !== void 0)
      C.push(Qn.generalizedTimeToDate(r.certValidity4GeneralizedTime));
    if (C.length > 2)
      throw Error(
        "Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.",
      );
    if (C.length < 2)
      throw Error(
        "Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.",
      );
    if (
      ((_.validity.notBefore = C[0]),
      (_.validity.notAfter = C[1]),
      (_.tbsCertificate = r.tbsCertificate),
      t)
    ) {
      _.md = Gye({ signatureOid: _.signatureOid, type: "certificate" });
      var I = Qn.toDer(_.tbsCertificate);
      _.md.update(I.getBytes());
    }
    var D = Fd.md.sha1.create(),
      N = Qn.toDer(r.certIssuer);
    if (
      (D.update(N.getBytes()),
      (_.issuer.getField = function (V) {
        return uB(_.issuer, V);
      }),
      (_.issuer.addField = function (V) {
        (lA([V]), _.issuer.attributes.push(V));
      }),
      (_.issuer.attributes = ul.RDNAttributesAsArray(r.certIssuer)),
      r.certIssuerUniqueId)
    )
      _.issuer.uniqueId = r.certIssuerUniqueId;
    _.issuer.hash = D.digest().toHex();
    var F = Fd.md.sha1.create(),
      U = Qn.toDer(r.certSubject);
    if (
      (F.update(U.getBytes()),
      (_.subject.getField = function (V) {
        return uB(_.subject, V);
      }),
      (_.subject.addField = function (V) {
        (lA([V]), _.subject.attributes.push(V));
      }),
      (_.subject.attributes = ul.RDNAttributesAsArray(r.certSubject)),
      r.certSubjectUniqueId)
    )
      _.subject.uniqueId = r.certSubjectUniqueId;
    if (((_.subject.hash = F.digest().toHex()), r.certExtensions))
      _.extensions = ul.certificateExtensionsFromAsn1(r.certExtensions);
    else _.extensions = [];
    return ((_.publicKey = ul.publicKeyFromAsn1(r.subjectPublicKeyInfo)), _);
  };
  ul.certificateExtensionsFromAsn1 = function (e) {
    var t = [];
    for (var r = 0; r < e.value.length; ++r) {
      var o = e.value[r];
      for (var d = 0; d < o.value.length; ++d)
        t.push(ul.certificateExtensionFromAsn1(o.value[d]));
    }
    return t;
  };
  ul.certificateExtensionFromAsn1 = function (e) {
    var t = {};
    if (
      ((t.id = Qn.derToOid(e.value[0].value)),
      (t.critical = !1),
      e.value[1].type === Qn.Type.BOOLEAN)
    )
      ((t.critical = e.value[1].value.charCodeAt(0) !== 0),
        (t.value = e.value[2].value));
    else t.value = e.value[1].value;
    if (t.id in Vm) {
      if (((t.name = Vm[t.id]), t.name === "keyUsage")) {
        var r = Qn.fromDer(t.value),
          o = 0,
          d = 0;
        if (r.value.length > 1)
          ((o = r.value.charCodeAt(1)),
            (d = r.value.length > 2 ? r.value.charCodeAt(2) : 0));
        ((t.digitalSignature = (o & 128) === 128),
          (t.nonRepudiation = (o & 64) === 64),
          (t.keyEncipherment = (o & 32) === 32),
          (t.dataEncipherment = (o & 16) === 16),
          (t.keyAgreement = (o & 8) === 8),
          (t.keyCertSign = (o & 4) === 4),
          (t.cRLSign = (o & 2) === 2),
          (t.encipherOnly = (o & 1) === 1),
          (t.decipherOnly = (d & 128) === 128));
      } else if (t.name === "basicConstraints") {
        var r = Qn.fromDer(t.value);
        if (r.value.length > 0 && r.value[0].type === Qn.Type.BOOLEAN)
          t.cA = r.value[0].value.charCodeAt(0) !== 0;
        else t.cA = !1;
        var p = null;
        if (r.value.length > 0 && r.value[0].type === Qn.Type.INTEGER)
          p = r.value[0].value;
        else if (r.value.length > 1) p = r.value[1].value;
        if (p !== null) t.pathLenConstraint = Qn.derToInteger(p);
      } else if (t.name === "extKeyUsage") {
        var r = Qn.fromDer(t.value);
        for (var _ = 0; _ < r.value.length; ++_) {
          var E = Qn.derToOid(r.value[_].value);
          if (E in Vm) t[Vm[E]] = !0;
          else t[E] = !0;
        }
      } else if (t.name === "nsCertType") {
        var r = Qn.fromDer(t.value),
          o = 0;
        if (r.value.length > 1) o = r.value.charCodeAt(1);
        ((t.client = (o & 128) === 128),
          (t.server = (o & 64) === 64),
          (t.email = (o & 32) === 32),
          (t.objsign = (o & 16) === 16),
          (t.reserved = (o & 8) === 8),
          (t.sslCA = (o & 4) === 4),
          (t.emailCA = (o & 2) === 2),
          (t.objCA = (o & 1) === 1));
      } else if (t.name === "subjectAltName" || t.name === "issuerAltName") {
        t.altNames = [];
        var C,
          r = Qn.fromDer(t.value);
        for (var I = 0; I < r.value.length; ++I) {
          C = r.value[I];
          var D = { type: C.type, value: C.value };
          switch ((t.altNames.push(D), C.type)) {
            case 1:
            case 2:
            case 6:
              break;
            case 7:
              D.ip = Fd.util.bytesToIP(C.value);
              break;
            case 8:
              D.oid = Qn.derToOid(C.value);
              break;
            default:
          }
        }
      } else if (t.name === "subjectKeyIdentifier") {
        var r = Qn.fromDer(t.value);
        t.subjectKeyIdentifier = Fd.util.bytesToHex(r.value);
      }
    }
    return t;
  };
  ul.certificationRequestFromAsn1 = function (e, t) {
    var r = {},
      o = [];
    if (!Qn.validate(e, qCr, r, o)) {
      var d = Error(
        "Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.",
      );
      throw ((d.errors = o), d);
    }
    var p = Qn.derToOid(r.publicKeyOid);
    if (p !== ul.oids.rsaEncryption)
      throw Error("Cannot read public key. OID is not RSA.");
    var _ = ul.createCertificationRequest();
    if (
      ((_.version = r.csrVersion ? r.csrVersion.charCodeAt(0) : 0),
      (_.signatureOid = Fd.asn1.derToOid(r.csrSignatureOid)),
      (_.signatureParameters = Wye(_.signatureOid, r.csrSignatureParams, !0)),
      (_.siginfo.algorithmOid = Fd.asn1.derToOid(r.csrSignatureOid)),
      (_.siginfo.parameters = Wye(
        _.siginfo.algorithmOid,
        r.csrSignatureParams,
        !1,
      )),
      (_.signature = r.csrSignature),
      (_.certificationRequestInfo = r.certificationRequestInfo),
      t)
    ) {
      _.md = Gye({
        signatureOid: _.signatureOid,
        type: "certification request",
      });
      var E = Qn.toDer(_.certificationRequestInfo);
      _.md.update(E.getBytes());
    }
    var C = Fd.md.sha1.create();
    return (
      (_.subject.getField = function (I) {
        return uB(_.subject, I);
      }),
      (_.subject.addField = function (I) {
        (lA([I]), _.subject.attributes.push(I));
      }),
      (_.subject.attributes = ul.RDNAttributesAsArray(
        r.certificationRequestInfoSubject,
        C,
      )),
      (_.subject.hash = C.digest().toHex()),
      (_.publicKey = ul.publicKeyFromAsn1(r.subjectPublicKeyInfo)),
      (_.getAttribute = function (I) {
        return uB(_, I);
      }),
      (_.addAttribute = function (I) {
        (lA([I]), _.attributes.push(I));
      }),
      (_.attributes = ul.CRIAttributesAsArray(
        r.certificationRequestInfoAttributes || [],
      )),
      _
    );
  };
  ul.createCertificationRequest = function () {
    var e = {};
    return (
      (e.version = 0),
      (e.signatureOid = null),
      (e.signature = null),
      (e.siginfo = {}),
      (e.siginfo.algorithmOid = null),
      (e.subject = {}),
      (e.subject.getField = function (t) {
        return uB(e.subject, t);
      }),
      (e.subject.addField = function (t) {
        (lA([t]), e.subject.attributes.push(t));
      }),
      (e.subject.attributes = []),
      (e.subject.hash = null),
      (e.publicKey = null),
      (e.attributes = []),
      (e.getAttribute = function (t) {
        return uB(e, t);
      }),
      (e.addAttribute = function (t) {
        (lA([t]), e.attributes.push(t));
      }),
      (e.md = null),
      (e.setSubject = function (t) {
        (lA(t), (e.subject.attributes = t), (e.subject.hash = null));
      }),
      (e.setAttributes = function (t) {
        (lA(t), (e.attributes = t));
      }),
      (e.sign = function (t, r) {
        e.md = r || Fd.md.sha1.create();
        var o = Vm[e.md.algorithm + "WithRSAEncryption"];
        if (!o) {
          var d = Error(
            "Could not compute certification request digest. Unknown message digest algorithm OID.",
          );
          throw ((d.algorithm = e.md.algorithm), d);
        }
        ((e.signatureOid = e.siginfo.algorithmOid = o),
          (e.certificationRequestInfo = ul.getCertificationRequestInfo(e)));
        var p = Qn.toDer(e.certificationRequestInfo);
        (e.md.update(p.getBytes()), (e.signature = t.sign(e.md)));
      }),
      (e.verify = function () {
        var t = !1,
          r = e.md;
        if (r === null) {
          r = Gye({
            signatureOid: e.signatureOid,
            type: "certification request",
          });
          var o =
              e.certificationRequestInfo || ul.getCertificationRequestInfo(e),
            d = Qn.toDer(o);
          r.update(d.getBytes());
        }
        if (r !== null)
          t = yOt({ certificate: e, md: r, signature: e.signature });
        return t;
      }),
      e
    );
  };
  function q4(e) {
    var t = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []),
      r,
      o,
      d = e.attributes;
    for (var p = 0; p < d.length; ++p) {
      r = d[p];
      var _ = r.value,
        E = Qn.Type.PRINTABLESTRING;
      if ("valueTagClass" in r) {
        if (((E = r.valueTagClass), E === Qn.Type.UTF8))
          _ = Fd.util.encodeUtf8(_);
      }
      ((o = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SET, !0, [
        Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
          Qn.create(
            Qn.Class.UNIVERSAL,
            Qn.Type.OID,
            !1,
            Qn.oidToDer(r.type).getBytes(),
          ),
          Qn.create(Qn.Class.UNIVERSAL, E, !1, _),
        ]),
      ])),
        t.value.push(o));
    }
    return t;
  }
  function lA(e) {
    var t;
    for (var r = 0; r < e.length; ++r) {
      if (((t = e[r]), typeof t.name > "u")) {
        if (t.type && t.type in ul.oids) t.name = ul.oids[t.type];
        else if (t.shortName && t.shortName in Ib)
          t.name = ul.oids[Ib[t.shortName]];
      }
      if (typeof t.type > "u")
        if (t.name && t.name in ul.oids) t.type = ul.oids[t.name];
        else {
          var o = Error("Attribute type not specified.");
          throw ((o.attribute = t), o);
        }
      if (typeof t.shortName > "u") {
        if (t.name && t.name in Ib) t.shortName = Ib[t.name];
      }
      if (t.type === Vm.extensionRequest) {
        if (
          ((t.valueConstructed = !0),
          (t.valueTagClass = Qn.Type.SEQUENCE),
          !t.value && t.extensions)
        ) {
          t.value = [];
          for (var d = 0; d < t.extensions.length; ++d)
            t.value.push(ul.certificateExtensionToAsn1(_Ot(t.extensions[d])));
        }
      }
      if (typeof t.value > "u") {
        var o = Error("Attribute value not specified.");
        throw ((o.attribute = t), o);
      }
    }
  }
  function _Ot(e, t) {
    if (((t = t || {}), typeof e.name > "u")) {
      if (e.id && e.id in ul.oids) e.name = ul.oids[e.id];
    }
    if (typeof e.id > "u")
      if (e.name && e.name in ul.oids) e.id = ul.oids[e.name];
      else {
        var r = Error("Extension ID not specified.");
        throw ((r.extension = e), r);
      }
    if (typeof e.value < "u") return e;
    if (e.name === "keyUsage") {
      var o = 0,
        d = 0,
        p = 0;
      if (e.digitalSignature) ((d |= 128), (o = 7));
      if (e.nonRepudiation) ((d |= 64), (o = 6));
      if (e.keyEncipherment) ((d |= 32), (o = 5));
      if (e.dataEncipherment) ((d |= 16), (o = 4));
      if (e.keyAgreement) ((d |= 8), (o = 3));
      if (e.keyCertSign) ((d |= 4), (o = 2));
      if (e.cRLSign) ((d |= 2), (o = 1));
      if (e.encipherOnly) ((d |= 1), (o = 0));
      if (e.decipherOnly) ((p |= 128), (o = 7));
      var _ = String.fromCharCode(o);
      if (p !== 0) _ += String.fromCharCode(d) + String.fromCharCode(p);
      else if (d !== 0) _ += String.fromCharCode(d);
      e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.BITSTRING, !1, _);
    } else if (e.name === "basicConstraints") {
      if (
        ((e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [])),
        e.cA)
      )
        e.value.value.push(
          Qn.create(
            Qn.Class.UNIVERSAL,
            Qn.Type.BOOLEAN,
            !1,
            String.fromCharCode(255),
          ),
        );
      if ("pathLenConstraint" in e)
        e.value.value.push(
          Qn.create(
            Qn.Class.UNIVERSAL,
            Qn.Type.INTEGER,
            !1,
            Qn.integerToDer(e.pathLenConstraint).getBytes(),
          ),
        );
    } else if (e.name === "extKeyUsage") {
      e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []);
      var E = e.value.value;
      for (var C in e) {
        if (e[C] !== !0) continue;
        if (C in Vm)
          E.push(
            Qn.create(
              Qn.Class.UNIVERSAL,
              Qn.Type.OID,
              !1,
              Qn.oidToDer(Vm[C]).getBytes(),
            ),
          );
        else if (C.indexOf(".") !== -1)
          E.push(
            Qn.create(
              Qn.Class.UNIVERSAL,
              Qn.Type.OID,
              !1,
              Qn.oidToDer(C).getBytes(),
            ),
          );
      }
    } else if (e.name === "nsCertType") {
      var o = 0,
        d = 0;
      if (e.client) ((d |= 128), (o = 7));
      if (e.server) ((d |= 64), (o = 6));
      if (e.email) ((d |= 32), (o = 5));
      if (e.objsign) ((d |= 16), (o = 4));
      if (e.reserved) ((d |= 8), (o = 3));
      if (e.sslCA) ((d |= 4), (o = 2));
      if (e.emailCA) ((d |= 2), (o = 1));
      if (e.objCA) ((d |= 1), (o = 0));
      var _ = String.fromCharCode(o);
      if (d !== 0) _ += String.fromCharCode(d);
      e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.BITSTRING, !1, _);
    } else if (e.name === "subjectAltName" || e.name === "issuerAltName") {
      e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []);
      var I;
      for (var D = 0; D < e.altNames.length; ++D) {
        I = e.altNames[D];
        var _ = I.value;
        if (I.type === 7 && I.ip) {
          if (((_ = Fd.util.bytesFromIP(I.ip)), _ === null)) {
            var r = Error(
              'Extension "ip" value is not a valid IPv4 or IPv6 address.',
            );
            throw ((r.extension = e), r);
          }
        } else if (I.type === 8)
          if (I.oid) _ = Qn.oidToDer(Qn.oidToDer(I.oid));
          else _ = Qn.oidToDer(_);
        e.value.value.push(Qn.create(Qn.Class.CONTEXT_SPECIFIC, I.type, !1, _));
      }
    } else if (e.name === "nsComment" && t.cert) {
      if (
        !/^[\x00-\x7F]*$/.test(e.comment) ||
        e.comment.length < 1 ||
        e.comment.length > 128
      )
        throw Error('Invalid "nsComment" content.');
      e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.IA5STRING, !1, e.comment);
    } else if (e.name === "subjectKeyIdentifier" && t.cert) {
      var N = t.cert.generateSubjectKeyIdentifier();
      ((e.subjectKeyIdentifier = N.toHex()),
        (e.value = Qn.create(
          Qn.Class.UNIVERSAL,
          Qn.Type.OCTETSTRING,
          !1,
          N.getBytes(),
        )));
    } else if (e.name === "authorityKeyIdentifier" && t.cert) {
      e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []);
      var E = e.value.value;
      if (e.keyIdentifier) {
        var F =
          e.keyIdentifier === !0
            ? t.cert.generateSubjectKeyIdentifier().getBytes()
            : e.keyIdentifier;
        E.push(Qn.create(Qn.Class.CONTEXT_SPECIFIC, 0, !1, F));
      }
      if (e.authorityCertIssuer) {
        var U = [
          Qn.create(Qn.Class.CONTEXT_SPECIFIC, 4, !0, [
            q4(
              e.authorityCertIssuer === !0
                ? t.cert.issuer
                : e.authorityCertIssuer,
            ),
          ]),
        ];
        E.push(Qn.create(Qn.Class.CONTEXT_SPECIFIC, 1, !0, U));
      }
      if (e.serialNumber) {
        var V = Fd.util.hexToBytes(
          e.serialNumber === !0 ? t.cert.serialNumber : e.serialNumber,
        );
        E.push(Qn.create(Qn.Class.CONTEXT_SPECIFIC, 2, !1, V));
      }
    } else if (e.name === "cRLDistributionPoints") {
      e.value = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []);
      var E = e.value.value,
        re = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []),
        ue = Qn.create(Qn.Class.CONTEXT_SPECIFIC, 0, !0, []),
        I;
      for (var D = 0; D < e.altNames.length; ++D) {
        I = e.altNames[D];
        var _ = I.value;
        if (I.type === 7 && I.ip) {
          if (((_ = Fd.util.bytesFromIP(I.ip)), _ === null)) {
            var r = Error(
              'Extension "ip" value is not a valid IPv4 or IPv6 address.',
            );
            throw ((r.extension = e), r);
          }
        } else if (I.type === 8)
          if (I.oid) _ = Qn.oidToDer(Qn.oidToDer(I.oid));
          else _ = Qn.oidToDer(_);
        ue.value.push(Qn.create(Qn.Class.CONTEXT_SPECIFIC, I.type, !1, _));
      }
      (re.value.push(Qn.create(Qn.Class.CONTEXT_SPECIFIC, 0, !0, [ue])),
        E.push(re));
    }
    if (typeof e.value > "u") {
      var r = Error("Extension value not specified.");
      throw ((r.extension = e), r);
    }
    return e;
  }
  function wGe(e, t) {
    switch (e) {
      case Vm["RSASSA-PSS"]:
        var r = [];
        if (t.hash.algorithmOid !== void 0)
          r.push(
            Qn.create(Qn.Class.CONTEXT_SPECIFIC, 0, !0, [
              Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
                Qn.create(
                  Qn.Class.UNIVERSAL,
                  Qn.Type.OID,
                  !1,
                  Qn.oidToDer(t.hash.algorithmOid).getBytes(),
                ),
                Qn.create(Qn.Class.UNIVERSAL, Qn.Type.NULL, !1, ""),
              ]),
            ]),
          );
        if (t.mgf.algorithmOid !== void 0)
          r.push(
            Qn.create(Qn.Class.CONTEXT_SPECIFIC, 1, !0, [
              Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
                Qn.create(
                  Qn.Class.UNIVERSAL,
                  Qn.Type.OID,
                  !1,
                  Qn.oidToDer(t.mgf.algorithmOid).getBytes(),
                ),
                Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
                  Qn.create(
                    Qn.Class.UNIVERSAL,
                    Qn.Type.OID,
                    !1,
                    Qn.oidToDer(t.mgf.hash.algorithmOid).getBytes(),
                  ),
                  Qn.create(Qn.Class.UNIVERSAL, Qn.Type.NULL, !1, ""),
                ]),
              ]),
            ]),
          );
        if (t.saltLength !== void 0)
          r.push(
            Qn.create(Qn.Class.CONTEXT_SPECIFIC, 2, !0, [
              Qn.create(
                Qn.Class.UNIVERSAL,
                Qn.Type.INTEGER,
                !1,
                Qn.integerToDer(t.saltLength).getBytes(),
              ),
            ]),
          );
        return Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, r);
      default:
        return Qn.create(Qn.Class.UNIVERSAL, Qn.Type.NULL, !1, "");
    }
  }
  function VCr(e) {
    var t = Qn.create(Qn.Class.CONTEXT_SPECIFIC, 0, !0, []);
    if (e.attributes.length === 0) return t;
    var r = e.attributes;
    for (var o = 0; o < r.length; ++o) {
      var d = r[o],
        p = d.value,
        _ = Qn.Type.UTF8;
      if ("valueTagClass" in d) _ = d.valueTagClass;
      if (_ === Qn.Type.UTF8) p = Fd.util.encodeUtf8(p);
      var E = !1;
      if ("valueConstructed" in d) E = d.valueConstructed;
      var C = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
        Qn.create(
          Qn.Class.UNIVERSAL,
          Qn.Type.OID,
          !1,
          Qn.oidToDer(d.type).getBytes(),
        ),
        Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SET, !0, [
          Qn.create(Qn.Class.UNIVERSAL, _, E, p),
        ]),
      ]);
      t.value.push(C);
    }
    return t;
  }
  var KCr = new Date("1950-01-01T00:00:00Z"),
    YCr = new Date("2050-01-01T00:00:00Z");
  function gOt(e) {
    if (e >= KCr && e < YCr)
      return Qn.create(
        Qn.Class.UNIVERSAL,
        Qn.Type.UTCTIME,
        !1,
        Qn.dateToUtcTime(e),
      );
    else
      return Qn.create(
        Qn.Class.UNIVERSAL,
        Qn.Type.GENERALIZEDTIME,
        !1,
        Qn.dateToGeneralizedTime(e),
      );
  }
  ul.getTBSCertificate = function (e) {
    var t = gOt(e.validity.notBefore),
      r = gOt(e.validity.notAfter),
      o = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
        Qn.create(Qn.Class.CONTEXT_SPECIFIC, 0, !0, [
          Qn.create(
            Qn.Class.UNIVERSAL,
            Qn.Type.INTEGER,
            !1,
            Qn.integerToDer(e.version).getBytes(),
          ),
        ]),
        Qn.create(
          Qn.Class.UNIVERSAL,
          Qn.Type.INTEGER,
          !1,
          Fd.util.hexToBytes(e.serialNumber),
        ),
        Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
          Qn.create(
            Qn.Class.UNIVERSAL,
            Qn.Type.OID,
            !1,
            Qn.oidToDer(e.siginfo.algorithmOid).getBytes(),
          ),
          wGe(e.siginfo.algorithmOid, e.siginfo.parameters),
        ]),
        q4(e.issuer),
        Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [t, r]),
        q4(e.subject),
        ul.publicKeyToAsn1(e.publicKey),
      ]);
    if (e.issuer.uniqueId)
      o.value.push(
        Qn.create(Qn.Class.CONTEXT_SPECIFIC, 1, !0, [
          Qn.create(
            Qn.Class.UNIVERSAL,
            Qn.Type.BITSTRING,
            !1,
            String.fromCharCode(0) + e.issuer.uniqueId,
          ),
        ]),
      );
    if (e.subject.uniqueId)
      o.value.push(
        Qn.create(Qn.Class.CONTEXT_SPECIFIC, 2, !0, [
          Qn.create(
            Qn.Class.UNIVERSAL,
            Qn.Type.BITSTRING,
            !1,
            String.fromCharCode(0) + e.subject.uniqueId,
          ),
        ]),
      );
    if (e.extensions.length > 0)
      o.value.push(ul.certificateExtensionsToAsn1(e.extensions));
    return o;
  };
  ul.getCertificationRequestInfo = function (e) {
    var t = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
      Qn.create(
        Qn.Class.UNIVERSAL,
        Qn.Type.INTEGER,
        !1,
        Qn.integerToDer(e.version).getBytes(),
      ),
      q4(e.subject),
      ul.publicKeyToAsn1(e.publicKey),
      VCr(e),
    ]);
    return t;
  };
  ul.distinguishedNameToAsn1 = function (e) {
    return q4(e);
  };
  ul.certificateToAsn1 = function (e) {
    var t = e.tbsCertificate || ul.getTBSCertificate(e);
    return Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
      t,
      Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
        Qn.create(
          Qn.Class.UNIVERSAL,
          Qn.Type.OID,
          !1,
          Qn.oidToDer(e.signatureOid).getBytes(),
        ),
        wGe(e.signatureOid, e.signatureParameters),
      ]),
      Qn.create(
        Qn.Class.UNIVERSAL,
        Qn.Type.BITSTRING,
        !1,
        String.fromCharCode(0) + e.signature,
      ),
    ]);
  };
  ul.certificateExtensionsToAsn1 = function (e) {
    var t = Qn.create(Qn.Class.CONTEXT_SPECIFIC, 3, !0, []),
      r = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []);
    t.value.push(r);
    for (var o = 0; o < e.length; ++o)
      r.value.push(ul.certificateExtensionToAsn1(e[o]));
    return t;
  };
  ul.certificateExtensionToAsn1 = function (e) {
    var t = Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, []);
    if (
      (t.value.push(
        Qn.create(
          Qn.Class.UNIVERSAL,
          Qn.Type.OID,
          !1,
          Qn.oidToDer(e.id).getBytes(),
        ),
      ),
      e.critical)
    )
      t.value.push(
        Qn.create(
          Qn.Class.UNIVERSAL,
          Qn.Type.BOOLEAN,
          !1,
          String.fromCharCode(255),
        ),
      );
    var r = e.value;
    if (typeof e.value !== "string") r = Qn.toDer(r).getBytes();
    return (
      t.value.push(Qn.create(Qn.Class.UNIVERSAL, Qn.Type.OCTETSTRING, !1, r)),
      t
    );
  };
  ul.certificationRequestToAsn1 = function (e) {
    var t = e.certificationRequestInfo || ul.getCertificationRequestInfo(e);
    return Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
      t,
      Qn.create(Qn.Class.UNIVERSAL, Qn.Type.SEQUENCE, !0, [
        Qn.create(
          Qn.Class.UNIVERSAL,
          Qn.Type.OID,
          !1,
          Qn.oidToDer(e.signatureOid).getBytes(),
        ),
        wGe(e.signatureOid, e.signatureParameters),
      ]),
      Qn.create(
        Qn.Class.UNIVERSAL,
        Qn.Type.BITSTRING,
        !1,
        String.fromCharCode(0) + e.signature,
      ),
    ]);
  };
  ul.createCaStore = function (e) {
    var t = { certs: {} };
    ((t.getIssuer = function (_) {
      var E = r(_.issuer);
      return E;
    }),
      (t.addCertificate = function (_) {
        if (typeof _ === "string") _ = Fd.pki.certificateFromPem(_);
        if ((o(_.subject), !t.hasCertificate(_)))
          if (_.subject.hash in t.certs) {
            var E = t.certs[_.subject.hash];
            if (!Fd.util.isArray(E)) E = [E];
            (E.push(_), (t.certs[_.subject.hash] = E));
          } else t.certs[_.subject.hash] = _;
      }),
      (t.hasCertificate = function (_) {
        if (typeof _ === "string") _ = Fd.pki.certificateFromPem(_);
        var E = r(_.subject);
        if (!E) return !1;
        if (!Fd.util.isArray(E)) E = [E];
        var C = Qn.toDer(ul.certificateToAsn1(_)).getBytes();
        for (var I = 0; I < E.length; ++I) {
          var D = Qn.toDer(ul.certificateToAsn1(E[I])).getBytes();
          if (C === D) return !0;
        }
        return !1;
      }),
      (t.listAllCertificates = function () {
        var _ = [];
        for (var E in t.certs)
          if (t.certs.hasOwnProperty(E)) {
            var C = t.certs[E];
            if (!Fd.util.isArray(C)) _.push(C);
            else for (var I = 0; I < C.length; ++I) _.push(C[I]);
          }
        return _;
      }),
      (t.removeCertificate = function (_) {
        var E;
        if (typeof _ === "string") _ = Fd.pki.certificateFromPem(_);
        if ((o(_.subject), !t.hasCertificate(_))) return null;
        var C = r(_.subject);
        if (!Fd.util.isArray(C))
          return (
            (E = t.certs[_.subject.hash]),
            delete t.certs[_.subject.hash],
            E
          );
        var I = Qn.toDer(ul.certificateToAsn1(_)).getBytes();
        for (var D = 0; D < C.length; ++D) {
          var N = Qn.toDer(ul.certificateToAsn1(C[D])).getBytes();
          if (I === N) ((E = C[D]), C.splice(D, 1));
        }
        if (C.length === 0) delete t.certs[_.subject.hash];
        return E;
      }));
    function r(_) {
      return (o(_), t.certs[_.hash] || null);
    }
    function o(_) {
      if (!_.hash) {
        var E = Fd.md.sha1.create();
        ((_.attributes = ul.RDNAttributesAsArray(q4(_), E)),
          (_.hash = E.digest().toHex()));
      }
    }
    if (e)
      for (var d = 0; d < e.length; ++d) {
        var p = e[d];
        t.addCertificate(p);
      }
    return t;
  };
  ul.certificateError = {
    bad_certificate: "forge.pki.BadCertificate",
    unsupported_certificate: "forge.pki.UnsupportedCertificate",
    certificate_revoked: "forge.pki.CertificateRevoked",
    certificate_expired: "forge.pki.CertificateExpired",
    certificate_unknown: "forge.pki.CertificateUnknown",
    unknown_ca: "forge.pki.UnknownCertificateAuthority",
  };
  ul.verifyCertificateChain = function (e, t, r) {
    if (typeof r === "function") r = { verify: r };
    ((r = r || {}), (t = t.slice(0)));
    var o = t.slice(0),
      d = r.validityCheckDate;
    if (typeof d > "u") d = new Date();
    var p = !0,
      _ = null,
      E = 0;
    do {
      var C = t.shift(),
        I = null,
        D = !1;
      if (d) {
        if (d < C.validity.notBefore || d > C.validity.notAfter)
          _ = {
            message: "Certificate is not valid yet or has expired.",
            error: ul.certificateError.certificate_expired,
            notBefore: C.validity.notBefore,
            notAfter: C.validity.notAfter,
            now: d,
          };
      }
      if (_ === null) {
        if (((I = t[0] || e.getIssuer(C)), I === null)) {
          if (C.isIssuer(C)) ((D = !0), (I = C));
        }
        if (I) {
          var N = I;
          if (!Fd.util.isArray(N)) N = [N];
          var F = !1;
          while (!F && N.length > 0) {
            I = N.shift();
            try {
              F = I.verify(C);
            } catch (Me) {}
          }
          if (!F)
            _ = {
              message: "Certificate signature is invalid.",
              error: ul.certificateError.bad_certificate,
            };
        }
        if (_ === null && (!I || D) && !e.hasCertificate(C))
          _ = {
            message: "Certificate is not trusted.",
            error: ul.certificateError.unknown_ca,
          };
      }
      if (_ === null && I && !C.isIssuer(I))
        _ = {
          message: "Certificate issuer is invalid.",
          error: ul.certificateError.bad_certificate,
        };
      if (_ === null) {
        var U = { keyUsage: !0, basicConstraints: !0 };
        for (var V = 0; _ === null && V < C.extensions.length; ++V) {
          var re = C.extensions[V];
          if (re.critical && !(re.name in U))
            _ = {
              message: "Certificate has an unsupported critical extension.",
              error: ul.certificateError.unsupported_certificate,
            };
        }
      }
      if (_ === null && (!p || (t.length === 0 && (!I || D)))) {
        var ue = C.getExtension("basicConstraints"),
          de = C.getExtension("keyUsage");
        if (de !== null) {
          if (!de.keyCertSign || ue === null)
            _ = {
              message:
                "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
              error: ul.certificateError.bad_certificate,
            };
        }
        if (_ === null && ue === null)
          _ = {
            message:
              "Certificate is missing basicConstraints extension and cannot be used as a CA.",
            error: ul.certificateError.bad_certificate,
          };
        if (_ === null && ue !== null && !ue.cA)
          _ = {
            message:
              "Certificate basicConstraints indicates the certificate is not a CA.",
            error: ul.certificateError.bad_certificate,
          };
        if (_ === null && de !== null && "pathLenConstraint" in ue) {
          var _e = E - 1;
          if (_e > ue.pathLenConstraint)
            _ = {
              message:
                "Certificate basicConstraints pathLenConstraint violated.",
              error: ul.certificateError.bad_certificate,
            };
        }
      }
      var Se = _ === null ? !0 : _.error,
        ve = r.verify ? r.verify(Se, E, o) : Se;
      if (ve === !0) _ = null;
      else {
        if (Se === !0)
          _ = {
            message: "The application rejected the certificate.",
            error: ul.certificateError.bad_certificate,
          };
        if (ve || ve === 0) {
          if (typeof ve === "object" && !Fd.util.isArray(ve)) {
            if (ve.message) _.message = ve.message;
            if (ve.error) _.error = ve.error;
          } else if (typeof ve === "string") _.error = ve;
        }
        throw _;
      }
      ((p = !1), ++E);
    } while (t.length > 0);
    return !0;
  };
});
var TGe = commonJS(function (pIs, kOt) {
  var Zy = yp();
  eP();
  B4();
  sB();
  SGe();
  bGe();
  Zx();
  Wee();
  W4();
  Ig();
  zye();
  var { asn1: ao, pki: om } = Zy,
    zee = (kOt.exports = Zy.pkcs12 = Zy.pkcs12 || {}),
    SOt = {
      name: "ContentInfo",
      tagClass: ao.Class.UNIVERSAL,
      type: ao.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "ContentInfo.contentType",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.OID,
          constructed: !1,
          capture: "contentType",
        },
        {
          name: "ContentInfo.content",
          tagClass: ao.Class.CONTEXT_SPECIFIC,
          constructed: !0,
          captureAsn1: "content",
        },
      ],
    },
    XCr = {
      name: "PFX",
      tagClass: ao.Class.UNIVERSAL,
      type: ao.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "PFX.version",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.INTEGER,
          constructed: !1,
          capture: "version",
        },
        SOt,
        {
          name: "PFX.macData",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.SEQUENCE,
          constructed: !0,
          optional: !0,
          captureAsn1: "mac",
          value: [
            {
              name: "PFX.macData.mac",
              tagClass: ao.Class.UNIVERSAL,
              type: ao.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "PFX.macData.mac.digestAlgorithm",
                  tagClass: ao.Class.UNIVERSAL,
                  type: ao.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "PFX.macData.mac.digestAlgorithm.algorithm",
                      tagClass: ao.Class.UNIVERSAL,
                      type: ao.Type.OID,
                      constructed: !1,
                      capture: "macAlgorithm",
                    },
                    {
                      name: "PFX.macData.mac.digestAlgorithm.parameters",
                      optional: !0,
                      tagClass: ao.Class.UNIVERSAL,
                      captureAsn1: "macAlgorithmParameters",
                    },
                  ],
                },
                {
                  name: "PFX.macData.mac.digest",
                  tagClass: ao.Class.UNIVERSAL,
                  type: ao.Type.OCTETSTRING,
                  constructed: !1,
                  capture: "macDigest",
                },
              ],
            },
            {
              name: "PFX.macData.macSalt",
              tagClass: ao.Class.UNIVERSAL,
              type: ao.Type.OCTETSTRING,
              constructed: !1,
              capture: "macSalt",
            },
            {
              name: "PFX.macData.iterations",
              tagClass: ao.Class.UNIVERSAL,
              type: ao.Type.INTEGER,
              constructed: !1,
              optional: !0,
              capture: "macIterations",
            },
          ],
        },
      ],
    },
    QCr = {
      name: "SafeBag",
      tagClass: ao.Class.UNIVERSAL,
      type: ao.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "SafeBag.bagId",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.OID,
          constructed: !1,
          capture: "bagId",
        },
        {
          name: "SafeBag.bagValue",
          tagClass: ao.Class.CONTEXT_SPECIFIC,
          constructed: !0,
          captureAsn1: "bagValue",
        },
        {
          name: "SafeBag.bagAttributes",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.SET,
          constructed: !0,
          optional: !0,
          capture: "bagAttributes",
        },
      ],
    },
    JCr = {
      name: "Attribute",
      tagClass: ao.Class.UNIVERSAL,
      type: ao.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "Attribute.attrId",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.OID,
          constructed: !1,
          capture: "oid",
        },
        {
          name: "Attribute.attrValues",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.SET,
          constructed: !0,
          capture: "values",
        },
      ],
    },
    ZCr = {
      name: "CertBag",
      tagClass: ao.Class.UNIVERSAL,
      type: ao.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "CertBag.certId",
          tagClass: ao.Class.UNIVERSAL,
          type: ao.Type.OID,
          constructed: !1,
          capture: "certId",
        },
        {
          name: "CertBag.certValue",
          tagClass: ao.Class.CONTEXT_SPECIFIC,
          constructed: !0,
          value: [
            {
              name: "CertBag.certValue[0]",
              tagClass: ao.Class.UNIVERSAL,
              type: ao.Class.OCTETSTRING,
              constructed: !1,
              capture: "cert",
            },
          ],
        },
      ],
    };
  function Gee(e, t, r, o) {
    var d = [];
    for (var p = 0; p < e.length; p++)
      for (var _ = 0; _ < e[p].safeBags.length; _++) {
        var E = e[p].safeBags[_];
        if (o !== void 0 && E.type !== o) continue;
        if (t === null) {
          d.push(E);
          continue;
        }
        if (E.attributes[t] !== void 0 && E.attributes[t].indexOf(r) >= 0)
          d.push(E);
      }
    return d;
  }
  zee.pkcs12FromAsn1 = function (e, t, r) {
    if (typeof t === "string") ((r = t), (t = !0));
    else if (t === void 0) t = !0;
    var o = {},
      d = [];
    if (!ao.validate(e, XCr, o, d)) {
      var p = Error(
        "Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.",
      );
      throw ((p.errors = p), p);
    }
    var _ = {
      version: o.version.charCodeAt(0),
      safeContents: [],
      getBags: function (ue) {
        var de = {},
          _e;
        if ("localKeyId" in ue) _e = ue.localKeyId;
        else if ("localKeyIdHex" in ue)
          _e = Zy.util.hexToBytes(ue.localKeyIdHex);
        if (_e === void 0 && !("friendlyName" in ue) && "bagType" in ue)
          de[ue.bagType] = Gee(_.safeContents, null, null, ue.bagType);
        if (_e !== void 0)
          de.localKeyId = Gee(_.safeContents, "localKeyId", _e, ue.bagType);
        if ("friendlyName" in ue)
          de.friendlyName = Gee(
            _.safeContents,
            "friendlyName",
            ue.friendlyName,
            ue.bagType,
          );
        return de;
      },
      getBagsByFriendlyName: function (ue, de) {
        return Gee(_.safeContents, "friendlyName", ue, de);
      },
      getBagsByLocalKeyId: function (ue, de) {
        return Gee(_.safeContents, "localKeyId", ue, de);
      },
    };
    if (o.version.charCodeAt(0) !== 3) {
      var p = Error("PKCS#12 PFX of version other than 3 not supported.");
      throw ((p.version = o.version.charCodeAt(0)), p);
    }
    if (ao.derToOid(o.contentType) !== om.oids.data) {
      var p = Error("Only PKCS#12 PFX in password integrity mode supported.");
      throw ((p.oid = ao.derToOid(o.contentType)), p);
    }
    var E = o.content.value[0];
    if (E.tagClass !== ao.Class.UNIVERSAL || E.type !== ao.Type.OCTETSTRING)
      throw Error("PKCS#12 authSafe content data is not an OCTET STRING.");
    if (((E = EGe(E)), o.mac)) {
      var C = null,
        I = 0,
        D = ao.derToOid(o.macAlgorithm);
      switch (D) {
        case om.oids.sha1:
          ((C = Zy.md.sha1.create()), (I = 20));
          break;
        case om.oids.sha256:
          ((C = Zy.md.sha256.create()), (I = 32));
          break;
        case om.oids.sha384:
          ((C = Zy.md.sha384.create()), (I = 48));
          break;
        case om.oids.sha512:
          ((C = Zy.md.sha512.create()), (I = 64));
          break;
        case om.oids.md5:
          ((C = Zy.md.md5.create()), (I = 16));
          break;
      }
      if (C === null)
        throw Error("PKCS#12 uses unsupported MAC algorithm: " + D);
      var N = new Zy.util.ByteBuffer(o.macSalt),
        F =
          "macIterations" in o
            ? parseInt(Zy.util.bytesToHex(o.macIterations), 16)
            : 1,
        U = zee.generateKey(r, N, 3, F, I, C),
        V = Zy.hmac.create();
      (V.start(C, U), V.update(E.value));
      var re = V.getMac();
      if (re.getBytes() !== o.macDigest)
        throw Error("PKCS#12 MAC could not be verified. Invalid password?");
    } else if (Array.isArray(e.value) && e.value.length > 2)
      throw Error(
        "Invalid PKCS#12. macData field present but MAC was not validated.",
      );
    return (exr(_, E.value, t, r), _);
  };
  function EGe(e) {
    if (e.composed || e.constructed) {
      var t = Zy.util.createBuffer();
      for (var r = 0; r < e.value.length; ++r) t.putBytes(e.value[r].value);
      ((e.composed = e.constructed = !1), (e.value = t.getBytes()));
    }
    return e;
  }
  function exr(e, t, r, o) {
    if (
      ((t = ao.fromDer(t, r)),
      t.tagClass !== ao.Class.UNIVERSAL ||
        t.type !== ao.Type.SEQUENCE ||
        t.constructed !== !0)
    )
      throw Error(
        "PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo",
      );
    for (var d = 0; d < t.value.length; d++) {
      var p = t.value[d],
        _ = {},
        E = [];
      if (!ao.validate(p, SOt, _, E)) {
        var C = Error("Cannot read ContentInfo.");
        throw ((C.errors = E), C);
      }
      var I = { encrypted: !1 },
        D = null,
        N = _.content.value[0];
      switch (ao.derToOid(_.contentType)) {
        case om.oids.data:
          if (
            N.tagClass !== ao.Class.UNIVERSAL ||
            N.type !== ao.Type.OCTETSTRING
          )
            throw Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
          D = EGe(N).value;
          break;
        case om.oids.encryptedData:
          ((D = txr(N, o)), (I.encrypted = !0));
          break;
        default:
          var C = Error("Unsupported PKCS#12 contentType.");
          throw ((C.contentType = ao.derToOid(_.contentType)), C);
      }
      ((I.safeBags = nxr(D, r, o)), e.safeContents.push(I));
    }
  }
  function txr(e, t) {
    var r = {},
      o = [];
    if (!ao.validate(e, Zy.pkcs7.asn1.encryptedDataValidator, r, o)) {
      var d = Error("Cannot read EncryptedContentInfo.");
      throw ((d.errors = o), d);
    }
    var p = ao.derToOid(r.contentType);
    if (p !== om.oids.data) {
      var d = Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");
      throw ((d.oid = p), d);
    }
    p = ao.derToOid(r.encAlgorithm);
    var _ = om.pbe.getCipher(p, r.encParameter, t),
      E = EGe(r.encryptedContentAsn1),
      C = Zy.util.createBuffer(E.value);
    if ((_.update(C), !_.finish()))
      throw Error("Failed to decrypt PKCS#12 SafeContents.");
    return _.output.getBytes();
  }
  function nxr(e, t, r) {
    if (!t && e.length === 0) return [];
    if (
      ((e = ao.fromDer(e, t)),
      e.tagClass !== ao.Class.UNIVERSAL ||
        e.type !== ao.Type.SEQUENCE ||
        e.constructed !== !0)
    )
      throw Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
    var o = [];
    for (var d = 0; d < e.value.length; d++) {
      var p = e.value[d],
        _ = {},
        E = [];
      if (!ao.validate(p, QCr, _, E)) {
        var C = Error("Cannot read SafeBag.");
        throw ((C.errors = E), C);
      }
      var I = { type: ao.derToOid(_.bagId), attributes: rxr(_.bagAttributes) };
      o.push(I);
      var D,
        N,
        F = _.bagValue.value[0];
      switch (I.type) {
        case om.oids.pkcs8ShroudedKeyBag:
          if (((F = om.decryptPrivateKeyInfo(F, r)), F === null))
            throw Error(
              "Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?",
            );
        case om.oids.keyBag:
          try {
            I.key = om.privateKeyFromAsn1(F);
          } catch (V) {
            ((I.key = null), (I.asn1 = F));
          }
          continue;
        case om.oids.certBag:
          ((D = ZCr),
            (N = function () {
              if (ao.derToOid(_.certId) !== om.oids.x509Certificate) {
                var V = Error(
                  "Unsupported certificate type, only X.509 supported.",
                );
                throw ((V.oid = ao.derToOid(_.certId)), V);
              }
              var re = ao.fromDer(_.cert, t);
              try {
                I.cert = om.certificateFromAsn1(re, !0);
              } catch (ue) {
                ((I.cert = null), (I.asn1 = re));
              }
            }));
          break;
        default:
          var C = Error("Unsupported PKCS#12 SafeBag type.");
          throw ((C.oid = I.type), C);
      }
      if (D !== void 0 && !ao.validate(F, D, _, E)) {
        var C = Error("Cannot read PKCS#12 " + D.name);
        throw ((C.errors = E), C);
      }
      N();
    }
    return o;
  }
  function rxr(e) {
    var t = {};
    if (e !== void 0)
      for (var r = 0; r < e.length; ++r) {
        var o = {},
          d = [];
        if (!ao.validate(e[r], JCr, o, d)) {
          var p = Error("Cannot read PKCS#12 BagAttribute.");
          throw ((p.errors = d), p);
        }
        var _ = ao.derToOid(o.oid);
        if (om.oids[_] === void 0) continue;
        t[om.oids[_]] = [];
        for (var E = 0; E < o.values.length; ++E)
          t[om.oids[_]].push(o.values[E].value);
      }
    return t;
  }
  zee.toPkcs12Asn1 = function (e, t, r, o) {
    if (
      ((o = o || {}),
      (o.saltSize = o.saltSize || 8),
      (o.count = o.count || 2048),
      (o.algorithm = o.algorithm || o.encAlgorithm || "aes128"),
      !("useMac" in o))
    )
      o.useMac = !0;
    if (!("localKeyId" in o)) o.localKeyId = null;
    if (!("generateLocalKeyId" in o)) o.generateLocalKeyId = !0;
    var d = o.localKeyId,
      p;
    if (d !== null) d = Zy.util.hexToBytes(d);
    else if (o.generateLocalKeyId)
      if (t) {
        var _ = Zy.util.isArray(t) ? t[0] : t;
        if (typeof _ === "string") _ = om.certificateFromPem(_);
        var E = Zy.md.sha1.create();
        (E.update(ao.toDer(om.certificateToAsn1(_)).getBytes()),
          (d = E.digest().getBytes()));
      } else d = Zy.random.getBytes(20);
    var C = [];
    if (d !== null)
      C.push(
        ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OID,
            !1,
            ao.oidToDer(om.oids.localKeyId).getBytes(),
          ),
          ao.create(ao.Class.UNIVERSAL, ao.Type.SET, !0, [
            ao.create(ao.Class.UNIVERSAL, ao.Type.OCTETSTRING, !1, d),
          ]),
        ]),
      );
    if ("friendlyName" in o)
      C.push(
        ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OID,
            !1,
            ao.oidToDer(om.oids.friendlyName).getBytes(),
          ),
          ao.create(ao.Class.UNIVERSAL, ao.Type.SET, !0, [
            ao.create(
              ao.Class.UNIVERSAL,
              ao.Type.BMPSTRING,
              !1,
              o.friendlyName,
            ),
          ]),
        ]),
      );
    if (C.length > 0) p = ao.create(ao.Class.UNIVERSAL, ao.Type.SET, !0, C);
    var I = [],
      D = [];
    if (t !== null)
      if (Zy.util.isArray(t)) D = t;
      else D = [t];
    var N = [];
    for (var F = 0; F < D.length; ++F) {
      if (((t = D[F]), typeof t === "string")) t = om.certificateFromPem(t);
      var U = F === 0 ? p : void 0,
        V = om.certificateToAsn1(t),
        re = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OID,
            !1,
            ao.oidToDer(om.oids.certBag).getBytes(),
          ),
          ao.create(ao.Class.CONTEXT_SPECIFIC, 0, !0, [
            ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
              ao.create(
                ao.Class.UNIVERSAL,
                ao.Type.OID,
                !1,
                ao.oidToDer(om.oids.x509Certificate).getBytes(),
              ),
              ao.create(ao.Class.CONTEXT_SPECIFIC, 0, !0, [
                ao.create(
                  ao.Class.UNIVERSAL,
                  ao.Type.OCTETSTRING,
                  !1,
                  ao.toDer(V).getBytes(),
                ),
              ]),
            ]),
          ]),
          U,
        ]);
      N.push(re);
    }
    if (N.length > 0) {
      var ue = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, N),
        de = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OID,
            !1,
            ao.oidToDer(om.oids.data).getBytes(),
          ),
          ao.create(ao.Class.CONTEXT_SPECIFIC, 0, !0, [
            ao.create(
              ao.Class.UNIVERSAL,
              ao.Type.OCTETSTRING,
              !1,
              ao.toDer(ue).getBytes(),
            ),
          ]),
        ]);
      I.push(de);
    }
    var _e = null;
    if (e !== null) {
      var Se = om.wrapRsaPrivateKey(om.privateKeyToAsn1(e));
      if (r === null)
        _e = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OID,
            !1,
            ao.oidToDer(om.oids.keyBag).getBytes(),
          ),
          ao.create(ao.Class.CONTEXT_SPECIFIC, 0, !0, [Se]),
          p,
        ]);
      else
        _e = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OID,
            !1,
            ao.oidToDer(om.oids.pkcs8ShroudedKeyBag).getBytes(),
          ),
          ao.create(ao.Class.CONTEXT_SPECIFIC, 0, !0, [
            om.encryptPrivateKeyInfo(Se, r, o),
          ]),
          p,
        ]);
      var ve = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [_e]),
        Me = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OID,
            !1,
            ao.oidToDer(om.oids.data).getBytes(),
          ),
          ao.create(ao.Class.CONTEXT_SPECIFIC, 0, !0, [
            ao.create(
              ao.Class.UNIVERSAL,
              ao.Type.OCTETSTRING,
              !1,
              ao.toDer(ve).getBytes(),
            ),
          ]),
        ]);
      I.push(Me);
    }
    var xe = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, I),
      Oe;
    if (o.useMac) {
      var E = Zy.md.sha1.create(),
        Ne = new Zy.util.ByteBuffer(Zy.random.getBytes(o.saltSize)),
        De = o.count,
        e = zee.generateKey(r, Ne, 3, De, 20),
        He = Zy.hmac.create();
      (He.start(E, e), He.update(ao.toDer(xe).getBytes()));
      var je = He.getMac();
      Oe = ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
        ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
          ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
            ao.create(
              ao.Class.UNIVERSAL,
              ao.Type.OID,
              !1,
              ao.oidToDer(om.oids.sha1).getBytes(),
            ),
            ao.create(ao.Class.UNIVERSAL, ao.Type.NULL, !1, ""),
          ]),
          ao.create(ao.Class.UNIVERSAL, ao.Type.OCTETSTRING, !1, je.getBytes()),
        ]),
        ao.create(ao.Class.UNIVERSAL, ao.Type.OCTETSTRING, !1, Ne.getBytes()),
        ao.create(
          ao.Class.UNIVERSAL,
          ao.Type.INTEGER,
          !1,
          ao.integerToDer(De).getBytes(),
        ),
      ]);
    }
    return ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
      ao.create(
        ao.Class.UNIVERSAL,
        ao.Type.INTEGER,
        !1,
        ao.integerToDer(3).getBytes(),
      ),
      ao.create(ao.Class.UNIVERSAL, ao.Type.SEQUENCE, !0, [
        ao.create(
          ao.Class.UNIVERSAL,
          ao.Type.OID,
          !1,
          ao.oidToDer(om.oids.data).getBytes(),
        ),
        ao.create(ao.Class.CONTEXT_SPECIFIC, 0, !0, [
          ao.create(
            ao.Class.UNIVERSAL,
            ao.Type.OCTETSTRING,
            !1,
            ao.toDer(xe).getBytes(),
          ),
        ]),
      ]),
      Oe,
    ]);
  };
  zee.generateKey = Zy.pbe.generatePkcs12Key;
});
var CGe = commonJS(function (mIs, wOt) {
  var dB = yp();
  eP();
  sB();
  bGe();
  MW();
  Nye();
  TGe();
  jye();
  Wee();
  Ig();
  zye();
  var vGe = dB.asn1,
    V4 = (wOt.exports = dB.pki = dB.pki || {});
  V4.pemToDer = function (e) {
    var t = dB.pem.decode(e)[0];
    if (t.procType && t.procType.type === "ENCRYPTED")
      throw Error("Could not convert PEM to DER; PEM is encrypted.");
    return dB.util.createBuffer(t.body);
  };
  V4.privateKeyFromPem = function (e) {
    var t = dB.pem.decode(e)[0];
    if (t.type !== "PRIVATE KEY" && t.type !== "RSA PRIVATE KEY") {
      var r = Error(
        'Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".',
      );
      throw ((r.headerType = t.type), r);
    }
    if (t.procType && t.procType.type === "ENCRYPTED")
      throw Error("Could not convert private key from PEM; PEM is encrypted.");
    var o = vGe.fromDer(t.body);
    return V4.privateKeyFromAsn1(o);
  };
  V4.privateKeyToPem = function (e, t) {
    var r = {
      type: "RSA PRIVATE KEY",
      body: vGe.toDer(V4.privateKeyToAsn1(e)).getBytes(),
    };
    return dB.pem.encode(r, { maxline: t });
  };
  V4.privateKeyInfoToPem = function (e, t) {
    var r = { type: "PRIVATE KEY", body: vGe.toDer(e).getBytes() };
    return dB.pem.encode(r, { maxline: t });
  };
});
var MGe = commonJS(function (gIs, POt) {
  var Qi = yp();
  eP();
  B4();
  Iye();
  MW();
  CGe();
  Zx();
  W4();
  Ig();
  var Kye = function (e, t, r, o) {
      var d = Qi.util.createBuffer(),
        p = e.length >> 1,
        _ = p + (e.length & 1),
        E = e.substr(0, _),
        C = e.substr(p, _),
        I = Qi.util.createBuffer(),
        D = Qi.hmac.create();
      r = t + r;
      var N = Math.ceil(o / 16),
        F = Math.ceil(o / 20);
      D.start("MD5", E);
      var U = Qi.util.createBuffer();
      I.putBytes(r);
      for (var V = 0; V < N; ++V)
        (D.start(null, null),
          D.update(I.getBytes()),
          I.putBuffer(D.digest()),
          D.start(null, null),
          D.update(I.bytes() + r),
          U.putBuffer(D.digest()));
      D.start("SHA1", C);
      var re = Qi.util.createBuffer();
      (I.clear(), I.putBytes(r));
      for (var V = 0; V < F; ++V)
        (D.start(null, null),
          D.update(I.getBytes()),
          I.putBuffer(D.digest()),
          D.start(null, null),
          D.update(I.bytes() + r),
          re.putBuffer(D.digest()));
      return (d.putBytes(Qi.util.xorBytes(U.getBytes(), re.getBytes(), o)), d);
    },
    oxr = function (e, t, r) {
      var o = Qi.hmac.create();
      o.start("SHA1", e);
      var d = Qi.util.createBuffer();
      return (
        d.putInt32(t[0]),
        d.putInt32(t[1]),
        d.putByte(r.type),
        d.putByte(r.version.major),
        d.putByte(r.version.minor),
        d.putInt16(r.length),
        d.putBytes(r.fragment.bytes()),
        o.update(d.getBytes()),
        o.digest().getBytes()
      );
    },
    sxr = function (e, t, r) {
      var o = !1;
      try {
        var d = e.deflate(t.fragment.getBytes());
        ((t.fragment = Qi.util.createBuffer(d)),
          (t.length = d.length),
          (o = !0));
      } catch (p) {}
      return o;
    },
    ixr = function (e, t, r) {
      var o = !1;
      try {
        var d = e.inflate(t.fragment.getBytes());
        ((t.fragment = Qi.util.createBuffer(d)),
          (t.length = d.length),
          (o = !0));
      } catch (p) {}
      return o;
    },
    Sx = function (e, t) {
      var r = 0;
      switch (t) {
        case 1:
          r = e.getByte();
          break;
        case 2:
          r = e.getInt16();
          break;
        case 3:
          r = e.getInt24();
          break;
        case 4:
          r = e.getInt32();
          break;
      }
      return Qi.util.createBuffer(e.getBytes(r));
    },
    pA = function (e, t, r) {
      (e.putInt(r.length(), t << 3), e.putBuffer(r));
    },
    lr = {};
  lr.Versions = {
    TLS_1_0: { major: 3, minor: 1 },
    TLS_1_1: { major: 3, minor: 2 },
    TLS_1_2: { major: 3, minor: 3 },
  };
  lr.SupportedVersions = [lr.Versions.TLS_1_1, lr.Versions.TLS_1_0];
  lr.Version = lr.SupportedVersions[0];
  lr.MaxFragment = 15360;
  lr.ConnectionEnd = { server: 0, client: 1 };
  lr.PRFAlgorithm = { tls_prf_sha256: 0 };
  lr.BulkCipherAlgorithm = { none: null, rc4: 0, des3: 1, aes: 2 };
  lr.CipherType = { stream: 0, block: 1, aead: 2 };
  lr.MACAlgorithm = {
    none: null,
    hmac_md5: 0,
    hmac_sha1: 1,
    hmac_sha256: 2,
    hmac_sha384: 3,
    hmac_sha512: 4,
  };
  lr.CompressionMethod = { none: 0, deflate: 1 };
  lr.ContentType = {
    change_cipher_spec: 20,
    alert: 21,
    handshake: 22,
    application_data: 23,
    heartbeat: 24,
  };
  lr.HandshakeType = {
    hello_request: 0,
    client_hello: 1,
    server_hello: 2,
    certificate: 11,
    server_key_exchange: 12,
    certificate_request: 13,
    server_hello_done: 14,
    certificate_verify: 15,
    client_key_exchange: 16,
    finished: 20,
  };
  lr.Alert = {};
  lr.Alert.Level = { warning: 1, fatal: 2 };
  lr.Alert.Description = {
    close_notify: 0,
    unexpected_message: 10,
    bad_record_mac: 20,
    decryption_failed: 21,
    record_overflow: 22,
    decompression_failure: 30,
    handshake_failure: 40,
    bad_certificate: 42,
    unsupported_certificate: 43,
    certificate_revoked: 44,
    certificate_expired: 45,
    certificate_unknown: 46,
    illegal_parameter: 47,
    unknown_ca: 48,
    access_denied: 49,
    decode_error: 50,
    decrypt_error: 51,
    export_restriction: 60,
    protocol_version: 70,
    insufficient_security: 71,
    internal_error: 80,
    user_canceled: 90,
    no_renegotiation: 100,
  };
  lr.HeartbeatMessageType = { heartbeat_request: 1, heartbeat_response: 2 };
  lr.CipherSuites = {};
  lr.getCipherSuite = function (e) {
    var t = null;
    for (var r in lr.CipherSuites) {
      var o = lr.CipherSuites[r];
      if (o.id[0] === e.charCodeAt(0) && o.id[1] === e.charCodeAt(1)) {
        t = o;
        break;
      }
    }
    return t;
  };
  lr.handleUnexpected = function (e, t) {
    var r = !e.open && e.entity === lr.ConnectionEnd.client;
    if (!r)
      e.error(e, {
        message: "Unexpected message. Received TLS record out of order.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.unexpected_message,
        },
      });
  };
  lr.handleHelloRequest = function (e, t, r) {
    if (!e.handshaking && e.handshakes > 0)
      (lr.queue(
        e,
        lr.createAlert(e, {
          level: lr.Alert.Level.warning,
          description: lr.Alert.Description.no_renegotiation,
        }),
      ),
        lr.flush(e));
    e.process();
  };
  lr.parseHelloMessage = function (e, t, r) {
    var o = null,
      d = e.entity === lr.ConnectionEnd.client;
    if (r < 38)
      e.error(e, {
        message: d
          ? "Invalid ServerHello message. Message too short."
          : "Invalid ClientHello message. Message too short.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.illegal_parameter,
        },
      });
    else {
      var p = t.fragment,
        _ = p.length();
      if (
        ((o = {
          version: { major: p.getByte(), minor: p.getByte() },
          random: Qi.util.createBuffer(p.getBytes(32)),
          session_id: Sx(p, 1),
          extensions: [],
        }),
        d)
      )
        ((o.cipher_suite = p.getBytes(2)),
          (o.compression_method = p.getByte()));
      else ((o.cipher_suites = Sx(p, 2)), (o.compression_methods = Sx(p, 1)));
      if (((_ = r - (_ - p.length())), _ > 0)) {
        var E = Sx(p, 2);
        while (E.length() > 0)
          o.extensions.push({
            type: [E.getByte(), E.getByte()],
            data: Sx(E, 2),
          });
        if (!d)
          for (var C = 0; C < o.extensions.length; ++C) {
            var I = o.extensions[C];
            if (I.type[0] === 0 && I.type[1] === 0) {
              var D = Sx(I.data, 2);
              while (D.length() > 0) {
                var N = D.getByte();
                if (N !== 0) break;
                e.session.extensions.server_name.serverNameList.push(
                  Sx(D, 2).getBytes(),
                );
              }
            }
          }
      }
      if (e.session.version) {
        if (
          o.version.major !== e.session.version.major ||
          o.version.minor !== e.session.version.minor
        )
          return e.error(e, {
            message: "TLS version change is disallowed during renegotiation.",
            send: !0,
            alert: {
              level: lr.Alert.Level.fatal,
              description: lr.Alert.Description.protocol_version,
            },
          });
      }
      if (d) e.session.cipherSuite = lr.getCipherSuite(o.cipher_suite);
      else {
        var F = Qi.util.createBuffer(o.cipher_suites.bytes());
        while (F.length() > 0)
          if (
            ((e.session.cipherSuite = lr.getCipherSuite(F.getBytes(2))),
            e.session.cipherSuite !== null)
          )
            break;
      }
      if (e.session.cipherSuite === null)
        return e.error(e, {
          message: "No cipher suites in common.",
          send: !0,
          alert: {
            level: lr.Alert.Level.fatal,
            description: lr.Alert.Description.handshake_failure,
          },
          cipherSuite: Qi.util.bytesToHex(o.cipher_suite),
        });
      if (d) e.session.compressionMethod = o.compression_method;
      else e.session.compressionMethod = lr.CompressionMethod.none;
    }
    return o;
  };
  lr.createSecurityParameters = function (e, t) {
    var r = e.entity === lr.ConnectionEnd.client,
      o = t.random.bytes(),
      d = r ? e.session.sp.client_random : o,
      p = r ? o : lr.createRandom().getBytes();
    e.session.sp = {
      entity: e.entity,
      prf_algorithm: lr.PRFAlgorithm.tls_prf_sha256,
      bulk_cipher_algorithm: null,
      cipher_type: null,
      enc_key_length: null,
      block_length: null,
      fixed_iv_length: null,
      record_iv_length: null,
      mac_algorithm: null,
      mac_length: null,
      mac_key_length: null,
      compression_algorithm: e.session.compressionMethod,
      pre_master_secret: null,
      master_secret: null,
      client_random: d,
      server_random: p,
    };
  };
  lr.handleServerHello = function (e, t, r) {
    var o = lr.parseHelloMessage(e, t, r);
    if (e.fail) return;
    if (o.version.minor <= e.version.minor) e.version.minor = o.version.minor;
    else
      return e.error(e, {
        message: "Incompatible TLS version.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.protocol_version,
        },
      });
    e.session.version = e.version;
    var d = o.session_id.bytes();
    if (d.length > 0 && d === e.session.id)
      ((e.expect = vOt),
        (e.session.resuming = !0),
        (e.session.sp.server_random = o.random.bytes()));
    else
      ((e.expect = lxr),
        (e.session.resuming = !1),
        lr.createSecurityParameters(e, o));
    ((e.session.id = d), e.process());
  };
  lr.handleClientHello = function (e, t, r) {
    var o = lr.parseHelloMessage(e, t, r);
    if (e.fail) return;
    var d = o.session_id.bytes(),
      p = null;
    if (e.sessionCache) {
      if (((p = e.sessionCache.getSession(d)), p === null)) d = "";
      else if (
        p.version.major !== o.version.major ||
        p.version.minor > o.version.minor
      )
        ((p = null), (d = ""));
    }
    if (d.length === 0) d = Qi.random.getBytes(32);
    if (
      ((e.session.id = d),
      (e.session.clientHelloVersion = o.version),
      (e.session.sp = {}),
      p)
    )
      ((e.version = e.session.version = p.version), (e.session.sp = p.sp));
    else {
      var _;
      for (var E = 1; E < lr.SupportedVersions.length; ++E)
        if (((_ = lr.SupportedVersions[E]), _.minor <= o.version.minor)) break;
      ((e.version = { major: _.major, minor: _.minor }),
        (e.session.version = e.version));
    }
    if (p !== null)
      ((e.expect = PGe),
        (e.session.resuming = !0),
        (e.session.sp.client_random = o.random.bytes()));
    else
      ((e.expect = e.verifyClient !== !1 ? gxr : RGe),
        (e.session.resuming = !1),
        lr.createSecurityParameters(e, o));
    if (
      ((e.open = !0),
      lr.queue(
        e,
        lr.createRecord(e, {
          type: lr.ContentType.handshake,
          data: lr.createServerHello(e),
        }),
      ),
      e.session.resuming)
    )
      (lr.queue(
        e,
        lr.createRecord(e, {
          type: lr.ContentType.change_cipher_spec,
          data: lr.createChangeCipherSpec(),
        }),
      ),
        (e.state.pending = lr.createConnectionState(e)),
        (e.state.current.write = e.state.pending.write),
        lr.queue(
          e,
          lr.createRecord(e, {
            type: lr.ContentType.handshake,
            data: lr.createFinished(e),
          }),
        ));
    else if (
      (lr.queue(
        e,
        lr.createRecord(e, {
          type: lr.ContentType.handshake,
          data: lr.createCertificate(e),
        }),
      ),
      !e.fail)
    ) {
      if (
        (lr.queue(
          e,
          lr.createRecord(e, {
            type: lr.ContentType.handshake,
            data: lr.createServerKeyExchange(e),
          }),
        ),
        e.verifyClient !== !1)
      )
        lr.queue(
          e,
          lr.createRecord(e, {
            type: lr.ContentType.handshake,
            data: lr.createCertificateRequest(e),
          }),
        );
      lr.queue(
        e,
        lr.createRecord(e, {
          type: lr.ContentType.handshake,
          data: lr.createServerHelloDone(e),
        }),
      );
    }
    (lr.flush(e), e.process());
  };
  lr.handleCertificate = function (e, t, r) {
    if (r < 3)
      return e.error(e, {
        message: "Invalid Certificate message. Message too short.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.illegal_parameter,
        },
      });
    var o = t.fragment,
      d = { certificate_list: Sx(o, 3) },
      p,
      _,
      E = [];
    try {
      while (d.certificate_list.length() > 0)
        ((p = Sx(d.certificate_list, 3)),
          (_ = Qi.asn1.fromDer(p)),
          (p = Qi.pki.certificateFromAsn1(_, !0)),
          E.push(p));
    } catch (I) {
      return e.error(e, {
        message: "Could not parse certificate list.",
        cause: I,
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.bad_certificate,
        },
      });
    }
    var C = e.entity === lr.ConnectionEnd.client;
    if ((C || e.verifyClient === !0) && E.length === 0)
      e.error(e, {
        message: C
          ? "No server certificate provided."
          : "No client certificate provided.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.illegal_parameter,
        },
      });
    else if (E.length === 0) e.expect = C ? EOt : RGe;
    else {
      if (C) e.session.serverCertificate = E[0];
      else e.session.clientCertificate = E[0];
      if (lr.verifyCertificateChain(e, E)) e.expect = C ? EOt : RGe;
    }
    e.process();
  };
  lr.handleServerKeyExchange = function (e, t, r) {
    if (r > 0)
      return e.error(e, {
        message: "Invalid key parameters. Only RSA is supported.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.unsupported_certificate,
        },
      });
    ((e.expect = cxr), e.process());
  };
  lr.handleClientKeyExchange = function (e, t, r) {
    if (r < 48)
      return e.error(e, {
        message: "Invalid key parameters. Only RSA is supported.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.unsupported_certificate,
        },
      });
    var o = t.fragment,
      d = { enc_pre_master_secret: Sx(o, 2).getBytes() },
      p = null;
    if (e.getPrivateKey)
      try {
        ((p = e.getPrivateKey(e, e.session.serverCertificate)),
          (p = Qi.pki.privateKeyFromPem(p)));
      } catch (C) {
        e.error(e, {
          message: "Could not get private key.",
          cause: C,
          send: !0,
          alert: {
            level: lr.Alert.Level.fatal,
            description: lr.Alert.Description.internal_error,
          },
        });
      }
    if (p === null)
      return e.error(e, {
        message: "No private key set.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.internal_error,
        },
      });
    try {
      var _ = e.session.sp;
      _.pre_master_secret = p.decrypt(d.enc_pre_master_secret);
      var E = e.session.clientHelloVersion;
      if (
        E.major !== _.pre_master_secret.charCodeAt(0) ||
        E.minor !== _.pre_master_secret.charCodeAt(1)
      )
        throw Error("TLS version rollback attack detected.");
    } catch (C) {
      _.pre_master_secret = Qi.random.getBytes(48);
    }
    if (((e.expect = PGe), e.session.clientCertificate !== null))
      e.expect = hxr;
    e.process();
  };
  lr.handleCertificateRequest = function (e, t, r) {
    if (r < 3)
      return e.error(e, {
        message: "Invalid CertificateRequest. Message too short.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.illegal_parameter,
        },
      });
    var o = t.fragment,
      d = { certificate_types: Sx(o, 1), certificate_authorities: Sx(o, 2) };
    ((e.session.certificateRequest = d), (e.expect = uxr), e.process());
  };
  lr.handleCertificateVerify = function (e, t, r) {
    if (r < 2)
      return e.error(e, {
        message: "Invalid CertificateVerify. Message too short.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.illegal_parameter,
        },
      });
    var o = t.fragment;
    o.read -= 4;
    var d = o.bytes();
    o.read += 4;
    var p = { signature: Sx(o, 2).getBytes() },
      _ = Qi.util.createBuffer();
    (_.putBuffer(e.session.md5.digest()),
      _.putBuffer(e.session.sha1.digest()),
      (_ = _.getBytes()));
    try {
      var E = e.session.clientCertificate;
      if (!E.publicKey.verify(_, p.signature, "NONE"))
        throw Error("CertificateVerify signature does not match.");
      (e.session.md5.update(d), e.session.sha1.update(d));
    } catch (C) {
      return e.error(e, {
        message: "Bad signature in CertificateVerify.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.handshake_failure,
        },
      });
    }
    ((e.expect = PGe), e.process());
  };
  lr.handleServerHelloDone = function (e, t, r) {
    if (r > 0)
      return e.error(e, {
        message: "Invalid ServerHelloDone message. Invalid length.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.record_overflow,
        },
      });
    if (e.serverCertificate === null) {
      var o = {
          message: "No server certificate provided. Not enough security.",
          send: !0,
          alert: {
            level: lr.Alert.Level.fatal,
            description: lr.Alert.Description.insufficient_security,
          },
        },
        d = 0,
        p = e.verify(e, o.alert.description, d, []);
      if (p !== !0) {
        if (p || p === 0) {
          if (typeof p === "object" && !Qi.util.isArray(p)) {
            if (p.message) o.message = p.message;
            if (p.alert) o.alert.description = p.alert;
          } else if (typeof p === "number") o.alert.description = p;
        }
        return e.error(e, o);
      }
    }
    if (e.session.certificateRequest !== null)
      ((t = lr.createRecord(e, {
        type: lr.ContentType.handshake,
        data: lr.createCertificate(e),
      })),
        lr.queue(e, t));
    ((t = lr.createRecord(e, {
      type: lr.ContentType.handshake,
      data: lr.createClientKeyExchange(e),
    })),
      lr.queue(e, t),
      (e.expect = pxr));
    var _ = function (E, C) {
      if (
        E.session.certificateRequest !== null &&
        E.session.clientCertificate !== null
      )
        lr.queue(
          E,
          lr.createRecord(E, {
            type: lr.ContentType.handshake,
            data: lr.createCertificateVerify(E, C),
          }),
        );
      (lr.queue(
        E,
        lr.createRecord(E, {
          type: lr.ContentType.change_cipher_spec,
          data: lr.createChangeCipherSpec(),
        }),
      ),
        (E.state.pending = lr.createConnectionState(E)),
        (E.state.current.write = E.state.pending.write),
        lr.queue(
          E,
          lr.createRecord(E, {
            type: lr.ContentType.handshake,
            data: lr.createFinished(E),
          }),
        ),
        (E.expect = vOt),
        lr.flush(E),
        E.process());
    };
    if (
      e.session.certificateRequest === null ||
      e.session.clientCertificate === null
    )
      return _(e, null);
    lr.getClientSignature(e, _);
  };
  lr.handleChangeCipherSpec = function (e, t) {
    if (t.fragment.getByte() !== 1)
      return e.error(e, {
        message: "Invalid ChangeCipherSpec message received.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.illegal_parameter,
        },
      });
    var r = e.entity === lr.ConnectionEnd.client;
    if ((e.session.resuming && r) || (!e.session.resuming && !r))
      e.state.pending = lr.createConnectionState(e);
    if (
      ((e.state.current.read = e.state.pending.read),
      (!e.session.resuming && r) || (e.session.resuming && !r))
    )
      e.state.pending = null;
    ((e.expect = r ? dxr : yxr), e.process());
  };
  lr.handleFinished = function (e, t, r) {
    var o = t.fragment;
    o.read -= 4;
    var d = o.bytes();
    o.read += 4;
    var p = t.fragment.getBytes();
    ((o = Qi.util.createBuffer()),
      o.putBuffer(e.session.md5.digest()),
      o.putBuffer(e.session.sha1.digest()));
    var _ = e.entity === lr.ConnectionEnd.client,
      E = _ ? "server finished" : "client finished",
      C = e.session.sp,
      I = 12,
      D = Kye;
    if (((o = D(C.master_secret, E, o.getBytes(), I)), o.getBytes() !== p))
      return e.error(e, {
        message: "Invalid verify_data in Finished message.",
        send: !0,
        alert: {
          level: lr.Alert.Level.fatal,
          description: lr.Alert.Description.decrypt_error,
        },
      });
    if (
      (e.session.md5.update(d),
      e.session.sha1.update(d),
      (e.session.resuming && _) || (!e.session.resuming && !_))
    )
      (lr.queue(
        e,
        lr.createRecord(e, {
          type: lr.ContentType.change_cipher_spec,
          data: lr.createChangeCipherSpec(),
        }),
      ),
        (e.state.current.write = e.state.pending.write),
        (e.state.pending = null),
        lr.queue(
          e,
          lr.createRecord(e, {
            type: lr.ContentType.handshake,
            data: lr.createFinished(e),
          }),
        ));
    ((e.expect = _ ? fxr : _xr),
      (e.handshaking = !1),
      ++e.handshakes,
      (e.peerCertificate = _
        ? e.session.serverCertificate
        : e.session.clientCertificate),
      lr.flush(e),
      (e.isConnected = !0),
      e.connected(e),
      e.process());
  };
  lr.handleAlert = function (e, t) {
    var r = t.fragment,
      o = { level: r.getByte(), description: r.getByte() },
      d;
    switch (o.description) {
      case lr.Alert.Description.close_notify:
        d = "Connection closed.";
        break;
      case lr.Alert.Description.unexpected_message:
        d = "Unexpected message.";
        break;
      case lr.Alert.Description.bad_record_mac:
        d = "Bad record MAC.";
        break;
      case lr.Alert.Description.decryption_failed:
        d = "Decryption failed.";
        break;
      case lr.Alert.Description.record_overflow:
        d = "Record overflow.";
        break;
      case lr.Alert.Description.decompression_failure:
        d = "Decompression failed.";
        break;
      case lr.Alert.Description.handshake_failure:
        d = "Handshake failure.";
        break;
      case lr.Alert.Description.bad_certificate:
        d = "Bad certificate.";
        break;
      case lr.Alert.Description.unsupported_certificate:
        d = "Unsupported certificate.";
        break;
      case lr.Alert.Description.certificate_revoked:
        d = "Certificate revoked.";
        break;
      case lr.Alert.Description.certificate_expired:
        d = "Certificate expired.";
        break;
      case lr.Alert.Description.certificate_unknown:
        d = "Certificate unknown.";
        break;
      case lr.Alert.Description.illegal_parameter:
        d = "Illegal parameter.";
        break;
      case lr.Alert.Description.unknown_ca:
        d = "Unknown certificate authority.";
        break;
      case lr.Alert.Description.access_denied:
        d = "Access denied.";
        break;
      case lr.Alert.Description.decode_error:
        d = "Decode error.";
        break;
      case lr.Alert.Description.decrypt_error:
        d = "Decrypt error.";
        break;
      case lr.Alert.Description.export_restriction:
        d = "Export restriction.";
        break;
      case lr.Alert.Description.protocol_version:
        d = "Unsupported protocol version.";
        break;
      case lr.Alert.Description.insufficient_security:
        d = "Insufficient security.";
        break;
      case lr.Alert.Description.internal_error:
        d = "Internal error.";
        break;
      case lr.Alert.Description.user_canceled:
        d = "User canceled.";
        break;
      case lr.Alert.Description.no_renegotiation:
        d = "Renegotiation not supported.";
        break;
      default:
        d = "Unknown error.";
        break;
    }
    if (o.description === lr.Alert.Description.close_notify) return e.close();
    (e.error(e, {
      message: d,
      send: !1,
      origin: e.entity === lr.ConnectionEnd.client ? "server" : "client",
      alert: o,
    }),
      e.process());
  };
  lr.handleHandshake = function (e, t) {
    var r = t.fragment,
      o = r.getByte(),
      d = r.getInt24();
    if (d > r.length())
      return (
        (e.fragmented = t),
        (t.fragment = Qi.util.createBuffer()),
        (r.read -= 4),
        e.process()
      );
    ((e.fragmented = null), (r.read -= 4));
    var p = r.bytes(d + 4);
    if (((r.read += 4), o in Vye[e.entity][e.expect])) {
      if (e.entity === lr.ConnectionEnd.server && !e.open && !e.fail)
        ((e.handshaking = !0),
          (e.session = {
            version: null,
            extensions: { server_name: { serverNameList: [] } },
            cipherSuite: null,
            compressionMethod: null,
            serverCertificate: null,
            clientCertificate: null,
            md5: Qi.md.md5.create(),
            sha1: Qi.md.sha1.create(),
          }));
      if (
        o !== lr.HandshakeType.hello_request &&
        o !== lr.HandshakeType.certificate_verify &&
        o !== lr.HandshakeType.finished
      )
        (e.session.md5.update(p), e.session.sha1.update(p));
      Vye[e.entity][e.expect][o](e, t, d);
    } else lr.handleUnexpected(e, t);
  };
  lr.handleApplicationData = function (e, t) {
    (e.data.putBuffer(t.fragment), e.dataReady(e), e.process());
  };
  lr.handleHeartbeat = function (e, t) {
    var r = t.fragment,
      o = r.getByte(),
      d = r.getInt16(),
      p = r.getBytes(d);
    if (o === lr.HeartbeatMessageType.heartbeat_request) {
      if (e.handshaking || d > p.length) return e.process();
      (lr.queue(
        e,
        lr.createRecord(e, {
          type: lr.ContentType.heartbeat,
          data: lr.createHeartbeat(
            lr.HeartbeatMessageType.heartbeat_response,
            p,
          ),
        }),
      ),
        lr.flush(e));
    } else if (o === lr.HeartbeatMessageType.heartbeat_response) {
      if (p !== e.expectedHeartbeatPayload) return e.process();
      if (e.heartbeatReceived) e.heartbeatReceived(e, Qi.util.createBuffer(p));
    }
    e.process();
  };
  var axr = 0,
    lxr = 1,
    EOt = 2,
    cxr = 3,
    uxr = 4,
    vOt = 5,
    dxr = 6,
    fxr = 7,
    pxr = 8,
    mxr = 0,
    gxr = 1,
    RGe = 2,
    hxr = 3,
    PGe = 4,
    yxr = 5,
    _xr = 6,
    {
      handleUnexpected: ir,
      handleChangeCipherSpec: COt,
      handleAlert: _w,
      handleHandshake: oT,
      handleApplicationData: xOt,
      handleHeartbeat: Sw,
    } = lr,
    IGe = [];
  IGe[lr.ConnectionEnd.client] = [
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [COt, _w, ir, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, xOt, Sw],
    [ir, _w, oT, ir, Sw],
  ];
  IGe[lr.ConnectionEnd.server] = [
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [COt, _w, ir, ir, Sw],
    [ir, _w, oT, ir, Sw],
    [ir, _w, oT, xOt, Sw],
    [ir, _w, oT, ir, Sw],
  ];
  var {
      handleHelloRequest: _B,
      handleServerHello: bxr,
      handleCertificate: AOt,
      handleServerKeyExchange: TOt,
      handleCertificateRequest: xGe,
      handleServerHelloDone: qye,
      handleFinished: ROt,
    } = lr,
    Vye = [];
  Vye[lr.ConnectionEnd.client] = [
    [
      ir,
      ir,
      bxr,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      AOt,
      TOt,
      xGe,
      qye,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      TOt,
      xGe,
      qye,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      xGe,
      qye,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      qye,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ROt,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      _B,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
  ];
  var {
    handleClientHello: Sxr,
    handleClientKeyExchange: kxr,
    handleCertificateVerify: wxr,
  } = lr;
  Vye[lr.ConnectionEnd.server] = [
    [
      ir,
      Sxr,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      AOt,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      kxr,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      wxr,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ROt,
    ],
    [
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
    [
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
      ir,
    ],
  ];
  lr.generateKeys = function (e, t) {
    var r = Kye,
      o = t.client_random + t.server_random;
    if (!e.session.resuming)
      ((t.master_secret = r(
        t.pre_master_secret,
        "master secret",
        o,
        48,
      ).bytes()),
        (t.pre_master_secret = null));
    o = t.server_random + t.client_random;
    var d = 2 * t.mac_key_length + 2 * t.enc_key_length,
      p =
        e.version.major === lr.Versions.TLS_1_0.major &&
        e.version.minor === lr.Versions.TLS_1_0.minor;
    if (p) d += 2 * t.fixed_iv_length;
    var _ = r(t.master_secret, "key expansion", o, d),
      E = {
        client_write_MAC_key: _.getBytes(t.mac_key_length),
        server_write_MAC_key: _.getBytes(t.mac_key_length),
        client_write_key: _.getBytes(t.enc_key_length),
        server_write_key: _.getBytes(t.enc_key_length),
      };
    if (p)
      ((E.client_write_IV = _.getBytes(t.fixed_iv_length)),
        (E.server_write_IV = _.getBytes(t.fixed_iv_length)));
    return E;
  };
  lr.createConnectionState = function (e) {
    var t = e.entity === lr.ConnectionEnd.client,
      r = function () {
        var p = {
          sequenceNumber: [0, 0],
          macKey: null,
          macLength: 0,
          macFunction: null,
          cipherState: null,
          cipherFunction: function (_) {
            return !0;
          },
          compressionState: null,
          compressFunction: function (_) {
            return !0;
          },
          updateSequenceNumber: function () {
            if (p.sequenceNumber[1] === 4294967295)
              ((p.sequenceNumber[1] = 0), ++p.sequenceNumber[0]);
            else ++p.sequenceNumber[1];
          },
        };
        return p;
      },
      o = { read: r(), write: r() };
    if (
      ((o.read.update = function (p, _) {
        if (!o.read.cipherFunction(_, o.read))
          p.error(p, {
            message: "Could not decrypt record or bad MAC.",
            send: !0,
            alert: {
              level: lr.Alert.Level.fatal,
              description: lr.Alert.Description.bad_record_mac,
            },
          });
        else if (!o.read.compressFunction(p, _, o.read))
          p.error(p, {
            message: "Could not decompress record.",
            send: !0,
            alert: {
              level: lr.Alert.Level.fatal,
              description: lr.Alert.Description.decompression_failure,
            },
          });
        return !p.fail;
      }),
      (o.write.update = function (p, _) {
        if (!o.write.compressFunction(p, _, o.write))
          p.error(p, {
            message: "Could not compress record.",
            send: !1,
            alert: {
              level: lr.Alert.Level.fatal,
              description: lr.Alert.Description.internal_error,
            },
          });
        else if (!o.write.cipherFunction(_, o.write))
          p.error(p, {
            message: "Could not encrypt record.",
            send: !1,
            alert: {
              level: lr.Alert.Level.fatal,
              description: lr.Alert.Description.internal_error,
            },
          });
        return !p.fail;
      }),
      e.session)
    ) {
      var d = e.session.sp;
      switch (
        (e.session.cipherSuite.initSecurityParameters(d),
        (d.keys = lr.generateKeys(e, d)),
        (o.read.macKey = t
          ? d.keys.server_write_MAC_key
          : d.keys.client_write_MAC_key),
        (o.write.macKey = t
          ? d.keys.client_write_MAC_key
          : d.keys.server_write_MAC_key),
        e.session.cipherSuite.initConnectionState(o, e, d),
        d.compression_algorithm)
      ) {
        case lr.CompressionMethod.none:
          break;
        case lr.CompressionMethod.deflate:
          ((o.read.compressFunction = ixr), (o.write.compressFunction = sxr));
          break;
        default:
          throw Error("Unsupported compression algorithm.");
      }
    }
    return o;
  };
  lr.createRandom = function () {
    var e = new Date(),
      t = +e + e.getTimezoneOffset() * 60000,
      r = Qi.util.createBuffer();
    return (r.putInt32(t), r.putBytes(Qi.random.getBytes(28)), r);
  };
  lr.createRecord = function (e, t) {
    if (!t.data) return null;
    var r = {
      type: t.type,
      version: { major: e.version.major, minor: e.version.minor },
      length: t.data.length(),
      fragment: t.data,
    };
    return r;
  };
  lr.createAlert = function (e, t) {
    var r = Qi.util.createBuffer();
    return (
      r.putByte(t.level),
      r.putByte(t.description),
      lr.createRecord(e, { type: lr.ContentType.alert, data: r })
    );
  };
  lr.createClientHello = function (e) {
    e.session.clientHelloVersion = {
      major: e.version.major,
      minor: e.version.minor,
    };
    var t = Qi.util.createBuffer();
    for (var r = 0; r < e.cipherSuites.length; ++r) {
      var o = e.cipherSuites[r];
      (t.putByte(o.id[0]), t.putByte(o.id[1]));
    }
    var d = t.length(),
      p = Qi.util.createBuffer();
    p.putByte(lr.CompressionMethod.none);
    var _ = p.length(),
      E = Qi.util.createBuffer();
    if (e.virtualHost) {
      var C = Qi.util.createBuffer();
      (C.putByte(0), C.putByte(0));
      var I = Qi.util.createBuffer();
      (I.putByte(0), pA(I, 2, Qi.util.createBuffer(e.virtualHost)));
      var D = Qi.util.createBuffer();
      (pA(D, 2, I), pA(C, 2, D), E.putBuffer(C));
    }
    var N = E.length();
    if (N > 0) N += 2;
    var F = e.session.id,
      U = F.length + 1 + 2 + 4 + 28 + 2 + d + 1 + _ + N,
      V = Qi.util.createBuffer();
    if (
      (V.putByte(lr.HandshakeType.client_hello),
      V.putInt24(U),
      V.putByte(e.version.major),
      V.putByte(e.version.minor),
      V.putBytes(e.session.sp.client_random),
      pA(V, 1, Qi.util.createBuffer(F)),
      pA(V, 2, t),
      pA(V, 1, p),
      N > 0)
    )
      pA(V, 2, E);
    return V;
  };
  lr.createServerHello = function (e) {
    var t = e.session.id,
      r = t.length + 1 + 2 + 4 + 28 + 2 + 1,
      o = Qi.util.createBuffer();
    return (
      o.putByte(lr.HandshakeType.server_hello),
      o.putInt24(r),
      o.putByte(e.version.major),
      o.putByte(e.version.minor),
      o.putBytes(e.session.sp.server_random),
      pA(o, 1, Qi.util.createBuffer(t)),
      o.putByte(e.session.cipherSuite.id[0]),
      o.putByte(e.session.cipherSuite.id[1]),
      o.putByte(e.session.compressionMethod),
      o
    );
  };
  lr.createCertificate = function (e) {
    var t = e.entity === lr.ConnectionEnd.client,
      r = null;
    if (e.getCertificate) {
      var o;
      if (t) o = e.session.certificateRequest;
      else o = e.session.extensions.server_name.serverNameList;
      r = e.getCertificate(e, o);
    }
    var d = Qi.util.createBuffer();
    if (r !== null)
      try {
        if (!Qi.util.isArray(r)) r = [r];
        var p = null;
        for (var _ = 0; _ < r.length; ++_) {
          var E = Qi.pem.decode(r[_])[0];
          if (
            E.type !== "CERTIFICATE" &&
            E.type !== "X509 CERTIFICATE" &&
            E.type !== "TRUSTED CERTIFICATE"
          ) {
            var C = Error(
              'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".',
            );
            throw ((C.headerType = E.type), C);
          }
          if (E.procType && E.procType.type === "ENCRYPTED")
            throw Error(
              "Could not convert certificate from PEM; PEM is encrypted.",
            );
          var I = Qi.util.createBuffer(E.body);
          if (p === null) p = Qi.asn1.fromDer(I.bytes(), !1);
          var D = Qi.util.createBuffer();
          (pA(D, 3, I), d.putBuffer(D));
        }
        if (((r = Qi.pki.certificateFromAsn1(p)), t))
          e.session.clientCertificate = r;
        else e.session.serverCertificate = r;
      } catch (U) {
        return e.error(e, {
          message: "Could not send certificate list.",
          cause: U,
          send: !0,
          alert: {
            level: lr.Alert.Level.fatal,
            description: lr.Alert.Description.bad_certificate,
          },
        });
      }
    var N = 3 + d.length(),
      F = Qi.util.createBuffer();
    return (
      F.putByte(lr.HandshakeType.certificate),
      F.putInt24(N),
      pA(F, 3, d),
      F
    );
  };
  lr.createClientKeyExchange = function (e) {
    var t = Qi.util.createBuffer();
    (t.putByte(e.session.clientHelloVersion.major),
      t.putByte(e.session.clientHelloVersion.minor),
      t.putBytes(Qi.random.getBytes(46)));
    var r = e.session.sp;
    r.pre_master_secret = t.getBytes();
    var o = e.session.serverCertificate.publicKey;
    t = o.encrypt(r.pre_master_secret);
    var d = t.length + 2,
      p = Qi.util.createBuffer();
    return (
      p.putByte(lr.HandshakeType.client_key_exchange),
      p.putInt24(d),
      p.putInt16(t.length),
      p.putBytes(t),
      p
    );
  };
  lr.createServerKeyExchange = function (e) {
    var t = 0,
      r = Qi.util.createBuffer();
    if (t > 0) (r.putByte(lr.HandshakeType.server_key_exchange), r.putInt24(t));
    return r;
  };
  lr.getClientSignature = function (e, t) {
    var r = Qi.util.createBuffer();
    (r.putBuffer(e.session.md5.digest()),
      r.putBuffer(e.session.sha1.digest()),
      (r = r.getBytes()),
      (e.getSignature =
        e.getSignature ||
        function (o, d, p) {
          var _ = null;
          if (o.getPrivateKey)
            try {
              ((_ = o.getPrivateKey(o, o.session.clientCertificate)),
                (_ = Qi.pki.privateKeyFromPem(_)));
            } catch (E) {
              o.error(o, {
                message: "Could not get private key.",
                cause: E,
                send: !0,
                alert: {
                  level: lr.Alert.Level.fatal,
                  description: lr.Alert.Description.internal_error,
                },
              });
            }
          if (_ === null)
            o.error(o, {
              message: "No private key set.",
              send: !0,
              alert: {
                level: lr.Alert.Level.fatal,
                description: lr.Alert.Description.internal_error,
              },
            });
          else d = _.sign(d, null);
          p(o, d);
        }),
      e.getSignature(e, r, t));
  };
  lr.createCertificateVerify = function (e, t) {
    var r = t.length + 2,
      o = Qi.util.createBuffer();
    return (
      o.putByte(lr.HandshakeType.certificate_verify),
      o.putInt24(r),
      o.putInt16(t.length),
      o.putBytes(t),
      o
    );
  };
  lr.createCertificateRequest = function (e) {
    var t = Qi.util.createBuffer();
    t.putByte(1);
    var r = Qi.util.createBuffer();
    for (var o in e.caStore.certs) {
      var d = e.caStore.certs[o],
        p = Qi.pki.distinguishedNameToAsn1(d.subject),
        _ = Qi.asn1.toDer(p);
      (r.putInt16(_.length()), r.putBuffer(_));
    }
    var E = 1 + t.length() + 2 + r.length(),
      C = Qi.util.createBuffer();
    return (
      C.putByte(lr.HandshakeType.certificate_request),
      C.putInt24(E),
      pA(C, 1, t),
      pA(C, 2, r),
      C
    );
  };
  lr.createServerHelloDone = function (e) {
    var t = Qi.util.createBuffer();
    return (t.putByte(lr.HandshakeType.server_hello_done), t.putInt24(0), t);
  };
  lr.createChangeCipherSpec = function () {
    var e = Qi.util.createBuffer();
    return (e.putByte(1), e);
  };
  lr.createFinished = function (e) {
    var t = Qi.util.createBuffer();
    (t.putBuffer(e.session.md5.digest()), t.putBuffer(e.session.sha1.digest()));
    var r = e.entity === lr.ConnectionEnd.client,
      o = e.session.sp,
      d = 12,
      p = Kye,
      _ = r ? "client finished" : "server finished";
    t = p(o.master_secret, _, t.getBytes(), d);
    var E = Qi.util.createBuffer();
    return (
      E.putByte(lr.HandshakeType.finished),
      E.putInt24(t.length()),
      E.putBuffer(t),
      E
    );
  };
  lr.createHeartbeat = function (e, t, r) {
    if (typeof r > "u") r = t.length;
    var o = Qi.util.createBuffer();
    (o.putByte(e), o.putInt16(r), o.putBytes(t));
    var d = o.length(),
      p = Math.max(16, d - r - 3);
    return (o.putBytes(Qi.random.getBytes(p)), o);
  };
  lr.queue = function (e, t) {
    if (!t) return;
    if (t.fragment.length() === 0) {
      if (
        t.type === lr.ContentType.handshake ||
        t.type === lr.ContentType.alert ||
        t.type === lr.ContentType.change_cipher_spec
      )
        return;
    }
    if (t.type === lr.ContentType.handshake) {
      var r = t.fragment.bytes();
      (e.session.md5.update(r), e.session.sha1.update(r), (r = null));
    }
    var o;
    if (t.fragment.length() <= lr.MaxFragment) o = [t];
    else {
      o = [];
      var d = t.fragment.bytes();
      while (d.length > lr.MaxFragment)
        (o.push(
          lr.createRecord(e, {
            type: t.type,
            data: Qi.util.createBuffer(d.slice(0, lr.MaxFragment)),
          }),
        ),
          (d = d.slice(lr.MaxFragment)));
      if (d.length > 0)
        o.push(
          lr.createRecord(e, { type: t.type, data: Qi.util.createBuffer(d) }),
        );
    }
    for (var p = 0; p < o.length && !e.fail; ++p) {
      var _ = o[p],
        E = e.state.current.write;
      if (E.update(e, _)) e.records.push(_);
    }
  };
  lr.flush = function (e) {
    for (var t = 0; t < e.records.length; ++t) {
      var r = e.records[t];
      (e.tlsData.putByte(r.type),
        e.tlsData.putByte(r.version.major),
        e.tlsData.putByte(r.version.minor),
        e.tlsData.putInt16(r.fragment.length()),
        e.tlsData.putBuffer(e.records[t].fragment));
    }
    return ((e.records = []), e.tlsDataReady(e));
  };
  var AGe = function (e) {
      switch (e) {
        case !0:
          return !0;
        case Qi.pki.certificateError.bad_certificate:
          return lr.Alert.Description.bad_certificate;
        case Qi.pki.certificateError.unsupported_certificate:
          return lr.Alert.Description.unsupported_certificate;
        case Qi.pki.certificateError.certificate_revoked:
          return lr.Alert.Description.certificate_revoked;
        case Qi.pki.certificateError.certificate_expired:
          return lr.Alert.Description.certificate_expired;
        case Qi.pki.certificateError.certificate_unknown:
          return lr.Alert.Description.certificate_unknown;
        case Qi.pki.certificateError.unknown_ca:
          return lr.Alert.Description.unknown_ca;
        default:
          return lr.Alert.Description.bad_certificate;
      }
    },
    Exr = function (e) {
      switch (e) {
        case !0:
          return !0;
        case lr.Alert.Description.bad_certificate:
          return Qi.pki.certificateError.bad_certificate;
        case lr.Alert.Description.unsupported_certificate:
          return Qi.pki.certificateError.unsupported_certificate;
        case lr.Alert.Description.certificate_revoked:
          return Qi.pki.certificateError.certificate_revoked;
        case lr.Alert.Description.certificate_expired:
          return Qi.pki.certificateError.certificate_expired;
        case lr.Alert.Description.certificate_unknown:
          return Qi.pki.certificateError.certificate_unknown;
        case lr.Alert.Description.unknown_ca:
          return Qi.pki.certificateError.unknown_ca;
        default:
          return Qi.pki.certificateError.bad_certificate;
      }
    };
  lr.verifyCertificateChain = function (e, t) {
    try {
      var r = {};
      for (var o in e.verifyOptions) r[o] = e.verifyOptions[o];
      ((r.verify = function (p, _, E) {
        var C = AGe(p),
          I = e.verify(e, p, _, E);
        if (I !== !0) {
          if (typeof I === "object" && !Qi.util.isArray(I)) {
            var D = Error("The application rejected the certificate.");
            if (
              ((D.send = !0),
              (D.alert = {
                level: lr.Alert.Level.fatal,
                description: lr.Alert.Description.bad_certificate,
              }),
              I.message)
            )
              D.message = I.message;
            if (I.alert) D.alert.description = I.alert;
            throw D;
          }
          if (I !== p) I = Exr(I);
        }
        return I;
      }),
        Qi.pki.verifyCertificateChain(e.caStore, t, r));
    } catch (p) {
      var d = p;
      if (typeof d !== "object" || Qi.util.isArray(d))
        d = {
          send: !0,
          alert: { level: lr.Alert.Level.fatal, description: AGe(p) },
        };
      if (!("send" in d)) d.send = !0;
      if (!("alert" in d))
        d.alert = { level: lr.Alert.Level.fatal, description: AGe(d.error) };
      e.error(e, d);
    }
    return !e.fail;
  };
  lr.createSessionCache = function (e, t) {
    var r = null;
    if (e && e.getSession && e.setSession && e.order) r = e;
    else {
      ((r = {}),
        (r.cache = e || {}),
        (r.capacity = Math.max(t || 100, 1)),
        (r.order = []));
      for (var o in e)
        if (r.order.length <= t) r.order.push(o);
        else delete e[o];
      ((r.getSession = function (d) {
        var p = null,
          _ = null;
        if (d) _ = Qi.util.bytesToHex(d);
        else if (r.order.length > 0) _ = r.order[0];
        if (_ !== null && _ in r.cache) {
          ((p = r.cache[_]), delete r.cache[_]);
          for (var E in r.order)
            if (r.order[E] === _) {
              r.order.splice(E, 1);
              break;
            }
        }
        return p;
      }),
        (r.setSession = function (d, p) {
          if (r.order.length === r.capacity) {
            var _ = r.order.shift();
            delete r.cache[_];
          }
          var _ = Qi.util.bytesToHex(d);
          (r.order.push(_), (r.cache[_] = p));
        }));
    }
    return r;
  };
  lr.createConnection = function (e) {
    var t = null;
    if (e.caStore)
      if (Qi.util.isArray(e.caStore)) t = Qi.pki.createCaStore(e.caStore);
      else t = e.caStore;
    else t = Qi.pki.createCaStore();
    var r = e.cipherSuites || null;
    if (r === null) {
      r = [];
      for (var o in lr.CipherSuites) r.push(lr.CipherSuites[o]);
    }
    var d = e.server ? lr.ConnectionEnd.server : lr.ConnectionEnd.client,
      p = e.sessionCache ? lr.createSessionCache(e.sessionCache) : null,
      _ = {
        version: { major: lr.Version.major, minor: lr.Version.minor },
        entity: d,
        sessionId: e.sessionId,
        caStore: t,
        sessionCache: p,
        cipherSuites: r,
        connected: e.connected,
        virtualHost: e.virtualHost || null,
        verifyClient: e.verifyClient || !1,
        verify:
          e.verify ||
          function (D, N, F, U) {
            return N;
          },
        verifyOptions: e.verifyOptions || {},
        getCertificate: e.getCertificate || null,
        getPrivateKey: e.getPrivateKey || null,
        getSignature: e.getSignature || null,
        input: Qi.util.createBuffer(),
        tlsData: Qi.util.createBuffer(),
        data: Qi.util.createBuffer(),
        tlsDataReady: e.tlsDataReady,
        dataReady: e.dataReady,
        heartbeatReceived: e.heartbeatReceived,
        closed: e.closed,
        error: function (D, N) {
          if (
            ((N.origin =
              N.origin ||
              (D.entity === lr.ConnectionEnd.client ? "client" : "server")),
            N.send)
          )
            (lr.queue(D, lr.createAlert(D, N.alert)), lr.flush(D));
          var F = N.fatal !== !1;
          if (F) D.fail = !0;
          if ((e.error(D, N), F)) D.close(!1);
        },
        deflate: e.deflate || null,
        inflate: e.inflate || null,
      };
    ((_.reset = function (D) {
      ((_.version = { major: lr.Version.major, minor: lr.Version.minor }),
        (_.record = null),
        (_.session = null),
        (_.peerCertificate = null),
        (_.state = { pending: null, current: null }),
        (_.expect = _.entity === lr.ConnectionEnd.client ? axr : mxr),
        (_.fragmented = null),
        (_.records = []),
        (_.open = !1),
        (_.handshakes = 0),
        (_.handshaking = !1),
        (_.isConnected = !1),
        (_.fail = !(D || typeof D > "u")),
        _.input.clear(),
        _.tlsData.clear(),
        _.data.clear(),
        (_.state.current = lr.createConnectionState(_)));
    }),
      _.reset());
    var E = function (D, N) {
        var F = N.type - lr.ContentType.change_cipher_spec,
          U = IGe[D.entity][D.expect];
        if (F in U) U[F](D, N);
        else lr.handleUnexpected(D, N);
      },
      C = function (D) {
        var N = 0,
          F = D.input,
          U = F.length();
        if (U < 5) N = 5 - U;
        else {
          D.record = {
            type: F.getByte(),
            version: { major: F.getByte(), minor: F.getByte() },
            length: F.getInt16(),
            fragment: Qi.util.createBuffer(),
            ready: !1,
          };
          var V = D.record.version.major === D.version.major;
          if (V && D.session && D.session.version)
            V = D.record.version.minor === D.version.minor;
          if (!V)
            D.error(D, {
              message: "Incompatible TLS version.",
              send: !0,
              alert: {
                level: lr.Alert.Level.fatal,
                description: lr.Alert.Description.protocol_version,
              },
            });
        }
        return N;
      },
      I = function (D) {
        var N = 0,
          F = D.input,
          U = F.length();
        if (U < D.record.length) N = D.record.length - U;
        else {
          (D.record.fragment.putBytes(F.getBytes(D.record.length)),
            F.compact());
          var V = D.state.current.read;
          if (V.update(D, D.record)) {
            if (D.fragmented !== null)
              if (D.fragmented.type === D.record.type)
                (D.fragmented.fragment.putBuffer(D.record.fragment),
                  (D.record = D.fragmented));
              else
                D.error(D, {
                  message: "Invalid fragmented record.",
                  send: !0,
                  alert: {
                    level: lr.Alert.Level.fatal,
                    description: lr.Alert.Description.unexpected_message,
                  },
                });
            D.record.ready = !0;
          }
        }
        return N;
      };
    return (
      (_.handshake = function (D) {
        if (_.entity !== lr.ConnectionEnd.client)
          _.error(_, {
            message: "Cannot initiate handshake as a server.",
            fatal: !1,
          });
        else if (_.handshaking)
          _.error(_, { message: "Handshake already in progress.", fatal: !1 });
        else {
          if (_.fail && !_.open && _.handshakes === 0) _.fail = !1;
          ((_.handshaking = !0), (D = D || ""));
          var N = null;
          if (D.length > 0) {
            if (_.sessionCache) N = _.sessionCache.getSession(D);
            if (N === null) D = "";
          }
          if (D.length === 0 && _.sessionCache) {
            if (((N = _.sessionCache.getSession()), N !== null)) D = N.id;
          }
          if (
            ((_.session = {
              id: D,
              version: null,
              cipherSuite: null,
              compressionMethod: null,
              serverCertificate: null,
              certificateRequest: null,
              clientCertificate: null,
              sp: {},
              md5: Qi.md.md5.create(),
              sha1: Qi.md.sha1.create(),
            }),
            N)
          )
            ((_.version = N.version), (_.session.sp = N.sp));
          ((_.session.sp.client_random = lr.createRandom().getBytes()),
            (_.open = !0),
            lr.queue(
              _,
              lr.createRecord(_, {
                type: lr.ContentType.handshake,
                data: lr.createClientHello(_),
              }),
            ),
            lr.flush(_));
        }
      }),
      (_.process = function (D) {
        var N = 0;
        if (D) _.input.putBytes(D);
        if (!_.fail) {
          if (
            _.record !== null &&
            _.record.ready &&
            _.record.fragment.isEmpty()
          )
            _.record = null;
          if (_.record === null) N = C(_);
          if (!_.fail && _.record !== null && !_.record.ready) N = I(_);
          if (!_.fail && _.record !== null && _.record.ready) E(_, _.record);
        }
        return N;
      }),
      (_.prepare = function (D) {
        return (
          lr.queue(
            _,
            lr.createRecord(_, {
              type: lr.ContentType.application_data,
              data: Qi.util.createBuffer(D),
            }),
          ),
          lr.flush(_)
        );
      }),
      (_.prepareHeartbeatRequest = function (D, N) {
        if (D instanceof Qi.util.ByteBuffer) D = D.bytes();
        if (typeof N > "u") N = D.length;
        return (
          (_.expectedHeartbeatPayload = D),
          lr.queue(
            _,
            lr.createRecord(_, {
              type: lr.ContentType.heartbeat,
              data: lr.createHeartbeat(
                lr.HeartbeatMessageType.heartbeat_request,
                D,
                N,
              ),
            }),
          ),
          lr.flush(_)
        );
      }),
      (_.close = function (D) {
        if (!_.fail && _.sessionCache && _.session) {
          var N = {
            id: _.session.id,
            version: _.session.version,
            sp: _.session.sp,
          };
          ((N.sp.keys = null), _.sessionCache.setSession(N.id, N));
        }
        if (_.open) {
          if (((_.open = !1), _.input.clear(), _.isConnected || _.handshaking))
            ((_.isConnected = _.handshaking = !1),
              lr.queue(
                _,
                lr.createAlert(_, {
                  level: lr.Alert.Level.warning,
                  description: lr.Alert.Description.close_notify,
                }),
              ),
              lr.flush(_));
          _.closed(_);
        }
        _.reset(D);
      }),
      _
    );
  };
  POt.exports = Qi.tls = Qi.tls || {};
  for (qee in lr) if (typeof lr[qee] !== "function") Qi.tls[qee] = lr[qee];
  var qee;
  Qi.tls.prf_tls1 = Kye;
  Qi.tls.hmac_sha1 = oxr;
  Qi.tls.createSessionCache = lr.createSessionCache;
  Qi.tls.createConnection = lr.createConnection;
});
var OOt = commonJS(function (hIs, MOt) {
  var bB = yp();
  oB();
  MGe();
  var mA = (MOt.exports = bB.tls);
  mA.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
    id: [0, 47],
    name: "TLS_RSA_WITH_AES_128_CBC_SHA",
    initSecurityParameters: function (e) {
      ((e.bulk_cipher_algorithm = mA.BulkCipherAlgorithm.aes),
        (e.cipher_type = mA.CipherType.block),
        (e.enc_key_length = 16),
        (e.block_length = 16),
        (e.fixed_iv_length = 16),
        (e.record_iv_length = 16),
        (e.mac_algorithm = mA.MACAlgorithm.hmac_sha1),
        (e.mac_length = 20),
        (e.mac_key_length = 20));
    },
    initConnectionState: IOt,
  };
  mA.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
    id: [0, 53],
    name: "TLS_RSA_WITH_AES_256_CBC_SHA",
    initSecurityParameters: function (e) {
      ((e.bulk_cipher_algorithm = mA.BulkCipherAlgorithm.aes),
        (e.cipher_type = mA.CipherType.block),
        (e.enc_key_length = 32),
        (e.block_length = 16),
        (e.fixed_iv_length = 16),
        (e.record_iv_length = 16),
        (e.mac_algorithm = mA.MACAlgorithm.hmac_sha1),
        (e.mac_length = 20),
        (e.mac_key_length = 20));
    },
    initConnectionState: IOt,
  };
  function IOt(e, t, r) {
    var o = t.entity === bB.tls.ConnectionEnd.client;
    ((e.read.cipherState = {
      init: !1,
      cipher: bB.cipher.createDecipher(
        "AES-CBC",
        o ? r.keys.server_write_key : r.keys.client_write_key,
      ),
      iv: o ? r.keys.server_write_IV : r.keys.client_write_IV,
    }),
      (e.write.cipherState = {
        init: !1,
        cipher: bB.cipher.createCipher(
          "AES-CBC",
          o ? r.keys.client_write_key : r.keys.server_write_key,
        ),
        iv: o ? r.keys.client_write_IV : r.keys.server_write_IV,
      }),
      (e.read.cipherFunction = xxr),
      (e.write.cipherFunction = Txr),
      (e.read.macLength = e.write.macLength = r.mac_length),
      (e.read.macFunction = e.write.macFunction = mA.hmac_sha1));
  }
  function Txr(e, t) {
    var r = !1,
      o = t.macFunction(t.macKey, t.sequenceNumber, e);
    (e.fragment.putBytes(o), t.updateSequenceNumber());
    var d;
    if (e.version.minor === mA.Versions.TLS_1_0.minor)
      d = t.cipherState.init ? null : t.cipherState.iv;
    else d = bB.random.getBytesSync(16);
    t.cipherState.init = !0;
    var p = t.cipherState.cipher;
    if ((p.start({ iv: d }), e.version.minor >= mA.Versions.TLS_1_1.minor))
      p.output.putBytes(d);
    if ((p.update(e.fragment), p.finish(vxr)))
      ((e.fragment = p.output), (e.length = e.fragment.length()), (r = !0));
    return r;
  }
  function vxr(e, t, r) {
    if (!r) {
      var o = e - (t.length() % e);
      t.fillWithByte(o - 1, o);
    }
    return !0;
  }
  function Cxr(e, t, r) {
    var o = !0;
    if (r) {
      var d = t.length(),
        p = t.last();
      for (var _ = d - 1 - p; _ < d - 1; ++_) o = o && t.at(_) == p;
      if (o) t.truncate(p + 1);
    }
    return o;
  }
  function xxr(e, t) {
    var r = !1,
      o;
    if (e.version.minor === mA.Versions.TLS_1_0.minor)
      o = t.cipherState.init ? null : t.cipherState.iv;
    else o = e.fragment.getBytes(16);
    t.cipherState.init = !0;
    var d = t.cipherState.cipher;
    (d.start({ iv: o }), d.update(e.fragment), (r = d.finish(Cxr)));
    var p = t.macLength,
      _ = bB.random.getBytesSync(p),
      E = d.output.length();
    if (E >= p)
      ((e.fragment = d.output.getBytes(E - p)), (_ = d.output.getBytes(p)));
    else e.fragment = d.output.getBytes();
    ((e.fragment = bB.util.createBuffer(e.fragment)),
      (e.length = e.fragment.length()));
    var C = t.macFunction(t.macKey, t.sequenceNumber, e);
    return (t.updateSequenceNumber(), (r = Axr(t.macKey, _, C) && r), r);
  }
  function Axr(e, t, r) {
    var o = bB.hmac.create();
    return (
      o.start("SHA1", e),
      o.update(t),
      (t = o.digest().getBytes()),
      o.start(null, null),
      o.update(r),
      (r = o.digest().getBytes()),
      t === r
    );
  }
});
var NGe = commonJS(function (yIs, FOt) {
  var g_ = yp();
  nM();
  Ig();
  var Vee = (FOt.exports = g_.sha512 = g_.sha512 || {});
  g_.md.sha512 = g_.md.algorithms.sha512 = Vee;
  var NOt = (g_.sha384 = g_.sha512.sha384 = g_.sha512.sha384 || {});
  NOt.create = function () {
    return Vee.create("SHA-384");
  };
  g_.md.sha384 = g_.md.algorithms.sha384 = NOt;
  g_.sha512.sha256 = g_.sha512.sha256 || {
    create: function () {
      return Vee.create("SHA-512/256");
    },
  };
  g_.md["sha512/256"] = g_.md.algorithms["sha512/256"] = g_.sha512.sha256;
  g_.sha512.sha224 = g_.sha512.sha224 || {
    create: function () {
      return Vee.create("SHA-512/224");
    },
  };
  g_.md["sha512/224"] = g_.md.algorithms["sha512/224"] = g_.sha512.sha224;
  Vee.create = function (e) {
    if (!LOt) Rxr();
    if (typeof e > "u") e = "SHA-512";
    if (!(e in VW)) throw Error("Invalid SHA-512 algorithm: " + e);
    var t = VW[e],
      r = null,
      o = g_.util.createBuffer(),
      d = Array(80);
    for (var p = 0; p < 80; ++p) d[p] = [, ,];
    var _ = 64;
    switch (e) {
      case "SHA-384":
        _ = 48;
        break;
      case "SHA-512/256":
        _ = 32;
        break;
      case "SHA-512/224":
        _ = 28;
        break;
    }
    var E = {
      algorithm: e.replace("-", "").toLowerCase(),
      blockLength: 128,
      digestLength: _,
      messageLength: 0,
      fullMessageLength: null,
      messageLengthSize: 16,
    };
    return (
      (E.start = function () {
        ((E.messageLength = 0),
          (E.fullMessageLength = E.messageLength128 = []));
        var C = E.messageLengthSize / 4;
        for (var I = 0; I < C; ++I) E.fullMessageLength.push(0);
        ((o = g_.util.createBuffer()), (r = Array(t.length)));
        for (var I = 0; I < t.length; ++I) r[I] = t[I].slice(0);
        return E;
      }),
      E.start(),
      (E.update = function (C, I) {
        if (I === "utf8") C = g_.util.encodeUtf8(C);
        var D = C.length;
        ((E.messageLength += D), (D = [(D / 4294967296) >>> 0, D >>> 0]));
        for (var N = E.fullMessageLength.length - 1; N >= 0; --N)
          ((E.fullMessageLength[N] += D[1]),
            (D[1] = D[0] + ((E.fullMessageLength[N] / 4294967296) >>> 0)),
            (E.fullMessageLength[N] = E.fullMessageLength[N] >>> 0),
            (D[0] = (D[1] / 4294967296) >>> 0));
        if ((o.putBytes(C), DOt(r, d, o), o.read > 2048 || o.length() === 0))
          o.compact();
        return E;
      }),
      (E.digest = function () {
        var C = g_.util.createBuffer();
        C.putBytes(o.bytes());
        var I =
            E.fullMessageLength[E.fullMessageLength.length - 1] +
            E.messageLengthSize,
          D = I & (E.blockLength - 1);
        C.putBytes(OGe.substr(0, E.blockLength - D));
        var N,
          F,
          U = E.fullMessageLength[0] * 8;
        for (var V = 0; V < E.fullMessageLength.length - 1; ++V)
          ((N = E.fullMessageLength[V + 1] * 8),
            (F = (N / 4294967296) >>> 0),
            (U += F),
            C.putInt32(U >>> 0),
            (U = N >>> 0));
        C.putInt32(U);
        var re = Array(r.length);
        for (var V = 0; V < r.length; ++V) re[V] = r[V].slice(0);
        DOt(re, d, C);
        var ue = g_.util.createBuffer(),
          de;
        if (e === "SHA-512") de = re.length;
        else if (e === "SHA-384") de = re.length - 2;
        else de = re.length - 4;
        for (var V = 0; V < de; ++V)
          if ((ue.putInt32(re[V][0]), V !== de - 1 || e !== "SHA-512/224"))
            ue.putInt32(re[V][1]);
        return ue;
      }),
      E
    );
  };
  var OGe = null,
    LOt = !1,
    DGe = null,
    VW = null;
  function Rxr() {
    ((OGe = String.fromCharCode(128)),
      (OGe += g_.util.fillString(String.fromCharCode(0), 128)),
      (DGe = [
        [1116352408, 3609767458],
        [1899447441, 602891725],
        [3049323471, 3964484399],
        [3921009573, 2173295548],
        [961987163, 4081628472],
        [1508970993, 3053834265],
        [2453635748, 2937671579],
        [2870763221, 3664609560],
        [3624381080, 2734883394],
        [310598401, 1164996542],
        [607225278, 1323610764],
        [1426881987, 3590304994],
        [1925078388, 4068182383],
        [2162078206, 991336113],
        [2614888103, 633803317],
        [3248222580, 3479774868],
        [3835390401, 2666613458],
        [4022224774, 944711139],
        [264347078, 2341262773],
        [604807628, 2007800933],
        [770255983, 1495990901],
        [1249150122, 1856431235],
        [1555081692, 3175218132],
        [1996064986, 2198950837],
        [2554220882, 3999719339],
        [2821834349, 766784016],
        [2952996808, 2566594879],
        [3210313671, 3203337956],
        [3336571891, 1034457026],
        [3584528711, 2466948901],
        [113926993, 3758326383],
        [338241895, 168717936],
        [666307205, 1188179964],
        [773529912, 1546045734],
        [1294757372, 1522805485],
        [1396182291, 2643833823],
        [1695183700, 2343527390],
        [1986661051, 1014477480],
        [2177026350, 1206759142],
        [2456956037, 344077627],
        [2730485921, 1290863460],
        [2820302411, 3158454273],
        [3259730800, 3505952657],
        [3345764771, 106217008],
        [3516065817, 3606008344],
        [3600352804, 1432725776],
        [4094571909, 1467031594],
        [275423344, 851169720],
        [430227734, 3100823752],
        [506948616, 1363258195],
        [659060556, 3750685593],
        [883997877, 3785050280],
        [958139571, 3318307427],
        [1322822218, 3812723403],
        [1537002063, 2003034995],
        [1747873779, 3602036899],
        [1955562222, 1575990012],
        [2024104815, 1125592928],
        [2227730452, 2716904306],
        [2361852424, 442776044],
        [2428436474, 593698344],
        [2756734187, 3733110249],
        [3204031479, 2999351573],
        [3329325298, 3815920427],
        [3391569614, 3928383900],
        [3515267271, 566280711],
        [3940187606, 3454069534],
        [4118630271, 4000239992],
        [116418474, 1914138554],
        [174292421, 2731055270],
        [289380356, 3203993006],
        [460393269, 320620315],
        [685471733, 587496836],
        [852142971, 1086792851],
        [1017036298, 365543100],
        [1126000580, 2618297676],
        [1288033470, 3409855158],
        [1501505948, 4234509866],
        [1607167915, 987167468],
        [1816402316, 1246189591],
      ]),
      (VW = {}),
      (VW["SHA-512"] = [
        [1779033703, 4089235720],
        [3144134277, 2227873595],
        [1013904242, 4271175723],
        [2773480762, 1595750129],
        [1359893119, 2917565137],
        [2600822924, 725511199],
        [528734635, 4215389547],
        [1541459225, 327033209],
      ]),
      (VW["SHA-384"] = [
        [3418070365, 3238371032],
        [1654270250, 914150663],
        [2438529370, 812702999],
        [355462360, 4144912697],
        [1731405415, 4290775857],
        [2394180231, 1750603025],
        [3675008525, 1694076839],
        [1203062813, 3204075428],
      ]),
      (VW["SHA-512/256"] = [
        [573645204, 4230739756],
        [2673172387, 3360449730],
        [596883563, 1867755857],
        [2520282905, 1497426621],
        [2519219938, 2827943907],
        [3193839141, 1401305490],
        [721525244, 746961066],
        [246885852, 2177182882],
      ]),
      (VW["SHA-512/224"] = [
        [2352822216, 424955298],
        [1944164710, 2312950998],
        [502970286, 855612546],
        [1738396948, 1479516111],
        [258812777, 2077511080],
        [2011393907, 79989058],
        [1067287976, 1780299464],
        [286451373, 2446758561],
      ]),
      (LOt = !0));
  }
  function DOt(e, t, r) {
    var o,
      d,
      p,
      _,
      E,
      C,
      I,
      D,
      N,
      F,
      U,
      V,
      re,
      ue,
      de,
      _e,
      Se,
      ve,
      Me,
      xe,
      Oe,
      Ne,
      De,
      He,
      je,
      Ke,
      ct,
      vt,
      ut,
      Wt,
      en,
      tn,
      dn,
      cn,
      It,
      Dn = r.length();
    while (Dn >= 128) {
      for (ut = 0; ut < 16; ++ut)
        ((t[ut][0] = r.getInt32() >>> 0), (t[ut][1] = r.getInt32() >>> 0));
      for (; ut < 80; ++ut)
        ((tn = t[ut - 2]),
          (Wt = tn[0]),
          (en = tn[1]),
          (o =
            (((Wt >>> 19) | (en << 13)) ^
              ((en >>> 29) | (Wt << 3)) ^
              (Wt >>> 6)) >>>
            0),
          (d =
            (((Wt << 13) | (en >>> 19)) ^
              ((en << 3) | (Wt >>> 29)) ^
              ((Wt << 26) | (en >>> 6))) >>>
            0),
          (cn = t[ut - 15]),
          (Wt = cn[0]),
          (en = cn[1]),
          (p =
            (((Wt >>> 1) | (en << 31)) ^
              ((Wt >>> 8) | (en << 24)) ^
              (Wt >>> 7)) >>>
            0),
          (_ =
            (((Wt << 31) | (en >>> 1)) ^
              ((Wt << 24) | (en >>> 8)) ^
              ((Wt << 25) | (en >>> 7))) >>>
            0),
          (dn = t[ut - 7]),
          (It = t[ut - 16]),
          (en = d + dn[1] + _ + It[1]),
          (t[ut][0] =
            (o + dn[0] + p + It[0] + ((en / 4294967296) >>> 0)) >>> 0),
          (t[ut][1] = en >>> 0));
      ((re = e[0][0]),
        (ue = e[0][1]),
        (de = e[1][0]),
        (_e = e[1][1]),
        (Se = e[2][0]),
        (ve = e[2][1]),
        (Me = e[3][0]),
        (xe = e[3][1]),
        (Oe = e[4][0]),
        (Ne = e[4][1]),
        (De = e[5][0]),
        (He = e[5][1]),
        (je = e[6][0]),
        (Ke = e[6][1]),
        (ct = e[7][0]),
        (vt = e[7][1]));
      for (ut = 0; ut < 80; ++ut)
        ((I =
          (((Oe >>> 14) | (Ne << 18)) ^
            ((Oe >>> 18) | (Ne << 14)) ^
            ((Ne >>> 9) | (Oe << 23))) >>>
          0),
          (D =
            (((Oe << 18) | (Ne >>> 14)) ^
              ((Oe << 14) | (Ne >>> 18)) ^
              ((Ne << 23) | (Oe >>> 9))) >>>
            0),
          (N = (je ^ (Oe & (De ^ je))) >>> 0),
          (F = (Ke ^ (Ne & (He ^ Ke))) >>> 0),
          (E =
            (((re >>> 28) | (ue << 4)) ^
              ((ue >>> 2) | (re << 30)) ^
              ((ue >>> 7) | (re << 25))) >>>
            0),
          (C =
            (((re << 4) | (ue >>> 28)) ^
              ((ue << 30) | (re >>> 2)) ^
              ((ue << 25) | (re >>> 7))) >>>
            0),
          (U = ((re & de) | (Se & (re ^ de))) >>> 0),
          (V = ((ue & _e) | (ve & (ue ^ _e))) >>> 0),
          (en = vt + D + F + DGe[ut][1] + t[ut][1]),
          (o =
            (ct + I + N + DGe[ut][0] + t[ut][0] + ((en / 4294967296) >>> 0)) >>>
            0),
          (d = en >>> 0),
          (en = C + V),
          (p = (E + U + ((en / 4294967296) >>> 0)) >>> 0),
          (_ = en >>> 0),
          (ct = je),
          (vt = Ke),
          (je = De),
          (Ke = He),
          (De = Oe),
          (He = Ne),
          (en = xe + d),
          (Oe = (Me + o + ((en / 4294967296) >>> 0)) >>> 0),
          (Ne = en >>> 0),
          (Me = Se),
          (xe = ve),
          (Se = de),
          (ve = _e),
          (de = re),
          (_e = ue),
          (en = d + _),
          (re = (o + p + ((en / 4294967296) >>> 0)) >>> 0),
          (ue = en >>> 0));
      ((en = e[0][1] + ue),
        (e[0][0] = (e[0][0] + re + ((en / 4294967296) >>> 0)) >>> 0),
        (e[0][1] = en >>> 0),
        (en = e[1][1] + _e),
        (e[1][0] = (e[1][0] + de + ((en / 4294967296) >>> 0)) >>> 0),
        (e[1][1] = en >>> 0),
        (en = e[2][1] + ve),
        (e[2][0] = (e[2][0] + Se + ((en / 4294967296) >>> 0)) >>> 0),
        (e[2][1] = en >>> 0),
        (en = e[3][1] + xe),
        (e[3][0] = (e[3][0] + Me + ((en / 4294967296) >>> 0)) >>> 0),
        (e[3][1] = en >>> 0),
        (en = e[4][1] + Ne),
        (e[4][0] = (e[4][0] + Oe + ((en / 4294967296) >>> 0)) >>> 0),
        (e[4][1] = en >>> 0),
        (en = e[5][1] + He),
        (e[5][0] = (e[5][0] + De + ((en / 4294967296) >>> 0)) >>> 0),
        (e[5][1] = en >>> 0),
        (en = e[6][1] + Ke),
        (e[6][0] = (e[6][0] + je + ((en / 4294967296) >>> 0)) >>> 0),
        (e[6][1] = en >>> 0),
        (en = e[7][1] + vt),
        (e[7][0] = (e[7][0] + ct + ((en / 4294967296) >>> 0)) >>> 0),
        (e[7][1] = en >>> 0),
        (Dn -= 128));
    }
  }
});
var $Ot = commonJS(function (Ixr) {
  var Pxr = yp();
  eP();
  var gk = Pxr.asn1;
  Ixr.privateKeyValidator = {
    name: "PrivateKeyInfo",
    tagClass: gk.Class.UNIVERSAL,
    type: gk.Type.SEQUENCE,
    constructed: !0,
    value: [
      {
        name: "PrivateKeyInfo.version",
        tagClass: gk.Class.UNIVERSAL,
        type: gk.Type.INTEGER,
        constructed: !1,
        capture: "privateKeyVersion",
      },
      {
        name: "PrivateKeyInfo.privateKeyAlgorithm",
        tagClass: gk.Class.UNIVERSAL,
        type: gk.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "AlgorithmIdentifier.algorithm",
            tagClass: gk.Class.UNIVERSAL,
            type: gk.Type.OID,
            constructed: !1,
            capture: "privateKeyOid",
          },
        ],
      },
      {
        name: "PrivateKeyInfo",
        tagClass: gk.Class.UNIVERSAL,
        type: gk.Type.OCTETSTRING,
        constructed: !1,
        capture: "privateKey",
      },
    ],
  };
  Ixr.publicKeyValidator = {
    name: "SubjectPublicKeyInfo",
    tagClass: gk.Class.UNIVERSAL,
    type: gk.Type.SEQUENCE,
    constructed: !0,
    captureAsn1: "subjectPublicKeyInfo",
    value: [
      {
        name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
        tagClass: gk.Class.UNIVERSAL,
        type: gk.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "AlgorithmIdentifier.algorithm",
            tagClass: gk.Class.UNIVERSAL,
            type: gk.Type.OID,
            constructed: !1,
            capture: "publicKeyOid",
          },
        ],
      },
      {
        tagClass: gk.Class.UNIVERSAL,
        type: gk.Type.BITSTRING,
        constructed: !1,
        composed: !0,
        captureBitStringValue: "ed25519PublicKey",
      },
    ],
  };
});
var XOt = commonJS(function (bIs, YOt) {
  var ww = yp();
  jee();
  Zx();
  NGe();
  Ig();
  var WOt = $Ot(),
    { publicKeyValidator: Dxr, privateKeyValidator: Nxr } = WOt;
  if (typeof FGe > "u") FGe = ww.jsbn.BigInteger;
  var FGe,
    $Ge = ww.util.ByteBuffer,
    xv = typeof Buffer > "u" ? Uint8Array : Buffer;
  ww.pki = ww.pki || {};
  YOt.exports = ww.pki.ed25519 = ww.ed25519 = ww.ed25519 || {};
  var mm = ww.ed25519;
  mm.constants = {};
  mm.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
  mm.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
  mm.constants.SEED_BYTE_LENGTH = 32;
  mm.constants.SIGN_BYTE_LENGTH = 64;
  mm.constants.HASH_BYTE_LENGTH = 64;
  mm.generateKeyPair = function (e) {
    e = e || {};
    var t = e.seed;
    if (t === void 0) t = ww.random.getBytesSync(mm.constants.SEED_BYTE_LENGTH);
    else if (typeof t === "string") {
      if (t.length !== mm.constants.SEED_BYTE_LENGTH)
        throw TypeError(
          '"seed" must be ' +
            mm.constants.SEED_BYTE_LENGTH +
            " bytes in length.",
        );
    } else if (!(t instanceof Uint8Array))
      throw TypeError(
        '"seed" must be a node.js Buffer, Uint8Array, or a binary string.',
      );
    t = VD({ message: t, encoding: "binary" });
    var r = new xv(mm.constants.PUBLIC_KEY_BYTE_LENGTH),
      o = new xv(mm.constants.PRIVATE_KEY_BYTE_LENGTH);
    for (var d = 0; d < 32; ++d) o[d] = t[d];
    return (Bxr(r, o), { publicKey: r, privateKey: o });
  };
  mm.privateKeyFromAsn1 = function (e) {
    var t = {},
      r = [],
      o = ww.asn1.validate(e, Nxr, t, r);
    if (!o) {
      var d = Error("Invalid Key.");
      throw ((d.errors = r), d);
    }
    var p = ww.asn1.derToOid(t.privateKeyOid),
      _ = ww.oids.EdDSA25519;
    if (p !== _)
      throw Error('Invalid OID "' + p + '"; OID must be "' + _ + '".');
    var E = t.privateKey,
      C = VD({ message: ww.asn1.fromDer(E).value, encoding: "binary" });
    return { privateKeyBytes: C };
  };
  mm.publicKeyFromAsn1 = function (e) {
    var t = {},
      r = [],
      o = ww.asn1.validate(e, Dxr, t, r);
    if (!o) {
      var d = Error("Invalid Key.");
      throw ((d.errors = r), d);
    }
    var p = ww.asn1.derToOid(t.publicKeyOid),
      _ = ww.oids.EdDSA25519;
    if (p !== _)
      throw Error('Invalid OID "' + p + '"; OID must be "' + _ + '".');
    var E = t.ed25519PublicKey;
    if (E.length !== mm.constants.PUBLIC_KEY_BYTE_LENGTH)
      throw Error("Key length is invalid.");
    return VD({ message: E, encoding: "binary" });
  };
  mm.publicKeyFromPrivateKey = function (e) {
    e = e || {};
    var t = VD({ message: e.privateKey, encoding: "binary" });
    if (t.length !== mm.constants.PRIVATE_KEY_BYTE_LENGTH)
      throw TypeError(
        '"options.privateKey" must have a byte length of ' +
          mm.constants.PRIVATE_KEY_BYTE_LENGTH,
      );
    var r = new xv(mm.constants.PUBLIC_KEY_BYTE_LENGTH);
    for (var o = 0; o < r.length; ++o) r[o] = t[32 + o];
    return r;
  };
  mm.sign = function (e) {
    e = e || {};
    var t = VD(e),
      r = VD({ message: e.privateKey, encoding: "binary" });
    if (r.length === mm.constants.SEED_BYTE_LENGTH) {
      var o = mm.generateKeyPair({ seed: r });
      r = o.privateKey;
    } else if (r.length !== mm.constants.PRIVATE_KEY_BYTE_LENGTH)
      throw TypeError(
        '"options.privateKey" must have a byte length of ' +
          mm.constants.SEED_BYTE_LENGTH +
          " or " +
          mm.constants.PRIVATE_KEY_BYTE_LENGTH,
      );
    var d = new xv(mm.constants.SIGN_BYTE_LENGTH + t.length);
    Uxr(d, t, t.length, r);
    var p = new xv(mm.constants.SIGN_BYTE_LENGTH);
    for (var _ = 0; _ < p.length; ++_) p[_] = d[_];
    return p;
  };
  mm.verify = function (e) {
    e = e || {};
    var t = VD(e);
    if (e.signature === void 0)
      throw TypeError(
        '"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.',
      );
    var r = VD({ message: e.signature, encoding: "binary" });
    if (r.length !== mm.constants.SIGN_BYTE_LENGTH)
      throw TypeError(
        '"options.signature" must have a byte length of ' +
          mm.constants.SIGN_BYTE_LENGTH,
      );
    var o = VD({ message: e.publicKey, encoding: "binary" });
    if (o.length !== mm.constants.PUBLIC_KEY_BYTE_LENGTH)
      throw TypeError(
        '"options.publicKey" must have a byte length of ' +
          mm.constants.PUBLIC_KEY_BYTE_LENGTH,
      );
    var d = new xv(mm.constants.SIGN_BYTE_LENGTH + t.length),
      p = new xv(mm.constants.SIGN_BYTE_LENGTH + t.length),
      _;
    for (_ = 0; _ < mm.constants.SIGN_BYTE_LENGTH; ++_) d[_] = r[_];
    for (_ = 0; _ < t.length; ++_) d[_ + mm.constants.SIGN_BYTE_LENGTH] = t[_];
    return Hxr(p, d, d.length, o) >= 0;
  };
  function VD(e) {
    var t = e.message;
    if (t instanceof Uint8Array || t instanceof xv) return t;
    var r = e.encoding;
    if (t === void 0)
      if (e.md) ((t = e.md.digest().getBytes()), (r = "binary"));
      else throw TypeError('"options.message" or "options.md" not specified.');
    if (typeof t === "string" && !r)
      throw TypeError('"options.encoding" must be "binary" or "utf8".');
    if (typeof t === "string") {
      if (typeof Buffer < "u") return Buffer.from(t, r);
      t = new $Ge(t, r);
    } else if (!(t instanceof $Ge))
      throw TypeError(
        '"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.',
      );
    var o = new xv(t.length());
    for (var d = 0; d < o.length; ++d) o[d] = t.at(d);
    return o;
  }
  var BGe = Qd(),
    Yye = Qd([1]),
    Lxr = Qd([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    Fxr = Qd([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    BOt = Qd([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    UOt = Qd([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    Kee = new Float64Array([
      237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
    ]),
    $xr = Qd([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function Yee(e, t) {
    var r = ww.md.sha512.create(),
      o = new $Ge(e);
    r.update(o.getBytes(t), "binary");
    var d = r.digest().getBytes();
    if (typeof Buffer < "u") return Buffer.from(d, "binary");
    var p = new xv(mm.constants.HASH_BYTE_LENGTH);
    for (var _ = 0; _ < 64; ++_) p[_] = d.charCodeAt(_);
    return p;
  }
  function Bxr(e, t) {
    var r = [Qd(), Qd(), Qd(), Qd()],
      o,
      d = Yee(t, 32);
    ((d[0] &= 248), (d[31] &= 127), (d[31] |= 64), WGe(r, d), jGe(e, r));
    for (o = 0; o < 32; ++o) t[o + 32] = e[o];
    return 0;
  }
  function Uxr(e, t, r, o) {
    var d,
      p,
      _ = new Float64Array(64),
      E = [Qd(), Qd(), Qd(), Qd()],
      C = Yee(o, 32);
    ((C[0] &= 248), (C[31] &= 127), (C[31] |= 64));
    var I = r + 64;
    for (d = 0; d < r; ++d) e[64 + d] = t[d];
    for (d = 0; d < 32; ++d) e[32 + d] = C[32 + d];
    var D = Yee(e.subarray(32), r + 32);
    (UGe(D), WGe(E, D), jGe(e, E));
    for (d = 32; d < 64; ++d) e[d] = o[d];
    var N = Yee(e, r + 64);
    UGe(N);
    for (d = 32; d < 64; ++d) _[d] = 0;
    for (d = 0; d < 32; ++d) _[d] = D[d];
    for (d = 0; d < 32; ++d) for (p = 0; p < 32; p++) _[d + p] += N[d] * C[p];
    return (GOt(e.subarray(32), _), I);
  }
  function Hxr(e, t, r, o) {
    var d,
      p,
      _ = new xv(32),
      E = [Qd(), Qd(), Qd(), Qd()],
      C = [Qd(), Qd(), Qd(), Qd()];
    if (((p = -1), r < 64)) return -1;
    if (Wxr(C, o)) return -1;
    if (!jxr(t, 32)) return -1;
    for (d = 0; d < r; ++d) e[d] = t[d];
    for (d = 0; d < 32; ++d) e[d + 32] = o[d];
    var I = Yee(e, r);
    if (
      (UGe(I),
      VOt(E, C, I),
      WGe(C, t.subarray(32)),
      HGe(E, C),
      jGe(_, E),
      (r -= 64),
      zOt(t, 0, _, 0))
    ) {
      for (d = 0; d < r; ++d) e[d] = 0;
      return -1;
    }
    for (d = 0; d < r; ++d) e[d] = t[d + 64];
    return ((p = r), p);
  }
  function jxr(e, t) {
    var r;
    for (r = 31; r >= 0; --r) {
      if (e[t + r] < Kee[r]) return !0;
      if (e[t + r] > Kee[r]) return !1;
    }
    return !1;
  }
  function GOt(e, t) {
    var r, o, d, p;
    for (o = 63; o >= 32; --o) {
      r = 0;
      for (d = o - 32, p = o - 12; d < p; ++d)
        ((t[d] += r - 16 * t[o] * Kee[d - (o - 32)]),
          (r = (t[d] + 128) >> 8),
          (t[d] -= r * 256));
      ((t[d] += r), (t[o] = 0));
    }
    r = 0;
    for (d = 0; d < 32; ++d)
      ((t[d] += r - (t[31] >> 4) * Kee[d]), (r = t[d] >> 8), (t[d] &= 255));
    for (d = 0; d < 32; ++d) t[d] -= r * Kee[d];
    for (o = 0; o < 32; ++o) ((t[o + 1] += t[o] >> 8), (e[o] = t[o] & 255));
  }
  function UGe(e) {
    var t = new Float64Array(64);
    for (var r = 0; r < 64; ++r) ((t[r] = e[r]), (e[r] = 0));
    GOt(e, t);
  }
  function HGe(e, t) {
    var r = Qd(),
      o = Qd(),
      d = Qd(),
      p = Qd(),
      _ = Qd(),
      E = Qd(),
      C = Qd(),
      I = Qd(),
      D = Qd();
    (Y4(r, e[1], e[0]),
      Y4(D, t[1], t[0]),
      wy(r, r, D),
      K4(o, e[0], e[1]),
      K4(D, t[0], t[1]),
      wy(o, o, D),
      wy(d, e[3], t[3]),
      wy(d, d, Fxr),
      wy(p, e[2], t[2]),
      K4(p, p, p),
      Y4(_, o, r),
      Y4(E, p, d),
      K4(C, p, d),
      K4(I, o, r),
      wy(e[0], _, E),
      wy(e[1], I, C),
      wy(e[2], C, E),
      wy(e[3], _, I));
  }
  function HOt(e, t, r) {
    for (var o = 0; o < 4; ++o) KOt(e[o], t[o], r);
  }
  function jGe(e, t) {
    var r = Qd(),
      o = Qd(),
      d = Qd();
    (Vxr(d, t[2]),
      wy(r, t[0], d),
      wy(o, t[1], d),
      Xye(e, o),
      (e[31] ^= qOt(r) << 7));
  }
  function Xye(e, t) {
    var r,
      o,
      d,
      p = Qd(),
      _ = Qd();
    for (r = 0; r < 16; ++r) _[r] = t[r];
    (LGe(_), LGe(_), LGe(_));
    for (o = 0; o < 2; ++o) {
      p[0] = _[0] - 65517;
      for (r = 1; r < 15; ++r)
        ((p[r] = _[r] - 65535 - ((p[r - 1] >> 16) & 1)), (p[r - 1] &= 65535));
      ((p[15] = _[15] - 32767 - ((p[14] >> 16) & 1)),
        (d = (p[15] >> 16) & 1),
        (p[14] &= 65535),
        KOt(_, p, 1 - d));
    }
    for (r = 0; r < 16; r++)
      ((e[2 * r] = _[r] & 255), (e[2 * r + 1] = _[r] >> 8));
  }
  function Wxr(e, t) {
    var r = Qd(),
      o = Qd(),
      d = Qd(),
      p = Qd(),
      _ = Qd(),
      E = Qd(),
      C = Qd();
    if (
      (SB(e[2], Yye),
      Gxr(e[1], t),
      KW(d, e[1]),
      wy(p, d, Lxr),
      Y4(d, d, e[2]),
      K4(p, e[2], p),
      KW(_, p),
      KW(E, _),
      wy(C, E, _),
      wy(r, C, d),
      wy(r, r, p),
      zxr(r, r),
      wy(r, r, d),
      wy(r, r, p),
      wy(r, r, p),
      wy(e[0], r, p),
      KW(o, e[0]),
      wy(o, o, p),
      jOt(o, d))
    )
      wy(e[0], e[0], $xr);
    if ((KW(o, e[0]), wy(o, o, p), jOt(o, d))) return -1;
    if (qOt(e[0]) === t[31] >> 7) Y4(e[0], BGe, e[0]);
    return (wy(e[3], e[0], e[1]), 0);
  }
  function Gxr(e, t) {
    var r;
    for (r = 0; r < 16; ++r) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
    e[15] &= 32767;
  }
  function zxr(e, t) {
    var r = Qd(),
      o;
    for (o = 0; o < 16; ++o) r[o] = t[o];
    for (o = 250; o >= 0; --o) if ((KW(r, r), o !== 1)) wy(r, r, t);
    for (o = 0; o < 16; ++o) e[o] = r[o];
  }
  function jOt(e, t) {
    var r = new xv(32),
      o = new xv(32);
    return (Xye(r, e), Xye(o, t), zOt(r, 0, o, 0));
  }
  function zOt(e, t, r, o) {
    return qxr(e, t, r, o, 32);
  }
  function qxr(e, t, r, o, d) {
    var p,
      _ = 0;
    for (p = 0; p < d; ++p) _ |= e[t + p] ^ r[o + p];
    return (1 & ((_ - 1) >>> 8)) - 1;
  }
  function qOt(e) {
    var t = new xv(32);
    return (Xye(t, e), t[0] & 1);
  }
  function VOt(e, t, r) {
    var o, d;
    (SB(e[0], BGe), SB(e[1], Yye), SB(e[2], Yye), SB(e[3], BGe));
    for (d = 255; d >= 0; --d)
      ((o = (r[(d / 8) | 0] >> (d & 7)) & 1),
        HOt(e, t, o),
        HGe(t, e),
        HGe(e, e),
        HOt(e, t, o));
  }
  function WGe(e, t) {
    var r = [Qd(), Qd(), Qd(), Qd()];
    (SB(r[0], BOt),
      SB(r[1], UOt),
      SB(r[2], Yye),
      wy(r[3], BOt, UOt),
      VOt(e, r, t));
  }
  function SB(e, t) {
    var r;
    for (r = 0; r < 16; r++) e[r] = t[r] | 0;
  }
  function Vxr(e, t) {
    var r = Qd(),
      o;
    for (o = 0; o < 16; ++o) r[o] = t[o];
    for (o = 253; o >= 0; --o) if ((KW(r, r), o !== 2 && o !== 4)) wy(r, r, t);
    for (o = 0; o < 16; ++o) e[o] = r[o];
  }
  function LGe(e) {
    var t,
      r,
      o = 1;
    for (t = 0; t < 16; ++t)
      ((r = e[t] + o + 65535),
        (o = Math.floor(r / 65536)),
        (e[t] = r - o * 65536));
    e[0] += o - 1 + 37 * (o - 1);
  }
  function KOt(e, t, r) {
    var o,
      d = ~(r - 1);
    for (var p = 0; p < 16; ++p)
      ((o = d & (e[p] ^ t[p])), (e[p] ^= o), (t[p] ^= o));
  }
  function Qd(e) {
    var t,
      r = new Float64Array(16);
    if (e) for (t = 0; t < e.length; ++t) r[t] = e[t];
    return r;
  }
  function K4(e, t, r) {
    for (var o = 0; o < 16; ++o) e[o] = t[o] + r[o];
  }
  function Y4(e, t, r) {
    for (var o = 0; o < 16; ++o) e[o] = t[o] - r[o];
  }
  function KW(e, t) {
    wy(e, t, t);
  }
  function wy(e, t, r) {
    var o,
      d,
      p = 0,
      _ = 0,
      E = 0,
      C = 0,
      I = 0,
      D = 0,
      N = 0,
      F = 0,
      U = 0,
      V = 0,
      re = 0,
      ue = 0,
      de = 0,
      _e = 0,
      Se = 0,
      ve = 0,
      Me = 0,
      xe = 0,
      Oe = 0,
      Ne = 0,
      De = 0,
      He = 0,
      je = 0,
      Ke = 0,
      ct = 0,
      vt = 0,
      ut = 0,
      Wt = 0,
      en = 0,
      tn = 0,
      dn = 0,
      cn = r[0],
      It = r[1],
      Dn = r[2],
      gn = r[3],
      Qt = r[4],
      wn = r[5],
      un = r[6],
      kn = r[7],
      on = r[8],
      En = r[9],
      $n = r[10],
      ur = r[11],
      Cn = r[12],
      Kn = r[13],
      hn = r[14],
      At = r[15];
    ((o = t[0]),
      (p += o * cn),
      (_ += o * It),
      (E += o * Dn),
      (C += o * gn),
      (I += o * Qt),
      (D += o * wn),
      (N += o * un),
      (F += o * kn),
      (U += o * on),
      (V += o * En),
      (re += o * $n),
      (ue += o * ur),
      (de += o * Cn),
      (_e += o * Kn),
      (Se += o * hn),
      (ve += o * At),
      (o = t[1]),
      (_ += o * cn),
      (E += o * It),
      (C += o * Dn),
      (I += o * gn),
      (D += o * Qt),
      (N += o * wn),
      (F += o * un),
      (U += o * kn),
      (V += o * on),
      (re += o * En),
      (ue += o * $n),
      (de += o * ur),
      (_e += o * Cn),
      (Se += o * Kn),
      (ve += o * hn),
      (Me += o * At),
      (o = t[2]),
      (E += o * cn),
      (C += o * It),
      (I += o * Dn),
      (D += o * gn),
      (N += o * Qt),
      (F += o * wn),
      (U += o * un),
      (V += o * kn),
      (re += o * on),
      (ue += o * En),
      (de += o * $n),
      (_e += o * ur),
      (Se += o * Cn),
      (ve += o * Kn),
      (Me += o * hn),
      (xe += o * At),
      (o = t[3]),
      (C += o * cn),
      (I += o * It),
      (D += o * Dn),
      (N += o * gn),
      (F += o * Qt),
      (U += o * wn),
      (V += o * un),
      (re += o * kn),
      (ue += o * on),
      (de += o * En),
      (_e += o * $n),
      (Se += o * ur),
      (ve += o * Cn),
      (Me += o * Kn),
      (xe += o * hn),
      (Oe += o * At),
      (o = t[4]),
      (I += o * cn),
      (D += o * It),
      (N += o * Dn),
      (F += o * gn),
      (U += o * Qt),
      (V += o * wn),
      (re += o * un),
      (ue += o * kn),
      (de += o * on),
      (_e += o * En),
      (Se += o * $n),
      (ve += o * ur),
      (Me += o * Cn),
      (xe += o * Kn),
      (Oe += o * hn),
      (Ne += o * At),
      (o = t[5]),
      (D += o * cn),
      (N += o * It),
      (F += o * Dn),
      (U += o * gn),
      (V += o * Qt),
      (re += o * wn),
      (ue += o * un),
      (de += o * kn),
      (_e += o * on),
      (Se += o * En),
      (ve += o * $n),
      (Me += o * ur),
      (xe += o * Cn),
      (Oe += o * Kn),
      (Ne += o * hn),
      (De += o * At),
      (o = t[6]),
      (N += o * cn),
      (F += o * It),
      (U += o * Dn),
      (V += o * gn),
      (re += o * Qt),
      (ue += o * wn),
      (de += o * un),
      (_e += o * kn),
      (Se += o * on),
      (ve += o * En),
      (Me += o * $n),
      (xe += o * ur),
      (Oe += o * Cn),
      (Ne += o * Kn),
      (De += o * hn),
      (He += o * At),
      (o = t[7]),
      (F += o * cn),
      (U += o * It),
      (V += o * Dn),
      (re += o * gn),
      (ue += o * Qt),
      (de += o * wn),
      (_e += o * un),
      (Se += o * kn),
      (ve += o * on),
      (Me += o * En),
      (xe += o * $n),
      (Oe += o * ur),
      (Ne += o * Cn),
      (De += o * Kn),
      (He += o * hn),
      (je += o * At),
      (o = t[8]),
      (U += o * cn),
      (V += o * It),
      (re += o * Dn),
      (ue += o * gn),
      (de += o * Qt),
      (_e += o * wn),
      (Se += o * un),
      (ve += o * kn),
      (Me += o * on),
      (xe += o * En),
      (Oe += o * $n),
      (Ne += o * ur),
      (De += o * Cn),
      (He += o * Kn),
      (je += o * hn),
      (Ke += o * At),
      (o = t[9]),
      (V += o * cn),
      (re += o * It),
      (ue += o * Dn),
      (de += o * gn),
      (_e += o * Qt),
      (Se += o * wn),
      (ve += o * un),
      (Me += o * kn),
      (xe += o * on),
      (Oe += o * En),
      (Ne += o * $n),
      (De += o * ur),
      (He += o * Cn),
      (je += o * Kn),
      (Ke += o * hn),
      (ct += o * At),
      (o = t[10]),
      (re += o * cn),
      (ue += o * It),
      (de += o * Dn),
      (_e += o * gn),
      (Se += o * Qt),
      (ve += o * wn),
      (Me += o * un),
      (xe += o * kn),
      (Oe += o * on),
      (Ne += o * En),
      (De += o * $n),
      (He += o * ur),
      (je += o * Cn),
      (Ke += o * Kn),
      (ct += o * hn),
      (vt += o * At),
      (o = t[11]),
      (ue += o * cn),
      (de += o * It),
      (_e += o * Dn),
      (Se += o * gn),
      (ve += o * Qt),
      (Me += o * wn),
      (xe += o * un),
      (Oe += o * kn),
      (Ne += o * on),
      (De += o * En),
      (He += o * $n),
      (je += o * ur),
      (Ke += o * Cn),
      (ct += o * Kn),
      (vt += o * hn),
      (ut += o * At),
      (o = t[12]),
      (de += o * cn),
      (_e += o * It),
      (Se += o * Dn),
      (ve += o * gn),
      (Me += o * Qt),
      (xe += o * wn),
      (Oe += o * un),
      (Ne += o * kn),
      (De += o * on),
      (He += o * En),
      (je += o * $n),
      (Ke += o * ur),
      (ct += o * Cn),
      (vt += o * Kn),
      (ut += o * hn),
      (Wt += o * At),
      (o = t[13]),
      (_e += o * cn),
      (Se += o * It),
      (ve += o * Dn),
      (Me += o * gn),
      (xe += o * Qt),
      (Oe += o * wn),
      (Ne += o * un),
      (De += o * kn),
      (He += o * on),
      (je += o * En),
      (Ke += o * $n),
      (ct += o * ur),
      (vt += o * Cn),
      (ut += o * Kn),
      (Wt += o * hn),
      (en += o * At),
      (o = t[14]),
      (Se += o * cn),
      (ve += o * It),
      (Me += o * Dn),
      (xe += o * gn),
      (Oe += o * Qt),
      (Ne += o * wn),
      (De += o * un),
      (He += o * kn),
      (je += o * on),
      (Ke += o * En),
      (ct += o * $n),
      (vt += o * ur),
      (ut += o * Cn),
      (Wt += o * Kn),
      (en += o * hn),
      (tn += o * At),
      (o = t[15]),
      (ve += o * cn),
      (Me += o * It),
      (xe += o * Dn),
      (Oe += o * gn),
      (Ne += o * Qt),
      (De += o * wn),
      (He += o * un),
      (je += o * kn),
      (Ke += o * on),
      (ct += o * En),
      (vt += o * $n),
      (ut += o * ur),
      (Wt += o * Cn),
      (en += o * Kn),
      (tn += o * hn),
      (dn += o * At),
      (p += 38 * Me),
      (_ += 38 * xe),
      (E += 38 * Oe),
      (C += 38 * Ne),
      (I += 38 * De),
      (D += 38 * He),
      (N += 38 * je),
      (F += 38 * Ke),
      (U += 38 * ct),
      (V += 38 * vt),
      (re += 38 * ut),
      (ue += 38 * Wt),
      (de += 38 * en),
      (_e += 38 * tn),
      (Se += 38 * dn),
      (d = 1),
      (o = p + d + 65535),
      (d = Math.floor(o / 65536)),
      (p = o - d * 65536),
      (o = _ + d + 65535),
      (d = Math.floor(o / 65536)),
      (_ = o - d * 65536),
      (o = E + d + 65535),
      (d = Math.floor(o / 65536)),
      (E = o - d * 65536),
      (o = C + d + 65535),
      (d = Math.floor(o / 65536)),
      (C = o - d * 65536),
      (o = I + d + 65535),
      (d = Math.floor(o / 65536)),
      (I = o - d * 65536),
      (o = D + d + 65535),
      (d = Math.floor(o / 65536)),
      (D = o - d * 65536),
      (o = N + d + 65535),
      (d = Math.floor(o / 65536)),
      (N = o - d * 65536),
      (o = F + d + 65535),
      (d = Math.floor(o / 65536)),
      (F = o - d * 65536),
      (o = U + d + 65535),
      (d = Math.floor(o / 65536)),
      (U = o - d * 65536),
      (o = V + d + 65535),
      (d = Math.floor(o / 65536)),
      (V = o - d * 65536),
      (o = re + d + 65535),
      (d = Math.floor(o / 65536)),
      (re = o - d * 65536),
      (o = ue + d + 65535),
      (d = Math.floor(o / 65536)),
      (ue = o - d * 65536),
      (o = de + d + 65535),
      (d = Math.floor(o / 65536)),
      (de = o - d * 65536),
      (o = _e + d + 65535),
      (d = Math.floor(o / 65536)),
      (_e = o - d * 65536),
      (o = Se + d + 65535),
      (d = Math.floor(o / 65536)),
      (Se = o - d * 65536),
      (o = ve + d + 65535),
      (d = Math.floor(o / 65536)),
      (ve = o - d * 65536),
      (p += d - 1 + 37 * (d - 1)),
      (d = 1),
      (o = p + d + 65535),
      (d = Math.floor(o / 65536)),
      (p = o - d * 65536),
      (o = _ + d + 65535),
      (d = Math.floor(o / 65536)),
      (_ = o - d * 65536),
      (o = E + d + 65535),
      (d = Math.floor(o / 65536)),
      (E = o - d * 65536),
      (o = C + d + 65535),
      (d = Math.floor(o / 65536)),
      (C = o - d * 65536),
      (o = I + d + 65535),
      (d = Math.floor(o / 65536)),
      (I = o - d * 65536),
      (o = D + d + 65535),
      (d = Math.floor(o / 65536)),
      (D = o - d * 65536),
      (o = N + d + 65535),
      (d = Math.floor(o / 65536)),
      (N = o - d * 65536),
      (o = F + d + 65535),
      (d = Math.floor(o / 65536)),
      (F = o - d * 65536),
      (o = U + d + 65535),
      (d = Math.floor(o / 65536)),
      (U = o - d * 65536),
      (o = V + d + 65535),
      (d = Math.floor(o / 65536)),
      (V = o - d * 65536),
      (o = re + d + 65535),
      (d = Math.floor(o / 65536)),
      (re = o - d * 65536),
      (o = ue + d + 65535),
      (d = Math.floor(o / 65536)),
      (ue = o - d * 65536),
      (o = de + d + 65535),
      (d = Math.floor(o / 65536)),
      (de = o - d * 65536),
      (o = _e + d + 65535),
      (d = Math.floor(o / 65536)),
      (_e = o - d * 65536),
      (o = Se + d + 65535),
      (d = Math.floor(o / 65536)),
      (Se = o - d * 65536),
      (o = ve + d + 65535),
      (d = Math.floor(o / 65536)),
      (ve = o - d * 65536),
      (p += d - 1 + 37 * (d - 1)),
      (e[0] = p),
      (e[1] = _),
      (e[2] = E),
      (e[3] = C),
      (e[4] = I),
      (e[5] = D),
      (e[6] = N),
      (e[7] = F),
      (e[8] = U),
      (e[9] = V),
      (e[10] = re),
      (e[11] = ue),
      (e[12] = de),
      (e[13] = _e),
      (e[14] = Se),
      (e[15] = ve));
  }
});
var eDt = commonJS(function (SIs, ZOt) {
  var Ex = yp();
  Ig();
  Zx();
  jee();
  ZOt.exports = Ex.kem = Ex.kem || {};
  var QOt = Ex.jsbn.BigInteger;
  Ex.kem.rsa = {};
  Ex.kem.rsa.create = function (e, t) {
    t = t || {};
    var r = t.prng || Ex.random,
      o = {};
    return (
      (o.encrypt = function (d, p) {
        var _ = Math.ceil(d.n.bitLength() / 8),
          E;
        do E = new QOt(Ex.util.bytesToHex(r.getBytesSync(_)), 16).mod(d.n);
        while (E.compareTo(QOt.ONE) <= 0);
        E = Ex.util.hexToBytes(E.toString(16));
        var C = _ - E.length;
        if (C > 0) E = Ex.util.fillString(String.fromCharCode(0), C) + E;
        var I = d.encrypt(E, "NONE"),
          D = e.generate(E, p);
        return { encapsulation: I, key: D };
      }),
      (o.decrypt = function (d, p, _) {
        var E = d.decrypt(p, "NONE");
        return e.generate(E, _);
      }),
      o
    );
  };
  Ex.kem.kdf1 = function (e, t) {
    JOt(this, e, 0, t || e.digestLength);
  };
  Ex.kem.kdf2 = function (e, t) {
    JOt(this, e, 1, t || e.digestLength);
  };
  function JOt(e, t, r, o) {
    e.generate = function (d, p) {
      var _ = new Ex.util.ByteBuffer(),
        E = Math.ceil(p / o) + r,
        C = new Ex.util.ByteBuffer();
      for (var I = r; I < E; ++I) {
        (C.putInt32(I), t.start(), t.update(d + C.getBytes()));
        var D = t.digest();
        _.putBytes(D.getBytes(o));
      }
      return (_.truncate(_.length() - p), _.getBytes());
    };
  }
});
var nDt = commonJS(function (kIs, tDt) {
  var Cm = yp();
  Ig();
  tDt.exports = Cm.log = Cm.log || {};
  Cm.log.levels = [
    "none",
    "error",
    "warning",
    "info",
    "debug",
    "verbose",
    "max",
  ];
  var Zye = {},
    GGe = [],
    Xee = null;
  Cm.log.LEVEL_LOCKED = 2;
  Cm.log.NO_LEVEL_CHECK = 4;
  Cm.log.INTERPOLATE = 8;
  for (wA = 0; wA < Cm.log.levels.length; ++wA)
    ((Qye = Cm.log.levels[wA]),
      (Zye[Qye] = { index: wA, name: Qye.toUpperCase() }));
  var Qye, wA;
  Cm.log.logMessage = function (e) {
    var t = Zye[e.level].index;
    for (var r = 0; r < GGe.length; ++r) {
      var o = GGe[r];
      if (o.flags & Cm.log.NO_LEVEL_CHECK) o.f(e);
      else {
        var d = Zye[o.level].index;
        if (t <= d) o.f(o, e);
      }
    }
  };
  Cm.log.prepareStandard = function (e) {
    if (!("standard" in e))
      e.standard = Zye[e.level].name + " [" + e.category + "] " + e.message;
  };
  Cm.log.prepareFull = function (e) {
    if (!("full" in e)) {
      var t = [e.message];
      ((t = t.concat([])), (e.full = Cm.util.format.apply(this, t)));
    }
  };
  Cm.log.prepareStandardFull = function (e) {
    if (!("standardFull" in e))
      (Cm.log.prepareStandard(e), (e.standardFull = e.standard));
  };
  Jye = ["error", "warning", "info", "debug", "verbose"];
  for (wA = 0; wA < Jye.length; ++wA)
    (function (t) {
      Cm.log[t] = function (r, o) {
        var d = Array.prototype.slice.call(arguments).slice(2),
          p = {
            timestamp: new Date(),
            level: t,
            category: r,
            message: o,
            arguments: d,
          };
        Cm.log.logMessage(p);
      };
    })(Jye[wA]);
  var Jye, wA;
  Cm.log.makeLogger = function (e) {
    var t = { flags: 0, f: e };
    return (Cm.log.setLevel(t, "none"), t);
  };
  Cm.log.setLevel = function (e, t) {
    var r = !1;
    if (e && !(e.flags & Cm.log.LEVEL_LOCKED))
      for (var o = 0; o < Cm.log.levels.length; ++o) {
        var d = Cm.log.levels[o];
        if (t == d) {
          ((e.level = t), (r = !0));
          break;
        }
      }
    return r;
  };
  Cm.log.lock = function (e, t) {
    if (typeof t > "u" || t) e.flags |= Cm.log.LEVEL_LOCKED;
    else e.flags &= ~Cm.log.LEVEL_LOCKED;
  };
  Cm.log.addLogger = function (e) {
    GGe.push(e);
  };
  if (typeof console < "u" && "log" in console) {
    if (console.error && console.warn && console.info && console.debug)
      ((zGe = {
        error: console.error,
        warning: console.warn,
        info: console.info,
        debug: console.debug,
        verbose: console.debug,
      }),
        (Q4 = function (e, t) {
          Cm.log.prepareStandard(t);
          var r = zGe[t.level],
            o = [t.standard];
          ((o = o.concat(t.arguments.slice())), r.apply(console, o));
        }),
        (YW = Cm.log.makeLogger(Q4)));
    else
      ((Q4 = function (t, r) {
        (Cm.log.prepareStandardFull(r), console.log(r.standardFull));
      }),
        (YW = Cm.log.makeLogger(Q4)));
    (Cm.log.setLevel(YW, "debug"), Cm.log.addLogger(YW), (Xee = YW));
  } else console = { log: function () {} };
  var YW, zGe, Q4;
  if (Xee !== null && typeof window < "u" && window.location) {
    if (
      ((X4 = new URL(window.location.href).searchParams),
      X4.has("console.level"))
    )
      Cm.log.setLevel(Xee, X4.get("console.level").slice(-1)[0]);
    if (X4.has("console.lock")) {
      if (((qGe = X4.get("console.lock").slice(-1)[0]), qGe == "true"))
        Cm.log.lock(Xee);
    }
  }
  var X4, qGe;
  Cm.log.consoleLogger = Xee;
});
var oDt = commonJS(function (wIs, rDt) {
  rDt.exports = nM();
  Iye();
  W4();
  sGe();
  NGe();
});
var aDt = commonJS(function (EIs, iDt) {
  var Il = yp();
  oB();
  eP();
  Uee();
  sB();
  MW();
  SGe();
  Zx();
  Ig();
  zye();
  var Ho = Il.asn1,
    sT = (iDt.exports = Il.pkcs7 = Il.pkcs7 || {});
  sT.messageFromPem = function (e) {
    var t = Il.pem.decode(e)[0];
    if (t.type !== "PKCS7") {
      var r = Error(
        'Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".',
      );
      throw ((r.headerType = t.type), r);
    }
    if (t.procType && t.procType.type === "ENCRYPTED")
      throw Error(
        "Could not convert PKCS#7 message from PEM; PEM is encrypted.",
      );
    var o = Ho.fromDer(t.body);
    return sT.messageFromAsn1(o);
  };
  sT.messageToPem = function (e, t) {
    var r = { type: "PKCS7", body: Ho.toDer(e.toAsn1()).getBytes() };
    return Il.pem.encode(r, { maxline: t });
  };
  sT.messageFromAsn1 = function (e) {
    var t = {},
      r = [];
    if (!Ho.validate(e, sT.asn1.contentInfoValidator, t, r)) {
      var o = Error(
        "Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.",
      );
      throw ((o.errors = r), o);
    }
    var d = Ho.derToOid(t.contentType),
      p;
    switch (d) {
      case Il.pki.oids.envelopedData:
        p = sT.createEnvelopedData();
        break;
      case Il.pki.oids.encryptedData:
        p = sT.createEncryptedData();
        break;
      case Il.pki.oids.signedData:
        p = sT.createSignedData();
        break;
      default:
        throw Error(
          "Cannot read PKCS#7 message. ContentType with OID " +
            d +
            " is not (yet) supported.",
        );
    }
    return (p.fromAsn1(t.content.value[0]), p);
  };
  sT.createSignedData = function () {
    var e = null;
    return (
      (e = {
        type: Il.pki.oids.signedData,
        version: 1,
        certificates: [],
        crls: [],
        signers: [],
        digestAlgorithmIdentifiers: [],
        contentInfo: null,
        signerInfos: [],
        fromAsn1: function (o) {
          if (
            (KGe(e, o, sT.asn1.signedDataValidator),
            (e.certificates = []),
            (e.crls = []),
            (e.digestAlgorithmIdentifiers = []),
            (e.contentInfo = null),
            (e.signerInfos = []),
            e.rawCapture.certificates)
          ) {
            var d = e.rawCapture.certificates.value;
            for (var p = 0; p < d.length; ++p)
              e.certificates.push(Il.pki.certificateFromAsn1(d[p]));
          }
        },
        toAsn1: function () {
          if (!e.contentInfo) e.sign();
          var o = [];
          for (var d = 0; d < e.certificates.length; ++d)
            o.push(Il.pki.certificateToAsn1(e.certificates[d]));
          var p = [],
            _ = Ho.create(Ho.Class.CONTEXT_SPECIFIC, 0, !0, [
              Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
                Ho.create(
                  Ho.Class.UNIVERSAL,
                  Ho.Type.INTEGER,
                  !1,
                  Ho.integerToDer(e.version).getBytes(),
                ),
                Ho.create(
                  Ho.Class.UNIVERSAL,
                  Ho.Type.SET,
                  !0,
                  e.digestAlgorithmIdentifiers,
                ),
                e.contentInfo,
              ]),
            ]);
          if (o.length > 0)
            _.value[0].value.push(
              Ho.create(Ho.Class.CONTEXT_SPECIFIC, 0, !0, o),
            );
          if (p.length > 0)
            _.value[0].value.push(
              Ho.create(Ho.Class.CONTEXT_SPECIFIC, 1, !0, p),
            );
          return (
            _.value[0].value.push(
              Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SET, !0, e.signerInfos),
            ),
            Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
              Ho.create(
                Ho.Class.UNIVERSAL,
                Ho.Type.OID,
                !1,
                Ho.oidToDer(e.type).getBytes(),
              ),
              _,
            ])
          );
        },
        addSigner: function (o) {
          var { issuer: d, serialNumber: p } = o;
          if (o.certificate) {
            var _ = o.certificate;
            if (typeof _ === "string") _ = Il.pki.certificateFromPem(_);
            ((d = _.issuer.attributes), (p = _.serialNumber));
          }
          var E = o.key;
          if (!E)
            throw Error(
              "Could not add PKCS#7 signer; no private key specified.",
            );
          if (typeof E === "string") E = Il.pki.privateKeyFromPem(E);
          var C = o.digestAlgorithm || Il.pki.oids.sha1;
          switch (C) {
            case Il.pki.oids.sha1:
            case Il.pki.oids.sha256:
            case Il.pki.oids.sha384:
            case Il.pki.oids.sha512:
            case Il.pki.oids.md5:
              break;
            default:
              throw Error(
                "Could not add PKCS#7 signer; unknown message digest algorithm: " +
                  C,
              );
          }
          var I = o.authenticatedAttributes || [];
          if (I.length > 0) {
            var D = !1,
              N = !1;
            for (var F = 0; F < I.length; ++F) {
              var U = I[F];
              if (!D && U.type === Il.pki.oids.contentType) {
                if (((D = !0), N)) break;
                continue;
              }
              if (!N && U.type === Il.pki.oids.messageDigest) {
                if (((N = !0), D)) break;
                continue;
              }
            }
            if (!D || !N)
              throw Error(
                "Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.",
              );
          }
          e.signers.push({
            key: E,
            version: 1,
            issuer: d,
            serialNumber: p,
            digestAlgorithm: C,
            signatureAlgorithm: Il.pki.oids.rsaEncryption,
            signature: null,
            authenticatedAttributes: I,
            unauthenticatedAttributes: [],
          });
        },
        sign: function (o) {
          if (
            ((o = o || {}),
            typeof e.content !== "object" || e.contentInfo === null)
          ) {
            if (
              ((e.contentInfo = Ho.create(
                Ho.Class.UNIVERSAL,
                Ho.Type.SEQUENCE,
                !0,
                [
                  Ho.create(
                    Ho.Class.UNIVERSAL,
                    Ho.Type.OID,
                    !1,
                    Ho.oidToDer(Il.pki.oids.data).getBytes(),
                  ),
                ],
              )),
              "content" in e)
            ) {
              var d;
              if (e.content instanceof Il.util.ByteBuffer)
                d = e.content.bytes();
              else if (typeof e.content === "string")
                d = Il.util.encodeUtf8(e.content);
              if (o.detached)
                e.detachedContent = Ho.create(
                  Ho.Class.UNIVERSAL,
                  Ho.Type.OCTETSTRING,
                  !1,
                  d,
                );
              else
                e.contentInfo.value.push(
                  Ho.create(Ho.Class.CONTEXT_SPECIFIC, 0, !0, [
                    Ho.create(Ho.Class.UNIVERSAL, Ho.Type.OCTETSTRING, !1, d),
                  ]),
                );
            }
          }
          if (e.signers.length === 0) return;
          var p = t();
          r(p);
        },
        verify: function () {
          throw Error("PKCS#7 signature verification not yet implemented.");
        },
        addCertificate: function (o) {
          if (typeof o === "string") o = Il.pki.certificateFromPem(o);
          e.certificates.push(o);
        },
        addCertificateRevokationList: function (o) {
          throw Error("PKCS#7 CRL support not yet implemented.");
        },
      }),
      e
    );
    function t() {
      var o = {};
      for (var d = 0; d < e.signers.length; ++d) {
        var p = e.signers[d],
          _ = p.digestAlgorithm;
        if (!(_ in o)) o[_] = Il.md[Il.pki.oids[_]].create();
        if (p.authenticatedAttributes.length === 0) p.md = o[_];
        else p.md = Il.md[Il.pki.oids[_]].create();
      }
      e.digestAlgorithmIdentifiers = [];
      for (var _ in o)
        e.digestAlgorithmIdentifiers.push(
          Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
            Ho.create(
              Ho.Class.UNIVERSAL,
              Ho.Type.OID,
              !1,
              Ho.oidToDer(_).getBytes(),
            ),
            Ho.create(Ho.Class.UNIVERSAL, Ho.Type.NULL, !1, ""),
          ]),
        );
      return o;
    }
    function r(o) {
      var d;
      if (e.detachedContent) d = e.detachedContent;
      else ((d = e.contentInfo.value[1]), (d = d.value[0]));
      if (!d)
        throw Error(
          "Could not sign PKCS#7 message; there is no content to sign.",
        );
      var p = Ho.derToOid(e.contentInfo.value[0].value),
        _ = Ho.toDer(d);
      (_.getByte(), Ho.getBerValueLength(_), (_ = _.getBytes()));
      for (var E in o) o[E].start().update(_);
      var C = new Date();
      for (var I = 0; I < e.signers.length; ++I) {
        var D = e.signers[I];
        if (D.authenticatedAttributes.length === 0) {
          if (p !== Il.pki.oids.data)
            throw Error(
              "Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.",
            );
        } else {
          D.authenticatedAttributesAsn1 = Ho.create(
            Ho.Class.CONTEXT_SPECIFIC,
            0,
            !0,
            [],
          );
          var N = Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SET, !0, []);
          for (var F = 0; F < D.authenticatedAttributes.length; ++F) {
            var U = D.authenticatedAttributes[F];
            if (U.type === Il.pki.oids.messageDigest)
              U.value = o[D.digestAlgorithm].digest();
            else if (U.type === Il.pki.oids.signingTime) {
              if (!U.value) U.value = C;
            }
            (N.value.push(VGe(U)),
              D.authenticatedAttributesAsn1.value.push(VGe(U)));
          }
          ((_ = Ho.toDer(N).getBytes()), D.md.start().update(_));
        }
        D.signature = D.key.sign(D.md, "RSASSA-PKCS1-V1_5");
      }
      e.signerInfos = Zxr(e.signers);
    }
  };
  sT.createEncryptedData = function () {
    var e = null;
    return (
      (e = {
        type: Il.pki.oids.encryptedData,
        version: 0,
        encryptedContent: { algorithm: Il.pki.oids["aes256-CBC"] },
        fromAsn1: function (t) {
          KGe(e, t, sT.asn1.encryptedDataValidator);
        },
        decrypt: function (t) {
          if (t !== void 0) e.encryptedContent.key = t;
          sDt(e);
        },
      }),
      e
    );
  };
  sT.createEnvelopedData = function () {
    var e = null;
    return (
      (e = {
        type: Il.pki.oids.envelopedData,
        version: 0,
        recipients: [],
        encryptedContent: { algorithm: Il.pki.oids["aes256-CBC"] },
        fromAsn1: function (t) {
          var r = KGe(e, t, sT.asn1.envelopedDataValidator);
          e.recipients = Xxr(r.recipientInfos.value);
        },
        toAsn1: function () {
          return Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
            Ho.create(
              Ho.Class.UNIVERSAL,
              Ho.Type.OID,
              !1,
              Ho.oidToDer(e.type).getBytes(),
            ),
            Ho.create(Ho.Class.CONTEXT_SPECIFIC, 0, !0, [
              Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
                Ho.create(
                  Ho.Class.UNIVERSAL,
                  Ho.Type.INTEGER,
                  !1,
                  Ho.integerToDer(e.version).getBytes(),
                ),
                Ho.create(
                  Ho.Class.UNIVERSAL,
                  Ho.Type.SET,
                  !0,
                  Qxr(e.recipients),
                ),
                Ho.create(
                  Ho.Class.UNIVERSAL,
                  Ho.Type.SEQUENCE,
                  !0,
                  eAr(e.encryptedContent),
                ),
              ]),
            ]),
          ]);
        },
        findRecipient: function (t) {
          var r = t.issuer.attributes;
          for (var o = 0; o < e.recipients.length; ++o) {
            var d = e.recipients[o],
              p = d.issuer;
            if (d.serialNumber !== t.serialNumber) continue;
            if (p.length !== r.length) continue;
            var _ = !0;
            for (var E = 0; E < r.length; ++E)
              if (p[E].type !== r[E].type || p[E].value !== r[E].value) {
                _ = !1;
                break;
              }
            if (_) return d;
          }
          return null;
        },
        decrypt: function (t, r) {
          if (e.encryptedContent.key === void 0 && t !== void 0 && r !== void 0)
            switch (t.encryptedContent.algorithm) {
              case Il.pki.oids.rsaEncryption:
              case Il.pki.oids.desCBC:
                var o = r.decrypt(t.encryptedContent.content);
                e.encryptedContent.key = Il.util.createBuffer(o);
                break;
              default:
                throw Error(
                  "Unsupported asymmetric cipher, OID " +
                    t.encryptedContent.algorithm,
                );
            }
          sDt(e);
        },
        addRecipient: function (t) {
          e.recipients.push({
            version: 0,
            issuer: t.issuer.attributes,
            serialNumber: t.serialNumber,
            encryptedContent: {
              algorithm: Il.pki.oids.rsaEncryption,
              key: t.publicKey,
            },
          });
        },
        encrypt: function (t, r) {
          if (e.encryptedContent.content === void 0) {
            ((r = r || e.encryptedContent.algorithm),
              (t = t || e.encryptedContent.key));
            var o, d, p;
            switch (r) {
              case Il.pki.oids["aes128-CBC"]:
                ((o = 16), (d = 16), (p = Il.aes.createEncryptionCipher));
                break;
              case Il.pki.oids["aes192-CBC"]:
                ((o = 24), (d = 16), (p = Il.aes.createEncryptionCipher));
                break;
              case Il.pki.oids["aes256-CBC"]:
                ((o = 32), (d = 16), (p = Il.aes.createEncryptionCipher));
                break;
              case Il.pki.oids["des-EDE3-CBC"]:
                ((o = 24), (d = 8), (p = Il.des.createEncryptionCipher));
                break;
              default:
                throw Error("Unsupported symmetric cipher, OID " + r);
            }
            if (t === void 0) t = Il.util.createBuffer(Il.random.getBytes(o));
            else if (t.length() != o)
              throw Error(
                "Symmetric key has wrong length; got " +
                  t.length() +
                  " bytes, expected " +
                  o +
                  ".",
              );
            ((e.encryptedContent.algorithm = r),
              (e.encryptedContent.key = t),
              (e.encryptedContent.parameter = Il.util.createBuffer(
                Il.random.getBytes(d),
              )));
            var _ = p(t);
            if (
              (_.start(e.encryptedContent.parameter.copy()),
              _.update(e.content),
              !_.finish())
            )
              throw Error("Symmetric encryption failed.");
            e.encryptedContent.content = _.output;
          }
          for (var E = 0; E < e.recipients.length; ++E) {
            var C = e.recipients[E];
            if (C.encryptedContent.content !== void 0) continue;
            switch (C.encryptedContent.algorithm) {
              case Il.pki.oids.rsaEncryption:
                C.encryptedContent.content = C.encryptedContent.key.encrypt(
                  e.encryptedContent.key.data,
                );
                break;
              default:
                throw Error(
                  "Unsupported asymmetric cipher, OID " +
                    C.encryptedContent.algorithm,
                );
            }
          }
        },
      }),
      e
    );
  };
  function Kxr(e) {
    var t = {},
      r = [];
    if (!Ho.validate(e, sT.asn1.recipientInfoValidator, t, r)) {
      var o = Error(
        "Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.",
      );
      throw ((o.errors = r), o);
    }
    return {
      version: t.version.charCodeAt(0),
      issuer: Il.pki.RDNAttributesAsArray(t.issuer),
      serialNumber: Il.util.createBuffer(t.serial).toHex(),
      encryptedContent: {
        algorithm: Ho.derToOid(t.encAlgorithm),
        parameter: t.encParameter ? t.encParameter.value : void 0,
        content: t.encKey,
      },
    };
  }
  function Yxr(e) {
    return Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
      Ho.create(
        Ho.Class.UNIVERSAL,
        Ho.Type.INTEGER,
        !1,
        Ho.integerToDer(e.version).getBytes(),
      ),
      Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
        Il.pki.distinguishedNameToAsn1({ attributes: e.issuer }),
        Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.INTEGER,
          !1,
          Il.util.hexToBytes(e.serialNumber),
        ),
      ]),
      Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
        Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.OID,
          !1,
          Ho.oidToDer(e.encryptedContent.algorithm).getBytes(),
        ),
        Ho.create(Ho.Class.UNIVERSAL, Ho.Type.NULL, !1, ""),
      ]),
      Ho.create(
        Ho.Class.UNIVERSAL,
        Ho.Type.OCTETSTRING,
        !1,
        e.encryptedContent.content,
      ),
    ]);
  }
  function Xxr(e) {
    var t = [];
    for (var r = 0; r < e.length; ++r) t.push(Kxr(e[r]));
    return t;
  }
  function Qxr(e) {
    var t = [];
    for (var r = 0; r < e.length; ++r) t.push(Yxr(e[r]));
    return t;
  }
  function Jxr(e) {
    var t = Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
      Ho.create(
        Ho.Class.UNIVERSAL,
        Ho.Type.INTEGER,
        !1,
        Ho.integerToDer(e.version).getBytes(),
      ),
      Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
        Il.pki.distinguishedNameToAsn1({ attributes: e.issuer }),
        Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.INTEGER,
          !1,
          Il.util.hexToBytes(e.serialNumber),
        ),
      ]),
      Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
        Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.OID,
          !1,
          Ho.oidToDer(e.digestAlgorithm).getBytes(),
        ),
        Ho.create(Ho.Class.UNIVERSAL, Ho.Type.NULL, !1, ""),
      ]),
    ]);
    if (e.authenticatedAttributesAsn1)
      t.value.push(e.authenticatedAttributesAsn1);
    if (
      (t.value.push(
        Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
          Ho.create(
            Ho.Class.UNIVERSAL,
            Ho.Type.OID,
            !1,
            Ho.oidToDer(e.signatureAlgorithm).getBytes(),
          ),
          Ho.create(Ho.Class.UNIVERSAL, Ho.Type.NULL, !1, ""),
        ]),
      ),
      t.value.push(
        Ho.create(Ho.Class.UNIVERSAL, Ho.Type.OCTETSTRING, !1, e.signature),
      ),
      e.unauthenticatedAttributes.length > 0)
    ) {
      var r = Ho.create(Ho.Class.CONTEXT_SPECIFIC, 1, !0, []);
      for (var o = 0; o < e.unauthenticatedAttributes.length; ++o) {
        var d = e.unauthenticatedAttributes[o];
        r.values.push(VGe(d));
      }
      t.value.push(r);
    }
    return t;
  }
  function Zxr(e) {
    var t = [];
    for (var r = 0; r < e.length; ++r) t.push(Jxr(e[r]));
    return t;
  }
  function VGe(e) {
    var t;
    if (e.type === Il.pki.oids.contentType)
      t = Ho.create(
        Ho.Class.UNIVERSAL,
        Ho.Type.OID,
        !1,
        Ho.oidToDer(e.value).getBytes(),
      );
    else if (e.type === Il.pki.oids.messageDigest)
      t = Ho.create(
        Ho.Class.UNIVERSAL,
        Ho.Type.OCTETSTRING,
        !1,
        e.value.bytes(),
      );
    else if (e.type === Il.pki.oids.signingTime) {
      var r = new Date("1950-01-01T00:00:00Z"),
        o = new Date("2050-01-01T00:00:00Z"),
        d = e.value;
      if (typeof d === "string") {
        var p = Date.parse(d);
        if (!isNaN(p)) d = new Date(p);
        else if (d.length === 13) d = Ho.utcTimeToDate(d);
        else d = Ho.generalizedTimeToDate(d);
      }
      if (d >= r && d < o)
        t = Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.UTCTIME,
          !1,
          Ho.dateToUtcTime(d),
        );
      else
        t = Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.GENERALIZEDTIME,
          !1,
          Ho.dateToGeneralizedTime(d),
        );
    }
    return Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
      Ho.create(
        Ho.Class.UNIVERSAL,
        Ho.Type.OID,
        !1,
        Ho.oidToDer(e.type).getBytes(),
      ),
      Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SET, !0, [t]),
    ]);
  }
  function eAr(e) {
    return [
      Ho.create(
        Ho.Class.UNIVERSAL,
        Ho.Type.OID,
        !1,
        Ho.oidToDer(Il.pki.oids.data).getBytes(),
      ),
      Ho.create(Ho.Class.UNIVERSAL, Ho.Type.SEQUENCE, !0, [
        Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.OID,
          !1,
          Ho.oidToDer(e.algorithm).getBytes(),
        ),
        !e.parameter
          ? void 0
          : Ho.create(
              Ho.Class.UNIVERSAL,
              Ho.Type.OCTETSTRING,
              !1,
              e.parameter.getBytes(),
            ),
      ]),
      Ho.create(Ho.Class.CONTEXT_SPECIFIC, 0, !0, [
        Ho.create(
          Ho.Class.UNIVERSAL,
          Ho.Type.OCTETSTRING,
          !1,
          e.content.getBytes(),
        ),
      ]),
    ];
  }
  function KGe(e, t, r) {
    var o = {},
      d = [];
    if (!Ho.validate(t, r, o, d)) {
      var p = Error(
        "Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.",
      );
      throw ((p.errors = p), p);
    }
    var _ = Ho.derToOid(o.contentType);
    if (_ !== Il.pki.oids.data)
      throw Error(
        "Unsupported PKCS#7 message. Only wrapped ContentType Data supported.",
      );
    if (o.encryptedContent) {
      var E = "";
      if (Il.util.isArray(o.encryptedContent))
        for (var C = 0; C < o.encryptedContent.length; ++C) {
          if (o.encryptedContent[C].type !== Ho.Type.OCTETSTRING)
            throw Error(
              "Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.",
            );
          E += o.encryptedContent[C].value;
        }
      else E = o.encryptedContent;
      e.encryptedContent = {
        algorithm: Ho.derToOid(o.encAlgorithm),
        parameter: Il.util.createBuffer(o.encParameter.value),
        content: Il.util.createBuffer(E),
      };
    }
    if (o.content) {
      var E = "";
      if (Il.util.isArray(o.content))
        for (var C = 0; C < o.content.length; ++C) {
          if (o.content[C].type !== Ho.Type.OCTETSTRING)
            throw Error(
              "Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.",
            );
          E += o.content[C].value;
        }
      else E = o.content;
      e.content = Il.util.createBuffer(E);
    }
    return ((e.version = o.version.charCodeAt(0)), (e.rawCapture = o), o);
  }
  function sDt(e) {
    if (e.encryptedContent.key === void 0)
      throw Error("Symmetric key not available.");
    if (e.content === void 0) {
      var t;
      switch (e.encryptedContent.algorithm) {
        case Il.pki.oids["aes128-CBC"]:
        case Il.pki.oids["aes192-CBC"]:
        case Il.pki.oids["aes256-CBC"]:
          t = Il.aes.createDecryptionCipher(e.encryptedContent.key);
          break;
        case Il.pki.oids.desCBC:
        case Il.pki.oids["des-EDE3-CBC"]:
          t = Il.des.createDecryptionCipher(e.encryptedContent.key);
          break;
        default:
          throw Error(
            "Unsupported symmetric cipher, OID " + e.encryptedContent.algorithm,
          );
      }
      if (
        (t.start(e.encryptedContent.parameter),
        t.update(e.encryptedContent.content),
        !t.finish())
      )
        throw Error("Symmetric decryption failed.");
      e.content = t.output;
    }
  }
});
var cDt = commonJS(function (TIs, lDt) {
  var sS = yp();
  oB();
  B4();
  Iye();
  W4();
  Ig();
  var t_e = (lDt.exports = sS.ssh = sS.ssh || {});
  t_e.privateKeyToPutty = function (e, t, r) {
    ((r = r || ""), (t = t || ""));
    var o = "ssh-rsa",
      d = t === "" ? "none" : "aes256-cbc",
      p =
        "PuTTY-User-Key-File-2: " +
        o +
        `\r
`;
    ((p +=
      "Encryption: " +
      d +
      `\r
`),
      (p +=
        "Comment: " +
        r +
        `\r
`));
    var _ = sS.util.createBuffer();
    (J4(_, o), uM(_, e.e), uM(_, e.n));
    var E = sS.util.encode64(_.bytes(), 64),
      C = Math.floor(E.length / 66) + 1;
    ((p +=
      "Public-Lines: " +
      C +
      `\r
`),
      (p += E));
    var I = sS.util.createBuffer();
    (uM(I, e.d), uM(I, e.p), uM(I, e.q), uM(I, e.qInv));
    var D;
    if (!t) D = sS.util.encode64(I.bytes(), 64);
    else {
      var N = I.length() + 16 - 1;
      N -= N % 16;
      var F = e_e(I.bytes());
      (F.truncate(F.length() - N + I.length()), I.putBuffer(F));
      var U = sS.util.createBuffer();
      (U.putBuffer(e_e("\x00\x00\x00\x00", t)),
        U.putBuffer(e_e("\x00\x00\x00\x01", t)));
      var V = sS.aes.createEncryptionCipher(U.truncate(8), "CBC");
      (V.start(sS.util.createBuffer().fillWithByte(0, 16)),
        V.update(I.copy()),
        V.finish());
      var re = V.output;
      (re.truncate(16), (D = sS.util.encode64(re.bytes(), 64)));
    }
    ((C = Math.floor(D.length / 66) + 1),
      (p +=
        `\r
Private-Lines: ` +
        C +
        `\r
`),
      (p += D));
    var ue = e_e("putty-private-key-file-mac-key", t),
      de = sS.util.createBuffer();
    (J4(de, o),
      J4(de, d),
      J4(de, r),
      de.putInt32(_.length()),
      de.putBuffer(_),
      de.putInt32(I.length()),
      de.putBuffer(I));
    var _e = sS.hmac.create();
    return (
      _e.start("sha1", ue),
      _e.update(de.bytes()),
      (p +=
        `\r
Private-MAC: ` +
        _e.digest().toHex() +
        `\r
`),
      p
    );
  };
  t_e.publicKeyToOpenSSH = function (e, t) {
    var r = "ssh-rsa";
    t = t || "";
    var o = sS.util.createBuffer();
    return (
      J4(o, r),
      uM(o, e.e),
      uM(o, e.n),
      r + " " + sS.util.encode64(o.bytes()) + " " + t
    );
  };
  t_e.privateKeyToOpenSSH = function (e, t) {
    if (!t) return sS.pki.privateKeyToPem(e);
    return sS.pki.encryptRsaPrivateKey(e, t, {
      legacy: !0,
      algorithm: "aes128",
    });
  };
  t_e.getPublicKeyFingerprint = function (e, t) {
    t = t || {};
    var r = t.md || sS.md.md5.create(),
      o = "ssh-rsa",
      d = sS.util.createBuffer();
    (J4(d, o), uM(d, e.e), uM(d, e.n), r.start(), r.update(d.getBytes()));
    var p = r.digest();
    if (t.encoding === "hex") {
      var _ = p.toHex();
      if (t.delimiter) return _.match(/.{2}/g).join(t.delimiter);
      return _;
    } else if (t.encoding === "binary") return p.getBytes();
    else if (t.encoding) throw Error('Unknown encoding "' + t.encoding + '".');
    return p;
  };
  function uM(e, t) {
    var r = t.toString(16);
    if (r[0] >= "8") r = "00" + r;
    var o = sS.util.hexToBytes(r);
    (e.putInt32(o.length), e.putBytes(o));
  }
  function J4(e, t) {
    (e.putInt32(t.length), e.putString(t));
  }
  function e_e() {
    var e = sS.md.sha1.create(),
      t = arguments.length;
    for (var r = 0; r < t; ++r) e.update(arguments[r]);
    return e.digest();
  }
});
var YGe = commonJS(function (vIs, uDt) {
  uDt.exports = yp();
  oB();
  OOt();
  eP();
  Tye();
  Uee();
  XOt();
  B4();
  eDt();
  nDt();
  oDt();
  kGe();
  Nye();
  MW();
  mGe();
  TGe();
  aDt();
  CGe();
  hGe();
  iGe();
  jye();
  Zx();
  cGe();
  cDt();
  MGe();
  Ig();
});
var OB = commonJS(function (ALt) {
  Object.defineProperty(ALt, "__esModule", { value: !0 });
  ALt.celError = dIr;
  ALt.celErrorMerge = fIr;
  ALt.isCelError = xLt;
  var CLt = Symbol.for("@bufbuild/cel/error");
  function dIr(e, t) {
    if (xLt(e)) return e;
    if (typeof t === "number") t = BigInt(t);
    if (e instanceof Error) return new dte(e.message, e, t);
    if (typeof e === "string") return new dte(e, void 0, t);
    return new dte(`${e}`, e, t);
  }
  function fIr(e, ...t) {
    return new dte(e.message, t, e.exprId);
  }
  function xLt(e) {
    return typeof e === "object" && e !== null && CLt in e;
  }
  class dte extends Error {
    _cause;
    _exprId;
    [CLt] = {};
    constructor(e, t, r) {
      super(e);
      ((this._cause = t), (this._exprId = r));
    }
    get exprId() {
      return this._exprId;
    }
    get cause() {
      return this._cause;
    }
  }
});
var fte = commonJS(function (PLt) {
  Object.defineProperty(PLt, "__esModule", { value: !0 });
  PLt.FieldError = void 0;
  PLt.isFieldError = yIr;
  var hIr = [
    "FieldValueInvalidError",
    "FieldListRangeError",
    "ForeignFieldError",
  ];
  class RLt extends Error {
    constructor(e, t, r = "FieldValueInvalidError") {
      super(t);
      ((this.name = r), (this.field = () => e));
    }
  }
  PLt.FieldError = RLt;
  function yIr(e) {
    return (
      e instanceof Error &&
      hIr.includes(e.name) &&
      "field" in e &&
      typeof e.field == "function"
    );
  }
});
var n2 = commonJS(function (MLt) {
  Object.defineProperty(MLt, "__esModule", { value: !0 });
  MLt.qualifiedName = bIr;
  MLt.protoCamelCase = SIr;
  MLt.protoSnakeCase = kIr;
  MLt.safeObjectProperty = EIr;
  function bIr(e) {
    switch (e.kind) {
      case "field":
      case "oneof":
      case "rpc":
        return e.parent.typeName + "." + e.name;
      case "enum_value": {
        let t = e.parent.parent
          ? e.parent.parent.typeName
          : e.parent.file.proto.package;
        return t + (t.length > 0 ? "." : "") + e.name;
      }
      case "service":
      case "message":
      case "enum":
      case "extension":
        return e.typeName;
      case "file":
        return e.proto.name;
    }
  }
  function SIr(e) {
    let t = !1,
      r = [];
    for (let o = 0; o < e.length; o++) {
      let d = e.charAt(o);
      switch (d) {
        case "_":
          t = !0;
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          (r.push(d), (t = !1));
          break;
        default:
          if (t) ((t = !1), (d = d.toUpperCase()));
          r.push(d);
          break;
      }
    }
    return r.join("");
  }
  function kIr(e) {
    return e.replace(/[A-Z]/g, (t) => "_" + t.toLowerCase());
  }
  var wIr = new Set(["constructor", "toString", "toJSON", "valueOf"]);
  function EIr(e) {
    return wIr.has(e) ? e + "$" : e;
  }
});
var nqe = commonJS(function (DLt) {
  Object.defineProperty(DLt, "__esModule", { value: !0 });
  DLt.nestedTypes = tqe;
  DLt.usedTypes = AIr;
  DLt.parentTypes = RIr;
  function* tqe(e) {
    switch (e.kind) {
      case "file":
        for (let t of e.messages) (yield t, yield* tqe(t));
        (yield* e.enums, yield* e.services, yield* e.extensions);
        break;
      case "message":
        for (let t of e.nestedMessages) (yield t, yield* tqe(t));
        (yield* e.nestedEnums, yield* e.nestedExtensions);
        break;
    }
  }
  function AIr(e) {
    return OLt(e, new Set());
  }
  function* OLt(e, t) {
    var r, o;
    for (let d of e.fields) {
      let p =
        (o = (r = d.enum) !== null && r !== void 0 ? r : d.message) !== null &&
        o !== void 0
          ? o
          : void 0;
      if (!p || t.has(p.typeName)) continue;
      if ((t.add(p.typeName), yield p, p.kind == "message")) yield* OLt(p, t);
    }
  }
  function RIr(e) {
    let t = [];
    while (e.kind !== "file") {
      let r = PIr(e);
      ((e = r), t.push(r));
    }
    return t;
  }
  function PIr(e) {
    var t;
    switch (e.kind) {
      case "enum_value":
      case "field":
      case "oneof":
      case "rpc":
        return e.parent;
      case "service":
        return e.file;
      case "extension":
      case "enum":
      case "message":
        return (t = e.parent) !== null && t !== void 0 ? t : e.file;
    }
  }
});
var dE = commonJS(function (LLt) {
  Object.defineProperty(LLt, "__esModule", { value: !0 });
  LLt.ScalarType = void 0;
  var NLt;
  (function (e) {
    ((e[(e.DOUBLE = 1)] = "DOUBLE"),
      (e[(e.FLOAT = 2)] = "FLOAT"),
      (e[(e.INT64 = 3)] = "INT64"),
      (e[(e.UINT64 = 4)] = "UINT64"),
      (e[(e.INT32 = 5)] = "INT32"),
      (e[(e.FIXED64 = 6)] = "FIXED64"),
      (e[(e.FIXED32 = 7)] = "FIXED32"),
      (e[(e.BOOL = 8)] = "BOOL"),
      (e[(e.STRING = 9)] = "STRING"),
      (e[(e.BYTES = 12)] = "BYTES"),
      (e[(e.UINT32 = 13)] = "UINT32"),
      (e[(e.SFIXED32 = 15)] = "SFIXED32"),
      (e[(e.SFIXED64 = 16)] = "SFIXED64"),
      (e[(e.SINT32 = 17)] = "SINT32"),
      (e[(e.SINT64 = 18)] = "SINT64"));
  })(NLt || (LLt.ScalarType = NLt = {}));
});
var X_e = commonJS(function ($Lt) {
  Object.defineProperty($Lt, "__esModule", { value: !0 });
  $Lt.isMessage = DIr;
  function DIr(e, t) {
    if (!(
      e !== null &&
      typeof e == "object" &&
      "$typeName" in e &&
      typeof e.$typeName == "string"
    ))
      return !1;
    if (t === void 0) return !0;
    return t.typeName === e.$typeName;
  }
});
var J_e = commonJS(function (jLt) {
  Object.defineProperty(jLt, "__esModule", { value: !0 });
  jLt.varint64read = LIr;
  jLt.varint64write = FIr;
  jLt.int64FromString = $Ir;
  jLt.int64ToString = BIr;
  jLt.uInt64ToString = ULt;
  jLt.varint32write = HIr;
  jLt.varint32read = jIr;
  function LIr() {
    let e = 0,
      t = 0;
    for (let o = 0; o < 28; o += 7) {
      let d = this.buf[this.pos++];
      if (((e |= (d & 127) << o), (d & 128) == 0))
        return (this.assertBounds(), [e, t]);
    }
    let r = this.buf[this.pos++];
    if (((e |= (r & 15) << 28), (t = (r & 112) >> 4), (r & 128) == 0))
      return (this.assertBounds(), [e, t]);
    for (let o = 3; o <= 31; o += 7) {
      let d = this.buf[this.pos++];
      if (((t |= (d & 127) << o), (d & 128) == 0))
        return (this.assertBounds(), [e, t]);
    }
    throw Error("invalid varint");
  }
  function FIr(e, t, r) {
    for (let p = 0; p < 28; p = p + 7) {
      let _ = e >>> p,
        E = !(_ >>> 7 == 0 && t == 0),
        C = (E ? _ | 128 : _) & 255;
      if ((r.push(C), !E)) return;
    }
    let o = ((e >>> 28) & 15) | ((t & 7) << 4),
      d = t >> 3 != 0;
    if ((r.push((d ? o | 128 : o) & 255), !d)) return;
    for (let p = 3; p < 31; p = p + 7) {
      let _ = t >>> p,
        E = _ >>> 7 != 0,
        C = (E ? _ | 128 : _) & 255;
      if ((r.push(C), !E)) return;
    }
    r.push((t >>> 31) & 1);
  }
  var Q_e = 4294967296;
  function $Ir(e) {
    let t = e[0] === "-";
    if (t) e = e.slice(1);
    let r = 1e6,
      o = 0,
      d = 0;
    function p(_, E) {
      let C = Number(e.slice(_, E));
      if (((d *= r), (o = o * r + C), o >= Q_e))
        ((d = d + ((o / Q_e) | 0)), (o = o % Q_e));
    }
    return (
      p(-24, -18),
      p(-18, -12),
      p(-12, -6),
      p(-6),
      t ? HLt(o, d) : rqe(o, d)
    );
  }
  function BIr(e, t) {
    let r = rqe(e, t),
      o = r.hi & 2147483648;
    if (o) r = HLt(r.lo, r.hi);
    let d = ULt(r.lo, r.hi);
    return o ? "-" + d : d;
  }
  function ULt(e, t) {
    if ((({ lo: e, hi: t } = UIr(e, t)), t <= 2097151))
      return String(Q_e * t + e);
    let r = e & 16777215,
      o = ((e >>> 24) | (t << 8)) & 16777215,
      d = (t >> 16) & 65535,
      p = r + o * 6777216 + d * 6710656,
      _ = o + d * 8147497,
      E = d * 2,
      C = 1e7;
    if (p >= C) ((_ += Math.floor(p / C)), (p %= C));
    if (_ >= C) ((E += Math.floor(_ / C)), (_ %= C));
    return E.toString() + BLt(_) + BLt(p);
  }
  function UIr(e, t) {
    return { lo: e >>> 0, hi: t >>> 0 };
  }
  function rqe(e, t) {
    return { lo: e | 0, hi: t | 0 };
  }
  function HLt(e, t) {
    if (((t = ~t), e)) e = ~e + 1;
    else t += 1;
    return rqe(e, t);
  }
  var BLt = (e) => {
    let t = String(e);
    return "0000000".slice(t.length) + t;
  };
  function HIr(e, t) {
    if (e >= 0) {
      while (e > 127) (t.push((e & 127) | 128), (e = e >>> 7));
      t.push(e);
    } else {
      for (let r = 0; r < 9; r++) (t.push((e & 127) | 128), (e = e >> 7));
      t.push(1);
    }
  }
  function jIr() {
    let e = this.buf[this.pos++],
      t = e & 127;
    if ((e & 128) == 0) return (this.assertBounds(), t);
    if (((e = this.buf[this.pos++]), (t |= (e & 127) << 7), (e & 128) == 0))
      return (this.assertBounds(), t);
    if (((e = this.buf[this.pos++]), (t |= (e & 127) << 14), (e & 128) == 0))
      return (this.assertBounds(), t);
    if (((e = this.buf[this.pos++]), (t |= (e & 127) << 21), (e & 128) == 0))
      return (this.assertBounds(), t);
    ((e = this.buf[this.pos++]), (t |= (e & 15) << 28));
    for (let r = 5; (e & 128) !== 0 && r < 10; r++) e = this.buf[this.pos++];
    if ((e & 128) != 0) throw Error("invalid varint");
    return (this.assertBounds(), t >>> 0);
  }
});
var fM = commonJS(function (zLt) {
  Object.defineProperty(zLt, "__esModule", { value: !0 });
  zLt.protoInt64 = void 0;
  var Z_e = J_e();
  zLt.protoInt64 = XIr();
  function XIr() {
    let e = new DataView(new ArrayBuffer(8));
    if (
      typeof BigInt === "function" &&
      typeof e.getBigInt64 === "function" &&
      typeof e.getBigUint64 === "function" &&
      typeof e.setBigInt64 === "function" &&
      typeof e.setBigUint64 === "function" &&
      (!!globalThis.Deno ||
        typeof process != "object" ||
        typeof process.env != "object" ||
        process.env.BUF_BIGINT_DISABLE !== "1")
    ) {
      let r = BigInt("-9223372036854775808"),
        o = BigInt("9223372036854775807"),
        d = BigInt("0"),
        p = BigInt("18446744073709551615");
      return {
        zero: BigInt(0),
        supported: !0,
        parse(_) {
          let E = typeof _ == "bigint" ? _ : BigInt(_);
          if (E > o || E < r) throw Error(`invalid int64: ${_}`);
          return E;
        },
        uParse(_) {
          let E = typeof _ == "bigint" ? _ : BigInt(_);
          if (E > p || E < d) throw Error(`invalid uint64: ${_}`);
          return E;
        },
        enc(_) {
          return (
            e.setBigInt64(0, this.parse(_), !0),
            { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
          );
        },
        uEnc(_) {
          return (
            e.setBigInt64(0, this.uParse(_), !0),
            { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
          );
        },
        dec(_, E) {
          return (
            e.setInt32(0, _, !0),
            e.setInt32(4, E, !0),
            e.getBigInt64(0, !0)
          );
        },
        uDec(_, E) {
          return (
            e.setInt32(0, _, !0),
            e.setInt32(4, E, !0),
            e.getBigUint64(0, !0)
          );
        },
      };
    }
    return {
      zero: "0",
      supported: !1,
      parse(r) {
        if (typeof r != "string") r = r.toString();
        return (WLt(r), r);
      },
      uParse(r) {
        if (typeof r != "string") r = r.toString();
        return (GLt(r), r);
      },
      enc(r) {
        if (typeof r != "string") r = r.toString();
        return (WLt(r), (0, Z_e.int64FromString)(r));
      },
      uEnc(r) {
        if (typeof r != "string") r = r.toString();
        return (GLt(r), (0, Z_e.int64FromString)(r));
      },
      dec(r, o) {
        return (0, Z_e.int64ToString)(r, o);
      },
      uDec(r, o) {
        return (0, Z_e.uInt64ToString)(r, o);
      },
    };
  }
  function WLt(e) {
    if (!/^-?[0-9]+$/.test(e)) throw Error("invalid int64: " + e);
  }
  function GLt(e) {
    if (!/^[0-9]+$/.test(e)) throw Error("invalid uint64: " + e);
  }
});
var DB = commonJS(function (VLt) {
  Object.defineProperty(VLt, "__esModule", { value: !0 });
  VLt.scalarEquals = JIr;
  VLt.scalarZeroValue = ZIr;
  VLt.isScalarZeroValue = eMr;
  var QIr = fM(),
    LS = dE();
  function JIr(e, t, r) {
    if (t === r) return !0;
    if (e == LS.ScalarType.BYTES) {
      if (!(t instanceof Uint8Array) || !(r instanceof Uint8Array)) return !1;
      if (t.length !== r.length) return !1;
      for (let o = 0; o < t.length; o++) if (t[o] !== r[o]) return !1;
      return !0;
    }
    switch (e) {
      case LS.ScalarType.UINT64:
      case LS.ScalarType.FIXED64:
      case LS.ScalarType.INT64:
      case LS.ScalarType.SFIXED64:
      case LS.ScalarType.SINT64:
        return t == r;
    }
    return !1;
  }
  function ZIr(e, t) {
    switch (e) {
      case LS.ScalarType.STRING:
        return "";
      case LS.ScalarType.BOOL:
        return !1;
      case LS.ScalarType.DOUBLE:
      case LS.ScalarType.FLOAT:
        return 0;
      case LS.ScalarType.INT64:
      case LS.ScalarType.UINT64:
      case LS.ScalarType.SFIXED64:
      case LS.ScalarType.FIXED64:
      case LS.ScalarType.SINT64:
        return t ? "0" : QIr.protoInt64.zero;
      case LS.ScalarType.BYTES:
        return new Uint8Array(0);
      default:
        return 0;
    }
  }
  function eMr(e, t) {
    switch (e) {
      case LS.ScalarType.BOOL:
        return t === !1;
      case LS.ScalarType.STRING:
        return t === "";
      case LS.ScalarType.BYTES:
        return t instanceof Uint8Array && !t.byteLength;
      default:
        return t == 0;
    }
  }
});
var NB = commonJS(function (XLt) {
  Object.defineProperty(XLt, "__esModule", { value: !0 });
  XLt.unsafeLocal = void 0;
  XLt.unsafeOneofCase = oMr;
  XLt.unsafeIsSet = sMr;
  XLt.unsafeIsSetExplicit = iMr;
  XLt.unsafeGet = aMr;
  XLt.unsafeSet = lMr;
  XLt.unsafeClear = cMr;
  var KLt = DB(),
    YLt = 2;
  XLt.unsafeLocal = Symbol.for("reflect unsafe local");
  function oMr(e, t) {
    let r = e[t.localName].case;
    if (r === void 0) return r;
    return t.fields.find((o) => o.localName === r);
  }
  function sMr(e, t) {
    let r = t.localName;
    if (t.oneof) return e[t.oneof.localName].case === r;
    if (t.presence != YLt)
      return e[r] !== void 0 && Object.prototype.hasOwnProperty.call(e, r);
    switch (t.fieldKind) {
      case "list":
        return e[r].length > 0;
      case "map":
        return Object.keys(e[r]).length > 0;
      case "scalar":
        return !(0, KLt.isScalarZeroValue)(t.scalar, e[r]);
      case "enum":
        return e[r] !== t.enum.values[0].number;
    }
    throw Error("message field with implicit presence");
  }
  function iMr(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t) && e[t] !== void 0;
  }
  function aMr(e, t) {
    if (t.oneof) {
      let r = e[t.oneof.localName];
      if (r.case === t.localName) return r.value;
      return;
    }
    return e[t.localName];
  }
  function lMr(e, t, r) {
    if (t.oneof) e[t.oneof.localName] = { case: t.localName, value: r };
    else e[t.localName] = r;
  }
  function cMr(e, t) {
    let r = t.localName;
    if (t.oneof) {
      let o = t.oneof.localName;
      if (e[o].case === r) e[o] = { case: void 0 };
    } else if (t.presence != YLt) delete e[r];
    else
      switch (t.fieldKind) {
        case "map":
          e[r] = {};
          break;
        case "list":
          e[r] = [];
          break;
        case "enum":
          e[r] = t.enum.values[0].number;
          break;
        case "scalar":
          e[r] = (0, KLt.scalarZeroValue)(t.scalar, t.longAsString);
          break;
      }
  }
});
var v5 = commonJS(function (JLt) {
  Object.defineProperty(JLt, "__esModule", { value: !0 });
  JLt.isObject = pte;
  JLt.isOneofADT = hMr;
  JLt.isReflectList = yMr;
  JLt.isReflectMap = _Mr;
  JLt.isReflectMessage = bMr;
  var oqe = NB();
  function pte(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
  }
  function hMr(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "case" in e &&
      ((typeof e.case == "string" && "value" in e && e.value != null) ||
        (e.case === void 0 && (!("value" in e) || e.value === void 0)))
    );
  }
  function yMr(e, t) {
    var r, o, d, p;
    if (
      pte(e) &&
      oqe.unsafeLocal in e &&
      "add" in e &&
      "field" in e &&
      typeof e.field == "function"
    ) {
      if (t !== void 0) {
        let _ = t,
          E = e.field();
        return (
          _.listKind == E.listKind &&
          _.scalar === E.scalar &&
          ((r = _.message) === null || r === void 0 ? void 0 : r.typeName) ===
            ((o = E.message) === null || o === void 0 ? void 0 : o.typeName) &&
          ((d = _.enum) === null || d === void 0 ? void 0 : d.typeName) ===
            ((p = E.enum) === null || p === void 0 ? void 0 : p.typeName)
        );
      }
      return !0;
    }
    return !1;
  }
  function _Mr(e, t) {
    var r, o, d, p;
    if (
      pte(e) &&
      oqe.unsafeLocal in e &&
      "has" in e &&
      "field" in e &&
      typeof e.field == "function"
    ) {
      if (t !== void 0) {
        let _ = t,
          E = e.field();
        return (
          _.mapKey === E.mapKey &&
          _.mapKind == E.mapKind &&
          _.scalar === E.scalar &&
          ((r = _.message) === null || r === void 0 ? void 0 : r.typeName) ===
            ((o = E.message) === null || o === void 0 ? void 0 : o.typeName) &&
          ((d = _.enum) === null || d === void 0 ? void 0 : d.typeName) ===
            ((p = E.enum) === null || p === void 0 ? void 0 : p.typeName)
        );
      }
      return !0;
    }
    return !1;
  }
  function bMr(e, t) {
    return (
      pte(e) &&
      oqe.unsafeLocal in e &&
      "desc" in e &&
      pte(e.desc) &&
      e.desc.kind === "message" &&
      (t === void 0 || e.desc.typeName == t.typeName)
    );
  }
});
var tbe = commonJS(function (ZLt) {
  Object.defineProperty(ZLt, "__esModule", { value: !0 });
  ZLt.configureTextEncoding = vMr;
  ZLt.getTextEncoding = CMr;
  var ebe = Symbol.for("@bufbuild/protobuf/text-encoding");
  function vMr(e) {
    globalThis[ebe] = e;
  }
  function CMr() {
    if (globalThis[ebe] == null) {
      let e = new globalThis.TextEncoder(),
        t = new globalThis.TextDecoder(),
        r;
      globalThis[ebe] = {
        encodeUtf8(o) {
          return e.encode(o);
        },
        decodeUtf8(o, d) {
          if (d) {
            if (r === void 0)
              r = new globalThis.TextDecoder("utf-8", { fatal: !0 });
            return r.decode(o);
          }
          return t.decode(o);
        },
        checkUtf8(o) {
          try {
            return (encodeURIComponent(o), !0);
          } catch (d) {
            return !1;
          }
        },
      };
    }
    return globalThis[ebe];
  }
});
var o2 = commonJS(function (oFt) {
  Object.defineProperty(oFt, "__esModule", { value: !0 });
  oFt.BinaryReader =
    oFt.BinaryWriter =
    oFt.INT32_MIN =
    oFt.INT32_MAX =
    oFt.UINT32_MAX =
    oFt.FLOAT32_MIN =
    oFt.FLOAT32_MAX =
    oFt.WireType =
      void 0;
  var r2 = J_e(),
    pM = fM(),
    tFt = tbe(),
    LB;
  (function (e) {
    ((e[(e.Varint = 0)] = "Varint"),
      (e[(e.Bit64 = 1)] = "Bit64"),
      (e[(e.LengthDelimited = 2)] = "LengthDelimited"),
      (e[(e.StartGroup = 3)] = "StartGroup"),
      (e[(e.EndGroup = 4)] = "EndGroup"),
      (e[(e.Bit32 = 5)] = "Bit32"));
  })(LB || (oFt.WireType = LB = {}));
  oFt.FLOAT32_MAX = 340282346638528860000000000000000000000;
  oFt.FLOAT32_MIN = -340282346638528860000000000000000000000;
  oFt.UINT32_MAX = 4294967295;
  oFt.INT32_MAX = 2147483647;
  oFt.INT32_MIN = -2147483648;
  class nFt {
    constructor(e = (0, tFt.getTextEncoding)().encodeUtf8) {
      ((this.encodeUtf8 = e),
        (this.stack = []),
        (this.chunks = []),
        (this.buf = []));
    }
    finish() {
      if (this.buf.length)
        (this.chunks.push(new Uint8Array(this.buf)), (this.buf = []));
      let e = 0;
      for (let o = 0; o < this.chunks.length; o++) e += this.chunks[o].length;
      let t = new Uint8Array(e),
        r = 0;
      for (let o = 0; o < this.chunks.length; o++)
        (t.set(this.chunks[o], r), (r += this.chunks[o].length));
      return ((this.chunks = []), t);
    }
    fork() {
      return (
        this.stack.push({ chunks: this.chunks, buf: this.buf }),
        (this.chunks = []),
        (this.buf = []),
        this
      );
    }
    join() {
      let e = this.finish(),
        t = this.stack.pop();
      if (!t) throw Error("invalid state, fork stack empty");
      return (
        (this.chunks = t.chunks),
        (this.buf = t.buf),
        this.uint32(e.byteLength),
        this.raw(e)
      );
    }
    tag(e, t) {
      return this.uint32(((e << 3) | t) >>> 0);
    }
    raw(e) {
      if (this.buf.length)
        (this.chunks.push(new Uint8Array(this.buf)), (this.buf = []));
      return (this.chunks.push(e), this);
    }
    uint32(e) {
      eFt(e);
      while (e > 127) (this.buf.push((e & 127) | 128), (e = e >>> 7));
      return (this.buf.push(e), this);
    }
    int32(e) {
      return (sqe(e), (0, r2.varint32write)(e, this.buf), this);
    }
    bool(e) {
      return (this.buf.push(e ? 1 : 0), this);
    }
    bytes(e) {
      return (this.uint32(e.byteLength), this.raw(e));
    }
    string(e) {
      let t = this.encodeUtf8(e);
      return (this.uint32(t.byteLength), this.raw(t));
    }
    float(e) {
      RMr(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t));
    }
    double(e) {
      let t = new Uint8Array(8);
      return (new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t));
    }
    fixed32(e) {
      eFt(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setUint32(0, e, !0), this.raw(t));
    }
    sfixed32(e) {
      sqe(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setInt32(0, e, !0), this.raw(t));
    }
    sint32(e) {
      return (
        sqe(e),
        (e = ((e << 1) ^ (e >> 31)) >>> 0),
        (0, r2.varint32write)(e, this.buf),
        this
      );
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        r = new DataView(t.buffer),
        o = pM.protoInt64.enc(e);
      return (r.setInt32(0, o.lo, !0), r.setInt32(4, o.hi, !0), this.raw(t));
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        r = new DataView(t.buffer),
        o = pM.protoInt64.uEnc(e);
      return (r.setInt32(0, o.lo, !0), r.setInt32(4, o.hi, !0), this.raw(t));
    }
    int64(e) {
      let t = pM.protoInt64.enc(e);
      return ((0, r2.varint64write)(t.lo, t.hi, this.buf), this);
    }
    sint64(e) {
      let t = pM.protoInt64.enc(e),
        r = t.hi >> 31,
        o = (t.lo << 1) ^ r,
        d = ((t.hi << 1) | (t.lo >>> 31)) ^ r;
      return ((0, r2.varint64write)(o, d, this.buf), this);
    }
    uint64(e) {
      let t = pM.protoInt64.uEnc(e);
      return ((0, r2.varint64write)(t.lo, t.hi, this.buf), this);
    }
  }
  oFt.BinaryWriter = nFt;
  class rFt {
    constructor(e, t = (0, tFt.getTextEncoding)().decodeUtf8) {
      ((this.decodeUtf8 = t),
        (this.varint64 = r2.varint64read),
        (this.uint32 = r2.varint32read),
        (this.buf = e),
        (this.len = e.length),
        (this.pos = 0),
        (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)));
    }
    tag() {
      let e = this.pos,
        t = this.uint32(),
        r = this.pos - e;
      if (r > 5 || (r == 5 && this.buf[this.pos - 1] > 15))
        throw Error("illegal tag: varint overflows uint32");
      let o = t >>> 3,
        d = t & 7;
      if (o <= 0 || d > 5)
        throw Error("illegal tag: field no " + o + " wire type " + d);
      return [o, d];
    }
    skip(e, t) {
      let r = this.pos;
      switch (e) {
        case LB.Varint:
          while (this.buf[this.pos++] & 128);
          break;
        case LB.Bit64:
          this.pos += 4;
        case LB.Bit32:
          this.pos += 4;
          break;
        case LB.LengthDelimited:
          let o = this.uint32();
          this.pos += o;
          break;
        case LB.StartGroup:
          for (;;) {
            let [d, p] = this.tag();
            if (p === LB.EndGroup) {
              if (t !== void 0 && d !== t) throw Error("invalid end group tag");
              break;
            }
            this.skip(p, d);
          }
          break;
        default:
          throw Error("cant skip wire type " + e);
      }
      return (this.assertBounds(), this.buf.subarray(r, this.pos));
    }
    assertBounds() {
      if (this.pos > this.len) throw RangeError("premature EOF");
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let e = this.uint32();
      return (e >>> 1) ^ -(e & 1);
    }
    int64() {
      return pM.protoInt64.dec(...this.varint64());
    }
    uint64() {
      return pM.protoInt64.uDec(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        r = -(e & 1);
      return (
        (e = ((e >>> 1) | ((t & 1) << 31)) ^ r),
        (t = (t >>> 1) ^ r),
        pM.protoInt64.dec(e, t)
      );
    }
    bool() {
      let [e, t] = this.varint64();
      return e !== 0 || t !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return pM.protoInt64.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return pM.protoInt64.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      return (
        (this.pos += e),
        this.assertBounds(),
        this.buf.subarray(t, t + e)
      );
    }
    string(e) {
      return this.decodeUtf8(this.bytes(), e);
    }
  }
  oFt.BinaryReader = rFt;
  function sqe(e) {
    if (typeof e == "string") e = Number(e);
    else if (typeof e != "number") throw Error("invalid int32: " + typeof e);
    if (!Number.isInteger(e) || e > oFt.INT32_MAX || e < oFt.INT32_MIN)
      throw Error("invalid int32: " + e);
  }
  function eFt(e) {
    if (typeof e == "string") e = Number(e);
    else if (typeof e != "number") throw Error("invalid uint32: " + typeof e);
    if (!Number.isInteger(e) || e > oFt.UINT32_MAX || e < 0)
      throw Error("invalid uint32: " + e);
  }
  function RMr(e) {
    if (typeof e == "string") {
      let t = e;
      if (((e = Number(e)), Number.isNaN(e) && t !== "NaN"))
        throw Error("invalid float32: " + t);
    } else if (typeof e != "number")
      throw Error("invalid float32: " + typeof e);
    if (Number.isFinite(e) && (e > oFt.FLOAT32_MAX || e < oFt.FLOAT32_MIN))
      throw Error("invalid float32: " + e);
  }
});
var obe = commonJS(function (hFt) {
  Object.defineProperty(hFt, "__esModule", { value: !0 });
  hFt.checkField = DMr;
  hFt.checkListItem = NMr;
  hFt.checkMapEntry = LMr;
  hFt.formatVal = gte;
  var jm = dE(),
    MMr = X_e(),
    nbe = fte(),
    x5 = v5(),
    mte = o2(),
    OMr = tbe(),
    dFt = fM();
  function DMr(e, t) {
    let r =
      e.fieldKind == "list"
        ? (0, x5.isReflectList)(t, e)
        : e.fieldKind == "map"
          ? (0, x5.isReflectMap)(t, e)
          : iqe(e, t);
    if (r === !0) return;
    let o;
    switch (e.fieldKind) {
      case "list":
        o = `expected ${mFt(e)}, got ${gte(t)}`;
        break;
      case "map":
        o = `expected ${gFt(e)}, got ${gte(t)}`;
        break;
      default:
        o = rbe(e, t, r);
    }
    return new nbe.FieldError(e, o);
  }
  function NMr(e, t, r) {
    let o = iqe(e, r);
    if (o !== !0)
      return new nbe.FieldError(e, `list item #${t + 1}: ${rbe(e, r, o)}`);
    return;
  }
  function LMr(e, t, r) {
    let o = fFt(t, e.mapKey);
    if (o !== !0)
      return new nbe.FieldError(
        e,
        `invalid map key: ${rbe({ scalar: e.mapKey }, t, o)}`,
      );
    let d = iqe(e, r);
    if (d !== !0)
      return new nbe.FieldError(e, `map entry ${gte(t)}: ${rbe(e, r, d)}`);
    return;
  }
  function iqe(e, t) {
    if (e.scalar !== void 0) return fFt(t, e.scalar);
    if (e.enum !== void 0) {
      if (e.enum.open) return Number.isInteger(t);
      return e.enum.values.some((r) => r.number === t);
    }
    return (0, x5.isReflectMessage)(t, e.message);
  }
  function fFt(e, t) {
    switch (t) {
      case jm.ScalarType.DOUBLE:
        return typeof e == "number";
      case jm.ScalarType.FLOAT:
        if (typeof e != "number") return !1;
        if (Number.isNaN(e) || !Number.isFinite(e)) return !0;
        if (e > mte.FLOAT32_MAX || e < mte.FLOAT32_MIN)
          return `${e.toFixed()} out of range`;
        return !0;
      case jm.ScalarType.INT32:
      case jm.ScalarType.SFIXED32:
      case jm.ScalarType.SINT32:
        if (typeof e !== "number" || !Number.isInteger(e)) return !1;
        if (e > mte.INT32_MAX || e < mte.INT32_MIN)
          return `${e.toFixed()} out of range`;
        return !0;
      case jm.ScalarType.FIXED32:
      case jm.ScalarType.UINT32:
        if (typeof e !== "number" || !Number.isInteger(e)) return !1;
        if (e > mte.UINT32_MAX || e < 0) return `${e.toFixed()} out of range`;
        return !0;
      case jm.ScalarType.BOOL:
        return typeof e == "boolean";
      case jm.ScalarType.STRING:
        if (typeof e != "string") return !1;
        return (0, OMr.getTextEncoding)().checkUtf8(e) || "invalid UTF8";
      case jm.ScalarType.BYTES:
        return e instanceof Uint8Array;
      case jm.ScalarType.INT64:
      case jm.ScalarType.SFIXED64:
      case jm.ScalarType.SINT64:
        if (
          typeof e == "bigint" ||
          typeof e == "number" ||
          (typeof e == "string" && e.length > 0)
        )
          try {
            return (dFt.protoInt64.parse(e), !0);
          } catch (r) {
            return `${e} out of range`;
          }
        return !1;
      case jm.ScalarType.FIXED64:
      case jm.ScalarType.UINT64:
        if (
          typeof e == "bigint" ||
          typeof e == "number" ||
          (typeof e == "string" && e.length > 0)
        )
          try {
            return (dFt.protoInt64.uParse(e), !0);
          } catch (r) {
            return `${e} out of range`;
          }
        return !1;
    }
  }
  function rbe(e, t, r) {
    if (
      ((r = typeof r == "string" ? `: ${r}` : `, got ${gte(t)}`),
      e.scalar !== void 0)
    )
      return `expected ${FMr(e.scalar)}` + r;
    if (e.enum !== void 0) return `expected ${e.enum.toString()}` + r;
    return `expected ${pFt(e.message)}` + r;
  }
  function gte(e) {
    switch (typeof e) {
      case "object":
        if (e === null) return "null";
        if (e instanceof Uint8Array) return `Uint8Array(${e.length})`;
        if (Array.isArray(e)) return `Array(${e.length})`;
        if ((0, x5.isReflectList)(e)) return mFt(e.field());
        if ((0, x5.isReflectMap)(e)) return gFt(e.field());
        if ((0, x5.isReflectMessage)(e)) return pFt(e.desc);
        if ((0, MMr.isMessage)(e)) return `message ${e.$typeName}`;
        return "object";
      case "string":
        return e.length > 30 ? "string" : `"${e.split('"').join('\\"')}"`;
      case "boolean":
        return String(e);
      case "number":
        return String(e);
      case "bigint":
        return String(e) + "n";
      default:
        return typeof e;
    }
  }
  function pFt(e) {
    return `ReflectMessage (${e.typeName})`;
  }
  function mFt(e) {
    switch (e.listKind) {
      case "message":
        return `ReflectList (${e.message.toString()})`;
      case "enum":
        return `ReflectList (${e.enum.toString()})`;
      case "scalar":
        return `ReflectList (${jm.ScalarType[e.scalar]})`;
    }
  }
  function gFt(e) {
    switch (e.mapKind) {
      case "message":
        return `ReflectMap (${jm.ScalarType[e.mapKey]}, ${e.message.toString()})`;
      case "enum":
        return `ReflectMap (${jm.ScalarType[e.mapKey]}, ${e.enum.toString()})`;
      case "scalar":
        return `ReflectMap (${jm.ScalarType[e.mapKey]}, ${jm.ScalarType[e.scalar]})`;
    }
  }
  function FMr(e) {
    switch (e) {
      case jm.ScalarType.STRING:
        return "string";
      case jm.ScalarType.BOOL:
        return "boolean";
      case jm.ScalarType.INT64:
      case jm.ScalarType.SINT64:
      case jm.ScalarType.SFIXED64:
        return "bigint (int64)";
      case jm.ScalarType.UINT64:
      case jm.ScalarType.FIXED64:
        return "bigint (uint64)";
      case jm.ScalarType.BYTES:
        return "Uint8Array";
      case jm.ScalarType.DOUBLE:
        return "number (float64)";
      case jm.ScalarType.FLOAT:
        return "number (float32)";
      case jm.ScalarType.FIXED32:
      case jm.ScalarType.UINT32:
        return "number (uint32)";
      case jm.ScalarType.INT32:
      case jm.ScalarType.SFIXED32:
      case jm.ScalarType.SINT32:
        return "number (int32)";
    }
  }
});
var R5 = commonJS(function (bFt) {
  Object.defineProperty(bFt, "__esModule", { value: !0 });
  bFt.isWrapper = jMr;
  bFt.isWrapperDesc = yFt;
  bFt.hasCustomJsonRepresentation = WMr;
  function jMr(e) {
    return _Ft(e.$typeName);
  }
  function yFt(e) {
    let t = e.fields[0];
    return (
      _Ft(e.typeName) &&
      t !== void 0 &&
      t.fieldKind == "scalar" &&
      t.name == "value" &&
      t.number == 1
    );
  }
  function WMr(e) {
    switch (e.typeName) {
      case "google.protobuf.Any":
      case "google.protobuf.Timestamp":
      case "google.protobuf.Duration":
      case "google.protobuf.FieldMask":
      case "google.protobuf.Struct":
      case "google.protobuf.Value":
      case "google.protobuf.ListValue":
        return !0;
      default:
        return yFt(e);
    }
  }
  function _Ft(e) {
    return (
      e.startsWith("google.protobuf.") &&
      [
        "DoubleValue",
        "FloatValue",
        "Int64Value",
        "UInt64Value",
        "Int32Value",
        "UInt32Value",
        "BoolValue",
        "StringValue",
        "BytesValue",
      ].includes(e.substring(16))
    );
  }
});
var FB = commonJS(function (CFt) {
  Object.defineProperty(CFt, "__esModule", { value: !0 });
  CFt.create = TFt;
  var wFt = X_e(),
    cqe = dE(),
    VMr = DB(),
    EFt = v5(),
    aqe = NB(),
    KMr = R5(),
    YMr = 999,
    XMr = 998,
    sbe = 2;
  function TFt(e, t) {
    if ((0, wFt.isMessage)(t, e)) return t;
    let r = t0r(e);
    if (t !== void 0) QMr(e, r, t);
    return r;
  }
  function QMr(e, t, r) {
    for (let o of e.members) {
      let d = r[o.localName];
      if (d == null) continue;
      let p;
      if (o.kind == "oneof") {
        let _ = (0, aqe.unsafeOneofCase)(r, o);
        if (!_) continue;
        ((p = _), (d = (0, aqe.unsafeGet)(r, _)));
      } else p = o;
      switch (p.fieldKind) {
        case "message":
          d = uqe(p, d);
          break;
        case "scalar":
          d = vFt(p, d);
          break;
        case "list":
          d = ZMr(p, d);
          break;
        case "map":
          d = JMr(p, d);
          break;
      }
      (0, aqe.unsafeSet)(t, p, d);
    }
    return t;
  }
  function vFt(e, t) {
    if (e.scalar == cqe.ScalarType.BYTES) return dqe(t);
    return t;
  }
  function JMr(e, t) {
    if ((0, EFt.isObject)(t)) {
      if (e.scalar == cqe.ScalarType.BYTES) return SFt(t, dqe);
      if (e.mapKind == "message") return SFt(t, (r) => uqe(e, r));
    }
    return t;
  }
  function ZMr(e, t) {
    if (Array.isArray(t)) {
      if (e.scalar == cqe.ScalarType.BYTES) return t.map(dqe);
      if (e.listKind == "message") return t.map((r) => uqe(e, r));
    }
    return t;
  }
  function uqe(e, t) {
    if (
      e.fieldKind == "message" &&
      !e.oneof &&
      (0, KMr.isWrapperDesc)(e.message)
    )
      return vFt(e.message.fields[0], t);
    if ((0, EFt.isObject)(t)) {
      if (
        e.message.typeName == "google.protobuf.Struct" &&
        e.parent.typeName !== "google.protobuf.Value"
      )
        return t;
      if (!(0, wFt.isMessage)(t, e.message)) return TFt(e.message, t);
    }
    return t;
  }
  function dqe(e) {
    return Array.isArray(e) ? new Uint8Array(e) : e;
  }
  function SFt(e, t) {
    let r = {};
    for (let o of Object.entries(e)) r[o[0]] = t(o[1]);
    return r;
  }
  var e0r = Symbol(),
    kFt = new WeakMap();
  function t0r(e) {
    let t;
    if (!n0r(e)) {
      t = { $typeName: e.typeName };
      for (let r of e.members)
        if (r.kind == "oneof" || r.presence == sbe) t[r.localName] = lqe(r);
    } else {
      let r = kFt.get(e),
        o,
        d;
      if (r) ({ prototype: o, members: d } = r);
      else {
        ((o = {}), (d = new Set()));
        for (let p of e.members) {
          if (p.kind == "oneof") continue;
          if (p.fieldKind != "scalar" && p.fieldKind != "enum") continue;
          if (p.presence == sbe) continue;
          (d.add(p), (o[p.localName] = lqe(p)));
        }
        kFt.set(e, { prototype: o, members: d });
      }
      ((t = Object.create(o)), (t.$typeName = e.typeName));
      for (let p of e.members) {
        if (d.has(p)) continue;
        if (p.kind == "field") {
          if (p.fieldKind == "message") continue;
          if (p.fieldKind == "scalar" || p.fieldKind == "enum") {
            if (p.presence != sbe) continue;
          }
        }
        t[p.localName] = lqe(p);
      }
    }
    return t;
  }
  function n0r(e) {
    switch (e.file.edition) {
      case YMr:
        return !1;
      case XMr:
        return !0;
      default:
        return e.fields.some(
          (t) => t.presence != sbe && t.fieldKind != "message" && !t.oneof,
        );
    }
  }
  function lqe(e) {
    if (e.kind == "oneof") return { case: void 0 };
    if (e.fieldKind == "list") return [];
    if (e.fieldKind == "map") return {};
    if (e.fieldKind == "message") return e0r;
    let t = e.getDefaultValue();
    if (t !== void 0)
      return e.fieldKind == "scalar" && e.longAsString ? t.toString() : t;
    return e.fieldKind == "scalar"
      ? (0, VMr.scalarZeroValue)(e.scalar, e.longAsString)
      : e.enum.values[0].number;
  }
});
var mM = commonJS(function (LFt) {
  Object.defineProperty(LFt, "__esModule", { value: !0 });
  LFt.reflect = i0r;
  LFt.reflectList = a0r;
  LFt.reflectMap = l0r;
  var FS = dE(),
    abe = obe(),
    PFt = fte(),
    pP = NB(),
    o0r = FB(),
    IFt = R5(),
    s0r = DB(),
    P5 = fM(),
    yte = v5();
  function i0r(e, t, r = !0) {
    return new mqe(e, t, r);
  }
  var xFt = new WeakMap();
  class mqe {
    get sortedFields() {
      let e = xFt.get(this.desc);
      if (e) return e;
      let t = this.desc.fields.concat().sort((r, o) => r.number - o.number);
      return (xFt.set(this.desc, t), t);
    }
    constructor(e, t, r = !0) {
      ((this.lists = new Map()),
        (this.maps = new Map()),
        (this.check = r),
        (this.desc = e),
        (this.message = this[pP.unsafeLocal] =
          t !== null && t !== void 0 ? t : (0, o0r.create)(e)),
        (this.fields = e.fields),
        (this.oneofs = e.oneofs),
        (this.members = e.members));
    }
    findNumber(e) {
      if (!this._fieldsByNumber)
        this._fieldsByNumber = new Map(
          this.desc.fields.map((t) => [t.number, t]),
        );
      return this._fieldsByNumber.get(e);
    }
    oneofCase(e) {
      return (hte(this.message, e), (0, pP.unsafeOneofCase)(this.message, e));
    }
    isSet(e) {
      return (hte(this.message, e), (0, pP.unsafeIsSet)(this.message, e));
    }
    clear(e) {
      (hte(this.message, e), (0, pP.unsafeClear)(this.message, e));
    }
    get(e) {
      hte(this.message, e);
      let t = (0, pP.unsafeGet)(this.message, e);
      switch (e.fieldKind) {
        case "list":
          let r = this.lists.get(e);
          if (!r || r[pP.unsafeLocal] !== t)
            this.lists.set(e, (r = new gqe(e, t, this.check)));
          return r;
        case "map":
          let o = this.maps.get(e);
          if (!o || o[pP.unsafeLocal] !== t)
            this.maps.set(e, (o = new hqe(e, t, this.check)));
          return o;
        case "message":
          return _qe(e, t, this.check);
        case "scalar":
          return t === void 0
            ? (0, s0r.scalarZeroValue)(e.scalar, !1)
            : bqe(e, t);
        case "enum":
          return t !== null && t !== void 0 ? t : e.enum.values[0].number;
      }
    }
    set(e, t) {
      if ((hte(this.message, e), this.check)) {
        let o = (0, abe.checkField)(e, t);
        if (o) throw o;
      }
      let r;
      if (e.fieldKind == "message") r = yqe(e, t);
      else if ((0, yte.isReflectMap)(t) || (0, yte.isReflectList)(t))
        r = t[pP.unsafeLocal];
      else r = Sqe(e, t);
      (0, pP.unsafeSet)(this.message, e, r);
    }
    getUnknown() {
      return this.message.$unknown;
    }
    setUnknown(e) {
      this.message.$unknown = e;
    }
  }
  function hte(e, t) {
    if (t.parent.typeName !== e.$typeName)
      throw new PFt.FieldError(
        t,
        `cannot use ${t.toString()} with message ${e.$typeName}`,
        "ForeignFieldError",
      );
  }
  function a0r(e, t, r = !0) {
    return new gqe(e, t !== null && t !== void 0 ? t : [], r);
  }
  class gqe {
    field() {
      return this._field;
    }
    get size() {
      return this._arr.length;
    }
    constructor(e, t, r) {
      ((this._field = e),
        (this._arr = this[pP.unsafeLocal] = t),
        (this.check = r));
    }
    get(e) {
      let t = this._arr[e];
      return t === void 0 ? void 0 : fqe(this._field, t, this.check);
    }
    set(e, t) {
      if (e < 0 || e >= this._arr.length)
        throw new PFt.FieldError(
          this._field,
          `list item #${e + 1}: out of range`,
        );
      if (this.check) {
        let r = (0, abe.checkListItem)(this._field, e, t);
        if (r) throw r;
      }
      this._arr[e] = AFt(this._field, t);
    }
    add(e) {
      if (this.check) {
        let t = (0, abe.checkListItem)(this._field, this._arr.length, e);
        if (t) throw t;
      }
      this._arr.push(AFt(this._field, e));
      return;
    }
    clear() {
      this._arr.splice(0, this._arr.length);
    }
    [Symbol.iterator]() {
      return this.values();
    }
    keys() {
      return this._arr.keys();
    }
    *values() {
      for (let e of this._arr) yield fqe(this._field, e, this.check);
    }
    *entries() {
      for (let e = 0; e < this._arr.length; e++)
        yield [e, fqe(this._field, this._arr[e], this.check)];
    }
  }
  function l0r(e, t, r = !0) {
    return new hqe(e, t, r);
  }
  class hqe {
    constructor(e, t, r = !0) {
      ((this.obj = this[pP.unsafeLocal] = t !== null && t !== void 0 ? t : {}),
        (this.check = r),
        (this._field = e));
    }
    field() {
      return this._field;
    }
    set(e, t) {
      if (this.check) {
        let r = (0, abe.checkMapEntry)(this._field, e, t);
        if (r) throw r;
      }
      return ((this.obj[ibe(e)] = c0r(this._field, t)), this);
    }
    delete(e) {
      let t = ibe(e),
        r = Object.prototype.hasOwnProperty.call(this.obj, t);
      if (r) delete this.obj[t];
      return r;
    }
    clear() {
      for (let e of Object.keys(this.obj)) delete this.obj[e];
    }
    get(e) {
      let t = this.obj[ibe(e)];
      if (t !== void 0) t = pqe(this._field, t, this.check);
      return t;
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.obj, ibe(e));
    }
    *keys() {
      for (let e of Object.keys(this.obj)) yield RFt(e, this._field.mapKey);
    }
    *entries() {
      for (let e of Object.entries(this.obj))
        yield [
          RFt(e[0], this._field.mapKey),
          pqe(this._field, e[1], this.check),
        ];
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return Object.keys(this.obj).length;
    }
    *values() {
      for (let e of Object.values(this.obj))
        yield pqe(this._field, e, this.check);
    }
    forEach(e, t) {
      for (let r of this.entries()) e.call(t, r[1], r[0], this);
    }
  }
  function yqe(e, t) {
    if (!(0, yte.isReflectMessage)(t)) return t;
    if ((0, IFt.isWrapper)(t.message) && !e.oneof && e.fieldKind == "message")
      return t.message.value;
    if (
      t.desc.typeName == "google.protobuf.Struct" &&
      e.parent.typeName != "google.protobuf.Value"
    )
      return OFt(t.message);
    return t.message;
  }
  function _qe(e, t, r) {
    if (t !== void 0) {
      if (
        (0, IFt.isWrapperDesc)(e.message) &&
        !e.oneof &&
        e.fieldKind == "message"
      )
        t = {
          $typeName: e.message.typeName,
          value: bqe(e.message.fields[0], t),
        };
      else if (
        e.message.typeName == "google.protobuf.Struct" &&
        e.parent.typeName != "google.protobuf.Value" &&
        (0, yte.isObject)(t)
      )
        t = MFt(t);
    }
    return new mqe(e.message, t, r);
  }
  function AFt(e, t) {
    if (e.listKind == "message") return yqe(e, t);
    return Sqe(e, t);
  }
  function fqe(e, t, r) {
    if (e.listKind == "message") return _qe(e, t, r);
    return bqe(e, t);
  }
  function c0r(e, t) {
    if (e.mapKind == "message") return yqe(e, t);
    return Sqe(e, t);
  }
  function pqe(e, t, r) {
    if (e.mapKind == "message") return _qe(e, t, r);
    return t;
  }
  function ibe(e) {
    return typeof e == "string" || typeof e == "number" ? e : String(e);
  }
  function RFt(e, t) {
    switch (t) {
      case FS.ScalarType.STRING:
        return e;
      case FS.ScalarType.INT32:
      case FS.ScalarType.FIXED32:
      case FS.ScalarType.UINT32:
      case FS.ScalarType.SFIXED32:
      case FS.ScalarType.SINT32: {
        let r = Number.parseInt(e);
        if (Number.isFinite(r)) return r;
        break;
      }
      case FS.ScalarType.BOOL:
        switch (e) {
          case "true":
            return !0;
          case "false":
            return !1;
        }
        break;
      case FS.ScalarType.UINT64:
      case FS.ScalarType.FIXED64:
        try {
          return P5.protoInt64.uParse(e);
        } catch (r) {}
        break;
      default:
        try {
          return P5.protoInt64.parse(e);
        } catch (r) {}
        break;
    }
    return e;
  }
  function bqe(e, t) {
    switch (e.scalar) {
      case FS.ScalarType.INT64:
      case FS.ScalarType.SFIXED64:
      case FS.ScalarType.SINT64:
        if ("longAsString" in e && e.longAsString && typeof t == "string")
          t = P5.protoInt64.parse(t);
        break;
      case FS.ScalarType.FIXED64:
      case FS.ScalarType.UINT64:
        if ("longAsString" in e && e.longAsString && typeof t == "string")
          t = P5.protoInt64.uParse(t);
        break;
    }
    return t;
  }
  function Sqe(e, t) {
    switch (e.scalar) {
      case FS.ScalarType.INT64:
      case FS.ScalarType.SFIXED64:
      case FS.ScalarType.SINT64:
        if ("longAsString" in e && e.longAsString) t = String(t);
        else if (typeof t == "string" || typeof t == "number")
          t = P5.protoInt64.parse(t);
        break;
      case FS.ScalarType.FIXED64:
      case FS.ScalarType.UINT64:
        if ("longAsString" in e && e.longAsString) t = String(t);
        else if (typeof t == "string" || typeof t == "number")
          t = P5.protoInt64.uParse(t);
        break;
    }
    return t;
  }
  function MFt(e) {
    let t = { $typeName: "google.protobuf.Struct", fields: {} };
    if ((0, yte.isObject)(e))
      for (let [r, o] of Object.entries(e)) t.fields[r] = NFt(o);
    return t;
  }
  function OFt(e) {
    let t = {};
    for (let [r, o] of Object.entries(e.fields)) t[r] = DFt(o);
    return t;
  }
  function DFt(e) {
    switch (e.kind.case) {
      case "structValue":
        return OFt(e.kind.value);
      case "listValue":
        return e.kind.value.values.map(DFt);
      case "nullValue":
      case void 0:
        return null;
      default:
        return e.kind.value;
    }
  }
  function NFt(e) {
    let t = { $typeName: "google.protobuf.Value", kind: { case: void 0 } };
    switch (typeof e) {
      case "number":
        t.kind = { case: "numberValue", value: e };
        break;
      case "string":
        t.kind = { case: "stringValue", value: e };
        break;
      case "boolean":
        t.kind = { case: "boolValue", value: e };
        break;
      case "object":
        if (e === null) t.kind = { case: "nullValue", value: 0 };
        else if (Array.isArray(e)) {
          let r = { $typeName: "google.protobuf.ListValue", values: [] };
          if (Array.isArray(e)) for (let o of e) r.values.push(NFt(o));
          t.kind = { case: "listValue", value: r };
        } else t.kind = { case: "structValue", value: MFt(e) };
        break;
    }
    return t;
  }
});
var $Ft = commonJS(function (FFt) {
  Object.defineProperty(FFt, "__esModule", { value: !0 });
  var pDs = NB();
});
var HFt = commonJS(function (BFt) {
  Object.defineProperty(BFt, "__esModule", { value: !0 });
  BFt.InvalidPathError = void 0;
  BFt.buildPath = p0r;
  BFt.parsePath = m0r;
  BFt.pathToString = g0r;
  var DA = dE();
  function p0r(e) {
    return new lbe(e, e, []);
  }
  function m0r(e, t, r) {
    var o, d;
    let p = new lbe(e, e, []),
      _ = (E, C) => new _te(e, E + " at column " + (C + 1), t);
    for (let E = 0; E < t.length;) {
      let C = y0r(E, t),
        I = p.getLeft(),
        D = void 0;
      if ("field" in C) {
        if (
          ((D =
            (I === null || I === void 0 ? void 0 : I.kind) != "message"
              ? void 0
              : (o = I.fields.find((N) => N.name === C.field)) !== null &&
                  o !== void 0
                ? o
                : I.oneofs.find((N) => N.name === C.field)),
          !D)
        )
          throw _(`Unknown field "${C.field}"`, E);
      } else if ("ext" in C) {
        if (
          ((D =
            (d = r === null || r === void 0 ? void 0 : r.registry) === null ||
            d === void 0
              ? void 0
              : d.getExtension(C.ext)),
          !D)
        )
          throw _(`Unknown extension "${C.ext}"`, E);
      } else if ("val" in C)
        D =
          (I === null || I === void 0 ? void 0 : I.kind) == "field" &&
          I.fieldKind == "list" &&
          typeof C.val == "bigint"
            ? { kind: "list_sub", index: Number(C.val) }
            : { kind: "map_sub", key: C.val };
      else if ("err" in C) throw _(C.err, C.i);
      if (D)
        try {
          p.add([D]);
        } catch (N) {
          throw _(N instanceof _te ? N.message : String(N), E);
        }
      E = C.i;
    }
    return p.toPath();
  }
  function g0r(e) {
    let t = [];
    for (let r of e)
      switch (r.kind) {
        case "field":
        case "oneof":
          if (t.length > 0) t.push(".");
          t.push(r.name);
          break;
        case "extension":
          t.push("[", r.typeName, "]");
          break;
        case "list_sub":
          t.push("[", r.index, "]");
          break;
        case "map_sub":
          if (typeof r.key == "string")
            t.push(
              '["',
              r.key
                .split("\\")
                .join("\\\\")
                .split('"')
                .join('\\"')
                .split("\r")
                .join("\\r")
                .split(
                  `
`,
                )
                .join("\\n"),
              '"]',
            );
          else t.push("[", r.key, "]");
          break;
      }
    return t.join("");
  }
  class _te extends Error {
    constructor(e, t, r) {
      super(t);
      ((this.name = "InvalidPathError"),
        (this.schema = e),
        (this.path = r),
        Object.setPrototypeOf(this, new.target.prototype));
    }
  }
  BFt.InvalidPathError = _te;
  class lbe {
    constructor(e, t, r) {
      ((this.schema = e), (this.left = t), (this.path = r));
    }
    getLeft() {
      return this.left;
    }
    field(e) {
      return this.push(e);
    }
    oneof(e) {
      return this.push(e);
    }
    extension(e) {
      return this.push(e);
    }
    list(e) {
      return this.push({ kind: "list_sub", index: e });
    }
    map(e) {
      return this.push({ kind: "map_sub", key: e });
    }
    add(e) {
      let t = Array.isArray(e) ? e : e.toPath(),
        r = this.path.length;
      try {
        for (let o of t) this.push(o);
      } catch (o) {
        throw (this.path.splice(r), o);
      }
      return this;
    }
    toPath() {
      return this.path.concat();
    }
    clone() {
      return new lbe(this.schema, this.left, this.path.concat());
    }
    push(e) {
      switch (e.kind) {
        case "field":
          if (
            !this.left ||
            this.left.kind != "message" ||
            this.left.typeName != e.parent.typeName
          )
            throw this.err("field access");
          return (
            this.path.push(e),
            (this.left =
              e.fieldKind == "message"
                ? e.message
                : e.fieldKind == "list" || e.fieldKind == "map"
                  ? e
                  : void 0),
            this
          );
        case "oneof":
          if (
            !this.left ||
            this.left.kind != "message" ||
            this.left.typeName != e.parent.typeName
          )
            throw this.err("oneof access");
          return (this.path.push(e), (this.left = void 0), this);
        case "extension":
          if (
            !this.left ||
            this.left.kind != "message" ||
            this.left.typeName != e.extendee.typeName
          )
            throw this.err("extension access");
          return (
            this.path.push(e),
            (this.left = e.fieldKind == "message" ? e.message : void 0),
            this
          );
        case "list_sub":
          if (
            !this.left ||
            this.left.kind != "field" ||
            this.left.fieldKind != "list"
          )
            throw this.err("list access");
          if (e.index < 0 || !Number.isInteger(e.index))
            throw this.err("list index");
          return (
            this.path.push(e),
            (this.left =
              this.left.listKind == "message" ? this.left.message : void 0),
            this
          );
        case "map_sub":
          if (
            !this.left ||
            this.left.kind != "field" ||
            this.left.fieldKind != "map"
          )
            throw this.err("map access");
          if (!h0r(e.key, this.left.mapKey)) throw this.err("map key");
          return (
            this.path.push(e),
            (this.left =
              this.left.mapKind == "message" ? this.left.message : void 0),
            this
          );
      }
    }
    err(e) {
      return new _te(this.schema, "Invalid " + e, this.path);
    }
  }
  function h0r(e, t) {
    switch (t) {
      case DA.ScalarType.STRING:
        return typeof e == "string";
      case DA.ScalarType.INT32:
      case DA.ScalarType.UINT32:
      case DA.ScalarType.SINT32:
      case DA.ScalarType.SFIXED32:
      case DA.ScalarType.FIXED32:
        return typeof e == "number";
      case DA.ScalarType.UINT64:
      case DA.ScalarType.INT64:
      case DA.ScalarType.FIXED64:
      case DA.ScalarType.SFIXED64:
      case DA.ScalarType.SINT64:
        return typeof e == "bigint";
      case DA.ScalarType.BOOL:
        return typeof e == "boolean";
    }
  }
  function y0r(e, t) {
    let r = /^[A-Za-z_][A-Za-z_0-9]*(?:\.[A-Za-z_][A-Za-z_0-9]*)*$/,
      o = /^[A-Za-z_][A-Za-z_0-9]*$/;
    if (t[e] == "[") {
      e++;
      while (t[e] == " ") e++;
      if (e >= t.length) return { err: "Premature end", i: t.length - 1 };
      let _;
      if (t[e] == '"') {
        e++;
        let E = "";
        for (;;) {
          if (t[e] == '"') {
            e++;
            break;
          }
          if (t[e] == "\\") {
            switch (t[e + 1]) {
              case '"':
              case "\\":
                E += t[e + 1];
                break;
              case "r":
                E += "\r";
                break;
              case "n":
                E += `
`;
                break;
              default:
                return { err: "Invalid escape sequence", i: e };
            }
            e++;
          } else E += t[e];
          if (e >= t.length)
            return { err: "Premature end of string", i: t.length - 1 };
          e++;
        }
        _ = { val: E };
      } else if (t[e].match(/\d/)) {
        let E = e;
        while (e < t.length && /\d/.test(t[e])) e++;
        _ = { val: BigInt(t.substring(E, e)) };
      } else if (t[e] == "]") return { err: "Premature ]", i: e };
      else {
        let E = e;
        while (e < t.length && t[e] != " " && t[e] != "]") e++;
        let C = t.substring(E, e);
        if (C === "true") _ = { val: !0 };
        else if (C === "false") _ = { val: !1 };
        else if (r.test(C)) _ = { ext: C };
        else return { err: "Invalid ident", i: E };
      }
      while (t[e] == " ") e++;
      if (t[e] != "]") return { err: "Missing ]", i: e };
      return (e++, Object.assign(Object.assign({}, _), { i: e }));
    }
    if (e > 0) {
      if (t[e] != ".") return { err: 'Expected "."', i: e };
      e++;
    }
    let d = e;
    while (e < t.length && t[e] != "." && t[e] != "[") e++;
    let p = t.substring(d, e);
    return o.test(p) ? { field: p, i: e } : { err: "Invalid ident", i: d };
  }
});
var uN = commonJS(function (HS) {
  var k0r =
      (HS && HS.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var d = Object.getOwnPropertyDescriptor(t, r);
            if (
              !d ||
              ("get" in d ? !t.__esModule : d.writable || d.configurable)
            )
              d = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, d);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    s2 =
      (HS && HS.__exportStar) ||
      function (e, t) {
        for (var r in e)
          if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r))
            k0r(t, e, r);
      };
  Object.defineProperty(HS, "__esModule", { value: !0 });
  HS.isReflectMessage = HS.isReflectMap = HS.isReflectList = void 0;
  s2(fte(), HS);
  s2(n2(), HS);
  s2(nqe(), HS);
  s2(mM(), HS);
  s2($Ft(), HS);
  s2(DB(), HS);
  s2(HFt(), HS);
  var kqe = v5();
  Object.defineProperty(HS, "isReflectList", {
    enumerable: !0,
    get: function () {
      return kqe.isReflectList;
    },
  });
  Object.defineProperty(HS, "isReflectMap", {
    enumerable: !0,
    get: function () {
      return kqe.isReflectMap;
    },
  });
  Object.defineProperty(HS, "isReflectMessage", {
    enumerable: !0,
    get: function () {
      return kqe.isReflectMessage;
    },
  });
});
var NA = commonJS(function (GFt) {
  Object.defineProperty(GFt, "__esModule", { value: !0 });
  GFt.celUint = w0r;
  GFt.isCelUint = E0r;
  var jFt = Symbol.for("@bufbuild/cel/uint");
  function w0r(e) {
    return new WFt(e);
  }
  function E0r(e) {
    return typeof e === "object" && e !== null && jFt in e;
  }
  class WFt {
    _value;
    [jFt] = {};
    constructor(e) {
      this._value = e;
    }
    get value() {
      return this._value;
    }
  }
});
var qFt = commonJS(function (zFt) {
  Object.defineProperty(zFt, "__esModule", { value: !0 });
});
var Eqe = commonJS(function (YFt) {
  Object.defineProperty(YFt, "__esModule", { value: !0 });
  YFt.clone = A0r;
  var C0r = dE(),
    VFt = mM(),
    x0r = v5();
  function A0r(e, t) {
    return KFt((0, VFt.reflect)(e, t)).message;
  }
  function KFt(e) {
    let t = (0, VFt.reflect)(e.desc);
    for (let o of e.fields) {
      if (!e.isSet(o)) continue;
      switch (o.fieldKind) {
        case "list":
          let d = t.get(o);
          for (let _ of e.get(o)) d.add(wqe(o, _));
          break;
        case "map":
          let p = t.get(o);
          for (let _ of e.get(o).entries()) p.set(_[0], wqe(o, _[1]));
          break;
        default: {
          t.set(o, wqe(o, e.get(o)));
          break;
        }
      }
    }
    let r = e.getUnknown();
    if (r && r.length > 0) t.setUnknown([...r]);
    return t;
  }
  function wqe(e, t) {
    if (e.message !== void 0 && (0, x0r.isReflectMessage)(t)) return KFt(t);
    if (e.scalar == C0r.ScalarType.BYTES && t instanceof Uint8Array)
      return t.slice();
    return t;
  }
});
var bte = commonJS(function (JFt) {
  Object.defineProperty(JFt, "__esModule", { value: !0 });
  JFt.base64Decode = P0r;
  JFt.base64Encode = I0r;
  function P0r(e) {
    let t = M0r(),
      r = (e.length * 3) / 4;
    if (e[e.length - 2] == "=") r -= 2;
    else if (e[e.length - 1] == "=") r -= 1;
    let o = new Uint8Array(r),
      d = 0,
      p = 0,
      _,
      E = 0;
    for (let C = 0; C < e.length; C++) {
      if (((_ = t[e.charCodeAt(C)]), _ === void 0))
        switch (e[C]) {
          case "=":
            p = 0;
          case `
`:
          case "\r":
          case "\t":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string");
        }
      switch (p) {
        case 0:
          ((E = _), (p = 1));
          break;
        case 1:
          ((o[d++] = (E << 2) | ((_ & 48) >> 4)), (E = _), (p = 2));
          break;
        case 2:
          ((o[d++] = ((E & 15) << 4) | ((_ & 60) >> 2)), (E = _), (p = 3));
          break;
        case 3:
          ((o[d++] = ((E & 3) << 6) | _), (p = 0));
          break;
      }
    }
    if (p == 1) throw Error("invalid base64 string");
    return o.subarray(0, d);
  }
  function I0r(e, t = "std") {
    let r = QFt(t),
      o = t == "std",
      d = "",
      p = 0,
      _,
      E = 0;
    for (let C = 0; C < e.length; C++)
      switch (((_ = e[C]), p)) {
        case 0:
          ((d += r[_ >> 2]), (E = (_ & 3) << 4), (p = 1));
          break;
        case 1:
          ((d += r[E | (_ >> 4)]), (E = (_ & 15) << 2), (p = 2));
          break;
        case 2:
          ((d += r[E | (_ >> 6)]), (d += r[_ & 63]), (p = 0));
          break;
      }
    if (p) {
      if (((d += r[E]), o)) {
        if (((d += "="), p == 1)) d += "=";
      }
    }
    return d;
  }
  var cbe, XFt, I5;
  function QFt(e) {
    if (!cbe)
      ((cbe =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
          "",
        )),
        (XFt = cbe.slice(0, -2).concat("-", "_")));
    return e == "url" ? XFt : cbe;
  }
  function M0r() {
    if (!I5) {
      I5 = [];
      let e = QFt("std");
      for (let t = 0; t < e.length; t++) I5[e[t].charCodeAt(0)] = t;
      ((I5[45] = e.indexOf("+")), (I5[95] = e.indexOf("/")));
    }
    return I5;
  }
});
var Tqe = commonJS(function (e$t) {
  Object.defineProperty(e$t, "__esModule", { value: !0 });
  e$t.restoreJsonNames = ZFt;
  var N0r = n2(),
    L0r = NB();
  function ZFt(e) {
    for (let t of e.field)
      if (!(0, L0r.unsafeIsSetExplicit)(t, "jsonName"))
        t.jsonName = (0, N0r.protoCamelCase)(t.name);
    e.nestedType.forEach(ZFt);
  }
});
var Cqe = commonJS(function (t$t) {
  Object.defineProperty(t$t, "__esModule", { value: !0 });
  t$t.parseTextFormatEnumValue = $0r;
  t$t.parseTextFormatScalarValue = B0r;
  var fE = dE(),
    vqe = fM();
  function $0r(e, t) {
    let r = e.values.find((o) => o.name === t);
    if (!r) throw Error(`cannot parse ${e} default value: ${t}`);
    return r.number;
  }
  function B0r(e, t) {
    switch (e) {
      case fE.ScalarType.STRING:
        return t;
      case fE.ScalarType.BYTES: {
        let r = U0r(t);
        if (r === !1)
          throw Error(`cannot parse ${fE.ScalarType[e]} default value: ${t}`);
        return r;
      }
      case fE.ScalarType.INT64:
      case fE.ScalarType.SFIXED64:
      case fE.ScalarType.SINT64:
        return vqe.protoInt64.parse(t);
      case fE.ScalarType.UINT64:
      case fE.ScalarType.FIXED64:
        return vqe.protoInt64.uParse(t);
      case fE.ScalarType.DOUBLE:
      case fE.ScalarType.FLOAT:
        switch (t) {
          case "inf":
            return Number.POSITIVE_INFINITY;
          case "-inf":
            return Number.NEGATIVE_INFINITY;
          case "nan":
            return Number.NaN;
          default:
            return parseFloat(t);
        }
      case fE.ScalarType.BOOL:
        return t === "true";
      case fE.ScalarType.INT32:
      case fE.ScalarType.UINT32:
      case fE.ScalarType.SINT32:
      case fE.ScalarType.FIXED32:
      case fE.ScalarType.SFIXED32:
        return parseInt(t, 10);
    }
  }
  function U0r(e) {
    let t = [],
      r = {
        tail: e,
        c: "",
        next() {
          if (this.tail.length == 0) return !1;
          return (
            (this.c = this.tail[0]),
            (this.tail = this.tail.substring(1)),
            !0
          );
        },
        take(o) {
          if (this.tail.length >= o) {
            let d = this.tail.substring(0, o);
            return ((this.tail = this.tail.substring(o)), d);
          }
          return !1;
        },
      };
    while (r.next())
      switch (r.c) {
        case "\\":
          if (r.next())
            switch (r.c) {
              case "\\":
                t.push(r.c.charCodeAt(0));
                break;
              case "b":
                t.push(8);
                break;
              case "f":
                t.push(12);
                break;
              case "n":
                t.push(10);
                break;
              case "r":
                t.push(13);
                break;
              case "t":
                t.push(9);
                break;
              case "v":
                t.push(11);
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7": {
                let o = r.c,
                  d = r.take(2);
                if (d === !1) return !1;
                let p = parseInt(o + d, 8);
                if (Number.isNaN(p)) return !1;
                t.push(p);
                break;
              }
              case "x": {
                let o = r.c,
                  d = r.take(2);
                if (d === !1) return !1;
                let p = parseInt(o + d, 16);
                if (Number.isNaN(p)) return !1;
                t.push(p);
                break;
              }
              case "u": {
                let o = r.c,
                  d = r.take(4);
                if (d === !1) return !1;
                let p = parseInt(o + d, 16);
                if (Number.isNaN(p)) return !1;
                let _ = new Uint8Array(4);
                (new DataView(_.buffer).setInt32(0, p, !0),
                  t.push(_[0], _[1], _[2], _[3]));
                break;
              }
              case "U": {
                let o = r.c,
                  d = r.take(8);
                if (d === !1) return !1;
                let p = vqe.protoInt64.uEnc(o + d),
                  _ = new Uint8Array(8),
                  E = new DataView(_.buffer);
                (E.setInt32(0, p.lo, !0),
                  E.setInt32(4, p.hi, !0),
                  t.push(_[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7]));
                break;
              }
            }
          break;
        default:
          t.push(r.c.charCodeAt(0));
      }
    return new Uint8Array(t);
  }
});
var fbe = commonJS(function (p$t) {
  Object.defineProperty(p$t, "__esModule", { value: !0 });
  p$t.maximumEdition = p$t.minimumEdition = void 0;
  p$t.createRegistry = G0r;
  p$t.createMutableRegistry = z0r;
  p$t.createFileRegistry = q0r;
  var xqe = dE(),
    n$t = Cqe(),
    W0r = nqe(),
    ube = NB(),
    $B = n2();
  function G0r(...e) {
    return c$t(e);
  }
  function z0r(...e) {
    let t = c$t(e);
    return Object.assign(Object.assign({}, t), {
      remove(r) {
        var o;
        if (r.kind == "extension")
          (o = t.extendees.get(r.extendee.typeName)) === null ||
            o === void 0 ||
            o.delete(r.number);
        t.types.delete(r.typeName);
      },
    });
  }
  function q0r(...e) {
    let t = l$t();
    if (!e.length) return t;
    if (
      "$typeName" in e[0] &&
      e[0].$typeName == "google.protobuf.FileDescriptorSet"
    ) {
      for (let r of e[0].file) i$t(r, t);
      return t;
    }
    if ("$typeName" in e[0]) {
      let p = function (_) {
          let E = [];
          for (let C of _.dependency) {
            if (t.getFile(C) != null) continue;
            if (d.has(C)) continue;
            let I = o(C);
            if (!I)
              throw Error(`Unable to resolve ${C}, imported by ${_.name}`);
            if ("kind" in I) t.addFile(I, !1, !0);
            else (d.add(I.name), E.push(I));
          }
          return E.concat(...E.map(p));
        },
        r = e[0],
        o = e[1],
        d = new Set();
      for (let _ of [r, ...p(r)].reverse()) i$t(_, t);
    } else for (let r of e) for (let o of r.files) t.addFile(o);
    return t;
  }
  function l$t() {
    let e = new Map(),
      t = new Map(),
      r = new Map();
    return {
      kind: "registry",
      types: e,
      extendees: t,
      [Symbol.iterator]() {
        return e.values();
      },
      get files() {
        return r.values();
      },
      addFile(o, d, p) {
        if ((r.set(o.proto.name, o), !d))
          for (let _ of (0, W0r.nestedTypes)(o)) this.add(_);
        if (p) for (let _ of o.dependencies) this.addFile(_, d, p);
      },
      add(o) {
        if (o.kind == "extension") {
          let d = t.get(o.extendee.typeName);
          if (!d) t.set(o.extendee.typeName, (d = new Map()));
          d.set(o.number, o);
        }
        e.set(o.typeName, o);
      },
      get(o) {
        return e.get(o);
      },
      getFile(o) {
        return r.get(o);
      },
      getMessage(o) {
        let d = e.get(o);
        return (d === null || d === void 0 ? void 0 : d.kind) == "message"
          ? d
          : void 0;
      },
      getEnum(o) {
        let d = e.get(o);
        return (d === null || d === void 0 ? void 0 : d.kind) == "enum"
          ? d
          : void 0;
      },
      getExtension(o) {
        let d = e.get(o);
        return (d === null || d === void 0 ? void 0 : d.kind) == "extension"
          ? d
          : void 0;
      },
      getExtensionFor(o, d) {
        var p;
        return (p = t.get(o.typeName)) === null || p === void 0
          ? void 0
          : p.get(d);
      },
      getService(o) {
        let d = e.get(o);
        return (d === null || d === void 0 ? void 0 : d.kind) == "service"
          ? d
          : void 0;
      },
    };
  }
  function c$t(e) {
    let t = l$t();
    for (let r of e)
      switch (r.kind) {
        case "registry":
          for (let o of r) t.add(o);
          break;
        case "file":
          t.addFile(r);
          break;
        default:
          t.add(r);
          break;
      }
    return t;
  }
  var V0r = 998,
    K0r = 999,
    Y0r = 9999,
    X0r = 9,
    wte = 10,
    Ste = 11,
    Q0r = 12,
    r$t = 14,
    Mqe = 3,
    J0r = 2,
    o$t = 1,
    Z0r = 0,
    Aqe = 1,
    s$t = 2,
    eOr = 3,
    tOr = 1,
    nOr = 2,
    rOr = 1,
    oOr = 2;
  ((p$t.minimumEdition = 998), (p$t.maximumEdition = 1001));
  var u$t = {
    998: {
      fieldPresence: 1,
      enumType: 2,
      repeatedFieldEncoding: 2,
      utf8Validation: 3,
      messageEncoding: 1,
      jsonFormat: 2,
      enforceNamingStyle: 2,
      defaultSymbolVisibility: 1,
    },
    999: {
      fieldPresence: 2,
      enumType: 1,
      repeatedFieldEncoding: 1,
      utf8Validation: 2,
      messageEncoding: 1,
      jsonFormat: 1,
      enforceNamingStyle: 2,
      defaultSymbolVisibility: 1,
    },
    1000: {
      fieldPresence: 1,
      enumType: 1,
      repeatedFieldEncoding: 1,
      utf8Validation: 2,
      messageEncoding: 1,
      jsonFormat: 1,
      enforceNamingStyle: 2,
      defaultSymbolVisibility: 1,
    },
    1001: {
      fieldPresence: 1,
      enumType: 1,
      repeatedFieldEncoding: 1,
      utf8Validation: 2,
      messageEncoding: 1,
      jsonFormat: 1,
      enforceNamingStyle: 1,
      defaultSymbolVisibility: 2,
    },
  };
  function i$t(e, t) {
    var r, o;
    let d = {
        kind: "file",
        proto: e,
        deprecated:
          (o =
            (r = e.options) === null || r === void 0
              ? void 0
              : r.deprecated) !== null && o !== void 0
            ? o
            : !1,
        edition: lOr(e),
        name: e.name.replace(/\.proto$/, ""),
        dependencies: cOr(e, t),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString() {
          return `file ${e.name}`;
        },
      },
      p = new Map(),
      _ = {
        get(E) {
          return p.get(E);
        },
        add(E) {
          var C;
          (SP(
            ((C = E.proto.options) === null || C === void 0
              ? void 0
              : C.mapEntry) === !0,
          ),
            p.set(E.typeName, E));
        },
      };
    for (let E of e.enumType) d$t(E, d, void 0, t);
    for (let E of e.messageType) f$t(E, d, void 0, t, _);
    for (let E of e.service) sOr(E, d, t);
    Rqe(d, t);
    for (let E of p.values()) Pqe(E, t, _);
    for (let E of d.messages) (Pqe(E, t, _), Rqe(E, t));
    t.addFile(d, !0);
  }
  function Rqe(e, t) {
    switch (e.kind) {
      case "file":
        for (let r of e.proto.extension) {
          let o = Iqe(r, e, t);
          (e.extensions.push(o), t.add(o));
        }
        break;
      case "message":
        for (let r of e.proto.extension) {
          let o = Iqe(r, e, t);
          (e.nestedExtensions.push(o), t.add(o));
        }
        for (let r of e.nestedMessages) Rqe(r, t);
        break;
    }
  }
  function Pqe(e, t, r) {
    let o = e.proto.oneofDecl.map((p) => aOr(p, e)),
      d = new Set();
    for (let p of e.proto.field) {
      let _ = fOr(p, o),
        E = Iqe(p, e, t, _, r);
      if ((e.fields.push(E), (e.field[E.localName] = E), _ === void 0))
        e.members.push(E);
      else if ((_.fields.push(E), !d.has(_))) (d.add(_), e.members.push(_));
    }
    for (let p of o.filter((_) => d.has(_))) e.oneofs.push(p);
    for (let p of e.nestedMessages) Pqe(p, t, r);
  }
  function d$t(e, t, r, o) {
    var d, p, _, E, C;
    let I = uOr(e.name, e.value),
      D = {
        kind: "enum",
        proto: e,
        deprecated:
          (p =
            (d = e.options) === null || d === void 0
              ? void 0
              : d.deprecated) !== null && p !== void 0
            ? p
            : !1,
        file: t,
        parent: r,
        open: !0,
        name: e.name,
        typeName: dbe(e, r, t),
        value: {},
        values: [],
        sharedPrefix: I,
        toString() {
          return `enum ${this.typeName}`;
        },
      };
    ((D.open = hOr(D)), o.add(D));
    for (let N of e.value) {
      let F = N.name;
      D.values.push(
        (D.value[N.number] = {
          kind: "enum_value",
          proto: N,
          deprecated:
            (E =
              (_ = N.options) === null || _ === void 0
                ? void 0
                : _.deprecated) !== null && E !== void 0
              ? E
              : !1,
          parent: D,
          name: F,
          localName: (0, $B.safeObjectProperty)(
            I == null ? F : F.substring(I.length),
          ),
          number: N.number,
          toString() {
            return `enum value ${D.typeName}.${F}`;
          },
        }),
      );
    }
    ((C = r === null || r === void 0 ? void 0 : r.nestedEnums) !== null &&
    C !== void 0
      ? C
      : t.enums
    ).push(D);
  }
  function f$t(e, t, r, o, d) {
    var p, _, E, C;
    let I = {
      kind: "message",
      proto: e,
      deprecated:
        (_ =
          (p = e.options) === null || p === void 0 ? void 0 : p.deprecated) !==
          null && _ !== void 0
          ? _
          : !1,
      file: t,
      parent: r,
      name: e.name,
      typeName: dbe(e, r, t),
      fields: [],
      field: {},
      oneofs: [],
      members: [],
      nestedEnums: [],
      nestedMessages: [],
      nestedExtensions: [],
      toString() {
        return `message ${this.typeName}`;
      },
    };
    if (((E = e.options) === null || E === void 0 ? void 0 : E.mapEntry) === !0)
      d.add(I);
    else
      (((C = r === null || r === void 0 ? void 0 : r.nestedMessages) !== null &&
      C !== void 0
        ? C
        : t.messages
      ).push(I),
        o.add(I));
    for (let D of e.enumType) d$t(D, t, I, o);
    for (let D of e.nestedType) f$t(D, t, I, o, d);
  }
  function sOr(e, t, r) {
    var o, d;
    let p = {
      kind: "service",
      proto: e,
      deprecated:
        (d =
          (o = e.options) === null || o === void 0 ? void 0 : o.deprecated) !==
          null && d !== void 0
          ? d
          : !1,
      file: t,
      name: e.name,
      typeName: dbe(e, void 0, t),
      methods: [],
      method: {},
      toString() {
        return `service ${this.typeName}`;
      },
    };
    (t.services.push(p), r.add(p));
    for (let _ of e.method) {
      let E = iOr(_, p, r);
      (p.methods.push(E), (p.method[E.localName] = E));
    }
  }
  function iOr(e, t, r) {
    var o, d, p, _;
    let E;
    if (e.clientStreaming && e.serverStreaming) E = "bidi_streaming";
    else if (e.clientStreaming) E = "client_streaming";
    else if (e.serverStreaming) E = "server_streaming";
    else E = "unary";
    let C = r.getMessage(dN(e.inputType)),
      I = r.getMessage(dN(e.outputType));
    (SP(
      C,
      `invalid MethodDescriptorProto: input_type ${e.inputType} not found`,
    ),
      SP(
        I,
        `invalid MethodDescriptorProto: output_type ${e.inputType} not found`,
      ));
    let D = e.name;
    return {
      kind: "rpc",
      proto: e,
      deprecated:
        (d =
          (o = e.options) === null || o === void 0 ? void 0 : o.deprecated) !==
          null && d !== void 0
          ? d
          : !1,
      parent: t,
      name: D,
      localName: (0, $B.safeObjectProperty)(
        D.length
          ? (0, $B.safeObjectProperty)(D[0].toLowerCase() + D.substring(1))
          : D,
      ),
      methodKind: E,
      input: C,
      output: I,
      idempotency:
        (_ =
          (p = e.options) === null || p === void 0
            ? void 0
            : p.idempotencyLevel) !== null && _ !== void 0
          ? _
          : Z0r,
      toString() {
        return `rpc ${t.typeName}.${D}`;
      },
    };
  }
  function aOr(e, t) {
    return {
      kind: "oneof",
      proto: e,
      deprecated: !1,
      parent: t,
      fields: [],
      name: e.name,
      localName: (0, $B.safeObjectProperty)((0, $B.protoCamelCase)(e.name)),
      toString() {
        return `oneof ${t.typeName}.${this.name}`;
      },
    };
  }
  function Iqe(e, t, r, o, d) {
    var p, _, E;
    let C = d === void 0,
      I = {
        kind: "field",
        proto: e,
        deprecated:
          (_ =
            (p = e.options) === null || p === void 0
              ? void 0
              : p.deprecated) !== null && _ !== void 0
            ? _
            : !1,
        name: e.name,
        number: e.number,
        scalar: void 0,
        message: void 0,
        enum: void 0,
        presence: pOr(e, o, C, t),
        utf8Validation: yOr(e, t),
        listKind: void 0,
        mapKind: void 0,
        mapKey: void 0,
        delimitedEncoding: void 0,
        packed: void 0,
        longAsString: !1,
        getDefaultValue: void 0,
      };
    if (C) {
      let U = t.kind == "file" ? t : t.file,
        V = t.kind == "file" ? void 0 : t,
        re = dbe(e, V, U);
      ((I.kind = "extension"),
        (I.file = U),
        (I.parent = V),
        (I.oneof = void 0),
        (I.typeName = re),
        (I.jsonName = `[${re}]`),
        (I.toString = () => `extension ${re}`));
      let ue = r.getMessage(dN(e.extendee));
      (SP(ue, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`),
        (I.extendee = ue));
    } else {
      let U = t;
      (SP(U.kind == "message"),
        (I.parent = U),
        (I.oneof = o),
        (I.localName = o
          ? (0, $B.protoCamelCase)(e.name)
          : (0, $B.safeObjectProperty)((0, $B.protoCamelCase)(e.name))),
        (I.jsonName = e.jsonName),
        (I.toString = () => `field ${U.typeName}.${e.name}`));
    }
    let { label: D, type: N } = e,
      F = (E = e.options) === null || E === void 0 ? void 0 : E.jstype;
    if (D === Mqe) {
      let U =
        N == Ste
          ? d === null || d === void 0
            ? void 0
            : d.get(dN(e.typeName))
          : void 0;
      if (U) {
        I.fieldKind = "map";
        let { key: V, value: re } = gOr(U);
        return (
          (I.mapKey = V.scalar),
          (I.mapKind = re.fieldKind),
          (I.message = re.message),
          (I.delimitedEncoding = !1),
          (I.enum = re.enum),
          (I.scalar = re.scalar),
          I
        );
      }
      switch (((I.fieldKind = "list"), N)) {
        case Ste:
        case wte:
          ((I.listKind = "message"),
            (I.message = r.getMessage(dN(e.typeName))),
            SP(I.message),
            (I.delimitedEncoding = a$t(e, t)));
          break;
        case r$t:
          ((I.listKind = "enum"),
            (I.enum = r.getEnum(dN(e.typeName))),
            SP(I.enum));
          break;
        default:
          ((I.listKind = "scalar"),
            (I.scalar = N),
            (I.longAsString = F == o$t));
          break;
      }
      return ((I.packed = mOr(e, t)), I);
    }
    switch (N) {
      case Ste:
      case wte:
        ((I.fieldKind = "message"),
          (I.message = r.getMessage(dN(e.typeName))),
          SP(
            I.message,
            `invalid FieldDescriptorProto: type_name ${e.typeName} not found`,
          ),
          (I.delimitedEncoding = a$t(e, t)),
          (I.getDefaultValue = () => {
            return;
          }));
        break;
      case r$t: {
        let U = r.getEnum(dN(e.typeName));
        (SP(
          U !== void 0,
          `invalid FieldDescriptorProto: type_name ${e.typeName} not found`,
        ),
          (I.fieldKind = "enum"),
          (I.enum = r.getEnum(dN(e.typeName))),
          (I.getDefaultValue = () =>
            (0, ube.unsafeIsSetExplicit)(e, "defaultValue")
              ? (0, n$t.parseTextFormatEnumValue)(U, e.defaultValue)
              : void 0));
        break;
      }
      default: {
        ((I.fieldKind = "scalar"),
          (I.scalar = N),
          (I.longAsString = F == o$t),
          (I.getDefaultValue = () =>
            (0, ube.unsafeIsSetExplicit)(e, "defaultValue")
              ? (0, n$t.parseTextFormatScalarValue)(N, e.defaultValue)
              : void 0));
        break;
      }
    }
    return I;
  }
  function lOr(e) {
    switch (e.syntax) {
      case "":
      case "proto2":
        return V0r;
      case "proto3":
        return K0r;
      case "editions":
        if (e.edition === Y0r) return p$t.maximumEdition;
        if (e.edition in u$t) return e.edition;
        throw Error(`${e.name}: unsupported edition`);
      default:
        throw Error(`${e.name}: unsupported syntax "${e.syntax}"`);
    }
  }
  function cOr(e, t) {
    return e.dependency.map((r) => {
      let o = t.getFile(r);
      if (!o) throw Error(`Cannot find ${r}, imported by ${e.name}`);
      return o;
    });
  }
  function uOr(e, t) {
    let r = dOr(e) + "_";
    for (let o of t) {
      if (!o.name.toLowerCase().startsWith(r)) return;
      let d = o.name.substring(r.length);
      if (d.length == 0) return;
      if (/^\d/.test(d)) return;
    }
    return r;
  }
  function dOr(e) {
    return (
      e.substring(0, 1) + e.substring(1).replace(/[A-Z]/g, (t) => "_" + t)
    ).toLowerCase();
  }
  function dbe(e, t, r) {
    let o;
    if (t) o = `${t.typeName}.${e.name}`;
    else if (r.proto.package.length > 0) o = `${r.proto.package}.${e.name}`;
    else o = `${e.name}`;
    return o;
  }
  function dN(e) {
    return e.startsWith(".") ? e.substring(1) : e;
  }
  function fOr(e, t) {
    if (!(0, ube.unsafeIsSetExplicit)(e, "oneofIndex")) return;
    if (e.proto3Optional) return;
    let r = t[e.oneofIndex];
    return (
      SP(
        r,
        `invalid FieldDescriptorProto: oneof #${e.oneofIndex} for field #${e.number} not found`,
      ),
      r
    );
  }
  function pOr(e, t, r, o) {
    if (e.label == J0r) return eOr;
    if (e.label == Mqe) return s$t;
    if (!!t || e.proto3Optional) return Aqe;
    if (r) return Aqe;
    let d = i2("fieldPresence", { proto: e, parent: o });
    if (d == s$t && (e.type == Ste || e.type == wte)) return Aqe;
    return d;
  }
  function mOr(e, t) {
    if (e.label != Mqe) return !1;
    switch (e.type) {
      case X0r:
      case Q0r:
      case wte:
      case Ste:
        return !1;
    }
    let r = e.options;
    if (r && (0, ube.unsafeIsSetExplicit)(r, "packed")) return r.packed;
    return tOr == i2("repeatedFieldEncoding", { proto: e, parent: t });
  }
  function gOr(e) {
    let t = e.fields.find((o) => o.number === 1),
      r = e.fields.find((o) => o.number === 2);
    return (
      SP(
        t &&
          t.fieldKind == "scalar" &&
          t.scalar != xqe.ScalarType.BYTES &&
          t.scalar != xqe.ScalarType.FLOAT &&
          t.scalar != xqe.ScalarType.DOUBLE &&
          r &&
          r.fieldKind != "list" &&
          r.fieldKind != "map",
      ),
      { key: t, value: r }
    );
  }
  function hOr(e) {
    var t;
    return (
      rOr ==
      i2("enumType", {
        proto: e.proto,
        parent: (t = e.parent) !== null && t !== void 0 ? t : e.file,
      })
    );
  }
  function a$t(e, t) {
    if (e.type == wte) return !0;
    return nOr == i2("messageEncoding", { proto: e, parent: t });
  }
  function yOr(e, t) {
    return oOr == i2("utf8Validation", { proto: e, parent: t });
  }
  function i2(e, t) {
    var r, o;
    let d =
      (r = t.proto.options) === null || r === void 0 ? void 0 : r.features;
    if (d) {
      let p = d[e];
      if (p != 0) return p;
    }
    if ("kind" in t) {
      if (t.kind == "message")
        return i2(e, (o = t.parent) !== null && o !== void 0 ? o : t.file);
      let p = u$t[t.edition];
      if (!p) throw Error(`feature default for edition ${t.edition} not found`);
      return p[e];
    }
    return i2(e, t.parent);
  }
  function SP(e, t) {
    if (!e) throw Error(t);
  }
});
var Dqe = commonJS(function (y$t) {
  Object.defineProperty(y$t, "__esModule", { value: !0 });
  y$t.boot = TOr;
  y$t.bootFileDescriptorProto = m$t;
  var wOr = Tqe(),
    EOr = fbe();
  function TOr(e) {
    let t = m$t(e);
    return (
      t.messageType.forEach(wOr.restoreJsonNames),
      (0, EOr.createFileRegistry)(t, () => {
        return;
      }).getFile(t.name)
    );
  }
  function m$t(e) {
    let t = Object.create({ syntax: "", edition: 0 });
    return Object.assign(
      t,
      Object.assign(
        Object.assign(
          {
            $typeName: "google.protobuf.FileDescriptorProto",
            dependency: [],
            publicDependency: [],
            weakDependency: [],
            optionDependency: [],
            service: [],
            extension: [],
          },
          e,
        ),
        { messageType: e.messageType.map(g$t), enumType: e.enumType.map(h$t) },
      ),
    );
  }
  function g$t(e) {
    var t, r, o, d, p, _, E, C;
    let I = Object.create({ visibility: 0 });
    return Object.assign(I, {
      $typeName: "google.protobuf.DescriptorProto",
      name: e.name,
      field:
        (r = (t = e.field) === null || t === void 0 ? void 0 : t.map(vOr)) !==
          null && r !== void 0
          ? r
          : [],
      extension: [],
      nestedType:
        (d =
          (o = e.nestedType) === null || o === void 0 ? void 0 : o.map(g$t)) !==
          null && d !== void 0
          ? d
          : [],
      enumType:
        (_ =
          (p = e.enumType) === null || p === void 0 ? void 0 : p.map(h$t)) !==
          null && _ !== void 0
          ? _
          : [],
      extensionRange:
        (C =
          (E = e.extensionRange) === null || E === void 0
            ? void 0
            : E.map((D) =>
                Object.assign(
                  {
                    $typeName: "google.protobuf.DescriptorProto.ExtensionRange",
                  },
                  D,
                ),
              )) !== null && C !== void 0
          ? C
          : [],
      oneofDecl: [],
      reservedRange: [],
      reservedName: [],
    });
  }
  function vOr(e) {
    let t = Object.create({
      label: 1,
      typeName: "",
      extendee: "",
      defaultValue: "",
      oneofIndex: 0,
      jsonName: "",
      proto3Optional: !1,
    });
    return Object.assign(
      t,
      Object.assign(
        Object.assign({ $typeName: "google.protobuf.FieldDescriptorProto" }, e),
        { options: e.options ? COr(e.options) : void 0 },
      ),
    );
  }
  function COr(e) {
    var t, r, o;
    let d = Object.create({
      ctype: 0,
      packed: !1,
      jstype: 0,
      lazy: !1,
      unverifiedLazy: !1,
      deprecated: !1,
      weak: !1,
      debugRedact: !1,
      retention: 0,
    });
    return Object.assign(
      d,
      Object.assign(
        Object.assign({ $typeName: "google.protobuf.FieldOptions" }, e),
        {
          targets: (t = e.targets) !== null && t !== void 0 ? t : [],
          editionDefaults:
            (o =
              (r = e.editionDefaults) === null || r === void 0
                ? void 0
                : r.map((p) =>
                    Object.assign(
                      {
                        $typeName:
                          "google.protobuf.FieldOptions.EditionDefault",
                      },
                      p,
                    ),
                  )) !== null && o !== void 0
              ? o
              : [],
          uninterpretedOption: [],
        },
      ),
    );
  }
  function h$t(e) {
    let t = Object.create({ visibility: 0 });
    return Object.assign(t, {
      $typeName: "google.protobuf.EnumDescriptorProto",
      name: e.name,
      reservedName: [],
      reservedRange: [],
      value: e.value.map((r) =>
        Object.assign(
          { $typeName: "google.protobuf.EnumValueDescriptorProto" },
          r,
        ),
      ),
    });
  }
});
var Tw = commonJS(function (_$t) {
  Object.defineProperty(_$t, "__esModule", { value: !0 });
  _$t.messageDesc = ROr;
  function ROr(e, t, ...r) {
    return r.reduce((o, d) => o.nestedMessages[d], e.messages[t]);
  }
});
var pN = commonJS(function (b$t) {
  Object.defineProperty(b$t, "__esModule", { value: !0 });
  b$t.enumDesc = IOr;
  b$t.tsEnum = MOr;
  function IOr(e, t, ...r) {
    if (r.length == 0) return e.enums[t];
    let o = r.pop();
    return r.reduce((d, p) => d.nestedMessages[p], e.messages[t]).nestedEnums[
      o
    ];
  }
  function MOr(e) {
    let t = {};
    for (let r of e.values)
      ((t[r.localName] = r.number), (t[r.number] = r.localName));
    return t;
  }
});
var BB = commonJS(function (U$t) {
  Object.defineProperty(U$t, "__esModule", { value: !0 });
  U$t.FeatureSet_FieldPresence =
    U$t.FeatureSet_VisibilityFeature_DefaultSymbolVisibilitySchema =
    U$t.FeatureSet_VisibilityFeature_DefaultSymbolVisibility =
    U$t.FeatureSet_VisibilityFeatureSchema =
    U$t.FeatureSetSchema =
    U$t.UninterpretedOption_NamePartSchema =
    U$t.UninterpretedOptionSchema =
    U$t.MethodOptions_IdempotencyLevelSchema =
    U$t.MethodOptions_IdempotencyLevel =
    U$t.MethodOptionsSchema =
    U$t.ServiceOptionsSchema =
    U$t.EnumValueOptionsSchema =
    U$t.EnumOptionsSchema =
    U$t.OneofOptionsSchema =
    U$t.FieldOptions_OptionTargetTypeSchema =
    U$t.FieldOptions_OptionTargetType =
    U$t.FieldOptions_OptionRetentionSchema =
    U$t.FieldOptions_OptionRetention =
    U$t.FieldOptions_JSTypeSchema =
    U$t.FieldOptions_JSType =
    U$t.FieldOptions_CTypeSchema =
    U$t.FieldOptions_CType =
    U$t.FieldOptions_FeatureSupportSchema =
    U$t.FieldOptions_EditionDefaultSchema =
    U$t.FieldOptionsSchema =
    U$t.MessageOptionsSchema =
    U$t.FileOptions_OptimizeModeSchema =
    U$t.FileOptions_OptimizeMode =
    U$t.FileOptionsSchema =
    U$t.MethodDescriptorProtoSchema =
    U$t.ServiceDescriptorProtoSchema =
    U$t.EnumValueDescriptorProtoSchema =
    U$t.EnumDescriptorProto_EnumReservedRangeSchema =
    U$t.EnumDescriptorProtoSchema =
    U$t.OneofDescriptorProtoSchema =
    U$t.FieldDescriptorProto_LabelSchema =
    U$t.FieldDescriptorProto_Label =
    U$t.FieldDescriptorProto_TypeSchema =
    U$t.FieldDescriptorProto_Type =
    U$t.FieldDescriptorProtoSchema =
    U$t.ExtensionRangeOptions_VerificationStateSchema =
    U$t.ExtensionRangeOptions_VerificationState =
    U$t.ExtensionRangeOptions_DeclarationSchema =
    U$t.ExtensionRangeOptionsSchema =
    U$t.DescriptorProto_ReservedRangeSchema =
    U$t.DescriptorProto_ExtensionRangeSchema =
    U$t.DescriptorProtoSchema =
    U$t.FileDescriptorProtoSchema =
    U$t.FileDescriptorSetSchema =
    U$t.file_google_protobuf_descriptor =
      void 0;
  U$t.SymbolVisibilitySchema =
    U$t.SymbolVisibility =
    U$t.EditionSchema =
    U$t.Edition =
    U$t.GeneratedCodeInfo_Annotation_SemanticSchema =
    U$t.GeneratedCodeInfo_Annotation_Semantic =
    U$t.GeneratedCodeInfo_AnnotationSchema =
    U$t.GeneratedCodeInfoSchema =
    U$t.SourceCodeInfo_LocationSchema =
    U$t.SourceCodeInfoSchema =
    U$t.FeatureSetDefaults_FeatureSetEditionDefaultSchema =
    U$t.FeatureSetDefaultsSchema =
    U$t.FeatureSet_EnforceNamingStyleSchema =
    U$t.FeatureSet_EnforceNamingStyle =
    U$t.FeatureSet_JsonFormatSchema =
    U$t.FeatureSet_JsonFormat =
    U$t.FeatureSet_MessageEncodingSchema =
    U$t.FeatureSet_MessageEncoding =
    U$t.FeatureSet_Utf8ValidationSchema =
    U$t.FeatureSet_Utf8Validation =
    U$t.FeatureSet_RepeatedFieldEncodingSchema =
    U$t.FeatureSet_RepeatedFieldEncoding =
    U$t.FeatureSet_EnumTypeSchema =
    U$t.FeatureSet_EnumType =
    U$t.FeatureSet_FieldPresenceSchema =
      void 0;
  var NOr = Dqe(),
    lg = Tw(),
    hS = pN();
  U$t.file_google_protobuf_descriptor = (0, NOr.boot)({
    name: "google/protobuf/descriptor.proto",
    package: "google.protobuf",
    messageType: [
      {
        name: "FileDescriptorSet",
        field: [
          {
            name: "file",
            number: 1,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.FileDescriptorProto",
          },
        ],
        extensionRange: [{ start: 536000000, end: 536000001 }],
      },
      {
        name: "FileDescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          { name: "package", number: 2, type: 9, label: 1 },
          { name: "dependency", number: 3, type: 9, label: 3 },
          { name: "public_dependency", number: 10, type: 5, label: 3 },
          { name: "weak_dependency", number: 11, type: 5, label: 3 },
          { name: "option_dependency", number: 15, type: 9, label: 3 },
          {
            name: "message_type",
            number: 4,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.DescriptorProto",
          },
          {
            name: "enum_type",
            number: 5,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.EnumDescriptorProto",
          },
          {
            name: "service",
            number: 6,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.ServiceDescriptorProto",
          },
          {
            name: "extension",
            number: 7,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.FieldDescriptorProto",
          },
          {
            name: "options",
            number: 8,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FileOptions",
          },
          {
            name: "source_code_info",
            number: 9,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.SourceCodeInfo",
          },
          { name: "syntax", number: 12, type: 9, label: 1 },
          {
            name: "edition",
            number: 14,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.Edition",
          },
        ],
      },
      {
        name: "DescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          {
            name: "field",
            number: 2,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.FieldDescriptorProto",
          },
          {
            name: "extension",
            number: 6,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.FieldDescriptorProto",
          },
          {
            name: "nested_type",
            number: 3,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.DescriptorProto",
          },
          {
            name: "enum_type",
            number: 4,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.EnumDescriptorProto",
          },
          {
            name: "extension_range",
            number: 5,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.DescriptorProto.ExtensionRange",
          },
          {
            name: "oneof_decl",
            number: 8,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.OneofDescriptorProto",
          },
          {
            name: "options",
            number: 7,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.MessageOptions",
          },
          {
            name: "reserved_range",
            number: 9,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.DescriptorProto.ReservedRange",
          },
          { name: "reserved_name", number: 10, type: 9, label: 3 },
          {
            name: "visibility",
            number: 11,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.SymbolVisibility",
          },
        ],
        nestedType: [
          {
            name: "ExtensionRange",
            field: [
              { name: "start", number: 1, type: 5, label: 1 },
              { name: "end", number: 2, type: 5, label: 1 },
              {
                name: "options",
                number: 3,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.ExtensionRangeOptions",
              },
            ],
          },
          {
            name: "ReservedRange",
            field: [
              { name: "start", number: 1, type: 5, label: 1 },
              { name: "end", number: 2, type: 5, label: 1 },
            ],
          },
        ],
      },
      {
        name: "ExtensionRangeOptions",
        field: [
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
          {
            name: "declaration",
            number: 2,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.ExtensionRangeOptions.Declaration",
            options: { retention: 2 },
          },
          {
            name: "features",
            number: 50,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "verification",
            number: 3,
            type: 14,
            label: 1,
            typeName:
              ".google.protobuf.ExtensionRangeOptions.VerificationState",
            defaultValue: "UNVERIFIED",
            options: { retention: 2 },
          },
        ],
        nestedType: [
          {
            name: "Declaration",
            field: [
              { name: "number", number: 1, type: 5, label: 1 },
              { name: "full_name", number: 2, type: 9, label: 1 },
              { name: "type", number: 3, type: 9, label: 1 },
              { name: "reserved", number: 5, type: 8, label: 1 },
              { name: "repeated", number: 6, type: 8, label: 1 },
            ],
          },
        ],
        enumType: [
          {
            name: "VerificationState",
            value: [
              { name: "DECLARATION", number: 0 },
              { name: "UNVERIFIED", number: 1 },
            ],
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "FieldDescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          { name: "number", number: 3, type: 5, label: 1 },
          {
            name: "label",
            number: 4,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FieldDescriptorProto.Label",
          },
          {
            name: "type",
            number: 5,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FieldDescriptorProto.Type",
          },
          { name: "type_name", number: 6, type: 9, label: 1 },
          { name: "extendee", number: 2, type: 9, label: 1 },
          { name: "default_value", number: 7, type: 9, label: 1 },
          { name: "oneof_index", number: 9, type: 5, label: 1 },
          { name: "json_name", number: 10, type: 9, label: 1 },
          {
            name: "options",
            number: 8,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FieldOptions",
          },
          { name: "proto3_optional", number: 17, type: 8, label: 1 },
        ],
        enumType: [
          {
            name: "Type",
            value: [
              { name: "TYPE_DOUBLE", number: 1 },
              { name: "TYPE_FLOAT", number: 2 },
              { name: "TYPE_INT64", number: 3 },
              { name: "TYPE_UINT64", number: 4 },
              { name: "TYPE_INT32", number: 5 },
              { name: "TYPE_FIXED64", number: 6 },
              { name: "TYPE_FIXED32", number: 7 },
              { name: "TYPE_BOOL", number: 8 },
              { name: "TYPE_STRING", number: 9 },
              { name: "TYPE_GROUP", number: 10 },
              { name: "TYPE_MESSAGE", number: 11 },
              { name: "TYPE_BYTES", number: 12 },
              { name: "TYPE_UINT32", number: 13 },
              { name: "TYPE_ENUM", number: 14 },
              { name: "TYPE_SFIXED32", number: 15 },
              { name: "TYPE_SFIXED64", number: 16 },
              { name: "TYPE_SINT32", number: 17 },
              { name: "TYPE_SINT64", number: 18 },
            ],
          },
          {
            name: "Label",
            value: [
              { name: "LABEL_OPTIONAL", number: 1 },
              { name: "LABEL_REPEATED", number: 3 },
              { name: "LABEL_REQUIRED", number: 2 },
            ],
          },
        ],
      },
      {
        name: "OneofDescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          {
            name: "options",
            number: 2,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.OneofOptions",
          },
        ],
      },
      {
        name: "EnumDescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          {
            name: "value",
            number: 2,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.EnumValueDescriptorProto",
          },
          {
            name: "options",
            number: 3,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.EnumOptions",
          },
          {
            name: "reserved_range",
            number: 4,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.EnumDescriptorProto.EnumReservedRange",
          },
          { name: "reserved_name", number: 5, type: 9, label: 3 },
          {
            name: "visibility",
            number: 6,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.SymbolVisibility",
          },
        ],
        nestedType: [
          {
            name: "EnumReservedRange",
            field: [
              { name: "start", number: 1, type: 5, label: 1 },
              { name: "end", number: 2, type: 5, label: 1 },
            ],
          },
        ],
      },
      {
        name: "EnumValueDescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          { name: "number", number: 2, type: 5, label: 1 },
          {
            name: "options",
            number: 3,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.EnumValueOptions",
          },
        ],
      },
      {
        name: "ServiceDescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          {
            name: "method",
            number: 2,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.MethodDescriptorProto",
          },
          {
            name: "options",
            number: 3,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.ServiceOptions",
          },
        ],
      },
      {
        name: "MethodDescriptorProto",
        field: [
          { name: "name", number: 1, type: 9, label: 1 },
          { name: "input_type", number: 2, type: 9, label: 1 },
          { name: "output_type", number: 3, type: 9, label: 1 },
          {
            name: "options",
            number: 4,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.MethodOptions",
          },
          {
            name: "client_streaming",
            number: 5,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "server_streaming",
            number: 6,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
        ],
      },
      {
        name: "FileOptions",
        field: [
          { name: "java_package", number: 1, type: 9, label: 1 },
          { name: "java_outer_classname", number: 8, type: 9, label: 1 },
          {
            name: "java_multiple_files",
            number: 10,
            type: 8,
            label: 1,
            defaultValue: "false",
            options: {},
          },
          {
            name: "java_generate_equals_and_hash",
            number: 20,
            type: 8,
            label: 1,
            options: { deprecated: !0 },
          },
          {
            name: "java_string_check_utf8",
            number: 27,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "optimize_for",
            number: 9,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FileOptions.OptimizeMode",
            defaultValue: "SPEED",
          },
          { name: "go_package", number: 11, type: 9, label: 1 },
          {
            name: "cc_generic_services",
            number: 16,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "java_generic_services",
            number: 17,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "py_generic_services",
            number: 18,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "deprecated",
            number: 23,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "cc_enable_arenas",
            number: 31,
            type: 8,
            label: 1,
            defaultValue: "true",
          },
          { name: "objc_class_prefix", number: 36, type: 9, label: 1 },
          { name: "csharp_namespace", number: 37, type: 9, label: 1 },
          { name: "swift_prefix", number: 39, type: 9, label: 1 },
          { name: "php_class_prefix", number: 40, type: 9, label: 1 },
          { name: "php_namespace", number: 41, type: 9, label: 1 },
          { name: "php_metadata_namespace", number: 44, type: 9, label: 1 },
          { name: "ruby_package", number: 45, type: 9, label: 1 },
          {
            name: "features",
            number: 50,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        enumType: [
          {
            name: "OptimizeMode",
            value: [
              { name: "SPEED", number: 1 },
              { name: "CODE_SIZE", number: 2 },
              { name: "LITE_RUNTIME", number: 3 },
            ],
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "MessageOptions",
        field: [
          {
            name: "message_set_wire_format",
            number: 1,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "no_standard_descriptor_accessor",
            number: 2,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "deprecated",
            number: 3,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          { name: "map_entry", number: 7, type: 8, label: 1 },
          {
            name: "deprecated_legacy_json_field_conflicts",
            number: 11,
            type: 8,
            label: 1,
            options: { deprecated: !0 },
          },
          {
            name: "features",
            number: 12,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "FieldOptions",
        field: [
          {
            name: "ctype",
            number: 1,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FieldOptions.CType",
            defaultValue: "STRING",
          },
          { name: "packed", number: 2, type: 8, label: 1 },
          {
            name: "jstype",
            number: 6,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FieldOptions.JSType",
            defaultValue: "JS_NORMAL",
          },
          { name: "lazy", number: 5, type: 8, label: 1, defaultValue: "false" },
          {
            name: "unverified_lazy",
            number: 15,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "deprecated",
            number: 3,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "weak",
            number: 10,
            type: 8,
            label: 1,
            defaultValue: "false",
            options: { deprecated: !0 },
          },
          {
            name: "debug_redact",
            number: 16,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "retention",
            number: 17,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FieldOptions.OptionRetention",
          },
          {
            name: "targets",
            number: 19,
            type: 14,
            label: 3,
            typeName: ".google.protobuf.FieldOptions.OptionTargetType",
          },
          {
            name: "edition_defaults",
            number: 20,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.FieldOptions.EditionDefault",
          },
          {
            name: "features",
            number: 21,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "feature_support",
            number: 22,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FieldOptions.FeatureSupport",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        nestedType: [
          {
            name: "EditionDefault",
            field: [
              {
                name: "edition",
                number: 3,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition",
              },
              { name: "value", number: 2, type: 9, label: 1 },
            ],
          },
          {
            name: "FeatureSupport",
            field: [
              {
                name: "edition_introduced",
                number: 1,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition",
              },
              {
                name: "edition_deprecated",
                number: 2,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition",
              },
              { name: "deprecation_warning", number: 3, type: 9, label: 1 },
              {
                name: "edition_removed",
                number: 4,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition",
              },
              { name: "removal_error", number: 5, type: 9, label: 1 },
            ],
          },
        ],
        enumType: [
          {
            name: "CType",
            value: [
              { name: "STRING", number: 0 },
              { name: "CORD", number: 1 },
              { name: "STRING_PIECE", number: 2 },
            ],
          },
          {
            name: "JSType",
            value: [
              { name: "JS_NORMAL", number: 0 },
              { name: "JS_STRING", number: 1 },
              { name: "JS_NUMBER", number: 2 },
            ],
          },
          {
            name: "OptionRetention",
            value: [
              { name: "RETENTION_UNKNOWN", number: 0 },
              { name: "RETENTION_RUNTIME", number: 1 },
              { name: "RETENTION_SOURCE", number: 2 },
            ],
          },
          {
            name: "OptionTargetType",
            value: [
              { name: "TARGET_TYPE_UNKNOWN", number: 0 },
              { name: "TARGET_TYPE_FILE", number: 1 },
              { name: "TARGET_TYPE_EXTENSION_RANGE", number: 2 },
              { name: "TARGET_TYPE_MESSAGE", number: 3 },
              { name: "TARGET_TYPE_FIELD", number: 4 },
              { name: "TARGET_TYPE_ONEOF", number: 5 },
              { name: "TARGET_TYPE_ENUM", number: 6 },
              { name: "TARGET_TYPE_ENUM_ENTRY", number: 7 },
              { name: "TARGET_TYPE_SERVICE", number: 8 },
              { name: "TARGET_TYPE_METHOD", number: 9 },
            ],
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "OneofOptions",
        field: [
          {
            name: "features",
            number: 1,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "EnumOptions",
        field: [
          { name: "allow_alias", number: 2, type: 8, label: 1 },
          {
            name: "deprecated",
            number: 3,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "deprecated_legacy_json_field_conflicts",
            number: 6,
            type: 8,
            label: 1,
            options: { deprecated: !0 },
          },
          {
            name: "features",
            number: 7,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "EnumValueOptions",
        field: [
          {
            name: "deprecated",
            number: 1,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "features",
            number: 2,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "debug_redact",
            number: 3,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "feature_support",
            number: 4,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FieldOptions.FeatureSupport",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "ServiceOptions",
        field: [
          {
            name: "features",
            number: 34,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "deprecated",
            number: 33,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "MethodOptions",
        field: [
          {
            name: "deprecated",
            number: 33,
            type: 8,
            label: 1,
            defaultValue: "false",
          },
          {
            name: "idempotency_level",
            number: 34,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.MethodOptions.IdempotencyLevel",
            defaultValue: "IDEMPOTENCY_UNKNOWN",
          },
          {
            name: "features",
            number: 35,
            type: 11,
            label: 1,
            typeName: ".google.protobuf.FeatureSet",
          },
          {
            name: "uninterpreted_option",
            number: 999,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption",
          },
        ],
        enumType: [
          {
            name: "IdempotencyLevel",
            value: [
              { name: "IDEMPOTENCY_UNKNOWN", number: 0 },
              { name: "NO_SIDE_EFFECTS", number: 1 },
              { name: "IDEMPOTENT", number: 2 },
            ],
          },
        ],
        extensionRange: [{ start: 1000, end: 536870912 }],
      },
      {
        name: "UninterpretedOption",
        field: [
          {
            name: "name",
            number: 2,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.UninterpretedOption.NamePart",
          },
          { name: "identifier_value", number: 3, type: 9, label: 1 },
          { name: "positive_int_value", number: 4, type: 4, label: 1 },
          { name: "negative_int_value", number: 5, type: 3, label: 1 },
          { name: "double_value", number: 6, type: 1, label: 1 },
          { name: "string_value", number: 7, type: 12, label: 1 },
          { name: "aggregate_value", number: 8, type: 9, label: 1 },
        ],
        nestedType: [
          {
            name: "NamePart",
            field: [
              { name: "name_part", number: 1, type: 9, label: 2 },
              { name: "is_extension", number: 2, type: 8, label: 2 },
            ],
          },
        ],
      },
      {
        name: "FeatureSet",
        field: [
          {
            name: "field_presence",
            number: 1,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FeatureSet.FieldPresence",
            options: {
              retention: 1,
              targets: [4, 1],
              editionDefaults: [
                { value: "EXPLICIT", edition: 900 },
                { value: "IMPLICIT", edition: 999 },
                { value: "EXPLICIT", edition: 1000 },
              ],
            },
          },
          {
            name: "enum_type",
            number: 2,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FeatureSet.EnumType",
            options: {
              retention: 1,
              targets: [6, 1],
              editionDefaults: [
                { value: "CLOSED", edition: 900 },
                { value: "OPEN", edition: 999 },
              ],
            },
          },
          {
            name: "repeated_field_encoding",
            number: 3,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FeatureSet.RepeatedFieldEncoding",
            options: {
              retention: 1,
              targets: [4, 1],
              editionDefaults: [
                { value: "EXPANDED", edition: 900 },
                { value: "PACKED", edition: 999 },
              ],
            },
          },
          {
            name: "utf8_validation",
            number: 4,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FeatureSet.Utf8Validation",
            options: {
              retention: 1,
              targets: [4, 1],
              editionDefaults: [
                { value: "NONE", edition: 900 },
                { value: "VERIFY", edition: 999 },
              ],
            },
          },
          {
            name: "message_encoding",
            number: 5,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FeatureSet.MessageEncoding",
            options: {
              retention: 1,
              targets: [4, 1],
              editionDefaults: [{ value: "LENGTH_PREFIXED", edition: 900 }],
            },
          },
          {
            name: "json_format",
            number: 6,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FeatureSet.JsonFormat",
            options: {
              retention: 1,
              targets: [3, 6, 1],
              editionDefaults: [
                { value: "LEGACY_BEST_EFFORT", edition: 900 },
                { value: "ALLOW", edition: 999 },
              ],
            },
          },
          {
            name: "enforce_naming_style",
            number: 7,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.FeatureSet.EnforceNamingStyle",
            options: {
              retention: 2,
              targets: [1, 2, 3, 4, 5, 6, 7, 8, 9],
              editionDefaults: [
                { value: "STYLE_LEGACY", edition: 900 },
                { value: "STYLE2024", edition: 1001 },
              ],
            },
          },
          {
            name: "default_symbol_visibility",
            number: 8,
            type: 14,
            label: 1,
            typeName:
              ".google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility",
            options: {
              retention: 2,
              targets: [1],
              editionDefaults: [
                { value: "EXPORT_ALL", edition: 900 },
                { value: "EXPORT_TOP_LEVEL", edition: 1001 },
              ],
            },
          },
        ],
        nestedType: [
          {
            name: "VisibilityFeature",
            enumType: [
              {
                name: "DefaultSymbolVisibility",
                value: [
                  { name: "DEFAULT_SYMBOL_VISIBILITY_UNKNOWN", number: 0 },
                  { name: "EXPORT_ALL", number: 1 },
                  { name: "EXPORT_TOP_LEVEL", number: 2 },
                  { name: "LOCAL_ALL", number: 3 },
                  { name: "STRICT", number: 4 },
                ],
              },
            ],
          },
        ],
        enumType: [
          {
            name: "FieldPresence",
            value: [
              { name: "FIELD_PRESENCE_UNKNOWN", number: 0 },
              { name: "EXPLICIT", number: 1 },
              { name: "IMPLICIT", number: 2 },
              { name: "LEGACY_REQUIRED", number: 3 },
            ],
          },
          {
            name: "EnumType",
            value: [
              { name: "ENUM_TYPE_UNKNOWN", number: 0 },
              { name: "OPEN", number: 1 },
              { name: "CLOSED", number: 2 },
            ],
          },
          {
            name: "RepeatedFieldEncoding",
            value: [
              { name: "REPEATED_FIELD_ENCODING_UNKNOWN", number: 0 },
              { name: "PACKED", number: 1 },
              { name: "EXPANDED", number: 2 },
            ],
          },
          {
            name: "Utf8Validation",
            value: [
              { name: "UTF8_VALIDATION_UNKNOWN", number: 0 },
              { name: "VERIFY", number: 2 },
              { name: "NONE", number: 3 },
            ],
          },
          {
            name: "MessageEncoding",
            value: [
              { name: "MESSAGE_ENCODING_UNKNOWN", number: 0 },
              { name: "LENGTH_PREFIXED", number: 1 },
              { name: "DELIMITED", number: 2 },
            ],
          },
          {
            name: "JsonFormat",
            value: [
              { name: "JSON_FORMAT_UNKNOWN", number: 0 },
              { name: "ALLOW", number: 1 },
              { name: "LEGACY_BEST_EFFORT", number: 2 },
            ],
          },
          {
            name: "EnforceNamingStyle",
            value: [
              { name: "ENFORCE_NAMING_STYLE_UNKNOWN", number: 0 },
              { name: "STYLE2024", number: 1 },
              { name: "STYLE_LEGACY", number: 2 },
            ],
          },
        ],
        extensionRange: [
          { start: 1000, end: 9995 },
          { start: 9995, end: 1e4 },
          { start: 1e4, end: 10001 },
        ],
      },
      {
        name: "FeatureSetDefaults",
        field: [
          {
            name: "defaults",
            number: 1,
            type: 11,
            label: 3,
            typeName:
              ".google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault",
          },
          {
            name: "minimum_edition",
            number: 4,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.Edition",
          },
          {
            name: "maximum_edition",
            number: 5,
            type: 14,
            label: 1,
            typeName: ".google.protobuf.Edition",
          },
        ],
        nestedType: [
          {
            name: "FeatureSetEditionDefault",
            field: [
              {
                name: "edition",
                number: 3,
                type: 14,
                label: 1,
                typeName: ".google.protobuf.Edition",
              },
              {
                name: "overridable_features",
                number: 4,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet",
              },
              {
                name: "fixed_features",
                number: 5,
                type: 11,
                label: 1,
                typeName: ".google.protobuf.FeatureSet",
              },
            ],
          },
        ],
      },
      {
        name: "SourceCodeInfo",
        field: [
          {
            name: "location",
            number: 1,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.SourceCodeInfo.Location",
          },
        ],
        nestedType: [
          {
            name: "Location",
            field: [
              {
                name: "path",
                number: 1,
                type: 5,
                label: 3,
                options: { packed: !0 },
              },
              {
                name: "span",
                number: 2,
                type: 5,
                label: 3,
                options: { packed: !0 },
              },
              { name: "leading_comments", number: 3, type: 9, label: 1 },
              { name: "trailing_comments", number: 4, type: 9, label: 1 },
              {
                name: "leading_detached_comments",
                number: 6,
                type: 9,
                label: 3,
              },
            ],
          },
        ],
        extensionRange: [{ start: 536000000, end: 536000001 }],
      },
      {
        name: "GeneratedCodeInfo",
        field: [
          {
            name: "annotation",
            number: 1,
            type: 11,
            label: 3,
            typeName: ".google.protobuf.GeneratedCodeInfo.Annotation",
          },
        ],
        nestedType: [
          {
            name: "Annotation",
            field: [
              {
                name: "path",
                number: 1,
                type: 5,
                label: 3,
                options: { packed: !0 },
              },
              { name: "source_file", number: 2, type: 9, label: 1 },
              { name: "begin", number: 3, type: 5, label: 1 },
              { name: "end", number: 4, type: 5, label: 1 },
              {
                name: "semantic",
                number: 5,
                type: 14,
                label: 1,
                typeName:
                  ".google.protobuf.GeneratedCodeInfo.Annotation.Semantic",
              },
            ],
            enumType: [
              {
                name: "Semantic",
                value: [
                  { name: "NONE", number: 0 },
                  { name: "SET", number: 1 },
                  { name: "ALIAS", number: 2 },
                ],
              },
            ],
          },
        ],
      },
    ],
    enumType: [
      {
        name: "Edition",
        value: [
          { name: "EDITION_UNKNOWN", number: 0 },
          { name: "EDITION_LEGACY", number: 900 },
          { name: "EDITION_PROTO2", number: 998 },
          { name: "EDITION_PROTO3", number: 999 },
          { name: "EDITION_2023", number: 1000 },
          { name: "EDITION_2024", number: 1001 },
          { name: "EDITION_UNSTABLE", number: 9999 },
          { name: "EDITION_1_TEST_ONLY", number: 1 },
          { name: "EDITION_2_TEST_ONLY", number: 2 },
          { name: "EDITION_99997_TEST_ONLY", number: 99997 },
          { name: "EDITION_99998_TEST_ONLY", number: 99998 },
          { name: "EDITION_99999_TEST_ONLY", number: 99999 },
          { name: "EDITION_MAX", number: 2147483647 },
        ],
      },
      {
        name: "SymbolVisibility",
        value: [
          { name: "VISIBILITY_UNSET", number: 0 },
          { name: "VISIBILITY_LOCAL", number: 1 },
          { name: "VISIBILITY_EXPORT", number: 2 },
        ],
      },
    ],
  });
  U$t.FileDescriptorSetSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    0,
  );
  U$t.FileDescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    1,
  );
  U$t.DescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    2,
  );
  U$t.DescriptorProto_ExtensionRangeSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    2,
    0,
  );
  U$t.DescriptorProto_ReservedRangeSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    2,
    1,
  );
  U$t.ExtensionRangeOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    3,
  );
  U$t.ExtensionRangeOptions_DeclarationSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    3,
    0,
  );
  var S$t;
  (function (e) {
    ((e[(e.DECLARATION = 0)] = "DECLARATION"),
      (e[(e.UNVERIFIED = 1)] = "UNVERIFIED"));
  })(S$t || (U$t.ExtensionRangeOptions_VerificationState = S$t = {}));
  U$t.ExtensionRangeOptions_VerificationStateSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    3,
    0,
  );
  U$t.FieldDescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    4,
  );
  var k$t;
  (function (e) {
    ((e[(e.DOUBLE = 1)] = "DOUBLE"),
      (e[(e.FLOAT = 2)] = "FLOAT"),
      (e[(e.INT64 = 3)] = "INT64"),
      (e[(e.UINT64 = 4)] = "UINT64"),
      (e[(e.INT32 = 5)] = "INT32"),
      (e[(e.FIXED64 = 6)] = "FIXED64"),
      (e[(e.FIXED32 = 7)] = "FIXED32"),
      (e[(e.BOOL = 8)] = "BOOL"),
      (e[(e.STRING = 9)] = "STRING"),
      (e[(e.GROUP = 10)] = "GROUP"),
      (e[(e.MESSAGE = 11)] = "MESSAGE"),
      (e[(e.BYTES = 12)] = "BYTES"),
      (e[(e.UINT32 = 13)] = "UINT32"),
      (e[(e.ENUM = 14)] = "ENUM"),
      (e[(e.SFIXED32 = 15)] = "SFIXED32"),
      (e[(e.SFIXED64 = 16)] = "SFIXED64"),
      (e[(e.SINT32 = 17)] = "SINT32"),
      (e[(e.SINT64 = 18)] = "SINT64"));
  })(k$t || (U$t.FieldDescriptorProto_Type = k$t = {}));
  U$t.FieldDescriptorProto_TypeSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    4,
    0,
  );
  var w$t;
  (function (e) {
    ((e[(e.OPTIONAL = 1)] = "OPTIONAL"),
      (e[(e.REPEATED = 3)] = "REPEATED"),
      (e[(e.REQUIRED = 2)] = "REQUIRED"));
  })(w$t || (U$t.FieldDescriptorProto_Label = w$t = {}));
  U$t.FieldDescriptorProto_LabelSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    4,
    1,
  );
  U$t.OneofDescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    5,
  );
  U$t.EnumDescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    6,
  );
  U$t.EnumDescriptorProto_EnumReservedRangeSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    6,
    0,
  );
  U$t.EnumValueDescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    7,
  );
  U$t.ServiceDescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    8,
  );
  U$t.MethodDescriptorProtoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    9,
  );
  U$t.FileOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    10,
  );
  var E$t;
  (function (e) {
    ((e[(e.SPEED = 1)] = "SPEED"),
      (e[(e.CODE_SIZE = 2)] = "CODE_SIZE"),
      (e[(e.LITE_RUNTIME = 3)] = "LITE_RUNTIME"));
  })(E$t || (U$t.FileOptions_OptimizeMode = E$t = {}));
  U$t.FileOptions_OptimizeModeSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    10,
    0,
  );
  U$t.MessageOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    11,
  );
  U$t.FieldOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    12,
  );
  U$t.FieldOptions_EditionDefaultSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    12,
    0,
  );
  U$t.FieldOptions_FeatureSupportSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    12,
    1,
  );
  var T$t;
  (function (e) {
    ((e[(e.STRING = 0)] = "STRING"),
      (e[(e.CORD = 1)] = "CORD"),
      (e[(e.STRING_PIECE = 2)] = "STRING_PIECE"));
  })(T$t || (U$t.FieldOptions_CType = T$t = {}));
  U$t.FieldOptions_CTypeSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    12,
    0,
  );
  var v$t;
  (function (e) {
    ((e[(e.JS_NORMAL = 0)] = "JS_NORMAL"),
      (e[(e.JS_STRING = 1)] = "JS_STRING"),
      (e[(e.JS_NUMBER = 2)] = "JS_NUMBER"));
  })(v$t || (U$t.FieldOptions_JSType = v$t = {}));
  U$t.FieldOptions_JSTypeSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    12,
    1,
  );
  var C$t;
  (function (e) {
    ((e[(e.RETENTION_UNKNOWN = 0)] = "RETENTION_UNKNOWN"),
      (e[(e.RETENTION_RUNTIME = 1)] = "RETENTION_RUNTIME"),
      (e[(e.RETENTION_SOURCE = 2)] = "RETENTION_SOURCE"));
  })(C$t || (U$t.FieldOptions_OptionRetention = C$t = {}));
  U$t.FieldOptions_OptionRetentionSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    12,
    2,
  );
  var x$t;
  (function (e) {
    ((e[(e.TARGET_TYPE_UNKNOWN = 0)] = "TARGET_TYPE_UNKNOWN"),
      (e[(e.TARGET_TYPE_FILE = 1)] = "TARGET_TYPE_FILE"),
      (e[(e.TARGET_TYPE_EXTENSION_RANGE = 2)] = "TARGET_TYPE_EXTENSION_RANGE"),
      (e[(e.TARGET_TYPE_MESSAGE = 3)] = "TARGET_TYPE_MESSAGE"),
      (e[(e.TARGET_TYPE_FIELD = 4)] = "TARGET_TYPE_FIELD"),
      (e[(e.TARGET_TYPE_ONEOF = 5)] = "TARGET_TYPE_ONEOF"),
      (e[(e.TARGET_TYPE_ENUM = 6)] = "TARGET_TYPE_ENUM"),
      (e[(e.TARGET_TYPE_ENUM_ENTRY = 7)] = "TARGET_TYPE_ENUM_ENTRY"),
      (e[(e.TARGET_TYPE_SERVICE = 8)] = "TARGET_TYPE_SERVICE"),
      (e[(e.TARGET_TYPE_METHOD = 9)] = "TARGET_TYPE_METHOD"));
  })(x$t || (U$t.FieldOptions_OptionTargetType = x$t = {}));
  U$t.FieldOptions_OptionTargetTypeSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    12,
    3,
  );
  U$t.OneofOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    13,
  );
  U$t.EnumOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    14,
  );
  U$t.EnumValueOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    15,
  );
  U$t.ServiceOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    16,
  );
  U$t.MethodOptionsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    17,
  );
  var A$t;
  (function (e) {
    ((e[(e.IDEMPOTENCY_UNKNOWN = 0)] = "IDEMPOTENCY_UNKNOWN"),
      (e[(e.NO_SIDE_EFFECTS = 1)] = "NO_SIDE_EFFECTS"),
      (e[(e.IDEMPOTENT = 2)] = "IDEMPOTENT"));
  })(A$t || (U$t.MethodOptions_IdempotencyLevel = A$t = {}));
  U$t.MethodOptions_IdempotencyLevelSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    17,
    0,
  );
  U$t.UninterpretedOptionSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    18,
  );
  U$t.UninterpretedOption_NamePartSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    18,
    0,
  );
  U$t.FeatureSetSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
  );
  U$t.FeatureSet_VisibilityFeatureSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    0,
  );
  var R$t;
  (function (e) {
    ((e[(e.DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0)] =
      "DEFAULT_SYMBOL_VISIBILITY_UNKNOWN"),
      (e[(e.EXPORT_ALL = 1)] = "EXPORT_ALL"),
      (e[(e.EXPORT_TOP_LEVEL = 2)] = "EXPORT_TOP_LEVEL"),
      (e[(e.LOCAL_ALL = 3)] = "LOCAL_ALL"),
      (e[(e.STRICT = 4)] = "STRICT"));
  })(
    R$t ||
      (U$t.FeatureSet_VisibilityFeature_DefaultSymbolVisibility = R$t = {}),
  );
  U$t.FeatureSet_VisibilityFeature_DefaultSymbolVisibilitySchema = (0,
  hS.enumDesc)(U$t.file_google_protobuf_descriptor, 19, 0, 0);
  var P$t;
  (function (e) {
    ((e[(e.FIELD_PRESENCE_UNKNOWN = 0)] = "FIELD_PRESENCE_UNKNOWN"),
      (e[(e.EXPLICIT = 1)] = "EXPLICIT"),
      (e[(e.IMPLICIT = 2)] = "IMPLICIT"),
      (e[(e.LEGACY_REQUIRED = 3)] = "LEGACY_REQUIRED"));
  })(P$t || (U$t.FeatureSet_FieldPresence = P$t = {}));
  U$t.FeatureSet_FieldPresenceSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    0,
  );
  var I$t;
  (function (e) {
    ((e[(e.ENUM_TYPE_UNKNOWN = 0)] = "ENUM_TYPE_UNKNOWN"),
      (e[(e.OPEN = 1)] = "OPEN"),
      (e[(e.CLOSED = 2)] = "CLOSED"));
  })(I$t || (U$t.FeatureSet_EnumType = I$t = {}));
  U$t.FeatureSet_EnumTypeSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    1,
  );
  var M$t;
  (function (e) {
    ((e[(e.REPEATED_FIELD_ENCODING_UNKNOWN = 0)] =
      "REPEATED_FIELD_ENCODING_UNKNOWN"),
      (e[(e.PACKED = 1)] = "PACKED"),
      (e[(e.EXPANDED = 2)] = "EXPANDED"));
  })(M$t || (U$t.FeatureSet_RepeatedFieldEncoding = M$t = {}));
  U$t.FeatureSet_RepeatedFieldEncodingSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    2,
  );
  var O$t;
  (function (e) {
    ((e[(e.UTF8_VALIDATION_UNKNOWN = 0)] = "UTF8_VALIDATION_UNKNOWN"),
      (e[(e.VERIFY = 2)] = "VERIFY"),
      (e[(e.NONE = 3)] = "NONE"));
  })(O$t || (U$t.FeatureSet_Utf8Validation = O$t = {}));
  U$t.FeatureSet_Utf8ValidationSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    3,
  );
  var D$t;
  (function (e) {
    ((e[(e.MESSAGE_ENCODING_UNKNOWN = 0)] = "MESSAGE_ENCODING_UNKNOWN"),
      (e[(e.LENGTH_PREFIXED = 1)] = "LENGTH_PREFIXED"),
      (e[(e.DELIMITED = 2)] = "DELIMITED"));
  })(D$t || (U$t.FeatureSet_MessageEncoding = D$t = {}));
  U$t.FeatureSet_MessageEncodingSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    4,
  );
  var N$t;
  (function (e) {
    ((e[(e.JSON_FORMAT_UNKNOWN = 0)] = "JSON_FORMAT_UNKNOWN"),
      (e[(e.ALLOW = 1)] = "ALLOW"),
      (e[(e.LEGACY_BEST_EFFORT = 2)] = "LEGACY_BEST_EFFORT"));
  })(N$t || (U$t.FeatureSet_JsonFormat = N$t = {}));
  U$t.FeatureSet_JsonFormatSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    5,
  );
  var L$t;
  (function (e) {
    ((e[(e.ENFORCE_NAMING_STYLE_UNKNOWN = 0)] = "ENFORCE_NAMING_STYLE_UNKNOWN"),
      (e[(e.STYLE2024 = 1)] = "STYLE2024"),
      (e[(e.STYLE_LEGACY = 2)] = "STYLE_LEGACY"));
  })(L$t || (U$t.FeatureSet_EnforceNamingStyle = L$t = {}));
  U$t.FeatureSet_EnforceNamingStyleSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    19,
    6,
  );
  U$t.FeatureSetDefaultsSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    20,
  );
  U$t.FeatureSetDefaults_FeatureSetEditionDefaultSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    20,
    0,
  );
  U$t.SourceCodeInfoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    21,
  );
  U$t.SourceCodeInfo_LocationSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    21,
    0,
  );
  U$t.GeneratedCodeInfoSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    22,
  );
  U$t.GeneratedCodeInfo_AnnotationSchema = (0, lg.messageDesc)(
    U$t.file_google_protobuf_descriptor,
    22,
    0,
  );
  var F$t;
  (function (e) {
    ((e[(e.NONE = 0)] = "NONE"),
      (e[(e.SET = 1)] = "SET"),
      (e[(e.ALIAS = 2)] = "ALIAS"));
  })(F$t || (U$t.GeneratedCodeInfo_Annotation_Semantic = F$t = {}));
  U$t.GeneratedCodeInfo_Annotation_SemanticSchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    22,
    0,
    0,
  );
  var $$t;
  (function (e) {
    ((e[(e.EDITION_UNKNOWN = 0)] = "EDITION_UNKNOWN"),
      (e[(e.EDITION_LEGACY = 900)] = "EDITION_LEGACY"),
      (e[(e.EDITION_PROTO2 = 998)] = "EDITION_PROTO2"),
      (e[(e.EDITION_PROTO3 = 999)] = "EDITION_PROTO3"),
      (e[(e.EDITION_2023 = 1000)] = "EDITION_2023"),
      (e[(e.EDITION_2024 = 1001)] = "EDITION_2024"),
      (e[(e.EDITION_UNSTABLE = 9999)] = "EDITION_UNSTABLE"),
      (e[(e.EDITION_1_TEST_ONLY = 1)] = "EDITION_1_TEST_ONLY"),
      (e[(e.EDITION_2_TEST_ONLY = 2)] = "EDITION_2_TEST_ONLY"),
      (e[(e.EDITION_99997_TEST_ONLY = 99997)] = "EDITION_99997_TEST_ONLY"),
      (e[(e.EDITION_99998_TEST_ONLY = 99998)] = "EDITION_99998_TEST_ONLY"),
      (e[(e.EDITION_99999_TEST_ONLY = 99999)] = "EDITION_99999_TEST_ONLY"),
      (e[(e.EDITION_MAX = 2147483647)] = "EDITION_MAX"));
  })($$t || (U$t.Edition = $$t = {}));
  U$t.EditionSchema = (0, hS.enumDesc)(U$t.file_google_protobuf_descriptor, 0);
  var B$t;
  (function (e) {
    ((e[(e.VISIBILITY_UNSET = 0)] = "VISIBILITY_UNSET"),
      (e[(e.VISIBILITY_LOCAL = 1)] = "VISIBILITY_LOCAL"),
      (e[(e.VISIBILITY_EXPORT = 2)] = "VISIBILITY_EXPORT"));
  })(B$t || (U$t.SymbolVisibility = B$t = {}));
  U$t.SymbolVisibilitySchema = (0, hS.enumDesc)(
    U$t.file_google_protobuf_descriptor,
    1,
  );
});
var O5 = commonJS(function (V$t) {
  Object.defineProperty(V$t, "__esModule", { value: !0 });
  V$t.fromBinary = tNr;
  V$t.mergeFromBinary = nNr;
  V$t.readField = q$t;
  var KS = dE(),
    W$t = DB(),
    pbe = mM(),
    Ete = o2(),
    eNr = J_e(),
    G$t = { readUnknownFields: !0 };
  function z$t(e) {
    return e ? Object.assign(Object.assign({}, G$t), e) : G$t;
  }
  function tNr(e, t, r) {
    let o = (0, pbe.reflect)(e, void 0, !1);
    return (
      Nqe(o, new Ete.BinaryReader(t), z$t(r), !1, t.byteLength),
      o.message
    );
  }
  function nNr(e, t, r, o) {
    return (
      Nqe(
        (0, pbe.reflect)(e, t, !1),
        new Ete.BinaryReader(r),
        z$t(o),
        !1,
        r.byteLength,
      ),
      t
    );
  }
  function Nqe(e, t, r, o, d) {
    var p;
    let _ = o ? t.len : t.pos + d,
      E,
      C,
      I = (p = e.getUnknown()) !== null && p !== void 0 ? p : [];
    while (t.pos < _) {
      if ((([E, C] = t.tag()), o && C == Ete.WireType.EndGroup)) break;
      let D = e.findNumber(E);
      if (!D) {
        let N = t.skip(C, E);
        if (r.readUnknownFields) I.push({ no: E, wireType: C, data: N });
        continue;
      }
      q$t(e, t, D, C, r);
    }
    if (o) {
      if (C != Ete.WireType.EndGroup || E !== d)
        throw Error("invalid end group tag");
    }
    if (I.length > 0) e.setUnknown(I);
  }
  function q$t(e, t, r, o, d) {
    var p;
    switch (r.fieldKind) {
      case "scalar":
        e.set(r, M5(t, r.scalar, r.utf8Validation));
        break;
      case "enum":
        let _ = M5(t, KS.ScalarType.INT32);
        if (r.enum.open) e.set(r, _);
        else if (r.enum.values.some((C) => C.number === _)) e.set(r, _);
        else if (d.readUnknownFields) {
          let C = [];
          (0, eNr.varint32write)(_, C);
          let I = (p = e.getUnknown()) !== null && p !== void 0 ? p : [];
          (I.push({ no: r.number, wireType: o, data: new Uint8Array(C) }),
            e.setUnknown(I));
        }
        break;
      case "message":
        e.set(r, Lqe(t, d, r, e.get(r)));
        break;
      case "list":
        oNr(t, o, e.get(r), d);
        break;
      case "map":
        rNr(t, e.get(r), d);
        break;
    }
  }
  function rNr(e, t, r) {
    let o = t.field(),
      d,
      p,
      _ = e.uint32(),
      E = e.pos + _;
    while (e.pos < E) {
      let [C] = e.tag();
      switch (C) {
        case 1:
          d = M5(e, o.mapKey, o.utf8Validation);
          break;
        case 2:
          switch (o.mapKind) {
            case "scalar":
              p = M5(e, o.scalar, o.utf8Validation);
              break;
            case "enum":
              p = e.int32();
              break;
            case "message":
              p = Lqe(e, r, o);
              break;
          }
          break;
      }
    }
    if (d === void 0) d = (0, W$t.scalarZeroValue)(o.mapKey, !1);
    if (p === void 0)
      switch (o.mapKind) {
        case "scalar":
          p = (0, W$t.scalarZeroValue)(o.scalar, !1);
          break;
        case "enum":
          p = o.enum.values[0].number;
          break;
        case "message":
          p = (0, pbe.reflect)(o.message, void 0, !1);
          break;
      }
    t.set(d, p);
  }
  function oNr(e, t, r, o) {
    var d;
    let p = r.field();
    if (p.listKind === "message") {
      r.add(Lqe(e, o, p));
      return;
    }
    let _ = (d = p.scalar) !== null && d !== void 0 ? d : KS.ScalarType.INT32;
    if (!(
      t == Ete.WireType.LengthDelimited &&
      _ != KS.ScalarType.STRING &&
      _ != KS.ScalarType.BYTES
    )) {
      r.add(M5(e, _, p.utf8Validation));
      return;
    }
    let C = e.uint32() + e.pos;
    while (e.pos < C) r.add(M5(e, _, p.utf8Validation));
  }
  function Lqe(e, t, r, o) {
    let d = r.delimitedEncoding,
      p =
        o !== null && o !== void 0
          ? o
          : (0, pbe.reflect)(r.message, void 0, !1);
    return (Nqe(p, e, t, d, d ? r.number : e.uint32()), p);
  }
  function M5(e, t, r = !1) {
    switch (t) {
      case KS.ScalarType.STRING:
        return e.string(r);
      case KS.ScalarType.BOOL:
        return e.bool();
      case KS.ScalarType.DOUBLE:
        return e.double();
      case KS.ScalarType.FLOAT:
        return e.float();
      case KS.ScalarType.INT32:
        return e.int32();
      case KS.ScalarType.INT64:
        return e.int64();
      case KS.ScalarType.UINT64:
        return e.uint64();
      case KS.ScalarType.FIXED64:
        return e.fixed64();
      case KS.ScalarType.BYTES:
        return e.bytes();
      case KS.ScalarType.FIXED32:
        return e.fixed32();
      case KS.ScalarType.SFIXED32:
        return e.sfixed32();
      case KS.ScalarType.SFIXED64:
        return e.sfixed64();
      case KS.ScalarType.SINT64:
        return e.sint64();
      case KS.ScalarType.UINT32:
        return e.uint32();
      case KS.ScalarType.SINT32:
        return e.sint32();
    }
  }
});
var pE = commonJS(function (nHt) {
  Object.defineProperty(nHt, "__esModule", { value: !0 });
  nHt.fileDesc = pNr;
  var lNr = bte(),
    cNr = BB(),
    uNr = fbe(),
    dNr = Tqe(),
    fNr = O5();
  function pNr(e, t) {
    var r;
    let o = (0, fNr.fromBinary)(
      cNr.FileDescriptorProtoSchema,
      (0, lNr.base64Decode)(e),
    );
    return (
      o.messageType.forEach(dNr.restoreJsonNames),
      (o.dependency =
        (r =
          t === null || t === void 0 ? void 0 : t.map((p) => p.proto.name)) !==
          null && r !== void 0
          ? r
          : []),
      (0, uNr.createFileRegistry)(o, (p) =>
        t === null || t === void 0 ? void 0 : t.find((_) => _.proto.name === p),
      ).getFile(o.name)
    );
  }
});
var Fqe = commonJS(function (oHt) {
  Object.defineProperty(oHt, "__esModule", { value: !0 });
  oHt.TimestampSchema = oHt.file_google_protobuf_timestamp = void 0;
  var gNr = pE(),
    hNr = Tw();
  oHt.file_google_protobuf_timestamp = (0, gNr.fileDesc)(
    "Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM",
  );
  oHt.TimestampSchema = (0, hNr.messageDesc)(
    oHt.file_google_protobuf_timestamp,
    0,
  );
});
var bHt = commonJS(function (yHt) {
  Object.defineProperty(yHt, "__esModule", { value: !0 });
  yHt.timestampNow = SNr;
  yHt.timestampFromDate = cHt;
  yHt.timestampDate = kNr;
  yHt.timestampFromMs = uHt;
  yHt.timestampMs = gHt;
  var yNr = Fqe(),
    _Nr = FB(),
    bNr = fM();
  function SNr() {
    return cHt(new Date());
  }
  function cHt(e) {
    return uHt(e.getTime());
  }
  function kNr(e) {
    return new Date(gHt(e));
  }
  function uHt(e) {
    let t = Math.floor(e / 1000);
    return (0, _Nr.create)(yNr.TimestampSchema, {
      seconds: bNr.protoInt64.parse(t),
      nanos: (e - t * 1000) * 1e6,
    });
  }
  function gHt(e) {
    return Number(e.seconds) * 1000 + Math.round(e.nanos / 1e6);
  }
});
var $qe = commonJS(function (kHt) {
  Object.defineProperty(kHt, "__esModule", { value: !0 });
  kHt.DurationSchema = kHt.file_google_protobuf_duration = void 0;
  var xNr = pE(),
    ANr = Tw();
  kHt.file_google_protobuf_duration = (0, xNr.fileDesc)(
    "Ch5nb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIqCghEdXJhdGlvbhIPCgdzZWNvbmRzGAEgASgDEg0KBW5hbm9zGAIgASgFQoMBChNjb20uZ29vZ2xlLnByb3RvYnVmQg1EdXJhdGlvblByb3RvUAFaMWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2R1cmF0aW9ucGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw",
  );
  kHt.DurationSchema = (0, ANr.messageDesc)(
    kHt.file_google_protobuf_duration,
    0,
  );
});
var AHt = commonJS(function (xHt) {
  Object.defineProperty(xHt, "__esModule", { value: !0 });
  xHt.durationFromMs = MNr;
  xHt.durationMs = ONr;
  var RNr = $qe(),
    PNr = FB(),
    INr = fM();
  function MNr(e) {
    let t = e < 0 ? -1 : 1,
      r = Math.abs(e),
      o = Math.floor(r / 1000),
      d = (r - o * 1000) * 1e6;
    return (0, PNr.create)(RNr.DurationSchema, {
      seconds: INr.protoInt64.parse(o * t),
      nanos: d === 0 ? 0 : d * t,
    });
  }
  function ONr(e) {
    return Number(e.seconds) * 1000 + Math.round(e.nanos / 1e6);
  }
});
var mbe = commonJS(function (DHt) {
  Object.defineProperty(DHt, "__esModule", { value: !0 });
  DHt.AnySchema = DHt.file_google_protobuf_any = void 0;
  var LNr = pE(),
    FNr = Tw();
  DHt.file_google_protobuf_any = (0, LNr.fileDesc)(
    "Chlnb29nbGUvcHJvdG9idWYvYW55LnByb3RvEg9nb29nbGUucHJvdG9idWYiJgoDQW55EhAKCHR5cGVfdXJsGAEgASgJEg0KBXZhbHVlGAIgASgMQnYKE2NvbS5nb29nbGUucHJvdG9idWZCCEFueVByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2FueXBiogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM",
  );
  DHt.AnySchema = (0, FNr.messageDesc)(DHt.file_google_protobuf_any, 0);
});
var D5 = commonJS(function (WHt) {
  Object.defineProperty(WHt, "__esModule", { value: !0 });
  WHt.toBinary = HNr;
  WHt.writeField = $Ht;
  var $Nr = mM(),
    wP = o2(),
    e_ = dE(),
    BNr = 3,
    FHt = { writeUnknownFields: !0 };
  function UNr(e) {
    return e ? Object.assign(Object.assign({}, FHt), e) : FHt;
  }
  function HNr(e, t, r) {
    return gbe(new wP.BinaryWriter(), UNr(r), (0, $Nr.reflect)(e, t)).finish();
  }
  function gbe(e, t, r) {
    var o;
    for (let d of r.sortedFields) {
      if (!r.isSet(d)) {
        if (d.presence == BNr)
          throw Error(`cannot encode ${d} to binary: required field not set`);
        continue;
      }
      $Ht(e, t, r, d);
    }
    if (t.writeUnknownFields)
      for (let { no: d, wireType: p, data: _ } of (o = r.getUnknown()) !==
        null && o !== void 0
        ? o
        : [])
        e.tag(d, p).raw(_);
    return e;
  }
  function $Ht(e, t, r, o) {
    var d;
    switch (o.fieldKind) {
      case "scalar":
      case "enum":
        hbe(
          e,
          r.desc.typeName,
          o.name,
          (d = o.scalar) !== null && d !== void 0 ? d : e_.ScalarType.INT32,
          o.number,
          r.get(o),
        );
        break;
      case "list":
        jNr(e, t, o, r.get(o));
        break;
      case "message":
        BHt(e, t, o, r.get(o));
        break;
      case "map":
        for (let [p, _] of r.get(o)) WNr(e, t, o, p, _);
        break;
    }
  }
  function hbe(e, t, r, o, d, p) {
    HHt(e.tag(d, GNr(o)), t, r, o, p);
  }
  function BHt(e, t, r, o) {
    if (r.delimitedEncoding)
      gbe(e.tag(r.number, wP.WireType.StartGroup), t, o).tag(
        r.number,
        wP.WireType.EndGroup,
      );
    else gbe(e.tag(r.number, wP.WireType.LengthDelimited).fork(), t, o).join();
  }
  function jNr(e, t, r, o) {
    var d;
    if (r.listKind == "message") {
      for (let _ of o) BHt(e, t, r, _);
      return;
    }
    let p = (d = r.scalar) !== null && d !== void 0 ? d : e_.ScalarType.INT32;
    if (r.packed) {
      if (!o.size) return;
      e.tag(r.number, wP.WireType.LengthDelimited).fork();
      for (let _ of o) HHt(e, r.parent.typeName, r.name, p, _);
      e.join();
      return;
    }
    for (let _ of o) hbe(e, r.parent.typeName, r.name, p, r.number, _);
  }
  function WNr(e, t, r, o, d) {
    var p;
    switch (
      (e.tag(r.number, wP.WireType.LengthDelimited).fork(),
      hbe(e, r.parent.typeName, r.name, r.mapKey, 1, o),
      r.mapKind)
    ) {
      case "scalar":
      case "enum":
        hbe(
          e,
          r.parent.typeName,
          r.name,
          (p = r.scalar) !== null && p !== void 0 ? p : e_.ScalarType.INT32,
          2,
          d,
        );
        break;
      case "message":
        gbe(e.tag(2, wP.WireType.LengthDelimited).fork(), t, d).join();
        break;
    }
    e.join();
  }
  function HHt(e, t, r, o, d) {
    try {
      switch (o) {
        case e_.ScalarType.STRING:
          e.string(d);
          break;
        case e_.ScalarType.BOOL:
          e.bool(d);
          break;
        case e_.ScalarType.DOUBLE:
          e.double(d);
          break;
        case e_.ScalarType.FLOAT:
          e.float(d);
          break;
        case e_.ScalarType.INT32:
          e.int32(d);
          break;
        case e_.ScalarType.INT64:
          e.int64(d);
          break;
        case e_.ScalarType.UINT64:
          e.uint64(d);
          break;
        case e_.ScalarType.FIXED64:
          e.fixed64(d);
          break;
        case e_.ScalarType.BYTES:
          e.bytes(d);
          break;
        case e_.ScalarType.FIXED32:
          e.fixed32(d);
          break;
        case e_.ScalarType.SFIXED32:
          e.sfixed32(d);
          break;
        case e_.ScalarType.SFIXED64:
          e.sfixed64(d);
          break;
        case e_.ScalarType.SINT64:
          e.sint64(d);
          break;
        case e_.ScalarType.UINT32:
          e.uint32(d);
          break;
        case e_.ScalarType.SINT32:
          e.sint32(d);
          break;
      }
    } catch (p) {
      if (p instanceof Error)
        throw Error(`cannot encode field ${t}.${r} to binary: ${p.message}`);
      throw p;
    }
  }
  function GNr(e) {
    switch (e) {
      case e_.ScalarType.BYTES:
      case e_.ScalarType.STRING:
        return wP.WireType.LengthDelimited;
      case e_.ScalarType.DOUBLE:
      case e_.ScalarType.FIXED64:
      case e_.ScalarType.SFIXED64:
        return wP.WireType.Bit64;
      case e_.ScalarType.FIXED32:
      case e_.ScalarType.SFIXED32:
      case e_.ScalarType.FLOAT:
        return wP.WireType.Bit32;
      default:
        return wP.WireType.Varint;
    }
  }
});
var VHt = commonJS(function (qHt) {
  Object.defineProperty(qHt, "__esModule", { value: !0 });
  qHt.anyPack = XNr;
  qHt.anyIs = Bqe;
  qHt.anyUnpack = QNr;
  qHt.anyUnpackTo = JNr;
  var VNr = mbe(),
    KNr = FB(),
    YNr = D5(),
    GHt = O5();
  function XNr(e, t, r) {
    let o = !1;
    if (!r) ((r = (0, KNr.create)(VNr.AnySchema)), (o = !0));
    return (
      (r.value = (0, YNr.toBinary)(e, t)),
      (r.typeUrl = ZNr(t.$typeName)),
      o ? r : void 0
    );
  }
  function Bqe(e, t) {
    if (e.typeUrl === "") return !1;
    let r = typeof t == "string" ? t : t.typeName,
      o = zHt(e.typeUrl);
    return r === o;
  }
  function QNr(e, t) {
    if (e.typeUrl === "") return;
    let r = t.kind == "message" ? t : t.getMessage(zHt(e.typeUrl));
    if (!r || !Bqe(e, r)) return;
    return (0, GHt.fromBinary)(r, e.value);
  }
  function JNr(e, t, r) {
    if (!Bqe(e, t)) return;
    return (0, GHt.mergeFromBinary)(t, r, e.value);
  }
  function ZNr(e) {
    return `type.googleapis.com/${e}`;
  }
  function zHt(e) {
    let t = e.lastIndexOf("/"),
      r = t >= 0 ? e.substring(t + 1) : e;
    if (!r.length) throw Error(`invalid type url: ${e}`);
    return r;
  }
});
var ybe = commonJS(function (KHt) {
  Object.defineProperty(KHt, "__esModule", { value: !0 });
  KHt.SourceContextSchema = KHt.file_google_protobuf_source_context = void 0;
  var oLr = pE(),
    sLr = Tw();
  KHt.file_google_protobuf_source_context = (0, oLr.fileDesc)(
    "CiRnb29nbGUvcHJvdG9idWYvc291cmNlX2NvbnRleHQucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIiCg1Tb3VyY2VDb250ZXh0EhEKCWZpbGVfbmFtZRgBIAEoCUKKAQoTY29tLmdvb2dsZS5wcm90b2J1ZkISU291cmNlQ29udGV4dFByb3RvUAFaNmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3NvdXJjZWNvbnRleHRwYqICA0dQQqoCHkdvb2dsZS5Qcm90b2J1Zi5XZWxsS25vd25UeXBlc2IGcHJvdG8z",
  );
  KHt.SourceContextSchema = (0, sLr.messageDesc)(
    KHt.file_google_protobuf_source_context,
    0,
  );
});
var Hqe = commonJS(function (e1t) {
  Object.defineProperty(e1t, "__esModule", { value: !0 });
  e1t.SyntaxSchema =
    e1t.Syntax =
    e1t.OptionSchema =
    e1t.EnumValueSchema =
    e1t.EnumSchema =
    e1t.Field_CardinalitySchema =
    e1t.Field_Cardinality =
    e1t.Field_KindSchema =
    e1t.Field_Kind =
    e1t.FieldSchema =
    e1t.TypeSchema =
    e1t.file_google_protobuf_type =
      void 0;
  var iLr = pE(),
    aLr = mbe(),
    lLr = ybe(),
    Tte = Tw(),
    Uqe = pN();
  e1t.file_google_protobuf_type = (0, iLr.fileDesc)(
    "Chpnb29nbGUvcHJvdG9idWYvdHlwZS5wcm90bxIPZ29vZ2xlLnByb3RvYnVmIugBCgRUeXBlEgwKBG5hbWUYASABKAkSJgoGZmllbGRzGAIgAygLMhYuZ29vZ2xlLnByb3RvYnVmLkZpZWxkEg4KBm9uZW9mcxgDIAMoCRIoCgdvcHRpb25zGAQgAygLMhcuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbhI2Cg5zb3VyY2VfY29udGV4dBgFIAEoCzIeLmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0EicKBnN5bnRheBgGIAEoDjIXLmdvb2dsZS5wcm90b2J1Zi5TeW50YXgSDwoHZWRpdGlvbhgHIAEoCSLVBQoFRmllbGQSKQoEa2luZBgBIAEoDjIbLmdvb2dsZS5wcm90b2J1Zi5GaWVsZC5LaW5kEjcKC2NhcmRpbmFsaXR5GAIgASgOMiIuZ29vZ2xlLnByb3RvYnVmLkZpZWxkLkNhcmRpbmFsaXR5Eg4KBm51bWJlchgDIAEoBRIMCgRuYW1lGAQgASgJEhAKCHR5cGVfdXJsGAYgASgJEhMKC29uZW9mX2luZGV4GAcgASgFEg4KBnBhY2tlZBgIIAEoCBIoCgdvcHRpb25zGAkgAygLMhcuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbhIRCglqc29uX25hbWUYCiABKAkSFQoNZGVmYXVsdF92YWx1ZRgLIAEoCSLIAgoES2luZBIQCgxUWVBFX1VOS05PV04QABIPCgtUWVBFX0RPVUJMRRABEg4KClRZUEVfRkxPQVQQAhIOCgpUWVBFX0lOVDY0EAMSDwoLVFlQRV9VSU5UNjQQBBIOCgpUWVBFX0lOVDMyEAUSEAoMVFlQRV9GSVhFRDY0EAYSEAoMVFlQRV9GSVhFRDMyEAcSDQoJVFlQRV9CT09MEAgSDwoLVFlQRV9TVFJJTkcQCRIOCgpUWVBFX0dST1VQEAoSEAoMVFlQRV9NRVNTQUdFEAsSDgoKVFlQRV9CWVRFUxAMEg8KC1RZUEVfVUlOVDMyEA0SDQoJVFlQRV9FTlVNEA4SEQoNVFlQRV9TRklYRUQzMhAPEhEKDVRZUEVfU0ZJWEVENjQQEBIPCgtUWVBFX1NJTlQzMhAREg8KC1RZUEVfU0lOVDY0EBIidAoLQ2FyZGluYWxpdHkSFwoTQ0FSRElOQUxJVFlfVU5LTk9XThAAEhgKFENBUkRJTkFMSVRZX09QVElPTkFMEAESGAoUQ0FSRElOQUxJVFlfUkVRVUlSRUQQAhIYChRDQVJESU5BTElUWV9SRVBFQVRFRBADIt8BCgRFbnVtEgwKBG5hbWUYASABKAkSLQoJZW51bXZhbHVlGAIgAygLMhouZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZRIoCgdvcHRpb25zGAMgAygLMhcuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbhI2Cg5zb3VyY2VfY29udGV4dBgEIAEoCzIeLmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0EicKBnN5bnRheBgFIAEoDjIXLmdvb2dsZS5wcm90b2J1Zi5TeW50YXgSDwoHZWRpdGlvbhgGIAEoCSJTCglFbnVtVmFsdWUSDAoEbmFtZRgBIAEoCRIOCgZudW1iZXIYAiABKAUSKAoHb3B0aW9ucxgDIAMoCzIXLmdvb2dsZS5wcm90b2J1Zi5PcHRpb24iOwoGT3B0aW9uEgwKBG5hbWUYASABKAkSIwoFdmFsdWUYAiABKAsyFC5nb29nbGUucHJvdG9idWYuQW55KkMKBlN5bnRheBIRCg1TWU5UQVhfUFJPVE8yEAASEQoNU1lOVEFYX1BST1RPMxABEhMKD1NZTlRBWF9FRElUSU9OUxACQnsKE2NvbS5nb29nbGUucHJvdG9idWZCCVR5cGVQcm90b1ABWi1nb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi90eXBlcGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw",
    [aLr.file_google_protobuf_any, lLr.file_google_protobuf_source_context],
  );
  e1t.TypeSchema = (0, Tte.messageDesc)(e1t.file_google_protobuf_type, 0);
  e1t.FieldSchema = (0, Tte.messageDesc)(e1t.file_google_protobuf_type, 1);
  var QHt;
  (function (e) {
    ((e[(e.TYPE_UNKNOWN = 0)] = "TYPE_UNKNOWN"),
      (e[(e.TYPE_DOUBLE = 1)] = "TYPE_DOUBLE"),
      (e[(e.TYPE_FLOAT = 2)] = "TYPE_FLOAT"),
      (e[(e.TYPE_INT64 = 3)] = "TYPE_INT64"),
      (e[(e.TYPE_UINT64 = 4)] = "TYPE_UINT64"),
      (e[(e.TYPE_INT32 = 5)] = "TYPE_INT32"),
      (e[(e.TYPE_FIXED64 = 6)] = "TYPE_FIXED64"),
      (e[(e.TYPE_FIXED32 = 7)] = "TYPE_FIXED32"),
      (e[(e.TYPE_BOOL = 8)] = "TYPE_BOOL"),
      (e[(e.TYPE_STRING = 9)] = "TYPE_STRING"),
      (e[(e.TYPE_GROUP = 10)] = "TYPE_GROUP"),
      (e[(e.TYPE_MESSAGE = 11)] = "TYPE_MESSAGE"),
      (e[(e.TYPE_BYTES = 12)] = "TYPE_BYTES"),
      (e[(e.TYPE_UINT32 = 13)] = "TYPE_UINT32"),
      (e[(e.TYPE_ENUM = 14)] = "TYPE_ENUM"),
      (e[(e.TYPE_SFIXED32 = 15)] = "TYPE_SFIXED32"),
      (e[(e.TYPE_SFIXED64 = 16)] = "TYPE_SFIXED64"),
      (e[(e.TYPE_SINT32 = 17)] = "TYPE_SINT32"),
      (e[(e.TYPE_SINT64 = 18)] = "TYPE_SINT64"));
  })(QHt || (e1t.Field_Kind = QHt = {}));
  e1t.Field_KindSchema = (0, Uqe.enumDesc)(e1t.file_google_protobuf_type, 1, 0);
  var JHt;
  (function (e) {
    ((e[(e.UNKNOWN = 0)] = "UNKNOWN"),
      (e[(e.OPTIONAL = 1)] = "OPTIONAL"),
      (e[(e.REQUIRED = 2)] = "REQUIRED"),
      (e[(e.REPEATED = 3)] = "REPEATED"));
  })(JHt || (e1t.Field_Cardinality = JHt = {}));
  e1t.Field_CardinalitySchema = (0, Uqe.enumDesc)(
    e1t.file_google_protobuf_type,
    1,
    1,
  );
  e1t.EnumSchema = (0, Tte.messageDesc)(e1t.file_google_protobuf_type, 2);
  e1t.EnumValueSchema = (0, Tte.messageDesc)(e1t.file_google_protobuf_type, 3);
  e1t.OptionSchema = (0, Tte.messageDesc)(e1t.file_google_protobuf_type, 4);
  var ZHt;
  (function (e) {
    ((e[(e.PROTO2 = 0)] = "PROTO2"),
      (e[(e.PROTO3 = 1)] = "PROTO3"),
      (e[(e.EDITIONS = 2)] = "EDITIONS"));
  })(ZHt || (e1t.Syntax = ZHt = {}));
  e1t.SyntaxSchema = (0, Uqe.enumDesc)(e1t.file_google_protobuf_type, 0);
});
var o1t = commonJS(function (n1t) {
  Object.defineProperty(n1t, "__esModule", { value: !0 });
  n1t.MixinSchema =
    n1t.MethodSchema =
    n1t.ApiSchema =
    n1t.file_google_protobuf_api =
      void 0;
  var bLr = pE(),
    SLr = ybe(),
    kLr = Hqe(),
    jqe = Tw();
  n1t.file_google_protobuf_api = (0, bLr.fileDesc)(
    "Chlnb29nbGUvcHJvdG9idWYvYXBpLnByb3RvEg9nb29nbGUucHJvdG9idWYikgIKA0FwaRIMCgRuYW1lGAEgASgJEigKB21ldGhvZHMYAiADKAsyFy5nb29nbGUucHJvdG9idWYuTWV0aG9kEigKB29wdGlvbnMYAyADKAsyFy5nb29nbGUucHJvdG9idWYuT3B0aW9uEg8KB3ZlcnNpb24YBCABKAkSNgoOc291cmNlX2NvbnRleHQYBSABKAsyHi5nb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dBImCgZtaXhpbnMYBiADKAsyFi5nb29nbGUucHJvdG9idWYuTWl4aW4SJwoGc3ludGF4GAcgASgOMhcuZ29vZ2xlLnByb3RvYnVmLlN5bnRheBIPCgdlZGl0aW9uGAggASgJIu4BCgZNZXRob2QSDAoEbmFtZRgBIAEoCRIYChByZXF1ZXN0X3R5cGVfdXJsGAIgASgJEhkKEXJlcXVlc3Rfc3RyZWFtaW5nGAMgASgIEhkKEXJlc3BvbnNlX3R5cGVfdXJsGAQgASgJEhoKEnJlc3BvbnNlX3N0cmVhbWluZxgFIAEoCBIoCgdvcHRpb25zGAYgAygLMhcuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbhIrCgZzeW50YXgYByABKA4yFy5nb29nbGUucHJvdG9idWYuU3ludGF4QgIYARITCgdlZGl0aW9uGAggASgJQgIYASIjCgVNaXhpbhIMCgRuYW1lGAEgASgJEgwKBHJvb3QYAiABKAlCdgoTY29tLmdvb2dsZS5wcm90b2J1ZkIIQXBpUHJvdG9QAVosZ29vZ2xlLmdvbGFuZy5vcmcvcHJvdG9idWYvdHlwZXMva25vd24vYXBpcGKiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw",
    [SLr.file_google_protobuf_source_context, kLr.file_google_protobuf_type],
  );
  n1t.ApiSchema = (0, jqe.messageDesc)(n1t.file_google_protobuf_api, 0);
  n1t.MethodSchema = (0, jqe.messageDesc)(n1t.file_google_protobuf_api, 1);
  n1t.MixinSchema = (0, jqe.messageDesc)(n1t.file_google_protobuf_api, 2);
});
var vte = commonJS(function (s1t) {
  Object.defineProperty(s1t, "__esModule", { value: !0 });
  s1t.extDesc = TLr;
  function TLr(e, t, ...r) {
    if (r.length == 0) return e.extensions[t];
    let o = r.pop();
    return r.reduce((d, p) => d.nestedMessages[p], e.messages[t])
      .nestedExtensions[o];
  }
});
var c1t = commonJS(function (a1t) {
  Object.defineProperty(a1t, "__esModule", { value: !0 });
  a1t.cpp =
    a1t.CppFeatures_StringTypeSchema =
    a1t.CppFeatures_StringType =
    a1t.CppFeaturesSchema =
    a1t.file_google_protobuf_cpp_features =
      void 0;
  var CLr = pE(),
    xLr = BB(),
    ALr = Tw(),
    RLr = pN(),
    PLr = vte();
  a1t.file_google_protobuf_cpp_features = (0, CLr.fileDesc)(
    "CiJnb29nbGUvcHJvdG9idWYvY3BwX2ZlYXR1cmVzLnByb3RvEgJwYiL8AwoLQ3BwRmVhdHVyZXMS+wEKEmxlZ2FjeV9jbG9zZWRfZW51bRgBIAEoCELeAYgBAZgBBJgBAaIBCRIEdHJ1ZRiEB6IBChIFZmFsc2UY5weyAbgBCOgHEOgHGq8BVGhlIGxlZ2FjeSBjbG9zZWQgZW51bSBiZWhhdmlvciBpbiBDKysgaXMgZGVwcmVjYXRlZCBhbmQgaXMgc2NoZWR1bGVkIHRvIGJlIHJlbW92ZWQgaW4gZWRpdGlvbiAyMDI1LiAgU2VlIGh0dHA6Ly9wcm90b2J1Zi5kZXYvcHJvZ3JhbW1pbmctZ3VpZGVzL2VudW0vI2NwcCBmb3IgbW9yZSBpbmZvcm1hdGlvbhJaCgtzdHJpbmdfdHlwZRgCIAEoDjIaLnBiLkNwcEZlYXR1cmVzLlN0cmluZ1R5cGVCKYgBAZgBBJgBAaIBCxIGU1RSSU5HGIQHogEJEgRWSUVXGOkHsgEDCOgHEkwKGmVudW1fbmFtZV91c2VzX3N0cmluZ192aWV3GAMgASgIQiiIAQGYAQaYAQGiAQoSBWZhbHNlGIQHogEJEgR0cnVlGOkHsgEDCOkHIkUKClN0cmluZ1R5cGUSFwoTU1RSSU5HX1RZUEVfVU5LTk9XThAAEggKBFZJRVcQARIICgRDT1JEEAISCgoGU1RSSU5HEAM6PwoDY3BwEhsuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQY6AcgASgLMg8ucGIuQ3BwRmVhdHVyZXNSA2NwcA",
    [xLr.file_google_protobuf_descriptor],
  );
  a1t.CppFeaturesSchema = (0, ALr.messageDesc)(
    a1t.file_google_protobuf_cpp_features,
    0,
  );
  var i1t;
  (function (e) {
    ((e[(e.STRING_TYPE_UNKNOWN = 0)] = "STRING_TYPE_UNKNOWN"),
      (e[(e.VIEW = 1)] = "VIEW"),
      (e[(e.CORD = 2)] = "CORD"),
      (e[(e.STRING = 3)] = "STRING"));
  })(i1t || (a1t.CppFeatures_StringType = i1t = {}));
  a1t.CppFeatures_StringTypeSchema = (0, RLr.enumDesc)(
    a1t.file_google_protobuf_cpp_features,
    0,
    0,
  );
  a1t.cpp = (0, PLr.extDesc)(a1t.file_google_protobuf_cpp_features, 0);
});
var p1t = commonJS(function (u1t) {
  Object.defineProperty(u1t, "__esModule", { value: !0 });
  u1t.EmptySchema = u1t.file_google_protobuf_empty = void 0;
  var DLr = pE(),
    NLr = Tw();
  u1t.file_google_protobuf_empty = (0, DLr.fileDesc)(
    "Chtnb29nbGUvcHJvdG9idWYvZW1wdHkucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIHCgVFbXB0eUJ9ChNjb20uZ29vZ2xlLnByb3RvYnVmQgpFbXB0eVByb3RvUAFaLmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2VtcHR5cGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw",
  );
  u1t.EmptySchema = (0, NLr.messageDesc)(u1t.file_google_protobuf_empty, 0);
});
var y1t = commonJS(function (m1t) {
  Object.defineProperty(m1t, "__esModule", { value: !0 });
  m1t.FieldMaskSchema = m1t.file_google_protobuf_field_mask = void 0;
  var LLr = pE(),
    FLr = Tw();
  m1t.file_google_protobuf_field_mask = (0, LLr.fileDesc)(
    "CiBnb29nbGUvcHJvdG9idWYvZmllbGRfbWFzay5wcm90bxIPZ29vZ2xlLnByb3RvYnVmIhoKCUZpZWxkTWFzaxINCgVwYXRocxgBIAMoCUKFAQoTY29tLmdvb2dsZS5wcm90b2J1ZkIORmllbGRNYXNrUHJvdG9QAVoyZ29vZ2xlLmdvbGFuZy5vcmcvcHJvdG9idWYvdHlwZXMva25vd24vZmllbGRtYXNrcGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw",
  );
  m1t.FieldMaskSchema = (0, FLr.messageDesc)(
    m1t.file_google_protobuf_field_mask,
    0,
  );
});
var T1t = commonJS(function (w1t) {
  Object.defineProperty(w1t, "__esModule", { value: !0 });
  w1t.go =
    w1t.GoFeatures_StripEnumPrefixSchema =
    w1t.GoFeatures_StripEnumPrefix =
    w1t.GoFeatures_APILevelSchema =
    w1t.GoFeatures_APILevel =
    w1t.GoFeatures_OptimizeModeFeature_OptimizeModeSchema =
    w1t.GoFeatures_OptimizeModeFeature_OptimizeMode =
    w1t.GoFeatures_OptimizeModeFeatureSchema =
    w1t.GoFeaturesSchema =
    w1t.file_google_protobuf_go_features =
      void 0;
  var $Lr = pE(),
    BLr = BB(),
    k1t = Tw(),
    Wqe = pN(),
    ULr = vte();
  w1t.file_google_protobuf_go_features = (0, $Lr.fileDesc)(
    "CiFnb29nbGUvcHJvdG9idWYvZ29fZmVhdHVyZXMucHJvdG8SAnBiItEGCgpHb0ZlYXR1cmVzEqUBChpsZWdhY3lfdW5tYXJzaGFsX2pzb25fZW51bRgBIAEoCEKAAYgBAZgBBpgBAaIBCRIEdHJ1ZRiEB6IBChIFZmFsc2UY5weyAVsI6AcQ6AcaU1RoZSBsZWdhY3kgVW5tYXJzaGFsSlNPTiBBUEkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIGVkaXRpb24uEmoKCWFwaV9sZXZlbBgCIAEoDjIXLnBiLkdvRmVhdHVyZXMuQVBJTGV2ZWxCPogBAZgBA5gBAaIBGhIVQVBJX0xFVkVMX1VOU1BFQ0lGSUVEGIQHogEPEgpBUElfT1BBUVVFGOkHsgEDCOgHEmsKEXN0cmlwX2VudW1fcHJlZml4GAMgASgOMh4ucGIuR29GZWF0dXJlcy5TdHJpcEVudW1QcmVmaXhCMIgBAZgBBpgBB5gBAaIBGxIWU1RSSVBfRU5VTV9QUkVGSVhfS0VFUBiEB7IBAwjpBxJ4Cg1vcHRpbWl6ZV9tb2RlGAQgASgOMi8ucGIuR29GZWF0dXJlcy5PcHRpbWl6ZU1vZGVGZWF0dXJlLk9wdGltaXplTW9kZUIwiAEBmAEDmAEBogEeEhlPUFRJTUlaRV9NT0RFX1VOU1BFQ0lGSUVEGIQHsgEDCOkHGl4KE09wdGltaXplTW9kZUZlYXR1cmUiRwoMT3B0aW1pemVNb2RlEh0KGU9QVElNSVpFX01PREVfVU5TUEVDSUZJRUQQABIJCgVTUEVFRBABEg0KCUNPREVfU0laRRACIlMKCEFQSUxldmVsEhkKFUFQSV9MRVZFTF9VTlNQRUNJRklFRBAAEgwKCEFQSV9PUEVOEAESDgoKQVBJX0hZQlJJRBACEg4KCkFQSV9PUEFRVUUQAyKSAQoPU3RyaXBFbnVtUHJlZml4EiEKHVNUUklQX0VOVU1fUFJFRklYX1VOU1BFQ0lGSUVEEAASGgoWU1RSSVBfRU5VTV9QUkVGSVhfS0VFUBABEiMKH1NUUklQX0VOVU1fUFJFRklYX0dFTkVSQVRFX0JPVEgQAhIbChdTVFJJUF9FTlVNX1BSRUZJWF9TVFJJUBADOjwKAmdvEhsuZ29vZ2xlLnByb3RvYnVmLkZlYXR1cmVTZXQY6gcgASgLMg4ucGIuR29GZWF0dXJlc1ICZ29CL1otZ29vZ2xlLmdvbGFuZy5vcmcvcHJvdG9idWYvdHlwZXMvZ29mZWF0dXJlc3Bi",
    [BLr.file_google_protobuf_descriptor],
  );
  w1t.GoFeaturesSchema = (0, k1t.messageDesc)(
    w1t.file_google_protobuf_go_features,
    0,
  );
  w1t.GoFeatures_OptimizeModeFeatureSchema = (0, k1t.messageDesc)(
    w1t.file_google_protobuf_go_features,
    0,
    0,
  );
  var _1t;
  (function (e) {
    ((e[(e.OPTIMIZE_MODE_UNSPECIFIED = 0)] = "OPTIMIZE_MODE_UNSPECIFIED"),
      (e[(e.SPEED = 1)] = "SPEED"),
      (e[(e.CODE_SIZE = 2)] = "CODE_SIZE"));
  })(_1t || (w1t.GoFeatures_OptimizeModeFeature_OptimizeMode = _1t = {}));
  w1t.GoFeatures_OptimizeModeFeature_OptimizeModeSchema = (0, Wqe.enumDesc)(
    w1t.file_google_protobuf_go_features,
    0,
    0,
    0,
  );
  var b1t;
  (function (e) {
    ((e[(e.API_LEVEL_UNSPECIFIED = 0)] = "API_LEVEL_UNSPECIFIED"),
      (e[(e.API_OPEN = 1)] = "API_OPEN"),
      (e[(e.API_HYBRID = 2)] = "API_HYBRID"),
      (e[(e.API_OPAQUE = 3)] = "API_OPAQUE"));
  })(b1t || (w1t.GoFeatures_APILevel = b1t = {}));
  w1t.GoFeatures_APILevelSchema = (0, Wqe.enumDesc)(
    w1t.file_google_protobuf_go_features,
    0,
    0,
  );
  var S1t;
  (function (e) {
    ((e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
      (e[(e.KEEP = 1)] = "KEEP"),
      (e[(e.GENERATE_BOTH = 2)] = "GENERATE_BOTH"),
      (e[(e.STRIP = 3)] = "STRIP"));
  })(S1t || (w1t.GoFeatures_StripEnumPrefix = S1t = {}));
  w1t.GoFeatures_StripEnumPrefixSchema = (0, Wqe.enumDesc)(
    w1t.file_google_protobuf_go_features,
    0,
    1,
  );
  w1t.go = (0, ULr.extDesc)(w1t.file_google_protobuf_go_features, 0);
});
var I1t = commonJS(function (R1t) {
  Object.defineProperty(R1t, "__esModule", { value: !0 });
  R1t.java =
    R1t.JavaFeatures_Utf8ValidationSchema =
    R1t.JavaFeatures_Utf8Validation =
    R1t.JavaFeatures_NestInFileClassFeature_NestInFileClassSchema =
    R1t.JavaFeatures_NestInFileClassFeature_NestInFileClass =
    R1t.JavaFeatures_NestInFileClassFeatureSchema =
    R1t.JavaFeaturesSchema =
    R1t.file_google_protobuf_java_features =
      void 0;
  var YLr = pE(),
    XLr = BB(),
    x1t = Tw(),
    A1t = pN(),
    QLr = vte();
  R1t.file_google_protobuf_java_features = (0, YLr.fileDesc)(
    "CiNnb29nbGUvcHJvdG9idWYvamF2YV9mZWF0dXJlcy5wcm90bxICcGIigwgKDEphdmFGZWF0dXJlcxL+AQoSbGVnYWN5X2Nsb3NlZF9lbnVtGAEgASgIQuEBiAEBmAEEmAEBogEJEgR0cnVlGIQHogEKEgVmYWxzZRjnB7IBuwEI6AcQ6AcasgFUaGUgbGVnYWN5IGNsb3NlZCBlbnVtIGJlaGF2aW9yIGluIEphdmEgaXMgZGVwcmVjYXRlZCBhbmQgaXMgc2NoZWR1bGVkIHRvIGJlIHJlbW92ZWQgaW4gZWRpdGlvbiAyMDI1LiAgU2VlIGh0dHA6Ly9wcm90b2J1Zi5kZXYvcHJvZ3JhbW1pbmctZ3VpZGVzL2VudW0vI2phdmEgZm9yIG1vcmUgaW5mb3JtYXRpb24uEp8CCg91dGY4X3ZhbGlkYXRpb24YAiABKA4yHy5wYi5KYXZhRmVhdHVyZXMuVXRmOFZhbGlkYXRpb25C5AGIAQGYAQSYAQGiAQwSB0RFRkFVTFQYhAeyAcgBCOgHEOkHGr8BVGhlIEphdmEtc3BlY2lmaWMgdXRmOCB2YWxpZGF0aW9uIGZlYXR1cmUgaXMgZGVwcmVjYXRlZCBhbmQgaXMgc2NoZWR1bGVkIHRvIGJlIHJlbW92ZWQgaW4gZWRpdGlvbiAyMDI1LiAgVXRmOCB2YWxpZGF0aW9uIGJlaGF2aW9yIHNob3VsZCB1c2UgdGhlIGdsb2JhbCBjcm9zcy1sYW5ndWFnZSB1dGY4X3ZhbGlkYXRpb24gZmVhdHVyZS4SMAoKbGFyZ2VfZW51bRgDIAEoCEIciAEBmAEGmAEBogEKEgVmYWxzZRiEB7IBAwjpBxJRCh91c2Vfb2xkX291dGVyX2NsYXNzbmFtZV9kZWZhdWx0GAQgASgIQiiIAQGYAQGiAQkSBHRydWUYhAeiAQoSBWZhbHNlGOkHsgEGCOkHIOkHEn8KEm5lc3RfaW5fZmlsZV9jbGFzcxgFIAEoDjI3LnBiLkphdmFGZWF0dXJlcy5OZXN0SW5GaWxlQ2xhc3NGZWF0dXJlLk5lc3RJbkZpbGVDbGFzc0IqiAEBmAEDmAEGmAEIogELEgZMRUdBQ1kYhAeiAQcSAk5PGOkHsgEDCOkHGnwKFk5lc3RJbkZpbGVDbGFzc0ZlYXR1cmUiWAoPTmVzdEluRmlsZUNsYXNzEh4KGk5FU1RfSU5fRklMRV9DTEFTU19VTktOT1dOEAASBgoCTk8QARIHCgNZRVMQAhIUCgZMRUdBQ1kQAxoIIgYI6Qcg6QdKCAgBEICAgIACIkYKDlV0ZjhWYWxpZGF0aW9uEhsKF1VURjhfVkFMSURBVElPTl9VTktOT1dOEAASCwoHREVGQVVMVBABEgoKBlZFUklGWRACSgQIBhAHOkIKBGphdmESGy5nb29nbGUucHJvdG9idWYuRmVhdHVyZVNldBjpByABKAsyEC5wYi5KYXZhRmVhdHVyZXNSBGphdmFCKAoTY29tLmdvb2dsZS5wcm90b2J1ZkIRSmF2YUZlYXR1cmVzUHJvdG8",
    [XLr.file_google_protobuf_descriptor],
  );
  R1t.JavaFeaturesSchema = (0, x1t.messageDesc)(
    R1t.file_google_protobuf_java_features,
    0,
  );
  R1t.JavaFeatures_NestInFileClassFeatureSchema = (0, x1t.messageDesc)(
    R1t.file_google_protobuf_java_features,
    0,
    0,
  );
  var v1t;
  (function (e) {
    ((e[(e.NEST_IN_FILE_CLASS_UNKNOWN = 0)] = "NEST_IN_FILE_CLASS_UNKNOWN"),
      (e[(e.NO = 1)] = "NO"),
      (e[(e.YES = 2)] = "YES"),
      (e[(e.LEGACY = 3)] = "LEGACY"));
  })(
    v1t || (R1t.JavaFeatures_NestInFileClassFeature_NestInFileClass = v1t = {}),
  );
  R1t.JavaFeatures_NestInFileClassFeature_NestInFileClassSchema = (0,
  A1t.enumDesc)(R1t.file_google_protobuf_java_features, 0, 0, 0);
  var C1t;
  (function (e) {
    ((e[(e.UTF8_VALIDATION_UNKNOWN = 0)] = "UTF8_VALIDATION_UNKNOWN"),
      (e[(e.DEFAULT = 1)] = "DEFAULT"),
      (e[(e.VERIFY = 2)] = "VERIFY"));
  })(C1t || (R1t.JavaFeatures_Utf8Validation = C1t = {}));
  R1t.JavaFeatures_Utf8ValidationSchema = (0, A1t.enumDesc)(
    R1t.file_google_protobuf_java_features,
    0,
    0,
  );
  R1t.java = (0, QLr.extDesc)(R1t.file_google_protobuf_java_features, 0);
});
var N1t = commonJS(function (O1t) {
  Object.defineProperty(O1t, "__esModule", { value: !0 });
  O1t.NullValueSchema =
    O1t.NullValue =
    O1t.ListValueSchema =
    O1t.ValueSchema =
    O1t.StructSchema =
    O1t.file_google_protobuf_struct =
      void 0;
  var oFr = pE(),
    Gqe = Tw(),
    sFr = pN();
  O1t.file_google_protobuf_struct = (0, oFr.fileDesc)(
    "Chxnb29nbGUvcHJvdG9idWYvc3RydWN0LnByb3RvEg9nb29nbGUucHJvdG9idWYihAEKBlN0cnVjdBIzCgZmaWVsZHMYASADKAsyIy5nb29nbGUucHJvdG9idWYuU3RydWN0LkZpZWxkc0VudHJ5GkUKC0ZpZWxkc0VudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEi6gEKBVZhbHVlEjAKCm51bGxfdmFsdWUYASABKA4yGi5nb29nbGUucHJvdG9idWYuTnVsbFZhbHVlSAASFgoMbnVtYmVyX3ZhbHVlGAIgASgBSAASFgoMc3RyaW5nX3ZhbHVlGAMgASgJSAASFAoKYm9vbF92YWx1ZRgEIAEoCEgAEi8KDHN0cnVjdF92YWx1ZRgFIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIABIwCgpsaXN0X3ZhbHVlGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLkxpc3RWYWx1ZUgAQgYKBGtpbmQiMwoJTGlzdFZhbHVlEiYKBnZhbHVlcxgBIAMoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZSobCglOdWxsVmFsdWUSDgoKTlVMTF9WQUxVRRAAQn8KE2NvbS5nb29nbGUucHJvdG9idWZCC1N0cnVjdFByb3RvUAFaL2dvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3N0cnVjdHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM",
  );
  O1t.StructSchema = (0, Gqe.messageDesc)(O1t.file_google_protobuf_struct, 0);
  O1t.ValueSchema = (0, Gqe.messageDesc)(O1t.file_google_protobuf_struct, 1);
  O1t.ListValueSchema = (0, Gqe.messageDesc)(
    O1t.file_google_protobuf_struct,
    2,
  );
  var M1t;
  (function (e) {
    e[(e.NULL_VALUE = 0)] = "NULL_VALUE";
  })(M1t || (O1t.NullValue = M1t = {}));
  O1t.NullValueSchema = (0, sFr.enumDesc)(O1t.file_google_protobuf_struct, 0);
});
var $1t = commonJS(function (L1t) {
  Object.defineProperty(L1t, "__esModule", { value: !0 });
  L1t.BytesValueSchema =
    L1t.StringValueSchema =
    L1t.BoolValueSchema =
    L1t.UInt32ValueSchema =
    L1t.Int32ValueSchema =
    L1t.UInt64ValueSchema =
    L1t.Int64ValueSchema =
    L1t.FloatValueSchema =
    L1t.DoubleValueSchema =
    L1t.file_google_protobuf_wrappers =
      void 0;
  var uFr = pE(),
    kN = Tw();
  L1t.file_google_protobuf_wrappers = (0, uFr.fileDesc)(
    "Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM",
  );
  L1t.DoubleValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    0,
  );
  L1t.FloatValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    1,
  );
  L1t.Int64ValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    2,
  );
  L1t.UInt64ValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    3,
  );
  L1t.Int32ValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    4,
  );
  L1t.UInt32ValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    5,
  );
  L1t.BoolValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    6,
  );
  L1t.StringValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    7,
  );
  L1t.BytesValueSchema = (0, kN.messageDesc)(
    L1t.file_google_protobuf_wrappers,
    8,
  );
});
var j1t = commonJS(function (U1t) {
  Object.defineProperty(U1t, "__esModule", { value: !0 });
  U1t.CodeGeneratorResponse_FeatureSchema =
    U1t.CodeGeneratorResponse_Feature =
    U1t.CodeGeneratorResponse_FileSchema =
    U1t.CodeGeneratorResponseSchema =
    U1t.CodeGeneratorRequestSchema =
    U1t.VersionSchema =
    U1t.file_google_protobuf_compiler_plugin =
      void 0;
  var bFr = pE(),
    SFr = BB(),
    Sbe = Tw(),
    kFr = pN();
  U1t.file_google_protobuf_compiler_plugin = (0, bFr.fileDesc)(
    "CiVnb29nbGUvcHJvdG9idWYvY29tcGlsZXIvcGx1Z2luLnByb3RvEhhnb29nbGUucHJvdG9idWYuY29tcGlsZXIiRgoHVmVyc2lvbhINCgVtYWpvchgBIAEoBRINCgVtaW5vchgCIAEoBRINCgVwYXRjaBgDIAEoBRIOCgZzdWZmaXgYBCABKAkigQIKFENvZGVHZW5lcmF0b3JSZXF1ZXN0EhgKEGZpbGVfdG9fZ2VuZXJhdGUYASADKAkSEQoJcGFyYW1ldGVyGAIgASgJEjgKCnByb3RvX2ZpbGUYDyADKAsyJC5nb29nbGUucHJvdG9idWYuRmlsZURlc2NyaXB0b3JQcm90bxJFChdzb3VyY2VfZmlsZV9kZXNjcmlwdG9ycxgRIAMoCzIkLmdvb2dsZS5wcm90b2J1Zi5GaWxlRGVzY3JpcHRvclByb3RvEjsKEGNvbXBpbGVyX3ZlcnNpb24YAyABKAsyIS5nb29nbGUucHJvdG9idWYuY29tcGlsZXIuVmVyc2lvbiKSAwoVQ29kZUdlbmVyYXRvclJlc3BvbnNlEg0KBWVycm9yGAEgASgJEhoKEnN1cHBvcnRlZF9mZWF0dXJlcxgCIAEoBBIXCg9taW5pbXVtX2VkaXRpb24YAyABKAUSFwoPbWF4aW11bV9lZGl0aW9uGAQgASgFEkIKBGZpbGUYDyADKAsyNC5nb29nbGUucHJvdG9idWYuY29tcGlsZXIuQ29kZUdlbmVyYXRvclJlc3BvbnNlLkZpbGUafwoERmlsZRIMCgRuYW1lGAEgASgJEhcKD2luc2VydGlvbl9wb2ludBgCIAEoCRIPCgdjb250ZW50GA8gASgJEj8KE2dlbmVyYXRlZF9jb2RlX2luZm8YECABKAsyIi5nb29nbGUucHJvdG9idWYuR2VuZXJhdGVkQ29kZUluZm8iVwoHRmVhdHVyZRIQCgxGRUFUVVJFX05PTkUQABIbChdGRUFUVVJFX1BST1RPM19PUFRJT05BTBABEh0KGUZFQVRVUkVfU1VQUE9SVFNfRURJVElPTlMQAkJyChxjb20uZ29vZ2xlLnByb3RvYnVmLmNvbXBpbGVyQgxQbHVnaW5Qcm90b3NaKWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL3BsdWdpbnBiqgIYR29vZ2xlLlByb3RvYnVmLkNvbXBpbGVy",
    [SFr.file_google_protobuf_descriptor],
  );
  U1t.VersionSchema = (0, Sbe.messageDesc)(
    U1t.file_google_protobuf_compiler_plugin,
    0,
  );
  U1t.CodeGeneratorRequestSchema = (0, Sbe.messageDesc)(
    U1t.file_google_protobuf_compiler_plugin,
    1,
  );
  U1t.CodeGeneratorResponseSchema = (0, Sbe.messageDesc)(
    U1t.file_google_protobuf_compiler_plugin,
    2,
  );
  U1t.CodeGeneratorResponse_FileSchema = (0, Sbe.messageDesc)(
    U1t.file_google_protobuf_compiler_plugin,
    2,
    0,
  );
  var B1t;
  (function (e) {
    ((e[(e.NONE = 0)] = "NONE"),
      (e[(e.PROTO3_OPTIONAL = 1)] = "PROTO3_OPTIONAL"),
      (e[(e.SUPPORTS_EDITIONS = 2)] = "SUPPORTS_EDITIONS"));
  })(B1t || (U1t.CodeGeneratorResponse_Feature = B1t = {}));
  U1t.CodeGeneratorResponse_FeatureSchema = (0, kFr.enumDesc)(
    U1t.file_google_protobuf_compiler_plugin,
    2,
    0,
  );
});
var mE = commonJS(function (__) {
  var xFr =
      (__ && __.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var d = Object.getOwnPropertyDescriptor(t, r);
            if (
              !d ||
              ("get" in d ? !t.__esModule : d.writable || d.configurable)
            )
              d = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, d);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    ek =
      (__ && __.__exportStar) ||
      function (e, t) {
        for (var r in e)
          if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r))
            xFr(t, e, r);
      };
  Object.defineProperty(__, "__esModule", { value: !0 });
  ek(bHt(), __);
  ek(AHt(), __);
  ek(VHt(), __);
  ek(R5(), __);
  ek(mbe(), __);
  ek(o1t(), __);
  ek(c1t(), __);
  ek(BB(), __);
  ek($qe(), __);
  ek(p1t(), __);
  ek(y1t(), __);
  ek(T1t(), __);
  ek(I1t(), __);
  ek(ybe(), __);
  ek(N1t(), __);
  ek(Fqe(), __);
  ek(Hqe(), __);
  ek($1t(), __);
  ek(j1t(), __);
});
var Ate = commonJS(function (q1t) {
  Object.defineProperty(q1t, "__esModule", { value: !0 });
  q1t.getExtension = G1t;
  q1t.setExtension = OFr;
  q1t.clearExtension = DFr;
  q1t.hasExtension = z1t;
  q1t.hasOption = NFr;
  q1t.getOption = LFr;
  q1t.createExtensionContainer = kbe;
  var W1t = FB(),
    AFr = O5(),
    RFr = mM(),
    PFr = DB(),
    IFr = D5(),
    zqe = o2(),
    MFr = R5();
  function G1t(e, t) {
    qqe(t, e);
    let r = FFr(e.$unknown, t),
      [o, d, p] = kbe(t);
    for (let _ of r)
      (0, AFr.readField)(o, new zqe.BinaryReader(_.data), d, _.wireType, {
        readUnknownFields: !0,
      });
    return p();
  }
  function OFr(e, t, r) {
    var o;
    qqe(t, e);
    let d = ((o = e.$unknown) !== null && o !== void 0 ? o : []).filter(
        (I) => I.no !== t.number,
      ),
      [p, _] = kbe(t, r),
      E = new zqe.BinaryWriter();
    (0, IFr.writeField)(E, { writeUnknownFields: !0 }, p, _);
    let C = new zqe.BinaryReader(E.finish());
    while (C.pos < C.len) {
      let [I, D] = C.tag(),
        N = C.skip(D, I);
      d.push({ no: I, wireType: D, data: N });
    }
    e.$unknown = d;
  }
  function DFr(e, t) {
    if ((qqe(t, e), e.$unknown === void 0)) return;
    e.$unknown = e.$unknown.filter((r) => r.no !== t.number);
  }
  function z1t(e, t) {
    var r;
    return (
      t.extendee.typeName === e.$typeName &&
      !!((r = e.$unknown) === null || r === void 0
        ? void 0
        : r.find((o) => o.no === t.number))
    );
  }
  function NFr(e, t) {
    let r = e.proto.options;
    if (!r) return !1;
    return z1t(r, t);
  }
  function LFr(e, t) {
    let r = e.proto.options;
    if (!r) {
      let [, , o] = kbe(t);
      return o();
    }
    return G1t(r, t);
  }
  function FFr(e, t) {
    if (e === void 0) return [];
    if (t.fieldKind === "enum" || t.fieldKind === "scalar") {
      for (let r = e.length - 1; r >= 0; --r)
        if (e[r].no == t.number) return [e[r]];
      return [];
    }
    return e.filter((r) => r.no === t.number);
  }
  function kbe(e, t) {
    let r = e.typeName,
      o = Object.assign(Object.assign({}, e), {
        kind: "field",
        parent: e.extendee,
        localName: r,
      }),
      d = Object.assign(Object.assign({}, e.extendee), {
        fields: [o],
        members: [o],
        oneofs: [],
      }),
      p = (0, W1t.create)(d, t !== void 0 ? { [r]: t } : void 0);
    return [
      (0, RFr.reflect)(d, p),
      o,
      () => {
        let _ = p[r];
        if (_ === void 0) {
          let E = e.message;
          if ((0, MFr.isWrapperDesc)(E))
            return (0, PFr.scalarZeroValue)(
              E.fields[0].scalar,
              E.fields[0].longAsString,
            );
          return (0, W1t.create)(E);
        }
        return _;
      },
    ];
  }
  function qqe(e, t) {
    if (e.extendee.typeName != t.$typeName)
      throw Error(
        `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`,
      );
  }
});
var Z1t = commonJS(function (J1t) {
  Object.defineProperty(J1t, "__esModule", { value: !0 });
  J1t.equals = X1t;
  var kre = DB(),
    V1t = mM(),
    Y1t = dE(),
    K1t = mE(),
    wbe = Ate();
  function X1t(e, t, r, o) {
    if (t.$typeName != e.typeName || r.$typeName != e.typeName) return !1;
    if (t === r) return !0;
    return Ebe((0, V1t.reflect)(e, t), (0, V1t.reflect)(e, r), o);
  }
  function Ebe(e, t, r) {
    if (
      e.desc.typeName === "google.protobuf.Any" &&
      (r === null || r === void 0 ? void 0 : r.unpackAny) == !0
    )
      return zFr(e.message, t.message, r);
    for (let o of e.fields) if (!Q1t(o, e, t, r)) return !1;
    if (
      (r === null || r === void 0 ? void 0 : r.unknown) == !0 &&
      !qFr(e, t, r.registry)
    )
      return !1;
    if (
      (r === null || r === void 0 ? void 0 : r.extensions) == !0 &&
      !VFr(e, t, r)
    )
      return !1;
    return !0;
  }
  function Q1t(e, t, r, o) {
    if (!t.isSet(e) && !r.isSet(e)) return !0;
    if (!t.isSet(e) || !r.isSet(e)) return !1;
    switch (e.fieldKind) {
      case "scalar":
        return (0, kre.scalarEquals)(e.scalar, t.get(e), r.get(e));
      case "enum":
        return t.get(e) === r.get(e);
      case "message":
        return Ebe(t.get(e), r.get(e), o);
      case "map": {
        let d = t.get(e),
          p = r.get(e),
          _ = [];
        for (let E of d.keys()) {
          if (!p.has(E)) return !1;
          _.push(E);
        }
        for (let E of p.keys()) if (!d.has(E)) return !1;
        for (let E of _) {
          let C = d.get(E),
            I = p.get(E);
          if (C === I) continue;
          switch (e.mapKind) {
            case "enum":
              return !1;
            case "message":
              if (!Ebe(C, I, o)) return !1;
              break;
            case "scalar":
              if (!(0, kre.scalarEquals)(e.scalar, C, I)) return !1;
              break;
          }
        }
        break;
      }
      case "list": {
        let d = t.get(e),
          p = r.get(e);
        if (d.size != p.size) return !1;
        for (let _ = 0; _ < d.size; _++) {
          let E = d.get(_),
            C = p.get(_);
          if (E === C) continue;
          switch (e.listKind) {
            case "enum":
              return !1;
            case "message":
              if (!Ebe(E, C, o)) return !1;
              break;
            case "scalar":
              if (!(0, kre.scalarEquals)(e.scalar, E, C)) return !1;
              break;
          }
        }
        break;
      }
    }
    return !0;
  }
  function zFr(e, t, r) {
    if (e.typeUrl !== t.typeUrl) return !1;
    let o = (0, K1t.anyUnpack)(e, r.registry),
      d = (0, K1t.anyUnpack)(t, r.registry);
    if (o && d) {
      let p = r.registry.getMessage(o.$typeName);
      if (p) return X1t(p, o, d, r);
    }
    return (0, kre.scalarEquals)(Y1t.ScalarType.BYTES, e.value, t.value);
  }
  function qFr(e, t, r) {
    function o(_, E) {
      var C;
      let I = (C = _.getUnknown()) !== null && C !== void 0 ? C : [];
      return E ? I.filter((D) => !E.getExtensionFor(_.desc, D.no)) : I;
    }
    let d = o(e, r),
      p = o(t, r);
    if (d.length != p.length) return !1;
    for (let _ = 0; _ < d.length; _++) {
      let E = d[_],
        C = p[_];
      if (E.no != C.no) return !1;
      if (E.wireType != C.wireType) return !1;
      if (!(0, kre.scalarEquals)(Y1t.ScalarType.BYTES, E.data, C.data))
        return !1;
    }
    return !0;
  }
  function VFr(e, t, r) {
    function o(_, E) {
      var C;
      return ((C = _.getUnknown()) !== null && C !== void 0 ? C : [])
        .map((I) => E.getExtensionFor(_.desc, I.no))
        .filter((I) => I != null)
        .filter((I, D, N) => N.indexOf(I) === D);
    }
    let d = o(e, r.registry),
      p = o(t, r.registry);
    if (d.length != p.length || d.some((_) => !p.includes(_))) return !1;
    for (let _ of d) {
      let [E, C] = (0, wbe.createExtensionContainer)(
          _,
          (0, wbe.getExtension)(e.message, _),
        ),
        [I] = (0, wbe.createExtensionContainer)(
          _,
          (0, wbe.getExtension)(t.message, _),
        );
      if (!Q1t(C, E, I, r)) return !1;
    }
    return !0;
  }
});
var Vqe = commonJS(function (dGt) {
  Object.defineProperty(dGt, "__esModule", { value: !0 });
  dGt.isFieldSet = YFr;
  dGt.clearField = XFr;
  var uGt = NB();
  function YFr(e, t) {
    return t.parent.typeName == e.$typeName && (0, uGt.unsafeIsSet)(e, t);
  }
  function XFr(e, t) {
    if (t.parent.typeName == e.$typeName) (0, uGt.unsafeClear)(e, t);
  }
});
var gGt = commonJS(function (EP) {
  var ZFr =
      (EP && EP.__asyncValues) ||
      function (e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t = e[Symbol.asyncIterator],
          r;
        return t
          ? t.call(e)
          : ((e =
              typeof __values === "function"
                ? __values(e)
                : e[Symbol.iterator]()),
            (r = {}),
            o("next"),
            o("throw"),
            o("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r);
        function o(p) {
          r[p] =
            e[p] &&
            function (_) {
              return new Promise(function (E, C) {
                ((_ = e[p](_)), d(E, C, _.done, _.value));
              });
            };
        }
        function d(p, _, E, C) {
          Promise.resolve(C).then(function (I) {
            p({ value: I, done: E });
          }, _);
        }
      },
    H5 =
      (EP && EP.__await) ||
      function (e) {
        return this instanceof H5 ? ((this.v = e), this) : new H5(e);
      },
    e$r =
      (EP && EP.__asyncGenerator) ||
      function (e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var o = r.apply(e, t || []),
          d,
          p = [];
        return (
          (d = Object.create(
            (typeof AsyncIterator === "function" ? AsyncIterator : Object)
              .prototype,
          )),
          E("next"),
          E("throw"),
          E("return", _),
          (d[Symbol.asyncIterator] = function () {
            return this;
          }),
          d
        );
        function _(U) {
          return function (V) {
            return Promise.resolve(V).then(U, N);
          };
        }
        function E(U, V) {
          if (o[U]) {
            if (
              ((d[U] = function (re) {
                return new Promise(function (ue, de) {
                  p.push([U, re, ue, de]) > 1 || C(U, re);
                });
              }),
              V)
            )
              d[U] = V(d[U]);
          }
        }
        function C(U, V) {
          try {
            I(o[U](V));
          } catch (re) {
            F(p[0][3], re);
          }
        }
        function I(U) {
          U.value instanceof H5
            ? Promise.resolve(U.value.v).then(D, N)
            : F(p[0][2], U);
        }
        function D(U) {
          C("next", U);
        }
        function N(U) {
          C("throw", U);
        }
        function F(U, V) {
          if ((U(V), p.shift(), p.length)) C(p[0][0], p[0][1]);
        }
      };
  Object.defineProperty(EP, "__esModule", { value: !0 });
  EP.sizeDelimitedEncode = r$r;
  EP.sizeDelimitedDecodeStream = o$r;
  EP.sizeDelimitedPeek = mGt;
  var t$r = D5(),
    pGt = o2(),
    n$r = O5();
  function r$r(e, t, r) {
    let o = new pGt.BinaryWriter();
    return (o.bytes((0, t$r.toBinary)(e, t, r)), o.finish());
  }
  function o$r(e, t, r) {
    return e$r(this, arguments, function* () {
      var d, p, _, E;
      function C(U, V) {
        let re = new Uint8Array(U.byteLength + V.byteLength);
        return (re.set(U), re.set(V, U.length), re);
      }
      let I = new Uint8Array(0);
      try {
        for (
          var D = !0, N = ZFr(t), F;
          (F = yield H5(N.next())), (d = F.done), !d;
          D = !0
        ) {
          ((E = F.value), (D = !1), (I = C(I, E)));
          for (;;) {
            let V = mGt(I);
            if (V.eof) break;
            if (V.offset + V.size > I.byteLength) break;
            (yield yield H5(
              (0, n$r.fromBinary)(
                e,
                I.subarray(V.offset, V.offset + V.size),
                r,
              ),
            ),
              (I = I.subarray(V.offset + V.size)));
          }
        }
      } catch (U) {
        p = { error: U };
      } finally {
        try {
          if (!D && !d && (_ = N.return)) yield H5(_.call(N));
        } finally {
          if (p) throw p.error;
        }
      }
      if (I.byteLength > 0) throw Error("incomplete data");
    });
  }
  function mGt(e) {
    let t = { eof: !0, size: null, offset: null };
    for (let r = 0; r < 10; r++) {
      if (r > e.byteLength) return t;
      if ((e[r] & 128) == 0) {
        let o = new pGt.BinaryReader(e),
          d;
        try {
          d = o.uint32();
        } catch (p) {
          if (p instanceof RangeError) return t;
          throw p;
        }
        return { eof: !1, size: d, offset: o.pos };
      }
    }
    throw Error("invalid varint");
  }
});
var Tbe = commonJS(function (AP) {
  var s$r =
      (AP && AP.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var d = Object.getOwnPropertyDescriptor(t, r);
            if (
              !d ||
              ("get" in d ? !t.__esModule : d.writable || d.configurable)
            )
              d = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, d);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    wre =
      (AP && AP.__exportStar) ||
      function (e, t) {
        for (var r in e)
          if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r))
            s$r(t, e, r);
      };
  Object.defineProperty(AP, "__esModule", { value: !0 });
  wre(o2(), AP);
  wre(bte(), AP);
  wre(tbe(), AP);
  wre(Cqe(), AP);
  wre(gGt(), AP);
});
var LGt = commonJS(function (NGt) {
  Object.defineProperty(NGt, "__esModule", { value: !0 });
  NGt.toJson = xGt;
  NGt.toJsonString = d$r;
  NGt.enumToJson = f$r;
  var AT = dE(),
    Kqe = n2(),
    wGt = mM(),
    i$r = mE(),
    TGt = R5(),
    a$r = Tbe(),
    _Gt = Ate(),
    l2 = obe(),
    l$r = 3,
    c$r = 2,
    bGt = { alwaysEmitImplicit: !1, enumAsInteger: !1, useProtoFieldName: !1 };
  function u$r(e) {
    return e ? Object.assign(Object.assign({}, bGt), e) : bGt;
  }
  function xGt(e, t, r) {
    return Tre((0, wGt.reflect)(e, t), u$r(r));
  }
  function d$r(e, t, r) {
    var o;
    let d = xGt(e, t, r);
    return JSON.stringify(
      d,
      null,
      (o = r === null || r === void 0 ? void 0 : r.prettySpaces) !== null &&
        o !== void 0
        ? o
        : 0,
    );
  }
  function f$r(e, t) {
    var r;
    if (e.typeName == "google.protobuf.NullValue") return null;
    let o = (r = e.value[t]) === null || r === void 0 ? void 0 : r.name;
    if (o === void 0) throw Error(`${t} is not a value in ${e}`);
    return o;
  }
  function Tre(e, t) {
    var r;
    let o = PGt(e, t);
    if (o !== void 0) return o;
    let d = {};
    for (let p of e.sortedFields) {
      if (!e.isSet(p)) {
        if (p.presence == l$r)
          throw Error(`cannot encode ${p} to JSON: required field not set`);
        if (!t.alwaysEmitImplicit || p.presence !== c$r) continue;
      }
      let _ = kGt(p, e.get(p), t);
      if (_ !== void 0) d[g$r(p, t)] = _;
    }
    if (t.registry) {
      let p = new Set();
      for (let { no: _ } of (r = e.getUnknown()) !== null && r !== void 0
        ? r
        : [])
        if (!p.has(_)) {
          p.add(_);
          let E = t.registry.getExtensionFor(e.desc, _);
          if (!E) continue;
          let C = (0, _Gt.getExtension)(e.message, E),
            [I, D] = (0, _Gt.createExtensionContainer)(E, C),
            N = kGt(D, I.get(D), t);
          if (N !== void 0) d[E.jsonName] = N;
        }
    }
    return d;
  }
  function kGt(e, t, r) {
    switch (e.fieldKind) {
      case "scalar":
        return vbe(e, t);
      case "message":
        return Tre(t, r);
      case "enum":
        return Yqe(e.enum, t, r.enumAsInteger);
      case "list":
        return m$r(t, r);
      case "map":
        return p$r(t, r);
    }
  }
  function p$r(e, t) {
    let r = e.field(),
      o = {};
    switch (r.mapKind) {
      case "scalar":
        for (let [d, p] of e) o[d] = vbe(r, p);
        break;
      case "message":
        for (let [d, p] of e) o[d] = Tre(p, t);
        break;
      case "enum":
        for (let [d, p] of e) o[d] = Yqe(r.enum, p, t.enumAsInteger);
        break;
    }
    return t.alwaysEmitImplicit || e.size > 0 ? o : void 0;
  }
  function m$r(e, t) {
    let r = e.field(),
      o = [];
    switch (r.listKind) {
      case "scalar":
        for (let d of e) o.push(vbe(r, d));
        break;
      case "enum":
        for (let d of e) o.push(Yqe(r.enum, d, t.enumAsInteger));
        break;
      case "message":
        for (let d of e) o.push(Tre(d, t));
        break;
    }
    return t.alwaysEmitImplicit || o.length > 0 ? o : void 0;
  }
  function Yqe(e, t, r) {
    var o;
    if (typeof t != "number")
      throw Error(
        `cannot encode ${e} to JSON: expected number, got ${(0, l2.formatVal)(t)}`,
      );
    if (e.typeName == "google.protobuf.NullValue") return null;
    if (r) return t;
    let d = e.value[t];
    return (o = d === null || d === void 0 ? void 0 : d.name) !== null &&
      o !== void 0
      ? o
      : t;
  }
  function vbe(e, t) {
    var r, o, d, p, _, E;
    switch (e.scalar) {
      case AT.ScalarType.INT32:
      case AT.ScalarType.SFIXED32:
      case AT.ScalarType.SINT32:
      case AT.ScalarType.FIXED32:
      case AT.ScalarType.UINT32:
        if (typeof t != "number")
          throw Error(
            `cannot encode ${e} to JSON: ${(r = (0, l2.checkField)(e, t)) === null || r === void 0 ? void 0 : r.message}`,
          );
        return t;
      case AT.ScalarType.FLOAT:
      case AT.ScalarType.DOUBLE:
        if (typeof t != "number")
          throw Error(
            `cannot encode ${e} to JSON: ${(o = (0, l2.checkField)(e, t)) === null || o === void 0 ? void 0 : o.message}`,
          );
        if (Number.isNaN(t)) return "NaN";
        if (t === Number.POSITIVE_INFINITY) return "Infinity";
        if (t === Number.NEGATIVE_INFINITY) return "-Infinity";
        return t;
      case AT.ScalarType.STRING:
        if (typeof t != "string")
          throw Error(
            `cannot encode ${e} to JSON: ${(d = (0, l2.checkField)(e, t)) === null || d === void 0 ? void 0 : d.message}`,
          );
        return t;
      case AT.ScalarType.BOOL:
        if (typeof t != "boolean")
          throw Error(
            `cannot encode ${e} to JSON: ${(p = (0, l2.checkField)(e, t)) === null || p === void 0 ? void 0 : p.message}`,
          );
        return t;
      case AT.ScalarType.UINT64:
      case AT.ScalarType.FIXED64:
      case AT.ScalarType.INT64:
      case AT.ScalarType.SFIXED64:
      case AT.ScalarType.SINT64:
        if (
          typeof t == "bigint" ||
          typeof t == "string" ||
          (typeof t == "number" && Number.isInteger(t))
        )
          return t.toString();
        throw Error(
          `cannot encode ${e} to JSON: ${(_ = (0, l2.checkField)(e, t)) === null || _ === void 0 ? void 0 : _.message}`,
        );
      case AT.ScalarType.BYTES:
        if (t instanceof Uint8Array) return (0, a$r.base64Encode)(t);
        throw Error(
          `cannot encode ${e} to JSON: ${(E = (0, l2.checkField)(e, t)) === null || E === void 0 ? void 0 : E.message}`,
        );
    }
  }
  function g$r(e, t) {
    return t.useProtoFieldName ? e.name : e.jsonName;
  }
  function PGt(e, t) {
    if (!e.desc.typeName.startsWith("google.protobuf.")) return;
    switch (e.desc.typeName) {
      case "google.protobuf.Any":
        return h$r(e.message, t);
      case "google.protobuf.Timestamp":
        return b$r(e.message);
      case "google.protobuf.Duration":
        return y$r(e.message);
      case "google.protobuf.FieldMask":
        return _$r(e.message);
      case "google.protobuf.Struct":
        return OGt(e.message);
      case "google.protobuf.Value":
        return Xqe(e.message);
      case "google.protobuf.ListValue":
        return DGt(e.message);
      default:
        if ((0, TGt.isWrapperDesc)(e.desc)) {
          let r = e.desc.fields[0];
          return vbe(r, e.get(r));
        }
        return;
    }
  }
  function h$r(e, t) {
    if (e.typeUrl === "") return {};
    let { registry: r } = t,
      o,
      d;
    if (r) {
      if (((o = (0, i$r.anyUnpack)(e, r)), o)) d = r.getMessage(o.$typeName);
    }
    if (!d || !o)
      throw Error(
        `cannot encode message ${e.$typeName} to JSON: "${e.typeUrl}" is not in the type registry`,
      );
    let p = (0, wGt.reflect)(d, o),
      _ = (0, TGt.hasCustomJsonRepresentation)(d)
        ? { value: PGt(p, t) }
        : Tre(p, t);
    return ((_["@type"] = e.typeUrl), _);
  }
  function y$r(e) {
    let t = Number(e.seconds),
      r = e.nanos;
    if (t > 315576000000 || t < -315576000000)
      throw Error(
        `cannot encode message ${e.$typeName} to JSON: value out of range`,
      );
    if ((t > 0 && r < 0) || (t < 0 && r > 0))
      throw Error(
        `cannot encode message ${e.$typeName} to JSON: nanos sign must match seconds sign`,
      );
    let o = e.seconds.toString();
    if (r !== 0) {
      let d = Math.abs(r).toString();
      if (((d = "0".repeat(9 - d.length) + d), d.substring(3) === "000000"))
        d = d.substring(0, 3);
      else if (d.substring(6) === "000") d = d.substring(0, 6);
      if (((o += "." + d), r < 0 && t == 0)) o = "-" + o;
    }
    return o + "s";
  }
  function _$r(e) {
    return e.paths
      .map((t) => {
        if ((0, Kqe.protoSnakeCase)((0, Kqe.protoCamelCase)(t)) !== t)
          throw Error(
            `cannot encode message ${e.$typeName} to JSON: lowerCamelCase of path name "${t}" is irreversible`,
          );
        return (0, Kqe.protoCamelCase)(t);
      })
      .join(",");
  }
  function OGt(e) {
    let t = {};
    for (let [r, o] of Object.entries(e.fields)) t[r] = Xqe(o);
    return t;
  }
  function Xqe(e) {
    switch (e.kind.case) {
      case "nullValue":
        return null;
      case "numberValue":
        if (!Number.isFinite(e.kind.value))
          throw Error(`${e.$typeName} cannot be NaN or Infinity`);
        return e.kind.value;
      case "boolValue":
        return e.kind.value;
      case "stringValue":
        return e.kind.value;
      case "structValue":
        return OGt(e.kind.value);
      case "listValue":
        return DGt(e.kind.value);
      default:
        throw Error(`${e.$typeName} must have a value`);
    }
  }
  function DGt(e) {
    return e.values.map(Xqe);
  }
  function b$r(e) {
    let t = Number(e.seconds) * 1000;
    if (
      t < Date.parse("0001-01-01T00:00:00Z") ||
      t > Date.parse("9999-12-31T23:59:59Z")
    )
      throw Error(
        `cannot encode message ${e.$typeName} to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`,
      );
    if (e.nanos < 0)
      throw Error(
        `cannot encode message ${e.$typeName} to JSON: nanos must not be negative`,
      );
    if (e.nanos > 999999999)
      throw Error(
        `cannot encode message ${e.$typeName} to JSON: nanos must not be greater than 99999999`,
      );
    let r = "Z";
    if (e.nanos > 0) {
      let o = (e.nanos + 1e9).toString().substring(1);
      if (o.substring(3) === "000000") r = "." + o.substring(0, 3) + "Z";
      else if (o.substring(6) === "000") r = "." + o.substring(0, 6) + "Z";
      else r = "." + o + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", r);
  }
});
var JGt = commonJS(function (QGt) {
  Object.defineProperty(QGt, "__esModule", { value: !0 });
  QGt.fromJsonString = v$r;
  QGt.mergeFromJsonString = C$r;
  QGt.fromJson = GGt;
  QGt.mergeFromJson = zGt;
  QGt.enumFromJson = x$r;
  QGt.isEnumJson = A$r;
  var Av = dE(),
    jGt = fM(),
    Cbe = FB(),
    vre = mM(),
    wN = fte(),
    Cx = obe(),
    E$r = n2(),
    T$r = bte(),
    UB = mE(),
    FGt = Ate(),
    $Gt = { ignoreUnknownFields: !1 };
  function WGt(e) {
    return e ? Object.assign(Object.assign({}, $Gt), e) : $Gt;
  }
  function v$r(e, t, r) {
    return GGt(e, KGt(t, e.typeName), r);
  }
  function C$r(e, t, r, o) {
    return zGt(e, t, KGt(r, e.typeName), o);
  }
  function GGt(e, t, r) {
    let o = (0, vre.reflect)(e);
    try {
      j5(o, t, WGt(r));
    } catch (d) {
      if ((0, wN.isFieldError)(d))
        throw Error(`cannot decode ${d.field()} from JSON: ${d.message}`, {
          cause: d,
        });
      throw d;
    }
    return o.message;
  }
  function zGt(e, t, r, o) {
    try {
      j5((0, vre.reflect)(e, t), r, WGt(o));
    } catch (d) {
      if ((0, wN.isFieldError)(d))
        throw Error(`cannot decode ${d.field()} from JSON: ${d.message}`, {
          cause: d,
        });
      throw d;
    }
    return t;
  }
  function x$r(e, t) {
    return Jqe(e, t, !1);
  }
  function A$r(e, t) {
    return e.values.find((r) => r.name === t) !== void 0;
  }
  var Qqe = new WeakMap();
  function R$r(e, t) {
    var r;
    if (!Qqe.has(e)) {
      let o = new Map();
      for (let d of e.fields) o.set(d.name, d).set(d.jsonName, d);
      Qqe.set(e, o);
    }
    return (r = Qqe.get(e)) === null || r === void 0 ? void 0 : r.get(t);
  }
  function j5(e, t, r) {
    var o;
    if (L$r(e, t, r)) return;
    if (t == null || Array.isArray(t) || typeof t != "object")
      throw Error(`cannot decode ${e.desc} from JSON: ${(0, Cx.formatVal)(t)}`);
    let d = new Map();
    for (let [p, _] of Object.entries(t)) {
      let E = R$r(e.desc, p);
      if (E) {
        if (E.oneof) {
          if (_ === null && E.fieldKind == "scalar") continue;
          let C = d.get(E.oneof);
          if (C !== void 0)
            throw new wN.FieldError(
              E.oneof,
              `oneof set multiple times by ${C.name} and ${E.name}`,
            );
          d.set(E.oneof, E);
        }
        BGt(e, E, _, r);
      } else {
        let C = void 0;
        if (
          p.startsWith("[") &&
          p.endsWith("]") &&
          (C =
            (o = r.registry) === null || o === void 0
              ? void 0
              : o.getExtension(p.substring(1, p.length - 1))) &&
          C.extendee.typeName === e.desc.typeName
        ) {
          let [I, D, N] = (0, FGt.createExtensionContainer)(C);
          (BGt(I, D, _, r), (0, FGt.setExtension)(e.message, C, N()));
        }
        if (!C && !r.ignoreUnknownFields)
          throw Error(
            `cannot decode ${e.desc} from JSON: key "${p}" is unknown`,
          );
      }
    }
  }
  function BGt(e, t, r, o) {
    switch (t.fieldKind) {
      case "scalar":
        D$r(e, t, r);
        break;
      case "enum":
        O$r(e, t, r, o);
        break;
      case "message":
        M$r(e, t, r, o);
        break;
      case "list":
        I$r(e.get(t), r, o);
        break;
      case "map":
        P$r(e.get(t), r, o);
        break;
    }
  }
  function qGt(e, t, r) {
    if (e.scalar && t !== null) return Zqe(e, t);
    if (e.message && !xbe(e, t)) {
      let o = (0, vre.reflect)(e.message);
      return (j5(o, t, r), o);
    }
    if (e.enum && !xbe(e, t)) return Jqe(e.enum, t, r.ignoreUnknownFields);
    throw new wN.FieldError(
      e,
      `${e.fieldKind === "list" ? "list item" : "map value"} must not be null`,
    );
  }
  function P$r(e, t, r) {
    if (t === null) return;
    let o = e.field();
    if (typeof t != "object" || Array.isArray(t))
      throw new wN.FieldError(
        o,
        "expected object, got " + (0, Cx.formatVal)(t),
      );
    for (let [d, p] of Object.entries(t)) {
      let _ = N$r(o.mapKey, d),
        E = qGt(o, p, r);
      if (E !== Abe) e.set(_, E);
    }
  }
  function I$r(e, t, r) {
    if (t === null) return;
    let o = e.field();
    if (!Array.isArray(t))
      throw new wN.FieldError(o, "expected Array, got " + (0, Cx.formatVal)(t));
    for (let d of t) {
      let p = qGt(o, d, r);
      if (p !== Abe) e.add(p);
    }
  }
  function M$r(e, t, r, o) {
    if (xbe(t, r)) {
      e.clear(t);
      return;
    }
    let d = e.isSet(t) ? e.get(t) : (0, vre.reflect)(t.message);
    (j5(d, r, o), e.set(t, d));
  }
  function O$r(e, t, r, o) {
    if (xbe(t, r)) {
      e.clear(t);
      return;
    }
    let d = Jqe(t.enum, r, o.ignoreUnknownFields);
    if (d !== Abe) e.set(t, d);
  }
  function D$r(e, t, r) {
    if (r === null) e.clear(t);
    else e.set(t, Zqe(t, r));
  }
  function xbe(e, t) {
    var r, o;
    return (
      t === null &&
      ((r = e.message) === null || r === void 0 ? void 0 : r.typeName) !=
        "google.protobuf.Value" &&
      ((o = e.enum) === null || o === void 0 ? void 0 : o.typeName) !=
        "google.protobuf.NullValue"
    );
  }
  var Abe = Symbol();
  function Jqe(e, t, r) {
    if (t === null) return e.values[0].number;
    switch (typeof t) {
      case "number":
        if (Number.isInteger(t)) return t;
        break;
      case "string":
        let o = e.values.find((d) => d.name === t);
        if (o !== void 0) return o.number;
        if (r) return Abe;
        break;
    }
    throw Error(`cannot decode ${e} from JSON: ${(0, Cx.formatVal)(t)}`);
  }
  function Zqe(e, t) {
    switch (e.scalar) {
      case Av.ScalarType.DOUBLE:
      case Av.ScalarType.FLOAT:
        if (t === "NaN") return NaN;
        if (t === "Infinity") return Number.POSITIVE_INFINITY;
        if (t === "-Infinity") return Number.NEGATIVE_INFINITY;
        if (typeof t == "number") {
          if (Number.isNaN(t))
            throw new wN.FieldError(e, "unexpected NaN number");
          if (!Number.isFinite(t))
            throw new wN.FieldError(e, "unexpected infinite number");
          break;
        }
        if (typeof t == "string") {
          if (t === "") break;
          if (t.trim().length !== t.length) break;
          let r = Number(t);
          if (!Number.isFinite(r)) break;
          return r;
        }
        break;
      case Av.ScalarType.INT32:
      case Av.ScalarType.FIXED32:
      case Av.ScalarType.SFIXED32:
      case Av.ScalarType.SINT32:
      case Av.ScalarType.UINT32:
        return VGt(t);
      case Av.ScalarType.BYTES:
        if (typeof t == "string") {
          if (t === "") return new Uint8Array(0);
          try {
            return (0, T$r.base64Decode)(t);
          } catch (r) {
            let o = r instanceof Error ? r.message : String(r);
            throw new wN.FieldError(e, o);
          }
        }
        break;
    }
    return t;
  }
  function N$r(e, t) {
    switch (e) {
      case Av.ScalarType.BOOL:
        switch (t) {
          case "true":
            return !0;
          case "false":
            return !1;
        }
        return t;
      case Av.ScalarType.INT32:
      case Av.ScalarType.FIXED32:
      case Av.ScalarType.UINT32:
      case Av.ScalarType.SFIXED32:
      case Av.ScalarType.SINT32:
        return VGt(t);
      default:
        return t;
    }
  }
  function VGt(e) {
    if (typeof e == "string") {
      if (e === "") return e;
      if (e.trim().length !== e.length) return e;
      let t = Number(e);
      if (Number.isNaN(t)) return e;
      return t;
    }
    return e;
  }
  function KGt(e, t) {
    try {
      return JSON.parse(e);
    } catch (r) {
      let o = r instanceof Error ? r.message : String(r);
      throw Error(`cannot decode message ${t} from JSON: ${o}`, { cause: r });
    }
  }
  function L$r(e, t, r) {
    if (!e.desc.typeName.startsWith("google.protobuf.")) return !1;
    switch (e.desc.typeName) {
      case "google.protobuf.Any":
        return (F$r(e.message, t, r), !0);
      case "google.protobuf.Timestamp":
        return ($$r(e.message, t), !0);
      case "google.protobuf.Duration":
        return (B$r(e.message, t), !0);
      case "google.protobuf.FieldMask":
        return (U$r(e.message, t), !0);
      case "google.protobuf.Struct":
        return (YGt(e.message, t), !0);
      case "google.protobuf.Value":
        return (e4e(e.message, t), !0);
      case "google.protobuf.ListValue":
        return (XGt(e.message, t), !0);
      default:
        if ((0, UB.isWrapperDesc)(e.desc)) {
          let o = e.desc.fields[0];
          if (t === null) e.clear(o);
          else e.set(o, Zqe(o, t));
          return !0;
        }
        return !1;
    }
  }
  function F$r(e, t, r) {
    var o;
    if (t === null || Array.isArray(t) || typeof t != "object")
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: expected object but got ${(0, Cx.formatVal)(t)}`,
      );
    if (Object.keys(t).length == 0) return;
    let d = t["@type"];
    if (typeof d != "string" || d == "")
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: "@type" is empty`,
      );
    let p = d.includes("/") ? d.substring(d.lastIndexOf("/") + 1) : d;
    if (!p.length)
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: "@type" is invalid`,
      );
    let _ =
      (o = r.registry) === null || o === void 0 ? void 0 : o.getMessage(p);
    if (!_)
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: ${d} is not in the type registry`,
      );
    let E = (0, vre.reflect)(_);
    if (
      (0, UB.hasCustomJsonRepresentation)(_) &&
      Object.prototype.hasOwnProperty.call(t, "value")
    ) {
      let C = t.value;
      j5(E, C, r);
    } else {
      let C = Object.assign({}, t);
      (delete C["@type"], j5(E, C, r));
    }
    (0, UB.anyPack)(E.desc, E.message, e);
  }
  function $$r(e, t) {
    if (typeof t !== "string")
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: ${(0, Cx.formatVal)(t)}`,
      );
    let r = t.match(
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]{1,9}))?(?:Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
    );
    if (!r)
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`,
      );
    let o = Date.parse(
      r[1] +
        "-" +
        r[2] +
        "-" +
        r[3] +
        "T" +
        r[4] +
        ":" +
        r[5] +
        ":" +
        r[6] +
        (r[8] ? r[8] : "Z"),
    );
    if (Number.isNaN(o))
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`,
      );
    if (
      o < Date.parse("0001-01-01T00:00:00Z") ||
      o > Date.parse("9999-12-31T23:59:59Z")
    )
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`,
      );
    if (((e.seconds = jGt.protoInt64.parse(o / 1000)), (e.nanos = 0), r[7]))
      e.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9;
  }
  function B$r(e, t) {
    if (typeof t !== "string")
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: ${(0, Cx.formatVal)(t)}`,
      );
    let r = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null)
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: ${(0, Cx.formatVal)(t)}`,
      );
    let o = Number(r[1]);
    if (o > 315576000000 || o < -315576000000)
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: ${(0, Cx.formatVal)(t)}`,
      );
    if (((e.seconds = jGt.protoInt64.parse(o)), typeof r[2] !== "string"))
      return;
    let d = r[2] + "0".repeat(9 - r[2].length);
    if (((e.nanos = parseInt(d)), o < 0 || Object.is(o, -0)))
      e.nanos = -e.nanos;
  }
  function U$r(e, t) {
    if (typeof t !== "string")
      throw Error(
        `cannot decode message ${e.$typeName} from JSON: ${(0, Cx.formatVal)(t)}`,
      );
    if (t === "") return;
    e.paths = t.split(",").map((r) => {
      if (r.includes("_"))
        throw Error(
          `cannot decode message ${e.$typeName} from JSON: path names must be lowerCamelCase`,
        );
      return (0, E$r.protoSnakeCase)(r);
    });
  }
  function YGt(e, t) {
    if (typeof t != "object" || t == null || Array.isArray(t))
      throw Error(
        `cannot decode message ${e.$typeName} from JSON ${(0, Cx.formatVal)(t)}`,
      );
    for (let [r, o] of Object.entries(t)) {
      let d = (0, Cbe.create)(UB.ValueSchema);
      (e4e(d, o), (e.fields[r] = d));
    }
  }
  function e4e(e, t) {
    switch (typeof t) {
      case "number":
        e.kind = { case: "numberValue", value: t };
        break;
      case "string":
        e.kind = { case: "stringValue", value: t };
        break;
      case "boolean":
        e.kind = { case: "boolValue", value: t };
        break;
      case "object":
        if (t === null)
          e.kind = { case: "nullValue", value: UB.NullValue.NULL_VALUE };
        else if (Array.isArray(t)) {
          let r = (0, Cbe.create)(UB.ListValueSchema);
          (XGt(r, t), (e.kind = { case: "listValue", value: r }));
        } else {
          let r = (0, Cbe.create)(UB.StructSchema);
          (YGt(r, t), (e.kind = { case: "structValue", value: r }));
        }
        break;
      default:
        throw Error(
          `cannot decode message ${e.$typeName} from JSON ${(0, Cx.formatVal)(t)}`,
        );
    }
    return e;
  }
  function XGt(e, t) {
    if (!Array.isArray(t))
      throw Error(
        `cannot decode message ${e.$typeName} from JSON ${(0, Cx.formatVal)(t)}`,
      );
    for (let r of t) {
      let o = (0, Cbe.create)(UB.ValueSchema);
      (e4e(o, r), e.values.push(o));
    }
  }
});
var bzt = commonJS(function (izt) {
  Object.defineProperty(izt, "__esModule", { value: !0 });
  izt.merge = V$r;
  var ZGt = mM();
  function V$r(e, t, r) {
    ezt((0, ZGt.reflect)(e, t), (0, ZGt.reflect)(e, r));
  }
  function ezt(e, t) {
    var r, o;
    let d = t.message.$unknown;
    if (d !== void 0 && d.length > 0)
      (((r = (o = e.message).$unknown) !== null && r !== void 0) ||
        (o.$unknown = []),
        e.message.$unknown.push(...d));
    for (let p of e.fields) {
      if (!t.isSet(p)) continue;
      switch (p.fieldKind) {
        case "scalar":
        case "enum":
          e.set(p, t.get(p));
          break;
        case "message":
          if (e.isSet(p)) ezt(e.get(p), t.get(p));
          else e.set(p, t.get(p));
          break;
        case "list":
          let _ = e.get(p);
          for (let C of t.get(p)) _.add(C);
          break;
        case "map":
          let E = e.get(p);
          for (let [C, I] of t.get(p)) E.set(C, I);
          break;
      }
    }
  }
});
var Rv = commonJS(function (Rm) {
  var Y$r =
      (Rm && Rm.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var d = Object.getOwnPropertyDescriptor(t, r);
            if (
              !d ||
              ("get" in d ? !t.__esModule : d.writable || d.configurable)
            )
              d = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, d);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    $A =
      (Rm && Rm.__exportStar) ||
      function (e, t) {
        for (var r in e)
          if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r))
            Y$r(t, e, r);
      };
  Object.defineProperty(Rm, "__esModule", { value: !0 });
  Rm.getOption =
    Rm.hasOption =
    Rm.clearExtension =
    Rm.setExtension =
    Rm.getExtension =
    Rm.hasExtension =
    Rm.mergeFromBinary =
    Rm.fromBinary =
    Rm.toBinary =
      void 0;
  $A(qFt(), Rm);
  $A(X_e(), Rm);
  $A(FB(), Rm);
  $A(Eqe(), Rm);
  $A(dE(), Rm);
  $A(Z1t(), Rm);
  $A(Vqe(), Rm);
  $A(fbe(), Rm);
  var X$r = D5();
  Object.defineProperty(Rm, "toBinary", {
    enumerable: !0,
    get: function () {
      return X$r.toBinary;
    },
  });
  var Szt = O5();
  Object.defineProperty(Rm, "fromBinary", {
    enumerable: !0,
    get: function () {
      return Szt.fromBinary;
    },
  });
  Object.defineProperty(Rm, "mergeFromBinary", {
    enumerable: !0,
    get: function () {
      return Szt.mergeFromBinary;
    },
  });
  $A(LGt(), Rm);
  $A(JGt(), Rm);
  $A(bzt(), Rm);
  var G5 = Ate();
  Object.defineProperty(Rm, "hasExtension", {
    enumerable: !0,
    get: function () {
      return G5.hasExtension;
    },
  });
  Object.defineProperty(Rm, "getExtension", {
    enumerable: !0,
    get: function () {
      return G5.getExtension;
    },
  });
  Object.defineProperty(Rm, "setExtension", {
    enumerable: !0,
    get: function () {
      return G5.setExtension;
    },
  });
  Object.defineProperty(Rm, "clearExtension", {
    enumerable: !0,
    get: function () {
      return G5.clearExtension;
    },
  });
  Object.defineProperty(Rm, "hasOption", {
    enumerable: !0,
    get: function () {
      return G5.hasOption;
    },
  });
  Object.defineProperty(Rm, "getOption", {
    enumerable: !0,
    get: function () {
      return G5.getOption;
    },
  });
  $A(fM(), Rm);
});
var Cre = commonJS(function (wzt) {
  Object.defineProperty(wzt, "__esModule", { value: !0 });
  wzt.celFromScalar = J$r;
  var c2 = Rv(),
    Q$r = NA();
  function J$r(e, t) {
    switch (e) {
      case c2.ScalarType.UINT32:
      case c2.ScalarType.UINT64:
      case c2.ScalarType.FIXED32:
      case c2.ScalarType.FIXED64:
        return (0, Q$r.celUint)(BigInt(t));
      case c2.ScalarType.INT32:
      case c2.ScalarType.SINT32:
      case c2.ScalarType.SFIXED32:
        return BigInt(t);
      default:
        return t;
    }
  }
});
var hM = commonJS(function (Gzt) {
  Object.defineProperty(Gzt, "__esModule", { value: !0 });
  Gzt.EMPTY_LIST = void 0;
  Gzt.celList = Azt;
  Gzt.celListConcat = nBr;
  Gzt.isCelList = rBr;
  var eBr = uN(),
    tBr = Cre(),
    t4e = TN(),
    Rbe = Symbol.for("@bufbuild/cel/list");
  function Azt(e) {
    if ((0, eBr.isReflectList)(e)) return new $zt(e);
    return new Rzt(e);
  }
  function nBr(...e) {
    return new Bzt(e);
  }
  function rBr(e) {
    return typeof e === "object" && e !== null && Rbe in e;
  }
  class Rzt {
    _array;
    [Rbe] = {};
    constructor(e) {
      this._array = e;
    }
    get size() {
      return this._array.length;
    }
    get(e) {
      if (e < 0 || e >= this.size) return;
      return (0, t4e.toCel)(this._array[e]);
    }
    *values() {
      for (let e of this._array.values()) yield (0, t4e.toCel)(e);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  }
  class $zt {
    _list;
    [Rbe] = {};
    constructor(e) {
      this._list = e;
    }
    get size() {
      return this._list.size;
    }
    get(e) {
      let t = this._list.get(e);
      if (t === void 0) return;
      return Czt(this._list.field(), t);
    }
    *values() {
      for (let e of this._list) yield Czt(this._list.field(), e);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  }
  class Bzt {
    _lists;
    [Rbe] = {};
    _size;
    constructor(e) {
      this._lists = e;
      let t = 0;
      for (let r of e) t += r.size;
      this._size = t;
    }
    get size() {
      return this._size;
    }
    get(e) {
      if (e < 0 || e >= this.size) return;
      for (let t of this._lists) {
        if (e < t.size) return t.get(e);
        e = e - t.size;
      }
      return;
    }
    *values() {
      for (let e of this._lists) yield* e.values();
    }
    [Symbol.iterator]() {
      return this.values();
    }
  }
  function Czt(e, t) {
    switch (e.listKind) {
      case "enum":
        return BigInt(t);
      case "message":
        return (0, t4e.reflectMsgToCel)(t);
      case "scalar":
        return (0, tBr.celFromScalar)(e.scalar, t);
    }
  }
  Gzt.EMPTY_LIST = Azt([]);
});
var z5 = commonJS(function (nqt) {
  Object.defineProperty(nqt, "__esModule", { value: !0 });
  nqt.setEvalContext = Zzt;
  nqt.getEvalContext = eqt;
  nqt.withEvalContext = aBr;
  nqt.getMsgDesc = lBr;
  var xre = [];
  function Zzt(e) {
    return (xre.push(e), () => xre.pop());
  }
  function eqt() {
    if (xre.length === 0)
      throw Error("cannot use `getEvalContext` outside of an evaluation");
    return xre[xre.length - 1];
  }
  function aBr(e, t) {
    return {
      id: t.id,
      eval(r) {
        let o = Zzt(e);
        try {
          return t.eval(r);
        } finally {
          o();
        }
      },
    };
  }
  function lBr(e) {
    let t = eqt().registry.getMessage(e);
    if (!t) throw Error(`Message ${e} not found in registry`);
    return t;
  }
});
var xx = commonJS(function (oqt) {
  Object.defineProperty(oqt, "__esModule", { value: !0 });
  oqt.DURATION = oqt.TIMESTAMP = oqt.CelScalar = void 0;
  oqt.mapType = Pbe;
  oqt.listType = Ibe;
  oqt.objectType = Are;
  oqt.celType = yBr;
  oqt.isCelType = _Br;
  oqt.isObjectCelType = n4e;
  var pBr = hM(),
    mBr = xN(),
    gBr = NA(),
    hBr = uN(),
    Mk = mE(),
    Rre = Symbol.for("@bufbuild/cel/type");
  oqt.CelScalar = {
    INT: CN("int"),
    UINT: CN("uint"),
    BOOL: CN("bool"),
    STRING: CN("string"),
    BYTES: CN("bytes"),
    DOUBLE: CN("double"),
    NULL: CN("null_type"),
    DYN: CN("dyn"),
    TYPE: CN("type"),
  };
  oqt.TIMESTAMP = Are(Mk.TimestampSchema);
  oqt.DURATION = Are(Mk.DurationSchema);
  function Pbe(e, t) {
    return {
      [Rre]: {},
      kind: "map",
      key: e,
      value: t,
      name: "map",
      toString() {
        return `map(${e}, ${t})`;
      },
    };
  }
  function Ibe(e) {
    return {
      [Rre]: {},
      kind: "list",
      element: e,
      name: "list",
      toString() {
        return `list(${e})`;
      },
    };
  }
  function Are(e) {
    let t, r;
    if (typeof e === "string") ((t = e), (r = void 0));
    else ((t = e.typeName), (r = e));
    return {
      [Rre]: {},
      kind: "object",
      desc: r,
      name: t,
      toString() {
        return t;
      },
    };
  }
  function CN(e) {
    return {
      [Rre]: {},
      kind: "scalar",
      scalar: e,
      name: e,
      toString() {
        return e;
      },
    };
  }
  function yBr(e) {
    switch (typeof e) {
      case "bigint":
        return oqt.CelScalar.INT;
      case "boolean":
        return oqt.CelScalar.BOOL;
      case "number":
        return oqt.CelScalar.DOUBLE;
      case "string":
        return oqt.CelScalar.STRING;
      case "object":
        switch (!0) {
          case e === null:
            return oqt.CelScalar.NULL;
          case e instanceof Uint8Array:
            return oqt.CelScalar.BYTES;
          case (0, hBr.isReflectMessage)(e):
            return bBr(e);
          case (0, pBr.isCelList)(e):
            return Ibe(oqt.CelScalar.DYN);
          case (0, mBr.isCelMap)(e):
            return Pbe(oqt.CelScalar.DYN, oqt.CelScalar.DYN);
          case (0, gBr.isCelUint)(e):
            return oqt.CelScalar.UINT;
          default:
            if (n4e(e)) return oqt.CelScalar.TYPE;
        }
    }
    throw Error(`Not a CEL value: ${e}`);
  }
  function _Br(e) {
    return typeof e === "object" && e !== null && n4e(e);
  }
  function n4e(e) {
    return Rre in e;
  }
  function bBr(e) {
    let t = e.desc.typeName;
    if (SBr(e)) {
      if (((t = kBr(e.message.typeUrl)), t === Mk.ValueSchema.typeName)) {
        let r = (0, Mk.anyUnpack)(e.message, Mk.ValueSchema);
        return r ? rqt(r) : oqt.CelScalar.NULL;
      }
    }
    switch (t) {
      case Mk.FloatValueSchema.typeName:
      case Mk.DoubleValueSchema.typeName:
        return oqt.CelScalar.DOUBLE;
      case Mk.UInt64ValueSchema.typeName:
      case Mk.UInt32ValueSchema.typeName:
        return oqt.CelScalar.UINT;
      case Mk.Int32ValueSchema.typeName:
      case Mk.Int64ValueSchema.typeName:
        return oqt.CelScalar.INT;
      case Mk.StringValueSchema.typeName:
        return oqt.CelScalar.STRING;
      case Mk.BytesValueSchema.typeName:
        return oqt.CelScalar.BYTES;
      case Mk.BoolValueSchema.typeName:
        return oqt.CelScalar.BOOL;
      case Mk.StructSchema.typeName:
        return Pbe(oqt.CelScalar.STRING, oqt.CelScalar.DYN);
      case Mk.ListValueSchema.typeName:
        return Ibe(oqt.CelScalar.DYN);
      case Mk.ValueSchema.typeName:
        return rqt(e.message);
    }
    return t === e.desc.typeName ? Are(e.desc) : Are(t);
  }
  function rqt(e) {
    switch (e.kind.case) {
      case "boolValue":
        return oqt.CelScalar.BOOL;
      case "listValue":
        return Ibe(oqt.CelScalar.DYN);
      case "nullValue":
      case void 0:
        return oqt.CelScalar.NULL;
      case "numberValue":
        return oqt.CelScalar.DOUBLE;
      case "stringValue":
        return oqt.CelScalar.STRING;
      case "structValue":
        return Pbe(oqt.CelScalar.STRING, oqt.CelScalar.DYN);
    }
  }
  function SBr(e) {
    return e.desc.typeName === Mk.AnySchema.typeName;
  }
  function kBr(e) {
    let t = e.lastIndexOf("/"),
      r = t >= 0 ? e.substring(t + 1) : e;
    if (!r.length) throw Error(`invalid type url: ${e}`);
    return r;
  }
});
var TN = commonJS(function (uqt) {
  Object.defineProperty(uqt, "__esModule", { value: !0 });
  uqt.toCel = PBr;
  uqt.unwrapAny = IBr;
  uqt.reflectMsgToCel = iqt;
  var r4e = NA(),
    Mbe = xN(),
    o4e = hM(),
    q5 = uN(),
    Obe = Rv(),
    s4e = z5(),
    AN = mE(),
    RBr = xx();
  function PBr(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        return e;
      case "object":
        break;
      default:
        throw Error(`unsupported input ${typeof e}`);
    }
    switch (!0) {
      case e === null:
      case e instanceof Uint8Array:
      case (0, o4e.isCelList)(e):
      case (0, Mbe.isCelMap)(e):
      case (0, r4e.isCelUint)(e):
      case (0, RBr.isCelType)(e):
        return e;
    }
    if (OBr(e) || (0, q5.isReflectList)(e)) return (0, o4e.celList)(e);
    if (DBr(e) || (0, q5.isReflectMap)(e)) return (0, Mbe.celMap)(e);
    if ((0, Obe.isMessage)(e)) {
      let t = i4e(e);
      if (t !== void 0) return t;
      return (0, q5.reflect)((0, s4e.getMsgDesc)(e.$typeName), e);
    }
    if ((0, q5.isReflectMessage)(e)) return iqt(e);
    if (e.constructor.name === "Object")
      return (0, Mbe.celMap)(new Map(Object.entries(e)));
    throw Error(`Unsupported input ${e}`);
  }
  function IBr(e) {
    if (!MBr(e)) return e;
    let t = (0, AN.anyUnpack)(e.message, (0, s4e.getEvalContext)().registry);
    if (t === void 0)
      throw Error(`invalid Any or ${e.message.typeUrl} not found in registry`);
    let r = i4e(t);
    if (r !== void 0) return r;
    return (0, q5.reflect)((0, s4e.getMsgDesc)(t.$typeName), t);
  }
  function iqt(e) {
    let t = i4e(e.message);
    if (t !== void 0) return t;
    return e;
  }
  function MBr(e) {
    return (0, q5.isReflectMessage)(e, AN.AnySchema);
  }
  function OBr(e) {
    return Array.isArray(e);
  }
  function DBr(e) {
    return e instanceof Map;
  }
  function i4e(e) {
    if ((0, AN.isWrapper)(e)) return NBr(e);
    return LBr(e);
  }
  function NBr(e) {
    switch (e.$typeName) {
      case AN.Int32ValueSchema.typeName:
        return BigInt(e.value);
      case AN.UInt32ValueSchema.typeName:
        return (0, r4e.celUint)(BigInt(e.value));
      case AN.UInt64ValueSchema.typeName:
        return (0, r4e.celUint)(e.value);
    }
    return e.value;
  }
  function LBr(e) {
    switch (!0) {
      case (0, Obe.isMessage)(e, AN.StructSchema):
        return aqt(e);
      case (0, Obe.isMessage)(e, AN.ValueSchema):
        return lqt(e);
      case (0, Obe.isMessage)(e, AN.ListValueSchema):
        return cqt(e);
    }
    return;
  }
  function aqt(e) {
    let t = new Map();
    for (let [r, o] of Object.entries(e.fields)) t.set(r, lqt(o));
    return (0, Mbe.celMap)(t);
  }
  function lqt(e) {
    switch (e.kind.case) {
      case "boolValue":
      case "numberValue":
      case "stringValue":
        return e.kind.value;
      case "nullValue":
      case void 0:
        return null;
      case "structValue":
        return aqt(e.kind.value);
      case "listValue":
        return cqt(e.kind.value);
    }
  }
  function cqt(e) {
    return (0, o4e.celList)(e.values);
  }
});
var xN = commonJS(function (hqt) {
  Object.defineProperty(hqt, "__esModule", { value: !0 });
  hqt.EMPTY_MAP = void 0;
  hqt.celMap = pqt;
  hqt.isCelMap = HBr;
  var UBr = uN(),
    l4e = NA(),
    yM = Rv(),
    fqt = Cre(),
    V5 = TN(),
    c4e = Symbol.for("@bufbuild/cel/map");
  function pqt(e) {
    if ((0, UBr.isReflectMap)(e)) return new gqt(e);
    return new mqt(e);
  }
  function HBr(e) {
    return typeof e === "object" && e !== null && c4e in e;
  }
  class mqt {
    _map;
    [c4e] = {};
    constructor(e) {
      this._map = e;
    }
    get size() {
      return this._map.size;
    }
    get(e) {
      if ((0, l4e.isCelUint)(e)) e = e.value;
      if (typeof e === "number") {
        if (!Number.isInteger(e)) return;
        e = BigInt(e);
      }
      let t = this._map.get(e);
      if (t !== void 0) return (0, V5.toCel)(t);
      if (typeof e === "bigint")
        for (let r of this._map.keys()) {
          if (!(0, l4e.isCelUint)(r)) continue;
          if (r.value === e) return (0, V5.toCel)(this._map.get(r));
        }
      return;
    }
    has(e) {
      return this.get(e) != null;
    }
    forEach(e, t) {
      this._map.forEach((r, o, d) => e.call(t, (0, V5.toCel)(r), o, this));
    }
    *entries() {
      for (let [e, t] of this._map.entries()) yield [e, (0, V5.toCel)(t)];
    }
    keys() {
      return this._map.keys();
    }
    *values() {
      for (let e of this._map.values()) yield (0, V5.toCel)(e);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  }
  class gqt {
    _map;
    [c4e] = {};
    constructor(e) {
      this._map = e;
    }
    get size() {
      return this._map.size;
    }
    get(e) {
      let t = this._map.get(dqt(this._map.field(), e));
      if (t === void 0) return;
      return Dbe(this._map.field(), t);
    }
    has(e) {
      return this._map.has(dqt(this._map.field(), e));
    }
    forEach(e, t) {
      this._map.forEach((r, o, d) =>
        e.call(t, Dbe(this._map.field(), r), a4e(this._map.field(), o), this),
      );
    }
    *entries() {
      for (let [e, t] of this._map.entries())
        yield [a4e(this._map.field(), e), Dbe(this._map.field(), t)];
    }
    *keys() {
      for (let e of this._map.keys()) yield a4e(this._map.field(), e);
    }
    *values() {
      for (let e of this._map.keys()) yield Dbe(this._map.field(), e);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  }
  function dqt(e, t) {
    if ((0, l4e.isCelUint)(t)) t = t.value;
    switch (e.mapKey) {
      case yM.ScalarType.SINT32:
      case yM.ScalarType.INT32:
      case yM.ScalarType.FIXED32:
      case yM.ScalarType.UINT32:
      case yM.ScalarType.SFIXED32:
        if (typeof t === "bigint") return Number(t);
        return t;
      case yM.ScalarType.SINT64:
      case yM.ScalarType.INT64:
      case yM.ScalarType.FIXED64:
      case yM.ScalarType.UINT64:
      case yM.ScalarType.SFIXED64:
        if (t === "number" && Number.isInteger(t)) return BigInt(t);
        return t;
      default:
        return t;
    }
  }
  function a4e(e, t) {
    return (0, fqt.celFromScalar)(e.mapKey, t);
  }
  function Dbe(e, t) {
    switch (e.mapKind) {
      case "enum":
        return BigInt(t);
      case "message":
        return (0, V5.reflectMsgToCel)(t);
      case "scalar":
        return (0, fqt.celFromScalar)(e.scalar, t);
    }
  }
  hqt.EMPTY_MAP = pqt(new Map());
});
var Sqt = commonJS(function (bqt) {
  Object.defineProperty(bqt, "__esModule", { value: !0 });
  bqt.createRegistryWithWKT = zBr;
  var _qt = Rv(),
    Pre = mE(),
    GBr = (0, _qt.createRegistry)(
      Pre.TimestampSchema,
      Pre.DurationSchema,
      Pre.AnySchema,
      Pre.file_google_protobuf_wrappers,
      Pre.file_google_protobuf_struct,
    );
  function zBr(...e) {
    return (0, _qt.createRegistry)(GBr, ...e);
  }
});
var d4e = commonJS(function (kqt) {
  Object.defineProperty(kqt, "__esModule", { value: !0 });
  kqt.Namespace = void 0;
  class u4e {
    _name;
    _aliases;
    constructor(e = "") {
      ((this._name = e), (this._aliases = new Map()));
    }
    static ROOT = new u4e();
    name() {
      return this._name;
    }
    aliases() {
      return this._aliases;
    }
    resolveCandidateNames(e) {
      if (e.startsWith(".")) {
        let d = e.substring(1),
          p = this.findAlias(d);
        if (p !== void 0) return [p];
        return [d];
      }
      let t = this.findAlias(e);
      if (t !== void 0) return [t];
      if (this.name() === "") return [e];
      let r = this.name(),
        o = [r + "." + e];
      for (let d = r.lastIndexOf("."); d >= 0; d = r.lastIndexOf("."))
        ((r = r.substring(0, d)), o.push(r + "." + e));
      return (o.push(e), o);
    }
    findAlias(e) {
      let t = e,
        r = "",
        o = e.indexOf(".");
      if (o >= 0) ((t = e.substring(0, o)), (r = e.substring(o)));
      let d = this._aliases.get(t);
      if (d === void 0) return;
      return d + r;
    }
  }
  kqt.Namespace = u4e;
});
var xqt = commonJS(function (Cqt) {
  Object.defineProperty(Cqt, "__esModule", { value: !0 });
  Cqt.createResolver = KBr;
  var VBr = TN(),
    Eqt = Symbol.for("@bufbuild/cel/resolver");
  function KBr(...e) {
    let t = new Map();
    for (let r of e) {
      let o = YBr(r) || Array.isArray(r) ? r : [r];
      for (let d of o) {
        let p = t.get(d.name);
        if (p === void 0) ((p = []), t.set(d.name, p));
        p.push(d);
      }
    }
    return new Tqt(
      new Map(Array(...t.entries()).map(([r, o]) => [r, XBr(r, o)])),
    );
  }
  function YBr(e) {
    return typeof e === "object" && e !== null && Eqt in e;
  }
  class Tqt {
    _groups;
    [Eqt] = {};
    constructor(e) {
      this._groups = e;
    }
    *[Symbol.iterator]() {
      for (let e of this._groups.values()) yield* e;
    }
    find(e) {
      return this._groups.get(e);
    }
  }
  function XBr(e, t) {
    let r = [];
    for (let o of t) {
      for (let d = 0; d < r.length; d++)
        if (o.id === r[d].id) {
          r.splice(d, 1);
          break;
        }
      r.push(o);
    }
    return new vqt(e, r);
  }
  class vqt {
    _name;
    _funcs;
    constructor(e, t) {
      ((this._name = e), (this._funcs = t));
    }
    *[Symbol.iterator]() {
      yield* this._funcs;
    }
    get name() {
      return this._name;
    }
    call(e, t, r) {
      r = r.map((o) => (0, VBr.unwrapAny)(o));
      for (let o of this._funcs) {
        let d = o.call(e, t, r);
        if (d !== void 0) return d;
      }
      return;
    }
  }
});
var Nbe = commonJS(function (Aqt) {
  Object.defineProperty(Aqt, "__esModule", { value: !0 });
  Aqt.SUBTRACT =
    Aqt.OPT_SELECT =
    Aqt.OPT_INDEX =
    Aqt.OLD_NOT_STRICTLY_FALSE =
    Aqt.OLD_IN =
    Aqt.NOT_STRICTLY_FALSE =
    Aqt.NOT_EQUALS =
    Aqt.NEGATE =
    Aqt.MULTIPLY =
    Aqt.MODULO =
    Aqt.MAP =
    Aqt.LOGICAL_OR =
    Aqt.LOGICAL_NOT =
    Aqt.LOGICAL_AND =
    Aqt.LESS_EQUALS =
    Aqt.LESS =
    Aqt.INDEX =
    Aqt.IN =
    Aqt.HAS =
    Aqt.GREATER_EQUALS =
    Aqt.GREATER =
    Aqt.FILTER =
    Aqt.EXISTS_ONE =
    Aqt.EXISTS =
    Aqt.EQUALS =
    Aqt.DIVIDE =
    Aqt.CONDITIONAL =
    Aqt.ALL =
    Aqt.ADD =
      void 0;
  Aqt.ADD = "_+_";
  Aqt.ALL = "all";
  Aqt.CONDITIONAL = "_?_:_";
  Aqt.DIVIDE = "_/_";
  Aqt.EQUALS = "_==_";
  Aqt.EXISTS = "exists";
  Aqt.EXISTS_ONE = "exists_one";
  Aqt.FILTER = "filter";
  Aqt.GREATER = "_>_";
  Aqt.GREATER_EQUALS = "_>=_";
  Aqt.HAS = "has";
  Aqt.IN = "@in";
  Aqt.INDEX = "_[_]";
  Aqt.LESS = "_<_";
  Aqt.LESS_EQUALS = "_<=_";
  Aqt.LOGICAL_AND = "_&&_";
  Aqt.LOGICAL_NOT = "!_";
  Aqt.LOGICAL_OR = "_||_";
  Aqt.MAP = "map";
  Aqt.MODULO = "_%_";
  Aqt.MULTIPLY = "_*_";
  Aqt.NEGATE = "-_";
  Aqt.NOT_EQUALS = "_!=_";
  Aqt.NOT_STRICTLY_FALSE = "@not_strictly_false";
  Aqt.OLD_IN = "_in_";
  Aqt.OLD_NOT_STRICTLY_FALSE = "__not_strictly_false__";
  Aqt.OPT_INDEX = "_[?_]";
  Aqt.OPT_SELECT = "_?._";
  Aqt.SUBTRACT = "_-_";
});
var n6e = commonJS(function (Dqt) {
  Object.defineProperty(Dqt, "__esModule", { value: !0 });
  Dqt.createDuration = t6e;
  Dqt.parseDuration = IUr;
  var CUr = mE(),
    xUr = Rv(),
    e6e = 1000000000n,
    AUr = 9223372036854775807n,
    RUr = -9223372036854775808n;
  function t6e(e = 0n, t = 0n) {
    let r = e * e6e + BigInt(t);
    if (r > AUr || r < RUr) throw Error("duration out of range");
    return (0, xUr.create)(CUr.DurationSchema, {
      seconds: r / e6e,
      nanos: Number(r % e6e),
    });
  }
  var Pqt = 128,
    Oqt = Object.freeze({
      ns: 1n,
      us: 1000n,
      µs: 1000n,
      ms: 1000n * 1000n,
      s: 1000n * 1000n * 1000n,
      m: 1000n * 1000n * 1000n * 60n,
      h: 1000n * 1000n * 1000n * 60n * 60n,
    }),
    Iqt = /^\d+/,
    PUr = new RegExp(`^(${Object.keys(Oqt).join("|")})`);
  function IUr(e) {
    if (e.length > Pqt) throw Mqt(`duration string exceeds ${Pqt} characters`);
    if (/^[-+]?0$/.test(e)) return t6e();
    let [t, r] = /^[+-]/.test(e)
        ? [e[0] === "+" ? 1n : -1n, e.slice(1)]
        : [1n, e],
      o = 0n,
      d = r;
    while (d.length > 0) {
      let p = Iqt.exec(d)?.[0];
      if (((d = d.slice(p?.length ?? 0)), d[0] === ".")) d = d.slice(1);
      let _ = Iqt.exec(d)?.[0];
      d = d.slice(_?.length ?? 0);
      let E = PUr.exec(d)?.[0];
      if (((d = d.slice(E?.length ?? 0)), (p ?? _) === void 0 || E === void 0))
        throw Mqt("invalid syntax");
      let C = Oqt[E];
      ((o += BigInt(p ?? 0) * C),
        (o += (BigInt(_ ?? 0) * C) / 10n ** BigInt(_?.length ?? 0)));
    }
    return t6e(0n, t * o);
  }
  function Mqt(e) {
    return Error(`Failed to parse duration: ${e}`);
  }
});
var Lqt = commonJS(function (Nqt) {
  Object.defineProperty(Nqt, "__esModule", { value: !0 });
  Nqt.createTimestamp = $Ur;
  var DUr = Rv(),
    NUr = mE(),
    LUr = 253402300799n,
    FUr = -62135596800n,
    Dre = 1000000000n;
  function $Ur(e = 0n, t = 0n) {
    let r = e * Dre + BigInt(t),
      o = r % Dre < 0n ? 1n : 0n,
      d = r / Dre - o,
      p = Number((r % Dre) + o * Dre);
    if (d > LUr || d < FUr) throw Error("timestamp out of range");
    return (0, DUr.create)(NUr.TimestampSchema, { seconds: d, nanos: p });
  }
});
var o6e = commonJS(function (Vqt) {
  Object.defineProperty(Vqt, "__esModule", { value: !0 });
  Vqt.equals = r6e;
  Vqt.equalsType = qqt;
  var Fqt = uN(),
    UUr = z5(),
    HUr = Rv(),
    $qt = hM(),
    Uqt = xN(),
    Hqt = NA(),
    Gqt = xx();
  function r6e(e, t) {
    if (e === t) return !0;
    if ((0, Hqt.isCelUint)(e)) e = e.value;
    if ((0, Hqt.isCelUint)(t)) t = t.value;
    if (
      (typeof e === "number" || typeof e === "bigint") &&
      (typeof t === "number" || typeof t === "bigint")
    )
      return e == t;
    switch (!0) {
      case e instanceof Uint8Array:
        return t instanceof Uint8Array && GUr(e, t);
      case (0, $qt.isCelList)(e):
        return (0, $qt.isCelList)(t) && jUr(e, t);
      case (0, Uqt.isCelMap)(e):
        return (0, Uqt.isCelMap)(t) && WUr(e, t);
      case (0, Gqt.isCelType)(e):
        return (0, Gqt.isCelType)(t) && qqt(e, t);
    }
    if ((0, Fqt.isReflectMessage)(e)) {
      if (!(0, Fqt.isReflectMessage)(t)) return !1;
      if (e.desc.typeName !== t.desc.typeName) return !1;
      return (0, HUr.equals)(e.desc, e.message, t.message, {
        registry: (0, UUr.getEvalContext)().registry,
        unpackAny: !0,
        unknown: !0,
        extensions: !0,
      });
    }
    return !1;
  }
  function qqt(e, t) {
    return e.kind === t.kind && e.name === t.name;
  }
  function jUr(e, t) {
    if (e.size !== t.size) return !1;
    for (let r = 0; r < e.size; r++) if (!r6e(e.get(r), t.get(r))) return !1;
    return !0;
  }
  function WUr(e, t) {
    if (e.size !== t.size) return !1;
    for (let [r, o] of e) {
      let d = t.get(r);
      if (d === void 0 || !r6e(o, d)) return !1;
    }
    return !0;
  }
  function GUr(e, t) {
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
    return !0;
  }
});
var u2 = commonJS(function (oVt) {
  Object.defineProperty(oVt, "__esModule", { value: !0 });
  oVt.celFunc = QUr;
  oVt.celMethod = JUr;
  var VUr = o6e(),
    KUr = OB(),
    eVt = xx(),
    YUr = TN(),
    XUr = Symbol.for("@bufbuild/cel/func");
  function QUr(e, t, r, o) {
    return new tVt(e, void 0, t, r, o);
  }
  function JUr(e, t, r, o, d) {
    return new nVt(e, t, r, o, d);
  }
  class s6e {
    _name;
    _target;
    _args;
    _result;
    _impl;
    _id;
    [XUr] = {};
    constructor(e, t, r, o, d, p = "") {
      ((this._name = e),
        (this._target = t),
        (this._args = r),
        (this._result = o),
        (this._impl = d),
        (this._id = p));
    }
    get id() {
      if (this._id === "") {
        let e = this.target ? `${this.target.name}.` : "";
        this._id = `${e}${this.name}(${this.arguments.map((t) => t.name).join(",")})`;
      }
      return this._id;
    }
    get name() {
      return this._name;
    }
    get target() {
      return this._target;
    }
    get arguments() {
      return this._args;
    }
    get result() {
      return this._result;
    }
    call(e, t, r) {
      if (r.length != this.arguments.length) return;
      for (let o = 0; o < r.length; o++)
        if (!rVt(r[o], this.arguments[o])) return;
      try {
        return (0, YUr.toCel)(this._impl.apply(t, r));
      } catch (o) {
        return (0, KUr.celError)(o, e);
      }
    }
  }
  class tVt extends s6e {
    call(e, t, r) {
      if (t !== void 0) return;
      return super.call(e, void 0, r);
    }
  }
  class nVt extends s6e {
    call(e, t, r) {
      if (t === void 0 || !rVt(t, this.target)) return;
      return super.call(e, t, r);
    }
  }
  function rVt(e, t) {
    return (
      t === eVt.CelScalar.DYN || (0, VUr.equalsType)((0, eVt.celType)(e), t)
    );
  }
});
var u6e = commonJS(function (mVt) {
  Object.defineProperty(mVt, "__esModule", { value: !0 });
  mVt.safeInt = K5;
  mVt.safeUint = Lbe;
  var ph = Nbe(),
    Kb = xx(),
    tHr = hM(),
    c6e = NA(),
    fVt = n6e(),
    pVt = Lqt(),
    Fbe = OB(),
    b_ = u2(),
    sVt = 9223372036854775807n,
    iVt = -9223372036854775808n,
    nHr = 18446744073709551615n;
  function K5(e, t = "type conversion") {
    let r = typeof e === "string" ? BigInt(e) : e;
    if (typeof r === "bigint") {
      if (r >= iVt && r <= sVt) return r;
    } else if (Number.isFinite(r)) {
      if (r > Number(iVt) && r < Number(sVt)) return BigInt(Math.trunc(r));
    }
    throw (0, Fbe.celError)(`int overflow during ${t}`);
  }
  function Lbe(e, t = "type conversion") {
    let r = typeof e === "string" ? BigInt(e) : e;
    if (typeof r === "bigint" || Number.isFinite(r)) {
      let o = typeof r === "number" ? BigInt(Math.trunc(r)) : r;
      if (r >= 0 && o <= nHr) return (0, c6e.celUint)(o);
    }
    throw (0, Fbe.celError)(`uint overflow during ${t}`);
  }
  function rHr(e, t) {
    let r = new Uint8Array(e.length + t.length);
    return (r.set(e), r.set(t, e.length), r);
  }
  function aVt(e, t) {
    return (0, pVt.createTimestamp)(
      e.message.seconds + t.message.seconds,
      e.message.nanos + t.message.nanos,
    );
  }
  function oHr(e, t) {
    return (0, fVt.createDuration)(
      e.message.seconds + t.message.seconds,
      e.message.nanos + t.message.nanos,
    );
  }
  function lVt(e, t) {
    return (0, fVt.createDuration)(
      e.message.seconds - t.message.seconds,
      e.message.nanos - t.message.nanos,
    );
  }
  function sHr(e, t) {
    return (0, pVt.createTimestamp)(
      e.message.seconds - t.message.seconds,
      e.message.nanos - t.message.nanos,
    );
  }
  function uVt(e, t, r) {
    if (r === 0n) throw (0, Fbe.celError)(`${e.name} divide by zero`);
    return K5(t / r, `divide by ${r}`);
  }
  function dVt(e, t, r) {
    if (r === 0n) throw (0, Fbe.celError)(`${e.name} modulus by zero`);
    return t % r;
  }
  var i6e = (0, Kb.listType)(Kb.CelScalar.DYN),
    { BYTES: a6e, DOUBLE: Pv, INT: tk, STRING: l6e, UINT: Pw } = Kb.CelScalar;
  mVt.default = [
    (0, b_.celFunc)(ph.ADD, [tk, tk], tk, (e, t) => K5(e + t, ph.ADD)),
    (0, b_.celFunc)(ph.ADD, [Pw, Pw], Pw, (e, t) =>
      Lbe(e.value + t.value, ph.ADD),
    ),
    (0, b_.celFunc)(ph.ADD, [Pv, Pv], Pv, (e, t) => e + t),
    (0, b_.celFunc)(ph.ADD, [Kb.DURATION, Kb.DURATION], Kb.DURATION, oHr),
    (0, b_.celFunc)(ph.ADD, [Kb.TIMESTAMP, Kb.DURATION], Kb.TIMESTAMP, aVt),
    (0, b_.celFunc)(ph.ADD, [Kb.DURATION, Kb.TIMESTAMP], Kb.TIMESTAMP, aVt),
    (0, b_.celFunc)(ph.ADD, [l6e, l6e], l6e, (e, t) => e + t),
    (0, b_.celFunc)(ph.ADD, [a6e, a6e], a6e, rHr),
    (0, b_.celFunc)(ph.ADD, [i6e, i6e], i6e, tHr.celListConcat),
    (0, b_.celFunc)(ph.SUBTRACT, [tk, tk], tk, (e, t) =>
      K5(e - t, ph.SUBTRACT),
    ),
    (0, b_.celFunc)(ph.SUBTRACT, [Pw, Pw], Pw, (e, t) =>
      Lbe(e.value - t.value, ph.SUBTRACT),
    ),
    (0, b_.celFunc)(ph.SUBTRACT, [Pv, Pv], Pv, (e, t) => e - t),
    (0, b_.celFunc)(
      ph.SUBTRACT,
      [Kb.TIMESTAMP, Kb.TIMESTAMP],
      Kb.DURATION,
      lVt,
    ),
    (0, b_.celFunc)(ph.SUBTRACT, [Kb.DURATION, Kb.DURATION], Kb.DURATION, lVt),
    (0, b_.celFunc)(
      ph.SUBTRACT,
      [Kb.TIMESTAMP, Kb.DURATION],
      Kb.TIMESTAMP,
      sHr,
    ),
    (0, b_.celFunc)(ph.MULTIPLY, [tk, tk], tk, (e, t) =>
      K5(e * t, ph.MULTIPLY),
    ),
    (0, b_.celFunc)(ph.MULTIPLY, [Pw, Pw], Pw, (e, t) =>
      Lbe(e.value * t.value, ph.MULTIPLY),
    ),
    (0, b_.celFunc)(ph.MULTIPLY, [Pv, Pv], Pv, (e, t) => e * t),
    (0, b_.celFunc)(ph.DIVIDE, [tk, tk], tk, (e, t) => uVt(tk, e, t)),
    (0, b_.celFunc)(ph.DIVIDE, [Pw, Pw], Pw, (e, t) =>
      (0, c6e.celUint)(uVt(Pw, e.value, t.value)),
    ),
    (0, b_.celFunc)(ph.DIVIDE, [Pv, Pv], Pv, (e, t) => e / t),
    (0, b_.celFunc)(ph.MODULO, [tk, tk], tk, (e, t) => dVt(tk, e, t)),
    (0, b_.celFunc)(ph.MODULO, [Pw, Pw], Pw, (e, t) =>
      (0, c6e.celUint)(dVt(Pw, e.value, t.value)),
    ),
    (0, b_.celFunc)(ph.NEGATE, [tk], tk, (e) => K5(-e)),
    (0, b_.celFunc)(ph.NEGATE, [Pv], Pv, (e) => -e),
  ];
});
var bVt = commonJS(function (yVt) {
  Object.defineProperty(yVt, "__esModule", { value: !0 });
  var Lre = Rv(),
    Nre = mE(),
    HB = u6e(),
    FT = xx(),
    cHr = n6e(),
    cg = u2(),
    uHr = z5(),
    dHr = new TextEncoder(),
    fHr = new TextDecoder(void 0, { fatal: !0 });
  function pHr(e) {
    switch (e) {
      case "true":
      case "True":
      case "TRUE":
      case "t":
      case "1":
        return !0;
      case "false":
      case "False":
      case "FALSE":
      case "f":
      case "0":
        return !1;
    }
    throw Error(`Unable to convert string '${e}' to bool`);
  }
  function mHr(e) {
    try {
      return fHr.decode(e);
    } catch (t) {
      throw Error(`Failed to decode bytes as string: ${t}`);
    }
  }
  function gHr(e) {
    try {
      return (0, Lre.fromJson)(Nre.TimestampSchema, e);
    } catch (t) {
      throw Error(`Failed to parse timestamp: ${t}`);
    }
  }
  function hHr(e) {
    if ((0, Lre.isMessage)(e))
      return (0, FT.objectType)((0, uHr.getMsgDesc)(e.$typeName));
    return (0, FT.celType)(e);
  }
  function RN(e) {
    return e;
  }
  var {
    BOOL: $be,
    BYTES: Bbe,
    DOUBLE: jB,
    DYN: d6e,
    INT: BA,
    STRING: gE,
    TYPE: yHr,
    UINT: WB,
  } = FT.CelScalar;
  yVt.default = [
    (0, cg.celFunc)("int", [BA], BA, RN),
    (0, cg.celFunc)("int", [WB], BA, (e) => (0, HB.safeInt)(e.value)),
    (0, cg.celFunc)("int", [jB], BA, HB.safeInt),
    (0, cg.celFunc)("int", [gE], BA, HB.safeInt),
    (0, cg.celFunc)("int", [FT.TIMESTAMP], BA, (e) =>
      (0, HB.safeInt)(e.message.seconds),
    ),
    (0, cg.celFunc)("int", [FT.DURATION], BA, (e) =>
      (0, HB.safeInt)(e.message.seconds),
    ),
    (0, cg.celFunc)("uint", [WB], WB, RN),
    (0, cg.celFunc)("uint", [BA], WB, HB.safeUint),
    (0, cg.celFunc)("uint", [jB], WB, HB.safeUint),
    (0, cg.celFunc)("uint", [gE], WB, HB.safeUint),
    (0, cg.celFunc)("double", [jB], jB, RN),
    (0, cg.celFunc)("double", [BA], jB, (e) => Number(e)),
    (0, cg.celFunc)("double", [WB], jB, (e) => Number(e.value)),
    (0, cg.celFunc)("double", [gE], jB, (e) => Number(e)),
    (0, cg.celFunc)("bool", [$be], $be, RN),
    (0, cg.celFunc)("bool", [gE], $be, pHr),
    (0, cg.celFunc)("bytes", [Bbe], Bbe, RN),
    (0, cg.celFunc)("bytes", [gE], Bbe, (e) => dHr.encode(e)),
    (0, cg.celFunc)("string", [gE], gE, RN),
    (0, cg.celFunc)("string", [$be], gE, (e) => e.toString()),
    (0, cg.celFunc)("string", [BA], gE, (e) => e.toString()),
    (0, cg.celFunc)("string", [WB], gE, (e) => e.value.toString()),
    (0, cg.celFunc)("string", [jB], gE, (e) => e.toString()),
    (0, cg.celFunc)("string", [Bbe], gE, mHr),
    (0, cg.celFunc)("string", [FT.TIMESTAMP], gE, (e) =>
      (0, Lre.toJson)(Nre.TimestampSchema, e.message),
    ),
    (0, cg.celFunc)("string", [FT.DURATION], gE, (e) =>
      (0, Lre.toJson)(Nre.DurationSchema, e.message),
    ),
    (0, cg.celFunc)("timestamp", [FT.TIMESTAMP], FT.TIMESTAMP, RN),
    (0, cg.celFunc)("timestamp", [gE], FT.TIMESTAMP, gHr),
    (0, cg.celFunc)("timestamp", [BA], FT.TIMESTAMP, (e) =>
      (0, Nre.timestampFromMs)(Number(e)),
    ),
    (0, cg.celFunc)("duration", [FT.DURATION], FT.DURATION, RN),
    (0, cg.celFunc)("duration", [gE], FT.DURATION, cHr.parseDuration),
    (0, cg.celFunc)("duration", [BA], FT.DURATION, (e) =>
      (0, Lre.create)(Nre.DurationSchema, { seconds: e }),
    ),
    (0, cg.celFunc)("type", [d6e], yHr, hHr),
    (0, cg.celFunc)("dyn", [d6e], d6e, RN),
  ];
});
var f6e = commonJS(function (SVt) {
  Object.defineProperty(SVt, "__esModule", { value: !0 });
  SVt.GREATER_EQUALS_STRING =
    SVt.GREATER_EQUALS_INT64_UINT64 =
    SVt.GREATER_EQUALS_INT64_DOUBLE =
    SVt.GREATER_EQUALS_INT64 =
    SVt.GREATER_EQUALS_DURATION =
    SVt.GREATER_EQUALS_DOUBLE_UINT64 =
    SVt.GREATER_EQUALS_DOUBLE_INT64 =
    SVt.GREATER_EQUALS_DOUBLE =
    SVt.GREATER_EQUALS_BYTES =
    SVt.GREATER_EQUALS_BOOL =
    SVt.GREATER_DURATION =
    SVt.GREATER_DOUBLE_UINT64 =
    SVt.GREATER_DOUBLE_INT64 =
    SVt.GREATER_DOUBLE =
    SVt.GREATER_BYTES =
    SVt.GREATER_BOOL =
    SVt.EQUALS =
    SVt.ENDS_WITH_STRING =
    SVt.ENDS_WITH =
    SVt.DURATION_TO_STRING =
    SVt.DURATION_TO_SECONDS =
    SVt.DURATION_TO_MINUTES =
    SVt.DURATION_TO_MILLISECONDS =
    SVt.DURATION_TO_INT =
    SVt.DURATION_TO_HOURS =
    SVt.DURATION_TO_DURATION =
    SVt.DOUBLE_TO_UINT =
    SVt.DOUBLE_TO_STRING =
    SVt.DOUBLE_TO_INT =
    SVt.DOUBLE_TO_DOUBLE =
    SVt.DIVIDE_UINT64 =
    SVt.DIVIDE_INT64 =
    SVt.DIVIDE_DOUBLE =
    SVt.DEPRECATED_IN =
    SVt.CONTAINS_STRING =
    SVt.CONTAINS =
    SVt.CONDITIONAL =
    SVt.BYTES_TO_STRING =
    SVt.BYTES_TO_BYTES =
    SVt.BOOL_TO_STRING =
    SVt.BOOL_TO_BOOL =
    SVt.ADD_UINT64 =
    SVt.ADD_TIMESTAMP_DURATION =
    SVt.ADD_STRING =
    SVt.ADD_LIST =
    SVt.ADD_INT64 =
    SVt.ADD_DURATION_TIMESTAMP =
    SVt.ADD_DURATION_DURATION =
    SVt.ADD_DOUBLE =
    SVt.ADD_BYTES =
      void 0;
  SVt.LESS_STRING =
    SVt.LESS_INT64_UINT64 =
    SVt.LESS_INT64_DOUBLE =
    SVt.LESS_INT64 =
    SVt.LESS_EQUALS_UINT64_INT64 =
    SVt.LESS_EQUALS_UINT64_DOUBLE =
    SVt.LESS_EQUALS_UINT64 =
    SVt.LESS_EQUALS_TIMESTAMP =
    SVt.LESS_EQUALS_STRING =
    SVt.LESS_EQUALS_INT64_UINT64 =
    SVt.LESS_EQUALS_INT64_DOUBLE =
    SVt.LESS_EQUALS_INT64 =
    SVt.LESS_EQUALS_DURATION =
    SVt.LESS_EQUALS_DOUBLE_UINT64 =
    SVt.LESS_EQUALS_DOUBLE_INT64 =
    SVt.LESS_EQUALS_DOUBLE =
    SVt.LESS_EQUALS_BYTES =
    SVt.LESS_EQUALS_BOOL =
    SVt.LESS_DURATION =
    SVt.LESS_DOUBLE_UINT64 =
    SVt.LESS_DOUBLE_INT64 =
    SVt.LESS_DOUBLE =
    SVt.LESS_BYTES =
    SVt.LESS_BOOL =
    SVt.ITERATOR =
    SVt.IN_MESSAGE =
    SVt.IN_MAP =
    SVt.IN_LIST =
    SVt.INT_TO_UINT =
    SVt.INT_TO_TIMESTAMP =
    SVt.INT_TO_STRING =
    SVt.INT_TO_INT =
    SVt.INT_TO_DURATION =
    SVt.INT_TO_DOUBLE =
    SVt.INDEX_MESSAGE =
    SVt.INDEX_MAP =
    SVt.INDEX_LIST =
    SVt.HAS_NEXT =
    SVt.GREATER_UINT64_INT64 =
    SVt.GREATER_UINT64_DOUBLE =
    SVt.GREATER_UINT64 =
    SVt.GREATER_TIMESTAMP =
    SVt.GREATER_STRING =
    SVt.GREATER_INT64_UINT64 =
    SVt.GREATER_INT64_DOUBLE =
    SVt.GREATER_INT64 =
    SVt.GREATER_EQUALS_UINT64_INT64 =
    SVt.GREATER_EQUALS_UINT64_DOUBLE =
    SVt.GREATER_EQUALS_UINT64 =
    SVt.GREATER_EQUALS_TIMESTAMP =
      void 0;
  SVt.TIMESTAMP_TO_DAY_OF_WEEK_WITH_TZ =
    SVt.TIMESTAMP_TO_DAY_OF_WEEK =
    SVt.TIMESTAMP_TO_DAY_OF_MONTH_ZERO_BASED_WITH_TZ =
    SVt.TIMESTAMP_TO_DAY_OF_MONTH_ZERO_BASED =
    SVt.TIMESTAMP_TO_DAY_OF_MONTH_ONE_BASED_WITH_TZ =
    SVt.TIMESTAMP_TO_DAY_OF_MONTH_ONE_BASED =
    SVt.SUBTRACT_UINT64 =
    SVt.SUBTRACT_TIMESTAMP_TIMESTAMP =
    SVt.SUBTRACT_TIMESTAMP_DURATION =
    SVt.SUBTRACT_INT64 =
    SVt.SUBTRACT_DURATION_DURATION =
    SVt.SUBTRACT_DOUBLE =
    SVt.STRING_TO_UINT =
    SVt.STRING_TO_TIMESTAMP =
    SVt.STRING_TO_STRING =
    SVt.STRING_TO_INT =
    SVt.STRING_TO_DURATION =
    SVt.STRING_TO_DOUBLE =
    SVt.STRING_TO_BYTES =
    SVt.STRING_TO_BOOL =
    SVt.STARTS_WITH_STRING =
    SVt.STARTS_WITH =
    SVt.SIZE_STRING_INST =
    SVt.SIZE_STRING =
    SVt.SIZE_MAP_INST =
    SVt.SIZE_MAP =
    SVt.SIZE_LIST_INST =
    SVt.SIZE_LIST =
    SVt.SIZE_BYTES_INST =
    SVt.SIZE_BYTES =
    SVt.SIZE =
    SVt.NOT_STRICTLY_FALSE =
    SVt.NOT_EQUALS =
    SVt.NEXT =
    SVt.NEGATE_INT64 =
    SVt.NEGATE_DOUBLE =
    SVt.MULTIPLY_UINT64 =
    SVt.MULTIPLY_INT64 =
    SVt.MULTIPLY_DOUBLE =
    SVt.MODULO_UINT64 =
    SVt.MODULO_INT64 =
    SVt.MATCHES_STRING =
    SVt.MATCHES =
    SVt.LOGICAL_OR =
    SVt.LOGICAL_NOT =
    SVt.LOGICAL_AND =
    SVt.LESS_UINT64_INT64 =
    SVt.LESS_UINT64_DOUBLE =
    SVt.LESS_UINT64 =
    SVt.LESS_TIMESTAMP =
      void 0;
  SVt.UINT_TO_UINT =
    SVt.UINT_TO_STRING =
    SVt.UINT_TO_INT =
    SVt.UINT_TO_DOUBLE =
    SVt.TYPE_CONVERT_UINT =
    SVt.TYPE_CONVERT_TYPE =
    SVt.TYPE_CONVERT_TIMESTAMP =
    SVt.TYPE_CONVERT_STRING =
    SVt.TYPE_CONVERT_INT =
    SVt.TYPE_CONVERT_DYN =
    SVt.TYPE_CONVERT_DURATION =
    SVt.TYPE_CONVERT_DOUBLE =
    SVt.TYPE_CONVERT_BYTES =
    SVt.TYPE_CONVERT_BOOL =
    SVt.TO_DYN =
    SVt.TIME_GET_SECONDS =
    SVt.TIME_GET_MONTH =
    SVt.TIME_GET_MINUTES =
    SVt.TIME_GET_MILLISECONDS =
    SVt.TIME_GET_HOURS =
    SVt.TIME_GET_FULL_YEAR =
    SVt.TIME_GET_DAY_OF_YEAR =
    SVt.TIME_GET_DAY_OF_WEEK =
    SVt.TIME_GET_DAY_OF_MONTH =
    SVt.TIME_GET_DATE =
    SVt.TIMESTAMP_TO_YEAR_WITH_TZ =
    SVt.TIMESTAMP_TO_YEAR =
    SVt.TIMESTAMP_TO_TIMESTAMP =
    SVt.TIMESTAMP_TO_STRING =
    SVt.TIMESTAMP_TO_SECONDS_WITH_TZ =
    SVt.TIMESTAMP_TO_SECONDS =
    SVt.TIMESTAMP_TO_MONTH_WITH_TZ =
    SVt.TIMESTAMP_TO_MONTH =
    SVt.TIMESTAMP_TO_MINUTES_WITH_TZ =
    SVt.TIMESTAMP_TO_MINUTES =
    SVt.TIMESTAMP_TO_MILLISECONDS_WITH_TZ =
    SVt.TIMESTAMP_TO_MILLISECONDS =
    SVt.TIMESTAMP_TO_INT =
    SVt.TIMESTAMP_TO_HOURS_WITH_TZ =
    SVt.TIMESTAMP_TO_HOURS =
    SVt.TIMESTAMP_TO_DAY_OF_YEAR_WITH_TZ =
    SVt.TIMESTAMP_TO_DAY_OF_YEAR =
      void 0;
  SVt.ADD_BYTES = "add_bytes";
  SVt.ADD_DOUBLE = "add_double";
  SVt.ADD_DURATION_DURATION = "add_duration_duration";
  SVt.ADD_DURATION_TIMESTAMP = "add_duration_timestamp";
  SVt.ADD_INT64 = "add_int64";
  SVt.ADD_LIST = "add_list";
  SVt.ADD_STRING = "add_string";
  SVt.ADD_TIMESTAMP_DURATION = "add_timestamp_duration";
  SVt.ADD_UINT64 = "add_uint64";
  SVt.BOOL_TO_BOOL = "bool_to_bool";
  SVt.BOOL_TO_STRING = "bool_to_string";
  SVt.BYTES_TO_BYTES = "bytes_to_bytes";
  SVt.BYTES_TO_STRING = "bytes_to_string";
  SVt.CONDITIONAL = "conditional";
  SVt.CONTAINS = "contains";
  SVt.CONTAINS_STRING = "contains_string";
  SVt.DEPRECATED_IN = "in";
  SVt.DIVIDE_DOUBLE = "divide_double";
  SVt.DIVIDE_INT64 = "divide_int64";
  SVt.DIVIDE_UINT64 = "divide_uint64";
  SVt.DOUBLE_TO_DOUBLE = "double_to_double";
  SVt.DOUBLE_TO_INT = "double_to_int64";
  SVt.DOUBLE_TO_STRING = "double_to_string";
  SVt.DOUBLE_TO_UINT = "double_to_uint64";
  SVt.DURATION_TO_DURATION = "duration_to_duration";
  SVt.DURATION_TO_HOURS = "duration_to_hours";
  SVt.DURATION_TO_INT = "duration_to_int64";
  SVt.DURATION_TO_MILLISECONDS = "duration_to_milliseconds";
  SVt.DURATION_TO_MINUTES = "duration_to_minutes";
  SVt.DURATION_TO_SECONDS = "duration_to_seconds";
  SVt.DURATION_TO_STRING = "duration_to_string";
  SVt.ENDS_WITH = "endsWith";
  SVt.ENDS_WITH_STRING = "ends_with_string";
  SVt.EQUALS = "equals";
  SVt.GREATER_BOOL = "greater_bool";
  SVt.GREATER_BYTES = "greater_bytes";
  SVt.GREATER_DOUBLE = "greater_double";
  SVt.GREATER_DOUBLE_INT64 = "greater_double_int64";
  SVt.GREATER_DOUBLE_UINT64 = "greater_double_uint64";
  SVt.GREATER_DURATION = "greater_duration";
  SVt.GREATER_EQUALS_BOOL = "greater_equals_bool";
  SVt.GREATER_EQUALS_BYTES = "greater_equals_bytes";
  SVt.GREATER_EQUALS_DOUBLE = "greater_equals_double";
  SVt.GREATER_EQUALS_DOUBLE_INT64 = "greater_equals_double_int64";
  SVt.GREATER_EQUALS_DOUBLE_UINT64 = "greater_equals_double_uint64";
  SVt.GREATER_EQUALS_DURATION = "greater_equals_duration";
  SVt.GREATER_EQUALS_INT64 = "greater_equals_int64";
  SVt.GREATER_EQUALS_INT64_DOUBLE = "greater_equals_int64_double";
  SVt.GREATER_EQUALS_INT64_UINT64 = "greater_equals_int64_uint64";
  SVt.GREATER_EQUALS_STRING = "greater_equals_string";
  SVt.GREATER_EQUALS_TIMESTAMP = "greater_equals_timestamp";
  SVt.GREATER_EQUALS_UINT64 = "greater_equals_uint64";
  SVt.GREATER_EQUALS_UINT64_DOUBLE = "greater_equals_uint64_double";
  SVt.GREATER_EQUALS_UINT64_INT64 = "greater_equals_uint64_int64";
  SVt.GREATER_INT64 = "greater_int64";
  SVt.GREATER_INT64_DOUBLE = "greater_int64_double";
  SVt.GREATER_INT64_UINT64 = "greater_int64_uint64";
  SVt.GREATER_STRING = "greater_string";
  SVt.GREATER_TIMESTAMP = "greater_timestamp";
  SVt.GREATER_UINT64 = "greater_uint64";
  SVt.GREATER_UINT64_DOUBLE = "greater_uint64_double";
  SVt.GREATER_UINT64_INT64 = "greater_uint64_int64";
  SVt.HAS_NEXT = "@hasNext";
  SVt.INDEX_LIST = "index_list";
  SVt.INDEX_MAP = "index_map";
  SVt.INDEX_MESSAGE = "index_message";
  SVt.INT_TO_DOUBLE = "int64_to_double";
  SVt.INT_TO_DURATION = "int64_to_duration";
  SVt.INT_TO_INT = "int64_to_int64";
  SVt.INT_TO_STRING = "int64_to_string";
  SVt.INT_TO_TIMESTAMP = "int64_to_timestamp";
  SVt.INT_TO_UINT = "int64_to_uint64";
  SVt.IN_LIST = "in_list";
  SVt.IN_MAP = "in_map";
  SVt.IN_MESSAGE = "in_message";
  SVt.ITERATOR = "@iterator";
  SVt.LESS_BOOL = "less_bool";
  SVt.LESS_BYTES = "less_bytes";
  SVt.LESS_DOUBLE = "less_double";
  SVt.LESS_DOUBLE_INT64 = "less_double_int64";
  SVt.LESS_DOUBLE_UINT64 = "less_double_uint64";
  SVt.LESS_DURATION = "less_duration";
  SVt.LESS_EQUALS_BOOL = "less_equals_bool";
  SVt.LESS_EQUALS_BYTES = "less_equals_bytes";
  SVt.LESS_EQUALS_DOUBLE = "less_equals_double";
  SVt.LESS_EQUALS_DOUBLE_INT64 = "less_equals_double_int64";
  SVt.LESS_EQUALS_DOUBLE_UINT64 = "less_equals_double_uint64";
  SVt.LESS_EQUALS_DURATION = "less_equals_duration";
  SVt.LESS_EQUALS_INT64 = "less_equals_int64";
  SVt.LESS_EQUALS_INT64_DOUBLE = "less_equals_int64_double";
  SVt.LESS_EQUALS_INT64_UINT64 = "less_equals_int64_uint64";
  SVt.LESS_EQUALS_STRING = "less_equals_string";
  SVt.LESS_EQUALS_TIMESTAMP = "less_equals_timestamp";
  SVt.LESS_EQUALS_UINT64 = "less_equals_uint64";
  SVt.LESS_EQUALS_UINT64_DOUBLE = "less_equals_uint64_double";
  SVt.LESS_EQUALS_UINT64_INT64 = "less_equals_uint64_int64";
  SVt.LESS_INT64 = "less_int64";
  SVt.LESS_INT64_DOUBLE = "less_int64_double";
  SVt.LESS_INT64_UINT64 = "less_int64_uint64";
  SVt.LESS_STRING = "less_string";
  SVt.LESS_TIMESTAMP = "less_timestamp";
  SVt.LESS_UINT64 = "less_uint64";
  SVt.LESS_UINT64_DOUBLE = "less_uint64_double";
  SVt.LESS_UINT64_INT64 = "less_uint64_int64";
  SVt.LOGICAL_AND = "logical_and";
  SVt.LOGICAL_NOT = "logical_not";
  SVt.LOGICAL_OR = "logical_or";
  SVt.MATCHES = "matches";
  SVt.MATCHES_STRING = "matches_string";
  SVt.MODULO_INT64 = "modulo_int64";
  SVt.MODULO_UINT64 = "modulo_uint64";
  SVt.MULTIPLY_DOUBLE = "multiply_double";
  SVt.MULTIPLY_INT64 = "multiply_int64";
  SVt.MULTIPLY_UINT64 = "multiply_uint64";
  SVt.NEGATE_DOUBLE = "negate_double";
  SVt.NEGATE_INT64 = "negate_int64";
  SVt.NEXT = "@next";
  SVt.NOT_EQUALS = "not_equals";
  SVt.NOT_STRICTLY_FALSE = "not_strictly_false";
  SVt.SIZE = "size";
  SVt.SIZE_BYTES = "size_bytes";
  SVt.SIZE_BYTES_INST = "bytes_size";
  SVt.SIZE_LIST = "size_list";
  SVt.SIZE_LIST_INST = "list_size";
  SVt.SIZE_MAP = "size_map";
  SVt.SIZE_MAP_INST = "map_size";
  SVt.SIZE_STRING = "size_string";
  SVt.SIZE_STRING_INST = "string_size";
  SVt.STARTS_WITH = "startsWith";
  SVt.STARTS_WITH_STRING = "starts_with_string";
  SVt.STRING_TO_BOOL = "string_to_bool";
  SVt.STRING_TO_BYTES = "string_to_bytes";
  SVt.STRING_TO_DOUBLE = "string_to_double";
  SVt.STRING_TO_DURATION = "string_to_duration";
  SVt.STRING_TO_INT = "string_to_int64";
  SVt.STRING_TO_STRING = "string_to_string";
  SVt.STRING_TO_TIMESTAMP = "string_to_timestamp";
  SVt.STRING_TO_UINT = "string_to_uint64";
  SVt.SUBTRACT_DOUBLE = "subtract_double";
  SVt.SUBTRACT_DURATION_DURATION = "subtract_duration_duration";
  SVt.SUBTRACT_INT64 = "subtract_int64";
  SVt.SUBTRACT_TIMESTAMP_DURATION = "subtract_timestamp_duration";
  SVt.SUBTRACT_TIMESTAMP_TIMESTAMP = "subtract_timestamp_timestamp";
  SVt.SUBTRACT_UINT64 = "subtract_uint64";
  SVt.TIMESTAMP_TO_DAY_OF_MONTH_ONE_BASED = "timestamp_to_day_of_month_1_based";
  SVt.TIMESTAMP_TO_DAY_OF_MONTH_ONE_BASED_WITH_TZ =
    "timestamp_to_day_of_month_1_based_with_tz";
  SVt.TIMESTAMP_TO_DAY_OF_MONTH_ZERO_BASED = "timestamp_to_day_of_month";
  SVt.TIMESTAMP_TO_DAY_OF_MONTH_ZERO_BASED_WITH_TZ =
    "timestamp_to_day_of_month_with_tz";
  SVt.TIMESTAMP_TO_DAY_OF_WEEK = "timestamp_to_day_of_week";
  SVt.TIMESTAMP_TO_DAY_OF_WEEK_WITH_TZ = "timestamp_to_day_of_week_with_tz";
  SVt.TIMESTAMP_TO_DAY_OF_YEAR = "timestamp_to_day_of_year";
  SVt.TIMESTAMP_TO_DAY_OF_YEAR_WITH_TZ = "timestamp_to_day_of_year_with_tz";
  SVt.TIMESTAMP_TO_HOURS = "timestamp_to_hours";
  SVt.TIMESTAMP_TO_HOURS_WITH_TZ = "timestamp_to_hours_with_tz";
  SVt.TIMESTAMP_TO_INT = "timestamp_to_int64";
  SVt.TIMESTAMP_TO_MILLISECONDS = "timestamp_to_milliseconds";
  SVt.TIMESTAMP_TO_MILLISECONDS_WITH_TZ = "timestamp_to_milliseconds_with_tz";
  SVt.TIMESTAMP_TO_MINUTES = "timestamp_to_minutes";
  SVt.TIMESTAMP_TO_MINUTES_WITH_TZ = "timestamp_to_minutes_with_tz";
  SVt.TIMESTAMP_TO_MONTH = "timestamp_to_month";
  SVt.TIMESTAMP_TO_MONTH_WITH_TZ = "timestamp_to_month_with_tz";
  SVt.TIMESTAMP_TO_SECONDS = "timestamp_to_seconds";
  SVt.TIMESTAMP_TO_SECONDS_WITH_TZ = "timestamp_to_seconds_tz";
  SVt.TIMESTAMP_TO_STRING = "timestamp_to_string";
  SVt.TIMESTAMP_TO_TIMESTAMP = "timestamp_to_timestamp";
  SVt.TIMESTAMP_TO_YEAR = "timestamp_to_year";
  SVt.TIMESTAMP_TO_YEAR_WITH_TZ = "timestamp_to_year_with_tz";
  SVt.TIME_GET_DATE = "getDate";
  SVt.TIME_GET_DAY_OF_MONTH = "getDayOfMonth";
  SVt.TIME_GET_DAY_OF_WEEK = "getDayOfWeek";
  SVt.TIME_GET_DAY_OF_YEAR = "getDayOfYear";
  SVt.TIME_GET_FULL_YEAR = "getFullYear";
  SVt.TIME_GET_HOURS = "getHours";
  SVt.TIME_GET_MILLISECONDS = "getMilliseconds";
  SVt.TIME_GET_MINUTES = "getMinutes";
  SVt.TIME_GET_MONTH = "getMonth";
  SVt.TIME_GET_SECONDS = "getSeconds";
  SVt.TO_DYN = "to_dyn";
  SVt.TYPE_CONVERT_BOOL = "bool";
  SVt.TYPE_CONVERT_BYTES = "bytes";
  SVt.TYPE_CONVERT_DOUBLE = "double";
  SVt.TYPE_CONVERT_DURATION = "duration";
  SVt.TYPE_CONVERT_DYN = "dyn";
  SVt.TYPE_CONVERT_INT = "int";
  SVt.TYPE_CONVERT_STRING = "string";
  SVt.TYPE_CONVERT_TIMESTAMP = "timestamp";
  SVt.TYPE_CONVERT_TYPE = "type";
  SVt.TYPE_CONVERT_UINT = "uint";
  SVt.UINT_TO_DOUBLE = "uint64_to_double";
  SVt.UINT_TO_INT = "uint64_to_int64";
  SVt.UINT_TO_STRING = "uint64_to_string";
  SVt.UINT_TO_UINT = "uint64_to_uint64";
});
var RVt = commonJS(function (xVt) {
  Object.defineProperty(xVt, "__esModule", { value: !0 });
  xVt.matches = vVt;
  var cu = Nbe(),
    UA = f6e(),
    Fb = xx(),
    m6e = o6e(),
    Ml = u2(),
    zWr = [
      /\\[1-9]/,
      /\\k<.>/,
      /\(\?\=/,
      /\(\?\!/,
      /\(\?\<\=/,
      /\(\?\<\!/,
      /\\c[A-Z]/,
      /\\u[0-9a-fA-F]{4}/,
      /\\0(?!\d)/,
      /\[\\b.*\]/,
    ],
    qWr = new RegExp(/^\(\?(?<flags>[ims\-]+)\)/);
  function vVt(e) {
    for (let d of zWr)
      if (d.test(e))
        throw Error(`Error evaluating pattern ${e}, invalid RE2 syntax`);
    let t = "",
      r = e.match(qWr);
    if (r) {
      for (let d of r?.groups?.flags ?? "") {
        if (d == "-") break;
        t += d;
      }
      e = e.substring(r[0].length);
    }
    return new RegExp(e, t).test(this);
  }
  function Ube(e, t) {
    let r = e.message.seconds - t.message.seconds;
    if (r == 0n) return e.message.nanos - t.message.nanos;
    return r < 0n ? -1 : 1;
  }
  function Hbe(e, t) {
    let r = e.message.seconds - t.message.seconds;
    if (r == 0n) return e.message.nanos - t.message.nanos;
    return r < 0n ? -1 : 1;
  }
  function jbe(e, t) {
    let r = Math.min(e.length, t.length);
    for (let o = 0; o < r; o++) {
      if (e[o] < t[o]) return -1;
      if (e[o] > t[o]) return 1;
    }
    return e.length - t.length;
  }
  function VWr(e, t) {
    for (let r of t) if ((0, m6e.equals)(r, e)) return !0;
    return !1;
  }
  function $re(e, t) {
    return t.has(e);
  }
  var {
      BOOL: Rl,
      BYTES: _M,
      DOUBLE: E_,
      DYN: zre,
      INT: Og,
      STRING: nk,
      UINT: v_,
    } = Fb.CelScalar,
    p6e = (0, Fb.listType)(Fb.CelScalar.DYN),
    d2 = (0, Fb.mapType)(Fb.CelScalar.DYN, Fb.CelScalar.DYN);
  xVt.default = [
    (0, Ml.celFunc)(cu.LOGICAL_NOT, [Rl], Rl, (e) => !e),
    (0, Ml.celFunc)(cu.EQUALS, [zre, zre], Rl, m6e.equals),
    (0, Ml.celFunc)(
      cu.NOT_EQUALS,
      [zre, zre],
      Rl,
      (e, t) => !(0, m6e.equals)(e, t),
    ),
    (0, Ml.celFunc)(cu.LESS, [Rl, Rl], Rl, (e, t) => e < t),
    (0, Ml.celFunc)(cu.LESS, [_M, _M], Rl, (e, t) => jbe(e, t) < 0),
    (0, Ml.celFunc)(cu.LESS, [E_, E_], Rl, (e, t) => e < t),
    (0, Ml.celFunc)(cu.LESS, [nk, nk], Rl, (e, t) => e < t),
    (0, Ml.celFunc)(cu.LESS, [Og, Og], Rl, (e, t) => e < t),
    (0, Ml.celFunc)(cu.LESS, [Og, v_], Rl, (e, t) => e < t.value),
    (0, Ml.celFunc)(cu.LESS, [v_, Og], Rl, (e, t) => e.value < t),
    (0, Ml.celFunc)(cu.LESS, [v_, v_], Rl, (e, t) => e.value < t.value),
    (0, Ml.celFunc)(cu.LESS, [Og, E_], Rl, (e, t) => Number(e) < t),
    (0, Ml.celFunc)(cu.LESS, [E_, Og], Rl, (e, t) => e < Number(t)),
    (0, Ml.celFunc)(cu.LESS, [E_, v_], Rl, (e, t) => e < Number(t.value)),
    (0, Ml.celFunc)(cu.LESS, [v_, E_], Rl, (e, t) => Number(e.value) < t),
    (0, Ml.celFunc)(
      cu.LESS,
      [Fb.DURATION, Fb.DURATION],
      Rl,
      (e, t) => Ube(e, t) < 0,
    ),
    (0, Ml.celFunc)(
      cu.LESS,
      [Fb.TIMESTAMP, Fb.TIMESTAMP],
      Rl,
      (e, t) => Hbe(e, t) < 0,
    ),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [Rl, Rl], Rl, (e, t) => e <= t),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [_M, _M], Rl, (e, t) => jbe(e, t) <= 0),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [E_, E_], Rl, (e, t) => e <= t),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [nk, nk], Rl, (e, t) => e <= t),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [Og, Og], Rl, (e, t) => e <= t),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [Og, v_], Rl, (e, t) => e <= t.value),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [v_, Og], Rl, (e, t) => e.value <= t),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [v_, v_], Rl, (e, t) => e.value <= t.value),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [Og, E_], Rl, (e, t) => Number(e) <= t),
    (0, Ml.celFunc)(cu.LESS_EQUALS, [E_, Og], Rl, (e, t) => e <= Number(t)),
    (0, Ml.celFunc)(
      cu.LESS_EQUALS,
      [E_, v_],
      Rl,
      (e, t) => e <= Number(t.value),
    ),
    (0, Ml.celFunc)(
      cu.LESS_EQUALS,
      [v_, E_],
      Rl,
      (e, t) => Number(e.value) <= t,
    ),
    (0, Ml.celFunc)(
      cu.LESS_EQUALS,
      [Fb.DURATION, Fb.DURATION],
      Rl,
      (e, t) => Ube(e, t) <= 0,
    ),
    (0, Ml.celFunc)(
      cu.LESS_EQUALS,
      [Fb.TIMESTAMP, Fb.TIMESTAMP],
      Rl,
      (e, t) => Hbe(e, t) <= 0,
    ),
    (0, Ml.celFunc)(cu.GREATER, [Rl, Rl], Rl, (e, t) => e > t),
    (0, Ml.celFunc)(cu.GREATER, [_M, _M], Rl, (e, t) => jbe(e, t) > 0),
    (0, Ml.celFunc)(cu.GREATER, [E_, E_], Rl, (e, t) => e > t),
    (0, Ml.celFunc)(cu.GREATER, [nk, nk], Rl, (e, t) => e > t),
    (0, Ml.celFunc)(cu.GREATER, [Og, Og], Rl, (e, t) => e > t),
    (0, Ml.celFunc)(cu.GREATER, [Og, v_], Rl, (e, t) => e > t.value),
    (0, Ml.celFunc)(cu.GREATER, [v_, Og], Rl, (e, t) => e.value > t),
    (0, Ml.celFunc)(cu.GREATER, [v_, v_], Rl, (e, t) => e.value > t.value),
    (0, Ml.celFunc)(cu.GREATER, [Og, E_], Rl, (e, t) => Number(e) > t),
    (0, Ml.celFunc)(cu.GREATER, [E_, Og], Rl, (e, t) => e > Number(t)),
    (0, Ml.celFunc)(cu.GREATER, [E_, v_], Rl, (e, t) => e > Number(t.value)),
    (0, Ml.celFunc)(cu.GREATER, [v_, E_], Rl, (e, t) => Number(e.value) > t),
    (0, Ml.celFunc)(
      cu.GREATER,
      [Fb.DURATION, Fb.DURATION],
      Rl,
      (e, t) => Ube(e, t) > 0,
    ),
    (0, Ml.celFunc)(
      cu.GREATER,
      [Fb.TIMESTAMP, Fb.TIMESTAMP],
      Rl,
      (e, t) => Hbe(e, t) > 0,
    ),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [Rl, Rl], Rl, (e, t) => e >= t),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [_M, _M], Rl, (e, t) => jbe(e, t) >= 0),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [E_, E_], Rl, (e, t) => e >= t),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [nk, nk], Rl, (e, t) => e >= t),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [Og, Og], Rl, (e, t) => e >= t),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [Og, v_], Rl, (e, t) => e >= t.value),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [v_, Og], Rl, (e, t) => e.value >= t),
    (0, Ml.celFunc)(
      cu.GREATER_EQUALS,
      [v_, v_],
      Rl,
      (e, t) => e.value >= t.value,
    ),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [Og, E_], Rl, (e, t) => Number(e) >= t),
    (0, Ml.celFunc)(cu.GREATER_EQUALS, [E_, Og], Rl, (e, t) => e >= Number(t)),
    (0, Ml.celFunc)(
      cu.GREATER_EQUALS,
      [E_, v_],
      Rl,
      (e, t) => e >= Number(t.value),
    ),
    (0, Ml.celFunc)(
      cu.GREATER_EQUALS,
      [v_, E_],
      Rl,
      (e, t) => Number(e.value) >= t,
    ),
    (0, Ml.celFunc)(
      cu.GREATER_EQUALS,
      [Fb.DURATION, Fb.DURATION],
      Rl,
      (e, t) => Ube(e, t) >= 0,
    ),
    (0, Ml.celFunc)(
      cu.GREATER_EQUALS,
      [Fb.TIMESTAMP, Fb.TIMESTAMP],
      Rl,
      (e, t) => Hbe(e, t) >= 0,
    ),
    (0, Ml.celFunc)(UA.SIZE, [_M], Og, (e) => BigInt(e.length)),
    (0, Ml.celFunc)(UA.SIZE, [p6e], Og, (e) => BigInt(e.size)),
    (0, Ml.celFunc)(UA.SIZE, [nk], Og, (e) => BigInt([...e].length)),
    (0, Ml.celFunc)(UA.SIZE, [d2], Og, (e) => BigInt(e.size)),
    (0, Ml.celMethod)(UA.SIZE, _M, [], Og, function () {
      return BigInt(this.length);
    }),
    (0, Ml.celMethod)(UA.SIZE, p6e, [], Og, function () {
      return BigInt(this.size);
    }),
    (0, Ml.celMethod)(UA.SIZE, nk, [], Og, function () {
      return BigInt([...this].length);
    }),
    (0, Ml.celMethod)(UA.SIZE, d2, [], Og, function () {
      return BigInt(this.size);
    }),
    (0, Ml.celFunc)(cu.IN, [zre, p6e], Rl, VWr),
    (0, Ml.celFunc)(cu.IN, [nk, d2], Rl, $re),
    (0, Ml.celFunc)(cu.IN, [E_, d2], Rl, $re),
    (0, Ml.celFunc)(cu.IN, [Og, d2], Rl, $re),
    (0, Ml.celFunc)(cu.IN, [Rl, d2], Rl, $re),
    (0, Ml.celFunc)(cu.IN, [v_, d2], Rl, $re),
    (0, Ml.celMethod)(UA.CONTAINS, nk, [nk], Rl, String.prototype.includes),
    (0, Ml.celMethod)(UA.ENDS_WITH, nk, [nk], Rl, String.prototype.endsWith),
    (0, Ml.celMethod)(
      UA.STARTS_WITH,
      nk,
      [nk],
      Rl,
      String.prototype.startsWith,
    ),
    (0, Ml.celMethod)(UA.MATCHES, nk, [nk], Rl, vVt),
  ];
});
var NVt = commonJS(function (OVt) {
  Object.defineProperty(OVt, "__esModule", { value: !0 });
  var g6e = mE(),
    f2 = xx(),
    Iv = f6e(),
    IVt = Rv(),
    X5 = u2();
  function XWr(e) {
    let t = new Date(0, 0, 1);
    t.setFullYear(e.getFullYear());
    let r = e.getTime() - t.getTime();
    return Math.floor(r / 86400000);
  }
  function QWr(e, t) {
    let r = e.message,
      o = (0, g6e.timestampDate)(r);
    if (t === void 0)
      return new Date(
        o.getUTCFullYear(),
        o.getUTCMonth(),
        o.getUTCDate(),
        o.getUTCHours(),
        o.getUTCMinutes(),
        o.getUTCSeconds(),
        o.getUTCMilliseconds(),
      );
    let d = t.match(/^(?<sign>[+-]?)(?<hours>\d\d):(?<minutes>\d\d)$/);
    if (d?.groups) {
      let F = d.groups.sign == "-" ? 1 : -1,
        U = parseInt(d.groups.hours),
        V = parseInt(d.groups.minutes),
        re = F * (U * 60 * 60 * 1000 + V * 60 * 1000);
      return (
        (o = new Date(o.getTime() - re)),
        new Date(
          o.getUTCFullYear(),
          o.getUTCMonth(),
          o.getUTCDate(),
          o.getUTCHours(),
          o.getUTCMinutes(),
          o.getUTCSeconds(),
          o.getUTCMilliseconds(),
        )
      );
    }
    let p = new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        hour12: !1,
        timeZone: t,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      _,
      E,
      C,
      I,
      D,
      N;
    for (let F of p.formatToParts(o))
      switch (F.type) {
        case "year":
          _ = parseInt(F.value);
          break;
        case "month":
          E = parseInt(F.value) - 1;
          break;
        case "day":
          C = parseInt(F.value);
          break;
        case "hour":
          I = parseInt(F.value);
          break;
        case "minute":
          D = parseInt(F.value);
          break;
        case "second":
          N = parseInt(F.value);
          break;
      }
    if (
      _ === void 0 ||
      E === void 0 ||
      C === void 0 ||
      I === void 0 ||
      D === void 0 ||
      N === void 0
    )
      throw Error(
        `Error converting ${(0, IVt.toJson)(g6e.TimestampSchema, r)} to IANA timezone ${t}`,
      );
    return new Date(_, E, C, I, D, N, o.getUTCMilliseconds());
  }
  var { STRING: JWr, INT: Z5 } = f2.CelScalar;
  function e0(e, t) {
    function r(o) {
      let d = QWr(this, o),
        p = t(d);
      try {
        return BigInt(p);
      } catch (_) {
        throw Error(
          `Error converting ${p} of ${String(d)} of ${(0, IVt.toJson)(g6e.TimestampSchema, this.message)} to BigInt`,
        );
      }
    }
    return [
      (0, X5.celMethod)(e, f2.TIMESTAMP, [], Z5, r),
      (0, X5.celMethod)(e, f2.TIMESTAMP, [JWr], Z5, r),
    ];
  }
  OVt.default = [
    (0, X5.celMethod)(Iv.TIME_GET_SECONDS, f2.DURATION, [], Z5, function () {
      return this.message.seconds;
    }),
    (0, X5.celMethod)(Iv.TIME_GET_MINUTES, f2.DURATION, [], Z5, function () {
      return this.message.seconds / 60n;
    }),
    (0, X5.celMethod)(Iv.TIME_GET_HOURS, f2.DURATION, [], Z5, function () {
      return this.message.seconds / 3600n;
    }),
    (0, X5.celMethod)(
      Iv.TIME_GET_MILLISECONDS,
      f2.DURATION,
      [],
      Z5,
      function () {
        return BigInt(this.message.nanos) / 1000000n;
      },
    ),
    ...e0(Iv.TIME_GET_FULL_YEAR, (e) => e.getFullYear()),
    ...e0(Iv.TIME_GET_MONTH, (e) => e.getMonth()),
    ...e0(Iv.TIME_GET_DATE, (e) => e.getDate()),
    ...e0(Iv.TIME_GET_DAY_OF_MONTH, (e) => e.getDate() - 1),
    ...e0(Iv.TIME_GET_DAY_OF_WEEK, (e) => e.getDay()),
    ...e0(Iv.TIME_GET_DAY_OF_YEAR, (e) => XWr(e)),
    ...e0(Iv.TIME_GET_SECONDS, (e) => e.getSeconds()),
    ...e0(Iv.TIME_GET_MINUTES, (e) => e.getMinutes()),
    ...e0(Iv.TIME_GET_HOURS, (e) => e.getHours()),
    ...e0(Iv.TIME_GET_MILLISECONDS, (e) => e.getMilliseconds()),
  ];
});
var h6e = commonJS(function (UVt) {
  Object.defineProperty(UVt, "__esModule", { value: !0 });
  UVt.celEnv = a2r;
  var LVt = Sqt(),
    e2r = d4e(),
    t2r = xqt(),
    n2r = bVt(),
    r2r = u6e(),
    o2r = RVt(),
    s2r = NVt(),
    i2r = Symbol.for("@bufbuild/cel/env");
  function a2r(e) {
    return new $Vt(
      e?.namespace ? new e2r.Namespace(e?.namespace) : void 0,
      e?.registry
        ? (0, LVt.createRegistryWithWKT)(e.registry)
        : (0, LVt.createRegistryWithWKT)(),
      (0, t2r.createResolver)(
        r2r.default,
        n2r.default,
        s2r.default,
        o2r.default,
        e?.funcs ?? [],
      ),
    );
  }
  class $Vt {
    _namespace;
    _registry;
    _funcs;
    [i2r] = {};
    constructor(e, t, r) {
      ((this._namespace = e), (this._registry = t), (this._funcs = r));
    }
    get namespace() {
      return this._namespace;
    }
    get registry() {
      return this._registry;
    }
    get funcs() {
      return this._funcs;
    }
  }
});
var nKt = commonJS(function (tKt) {
  Object.defineProperty(tKt, "__esModule", { value: !0 });
  tKt.embedFileDesc = f2r;
  tKt.pathInFileDesc = p2r;
  tKt.createFileDescriptorProtoBoot = qVt;
  var HVt = n2(),
    R_ = Vqe(),
    c2r = bte(),
    u2r = D5(),
    d2r = Eqe(),
    cy = BB();
  function f2r(e) {
    let t = {
      bootable: !1,
      proto() {
        let r = (0, d2r.clone)(cy.FileDescriptorProtoSchema, e);
        return (
          (0, R_.clearField)(r, cy.FileDescriptorProtoSchema.field.dependency),
          (0, R_.clearField)(
            r,
            cy.FileDescriptorProtoSchema.field.sourceCodeInfo,
          ),
          r.messageType.map(zVt),
          r
        );
      },
      base64() {
        let r = (0, u2r.toBinary)(cy.FileDescriptorProtoSchema, this.proto());
        return (0, c2r.base64Encode)(r, "std_raw");
      },
    };
    return e.name == "google/protobuf/descriptor.proto"
      ? Object.assign(Object.assign({}, t), {
          bootable: !0,
          boot() {
            return qVt(this.proto());
          },
        })
      : t;
  }
  function zVt(e) {
    for (let t of e.field)
      if (t.jsonName === (0, HVt.protoCamelCase)(t.name))
        (0, R_.clearField)(t, cy.FieldDescriptorProtoSchema.field.jsonName);
    for (let t of e.nestedType) zVt(t);
  }
  function p2r(e) {
    if (e.kind == "service") return [e.file.services.indexOf(e)];
    let t = e.parent;
    if (t == null)
      switch (e.kind) {
        case "enum":
          return [e.file.enums.indexOf(e)];
        case "message":
          return [e.file.messages.indexOf(e)];
        case "extension":
          return [e.file.extensions.indexOf(e)];
      }
    function r(d) {
      let p = [];
      for (let _ = d.parent; _;) {
        let E = _.nestedMessages.indexOf(d);
        (p.unshift(E), (d = _), (_ = d.parent));
      }
      return (p.unshift(d.file.messages.indexOf(d)), p);
    }
    let o = r(t);
    switch (e.kind) {
      case "extension":
        return [...o, t.nestedExtensions.indexOf(e)];
      case "message":
        return [...o, t.nestedMessages.indexOf(e)];
      case "enum":
        return [...o, t.nestedEnums.indexOf(e)];
    }
  }
  function qVt(e) {
    var t;
    return (
      Hg(e.name == "google/protobuf/descriptor.proto"),
      Hg(e.package == "google.protobuf"),
      Hg(!e.dependency.length),
      Hg(!e.publicDependency.length),
      Hg(!e.weakDependency.length),
      Hg(!e.optionDependency.length),
      Hg(!e.service.length),
      Hg(!e.extension.length),
      Hg(e.sourceCodeInfo === void 0),
      Hg(e.syntax == "" || e.syntax == "proto2"),
      Hg(!((t = e.options) === null || t === void 0 ? void 0 : t.features)),
      Hg(e.edition === cy.Edition.EDITION_UNKNOWN),
      {
        name: e.name,
        package: e.package,
        messageType: e.messageType.map(KVt),
        enumType: e.enumType.map(XVt),
      }
    );
  }
  function KVt(e) {
    (Hg(e.extension.length == 0),
      Hg(!e.oneofDecl.length),
      Hg(!e.options),
      Hg(!(0, R_.isFieldSet)(e, cy.DescriptorProtoSchema.field.visibility)));
    let t = { name: e.name };
    if (e.field.length) t.field = e.field.map(m2r);
    if (e.nestedType.length) t.nestedType = e.nestedType.map(KVt);
    if (e.enumType.length) t.enumType = e.enumType.map(XVt);
    if (e.extensionRange.length)
      t.extensionRange = e.extensionRange.map(
        (r) => (Hg(!r.options), { start: r.start, end: r.end }),
      );
    return t;
  }
  function m2r(e) {
    (Hg((0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.name)),
      Hg((0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.number)),
      Hg((0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.type)),
      Hg(
        !(0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.oneofIndex),
      ),
      Hg(
        !(0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.jsonName) ||
          e.jsonName === (0, HVt.protoCamelCase)(e.name),
      ));
    let t = { name: e.name, number: e.number, type: e.type };
    if ((0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.label))
      t.label = e.label;
    if ((0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.typeName))
      t.typeName = e.typeName;
    if ((0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.extendee))
      t.extendee = e.extendee;
    if ((0, R_.isFieldSet)(e, cy.FieldDescriptorProtoSchema.field.defaultValue))
      t.defaultValue = e.defaultValue;
    if (e.options) t.options = g2r(e.options);
    return t;
  }
  function g2r(e) {
    let t = {};
    if (
      (Hg(!(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.ctype)),
      (0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.packed))
    )
      t.packed = e.packed;
    if (
      (Hg(!(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.jstype)),
      Hg(!(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.lazy)),
      Hg(!(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.unverifiedLazy)),
      (0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.deprecated))
    )
      t.deprecated = e.deprecated;
    if (
      (Hg(!(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.weak)),
      Hg(!(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.debugRedact)),
      (0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.retention))
    )
      t.retention = e.retention;
    if (e.targets.length) t.targets = e.targets;
    if (e.editionDefaults.length)
      t.editionDefaults = e.editionDefaults.map((r) => ({
        value: r.value,
        edition: r.edition,
      }));
    return (
      Hg(!(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.features)),
      Hg(
        !(0, R_.isFieldSet)(e, cy.FieldOptionsSchema.field.uninterpretedOption),
      ),
      t
    );
  }
  function XVt(e) {
    return (
      Hg(!e.options),
      Hg(!(0, R_.isFieldSet)(e, cy.EnumDescriptorProtoSchema.field.visibility)),
      {
        name: e.name,
        value: e.value.map(
          (t) => (Hg(!t.options), { name: t.name, number: t.number }),
        ),
      }
    );
  }
  function Hg(e) {
    if (!e) throw Error();
  }
});
var iKt = commonJS(function (oKt) {
  Object.defineProperty(oKt, "__esModule", { value: !0 });
  oKt.serviceDesc = b2r;
  function b2r(e, t, ...r) {
    if (r.length > 0) throw Error();
    return e.services[t];
  }
});
var mKt = commonJS(function (aKt) {
  Object.defineProperty(aKt, "__esModule", { value: !0 });
  aKt.symbols = aKt.wktPublicImportPaths = aKt.packageName = void 0;
  aKt.packageName = "@bufbuild/protobuf";
  aKt.wktPublicImportPaths = {
    "google/protobuf/compiler/plugin.proto": aKt.packageName + "/wkt",
    "google/protobuf/any.proto": aKt.packageName + "/wkt",
    "google/protobuf/api.proto": aKt.packageName + "/wkt",
    "google/protobuf/cpp_features.proto": aKt.packageName + "/wkt",
    "google/protobuf/descriptor.proto": aKt.packageName + "/wkt",
    "google/protobuf/duration.proto": aKt.packageName + "/wkt",
    "google/protobuf/empty.proto": aKt.packageName + "/wkt",
    "google/protobuf/field_mask.proto": aKt.packageName + "/wkt",
    "google/protobuf/go_features.proto": aKt.packageName + "/wkt",
    "google/protobuf/java_features.proto": aKt.packageName + "/wkt",
    "google/protobuf/source_context.proto": aKt.packageName + "/wkt",
    "google/protobuf/struct.proto": aKt.packageName + "/wkt",
    "google/protobuf/timestamp.proto": aKt.packageName + "/wkt",
    "google/protobuf/type.proto": aKt.packageName + "/wkt",
    "google/protobuf/wrappers.proto": aKt.packageName + "/wkt",
  };
  aKt.symbols = {
    isMessage: {
      typeOnly: !1,
      bootstrapWktFrom: "../../is-message.js",
      from: aKt.packageName,
    },
    Message: {
      typeOnly: !0,
      bootstrapWktFrom: "../../types.js",
      from: aKt.packageName,
    },
    create: {
      typeOnly: !1,
      bootstrapWktFrom: "../../create.js",
      from: aKt.packageName,
    },
    fromJson: {
      typeOnly: !1,
      bootstrapWktFrom: "../../from-json.js",
      from: aKt.packageName,
    },
    fromJsonString: {
      typeOnly: !1,
      bootstrapWktFrom: "../../from-json.js",
      from: aKt.packageName,
    },
    fromBinary: {
      typeOnly: !1,
      bootstrapWktFrom: "../../from-binary.js",
      from: aKt.packageName,
    },
    toBinary: {
      typeOnly: !1,
      bootstrapWktFrom: "../../to-binary.js",
      from: aKt.packageName,
    },
    toJson: {
      typeOnly: !1,
      bootstrapWktFrom: "../../to-json.js",
      from: aKt.packageName,
    },
    toJsonString: {
      typeOnly: !1,
      bootstrapWktFrom: "../../to-json.js",
      from: aKt.packageName,
    },
    protoInt64: {
      typeOnly: !1,
      bootstrapWktFrom: "../../proto-int64.js",
      from: aKt.packageName,
    },
    JsonValue: {
      typeOnly: !0,
      bootstrapWktFrom: "../../json-value.js",
      from: aKt.packageName,
    },
    JsonObject: {
      typeOnly: !0,
      bootstrapWktFrom: "../../json-value.js",
      from: aKt.packageName,
    },
    codegen: {
      boot: {
        typeOnly: !1,
        bootstrapWktFrom: "../../codegenv2/boot.js",
        from: aKt.packageName + "/codegenv2",
      },
      fileDesc: {
        typeOnly: !1,
        bootstrapWktFrom: "../../codegenv2/file.js",
        from: aKt.packageName + "/codegenv2",
      },
      enumDesc: {
        typeOnly: !1,
        bootstrapWktFrom: "../../codegenv2/enum.js",
        from: aKt.packageName + "/codegenv2",
      },
      extDesc: {
        typeOnly: !1,
        bootstrapWktFrom: "../../codegenv2/extension.js",
        from: aKt.packageName + "/codegenv2",
      },
      messageDesc: {
        typeOnly: !1,
        bootstrapWktFrom: "../../codegenv2/message.js",
        from: aKt.packageName + "/codegenv2",
      },
      serviceDesc: {
        typeOnly: !1,
        bootstrapWktFrom: "../../codegenv2/service.js",
        from: aKt.packageName + "/codegenv2",
      },
      tsEnum: {
        typeOnly: !1,
        bootstrapWktFrom: "../../codegenv2/enum.js",
        from: aKt.packageName + "/codegenv2",
      },
      GenFile: {
        typeOnly: !0,
        bootstrapWktFrom: "../../codegenv2/types.js",
        from: aKt.packageName + "/codegenv2",
      },
      GenEnum: {
        typeOnly: !0,
        bootstrapWktFrom: "../../codegenv2/types.js",
        from: aKt.packageName + "/codegenv2",
      },
      GenExtension: {
        typeOnly: !0,
        bootstrapWktFrom: "../../codegenv2/types.js",
        from: aKt.packageName + "/codegenv2",
      },
      GenMessage: {
        typeOnly: !0,
        bootstrapWktFrom: "../../codegenv2/types.js",
        from: aKt.packageName + "/codegenv2",
      },
      GenService: {
        typeOnly: !0,
        bootstrapWktFrom: "../../codegenv2/types.js",
        from: aKt.packageName + "/codegenv2",
      },
    },
  };
});
var kKt = commonJS(function (SKt) {
  Object.defineProperty(SKt, "__esModule", { value: !0 });
  SKt.scalarTypeScriptType = w2r;
  SKt.scalarJsonType = E2r;
  var gb = dE();
  function w2r(e, t) {
    switch (e) {
      case gb.ScalarType.STRING:
        return "string";
      case gb.ScalarType.BOOL:
        return "boolean";
      case gb.ScalarType.UINT64:
      case gb.ScalarType.SFIXED64:
      case gb.ScalarType.FIXED64:
      case gb.ScalarType.SINT64:
      case gb.ScalarType.INT64:
        return t ? "string" : "bigint";
      case gb.ScalarType.BYTES:
        return "Uint8Array";
      default:
        return "number";
    }
  }
  function E2r(e) {
    switch (e) {
      case gb.ScalarType.DOUBLE:
      case gb.ScalarType.FLOAT:
        return 'number | "NaN" | "Infinity" | "-Infinity"';
      case gb.ScalarType.UINT64:
      case gb.ScalarType.SFIXED64:
      case gb.ScalarType.FIXED64:
      case gb.ScalarType.SINT64:
      case gb.ScalarType.INT64:
        return "string";
      case gb.ScalarType.INT32:
      case gb.ScalarType.FIXED32:
      case gb.ScalarType.UINT32:
      case gb.ScalarType.SFIXED32:
      case gb.ScalarType.SINT32:
        return "number";
      case gb.ScalarType.STRING:
        return "string";
      case gb.ScalarType.BOOL:
        return "boolean";
      case gb.ScalarType.BYTES:
        return "string";
    }
  }
});
var TKt = commonJS(function (EKt) {
  Object.defineProperty(EKt, "__esModule", { value: !0 });
});
var y6e = commonJS(function (hE) {
  var C2r =
      (hE && hE.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var d = Object.getOwnPropertyDescriptor(t, r);
            if (
              !d ||
              ("get" in d ? !t.__esModule : d.writable || d.configurable)
            )
              d = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, d);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    i0 =
      (hE && hE.__exportStar) ||
      function (e, t) {
        for (var r in e)
          if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r))
            C2r(t, e, r);
      };
  Object.defineProperty(hE, "__esModule", { value: !0 });
  i0(Dqe(), hE);
  i0(nKt(), hE);
  i0(pN(), hE);
  i0(vte(), hE);
  i0(pE(), hE);
  i0(Tw(), hE);
  i0(iKt(), hE);
  i0(mKt(), hE);
  i0(kKt(), hE);
  i0(TKt(), hE);
});
var Wbe = commonJS(function (CKt) {
  Object.defineProperty(CKt, "__esModule", { value: !0 });
  CKt.SourceInfo_Extension_ComponentSchema =
    CKt.SourceInfo_Extension_Component =
    CKt.SourceInfo_Extension_VersionSchema =
    CKt.SourceInfo_ExtensionSchema =
    CKt.SourceInfoSchema =
    CKt.ConstantSchema =
    CKt.Expr_ComprehensionSchema =
    CKt.Expr_CreateStruct_EntrySchema =
    CKt.Expr_CreateStructSchema =
    CKt.Expr_CreateListSchema =
    CKt.Expr_CallSchema =
    CKt.Expr_SelectSchema =
    CKt.Expr_IdentSchema =
    CKt.ExprSchema =
    CKt.ParsedExprSchema =
    CKt.file_cel_expr_syntax =
      void 0;
  var HT = y6e(),
    _6e = mE();
  CKt.file_cel_expr_syntax = (0, HT.fileDesc)(
    "ChVjZWwvZXhwci9zeW50YXgucHJvdG8SCGNlbC5leHByIlUKClBhcnNlZEV4cHISHAoEZXhwchgCIAEoCzIOLmNlbC5leHByLkV4cHISKQoLc291cmNlX2luZm8YAyABKAsyFC5jZWwuZXhwci5Tb3VyY2VJbmZvItoICgRFeHByEgoKAmlkGAIgASgDEigKCmNvbnN0X2V4cHIYAyABKAsyEi5jZWwuZXhwci5Db25zdGFudEgAEioKCmlkZW50X2V4cHIYBCABKAsyFC5jZWwuZXhwci5FeHByLklkZW50SAASLAoLc2VsZWN0X2V4cHIYBSABKAsyFS5jZWwuZXhwci5FeHByLlNlbGVjdEgAEigKCWNhbGxfZXhwchgGIAEoCzITLmNlbC5leHByLkV4cHIuQ2FsbEgAEi4KCWxpc3RfZXhwchgHIAEoCzIZLmNlbC5leHByLkV4cHIuQ3JlYXRlTGlzdEgAEjIKC3N0cnVjdF9leHByGAggASgLMhsuY2VsLmV4cHIuRXhwci5DcmVhdGVTdHJ1Y3RIABI6ChJjb21wcmVoZW5zaW9uX2V4cHIYCSABKAsyHC5jZWwuZXhwci5FeHByLkNvbXByZWhlbnNpb25IABoVCgVJZGVudBIMCgRuYW1lGAEgASgJGksKBlNlbGVjdBIfCgdvcGVyYW5kGAEgASgLMg4uY2VsLmV4cHIuRXhwchINCgVmaWVsZBgCIAEoCRIRCgl0ZXN0X29ubHkYAyABKAgaVgoEQ2FsbBIeCgZ0YXJnZXQYASABKAsyDi5jZWwuZXhwci5FeHByEhAKCGZ1bmN0aW9uGAIgASgJEhwKBGFyZ3MYAyADKAsyDi5jZWwuZXhwci5FeHByGkgKCkNyZWF0ZUxpc3QSIAoIZWxlbWVudHMYASADKAsyDi5jZWwuZXhwci5FeHByEhgKEG9wdGlvbmFsX2luZGljZXMYAiADKAUa6QEKDENyZWF0ZVN0cnVjdBIUCgxtZXNzYWdlX25hbWUYASABKAkSMgoHZW50cmllcxgCIAMoCzIhLmNlbC5leHByLkV4cHIuQ3JlYXRlU3RydWN0LkVudHJ5Go4BCgVFbnRyeRIKCgJpZBgBIAEoAxITCglmaWVsZF9rZXkYAiABKAlIABIhCgdtYXBfa2V5GAMgASgLMg4uY2VsLmV4cHIuRXhwckgAEh0KBXZhbHVlGAQgASgLMg4uY2VsLmV4cHIuRXhwchIWCg5vcHRpb25hbF9lbnRyeRgFIAEoCEIKCghrZXlfa2luZBr4AQoNQ29tcHJlaGVuc2lvbhIQCghpdGVyX3ZhchgBIAEoCRIRCglpdGVyX3ZhcjIYCCABKAkSIgoKaXRlcl9yYW5nZRgCIAEoCzIOLmNlbC5leHByLkV4cHISEAoIYWNjdV92YXIYAyABKAkSIQoJYWNjdV9pbml0GAQgASgLMg4uY2VsLmV4cHIuRXhwchImCg5sb29wX2NvbmRpdGlvbhgFIAEoCzIOLmNlbC5leHByLkV4cHISIQoJbG9vcF9zdGVwGAYgASgLMg4uY2VsLmV4cHIuRXhwchIeCgZyZXN1bHQYByABKAsyDi5jZWwuZXhwci5FeHByQgsKCWV4cHJfa2luZCLNAgoIQ29uc3RhbnQSMAoKbnVsbF92YWx1ZRgBIAEoDjIaLmdvb2dsZS5wcm90b2J1Zi5OdWxsVmFsdWVIABIUCgpib29sX3ZhbHVlGAIgASgISAASFQoLaW50NjRfdmFsdWUYAyABKANIABIWCgx1aW50NjRfdmFsdWUYBCABKARIABIWCgxkb3VibGVfdmFsdWUYBSABKAFIABIWCgxzdHJpbmdfdmFsdWUYBiABKAlIABIVCgtieXRlc192YWx1ZRgHIAEoDEgAEjcKDmR1cmF0aW9uX3ZhbHVlGAggASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQgIYAUgAEjkKD3RpbWVzdGFtcF92YWx1ZRgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCAhgBSABCDwoNY29uc3RhbnRfa2luZCKcBQoKU291cmNlSW5mbxIWCg5zeW50YXhfdmVyc2lvbhgBIAEoCRIQCghsb2NhdGlvbhgCIAEoCRIUCgxsaW5lX29mZnNldHMYAyADKAUSNgoJcG9zaXRpb25zGAQgAygLMiMuY2VsLmV4cHIuU291cmNlSW5mby5Qb3NpdGlvbnNFbnRyeRI5CgttYWNyb19jYWxscxgFIAMoCzIkLmNlbC5leHByLlNvdXJjZUluZm8uTWFjcm9DYWxsc0VudHJ5EjIKCmV4dGVuc2lvbnMYBiADKAsyHi5jZWwuZXhwci5Tb3VyY2VJbmZvLkV4dGVuc2lvbhowCg5Qb3NpdGlvbnNFbnRyeRILCgNrZXkYASABKAMSDQoFdmFsdWUYAiABKAU6AjgBGkEKD01hY3JvQ2FsbHNFbnRyeRILCgNrZXkYASABKAMSHQoFdmFsdWUYAiABKAsyDi5jZWwuZXhwci5FeHByOgI4ARqxAgoJRXh0ZW5zaW9uEgoKAmlkGAEgASgJEkUKE2FmZmVjdGVkX2NvbXBvbmVudHMYAiADKA4yKC5jZWwuZXhwci5Tb3VyY2VJbmZvLkV4dGVuc2lvbi5Db21wb25lbnQSNwoHdmVyc2lvbhgDIAEoCzImLmNlbC5leHByLlNvdXJjZUluZm8uRXh0ZW5zaW9uLlZlcnNpb24aJwoHVmVyc2lvbhINCgVtYWpvchgBIAEoAxINCgVtaW5vchgCIAEoAyJvCglDb21wb25lbnQSGQoVQ09NUE9ORU5UX1VOU1BFQ0lGSUVEEAASFAoQQ09NUE9ORU5UX1BBUlNFUhABEhoKFkNPTVBPTkVOVF9UWVBFX0NIRUNLRVIQAhIVChFDT01QT05FTlRfUlVOVElNRRADQi4KDGRldi5jZWwuZXhwckILU3ludGF4UHJvdG9QAVoMY2VsLmRldi9leHBy+AEBYgZwcm90bzM",
    [
      _6e.file_google_protobuf_duration,
      _6e.file_google_protobuf_struct,
      _6e.file_google_protobuf_timestamp,
    ],
  );
  CKt.ParsedExprSchema = (0, HT.messageDesc)(CKt.file_cel_expr_syntax, 0);
  CKt.ExprSchema = (0, HT.messageDesc)(CKt.file_cel_expr_syntax, 1);
  CKt.Expr_IdentSchema = (0, HT.messageDesc)(CKt.file_cel_expr_syntax, 1, 0);
  CKt.Expr_SelectSchema = (0, HT.messageDesc)(CKt.file_cel_expr_syntax, 1, 1);
  CKt.Expr_CallSchema = (0, HT.messageDesc)(CKt.file_cel_expr_syntax, 1, 2);
  CKt.Expr_CreateListSchema = (0, HT.messageDesc)(
    CKt.file_cel_expr_syntax,
    1,
    3,
  );
  CKt.Expr_CreateStructSchema = (0, HT.messageDesc)(
    CKt.file_cel_expr_syntax,
    1,
    4,
  );
  CKt.Expr_CreateStruct_EntrySchema = (0, HT.messageDesc)(
    CKt.file_cel_expr_syntax,
    1,
    4,
    0,
  );
  CKt.Expr_ComprehensionSchema = (0, HT.messageDesc)(
    CKt.file_cel_expr_syntax,
    1,
    5,
  );
  CKt.ConstantSchema = (0, HT.messageDesc)(CKt.file_cel_expr_syntax, 2);
  CKt.SourceInfoSchema = (0, HT.messageDesc)(CKt.file_cel_expr_syntax, 3);
  CKt.SourceInfo_ExtensionSchema = (0, HT.messageDesc)(
    CKt.file_cel_expr_syntax,
    3,
    0,
  );
  CKt.SourceInfo_Extension_VersionSchema = (0, HT.messageDesc)(
    CKt.file_cel_expr_syntax,
    3,
    0,
    0,
  );
  var vKt;
  (function (e) {
    ((e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
      (e[(e.PARSER = 1)] = "PARSER"),
      (e[(e.TYPE_CHECKER = 2)] = "TYPE_CHECKER"),
      (e[(e.RUNTIME = 3)] = "RUNTIME"));
  })(vKt || (CKt.SourceInfo_Extension_Component = vKt = {}));
  CKt.SourceInfo_Extension_ComponentSchema = (0, HT.enumDesc)(
    CKt.file_cel_expr_syntax,
    3,
    0,
    0,
  );
});
var b6e = commonJS(function (RKt) {
  Object.defineProperty(RKt, "__esModule", { value: !0 });
  class Gbe {
    builder;
    function;
    terms;
    ops;
    variadicASTs;
    constructor(e, t, r, o) {
      ((this.builder = e),
        (this.function = t),
        (this.terms = [r]),
        (this.ops = []),
        (this.variadicASTs = o));
    }
    static newVariadicLogicManager(e, t, r) {
      return new Gbe(e, t, r, !0);
    }
    static newBalancingLogicManager(e, t, r) {
      return new Gbe(e, t, r, !1);
    }
    addTerm(e, t) {
      (this.terms.push(t), this.ops.push(e));
    }
    toExpr() {
      if (this.terms.length === 1) return this.terms[0];
      if (this.variadicASTs)
        return this.builder.nextExpr(this.ops[0], {
          case: "callExpr",
          value: {
            $typeName: "cel.expr.Expr.Call",
            function: this.function,
            args: this.terms,
          },
        });
      return this.balancedTree(0, this.ops.length - 1);
    }
    balancedTree(e, t) {
      let r = Math.floor((e + t + 1) / 2),
        o;
      if (r === e) o = this.terms[r];
      else o = this.balancedTree(e, r - 1);
      let d;
      if (r === t) d = this.terms[r + 1];
      else d = this.balancedTree(r + 1, t);
      return this.builder.nextExpr(this.ops[r], {
        case: "callExpr",
        value: {
          $typeName: "cel.expr.Expr.Call",
          function: this.function,
          args: [o, d],
        },
      });
    }
  }
  RKt.default = Gbe;
});
var DKt = commonJS(function (OKt) {
  Object.defineProperty(OKt, "__esModule", { value: !0 });
  var j2r = b6e(),
    W2r = new TextEncoder(),
    Dw = "@result";
  class MKt {
    #e = 0n;
    sourceInfo = {
      $typeName: "cel.expr.SourceInfo",
      syntaxVersion: "",
      location: "",
      lineOffsets: [],
      positions: {},
      macroCalls: {},
      extensions: [],
    };
    nextExpr(e, t) {
      return (
        (this.sourceInfo.positions[(++this.#e).toString()] = e),
        { $typeName: "cel.expr.Expr", id: this.#e, exprKind: t }
      );
    }
    nextEntry(e, t, r) {
      return (
        (this.sourceInfo.positions[(++this.#e).toString()] = e),
        {
          $typeName: "cel.expr.Expr.CreateStruct.Entry",
          id: this.#e,
          keyKind: t,
          value: r,
          optionalEntry: !1,
        }
      );
    }
    newConstExpr(e, t) {
      return this.nextExpr(e, {
        case: "constExpr",
        value: { $typeName: "cel.expr.Constant", constantKind: t },
      });
    }
    newCallExpr(e, t, r) {
      if (t === "has" && r.length === 1 && r[0].exprKind?.case === "selectExpr")
        return this.expandHasMacro(e, r[0]);
      if ((t === "_||_" || t === "_&&_") && r.length > 1) {
        let o = j2r.default.newBalancingLogicManager(this, t, r[0]);
        for (let d = 1; d < r.length; d += 1) o.addTerm(e, r[d]);
        return o.toExpr();
      }
      return this.nextExpr(e, {
        case: "callExpr",
        value: { $typeName: "cel.expr.Expr.Call", function: t, args: r },
      });
    }
    newMemberCallExpr(e, t, r, o) {
      return this.maybeExpand(
        e,
        this.nextExpr(e, {
          case: "callExpr",
          value: {
            $typeName: "cel.expr.Expr.Call",
            function: r,
            target: t,
            args: o,
          },
        }),
      );
    }
    newStringExpr(e, t) {
      return this.newConstExpr(e, {
        case: "stringValue",
        value: t.reduce((r, o) => {
          if (typeof o !== "string") {
            if (o.some((d) => d >= 55296 && d < 57344))
              throw Error("surrogate code points are not allowed");
            return r + String.fromCodePoint(...o);
          }
          return r + o;
        }, ""),
      });
    }
    newBytesExpr(e, t) {
      let r = [],
        o = 0;
      for (let _ of t) {
        let E = typeof _ === "string" ? W2r.encode(_) : _;
        (r.push(E), (o += E.length));
      }
      let d = new Uint8Array(o),
        p = 0;
      for (let _ of r) (d.set(_, p), (p += _.length));
      return this.newConstExpr(e, { case: "bytesValue", value: d });
    }
    newBoolExpr(e, t) {
      return this.newConstExpr(e, { case: "boolValue", value: t === "true" });
    }
    newInt64Expr(e, t) {
      return this.newConstExpr(e, {
        case: "int64Value",
        value: t[0] === "-" ? -BigInt(t.slice(1)) : BigInt(t),
      });
    }
    newUnsignedInt64Expr(e, t) {
      return this.newConstExpr(e, { case: "uint64Value", value: BigInt(t) });
    }
    newDoubleExpr(e, t) {
      return this.newConstExpr(e, {
        case: "doubleValue",
        value: parseFloat(t),
      });
    }
    newNullExpr(e) {
      return this.newConstExpr(e, { case: "nullValue", value: 0 });
    }
    newIdentExpr(e, t) {
      return this.nextExpr(e, {
        case: "identExpr",
        value: { $typeName: "cel.expr.Expr.Ident", name: t },
      });
    }
    newInfixExpr(e, t, r) {
      return this.newCallExpr(e, t === "in" ? "@in" : `_${t}_`, r);
    }
    newSelectExpr(e, t, r) {
      return this.nextExpr(e, {
        case: "selectExpr",
        value: {
          $typeName: "cel.expr.Expr.Select",
          operand: t,
          field: r,
          testOnly: !1,
        },
      });
    }
    newIndexExpr(e, t, r) {
      return this.newCallExpr(e, "_[_]", [t, r]);
    }
    expandHasMacro(e, t) {
      if (t.exprKind.case !== "selectExpr")
        return this.newCallExpr(e, "has", [t]);
      return ((t.exprKind.value.testOnly = !0), t);
    }
    newListExpr(e, t) {
      return this.nextExpr(e, {
        case: "listExpr",
        value: {
          $typeName: "cel.expr.Expr.CreateList",
          elements: t,
          optionalIndices: [],
        },
      });
    }
    newBoolMacro(e, t, r, o, d, p) {
      return this.nextExpr(e, {
        case: "comprehensionExpr",
        value: {
          $typeName: "cel.expr.Expr.Comprehension",
          accuVar: Dw,
          accuInit: this.newConstExpr(e, { case: "boolValue", value: o }),
          iterVar: r,
          iterVar2: "",
          iterRange: t,
          loopStep: d,
          loopCondition: p,
          result: this.newIdentExpr(e, Dw),
        },
      });
    }
    newListMacro(e, t, r, o) {
      return this.nextExpr(e, {
        case: "comprehensionExpr",
        value: {
          $typeName: "cel.expr.Expr.Comprehension",
          accuVar: Dw,
          accuInit: this.newListExpr(e, []),
          iterVar: r,
          iterVar2: "",
          iterRange: t,
          loopCondition: this.newConstExpr(e, { case: "boolValue", value: !0 }),
          loopStep: o,
          result: this.newIdentExpr(e, Dw),
        },
      });
    }
    expandExistsMacro(e, t, r, o) {
      return this.newBoolMacro(
        e,
        t,
        r,
        !1,
        this.newCallExpr(e, "_||_", [this.newIdentExpr(e, Dw), o]),
        this.newCallExpr(e, "@not_strictly_false", [
          this.newCallExpr(e, "!_", [this.newIdentExpr(e, Dw)]),
        ]),
      );
    }
    expandAllMacro(e, t, r, o) {
      return this.newBoolMacro(
        e,
        t,
        r,
        !0,
        this.newCallExpr(e, "_&&_", [this.newIdentExpr(e, Dw), o]),
        this.newCallExpr(e, "@not_strictly_false", [this.newIdentExpr(e, Dw)]),
      );
    }
    expandMapMacro(e, t, r, o) {
      return this.newListMacro(
        e,
        t,
        r,
        this.newCallExpr(e, "_+_", [
          this.newIdentExpr(e, Dw),
          this.newListExpr(e, [o]),
        ]),
      );
    }
    expandMapFilterMacro(e, t, r, o, d) {
      return this.newListMacro(
        e,
        t,
        r,
        this.newCallExpr(e, "_?_:_", [
          o,
          this.newCallExpr(e, "_+_", [
            this.newIdentExpr(e, Dw),
            this.newListExpr(e, [d]),
          ]),
          this.newIdentExpr(e, Dw),
        ]),
      );
    }
    expandFilterMacro(e, t, r, o) {
      return this.newListMacro(
        e,
        t,
        r,
        this.newCallExpr(e, "_?_:_", [
          o,
          this.newCallExpr(e, "_+_", [
            this.newIdentExpr(e, Dw),
            this.newListExpr(e, [this.newIdentExpr(e, r)]),
          ]),
          this.newIdentExpr(e, Dw),
        ]),
      );
    }
    expandExistsOne(e, t, r, o) {
      return this.nextExpr(e, {
        case: "comprehensionExpr",
        value: {
          $typeName: "cel.expr.Expr.Comprehension",
          accuVar: Dw,
          accuInit: this.newConstExpr(e, {
            case: "int64Value",
            value: BigInt(0),
          }),
          iterVar: r,
          iterVar2: "",
          iterRange: t,
          loopCondition: this.newConstExpr(e, { case: "boolValue", value: !0 }),
          loopStep: this.newCallExpr(e, "_?_:_", [
            o,
            this.newCallExpr(e, "_+_", [
              this.newIdentExpr(e, Dw),
              this.newConstExpr(e, { case: "int64Value", value: BigInt(1) }),
            ]),
            this.newIdentExpr(e, Dw),
          ]),
          result: this.newCallExpr(e, "_==_", [
            this.newIdentExpr(e, Dw),
            this.newConstExpr(e, { case: "int64Value", value: BigInt(1) }),
          ]),
        },
      });
    }
    maybeExpand(e, t) {
      if (t.exprKind.case === "callExpr") {
        let r = t.exprKind.value,
          o = r.args[0];
        if (
          o !== void 0 &&
          t.exprKind.value.target !== void 0 &&
          o.exprKind?.case === "identExpr"
        ) {
          if (r.args.length === 2)
            switch (r.function) {
              case "exists":
                return this.expandExistsMacro(
                  e,
                  t.exprKind.value.target,
                  o.exprKind.value.name,
                  t.exprKind.value.args[1],
                );
              case "all":
                return this.expandAllMacro(
                  e,
                  t.exprKind.value.target,
                  o.exprKind.value.name,
                  t.exprKind.value.args[1],
                );
              case "map":
                return this.expandMapMacro(
                  e,
                  t.exprKind.value.target,
                  o.exprKind.value.name,
                  t.exprKind.value.args[1],
                );
              case "filter":
                return this.expandFilterMacro(
                  e,
                  t.exprKind.value.target,
                  o.exprKind.value.name,
                  t.exprKind.value.args[1],
                );
              case "exists_one":
              case "existsOne":
                return this.expandExistsOne(
                  e,
                  t.exprKind.value.target,
                  o.exprKind.value.name,
                  t.exprKind.value.args[1],
                );
            }
          if (r.args.length === 3 && r.function == "map")
            return this.expandMapFilterMacro(
              e,
              t.exprKind.value.target,
              o.exprKind.value.name,
              t.exprKind.value.args[1],
              t.exprKind.value.args[2],
            );
        }
      }
      return t;
    }
    newMapEntry(e, t, r) {
      return this.nextEntry(e, { case: "mapKey", value: t }, r);
    }
    newStructExpr(e, t, r = "") {
      return this.nextExpr(e, {
        case: "structExpr",
        value: {
          $typeName: "cel.expr.Expr.CreateStruct",
          entries: t,
          messageName: r,
        },
      });
    }
    newStructEntry(e, t, r) {
      return this.nextEntry(e, { case: "fieldKey", value: t }, r);
    }
  }
  OKt.default = MKt;
});
var zKt = commonJS(function (WKt) {
  Object.defineProperty(WKt, "__esModule", { value: !0 });
  WKt.ParseSyntaxError = WKt.ParseError = void 0;
  WKt.parse = FGr;
  var qre;
  (function (e) {
    class t {
      source;
      start;
      constructor(D, N) {
        ((this.source = D), (this.start = N));
      }
      toString() {
        return String(this.source);
      }
      offset(D) {
        return {
          line: D.line + this.start.line - 1,
          column: D.line === 1 ? D.column + this.start.column - 1 : D.column,
          offset: D.offset + this.start.offset,
        };
      }
      static offsetStart(D) {
        if (D.source instanceof t) return D.source.offset(D.start);
        return D.start;
      }
      static offsetEnd(D) {
        if (D.source instanceof t) return D.source.offset(D.end);
        return D.end;
      }
    }
    e.GrammarLocation = t;
    function r(D, N, F) {
      if (((F = F || " "), D.length > N)) return D;
      return ((N -= D.length), (F += F.repeat(N)), D + F.slice(0, N));
    }
    e.padEnd = r;
    class o {}
    e.ParseFailure = o;
    function d(D) {
      return !D.success;
    }
    e.isFailure = d;
    function p(D, N) {
      let F = 1;
      for (let U = 0; U < N; U++)
        if (D[U] === "\r") {
          if (
            D[U + 1] ===
            `
`
          )
            U++;
          F++;
        } else if (
          D[U] ===
          `
`
        )
          F++;
      return F;
    }
    function _(D, N) {
      let F = 1;
      for (let U = N; U > 0; U--) {
        if (
          [
            `
`,
            "\r",
          ].includes(D[U - 1])
        )
          break;
        F++;
      }
      return F;
    }
    function E(D, N, F, U) {
      return {
        source: D,
        start: {
          offset: N.length - F.length,
          line: p(N, N.length - F.length),
          column: _(N, N.length - F.length),
        },
        end: {
          offset: N.length - U.length,
          line: p(N, N.length - U.length),
          column: _(N, N.length - U.length),
        },
      };
    }
    e.getLocation = E;
    function C(D, N, F, U) {
      return {
        source: D,
        start: N.length - F.length,
        end: N.length - U.length,
      };
    }
    e.getRange = C;
    function I(D, N) {
      return D.slice(0, N.length > 0 ? -N.length : void 0);
    }
    e.getText = I;
  })(qre || (qre = {}));
  class o6 extends Error {
    rawMessage;
    location;
    constructor(e, t, r = "parse error") {
      super(o6.#e(e, t));
      ((this.name = r), (this.rawMessage = e), (this.location = t));
    }
    static #e(e, t) {
      return (
        `${t.source !== void 0 ? String(t.source) : "<input>"}:${t.start.line}:${t.start.column}: ` +
        e
      );
    }
  }
  WKt.ParseError = o6;
  class Xbe extends o6 {
    expected;
    found;
    constructor(e, t, r, o = "syntax error") {
      super(Xbe.#e(e, t), r, o);
      ((this.expected = e), (this.found = t));
    }
    static #e(e, t) {
      function r(p) {
        return (
          "'" +
          p.replace(/[\\\x07\b\f\n\r\t\v']/g, (_) => {
            switch (_) {
              case "\\":
                return "\\\\";
              case "\x07":
                return "\\x07";
              case "\b":
                return "\\b";
              case "\f":
                return "\\f";
              case `
`:
                return "\\n";
              case "\r":
                return "\\r";
              case "\t":
                return "\\t";
              case "\v":
                return "\\v";
              case "'":
                return "\\'";
              default:
                throw Error(
                  "Unexpected string encoding replacement character. This should be an unreachable error.",
                );
            }
          }) +
          "'"
        );
      }
      function o(p) {
        let _ = [
          ...new Set(
            p.map((E) => {
              if (E.type === "literal") return r(E.value);
              return E.value;
            }),
          ),
        ];
        switch ((_.sort(), _.length)) {
          case 1:
            return _[0];
          case 2:
            return `${_[0]} or ${_[1]}`;
          default:
            return _.slice(0, -1).join(", ") + ", or " + _[_.length - 1];
        }
      }
      function d(p) {
        return p.length === 1 ? p : "end of input";
      }
      return "found " + d(t) + " but expecting " + o(e);
    }
  }
  WKt.ParseSyntaxError = Xbe;
  var z2r = DKt(),
    NKt = b6e(),
    q_ = new z2r.default(),
    GB = { type: "any", value: "any character" },
    q2r = { type: "class", value: "/^[\\t\\n\\f\\r ]/g" },
    n_ = { type: "other", value: "whitespace" },
    V2r = { type: "literal", value: "//" },
    K2r = { type: "class", value: "/^[^\\r\\n]/g" },
    Y2r = { type: "class", value: "/^[\\r\\n]/g" },
    X2r = { type: "other", value: "new line" },
    s_ = { type: "other", value: "comment" },
    S6e = { type: "literal", value: "-" },
    k6e = { type: "other", value: "digit" },
    p2 = { type: "literal", value: "." },
    Q2r = { type: "class", value: "/^[+\\-]/g" },
    J2r = { type: "other", value: "float literal" },
    LKt = { type: "literal", value: "0x" },
    Z2r = { type: "class", value: "/^[uU]/g" },
    eGr = { type: "other", value: "unsigned integer literal" },
    tGr = { type: "other", value: "integer literal" },
    nGr = { type: "class", value: "/^[rR]/g" },
    zbe = { type: "literal", value: '"""' },
    qbe = { type: "literal", value: "'''" },
    Vbe = { type: "literal", value: '"' },
    Kbe = { type: "literal", value: "'" },
    Ybe = { type: "literal", value: "\\" },
    rGr = { type: "class", value: "/^[xX]/g" },
    w6e = { type: "other", value: "byte value" },
    oGr = { type: "literal", value: "\\u" },
    sGr = { type: "literal", value: "\\U" },
    iGr = { type: "class", value: "/^[0-3]/g" },
    aGr = { type: "other", value: "escaped bytes" },
    lGr = { type: "other", value: "byte sequence" },
    cGr = { type: "class", value: "/^[abfnrtv]/g" },
    uGr = { type: "class", value: "/^[\"'`\\\\?]/g" },
    dGr = { type: "other", value: "escaped character" },
    fGr = { type: "other", value: "quoted character sequence" },
    pGr = { type: "other", value: "string literal" },
    mGr = { type: "class", value: "/^[bB]/g" },
    gGr = { type: "other", value: "bytes literal" },
    hGr = { type: "literal", value: "true" },
    yGr = { type: "literal", value: "false" },
    _Gr = { type: "other", value: "boolean literal" },
    bGr = { type: "literal", value: "null" },
    SGr = { type: "other", value: "null literal" },
    FKt = { type: "class", value: "/^[_a-zA-Z]/g" },
    kGr = { type: "other", value: "identifier" },
    E6e = { type: "literal", value: "(" },
    n6 = { type: "literal", value: "," },
    T6e = { type: "literal", value: ")" },
    wGr = { type: "other", value: "selector" },
    $Kt = { type: "literal", value: "{" },
    v6e = { type: "literal", value: ":" },
    UKt = { type: "literal", value: "}" },
    HKt = { type: "literal", value: "[" },
    jKt = { type: "literal", value: "]" },
    EGr = { type: "literal", value: "!" },
    TGr = { type: "class", value: "/^[*\\/%]/g" },
    vGr = { type: "literal", value: "<=" },
    CGr = { type: "literal", value: "<" },
    xGr = { type: "literal", value: ">=" },
    AGr = { type: "literal", value: ">" },
    RGr = { type: "literal", value: "==" },
    PGr = { type: "literal", value: "!=" },
    IGr = { type: "literal", value: "in" },
    MGr = { type: "other", value: "relational operator" },
    OGr = { type: "literal", value: "&&" },
    DGr = { type: "literal", value: "||" },
    NGr = { type: "literal", value: "?" },
    LGr = { type: "end", value: "end of input" };
  function FGr(e, t = {}) {
    let r = t.grammarSource,
      o = $n(e);
    if (o.success === !0) return o.value;
    let d = e,
      p = [];
    for (let et of o.failedExpectations) {
      if (et.remainder.length < d.length) ((d = et.remainder), (p = []));
      if (et.remainder.length === d.length) p.push(et);
    }
    throw new Xbe(
      p.map((et) => et.expectation),
      d.slice(0, 1),
      qre.getLocation(r, e, d, d),
    );
    function _(et, Ye) {
      return q_.newDoubleExpr(et(), Ye);
    }
    function E(et, Ye) {
      return q_.newUnsignedInt64Expr(et(), Ye);
    }
    function C(et, Ye) {
      return q_.newInt64Expr(et(), Ye);
    }
    function I(et) {
      return parseInt(et, 16);
    }
    function D(et) {
      return parseInt(et, 16);
    }
    function N(et) {
      return parseInt(et, 16);
    }
    function F(et) {
      return parseInt(et, 8);
    }
    function U(et) {
      switch (et) {
        case "a":
          return "\x07";
        case "b":
          return "\b";
        case "f":
          return "\f";
        case "n":
          return `
`;
        case "r":
          return "\r";
        case "t":
          return "\t";
        case "v":
          return "\v";
      }
      throw Error();
    }
    function V(et, Ye) {
      return q_.newStringExpr(et(), Ye);
    }
    function re(et, Ye) {
      return q_.newBytesExpr(et(), Ye);
    }
    function ue(et, Ye) {
      return q_.newBoolExpr(et(), Ye);
    }
    function de(et) {
      return q_.newNullExpr(et());
    }
    function _e(et, Ye) {
      if (
        [
          "true",
          "false",
          "null",
          "in",
          "as",
          "break",
          "const",
          "continue",
          "else",
          "for",
          "function",
          "if",
          "import",
          "let",
          "loop",
          "package",
          "namespace",
          "return",
          "var",
          "void",
          "while",
        ].includes(Ye)
      )
        et("reserved identifier");
      return Ye;
    }
    function Se(et, Ye, Ze) {
      return q_.newCallExpr(et(), Ye, Ze);
    }
    function ve(et, Ye) {
      if (["true", "false", "null", "in"].includes(Ye)) et("reserved keyword");
      return Ye;
    }
    function Me(et, Ye, Ze) {
      return q_.newStructEntry(et(), Ye, Ze);
    }
    function xe(et, Ye, Ze, Gn) {
      return q_.newStructExpr(et(), Gn, (Ye !== null ? Ye : "") + Ze.join("."));
    }
    function Oe(et, Ye) {
      return q_.newIdentExpr(et(), Ye);
    }
    function Ne(et, Ye) {
      return q_.newListExpr(et(), Ye);
    }
    function De(et, Ye, Ze) {
      return q_.newMapEntry(et(), Ye, Ze);
    }
    function He(et, Ye) {
      return q_.newStructExpr(et(), Ye);
    }
    function je(et, Ye) {
      return (Ze) => q_.newSelectExpr(et(), Ze, Ye);
    }
    function Ke(et, Ye, Ze) {
      return (Gn) => q_.newMemberCallExpr(et(), Gn, Ye, Ze);
    }
    function ct(et, Ye) {
      return (Ze) => q_.newCallExpr(et(), "_[_]", [Ze, Ye]);
    }
    function vt(et, Ye) {
      if (Ye.length === 0) return et;
      return Ye.reduce((Ze, Gn) => Gn(Ze), et);
    }
    function ut(et, Ye, Ze) {
      if (Ye.length % 2 === 0) return Ze;
      if (
        Ze.exprKind.case === "callExpr" &&
        Ze.exprKind.value.function === `${Ye[0]}_`
      )
        return Ze.exprKind.value.args[0];
      return q_.newCallExpr(et(), `${Ye[0]}_`, [Ze]);
    }
    function Wt(et) {
      return `_${et}_`;
    }
    function en(et, Ye, Ze) {
      return (Gn) => q_.newCallExpr(et(), Ye, [Gn, Ze]);
    }
    function tn(et, Ye) {
      if (Ye === null) return et;
      return Ye.reduce((Ze, Gn) => Gn(Ze), et);
    }
    function dn(et) {
      return `_${et}_`;
    }
    function cn(et, Ye, Ze) {
      return (Gn) => q_.newCallExpr(et(), Ye, [Gn, Ze]);
    }
    function It(et, Ye) {
      if (Ye === null) return et;
      return Ye.reduce((Ze, Gn) => Gn(Ze), et);
    }
    function Dn(et) {
      return `_${et}_`;
    }
    function gn() {
      return "@in";
    }
    function Qt(et, Ye, Ze) {
      return (Gn) => q_.newCallExpr(et(), Ye, [Gn, Ze]);
    }
    function wn(et, Ye) {
      if (Ye === null) return et;
      return Ye.reduce((Ze, Gn) => Gn(Ze), et);
    }
    function un(et, Ye) {
      if (Ye.length === 1) return Ye[0];
      let Ze = NKt.default.newBalancingLogicManager(q_, "_&&_", Ye[0]);
      for (let Gn = 1; Gn < Ye.length; Gn += 1) Ze.addTerm(et(), Ye[Gn]);
      return Ze.toExpr();
    }
    function kn(et, Ye) {
      if (Ye.length === 1) return Ye[0];
      let Ze = NKt.default.newBalancingLogicManager(q_, "_||_", Ye[0]);
      for (let Gn = 1; Gn < Ye.length; Gn += 1) Ze.addTerm(et(), Ye[Gn]);
      return Ze.toExpr();
    }
    function on(et, Ye) {
      return [et, Ye];
    }
    function En(et, Ye, Ze) {
      if (Ze === null) return Ye;
      return q_.newCallExpr(et(), "_?_:_", [Ye, ...Ze]);
    }
    function $n(et) {
      let Ye = ur(et);
      if (Ye.success === !0) {
        if (Ye.remainder.length === 0) return Ye;
        return {
          success: !1,
          remainder: Ye.remainder,
          failedExpectations: [{ expectation: LGr, remainder: Ye.remainder }],
        };
      }
      return Ye;
    }
    function ur(et) {
      let Ye = Cn(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: En(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Cn(et) {
      let Ye = [],
        Ze = et,
        Gn = Kn(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Un?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = Bje(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Gn.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Kn(et) {
      let Ye = hn(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: kn(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function hn(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let Un = Gn;
        if (Ye.length > 0) {
          let la = $je(Un);
          if ((Ze.push(...la.failedExpectations), la.success === !1)) break;
          Un = la.remainder;
        }
        let mr = At(Un);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function At(et) {
      let Ye = Fn(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: un(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Fn(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let Un = Gn;
        if (Ye.length > 0) {
          let la = l4(Un);
          if ((Ze.push(...la.failedExpectations), la.success === !1)) break;
          Un = la.remainder;
        }
        let mr = Yn(Un);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function Yn(et) {
      let Ye = Qr(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: wn(Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Qr(et) {
      let Ye = [],
        Ze = et,
        Gn = Br(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = Cxt(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Gn.value, Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Br(et) {
      let Ye = xo(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: It(Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function xo(et) {
      let Ye = [],
        Ze = et,
        Gn = ss(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = Oje(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Gn.value, Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function ss(et) {
      let Ye = qs(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: tn(Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function qs(et) {
      let Ye = [],
        Ze = et,
        Gn = ko(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = YZ(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Gn.value, Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function ko(et) {
      let Ye = [Ur, qZ],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function Ur(et) {
      let Ye = Zr(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: vt(Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Zr(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(
          /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
        );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Gn?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Wo(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Tg(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Un.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Ir(et) {
      let Ye = [],
        Ze = et,
        Gn = as(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = vr(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = $o(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Gn.value, Un.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function as(et) {
      let Ye = So(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function So(et) {
      let Ye = eo(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: n_, remainder: Ye.remainder }],
      };
    }
    function eo(et) {
      let Ye = et.match(/^([\t\n\f\r ])+/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: q2r, remainder: et }],
      };
    }
    function vr(et) {
      let Ye = bs(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function bs(et) {
      let Ye = Xs(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: s_, remainder: Ye.remainder }],
      };
    }
    function Xs(et) {
      let Ye = [],
        Ze = et,
        Gn = Rs(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = di(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = rl(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Gn.value, Un.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Rs(et) {
      if (et.startsWith("//"))
        return {
          success: !0,
          value: "//",
          remainder: et.slice(2),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: V2r, remainder: et }],
      };
    }
    function di(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = ga(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function ga(et) {
      if (/^[^\r\n]/g.test(et))
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: K2r, remainder: et }],
      };
    }
    function rl(et) {
      let Ye = gs(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: X2r, remainder: Ye.remainder }],
      };
    }
    function gs(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = vl(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function vl(et) {
      if (/^[\r\n]/g.test(et))
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: Y2r, remainder: et }],
      };
    }
    function $o(et) {
      let Ye = So(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function Wo(et) {
      let Ye = [hs, nE, Ev, Nu, qp, Eh, jb],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function hs(et) {
      let Ye = [Ai, Pa, yo, ba, Yd, Cb, Pc],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function Ai(et) {
      let Ye = ls(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: J2r, remainder: Ye.remainder }],
      };
    }
    function ls(et) {
      let Ye = ta(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: _(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function ta(et) {
      let Ye = et.match(
        /^((-)?([0-9])*\.([0-9])+([eE]([+\-])?([0-9])+)?|(-)?([0-9])+[eE]([+\-])?([0-9])+)/g,
      );
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [
          { expectation: S6e, remainder: et },
          { expectation: k6e, remainder: et },
          { expectation: p2, remainder: et },
        ],
      };
    }
    function Pa(et) {
      let Ye = gi(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: eGr, remainder: Ye.remainder }],
      };
    }
    function gi(et) {
      let Ye = js(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: E(() => e.length - et.length, Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function js(et) {
      let Ye = [],
        Ze = et,
        Gn = ml(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = Ze.match(/^[uU]/g);
      if ((Ye.push({ expectation: Z2r, remainder: Ze }), Un?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(Un[0].length)),
        {
          success: !0,
          value: [Gn.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function ml(et) {
      let Ye = et.match(/^(0x([0-9abcdefABCDEF])+|([0-9])+)/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [
          { expectation: LKt, remainder: et },
          { expectation: k6e, remainder: et },
        ],
      };
    }
    function yo(et) {
      let Ye = Fi(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: tGr, remainder: Ye.remainder }],
      };
    }
    function Fi(et) {
      let Ye = ui(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: C(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function ui(et) {
      let Ye = et.match(/^(-)?(0x([0-9abcdefABCDEF])+|([0-9])+)/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [
          { expectation: S6e, remainder: et },
          { expectation: LKt, remainder: et },
          { expectation: k6e, remainder: et },
        ],
      };
    }
    function ba(et) {
      let Ye = za(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: pGr, remainder: Ye.remainder }],
      };
    }
    function za(et) {
      let Ye = ed(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: V(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function ed(et) {
      let Ye = Ou(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: fGr, remainder: Ye.remainder }],
      };
    }
    function Ou(et) {
      let Ye = [Zu, gm],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function Zu(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^[rR]/g);
      if ((Ye.push({ expectation: nGr, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Wa(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Wa(et) {
      let Ye = [Gr, ci, na, jp],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function Gr(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^"""/g);
      if ((Ye.push({ expectation: zbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = sa(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^"""/g);
      if ((Ye.push({ expectation: zbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function sa(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = qa(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function qa(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^(?!""")/g);
      if ((Ye.push(), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = is(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function is(et) {
      if (et.length > 0)
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function ci(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^'''/g);
      if ((Ye.push({ expectation: qbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = wi(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^'''/g);
      if ((Ye.push({ expectation: qbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function wi(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = fl(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function fl(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^(?!''')/g);
      if ((Ye.push(), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = oc(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function oc(et) {
      if (et.length > 0)
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function na(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^"/g);
      if ((Ye.push({ expectation: Vbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Lc(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^"/g);
      if ((Ye.push({ expectation: Vbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Lc(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = ud(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function ud(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^(?!("|([\r\n])+))/g);
      if ((Ye.push(), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = uu(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function uu(et) {
      if (et.length > 0)
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function jp(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^'/g);
      if ((Ye.push({ expectation: Kbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Wm(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^'/g);
      if ((Ye.push({ expectation: Kbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Wm(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = oh(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function oh(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^(?!('|([\r\n])+))/g);
      if ((Ye.push(), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Gm(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Gm(et) {
      if (et.length > 0)
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function gm(et) {
      let Ye = [jd, oa, Yl, yy],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function jd(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^"""/g);
      if ((Ye.push({ expectation: zbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Zb(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^"""/g);
      if ((Ye.push({ expectation: zbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Zb(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = Os(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function Os(et) {
      let Ye = [jf, jr],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function jf(et) {
      let Ye = Rn(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: dGr, remainder: Ye.remainder }],
      };
    }
    function Rn(et) {
      let Ye = [Ar, bm, Jw],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function Ar(et) {
      let Ye = _o(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: lGr, remainder: Ye.remainder }],
      };
    }
    function _o(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = Hs(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function Hs(et) {
      let Ye = ys(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: aGr, remainder: Ye.remainder }],
      };
    }
    function ys(et) {
      let Ye = [ws, ff, Fs, Sh],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function ws(et) {
      let Ye = _s(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: I(Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function _s(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\\/g);
      if ((Ye.push({ expectation: Ybe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Ze.match(/^[xX]/g);
      if ((Ye.push({ expectation: rGr, remainder: Ze }), Un?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = _u(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function _u(et) {
      let Ye = et.match(/^([0-9abcdefABCDEF][0-9abcdefABCDEF]){0,1}/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: w6e, remainder: et }],
      };
    }
    function ff(et) {
      let Ye = Nl(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: D(Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Nl(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\\u/g);
      if ((Ye.push({ expectation: oGr, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = nl(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function nl(et) {
      let Ye = et.match(/^([0-9abcdefABCDEF][0-9abcdefABCDEF]){0,2}/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: w6e, remainder: et }],
      };
    }
    function Fs(et) {
      let Ye = _f(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: N(Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function _f(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\\U/g);
      if ((Ye.push({ expectation: sGr, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Ef(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Ef(et) {
      let Ye = et.match(/^([0-9abcdefABCDEF][0-9abcdefABCDEF]){0,4}/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: w6e, remainder: et }],
      };
    }
    function Sh(et) {
      let Ye = c_(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: F(Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function c_(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\\/g);
      if ((Ye.push({ expectation: Ybe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = zg(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function zg(et) {
      let Ye = et.match(/^[0-3][0-7][0-7]/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: iGr, remainder: et }],
      };
    }
    function bm(et) {
      let Ye = kh(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: U(Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function kh(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\\/g);
      if ((Ye.push({ expectation: Ybe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Cy(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Cy(et) {
      if (/^[abfnrtv]/g.test(et))
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: cGr, remainder: et }],
      };
    }
    function Jw(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\\/g);
      if ((Ye.push({ expectation: Ybe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = wv(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function wv(et) {
      if (/^["'`\\?]/g.test(et))
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: uGr, remainder: et }],
      };
    }
    function jr(et) {
      let Ye = et.match(/^(?!""")[\s\S]/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function oa(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^'''/g);
      if ((Ye.push({ expectation: qbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Tf(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^'''/g);
      if ((Ye.push({ expectation: qbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Tf(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = Sf(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function Sf(et) {
      let Ye = [jf, hc],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function hc(et) {
      let Ye = et.match(/^(?!''')[\s\S]/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function Yl(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^"/g);
      if ((Ye.push({ expectation: Vbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = nu(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^"/g);
      if ((Ye.push({ expectation: Vbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function nu(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = cf(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function cf(et) {
      let Ye = [jf, uc],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function uc(et) {
      let Ye = et.match(/^(?!("|([\r\n])+))[\s\S]/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function yy(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^'/g);
      if ((Ye.push({ expectation: Kbe, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = ew(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^'/g);
      if ((Ye.push({ expectation: Kbe, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function ew(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = KE(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function KE(et) {
      let Ye = [jf, Cc],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function Cc(et) {
      let Ye = et.match(/^(?!('|([\r\n])+))[\s\S]/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: GB, remainder: et }],
      };
    }
    function Yd(et) {
      let Ye = dc(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: gGr, remainder: Ye.remainder }],
      };
    }
    function dc(et) {
      let Ye = Ah(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: re(() => e.length - et.length, Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Ah(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^[bB]/g);
      if ((Ye.push({ expectation: mGr, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = ed(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        {
          success: !0,
          value: [Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Cb(et) {
      let Ye = Zw(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: _Gr, remainder: Ye.remainder }],
      };
    }
    function Zw(et) {
      let Ye = L_(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: ue(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function L_(et) {
      let Ye = [sh, zm],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function sh(et) {
      if (et.startsWith("true"))
        return {
          success: !0,
          value: "true",
          remainder: et.slice(4),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: hGr, remainder: et }],
      };
    }
    function zm(et) {
      if (et.startsWith("false"))
        return {
          success: !0,
          value: "false",
          remainder: et.slice(5),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: yGr, remainder: et }],
      };
    }
    function Pc(et) {
      let Ye = Ab(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: SGr, remainder: Ye.remainder }],
      };
    }
    function Ab(et) {
      let Ye = Gp(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: de(() => e.length - et.length),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Gp(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^null/g);
      if ((Ye.push({ expectation: bGr, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Ze.match(/^(?![_a-zA-Z0-9])/g);
      if ((Ye.push(), Un?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(Un[0].length)),
        { success: !0, value: [], remainder: Ze, failedExpectations: Ye }
      );
    }
    function nE(et) {
      let Ye = ty(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Se(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function ty(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^(\.)?/g);
      if ((Ye.push({ expectation: p2, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Un?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = by(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      Ze = mr.remainder;
      let la = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        la?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(la[0].length);
      let lu = Ze.match(/^\(/g);
      if ((Ye.push({ expectation: E6e, remainder: Ze }), lu?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(lu[0].length);
      let pd = YE(Ze);
      if ((Ye.push(...pd.failedExpectations), pd.success === !1))
        return { success: !1, remainder: pd.remainder, failedExpectations: Ye };
      Ze = pd.remainder;
      let qf = Ze.match(/^\)/g);
      if ((Ye.push({ expectation: T6e, remainder: Ze }), qf?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(qf[0].length)),
        {
          success: !0,
          value: [mr.value, pd.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function by(et) {
      let Ye = lk(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: kGr, remainder: Ye.remainder }],
      };
    }
    function lk(et) {
      let Ye = Ay(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: _e((Ze, Gn = qre.getLocation(r, e, et, Ye.remainder), Un) => {
            throw new o6(Ze, Gn, Un);
          }, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Ay(et) {
      let Ye = et.match(/^[_a-zA-Z]([_a-zA-Z0-9])*/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: FKt, remainder: et }],
      };
    }
    function YE(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let Un = Gn;
        if (Ye.length > 0) {
          let la = s4(Un);
          if ((Ze.push(...la.failedExpectations), la.success === !1)) break;
          Un = la.remainder;
        }
        let mr = ur(Un);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function s4(et) {
      if (et.startsWith(","))
        return {
          success: !0,
          value: ",",
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: n6, remainder: et }],
      };
    }
    function Ev(et) {
      let Ye = XE(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: xe(
            () => e.length - et.length,
            Ye.value[0],
            Ye.value[1],
            Ye.value[2],
          ),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function XE(et) {
      let Ye = [],
        Ze = et,
        Gn = JE(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Un?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = Oj(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      Ze = mr.remainder;
      let la = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        la?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(la[0].length);
      let lu = Ze.match(/^\{/g);
      if ((Ye.push({ expectation: $Kt, remainder: Ze }), lu?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(lu[0].length);
      let pd = sE(Ze);
      if ((Ye.push(...pd.failedExpectations), pd.success === !1))
        return { success: !1, remainder: pd.remainder, failedExpectations: Ye };
      Ze = pd.remainder;
      let qf = Ze.match(/^(,)?/g);
      if ((Ye.push({ expectation: n6, remainder: Ze }), qf?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(qf[0].length);
      let km = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        km?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(km[0].length);
      let lE = Ze.match(/^\}/g);
      if ((Ye.push({ expectation: UKt, remainder: Ze }), lE?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(lE[0].length)),
        {
          success: !0,
          value: [Gn.value, mr.value, pd.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function JE(et) {
      let Ye = jZ(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function jZ(et) {
      if (et.startsWith("."))
        return {
          success: !0,
          value: ".",
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: p2, remainder: et }],
      };
    }
    function Oj(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let Un = Gn;
        if (Ye.length > 0) {
          let la = vs(Un);
          if ((Ze.push(...la.failedExpectations), la.success === !1)) break;
          Un = la.remainder;
        }
        let mr = Kx(Un);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function Kx(et) {
      let Ye = lx(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: wGr, remainder: Ye.remainder }],
      };
    }
    function lx(et) {
      let Ye = Nj(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: ve((Ze, Gn = qre.getLocation(r, e, et, Ye.remainder), Un) => {
            throw new o6(Ze, Gn, Un);
          }, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Nj(et) {
      let Ye = et.match(/^[_a-zA-Z]([_a-zA-Z0-9])*/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: FKt, remainder: et }],
      };
    }
    function vs(et) {
      let Ye = [],
        Ze = et,
        Gn = Ir(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = dp(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ir(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Gn.value, Un.value, Gn.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function dp(et) {
      if (et.startsWith("."))
        return {
          success: !0,
          value: ".",
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: p2, remainder: et }],
      };
    }
    function sE(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let Un = Gn;
        if (Ye.length > 0) {
          let la = Tv(Un);
          if ((Ze.push(...la.failedExpectations), la.success === !1)) break;
          Un = la.remainder;
        }
        let mr = tw(Un);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function tw(et) {
      let Ye = iE(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Me(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function iE(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(
          /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
        );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Gn?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Kx(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?:/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
          { expectation: v6e, remainder: Ze },
        ),
        mr?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(mr[0].length);
      let la = ur(Ze);
      if ((Ye.push(...la.failedExpectations), la.success === !1))
        return { success: !1, remainder: la.remainder, failedExpectations: Ye };
      return (
        (Ze = la.remainder),
        {
          success: !0,
          value: [Un.value, la.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Tv(et) {
      if (et.startsWith(","))
        return {
          success: !0,
          value: ",",
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: n6, remainder: et }],
      };
    }
    function Nu(et) {
      let Ye = Wf(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Oe(() => e.length - et.length, Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Wf(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^(\.)?/g);
      if ((Ye.push({ expectation: p2, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Un?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = Kx(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function qp(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\(/g);
      if ((Ye.push({ expectation: E6e, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = ur(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^\)/g);
      if ((Ye.push({ expectation: T6e, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Eh(et) {
      let Ye = Ry(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Ne(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Ry(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\[/g);
      if ((Ye.push({ expectation: HKt, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = YE(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^(,)?/g);
      if ((Ye.push({ expectation: n6, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(mr[0].length);
      let la = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        la?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(la[0].length);
      let lu = Ze.match(/^\]/g);
      if ((Ye.push({ expectation: jKt, remainder: Ze }), lu?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(lu[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function jb(et) {
      let Ye = gw(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: He(() => e.length - et.length, Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function gw(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\{/g);
      if ((Ye.push({ expectation: $Kt, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = _d(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(
        /^(,)?(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?\}/g,
      );
      if (
        (Ye.push(
          { expectation: n6, remainder: Ze },
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
          { expectation: UKt, remainder: Ze },
        ),
        mr?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function _d(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let Un = Gn;
        if (Ye.length > 0) {
          let la = W_(Un);
          if ((Ze.push(...la.failedExpectations), la.success === !1)) break;
          Un = la.remainder;
        }
        let mr = u_(Un);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function u_(et) {
      let Ye = Rh(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: De(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function Rh(et) {
      let Ye = [],
        Ze = et,
        Gn = ur(Ze);
      if ((Ye.push(...Gn.failedExpectations), Gn.success === !1))
        return { success: !1, remainder: Gn.remainder, failedExpectations: Ye };
      Ze = Gn.remainder;
      let Un = Ze.match(/^:/g);
      if ((Ye.push({ expectation: v6e, remainder: Ze }), Un?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = ur(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Gn.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function W_(et) {
      if (et.startsWith(","))
        return {
          success: !0,
          value: ",",
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: n6, remainder: et }],
      };
    }
    function Tg(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = aE(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function aE(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(
          /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
        );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Gn?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Lj(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      return (
        (Ze = Un.remainder),
        { success: !0, value: Un.value, remainder: Ze, failedExpectations: Ye }
      );
    }
    function Lj(et) {
      let Ye = [eS, Fj, GZ],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function eS(et) {
      let Ye = ck(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: je(() => e.length - et.length, Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function ck(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\./g);
      if ((Ye.push({ expectation: p2, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Un?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = Kx(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      Ze = mr.remainder;
      let la = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        la?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(la[0].length);
      let lu = Ze.match(/^(?![(])/g);
      if ((Ye.push(), lu?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(lu[0].length)),
        {
          success: !0,
          value: [mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Fj(et) {
      let Ye = WZ(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Ke(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function WZ(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\./g);
      if ((Ye.push({ expectation: p2, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Un?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Un[0].length);
      let mr = Kx(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      Ze = mr.remainder;
      let la = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        la?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(la[0].length);
      let lu = Ze.match(/^\(/g);
      if ((Ye.push({ expectation: E6e, remainder: Ze }), lu?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(lu[0].length);
      let pd = YE(Ze);
      if ((Ye.push(...pd.failedExpectations), pd.success === !1))
        return { success: !1, remainder: pd.remainder, failedExpectations: Ye };
      Ze = pd.remainder;
      let qf = Ze.match(/^\)/g);
      if ((Ye.push({ expectation: T6e, remainder: Ze }), qf?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(qf[0].length)),
        {
          success: !0,
          value: [mr.value, pd.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function GZ(et) {
      let Ye = zZ(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: ct(() => e.length - et.length, Ye.value[0]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function zZ(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\[/g);
      if ((Ye.push({ expectation: HKt, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = ur(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(/^\]/g);
      if ((Ye.push({ expectation: jKt, remainder: Ze }), mr?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(mr[0].length)),
        {
          success: !0,
          value: [Un.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function qZ(et) {
      let Ye = VZ(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: ut(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function VZ(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(
          /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
        );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Gn?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = KZ(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ur(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Un.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function KZ(et) {
      let Ye = et.match(/^((!)+|(-)+)/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [
          { expectation: EGr, remainder: et },
          { expectation: S6e, remainder: et },
        ],
      };
    }
    function YZ(et) {
      let Ye = Ije(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function Ije(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = wF(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function wF(et) {
      let Ye = jge(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: en(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function jge(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(
          /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
        );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Gn?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = GR(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = ko(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Un.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function GR(et) {
      let Ye = qge(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Wt(Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function qge(et) {
      if (/^[*\/%]/g.test(et))
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: TGr, remainder: et }],
      };
    }
    function Oje(et) {
      let Ye = Vge(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function Vge(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = Kge(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function Kge(et) {
      let Ye = XZ(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: cn(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function XZ(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(
          /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
        );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Gn?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Yge(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = ss(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Un.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Yge(et) {
      let Ye = QZ(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: dn(Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function QZ(et) {
      if (/^[+\-]/g.test(et))
        return {
          success: !0,
          value: et.slice(0, 1),
          remainder: et.slice(1),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: Q2r, remainder: et }],
      };
    }
    function Cxt(et) {
      let Ye = Qge(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function Qge(et) {
      let Ye = [],
        Ze = [],
        Gn = et;
      while (!0) {
        let mr = Zge(Gn);
        if ((Ze.push(...mr.failedExpectations), mr.success === !1)) break;
        ((Gn = mr.remainder), Ye.push(mr.value));
      }
      if (Ye.length < 1)
        return { success: !1, remainder: et, failedExpectations: Ze };
      return { success: !0, value: Ye, remainder: Gn, failedExpectations: Ze };
    }
    function Zge(et) {
      let Ye = $j(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Qt(() => e.length - et.length, Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function $j(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(
          /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
        );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        Gn?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Yx(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Br(Ze);
      if ((Ye.push(...mr.failedExpectations), mr.success === !1))
        return { success: !1, remainder: mr.remainder, failedExpectations: Ye };
      return (
        (Ze = mr.remainder),
        {
          success: !0,
          value: [Un.value, mr.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
    function Yx(et) {
      let Ye = i4(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !1,
        remainder: Ye.remainder,
        failedExpectations: [{ expectation: MGr, remainder: Ye.remainder }],
      };
    }
    function i4(et) {
      let Ye = [JZ, ehe],
        Ze = [];
      for (let Gn = Ye.shift(); Gn !== void 0; Gn = Ye.shift()) {
        let Un = Gn(et);
        if ((Ze.push(...Un.failedExpectations), Un.success === !0))
          return {
            success: !0,
            value: Un.value,
            remainder: Un.remainder,
            failedExpectations: Ze,
          };
      }
      return { success: !1, remainder: et, failedExpectations: Ze };
    }
    function JZ(et) {
      let Ye = ED(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: Dn(Ye.value),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function ED(et) {
      let Ye = et.match(/^(<=|<|>=|>|==|!=)/g);
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [
          { expectation: vGr, remainder: et },
          { expectation: CGr, remainder: et },
          { expectation: xGr, remainder: et },
          { expectation: AGr, remainder: et },
          { expectation: RGr, remainder: et },
          { expectation: PGr, remainder: et },
        ],
      };
    }
    function ehe(et) {
      let Ye = a4(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: gn(),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function a4(et) {
      if (et.startsWith("in"))
        return {
          success: !0,
          value: "in",
          remainder: et.slice(2),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [{ expectation: IGr, remainder: et }],
      };
    }
    function l4(et) {
      let Ye = et.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?&&/g,
      );
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [
          { expectation: n_, remainder: et },
          { expectation: s_, remainder: et },
          { expectation: OGr, remainder: et },
        ],
      };
    }
    function $je(et) {
      let Ye = et.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?\|\|/g,
      );
      if (Ye?.length === 1)
        return {
          success: !0,
          value: Ye[0],
          remainder: et.slice(Ye[0].length),
          failedExpectations: [],
        };
      return {
        success: !1,
        remainder: et,
        failedExpectations: [
          { expectation: n_, remainder: et },
          { expectation: s_, remainder: et },
          { expectation: DGr, remainder: et },
        ],
      };
    }
    function Bje(et) {
      let Ye = Uje(et);
      if (Ye.success === !0) return Ye;
      return {
        success: !0,
        value: null,
        remainder: et,
        failedExpectations: Ye.failedExpectations,
      };
    }
    function Uje(et) {
      let Ye = rhe(et);
      if (Ye.success === !0)
        return {
          success: !0,
          value: on(Ye.value[0], Ye.value[1]),
          remainder: Ye.remainder,
          failedExpectations: [],
        };
      return Ye;
    }
    function rhe(et) {
      let Ye = [],
        Ze = et,
        Gn = Ze.match(/^\?/g);
      if ((Ye.push({ expectation: NGr, remainder: Ze }), Gn?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(Gn[0].length);
      let Un = Kn(Ze);
      if ((Ye.push(...Un.failedExpectations), Un.success === !1))
        return { success: !1, remainder: Un.remainder, failedExpectations: Ye };
      Ze = Un.remainder;
      let mr = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        mr?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(mr[0].length);
      let la = Ze.match(/^:/g);
      if ((Ye.push({ expectation: v6e, remainder: Ze }), la?.length !== 1))
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      Ze = Ze.slice(la[0].length);
      let lu = ur(Ze);
      if ((Ye.push(...lu.failedExpectations), lu.success === !1))
        return { success: !1, remainder: lu.remainder, failedExpectations: Ye };
      Ze = lu.remainder;
      let pd = Ze.match(
        /^(([\t\n\f\r ])+)?(\/\/([^\r\n])*([\r\n])+)?(([\t\n\f\r ])+)?/g,
      );
      if (
        (Ye.push(
          { expectation: n_, remainder: Ze },
          { expectation: s_, remainder: Ze },
        ),
        pd?.length !== 1)
      )
        return { success: !1, remainder: Ze, failedExpectations: Ye };
      return (
        (Ze = Ze.slice(pd[0].length)),
        {
          success: !0,
          value: [Un.value, lu.value],
          remainder: Ze,
          failedExpectations: Ye,
        }
      );
    }
  }
});
var C6e = commonJS(function (qKt) {
  Object.defineProperty(qKt, "__esModule", { value: !0 });
  qKt.parse = WGr;
  var UGr = Wbe(),
    HGr = zKt(),
    jGr = Rv();
  function WGr(e) {
    return (0, jGr.create)(UGr.ParsedExprSchema, { expr: (0, HGr.parse)(e) });
  }
});
var ZKt = commonJS(function (QKt) {
  Object.defineProperty(QKt, "__esModule", { value: !0 });
  QKt.ReferenceSchema =
    QKt.Decl_FunctionDecl_OverloadSchema =
    QKt.Decl_FunctionDeclSchema =
    QKt.Decl_IdentDeclSchema =
    QKt.DeclSchema =
    QKt.Type_WellKnownTypeSchema =
    QKt.Type_WellKnownType =
    QKt.Type_PrimitiveTypeSchema =
    QKt.Type_PrimitiveType =
    QKt.Type_AbstractTypeSchema =
    QKt.Type_FunctionTypeSchema =
    QKt.Type_MapTypeSchema =
    QKt.Type_ListTypeSchema =
    QKt.TypeSchema =
    QKt.CheckedExprSchema =
    QKt.file_cel_expr_checked =
      void 0;
  var Mv = y6e(),
    zGr = Wbe(),
    VKt = mE();
  QKt.file_cel_expr_checked = (0, Mv.fileDesc)(
    "ChZjZWwvZXhwci9jaGVja2VkLnByb3RvEghjZWwuZXhwciLsAgoLQ2hlY2tlZEV4cHISPgoNcmVmZXJlbmNlX21hcBgCIAMoCzInLmNlbC5leHByLkNoZWNrZWRFeHByLlJlZmVyZW5jZU1hcEVudHJ5EjQKCHR5cGVfbWFwGAMgAygLMiIuY2VsLmV4cHIuQ2hlY2tlZEV4cHIuVHlwZU1hcEVudHJ5EikKC3NvdXJjZV9pbmZvGAUgASgLMhQuY2VsLmV4cHIuU291cmNlSW5mbxIUCgxleHByX3ZlcnNpb24YBiABKAkSHAoEZXhwchgEIAEoCzIOLmNlbC5leHByLkV4cHIaSAoRUmVmZXJlbmNlTWFwRW50cnkSCwoDa2V5GAEgASgDEiIKBXZhbHVlGAIgASgLMhMuY2VsLmV4cHIuUmVmZXJlbmNlOgI4ARo+CgxUeXBlTWFwRW50cnkSCwoDa2V5GAEgASgDEh0KBXZhbHVlGAIgASgLMg4uY2VsLmV4cHIuVHlwZToCOAEioggKBFR5cGUSJQoDZHluGAEgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5SAASKgoEbnVsbBgCIAEoDjIaLmdvb2dsZS5wcm90b2J1Zi5OdWxsVmFsdWVIABIxCglwcmltaXRpdmUYAyABKA4yHC5jZWwuZXhwci5UeXBlLlByaW1pdGl2ZVR5cGVIABIvCgd3cmFwcGVyGAQgASgOMhwuY2VsLmV4cHIuVHlwZS5QcmltaXRpdmVUeXBlSAASMgoKd2VsbF9rbm93bhgFIAEoDjIcLmNlbC5leHByLlR5cGUuV2VsbEtub3duVHlwZUgAEiwKCWxpc3RfdHlwZRgGIAEoCzIXLmNlbC5leHByLlR5cGUuTGlzdFR5cGVIABIqCghtYXBfdHlwZRgHIAEoCzIWLmNlbC5leHByLlR5cGUuTWFwVHlwZUgAEi8KCGZ1bmN0aW9uGAggASgLMhsuY2VsLmV4cHIuVHlwZS5GdW5jdGlvblR5cGVIABIWCgxtZXNzYWdlX3R5cGUYCSABKAlIABIUCgp0eXBlX3BhcmFtGAogASgJSAASHgoEdHlwZRgLIAEoCzIOLmNlbC5leHByLlR5cGVIABInCgVlcnJvchgMIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eUgAEjQKDWFic3RyYWN0X3R5cGUYDiABKAsyGy5jZWwuZXhwci5UeXBlLkFic3RyYWN0VHlwZUgAGi0KCExpc3RUeXBlEiEKCWVsZW1fdHlwZRgBIAEoCzIOLmNlbC5leHByLlR5cGUaTwoHTWFwVHlwZRIgCghrZXlfdHlwZRgBIAEoCzIOLmNlbC5leHByLlR5cGUSIgoKdmFsdWVfdHlwZRgCIAEoCzIOLmNlbC5leHByLlR5cGUaVgoMRnVuY3Rpb25UeXBlEiMKC3Jlc3VsdF90eXBlGAEgASgLMg4uY2VsLmV4cHIuVHlwZRIhCglhcmdfdHlwZXMYAiADKAsyDi5jZWwuZXhwci5UeXBlGkUKDEFic3RyYWN0VHlwZRIMCgRuYW1lGAEgASgJEicKD3BhcmFtZXRlcl90eXBlcxgCIAMoCzIOLmNlbC5leHByLlR5cGUicwoNUHJpbWl0aXZlVHlwZRIeChpQUklNSVRJVkVfVFlQRV9VTlNQRUNJRklFRBAAEggKBEJPT0wQARIJCgVJTlQ2NBACEgoKBlVJTlQ2NBADEgoKBkRPVUJMRRAEEgoKBlNUUklORxAFEgkKBUJZVEVTEAYiVgoNV2VsbEtub3duVHlwZRIfChtXRUxMX0tOT1dOX1RZUEVfVU5TUEVDSUZJRUQQABIHCgNBTlkQARINCglUSU1FU1RBTVAQAhIMCghEVVJBVElPThADQgsKCXR5cGVfa2luZCLWAwoERGVjbBIMCgRuYW1lGAEgASgJEikKBWlkZW50GAIgASgLMhguY2VsLmV4cHIuRGVjbC5JZGVudERlY2xIABIvCghmdW5jdGlvbhgDIAEoCzIbLmNlbC5leHByLkRlY2wuRnVuY3Rpb25EZWNsSAAaWQoJSWRlbnREZWNsEhwKBHR5cGUYASABKAsyDi5jZWwuZXhwci5UeXBlEiEKBXZhbHVlGAIgASgLMhIuY2VsLmV4cHIuQ29uc3RhbnQSCwoDZG9jGAMgASgJGvsBCgxGdW5jdGlvbkRlY2wSNwoJb3ZlcmxvYWRzGAEgAygLMiQuY2VsLmV4cHIuRGVjbC5GdW5jdGlvbkRlY2wuT3ZlcmxvYWQSCwoDZG9jGAIgASgJGqQBCghPdmVybG9hZBITCgtvdmVybG9hZF9pZBgBIAEoCRIeCgZwYXJhbXMYAiADKAsyDi5jZWwuZXhwci5UeXBlEhMKC3R5cGVfcGFyYW1zGAMgAygJEiMKC3Jlc3VsdF90eXBlGAQgASgLMg4uY2VsLmV4cHIuVHlwZRIcChRpc19pbnN0YW5jZV9mdW5jdGlvbhgFIAEoCBILCgNkb2MYBiABKAlCCwoJZGVjbF9raW5kIlEKCVJlZmVyZW5jZRIMCgRuYW1lGAEgASgJEhMKC292ZXJsb2FkX2lkGAMgAygJEiEKBXZhbHVlGAQgASgLMhIuY2VsLmV4cHIuQ29uc3RhbnRCLAoMZGV2LmNlbC5leHByQglEZWNsUHJvdG9QAVoMY2VsLmRldi9leHBy+AEBYgZwcm90bzM",
    [
      zGr.file_cel_expr_syntax,
      VKt.file_google_protobuf_empty,
      VKt.file_google_protobuf_struct,
    ],
  );
  QKt.CheckedExprSchema = (0, Mv.messageDesc)(QKt.file_cel_expr_checked, 0);
  QKt.TypeSchema = (0, Mv.messageDesc)(QKt.file_cel_expr_checked, 1);
  QKt.Type_ListTypeSchema = (0, Mv.messageDesc)(
    QKt.file_cel_expr_checked,
    1,
    0,
  );
  QKt.Type_MapTypeSchema = (0, Mv.messageDesc)(QKt.file_cel_expr_checked, 1, 1);
  QKt.Type_FunctionTypeSchema = (0, Mv.messageDesc)(
    QKt.file_cel_expr_checked,
    1,
    2,
  );
  QKt.Type_AbstractTypeSchema = (0, Mv.messageDesc)(
    QKt.file_cel_expr_checked,
    1,
    3,
  );
  var YKt;
  (function (e) {
    ((e[(e.PRIMITIVE_TYPE_UNSPECIFIED = 0)] = "PRIMITIVE_TYPE_UNSPECIFIED"),
      (e[(e.BOOL = 1)] = "BOOL"),
      (e[(e.INT64 = 2)] = "INT64"),
      (e[(e.UINT64 = 3)] = "UINT64"),
      (e[(e.DOUBLE = 4)] = "DOUBLE"),
      (e[(e.STRING = 5)] = "STRING"),
      (e[(e.BYTES = 6)] = "BYTES"));
  })(YKt || (QKt.Type_PrimitiveType = YKt = {}));
  QKt.Type_PrimitiveTypeSchema = (0, Mv.enumDesc)(
    QKt.file_cel_expr_checked,
    1,
    0,
  );
  var XKt;
  (function (e) {
    ((e[(e.WELL_KNOWN_TYPE_UNSPECIFIED = 0)] = "WELL_KNOWN_TYPE_UNSPECIFIED"),
      (e[(e.ANY = 1)] = "ANY"),
      (e[(e.TIMESTAMP = 2)] = "TIMESTAMP"),
      (e[(e.DURATION = 3)] = "DURATION"));
  })(XKt || (QKt.Type_WellKnownType = XKt = {}));
  QKt.Type_WellKnownTypeSchema = (0, Mv.enumDesc)(
    QKt.file_cel_expr_checked,
    1,
    1,
  );
  QKt.DeclSchema = (0, Mv.messageDesc)(QKt.file_cel_expr_checked, 2);
  QKt.Decl_IdentDeclSchema = (0, Mv.messageDesc)(
    QKt.file_cel_expr_checked,
    2,
    0,
  );
  QKt.Decl_FunctionDeclSchema = (0, Mv.messageDesc)(
    QKt.file_cel_expr_checked,
    2,
    1,
  );
  QKt.Decl_FunctionDecl_OverloadSchema = (0, Mv.messageDesc)(
    QKt.file_cel_expr_checked,
    2,
    1,
    0,
  );
  QKt.ReferenceSchema = (0, Mv.messageDesc)(QKt.file_cel_expr_checked, 3);
});
var s4t = commonJS(function (e4t) {
  Object.defineProperty(e4t, "__esModule", { value: !0 });
  e4t.accessByIndex = azr;
  e4t.accessByName = lzr;
  e4t.isSet = czr;
  var x6e = uN(),
    Qbe = mE(),
    A6e = hM(),
    Vre = xN(),
    izr = Cre(),
    R6e = TN();
  function azr(e, t) {
    if (typeof e !== "object" || e === null) return;
    if ((0, Vre.isCelMap)(e)) return e.get(t);
    if ((0, A6e.isCelList)(e)) return e.get(Number(t));
    return;
  }
  function lzr(e, t) {
    if (typeof e !== "object" || e === null) return;
    if ((0, Vre.isCelMap)(e)) return e.get(t);
    if (((e = (0, R6e.unwrapAny)(e)), !(0, x6e.isReflectMessage)(e))) return;
    let r = e.desc.fields.find((o) => o.name === t);
    if (!r) return;
    switch (r.fieldKind) {
      case "enum":
        return BigInt(e.get(r));
      case "list":
        return (0, A6e.celList)(e.get(r));
      case "map":
        return (0, Vre.celMap)(e.get(r));
      case "scalar":
        return (0, izr.celFromScalar)(r.scalar, e.get(r));
      case "message":
        if (e.isSet(r)) return (0, R6e.reflectMsgToCel)(e.get(r));
        if ((0, Qbe.isWrapperDesc)(r.message)) return null;
        switch (r.message.typeName) {
          case Qbe.StructSchema.typeName:
            return Vre.EMPTY_MAP;
          case Qbe.ListValueSchema.typeName:
            return A6e.EMPTY_LIST;
          case Qbe.ValueSchema.typeName:
            return null;
        }
        return (0, x6e.reflect)(r.message);
    }
  }
  function czr(e, t) {
    if (typeof e !== "object" || e === null) return !1;
    if ((0, Vre.isCelMap)(e)) return e.has(t);
    if (((e = (0, R6e.unwrapAny)(e)), (0, x6e.isReflectMessage)(e))) {
      let r = e.desc.fields.find((o) => o.name === t);
      if (!r) return;
      return e.isSet(r);
    }
    return !1;
  }
});
export {
  C6e,
  Cre,
  NA,
  Nbe,
  OB,
  Rv,
  TN,
  Tbe,
  Wbe,
  YGe,
  ZKt,
  d4e,
  h6e,
  hM,
  mE,
  picomatchModule,
  s4t,
  u2,
  uN,
  xN,
  xx,
  z5,
};

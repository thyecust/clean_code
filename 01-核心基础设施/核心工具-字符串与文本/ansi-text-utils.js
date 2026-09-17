// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { pluralize } from "./string-utils.js";
import { getGraphemeSegmenter, getRelativeTimeFormat, getResolvedTimeZone, getNumberFormat } from "../共享小工具-未细化/intl-text-utils.js";
import { formatFileSize } from "../共享小工具-未细化/chunk-7axvc6rn.js";
var O = { ambiguousIsNarrow: !0 };
function getStringWidth(t) {
  return Bun.stringWidth(t, O);
}
var CONTROL_CHAR_CODES = {
    NUL: 0,
    SOH: 1,
    STX: 2,
    ETX: 3,
    EOT: 4,
    ENQ: 5,
    ACK: 6,
    BEL: 7,
    BS: 8,
    HT: 9,
    LF: 10,
    VT: 11,
    FF: 12,
    CR: 13,
    SO: 14,
    SI: 15,
    DLE: 16,
    DC1: 17,
    DC2: 18,
    DC3: 19,
    DC4: 20,
    NAK: 21,
    SYN: 22,
    ETB: 23,
    CAN: 24,
    EM: 25,
    SUB: 26,
    ESC: 27,
    FS: 28,
    GS: 29,
    RS: 30,
    US: 31,
    DEL: 127,
  },
  ESCAPE_CHARACTER = "\x1B",
  BELL_CHARACTER = "\x07",
  PARAM_SEPARATOR = ";",
  RESET_CHARSET_SEQUENCE = "\x1B(B\x0F",
  CONTROL_INTRODUCER_CODES = { CSI: 91, OSC: 93, DCS: 80, APC: 95, PM: 94, SOS: 88, ST: 92 };
function E(t) {
  return t >= 48 && t <= 126;
}
var b = ESCAPE_CHARACTER + String.fromCharCode(CONTROL_INTRODUCER_CODES.CSI),
  g = {
    PARAM_START: 48,
    PARAM_END: 63,
    INTERMEDIATE_START: 32,
    INTERMEDIATE_END: 47,
    FINAL_START: 64,
    FINAL_END: 126,
  };
function T(t) {
  return t >= g.PARAM_START && t <= g.PARAM_END;
}
function S(t) {
  return t >= g.INTERMEDIATE_START && t <= g.INTERMEDIATE_END;
}
function C(t) {
  return t >= g.FINAL_START && t <= g.FINAL_END;
}
function buildCsiSequence(...t) {
  if (t.length === 0) return b;
  if (t.length === 1) return `${b}${t[0]}`;
  let e = t.slice(0, -1),
    n = t.at(-1);
  return `${b}${e.join(PARAM_SEPARATOR)}${n}`;
}
var CSI_COMMAND_CODES = {
    CUU: 65,
    CUD: 66,
    CUF: 67,
    CUB: 68,
    CNL: 69,
    CPL: 70,
    CHA: 71,
    CUP: 72,
    CHT: 73,
    HPA: 96,
    HPR: 97,
    VPA: 100,
    VPR: 101,
    HVP: 102,
    ED: 74,
    EL: 75,
    ECH: 88,
    IL: 76,
    DL: 77,
    ICH: 64,
    DCH: 80,
    SU: 83,
    SD: 84,
    SM: 104,
    RM: 108,
    SGR: 109,
    DSR: 110,
    DECSCUSR: 113,
    DECSTBM: 114,
    SCOSC: 115,
    SCORC: 117,
    CBT: 90,
  },
  ERASE_DISPLAY_REGIONS = ["toEnd", "toStart", "all", "scrollback"],
  ERASE_LINE_REGIONS = ["toEnd", "toStart", "all"],
  CURSOR_STYLE_PRESETS = [
    { style: "block", blinking: !0 },
    { style: "block", blinking: !0 },
    { style: "block", blinking: !1 },
    { style: "underline", blinking: !0 },
    { style: "underline", blinking: !1 },
    { style: "bar", blinking: !0 },
    { style: "bar", blinking: !1 },
  ];
function A(t = 1) {
  return t === 0 ? "" : buildCsiSequence(t, "A");
}
function cursorDown(t = 1) {
  return t === 0 ? "" : buildCsiSequence(t, "B");
}
function N(t = 1) {
  return t === 0 ? "" : buildCsiSequence(t, "C");
}
function k(t = 1) {
  return t === 0 ? "" : buildCsiSequence(t, "D");
}
function cursorToColumn(t) {
  return buildCsiSequence(t, "G");
}
var cursorToFirstColumn = buildCsiSequence("G");
function cursorToPosition(t, e) {
  return buildCsiSequence(t, e, "H");
}
var CURSOR_HOME_SEQUENCE = buildCsiSequence("H");
function moveCursorBy(t, e) {
  let n = "";
  if (t < 0) n += k(-t);
  else if (t > 0) n += N(t);
  if (e < 0) n += A(-e);
  else if (e > 0) n += cursorDown(e);
  return n;
}
function eraseToLineEnd() {
  return buildCsiSequence("K");
}
var ERASE_ENTIRE_LINE = buildCsiSequence(2, "K"),
  ERASE_SCREEN_SEQUENCE = buildCsiSequence(2, "J"),
  ERASE_SCROLLBACK_SEQUENCE = buildCsiSequence(3, "J");
function clearLines(t) {
  if (t <= 0) return "";
  let e = "";
  for (let n = 0; n < t; n++) if (((e += ERASE_ENTIRE_LINE), n < t - 1)) e += A(1);
  return ((e += cursorToFirstColumn), e);
}
function scrollUp(t = 1) {
  return t === 0 ? "" : buildCsiSequence(t, "S");
}
function scrollDown(t = 1) {
  return t === 0 ? "" : buildCsiSequence(t, "T");
}
function setScrollRegion(t, e) {
  return buildCsiSequence(t, e, "r");
}
var RESET_SCROLL_REGION = buildCsiSequence("r"),
  BRACKETED_PASTE_START = buildCsiSequence("200~"),
  BRACKETED_PASTE_END = buildCsiSequence("201~"),
  FOCUS_IN_SEQUENCE = buildCsiSequence("I"),
  FOCUS_OUT_SEQUENCE = buildCsiSequence("O"),
  KITTY_KEYBOARD_PUSH_ENHANCED = buildCsiSequence(">5u"),
  KITTY_KEYBOARD_PUSH_LEGACY = buildCsiSequence(">1u"),
  KITTY_KEYBOARD_POP = buildCsiSequence("<u"),
  ENABLE_MODIFY_OTHER_KEYS = buildCsiSequence(">4;2m"),
  DISABLE_MODIFY_OTHER_KEYS = buildCsiSequence(">4m");
var y = /^\[M[\x60-\x7f][\x20-\uffff]?$/;
function createAnsiTokenizer(t) {
  let e = "ground",
    n = "",
    r = t?.x10Mouse ?? !1,
    o = t?.forOutput ?? !1;
  return {
    feed(i) {
      let u = I(i, e, n, !1, r, o);
      return ((e = u.state.state), (n = u.state.buffer), u.tokens);
    },
    flush() {
      let i = I("", e, n, !0, r, o);
      return ((e = i.state.state), (n = i.state.buffer), i.tokens);
    },
    reset() {
      ((e = "ground"), (n = ""));
    },
    buffer() {
      return n;
    },
  };
}
function I(t, e, n, r, o, i) {
  let u = [],
    c = { state: e, buffer: "" },
    f = n + t,
    s = 0,
    p = 0,
    l = 0,
    m = () => {
      if (s > p) {
        let a = f.slice(p, s);
        if (a) u.push({ type: "text", value: a });
      }
      p = s;
    },
    d = (a) => {
      if (a) u.push({ type: "sequence", value: a });
      ((c.state = "ground"), (p = s));
    };
  while (s < f.length) {
    let a = f.charCodeAt(s);
    switch (c.state) {
      case "ground":
        if (a === CONTROL_CHAR_CODES.ESC) (m(), (l = s), (c.state = "escape"), s++);
        else if (a === CONTROL_CHAR_CODES.DEL)
          if (y.test(f.slice(p, s))) s++;
          else (m(), s++, u.push({ type: "text", value: "\x7F" }), (p = s));
        else if (!i && a < 32 && (f.length < 64 || a === CONTROL_CHAR_CODES.BS)) {
          if ((m(), s++, a === 13 && f.charCodeAt(s) === 10)) s++;
          (u.push({ type: "text", value: String.fromCharCode(a) }), (p = s));
        } else s++;
        break;
      case "escape":
        if (a === CONTROL_INTRODUCER_CODES.CSI) ((c.state = "csi"), s++);
        else if (a === CONTROL_INTRODUCER_CODES.OSC) ((c.state = "osc"), s++);
        else if (a === CONTROL_INTRODUCER_CODES.DCS) ((c.state = "dcs"), s++);
        else if (!o && a === CONTROL_INTRODUCER_CODES.APC) ((c.state = "apc"), s++);
        else if (!o && a === CONTROL_INTRODUCER_CODES.PM) ((c.state = "pm"), s++);
        else if (!o && (a === CONTROL_INTRODUCER_CODES.SOS || a === 107)) ((c.state = "sos"), s++);
        else if (a === 79) ((c.state = "ss3"), s++);
        else if (o && (a === 32 || a === 13 || a === 10 || a === 9))
          (s++,
            u.push({ type: "text", value: f.slice(l, s) }),
            (c.state = "ground"),
            (p = s));
        else if (o && S(a))
          (u.push({ type: "text", value: f.slice(l, s) }),
            (c.state = "ground"),
            (p = s));
        else if (S(a)) ((c.state = "escapeIntermediate"), s++);
        else if (a === CONTROL_CHAR_CODES.DEL)
          (s++,
            u.push({ type: "text", value: f.slice(l, s) }),
            (c.state = "ground"),
            (p = s));
        else if (E(a)) (s++, d(f.slice(l, s)));
        else if (a === CONTROL_CHAR_CODES.ESC)
          (d(f.slice(l, s)), (l = s), (c.state = "escape"), s++);
        else if (a < 32)
          (s++,
            u.push({ type: "text", value: f.slice(l, s) }),
            (c.state = "ground"),
            (p = s));
        else ((c.state = "ground"), (p = l));
        break;
      case "escapeIntermediate":
        if (S(a)) s++;
        else if (E(a)) (s++, d(f.slice(l, s)));
        else ((c.state = "ground"), (p = l));
        break;
      case "csi":
        if (
          o &&
          a === 77 &&
          s - l === 2 &&
          (s + 1 >= f.length || f.charCodeAt(s + 1) >= 32) &&
          (s + 2 >= f.length || f.charCodeAt(s + 2) >= 32) &&
          (s + 3 >= f.length || f.charCodeAt(s + 3) >= 32)
        ) {
          if (s + 4 <= f.length) ((s += 4), d(f.slice(l, s)));
          else s = f.length;
          break;
        }
        if (C(a)) (s++, d(f.slice(l, s)));
        else if (T(a) || S(a)) s++;
        else ((c.state = "ground"), (p = l));
        break;
      case "ss3":
        if (a >= 64 && a <= 126) (s++, d(f.slice(l, s)));
        else ((c.state = "ground"), (p = l));
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (a === CONTROL_CHAR_CODES.BEL && c.state !== "pm" && c.state !== "sos")
          (s++, d(f.slice(l, s)));
        else if (a === CONTROL_CHAR_CODES.ESC && s + 1 < f.length)
          if (f.charCodeAt(s + 1) === CONTROL_INTRODUCER_CODES.ST) ((s += 2), d(f.slice(l, s)));
          else (d(f.slice(l, s)), (l = s), (c.state = "escape"), s++);
        else if (a === CONTROL_CHAR_CODES.CAN || a === CONTROL_CHAR_CODES.SUB) (s++, d(f.slice(l, s)));
        else s++;
        break;
    }
  }
  if (c.state === "ground") m();
  else if (r) {
    let a = f.slice(l);
    if (a) u.push({ type: "sequence", value: a });
    c.state = "ground";
  } else c.buffer = f.slice(l);
  return { tokens: u, state: c };
}
var M = /\x1b\[[34]8;[25];/;
function wrapAnsi(t, e, n) {
  if (!(e > 0)) return t;
  let r = P(t, e, n);
  if (
    M.test(t) &&
    r.includes(`
`)
  )
    return v(r);
  return r;
}
var w = "\uDB80\uDC00",
  F = "\uD87E\uDE1D",
  R = /[\u{F0000}\u{2FA1D}]/gu,
  L = /[^\x00-\x7f]/;
function P(t, e, n) {
  if (!L.test(t)) return Bun.wrapAnsi(t, e, n);
  let r = [],
    o = "",
    i = !1,
    u = createAnsiTokenizer({ forOutput: !0 });
  for (let l of [...u.feed(t), ...u.flush()]) {
    if (l.type === "sequence") {
      o += l.value;
      continue;
    }
    for (let { segment: m } of getGraphemeSegmenter().segment(l.value)) {
      let d = m.codePointAt(0) > 65535 ? 2 : 1,
        a = m.length > d ? getStringWidth(m) : 0;
      if (a === 1 || a === 2) {
        (r.push(m), (o += a === 1 ? w : F), (i = !0));
        continue;
      }
      for (let D of m.match(R) ?? []) r.push(D);
      o += m;
    }
  }
  if (!i) return Bun.wrapAnsi(t, e, n);
  let c = 0,
    f = "",
    s = createAnsiTokenizer({ forOutput: !0 }),
    p = Bun.wrapAnsi(o, e, n);
  for (let l of [...s.feed(p), ...s.flush()])
    f +=
      l.type === "sequence" ? l.value : l.value.replace(R, (m) => r[c++] ?? m);
  return f;
}
var h = /\x1b\[([\d;]*)m/g,
  U = /^(3[0-79]|9[0-7])$/,
  B = /^(4[0-79]|10[0-7])$/;
function v(t) {
  let e = "",
    n = "",
    r = "",
    o = 0;
  h.lastIndex = 0;
  let i;
  while ((i = h.exec(t)) !== null) {
    ((e += _(t.slice(o, i.index), n, r)), (e += i[0]), (o = h.lastIndex));
    let u = i[1];
    if (u === "" || u === "0") ((n = ""), (r = ""));
    else if (u.startsWith("38;")) n = i[0];
    else if (U.test(u)) n = "";
    else if (u.startsWith("48;")) r = i[0];
    else if (B.test(u)) r = "";
  }
  return ((e += _(t.slice(o), n, r)), e);
}
function _(t, e, n) {
  if (t === "" || (e === "" && n === "")) return t;
  let r = "",
    o = 0;
  for (let i = 0; i < t.length; i++)
    if (t.charCodeAt(i) === 10) {
      if (((r += t.slice(o, i)), e)) r += "\x1B[39m";
      if (n) r += "\x1B[49m";
      ((r +=
        `
` +
        e +
        n),
        (o = i + 1));
    }
  return ((r += t.slice(o)), r);
}
function truncatePathMiddle(t, e) {
  if (getStringWidth(t) <= e) return t;
  if (e <= 0) return "\u2026";
  if (e < 5) return truncateToWidth(t, e);
  let n = t.lastIndexOf("/"),
    r = n >= 0 ? n : t.lastIndexOf("\\"),
    o = r >= 0 ? t.slice(r) : t,
    i = r >= 0 ? t.slice(0, r) : "",
    u = getStringWidth(o);
  if (u >= e - 1) return truncateStartToWidth(t, e);
  let c = e - 1 - u;
  return truncateToWidthNoEllipsis(i, c) + "\u2026" + o;
}
function truncateToWidth(t, e) {
  if (getStringWidth(t) <= e) return t;
  if (e <= 1) return "\u2026";
  let n = 0,
    r = "";
  for (let { segment: o } of getGraphemeSegmenter().segment(t)) {
    let i = getStringWidth(o);
    if (n + i > e - 1) break;
    ((r += o), (n += i));
  }
  return r + "\u2026";
}
function truncateStartToWidth(t, e) {
  if (getStringWidth(t) <= e) return t;
  if (e <= 1) return "\u2026";
  let n = e - 1,
    r = [...getGraphemeSegmenter().segment(t)],
    o = 0,
    i = r.length;
  for (let u = r.length - 1; u >= 0; u--) {
    let c = getStringWidth(r[u].segment);
    if (o + c > n) break;
    ((o += c), (i = u));
  }
  return `\u2026${r
    .slice(i)
    .map((u) => u.segment)
    .join("")}`;
}
function truncateToWidthNoEllipsis(t, e) {
  if (getStringWidth(t) <= e) return t;
  if (e <= 0) return "";
  let n = 0,
    r = "";
  for (let { segment: o } of getGraphemeSegmenter().segment(t)) {
    let i = getStringWidth(o);
    if (n + i > e) break;
    ((r += o), (n += i));
  }
  return r;
}
function truncate(t, e, n = !1) {
  let r = t;
  if (n) {
    let o = t.indexOf(`
`);
    if (o !== -1) {
      if (((r = t.substring(0, o)), getStringWidth(r) + 1 > e)) return truncateToWidth(`${r}\u2026`, e);
      return `${r}\u2026`;
    }
  }
  if (getStringWidth(r) <= e) return r;
  return truncateToWidth(r, e);
}
function splitTextByWidth(t, e) {
  let n = [],
    r = "",
    o = 0;
  for (let { segment: i } of getGraphemeSegmenter().segment(t)) {
    let u = getStringWidth(i);
    if (o + u <= e) ((r += i), (o += u));
    else {
      if (r) n.push(r);
      ((r = i), (o = u));
    }
  }
  if (r) n.push(r);
  return n;
}
function wrapTextToLineCount(t, e, n) {
  if (n <= 0 || e <= 0) return "";
  let r = wrapAnsi(t, e, { trim: !0, hard: !0 }).split(`
`);
  if (r.length <= n)
    return r.join(`
`);
  let o = r.slice(0, n);
  return (
    (o[n - 1] = truncateToWidth((o[n - 1] ?? "") + "\u2026", e)),
    o.join(`
`)
  );
}
function formatSecondsShort(t) {
  return `${(t / 1000).toFixed(1)}s`;
}
function formatDuration(t, e) {
  if (t < 60000) {
    if (t === 0) return "0s";
    if (t < 1) return `${(t / 1000).toFixed(1)}s`;
    return `${Math.floor(t / 1000).toString()}s`;
  }
  let n = Math.floor(t / 86400000),
    r = Math.floor((t % 86400000) / 3600000),
    o = Math.floor((t % 3600000) / 60000),
    i = Math.round((t % 60000) / 1000);
  if (i === 60) ((i = 0), o++);
  if (o === 60) ((o = 0), r++);
  if (r === 24) ((r = 0), n++);
  let u = e?.hideTrailingZeros;
  if (e?.mostSignificantOnly) {
    if (n > 0) return `${n}d`;
    if (r > 0) return `${r}h`;
    if (o > 0) return `${o}m`;
    return `${i}s`;
  }
  if (n > 0) {
    if (u && r === 0 && o === 0) return `${n}d`;
    if (u && o === 0) return `${n}d ${r}h`;
    return `${n}d ${r}h ${o}m`;
  }
  if (r > 0) {
    if (u && o === 0 && i === 0) return `${r}h`;
    if (u && i === 0) return `${r}h ${o}m`;
    return `${r}h ${o}m ${i}s`;
  }
  if (o > 0) {
    if (u && i === 0) return `${o}m`;
    return `${o}m ${i}s`;
  }
  return `${i}s`;
}
function formatDurationCoarse(t) {
  let e = t >= 60000 ? Math.round(t / 60000) * 60000 : t;
  return formatDuration(e, { hideTrailingZeros: !0 });
}
function formatBarElapsed(t) {
  let e = Math.max(0, Math.floor(t / 1000));
  if (e < 60) return `${e}s`;
  let n = Math.floor(e / 60);
  if (n < 60) return `${n}m${String(e % 60).padStart(2, "0")}s`;
  let r = Math.floor(n / 60);
  if (r < 24) return `${r}h${String(n % 60).padStart(2, "0")}m`;
  return `${Math.floor(r / 24)}d${String(r % 24).padStart(2, "0")}h`;
}
var H = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  },
  Y = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  };
function formatNumber(t) {
  let e = t >= 1000;
  return getNumberFormat("en-US", e ? H : Y)
    .format(t)
    .toLowerCase();
}
function formatTokens(t) {
  return formatNumber(t).replace(".0", "");
}
function formatTokenEstimate(t) {
  if (t < 20) return "< 20";
  return `~${formatTokens(Math.round(t / 10) * 10)}`;
}
function formatRelativeTime(t, e = {}) {
  let {
      style: n = "narrow",
      numeric: r = "always",
      maxUnit: o,
      now: i = new Date(),
    } = e,
    u = t.getTime() - i.getTime(),
    c = Math.trunc(u / 1000),
    f = [
      { unit: "year", seconds: 31536000, shortUnit: "y" },
      { unit: "month", seconds: 2592000, shortUnit: "mo" },
      { unit: "week", seconds: 604800, shortUnit: "w" },
      { unit: "day", seconds: 86400, shortUnit: "d" },
      { unit: "hour", seconds: 3600, shortUnit: "h" },
      { unit: "minute", seconds: 60, shortUnit: "m" },
      { unit: "second", seconds: 1, shortUnit: "s" },
    ],
    s = o ? f.filter((p) => p.seconds <= 86400) : f;
  for (let { unit: p, seconds: l, shortUnit: m } of s)
    if (Math.abs(c) >= l) {
      let d = Math.trunc(c / l);
      if (n === "narrow")
        return c < 0 ? `${Math.abs(d)}${m} ago` : `in ${d}${m}`;
      return getRelativeTimeFormat("long", r).format(d, p);
    }
  if (n === "narrow") return c <= 0 ? "0s ago" : "in 0s";
  return getRelativeTimeFormat(n, "auto").format(0, "second");
}
function formatRelativeTimeAgo(t, e = {}) {
  let { now: n = new Date(), ...r } = e;
  if (t > n) return formatRelativeTime(t, { ...r, now: n });
  return formatRelativeTime(t, { ...r, numeric: "always", now: n });
}
function formatLogMetadata(t) {
  let e = t.fileSize !== void 0 ? formatFileSize(t.fileSize) : `${t.messageCount} messages`,
    n = [
      formatRelativeTimeAgo(t.modified, { style: "short" }),
      ...(t.sessionKind === "bg" ? ["bg"] : []),
      ...(t.gitBranch ? [t.gitBranch] : []),
      e,
    ];
  if (t.tag) n.push(`#${t.tag}`);
  if (t.agentSetting) n.push(`@${t.agentSetting}`);
  if (t.prNumber)
    n.push(
      t.prRepository ? `${t.prRepository}#${t.prNumber}` : `#${t.prNumber}`,
    );
  return n.join(" \xB7 ");
}
function formatResetTime(t, e = !1, n = !0, r = !1) {
  if (!t) return;
  let o = new Date(t * 1000),
    i = new Date(),
    u = o.getMinutes(),
    c = (o.getTime() - i.getTime()) / 3600000;
  if (r || c > 24) {
    let s = {
      month: "short",
      day: "numeric",
      hour: n ? "numeric" : void 0,
      minute: !n || u === 0 ? void 0 : "2-digit",
      hour12: n ? !0 : void 0,
    };
    if (o.getFullYear() !== i.getFullYear()) s.year = "numeric";
    return (
      o
        .toLocaleString("en-US", s)
        .replace(/[ \u202f]([AP]M)/i, (l, m) => m.toLowerCase()) +
      (e ? ` (${getResolvedTimeZone()})` : "")
    );
  }
  return (
    o
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: u === 0 ? void 0 : "2-digit",
        hour12: !0,
      })
      .replace(/[ \u202f]([AP]M)/i, (s, p) => p.toLowerCase()) +
    (e ? ` (${getResolvedTimeZone()})` : "")
  );
}
function formatResetText(t, e = !1, n = !0, r = !1) {
  let o = new Date(t);
  return `${formatResetTime(Math.floor(o.getTime() / 1000), e, n, r)}`;
}
function formatOverflowHint(t, e = "line") {
  if (t <= 0) return "";
  return `\u2026 +${t} ${pluralize(t, e)}`;
}
export {
  getStringWidth,
  CONTROL_CHAR_CODES,
  ESCAPE_CHARACTER,
  BELL_CHARACTER,
  PARAM_SEPARATOR,
  RESET_CHARSET_SEQUENCE,
  CONTROL_INTRODUCER_CODES,
  buildCsiSequence,
  CSI_COMMAND_CODES,
  ERASE_DISPLAY_REGIONS,
  ERASE_LINE_REGIONS,
  CURSOR_STYLE_PRESETS,
  cursorDown,
  cursorToColumn,
  cursorToFirstColumn,
  cursorToPosition,
  CURSOR_HOME_SEQUENCE,
  moveCursorBy,
  eraseToLineEnd,
  ERASE_ENTIRE_LINE,
  ERASE_SCREEN_SEQUENCE,
  ERASE_SCROLLBACK_SEQUENCE,
  clearLines,
  scrollUp,
  scrollDown,
  setScrollRegion,
  RESET_SCROLL_REGION,
  BRACKETED_PASTE_START,
  BRACKETED_PASTE_END,
  FOCUS_IN_SEQUENCE,
  FOCUS_OUT_SEQUENCE,
  KITTY_KEYBOARD_PUSH_ENHANCED,
  KITTY_KEYBOARD_PUSH_LEGACY,
  KITTY_KEYBOARD_POP,
  ENABLE_MODIFY_OTHER_KEYS,
  DISABLE_MODIFY_OTHER_KEYS,
  createAnsiTokenizer,
  wrapAnsi,
  truncatePathMiddle,
  truncateToWidth,
  truncateStartToWidth,
  truncateToWidthNoEllipsis,
  truncate,
  splitTextByWidth,
  wrapTextToLineCount,
  formatSecondsShort,
  formatDuration,
  formatDurationCoarse,
  formatBarElapsed,
  formatNumber,
  formatTokens,
  formatTokenEstimate,
  formatRelativeTime,
  formatRelativeTimeAgo,
  formatLogMetadata,
  formatResetTime,
  formatResetText,
  formatOverflowHint,
};

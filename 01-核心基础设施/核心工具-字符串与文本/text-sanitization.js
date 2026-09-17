// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { truncateToCodeUnits, removeLoneSurrogates, normalizeWhitespace } from "./string-utils.js";
function stripAnsi(e) {
  return Bun.stripANSI(e);
}
var s = "\\p{Default_Ignorable_Code_Point}\\u2800",
  INVISIBLE_CHAR_CLASS = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${s}`,
  p = new RegExp(`[${INVISIBLE_CHAR_CLASS}]+`, "gu"),
  o = "\\u200D\\uFE0E\\uFE0F",
  c = new RegExp(`(?:(?![${o}])[${INVISIBLE_CHAR_CLASS}])+`, "gu"),
  u = new RegExp(`(?:(?![${o}\\n])[${INVISIBLE_CHAR_CLASS}])+`, "gu"),
  a = new RegExp(`(?<!\\S)[${o}]+`, "gu"),
  g = /\p{Cs}/gu;
function replaceInvisibleChars(e, n, r) {
  let t = r?.keepNewlines === !0 || r?.keepEmojiJoiners === !0,
    i = stripAnsi(e.replace(g, "\u200B")).replace(r?.keepNewlines ? u : t ? c : p, n);
  return t ? i.replace(a, "") : i;
}
var l = new RegExp(
  `[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${s}]`,
  "gu",
);
function E(e) {
  let n = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return (
    (n = n
      .replace(/[\u200B-\u200F]/g, "")
      .replace(/[\u202A-\u202E]/g, "")
      .replace(/[\u2066-\u2069]/g, "")
      .replace(/[\uFEFF]/g, "")
      .replace(/[\uE000-\uF8FF]/g, "")),
    n
  );
}
function stripInvisibleChars(e) {
  let n = removeLoneSurrogates(e);
  for (let r = 0; r < 10; r++) {
    let t = E(n);
    if (t === n) return n;
    n = t;
  }
  return n;
}
var f = /\p{Default_Ignorable_Code_Point}/gu;
function normalizeComparableText(e) {
  return normalizeWhitespace(stripInvisibleChars(e).replace(f, ""));
}
function sanitizeUnicodeText(e) {
  let n = e,
    r = "",
    t = 0,
    i = 10;
  while (n !== r && t < i)
    ((r = n), (n = n.normalize("NFKC")), (n = stripInvisibleChars(n)), t++);
  if (t >= i)
    throw Error(
      `Unicode sanitization reached maximum iterations (${i}) for input: ${e.slice(0, 100)}`,
    );
  return n;
}
function sanitizeDeep(e) {
  if (typeof e === "string") return sanitizeUnicodeText(e);
  if (Array.isArray(e)) return e.map(sanitizeDeep);
  if (e !== null && typeof e === "object") {
    let n = {};
    for (let [r, t] of Object.entries(e)) n[sanitizeDeep(r)] = sanitizeDeep(t);
    return n;
  }
  return e;
}
function escapeUntrustedText(e) {
  return escapeNonPrintableAscii(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}
function escapeNonPrintableAscii(e) {
  return e.replace(/[^\x20-\x7e]/g, toUnicodeEscape);
}
function replaceControlChars(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}
function escapeInvisibleChars(e) {
  return e.replace(l, (n) =>
    Array.from(
      { length: n.length },
      (r, t) => `\\u${n.charCodeAt(t).toString(16).padStart(4, "0")}`,
    ).join(""),
  );
}
function sanitizeDisplayLine(e) {
  return removeLoneSurrogates(stripAnsi(e)).replace(p, " ");
}
function formatSingleLineText(e, n) {
  let r = sanitizeDisplayLine(e);
  if (n?.drop) r = r.replace(n.drop, "");
  if (((r = r.replace(/\s+/g, " ").trim()), n?.maxCodeUnits !== void 0))
    r = truncateToCodeUnits(r, n.maxCodeUnits).trim();
  return r;
}
var MAX_LABEL_LENGTH = 255;
function formatLabelText(e) {
  let n = formatSingleLineText(e, { drop: /[`<>]/g })
    .replace(/\]\(/g, "] (")
    .replace(/!\[/g, "! [")
    .replace(/\]\[/g, "] [")
    .replace(/\]:/g, "] :");
  return truncateToCodeUnits(n, MAX_LABEL_LENGTH).trim();
}
var MAX_DESCRIPTION_LENGTH = 2048,
  MARKDOWN_SYNTAX_CHARS = /[`\[\]<>]/g;
function formatDescriptionText(e) {
  let n = formatSingleLineText(e)
    .replace(/\]\(/g, "] (")
    .replace(/!\[/g, "! [")
    .replace(/\]\[/g, "] [")
    .replace(/\]:/g, "] :")
    .replace(/</g, "< ")
    .replace(/\s+/g, " ")
    .trim();
  return truncateToCodeUnits(n, MAX_DESCRIPTION_LENGTH).trim();
}
function escapeControlChars(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, toUnicodeEscape);
}
function toUnicodeEscape(e) {
  return e
    .split("")
    .map((n) => "\\u" + n.charCodeAt(0).toString(16).padStart(4, "0"))
    .join("");
}
export {
  stripAnsi,
  INVISIBLE_CHAR_CLASS,
  replaceInvisibleChars,
  stripInvisibleChars,
  normalizeComparableText,
  sanitizeUnicodeText,
  sanitizeDeep,
  escapeUntrustedText,
  escapeNonPrintableAscii,
  replaceControlChars,
  escapeInvisibleChars,
  sanitizeDisplayLine,
  formatSingleLineText,
  MAX_LABEL_LENGTH,
  formatLabelText,
  MAX_DESCRIPTION_LENGTH,
  MARKDOWN_SYNTAX_CHARS,
  formatDescriptionText,
  escapeControlChars,
  toUnicodeEscape,
};

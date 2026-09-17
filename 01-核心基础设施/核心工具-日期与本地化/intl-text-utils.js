// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var s = null,
  l = null,
  m = null;
function getLanguageDisplayNames() {
  if (!m) m = new Intl.DisplayNames(["en"], { type: "language" });
  return m;
}
function getGraphemeSegmenter() {
  if (!s) s = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  return s;
}
function getFirstGrapheme(e) {
  if (!e) return "";
  return getGraphemeSegmenter().segment(e)[Symbol.iterator]().next().value?.segment ?? "";
}
function getLastGrapheme(e) {
  if (!e) return "";
  let t = "";
  for (let { segment: r } of getGraphemeSegmenter().segment(e)) t = r;
  return t;
}
function countGraphemes(e) {
  if (!e) return 0;
  let t = 0;
  for (let r of getGraphemeSegmenter().segment(e)) t++;
  return t;
}
function splitGraphemes(e) {
  if (!e) return [];
  return Array.from(getGraphemeSegmenter().segment(e), (t) => t.segment);
}
function getWordSegmenter() {
  if (!l) l = new Intl.Segmenter(void 0, { granularity: "word" });
  return l;
}
function countWords(e) {
  let t = e.trim();
  if (t === "") return 0;
  let r = t.split(/\s+/).length,
    n = 0;
  for (let i of getWordSegmenter().segment(t)) if (i.isWordLike) n++;
  return Math.max(r, n);
}
var g = new Map();
function getRelativeTimeFormat(e, t) {
  let r = `${e}:${t}`,
    n = g.get(r);
  if (!n)
    ((n = new Intl.RelativeTimeFormat("en", { style: e, numeric: t })),
      g.set(r, n));
  return n;
}
var u = null;
function getResolvedTimeZone() {
  if (!u) u = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return u;
}
var a = null;
function getResolvedLanguage() {
  if (a === null)
    try {
      let e = Intl.DateTimeFormat().resolvedOptions().locale;
      a = new Intl.Locale(e).language;
    } catch {
      a = void 0;
    }
  return a;
}
var f = new WeakMap();
function d(e) {
  if (!e) return "";
  let t = f.get(e);
  if (t !== void 0) return t;
  let r = Object.entries(e).sort(([i], [o]) => (i < o ? -1 : i > o ? 1 : 0)),
    n = "";
  for (let [i, o] of r) n += `${i}=${String(o)};`;
  return (f.set(e, n), n);
}
var c = new Map();
function withTimeZone(e, t) {
  return t ? { ...e, timeZone: t } : e;
}
function getDateTimeFormat(e, t) {
  let r = `${e ?? ""}|${d(t)}`,
    n = c.get(r);
  if (!n) ((n = new Intl.DateTimeFormat(e, t)), c.set(r, n));
  return n;
}
var p = new Map();
function getNumberFormat(e, t) {
  let r = `${e ?? ""}|${d(t)}`,
    n = p.get(r);
  if (!n) ((n = new Intl.NumberFormat(e, t)), p.set(r, n));
  return n;
}
export { getLanguageDisplayNames, getGraphemeSegmenter, getFirstGrapheme, getLastGrapheme, countGraphemes, splitGraphemes, getWordSegmenter, countWords, getRelativeTimeFormat, getResolvedTimeZone, getResolvedLanguage, withTimeZone, getDateTimeFormat, getNumberFormat };

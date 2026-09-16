// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { oe, Rae, To } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
function pt(e) {
  return Bun.stripANSI(e);
}
var s = "\\p{Default_Ignorable_Code_Point}\\u2800",
  mhe = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${s}`,
  p = new RegExp(`[${mhe}]+`, "gu"),
  o = "\\u200D\\uFE0E\\uFE0F",
  c = new RegExp(`(?:(?![${o}])[${mhe}])+`, "gu"),
  u = new RegExp(`(?:(?![${o}\\n])[${mhe}])+`, "gu"),
  a = new RegExp(`(?<!\\S)[${o}]+`, "gu"),
  g = /\p{Cs}/gu;
function ZU(e, n, r) {
  let t = r?.keepNewlines === !0 || r?.keepEmojiJoiners === !0,
    i = pt(e.replace(g, "\u200B")).replace(r?.keepNewlines ? u : t ? c : p, n);
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
function up(e) {
  let n = Rae(e);
  for (let r = 0; r < 10; r++) {
    let t = E(n);
    if (t === n) return n;
    n = t;
  }
  return n;
}
var f = /\p{Default_Ignorable_Code_Point}/gu;
function Yq(e) {
  return To(up(e).replace(f, ""));
}
function pIn(e) {
  let n = e,
    r = "",
    t = 0,
    i = 10;
  while (n !== r && t < i)
    ((r = n), (n = n.normalize("NFKC")), (n = up(n)), t++);
  if (t >= i)
    throw Error(
      `Unicode sanitization reached maximum iterations (${i}) for input: ${e.slice(0, 100)}`,
    );
  return n;
}
function _S(e) {
  if (typeof e === "string") return pIn(e);
  if (Array.isArray(e)) return e.map(_S);
  if (e !== null && typeof e === "object") {
    let n = {};
    for (let [r, t] of Object.entries(e)) n[_S(r)] = _S(t);
    return n;
  }
  return e;
}
function na(e) {
  return ghe(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}
function ghe(e) {
  return e.replace(/[^\x20-\x7e]/g, b7t);
}
function Sn(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}
function Jlr(e) {
  return e.replace(l, (n) =>
    Array.from(
      { length: n.length },
      (r, t) => `\\u${n.charCodeAt(t).toString(16).padStart(4, "0")}`,
    ).join(""),
  );
}
function lnt(e) {
  return Rae(pt(e)).replace(p, " ");
}
function io(e, n) {
  let r = lnt(e);
  if (n?.drop) r = r.replace(n.drop, "");
  if (((r = r.replace(/\s+/g, " ").trim()), n?.maxCodeUnits !== void 0))
    r = oe(r, n.maxCodeUnits).trim();
  return r;
}
var hhe = 255;
function xb(e) {
  let n = io(e, { drop: /[`<>]/g })
    .replace(/\]\(/g, "] (")
    .replace(/!\[/g, "! [")
    .replace(/\]\[/g, "] [")
    .replace(/\]:/g, "] :");
  return oe(n, hhe).trim();
}
var cnt = 2048,
  Xkt = /[`\[\]<>]/g;
function eB(e) {
  let n = io(e)
    .replace(/\]\(/g, "] (")
    .replace(/!\[/g, "! [")
    .replace(/\]\[/g, "] [")
    .replace(/\]:/g, "] :")
    .replace(/</g, "< ")
    .replace(/\s+/g, " ")
    .trim();
  return oe(n, cnt).trim();
}
function Lke(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, b7t);
}
function b7t(e) {
  return e
    .split("")
    .map((n) => "\\u" + n.charCodeAt(0).toString(16).padStart(4, "0"))
    .join("");
}
export {
  pt,
  mhe,
  ZU,
  up,
  Yq,
  pIn,
  _S,
  na,
  ghe,
  Sn,
  Jlr,
  lnt,
  io,
  hhe,
  xb,
  cnt,
  Xkt,
  eB,
  Lke,
  b7t,
};

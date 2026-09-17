// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { toString as Sz } from "./lodash.2x3q7cfh.js";
import { logEvent, logEventAsync } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
function arrayReduce(e, r, o, a) {
  var n = -1,
    s = e == null ? 0 : e.length;
  if (a && s) o = e[++n];
  while (++n < s) o = r(o, e[n], n, e);
  return o;
}
function basePropertyOf(e) {
  return function (r) {
    return e == null ? void 0 : e[r];
  };
}
var W = {
    "\xC0": "A",
    "\xC1": "A",
    "\xC2": "A",
    "\xC3": "A",
    "\xC4": "A",
    "\xC5": "A",
    "\xE0": "a",
    "\xE1": "a",
    "\xE2": "a",
    "\xE3": "a",
    "\xE4": "a",
    "\xE5": "a",
    "\xC7": "C",
    "\xE7": "c",
    "\xD0": "D",
    "\xF0": "d",
    "\xC8": "E",
    "\xC9": "E",
    "\xCA": "E",
    "\xCB": "E",
    "\xE8": "e",
    "\xE9": "e",
    "\xEA": "e",
    "\xEB": "e",
    "\xCC": "I",
    "\xCD": "I",
    "\xCE": "I",
    "\xCF": "I",
    "\xEC": "i",
    "\xED": "i",
    "\xEE": "i",
    "\xEF": "i",
    "\xD1": "N",
    "\xF1": "n",
    "\xD2": "O",
    "\xD3": "O",
    "\xD4": "O",
    "\xD5": "O",
    "\xD6": "O",
    "\xD8": "O",
    "\xF2": "o",
    "\xF3": "o",
    "\xF4": "o",
    "\xF5": "o",
    "\xF6": "o",
    "\xF8": "o",
    "\xD9": "U",
    "\xDA": "U",
    "\xDB": "U",
    "\xDC": "U",
    "\xF9": "u",
    "\xFA": "u",
    "\xFB": "u",
    "\xFC": "u",
    "\xDD": "Y",
    "\xFD": "y",
    "\xFF": "y",
    "\xC6": "Ae",
    "\xE6": "ae",
    "\xDE": "Th",
    "\xFE": "th",
    "\xDF": "ss",
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010A": "C",
    "\u010C": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010B": "c",
    "\u010D": "c",
    "\u010E": "D",
    "\u0110": "D",
    "\u010F": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011A": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011B": "e",
    "\u011C": "G",
    "\u011E": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011D": "g",
    "\u011F": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012A": "I",
    "\u012C": "I",
    "\u012E": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012B": "i",
    "\u012D": "i",
    "\u012F": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013B": "L",
    "\u013D": "L",
    "\u013F": "L",
    "\u0141": "L",
    "\u013A": "l",
    "\u013C": "l",
    "\u013E": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014A": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014B": "n",
    "\u014C": "O",
    "\u014E": "O",
    "\u0150": "O",
    "\u014D": "o",
    "\u014F": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015A": "S",
    "\u015C": "S",
    "\u015E": "S",
    "\u0160": "S",
    "\u015B": "s",
    "\u015D": "s",
    "\u015F": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016A": "U",
    "\u016C": "U",
    "\u016E": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016B": "u",
    "\u016D": "u",
    "\u016F": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017B": "Z",
    "\u017D": "Z",
    "\u017A": "z",
    "\u017C": "z",
    "\u017E": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017F": "s",
  },
  Z = basePropertyOf(W),
  m = Z;
var j = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  V = "\\u0300-\\u036f",
  B = "\\ufe20-\\ufe2f",
  G = "\\u20d0-\\u20ff",
  J = V + B + G,
  Y = "[" + J + "]",
  q = RegExp(Y, "g");
function K(e) {
  return ((e = Sz(e)), e && e.replace(j, m).replace(q, ""));
}
var _ = K;
var Q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function X(e) {
  return e.match(Q) || [];
}
var p = X;
var ee = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function ue(e) {
  return ee.test(e);
}
var b = ue;
var E = "\\ud800-\\udfff",
  re = "\\u0300-\\u036f",
  oe = "\\ufe20-\\ufe2f",
  ae = "\\u20d0-\\u20ff",
  te = re + oe + ae,
  A = "\\u2700-\\u27bf",
  O = "a-z\\xdf-\\xf6\\xf8-\\xff",
  ne = "\\xac\\xb1\\xd7\\xf7",
  fe = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  de = "\\u2000-\\u206f",
  ie =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  C = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  se = "\\ufe0e\\ufe0f",
  F = ne + fe + de + ie,
  T = "['\u2019]",
  l = "[" + F + "]",
  xe = "[" + te + "]",
  v = "\\d+",
  ce = "[" + A + "]",
  L = "[" + O + "]",
  N = "[^" + E + F + v + A + O + C + "]",
  me = "\\ud83c[\\udffb-\\udfff]",
  _e = "(?:" + xe + "|" + me + ")",
  ge = "[^" + E + "]",
  h = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  k = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  t = "[" + C + "]",
  pe = "\\u200d",
  R = "(?:" + L + "|" + N + ")",
  be = "(?:" + t + "|" + N + ")",
  S = "(?:" + T + "(?:d|ll|m|re|s|t|ve))?",
  I = "(?:" + T + "(?:D|LL|M|RE|S|T|VE))?",
  D = _e + "?",
  U = "[" + se + "]?",
  le = "(?:" + pe + "(?:" + [ge, h, k].join("|") + ")" + U + D + ")*",
  Re = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  Se = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  Ie = U + D + le,
  Ee = "(?:" + [ce, h, k].join("|") + ")" + Ie,
  Ae = RegExp(
    [
      t + "?" + L + "+" + S + "(?=" + [l, t, "$"].join("|") + ")",
      be + "+" + I + "(?=" + [l, t + R, "$"].join("|") + ")",
      t + "?" + R + "+" + S,
      t + "+" + I,
      Se,
      Re,
      v,
      Ee,
    ].join("|"),
    "g",
  );
function Oe(e) {
  return e.match(Ae) || [];
}
var w = Oe;
function Ce(e, r, o) {
  if (((e = Sz(e)), (r = o ? void 0 : r), r === void 0))
    return b(e) ? w(e) : p(e);
  return e.match(r) || [];
}
var M = Ce;
var Fe = "['\u2019]",
  Te = RegExp(Fe, "g");
function createCompounder(e) {
  return function (r) {
    return arrayReduce(M(_(r).replace(Te, "")), e, "");
  };
}
var ye = createCompounder(function (e, r, o) {
    return e + (o ? "_" : "") + r.toLowerCase();
  }),
  d = ye;
function toolFeature(e) {
  return `tool_${d(e)}`;
}
function cmdFeature(e) {
  return `cmd_${d(e)}`;
}
function hookFeature(e) {
  return `hook_${d(e)}`;
}
function logFeatureOk(e, r) {
  logEvent("tengu_feature_ok", { feature_name: fromEnum(e), ...r });
}
function logFeatureBad(e, r, o) {
  logEvent("tengu_feature_bad", { ...o, feature_name: fromEnum(e), error_code: r });
}
function logFeatureSad(e, r, o) {
  logEvent("tengu_feature_sad", { ...o, feature_name: fromEnum(e), error_code: r });
}
async function logFeatureOkAsync(e, r) {
  await logEventAsync("tengu_feature_ok", { feature_name: fromEnum(e), ...r });
}
async function logFeatureBadAsync(e, r, o) {
  await logEventAsync("tengu_feature_bad", { ...o, feature_name: fromEnum(e), error_code: r });
}
async function logFeatureSadAsync(e, r, o) {
  await logEventAsync("tengu_feature_sad", { ...o, feature_name: fromEnum(e), error_code: r });
}
async function withFeatureTelemetry(e, r, o) {
  try {
    let a = await r();
    return (logFeatureOk(e), a);
  } catch (a) {
    throw (logFeatureBad(e, o?.(a) ?? "error"), a);
  }
}
export { toolFeature, cmdFeature, hookFeature, logFeatureOk, logFeatureBad, logFeatureSad, logFeatureOkAsync, logFeatureBadAsync, logFeatureSadAsync, withFeatureTelemetry };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, rs, zn, RS } from "../../00-第三方库/lodash/lodash.207999qb.js";
var f = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;
function m(e) {
  return !!e && f.test(e);
}
function Iz(e) {
  return m(e) ? e : void 0;
}
var l = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/,
  c = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/,
  E = /[_,\u00A0\u202F ]/g;
function N(e) {
  if (e.length <= 32) {
    if (l.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN;
    }
    if (c.test(e)) return parseInt(e.replace(E, ""), 10);
  }
  return;
}
function tl(e) {
  let n = String(e).trim();
  return N(n) ?? parseInt(n, 10);
}
function Nx(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && c.test(r) ? parseInt(r.replace(E, ""), 10) : NaN;
}
import { homedir as R } from "os";
import { basename as g, dirname as O, join as i, resolve as t } from "path";
var d = [
  ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"],
  ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"],
  ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"],
  ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"],
  ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"],
  ["claude-fable-5-1", "VERTEX_REGION_CLAUDE_FABLE_5_1"],
  ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"],
  ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"],
  ["claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS"],
  ["claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS"],
  ["claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS"],
  ["claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS"],
  ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"],
  ["claude-sonnet-5", "VERTEX_REGION_CLAUDE_5_SONNET"],
  ["claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5"],
  ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"],
  ["claude-opus-5", "VERTEX_REGION_CLAUDE_5_OPUS"],
];
function s() {
  return process.env.CLAUDE_CONFIG_DIR;
}
var be = rs(() => (s() ?? i(R(), ".claude")).normalize("NFC"), s);
function w_e(e) {
  return t(be()) === t(e);
}
function T_e() {
  return i(be(), "teams");
}
function _() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME;
}
var D = /^[A-Za-z0-9_-]{1,64}$/,
  C = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
function xMn(e) {
  if (!e || !D.test(e) || C.test(e)) return;
  return e;
}
function I() {
  return `${s() ?? ""}\x00${_() ?? ""}`;
}
var Kur = rs(() => (s() ? xMn(_()) : void 0), I);
function y8(e) {
  let n = be();
  if (t(e) === t(n)) return !0;
  return p(e) === p(n);
}
function p(e) {
  let n = t(e),
    r = O(n),
    o = RS(r) ?? r;
  return zn(i(o, g(n)));
}
function kje(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return !1;
  return n.split(/\s+/).includes(e);
}
function Lxe(e, n) {
  if (e === void 0) return n;
  let r = tl(e);
  return Number.isNaN(r) ? n : r;
}
function Xur(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = Nx(n);
  if (!Number.isInteger(r) || r <= 0)
    throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r;
}
function a(e) {
  let n = process.argv.indexOf("--");
  return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e);
}
function uo() {
  return Ie(process.env.CLAUDE_CODE_SIMPLE) || a("--bare");
}
function Hr() {
  return Ie(process.env.CLAUDE_CODE_SAFE_MODE) || a("--safe-mode");
}
function DW() {
  return Ie(process.env.CLAUDE_CODE_RESTRICTED);
}
function yf() {
  return a("--safe-mode")
    ? "restart without --safe-mode"
    : "unset CLAUDE_CODE_SAFE_MODE";
}
function Grt() {
  return Ie(process.env.CLAUDE_CODE_SUPERVISED);
}
function Yur(e) {
  let n = {};
  if (e)
    for (let r of e) {
      let [o, ...u] = r.split("=");
      if (!o || u.length === 0)
        throw Error(
          `Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`,
        );
      n[o] = u.join("=");
    }
  return n;
}
function RYt() {
  return Iz(process.env.CLOUD_ML_REGION?.trim()) || "us-east5";
}
function Mxe(e) {
  switch (e) {
    case "global":
      return "https://aiplatform.googleapis.com";
    case "us":
    case "eu":
      return `https://aiplatform.${e}.rep.googleapis.com`;
    default:
      return `https://${e}-aiplatform.googleapis.com`;
  }
}
function Jur() {
  return Ie(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function xg() {
  return !1;
}
function NL() {
  return !1;
}
function Qur() {
  return { namespace: void 0, cluster: void 0 };
}
function mZ(e) {
  if (e) {
    let n = d.find(([r]) => e.startsWith(r));
    if (n) return Iz(process.env[n[1]]?.trim()) || RYt();
  }
  return RYt();
}
export {
  Iz,
  tl,
  Nx,
  be,
  w_e,
  T_e,
  xMn,
  Kur,
  y8,
  kje,
  Lxe,
  Xur,
  uo,
  Hr,
  DW,
  yf,
  Grt,
  Yur,
  RYt,
  Mxe,
  Jur,
  xg,
  NL,
  Qur,
  mZ,
};

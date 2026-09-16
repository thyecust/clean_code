// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { stt, d8t, Wge, wx } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
function l(e) {
  return u(e) || e === "synced";
}
function u(e) {
  return e === "inline";
}
var np = "inline",
  Xc = "skills-dir",
  Qp = "synced",
  $g = "builtin";
function Ul(e) {
  return e === np || e === Xc || e === Qp;
}
function fD(e) {
  let n = e.lastIndexOf("@");
  if (n <= 0) return e;
  return `${e.slice(0, n)}@${Yyn(e.slice(n + 1))}`;
}
function Yyn(e) {
  let n = e.toLowerCase();
  return Wge(n) ? n : e;
}
function Fre(e) {
  return jI(e) !== void 0;
}
function jI(e) {
  let n = Lu(e);
  if (Ul(n)) return n;
  if (e.includes("@")) return;
  if (e.startsWith(`${np}[`)) return np;
  if (e.startsWith(`${Qp}[`)) return Qp;
  return;
}
function Jyn(e, n) {
  return Bpe(e, Qyn(n));
}
function Qyn(e) {
  return e.map((n) => (n === void 0 ? void 0 : Zyn(n)));
}
function Zyn(e) {
  let n = new Map();
  for (let [t, i] of Object.entries(e)) {
    if (i === void 0) continue;
    let d = xi(t),
      o = c(t, i),
      r = n.get(d);
    if (r === void 0 || r.enabled)
      n.set(d, { key: t, enabled: o && (r?.enabled ?? !0) });
  }
  return { record: e, byFold: n };
}
function c(e, n) {
  if (n === void 0) return !1;
  let t = Lu(fD(e));
  return t === np || t === Xc ? n !== !1 : n === !0;
}
function $Ne(e) {
  let n = Lu(fD(e));
  return n === np || n === Qp;
}
function Bpe(e, n) {
  if (!$Ne(e)) {
    for (let [o, r] of n.entries()) {
      let a = r?.record[e];
      if (a !== void 0) return { index: o, enabled: c(e, a), key: e };
    }
    return;
  }
  let t = xi(e),
    i = fD(e),
    d = Lu(i) === Qp ? xi(`${i.slice(0, i.lastIndexOf("@"))}@${np}`) : void 0;
  for (let [o, r] of n.entries()) {
    if (r === void 0) continue;
    let a = r.byFold.get(t);
    if (a !== void 0) return { index: o, enabled: a.enabled, key: a.key };
    if (d !== void 0) {
      let s = r.byFold.get(d);
      if (s !== void 0 && !s.enabled)
        return { index: o, enabled: !1, key: s.key };
    }
  }
  return;
}
function eSn(e, n) {
  return Jyn(e, n)?.enabled;
}
function GYn(e, n, t) {
  return eSn(e, n) ?? t !== !1;
}
function tSn(e, n, t) {
  return Bpe(e, n)?.enabled ?? t !== !1;
}
function KSt(e) {
  return Ul(e) || e === $g;
}
function aN(e) {
  return e.scope === "project" && e.source.endsWith(`@${Xc}`);
}
var H3t = {
  policySettings: "managed",
  userSettings: "user",
  projectSettings: "project",
  localSettings: "local",
  flagSettings: "flag",
};
function Bn(e) {
  if (e.includes("@")) {
    let n = e.split("@");
    return { name: n[0] || "", marketplace: n[1] };
  }
  return { name: e };
}
function Y3(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return { name: e };
  return { name: e.slice(0, n), marketplace: e.slice(n + 1) };
}
function J3(e) {
  let n = fD(e),
    t = Y3(n);
  return Ul(t.marketplace) ? t : Bn(n);
}
function XSt(e, n) {
  return n ? `${e}@${n}` : e;
}
function Lu(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return;
  let t = e.slice(n + 1);
  return t === "" ? void 0 : t;
}
function og(e) {
  let { name: n, marketplace: t } = Y3(e);
  if ((rSn(t) || t === $g) && !wx().safeParse(e).success) return { name: n };
  return { name: n, marketplace: t };
}
function $y(e, n) {
  return e === n || e.toLowerCase() === n.toLowerCase();
}
function xi(e) {
  return e.normalize("NFC").toLowerCase();
}
function WI(e, n) {
  return e.find((t) => t === n) ?? e.find((t) => $y(t, n));
}
function nSn(e, n) {
  return e.filter((t) => $y(Bn(t).name, n));
}
function Ug(e) {
  return e !== void 0 && d8t.has(e.toLowerCase());
}
function rSn(e) {
  return Ug(e) || (e !== void 0 && stt.has(e.toLowerCase()));
}
var f = new Set([
  "anthropic-skills",
  "core",
  "cowork-plugin-management",
  "data",
  "design",
  "engineering",
  "enterprise-search",
  "figma",
  "finance",
  "human-resources",
  "internal-apps",
  "legal",
  "marketing",
  "operations",
  "product-management",
  "productivity",
  "sales",
  "small-business",
  "ai-governance-legal",
  "cocounsel-legal",
  "commercial-legal",
  "corporate-legal",
  "employment-legal",
  "ip-legal",
  "law-student",
  "legal-builder-hub",
  "legal-clinic",
  "litigation-legal",
  "privacy-legal",
  "product-legal",
  "regulatory-legal",
  "healthcare",
  "fhir-developer",
  "npi-registry",
  "icd10-codes",
  "pubmed",
  "prior-auth-review",
  "cms-coverage",
  "clinical-trial-protocol",
  "documents",
]);
function YSt(e, n) {
  return l(n) && f.has(e);
}
var g = {
  user: "userSettings",
  project: "projectSettings",
  local: "localSettings",
};
function bC(e) {
  if (e === "managed") throw Error("Cannot install plugins to managed scope");
  return g[e];
}
function I3t(e) {
  return H3t[e];
}
export {
  np,
  Xc,
  Qp,
  $g,
  Ul,
  fD,
  Yyn,
  Fre,
  jI,
  Jyn,
  Qyn,
  Zyn,
  $Ne,
  Bpe,
  eSn,
  GYn,
  tSn,
  KSt,
  aN,
  H3t,
  Bn,
  Y3,
  J3,
  XSt,
  Lu,
  og,
  $y,
  xi,
  WI,
  nSn,
  Ug,
  rSn,
  YSt,
  bC,
  I3t,
};

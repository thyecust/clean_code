// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { XC, $f, H, od } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
var o = "tengu_violin_pegbox";
function n() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_desktop";
}
async function r() {
  try {
    return await od(o);
  } catch {
    return !1;
  }
}
function i() {
  try {
    return H(o, !1);
  } catch {
    return !1;
  }
}
async function l() {
  try {
    return await od("tengu_violin_strad");
  } catch {
    return !1;
  }
}
function u() {
  try {
    return H("tengu_violin_strad", !1);
  } catch {
    return !1;
  }
}
async function Su() {
  try {
    return (await od("tengu_violin_wood")) && (!n() || (await r()));
  } catch {
    return !1;
  }
}
function ri() {
  try {
    return H("tengu_violin_wood", !1) && (!n() || i());
  } catch {
    return !1;
  }
}
async function LD() {
  return (await Su()) && (await l());
}
function aU() {
  return ri() && u();
}
function cQe() {
  try {
    let { value: e, source: t } = $f("tengu_violin_wood", !1);
    return e === !1 && s(t);
  } catch {
    return !1;
  }
}
function s(e) {
  switch (e) {
    case "payload":
    case "override":
    case "disabled":
      return !0;
    case "fallback":
      return XC();
    case "disk":
      return !1;
  }
}
function c(e) {
  return s($f(e, !1).source);
}
function Pyr(e) {
  try {
    return c(e) && (e !== "tengu_violin_wood" || !n() || c(o));
  } catch {
    return !1;
  }
}
async function xfr() {
  try {
    return await od("tengu_violin_amati");
  } catch {
    return !1;
  }
}
function nVt() {
  try {
    return H("tengu_violin_amati", !1);
  } catch {
    return !1;
  }
}
function uQe() {
  return ri() && nVt();
}
async function j$e() {
  let [e, t] = await Promise.all([Su(), xfr()]);
  return e && t;
}
export { Su, ri, LD, aU, cQe, Pyr, xfr, nVt, uQe, j$e };

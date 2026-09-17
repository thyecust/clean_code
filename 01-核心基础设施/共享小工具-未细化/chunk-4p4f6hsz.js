// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getSubscriptionType as qn, Qh } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { pm } from "./chunk-0ypv8gq2.js";
import { Zp } from "../../02-功能模块/图片-截图-ComputerUse/chunk-bvxymt09.js";
var t = {
  enabled: !1,
  pixelValidation: !1,
  clipboardPasteMultiline: !0,
  mouseAnimation: !0,
  hideBeforeAction: !0,
  autoTargetDisplay: !0,
  clipboardGuard: !0,
  maskFailClosed: !0,
  adaptiveResolution: !1,
  coordinateMode: "pixels",
};
function o() {
  return { ...t, ...Qh("tengu_malort_pedway", t) };
}
function r() {
  let e = qn();
  return e === "max" || e === "pro";
}
function fut() {
  if (pm("hipaa")) return !1;
  return r() && o().enabled;
}
function iNt() {
  let { enabled: e, coordinateMode: a, ...n } = o();
  return n;
}
function GSe() {
  let e = Zp();
  return (
    (e.frozenCoordinateMode ??= o().coordinateMode),
    e.frozenCoordinateMode
  );
}
export { fut, iNt, GSe };

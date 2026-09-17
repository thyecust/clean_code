// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getSubscriptionType, getDynamicConfig_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isTainted } from "../../01-核心基础设施/核心工具-未归类/compliance-taints-store.js";
import { getComputerUseSession } from "./computer-use-session.js";
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
  return { ...t, ...getDynamicConfig_CACHED_MAY_BE_STALE("tengu_malort_pedway", t) };
}
function r() {
  let e = getSubscriptionType();
  return e === "max" || e === "pro";
}
function isComputerUseEnabled() {
  if (isTainted("hipaa")) return !1;
  return r() && o().enabled;
}
function getComputerUseSubGates() {
  let { enabled: e, coordinateMode: a, ...n } = o();
  return n;
}
function getFrozenCoordinateMode() {
  let e = getComputerUseSession();
  return (
    (e.frozenCoordinateMode ??= o().coordinateMode),
    e.frozenCoordinateMode
  );
}
export { isComputerUseEnabled, getComputerUseSubGates, getFrozenCoordinateMode };

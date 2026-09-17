// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getSubscriptionType, H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Pw } from "../设置-配置/设置-配置.aqbb35ee.js";
import { isPolicyAllowed } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
function yve() {
  return (
    a.CLAUDE_CODE_DISABLE_WORKFLOWS || Pw()?.settings.disableWorkflows === !0
  );
}
class t {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return ((this.cached = i()), this.cached);
  }
}
var n = new j(() => new t());
function Dc() {
  if (yve()) return !1;
  if (!JEt()) return !1;
  let { available: r, defaultOn: e } = o();
  if (!r) return !1;
  return Pw()?.settings.enableWorkflows ?? e;
}
function gAn() {
  return o().defaultOn;
}
function YEt() {
  return JEt() && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && o().available;
}
function PJe() {
  return Pw()?.settings.workflowKeywordTriggerEnabled ?? !0;
}
function JEt() {
  return isPolicyAllowed("allow_workflows");
}
function vnr() {
  if (yve() || !JEt()) return !0;
  if (Pw()?.settings.enableWorkflows === !1) return !0;
  return a.CLAUDE_CODE_WORKFLOWS === !1 || !H("tengu_workflows_enabled", !0);
}
function o() {
  return n.of(B().host).resolve();
}
function i() {
  if (a.CLAUDE_CODE_WORKFLOWS === !0) {
    let e = H("tengu_workflows_enabled", !0);
    return { available: e, defaultOn: e };
  }
  if (a.CLAUDE_CODE_WORKFLOWS === !1) return { available: !1, defaultOn: !1 };
  if (!H("tengu_workflows_enabled", !0))
    return { available: !1, defaultOn: !1 };
  return { available: !0, defaultOn: getSubscriptionType() !== "pro" };
}
function Rnr() {
  return H("tengu_jade_compass", !0);
}
export { yve, Dc, gAn, YEt, PJe, JEt, vnr, Rnr };

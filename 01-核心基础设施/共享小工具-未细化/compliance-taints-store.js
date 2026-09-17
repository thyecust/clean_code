// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
class n {
  taints = [];
  changed = Le();
  verdict = void 0;
  replaceTaints(i) {
    if (
      i.length === this.taints.length &&
      i.every((r) => this.taints.includes(r))
    )
      return;
    ((this.taints = i), this.changed.emit(this.taints));
  }
  registerVerdict(i) {
    this.verdict = i;
  }
}
var o = new j(() => new n());
function e() {
  return o.of(B().host);
}
function setComplianceTaints(i) {
  e().replaceTaints(i);
}
function isTainted(i) {
  return e().taints.includes(i);
}
function getComplianceTaints() {
  return e().taints;
}
function qRe(i) {
  return e().changed.subscribe(i);
}
function registerPolicyVerdict(i) {
  e().registerVerdict(i);
}
function isPolicyAllowed(i) {
  return e().verdict?.isPolicyAllowed(i) ?? !1;
}
function zRe(i) {
  let r = e().verdict;
  if (!r) return "unregistered";
  return r.policyDenyKind(i);
}
function getPolicyDeniedReason(i, r, t) {
  return e().verdict?.policyDeniedReason(i, r, t) ?? null;
}
function areComplianceTaintsSettled() {
  return e().verdict?.complianceTaintsSettled() ?? !1;
}
export { setComplianceTaints, isTainted, getComplianceTaints, qRe, registerPolicyVerdict, isPolicyAllowed, zRe, getPolicyDeniedReason, areComplianceTaintsSettled };

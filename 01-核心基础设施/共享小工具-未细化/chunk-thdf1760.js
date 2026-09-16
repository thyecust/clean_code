// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { s$ } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Aq } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
var d = new j(() => ({ degraded: !1 }));
function t() {
  return d.of(B().host);
}
function jee(n, r) {
  if (n !== Aq) return;
  let e = t();
  if (r === void 0) {
    e.degraded = !1;
    return;
  }
  let o = s$(r);
  if (o === "downstream_unreachable") e.degraded = !0;
  else if (o === "downstream_error") e.degraded = !1;
}
function t6n() {
  return t().degraded;
}
export { jee, t6n };

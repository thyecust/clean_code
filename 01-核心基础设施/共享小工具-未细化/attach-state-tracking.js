// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "./async-timeout-utils.js";
import { isDaemonBgWorker } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
class r {
  stampMs = 0;
  detachedSinceLastAttach = !1;
  reset() {
    ((this.stampMs = 0), (this.detachedSinceLastAttach = !1));
  }
}
var s = new j(() => new r());
function a() {
  return s.of(B().host);
}
function _ln(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = !1;
}
function markDetached() {
  a().detachedSinceLastAttach = !0;
}
function isDetachedSinceLastAttach() {
  return a().detachedSinceLastAttach;
}
function getAttachStampMs() {
  return a().stampMs;
}
function Nze(e) {
  return !1;
}
async function aft() {
  for (;;) {
    let e = Date.now();
    if (!Nze(e)) return;
    let { detachedSinceLastAttach: t, stampMs: o } = a(),
      c = t || o === 0 ? 500 : o + 500 - e;
    await sleep(Math.max(25, c) + 25);
  }
}
export { _ln, markDetached, isDetachedSinceLastAttach, getAttachStampMs, Nze, aft };

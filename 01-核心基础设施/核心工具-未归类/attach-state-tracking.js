// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../核心工具-并发与缓存/async-timeout-utils.js";
import "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
class AttachState {
  stampMs = 0;
  detachedSinceLastAttach = !1;
  reset() {
    ((this.stampMs = 0), (this.detachedSinceLastAttach = !1));
  }
}
var attachStatesByHost = new j(() => new AttachState());
function a() {
  return attachStatesByHost.of(B().host);
}
function markAttached(e) {
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
function isAttachQuietDrainActive(e) {
  return !1;
}
async function waitForAttachQuietDrainEnd() {
  for (;;) {
    let e = Date.now();
    if (!isAttachQuietDrainActive(e)) return;
    let { detachedSinceLastAttach: t, stampMs: o } = a(),
      c = t || o === 0 ? 500 : o + 500 - e;
    await sleep(Math.max(25, c) + 25);
  }
}
export { markAttached, markDetached, isDetachedSinceLastAttach, getAttachStampMs, isAttachQuietDrainActive, waitForAttachQuietDrainEnd };

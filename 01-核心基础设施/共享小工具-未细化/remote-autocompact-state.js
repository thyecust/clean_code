// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { tp, NM, xV, KVe, ZF, NTe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function r(t, e) {
  let n = tp(),
    c = ZF(t, e),
    o = NTe(t, e),
    a = !(NM() && !xV(t, e));
  return {
    enabled: n,
    effectiveWindow: c,
    threshold: o,
    enforced: a,
    source: KVe(t, e),
  };
}
function createRemoteAutocompactStateEmitter(t) {
  let e;
  return {
    notify(n, c) {
      let o = r(n, c);
      if (e !== void 0 && isSameRemoteAutocompactState(e, o)) return;
      ((e = o), t(o));
    },
    reset() {
      e = void 0;
    },
  };
}
function isSameRemoteAutocompactState(t, e) {
  return (
    t.enabled === e.enabled &&
    t.effectiveWindow === e.effectiveWindow &&
    t.threshold === e.threshold &&
    t.enforced === e.enforced &&
    t.source === e.source
  );
}
export { createRemoteAutocompactStateEmitter, isSameRemoteAutocompactState };

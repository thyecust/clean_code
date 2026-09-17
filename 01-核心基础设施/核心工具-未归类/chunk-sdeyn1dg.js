// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
function u() {
  let i = Le(),
    e = new Map(),
    o = 0;
  return {
    emit(t, r) {
      if (o === 0) {
        e.set(t, r);
        return;
      }
      i.emit(t, r);
    },
    subscribe(t) {
      o++;
      let r = [...e];
      e.clear();
      for (let [g, l] of r) t(g, l);
      let c = i.subscribe(t),
        s = !0;
      return () => {
        if (s) ((s = !1), o--, c());
      };
    },
  };
}
var deviceToolNotices = new Gt(u);
function deviceToolNoticesTo(i) {
  return (e, o) => {
    (logForDebugging(`[remote-tools] ${e}: ${o}`), deviceToolNotices.of(i).emit(e, o));
  };
}
export { deviceToolNotices, deviceToolNoticesTo };

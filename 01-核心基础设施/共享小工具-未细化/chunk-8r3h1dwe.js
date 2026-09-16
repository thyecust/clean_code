// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, mDn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { TCn, Or, gU, R6, SRe, xZe, ikn } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { YKe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function iit(o) {
  if (
    (mDn(),
    gU(),
    (Or().providerCache = TCn()),
    R6(),
    SRe(),
    ikn(),
    o === "firstParty")
  )
    xZe();
}
class n {
  #o = !1;
  get autoModeCheckRan() {
    return this.#o;
  }
  claimAutoModeCheck() {
    if (this.#o) return !1;
    return ((this.#o = !0), !0);
  }
  rearmAutoModeCheck() {
    this.#o = !1;
  }
  reset() {
    this.#o = !1;
  }
}
var a = new j(() => new n());
function NHe(o) {
  return {
    key: "auto-mode-gate-notification",
    kind: "warning",
    text: o,
    color: "warning",
    priority: "high",
  };
}
async function FHe(o, l, d, c, r) {
  if (!a.of(o).claimAutoModeCheck()) return;
  let { updateContext: m, notification: e } = await YKe(l, c);
  if (
    (d((t) => {
      let s = m(t.toolPermissionContext),
        i =
          s === t.toolPermissionContext
            ? t
            : { ...t, toolPermissionContext: s };
      if (!e || r) return i;
      return {
        ...i,
        notifications: {
          ...i.notifications,
          queue: [...i.notifications.queue, NHe(e)],
        },
      };
    }),
    e && r)
  )
    r(NHe(e));
}
function ait(o) {
  a.of(o).rearmAutoModeCheck();
}
export { iit, NHe, FHe, ait };

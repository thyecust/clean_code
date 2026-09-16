// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { Oa } from "../设置-配置/设置-配置.aqbb35ee.js";
import { t_ } from "./chunk-q599wyee.js";
import { BT } from "./chunk-a5errgr8.js";
import { Xoe, TR } from "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import { qtr } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { xF, pc, nh, Kp, dWt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { qbt } from "../提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { _Gt } from "./chunk-qg9n8r78.js";
var p = new Set([t_, BT]),
  T = ["subscribe_pr_activity", "unsubscribe_pr_activity"];
function c(o) {
  return T.some((t) => o.endsWith(t));
}
function fQt(o, t) {
  if (t.length === 0) return o;
  let e = t.map((n) => [n, Oa(n)]),
    r = o.filter((n) => !e.some(([l, i]) => Kp(n, l, i)));
  return r.length === o.length ? o : r;
}
function f(o) {
  return !1;
}
var s = import.meta.require("../../02-功能模块/Teammates团队/getCoordinatorSystemPrompt.geqa52wg.js");
function Idr(o) {
  let t = a.CLAUDE_CODE_BRIEF,
    e = new Set(
      (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "")
        .split(",")
        .map((r) => r.trim())
        .filter(Boolean),
    );
  return o.filter(
    (r) =>
      qbt.has(r.name) ||
      c(r.name) ||
      f(r) ||
      _Gt(r) ||
      (t && p.has(r.name)) ||
      TR(r, e),
  );
}
function M6e(o, t, e, r) {
  let [n, l] = xF(dWt(pc([...o, ...t], "name"), r), nh),
    i = [...l.sort(Xoe), ...n.sort(Xoe)];
  if (s) {
    if (s.isCoordinatorMode()) return Idr(i);
  }
  return i;
}
function N6e(o, t) {
  let e = o.length === 1 ? o[0] : void 0;
  if (e && qtr(t, e)) return [];
  return o;
}
export { fQt, Idr, M6e, N6e };

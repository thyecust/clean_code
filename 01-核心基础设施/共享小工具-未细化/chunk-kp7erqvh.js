// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { U } from "./chunk-r3y9qj3r.js";
import { dh, wt } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { BA } from "./chunk-csjxh2sy.js";
import { Ai } from "./chunk-s339rbnn.js";
import { V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { gLe, Tne } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
F();
function KPt(o, n) {
  return gLe(o) ?? gLe(n) ?? dh();
}
function Wit(o) {
  return wt(KPt(o.mainLoopModelForSession, o.mainLoopModel));
}
function q8() {
  let o = U((e) => e.mainLoopModel),
    n = U((e) => e.mainLoopModelForSession),
    i = BA(),
    s = Ai();
  return V(() => Tne(n, o), [n, o, i, s]);
}
function Git() {
  let o = U((e) => e.mainLoopModel),
    n = U((e) => e.mainLoopModelForSession),
    i = BA(),
    s = Ai();
  return V(() => KPt(n, o), [n, o, i, s]);
}
function qa() {
  let o = U((e) => e.mainLoopModel),
    n = U((e) => e.mainLoopModelForSession),
    i = BA(),
    s = Ai();
  return V(
    () => Wit({ mainLoopModel: o, mainLoopModelForSession: n }),
    [n, o, i, s],
  );
}
export { KPt, Wit, q8, Git, qa };

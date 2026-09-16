// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ht, C7n } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
var tPt = {
    create: "Cloud session active",
    attach: "Attached to cloud session",
  },
  nPt = " \xB7 code here or at ";
function a(e, t) {
  return `${tPt[e]}${nPt}${t}`;
}
function hit(e, t, o) {
  let s = a(e, t);
  return o ? C7n(e, t, s) : Ht(s, "info");
}
export { tPt, nPt, hit };

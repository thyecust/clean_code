// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { gin } from "../../02-功能模块/Workflow编排/chunk-bkcg0nbj.js";
import { fAe } from "../../00-第三方库/acorn/acorn.pk8w19yv.js";
function usesNondeterministicApi(o) {
  let { parse: i } = fAe(),
    s = gin(),
    t = !1;
  try {
    let a = i(o, {
      ecmaVersion: "latest",
      sourceType: "module",
      allowAwaitOutsideFunction: !0,
      allowReturnOutsideFunction: !0,
    });
    s.simple(a, {
      MemberExpression(e) {
        if (
          e.computed ||
          e.object.type !== "Identifier" ||
          e.property.type !== "Identifier"
        )
          return;
        let r = e.object.name,
          n = e.property.name;
        if ((r === "Date" && n === "now") || (r === "Math" && n === "random"))
          t = !0;
      },
      NewExpression(e) {
        if (
          e.callee.type === "Identifier" &&
          e.callee.name === "Date" &&
          e.arguments.length === 0
        )
          t = !0;
      },
    });
  } catch {
    return !1;
  }
  return t;
}
export { usesNondeterministicApi };

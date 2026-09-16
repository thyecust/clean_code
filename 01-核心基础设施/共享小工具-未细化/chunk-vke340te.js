// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xm } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var t = Qt(void 0);
function qye(f) {
  let i = _(3),
    { queue: o, children: u } = f,
    n;
  if (i[0] !== u || i[1] !== o)
    ((n = e(t.Provider, { value: o, children: u })),
      (i[0] = u),
      (i[1] = o),
      (i[2] = n));
  else n = i[2];
  return n;
}
function qc() {
  return De(t) ?? Xm();
}
export { qye, qc };

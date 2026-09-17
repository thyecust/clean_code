// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var DEFAULT_RECENT_WINDOW_MS = 150,
  REFUSE_INPUT_WINDOW_MS = 250;
function isRecent(e, n = DEFAULT_RECENT_WINDOW_MS) {
  let t = Date.now() - e;
  return t >= 0 && t < n;
}
function useIsKeyRecent(e) {
  let [n, t] = d(() => ({ key: e, at: Date.now() }));
  if (n.key !== e) t({ key: e, at: Date.now() });
  return function () {
    return isRecent(n.at);
  };
}
export { DEFAULT_RECENT_WINDOW_MS, REFUSE_INPUT_WINDOW_MS, isRecent, useIsKeyRecent };

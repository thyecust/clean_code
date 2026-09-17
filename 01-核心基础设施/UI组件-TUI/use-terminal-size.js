// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Kx } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { De, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
function useTerminalSize() {
  let e = De(Kx);
  if (!e)
    throw Error("useTerminalSize must be used within an Ink App component");
  return e;
}
export { useTerminalSize };

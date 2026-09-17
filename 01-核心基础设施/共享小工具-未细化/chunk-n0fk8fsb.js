// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
class o {
  #o = !1;
  #s = !1;
  get backgroundTasksDisabled() {
    return this.#o;
  }
  get unsandboxedCommandsDisabled() {
    return this.#s;
  }
  disableBackgroundTasks() {
    this.#o = !0;
  }
  disableUnsandboxedCommands() {
    this.#s = !0;
  }
}
var s = new j(() => new o());
function i5() {
  return s.of(B().host);
}
function Dl() {
  return i5().backgroundTasksDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS;
}
var AAt = "Background tasks are disabled in this session.";
export { i5, Dl, AAt };

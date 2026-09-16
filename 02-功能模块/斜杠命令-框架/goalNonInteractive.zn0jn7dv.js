// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
var e = {
    type: "local-jsx",
    name: "goal",
    description: "Set a goal Claude checks before stopping",
    argumentHint: "[<condition> | clear]",
    immediate: !0,
  },
  o = {
    type: "local",
    name: "goal",
    supportsNonInteractive: !0,
    thinClientDispatch: "post-text",
    description: "Set a goal \u2014 keep working until the condition is met",
    get isHidden() {
      return !ke();
    },
    isEnabled: () => ke() || Nn(),
    load: () => import("./goal-cmd.rjv3q5te.js"),
  },
  n = e;
export { n as default, o as goalNonInteractive };

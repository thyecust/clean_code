// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { Ge } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
function jy(t) {
  return (
    a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS ||
    (t ?? Ge()).disableBundledSkills === !0
  );
}
function zqt(t, e) {
  return t.type === "prompt" && t.source === "builtin" && jy(e);
}
export { jy, zqt };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { M, ldr } from "./chunk-h62vxw7j.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be, w_e } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
function K0n(e = n7t) {
  let o = a.CLAUDE_CODE_HOVER_REST;
  if (o === void 0) return;
  if (t7t(o) !== "pinned") return;
  return { backend: M() ? e() : void 0, configHome: be() };
}
function X0n(e) {
  let o = M() ? e.backend : void 0;
  if (o === void 0) return;
  if (!w_e(e.configHome)) {
    n(
      `CLAUDE_CONFIG_DIR now names ${be()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,
      { level: "warn" },
    );
    return;
  }
  return o;
}
function t7t(e) {
  if (typeof e !== "boolean")
    n(
      `tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,
      { level: "warn" },
    );
  let o = ldr(e);
  if (o === "conflict")
    n(
      `tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,
      { level: "warn" },
    );
  return o;
}
function n7t() {
  if (!M()) return;
  return;
}
export { K0n, X0n, t7t, n7t };

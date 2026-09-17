// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isHoverRestEnabled, pinHoverRestFlag } from "./chunk-h62vxw7j.js";
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir, isSameAsConfigDir } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
function pinStorageV5FromEnv(e = tryCreateV5Backend) {
  let o = a.CLAUDE_CODE_HOVER_REST;
  if (o === void 0) return;
  if (recordHoverRestDecision(o) !== "pinned") return;
  return { backend: isHoverRestEnabled() ? e() : void 0, configHome: getClaudeConfigDir() };
}
function adoptStorageV5EnvPin(e) {
  let o = isHoverRestEnabled() ? e.backend : void 0;
  if (o === void 0) return;
  if (!isSameAsConfigDir(e.configHome)) {
    logForDebugging(
      `CLAUDE_CONFIG_DIR now names ${getClaudeConfigDir()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,
      { level: "warn" },
    );
    return;
  }
  return o;
}
function recordHoverRestDecision(e) {
  if (typeof e !== "boolean")
    logForDebugging(
      `tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,
      { level: "warn" },
    );
  let o = pinHoverRestFlag(e);
  if (o === "conflict")
    logForDebugging(
      `tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,
      { level: "warn" },
    );
  return o;
}
function tryCreateV5Backend() {
  if (!isHoverRestEnabled()) return;
  return;
}
export { pinStorageV5FromEnv, adoptStorageV5EnvPin, recordHoverRestDecision, tryCreateV5Backend };

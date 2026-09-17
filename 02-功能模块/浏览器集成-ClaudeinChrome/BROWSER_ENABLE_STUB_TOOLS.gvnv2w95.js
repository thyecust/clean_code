// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 84 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { getCcrSessionConfig } from "../../01-核心基础设施/核心工具-未归类/ccr-session-config.js";
import { s, se, c, it } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var o = "enable__mcp__claude-in-chrome",
  n = "enable__mcp__remote-devices__Claude_Browser",
  r =
    "Does nothing. If Claude in Chrome is connected in this session, its tools are already here: the tools whose names contain claude-in-chrome or Claude_in_Chrome. Use those directly.",
  a =
    "Does nothing. If the Claude desktop app's built-in browser is connected in this session, its tools are already here: the tools whose names contain Claude_Browser. Use those directly.",
  u =
    "Claude in Chrome needs no enabling in this session: if it is connected, its tools are already here as the tools whose names contain claude-in-chrome or Claude_in_Chrome, and you can use them now. If you have no such tools but do have tools whose names contain Claude_Browser, use those instead; if you have neither, tell the user that Chrome on their computer is not connected and continue with what you can do here.",
  i =
    "The Claude desktop app's built-in browser needs no enabling in this session: if it is connected, its tools are already here as the tools whose names contain Claude_Browser, and you can use them now. If you have no such tools but do have tools whose names contain claude-in-chrome or Claude_in_Chrome, use those instead; if you have neither, tell the user that the browser in their Claude desktop app is not connected and continue with what you can do here.";
var d = createLazyValue(() => it({ task: se().optional() })),
  S = createLazyValue(() => c({ message: s() }));
function l({ name: h, label: _, description: e, result: t }) {
  return buildTool({
    name: h,
    maxResultSizeChars: 1e4,
    async description() {
      return e;
    },
    async prompt() {
      return e;
    },
    get inputSchema() {
      return d();
    },
    get outputSchema() {
      return S();
    },
    userFacingName() {
      return _;
    },
    shouldDefer: !0,
    isEnabled() {
      return getCcrSessionConfig() !== null;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput() {
      return "";
    },
    renderToolUseMessage() {
      return null;
    },
    async call(p) {
      return { data: { message: t } };
    },
    mapToolResultToToolResultBlockParam(p, E) {
      return { tool_use_id: E, type: "tool_result", content: t };
    },
  });
}
var C = l({ name: o, label: "Claude in Chrome", description: r, result: u }),
  T = l({ name: n, label: "Browser", description: a, result: i }),
  BROWSER_ENABLE_STUB_TOOLS = [C, T];
export { BROWSER_ENABLE_STUB_TOOLS };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 4 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { I } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { defineExportGetters } from "./chunk-2c9tjhwd.js";
var o = {};
defineExportGetters(o, {
  CLAUDE_CODE_MESSAGING_SOCKET: () => e,
  CLAUDE_CODE_MESSAGING_TOKEN: () => t,
});
var e = I.str(),
  t = I.str();
var udsInboxShape = { ...o };
export { udsInboxShape };

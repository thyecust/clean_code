// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 8 个导出。
export {
  gdt as DESCRIPTION,
  Dsn as END_CONVERSATION_FINAL_MESSAGE,
  Osn as END_CONVERSATION_FORK_REFLECTION_PROMPT,
  Lsn as END_CONVERSATION_REFLECTION_PROMPT,
  i1t as END_CONVERSATION_TOOL_RESULT,
  Mhr as getDeferredHintSection,
  a1t as isEndConversationToolEnabled,
} from "../../02-功能模块/工具EndConversation/工具EndConversation.409rx3vp.js";
export {
  ab as END_CONVERSATION_TOOL_NAME,
} from "./chunk-vtgvbed1.js";

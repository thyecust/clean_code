// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 94 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  trn as bootstrapFetchCanConvergeSlot,
  f7 as fetchBootstrapData,
  opr as refreshBootstrapData,
  oLt as registerClientDataGetters,
} from "../../02-功能模块/上下文压缩-Compact/chunk-npckj9cm.js";

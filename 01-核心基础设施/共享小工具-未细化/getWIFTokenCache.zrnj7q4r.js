// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 20 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  qje as TokenCache,
  zje as resolveCredentialsFromConfig,
} from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
export {
  Pke as getResolvedWIFBaseUrlSnapshot,
  m2e as getWIFCredentials,
  BQ as getWIFTokenCache,
  L0n as invalidateWIFToken,
  fbr as isWIFTransientExchangeError,
  z8t as resetWIFCredentialState,
} from "../../02-功能模块/认证-OAuth登录/chunk-x3rm9w4b.js";

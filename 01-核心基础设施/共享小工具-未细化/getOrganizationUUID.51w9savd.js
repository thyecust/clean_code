// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  LKt as buildAuthUrl,
  dRn as createAndStoreApiKey,
  uRn as exchangeCodeForTokens,
  Ifr as extractOAuthErrorFields,
  uZe as fetchAndStoreUserRoles,
  MKt as fetchProfileInfo,
  psr as getAccountOnHoldErrorUrl,
  GD as getOrganizationUUID,
  NKt as isAccountOnHoldError,
  msr as isExpectedOAuthTokenError,
  TU as isInvalidGrantError,
  fsr as isInvalidScopeError,
  n1 as isOAuthTokenExpired,
  QCt as parseScopes,
  pRn as populateOAuthAccountInfoIfNeeded,
  wU as refreshOAuthToken,
  DKt as resolveRefreshTokenExpiresAt,
  eS as revokeOAuthToken,
  lx as shouldUseClaudeAIAuth,
  dZe as storeOAuthAccountInfo,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";

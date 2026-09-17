// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 214 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  classifySdkAuthFailure as cpr,
  authorizationUrlForDebugLog as j2n,
  normalizeOAuthErrorBody as W2n,
  createAuthFetch as ALt,
  AuthenticationCancelledError as K3e,
  getOAuthCallbackSubmitter as ghr,
  setActiveOAuthPromise as hhr,
  getActiveOAuthPromise as _hr,
  clearMcpOAuthStubIfTokenless as CLt,
  snapshotServerTokens as yhr,
  revokeReplacedServerTokens as Shr,
  revokeServerTokens as bhr,
  clearServerTokensFromLocalStorage as G2n,
  performMCPOAuthFlow as whr,
  wrapFetchWithStepUpDetection as wct,
  ClaudeAuthProvider as X3e,
  readClientSecret as Thr,
  saveMcpClientSecret as Ehr,
  clearMcpClientConfig as Ahr,
  getMcpClientConfig as q2n,
  maybeAppendOfflineAccess as upr,
  isEntraLoginUrl as dpr,
} from "./mcp-oauth-provider.js";
import "./xaa-idp-auth.js";
import "../../01-核心基础设施/核心工具-并发与缓存/lazy-event-emitters.js";
import "./oauth-callback.js";
import "./url-and-error-redaction.js";
import "./oauth-client.js";
import "./pkce-challenge.js";
import "../MCP客户端/chunk-tv3jbp8f.js";
export {
  K3e as AuthenticationCancelledError,
  X3e as ClaudeAuthProvider,
  j2n as authorizationUrlForDebugLog,
  cpr as classifySdkAuthFailure,
  Ahr as clearMcpClientConfig,
  CLt as clearMcpOAuthStubIfTokenless,
  G2n as clearServerTokensFromLocalStorage,
  ALt as createAuthFetch,
  _hr as getActiveOAuthPromise,
  q2n as getMcpClientConfig,
  ghr as getOAuthCallbackSubmitter,
  dpr as isEntraLoginUrl,
  upr as maybeAppendOfflineAccess,
  W2n as normalizeOAuthErrorBody,
  whr as performMCPOAuthFlow,
  Thr as readClientSecret,
  Shr as revokeReplacedServerTokens,
  bhr as revokeServerTokens,
  Ehr as saveMcpClientSecret,
  hhr as setActiveOAuthPromise,
  yhr as snapshotServerTokens,
  wct as wrapFetchWithStepUpDetection,
};

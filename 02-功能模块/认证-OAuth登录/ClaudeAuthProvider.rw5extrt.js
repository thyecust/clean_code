// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 214 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  sanitizeOAuthErrorCodeForAnalytics as spr,
  classifySdkAuthFailure as ipr,
  authorizationUrlForDebugLog as F2n,
  normalizeOAuthErrorBody as $2n,
  createAuthFetch as bLt,
  IssuerEchoCrossOriginError as iI,
  evaluateIssuerEchoPolicy as _ct,
  AuthenticationCancelledError as q3e,
  getOAuthCallbackSubmitter as nhr,
  setActiveOAuthPromise as rhr,
  getActiveOAuthPromise as ohr,
  clearMcpOAuthStubIfTokenless as wLt,
  snapshotServerTokens as shr,
  revokeReplacedServerTokens as ihr,
  revokeServerTokens as ahr,
  clearServerTokensFromLocalStorage as U2n,
  performMCPOAuthFlow as lhr,
  wrapFetchWithStepUpDetection as yct,
  ClaudeAuthProvider as z3e,
  readClientSecret as chr,
  saveMcpClientSecret as uhr,
  clearMcpClientConfig as dhr,
  getMcpClientConfig as B2n,
  maybeAppendOfflineAccess as apr,
  isEntraLoginUrl as lpr,
} from "./chunk-naqnacd3.js";
import "./xaa-idp-login.js";
import "../../01-核心基础设施/共享小工具-未细化/lazy-event-emitters.js";
import "../../01-核心基础设施/共享小工具-未细化/oauth-callback.js";
import "./url-and-error-redaction.js";
import "../MCP客户端/chunk-78r8f7dw.js";
import "../MCP客户端/mcp-protocol-schemas.js";
import "./pkce-challenge.js";
export {
  q3e as AuthenticationCancelledError,
  z3e as ClaudeAuthProvider,
  iI as IssuerEchoCrossOriginError,
  F2n as authorizationUrlForDebugLog,
  ipr as classifySdkAuthFailure,
  dhr as clearMcpClientConfig,
  wLt as clearMcpOAuthStubIfTokenless,
  U2n as clearServerTokensFromLocalStorage,
  bLt as createAuthFetch,
  _ct as evaluateIssuerEchoPolicy,
  ohr as getActiveOAuthPromise,
  B2n as getMcpClientConfig,
  nhr as getOAuthCallbackSubmitter,
  lpr as isEntraLoginUrl,
  apr as maybeAppendOfflineAccess,
  $2n as normalizeOAuthErrorBody,
  lhr as performMCPOAuthFlow,
  chr as readClientSecret,
  ihr as revokeReplacedServerTokens,
  ahr as revokeServerTokens,
  spr as sanitizeOAuthErrorCodeForAnalytics,
  uhr as saveMcpClientSecret,
  rhr as setActiveOAuthPromise,
  shr as snapshotServerTokens,
  yct as wrapFetchWithStepUpDetection,
};

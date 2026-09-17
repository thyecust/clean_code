// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  setGrowthBookCredentials as LRn,
  setGrowthBookStorageBackend as MRn,
  onGrowthBookRefresh as Ff,
  hasGrowthBookOverride as $sr,
  getAllGrowthBookFeatures as kZe,
  isGrowthBookCacheEmpty as TRe,
  hasFreshGrowthBookFeatures as XC,
  getNonDefaultFeatureKeys as NRn,
  isGrowthBookEnabled as CU,
  getUserAttributes as Usr,
  initializeGrowthBook as df,
  getFeatureValue_DEPRECATED as o5t,
  getFeatureValueWithSource_CACHED_MAY_BE_STALE as $f,
  getFeatureValue_CACHED_MAY_BE_STALE as H,
  getFeatureValue_SESSION_PINNED as vU,
  getFeatureValue_CACHED_WITH_REFRESH as m0,
  checkGate_CACHED_OR_BLOCKING as od,
  refreshGrowthBookAfterAuthChange as _q,
  resetGrowthBook as qUe,
  ATIS_REQUEST_HEADER as FRn,
  getClientDataAtis as zUe,
  atisPin as mvt,
  getRequestAtis as $Rn,
  latchConversationAtis as URn,
  refreshGrowthBookFeatures as xZe,
  getDynamicConfig_BLOCKS_ON_INIT as r1,
  getDynamicConfig_CACHED_MAY_BE_STALE as Qh,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
export {
  FRn as ATIS_REQUEST_HEADER,
  mvt as atisPin,
  od as checkGate_CACHED_OR_BLOCKING,
  kZe as getAllGrowthBookFeatures,
  zUe as getClientDataAtis,
  r1 as getDynamicConfig_BLOCKS_ON_INIT,
  Qh as getDynamicConfig_CACHED_MAY_BE_STALE,
  $f as getFeatureValueWithSource_CACHED_MAY_BE_STALE,
  H as getFeatureValue_CACHED_MAY_BE_STALE,
  m0 as getFeatureValue_CACHED_WITH_REFRESH,
  o5t as getFeatureValue_DEPRECATED,
  vU as getFeatureValue_SESSION_PINNED,
  NRn as getNonDefaultFeatureKeys,
  $Rn as getRequestAtis,
  Usr as getUserAttributes,
  XC as hasFreshGrowthBookFeatures,
  $sr as hasGrowthBookOverride,
  df as initializeGrowthBook,
  TRe as isGrowthBookCacheEmpty,
  CU as isGrowthBookEnabled,
  URn as latchConversationAtis,
  Ff as onGrowthBookRefresh,
  _q as refreshGrowthBookAfterAuthChange,
  xZe as refreshGrowthBookFeatures,
  qUe as resetGrowthBook,
  LRn as setGrowthBookCredentials,
  MRn as setGrowthBookStorageBackend,
};

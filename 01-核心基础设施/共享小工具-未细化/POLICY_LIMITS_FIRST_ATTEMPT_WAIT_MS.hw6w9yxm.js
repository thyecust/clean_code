// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 81 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS as Ayr,
  POLICY_LIMITS_COLD_AWAIT_MS as BAn,
  FAIL_CLOSED_SHADOW_CACHE_TTL_MS as Cfr,
  shouldAwaitPolicyLimitsOnStartup as qJe,
  fetchPolicyLimitsForBearer as jAn,
  extractServerErrorFields as vfr,
  primePolicyLimitsCache as WAn,
  PolicyLimitsClient as GAn,
  DefaultPolicyLimitsClientSlot as Fnr,
  defaultPolicyLimitsClientSlots as Rfr,
  composePolicyLimitsClient as qAn,
  recordPolicyLimitsStartupAwaitResult as O4t,
  _getDefaultPolicyLimitsClientForTesting as Cyr,
  _resetPolicyLimitsForTesting as vyr,
  initializePolicyLimitsLoadingPromise as zAn,
  waitForPolicyLimitsToLoad as b_,
  logPolicyLimitsCacheStateAtFirstPrompt as VAn,
  loadPolicyLimits as KAn,
  refreshPolicyLimits as zJe,
  clearPolicyLimitsCache as XAn,
  startBackgroundPolling as Ryr,
  stopBackgroundPolling as kyr,
} from "../../02-功能模块/策略限制(PolicyLimits)/policy-limits-client.js";
export {
  Fnr as DefaultPolicyLimitsClientSlot,
  Cfr as FAIL_CLOSED_SHADOW_CACHE_TTL_MS,
  BAn as POLICY_LIMITS_COLD_AWAIT_MS,
  Ayr as POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS,
  GAn as PolicyLimitsClient,
  Cyr as _getDefaultPolicyLimitsClientForTesting,
  vyr as _resetPolicyLimitsForTesting,
  XAn as clearPolicyLimitsCache,
  qAn as composePolicyLimitsClient,
  Rfr as defaultPolicyLimitsClientSlots,
  vfr as extractServerErrorFields,
  jAn as fetchPolicyLimitsForBearer,
  zAn as initializePolicyLimitsLoadingPromise,
  KAn as loadPolicyLimits,
  VAn as logPolicyLimitsCacheStateAtFirstPrompt,
  WAn as primePolicyLimitsCache,
  O4t as recordPolicyLimitsStartupAwaitResult,
  zJe as refreshPolicyLimits,
  qJe as shouldAwaitPolicyLimitsOnStartup,
  Ryr as startBackgroundPolling,
  kyr as stopBackgroundPolling,
  b_ as waitForPolicyLimitsToLoad,
};

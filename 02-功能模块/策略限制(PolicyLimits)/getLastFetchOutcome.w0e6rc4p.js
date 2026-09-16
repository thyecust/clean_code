// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 78 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  trr as PolicyState,
  q4t as areComplianceTaintsSettled,
  rCn as detachPolicyLimitsBackend,
  iU as getCachePath,
  tQe as getDiskAdoptionEpoch,
  kve as getLastFetchOutcome,
  oCn as getPolicyCacheRevision,
  aCn as getPolicyDefault,
  KJ as getPolicyLimitsIneligibleReason,
  ch as getResponseFromCache,
  sU as getSessionCache,
  xve as hasNameableComplianceTaint,
  B4t as isDiskAdoptionSuppressed,
  Mt as isPolicyAllowed,
  G4t as isPolicyAllowedInResponse,
  iCn as isPolicyEnforced,
  lA as isPolicyLimitsEligible,
  Cme as isPolicyRouteMissing,
  U4t as liftDiskAdoptionSuppression,
  nQe as loadCachedResponse,
  j4t as parseCachedResponse,
  sCn as policyDeniedHint,
  op as policyDeniedReason,
  DD as policyDenyKind,
  kfr as policyStates,
  pAt as projectPolicyLimitsBody,
  W4t as seedSessionCacheFromPrime,
  rQe as serverBodyOf,
  F4t as setLastFetchOutcome,
  use as setSessionCache,
  $4t as suppressDiskAdoption,
} from "./chunk-8sw91yn5.js";

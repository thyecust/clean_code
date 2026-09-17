// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 48 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  isPluginBlockedByPolicy as bd,
  getStrictKnownMarketplaces as PH,
  areLocalPluginDirsAllowedByPolicy as bK,
  localPluginDirsBlockedMessage as gXe,
  areSideloadFlagsDisabledByPolicy as wK,
  areCommandPluginSourcesDisabledByPolicy as JS,
  policyTierCommandsMayRun as lCe,
  REMOTE_POLICY_UNCONSENTED_MESSAGE as Swt,
  headersHelperPolicyRefusal as uJ,
  isHeadersHelperDisabledByPolicy as Nbn,
  marketplacesRefusedByPolicyClause as hXe,
  COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE as yN,
  sideloadFlagsBlockedMessage as ufe,
  isMarketplaceRestrictionPolicyActive as T1e,
  isSourceDisallowedOrUnverifiable as ZI,
  getPluginTrustMessage as xGt,
  getPluginSuggestionMarketplaces as _Xe,
  isMarketplaceSourceDeclaredByPolicy as yXe,
  extractHostFromSource as E1e,
  getHostPatternsFromAllowlist as Fbn,
  canonicalFetchSourceUrl as yG,
  isSourceInBlocklist as SXe,
  isSourceAllowedByPolicy as Hc,
} from "./plugin-source-policy.js";
export {
  yN as COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE,
  Swt as REMOTE_POLICY_UNCONSENTED_MESSAGE,
  JS as areCommandPluginSourcesDisabledByPolicy,
  bK as areLocalPluginDirsAllowedByPolicy,
  wK as areSideloadFlagsDisabledByPolicy,
  yG as canonicalFetchSourceUrl,
  E1e as extractHostFromSource,
  Fbn as getHostPatternsFromAllowlist,
  _Xe as getPluginSuggestionMarketplaces,
  xGt as getPluginTrustMessage,
  PH as getStrictKnownMarketplaces,
  uJ as headersHelperPolicyRefusal,
  Nbn as isHeadersHelperDisabledByPolicy,
  T1e as isMarketplaceRestrictionPolicyActive,
  yXe as isMarketplaceSourceDeclaredByPolicy,
  bd as isPluginBlockedByPolicy,
  Hc as isSourceAllowedByPolicy,
  ZI as isSourceDisallowedOrUnverifiable,
  SXe as isSourceInBlocklist,
  gXe as localPluginDirsBlockedMessage,
  hXe as marketplacesRefusedByPolicyClause,
  lCe as policyTierCommandsMayRun,
  ufe as sideloadFlagsBlockedMessage,
};

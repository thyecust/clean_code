// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 33 个导出。
export {
  gtt as HELPER_CONSENT_STATE_ID,
  T8t as SETTINGS_FILENAME,
  wie as getEligibilityMemo,
  JRt as getHelperConsentPath,
  htt as getIneligibleReason,
  V6 as getLastLoadStatus,
  ytt as getMockRemoteSettingsFixturePath,
  C8t as getMockRemoteSettingsValue,
  QRt as getRemoteManagedSettingsConsentedBaseline,
  tkt as getRemoteManagedSettingsRawCache,
  rv as getRemoteManagedSettingsSyncFromCache,
  YT as getRemoteSettingsPathOverride,
  K6 as getSettingsPath,
  FQ as getSyncCacheResetEpoch,
  jHn as hasPolicySettingsNotified,
  FHn as helperConsentDigest,
  Jge as isEvalPolicySnapshotOnly,
  ylr as isProjectedSnapshot,
  jR as isRemoteManagedSettingsVerified,
  Yge as isRemoteManagedSettingsVerifiedAndConsented,
  BHn as markPolicySettingsNotified,
  A8t as markRemoteManagedSettingsConsented,
  _tt as onLastLoadStatusChanged,
  Stt as primeRemoteManagedSettingsCache,
  $Hn as registerSyncCacheResetListener,
  WHn as rememberEligibility,
  Qge as remoteSettingsFileWritten,
  UHn as resetSyncCache,
  GHn as setEvalPolicySnapshotOnly,
  ZRt as setLastLoadStatus,
  JBe as setSessionCache,
  E8t as stripReservedKeys,
  ekt as unverifiedRemoteCacheWithholdsProvisions,
} from "./设置-配置.aqbb35ee.js";

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 83 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { getPreSettingsEnvSnapshot as CK, peekPreSettingsEnvSnapshot as xC, getAppliedGlobalConfigEnv as moe, dropPreSettingsEnvSnapshot as gwn, filterPolicyPredicateEnv as Dj, applySafeConfigEnvironmentVariables as goe, applyConfigEnvironmentVariables as dR } from "../遥测-OpenTelemetry/settings-env-application.js";
export {
  dR as applyConfigEnvironmentVariables,
  goe as applySafeConfigEnvironmentVariables,
  Dj as filterPolicyPredicateEnv,
  moe as getAppliedGlobalConfigEnv,
  xC as getLatchedPreSettingsEnvSnapshot,
  CK as getPreSettingsEnvSnapshot,
  gwn as resetPreSettingsEnvSnapshotForClaim,
};

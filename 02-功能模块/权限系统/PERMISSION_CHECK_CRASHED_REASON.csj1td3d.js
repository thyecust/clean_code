// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 30 个导出。
export {
  mTe as PERMISSION_CHECK_CRASHED_REASON,
  pTe as agentToolPoolDeniedMessage,
  gTe as applyPermissionRulesToPermissionContext,
  que as carriesAskRuleIntent,
  jv as checkRuleBasedPermissions,
  qBt as consultPermissionRequestHooksForUnpromptableAsk,
  Fl as createPermissionRequestMessage,
  XBt as deletePermissionRule,
  VBt as enforceAutoModeDenialLimits,
  GBt as filterDispatchableAgents,
  WS as findSafetyCheckReason,
  dVe as getDispatchableAgents,
  BDe as guardHookUpdatedInput,
  ugt as hasAutoModeClassifierDenyRules,
  gd as hasPermissionsToUseTool,
  fTe as hasPermissionsToUseToolWithSink,
  KBt as hookUpdatedInputSatisfiesInteraction,
  dTe as isAgentToolPoolDenied,
  Gue as isAskRuleDrivenReason,
  uVe as isAutoModeConsentFlowEnabled,
  ane as isChainOnAllowActive,
  $zn as isSandboxOverrideUnderReadBlock,
  Epr as isServerPolicyAskReason,
  ine as permissionRuleSourceDisplayString,
  zBt as recordAutoModeDenial,
  bpn as recordAutoModeSuccess,
  cgt as resetDenialStreakAfterUserApproval,
  c3 as stripWholeToolGrantsForAsk,
  pVe as syncPermissionRulesFromDisk,
  HO as withoutGrantsForRemoteScope,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";

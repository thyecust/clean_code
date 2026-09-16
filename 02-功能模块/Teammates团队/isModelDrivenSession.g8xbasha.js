// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 17 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  nbr as _setAmbientMarkerProbeForTesting,
  cmr as _tmuxGlobalEnvOutputHasMarker,
  tbr as clearDynamicTeamContext,
  lS as getAgentId,
  Ip as getAgentName,
  L5 as getDynamicTeamContext,
  aS as getParentSessionId,
  ii as getTeamName,
  cS as getTeammateColor,
  iS as getTeammateContext,
  WRe as hasActiveInProcessTeammates,
  jRe as hasNonLeadTeammate,
  v5t as hasWorkingInProcessTeammates,
  f1 as isInProcessTeammate,
  vP as isModelDrivenSession,
  BRe as isNestedInteractiveClaudeSession,
  _et as isPlanModeRequired,
  ZC as isTeamLead,
  Zi as isTeammate,
  ZSr as setCliParentSessionId,
  ebr as setDynamicTeamContext,
  lmr as teammateIdentities,
  Kkn as waitForTeammatesToBecomeIdle,
} from "./chunk-811z9z0t.js";

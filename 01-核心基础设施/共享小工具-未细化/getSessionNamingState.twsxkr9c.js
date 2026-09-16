// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 10 个导出。
export {
  pSn as claimSessionNameAtStartup,
  c7e as claimUniqueSessionName,
  rh as getSessionNamingState,
  dSn as noteVettedCorrespondent,
  fSn as notifyCorrespondentsOfRename,
  Gpe as reclaimSessionNameOnResume,
  L3t as renameSupersededDuringScan,
  lbt as scheduleSettledRecheck,
  Wpe as settledYieldFor,
  D3t as takePendingYield,
} from "../../02-功能模块/跨会话消息(UDS)/chunk-9kzxq41e.js";

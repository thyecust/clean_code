// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载若干依赖 chunk；经查均已由主入口初始化，已移除。共 27 个导出。
export {
  X8n as awaitMemoryPrefetchBlocking,
  Y8n as clearSentSkillNamesForAgent,
  pn as createAttachmentMessage,
  Egn as evictSentSkillNames,
  Tgn as filterDuplicateMemoryAttachments,
  b5e as generateFileAttachment,
  AWt as getAgentListingDeltaAttachment,
  Jne as getAttachmentMessages,
  oyt as getDeferredToolsDeltaAttachment,
  wgn as getMcpDroppedToolsDeltaAttachment,
  bgn as getMcpInstructionsDeltaAttachment,
  ygn as getPromptAnnouncementAttachments,
  SEe as getQueuedCommandAttachments,
  S5e as getSandboxInstructionsAttachments,
  Agn as getSkillListingAttachments,
  hgn as getWorkshopPlanPins,
  _gn as hasWorkshopActiveAttachment,
  Sgn as inlineSetBeforeLatch,
  ZO as isFileReadDenied,
  ryt as isInlineNotificationCommand,
  K8n as isMemoryRecallBlockingEnabled,
  VM as resetSentSkillNames,
  q8n as restateEnvironmentAfterCompact,
  z8n as restateModelIdentityAfterCompact,
  Q8n as seedSentSkillNames,
  V8n as startRelevantMemoryPrefetch,
  J8n as suppressNextSkillListing,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  uyr,
  ffr,
  x1e,
  ffe,
  mfe,
  ag,
  BGt,
  pJ,
  SG,
  fJ,
  kwt,
  vXe,
  coe,
  bG,
  Kbn,
  kZn,
  x$,
  RXe,
  xwt,
  OH,
  eP,
  xZn,
  mfr,
  kC,
  sh,
  pCe,
  Hwt,
  Xbn,
  Iwt,
  gfe,
  __,
  gfr,
  Pwt,
  hfr,
  _fr,
  H1e,
  fCe,
  tP,
  Pj,
  rp,
  wG,
  Owt,
  HZn,
  yfr,
  Ybn,
  Jbn,
  jGt,
  I1e,
  Qbn,
  Zbn,
  WGt,
  GGt,
  qGt,
  zGt,
  VGt,
  hfe,
  ewn,
  twn,
  nwn,
  rwn,
  mCe,
  Dwt,
  mJ,
  Sfr,
  kXe,
  xXe,
  HXe,
  own,
  P1e,
  KGt,
  By,
  swn,
  IXe,
  iwn,
  DH,
  PXe,
  bfr,
  O1e,
  awn,
  OXe,
  Lwt,
  lwn,
} from "./chunk-g6nvp9mm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "./chunk-811z9z0t.js";
import "./chunk-enjekn9t.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "./chunk-qe04h4c5.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
export {
  HZn as ApprovedPermissionRequestSchema,
  Kbn as FAILURE_REASON_MAX_LENGTH,
  gfe as FRAME_SANITIZED_FOR_DISPLAY_MARKER,
  pCe as IDLE_FRAME_TOTAL_RECEIVE_BOUND,
  sh as IDLE_ID_FIELD_RECEIVE_BOUND,
  eP as IDLE_RESULT_MAX_LENGTH,
  xZn as IDLE_RESULT_TOTAL_BUDGET,
  kC as IDLE_SUMMARY_RECEIVE_BOUND,
  Iwt as INVALID_ID_MARKER,
  Xbn as INVALID_TIMESTAMP_MARKER,
  bG as IdleNotificationMessageSchema,
  pJ as MARK_READ_FAILURE_CAP,
  xwt as PLAN_CONTENT_DISPLAY_BOUND,
  iwn as PROTOCOL_FRAME_PROMPT_ERROR,
  yfr as PermissionResponseMessageSchema,
  qGt as PlanApprovalRequestMessageSchema,
  zGt as PlanApprovalResponseMessageSchema,
  gfr as STRUCTURED_FRAME_RECEIVE_SPECS,
  kZn as SUMMARY_DISPLAY_MAX_LENGTH,
  hfe as ShutdownApprovedMessageSchema,
  ewn as ShutdownRejectedMessageSchema,
  VGt as ShutdownRequestMessageSchema,
  P1e as TaskCompletedMessageSchema,
  KGt as TeammateTerminatedMessageSchema,
  Sfr as UNBOUND_PLAN_VERDICT_HONOURED,
  __ as UNKNOWN_SENDER,
  _fr as applyAggregateIdleResultBudget,
  RXe as capFailureReasonForDisplay,
  OH as capFrameBodyForDisplay,
  x$ as capFrameFieldForDisplay,
  rp as capIdFrameField,
  mfr as capIdleResult,
  wG as capRawFrameTextForDisplay,
  Hwt as capReceivedIdleResult,
  Pj as capStrippedFrameField,
  kwt as clearMailbox,
  H1e as createIdleNotification,
  Ybn as createPermissionRequestMessage,
  Jbn as createPermissionResponseMessage,
  Qbn as createSandboxPermissionRequestMessage,
  Zbn as createSandboxPermissionResponseMessage,
  nwn as createShutdownApprovedMessage,
  rwn as createShutdownRejectedMessage,
  twn as createShutdownRequestMessage,
  uyr as flushPendingMailboxPrunes,
  vXe as formatTeammateMessage,
  coe as formatTeammateMessages,
  x1e as getInboxPath,
  lwn as getLastPeerDmSummary,
  hfr as idleFrameRecency,
  awn as isHeadlessLeadDisplayableMessage,
  Owt as isIdleNotification,
  IXe as isModeSetRequest,
  jGt as isPermissionRequest,
  I1e as isPermissionResponse,
  Dwt as isPlanApprovalRequest,
  HXe as isPlanApprovalResponse,
  WGt as isSandboxPermissionRequest,
  GGt as isSandboxPermissionResponse,
  mJ as isShutdownApproved,
  mCe as isShutdownRequest,
  DH as isStructuredProtocolMessage,
  own as isTaskAssignment,
  swn as isTeamPermissionUpdate,
  Lwt as isTeammateWakeupPrompt,
  fCe as logIdleResultDeliveryOutcome,
  fJ as markMessagesAsRead,
  OXe as markMessagesAsReadByPredicate,
  BGt as markSingleMessageAsRead,
  SG as messageIdentityKey,
  By as parseFrameForDisplay,
  PXe as planApprovalResumeText,
  kXe as planVerdictBinding,
  xXe as planVerdictMismatchRejection,
  ffr as pruneInvalidMailboxEntries,
  ffe as readMailbox,
  mfe as readUnreadMessages,
  Pwt as sanitizeReceivedStructuredFrame,
  bfr as shutdownRequestReplyInstructions,
  tP as stripFrameControlChars,
  O1e as withShutdownReplyInstructions,
  ag as writeToMailbox,
};

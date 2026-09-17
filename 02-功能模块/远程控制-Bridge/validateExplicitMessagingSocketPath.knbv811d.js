// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 212 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  getUdsStartFailureCause as xgr,
  getUdsStartDegradedCause as Hgr,
  getUdsInboxUnavailableReason as fDt,
  setOnRename as mDt,
  setOnEnableRemoteControl as Igr,
  setOnPeerMessageStatus as gDt,
  setOnEnqueue as Pgr,
  vettedPeerReplyTarget as hDt,
  getUdsMessagingSocketPath as Ogr,
  getDefaultUdsSocketPath as Vdr,
  getPerUidFallbackUdsSocketPath as sBn,
  startCrossSessionInbox as Dgr,
  validateExplicitMessagingSocketPath as Kdr,
  startUdsMessaging as Xdr,
  currentSenderClass as iBn,
  unlinkActiveKeyFileSync as aBn,
} from "../跨会话消息-UDS/uds-messaging.js";
import "../Teammates团队/peer-idle-notices.js";
import "../权限系统/cross-session-inbound-gate.js";
import "../../01-核心基础设施/共享小工具-未细化/file-transfer-config.js";
export {
  iBn as currentSenderClass,
  Vdr as getDefaultUdsSocketPath,
  sBn as getPerUidFallbackUdsSocketPath,
  fDt as getUdsInboxUnavailableReason,
  Ogr as getUdsMessagingSocketPath,
  Hgr as getUdsStartDegradedCause,
  xgr as getUdsStartFailureCause,
  Igr as setOnEnableRemoteControl,
  Pgr as setOnEnqueue,
  gDt as setOnPeerMessageStatus,
  mDt as setOnRename,
  Dgr as startCrossSessionInbox,
  Xdr as startUdsMessaging,
  aBn as unlinkActiveKeyFileSync,
  Kdr as validateExplicitMessagingSocketPath,
  hDt as vettedPeerReplyTarget,
};

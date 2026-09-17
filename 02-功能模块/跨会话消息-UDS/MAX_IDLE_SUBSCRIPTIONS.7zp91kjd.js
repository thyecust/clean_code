// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 211 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  MAX_IDLE_SUBSCRIPTIONS as RPe,
  notifyWhenIdleFrameSchema as hsn,
  peerIdleNoticeFrameSchema as _sn,
  recordIdleSubscription as ysn,
  notePeerIdleStatus as JNt,
  flushIdleSubscribers as QNt,
  safeIdleLabel as pdt,
  registerIdleSubscription as Ssn,
  hasOutstandingIdleSubscription as nqe,
  forgetIdleSubscription as fdt,
  admitIdleNotice as bsn,
  setOnPeerIdleNotice as ZNt,
  setIdleLastTurnTextProvider as e1t,
  setIdleNoticeSender as t1t,
  setOnIdleSubscribed as n1t,
  setRegisteredInboxOfPidReader as r1t,
  idleSubscribedSystemLine as wsn,
  idleNoticeSystemLine as Tsn,
  noteParkedAtShutdown as Esn,
  setHostStatusSubscription as Dhr,
  sendUnavailableNotice as mdt,
  enqueueIdleNoticesForModel as Asn,
} from "../Teammates团队/peer-idle-notices.js";
import "../权限系统/cross-session-inbound-gate.js";
export {
  RPe as MAX_IDLE_SUBSCRIPTIONS,
  bsn as admitIdleNotice,
  Asn as enqueueIdleNoticesForModel,
  QNt as flushIdleSubscribers,
  fdt as forgetIdleSubscription,
  nqe as hasOutstandingIdleSubscription,
  Tsn as idleNoticeSystemLine,
  wsn as idleSubscribedSystemLine,
  Esn as noteParkedAtShutdown,
  JNt as notePeerIdleStatus,
  hsn as notifyWhenIdleFrameSchema,
  _sn as peerIdleNoticeFrameSchema,
  ysn as recordIdleSubscription,
  Ssn as registerIdleSubscription,
  pdt as safeIdleLabel,
  mdt as sendUnavailableNotice,
  Dhr as setHostStatusSubscription,
  e1t as setIdleLastTurnTextProvider,
  t1t as setIdleNoticeSender,
  n1t as setOnIdleSubscribed,
  ZNt as setOnPeerIdleNotice,
  r1t as setRegisteredInboxOfPidReader,
};

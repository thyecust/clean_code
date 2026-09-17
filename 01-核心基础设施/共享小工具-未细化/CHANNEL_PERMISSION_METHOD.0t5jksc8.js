// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 78 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  ChannelMessageNotificationSchema as VPe,
  CHANNEL_PERMISSION_METHOD as P1t,
  ChannelPermissionNotificationSchema as Hin,
  CHANNEL_PERMISSION_REQUEST_METHOD as Iin,
  wrapChannelMessage as KPe,
  getEffectiveChannelAllowlist as Ydt,
  isChannelGateHardRevocation as Pin,
  isChannelsPolicyBlocked as Ebe,
  findChannelEntry as ste,
  gateChannelServer as XPe,
} from "../../02-功能模块/插件系统/channel-gate.js";
import "../../02-功能模块/插件系统/chunk-rbjz1q03.js";
export {
  P1t as CHANNEL_PERMISSION_METHOD,
  Iin as CHANNEL_PERMISSION_REQUEST_METHOD,
  VPe as ChannelMessageNotificationSchema,
  Hin as ChannelPermissionNotificationSchema,
  ste as findChannelEntry,
  XPe as gateChannelServer,
  Ydt as getEffectiveChannelAllowlist,
  Pin as isChannelGateHardRevocation,
  Ebe as isChannelsPolicyBlocked,
  KPe as wrapChannelMessage,
};

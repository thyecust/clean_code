// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 74 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isClaudeAISubscriber, hasProfileScope, getOauthAccountInfo, H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { isEssentialTrafficOnly } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { getAPIProvider } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isPolicyAllowed } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { isCrossSessionMessagingEnabled } from "./chunk-rfb3s38d.js";
function hasCloudPeerAccess() {
  if (!isCrossSessionMessagingEnabled()) return !1;
  if (getAPIProvider() !== "firstParty" || isEssentialTrafficOnly() || !isPolicyAllowed("allow_remote_sessions")) return !1;
  if (!isClaudeAISubscriber() || !o()) return !1;
  return (
    Boolean(a.CLAUDE_CODE_HARBOR_KITE_CLOUD) || H("tengu_harbor_kite_cloud", !1)
  );
}
function o() {
  return (
    Boolean(a.CLAUDE_CODE_ORGANIZATION_UUID) ||
    Boolean(getOauthAccountInfo()?.organizationUuid) ||
    hasProfileScope()
  );
}
export { hasCloudPeerAccess };

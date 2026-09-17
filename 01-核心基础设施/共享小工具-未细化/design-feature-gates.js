// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isEssentialTrafficOnly } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { isFirstPartyProvider } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isPolicyAllowed } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
var e = "tengu_omelette_fouet";
function isDesignSyncEnabled() {
  if (!isPolicyAllowed("allow_design_sync")) return !1;
  if (isEssentialTrafficOnly()) return !1;
  if (!isFirstPartyProvider()) return !1;
  return H(e, !1);
}
var r = "tengu_omelette_grant_watch";
function isDesignGrantWatchEnabled() {
  return H(r, !1);
}
export { isDesignSyncEnabled, isDesignGrantWatchEnabled };

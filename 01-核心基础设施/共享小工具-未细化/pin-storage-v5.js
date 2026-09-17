// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isHoverRestEnabled } from "./chunk-h62vxw7j.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { adoptStorageV5EnvPin, recordHoverRestDecision, tryCreateV5Backend } from "./storage-v5-env-pin.js";
function pinStorageV5(e) {
  if (
    (recordHoverRestDecision(a.CLAUDE_CODE_HOVER_REST ?? getFeatureValue_CACHED_MAY_BE_STALE("tengu_hover_rest", !1)), e === void 0)
  )
    return isHoverRestEnabled() ? tryCreateV5Backend() : void 0;
  return adoptStorageV5EnvPin(e);
}
export { pinStorageV5 };

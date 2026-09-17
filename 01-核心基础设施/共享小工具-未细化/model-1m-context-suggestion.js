// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isOpus1mContextAvailable, isSonnet1mContextAvailable, getUserSpecifiedModelSetting, getDefaultOpusModel, getDefaultSonnetModel, modelHasNative1MContext } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
function n() {
  let e = getUserSpecifiedModelSetting();
  if (e === "opus" && isOpus1mContextAvailable() && !modelHasNative1MContext(getDefaultOpusModel()))
    return { alias: "opus[1m]", name: "Opus 1M", multiplier: 5 };
  else if (e === "sonnet" && isSonnet1mContextAvailable() && !modelHasNative1MContext(getDefaultSonnetModel()))
    return { alias: "sonnet[1m]", name: "Sonnet 1M", multiplier: 5 };
  return null;
}
function get1MContextSuggestion(e) {
  let t = n();
  if (!t) return null;
  switch (e) {
    case "warning":
      return `/model ${t.alias}`;
    case "tip":
      return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
    default:
      return null;
  }
}
export { get1MContextSuggestion };

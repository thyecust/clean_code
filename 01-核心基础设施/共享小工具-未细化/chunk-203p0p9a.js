// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getOauthConfig as Vt } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { M } from "./chunk-h62vxw7j.js";
import { getClaudeAIOAuthTokens as Yt, getClaudeAIOAuthTokensAsync as Qi, isClaudeAISubscriber as gt, isClaudeAISubscriberAsync as jse } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isFirstPartyProvider as In } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { hostname as n } from "os";
function getBridgeTokenOverride() {
  return;
}
function getBridgeBaseUrlOverride() {
  return;
}
function getBridgeAccessToken() {
  let e = getBridgeTokenOverride();
  if (e !== void 0) return e;
  if (!In() || !gt()) return;
  return Yt()?.accessToken;
}
async function getBridgeAccessTokenAsync(e) {
  if (!(M() && e !== void 0)) return getBridgeAccessToken();
  let r = getBridgeTokenOverride();
  if (r !== void 0) return r;
  if (!In() || !(await jse(e))) return;
  return (await Qi(e))?.accessToken;
}
function getBridgeBaseUrl() {
  return getBridgeBaseUrlOverride() ?? Vt().BASE_API_URL;
}
function getBridgeSessionNamePrefix() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return t(e) || "remote-control";
}
function t(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
export { getBridgeTokenOverride, getBridgeBaseUrlOverride, getBridgeAccessToken, getBridgeAccessTokenAsync, getBridgeBaseUrl, getBridgeSessionNamePrefix };

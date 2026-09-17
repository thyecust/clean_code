// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { getOauthConfig } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { isHoverRestEnabled } from "../核心工具-路径与平台/chunk-h62vxw7j.js";
import { jsonStringify } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeAIOAuthTokens, getClaudeAIOAuthTokensAsync, checkAndRefreshOAuthTokenIfNeeded } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { oL } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { redactSecrets } from "../核心工具-日志与脱敏/redact-secrets.js";
var p =
  " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";
class i extends Error {
  status;
  constructor(t, e) {
    super(e);
    ((this.name = "SelfHostedRunnerApiError"), (this.status = t));
  }
}
var DEFAULT_HEALTH_PORT = 8080;
function c() {
  let { getAPIProvider: t } = import.meta.require("../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js");
  if (t() !== "firstParty")
    throw new i(
      403,
      "Self-hosted runner management is only available on the first-party Anthropic API provider.",
    );
}
function resolveApiBaseUrl() {
  let t = a.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (t) return t;
  return getOauthConfig().BASE_API_URL;
}
function getClaudeAiOrigin() {
  return getOauthConfig().CLAUDE_AI_ORIGIN;
}
async function m(t) {
  (c(), await checkAndRefreshOAuthTokenIfNeeded({ credentials: t }).catch(() => {}));
  let e = isHoverRestEnabled() && t !== void 0 ? (await getClaudeAIOAuthTokensAsync(t))?.accessToken : getClaudeAIOAuthTokens()?.accessToken;
  if (!e)
    throw new i(
      401,
      "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)",
    );
  return e;
}
function buildUiEquivalentPath(t) {
  return { ui: t };
}
async function requestSelfHostedRunnerApi(t, e, o, s, l) {
  c();
  let d = await m(l),
    n = await at
      .request({
        method: t,
        url: `${resolveApiBaseUrl()}${e}`,
        data: o,
        headers: {
          Authorization: `Bearer ${d}`,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        timeout: 20000,
        signal: s,
        validateStatus: (r) => r < 500,
      })
      .catch((r) => {
        if (at.isAxiosError(r) && !at.isCancel(r) && r.response === void 0)
          throw new i(0, `${t} ${e}: ${r.message}`);
        throw r;
      });
  if (n.status >= 400) {
    let r = n.data?.error?.message ?? jsonStringify(n.data),
      u = `HTTP ${n.status} ${t} ${e}: ${r}`;
    if ([401, 403, 404, 409, 429].includes(n.status)) {
      let f = n.status === 401 || n.status === 403 ? p : "";
      throw new i(n.status, u + f);
    }
    throw Error(u);
  }
  return n.data;
}
function makeToolResultBlock(t, e) {
  return { tool_use_id: t, type: "tool_result", content: redactSecrets(jsonStringify(e)) };
}
function formatToolUseInput(t) {
  let e = oL(t);
  if (e !== null) return e;
  return Object.entries(t)
    .filter(([, o]) => o !== void 0)
    .map(([o, s]) => `${o}=${typeof s === "string" ? s : jsonStringify(s)}`)
    .join(" ");
}
export { DEFAULT_HEALTH_PORT, resolveApiBaseUrl, getClaudeAiOrigin, buildUiEquivalentPath, requestSelfHostedRunnerApi, makeToolResultBlock, formatToolUseInput };

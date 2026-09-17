// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { isEssentialTrafficOnly } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { getClaudeAIOAuthTokenOriginAsync, getStoredOauthAccountInfo } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { isPolicyAllowed } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
function compareAccountUuids({ storedAccountUuid: t, hostAccountUuid: e }) {
  if (!e)
    return t
      ? { status: "resolved", accountUuid: t, source: "stored" }
      : { status: "missing" };
  if (!t) return { status: "resolved", accountUuid: e, source: "env" };
  return t.trim().toLowerCase() === e.toLowerCase()
    ? { status: "resolved", accountUuid: t, source: "env" }
    : { status: "mismatch" };
}
async function getHostAccountUuidFromEnv(t) {
  let e = Xn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await getClaudeAIOAuthTokenOriginAsync(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function resolveAccountIdentity(t) {
  let e;
  try {
    e = getStoredOauthAccountInfo()?.accountUuid;
  } catch {
    e = void 0;
  }
  return compareAccountUuids({ storedAccountUuid: e, hostAccountUuid: await getHostAccountUuidFromEnv(t) });
}
function isEgressAllowed() {
  return r() === void 0;
}
function r() {
  if (isEssentialTrafficOnly() || getAPIProvider() !== "firstParty") return "egress";
  return isPolicyAllowed("allow_remote_sessions") ? void 0 : "policy_org";
}
export { compareAccountUuids, getHostAccountUuidFromEnv, resolveAccountIdentity, isEgressAllowed };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { St } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { $T, mh } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Pe } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { Mt } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
function fan({ storedAccountUuid: t, hostAccountUuid: e }) {
  if (!e)
    return t
      ? { status: "resolved", accountUuid: t, source: "stored" }
      : { status: "missing" };
  if (!t) return { status: "resolved", accountUuid: e, source: "env" };
  return t.trim().toLowerCase() === e.toLowerCase()
    ? { status: "resolved", accountUuid: t, source: "env" }
    : { status: "mismatch" };
}
async function man(t) {
  let e = Xn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await $T(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function cte(t) {
  let e;
  try {
    e = mh()?.accountUuid;
  } catch {
    e = void 0;
  }
  return fan({ storedAccountUuid: e, hostAccountUuid: await man(t) });
}
function O7() {
  return r() === void 0;
}
function r() {
  if (St() || Pe() !== "firstParty") return "egress";
  return Mt("allow_remote_sessions") ? void 0 : "policy_org";
}
export { fan, man, cte, O7 };

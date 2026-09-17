// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { parsePluginIdIgnoringReservedMarketplace } from "./chunk-33bdfgmx.js";
import { s, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var l = createLazyValue(() => v(c({ marketplace: s(), plugin: s() })));
function getChannelAllowlist() {
  let e = H("tengu_harbor_ledger", []),
    n = l().safeParse(e);
  return n.success ? n.data : [];
}
function isChannelsEnabled() {
  return H("tengu_harbor", !1);
}
function isChannelAllowlisted(e) {
  if (!e) return !1;
  let { name: n, marketplace: t } = parsePluginIdIgnoringReservedMarketplace(e);
  if (!t) return !1;
  return getChannelAllowlist().some((r) => r.plugin === n && r.marketplace === t);
}
export { getChannelAllowlist, isChannelsEnabled, isChannelAllowlisted };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "./lazy-value.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ht } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { s, O, v, c, it } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var xce = createLazyValue(() => it({ name: s().optional() })),
  g = createLazyValue(() =>
    c({
      results: v(xce()),
      opt_in_required: O().optional(),
      message: s().nullish(),
    }),
  );
function C7(e) {
  return !Array.isArray(e) && e.opt_in_required === !0;
}
class Hce extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError";
  }
}
var p = 15000,
  C = "/api/oauth/organizations/:orgUUID/mcp/connectors/search",
  _ = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest",
  S = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function d(e, r, a, t) {
  let o = await ht.post(e, r, {
    auth: "teleport-org",
    timeout: p,
    signal: a,
    credentials: t,
  });
  if (!o.ok)
    throw Error(
      o.reason === "no-auth"
        ? "Not authenticated with a claude.ai account."
        : `connector route unavailable: ${o.reason}`,
    );
  if (o.status >= 400) {
    let u = c({ error: c({ type: s(), message: s() }) }).safeParse(o.data);
    throw Error(
      u.success
        ? `connector route ${o.status} ${u.data.error.type}: ${u.data.error.message}`
        : `connector route ${o.status}`,
    );
  }
  let i = g().safeParse(o.data);
  if (!i.success) throw Error("malformed connector response");
  if (i.data.opt_in_required)
    return {
      opt_in_required: !0,
      message:
        i.data.message ??
        "Enable connector suggestions in your Claude settings to use this.",
    };
  return i.data.results;
}
async function h6n(e, r, a) {
  let t = await d(C, { keywords: e, include_custom: !0 }, r, a);
  if (!C7(t)) logFeatureOk("connector_suggest_search");
  return t;
}
async function _6n(e, r, a) {
  let t = await d(_, { uuids: e }, r, a);
  if (!C7(t)) logFeatureOk("connector_suggest_lookup");
  return t;
}
function hdt(e, r) {
  let a = new Set();
  for (let t of r) {
    if (t.type === "disabled") continue;
    let o = t.config,
      i = "headers" in o ? o.headers?.["X-MCP-Server-ID"] : void 0;
    if (i) a.add(i);
  }
  return e.map((t) => {
    let o =
      typeof t.installedServerId === "string" ? t.installedServerId : void 0;
    return { ...t, enabledInChat: o !== void 0 && a.has(o) };
  });
}
async function y6n(e, r) {
  let a = await d(S, {}, e, r);
  if (!C7(a)) logFeatureOk("connector_suggest_list");
  return a;
}
function pbe(e, r) {
  (n(`[connector-suggest] ${e} failed: ${l(r)}`, { level: "error" }),
    logFeatureBad(
      e === "search"
        ? "connector_suggest_search"
        : e === "lookup"
          ? "connector_suggest_lookup"
          : "connector_suggest_list",
      "fetch_failed",
    ));
}
export { xce, C7, Hce, h6n, _6n, hdt, y6n, pbe };

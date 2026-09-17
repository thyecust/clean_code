// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 82 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ve } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { getConnectorSchema, isOptInRequired, ConnectorRegistryUnavailableError, markConnectorsEnabledInChat, listConnectors, logConnectorSuggestFailure } from "./connector-registry-api.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { LIST_CONNECTORS_TOOL_NAME, DESCRIPTION, PROMPT } from "./chunk-9g3yj4km.js";
import { isFirstPartyRemoteSession } from "../云会话-Teleport/first-party-remote-session.js";
import { s, v, c, Qe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var l = createLazyValue(() =>
    Qe({
      keywords: v(s().min(1).max(64))
        .max(8)
        .optional()
        .describe("Optional filter; omit to list everything."),
    }),
  ),
  p = createLazyValue(() =>
    c({
      connectors: v(getConnectorSchema()),
      opt_in_required: k(!0).optional(),
      message: s().optional(),
    }),
  );
function i(e, t) {
  let r = e.toLowerCase();
  return t.some((n) => r.includes(n.toLowerCase()));
}
function y(e, t) {
  if (!t?.length) return e;
  return e.filter((r) => {
    if (typeof r.name === "string" && i(r.name, t)) return !0;
    let n = r.description;
    return typeof n === "string" && i(n, t);
  });
}
var ListConnectorsTool = buildTool({
  name: LIST_CONNECTORS_TOOL_NAME,
  searchHint: "list the user's installed MCP connectors",
  maxResultSizeChars: 300000,
  persistenceThresholdCeiling: 300000,
  shouldDefer: !0,
  get inputSchema() {
    return l();
  },
  get outputSchema() {
    return p();
  },
  isEnabled: isFirstPartyRemoteSession,
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  async description() {
    return DESCRIPTION;
  },
  async prompt() {
    return PROMPT;
  },
  create({ credentials: e, mcpClients: t }) {
    return {
      async call(r, { signal: n }) {
        try {
          let o = await listConnectors(n, e);
          if (isOptInRequired(o)) return { data: { connectors: [], ...o } };
          let a = t(),
            u = markConnectorsEnabledInChat(o, a);
          return { data: { connectors: y(u, r.keywords) } };
        } catch (o) {
          if (n.aborted) throw new Ve();
          throw (
            logConnectorSuggestFailure("list", o),
            new ConnectorRegistryUnavailableError(
              "Connector registry is unavailable right now; please try again.",
            )
          );
        }
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: jsonStringify(e.opt_in_required ? e : e.connectors),
    };
  },
  renderToolUseMessage(e) {
    return (e.keywords ?? []).join(", ");
  },
});
export { ListConnectorsTool };

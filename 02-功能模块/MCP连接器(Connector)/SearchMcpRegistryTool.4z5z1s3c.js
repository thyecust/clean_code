// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 82 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ve } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { getConnectorSchema, isOptInRequired, ConnectorRegistryUnavailableError, searchConnectors, markConnectorsEnabledInChat, logConnectorSuggestFailure } from "../../01-核心基础设施/共享小工具-未细化/connector-registry-api.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { SEARCH_MCP_REGISTRY_TOOL_NAME, DESCRIPTION, PROMPT } from "../../01-核心基础设施/共享小工具-未细化/chunk-p2wzfbaj.js";
import { isFirstPartyRemoteSession } from "../../01-核心基础设施/共享小工具-未细化/first-party-remote-session.js";
import { s, v, c, Qe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var i = createLazyValue(() =>
    Qe({
      keywords: v(s().min(1).max(64))
        .min(1)
        .max(8)
        .describe(
          "Keyword phrases describing the user's intent or a named product.",
        ),
    }),
  ),
  u = createLazyValue(() =>
    c({
      results: v(getConnectorSchema()),
      opt_in_required: k(!0).optional(),
      message: s().optional(),
    }),
  ),
  SearchMcpRegistryTool = buildTool({
    name: SEARCH_MCP_REGISTRY_TOOL_NAME,
    searchHint: "discover MCP connectors by keyword",
    maxResultSizeChars: 50000,
    shouldDefer: !0,
    get inputSchema() {
      return i();
    },
    get outputSchema() {
      return u();
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
    create({ credentials: e, mcpClients: r }) {
      return {
        async call(n, { signal: o }) {
          try {
            let t = await searchConnectors(n.keywords, o, e);
            if (isOptInRequired(t)) return { data: { results: [], ...t } };
            let a = r();
            return { data: { results: markConnectorsEnabledInChat(t, a) } };
          } catch (t) {
            if (o.aborted) throw new Ve();
            throw (
              logConnectorSuggestFailure("search", t),
              new ConnectorRegistryUnavailableError(
                "Connector registry is unavailable right now; please try again.",
              )
            );
          }
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      return {
        tool_use_id: r,
        type: "tool_result",
        content: b(e.opt_in_required ? e : e.results),
      };
    },
    renderToolUseMessage(e) {
      return (e.keywords ?? []).join(", ");
    },
  });
export { SearchMcpRegistryTool };

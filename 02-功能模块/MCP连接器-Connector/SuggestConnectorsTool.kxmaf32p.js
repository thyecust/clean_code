// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 81 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ve } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { getConnectorSchema, isOptInRequired, ConnectorRegistryUnavailableError, lookupConnectors, logConnectorSuggestFailure } from "../../01-核心基础设施/共享小工具-未细化/connector-registry-api.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { SUGGEST_CONNECTORS_TOOL_NAME, DESCRIPTION, PROMPT } from "../../01-核心基础设施/共享小工具-未细化/chunk-0mrh424x.js";
import { isFirstPartyRemoteSession } from "../../01-核心基础设施/共享小工具-未细化/first-party-remote-session.js";
import { s, v, c, Qe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var n = createLazyValue(() =>
    Qe({
      uuids: v(s().min(1).max(64))
        .min(1)
        .max(32)
        .describe("directoryUuid or server_id values to resolve."),
    }),
  ),
  a = createLazyValue(() =>
    c({
      connectors: v(getConnectorSchema()),
      opt_in_required: k(!0).optional(),
      message: s().optional(),
    }),
  ),
  SuggestConnectorsTool = buildTool({
    name: SUGGEST_CONNECTORS_TOOL_NAME,
    searchHint: "resolve MCP connector payloads by directoryUuid",
    maxResultSizeChars: 50000,
    shouldDefer: !0,
    get inputSchema() {
      return n();
    },
    get outputSchema() {
      return a();
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
    create({ credentials: e }) {
      return {
        async call(r, { signal: o }) {
          try {
            let t = await lookupConnectors(r.uuids, o, e);
            if (isOptInRequired(t)) return { data: { connectors: [], ...t } };
            return { data: { connectors: t } };
          } catch (t) {
            if (o.aborted) throw new Ve();
            throw (
              logConnectorSuggestFailure("lookup", t),
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
        content: jsonStringify(e.opt_in_required ? e : e.connectors),
      };
    },
    renderToolUseMessage(e) {
      return pluralize((e.uuids ?? []).length, "uuid");
    },
  });
export { SuggestConnectorsTool };

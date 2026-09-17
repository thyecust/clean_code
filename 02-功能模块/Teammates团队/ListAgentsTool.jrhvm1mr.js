// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 89 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { Yb } from "./chunk-sr4920wy.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { $i, jQn, cbn } from "./chunk-t899nada.js";
import { s, c, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var h = 1e4,
  d = createLazyValue(() =>
    Qe({
      channel: s()
        .max(256)
        .optional()
        .describe("Not available in this build; leave unset."),
      q: s()
        .max(256)
        .optional()
        .describe("Not available in this build; leave unset."),
    }),
  ),
  S = createLazyValue(() =>
    c({ listing: s().describe("Formatted list of reachable agents") }),
  ),
  ListAgentsTool = buildTool({
    name: $i,
    aliases: [jQn],
    searchHint: "list agents you can SendMessage to",
    maxResultSizeChars: h,
    toAutoClassifierInput() {
      return "list agents";
    },
    async description() {
      return cbn();
    },
    userFacingName() {
      return "ListAgents";
    },
    isEnabled() {
      return isCrossSessionMessagingEnabled();
    },
    get inputSchema() {
      return d();
    },
    get outputSchema() {
      return S();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async validateInput() {
      return { result: !0 };
    },
    async prompt() {
      return cbn();
    },
    renderToolUseMessage() {
      return null;
    },
    async call(t, e) {
      let {
          listAllPeers: r,
          formatForModel: a,
          buildSubagentExtras: i,
        } = import.meta.require("../../01-核心基础设施/共享小工具-未细化/buildSubagentExtras.gbrpz8cj.js"),
        o = t.channel?.trim() || void 0,
        l = t.q?.trim() || void 0,
        [n, u] = await Promise.all([
          r(
            e.session,
            { channel: o, q: l, storageV5: e.storageV5 },
            e.credentials,
          ),
          i(e, Yb(e)),
        ]);
      return { data: { listing: a(n.peers, u, n) } };
    },
    mapToolResultToToolResultBlockParam(t, e) {
      return { tool_use_id: e, type: "tool_result", content: t.listing };
    },
  });
export { ListAgentsTool };

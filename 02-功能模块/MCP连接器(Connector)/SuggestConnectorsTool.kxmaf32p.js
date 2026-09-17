// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 81 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ve } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { xce, C7, Hce, _6n, pbe } from "../../01-核心基础设施/共享小工具-未细化/chunk-yjnahe9e.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { SUGGEST_CONNECTORS_TOOL_NAME as wun, DESCRIPTION as Tun, PROMPT as Eun } from "../../01-核心基础设施/共享小工具-未细化/chunk-0mrh424x.js";
import { G7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-t0m264jc.js";
import { s, v, c, Qe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var n = m(() =>
    Qe({
      uuids: v(s().min(1).max(64))
        .min(1)
        .max(32)
        .describe("directoryUuid or server_id values to resolve."),
    }),
  ),
  a = m(() =>
    c({
      connectors: v(xce()),
      opt_in_required: k(!0).optional(),
      message: s().optional(),
    }),
  ),
  g = Tt({
    name: wun,
    searchHint: "resolve MCP connector payloads by directoryUuid",
    maxResultSizeChars: 50000,
    shouldDefer: !0,
    get inputSchema() {
      return n();
    },
    get outputSchema() {
      return a();
    },
    isEnabled: G7,
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async description() {
      return Tun;
    },
    async prompt() {
      return Eun;
    },
    create({ credentials: e }) {
      return {
        async call(r, { signal: o }) {
          try {
            let t = await _6n(r.uuids, o, e);
            if (C7(t)) return { data: { connectors: [], ...t } };
            return { data: { connectors: t } };
          } catch (t) {
            if (o.aborted) throw new Ve();
            throw (
              pbe("lookup", t),
              new Hce(
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
        content: b(e.opt_in_required ? e : e.connectors),
      };
    },
    renderToolUseMessage(e) {
      return x((e.uuids ?? []).length, "uuid");
    },
  });
export { g as SuggestConnectorsTool };

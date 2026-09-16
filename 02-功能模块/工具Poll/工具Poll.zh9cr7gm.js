// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 83 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { tYt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { y } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { tm, WNe } from "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import { _G, m1e, ZQn, Tbn, Rj, rCe, ofe, oCe, h1e } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import { s, T, v, c, Qe, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var d = m(() => Qe({})),
  f = m(() =>
    c({
      content: s().describe(`Rendered event envelopes, or "${m1e}"`),
      eventCount: T()
        .int()
        .describe("Number of events delivered in this result"),
      remainingWakeCount: T()
        .int()
        .describe(
          "Wake events still queued after this chunk; they follow in the next delivery",
        ),
      provenance: v(
        c({
          authority: X(Tbn),
          senderId: s().optional(),
          senderText: s().optional(),
        }).nullable(),
      ).optional(),
    }),
  ),
  k = Tt({
    name: _G,
    searchHint: "wait for and receive queued harness events",
    maxResultSizeChars: 1e5,
    skipAggregateToolResultBudget: !0,
    get inputSchema() {
      return d();
    },
    get outputSchema() {
      return f();
    },
    isEnabled() {
      return Rj();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async description() {
      return "Wait for pending harness events";
    },
    async prompt() {
      return ZQn;
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return { tool_use_id: t, type: "tool_result", content: e.content };
    },
    renderToolUseMessage() {
      return "";
    },
    extractSearchText() {
      return "";
    },
    create({ agentId: e, messageQueue: t, toolState: o }) {
      return {
        async call(i, { signal: n }) {
          if (e !== void 0)
            throw new R("Poll is available on the main thread only");
          let a = t;
          if (!a.tryBeginPollCall())
            return {
              data: { content: m1e, eventCount: 0, remainingWakeCount: 0 },
            };
          try {
            let u = tYt() === "evals" ? h1e({ toolState: o }) : null;
            return await g(a, n, u);
          } finally {
            a.endPollCall();
          }
        },
      };
    },
  });
async function g(e, t, o) {
  let i = { data: { content: m1e, eventCount: 0, remainingWakeCount: 0 } };
  for (;;) {
    if (t.aborted) return i;
    let { commands: n, remainingWakeCount: a } = e.drainPollEventChunk();
    if (n.length > 0) {
      let u = n.map(rCe);
      return (
        y("poll_event_delivery"),
        WNe(n),
        oCe(n),
        {
          data: {
            content: ofe(u, a),
            eventCount: n.length,
            remainingWakeCount: a,
            provenance: n.map((r) => r.pollEvent?.provenance ?? null),
          },
        }
      );
    }
    if (e.peek(tm) !== void 0) return i;
    if (o !== null && o.outstanding() === 0) return i;
    await new Promise((u) => {
      function r() {
        (l(), p?.(), t.removeEventListener("abort", r), u());
      }
      let l = e.subscribe(r),
        p = o?.onOutstandingChange(r);
      if (
        (t.addEventListener("abort", r),
        t.aborted ||
          e.peek(tm) !== void 0 ||
          (o !== null && o.outstanding() === 0))
      )
        r();
    });
  }
}
export { k as PollTool };

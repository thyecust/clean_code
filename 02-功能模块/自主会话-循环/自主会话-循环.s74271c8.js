// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 201 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { J$e } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { Nhn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ab } from "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import { gdt, i1t, Osn, Dsn, Lsn, a1t } from "../工具EndConversation/工具EndConversation.409rx3vp.js";
import { s, O, c, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
function p(e) {
  let a = !1;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "assistant") {
      a = !0;
      let t = o.message.content;
      if (
        Array.isArray(t) &&
        t.some((u) => u.type === "tool_use" && u.name === ab)
      )
        return !0;
      continue;
    }
    if (o?.type === "user") {
      let t = o.message.content;
      if (!(
        Array.isArray(t) &&
        t.length > 0 &&
        t.every((d) => d.type === "tool_result")
      ))
        return !1;
      if (a) return !1;
    }
  }
  return !1;
}
var f = m(() => Qe({})),
  g = m(() => c({ ended: O(), message: s() })),
  D = Tt({
    name: ab,
    shouldDefer: !0,
    searchHint:
      "end the conversation \u2014 only for sustained user abuse, or when the user explicitly asks to see it demonstrated",
    maxResultSizeChars: 1e4,
    async description() {
      return gdt;
    },
    async prompt() {
      return gdt;
    },
    get inputSchema() {
      return f();
    },
    get outputSchema() {
      return g();
    },
    userFacingName() {
      return ab;
    },
    isEnabled() {
      let e = J$e();
      return e !== void 0 && a1t(e);
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !1;
    },
    toAutoClassifierInput() {
      return "";
    },
    renderToolUseMessage() {
      return null;
    },
    mapToolResultToToolResultBlockParam(e, a) {
      return { tool_use_id: a, type: "tool_result", content: e.message };
    },
    create(e) {
      return {
        async call(a) {
          let r = e.isNonInteractiveSession,
            o = e.agentId ? "fork" : r ? "print" : "repl";
          if (e.agentId)
            return (
              i("tengu_end_conversation_tool_call", {
                surface: S(o),
                is_non_interactive: r,
                phase: S("reflect"),
              }),
              { data: { ended: !1, message: Osn } }
            );
          if (!p(e.messages()))
            return (
              i("tengu_end_conversation_tool_call", {
                surface: S(o),
                is_non_interactive: r,
                phase: S("reflect"),
              }),
              { data: { ended: !1, message: Lsn } }
            );
          i("tengu_end_conversation_tool_call", {
            surface: S(o),
            is_non_interactive: r,
            phase: S("end"),
          });
          try {
            await Nhn(K(), e.storageV5);
          } catch (t) {
            n(`[EndConversation] marker write failed: ${l(t)}`);
          }
          if ((e.endTurn("end_conversation"), r)) {
            let { gracefulShutdown: t } = await import("../../01-核心基础设施/核心工具-进程与信号/flushAnalyticsSinks.tbwzvw9n.js");
            return (
              t(1, "other", { finalMessage: Dsn }),
              { data: { ended: !0, message: i1t } }
            );
          }
          return (e.markEndedByModel(), { data: { ended: !0, message: i1t } });
        },
      };
    },
  });
export { D as EndConversationTool };

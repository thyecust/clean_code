// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 257 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { ExpandedTranscriptProvider, OverflowHint, ToolErrorMessage } from "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import { PMe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { bf, VL } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/structured-diff.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/verb-conjugation.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../工具Bash-Shell/bash-output-view.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "./chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/private-host-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/model-1m-context-suggestion.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
var p = 3,
  f = "Initializing\u2026";
function renderToolResultMessage(s) {
  if ("status" in s && s.status === "forked")
    return e(ToolResultRow, {
      height: 1,
      children: e(t, {
        children: e(DotSeparatedList, {
          children: [s.background ? "Running in the background" : "Done"],
        }),
      }),
    });
  let l = ["Successfully loaded skill"];
  if ("allowedTools" in s && s.allowedTools && s.allowedTools.length > 0) {
    let n = s.allowedTools.length;
    l.push(`${n} ${pluralize(n, "tool")} allowed`);
  }
  if ("model" in s && s.model) l.push(s.model);
  return e(ToolResultRow, {
    height: 1,
    children: e(t, { children: e(DotSeparatedList, { children: l }) }),
  });
}
function renderToolUseProgressMessage(s, { tools: l, verbose: n }) {
  if (!s.length)
    return e(ToolResultRow, { height: 1, children: e(t, { dimColor: !0, children: f }) });
  let a = n ? s : s.slice(-p),
    g = s.length - a.length,
    { lookups: d, inProgressToolUseIDs: c } = PMe(s.map((i) => i.data));
  return e(ToolResultRow, {
    children: r(o, {
      flexDirection: "column",
      children: [
        e(ExpandedTranscriptProvider, {
          children: a.map((i) =>
            e(
              o,
              {
                height: 1,
                overflow: "hidden",
                children: e(VL, {
                  message: i.data.message,
                  lookups: d,
                  addMargin: !1,
                  tools: l,
                  commands: [],
                  verbose: n,
                  inProgressToolUseIDs: c,
                  progressMessagesForMessage: [],
                  shouldAnimate: !1,
                  shouldShowDot: !1,
                  style: "condensed",
                  isTranscriptMode: !1,
                  isStatic: !0,
                }),
              },
              i.uuid,
            ),
          ),
        }),
        e(OverflowHint, { count: g, unit: "tool use" }),
      ],
    }),
  });
}
function renderToolUseRejectedMessage(s, { progressMessagesForMessage: l, tools: n, verbose: a }) {
  return r(N, { children: [renderToolUseProgressMessage(l, { tools: n, verbose: a }), e(bf, {})] });
}
function renderToolUseErrorMessage(s, { progressMessagesForMessage: l, tools: n, verbose: a }) {
  return r(N, {
    children: [
      renderToolUseProgressMessage(l, { tools: n, verbose: a }),
      e(ToolErrorMessage, { result: s, verbose: a }),
    ],
  });
}
export {
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseProgressMessage,
  renderToolUseRejectedMessage,
};

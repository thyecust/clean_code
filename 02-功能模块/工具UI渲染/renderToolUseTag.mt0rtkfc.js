// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 253 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { l_ } from "../../01-核心基础设施/共享小工具-未细化/chunk-anjm5g41.js";
import { useKeybindingDisplayText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import { hye, _We } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s3mpt973.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-0mg59v9m.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import { BashToolOutputView } from "../工具Bash-Shell/bash-output-view.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "./chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-400h8hta.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/model-1m-context-suggestion.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pvfkaage.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import { s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function renderToolUseTag(l) {
  if (!l.task_id) return null;
  return r(t, { dimColor: !0, children: [" ", l.task_id] });
}
function renderToolUseProgressMessage(l) {
  let T = l.at(-1)?.data;
  return r(o, {
    flexDirection: "column",
    children: [
      T?.taskDescription && r(t, { children: ["\xA0\xA0", T.taskDescription] }),
      r(t, {
        children: [
          "\xA0\xA0\xA0\xA0\xA0Waiting for task",
          " ",
          e(t, {
            dimColor: !0,
            children: e(KeybindingHint, {
              chord: "escape",
              action: "give additional instructions",
              parens: !0,
              format: { keyCase: "lower" },
            }),
          }),
        ],
      }),
    ],
  });
}
var N = createLazyValue(() =>
  c({
    retrieval_status: s().optional(),
    task: c({
      task_type: s().optional(),
      status: s().optional(),
      description: s().optional(),
      output: s().optional(),
      error: s().optional(),
      prompt: s().optional(),
      result: s().optional(),
      harnessHead: s().optional(),
    })
      .nullable()
      .optional(),
  }),
);
function renderToolResultMessage(l, g, { verbose: T, theme: y }) {
  return e(O, { content: l, verbose: T, theme: y });
}
function O(V) {
  let b = _(15),
    { content: d, verbose: P, theme: C } = V,
    f = P === void 0 ? !1 : P,
    x = useKeybindingDisplayText("app:toggleTranscript", "Global", "ctrl+o"),
    R,
    u;
  if (b[0] !== d || b[1] !== x || b[2] !== C || b[3] !== f) {
    u = EARLY_RETURN_SENTINEL;
    bb0: {
      let S = N().safeParse(typeof d === "string" ? xt(d, !1) : d);
      if (!S.success) {
        let i;
        if (b[6] !== d || b[7] !== f)
          ((i =
            typeof d === "string"
              ? e(l_, { content: pt(d), verbose: f })
              : e(ToolResultRow, {
                  children: e(EmptyStateMessage, { children: "No task output available" }),
                })),
            (b[6] = d),
            (b[7] = f),
            (b[8] = i));
        else i = b[8];
        u = i;
        break bb0;
      }
      let h = S.data;
      if (!h.task) {
        let i;
        if (b[9] === MEMO_CACHE_SENTINEL)
          ((i = e(ToolResultRow, {
            children: e(EmptyStateMessage, { children: "No task output available" }),
          })),
            (b[9] = i));
        else i = b[9];
        u = i;
        break bb0;
      }
      let { task: a } = h;
      if (a.task_type === "local_bash") {
        let X = {
          stdout: a.output ?? "",
          stderr: "",
          isImage: !1,
          dangerouslyDisableSandbox: !0,
          returnCodeInterpretation: a.error,
        };
        u = e(BashToolOutputView, { content: X, verbose: f });
        break bb0;
      }
      if (a.task_type === "local_agent") {
        let Y = a.result
          ? ln(
              a.result,
              `
`,
            ) + 1
          : 0;
        if (h.retrieval_status === "success") {
          if (f) {
            u = r(o, {
              flexDirection: "column",
              children: [
                r(t, { children: [a.description, " (", Y, " lines)"] }),
                r(o, {
                  flexDirection: "column",
                  paddingLeft: 2,
                  marginTop: 1,
                  children: [
                    a.prompt && e(hye, { prompt: a.prompt, theme: C, dim: !0 }),
                    a.harnessHead &&
                      e(o, {
                        marginTop: 1,
                        children: e(t, {
                          dimColor: !0,
                          children: a.harnessHead,
                        }),
                      }),
                    a.result &&
                      e(o, {
                        marginTop: 1,
                        children: e(_We, {
                          content: [{ type: "text", text: a.result }],
                          theme: C,
                        }),
                      }),
                    a.error &&
                      r(o, {
                        flexDirection: "column",
                        marginTop: 1,
                        children: [
                          e(t, {
                            color: "error",
                            bold: !0,
                            children: "Error:",
                          }),
                          e(o, {
                            paddingLeft: 2,
                            children: e(t, {
                              color: "error",
                              children: a.error,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
            break bb0;
          }
          let i;
          if (b[10] !== x)
            ((i = e(ToolResultRow, {
              children: r(t, {
                dimColor: !0,
                children: ["Read output (", x, " to expand)"],
              }),
            })),
              (b[10] = x),
              (b[11] = i));
          else i = b[11];
          u = i;
          break bb0;
        }
        if (h.retrieval_status === "timeout" || a.status === "running") {
          let i;
          if (b[12] === MEMO_CACHE_SENTINEL)
            ((i = e(ToolResultRow, {
              children: e(t, {
                dimColor: !0,
                children: "Task is still running\u2026",
              }),
            })),
              (b[12] = i));
          else i = b[12];
          u = i;
          break bb0;
        }
        if (h.retrieval_status === "not_ready") {
          let i;
          if (b[13] === MEMO_CACHE_SENTINEL)
            ((i = e(ToolResultRow, {
              children: e(t, {
                dimColor: !0,
                children: "Task is still running\u2026",
              }),
            })),
              (b[13] = i));
          else i = b[13];
          u = i;
          break bb0;
        }
        let i;
        if (b[14] === MEMO_CACHE_SENTINEL)
          ((i = e(ToolResultRow, {
            children: e(t, { dimColor: !0, children: "Task not ready" }),
          })),
            (b[14] = i));
        else i = b[14];
        u = i;
        break bb0;
      }
      if (a.task_type === "remote_agent") {
        u = r(o, {
          flexDirection: "column",
          children: [
            r(t, {
              children: ["\xA0\xA0", a.description, " [", a.status, "]"],
            }),
            a.output &&
              f &&
              e(o, {
                paddingLeft: 4,
                marginTop: 1,
                children: e(t, { children: a.output }),
              }),
            !f &&
              a.output &&
              r(t, {
                dimColor: !0,
                children: ["     ", "(", x, " to expand)"],
              }),
          ],
        });
        break bb0;
      }
      R = r(o, {
        flexDirection: "column",
        children: [
          r(t, { children: ["\xA0\xA0", a.description, " [", a.status, "]"] }),
          a.output &&
            e(o, {
              paddingLeft: 4,
              children: e(t, { children: a.output.slice(0, 500) }),
            }),
        ],
      });
    }
    ((b[0] = d), (b[1] = x), (b[2] = C), (b[3] = f), (b[4] = R), (b[5] = u));
  } else ((R = b[4]), (u = b[5]));
  if (u !== EARLY_RETURN_SENTINEL) return u;
  return R;
}
export {
  renderToolResultMessage,
  renderToolUseProgressMessage,
  renderToolUseTag,
};

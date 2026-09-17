// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 257 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Xn, K, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { dt, ge, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { sortByModifiedDesc, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { o, t, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { setClipboard } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import {
  listGitWorktrees,
  isCustomTitleEnabled,
  getSessionIdFromLog,
  isLiteLog,
  loadFullLog,
  searchSessionsByCustomTitle,
  getLastSessionLog,
  loadAllProjectsMessageLogsProgressive,
  loadSameRepoMessageLogs,
  loadSameRepoMessageLogsProgressive,
  enrichLogs,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { useHasVirtualScrollViewport } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f4zey5rf.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../../01-核心基础设施/共享小工具-未细化/session-announcement-state.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-aeg1pn1f.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/structured-diff.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/verb-conjugation.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { rit, oit } from "../会话-历史-恢复/chunk-t3q91yqm.js";
import "../../03-入口与运行时/会话UI(REPL)/clawd-mascot.js";
import "../工具Bash-Shell/bash-output-view.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "../工具UI渲染/chunk-g4k5jjwt.js";
import { formatSessionLiveElsewhereMessage, getLiveSessionHolder } from "../../01-核心基础设施/共享小工具-未细化/session-live-elsewhere.js";
import "../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/private-host-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/managed-settings-status.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import "../../01-核心基础设施/共享小工具-未细化/model-1m-context-suggestion.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
F();
function q(s) {
  switch (s.resultType) {
    case "sessionNotFound":
      return `Session ${chalk.bold(s.arg)} was not found.`;
    case "multipleMatches":
      return `Found ${s.count} sessions matching ${chalk.bold(s.arg)}. Please use /resume to pick a specific session.`;
  }
}
function j(Oe) {
  let z = _(7),
    { message: W, args: X, onDone: Ve } = Oe;
  Un(Ve, 0);
  let U;
  if (z[0] !== X)
    ((U = r(t, { dimColor: !0, children: [figures.pointer, " /resume ", X] })),
      (z[0] = X),
      (z[1] = U));
  else U = z[1];
  let B;
  if (z[2] !== W)
    ((B = e(ToolResultRow, { children: e(t, { children: W }) })), (z[2] = W), (z[3] = B));
  else B = z[3];
  let oe;
  if (z[4] !== U || z[5] !== B)
    ((oe = r(o, { flexDirection: "column", children: [U, B] })),
      (z[4] = U),
      (z[5] = B),
      (z[6] = oe));
  else oe = z[6];
  return oe;
}
function te({ onDone: s, onResume: g }) {
  let [v, T] = d([]),
    [m, O] = d([]),
    [b, w] = d(!0),
    [M, a] = d(!1),
    [n, c] = d(!1),
    { rows: f } = useTerminalSize(),
    I = useHasVirtualScrollViewport(),
    { storageV5: P } = useStorageV5Context(),
    S = C(!1),
    D = C(!1),
    k = C(null),
    V = C(!1),
    A = C(0),
    x = re(
      async (u, i) => {
        (w(!0), (k.current = null));
        try {
          let R = u
            ? await loadAllProjectsMessageLogsProgressive(void 0, void 0, P)
            : await loadSameRepoMessageLogsProgressive(i, void 0, void 0, P);
          if (S.current) return;
          k.current = R;
          let p = filterResumableSessions(R.logs, K());
          ((A.current = p.length), T(p));
        } catch (R) {
          if (S.current) return;
          s("Failed to load conversations");
        } finally {
          w(!1);
        }
      },
      [s, P],
    );
  E(() => {
    async function u() {
      let i = await listGitWorktrees(he());
      if (S.current) return;
      (O(i), x(!1, i));
    }
    u();
  }, [x]);
  let H = re(
      (u) => {
        if (V.current) return;
        let i = k.current;
        if (!i || i.nextIndex >= i.allStatLogs.length) return;
        V.current = !0;
        let R = !1;
        enrichLogs(i.allStatLogs, i.nextIndex, u, P)
          .then((p) => {
            if (k.current !== i || S.current) return;
            i.nextIndex = p.nextIndex;
            let y = filterResumableSessions(p.logs, K());
            if (y.length > 0) {
              let Z = A.current;
              (sortByModifiedDesc(y).forEach((N, ee) => {
                N.value = Z + ee;
              }),
                T((N) => N.concat(y)),
                (A.current += y.length));
            } else if (i.nextIndex < i.allStatLogs.length) R = !0;
          })
          .finally(() => {
            if (((V.current = !1), R)) H(u);
          });
      },
      [P],
    ),
    Q = re(() => {
      let u = !n;
      (c(u), x(u, m));
    }, [n, x, m]);
  async function Y(u) {
    if (D.current) return;
    D.current = !0;
    let i = Xn(getSessionIdFromLog(u));
    if (!i) {
      s("Failed to resume conversation");
      return;
    }
    let R, p;
    try {
      if (((R = isLiteLog(u) ? await loadFullLog(u, { storageV5: P }) : u), S.current)) return;
      if (((p = await oit(R, n, m)), S.current)) return;
      if (p) {
        let y = await setClipboard(p);
        if (S.current) return;
        if (y) process.stdout.write(y);
      }
    } catch (y) {
      if (S.current) return;
      (logError(dt(ge(y), "resume command: handleSelect failed")),
        s("Failed to resume conversation"));
      return;
    }
    if (p) {
      let y = [
        "",
        "This conversation is from a different directory.",
        "",
        "To resume, run:",
        `  ${p}`,
        "",
        "(Command copied to clipboard)",
        "",
      ].join(`
`);
      s(y, { display: "user" });
      return;
    }
    (a(!0), g(i, R, "slash_command_picker"));
  }
  function J() {
    ((S.current = !0), s("Resume cancelled", { display: "system" }));
  }
  if (
    (useKeybinding("confirm:no", J, { context: "Confirmation", isActive: b && !M }),
    b || M)
  )
    return r(Qr, {
      color: "suggestion",
      children: [
        e(t, { bold: !0, color: "suggestion", children: "Resume session" }),
        e(o, {
          marginTop: 1,
          children: e(SpinnerMessageLine, {
            message: M
              ? "Resuming conversation\u2026"
              : "Loading conversations\u2026",
          }),
        }),
      ],
    });
  return e(rit, {
    logs: v,
    maxHeight: I ? Math.floor(f / 2) : f - 2,
    onCancel: J,
    onSelect: Y,
    onLogsChanged: () => x(n, m),
    onLoadMore: H,
    showAllProjects: n,
    onToggleAllProjects: Q,
  });
}
function filterResumableSessions(s, g) {
  return s.filter((v) => !v.isSidechain && getSessionIdFromLog(v) !== g);
}
var Fe = async (s, g, v) => {
  let T = async (a, n, c) => {
      let f = await getLiveSessionHolder(a);
      if (f) {
        s(formatSessionLiveElsewhereMessage({ sessionId: a, holder: f, canFork: !1 }), { display: "user" });
        return;
      }
      try {
        (await g.resume?.(a, n, c), s(void 0, { display: "skip" }));
      } catch (I) {
        (logError(dt(ge(I), "resume: context.resume failed")),
          s(`Failed to resume: ${l(I)}`));
      }
    },
    m = v?.trim();
  if (!m) return e(te, { onDone: s, onResume: T }, Date.now());
  let O = await listGitWorktrees(he()),
    b = await loadSameRepoMessageLogs(O, void 0, void 0, g.storageV5);
  if (b.length === 0)
    return e(j, {
      message: "No conversations found to resume.",
      args: m,
      onDone: () => s("No conversations found to resume."),
    });
  let w = Xn(m);
  if (w) {
    let a = b
      .filter((c) => getSessionIdFromLog(c) === w)
      .sort((c, f) => f.modified.getTime() - c.modified.getTime());
    if (a.length > 0) {
      let c = a[0],
        f = isLiteLog(c) ? await loadFullLog(c, { storageV5: g.storageV5 }) : c;
      return (T(w, f, "slash_command_session_id"), null);
    }
    let n = await getLastSessionLog(w, void 0, g.storageV5);
    if (n) return (T(w, n, "slash_command_session_id"), null);
  }
  if (isCustomTitleEnabled()) {
    let a = await searchSessionsByCustomTitle(m, { exact: !0 }, g.storageV5);
    if (a.length === 1) {
      let n = a[0],
        c = Xn(getSessionIdFromLog(n));
      if (c) {
        let f = isLiteLog(n) ? await loadFullLog(n, { storageV5: g.storageV5 }) : n;
        return (T(c, f, "slash_command_title"), null);
      }
    }
    if (a.length > 1) {
      let n = q({ resultType: "multipleMatches", arg: m, count: a.length });
      return e(j, { message: n, args: m, onDone: () => s(n) });
    }
  }
  let M = q({ resultType: "sessionNotFound", arg: m });
  return e(j, { message: M, args: m, onDone: () => s(M) });
};
export { Fe as call, filterResumableSessions };

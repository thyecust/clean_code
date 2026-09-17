// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 259 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jn, Ks } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { an } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/use-task-registry.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import "../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import { y6e } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/structured-diff.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/verb-conjugation.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../../01-核心基础设施/共享小工具-未细化/detail-dialog-keys.js";
import "../工具Bash-Shell/bash-output-view.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "../工具UI渲染/chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/private-host-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import { FocusableBox } from "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
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
import "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import "../Teammates团队/teammate-task-messages.js";
import { dn, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function wo(Qo) {
  return Qo.remoteBackgroundTasks;
}
function Ro() {}
function J(Oo) {
  let i = _(29),
    { onDone: q } = Oo,
    Po = useAppStateSelector(wo),
    [M, _o] = d(void 0),
    no;
  if (i[0] === MEMO_CACHE_SENTINEL) ((no = new Set()), (i[0] = no));
  else no = i[0];
  let [ro, io] = d(no),
    so;
  if (i[1] === MEMO_CACHE_SENTINEL) ((so = new Set()), (i[1] = so));
  else so = i[1];
  let [V, jo] = d(so),
    ao;
  if (i[2] !== V) ((ao = (Fo) => !V.has(Fo.id)), (i[2] = V), (i[3] = ao));
  else ao = i[3];
  let c = Po.filter(ao),
    [S, po] = d(null),
    mo;
  if (i[4] === MEMO_CACHE_SENTINEL) ((mo = Ks()), (i[4] = mo));
  else mo = i[4];
  let co = mo,
    A = C(!1),
    y = M !== void 0 && !c.some((Go) => Go.id === M),
    lo,
    uo;
  if (i[5] !== y)
    ((lo = () => {
      if (y) A.current = !0;
    }),
      (uo = [y]),
      (i[5] = y),
      (i[6] = lo),
      (i[7] = uo));
  else ((lo = i[6]), (uo = i[7]));
  dn(lo, uo);
  let fo;
  if (i[8] !== q)
    ((fo = () => q("Background dialog dismissed", { display: "skip" })),
      (i[8] = q),
      (i[9] = fo));
  else fo = i[9];
  let v = fo,
    k = function k(B) {
      if (B.key !== "x" || B.ctrl || B.meta || !co) {
        return;
      }
      if ((B.stopImmediatePropagation(), A.current || y)) {
        A.current = !1;
        return;
      }
      let u = M ?? c[0]?.id;
      let go = jn();
      if (u === void 0 || ro.has(u) || !go) {
        return;
      }
      (io((Ko) => new Set(Ko).add(u)),
        po(null),
        go
          .sendControlRequest({ subtype: "stop_task", task_id: u })
          .then(
            () => jo((qo) => new Set(qo).add(u)),
            (Mo) => po(`Couldn't stop it: ${an(l(Mo))}`),
          )
          .finally(() =>
            io((Uo) => {
              let yo = new Set(Uo);
              return (yo.delete(u), yo);
            }),
          ));
    };
  const Q = FocusableBox,
    W = de,
    Vo = "Background",
    $o = "Running in the cloud session",
    Ao = "background",
    Y = c.length > 0 && e(KeybindingHint, { chord: ["up", "down"], action: "navigate" }),
    Z = c.length > 0 && co && e(KeybindingHint, { chord: "x", action: "stop" });
  let ko;
  if (i[10] === MEMO_CACHE_SENTINEL)
    ((ko = e(KeybindingHint, { chord: "escape", action: "close" })), (i[10] = ko));
  else ko = i[10];
  let b;
  if (i[11] !== Y || i[12] !== Z)
    ((b = r(DotSeparatedList, { children: [Y, Z, ko] })),
      (i[11] = Y),
      (i[12] = Z),
      (i[13] = b));
  else b = i[13];
  const z =
    c.length === 0
      ? e(EmptyStateMessage, { children: "No tasks currently running" })
      : e(ve, {
          options: c.map((h) => ({
            value: h.id,
            label:
              (h.description || an(h.id)) +
              (ro.has(h.id) ? " \xB7 stopping\u2026" : ""),
            description: h.taskType?.replace(/^local_/, ""),
          })),
          onFocus: _o,
          onChange: Ro,
          onCancel: v,
          visibleOptionCount: 10,
          hideIndexes: !0,
        });
  let T;
  if (i[14] !== S)
    ((T = S !== null && e(t, { color: "error", children: S })),
      (i[14] = S),
      (i[15] = T));
  else T = i[15];
  let ho;
  if (i[16] === MEMO_CACHE_SENTINEL)
    ((ho = e(t, {
      dimColor: !0,
      wrap: "wrap-trim",
      children:
        "Each task's output reaches the transcript when it finishes; a per-task view isn't sent to this terminal.",
    })),
      (i[16] = ho));
  else ho = i[16];
  let E;
  if (i[17] !== T)
    ((E = r(o, { flexDirection: "column", children: [T, ho] })),
      (i[17] = T),
      (i[18] = E));
  else E = i[18];
  let I;
  if (i[19] !== W || i[20] !== v || i[21] !== b || i[22] !== z || i[23] !== E)
    ((I = r(W, {
      title: Vo,
      subtitle: $o,
      onCancel: v,
      color: Ao,
      inputGuide: b,
      children: [z, E],
    })),
      (i[19] = W),
      (i[20] = v),
      (i[21] = b),
      (i[22] = z),
      (i[23] = E),
      (i[24] = I));
  else I = i[24];
  let Co;
  if (i[25] !== Q || i[26] !== k || i[27] !== I)
    ((Co = e(Q, { onKeyDown: k, children: I })),
      (i[25] = Q),
      (i[26] = k),
      (i[27] = I),
      (i[28] = Co));
  else Co = i[28];
  return Co;
}
async function tt(f, g) {
  if (jn()) return e(J, { onDone: f });
  return e(y6e, {
    toolUseContext: g,
    onDone: f,
    promptVisibleBelow: g.isMidTurn === !0,
  });
}
export { tt as call };

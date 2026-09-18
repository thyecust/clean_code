// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 246 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text, useInterval } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindings } from "../键位绑定-Keybindings/keybinding-hooks.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/UI组件-TUI/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/核心工具-未归类/expanded-content-context.js";
import "../../01-核心基础设施/核心工具-未归类/queued-message-context.js";
import { ChecklistStepRow } from "../../03-入口与运行时/会话UI-REPL/remote-bootstrap-checklist.js";
import { createRemoteBootstrapState, formatBootstrapStepLabel, getChecklistPhase, buildChecklistStepDisplay, getChecklistHeaderLabel } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import "../../01-核心基础设施/UI组件-TUI/linkified-text.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { ActionKeybindingHint } from "../键位绑定-Keybindings/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import { d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function Y() {
  return Date.now();
}
function Z(ft) {
  return formatBootstrapStepLabel(ft, "new");
}
function j(K) {
  return e(ChecklistStepRow, { status: "pending", label: K }, K);
}
function CloudCreateChecklist(st) {
  let n = _(26),
    { state: a, cancelling: y, onCancel: x } = st,
    { columns: D } = useTerminalSize(),
    [N, mt] = d(Y),
    M;
  if (n[0] === MEMO_CACHE_SENTINEL) ((M = () => mt(Date.now())), (n[0] = M));
  else M = n[0];
  useInterval(M, 1000);
  let O;
  if (n[1] !== a) ((O = getChecklistPhase(a)), (n[1] = a), (n[2] = O));
  else O = n[2];
  let s = O === "created",
    z;
  if (n[3] !== x)
    ((z = { "app:interrupt": x, "app:exit": x }), (n[3] = x), (n[4] = z));
  else z = n[4];
  let ut = z;
  const R = !s;
  let E;
  if (n[5] !== R)
    ((E = { context: "Global", isActive: R }), (n[5] = R), (n[6] = E));
  else E = n[6];
  useKeybindings(ut, E);
  let H;
  if (n[7] === MEMO_CACHE_SENTINEL) ((H = createRemoteBootstrapState(0).steps.map(Z)), (n[7] = H));
  else H = n[7];
  let dt = H,
    g;
  if (n[8] !== a) ((g = getChecklistHeaderLabel(a)), (n[8] = a), (n[9] = g));
  else g = n[9];
  let k;
  if (n[10] !== g)
    ((k = e(Text, { bold: !0, children: g })), (n[10] = g), (n[11] = k));
  else k = n[11];
  let h;
  if (n[12] !== D || n[13] !== N || n[14] !== a)
    ((h = a.steps.map((I) =>
      e(T, { step: I, state: a, now: N, columns: D }, I.id),
    )),
      (n[12] = D),
      (n[13] = N),
      (n[14] = a),
      (n[15] = h));
  else h = n[15];
  let v;
  if (n[16] !== s) ((v = !s && dt.map(j)), (n[16] = s), (n[17] = v));
  else v = n[17];
  let S;
  if (n[18] !== y || n[19] !== s)
    ((S =
      !s &&
      e(Box, {
        marginTop: 1,
        children: e(Text, {
          dimColor: !0,
          children: r(DotSeparatedList, {
            children: [
              e(Text, {
                children: y
                  ? "Cancelling\u2026"
                  : "Typing is paused until the prompt opens",
              }),
              e(ActionKeybindingHint, {
                action: "app:interrupt",
                context: "Global",
                fallback: "ctrl+c",
                description: y ? "quit now" : "cancel",
              }),
            ],
          }),
        }),
      })),
      (n[18] = y),
      (n[19] = s),
      (n[20] = S));
  else S = n[20];
  let J;
  if (n[21] !== v || n[22] !== S || n[23] !== k || n[24] !== h)
    ((J = r(Box, {
      flexDirection: "column",
      marginTop: 1,
      children: [k, h, v, S],
    })),
      (n[21] = v),
      (n[22] = S),
      (n[23] = k),
      (n[24] = h),
      (n[25] = J));
  else J = n[25];
  return J;
}
function T(Ct) {
  let Q = _(10),
    { step: u, state: B, now: G, columns: P } = Ct,
    U;
  if (Q[0] !== G || Q[1] !== B || Q[2] !== u)
    ((U = buildChecklistStepDisplay(u, B, G)), (Q[0] = G), (Q[1] = B), (Q[2] = u), (Q[3] = U));
  else U = Q[3];
  let i = U,
    W;
  if (
    Q[4] !== P ||
    Q[5] !== u.status ||
    Q[6] !== i.annotation ||
    Q[7] !== i.detail ||
    Q[8] !== i.label
  )
    ((W = e(ChecklistStepRow, {
      status: u.status,
      label: i.label,
      annotation: i.annotation,
      detail: i.detail,
      columns: P,
      detailOverflow: "wrap",
    })),
      (Q[4] = P),
      (Q[5] = u.status),
      (Q[6] = i.annotation),
      (Q[7] = i.detail),
      (Q[8] = i.label),
      (Q[9] = W));
  else W = Q[9];
  return W;
}
export { CloudCreateChecklist };

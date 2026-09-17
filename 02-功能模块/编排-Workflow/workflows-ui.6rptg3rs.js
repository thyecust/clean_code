// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 246 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { useAppStateSelector } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { formatDuration, formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { slugifyWorkflowName } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { useTaskRegistry } from "../../01-核心基础设施/核心工具-未归类/use-task-registry.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useHasVirtualScrollViewport, useVirtualScrollViewportSize } from "../../01-核心基础设施/UI组件-TUI/virtual-scroll-viewport-state.js";
import { useActiveOverlay } from "../多会话视图-Fleet/overlay-registry.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import { isFullscreenActive } from "../终端环境探测-TUI-tmux/终端环境探测-TUI-tmux.5pkb0sjc.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { oa } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { useKeybindings } from "../键位绑定-Keybindings/keybinding-hooks.js";
import { pauseWorkflowTask, killWorkflowTask, skipWorkflowAgent, retryWorkflowAgent } from "./chunk-va9cgbfs.js";
import { parseWorkflowScript } from "./workflow-script.js";
import { PROMPT_RESERVED_ROWS } from "./workflow-progress-ui.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/UI组件-TUI/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/核心工具-未归类/expanded-content-context.js";
import "../../01-核心基础设施/核心工具-未归类/queued-message-context.js";
import { computeListWindow } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { SaveWorkflowDialog, WorkflowDetailDialog } from "./workflow-dialogs.js";
import { FocusableBox } from "../../01-核心基础设施/UI组件-TUI/focusable-box.js";
import { EmptyStateMessage } from "../../01-核心基础设施/UI组件-TUI/empty-state-message.js";
import "../../01-核心基础设施/UI组件-TUI/error-message.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/UI组件-TUI/spinner-message-line.js";
import "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import "../../01-核心基础设施/UI组件-TUI/linkified-text.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import "../../01-核心基础设施/核心工具-未归类/summarize-tool-input.js";
import { loadWorkflowSnapshots } from "./workflow-snapshots.js";
import "./workflow-registry.js";
import "./bundled-workflows.js";
import { Dn, kn, E, V, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function Qo() {
  return [];
}
function qo(ts) {
  return ts.tasks;
}
function zo(os) {
  return os.type === "local_workflow";
}
function Ko(es) {
  return es.workflowRunId;
}
function Yo(ss) {
  return !!ss;
}
function Zo(Ao) {
  return { task: io(Ao), snapshot: Ao };
}
function Ho(ns) {
  return { task: ns };
}
function te(rs, as) {
  return as.task.startTime - rs.task.startTime;
}
function oe(is) {
  return Math.max(0, is - 1);
}
function ee(ms) {
  return ms.task.status === "running";
}
function io(i) {
  return {
    id: i.taskId,
    type: "local_workflow",
    description: i.summary ?? "Dynamic workflow",
    status: i.status,
    startTime: i.startTime,
    endTime: i.startTime + i.durationMs,
    toolUseId: void 0,
    outputFile: "",
    outputOffset: 0,
    notified: !0,
    script: i.script,
    scriptPath: i.scriptPath,
    prompt: i.script,
    summary: i.summary,
    workflowName: i.workflowName,
    phases: i.phases,
    defaultModel: i.defaultModel,
    workflowRunId: i.runId,
    workflowProgress: i.workflowProgress,
    progressVersion: 0,
    agentCount: i.agentCount,
    totalTokens: i.totalTokens ?? 0,
    totalToolCalls: i.totalToolCalls ?? 0,
    logs: i.logs,
    result: i.result,
    error: i.error,
  };
}
function ot(i) {
  i("Dynamic workflows dialog dismissed", { display: "system" });
}
function Vt(Oe) {
  let nt = _(15),
    { onDone: st, toolUseContext: ut } = Oe;
  useActiveOverlay("workflow-history-dialog");
  let yo;
  if (nt[0] !== ut.storageV5)
    ((yo = () => loadWorkflowSnapshots(ut.storageV5).catch(Qo)),
      (nt[0] = ut.storageV5),
      (nt[1] = yo));
  else yo = nt[1];
  let [Gt] = d(yo),
    kt;
  if (nt[2] !== st) ((kt = () => ot(st)), (nt[2] = st), (nt[3] = kt));
  else kt = nt[3];
  let go, ho;
  if (nt[4] === MEMO_CACHE_SENTINEL)
    ((go = e(DotSeparatedList, { children: e(KeybindingHint, { chord: "escape", action: "close" }) })),
      (ho = e(SpinnerMessageLine, {
        message: "Loading dynamic workflow history\u2026",
        dimColor: !0,
      })),
      (nt[4] = go),
      (nt[5] = ho));
  else ((go = nt[4]), (ho = nt[5]));
  let wt;
  if (nt[6] !== kt)
    ((wt = e(de, {
      title: "Dynamic workflows",
      onCancel: kt,
      color: "background",
      inputGuide: go,
      children: ho,
    })),
      (nt[6] = kt),
      (nt[7] = wt));
  else wt = nt[7];
  const _t = ut.isMidTurn === !0;
  let yt;
  if (nt[8] !== st || nt[9] !== Gt || nt[10] !== _t)
    ((yt = e(Xt, { snapshotsPromise: Gt, onDone: st, promptVisibleBelow: _t })),
      (nt[8] = st),
      (nt[9] = Gt),
      (nt[10] = _t),
      (nt[11] = yt));
  else yt = nt[11];
  let Co;
  if (nt[12] !== wt || nt[13] !== yt)
    ((Co = e(Dn, { fallback: wt, children: yt })),
      (nt[12] = wt),
      (nt[13] = yt),
      (nt[14] = Co));
  else Co = nt[14];
  return Co;
}
function Xt(We) {
  let a = _(128),
    { snapshotsPromise: Ve, onDone: c, promptVisibleBelow: gt } = We,
    Qt = kn(Ve),
    { rows: qt } = useVirtualScrollViewportSize(useTerminalSize()),
    je = useHasVirtualScrollViewport(),
    zt = useAppStateSelector(qo),
    T = useTaskRegistry(),
    So;
  if (a[0] !== Qt || a[1] !== zt) {
    let To = Object.values(zt ?? {}).filter(zo);
    let $e = new Set(To.map(Ko).filter(Yo));
    let Ee = Qt.filter((Ae) => !$e.has(Ae.runId)).map(Zo);
    So = [...To.map(Ho), ...Ee].sort(te);
    ((a[0] = Qt), (a[1] = zt), (a[2] = So));
  } else So = a[2];
  let s = So,
    vo;
  if (a[3] === MEMO_CACHE_SENTINEL) ((vo = { mode: "list" }), (a[3] = vo));
  else vo = a[3];
  let [m, Z] = d(vo),
    [ct, Io] = d(0),
    ht = C(!1),
    Do;
  if (a[4] !== s[0] || a[5] !== s.length || a[6] !== m.mode)
    ((Do = () => {
      if (s.length === 1 && m.mode === "list" && !ht.current)
        ((ht.current = !0), Z({ mode: "detail", itemId: s[0].task.id }));
    }),
      (a[4] = s[0]),
      (a[5] = s.length),
      (a[6] = m.mode),
      (a[7] = Do));
  else Do = a[7];
  let bo;
  if (a[8] !== s || a[9] !== m.mode)
    ((bo = [s, m.mode]), (a[8] = s), (a[9] = m.mode), (a[10] = bo));
  else bo = a[10];
  E(Do, bo);
  let k = s[ct],
    Lo;
  if (a[11] === MEMO_CACHE_SENTINEL) ((Lo = () => Io(oe)), (a[11] = Lo));
  else Lo = a[11];
  let Ct;
  if (a[12] !== s.length)
    ((Ct = () => Io((Ue) => Math.min(s.length - 1, Ue + 1))),
      (a[12] = s.length),
      (a[13] = Ct));
  else Ct = a[13];
  let St;
  if (a[14] !== k)
    ((St = () => {
      if (k) Z({ mode: "detail", itemId: k.task.id });
    }),
      (a[14] = k),
      (a[15] = St));
  else St = a[15];
  let xo;
  if (a[16] !== Ct || a[17] !== St)
    ((xo = { "confirm:previous": Lo, "confirm:next": Ct, "confirm:yes": St }),
      (a[16] = Ct),
      (a[17] = St),
      (a[18] = xo));
  else xo = a[18];
  const Kt = m.mode === "list";
  let Mo;
  if (a[19] !== Kt)
    ((Mo = { context: "Confirmation", isActive: Kt }),
      (a[19] = Kt),
      (a[20] = Mo));
  else Mo = a[20];
  useKeybindings(xo, Mo);
  let q = k !== void 0 && k.task.script.length > 0,
    Ro;
  if (a[21] !== k || a[22] !== q || a[23] !== T || a[24] !== m.mode)
    ((Ro = (rt) => {
      if (m.mode !== "list") {
        return;
      }
      if (rt.ctrl || rt.meta) {
        return;
      }
      if (rt.key === "x" && k?.task.status === "running")
        (rt.preventDefault(), killWorkflowTask(k.task.id, T, "user"));
      else if (rt.key === "s" && q && k)
        (rt.preventDefault(), Z({ mode: "save", itemId: k.task.id }));
    }),
      (a[21] = k),
      (a[22] = q),
      (a[23] = T),
      (a[24] = m.mode),
      (a[25] = Ro));
  else Ro = a[25];
  let Yt = Ro,
    Po;
  if (a[26] !== s.length || a[27] !== c)
    ((Po = () => {
      if (ht.current && s.length <= 1) ot(c);
      else ((ht.current = !1), Z({ mode: "list" }));
    }),
      (a[26] = s.length),
      (a[27] = c),
      (a[28] = Po));
  else Po = a[28];
  let Zt = Po;
  if (m.mode === "detail") {
    let J;
    if (a[29] !== s || a[30] !== m.itemId) {
      let w;
      if (a[32] !== m.itemId)
        ((w = (Fe) => Fe.task.id === m.itemId),
          (a[32] = m.itemId),
          (a[33] = w));
      else w = a[33];
      J = s.find(w);
      ((a[29] = s), (a[30] = m.itemId), (a[31] = J));
    } else J = a[31];
    let f = J;
    if (!f) {
      return (Z({ mode: "list" }), null);
    }
    let M = f.task.status === "running";
    let w;
    if (a[34] !== c)
      ((w = (Bo) => (Bo ? c(Bo, { display: "system" }) : c())),
        (a[34] = c),
        (a[35] = w));
    else w = a[35];
    let y;
    if (a[36] !== M || a[37] !== f.task.id || a[38] !== T)
      ((y = M ? () => killWorkflowTask(f.task.id, T, "user") : void 0),
        (a[36] = M),
        (a[37] = f.task.id),
        (a[38] = T),
        (a[39] = y));
    else y = a[39];
    let R;
    if (a[40] !== M || a[41] !== f.task.id || a[42] !== T)
      ((R = M ? () => pauseWorkflowTask(f.task.id, T) : void 0),
        (a[40] = M),
        (a[41] = f.task.id),
        (a[42] = T),
        (a[43] = R));
    else R = a[43];
    let N;
    if (a[44] !== c)
      ((N = (Jo) =>
        c(Jo, { shouldQuery: !0, display: "system", metaMessages: [Jo] })),
        (a[44] = c),
        (a[45] = N));
    else N = a[45];
    let W;
    if (a[46] !== M || a[47] !== f.task.id || a[48] !== T)
      ((W = M ? (Ge) => skipWorkflowAgent(f.task.id, Ge, T) : void 0),
        (a[46] = M),
        (a[47] = f.task.id),
        (a[48] = T),
        (a[49] = W));
    else W = a[49];
    let j;
    if (a[50] !== M || a[51] !== f.task.id || a[52] !== T)
      ((j = M ? (_e) => retryWorkflowAgent(f.task.id, _e, T) : void 0),
        (a[50] = M),
        (a[51] = f.task.id),
        (a[52] = T),
        (a[53] = j));
    else j = a[53];
    let X;
    if (
      a[54] !== Zt ||
      a[55] !== f.task ||
      a[56] !== gt ||
      a[57] !== w ||
      a[58] !== y ||
      a[59] !== R ||
      a[60] !== N ||
      a[61] !== W ||
      a[62] !== j
    )
      ((X = e(
        WorkflowDetailDialog,
        {
          workflow: f.task,
          onDone: w,
          onBack: Zt,
          promptVisibleBelow: gt,
          onKill: y,
          onPause: R,
          onResume: N,
          onSkipAgent: W,
          onRetryAgent: j,
        },
        f.task.id,
      )),
        (a[54] = Zt),
        (a[55] = f.task),
        (a[56] = gt),
        (a[57] = w),
        (a[58] = y),
        (a[59] = R),
        (a[60] = N),
        (a[61] = W),
        (a[62] = j),
        (a[63] = X));
    else X = a[63];
    return X;
  }
  if (m.mode === "save") {
    let A, J, w;
    if (a[64] !== s || a[65] !== m.itemId) {
      w = EARLY_RETURN_SENTINEL;
      bb0: {
        let y;
        if (a[69] !== m.itemId)
          ((y = (Qe) => Qe.task.id === m.itemId),
            (a[69] = m.itemId),
            (a[70] = y));
        else y = a[70];
        A = s.find(y);
        if (!A || A.task.script.length === 0) {
          w = (Z({ mode: "list" }), null);
          break bb0;
        }
        let No = parseWorkflowScript(A.task.script);
        J = !("error" in No)
          ? No.meta.name
          : slugifyWorkflowName(A.task.summary ?? A.task.description);
      }
      ((a[64] = s), (a[65] = m.itemId), (a[66] = A), (a[67] = J), (a[68] = w));
    } else ((A = a[66]), (J = a[67]), (w = a[68]));
    if (w !== EARLY_RETURN_SENTINEL) return w;
    let Ht = J;
    let y;
    if (a[71] !== c)
      ((y = (Xo) => {
        if (Xo) c(Xo, { display: "system" });
        else Z({ mode: "list" });
      }),
        (a[71] = c),
        (a[72] = y));
    else y = a[72];
    let R;
    if (a[73] !== Ht || a[74] !== A.task.script || a[75] !== y)
      ((R = e(SaveWorkflowDialog, { script: A.task.script, defaultName: Ht, onDone: y })),
        (a[73] = Ht),
        (a[74] = A.task.script),
        (a[75] = y),
        (a[76] = R));
    else R = a[76];
    return R;
  }
  let H = countMatching(s, ee),
    at = s.length - H,
    to = gt && !je && !isFullscreenActive() ? PROMPT_RESERVED_ROWS : 0,
    Tt,
    vt,
    J,
    w,
    y,
    R,
    N,
    W,
    j;
  if (
    a[77] !== to ||
    a[78] !== at ||
    a[79] !== Yt ||
    a[80] !== s ||
    a[81] !== c ||
    a[82] !== qt ||
    a[83] !== H ||
    a[84] !== k?.task.status ||
    a[85] !== q ||
    a[86] !== ct
  ) {
    let qe = oa(qt - 7 - to, 3, s.length);
    let {
      windowStart: Oo,
      windowEnd: ze,
      moreAbove: Wo,
      moreBelow: Vo,
    } = computeListWindow(ct, s.length, qe);
    let Ke = s.slice(Oo, ze);
    let X;
    if (a[96] !== c) ((X = () => ot(c)), (a[96] = c), (a[97] = X));
    else X = a[97];
    let Ye = X;
    vt = FocusableBox;
    j = Yt;
    Tt = de;
    J = "Dynamic workflows";
    if (a[98] !== at || a[99] !== s.length || a[100] !== H)
      ((w =
        s.length === 0
          ? void 0
          : e(Text, {
              dimColor: !0,
              children: r(DotSeparatedList, {
                children: [
                  H > 0 && `${H} running`,
                  at > 0 && `${at} completed`,
                ],
              }),
            })),
        (a[98] = at),
        (a[99] = s.length),
        (a[100] = H),
        (a[101] = w));
    else w = a[101];
    y = Ye;
    R = "background";
    let tt;
    if (a[102] !== s.length)
      ((tt = s.length > 0 && e(KeybindingHint, { chord: ["up", "down"], action: "select" })),
        (a[102] = s.length),
        (a[103] = tt));
    else tt = a[103];
    let It;
    if (a[104] !== s.length)
      ((It = s.length > 0 && e(KeybindingHint, { chord: "enter", action: "view" })),
        (a[104] = s.length),
        (a[105] = It));
    else It = a[105];
    let Dt;
    if (a[106] !== k?.task.status)
      ((Dt =
        k?.task.status === "running" && e(KeybindingHint, { chord: "x", action: "stop" })),
        (a[106] = k?.task.status),
        (a[107] = Dt));
    else Dt = a[107];
    let bt;
    if (a[108] !== q)
      ((bt = q && e(KeybindingHint, { chord: "s", action: "save" })),
        (a[108] = q),
        (a[109] = bt));
    else bt = a[109];
    let jo;
    if (a[110] === MEMO_CACHE_SENTINEL)
      ((jo = e(KeybindingHint, { chord: "escape", action: "close" })), (a[110] = jo));
    else jo = a[110];
    if (a[111] !== tt || a[112] !== It || a[113] !== Dt || a[114] !== bt)
      ((N = r(DotSeparatedList, { children: [tt, It, Dt, bt, jo] })),
        (a[111] = tt),
        (a[112] = It),
        (a[113] = Dt),
        (a[114] = bt),
        (a[115] = N));
    else N = a[115];
    W =
      s.length === 0
        ? e(EmptyStateMessage, { children: "No dynamic workflows in this session." })
        : r(Box, {
            flexDirection: "column",
            children: [
              Wo > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: ["  ", figures.arrowUp, " ", Wo, " more above"],
                }),
              Ke.map(($o, He) =>
                e(Wt, { item: $o, isSelected: Oo + He === ct }, $o.task.id),
              ),
              Vo > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: ["  ", figures.arrowDown, " ", Vo, " more below"],
                }),
            ],
          });
    ((a[77] = to),
      (a[78] = at),
      (a[79] = Yt),
      (a[80] = s),
      (a[81] = c),
      (a[82] = qt),
      (a[83] = H),
      (a[84] = k?.task.status),
      (a[85] = q),
      (a[86] = ct),
      (a[87] = Tt),
      (a[88] = vt),
      (a[89] = J),
      (a[90] = w),
      (a[91] = y),
      (a[92] = R),
      (a[93] = N),
      (a[94] = W),
      (a[95] = j));
  } else
    ((Tt = a[87]),
      (vt = a[88]),
      (J = a[89]),
      (w = a[90]),
      (y = a[91]),
      (R = a[92]),
      (N = a[93]),
      (W = a[94]),
      (j = a[95]));
  let X;
  if (
    a[116] !== Tt ||
    a[117] !== J ||
    a[118] !== w ||
    a[119] !== y ||
    a[120] !== R ||
    a[121] !== N ||
    a[122] !== W
  )
    ((X = e(Tt, {
      title: J,
      subtitle: w,
      onCancel: y,
      color: R,
      inputGuide: N,
      children: W,
    })),
      (a[116] = Tt),
      (a[117] = J),
      (a[118] = w),
      (a[119] = y),
      (a[120] = R),
      (a[121] = N),
      (a[122] = W),
      (a[123] = X));
  else X = a[123];
  let tt;
  if (a[124] !== vt || a[125] !== j || a[126] !== X)
    ((tt = e(vt, { onKeyDown: j, children: X })),
      (a[124] = vt),
      (a[125] = j),
      (a[126] = X),
      (a[127] = tt));
  else tt = a[127];
  return tt;
}
function Wt(ls) {
  let O = _(27),
    { item: Eo, isSelected: Uo } = ls,
    { task: v, snapshot: ds } = Eo,
    it,
    mt;
  bb0: switch (v.status) {
    case "completed": {
      ((it = figures.tick), (mt = "success"));
      break bb0;
    }
    case "failed":
    case "killed": {
      ((it = figures.cross), (mt = "error"));
      break bb0;
    }
    default: {
      ((it = "\u27F3"), (mt = void 0));
    }
  }
  let Lt = ds?.totalTokens ?? v.totalTokens ?? 0,
    Fo;
  if (O[0] !== v.endTime)
    ((Fo = v.endTime ?? Date.now()), (O[0] = v.endTime), (O[1] = Fo));
  else Fo = O[1];
  let oo = Math.max(0, Fo - v.startTime - (v.totalPausedMs ?? 0)),
    xt;
  if (O[2] !== v.agentCount)
    ((xt =
      v.agentCount > 0 ? `${v.agentCount} ${pluralize(v.agentCount, "agent")}` : null),
      (O[2] = v.agentCount),
      (O[3] = xt));
  else xt = O[3];
  let Mt;
  if (O[4] !== Lt)
    ((Mt = Lt > 0 ? `${formatTokens(Lt)} tok` : null), (O[4] = Lt), (O[5] = Mt));
  else Mt = O[5];
  let Rt;
  if (O[6] !== oo) ((Rt = formatDuration(oo)), (O[6] = oo), (O[7] = Rt));
  else Rt = O[7];
  let Go;
  if (O[8] !== xt || O[9] !== Mt || O[10] !== Rt)
    ((Go = [xt, Mt, Rt].filter(Boolean)),
      (O[8] = xt),
      (O[9] = Mt),
      (O[10] = Rt),
      (O[11] = Go));
  else Go = O[11];
  let cs = Go,
    eo = v.workflowName ?? v.summary ?? v.description,
    so = eo.length > 50 ? eo.slice(0, 49) + "\u2026" : eo;
  const no = Uo ? figures.pointer + " " : "  ";
  let Pt;
  if (O[12] !== no) ((Pt = e(Text, { children: no })), (O[12] = no), (O[13] = Pt));
  else Pt = O[13];
  const ro = Uo ? "suggestion" : void 0;
  let Bt;
  if (O[14] !== it || O[15] !== mt)
    ((Bt = e(Text, { color: mt, children: it })),
      (O[14] = it),
      (O[15] = mt),
      (O[16] = Bt));
  else Bt = O[16];
  const ao = cs.join(" \xB7 ");
  let Jt;
  if (O[17] !== ao)
    ((Jt = r(Text, { dimColor: !0, children: ["  ", ao] })),
      (O[17] = ao),
      (O[18] = Jt));
  else Jt = O[18];
  let Nt;
  if (O[19] !== so || O[20] !== Jt || O[21] !== ro || O[22] !== Bt)
    ((Nt = r(Text, { color: ro, children: [Bt, " ", so, Jt] })),
      (O[19] = so),
      (O[20] = Jt),
      (O[21] = ro),
      (O[22] = Bt),
      (O[23] = Nt));
  else Nt = O[23];
  let _o;
  if (O[24] !== Nt || O[25] !== Pt)
    ((_o = r(Box, { children: [Pt, Nt] })),
      (O[24] = Nt),
      (O[25] = Pt),
      (O[26] = _o));
  else _o = O[26];
  return _o;
}
async function ys(i, h) {
  return e(Vt, { toolUseContext: h, onDone: i });
}
export { ys as call };

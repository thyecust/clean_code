// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { areBackgroundTasksDisabled } from "../../01-核心基础设施/共享小工具-未细化/host-capability-state.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { parseCommandTitleComment, backgroundAllForegroundTasks, parseSedInPlaceCommand } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Ao } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { shouldUseFullscreen } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { gw, Ej } from "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindingContext } from "../键位绑定(Keybindings)/keybinding-context.js";
import { ToolErrorMessage } from "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { useKeybindingDisplayText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import { useTaskRegistry } from "../../01-核心基础设施/共享小工具-未细化/use-task-registry.js";
import { BashToolOutputView } from "../工具Bash-Shell/bash-output-view.js";
import { ShellOutputView } from "../工具Bash-Shell/shell-output-view.js";
import { isKbCohesionFixesEnabled } from "../../01-核心基础设施/共享小工具-未细化/kb-cohesion-fixes.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, vr, V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var f = "ctrl+b",
  S = "ctrl+x ctrl+b",
  P = new Set([f, S].map((l) => Ej(gw(l))));
function v(l) {
  for (let s of l) {
    if (s.context !== "Task") continue;
    let u = Ej(s.chord);
    if (s.action === "task:background") {
      if (!P.has(u)) return !0;
    } else if (s.action === null && P.has(u)) return !0;
  }
  return !1;
}
function useTaskBackgroundKeybinding({ handler: l, isActive: s }) {
  let u = isKbCohesionFixesEnabled(),
    n = useKeybindingDisplayText("task:background", "Task", f),
    g = useKeybindingContext(),
    c = g?.bindings,
    i = V(() => (c ? v(c) : !1), [c]),
    d = vr(l),
    m = !(u && !i);
  E(() => {
    if (!g || !s) return;
    return g.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => d(),
      singleKey: m,
    });
  }, [g, s, m]);
  let k = i ? n : S,
    O =
      n === ""
        ? ""
        : a.terminal === "tmux"
          ? k
              .split(" ")
              .map((R) => (R === f ? `${f} ${f}` : R))
              .join(" ")
          : k;
  return { cohesionFixes: u, gateOnShortcut: O, resolvedShortcut: n };
}
var B = 2,
  h = 160;
function BackgroundHint(b) {
  let T = _(10),
    N;
  if (T[0] !== b) ((N = b === void 0 ? {} : b), (T[0] = b), (T[1] = N));
  else N = T[1];
  let { onBackground: x } = N,
    C = useTaskRegistry(),
    A;
  if (T[2] !== x || T[3] !== C)
    ((A = () => {
      (backgroundAllForegroundTasks(C), x?.());
    }),
      (T[2] = x),
      (T[3] = C),
      (T[4] = A));
  else A = T[4];
  let y = A,
    I;
  if (T[5] !== y) ((I = { handler: y, isActive: !0 }), (T[5] = y), (T[6] = I));
  else I = T[6];
  let { cohesionFixes: L, gateOnShortcut: de } = useTaskBackgroundKeybinding(I),
    j = useKeybindingDisplayText("task:background", "Task", "ctrl+b"),
    M = L
      ? de
      : a.terminal === "tmux" && j === "ctrl+b"
        ? "ctrl+b ctrl+b (twice)"
        : j;
  if (areBackgroundTasksDisabled() || (L && M === "")) {
    return null;
  }
  let U;
  if (T[7] === MEMO_CACHE_SENTINEL) ((U = { keyCase: "lower" }), (T[7] = U));
  else U = T[7];
  let z;
  if (T[8] !== M)
    ((z = e(o, {
      paddingLeft: 5,
      children: e(t, {
        dimColor: !0,
        children: e(KeybindingHint, {
          chord: M,
          action: "run in background",
          parens: !0,
          format: U,
        }),
      }),
    })),
      (T[8] = M),
      (T[9] = z));
  else z = T[9];
  return z;
}
function renderToolUseMessage(l, { verbose: s, theme: u }) {
  let { command: n } = l;
  if (!n) return null;
  let g = parseSedInPlaceCommand(n);
  if (g) return s ? g.filePath : Ao(g.filePath);
  if (!s) {
    let c = n.split(`
`);
    if (shouldUseFullscreen()) {
      let m = parseCommandTitleComment(n);
      if (m) return m.length > h ? m.slice(0, h) + "\u2026" : m;
    }
    let i = c.length > B,
      d = n.length > h;
    if (i || d) {
      let m = n;
      if (i)
        m = c.slice(0, B).join(`
`);
      if (m.length > h) m = m.slice(0, h);
      return r(t, { children: [m.trim(), "\u2026"] });
    }
  }
  return n;
}
function renderToolUseProgressMessage(
  l,
  { verbose: s, tools: u, terminalSize: n, inProgressToolCallCount: g },
) {
  let c = l.at(-1);
  if (!c || !c.data)
    return e(ToolResultRow, {
      height: 1,
      children: e(t, { dimColor: !0, children: "Running\u2026" }),
    });
  let i = c.data;
  return e(ShellOutputView, {
    fullOutput: i.fullOutput,
    output: i.output,
    elapsedTimeSeconds: i.elapsedTimeSeconds,
    totalLines: i.totalLines,
    totalBytes: i.totalBytes,
    timeoutMs: i.timeoutMs,
    taskId: i.taskId,
    verbose: s,
  });
}
function renderToolUseQueuedMessage() {
  return e(ToolResultRow, {
    height: 1,
    children: e(t, { dimColor: !0, children: "Waiting\u2026" }),
  });
}
function renderToolResultMessage(l, s, { verbose: u, theme: n, tools: g, style: c }) {
  let d = s.at(-1)?.data?.timeoutMs;
  return e(BashToolOutputView, { content: l, verbose: u, timeoutMs: d });
}
function renderToolUseErrorMessage(l, { verbose: s, progressMessagesForMessage: u, tools: n }) {
  return e(ToolErrorMessage, { result: l, verbose: s });
}
export { useTaskBackgroundKeybinding, BackgroundHint, renderToolUseMessage, renderToolUseProgressMessage, renderToolUseQueuedMessage, renderToolResultMessage, renderToolUseErrorMessage };

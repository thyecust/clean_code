// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Dl } from "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { y2t, zM, Yne } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Ao } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Ta } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { gw, Ej } from "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { sl } from "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { Zr } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import { wf } from "../../01-核心基础设施/共享小工具-未细化/chunk-pbd0pf42.js";
import { Zz } from "../工具Bash-Shell/chunk-qnax4jt7.js";
import { zZ } from "../工具Bash-Shell/chunk-ktp8xtmy.js";
import { kh } from "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, vr, V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
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
function bWe({ handler: l, isActive: s }) {
  let u = kh(),
    n = Zr("task:background", "Task", f),
    g = sl(),
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
function cPt(b) {
  let T = _(10),
    N;
  if (T[0] !== b) ((N = b === void 0 ? {} : b), (T[0] = b), (T[1] = N));
  else N = T[1];
  let { onBackground: x } = N,
    C = wf(),
    A;
  if (T[2] !== x || T[3] !== C)
    ((A = () => {
      (zM(C), x?.());
    }),
      (T[2] = x),
      (T[3] = C),
      (T[4] = A));
  else A = T[4];
  let y = A,
    I;
  if (T[5] !== y) ((I = { handler: y, isActive: !0 }), (T[5] = y), (T[6] = I));
  else I = T[6];
  let { cohesionFixes: L, gateOnShortcut: de } = bWe(I),
    j = Zr("task:background", "Task", "ctrl+b"),
    M = L
      ? de
      : a.terminal === "tmux" && j === "ctrl+b"
        ? "ctrl+b ctrl+b (twice)"
        : j;
  if (Dl() || (L && M === "")) {
    return null;
  }
  let U;
  if (T[7] === p) ((U = { keyCase: "lower" }), (T[7] = U));
  else U = T[7];
  let z;
  if (T[8] !== M)
    ((z = e(o, {
      paddingLeft: 5,
      children: e(t, {
        dimColor: !0,
        children: e(D, {
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
function ogr(l, { verbose: s, theme: u }) {
  let { command: n } = l;
  if (!n) return null;
  let g = Yne(n);
  if (g) return s ? g.filePath : Ao(g.filePath);
  if (!s) {
    let c = n.split(`
`);
    if (Ta()) {
      let m = y2t(n);
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
function sgr(
  l,
  { verbose: s, tools: u, terminalSize: n, inProgressToolCallCount: g },
) {
  let c = l.at(-1);
  if (!c || !c.data)
    return e(xe, {
      height: 1,
      children: e(t, { dimColor: !0, children: "Running\u2026" }),
    });
  let i = c.data;
  return e(zZ, {
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
function igr() {
  return e(xe, {
    height: 1,
    children: e(t, { dimColor: !0, children: "Waiting\u2026" }),
  });
}
function agr(l, s, { verbose: u, theme: n, tools: g, style: c }) {
  let d = s.at(-1)?.data?.timeoutMs;
  return e(Zz, { content: l, verbose: u, timeoutMs: d });
}
function lgr(l, { verbose: s, progressMessagesForMessage: u, tools: n }) {
  return e(Yd, { result: l, verbose: s });
}
export { bWe, cPt, ogr, sgr, igr, agr, lgr };

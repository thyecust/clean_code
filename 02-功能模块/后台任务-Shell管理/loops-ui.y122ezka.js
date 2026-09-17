// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 132 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { nl } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { parseCronExpression, formatCronSchedule, createScheduledTask, deleteScheduledTasks, listScheduledTasks } from "./scheduled-tasks.js";
import { listGoalStopHooks, setSessionGoal, clearSessionGoal } from "../Skills技能/chunk-sapykxw7.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Dt(no) {
  return no === "interval" ? "text" : "interval";
}
var Z = 50;
function W(s, u) {
  return s.length > u ? s.slice(0, u - 1) + "\u2026" : s;
}
function ge(_t) {
  let l = _(93),
    { loops: f, onDelete: be, onCreate: H, onCancel: X } = _t,
    [y, Le] = d("list"),
    [G, De] = d(0),
    [a, Jt] = d("every"),
    [w, Xt] = d("10m"),
    [j, jt] = d(3),
    [M, qt] = d(""),
    [q, zt] = d(0),
    [C, ee] = d(a === "every" ? "interval" : "text"),
    { columns: Kt } = useTerminalSize(),
    nt;
  if (l[0] !== f.length)
    ((nt = {
      "select:previous": () => De((Qt) => (f.length ? Math.max(0, Qt - 1) : 0)),
      "select:next": () =>
        De((Ut) => (f.length ? Math.min(f.length - 1, Ut + 1) : 0)),
    }),
      (l[0] = f.length),
      (l[1] = nt));
  else nt = l[1];
  const Re = y === "list";
  let it;
  if (l[2] !== Re)
    ((it = { context: "Select", isActive: Re }), (l[2] = Re), (l[3] = it));
  else it = l[3];
  useKeybindings(nt, it);
  let st;
  if (
    l[4] !== f ||
    l[5] !== a ||
    l[6] !== X ||
    l[7] !== be ||
    l[8] !== G ||
    l[9] !== y
  )
    ((st = (z) => {
      if (y !== "list") {
        return;
      }
      if (z.key === "escape") {
        (z.preventDefault(), X());
        return;
      }
      if (z.key === "d" && f[G]) {
        (z.preventDefault(),
          be(f[G]),
          De((Yt) => Math.max(0, Math.min(Yt, f.length - 2))));
        return;
      }
      if (z.key === "n")
        (z.preventDefault(),
          Le("create"),
          ee(a === "every" ? "interval" : "text"));
    }),
      (l[4] = f),
      (l[5] = a),
      (l[6] = X),
      (l[7] = be),
      (l[8] = G),
      (l[9] = y),
      (l[10] = st));
  else st = l[10];
  let Zt = st,
    at;
  if (l[11] !== a)
    ((at = () => {
      let lt = a === "every" ? "until" : "every";
      (Jt(lt), ee(lt === "every" ? "interval" : "text"));
    }),
      (l[11] = a),
      (l[12] = at));
  else at = l[12];
  let te = at,
    ct;
  if (
    l[13] !== C ||
    l[14] !== w ||
    l[15] !== j ||
    l[16] !== a ||
    l[17] !== M.length ||
    l[18] !== q ||
    l[19] !== te ||
    l[20] !== y
  )
    ((ct = (b) => {
      if (y !== "create") {
        return;
      }
      if (b.key === "escape") {
        (b.preventDefault(), Le("list"));
        return;
      }
      if (b.key === "tab") {
        (b.preventDefault(), te());
        return;
      }
      let dt = C === "interval" ? j : q;
      let Wt = C === "interval" ? w.length : M.length;
      if ((b.key === "left" && dt === 0) || (b.key === "right" && dt >= Wt)) {
        (b.preventDefault(), te());
        return;
      }
      if (a === "every" && (b.key === "down" || b.key === "up"))
        (b.preventDefault(), ee(Dt));
    }),
      (l[13] = C),
      (l[14] = w),
      (l[15] = j),
      (l[16] = a),
      (l[17] = M.length),
      (l[18] = q),
      (l[19] = te),
      (l[20] = y),
      (l[21] = ct));
  else ct = l[21];
  let St = ct,
    mt;
  if (l[22] !== w || l[23] !== a || l[24] !== H || l[25] !== M)
    ((mt = function Y() {
      let oe = M.trim();
      if (a === "every") {
        if (!w.trim() || !oe) {
          return;
        }
        H({ kind: "cron", interval: w.trim(), prompt: oe });
      } else {
        if (!oe) {
          return;
        }
        H({ kind: "stophook", condition: oe });
      }
    }),
      (l[22] = w),
      (l[23] = a),
      (l[24] = H),
      (l[25] = M),
      (l[26] = mt));
  else mt = l[26];
  let Y = mt,
    re;
  if (l[27] !== f.length)
    ((re = f.length > 0 && e(KeybindingHint, { chord: ["up", "down"], action: "select" })),
      (l[27] = f.length),
      (l[28] = re));
  else re = l[28];
  let ne;
  if (l[29] !== f.length)
    ((ne = f.length > 0 && e(KeybindingHint, { chord: "d", action: "delete" })),
      (l[29] = f.length),
      (l[30] = ne));
  else ne = l[30];
  let pt, ft;
  if (l[31] === MEMO_CACHE_SENTINEL)
    ((pt = e(KeybindingHint, { chord: "n", action: "add" })),
      (ft = e(KeybindingHint, { chord: "escape", action: "close" })),
      (l[31] = pt),
      (l[32] = ft));
  else ((pt = l[31]), (ft = l[32]));
  let ut;
  if (l[33] !== re || l[34] !== ne)
    ((ut = r(DotSeparatedList, { children: [re, ne, pt, ft] })),
      (l[33] = re),
      (l[34] = ne),
      (l[35] = ut));
  else ut = l[35];
  let Ht = ut,
    vt;
  if (l[36] === MEMO_CACHE_SENTINEL)
    ((vt = e(KeybindingHint, { chord: "tab", action: "switch mode" })), (l[36] = vt));
  else vt = l[36];
  let ie;
  if (l[37] !== a)
    ((ie =
      a === "every" && e(KeybindingHint, { chord: ["up", "down"], action: "next field" })),
      (l[37] = a),
      (l[38] = ie));
  else ie = l[38];
  let yt, ht;
  if (l[39] === MEMO_CACHE_SENTINEL)
    ((yt = e(KeybindingHint, { chord: "enter", action: "create" })),
      (ht = e(KeybindingHint, { chord: "escape", action: "back" })),
      (l[39] = yt),
      (l[40] = ht));
  else ((yt = l[39]), (ht = l[40]));
  let kt;
  if (l[41] !== ie)
    ((kt = r(DotSeparatedList, { children: [vt, ie, yt, ht] })), (l[41] = ie), (l[42] = kt));
  else kt = l[42];
  let eo = kt;
  const $e = a !== "every",
    Me = a === "every" ? figures.radioOn : figures.radioOff;
  let se;
  if (l[43] !== $e || l[44] !== Me)
    ((se = r(Text, { dimColor: $e, children: [Me, " every"] })),
      (l[43] = $e),
      (l[44] = Me),
      (l[45] = se));
  else se = l[45];
  let gt;
  if (l[46] === MEMO_CACHE_SENTINEL)
    ((gt = e(Text, { dimColor: !0, children: "  " })), (l[46] = gt));
  else gt = l[46];
  const Ee = a !== "until",
    Te = a === "until" ? figures.radioOn : figures.radioOff;
  let ae;
  if (l[47] !== Ee || l[48] !== Te)
    ((ae = r(Text, { dimColor: Ee, children: [Te, " until"] })),
      (l[47] = Ee),
      (l[48] = Te),
      (l[49] = ae));
  else ae = l[49];
  let le;
  if (l[50] !== se || l[51] !== ae)
    ((le = r(Text, { children: [se, gt, ae] })),
      (l[50] = se),
      (l[51] = ae),
      (l[52] = le));
  else le = l[52];
  let ce;
  if (l[53] !== C || l[54] !== w || l[55] !== j || l[56] !== a)
    ((ce =
      a === "every" &&
      r(Box, {
        flexDirection: "row",
        gap: 1,
        marginTop: 1,
        children: [
          e(Text, { dimColor: C !== "interval", children: "Interval >" }),
          e(hn, {
            value: w,
            onChange: Xt,
            onSubmit: () => ee("text"),
            focus: C === "interval",
            showCursor: C === "interval",
            multiline: !1,
            columns: 12,
            cursorOffset: j,
            onChangeCursorOffset: jt,
            placeholder: "10m",
            disableEscapeDoublePress: !0,
          }),
        ],
      })),
      (l[53] = C),
      (l[54] = w),
      (l[55] = j),
      (l[56] = a),
      (l[57] = ce));
  else ce = l[57];
  const Ie = a === "every" && C !== "text",
    Oe = a === "every" ? "Prompt   >" : "Condition>";
  let me;
  if (l[58] !== Ie || l[59] !== Oe)
    ((me = e(Text, { dimColor: Ie, children: Oe })),
      (l[58] = Ie),
      (l[59] = Oe),
      (l[60] = me));
  else me = l[60];
  const Pe = a === "until" || C === "text",
    Fe = a === "until" || C === "text",
    Ge = Kt - 16,
    Ne =
      a === "every" ? "e.g. /babysit-prs" : "e.g. tests pass and PR is merged";
  let pe;
  if (
    l[61] !== Y ||
    l[62] !== Pe ||
    l[63] !== Fe ||
    l[64] !== Ge ||
    l[65] !== Ne ||
    l[66] !== M ||
    l[67] !== q
  )
    ((pe = e(hn, {
      value: M,
      onChange: qt,
      onSubmit: Y,
      focus: Pe,
      showCursor: Fe,
      multiline: !1,
      columns: Ge,
      cursorOffset: q,
      onChangeCursorOffset: zt,
      placeholder: Ne,
      disableEscapeDoublePress: !0,
    })),
      (l[61] = Y),
      (l[62] = Pe),
      (l[63] = Fe),
      (l[64] = Ge),
      (l[65] = Ne),
      (l[66] = M),
      (l[67] = q),
      (l[68] = pe));
  else pe = l[68];
  let fe;
  if (l[69] !== me || l[70] !== pe)
    ((fe = r(Box, {
      flexDirection: "row",
      gap: 1,
      marginTop: 1,
      children: [me, pe],
    })),
      (l[69] = me),
      (l[70] = pe),
      (l[71] = fe));
  else fe = l[71];
  let Ct;
  if (l[72] !== le || l[73] !== ce || l[74] !== fe)
    ((Ct = r(Box, { flexDirection: "column", children: [le, ce, fe] })),
      (l[72] = le),
      (l[73] = ce),
      (l[74] = fe),
      (l[75] = Ct));
  else Ct = l[75];
  let to = Ct,
    ve;
  if (l[76] !== f || l[77] !== G)
    ((ve =
      f.length === 0
        ? e(EmptyStateMessage, { children: "No active loops" })
        : f.map((xt, oo) => e(ke, { loop: xt, focused: oo === G }, xt.id))),
      (l[76] = f),
      (l[77] = G),
      (l[78] = ve));
  else ve = l[78];
  let wt;
  if (l[79] !== ve)
    ((wt = e(Box, { flexDirection: "column", children: ve })),
      (l[79] = ve),
      (l[80] = wt));
  else wt = l[80];
  let ro = wt;
  const Ae = y === "list" ? Zt : St,
    Be = y === "list" ? "Loops" : "New loop",
    Ve =
      y === "list"
        ? "Recurring crons and stop-hooks active for this session"
        : void 0;
  let ye;
  if (l[81] !== X || l[82] !== y)
    ((ye = y === "list" ? X : () => Le("list")),
      (l[81] = X),
      (l[82] = y),
      (l[83] = ye));
  else ye = l[83];
  const _e = y === "list" ? Ht : eo,
    Je = y === "list" ? ro : to;
  let he;
  if (
    l[84] !== Be ||
    l[85] !== Ve ||
    l[86] !== ye ||
    l[87] !== _e ||
    l[88] !== Je
  )
    ((he = e(de, {
      title: Be,
      subtitle: Ve,
      color: "permission",
      onCancel: ye,
      isCancelActive: !1,
      inputGuide: _e,
      children: Je,
    })),
      (l[84] = Be),
      (l[85] = Ve),
      (l[86] = ye),
      (l[87] = _e),
      (l[88] = Je),
      (l[89] = he));
  else he = l[89];
  let bt;
  if (l[90] !== Ae || l[91] !== he)
    ((bt = e(Box, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: Ae,
      children: he,
    })),
      (l[90] = Ae),
      (l[91] = he),
      (l[92] = bt));
  else bt = l[92];
  return bt;
}
function ke(io) {
  let x = _(24),
    { loop: h, focused: Q } = io;
  if (h.kind === "cron") {
    let E;
    if (x[0] !== h.human)
      ((E = e(Text, { bold: !0, children: h.human })),
        (x[0] = h.human),
        (x[1] = E));
    else E = x[1];
    let N;
    if (x[2] === MEMO_CACHE_SENTINEL)
      ((N = e(Text, { dimColor: !0, children: " \xB7 " })), (x[2] = N));
    else N = x[2];
    let A;
    if (x[3] !== h.prompt)
      ((A = W(h.prompt, Z)), (x[3] = h.prompt), (x[4] = A));
    else A = x[4];
    let T;
    if (x[5] !== h.id)
      ((T = r(Text, { dimColor: !0, children: [" \xB7 ", h.id] })),
        (x[5] = h.id),
        (x[6] = T));
    else T = x[6];
    let B;
    if (x[7] !== E || x[8] !== A || x[9] !== T)
      ((B = r(Text, { children: [E, N, A, T] })),
        (x[7] = E),
        (x[8] = A),
        (x[9] = T),
        (x[10] = B));
    else B = x[10];
    let Lt;
    if (x[11] !== Q || x[12] !== B)
      ((Lt = e(nl, { isFocused: Q, children: B })),
        (x[11] = Q),
        (x[12] = B),
        (x[13] = Lt));
    else Lt = x[13];
    return Lt;
  }
  let E;
  if (x[14] !== h.condition)
    ((E = W(h.condition, Z)), (x[14] = h.condition), (x[15] = E));
  else E = x[15];
  let N;
  if (x[16] !== E)
    ((N = e(Text, { bold: !0, children: E })), (x[16] = E), (x[17] = N));
  else N = x[17];
  let A;
  if (x[18] === MEMO_CACHE_SENTINEL)
    ((A = e(Text, { dimColor: !0, children: " \xB7 stop-hook" })), (x[18] = A));
  else A = x[18];
  let T;
  if (x[19] !== N)
    ((T = r(Text, { children: ["goal: ", N, A] })), (x[19] = N), (x[20] = T));
  else T = x[20];
  let B;
  if (x[21] !== Q || x[22] !== T)
    ((B = e(nl, { isFocused: Q, children: T })),
      (x[21] = Q),
      (x[22] = T),
      (x[23] = B));
  else B = x[23];
  return B;
}
var Rt = /^(\d+)([smhd])$/i;
function $t(s) {
  let u = s.match(Rt);
  if (!u) return null;
  let v = parseInt(u[1], 10);
  if (v < 1) return null;
  let k;
  switch (u[2].toLowerCase()) {
    case "s":
      k = `*/${Math.max(1, Math.ceil(v / 60))} * * * *`;
      break;
    case "m":
      k = v <= 59 ? `*/${v} * * * *` : `0 */${Math.round(v / 60)} * * *`;
      break;
    case "h":
      if (v > 23) return null;
      k = `0 */${v} * * *`;
      break;
    case "d":
      if (v > 31) return null;
      k = `0 0 */${v} * *`;
      break;
    default:
      return null;
  }
  return parseCronExpression(k) ? k : null;
}
var yo = async (s, u) => {
  logEvent("tengu_loops_command", {});
  let v = await listScheduledTasks(),
    k = listGoalStopHooks(u.sessionHooksRegistry, K()),
    g = [
      ...v.map((c) => ({
        kind: "cron",
        id: c.id,
        cron: c.cron,
        human: formatCronSchedule(c.cron),
        prompt: c.prompt,
      })),
      ...k.map((c, m) => ({
        kind: "stophook",
        id: `stophook-${m}`,
        condition: c.prompt,
      })),
    ];
  async function V(c) {
    if (c.kind === "cron") {
      try {
        (await deleteScheduledTasks([c.id]), s(`Loop ${c.id} deleted`, { display: "system" }));
      } catch (I) {
        s(`Failed to delete loop ${c.id}: ${I}`, { display: "system" });
      }
      return;
    }
    let m = clearSessionGoal(u);
    s(m === null ? "Stop hook not found" : "Stop hook cleared", {
      display: "system",
    });
  }
  async function J(c) {
    if (c.kind === "cron") {
      let I = $t(c.interval);
      if (!I) {
        s(`Invalid interval: ${c.interval}`, { display: "system" });
        return;
      }
      let O = await createScheduledTask(I, c.prompt, !0, !1);
      s(`Loop ${O} created (${formatCronSchedule(I)})`, { display: "system" });
      return;
    }
    let m = setSessionGoal(c.condition, u, "loops_dialog");
    s(m ?? "Stop hook set", { display: "system" });
  }
  return e(ge, {
    loops: g,
    onDelete: (c) => void V(c),
    onCreate: (c) => void J(c),
    onCancel: () => s("", { display: "skip" }),
  });
};
export { yo as call };

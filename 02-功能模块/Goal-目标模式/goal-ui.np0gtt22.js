// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 121 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { jc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { pluralize, firstLine } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { formatDuration, formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { GOAL_MODE_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { o, t, ko } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { MAX_GOAL_CONDITION_LENGTH, isGoalClearKeyword, findMetGoalStatus, buildGoalHookPrompt, setSessionGoal, clearSessionGoal } from "../Skills技能/chunk-sapykxw7.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function W(ht) {
  return ht.activeGoal;
}
function Y(Ct) {
  return Ct + 1;
}
function L(ut) {
  let s = _(38),
    { messages: T, onDone: m } = ut,
    i = useAppStateSelector(W),
    [, ft] = d(0),
    Q;
  if (s[0] === MEMO_CACHE_SENTINEL) ((Q = () => ft(Y)), (s[0] = Q));
  else Q = s[0];
  if ((ko(Q, i ? 1000 : null), i)) {
    const N = Date.now() - i.setAt;
    let h;
    if (s[1] !== N)
      ((h = formatDuration(N, { mostSignificantOnly: !0 })), (s[1] = N), (s[2] = h));
    else h = s[2];
    let gt = h;
    const G = jc() - i.tokensAtStart;
    let C;
    if (s[3] !== G) ((C = formatTokens(G)), (s[3] = G), (s[4] = C));
    else C = s[4];
    let yt = C;
    const k = `running ${gt}`;
    let A;
    if (s[5] !== i.iterations)
      ((A = i.iterations > 0 && `${i.iterations} ${pluralize(i.iterations, "turn")}`),
        (s[5] = i.iterations),
        (s[6] = A));
    else A = s[6];
    const X = `${yt} tokens`;
    let q;
    if (s[7] !== k || s[8] !== A || s[9] !== X)
      ((q = [k, A, X].filter(Boolean)),
        (s[7] = k),
        (s[8] = A),
        (s[9] = X),
        (s[10] = q));
    else q = s[10];
    let Gt = q;
    const B = Gt.join(" \xB7 ");
    let z;
    if (s[11] === MEMO_CACHE_SENTINEL)
      ((z = r(DotSeparatedList, {
        children: [
          e(t, { children: "/goal clear to stop early" }),
          e(KeybindingHint, { chord: "escape", action: "dismiss" }),
        ],
      })),
        (s[11] = z));
    else z = s[11];
    let M;
    if (s[12] !== i.condition)
      ((M = e(S, { label: "Goal", children: i.condition })),
        (s[12] = i.condition),
        (s[13] = M));
    else M = s[13];
    let O;
    if (s[14] !== i.lastReason)
      ((O = i.lastReason
        ? e(S, { label: "Last check", children: firstLine(i.lastReason.trim()) })
        : null),
        (s[14] = i.lastReason),
        (s[15] = O));
    else O = s[15];
    let R;
    if (s[16] !== M || s[17] !== O)
      ((R = r(o, { flexDirection: "column", children: [M, O] })),
        (s[16] = M),
        (s[17] = O),
        (s[18] = R));
    else R = s[18];
    let K;
    if (s[19] !== m || s[20] !== B || s[21] !== R)
      ((K = e(de, {
        title: `${GOAL_MODE_GLYPH} Goal active`,
        subtitle: B,
        onCancel: m,
        inputGuide: z,
        children: R,
      })),
        (s[19] = m),
        (s[20] = B),
        (s[21] = R),
        (s[22] = K));
    else K = s[22];
    return K;
  }
  let N;
  if (s[23] !== T || s[24] !== m) {
    N = EARLY_RETURN_SENTINEL;
    bb0: {
      let c = findMetGoalStatus(T);
      if (c) {
        let b = [];
        if (c.durationMs !== void 0)
          b.push(formatDuration(c.durationMs, { mostSignificantOnly: !0 }));
        if (c.iterations !== void 0)
          b.push(`${c.iterations} ${pluralize(c.iterations, "turn")}`);
        if (c.tokens !== void 0) b.push(`${formatTokens(c.tokens)} tokens`);
        let h;
        if (s[26] === MEMO_CACHE_SENTINEL)
          ((h = r(t, {
            children: [
              e(StatusIndicator, { status: "success", withSpace: !0 }),
              "Goal achieved",
            ],
          })),
            (s[26] = h));
        else h = s[26];
        const G = b.join(" \xB7 ");
        let C;
        if (s[27] === MEMO_CACHE_SENTINEL)
          ((C = r(DotSeparatedList, {
            children: [
              e(t, { children: "/goal <condition> to set another" }),
              e(KeybindingHint, { chord: "escape", action: "dismiss" }),
            ],
          })),
            (s[27] = C));
        else C = s[27];
        let k;
        if (s[28] !== c)
          ((k = e(S, { label: "Goal", children: c.condition })),
            (s[28] = c),
            (s[29] = k));
        else k = s[29];
        let A;
        if (s[30] !== m || s[31] !== G || s[32] !== k)
          ((A = e(de, {
            title: h,
            subtitle: G,
            color: "success",
            onCancel: m,
            inputGuide: C,
            children: k,
          })),
            (s[30] = m),
            (s[31] = G),
            (s[32] = k),
            (s[33] = A));
        else A = s[33];
        N = A;
        break bb0;
      }
    }
    ((s[23] = T), (s[24] = m), (s[25] = N));
  } else N = s[25];
  if (N !== EARLY_RETURN_SENTINEL) return N;
  let h, G;
  if (s[34] === MEMO_CACHE_SENTINEL)
    ((h = e(KeybindingHint, { chord: "escape", action: "dismiss" })),
      (G = e(EmptyStateMessage, {
        hint: "/goal <condition> to set one",
        children: "No goal set",
      })),
      (s[34] = h),
      (s[35] = G));
  else ((h = s[34]), (G = s[35]));
  let C;
  if (s[36] !== m)
    ((C = e(de, { title: "Goal", onCancel: m, inputGuide: h, children: G })),
      (s[36] = m),
      (s[37] = C));
  else C = s[37];
  return C;
}
function S($t) {
  let j = _(7),
    { label: I, children: P } = $t,
    w;
  if (j[0] !== I)
    ((w = e(o, {
      flexShrink: 0,
      children: r(t, { dimColor: !0, children: [I, ": "] }),
    })),
      (j[0] = I),
      (j[1] = w));
  else w = j[1];
  let v;
  if (j[2] !== P)
    ((v = e(o, { flexGrow: 1, children: e(t, { wrap: "wrap", children: P }) })),
      (j[2] = P),
      (j[3] = v));
  else v = j[3];
  let V;
  if (j[4] !== w || j[5] !== v)
    ((V = r(o, { flexDirection: "row", children: [w, v] })),
      (j[4] = w),
      (j[5] = v),
      (j[6] = V));
  else V = j[6];
  return V;
}
var Rt = async (u, f, l) => {
  let y = l.trim();
  if (y === "")
    return e(L, {
      messages: f.messages,
      onDone: () => u(void 0, { display: "skip" }),
    });
  if (isGoalClearKeyword(y)) {
    let n = clearSessionGoal(f);
    return (
      u(n === null ? "No goal set" : `Goal cleared: ${n}`, {
        display: "system",
      }),
      null
    );
  }
  if (y.length > MAX_GOAL_CONDITION_LENGTH)
    return (
      logFeatureSad("goal_set", "too_long"),
      u(`Goal condition is limited to ${MAX_GOAL_CONDITION_LENGTH} characters (got ${y.length})`, {
        display: "system",
      }),
      null
    );
  let a = setSessionGoal(y, f);
  if (a !== null) return (u(a, { display: "system" }), null);
  return (
    u(`Goal set: ${y}`, { shouldQuery: !0, metaMessages: [buildGoalHookPrompt(y)] }),
    null
  );
};
export { Rt as call };

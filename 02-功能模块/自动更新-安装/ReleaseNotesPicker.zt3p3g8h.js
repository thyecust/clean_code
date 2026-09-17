// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 254 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { cf } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { Ht } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { t$n, YQt, tWe, Qst } from "../发布日志-Changelog/发布日志-Changelog.2nyyps5n.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function q(L) {
  let [P, U] = L;
  return {
    label: `Version ${P}`,
    description: `${U.length} ${U.length === 1 ? "item" : "items"}`,
    value: P,
  };
}
var O = "__show_all__";
function formatVersion(s, n) {
  let i = `Version ${s}:`,
    g = n.map((a) => `\xB7 ${a}`).join(`
`);
  return `${i}
${g}`;
}
function formatAll(s) {
  return s
    .slice()
    .sort(([n], [i]) => (cf(n, i) ? 1 : -1))
    .map(([n, i]) => formatVersion(n, i)).join(`

`);
}
function y(s, n, i) {
  (n({ type: "append", messages: [Ht(s, "notice")] }),
    i(void 0, { display: "skip" }));
}
var ee = async (s, n) => {
  try {
    await withTimeout(YQt(n.storageV5), 500, "Timeout");
  } catch {}
  let i = await tWe(n.storageV5),
    g = Qst(i)
      .slice()
      .sort(([a], [S]) => (cf(a, S) ? -1 : 1));
  if (g.length === 0)
    return (y(`See the full changelog at: ${t$n}`, n.applyMessageOp, s), null);
  return e(ReleaseNotesPicker, { notes: g, applyMessageOp: n.applyMessageOp, onDone: s });
};
function ReleaseNotesPicker(L) {
  let f = _(19),
    { notes: l, applyMessageOp: R, onDone: c } = L;
  const X = `${l.length} versions`;
  let M;
  if (f[0] !== X)
    ((M = { label: "Show all", description: X, value: O }),
      (f[0] = X),
      (f[1] = M));
  else M = f[1];
  let N;
  if (f[2] !== l || f[3] !== M)
    ((N = [M, ...l.map(q)]), (f[2] = l), (f[3] = M), (f[4] = N));
  else N = f[4];
  let V = N,
    b = C(!1),
    T;
  if (f[5] !== R || f[6] !== l || f[7] !== c)
    ((T = function h(B) {
      if (b.current) {
        return;
      }
      if (((b.current = !0), B === O)) {
        y(formatAll(l), R, c);
        return;
      }
      let j = l.find((v) => {
        let [ne] = v;
        return ne === B;
      });
      if (!j) {
        c(void 0, { display: "skip" });
        return;
      }
      y(formatVersion(j[0], j[1]), R, c);
    }),
      (f[5] = R),
      (f[6] = l),
      (f[7] = c),
      (f[8] = T));
  else T = f[8];
  let h = T,
    v;
  if (f[9] !== c)
    ((v = function m() {
      ((b.current = !0), c(void 0, { display: "skip" }));
    }),
      (f[9] = c),
      (f[10] = v));
  else v = f[10];
  let m = v,
    G;
  if (f[11] === MEMO_CACHE_SENTINEL)
    ((G = e(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: e(t, {
        dimColor: !0,
        children: "Select a version to view its notes.",
      }),
    })),
      (f[11] = G));
  else G = f[11];
  let A;
  if (f[12] !== m || f[13] !== h || f[14] !== V)
    ((A = e(ve, {
      options: V,
      visibleOptionCount: 10,
      onChange: h,
      onCancel: m,
    })),
      (f[12] = m),
      (f[13] = h),
      (f[14] = V),
      (f[15] = A));
  else A = f[15];
  let E;
  if (f[16] !== m || f[17] !== A)
    ((E = r(de, { title: "Release notes", onCancel: m, children: [G, A] })),
      (f[16] = m),
      (f[17] = A),
      (f[18] = E));
  else E = f[18];
  return E;
}
export {
  ReleaseNotesPicker,
  ee as call,
  formatAll,
  formatVersion,
};

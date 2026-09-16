// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { b4t } from "./chunk-6smvq03f.js";
import { GSt } from "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { kat, $0e } from "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Vz } from "./chunk-4w3ae8h6.js";
import { XAe, xH } from "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { lft, hOe, Fze } from "./chunk-28p6k62j.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { P } from "../核心工具-路径与平台/chunk-13kdp2ag.js";
import { p } from "./chunk-2c9tjhwd.js";
F();
var T = { light: "#f9f9f7", dark: "#1f1f1e" };
function e$n(t, o, n) {
  if (!n) return;
  let i;
  if (t === "auto") {
    if (o === void 0) return;
    i = o;
  } else i = Fze(t);
  return GSt(i) ? T.light : T.dark;
}
function f() {
  let y = _(4),
    [l, x] = d(lft),
    S,
    k;
  if (y[0] === p)
    ((S = () => hOe(() => x(lft()))), (k = []), (y[0] = S), (y[1] = k));
  else ((S = y[0]), (k = y[1]));
  E(S, k);
  let N;
  if (y[2] !== l) ((N = e$n(kat(), l, b4t())), (y[2] = l), (y[3] = N));
  else N = y[3];
  return N;
}
function kIt(I) {
  let R = _(9),
    { children: u, mouseTracking: c, killRing: g } = I,
    h = f(),
    A;
  if (R[0] !== u || R[1] !== g)
    ((A = e($0e, { handle: g, children: u })),
      (R[0] = u),
      (R[1] = g),
      (R[2] = A));
  else A = R[2];
  let r = A;
  if (XAe()) {
    let m;
    if (R[3] !== c) ((m = c ?? xH()), (R[3] = c), (R[4] = m));
    else m = R[4];
    let v;
    if (R[5] !== h || R[6] !== m || R[7] !== r)
      ((v = e(Vz, { mouseTracking: m, background: h, children: r })),
        (R[5] = h),
        (R[6] = m),
        (R[7] = r),
        (R[8] = v));
    else v = R[8];
    return v;
  }
  return r;
}
function Zmr() {
  if (P() === "windows" || a.WT_SESSION)
    process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}
export { e$n, kIt, Zmr };

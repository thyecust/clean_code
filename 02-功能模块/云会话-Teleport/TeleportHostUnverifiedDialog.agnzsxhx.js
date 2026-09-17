// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 142 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ui, Gm, fa, $o } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function TeleportHostUnverifiedDialog(ie) {
  let i = _(52),
    { sessionRepo: f, rawRemoteUrl: u, onConfirm: B, onCancel: g } = ie,
    a = ui(),
    { refusedWithin: c, noteRefused: d, epoch: se } = $o(),
    Q;
  if (i[0] !== a || i[1] !== d || i[2] !== c)
    ((Q = function l() {
      if (a() || c()) {
        return (d(), !0);
      }
      return !1;
    }),
      (i[0] = a),
      (i[1] = d),
      (i[2] = c),
      (i[3] = Q));
  else Q = i[3];
  let l = Q,
    K = Gm(),
    L = fa(se),
    X = C(!1),
    w,
    v,
    y,
    b,
    R,
    h,
    k,
    x,
    S,
    A,
    D,
    E,
    I,
    P;
  if (
    i[4] !== a ||
    i[5] !== L.remountKey ||
    i[6] !== d ||
    i[7] !== g ||
    i[8] !== B ||
    i[9] !== u ||
    i[10] !== l ||
    i[11] !== c ||
    i[12] !== f ||
    i[13] !== K
  ) {
    let p = function p(ae) {
      return () => {
        if (a() || c()) {
          d();
          return;
        }
        if (X.current) {
          return;
        }
        ((X.current = !0), ae());
      };
    };
    v = de;
    y = "Teleport";
    b = p(g);
    R = "background";
    let n;
    if (i[28] !== u)
      ((n = r(t, {
        children: [
          "Couldn't verify your git remote host (remote is",
          " ",
          e(t, { bold: !0, children: u }),
          ").",
        ],
      })),
        (i[28] = u),
        (i[29] = n));
    else n = i[29];
    let s;
    if (i[30] !== f)
      ((s = r(t, {
        children: ["Proceed against ", e(t, { bold: !0, children: f }), "?"],
      })),
        (i[30] = f),
        (i[31] = s));
    else s = i[31];
    if (i[32] !== n || i[33] !== s)
      ((h = r(o, { flexDirection: "column", gap: 1, children: [n, s] })),
        (i[32] = n),
        (i[33] = s),
        (i[34] = h));
    else h = i[34];
    w = ConfirmPrompt;
    k = L.remountKey;
    x = l;
    S = K;
    A = !0;
    D = !0;
    E = "cancel";
    I = p(B);
    P = p(g);
    ((i[4] = a),
      (i[5] = L.remountKey),
      (i[6] = d),
      (i[7] = g),
      (i[8] = B),
      (i[9] = u),
      (i[10] = l),
      (i[11] = c),
      (i[12] = f),
      (i[13] = K),
      (i[14] = w),
      (i[15] = v),
      (i[16] = y),
      (i[17] = b),
      (i[18] = R),
      (i[19] = h),
      (i[20] = k),
      (i[21] = x),
      (i[22] = S),
      (i[23] = A),
      (i[24] = D),
      (i[25] = E),
      (i[26] = I),
      (i[27] = P));
  } else
    ((w = i[14]),
      (v = i[15]),
      (y = i[16]),
      (b = i[17]),
      (R = i[18]),
      (h = i[19]),
      (k = i[20]),
      (x = i[21]),
      (S = i[22]),
      (A = i[23]),
      (D = i[24]),
      (E = i[25]),
      (I = i[26]),
      (P = i[27]));
  let n;
  if (
    i[35] !== w ||
    i[36] !== k ||
    i[37] !== x ||
    i[38] !== S ||
    i[39] !== A ||
    i[40] !== D ||
    i[41] !== E ||
    i[42] !== I ||
    i[43] !== P
  )
    ((n = e(
      w,
      {
        refuseInput: x,
        openedAt: S,
        hideIndexes: A,
        cancelFirst: D,
        focus: E,
        onConfirm: I,
        onCancel: P,
      },
      k,
    )),
      (i[35] = w),
      (i[36] = k),
      (i[37] = x),
      (i[38] = S),
      (i[39] = A),
      (i[40] = D),
      (i[41] = E),
      (i[42] = I),
      (i[43] = P),
      (i[44] = n));
  else n = i[44];
  let s;
  if (
    i[45] !== v ||
    i[46] !== y ||
    i[47] !== b ||
    i[48] !== R ||
    i[49] !== h ||
    i[50] !== n
  )
    ((s = r(v, { title: y, onCancel: b, color: R, children: [h, n] })),
      (i[45] = v),
      (i[46] = y),
      (i[47] = b),
      (i[48] = R),
      (i[49] = h),
      (i[50] = n),
      (i[51] = s));
  else s = i[51];
  return s;
}
export { TeleportHostUnverifiedDialog };

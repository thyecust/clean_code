// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 120 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { eI } from "../../00-第三方库/_未识别/第三方库-其他/chunk-x46ksw6d.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { qp, ss } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function W() {}
function Y(yo) {
  return yo.length > 0;
}
function Z(Co, go) {
  return e(t, { children: Co }, go);
}
var n = {
  ios: { url: "https://apps.apple.com/app/claude-by-anthropic/id6473753684" },
  android: {
    url: "https://play.google.com/store/apps/details?id=com.anthropic.claude",
  },
};
function B(co) {
  let i = _(19),
    { onDone: m } = co,
    j;
  if (i[0] === MEMO_CACHE_SENTINEL) ((j = { ios: "", android: "" }), (i[0] = j));
  else j = i[0];
  let [s, lo] = d(j),
    G,
    I;
  if (i[1] === MEMO_CACHE_SENTINEL)
    ((G = () => {
      let w = async function w() {
        let [mo, so] = await Promise.all([
          eI(n.ios.url, { type: "utf8", errorCorrectionLevel: "L", margin: 2 }),
          eI(n.android.url, {
            type: "utf8",
            errorCorrectionLevel: "L",
            margin: 2,
          }),
        ]);
        lo({ ios: mo, android: so });
      };
      w().catch(W);
    }),
      (I = []),
      (i[1] = G),
      (i[2] = I));
  else ((G = i[1]), (I = i[2]));
  E(G, I);
  let z;
  if (i[3] !== m)
    ((z = () => {
      m();
    }),
      (i[3] = m),
      (i[4] = z));
  else z = i[4];
  let po = z,
    O;
  if (i[5] === MEMO_CACHE_SENTINEL) ((O = { context: "Confirmation" }), (i[5] = O));
  else O = i[5];
  useKeybinding("confirm:no", po, O);
  let Q;
  if (i[6] !== m)
    ((Q = function y(h) {
      if (h.key === "q" && !h.ctrl && !h.meta) (h.preventDefault(), m());
    }),
      (i[6] = m),
      (i[7] = Q));
  else Q = i[7];
  let y = Q,
    v;
  if (i[8] !== s.ios)
    ((v = e(ss, {
      title: "iOS",
      id: "ios",
      children: e(f, { qrCode: s.ios, url: n.ios.url }),
    })),
      (i[8] = s.ios),
      (i[9] = v));
  else v = i[9];
  let b;
  if (i[10] !== s.android)
    ((b = e(ss, {
      title: "Android",
      id: "android",
      children: e(f, { qrCode: s.android, url: n.android.url }),
    })),
      (i[10] = s.android),
      (i[11] = b));
  else b = i[11];
  let x;
  if (i[12] !== v || i[13] !== b)
    ((x = r(qp, { title: "Mobile", children: [v, b] })),
      (i[12] = v),
      (i[13] = b),
      (i[14] = x));
  else x = i[14];
  let T;
  if (i[15] === MEMO_CACHE_SENTINEL)
    ((T = e(o, {
      marginTop: 1,
      children: e(InputGuide, {
        children: r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: ["left", "right"], action: "switch" }),
            e(KeybindingHint, { chord: "escape", action: "close" }),
          ],
        }),
      }),
    })),
      (i[15] = T));
  else T = i[15];
  let U;
  if (i[16] !== y || i[17] !== x)
    ((U = e(Qr, {
      children: r(o, {
        flexDirection: "column",
        onKeyDown: y,
        children: [x, T],
      }),
    })),
      (i[16] = y),
      (i[17] = x),
      (i[18] = U));
  else U = i[18];
  return U;
}
function f(fo) {
  let N = _(11),
    { qrCode: K, url: L } = fo,
    R,
    k,
    q;
  if (N[0] !== K) {
    let uo = K.split(
      `
`,
    ).filter(Y);
    R = o;
    k = "column";
    q = uo.map(Z);
    ((N[0] = K), (N[1] = R), (N[2] = k), (N[3] = q));
  } else ((R = N[1]), (k = N[2]), (q = N[3]));
  let P;
  if (N[4] !== L)
    ((P = e(t, { dimColor: !0, children: L })), (N[4] = L), (N[5] = P));
  else P = N[5];
  let V;
  if (N[6] !== R || N[7] !== k || N[8] !== q || N[9] !== P)
    ((V = r(R, { flexDirection: k, children: [q, P] })),
      (N[6] = R),
      (N[7] = k),
      (N[8] = q),
      (N[9] = P),
      (N[10] = V));
  else V = N[10];
  return V;
}
async function no(a) {
  return e(B, { onDone: a });
}
export { no as call };

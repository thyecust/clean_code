// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 235 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Vhe, Khe } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { h0n } from "../权限系统/chunk-e4pfvp7x.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Xe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { M5 } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import { C2, JOe, omt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import { UA } from "../工具UI渲染/chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import { p, en } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var nt = new RegExp(`^<${Vhe}\\s+source="([^"]*)"([^>]*)>\\n?`),
  f = `</${Vhe}>`,
  w = `
${f}`,
  ot = /\buser="([^"]+)"/,
  J = [
    `

${JOe(!1)}${omt}`,
    `

${JOe(!1)}`,
    `

${JOe(!0)}${omt}`,
    `

${JOe(!0)}`,
  ];
function Q(c) {
  let i = c.lastIndexOf(":");
  return i === -1 ? c : c.slice(i + 1);
}
function V(c) {
  let i = "",
    s = c;
  if (s.startsWith(C2)) {
    let n = s.indexOf(`
`);
    if (n !== -1 && s.startsWith(Khe, n + 1))
      ((i = s.slice(0, n)), (s = s.slice(n + 1)));
  }
  let m = nt.exec(s);
  if (!m) return null;
  let [y, x = "", R] = m;
  return { lead: i, rest: s, open: y, source: x, user: ot.exec(R ?? "")?.[1] };
}
var Y = 60;
function st(gt) {
  let u = _(34),
    { addMargin: W, param: $t, followsSpeakerLabel: X } = gt,
    { text: T } = $t,
    b = X === void 0 ? !1 : X,
    O,
    U,
    B,
    G,
    M,
    A,
    E,
    D,
    F,
    I,
    K;
  if (u[0] !== W || u[1] !== b || u[2] !== T) {
    I = en;
    bb0: {
      let z = V(T);
      if (!z) {
        I = b
          ? e(UA, { text: T.trim() })
          : e(o, {
              marginTop: W ? 1 : 0,
              children: e(t, { children: T.trim() }),
            });
        break bb0;
      }
      let { open: dt, source: L, user: tt } = z;
      let { lead: g, rest: P } = z;
      let H = P.lastIndexOf(f) + f.length;
      if (H > f.length - 1) {
        let xt = P.slice(H);
        if (J.includes(xt)) P = P.slice(0, H);
      }
      let rt = M5(L);
      if (g === `${C2}${rt} while you were working:` || g === `${C2}${rt}:`)
        g = "";
      let j = P.slice(dt.length);
      let et = j.trimEnd();
      if (et.endsWith(w)) j = et.slice(0, -w.length);
      if (b) {
        const a = `${
          g
            ? `${g}
`
            : ""
        }${j}`;
        let l;
        if (u[14] !== a) ((l = a.trim()), (u[14] = a), (u[15] = l));
        else l = u[15];
        let k;
        if (u[16] !== l) ((k = e(UA, { text: l })), (u[16] = l), (u[17] = k));
        else k = u[17];
        I = k;
        break bb0;
      }
      let Rt = `${g ? `${g} ` : ""}${j}`.trim().replace(/\s+/g, " ");
      K = Xe(Rt, Y);
      B = o;
      F = W ? 1 : 0;
      U = t;
      if (u[18] === p)
        ((E = e(t, {
          "aria-label": "inbound:",
          color: "suggestion",
          children: h0n,
        })),
          (u[18] = E));
      else E = u[18];
      D = " ";
      O = t;
      G = !0;
      M = Q(M5(L));
      A = tt ? ` \xB7 ${M5(tt)}` : "";
    }
    ((u[0] = W),
      (u[1] = b),
      (u[2] = T),
      (u[3] = O),
      (u[4] = U),
      (u[5] = B),
      (u[6] = G),
      (u[7] = M),
      (u[8] = A),
      (u[9] = E),
      (u[10] = D),
      (u[11] = F),
      (u[12] = I),
      (u[13] = K));
  } else
    ((O = u[3]),
      (U = u[4]),
      (B = u[5]),
      (G = u[6]),
      (M = u[7]),
      (A = u[8]),
      (E = u[9]),
      (D = u[10]),
      (F = u[11]),
      (I = u[12]),
      (K = u[13]));
  if (I !== en) return I;
  let a;
  if (u[19] !== O || u[20] !== G || u[21] !== M || u[22] !== A)
    ((a = r(O, { dimColor: G, children: [M, A, ":"] })),
      (u[19] = O),
      (u[20] = G),
      (u[21] = M),
      (u[22] = A),
      (u[23] = a));
  else a = u[23];
  let l;
  if (u[24] !== U || u[25] !== a || u[26] !== E || u[27] !== D || u[28] !== K)
    ((l = r(U, { children: [E, D, a, " ", K] })),
      (u[24] = U),
      (u[25] = a),
      (u[26] = E),
      (u[27] = D),
      (u[28] = K),
      (u[29] = l));
  else l = u[29];
  let k;
  if (u[30] !== B || u[31] !== l || u[32] !== F)
    ((k = e(B, { marginTop: F, children: l })),
      (u[30] = B),
      (u[31] = l),
      (u[32] = F),
      (u[33] = k));
  else k = u[33];
  return k;
}
export { st as UserChannelMessage };

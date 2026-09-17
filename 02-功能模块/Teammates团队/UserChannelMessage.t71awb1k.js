// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 235 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { CHANNEL_TAG, CHANNEL_SOURCE_OPEN_TAG } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { INBOUND_ARROW_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { unescapeHtmlAttribute } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/核心工具-未归类/queued-message-context.js";
import "../../01-核心基础设施/核心工具-未归类/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import { EXTERNAL_MESSAGE_PREFIX, getExternalSourceWarning, EXTERNAL_MESSAGE_REPLY_HINT } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/核心工具-未归类/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/markdown-ansi-renderer.js";
import "../语法高亮-Markdown渲染/markdown-renderer.js";
import { TruncatedText } from "../工具UI渲染/chunk-g4k5jjwt.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var nt = new RegExp(`^<${CHANNEL_TAG}\\s+source="([^"]*)"([^>]*)>\\n?`),
  f = `</${CHANNEL_TAG}>`,
  w = `
${f}`,
  ot = /\buser="([^"]+)"/,
  J = [
    `

${getExternalSourceWarning(!1)}${EXTERNAL_MESSAGE_REPLY_HINT}`,
    `

${getExternalSourceWarning(!1)}`,
    `

${getExternalSourceWarning(!0)}${EXTERNAL_MESSAGE_REPLY_HINT}`,
    `

${getExternalSourceWarning(!0)}`,
  ];
function Q(c) {
  let i = c.lastIndexOf(":");
  return i === -1 ? c : c.slice(i + 1);
}
function V(c) {
  let i = "",
    s = c;
  if (s.startsWith(EXTERNAL_MESSAGE_PREFIX)) {
    let n = s.indexOf(`
`);
    if (n !== -1 && s.startsWith(CHANNEL_SOURCE_OPEN_TAG, n + 1))
      ((i = s.slice(0, n)), (s = s.slice(n + 1)));
  }
  let m = nt.exec(s);
  if (!m) return null;
  let [y, x = "", R] = m;
  return { lead: i, rest: s, open: y, source: x, user: ot.exec(R ?? "")?.[1] };
}
var Y = 60;
function UserChannelMessage(gt) {
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
    I = EARLY_RETURN_SENTINEL;
    bb0: {
      let z = V(T);
      if (!z) {
        I = b
          ? e(TruncatedText, { text: T.trim() })
          : e(Box, {
              marginTop: W ? 1 : 0,
              children: e(Text, { children: T.trim() }),
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
      let rt = unescapeHtmlAttribute(L);
      if (g === `${EXTERNAL_MESSAGE_PREFIX}${rt} while you were working:` || g === `${EXTERNAL_MESSAGE_PREFIX}${rt}:`)
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
        if (u[16] !== l) ((k = e(TruncatedText, { text: l })), (u[16] = l), (u[17] = k));
        else k = u[17];
        I = k;
        break bb0;
      }
      let Rt = `${g ? `${g} ` : ""}${j}`.trim().replace(/\s+/g, " ");
      K = truncateToWidth(Rt, Y);
      B = Box;
      F = W ? 1 : 0;
      U = Text;
      if (u[18] === MEMO_CACHE_SENTINEL)
        ((E = e(Text, {
          "aria-label": "inbound:",
          color: "suggestion",
          children: INBOUND_ARROW_GLYPH,
        })),
          (u[18] = E));
      else E = u[18];
      D = " ";
      O = Text;
      G = !0;
      M = Q(unescapeHtmlAttribute(L));
      A = tt ? ` \xB7 ${unescapeHtmlAttribute(tt)}` : "";
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
  if (I !== EARLY_RETURN_SENTINEL) return I;
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
export { UserChannelMessage };

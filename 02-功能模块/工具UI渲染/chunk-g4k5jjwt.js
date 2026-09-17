// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { truncateToCodeUnits, takeLastCodeUnits, removeLoneSurrogates, countOccurrences, CONTROL_CHARS_REGEX } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { isUltrathinkEnabled, hasUltrathinkTrigger, findUltrathinkMatches, pickRainbowColor } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useQueuedMessageContext } from "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { Markdown } from "../语法高亮-Markdown渲染/markdown-renderer.js";
import { Divider } from "../../01-核心基础设施/共享小工具-未细化/divider.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { getSystemLocale, getTimeFormatConfig, formatDateWithPreset, formatDateWithPattern } from "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { withTimeZone, getDateTimeFormat } from "../../01-核心基础设施/共享小工具-未细化/intl-text-utils.js";
import { EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var se = /(?![\u200C\u200D])[\p{Cf}\u2028\u2029]/gu,
  he = /[\u001b\u0080-\u009f]/g,
  ye = 8;
function y(n) {
  let i = n
    .replace(he, "")
    .replace(CONTROL_CHARS_REGEX, "")
    .replace(/[\v\f\r]/g, "");
  for (let c = 0; c < ye; c++) {
    let s = removeLoneSurrogates(i.replace(se, ""));
    if (s === i) return i;
    i = s;
  }
  return i.replace(/[\ud800-\udfff]/g, "").replace(se, "");
}
function formatTimestamp(n, i = new Date()) {
  let c = new Date(n);
  if (Number.isNaN(c.getTime())) return "";
  let s = getSystemLocale(),
    a = getTimeFormatConfig(),
    { timeZone: d } = a,
    m = ae(i, d) - ae(c, d),
    w = Math.round(m / 86400000),
    u = "older";
  if (w === 0) u = "today";
  else if (w > 0 && w < 7) u = "week";
  if (a.kind === "preset") return formatDateWithPreset(a, Re[u], s, c);
  let M = formatDateWithPattern(a.pattern, d, c);
  if (u === "today") return M;
  let h = getDateTimeFormat(s, withTimeZone(Te[u], d)).format(c);
  return u === "week" ? `${h} ${M}` : `${h}, ${M}`;
}
var Re = {
    today: { hour: "numeric", minute: "2-digit" },
    week: { weekday: "long", hour: "numeric", minute: "2-digit" },
    older: {
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    },
  },
  Te = {
    week: { weekday: "long" },
    older: { weekday: "long", month: "short", day: "numeric" },
  };
function ae(n, i) {
  if (!i) return new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
  let c = getDateTimeFormat("en-US", withTimeZone(Ae, i)).formatToParts(n),
    s = {};
  for (let a of c) s[a.type] = a.value;
  return Date.UTC(Number(s.year), Number(s.month) - 1, Number(s.day));
}
var Ae = { year: "numeric", month: "2-digit", day: "2-digit" };
var Se = 1e4,
  ke = 2500,
  $e = 2500;
function truncateMiddleText(n) {
  if (n.length <= Se) return n;
  let i = truncateToCodeUnits(n, ke),
    c = takeLastCodeUnits(n, $e),
    s =
      countOccurrences(
        n,
        `
`,
        i.length,
      ) -
      countOccurrences(
        c,
        `
`,
      ),
    a = n.length - i.length - c.length;
  return { head: i, hiddenLines: s, hiddenChars: a, tail: c };
}
var me = 4000;
function UserPromptText(Je) {
  let T = _(33),
    { text: l, useBriefLayout: Ve, timestamp: K, bodyOnly: De } = Je,
    R = De === void 0 ? !1 : De,
    F = useQueuedMessageContext(),
    C = F?.isQueued ?? !1,
    f = typeof l === "object",
    Pe;
  if (T[0] !== C || T[1] !== l || T[2] !== f)
    ((Pe = !f && !C && l.length <= me && !(isUltrathinkEnabled() && hasUltrathinkTrigger(l))),
      (T[0] = C),
      (T[1] = l),
      (T[2] = f),
      (T[3] = Pe));
  else Pe = T[3];
  let I = Pe,
    p = F?.selectionHighlight === "on";
  if (Ve || R) {
    let b;
    if (T[4] !== K) ((b = K ? formatTimestamp(K) : ""), (T[4] = K), (T[5] = b));
    else b = T[5];
    let Z = b;
    let O = p ? "suggestion" : C ? "subtle" : "text";
    const A = R ? 0 : 2;
    let S;
    if (T[6] !== R || T[7] !== C || T[8] !== p || T[9] !== Z)
      ((S = R
        ? null
        : r(Box, {
            flexDirection: "row",
            children: [
              p
                ? r(Text, {
                    "aria-label": "selected:",
                    color: "suggestion",
                    children: [figures.pointer, " "],
                  })
                : null,
              e(Text, {
                color: p ? "suggestion" : C ? "subtle" : "briefLabelYou",
                children: "You",
              }),
              Z ? r(Text, { dimColor: !0, children: [" ", Z] }) : null,
            ],
          })),
        (T[6] = R),
        (T[7] = C),
        (T[8] = p),
        (T[9] = Z),
        (T[10] = S));
    else S = T[10];
    let G;
    if (T[11] !== R || T[12] !== I || T[13] !== l || T[14] !== O || T[15] !== f)
      ((G = f
        ? r(N, {
            children: [
              e(Text, { color: O, children: l.head }),
              e(g, { hiddenLines: l.hiddenLines, indent: R ? 0 : 2 }),
              e(Text, { color: O, children: l.tail }),
            ],
          })
        : I
          ? e(Markdown, { promptMode: !0, color: O, children: l })
          : e(Text, { color: O, children: l })),
        (T[11] = R),
        (T[12] = I),
        (T[13] = l),
        (T[14] = O),
        (T[15] = f),
        (T[16] = G));
    else G = T[16];
    let we;
    if (T[17] !== A || T[18] !== S || T[19] !== G)
      ((we = r(Box, {
        flexDirection: "column",
        paddingLeft: A,
        children: [S, G],
      })),
        (T[17] = A),
        (T[18] = S),
        (T[19] = G),
        (T[20] = we));
    else we = T[20];
    return we;
  }
  let ce = 3 + (F?.paddingWidth ?? 0),
    x = p ? "suggestion" : "text",
    b;
  if (T[21] !== F?.selectionHighlight || T[22] !== p)
    ((b = e(Box, {
      flexShrink: 0,
      children:
        F?.selectionHighlight === "off"
          ? e(Text, { children: "  " })
          : r(Text, {
              "aria-label": p ? "selected:" : "you:",
              color: p ? "suggestion" : "subtle",
              children: [figures.pointer, " "],
            }),
    })),
      (T[21] = F?.selectionHighlight),
      (T[22] = p),
      (T[23] = b));
  else b = T[23];
  let A;
  if (T[24] !== ce || T[25] !== I || T[26] !== l || T[27] !== x || T[28] !== f)
    ((A = f
      ? r(Box, {
          flexDirection: "column",
          children: [
            e(P, { text: l.head, color: x }),
            e(g, { hiddenLines: l.hiddenLines, indent: ce }),
            e(P, { text: l.tail, color: x }),
          ],
        })
      : I
        ? e(Markdown, { promptMode: !0, color: x, children: l })
        : e(P, { text: l, color: x })),
      (T[24] = ce),
      (T[25] = I),
      (T[26] = l),
      (T[27] = x),
      (T[28] = f),
      (T[29] = A));
  else A = T[29];
  let S;
  if (T[30] !== b || T[31] !== A)
    ((S = r(Box, { flexDirection: "row", children: [b, A] })),
      (T[30] = b),
      (T[31] = A),
      (T[32] = S));
  else S = T[32];
  return S;
}
function g(je) {
  let Ce = _(7),
    { hiddenLines: Y, hiddenChars: U, indent: le } = je,
    J = `${Y} ${Y === 1 ? "line" : "lines"}`,
    _e;
  if (Ce[0] !== U || Ce[1] !== Y || Ce[2] !== J)
    ((_e =
      U === void 0
        ? `(${J} hidden)`
        : Y === 0
          ? `(~${q(U)} KB hidden)`
          : `(${J}, ~${q(U)} KB hidden)`),
      (Ce[0] = U),
      (Ce[1] = Y),
      (Ce[2] = J),
      (Ce[3] = _e));
  else _e = Ce[3];
  let de = _e,
    be;
  if (Ce[4] !== le || Ce[5] !== de)
    ((be = e(Divider, {
      title: de,
      titleAlign: "start",
      color: "subtle",
      padding: le,
    })),
      (Ce[4] = le),
      (Ce[5] = de),
      (Ce[6] = be));
  else be = Ce[6];
  return be;
}
function q(n) {
  return Math.max(1, Math.round(n / 1000));
}
function P(ve) {
  let ze = _(4),
    { text: D, color: X } = ve,
    Ne,
    ue;
  if (ze[0] !== X || ze[1] !== D) {
    ue = EARLY_RETURN_SENTINEL;
    bb0: {
      let Le = isUltrathinkEnabled() ? findUltrathinkMatches(D) : [];
      if (Le.length === 0) {
        ue = e(Text, { color: X, children: D });
        break bb0;
      }
      let V = [];
      let k = 0;
      for (const E of Le) {
        if (E.start > k)
          V.push(
            e(Text, { color: X, children: D.slice(k, E.start) }, `plain-${k}`),
          );
        for (let Q = E.start; Q < E.end; Q++)
          V.push(e(Text, { color: pickRainbowColor(Q - E.start), children: D[Q] }, `rb-${Q}`));
        k = E.end;
      }
      if (k < D.length)
        V.push(e(Text, { color: X, children: D.slice(k) }, `plain-${k}`));
      Ne = e(Text, { children: V });
    }
    ((ze[0] = X), (ze[1] = D), (ze[2] = Ne), (ze[3] = ue));
  } else ((Ne = ze[2]), (ue = ze[3]));
  if (ue !== EARLY_RETURN_SENTINEL) return ue;
  return Ne;
}
function TruncatedText(st) {
  let fe = _(19),
    { text: pe } = st,
    j,
    v,
    z,
    W,
    ee,
    te,
    ne,
    ge;
  if (fe[0] !== pe) {
    ge = EARLY_RETURN_SENTINEL;
    bb0: {
      let H = truncateMiddleText(pe);
      if (typeof H === "string") {
        ge = e(Text, { wrap: "wrap", children: y(H) });
        break bb0;
      }
      v = Box;
      ee = "column";
      te = e(Text, { wrap: "wrap", children: y(H.head) });
      ne = e(g, {
        hiddenLines: H.hiddenLines,
        hiddenChars: H.hiddenChars,
        indent: 0,
      });
      j = Text;
      z = "wrap";
      W = y(H.tail);
    }
    ((fe[0] = pe),
      (fe[1] = j),
      (fe[2] = v),
      (fe[3] = z),
      (fe[4] = W),
      (fe[5] = ee),
      (fe[6] = te),
      (fe[7] = ne),
      (fe[8] = ge));
  } else
    ((j = fe[1]),
      (v = fe[2]),
      (z = fe[3]),
      (W = fe[4]),
      (ee = fe[5]),
      (te = fe[6]),
      (ne = fe[7]),
      (ge = fe[8]));
  if (ge !== EARLY_RETURN_SENTINEL) return ge;
  let re;
  if (fe[9] !== j || fe[10] !== z || fe[11] !== W)
    ((re = e(j, { wrap: z, children: W })),
      (fe[9] = j),
      (fe[10] = z),
      (fe[11] = W),
      (fe[12] = re));
  else re = fe[12];
  let Me;
  if (
    fe[13] !== v ||
    fe[14] !== ee ||
    fe[15] !== te ||
    fe[16] !== ne ||
    fe[17] !== re
  )
    ((Me = r(v, { flexDirection: ee, children: [te, ne, re] })),
      (fe[13] = v),
      (fe[14] = ee),
      (fe[15] = te),
      (fe[16] = ne),
      (fe[17] = re),
      (fe[18] = Me));
  else Me = fe[18];
  return Me;
}
export { formatTimestamp, truncateMiddleText, UserPromptText, TruncatedText };

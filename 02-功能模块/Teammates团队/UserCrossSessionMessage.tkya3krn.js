// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 240 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { uCe, NGt, Ij } from "./chunk-g6nvp9mm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { shouldExpandContent } from "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import { FT, uf } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import { js } from "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import { resolveAgentColor, CollapsedMessagesHint } from "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import { TruncatedText } from "../工具UI渲染/chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import { figures } from "./chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var g = "</cross-session-message>",
  B = "peer";
function v(s) {
  let a = Ij.find((N) => s.startsWith(N)),
    h =
      (a ? s.slice(a.length) : s).match(
        /^<cross-session-message\b([^>]*)>/,
      )?.[1] ?? "",
    y = h.match(/\bfrom="([^"]+)"/)?.[1],
    k = h.match(/\bfrom-name="([^"]+)"/)?.[1];
  return K(k, y);
}
function K(s, a) {
  return (s && FT(s)) || (a && FT(S(a))) || B;
}
function UserCrossSessionMessage(se) {
  let i = _(23),
    {
      addMargin: M,
      param: re,
      hostInjected: W,
      verbose: te,
      isTranscriptMode: ne,
      followsSpeakerLabel: z,
    } = se,
    { text: u } = re,
    ae = z === void 0 ? !1 : z,
    ie = shouldExpandContent(te, ne),
    f,
    F;
  if (i[0] !== W || i[1] !== u) {
    let d = u;
    let O = Ij.find((ce) => d.startsWith(ce));
    if (O) d = d.slice(O.length);
    let n;
    if (i[4] !== u) ((n = v(u)), (i[4] = u), (i[5] = n));
    else n = i[5];
    f = n;
    let j = d.lastIndexOf(g) + g.length;
    if (j > g.length - 1) {
      let q = d.slice(j);
      if (uCe.includes(q) || (W === !0 && NGt.includes(q))) d = d.slice(0, j);
    }
    let x;
    if (i[6] === MEMO_CACHE_SENTINEL) ((x = /\n<\/cross-session-message>$/), (i[6] = x));
    else x = i[6];
    F = d.replace(/^<cross-session-message[^>]*>\n/, "").replace(x, "");
    ((i[0] = W), (i[1] = u), (i[2] = f), (i[3] = F));
  } else ((f = i[2]), (F = i[3]));
  let m = F;
  if (ae) {
    let n;
    if (i[7] !== m) ((n = e(TruncatedText, { text: m })), (i[7] = m), (i[8] = n));
    else n = i[8];
    return n;
  }
  if (!ie) {
    let n;
    if (i[9] !== M || i[10] !== f || i[11] !== m)
      ((n = e(CollapsedMessagesHint, { displayName: f, addMargin: M, fallbackLabel: B, body: m })),
        (i[9] = M),
        (i[10] = f),
        (i[11] = m),
        (i[12] = n));
    else n = i[12];
    return n;
  }
  const n = M ? 1 : 0;
  let x;
  if (i[13] === MEMO_CACHE_SENTINEL) ((x = resolveAgentColor(void 0)), (i[13] = x));
  else x = i[13];
  let H;
  if (i[14] === MEMO_CACHE_SENTINEL)
    ((H = e(t, { "aria-hidden": !0, children: figures.pointer })), (i[14] = H));
  else H = i[14];
  let T;
  if (i[15] !== f)
    ((T = r(t, { color: x, children: ["@ ", f, H] })),
      (i[15] = f),
      (i[16] = T));
  else T = i[16];
  let w;
  if (i[17] !== m)
    ((w = e(o, {
      paddingLeft: 2,
      children: e(js, { stripPromptTags: !1, children: m }),
    })),
      (i[17] = m),
      (i[18] = w));
  else w = i[18];
  let J;
  if (i[19] !== n || i[20] !== T || i[21] !== w)
    ((J = r(o, {
      flexDirection: "column",
      marginTop: n,
      width: "100%",
      children: [T, w],
    })),
      (i[19] = n),
      (i[20] = T),
      (i[21] = w),
      (i[22] = J));
  else J = i[22];
  return J;
}
function S(s) {
  let { scheme: a, target: l } = uf(s);
  switch (a) {
    case "uds":
      return l
        .slice(Math.max(l.lastIndexOf("/"), l.lastIndexOf("\\")) + 1)
        .replace(/\.sock$/, "");
    case "bridge":
      return "(untitled)";
    case "did":
    case "other":
      return s;
  }
}
export { UserCrossSessionMessage };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 229 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x, kr } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { Ao } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { E9e, A9e } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { OM, PVe, Ngt, Lr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { YFe, JFe } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Ea } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { Ac, vh, Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import { Ch } from "../语法高亮-Markdown渲染/chunk-mnn6q099.js";
import { Pg } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import { FB, wWe } from "../Diff引擎/chunk-arr1hvsk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bhcz98rd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { isAbsolute as je, relative as ee, resolve as Ne } from "path";
function Re(i, a, s = 1 / 0) {
  let l = a <= 0 || !Number.isFinite(a),
    f = 0,
    c = 0;
  while (c <= i.length) {
    let u = i.indexOf(
        `
`,
        c,
      ),
      k = u === -1 ? i.substring(c) : i.substring(c, u);
    if (l) f++;
    else {
      let w = E9e(k);
      f += w === 0 ? 1 : Math.ceil(w / a);
    }
    if (f > s) return f;
    if (u === -1) break;
    c = u + 1;
  }
  return f;
}
function re(i, a, s) {
  return Re(i, a, s) > s;
}
var b = 10,
  R = `
`;
function O(i) {
  let a = i.split(R);
  return i.endsWith(R) ? a.length - 1 : a.length;
}
function me(i, a) {
  let s = A9e(i, a).height;
  return i.endsWith(R) ? s - 1 : s;
}
function N() {
  let mt = _(1),
    Te;
  if (mt[0] === p)
    ((Te = e(t, {
      dimColor: !0,
      children: " \u2014 previous content replaced (no diff shown)",
    })),
      (mt[0] = Te));
  else Te = mt[0];
  return Te;
}
function he(gt) {
  let g = _(37),
    { filePath: D, content: Y, verbose: m, replacedUndiffedContent: Fe } = gt,
    oe = Fe === void 0 ? !1 : Fe,
    { columns: ht } = Se(),
    v = Math.max(1, ht - 12),
    U = Y || "(No content)",
    ke;
  if (g[0] !== Y) ((ke = O(Y)), (g[0] = Y), (g[1] = ke));
  else ke = g[1];
  let M = ke,
    we;
  if (g[2] !== U || g[3] !== v || g[4] !== m)
    ((we = m
      ? U
      : U.split(R)
          .slice(0, b)
          .join(R)
          .slice(0, b * (v + 1))),
      (g[2] = U),
      (g[3] = v),
      (g[4] = m),
      (g[5] = we));
  else we = g[5];
  let ne = we,
    ie = m ? 0 : me(U, v) - b,
    q;
  if (g[6] !== M)
    ((q = e(t, { bold: !0, children: M })), (g[6] = M), (g[7] = q));
  else q = g[7];
  let z;
  if (g[8] !== M) ((z = x(M, "line")), (g[8] = M), (g[9] = z));
  else z = g[9];
  let A;
  if (g[10] !== D || g[11] !== m)
    ((A = m ? D : ee(Q(), D)), (g[10] = D), (g[11] = m), (g[12] = A));
  else A = g[12];
  let G;
  if (g[13] !== A)
    ((G = e(t, { bold: !0, children: A })), (g[13] = A), (g[14] = G));
  else G = g[14];
  let J;
  if (g[15] !== oe) ((J = oe && e(N, {})), (g[15] = oe), (g[16] = J));
  else J = g[16];
  let K;
  if (g[17] !== q || g[18] !== z || g[19] !== G || g[20] !== J)
    ((K = r(t, { children: ["Wrote ", q, " ", z, " to", " ", G, J] })),
      (g[17] = q),
      (g[18] = z),
      (g[19] = G),
      (g[20] = J),
      (g[21] = K));
  else K = g[21];
  const se = m ? void 0 : "hidden",
    ae = m ? void 0 : b;
  let Z;
  if (g[22] !== ne || g[23] !== D || g[24] !== v)
    ((Z = e(Ch, { code: ne, filePath: D, width: v })),
      (g[22] = ne),
      (g[23] = D),
      (g[24] = v),
      (g[25] = Z));
  else Z = g[25];
  let E;
  if (g[26] !== se || g[27] !== ae || g[28] !== Z)
    ((E = e(o, {
      flexDirection: "column",
      overflowY: se,
      maxHeight: ae,
      children: Z,
    })),
      (g[26] = se),
      (g[27] = ae),
      (g[28] = Z),
      (g[29] = E));
  else E = g[29];
  let I;
  if (g[30] !== ie || g[31] !== m)
    ((I = !m && e(vh, { count: ie, expandable: !0 })),
      (g[30] = ie),
      (g[31] = m),
      (g[32] = I));
  else I = g[32];
  let De;
  if (g[33] !== E || g[34] !== I || g[35] !== K)
    ((De = e(xe, {
      children: r(o, { flexDirection: "column", children: [K, E, I] }),
    })),
      (g[33] = E),
      (g[34] = I),
      (g[35] = K),
      (g[36] = De));
  else De = g[36];
  return De;
}
function be({ type: i, content: a, structuredPatch: s, originalFile: l }) {
  return (
    i === "update" &&
    Array.isArray(s) &&
    s.length === 0 &&
    l === null &&
    typeof a === "string" &&
    a !== ""
  );
}
function lt(i, { columns: a }) {
  let { type: s, content: l } = i;
  if (s !== "create" && !be(i)) return !1;
  if (typeof l !== "string") return !1;
  let f = l.endsWith(R) ? b + 1 : b;
  return re(l, Math.max(1, a - 12), f);
}
function ct(i, { verbose: a }) {
  if (!i.file_path) return null;
  if (i.file_path.startsWith(Ea())) return "";
  return e(Pg, {
    filePath: i.file_path,
    children: a ? i.file_path : Ao(i.file_path),
  });
}
function ft({ file_path: i, content: a }, { style: s, verbose: l }) {
  return e(ye, { filePath: i, content: a, style: s, verbose: l });
}
function ye(bt) {
  let H = _(20),
    { filePath: y, content: P, style: le, verbose: W } = bt,
    ve;
  if (H[0] !== P || H[1] !== y)
    ((ve = () => ge(y, P)), (H[0] = P), (H[1] = y), (H[2] = ve));
  else ve = H[2];
  let [ce] = d(ve),
    Ce;
  if (H[3] !== P) ((Ce = kr(P)), (H[3] = P), (H[4] = Ce));
  else Ce = H[4];
  let L = Ce,
    Me;
  if (H[5] !== P || H[6] !== y || H[7] !== L || H[8] !== W)
    ((Me = e(FB, {
      file_path: y,
      operation: "write",
      content: P,
      firstLine: L,
      verbose: W,
    })),
      (H[5] = P),
      (H[6] = y),
      (H[7] = L),
      (H[8] = W),
      (H[9] = Me));
  else Me = H[9];
  let j = Me,
    X;
  if (
    H[10] !== j ||
    H[11] !== ce ||
    H[12] !== y ||
    H[13] !== L ||
    H[14] !== le ||
    H[15] !== W
  )
    ((X = e(te, {
      promise: ce,
      filePath: y,
      firstLine: L,
      createFallback: j,
      style: le,
      verbose: W,
    })),
      (H[10] = j),
      (H[11] = ce),
      (H[12] = y),
      (H[13] = L),
      (H[14] = le),
      (H[15] = W),
      (H[16] = X));
  else X = H[16];
  let We;
  if (H[17] !== j || H[18] !== X)
    ((We = e(Dn, { fallback: j, children: X })),
      (H[17] = j),
      (H[18] = X),
      (H[19] = We));
  else We = H[19];
  return We;
}
function te(yt) {
  let Le = _(8),
    {
      promise: xt,
      filePath: fe,
      firstLine: pe,
      createFallback: Pt,
      style: ue,
      verbose: de,
    } = yt,
    T = kn(xt);
  if (T.type === "create") {
    return Pt;
  }
  if (T.type === "error") {
    let S;
    if (Le[0] === p)
      ((S = e(xe, { children: e(t, { children: "(No changes)" }) })),
        (Le[0] = S));
    else S = Le[0];
    return S;
  }
  let S;
  if (
    Le[1] !== T.oldContent ||
    Le[2] !== T.patch ||
    Le[3] !== fe ||
    Le[4] !== pe ||
    Le[5] !== ue ||
    Le[6] !== de
  )
    ((S = e(FB, {
      file_path: fe,
      operation: "update",
      patch: T.patch,
      firstLine: pe,
      fileContent: T.oldContent,
      style: ue,
      verbose: de,
    })),
      (Le[1] = T.oldContent),
      (Le[2] = T.patch),
      (Le[3] = fe),
      (Le[4] = pe),
      (Le[5] = ue),
      (Le[6] = de),
      (Le[7] = S));
  else S = Le[7];
  return S;
}
async function ge(i, a) {
  try {
    let s = je(i) ? i : Ne(Q(), i),
      l = await PVe(s);
    if (l === null) return { type: "create" };
    let f;
    try {
      f = await Ngt(l);
    } finally {
      await l.close();
    }
    if (f === null) return { type: "create" };
    return {
      type: "update",
      patch: OM({
        filePath: i,
        fileContents: f,
        edits: [{ old_string: f, new_string: a, replace_all: !1 }],
      }),
      oldContent: f,
    };
  } catch (s) {
    if (Po(s))
      n(`Failed to load rejection diff for ${i}: ${s.message}`, {
        level: "error",
      });
    else h(s);
    return { type: "error" };
  }
}
function pt(i, { verbose: a }) {
  if (!a && typeof i === "string" && Lr(i, "tool_use_error"))
    return e(xe, {
      children: e(t, { color: "error", children: "Error writing file" }),
    });
  return e(Yd, { result: i, verbose: a });
}
function ut(i, a, { style: s, verbose: l }) {
  return Pe(i, a, { style: s, verbose: l });
}
function Pe(i, a, { style: s, verbose: l, replacedUndiffedContent: f = !1 }) {
  let {
    filePath: c = "",
    content: u,
    structuredPatch: k,
    type: w,
    originalFile: B,
  } = i;
  if (!c) return null;
  switch (w) {
    case "create": {
      if (c.startsWith(Ea()) && !l) {
        if (s !== "condensed")
          return e(xe, {
            children: e(t, { dimColor: !0, children: "/plan to preview" }),
          });
      } else if (s === "condensed" && !l) {
        let C = O(u);
        return r(t, {
          children: [
            "Wrote ",
            e(t, { bold: !0, children: C }),
            " ",
            x(C, "line"),
            " to",
            " ",
            e(t, { bold: !0, children: ee(Q(), c) }),
            f && e(N, {}),
          ],
        });
      } else if (!l && (YFe(c) || JFe(c))) {
        let C = O(u);
        return e(xe, {
          children: r(t, {
            children: [
              "Wrote ",
              e(t, { bold: !0, children: C }),
              " ",
              x(C, "line"),
              f && e(N, {}),
              " ",
              e(Ac, {}),
            ],
          }),
        });
      }
      return e(he, {
        filePath: c,
        content: u,
        verbose: l,
        replacedUndiffedContent: f,
      });
    }
    case "update": {
      if (be(i))
        return Pe({ ...i, type: "create" }, a, {
          style: s,
          verbose: l,
          replacedUndiffedContent: !0,
        });
      let V = c.startsWith(Ea());
      return e(wWe, {
        filePath: c,
        structuredPatch: k,
        firstLine: kr(u),
        fileContent: B ?? void 0,
        style: s,
        verbose: l,
        previewHint: V ? "/plan to preview" : void 0,
        collapsed: !V && (YFe(c) || JFe(c)),
      });
    }
  }
}
export {
  lt as isResultTruncated,
  ut as renderToolResultMessage,
  pt as renderToolUseErrorMessage,
  ct as renderToolUseMessage,
  ft as renderToolUseRejectedMessage,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { gi, ree, o, t, pd, oee } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { cn, Iat } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { te } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Vm } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { iYn } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import { Mpn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Rye, lle, dUn } from "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import { useSettings } from "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Yl, V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
F();
function ke(He, Ae) {
  return e(o, { children: He }, Ae);
}
var pe = 0.4;
function G($e) {
  let re = _(10),
    { patch: j, dim: ee, width: ne } = $e,
    [oe] = cn(),
    he;
  if (
    re[0] !== ee ||
    re[1] !== j.lines ||
    re[2] !== j.oldStart ||
    re[3] !== oe ||
    re[4] !== ne
  )
    ((he = ce(j.lines, j.oldStart, ne, ee, oe)),
      (re[0] = ee),
      (re[1] = j.lines),
      (re[2] = j.oldStart),
      (re[3] = oe),
      (re[4] = ne),
      (re[5] = he));
  else he = re[5];
  let de = he,
    Y;
  if (re[6] !== de) ((Y = de.map(ke)), (re[6] = de), (re[7] = Y));
  else Y = re[7];
  let ge;
  if (re[8] !== Y)
    ((ge = e(o, { flexDirection: "column", flexGrow: 1, children: Y })),
      (re[8] = Y),
      (re[9] = ge));
  else ge = re[9];
  return ge;
}
function xe(i) {
  return i.map((c) => {
    let d = c.startsWith("+")
        ? "add"
        : c.startsWith("-")
          ? "remove"
          : "nochange",
      { code: n, truncatedChars: a } = Rye(c, 1);
    return { code: n, i: 0, type: d, originalCode: n, truncatedChars: a };
  });
}
function Ce(i) {
  let c = [],
    d = 0;
  while (d < i.length) {
    let n = i[d];
    if (!n) {
      d++;
      continue;
    }
    if (n.type === "remove") {
      let a = [n],
        s = d + 1;
      while (s < i.length && i[s]?.type === "remove") {
        let u = i[s];
        if (u) a.push(u);
        s++;
      }
      let l = [];
      while (s < i.length && i[s]?.type === "add") {
        let u = i[s];
        if (u) l.push(u);
        s++;
      }
      if (a.length > 0 && l.length > 0) {
        let u = Math.min(a.length, l.length);
        for (let g = 0; g < u; g++) {
          let D = a[g],
            m = l[g];
          if (D && m)
            ((D.wordDiff = !0),
              (m.wordDiff = !0),
              (D.matchedLine = m),
              (m.matchedLine = D));
        }
        (c.push(...a.filter(Boolean)), c.push(...l.filter(Boolean)), (d = s));
      } else (c.push(n), d++);
    } else (c.push(n), d++);
  }
  return c;
}
function be(i, c) {
  return Mpn(i, c, { ignoreCase: !1 });
}
function Le(i, c, d, n, a) {
  let { type: s, i: l, wordDiff: u, matchedLine: g, originalCode: D } = i;
  if (!u || !g) return null;
  let m = s === "remove" ? D : g.originalCode,
    p = s === "remove" ? g.originalCode : D,
    f = be(m, p),
    W = m.length + p.length;
  if (
    f
      .filter((L) => L.added || L.removed)
      .reduce((L, A) => L + A.value.length, 0) /
      W >
      pe ||
    n
  )
    return null;
  let w = s === "add" ? "+" : "-",
    x = w.length,
    R = Math.max(1, c - d - 1 - x),
    C = [],
    b = [],
    h = 0;
  if (
    (f.forEach((L, A) => {
      let v = !1,
        P;
      if (s === "add") {
        if (L.added) ((v = !0), (P = "diffAddedWord"));
        else if (!L.removed) v = !0;
      } else if (s === "remove") {
        if (L.removed) ((v = !0), (P = "diffRemovedWord"));
        else if (!L.added) v = !0;
      }
      if (!v) return;
      Vm(L.value, R, "wrap")
        .split(
          `
`,
        )
        .forEach((N, H) => {
          if (!N) return;
          if (H > 0 || h + te(N) > R) {
            if (b.length > 0)
              (C.push({ content: [...b], contentWidth: h }), (b = []), (h = 0));
          }
          (b.push(e(t, { backgroundColor: P, children: N }, `part-${A}-${H}`)),
            (h += te(N)));
        });
    }),
    b.length > 0)
  )
    C.push({ content: b, contentWidth: h });
  let T = i.truncatedChars > 0 ? lle(i.truncatedChars) : "",
    y = -1;
  if (T && C.length > 0) {
    if (C.at(-1).contentWidth + te(T) > R)
      C.push({ content: [], contentWidth: 0 });
    y = C.length - 1;
  }
  return C.map(({ content: L, contentWidth: A }, v) => {
    let P = `${s}-${l}-${v}`,
      O =
        s === "add"
          ? n
            ? "diffAddedDimmed"
            : "diffAdded"
          : n
            ? "diffRemovedDimmed"
            : "diffRemoved",
      E = v === 0 ? l : void 0,
      N = (E !== void 0 ? E.toString().padStart(d) : " ".repeat(d)) + " ",
      H = v === y ? T : "",
      B = N.length + x + A + te(H),
      me = Math.max(0, c - B);
    return r(
      o,
      {
        flexDirection: "row",
        children: [
          e(pd, {
            fromLeftEdge: !0,
            children: r(t, {
              color: a ? "text" : void 0,
              backgroundColor: O,
              dimColor: n,
              children: [N, w],
            }),
          }),
          e(t, {
            color: a ? "text" : void 0,
            backgroundColor: O,
            dimColor: n,
            children: L,
          }),
          H ? e(t, { dimColor: !0, children: H }) : null,
          e(t, {
            color: a ? "text" : void 0,
            backgroundColor: O,
            dimColor: n,
            children: " ".repeat(me),
          }),
        ],
      },
      P,
    );
  });
}
function ce(i, c, d, n, a) {
  let s = Math.max(1, Math.floor(d)),
    l = xe(i),
    u = Ce(l),
    g = De(u, c),
    D = Math.max(...g.map(({ i: p }) => p), 0),
    m = Math.max(D.toString().length + 1, 0);
  return g.flatMap((p) => {
    let { type: f, code: W, i: S, wordDiff: k, matchedLine: w } = p;
    if (k && w) {
      let y = Le(p, s, m, n, a);
      if (y !== null) return y;
    }
    let x = 2,
      R = Math.max(1, s - m - 1 - x),
      b = Vm(W, R, "wrap").split(`
`),
      h = p.truncatedChars > 0 ? lle(p.truncatedChars) : "",
      T = -1;
    if (h && b.length > 0) {
      let y = b.at(-1);
      if (te(y) + te(h) > R) b.push("");
      T = b.length - 1;
    }
    return b.map((y, L) => {
      let A = `${f}-${S}-${L}`,
        v = L === 0 ? S : void 0,
        P = (v !== void 0 ? v.toString().padStart(m) : " ".repeat(m)) + " ",
        O = f === "add" ? "+" : f === "remove" ? "-" : " ",
        E = L === T ? h : "",
        N = P.length + 1 + te(y) + te(E),
        H = Math.max(0, s - N),
        B =
          f === "add"
            ? n
              ? "diffAddedDimmed"
              : "diffAdded"
            : f === "remove"
              ? n
                ? "diffRemovedDimmed"
                : "diffRemoved"
              : void 0;
      return r(
        o,
        {
          flexDirection: "row",
          children: [
            e(pd, {
              fromLeftEdge: !0,
              children: r(t, {
                color: a ? "text" : void 0,
                backgroundColor: B,
                dimColor: n || f === "nochange",
                children: [P, O],
              }),
            }),
            e(t, {
              color: a ? "text" : void 0,
              backgroundColor: B,
              dimColor: n,
              children: y,
            }),
            E ? e(t, { dimColor: !0, children: E }) : null,
            e(t, {
              color: a ? "text" : void 0,
              backgroundColor: B,
              dimColor: n,
              children: " ".repeat(H),
            }),
          ],
        },
        A,
      );
    });
  });
}
function De(i, c) {
  let d = c,
    n = [],
    a = [...i];
  while (a.length > 0) {
    let s = a.shift(),
      {
        code: l,
        type: u,
        originalCode: g,
        truncatedChars: D,
        wordDiff: m,
        matchedLine: p,
      } = s,
      f = {
        code: l,
        type: u,
        i: d,
        originalCode: g,
        truncatedChars: D,
        wordDiff: m,
        matchedLine: p,
      };
    switch (u) {
      case "nochange":
        (d++, n.push(f));
        break;
      case "add":
        (d++, n.push(f));
        break;
      case "remove": {
        n.push(f);
        let W = 0;
        while (a[0]?.type === "remove") {
          d++;
          let S = a.shift(),
            {
              code: k,
              type: w,
              originalCode: x,
              truncatedChars: R,
              wordDiff: C,
              matchedLine: b,
            } = S,
            h = {
              code: k,
              type: w,
              i: d,
              originalCode: x,
              truncatedChars: R,
              wordDiff: C,
              matchedLine: b,
            };
          (n.push(h), W++);
        }
        d -= W;
        break;
      }
    }
  }
  return n;
}
function we(i) {
  return (
    Math.max(
      i.oldStart + i.oldLines - 1,
      i.newStart + i.newLines - 1,
      1,
    ).toString().length + 3
  );
}
var ue = [
  "diffAdded",
  "diffRemoved",
  "diffAddedDimmed",
  "diffRemovedDimmed",
  "diffAddedWord",
  "diffRemovedWord",
];
function fe(i) {
  if (!i) return;
  let c;
  for (let d of ue) {
    let n = i[d];
    if (n !== void 0) ((c ??= {}), (c[d] = n));
  }
  return c;
}
function le(i, c, d, n, a, s, l, u, g, D) {
  let m = dUn();
  if (!m) return null;
  let p = D ? we(c) : 0,
    f = p > 0 && p < u ? p : 0,
    W = l ? ue.map((h) => l[h] ?? "").join(",") : "",
    S = `${s}|${W}|${u}|${g ? 1 : 0}|${f}|${ie.level}|${d ?? ""}|${n}`,
    k = i.get(c),
    w = k?.get(S);
  if (w) return w;
  let x = new m(c, d, n, a).render(s, u, g, l);
  if (x === null) return null;
  let R = null,
    C = null;
  if (f > 0) {
    ((R = Array(x.length)), (C = Array(x.length)));
    for (let h = 0; h < x.length; h++) {
      let [T, y] = iYn(x[h] ?? "", f);
      ((R[h] = T), (C[h] = y));
    }
  }
  let b = { lines: x, gutterWidth: f, gutters: R, contents: C };
  if (!k) ((k = new Map()), i.set(c, k));
  if (k.size >= 4) k.clear();
  return (k.set(S, b), b);
}
var QP = Yl(function (Je) {
  let q = _(16),
    {
      patch: J,
      dim: Q,
      filePath: Qe,
      firstLine: Ue,
      fileContent: Xe,
      width: U,
      skipHighlighting: Re,
    } = Je,
    Ze = Re === void 0 ? !1 : Re,
    [Ie] = cn(),
    et = fe(Iat()),
    tt = useSettings().syntaxHighlightingDisabled ?? !1,
    K = Math.max(1, Math.floor(U)),
    nt = gi(),
    { structuredDiff: ot } = ree(),
    ye = Ze || tt ? null : le(ot, J, Ue, Qe, Xe ?? null, Ie, et, K, Q, nt);
  if (!ye) {
    let M;
    if (q[0] !== Q || q[1] !== J || q[2] !== U)
      ((M = e(o, { children: e(G, { patch: J, dim: Q, width: U }) })),
        (q[0] = Q),
        (q[1] = J),
        (q[2] = U),
        (q[3] = M));
    else M = q[3];
    return M;
  }
  let { lines: se, gutterWidth: z, gutters: X, contents: Z } = ye;
  if (z > 0 && X && Z) {
    let M;
    if (q[4] !== z || q[5] !== X)
      ((M = e(pd, {
        fromLeftEdge: !0,
        flexShrink: 0,
        children: e(oee, { lines: X, width: z }),
      })),
        (q[4] = z),
        (q[5] = X),
        (q[6] = M));
    else M = q[6];
    const ae = K - z;
    let I;
    if (q[7] !== Z || q[8] !== ae)
      ((I = e(oee, { lines: Z, width: ae })),
        (q[7] = Z),
        (q[8] = ae),
        (q[9] = I));
    else I = q[9];
    let ve;
    if (q[10] !== M || q[11] !== I)
      ((ve = r(o, { flexDirection: "row", children: [M, I] })),
        (q[10] = M),
        (q[11] = I),
        (q[12] = ve));
    else ve = q[12];
    return ve;
  }
  let M;
  if (q[13] !== se || q[14] !== K)
    ((M = e(o, { children: e(oee, { lines: se, width: K }) })),
      (q[13] = se),
      (q[14] = K),
      (q[15] = M));
  else M = q[15];
  return M;
});
export { QP };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { os, x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Fxt, h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { _u } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { ree, o, t, jr, tn } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ule } from "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import { cn } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { te, dp } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { $7e, U7e } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { rre } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ZR } from "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import {
  VWe,
  o0e,
  _Un,
  YZt,
  Bit,
  aE,
  JZt,
  QZt,
  MPt,
  ZZt,
} from "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import { ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { Ai } from "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Yl, V, C, At, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
F();
function St(pn) {
  return pn.trim();
}
var ae = 4,
  le = 3,
  wt = 4,
  Xe = 200;
function me(s) {
  return `\u2026 ${s.toLocaleString()} more ${x(s, "row")} not shown`;
}
var qe = "\x1B[1m",
  Ge = "\x1B[22m";
function G(s, i, l) {
  if (i <= 0) return [s];
  let u = s.trimEnd(),
    f = dp(u, i, { hard: l?.hard ?? !1, trim: !1, wordWrap: !0 })
      .split(
        `
`,
      )
      .filter((m) => m.length > 0);
  return f.length > 0 ? f : [""];
}
var we = Yl(function (Kt) {
  let Oe = _(14),
    { token: Be, highlight: _e, forceWidth: Jt, linkCap: De } = Kt,
    [ve] = cn(),
    { columns: Qt } = ks(Se()),
    Fe = tn(),
    ee = Jt ?? Qt,
    xt;
  if (
    Oe[0] !== _e ||
    Oe[1] !== Fe ||
    Oe[2] !== De ||
    Oe[3] !== ee ||
    Oe[4] !== ve ||
    Oe[5] !== Be
  )
    ((xt = Ye(Be, ee, ve, _e, De, Fe)),
      (Oe[0] = _e),
      (Oe[1] = Fe),
      (Oe[2] = De),
      (Oe[3] = ee),
      (Oe[4] = ve),
      (Oe[5] = Be),
      (Oe[6] = xt));
  else xt = Oe[6];
  let O = xt;
  if (O.kind === "ansi") {
    let ue;
    if (Oe[7] !== O.text)
      ((ue = e(jr, { children: O.text })), (Oe[7] = O.text), (Oe[8] = ue));
    else ue = Oe[8];
    return ue;
  }
  let ue;
  if (
    Oe[9] !== O.headers ||
    Oe[10] !== O.rows ||
    Oe[11] !== O.truncatedCount ||
    Oe[12] !== ee
  )
    ((ue = e(Re, {
      headers: O.headers,
      rows: O.rows,
      terminalWidth: ee,
      truncatedCount: O.truncatedCount,
    })),
      (Oe[9] = O.headers),
      (Oe[10] = O.rows),
      (Oe[11] = O.truncatedCount),
      (Oe[12] = ee),
      (Oe[13] = ue));
  else ue = Oe[13];
  return ue;
});
function Ye(s, i, l, u, a, f) {
  let m = Math.max(0, s.rows.length - Xe),
    k = m > 0 ? s.rows.slice(0, Xe) : s.rows,
    S = new Map();
  function y(c) {
    let p = S.get(c);
    if (p !== void 0) return p;
    let g = VWe(
      c
        ?.map((T) =>
          aE(T, l, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight: u,
            glueProse: !1,
            linkCap: a,
          }),
        )
        .join("") ?? "",
    );
    return (S.set(c, g), g);
  }
  function W(c) {
    return pt(y(c));
  }
  if (f) {
    let c = ZZt(
      s.header.map((p) => W(p.tokens)),
      k.map((p) => p.map((g) => W(g.tokens))),
    );
    if (m > 0)
      c += `
${me(m)}`;
    return { kind: "ansi", text: c };
  }
  function A(c) {
    let g = W(c)
      .split(/\s+/)
      .filter((T) => T.length > 0);
    if (g.length === 0) return le;
    return Math.max(...g.map((T) => te(T)), le);
  }
  function L(c) {
    return Math.max(te(W(c)), le);
  }
  let P = s.header.map((c, p) => {
      let g = A(c.tokens);
      for (let T of k) g = Math.max(g, A(T[p]?.tokens));
      return g;
    }),
    B = s.header.map((c, p) => {
      let g = L(c.tokens);
      for (let T of k) g = Math.max(g, L(T[p]?.tokens));
      return g;
    }),
    N = s.header.length,
    R = 1 + N * 3,
    D = Math.max(i - R - ae, N * le),
    d = P.reduce((c, p) => c + p, 0),
    b = B.reduce((c, p) => c + p, 0),
    w = !1,
    I;
  if (b <= D) I = B;
  else if (d <= D) {
    let c = D - d,
      p = B.map((T, v) => T - P[v]),
      g = p.reduce((T, v) => T + v, 0);
    I = P.map((T, v) => {
      if (g === 0) return T;
      let j = Math.floor((p[v] / g) * c);
      return T + j;
    });
  } else {
    w = !0;
    let c = D / d;
    I = P.map((p) => Math.max(Math.floor(p * c), le));
  }
  function Y() {
    let c = 1;
    for (let p = 0; p < s.header.length; p++) {
      let g = y(s.header[p].tokens),
        T = G(g, I[p], { hard: w });
      c = Math.max(c, T.length);
    }
    for (let p of k)
      for (let g = 0; g < p.length; g++) {
        let T = y(p[g]?.tokens),
          v = G(T, I[g], { hard: w });
        c = Math.max(c, v.length);
      }
    return c;
  }
  let Z = Y() > wt;
  function U() {
    return {
      kind: "vertical",
      headers: s.header.map((c) => W(c.tokens)),
      rows: k.map((c) => c.map((p) => y(p.tokens))),
      truncatedCount: m,
    };
  }
  function K(c, p) {
    let g = c.map((E, Q) => {
        let X = y(E.tokens),
          fe = I[Q];
        return G(X, fe, { hard: w });
      }),
      T = Math.max(...g.map((E) => E.length), 1),
      v = g.map((E) => Math.floor((T - E.length) / 2)),
      j = [];
    for (let E = 0; E < T; E++) {
      let Q = "\u2502";
      for (let X = 0; X < c.length; X++) {
        let fe = g[X],
          gt = v[X],
          Te = E - gt,
          Ee = Te >= 0 && Te < fe.length ? fe[Te] : "",
          kt = I[X],
          bt = p ? "center" : (s.align?.[X] ?? "left");
        Q += " " + MPt(Ee, te(Ee), kt, bt) + " \u2502";
      }
      j.push(Q);
    }
    return j;
  }
  function J(c) {
    let [p, g, T, v] = {
        top: ["\u250C", "\u2500", "\u252C", "\u2510"],
        middle: ["\u251C", "\u2500", "\u253C", "\u2524"],
        bottom: ["\u2514", "\u2500", "\u2534", "\u2518"],
      }[c],
      j = p;
    return (
      I.forEach((E, Q) => {
        ((j += g.repeat(E + 2)), (j += Q < I.length - 1 ? T : v));
      }),
      j
    );
  }
  if (Z) return U();
  let H = [];
  (H.push(J("top")),
    H.push(...K(s.header, !0)),
    H.push(J("middle")),
    k.forEach((c, p) => {
      if ((H.push(...K(c, !1)), p < k.length - 1)) H.push(J("middle"));
    }),
    H.push(J("bottom")));
  let M = 0;
  for (let c of H) {
    let p = te(pt(c));
    if (p > M) M = p;
  }
  if (M > i - ae) return U();
  if (m > 0) H.push(me(m));
  return {
    kind: "ansi",
    text: H.join(`
`),
  };
}
function Re(Zt) {
  let je = _(9),
    { headers: $e, rows: He, terminalWidth: ne, truncatedCount: re } = Zt,
    q;
  if (je[0] !== $e || je[1] !== He || je[2] !== ne || je[3] !== re) {
    q = [];
    let en = Math.min(ne - 1, 40);
    let Tt = os("\u2500", en);
    He.forEach((nn) => {
      let ye = [];
      if (
        (nn.forEach((rn, on) => {
          let pe = $e[on] || "";
          let yt = rn
            .trimEnd()
            .replace(/\n+/g, " ")
            .replace(/\s+/g, " ")
            .trim();
          if (!pe && !yt) {
            return;
          }
          let sn = pe ? ne - te(pe) - 3 : ne - 1;
          let ln = ne - 2 - 1;
          let Le = G(yt, Math.max(sn, 10));
          let an = Le[0] || "";
          let oe;
          if (Le.length <= 1) oe = Le;
          else {
            let fn = Le.slice(1).map(St).join(" ");
            let un = G(fn, ln);
            oe = [an, ...un];
          }
          ye.push(pe ? `${qe}${pe}:${Ge} ${oe[0] || ""}` : oe[0] || "");
          for (let ze = 1; ze < oe.length; ze++) {
            let Lt = oe[ze];
            if (!Lt.trim()) {
              continue;
            }
            ye.push(`${Lt}`);
          }
        }),
        ye.length === 0)
      ) {
        return;
      }
      if (q.length > 0) q.push(Tt);
      q.push(...ye);
    });
    if (re > 0) {
      if (q.length > 0) q.push(Tt);
      let se;
      if (je[5] !== re) ((se = me(re)), (je[5] = re), (je[6] = se));
      else se = je[6];
      q.push(se);
    }
    ((je[0] = $e), (je[1] = He), (je[2] = ne), (je[3] = re), (je[4] = q));
  } else q = je[4];
  const se = q.join(`
`);
  let Rt;
  if (je[7] !== se)
    ((Rt = e(jr, { children: se })), (je[7] = se), (je[8] = Rt));
  else Rt = je[8];
  return Rt;
}
var Ke = 10,
  Ie = 2,
  Pe = 300,
  Pt = 64;
function Je(s) {
  return (
    s.type === "code" ||
    s.type === "blockquote" ||
    s.type === "hr" ||
    s.type === "table"
  );
}
function Qe(s) {
  let i = 0,
    l = [];
  for (let u of s) if (u.type === "list") l.push({ list: u, depth: 1 });
  for (let u = l.pop(); u; u = l.pop()) {
    if (u.depth > Pt) return !1;
    for (let a of u.list.items) {
      if (++i > Pe) return !1;
      let f = !0;
      for (let m of a.tokens)
        if (m.type === "list")
          (l.push({ list: m, depth: u.depth + 1 }), (f = !1));
        else if (Je(m)) {
          if (++i > Pe) return !1;
          f = !1;
        } else if (m.type !== "space" && !f) {
          if (++i > Pe) return !1;
          f = !0;
        }
    }
  }
  return !0;
}
function We(Ve) {
  let Ct = _(7),
    Ce,
    Me;
  if (Ct[0] !== Ve)
    (({ token: Me, ...Ce } = Ve), (Ct[0] = Ve), (Ct[1] = Ce), (Ct[2] = Me));
  else ((Ce = Ct[1]), (Me = Ct[2]));
  let { columns: Ln } = ks(Se()),
    Ue = Math.max(1, Math.min(Ke, Ln - Ie - ae)),
    Mt;
  if (Ct[3] !== Ue || Ct[4] !== Ce || Ct[5] !== Me)
    ((Mt = e(o, {
      flexDirection: "column",
      children: e(Ae, {
        token: Me,
        indent: 0,
        listDepth: 0,
        minContentWidth: Ue,
        ...Ce,
      }),
    })),
      (Ct[3] = Ue),
      (Ct[4] = Ce),
      (Ct[5] = Me),
      (Ct[6] = Mt));
  else Mt = Ct[6];
  return Mt;
}
function Ae({ token: s, indent: i, listDepth: l, ...u }) {
  let a = JZt(s);
  return s.items.map((f, m) =>
    e(
      It,
      {
        item: f,
        marker: QZt(l, s.ordered ? { number: a.first + m, ...a } : null),
        indent: i,
        listDepth: l,
        blankLineBefore: m > 0 && Ze(s.items[m - 1]),
        ...u,
        tailWrap: m === s.items.length - 1 ? u.tailWrap : void 0,
      },
      m,
    ),
  );
}
function Ze(s) {
  let i = s.tokens.at(-1);
  if (i?.type === "space" || i?.type === "heading" || i?.type === "table")
    return !0;
  if (i?.type === "list") {
    let l = i.items.at(-1);
    return l ? Ze(l) : !1;
  }
  return i?.type === "html" && Bit(i.raw);
}
function It({
  item: s,
  marker: i,
  indent: l,
  listDepth: u,
  blankLineBefore: a,
  theme: f,
  highlight: m,
  dimColor: k,
  italic: S,
  linkCap: y,
  tailWrap: W,
  minContentWidth: A,
}) {
  let L = [];
  for (let d of s.tokens) {
    if (d.type === "list") {
      L.push({ kind: "list", token: d });
      continue;
    }
    let b = aE(d, f, {
      listDepth: u + 1,
      orderedListNumber: null,
      parent: s,
      highlight: m,
      glueProse: !1,
      linkCap: y,
    });
    if (Je(d)) {
      L.push({ kind: "block", text: b, code: d.type === "code" });
      continue;
    }
    let w = L.at(-1);
    if (w?.kind === "inline") w.text += b;
    else L.push({ kind: "inline", text: b });
  }
  if (L[0]?.kind !== "inline") L.unshift({ kind: "inline", text: "" });
  let P = te(i) + 1,
    B = Math.min(l + P, YZt),
    N = [],
    R = a,
    D = L.length - 1;
  return (
    L.forEach((d, b) => {
      let w = b === D ? W : void 0;
      if (d.kind === "inline") {
        let I = d.text.startsWith(`
`),
          Y = Bit(d.text),
          z = d.text.replace(/^\n+/, "").trimEnd();
        if (!z && b > 0) {
          R ||= d.text.includes(`
`);
          return;
        }
        (N.push(
          r(
            o,
            {
              flexDirection: "row",
              marginTop: R || (b > 0 && I) ? 1 : 0,
              children: [
                e(o, { flexShrink: 1, width: l }),
                e(o, {
                  flexShrink: 1,
                  width: P,
                  minWidth: Ie,
                  children:
                    b === 0 && e(t, { dimColor: k, italic: S, children: i }),
                }),
                e(o, {
                  flexDirection: "column",
                  flexShrink: 1000,
                  minWidth: A,
                  children: e(jr, {
                    dimColor: k,
                    italic: S,
                    wrap: w,
                    children: z,
                  }),
                }),
              ],
            },
            b,
          ),
        ),
          (R = Y));
      } else if (d.kind === "block")
        (N.push(
          e(
            o,
            {
              marginTop: R ? 1 : 0,
              children: e(jr, {
                dimColor: k,
                italic: S,
                wrap: w,
                children: d.code
                  ? d.text.replace(/\n$/, "")
                  : d.text.replace(/^\n+/, "").trimEnd(),
              }),
            },
            b,
          ),
        ),
          (R = !1));
      else
        (N.push(
          e(
            o,
            {
              flexDirection: "column",
              marginTop: R ? 1 : 0,
              children: e(Ae, {
                token: d.token,
                indent: B,
                listDepth: u + 1,
                theme: f,
                highlight: m,
                dimColor: k,
                italic: S,
                linkCap: y,
                tailWrap: w,
                minContentWidth: A,
              }),
            },
            b,
          ),
        ),
          (R = !1));
    }),
    N
  );
}
var _t = 500,
  Dt =
    /[#*`|[>\-_~]|\n[\r\n]|\r\r|\r\n[\r\n]|(?:^|[\r\n]) {0,3}(?:\d+[.)]|\+) |(?:^|[\r\n]) {0,3}=+ *(?:[\r\n]|$)|https?:\/\/|www\./;
function ut(s) {
  return [
    {
      type: "paragraph",
      raw: s,
      text: s,
      tokens: [{ type: "text", raw: s, text: s }],
    },
  ];
}
function Ne(s, i) {
  try {
    return s.lexer(i);
  } catch (l) {
    if (l instanceof RangeError)
      n(`marked.lexer overflow on ${i.length} chars`, { level: "error" });
    else h(l);
    return ut(i);
  }
}
function vt(s, i, l) {
  let u = s === null ? "" : `${l ? "_" : ""}${i.length}:${Fxt(i)}`,
    a = s?.get(u);
  if (s !== null && a) return (s.delete(u), s.set(u, a), a);
  if (!Dt.test(i)) return ut(i);
  let f = l ? _Un : _u;
  if (s === null) return Ne(f, i);
  let m = Ne(f, i);
  if (s.size >= _t) {
    let k = s.keys().next().value;
    if (k !== void 0) s.delete(k);
  }
  return (s.set(u, m), m);
}
function js(et) {
  let Wt = _(5),
    tt = Ai(),
    Nt;
  if (Wt[0] !== tt.syntaxHighlightingDisabled)
    ((Nt = tt.syntaxHighlightingDisabled ? null : ZR()),
      (Wt[0] = tt.syntaxHighlightingDisabled),
      (Wt[1] = Nt));
  else Nt = Wt[1];
  let nt = Nt,
    Et;
  if (Wt[2] !== nt || Wt[3] !== et)
    ((Et = e(lt, { ...et, highlight: nt })),
      (Wt[2] = nt),
      (Wt[3] = et),
      (Wt[4] = Et));
  else Et = Wt[4];
  return Et;
}
function lt({
  children: s,
  color: i,
  dimColor: l,
  italic: u,
  hint: a,
  promptMode: f = !1,
  stripPromptTags: m = !0,
  tailWrap: k,
  skipTokenCache: S = !1,
  highlight: y,
}) {
  let [W] = cn();
  o0e();
  let A = ule(),
    L = tn(),
    P = At(U7e, $7e),
    { markdownTokens: B } = ree(),
    N = V(() => {
      let R = m && !f ? rre(s) : s,
        D = vt(S ? null : B, R, f),
        d = [],
        b = "",
        w = "none",
        I = !1,
        Y = !1,
        z = a ? `\xB7\xA0${a}` : void 0;
      function Z(M, c, p) {
        (d.push(e(o, { marginTop: c, children: M }, d.length)),
          (w = p),
          (I = !1));
      }
      function U(M, c = !1) {
        if (!b) return;
        let p = b.startsWith(`
`),
          g = Bit(b),
          T = b.replace(/^\n+/, "").trimEnd();
        if (((b = ""), !T)) {
          I = !0;
          return;
        }
        let v = w === "none" ? 0 : w === "list" && !p ? 0 : 1,
          j = e(jr, { dimColor: l, italic: u, wrap: M, children: T }),
          E = c && z ? r(t, { dimColor: !0, children: [" ", z] }) : null;
        if (E !== null) Y = !0;
        (Z(
          i || E ? r(t, { color: i, wrap: M, children: [j, E] }) : j,
          v,
          "prose",
        ),
          (I = g));
      }
      function K(M, c) {
        (U(),
          Z(
            M,
            w === "none" ? 0 : c === "block" || w === "block" || I ? 1 : 0,
            c,
          ));
      }
      let J = D.findLastIndex((M) => M.type !== "space"),
        H = !L && !f && Qe(D);
      if (
        (D.forEach((M, c) => {
          if (M.type === "table")
            K(e(we, { token: M, highlight: y, linkCap: A }), "block");
          else if (M.type === "list" && H)
            K(
              e(We, {
                token: M,
                theme: W,
                highlight: y,
                dimColor: l,
                italic: u,
                linkCap: A,
                tailWrap: c === J ? k : void 0,
              }),
              "list",
            );
          else if (M.type === "blockquote")
            K(
              e(mt, {
                token: M,
                theme: W,
                highlight: y,
                dimColor: l,
                linkCap: A,
                isScreenReader: L,
              }),
              "block",
            );
          else
            b += aE(M, W, {
              listDepth: 0,
              orderedListNumber: null,
              parent: null,
              highlight: y,
              glueProse: !1,
              linkCap: A,
              screenReader: L,
              promptMode: f,
            });
        }),
        U(k, !0),
        f && d.length === 0 && R.trim())
      )
        ((b = R), U(k, !0));
      if (z && !Y) Z(e(t, { dimColor: !0, children: z }), 0, "prose");
      return d;
    }, [s, i, l, u, a, m, y, W, A, L, k, S, B, f, P]);
  return e(o, { flexDirection: "column", children: N });
}
function mt(jn) {
  let st = _(14),
    {
      token: rt,
      theme: de,
      highlight: he,
      dimColor: ot,
      linkCap: ge,
      isScreenReader: ke,
    } = jn,
    Bt;
  if (
    st[0] !== he ||
    st[1] !== ke ||
    st[2] !== ge ||
    st[3] !== de ||
    st[4] !== rt.tokens
  ) {
    let be;
    if (st[6] !== he || st[7] !== ke || st[8] !== ge || st[9] !== de)
      ((be = (zn) =>
        aE(zn, de, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: he,
          glueProse: !1,
          linkCap: ge,
          screenReader: ke,
        })),
        (st[6] = he),
        (st[7] = ke),
        (st[8] = ge),
        (st[9] = de),
        (st[10] = be));
    else be = st[10];
    Bt = ie.italic(rt.tokens.map(be).join("").replace(/^\n+/, "").trimEnd());
    ((st[0] = he),
      (st[1] = ke),
      (st[2] = ge),
      (st[3] = de),
      (st[4] = rt.tokens),
      (st[5] = Bt));
  } else Bt = st[5];
  let it = Bt,
    be;
  if (st[11] !== ot || st[12] !== it)
    ((be = e(o, {
      borderStyle: "quote",
      borderTop: !1,
      borderBottom: !1,
      borderRight: !1,
      borderDimColor: !0,
      paddingLeft: 1,
      children: e(jr, { dimColor: ot, children: it }),
    })),
      (st[11] = ot),
      (st[12] = it),
      (st[13] = be));
  else be = st[13];
  return be;
}
var ce = 4096;
function at() {
  return {
    chunks: [],
    frozenSource: "",
    gapAfterChunks: !1,
    stablePrefix: "",
    openFence: null,
  };
}
var dt = /^ {0,3}(`{3,}|~{3,})([^\n]*)$/gm;
function ht(s, i, l) {
  let u = s.match(/^`+|^~+/)?.[0] ?? "";
  return i[0] === u[0] && i.length >= u.length && l.trim() === "";
}
function Ft(s, i) {
  let l = s;
  for (let u of i.matchAll(dt))
    if (l === null) l = u[1] + u[2].trim();
    else if (ht(l, u[1], u[2])) l = null;
  return l;
}
function Ot(s, i) {
  for (let l of s.matchAll(dt)) {
    let u = l.index + l[0].length;
    if (
      s[u] !==
      `
`
    )
      continue;
    if (ht(i, l[1], l[2])) return u + 1;
  }
  return -1;
}
function xe(s, i, l, u) {
  let a = i.substring(0, l),
    f =
      (s.openFence !== null
        ? s.openFence +
          `
`
        : "") + a;
  return (
    (s.chunks = [
      ...s.chunks,
      e(
        o,
        {
          marginTop: s.chunks.length > 0 && s.gapAfterChunks ? 1 : 0,
          children: e(js, { skipTokenCache: !0, children: f }),
        },
        s.chunks.length,
      ),
    ]),
    (s.openFence = Ft(s.openFence, a)),
    (s.frozenSource += a),
    (s.gapAfterChunks = u),
    (s.stablePrefix = ""),
    i.substring(l)
  );
}
var ct = 1536;
function ft(s) {
  let i = s.lastIndexOf(`
`);
  if (i < ce / 2) i = s.lastIndexOf(" ", s.length - ct);
  if (i < ce / 2) {
    i = s.length - ct;
    let l = s.charCodeAt(i + 1);
    if (l >= 56320 && l <= 57343) i--;
  }
  return i + 1;
}
function XZt({ children: s, hideTrailingLine: i = !1 }) {
  o0e();
  let l = rre(s),
    a = C(at()).current;
  if (!l.startsWith(a.frozenSource)) Object.assign(a, at());
  let f = l.substring(a.frozenSource.length);
  if (!f.startsWith(a.stablePrefix)) a.stablePrefix = "";
  if (a.openFence !== null) {
    let P = Ot(f, a.openFence);
    if (P >= 0) f = xe(a, f, P, !0);
    else if (f.length > ce) f = xe(a, f, ft(f), !1);
  }
  if (a.openFence === null) {
    let P = a.stablePrefix.length,
      B = Ne(_u, f.substring(P)),
      N = B.length - 1;
    while (N >= 0 && B[N].type === "space") N--;
    let R = 0;
    for (let d = 0; d < N; d++) R += B[d].raw.length;
    if (R > 0) a.stablePrefix = f.substring(0, P + R);
    if (a.stablePrefix.length > ce) f = xe(a, f, a.stablePrefix.length, !0);
    if (f.length - a.stablePrefix.length > ce) {
      let d = a.stablePrefix.length,
        b = ft(f.substring(d));
      f = xe(a, f, d + b, !1);
    }
  }
  let m = a.stablePrefix,
    k = f.substring(m.length),
    S = m.trim() !== "",
    y =
      k && a.openFence !== null
        ? a.openFence +
          `
` +
          k
        : k,
    W = !k.endsWith(`
`),
    A = k
      ? e(js, {
          tailWrap: i && W ? "wrap-stream" : void 0,
          skipTokenCache: !0,
          children: y,
        })
      : null;
  if (a.chunks.length === 0)
    return r(o, {
      flexDirection: "column",
      gap: 1,
      children: [S && e(js, { skipTokenCache: !0, children: m }), A],
    });
  let L = a.gapAfterChunks ? 1 : 0;
  return r(o, {
    flexDirection: "column",
    children: [
      a.chunks,
      S &&
        e(o, {
          marginTop: L,
          children: e(js, { skipTokenCache: !0, children: m }),
        }),
      A && e(o, { marginTop: S ? 1 : L, children: A }),
    ],
  });
}
export { js, XZt };

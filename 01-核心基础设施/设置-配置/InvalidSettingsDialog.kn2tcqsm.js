// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 143 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { fl } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import { Gp } from "../共享小工具-未细化/chunk-c8g7bday.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function X(E, Q) {
  let j = Q.file || "(file not specified)";
  if (!E[j]) E[j] = [];
  return (E[j].push(Q), E);
}
function Y(B, P) {
  if (!B.path && P.path) {
    return -1;
  }
  if (B.path && !P.path) {
    return 1;
  }
  return (B.path || "").localeCompare(P.path || "");
}
function Z(z, ct) {
  let U = A(z);
  return e(
    fl.Node,
    {
      children: U
        ? r(t, {
            children: [U, ": ", e(t, { dimColor: !0, children: z.message })],
          })
        : e(t, { dimColor: !0, children: z.message }),
    },
    ct,
  );
}
function tt(w, mt) {
  return r(
    o,
    {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        w.suggestion &&
          e(t, { dimColor: !0, wrap: "wrap", children: w.suggestion }),
        w.docLink && e(Gp, { url: w.docLink }),
      ],
    },
    `suggestion-pair-${mt}`,
  );
}
function h(ft) {
  let G = _(8),
    { errors: x } = ft;
  if (x.length === 0) {
    return null;
  }
  let y, k, V;
  if (G[0] !== x) {
    let H = x.reduce(X, {});
    let gt = Object.keys(H).sort();
    y = o;
    k = "column";
    V = gt.map((T) => {
      let S = H[T] || [];
      S.sort(Y);
      let C = new Map();
      return (
        S.forEach((g) => {
          if (g.suggestion || g.docLink) {
            let J = `${g.suggestion || ""}|${g.docLink || ""}`;
            if (!C.has(J))
              C.set(J, { suggestion: g.suggestion, docLink: g.docLink });
          }
        }),
        r(
          o,
          {
            flexDirection: "column",
            children: [
              e(t, { children: T }),
              e(fl, { variant: "tree", children: S.map(Z) }),
              C.size > 0 &&
                e(o, {
                  flexDirection: "column",
                  marginTop: 1,
                  children: Array.from(C.values()).map(tt),
                }),
            ],
          },
          T,
        )
      );
    });
    ((G[0] = x), (G[1] = y), (G[2] = k), (G[3] = V));
  } else ((y = G[1]), (k = G[2]), (V = G[3]));
  let K;
  if (G[4] !== y || G[5] !== k || G[6] !== V)
    ((K = e(y, { flexDirection: k, children: V })),
      (G[4] = y),
      (G[5] = k),
      (G[6] = V),
      (G[7] = K));
  else K = G[7];
  return K;
}
function A(s) {
  if (!s.path) return null;
  let u = s.path.split("."),
    p = u[u.length - 1];
  if (
    s.invalidValue !== null &&
    s.invalidValue !== void 0 &&
    p !== void 0 &&
    !isNaN(parseInt(p, 10))
  ) {
    let a =
      typeof s.invalidValue === "string"
        ? `"${s.invalidValue}"`
        : String(s.invalidValue);
    return [...u.slice(0, -1), a].join(".");
  }
  return s.path;
}
function lt(wt) {
  return wt.severity !== "warning";
}
function at(Et) {
  let f = _(21),
    { settingsErrors: c, onContinue: F, onFix: I, onExit: L } = Et,
    it;
  if (f[0] !== F || f[1] !== L || f[2] !== I)
    ((it = function v(et) {
      if (et === "exit") L();
      else if (et === "fix") I();
      else F();
    }),
      (f[0] = F),
      (f[1] = L),
      (f[2] = I),
      (f[3] = it));
  else it = f[3];
  let v = it,
    nt;
  if (f[4] !== c) ((nt = c.some(lt)), (f[4] = c), (f[5] = nt));
  else nt = f[5];
  let m = nt,
    ot;
  if (f[6] !== m)
    ((ot = m
      ? [
          { label: "Fix with Claude", value: "fix" },
          { label: "Exit and fix manually", value: "exit" },
          { label: "Continue without these settings", value: "continue" },
        ]
      : [
          { label: "Continue", value: "continue" },
          { label: "Fix with Claude", value: "fix" },
          { label: "Exit and fix manually", value: "exit" },
        ]),
      (f[6] = m),
      (f[7] = ot));
  else ot = f[7];
  let M = ot;
  const O = m ? "Settings Error" : "Settings Warning",
    W = m ? L : F;
  let R;
  if (f[8] !== c) ((R = e(h, { errors: c })), (f[8] = c), (f[9] = R));
  else R = f[9];
  const q = m
    ? "Files with errors are skipped entirely, not just the invalid settings."
    : "The values listed above were skipped; the rest of the file is in effect.";
  let b;
  if (f[10] !== q)
    ((b = e(t, { dimColor: !0, children: q })), (f[10] = q), (f[11] = b));
  else b = f[11];
  let N;
  if (f[12] !== v || f[13] !== M)
    ((N = e(ve, { options: M, onChange: v })),
      (f[12] = v),
      (f[13] = M),
      (f[14] = N));
  else N = f[14];
  let st;
  if (f[15] !== O || f[16] !== W || f[17] !== R || f[18] !== b || f[19] !== N)
    ((st = r(de, {
      title: O,
      onCancel: W,
      color: "warning",
      children: [R, b, N],
    })),
      (f[15] = O),
      (f[16] = W),
      (f[17] = R),
      (f[18] = b),
      (f[19] = N),
      (f[20] = st));
  else st = f[20];
  return st;
}
export { at as InvalidSettingsDialog };

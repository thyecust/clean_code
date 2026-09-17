// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../react/react.zhnvc798.js";
import { AppRoot } from "../../../02-功能模块/后台任务-Shell管理/chunk-c7mzes79.js";
import { env as a } from "../../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { e } from "../../react/react.kwtapczy.js";
import { Dn, kn, E, F } from "../React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var G = new WeakMap();
function H(o) {
  let t = G.get(o);
  if (!t)
    ((t = {
      root: o,
      screen: null,
      rendered: !1,
      run: 0,
      keys: 0,
      jobWrites: Promise.resolve(),
    }),
      G.set(o, t));
  return t;
}
function runSteps(o, t, c = {}) {
  let n = H(o),
    d = ++n.run,
    S = c.marksJobBlocked === !0 && !!a.CLAUDE_JOB_DIR;
  return new Promise((u, k) => {
    let h = !1;
    function W(r) {
      if (h || n.run !== d) return;
      ((h = !0), k(r));
    }
    function O(r) {
      let i = n.jobWrites.then(r).catch(() => {
        return;
      });
      return ((n.jobWrites = i), i);
    }
    function C(r) {
      for (let i = r; i < t.length; i++) {
        let R = !1,
          J = !0,
          N = !1,
          g,
          M = !1,
          V = () => {
            if (S && !g && !R && !M)
              g = O(() =>
                import("../../../02-功能模块/后台任务-Shell管理/chunk-rh0xpf1w.js").then((s) =>
                  s.markStartupDialogBlocked(),
                ),
              );
          },
          j = () => {
            let s = g;
            if (((g = void 0), (M = !0), s))
              O(async () => {
                let I = await s;
                if (I)
                  await (
                    await import("../../../02-功能模块/后台任务-Shell管理/chunk-rh0xpf1w.js")
                  ).clearStartupDialogBlocked(I);
              });
          },
          z = (s) => {
            if (R || h || n.run !== d) return;
            if (((R = !0), (N = s === "stop"), j(), !J))
              b(N ? "done" : C(i + 1));
          },
          l;
        try {
          l = t[i](z);
        } catch (s) {
          return (W(s), "failed");
        } finally {
          J = !1;
        }
        if (R) {
          if (N) return "done";
          continue;
        }
        if (l instanceof Promise)
          ((l = l.catch((s) => (W(s), new Promise(() => {})))),
            l.then((s) => {
              if (s !== null && s !== void 0) V();
            }));
        else if (l === null || l === void 0) {
          R = !0;
          continue;
        } else V();
        return {
          key: ++n.keys,
          dialog: l,
          pass: () => z(),
          tornDown: j,
          replaced: j,
          options: c,
        };
      }
      return "done";
    }
    function b(r) {
      if (r === "failed" || n.run !== d) return;
      if (r === "done") {
        (w(n, null), u());
        return;
      }
      if (!n.rendered && r.dialog instanceof Promise) {
        ((n.screen = r),
          r.dialog.then((i) => {
            if (n.screen !== r || n.run !== d) return;
            if (i === null || i === void 0) r.pass();
            else b({ ...r, dialog: i });
          }));
        return;
      }
      w(n, r);
    }
    b(C(0));
  });
}
function showScreen(o, t, c = {}) {
  let n = H(o);
  n.run++;
  let d = () => {},
    S = new Promise((k) => {
      d = k;
    }),
    u = {
      key: ++n.keys,
      dialog: t,
      pass: () => {},
      tornDown: () => {},
      replaced: d,
      options: c,
    };
  return (
    w(n, u),
    {
      update: (k) => {
        if (n.screen?.key === u.key) w(n, { ...u, dialog: k });
      },
      replaced: S,
    }
  );
}
function w(o, t) {
  if (o.screen && o.screen.key !== t?.key) o.screen.replaced();
  if (((o.screen = t), !o.rendered && t === null)) return;
  ((o.rendered = !0), o.root.render(e(K, { tree: o, screen: t })));
}
function K(ie) {
  let L = _(8),
    { tree: v, screen: f } = ie,
    Q,
    X;
  if (L[0] !== v)
    ((Q = () => () => {
      ((v.rendered = !1), v.screen?.tornDown());
    }),
      (X = [v]),
      (L[0] = v),
      (L[1] = Q),
      (L[2] = X));
  else ((Q = L[1]), (X = L[2]));
  if ((E(Q, X), f === null)) {
    return null;
  }
  let A;
  if (L[3] !== f) ((A = e(T, { screen: f })), (L[3] = f), (L[4] = A));
  else A = L[4];
  let Y;
  if (L[5] !== f.key || L[6] !== A)
    ((Y = e(Dn, { fallback: null, children: A }, f.key)),
      (L[5] = f.key),
      (L[6] = A),
      (L[7] = Y));
  else Y = L[7];
  return Y;
}
function T(ae) {
  let U = _(12),
    { screen: p } = ae,
    y = p.dialog instanceof Promise ? kn(p.dialog) : p.dialog,
    P = y !== null && y !== void 0,
    Z,
    x;
  if (U[0] !== p || U[1] !== P)
    ((Z = () => {
      if (!P) p.pass();
    }),
      (x = [p, P]),
      (U[0] = p),
      (U[1] = P),
      (U[2] = Z),
      (U[3] = x));
  else ((Z = U[2]), (x = U[3]));
  if ((E(Z, x), !P)) {
    return null;
  }
  let { session: m, onChangeAppState: D, storageV5: q } = p.options;
  if (!m) {
    return y;
  }
  let B;
  if (U[4] !== D || U[5] !== m)
    ((B = D && ((de) => D(de, m))), (U[4] = D), (U[5] = m), (U[6] = B));
  else B = U[6];
  let ee;
  if (U[7] !== y || U[8] !== m || U[9] !== q || U[10] !== B)
    ((ee = e(AppRoot, {
      session: m,
      storageV5: q,
      onChangeAppState: B,
      children: y,
    })),
      (U[7] = y),
      (U[8] = m),
      (U[9] = q),
      (U[10] = B),
      (U[11] = ee));
  else ee = U[11];
  return ee;
}
export { runSteps, showScreen };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getInkInstanceRegistry } from "./ink-instance-registry.js";
import { rO, U, Os } from "./chunk-r3y9qj3r.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { De, E, dn, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function b() {
  return getInkInstanceRegistry().get(process.stdout)?.invalidatePrevFrame();
}
function L(z) {
  return z.activeOverlays.size > 0;
}
function g(I) {
  return v(I.activeOverlays);
}
function T(K) {
  return hOt(K.activeOverlays);
}
function d(M) {
  for (const j of M.activeOverlays) {
    if (f.has(j)) {
      return !0;
    }
  }
  return !1;
}
function C(k) {
  for (const q of k.activeOverlays) {
    if (l.has(q)) {
      return !0;
    }
  }
  return !1;
}
var A = new Set(["autocomplete"]),
  N = new Set(["above-prompt-input", "above-prompt-select"]),
  f = new Set(["history-search"]),
  l = new Set(["elicitation", "elicitation-url"]),
  mle = 2;
function Rs(n, y) {
  let x = _(8),
    o = y === void 0 ? !0 : y,
    s = De(rO)?.setState,
    S,
    h;
  if (x[0] !== o || x[1] !== n || x[2] !== s)
    ((S = () => {
      if (!o || !s) {
        return;
      }
      return (
        s((c) => {
          if (c.activeOverlays.has(n)) {
            return c;
          }
          let m = new Set(c.activeOverlays);
          return (m.add(n), { ...c, activeOverlays: m });
        }),
        () => {
          s((u) => {
            if (!u.activeOverlays.has(n)) {
              return u;
            }
            let p = new Set(u.activeOverlays);
            return (p.delete(n), { ...u, activeOverlays: p });
          });
        }
      );
    }),
      (h = [n, o, s]),
      (x[0] = o),
      (x[1] = n),
      (x[2] = s),
      (x[3] = S),
      (x[4] = h));
  else ((S = x[3]), (h = x[4]));
  E(S, h);
  let R, w;
  if (x[5] !== o)
    ((R = () => {
      if (!o) {
        return;
      }
      return b;
    }),
      (w = [o]),
      (x[5] = o),
      (x[6] = R),
      (x[7] = w));
  else ((R = x[6]), (w = x[7]));
  dn(R, w);
}
function Een() {
  return U(L);
}
function v(t) {
  for (let e of t) if (!N.has(e)) return !0;
  return !1;
}
function Aen() {
  return U(g);
}
function hOt(t) {
  for (let e of t) if (!A.has(e)) return !0;
  return !1;
}
function eM() {
  return U(T);
}
function p9e() {
  return Os(d) ?? !1;
}
function _Ot() {
  return Os(C) ?? !1;
}
export { mle, Rs, Een, Aen, hOt, eM, p9e, _Ot };

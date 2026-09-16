// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { vt } from "./chunk-tmxdrqem.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { ew, Nl, L_, re, E, vr, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { en } from "./chunk-2c9tjhwd.js";
F();
F();
function y(I) {
  return I !== "";
}
function D(R, v) {
  L_(R) ? (R.key ?? v) : v;
  return r(N, {
    children: [v > 0 && e(t, { dimColor: !0, children: " \xB7 " }), R],
  });
}
function ue(B) {
  let k = _(5),
    { children: m } = B,
    i,
    p;
  if (k[0] !== m) {
    p = en;
    bb0: {
      let T = ew.toArray(m).filter(y);
      if (T.length === 0) {
        p = null;
        break bb0;
      }
      i = T.map(D);
    }
    ((k[0] = m), (k[1] = i), (k[2] = p));
  } else ((i = k[1]), (p = k[2]));
  if (p !== en) return p;
  let b;
  if (k[3] !== i) ((b = e(N, { children: i })), (k[3] = i), (k[4] = b));
  else b = k[4];
  return b;
}
F();
var P = 800;
function Y0(c, u, o, s = P) {
  let a = vt(),
    l = C(0),
    n = C(void 0),
    S = vr(() => c(!1)),
    f = re(() => {
      if (n.current) (n.current(), (n.current = void 0));
    }, []);
  return (
    E(
      () => () => {
        if (n.current) (f(), S());
      },
      [f],
    ),
    re(() => {
      let d = Date.now();
      if (d - l.current <= s && n.current !== void 0) (f(), c(!1), u());
      else
        (o?.(),
          c(!0),
          f(),
          (n.current = a.setTimeout(() => {
            (c(!1), (n.current = void 0));
          }, s)));
      l.current = d;
    }, [c, u, o, f, a, s])
  );
}
export { ue, Y0 };

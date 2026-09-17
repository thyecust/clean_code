// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getInkInstanceRegistry } from "./ink-instance-registry.js";
import { ga, Kx, I9e, Z0 } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { De, _te, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function AltScreenContainer(N) {
  let a = _(13),
    { children: d, mouseTracking: A, background: n } = N,
    c = A === void 0 ? "full" : A,
    U = De(Kx),
    r = De(Z0),
    t = De(I9e),
    M,
    P;
  if (a[0] !== n || a[1] !== t || a[2] !== r)
    ((M = () => {
      if (!r || !n) {
        return;
      }
      return (
        r(t.set("background", n)),
        () => {
          r(t.reset("background"));
        }
      );
    }),
      (P = [r, t, n]),
      (a[0] = n),
      (a[1] = t),
      (a[2] = r),
      (a[3] = M),
      (a[4] = P));
  else ((M = a[3]), (P = a[4]));
  _te(M, P);
  let R, g;
  if (a[5] !== t || a[6] !== c || a[7] !== r)
    ((R = () => {
      let f = getInkInstanceRegistry().get(process.stdout);
      if (!r) {
        return;
      }
      return (
        r(t.set("altScreen") + t.set("mouse", c)),
        f?.setAltScreenActive(!0, c),
        () => {
          (f?.setAltScreenActive(!1), f?.clearTextSelection());
          let j = t.reset("mouse");
          let k = t.reset("altScreen");
          let q = k && !f?.hasUnmounted ? t.reassert("extendedKeys") : "";
          r(j + k + q);
        }
      );
    }),
      (g = [r, t, c]),
      (a[5] = t),
      (a[6] = c),
      (a[7] = r),
      (a[8] = R),
      (a[9] = g));
  else ((R = a[8]), (g = a[9]));
  _te(R, g);
  const u = U?.rows ?? 24;
  let x;
  if (a[10] !== d || a[11] !== u)
    ((x = e(ga, {
      flexDirection: "column",
      height: u,
      width: "100%",
      flexShrink: 0,
      children: d,
    })),
      (a[10] = d),
      (a[11] = u),
      (a[12] = x));
  else x = a[12];
  return x;
}
export { AltScreenContainer };

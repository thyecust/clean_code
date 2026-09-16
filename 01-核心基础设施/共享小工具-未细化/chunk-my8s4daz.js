// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { b, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { ga } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { KUn, KB, XB } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { sl } from "../../02-功能模块/键位绑定(Keybindings)/chunk-qy43nqgh.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { re, dn, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function eee({
  scope: t,
  bindings: i,
  active: o = !0,
  preemptive: a = !1,
  swallowAll: f = !1,
  claimFocus: l = !1,
  ref: d,
  flexGrow: B = 0,
  flexDirection: D,
  flexShrink: O,
  children: R,
}) {
  let y = C(null),
    p = sl(),
    g = C([]);
  g.current = o ? i : [];
  let H = re((r) => w(r, g.current), []),
    A = M(t, o, a, f, g.current),
    K = o && a && Boolean(t),
    h = K && f;
  (dn(() => {
    if (!p) return;
    let r = y.current;
    if (!r) return;
    let {
        decls: c,
        scopesChanged: s,
        preemptiveScopes: m,
        swallowAll: u,
      } = p.keyHandlerRegistry,
      E = { scope: t, active: o, preemptive: a, swallowAll: f, entriesRef: g };
    if ((c.set(r, E), K && t)) {
      if ((v(m, t), h)) v(u, t);
    }
    return (
      s.emit(),
      () => {
        if ((c.delete(r), K && t)) {
          if ((k(m, t), h)) k(u, t);
        }
        s.emit();
      }
    );
  }, [p, t, K, h, A]),
    dn(() => {
      if (!l) return;
      let r = y.current;
      if (!r) return;
      let c = XB(r),
        s = !1,
        m = () => {
          if (s) return;
          let u = y.current;
          if (!u) return;
          let E = c.activeElement;
          if (E && KB(E, u)) return;
          s = !0;
          try {
            c.focus(u);
          } finally {
            s = !1;
          }
        };
      return (c.pushAutoFocusFallback(r), m(), c.subscribe(m));
    }, [l]));
  let x = C(!1);
  dn(() => {
    return;
  }, [t, l, p]);
  let S = re(
    (r) => {
      if (((y.current = r), typeof d === "function")) d(r);
      else if (d) d.current = r;
    },
    [d],
  );
  return e(ga, {
    ref: S,
    keybindingScope: t,
    onAction: H,
    tabIndex: l ? -1 : void 0,
    flexGrow: B,
    flexDirection: D,
    flexShrink: O,
    children: R,
  });
}
function w(t, i) {
  for (let o of i) {
    if (o.action !== t.action) continue;
    if (o.chordOnly && !t.isChordCompletion) continue;
    if (o.run() === !1) continue;
    t.consume();
    return;
  }
}
function v(t, i) {
  t.set(i, (t.get(i) ?? 0) + 1);
}
function k(t, i) {
  let o = (t.get(i) ?? 0) - 1;
  if (o <= 0) t.delete(i);
  else t.set(i, o);
}
function M(t, i, o, a, f) {
  return b([
    t ?? "",
    i,
    o,
    a,
    f.map((l) => [l.action ?? "", l.hint ?? "", Boolean(l.chordOnly)]),
  ]);
}
export { eee };

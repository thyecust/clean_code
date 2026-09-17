// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, dn, V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { Fpe, $pe } from "./键位绑定(Keybindings).sanfja6a.js";
function buildInkKeyEvent(n) {
  let t = G[n.name],
    o = {
      upArrow: t === "upArrow",
      downArrow: t === "downArrow",
      leftArrow: t === "leftArrow",
      rightArrow: t === "rightArrow",
      pageDown: t === "pageDown",
      pageUp: t === "pageUp",
      wheelUp: !1,
      wheelDown: !1,
      home: t === "home",
      end: t === "end",
      return: t === "return",
      escape: t === "escape",
      tab: t === "tab",
      backspace: t === "backspace",
      delete: t === "delete",
      ctrl: n.ctrl,
      shift: n.shift,
      super: n.superKey,
      meta: n.meta,
    };
  return {
    input:
      n.name === "enter"
        ? `
`
        : [...n.key].length === 1
          ? n.key
          : "",
    key: o,
  };
}
var G = {
    up: "upArrow",
    down: "downArrow",
    left: "leftArrow",
    right: "rightArrow",
    pagedown: "pageDown",
    pageup: "pageUp",
    home: "home",
    end: "end",
    return: "return",
    escape: "escape",
    tab: "tab",
    backspace: "backspace",
    delete: "delete",
  },
  W = [
    ["escape", "escape"],
    ["return", "return"],
    ["tab", "tab"],
    ["backspace", "backspace"],
    ["delete", "delete"],
    ["upArrow", "up"],
    ["downArrow", "down"],
    ["leftArrow", "left"],
    ["rightArrow", "right"],
    ["pageUp", "pageup"],
    ["pageDown", "pagedown"],
    ["wheelUp", "wheelup"],
    ["wheelDown", "wheeldown"],
    ["home", "home"],
    ["end", "end"],
  ];
function w(n, t) {
  return {
    name:
      W.find(([p]) => t[p])?.[1] ??
      (n ===
      `
`
        ? "enter"
        : ""),
    key: n,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super,
  };
}
F();
function Z() {}
function createKeyHandlerRegistry() {
  return {
    decls: new WeakMap(),
    scopesChanged: Le(),
    preemptiveScopes: new Map(),
    swallowAll: new Map(),
    keyDispatchTrace: Le(),
  };
}
var u = Qt(null);
function KeybindingProvider(de) {
  let l = _(24),
    {
      bindings: a,
      pendingChordRef: P,
      pendingChord: N,
      setPendingChord: H,
      activeContexts: E,
      registerActiveContext: M,
      unregisterActiveContext: S,
      handlerRegistryRef: T,
      preDispatchRef: K,
      keyHandlerRegistry: j,
      children: U,
    } = de,
    h;
  if (l[0] !== a || l[1] !== P)
    ((h = (le, ce, ge) => $pe(w(le, ce), ge, a, P.current)),
      (l[0] = a),
      (l[1] = P),
      (l[2] = h));
  else h = l[2];
  let b;
  if (l[3] !== a) ((b = (ye, ue) => Fpe(ye, ue, a)), (l[3] = a), (l[4] = b));
  else b = l[4];
  let f;
  if (l[5] !== T)
    ((f = (s) => {
      let c = T.current;
      if (!c) {
        return Z;
      }
      if (!c.has(s.action)) c.set(s.action, new Set());
      return (
        c.get(s.action).add(s),
        () => {
          let O = c.get(s.action);
          if (O) {
            if ((O.delete(s), O.size === 0)) c.delete(s.action);
          }
        }
      );
    }),
      (l[5] = T),
      (l[6] = f));
  else f = l[6];
  let x;
  if (l[7] !== K)
    ((x = (z) => (K.current.add(z), () => K.current.delete(z))),
      (l[7] = K),
      (l[8] = x));
  else x = l[8];
  let Y;
  if (
    l[9] !== E ||
    l[10] !== a ||
    l[11] !== j ||
    l[12] !== N ||
    l[13] !== M ||
    l[14] !== H ||
    l[15] !== h ||
    l[16] !== b ||
    l[17] !== f ||
    l[18] !== x ||
    l[19] !== S
  )
    ((Y = {
      resolve: h,
      setPendingChord: H,
      getDisplayText: b,
      bindings: a,
      pendingChord: N,
      activeContexts: E,
      registerActiveContext: M,
      unregisterActiveContext: S,
      registerHandler: f,
      registerPreDispatch: x,
      keyHandlerRegistry: j,
    }),
      (l[9] = E),
      (l[10] = a),
      (l[11] = j),
      (l[12] = N),
      (l[13] = M),
      (l[14] = H),
      (l[15] = h),
      (l[16] = b),
      (l[17] = f),
      (l[18] = x),
      (l[19] = S),
      (l[20] = Y));
  else Y = l[20];
  let L = Y,
    I;
  if (l[21] !== U || l[22] !== L)
    ((I = e(u.Provider, { value: L, children: U })),
      (l[21] = U),
      (l[22] = L),
      (l[23] = I));
  else I = l[23];
  return I;
}
function useKeybindingContext() {
  return De(u);
}
function useActiveKeybindingContext(y, J) {
  let me = _(5),
    v = J === void 0 ? !0 : J,
    g = useKeybindingContext(),
    Q,
    X;
  if (me[0] !== y || me[1] !== v || me[2] !== g)
    ((Q = () => {
      if (!g || !v) {
        return;
      }
      return (
        g.registerActiveContext(y),
        () => {
          g.unregisterActiveContext(y);
        }
      );
    }),
      (X = [y, g, v]),
      (me[0] = y),
      (me[1] = v),
      (me[2] = g),
      (me[3] = Q),
      (me[4] = X));
  else ((Q = me[3]), (X = me[4]));
  dn(Q, X);
}
export { buildInkKeyEvent, createKeyHandlerRegistry, KeybindingProvider, useKeybindingContext, useActiveKeybindingContext };

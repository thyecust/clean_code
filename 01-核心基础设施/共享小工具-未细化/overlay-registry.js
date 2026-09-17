// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getInkInstanceRegistry } from "./ink-instance-registry.js";
import { AppStateContext, useAppStateSelector, useAppStateSelectorUnchecked } from "./app-state-context.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { De, E, dn, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
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
  return hasNonAutocompleteOverlay(K.activeOverlays);
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
  OVERLAY_RESERVED_ROWS = 2;
function useActiveOverlay(n, y) {
  let x = _(8),
    o = y === void 0 ? !0 : y,
    s = De(AppStateContext)?.setState,
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
function useHasAnyOverlay() {
  return useAppStateSelector(L);
}
function v(t) {
  for (let e of t) if (!N.has(e)) return !0;
  return !1;
}
function useHasNonAbovePromptInputOverlay() {
  return useAppStateSelector(g);
}
function hasNonAutocompleteOverlay(t) {
  for (let e of t) if (!A.has(e)) return !0;
  return !1;
}
function useHasNonAutocompleteOverlay() {
  return useAppStateSelector(T);
}
function useIsHistorySearchOpen() {
  return useAppStateSelectorUnchecked(d) ?? !1;
}
function useIsElicitationOpen() {
  return useAppStateSelectorUnchecked(C) ?? !1;
}
export { OVERLAY_RESERVED_ROWS, useActiveOverlay, useHasAnyOverlay, useHasNonAbovePromptInputOverlay, hasNonAutocompleteOverlay, useHasNonAutocompleteOverlay, useIsHistorySearchOpen, useIsElicitationOpen };

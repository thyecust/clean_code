// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { qrt } from "../../00-第三方库/lodash/lodash.207999qb.js";
function createFieldUpdater(r, t) {
  return (e) => r((S) => c(S, t, S[t], e(S[t])));
}
function createPartialStateUpdater(r) {
  return (t) =>
    r((e) => {
      let S = t(e);
      return Object.is(S, e) ? e : { ...e, ...S };
    });
}
function createFieldAccessor(r, t, e) {
  return { get: () => r()[e], set: createFieldUpdater(t, e) };
}
function defineStoreField(r, t) {
  return (e, S) => ({
    get: () => e()[r] ?? t,
    set: (a) =>
      S((s) => {
        let n = s[r] ?? t;
        return c(s, r, n, a(n));
      }),
  });
}
function createLocalStore(r) {
  let t = r;
  return {
    get: () => t,
    set: (e) => {
      t = e(t);
    },
  };
}
function createStore(r, t) {
  let e = r,
    S = new Set(),
    a = t && qrt(t),
    s = () => e;
  return {
    getSnapshot: s,
    getState: s,
    setState: (n) => {
      let o = e,
        i = n(o);
      if (Object.is(i, o)) return;
      ((e = i), a?.({ newState: i, oldState: o }));
      for (let u of S) u();
    },
    subscribe: (n) => {
      let o = qrt(n);
      return (S.add(o), () => S.delete(o));
    },
  };
}
function c(r, t, e, S) {
  return Object.is(S, e) ? r : { ...r, [t]: S };
}
export { createFieldUpdater, createPartialStateUpdater, createFieldAccessor, defineStoreField, createLocalStore, createStore };

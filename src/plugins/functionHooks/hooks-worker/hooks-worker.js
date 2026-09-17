// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { encodeMatcherTable, setHooksLogger, linkAbortSignal, getErrorMessage, formatNotAwaitedFailure, createHooksManager, takeFromMap } from "./chunk-0t0sve49.js";
import { errorMessage } from "./chunk-h4f48kbj.js";
import "./analytics-fields.js";
import { formatAbortReason, HooksError, getErrorCauseString } from "./chunk-bzqqe6xh.js";
import "./string-utils.js";
import { workerData } from "worker_threads";
var H = (t) => ({
  post: (n) => t.postMessage(n),
  ports: new Map(),
  pendingNext: new Map(),
  nextCounter: 0,
  opCounter: 0,
});
function g(t, n) {
  let e = t.opFailureOf(n);
  if (!e) return getErrorMessage(n);
  return formatNotAwaitedFailure(e);
}
var O = (t, n) => {
  process.on("unhandledRejection", (e) =>
    t.post({ type: "unhandled", error: g(n, e) }),
  );
};
var x = ({
  pending: t,
  key: n,
  send: e,
  onAbort: u,
  signal: c,
  notPlainMessage: d,
}) =>
  new Promise((a, p) => {
    let o = () => {};
    t.set(n, {
      resolve: (r) => {
        (o(), a(r));
      },
      reject: (r) => {
        (o(), p(r));
      },
    });
    try {
      e();
    } catch (r) {
      (t.delete(n), p(new HooksError(d(r))));
      return;
    }
    o = linkAbortSignal(c, { abort: u });
  });
var T = (t, n) => (e, u) => {
  let c = ++t.nextCounter;
  return x({
    pending: t.pendingNext,
    key: `${n}:${c}`,
    send: () => t.post({ type: "next", id: n, nextId: c, argument: e }),
    onAbort: () =>
      t.post({ type: "next_abort", id: n, nextId: c, reason: formatAbortReason(u) }),
    signal: u,
    notPlainMessage: (d) => `next() argument is not plain data: ${errorMessage(d)}`,
  });
};
function I(
  t,
  { environmentId: n, op: e, args: u, signal: c, dispatchId: d, serving: a },
) {
  let p = t.ports.get(n);
  if (!p)
    return Promise.reject(new HooksError(`${e}: the plugin's environment is unloaded`));
  let { port: o } = p,
    r = ++t.opCounter;
  return x({
    pending: p.pendingOps,
    key: r,
    send: () =>
      o.postMessage({
        type: "op",
        opId: r,
        dispatchId: d,
        serving: a,
        op: e,
        args: u,
      }),
    onAbort: c
      ? () => o.postMessage({ type: "op_abort", opId: r, reason: formatAbortReason(c) })
      : () => {},
    signal: c,
    notPlainMessage: (i) => `${e}: arguments are not plain data: ${errorMessage(i)}`,
  });
}
function w(t) {
  for (let n of t.pendingOps.values())
    n.reject(new HooksError("the plugin's environment was unloaded"));
  t.pendingOps.clear();
}
function E(t) {
  if (!(typeof t === "object" && t !== null && "stamp" in t)) return;
  let e = t.stamp;
  return e instanceof SharedArrayBuffer ? new Int32Array(e) : void 0;
}
function R(t) {
  let n = H(t),
    { post: e, ports: u, pendingNext: c } = n,
    d = new Map();
  setHooksLogger({
    log: (p, o) => e({ type: "log", text: p, level: o }),
    hookFailed: (p) => e({ type: "hook_failed", ...p }),
  });
  let a = createHooksManager((p) => I(n, p), E(workerData));
  (O(n, a),
    (t.onmessage = (p) => {
      let o = p.data;
      switch (o.type) {
        case "ping":
          e({ type: "pong", n: o.n });
          return;
        case "load": {
          let { environmentId: r, port: i } = o,
            f = new Map();
          (u.set(r, { port: i, pendingOps: f }),
            (i.onmessage = (m) => {
              let s = m.data;
              if (s.type === "flush") {
                i.postMessage({ type: "flushed", flushId: s.flushId });
                return;
              }
              let k = takeFromMap(f, s.opId);
              s.type === "op_result"
                ? k?.resolve(s.value)
                : k?.reject(new HooksError(s.error));
            }),
            a.load(r, o.args).then(
              (m) => {
                e({
                  type: "loaded",
                  environmentId: r,
                  events: m.events,
                  matchers: encodeMatcherTable(m.matchers),
                });
              },
              (m) => {
                (u.delete(r), i.close());
                let s = getErrorCauseString(m);
                e({
                  type: "load_error",
                  environmentId: r,
                  error: errorMessage(m),
                  ...(s !== void 0 && { cause: s }),
                });
              },
            ));
          return;
        }
        case "unload": {
          a.unload(o.environmentId);
          let r = takeFromMap(u, o.environmentId);
          if (r) (r.port.close(), w(r));
          return;
        }
        case "build": {
          let { environmentId: r } = o;
          try {
            (a.build(r, o.table, o.suppressed),
              e({ type: "built", environmentId: r }));
          } catch (i) {
            e({ type: "built_error", environmentId: r, error: errorMessage(i) });
          }
          return;
        }
        case "call": {
          let { callId: r, environmentId: i, call: f, callers: m } = o;
          Promise.resolve()
            .then(() => a.callInterface(i, f, { callId: r, callers: m }))
            .then(
              (s) => {
                try {
                  e({ type: "call_result", callId: r, value: s });
                } catch (k) {
                  e({
                    type: "call_error",
                    callId: r,
                    error: `$.${f.name}.${f.method} returned a value that is not plain data: ${errorMessage(k)}`,
                  });
                }
              },
              (s) => e({ type: "call_error", callId: r, error: errorMessage(s) }),
            );
          return;
        }
        case "dispatch": {
          let { id: r, event: i, payload: f, environments: m, origin: s } = o,
            k = new AbortController();
          (d.set(r, k),
            Promise.resolve()
              .then(() =>
                a.dispatch(
                  { id: r, event: i, payload: f, environments: m, origin: s },
                  T(n, r),
                  k.signal,
                ),
              )
              .then(
                (y) => {
                  try {
                    e({ type: "result", id: r, ...y });
                  } catch (b) {
                    e({
                      type: "error",
                      id: r,
                      error: `result not cloneable: ${errorMessage(b)}`,
                    });
                  }
                },
                (y) => e({ type: "error", id: r, error: errorMessage(y) }),
              )
              .finally(() => d.delete(r)));
          return;
        }
        case "abort":
          d.get(o.id)?.abort(new HooksError(o.reason));
          return;
        case "press": {
          let { pressId: r, environmentId: i, handle: f, e: m } = o;
          Promise.resolve()
            .then(() => a.press(i, f, m))
            .then(
              () => e({ type: "press_result", pressId: r }),
              (s) => e({ type: "press_error", pressId: r, error: errorMessage(s) }),
            );
          return;
        }
        case "press_release":
          a.releasePresses(o.environmentId, o.handles);
          return;
        case "next_result":
        case "next_error": {
          let r = takeFromMap(c, `${o.id}:${o.nextId}`);
          o.type === "next_result"
            ? r?.resolve(o.result)
            : r?.reject(new HooksError(o.error));
          return;
        }
      }
    }));
}
R(self);
